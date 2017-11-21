'use strict'

const {Shm} = require('wayland-server-bindings-runtime')

const WlSurfaceRequests = require('./protocol/wayland/WlSurfaceRequests')
const WlCallback = require('./protocol/wayland/WlCallback')
const LocalCallback = require('./LocalCallback')
const ShimCallback = require('./ShimCallback')
const H264Encoder = require('./H264Encoder')

module.exports = class ShimSurface extends WlSurfaceRequests {

  /**
   * @param grSurfaceProxy
   * @param grSurfaceResource
   * @return {module.ShimSurface}
   */
  static create (grSurfaceProxy, grSurfaceResource) {
    const rtcBufferFactory = grSurfaceProxy.connection._rtcBufferFactory
    return new ShimSurface(grSurfaceProxy, rtcBufferFactory, grSurfaceResource)
  }

  /**
   * @private
   * @param grSurfaceProxy
   * @param rtcBufferFactory
   * @param grSurfaceResource
   */
  constructor (grSurfaceProxy, rtcBufferFactory) {
    super()
    this.proxy = grSurfaceProxy
    this.rtcBufferFactory = rtcBufferFactory

    this.pendingBuffer = null
    this.buffer = null
    this.synSerial = 0
    this.ackSerial = 0
    this.h264Encoder = null

    // use a single buffer to communicate with the browser. Contents of the buffer will be copied when send.
    this.localRtcDcBuffer = this.rtcBufferFactory.createLocalRtcDcBuffer()

    this.pendingBufferDestroyListener = () => {
      this.pendingBuffer = null
    }
    this.bufferDestroyListener = () => {
      this.buffer = null
    }
  }

  destroy (resource) {
    this.proxy.destroy()
    resource.destroy()
    this.localRtcDcBuffer.destroy()
    this.localRtcDcBuffer = null
  }

  attach (resource, buffer, x, y) {
    // TODO listen for buffer destruction & signal buffer proxy & remove local pending buffer
    if (this.pendingBuffer) {
      this.pendingBuffer.removeDestroyListener(this.pendingBufferDestroyListener)
    }
    this.pendingBuffer = buffer
    if (this.pendingBuffer) {
      this.pendingBuffer.addDestroyListener(this.pendingBufferDestroyListener)
      this.proxy.attach(this.localRtcDcBuffer.grBufferProxy, x, y)
    } else {
      this.proxy.attach(null, x, y)
    }
  }

  damage (resource, x, y, width, height) {
    this.proxy.damage(x, y, width, height)
  }

  frame (resource, callback) {
    const callbackProxy = this.proxy.frame()
    const localCallback = LocalCallback.create()
    callbackProxy.listener = localCallback

    const shimCallback = ShimCallback.create(callbackProxy)
    localCallback.resource = WlCallback.create(resource.client, 4, callback, shimCallback, null)
  }

  setOpaqueRegion (resource, region) {
    const regionProxy = region === null ? null : region.implementation.proxy
    this.proxy.setOpaqueRegion(regionProxy)
  }

  setInputRegion (resource, region) {
    const regionProxy = region === null ? null : region.implementation.proxy
    this.proxy.setInputRegion(regionProxy)
  }

  encodeBuffer (buffer, synSerial) {
    return new Promise((resolve, reject) => {
      const shm = Shm.get(buffer)
      if (shm === null) {
        reject(new Error('Unsupported buffer format.'))
      }

      const bufferWidth = shm.getWidth()
      const bufferHeight = shm.getHeight()

      // TODO Support ARGB by splitting out the
      // the alpha channel as a greyscale yuv and send it as a second h264 frame. We can then reconstruct in the browser
      // into RGBA using the grayscale as the alpha channel with the use of a simple webgl shader.

      const pixelBuffer = shm.getData().reinterpret(bufferWidth * bufferHeight * 4)

      // TODO how to dynamically update the pipeline video resolution?
      if (!this.h264Encoder || this.h264Encoder.width !== bufferWidth || this.h264Encoder.height !== bufferHeight) {
        this.h264Encoder = H264Encoder.create(bufferWidth, bufferHeight)
        // BGRx because of little endian blob
        this.h264Encoder.src.setCapsFromString('video/x-raw,format=BGRA,width=' + bufferWidth + ',height=' + bufferHeight + ',framerate=30/1')
        this.h264Encoder.pipeline.play()
      }

      this.h264Encoder.src.push(pixelBuffer)
      // TODO use gst_app_sink_set_callbacks instead. Requires modifications to the node-gstreamer-superficial lib.

      const frame = {opaque: null, alpha: null}

      this.h264Encoder.sink.pull((opaqueH264Nal) => {
        if (opaqueH264Nal) {
          opaqueH264Nal.writeUInt32LE(synSerial, 0, false)
          frame.opaque = opaqueH264Nal

          if (frame.opaque && frame.alpha) {
            resolve(frame)
          }
        } else {
          // TODO error?
        }
      })

      this.h264Encoder.alpha.pull((alphaH264Nal) => {
        if (alphaH264Nal) {
          alphaH264Nal.writeUInt32LE(synSerial, 0, false)
          frame.alpha = alphaH264Nal

          if (frame.opaque && frame.alpha) {
            resolve(frame)
          }
        } else {
          // TODO error?
        }
      })
    })
  }

  sendBuffer (frame, synSerial) {
    if (this.localRtcDcBuffer === null) {
      return
    }

    if (this.localRtcDcBuffer.dataChannel.readyState === 'open') {
      // console.log('sending buffer')
      const header = Buffer.allocUnsafe(4)
      // set first bit == indicate alpha frame after opaque frame
      // set opaque frame length
      header.writeUInt8(0x80, 0, true)
      header.writeUInt16BE(frame.opaque.length, 2, true)
      const frameBuffer = Buffer.concat([header, frame.opaque, frame.alpha], header.length + frame.opaque.length + frame.alpha.length)
      this.localRtcDcBuffer.dataChannel.send(frameBuffer.buffer.slice(frameBuffer.byteOffset, frameBuffer.byteOffset + frameBuffer.byteLength))
    } else {
      // console.log('buffer channel not yet open')
      this.localRtcDcBuffer.dataChannel.onopen = () => {
        this.localRtcDcBuffer.dataChannel.onopen = null
        // make sure we don't send an old buffer
        if (synSerial >= this.synSerial) {
          this.sendBuffer(frame, synSerial)
        }
      }
    }
    // if the ack times out & no newer serial is expected, we can retry sending the buffer contents
    setTimeout(() => {
      // If the syn serial at the time the timer was created is greater than the latest received ack serial and no newer serial is expected,
      // then we have not received an ack that matches or is newer than the syn we're checking. We resend the frame.
      if (synSerial > this.ackSerial && synSerial === this.synSerial) {
        // console.log('send timed out. resending')
        this.sendBuffer(frame, synSerial)
      }
      // TODO dynamically adjust to expected roundtrip time which could (naively) be calculated by measuring the latency
      // between a (syn & ack)/2 + frame bandwidth.
    }, 500)
  }

  commit (resource) {
    if (this.buffer) {
      this.buffer.release()
      this.buffer.removeDestroyListener(this.bufferDestroyListener)
    }

    if (this.pendingBuffer) {
      this.pendingBuffer.removeDestroyListener(this.pendingBufferDestroyListener)
    }
    this.buffer = this.pendingBuffer
    this.pendingBuffer = null
    // TODO handle destruction of committed buffer?

    if (this.buffer && this.localRtcDcBuffer) {
      this.buffer.addDestroyListener(this.bufferDestroyListener)
      this.localRtcDcBuffer.ack = (serial) => {
        if (serial > this.ackSerial) {
          this.ackSerial = serial
        } // else we received an outdated ack serial, ignore it.
      }

      this.synSerial++
      const currentSynSerial = this.synSerial

      const shm = Shm.get(this.buffer)
      const bufferWidth = shm.getWidth()
      const bufferHeight = shm.getHeight()
      this.localRtcDcBuffer.rtcDcBufferProxy.syn(currentSynSerial, bufferWidth, bufferHeight)
      this.encodeBuffer(this.buffer, currentSynSerial).then((frame) => {
        this.sendBuffer(frame, currentSynSerial)
      }).catch((error) => {
        console.log(error)
        // TODO Failed to encode buffer. What to do here?
      })
    }

    this.proxy.commit()
  }

  setBufferTransform (resource, transform) {
    this.proxy.setBufferTransform(transform)
  }

  setBufferScale (resource, scale) {
    this.proxy.setBufferScale(scale)
  }

  damageBuffer (resource, x, y, width, height) {
    this.proxy.damageBuffer(x, y, width, height)
  }
}

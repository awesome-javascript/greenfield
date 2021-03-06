// Copyright 2019 Erik De Rijcke
//
// This file is part of Greenfield.
//
// Greenfield is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Greenfield is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with Greenfield.  If not, see <https://www.gnu.org/licenses/>.

'use strict'

import WlBufferResource from './protocol/WlBufferResource'
import StreamingBuffer from './remotestreaming/StreamingBuffer'
import UUIDUtil from './UUIDUtil'
import { WebFD } from 'westfield-runtime-common'
import RtcOutOfBandChannel from './RtcOutOfBandChannel'

/**
 * Conceptual webRTC server socket as webRTC doesn't have the notion of server/client model.
 * Clients (application endpoints) announce their desire to create a new RTC peer connection here.
 */
class RtcSocket {
  /**
   *
   * @param {Session}session
   * @returns {RtcSocket}
   */
  static create (session) {
    const rtcSocket = new RtcSocket(session)
    session.messageHandlers['RTCSignaling'] = rtcSocket
    return rtcSocket
  }

  /**
   * @param {Session}session
   */
  constructor (session) {
    /**
     * @type {Session}
     * @private
     */
    this._session = session
    /**
     * @type {Object.<string,RTCPeerConnection>}
     * @private
     */
    this._appEndpointConnections = {}
  }

  async ['connect'] ({ remotePeerId }) {
    if (this._appEndpointConnections[remotePeerId]) {
      return
    }

    // TODO show to user available app-endpoints(?)
    // TODO show to user status of app-endpoints (peer connection state)(?)

    // TODO rtc connection options setup
    const peerConnection = new window.RTCPeerConnection()
    this._appEndpointConnections[remotePeerId] = peerConnection
    peerConnection.ondatachannel = (event) => this._onDataChannel(event.channel, remotePeerId, peerConnection)

    peerConnection.onnegotiationneeded = async () => {
      DEBUG && console.log(`[webrtc-peer-connection: ${remotePeerId}] - negotiation needed. Sending sdp offer.`)
      await this._sendOffer(remotePeerId, peerConnection)
    }

    peerConnection.onicecandidate = evt => {
      const candidate = evt.candidate
      if (candidate !== null) {
        DEBUG && console.log(`[webrtc-peer-connection: ${remotePeerId}] - sending local ice candidate: ${candidate}.`)
        this._sendRTCSignal(remotePeerId, {
          object: 'RTCSignaling',
          method: 'iceCandidate',
          args: {
            remotePeerId: this._session.compositorSessionId,
            candidate
          }
        })
      }
    }

    // TODO figure out what the lifecycle of a peer connection is in regards to it's connection state.
    peerConnection.onconnectionstatechange = (event) => {
      switch (peerConnection.connectionState) {
        case 'connected':
          DEBUG && console.log(`[webrtc-peer-connection: ${remotePeerId}] - open.`)
          break
        case 'disconnected':
          DEBUG && console.log(`[webrtc-peer-connection: ${remotePeerId}] - disconnected.`)
          break
        case 'failed':
          DEBUG && console.log(`[webrtc-peer-connection: ${remotePeerId}] - failed.`)
          delete this._appEndpointConnections[remotePeerId]
          break
        case 'closed':
          DEBUG && console.log(`[webrtc-peer-connection: ${remotePeerId}] - closed.`)
          delete this._appEndpointConnections[remotePeerId]
          break
      }
    }
  }

  /**
   * @param {WebFD}webFD
   * @return {Promise<ArrayBuffer>}
   * @private
   */
  async _getShmTransferable (webFD) {
    // TODO get all contents at once from remote endpoint and put it in an array buffer
    // TODO do this on each invocation
    // return new ArrayBuffer(0)

    throw new Error('shm transferable from endpoint not yet implemented.')
  }

  /**
   * @param {WebFD}webFD
   * @return {Promise<void>}
   * @private
   */
  async _closeShmTransferable (webFD) {
    // TODO signal the remote end (if any) that it should close the fd
    throw new Error('close shm transferable from endpoint not yet implemented.')
  }

  /**
   * @param {WebFD}webFD
   * @return {Promise<MessagePort>}
   * @private
   */
  async _getPipeTransferable (webFD) {
    // TODO setup an open connection with the remote endpoint and transfer data on demand
    // const messageChannel = new MessageChannel()
    // TODO use port1 to interface with the remote endpoint
    // TODO only do this once until the messageChannel is closed
    // return messageChannel.port2

    throw new Error('pipe transferable from endpoint not yet implemented.')
  }

  /**
   * @param {WebFD}webFD
   * @return {Promise<void>}
   * @private
   */
  async _closePipeTransferable (webFD) {
    // TODO signal the remote end (if any) that it should close the fd
    // TODO close the messageChannel object

    throw new Error('close pipe transferable from endpoint not yet implemented.')
  }

  /**
   * @param {RTCDataChannel}dataChannel
   * @param {string}appEndpointSessionId
   * @param peerConnection
   * @private
   */
  _onDataChannel (dataChannel, appEndpointSessionId, peerConnection) {
    DEBUG && console.log(`[webrtc-peer-connection: ${appEndpointSessionId}] - data channel created.`)

    dataChannel.binaryType = 'arraybuffer'
    dataChannel.onopen = () => {
      DEBUG && console.log(`[webrtc-peer-connection: ${appEndpointSessionId}] - data channel open.`)

      const client = this._session.display.createClient()
      client.onClose().then(() => DEBUG && console.log(`[client] - closed.`))

      peerConnection.oniceconnectionstatechange = () => {
        if (peerConnection.iceConnectionState === 'disconnected') {
          DEBUG && console.log(`[webrtc-peer-connection: ${appEndpointSessionId}] - ice connection state: disconnected.`)
          client.close()
        }
      }

      dataChannel.onclose = () => {
        DEBUG && console.log(`[webrtc-peer-connection: ${appEndpointSessionId}] - data channel closed.`)
        client.close()
      }
      dataChannel.onerror = (event) => DEBUG && console.log(`[webrtc-peer-connection: ${appEndpointSessionId}] - data channel error: ${event.message}.`)

      /**
       * @param {Array<{buffer: ArrayBuffer, fds: Array<WebFD>}>}wireMessages
       */
      client.connection.onFlush = (wireMessages) => this._flushWireMessages(client, dataChannel, wireMessages)

      const rtcOutOfBandChannel = RtcOutOfBandChannel.create((sendBuffer) => {
        if (dataChannel.readyState === 'open') {
          try {
            dataChannel.send(sendBuffer)
          } catch (e) {
            console.log(e.message)
            client.close()
          }
        }
      })
      this._setupClientOutOfBandHandlers(client, rtcOutOfBandChannel)

      dataChannel.onmessage = (event) => this._handleDataChannelEvent(client, event, rtcOutOfBandChannel)
    }
  }

  /**
   * @param {Client}client
   * @param {RtcOutOfBandChannel}rtcOutOfBandChannel
   * @private
   */
  _setupClientOutOfBandHandlers (client, rtcOutOfBandChannel) {
    // send out-of-band resource destroy. opcode: 1
    client.addResourceDestroyListener((resource) => rtcOutOfBandChannel.send(1, new Uint32Array([resource.id]).buffer))

    // listen for buffer creation. opcode: 2
    rtcOutOfBandChannel.setListener(2, (message) => {
      const wlBufferResource = new WlBufferResource(client, new Uint32Array(message)[0], 1)
      wlBufferResource.implementation = StreamingBuffer.create(wlBufferResource)
    })

    // listen for buffer contents arriving. opcode: 3
    rtcOutOfBandChannel.setListener(3, (outOfBandMessage) => {
      const bufferId = new DataView(outOfBandMessage).getUint32(0, true)
      const wlBufferResource = client.connection.wlObjects[bufferId]
      const streamingBuffer = wlBufferResource.implementation
      // TODO try to improve buffer chunk handling and not slice (=copy) anywhere
      streamingBuffer.bufferStream.onChunk(outOfBandMessage.slice(Uint32Array.BYTES_PER_ELEMENT))
    })

    // listen for file contents request. opcode: 4
    rtcOutOfBandChannel.setListener(4, (arrayBuffer) => {
      const uint32Array = new Uint32Array(arrayBuffer)
      const fd = uint32Array[0]
      const webFD = this._session.webFS.getWebFD(fd)
      webFD.getTransferable().then(transferable => {
        // FIXME after contents have been transmitted, endpoint should send a webfd close
        if (transferable instanceof ArrayBuffer) {
          // data channel only supports messages of max 16kb, so we need to chunk the file transfer.
          const headerSize = 4 + 16 + 4 // fd + fdDomainUUID + fileSize
          const fileSize = transferable.byteLength
          const maxPayloadLength = (16 * 1024) - (headerSize + 4) // +4 bytes for the opcode
          let fileContentsRemaining = fileSize

          while (fileContentsRemaining > 0) {
            const payloadLength = fileContentsRemaining > maxPayloadLength ? maxPayloadLength : fileContentsRemaining
            const message = new Uint8Array(headerSize + payloadLength) // fd + fdDomainUUID + fileSize + fileContents
            const messageDataView = new DataView(message.buffer)

            messageDataView.setUint32(0, fd, true)

            const fdDomainUUIDBuffer = UUIDUtil.parse(webFD.fdDomainUUID)
            message.set(fdDomainUUIDBuffer, 4)

            messageDataView.setUint32(20, fileSize)

            message.set(new Uint8Array(transferable.slice(fileSize - fileContentsRemaining, (fileSize - fileContentsRemaining) + payloadLength)), 24)

            // message back file contents. opcode: 4
            rtcOutOfBandChannel.send(4, message.buffer)

            fileContentsRemaining -= payloadLength
          }
        } // TODO else error out?
      })
    })
  }

  /**
   * @param {Client}client
   * @param {MessageEvent}event
   * @param {RtcOutOfBandChannel}rtcOutOfBandChannel
   * @private
   */
  _handleDataChannelEvent (client, event, rtcOutOfBandChannel) {
    const arrayBuffer = /** @type {ArrayBuffer} */event.data
    const webFDIntSize = 6
    const dataView = new DataView(arrayBuffer)
    const outOfBand = dataView.getUint32(0, true)
    if (outOfBand) {
      rtcOutOfBandChannel.message(arrayBuffer)
    } else {
      const receiveBuffer = new Uint32Array(arrayBuffer, Uint32Array.BYTES_PER_ELEMENT)
      const fdsInCount = receiveBuffer[0]
      const fds = receiveBuffer.subarray(1, 1 + (fdsInCount * webFDIntSize))
      const webFDs = []
      for (let i = 0; i < fds.length; i += webFDIntSize) {
        webFDs.push(this._deserializeWebFD(fds.subarray(i, i + webFDIntSize)))
      }
      const buffer = receiveBuffer.subarray(1 + (fdsInCount * webFDIntSize))
      client.connection.message({ buffer, fds: webFDs })
    }
  }

  /**
   * @param {Client}client
   * @param {RTCDataChannel}dataChannel
   * @param {Array<{buffer: ArrayBuffer, fds: Array<WebFD>}>}wireMessages
   * @private
   */
  _flushWireMessages (client, dataChannel, wireMessages) {
    // convert to arraybuffer so it can be send over a data channel.
    const webFDIntSize = 6
    const messagesSize = wireMessages.reduce((previousValue, currentValue) => {
      return previousValue + // previous wire message length
        1 + // fds length
        (currentValue.fds.length * webFDIntSize) + // fds
        (currentValue.buffer.byteLength / Uint32Array.BYTES_PER_ELEMENT) // protocol arguments of wire message
    }, 0)

    const sendBuffer = new Uint32Array(messagesSize + 1) // +1 for indicator of it's an out of band message
    sendBuffer[0] = 0 // out-of-band opcode
    let offset = 1
    wireMessages.forEach(wireMessage => {
      sendBuffer[offset++] = wireMessage.fds.length
      wireMessage.fds.forEach((fd) => {
        // TODO keep track of this webfd in case another host wants to get it's content or issues an fd close
        this._serializeWebFD(fd, sendBuffer.subarray(offset, offset + webFDIntSize))
        offset += webFDIntSize
      })
      const message = new Uint32Array(wireMessage.buffer)
      sendBuffer.set(message, offset)
      offset += message.length
    })

    if (dataChannel.readyState === 'open') {
      try {
        dataChannel.send(sendBuffer.buffer)
      } catch (e) {
        console.log(e.message)
        client.close()
      }
    }
  }

  /**
   * @param {string}appEndpointSessionId
   * @param {RTCPeerConnection}peerConnection
   * @return {Promise<void>}
   * @private
   */
  async _sendOffer (appEndpointSessionId, peerConnection) {
    const offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)
    this._sendRTCSignal(appEndpointSessionId, {
      object: 'RTCSignaling',
      method: 'sdpOffer',
      args: {
        remotePeerId: this._session.compositorSessionId,
        offer
      }
    })
  }

  /**
   * @param {WebFD}webFD
   * @param {Uint32Array}targetBuf
   * @private
   */
  _serializeWebFD (webFD, targetBuf) {
    targetBuf[0] = webFD.fd
    switch (webFD.fdType) {
      case 'ArrayBuffer':
        targetBuf[1] = 1
        break
      case 'MessagePort':
        targetBuf[1] = 2
        break
      // image bitmap can not be transfer to a remote
      // case 'ImageBitmap':
      //   targetBuf[1] = 3
      //   break
      default: // unsupported
        targetBuf[1] = 0
    }
    new Uint8Array(targetBuf.buffer, targetBuf.byteOffset + 8, 16).set(UUIDUtil.parse(webFD.fdDomainUUID))
  }

  /**
   * @param {Uint32Array}sourceBuf
   * @return {WebFD}
   * @private
   */
  _deserializeWebFD (sourceBuf) {
    // FIXME we only need to handle fetching remote contents if the fdDomainUUID does not match this compositor
    // If it does match, we simply need to lookup the WebFD from our own WebFS cache, and return that one instead.
    const fdDomainUUID = UUIDUtil.unparse(new Uint8Array(sourceBuf.buffer, sourceBuf.byteOffset + 8, 16))

    const fd = sourceBuf[0]
    let fdType
    let onGetTransferable
    let onClose
    switch (sourceBuf[1]) {
      case 1:
        fdType = 'ArrayBuffer'
        onGetTransferable = (webFD) => this._getShmTransferable(webFD)
        onClose = (webFD) => this._closeShmTransferable(webFD)
        break
      case 2:
        fdType = 'MessagePort' // read end of pipe
        onGetTransferable = (webFD) => this._getPipeTransferable(webFD)
        onClose = (webFD) => this._closePipeTransferable(webFD)
        break
      // case 3: 'ImageBitmap' can not be transferred to a remote
      default:
        fdType = 'unsupported'
        onGetTransferable = () => { throw new Error('unsupported fd type') }
        onClose = () => { throw new Error('unsupported fd type') }
    }
    return new WebFD(fd, fdType, fdDomainUUID, onGetTransferable, onClose)
  }

  /**
   * @param {string}appEndpointSessionId
   * @param {*}signal
   * @private
   */
  _sendRTCSignal (appEndpointSessionId, signal) {
    this._session.webSocket.send(JSON.stringify({
      object: 'signalingServer',
      method: 'rtcSignal',
      args: {
        appEndpointSessionId,
        signalMessage: JSON.stringify(signal)
      }
    }))
  }

  /**
   * @param {string}remotePeerId
   * @param {RTCIceCandidateInit | RTCIceCandidate}candidate
   * @return {Promise<void>}
   */
  async ['iceCandidate'] ({ remotePeerId, candidate }) {
    const peerConnection = this._appEndpointConnections[remotePeerId]
    if (!peerConnection) {
      throw new Error(`[webrtc-peer-connection: ${remotePeerId}] - session not found.`)
    }

    await peerConnection.addIceCandidate(candidate)
  }

  /**
   * @param {string}remotePeerId
   * @param {RTCSessionDescriptionInit}reply
   * @return {Promise<void>}
   */
  async ['sdpReply'] ({ remotePeerId, reply }) {
    const peerConnection = this._appEndpointConnections[remotePeerId]
    if (!peerConnection) {
      throw new Error(`[webrtc-peer-connection: ${remotePeerId}] - session not found.`)
    }

    await peerConnection.setRemoteDescription(reply)
  }

  /**
   * @param {string}remotePeerId
   * @param {RTCSessionDescriptionInit}offer
   * @return {Promise<void>}
   */
  async ['sdpOffer'] ({ remotePeerId, offer }) {
    const peerConnection = this._appEndpointConnections[remotePeerId]
    if (!peerConnection) {
      throw new Error(`[webrtc-peer-connection: ${remotePeerId}] - session not found.`)
    }

    await peerConnection.setRemoteDescription(offer)
    const answer = await peerConnection.createAnswer()
    await peerConnection.setLocalDescription(answer)

    process.env.DEBUG && console.log(`[webrtc-peer-connection: ${remotePeerId}] - sending browser sdp answer: ${answer}.`)
    this._sendRTCSignal(remotePeerId, {
      object: 'RTCSignaling',
      method: 'sdpReply',
      args: {
        remotePeerId: this._session.compositorSessionId,
        reply: answer
      }
    })
  }
}

export default RtcSocket

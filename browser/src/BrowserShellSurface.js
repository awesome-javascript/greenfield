'use strict'

import Point from './math/Point'
import greenfield from './protocol/greenfield-browser-protocol'

const Resize = greenfield.GrShellSurface.Resize

const SurfaceStates = {
  TOP_LEVEL: 'toplevel',
  MAXIMIZED: 'maximized',
  TRANSIENT: 'transient',
  FULLSCREEN: 'fullscreen',
  POPUP: 'popup'
}

export default class BrowserShellSurface {
  /**
   * @param {GrShellSurface}grShellSurfaceResource
   * @param {GrSurface}grSurfaceResource
   * @param {BrowserSession} browserSession
   * @return {BrowserShellSurface}
   */
  static create (grShellSurfaceResource, grSurfaceResource, browserSession) {
    const browserSurface = grSurfaceResource.implementation
    const browserSurfaceView = browserSurface.defaultSurfaceView
    document.body.appendChild(browserSurfaceView.canvas)

    const browserShellSurface = new BrowserShellSurface(grShellSurfaceResource, grSurfaceResource, browserSurfaceView, browserSession)
    browserShellSurface.implementation = browserShellSurface

    grSurfaceResource.onDestroy().then(() => {
      grShellSurfaceResource.destroy()
      browserShellSurface._handelDestroy()
    })

    browserSurface.role = browserShellSurface
    browserShellSurface._doPing(grShellSurfaceResource)

    return browserShellSurface
  }

  /**
   * @private
   * @param {GrShellSurface}grShellSurfaceResource
   * @param {GrSurface}grSurfaceResource
   * @param {BrowserSurfaceView}browserSurfaceView
   * @param {BrowserSession} browserSession
   */
  constructor (grShellSurfaceResource, grSurfaceResource, browserSurfaceView, browserSession) {
    /**
     * @type {GrShellSurface}
     */
    this.resource = grShellSurfaceResource
    /**
     * @type {GrSurface}
     */
    this.grSurfaceResource = grSurfaceResource
    /**
     * @type {string}
     */
    this.title = ''
    /**
     * @type {string}
     */
    this.clazz = ''
    /**
     * @type {BrowserSurfaceView}
     */
    this.view = browserSurfaceView
    /**
     * @type {string}
     */
    this.state = SurfaceStates.TOP_LEVEL
    /**
     * @type {BrowserSession}
     */
    this.browserSession = browserSession
    /**
     * @type {boolean}
     * @private
     */
    this._pingTimeoutActive = false

    const disconnected = new window.Image()
    disconnected.src = 'disconnected-80x80.png'
    this._drawDisconnectImage = (browserSurfaceView) => {
      const x = (browserSurfaceView.canvas.width > 80 ? browserSurfaceView.canvas.width - 80 : 0) / 2
      const y = (browserSurfaceView.canvas.height > 80 ? browserSurfaceView.canvas.height - 80 : 0) / 2
      browserSurfaceView.context2d.drawImage(disconnected, x, y)
    }
  }

  _handelDestroy () {
    // listen for fade updates so we can remove the canvas after the fade is done.
    new window.MutationObserver(() => {
      if (this.view.canvas.style.opacity < 0.1) {
        document.body.removeChild(this.view.canvas)
      }
    }).observe(this.view.canvas, {
      attributes: true,
      attributeFilter: ['style']
    })
    this.view.fade()
  }

  /**
   *
   *                A client must respond to a ping event with a pong request or
   *                the client may be deemed unresponsive.
   *
   *
   * @param {GrShellSurface} resource
   * @param {Number} serial serial number of the ping event
   *
   * @since 1
   *
   */
  pong (resource, serial) {
    if (this._pingTimeoutActive) {
      this._darkenView(0)
      this._pingTimeoutActive = false
      this.view.removeDrawListener(this._drawDisconnectImage)
    }
    window.clearTimeout(this._timeoutTimer)
    window.setTimeout(() => {
      this._doPing(resource)
    }, 1000)
  }

  _doPing (resource) {
    this._timeoutTimer = window.setTimeout(() => {
      if (!this._pingTimeoutActive) {
        // ping timed out, make view gray
        this._pingTimeoutActive = true
        this._fadeToGray(0)
      }
    }, 3000)
    resource.ping(0)
    this.browserSession.flush()
  }

  _fadeToGray (perc) {
    if (this._pingTimeoutActive && perc <= 100) {
      // adding set timeout will add another delay so our fade out will go a bit slower.
      window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          this._darkenView(perc)
          this._fadeToGray(++perc)
        })
        if (perc === 100) {
          // show disconnect icon
          this._drawDisconnectImage(this.view)
          this.view.addDrawListener(this._drawDisconnectImage)
        }
      }, 10)
    }
  }

  _darkenView (perc) {
    this.view.canvas.style.filter = `grayscale(${perc}%) brightness(${100 - (perc / 2)}%)`
  }

  /**
   *
   *                Start a pointer-driven move of the surface.
   *
   *                This request must be used in response to a button press event.
   *                The server may ignore move requests depending on the state of
   *                the surface (e.g. fullscreen or maximized).
   *
   *
   * @param {GrShellSurface} resource
   * @param {*} seat seat whose pointer is used
   * @param {Number} serial serial number of the implicit grab on the pointer
   *
   * @since 1
   *
   */
  move (resource, seat, serial) {
    if (this.state === SurfaceStates.FULLSCREEN || this.state === SurfaceStates.MAXIMIZED) {
      return
    }
    const browserSeat = seat.implementation
    const browserPointer = browserSeat.browserPointer
    if (browserPointer.buttonSerial === serial) {
      const canvasX = parseInt(this.view.canvas.style.left, 10)
      const canvasY = parseInt(this.view.canvas.style.top, 10)

      const pointerX = browserPointer.x
      const pointerY = browserPointer.y

      const moveListener = () => {
        if (browserPointer.buttonSerial === serial) {
          const deltaX = browserPointer.x - pointerX
          const deltaY = browserPointer.y - pointerY

          this.view.canvas.style.left = (canvasX + deltaX) + 'px'
          this.view.canvas.style.top = (canvasY + deltaY) + 'px'
        } else {
          browserPointer.removeMouseMoveListener(moveListener)
        }
      }
      browserPointer.addMouseMoveListener(moveListener)
    }
  }

  /**
   *
   *                Start a pointer-driven resizing of the surface.
   *
   *                This request must be used in response to a button press event.
   *                The server may ignore resize requests depending on the state of
   *                the surface (e.g. fullscreen or maximized).
   *
   *
   * @param {GrShellSurface} resource
   * @param {*} seat seat whose pointer is used
   * @param {Number} serial serial number of the implicit grab on the pointer
   * @param {Number} edges which edge or corner is being dragged
   *
   * @since 1
   *
   */
  resize (resource, seat, serial, edges) {
    if (this.state === SurfaceStates.FULLSCREEN || this.state === SurfaceStates.MAXIMIZED) {
      return
    }

    const browserSeat = seat.implementation
    const browserPointer = browserSeat.browserPointer
    if (browserPointer.buttonSerial === serial) {
      const pointerX = browserPointer.x
      const pointerY = browserPointer.y

      const canvasWidth = this.view.canvas.width
      const canvasHeight = this.view.canvas.height

      const surfaceDim = this.view.toSurfaceSpace(Point.create(canvasWidth, canvasHeight))
      const surfaceWidth = surfaceDim.x
      const surfaceHeight = surfaceDim.y

      const viewY = parseInt(this.view.canvas.style.top)
      const viewX = parseInt(this.view.canvas.style.left)

      switch (edges) {
        case Resize.none: {
          break
        }

        case Resize.top: {
          // separate draw listener is used to delay the repositioning of the surface until the buffer contents have arrived
          const resizeListener = () => {
            if (browserPointer.buttonSerial === serial) {
              // FIXME this naively assume no transformation of the surface (pointer space ~= surface space) which isn't
              // always the case...
              const deltaY = browserPointer.y - pointerY
              let width = surfaceWidth
              let height = surfaceHeight
              height -= deltaY

              this.resource.configure(edges, width, height)
            } else {
              browserPointer.removeMouseMoveListener(resizeListener)
            }
          }

          const drawListener = () => {
            const newHeight = this.view.canvas.height
            const yPosDelta = canvasHeight - newHeight
            this.view.canvas.style.top = (viewY + yPosDelta) + 'px'

            if (browserPointer.buttonSerial !== serial) {
              this.view.removeDrawListener(drawListener)
            }
          }

          browserPointer.addMouseMoveListener(resizeListener)
          this.view.addDrawListener(drawListener)
          break
        }

        case Resize.bottom: {
          const resizeListener = () => {
            if (browserPointer.buttonSerial === serial) {
              const deltaY = browserPointer.y - pointerY
              let width = surfaceWidth
              let height = surfaceHeight
              height += deltaY

              this.resource.configure(edges, width, height)
            } else {
              browserPointer.removeMouseMoveListener(resizeListener)
            }
          }

          browserPointer.addMouseMoveListener(resizeListener)
          break
        }

        case Resize.left: {
          const resizeListener = () => {
            if (browserPointer.buttonSerial === serial) {
              const deltaX = browserPointer.x - pointerX
              let width = surfaceWidth
              let height = surfaceHeight
              width -= deltaX

              this.resource.configure(edges, width, height)
            } else {
              browserPointer.removeMouseMoveListener(resizeListener)
            }
          }

          const drawListener = () => {
            const newWidth = this.view.canvas.width
            const xPosDelta = canvasWidth - newWidth
            this.view.canvas.style.left = (viewX + xPosDelta) + 'px'

            if (browserPointer.buttonSerial !== serial) {
              this.view.removeDrawListener(drawListener)
            }
          }

          browserPointer.addMouseMoveListener(resizeListener)
          this.view.addDrawListener(drawListener)
          break
        }

        case Resize.topLeft: {
          const resizeListener = () => {
            if (browserPointer.buttonSerial === serial) {
              const deltaX = browserPointer.x - pointerX
              const deltaY = browserPointer.y - pointerY
              let width = surfaceWidth
              let height = surfaceHeight
              width -= deltaX
              height -= deltaY

              this.resource.configure(edges, width, height)
            } else {
              browserPointer.removeMouseMoveListener(resizeListener)
            }
          }

          const drawListener = () => {
            const newWidth = this.view.canvas.width
            const xPosDelta = canvasWidth - newWidth
            const newHeight = this.view.canvas.height
            const yPosDelta = canvasHeight - newHeight
            this.view.canvas.style.left = (viewX + xPosDelta) + 'px'
            this.view.canvas.style.top = (viewY + yPosDelta) + 'px'

            if (browserPointer.buttonSerial !== serial) {
              this.view.removeDrawListener(drawListener)
            }
          }

          browserPointer.addMouseMoveListener(resizeListener)
          this.view.addDrawListener(drawListener)
          break
        }

        case Resize.bottomLeft: {
          const resizeListener = () => {
            if (browserPointer.buttonSerial === serial) {
              const deltaX = browserPointer.x - pointerX
              const deltaY = browserPointer.y - pointerY
              let width = surfaceWidth
              let height = surfaceHeight
              height += deltaY
              width -= deltaX

              this.resource.configure(edges, width, height)
            } else {
              browserPointer.removeMouseMoveListener(resizeListener)
            }
          }

          const drawListener = () => {
            const newWidth = this.view.canvas.width
            const xPosDelta = canvasWidth - newWidth
            this.view.canvas.style.left = (viewX + xPosDelta) + 'px'

            if (browserPointer.buttonSerial !== serial) {
              this.view.removeDrawListener(drawListener)
            }
          }

          browserPointer.addMouseMoveListener(resizeListener)
          this.view.addDrawListener(drawListener)
          break
        }

        case Resize.right: {
          const resizeListener = () => {
            if (browserPointer.buttonSerial === serial) {
              const deltaX = browserPointer.x - pointerX
              let width = surfaceWidth
              let height = surfaceHeight
              width += deltaX

              this.resource.configure(edges, width, height)
            } else {
              browserPointer.removeMouseMoveListener(resizeListener)
            }
          }

          browserPointer.addMouseMoveListener(resizeListener)
          break
        }
        case Resize.topRight: {
          const resizeListener = () => {
            if (browserPointer.buttonSerial === serial) {
              const deltaX = browserPointer.x - pointerX
              const deltaY = browserPointer.y - pointerY
              let width = surfaceWidth
              let height = surfaceHeight
              height -= deltaY
              width += deltaX

              this.resource.configure(edges, width, height)
            } else {
              browserPointer.removeMouseMoveListener(resizeListener)
            }
          }

          const drawListener = () => {
            const newHeight = this.view.canvas.height
            const yPosDelta = canvasHeight - newHeight
            this.view.canvas.style.top = (viewY + yPosDelta) + 'px'
            if (browserPointer.buttonSerial !== serial) {
              this.view.removeDrawListener(drawListener)
            }
          }

          browserPointer.addMouseMoveListener(resizeListener)
          this.view.addDrawListener(drawListener)
          break
        }

        case Resize.bottomRight: {
          const resizeListener = () => {
            if (browserPointer.buttonSerial === serial) {
              const deltaX = browserPointer.x - pointerX
              const deltaY = browserPointer.y - pointerY
              let width = surfaceWidth
              let height = surfaceHeight
              height += deltaY
              width += deltaX

              this.resource.configure(edges, width, height)
            } else {
              browserPointer.removeMouseMoveListener(resizeListener)
            }
          }

          browserPointer.addMouseMoveListener(resizeListener)
          break
        }
      }
    }
  }

  /**
   *
   *                Map the surface as a toplevel surface.
   *
   *                A toplevel surface is not fullscreen, maximized or transient.
   *
   *
   * @param {GrShellSurface} resource
   *
   * @since 1
   *
   */
  setToplevel (resource) {
    this.state = SurfaceStates.TOP_LEVEL
    document.body.appendChild(this.view.canvas)
  }

  /**
   *
   *                Map the surface relative to an existing surface.
   *
   *                The x and y arguments specify the location of the upper left
   *                corner of the surface relative to the upper left corner of the
   *                parent surface, in surface-local coordinates.
   *
   *                The flags argument controls details of the transient behaviour.
   *
   *
   * @param {GrShellSurface} resource
   * @param {*} parent parent surface
   * @param {Number} x surface-local x coordinate
   * @param {Number} y surface-local y coordinate
   * @param {Number} flags transient surface behavior
   *
   * @since 1
   *
   */
  setTransient (resource, parent, x, y, flags) {

  }

  /**
   *
   *                Map the surface as a fullscreen surface.
   *
   *                If an output parameter is given then the surface will be made
   *                fullscreen on that output. If the client does not specify the
   *                output then the compositor will apply its policy - usually
   *                choosing the output on which the surface has the biggest surface
   *                area.
   *
   *                The client may specify a method to resolve a size conflict
   *                between the output size and the surface size - this is provided
   *                through the method parameter.
   *
   *                The framerate parameter is used only when the method is set
   *                to "driver", to indicate the preferred framerate. A value of 0
   *                indicates that the client does not care about framerate.  The
   *                framerate is specified in mHz, that is framerate of 60000 is 60Hz.
   *
   *                A method of "scale" or "driver" implies a scaling operation of
   *                the surface, either via a direct scaling operation or a change of
   *                the output mode. This will override any kind of output scaling, so
   *                that mapping a surface with a buffer size equal to the mode can
   *                fill the screen independent of buffer_scale.
   *
   *                A method of "fill" means we don't scale up the buffer, however
   *                any output scale is applied. This means that you may run into
   *                an edge case where the application maps a buffer with the same
   *                size of the output mode but buffer_scale 1 (thus making a
   *                surface larger than the output). In this case it is allowed to
   *                downscale the results to fit the screen.
   *
   *                The compositor must reply to this request with a configure event
   *                with the dimensions for the output on which the surface will
   *                be made fullscreen.
   *
   *
   * @param {GrShellSurface} resource
   * @param {Number} method method for resolving size conflict
   * @param {Number} framerate framerate in mHz
   * @param {?*} output output on which the surface is to be fullscreen
   *
   * @since 1
   *
   */
  setFullscreen (resource, method, framerate, output) {}

  /**
   *
   *                Map the surface as a popup.
   *
   *                A popup surface is a transient surface with an added pointer
   *                grab.
   *
   *                An existing implicit grab will be changed to owner-events mode,
   *                and the popup grab will continue after the implicit grab ends
   *                (i.e. releasing the mouse button does not cause the popup to
   *                be unmapped).
   *
   *                The popup grab continues until the window is destroyed or a
   *                mouse button is pressed in any other client's window. A click
   *                in any of the client's surfaces is reported as normal, however,
   *                clicks in other clients' surfaces will be discarded and trigger
   *                the callback.
   *
   *                The x and y arguments specify the location of the upper left
   *                corner of the surface relative to the upper left corner of the
   *                parent surface, in surface-local coordinates.
   *
   *
   * @param {GrShellSurface} resource
   * @param {*} seat seat whose pointer is used
   * @param {Number} serial serial number of the implicit grab on the pointer
   * @param {*} parent parent surface
   * @param {Number} x surface-local x coordinate
   * @param {Number} y surface-local y coordinate
   * @param {Number} flags transient surface behavior
   *
   * @since 1
   *
   */
  setPopup (resource, seat, serial, parent, x, y, flags) {}

  /**
   *
   *                Map the surface as a maximized surface.
   *
   *                If an output parameter is given then the surface will be
   *                maximized on that output. If the client does not specify the
   *                output then the compositor will apply its policy - usually
   *                choosing the output on which the surface has the biggest surface
   *                area.
   *
   *                The compositor will reply with a configure event telling
   *                the expected new surface size. The operation is completed
   *                on the next buffer attach to this surface.
   *
   *                A maximized surface typically fills the entire output it is
   *                bound to, except for desktop elements such as panels. This is
   *                the main difference between a maximized shell surface and a
   *                fullscreen shell surface.
   *
   *                The details depend on the compositor implementation.
   *
   *
   * @param {GrShellSurface} resource
   * @param {?*} output output on which the surface is to be maximized
   *
   * @since 1
   *
   */
  setMaximized (resource, output) {}

  /**
   *
   *                Set a short title for the surface.
   *
   *                This string may be used to identify the surface in a task bar,
   *                window list, or other user interface elements provided by the
   *                compositor.
   *
   *                The string must be encoded in UTF-8.
   *
   *
   * @param {GrShellSurface} resource
   * @param {string} title surface title
   *
   * @since 1
   *
   */
  setTitle (resource, title) {
    this.title = title
  }

  /**
   *
   *                Set a class for the surface.
   *
   *                The surface class identifies the general class of applications
   *                to which the surface belongs. A common convention is to use the
   *                file name (or the full path if it is a non-standard location) of
   *                the application's .desktop file as the class.
   *
   *
   * @param {GrShellSurface} resource
   * @param {string} clazz surface class
   *
   * @since 1
   *
   */
  setClass (resource, clazz) {
    this.clazz = clazz
  }
}

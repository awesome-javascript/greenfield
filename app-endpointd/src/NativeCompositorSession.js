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

const { Endpoint, nativeGlobalNames } = require('westfield-endpoint')
const { Epoll } = require('epoll')

const RTCConnectionPool = require('./rtc/RTCConnectionPool')
const RTCSignaling = require('./rtc/RTCSignaling')
const NativeClientSession = require('./NativeClientSession')

class NativeCompositorSession {
  /**
   * @param {AppEndpointCompositorPair}appEndpointCompositorPair
   * @returns {NativeCompositorSession}
   */
  static create (appEndpointCompositorPair) {
    // TODO get channel factory type from config
    const channelFactoryPool = RTCConnectionPool.create(appEndpointCompositorPair)
    appEndpointCompositorPair.messageHandlers['RTCSignaling'] = RTCSignaling.create(channelFactoryPool)

    const browserChannelFactory = channelFactoryPool.get(appEndpointCompositorPair.compositorSessionId)
    const compositorSession = new NativeCompositorSession(appEndpointCompositorPair, browserChannelFactory, channelFactoryPool)
    channelFactoryPool.channelNotifier.addListener(channel => compositorSession._handleIncomingChannel(channel))

    // TODO move global create/destroy callback implementations into Endpoint.js
    compositorSession.wlDisplay = Endpoint.createDisplay(
      wlClient => compositorSession._onClientCreated(wlClient),
      globalName => compositorSession._onGlobalCreated(globalName),
      globalName => compositorSession._onGlobalDestroyed(globalName)
    )
    Endpoint.initShm(compositorSession.wlDisplay)
    compositorSession.wlDisplayName = Endpoint.addSocketAuto(compositorSession.wlDisplay)
    console.log(`[app-endpoint: ${appEndpointCompositorPair.appEndpointSessionId}] - Native compositor session: created new app-endpoint.`)
    console.log(`[app-endpoint: ${appEndpointCompositorPair.appEndpointSessionId}] - Native compositor session: compositor listening on: WAYLAND_DISPLAY="${compositorSession.wlDisplayName}".`)

    // set the wayland display to something non existing, else gstreamer will connect to us with a fallback value and
    // block, while in turn we wait for gstreamer, resulting in a deadlock!
    // FIXME this can be removed once we move all the buffer encoding to native code with a programmatically constructed
    // gstreamer pipeline using a headless option
    process.env.WAYLAND_DISPLAY = 'doesntExist'

    compositorSession.wlDisplayFd = Endpoint.getFd(compositorSession.wlDisplay)

    // TODO handle err
    // FIXME write our own native epoll
    const fdWatcher = new Epoll(err => Endpoint.dispatchRequests(compositorSession.wlDisplay))
    fdWatcher.add(compositorSession.wlDisplayFd, Epoll.EPOLLPRI | Epoll.EPOLLIN | Epoll.EPOLLERR)

    return compositorSession
  }

  /**
   * @param {AppEndpointCompositorPair}appEndpointCompositorPair
   * @param {ChannelFactory}browserChannelFactory
   * @param {ChannelFactoryPool}channelFactoryPool
   */
  constructor (appEndpointCompositorPair, browserChannelFactory, channelFactoryPool) {
    /**
     * @type {AppEndpointCompositorPair}
     */
    this.appEndpointCompositorPair = appEndpointCompositorPair
    /**
     * @type {ChannelFactory}
     * @private
     */
    this._browserChannelFactory = browserChannelFactory
    /**
     * @type {ChannelFactoryPool}
     */
    this.channelFactoryPool = channelFactoryPool
    /**
     * @type {Object}
     */
    this.wlDisplay = null
    /**
     * @type {string|null}
     */
    this.wlDisplayName = null
    /**
     * @type {number}
     */
    this.wlDisplayFd = -1
    /**
     * @type {Array<NativeClientSession>}
     */
    this.clients = []
  }

  destroy () {
    // TODO
  }

  /**
   * @param {Object}wlClient
   * @private
   */
  _onClientCreated (wlClient) {
    process.env.DEBUG && console.log(`[app-endpoint: ${this.appEndpointCompositorPair.appEndpointSessionId}] - Native compositor session: new wayland client connected.`)

    const browserChannel = this._browserChannelFactory.createChannel()
    const clientSession = NativeClientSession.create(wlClient, this, browserChannel)
    this.clients.push(clientSession)
    clientSession.onDestroy().then(() => {
      const idx = this.clients.indexOf(clientSession)
      if (idx > -1) {
        this.clients.splice(idx, 1)
      }
    })
  }

  /**
   * @param {number}globalName
   * @private
   */
  _onGlobalCreated (globalName) {
    nativeGlobalNames.push(globalName)
  }

  /**
   * @param {number}globalName
   * @private
   */
  _onGlobalDestroyed (globalName) {
    const idx = nativeGlobalNames.indexOf(globalName)
    if (idx > -1) {
      nativeGlobalNames.splice(idx, 1)
    }
  }

  /**
   * @param {Channel}channel
   * @private
   */
  _handleIncomingChannel (channel) {
    // TODO listen for messages
    // TODO handle out of band message types
    // TODO handle disconnects
  }
}

module.exports = NativeCompositorSession

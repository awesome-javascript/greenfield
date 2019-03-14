/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../westfield/client/runtime/index.js":
/*!********************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/index.js ***!
  \********************************************************/
/*! exports provided: webFS, display, frame, WlDisplayProxy, WlRegistryProxy, WlCallbackProxy, WlCompositorProxy, WlBufferProxy, WlDataOfferProxy, WlDataSourceProxy, WlDataDeviceProxy, WlDataDeviceManagerProxy, WlShellProxy, WlShellSurfaceProxy, WlSurfaceProxy, WlSeatProxy, WlPointerProxy, WlKeyboardProxy, WlTouchProxy, WlOutputProxy, WlRegionProxy, WlSubcompositorProxy, WlSubsurfaceProxy, WlDisplayEvents, WlRegistryEvents, WlCallbackEvents, WlBufferEvents, WlDataOfferEvents, WlDataSourceEvents, WlDataDeviceEvents, WlShellSurfaceEvents, WlSurfaceEvents, WlSeatEvents, WlPointerEvents, WlKeyboardEvents, WlTouchEvents, WlOutputEvents, XdgWmBaseProxy, XdgPositionerProxy, XdgSurfaceProxy, XdgToplevelProxy, XdgPopupProxy, XdgWmBaseEvents, XdgSurfaceEvents, XdgToplevelEvents, XdgPopupEvents, GrWebShmBufferProxy, GrWebShmProxy, GrWebShmBufferEvents, GrWebGlBufferProxy, GrWebGlProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webFS", function() { return webFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frame", function() { return frame; });
/* harmony import */ var _src_WebFS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/WebFS */ "../../../westfield/client/runtime/src/WebFS.js");
/* harmony import */ var _src_Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Display */ "../../../westfield/client/runtime/src/Display.js");
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _src_protocol_WlDisplayProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/protocol/WlDisplayProxy */ "../../../westfield/client/runtime/src/protocol/WlDisplayProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDisplayProxy", function() { return _src_protocol_WlDisplayProxy__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_protocol_WlRegistryProxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/protocol/WlRegistryProxy */ "../../../westfield/client/runtime/src/protocol/WlRegistryProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlRegistryProxy", function() { return _src_protocol_WlRegistryProxy__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_protocol_WlCallbackProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/protocol/WlCallbackProxy */ "../../../westfield/client/runtime/src/protocol/WlCallbackProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlCallbackProxy", function() { return _src_protocol_WlCallbackProxy__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_protocol_WlCompositorProxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/protocol/WlCompositorProxy */ "../../../westfield/client/runtime/src/protocol/WlCompositorProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlCompositorProxy", function() { return _src_protocol_WlCompositorProxy__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_protocol_WlBufferProxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/protocol/WlBufferProxy */ "../../../westfield/client/runtime/src/protocol/WlBufferProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlBufferProxy", function() { return _src_protocol_WlBufferProxy__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_protocol_WlDataOfferProxy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/protocol/WlDataOfferProxy */ "../../../westfield/client/runtime/src/protocol/WlDataOfferProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDataOfferProxy", function() { return _src_protocol_WlDataOfferProxy__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_protocol_WlDataSourceProxy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/protocol/WlDataSourceProxy */ "../../../westfield/client/runtime/src/protocol/WlDataSourceProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDataSourceProxy", function() { return _src_protocol_WlDataSourceProxy__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_protocol_WlDataDeviceProxy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/protocol/WlDataDeviceProxy */ "../../../westfield/client/runtime/src/protocol/WlDataDeviceProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDataDeviceProxy", function() { return _src_protocol_WlDataDeviceProxy__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_protocol_WlDataDeviceManagerProxy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/protocol/WlDataDeviceManagerProxy */ "../../../westfield/client/runtime/src/protocol/WlDataDeviceManagerProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDataDeviceManagerProxy", function() { return _src_protocol_WlDataDeviceManagerProxy__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_protocol_WlShellProxy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/protocol/WlShellProxy */ "../../../westfield/client/runtime/src/protocol/WlShellProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlShellProxy", function() { return _src_protocol_WlShellProxy__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_protocol_WlShellSurfaceProxy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/protocol/WlShellSurfaceProxy */ "../../../westfield/client/runtime/src/protocol/WlShellSurfaceProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlShellSurfaceProxy", function() { return _src_protocol_WlShellSurfaceProxy__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_protocol_WlSurfaceProxy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/protocol/WlSurfaceProxy */ "../../../westfield/client/runtime/src/protocol/WlSurfaceProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlSurfaceProxy", function() { return _src_protocol_WlSurfaceProxy__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_protocol_WlSeatProxy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/protocol/WlSeatProxy */ "../../../westfield/client/runtime/src/protocol/WlSeatProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlSeatProxy", function() { return _src_protocol_WlSeatProxy__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_protocol_WlPointerProxy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/protocol/WlPointerProxy */ "../../../westfield/client/runtime/src/protocol/WlPointerProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlPointerProxy", function() { return _src_protocol_WlPointerProxy__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_protocol_WlKeyboardProxy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/protocol/WlKeyboardProxy */ "../../../westfield/client/runtime/src/protocol/WlKeyboardProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlKeyboardProxy", function() { return _src_protocol_WlKeyboardProxy__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _src_protocol_WlTouchProxy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/protocol/WlTouchProxy */ "../../../westfield/client/runtime/src/protocol/WlTouchProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlTouchProxy", function() { return _src_protocol_WlTouchProxy__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _src_protocol_WlOutputProxy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/protocol/WlOutputProxy */ "../../../westfield/client/runtime/src/protocol/WlOutputProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlOutputProxy", function() { return _src_protocol_WlOutputProxy__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _src_protocol_WlRegionProxy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/protocol/WlRegionProxy */ "../../../westfield/client/runtime/src/protocol/WlRegionProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlRegionProxy", function() { return _src_protocol_WlRegionProxy__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _src_protocol_WlSubcompositorProxy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/protocol/WlSubcompositorProxy */ "../../../westfield/client/runtime/src/protocol/WlSubcompositorProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlSubcompositorProxy", function() { return _src_protocol_WlSubcompositorProxy__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _src_protocol_WlSubsurfaceProxy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/protocol/WlSubsurfaceProxy */ "../../../westfield/client/runtime/src/protocol/WlSubsurfaceProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlSubsurfaceProxy", function() { return _src_protocol_WlSubsurfaceProxy__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _src_protocol_WlDisplayEvents__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/protocol/WlDisplayEvents */ "../../../westfield/client/runtime/src/protocol/WlDisplayEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDisplayEvents", function() { return _src_protocol_WlDisplayEvents__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _src_protocol_WlRegistryEvents__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/protocol/WlRegistryEvents */ "../../../westfield/client/runtime/src/protocol/WlRegistryEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlRegistryEvents", function() { return _src_protocol_WlRegistryEvents__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _src_protocol_WlCallbackEvents__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/protocol/WlCallbackEvents */ "../../../westfield/client/runtime/src/protocol/WlCallbackEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlCallbackEvents", function() { return _src_protocol_WlCallbackEvents__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _src_protocol_WlBufferEvents__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/protocol/WlBufferEvents */ "../../../westfield/client/runtime/src/protocol/WlBufferEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlBufferEvents", function() { return _src_protocol_WlBufferEvents__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _src_protocol_WlDataOfferEvents__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/protocol/WlDataOfferEvents */ "../../../westfield/client/runtime/src/protocol/WlDataOfferEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDataOfferEvents", function() { return _src_protocol_WlDataOfferEvents__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _src_protocol_WlDataSourceEvents__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/protocol/WlDataSourceEvents */ "../../../westfield/client/runtime/src/protocol/WlDataSourceEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDataSourceEvents", function() { return _src_protocol_WlDataSourceEvents__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _src_protocol_WlDataDeviceEvents__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/protocol/WlDataDeviceEvents */ "../../../westfield/client/runtime/src/protocol/WlDataDeviceEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlDataDeviceEvents", function() { return _src_protocol_WlDataDeviceEvents__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _src_protocol_WlShellSurfaceEvents__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/protocol/WlShellSurfaceEvents */ "../../../westfield/client/runtime/src/protocol/WlShellSurfaceEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlShellSurfaceEvents", function() { return _src_protocol_WlShellSurfaceEvents__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _src_protocol_WlSurfaceEvents__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/protocol/WlSurfaceEvents */ "../../../westfield/client/runtime/src/protocol/WlSurfaceEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlSurfaceEvents", function() { return _src_protocol_WlSurfaceEvents__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _src_protocol_WlSeatEvents__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/protocol/WlSeatEvents */ "../../../westfield/client/runtime/src/protocol/WlSeatEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlSeatEvents", function() { return _src_protocol_WlSeatEvents__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _src_protocol_WlPointerEvents__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/protocol/WlPointerEvents */ "../../../westfield/client/runtime/src/protocol/WlPointerEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlPointerEvents", function() { return _src_protocol_WlPointerEvents__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _src_protocol_WlKeyboardEvents__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./src/protocol/WlKeyboardEvents */ "../../../westfield/client/runtime/src/protocol/WlKeyboardEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlKeyboardEvents", function() { return _src_protocol_WlKeyboardEvents__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _src_protocol_WlTouchEvents__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./src/protocol/WlTouchEvents */ "../../../westfield/client/runtime/src/protocol/WlTouchEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlTouchEvents", function() { return _src_protocol_WlTouchEvents__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _src_protocol_WlOutputEvents__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./src/protocol/WlOutputEvents */ "../../../westfield/client/runtime/src/protocol/WlOutputEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlOutputEvents", function() { return _src_protocol_WlOutputEvents__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _src_protocol_XdgWmBaseProxy__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./src/protocol/XdgWmBaseProxy */ "../../../westfield/client/runtime/src/protocol/XdgWmBaseProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgWmBaseProxy", function() { return _src_protocol_XdgWmBaseProxy__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _src_protocol_XdgPositionerProxy__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./src/protocol/XdgPositionerProxy */ "../../../westfield/client/runtime/src/protocol/XdgPositionerProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgPositionerProxy", function() { return _src_protocol_XdgPositionerProxy__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _src_protocol_XdgSurfaceProxy__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./src/protocol/XdgSurfaceProxy */ "../../../westfield/client/runtime/src/protocol/XdgSurfaceProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgSurfaceProxy", function() { return _src_protocol_XdgSurfaceProxy__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _src_protocol_XdgToplevelProxy__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./src/protocol/XdgToplevelProxy */ "../../../westfield/client/runtime/src/protocol/XdgToplevelProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgToplevelProxy", function() { return _src_protocol_XdgToplevelProxy__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _src_protocol_XdgPopupProxy__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./src/protocol/XdgPopupProxy */ "../../../westfield/client/runtime/src/protocol/XdgPopupProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgPopupProxy", function() { return _src_protocol_XdgPopupProxy__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _src_protocol_XdgWmBaseEvents__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./src/protocol/XdgWmBaseEvents */ "../../../westfield/client/runtime/src/protocol/XdgWmBaseEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgWmBaseEvents", function() { return _src_protocol_XdgWmBaseEvents__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _src_protocol_XdgSurfaceEvents__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./src/protocol/XdgSurfaceEvents */ "../../../westfield/client/runtime/src/protocol/XdgSurfaceEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgSurfaceEvents", function() { return _src_protocol_XdgSurfaceEvents__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _src_protocol_XdgToplevelEvents__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./src/protocol/XdgToplevelEvents */ "../../../westfield/client/runtime/src/protocol/XdgToplevelEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgToplevelEvents", function() { return _src_protocol_XdgToplevelEvents__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _src_protocol_XdgPopupEvents__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./src/protocol/XdgPopupEvents */ "../../../westfield/client/runtime/src/protocol/XdgPopupEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XdgPopupEvents", function() { return _src_protocol_XdgPopupEvents__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _src_protocol_GrWebShmBufferProxy__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./src/protocol/GrWebShmBufferProxy */ "../../../westfield/client/runtime/src/protocol/GrWebShmBufferProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GrWebShmBufferProxy", function() { return _src_protocol_GrWebShmBufferProxy__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _src_protocol_GrWebShmProxy__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./src/protocol/GrWebShmProxy */ "../../../westfield/client/runtime/src/protocol/GrWebShmProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GrWebShmProxy", function() { return _src_protocol_GrWebShmProxy__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _src_protocol_GrWebShmBufferEvents__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./src/protocol/GrWebShmBufferEvents */ "../../../westfield/client/runtime/src/protocol/GrWebShmBufferEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GrWebShmBufferEvents", function() { return _src_protocol_GrWebShmBufferEvents__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _src_protocol_GrWebGlBufferProxy__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./src/protocol/GrWebGlBufferProxy */ "../../../westfield/client/runtime/src/protocol/GrWebGlBufferProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GrWebGlBufferProxy", function() { return _src_protocol_GrWebGlBufferProxy__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _src_protocol_GrWebGlProxy__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./src/protocol/GrWebGlProxy */ "../../../westfield/client/runtime/src/protocol/GrWebGlProxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GrWebGlProxy", function() { return _src_protocol_GrWebGlProxy__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/*
MIT License

Copyright (c) 2017 Erik De Rijcke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/







// core wayland protocol




// import WlShmPoolProxy from './src/protocol/WlShmPoolProxy'
// import WlShmProxy from './src/protocol/WlShmProxy'



















// import WlShmEvents from './src/protocol/WlShmEvents'












// xdg_shell










// web shm




// web gl



/**
 * @type {WebFS}
 */
const webFS = _src_WebFS__WEBPACK_IMPORTED_MODULE_0__["default"].create(_uuidv4())
/**
 * @type {Connection}
 */
const connection = new westfield_runtime_common__WEBPACK_IMPORTED_MODULE_2__["Connection"]()
/**
 * @type {Display}
 */
const display = new _src_Display__WEBPACK_IMPORTED_MODULE_1__["default"](connection)

/**
 * @returns {string}
 * @private
 */
function _uuidv4 () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ self.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

/**
 * @param {Display}display
 * @param {Connection}connection
 * @param {WebFS}webFS
 * @private
 */
function _setupMessageHandling (display, connection, webFS) {
  /**
   * @type {Array<Array<{buffer: ArrayBuffer, fds: Array<WebFD>}>>}
   * @private
   */
  const _flushQueue = []
  /**
   * @param {MessageEvent}event
   */
  onmessage = (event) => {
    if (connection.closed) { return }

    const webWorkerMessage = /** @type {{protocolMessage:ArrayBuffer, meta:Array<Transferable>}} */event.data
    if (webWorkerMessage.protocolMessage instanceof ArrayBuffer) {
      const buffer = new Uint32Array(/** @type {ArrayBuffer} */webWorkerMessage.protocolMessage)
      const fds = webWorkerMessage.meta.map(transferable => {
        if (transferable instanceof ArrayBuffer) {
          return webFS.fromArrayBuffer(transferable)
        } else if (transferable instanceof ImageBitmap) {
          return webFS.fromImageBitmap(transferable)
        }// else if (transferable instanceof MessagePort) {
        // }
        console.warn(`COMPOSITOR BUG? Unsupported transferable received from compositor: ${transferable}. WebFD will be null.`)
        return null
      })
      try {
        connection.message({ buffer, fds })
      } catch (e) {
        if (display.errorHandler && typeof display.errorHandler === 'function') {
          display.errorHandler(e)
        } else {
          console.error('\tname: ' + e.name + ' message: ' + e.message + ' text: ' + e.text)
          console.error('error object stack: ')
          console.error(e.stack)
        }
      }
    } else {
      console.error(`[web-worker-client] server send an illegal message.`)
      connection.close()
    }
  }

  /**
   * @param {Array<{buffer: ArrayBuffer, fds: Array<WebFD>}>}wireMessages
   * @return {Promise<void>}
   */
  connection.onFlush = async (wireMessages) => {
    _flushQueue.push(wireMessages)

    if (_flushQueue.length > 1) {
      return
    }

    while (_flushQueue.length) {
      const sendWireMessages = _flushQueue[0]

      // convert to single arrayBuffer so it can be send over a data channel using zero copy semantics.
      const messagesSize = sendWireMessages.reduce((previousValue, currentValue) => previousValue + currentValue.buffer.byteLength, 0)

      const sendBuffer = new Uint32Array(new ArrayBuffer(messagesSize))
      let offset = 0
      const meta = []
      for (const wireMessage of sendWireMessages) {
        for (const webFd of wireMessage.fds) {
          const transferable = await webFd.getTransferable()
          meta.push(transferable)
        }
        const message = new Uint32Array(wireMessage.buffer)
        sendBuffer.set(message, offset)
        offset += message.length
      }

      postMessage({ protocolMessage: sendBuffer.buffer, meta }, [sendBuffer.buffer].concat(meta))
      _flushQueue.shift()
    }
  }
}

_setupMessageHandling(display, connection, webFS)

/**
 * @param {WlSurfaceProxy}wlSurfaceProxy
 * @return {function(): Promise<number>}
 */
function frame (wlSurfaceProxy) {
  return () => {
    return new Promise(resolve => {
      const wlCallbackProxy = wlSurfaceProxy.frame()
      wlCallbackProxy.listener = {
        done: (data) => {
          resolve(data)
          wlCallbackProxy.destroy()
        }
      }
    })
  }
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/Display.js":
/*!**************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/Display.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Display; });
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _protocol_WlDisplayProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protocol/WlDisplayProxy */ "../../../westfield/client/runtime/src/protocol/WlDisplayProxy.js");
/*
MIT License

Copyright (c) 2017 Erik De Rijcke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/





class Display {
  /**
   * @param {Connection}connection
   */
  constructor (connection) {
    /**
     * @type {Array<number>}
     * @private
     */
    this._recycledIds = []
    /**
     * @type {Connection}
     * @private
     */
    this._connection = connection
    /**
     * @type {WlDisplayProxy}
     * @private
     */
    this._displayProxy = new _protocol_WlDisplayProxy__WEBPACK_IMPORTED_MODULE_1__["default"](this, this._connection, 1)
    /**
     * @type {number}
     * @private
     */
    this._lastId = 1
    /**
     * @type {function():void}
     * @private
     */
    this._destroyResolve = null
    /**
     * @type {function(error:Error):void}
     * @private
     */
    this._destroyReject = null
    /**
     * @type {Promise<void>}
     * @private
     */
    this._destroyPromise = new Promise(((resolve, reject) => {
      this._destroyResolve = resolve
      this._destroyReject = reject
    }))

    this._displayProxy.listener = {
      /**
       * @param id
       */
      deleteId: (id) => { this._recycledIds.push(id) },
      /**
       * @param proxy
       * @param code
       * @param message
       */
      error: (proxy, code, message) => { this._protocolError(proxy, code, message) }
    }
    /**
     * Set this to have a default 'catch-all' application error handler. Can be null for default behavior.
     * @param {function(error):void|null}
     */
    this.errorHandler = null
  }

  close () {
    if (this._connection.closed) { return }
    this._connection.close()
    this._destroyResolve()
  }

  /**
   * @param {Proxy}proxy
   * @param {number}code
   * @param {string}message
   * @private
   */
  _protocolError (proxy, code, message) {
    if (this._connection.closed) { return }
    this._connection.close()
    this._destroyReject(new Error(`Protocol error. type: ${proxy.constructor.name}, id: ${proxy.id}, code: ${code}, message: ${message}`))
  }

  /**
   * Resolves once the connection is closed normally ie. with a call to close(). The promise will be rejected with an
   * error if the connection is closed abnormally ie when a protocol error is received.
   *
   * @return {Promise<void>}
   */
  onClose () {
    return this._destroyPromise
  }

  /**
   * @return {WlRegistryProxy}
   */
  getRegistry () {
    return this._displayProxy.getRegistry()
  }

  /**
   * For internal use. Generates the id of the next proxy object.
   *
   * @return {number}
   */
  generateNextId () {
    if (this._recycledIds.length) {
      return this._recycledIds.shift()
    } else {
      return ++this._lastId
    }
  }

  /**
   * Wait for the compositor to have send us all remaining events.
   *
   * The data in the resolved promise is the event serial.
   *
   * Don't 'await' this sync call as it will result in a deadlock where the worker will block all incoming events,
   * including the event the resolves the await state. Instead use the classic 'then(..)' construct.
   *
   * @return {Promise<number>}
   */
  sync () {
    return new Promise(resolve => {
      const wlCallbackProxy = this._displayProxy.sync()
      wlCallbackProxy.listener = {
        done: (data) => {
          resolve(data)
          wlCallbackProxy.destroy()
        }
      }
    })
  }

  /**
   * Send queued messages to the compositor.
   */
  flush () {
    this._connection.flush()
  }
}


/***/ }),

/***/ "../../../westfield/client/runtime/src/WebFS.js":
/*!************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/WebFS.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebFS; });
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");


// TODO This is currently a literal copy of the server implementation. Do all use cases match 1o1 and can we use a single common code base between client & server for WebFS?
class WebFS {
  /**
   * @param {string}fdDomainUUID
   * @return {WebFS}
   */
  static create (fdDomainUUID) {
    return new WebFS(fdDomainUUID)
  }

  /**
   * @param {string}fdDomainUUID
   */
  constructor (fdDomainUUID) {
    /**
     * @type {string}
     * @private
     */
    this._fdDomainUUID = fdDomainUUID
    /**
     * @type {Object.<number,WebFD>}
     * @private
     */
    this._webFDs = {}
    /**
     * @type {number}
     * @private
     */
    this._nextFD = 0
  }

  /**
   * @param {ArrayBuffer} arrayBuffer
   * @return {WebFD}
   */
  fromArrayBuffer (arrayBuffer) {
    if (!(arrayBuffer instanceof ArrayBuffer)) {
      throw new TypeError(`Expected first argument to be of type ArrayBuffer.`)
    }
    const fd = this._nextFD++
    const webFD = new westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["WebFD"](fd, 'ArrayBuffer', this._fdDomainUUID, () => Promise.resolve(arrayBuffer), () => { delete this._webFDs[fd] })
    this._webFDs[fd] = webFD
    return webFD
  }

  /**
   * @param {ImageBitmap}imageBitmap
   * @return {WebFD}
   */
  fromImageBitmap (imageBitmap) {
    if (!(imageBitmap instanceof ImageBitmap)) {
      throw new TypeError(`Expected first argument to be of type ImageBitmap.`)
    }
    const fd = this._nextFD++
    const webFD = new westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["WebFD"](fd, 'ImageBitmap', this._fdDomainUUID, () => Promise.resolve(imageBitmap), () => { delete this._webFDs[fd] })
    this._webFDs[fd] = webFD
    return webFD
  }

  // TODO fromMessagePort

  /**
   * @param {number}fd
   * @return {WebFD}
   */
  getWebFD (fd) {
    return this._webFDs[fd]
  }
}


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/GrWebGlBufferProxy.js":
/*!**********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/GrWebGlBufferProxy.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *        Copyright © 2019 Erik De Rijcke
 *
 *        Permission is hereby granted, free of charge, to any person
 *        obtaining a copy of this software and associated documentation files
 *        (the "Software"), to deal in the Software without restriction,
 *        including without limitation the rights to use, copy, modify, merge,
 *        publish, distribute, sublicense, and/or sell copies of the Software,
 *        and to permit persons to whom the Software is furnished to do so,
 *        subject to the following conditions:
 *
 *        The above copyright notice and this permission notice (including the
 *        next paragraph) shall be included in all copies or substantial
 *        portions of the Software.
 *
 *        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *        BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *        ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *        SOFTWARE.
 *    
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]

class GrWebGlBufferProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *                Transfer the associated HTML5 web gl buffer contents to the compositor.
	 *            
	 *
	 * @param {WebFD} contents HTML5 web gl image bitmap to transfer to the compositor. 
	 *
	 * @since 1
	 *
	 */
	transfer (contents) {
		this._marshall(this.id, 0, [fileDescriptor(contents)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {GrWebGlBufferEvents|null}
		 */
		this.listener = null
	}

}
GrWebGlBufferProxy.protocolName = 'gr_web_gl_buffer'

/* harmony default export */ __webpack_exports__["default"] = (GrWebGlBufferProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/GrWebGlProxy.js":
/*!****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/GrWebGlProxy.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _GrWebGlBufferProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GrWebGlBufferProxy */ "../../../westfield/client/runtime/src/protocol/GrWebGlBufferProxy.js");
/* harmony import */ var _WlBufferProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WlBufferProxy */ "../../../westfield/client/runtime/src/protocol/WlBufferProxy.js");
/*
 *
 *        Copyright © 2019 Erik De Rijcke
 *
 *        Permission is hereby granted, free of charge, to any person
 *        obtaining a copy of this software and associated documentation files
 *        (the "Software"), to deal in the Software without restriction,
 *        including without limitation the rights to use, copy, modify, merge,
 *        publish, distribute, sublicense, and/or sell copies of the Software,
 *        and to permit persons to whom the Software is furnished to do so,
 *        subject to the following conditions:
 *
 *        The above copyright notice and this permission notice (including the
 *        next paragraph) shall be included in all copies or substantial
 *        portions of the Software.
 *
 *        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *        BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *        ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *        SOFTWARE.
 *    
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]




/**
 *
 *            A singleton global object that provides support for web gl.
 *
 *            Clients can create wl_buffer objects using the create_buffer request.
 *        
 */
class GrWebGlProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *                Create a web_gl_buffer object.
	 *            
	 *
	 * @return {GrWebGlBufferProxy} The gr_web_gl buffer to create. 
	 *
	 * @since 1
	 *
	 */
	createWebGlBuffer () {
		return this._marshallConstructor(this.id, 0, _GrWebGlBufferProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *                Create a wl_buffer object from a web_array_buffer so it can be used with a surface.
	 *            
	 *
	 * @param {*} grWebGlBuffer The gr_web_gl_buffer to wrap. 
	 * @return {WlBufferProxy} The buffer to create. 
	 *
	 * @since 1
	 *
	 */
	createBuffer (grWebGlBuffer) {
		return this._marshallConstructor(this.id, 1, _WlBufferProxy__WEBPACK_IMPORTED_MODULE_3__["default"], [newObject(), object(grWebGlBuffer)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {GrWebGlEvents|null}
		 */
		this.listener = null
	}

}
GrWebGlProxy.protocolName = 'gr_web_gl'

/* harmony default export */ __webpack_exports__["default"] = (GrWebGlProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/GrWebShmBufferEvents.js":
/*!************************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/GrWebShmBufferEvents.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GrWebShmBufferEvents; });
/*
 *
 *        Copyright © 2019 Erik De Rijcke
 *
 *        Permission is hereby granted, free of charge, to any person
 *        obtaining a copy of this software and associated documentation files
 *        (the "Software"), to deal in the Software without restriction,
 *        including without limitation the rights to use, copy, modify, merge,
 *        publish, distribute, sublicense, and/or sell copies of the Software,
 *        and to permit persons to whom the Software is furnished to do so,
 *        subject to the following conditions:
 *
 *        The above copyright notice and this permission notice (including the
 *        next paragraph) shall be included in all copies or substantial
 *        portions of the Software.
 *
 *        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *        BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *        ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *        SOFTWARE.
 *    
 */

/**
 * @interface
 */
class GrWebShmBufferEvents {

	/**
	 *
	 *                Detaches a previously attached HTML5 array buffer from the compositor and returns it to the client so
	 *                it can be reused again for writing. After detaching, the array buffer ownership is passed from
	 *                the compositor main thread back to the client.
	 *            
	 *
	 * @param {WebFD} contents An HTML5 array buffer, detached from the compositor 
	 *
	 * @since 1
	 *
	 */
	detach(contents) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/GrWebShmBufferProxy.js":
/*!***********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/GrWebShmBufferProxy.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *        Copyright © 2019 Erik De Rijcke
 *
 *        Permission is hereby granted, free of charge, to any person
 *        obtaining a copy of this software and associated documentation files
 *        (the "Software"), to deal in the Software without restriction,
 *        including without limitation the rights to use, copy, modify, merge,
 *        publish, distribute, sublicense, and/or sell copies of the Software,
 *        and to permit persons to whom the Software is furnished to do so,
 *        subject to the following conditions:
 *
 *        The above copyright notice and this permission notice (including the
 *        next paragraph) shall be included in all copies or substantial
 *        portions of the Software.
 *
 *        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *        BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *        ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *        SOFTWARE.
 *    
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]

class GrWebShmBufferProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *                Attaches an HTML5 array buffer to the compositor. After attaching, the array buffer ownership is passed
	 *                to the compositor main thread. The array buffer can not be used for writing anymore by the client as
	 *                per HTML5 Transferable objects spec.
	 *
	 *                The pixel format of the attached array buffer must always be RGBA8888 as per HTML5 ImageData spec.
	 *                Stride must always equal width.
	 *            
	 *
	 * @param {WebFD} contents An HTML5 array buffer to attach to the compositor. 
	 *
	 * @since 1
	 *
	 */
	attach (contents) {
		this._marshall(this.id, 0, [fileDescriptor(contents)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {GrWebShmBufferEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.detach(h(message))
	}

}
GrWebShmBufferProxy.protocolName = 'gr_web_shm_buffer'

/* harmony default export */ __webpack_exports__["default"] = (GrWebShmBufferProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/GrWebShmProxy.js":
/*!*****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/GrWebShmProxy.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _GrWebShmBufferProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GrWebShmBufferProxy */ "../../../westfield/client/runtime/src/protocol/GrWebShmBufferProxy.js");
/* harmony import */ var _WlBufferProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WlBufferProxy */ "../../../westfield/client/runtime/src/protocol/WlBufferProxy.js");
/*
 *
 *        Copyright © 2019 Erik De Rijcke
 *
 *        Permission is hereby granted, free of charge, to any person
 *        obtaining a copy of this software and associated documentation files
 *        (the "Software"), to deal in the Software without restriction,
 *        including without limitation the rights to use, copy, modify, merge,
 *        publish, distribute, sublicense, and/or sell copies of the Software,
 *        and to permit persons to whom the Software is furnished to do so,
 *        subject to the following conditions:
 *
 *        The above copyright notice and this permission notice (including the
 *        next paragraph) shall be included in all copies or substantial
 *        portions of the Software.
 *
 *        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *        BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *        ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *        SOFTWARE.
 *    
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]




/**
 *
 *            A singleton global object that provides support for shared memory through HTML5 array buffers.
 *
 *            Clients can create wl_buffer objects using the create_buffer request.
 *        
 */
class GrWebShmProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *                Create a gr_web_shm_buffer object.
	 *            
	 *
	 * @return {GrWebShmBufferProxy} web shm buffer to create 
	 *
	 * @since 1
	 *
	 */
	createWebArrayBuffer () {
		return this._marshallConstructor(this.id, 0, _GrWebShmBufferProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *                Create a wl_buffer object from a web_array_buffer so it can be used with a surface.
	 *            
	 *
	 * @param {*} webArrayBuffer The gr_web_array_buffer to wrap 
	 * @param {number} width Buffer width, in pixels. 
	 * @param {number} height Buffer height, in pixels. 
	 * @return {WlBufferProxy} buffer to create 
	 *
	 * @since 1
	 *
	 */
	createBuffer (webArrayBuffer, width, height) {
		return this._marshallConstructor(this.id, 1, _WlBufferProxy__WEBPACK_IMPORTED_MODULE_3__["default"], [newObject(), object(webArrayBuffer), int(width), int(height)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {GrWebShmEvents|null}
		 */
		this.listener = null
	}

}
GrWebShmProxy.protocolName = 'gr_web_shm'

/* harmony default export */ __webpack_exports__["default"] = (GrWebShmProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/Proxy.js":
/*!*********************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/Proxy.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Proxy; });
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/*
MIT License

Copyright (c) 2017 Erik De Rijcke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/




class Proxy extends westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["WlObject"] {
  /**
   * @param {Display} display
   * @param {Connection}connection
   * @param {number}id
   */
  constructor (display, connection, id) {
    super(id)
    /**
     * @type {Display}
     * @private
     */
    this.display = display
    /**
     * @type {Connection}
     * @protected
     */
    this._connection = connection
    connection.registerWlObject(this)
  }

  destroy () {
    super.destroy()
    this._connection.unregisterWlObject(this)
  }

  /**
   * For internal use only.
   * @param {number} id
   * @param {number} opcode
   * @param {Function} proxyClass
   * @param {Array<{value: *, type: string, size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}>} argsArray
   * @protected
   */
  _marshallConstructor (id, opcode, proxyClass, argsArray) {
    // construct new object
    const proxy = new proxyClass(this.display, this._connection, this.display.generateNextId())

    // determine required wire message length
    let size = 4 + 2 + 2 // id+size+opcode
    argsArray.forEach(arg => {
      if (arg.type === 'n') {
        arg.value = proxy.id
      }
      size += arg.size
    })

    this._connection.marshallMsg(id, opcode, size, argsArray)

    return proxy
  }

  /**
   * For internal use only.
   * @param {number} id
   * @param {number} opcode
   * @param {Array<{value: *, type: string, size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}>} argsArray
   * @protected
   */
  _marshall (id, opcode, argsArray) {
    // determine required wire message length
    let size = 4 + 2 + 2  // id+size+opcode
    argsArray.forEach(arg => size += arg.size)
    this._connection.marshallMsg(id, opcode, size, argsArray)
  }
}




/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlBufferEvents.js":
/*!******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlBufferEvents.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlBufferEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlBufferEvents {

	/**
	 *
	 *	Sent when this wl_buffer is no longer used by the compositor.
	 *	The client is now free to reuse or destroy this buffer and its
	 *	backing storage.
	 *
	 *	If a client receives a release event before the frame callback
	 *	requested in the same wl_surface.commit that attaches this
	 *	wl_buffer to a surface, then the client is immediately free to
	 *	reuse the buffer and its backing storage, and does not need a
	 *	second buffer for the next surface content update. Typically
	 *	this is possible, when the compositor maintains a copy of the
	 *	wl_surface contents, e.g. as a GL texture. This is an important
	 *	optimization for GL(ES) compositors with wl_shm clients.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	release() {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlBufferProxy.js":
/*!*****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlBufferProxy.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      A buffer provides the content for a wl_surface. Buffers are
 *      created through factory interfaces such as wl_drm, wl_shm or
 *      similar. It has a width and a height and can be attached to a
 *      wl_surface, but the mechanism by which a client provides and
 *      updates the contents is defined by the buffer factory interface.
 *    
 */
class WlBufferProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Destroy a buffer. If and how you need to release the backing
	 *	storage is defined by the buffer factory interface.
	 *
	 *	For possible side-effects to a surface, see wl_surface.attach.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlBufferEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.release()
	}

}
WlBufferProxy.protocolName = 'wl_buffer'

/* harmony default export */ __webpack_exports__["default"] = (WlBufferProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlCallbackEvents.js":
/*!********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlCallbackEvents.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlCallbackEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlCallbackEvents {

	/**
	 *
	 *	Notify the client when the related request is done.
	 *      
	 *
	 * @param {number} callbackData request-specific data for the callback 
	 *
	 * @since 1
	 *
	 */
	done(callbackData) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlCallbackProxy.js":
/*!*******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlCallbackProxy.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      Clients can handle the 'done' event to get notified when
 *      the related request is done.
 *    
 */
class WlCallbackProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlCallbackEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.done(u(message))
	}

}
WlCallbackProxy.protocolName = 'wl_callback'

/* harmony default export */ __webpack_exports__["default"] = (WlCallbackProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlCompositorProxy.js":
/*!*********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlCompositorProxy.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _WlSurfaceProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WlSurfaceProxy */ "../../../westfield/client/runtime/src/protocol/WlSurfaceProxy.js");
/* harmony import */ var _WlRegionProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WlRegionProxy */ "../../../westfield/client/runtime/src/protocol/WlRegionProxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]




/**
 *
 *      A compositor.  This object is a singleton global.  The
 *      compositor is in charge of combining the contents of multiple
 *      surfaces into one displayable output.
 *    
 */
class WlCompositorProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Ask the compositor to create a new surface.
	 *      
	 *
	 * @return {WlSurfaceProxy} the new surface 
	 *
	 * @since 1
	 *
	 */
	createSurface () {
		return this._marshallConstructor(this.id, 0, _WlSurfaceProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *	Ask the compositor to create a new region.
	 *      
	 *
	 * @return {WlRegionProxy} the new region 
	 *
	 * @since 1
	 *
	 */
	createRegion () {
		return this._marshallConstructor(this.id, 1, _WlRegionProxy__WEBPACK_IMPORTED_MODULE_3__["default"], [newObject()])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlCompositorEvents|null}
		 */
		this.listener = null
	}

}
WlCompositorProxy.protocolName = 'wl_compositor'

/* harmony default export */ __webpack_exports__["default"] = (WlCompositorProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDataDeviceEvents.js":
/*!**********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDataDeviceEvents.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlDataDeviceEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlDataDeviceEvents {

	/**
	 *
	 *	The data_offer event introduces a new wl_data_offer object,
	 *	which will subsequently be used in either the
	 *	data_device.enter event (for drag-and-drop) or the
	 *	data_device.selection event (for selections).  Immediately
	 *	following the data_device_data_offer event, the new data_offer
	 *	object will send out data_offer.offer events to describe the
	 *	mime types it offers.
	 *      
	 *
	 * @param {number} id the new data_offer object 
	 *
	 * @since 1
	 *
	 */
	dataOffer(id) {}

	/**
	 *
	 *	This event is sent when an active drag-and-drop pointer enters
	 *	a surface owned by the client.  The position of the pointer at
	 *	enter time is provided by the x and y arguments, in surface-local
	 *	coordinates.
	 *      
	 *
	 * @param {number} serial serial number of the enter event 
	 * @param {*} surface client surface entered 
	 * @param {Fixed} x surface-local x coordinate 
	 * @param {Fixed} y surface-local y coordinate 
	 * @param {?*} id source data_offer object 
	 *
	 * @since 1
	 *
	 */
	enter(serial, surface, x, y, id) {}

	/**
	 *
	 *	This event is sent when the drag-and-drop pointer leaves the
	 *	surface and the session ends.  The client must destroy the
	 *	wl_data_offer introduced at enter time at this point.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	leave() {}

	/**
	 *
	 *	This event is sent when the drag-and-drop pointer moves within
	 *	the currently focused surface. The new position of the pointer
	 *	is provided by the x and y arguments, in surface-local
	 *	coordinates.
	 *      
	 *
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {Fixed} x surface-local x coordinate 
	 * @param {Fixed} y surface-local y coordinate 
	 *
	 * @since 1
	 *
	 */
	motion(time, x, y) {}

	/**
	 *
	 *	The event is sent when a drag-and-drop operation is ended
	 *	because the implicit grab is removed.
	 *
	 *	The drag-and-drop destination is expected to honor the last action
	 *	received through wl_data_offer.action, if the resulting action is
	 *	"copy" or "move", the destination can still perform
	 *	wl_data_offer.receive requests, and is expected to end all
	 *	transfers with a wl_data_offer.finish request.
	 *
	 *	If the resulting action is "ask", the action will not be considered
	 *	final. The drag-and-drop destination is expected to perform one last
	 *	wl_data_offer.set_actions request, or wl_data_offer.destroy in order
	 *	to cancel the operation.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	drop() {}

	/**
	 *
	 *	The selection event is sent out to notify the client of a new
	 *	wl_data_offer for the selection for this device.  The
	 *	data_device.data_offer and the data_offer.offer events are
	 *	sent out immediately before this event to introduce the data
	 *	offer object.  The selection event is sent to a client
	 *	immediately before receiving keyboard focus and when a new
	 *	selection is set while the client has keyboard focus.  The
	 *	data_offer is valid until a new data_offer or NULL is received
	 *	or until the client loses keyboard focus.  The client must
	 *	destroy the previous selection data_offer, if any, upon receiving
	 *	this event.
	 *      
	 *
	 * @param {?*} id selection data_offer object 
	 *
	 * @since 1
	 *
	 */
	selection(id) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDataDeviceManagerProxy.js":
/*!****************************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDataDeviceManagerProxy.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _WlDataSourceProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WlDataSourceProxy */ "../../../westfield/client/runtime/src/protocol/WlDataSourceProxy.js");
/* harmony import */ var _WlDataDeviceProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WlDataDeviceProxy */ "../../../westfield/client/runtime/src/protocol/WlDataDeviceProxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]




/**
 *
 *      The wl_data_device_manager is a singleton global object that
 *      provides access to inter-client data transfer mechanisms such as
 *      copy-and-paste and drag-and-drop.  These mechanisms are tied to
 *      a wl_seat and this interface lets a client get a wl_data_device
 *      corresponding to a wl_seat.
 *
 *      Depending on the version bound, the objects created from the bound
 *      wl_data_device_manager object will have different requirements for
 *      functioning properly. See wl_data_source.set_actions,
 *      wl_data_offer.accept and wl_data_offer.finish for details.
 *    
 */
class WlDataDeviceManagerProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Create a new data source.
	 *      
	 *
	 * @return {WlDataSourceProxy} data source to create 
	 *
	 * @since 1
	 *
	 */
	createDataSource () {
		return this._marshallConstructor(this.id, 0, _WlDataSourceProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *	Create a new data device for a given seat.
	 *      
	 *
	 * @param {*} seat seat associated with the data device 
	 * @return {WlDataDeviceProxy} data device to create 
	 *
	 * @since 1
	 *
	 */
	getDataDevice (seat) {
		return this._marshallConstructor(this.id, 1, _WlDataDeviceProxy__WEBPACK_IMPORTED_MODULE_3__["default"], [newObject(), object(seat)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlDataDeviceManagerEvents|null}
		 */
		this.listener = null
	}

}
WlDataDeviceManagerProxy.protocolName = 'wl_data_device_manager'

WlDataDeviceManagerProxy.DndAction = {
  /**
   * no action
   */
  none: 0,
  /**
   * copy action
   */
  copy: 1,
  /**
   * move action
   */
  move: 2,
  /**
   * ask action
   */
  ask: 4
}

/* harmony default export */ __webpack_exports__["default"] = (WlDataDeviceManagerProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDataDeviceProxy.js":
/*!*********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDataDeviceProxy.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _WlDataOfferProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WlDataOfferProxy */ "../../../westfield/client/runtime/src/protocol/WlDataOfferProxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]



/**
 *
 *      There is one wl_data_device per seat which can be obtained
 *      from the global wl_data_device_manager singleton.
 *
 *      A wl_data_device provides access to inter-client data transfer
 *      mechanisms such as copy-and-paste and drag-and-drop.
 *    
 */
class WlDataDeviceProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	This request asks the compositor to start a drag-and-drop
	 *	operation on behalf of the client.
	 *
	 *	The source argument is the data source that provides the data
	 *	for the eventual data transfer. If source is NULL, enter, leave
	 *	and motion events are sent only to the client that initiated the
	 *	drag and the client is expected to handle the data passing
	 *	internally.
	 *
	 *	The origin surface is the surface where the drag originates and
	 *	the client must have an active implicit grab that matches the
	 *	serial.
	 *
	 *	The icon surface is an optional (can be NULL) surface that
	 *	provides an icon to be moved around with the cursor.  Initially,
	 *	the top-left corner of the icon surface is placed at the cursor
	 *	hotspot, but subsequent wl_surface.attach request can move the
	 *	relative position. Attach requests must be confirmed with
	 *	wl_surface.commit as usual. The icon surface is given the role of
	 *	a drag-and-drop icon. If the icon surface already has another role,
	 *	it raises a protocol error.
	 *
	 *	The current and pending input regions of the icon wl_surface are
	 *	cleared, and wl_surface.set_input_region is ignored until the
	 *	wl_surface is no longer used as the icon surface. When the use
	 *	as an icon ends, the current and pending input regions become
	 *	undefined, and the wl_surface is unmapped.
	 *      
	 *
	 * @param {?*} source data source for the eventual transfer 
	 * @param {*} origin surface where the drag originates 
	 * @param {?*} icon drag-and-drop icon surface 
	 * @param {number} serial serial number of the implicit grab on the origin 
	 *
	 * @since 1
	 *
	 */
	startDrag (source, origin, icon, serial) {
		this._marshall(this.id, 0, [objectOptional(source), object(origin), objectOptional(icon), uint(serial)])
	}

	/**
	 *
	 *	This request asks the compositor to set the selection
	 *	to the data from the source on behalf of the client.
	 *
	 *	To unset the selection, set the source to NULL.
	 *      
	 *
	 * @param {?*} source data source for the selection 
	 * @param {number} serial serial number of the event that triggered this request 
	 *
	 * @since 1
	 *
	 */
	setSelection (source, serial) {
		this._marshall(this.id, 1, [objectOptional(source), uint(serial)])
	}

	/**
	 *
	 *	This request destroys the data device.
	 *      
	 * @since 2
	 *
	 */
	release () {
		super.destroy()
		this._marshall(this.id, 2, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlDataDeviceEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.dataOffer(new _WlDataOfferProxy__WEBPACK_IMPORTED_MODULE_2__["default"](this._connection, n(message)))
	}

	async [1] (message) {
		await this.listener.enter(u(message), o(message, false, this._connection), f(message), f(message), o(message, true, this._connection))
	}

	async [2] (message) {
		await this.listener.leave()
	}

	async [3] (message) {
		await this.listener.motion(u(message), f(message), f(message))
	}

	async [4] (message) {
		await this.listener.drop()
	}

	async [5] (message) {
		await this.listener.selection(o(message, true, this._connection))
	}

}
WlDataDeviceProxy.protocolName = 'wl_data_device'

WlDataDeviceProxy.Error = {
  /**
   * given wl_surface has another role
   */
  role: 0
}

/* harmony default export */ __webpack_exports__["default"] = (WlDataDeviceProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDataOfferEvents.js":
/*!*********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDataOfferEvents.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlDataOfferEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlDataOfferEvents {

	/**
	 *
	 *	Sent immediately after creating the wl_data_offer object.  One
	 *	event per offered mime type.
	 *      
	 *
	 * @param {string} mimeType offered mime type 
	 *
	 * @since 1
	 *
	 */
	offer(mimeType) {}

	/**
	 *
	 *	This event indicates the actions offered by the data source. It
	 *	will be sent right after wl_data_device.enter, or anytime the source
	 *	side changes its offered actions through wl_data_source.set_actions.
	 *      
	 *
	 * @param {number} sourceActions actions offered by the data source 
	 *
	 * @since 3
	 *
	 */
	sourceActions(sourceActions) {}

	/**
	 *
	 *	This event indicates the action selected by the compositor after
	 *	matching the source/destination side actions. Only one action (or
	 *	none) will be offered here.
	 *
	 *	This event can be emitted multiple times during the drag-and-drop
	 *	operation in response to destination side action changes through
	 *	wl_data_offer.set_actions.
	 *
	 *	This event will no longer be emitted after wl_data_device.drop
	 *	happened on the drag-and-drop destination, the client must
	 *	honor the last action received, or the last preferred one set
	 *	through wl_data_offer.set_actions when handling an "ask" action.
	 *
	 *	Compositors may also change the selected action on the fly, mainly
	 *	in response to keyboard modifier changes during the drag-and-drop
	 *	operation.
	 *
	 *	The most recent action received is always the valid one. Prior to
	 *	receiving wl_data_device.drop, the chosen action may change (e.g.
	 *	due to keyboard modifiers being pressed). At the time of receiving
	 *	wl_data_device.drop the drag-and-drop destination must honor the
	 *	last action received.
	 *
	 *	Action changes may still happen after wl_data_device.drop,
	 *	especially on "ask" actions, where the drag-and-drop destination
	 *	may choose another action afterwards. Action changes happening
	 *	at this stage are always the result of inter-client negotiation, the
	 *	compositor shall no longer be able to induce a different action.
	 *
	 *	Upon "ask" actions, it is expected that the drag-and-drop destination
	 *	may potentially choose a different action and/or mime type,
	 *	based on wl_data_offer.source_actions and finally chosen by the
	 *	user (e.g. popping up a menu with the available options). The
	 *	final wl_data_offer.set_actions and wl_data_offer.accept requests
	 *	must happen before the call to wl_data_offer.finish.
	 *      
	 *
	 * @param {number} dndAction action selected by the compositor 
	 *
	 * @since 3
	 *
	 */
	action(dndAction) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDataOfferProxy.js":
/*!********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDataOfferProxy.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      A wl_data_offer represents a piece of data offered for transfer
 *      by another client (the source client).  It is used by the
 *      copy-and-paste and drag-and-drop mechanisms.  The offer
 *      describes the different mime types that the data can be
 *      converted to and provides the mechanism for transferring the
 *      data directly from the source client.
 *    
 */
class WlDataOfferProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Indicate that the client can accept the given mime type, or
	 *	NULL for not accepted.
	 *
	 *	For objects of version 2 or older, this request is used by the
	 *	client to give feedback whether the client can receive the given
	 *	mime type, or NULL if none is accepted; the feedback does not
	 *	determine whether the drag-and-drop operation succeeds or not.
	 *
	 *	For objects of version 3 or newer, this request determines the
	 *	final result of the drag-and-drop operation. If the end result
	 *	is that no mime types were accepted, the drag-and-drop operation
	 *	will be cancelled and the corresponding drag source will receive
	 *	wl_data_source.cancelled. Clients may still use this event in
	 *	conjunction with wl_data_source.action for feedback.
	 *      
	 *
	 * @param {number} serial serial number of the accept request 
	 * @param {?string} mimeType mime type accepted by the client 
	 *
	 * @since 1
	 *
	 */
	accept (serial, mimeType) {
		this._marshall(this.id, 0, [uint(serial), stringOptional(mimeType)])
	}

	/**
	 *
	 *	To transfer the offered data, the client issues this request
	 *	and indicates the mime type it wants to receive.  The transfer
	 *	happens through the passed file descriptor (typically created
	 *	with the pipe system call).  The source client writes the data
	 *	in the mime type representation requested and then closes the
	 *	file descriptor.
	 *
	 *	The receiving client reads from the read end of the pipe until
	 *	EOF and then closes its end, at which point the transfer is
	 *	complete.
	 *
	 *	This request may happen multiple times for different mime types,
	 *	both before and after wl_data_device.drop. Drag-and-drop destination
	 *	clients may preemptively fetch data or examine it more closely to
	 *	determine acceptance.
	 *      
	 *
	 * @param {string} mimeType mime type desired by receiver 
	 * @param {WebFD} fd file descriptor for data transfer 
	 *
	 * @since 1
	 *
	 */
	receive (mimeType, fd) {
		this._marshall(this.id, 1, [string(mimeType), fileDescriptor(fd)])
	}

	/**
	 *
	 *	Destroy the data offer.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 2, [])
	}

	/**
	 *
	 *	Notifies the compositor that the drag destination successfully
	 *	finished the drag-and-drop operation.
	 *
	 *	Upon receiving this request, the compositor will emit
	 *	wl_data_source.dnd_finished on the drag source client.
	 *
	 *	It is a client error to perform other requests than
	 *	wl_data_offer.destroy after this one. It is also an error to perform
	 *	this request after a NULL mime type has been set in
	 *	wl_data_offer.accept or no action was received through
	 *	wl_data_offer.action.
	 *      
	 * @since 3
	 *
	 */
	finish () {
		this._marshall(this.id, 3, [])
	}

	/**
	 *
	 *	Sets the actions that the destination side client supports for
	 *	this operation. This request may trigger the emission of
	 *	wl_data_source.action and wl_data_offer.action events if the compositor
	 *	needs to change the selected action.
	 *
	 *	This request can be called multiple times throughout the
	 *	drag-and-drop operation, typically in response to wl_data_device.enter
	 *	or wl_data_device.motion events.
	 *
	 *	This request determines the final result of the drag-and-drop
	 *	operation. If the end result is that no action is accepted,
	 *	the drag source will receive wl_drag_source.cancelled.
	 *
	 *	The dnd_actions argument must contain only values expressed in the
	 *	wl_data_device_manager.dnd_actions enum, and the preferred_action
	 *	argument must only contain one of those values set, otherwise it
	 *	will result in a protocol error.
	 *
	 *	While managing an "ask" action, the destination drag-and-drop client
	 *	may perform further wl_data_offer.receive requests, and is expected
	 *	to perform one last wl_data_offer.set_actions request with a preferred
	 *	action other than "ask" (and optionally wl_data_offer.accept) before
	 *	requesting wl_data_offer.finish, in order to convey the action selected
	 *	by the user. If the preferred action is not in the
	 *	wl_data_offer.source_actions mask, an error will be raised.
	 *
	 *	If the "ask" action is dismissed (e.g. user cancellation), the client
	 *	is expected to perform wl_data_offer.destroy right away.
	 *
	 *	This request can only be made on drag-and-drop offers, a protocol error
	 *	will be raised otherwise.
	 *      
	 *
	 * @param {number} dndActions actions supported by the destination client 
	 * @param {number} preferredAction action preferred by the destination client 
	 *
	 * @since 3
	 *
	 */
	setActions (dndActions, preferredAction) {
		this._marshall(this.id, 4, [uint(dndActions), uint(preferredAction)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlDataOfferEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.offer(s(message, false))
	}

	async [1] (message) {
		await this.listener.sourceActions(u(message))
	}

	async [2] (message) {
		await this.listener.action(u(message))
	}

}
WlDataOfferProxy.protocolName = 'wl_data_offer'

WlDataOfferProxy.Error = {
  /**
   * finish request was called untimely
   */
  invalidFinish: 0,
  /**
   * action mask contains invalid values
   */
  invalidActionMask: 1,
  /**
   * action argument has an invalid value
   */
  invalidAction: 2,
  /**
   * offer doesn't accept this request
   */
  invalidOffer: 3
}

/* harmony default export */ __webpack_exports__["default"] = (WlDataOfferProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDataSourceEvents.js":
/*!**********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDataSourceEvents.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlDataSourceEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlDataSourceEvents {

	/**
	 *
	 *	Sent when a target accepts pointer_focus or motion events.  If
	 *	a target does not accept any of the offered types, type is NULL.
	 *
	 *	Used for feedback during drag-and-drop.
	 *      
	 *
	 * @param {?string} mimeType mime type accepted by the target 
	 *
	 * @since 1
	 *
	 */
	target(mimeType) {}

	/**
	 *
	 *	Request for data from the client.  Send the data as the
	 *	specified mime type over the passed file descriptor, then
	 *	close it.
	 *      
	 *
	 * @param {string} mimeType mime type for the data 
	 * @param {WebFD} fd file descriptor for the data 
	 *
	 * @since 1
	 *
	 */
	send(mimeType, fd) {}

	/**
	 *
	 *	This data source is no longer valid. There are several reasons why
	 *	this could happen:
	 *
	 *	- The data source has been replaced by another data source.
	 *	- The drag-and-drop operation was performed, but the drop destination
	 *	  did not accept any of the mime types offered through
	 *	  wl_data_source.target.
	 *	- The drag-and-drop operation was performed, but the drop destination
	 *	  did not select any of the actions present in the mask offered through
	 *	  wl_data_source.action.
	 *	- The drag-and-drop operation was performed but didn't happen over a
	 *	  surface.
	 *	- The compositor cancelled the drag-and-drop operation (e.g. compositor
	 *	  dependent timeouts to avoid stale drag-and-drop transfers).
	 *
	 *	The client should clean up and destroy this data source.
	 *
	 *	For objects of version 2 or older, wl_data_source.cancelled will
	 *	only be emitted if the data source was replaced by another data
	 *	source.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	cancelled() {}

	/**
	 *
	 *	The user performed the drop action. This event does not indicate
	 *	acceptance, wl_data_source.cancelled may still be emitted afterwards
	 *	if the drop destination does not accept any mime type.
	 *
	 *	However, this event might however not be received if the compositor
	 *	cancelled the drag-and-drop operation before this event could happen.
	 *
	 *	Note that the data_source may still be used in the future and should
	 *	not be destroyed here.
	 *      
	 *
	 *
	 * @since 3
	 *
	 */
	dndDropPerformed() {}

	/**
	 *
	 *	The drop destination finished interoperating with this data
	 *	source, so the client is now free to destroy this data source and
	 *	free all associated data.
	 *
	 *	If the action used to perform the operation was "move", the
	 *	source can now delete the transferred data.
	 *      
	 *
	 *
	 * @since 3
	 *
	 */
	dndFinished() {}

	/**
	 *
	 *	This event indicates the action selected by the compositor after
	 *	matching the source/destination side actions. Only one action (or
	 *	none) will be offered here.
	 *
	 *	This event can be emitted multiple times during the drag-and-drop
	 *	operation, mainly in response to destination side changes through
	 *	wl_data_offer.set_actions, and as the data device enters/leaves
	 *	surfaces.
	 *
	 *	It is only possible to receive this event after
	 *	wl_data_source.dnd_drop_performed if the drag-and-drop operation
	 *	ended in an "ask" action, in which case the final wl_data_source.action
	 *	event will happen immediately before wl_data_source.dnd_finished.
	 *
	 *	Compositors may also change the selected action on the fly, mainly
	 *	in response to keyboard modifier changes during the drag-and-drop
	 *	operation.
	 *
	 *	The most recent action received is always the valid one. The chosen
	 *	action may change alongside negotiation (e.g. an "ask" action can turn
	 *	into a "move" operation), so the effects of the final action must
	 *	always be applied in wl_data_offer.dnd_finished.
	 *
	 *	Clients can trigger cursor surface changes from this point, so
	 *	they reflect the current action.
	 *      
	 *
	 * @param {number} dndAction action selected by the compositor 
	 *
	 * @since 3
	 *
	 */
	action(dndAction) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDataSourceProxy.js":
/*!*********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDataSourceProxy.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      The wl_data_source object is the source side of a wl_data_offer.
 *      It is created by the source client in a data transfer and
 *      provides a way to describe the offered data and a way to respond
 *      to requests to transfer the data.
 *    
 */
class WlDataSourceProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	This request adds a mime type to the set of mime types
	 *	advertised to targets.  Can be called several times to offer
	 *	multiple types.
	 *      
	 *
	 * @param {string} mimeType mime type offered by the data source 
	 *
	 * @since 1
	 *
	 */
	offer (mimeType) {
		this._marshall(this.id, 0, [string(mimeType)])
	}

	/**
	 *
	 *	Destroy the data source.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 1, [])
	}

	/**
	 *
	 *	Sets the actions that the source side client supports for this
	 *	operation. This request may trigger wl_data_source.action and
	 *	wl_data_offer.action events if the compositor needs to change the
	 *	selected action.
	 *
	 *	The dnd_actions argument must contain only values expressed in the
	 *	wl_data_device_manager.dnd_actions enum, otherwise it will result
	 *	in a protocol error.
	 *
	 *	This request must be made once only, and can only be made on sources
	 *	used in drag-and-drop, so it must be performed before
	 *	wl_data_device.start_drag. Attempting to use the source other than
	 *	for drag-and-drop will raise a protocol error.
	 *      
	 *
	 * @param {number} dndActions actions supported by the data source 
	 *
	 * @since 3
	 *
	 */
	setActions (dndActions) {
		this._marshall(this.id, 2, [uint(dndActions)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlDataSourceEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.target(s(message, true))
	}

	async [1] (message) {
		await this.listener.send(s(message, false), h(message))
	}

	async [2] (message) {
		await this.listener.cancelled()
	}

	async [3] (message) {
		await this.listener.dndDropPerformed()
	}

	async [4] (message) {
		await this.listener.dndFinished()
	}

	async [5] (message) {
		await this.listener.action(u(message))
	}

}
WlDataSourceProxy.protocolName = 'wl_data_source'

WlDataSourceProxy.Error = {
  /**
   * action mask contains invalid values
   */
  invalidActionMask: 0,
  /**
   * source doesn't accept this request
   */
  invalidSource: 1
}

/* harmony default export */ __webpack_exports__["default"] = (WlDataSourceProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDisplayEvents.js":
/*!*******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDisplayEvents.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlDisplayEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlDisplayEvents {

	/**
	 *
	 *	The error event is sent out when a fatal (non-recoverable)
	 *	error has occurred.  The object_id argument is the object
	 *	where the error occurred, most often in response to a request
	 *	to that object.  The code identifies the error and is defined
	 *	by the object interface.  As such, each interface defines its
	 *	own set of error codes.  The message is a brief description
	 *	of the error, for (debugging) convenience.
	 *      
	 *
	 * @param {*} objectId object where the error occurred 
	 * @param {number} code error code 
	 * @param {string} message error description 
	 *
	 * @since 1
	 *
	 */
	error(objectId, code, message) {}

	/**
	 *
	 *	This event is used internally by the object ID management
	 *	logic.  When a client deletes an object, the server will send
	 *	this event to acknowledge that it has seen the delete request.
	 *	When the client receives this event, it will know that it can
	 *	safely reuse the object ID.
	 *      
	 *
	 * @param {number} id deleted object ID 
	 *
	 * @since 1
	 *
	 */
	deleteId(id) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlDisplayProxy.js":
/*!******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlDisplayProxy.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _WlCallbackProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WlCallbackProxy */ "../../../westfield/client/runtime/src/protocol/WlCallbackProxy.js");
/* harmony import */ var _WlRegistryProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WlRegistryProxy */ "../../../westfield/client/runtime/src/protocol/WlRegistryProxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]




/**
 *
 *      The core global object.  This is a special singleton object.  It
 *      is used for internal Wayland protocol features.
 *    
 */
class WlDisplayProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	The sync request asks the server to emit the 'done' event
	 *	on the returned wl_callback object.  Since requests are
	 *	handled in-order and events are delivered in-order, this can
	 *	be used as a barrier to ensure all previous requests and the
	 *	resulting events have been handled.
	 *
	 *	The object returned by this request will be destroyed by the
	 *	compositor after the callback is fired and as such the client must not
	 *	attempt to use it after that point.
	 *
	 *	The callback_data passed in the callback is the event serial.
	 *      
	 *
	 * @return {WlCallbackProxy} callback object for the sync request 
	 *
	 * @since 1
	 *
	 */
	sync () {
		return this._marshallConstructor(this.id, 0, _WlCallbackProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *	This request creates a registry object that allows the client
	 *	to list and bind the global objects available from the
	 *	compositor.
	 *      
	 *
	 * @return {WlRegistryProxy} global registry object 
	 *
	 * @since 1
	 *
	 */
	getRegistry () {
		return this._marshallConstructor(this.id, 1, _WlRegistryProxy__WEBPACK_IMPORTED_MODULE_3__["default"], [newObject()])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlDisplayEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.error(o(message, false, this._connection), u(message), s(message, false))
	}

	async [1] (message) {
		await this.listener.deleteId(u(message))
	}

}
WlDisplayProxy.protocolName = 'wl_display'

WlDisplayProxy.Error = {
  /**
   * server couldn't find object
   */
  invalidObject: 0,
  /**
   * method doesn't exist on the specified interface
   */
  invalidMethod: 1,
  /**
   * server is out of memory
   */
  noMemory: 2
}

/* harmony default export */ __webpack_exports__["default"] = (WlDisplayProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlKeyboardEvents.js":
/*!********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlKeyboardEvents.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlKeyboardEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlKeyboardEvents {

	/**
	 *
	 *	This event provides a file descriptor to the client which can be
	 *	memory-mapped to provide a keyboard mapping description.
	 *      
	 *
	 * @param {number} format keymap format 
	 * @param {WebFD} fd keymap file descriptor 
	 * @param {number} size keymap size, in bytes 
	 *
	 * @since 1
	 *
	 */
	keymap(format, fd, size) {}

	/**
	 *
	 *	Notification that this seat's keyboard focus is on a certain
	 *	surface.
	 *      
	 *
	 * @param {number} serial serial number of the enter event 
	 * @param {*} surface surface gaining keyboard focus 
	 * @param {ArrayBuffer} keys the currently pressed keys 
	 *
	 * @since 1
	 *
	 */
	enter(serial, surface, keys) {}

	/**
	 *
	 *	Notification that this seat's keyboard focus is no longer on
	 *	a certain surface.
	 *
	 *	The leave notification is sent before the enter notification
	 *	for the new focus.
	 *      
	 *
	 * @param {number} serial serial number of the leave event 
	 * @param {*} surface surface that lost keyboard focus 
	 *
	 * @since 1
	 *
	 */
	leave(serial, surface) {}

	/**
	 *
	 *	A key was pressed or released.
	 *	The time argument is a timestamp with millisecond
	 *	granularity, with an undefined base.
	 *      
	 *
	 * @param {number} serial serial number of the key event 
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {number} key key that produced the event 
	 * @param {number} state physical state of the key 
	 *
	 * @since 1
	 *
	 */
	key(serial, time, key, state) {}

	/**
	 *
	 *	Notifies clients that the modifier and/or group state has
	 *	changed, and it should update its local state.
	 *      
	 *
	 * @param {number} serial serial number of the modifiers event 
	 * @param {number} modsDepressed depressed modifiers 
	 * @param {number} modsLatched latched modifiers 
	 * @param {number} modsLocked locked modifiers 
	 * @param {number} group keyboard layout 
	 *
	 * @since 1
	 *
	 */
	modifiers(serial, modsDepressed, modsLatched, modsLocked, group) {}

	/**
	 *
	 *	Informs the client about the keyboard's repeat rate and delay.
	 *
	 *	This event is sent as soon as the wl_keyboard object has been created,
	 *	and is guaranteed to be received by the client before any key press
	 *	event.
	 *
	 *	Negative values for either rate or delay are illegal. A rate of zero
	 *	will disable any repeating (regardless of the value of delay).
	 *
	 *	This event can be sent later on as well with a new value if necessary,
	 *	so clients should continue listening for the event past the creation
	 *	of wl_keyboard.
	 *      
	 *
	 * @param {number} rate the rate of repeating keys in characters per second 
	 * @param {number} delay delay in milliseconds since key down until repeating starts 
	 *
	 * @since 4
	 *
	 */
	repeatInfo(rate, delay) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlKeyboardProxy.js":
/*!*******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlKeyboardProxy.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      The wl_keyboard interface represents one or more keyboards
 *      associated with a seat.
 *    
 */
class WlKeyboardProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 * @since 3
	 *
	 */
	release () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlKeyboardEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.keymap(u(message), h(message), u(message))
	}

	async [1] (message) {
		await this.listener.enter(u(message), o(message, false, this._connection), a(message, false))
	}

	async [2] (message) {
		await this.listener.leave(u(message), o(message, false, this._connection))
	}

	async [3] (message) {
		await this.listener.key(u(message), u(message), u(message), u(message))
	}

	async [4] (message) {
		await this.listener.modifiers(u(message), u(message), u(message), u(message), u(message))
	}

	async [5] (message) {
		await this.listener.repeatInfo(i(message), i(message))
	}

}
WlKeyboardProxy.protocolName = 'wl_keyboard'

WlKeyboardProxy.KeymapFormat = {
  /**
   * no keymap; client must understand how to interpret the raw keycode
   */
  noKeymap: 0,
  /**
   * libxkbcommon compatible; to determine the xkb keycode, clients must add 8 to the key event keycode
   */
  xkbV1: 1
}

WlKeyboardProxy.KeyState = {
  /**
   * key is not pressed
   */
  released: 0,
  /**
   * key is pressed
   */
  pressed: 1
}

/* harmony default export */ __webpack_exports__["default"] = (WlKeyboardProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlOutputEvents.js":
/*!******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlOutputEvents.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlOutputEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlOutputEvents {

	/**
	 *
	 *	The geometry event describes geometric properties of the output.
	 *	The event is sent when binding to the output object and whenever
	 *	any of the properties change.
	 *      
	 *
	 * @param {number} x x position within the global compositor space 
	 * @param {number} y y position within the global compositor space 
	 * @param {number} physicalWidth width in millimeters of the output 
	 * @param {number} physicalHeight height in millimeters of the output 
	 * @param {number} subpixel subpixel orientation of the output 
	 * @param {string} make textual description of the manufacturer 
	 * @param {string} model textual description of the model 
	 * @param {number} transform transform that maps framebuffer to output 
	 *
	 * @since 1
	 *
	 */
	geometry(x, y, physicalWidth, physicalHeight, subpixel, make, model, transform) {}

	/**
	 *
	 *	The mode event describes an available mode for the output.
	 *
	 *	The event is sent when binding to the output object and there
	 *	will always be one mode, the current mode.  The event is sent
	 *	again if an output changes mode, for the mode that is now
	 *	current.  In other words, the current mode is always the last
	 *	mode that was received with the current flag set.
	 *
	 *	The size of a mode is given in physical hardware units of
	 *	the output device. This is not necessarily the same as
	 *	the output size in the global compositor space. For instance,
	 *	the output may be scaled, as described in wl_output.scale,
	 *	or transformed, as described in wl_output.transform.
	 *      
	 *
	 * @param {number} flags bitfield of mode flags 
	 * @param {number} width width of the mode in hardware units 
	 * @param {number} height height of the mode in hardware units 
	 * @param {number} refresh vertical refresh rate in mHz 
	 *
	 * @since 1
	 *
	 */
	mode(flags, width, height, refresh) {}

	/**
	 *
	 *	This event is sent after all other properties have been
	 *	sent after binding to the output object and after any
	 *	other property changes done after that. This allows
	 *	changes to the output properties to be seen as
	 *	atomic, even if they happen via multiple events.
	 *      
	 *
	 *
	 * @since 2
	 *
	 */
	done() {}

	/**
	 *
	 *	This event contains scaling geometry information
	 *	that is not in the geometry event. It may be sent after
	 *	binding the output object or if the output scale changes
	 *	later. If it is not sent, the client should assume a
	 *	scale of 1.
	 *
	 *	A scale larger than 1 means that the compositor will
	 *	automatically scale surface buffers by this amount
	 *	when rendering. This is used for very high resolution
	 *	displays where applications rendering at the native
	 *	resolution would be too small to be legible.
	 *
	 *	It is intended that scaling aware clients track the
	 *	current output of a surface, and if it is on a scaled
	 *	output it should use wl_surface.set_buffer_scale with
	 *	the scale of the output. That way the compositor can
	 *	avoid scaling the surface, and the client can supply
	 *	a higher detail image.
	 *      
	 *
	 * @param {number} factor scaling factor of output 
	 *
	 * @since 2
	 *
	 */
	scale(factor) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlOutputProxy.js":
/*!*****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlOutputProxy.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      An output describes part of the compositor geometry.  The
 *      compositor works in the 'compositor coordinate system' and an
 *      output corresponds to a rectangular area in that space that is
 *      actually visible.  This typically corresponds to a monitor that
 *      displays part of the compositor space.  This object is published
 *      as global during start up, or when a monitor is hotplugged.
 *    
 */
class WlOutputProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Using this request a client can tell the server that it is not going to
	 *	use the output object anymore.
	 *      
	 * @since 3
	 *
	 */
	release () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlOutputEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.geometry(i(message), i(message), i(message), i(message), i(message), s(message, false), s(message, false), i(message))
	}

	async [1] (message) {
		await this.listener.mode(u(message), i(message), i(message), i(message))
	}

	async [2] (message) {
		await this.listener.done()
	}

	async [3] (message) {
		await this.listener.scale(i(message))
	}

}
WlOutputProxy.protocolName = 'wl_output'

WlOutputProxy.Subpixel = {
  /**
   * unknown geometry
   */
  unknown: 0,
  /**
   * no geometry
   */
  none: 1,
  /**
   * horizontal RGB
   */
  horizontalRgb: 2,
  /**
   * horizontal BGR
   */
  horizontalBgr: 3,
  /**
   * vertical RGB
   */
  verticalRgb: 4,
  /**
   * vertical BGR
   */
  verticalBgr: 5
}

WlOutputProxy.Transform = {
  /**
   * no transform
   */
  normal: 0,
  /**
   * 90 degrees counter-clockwise
   */
  90: 1,
  /**
   * 180 degrees counter-clockwise
   */
  180: 2,
  /**
   * 270 degrees counter-clockwise
   */
  270: 3,
  /**
   * 180 degree flip around a vertical axis
   */
  flipped: 4,
  /**
   * flip and rotate 90 degrees counter-clockwise
   */
  flipped90: 5,
  /**
   * flip and rotate 180 degrees counter-clockwise
   */
  flipped180: 6,
  /**
   * flip and rotate 270 degrees counter-clockwise
   */
  flipped270: 7
}

WlOutputProxy.Mode = {
  /**
   * indicates this is the current mode
   */
  current: 0x1,
  /**
   * indicates this is the preferred mode
   */
  preferred: 0x2
}

/* harmony default export */ __webpack_exports__["default"] = (WlOutputProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlPointerEvents.js":
/*!*******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlPointerEvents.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlPointerEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlPointerEvents {

	/**
	 *
	 *	Notification that this seat's pointer is focused on a certain
	 *	surface.
	 *
	 *	When a seat's focus enters a surface, the pointer image
	 *	is undefined and a client should respond to this event by setting
	 *	an appropriate pointer image with the set_cursor request.
	 *      
	 *
	 * @param {number} serial serial number of the enter event 
	 * @param {*} surface surface entered by the pointer 
	 * @param {Fixed} surfaceX surface-local x coordinate 
	 * @param {Fixed} surfaceY surface-local y coordinate 
	 *
	 * @since 1
	 *
	 */
	enter(serial, surface, surfaceX, surfaceY) {}

	/**
	 *
	 *	Notification that this seat's pointer is no longer focused on
	 *	a certain surface.
	 *
	 *	The leave notification is sent before the enter notification
	 *	for the new focus.
	 *      
	 *
	 * @param {number} serial serial number of the leave event 
	 * @param {*} surface surface left by the pointer 
	 *
	 * @since 1
	 *
	 */
	leave(serial, surface) {}

	/**
	 *
	 *	Notification of pointer location change. The arguments
	 *	surface_x and surface_y are the location relative to the
	 *	focused surface.
	 *      
	 *
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {Fixed} surfaceX surface-local x coordinate 
	 * @param {Fixed} surfaceY surface-local y coordinate 
	 *
	 * @since 1
	 *
	 */
	motion(time, surfaceX, surfaceY) {}

	/**
	 *
	 *	Mouse button click and release notifications.
	 *
	 *	The location of the click is given by the last motion or
	 *	enter event.
	 *	The time argument is a timestamp with millisecond
	 *	granularity, with an undefined base.
	 *
	 *	The button is a button code as defined in the Linux kernel's
	 *	linux/input-event-codes.h header file, e.g. BTN_LEFT.
	 *
	 *	Any 16-bit button code value is reserved for future additions to the
	 *	kernel's event code list. All other button codes above 0xFFFF are
	 *	currently undefined but may be used in future versions of this
	 *	protocol.
	 *      
	 *
	 * @param {number} serial serial number of the button event 
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {number} button button that produced the event 
	 * @param {number} state physical state of the button 
	 *
	 * @since 1
	 *
	 */
	button(serial, time, button, state) {}

	/**
	 *
	 *	Scroll and other axis notifications.
	 *
	 *	For scroll events (vertical and horizontal scroll axes), the
	 *	value parameter is the length of a vector along the specified
	 *	axis in a coordinate space identical to those of motion events,
	 *	representing a relative movement along the specified axis.
	 *
	 *	For devices that support movements non-parallel to axes multiple
	 *	axis events will be emitted.
	 *
	 *	When applicable, for example for touch pads, the server can
	 *	choose to emit scroll events where the motion vector is
	 *	equivalent to a motion event vector.
	 *
	 *	When applicable, a client can transform its content relative to the
	 *	scroll distance.
	 *      
	 *
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {number} axis axis type 
	 * @param {Fixed} value length of vector in surface-local coordinate space 
	 *
	 * @since 1
	 *
	 */
	axis(time, axis, value) {}

	/**
	 *
	 *	Indicates the end of a set of events that logically belong together.
	 *	A client is expected to accumulate the data in all events within the
	 *	frame before proceeding.
	 *
	 *	All wl_pointer events before a wl_pointer.frame event belong
	 *	logically together. For example, in a diagonal scroll motion the
	 *	compositor will send an optional wl_pointer.axis_source event, two
	 *	wl_pointer.axis events (horizontal and vertical) and finally a
	 *	wl_pointer.frame event. The client may use this information to
	 *	calculate a diagonal vector for scrolling.
	 *
	 *	When multiple wl_pointer.axis events occur within the same frame,
	 *	the motion vector is the combined motion of all events.
	 *	When a wl_pointer.axis and a wl_pointer.axis_stop event occur within
	 *	the same frame, this indicates that axis movement in one axis has
	 *	stopped but continues in the other axis.
	 *	When multiple wl_pointer.axis_stop events occur within the same
	 *	frame, this indicates that these axes stopped in the same instance.
	 *
	 *	A wl_pointer.frame event is sent for every logical event group,
	 *	even if the group only contains a single wl_pointer event.
	 *	Specifically, a client may get a sequence: motion, frame, button,
	 *	frame, axis, frame, axis_stop, frame.
	 *
	 *	The wl_pointer.enter and wl_pointer.leave events are logical events
	 *	generated by the compositor and not the hardware. These events are
	 *	also grouped by a wl_pointer.frame. When a pointer moves from one
	 *	surface to another, a compositor should group the
	 *	wl_pointer.leave event within the same wl_pointer.frame.
	 *	However, a client must not rely on wl_pointer.leave and
	 *	wl_pointer.enter being in the same wl_pointer.frame.
	 *	Compositor-specific policies may require the wl_pointer.leave and
	 *	wl_pointer.enter event being split across multiple wl_pointer.frame
	 *	groups.
	 *      
	 *
	 *
	 * @since 5
	 *
	 */
	frame() {}

	/**
	 *
	 *	Source information for scroll and other axes.
	 *
	 *	This event does not occur on its own. It is sent before a
	 *	wl_pointer.frame event and carries the source information for
	 *	all events within that frame.
	 *
	 *	The source specifies how this event was generated. If the source is
	 *	wl_pointer.axis_source.finger, a wl_pointer.axis_stop event will be
	 *	sent when the user lifts the finger off the device.
	 *
	 *	If the source is wl_pointer.axis_source.wheel,
	 *	wl_pointer.axis_source.wheel_tilt or
	 *	wl_pointer.axis_source.continuous, a wl_pointer.axis_stop event may
	 *	or may not be sent. Whether a compositor sends an axis_stop event
	 *	for these sources is hardware-specific and implementation-dependent;
	 *	clients must not rely on receiving an axis_stop event for these
	 *	scroll sources and should treat scroll sequences from these scroll
	 *	sources as unterminated by default.
	 *
	 *	This event is optional. If the source is unknown for a particular
	 *	axis event sequence, no event is sent.
	 *	Only one wl_pointer.axis_source event is permitted per frame.
	 *
	 *	The order of wl_pointer.axis_discrete and wl_pointer.axis_source is
	 *	not guaranteed.
	 *      
	 *
	 * @param {number} axisSource source of the axis event 
	 *
	 * @since 5
	 *
	 */
	axisSource(axisSource) {}

	/**
	 *
	 *	Stop notification for scroll and other axes.
	 *
	 *	For some wl_pointer.axis_source types, a wl_pointer.axis_stop event
	 *	is sent to notify a client that the axis sequence has terminated.
	 *	This enables the client to implement kinetic scrolling.
	 *	See the wl_pointer.axis_source documentation for information on when
	 *	this event may be generated.
	 *
	 *	Any wl_pointer.axis events with the same axis_source after this
	 *	event should be considered as the start of a new axis motion.
	 *
	 *	The timestamp is to be interpreted identical to the timestamp in the
	 *	wl_pointer.axis event. The timestamp value may be the same as a
	 *	preceding wl_pointer.axis event.
	 *      
	 *
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {number} axis the axis stopped with this event 
	 *
	 * @since 5
	 *
	 */
	axisStop(time, axis) {}

	/**
	 *
	 *	Discrete step information for scroll and other axes.
	 *
	 *	This event carries the axis value of the wl_pointer.axis event in
	 *	discrete steps (e.g. mouse wheel clicks).
	 *
	 *	This event does not occur on its own, it is coupled with a
	 *	wl_pointer.axis event that represents this axis value on a
	 *	continuous scale. The protocol guarantees that each axis_discrete
	 *	event is always followed by exactly one axis event with the same
	 *	axis number within the same wl_pointer.frame. Note that the protocol
	 *	allows for other events to occur between the axis_discrete and
	 *	its coupled axis event, including other axis_discrete or axis
	 *	events.
	 *
	 *	This event is optional; continuous scrolling devices
	 *	like two-finger scrolling on touchpads do not have discrete
	 *	steps and do not generate this event.
	 *
	 *	The discrete value carries the directional information. e.g. a value
	 *	of -2 is two steps towards the negative direction of this axis.
	 *
	 *	The axis number is identical to the axis number in the associated
	 *	axis event.
	 *
	 *	The order of wl_pointer.axis_discrete and wl_pointer.axis_source is
	 *	not guaranteed.
	 *      
	 *
	 * @param {number} axis axis type 
	 * @param {number} discrete number of steps 
	 *
	 * @since 5
	 *
	 */
	axisDiscrete(axis, discrete) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlPointerProxy.js":
/*!******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlPointerProxy.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      The wl_pointer interface represents one or more input devices,
 *      such as mice, which control the pointer location and pointer_focus
 *      of a seat.
 *
 *      The wl_pointer interface generates motion, enter and leave
 *      events for the surfaces that the pointer is located over,
 *      and button and axis events for button presses, button releases
 *      and scrolling.
 *    
 */
class WlPointerProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Set the pointer surface, i.e., the surface that contains the
	 *	pointer image (cursor). This request gives the surface the role
	 *	of a cursor. If the surface already has another role, it raises
	 *	a protocol error.
	 *
	 *	The cursor actually changes only if the pointer
	 *	focus for this device is one of the requesting client's surfaces
	 *	or the surface parameter is the current pointer surface. If
	 *	there was a previous surface set with this request it is
	 *	replaced. If surface is NULL, the pointer image is hidden.
	 *
	 *	The parameters hotspot_x and hotspot_y define the position of
	 *	the pointer surface relative to the pointer location. Its
	 *	top-left corner is always at (x, y) - (hotspot_x, hotspot_y),
	 *	where (x, y) are the coordinates of the pointer location, in
	 *	surface-local coordinates.
	 *
	 *	On surface.attach requests to the pointer surface, hotspot_x
	 *	and hotspot_y are decremented by the x and y parameters
	 *	passed to the request. Attach must be confirmed by
	 *	wl_surface.commit as usual.
	 *
	 *	The hotspot can also be updated by passing the currently set
	 *	pointer surface to this request with new values for hotspot_x
	 *	and hotspot_y.
	 *
	 *	The current and pending input regions of the wl_surface are
	 *	cleared, and wl_surface.set_input_region is ignored until the
	 *	wl_surface is no longer used as the cursor. When the use as a
	 *	cursor ends, the current and pending input regions become
	 *	undefined, and the wl_surface is unmapped.
	 *      
	 *
	 * @param {number} serial serial number of the enter event 
	 * @param {?*} surface pointer surface 
	 * @param {number} hotspotX surface-local x coordinate 
	 * @param {number} hotspotY surface-local y coordinate 
	 *
	 * @since 1
	 *
	 */
	setCursor (serial, surface, hotspotX, hotspotY) {
		this._marshall(this.id, 0, [uint(serial), objectOptional(surface), int(hotspotX), int(hotspotY)])
	}

	/**
	 *
	 *	Using this request a client can tell the server that it is not going to
	 *	use the pointer object anymore.
	 *
	 *	This request destroys the pointer proxy object, so clients must not call
	 *	wl_pointer_destroy() after using this request.
	 *      
	 * @since 3
	 *
	 */
	release () {
		super.destroy()
		this._marshall(this.id, 1, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlPointerEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.enter(u(message), o(message, false, this._connection), f(message), f(message))
	}

	async [1] (message) {
		await this.listener.leave(u(message), o(message, false, this._connection))
	}

	async [2] (message) {
		await this.listener.motion(u(message), f(message), f(message))
	}

	async [3] (message) {
		await this.listener.button(u(message), u(message), u(message), u(message))
	}

	async [4] (message) {
		await this.listener.axis(u(message), u(message), f(message))
	}

	async [5] (message) {
		await this.listener.frame()
	}

	async [6] (message) {
		await this.listener.axisSource(u(message))
	}

	async [7] (message) {
		await this.listener.axisStop(u(message), u(message))
	}

	async [8] (message) {
		await this.listener.axisDiscrete(u(message), i(message))
	}

}
WlPointerProxy.protocolName = 'wl_pointer'

WlPointerProxy.Error = {
  /**
   * given wl_surface has another role
   */
  role: 0
}

WlPointerProxy.ButtonState = {
  /**
   * the button is not pressed
   */
  released: 0,
  /**
   * the button is pressed
   */
  pressed: 1
}

WlPointerProxy.Axis = {
  /**
   * vertical axis
   */
  verticalScroll: 0,
  /**
   * horizontal axis
   */
  horizontalScroll: 1
}

WlPointerProxy.AxisSource = {
  /**
   * a physical wheel rotation
   */
  wheel: 0,
  /**
   * finger on a touch surface
   */
  finger: 1,
  /**
   * continuous coordinate space
   */
  continuous: 2,
  /**
   * a physical wheel tilt
   */
  wheelTilt: 3
}

/* harmony default export */ __webpack_exports__["default"] = (WlPointerProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlRegionProxy.js":
/*!*****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlRegionProxy.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      A region object describes an area.
 *
 *      Region objects are used to describe the opaque and input
 *      regions of a surface.
 *    
 */
class WlRegionProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Destroy the region.  This will invalidate the object ID.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	Add the specified rectangle to the region.
	 *      
	 *
	 * @param {number} x region-local x coordinate 
	 * @param {number} y region-local y coordinate 
	 * @param {number} width rectangle width 
	 * @param {number} height rectangle height 
	 *
	 * @since 1
	 *
	 */
	add (x, y, width, height) {
		this._marshall(this.id, 1, [int(x), int(y), int(width), int(height)])
	}

	/**
	 *
	 *	Subtract the specified rectangle from the region.
	 *      
	 *
	 * @param {number} x region-local x coordinate 
	 * @param {number} y region-local y coordinate 
	 * @param {number} width rectangle width 
	 * @param {number} height rectangle height 
	 *
	 * @since 1
	 *
	 */
	subtract (x, y, width, height) {
		this._marshall(this.id, 2, [int(x), int(y), int(width), int(height)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlRegionEvents|null}
		 */
		this.listener = null
	}

}
WlRegionProxy.protocolName = 'wl_region'

/* harmony default export */ __webpack_exports__["default"] = (WlRegionProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlRegistryEvents.js":
/*!********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlRegistryEvents.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlRegistryEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlRegistryEvents {

	/**
	 *
	 *	Notify the client of global objects.
	 *
	 *	The event notifies the client that a global object with
	 *	the given name is now available, and it implements the
	 *	given version of the given interface.
	 *      
	 *
	 * @param {number} name numeric name of the global object 
	 * @param {string} interface interface implemented by the object 
	 * @param {number} version interface version 
	 *
	 * @since 1
	 *
	 */
	global(name, interface_, version) {}

	/**
	 *
	 *	Notify the client of removed global objects.
	 *
	 *	This event notifies the client that the global identified
	 *	by name is no longer available.  If the client bound to
	 *	the global using the bind request, the client should now
	 *	destroy that object.
	 *
	 *	The object remains valid and requests to the object will be
	 *	ignored until the client destroys it, to avoid races between
	 *	the global going away and a client sending a request to it.
	 *      
	 *
	 * @param {number} name numeric name of the global object 
	 *
	 * @since 1
	 *
	 */
	globalRemove(name) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlRegistryProxy.js":
/*!*******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlRegistryProxy.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      The singleton global registry object.  The server has a number of
 *      global objects that are available to all clients.  These objects
 *      typically represent an actual object in the server (for example,
 *      an input device) or they are singleton objects that provide
 *      extension functionality.
 *
 *      When a client creates a registry object, the registry object
 *      will emit a global event for each global currently in the
 *      registry.  Globals come and go as a result of device or
 *      monitor hotplugs, reconfiguration or other events, and the
 *      registry will send out global and global_remove events to
 *      keep the client up to date with the changes.  To mark the end
 *      of the initial burst of events, the client can use the
 *      wl_display.sync request immediately after calling
 *      wl_display.get_registry.
 *
 *      A client can bind to a global object by using the bind
 *      request.  This creates a client-side handle that lets the object
 *      emit events to the client and lets the client invoke requests on
 *      the object.
 *    
 */
class WlRegistryProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {
	/**
	* Bind a new object to the global.
	*
	* Binds a new, client-created object to the server using the specified name as the identifier.
	*
	* @param {number} name unique numeric name of the global
	* @param {string} interface_ interface implemented by the new object
	* @param {Function} proxyClass
	* @param {number} version The version used and supported by the client
	* @return {Object} a new bounded object
	*/
	bind (name, interface_, proxyClass, version) {
		return this._marshallConstructor(this.id, 0, proxyClass, [uint(name), string(interface_), uint(version), newObject()])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlRegistryEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.global(u(message), s(message, false), u(message))
	}

	async [1] (message) {
		await this.listener.globalRemove(u(message))
	}

}
WlRegistryProxy.protocolName = 'wl_registry'

/* harmony default export */ __webpack_exports__["default"] = (WlRegistryProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlSeatEvents.js":
/*!****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlSeatEvents.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlSeatEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlSeatEvents {

	/**
	 *
	 *	This is emitted whenever a seat gains or loses the pointer,
	 *	keyboard or touch capabilities.  The argument is a capability
	 *	enum containing the complete set of capabilities this seat has.
	 *
	 *	When the pointer capability is added, a client may create a
	 *	wl_pointer object using the wl_seat.get_pointer request. This object
	 *	will receive pointer events until the capability is removed in the
	 *	future.
	 *
	 *	When the pointer capability is removed, a client should destroy the
	 *	wl_pointer objects associated with the seat where the capability was
	 *	removed, using the wl_pointer.release request. No further pointer
	 *	events will be received on these objects.
	 *
	 *	In some compositors, if a seat regains the pointer capability and a
	 *	client has a previously obtained wl_pointer object of version 4 or
	 *	less, that object may start sending pointer events again. This
	 *	behavior is considered a misinterpretation of the intended behavior
	 *	and must not be relied upon by the client. wl_pointer objects of
	 *	version 5 or later must not send events if created before the most
	 *	recent event notifying the client of an added pointer capability.
	 *
	 *	The above behavior also applies to wl_keyboard and wl_touch with the
	 *	keyboard and touch capabilities, respectively.
	 *      
	 *
	 * @param {number} capabilities capabilities of the seat 
	 *
	 * @since 1
	 *
	 */
	capabilities(capabilities) {}

	/**
	 *
	 *	In a multiseat configuration this can be used by the client to help
	 *	identify which physical devices the seat represents. Based on
	 *	the seat configuration used by the compositor.
	 *      
	 *
	 * @param {string} name seat identifier 
	 *
	 * @since 2
	 *
	 */
	name(name) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlSeatProxy.js":
/*!***************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlSeatProxy.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _WlPointerProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WlPointerProxy */ "../../../westfield/client/runtime/src/protocol/WlPointerProxy.js");
/* harmony import */ var _WlKeyboardProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WlKeyboardProxy */ "../../../westfield/client/runtime/src/protocol/WlKeyboardProxy.js");
/* harmony import */ var _WlTouchProxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WlTouchProxy */ "../../../westfield/client/runtime/src/protocol/WlTouchProxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]





/**
 *
 *      A seat is a group of keyboards, pointer and touch devices. This
 *      object is published as a global during start up, or when such a
 *      device is hot plugged.  A seat typically has a pointer and
 *      maintains a keyboard focus and a pointer focus.
 *    
 */
class WlSeatProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	The ID provided will be initialized to the wl_pointer interface
	 *	for this seat.
	 *
	 *	This request only takes effect if the seat has the pointer
	 *	capability, or has had the pointer capability in the past.
	 *	It is a protocol violation to issue this request on a seat that has
	 *	never had the pointer capability.
	 *      
	 *
	 * @return {WlPointerProxy} seat pointer 
	 *
	 * @since 1
	 *
	 */
	getPointer () {
		return this._marshallConstructor(this.id, 0, _WlPointerProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *	The ID provided will be initialized to the wl_keyboard interface
	 *	for this seat.
	 *
	 *	This request only takes effect if the seat has the keyboard
	 *	capability, or has had the keyboard capability in the past.
	 *	It is a protocol violation to issue this request on a seat that has
	 *	never had the keyboard capability.
	 *      
	 *
	 * @return {WlKeyboardProxy} seat keyboard 
	 *
	 * @since 1
	 *
	 */
	getKeyboard () {
		return this._marshallConstructor(this.id, 1, _WlKeyboardProxy__WEBPACK_IMPORTED_MODULE_3__["default"], [newObject()])
	}

	/**
	 *
	 *	The ID provided will be initialized to the wl_touch interface
	 *	for this seat.
	 *
	 *	This request only takes effect if the seat has the touch
	 *	capability, or has had the touch capability in the past.
	 *	It is a protocol violation to issue this request on a seat that has
	 *	never had the touch capability.
	 *      
	 *
	 * @return {WlTouchProxy} seat touch interface 
	 *
	 * @since 1
	 *
	 */
	getTouch () {
		return this._marshallConstructor(this.id, 2, _WlTouchProxy__WEBPACK_IMPORTED_MODULE_4__["default"], [newObject()])
	}

	/**
	 *
	 *	Using this request a client can tell the server that it is not going to
	 *	use the seat object anymore.
	 *      
	 * @since 5
	 *
	 */
	release () {
		super.destroy()
		this._marshall(this.id, 3, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlSeatEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.capabilities(u(message))
	}

	async [1] (message) {
		await this.listener.name(s(message, false))
	}

}
WlSeatProxy.protocolName = 'wl_seat'

WlSeatProxy.Capability = {
  /**
   * the seat has pointer devices
   */
  pointer: 1,
  /**
   * the seat has one or more keyboards
   */
  keyboard: 2,
  /**
   * the seat has touch devices
   */
  touch: 4
}

/* harmony default export */ __webpack_exports__["default"] = (WlSeatProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlShellProxy.js":
/*!****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlShellProxy.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _WlShellSurfaceProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WlShellSurfaceProxy */ "../../../westfield/client/runtime/src/protocol/WlShellSurfaceProxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]



/**
 *
 *      This interface is implemented by servers that provide
 *      desktop-style user interfaces.
 *
 *      It allows clients to associate a wl_shell_surface with
 *      a basic surface.
 *    
 */
class WlShellProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Create a shell surface for an existing surface. This gives
	 *	the wl_surface the role of a shell surface. If the wl_surface
	 *	already has another role, it raises a protocol error.
	 *
	 *	Only one shell surface can be associated with a given surface.
	 *      
	 *
	 * @param {*} surface surface to be given the shell surface role 
	 * @return {WlShellSurfaceProxy} shell surface to create 
	 *
	 * @since 1
	 *
	 */
	getShellSurface (surface) {
		return this._marshallConstructor(this.id, 0, _WlShellSurfaceProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject(), object(surface)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlShellEvents|null}
		 */
		this.listener = null
	}

}
WlShellProxy.protocolName = 'wl_shell'

WlShellProxy.Error = {
  /**
   * given wl_surface has another role
   */
  role: 0
}

/* harmony default export */ __webpack_exports__["default"] = (WlShellProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlShellSurfaceEvents.js":
/*!************************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlShellSurfaceEvents.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlShellSurfaceEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlShellSurfaceEvents {

	/**
	 *
	 *	Ping a client to check if it is receiving events and sending
	 *	requests. A client is expected to reply with a pong request.
	 *      
	 *
	 * @param {number} serial serial number of the ping 
	 *
	 * @since 1
	 *
	 */
	ping(serial) {}

	/**
	 *
	 *	The configure event asks the client to resize its surface.
	 *
	 *	The size is a hint, in the sense that the client is free to
	 *	ignore it if it doesn't resize, pick a smaller size (to
	 *	satisfy aspect ratio or resize in steps of NxM pixels).
	 *
	 *	The edges parameter provides a hint about how the surface
	 *	was resized. The client may use this information to decide
	 *	how to adjust its content to the new size (e.g. a scrolling
	 *	area might adjust its content position to leave the viewable
	 *	content unmoved).
	 *
	 *	The client is free to dismiss all but the last configure
	 *	event it received.
	 *
	 *	The width and height arguments specify the size of the window
	 *	in surface-local coordinates.
	 *      
	 *
	 * @param {number} edges how the surface was resized 
	 * @param {number} width new width of the surface 
	 * @param {number} height new height of the surface 
	 *
	 * @since 1
	 *
	 */
	configure(edges, width, height) {}

	/**
	 *
	 *	The popup_done event is sent out when a popup grab is broken,
	 *	that is, when the user clicks a surface that doesn't belong
	 *	to the client owning the popup surface.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	popupDone() {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlShellSurfaceProxy.js":
/*!***********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlShellSurfaceProxy.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      An interface that may be implemented by a wl_surface, for
 *      implementations that provide a desktop-style user interface.
 *
 *      It provides requests to treat surfaces like toplevel, fullscreen
 *      or popup windows, move, resize or maximize them, associate
 *      metadata like title and class, etc.
 *
 *      On the server side the object is automatically destroyed when
 *      the related wl_surface is destroyed. On the client side,
 *      wl_shell_surface_destroy() must be called before destroying
 *      the wl_surface object.
 *    
 */
class WlShellSurfaceProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	A client must respond to a ping event with a pong request or
	 *	the client may be deemed unresponsive.
	 *      
	 *
	 * @param {number} serial serial number of the ping event 
	 *
	 * @since 1
	 *
	 */
	pong (serial) {
		this._marshall(this.id, 0, [uint(serial)])
	}

	/**
	 *
	 *	Start a pointer-driven move of the surface.
	 *
	 *	This request must be used in response to a button press event.
	 *	The server may ignore move requests depending on the state of
	 *	the surface (e.g. fullscreen or maximized).
	 *      
	 *
	 * @param {*} seat seat whose pointer is used 
	 * @param {number} serial serial number of the implicit grab on the pointer 
	 *
	 * @since 1
	 *
	 */
	move (seat, serial) {
		this._marshall(this.id, 1, [object(seat), uint(serial)])
	}

	/**
	 *
	 *	Start a pointer-driven resizing of the surface.
	 *
	 *	This request must be used in response to a button press event.
	 *	The server may ignore resize requests depending on the state of
	 *	the surface (e.g. fullscreen or maximized).
	 *      
	 *
	 * @param {*} seat seat whose pointer is used 
	 * @param {number} serial serial number of the implicit grab on the pointer 
	 * @param {number} edges which edge or corner is being dragged 
	 *
	 * @since 1
	 *
	 */
	resize (seat, serial, edges) {
		this._marshall(this.id, 2, [object(seat), uint(serial), uint(edges)])
	}

	/**
	 *
	 *	Map the surface as a toplevel surface.
	 *
	 *	A toplevel surface is not fullscreen, maximized or transient.
	 *      
	 * @since 1
	 *
	 */
	setToplevel () {
		this._marshall(this.id, 3, [])
	}

	/**
	 *
	 *	Map the surface relative to an existing surface.
	 *
	 *	The x and y arguments specify the location of the upper left
	 *	corner of the surface relative to the upper left corner of the
	 *	parent surface, in surface-local coordinates.
	 *
	 *	The flags argument controls details of the transient behaviour.
	 *      
	 *
	 * @param {*} parent parent surface 
	 * @param {number} x surface-local x coordinate 
	 * @param {number} y surface-local y coordinate 
	 * @param {number} flags transient surface behavior 
	 *
	 * @since 1
	 *
	 */
	setTransient (parent, x, y, flags) {
		this._marshall(this.id, 4, [object(parent), int(x), int(y), uint(flags)])
	}

	/**
	 *
	 *	Map the surface as a fullscreen surface.
	 *
	 *	If an output parameter is given then the surface will be made
	 *	fullscreen on that output. If the client does not specify the
	 *	output then the compositor will apply its policy - usually
	 *	choosing the output on which the surface has the biggest surface
	 *	area.
	 *
	 *	The client may specify a method to resolve a size conflict
	 *	between the output size and the surface size - this is provided
	 *	through the method parameter.
	 *
	 *	The framerate parameter is used only when the method is set
	 *	to "driver", to indicate the preferred framerate. A value of 0
	 *	indicates that the client does not care about framerate.  The
	 *	framerate is specified in mHz, that is framerate of 60000 is 60Hz.
	 *
	 *	A method of "scale" or "driver" implies a scaling operation of
	 *	the surface, either via a direct scaling operation or a change of
	 *	the output mode. This will override any kind of output scaling, so
	 *	that mapping a surface with a buffer size equal to the mode can
	 *	fill the screen independent of buffer_scale.
	 *
	 *	A method of "fill" means we don't scale up the buffer, however
	 *	any output scale is applied. This means that you may run into
	 *	an edge case where the application maps a buffer with the same
	 *	size of the output mode but buffer_scale 1 (thus making a
	 *	surface larger than the output). In this case it is allowed to
	 *	downscale the results to fit the screen.
	 *
	 *	The compositor must reply to this request with a configure event
	 *	with the dimensions for the output on which the surface will
	 *	be made fullscreen.
	 *      
	 *
	 * @param {number} method method for resolving size conflict 
	 * @param {number} framerate framerate in mHz 
	 * @param {?*} output output on which the surface is to be fullscreen 
	 *
	 * @since 1
	 *
	 */
	setFullscreen (method, framerate, output) {
		this._marshall(this.id, 5, [uint(method), uint(framerate), objectOptional(output)])
	}

	/**
	 *
	 *	Map the surface as a popup.
	 *
	 *	A popup surface is a transient surface with an added pointer
	 *	grab.
	 *
	 *	An existing implicit grab will be changed to owner-events mode,
	 *	and the popup grab will continue after the implicit grab ends
	 *	(i.e. releasing the mouse button does not cause the popup to
	 *	be unmapped).
	 *
	 *	The popup grab continues until the window is destroyed or a
	 *	mouse button is pressed in any other client's window. A click
	 *	in any of the client's surfaces is reported as normal, however,
	 *	clicks in other clients' surfaces will be discarded and trigger
	 *	the callback.
	 *
	 *	The x and y arguments specify the location of the upper left
	 *	corner of the surface relative to the upper left corner of the
	 *	parent surface, in surface-local coordinates.
	 *      
	 *
	 * @param {*} seat seat whose pointer is used 
	 * @param {number} serial serial number of the implicit grab on the pointer 
	 * @param {*} parent parent surface 
	 * @param {number} x surface-local x coordinate 
	 * @param {number} y surface-local y coordinate 
	 * @param {number} flags transient surface behavior 
	 *
	 * @since 1
	 *
	 */
	setPopup (seat, serial, parent, x, y, flags) {
		this._marshall(this.id, 6, [object(seat), uint(serial), object(parent), int(x), int(y), uint(flags)])
	}

	/**
	 *
	 *	Map the surface as a maximized surface.
	 *
	 *	If an output parameter is given then the surface will be
	 *	maximized on that output. If the client does not specify the
	 *	output then the compositor will apply its policy - usually
	 *	choosing the output on which the surface has the biggest surface
	 *	area.
	 *
	 *	The compositor will reply with a configure event telling
	 *	the expected new surface size. The operation is completed
	 *	on the next buffer attach to this surface.
	 *
	 *	A maximized surface typically fills the entire output it is
	 *	bound to, except for desktop elements such as panels. This is
	 *	the main difference between a maximized shell surface and a
	 *	fullscreen shell surface.
	 *
	 *	The details depend on the compositor implementation.
	 *      
	 *
	 * @param {?*} output output on which the surface is to be maximized 
	 *
	 * @since 1
	 *
	 */
	setMaximized (output) {
		this._marshall(this.id, 7, [objectOptional(output)])
	}

	/**
	 *
	 *	Set a short title for the surface.
	 *
	 *	This string may be used to identify the surface in a task bar,
	 *	window list, or other user interface elements provided by the
	 *	compositor.
	 *
	 *	The string must be encoded in UTF-8.
	 *      
	 *
	 * @param {string} title surface title 
	 *
	 * @since 1
	 *
	 */
	setTitle (title) {
		this._marshall(this.id, 8, [string(title)])
	}

	/**
	 *
	 *	Set a class for the surface.
	 *
	 *	The surface class identifies the general class of applications
	 *	to which the surface belongs. A common convention is to use the
	 *	file name (or the full path if it is a non-standard location) of
	 *	the application's .desktop file as the class.
	 *      
	 *
	 * @param {string} clazz surface class 
	 *
	 * @since 1
	 *
	 */
	setClass (clazz) {
		this._marshall(this.id, 9, [string(clazz)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlShellSurfaceEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.ping(u(message))
	}

	async [1] (message) {
		await this.listener.configure(u(message), i(message), i(message))
	}

	async [2] (message) {
		await this.listener.popupDone()
	}

}
WlShellSurfaceProxy.protocolName = 'wl_shell_surface'

WlShellSurfaceProxy.Resize = {
  /**
   * no edge
   */
  none: 0,
  /**
   * top edge
   */
  top: 1,
  /**
   * bottom edge
   */
  bottom: 2,
  /**
   * left edge
   */
  left: 4,
  /**
   * top and left edges
   */
  topLeft: 5,
  /**
   * bottom and left edges
   */
  bottomLeft: 6,
  /**
   * right edge
   */
  right: 8,
  /**
   * top and right edges
   */
  topRight: 9,
  /**
   * bottom and right edges
   */
  bottomRight: 10
}

WlShellSurfaceProxy.Transient = {
  /**
   * do not set keyboard focus
   */
  inactive: 0x1
}

WlShellSurfaceProxy.FullscreenMethod = {
  /**
   * no preference, apply default policy
   */
  default: 0,
  /**
   * scale, preserve the surface's aspect ratio and center on output
   */
  scale: 1,
  /**
   * switch output mode to the smallest mode that can fit the surface, add black borders to compensate size mismatch
   */
  driver: 2,
  /**
   * no upscaling, center on output and add black borders to compensate size mismatch
   */
  fill: 3
}

/* harmony default export */ __webpack_exports__["default"] = (WlShellSurfaceProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlSubcompositorProxy.js":
/*!************************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlSubcompositorProxy.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _WlSubsurfaceProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WlSubsurfaceProxy */ "../../../westfield/client/runtime/src/protocol/WlSubsurfaceProxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]



/**
 *
 *      The global interface exposing sub-surface compositing capabilities.
 *      A wl_surface, that has sub-surfaces associated, is called the
 *      parent surface. Sub-surfaces can be arbitrarily nested and create
 *      a tree of sub-surfaces.
 *
 *      The root surface in a tree of sub-surfaces is the main
 *      surface. The main surface cannot be a sub-surface, because
 *      sub-surfaces must always have a parent.
 *
 *      A main surface with its sub-surfaces forms a (compound) window.
 *      For window management purposes, this set of wl_surface objects is
 *      to be considered as a single window, and it should also behave as
 *      such.
 *
 *      The aim of sub-surfaces is to offload some of the compositing work
 *      within a window from clients to the compositor. A prime example is
 *      a video player with decorations and video in separate wl_surface
 *      objects. This should allow the compositor to pass YUV video buffer
 *      processing to dedicated overlay hardware when possible.
 *    
 */
class WlSubcompositorProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Informs the server that the client will not be using this
	 *	protocol object anymore. This does not affect any other
	 *	objects, wl_subsurface objects included.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	Create a sub-surface interface for the given surface, and
	 *	associate it with the given parent surface. This turns a
	 *	plain wl_surface into a sub-surface.
	 *
	 *	The to-be sub-surface must not already have another role, and it
	 *	must not have an existing wl_subsurface object. Otherwise a protocol
	 *	error is raised.
	 *      
	 *
	 * @param {*} surface the surface to be turned into a sub-surface 
	 * @param {*} parent the parent surface 
	 * @return {WlSubsurfaceProxy} the new sub-surface object ID 
	 *
	 * @since 1
	 *
	 */
	getSubsurface (surface, parent) {
		return this._marshallConstructor(this.id, 1, _WlSubsurfaceProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject(), object(surface), object(parent)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlSubcompositorEvents|null}
		 */
		this.listener = null
	}

}
WlSubcompositorProxy.protocolName = 'wl_subcompositor'

WlSubcompositorProxy.Error = {
  /**
   * the to-be sub-surface is invalid
   */
  badSurface: 0
}

/* harmony default export */ __webpack_exports__["default"] = (WlSubcompositorProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlSubsurfaceProxy.js":
/*!*********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlSubsurfaceProxy.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      An additional interface to a wl_surface object, which has been
 *      made a sub-surface. A sub-surface has one parent surface. A
 *      sub-surface's size and position are not limited to that of the parent.
 *      Particularly, a sub-surface is not automatically clipped to its
 *      parent's area.
 *
 *      A sub-surface becomes mapped, when a non-NULL wl_buffer is applied
 *      and the parent surface is mapped. The order of which one happens
 *      first is irrelevant. A sub-surface is hidden if the parent becomes
 *      hidden, or if a NULL wl_buffer is applied. These rules apply
 *      recursively through the tree of surfaces.
 *
 *      The behaviour of a wl_surface.commit request on a sub-surface
 *      depends on the sub-surface's mode. The possible modes are
 *      synchronized and desynchronized, see methods
 *      wl_subsurface.set_sync and wl_subsurface.set_desync. Synchronized
 *      mode caches the wl_surface state to be applied when the parent's
 *      state gets applied, and desynchronized mode applies the pending
 *      wl_surface state directly. A sub-surface is initially in the
 *      synchronized mode.
 *
 *      Sub-surfaces have also other kind of state, which is managed by
 *      wl_subsurface requests, as opposed to wl_surface requests. This
 *      state includes the sub-surface position relative to the parent
 *      surface (wl_subsurface.set_position), and the stacking order of
 *      the parent and its sub-surfaces (wl_subsurface.place_above and
 *      .place_below). This state is applied when the parent surface's
 *      wl_surface state is applied, regardless of the sub-surface's mode.
 *      As the exception, set_sync and set_desync are effective immediately.
 *
 *      The main surface can be thought to be always in desynchronized mode,
 *      since it does not have a parent in the sub-surfaces sense.
 *
 *      Even if a sub-surface is in desynchronized mode, it will behave as
 *      in synchronized mode, if its parent surface behaves as in
 *      synchronized mode. This rule is applied recursively throughout the
 *      tree of surfaces. This means, that one can set a sub-surface into
 *      synchronized mode, and then assume that all its child and grand-child
 *      sub-surfaces are synchronized, too, without explicitly setting them.
 *
 *      If the wl_surface associated with the wl_subsurface is destroyed, the
 *      wl_subsurface object becomes inert. Note, that destroying either object
 *      takes effect immediately. If you need to synchronize the removal
 *      of a sub-surface to the parent surface update, unmap the sub-surface
 *      first by attaching a NULL wl_buffer, update parent, and then destroy
 *      the sub-surface.
 *
 *      If the parent wl_surface object is destroyed, the sub-surface is
 *      unmapped.
 *    
 */
class WlSubsurfaceProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	The sub-surface interface is removed from the wl_surface object
	 *	that was turned into a sub-surface with a
	 *	wl_subcompositor.get_subsurface request. The wl_surface's association
	 *	to the parent is deleted, and the wl_surface loses its role as
	 *	a sub-surface. The wl_surface is unmapped.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	This schedules a sub-surface position change.
	 *	The sub-surface will be moved so that its origin (top left
	 *	corner pixel) will be at the location x, y of the parent surface
	 *	coordinate system. The coordinates are not restricted to the parent
	 *	surface area. Negative values are allowed.
	 *
	 *	The scheduled coordinates will take effect whenever the state of the
	 *	parent surface is applied. When this happens depends on whether the
	 *	parent surface is in synchronized mode or not. See
	 *	wl_subsurface.set_sync and wl_subsurface.set_desync for details.
	 *
	 *	If more than one set_position request is invoked by the client before
	 *	the commit of the parent surface, the position of a new request always
	 *	replaces the scheduled position from any previous request.
	 *
	 *	The initial position is 0, 0.
	 *      
	 *
	 * @param {number} x x coordinate in the parent surface 
	 * @param {number} y y coordinate in the parent surface 
	 *
	 * @since 1
	 *
	 */
	setPosition (x, y) {
		this._marshall(this.id, 1, [int(x), int(y)])
	}

	/**
	 *
	 *	This sub-surface is taken from the stack, and put back just
	 *	above the reference surface, changing the z-order of the sub-surfaces.
	 *	The reference surface must be one of the sibling surfaces, or the
	 *	parent surface. Using any other surface, including this sub-surface,
	 *	will cause a protocol error.
	 *
	 *	The z-order is double-buffered. Requests are handled in order and
	 *	applied immediately to a pending state. The final pending state is
	 *	copied to the active state the next time the state of the parent
	 *	surface is applied. When this happens depends on whether the parent
	 *	surface is in synchronized mode or not. See wl_subsurface.set_sync and
	 *	wl_subsurface.set_desync for details.
	 *
	 *	A new sub-surface is initially added as the top-most in the stack
	 *	of its siblings and parent.
	 *      
	 *
	 * @param {*} sibling the reference surface 
	 *
	 * @since 1
	 *
	 */
	placeAbove (sibling) {
		this._marshall(this.id, 2, [object(sibling)])
	}

	/**
	 *
	 *	The sub-surface is placed just below the reference surface.
	 *	See wl_subsurface.place_above.
	 *      
	 *
	 * @param {*} sibling the reference surface 
	 *
	 * @since 1
	 *
	 */
	placeBelow (sibling) {
		this._marshall(this.id, 3, [object(sibling)])
	}

	/**
	 *
	 *	Change the commit behaviour of the sub-surface to synchronized
	 *	mode, also described as the parent dependent mode.
	 *
	 *	In synchronized mode, wl_surface.commit on a sub-surface will
	 *	accumulate the committed state in a cache, but the state will
	 *	not be applied and hence will not change the compositor output.
	 *	The cached state is applied to the sub-surface immediately after
	 *	the parent surface's state is applied. This ensures atomic
	 *	updates of the parent and all its synchronized sub-surfaces.
	 *	Applying the cached state will invalidate the cache, so further
	 *	parent surface commits do not (re-)apply old state.
	 *
	 *	See wl_subsurface for the recursive effect of this mode.
	 *      
	 * @since 1
	 *
	 */
	setSync () {
		this._marshall(this.id, 4, [])
	}

	/**
	 *
	 *	Change the commit behaviour of the sub-surface to desynchronized
	 *	mode, also described as independent or freely running mode.
	 *
	 *	In desynchronized mode, wl_surface.commit on a sub-surface will
	 *	apply the pending state directly, without caching, as happens
	 *	normally with a wl_surface. Calling wl_surface.commit on the
	 *	parent surface has no effect on the sub-surface's wl_surface
	 *	state. This mode allows a sub-surface to be updated on its own.
	 *
	 *	If cached state exists when wl_surface.commit is called in
	 *	desynchronized mode, the pending state is added to the cached
	 *	state, and applied as a whole. This invalidates the cache.
	 *
	 *	Note: even if a sub-surface is set to desynchronized, a parent
	 *	sub-surface may override it to behave as synchronized. For details,
	 *	see wl_subsurface.
	 *
	 *	If a surface's parent surface behaves as desynchronized, then
	 *	the cached state is applied on set_desync.
	 *      
	 * @since 1
	 *
	 */
	setDesync () {
		this._marshall(this.id, 5, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlSubsurfaceEvents|null}
		 */
		this.listener = null
	}

}
WlSubsurfaceProxy.protocolName = 'wl_subsurface'

WlSubsurfaceProxy.Error = {
  /**
   * wl_surface is not a sibling or the parent
   */
  badSurface: 0
}

/* harmony default export */ __webpack_exports__["default"] = (WlSubsurfaceProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlSurfaceEvents.js":
/*!*******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlSurfaceEvents.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlSurfaceEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlSurfaceEvents {

	/**
	 *
	 *	This is emitted whenever a surface's creation, movement, or resizing
	 *	results in some part of it being within the scanout region of an
	 *	output.
	 *
	 *	Note that a surface may be overlapping with zero or more outputs.
	 *      
	 *
	 * @param {*} output output entered by the surface 
	 *
	 * @since 1
	 *
	 */
	enter(output) {}

	/**
	 *
	 *	This is emitted whenever a surface's creation, movement, or resizing
	 *	results in it no longer having any part of it within the scanout region
	 *	of an output.
	 *      
	 *
	 * @param {*} output output left by the surface 
	 *
	 * @since 1
	 *
	 */
	leave(output) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlSurfaceProxy.js":
/*!******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlSurfaceProxy.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _WlCallbackProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WlCallbackProxy */ "../../../westfield/client/runtime/src/protocol/WlCallbackProxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]



/**
 *
 *      A surface is a rectangular area that is displayed on the screen.
 *      It has a location, size and pixel contents.
 *
 *      The size of a surface (and relative positions on it) is described
 *      in surface-local coordinates, which may differ from the buffer
 *      coordinates of the pixel content, in case a buffer_transform
 *      or a buffer_scale is used.
 *
 *      A surface without a "role" is fairly useless: a compositor does
 *      not know where, when or how to present it. The role is the
 *      purpose of a wl_surface. Examples of roles are a cursor for a
 *      pointer (as set by wl_pointer.set_cursor), a drag icon
 *      (wl_data_device.start_drag), a sub-surface
 *      (wl_subcompositor.get_subsurface), and a window as defined by a
 *      shell protocol (e.g. wl_shell.get_shell_surface).
 *
 *      A surface can have only one role at a time. Initially a
 *      wl_surface does not have a role. Once a wl_surface is given a
 *      role, it is set permanently for the whole lifetime of the
 *      wl_surface object. Giving the current role again is allowed,
 *      unless explicitly forbidden by the relevant interface
 *      specification.
 *
 *      Surface roles are given by requests in other interfaces such as
 *      wl_pointer.set_cursor. The request should explicitly mention
 *      that this request gives a role to a wl_surface. Often, this
 *      request also creates a new protocol object that represents the
 *      role and adds additional functionality to wl_surface. When a
 *      client wants to destroy a wl_surface, they must destroy this 'role
 *      object' before the wl_surface.
 *
 *      Destroying the role object does not remove the role from the
 *      wl_surface, but it may stop the wl_surface from "playing the role".
 *      For instance, if a wl_subsurface object is destroyed, the wl_surface
 *      it was created for will be unmapped and forget its position and
 *      z-order. It is allowed to create a wl_subsurface for the same
 *      wl_surface again, but it is not allowed to use the wl_surface as
 *      a cursor (cursor is a different role than sub-surface, and role
 *      switching is not allowed).
 *    
 */
class WlSurfaceProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Deletes the surface and invalidates its object ID.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	Set a buffer as the content of this surface.
	 *
	 *	The new size of the surface is calculated based on the buffer
	 *	size transformed by the inverse buffer_transform and the
	 *	inverse buffer_scale. This means that the supplied buffer
	 *	must be an integer multiple of the buffer_scale.
	 *
	 *	The x and y arguments specify the location of the new pending
	 *	buffer's upper left corner, relative to the current buffer's upper
	 *	left corner, in surface-local coordinates. In other words, the
	 *	x and y, combined with the new surface size define in which
	 *	directions the surface's size changes.
	 *
	 *	Surface contents are double-buffered state, see wl_surface.commit.
	 *
	 *	The initial surface contents are void; there is no content.
	 *	wl_surface.attach assigns the given wl_buffer as the pending
	 *	wl_buffer. wl_surface.commit makes the pending wl_buffer the new
	 *	surface contents, and the size of the surface becomes the size
	 *	calculated from the wl_buffer, as described above. After commit,
	 *	there is no pending buffer until the next attach.
	 *
	 *	Committing a pending wl_buffer allows the compositor to read the
	 *	pixels in the wl_buffer. The compositor may access the pixels at
	 *	any time after the wl_surface.commit request. When the compositor
	 *	will not access the pixels anymore, it will send the
	 *	wl_buffer.release event. Only after receiving wl_buffer.release,
	 *	the client may reuse the wl_buffer. A wl_buffer that has been
	 *	attached and then replaced by another attach instead of committed
	 *	will not receive a release event, and is not used by the
	 *	compositor.
	 *
	 *	Destroying the wl_buffer after wl_buffer.release does not change
	 *	the surface contents. However, if the client destroys the
	 *	wl_buffer before receiving the wl_buffer.release event, the surface
	 *	contents become undefined immediately.
	 *
	 *	If wl_surface.attach is sent with a NULL wl_buffer, the
	 *	following wl_surface.commit will remove the surface content.
	 *      
	 *
	 * @param {?*} buffer buffer of surface contents 
	 * @param {number} x surface-local x coordinate 
	 * @param {number} y surface-local y coordinate 
	 *
	 * @since 1
	 *
	 */
	attach (buffer, x, y) {
		this._marshall(this.id, 1, [objectOptional(buffer), int(x), int(y)])
	}

	/**
	 *
	 *	This request is used to describe the regions where the pending
	 *	buffer is different from the current surface contents, and where
	 *	the surface therefore needs to be repainted. The compositor
	 *	ignores the parts of the damage that fall outside of the surface.
	 *
	 *	Damage is double-buffered state, see wl_surface.commit.
	 *
	 *	The damage rectangle is specified in surface-local coordinates,
	 *	where x and y specify the upper left corner of the damage rectangle.
	 *
	 *	The initial value for pending damage is empty: no damage.
	 *	wl_surface.damage adds pending damage: the new pending damage
	 *	is the union of old pending damage and the given rectangle.
	 *
	 *	wl_surface.commit assigns pending damage as the current damage,
	 *	and clears pending damage. The server will clear the current
	 *	damage as it repaints the surface.
	 *
	 *	Alternatively, damage can be posted with wl_surface.damage_buffer
	 *	which uses buffer coordinates instead of surface coordinates,
	 *	and is probably the preferred and intuitive way of doing this.
	 *      
	 *
	 * @param {number} x surface-local x coordinate 
	 * @param {number} y surface-local y coordinate 
	 * @param {number} width width of damage rectangle 
	 * @param {number} height height of damage rectangle 
	 *
	 * @since 1
	 *
	 */
	damage (x, y, width, height) {
		this._marshall(this.id, 2, [int(x), int(y), int(width), int(height)])
	}

	/**
	 *
	 *	Request a notification when it is a good time to start drawing a new
	 *	frame, by creating a frame callback. This is useful for throttling
	 *	redrawing operations, and driving animations.
	 *
	 *	When a client is animating on a wl_surface, it can use the 'frame'
	 *	request to get notified when it is a good time to draw and commit the
	 *	next frame of animation. If the client commits an update earlier than
	 *	that, it is likely that some updates will not make it to the display,
	 *	and the client is wasting resources by drawing too often.
	 *
	 *	The frame request will take effect on the next wl_surface.commit.
	 *	The notification will only be posted for one frame unless
	 *	requested again. For a wl_surface, the notifications are posted in
	 *	the order the frame requests were committed.
	 *
	 *	The server must send the notifications so that a client
	 *	will not send excessive updates, while still allowing
	 *	the highest possible update rate for clients that wait for the reply
	 *	before drawing again. The server should give some time for the client
	 *	to draw and commit after sending the frame callback events to let it
	 *	hit the next output refresh.
	 *
	 *	A server should avoid signaling the frame callbacks if the
	 *	surface is not visible in any way, e.g. the surface is off-screen,
	 *	or completely obscured by other opaque surfaces.
	 *
	 *	The object returned by this request will be destroyed by the
	 *	compositor after the callback is fired and as such the client must not
	 *	attempt to use it after that point.
	 *
	 *	The callback_data passed in the callback is the current time, in
	 *	milliseconds, with an undefined base.
	 *      
	 *
	 * @return {WlCallbackProxy} callback object for the frame request 
	 *
	 * @since 1
	 *
	 */
	frame () {
		return this._marshallConstructor(this.id, 3, _WlCallbackProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *	This request sets the region of the surface that contains
	 *	opaque content.
	 *
	 *	The opaque region is an optimization hint for the compositor
	 *	that lets it optimize the redrawing of content behind opaque
	 *	regions.  Setting an opaque region is not required for correct
	 *	behaviour, but marking transparent content as opaque will result
	 *	in repaint artifacts.
	 *
	 *	The opaque region is specified in surface-local coordinates.
	 *
	 *	The compositor ignores the parts of the opaque region that fall
	 *	outside of the surface.
	 *
	 *	Opaque region is double-buffered state, see wl_surface.commit.
	 *
	 *	wl_surface.set_opaque_region changes the pending opaque region.
	 *	wl_surface.commit copies the pending region to the current region.
	 *	Otherwise, the pending and current regions are never changed.
	 *
	 *	The initial value for an opaque region is empty. Setting the pending
	 *	opaque region has copy semantics, and the wl_region object can be
	 *	destroyed immediately. A NULL wl_region causes the pending opaque
	 *	region to be set to empty.
	 *      
	 *
	 * @param {?*} region opaque region of the surface 
	 *
	 * @since 1
	 *
	 */
	setOpaqueRegion (region) {
		this._marshall(this.id, 4, [objectOptional(region)])
	}

	/**
	 *
	 *	This request sets the region of the surface that can receive
	 *	pointer and touch events.
	 *
	 *	Input events happening outside of this region will try the next
	 *	surface in the server surface stack. The compositor ignores the
	 *	parts of the input region that fall outside of the surface.
	 *
	 *	The input region is specified in surface-local coordinates.
	 *
	 *	Input region is double-buffered state, see wl_surface.commit.
	 *
	 *	wl_surface.set_input_region changes the pending input region.
	 *	wl_surface.commit copies the pending region to the current region.
	 *	Otherwise the pending and current regions are never changed,
	 *	except cursor and icon surfaces are special cases, see
	 *	wl_pointer.set_cursor and wl_data_device.start_drag.
	 *
	 *	The initial value for an input region is infinite. That means the
	 *	whole surface will accept input. Setting the pending input region
	 *	has copy semantics, and the wl_region object can be destroyed
	 *	immediately. A NULL wl_region causes the input region to be set
	 *	to infinite.
	 *      
	 *
	 * @param {?*} region input region of the surface 
	 *
	 * @since 1
	 *
	 */
	setInputRegion (region) {
		this._marshall(this.id, 5, [objectOptional(region)])
	}

	/**
	 *
	 *	Surface state (input, opaque, and damage regions, attached buffers,
	 *	etc.) is double-buffered. Protocol requests modify the pending state,
	 *	as opposed to the current state in use by the compositor. A commit
	 *	request atomically applies all pending state, replacing the current
	 *	state. After commit, the new pending state is as documented for each
	 *	related request.
	 *
	 *	On commit, a pending wl_buffer is applied first, and all other state
	 *	second. This means that all coordinates in double-buffered state are
	 *	relative to the new wl_buffer coming into use, except for
	 *	wl_surface.attach itself. If there is no pending wl_buffer, the
	 *	coordinates are relative to the current surface contents.
	 *
	 *	All requests that need a commit to become effective are documented
	 *	to affect double-buffered state.
	 *
	 *	Other interfaces may add further double-buffered surface state.
	 *      
	 *
	 * @param {number} serial serial number of the commit 
	 *
	 * @since 1
	 *
	 */
	commit (serial) {
		this._marshall(this.id, 6, [uint(serial)])
	}

	/**
	 *
	 *	This request sets an optional transformation on how the compositor
	 *	interprets the contents of the buffer attached to the surface. The
	 *	accepted values for the transform parameter are the values for
	 *	wl_output.transform.
	 *
	 *	Buffer transform is double-buffered state, see wl_surface.commit.
	 *
	 *	A newly created surface has its buffer transformation set to normal.
	 *
	 *	wl_surface.set_buffer_transform changes the pending buffer
	 *	transformation. wl_surface.commit copies the pending buffer
	 *	transformation to the current one. Otherwise, the pending and current
	 *	values are never changed.
	 *
	 *	The purpose of this request is to allow clients to render content
	 *	according to the output transform, thus permitting the compositor to
	 *	use certain optimizations even if the display is rotated. Using
	 *	hardware overlays and scanning out a client buffer for fullscreen
	 *	surfaces are examples of such optimizations. Those optimizations are
	 *	highly dependent on the compositor implementation, so the use of this
	 *	request should be considered on a case-by-case basis.
	 *
	 *	Note that if the transform value includes 90 or 270 degree rotation,
	 *	the width of the buffer will become the surface height and the height
	 *	of the buffer will become the surface width.
	 *
	 *	If transform is not one of the values from the
	 *	wl_output.transform enum the invalid_transform protocol error
	 *	is raised.
	 *      
	 *
	 * @param {number} transform transform for interpreting buffer contents 
	 *
	 * @since 2
	 *
	 */
	setBufferTransform (transform) {
		this._marshall(this.id, 7, [int(transform)])
	}

	/**
	 *
	 *	This request sets an optional scaling factor on how the compositor
	 *	interprets the contents of the buffer attached to the window.
	 *
	 *	Buffer scale is double-buffered state, see wl_surface.commit.
	 *
	 *	A newly created surface has its buffer scale set to 1.
	 *
	 *	wl_surface.set_buffer_scale changes the pending buffer scale.
	 *	wl_surface.commit copies the pending buffer scale to the current one.
	 *	Otherwise, the pending and current values are never changed.
	 *
	 *	The purpose of this request is to allow clients to supply higher
	 *	resolution buffer data for use on high resolution outputs. It is
	 *	intended that you pick the same buffer scale as the scale of the
	 *	output that the surface is displayed on. This means the compositor
	 *	can avoid scaling when rendering the surface on that output.
	 *
	 *	Note that if the scale is larger than 1, then you have to attach
	 *	a buffer that is larger (by a factor of scale in each dimension)
	 *	than the desired surface size.
	 *
	 *	If scale is not positive the invalid_scale protocol error is
	 *	raised.
	 *      
	 *
	 * @param {number} scale positive scale for interpreting buffer contents 
	 *
	 * @since 3
	 *
	 */
	setBufferScale (scale) {
		this._marshall(this.id, 8, [int(scale)])
	}

	/**
	 *
	 *	This request is used to describe the regions where the pending
	 *	buffer is different from the current surface contents, and where
	 *	the surface therefore needs to be repainted. The compositor
	 *	ignores the parts of the damage that fall outside of the surface.
	 *
	 *	Damage is double-buffered state, see wl_surface.commit.
	 *
	 *	The damage rectangle is specified in buffer coordinates,
	 *	where x and y specify the upper left corner of the damage rectangle.
	 *
	 *	The initial value for pending damage is empty: no damage.
	 *	wl_surface.damage_buffer adds pending damage: the new pending
	 *	damage is the union of old pending damage and the given rectangle.
	 *
	 *	wl_surface.commit assigns pending damage as the current damage,
	 *	and clears pending damage. The server will clear the current
	 *	damage as it repaints the surface.
	 *
	 *	This request differs from wl_surface.damage in only one way - it
	 *	takes damage in buffer coordinates instead of surface-local
	 *	coordinates. While this generally is more intuitive than surface
	 *	coordinates, it is especially desirable when using wp_viewport
	 *	or when a drawing library (like EGL) is unaware of buffer scale
	 *	and buffer transform.
	 *
	 *	Note: Because buffer transformation changes and damage requests may
	 *	be interleaved in the protocol stream, it is impossible to determine
	 *	the actual mapping between surface and buffer damage until
	 *	wl_surface.commit time. Therefore, compositors wishing to take both
	 *	kinds of damage into account will have to accumulate damage from the
	 *	two requests separately and only transform from one to the other
	 *	after receiving the wl_surface.commit.
	 *      
	 *
	 * @param {number} x buffer-local x coordinate 
	 * @param {number} y buffer-local y coordinate 
	 * @param {number} width width of damage rectangle 
	 * @param {number} height height of damage rectangle 
	 *
	 * @since 4
	 *
	 */
	damageBuffer (x, y, width, height) {
		this._marshall(this.id, 9, [int(x), int(y), int(width), int(height)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlSurfaceEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.enter(o(message, false, this._connection))
	}

	async [1] (message) {
		await this.listener.leave(o(message, false, this._connection))
	}

}
WlSurfaceProxy.protocolName = 'wl_surface'

WlSurfaceProxy.Error = {
  /**
   * buffer scale value is invalid
   */
  invalidScale: 0,
  /**
   * buffer transform value is invalid
   */
  invalidTransform: 1
}

/* harmony default export */ __webpack_exports__["default"] = (WlSurfaceProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlTouchEvents.js":
/*!*****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlTouchEvents.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WlTouchEvents; });
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */

/**
 * @interface
 */
class WlTouchEvents {

	/**
	 *
	 *	A new touch point has appeared on the surface. This touch point is
	 *	assigned a unique ID. Future events from this touch point reference
	 *	this ID. The ID ceases to be valid after a touch up event and may be
	 *	reused in the future.
	 *      
	 *
	 * @param {number} serial serial number of the touch down event 
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {*} surface surface touched 
	 * @param {number} id the unique ID of this touch point 
	 * @param {Fixed} x surface-local x coordinate 
	 * @param {Fixed} y surface-local y coordinate 
	 *
	 * @since 1
	 *
	 */
	down(serial, time, surface, id, x, y) {}

	/**
	 *
	 *	The touch point has disappeared. No further events will be sent for
	 *	this touch point and the touch point's ID is released and may be
	 *	reused in a future touch down event.
	 *      
	 *
	 * @param {number} serial serial number of the touch up event 
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {number} id the unique ID of this touch point 
	 *
	 * @since 1
	 *
	 */
	up(serial, time, id) {}

	/**
	 *
	 *	A touch point has changed coordinates.
	 *      
	 *
	 * @param {number} time timestamp with millisecond granularity 
	 * @param {number} id the unique ID of this touch point 
	 * @param {Fixed} x surface-local x coordinate 
	 * @param {Fixed} y surface-local y coordinate 
	 *
	 * @since 1
	 *
	 */
	motion(time, id, x, y) {}

	/**
	 *
	 *	Indicates the end of a set of events that logically belong together.
	 *	A client is expected to accumulate the data in all events within the
	 *	frame before proceeding.
	 *
	 *	A wl_touch.frame terminates at least one event but otherwise no
	 *	guarantee is provided about the set of events within a frame. A client
	 *	must assume that any state not updated in a frame is unchanged from the
	 *	previously known state.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	frame() {}

	/**
	 *
	 *	Sent if the compositor decides the touch stream is a global
	 *	gesture. No further events are sent to the clients from that
	 *	particular gesture. Touch cancellation applies to all touch points
	 *	currently active on this client's surface. The client is
	 *	responsible for finalizing the touch points, future touch points on
	 *	this surface may reuse the touch point ID.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	cancel() {}

	/**
	 *
	 *	Sent when a touchpoint has changed its shape.
	 *
	 *	This event does not occur on its own. It is sent before a
	 *	wl_touch.frame event and carries the new shape information for
	 *	any previously reported, or new touch points of that frame.
	 *
	 *	Other events describing the touch point such as wl_touch.down,
	 *	wl_touch.motion or wl_touch.orientation may be sent within the
	 *	same wl_touch.frame. A client should treat these events as a single
	 *	logical touch point update. The order of wl_touch.shape,
	 *	wl_touch.orientation and wl_touch.motion is not guaranteed.
	 *	A wl_touch.down event is guaranteed to occur before the first
	 *	wl_touch.shape event for this touch ID but both events may occur within
	 *	the same wl_touch.frame.
	 *
	 *	A touchpoint shape is approximated by an ellipse through the major and
	 *	minor axis length. The major axis length describes the longer diameter
	 *	of the ellipse, while the minor axis length describes the shorter
	 *	diameter. Major and minor are orthogonal and both are specified in
	 *	surface-local coordinates. The center of the ellipse is always at the
	 *	touchpoint location as reported by wl_touch.down or wl_touch.move.
	 *
	 *	This event is only sent by the compositor if the touch device supports
	 *	shape reports. The client has to make reasonable assumptions about the
	 *	shape if it did not receive this event.
	 *      
	 *
	 * @param {number} id the unique ID of this touch point 
	 * @param {Fixed} major length of the major axis in surface-local coordinates 
	 * @param {Fixed} minor length of the minor axis in surface-local coordinates 
	 *
	 * @since 6
	 *
	 */
	shape(id, major, minor) {}

	/**
	 *
	 *	Sent when a touchpoint has changed its orientation.
	 *
	 *	This event does not occur on its own. It is sent before a
	 *	wl_touch.frame event and carries the new shape information for
	 *	any previously reported, or new touch points of that frame.
	 *
	 *	Other events describing the touch point such as wl_touch.down,
	 *	wl_touch.motion or wl_touch.shape may be sent within the
	 *	same wl_touch.frame. A client should treat these events as a single
	 *	logical touch point update. The order of wl_touch.shape,
	 *	wl_touch.orientation and wl_touch.motion is not guaranteed.
	 *	A wl_touch.down event is guaranteed to occur before the first
	 *	wl_touch.orientation event for this touch ID but both events may occur
	 *	within the same wl_touch.frame.
	 *
	 *	The orientation describes the clockwise angle of a touchpoint's major
	 *	axis to the positive surface y-axis and is normalized to the -180 to
	 *	+180 degree range. The granularity of orientation depends on the touch
	 *	device, some devices only support binary rotation values between 0 and
	 *	90 degrees.
	 *
	 *	This event is only sent by the compositor if the touch device supports
	 *	orientation reports.
	 *      
	 *
	 * @param {number} id the unique ID of this touch point 
	 * @param {Fixed} orientation angle between major axis and positive surface y-axis in degrees 
	 *
	 * @since 6
	 *
	 */
	orientation(id, orientation) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/WlTouchProxy.js":
/*!****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/WlTouchProxy.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2011 Kristian Høgsberg
 *    Copyright © 2010-2011 Intel Corporation
 *    Copyright © 2012-2013 Collabora, Ltd.
 *
 *    Permission is hereby granted, free of charge, to any person
 *    obtaining a copy of this software and associated documentation files
 *    (the "Software"), to deal in the Software without restriction,
 *    including without limitation the rights to use, copy, modify, merge,
 *    publish, distribute, sublicense, and/or sell copies of the Software,
 *    and to permit persons to whom the Software is furnished to do so,
 *    subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the
 *    next paragraph) shall be included in all copies or substantial
 *    portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *    NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *    SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      The wl_touch interface represents a touchscreen
 *      associated with a seat.
 *
 *      Touch interactions can consist of one or more contacts.
 *      For each contact, a series of events is generated, starting
 *      with a down event, followed by zero or more motion events,
 *      and ending with an up event. Events relating to the same
 *      contact point can be identified by the ID of the sequence.
 *    
 */
class WlTouchProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 * @since 3
	 *
	 */
	release () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {WlTouchEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.down(u(message), u(message), o(message, false, this._connection), i(message), f(message), f(message))
	}

	async [1] (message) {
		await this.listener.up(u(message), u(message), i(message))
	}

	async [2] (message) {
		await this.listener.motion(u(message), i(message), f(message), f(message))
	}

	async [3] (message) {
		await this.listener.frame()
	}

	async [4] (message) {
		await this.listener.cancel()
	}

	async [5] (message) {
		await this.listener.shape(i(message), f(message), f(message))
	}

	async [6] (message) {
		await this.listener.orientation(i(message), f(message))
	}

}
WlTouchProxy.protocolName = 'wl_touch'

/* harmony default export */ __webpack_exports__["default"] = (WlTouchProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgPopupEvents.js":
/*!******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgPopupEvents.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XdgPopupEvents; });
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */

/**
 * @interface
 */
class XdgPopupEvents {

	/**
	 *
	 *	This event asks the popup surface to configure itself given the
	 *	configuration. The configured state should not be applied immediately.
	 *	See xdg_surface.configure for details.
	 *
	 *	The x and y arguments represent the position the popup was placed at
	 *	given the xdg_positioner rule, relative to the upper left corner of the
	 *	window geometry of the parent surface.
	 *      
	 *
	 * @param {number} x x position relative to parent surface window geometry 
	 * @param {number} y y position relative to parent surface window geometry 
	 * @param {number} width window geometry width 
	 * @param {number} height window geometry height 
	 *
	 * @since 1
	 *
	 */
	configure(x, y, width, height) {}

	/**
	 *
	 *	The popup_done event is sent out when a popup is dismissed by the
	 *	compositor. The client should destroy the xdg_popup object at this
	 *	point.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	popupDone() {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgPopupProxy.js":
/*!*****************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgPopupProxy.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      A popup surface is a short-lived, temporary surface. It can be used to
 *      implement for example menus, popovers, tooltips and other similar user
 *      interface concepts.
 *
 *      A popup can be made to take an explicit grab. See xdg_popup.grab for
 *      details.
 *
 *      When the popup is dismissed, a popup_done event will be sent out, and at
 *      the same time the surface will be unmapped. See the xdg_popup.popup_done
 *      event for details.
 *
 *      Explicitly destroying the xdg_popup object will also dismiss the popup and
 *      unmap the surface. Clients that want to dismiss the popup when another
 *      surface of their own is clicked should dismiss the popup using the destroy
 *      request.
 *
 *      The parent surface must have either the xdg_toplevel or xdg_popup surface
 *      role.
 *
 *      A newly created xdg_popup will be stacked on top of all previously created
 *      xdg_popup surfaces associated with the same xdg_toplevel.
 *
 *      The parent of an xdg_popup must be mapped (see the xdg_surface
 *      description) before the xdg_popup itself.
 *
 *      The x and y arguments passed when creating the popup object specify
 *      where the top left of the popup should be placed, relative to the
 *      local surface coordinates of the parent surface. See
 *      xdg_surface.get_popup. An xdg_popup must intersect with or be at least
 *      partially adjacent to its parent surface.
 *
 *      The client must call wl_surface.commit on the corresponding wl_surface
 *      for the xdg_popup state to take effect.
 *    
 */
class XdgPopupProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	This destroys the popup. Explicitly destroying the xdg_popup
	 *	object will also dismiss the popup, and unmap the surface.
	 *
	 *	If this xdg_popup is not the "topmost" popup, a protocol error
	 *	will be sent.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	This request makes the created popup take an explicit grab. An explicit
	 *	grab will be dismissed when the user dismisses the popup, or when the
	 *	client destroys the xdg_popup. This can be done by the user clicking
	 *	outside the surface, using the keyboard, or even locking the screen
	 *	through closing the lid or a timeout.
	 *
	 *	If the compositor denies the grab, the popup will be immediately
	 *	dismissed.
	 *
	 *	This request must be used in response to some sort of user action like a
	 *	button press, key press, or touch down event. The serial number of the
	 *	event should be passed as 'serial'.
	 *
	 *	The parent of a grabbing popup must either be an xdg_toplevel surface or
	 *	another xdg_popup with an explicit grab. If the parent is another
	 *	xdg_popup it means that the popups are nested, with this popup now being
	 *	the topmost popup.
	 *
	 *	Nested popups must be destroyed in the reverse order they were created
	 *	in, e.g. the only popup you are allowed to destroy at all times is the
	 *	topmost one.
	 *
	 *	When compositors choose to dismiss a popup, they may dismiss every
	 *	nested grabbing popup as well. When a compositor dismisses popups, it
	 *	will follow the same dismissing order as required from the client.
	 *
	 *	The parent of a grabbing popup must either be another xdg_popup with an
	 *	active explicit grab, or an xdg_popup or xdg_toplevel, if there are no
	 *	explicit grabs already taken.
	 *
	 *	If the topmost grabbing popup is destroyed, the grab will be returned to
	 *	the parent of the popup, if that parent previously had an explicit grab.
	 *
	 *	If the parent is a grabbing popup which has already been dismissed, this
	 *	popup will be immediately dismissed. If the parent is a popup that did
	 *	not take an explicit grab, an error will be raised.
	 *
	 *	During a popup grab, the client owning the grab will receive pointer
	 *	and touch events for all their surfaces as normal (similar to an
	 *	"owner-events" grab in X11 parlance), while the top most grabbing popup
	 *	will always have keyboard focus.
	 *      
	 *
	 * @param {*} seat the wl_seat of the user event 
	 * @param {number} serial the serial of the user event 
	 *
	 * @since 1
	 *
	 */
	grab (seat, serial) {
		this._marshall(this.id, 1, [object(seat), uint(serial)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {XdgPopupEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.configure(i(message), i(message), i(message), i(message))
	}

	async [1] (message) {
		await this.listener.popupDone()
	}

}
XdgPopupProxy.protocolName = 'xdg_popup'

XdgPopupProxy.Error = {
  /**
   * tried to grab after being mapped
   */
  invalidGrab: 0
}

/* harmony default export */ __webpack_exports__["default"] = (XdgPopupProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgPositionerProxy.js":
/*!**********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgPositionerProxy.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      The xdg_positioner provides a collection of rules for the placement of a
 *      child surface relative to a parent surface. Rules can be defined to ensure
 *      the child surface remains within the visible area's borders, and to
 *      specify how the child surface changes its position, such as sliding along
 *      an axis, or flipping around a rectangle. These positioner-created rules are
 *      constrained by the requirement that a child surface must intersect with or
 *      be at least partially adjacent to its parent surface.
 *
 *      See the various requests for details about possible rules.
 *
 *      At the time of the request, the compositor makes a copy of the rules
 *      specified by the xdg_positioner. Thus, after the request is complete the
 *      xdg_positioner object can be destroyed or reused; further changes to the
 *      object will have no effect on previous usages.
 *
 *      For an xdg_positioner object to be considered complete, it must have a
 *      non-zero size set by set_size, and a non-zero anchor rectangle set by
 *      set_anchor_rect. Passing an incomplete xdg_positioner object when
 *      positioning a surface raises an error.
 *    
 */
class XdgPositionerProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Notify the compositor that the xdg_positioner will no longer be used.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	Set the size of the surface that is to be positioned with the positioner
	 *	object. The size is in surface-local coordinates and corresponds to the
	 *	window geometry. See xdg_surface.set_window_geometry.
	 *
	 *	If a zero or negative size is set the invalid_input error is raised.
	 *      
	 *
	 * @param {number} width width of positioned rectangle 
	 * @param {number} height height of positioned rectangle 
	 *
	 * @since 1
	 *
	 */
	setSize (width, height) {
		this._marshall(this.id, 1, [int(width), int(height)])
	}

	/**
	 *
	 *	Specify the anchor rectangle within the parent surface that the child
	 *	surface will be placed relative to. The rectangle is relative to the
	 *	window geometry as defined by xdg_surface.set_window_geometry of the
	 *	parent surface.
	 *
	 *	When the xdg_positioner object is used to position a child surface, the
	 *	anchor rectangle may not extend outside the window geometry of the
	 *	positioned child's parent surface.
	 *
	 *	If a negative size is set the invalid_input error is raised.
	 *      
	 *
	 * @param {number} x x position of anchor rectangle 
	 * @param {number} y y position of anchor rectangle 
	 * @param {number} width width of anchor rectangle 
	 * @param {number} height height of anchor rectangle 
	 *
	 * @since 1
	 *
	 */
	setAnchorRect (x, y, width, height) {
		this._marshall(this.id, 2, [int(x), int(y), int(width), int(height)])
	}

	/**
	 *
	 *	Defines the anchor point for the anchor rectangle. The specified anchor
	 *	is used derive an anchor point that the child surface will be
	 *	positioned relative to. If a corner anchor is set (e.g. 'top_left' or
	 *	'bottom_right'), the anchor point will be at the specified corner;
	 *	otherwise, the derived anchor point will be centered on the specified
	 *	edge, or in the center of the anchor rectangle if no edge is specified.
	 *      
	 *
	 * @param {number} anchor anchor 
	 *
	 * @since 1
	 *
	 */
	setAnchor (anchor) {
		this._marshall(this.id, 3, [uint(anchor)])
	}

	/**
	 *
	 *	Defines in what direction a surface should be positioned, relative to
	 *	the anchor point of the parent surface. If a corner gravity is
	 *	specified (e.g. 'bottom_right' or 'top_left'), then the child surface
	 *	will be placed towards the specified gravity; otherwise, the child
	 *	surface will be centered over the anchor point on any axis that had no
	 *	gravity specified.
	 *      
	 *
	 * @param {number} gravity gravity direction 
	 *
	 * @since 1
	 *
	 */
	setGravity (gravity) {
		this._marshall(this.id, 4, [uint(gravity)])
	}

	/**
	 *
	 *	Specify how the window should be positioned if the originally intended
	 *	position caused the surface to be constrained, meaning at least
	 *	partially outside positioning boundaries set by the compositor. The
	 *	adjustment is set by constructing a bitmask describing the adjustment to
	 *	be made when the surface is constrained on that axis.
	 *
	 *	If no bit for one axis is set, the compositor will assume that the child
	 *	surface should not change its position on that axis when constrained.
	 *
	 *	If more than one bit for one axis is set, the order of how adjustments
	 *	are applied is specified in the corresponding adjustment descriptions.
	 *
	 *	The default adjustment is none.
	 *      
	 *
	 * @param {number} constraintAdjustment bit mask of constraint adjustments 
	 *
	 * @since 1
	 *
	 */
	setConstraintAdjustment (constraintAdjustment) {
		this._marshall(this.id, 5, [uint(constraintAdjustment)])
	}

	/**
	 *
	 *	Specify the surface position offset relative to the position of the
	 *	anchor on the anchor rectangle and the anchor on the surface. For
	 *	example if the anchor of the anchor rectangle is at (x, y), the surface
	 *	has the gravity bottom|right, and the offset is (ox, oy), the calculated
	 *	surface position will be (x + ox, y + oy). The offset position of the
	 *	surface is the one used for constraint testing. See
	 *	set_constraint_adjustment.
	 *
	 *	An example use case is placing a popup menu on top of a user interface
	 *	element, while aligning the user interface element of the parent surface
	 *	with some user interface element placed somewhere in the popup surface.
	 *      
	 *
	 * @param {number} x surface position x offset 
	 * @param {number} y surface position y offset 
	 *
	 * @since 1
	 *
	 */
	setOffset (x, y) {
		this._marshall(this.id, 6, [int(x), int(y)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {XdgPositionerEvents|null}
		 */
		this.listener = null
	}

}
XdgPositionerProxy.protocolName = 'xdg_positioner'

XdgPositionerProxy.Error = {
  /**
   * invalid input provided
   */
  invalidInput: 0
}

XdgPositionerProxy.Anchor = {
  /**
   * 
   */
  none: 0,
  /**
   * 
   */
  top: 1,
  /**
   * 
   */
  bottom: 2,
  /**
   * 
   */
  left: 3,
  /**
   * 
   */
  right: 4,
  /**
   * 
   */
  topLeft: 5,
  /**
   * 
   */
  bottomLeft: 6,
  /**
   * 
   */
  topRight: 7,
  /**
   * 
   */
  bottomRight: 8
}

XdgPositionerProxy.Gravity = {
  /**
   * 
   */
  none: 0,
  /**
   * 
   */
  top: 1,
  /**
   * 
   */
  bottom: 2,
  /**
   * 
   */
  left: 3,
  /**
   * 
   */
  right: 4,
  /**
   * 
   */
  topLeft: 5,
  /**
   * 
   */
  bottomLeft: 6,
  /**
   * 
   */
  topRight: 7,
  /**
   * 
   */
  bottomRight: 8
}

XdgPositionerProxy.ConstraintAdjustment = {
  /**
   * 
   */
  none: 0,
  /**
   * 
   */
  slideX: 1,
  /**
   * 
   */
  slideY: 2,
  /**
   * 
   */
  flipX: 4,
  /**
   * 
   */
  flipY: 8,
  /**
   * 
   */
  resizeX: 16,
  /**
   * 
   */
  resizeY: 32
}

/* harmony default export */ __webpack_exports__["default"] = (XdgPositionerProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgSurfaceEvents.js":
/*!********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgSurfaceEvents.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XdgSurfaceEvents; });
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */

/**
 * @interface
 */
class XdgSurfaceEvents {

	/**
	 *
	 *	The configure event marks the end of a configure sequence. A configure
	 *	sequence is a set of one or more events configuring the state of the
	 *	xdg_surface, including the final xdg_surface.configure event.
	 *
	 *	Where applicable, xdg_surface surface roles will during a configure
	 *	sequence extend this event as a latched state sent as events before the
	 *	xdg_surface.configure event. Such events should be considered to make up
	 *	a set of atomically applied configuration states, where the
	 *	xdg_surface.configure commits the accumulated state.
	 *
	 *	Clients should arrange their surface for the new states, and then send
	 *	an ack_configure request with the serial sent in this configure event at
	 *	some point before committing the new surface.
	 *
	 *	If the client receives multiple configure events before it can respond
	 *	to one, it is free to discard all but the last event it received.
	 *      
	 *
	 * @param {number} serial serial of the configure event 
	 *
	 * @since 1
	 *
	 */
	configure(serial) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgSurfaceProxy.js":
/*!*******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgSurfaceProxy.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _XdgToplevelProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XdgToplevelProxy */ "../../../westfield/client/runtime/src/protocol/XdgToplevelProxy.js");
/* harmony import */ var _XdgPopupProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XdgPopupProxy */ "../../../westfield/client/runtime/src/protocol/XdgPopupProxy.js");
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]




/**
 *
 *      An interface that may be implemented by a wl_surface, for
 *      implementations that provide a desktop-style user interface.
 *
 *      It provides a base set of functionality required to construct user
 *      interface elements requiring management by the compositor, such as
 *      toplevel windows, menus, etc. The types of functionality are split into
 *      xdg_surface roles.
 *
 *      Creating an xdg_surface does not set the role for a wl_surface. In order
 *      to map an xdg_surface, the client must create a role-specific object
 *      using, e.g., get_toplevel, get_popup. The wl_surface for any given
 *      xdg_surface can have at most one role, and may not be assigned any role
 *      not based on xdg_surface.
 *
 *      A role must be assigned before any other requests are made to the
 *      xdg_surface object.
 *
 *      The client must call wl_surface.commit on the corresponding wl_surface
 *      for the xdg_surface state to take effect.
 *
 *      Creating an xdg_surface from a wl_surface which has a buffer attached or
 *      committed is a client error, and any attempts by a client to attach or
 *      manipulate a buffer prior to the first xdg_surface.configure call must
 *      also be treated as errors.
 *
 *      Mapping an xdg_surface-based role surface is defined as making it
 *      possible for the surface to be shown by the compositor. Note that
 *      a mapped surface is not guaranteed to be visible once it is mapped.
 *
 *      For an xdg_surface to be mapped by the compositor, the following
 *      conditions must be met:
 *      (1) the client has assigned an xdg_surface-based role to the surface
 *      (2) the client has set and committed the xdg_surface state and the
 *	  role-dependent state to the surface
 *      (3) the client has committed a buffer to the surface
 *
 *      A newly-unmapped surface is considered to have met condition (1) out
 *      of the 3 required conditions for mapping a surface if its role surface
 *      has not been destroyed.
 *    
 */
class XdgSurfaceProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Destroy the xdg_surface object. An xdg_surface must only be destroyed
	 *	after its role object has been destroyed.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	This creates an xdg_toplevel object for the given xdg_surface and gives
	 *	the associated wl_surface the xdg_toplevel role.
	 *
	 *	See the documentation of xdg_toplevel for more details about what an
	 *	xdg_toplevel is and how it is used.
	 *      
	 *
	 * @return {XdgToplevelProxy}  
	 *
	 * @since 1
	 *
	 */
	getToplevel () {
		return this._marshallConstructor(this.id, 1, _XdgToplevelProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *	This creates an xdg_popup object for the given xdg_surface and gives
	 *	the associated wl_surface the xdg_popup role.
	 *
	 *	If null is passed as a parent, a parent surface must be specified using
	 *	some other protocol, before committing the initial state.
	 *
	 *	See the documentation of xdg_popup for more details about what an
	 *	xdg_popup is and how it is used.
	 *      
	 *
	 * @param {?*} parent  
	 * @param {*} positioner  
	 * @return {XdgPopupProxy}  
	 *
	 * @since 1
	 *
	 */
	getPopup (parent, positioner) {
		return this._marshallConstructor(this.id, 2, _XdgPopupProxy__WEBPACK_IMPORTED_MODULE_3__["default"], [newObject(), objectOptional(parent), object(positioner)])
	}

	/**
	 *
	 *	The window geometry of a surface is its "visible bounds" from the
	 *	user's perspective. Client-side decorations often have invisible
	 *	portions like drop-shadows which should be ignored for the
	 *	purposes of aligning, placing and constraining windows.
	 *
	 *	The window geometry is double buffered, and will be applied at the
	 *	time wl_surface.commit of the corresponding wl_surface is called.
	 *
	 *	When maintaining a position, the compositor should treat the (x, y)
	 *	coordinate of the window geometry as the top left corner of the window.
	 *	A client changing the (x, y) window geometry coordinate should in
	 *	general not alter the position of the window.
	 *
	 *	Once the window geometry of the surface is set, it is not possible to
	 *	unset it, and it will remain the same until set_window_geometry is
	 *	called again, even if a new subsurface or buffer is attached.
	 *
	 *	If never set, the value is the full bounds of the surface,
	 *	including any subsurfaces. This updates dynamically on every
	 *	commit. This unset is meant for extremely simple clients.
	 *
	 *	The arguments are given in the surface-local coordinate space of
	 *	the wl_surface associated with this xdg_surface.
	 *
	 *	The width and height must be greater than zero. Setting an invalid size
	 *	will raise an error. When applied, the effective window geometry will be
	 *	the set window geometry clamped to the bounding rectangle of the
	 *	combined geometry of the surface of the xdg_surface and the associated
	 *	subsurfaces.
	 *      
	 *
	 * @param {number} x  
	 * @param {number} y  
	 * @param {number} width  
	 * @param {number} height  
	 *
	 * @since 1
	 *
	 */
	setWindowGeometry (x, y, width, height) {
		this._marshall(this.id, 3, [int(x), int(y), int(width), int(height)])
	}

	/**
	 *
	 *	When a configure event is received, if a client commits the
	 *	surface in response to the configure event, then the client
	 *	must make an ack_configure request sometime before the commit
	 *	request, passing along the serial of the configure event.
	 *
	 *	For instance, for toplevel surfaces the compositor might use this
	 *	information to move a surface to the top left only when the client has
	 *	drawn itself for the maximized or fullscreen state.
	 *
	 *	If the client receives multiple configure events before it
	 *	can respond to one, it only has to ack the last configure event.
	 *
	 *	A client is not required to commit immediately after sending
	 *	an ack_configure request - it may even ack_configure several times
	 *	before its next surface commit.
	 *
	 *	A client may send multiple ack_configure requests before committing, but
	 *	only the last request sent before a commit indicates which configure
	 *	event the client really is responding to.
	 *      
	 *
	 * @param {number} serial the serial from the configure event 
	 *
	 * @since 1
	 *
	 */
	ackConfigure (serial) {
		this._marshall(this.id, 4, [uint(serial)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {XdgSurfaceEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.configure(u(message))
	}

}
XdgSurfaceProxy.protocolName = 'xdg_surface'

XdgSurfaceProxy.Error = {
  /**
   * 
   */
  notConstructed: 1,
  /**
   * 
   */
  alreadyConstructed: 2,
  /**
   * 
   */
  unconfiguredBuffer: 3
}

/* harmony default export */ __webpack_exports__["default"] = (XdgSurfaceProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgToplevelEvents.js":
/*!*********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgToplevelEvents.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XdgToplevelEvents; });
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */

/**
 * @interface
 */
class XdgToplevelEvents {

	/**
	 *
	 *	This configure event asks the client to resize its toplevel surface or
	 *	to change its state. The configured state should not be applied
	 *	immediately. See xdg_surface.configure for details.
	 *
	 *	The width and height arguments specify a hint to the window
	 *	about how its surface should be resized in window geometry
	 *	coordinates. See set_window_geometry.
	 *
	 *	If the width or height arguments are zero, it means the client
	 *	should decide its own window dimension. This may happen when the
	 *	compositor needs to configure the state of the surface but doesn't
	 *	have any information about any previous or expected dimension.
	 *
	 *	The states listed in the event specify how the width/height
	 *	arguments should be interpreted, and possibly how it should be
	 *	drawn.
	 *
	 *	Clients must send an ack_configure in response to this event. See
	 *	xdg_surface.configure and xdg_surface.ack_configure for details.
	 *      
	 *
	 * @param {number} width  
	 * @param {number} height  
	 * @param {ArrayBuffer} states  
	 *
	 * @since 1
	 *
	 */
	configure(width, height, states) {}

	/**
	 *
	 *	The close event is sent by the compositor when the user
	 *	wants the surface to be closed. This should be equivalent to
	 *	the user clicking the close button in client-side decorations,
	 *	if your application has any.
	 *
	 *	This is only a request that the user intends to close the
	 *	window. The client may choose to ignore this request, or show
	 *	a dialog to ask the user to save their data, etc.
	 *      
	 *
	 *
	 * @since 1
	 *
	 */
	close() {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgToplevelProxy.js":
/*!********************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgToplevelProxy.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]


/**
 *
 *      This interface defines an xdg_surface role which allows a surface to,
 *      among other things, set window-like properties such as maximize,
 *      fullscreen, and minimize, set application-specific metadata like title and
 *      id, and well as trigger user interactive operations such as interactive
 *      resize and move.
 *
 *      Unmapping an xdg_toplevel means that the surface cannot be shown
 *      by the compositor until it is explicitly mapped again.
 *      All active operations (e.g., move, resize) are canceled and all
 *      attributes (e.g. title, state, stacking, ...) are discarded for
 *      an xdg_toplevel surface when it is unmapped.
 *
 *      Attaching a null buffer to a toplevel unmaps the surface.
 *    
 */
class XdgToplevelProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	This request destroys the role surface and unmaps the surface;
	 *	see "Unmapping" behavior in interface section for details.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	Set the "parent" of this surface. This surface should be stacked
	 *	above the parent surface and all other ancestor surfaces.
	 *
	 *	Parent windows should be set on dialogs, toolboxes, or other
	 *	"auxiliary" surfaces, so that the parent is raised when the dialog
	 *	is raised.
	 *
	 *	Setting a null parent for a child window removes any parent-child
	 *	relationship for the child. Setting a null parent for a window which
	 *	currently has no parent is a no-op.
	 *
	 *	If the parent is unmapped then its children are managed as
	 *	though the parent of the now-unmapped parent has become the
	 *	parent of this surface. If no parent exists for the now-unmapped
	 *	parent then the children are managed as though they have no
	 *	parent surface.
	 *      
	 *
	 * @param {?*} parent  
	 *
	 * @since 1
	 *
	 */
	setParent (parent) {
		this._marshall(this.id, 1, [objectOptional(parent)])
	}

	/**
	 *
	 *	Set a short title for the surface.
	 *
	 *	This string may be used to identify the surface in a task bar,
	 *	window list, or other user interface elements provided by the
	 *	compositor.
	 *
	 *	The string must be encoded in UTF-8.
	 *      
	 *
	 * @param {string} title  
	 *
	 * @since 1
	 *
	 */
	setTitle (title) {
		this._marshall(this.id, 2, [string(title)])
	}

	/**
	 *
	 *	Set an application identifier for the surface.
	 *
	 *	The app ID identifies the general class of applications to which
	 *	the surface belongs. The compositor can use this to group multiple
	 *	surfaces together, or to determine how to launch a new application.
	 *
	 *	For D-Bus activatable applications, the app ID is used as the D-Bus
	 *	service name.
	 *
	 *	The compositor shell will try to group application surfaces together
	 *	by their app ID. As a best practice, it is suggested to select app
	 *	ID's that match the basename of the application's .desktop file.
	 *	For example, "org.freedesktop.FooViewer" where the .desktop file is
	 *	"org.freedesktop.FooViewer.desktop".
	 *
	 *	See the desktop-entry specification [0] for more details on
	 *	application identifiers and how they relate to well-known D-Bus
	 *	names and .desktop files.
	 *
	 *	[0] http://standards.freedesktop.org/desktop-entry-spec/
	 *      
	 *
	 * @param {string} appId  
	 *
	 * @since 1
	 *
	 */
	setAppId (appId) {
		this._marshall(this.id, 3, [string(appId)])
	}

	/**
	 *
	 *	Clients implementing client-side decorations might want to show
	 *	a context menu when right-clicking on the decorations, giving the
	 *	user a menu that they can use to maximize or minimize the window.
	 *
	 *	This request asks the compositor to pop up such a window menu at
	 *	the given position, relative to the local surface coordinates of
	 *	the parent surface. There are no guarantees as to what menu items
	 *	the window menu contains.
	 *
	 *	This request must be used in response to some sort of user action
	 *	like a button press, key press, or touch down event.
	 *      
	 *
	 * @param {*} seat the wl_seat of the user event 
	 * @param {number} serial the serial of the user event 
	 * @param {number} x the x position to pop up the window menu at 
	 * @param {number} y the y position to pop up the window menu at 
	 *
	 * @since 1
	 *
	 */
	showWindowMenu (seat, serial, x, y) {
		this._marshall(this.id, 4, [object(seat), uint(serial), int(x), int(y)])
	}

	/**
	 *
	 *	Start an interactive, user-driven move of the surface.
	 *
	 *	This request must be used in response to some sort of user action
	 *	like a button press, key press, or touch down event. The passed
	 *	serial is used to determine the type of interactive move (touch,
	 *	pointer, etc).
	 *
	 *	The server may ignore move requests depending on the state of
	 *	the surface (e.g. fullscreen or maximized), or if the passed serial
	 *	is no longer valid.
	 *
	 *	If triggered, the surface will lose the focus of the device
	 *	(wl_pointer, wl_touch, etc) used for the move. It is up to the
	 *	compositor to visually indicate that the move is taking place, such as
	 *	updating a pointer cursor, during the move. There is no guarantee
	 *	that the device focus will return when the move is completed.
	 *      
	 *
	 * @param {*} seat the wl_seat of the user event 
	 * @param {number} serial the serial of the user event 
	 *
	 * @since 1
	 *
	 */
	move (seat, serial) {
		this._marshall(this.id, 5, [object(seat), uint(serial)])
	}

	/**
	 *
	 *	Start a user-driven, interactive resize of the surface.
	 *
	 *	This request must be used in response to some sort of user action
	 *	like a button press, key press, or touch down event. The passed
	 *	serial is used to determine the type of interactive resize (touch,
	 *	pointer, etc).
	 *
	 *	The server may ignore resize requests depending on the state of
	 *	the surface (e.g. fullscreen or maximized).
	 *
	 *	If triggered, the client will receive configure events with the
	 *	"resize" state enum value and the expected sizes. See the "resize"
	 *	enum value for more details about what is required. The client
	 *	must also acknowledge configure events using "ack_configure". After
	 *	the resize is completed, the client will receive another "configure"
	 *	event without the resize state.
	 *
	 *	If triggered, the surface also will lose the focus of the device
	 *	(wl_pointer, wl_touch, etc) used for the resize. It is up to the
	 *	compositor to visually indicate that the resize is taking place,
	 *	such as updating a pointer cursor, during the resize. There is no
	 *	guarantee that the device focus will return when the resize is
	 *	completed.
	 *
	 *	The edges parameter specifies how the surface should be resized,
	 *	and is one of the values of the resize_edge enum. The compositor
	 *	may use this information to update the surface position for
	 *	example when dragging the top left corner. The compositor may also
	 *	use this information to adapt its behavior, e.g. choose an
	 *	appropriate cursor image.
	 *      
	 *
	 * @param {*} seat the wl_seat of the user event 
	 * @param {number} serial the serial of the user event 
	 * @param {number} edges which edge or corner is being dragged 
	 *
	 * @since 1
	 *
	 */
	resize (seat, serial, edges) {
		this._marshall(this.id, 6, [object(seat), uint(serial), uint(edges)])
	}

	/**
	 *
	 *	Set a maximum size for the window.
	 *
	 *	The client can specify a maximum size so that the compositor does
	 *	not try to configure the window beyond this size.
	 *
	 *	The width and height arguments are in window geometry coordinates.
	 *	See xdg_surface.set_window_geometry.
	 *
	 *	Values set in this way are double-buffered. They will get applied
	 *	on the next commit.
	 *
	 *	The compositor can use this information to allow or disallow
	 *	different states like maximize or fullscreen and draw accurate
	 *	animations.
	 *
	 *	Similarly, a tiling window manager may use this information to
	 *	place and resize client windows in a more effective way.
	 *
	 *	The client should not rely on the compositor to obey the maximum
	 *	size. The compositor may decide to ignore the values set by the
	 *	client and request a larger size.
	 *
	 *	If never set, or a value of zero in the request, means that the
	 *	client has no expected maximum size in the given dimension.
	 *	As a result, a client wishing to reset the maximum size
	 *	to an unspecified state can use zero for width and height in the
	 *	request.
	 *
	 *	Requesting a maximum size to be smaller than the minimum size of
	 *	a surface is illegal and will result in a protocol error.
	 *
	 *	The width and height must be greater than or equal to zero. Using
	 *	strictly negative values for width and height will result in a
	 *	protocol error.
	 *      
	 *
	 * @param {number} width  
	 * @param {number} height  
	 *
	 * @since 1
	 *
	 */
	setMaxSize (width, height) {
		this._marshall(this.id, 7, [int(width), int(height)])
	}

	/**
	 *
	 *	Set a minimum size for the window.
	 *
	 *	The client can specify a minimum size so that the compositor does
	 *	not try to configure the window below this size.
	 *
	 *	The width and height arguments are in window geometry coordinates.
	 *	See xdg_surface.set_window_geometry.
	 *
	 *	Values set in this way are double-buffered. They will get applied
	 *	on the next commit.
	 *
	 *	The compositor can use this information to allow or disallow
	 *	different states like maximize or fullscreen and draw accurate
	 *	animations.
	 *
	 *	Similarly, a tiling window manager may use this information to
	 *	place and resize client windows in a more effective way.
	 *
	 *	The client should not rely on the compositor to obey the minimum
	 *	size. The compositor may decide to ignore the values set by the
	 *	client and request a smaller size.
	 *
	 *	If never set, or a value of zero in the request, means that the
	 *	client has no expected minimum size in the given dimension.
	 *	As a result, a client wishing to reset the minimum size
	 *	to an unspecified state can use zero for width and height in the
	 *	request.
	 *
	 *	Requesting a minimum size to be larger than the maximum size of
	 *	a surface is illegal and will result in a protocol error.
	 *
	 *	The width and height must be greater than or equal to zero. Using
	 *	strictly negative values for width and height will result in a
	 *	protocol error.
	 *      
	 *
	 * @param {number} width  
	 * @param {number} height  
	 *
	 * @since 1
	 *
	 */
	setMinSize (width, height) {
		this._marshall(this.id, 8, [int(width), int(height)])
	}

	/**
	 *
	 *	Maximize the surface.
	 *
	 *	After requesting that the surface should be maximized, the compositor
	 *	will respond by emitting a configure event with the "maximized" state
	 *	and the required window geometry. The client should then update its
	 *	content, drawing it in a maximized state, i.e. without shadow or other
	 *	decoration outside of the window geometry. The client must also
	 *	acknowledge the configure when committing the new content (see
	 *	ack_configure).
	 *
	 *	It is up to the compositor to decide how and where to maximize the
	 *	surface, for example which output and what region of the screen should
	 *	be used.
	 *
	 *	If the surface was already maximized, the compositor will still emit
	 *	a configure event with the "maximized" state.
	 *
	 *	If the surface is in a fullscreen state, this request has no direct
	 *	effect. It will alter the state the surface is returned to when
	 *	unmaximized if not overridden by the compositor.
	 *      
	 * @since 1
	 *
	 */
	setMaximized () {
		this._marshall(this.id, 9, [])
	}

	/**
	 *
	 *	Unmaximize the surface.
	 *
	 *	After requesting that the surface should be unmaximized, the compositor
	 *	will respond by emitting a configure event without the "maximized"
	 *	state. If available, the compositor will include the window geometry
	 *	dimensions the window had prior to being maximized in the configure
	 *	event. The client must then update its content, drawing it in a
	 *	regular state, i.e. potentially with shadow, etc. The client must also
	 *	acknowledge the configure when committing the new content (see
	 *	ack_configure).
	 *
	 *	It is up to the compositor to position the surface after it was
	 *	unmaximized; usually the position the surface had before maximizing, if
	 *	applicable.
	 *
	 *	If the surface was already not maximized, the compositor will still
	 *	emit a configure event without the "maximized" state.
	 *
	 *	If the surface is in a fullscreen state, this request has no direct
	 *	effect. It will alter the state the surface is returned to when
	 *	unmaximized if not overridden by the compositor.
	 *      
	 * @since 1
	 *
	 */
	unsetMaximized () {
		this._marshall(this.id, 10, [])
	}

	/**
	 *
	 *	Make the surface fullscreen.
	 *
	 *	After requesting that the surface should be fullscreened, the
	 *	compositor will respond by emitting a configure event with the
	 *	"fullscreen" state and the fullscreen window geometry. The client must
	 *	also acknowledge the configure when committing the new content (see
	 *	ack_configure).
	 *
	 *	The output passed by the request indicates the client's preference as
	 *	to which display it should be set fullscreen on. If this value is NULL,
	 *	it's up to the compositor to choose which display will be used to map
	 *	this surface.
	 *
	 *	If the surface doesn't cover the whole output, the compositor will
	 *	position the surface in the center of the output and compensate with
	 *	with border fill covering the rest of the output. The content of the
	 *	border fill is undefined, but should be assumed to be in some way that
	 *	attempts to blend into the surrounding area (e.g. solid black).
	 *
	 *	If the fullscreened surface is not opaque, the compositor must make
	 *	sure that other screen content not part of the same surface tree (made
	 *	up of subsurfaces, popups or similarly coupled surfaces) are not
	 *	visible below the fullscreened surface.
	 *      
	 *
	 * @param {?*} output  
	 *
	 * @since 1
	 *
	 */
	setFullscreen (output) {
		this._marshall(this.id, 11, [objectOptional(output)])
	}

	/**
	 *
	 *	Make the surface no longer fullscreen.
	 *
	 *	After requesting that the surface should be unfullscreened, the
	 *	compositor will respond by emitting a configure event without the
	 *	"fullscreen" state.
	 *
	 *	Making a surface unfullscreen sets states for the surface based on the following:
	 *	* the state(s) it may have had before becoming fullscreen
	 *	* any state(s) decided by the compositor
	 *	* any state(s) requested by the client while the surface was fullscreen
	 *
	 *	The compositor may include the previous window geometry dimensions in
	 *	the configure event, if applicable.
	 *
	 *	The client must also acknowledge the configure when committing the new
	 *	content (see ack_configure).
	 *      
	 * @since 1
	 *
	 */
	unsetFullscreen () {
		this._marshall(this.id, 12, [])
	}

	/**
	 *
	 *	Request that the compositor minimize your surface. There is no
	 *	way to know if the surface is currently minimized, nor is there
	 *	any way to unset minimization on this surface.
	 *
	 *	If you are looking to throttle redrawing when minimized, please
	 *	instead use the wl_surface.frame event for this, as this will
	 *	also work with live previews on windows in Alt-Tab, Expose or
	 *	similar compositor features.
	 *      
	 * @since 1
	 *
	 */
	setMinimized () {
		this._marshall(this.id, 13, [])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {XdgToplevelEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.configure(i(message), i(message), a(message, false))
	}

	async [1] (message) {
		await this.listener.close()
	}

}
XdgToplevelProxy.protocolName = 'xdg_toplevel'

XdgToplevelProxy.ResizeEdge = {
  /**
   * 
   */
  none: 0,
  /**
   * 
   */
  top: 1,
  /**
   * 
   */
  bottom: 2,
  /**
   * 
   */
  left: 4,
  /**
   * 
   */
  topLeft: 5,
  /**
   * 
   */
  bottomLeft: 6,
  /**
   * 
   */
  right: 8,
  /**
   * 
   */
  topRight: 9,
  /**
   * 
   */
  bottomRight: 10
}

XdgToplevelProxy.State = {
  /**
   * the surface is maximized
   */
  maximized: 1,
  /**
   * the surface is fullscreen
   */
  fullscreen: 2,
  /**
   * the surface is being resized
   */
  resizing: 3,
  /**
   * the surface is now activated
   */
  activated: 4
}

/* harmony default export */ __webpack_exports__["default"] = (XdgToplevelProxy);


/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgWmBaseEvents.js":
/*!*******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgWmBaseEvents.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XdgWmBaseEvents; });
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */

/**
 * @interface
 */
class XdgWmBaseEvents {

	/**
	 *
	 *	The ping event asks the client if it's still alive. Pass the
	 *	serial specified in the event back to the compositor by sending
	 *	a "pong" request back with the specified serial. See xdg_wm_base.ping.
	 *
	 *	Compositors can use this to determine if the client is still
	 *	alive. It's unspecified what will happen if the client doesn't
	 *	respond to the ping request, or in what timeframe. Clients should
	 *	try to respond in a reasonable amount of time.
	 *
	 *	A compositor is free to ping in any way it wants, but a client must
	 *	always respond to any xdg_wm_base object it created.
	 *      
	 *
	 * @param {number} serial pass this to the pong request 
	 *
	 * @since 1
	 *
	 */
	ping(serial) {}
}



/***/ }),

/***/ "../../../westfield/client/runtime/src/protocol/XdgWmBaseProxy.js":
/*!******************************************************************************!*\
  !*** /home/erik/git/westfield/client/runtime/src/protocol/XdgWmBaseProxy.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-common */ "../../../westfield/common/index.js");
/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "../../../westfield/client/runtime/src/protocol/Proxy.js");
/* harmony import */ var _XdgPositionerProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XdgPositionerProxy */ "../../../westfield/client/runtime/src/protocol/XdgPositionerProxy.js");
/* harmony import */ var _XdgSurfaceProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XdgSurfaceProxy */ "../../../westfield/client/runtime/src/protocol/XdgSurfaceProxy.js");
/*
 *
 *    Copyright © 2008-2013 Kristian Høgsberg
 *    Copyright © 2013      Rafael Antognolli
 *    Copyright © 2013      Jasper St. Pierre
 *    Copyright © 2010-2013 Intel Corporation
 *    Copyright © 2015-2017 Samsung Electronics Co., Ltd
 *    Copyright © 2015-2017 Red Hat Inc.
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a
 *    copy of this software and associated documentation files (the "Software"),
 *    to deal in the Software without restriction, including without limitation
 *    the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *    and/or sell copies of the Software, and to permit persons to whom the
 *    Software is furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice (including the next
 *    paragraph) shall be included in all copies or substantial portions of the
 *    Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 *  
 */


const { uint, uintOptional, int, intOptional, fixed, 
	fixedOptional, object, objectOptional, newObject, string, 
	stringOptional, array, arrayOptional, 
	fileDescriptorOptional, fileDescriptor, 
h, u, i, f, o, n, s, a } = westfield_runtime_common__WEBPACK_IMPORTED_MODULE_0__["Connection"]




/**
 *
 *      The xdg_wm_base interface is exposed as a global object enabling clients
 *      to turn their wl_surfaces into windows in a desktop environment. It
 *      defines the basic functionality needed for clients and the compositor to
 *      create windows that can be dragged, resized, maximized, etc, as well as
 *      creating transient windows such as popup menus.
 *    
 */
class XdgWmBaseProxy extends _Proxy__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 *
	 *	Destroy this xdg_wm_base object.
	 *
	 *	Destroying a bound xdg_wm_base object while there are surfaces
	 *	still alive created by this xdg_wm_base object instance is illegal
	 *	and will result in a protocol error.
	 *      
	 * @since 1
	 *
	 */
	destroy () {
		super.destroy()
		this._marshall(this.id, 0, [])
	}

	/**
	 *
	 *	Create a positioner object. A positioner object is used to position
	 *	surfaces relative to some parent surface. See the interface description
	 *	and xdg_surface.get_popup for details.
	 *      
	 *
	 * @return {XdgPositionerProxy}  
	 *
	 * @since 1
	 *
	 */
	createPositioner () {
		return this._marshallConstructor(this.id, 1, _XdgPositionerProxy__WEBPACK_IMPORTED_MODULE_2__["default"], [newObject()])
	}

	/**
	 *
	 *	This creates an xdg_surface for the given surface. While xdg_surface
	 *	itself is not a role, the corresponding surface may only be assigned
	 *	a role extending xdg_surface, such as xdg_toplevel or xdg_popup.
	 *
	 *	This creates an xdg_surface for the given surface. An xdg_surface is
	 *	used as basis to define a role to a given surface, such as xdg_toplevel
	 *	or xdg_popup. It also manages functionality shared between xdg_surface
	 *	based surface roles.
	 *
	 *	See the documentation of xdg_surface for more details about what an
	 *	xdg_surface is and how it is used.
	 *      
	 *
	 * @param {*} surface  
	 * @return {XdgSurfaceProxy}  
	 *
	 * @since 1
	 *
	 */
	getXdgSurface (surface) {
		return this._marshallConstructor(this.id, 2, _XdgSurfaceProxy__WEBPACK_IMPORTED_MODULE_3__["default"], [newObject(), object(surface)])
	}

	/**
	 *
	 *	A client must respond to a ping event with a pong request or
	 *	the client may be deemed unresponsive. See xdg_wm_base.ping.
	 *      
	 *
	 * @param {number} serial serial of the ping event 
	 *
	 * @since 1
	 *
	 */
	pong (serial) {
		this._marshall(this.id, 3, [uint(serial)])
	}

	/**
	 * Do not construct proxies directly. Instead use one of the factory methods from other proxies.
	 *@param {Display}display
	 *@param {Connection}connection
	 *@param {number}id
	 */
	constructor (display, connection, id) {
		super(display, connection, id)
		/**
		 * @type {XdgWmBaseEvents|null}
		 */
		this.listener = null
	}

	async [0] (message) {
		await this.listener.ping(u(message))
	}

}
XdgWmBaseProxy.protocolName = 'xdg_wm_base'

XdgWmBaseProxy.Error = {
  /**
   * given wl_surface has another role
   */
  role: 0,
  /**
   * xdg_wm_base was destroyed before children
   */
  defunctSurfaces: 1,
  /**
   * the client tried to map or destroy a non-topmost popup
   */
  notTheTopmostPopup: 2,
  /**
   * the client specified an invalid popup parent surface
   */
  invalidPopupParent: 3,
  /**
   * the client provided an invalid surface state
   */
  invalidSurfaceState: 4,
  /**
   * the client provided an invalid positioner
   */
  invalidPositioner: 5
}

/* harmony default export */ __webpack_exports__["default"] = (XdgWmBaseProxy);


/***/ }),

/***/ "../../../westfield/common/index.js":
/*!************************************************!*\
  !*** /home/erik/git/westfield/common/index.js ***!
  \************************************************/
/*! exports provided: Connection, Fixed, WebFD, WlObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Connection */ "../../../westfield/common/src/Connection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return _src_Connection__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Fixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Fixed */ "../../../westfield/common/src/Fixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fixed", function() { return _src_Fixed__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_WebFD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/WebFD */ "../../../westfield/common/src/WebFD.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebFD", function() { return _src_WebFD__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_WlObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/WlObject */ "../../../westfield/common/src/WlObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WlObject", function() { return _src_WlObject__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "../../../westfield/common/src/Connection.js":
/*!*********************************************************!*\
  !*** /home/erik/git/westfield/common/src/Connection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fixed */ "../../../westfield/common/src/Fixed.js");
/*
MIT License

Copyright (c) 2017 Erik De Rijcke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/





class Connection {
  /**
   * @param {number} arg
   * @returns {{value: number, type: 'u', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   */
  static uint (arg) {
    return {
      value: arg,
      type: 'u',
      size: 4,
      optional: false,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {number} arg
   * @returns {{value: number, type: 'u', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static uintOptional (arg) {
    return {
      value: arg,
      type: 'u',
      size: 4,
      optional: true,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = (arg === null ? 0 : this.value)
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {WebFD} arg
   * @returns {{value: number, type: 'h', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static fileDescriptor (arg) {
    return {
      value: arg,
      type: 'h',
      size: 0, // file descriptors are not added to the message size because they are somewhat considered meta data.
      optional: false,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        wireMsg.fds.push(this.value)
      }
    }
  }

  /**
   *
   * @param {number} arg
   * @returns {{value: number, type: 'h', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static fileDescriptorOptional (arg) {
    return {
      value: arg,
      type: 'h',
      size: 0, // file descriptors are not added to the message size because they are not part of the unix socket message buffer.
      optional: true,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        wireMsg.fds.push(this.value)
      }
    }
  }

  /**
   *
   * @param {number} arg
   * @returns {{value: number, type: 'i', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static int (arg) {
    return {
      value: arg,
      type: 'i',
      size: 4,
      optional: false,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Int32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {number} arg
   * @returns {{value: number, type: 'i', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static intOptional (arg) {
    return {
      value: arg,
      type: 'i',
      size: 4,
      optional: true,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Int32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = (arg === null ? 0 : this.value)
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {Fixed} arg
   * @returns {{value: Fixed, type: 'f', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   */
  static fixed (arg) {
    return {
      value: arg,
      type: 'f',
      size: 4,
      optional: false,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Int32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value._raw
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {Fixed} arg
   * @returns {{value: Fixed, type: 'f', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   */
  static fixedOptional (arg) {
    return {
      value: arg,
      type: 'f',
      size: 4,
      optional: true,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Int32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = (arg === null ? 0 : this.value._raw)
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {Resource} arg
   * @returns {{value: Resource, type: 'o', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static object (arg) {
    return {
      value: arg,
      type: 'o',
      size: 4,
      optional: false,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value.id
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {Resource} arg
   * @returns {{value: Resource, type: 'o', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static objectOptional (arg) {
    return {
      value: arg,
      type: 'o',
      size: 4,
      optional: true,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = (arg === null ? 0 : this.value.id)
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   * @returns {{value: number, type: 'n', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   */
  static newObject () {
    return {
      value: 0, // id filled in by _marshallConstructor
      type: 'n',
      size: 4,
      optional: false,
      /**
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {string} arg
   * @returns {{value: string, type: 's', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static string (arg) {
    return {
      value: `${arg}\0`,
      type: 's',
      size: 4 + (function () {
        // fancy logic to calculate size with padding to a multiple of 4 bytes (int).
        // length+1 for null terminator
        return (arg.length + 1 + 3) & ~3
      })(),
      optional: false,
      /**
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value.length

        const strLen = this.value.length
        const buf8 = new Uint8Array(wireMsg.buffer, wireMsg.bufferOffset + 4, strLen)
        for (let i = 0; i < strLen; i++) {
          buf8[i] = this.value[i].codePointAt(0)
        }
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {String} arg
   * @returns {{value: *, type: 's', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static stringOptional (arg) {
    return {
      value: `${arg}\0`,
      type: 's',
      size: 4 + (function () {
        if (arg === null) {
          return 0
        } else {
          // fancy logic to calculate size with padding to a multiple of 4 bytes (int).
          // length+1 for null terminator
          return (arg.length + 1 + 3) & ~3
        }
      })(),
      optional: true,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        if (this.value === null) {
          new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = 0
        } else {
          new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value.length

          const strLen = this.value.length
          const buf8 = new Uint8Array(wireMsg.buffer, wireMsg.bufferOffset + 4, strLen)
          for (let i = 0; i < strLen; i++) {
            buf8[i] = this.value[i].codePointAt(0)
          }
        }
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {TypedArray} arg
   * @returns {{value: *, type: 'a', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static array (arg) {
    return {
      value: arg,
      type: 'a',
      size: 4 + (function () {
        // fancy logic to calculate size with padding to a multiple of 4 bytes (int).
        return (arg.byteLength + 3) & ~3
      })(),
      optional: false,
      /**
       *
       * @param {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}} wireMsg
       * @private
       */
      _marshallArg: function (wireMsg) {
        new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value.byteLength

        const byteLength = this.value.byteLength
        new Uint8Array(wireMsg.buffer, wireMsg.bufferOffset + 4, byteLength).set(new Uint8Array(this.value.buffer, 0, byteLength))

        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   *
   * @param {TypedArray} arg
   * @returns {{value: *, type: 'a', size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}}
   *
   */
  static arrayOptional (arg) {
    return {
      value: arg,
      type: 'a',
      size: 4 + (function () {
        if (arg === null) {
          return 0
        } else {
          // fancy logic to calculate size with padding to a multiple of 4 bytes (int).
          return (arg.byteLength + 3) & ~3
        }
      })(),
      optional: true,
      _marshallArg: function (wireMsg) {
        if (this.value === null) {
          new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = 0
        } else {
          new Uint32Array(wireMsg.buffer, wireMsg.bufferOffset, 1)[0] = this.value.byteLength

          const byteLength = this.value.byteLength
          new Uint8Array(wireMsg.buffer, wireMsg.bufferOffset + 4, byteLength).set(new Uint8Array(this.value.buffer, 0, byteLength))
        }
        wireMsg.bufferOffset += this.size
      }
    }
  }

  /**
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @param {number}consumption
   * @private
   */
  static _checkMessageSize (message, consumption) {
    if (message.consumed + consumption > message.size) {
      throw new Error(`Request too short.`)
    } else {
      message.consumed += consumption
    }
  }

  /**
   *
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @returns {number}
   */
  static u (message) { // unsigned integer {number}
    Connection._checkMessageSize(message, 4)
    return message.buffer[message.bufferOffset++]
  }

  /**
   *
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @returns {number}
   */
  static i (message) {
    Connection._checkMessageSize(message, 4)
    const arg = new Int32Array(message.buffer.buffer, message.buffer.byteOffset + (message.bufferOffset * Uint32Array.BYTES_PER_ELEMENT), 1)[0]
    message.bufferOffset += 1
    return arg
  }

  /**
   *
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @returns {Fixed}
   */
  static f (message) {
    Connection._checkMessageSize(message, 4)
    const arg = new Int32Array(message.buffer.buffer, message.buffer.byteOffset + (message.bufferOffset * Uint32Array.BYTES_PER_ELEMENT), 1)[0]
    message.bufferOffset += 1
    return new _Fixed__WEBPACK_IMPORTED_MODULE_0__["default"](arg >> 0)
  }

  /**
   *
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @param {Boolean} optional
   * @param {Connection}connection
   * @returns {WlObject}
   */
  static o (message, optional, connection) {
    Connection._checkMessageSize(message, 4)
    const arg = message.buffer[message.bufferOffset++]
    if (optional && arg === 0) {
      return null
    } else {
      const wlObject = connection.wlObjects[arg]
      if (wlObject) {
        return wlObject
      } else {
        throw new Error(`Unknown object id ${arg}`)
      }
    }
  }

  /**
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @returns {number}
   */
  static n (message) {
    Connection._checkMessageSize(message, 4)
    return message.buffer[message.bufferOffset++]
  }

  /**
   *
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @param {Boolean} optional
   * @returns {String}
   */
  static s (message, optional) { // {String}
    Connection._checkMessageSize(message, 4)
    const stringSize = message.buffer[message.bufferOffset++]
    if (optional && stringSize === 0) {
      return null
    } else {
      const alignedSize = ((stringSize + 3) & ~3)
      Connection._checkMessageSize(message, alignedSize)
      // size -1 to eliminate null byte
      const byteArray = new Uint8Array(message.buffer.buffer, message.buffer.byteOffset + (message.bufferOffset * Uint32Array.BYTES_PER_ELEMENT), stringSize - 1)
      message.bufferOffset += (alignedSize / 4)
      return String.fromCharCode(...byteArray)
    }
  }

  /**
   *
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @param {Boolean} optional
   * @returns {ArrayBuffer}
   */
  static a (message, optional) {
    Connection._checkMessageSize(message, 4)
    const arraySize = message.buffer[message.bufferOffset++]
    if (optional && arraySize === 0) {
      return null
    } else {
      const alignedSize = ((arraySize + 3) & ~3)
      Connection._checkMessageSize(message, alignedSize)
      const arg = message.buffer.buffer.slice(message.buffer.byteOffset + (message.bufferOffset * Uint32Array.BYTES_PER_ELEMENT), message.buffer.byteOffset + (message.bufferOffset * Uint32Array.BYTES_PER_ELEMENT) + arraySize)
      message.bufferOffset += alignedSize
      return arg
    }
  }

  /**
   *
   * @param {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} message
   * @returns {WebFD}
   */
  static h (message) { // file descriptor {number}
    if (message.fds.length > 0) {
      return message.fds.shift()
    } else {
      throw new Error('Not enough file descriptors in message object.')
    }
  }

  constructor () {
    /**
     * @type {Object.<number,WlObject>}
     */
    this.wlObjects = {}
    /**
     * @type {boolean}
     * @private
     */
    this.closed = false
    /**
     * @type {Array<{buffer: ArrayBuffer, fds: Array<WebFD>}>}
     * @private
     */
    this._outMessages = []
    /**
     * @type {Array<{buffer: Uint32Array, fds: Array<WebFD>}>}
     * @private
     */
    this._inMessages = []
  }

  /**
   *
   * @param {number} id
   * @param {number} opcode
   * @param {number} size
   * @param {Array<{value: *, type: string, size: number, optional: boolean, _marshallArg: function({buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}):void}>} argsArray
   */
  marshallMsg (id, opcode, size, argsArray) {
    /**
     * @type {{buffer: ArrayBuffer, fds: Array<WebFD>, bufferOffset: number}}
     */
    const wireMsg = {
      buffer: new ArrayBuffer(size),
      fds: [],
      bufferOffset: 0
    }

    // write actual wire message
    const bufu32 = new Uint32Array(wireMsg.buffer)
    const bufu16 = new Uint16Array(wireMsg.buffer)
    bufu32[0] = id
    bufu16[2] = opcode
    bufu16[3] = size
    wireMsg.bufferOffset = 8

    // write actual argument value to buffer
    argsArray.forEach((arg) => arg._marshallArg(wireMsg))
    this.onSend(wireMsg)
  }

  /**
   * Handle received wire messages.
   * @param {{buffer: Uint32Array, fds: Array<WebFD>}} incomingWireMessages
   * @return {Promise<void>}
   * @throws Error If an illegal client request is received ie. bad length or missing file descriptor.
   */
  async message (incomingWireMessages) {
    if (this.closed) { return }

    // more than one message in queue means the message loop is in await, don't concurrently process the new
    // message, instead return early and let the resume-from-await pick up the newly queued message.
    if (this._inMessages.push(incomingWireMessages) > 1) { return }

    while (this._inMessages.length) {
      const wireMessages = /** @type {{buffer: Uint32Array, fds: Array<WebFD>, bufferOffset: number, consumed: number, size: number}} */this._inMessages[0]
      wireMessages.bufferOffset = 0
      wireMessages.consumed = 0
      wireMessages.size = 0
      while (wireMessages.bufferOffset < wireMessages.buffer.length) {
        const id = wireMessages.buffer[wireMessages.bufferOffset]
        const sizeOpcode = wireMessages.buffer[wireMessages.bufferOffset + 1]
        wireMessages.size = sizeOpcode >>> 16
        const opcode = sizeOpcode & 0x0000FFFF

        if (wireMessages.size > wireMessages.buffer.byteLength) {
          throw new Error('Request buffer too small')
        }

        const wlObject = this.wlObjects[id]
        if (wlObject) {
          wireMessages.bufferOffset += 2
          wireMessages.consumed = 8
          try {
            await wlObject[opcode](wireMessages)
          } catch (e) {
            console.error(`
wlObject: ${wlObject.constructor.name}[${opcode}](..)
name: ${e.name} message: ${e.message} text: ${e.text}
error object stack: 
${e.stack}
`)
            this.close()
            throw e
          }
          if (this.closed) { return }
        } else {
          throw new Error(`invalid object ${id}`)
        }
      }
      this._inMessages.shift()
    }

    this.flush()
  }

  /**
   * This doesn't actually send the message, but queues it so it can be send on flush.
   * @param {{buffer: ArrayBuffer, fds: Array<WebFD>}}wireMsg a single wire message event.
   */
  onSend (wireMsg) {
    if (this.closed) { return }

    this._outMessages.push(wireMsg)
  }

  /**
   * Empty the queue of wire messages and send them to the other end.
   */
  flush () {
    if (this.closed) { return }
    if (this._outMessages.length === 0) { return }

    this.onFlush(this._outMessages)
    this._outMessages = []
  }

  /**
   * Callback when this connection wishes to send data to the other end. This callback can be used to send the given
   * array buffers using any transport mechanism.
   * @param {Array<{buffer: ArrayBuffer, fds: Array<WebFD>}>}wireMessages
   */
  onFlush (wireMessages) {}

  close () {
    if (this.closed) { return }

    // destroy resources in descending order
    Object.values(this.wlObjects).sort((a, b) => a.id - b.id).forEach((wlObject) => wlObject.destroy())

    this._outMessages = null
    this._inMessages = null
    this.closed = true
  }

  /**
   *
   * @param {WlObject} wlObject
   */
  registerWlObject (wlObject) {
    if (this.closed) { return }
    if (wlObject.id in this.wlObjects) { throw new Error(`Illegal object id: ${wlObject.id}. Already registered.`) }
    this.wlObjects[wlObject.id] = wlObject
  }

  /**
   *
   * @param {WlObject} wlObject
   */
  unregisterWlObject (wlObject) {
    if (this.closed) { return }
    delete this.wlObjects[wlObject.id]
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Connection);

/***/ }),

/***/ "../../../westfield/common/src/Fixed.js":
/*!****************************************************!*\
  !*** /home/erik/git/westfield/common/src/Fixed.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
MIT License

Copyright (c) 2017 Erik De Rijcke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



class Fixed {
  /**
   * @param {number}number
   * @return {Fixed}
   */
  static parse (number) {
    return new Fixed((number * 256.0) >> 0)
  }

  /**
   * Represent fixed as a signed 24-bit integer.
   *
   * @returns {number}
   */
  asInt () {
    return ((this._raw / 256.0) >> 0)
  }

  /**
   * Represent fixed as a signed 24-bit number with an 8-bit fractional part.
   *
   * @returns {number}
   */
  asDouble () {
    return this._raw / 256.0
  }

  /**
   * use parseFixed instead
   * @param {number}raw
   */
  constructor (raw) {
    this._raw = raw
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Fixed);

/***/ }),

/***/ "../../../westfield/common/src/WebFD.js":
/*!****************************************************!*\
  !*** /home/erik/git/westfield/common/src/WebFD.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
MIT License

Copyright (c) 2017 Erik De Rijcke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



class WebFD {
  /**
   * @param {number}fd
   * @param {'ImageBitmap'|'ArrayBuffer'|'MessagePort'}fdType
   * @param {string}fdDomainUUID
   * @param {function(WebFD): Promise<Transferable>}onGetTransferable
   * @param {function(WebFD): Promise<void>} onClose
   */
  constructor (fd, fdType, fdDomainUUID, onGetTransferable, onClose) {
    /**
     * @type {number}
     */
    this.fd = fd
    /**
     * @type {string}
     */
    this.fdType = fdType
    /**
     * @type {string}
     */
    this.fdDomainUUID = fdDomainUUID
    /**
     * @type {function(WebFD): Promise<Transferable>}
     * @private
     */
    this._onGetTransferable = onGetTransferable
    /**
     * @type {function(WebFD): Promise<void>}
     * @private
     */
    this._onClose = onClose
  }

  /**
   * @return {Promise<Transferable>}
   */
  async getTransferable () {
    return await this._onGetTransferable(this)
  }

  /**
   * @return {Promise<void>}
   */
  async close () {
    await this._onClose(this)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (WebFD);

/***/ }),

/***/ "../../../westfield/common/src/WlObject.js":
/*!*******************************************************!*\
  !*** /home/erik/git/westfield/common/src/WlObject.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
MIT License

Copyright (c) 2017 Erik De Rijcke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



class WlObject {
  constructor (id) {
    this.id = id
    /**
     * @type {Promise<void>}
     * @private
     */
    this._destroyPromise = new Promise(resolve => this._destroyResolver = resolve)
    /**
     * @type {Array<function(Resource):void>}
     * @private
     */
    this._destroyListeners = []
    this._destroyPromise.then(() => this._destroyListeners.forEach(destroyListener => destroyListener(this)))
  }

  destroy () {
    this._destroyResolver()
  }

  /**
   * @param {function(Resource):void}destroyListener
   */
  addDestroyListener (destroyListener) {
    this._destroyListeners.push(destroyListener)
  }

  /**
   * @param {function(Resource):void}destroyListener
   */
  removeDestroyListener (destroyListener) {
    this._destroyListeners = this._destroyListeners.filter((item) => { return item !== destroyListener })
  }

  /**
   * @return {Promise<void>}
   */
  onDestroy () {
    return this._destroyPromise
  }
}

/* harmony default export */ __webpack_exports__["default"] = (WlObject);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! westfield-runtime-client */ "../../../westfield/client/runtime/index.js");


class ShmBufferPool {
  /**
   * @param {GrWebShmProxy}webShm
   * @param {number}poolSize
   * @param {number}width
   * @param {number}height
   * @return {ShmBufferPool}
   */
  static create (webShm, poolSize, width, height) {
    const available = new Array(poolSize)
    const shmBufferPool = new ShmBufferPool(available)
    for (let i = 0; i < poolSize; i++) {
      available[i] = ShmBuffer.create(webShm, width, height, shmBufferPool)
    }
    return shmBufferPool
  }

  constructor (available) {
    /**
     * @type {Array<ShmBuffer>}
     * @protected
     */
    this._available = available
    /**
     * @type {Array<ShmBuffer>}
     * @protected
     */
    this._busy = []
  }

  /**
   * @param {ShmBuffer}shmBuffer
   */
  give (shmBuffer) {
    const idx = this._busy.indexOf(shmBuffer)
    if (idx > -1) {
      this._busy.splice(idx, 1)
    }
    this._available.push(shmBuffer)
  }

  /**
   * @return {ShmBuffer|null}
   */
  take () {
    const shmBuffer = this._available.shift()
    if (shmBuffer != null) {
      this._busy.push(shmBuffer)
      return shmBuffer
    }
    return null
  }
}

/**
 * @implements GrWebShmBufferEvents
 * @implements WlBufferEvents
 */
class ShmBuffer {
  /**
   * @param {GrWebShmProxy}webShm
   * @param {number}width
   * @param {number}height
   * @param {ShmBufferPool}webArrayBufferPool
   * @return {ShmBuffer}
   */
  static create (webShm, width, height, webArrayBufferPool) {
    const arrayBuffer = new ArrayBuffer(height * width * Uint32Array.BYTES_PER_ELEMENT)
    const pixelContent = westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["webFS"].fromArrayBuffer(arrayBuffer)

    const proxy = webShm.createWebArrayBuffer()
    const bufferProxy = webShm.createBuffer(proxy, width, height)

    const shmBuffer = new ShmBuffer(proxy, bufferProxy, pixelContent, arrayBuffer, width, height, webArrayBufferPool)

    proxy.listener = shmBuffer
    bufferProxy.listener = shmBuffer

    return shmBuffer
  }

  /**
   * @param {GrWebShmBufferProxy}proxy
   * @param {WlBufferProxy}bufferProxy
   * @param {WebFD}pixelContent
   * @param {ArrayBuffer}arrayBuffer
   * @param {number}width
   * @param {number}height
   * @param {ShmBufferPool}shmBufferPool
   */
  constructor (proxy, bufferProxy, pixelContent, arrayBuffer, width, height, shmBufferPool) {
    /**
     * @type {GrWebShmBufferProxy}
     */
    this.proxy = proxy
    /**
     * @type {WlBufferProxy}
     */
    this.bufferProxy = bufferProxy
    /**
     * @type {WebFD}
     * @private
     */
    this._pixelContent = pixelContent
    /**
     * @type {ArrayBuffer}
     */
    this.arrayBuffer = arrayBuffer
    /**
     * @type {number}
     */
    this.width = width
    /**
     * @type {number}
     */
    this.height = height
    /**
     * @type {ShmBufferPool}
     * @private
     */
    this._shmBufferPool = shmBufferPool
  }

  attach () {
    this.proxy.attach(this._pixelContent)
  }

  /**
   *
   *                Detaches a previously attached HTML5 array buffer from the compositor and returns it to the client so
   *                it can be reused again for writing. After detaching, the array buffer ownership is passed from
   *                the compositor main thread back to the client.
   *
   *
   * @param {WebFD} contents An HTML5 array buffer, detached from the compositor
   *
   * @since 1
   *
   */
  async detach (contents) {
    this._pixelContent = contents
    this.arrayBuffer = /** @type {ArrayBuffer} */ await contents.getTransferable()
  }

  /**
   *
   *  Sent when this wl_buffer is no longer used by the compositor.
   *  The client is now free to reuse or destroy this buffer and its
   *  backing storage.
   *
   *  If a client receives a release event before the frame callback
   *  requested in the same wl_surface.commit that attaches this
   *  wl_buffer to a surface, then the client is immediately free to
   *  reuse the buffer and its backing storage, and does not need a
   *  second buffer for the next surface content update. Typically
   *  this is possible, when the compositor maintains a copy of the
   *  wl_surface contents, e.g. as a GL texture. This is an important
   *  optimization for GL(ES) compositors with wl_shm clients.
   *
   *
   *
   * @since 1
   *
   */
  release () {
    this._shmBufferPool.give(this)
  }
}

/**
 * @implements WlRegistryEvents
 * @implements WlShellSurfaceEvents
 */
class Window {
  /**
   * @param {number}width
   * @param {number}height
   * @return {Window}
   */
  static create (width, height) {
    const registry = westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["display"].getRegistry()
    const window = new Window(registry, width, height)
    registry.listener = window
    return window
  }

  /**
   * @param {WlRegistryProxy}registry
   * @param {number}width
   * @param {number}height
   */
  constructor (registry, width, height) {
    /**
     * @type {WlRegistryProxy}
     * @protected
     */
    this._registry = registry
    /**
     * @type {number}
     */
    this.width = width
    /**
     * @type {number}
     */
    this.height = height
    /**
     * @type {ShmBufferPool|null}
     * @private
     */
    this._shmBufferPool = null
    /**
     * @type {WlCompositorProxy|null}
     * @private
     */
    this._compositor = null
    /**
     * @type {GrWebShmProxy|null}
     * @private
     */
    this._webShm = null
    /**
     * @type {WlShellProxy|null}
     * @private
     */
    this._shell = null
    /**
     * @type {WlSurfaceProxy|null}
     * @private
     */
    this._surface = null
  }

  /**
   *
   *  Notify the client of global objects.
   *
   *  The event notifies the client that a global object with
   *  the given name is now available, and it implements the
   *  given version of the given interface.
   *
   *
   * @param {number} name numeric name of the global object
   * @param {string} interface_ interface implemented by the object
   * @param {number} version interface version
   *
   * @since 1
   *
   */
  global (name, interface_, version) {
    if (interface_ === westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["WlCompositorProxy"].protocolName) {
      this._compositor = this._registry.bind(name, interface_, westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["WlCompositorProxy"], version)
      this._surface = this._compositor.createSurface()
      this._onFrame = Object(westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["frame"])(this._surface)
    }

    if (interface_ === westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["GrWebShmProxy"].protocolName) {
      this._webShm = this._registry.bind(name, interface_, westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["GrWebShmProxy"], version)
      this._webShm.listener = this

      this._shmBufferPool = ShmBufferPool.create(this._webShm, 2, this.width, this.height)
    }

    if (interface_ === westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["WlShellProxy"].protocolName) {
      this._shell = this._registry.bind(name, interface_, westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["WlShellProxy"], version)
    }
  }

  init () {
    this._shellSurface = this._shell.getShellSurface(this._surface)
    this._shellSurface.listener = this
    this._shellSurface.setToplevel()
    this._shellSurface.setTitle('Simple Web Shm')
  }

  /**
   * @param {ShmBuffer}shmBuffer
   * @param {number}timestamp
   * @private
   */
  _paintPixels (shmBuffer, timestamp) {
    const halfh = shmBuffer.width >> 1
    const halfw = shmBuffer.height >> 1
    let ir
    let or
    const image = new Uint32Array(shmBuffer.arrayBuffer)

    /* squared radii thresholds */
    or = (halfw < halfh ? halfw : halfh) - 8
    ir = or - 32
    or = or * or
    ir = ir * ir

    let offset = 0
    for (let y = 0; y < shmBuffer.height; y++) {
      const y2 = (y - halfh) * (y - halfh)

      for (let x = 0; x < shmBuffer.width; x++) {
        let v
        let w = 0xff000000

        /* squared distance from center */
        const r2 = (x - halfw) * (x - halfw) + y2

        if (r2 < ir) {
          v = ((r2 >> 5) + (timestamp >> 6)) * 0x0080401
        } else if (r2 < or) {
          v = (y + (timestamp >> 5)) * 0x0080401
        } else {
          v = (x + (timestamp >> 4)) * 0x0080401
        }
        // ARGB => ABGR (RGBA LE)
        w |= ((v & 0x00ff0000) >> 16) // R
        w |= ((v & 0x0000ff00)) // G
        w |= ((v & 0x000000ff) << 16) // B

        image[offset++] = w
      }
    }
  }

  /**
   * @param {number}timestamp
   */
  draw (timestamp) {
    const shmBuffer = this._shmBufferPool.take()
    if (shmBuffer) {
      this._paintPixels(shmBuffer, timestamp)
      shmBuffer.attach()

      this._surface.attach(shmBuffer.bufferProxy, 0, 0)
      this._surface.damage(0, 0, shmBuffer.width, shmBuffer.height)

      // Wait for the compositor to signal that we can draw the next frame.
      // Note that using 'await' here would result in a deadlock as the event loop would be blocked, and the event
      // that resolves the await state would never be picked up by the blocked event loop.
      this._onFrame().then(timestamp => this.draw(timestamp))

      // serial is only required if our buffer contents would take a long time to send to the compositor ie. in a network remote case
      this._surface.commit(0)
    } else {
      console.error('All buffers occupied by compositor!')
      westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["display"].close()
    }
  }

  /**
   * @param {number}name
   */
  globalRemove (name) {
    // FIXME keep track of the name number of the globals we bind so we can do cleanup if a global should go away.
  }

  /**
   *
   *  The configure event asks the client to resize its surface.
   *
   *  The size is a hint, in the sense that the client is free to
   *  ignore it if it doesn't resize, pick a smaller size (to
   *  satisfy aspect ratio or resize in steps of NxM pixels).
   *
   *  The edges parameter provides a hint about how the surface
   *  was resized. The client may use this information to decide
   *  how to adjust its content to the new size (e.g. a scrolling
   *  area might adjust its content position to leave the viewable
   *  content unmoved).
   *
   *  The client is free to dismiss all but the last configure
   *  event it received.
   *
   *  The width and height arguments specify the size of the window
   *  in surface-local coordinates.
   *
   *
   * @param {number} edges how the surface was resized
   * @param {number} width new width of the surface
   * @param {number} height new height of the surface
   *
   * @since 1
   *
   */
  configure (edges, width, height) { /* NOOP */ }

  /**
   *
   *  Ping a client to check if it is receiving events and sending
   *  requests. A client is expected to reply with a pong request.
   *
   *
   * @param {number} serial serial number of the ping
   *
   * @since 1
   *
   */
  ping (serial) {
    this._shellSurface.pong(serial)
  }

  /**
   *
   *  The popup_done event is sent out when a popup grab is broken,
   *  that is, when the user clicks a surface that doesn't belong
   *  to the client owning the popup surface.
   *
   *
   *
   * @since 1
   *
   */
  popupDone () { /* NOOP */ }
}

async function main () {
  // create a new window with some buffers
  const window = Window.create(250, 250)

  // create a sync promise
  const syncPromise = westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["display"].sync()

  // flush out window creation & sync requests to the compositor
  westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["display"].flush()

  // wait for compositor to have processed all our outgoing requests
  await syncPromise

  // Now begin drawing after the compositor is done processing all our requests
  window.init()
  window.draw(0)

  // wait for the display connection to close
  try {
    await westfield_runtime_client__WEBPACK_IMPORTED_MODULE_0__["display"].onClose()
    console.log('Application exit.')
  } catch (e) {
    console.error('Application terminated with error.')
    console.error(e.stackTrace)
  }
}

main()


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/erik/git/greenfield/demo-web-clients/simple-web-shm/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9EaXNwbGF5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL1dlYkZTLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL0dyV2ViR2xCdWZmZXJQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9HcldlYkdsUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvR3JXZWJTaG1CdWZmZXJFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvR3JXZWJTaG1CdWZmZXJQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9HcldlYlNobVByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1Byb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsQnVmZmVyRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsQnVmZmVyUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xDYWxsYmFja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbENhbGxiYWNrUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xDb21wb3NpdG9yUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xEYXRhRGV2aWNlRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsRGF0YURldmljZU1hbmFnZXJQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERhdGFEZXZpY2VQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERhdGFPZmZlckV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERhdGFPZmZlclByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsRGF0YVNvdXJjZUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERhdGFTb3VyY2VQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERpc3BsYXlFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xEaXNwbGF5UHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xLZXlib2FyZEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbEtleWJvYXJkUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xPdXRwdXRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xPdXRwdXRQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbFBvaW50ZXJFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xQb2ludGVyUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xSZWdpb25Qcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbFJlZ2lzdHJ5RXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsUmVnaXN0cnlQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbFNlYXRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTZWF0UHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTaGVsbFByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsU2hlbGxTdXJmYWNlRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsU2hlbGxTdXJmYWNlUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTdWJjb21wb3NpdG9yUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTdWJzdXJmYWNlUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTdXJmYWNlRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsU3VyZmFjZVByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsVG91Y2hFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xUb3VjaFByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1BvcHVwRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1BvcHVwUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvWGRnUG9zaXRpb25lclByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1N1cmZhY2VFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvWGRnU3VyZmFjZVByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1RvcGxldmVsRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1RvcGxldmVsUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvWGRnV21CYXNlRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1dtQmFzZVByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY29tbW9uL3NyYy9Db25uZWN0aW9uLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY29tbW9uL3NyYy9GaXhlZC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NvbW1vbi9zcmMvV2ViRkQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jb21tb24vc3JjL1dsT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVtQjtBQUNJO0FBQ2tCOztBQUVyRDtBQUMwRDtBQUNFO0FBQ0E7QUFDSTtBQUNoRTtBQUNBO0FBQ3dEO0FBQ007QUFDRTtBQUNBO0FBQ2M7QUFDeEI7QUFDYztBQUNWO0FBQ047QUFDTTtBQUNFO0FBQ047QUFDRTtBQUNBO0FBQ2M7QUFDTjtBQUNKO0FBQ0U7QUFDQTtBQUM5RDtBQUMwRDtBQUNN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QUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksRUFBRTtBQUNkLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLEVBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNyRCxPQUFPO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsNEVBQWE7Ozs7Ozs7Ozs7Ozs7QUN4SzVCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLEVBQUU7QUFDZCxZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksRUFBRTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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LE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEVBQUU7QUFDZCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVksT0FBTztBQUNuQixZQUFZLEVBQUU7QUFDZCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxrRkFBbUI7Ozs7Ozs7Ozs7Ozs7QUN6WWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRyxtRUFBVTtBQUNWO0FBQ3dCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFLOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxFQUFFO0FBQ2QsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwREFBaUI7QUFDaEU7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRkFBb0I7Ozs7Ozs7Ozs7Ozs7QUMzSG5DO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNyRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUcsbUVBQVU7QUFDVjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4Q0FBSzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxnRkFBaUI7Ozs7Ozs7Ozs7Ozs7QUNqUWhDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEVBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNyRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUcsbUVBQVU7QUFDVjtBQUNvQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOENBQUs7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3REFBZTtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsNkVBQWM7Ozs7Ozs7Ozs7Ozs7QUMvZTdCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLEVBQUU7QUFDZCxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUcsbUVBQVU7QUFDVjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4Q0FBSzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEVBQUU7QUFDZCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnRUFBTzs7QUFFN0I7QUFDQSxFQUFFLGdFQUFPOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdFQUFPO0FBQ2pCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InNpbXBsZS53ZWIuc2htLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIDIwMTcgRXJpayBEZSBSaWpja2VcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuU09GVFdBUkUuXG4qL1xuXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IFdlYkZTIGZyb20gJy4vc3JjL1dlYkZTJ1xuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9zcmMvRGlzcGxheSdcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5cbi8vIGNvcmUgd2F5bGFuZCBwcm90b2NvbFxuaW1wb3J0IFdsRGlzcGxheVByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsRGlzcGxheVByb3h5J1xuaW1wb3J0IFdsUmVnaXN0cnlQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFJlZ2lzdHJ5UHJveHknXG5pbXBvcnQgV2xDYWxsYmFja1Byb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsQ2FsbGJhY2tQcm94eSdcbmltcG9ydCBXbENvbXBvc2l0b3JQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbENvbXBvc2l0b3JQcm94eSdcbi8vIGltcG9ydCBXbFNobVBvb2xQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFNobVBvb2xQcm94eSdcbi8vIGltcG9ydCBXbFNobVByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsU2htUHJveHknXG5pbXBvcnQgV2xCdWZmZXJQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbEJ1ZmZlclByb3h5J1xuaW1wb3J0IFdsRGF0YU9mZmVyUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xEYXRhT2ZmZXJQcm94eSdcbmltcG9ydCBXbERhdGFTb3VyY2VQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbERhdGFTb3VyY2VQcm94eSdcbmltcG9ydCBXbERhdGFEZXZpY2VQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbERhdGFEZXZpY2VQcm94eSdcbmltcG9ydCBXbERhdGFEZXZpY2VNYW5hZ2VyUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xEYXRhRGV2aWNlTWFuYWdlclByb3h5J1xuaW1wb3J0IFdsU2hlbGxQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFNoZWxsUHJveHknXG5pbXBvcnQgV2xTaGVsbFN1cmZhY2VQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFNoZWxsU3VyZmFjZVByb3h5J1xuaW1wb3J0IFdsU3VyZmFjZVByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsU3VyZmFjZVByb3h5J1xuaW1wb3J0IFdsU2VhdFByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsU2VhdFByb3h5J1xuaW1wb3J0IFdsUG9pbnRlclByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsUG9pbnRlclByb3h5J1xuaW1wb3J0IFdsS2V5Ym9hcmRQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbEtleWJvYXJkUHJveHknXG5pbXBvcnQgV2xUb3VjaFByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsVG91Y2hQcm94eSdcbmltcG9ydCBXbE91dHB1dFByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsT3V0cHV0UHJveHknXG5pbXBvcnQgV2xSZWdpb25Qcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFJlZ2lvblByb3h5J1xuaW1wb3J0IFdsU3ViY29tcG9zaXRvclByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsU3ViY29tcG9zaXRvclByb3h5J1xuaW1wb3J0IFdsU3Vic3VyZmFjZVByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsU3Vic3VyZmFjZVByb3h5J1xuaW1wb3J0IFdsRGlzcGxheUV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbERpc3BsYXlFdmVudHMnXG5pbXBvcnQgV2xSZWdpc3RyeUV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFJlZ2lzdHJ5RXZlbnRzJ1xuaW1wb3J0IFdsQ2FsbGJhY2tFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xDYWxsYmFja0V2ZW50cydcbi8vIGltcG9ydCBXbFNobUV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFNobUV2ZW50cydcbmltcG9ydCBXbEJ1ZmZlckV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbEJ1ZmZlckV2ZW50cydcbmltcG9ydCBXbERhdGFPZmZlckV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbERhdGFPZmZlckV2ZW50cydcbmltcG9ydCBXbERhdGFTb3VyY2VFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xEYXRhU291cmNlRXZlbnRzJ1xuaW1wb3J0IFdsRGF0YURldmljZUV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbERhdGFEZXZpY2VFdmVudHMnXG5pbXBvcnQgV2xTaGVsbFN1cmZhY2VFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xTaGVsbFN1cmZhY2VFdmVudHMnXG5pbXBvcnQgV2xTdXJmYWNlRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1dsU3VyZmFjZUV2ZW50cydcbmltcG9ydCBXbFNlYXRFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xTZWF0RXZlbnRzJ1xuaW1wb3J0IFdsUG9pbnRlckV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFBvaW50ZXJFdmVudHMnXG5pbXBvcnQgV2xLZXlib2FyZEV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbEtleWJvYXJkRXZlbnRzJ1xuaW1wb3J0IFdsVG91Y2hFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xUb3VjaEV2ZW50cydcbmltcG9ydCBXbE91dHB1dEV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbE91dHB1dEV2ZW50cydcblxuLy8geGRnX3NoZWxsXG5pbXBvcnQgWGRnV21CYXNlUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvWGRnV21CYXNlUHJveHknXG5pbXBvcnQgWGRnUG9zaXRpb25lclByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1Bvc2l0aW9uZXJQcm94eSdcbmltcG9ydCBYZGdTdXJmYWNlUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvWGRnU3VyZmFjZVByb3h5J1xuaW1wb3J0IFhkZ1RvcGxldmVsUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvWGRnVG9wbGV2ZWxQcm94eSdcbmltcG9ydCBYZGdQb3B1cFByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1BvcHVwUHJveHknXG5pbXBvcnQgWGRnV21CYXNlRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1dtQmFzZUV2ZW50cydcbmltcG9ydCBYZGdTdXJmYWNlRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1N1cmZhY2VFdmVudHMnXG5pbXBvcnQgWGRnVG9wbGV2ZWxFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvWGRnVG9wbGV2ZWxFdmVudHMnXG5pbXBvcnQgWGRnUG9wdXBFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvWGRnUG9wdXBFdmVudHMnXG5cbi8vIHdlYiBzaG1cbmltcG9ydCBHcldlYlNobUJ1ZmZlclByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL0dyV2ViU2htQnVmZmVyUHJveHknXG5pbXBvcnQgR3JXZWJTaG1Qcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9HcldlYlNobVByb3h5J1xuaW1wb3J0IEdyV2ViU2htQnVmZmVyRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL0dyV2ViU2htQnVmZmVyRXZlbnRzJ1xuXG4vLyB3ZWIgZ2xcbmltcG9ydCBHcldlYkdsQnVmZmVyUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvR3JXZWJHbEJ1ZmZlclByb3h5J1xuaW1wb3J0IEdyV2ViR2xQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9HcldlYkdsUHJveHknXG5cbi8qKlxuICogQHR5cGUge1dlYkZTfVxuICovXG5jb25zdCB3ZWJGUyA9IFdlYkZTLmNyZWF0ZShfdXVpZHY0KCkpXG4vKipcbiAqIEB0eXBlIHtDb25uZWN0aW9ufVxuICovXG5jb25zdCBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oKVxuLyoqXG4gKiBAdHlwZSB7RGlzcGxheX1cbiAqL1xuY29uc3QgZGlzcGxheSA9IG5ldyBEaXNwbGF5KGNvbm5lY3Rpb24pXG5cbi8qKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF91dWlkdjQgKCkge1xuICByZXR1cm4gKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGMgPT5cbiAgICAoYyBeIHNlbGYuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAxNSA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXG4gIClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuICogQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cbiAqIEBwYXJhbSB7V2ViRlN9d2ViRlNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9zZXR1cE1lc3NhZ2VIYW5kbGluZyAoZGlzcGxheSwgY29ubmVjdGlvbiwgd2ViRlMpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtBcnJheTxBcnJheTx7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD59Pj59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdCBfZmx1c2hRdWV1ZSA9IFtdXG4gIC8qKlxuICAgKiBAcGFyYW0ge01lc3NhZ2VFdmVudH1ldmVudFxuICAgKi9cbiAgb25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGNvbm5lY3Rpb24uY2xvc2VkKSB7IHJldHVybiB9XG5cbiAgICBjb25zdCB3ZWJXb3JrZXJNZXNzYWdlID0gLyoqIEB0eXBlIHt7cHJvdG9jb2xNZXNzYWdlOkFycmF5QnVmZmVyLCBtZXRhOkFycmF5PFRyYW5zZmVyYWJsZT59fSAqL2V2ZW50LmRhdGFcbiAgICBpZiAod2ViV29ya2VyTWVzc2FnZS5wcm90b2NvbE1lc3NhZ2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQzMkFycmF5KC8qKiBAdHlwZSB7QXJyYXlCdWZmZXJ9ICovd2ViV29ya2VyTWVzc2FnZS5wcm90b2NvbE1lc3NhZ2UpXG4gICAgICBjb25zdCBmZHMgPSB3ZWJXb3JrZXJNZXNzYWdlLm1ldGEubWFwKHRyYW5zZmVyYWJsZSA9PiB7XG4gICAgICAgIGlmICh0cmFuc2ZlcmFibGUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiB3ZWJGUy5mcm9tQXJyYXlCdWZmZXIodHJhbnNmZXJhYmxlKVxuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zZmVyYWJsZSBpbnN0YW5jZW9mIEltYWdlQml0bWFwKSB7XG4gICAgICAgICAgcmV0dXJuIHdlYkZTLmZyb21JbWFnZUJpdG1hcCh0cmFuc2ZlcmFibGUpXG4gICAgICAgIH0vLyBlbHNlIGlmICh0cmFuc2ZlcmFibGUgaW5zdGFuY2VvZiBNZXNzYWdlUG9ydCkge1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnNvbGUud2FybihgQ09NUE9TSVRPUiBCVUc/IFVuc3VwcG9ydGVkIHRyYW5zZmVyYWJsZSByZWNlaXZlZCBmcm9tIGNvbXBvc2l0b3I6ICR7dHJhbnNmZXJhYmxlfS4gV2ViRkQgd2lsbCBiZSBudWxsLmApXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9KVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29ubmVjdGlvbi5tZXNzYWdlKHsgYnVmZmVyLCBmZHMgfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRpc3BsYXkuZXJyb3JIYW5kbGVyICYmIHR5cGVvZiBkaXNwbGF5LmVycm9ySGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRpc3BsYXkuZXJyb3JIYW5kbGVyKGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignXFx0bmFtZTogJyArIGUubmFtZSArICcgbWVzc2FnZTogJyArIGUubWVzc2FnZSArICcgdGV4dDogJyArIGUudGV4dClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBvYmplY3Qgc3RhY2s6ICcpXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlLnN0YWNrKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFt3ZWItd29ya2VyLWNsaWVudF0gc2VydmVyIHNlbmQgYW4gaWxsZWdhbCBtZXNzYWdlLmApXG4gICAgICBjb25uZWN0aW9uLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheTx7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD59Pn13aXJlTWVzc2FnZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGNvbm5lY3Rpb24ub25GbHVzaCA9IGFzeW5jICh3aXJlTWVzc2FnZXMpID0+IHtcbiAgICBfZmx1c2hRdWV1ZS5wdXNoKHdpcmVNZXNzYWdlcylcblxuICAgIGlmIChfZmx1c2hRdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB3aGlsZSAoX2ZsdXNoUXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzZW5kV2lyZU1lc3NhZ2VzID0gX2ZsdXNoUXVldWVbMF1cblxuICAgICAgLy8gY29udmVydCB0byBzaW5nbGUgYXJyYXlCdWZmZXIgc28gaXQgY2FuIGJlIHNlbmQgb3ZlciBhIGRhdGEgY2hhbm5lbCB1c2luZyB6ZXJvIGNvcHkgc2VtYW50aWNzLlxuICAgICAgY29uc3QgbWVzc2FnZXNTaXplID0gc2VuZFdpcmVNZXNzYWdlcy5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gcHJldmlvdXNWYWx1ZSArIGN1cnJlbnRWYWx1ZS5idWZmZXIuYnl0ZUxlbmd0aCwgMClcblxuICAgICAgY29uc3Qgc2VuZEJ1ZmZlciA9IG5ldyBVaW50MzJBcnJheShuZXcgQXJyYXlCdWZmZXIobWVzc2FnZXNTaXplKSlcbiAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICBjb25zdCBtZXRhID0gW11cbiAgICAgIGZvciAoY29uc3Qgd2lyZU1lc3NhZ2Ugb2Ygc2VuZFdpcmVNZXNzYWdlcykge1xuICAgICAgICBmb3IgKGNvbnN0IHdlYkZkIG9mIHdpcmVNZXNzYWdlLmZkcykge1xuICAgICAgICAgIGNvbnN0IHRyYW5zZmVyYWJsZSA9IGF3YWl0IHdlYkZkLmdldFRyYW5zZmVyYWJsZSgpXG4gICAgICAgICAgbWV0YS5wdXNoKHRyYW5zZmVyYWJsZSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFVpbnQzMkFycmF5KHdpcmVNZXNzYWdlLmJ1ZmZlcilcbiAgICAgICAgc2VuZEJ1ZmZlci5zZXQobWVzc2FnZSwgb2Zmc2V0KVxuICAgICAgICBvZmZzZXQgKz0gbWVzc2FnZS5sZW5ndGhcbiAgICAgIH1cblxuICAgICAgcG9zdE1lc3NhZ2UoeyBwcm90b2NvbE1lc3NhZ2U6IHNlbmRCdWZmZXIuYnVmZmVyLCBtZXRhIH0sIFtzZW5kQnVmZmVyLmJ1ZmZlcl0uY29uY2F0KG1ldGEpKVxuICAgICAgX2ZsdXNoUXVldWUuc2hpZnQoKVxuICAgIH1cbiAgfVxufVxuXG5fc2V0dXBNZXNzYWdlSGFuZGxpbmcoZGlzcGxheSwgY29ubmVjdGlvbiwgd2ViRlMpXG5cbi8qKlxuICogQHBhcmFtIHtXbFN1cmZhY2VQcm94eX13bFN1cmZhY2VQcm94eVxuICogQHJldHVybiB7ZnVuY3Rpb24oKTogUHJvbWlzZTxudW1iZXI+fVxuICovXG5mdW5jdGlvbiBmcmFtZSAod2xTdXJmYWNlUHJveHkpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCB3bENhbGxiYWNrUHJveHkgPSB3bFN1cmZhY2VQcm94eS5mcmFtZSgpXG4gICAgICB3bENhbGxiYWNrUHJveHkubGlzdGVuZXIgPSB7XG4gICAgICAgIGRvbmU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgIHdsQ2FsbGJhY2tQcm94eS5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgd2ViRlMsXG4gIGRpc3BsYXksXG4gIGZyYW1lLFxuXG4gIFdsRGlzcGxheVByb3h5LFxuICBXbFJlZ2lzdHJ5UHJveHksXG4gIFdsQ2FsbGJhY2tQcm94eSxcbiAgV2xDb21wb3NpdG9yUHJveHksXG4gIFdsQnVmZmVyUHJveHksXG4gIFdsRGF0YU9mZmVyUHJveHksXG4gIFdsRGF0YVNvdXJjZVByb3h5LFxuICBXbERhdGFEZXZpY2VQcm94eSxcbiAgV2xEYXRhRGV2aWNlTWFuYWdlclByb3h5LFxuICBXbFNoZWxsUHJveHksXG4gIFdsU2hlbGxTdXJmYWNlUHJveHksXG4gIFdsU3VyZmFjZVByb3h5LFxuICBXbFNlYXRQcm94eSxcbiAgV2xQb2ludGVyUHJveHksXG4gIFdsS2V5Ym9hcmRQcm94eSxcbiAgV2xUb3VjaFByb3h5LFxuICBXbE91dHB1dFByb3h5LFxuICBXbFJlZ2lvblByb3h5LFxuICBXbFN1YmNvbXBvc2l0b3JQcm94eSxcbiAgV2xTdWJzdXJmYWNlUHJveHksXG4gIFdsRGlzcGxheUV2ZW50cyxcbiAgV2xSZWdpc3RyeUV2ZW50cyxcbiAgV2xDYWxsYmFja0V2ZW50cyxcbiAgV2xCdWZmZXJFdmVudHMsXG4gIFdsRGF0YU9mZmVyRXZlbnRzLFxuICBXbERhdGFTb3VyY2VFdmVudHMsXG4gIFdsRGF0YURldmljZUV2ZW50cyxcbiAgV2xTaGVsbFN1cmZhY2VFdmVudHMsXG4gIFdsU3VyZmFjZUV2ZW50cyxcbiAgV2xTZWF0RXZlbnRzLFxuICBXbFBvaW50ZXJFdmVudHMsXG4gIFdsS2V5Ym9hcmRFdmVudHMsXG4gIFdsVG91Y2hFdmVudHMsXG4gIFdsT3V0cHV0RXZlbnRzLFxuXG4gIFhkZ1dtQmFzZVByb3h5LFxuICBYZGdQb3NpdGlvbmVyUHJveHksXG4gIFhkZ1N1cmZhY2VQcm94eSxcbiAgWGRnVG9wbGV2ZWxQcm94eSxcbiAgWGRnUG9wdXBQcm94eSxcbiAgWGRnV21CYXNlRXZlbnRzLFxuICBYZGdTdXJmYWNlRXZlbnRzLFxuICBYZGdUb3BsZXZlbEV2ZW50cyxcbiAgWGRnUG9wdXBFdmVudHMsXG5cbiAgR3JXZWJTaG1CdWZmZXJQcm94eSxcbiAgR3JXZWJTaG1Qcm94eSxcbiAgR3JXZWJTaG1CdWZmZXJFdmVudHMsXG5cbiAgR3JXZWJHbEJ1ZmZlclByb3h5LFxuICBHcldlYkdsUHJveHlcbn0iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDE3IEVyaWsgRGUgUmlqY2tlXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuaW1wb3J0IFdsRGlzcGxheVByb3h5IGZyb20gJy4vcHJvdG9jb2wvV2xEaXNwbGF5UHJveHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xuICAvKipcbiAgICogQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yIChjb25uZWN0aW9uKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZWN5Y2xlZElkcyA9IFtdXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Nvbm5lY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb25uZWN0aW9uID0gY29ubmVjdGlvblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtXbERpc3BsYXlQcm94eX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Rpc3BsYXlQcm94eSA9IG5ldyBXbERpc3BsYXlQcm94eSh0aGlzLCB0aGlzLl9jb25uZWN0aW9uLCAxKVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sYXN0SWQgPSAxXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKCk6dm9pZH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Rlc3Ryb3lSZXNvbHZlID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbihlcnJvcjpFcnJvcik6dm9pZH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Rlc3Ryb3lSZWplY3QgPSBudWxsXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Byb21pc2U8dm9pZD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kZXN0cm95UHJvbWlzZSA9IG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9kZXN0cm95UmVzb2x2ZSA9IHJlc29sdmVcbiAgICAgIHRoaXMuX2Rlc3Ryb3lSZWplY3QgPSByZWplY3RcbiAgICB9KSlcblxuICAgIHRoaXMuX2Rpc3BsYXlQcm94eS5saXN0ZW5lciA9IHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIGlkXG4gICAgICAgKi9cbiAgICAgIGRlbGV0ZUlkOiAoaWQpID0+IHsgdGhpcy5fcmVjeWNsZWRJZHMucHVzaChpZCkgfSxcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHByb3h5XG4gICAgICAgKiBAcGFyYW0gY29kZVxuICAgICAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICAgICAqL1xuICAgICAgZXJyb3I6IChwcm94eSwgY29kZSwgbWVzc2FnZSkgPT4geyB0aGlzLl9wcm90b2NvbEVycm9yKHByb3h5LCBjb2RlLCBtZXNzYWdlKSB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIHRvIGhhdmUgYSBkZWZhdWx0ICdjYXRjaC1hbGwnIGFwcGxpY2F0aW9uIGVycm9yIGhhbmRsZXIuIENhbiBiZSBudWxsIGZvciBkZWZhdWx0IGJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyb3IpOnZvaWR8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmVycm9ySGFuZGxlciA9IG51bGxcbiAgfVxuXG4gIGNsb3NlICgpIHtcbiAgICBpZiAodGhpcy5fY29ubmVjdGlvbi5jbG9zZWQpIHsgcmV0dXJuIH1cbiAgICB0aGlzLl9jb25uZWN0aW9uLmNsb3NlKClcbiAgICB0aGlzLl9kZXN0cm95UmVzb2x2ZSgpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtQcm94eX1wcm94eVxuICAgKiBAcGFyYW0ge251bWJlcn1jb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfW1lc3NhZ2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9wcm90b2NvbEVycm9yIChwcm94eSwgY29kZSwgbWVzc2FnZSkge1xuICAgIGlmICh0aGlzLl9jb25uZWN0aW9uLmNsb3NlZCkgeyByZXR1cm4gfVxuICAgIHRoaXMuX2Nvbm5lY3Rpb24uY2xvc2UoKVxuICAgIHRoaXMuX2Rlc3Ryb3lSZWplY3QobmV3IEVycm9yKGBQcm90b2NvbCBlcnJvci4gdHlwZTogJHtwcm94eS5jb25zdHJ1Y3Rvci5uYW1lfSwgaWQ6ICR7cHJveHkuaWR9LCBjb2RlOiAke2NvZGV9LCBtZXNzYWdlOiAke21lc3NhZ2V9YCkpXG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgb25jZSB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQgbm9ybWFsbHkgaWUuIHdpdGggYSBjYWxsIHRvIGNsb3NlKCkuIFRoZSBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCBhblxuICAgKiBlcnJvciBpZiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQgYWJub3JtYWxseSBpZSB3aGVuIGEgcHJvdG9jb2wgZXJyb3IgaXMgcmVjZWl2ZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBvbkNsb3NlICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdHJveVByb21pc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtXbFJlZ2lzdHJ5UHJveHl9XG4gICAqL1xuICBnZXRSZWdpc3RyeSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlQcm94eS5nZXRSZWdpc3RyeSgpXG4gIH1cblxuICAvKipcbiAgICogRm9yIGludGVybmFsIHVzZS4gR2VuZXJhdGVzIHRoZSBpZCBvZiB0aGUgbmV4dCBwcm94eSBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdlbmVyYXRlTmV4dElkICgpIHtcbiAgICBpZiAodGhpcy5fcmVjeWNsZWRJZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVjeWNsZWRJZHMuc2hpZnQoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKyt0aGlzLl9sYXN0SWRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2FpdCBmb3IgdGhlIGNvbXBvc2l0b3IgdG8gaGF2ZSBzZW5kIHVzIGFsbCByZW1haW5pbmcgZXZlbnRzLlxuICAgKlxuICAgKiBUaGUgZGF0YSBpbiB0aGUgcmVzb2x2ZWQgcHJvbWlzZSBpcyB0aGUgZXZlbnQgc2VyaWFsLlxuICAgKlxuICAgKiBEb24ndCAnYXdhaXQnIHRoaXMgc3luYyBjYWxsIGFzIGl0IHdpbGwgcmVzdWx0IGluIGEgZGVhZGxvY2sgd2hlcmUgdGhlIHdvcmtlciB3aWxsIGJsb2NrIGFsbCBpbmNvbWluZyBldmVudHMsXG4gICAqIGluY2x1ZGluZyB0aGUgZXZlbnQgdGhlIHJlc29sdmVzIHRoZSBhd2FpdCBzdGF0ZS4gSW5zdGVhZCB1c2UgdGhlIGNsYXNzaWMgJ3RoZW4oLi4pJyBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHN5bmMgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHdsQ2FsbGJhY2tQcm94eSA9IHRoaXMuX2Rpc3BsYXlQcm94eS5zeW5jKClcbiAgICAgIHdsQ2FsbGJhY2tQcm94eS5saXN0ZW5lciA9IHtcbiAgICAgICAgZG9uZTogKGRhdGEpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpXG4gICAgICAgICAgd2xDYWxsYmFja1Byb3h5LmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHF1ZXVlZCBtZXNzYWdlcyB0byB0aGUgY29tcG9zaXRvci5cbiAgICovXG4gIGZsdXNoICgpIHtcbiAgICB0aGlzLl9jb25uZWN0aW9uLmZsdXNoKClcbiAgfVxufVxuIiwiaW1wb3J0IHsgV2ViRkQgfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5cbi8vIFRPRE8gVGhpcyBpcyBjdXJyZW50bHkgYSBsaXRlcmFsIGNvcHkgb2YgdGhlIHNlcnZlciBpbXBsZW1lbnRhdGlvbi4gRG8gYWxsIHVzZSBjYXNlcyBtYXRjaCAxbzEgYW5kIGNhbiB3ZSB1c2UgYSBzaW5nbGUgY29tbW9uIGNvZGUgYmFzZSBiZXR3ZWVuIGNsaWVudCAmIHNlcnZlciBmb3IgV2ViRlM/XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJGUyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ31mZERvbWFpblVVSURcbiAgICogQHJldHVybiB7V2ViRlN9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlIChmZERvbWFpblVVSUQpIHtcbiAgICByZXR1cm4gbmV3IFdlYkZTKGZkRG9tYWluVVVJRClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ31mZERvbWFpblVVSURcbiAgICovXG4gIGNvbnN0cnVjdG9yIChmZERvbWFpblVVSUQpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmREb21haW5VVUlEID0gZmREb21haW5VVUlEXG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdC48bnVtYmVyLFdlYkZEPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3dlYkZEcyA9IHt9XG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25leHRGRCA9IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlclxuICAgKiBAcmV0dXJuIHtXZWJGRH1cbiAgICovXG4gIGZyb21BcnJheUJ1ZmZlciAoYXJyYXlCdWZmZXIpIHtcbiAgICBpZiAoIShhcnJheUJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgZmlyc3QgYXJndW1lbnQgdG8gYmUgb2YgdHlwZSBBcnJheUJ1ZmZlci5gKVxuICAgIH1cbiAgICBjb25zdCBmZCA9IHRoaXMuX25leHRGRCsrXG4gICAgY29uc3Qgd2ViRkQgPSBuZXcgV2ViRkQoZmQsICdBcnJheUJ1ZmZlcicsIHRoaXMuX2ZkRG9tYWluVVVJRCwgKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGFycmF5QnVmZmVyKSwgKCkgPT4geyBkZWxldGUgdGhpcy5fd2ViRkRzW2ZkXSB9KVxuICAgIHRoaXMuX3dlYkZEc1tmZF0gPSB3ZWJGRFxuICAgIHJldHVybiB3ZWJGRFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SW1hZ2VCaXRtYXB9aW1hZ2VCaXRtYXBcbiAgICogQHJldHVybiB7V2ViRkR9XG4gICAqL1xuICBmcm9tSW1hZ2VCaXRtYXAgKGltYWdlQml0bWFwKSB7XG4gICAgaWYgKCEoaW1hZ2VCaXRtYXAgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGZpcnN0IGFyZ3VtZW50IHRvIGJlIG9mIHR5cGUgSW1hZ2VCaXRtYXAuYClcbiAgICB9XG4gICAgY29uc3QgZmQgPSB0aGlzLl9uZXh0RkQrK1xuICAgIGNvbnN0IHdlYkZEID0gbmV3IFdlYkZEKGZkLCAnSW1hZ2VCaXRtYXAnLCB0aGlzLl9mZERvbWFpblVVSUQsICgpID0+IFByb21pc2UucmVzb2x2ZShpbWFnZUJpdG1hcCksICgpID0+IHsgZGVsZXRlIHRoaXMuX3dlYkZEc1tmZF0gfSlcbiAgICB0aGlzLl93ZWJGRHNbZmRdID0gd2ViRkRcbiAgICByZXR1cm4gd2ViRkRcbiAgfVxuXG4gIC8vIFRPRE8gZnJvbU1lc3NhZ2VQb3J0XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfWZkXG4gICAqIEByZXR1cm4ge1dlYkZEfVxuICAgKi9cbiAgZ2V0V2ViRkQgKGZkKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYkZEc1tmZF1cbiAgfVxufVxuIiwiLypcbiAqXG4gKiAgICAgICAgQ29weXJpZ2h0IMKpIDIwMTkgRXJpayBEZSBSaWpja2VcbiAqXG4gKiAgICAgICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgICAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgICAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICAgICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgICAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICAgICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgICAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICAgICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgICAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgICAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgICAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgICAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgICAgICBTT0ZUV0FSRS5cbiAqICAgIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuY2xhc3MgR3JXZWJHbEJ1ZmZlclByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKiAgICAgICAgICAgICAgICBUcmFuc2ZlciB0aGUgYXNzb2NpYXRlZCBIVE1MNSB3ZWIgZ2wgYnVmZmVyIGNvbnRlbnRzIHRvIHRoZSBjb21wb3NpdG9yLlxuXHQgKiAgICAgICAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge1dlYkZEfSBjb250ZW50cyBIVE1MNSB3ZWIgZ2wgaW1hZ2UgYml0bWFwIHRvIHRyYW5zZmVyIHRvIHRoZSBjb21wb3NpdG9yLiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHRyYW5zZmVyIChjb250ZW50cykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtmaWxlRGVzY3JpcHRvcihjb250ZW50cyldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge0dyV2ViR2xCdWZmZXJFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cbn1cbkdyV2ViR2xCdWZmZXJQcm94eS5wcm90b2NvbE5hbWUgPSAnZ3Jfd2ViX2dsX2J1ZmZlcidcblxuZXhwb3J0IGRlZmF1bHQgR3JXZWJHbEJ1ZmZlclByb3h5XG4iLCIvKlxuICpcbiAqICAgICAgICBDb3B5cmlnaHQgwqkgMjAxOSBFcmlrIERlIFJpamNrZVxuICpcbiAqICAgICAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAgICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICAgICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgICAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgICAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICAgICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgICAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICAgICAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICAgICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgICAgIFNPRlRXQVJFLlxuICogICAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgR3JXZWJHbEJ1ZmZlclByb3h5IGZyb20gJy4vR3JXZWJHbEJ1ZmZlclByb3h5J1xuaW1wb3J0IFdsQnVmZmVyUHJveHkgZnJvbSAnLi9XbEJ1ZmZlclByb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgICAgICAgIEEgc2luZ2xldG9uIGdsb2JhbCBvYmplY3QgdGhhdCBwcm92aWRlcyBzdXBwb3J0IGZvciB3ZWIgZ2wuXG4gKlxuICogICAgICAgICAgICBDbGllbnRzIGNhbiBjcmVhdGUgd2xfYnVmZmVyIG9iamVjdHMgdXNpbmcgdGhlIGNyZWF0ZV9idWZmZXIgcmVxdWVzdC5cbiAqICAgICAgICBcbiAqL1xuY2xhc3MgR3JXZWJHbFByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKiAgICAgICAgICAgICAgICBDcmVhdGUgYSB3ZWJfZ2xfYnVmZmVyIG9iamVjdC5cblx0ICogICAgICAgICAgICBcblx0ICpcblx0ICogQHJldHVybiB7R3JXZWJHbEJ1ZmZlclByb3h5fSBUaGUgZ3Jfd2ViX2dsIGJ1ZmZlciB0byBjcmVhdGUuIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y3JlYXRlV2ViR2xCdWZmZXIgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDAsIEdyV2ViR2xCdWZmZXJQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiAgICAgICAgICAgICAgICBDcmVhdGUgYSB3bF9idWZmZXIgb2JqZWN0IGZyb20gYSB3ZWJfYXJyYXlfYnVmZmVyIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGggYSBzdXJmYWNlLlxuXHQgKiAgICAgICAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGdyV2ViR2xCdWZmZXIgVGhlIGdyX3dlYl9nbF9idWZmZXIgdG8gd3JhcC4gXG5cdCAqIEByZXR1cm4ge1dsQnVmZmVyUHJveHl9IFRoZSBidWZmZXIgdG8gY3JlYXRlLiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNyZWF0ZUJ1ZmZlciAoZ3JXZWJHbEJ1ZmZlcikge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDEsIFdsQnVmZmVyUHJveHksIFtuZXdPYmplY3QoKSwgb2JqZWN0KGdyV2ViR2xCdWZmZXIpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtHcldlYkdsRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG59XG5HcldlYkdsUHJveHkucHJvdG9jb2xOYW1lID0gJ2dyX3dlYl9nbCdcblxuZXhwb3J0IGRlZmF1bHQgR3JXZWJHbFByb3h5XG4iLCIvKlxuICpcbiAqICAgICAgICBDb3B5cmlnaHQgwqkgMjAxOSBFcmlrIERlIFJpamNrZVxuICpcbiAqICAgICAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAgICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICAgICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgICAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgICAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICAgICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgICAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICAgICAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICAgICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgICAgIFNPRlRXQVJFLlxuICogICAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyV2ViU2htQnVmZmVyRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICogICAgICAgICAgICAgICAgRGV0YWNoZXMgYSBwcmV2aW91c2x5IGF0dGFjaGVkIEhUTUw1IGFycmF5IGJ1ZmZlciBmcm9tIHRoZSBjb21wb3NpdG9yIGFuZCByZXR1cm5zIGl0IHRvIHRoZSBjbGllbnQgc29cblx0ICogICAgICAgICAgICAgICAgaXQgY2FuIGJlIHJldXNlZCBhZ2FpbiBmb3Igd3JpdGluZy4gQWZ0ZXIgZGV0YWNoaW5nLCB0aGUgYXJyYXkgYnVmZmVyIG93bmVyc2hpcCBpcyBwYXNzZWQgZnJvbVxuXHQgKiAgICAgICAgICAgICAgICB0aGUgY29tcG9zaXRvciBtYWluIHRocmVhZCBiYWNrIHRvIHRoZSBjbGllbnQuXG5cdCAqICAgICAgICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7V2ViRkR9IGNvbnRlbnRzIEFuIEhUTUw1IGFycmF5IGJ1ZmZlciwgZGV0YWNoZWQgZnJvbSB0aGUgY29tcG9zaXRvciBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRldGFjaChjb250ZW50cykge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICAgICAgQ29weXJpZ2h0IMKpIDIwMTkgRXJpayBEZSBSaWpja2VcbiAqXG4gKiAgICAgICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgICAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgICAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICAgICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgICAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICAgICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgICAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICAgICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgICAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgICAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgICAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgICAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgICAgICBTT0ZUV0FSRS5cbiAqICAgIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuY2xhc3MgR3JXZWJTaG1CdWZmZXJQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICogICAgICAgICAgICAgICAgQXR0YWNoZXMgYW4gSFRNTDUgYXJyYXkgYnVmZmVyIHRvIHRoZSBjb21wb3NpdG9yLiBBZnRlciBhdHRhY2hpbmcsIHRoZSBhcnJheSBidWZmZXIgb3duZXJzaGlwIGlzIHBhc3NlZFxuXHQgKiAgICAgICAgICAgICAgICB0byB0aGUgY29tcG9zaXRvciBtYWluIHRocmVhZC4gVGhlIGFycmF5IGJ1ZmZlciBjYW4gbm90IGJlIHVzZWQgZm9yIHdyaXRpbmcgYW55bW9yZSBieSB0aGUgY2xpZW50IGFzXG5cdCAqICAgICAgICAgICAgICAgIHBlciBIVE1MNSBUcmFuc2ZlcmFibGUgb2JqZWN0cyBzcGVjLlxuXHQgKlxuXHQgKiAgICAgICAgICAgICAgICBUaGUgcGl4ZWwgZm9ybWF0IG9mIHRoZSBhdHRhY2hlZCBhcnJheSBidWZmZXIgbXVzdCBhbHdheXMgYmUgUkdCQTg4ODggYXMgcGVyIEhUTUw1IEltYWdlRGF0YSBzcGVjLlxuXHQgKiAgICAgICAgICAgICAgICBTdHJpZGUgbXVzdCBhbHdheXMgZXF1YWwgd2lkdGguXG5cdCAqICAgICAgICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7V2ViRkR9IGNvbnRlbnRzIEFuIEhUTUw1IGFycmF5IGJ1ZmZlciB0byBhdHRhY2ggdG8gdGhlIGNvbXBvc2l0b3IuIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0YXR0YWNoIChjb250ZW50cykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtmaWxlRGVzY3JpcHRvcihjb250ZW50cyldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge0dyV2ViU2htQnVmZmVyRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZGV0YWNoKGgobWVzc2FnZSkpXG5cdH1cblxufVxuR3JXZWJTaG1CdWZmZXJQcm94eS5wcm90b2NvbE5hbWUgPSAnZ3Jfd2ViX3NobV9idWZmZXInXG5cbmV4cG9ydCBkZWZhdWx0IEdyV2ViU2htQnVmZmVyUHJveHlcbiIsIi8qXG4gKlxuICogICAgICAgIENvcHlyaWdodCDCqSAyMDE5IEVyaWsgRGUgUmlqY2tlXG4gKlxuICogICAgICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICAgICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICAgICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgICAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICAgICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICAgICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgICAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICAgICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICAgICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgICAgICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICAgICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICAgICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgICAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICAgICAgU09GVFdBUkUuXG4gKiAgICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmltcG9ydCBHcldlYlNobUJ1ZmZlclByb3h5IGZyb20gJy4vR3JXZWJTaG1CdWZmZXJQcm94eSdcbmltcG9ydCBXbEJ1ZmZlclByb3h5IGZyb20gJy4vV2xCdWZmZXJQcm94eSdcblxuLyoqXG4gKlxuICogICAgICAgICAgICBBIHNpbmdsZXRvbiBnbG9iYWwgb2JqZWN0IHRoYXQgcHJvdmlkZXMgc3VwcG9ydCBmb3Igc2hhcmVkIG1lbW9yeSB0aHJvdWdoIEhUTUw1IGFycmF5IGJ1ZmZlcnMuXG4gKlxuICogICAgICAgICAgICBDbGllbnRzIGNhbiBjcmVhdGUgd2xfYnVmZmVyIG9iamVjdHMgdXNpbmcgdGhlIGNyZWF0ZV9idWZmZXIgcmVxdWVzdC5cbiAqICAgICAgICBcbiAqL1xuY2xhc3MgR3JXZWJTaG1Qcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICogICAgICAgICAgICAgICAgQ3JlYXRlIGEgZ3Jfd2ViX3NobV9idWZmZXIgb2JqZWN0LlxuXHQgKiAgICAgICAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtHcldlYlNobUJ1ZmZlclByb3h5fSB3ZWIgc2htIGJ1ZmZlciB0byBjcmVhdGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjcmVhdGVXZWJBcnJheUJ1ZmZlciAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMCwgR3JXZWJTaG1CdWZmZXJQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiAgICAgICAgICAgICAgICBDcmVhdGUgYSB3bF9idWZmZXIgb2JqZWN0IGZyb20gYSB3ZWJfYXJyYXlfYnVmZmVyIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGggYSBzdXJmYWNlLlxuXHQgKiAgICAgICAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHdlYkFycmF5QnVmZmVyIFRoZSBncl93ZWJfYXJyYXlfYnVmZmVyIHRvIHdyYXAgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBCdWZmZXIgd2lkdGgsIGluIHBpeGVscy4gXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgQnVmZmVyIGhlaWdodCwgaW4gcGl4ZWxzLiBcblx0ICogQHJldHVybiB7V2xCdWZmZXJQcm94eX0gYnVmZmVyIHRvIGNyZWF0ZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNyZWF0ZUJ1ZmZlciAod2ViQXJyYXlCdWZmZXIsIHdpZHRoLCBoZWlnaHQpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAxLCBXbEJ1ZmZlclByb3h5LCBbbmV3T2JqZWN0KCksIG9iamVjdCh3ZWJBcnJheUJ1ZmZlciksIGludCh3aWR0aCksIGludChoZWlnaHQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtHcldlYlNobUV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxufVxuR3JXZWJTaG1Qcm94eS5wcm90b2NvbE5hbWUgPSAnZ3Jfd2ViX3NobSdcblxuZXhwb3J0IGRlZmF1bHQgR3JXZWJTaG1Qcm94eVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgMjAxNyBFcmlrIERlIFJpamNrZVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgV2xPYmplY3QgfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5IGV4dGVuZHMgV2xPYmplY3Qge1xuICAvKipcbiAgICogQHBhcmFtIHtEaXNwbGF5fSBkaXNwbGF5XG4gICAqIEBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfWlkXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcbiAgICBzdXBlcihpZClcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RGlzcGxheX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXlcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Q29ubmVjdGlvbn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fY29ubmVjdGlvbiA9IGNvbm5lY3Rpb25cbiAgICBjb25uZWN0aW9uLnJlZ2lzdGVyV2xPYmplY3QodGhpcylcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKVxuICAgIHRoaXMuX2Nvbm5lY3Rpb24udW5yZWdpc3RlcldsT2JqZWN0KHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wY29kZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm94eUNsYXNzXG4gICAqIEBwYXJhbSB7QXJyYXk8e3ZhbHVlOiAqLCB0eXBlOiBzdHJpbmcsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9Pn0gYXJnc0FycmF5XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9tYXJzaGFsbENvbnN0cnVjdG9yIChpZCwgb3Bjb2RlLCBwcm94eUNsYXNzLCBhcmdzQXJyYXkpIHtcbiAgICAvLyBjb25zdHJ1Y3QgbmV3IG9iamVjdFxuICAgIGNvbnN0IHByb3h5ID0gbmV3IHByb3h5Q2xhc3ModGhpcy5kaXNwbGF5LCB0aGlzLl9jb25uZWN0aW9uLCB0aGlzLmRpc3BsYXkuZ2VuZXJhdGVOZXh0SWQoKSlcblxuICAgIC8vIGRldGVybWluZSByZXF1aXJlZCB3aXJlIG1lc3NhZ2UgbGVuZ3RoXG4gICAgbGV0IHNpemUgPSA0ICsgMiArIDIgLy8gaWQrc2l6ZStvcGNvZGVcbiAgICBhcmdzQXJyYXkuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgaWYgKGFyZy50eXBlID09PSAnbicpIHtcbiAgICAgICAgYXJnLnZhbHVlID0gcHJveHkuaWRcbiAgICAgIH1cbiAgICAgIHNpemUgKz0gYXJnLnNpemVcbiAgICB9KVxuXG4gICAgdGhpcy5fY29ubmVjdGlvbi5tYXJzaGFsbE1zZyhpZCwgb3Bjb2RlLCBzaXplLCBhcmdzQXJyYXkpXG5cbiAgICByZXR1cm4gcHJveHlcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgKiBAcGFyYW0ge251bWJlcn0gb3Bjb2RlXG4gICAqIEBwYXJhbSB7QXJyYXk8e3ZhbHVlOiAqLCB0eXBlOiBzdHJpbmcsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9Pn0gYXJnc0FycmF5XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9tYXJzaGFsbCAoaWQsIG9wY29kZSwgYXJnc0FycmF5KSB7XG4gICAgLy8gZGV0ZXJtaW5lIHJlcXVpcmVkIHdpcmUgbWVzc2FnZSBsZW5ndGhcbiAgICBsZXQgc2l6ZSA9IDQgKyAyICsgMiAgLy8gaWQrc2l6ZStvcGNvZGVcbiAgICBhcmdzQXJyYXkuZm9yRWFjaChhcmcgPT4gc2l6ZSArPSBhcmcuc2l6ZSlcbiAgICB0aGlzLl9jb25uZWN0aW9uLm1hcnNoYWxsTXNnKGlkLCBvcGNvZGUsIHNpemUsIGFyZ3NBcnJheSlcbiAgfVxufVxuXG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXbEJ1ZmZlckV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZW50IHdoZW4gdGhpcyB3bF9idWZmZXIgaXMgbm8gbG9uZ2VyIHVzZWQgYnkgdGhlIGNvbXBvc2l0b3IuXG5cdCAqXHRUaGUgY2xpZW50IGlzIG5vdyBmcmVlIHRvIHJldXNlIG9yIGRlc3Ryb3kgdGhpcyBidWZmZXIgYW5kIGl0c1xuXHQgKlx0YmFja2luZyBzdG9yYWdlLlxuXHQgKlxuXHQgKlx0SWYgYSBjbGllbnQgcmVjZWl2ZXMgYSByZWxlYXNlIGV2ZW50IGJlZm9yZSB0aGUgZnJhbWUgY2FsbGJhY2tcblx0ICpcdHJlcXVlc3RlZCBpbiB0aGUgc2FtZSB3bF9zdXJmYWNlLmNvbW1pdCB0aGF0IGF0dGFjaGVzIHRoaXNcblx0ICpcdHdsX2J1ZmZlciB0byBhIHN1cmZhY2UsIHRoZW4gdGhlIGNsaWVudCBpcyBpbW1lZGlhdGVseSBmcmVlIHRvXG5cdCAqXHRyZXVzZSB0aGUgYnVmZmVyIGFuZCBpdHMgYmFja2luZyBzdG9yYWdlLCBhbmQgZG9lcyBub3QgbmVlZCBhXG5cdCAqXHRzZWNvbmQgYnVmZmVyIGZvciB0aGUgbmV4dCBzdXJmYWNlIGNvbnRlbnQgdXBkYXRlLiBUeXBpY2FsbHlcblx0ICpcdHRoaXMgaXMgcG9zc2libGUsIHdoZW4gdGhlIGNvbXBvc2l0b3IgbWFpbnRhaW5zIGEgY29weSBvZiB0aGVcblx0ICpcdHdsX3N1cmZhY2UgY29udGVudHMsIGUuZy4gYXMgYSBHTCB0ZXh0dXJlLiBUaGlzIGlzIGFuIGltcG9ydGFudFxuXHQgKlx0b3B0aW1pemF0aW9uIGZvciBHTChFUykgY29tcG9zaXRvcnMgd2l0aCB3bF9zaG0gY2xpZW50cy5cblx0ICogICAgICBcblx0ICpcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHJlbGVhc2UoKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBIGJ1ZmZlciBwcm92aWRlcyB0aGUgY29udGVudCBmb3IgYSB3bF9zdXJmYWNlLiBCdWZmZXJzIGFyZVxuICogICAgICBjcmVhdGVkIHRocm91Z2ggZmFjdG9yeSBpbnRlcmZhY2VzIHN1Y2ggYXMgd2xfZHJtLCB3bF9zaG0gb3JcbiAqICAgICAgc2ltaWxhci4gSXQgaGFzIGEgd2lkdGggYW5kIGEgaGVpZ2h0IGFuZCBjYW4gYmUgYXR0YWNoZWQgdG8gYVxuICogICAgICB3bF9zdXJmYWNlLCBidXQgdGhlIG1lY2hhbmlzbSBieSB3aGljaCBhIGNsaWVudCBwcm92aWRlcyBhbmRcbiAqICAgICAgdXBkYXRlcyB0aGUgY29udGVudHMgaXMgZGVmaW5lZCBieSB0aGUgYnVmZmVyIGZhY3RvcnkgaW50ZXJmYWNlLlxuICogICAgXG4gKi9cbmNsYXNzIFdsQnVmZmVyUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHREZXN0cm95IGEgYnVmZmVyLiBJZiBhbmQgaG93IHlvdSBuZWVkIHRvIHJlbGVhc2UgdGhlIGJhY2tpbmdcblx0ICpcdHN0b3JhZ2UgaXMgZGVmaW5lZCBieSB0aGUgYnVmZmVyIGZhY3RvcnkgaW50ZXJmYWNlLlxuXHQgKlxuXHQgKlx0Rm9yIHBvc3NpYmxlIHNpZGUtZWZmZWN0cyB0byBhIHN1cmZhY2UsIHNlZSB3bF9zdXJmYWNlLmF0dGFjaC5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsQnVmZmVyRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIucmVsZWFzZSgpXG5cdH1cblxufVxuV2xCdWZmZXJQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfYnVmZmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBXbEJ1ZmZlclByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xDYWxsYmFja0V2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHROb3RpZnkgdGhlIGNsaWVudCB3aGVuIHRoZSByZWxhdGVkIHJlcXVlc3QgaXMgZG9uZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrRGF0YSByZXF1ZXN0LXNwZWNpZmljIGRhdGEgZm9yIHRoZSBjYWxsYmFjayBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRvbmUoY2FsbGJhY2tEYXRhKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBDbGllbnRzIGNhbiBoYW5kbGUgdGhlICdkb25lJyBldmVudCB0byBnZXQgbm90aWZpZWQgd2hlblxuICogICAgICB0aGUgcmVsYXRlZCByZXF1ZXN0IGlzIGRvbmUuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xDYWxsYmFja1Byb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbENhbGxiYWNrRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZG9uZSh1KG1lc3NhZ2UpKVxuXHR9XG5cbn1cbldsQ2FsbGJhY2tQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfY2FsbGJhY2snXG5cbmV4cG9ydCBkZWZhdWx0IFdsQ2FsbGJhY2tQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgV2xTdXJmYWNlUHJveHkgZnJvbSAnLi9XbFN1cmZhY2VQcm94eSdcbmltcG9ydCBXbFJlZ2lvblByb3h5IGZyb20gJy4vV2xSZWdpb25Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBIGNvbXBvc2l0b3IuICBUaGlzIG9iamVjdCBpcyBhIHNpbmdsZXRvbiBnbG9iYWwuICBUaGVcbiAqICAgICAgY29tcG9zaXRvciBpcyBpbiBjaGFyZ2Ugb2YgY29tYmluaW5nIHRoZSBjb250ZW50cyBvZiBtdWx0aXBsZVxuICogICAgICBzdXJmYWNlcyBpbnRvIG9uZSBkaXNwbGF5YWJsZSBvdXRwdXQuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xDb21wb3NpdG9yUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRBc2sgdGhlIGNvbXBvc2l0b3IgdG8gY3JlYXRlIGEgbmV3IHN1cmZhY2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEByZXR1cm4ge1dsU3VyZmFjZVByb3h5fSB0aGUgbmV3IHN1cmZhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjcmVhdGVTdXJmYWNlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAwLCBXbFN1cmZhY2VQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0QXNrIHRoZSBjb21wb3NpdG9yIHRvIGNyZWF0ZSBhIG5ldyByZWdpb24uXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEByZXR1cm4ge1dsUmVnaW9uUHJveHl9IHRoZSBuZXcgcmVnaW9uIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y3JlYXRlUmVnaW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAxLCBXbFJlZ2lvblByb3h5LCBbbmV3T2JqZWN0KCldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsQ29tcG9zaXRvckV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxufVxuV2xDb21wb3NpdG9yUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX2NvbXBvc2l0b3InXG5cbmV4cG9ydCBkZWZhdWx0IFdsQ29tcG9zaXRvclByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xEYXRhRGV2aWNlRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBkYXRhX29mZmVyIGV2ZW50IGludHJvZHVjZXMgYSBuZXcgd2xfZGF0YV9vZmZlciBvYmplY3QsXG5cdCAqXHR3aGljaCB3aWxsIHN1YnNlcXVlbnRseSBiZSB1c2VkIGluIGVpdGhlciB0aGVcblx0ICpcdGRhdGFfZGV2aWNlLmVudGVyIGV2ZW50IChmb3IgZHJhZy1hbmQtZHJvcCkgb3IgdGhlXG5cdCAqXHRkYXRhX2RldmljZS5zZWxlY3Rpb24gZXZlbnQgKGZvciBzZWxlY3Rpb25zKS4gIEltbWVkaWF0ZWx5XG5cdCAqXHRmb2xsb3dpbmcgdGhlIGRhdGFfZGV2aWNlX2RhdGFfb2ZmZXIgZXZlbnQsIHRoZSBuZXcgZGF0YV9vZmZlclxuXHQgKlx0b2JqZWN0IHdpbGwgc2VuZCBvdXQgZGF0YV9vZmZlci5vZmZlciBldmVudHMgdG8gZGVzY3JpYmUgdGhlXG5cdCAqXHRtaW1lIHR5cGVzIGl0IG9mZmVycy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIHRoZSBuZXcgZGF0YV9vZmZlciBvYmplY3QgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkYXRhT2ZmZXIoaWQpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGlzIHNlbnQgd2hlbiBhbiBhY3RpdmUgZHJhZy1hbmQtZHJvcCBwb2ludGVyIGVudGVyc1xuXHQgKlx0YSBzdXJmYWNlIG93bmVkIGJ5IHRoZSBjbGllbnQuICBUaGUgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgYXRcblx0ICpcdGVudGVyIHRpbWUgaXMgcHJvdmlkZWQgYnkgdGhlIHggYW5kIHkgYXJndW1lbnRzLCBpbiBzdXJmYWNlLWxvY2FsXG5cdCAqXHRjb29yZGluYXRlcy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBlbnRlciBldmVudCBcblx0ICogQHBhcmFtIHsqfSBzdXJmYWNlIGNsaWVudCBzdXJmYWNlIGVudGVyZWQgXG5cdCAqIEBwYXJhbSB7Rml4ZWR9IHggc3VyZmFjZS1sb2NhbCB4IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7Rml4ZWR9IHkgc3VyZmFjZS1sb2NhbCB5IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7Pyp9IGlkIHNvdXJjZSBkYXRhX29mZmVyIG9iamVjdCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGVudGVyKHNlcmlhbCwgc3VyZmFjZSwgeCwgeSwgaWQpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGlzIHNlbnQgd2hlbiB0aGUgZHJhZy1hbmQtZHJvcCBwb2ludGVyIGxlYXZlcyB0aGVcblx0ICpcdHN1cmZhY2UgYW5kIHRoZSBzZXNzaW9uIGVuZHMuICBUaGUgY2xpZW50IG11c3QgZGVzdHJveSB0aGVcblx0ICpcdHdsX2RhdGFfb2ZmZXIgaW50cm9kdWNlZCBhdCBlbnRlciB0aW1lIGF0IHRoaXMgcG9pbnQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRsZWF2ZSgpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGlzIHNlbnQgd2hlbiB0aGUgZHJhZy1hbmQtZHJvcCBwb2ludGVyIG1vdmVzIHdpdGhpblxuXHQgKlx0dGhlIGN1cnJlbnRseSBmb2N1c2VkIHN1cmZhY2UuIFRoZSBuZXcgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXJcblx0ICpcdGlzIHByb3ZpZGVkIGJ5IHRoZSB4IGFuZCB5IGFyZ3VtZW50cywgaW4gc3VyZmFjZS1sb2NhbFxuXHQgKlx0Y29vcmRpbmF0ZXMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIHRpbWVzdGFtcCB3aXRoIG1pbGxpc2Vjb25kIGdyYW51bGFyaXR5IFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB4IHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB5IHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0bW90aW9uKHRpbWUsIHgsIHkpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgZXZlbnQgaXMgc2VudCB3aGVuIGEgZHJhZy1hbmQtZHJvcCBvcGVyYXRpb24gaXMgZW5kZWRcblx0ICpcdGJlY2F1c2UgdGhlIGltcGxpY2l0IGdyYWIgaXMgcmVtb3ZlZC5cblx0ICpcblx0ICpcdFRoZSBkcmFnLWFuZC1kcm9wIGRlc3RpbmF0aW9uIGlzIGV4cGVjdGVkIHRvIGhvbm9yIHRoZSBsYXN0IGFjdGlvblxuXHQgKlx0cmVjZWl2ZWQgdGhyb3VnaCB3bF9kYXRhX29mZmVyLmFjdGlvbiwgaWYgdGhlIHJlc3VsdGluZyBhY3Rpb24gaXNcblx0ICpcdFwiY29weVwiIG9yIFwibW92ZVwiLCB0aGUgZGVzdGluYXRpb24gY2FuIHN0aWxsIHBlcmZvcm1cblx0ICpcdHdsX2RhdGFfb2ZmZXIucmVjZWl2ZSByZXF1ZXN0cywgYW5kIGlzIGV4cGVjdGVkIHRvIGVuZCBhbGxcblx0ICpcdHRyYW5zZmVycyB3aXRoIGEgd2xfZGF0YV9vZmZlci5maW5pc2ggcmVxdWVzdC5cblx0ICpcblx0ICpcdElmIHRoZSByZXN1bHRpbmcgYWN0aW9uIGlzIFwiYXNrXCIsIHRoZSBhY3Rpb24gd2lsbCBub3QgYmUgY29uc2lkZXJlZFxuXHQgKlx0ZmluYWwuIFRoZSBkcmFnLWFuZC1kcm9wIGRlc3RpbmF0aW9uIGlzIGV4cGVjdGVkIHRvIHBlcmZvcm0gb25lIGxhc3Rcblx0ICpcdHdsX2RhdGFfb2ZmZXIuc2V0X2FjdGlvbnMgcmVxdWVzdCwgb3Igd2xfZGF0YV9vZmZlci5kZXN0cm95IGluIG9yZGVyXG5cdCAqXHR0byBjYW5jZWwgdGhlIG9wZXJhdGlvbi5cblx0ICogICAgICBcblx0ICpcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRyb3AoKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIHNlbGVjdGlvbiBldmVudCBpcyBzZW50IG91dCB0byBub3RpZnkgdGhlIGNsaWVudCBvZiBhIG5ld1xuXHQgKlx0d2xfZGF0YV9vZmZlciBmb3IgdGhlIHNlbGVjdGlvbiBmb3IgdGhpcyBkZXZpY2UuICBUaGVcblx0ICpcdGRhdGFfZGV2aWNlLmRhdGFfb2ZmZXIgYW5kIHRoZSBkYXRhX29mZmVyLm9mZmVyIGV2ZW50cyBhcmVcblx0ICpcdHNlbnQgb3V0IGltbWVkaWF0ZWx5IGJlZm9yZSB0aGlzIGV2ZW50IHRvIGludHJvZHVjZSB0aGUgZGF0YVxuXHQgKlx0b2ZmZXIgb2JqZWN0LiAgVGhlIHNlbGVjdGlvbiBldmVudCBpcyBzZW50IHRvIGEgY2xpZW50XG5cdCAqXHRpbW1lZGlhdGVseSBiZWZvcmUgcmVjZWl2aW5nIGtleWJvYXJkIGZvY3VzIGFuZCB3aGVuIGEgbmV3XG5cdCAqXHRzZWxlY3Rpb24gaXMgc2V0IHdoaWxlIHRoZSBjbGllbnQgaGFzIGtleWJvYXJkIGZvY3VzLiAgVGhlXG5cdCAqXHRkYXRhX29mZmVyIGlzIHZhbGlkIHVudGlsIGEgbmV3IGRhdGFfb2ZmZXIgb3IgTlVMTCBpcyByZWNlaXZlZFxuXHQgKlx0b3IgdW50aWwgdGhlIGNsaWVudCBsb3NlcyBrZXlib2FyZCBmb2N1cy4gIFRoZSBjbGllbnQgbXVzdFxuXHQgKlx0ZGVzdHJveSB0aGUgcHJldmlvdXMgc2VsZWN0aW9uIGRhdGFfb2ZmZXIsIGlmIGFueSwgdXBvbiByZWNlaXZpbmdcblx0ICpcdHRoaXMgZXZlbnQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Pyp9IGlkIHNlbGVjdGlvbiBkYXRhX29mZmVyIG9iamVjdCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNlbGVjdGlvbihpZCkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgV2xEYXRhU291cmNlUHJveHkgZnJvbSAnLi9XbERhdGFTb3VyY2VQcm94eSdcbmltcG9ydCBXbERhdGFEZXZpY2VQcm94eSBmcm9tICcuL1dsRGF0YURldmljZVByb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoZSB3bF9kYXRhX2RldmljZV9tYW5hZ2VyIGlzIGEgc2luZ2xldG9uIGdsb2JhbCBvYmplY3QgdGhhdFxuICogICAgICBwcm92aWRlcyBhY2Nlc3MgdG8gaW50ZXItY2xpZW50IGRhdGEgdHJhbnNmZXIgbWVjaGFuaXNtcyBzdWNoIGFzXG4gKiAgICAgIGNvcHktYW5kLXBhc3RlIGFuZCBkcmFnLWFuZC1kcm9wLiAgVGhlc2UgbWVjaGFuaXNtcyBhcmUgdGllZCB0b1xuICogICAgICBhIHdsX3NlYXQgYW5kIHRoaXMgaW50ZXJmYWNlIGxldHMgYSBjbGllbnQgZ2V0IGEgd2xfZGF0YV9kZXZpY2VcbiAqICAgICAgY29ycmVzcG9uZGluZyB0byBhIHdsX3NlYXQuXG4gKlxuICogICAgICBEZXBlbmRpbmcgb24gdGhlIHZlcnNpb24gYm91bmQsIHRoZSBvYmplY3RzIGNyZWF0ZWQgZnJvbSB0aGUgYm91bmRcbiAqICAgICAgd2xfZGF0YV9kZXZpY2VfbWFuYWdlciBvYmplY3Qgd2lsbCBoYXZlIGRpZmZlcmVudCByZXF1aXJlbWVudHMgZm9yXG4gKiAgICAgIGZ1bmN0aW9uaW5nIHByb3Blcmx5LiBTZWUgd2xfZGF0YV9zb3VyY2Uuc2V0X2FjdGlvbnMsXG4gKiAgICAgIHdsX2RhdGFfb2ZmZXIuYWNjZXB0IGFuZCB3bF9kYXRhX29mZmVyLmZpbmlzaCBmb3IgZGV0YWlscy5cbiAqICAgIFxuICovXG5jbGFzcyBXbERhdGFEZXZpY2VNYW5hZ2VyUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRDcmVhdGUgYSBuZXcgZGF0YSBzb3VyY2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEByZXR1cm4ge1dsRGF0YVNvdXJjZVByb3h5fSBkYXRhIHNvdXJjZSB0byBjcmVhdGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjcmVhdGVEYXRhU291cmNlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAwLCBXbERhdGFTb3VyY2VQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Q3JlYXRlIGEgbmV3IGRhdGEgZGV2aWNlIGZvciBhIGdpdmVuIHNlYXQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc2VhdCBzZWF0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZGF0YSBkZXZpY2UgXG5cdCAqIEByZXR1cm4ge1dsRGF0YURldmljZVByb3h5fSBkYXRhIGRldmljZSB0byBjcmVhdGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRnZXREYXRhRGV2aWNlIChzZWF0KSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMSwgV2xEYXRhRGV2aWNlUHJveHksIFtuZXdPYmplY3QoKSwgb2JqZWN0KHNlYXQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbERhdGFEZXZpY2VNYW5hZ2VyRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG59XG5XbERhdGFEZXZpY2VNYW5hZ2VyUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX2RhdGFfZGV2aWNlX21hbmFnZXInXG5cbldsRGF0YURldmljZU1hbmFnZXJQcm94eS5EbmRBY3Rpb24gPSB7XG4gIC8qKlxuICAgKiBubyBhY3Rpb25cbiAgICovXG4gIG5vbmU6IDAsXG4gIC8qKlxuICAgKiBjb3B5IGFjdGlvblxuICAgKi9cbiAgY29weTogMSxcbiAgLyoqXG4gICAqIG1vdmUgYWN0aW9uXG4gICAqL1xuICBtb3ZlOiAyLFxuICAvKipcbiAgICogYXNrIGFjdGlvblxuICAgKi9cbiAgYXNrOiA0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsRGF0YURldmljZU1hbmFnZXJQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgV2xEYXRhT2ZmZXJQcm94eSBmcm9tICcuL1dsRGF0YU9mZmVyUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhlcmUgaXMgb25lIHdsX2RhdGFfZGV2aWNlIHBlciBzZWF0IHdoaWNoIGNhbiBiZSBvYnRhaW5lZFxuICogICAgICBmcm9tIHRoZSBnbG9iYWwgd2xfZGF0YV9kZXZpY2VfbWFuYWdlciBzaW5nbGV0b24uXG4gKlxuICogICAgICBBIHdsX2RhdGFfZGV2aWNlIHByb3ZpZGVzIGFjY2VzcyB0byBpbnRlci1jbGllbnQgZGF0YSB0cmFuc2ZlclxuICogICAgICBtZWNoYW5pc21zIHN1Y2ggYXMgY29weS1hbmQtcGFzdGUgYW5kIGRyYWctYW5kLWRyb3AuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xEYXRhRGV2aWNlUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgYXNrcyB0aGUgY29tcG9zaXRvciB0byBzdGFydCBhIGRyYWctYW5kLWRyb3Bcblx0ICpcdG9wZXJhdGlvbiBvbiBiZWhhbGYgb2YgdGhlIGNsaWVudC5cblx0ICpcblx0ICpcdFRoZSBzb3VyY2UgYXJndW1lbnQgaXMgdGhlIGRhdGEgc291cmNlIHRoYXQgcHJvdmlkZXMgdGhlIGRhdGFcblx0ICpcdGZvciB0aGUgZXZlbnR1YWwgZGF0YSB0cmFuc2Zlci4gSWYgc291cmNlIGlzIE5VTEwsIGVudGVyLCBsZWF2ZVxuXHQgKlx0YW5kIG1vdGlvbiBldmVudHMgYXJlIHNlbnQgb25seSB0byB0aGUgY2xpZW50IHRoYXQgaW5pdGlhdGVkIHRoZVxuXHQgKlx0ZHJhZyBhbmQgdGhlIGNsaWVudCBpcyBleHBlY3RlZCB0byBoYW5kbGUgdGhlIGRhdGEgcGFzc2luZ1xuXHQgKlx0aW50ZXJuYWxseS5cblx0ICpcblx0ICpcdFRoZSBvcmlnaW4gc3VyZmFjZSBpcyB0aGUgc3VyZmFjZSB3aGVyZSB0aGUgZHJhZyBvcmlnaW5hdGVzIGFuZFxuXHQgKlx0dGhlIGNsaWVudCBtdXN0IGhhdmUgYW4gYWN0aXZlIGltcGxpY2l0IGdyYWIgdGhhdCBtYXRjaGVzIHRoZVxuXHQgKlx0c2VyaWFsLlxuXHQgKlxuXHQgKlx0VGhlIGljb24gc3VyZmFjZSBpcyBhbiBvcHRpb25hbCAoY2FuIGJlIE5VTEwpIHN1cmZhY2UgdGhhdFxuXHQgKlx0cHJvdmlkZXMgYW4gaWNvbiB0byBiZSBtb3ZlZCBhcm91bmQgd2l0aCB0aGUgY3Vyc29yLiAgSW5pdGlhbGx5LFxuXHQgKlx0dGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgaWNvbiBzdXJmYWNlIGlzIHBsYWNlZCBhdCB0aGUgY3Vyc29yXG5cdCAqXHRob3RzcG90LCBidXQgc3Vic2VxdWVudCB3bF9zdXJmYWNlLmF0dGFjaCByZXF1ZXN0IGNhbiBtb3ZlIHRoZVxuXHQgKlx0cmVsYXRpdmUgcG9zaXRpb24uIEF0dGFjaCByZXF1ZXN0cyBtdXN0IGJlIGNvbmZpcm1lZCB3aXRoXG5cdCAqXHR3bF9zdXJmYWNlLmNvbW1pdCBhcyB1c3VhbC4gVGhlIGljb24gc3VyZmFjZSBpcyBnaXZlbiB0aGUgcm9sZSBvZlxuXHQgKlx0YSBkcmFnLWFuZC1kcm9wIGljb24uIElmIHRoZSBpY29uIHN1cmZhY2UgYWxyZWFkeSBoYXMgYW5vdGhlciByb2xlLFxuXHQgKlx0aXQgcmFpc2VzIGEgcHJvdG9jb2wgZXJyb3IuXG5cdCAqXG5cdCAqXHRUaGUgY3VycmVudCBhbmQgcGVuZGluZyBpbnB1dCByZWdpb25zIG9mIHRoZSBpY29uIHdsX3N1cmZhY2UgYXJlXG5cdCAqXHRjbGVhcmVkLCBhbmQgd2xfc3VyZmFjZS5zZXRfaW5wdXRfcmVnaW9uIGlzIGlnbm9yZWQgdW50aWwgdGhlXG5cdCAqXHR3bF9zdXJmYWNlIGlzIG5vIGxvbmdlciB1c2VkIGFzIHRoZSBpY29uIHN1cmZhY2UuIFdoZW4gdGhlIHVzZVxuXHQgKlx0YXMgYW4gaWNvbiBlbmRzLCB0aGUgY3VycmVudCBhbmQgcGVuZGluZyBpbnB1dCByZWdpb25zIGJlY29tZVxuXHQgKlx0dW5kZWZpbmVkLCBhbmQgdGhlIHdsX3N1cmZhY2UgaXMgdW5tYXBwZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Pyp9IHNvdXJjZSBkYXRhIHNvdXJjZSBmb3IgdGhlIGV2ZW50dWFsIHRyYW5zZmVyIFxuXHQgKiBAcGFyYW0geyp9IG9yaWdpbiBzdXJmYWNlIHdoZXJlIHRoZSBkcmFnIG9yaWdpbmF0ZXMgXG5cdCAqIEBwYXJhbSB7Pyp9IGljb24gZHJhZy1hbmQtZHJvcCBpY29uIHN1cmZhY2UgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgaW1wbGljaXQgZ3JhYiBvbiB0aGUgb3JpZ2luIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c3RhcnREcmFnIChzb3VyY2UsIG9yaWdpbiwgaWNvbiwgc2VyaWFsKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW29iamVjdE9wdGlvbmFsKHNvdXJjZSksIG9iamVjdChvcmlnaW4pLCBvYmplY3RPcHRpb25hbChpY29uKSwgdWludChzZXJpYWwpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGFza3MgdGhlIGNvbXBvc2l0b3IgdG8gc2V0IHRoZSBzZWxlY3Rpb25cblx0ICpcdHRvIHRoZSBkYXRhIGZyb20gdGhlIHNvdXJjZSBvbiBiZWhhbGYgb2YgdGhlIGNsaWVudC5cblx0ICpcblx0ICpcdFRvIHVuc2V0IHRoZSBzZWxlY3Rpb24sIHNldCB0aGUgc291cmNlIHRvIE5VTEwuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Pyp9IHNvdXJjZSBkYXRhIHNvdXJjZSBmb3IgdGhlIHNlbGVjdGlvbiBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGlzIHJlcXVlc3QgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRTZWxlY3Rpb24gKHNvdXJjZSwgc2VyaWFsKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMSwgW29iamVjdE9wdGlvbmFsKHNvdXJjZSksIHVpbnQoc2VyaWFsKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBkZXN0cm95cyB0aGUgZGF0YSBkZXZpY2UuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAyXG5cdCAqXG5cdCAqL1xuXHRyZWxlYXNlICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAyLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbERhdGFEZXZpY2VFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5kYXRhT2ZmZXIobmV3IFdsRGF0YU9mZmVyUHJveHkodGhpcy5fY29ubmVjdGlvbiwgbihtZXNzYWdlKSkpXG5cdH1cblxuXHRhc3luYyBbMV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmVudGVyKHUobWVzc2FnZSksIG8obWVzc2FnZSwgZmFsc2UsIHRoaXMuX2Nvbm5lY3Rpb24pLCBmKG1lc3NhZ2UpLCBmKG1lc3NhZ2UpLCBvKG1lc3NhZ2UsIHRydWUsIHRoaXMuX2Nvbm5lY3Rpb24pKVxuXHR9XG5cblx0YXN5bmMgWzJdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5sZWF2ZSgpXG5cdH1cblxuXHRhc3luYyBbM10gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLm1vdGlvbih1KG1lc3NhZ2UpLCBmKG1lc3NhZ2UpLCBmKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzRdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5kcm9wKClcblx0fVxuXG5cdGFzeW5jIFs1XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuc2VsZWN0aW9uKG8obWVzc2FnZSwgdHJ1ZSwgdGhpcy5fY29ubmVjdGlvbikpXG5cdH1cblxufVxuV2xEYXRhRGV2aWNlUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX2RhdGFfZGV2aWNlJ1xuXG5XbERhdGFEZXZpY2VQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIGdpdmVuIHdsX3N1cmZhY2UgaGFzIGFub3RoZXIgcm9sZVxuICAgKi9cbiAgcm9sZTogMFxufVxuXG5leHBvcnQgZGVmYXVsdCBXbERhdGFEZXZpY2VQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsRGF0YU9mZmVyRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdFNlbnQgaW1tZWRpYXRlbHkgYWZ0ZXIgY3JlYXRpbmcgdGhlIHdsX2RhdGFfb2ZmZXIgb2JqZWN0LiAgT25lXG5cdCAqXHRldmVudCBwZXIgb2ZmZXJlZCBtaW1lIHR5cGUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSBvZmZlcmVkIG1pbWUgdHlwZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdG9mZmVyKG1pbWVUeXBlKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpbmRpY2F0ZXMgdGhlIGFjdGlvbnMgb2ZmZXJlZCBieSB0aGUgZGF0YSBzb3VyY2UuIEl0XG5cdCAqXHR3aWxsIGJlIHNlbnQgcmlnaHQgYWZ0ZXIgd2xfZGF0YV9kZXZpY2UuZW50ZXIsIG9yIGFueXRpbWUgdGhlIHNvdXJjZVxuXHQgKlx0c2lkZSBjaGFuZ2VzIGl0cyBvZmZlcmVkIGFjdGlvbnMgdGhyb3VnaCB3bF9kYXRhX3NvdXJjZS5zZXRfYWN0aW9ucy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNvdXJjZUFjdGlvbnMgYWN0aW9ucyBvZmZlcmVkIGJ5IHRoZSBkYXRhIHNvdXJjZSBcblx0ICpcblx0ICogQHNpbmNlIDNcblx0ICpcblx0ICovXG5cdHNvdXJjZUFjdGlvbnMoc291cmNlQWN0aW9ucykge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgaW5kaWNhdGVzIHRoZSBhY3Rpb24gc2VsZWN0ZWQgYnkgdGhlIGNvbXBvc2l0b3IgYWZ0ZXJcblx0ICpcdG1hdGNoaW5nIHRoZSBzb3VyY2UvZGVzdGluYXRpb24gc2lkZSBhY3Rpb25zLiBPbmx5IG9uZSBhY3Rpb24gKG9yXG5cdCAqXHRub25lKSB3aWxsIGJlIG9mZmVyZWQgaGVyZS5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgY2FuIGJlIGVtaXR0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIHRoZSBkcmFnLWFuZC1kcm9wXG5cdCAqXHRvcGVyYXRpb24gaW4gcmVzcG9uc2UgdG8gZGVzdGluYXRpb24gc2lkZSBhY3Rpb24gY2hhbmdlcyB0aHJvdWdoXG5cdCAqXHR3bF9kYXRhX29mZmVyLnNldF9hY3Rpb25zLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCB3aWxsIG5vIGxvbmdlciBiZSBlbWl0dGVkIGFmdGVyIHdsX2RhdGFfZGV2aWNlLmRyb3Bcblx0ICpcdGhhcHBlbmVkIG9uIHRoZSBkcmFnLWFuZC1kcm9wIGRlc3RpbmF0aW9uLCB0aGUgY2xpZW50IG11c3Rcblx0ICpcdGhvbm9yIHRoZSBsYXN0IGFjdGlvbiByZWNlaXZlZCwgb3IgdGhlIGxhc3QgcHJlZmVycmVkIG9uZSBzZXRcblx0ICpcdHRocm91Z2ggd2xfZGF0YV9vZmZlci5zZXRfYWN0aW9ucyB3aGVuIGhhbmRsaW5nIGFuIFwiYXNrXCIgYWN0aW9uLlxuXHQgKlxuXHQgKlx0Q29tcG9zaXRvcnMgbWF5IGFsc28gY2hhbmdlIHRoZSBzZWxlY3RlZCBhY3Rpb24gb24gdGhlIGZseSwgbWFpbmx5XG5cdCAqXHRpbiByZXNwb25zZSB0byBrZXlib2FyZCBtb2RpZmllciBjaGFuZ2VzIGR1cmluZyB0aGUgZHJhZy1hbmQtZHJvcFxuXHQgKlx0b3BlcmF0aW9uLlxuXHQgKlxuXHQgKlx0VGhlIG1vc3QgcmVjZW50IGFjdGlvbiByZWNlaXZlZCBpcyBhbHdheXMgdGhlIHZhbGlkIG9uZS4gUHJpb3IgdG9cblx0ICpcdHJlY2VpdmluZyB3bF9kYXRhX2RldmljZS5kcm9wLCB0aGUgY2hvc2VuIGFjdGlvbiBtYXkgY2hhbmdlIChlLmcuXG5cdCAqXHRkdWUgdG8ga2V5Ym9hcmQgbW9kaWZpZXJzIGJlaW5nIHByZXNzZWQpLiBBdCB0aGUgdGltZSBvZiByZWNlaXZpbmdcblx0ICpcdHdsX2RhdGFfZGV2aWNlLmRyb3AgdGhlIGRyYWctYW5kLWRyb3AgZGVzdGluYXRpb24gbXVzdCBob25vciB0aGVcblx0ICpcdGxhc3QgYWN0aW9uIHJlY2VpdmVkLlxuXHQgKlxuXHQgKlx0QWN0aW9uIGNoYW5nZXMgbWF5IHN0aWxsIGhhcHBlbiBhZnRlciB3bF9kYXRhX2RldmljZS5kcm9wLFxuXHQgKlx0ZXNwZWNpYWxseSBvbiBcImFza1wiIGFjdGlvbnMsIHdoZXJlIHRoZSBkcmFnLWFuZC1kcm9wIGRlc3RpbmF0aW9uXG5cdCAqXHRtYXkgY2hvb3NlIGFub3RoZXIgYWN0aW9uIGFmdGVyd2FyZHMuIEFjdGlvbiBjaGFuZ2VzIGhhcHBlbmluZ1xuXHQgKlx0YXQgdGhpcyBzdGFnZSBhcmUgYWx3YXlzIHRoZSByZXN1bHQgb2YgaW50ZXItY2xpZW50IG5lZ290aWF0aW9uLCB0aGVcblx0ICpcdGNvbXBvc2l0b3Igc2hhbGwgbm8gbG9uZ2VyIGJlIGFibGUgdG8gaW5kdWNlIGEgZGlmZmVyZW50IGFjdGlvbi5cblx0ICpcblx0ICpcdFVwb24gXCJhc2tcIiBhY3Rpb25zLCBpdCBpcyBleHBlY3RlZCB0aGF0IHRoZSBkcmFnLWFuZC1kcm9wIGRlc3RpbmF0aW9uXG5cdCAqXHRtYXkgcG90ZW50aWFsbHkgY2hvb3NlIGEgZGlmZmVyZW50IGFjdGlvbiBhbmQvb3IgbWltZSB0eXBlLFxuXHQgKlx0YmFzZWQgb24gd2xfZGF0YV9vZmZlci5zb3VyY2VfYWN0aW9ucyBhbmQgZmluYWxseSBjaG9zZW4gYnkgdGhlXG5cdCAqXHR1c2VyIChlLmcuIHBvcHBpbmcgdXAgYSBtZW51IHdpdGggdGhlIGF2YWlsYWJsZSBvcHRpb25zKS4gVGhlXG5cdCAqXHRmaW5hbCB3bF9kYXRhX29mZmVyLnNldF9hY3Rpb25zIGFuZCB3bF9kYXRhX29mZmVyLmFjY2VwdCByZXF1ZXN0c1xuXHQgKlx0bXVzdCBoYXBwZW4gYmVmb3JlIHRoZSBjYWxsIHRvIHdsX2RhdGFfb2ZmZXIuZmluaXNoLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZG5kQWN0aW9uIGFjdGlvbiBzZWxlY3RlZCBieSB0aGUgY29tcG9zaXRvciBcblx0ICpcblx0ICogQHNpbmNlIDNcblx0ICpcblx0ICovXG5cdGFjdGlvbihkbmRBY3Rpb24pIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIEEgd2xfZGF0YV9vZmZlciByZXByZXNlbnRzIGEgcGllY2Ugb2YgZGF0YSBvZmZlcmVkIGZvciB0cmFuc2ZlclxuICogICAgICBieSBhbm90aGVyIGNsaWVudCAodGhlIHNvdXJjZSBjbGllbnQpLiAgSXQgaXMgdXNlZCBieSB0aGVcbiAqICAgICAgY29weS1hbmQtcGFzdGUgYW5kIGRyYWctYW5kLWRyb3AgbWVjaGFuaXNtcy4gIFRoZSBvZmZlclxuICogICAgICBkZXNjcmliZXMgdGhlIGRpZmZlcmVudCBtaW1lIHR5cGVzIHRoYXQgdGhlIGRhdGEgY2FuIGJlXG4gKiAgICAgIGNvbnZlcnRlZCB0byBhbmQgcHJvdmlkZXMgdGhlIG1lY2hhbmlzbSBmb3IgdHJhbnNmZXJyaW5nIHRoZVxuICogICAgICBkYXRhIGRpcmVjdGx5IGZyb20gdGhlIHNvdXJjZSBjbGllbnQuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xEYXRhT2ZmZXJQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdEluZGljYXRlIHRoYXQgdGhlIGNsaWVudCBjYW4gYWNjZXB0IHRoZSBnaXZlbiBtaW1lIHR5cGUsIG9yXG5cdCAqXHROVUxMIGZvciBub3QgYWNjZXB0ZWQuXG5cdCAqXG5cdCAqXHRGb3Igb2JqZWN0cyBvZiB2ZXJzaW9uIDIgb3Igb2xkZXIsIHRoaXMgcmVxdWVzdCBpcyB1c2VkIGJ5IHRoZVxuXHQgKlx0Y2xpZW50IHRvIGdpdmUgZmVlZGJhY2sgd2hldGhlciB0aGUgY2xpZW50IGNhbiByZWNlaXZlIHRoZSBnaXZlblxuXHQgKlx0bWltZSB0eXBlLCBvciBOVUxMIGlmIG5vbmUgaXMgYWNjZXB0ZWQ7IHRoZSBmZWVkYmFjayBkb2VzIG5vdFxuXHQgKlx0ZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uIHN1Y2NlZWRzIG9yIG5vdC5cblx0ICpcblx0ICpcdEZvciBvYmplY3RzIG9mIHZlcnNpb24gMyBvciBuZXdlciwgdGhpcyByZXF1ZXN0IGRldGVybWluZXMgdGhlXG5cdCAqXHRmaW5hbCByZXN1bHQgb2YgdGhlIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uLiBJZiB0aGUgZW5kIHJlc3VsdFxuXHQgKlx0aXMgdGhhdCBubyBtaW1lIHR5cGVzIHdlcmUgYWNjZXB0ZWQsIHRoZSBkcmFnLWFuZC1kcm9wIG9wZXJhdGlvblxuXHQgKlx0d2lsbCBiZSBjYW5jZWxsZWQgYW5kIHRoZSBjb3JyZXNwb25kaW5nIGRyYWcgc291cmNlIHdpbGwgcmVjZWl2ZVxuXHQgKlx0d2xfZGF0YV9zb3VyY2UuY2FuY2VsbGVkLiBDbGllbnRzIG1heSBzdGlsbCB1c2UgdGhpcyBldmVudCBpblxuXHQgKlx0Y29uanVuY3Rpb24gd2l0aCB3bF9kYXRhX3NvdXJjZS5hY3Rpb24gZm9yIGZlZWRiYWNrLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGFjY2VwdCByZXF1ZXN0IFxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IG1pbWVUeXBlIG1pbWUgdHlwZSBhY2NlcHRlZCBieSB0aGUgY2xpZW50IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0YWNjZXB0IChzZXJpYWwsIG1pbWVUeXBlKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW3VpbnQoc2VyaWFsKSwgc3RyaW5nT3B0aW9uYWwobWltZVR5cGUpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VG8gdHJhbnNmZXIgdGhlIG9mZmVyZWQgZGF0YSwgdGhlIGNsaWVudCBpc3N1ZXMgdGhpcyByZXF1ZXN0XG5cdCAqXHRhbmQgaW5kaWNhdGVzIHRoZSBtaW1lIHR5cGUgaXQgd2FudHMgdG8gcmVjZWl2ZS4gIFRoZSB0cmFuc2ZlclxuXHQgKlx0aGFwcGVucyB0aHJvdWdoIHRoZSBwYXNzZWQgZmlsZSBkZXNjcmlwdG9yICh0eXBpY2FsbHkgY3JlYXRlZFxuXHQgKlx0d2l0aCB0aGUgcGlwZSBzeXN0ZW0gY2FsbCkuICBUaGUgc291cmNlIGNsaWVudCB3cml0ZXMgdGhlIGRhdGFcblx0ICpcdGluIHRoZSBtaW1lIHR5cGUgcmVwcmVzZW50YXRpb24gcmVxdWVzdGVkIGFuZCB0aGVuIGNsb3NlcyB0aGVcblx0ICpcdGZpbGUgZGVzY3JpcHRvci5cblx0ICpcblx0ICpcdFRoZSByZWNlaXZpbmcgY2xpZW50IHJlYWRzIGZyb20gdGhlIHJlYWQgZW5kIG9mIHRoZSBwaXBlIHVudGlsXG5cdCAqXHRFT0YgYW5kIHRoZW4gY2xvc2VzIGl0cyBlbmQsIGF0IHdoaWNoIHBvaW50IHRoZSB0cmFuc2ZlciBpc1xuXHQgKlx0Y29tcGxldGUuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgbWF5IGhhcHBlbiBtdWx0aXBsZSB0aW1lcyBmb3IgZGlmZmVyZW50IG1pbWUgdHlwZXMsXG5cdCAqXHRib3RoIGJlZm9yZSBhbmQgYWZ0ZXIgd2xfZGF0YV9kZXZpY2UuZHJvcC4gRHJhZy1hbmQtZHJvcCBkZXN0aW5hdGlvblxuXHQgKlx0Y2xpZW50cyBtYXkgcHJlZW1wdGl2ZWx5IGZldGNoIGRhdGEgb3IgZXhhbWluZSBpdCBtb3JlIGNsb3NlbHkgdG9cblx0ICpcdGRldGVybWluZSBhY2NlcHRhbmNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWltZVR5cGUgbWltZSB0eXBlIGRlc2lyZWQgYnkgcmVjZWl2ZXIgXG5cdCAqIEBwYXJhbSB7V2ViRkR9IGZkIGZpbGUgZGVzY3JpcHRvciBmb3IgZGF0YSB0cmFuc2ZlciBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHJlY2VpdmUgKG1pbWVUeXBlLCBmZCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtzdHJpbmcobWltZVR5cGUpLCBmaWxlRGVzY3JpcHRvcihmZCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHREZXN0cm95IHRoZSBkYXRhIG9mZmVyLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGVzdHJveSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMiwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdE5vdGlmaWVzIHRoZSBjb21wb3NpdG9yIHRoYXQgdGhlIGRyYWcgZGVzdGluYXRpb24gc3VjY2Vzc2Z1bGx5XG5cdCAqXHRmaW5pc2hlZCB0aGUgZHJhZy1hbmQtZHJvcCBvcGVyYXRpb24uXG5cdCAqXG5cdCAqXHRVcG9uIHJlY2VpdmluZyB0aGlzIHJlcXVlc3QsIHRoZSBjb21wb3NpdG9yIHdpbGwgZW1pdFxuXHQgKlx0d2xfZGF0YV9zb3VyY2UuZG5kX2ZpbmlzaGVkIG9uIHRoZSBkcmFnIHNvdXJjZSBjbGllbnQuXG5cdCAqXG5cdCAqXHRJdCBpcyBhIGNsaWVudCBlcnJvciB0byBwZXJmb3JtIG90aGVyIHJlcXVlc3RzIHRoYW5cblx0ICpcdHdsX2RhdGFfb2ZmZXIuZGVzdHJveSBhZnRlciB0aGlzIG9uZS4gSXQgaXMgYWxzbyBhbiBlcnJvciB0byBwZXJmb3JtXG5cdCAqXHR0aGlzIHJlcXVlc3QgYWZ0ZXIgYSBOVUxMIG1pbWUgdHlwZSBoYXMgYmVlbiBzZXQgaW5cblx0ICpcdHdsX2RhdGFfb2ZmZXIuYWNjZXB0IG9yIG5vIGFjdGlvbiB3YXMgcmVjZWl2ZWQgdGhyb3VnaFxuXHQgKlx0d2xfZGF0YV9vZmZlci5hY3Rpb24uXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRmaW5pc2ggKCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDMsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXRzIHRoZSBhY3Rpb25zIHRoYXQgdGhlIGRlc3RpbmF0aW9uIHNpZGUgY2xpZW50IHN1cHBvcnRzIGZvclxuXHQgKlx0dGhpcyBvcGVyYXRpb24uIFRoaXMgcmVxdWVzdCBtYXkgdHJpZ2dlciB0aGUgZW1pc3Npb24gb2Zcblx0ICpcdHdsX2RhdGFfc291cmNlLmFjdGlvbiBhbmQgd2xfZGF0YV9vZmZlci5hY3Rpb24gZXZlbnRzIGlmIHRoZSBjb21wb3NpdG9yXG5cdCAqXHRuZWVkcyB0byBjaGFuZ2UgdGhlIHNlbGVjdGVkIGFjdGlvbi5cblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBjYW4gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzIHRocm91Z2hvdXQgdGhlXG5cdCAqXHRkcmFnLWFuZC1kcm9wIG9wZXJhdGlvbiwgdHlwaWNhbGx5IGluIHJlc3BvbnNlIHRvIHdsX2RhdGFfZGV2aWNlLmVudGVyXG5cdCAqXHRvciB3bF9kYXRhX2RldmljZS5tb3Rpb24gZXZlbnRzLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGRldGVybWluZXMgdGhlIGZpbmFsIHJlc3VsdCBvZiB0aGUgZHJhZy1hbmQtZHJvcFxuXHQgKlx0b3BlcmF0aW9uLiBJZiB0aGUgZW5kIHJlc3VsdCBpcyB0aGF0IG5vIGFjdGlvbiBpcyBhY2NlcHRlZCxcblx0ICpcdHRoZSBkcmFnIHNvdXJjZSB3aWxsIHJlY2VpdmUgd2xfZHJhZ19zb3VyY2UuY2FuY2VsbGVkLlxuXHQgKlxuXHQgKlx0VGhlIGRuZF9hY3Rpb25zIGFyZ3VtZW50IG11c3QgY29udGFpbiBvbmx5IHZhbHVlcyBleHByZXNzZWQgaW4gdGhlXG5cdCAqXHR3bF9kYXRhX2RldmljZV9tYW5hZ2VyLmRuZF9hY3Rpb25zIGVudW0sIGFuZCB0aGUgcHJlZmVycmVkX2FjdGlvblxuXHQgKlx0YXJndW1lbnQgbXVzdCBvbmx5IGNvbnRhaW4gb25lIG9mIHRob3NlIHZhbHVlcyBzZXQsIG90aGVyd2lzZSBpdFxuXHQgKlx0d2lsbCByZXN1bHQgaW4gYSBwcm90b2NvbCBlcnJvci5cblx0ICpcblx0ICpcdFdoaWxlIG1hbmFnaW5nIGFuIFwiYXNrXCIgYWN0aW9uLCB0aGUgZGVzdGluYXRpb24gZHJhZy1hbmQtZHJvcCBjbGllbnRcblx0ICpcdG1heSBwZXJmb3JtIGZ1cnRoZXIgd2xfZGF0YV9vZmZlci5yZWNlaXZlIHJlcXVlc3RzLCBhbmQgaXMgZXhwZWN0ZWRcblx0ICpcdHRvIHBlcmZvcm0gb25lIGxhc3Qgd2xfZGF0YV9vZmZlci5zZXRfYWN0aW9ucyByZXF1ZXN0IHdpdGggYSBwcmVmZXJyZWRcblx0ICpcdGFjdGlvbiBvdGhlciB0aGFuIFwiYXNrXCIgKGFuZCBvcHRpb25hbGx5IHdsX2RhdGFfb2ZmZXIuYWNjZXB0KSBiZWZvcmVcblx0ICpcdHJlcXVlc3Rpbmcgd2xfZGF0YV9vZmZlci5maW5pc2gsIGluIG9yZGVyIHRvIGNvbnZleSB0aGUgYWN0aW9uIHNlbGVjdGVkXG5cdCAqXHRieSB0aGUgdXNlci4gSWYgdGhlIHByZWZlcnJlZCBhY3Rpb24gaXMgbm90IGluIHRoZVxuXHQgKlx0d2xfZGF0YV9vZmZlci5zb3VyY2VfYWN0aW9ucyBtYXNrLCBhbiBlcnJvciB3aWxsIGJlIHJhaXNlZC5cblx0ICpcblx0ICpcdElmIHRoZSBcImFza1wiIGFjdGlvbiBpcyBkaXNtaXNzZWQgKGUuZy4gdXNlciBjYW5jZWxsYXRpb24pLCB0aGUgY2xpZW50XG5cdCAqXHRpcyBleHBlY3RlZCB0byBwZXJmb3JtIHdsX2RhdGFfb2ZmZXIuZGVzdHJveSByaWdodCBhd2F5LlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGNhbiBvbmx5IGJlIG1hZGUgb24gZHJhZy1hbmQtZHJvcCBvZmZlcnMsIGEgcHJvdG9jb2wgZXJyb3Jcblx0ICpcdHdpbGwgYmUgcmFpc2VkIG90aGVyd2lzZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRuZEFjdGlvbnMgYWN0aW9ucyBzdXBwb3J0ZWQgYnkgdGhlIGRlc3RpbmF0aW9uIGNsaWVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHByZWZlcnJlZEFjdGlvbiBhY3Rpb24gcHJlZmVycmVkIGJ5IHRoZSBkZXN0aW5hdGlvbiBjbGllbnQgXG5cdCAqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRzZXRBY3Rpb25zIChkbmRBY3Rpb25zLCBwcmVmZXJyZWRBY3Rpb24pIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA0LCBbdWludChkbmRBY3Rpb25zKSwgdWludChwcmVmZXJyZWRBY3Rpb24pXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbERhdGFPZmZlckV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLm9mZmVyKHMobWVzc2FnZSwgZmFsc2UpKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5zb3VyY2VBY3Rpb25zKHUobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbMl0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmFjdGlvbih1KG1lc3NhZ2UpKVxuXHR9XG5cbn1cbldsRGF0YU9mZmVyUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX2RhdGFfb2ZmZXInXG5cbldsRGF0YU9mZmVyUHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiBmaW5pc2ggcmVxdWVzdCB3YXMgY2FsbGVkIHVudGltZWx5XG4gICAqL1xuICBpbnZhbGlkRmluaXNoOiAwLFxuICAvKipcbiAgICogYWN0aW9uIG1hc2sgY29udGFpbnMgaW52YWxpZCB2YWx1ZXNcbiAgICovXG4gIGludmFsaWRBY3Rpb25NYXNrOiAxLFxuICAvKipcbiAgICogYWN0aW9uIGFyZ3VtZW50IGhhcyBhbiBpbnZhbGlkIHZhbHVlXG4gICAqL1xuICBpbnZhbGlkQWN0aW9uOiAyLFxuICAvKipcbiAgICogb2ZmZXIgZG9lc24ndCBhY2NlcHQgdGhpcyByZXF1ZXN0XG4gICAqL1xuICBpbnZhbGlkT2ZmZXI6IDNcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2xEYXRhT2ZmZXJQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsRGF0YVNvdXJjZUV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZW50IHdoZW4gYSB0YXJnZXQgYWNjZXB0cyBwb2ludGVyX2ZvY3VzIG9yIG1vdGlvbiBldmVudHMuICBJZlxuXHQgKlx0YSB0YXJnZXQgZG9lcyBub3QgYWNjZXB0IGFueSBvZiB0aGUgb2ZmZXJlZCB0eXBlcywgdHlwZSBpcyBOVUxMLlxuXHQgKlxuXHQgKlx0VXNlZCBmb3IgZmVlZGJhY2sgZHVyaW5nIGRyYWctYW5kLWRyb3AuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7P3N0cmluZ30gbWltZVR5cGUgbWltZSB0eXBlIGFjY2VwdGVkIGJ5IHRoZSB0YXJnZXQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHR0YXJnZXQobWltZVR5cGUpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRSZXF1ZXN0IGZvciBkYXRhIGZyb20gdGhlIGNsaWVudC4gIFNlbmQgdGhlIGRhdGEgYXMgdGhlXG5cdCAqXHRzcGVjaWZpZWQgbWltZSB0eXBlIG92ZXIgdGhlIHBhc3NlZCBmaWxlIGRlc2NyaXB0b3IsIHRoZW5cblx0ICpcdGNsb3NlIGl0LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWltZVR5cGUgbWltZSB0eXBlIGZvciB0aGUgZGF0YSBcblx0ICogQHBhcmFtIHtXZWJGRH0gZmQgZmlsZSBkZXNjcmlwdG9yIGZvciB0aGUgZGF0YSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNlbmQobWltZVR5cGUsIGZkKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBkYXRhIHNvdXJjZSBpcyBubyBsb25nZXIgdmFsaWQuIFRoZXJlIGFyZSBzZXZlcmFsIHJlYXNvbnMgd2h5XG5cdCAqXHR0aGlzIGNvdWxkIGhhcHBlbjpcblx0ICpcblx0ICpcdC0gVGhlIGRhdGEgc291cmNlIGhhcyBiZWVuIHJlcGxhY2VkIGJ5IGFub3RoZXIgZGF0YSBzb3VyY2UuXG5cdCAqXHQtIFRoZSBkcmFnLWFuZC1kcm9wIG9wZXJhdGlvbiB3YXMgcGVyZm9ybWVkLCBidXQgdGhlIGRyb3AgZGVzdGluYXRpb25cblx0ICpcdCAgZGlkIG5vdCBhY2NlcHQgYW55IG9mIHRoZSBtaW1lIHR5cGVzIG9mZmVyZWQgdGhyb3VnaFxuXHQgKlx0ICB3bF9kYXRhX3NvdXJjZS50YXJnZXQuXG5cdCAqXHQtIFRoZSBkcmFnLWFuZC1kcm9wIG9wZXJhdGlvbiB3YXMgcGVyZm9ybWVkLCBidXQgdGhlIGRyb3AgZGVzdGluYXRpb25cblx0ICpcdCAgZGlkIG5vdCBzZWxlY3QgYW55IG9mIHRoZSBhY3Rpb25zIHByZXNlbnQgaW4gdGhlIG1hc2sgb2ZmZXJlZCB0aHJvdWdoXG5cdCAqXHQgIHdsX2RhdGFfc291cmNlLmFjdGlvbi5cblx0ICpcdC0gVGhlIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uIHdhcyBwZXJmb3JtZWQgYnV0IGRpZG4ndCBoYXBwZW4gb3ZlciBhXG5cdCAqXHQgIHN1cmZhY2UuXG5cdCAqXHQtIFRoZSBjb21wb3NpdG9yIGNhbmNlbGxlZCB0aGUgZHJhZy1hbmQtZHJvcCBvcGVyYXRpb24gKGUuZy4gY29tcG9zaXRvclxuXHQgKlx0ICBkZXBlbmRlbnQgdGltZW91dHMgdG8gYXZvaWQgc3RhbGUgZHJhZy1hbmQtZHJvcCB0cmFuc2ZlcnMpLlxuXHQgKlxuXHQgKlx0VGhlIGNsaWVudCBzaG91bGQgY2xlYW4gdXAgYW5kIGRlc3Ryb3kgdGhpcyBkYXRhIHNvdXJjZS5cblx0ICpcblx0ICpcdEZvciBvYmplY3RzIG9mIHZlcnNpb24gMiBvciBvbGRlciwgd2xfZGF0YV9zb3VyY2UuY2FuY2VsbGVkIHdpbGxcblx0ICpcdG9ubHkgYmUgZW1pdHRlZCBpZiB0aGUgZGF0YSBzb3VyY2Ugd2FzIHJlcGxhY2VkIGJ5IGFub3RoZXIgZGF0YVxuXHQgKlx0c291cmNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y2FuY2VsbGVkKCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSB1c2VyIHBlcmZvcm1lZCB0aGUgZHJvcCBhY3Rpb24uIFRoaXMgZXZlbnQgZG9lcyBub3QgaW5kaWNhdGVcblx0ICpcdGFjY2VwdGFuY2UsIHdsX2RhdGFfc291cmNlLmNhbmNlbGxlZCBtYXkgc3RpbGwgYmUgZW1pdHRlZCBhZnRlcndhcmRzXG5cdCAqXHRpZiB0aGUgZHJvcCBkZXN0aW5hdGlvbiBkb2VzIG5vdCBhY2NlcHQgYW55IG1pbWUgdHlwZS5cblx0ICpcblx0ICpcdEhvd2V2ZXIsIHRoaXMgZXZlbnQgbWlnaHQgaG93ZXZlciBub3QgYmUgcmVjZWl2ZWQgaWYgdGhlIGNvbXBvc2l0b3Jcblx0ICpcdGNhbmNlbGxlZCB0aGUgZHJhZy1hbmQtZHJvcCBvcGVyYXRpb24gYmVmb3JlIHRoaXMgZXZlbnQgY291bGQgaGFwcGVuLlxuXHQgKlxuXHQgKlx0Tm90ZSB0aGF0IHRoZSBkYXRhX3NvdXJjZSBtYXkgc3RpbGwgYmUgdXNlZCBpbiB0aGUgZnV0dXJlIGFuZCBzaG91bGRcblx0ICpcdG5vdCBiZSBkZXN0cm95ZWQgaGVyZS5cblx0ICogICAgICBcblx0ICpcblx0ICpcblx0ICogQHNpbmNlIDNcblx0ICpcblx0ICovXG5cdGRuZERyb3BQZXJmb3JtZWQoKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIGRyb3AgZGVzdGluYXRpb24gZmluaXNoZWQgaW50ZXJvcGVyYXRpbmcgd2l0aCB0aGlzIGRhdGFcblx0ICpcdHNvdXJjZSwgc28gdGhlIGNsaWVudCBpcyBub3cgZnJlZSB0byBkZXN0cm95IHRoaXMgZGF0YSBzb3VyY2UgYW5kXG5cdCAqXHRmcmVlIGFsbCBhc3NvY2lhdGVkIGRhdGEuXG5cdCAqXG5cdCAqXHRJZiB0aGUgYWN0aW9uIHVzZWQgdG8gcGVyZm9ybSB0aGUgb3BlcmF0aW9uIHdhcyBcIm1vdmVcIiwgdGhlXG5cdCAqXHRzb3VyY2UgY2FuIG5vdyBkZWxldGUgdGhlIHRyYW5zZmVycmVkIGRhdGEuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRkbmRGaW5pc2hlZCgpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGluZGljYXRlcyB0aGUgYWN0aW9uIHNlbGVjdGVkIGJ5IHRoZSBjb21wb3NpdG9yIGFmdGVyXG5cdCAqXHRtYXRjaGluZyB0aGUgc291cmNlL2Rlc3RpbmF0aW9uIHNpZGUgYWN0aW9ucy4gT25seSBvbmUgYWN0aW9uIChvclxuXHQgKlx0bm9uZSkgd2lsbCBiZSBvZmZlcmVkIGhlcmUuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGNhbiBiZSBlbWl0dGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyB0aGUgZHJhZy1hbmQtZHJvcFxuXHQgKlx0b3BlcmF0aW9uLCBtYWlubHkgaW4gcmVzcG9uc2UgdG8gZGVzdGluYXRpb24gc2lkZSBjaGFuZ2VzIHRocm91Z2hcblx0ICpcdHdsX2RhdGFfb2ZmZXIuc2V0X2FjdGlvbnMsIGFuZCBhcyB0aGUgZGF0YSBkZXZpY2UgZW50ZXJzL2xlYXZlc1xuXHQgKlx0c3VyZmFjZXMuXG5cdCAqXG5cdCAqXHRJdCBpcyBvbmx5IHBvc3NpYmxlIHRvIHJlY2VpdmUgdGhpcyBldmVudCBhZnRlclxuXHQgKlx0d2xfZGF0YV9zb3VyY2UuZG5kX2Ryb3BfcGVyZm9ybWVkIGlmIHRoZSBkcmFnLWFuZC1kcm9wIG9wZXJhdGlvblxuXHQgKlx0ZW5kZWQgaW4gYW4gXCJhc2tcIiBhY3Rpb24sIGluIHdoaWNoIGNhc2UgdGhlIGZpbmFsIHdsX2RhdGFfc291cmNlLmFjdGlvblxuXHQgKlx0ZXZlbnQgd2lsbCBoYXBwZW4gaW1tZWRpYXRlbHkgYmVmb3JlIHdsX2RhdGFfc291cmNlLmRuZF9maW5pc2hlZC5cblx0ICpcblx0ICpcdENvbXBvc2l0b3JzIG1heSBhbHNvIGNoYW5nZSB0aGUgc2VsZWN0ZWQgYWN0aW9uIG9uIHRoZSBmbHksIG1haW5seVxuXHQgKlx0aW4gcmVzcG9uc2UgdG8ga2V5Ym9hcmQgbW9kaWZpZXIgY2hhbmdlcyBkdXJpbmcgdGhlIGRyYWctYW5kLWRyb3Bcblx0ICpcdG9wZXJhdGlvbi5cblx0ICpcblx0ICpcdFRoZSBtb3N0IHJlY2VudCBhY3Rpb24gcmVjZWl2ZWQgaXMgYWx3YXlzIHRoZSB2YWxpZCBvbmUuIFRoZSBjaG9zZW5cblx0ICpcdGFjdGlvbiBtYXkgY2hhbmdlIGFsb25nc2lkZSBuZWdvdGlhdGlvbiAoZS5nLiBhbiBcImFza1wiIGFjdGlvbiBjYW4gdHVyblxuXHQgKlx0aW50byBhIFwibW92ZVwiIG9wZXJhdGlvbiksIHNvIHRoZSBlZmZlY3RzIG9mIHRoZSBmaW5hbCBhY3Rpb24gbXVzdFxuXHQgKlx0YWx3YXlzIGJlIGFwcGxpZWQgaW4gd2xfZGF0YV9vZmZlci5kbmRfZmluaXNoZWQuXG5cdCAqXG5cdCAqXHRDbGllbnRzIGNhbiB0cmlnZ2VyIGN1cnNvciBzdXJmYWNlIGNoYW5nZXMgZnJvbSB0aGlzIHBvaW50LCBzb1xuXHQgKlx0dGhleSByZWZsZWN0IHRoZSBjdXJyZW50IGFjdGlvbi5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRuZEFjdGlvbiBhY3Rpb24gc2VsZWN0ZWQgYnkgdGhlIGNvbXBvc2l0b3IgXG5cdCAqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRhY3Rpb24oZG5kQWN0aW9uKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBUaGUgd2xfZGF0YV9zb3VyY2Ugb2JqZWN0IGlzIHRoZSBzb3VyY2Ugc2lkZSBvZiBhIHdsX2RhdGFfb2ZmZXIuXG4gKiAgICAgIEl0IGlzIGNyZWF0ZWQgYnkgdGhlIHNvdXJjZSBjbGllbnQgaW4gYSBkYXRhIHRyYW5zZmVyIGFuZFxuICogICAgICBwcm92aWRlcyBhIHdheSB0byBkZXNjcmliZSB0aGUgb2ZmZXJlZCBkYXRhIGFuZCBhIHdheSB0byByZXNwb25kXG4gKiAgICAgIHRvIHJlcXVlc3RzIHRvIHRyYW5zZmVyIHRoZSBkYXRhLlxuICogICAgXG4gKi9cbmNsYXNzIFdsRGF0YVNvdXJjZVByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGFkZHMgYSBtaW1lIHR5cGUgdG8gdGhlIHNldCBvZiBtaW1lIHR5cGVzXG5cdCAqXHRhZHZlcnRpc2VkIHRvIHRhcmdldHMuICBDYW4gYmUgY2FsbGVkIHNldmVyYWwgdGltZXMgdG8gb2ZmZXJcblx0ICpcdG11bHRpcGxlIHR5cGVzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWltZVR5cGUgbWltZSB0eXBlIG9mZmVyZWQgYnkgdGhlIGRhdGEgc291cmNlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0b2ZmZXIgKG1pbWVUeXBlKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW3N0cmluZyhtaW1lVHlwZSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHREZXN0cm95IHRoZSBkYXRhIHNvdXJjZS5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXRzIHRoZSBhY3Rpb25zIHRoYXQgdGhlIHNvdXJjZSBzaWRlIGNsaWVudCBzdXBwb3J0cyBmb3IgdGhpc1xuXHQgKlx0b3BlcmF0aW9uLiBUaGlzIHJlcXVlc3QgbWF5IHRyaWdnZXIgd2xfZGF0YV9zb3VyY2UuYWN0aW9uIGFuZFxuXHQgKlx0d2xfZGF0YV9vZmZlci5hY3Rpb24gZXZlbnRzIGlmIHRoZSBjb21wb3NpdG9yIG5lZWRzIHRvIGNoYW5nZSB0aGVcblx0ICpcdHNlbGVjdGVkIGFjdGlvbi5cblx0ICpcblx0ICpcdFRoZSBkbmRfYWN0aW9ucyBhcmd1bWVudCBtdXN0IGNvbnRhaW4gb25seSB2YWx1ZXMgZXhwcmVzc2VkIGluIHRoZVxuXHQgKlx0d2xfZGF0YV9kZXZpY2VfbWFuYWdlci5kbmRfYWN0aW9ucyBlbnVtLCBvdGhlcndpc2UgaXQgd2lsbCByZXN1bHRcblx0ICpcdGluIGEgcHJvdG9jb2wgZXJyb3IuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgbXVzdCBiZSBtYWRlIG9uY2Ugb25seSwgYW5kIGNhbiBvbmx5IGJlIG1hZGUgb24gc291cmNlc1xuXHQgKlx0dXNlZCBpbiBkcmFnLWFuZC1kcm9wLCBzbyBpdCBtdXN0IGJlIHBlcmZvcm1lZCBiZWZvcmVcblx0ICpcdHdsX2RhdGFfZGV2aWNlLnN0YXJ0X2RyYWcuIEF0dGVtcHRpbmcgdG8gdXNlIHRoZSBzb3VyY2Ugb3RoZXIgdGhhblxuXHQgKlx0Zm9yIGRyYWctYW5kLWRyb3Agd2lsbCByYWlzZSBhIHByb3RvY29sIGVycm9yLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZG5kQWN0aW9ucyBhY3Rpb25zIHN1cHBvcnRlZCBieSB0aGUgZGF0YSBzb3VyY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRzZXRBY3Rpb25zIChkbmRBY3Rpb25zKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMiwgW3VpbnQoZG5kQWN0aW9ucyldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsRGF0YVNvdXJjZUV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLnRhcmdldChzKG1lc3NhZ2UsIHRydWUpKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5zZW5kKHMobWVzc2FnZSwgZmFsc2UpLCBoKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzJdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5jYW5jZWxsZWQoKVxuXHR9XG5cblx0YXN5bmMgWzNdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5kbmREcm9wUGVyZm9ybWVkKClcblx0fVxuXG5cdGFzeW5jIFs0XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZG5kRmluaXNoZWQoKVxuXHR9XG5cblx0YXN5bmMgWzVdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5hY3Rpb24odShtZXNzYWdlKSlcblx0fVxuXG59XG5XbERhdGFTb3VyY2VQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfZGF0YV9zb3VyY2UnXG5cbldsRGF0YVNvdXJjZVByb3h5LkVycm9yID0ge1xuICAvKipcbiAgICogYWN0aW9uIG1hc2sgY29udGFpbnMgaW52YWxpZCB2YWx1ZXNcbiAgICovXG4gIGludmFsaWRBY3Rpb25NYXNrOiAwLFxuICAvKipcbiAgICogc291cmNlIGRvZXNuJ3QgYWNjZXB0IHRoaXMgcmVxdWVzdFxuICAgKi9cbiAgaW52YWxpZFNvdXJjZTogMVxufVxuXG5leHBvcnQgZGVmYXVsdCBXbERhdGFTb3VyY2VQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsRGlzcGxheUV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgZXJyb3IgZXZlbnQgaXMgc2VudCBvdXQgd2hlbiBhIGZhdGFsIChub24tcmVjb3ZlcmFibGUpXG5cdCAqXHRlcnJvciBoYXMgb2NjdXJyZWQuICBUaGUgb2JqZWN0X2lkIGFyZ3VtZW50IGlzIHRoZSBvYmplY3Rcblx0ICpcdHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZCwgbW9zdCBvZnRlbiBpbiByZXNwb25zZSB0byBhIHJlcXVlc3Rcblx0ICpcdHRvIHRoYXQgb2JqZWN0LiAgVGhlIGNvZGUgaWRlbnRpZmllcyB0aGUgZXJyb3IgYW5kIGlzIGRlZmluZWRcblx0ICpcdGJ5IHRoZSBvYmplY3QgaW50ZXJmYWNlLiAgQXMgc3VjaCwgZWFjaCBpbnRlcmZhY2UgZGVmaW5lcyBpdHNcblx0ICpcdG93biBzZXQgb2YgZXJyb3IgY29kZXMuICBUaGUgbWVzc2FnZSBpcyBhIGJyaWVmIGRlc2NyaXB0aW9uXG5cdCAqXHRvZiB0aGUgZXJyb3IsIGZvciAoZGVidWdnaW5nKSBjb252ZW5pZW5jZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSBvYmplY3RJZCBvYmplY3Qgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gY29kZSBlcnJvciBjb2RlIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBlcnJvciBkZXNjcmlwdGlvbiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGVycm9yKG9iamVjdElkLCBjb2RlLCBtZXNzYWdlKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpcyB1c2VkIGludGVybmFsbHkgYnkgdGhlIG9iamVjdCBJRCBtYW5hZ2VtZW50XG5cdCAqXHRsb2dpYy4gIFdoZW4gYSBjbGllbnQgZGVsZXRlcyBhbiBvYmplY3QsIHRoZSBzZXJ2ZXIgd2lsbCBzZW5kXG5cdCAqXHR0aGlzIGV2ZW50IHRvIGFja25vd2xlZGdlIHRoYXQgaXQgaGFzIHNlZW4gdGhlIGRlbGV0ZSByZXF1ZXN0LlxuXHQgKlx0V2hlbiB0aGUgY2xpZW50IHJlY2VpdmVzIHRoaXMgZXZlbnQsIGl0IHdpbGwga25vdyB0aGF0IGl0IGNhblxuXHQgKlx0c2FmZWx5IHJldXNlIHRoZSBvYmplY3QgSUQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBkZWxldGVkIG9iamVjdCBJRCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlbGV0ZUlkKGlkKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmltcG9ydCBXbENhbGxiYWNrUHJveHkgZnJvbSAnLi9XbENhbGxiYWNrUHJveHknXG5pbXBvcnQgV2xSZWdpc3RyeVByb3h5IGZyb20gJy4vV2xSZWdpc3RyeVByb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoZSBjb3JlIGdsb2JhbCBvYmplY3QuICBUaGlzIGlzIGEgc3BlY2lhbCBzaW5nbGV0b24gb2JqZWN0LiAgSXRcbiAqICAgICAgaXMgdXNlZCBmb3IgaW50ZXJuYWwgV2F5bGFuZCBwcm90b2NvbCBmZWF0dXJlcy5cbiAqICAgIFxuICovXG5jbGFzcyBXbERpc3BsYXlQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBzeW5jIHJlcXVlc3QgYXNrcyB0aGUgc2VydmVyIHRvIGVtaXQgdGhlICdkb25lJyBldmVudFxuXHQgKlx0b24gdGhlIHJldHVybmVkIHdsX2NhbGxiYWNrIG9iamVjdC4gIFNpbmNlIHJlcXVlc3RzIGFyZVxuXHQgKlx0aGFuZGxlZCBpbi1vcmRlciBhbmQgZXZlbnRzIGFyZSBkZWxpdmVyZWQgaW4tb3JkZXIsIHRoaXMgY2FuXG5cdCAqXHRiZSB1c2VkIGFzIGEgYmFycmllciB0byBlbnN1cmUgYWxsIHByZXZpb3VzIHJlcXVlc3RzIGFuZCB0aGVcblx0ICpcdHJlc3VsdGluZyBldmVudHMgaGF2ZSBiZWVuIGhhbmRsZWQuXG5cdCAqXG5cdCAqXHRUaGUgb2JqZWN0IHJldHVybmVkIGJ5IHRoaXMgcmVxdWVzdCB3aWxsIGJlIGRlc3Ryb3llZCBieSB0aGVcblx0ICpcdGNvbXBvc2l0b3IgYWZ0ZXIgdGhlIGNhbGxiYWNrIGlzIGZpcmVkIGFuZCBhcyBzdWNoIHRoZSBjbGllbnQgbXVzdCBub3Rcblx0ICpcdGF0dGVtcHQgdG8gdXNlIGl0IGFmdGVyIHRoYXQgcG9pbnQuXG5cdCAqXG5cdCAqXHRUaGUgY2FsbGJhY2tfZGF0YSBwYXNzZWQgaW4gdGhlIGNhbGxiYWNrIGlzIHRoZSBldmVudCBzZXJpYWwuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEByZXR1cm4ge1dsQ2FsbGJhY2tQcm94eX0gY2FsbGJhY2sgb2JqZWN0IGZvciB0aGUgc3luYyByZXF1ZXN0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c3luYyAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMCwgV2xDYWxsYmFja1Byb3h5LCBbbmV3T2JqZWN0KCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgY3JlYXRlcyBhIHJlZ2lzdHJ5IG9iamVjdCB0aGF0IGFsbG93cyB0aGUgY2xpZW50XG5cdCAqXHR0byBsaXN0IGFuZCBiaW5kIHRoZSBnbG9iYWwgb2JqZWN0cyBhdmFpbGFibGUgZnJvbSB0aGVcblx0ICpcdGNvbXBvc2l0b3IuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEByZXR1cm4ge1dsUmVnaXN0cnlQcm94eX0gZ2xvYmFsIHJlZ2lzdHJ5IG9iamVjdCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdldFJlZ2lzdHJ5ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAxLCBXbFJlZ2lzdHJ5UHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xEaXNwbGF5RXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZXJyb3IobyhtZXNzYWdlLCBmYWxzZSwgdGhpcy5fY29ubmVjdGlvbiksIHUobWVzc2FnZSksIHMobWVzc2FnZSwgZmFsc2UpKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5kZWxldGVJZCh1KG1lc3NhZ2UpKVxuXHR9XG5cbn1cbldsRGlzcGxheVByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9kaXNwbGF5J1xuXG5XbERpc3BsYXlQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIHNlcnZlciBjb3VsZG4ndCBmaW5kIG9iamVjdFxuICAgKi9cbiAgaW52YWxpZE9iamVjdDogMCxcbiAgLyoqXG4gICAqIG1ldGhvZCBkb2Vzbid0IGV4aXN0IG9uIHRoZSBzcGVjaWZpZWQgaW50ZXJmYWNlXG4gICAqL1xuICBpbnZhbGlkTWV0aG9kOiAxLFxuICAvKipcbiAgICogc2VydmVyIGlzIG91dCBvZiBtZW1vcnlcbiAgICovXG4gIG5vTWVtb3J5OiAyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsRGlzcGxheVByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xLZXlib2FyZEV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IHByb3ZpZGVzIGEgZmlsZSBkZXNjcmlwdG9yIHRvIHRoZSBjbGllbnQgd2hpY2ggY2FuIGJlXG5cdCAqXHRtZW1vcnktbWFwcGVkIHRvIHByb3ZpZGUgYSBrZXlib2FyZCBtYXBwaW5nIGRlc2NyaXB0aW9uLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZm9ybWF0IGtleW1hcCBmb3JtYXQgXG5cdCAqIEBwYXJhbSB7V2ViRkR9IGZkIGtleW1hcCBmaWxlIGRlc2NyaXB0b3IgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIGtleW1hcCBzaXplLCBpbiBieXRlcyBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGtleW1hcChmb3JtYXQsIGZkLCBzaXplKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Tm90aWZpY2F0aW9uIHRoYXQgdGhpcyBzZWF0J3Mga2V5Ym9hcmQgZm9jdXMgaXMgb24gYSBjZXJ0YWluXG5cdCAqXHRzdXJmYWNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGVudGVyIGV2ZW50IFxuXHQgKiBAcGFyYW0geyp9IHN1cmZhY2Ugc3VyZmFjZSBnYWluaW5nIGtleWJvYXJkIGZvY3VzIFxuXHQgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBrZXlzIHRoZSBjdXJyZW50bHkgcHJlc3NlZCBrZXlzIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZW50ZXIoc2VyaWFsLCBzdXJmYWNlLCBrZXlzKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Tm90aWZpY2F0aW9uIHRoYXQgdGhpcyBzZWF0J3Mga2V5Ym9hcmQgZm9jdXMgaXMgbm8gbG9uZ2VyIG9uXG5cdCAqXHRhIGNlcnRhaW4gc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSBsZWF2ZSBub3RpZmljYXRpb24gaXMgc2VudCBiZWZvcmUgdGhlIGVudGVyIG5vdGlmaWNhdGlvblxuXHQgKlx0Zm9yIHRoZSBuZXcgZm9jdXMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgbGVhdmUgZXZlbnQgXG5cdCAqIEBwYXJhbSB7Kn0gc3VyZmFjZSBzdXJmYWNlIHRoYXQgbG9zdCBrZXlib2FyZCBmb2N1cyBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGxlYXZlKHNlcmlhbCwgc3VyZmFjZSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdEEga2V5IHdhcyBwcmVzc2VkIG9yIHJlbGVhc2VkLlxuXHQgKlx0VGhlIHRpbWUgYXJndW1lbnQgaXMgYSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZFxuXHQgKlx0Z3JhbnVsYXJpdHksIHdpdGggYW4gdW5kZWZpbmVkIGJhc2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUga2V5IGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZCBncmFudWxhcml0eSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGtleSBrZXkgdGhhdCBwcm9kdWNlZCB0aGUgZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZSBwaHlzaWNhbCBzdGF0ZSBvZiB0aGUga2V5IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0a2V5KHNlcmlhbCwgdGltZSwga2V5LCBzdGF0ZSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdE5vdGlmaWVzIGNsaWVudHMgdGhhdCB0aGUgbW9kaWZpZXIgYW5kL29yIGdyb3VwIHN0YXRlIGhhc1xuXHQgKlx0Y2hhbmdlZCwgYW5kIGl0IHNob3VsZCB1cGRhdGUgaXRzIGxvY2FsIHN0YXRlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIG1vZGlmaWVycyBldmVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1vZHNEZXByZXNzZWQgZGVwcmVzc2VkIG1vZGlmaWVycyBcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1vZHNMYXRjaGVkIGxhdGNoZWQgbW9kaWZpZXJzIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gbW9kc0xvY2tlZCBsb2NrZWQgbW9kaWZpZXJzIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZ3JvdXAga2V5Ym9hcmQgbGF5b3V0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0bW9kaWZpZXJzKHNlcmlhbCwgbW9kc0RlcHJlc3NlZCwgbW9kc0xhdGNoZWQsIG1vZHNMb2NrZWQsIGdyb3VwKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0SW5mb3JtcyB0aGUgY2xpZW50IGFib3V0IHRoZSBrZXlib2FyZCdzIHJlcGVhdCByYXRlIGFuZCBkZWxheS5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgaXMgc2VudCBhcyBzb29uIGFzIHRoZSB3bF9rZXlib2FyZCBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZCxcblx0ICpcdGFuZCBpcyBndWFyYW50ZWVkIHRvIGJlIHJlY2VpdmVkIGJ5IHRoZSBjbGllbnQgYmVmb3JlIGFueSBrZXkgcHJlc3Ncblx0ICpcdGV2ZW50LlxuXHQgKlxuXHQgKlx0TmVnYXRpdmUgdmFsdWVzIGZvciBlaXRoZXIgcmF0ZSBvciBkZWxheSBhcmUgaWxsZWdhbC4gQSByYXRlIG9mIHplcm9cblx0ICpcdHdpbGwgZGlzYWJsZSBhbnkgcmVwZWF0aW5nIChyZWdhcmRsZXNzIG9mIHRoZSB2YWx1ZSBvZiBkZWxheSkuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGNhbiBiZSBzZW50IGxhdGVyIG9uIGFzIHdlbGwgd2l0aCBhIG5ldyB2YWx1ZSBpZiBuZWNlc3NhcnksXG5cdCAqXHRzbyBjbGllbnRzIHNob3VsZCBjb250aW51ZSBsaXN0ZW5pbmcgZm9yIHRoZSBldmVudCBwYXN0IHRoZSBjcmVhdGlvblxuXHQgKlx0b2Ygd2xfa2V5Ym9hcmQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSByYXRlIHRoZSByYXRlIG9mIHJlcGVhdGluZyBrZXlzIGluIGNoYXJhY3RlcnMgcGVyIHNlY29uZCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IGRlbGF5IGluIG1pbGxpc2Vjb25kcyBzaW5jZSBrZXkgZG93biB1bnRpbCByZXBlYXRpbmcgc3RhcnRzIFxuXHQgKlxuXHQgKiBAc2luY2UgNFxuXHQgKlxuXHQgKi9cblx0cmVwZWF0SW5mbyhyYXRlLCBkZWxheSkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhlIHdsX2tleWJvYXJkIGludGVyZmFjZSByZXByZXNlbnRzIG9uZSBvciBtb3JlIGtleWJvYXJkc1xuICogICAgICBhc3NvY2lhdGVkIHdpdGggYSBzZWF0LlxuICogICAgXG4gKi9cbmNsYXNzIFdsS2V5Ym9hcmRQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICogQHNpbmNlIDNcblx0ICpcblx0ICovXG5cdHJlbGVhc2UgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsS2V5Ym9hcmRFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5rZXltYXAodShtZXNzYWdlKSwgaChtZXNzYWdlKSwgdShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZW50ZXIodShtZXNzYWdlKSwgbyhtZXNzYWdlLCBmYWxzZSwgdGhpcy5fY29ubmVjdGlvbiksIGEobWVzc2FnZSwgZmFsc2UpKVxuXHR9XG5cblx0YXN5bmMgWzJdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5sZWF2ZSh1KG1lc3NhZ2UpLCBvKG1lc3NhZ2UsIGZhbHNlLCB0aGlzLl9jb25uZWN0aW9uKSlcblx0fVxuXG5cdGFzeW5jIFszXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIua2V5KHUobWVzc2FnZSksIHUobWVzc2FnZSksIHUobWVzc2FnZSksIHUobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbNF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLm1vZGlmaWVycyh1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzVdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5yZXBlYXRJbmZvKGkobWVzc2FnZSksIGkobWVzc2FnZSkpXG5cdH1cblxufVxuV2xLZXlib2FyZFByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9rZXlib2FyZCdcblxuV2xLZXlib2FyZFByb3h5LktleW1hcEZvcm1hdCA9IHtcbiAgLyoqXG4gICAqIG5vIGtleW1hcDsgY2xpZW50IG11c3QgdW5kZXJzdGFuZCBob3cgdG8gaW50ZXJwcmV0IHRoZSByYXcga2V5Y29kZVxuICAgKi9cbiAgbm9LZXltYXA6IDAsXG4gIC8qKlxuICAgKiBsaWJ4a2Jjb21tb24gY29tcGF0aWJsZTsgdG8gZGV0ZXJtaW5lIHRoZSB4a2Iga2V5Y29kZSwgY2xpZW50cyBtdXN0IGFkZCA4IHRvIHRoZSBrZXkgZXZlbnQga2V5Y29kZVxuICAgKi9cbiAgeGtiVjE6IDFcbn1cblxuV2xLZXlib2FyZFByb3h5LktleVN0YXRlID0ge1xuICAvKipcbiAgICoga2V5IGlzIG5vdCBwcmVzc2VkXG4gICAqL1xuICByZWxlYXNlZDogMCxcbiAgLyoqXG4gICAqIGtleSBpcyBwcmVzc2VkXG4gICAqL1xuICBwcmVzc2VkOiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsS2V5Ym9hcmRQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsT3V0cHV0RXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBnZW9tZXRyeSBldmVudCBkZXNjcmliZXMgZ2VvbWV0cmljIHByb3BlcnRpZXMgb2YgdGhlIG91dHB1dC5cblx0ICpcdFRoZSBldmVudCBpcyBzZW50IHdoZW4gYmluZGluZyB0byB0aGUgb3V0cHV0IG9iamVjdCBhbmQgd2hlbmV2ZXJcblx0ICpcdGFueSBvZiB0aGUgcHJvcGVydGllcyBjaGFuZ2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHggcG9zaXRpb24gd2l0aGluIHRoZSBnbG9iYWwgY29tcG9zaXRvciBzcGFjZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgeSBwb3NpdGlvbiB3aXRoaW4gdGhlIGdsb2JhbCBjb21wb3NpdG9yIHNwYWNlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGh5c2ljYWxXaWR0aCB3aWR0aCBpbiBtaWxsaW1ldGVycyBvZiB0aGUgb3V0cHV0IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGh5c2ljYWxIZWlnaHQgaGVpZ2h0IGluIG1pbGxpbWV0ZXJzIG9mIHRoZSBvdXRwdXQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdWJwaXhlbCBzdWJwaXhlbCBvcmllbnRhdGlvbiBvZiB0aGUgb3V0cHV0IFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWFrZSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoZSBtYW51ZmFjdHVyZXIgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbCB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoZSBtb2RlbCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYW5zZm9ybSB0cmFuc2Zvcm0gdGhhdCBtYXBzIGZyYW1lYnVmZmVyIHRvIG91dHB1dCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdlb21ldHJ5KHgsIHksIHBoeXNpY2FsV2lkdGgsIHBoeXNpY2FsSGVpZ2h0LCBzdWJwaXhlbCwgbWFrZSwgbW9kZWwsIHRyYW5zZm9ybSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBtb2RlIGV2ZW50IGRlc2NyaWJlcyBhbiBhdmFpbGFibGUgbW9kZSBmb3IgdGhlIG91dHB1dC5cblx0ICpcblx0ICpcdFRoZSBldmVudCBpcyBzZW50IHdoZW4gYmluZGluZyB0byB0aGUgb3V0cHV0IG9iamVjdCBhbmQgdGhlcmVcblx0ICpcdHdpbGwgYWx3YXlzIGJlIG9uZSBtb2RlLCB0aGUgY3VycmVudCBtb2RlLiAgVGhlIGV2ZW50IGlzIHNlbnRcblx0ICpcdGFnYWluIGlmIGFuIG91dHB1dCBjaGFuZ2VzIG1vZGUsIGZvciB0aGUgbW9kZSB0aGF0IGlzIG5vd1xuXHQgKlx0Y3VycmVudC4gIEluIG90aGVyIHdvcmRzLCB0aGUgY3VycmVudCBtb2RlIGlzIGFsd2F5cyB0aGUgbGFzdFxuXHQgKlx0bW9kZSB0aGF0IHdhcyByZWNlaXZlZCB3aXRoIHRoZSBjdXJyZW50IGZsYWcgc2V0LlxuXHQgKlxuXHQgKlx0VGhlIHNpemUgb2YgYSBtb2RlIGlzIGdpdmVuIGluIHBoeXNpY2FsIGhhcmR3YXJlIHVuaXRzIG9mXG5cdCAqXHR0aGUgb3V0cHV0IGRldmljZS4gVGhpcyBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgYXNcblx0ICpcdHRoZSBvdXRwdXQgc2l6ZSBpbiB0aGUgZ2xvYmFsIGNvbXBvc2l0b3Igc3BhY2UuIEZvciBpbnN0YW5jZSxcblx0ICpcdHRoZSBvdXRwdXQgbWF5IGJlIHNjYWxlZCwgYXMgZGVzY3JpYmVkIGluIHdsX291dHB1dC5zY2FsZSxcblx0ICpcdG9yIHRyYW5zZm9ybWVkLCBhcyBkZXNjcmliZWQgaW4gd2xfb3V0cHV0LnRyYW5zZm9ybS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIGJpdGZpZWxkIG9mIG1vZGUgZmxhZ3MgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCB3aWR0aCBvZiB0aGUgbW9kZSBpbiBoYXJkd2FyZSB1bml0cyBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBoZWlnaHQgb2YgdGhlIG1vZGUgaW4gaGFyZHdhcmUgdW5pdHMgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSByZWZyZXNoIHZlcnRpY2FsIHJlZnJlc2ggcmF0ZSBpbiBtSHogXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRtb2RlKGZsYWdzLCB3aWR0aCwgaGVpZ2h0LCByZWZyZXNoKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpcyBzZW50IGFmdGVyIGFsbCBvdGhlciBwcm9wZXJ0aWVzIGhhdmUgYmVlblxuXHQgKlx0c2VudCBhZnRlciBiaW5kaW5nIHRvIHRoZSBvdXRwdXQgb2JqZWN0IGFuZCBhZnRlciBhbnlcblx0ICpcdG90aGVyIHByb3BlcnR5IGNoYW5nZXMgZG9uZSBhZnRlciB0aGF0LiBUaGlzIGFsbG93c1xuXHQgKlx0Y2hhbmdlcyB0byB0aGUgb3V0cHV0IHByb3BlcnRpZXMgdG8gYmUgc2VlbiBhc1xuXHQgKlx0YXRvbWljLCBldmVuIGlmIHRoZXkgaGFwcGVuIHZpYSBtdWx0aXBsZSBldmVudHMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAyXG5cdCAqXG5cdCAqL1xuXHRkb25lKCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgY29udGFpbnMgc2NhbGluZyBnZW9tZXRyeSBpbmZvcm1hdGlvblxuXHQgKlx0dGhhdCBpcyBub3QgaW4gdGhlIGdlb21ldHJ5IGV2ZW50LiBJdCBtYXkgYmUgc2VudCBhZnRlclxuXHQgKlx0YmluZGluZyB0aGUgb3V0cHV0IG9iamVjdCBvciBpZiB0aGUgb3V0cHV0IHNjYWxlIGNoYW5nZXNcblx0ICpcdGxhdGVyLiBJZiBpdCBpcyBub3Qgc2VudCwgdGhlIGNsaWVudCBzaG91bGQgYXNzdW1lIGFcblx0ICpcdHNjYWxlIG9mIDEuXG5cdCAqXG5cdCAqXHRBIHNjYWxlIGxhcmdlciB0aGFuIDEgbWVhbnMgdGhhdCB0aGUgY29tcG9zaXRvciB3aWxsXG5cdCAqXHRhdXRvbWF0aWNhbGx5IHNjYWxlIHN1cmZhY2UgYnVmZmVycyBieSB0aGlzIGFtb3VudFxuXHQgKlx0d2hlbiByZW5kZXJpbmcuIFRoaXMgaXMgdXNlZCBmb3IgdmVyeSBoaWdoIHJlc29sdXRpb25cblx0ICpcdGRpc3BsYXlzIHdoZXJlIGFwcGxpY2F0aW9ucyByZW5kZXJpbmcgYXQgdGhlIG5hdGl2ZVxuXHQgKlx0cmVzb2x1dGlvbiB3b3VsZCBiZSB0b28gc21hbGwgdG8gYmUgbGVnaWJsZS5cblx0ICpcblx0ICpcdEl0IGlzIGludGVuZGVkIHRoYXQgc2NhbGluZyBhd2FyZSBjbGllbnRzIHRyYWNrIHRoZVxuXHQgKlx0Y3VycmVudCBvdXRwdXQgb2YgYSBzdXJmYWNlLCBhbmQgaWYgaXQgaXMgb24gYSBzY2FsZWRcblx0ICpcdG91dHB1dCBpdCBzaG91bGQgdXNlIHdsX3N1cmZhY2Uuc2V0X2J1ZmZlcl9zY2FsZSB3aXRoXG5cdCAqXHR0aGUgc2NhbGUgb2YgdGhlIG91dHB1dC4gVGhhdCB3YXkgdGhlIGNvbXBvc2l0b3IgY2FuXG5cdCAqXHRhdm9pZCBzY2FsaW5nIHRoZSBzdXJmYWNlLCBhbmQgdGhlIGNsaWVudCBjYW4gc3VwcGx5XG5cdCAqXHRhIGhpZ2hlciBkZXRhaWwgaW1hZ2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmYWN0b3Igc2NhbGluZyBmYWN0b3Igb2Ygb3V0cHV0IFxuXHQgKlxuXHQgKiBAc2luY2UgMlxuXHQgKlxuXHQgKi9cblx0c2NhbGUoZmFjdG9yKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBbiBvdXRwdXQgZGVzY3JpYmVzIHBhcnQgb2YgdGhlIGNvbXBvc2l0b3IgZ2VvbWV0cnkuICBUaGVcbiAqICAgICAgY29tcG9zaXRvciB3b3JrcyBpbiB0aGUgJ2NvbXBvc2l0b3IgY29vcmRpbmF0ZSBzeXN0ZW0nIGFuZCBhblxuICogICAgICBvdXRwdXQgY29ycmVzcG9uZHMgdG8gYSByZWN0YW5ndWxhciBhcmVhIGluIHRoYXQgc3BhY2UgdGhhdCBpc1xuICogICAgICBhY3R1YWxseSB2aXNpYmxlLiAgVGhpcyB0eXBpY2FsbHkgY29ycmVzcG9uZHMgdG8gYSBtb25pdG9yIHRoYXRcbiAqICAgICAgZGlzcGxheXMgcGFydCBvZiB0aGUgY29tcG9zaXRvciBzcGFjZS4gIFRoaXMgb2JqZWN0IGlzIHB1Ymxpc2hlZFxuICogICAgICBhcyBnbG9iYWwgZHVyaW5nIHN0YXJ0IHVwLCBvciB3aGVuIGEgbW9uaXRvciBpcyBob3RwbHVnZ2VkLlxuICogICAgXG4gKi9cbmNsYXNzIFdsT3V0cHV0UHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRVc2luZyB0aGlzIHJlcXVlc3QgYSBjbGllbnQgY2FuIHRlbGwgdGhlIHNlcnZlciB0aGF0IGl0IGlzIG5vdCBnb2luZyB0b1xuXHQgKlx0dXNlIHRoZSBvdXRwdXQgb2JqZWN0IGFueW1vcmUuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRyZWxlYXNlICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbE91dHB1dEV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmdlb21ldHJ5KGkobWVzc2FnZSksIGkobWVzc2FnZSksIGkobWVzc2FnZSksIGkobWVzc2FnZSksIGkobWVzc2FnZSksIHMobWVzc2FnZSwgZmFsc2UpLCBzKG1lc3NhZ2UsIGZhbHNlKSwgaShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIubW9kZSh1KG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzJdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5kb25lKClcblx0fVxuXG5cdGFzeW5jIFszXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuc2NhbGUoaShtZXNzYWdlKSlcblx0fVxuXG59XG5XbE91dHB1dFByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9vdXRwdXQnXG5cbldsT3V0cHV0UHJveHkuU3VicGl4ZWwgPSB7XG4gIC8qKlxuICAgKiB1bmtub3duIGdlb21ldHJ5XG4gICAqL1xuICB1bmtub3duOiAwLFxuICAvKipcbiAgICogbm8gZ2VvbWV0cnlcbiAgICovXG4gIG5vbmU6IDEsXG4gIC8qKlxuICAgKiBob3Jpem9udGFsIFJHQlxuICAgKi9cbiAgaG9yaXpvbnRhbFJnYjogMixcbiAgLyoqXG4gICAqIGhvcml6b250YWwgQkdSXG4gICAqL1xuICBob3Jpem9udGFsQmdyOiAzLFxuICAvKipcbiAgICogdmVydGljYWwgUkdCXG4gICAqL1xuICB2ZXJ0aWNhbFJnYjogNCxcbiAgLyoqXG4gICAqIHZlcnRpY2FsIEJHUlxuICAgKi9cbiAgdmVydGljYWxCZ3I6IDVcbn1cblxuV2xPdXRwdXRQcm94eS5UcmFuc2Zvcm0gPSB7XG4gIC8qKlxuICAgKiBubyB0cmFuc2Zvcm1cbiAgICovXG4gIG5vcm1hbDogMCxcbiAgLyoqXG4gICAqIDkwIGRlZ3JlZXMgY291bnRlci1jbG9ja3dpc2VcbiAgICovXG4gIDkwOiAxLFxuICAvKipcbiAgICogMTgwIGRlZ3JlZXMgY291bnRlci1jbG9ja3dpc2VcbiAgICovXG4gIDE4MDogMixcbiAgLyoqXG4gICAqIDI3MCBkZWdyZWVzIGNvdW50ZXItY2xvY2t3aXNlXG4gICAqL1xuICAyNzA6IDMsXG4gIC8qKlxuICAgKiAxODAgZGVncmVlIGZsaXAgYXJvdW5kIGEgdmVydGljYWwgYXhpc1xuICAgKi9cbiAgZmxpcHBlZDogNCxcbiAgLyoqXG4gICAqIGZsaXAgYW5kIHJvdGF0ZSA5MCBkZWdyZWVzIGNvdW50ZXItY2xvY2t3aXNlXG4gICAqL1xuICBmbGlwcGVkOTA6IDUsXG4gIC8qKlxuICAgKiBmbGlwIGFuZCByb3RhdGUgMTgwIGRlZ3JlZXMgY291bnRlci1jbG9ja3dpc2VcbiAgICovXG4gIGZsaXBwZWQxODA6IDYsXG4gIC8qKlxuICAgKiBmbGlwIGFuZCByb3RhdGUgMjcwIGRlZ3JlZXMgY291bnRlci1jbG9ja3dpc2VcbiAgICovXG4gIGZsaXBwZWQyNzA6IDdcbn1cblxuV2xPdXRwdXRQcm94eS5Nb2RlID0ge1xuICAvKipcbiAgICogaW5kaWNhdGVzIHRoaXMgaXMgdGhlIGN1cnJlbnQgbW9kZVxuICAgKi9cbiAgY3VycmVudDogMHgxLFxuICAvKipcbiAgICogaW5kaWNhdGVzIHRoaXMgaXMgdGhlIHByZWZlcnJlZCBtb2RlXG4gICAqL1xuICBwcmVmZXJyZWQ6IDB4MlxufVxuXG5leHBvcnQgZGVmYXVsdCBXbE91dHB1dFByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xQb2ludGVyRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdE5vdGlmaWNhdGlvbiB0aGF0IHRoaXMgc2VhdCdzIHBvaW50ZXIgaXMgZm9jdXNlZCBvbiBhIGNlcnRhaW5cblx0ICpcdHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRXaGVuIGEgc2VhdCdzIGZvY3VzIGVudGVycyBhIHN1cmZhY2UsIHRoZSBwb2ludGVyIGltYWdlXG5cdCAqXHRpcyB1bmRlZmluZWQgYW5kIGEgY2xpZW50IHNob3VsZCByZXNwb25kIHRvIHRoaXMgZXZlbnQgYnkgc2V0dGluZ1xuXHQgKlx0YW4gYXBwcm9wcmlhdGUgcG9pbnRlciBpbWFnZSB3aXRoIHRoZSBzZXRfY3Vyc29yIHJlcXVlc3QuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgZW50ZXIgZXZlbnQgXG5cdCAqIEBwYXJhbSB7Kn0gc3VyZmFjZSBzdXJmYWNlIGVudGVyZWQgYnkgdGhlIHBvaW50ZXIgXG5cdCAqIEBwYXJhbSB7Rml4ZWR9IHN1cmZhY2VYIHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSBzdXJmYWNlWSBzdXJmYWNlLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGVudGVyKHNlcmlhbCwgc3VyZmFjZSwgc3VyZmFjZVgsIHN1cmZhY2VZKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Tm90aWZpY2F0aW9uIHRoYXQgdGhpcyBzZWF0J3MgcG9pbnRlciBpcyBubyBsb25nZXIgZm9jdXNlZCBvblxuXHQgKlx0YSBjZXJ0YWluIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgbGVhdmUgbm90aWZpY2F0aW9uIGlzIHNlbnQgYmVmb3JlIHRoZSBlbnRlciBub3RpZmljYXRpb25cblx0ICpcdGZvciB0aGUgbmV3IGZvY3VzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGxlYXZlIGV2ZW50IFxuXHQgKiBAcGFyYW0geyp9IHN1cmZhY2Ugc3VyZmFjZSBsZWZ0IGJ5IHRoZSBwb2ludGVyIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0bGVhdmUoc2VyaWFsLCBzdXJmYWNlKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Tm90aWZpY2F0aW9uIG9mIHBvaW50ZXIgbG9jYXRpb24gY2hhbmdlLiBUaGUgYXJndW1lbnRzXG5cdCAqXHRzdXJmYWNlX3ggYW5kIHN1cmZhY2VfeSBhcmUgdGhlIGxvY2F0aW9uIHJlbGF0aXZlIHRvIHRoZVxuXHQgKlx0Zm9jdXNlZCBzdXJmYWNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZCBncmFudWxhcml0eSBcblx0ICogQHBhcmFtIHtGaXhlZH0gc3VyZmFjZVggc3VyZmFjZS1sb2NhbCB4IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7Rml4ZWR9IHN1cmZhY2VZIHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0bW90aW9uKHRpbWUsIHN1cmZhY2VYLCBzdXJmYWNlWSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdE1vdXNlIGJ1dHRvbiBjbGljayBhbmQgcmVsZWFzZSBub3RpZmljYXRpb25zLlxuXHQgKlxuXHQgKlx0VGhlIGxvY2F0aW9uIG9mIHRoZSBjbGljayBpcyBnaXZlbiBieSB0aGUgbGFzdCBtb3Rpb24gb3Jcblx0ICpcdGVudGVyIGV2ZW50LlxuXHQgKlx0VGhlIHRpbWUgYXJndW1lbnQgaXMgYSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZFxuXHQgKlx0Z3JhbnVsYXJpdHksIHdpdGggYW4gdW5kZWZpbmVkIGJhc2UuXG5cdCAqXG5cdCAqXHRUaGUgYnV0dG9uIGlzIGEgYnV0dG9uIGNvZGUgYXMgZGVmaW5lZCBpbiB0aGUgTGludXgga2VybmVsJ3Ncblx0ICpcdGxpbnV4L2lucHV0LWV2ZW50LWNvZGVzLmggaGVhZGVyIGZpbGUsIGUuZy4gQlROX0xFRlQuXG5cdCAqXG5cdCAqXHRBbnkgMTYtYml0IGJ1dHRvbiBjb2RlIHZhbHVlIGlzIHJlc2VydmVkIGZvciBmdXR1cmUgYWRkaXRpb25zIHRvIHRoZVxuXHQgKlx0a2VybmVsJ3MgZXZlbnQgY29kZSBsaXN0LiBBbGwgb3RoZXIgYnV0dG9uIGNvZGVzIGFib3ZlIDB4RkZGRiBhcmVcblx0ICpcdGN1cnJlbnRseSB1bmRlZmluZWQgYnV0IG1heSBiZSB1c2VkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiB0aGlzXG5cdCAqXHRwcm90b2NvbC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBidXR0b24gZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIHRpbWVzdGFtcCB3aXRoIG1pbGxpc2Vjb25kIGdyYW51bGFyaXR5IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gYnV0dG9uIGJ1dHRvbiB0aGF0IHByb2R1Y2VkIHRoZSBldmVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXRlIHBoeXNpY2FsIHN0YXRlIG9mIHRoZSBidXR0b24gXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRidXR0b24oc2VyaWFsLCB0aW1lLCBidXR0b24sIHN0YXRlKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2Nyb2xsIGFuZCBvdGhlciBheGlzIG5vdGlmaWNhdGlvbnMuXG5cdCAqXG5cdCAqXHRGb3Igc2Nyb2xsIGV2ZW50cyAodmVydGljYWwgYW5kIGhvcml6b250YWwgc2Nyb2xsIGF4ZXMpLCB0aGVcblx0ICpcdHZhbHVlIHBhcmFtZXRlciBpcyB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIGFsb25nIHRoZSBzcGVjaWZpZWRcblx0ICpcdGF4aXMgaW4gYSBjb29yZGluYXRlIHNwYWNlIGlkZW50aWNhbCB0byB0aG9zZSBvZiBtb3Rpb24gZXZlbnRzLFxuXHQgKlx0cmVwcmVzZW50aW5nIGEgcmVsYXRpdmUgbW92ZW1lbnQgYWxvbmcgdGhlIHNwZWNpZmllZCBheGlzLlxuXHQgKlxuXHQgKlx0Rm9yIGRldmljZXMgdGhhdCBzdXBwb3J0IG1vdmVtZW50cyBub24tcGFyYWxsZWwgdG8gYXhlcyBtdWx0aXBsZVxuXHQgKlx0YXhpcyBldmVudHMgd2lsbCBiZSBlbWl0dGVkLlxuXHQgKlxuXHQgKlx0V2hlbiBhcHBsaWNhYmxlLCBmb3IgZXhhbXBsZSBmb3IgdG91Y2ggcGFkcywgdGhlIHNlcnZlciBjYW5cblx0ICpcdGNob29zZSB0byBlbWl0IHNjcm9sbCBldmVudHMgd2hlcmUgdGhlIG1vdGlvbiB2ZWN0b3IgaXNcblx0ICpcdGVxdWl2YWxlbnQgdG8gYSBtb3Rpb24gZXZlbnQgdmVjdG9yLlxuXHQgKlxuXHQgKlx0V2hlbiBhcHBsaWNhYmxlLCBhIGNsaWVudCBjYW4gdHJhbnNmb3JtIGl0cyBjb250ZW50IHJlbGF0aXZlIHRvIHRoZVxuXHQgKlx0c2Nyb2xsIGRpc3RhbmNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZCBncmFudWxhcml0eSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGF4aXMgYXhpcyB0eXBlIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB2YWx1ZSBsZW5ndGggb2YgdmVjdG9yIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZSBzcGFjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGF4aXModGltZSwgYXhpcywgdmFsdWUpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRJbmRpY2F0ZXMgdGhlIGVuZCBvZiBhIHNldCBvZiBldmVudHMgdGhhdCBsb2dpY2FsbHkgYmVsb25nIHRvZ2V0aGVyLlxuXHQgKlx0QSBjbGllbnQgaXMgZXhwZWN0ZWQgdG8gYWNjdW11bGF0ZSB0aGUgZGF0YSBpbiBhbGwgZXZlbnRzIHdpdGhpbiB0aGVcblx0ICpcdGZyYW1lIGJlZm9yZSBwcm9jZWVkaW5nLlxuXHQgKlxuXHQgKlx0QWxsIHdsX3BvaW50ZXIgZXZlbnRzIGJlZm9yZSBhIHdsX3BvaW50ZXIuZnJhbWUgZXZlbnQgYmVsb25nXG5cdCAqXHRsb2dpY2FsbHkgdG9nZXRoZXIuIEZvciBleGFtcGxlLCBpbiBhIGRpYWdvbmFsIHNjcm9sbCBtb3Rpb24gdGhlXG5cdCAqXHRjb21wb3NpdG9yIHdpbGwgc2VuZCBhbiBvcHRpb25hbCB3bF9wb2ludGVyLmF4aXNfc291cmNlIGV2ZW50LCB0d29cblx0ICpcdHdsX3BvaW50ZXIuYXhpcyBldmVudHMgKGhvcml6b250YWwgYW5kIHZlcnRpY2FsKSBhbmQgZmluYWxseSBhXG5cdCAqXHR3bF9wb2ludGVyLmZyYW1lIGV2ZW50LiBUaGUgY2xpZW50IG1heSB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0b1xuXHQgKlx0Y2FsY3VsYXRlIGEgZGlhZ29uYWwgdmVjdG9yIGZvciBzY3JvbGxpbmcuXG5cdCAqXG5cdCAqXHRXaGVuIG11bHRpcGxlIHdsX3BvaW50ZXIuYXhpcyBldmVudHMgb2NjdXIgd2l0aGluIHRoZSBzYW1lIGZyYW1lLFxuXHQgKlx0dGhlIG1vdGlvbiB2ZWN0b3IgaXMgdGhlIGNvbWJpbmVkIG1vdGlvbiBvZiBhbGwgZXZlbnRzLlxuXHQgKlx0V2hlbiBhIHdsX3BvaW50ZXIuYXhpcyBhbmQgYSB3bF9wb2ludGVyLmF4aXNfc3RvcCBldmVudCBvY2N1ciB3aXRoaW5cblx0ICpcdHRoZSBzYW1lIGZyYW1lLCB0aGlzIGluZGljYXRlcyB0aGF0IGF4aXMgbW92ZW1lbnQgaW4gb25lIGF4aXMgaGFzXG5cdCAqXHRzdG9wcGVkIGJ1dCBjb250aW51ZXMgaW4gdGhlIG90aGVyIGF4aXMuXG5cdCAqXHRXaGVuIG11bHRpcGxlIHdsX3BvaW50ZXIuYXhpc19zdG9wIGV2ZW50cyBvY2N1ciB3aXRoaW4gdGhlIHNhbWVcblx0ICpcdGZyYW1lLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoZXNlIGF4ZXMgc3RvcHBlZCBpbiB0aGUgc2FtZSBpbnN0YW5jZS5cblx0ICpcblx0ICpcdEEgd2xfcG9pbnRlci5mcmFtZSBldmVudCBpcyBzZW50IGZvciBldmVyeSBsb2dpY2FsIGV2ZW50IGdyb3VwLFxuXHQgKlx0ZXZlbiBpZiB0aGUgZ3JvdXAgb25seSBjb250YWlucyBhIHNpbmdsZSB3bF9wb2ludGVyIGV2ZW50LlxuXHQgKlx0U3BlY2lmaWNhbGx5LCBhIGNsaWVudCBtYXkgZ2V0IGEgc2VxdWVuY2U6IG1vdGlvbiwgZnJhbWUsIGJ1dHRvbixcblx0ICpcdGZyYW1lLCBheGlzLCBmcmFtZSwgYXhpc19zdG9wLCBmcmFtZS5cblx0ICpcblx0ICpcdFRoZSB3bF9wb2ludGVyLmVudGVyIGFuZCB3bF9wb2ludGVyLmxlYXZlIGV2ZW50cyBhcmUgbG9naWNhbCBldmVudHNcblx0ICpcdGdlbmVyYXRlZCBieSB0aGUgY29tcG9zaXRvciBhbmQgbm90IHRoZSBoYXJkd2FyZS4gVGhlc2UgZXZlbnRzIGFyZVxuXHQgKlx0YWxzbyBncm91cGVkIGJ5IGEgd2xfcG9pbnRlci5mcmFtZS4gV2hlbiBhIHBvaW50ZXIgbW92ZXMgZnJvbSBvbmVcblx0ICpcdHN1cmZhY2UgdG8gYW5vdGhlciwgYSBjb21wb3NpdG9yIHNob3VsZCBncm91cCB0aGVcblx0ICpcdHdsX3BvaW50ZXIubGVhdmUgZXZlbnQgd2l0aGluIHRoZSBzYW1lIHdsX3BvaW50ZXIuZnJhbWUuXG5cdCAqXHRIb3dldmVyLCBhIGNsaWVudCBtdXN0IG5vdCByZWx5IG9uIHdsX3BvaW50ZXIubGVhdmUgYW5kXG5cdCAqXHR3bF9wb2ludGVyLmVudGVyIGJlaW5nIGluIHRoZSBzYW1lIHdsX3BvaW50ZXIuZnJhbWUuXG5cdCAqXHRDb21wb3NpdG9yLXNwZWNpZmljIHBvbGljaWVzIG1heSByZXF1aXJlIHRoZSB3bF9wb2ludGVyLmxlYXZlIGFuZFxuXHQgKlx0d2xfcG9pbnRlci5lbnRlciBldmVudCBiZWluZyBzcGxpdCBhY3Jvc3MgbXVsdGlwbGUgd2xfcG9pbnRlci5mcmFtZVxuXHQgKlx0Z3JvdXBzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKlxuXHQgKiBAc2luY2UgNVxuXHQgKlxuXHQgKi9cblx0ZnJhbWUoKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U291cmNlIGluZm9ybWF0aW9uIGZvciBzY3JvbGwgYW5kIG90aGVyIGF4ZXMuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGRvZXMgbm90IG9jY3VyIG9uIGl0cyBvd24uIEl0IGlzIHNlbnQgYmVmb3JlIGFcblx0ICpcdHdsX3BvaW50ZXIuZnJhbWUgZXZlbnQgYW5kIGNhcnJpZXMgdGhlIHNvdXJjZSBpbmZvcm1hdGlvbiBmb3Jcblx0ICpcdGFsbCBldmVudHMgd2l0aGluIHRoYXQgZnJhbWUuXG5cdCAqXG5cdCAqXHRUaGUgc291cmNlIHNwZWNpZmllcyBob3cgdGhpcyBldmVudCB3YXMgZ2VuZXJhdGVkLiBJZiB0aGUgc291cmNlIGlzXG5cdCAqXHR3bF9wb2ludGVyLmF4aXNfc291cmNlLmZpbmdlciwgYSB3bF9wb2ludGVyLmF4aXNfc3RvcCBldmVudCB3aWxsIGJlXG5cdCAqXHRzZW50IHdoZW4gdGhlIHVzZXIgbGlmdHMgdGhlIGZpbmdlciBvZmYgdGhlIGRldmljZS5cblx0ICpcblx0ICpcdElmIHRoZSBzb3VyY2UgaXMgd2xfcG9pbnRlci5heGlzX3NvdXJjZS53aGVlbCxcblx0ICpcdHdsX3BvaW50ZXIuYXhpc19zb3VyY2Uud2hlZWxfdGlsdCBvclxuXHQgKlx0d2xfcG9pbnRlci5heGlzX3NvdXJjZS5jb250aW51b3VzLCBhIHdsX3BvaW50ZXIuYXhpc19zdG9wIGV2ZW50IG1heVxuXHQgKlx0b3IgbWF5IG5vdCBiZSBzZW50LiBXaGV0aGVyIGEgY29tcG9zaXRvciBzZW5kcyBhbiBheGlzX3N0b3AgZXZlbnRcblx0ICpcdGZvciB0aGVzZSBzb3VyY2VzIGlzIGhhcmR3YXJlLXNwZWNpZmljIGFuZCBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQ7XG5cdCAqXHRjbGllbnRzIG11c3Qgbm90IHJlbHkgb24gcmVjZWl2aW5nIGFuIGF4aXNfc3RvcCBldmVudCBmb3IgdGhlc2Vcblx0ICpcdHNjcm9sbCBzb3VyY2VzIGFuZCBzaG91bGQgdHJlYXQgc2Nyb2xsIHNlcXVlbmNlcyBmcm9tIHRoZXNlIHNjcm9sbFxuXHQgKlx0c291cmNlcyBhcyB1bnRlcm1pbmF0ZWQgYnkgZGVmYXVsdC5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgaXMgb3B0aW9uYWwuIElmIHRoZSBzb3VyY2UgaXMgdW5rbm93biBmb3IgYSBwYXJ0aWN1bGFyXG5cdCAqXHRheGlzIGV2ZW50IHNlcXVlbmNlLCBubyBldmVudCBpcyBzZW50LlxuXHQgKlx0T25seSBvbmUgd2xfcG9pbnRlci5heGlzX3NvdXJjZSBldmVudCBpcyBwZXJtaXR0ZWQgcGVyIGZyYW1lLlxuXHQgKlxuXHQgKlx0VGhlIG9yZGVyIG9mIHdsX3BvaW50ZXIuYXhpc19kaXNjcmV0ZSBhbmQgd2xfcG9pbnRlci5heGlzX3NvdXJjZSBpc1xuXHQgKlx0bm90IGd1YXJhbnRlZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBheGlzU291cmNlIHNvdXJjZSBvZiB0aGUgYXhpcyBldmVudCBcblx0ICpcblx0ICogQHNpbmNlIDVcblx0ICpcblx0ICovXG5cdGF4aXNTb3VyY2UoYXhpc1NvdXJjZSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFN0b3Agbm90aWZpY2F0aW9uIGZvciBzY3JvbGwgYW5kIG90aGVyIGF4ZXMuXG5cdCAqXG5cdCAqXHRGb3Igc29tZSB3bF9wb2ludGVyLmF4aXNfc291cmNlIHR5cGVzLCBhIHdsX3BvaW50ZXIuYXhpc19zdG9wIGV2ZW50XG5cdCAqXHRpcyBzZW50IHRvIG5vdGlmeSBhIGNsaWVudCB0aGF0IHRoZSBheGlzIHNlcXVlbmNlIGhhcyB0ZXJtaW5hdGVkLlxuXHQgKlx0VGhpcyBlbmFibGVzIHRoZSBjbGllbnQgdG8gaW1wbGVtZW50IGtpbmV0aWMgc2Nyb2xsaW5nLlxuXHQgKlx0U2VlIHRoZSB3bF9wb2ludGVyLmF4aXNfc291cmNlIGRvY3VtZW50YXRpb24gZm9yIGluZm9ybWF0aW9uIG9uIHdoZW5cblx0ICpcdHRoaXMgZXZlbnQgbWF5IGJlIGdlbmVyYXRlZC5cblx0ICpcblx0ICpcdEFueSB3bF9wb2ludGVyLmF4aXMgZXZlbnRzIHdpdGggdGhlIHNhbWUgYXhpc19zb3VyY2UgYWZ0ZXIgdGhpc1xuXHQgKlx0ZXZlbnQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgdGhlIHN0YXJ0IG9mIGEgbmV3IGF4aXMgbW90aW9uLlxuXHQgKlxuXHQgKlx0VGhlIHRpbWVzdGFtcCBpcyB0byBiZSBpbnRlcnByZXRlZCBpZGVudGljYWwgdG8gdGhlIHRpbWVzdGFtcCBpbiB0aGVcblx0ICpcdHdsX3BvaW50ZXIuYXhpcyBldmVudC4gVGhlIHRpbWVzdGFtcCB2YWx1ZSBtYXkgYmUgdGhlIHNhbWUgYXMgYVxuXHQgKlx0cHJlY2VkaW5nIHdsX3BvaW50ZXIuYXhpcyBldmVudC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgdGltZXN0YW1wIHdpdGggbWlsbGlzZWNvbmQgZ3JhbnVsYXJpdHkgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBheGlzIHRoZSBheGlzIHN0b3BwZWQgd2l0aCB0aGlzIGV2ZW50IFxuXHQgKlxuXHQgKiBAc2luY2UgNVxuXHQgKlxuXHQgKi9cblx0YXhpc1N0b3AodGltZSwgYXhpcykge31cblxuXHQvKipcblx0ICpcblx0ICpcdERpc2NyZXRlIHN0ZXAgaW5mb3JtYXRpb24gZm9yIHNjcm9sbCBhbmQgb3RoZXIgYXhlcy5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgY2FycmllcyB0aGUgYXhpcyB2YWx1ZSBvZiB0aGUgd2xfcG9pbnRlci5heGlzIGV2ZW50IGluXG5cdCAqXHRkaXNjcmV0ZSBzdGVwcyAoZS5nLiBtb3VzZSB3aGVlbCBjbGlja3MpLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBkb2VzIG5vdCBvY2N1ciBvbiBpdHMgb3duLCBpdCBpcyBjb3VwbGVkIHdpdGggYVxuXHQgKlx0d2xfcG9pbnRlci5heGlzIGV2ZW50IHRoYXQgcmVwcmVzZW50cyB0aGlzIGF4aXMgdmFsdWUgb24gYVxuXHQgKlx0Y29udGludW91cyBzY2FsZS4gVGhlIHByb3RvY29sIGd1YXJhbnRlZXMgdGhhdCBlYWNoIGF4aXNfZGlzY3JldGVcblx0ICpcdGV2ZW50IGlzIGFsd2F5cyBmb2xsb3dlZCBieSBleGFjdGx5IG9uZSBheGlzIGV2ZW50IHdpdGggdGhlIHNhbWVcblx0ICpcdGF4aXMgbnVtYmVyIHdpdGhpbiB0aGUgc2FtZSB3bF9wb2ludGVyLmZyYW1lLiBOb3RlIHRoYXQgdGhlIHByb3RvY29sXG5cdCAqXHRhbGxvd3MgZm9yIG90aGVyIGV2ZW50cyB0byBvY2N1ciBiZXR3ZWVuIHRoZSBheGlzX2Rpc2NyZXRlIGFuZFxuXHQgKlx0aXRzIGNvdXBsZWQgYXhpcyBldmVudCwgaW5jbHVkaW5nIG90aGVyIGF4aXNfZGlzY3JldGUgb3IgYXhpc1xuXHQgKlx0ZXZlbnRzLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpcyBvcHRpb25hbDsgY29udGludW91cyBzY3JvbGxpbmcgZGV2aWNlc1xuXHQgKlx0bGlrZSB0d28tZmluZ2VyIHNjcm9sbGluZyBvbiB0b3VjaHBhZHMgZG8gbm90IGhhdmUgZGlzY3JldGVcblx0ICpcdHN0ZXBzIGFuZCBkbyBub3QgZ2VuZXJhdGUgdGhpcyBldmVudC5cblx0ICpcblx0ICpcdFRoZSBkaXNjcmV0ZSB2YWx1ZSBjYXJyaWVzIHRoZSBkaXJlY3Rpb25hbCBpbmZvcm1hdGlvbi4gZS5nLiBhIHZhbHVlXG5cdCAqXHRvZiAtMiBpcyB0d28gc3RlcHMgdG93YXJkcyB0aGUgbmVnYXRpdmUgZGlyZWN0aW9uIG9mIHRoaXMgYXhpcy5cblx0ICpcblx0ICpcdFRoZSBheGlzIG51bWJlciBpcyBpZGVudGljYWwgdG8gdGhlIGF4aXMgbnVtYmVyIGluIHRoZSBhc3NvY2lhdGVkXG5cdCAqXHRheGlzIGV2ZW50LlxuXHQgKlxuXHQgKlx0VGhlIG9yZGVyIG9mIHdsX3BvaW50ZXIuYXhpc19kaXNjcmV0ZSBhbmQgd2xfcG9pbnRlci5heGlzX3NvdXJjZSBpc1xuXHQgKlx0bm90IGd1YXJhbnRlZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBheGlzIGF4aXMgdHlwZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRpc2NyZXRlIG51bWJlciBvZiBzdGVwcyBcblx0ICpcblx0ICogQHNpbmNlIDVcblx0ICpcblx0ICovXG5cdGF4aXNEaXNjcmV0ZShheGlzLCBkaXNjcmV0ZSkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhlIHdsX3BvaW50ZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgb25lIG9yIG1vcmUgaW5wdXQgZGV2aWNlcyxcbiAqICAgICAgc3VjaCBhcyBtaWNlLCB3aGljaCBjb250cm9sIHRoZSBwb2ludGVyIGxvY2F0aW9uIGFuZCBwb2ludGVyX2ZvY3VzXG4gKiAgICAgIG9mIGEgc2VhdC5cbiAqXG4gKiAgICAgIFRoZSB3bF9wb2ludGVyIGludGVyZmFjZSBnZW5lcmF0ZXMgbW90aW9uLCBlbnRlciBhbmQgbGVhdmVcbiAqICAgICAgZXZlbnRzIGZvciB0aGUgc3VyZmFjZXMgdGhhdCB0aGUgcG9pbnRlciBpcyBsb2NhdGVkIG92ZXIsXG4gKiAgICAgIGFuZCBidXR0b24gYW5kIGF4aXMgZXZlbnRzIGZvciBidXR0b24gcHJlc3NlcywgYnV0dG9uIHJlbGVhc2VzXG4gKiAgICAgIGFuZCBzY3JvbGxpbmcuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xQb2ludGVyUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXQgdGhlIHBvaW50ZXIgc3VyZmFjZSwgaS5lLiwgdGhlIHN1cmZhY2UgdGhhdCBjb250YWlucyB0aGVcblx0ICpcdHBvaW50ZXIgaW1hZ2UgKGN1cnNvcikuIFRoaXMgcmVxdWVzdCBnaXZlcyB0aGUgc3VyZmFjZSB0aGUgcm9sZVxuXHQgKlx0b2YgYSBjdXJzb3IuIElmIHRoZSBzdXJmYWNlIGFscmVhZHkgaGFzIGFub3RoZXIgcm9sZSwgaXQgcmFpc2VzXG5cdCAqXHRhIHByb3RvY29sIGVycm9yLlxuXHQgKlxuXHQgKlx0VGhlIGN1cnNvciBhY3R1YWxseSBjaGFuZ2VzIG9ubHkgaWYgdGhlIHBvaW50ZXJcblx0ICpcdGZvY3VzIGZvciB0aGlzIGRldmljZSBpcyBvbmUgb2YgdGhlIHJlcXVlc3RpbmcgY2xpZW50J3Mgc3VyZmFjZXNcblx0ICpcdG9yIHRoZSBzdXJmYWNlIHBhcmFtZXRlciBpcyB0aGUgY3VycmVudCBwb2ludGVyIHN1cmZhY2UuIElmXG5cdCAqXHR0aGVyZSB3YXMgYSBwcmV2aW91cyBzdXJmYWNlIHNldCB3aXRoIHRoaXMgcmVxdWVzdCBpdCBpc1xuXHQgKlx0cmVwbGFjZWQuIElmIHN1cmZhY2UgaXMgTlVMTCwgdGhlIHBvaW50ZXIgaW1hZ2UgaXMgaGlkZGVuLlxuXHQgKlxuXHQgKlx0VGhlIHBhcmFtZXRlcnMgaG90c3BvdF94IGFuZCBob3RzcG90X3kgZGVmaW5lIHRoZSBwb3NpdGlvbiBvZlxuXHQgKlx0dGhlIHBvaW50ZXIgc3VyZmFjZSByZWxhdGl2ZSB0byB0aGUgcG9pbnRlciBsb2NhdGlvbi4gSXRzXG5cdCAqXHR0b3AtbGVmdCBjb3JuZXIgaXMgYWx3YXlzIGF0ICh4LCB5KSAtIChob3RzcG90X3gsIGhvdHNwb3RfeSksXG5cdCAqXHR3aGVyZSAoeCwgeSkgYXJlIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgcG9pbnRlciBsb2NhdGlvbiwgaW5cblx0ICpcdHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMuXG5cdCAqXG5cdCAqXHRPbiBzdXJmYWNlLmF0dGFjaCByZXF1ZXN0cyB0byB0aGUgcG9pbnRlciBzdXJmYWNlLCBob3RzcG90X3hcblx0ICpcdGFuZCBob3RzcG90X3kgYXJlIGRlY3JlbWVudGVkIGJ5IHRoZSB4IGFuZCB5IHBhcmFtZXRlcnNcblx0ICpcdHBhc3NlZCB0byB0aGUgcmVxdWVzdC4gQXR0YWNoIG11c3QgYmUgY29uZmlybWVkIGJ5XG5cdCAqXHR3bF9zdXJmYWNlLmNvbW1pdCBhcyB1c3VhbC5cblx0ICpcblx0ICpcdFRoZSBob3RzcG90IGNhbiBhbHNvIGJlIHVwZGF0ZWQgYnkgcGFzc2luZyB0aGUgY3VycmVudGx5IHNldFxuXHQgKlx0cG9pbnRlciBzdXJmYWNlIHRvIHRoaXMgcmVxdWVzdCB3aXRoIG5ldyB2YWx1ZXMgZm9yIGhvdHNwb3RfeFxuXHQgKlx0YW5kIGhvdHNwb3RfeS5cblx0ICpcblx0ICpcdFRoZSBjdXJyZW50IGFuZCBwZW5kaW5nIGlucHV0IHJlZ2lvbnMgb2YgdGhlIHdsX3N1cmZhY2UgYXJlXG5cdCAqXHRjbGVhcmVkLCBhbmQgd2xfc3VyZmFjZS5zZXRfaW5wdXRfcmVnaW9uIGlzIGlnbm9yZWQgdW50aWwgdGhlXG5cdCAqXHR3bF9zdXJmYWNlIGlzIG5vIGxvbmdlciB1c2VkIGFzIHRoZSBjdXJzb3IuIFdoZW4gdGhlIHVzZSBhcyBhXG5cdCAqXHRjdXJzb3IgZW5kcywgdGhlIGN1cnJlbnQgYW5kIHBlbmRpbmcgaW5wdXQgcmVnaW9ucyBiZWNvbWVcblx0ICpcdHVuZGVmaW5lZCwgYW5kIHRoZSB3bF9zdXJmYWNlIGlzIHVubWFwcGVkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGVudGVyIGV2ZW50IFxuXHQgKiBAcGFyYW0gez8qfSBzdXJmYWNlIHBvaW50ZXIgc3VyZmFjZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhvdHNwb3RYIHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaG90c3BvdFkgc3VyZmFjZS1sb2NhbCB5IGNvb3JkaW5hdGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRDdXJzb3IgKHNlcmlhbCwgc3VyZmFjZSwgaG90c3BvdFgsIGhvdHNwb3RZKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW3VpbnQoc2VyaWFsKSwgb2JqZWN0T3B0aW9uYWwoc3VyZmFjZSksIGludChob3RzcG90WCksIGludChob3RzcG90WSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRVc2luZyB0aGlzIHJlcXVlc3QgYSBjbGllbnQgY2FuIHRlbGwgdGhlIHNlcnZlciB0aGF0IGl0IGlzIG5vdCBnb2luZyB0b1xuXHQgKlx0dXNlIHRoZSBwb2ludGVyIG9iamVjdCBhbnltb3JlLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGRlc3Ryb3lzIHRoZSBwb2ludGVyIHByb3h5IG9iamVjdCwgc28gY2xpZW50cyBtdXN0IG5vdCBjYWxsXG5cdCAqXHR3bF9wb2ludGVyX2Rlc3Ryb3koKSBhZnRlciB1c2luZyB0aGlzIHJlcXVlc3QuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRyZWxlYXNlICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFBvaW50ZXJFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5lbnRlcih1KG1lc3NhZ2UpLCBvKG1lc3NhZ2UsIGZhbHNlLCB0aGlzLl9jb25uZWN0aW9uKSwgZihtZXNzYWdlKSwgZihtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIubGVhdmUodShtZXNzYWdlKSwgbyhtZXNzYWdlLCBmYWxzZSwgdGhpcy5fY29ubmVjdGlvbikpXG5cdH1cblxuXHRhc3luYyBbMl0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLm1vdGlvbih1KG1lc3NhZ2UpLCBmKG1lc3NhZ2UpLCBmKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzNdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5idXR0b24odShtZXNzYWdlKSwgdShtZXNzYWdlKSwgdShtZXNzYWdlKSwgdShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFs0XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuYXhpcyh1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpLCBmKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzVdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5mcmFtZSgpXG5cdH1cblxuXHRhc3luYyBbNl0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmF4aXNTb3VyY2UodShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFs3XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuYXhpc1N0b3AodShtZXNzYWdlKSwgdShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFs4XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuYXhpc0Rpc2NyZXRlKHUobWVzc2FnZSksIGkobWVzc2FnZSkpXG5cdH1cblxufVxuV2xQb2ludGVyUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX3BvaW50ZXInXG5cbldsUG9pbnRlclByb3h5LkVycm9yID0ge1xuICAvKipcbiAgICogZ2l2ZW4gd2xfc3VyZmFjZSBoYXMgYW5vdGhlciByb2xlXG4gICAqL1xuICByb2xlOiAwXG59XG5cbldsUG9pbnRlclByb3h5LkJ1dHRvblN0YXRlID0ge1xuICAvKipcbiAgICogdGhlIGJ1dHRvbiBpcyBub3QgcHJlc3NlZFxuICAgKi9cbiAgcmVsZWFzZWQ6IDAsXG4gIC8qKlxuICAgKiB0aGUgYnV0dG9uIGlzIHByZXNzZWRcbiAgICovXG4gIHByZXNzZWQ6IDFcbn1cblxuV2xQb2ludGVyUHJveHkuQXhpcyA9IHtcbiAgLyoqXG4gICAqIHZlcnRpY2FsIGF4aXNcbiAgICovXG4gIHZlcnRpY2FsU2Nyb2xsOiAwLFxuICAvKipcbiAgICogaG9yaXpvbnRhbCBheGlzXG4gICAqL1xuICBob3Jpem9udGFsU2Nyb2xsOiAxXG59XG5cbldsUG9pbnRlclByb3h5LkF4aXNTb3VyY2UgPSB7XG4gIC8qKlxuICAgKiBhIHBoeXNpY2FsIHdoZWVsIHJvdGF0aW9uXG4gICAqL1xuICB3aGVlbDogMCxcbiAgLyoqXG4gICAqIGZpbmdlciBvbiBhIHRvdWNoIHN1cmZhY2VcbiAgICovXG4gIGZpbmdlcjogMSxcbiAgLyoqXG4gICAqIGNvbnRpbnVvdXMgY29vcmRpbmF0ZSBzcGFjZVxuICAgKi9cbiAgY29udGludW91czogMixcbiAgLyoqXG4gICAqIGEgcGh5c2ljYWwgd2hlZWwgdGlsdFxuICAgKi9cbiAgd2hlZWxUaWx0OiAzXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsUG9pbnRlclByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBIHJlZ2lvbiBvYmplY3QgZGVzY3JpYmVzIGFuIGFyZWEuXG4gKlxuICogICAgICBSZWdpb24gb2JqZWN0cyBhcmUgdXNlZCB0byBkZXNjcmliZSB0aGUgb3BhcXVlIGFuZCBpbnB1dFxuICogICAgICByZWdpb25zIG9mIGEgc3VyZmFjZS5cbiAqICAgIFxuICovXG5jbGFzcyBXbFJlZ2lvblByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0RGVzdHJveSB0aGUgcmVnaW9uLiAgVGhpcyB3aWxsIGludmFsaWRhdGUgdGhlIG9iamVjdCBJRC5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRBZGQgdGhlIHNwZWNpZmllZCByZWN0YW5nbGUgdG8gdGhlIHJlZ2lvbi5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggcmVnaW9uLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgcmVnaW9uLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIHJlY3RhbmdsZSB3aWR0aCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCByZWN0YW5nbGUgaGVpZ2h0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0YWRkICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMSwgW2ludCh4KSwgaW50KHkpLCBpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgcmVjdGFuZ2xlIGZyb20gdGhlIHJlZ2lvbi5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggcmVnaW9uLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgcmVnaW9uLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIHJlY3RhbmdsZSB3aWR0aCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCByZWN0YW5nbGUgaGVpZ2h0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c3VidHJhY3QgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAyLCBbaW50KHgpLCBpbnQoeSksIGludCh3aWR0aCksIGludChoZWlnaHQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFJlZ2lvbkV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxufVxuV2xSZWdpb25Qcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfcmVnaW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBXbFJlZ2lvblByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xSZWdpc3RyeUV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHROb3RpZnkgdGhlIGNsaWVudCBvZiBnbG9iYWwgb2JqZWN0cy5cblx0ICpcblx0ICpcdFRoZSBldmVudCBub3RpZmllcyB0aGUgY2xpZW50IHRoYXQgYSBnbG9iYWwgb2JqZWN0IHdpdGhcblx0ICpcdHRoZSBnaXZlbiBuYW1lIGlzIG5vdyBhdmFpbGFibGUsIGFuZCBpdCBpbXBsZW1lbnRzIHRoZVxuXHQgKlx0Z2l2ZW4gdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gaW50ZXJmYWNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbmFtZSBudW1lcmljIG5hbWUgb2YgdGhlIGdsb2JhbCBvYmplY3QgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbnRlcmZhY2UgaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IHRoZSBvYmplY3QgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJzaW9uIGludGVyZmFjZSB2ZXJzaW9uIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z2xvYmFsKG5hbWUsIGludGVyZmFjZV8sIHZlcnNpb24pIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHROb3RpZnkgdGhlIGNsaWVudCBvZiByZW1vdmVkIGdsb2JhbCBvYmplY3RzLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBub3RpZmllcyB0aGUgY2xpZW50IHRoYXQgdGhlIGdsb2JhbCBpZGVudGlmaWVkXG5cdCAqXHRieSBuYW1lIGlzIG5vIGxvbmdlciBhdmFpbGFibGUuICBJZiB0aGUgY2xpZW50IGJvdW5kIHRvXG5cdCAqXHR0aGUgZ2xvYmFsIHVzaW5nIHRoZSBiaW5kIHJlcXVlc3QsIHRoZSBjbGllbnQgc2hvdWxkIG5vd1xuXHQgKlx0ZGVzdHJveSB0aGF0IG9iamVjdC5cblx0ICpcblx0ICpcdFRoZSBvYmplY3QgcmVtYWlucyB2YWxpZCBhbmQgcmVxdWVzdHMgdG8gdGhlIG9iamVjdCB3aWxsIGJlXG5cdCAqXHRpZ25vcmVkIHVudGlsIHRoZSBjbGllbnQgZGVzdHJveXMgaXQsIHRvIGF2b2lkIHJhY2VzIGJldHdlZW5cblx0ICpcdHRoZSBnbG9iYWwgZ29pbmcgYXdheSBhbmQgYSBjbGllbnQgc2VuZGluZyBhIHJlcXVlc3QgdG8gaXQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBuYW1lIG51bWVyaWMgbmFtZSBvZiB0aGUgZ2xvYmFsIG9iamVjdCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdsb2JhbFJlbW92ZShuYW1lKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBUaGUgc2luZ2xldG9uIGdsb2JhbCByZWdpc3RyeSBvYmplY3QuICBUaGUgc2VydmVyIGhhcyBhIG51bWJlciBvZlxuICogICAgICBnbG9iYWwgb2JqZWN0cyB0aGF0IGFyZSBhdmFpbGFibGUgdG8gYWxsIGNsaWVudHMuICBUaGVzZSBvYmplY3RzXG4gKiAgICAgIHR5cGljYWxseSByZXByZXNlbnQgYW4gYWN0dWFsIG9iamVjdCBpbiB0aGUgc2VydmVyIChmb3IgZXhhbXBsZSxcbiAqICAgICAgYW4gaW5wdXQgZGV2aWNlKSBvciB0aGV5IGFyZSBzaW5nbGV0b24gb2JqZWN0cyB0aGF0IHByb3ZpZGVcbiAqICAgICAgZXh0ZW5zaW9uIGZ1bmN0aW9uYWxpdHkuXG4gKlxuICogICAgICBXaGVuIGEgY2xpZW50IGNyZWF0ZXMgYSByZWdpc3RyeSBvYmplY3QsIHRoZSByZWdpc3RyeSBvYmplY3RcbiAqICAgICAgd2lsbCBlbWl0IGEgZ2xvYmFsIGV2ZW50IGZvciBlYWNoIGdsb2JhbCBjdXJyZW50bHkgaW4gdGhlXG4gKiAgICAgIHJlZ2lzdHJ5LiAgR2xvYmFscyBjb21lIGFuZCBnbyBhcyBhIHJlc3VsdCBvZiBkZXZpY2Ugb3JcbiAqICAgICAgbW9uaXRvciBob3RwbHVncywgcmVjb25maWd1cmF0aW9uIG9yIG90aGVyIGV2ZW50cywgYW5kIHRoZVxuICogICAgICByZWdpc3RyeSB3aWxsIHNlbmQgb3V0IGdsb2JhbCBhbmQgZ2xvYmFsX3JlbW92ZSBldmVudHMgdG9cbiAqICAgICAga2VlcCB0aGUgY2xpZW50IHVwIHRvIGRhdGUgd2l0aCB0aGUgY2hhbmdlcy4gIFRvIG1hcmsgdGhlIGVuZFxuICogICAgICBvZiB0aGUgaW5pdGlhbCBidXJzdCBvZiBldmVudHMsIHRoZSBjbGllbnQgY2FuIHVzZSB0aGVcbiAqICAgICAgd2xfZGlzcGxheS5zeW5jIHJlcXVlc3QgaW1tZWRpYXRlbHkgYWZ0ZXIgY2FsbGluZ1xuICogICAgICB3bF9kaXNwbGF5LmdldF9yZWdpc3RyeS5cbiAqXG4gKiAgICAgIEEgY2xpZW50IGNhbiBiaW5kIHRvIGEgZ2xvYmFsIG9iamVjdCBieSB1c2luZyB0aGUgYmluZFxuICogICAgICByZXF1ZXN0LiAgVGhpcyBjcmVhdGVzIGEgY2xpZW50LXNpZGUgaGFuZGxlIHRoYXQgbGV0cyB0aGUgb2JqZWN0XG4gKiAgICAgIGVtaXQgZXZlbnRzIHRvIHRoZSBjbGllbnQgYW5kIGxldHMgdGhlIGNsaWVudCBpbnZva2UgcmVxdWVzdHMgb25cbiAqICAgICAgdGhlIG9iamVjdC5cbiAqICAgIFxuICovXG5jbGFzcyBXbFJlZ2lzdHJ5UHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cdC8qKlxuXHQqIEJpbmQgYSBuZXcgb2JqZWN0IHRvIHRoZSBnbG9iYWwuXG5cdCpcblx0KiBCaW5kcyBhIG5ldywgY2xpZW50LWNyZWF0ZWQgb2JqZWN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIHNwZWNpZmllZCBuYW1lIGFzIHRoZSBpZGVudGlmaWVyLlxuXHQqXG5cdCogQHBhcmFtIHtudW1iZXJ9IG5hbWUgdW5pcXVlIG51bWVyaWMgbmFtZSBvZiB0aGUgZ2xvYmFsXG5cdCogQHBhcmFtIHtzdHJpbmd9IGludGVyZmFjZV8gaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IHRoZSBuZXcgb2JqZWN0XG5cdCogQHBhcmFtIHtGdW5jdGlvbn0gcHJveHlDbGFzc1xuXHQqIEBwYXJhbSB7bnVtYmVyfSB2ZXJzaW9uIFRoZSB2ZXJzaW9uIHVzZWQgYW5kIHN1cHBvcnRlZCBieSB0aGUgY2xpZW50XG5cdCogQHJldHVybiB7T2JqZWN0fSBhIG5ldyBib3VuZGVkIG9iamVjdFxuXHQqL1xuXHRiaW5kIChuYW1lLCBpbnRlcmZhY2VfLCBwcm94eUNsYXNzLCB2ZXJzaW9uKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMCwgcHJveHlDbGFzcywgW3VpbnQobmFtZSksIHN0cmluZyhpbnRlcmZhY2VfKSwgdWludCh2ZXJzaW9uKSwgbmV3T2JqZWN0KCldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsUmVnaXN0cnlFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5nbG9iYWwodShtZXNzYWdlKSwgcyhtZXNzYWdlLCBmYWxzZSksIHUobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbMV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmdsb2JhbFJlbW92ZSh1KG1lc3NhZ2UpKVxuXHR9XG5cbn1cbldsUmVnaXN0cnlQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfcmVnaXN0cnknXG5cbmV4cG9ydCBkZWZhdWx0IFdsUmVnaXN0cnlQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsU2VhdEV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYSBzZWF0IGdhaW5zIG9yIGxvc2VzIHRoZSBwb2ludGVyLFxuXHQgKlx0a2V5Ym9hcmQgb3IgdG91Y2ggY2FwYWJpbGl0aWVzLiAgVGhlIGFyZ3VtZW50IGlzIGEgY2FwYWJpbGl0eVxuXHQgKlx0ZW51bSBjb250YWluaW5nIHRoZSBjb21wbGV0ZSBzZXQgb2YgY2FwYWJpbGl0aWVzIHRoaXMgc2VhdCBoYXMuXG5cdCAqXG5cdCAqXHRXaGVuIHRoZSBwb2ludGVyIGNhcGFiaWxpdHkgaXMgYWRkZWQsIGEgY2xpZW50IG1heSBjcmVhdGUgYVxuXHQgKlx0d2xfcG9pbnRlciBvYmplY3QgdXNpbmcgdGhlIHdsX3NlYXQuZ2V0X3BvaW50ZXIgcmVxdWVzdC4gVGhpcyBvYmplY3Rcblx0ICpcdHdpbGwgcmVjZWl2ZSBwb2ludGVyIGV2ZW50cyB1bnRpbCB0aGUgY2FwYWJpbGl0eSBpcyByZW1vdmVkIGluIHRoZVxuXHQgKlx0ZnV0dXJlLlxuXHQgKlxuXHQgKlx0V2hlbiB0aGUgcG9pbnRlciBjYXBhYmlsaXR5IGlzIHJlbW92ZWQsIGEgY2xpZW50IHNob3VsZCBkZXN0cm95IHRoZVxuXHQgKlx0d2xfcG9pbnRlciBvYmplY3RzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2VhdCB3aGVyZSB0aGUgY2FwYWJpbGl0eSB3YXNcblx0ICpcdHJlbW92ZWQsIHVzaW5nIHRoZSB3bF9wb2ludGVyLnJlbGVhc2UgcmVxdWVzdC4gTm8gZnVydGhlciBwb2ludGVyXG5cdCAqXHRldmVudHMgd2lsbCBiZSByZWNlaXZlZCBvbiB0aGVzZSBvYmplY3RzLlxuXHQgKlxuXHQgKlx0SW4gc29tZSBjb21wb3NpdG9ycywgaWYgYSBzZWF0IHJlZ2FpbnMgdGhlIHBvaW50ZXIgY2FwYWJpbGl0eSBhbmQgYVxuXHQgKlx0Y2xpZW50IGhhcyBhIHByZXZpb3VzbHkgb2J0YWluZWQgd2xfcG9pbnRlciBvYmplY3Qgb2YgdmVyc2lvbiA0IG9yXG5cdCAqXHRsZXNzLCB0aGF0IG9iamVjdCBtYXkgc3RhcnQgc2VuZGluZyBwb2ludGVyIGV2ZW50cyBhZ2Fpbi4gVGhpc1xuXHQgKlx0YmVoYXZpb3IgaXMgY29uc2lkZXJlZCBhIG1pc2ludGVycHJldGF0aW9uIG9mIHRoZSBpbnRlbmRlZCBiZWhhdmlvclxuXHQgKlx0YW5kIG11c3Qgbm90IGJlIHJlbGllZCB1cG9uIGJ5IHRoZSBjbGllbnQuIHdsX3BvaW50ZXIgb2JqZWN0cyBvZlxuXHQgKlx0dmVyc2lvbiA1IG9yIGxhdGVyIG11c3Qgbm90IHNlbmQgZXZlbnRzIGlmIGNyZWF0ZWQgYmVmb3JlIHRoZSBtb3N0XG5cdCAqXHRyZWNlbnQgZXZlbnQgbm90aWZ5aW5nIHRoZSBjbGllbnQgb2YgYW4gYWRkZWQgcG9pbnRlciBjYXBhYmlsaXR5LlxuXHQgKlxuXHQgKlx0VGhlIGFib3ZlIGJlaGF2aW9yIGFsc28gYXBwbGllcyB0byB3bF9rZXlib2FyZCBhbmQgd2xfdG91Y2ggd2l0aCB0aGVcblx0ICpcdGtleWJvYXJkIGFuZCB0b3VjaCBjYXBhYmlsaXRpZXMsIHJlc3BlY3RpdmVseS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhcGFiaWxpdGllcyBjYXBhYmlsaXRpZXMgb2YgdGhlIHNlYXQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjYXBhYmlsaXRpZXMoY2FwYWJpbGl0aWVzKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0SW4gYSBtdWx0aXNlYXQgY29uZmlndXJhdGlvbiB0aGlzIGNhbiBiZSB1c2VkIGJ5IHRoZSBjbGllbnQgdG8gaGVscFxuXHQgKlx0aWRlbnRpZnkgd2hpY2ggcGh5c2ljYWwgZGV2aWNlcyB0aGUgc2VhdCByZXByZXNlbnRzLiBCYXNlZCBvblxuXHQgKlx0dGhlIHNlYXQgY29uZmlndXJhdGlvbiB1c2VkIGJ5IHRoZSBjb21wb3NpdG9yLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBzZWF0IGlkZW50aWZpZXIgXG5cdCAqXG5cdCAqIEBzaW5jZSAyXG5cdCAqXG5cdCAqL1xuXHRuYW1lKG5hbWUpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuaW1wb3J0IFdsUG9pbnRlclByb3h5IGZyb20gJy4vV2xQb2ludGVyUHJveHknXG5pbXBvcnQgV2xLZXlib2FyZFByb3h5IGZyb20gJy4vV2xLZXlib2FyZFByb3h5J1xuaW1wb3J0IFdsVG91Y2hQcm94eSBmcm9tICcuL1dsVG91Y2hQcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBIHNlYXQgaXMgYSBncm91cCBvZiBrZXlib2FyZHMsIHBvaW50ZXIgYW5kIHRvdWNoIGRldmljZXMuIFRoaXNcbiAqICAgICAgb2JqZWN0IGlzIHB1Ymxpc2hlZCBhcyBhIGdsb2JhbCBkdXJpbmcgc3RhcnQgdXAsIG9yIHdoZW4gc3VjaCBhXG4gKiAgICAgIGRldmljZSBpcyBob3QgcGx1Z2dlZC4gIEEgc2VhdCB0eXBpY2FsbHkgaGFzIGEgcG9pbnRlciBhbmRcbiAqICAgICAgbWFpbnRhaW5zIGEga2V5Ym9hcmQgZm9jdXMgYW5kIGEgcG9pbnRlciBmb2N1cy5cbiAqICAgIFxuICovXG5jbGFzcyBXbFNlYXRQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBJRCBwcm92aWRlZCB3aWxsIGJlIGluaXRpYWxpemVkIHRvIHRoZSB3bF9wb2ludGVyIGludGVyZmFjZVxuXHQgKlx0Zm9yIHRoaXMgc2VhdC5cblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBvbmx5IHRha2VzIGVmZmVjdCBpZiB0aGUgc2VhdCBoYXMgdGhlIHBvaW50ZXJcblx0ICpcdGNhcGFiaWxpdHksIG9yIGhhcyBoYWQgdGhlIHBvaW50ZXIgY2FwYWJpbGl0eSBpbiB0aGUgcGFzdC5cblx0ICpcdEl0IGlzIGEgcHJvdG9jb2wgdmlvbGF0aW9uIHRvIGlzc3VlIHRoaXMgcmVxdWVzdCBvbiBhIHNlYXQgdGhhdCBoYXNcblx0ICpcdG5ldmVyIGhhZCB0aGUgcG9pbnRlciBjYXBhYmlsaXR5LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtXbFBvaW50ZXJQcm94eX0gc2VhdCBwb2ludGVyIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z2V0UG9pbnRlciAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMCwgV2xQb2ludGVyUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBJRCBwcm92aWRlZCB3aWxsIGJlIGluaXRpYWxpemVkIHRvIHRoZSB3bF9rZXlib2FyZCBpbnRlcmZhY2Vcblx0ICpcdGZvciB0aGlzIHNlYXQuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3Qgb25seSB0YWtlcyBlZmZlY3QgaWYgdGhlIHNlYXQgaGFzIHRoZSBrZXlib2FyZFxuXHQgKlx0Y2FwYWJpbGl0eSwgb3IgaGFzIGhhZCB0aGUga2V5Ym9hcmQgY2FwYWJpbGl0eSBpbiB0aGUgcGFzdC5cblx0ICpcdEl0IGlzIGEgcHJvdG9jb2wgdmlvbGF0aW9uIHRvIGlzc3VlIHRoaXMgcmVxdWVzdCBvbiBhIHNlYXQgdGhhdCBoYXNcblx0ICpcdG5ldmVyIGhhZCB0aGUga2V5Ym9hcmQgY2FwYWJpbGl0eS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHJldHVybiB7V2xLZXlib2FyZFByb3h5fSBzZWF0IGtleWJvYXJkIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z2V0S2V5Ym9hcmQgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDEsIFdsS2V5Ym9hcmRQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIElEIHByb3ZpZGVkIHdpbGwgYmUgaW5pdGlhbGl6ZWQgdG8gdGhlIHdsX3RvdWNoIGludGVyZmFjZVxuXHQgKlx0Zm9yIHRoaXMgc2VhdC5cblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBvbmx5IHRha2VzIGVmZmVjdCBpZiB0aGUgc2VhdCBoYXMgdGhlIHRvdWNoXG5cdCAqXHRjYXBhYmlsaXR5LCBvciBoYXMgaGFkIHRoZSB0b3VjaCBjYXBhYmlsaXR5IGluIHRoZSBwYXN0LlxuXHQgKlx0SXQgaXMgYSBwcm90b2NvbCB2aW9sYXRpb24gdG8gaXNzdWUgdGhpcyByZXF1ZXN0IG9uIGEgc2VhdCB0aGF0IGhhc1xuXHQgKlx0bmV2ZXIgaGFkIHRoZSB0b3VjaCBjYXBhYmlsaXR5LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtXbFRvdWNoUHJveHl9IHNlYXQgdG91Y2ggaW50ZXJmYWNlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z2V0VG91Y2ggKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDIsIFdsVG91Y2hQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VXNpbmcgdGhpcyByZXF1ZXN0IGEgY2xpZW50IGNhbiB0ZWxsIHRoZSBzZXJ2ZXIgdGhhdCBpdCBpcyBub3QgZ29pbmcgdG9cblx0ICpcdHVzZSB0aGUgc2VhdCBvYmplY3QgYW55bW9yZS5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDVcblx0ICpcblx0ICovXG5cdHJlbGVhc2UgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDMsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsU2VhdEV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmNhcGFiaWxpdGllcyh1KG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5uYW1lKHMobWVzc2FnZSwgZmFsc2UpKVxuXHR9XG5cbn1cbldsU2VhdFByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9zZWF0J1xuXG5XbFNlYXRQcm94eS5DYXBhYmlsaXR5ID0ge1xuICAvKipcbiAgICogdGhlIHNlYXQgaGFzIHBvaW50ZXIgZGV2aWNlc1xuICAgKi9cbiAgcG9pbnRlcjogMSxcbiAgLyoqXG4gICAqIHRoZSBzZWF0IGhhcyBvbmUgb3IgbW9yZSBrZXlib2FyZHNcbiAgICovXG4gIGtleWJvYXJkOiAyLFxuICAvKipcbiAgICogdGhlIHNlYXQgaGFzIHRvdWNoIGRldmljZXNcbiAgICovXG4gIHRvdWNoOiA0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsU2VhdFByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmltcG9ydCBXbFNoZWxsU3VyZmFjZVByb3h5IGZyb20gJy4vV2xTaGVsbFN1cmZhY2VQcm94eSdcblxuLyoqXG4gKlxuICogICAgICBUaGlzIGludGVyZmFjZSBpcyBpbXBsZW1lbnRlZCBieSBzZXJ2ZXJzIHRoYXQgcHJvdmlkZVxuICogICAgICBkZXNrdG9wLXN0eWxlIHVzZXIgaW50ZXJmYWNlcy5cbiAqXG4gKiAgICAgIEl0IGFsbG93cyBjbGllbnRzIHRvIGFzc29jaWF0ZSBhIHdsX3NoZWxsX3N1cmZhY2Ugd2l0aFxuICogICAgICBhIGJhc2ljIHN1cmZhY2UuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xTaGVsbFByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Q3JlYXRlIGEgc2hlbGwgc3VyZmFjZSBmb3IgYW4gZXhpc3Rpbmcgc3VyZmFjZS4gVGhpcyBnaXZlc1xuXHQgKlx0dGhlIHdsX3N1cmZhY2UgdGhlIHJvbGUgb2YgYSBzaGVsbCBzdXJmYWNlLiBJZiB0aGUgd2xfc3VyZmFjZVxuXHQgKlx0YWxyZWFkeSBoYXMgYW5vdGhlciByb2xlLCBpdCByYWlzZXMgYSBwcm90b2NvbCBlcnJvci5cblx0ICpcblx0ICpcdE9ubHkgb25lIHNoZWxsIHN1cmZhY2UgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIHN1cmZhY2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc3VyZmFjZSBzdXJmYWNlIHRvIGJlIGdpdmVuIHRoZSBzaGVsbCBzdXJmYWNlIHJvbGUgXG5cdCAqIEByZXR1cm4ge1dsU2hlbGxTdXJmYWNlUHJveHl9IHNoZWxsIHN1cmZhY2UgdG8gY3JlYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z2V0U2hlbGxTdXJmYWNlIChzdXJmYWNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMCwgV2xTaGVsbFN1cmZhY2VQcm94eSwgW25ld09iamVjdCgpLCBvYmplY3Qoc3VyZmFjZSldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsU2hlbGxFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cbn1cbldsU2hlbGxQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfc2hlbGwnXG5cbldsU2hlbGxQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIGdpdmVuIHdsX3N1cmZhY2UgaGFzIGFub3RoZXIgcm9sZVxuICAgKi9cbiAgcm9sZTogMFxufVxuXG5leHBvcnQgZGVmYXVsdCBXbFNoZWxsUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXbFNoZWxsU3VyZmFjZUV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRQaW5nIGEgY2xpZW50IHRvIGNoZWNrIGlmIGl0IGlzIHJlY2VpdmluZyBldmVudHMgYW5kIHNlbmRpbmdcblx0ICpcdHJlcXVlc3RzLiBBIGNsaWVudCBpcyBleHBlY3RlZCB0byByZXBseSB3aXRoIGEgcG9uZyByZXF1ZXN0LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIHBpbmcgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRwaW5nKHNlcmlhbCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBjb25maWd1cmUgZXZlbnQgYXNrcyB0aGUgY2xpZW50IHRvIHJlc2l6ZSBpdHMgc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSBzaXplIGlzIGEgaGludCwgaW4gdGhlIHNlbnNlIHRoYXQgdGhlIGNsaWVudCBpcyBmcmVlIHRvXG5cdCAqXHRpZ25vcmUgaXQgaWYgaXQgZG9lc24ndCByZXNpemUsIHBpY2sgYSBzbWFsbGVyIHNpemUgKHRvXG5cdCAqXHRzYXRpc2Z5IGFzcGVjdCByYXRpbyBvciByZXNpemUgaW4gc3RlcHMgb2YgTnhNIHBpeGVscykuXG5cdCAqXG5cdCAqXHRUaGUgZWRnZXMgcGFyYW1ldGVyIHByb3ZpZGVzIGEgaGludCBhYm91dCBob3cgdGhlIHN1cmZhY2Vcblx0ICpcdHdhcyByZXNpemVkLiBUaGUgY2xpZW50IG1heSB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBkZWNpZGVcblx0ICpcdGhvdyB0byBhZGp1c3QgaXRzIGNvbnRlbnQgdG8gdGhlIG5ldyBzaXplIChlLmcuIGEgc2Nyb2xsaW5nXG5cdCAqXHRhcmVhIG1pZ2h0IGFkanVzdCBpdHMgY29udGVudCBwb3NpdGlvbiB0byBsZWF2ZSB0aGUgdmlld2FibGVcblx0ICpcdGNvbnRlbnQgdW5tb3ZlZCkuXG5cdCAqXG5cdCAqXHRUaGUgY2xpZW50IGlzIGZyZWUgdG8gZGlzbWlzcyBhbGwgYnV0IHRoZSBsYXN0IGNvbmZpZ3VyZVxuXHQgKlx0ZXZlbnQgaXQgcmVjZWl2ZWQuXG5cdCAqXG5cdCAqXHRUaGUgd2lkdGggYW5kIGhlaWdodCBhcmd1bWVudHMgc3BlY2lmeSB0aGUgc2l6ZSBvZiB0aGUgd2luZG93XG5cdCAqXHRpbiBzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGVzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZWRnZXMgaG93IHRoZSBzdXJmYWNlIHdhcyByZXNpemVkIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggbmV3IHdpZHRoIG9mIHRoZSBzdXJmYWNlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IG5ldyBoZWlnaHQgb2YgdGhlIHN1cmZhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjb25maWd1cmUoZWRnZXMsIHdpZHRoLCBoZWlnaHQpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgcG9wdXBfZG9uZSBldmVudCBpcyBzZW50IG91dCB3aGVuIGEgcG9wdXAgZ3JhYiBpcyBicm9rZW4sXG5cdCAqXHR0aGF0IGlzLCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBhIHN1cmZhY2UgdGhhdCBkb2Vzbid0IGJlbG9uZ1xuXHQgKlx0dG8gdGhlIGNsaWVudCBvd25pbmcgdGhlIHBvcHVwIHN1cmZhY2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRwb3B1cERvbmUoKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBbiBpbnRlcmZhY2UgdGhhdCBtYXkgYmUgaW1wbGVtZW50ZWQgYnkgYSB3bF9zdXJmYWNlLCBmb3JcbiAqICAgICAgaW1wbGVtZW50YXRpb25zIHRoYXQgcHJvdmlkZSBhIGRlc2t0b3Atc3R5bGUgdXNlciBpbnRlcmZhY2UuXG4gKlxuICogICAgICBJdCBwcm92aWRlcyByZXF1ZXN0cyB0byB0cmVhdCBzdXJmYWNlcyBsaWtlIHRvcGxldmVsLCBmdWxsc2NyZWVuXG4gKiAgICAgIG9yIHBvcHVwIHdpbmRvd3MsIG1vdmUsIHJlc2l6ZSBvciBtYXhpbWl6ZSB0aGVtLCBhc3NvY2lhdGVcbiAqICAgICAgbWV0YWRhdGEgbGlrZSB0aXRsZSBhbmQgY2xhc3MsIGV0Yy5cbiAqXG4gKiAgICAgIE9uIHRoZSBzZXJ2ZXIgc2lkZSB0aGUgb2JqZWN0IGlzIGF1dG9tYXRpY2FsbHkgZGVzdHJveWVkIHdoZW5cbiAqICAgICAgdGhlIHJlbGF0ZWQgd2xfc3VyZmFjZSBpcyBkZXN0cm95ZWQuIE9uIHRoZSBjbGllbnQgc2lkZSxcbiAqICAgICAgd2xfc2hlbGxfc3VyZmFjZV9kZXN0cm95KCkgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGRlc3Ryb3lpbmdcbiAqICAgICAgdGhlIHdsX3N1cmZhY2Ugb2JqZWN0LlxuICogICAgXG4gKi9cbmNsYXNzIFdsU2hlbGxTdXJmYWNlUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRBIGNsaWVudCBtdXN0IHJlc3BvbmQgdG8gYSBwaW5nIGV2ZW50IHdpdGggYSBwb25nIHJlcXVlc3Qgb3Jcblx0ICpcdHRoZSBjbGllbnQgbWF5IGJlIGRlZW1lZCB1bnJlc3BvbnNpdmUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgcGluZyBldmVudCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHBvbmcgKHNlcmlhbCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFt1aW50KHNlcmlhbCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTdGFydCBhIHBvaW50ZXItZHJpdmVuIG1vdmUgb2YgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgbXVzdCBiZSB1c2VkIGluIHJlc3BvbnNlIHRvIGEgYnV0dG9uIHByZXNzIGV2ZW50LlxuXHQgKlx0VGhlIHNlcnZlciBtYXkgaWdub3JlIG1vdmUgcmVxdWVzdHMgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZlxuXHQgKlx0dGhlIHN1cmZhY2UgKGUuZy4gZnVsbHNjcmVlbiBvciBtYXhpbWl6ZWQpLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNlYXQgc2VhdCB3aG9zZSBwb2ludGVyIGlzIHVzZWQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgaW1wbGljaXQgZ3JhYiBvbiB0aGUgcG9pbnRlciBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdG1vdmUgKHNlYXQsIHNlcmlhbCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtvYmplY3Qoc2VhdCksIHVpbnQoc2VyaWFsKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFN0YXJ0IGEgcG9pbnRlci1kcml2ZW4gcmVzaXppbmcgb2YgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgbXVzdCBiZSB1c2VkIGluIHJlc3BvbnNlIHRvIGEgYnV0dG9uIHByZXNzIGV2ZW50LlxuXHQgKlx0VGhlIHNlcnZlciBtYXkgaWdub3JlIHJlc2l6ZSByZXF1ZXN0cyBkZXBlbmRpbmcgb24gdGhlIHN0YXRlIG9mXG5cdCAqXHR0aGUgc3VyZmFjZSAoZS5nLiBmdWxsc2NyZWVuIG9yIG1heGltaXplZCkuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc2VhdCBzZWF0IHdob3NlIHBvaW50ZXIgaXMgdXNlZCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBpbXBsaWNpdCBncmFiIG9uIHRoZSBwb2ludGVyIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZWRnZXMgd2hpY2ggZWRnZSBvciBjb3JuZXIgaXMgYmVpbmcgZHJhZ2dlZCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHJlc2l6ZSAoc2VhdCwgc2VyaWFsLCBlZGdlcykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDIsIFtvYmplY3Qoc2VhdCksIHVpbnQoc2VyaWFsKSwgdWludChlZGdlcyldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRNYXAgdGhlIHN1cmZhY2UgYXMgYSB0b3BsZXZlbCBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0QSB0b3BsZXZlbCBzdXJmYWNlIGlzIG5vdCBmdWxsc2NyZWVuLCBtYXhpbWl6ZWQgb3IgdHJhbnNpZW50LlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0VG9wbGV2ZWwgKCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDMsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRNYXAgdGhlIHN1cmZhY2UgcmVsYXRpdmUgdG8gYW4gZXhpc3Rpbmcgc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSB4IGFuZCB5IGFyZ3VtZW50cyBzcGVjaWZ5IHRoZSBsb2NhdGlvbiBvZiB0aGUgdXBwZXIgbGVmdFxuXHQgKlx0Y29ybmVyIG9mIHRoZSBzdXJmYWNlIHJlbGF0aXZlIHRvIHRoZSB1cHBlciBsZWZ0IGNvcm5lciBvZiB0aGVcblx0ICpcdHBhcmVudCBzdXJmYWNlLCBpbiBzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGVzLlxuXHQgKlxuXHQgKlx0VGhlIGZsYWdzIGFyZ3VtZW50IGNvbnRyb2xzIGRldGFpbHMgb2YgdGhlIHRyYW5zaWVudCBiZWhhdmlvdXIuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gcGFyZW50IHBhcmVudCBzdXJmYWNlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0geCBzdXJmYWNlLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgc3VyZmFjZS1sb2NhbCB5IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyB0cmFuc2llbnQgc3VyZmFjZSBiZWhhdmlvciBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldFRyYW5zaWVudCAocGFyZW50LCB4LCB5LCBmbGFncykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDQsIFtvYmplY3QocGFyZW50KSwgaW50KHgpLCBpbnQoeSksIHVpbnQoZmxhZ3MpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0TWFwIHRoZSBzdXJmYWNlIGFzIGEgZnVsbHNjcmVlbiBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0SWYgYW4gb3V0cHV0IHBhcmFtZXRlciBpcyBnaXZlbiB0aGVuIHRoZSBzdXJmYWNlIHdpbGwgYmUgbWFkZVxuXHQgKlx0ZnVsbHNjcmVlbiBvbiB0aGF0IG91dHB1dC4gSWYgdGhlIGNsaWVudCBkb2VzIG5vdCBzcGVjaWZ5IHRoZVxuXHQgKlx0b3V0cHV0IHRoZW4gdGhlIGNvbXBvc2l0b3Igd2lsbCBhcHBseSBpdHMgcG9saWN5IC0gdXN1YWxseVxuXHQgKlx0Y2hvb3NpbmcgdGhlIG91dHB1dCBvbiB3aGljaCB0aGUgc3VyZmFjZSBoYXMgdGhlIGJpZ2dlc3Qgc3VyZmFjZVxuXHQgKlx0YXJlYS5cblx0ICpcblx0ICpcdFRoZSBjbGllbnQgbWF5IHNwZWNpZnkgYSBtZXRob2QgdG8gcmVzb2x2ZSBhIHNpemUgY29uZmxpY3Rcblx0ICpcdGJldHdlZW4gdGhlIG91dHB1dCBzaXplIGFuZCB0aGUgc3VyZmFjZSBzaXplIC0gdGhpcyBpcyBwcm92aWRlZFxuXHQgKlx0dGhyb3VnaCB0aGUgbWV0aG9kIHBhcmFtZXRlci5cblx0ICpcblx0ICpcdFRoZSBmcmFtZXJhdGUgcGFyYW1ldGVyIGlzIHVzZWQgb25seSB3aGVuIHRoZSBtZXRob2QgaXMgc2V0XG5cdCAqXHR0byBcImRyaXZlclwiLCB0byBpbmRpY2F0ZSB0aGUgcHJlZmVycmVkIGZyYW1lcmF0ZS4gQSB2YWx1ZSBvZiAwXG5cdCAqXHRpbmRpY2F0ZXMgdGhhdCB0aGUgY2xpZW50IGRvZXMgbm90IGNhcmUgYWJvdXQgZnJhbWVyYXRlLiAgVGhlXG5cdCAqXHRmcmFtZXJhdGUgaXMgc3BlY2lmaWVkIGluIG1IeiwgdGhhdCBpcyBmcmFtZXJhdGUgb2YgNjAwMDAgaXMgNjBIei5cblx0ICpcblx0ICpcdEEgbWV0aG9kIG9mIFwic2NhbGVcIiBvciBcImRyaXZlclwiIGltcGxpZXMgYSBzY2FsaW5nIG9wZXJhdGlvbiBvZlxuXHQgKlx0dGhlIHN1cmZhY2UsIGVpdGhlciB2aWEgYSBkaXJlY3Qgc2NhbGluZyBvcGVyYXRpb24gb3IgYSBjaGFuZ2Ugb2Zcblx0ICpcdHRoZSBvdXRwdXQgbW9kZS4gVGhpcyB3aWxsIG92ZXJyaWRlIGFueSBraW5kIG9mIG91dHB1dCBzY2FsaW5nLCBzb1xuXHQgKlx0dGhhdCBtYXBwaW5nIGEgc3VyZmFjZSB3aXRoIGEgYnVmZmVyIHNpemUgZXF1YWwgdG8gdGhlIG1vZGUgY2FuXG5cdCAqXHRmaWxsIHRoZSBzY3JlZW4gaW5kZXBlbmRlbnQgb2YgYnVmZmVyX3NjYWxlLlxuXHQgKlxuXHQgKlx0QSBtZXRob2Qgb2YgXCJmaWxsXCIgbWVhbnMgd2UgZG9uJ3Qgc2NhbGUgdXAgdGhlIGJ1ZmZlciwgaG93ZXZlclxuXHQgKlx0YW55IG91dHB1dCBzY2FsZSBpcyBhcHBsaWVkLiBUaGlzIG1lYW5zIHRoYXQgeW91IG1heSBydW4gaW50b1xuXHQgKlx0YW4gZWRnZSBjYXNlIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBtYXBzIGEgYnVmZmVyIHdpdGggdGhlIHNhbWVcblx0ICpcdHNpemUgb2YgdGhlIG91dHB1dCBtb2RlIGJ1dCBidWZmZXJfc2NhbGUgMSAodGh1cyBtYWtpbmcgYVxuXHQgKlx0c3VyZmFjZSBsYXJnZXIgdGhhbiB0aGUgb3V0cHV0KS4gSW4gdGhpcyBjYXNlIGl0IGlzIGFsbG93ZWQgdG9cblx0ICpcdGRvd25zY2FsZSB0aGUgcmVzdWx0cyB0byBmaXQgdGhlIHNjcmVlbi5cblx0ICpcblx0ICpcdFRoZSBjb21wb3NpdG9yIG11c3QgcmVwbHkgdG8gdGhpcyByZXF1ZXN0IHdpdGggYSBjb25maWd1cmUgZXZlbnRcblx0ICpcdHdpdGggdGhlIGRpbWVuc2lvbnMgZm9yIHRoZSBvdXRwdXQgb24gd2hpY2ggdGhlIHN1cmZhY2Ugd2lsbFxuXHQgKlx0YmUgbWFkZSBmdWxsc2NyZWVuLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWV0aG9kIG1ldGhvZCBmb3IgcmVzb2x2aW5nIHNpemUgY29uZmxpY3QgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmcmFtZXJhdGUgZnJhbWVyYXRlIGluIG1IeiBcblx0ICogQHBhcmFtIHs/Kn0gb3V0cHV0IG91dHB1dCBvbiB3aGljaCB0aGUgc3VyZmFjZSBpcyB0byBiZSBmdWxsc2NyZWVuIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0RnVsbHNjcmVlbiAobWV0aG9kLCBmcmFtZXJhdGUsIG91dHB1dCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDUsIFt1aW50KG1ldGhvZCksIHVpbnQoZnJhbWVyYXRlKSwgb2JqZWN0T3B0aW9uYWwob3V0cHV0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdE1hcCB0aGUgc3VyZmFjZSBhcyBhIHBvcHVwLlxuXHQgKlxuXHQgKlx0QSBwb3B1cCBzdXJmYWNlIGlzIGEgdHJhbnNpZW50IHN1cmZhY2Ugd2l0aCBhbiBhZGRlZCBwb2ludGVyXG5cdCAqXHRncmFiLlxuXHQgKlxuXHQgKlx0QW4gZXhpc3RpbmcgaW1wbGljaXQgZ3JhYiB3aWxsIGJlIGNoYW5nZWQgdG8gb3duZXItZXZlbnRzIG1vZGUsXG5cdCAqXHRhbmQgdGhlIHBvcHVwIGdyYWIgd2lsbCBjb250aW51ZSBhZnRlciB0aGUgaW1wbGljaXQgZ3JhYiBlbmRzXG5cdCAqXHQoaS5lLiByZWxlYXNpbmcgdGhlIG1vdXNlIGJ1dHRvbiBkb2VzIG5vdCBjYXVzZSB0aGUgcG9wdXAgdG9cblx0ICpcdGJlIHVubWFwcGVkKS5cblx0ICpcblx0ICpcdFRoZSBwb3B1cCBncmFiIGNvbnRpbnVlcyB1bnRpbCB0aGUgd2luZG93IGlzIGRlc3Ryb3llZCBvciBhXG5cdCAqXHRtb3VzZSBidXR0b24gaXMgcHJlc3NlZCBpbiBhbnkgb3RoZXIgY2xpZW50J3Mgd2luZG93LiBBIGNsaWNrXG5cdCAqXHRpbiBhbnkgb2YgdGhlIGNsaWVudCdzIHN1cmZhY2VzIGlzIHJlcG9ydGVkIGFzIG5vcm1hbCwgaG93ZXZlcixcblx0ICpcdGNsaWNrcyBpbiBvdGhlciBjbGllbnRzJyBzdXJmYWNlcyB3aWxsIGJlIGRpc2NhcmRlZCBhbmQgdHJpZ2dlclxuXHQgKlx0dGhlIGNhbGxiYWNrLlxuXHQgKlxuXHQgKlx0VGhlIHggYW5kIHkgYXJndW1lbnRzIHNwZWNpZnkgdGhlIGxvY2F0aW9uIG9mIHRoZSB1cHBlciBsZWZ0XG5cdCAqXHRjb3JuZXIgb2YgdGhlIHN1cmZhY2UgcmVsYXRpdmUgdG8gdGhlIHVwcGVyIGxlZnQgY29ybmVyIG9mIHRoZVxuXHQgKlx0cGFyZW50IHN1cmZhY2UsIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc2VhdCBzZWF0IHdob3NlIHBvaW50ZXIgaXMgdXNlZCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBpbXBsaWNpdCBncmFiIG9uIHRoZSBwb2ludGVyIFxuXHQgKiBAcGFyYW0geyp9IHBhcmVudCBwYXJlbnQgc3VyZmFjZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggc3VyZmFjZS1sb2NhbCB4IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgdHJhbnNpZW50IHN1cmZhY2UgYmVoYXZpb3IgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRQb3B1cCAoc2VhdCwgc2VyaWFsLCBwYXJlbnQsIHgsIHksIGZsYWdzKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNiwgW29iamVjdChzZWF0KSwgdWludChzZXJpYWwpLCBvYmplY3QocGFyZW50KSwgaW50KHgpLCBpbnQoeSksIHVpbnQoZmxhZ3MpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0TWFwIHRoZSBzdXJmYWNlIGFzIGEgbWF4aW1pemVkIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRJZiBhbiBvdXRwdXQgcGFyYW1ldGVyIGlzIGdpdmVuIHRoZW4gdGhlIHN1cmZhY2Ugd2lsbCBiZVxuXHQgKlx0bWF4aW1pemVkIG9uIHRoYXQgb3V0cHV0LiBJZiB0aGUgY2xpZW50IGRvZXMgbm90IHNwZWNpZnkgdGhlXG5cdCAqXHRvdXRwdXQgdGhlbiB0aGUgY29tcG9zaXRvciB3aWxsIGFwcGx5IGl0cyBwb2xpY3kgLSB1c3VhbGx5XG5cdCAqXHRjaG9vc2luZyB0aGUgb3V0cHV0IG9uIHdoaWNoIHRoZSBzdXJmYWNlIGhhcyB0aGUgYmlnZ2VzdCBzdXJmYWNlXG5cdCAqXHRhcmVhLlxuXHQgKlxuXHQgKlx0VGhlIGNvbXBvc2l0b3Igd2lsbCByZXBseSB3aXRoIGEgY29uZmlndXJlIGV2ZW50IHRlbGxpbmdcblx0ICpcdHRoZSBleHBlY3RlZCBuZXcgc3VyZmFjZSBzaXplLiBUaGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlZFxuXHQgKlx0b24gdGhlIG5leHQgYnVmZmVyIGF0dGFjaCB0byB0aGlzIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRBIG1heGltaXplZCBzdXJmYWNlIHR5cGljYWxseSBmaWxscyB0aGUgZW50aXJlIG91dHB1dCBpdCBpc1xuXHQgKlx0Ym91bmQgdG8sIGV4Y2VwdCBmb3IgZGVza3RvcCBlbGVtZW50cyBzdWNoIGFzIHBhbmVscy4gVGhpcyBpc1xuXHQgKlx0dGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGEgbWF4aW1pemVkIHNoZWxsIHN1cmZhY2UgYW5kIGFcblx0ICpcdGZ1bGxzY3JlZW4gc2hlbGwgc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSBkZXRhaWxzIGRlcGVuZCBvbiB0aGUgY29tcG9zaXRvciBpbXBsZW1lbnRhdGlvbi5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHs/Kn0gb3V0cHV0IG91dHB1dCBvbiB3aGljaCB0aGUgc3VyZmFjZSBpcyB0byBiZSBtYXhpbWl6ZWQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRNYXhpbWl6ZWQgKG91dHB1dCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDcsIFtvYmplY3RPcHRpb25hbChvdXRwdXQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0IGEgc2hvcnQgdGl0bGUgZm9yIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhpcyBzdHJpbmcgbWF5IGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHN1cmZhY2UgaW4gYSB0YXNrIGJhcixcblx0ICpcdHdpbmRvdyBsaXN0LCBvciBvdGhlciB1c2VyIGludGVyZmFjZSBlbGVtZW50cyBwcm92aWRlZCBieSB0aGVcblx0ICpcdGNvbXBvc2l0b3IuXG5cdCAqXG5cdCAqXHRUaGUgc3RyaW5nIG11c3QgYmUgZW5jb2RlZCBpbiBVVEYtOC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIHN1cmZhY2UgdGl0bGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRUaXRsZSAodGl0bGUpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA4LCBbc3RyaW5nKHRpdGxlKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFNldCBhIGNsYXNzIGZvciB0aGUgc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSBzdXJmYWNlIGNsYXNzIGlkZW50aWZpZXMgdGhlIGdlbmVyYWwgY2xhc3Mgb2YgYXBwbGljYXRpb25zXG5cdCAqXHR0byB3aGljaCB0aGUgc3VyZmFjZSBiZWxvbmdzLiBBIGNvbW1vbiBjb252ZW50aW9uIGlzIHRvIHVzZSB0aGVcblx0ICpcdGZpbGUgbmFtZSAob3IgdGhlIGZ1bGwgcGF0aCBpZiBpdCBpcyBhIG5vbi1zdGFuZGFyZCBsb2NhdGlvbikgb2Zcblx0ICpcdHRoZSBhcHBsaWNhdGlvbidzIC5kZXNrdG9wIGZpbGUgYXMgdGhlIGNsYXNzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhenogc3VyZmFjZSBjbGFzcyBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldENsYXNzIChjbGF6eikge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDksIFtzdHJpbmcoY2xhenopXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFNoZWxsU3VyZmFjZUV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLnBpbmcodShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuY29uZmlndXJlKHUobWVzc2FnZSksIGkobWVzc2FnZSksIGkobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbMl0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLnBvcHVwRG9uZSgpXG5cdH1cblxufVxuV2xTaGVsbFN1cmZhY2VQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfc2hlbGxfc3VyZmFjZSdcblxuV2xTaGVsbFN1cmZhY2VQcm94eS5SZXNpemUgPSB7XG4gIC8qKlxuICAgKiBubyBlZGdlXG4gICAqL1xuICBub25lOiAwLFxuICAvKipcbiAgICogdG9wIGVkZ2VcbiAgICovXG4gIHRvcDogMSxcbiAgLyoqXG4gICAqIGJvdHRvbSBlZGdlXG4gICAqL1xuICBib3R0b206IDIsXG4gIC8qKlxuICAgKiBsZWZ0IGVkZ2VcbiAgICovXG4gIGxlZnQ6IDQsXG4gIC8qKlxuICAgKiB0b3AgYW5kIGxlZnQgZWRnZXNcbiAgICovXG4gIHRvcExlZnQ6IDUsXG4gIC8qKlxuICAgKiBib3R0b20gYW5kIGxlZnQgZWRnZXNcbiAgICovXG4gIGJvdHRvbUxlZnQ6IDYsXG4gIC8qKlxuICAgKiByaWdodCBlZGdlXG4gICAqL1xuICByaWdodDogOCxcbiAgLyoqXG4gICAqIHRvcCBhbmQgcmlnaHQgZWRnZXNcbiAgICovXG4gIHRvcFJpZ2h0OiA5LFxuICAvKipcbiAgICogYm90dG9tIGFuZCByaWdodCBlZGdlc1xuICAgKi9cbiAgYm90dG9tUmlnaHQ6IDEwXG59XG5cbldsU2hlbGxTdXJmYWNlUHJveHkuVHJhbnNpZW50ID0ge1xuICAvKipcbiAgICogZG8gbm90IHNldCBrZXlib2FyZCBmb2N1c1xuICAgKi9cbiAgaW5hY3RpdmU6IDB4MVxufVxuXG5XbFNoZWxsU3VyZmFjZVByb3h5LkZ1bGxzY3JlZW5NZXRob2QgPSB7XG4gIC8qKlxuICAgKiBubyBwcmVmZXJlbmNlLCBhcHBseSBkZWZhdWx0IHBvbGljeVxuICAgKi9cbiAgZGVmYXVsdDogMCxcbiAgLyoqXG4gICAqIHNjYWxlLCBwcmVzZXJ2ZSB0aGUgc3VyZmFjZSdzIGFzcGVjdCByYXRpbyBhbmQgY2VudGVyIG9uIG91dHB1dFxuICAgKi9cbiAgc2NhbGU6IDEsXG4gIC8qKlxuICAgKiBzd2l0Y2ggb3V0cHV0IG1vZGUgdG8gdGhlIHNtYWxsZXN0IG1vZGUgdGhhdCBjYW4gZml0IHRoZSBzdXJmYWNlLCBhZGQgYmxhY2sgYm9yZGVycyB0byBjb21wZW5zYXRlIHNpemUgbWlzbWF0Y2hcbiAgICovXG4gIGRyaXZlcjogMixcbiAgLyoqXG4gICAqIG5vIHVwc2NhbGluZywgY2VudGVyIG9uIG91dHB1dCBhbmQgYWRkIGJsYWNrIGJvcmRlcnMgdG8gY29tcGVuc2F0ZSBzaXplIG1pc21hdGNoXG4gICAqL1xuICBmaWxsOiAzXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsU2hlbGxTdXJmYWNlUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuaW1wb3J0IFdsU3Vic3VyZmFjZVByb3h5IGZyb20gJy4vV2xTdWJzdXJmYWNlUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhlIGdsb2JhbCBpbnRlcmZhY2UgZXhwb3Npbmcgc3ViLXN1cmZhY2UgY29tcG9zaXRpbmcgY2FwYWJpbGl0aWVzLlxuICogICAgICBBIHdsX3N1cmZhY2UsIHRoYXQgaGFzIHN1Yi1zdXJmYWNlcyBhc3NvY2lhdGVkLCBpcyBjYWxsZWQgdGhlXG4gKiAgICAgIHBhcmVudCBzdXJmYWNlLiBTdWItc3VyZmFjZXMgY2FuIGJlIGFyYml0cmFyaWx5IG5lc3RlZCBhbmQgY3JlYXRlXG4gKiAgICAgIGEgdHJlZSBvZiBzdWItc3VyZmFjZXMuXG4gKlxuICogICAgICBUaGUgcm9vdCBzdXJmYWNlIGluIGEgdHJlZSBvZiBzdWItc3VyZmFjZXMgaXMgdGhlIG1haW5cbiAqICAgICAgc3VyZmFjZS4gVGhlIG1haW4gc3VyZmFjZSBjYW5ub3QgYmUgYSBzdWItc3VyZmFjZSwgYmVjYXVzZVxuICogICAgICBzdWItc3VyZmFjZXMgbXVzdCBhbHdheXMgaGF2ZSBhIHBhcmVudC5cbiAqXG4gKiAgICAgIEEgbWFpbiBzdXJmYWNlIHdpdGggaXRzIHN1Yi1zdXJmYWNlcyBmb3JtcyBhIChjb21wb3VuZCkgd2luZG93LlxuICogICAgICBGb3Igd2luZG93IG1hbmFnZW1lbnQgcHVycG9zZXMsIHRoaXMgc2V0IG9mIHdsX3N1cmZhY2Ugb2JqZWN0cyBpc1xuICogICAgICB0byBiZSBjb25zaWRlcmVkIGFzIGEgc2luZ2xlIHdpbmRvdywgYW5kIGl0IHNob3VsZCBhbHNvIGJlaGF2ZSBhc1xuICogICAgICBzdWNoLlxuICpcbiAqICAgICAgVGhlIGFpbSBvZiBzdWItc3VyZmFjZXMgaXMgdG8gb2ZmbG9hZCBzb21lIG9mIHRoZSBjb21wb3NpdGluZyB3b3JrXG4gKiAgICAgIHdpdGhpbiBhIHdpbmRvdyBmcm9tIGNsaWVudHMgdG8gdGhlIGNvbXBvc2l0b3IuIEEgcHJpbWUgZXhhbXBsZSBpc1xuICogICAgICBhIHZpZGVvIHBsYXllciB3aXRoIGRlY29yYXRpb25zIGFuZCB2aWRlbyBpbiBzZXBhcmF0ZSB3bF9zdXJmYWNlXG4gKiAgICAgIG9iamVjdHMuIFRoaXMgc2hvdWxkIGFsbG93IHRoZSBjb21wb3NpdG9yIHRvIHBhc3MgWVVWIHZpZGVvIGJ1ZmZlclxuICogICAgICBwcm9jZXNzaW5nIHRvIGRlZGljYXRlZCBvdmVybGF5IGhhcmR3YXJlIHdoZW4gcG9zc2libGUuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xTdWJjb21wb3NpdG9yUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRJbmZvcm1zIHRoZSBzZXJ2ZXIgdGhhdCB0aGUgY2xpZW50IHdpbGwgbm90IGJlIHVzaW5nIHRoaXNcblx0ICpcdHByb3RvY29sIG9iamVjdCBhbnltb3JlLiBUaGlzIGRvZXMgbm90IGFmZmVjdCBhbnkgb3RoZXJcblx0ICpcdG9iamVjdHMsIHdsX3N1YnN1cmZhY2Ugb2JqZWN0cyBpbmNsdWRlZC5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRDcmVhdGUgYSBzdWItc3VyZmFjZSBpbnRlcmZhY2UgZm9yIHRoZSBnaXZlbiBzdXJmYWNlLCBhbmRcblx0ICpcdGFzc29jaWF0ZSBpdCB3aXRoIHRoZSBnaXZlbiBwYXJlbnQgc3VyZmFjZS4gVGhpcyB0dXJucyBhXG5cdCAqXHRwbGFpbiB3bF9zdXJmYWNlIGludG8gYSBzdWItc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSB0by1iZSBzdWItc3VyZmFjZSBtdXN0IG5vdCBhbHJlYWR5IGhhdmUgYW5vdGhlciByb2xlLCBhbmQgaXRcblx0ICpcdG11c3Qgbm90IGhhdmUgYW4gZXhpc3Rpbmcgd2xfc3Vic3VyZmFjZSBvYmplY3QuIE90aGVyd2lzZSBhIHByb3RvY29sXG5cdCAqXHRlcnJvciBpcyByYWlzZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc3VyZmFjZSB0aGUgc3VyZmFjZSB0byBiZSB0dXJuZWQgaW50byBhIHN1Yi1zdXJmYWNlIFxuXHQgKiBAcGFyYW0geyp9IHBhcmVudCB0aGUgcGFyZW50IHN1cmZhY2UgXG5cdCAqIEByZXR1cm4ge1dsU3Vic3VyZmFjZVByb3h5fSB0aGUgbmV3IHN1Yi1zdXJmYWNlIG9iamVjdCBJRCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdldFN1YnN1cmZhY2UgKHN1cmZhY2UsIHBhcmVudCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDEsIFdsU3Vic3VyZmFjZVByb3h5LCBbbmV3T2JqZWN0KCksIG9iamVjdChzdXJmYWNlKSwgb2JqZWN0KHBhcmVudCldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsU3ViY29tcG9zaXRvckV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxufVxuV2xTdWJjb21wb3NpdG9yUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX3N1YmNvbXBvc2l0b3InXG5cbldsU3ViY29tcG9zaXRvclByb3h5LkVycm9yID0ge1xuICAvKipcbiAgICogdGhlIHRvLWJlIHN1Yi1zdXJmYWNlIGlzIGludmFsaWRcbiAgICovXG4gIGJhZFN1cmZhY2U6IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2xTdWJjb21wb3NpdG9yUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIEFuIGFkZGl0aW9uYWwgaW50ZXJmYWNlIHRvIGEgd2xfc3VyZmFjZSBvYmplY3QsIHdoaWNoIGhhcyBiZWVuXG4gKiAgICAgIG1hZGUgYSBzdWItc3VyZmFjZS4gQSBzdWItc3VyZmFjZSBoYXMgb25lIHBhcmVudCBzdXJmYWNlLiBBXG4gKiAgICAgIHN1Yi1zdXJmYWNlJ3Mgc2l6ZSBhbmQgcG9zaXRpb24gYXJlIG5vdCBsaW1pdGVkIHRvIHRoYXQgb2YgdGhlIHBhcmVudC5cbiAqICAgICAgUGFydGljdWxhcmx5LCBhIHN1Yi1zdXJmYWNlIGlzIG5vdCBhdXRvbWF0aWNhbGx5IGNsaXBwZWQgdG8gaXRzXG4gKiAgICAgIHBhcmVudCdzIGFyZWEuXG4gKlxuICogICAgICBBIHN1Yi1zdXJmYWNlIGJlY29tZXMgbWFwcGVkLCB3aGVuIGEgbm9uLU5VTEwgd2xfYnVmZmVyIGlzIGFwcGxpZWRcbiAqICAgICAgYW5kIHRoZSBwYXJlbnQgc3VyZmFjZSBpcyBtYXBwZWQuIFRoZSBvcmRlciBvZiB3aGljaCBvbmUgaGFwcGVuc1xuICogICAgICBmaXJzdCBpcyBpcnJlbGV2YW50LiBBIHN1Yi1zdXJmYWNlIGlzIGhpZGRlbiBpZiB0aGUgcGFyZW50IGJlY29tZXNcbiAqICAgICAgaGlkZGVuLCBvciBpZiBhIE5VTEwgd2xfYnVmZmVyIGlzIGFwcGxpZWQuIFRoZXNlIHJ1bGVzIGFwcGx5XG4gKiAgICAgIHJlY3Vyc2l2ZWx5IHRocm91Z2ggdGhlIHRyZWUgb2Ygc3VyZmFjZXMuXG4gKlxuICogICAgICBUaGUgYmVoYXZpb3VyIG9mIGEgd2xfc3VyZmFjZS5jb21taXQgcmVxdWVzdCBvbiBhIHN1Yi1zdXJmYWNlXG4gKiAgICAgIGRlcGVuZHMgb24gdGhlIHN1Yi1zdXJmYWNlJ3MgbW9kZS4gVGhlIHBvc3NpYmxlIG1vZGVzIGFyZVxuICogICAgICBzeW5jaHJvbml6ZWQgYW5kIGRlc3luY2hyb25pemVkLCBzZWUgbWV0aG9kc1xuICogICAgICB3bF9zdWJzdXJmYWNlLnNldF9zeW5jIGFuZCB3bF9zdWJzdXJmYWNlLnNldF9kZXN5bmMuIFN5bmNocm9uaXplZFxuICogICAgICBtb2RlIGNhY2hlcyB0aGUgd2xfc3VyZmFjZSBzdGF0ZSB0byBiZSBhcHBsaWVkIHdoZW4gdGhlIHBhcmVudCdzXG4gKiAgICAgIHN0YXRlIGdldHMgYXBwbGllZCwgYW5kIGRlc3luY2hyb25pemVkIG1vZGUgYXBwbGllcyB0aGUgcGVuZGluZ1xuICogICAgICB3bF9zdXJmYWNlIHN0YXRlIGRpcmVjdGx5LiBBIHN1Yi1zdXJmYWNlIGlzIGluaXRpYWxseSBpbiB0aGVcbiAqICAgICAgc3luY2hyb25pemVkIG1vZGUuXG4gKlxuICogICAgICBTdWItc3VyZmFjZXMgaGF2ZSBhbHNvIG90aGVyIGtpbmQgb2Ygc3RhdGUsIHdoaWNoIGlzIG1hbmFnZWQgYnlcbiAqICAgICAgd2xfc3Vic3VyZmFjZSByZXF1ZXN0cywgYXMgb3Bwb3NlZCB0byB3bF9zdXJmYWNlIHJlcXVlc3RzLiBUaGlzXG4gKiAgICAgIHN0YXRlIGluY2x1ZGVzIHRoZSBzdWItc3VyZmFjZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgcGFyZW50XG4gKiAgICAgIHN1cmZhY2UgKHdsX3N1YnN1cmZhY2Uuc2V0X3Bvc2l0aW9uKSwgYW5kIHRoZSBzdGFja2luZyBvcmRlciBvZlxuICogICAgICB0aGUgcGFyZW50IGFuZCBpdHMgc3ViLXN1cmZhY2VzICh3bF9zdWJzdXJmYWNlLnBsYWNlX2Fib3ZlIGFuZFxuICogICAgICAucGxhY2VfYmVsb3cpLiBUaGlzIHN0YXRlIGlzIGFwcGxpZWQgd2hlbiB0aGUgcGFyZW50IHN1cmZhY2Unc1xuICogICAgICB3bF9zdXJmYWNlIHN0YXRlIGlzIGFwcGxpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN1Yi1zdXJmYWNlJ3MgbW9kZS5cbiAqICAgICAgQXMgdGhlIGV4Y2VwdGlvbiwgc2V0X3N5bmMgYW5kIHNldF9kZXN5bmMgYXJlIGVmZmVjdGl2ZSBpbW1lZGlhdGVseS5cbiAqXG4gKiAgICAgIFRoZSBtYWluIHN1cmZhY2UgY2FuIGJlIHRob3VnaHQgdG8gYmUgYWx3YXlzIGluIGRlc3luY2hyb25pemVkIG1vZGUsXG4gKiAgICAgIHNpbmNlIGl0IGRvZXMgbm90IGhhdmUgYSBwYXJlbnQgaW4gdGhlIHN1Yi1zdXJmYWNlcyBzZW5zZS5cbiAqXG4gKiAgICAgIEV2ZW4gaWYgYSBzdWItc3VyZmFjZSBpcyBpbiBkZXN5bmNocm9uaXplZCBtb2RlLCBpdCB3aWxsIGJlaGF2ZSBhc1xuICogICAgICBpbiBzeW5jaHJvbml6ZWQgbW9kZSwgaWYgaXRzIHBhcmVudCBzdXJmYWNlIGJlaGF2ZXMgYXMgaW5cbiAqICAgICAgc3luY2hyb25pemVkIG1vZGUuIFRoaXMgcnVsZSBpcyBhcHBsaWVkIHJlY3Vyc2l2ZWx5IHRocm91Z2hvdXQgdGhlXG4gKiAgICAgIHRyZWUgb2Ygc3VyZmFjZXMuIFRoaXMgbWVhbnMsIHRoYXQgb25lIGNhbiBzZXQgYSBzdWItc3VyZmFjZSBpbnRvXG4gKiAgICAgIHN5bmNocm9uaXplZCBtb2RlLCBhbmQgdGhlbiBhc3N1bWUgdGhhdCBhbGwgaXRzIGNoaWxkIGFuZCBncmFuZC1jaGlsZFxuICogICAgICBzdWItc3VyZmFjZXMgYXJlIHN5bmNocm9uaXplZCwgdG9vLCB3aXRob3V0IGV4cGxpY2l0bHkgc2V0dGluZyB0aGVtLlxuICpcbiAqICAgICAgSWYgdGhlIHdsX3N1cmZhY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSB3bF9zdWJzdXJmYWNlIGlzIGRlc3Ryb3llZCwgdGhlXG4gKiAgICAgIHdsX3N1YnN1cmZhY2Ugb2JqZWN0IGJlY29tZXMgaW5lcnQuIE5vdGUsIHRoYXQgZGVzdHJveWluZyBlaXRoZXIgb2JqZWN0XG4gKiAgICAgIHRha2VzIGVmZmVjdCBpbW1lZGlhdGVseS4gSWYgeW91IG5lZWQgdG8gc3luY2hyb25pemUgdGhlIHJlbW92YWxcbiAqICAgICAgb2YgYSBzdWItc3VyZmFjZSB0byB0aGUgcGFyZW50IHN1cmZhY2UgdXBkYXRlLCB1bm1hcCB0aGUgc3ViLXN1cmZhY2VcbiAqICAgICAgZmlyc3QgYnkgYXR0YWNoaW5nIGEgTlVMTCB3bF9idWZmZXIsIHVwZGF0ZSBwYXJlbnQsIGFuZCB0aGVuIGRlc3Ryb3lcbiAqICAgICAgdGhlIHN1Yi1zdXJmYWNlLlxuICpcbiAqICAgICAgSWYgdGhlIHBhcmVudCB3bF9zdXJmYWNlIG9iamVjdCBpcyBkZXN0cm95ZWQsIHRoZSBzdWItc3VyZmFjZSBpc1xuICogICAgICB1bm1hcHBlZC5cbiAqICAgIFxuICovXG5jbGFzcyBXbFN1YnN1cmZhY2VQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBzdWItc3VyZmFjZSBpbnRlcmZhY2UgaXMgcmVtb3ZlZCBmcm9tIHRoZSB3bF9zdXJmYWNlIG9iamVjdFxuXHQgKlx0dGhhdCB3YXMgdHVybmVkIGludG8gYSBzdWItc3VyZmFjZSB3aXRoIGFcblx0ICpcdHdsX3N1YmNvbXBvc2l0b3IuZ2V0X3N1YnN1cmZhY2UgcmVxdWVzdC4gVGhlIHdsX3N1cmZhY2UncyBhc3NvY2lhdGlvblxuXHQgKlx0dG8gdGhlIHBhcmVudCBpcyBkZWxldGVkLCBhbmQgdGhlIHdsX3N1cmZhY2UgbG9zZXMgaXRzIHJvbGUgYXNcblx0ICpcdGEgc3ViLXN1cmZhY2UuIFRoZSB3bF9zdXJmYWNlIGlzIHVubWFwcGVkLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGVzdHJveSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgc2NoZWR1bGVzIGEgc3ViLXN1cmZhY2UgcG9zaXRpb24gY2hhbmdlLlxuXHQgKlx0VGhlIHN1Yi1zdXJmYWNlIHdpbGwgYmUgbW92ZWQgc28gdGhhdCBpdHMgb3JpZ2luICh0b3AgbGVmdFxuXHQgKlx0Y29ybmVyIHBpeGVsKSB3aWxsIGJlIGF0IHRoZSBsb2NhdGlvbiB4LCB5IG9mIHRoZSBwYXJlbnQgc3VyZmFjZVxuXHQgKlx0Y29vcmRpbmF0ZSBzeXN0ZW0uIFRoZSBjb29yZGluYXRlcyBhcmUgbm90IHJlc3RyaWN0ZWQgdG8gdGhlIHBhcmVudFxuXHQgKlx0c3VyZmFjZSBhcmVhLiBOZWdhdGl2ZSB2YWx1ZXMgYXJlIGFsbG93ZWQuXG5cdCAqXG5cdCAqXHRUaGUgc2NoZWR1bGVkIGNvb3JkaW5hdGVzIHdpbGwgdGFrZSBlZmZlY3Qgd2hlbmV2ZXIgdGhlIHN0YXRlIG9mIHRoZVxuXHQgKlx0cGFyZW50IHN1cmZhY2UgaXMgYXBwbGllZC4gV2hlbiB0aGlzIGhhcHBlbnMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZVxuXHQgKlx0cGFyZW50IHN1cmZhY2UgaXMgaW4gc3luY2hyb25pemVkIG1vZGUgb3Igbm90LiBTZWVcblx0ICpcdHdsX3N1YnN1cmZhY2Uuc2V0X3N5bmMgYW5kIHdsX3N1YnN1cmZhY2Uuc2V0X2Rlc3luYyBmb3IgZGV0YWlscy5cblx0ICpcblx0ICpcdElmIG1vcmUgdGhhbiBvbmUgc2V0X3Bvc2l0aW9uIHJlcXVlc3QgaXMgaW52b2tlZCBieSB0aGUgY2xpZW50IGJlZm9yZVxuXHQgKlx0dGhlIGNvbW1pdCBvZiB0aGUgcGFyZW50IHN1cmZhY2UsIHRoZSBwb3NpdGlvbiBvZiBhIG5ldyByZXF1ZXN0IGFsd2F5c1xuXHQgKlx0cmVwbGFjZXMgdGhlIHNjaGVkdWxlZCBwb3NpdGlvbiBmcm9tIGFueSBwcmV2aW91cyByZXF1ZXN0LlxuXHQgKlxuXHQgKlx0VGhlIGluaXRpYWwgcG9zaXRpb24gaXMgMCwgMC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggeCBjb29yZGluYXRlIGluIHRoZSBwYXJlbnQgc3VyZmFjZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjb29yZGluYXRlIGluIHRoZSBwYXJlbnQgc3VyZmFjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldFBvc2l0aW9uICh4LCB5KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMSwgW2ludCh4KSwgaW50KHkpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBzdWItc3VyZmFjZSBpcyB0YWtlbiBmcm9tIHRoZSBzdGFjaywgYW5kIHB1dCBiYWNrIGp1c3Rcblx0ICpcdGFib3ZlIHRoZSByZWZlcmVuY2Ugc3VyZmFjZSwgY2hhbmdpbmcgdGhlIHotb3JkZXIgb2YgdGhlIHN1Yi1zdXJmYWNlcy5cblx0ICpcdFRoZSByZWZlcmVuY2Ugc3VyZmFjZSBtdXN0IGJlIG9uZSBvZiB0aGUgc2libGluZyBzdXJmYWNlcywgb3IgdGhlXG5cdCAqXHRwYXJlbnQgc3VyZmFjZS4gVXNpbmcgYW55IG90aGVyIHN1cmZhY2UsIGluY2x1ZGluZyB0aGlzIHN1Yi1zdXJmYWNlLFxuXHQgKlx0d2lsbCBjYXVzZSBhIHByb3RvY29sIGVycm9yLlxuXHQgKlxuXHQgKlx0VGhlIHotb3JkZXIgaXMgZG91YmxlLWJ1ZmZlcmVkLiBSZXF1ZXN0cyBhcmUgaGFuZGxlZCBpbiBvcmRlciBhbmRcblx0ICpcdGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gYSBwZW5kaW5nIHN0YXRlLiBUaGUgZmluYWwgcGVuZGluZyBzdGF0ZSBpc1xuXHQgKlx0Y29waWVkIHRvIHRoZSBhY3RpdmUgc3RhdGUgdGhlIG5leHQgdGltZSB0aGUgc3RhdGUgb2YgdGhlIHBhcmVudFxuXHQgKlx0c3VyZmFjZSBpcyBhcHBsaWVkLiBXaGVuIHRoaXMgaGFwcGVucyBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIHBhcmVudFxuXHQgKlx0c3VyZmFjZSBpcyBpbiBzeW5jaHJvbml6ZWQgbW9kZSBvciBub3QuIFNlZSB3bF9zdWJzdXJmYWNlLnNldF9zeW5jIGFuZFxuXHQgKlx0d2xfc3Vic3VyZmFjZS5zZXRfZGVzeW5jIGZvciBkZXRhaWxzLlxuXHQgKlxuXHQgKlx0QSBuZXcgc3ViLXN1cmZhY2UgaXMgaW5pdGlhbGx5IGFkZGVkIGFzIHRoZSB0b3AtbW9zdCBpbiB0aGUgc3RhY2tcblx0ICpcdG9mIGl0cyBzaWJsaW5ncyBhbmQgcGFyZW50LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNpYmxpbmcgdGhlIHJlZmVyZW5jZSBzdXJmYWNlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0cGxhY2VBYm92ZSAoc2libGluZykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDIsIFtvYmplY3Qoc2libGluZyldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgc3ViLXN1cmZhY2UgaXMgcGxhY2VkIGp1c3QgYmVsb3cgdGhlIHJlZmVyZW5jZSBzdXJmYWNlLlxuXHQgKlx0U2VlIHdsX3N1YnN1cmZhY2UucGxhY2VfYWJvdmUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc2libGluZyB0aGUgcmVmZXJlbmNlIHN1cmZhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRwbGFjZUJlbG93IChzaWJsaW5nKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMywgW29iamVjdChzaWJsaW5nKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdENoYW5nZSB0aGUgY29tbWl0IGJlaGF2aW91ciBvZiB0aGUgc3ViLXN1cmZhY2UgdG8gc3luY2hyb25pemVkXG5cdCAqXHRtb2RlLCBhbHNvIGRlc2NyaWJlZCBhcyB0aGUgcGFyZW50IGRlcGVuZGVudCBtb2RlLlxuXHQgKlxuXHQgKlx0SW4gc3luY2hyb25pemVkIG1vZGUsIHdsX3N1cmZhY2UuY29tbWl0IG9uIGEgc3ViLXN1cmZhY2Ugd2lsbFxuXHQgKlx0YWNjdW11bGF0ZSB0aGUgY29tbWl0dGVkIHN0YXRlIGluIGEgY2FjaGUsIGJ1dCB0aGUgc3RhdGUgd2lsbFxuXHQgKlx0bm90IGJlIGFwcGxpZWQgYW5kIGhlbmNlIHdpbGwgbm90IGNoYW5nZSB0aGUgY29tcG9zaXRvciBvdXRwdXQuXG5cdCAqXHRUaGUgY2FjaGVkIHN0YXRlIGlzIGFwcGxpZWQgdG8gdGhlIHN1Yi1zdXJmYWNlIGltbWVkaWF0ZWx5IGFmdGVyXG5cdCAqXHR0aGUgcGFyZW50IHN1cmZhY2UncyBzdGF0ZSBpcyBhcHBsaWVkLiBUaGlzIGVuc3VyZXMgYXRvbWljXG5cdCAqXHR1cGRhdGVzIG9mIHRoZSBwYXJlbnQgYW5kIGFsbCBpdHMgc3luY2hyb25pemVkIHN1Yi1zdXJmYWNlcy5cblx0ICpcdEFwcGx5aW5nIHRoZSBjYWNoZWQgc3RhdGUgd2lsbCBpbnZhbGlkYXRlIHRoZSBjYWNoZSwgc28gZnVydGhlclxuXHQgKlx0cGFyZW50IHN1cmZhY2UgY29tbWl0cyBkbyBub3QgKHJlLSlhcHBseSBvbGQgc3RhdGUuXG5cdCAqXG5cdCAqXHRTZWUgd2xfc3Vic3VyZmFjZSBmb3IgdGhlIHJlY3Vyc2l2ZSBlZmZlY3Qgb2YgdGhpcyBtb2RlLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0U3luYyAoKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNCwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdENoYW5nZSB0aGUgY29tbWl0IGJlaGF2aW91ciBvZiB0aGUgc3ViLXN1cmZhY2UgdG8gZGVzeW5jaHJvbml6ZWRcblx0ICpcdG1vZGUsIGFsc28gZGVzY3JpYmVkIGFzIGluZGVwZW5kZW50IG9yIGZyZWVseSBydW5uaW5nIG1vZGUuXG5cdCAqXG5cdCAqXHRJbiBkZXN5bmNocm9uaXplZCBtb2RlLCB3bF9zdXJmYWNlLmNvbW1pdCBvbiBhIHN1Yi1zdXJmYWNlIHdpbGxcblx0ICpcdGFwcGx5IHRoZSBwZW5kaW5nIHN0YXRlIGRpcmVjdGx5LCB3aXRob3V0IGNhY2hpbmcsIGFzIGhhcHBlbnNcblx0ICpcdG5vcm1hbGx5IHdpdGggYSB3bF9zdXJmYWNlLiBDYWxsaW5nIHdsX3N1cmZhY2UuY29tbWl0IG9uIHRoZVxuXHQgKlx0cGFyZW50IHN1cmZhY2UgaGFzIG5vIGVmZmVjdCBvbiB0aGUgc3ViLXN1cmZhY2UncyB3bF9zdXJmYWNlXG5cdCAqXHRzdGF0ZS4gVGhpcyBtb2RlIGFsbG93cyBhIHN1Yi1zdXJmYWNlIHRvIGJlIHVwZGF0ZWQgb24gaXRzIG93bi5cblx0ICpcblx0ICpcdElmIGNhY2hlZCBzdGF0ZSBleGlzdHMgd2hlbiB3bF9zdXJmYWNlLmNvbW1pdCBpcyBjYWxsZWQgaW5cblx0ICpcdGRlc3luY2hyb25pemVkIG1vZGUsIHRoZSBwZW5kaW5nIHN0YXRlIGlzIGFkZGVkIHRvIHRoZSBjYWNoZWRcblx0ICpcdHN0YXRlLCBhbmQgYXBwbGllZCBhcyBhIHdob2xlLiBUaGlzIGludmFsaWRhdGVzIHRoZSBjYWNoZS5cblx0ICpcblx0ICpcdE5vdGU6IGV2ZW4gaWYgYSBzdWItc3VyZmFjZSBpcyBzZXQgdG8gZGVzeW5jaHJvbml6ZWQsIGEgcGFyZW50XG5cdCAqXHRzdWItc3VyZmFjZSBtYXkgb3ZlcnJpZGUgaXQgdG8gYmVoYXZlIGFzIHN5bmNocm9uaXplZC4gRm9yIGRldGFpbHMsXG5cdCAqXHRzZWUgd2xfc3Vic3VyZmFjZS5cblx0ICpcblx0ICpcdElmIGEgc3VyZmFjZSdzIHBhcmVudCBzdXJmYWNlIGJlaGF2ZXMgYXMgZGVzeW5jaHJvbml6ZWQsIHRoZW5cblx0ICpcdHRoZSBjYWNoZWQgc3RhdGUgaXMgYXBwbGllZCBvbiBzZXRfZGVzeW5jLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0RGVzeW5jICgpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA1LCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFN1YnN1cmZhY2VFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cbn1cbldsU3Vic3VyZmFjZVByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9zdWJzdXJmYWNlJ1xuXG5XbFN1YnN1cmZhY2VQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIHdsX3N1cmZhY2UgaXMgbm90IGEgc2libGluZyBvciB0aGUgcGFyZW50XG4gICAqL1xuICBiYWRTdXJmYWNlOiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsU3Vic3VyZmFjZVByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xTdXJmYWNlRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgaXMgZW1pdHRlZCB3aGVuZXZlciBhIHN1cmZhY2UncyBjcmVhdGlvbiwgbW92ZW1lbnQsIG9yIHJlc2l6aW5nXG5cdCAqXHRyZXN1bHRzIGluIHNvbWUgcGFydCBvZiBpdCBiZWluZyB3aXRoaW4gdGhlIHNjYW5vdXQgcmVnaW9uIG9mIGFuXG5cdCAqXHRvdXRwdXQuXG5cdCAqXG5cdCAqXHROb3RlIHRoYXQgYSBzdXJmYWNlIG1heSBiZSBvdmVybGFwcGluZyB3aXRoIHplcm8gb3IgbW9yZSBvdXRwdXRzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG91dHB1dCBvdXRwdXQgZW50ZXJlZCBieSB0aGUgc3VyZmFjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGVudGVyKG91dHB1dCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgaXMgZW1pdHRlZCB3aGVuZXZlciBhIHN1cmZhY2UncyBjcmVhdGlvbiwgbW92ZW1lbnQsIG9yIHJlc2l6aW5nXG5cdCAqXHRyZXN1bHRzIGluIGl0IG5vIGxvbmdlciBoYXZpbmcgYW55IHBhcnQgb2YgaXQgd2l0aGluIHRoZSBzY2Fub3V0IHJlZ2lvblxuXHQgKlx0b2YgYW4gb3V0cHV0LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG91dHB1dCBvdXRwdXQgbGVmdCBieSB0aGUgc3VyZmFjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGxlYXZlKG91dHB1dCkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgV2xDYWxsYmFja1Byb3h5IGZyb20gJy4vV2xDYWxsYmFja1Byb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIEEgc3VyZmFjZSBpcyBhIHJlY3Rhbmd1bGFyIGFyZWEgdGhhdCBpcyBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlbi5cbiAqICAgICAgSXQgaGFzIGEgbG9jYXRpb24sIHNpemUgYW5kIHBpeGVsIGNvbnRlbnRzLlxuICpcbiAqICAgICAgVGhlIHNpemUgb2YgYSBzdXJmYWNlIChhbmQgcmVsYXRpdmUgcG9zaXRpb25zIG9uIGl0KSBpcyBkZXNjcmliZWRcbiAqICAgICAgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcywgd2hpY2ggbWF5IGRpZmZlciBmcm9tIHRoZSBidWZmZXJcbiAqICAgICAgY29vcmRpbmF0ZXMgb2YgdGhlIHBpeGVsIGNvbnRlbnQsIGluIGNhc2UgYSBidWZmZXJfdHJhbnNmb3JtXG4gKiAgICAgIG9yIGEgYnVmZmVyX3NjYWxlIGlzIHVzZWQuXG4gKlxuICogICAgICBBIHN1cmZhY2Ugd2l0aG91dCBhIFwicm9sZVwiIGlzIGZhaXJseSB1c2VsZXNzOiBhIGNvbXBvc2l0b3IgZG9lc1xuICogICAgICBub3Qga25vdyB3aGVyZSwgd2hlbiBvciBob3cgdG8gcHJlc2VudCBpdC4gVGhlIHJvbGUgaXMgdGhlXG4gKiAgICAgIHB1cnBvc2Ugb2YgYSB3bF9zdXJmYWNlLiBFeGFtcGxlcyBvZiByb2xlcyBhcmUgYSBjdXJzb3IgZm9yIGFcbiAqICAgICAgcG9pbnRlciAoYXMgc2V0IGJ5IHdsX3BvaW50ZXIuc2V0X2N1cnNvciksIGEgZHJhZyBpY29uXG4gKiAgICAgICh3bF9kYXRhX2RldmljZS5zdGFydF9kcmFnKSwgYSBzdWItc3VyZmFjZVxuICogICAgICAod2xfc3ViY29tcG9zaXRvci5nZXRfc3Vic3VyZmFjZSksIGFuZCBhIHdpbmRvdyBhcyBkZWZpbmVkIGJ5IGFcbiAqICAgICAgc2hlbGwgcHJvdG9jb2wgKGUuZy4gd2xfc2hlbGwuZ2V0X3NoZWxsX3N1cmZhY2UpLlxuICpcbiAqICAgICAgQSBzdXJmYWNlIGNhbiBoYXZlIG9ubHkgb25lIHJvbGUgYXQgYSB0aW1lLiBJbml0aWFsbHkgYVxuICogICAgICB3bF9zdXJmYWNlIGRvZXMgbm90IGhhdmUgYSByb2xlLiBPbmNlIGEgd2xfc3VyZmFjZSBpcyBnaXZlbiBhXG4gKiAgICAgIHJvbGUsIGl0IGlzIHNldCBwZXJtYW5lbnRseSBmb3IgdGhlIHdob2xlIGxpZmV0aW1lIG9mIHRoZVxuICogICAgICB3bF9zdXJmYWNlIG9iamVjdC4gR2l2aW5nIHRoZSBjdXJyZW50IHJvbGUgYWdhaW4gaXMgYWxsb3dlZCxcbiAqICAgICAgdW5sZXNzIGV4cGxpY2l0bHkgZm9yYmlkZGVuIGJ5IHRoZSByZWxldmFudCBpbnRlcmZhY2VcbiAqICAgICAgc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiAgICAgIFN1cmZhY2Ugcm9sZXMgYXJlIGdpdmVuIGJ5IHJlcXVlc3RzIGluIG90aGVyIGludGVyZmFjZXMgc3VjaCBhc1xuICogICAgICB3bF9wb2ludGVyLnNldF9jdXJzb3IuIFRoZSByZXF1ZXN0IHNob3VsZCBleHBsaWNpdGx5IG1lbnRpb25cbiAqICAgICAgdGhhdCB0aGlzIHJlcXVlc3QgZ2l2ZXMgYSByb2xlIHRvIGEgd2xfc3VyZmFjZS4gT2Z0ZW4sIHRoaXNcbiAqICAgICAgcmVxdWVzdCBhbHNvIGNyZWF0ZXMgYSBuZXcgcHJvdG9jb2wgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGVcbiAqICAgICAgcm9sZSBhbmQgYWRkcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgdG8gd2xfc3VyZmFjZS4gV2hlbiBhXG4gKiAgICAgIGNsaWVudCB3YW50cyB0byBkZXN0cm95IGEgd2xfc3VyZmFjZSwgdGhleSBtdXN0IGRlc3Ryb3kgdGhpcyAncm9sZVxuICogICAgICBvYmplY3QnIGJlZm9yZSB0aGUgd2xfc3VyZmFjZS5cbiAqXG4gKiAgICAgIERlc3Ryb3lpbmcgdGhlIHJvbGUgb2JqZWN0IGRvZXMgbm90IHJlbW92ZSB0aGUgcm9sZSBmcm9tIHRoZVxuICogICAgICB3bF9zdXJmYWNlLCBidXQgaXQgbWF5IHN0b3AgdGhlIHdsX3N1cmZhY2UgZnJvbSBcInBsYXlpbmcgdGhlIHJvbGVcIi5cbiAqICAgICAgRm9yIGluc3RhbmNlLCBpZiBhIHdsX3N1YnN1cmZhY2Ugb2JqZWN0IGlzIGRlc3Ryb3llZCwgdGhlIHdsX3N1cmZhY2VcbiAqICAgICAgaXQgd2FzIGNyZWF0ZWQgZm9yIHdpbGwgYmUgdW5tYXBwZWQgYW5kIGZvcmdldCBpdHMgcG9zaXRpb24gYW5kXG4gKiAgICAgIHotb3JkZXIuIEl0IGlzIGFsbG93ZWQgdG8gY3JlYXRlIGEgd2xfc3Vic3VyZmFjZSBmb3IgdGhlIHNhbWVcbiAqICAgICAgd2xfc3VyZmFjZSBhZ2FpbiwgYnV0IGl0IGlzIG5vdCBhbGxvd2VkIHRvIHVzZSB0aGUgd2xfc3VyZmFjZSBhc1xuICogICAgICBhIGN1cnNvciAoY3Vyc29yIGlzIGEgZGlmZmVyZW50IHJvbGUgdGhhbiBzdWItc3VyZmFjZSwgYW5kIHJvbGVcbiAqICAgICAgc3dpdGNoaW5nIGlzIG5vdCBhbGxvd2VkKS5cbiAqICAgIFxuICovXG5jbGFzcyBXbFN1cmZhY2VQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdERlbGV0ZXMgdGhlIHN1cmZhY2UgYW5kIGludmFsaWRhdGVzIGl0cyBvYmplY3QgSUQuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkZXN0cm95ICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0IGEgYnVmZmVyIGFzIHRoZSBjb250ZW50IG9mIHRoaXMgc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSBuZXcgc2l6ZSBvZiB0aGUgc3VyZmFjZSBpcyBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBidWZmZXJcblx0ICpcdHNpemUgdHJhbnNmb3JtZWQgYnkgdGhlIGludmVyc2UgYnVmZmVyX3RyYW5zZm9ybSBhbmQgdGhlXG5cdCAqXHRpbnZlcnNlIGJ1ZmZlcl9zY2FsZS4gVGhpcyBtZWFucyB0aGF0IHRoZSBzdXBwbGllZCBidWZmZXJcblx0ICpcdG11c3QgYmUgYW4gaW50ZWdlciBtdWx0aXBsZSBvZiB0aGUgYnVmZmVyX3NjYWxlLlxuXHQgKlxuXHQgKlx0VGhlIHggYW5kIHkgYXJndW1lbnRzIHNwZWNpZnkgdGhlIGxvY2F0aW9uIG9mIHRoZSBuZXcgcGVuZGluZ1xuXHQgKlx0YnVmZmVyJ3MgdXBwZXIgbGVmdCBjb3JuZXIsIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IGJ1ZmZlcidzIHVwcGVyXG5cdCAqXHRsZWZ0IGNvcm5lciwgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcy4gSW4gb3RoZXIgd29yZHMsIHRoZVxuXHQgKlx0eCBhbmQgeSwgY29tYmluZWQgd2l0aCB0aGUgbmV3IHN1cmZhY2Ugc2l6ZSBkZWZpbmUgaW4gd2hpY2hcblx0ICpcdGRpcmVjdGlvbnMgdGhlIHN1cmZhY2UncyBzaXplIGNoYW5nZXMuXG5cdCAqXG5cdCAqXHRTdXJmYWNlIGNvbnRlbnRzIGFyZSBkb3VibGUtYnVmZmVyZWQgc3RhdGUsIHNlZSB3bF9zdXJmYWNlLmNvbW1pdC5cblx0ICpcblx0ICpcdFRoZSBpbml0aWFsIHN1cmZhY2UgY29udGVudHMgYXJlIHZvaWQ7IHRoZXJlIGlzIG5vIGNvbnRlbnQuXG5cdCAqXHR3bF9zdXJmYWNlLmF0dGFjaCBhc3NpZ25zIHRoZSBnaXZlbiB3bF9idWZmZXIgYXMgdGhlIHBlbmRpbmdcblx0ICpcdHdsX2J1ZmZlci4gd2xfc3VyZmFjZS5jb21taXQgbWFrZXMgdGhlIHBlbmRpbmcgd2xfYnVmZmVyIHRoZSBuZXdcblx0ICpcdHN1cmZhY2UgY29udGVudHMsIGFuZCB0aGUgc2l6ZSBvZiB0aGUgc3VyZmFjZSBiZWNvbWVzIHRoZSBzaXplXG5cdCAqXHRjYWxjdWxhdGVkIGZyb20gdGhlIHdsX2J1ZmZlciwgYXMgZGVzY3JpYmVkIGFib3ZlLiBBZnRlciBjb21taXQsXG5cdCAqXHR0aGVyZSBpcyBubyBwZW5kaW5nIGJ1ZmZlciB1bnRpbCB0aGUgbmV4dCBhdHRhY2guXG5cdCAqXG5cdCAqXHRDb21taXR0aW5nIGEgcGVuZGluZyB3bF9idWZmZXIgYWxsb3dzIHRoZSBjb21wb3NpdG9yIHRvIHJlYWQgdGhlXG5cdCAqXHRwaXhlbHMgaW4gdGhlIHdsX2J1ZmZlci4gVGhlIGNvbXBvc2l0b3IgbWF5IGFjY2VzcyB0aGUgcGl4ZWxzIGF0XG5cdCAqXHRhbnkgdGltZSBhZnRlciB0aGUgd2xfc3VyZmFjZS5jb21taXQgcmVxdWVzdC4gV2hlbiB0aGUgY29tcG9zaXRvclxuXHQgKlx0d2lsbCBub3QgYWNjZXNzIHRoZSBwaXhlbHMgYW55bW9yZSwgaXQgd2lsbCBzZW5kIHRoZVxuXHQgKlx0d2xfYnVmZmVyLnJlbGVhc2UgZXZlbnQuIE9ubHkgYWZ0ZXIgcmVjZWl2aW5nIHdsX2J1ZmZlci5yZWxlYXNlLFxuXHQgKlx0dGhlIGNsaWVudCBtYXkgcmV1c2UgdGhlIHdsX2J1ZmZlci4gQSB3bF9idWZmZXIgdGhhdCBoYXMgYmVlblxuXHQgKlx0YXR0YWNoZWQgYW5kIHRoZW4gcmVwbGFjZWQgYnkgYW5vdGhlciBhdHRhY2ggaW5zdGVhZCBvZiBjb21taXR0ZWRcblx0ICpcdHdpbGwgbm90IHJlY2VpdmUgYSByZWxlYXNlIGV2ZW50LCBhbmQgaXMgbm90IHVzZWQgYnkgdGhlXG5cdCAqXHRjb21wb3NpdG9yLlxuXHQgKlxuXHQgKlx0RGVzdHJveWluZyB0aGUgd2xfYnVmZmVyIGFmdGVyIHdsX2J1ZmZlci5yZWxlYXNlIGRvZXMgbm90IGNoYW5nZVxuXHQgKlx0dGhlIHN1cmZhY2UgY29udGVudHMuIEhvd2V2ZXIsIGlmIHRoZSBjbGllbnQgZGVzdHJveXMgdGhlXG5cdCAqXHR3bF9idWZmZXIgYmVmb3JlIHJlY2VpdmluZyB0aGUgd2xfYnVmZmVyLnJlbGVhc2UgZXZlbnQsIHRoZSBzdXJmYWNlXG5cdCAqXHRjb250ZW50cyBiZWNvbWUgdW5kZWZpbmVkIGltbWVkaWF0ZWx5LlxuXHQgKlxuXHQgKlx0SWYgd2xfc3VyZmFjZS5hdHRhY2ggaXMgc2VudCB3aXRoIGEgTlVMTCB3bF9idWZmZXIsIHRoZVxuXHQgKlx0Zm9sbG93aW5nIHdsX3N1cmZhY2UuY29tbWl0IHdpbGwgcmVtb3ZlIHRoZSBzdXJmYWNlIGNvbnRlbnQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Pyp9IGJ1ZmZlciBidWZmZXIgb2Ygc3VyZmFjZSBjb250ZW50cyBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggc3VyZmFjZS1sb2NhbCB4IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0YXR0YWNoIChidWZmZXIsIHgsIHkpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxLCBbb2JqZWN0T3B0aW9uYWwoYnVmZmVyKSwgaW50KHgpLCBpbnQoeSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgaXMgdXNlZCB0byBkZXNjcmliZSB0aGUgcmVnaW9ucyB3aGVyZSB0aGUgcGVuZGluZ1xuXHQgKlx0YnVmZmVyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IHN1cmZhY2UgY29udGVudHMsIGFuZCB3aGVyZVxuXHQgKlx0dGhlIHN1cmZhY2UgdGhlcmVmb3JlIG5lZWRzIHRvIGJlIHJlcGFpbnRlZC4gVGhlIGNvbXBvc2l0b3Jcblx0ICpcdGlnbm9yZXMgdGhlIHBhcnRzIG9mIHRoZSBkYW1hZ2UgdGhhdCBmYWxsIG91dHNpZGUgb2YgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHREYW1hZ2UgaXMgZG91YmxlLWJ1ZmZlcmVkIHN0YXRlLCBzZWUgd2xfc3VyZmFjZS5jb21taXQuXG5cdCAqXG5cdCAqXHRUaGUgZGFtYWdlIHJlY3RhbmdsZSBpcyBzcGVjaWZpZWQgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcyxcblx0ICpcdHdoZXJlIHggYW5kIHkgc3BlY2lmeSB0aGUgdXBwZXIgbGVmdCBjb3JuZXIgb2YgdGhlIGRhbWFnZSByZWN0YW5nbGUuXG5cdCAqXG5cdCAqXHRUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgcGVuZGluZyBkYW1hZ2UgaXMgZW1wdHk6IG5vIGRhbWFnZS5cblx0ICpcdHdsX3N1cmZhY2UuZGFtYWdlIGFkZHMgcGVuZGluZyBkYW1hZ2U6IHRoZSBuZXcgcGVuZGluZyBkYW1hZ2Vcblx0ICpcdGlzIHRoZSB1bmlvbiBvZiBvbGQgcGVuZGluZyBkYW1hZ2UgYW5kIHRoZSBnaXZlbiByZWN0YW5nbGUuXG5cdCAqXG5cdCAqXHR3bF9zdXJmYWNlLmNvbW1pdCBhc3NpZ25zIHBlbmRpbmcgZGFtYWdlIGFzIHRoZSBjdXJyZW50IGRhbWFnZSxcblx0ICpcdGFuZCBjbGVhcnMgcGVuZGluZyBkYW1hZ2UuIFRoZSBzZXJ2ZXIgd2lsbCBjbGVhciB0aGUgY3VycmVudFxuXHQgKlx0ZGFtYWdlIGFzIGl0IHJlcGFpbnRzIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0QWx0ZXJuYXRpdmVseSwgZGFtYWdlIGNhbiBiZSBwb3N0ZWQgd2l0aCB3bF9zdXJmYWNlLmRhbWFnZV9idWZmZXJcblx0ICpcdHdoaWNoIHVzZXMgYnVmZmVyIGNvb3JkaW5hdGVzIGluc3RlYWQgb2Ygc3VyZmFjZSBjb29yZGluYXRlcyxcblx0ICpcdGFuZCBpcyBwcm9iYWJseSB0aGUgcHJlZmVycmVkIGFuZCBpbnR1aXRpdmUgd2F5IG9mIGRvaW5nIHRoaXMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBzdXJmYWNlLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIHdpZHRoIG9mIGRhbWFnZSByZWN0YW5nbGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgaGVpZ2h0IG9mIGRhbWFnZSByZWN0YW5nbGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkYW1hZ2UgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAyLCBbaW50KHgpLCBpbnQoeSksIGludCh3aWR0aCksIGludChoZWlnaHQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0UmVxdWVzdCBhIG5vdGlmaWNhdGlvbiB3aGVuIGl0IGlzIGEgZ29vZCB0aW1lIHRvIHN0YXJ0IGRyYXdpbmcgYSBuZXdcblx0ICpcdGZyYW1lLCBieSBjcmVhdGluZyBhIGZyYW1lIGNhbGxiYWNrLiBUaGlzIGlzIHVzZWZ1bCBmb3IgdGhyb3R0bGluZ1xuXHQgKlx0cmVkcmF3aW5nIG9wZXJhdGlvbnMsIGFuZCBkcml2aW5nIGFuaW1hdGlvbnMuXG5cdCAqXG5cdCAqXHRXaGVuIGEgY2xpZW50IGlzIGFuaW1hdGluZyBvbiBhIHdsX3N1cmZhY2UsIGl0IGNhbiB1c2UgdGhlICdmcmFtZSdcblx0ICpcdHJlcXVlc3QgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gaXQgaXMgYSBnb29kIHRpbWUgdG8gZHJhdyBhbmQgY29tbWl0IHRoZVxuXHQgKlx0bmV4dCBmcmFtZSBvZiBhbmltYXRpb24uIElmIHRoZSBjbGllbnQgY29tbWl0cyBhbiB1cGRhdGUgZWFybGllciB0aGFuXG5cdCAqXHR0aGF0LCBpdCBpcyBsaWtlbHkgdGhhdCBzb21lIHVwZGF0ZXMgd2lsbCBub3QgbWFrZSBpdCB0byB0aGUgZGlzcGxheSxcblx0ICpcdGFuZCB0aGUgY2xpZW50IGlzIHdhc3RpbmcgcmVzb3VyY2VzIGJ5IGRyYXdpbmcgdG9vIG9mdGVuLlxuXHQgKlxuXHQgKlx0VGhlIGZyYW1lIHJlcXVlc3Qgd2lsbCB0YWtlIGVmZmVjdCBvbiB0aGUgbmV4dCB3bF9zdXJmYWNlLmNvbW1pdC5cblx0ICpcdFRoZSBub3RpZmljYXRpb24gd2lsbCBvbmx5IGJlIHBvc3RlZCBmb3Igb25lIGZyYW1lIHVubGVzc1xuXHQgKlx0cmVxdWVzdGVkIGFnYWluLiBGb3IgYSB3bF9zdXJmYWNlLCB0aGUgbm90aWZpY2F0aW9ucyBhcmUgcG9zdGVkIGluXG5cdCAqXHR0aGUgb3JkZXIgdGhlIGZyYW1lIHJlcXVlc3RzIHdlcmUgY29tbWl0dGVkLlxuXHQgKlxuXHQgKlx0VGhlIHNlcnZlciBtdXN0IHNlbmQgdGhlIG5vdGlmaWNhdGlvbnMgc28gdGhhdCBhIGNsaWVudFxuXHQgKlx0d2lsbCBub3Qgc2VuZCBleGNlc3NpdmUgdXBkYXRlcywgd2hpbGUgc3RpbGwgYWxsb3dpbmdcblx0ICpcdHRoZSBoaWdoZXN0IHBvc3NpYmxlIHVwZGF0ZSByYXRlIGZvciBjbGllbnRzIHRoYXQgd2FpdCBmb3IgdGhlIHJlcGx5XG5cdCAqXHRiZWZvcmUgZHJhd2luZyBhZ2Fpbi4gVGhlIHNlcnZlciBzaG91bGQgZ2l2ZSBzb21lIHRpbWUgZm9yIHRoZSBjbGllbnRcblx0ICpcdHRvIGRyYXcgYW5kIGNvbW1pdCBhZnRlciBzZW5kaW5nIHRoZSBmcmFtZSBjYWxsYmFjayBldmVudHMgdG8gbGV0IGl0XG5cdCAqXHRoaXQgdGhlIG5leHQgb3V0cHV0IHJlZnJlc2guXG5cdCAqXG5cdCAqXHRBIHNlcnZlciBzaG91bGQgYXZvaWQgc2lnbmFsaW5nIHRoZSBmcmFtZSBjYWxsYmFja3MgaWYgdGhlXG5cdCAqXHRzdXJmYWNlIGlzIG5vdCB2aXNpYmxlIGluIGFueSB3YXksIGUuZy4gdGhlIHN1cmZhY2UgaXMgb2ZmLXNjcmVlbixcblx0ICpcdG9yIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgb3RoZXIgb3BhcXVlIHN1cmZhY2VzLlxuXHQgKlxuXHQgKlx0VGhlIG9iamVjdCByZXR1cm5lZCBieSB0aGlzIHJlcXVlc3Qgd2lsbCBiZSBkZXN0cm95ZWQgYnkgdGhlXG5cdCAqXHRjb21wb3NpdG9yIGFmdGVyIHRoZSBjYWxsYmFjayBpcyBmaXJlZCBhbmQgYXMgc3VjaCB0aGUgY2xpZW50IG11c3Qgbm90XG5cdCAqXHRhdHRlbXB0IHRvIHVzZSBpdCBhZnRlciB0aGF0IHBvaW50LlxuXHQgKlxuXHQgKlx0VGhlIGNhbGxiYWNrX2RhdGEgcGFzc2VkIGluIHRoZSBjYWxsYmFjayBpcyB0aGUgY3VycmVudCB0aW1lLCBpblxuXHQgKlx0bWlsbGlzZWNvbmRzLCB3aXRoIGFuIHVuZGVmaW5lZCBiYXNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtXbENhbGxiYWNrUHJveHl9IGNhbGxiYWNrIG9iamVjdCBmb3IgdGhlIGZyYW1lIHJlcXVlc3QgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRmcmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMywgV2xDYWxsYmFja1Byb3h5LCBbbmV3T2JqZWN0KCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3Qgc2V0cyB0aGUgcmVnaW9uIG9mIHRoZSBzdXJmYWNlIHRoYXQgY29udGFpbnNcblx0ICpcdG9wYXF1ZSBjb250ZW50LlxuXHQgKlxuXHQgKlx0VGhlIG9wYXF1ZSByZWdpb24gaXMgYW4gb3B0aW1pemF0aW9uIGhpbnQgZm9yIHRoZSBjb21wb3NpdG9yXG5cdCAqXHR0aGF0IGxldHMgaXQgb3B0aW1pemUgdGhlIHJlZHJhd2luZyBvZiBjb250ZW50IGJlaGluZCBvcGFxdWVcblx0ICpcdHJlZ2lvbnMuICBTZXR0aW5nIGFuIG9wYXF1ZSByZWdpb24gaXMgbm90IHJlcXVpcmVkIGZvciBjb3JyZWN0XG5cdCAqXHRiZWhhdmlvdXIsIGJ1dCBtYXJraW5nIHRyYW5zcGFyZW50IGNvbnRlbnQgYXMgb3BhcXVlIHdpbGwgcmVzdWx0XG5cdCAqXHRpbiByZXBhaW50IGFydGlmYWN0cy5cblx0ICpcblx0ICpcdFRoZSBvcGFxdWUgcmVnaW9uIGlzIHNwZWNpZmllZCBpbiBzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGVzLlxuXHQgKlxuXHQgKlx0VGhlIGNvbXBvc2l0b3IgaWdub3JlcyB0aGUgcGFydHMgb2YgdGhlIG9wYXF1ZSByZWdpb24gdGhhdCBmYWxsXG5cdCAqXHRvdXRzaWRlIG9mIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0T3BhcXVlIHJlZ2lvbiBpcyBkb3VibGUtYnVmZmVyZWQgc3RhdGUsIHNlZSB3bF9zdXJmYWNlLmNvbW1pdC5cblx0ICpcblx0ICpcdHdsX3N1cmZhY2Uuc2V0X29wYXF1ZV9yZWdpb24gY2hhbmdlcyB0aGUgcGVuZGluZyBvcGFxdWUgcmVnaW9uLlxuXHQgKlx0d2xfc3VyZmFjZS5jb21taXQgY29waWVzIHRoZSBwZW5kaW5nIHJlZ2lvbiB0byB0aGUgY3VycmVudCByZWdpb24uXG5cdCAqXHRPdGhlcndpc2UsIHRoZSBwZW5kaW5nIGFuZCBjdXJyZW50IHJlZ2lvbnMgYXJlIG5ldmVyIGNoYW5nZWQuXG5cdCAqXG5cdCAqXHRUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgYW4gb3BhcXVlIHJlZ2lvbiBpcyBlbXB0eS4gU2V0dGluZyB0aGUgcGVuZGluZ1xuXHQgKlx0b3BhcXVlIHJlZ2lvbiBoYXMgY29weSBzZW1hbnRpY3MsIGFuZCB0aGUgd2xfcmVnaW9uIG9iamVjdCBjYW4gYmVcblx0ICpcdGRlc3Ryb3llZCBpbW1lZGlhdGVseS4gQSBOVUxMIHdsX3JlZ2lvbiBjYXVzZXMgdGhlIHBlbmRpbmcgb3BhcXVlXG5cdCAqXHRyZWdpb24gdG8gYmUgc2V0IHRvIGVtcHR5LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0gez8qfSByZWdpb24gb3BhcXVlIHJlZ2lvbiBvZiB0aGUgc3VyZmFjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldE9wYXF1ZVJlZ2lvbiAocmVnaW9uKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNCwgW29iamVjdE9wdGlvbmFsKHJlZ2lvbildKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3Qgc2V0cyB0aGUgcmVnaW9uIG9mIHRoZSBzdXJmYWNlIHRoYXQgY2FuIHJlY2VpdmVcblx0ICpcdHBvaW50ZXIgYW5kIHRvdWNoIGV2ZW50cy5cblx0ICpcblx0ICpcdElucHV0IGV2ZW50cyBoYXBwZW5pbmcgb3V0c2lkZSBvZiB0aGlzIHJlZ2lvbiB3aWxsIHRyeSB0aGUgbmV4dFxuXHQgKlx0c3VyZmFjZSBpbiB0aGUgc2VydmVyIHN1cmZhY2Ugc3RhY2suIFRoZSBjb21wb3NpdG9yIGlnbm9yZXMgdGhlXG5cdCAqXHRwYXJ0cyBvZiB0aGUgaW5wdXQgcmVnaW9uIHRoYXQgZmFsbCBvdXRzaWRlIG9mIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhlIGlucHV0IHJlZ2lvbiBpcyBzcGVjaWZpZWQgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcy5cblx0ICpcblx0ICpcdElucHV0IHJlZ2lvbiBpcyBkb3VibGUtYnVmZmVyZWQgc3RhdGUsIHNlZSB3bF9zdXJmYWNlLmNvbW1pdC5cblx0ICpcblx0ICpcdHdsX3N1cmZhY2Uuc2V0X2lucHV0X3JlZ2lvbiBjaGFuZ2VzIHRoZSBwZW5kaW5nIGlucHV0IHJlZ2lvbi5cblx0ICpcdHdsX3N1cmZhY2UuY29tbWl0IGNvcGllcyB0aGUgcGVuZGluZyByZWdpb24gdG8gdGhlIGN1cnJlbnQgcmVnaW9uLlxuXHQgKlx0T3RoZXJ3aXNlIHRoZSBwZW5kaW5nIGFuZCBjdXJyZW50IHJlZ2lvbnMgYXJlIG5ldmVyIGNoYW5nZWQsXG5cdCAqXHRleGNlcHQgY3Vyc29yIGFuZCBpY29uIHN1cmZhY2VzIGFyZSBzcGVjaWFsIGNhc2VzLCBzZWVcblx0ICpcdHdsX3BvaW50ZXIuc2V0X2N1cnNvciBhbmQgd2xfZGF0YV9kZXZpY2Uuc3RhcnRfZHJhZy5cblx0ICpcblx0ICpcdFRoZSBpbml0aWFsIHZhbHVlIGZvciBhbiBpbnB1dCByZWdpb24gaXMgaW5maW5pdGUuIFRoYXQgbWVhbnMgdGhlXG5cdCAqXHR3aG9sZSBzdXJmYWNlIHdpbGwgYWNjZXB0IGlucHV0LiBTZXR0aW5nIHRoZSBwZW5kaW5nIGlucHV0IHJlZ2lvblxuXHQgKlx0aGFzIGNvcHkgc2VtYW50aWNzLCBhbmQgdGhlIHdsX3JlZ2lvbiBvYmplY3QgY2FuIGJlIGRlc3Ryb3llZFxuXHQgKlx0aW1tZWRpYXRlbHkuIEEgTlVMTCB3bF9yZWdpb24gY2F1c2VzIHRoZSBpbnB1dCByZWdpb24gdG8gYmUgc2V0XG5cdCAqXHR0byBpbmZpbml0ZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHs/Kn0gcmVnaW9uIGlucHV0IHJlZ2lvbiBvZiB0aGUgc3VyZmFjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldElucHV0UmVnaW9uIChyZWdpb24pIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA1LCBbb2JqZWN0T3B0aW9uYWwocmVnaW9uKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFN1cmZhY2Ugc3RhdGUgKGlucHV0LCBvcGFxdWUsIGFuZCBkYW1hZ2UgcmVnaW9ucywgYXR0YWNoZWQgYnVmZmVycyxcblx0ICpcdGV0Yy4pIGlzIGRvdWJsZS1idWZmZXJlZC4gUHJvdG9jb2wgcmVxdWVzdHMgbW9kaWZ5IHRoZSBwZW5kaW5nIHN0YXRlLFxuXHQgKlx0YXMgb3Bwb3NlZCB0byB0aGUgY3VycmVudCBzdGF0ZSBpbiB1c2UgYnkgdGhlIGNvbXBvc2l0b3IuIEEgY29tbWl0XG5cdCAqXHRyZXF1ZXN0IGF0b21pY2FsbHkgYXBwbGllcyBhbGwgcGVuZGluZyBzdGF0ZSwgcmVwbGFjaW5nIHRoZSBjdXJyZW50XG5cdCAqXHRzdGF0ZS4gQWZ0ZXIgY29tbWl0LCB0aGUgbmV3IHBlbmRpbmcgc3RhdGUgaXMgYXMgZG9jdW1lbnRlZCBmb3IgZWFjaFxuXHQgKlx0cmVsYXRlZCByZXF1ZXN0LlxuXHQgKlxuXHQgKlx0T24gY29tbWl0LCBhIHBlbmRpbmcgd2xfYnVmZmVyIGlzIGFwcGxpZWQgZmlyc3QsIGFuZCBhbGwgb3RoZXIgc3RhdGVcblx0ICpcdHNlY29uZC4gVGhpcyBtZWFucyB0aGF0IGFsbCBjb29yZGluYXRlcyBpbiBkb3VibGUtYnVmZmVyZWQgc3RhdGUgYXJlXG5cdCAqXHRyZWxhdGl2ZSB0byB0aGUgbmV3IHdsX2J1ZmZlciBjb21pbmcgaW50byB1c2UsIGV4Y2VwdCBmb3Jcblx0ICpcdHdsX3N1cmZhY2UuYXR0YWNoIGl0c2VsZi4gSWYgdGhlcmUgaXMgbm8gcGVuZGluZyB3bF9idWZmZXIsIHRoZVxuXHQgKlx0Y29vcmRpbmF0ZXMgYXJlIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHN1cmZhY2UgY29udGVudHMuXG5cdCAqXG5cdCAqXHRBbGwgcmVxdWVzdHMgdGhhdCBuZWVkIGEgY29tbWl0IHRvIGJlY29tZSBlZmZlY3RpdmUgYXJlIGRvY3VtZW50ZWRcblx0ICpcdHRvIGFmZmVjdCBkb3VibGUtYnVmZmVyZWQgc3RhdGUuXG5cdCAqXG5cdCAqXHRPdGhlciBpbnRlcmZhY2VzIG1heSBhZGQgZnVydGhlciBkb3VibGUtYnVmZmVyZWQgc3VyZmFjZSBzdGF0ZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBjb21taXQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjb21taXQgKHNlcmlhbCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDYsIFt1aW50KHNlcmlhbCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3Qgc2V0cyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBvbiBob3cgdGhlIGNvbXBvc2l0b3Jcblx0ICpcdGludGVycHJldHMgdGhlIGNvbnRlbnRzIG9mIHRoZSBidWZmZXIgYXR0YWNoZWQgdG8gdGhlIHN1cmZhY2UuIFRoZVxuXHQgKlx0YWNjZXB0ZWQgdmFsdWVzIGZvciB0aGUgdHJhbnNmb3JtIHBhcmFtZXRlciBhcmUgdGhlIHZhbHVlcyBmb3Jcblx0ICpcdHdsX291dHB1dC50cmFuc2Zvcm0uXG5cdCAqXG5cdCAqXHRCdWZmZXIgdHJhbnNmb3JtIGlzIGRvdWJsZS1idWZmZXJlZCBzdGF0ZSwgc2VlIHdsX3N1cmZhY2UuY29tbWl0LlxuXHQgKlxuXHQgKlx0QSBuZXdseSBjcmVhdGVkIHN1cmZhY2UgaGFzIGl0cyBidWZmZXIgdHJhbnNmb3JtYXRpb24gc2V0IHRvIG5vcm1hbC5cblx0ICpcblx0ICpcdHdsX3N1cmZhY2Uuc2V0X2J1ZmZlcl90cmFuc2Zvcm0gY2hhbmdlcyB0aGUgcGVuZGluZyBidWZmZXJcblx0ICpcdHRyYW5zZm9ybWF0aW9uLiB3bF9zdXJmYWNlLmNvbW1pdCBjb3BpZXMgdGhlIHBlbmRpbmcgYnVmZmVyXG5cdCAqXHR0cmFuc2Zvcm1hdGlvbiB0byB0aGUgY3VycmVudCBvbmUuIE90aGVyd2lzZSwgdGhlIHBlbmRpbmcgYW5kIGN1cnJlbnRcblx0ICpcdHZhbHVlcyBhcmUgbmV2ZXIgY2hhbmdlZC5cblx0ICpcblx0ICpcdFRoZSBwdXJwb3NlIG9mIHRoaXMgcmVxdWVzdCBpcyB0byBhbGxvdyBjbGllbnRzIHRvIHJlbmRlciBjb250ZW50XG5cdCAqXHRhY2NvcmRpbmcgdG8gdGhlIG91dHB1dCB0cmFuc2Zvcm0sIHRodXMgcGVybWl0dGluZyB0aGUgY29tcG9zaXRvciB0b1xuXHQgKlx0dXNlIGNlcnRhaW4gb3B0aW1pemF0aW9ucyBldmVuIGlmIHRoZSBkaXNwbGF5IGlzIHJvdGF0ZWQuIFVzaW5nXG5cdCAqXHRoYXJkd2FyZSBvdmVybGF5cyBhbmQgc2Nhbm5pbmcgb3V0IGEgY2xpZW50IGJ1ZmZlciBmb3IgZnVsbHNjcmVlblxuXHQgKlx0c3VyZmFjZXMgYXJlIGV4YW1wbGVzIG9mIHN1Y2ggb3B0aW1pemF0aW9ucy4gVGhvc2Ugb3B0aW1pemF0aW9ucyBhcmVcblx0ICpcdGhpZ2hseSBkZXBlbmRlbnQgb24gdGhlIGNvbXBvc2l0b3IgaW1wbGVtZW50YXRpb24sIHNvIHRoZSB1c2Ugb2YgdGhpc1xuXHQgKlx0cmVxdWVzdCBzaG91bGQgYmUgY29uc2lkZXJlZCBvbiBhIGNhc2UtYnktY2FzZSBiYXNpcy5cblx0ICpcblx0ICpcdE5vdGUgdGhhdCBpZiB0aGUgdHJhbnNmb3JtIHZhbHVlIGluY2x1ZGVzIDkwIG9yIDI3MCBkZWdyZWUgcm90YXRpb24sXG5cdCAqXHR0aGUgd2lkdGggb2YgdGhlIGJ1ZmZlciB3aWxsIGJlY29tZSB0aGUgc3VyZmFjZSBoZWlnaHQgYW5kIHRoZSBoZWlnaHRcblx0ICpcdG9mIHRoZSBidWZmZXIgd2lsbCBiZWNvbWUgdGhlIHN1cmZhY2Ugd2lkdGguXG5cdCAqXG5cdCAqXHRJZiB0cmFuc2Zvcm0gaXMgbm90IG9uZSBvZiB0aGUgdmFsdWVzIGZyb20gdGhlXG5cdCAqXHR3bF9vdXRwdXQudHJhbnNmb3JtIGVudW0gdGhlIGludmFsaWRfdHJhbnNmb3JtIHByb3RvY29sIGVycm9yXG5cdCAqXHRpcyByYWlzZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2Zvcm0gdHJhbnNmb3JtIGZvciBpbnRlcnByZXRpbmcgYnVmZmVyIGNvbnRlbnRzIFxuXHQgKlxuXHQgKiBAc2luY2UgMlxuXHQgKlxuXHQgKi9cblx0c2V0QnVmZmVyVHJhbnNmb3JtICh0cmFuc2Zvcm0pIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA3LCBbaW50KHRyYW5zZm9ybSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3Qgc2V0cyBhbiBvcHRpb25hbCBzY2FsaW5nIGZhY3RvciBvbiBob3cgdGhlIGNvbXBvc2l0b3Jcblx0ICpcdGludGVycHJldHMgdGhlIGNvbnRlbnRzIG9mIHRoZSBidWZmZXIgYXR0YWNoZWQgdG8gdGhlIHdpbmRvdy5cblx0ICpcblx0ICpcdEJ1ZmZlciBzY2FsZSBpcyBkb3VibGUtYnVmZmVyZWQgc3RhdGUsIHNlZSB3bF9zdXJmYWNlLmNvbW1pdC5cblx0ICpcblx0ICpcdEEgbmV3bHkgY3JlYXRlZCBzdXJmYWNlIGhhcyBpdHMgYnVmZmVyIHNjYWxlIHNldCB0byAxLlxuXHQgKlxuXHQgKlx0d2xfc3VyZmFjZS5zZXRfYnVmZmVyX3NjYWxlIGNoYW5nZXMgdGhlIHBlbmRpbmcgYnVmZmVyIHNjYWxlLlxuXHQgKlx0d2xfc3VyZmFjZS5jb21taXQgY29waWVzIHRoZSBwZW5kaW5nIGJ1ZmZlciBzY2FsZSB0byB0aGUgY3VycmVudCBvbmUuXG5cdCAqXHRPdGhlcndpc2UsIHRoZSBwZW5kaW5nIGFuZCBjdXJyZW50IHZhbHVlcyBhcmUgbmV2ZXIgY2hhbmdlZC5cblx0ICpcblx0ICpcdFRoZSBwdXJwb3NlIG9mIHRoaXMgcmVxdWVzdCBpcyB0byBhbGxvdyBjbGllbnRzIHRvIHN1cHBseSBoaWdoZXJcblx0ICpcdHJlc29sdXRpb24gYnVmZmVyIGRhdGEgZm9yIHVzZSBvbiBoaWdoIHJlc29sdXRpb24gb3V0cHV0cy4gSXQgaXNcblx0ICpcdGludGVuZGVkIHRoYXQgeW91IHBpY2sgdGhlIHNhbWUgYnVmZmVyIHNjYWxlIGFzIHRoZSBzY2FsZSBvZiB0aGVcblx0ICpcdG91dHB1dCB0aGF0IHRoZSBzdXJmYWNlIGlzIGRpc3BsYXllZCBvbi4gVGhpcyBtZWFucyB0aGUgY29tcG9zaXRvclxuXHQgKlx0Y2FuIGF2b2lkIHNjYWxpbmcgd2hlbiByZW5kZXJpbmcgdGhlIHN1cmZhY2Ugb24gdGhhdCBvdXRwdXQuXG5cdCAqXG5cdCAqXHROb3RlIHRoYXQgaWYgdGhlIHNjYWxlIGlzIGxhcmdlciB0aGFuIDEsIHRoZW4geW91IGhhdmUgdG8gYXR0YWNoXG5cdCAqXHRhIGJ1ZmZlciB0aGF0IGlzIGxhcmdlciAoYnkgYSBmYWN0b3Igb2Ygc2NhbGUgaW4gZWFjaCBkaW1lbnNpb24pXG5cdCAqXHR0aGFuIHRoZSBkZXNpcmVkIHN1cmZhY2Ugc2l6ZS5cblx0ICpcblx0ICpcdElmIHNjYWxlIGlzIG5vdCBwb3NpdGl2ZSB0aGUgaW52YWxpZF9zY2FsZSBwcm90b2NvbCBlcnJvciBpc1xuXHQgKlx0cmFpc2VkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2NhbGUgcG9zaXRpdmUgc2NhbGUgZm9yIGludGVycHJldGluZyBidWZmZXIgY29udGVudHMgXG5cdCAqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRzZXRCdWZmZXJTY2FsZSAoc2NhbGUpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA4LCBbaW50KHNjYWxlKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBpcyB1c2VkIHRvIGRlc2NyaWJlIHRoZSByZWdpb25zIHdoZXJlIHRoZSBwZW5kaW5nXG5cdCAqXHRidWZmZXIgaXMgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgc3VyZmFjZSBjb250ZW50cywgYW5kIHdoZXJlXG5cdCAqXHR0aGUgc3VyZmFjZSB0aGVyZWZvcmUgbmVlZHMgdG8gYmUgcmVwYWludGVkLiBUaGUgY29tcG9zaXRvclxuXHQgKlx0aWdub3JlcyB0aGUgcGFydHMgb2YgdGhlIGRhbWFnZSB0aGF0IGZhbGwgb3V0c2lkZSBvZiB0aGUgc3VyZmFjZS5cblx0ICpcblx0ICpcdERhbWFnZSBpcyBkb3VibGUtYnVmZmVyZWQgc3RhdGUsIHNlZSB3bF9zdXJmYWNlLmNvbW1pdC5cblx0ICpcblx0ICpcdFRoZSBkYW1hZ2UgcmVjdGFuZ2xlIGlzIHNwZWNpZmllZCBpbiBidWZmZXIgY29vcmRpbmF0ZXMsXG5cdCAqXHR3aGVyZSB4IGFuZCB5IHNwZWNpZnkgdGhlIHVwcGVyIGxlZnQgY29ybmVyIG9mIHRoZSBkYW1hZ2UgcmVjdGFuZ2xlLlxuXHQgKlxuXHQgKlx0VGhlIGluaXRpYWwgdmFsdWUgZm9yIHBlbmRpbmcgZGFtYWdlIGlzIGVtcHR5OiBubyBkYW1hZ2UuXG5cdCAqXHR3bF9zdXJmYWNlLmRhbWFnZV9idWZmZXIgYWRkcyBwZW5kaW5nIGRhbWFnZTogdGhlIG5ldyBwZW5kaW5nXG5cdCAqXHRkYW1hZ2UgaXMgdGhlIHVuaW9uIG9mIG9sZCBwZW5kaW5nIGRhbWFnZSBhbmQgdGhlIGdpdmVuIHJlY3RhbmdsZS5cblx0ICpcblx0ICpcdHdsX3N1cmZhY2UuY29tbWl0IGFzc2lnbnMgcGVuZGluZyBkYW1hZ2UgYXMgdGhlIGN1cnJlbnQgZGFtYWdlLFxuXHQgKlx0YW5kIGNsZWFycyBwZW5kaW5nIGRhbWFnZS4gVGhlIHNlcnZlciB3aWxsIGNsZWFyIHRoZSBjdXJyZW50XG5cdCAqXHRkYW1hZ2UgYXMgaXQgcmVwYWludHMgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgZGlmZmVycyBmcm9tIHdsX3N1cmZhY2UuZGFtYWdlIGluIG9ubHkgb25lIHdheSAtIGl0XG5cdCAqXHR0YWtlcyBkYW1hZ2UgaW4gYnVmZmVyIGNvb3JkaW5hdGVzIGluc3RlYWQgb2Ygc3VyZmFjZS1sb2NhbFxuXHQgKlx0Y29vcmRpbmF0ZXMuIFdoaWxlIHRoaXMgZ2VuZXJhbGx5IGlzIG1vcmUgaW50dWl0aXZlIHRoYW4gc3VyZmFjZVxuXHQgKlx0Y29vcmRpbmF0ZXMsIGl0IGlzIGVzcGVjaWFsbHkgZGVzaXJhYmxlIHdoZW4gdXNpbmcgd3Bfdmlld3BvcnRcblx0ICpcdG9yIHdoZW4gYSBkcmF3aW5nIGxpYnJhcnkgKGxpa2UgRUdMKSBpcyB1bmF3YXJlIG9mIGJ1ZmZlciBzY2FsZVxuXHQgKlx0YW5kIGJ1ZmZlciB0cmFuc2Zvcm0uXG5cdCAqXG5cdCAqXHROb3RlOiBCZWNhdXNlIGJ1ZmZlciB0cmFuc2Zvcm1hdGlvbiBjaGFuZ2VzIGFuZCBkYW1hZ2UgcmVxdWVzdHMgbWF5XG5cdCAqXHRiZSBpbnRlcmxlYXZlZCBpbiB0aGUgcHJvdG9jb2wgc3RyZWFtLCBpdCBpcyBpbXBvc3NpYmxlIHRvIGRldGVybWluZVxuXHQgKlx0dGhlIGFjdHVhbCBtYXBwaW5nIGJldHdlZW4gc3VyZmFjZSBhbmQgYnVmZmVyIGRhbWFnZSB1bnRpbFxuXHQgKlx0d2xfc3VyZmFjZS5jb21taXQgdGltZS4gVGhlcmVmb3JlLCBjb21wb3NpdG9ycyB3aXNoaW5nIHRvIHRha2UgYm90aFxuXHQgKlx0a2luZHMgb2YgZGFtYWdlIGludG8gYWNjb3VudCB3aWxsIGhhdmUgdG8gYWNjdW11bGF0ZSBkYW1hZ2UgZnJvbSB0aGVcblx0ICpcdHR3byByZXF1ZXN0cyBzZXBhcmF0ZWx5IGFuZCBvbmx5IHRyYW5zZm9ybSBmcm9tIG9uZSB0byB0aGUgb3RoZXJcblx0ICpcdGFmdGVyIHJlY2VpdmluZyB0aGUgd2xfc3VyZmFjZS5jb21taXQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IGJ1ZmZlci1sb2NhbCB4IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IGJ1ZmZlci1sb2NhbCB5IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCB3aWR0aCBvZiBkYW1hZ2UgcmVjdGFuZ2xlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IGhlaWdodCBvZiBkYW1hZ2UgcmVjdGFuZ2xlIFxuXHQgKlxuXHQgKiBAc2luY2UgNFxuXHQgKlxuXHQgKi9cblx0ZGFtYWdlQnVmZmVyICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgOSwgW2ludCh4KSwgaW50KHkpLCBpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xTdXJmYWNlRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZW50ZXIobyhtZXNzYWdlLCBmYWxzZSwgdGhpcy5fY29ubmVjdGlvbikpXG5cdH1cblxuXHRhc3luYyBbMV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmxlYXZlKG8obWVzc2FnZSwgZmFsc2UsIHRoaXMuX2Nvbm5lY3Rpb24pKVxuXHR9XG5cbn1cbldsU3VyZmFjZVByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9zdXJmYWNlJ1xuXG5XbFN1cmZhY2VQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIGJ1ZmZlciBzY2FsZSB2YWx1ZSBpcyBpbnZhbGlkXG4gICAqL1xuICBpbnZhbGlkU2NhbGU6IDAsXG4gIC8qKlxuICAgKiBidWZmZXIgdHJhbnNmb3JtIHZhbHVlIGlzIGludmFsaWRcbiAgICovXG4gIGludmFsaWRUcmFuc2Zvcm06IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2xTdXJmYWNlUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXbFRvdWNoRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdEEgbmV3IHRvdWNoIHBvaW50IGhhcyBhcHBlYXJlZCBvbiB0aGUgc3VyZmFjZS4gVGhpcyB0b3VjaCBwb2ludCBpc1xuXHQgKlx0YXNzaWduZWQgYSB1bmlxdWUgSUQuIEZ1dHVyZSBldmVudHMgZnJvbSB0aGlzIHRvdWNoIHBvaW50IHJlZmVyZW5jZVxuXHQgKlx0dGhpcyBJRC4gVGhlIElEIGNlYXNlcyB0byBiZSB2YWxpZCBhZnRlciBhIHRvdWNoIHVwIGV2ZW50IGFuZCBtYXkgYmVcblx0ICpcdHJldXNlZCBpbiB0aGUgZnV0dXJlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIHRvdWNoIGRvd24gZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIHRpbWVzdGFtcCB3aXRoIG1pbGxpc2Vjb25kIGdyYW51bGFyaXR5IFxuXHQgKiBAcGFyYW0geyp9IHN1cmZhY2Ugc3VyZmFjZSB0b3VjaGVkIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaWQgdGhlIHVuaXF1ZSBJRCBvZiB0aGlzIHRvdWNoIHBvaW50IFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB4IHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB5IHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZG93bihzZXJpYWwsIHRpbWUsIHN1cmZhY2UsIGlkLCB4LCB5KSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIHRvdWNoIHBvaW50IGhhcyBkaXNhcHBlYXJlZC4gTm8gZnVydGhlciBldmVudHMgd2lsbCBiZSBzZW50IGZvclxuXHQgKlx0dGhpcyB0b3VjaCBwb2ludCBhbmQgdGhlIHRvdWNoIHBvaW50J3MgSUQgaXMgcmVsZWFzZWQgYW5kIG1heSBiZVxuXHQgKlx0cmV1c2VkIGluIGEgZnV0dXJlIHRvdWNoIGRvd24gZXZlbnQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgdG91Y2ggdXAgZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIHRpbWVzdGFtcCB3aXRoIG1pbGxpc2Vjb25kIGdyYW51bGFyaXR5IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaWQgdGhlIHVuaXF1ZSBJRCBvZiB0aGlzIHRvdWNoIHBvaW50IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0dXAoc2VyaWFsLCB0aW1lLCBpZCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdEEgdG91Y2ggcG9pbnQgaGFzIGNoYW5nZWQgY29vcmRpbmF0ZXMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIHRpbWVzdGFtcCB3aXRoIG1pbGxpc2Vjb25kIGdyYW51bGFyaXR5IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaWQgdGhlIHVuaXF1ZSBJRCBvZiB0aGlzIHRvdWNoIHBvaW50IFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB4IHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB5IHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0bW90aW9uKHRpbWUsIGlkLCB4LCB5KSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0SW5kaWNhdGVzIHRoZSBlbmQgb2YgYSBzZXQgb2YgZXZlbnRzIHRoYXQgbG9naWNhbGx5IGJlbG9uZyB0b2dldGhlci5cblx0ICpcdEEgY2xpZW50IGlzIGV4cGVjdGVkIHRvIGFjY3VtdWxhdGUgdGhlIGRhdGEgaW4gYWxsIGV2ZW50cyB3aXRoaW4gdGhlXG5cdCAqXHRmcmFtZSBiZWZvcmUgcHJvY2VlZGluZy5cblx0ICpcblx0ICpcdEEgd2xfdG91Y2guZnJhbWUgdGVybWluYXRlcyBhdCBsZWFzdCBvbmUgZXZlbnQgYnV0IG90aGVyd2lzZSBub1xuXHQgKlx0Z3VhcmFudGVlIGlzIHByb3ZpZGVkIGFib3V0IHRoZSBzZXQgb2YgZXZlbnRzIHdpdGhpbiBhIGZyYW1lLiBBIGNsaWVudFxuXHQgKlx0bXVzdCBhc3N1bWUgdGhhdCBhbnkgc3RhdGUgbm90IHVwZGF0ZWQgaW4gYSBmcmFtZSBpcyB1bmNoYW5nZWQgZnJvbSB0aGVcblx0ICpcdHByZXZpb3VzbHkga25vd24gc3RhdGUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRmcmFtZSgpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZW50IGlmIHRoZSBjb21wb3NpdG9yIGRlY2lkZXMgdGhlIHRvdWNoIHN0cmVhbSBpcyBhIGdsb2JhbFxuXHQgKlx0Z2VzdHVyZS4gTm8gZnVydGhlciBldmVudHMgYXJlIHNlbnQgdG8gdGhlIGNsaWVudHMgZnJvbSB0aGF0XG5cdCAqXHRwYXJ0aWN1bGFyIGdlc3R1cmUuIFRvdWNoIGNhbmNlbGxhdGlvbiBhcHBsaWVzIHRvIGFsbCB0b3VjaCBwb2ludHNcblx0ICpcdGN1cnJlbnRseSBhY3RpdmUgb24gdGhpcyBjbGllbnQncyBzdXJmYWNlLiBUaGUgY2xpZW50IGlzXG5cdCAqXHRyZXNwb25zaWJsZSBmb3IgZmluYWxpemluZyB0aGUgdG91Y2ggcG9pbnRzLCBmdXR1cmUgdG91Y2ggcG9pbnRzIG9uXG5cdCAqXHR0aGlzIHN1cmZhY2UgbWF5IHJldXNlIHRoZSB0b3VjaCBwb2ludCBJRC5cblx0ICogICAgICBcblx0ICpcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNhbmNlbCgpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZW50IHdoZW4gYSB0b3VjaHBvaW50IGhhcyBjaGFuZ2VkIGl0cyBzaGFwZS5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgZG9lcyBub3Qgb2NjdXIgb24gaXRzIG93bi4gSXQgaXMgc2VudCBiZWZvcmUgYVxuXHQgKlx0d2xfdG91Y2guZnJhbWUgZXZlbnQgYW5kIGNhcnJpZXMgdGhlIG5ldyBzaGFwZSBpbmZvcm1hdGlvbiBmb3Jcblx0ICpcdGFueSBwcmV2aW91c2x5IHJlcG9ydGVkLCBvciBuZXcgdG91Y2ggcG9pbnRzIG9mIHRoYXQgZnJhbWUuXG5cdCAqXG5cdCAqXHRPdGhlciBldmVudHMgZGVzY3JpYmluZyB0aGUgdG91Y2ggcG9pbnQgc3VjaCBhcyB3bF90b3VjaC5kb3duLFxuXHQgKlx0d2xfdG91Y2gubW90aW9uIG9yIHdsX3RvdWNoLm9yaWVudGF0aW9uIG1heSBiZSBzZW50IHdpdGhpbiB0aGVcblx0ICpcdHNhbWUgd2xfdG91Y2guZnJhbWUuIEEgY2xpZW50IHNob3VsZCB0cmVhdCB0aGVzZSBldmVudHMgYXMgYSBzaW5nbGVcblx0ICpcdGxvZ2ljYWwgdG91Y2ggcG9pbnQgdXBkYXRlLiBUaGUgb3JkZXIgb2Ygd2xfdG91Y2guc2hhcGUsXG5cdCAqXHR3bF90b3VjaC5vcmllbnRhdGlvbiBhbmQgd2xfdG91Y2gubW90aW9uIGlzIG5vdCBndWFyYW50ZWVkLlxuXHQgKlx0QSB3bF90b3VjaC5kb3duIGV2ZW50IGlzIGd1YXJhbnRlZWQgdG8gb2NjdXIgYmVmb3JlIHRoZSBmaXJzdFxuXHQgKlx0d2xfdG91Y2guc2hhcGUgZXZlbnQgZm9yIHRoaXMgdG91Y2ggSUQgYnV0IGJvdGggZXZlbnRzIG1heSBvY2N1ciB3aXRoaW5cblx0ICpcdHRoZSBzYW1lIHdsX3RvdWNoLmZyYW1lLlxuXHQgKlxuXHQgKlx0QSB0b3VjaHBvaW50IHNoYXBlIGlzIGFwcHJveGltYXRlZCBieSBhbiBlbGxpcHNlIHRocm91Z2ggdGhlIG1ham9yIGFuZFxuXHQgKlx0bWlub3IgYXhpcyBsZW5ndGguIFRoZSBtYWpvciBheGlzIGxlbmd0aCBkZXNjcmliZXMgdGhlIGxvbmdlciBkaWFtZXRlclxuXHQgKlx0b2YgdGhlIGVsbGlwc2UsIHdoaWxlIHRoZSBtaW5vciBheGlzIGxlbmd0aCBkZXNjcmliZXMgdGhlIHNob3J0ZXJcblx0ICpcdGRpYW1ldGVyLiBNYWpvciBhbmQgbWlub3IgYXJlIG9ydGhvZ29uYWwgYW5kIGJvdGggYXJlIHNwZWNpZmllZCBpblxuXHQgKlx0c3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcy4gVGhlIGNlbnRlciBvZiB0aGUgZWxsaXBzZSBpcyBhbHdheXMgYXQgdGhlXG5cdCAqXHR0b3VjaHBvaW50IGxvY2F0aW9uIGFzIHJlcG9ydGVkIGJ5IHdsX3RvdWNoLmRvd24gb3Igd2xfdG91Y2gubW92ZS5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgaXMgb25seSBzZW50IGJ5IHRoZSBjb21wb3NpdG9yIGlmIHRoZSB0b3VjaCBkZXZpY2Ugc3VwcG9ydHNcblx0ICpcdHNoYXBlIHJlcG9ydHMuIFRoZSBjbGllbnQgaGFzIHRvIG1ha2UgcmVhc29uYWJsZSBhc3N1bXB0aW9ucyBhYm91dCB0aGVcblx0ICpcdHNoYXBlIGlmIGl0IGRpZCBub3QgcmVjZWl2ZSB0aGlzIGV2ZW50LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaWQgdGhlIHVuaXF1ZSBJRCBvZiB0aGlzIHRvdWNoIHBvaW50IFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSBtYWpvciBsZW5ndGggb2YgdGhlIG1ham9yIGF4aXMgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcyBcblx0ICogQHBhcmFtIHtGaXhlZH0gbWlub3IgbGVuZ3RoIG9mIHRoZSBtaW5vciBheGlzIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMgXG5cdCAqXG5cdCAqIEBzaW5jZSA2XG5cdCAqXG5cdCAqL1xuXHRzaGFwZShpZCwgbWFqb3IsIG1pbm9yKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2VudCB3aGVuIGEgdG91Y2hwb2ludCBoYXMgY2hhbmdlZCBpdHMgb3JpZW50YXRpb24uXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGRvZXMgbm90IG9jY3VyIG9uIGl0cyBvd24uIEl0IGlzIHNlbnQgYmVmb3JlIGFcblx0ICpcdHdsX3RvdWNoLmZyYW1lIGV2ZW50IGFuZCBjYXJyaWVzIHRoZSBuZXcgc2hhcGUgaW5mb3JtYXRpb24gZm9yXG5cdCAqXHRhbnkgcHJldmlvdXNseSByZXBvcnRlZCwgb3IgbmV3IHRvdWNoIHBvaW50cyBvZiB0aGF0IGZyYW1lLlxuXHQgKlxuXHQgKlx0T3RoZXIgZXZlbnRzIGRlc2NyaWJpbmcgdGhlIHRvdWNoIHBvaW50IHN1Y2ggYXMgd2xfdG91Y2guZG93bixcblx0ICpcdHdsX3RvdWNoLm1vdGlvbiBvciB3bF90b3VjaC5zaGFwZSBtYXkgYmUgc2VudCB3aXRoaW4gdGhlXG5cdCAqXHRzYW1lIHdsX3RvdWNoLmZyYW1lLiBBIGNsaWVudCBzaG91bGQgdHJlYXQgdGhlc2UgZXZlbnRzIGFzIGEgc2luZ2xlXG5cdCAqXHRsb2dpY2FsIHRvdWNoIHBvaW50IHVwZGF0ZS4gVGhlIG9yZGVyIG9mIHdsX3RvdWNoLnNoYXBlLFxuXHQgKlx0d2xfdG91Y2gub3JpZW50YXRpb24gYW5kIHdsX3RvdWNoLm1vdGlvbiBpcyBub3QgZ3VhcmFudGVlZC5cblx0ICpcdEEgd2xfdG91Y2guZG93biBldmVudCBpcyBndWFyYW50ZWVkIHRvIG9jY3VyIGJlZm9yZSB0aGUgZmlyc3Rcblx0ICpcdHdsX3RvdWNoLm9yaWVudGF0aW9uIGV2ZW50IGZvciB0aGlzIHRvdWNoIElEIGJ1dCBib3RoIGV2ZW50cyBtYXkgb2NjdXJcblx0ICpcdHdpdGhpbiB0aGUgc2FtZSB3bF90b3VjaC5mcmFtZS5cblx0ICpcblx0ICpcdFRoZSBvcmllbnRhdGlvbiBkZXNjcmliZXMgdGhlIGNsb2Nrd2lzZSBhbmdsZSBvZiBhIHRvdWNocG9pbnQncyBtYWpvclxuXHQgKlx0YXhpcyB0byB0aGUgcG9zaXRpdmUgc3VyZmFjZSB5LWF4aXMgYW5kIGlzIG5vcm1hbGl6ZWQgdG8gdGhlIC0xODAgdG9cblx0ICpcdCsxODAgZGVncmVlIHJhbmdlLiBUaGUgZ3JhbnVsYXJpdHkgb2Ygb3JpZW50YXRpb24gZGVwZW5kcyBvbiB0aGUgdG91Y2hcblx0ICpcdGRldmljZSwgc29tZSBkZXZpY2VzIG9ubHkgc3VwcG9ydCBiaW5hcnkgcm90YXRpb24gdmFsdWVzIGJldHdlZW4gMCBhbmRcblx0ICpcdDkwIGRlZ3JlZXMuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGlzIG9ubHkgc2VudCBieSB0aGUgY29tcG9zaXRvciBpZiB0aGUgdG91Y2ggZGV2aWNlIHN1cHBvcnRzXG5cdCAqXHRvcmllbnRhdGlvbiByZXBvcnRzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaWQgdGhlIHVuaXF1ZSBJRCBvZiB0aGlzIHRvdWNoIHBvaW50IFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSBvcmllbnRhdGlvbiBhbmdsZSBiZXR3ZWVuIG1ham9yIGF4aXMgYW5kIHBvc2l0aXZlIHN1cmZhY2UgeS1heGlzIGluIGRlZ3JlZXMgXG5cdCAqXG5cdCAqIEBzaW5jZSA2XG5cdCAqXG5cdCAqL1xuXHRvcmllbnRhdGlvbihpZCwgb3JpZW50YXRpb24pIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoZSB3bF90b3VjaCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHRvdWNoc2NyZWVuXG4gKiAgICAgIGFzc29jaWF0ZWQgd2l0aCBhIHNlYXQuXG4gKlxuICogICAgICBUb3VjaCBpbnRlcmFjdGlvbnMgY2FuIGNvbnNpc3Qgb2Ygb25lIG9yIG1vcmUgY29udGFjdHMuXG4gKiAgICAgIEZvciBlYWNoIGNvbnRhY3QsIGEgc2VyaWVzIG9mIGV2ZW50cyBpcyBnZW5lcmF0ZWQsIHN0YXJ0aW5nXG4gKiAgICAgIHdpdGggYSBkb3duIGV2ZW50LCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgbW90aW9uIGV2ZW50cyxcbiAqICAgICAgYW5kIGVuZGluZyB3aXRoIGFuIHVwIGV2ZW50LiBFdmVudHMgcmVsYXRpbmcgdG8gdGhlIHNhbWVcbiAqICAgICAgY29udGFjdCBwb2ludCBjYW4gYmUgaWRlbnRpZmllZCBieSB0aGUgSUQgb2YgdGhlIHNlcXVlbmNlLlxuICogICAgXG4gKi9cbmNsYXNzIFdsVG91Y2hQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICogQHNpbmNlIDNcblx0ICpcblx0ICovXG5cdHJlbGVhc2UgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsVG91Y2hFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5kb3duKHUobWVzc2FnZSksIHUobWVzc2FnZSksIG8obWVzc2FnZSwgZmFsc2UsIHRoaXMuX2Nvbm5lY3Rpb24pLCBpKG1lc3NhZ2UpLCBmKG1lc3NhZ2UpLCBmKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci51cCh1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpLCBpKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzJdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5tb3Rpb24odShtZXNzYWdlKSwgaShtZXNzYWdlKSwgZihtZXNzYWdlKSwgZihtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFszXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZnJhbWUoKVxuXHR9XG5cblx0YXN5bmMgWzRdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5jYW5jZWwoKVxuXHR9XG5cblx0YXN5bmMgWzVdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5zaGFwZShpKG1lc3NhZ2UpLCBmKG1lc3NhZ2UpLCBmKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzZdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5vcmllbnRhdGlvbihpKG1lc3NhZ2UpLCBmKG1lc3NhZ2UpKVxuXHR9XG5cbn1cbldsVG91Y2hQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfdG91Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IFdsVG91Y2hQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDEzIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBSYWZhZWwgQW50b2dub2xsaVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBKYXNwZXIgU3QuIFBpZXJyZVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMyBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBTYW1zdW5nIEVsZWN0cm9uaWNzIENvLiwgTHRkXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFJlZCBIYXQgSW5jLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiAgICBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiAgICB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiAgICB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqICAgIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZSBuZXh0XG4gKiAgICBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlXG4gKiAgICBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogICAgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiAgICBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhkZ1BvcHVwRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgYXNrcyB0aGUgcG9wdXAgc3VyZmFjZSB0byBjb25maWd1cmUgaXRzZWxmIGdpdmVuIHRoZVxuXHQgKlx0Y29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyZWQgc3RhdGUgc2hvdWxkIG5vdCBiZSBhcHBsaWVkIGltbWVkaWF0ZWx5LlxuXHQgKlx0U2VlIHhkZ19zdXJmYWNlLmNvbmZpZ3VyZSBmb3IgZGV0YWlscy5cblx0ICpcblx0ICpcdFRoZSB4IGFuZCB5IGFyZ3VtZW50cyByZXByZXNlbnQgdGhlIHBvc2l0aW9uIHRoZSBwb3B1cCB3YXMgcGxhY2VkIGF0XG5cdCAqXHRnaXZlbiB0aGUgeGRnX3Bvc2l0aW9uZXIgcnVsZSwgcmVsYXRpdmUgdG8gdGhlIHVwcGVyIGxlZnQgY29ybmVyIG9mIHRoZVxuXHQgKlx0d2luZG93IGdlb21ldHJ5IG9mIHRoZSBwYXJlbnQgc3VyZmFjZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggeCBwb3NpdGlvbiByZWxhdGl2ZSB0byBwYXJlbnQgc3VyZmFjZSB3aW5kb3cgZ2VvbWV0cnkgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgcG9zaXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IHN1cmZhY2Ugd2luZG93IGdlb21ldHJ5IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggd2luZG93IGdlb21ldHJ5IHdpZHRoIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IHdpbmRvdyBnZW9tZXRyeSBoZWlnaHQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjb25maWd1cmUoeCwgeSwgd2lkdGgsIGhlaWdodCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBwb3B1cF9kb25lIGV2ZW50IGlzIHNlbnQgb3V0IHdoZW4gYSBwb3B1cCBpcyBkaXNtaXNzZWQgYnkgdGhlXG5cdCAqXHRjb21wb3NpdG9yLiBUaGUgY2xpZW50IHNob3VsZCBkZXN0cm95IHRoZSB4ZGdfcG9wdXAgb2JqZWN0IGF0IHRoaXNcblx0ICpcdHBvaW50LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0cG9wdXBEb25lKCkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDEzIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBSYWZhZWwgQW50b2dub2xsaVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBKYXNwZXIgU3QuIFBpZXJyZVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMyBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBTYW1zdW5nIEVsZWN0cm9uaWNzIENvLiwgTHRkXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFJlZCBIYXQgSW5jLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiAgICBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiAgICB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiAgICB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqICAgIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZSBuZXh0XG4gKiAgICBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlXG4gKiAgICBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogICAgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiAgICBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgQSBwb3B1cCBzdXJmYWNlIGlzIGEgc2hvcnQtbGl2ZWQsIHRlbXBvcmFyeSBzdXJmYWNlLiBJdCBjYW4gYmUgdXNlZCB0b1xuICogICAgICBpbXBsZW1lbnQgZm9yIGV4YW1wbGUgbWVudXMsIHBvcG92ZXJzLCB0b29sdGlwcyBhbmQgb3RoZXIgc2ltaWxhciB1c2VyXG4gKiAgICAgIGludGVyZmFjZSBjb25jZXB0cy5cbiAqXG4gKiAgICAgIEEgcG9wdXAgY2FuIGJlIG1hZGUgdG8gdGFrZSBhbiBleHBsaWNpdCBncmFiLiBTZWUgeGRnX3BvcHVwLmdyYWIgZm9yXG4gKiAgICAgIGRldGFpbHMuXG4gKlxuICogICAgICBXaGVuIHRoZSBwb3B1cCBpcyBkaXNtaXNzZWQsIGEgcG9wdXBfZG9uZSBldmVudCB3aWxsIGJlIHNlbnQgb3V0LCBhbmQgYXRcbiAqICAgICAgdGhlIHNhbWUgdGltZSB0aGUgc3VyZmFjZSB3aWxsIGJlIHVubWFwcGVkLiBTZWUgdGhlIHhkZ19wb3B1cC5wb3B1cF9kb25lXG4gKiAgICAgIGV2ZW50IGZvciBkZXRhaWxzLlxuICpcbiAqICAgICAgRXhwbGljaXRseSBkZXN0cm95aW5nIHRoZSB4ZGdfcG9wdXAgb2JqZWN0IHdpbGwgYWxzbyBkaXNtaXNzIHRoZSBwb3B1cCBhbmRcbiAqICAgICAgdW5tYXAgdGhlIHN1cmZhY2UuIENsaWVudHMgdGhhdCB3YW50IHRvIGRpc21pc3MgdGhlIHBvcHVwIHdoZW4gYW5vdGhlclxuICogICAgICBzdXJmYWNlIG9mIHRoZWlyIG93biBpcyBjbGlja2VkIHNob3VsZCBkaXNtaXNzIHRoZSBwb3B1cCB1c2luZyB0aGUgZGVzdHJveVxuICogICAgICByZXF1ZXN0LlxuICpcbiAqICAgICAgVGhlIHBhcmVudCBzdXJmYWNlIG11c3QgaGF2ZSBlaXRoZXIgdGhlIHhkZ190b3BsZXZlbCBvciB4ZGdfcG9wdXAgc3VyZmFjZVxuICogICAgICByb2xlLlxuICpcbiAqICAgICAgQSBuZXdseSBjcmVhdGVkIHhkZ19wb3B1cCB3aWxsIGJlIHN0YWNrZWQgb24gdG9wIG9mIGFsbCBwcmV2aW91c2x5IGNyZWF0ZWRcbiAqICAgICAgeGRnX3BvcHVwIHN1cmZhY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2FtZSB4ZGdfdG9wbGV2ZWwuXG4gKlxuICogICAgICBUaGUgcGFyZW50IG9mIGFuIHhkZ19wb3B1cCBtdXN0IGJlIG1hcHBlZCAoc2VlIHRoZSB4ZGdfc3VyZmFjZVxuICogICAgICBkZXNjcmlwdGlvbikgYmVmb3JlIHRoZSB4ZGdfcG9wdXAgaXRzZWxmLlxuICpcbiAqICAgICAgVGhlIHggYW5kIHkgYXJndW1lbnRzIHBhc3NlZCB3aGVuIGNyZWF0aW5nIHRoZSBwb3B1cCBvYmplY3Qgc3BlY2lmeVxuICogICAgICB3aGVyZSB0aGUgdG9wIGxlZnQgb2YgdGhlIHBvcHVwIHNob3VsZCBiZSBwbGFjZWQsIHJlbGF0aXZlIHRvIHRoZVxuICogICAgICBsb2NhbCBzdXJmYWNlIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXJlbnQgc3VyZmFjZS4gU2VlXG4gKiAgICAgIHhkZ19zdXJmYWNlLmdldF9wb3B1cC4gQW4geGRnX3BvcHVwIG11c3QgaW50ZXJzZWN0IHdpdGggb3IgYmUgYXQgbGVhc3RcbiAqICAgICAgcGFydGlhbGx5IGFkamFjZW50IHRvIGl0cyBwYXJlbnQgc3VyZmFjZS5cbiAqXG4gKiAgICAgIFRoZSBjbGllbnQgbXVzdCBjYWxsIHdsX3N1cmZhY2UuY29tbWl0IG9uIHRoZSBjb3JyZXNwb25kaW5nIHdsX3N1cmZhY2VcbiAqICAgICAgZm9yIHRoZSB4ZGdfcG9wdXAgc3RhdGUgdG8gdGFrZSBlZmZlY3QuXG4gKiAgICBcbiAqL1xuY2xhc3MgWGRnUG9wdXBQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgZGVzdHJveXMgdGhlIHBvcHVwLiBFeHBsaWNpdGx5IGRlc3Ryb3lpbmcgdGhlIHhkZ19wb3B1cFxuXHQgKlx0b2JqZWN0IHdpbGwgYWxzbyBkaXNtaXNzIHRoZSBwb3B1cCwgYW5kIHVubWFwIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0SWYgdGhpcyB4ZGdfcG9wdXAgaXMgbm90IHRoZSBcInRvcG1vc3RcIiBwb3B1cCwgYSBwcm90b2NvbCBlcnJvclxuXHQgKlx0d2lsbCBiZSBzZW50LlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGVzdHJveSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBtYWtlcyB0aGUgY3JlYXRlZCBwb3B1cCB0YWtlIGFuIGV4cGxpY2l0IGdyYWIuIEFuIGV4cGxpY2l0XG5cdCAqXHRncmFiIHdpbGwgYmUgZGlzbWlzc2VkIHdoZW4gdGhlIHVzZXIgZGlzbWlzc2VzIHRoZSBwb3B1cCwgb3Igd2hlbiB0aGVcblx0ICpcdGNsaWVudCBkZXN0cm95cyB0aGUgeGRnX3BvcHVwLiBUaGlzIGNhbiBiZSBkb25lIGJ5IHRoZSB1c2VyIGNsaWNraW5nXG5cdCAqXHRvdXRzaWRlIHRoZSBzdXJmYWNlLCB1c2luZyB0aGUga2V5Ym9hcmQsIG9yIGV2ZW4gbG9ja2luZyB0aGUgc2NyZWVuXG5cdCAqXHR0aHJvdWdoIGNsb3NpbmcgdGhlIGxpZCBvciBhIHRpbWVvdXQuXG5cdCAqXG5cdCAqXHRJZiB0aGUgY29tcG9zaXRvciBkZW5pZXMgdGhlIGdyYWIsIHRoZSBwb3B1cCB3aWxsIGJlIGltbWVkaWF0ZWx5XG5cdCAqXHRkaXNtaXNzZWQuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgbXVzdCBiZSB1c2VkIGluIHJlc3BvbnNlIHRvIHNvbWUgc29ydCBvZiB1c2VyIGFjdGlvbiBsaWtlIGFcblx0ICpcdGJ1dHRvbiBwcmVzcywga2V5IHByZXNzLCBvciB0b3VjaCBkb3duIGV2ZW50LiBUaGUgc2VyaWFsIG51bWJlciBvZiB0aGVcblx0ICpcdGV2ZW50IHNob3VsZCBiZSBwYXNzZWQgYXMgJ3NlcmlhbCcuXG5cdCAqXG5cdCAqXHRUaGUgcGFyZW50IG9mIGEgZ3JhYmJpbmcgcG9wdXAgbXVzdCBlaXRoZXIgYmUgYW4geGRnX3RvcGxldmVsIHN1cmZhY2Ugb3Jcblx0ICpcdGFub3RoZXIgeGRnX3BvcHVwIHdpdGggYW4gZXhwbGljaXQgZ3JhYi4gSWYgdGhlIHBhcmVudCBpcyBhbm90aGVyXG5cdCAqXHR4ZGdfcG9wdXAgaXQgbWVhbnMgdGhhdCB0aGUgcG9wdXBzIGFyZSBuZXN0ZWQsIHdpdGggdGhpcyBwb3B1cCBub3cgYmVpbmdcblx0ICpcdHRoZSB0b3Btb3N0IHBvcHVwLlxuXHQgKlxuXHQgKlx0TmVzdGVkIHBvcHVwcyBtdXN0IGJlIGRlc3Ryb3llZCBpbiB0aGUgcmV2ZXJzZSBvcmRlciB0aGV5IHdlcmUgY3JlYXRlZFxuXHQgKlx0aW4sIGUuZy4gdGhlIG9ubHkgcG9wdXAgeW91IGFyZSBhbGxvd2VkIHRvIGRlc3Ryb3kgYXQgYWxsIHRpbWVzIGlzIHRoZVxuXHQgKlx0dG9wbW9zdCBvbmUuXG5cdCAqXG5cdCAqXHRXaGVuIGNvbXBvc2l0b3JzIGNob29zZSB0byBkaXNtaXNzIGEgcG9wdXAsIHRoZXkgbWF5IGRpc21pc3MgZXZlcnlcblx0ICpcdG5lc3RlZCBncmFiYmluZyBwb3B1cCBhcyB3ZWxsLiBXaGVuIGEgY29tcG9zaXRvciBkaXNtaXNzZXMgcG9wdXBzLCBpdFxuXHQgKlx0d2lsbCBmb2xsb3cgdGhlIHNhbWUgZGlzbWlzc2luZyBvcmRlciBhcyByZXF1aXJlZCBmcm9tIHRoZSBjbGllbnQuXG5cdCAqXG5cdCAqXHRUaGUgcGFyZW50IG9mIGEgZ3JhYmJpbmcgcG9wdXAgbXVzdCBlaXRoZXIgYmUgYW5vdGhlciB4ZGdfcG9wdXAgd2l0aCBhblxuXHQgKlx0YWN0aXZlIGV4cGxpY2l0IGdyYWIsIG9yIGFuIHhkZ19wb3B1cCBvciB4ZGdfdG9wbGV2ZWwsIGlmIHRoZXJlIGFyZSBub1xuXHQgKlx0ZXhwbGljaXQgZ3JhYnMgYWxyZWFkeSB0YWtlbi5cblx0ICpcblx0ICpcdElmIHRoZSB0b3Btb3N0IGdyYWJiaW5nIHBvcHVwIGlzIGRlc3Ryb3llZCwgdGhlIGdyYWIgd2lsbCBiZSByZXR1cm5lZCB0b1xuXHQgKlx0dGhlIHBhcmVudCBvZiB0aGUgcG9wdXAsIGlmIHRoYXQgcGFyZW50IHByZXZpb3VzbHkgaGFkIGFuIGV4cGxpY2l0IGdyYWIuXG5cdCAqXG5cdCAqXHRJZiB0aGUgcGFyZW50IGlzIGEgZ3JhYmJpbmcgcG9wdXAgd2hpY2ggaGFzIGFscmVhZHkgYmVlbiBkaXNtaXNzZWQsIHRoaXNcblx0ICpcdHBvcHVwIHdpbGwgYmUgaW1tZWRpYXRlbHkgZGlzbWlzc2VkLiBJZiB0aGUgcGFyZW50IGlzIGEgcG9wdXAgdGhhdCBkaWRcblx0ICpcdG5vdCB0YWtlIGFuIGV4cGxpY2l0IGdyYWIsIGFuIGVycm9yIHdpbGwgYmUgcmFpc2VkLlxuXHQgKlxuXHQgKlx0RHVyaW5nIGEgcG9wdXAgZ3JhYiwgdGhlIGNsaWVudCBvd25pbmcgdGhlIGdyYWIgd2lsbCByZWNlaXZlIHBvaW50ZXJcblx0ICpcdGFuZCB0b3VjaCBldmVudHMgZm9yIGFsbCB0aGVpciBzdXJmYWNlcyBhcyBub3JtYWwgKHNpbWlsYXIgdG8gYW5cblx0ICpcdFwib3duZXItZXZlbnRzXCIgZ3JhYiBpbiBYMTEgcGFybGFuY2UpLCB3aGlsZSB0aGUgdG9wIG1vc3QgZ3JhYmJpbmcgcG9wdXBcblx0ICpcdHdpbGwgYWx3YXlzIGhhdmUga2V5Ym9hcmQgZm9jdXMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc2VhdCB0aGUgd2xfc2VhdCBvZiB0aGUgdXNlciBldmVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCB0aGUgc2VyaWFsIG9mIHRoZSB1c2VyIGV2ZW50IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z3JhYiAoc2VhdCwgc2VyaWFsKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMSwgW29iamVjdChzZWF0KSwgdWludChzZXJpYWwpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtYZGdQb3B1cEV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmNvbmZpZ3VyZShpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5wb3B1cERvbmUoKVxuXHR9XG5cbn1cblhkZ1BvcHVwUHJveHkucHJvdG9jb2xOYW1lID0gJ3hkZ19wb3B1cCdcblxuWGRnUG9wdXBQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIHRyaWVkIHRvIGdyYWIgYWZ0ZXIgYmVpbmcgbWFwcGVkXG4gICAqL1xuICBpbnZhbGlkR3JhYjogMFxufVxuXG5leHBvcnQgZGVmYXVsdCBYZGdQb3B1cFByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTMgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMyAgICAgIFJhZmFlbCBBbnRvZ25vbGxpXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMyAgICAgIEphc3BlciBTdC4gUGllcnJlXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDEzIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFNhbXN1bmcgRWxlY3Ryb25pY3MgQ28uLCBMdGRcbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgUmVkIEhhdCBJbmMuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqICAgIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqICAgIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqICAgIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogICAgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiAgICBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlIG5leHRcbiAqICAgIHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGVcbiAqICAgIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiAgICBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqICAgIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBUaGUgeGRnX3Bvc2l0aW9uZXIgcHJvdmlkZXMgYSBjb2xsZWN0aW9uIG9mIHJ1bGVzIGZvciB0aGUgcGxhY2VtZW50IG9mIGFcbiAqICAgICAgY2hpbGQgc3VyZmFjZSByZWxhdGl2ZSB0byBhIHBhcmVudCBzdXJmYWNlLiBSdWxlcyBjYW4gYmUgZGVmaW5lZCB0byBlbnN1cmVcbiAqICAgICAgdGhlIGNoaWxkIHN1cmZhY2UgcmVtYWlucyB3aXRoaW4gdGhlIHZpc2libGUgYXJlYSdzIGJvcmRlcnMsIGFuZCB0b1xuICogICAgICBzcGVjaWZ5IGhvdyB0aGUgY2hpbGQgc3VyZmFjZSBjaGFuZ2VzIGl0cyBwb3NpdGlvbiwgc3VjaCBhcyBzbGlkaW5nIGFsb25nXG4gKiAgICAgIGFuIGF4aXMsIG9yIGZsaXBwaW5nIGFyb3VuZCBhIHJlY3RhbmdsZS4gVGhlc2UgcG9zaXRpb25lci1jcmVhdGVkIHJ1bGVzIGFyZVxuICogICAgICBjb25zdHJhaW5lZCBieSB0aGUgcmVxdWlyZW1lbnQgdGhhdCBhIGNoaWxkIHN1cmZhY2UgbXVzdCBpbnRlcnNlY3Qgd2l0aCBvclxuICogICAgICBiZSBhdCBsZWFzdCBwYXJ0aWFsbHkgYWRqYWNlbnQgdG8gaXRzIHBhcmVudCBzdXJmYWNlLlxuICpcbiAqICAgICAgU2VlIHRoZSB2YXJpb3VzIHJlcXVlc3RzIGZvciBkZXRhaWxzIGFib3V0IHBvc3NpYmxlIHJ1bGVzLlxuICpcbiAqICAgICAgQXQgdGhlIHRpbWUgb2YgdGhlIHJlcXVlc3QsIHRoZSBjb21wb3NpdG9yIG1ha2VzIGEgY29weSBvZiB0aGUgcnVsZXNcbiAqICAgICAgc3BlY2lmaWVkIGJ5IHRoZSB4ZGdfcG9zaXRpb25lci4gVGh1cywgYWZ0ZXIgdGhlIHJlcXVlc3QgaXMgY29tcGxldGUgdGhlXG4gKiAgICAgIHhkZ19wb3NpdGlvbmVyIG9iamVjdCBjYW4gYmUgZGVzdHJveWVkIG9yIHJldXNlZDsgZnVydGhlciBjaGFuZ2VzIHRvIHRoZVxuICogICAgICBvYmplY3Qgd2lsbCBoYXZlIG5vIGVmZmVjdCBvbiBwcmV2aW91cyB1c2FnZXMuXG4gKlxuICogICAgICBGb3IgYW4geGRnX3Bvc2l0aW9uZXIgb2JqZWN0IHRvIGJlIGNvbnNpZGVyZWQgY29tcGxldGUsIGl0IG11c3QgaGF2ZSBhXG4gKiAgICAgIG5vbi16ZXJvIHNpemUgc2V0IGJ5IHNldF9zaXplLCBhbmQgYSBub24temVybyBhbmNob3IgcmVjdGFuZ2xlIHNldCBieVxuICogICAgICBzZXRfYW5jaG9yX3JlY3QuIFBhc3NpbmcgYW4gaW5jb21wbGV0ZSB4ZGdfcG9zaXRpb25lciBvYmplY3Qgd2hlblxuICogICAgICBwb3NpdGlvbmluZyBhIHN1cmZhY2UgcmFpc2VzIGFuIGVycm9yLlxuICogICAgXG4gKi9cbmNsYXNzIFhkZ1Bvc2l0aW9uZXJQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdE5vdGlmeSB0aGUgY29tcG9zaXRvciB0aGF0IHRoZSB4ZGdfcG9zaXRpb25lciB3aWxsIG5vIGxvbmdlciBiZSB1c2VkLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGVzdHJveSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFNldCB0aGUgc2l6ZSBvZiB0aGUgc3VyZmFjZSB0aGF0IGlzIHRvIGJlIHBvc2l0aW9uZWQgd2l0aCB0aGUgcG9zaXRpb25lclxuXHQgKlx0b2JqZWN0LiBUaGUgc2l6ZSBpcyBpbiBzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGVzIGFuZCBjb3JyZXNwb25kcyB0byB0aGVcblx0ICpcdHdpbmRvdyBnZW9tZXRyeS4gU2VlIHhkZ19zdXJmYWNlLnNldF93aW5kb3dfZ2VvbWV0cnkuXG5cdCAqXG5cdCAqXHRJZiBhIHplcm8gb3IgbmVnYXRpdmUgc2l6ZSBpcyBzZXQgdGhlIGludmFsaWRfaW5wdXQgZXJyb3IgaXMgcmFpc2VkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggd2lkdGggb2YgcG9zaXRpb25lZCByZWN0YW5nbGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgaGVpZ2h0IG9mIHBvc2l0aW9uZWQgcmVjdGFuZ2xlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0U2l6ZSAod2lkdGgsIGhlaWdodCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFNwZWNpZnkgdGhlIGFuY2hvciByZWN0YW5nbGUgd2l0aGluIHRoZSBwYXJlbnQgc3VyZmFjZSB0aGF0IHRoZSBjaGlsZFxuXHQgKlx0c3VyZmFjZSB3aWxsIGJlIHBsYWNlZCByZWxhdGl2ZSB0by4gVGhlIHJlY3RhbmdsZSBpcyByZWxhdGl2ZSB0byB0aGVcblx0ICpcdHdpbmRvdyBnZW9tZXRyeSBhcyBkZWZpbmVkIGJ5IHhkZ19zdXJmYWNlLnNldF93aW5kb3dfZ2VvbWV0cnkgb2YgdGhlXG5cdCAqXHRwYXJlbnQgc3VyZmFjZS5cblx0ICpcblx0ICpcdFdoZW4gdGhlIHhkZ19wb3NpdGlvbmVyIG9iamVjdCBpcyB1c2VkIHRvIHBvc2l0aW9uIGEgY2hpbGQgc3VyZmFjZSwgdGhlXG5cdCAqXHRhbmNob3IgcmVjdGFuZ2xlIG1heSBub3QgZXh0ZW5kIG91dHNpZGUgdGhlIHdpbmRvdyBnZW9tZXRyeSBvZiB0aGVcblx0ICpcdHBvc2l0aW9uZWQgY2hpbGQncyBwYXJlbnQgc3VyZmFjZS5cblx0ICpcblx0ICpcdElmIGEgbmVnYXRpdmUgc2l6ZSBpcyBzZXQgdGhlIGludmFsaWRfaW5wdXQgZXJyb3IgaXMgcmFpc2VkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0geCB4IHBvc2l0aW9uIG9mIGFuY2hvciByZWN0YW5nbGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgcG9zaXRpb24gb2YgYW5jaG9yIHJlY3RhbmdsZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIHdpZHRoIG9mIGFuY2hvciByZWN0YW5nbGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgaGVpZ2h0IG9mIGFuY2hvciByZWN0YW5nbGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRBbmNob3JSZWN0ICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMiwgW2ludCh4KSwgaW50KHkpLCBpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdERlZmluZXMgdGhlIGFuY2hvciBwb2ludCBmb3IgdGhlIGFuY2hvciByZWN0YW5nbGUuIFRoZSBzcGVjaWZpZWQgYW5jaG9yXG5cdCAqXHRpcyB1c2VkIGRlcml2ZSBhbiBhbmNob3IgcG9pbnQgdGhhdCB0aGUgY2hpbGQgc3VyZmFjZSB3aWxsIGJlXG5cdCAqXHRwb3NpdGlvbmVkIHJlbGF0aXZlIHRvLiBJZiBhIGNvcm5lciBhbmNob3IgaXMgc2V0IChlLmcuICd0b3BfbGVmdCcgb3Jcblx0ICpcdCdib3R0b21fcmlnaHQnKSwgdGhlIGFuY2hvciBwb2ludCB3aWxsIGJlIGF0IHRoZSBzcGVjaWZpZWQgY29ybmVyO1xuXHQgKlx0b3RoZXJ3aXNlLCB0aGUgZGVyaXZlZCBhbmNob3IgcG9pbnQgd2lsbCBiZSBjZW50ZXJlZCBvbiB0aGUgc3BlY2lmaWVkXG5cdCAqXHRlZGdlLCBvciBpbiB0aGUgY2VudGVyIG9mIHRoZSBhbmNob3IgcmVjdGFuZ2xlIGlmIG5vIGVkZ2UgaXMgc3BlY2lmaWVkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYW5jaG9yIGFuY2hvciBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldEFuY2hvciAoYW5jaG9yKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMywgW3VpbnQoYW5jaG9yKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdERlZmluZXMgaW4gd2hhdCBkaXJlY3Rpb24gYSBzdXJmYWNlIHNob3VsZCBiZSBwb3NpdGlvbmVkLCByZWxhdGl2ZSB0b1xuXHQgKlx0dGhlIGFuY2hvciBwb2ludCBvZiB0aGUgcGFyZW50IHN1cmZhY2UuIElmIGEgY29ybmVyIGdyYXZpdHkgaXNcblx0ICpcdHNwZWNpZmllZCAoZS5nLiAnYm90dG9tX3JpZ2h0JyBvciAndG9wX2xlZnQnKSwgdGhlbiB0aGUgY2hpbGQgc3VyZmFjZVxuXHQgKlx0d2lsbCBiZSBwbGFjZWQgdG93YXJkcyB0aGUgc3BlY2lmaWVkIGdyYXZpdHk7IG90aGVyd2lzZSwgdGhlIGNoaWxkXG5cdCAqXHRzdXJmYWNlIHdpbGwgYmUgY2VudGVyZWQgb3ZlciB0aGUgYW5jaG9yIHBvaW50IG9uIGFueSBheGlzIHRoYXQgaGFkIG5vXG5cdCAqXHRncmF2aXR5IHNwZWNpZmllZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGdyYXZpdHkgZ3Jhdml0eSBkaXJlY3Rpb24gXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRHcmF2aXR5IChncmF2aXR5KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNCwgW3VpbnQoZ3Jhdml0eSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTcGVjaWZ5IGhvdyB0aGUgd2luZG93IHNob3VsZCBiZSBwb3NpdGlvbmVkIGlmIHRoZSBvcmlnaW5hbGx5IGludGVuZGVkXG5cdCAqXHRwb3NpdGlvbiBjYXVzZWQgdGhlIHN1cmZhY2UgdG8gYmUgY29uc3RyYWluZWQsIG1lYW5pbmcgYXQgbGVhc3Rcblx0ICpcdHBhcnRpYWxseSBvdXRzaWRlIHBvc2l0aW9uaW5nIGJvdW5kYXJpZXMgc2V0IGJ5IHRoZSBjb21wb3NpdG9yLiBUaGVcblx0ICpcdGFkanVzdG1lbnQgaXMgc2V0IGJ5IGNvbnN0cnVjdGluZyBhIGJpdG1hc2sgZGVzY3JpYmluZyB0aGUgYWRqdXN0bWVudCB0b1xuXHQgKlx0YmUgbWFkZSB3aGVuIHRoZSBzdXJmYWNlIGlzIGNvbnN0cmFpbmVkIG9uIHRoYXQgYXhpcy5cblx0ICpcblx0ICpcdElmIG5vIGJpdCBmb3Igb25lIGF4aXMgaXMgc2V0LCB0aGUgY29tcG9zaXRvciB3aWxsIGFzc3VtZSB0aGF0IHRoZSBjaGlsZFxuXHQgKlx0c3VyZmFjZSBzaG91bGQgbm90IGNoYW5nZSBpdHMgcG9zaXRpb24gb24gdGhhdCBheGlzIHdoZW4gY29uc3RyYWluZWQuXG5cdCAqXG5cdCAqXHRJZiBtb3JlIHRoYW4gb25lIGJpdCBmb3Igb25lIGF4aXMgaXMgc2V0LCB0aGUgb3JkZXIgb2YgaG93IGFkanVzdG1lbnRzXG5cdCAqXHRhcmUgYXBwbGllZCBpcyBzcGVjaWZpZWQgaW4gdGhlIGNvcnJlc3BvbmRpbmcgYWRqdXN0bWVudCBkZXNjcmlwdGlvbnMuXG5cdCAqXG5cdCAqXHRUaGUgZGVmYXVsdCBhZGp1c3RtZW50IGlzIG5vbmUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjb25zdHJhaW50QWRqdXN0bWVudCBiaXQgbWFzayBvZiBjb25zdHJhaW50IGFkanVzdG1lbnRzIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0Q29uc3RyYWludEFkanVzdG1lbnQgKGNvbnN0cmFpbnRBZGp1c3RtZW50KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNSwgW3VpbnQoY29uc3RyYWludEFkanVzdG1lbnQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U3BlY2lmeSB0aGUgc3VyZmFjZSBwb3NpdGlvbiBvZmZzZXQgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZVxuXHQgKlx0YW5jaG9yIG9uIHRoZSBhbmNob3IgcmVjdGFuZ2xlIGFuZCB0aGUgYW5jaG9yIG9uIHRoZSBzdXJmYWNlLiBGb3Jcblx0ICpcdGV4YW1wbGUgaWYgdGhlIGFuY2hvciBvZiB0aGUgYW5jaG9yIHJlY3RhbmdsZSBpcyBhdCAoeCwgeSksIHRoZSBzdXJmYWNlXG5cdCAqXHRoYXMgdGhlIGdyYXZpdHkgYm90dG9tfHJpZ2h0LCBhbmQgdGhlIG9mZnNldCBpcyAob3gsIG95KSwgdGhlIGNhbGN1bGF0ZWRcblx0ICpcdHN1cmZhY2UgcG9zaXRpb24gd2lsbCBiZSAoeCArIG94LCB5ICsgb3kpLiBUaGUgb2Zmc2V0IHBvc2l0aW9uIG9mIHRoZVxuXHQgKlx0c3VyZmFjZSBpcyB0aGUgb25lIHVzZWQgZm9yIGNvbnN0cmFpbnQgdGVzdGluZy4gU2VlXG5cdCAqXHRzZXRfY29uc3RyYWludF9hZGp1c3RtZW50LlxuXHQgKlxuXHQgKlx0QW4gZXhhbXBsZSB1c2UgY2FzZSBpcyBwbGFjaW5nIGEgcG9wdXAgbWVudSBvbiB0b3Agb2YgYSB1c2VyIGludGVyZmFjZVxuXHQgKlx0ZWxlbWVudCwgd2hpbGUgYWxpZ25pbmcgdGhlIHVzZXIgaW50ZXJmYWNlIGVsZW1lbnQgb2YgdGhlIHBhcmVudCBzdXJmYWNlXG5cdCAqXHR3aXRoIHNvbWUgdXNlciBpbnRlcmZhY2UgZWxlbWVudCBwbGFjZWQgc29tZXdoZXJlIGluIHRoZSBwb3B1cCBzdXJmYWNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0geCBzdXJmYWNlIHBvc2l0aW9uIHggb2Zmc2V0IFxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBzdXJmYWNlIHBvc2l0aW9uIHkgb2Zmc2V0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0T2Zmc2V0ICh4LCB5KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNiwgW2ludCh4KSwgaW50KHkpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtYZGdQb3NpdGlvbmVyRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG59XG5YZGdQb3NpdGlvbmVyUHJveHkucHJvdG9jb2xOYW1lID0gJ3hkZ19wb3NpdGlvbmVyJ1xuXG5YZGdQb3NpdGlvbmVyUHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiBpbnZhbGlkIGlucHV0IHByb3ZpZGVkXG4gICAqL1xuICBpbnZhbGlkSW5wdXQ6IDBcbn1cblxuWGRnUG9zaXRpb25lclByb3h5LkFuY2hvciA9IHtcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbm9uZTogMCxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgdG9wOiAxLFxuICAvKipcbiAgICogXG4gICAqL1xuICBib3R0b206IDIsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGxlZnQ6IDMsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHJpZ2h0OiA0LFxuICAvKipcbiAgICogXG4gICAqL1xuICB0b3BMZWZ0OiA1LFxuICAvKipcbiAgICogXG4gICAqL1xuICBib3R0b21MZWZ0OiA2LFxuICAvKipcbiAgICogXG4gICAqL1xuICB0b3BSaWdodDogNyxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgYm90dG9tUmlnaHQ6IDhcbn1cblxuWGRnUG9zaXRpb25lclByb3h5LkdyYXZpdHkgPSB7XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG5vbmU6IDAsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHRvcDogMSxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgYm90dG9tOiAyLFxuICAvKipcbiAgICogXG4gICAqL1xuICBsZWZ0OiAzLFxuICAvKipcbiAgICogXG4gICAqL1xuICByaWdodDogNCxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgdG9wTGVmdDogNSxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgYm90dG9tTGVmdDogNixcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgdG9wUmlnaHQ6IDcsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGJvdHRvbVJpZ2h0OiA4XG59XG5cblhkZ1Bvc2l0aW9uZXJQcm94eS5Db25zdHJhaW50QWRqdXN0bWVudCA9IHtcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbm9uZTogMCxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgc2xpZGVYOiAxLFxuICAvKipcbiAgICogXG4gICAqL1xuICBzbGlkZVk6IDIsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGZsaXBYOiA0LFxuICAvKipcbiAgICogXG4gICAqL1xuICBmbGlwWTogOCxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcmVzaXplWDogMTYsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHJlc2l6ZVk6IDMyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFhkZ1Bvc2l0aW9uZXJQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDEzIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBSYWZhZWwgQW50b2dub2xsaVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBKYXNwZXIgU3QuIFBpZXJyZVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMyBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBTYW1zdW5nIEVsZWN0cm9uaWNzIENvLiwgTHRkXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFJlZCBIYXQgSW5jLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiAgICBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiAgICB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiAgICB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqICAgIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZSBuZXh0XG4gKiAgICBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlXG4gKiAgICBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogICAgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiAgICBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhkZ1N1cmZhY2VFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIGNvbmZpZ3VyZSBldmVudCBtYXJrcyB0aGUgZW5kIG9mIGEgY29uZmlndXJlIHNlcXVlbmNlLiBBIGNvbmZpZ3VyZVxuXHQgKlx0c2VxdWVuY2UgaXMgYSBzZXQgb2Ygb25lIG9yIG1vcmUgZXZlbnRzIGNvbmZpZ3VyaW5nIHRoZSBzdGF0ZSBvZiB0aGVcblx0ICpcdHhkZ19zdXJmYWNlLCBpbmNsdWRpbmcgdGhlIGZpbmFsIHhkZ19zdXJmYWNlLmNvbmZpZ3VyZSBldmVudC5cblx0ICpcblx0ICpcdFdoZXJlIGFwcGxpY2FibGUsIHhkZ19zdXJmYWNlIHN1cmZhY2Ugcm9sZXMgd2lsbCBkdXJpbmcgYSBjb25maWd1cmVcblx0ICpcdHNlcXVlbmNlIGV4dGVuZCB0aGlzIGV2ZW50IGFzIGEgbGF0Y2hlZCBzdGF0ZSBzZW50IGFzIGV2ZW50cyBiZWZvcmUgdGhlXG5cdCAqXHR4ZGdfc3VyZmFjZS5jb25maWd1cmUgZXZlbnQuIFN1Y2ggZXZlbnRzIHNob3VsZCBiZSBjb25zaWRlcmVkIHRvIG1ha2UgdXBcblx0ICpcdGEgc2V0IG9mIGF0b21pY2FsbHkgYXBwbGllZCBjb25maWd1cmF0aW9uIHN0YXRlcywgd2hlcmUgdGhlXG5cdCAqXHR4ZGdfc3VyZmFjZS5jb25maWd1cmUgY29tbWl0cyB0aGUgYWNjdW11bGF0ZWQgc3RhdGUuXG5cdCAqXG5cdCAqXHRDbGllbnRzIHNob3VsZCBhcnJhbmdlIHRoZWlyIHN1cmZhY2UgZm9yIHRoZSBuZXcgc3RhdGVzLCBhbmQgdGhlbiBzZW5kXG5cdCAqXHRhbiBhY2tfY29uZmlndXJlIHJlcXVlc3Qgd2l0aCB0aGUgc2VyaWFsIHNlbnQgaW4gdGhpcyBjb25maWd1cmUgZXZlbnQgYXRcblx0ICpcdHNvbWUgcG9pbnQgYmVmb3JlIGNvbW1pdHRpbmcgdGhlIG5ldyBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0SWYgdGhlIGNsaWVudCByZWNlaXZlcyBtdWx0aXBsZSBjb25maWd1cmUgZXZlbnRzIGJlZm9yZSBpdCBjYW4gcmVzcG9uZFxuXHQgKlx0dG8gb25lLCBpdCBpcyBmcmVlIHRvIGRpc2NhcmQgYWxsIGJ1dCB0aGUgbGFzdCBldmVudCBpdCByZWNlaXZlZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgb2YgdGhlIGNvbmZpZ3VyZSBldmVudCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNvbmZpZ3VyZShzZXJpYWwpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMyBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgUmFmYWVsIEFudG9nbm9sbGlcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgSmFzcGVyIFN0LiBQaWVycmVcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTMgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgU2Ftc3VuZyBFbGVjdHJvbmljcyBDby4sIEx0ZFxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBSZWQgSGF0IEluYy5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogICAgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogICAgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogICAgdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiAgICBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGUgbmV4dFxuICogICAgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZVxuICogICAgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqICAgIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogICAgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuaW1wb3J0IFhkZ1RvcGxldmVsUHJveHkgZnJvbSAnLi9YZGdUb3BsZXZlbFByb3h5J1xuaW1wb3J0IFhkZ1BvcHVwUHJveHkgZnJvbSAnLi9YZGdQb3B1cFByb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIEFuIGludGVyZmFjZSB0aGF0IG1heSBiZSBpbXBsZW1lbnRlZCBieSBhIHdsX3N1cmZhY2UsIGZvclxuICogICAgICBpbXBsZW1lbnRhdGlvbnMgdGhhdCBwcm92aWRlIGEgZGVza3RvcC1zdHlsZSB1c2VyIGludGVyZmFjZS5cbiAqXG4gKiAgICAgIEl0IHByb3ZpZGVzIGEgYmFzZSBzZXQgb2YgZnVuY3Rpb25hbGl0eSByZXF1aXJlZCB0byBjb25zdHJ1Y3QgdXNlclxuICogICAgICBpbnRlcmZhY2UgZWxlbWVudHMgcmVxdWlyaW5nIG1hbmFnZW1lbnQgYnkgdGhlIGNvbXBvc2l0b3IsIHN1Y2ggYXNcbiAqICAgICAgdG9wbGV2ZWwgd2luZG93cywgbWVudXMsIGV0Yy4gVGhlIHR5cGVzIG9mIGZ1bmN0aW9uYWxpdHkgYXJlIHNwbGl0IGludG9cbiAqICAgICAgeGRnX3N1cmZhY2Ugcm9sZXMuXG4gKlxuICogICAgICBDcmVhdGluZyBhbiB4ZGdfc3VyZmFjZSBkb2VzIG5vdCBzZXQgdGhlIHJvbGUgZm9yIGEgd2xfc3VyZmFjZS4gSW4gb3JkZXJcbiAqICAgICAgdG8gbWFwIGFuIHhkZ19zdXJmYWNlLCB0aGUgY2xpZW50IG11c3QgY3JlYXRlIGEgcm9sZS1zcGVjaWZpYyBvYmplY3RcbiAqICAgICAgdXNpbmcsIGUuZy4sIGdldF90b3BsZXZlbCwgZ2V0X3BvcHVwLiBUaGUgd2xfc3VyZmFjZSBmb3IgYW55IGdpdmVuXG4gKiAgICAgIHhkZ19zdXJmYWNlIGNhbiBoYXZlIGF0IG1vc3Qgb25lIHJvbGUsIGFuZCBtYXkgbm90IGJlIGFzc2lnbmVkIGFueSByb2xlXG4gKiAgICAgIG5vdCBiYXNlZCBvbiB4ZGdfc3VyZmFjZS5cbiAqXG4gKiAgICAgIEEgcm9sZSBtdXN0IGJlIGFzc2lnbmVkIGJlZm9yZSBhbnkgb3RoZXIgcmVxdWVzdHMgYXJlIG1hZGUgdG8gdGhlXG4gKiAgICAgIHhkZ19zdXJmYWNlIG9iamVjdC5cbiAqXG4gKiAgICAgIFRoZSBjbGllbnQgbXVzdCBjYWxsIHdsX3N1cmZhY2UuY29tbWl0IG9uIHRoZSBjb3JyZXNwb25kaW5nIHdsX3N1cmZhY2VcbiAqICAgICAgZm9yIHRoZSB4ZGdfc3VyZmFjZSBzdGF0ZSB0byB0YWtlIGVmZmVjdC5cbiAqXG4gKiAgICAgIENyZWF0aW5nIGFuIHhkZ19zdXJmYWNlIGZyb20gYSB3bF9zdXJmYWNlIHdoaWNoIGhhcyBhIGJ1ZmZlciBhdHRhY2hlZCBvclxuICogICAgICBjb21taXR0ZWQgaXMgYSBjbGllbnQgZXJyb3IsIGFuZCBhbnkgYXR0ZW1wdHMgYnkgYSBjbGllbnQgdG8gYXR0YWNoIG9yXG4gKiAgICAgIG1hbmlwdWxhdGUgYSBidWZmZXIgcHJpb3IgdG8gdGhlIGZpcnN0IHhkZ19zdXJmYWNlLmNvbmZpZ3VyZSBjYWxsIG11c3RcbiAqICAgICAgYWxzbyBiZSB0cmVhdGVkIGFzIGVycm9ycy5cbiAqXG4gKiAgICAgIE1hcHBpbmcgYW4geGRnX3N1cmZhY2UtYmFzZWQgcm9sZSBzdXJmYWNlIGlzIGRlZmluZWQgYXMgbWFraW5nIGl0XG4gKiAgICAgIHBvc3NpYmxlIGZvciB0aGUgc3VyZmFjZSB0byBiZSBzaG93biBieSB0aGUgY29tcG9zaXRvci4gTm90ZSB0aGF0XG4gKiAgICAgIGEgbWFwcGVkIHN1cmZhY2UgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgdmlzaWJsZSBvbmNlIGl0IGlzIG1hcHBlZC5cbiAqXG4gKiAgICAgIEZvciBhbiB4ZGdfc3VyZmFjZSB0byBiZSBtYXBwZWQgYnkgdGhlIGNvbXBvc2l0b3IsIHRoZSBmb2xsb3dpbmdcbiAqICAgICAgY29uZGl0aW9ucyBtdXN0IGJlIG1ldDpcbiAqICAgICAgKDEpIHRoZSBjbGllbnQgaGFzIGFzc2lnbmVkIGFuIHhkZ19zdXJmYWNlLWJhc2VkIHJvbGUgdG8gdGhlIHN1cmZhY2VcbiAqICAgICAgKDIpIHRoZSBjbGllbnQgaGFzIHNldCBhbmQgY29tbWl0dGVkIHRoZSB4ZGdfc3VyZmFjZSBzdGF0ZSBhbmQgdGhlXG4gKlx0ICByb2xlLWRlcGVuZGVudCBzdGF0ZSB0byB0aGUgc3VyZmFjZVxuICogICAgICAoMykgdGhlIGNsaWVudCBoYXMgY29tbWl0dGVkIGEgYnVmZmVyIHRvIHRoZSBzdXJmYWNlXG4gKlxuICogICAgICBBIG5ld2x5LXVubWFwcGVkIHN1cmZhY2UgaXMgY29uc2lkZXJlZCB0byBoYXZlIG1ldCBjb25kaXRpb24gKDEpIG91dFxuICogICAgICBvZiB0aGUgMyByZXF1aXJlZCBjb25kaXRpb25zIGZvciBtYXBwaW5nIGEgc3VyZmFjZSBpZiBpdHMgcm9sZSBzdXJmYWNlXG4gKiAgICAgIGhhcyBub3QgYmVlbiBkZXN0cm95ZWQuXG4gKiAgICBcbiAqL1xuY2xhc3MgWGRnU3VyZmFjZVByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0RGVzdHJveSB0aGUgeGRnX3N1cmZhY2Ugb2JqZWN0LiBBbiB4ZGdfc3VyZmFjZSBtdXN0IG9ubHkgYmUgZGVzdHJveWVkXG5cdCAqXHRhZnRlciBpdHMgcm9sZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGVzdHJveSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgY3JlYXRlcyBhbiB4ZGdfdG9wbGV2ZWwgb2JqZWN0IGZvciB0aGUgZ2l2ZW4geGRnX3N1cmZhY2UgYW5kIGdpdmVzXG5cdCAqXHR0aGUgYXNzb2NpYXRlZCB3bF9zdXJmYWNlIHRoZSB4ZGdfdG9wbGV2ZWwgcm9sZS5cblx0ICpcblx0ICpcdFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvZiB4ZGdfdG9wbGV2ZWwgZm9yIG1vcmUgZGV0YWlscyBhYm91dCB3aGF0IGFuXG5cdCAqXHR4ZGdfdG9wbGV2ZWwgaXMgYW5kIGhvdyBpdCBpcyB1c2VkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtYZGdUb3BsZXZlbFByb3h5fSAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRnZXRUb3BsZXZlbCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMSwgWGRnVG9wbGV2ZWxQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBjcmVhdGVzIGFuIHhkZ19wb3B1cCBvYmplY3QgZm9yIHRoZSBnaXZlbiB4ZGdfc3VyZmFjZSBhbmQgZ2l2ZXNcblx0ICpcdHRoZSBhc3NvY2lhdGVkIHdsX3N1cmZhY2UgdGhlIHhkZ19wb3B1cCByb2xlLlxuXHQgKlxuXHQgKlx0SWYgbnVsbCBpcyBwYXNzZWQgYXMgYSBwYXJlbnQsIGEgcGFyZW50IHN1cmZhY2UgbXVzdCBiZSBzcGVjaWZpZWQgdXNpbmdcblx0ICpcdHNvbWUgb3RoZXIgcHJvdG9jb2wsIGJlZm9yZSBjb21taXR0aW5nIHRoZSBpbml0aWFsIHN0YXRlLlxuXHQgKlxuXHQgKlx0U2VlIHRoZSBkb2N1bWVudGF0aW9uIG9mIHhkZ19wb3B1cCBmb3IgbW9yZSBkZXRhaWxzIGFib3V0IHdoYXQgYW5cblx0ICpcdHhkZ19wb3B1cCBpcyBhbmQgaG93IGl0IGlzIHVzZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Pyp9IHBhcmVudCAgXG5cdCAqIEBwYXJhbSB7Kn0gcG9zaXRpb25lciAgXG5cdCAqIEByZXR1cm4ge1hkZ1BvcHVwUHJveHl9ICBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdldFBvcHVwIChwYXJlbnQsIHBvc2l0aW9uZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAyLCBYZGdQb3B1cFByb3h5LCBbbmV3T2JqZWN0KCksIG9iamVjdE9wdGlvbmFsKHBhcmVudCksIG9iamVjdChwb3NpdGlvbmVyKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSB3aW5kb3cgZ2VvbWV0cnkgb2YgYSBzdXJmYWNlIGlzIGl0cyBcInZpc2libGUgYm91bmRzXCIgZnJvbSB0aGVcblx0ICpcdHVzZXIncyBwZXJzcGVjdGl2ZS4gQ2xpZW50LXNpZGUgZGVjb3JhdGlvbnMgb2Z0ZW4gaGF2ZSBpbnZpc2libGVcblx0ICpcdHBvcnRpb25zIGxpa2UgZHJvcC1zaGFkb3dzIHdoaWNoIHNob3VsZCBiZSBpZ25vcmVkIGZvciB0aGVcblx0ICpcdHB1cnBvc2VzIG9mIGFsaWduaW5nLCBwbGFjaW5nIGFuZCBjb25zdHJhaW5pbmcgd2luZG93cy5cblx0ICpcblx0ICpcdFRoZSB3aW5kb3cgZ2VvbWV0cnkgaXMgZG91YmxlIGJ1ZmZlcmVkLCBhbmQgd2lsbCBiZSBhcHBsaWVkIGF0IHRoZVxuXHQgKlx0dGltZSB3bF9zdXJmYWNlLmNvbW1pdCBvZiB0aGUgY29ycmVzcG9uZGluZyB3bF9zdXJmYWNlIGlzIGNhbGxlZC5cblx0ICpcblx0ICpcdFdoZW4gbWFpbnRhaW5pbmcgYSBwb3NpdGlvbiwgdGhlIGNvbXBvc2l0b3Igc2hvdWxkIHRyZWF0IHRoZSAoeCwgeSlcblx0ICpcdGNvb3JkaW5hdGUgb2YgdGhlIHdpbmRvdyBnZW9tZXRyeSBhcyB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSB3aW5kb3cuXG5cdCAqXHRBIGNsaWVudCBjaGFuZ2luZyB0aGUgKHgsIHkpIHdpbmRvdyBnZW9tZXRyeSBjb29yZGluYXRlIHNob3VsZCBpblxuXHQgKlx0Z2VuZXJhbCBub3QgYWx0ZXIgdGhlIHBvc2l0aW9uIG9mIHRoZSB3aW5kb3cuXG5cdCAqXG5cdCAqXHRPbmNlIHRoZSB3aW5kb3cgZ2VvbWV0cnkgb2YgdGhlIHN1cmZhY2UgaXMgc2V0LCBpdCBpcyBub3QgcG9zc2libGUgdG9cblx0ICpcdHVuc2V0IGl0LCBhbmQgaXQgd2lsbCByZW1haW4gdGhlIHNhbWUgdW50aWwgc2V0X3dpbmRvd19nZW9tZXRyeSBpc1xuXHQgKlx0Y2FsbGVkIGFnYWluLCBldmVuIGlmIGEgbmV3IHN1YnN1cmZhY2Ugb3IgYnVmZmVyIGlzIGF0dGFjaGVkLlxuXHQgKlxuXHQgKlx0SWYgbmV2ZXIgc2V0LCB0aGUgdmFsdWUgaXMgdGhlIGZ1bGwgYm91bmRzIG9mIHRoZSBzdXJmYWNlLFxuXHQgKlx0aW5jbHVkaW5nIGFueSBzdWJzdXJmYWNlcy4gVGhpcyB1cGRhdGVzIGR5bmFtaWNhbGx5IG9uIGV2ZXJ5XG5cdCAqXHRjb21taXQuIFRoaXMgdW5zZXQgaXMgbWVhbnQgZm9yIGV4dHJlbWVseSBzaW1wbGUgY2xpZW50cy5cblx0ICpcblx0ICpcdFRoZSBhcmd1bWVudHMgYXJlIGdpdmVuIGluIHRoZSBzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGUgc3BhY2Ugb2Zcblx0ICpcdHRoZSB3bF9zdXJmYWNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHhkZ19zdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhlIHdpZHRoIGFuZCBoZWlnaHQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby4gU2V0dGluZyBhbiBpbnZhbGlkIHNpemVcblx0ICpcdHdpbGwgcmFpc2UgYW4gZXJyb3IuIFdoZW4gYXBwbGllZCwgdGhlIGVmZmVjdGl2ZSB3aW5kb3cgZ2VvbWV0cnkgd2lsbCBiZVxuXHQgKlx0dGhlIHNldCB3aW5kb3cgZ2VvbWV0cnkgY2xhbXBlZCB0byB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIG9mIHRoZVxuXHQgKlx0Y29tYmluZWQgZ2VvbWV0cnkgb2YgdGhlIHN1cmZhY2Ugb2YgdGhlIHhkZ19zdXJmYWNlIGFuZCB0aGUgYXNzb2NpYXRlZFxuXHQgKlx0c3Vic3VyZmFjZXMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4ICBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldFdpbmRvd0dlb21ldHJ5ICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMywgW2ludCh4KSwgaW50KHkpLCBpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFdoZW4gYSBjb25maWd1cmUgZXZlbnQgaXMgcmVjZWl2ZWQsIGlmIGEgY2xpZW50IGNvbW1pdHMgdGhlXG5cdCAqXHRzdXJmYWNlIGluIHJlc3BvbnNlIHRvIHRoZSBjb25maWd1cmUgZXZlbnQsIHRoZW4gdGhlIGNsaWVudFxuXHQgKlx0bXVzdCBtYWtlIGFuIGFja19jb25maWd1cmUgcmVxdWVzdCBzb21ldGltZSBiZWZvcmUgdGhlIGNvbW1pdFxuXHQgKlx0cmVxdWVzdCwgcGFzc2luZyBhbG9uZyB0aGUgc2VyaWFsIG9mIHRoZSBjb25maWd1cmUgZXZlbnQuXG5cdCAqXG5cdCAqXHRGb3IgaW5zdGFuY2UsIGZvciB0b3BsZXZlbCBzdXJmYWNlcyB0aGUgY29tcG9zaXRvciBtaWdodCB1c2UgdGhpc1xuXHQgKlx0aW5mb3JtYXRpb24gdG8gbW92ZSBhIHN1cmZhY2UgdG8gdGhlIHRvcCBsZWZ0IG9ubHkgd2hlbiB0aGUgY2xpZW50IGhhc1xuXHQgKlx0ZHJhd24gaXRzZWxmIGZvciB0aGUgbWF4aW1pemVkIG9yIGZ1bGxzY3JlZW4gc3RhdGUuXG5cdCAqXG5cdCAqXHRJZiB0aGUgY2xpZW50IHJlY2VpdmVzIG11bHRpcGxlIGNvbmZpZ3VyZSBldmVudHMgYmVmb3JlIGl0XG5cdCAqXHRjYW4gcmVzcG9uZCB0byBvbmUsIGl0IG9ubHkgaGFzIHRvIGFjayB0aGUgbGFzdCBjb25maWd1cmUgZXZlbnQuXG5cdCAqXG5cdCAqXHRBIGNsaWVudCBpcyBub3QgcmVxdWlyZWQgdG8gY29tbWl0IGltbWVkaWF0ZWx5IGFmdGVyIHNlbmRpbmdcblx0ICpcdGFuIGFja19jb25maWd1cmUgcmVxdWVzdCAtIGl0IG1heSBldmVuIGFja19jb25maWd1cmUgc2V2ZXJhbCB0aW1lc1xuXHQgKlx0YmVmb3JlIGl0cyBuZXh0IHN1cmZhY2UgY29tbWl0LlxuXHQgKlxuXHQgKlx0QSBjbGllbnQgbWF5IHNlbmQgbXVsdGlwbGUgYWNrX2NvbmZpZ3VyZSByZXF1ZXN0cyBiZWZvcmUgY29tbWl0dGluZywgYnV0XG5cdCAqXHRvbmx5IHRoZSBsYXN0IHJlcXVlc3Qgc2VudCBiZWZvcmUgYSBjb21taXQgaW5kaWNhdGVzIHdoaWNoIGNvbmZpZ3VyZVxuXHQgKlx0ZXZlbnQgdGhlIGNsaWVudCByZWFsbHkgaXMgcmVzcG9uZGluZyB0by5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCB0aGUgc2VyaWFsIGZyb20gdGhlIGNvbmZpZ3VyZSBldmVudCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGFja0NvbmZpZ3VyZSAoc2VyaWFsKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNCwgW3VpbnQoc2VyaWFsKV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7WGRnU3VyZmFjZUV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmNvbmZpZ3VyZSh1KG1lc3NhZ2UpKVxuXHR9XG5cbn1cblhkZ1N1cmZhY2VQcm94eS5wcm90b2NvbE5hbWUgPSAneGRnX3N1cmZhY2UnXG5cblhkZ1N1cmZhY2VQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbm90Q29uc3RydWN0ZWQ6IDEsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGFscmVhZHlDb25zdHJ1Y3RlZDogMixcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgdW5jb25maWd1cmVkQnVmZmVyOiAzXG59XG5cbmV4cG9ydCBkZWZhdWx0IFhkZ1N1cmZhY2VQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDEzIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBSYWZhZWwgQW50b2dub2xsaVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBKYXNwZXIgU3QuIFBpZXJyZVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMyBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBTYW1zdW5nIEVsZWN0cm9uaWNzIENvLiwgTHRkXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFJlZCBIYXQgSW5jLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiAgICBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiAgICB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiAgICB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqICAgIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZSBuZXh0XG4gKiAgICBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlXG4gKiAgICBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogICAgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiAgICBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhkZ1RvcGxldmVsRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgY29uZmlndXJlIGV2ZW50IGFza3MgdGhlIGNsaWVudCB0byByZXNpemUgaXRzIHRvcGxldmVsIHN1cmZhY2Ugb3Jcblx0ICpcdHRvIGNoYW5nZSBpdHMgc3RhdGUuIFRoZSBjb25maWd1cmVkIHN0YXRlIHNob3VsZCBub3QgYmUgYXBwbGllZFxuXHQgKlx0aW1tZWRpYXRlbHkuIFNlZSB4ZGdfc3VyZmFjZS5jb25maWd1cmUgZm9yIGRldGFpbHMuXG5cdCAqXG5cdCAqXHRUaGUgd2lkdGggYW5kIGhlaWdodCBhcmd1bWVudHMgc3BlY2lmeSBhIGhpbnQgdG8gdGhlIHdpbmRvd1xuXHQgKlx0YWJvdXQgaG93IGl0cyBzdXJmYWNlIHNob3VsZCBiZSByZXNpemVkIGluIHdpbmRvdyBnZW9tZXRyeVxuXHQgKlx0Y29vcmRpbmF0ZXMuIFNlZSBzZXRfd2luZG93X2dlb21ldHJ5LlxuXHQgKlxuXHQgKlx0SWYgdGhlIHdpZHRoIG9yIGhlaWdodCBhcmd1bWVudHMgYXJlIHplcm8sIGl0IG1lYW5zIHRoZSBjbGllbnRcblx0ICpcdHNob3VsZCBkZWNpZGUgaXRzIG93biB3aW5kb3cgZGltZW5zaW9uLiBUaGlzIG1heSBoYXBwZW4gd2hlbiB0aGVcblx0ICpcdGNvbXBvc2l0b3IgbmVlZHMgdG8gY29uZmlndXJlIHRoZSBzdGF0ZSBvZiB0aGUgc3VyZmFjZSBidXQgZG9lc24ndFxuXHQgKlx0aGF2ZSBhbnkgaW5mb3JtYXRpb24gYWJvdXQgYW55IHByZXZpb3VzIG9yIGV4cGVjdGVkIGRpbWVuc2lvbi5cblx0ICpcblx0ICpcdFRoZSBzdGF0ZXMgbGlzdGVkIGluIHRoZSBldmVudCBzcGVjaWZ5IGhvdyB0aGUgd2lkdGgvaGVpZ2h0XG5cdCAqXHRhcmd1bWVudHMgc2hvdWxkIGJlIGludGVycHJldGVkLCBhbmQgcG9zc2libHkgaG93IGl0IHNob3VsZCBiZVxuXHQgKlx0ZHJhd24uXG5cdCAqXG5cdCAqXHRDbGllbnRzIG11c3Qgc2VuZCBhbiBhY2tfY29uZmlndXJlIGluIHJlc3BvbnNlIHRvIHRoaXMgZXZlbnQuIFNlZVxuXHQgKlx0eGRnX3N1cmZhY2UuY29uZmlndXJlIGFuZCB4ZGdfc3VyZmFjZS5hY2tfY29uZmlndXJlIGZvciBkZXRhaWxzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBcblx0ICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gc3RhdGVzICBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNvbmZpZ3VyZSh3aWR0aCwgaGVpZ2h0LCBzdGF0ZXMpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgY2xvc2UgZXZlbnQgaXMgc2VudCBieSB0aGUgY29tcG9zaXRvciB3aGVuIHRoZSB1c2VyXG5cdCAqXHR3YW50cyB0aGUgc3VyZmFjZSB0byBiZSBjbG9zZWQuIFRoaXMgc2hvdWxkIGJlIGVxdWl2YWxlbnQgdG9cblx0ICpcdHRoZSB1c2VyIGNsaWNraW5nIHRoZSBjbG9zZSBidXR0b24gaW4gY2xpZW50LXNpZGUgZGVjb3JhdGlvbnMsXG5cdCAqXHRpZiB5b3VyIGFwcGxpY2F0aW9uIGhhcyBhbnkuXG5cdCAqXG5cdCAqXHRUaGlzIGlzIG9ubHkgYSByZXF1ZXN0IHRoYXQgdGhlIHVzZXIgaW50ZW5kcyB0byBjbG9zZSB0aGVcblx0ICpcdHdpbmRvdy4gVGhlIGNsaWVudCBtYXkgY2hvb3NlIHRvIGlnbm9yZSB0aGlzIHJlcXVlc3QsIG9yIHNob3dcblx0ICpcdGEgZGlhbG9nIHRvIGFzayB0aGUgdXNlciB0byBzYXZlIHRoZWlyIGRhdGEsIGV0Yy5cblx0ICogICAgICBcblx0ICpcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNsb3NlKCkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDEzIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBSYWZhZWwgQW50b2dub2xsaVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBKYXNwZXIgU3QuIFBpZXJyZVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMyBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBTYW1zdW5nIEVsZWN0cm9uaWNzIENvLiwgTHRkXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFJlZCBIYXQgSW5jLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiAgICBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiAgICB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiAgICB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqICAgIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZSBuZXh0XG4gKiAgICBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlXG4gKiAgICBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogICAgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiAgICBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhpcyBpbnRlcmZhY2UgZGVmaW5lcyBhbiB4ZGdfc3VyZmFjZSByb2xlIHdoaWNoIGFsbG93cyBhIHN1cmZhY2UgdG8sXG4gKiAgICAgIGFtb25nIG90aGVyIHRoaW5ncywgc2V0IHdpbmRvdy1saWtlIHByb3BlcnRpZXMgc3VjaCBhcyBtYXhpbWl6ZSxcbiAqICAgICAgZnVsbHNjcmVlbiwgYW5kIG1pbmltaXplLCBzZXQgYXBwbGljYXRpb24tc3BlY2lmaWMgbWV0YWRhdGEgbGlrZSB0aXRsZSBhbmRcbiAqICAgICAgaWQsIGFuZCB3ZWxsIGFzIHRyaWdnZXIgdXNlciBpbnRlcmFjdGl2ZSBvcGVyYXRpb25zIHN1Y2ggYXMgaW50ZXJhY3RpdmVcbiAqICAgICAgcmVzaXplIGFuZCBtb3ZlLlxuICpcbiAqICAgICAgVW5tYXBwaW5nIGFuIHhkZ190b3BsZXZlbCBtZWFucyB0aGF0IHRoZSBzdXJmYWNlIGNhbm5vdCBiZSBzaG93blxuICogICAgICBieSB0aGUgY29tcG9zaXRvciB1bnRpbCBpdCBpcyBleHBsaWNpdGx5IG1hcHBlZCBhZ2Fpbi5cbiAqICAgICAgQWxsIGFjdGl2ZSBvcGVyYXRpb25zIChlLmcuLCBtb3ZlLCByZXNpemUpIGFyZSBjYW5jZWxlZCBhbmQgYWxsXG4gKiAgICAgIGF0dHJpYnV0ZXMgKGUuZy4gdGl0bGUsIHN0YXRlLCBzdGFja2luZywgLi4uKSBhcmUgZGlzY2FyZGVkIGZvclxuICogICAgICBhbiB4ZGdfdG9wbGV2ZWwgc3VyZmFjZSB3aGVuIGl0IGlzIHVubWFwcGVkLlxuICpcbiAqICAgICAgQXR0YWNoaW5nIGEgbnVsbCBidWZmZXIgdG8gYSB0b3BsZXZlbCB1bm1hcHMgdGhlIHN1cmZhY2UuXG4gKiAgICBcbiAqL1xuY2xhc3MgWGRnVG9wbGV2ZWxQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBkZXN0cm95cyB0aGUgcm9sZSBzdXJmYWNlIGFuZCB1bm1hcHMgdGhlIHN1cmZhY2U7XG5cdCAqXHRzZWUgXCJVbm1hcHBpbmdcIiBiZWhhdmlvciBpbiBpbnRlcmZhY2Ugc2VjdGlvbiBmb3IgZGV0YWlscy5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXQgdGhlIFwicGFyZW50XCIgb2YgdGhpcyBzdXJmYWNlLiBUaGlzIHN1cmZhY2Ugc2hvdWxkIGJlIHN0YWNrZWRcblx0ICpcdGFib3ZlIHRoZSBwYXJlbnQgc3VyZmFjZSBhbmQgYWxsIG90aGVyIGFuY2VzdG9yIHN1cmZhY2VzLlxuXHQgKlxuXHQgKlx0UGFyZW50IHdpbmRvd3Mgc2hvdWxkIGJlIHNldCBvbiBkaWFsb2dzLCB0b29sYm94ZXMsIG9yIG90aGVyXG5cdCAqXHRcImF1eGlsaWFyeVwiIHN1cmZhY2VzLCBzbyB0aGF0IHRoZSBwYXJlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGRpYWxvZ1xuXHQgKlx0aXMgcmFpc2VkLlxuXHQgKlxuXHQgKlx0U2V0dGluZyBhIG51bGwgcGFyZW50IGZvciBhIGNoaWxkIHdpbmRvdyByZW1vdmVzIGFueSBwYXJlbnQtY2hpbGRcblx0ICpcdHJlbGF0aW9uc2hpcCBmb3IgdGhlIGNoaWxkLiBTZXR0aW5nIGEgbnVsbCBwYXJlbnQgZm9yIGEgd2luZG93IHdoaWNoXG5cdCAqXHRjdXJyZW50bHkgaGFzIG5vIHBhcmVudCBpcyBhIG5vLW9wLlxuXHQgKlxuXHQgKlx0SWYgdGhlIHBhcmVudCBpcyB1bm1hcHBlZCB0aGVuIGl0cyBjaGlsZHJlbiBhcmUgbWFuYWdlZCBhc1xuXHQgKlx0dGhvdWdoIHRoZSBwYXJlbnQgb2YgdGhlIG5vdy11bm1hcHBlZCBwYXJlbnQgaGFzIGJlY29tZSB0aGVcblx0ICpcdHBhcmVudCBvZiB0aGlzIHN1cmZhY2UuIElmIG5vIHBhcmVudCBleGlzdHMgZm9yIHRoZSBub3ctdW5tYXBwZWRcblx0ICpcdHBhcmVudCB0aGVuIHRoZSBjaGlsZHJlbiBhcmUgbWFuYWdlZCBhcyB0aG91Z2ggdGhleSBoYXZlIG5vXG5cdCAqXHRwYXJlbnQgc3VyZmFjZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHs/Kn0gcGFyZW50ICBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldFBhcmVudCAocGFyZW50KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMSwgW29iamVjdE9wdGlvbmFsKHBhcmVudCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXQgYSBzaG9ydCB0aXRsZSBmb3IgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGlzIHN0cmluZyBtYXkgYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgc3VyZmFjZSBpbiBhIHRhc2sgYmFyLFxuXHQgKlx0d2luZG93IGxpc3QsIG9yIG90aGVyIHVzZXIgaW50ZXJmYWNlIGVsZW1lbnRzIHByb3ZpZGVkIGJ5IHRoZVxuXHQgKlx0Y29tcG9zaXRvci5cblx0ICpcblx0ICpcdFRoZSBzdHJpbmcgbXVzdCBiZSBlbmNvZGVkIGluIFVURi04LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0VGl0bGUgKHRpdGxlKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMiwgW3N0cmluZyh0aXRsZSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXQgYW4gYXBwbGljYXRpb24gaWRlbnRpZmllciBmb3IgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgYXBwIElEIGlkZW50aWZpZXMgdGhlIGdlbmVyYWwgY2xhc3Mgb2YgYXBwbGljYXRpb25zIHRvIHdoaWNoXG5cdCAqXHR0aGUgc3VyZmFjZSBiZWxvbmdzLiBUaGUgY29tcG9zaXRvciBjYW4gdXNlIHRoaXMgdG8gZ3JvdXAgbXVsdGlwbGVcblx0ICpcdHN1cmZhY2VzIHRvZ2V0aGVyLCBvciB0byBkZXRlcm1pbmUgaG93IHRvIGxhdW5jaCBhIG5ldyBhcHBsaWNhdGlvbi5cblx0ICpcblx0ICpcdEZvciBELUJ1cyBhY3RpdmF0YWJsZSBhcHBsaWNhdGlvbnMsIHRoZSBhcHAgSUQgaXMgdXNlZCBhcyB0aGUgRC1CdXNcblx0ICpcdHNlcnZpY2UgbmFtZS5cblx0ICpcblx0ICpcdFRoZSBjb21wb3NpdG9yIHNoZWxsIHdpbGwgdHJ5IHRvIGdyb3VwIGFwcGxpY2F0aW9uIHN1cmZhY2VzIHRvZ2V0aGVyXG5cdCAqXHRieSB0aGVpciBhcHAgSUQuIEFzIGEgYmVzdCBwcmFjdGljZSwgaXQgaXMgc3VnZ2VzdGVkIHRvIHNlbGVjdCBhcHBcblx0ICpcdElEJ3MgdGhhdCBtYXRjaCB0aGUgYmFzZW5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uJ3MgLmRlc2t0b3AgZmlsZS5cblx0ICpcdEZvciBleGFtcGxlLCBcIm9yZy5mcmVlZGVza3RvcC5Gb29WaWV3ZXJcIiB3aGVyZSB0aGUgLmRlc2t0b3AgZmlsZSBpc1xuXHQgKlx0XCJvcmcuZnJlZWRlc2t0b3AuRm9vVmlld2VyLmRlc2t0b3BcIi5cblx0ICpcblx0ICpcdFNlZSB0aGUgZGVza3RvcC1lbnRyeSBzcGVjaWZpY2F0aW9uIFswXSBmb3IgbW9yZSBkZXRhaWxzIG9uXG5cdCAqXHRhcHBsaWNhdGlvbiBpZGVudGlmaWVycyBhbmQgaG93IHRoZXkgcmVsYXRlIHRvIHdlbGwta25vd24gRC1CdXNcblx0ICpcdG5hbWVzIGFuZCAuZGVza3RvcCBmaWxlcy5cblx0ICpcblx0ICpcdFswXSBodHRwOi8vc3RhbmRhcmRzLmZyZWVkZXNrdG9wLm9yZy9kZXNrdG9wLWVudHJ5LXNwZWMvXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhcHBJZCAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRBcHBJZCAoYXBwSWQpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAzLCBbc3RyaW5nKGFwcElkKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdENsaWVudHMgaW1wbGVtZW50aW5nIGNsaWVudC1zaWRlIGRlY29yYXRpb25zIG1pZ2h0IHdhbnQgdG8gc2hvd1xuXHQgKlx0YSBjb250ZXh0IG1lbnUgd2hlbiByaWdodC1jbGlja2luZyBvbiB0aGUgZGVjb3JhdGlvbnMsIGdpdmluZyB0aGVcblx0ICpcdHVzZXIgYSBtZW51IHRoYXQgdGhleSBjYW4gdXNlIHRvIG1heGltaXplIG9yIG1pbmltaXplIHRoZSB3aW5kb3cuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgYXNrcyB0aGUgY29tcG9zaXRvciB0byBwb3AgdXAgc3VjaCBhIHdpbmRvdyBtZW51IGF0XG5cdCAqXHR0aGUgZ2l2ZW4gcG9zaXRpb24sIHJlbGF0aXZlIHRvIHRoZSBsb2NhbCBzdXJmYWNlIGNvb3JkaW5hdGVzIG9mXG5cdCAqXHR0aGUgcGFyZW50IHN1cmZhY2UuIFRoZXJlIGFyZSBubyBndWFyYW50ZWVzIGFzIHRvIHdoYXQgbWVudSBpdGVtc1xuXHQgKlx0dGhlIHdpbmRvdyBtZW51IGNvbnRhaW5zLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG11c3QgYmUgdXNlZCBpbiByZXNwb25zZSB0byBzb21lIHNvcnQgb2YgdXNlciBhY3Rpb25cblx0ICpcdGxpa2UgYSBidXR0b24gcHJlc3MsIGtleSBwcmVzcywgb3IgdG91Y2ggZG93biBldmVudC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSBzZWF0IHRoZSB3bF9zZWF0IG9mIHRoZSB1c2VyIGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHRoZSBzZXJpYWwgb2YgdGhlIHVzZXIgZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHRoZSB4IHBvc2l0aW9uIHRvIHBvcCB1cCB0aGUgd2luZG93IG1lbnUgYXQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHRoZSB5IHBvc2l0aW9uIHRvIHBvcCB1cCB0aGUgd2luZG93IG1lbnUgYXQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzaG93V2luZG93TWVudSAoc2VhdCwgc2VyaWFsLCB4LCB5KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNCwgW29iamVjdChzZWF0KSwgdWludChzZXJpYWwpLCBpbnQoeCksIGludCh5KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFN0YXJ0IGFuIGludGVyYWN0aXZlLCB1c2VyLWRyaXZlbiBtb3ZlIG9mIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG11c3QgYmUgdXNlZCBpbiByZXNwb25zZSB0byBzb21lIHNvcnQgb2YgdXNlciBhY3Rpb25cblx0ICpcdGxpa2UgYSBidXR0b24gcHJlc3MsIGtleSBwcmVzcywgb3IgdG91Y2ggZG93biBldmVudC4gVGhlIHBhc3NlZFxuXHQgKlx0c2VyaWFsIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGludGVyYWN0aXZlIG1vdmUgKHRvdWNoLFxuXHQgKlx0cG9pbnRlciwgZXRjKS5cblx0ICpcblx0ICpcdFRoZSBzZXJ2ZXIgbWF5IGlnbm9yZSBtb3ZlIHJlcXVlc3RzIGRlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2Zcblx0ICpcdHRoZSBzdXJmYWNlIChlLmcuIGZ1bGxzY3JlZW4gb3IgbWF4aW1pemVkKSwgb3IgaWYgdGhlIHBhc3NlZCBzZXJpYWxcblx0ICpcdGlzIG5vIGxvbmdlciB2YWxpZC5cblx0ICpcblx0ICpcdElmIHRyaWdnZXJlZCwgdGhlIHN1cmZhY2Ugd2lsbCBsb3NlIHRoZSBmb2N1cyBvZiB0aGUgZGV2aWNlXG5cdCAqXHQod2xfcG9pbnRlciwgd2xfdG91Y2gsIGV0YykgdXNlZCBmb3IgdGhlIG1vdmUuIEl0IGlzIHVwIHRvIHRoZVxuXHQgKlx0Y29tcG9zaXRvciB0byB2aXN1YWxseSBpbmRpY2F0ZSB0aGF0IHRoZSBtb3ZlIGlzIHRha2luZyBwbGFjZSwgc3VjaCBhc1xuXHQgKlx0dXBkYXRpbmcgYSBwb2ludGVyIGN1cnNvciwgZHVyaW5nIHRoZSBtb3ZlLiBUaGVyZSBpcyBubyBndWFyYW50ZWVcblx0ICpcdHRoYXQgdGhlIGRldmljZSBmb2N1cyB3aWxsIHJldHVybiB3aGVuIHRoZSBtb3ZlIGlzIGNvbXBsZXRlZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSBzZWF0IHRoZSB3bF9zZWF0IG9mIHRoZSB1c2VyIGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHRoZSBzZXJpYWwgb2YgdGhlIHVzZXIgZXZlbnQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRtb3ZlIChzZWF0LCBzZXJpYWwpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA1LCBbb2JqZWN0KHNlYXQpLCB1aW50KHNlcmlhbCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTdGFydCBhIHVzZXItZHJpdmVuLCBpbnRlcmFjdGl2ZSByZXNpemUgb2YgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgbXVzdCBiZSB1c2VkIGluIHJlc3BvbnNlIHRvIHNvbWUgc29ydCBvZiB1c2VyIGFjdGlvblxuXHQgKlx0bGlrZSBhIGJ1dHRvbiBwcmVzcywga2V5IHByZXNzLCBvciB0b3VjaCBkb3duIGV2ZW50LiBUaGUgcGFzc2VkXG5cdCAqXHRzZXJpYWwgaXMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgaW50ZXJhY3RpdmUgcmVzaXplICh0b3VjaCxcblx0ICpcdHBvaW50ZXIsIGV0YykuXG5cdCAqXG5cdCAqXHRUaGUgc2VydmVyIG1heSBpZ25vcmUgcmVzaXplIHJlcXVlc3RzIGRlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2Zcblx0ICpcdHRoZSBzdXJmYWNlIChlLmcuIGZ1bGxzY3JlZW4gb3IgbWF4aW1pemVkKS5cblx0ICpcblx0ICpcdElmIHRyaWdnZXJlZCwgdGhlIGNsaWVudCB3aWxsIHJlY2VpdmUgY29uZmlndXJlIGV2ZW50cyB3aXRoIHRoZVxuXHQgKlx0XCJyZXNpemVcIiBzdGF0ZSBlbnVtIHZhbHVlIGFuZCB0aGUgZXhwZWN0ZWQgc2l6ZXMuIFNlZSB0aGUgXCJyZXNpemVcIlxuXHQgKlx0ZW51bSB2YWx1ZSBmb3IgbW9yZSBkZXRhaWxzIGFib3V0IHdoYXQgaXMgcmVxdWlyZWQuIFRoZSBjbGllbnRcblx0ICpcdG11c3QgYWxzbyBhY2tub3dsZWRnZSBjb25maWd1cmUgZXZlbnRzIHVzaW5nIFwiYWNrX2NvbmZpZ3VyZVwiLiBBZnRlclxuXHQgKlx0dGhlIHJlc2l6ZSBpcyBjb21wbGV0ZWQsIHRoZSBjbGllbnQgd2lsbCByZWNlaXZlIGFub3RoZXIgXCJjb25maWd1cmVcIlxuXHQgKlx0ZXZlbnQgd2l0aG91dCB0aGUgcmVzaXplIHN0YXRlLlxuXHQgKlxuXHQgKlx0SWYgdHJpZ2dlcmVkLCB0aGUgc3VyZmFjZSBhbHNvIHdpbGwgbG9zZSB0aGUgZm9jdXMgb2YgdGhlIGRldmljZVxuXHQgKlx0KHdsX3BvaW50ZXIsIHdsX3RvdWNoLCBldGMpIHVzZWQgZm9yIHRoZSByZXNpemUuIEl0IGlzIHVwIHRvIHRoZVxuXHQgKlx0Y29tcG9zaXRvciB0byB2aXN1YWxseSBpbmRpY2F0ZSB0aGF0IHRoZSByZXNpemUgaXMgdGFraW5nIHBsYWNlLFxuXHQgKlx0c3VjaCBhcyB1cGRhdGluZyBhIHBvaW50ZXIgY3Vyc29yLCBkdXJpbmcgdGhlIHJlc2l6ZS4gVGhlcmUgaXMgbm9cblx0ICpcdGd1YXJhbnRlZSB0aGF0IHRoZSBkZXZpY2UgZm9jdXMgd2lsbCByZXR1cm4gd2hlbiB0aGUgcmVzaXplIGlzXG5cdCAqXHRjb21wbGV0ZWQuXG5cdCAqXG5cdCAqXHRUaGUgZWRnZXMgcGFyYW1ldGVyIHNwZWNpZmllcyBob3cgdGhlIHN1cmZhY2Ugc2hvdWxkIGJlIHJlc2l6ZWQsXG5cdCAqXHRhbmQgaXMgb25lIG9mIHRoZSB2YWx1ZXMgb2YgdGhlIHJlc2l6ZV9lZGdlIGVudW0uIFRoZSBjb21wb3NpdG9yXG5cdCAqXHRtYXkgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gdXBkYXRlIHRoZSBzdXJmYWNlIHBvc2l0aW9uIGZvclxuXHQgKlx0ZXhhbXBsZSB3aGVuIGRyYWdnaW5nIHRoZSB0b3AgbGVmdCBjb3JuZXIuIFRoZSBjb21wb3NpdG9yIG1heSBhbHNvXG5cdCAqXHR1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBhZGFwdCBpdHMgYmVoYXZpb3IsIGUuZy4gY2hvb3NlIGFuXG5cdCAqXHRhcHByb3ByaWF0ZSBjdXJzb3IgaW1hZ2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc2VhdCB0aGUgd2xfc2VhdCBvZiB0aGUgdXNlciBldmVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCB0aGUgc2VyaWFsIG9mIHRoZSB1c2VyIGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZWRnZXMgd2hpY2ggZWRnZSBvciBjb3JuZXIgaXMgYmVpbmcgZHJhZ2dlZCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHJlc2l6ZSAoc2VhdCwgc2VyaWFsLCBlZGdlcykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDYsIFtvYmplY3Qoc2VhdCksIHVpbnQoc2VyaWFsKSwgdWludChlZGdlcyldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXQgYSBtYXhpbXVtIHNpemUgZm9yIHRoZSB3aW5kb3cuXG5cdCAqXG5cdCAqXHRUaGUgY2xpZW50IGNhbiBzcGVjaWZ5IGEgbWF4aW11bSBzaXplIHNvIHRoYXQgdGhlIGNvbXBvc2l0b3IgZG9lc1xuXHQgKlx0bm90IHRyeSB0byBjb25maWd1cmUgdGhlIHdpbmRvdyBiZXlvbmQgdGhpcyBzaXplLlxuXHQgKlxuXHQgKlx0VGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJndW1lbnRzIGFyZSBpbiB3aW5kb3cgZ2VvbWV0cnkgY29vcmRpbmF0ZXMuXG5cdCAqXHRTZWUgeGRnX3N1cmZhY2Uuc2V0X3dpbmRvd19nZW9tZXRyeS5cblx0ICpcblx0ICpcdFZhbHVlcyBzZXQgaW4gdGhpcyB3YXkgYXJlIGRvdWJsZS1idWZmZXJlZC4gVGhleSB3aWxsIGdldCBhcHBsaWVkXG5cdCAqXHRvbiB0aGUgbmV4dCBjb21taXQuXG5cdCAqXG5cdCAqXHRUaGUgY29tcG9zaXRvciBjYW4gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gYWxsb3cgb3IgZGlzYWxsb3dcblx0ICpcdGRpZmZlcmVudCBzdGF0ZXMgbGlrZSBtYXhpbWl6ZSBvciBmdWxsc2NyZWVuIGFuZCBkcmF3IGFjY3VyYXRlXG5cdCAqXHRhbmltYXRpb25zLlxuXHQgKlxuXHQgKlx0U2ltaWxhcmx5LCBhIHRpbGluZyB3aW5kb3cgbWFuYWdlciBtYXkgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG9cblx0ICpcdHBsYWNlIGFuZCByZXNpemUgY2xpZW50IHdpbmRvd3MgaW4gYSBtb3JlIGVmZmVjdGl2ZSB3YXkuXG5cdCAqXG5cdCAqXHRUaGUgY2xpZW50IHNob3VsZCBub3QgcmVseSBvbiB0aGUgY29tcG9zaXRvciB0byBvYmV5IHRoZSBtYXhpbXVtXG5cdCAqXHRzaXplLiBUaGUgY29tcG9zaXRvciBtYXkgZGVjaWRlIHRvIGlnbm9yZSB0aGUgdmFsdWVzIHNldCBieSB0aGVcblx0ICpcdGNsaWVudCBhbmQgcmVxdWVzdCBhIGxhcmdlciBzaXplLlxuXHQgKlxuXHQgKlx0SWYgbmV2ZXIgc2V0LCBvciBhIHZhbHVlIG9mIHplcm8gaW4gdGhlIHJlcXVlc3QsIG1lYW5zIHRoYXQgdGhlXG5cdCAqXHRjbGllbnQgaGFzIG5vIGV4cGVjdGVkIG1heGltdW0gc2l6ZSBpbiB0aGUgZ2l2ZW4gZGltZW5zaW9uLlxuXHQgKlx0QXMgYSByZXN1bHQsIGEgY2xpZW50IHdpc2hpbmcgdG8gcmVzZXQgdGhlIG1heGltdW0gc2l6ZVxuXHQgKlx0dG8gYW4gdW5zcGVjaWZpZWQgc3RhdGUgY2FuIHVzZSB6ZXJvIGZvciB3aWR0aCBhbmQgaGVpZ2h0IGluIHRoZVxuXHQgKlx0cmVxdWVzdC5cblx0ICpcblx0ICpcdFJlcXVlc3RpbmcgYSBtYXhpbXVtIHNpemUgdG8gYmUgc21hbGxlciB0aGFuIHRoZSBtaW5pbXVtIHNpemUgb2Zcblx0ICpcdGEgc3VyZmFjZSBpcyBpbGxlZ2FsIGFuZCB3aWxsIHJlc3VsdCBpbiBhIHByb3RvY29sIGVycm9yLlxuXHQgKlxuXHQgKlx0VGhlIHdpZHRoIGFuZCBoZWlnaHQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby4gVXNpbmdcblx0ICpcdHN0cmljdGx5IG5lZ2F0aXZlIHZhbHVlcyBmb3Igd2lkdGggYW5kIGhlaWdodCB3aWxsIHJlc3VsdCBpbiBhXG5cdCAqXHRwcm90b2NvbCBlcnJvci5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRNYXhTaXplICh3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNywgW2ludCh3aWR0aCksIGludChoZWlnaHQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0IGEgbWluaW11bSBzaXplIGZvciB0aGUgd2luZG93LlxuXHQgKlxuXHQgKlx0VGhlIGNsaWVudCBjYW4gc3BlY2lmeSBhIG1pbmltdW0gc2l6ZSBzbyB0aGF0IHRoZSBjb21wb3NpdG9yIGRvZXNcblx0ICpcdG5vdCB0cnkgdG8gY29uZmlndXJlIHRoZSB3aW5kb3cgYmVsb3cgdGhpcyBzaXplLlxuXHQgKlxuXHQgKlx0VGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJndW1lbnRzIGFyZSBpbiB3aW5kb3cgZ2VvbWV0cnkgY29vcmRpbmF0ZXMuXG5cdCAqXHRTZWUgeGRnX3N1cmZhY2Uuc2V0X3dpbmRvd19nZW9tZXRyeS5cblx0ICpcblx0ICpcdFZhbHVlcyBzZXQgaW4gdGhpcyB3YXkgYXJlIGRvdWJsZS1idWZmZXJlZC4gVGhleSB3aWxsIGdldCBhcHBsaWVkXG5cdCAqXHRvbiB0aGUgbmV4dCBjb21taXQuXG5cdCAqXG5cdCAqXHRUaGUgY29tcG9zaXRvciBjYW4gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gYWxsb3cgb3IgZGlzYWxsb3dcblx0ICpcdGRpZmZlcmVudCBzdGF0ZXMgbGlrZSBtYXhpbWl6ZSBvciBmdWxsc2NyZWVuIGFuZCBkcmF3IGFjY3VyYXRlXG5cdCAqXHRhbmltYXRpb25zLlxuXHQgKlxuXHQgKlx0U2ltaWxhcmx5LCBhIHRpbGluZyB3aW5kb3cgbWFuYWdlciBtYXkgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG9cblx0ICpcdHBsYWNlIGFuZCByZXNpemUgY2xpZW50IHdpbmRvd3MgaW4gYSBtb3JlIGVmZmVjdGl2ZSB3YXkuXG5cdCAqXG5cdCAqXHRUaGUgY2xpZW50IHNob3VsZCBub3QgcmVseSBvbiB0aGUgY29tcG9zaXRvciB0byBvYmV5IHRoZSBtaW5pbXVtXG5cdCAqXHRzaXplLiBUaGUgY29tcG9zaXRvciBtYXkgZGVjaWRlIHRvIGlnbm9yZSB0aGUgdmFsdWVzIHNldCBieSB0aGVcblx0ICpcdGNsaWVudCBhbmQgcmVxdWVzdCBhIHNtYWxsZXIgc2l6ZS5cblx0ICpcblx0ICpcdElmIG5ldmVyIHNldCwgb3IgYSB2YWx1ZSBvZiB6ZXJvIGluIHRoZSByZXF1ZXN0LCBtZWFucyB0aGF0IHRoZVxuXHQgKlx0Y2xpZW50IGhhcyBubyBleHBlY3RlZCBtaW5pbXVtIHNpemUgaW4gdGhlIGdpdmVuIGRpbWVuc2lvbi5cblx0ICpcdEFzIGEgcmVzdWx0LCBhIGNsaWVudCB3aXNoaW5nIHRvIHJlc2V0IHRoZSBtaW5pbXVtIHNpemVcblx0ICpcdHRvIGFuIHVuc3BlY2lmaWVkIHN0YXRlIGNhbiB1c2UgemVybyBmb3Igd2lkdGggYW5kIGhlaWdodCBpbiB0aGVcblx0ICpcdHJlcXVlc3QuXG5cdCAqXG5cdCAqXHRSZXF1ZXN0aW5nIGEgbWluaW11bSBzaXplIHRvIGJlIGxhcmdlciB0aGFuIHRoZSBtYXhpbXVtIHNpemUgb2Zcblx0ICpcdGEgc3VyZmFjZSBpcyBpbGxlZ2FsIGFuZCB3aWxsIHJlc3VsdCBpbiBhIHByb3RvY29sIGVycm9yLlxuXHQgKlxuXHQgKlx0VGhlIHdpZHRoIGFuZCBoZWlnaHQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby4gVXNpbmdcblx0ICpcdHN0cmljdGx5IG5lZ2F0aXZlIHZhbHVlcyBmb3Igd2lkdGggYW5kIGhlaWdodCB3aWxsIHJlc3VsdCBpbiBhXG5cdCAqXHRwcm90b2NvbCBlcnJvci5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRNaW5TaXplICh3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgOCwgW2ludCh3aWR0aCksIGludChoZWlnaHQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0TWF4aW1pemUgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRBZnRlciByZXF1ZXN0aW5nIHRoYXQgdGhlIHN1cmZhY2Ugc2hvdWxkIGJlIG1heGltaXplZCwgdGhlIGNvbXBvc2l0b3Jcblx0ICpcdHdpbGwgcmVzcG9uZCBieSBlbWl0dGluZyBhIGNvbmZpZ3VyZSBldmVudCB3aXRoIHRoZSBcIm1heGltaXplZFwiIHN0YXRlXG5cdCAqXHRhbmQgdGhlIHJlcXVpcmVkIHdpbmRvdyBnZW9tZXRyeS4gVGhlIGNsaWVudCBzaG91bGQgdGhlbiB1cGRhdGUgaXRzXG5cdCAqXHRjb250ZW50LCBkcmF3aW5nIGl0IGluIGEgbWF4aW1pemVkIHN0YXRlLCBpLmUuIHdpdGhvdXQgc2hhZG93IG9yIG90aGVyXG5cdCAqXHRkZWNvcmF0aW9uIG91dHNpZGUgb2YgdGhlIHdpbmRvdyBnZW9tZXRyeS4gVGhlIGNsaWVudCBtdXN0IGFsc29cblx0ICpcdGFja25vd2xlZGdlIHRoZSBjb25maWd1cmUgd2hlbiBjb21taXR0aW5nIHRoZSBuZXcgY29udGVudCAoc2VlXG5cdCAqXHRhY2tfY29uZmlndXJlKS5cblx0ICpcblx0ICpcdEl0IGlzIHVwIHRvIHRoZSBjb21wb3NpdG9yIHRvIGRlY2lkZSBob3cgYW5kIHdoZXJlIHRvIG1heGltaXplIHRoZVxuXHQgKlx0c3VyZmFjZSwgZm9yIGV4YW1wbGUgd2hpY2ggb3V0cHV0IGFuZCB3aGF0IHJlZ2lvbiBvZiB0aGUgc2NyZWVuIHNob3VsZFxuXHQgKlx0YmUgdXNlZC5cblx0ICpcblx0ICpcdElmIHRoZSBzdXJmYWNlIHdhcyBhbHJlYWR5IG1heGltaXplZCwgdGhlIGNvbXBvc2l0b3Igd2lsbCBzdGlsbCBlbWl0XG5cdCAqXHRhIGNvbmZpZ3VyZSBldmVudCB3aXRoIHRoZSBcIm1heGltaXplZFwiIHN0YXRlLlxuXHQgKlxuXHQgKlx0SWYgdGhlIHN1cmZhY2UgaXMgaW4gYSBmdWxsc2NyZWVuIHN0YXRlLCB0aGlzIHJlcXVlc3QgaGFzIG5vIGRpcmVjdFxuXHQgKlx0ZWZmZWN0LiBJdCB3aWxsIGFsdGVyIHRoZSBzdGF0ZSB0aGUgc3VyZmFjZSBpcyByZXR1cm5lZCB0byB3aGVuXG5cdCAqXHR1bm1heGltaXplZCBpZiBub3Qgb3ZlcnJpZGRlbiBieSB0aGUgY29tcG9zaXRvci5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldE1heGltaXplZCAoKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgOSwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFVubWF4aW1pemUgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRBZnRlciByZXF1ZXN0aW5nIHRoYXQgdGhlIHN1cmZhY2Ugc2hvdWxkIGJlIHVubWF4aW1pemVkLCB0aGUgY29tcG9zaXRvclxuXHQgKlx0d2lsbCByZXNwb25kIGJ5IGVtaXR0aW5nIGEgY29uZmlndXJlIGV2ZW50IHdpdGhvdXQgdGhlIFwibWF4aW1pemVkXCJcblx0ICpcdHN0YXRlLiBJZiBhdmFpbGFibGUsIHRoZSBjb21wb3NpdG9yIHdpbGwgaW5jbHVkZSB0aGUgd2luZG93IGdlb21ldHJ5XG5cdCAqXHRkaW1lbnNpb25zIHRoZSB3aW5kb3cgaGFkIHByaW9yIHRvIGJlaW5nIG1heGltaXplZCBpbiB0aGUgY29uZmlndXJlXG5cdCAqXHRldmVudC4gVGhlIGNsaWVudCBtdXN0IHRoZW4gdXBkYXRlIGl0cyBjb250ZW50LCBkcmF3aW5nIGl0IGluIGFcblx0ICpcdHJlZ3VsYXIgc3RhdGUsIGkuZS4gcG90ZW50aWFsbHkgd2l0aCBzaGFkb3csIGV0Yy4gVGhlIGNsaWVudCBtdXN0IGFsc29cblx0ICpcdGFja25vd2xlZGdlIHRoZSBjb25maWd1cmUgd2hlbiBjb21taXR0aW5nIHRoZSBuZXcgY29udGVudCAoc2VlXG5cdCAqXHRhY2tfY29uZmlndXJlKS5cblx0ICpcblx0ICpcdEl0IGlzIHVwIHRvIHRoZSBjb21wb3NpdG9yIHRvIHBvc2l0aW9uIHRoZSBzdXJmYWNlIGFmdGVyIGl0IHdhc1xuXHQgKlx0dW5tYXhpbWl6ZWQ7IHVzdWFsbHkgdGhlIHBvc2l0aW9uIHRoZSBzdXJmYWNlIGhhZCBiZWZvcmUgbWF4aW1pemluZywgaWZcblx0ICpcdGFwcGxpY2FibGUuXG5cdCAqXG5cdCAqXHRJZiB0aGUgc3VyZmFjZSB3YXMgYWxyZWFkeSBub3QgbWF4aW1pemVkLCB0aGUgY29tcG9zaXRvciB3aWxsIHN0aWxsXG5cdCAqXHRlbWl0IGEgY29uZmlndXJlIGV2ZW50IHdpdGhvdXQgdGhlIFwibWF4aW1pemVkXCIgc3RhdGUuXG5cdCAqXG5cdCAqXHRJZiB0aGUgc3VyZmFjZSBpcyBpbiBhIGZ1bGxzY3JlZW4gc3RhdGUsIHRoaXMgcmVxdWVzdCBoYXMgbm8gZGlyZWN0XG5cdCAqXHRlZmZlY3QuIEl0IHdpbGwgYWx0ZXIgdGhlIHN0YXRlIHRoZSBzdXJmYWNlIGlzIHJldHVybmVkIHRvIHdoZW5cblx0ICpcdHVubWF4aW1pemVkIGlmIG5vdCBvdmVycmlkZGVuIGJ5IHRoZSBjb21wb3NpdG9yLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0dW5zZXRNYXhpbWl6ZWQgKCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0TWFrZSB0aGUgc3VyZmFjZSBmdWxsc2NyZWVuLlxuXHQgKlxuXHQgKlx0QWZ0ZXIgcmVxdWVzdGluZyB0aGF0IHRoZSBzdXJmYWNlIHNob3VsZCBiZSBmdWxsc2NyZWVuZWQsIHRoZVxuXHQgKlx0Y29tcG9zaXRvciB3aWxsIHJlc3BvbmQgYnkgZW1pdHRpbmcgYSBjb25maWd1cmUgZXZlbnQgd2l0aCB0aGVcblx0ICpcdFwiZnVsbHNjcmVlblwiIHN0YXRlIGFuZCB0aGUgZnVsbHNjcmVlbiB3aW5kb3cgZ2VvbWV0cnkuIFRoZSBjbGllbnQgbXVzdFxuXHQgKlx0YWxzbyBhY2tub3dsZWRnZSB0aGUgY29uZmlndXJlIHdoZW4gY29tbWl0dGluZyB0aGUgbmV3IGNvbnRlbnQgKHNlZVxuXHQgKlx0YWNrX2NvbmZpZ3VyZSkuXG5cdCAqXG5cdCAqXHRUaGUgb3V0cHV0IHBhc3NlZCBieSB0aGUgcmVxdWVzdCBpbmRpY2F0ZXMgdGhlIGNsaWVudCdzIHByZWZlcmVuY2UgYXNcblx0ICpcdHRvIHdoaWNoIGRpc3BsYXkgaXQgc2hvdWxkIGJlIHNldCBmdWxsc2NyZWVuIG9uLiBJZiB0aGlzIHZhbHVlIGlzIE5VTEwsXG5cdCAqXHRpdCdzIHVwIHRvIHRoZSBjb21wb3NpdG9yIHRvIGNob29zZSB3aGljaCBkaXNwbGF5IHdpbGwgYmUgdXNlZCB0byBtYXBcblx0ICpcdHRoaXMgc3VyZmFjZS5cblx0ICpcblx0ICpcdElmIHRoZSBzdXJmYWNlIGRvZXNuJ3QgY292ZXIgdGhlIHdob2xlIG91dHB1dCwgdGhlIGNvbXBvc2l0b3Igd2lsbFxuXHQgKlx0cG9zaXRpb24gdGhlIHN1cmZhY2UgaW4gdGhlIGNlbnRlciBvZiB0aGUgb3V0cHV0IGFuZCBjb21wZW5zYXRlIHdpdGhcblx0ICpcdHdpdGggYm9yZGVyIGZpbGwgY292ZXJpbmcgdGhlIHJlc3Qgb2YgdGhlIG91dHB1dC4gVGhlIGNvbnRlbnQgb2YgdGhlXG5cdCAqXHRib3JkZXIgZmlsbCBpcyB1bmRlZmluZWQsIGJ1dCBzaG91bGQgYmUgYXNzdW1lZCB0byBiZSBpbiBzb21lIHdheSB0aGF0XG5cdCAqXHRhdHRlbXB0cyB0byBibGVuZCBpbnRvIHRoZSBzdXJyb3VuZGluZyBhcmVhIChlLmcuIHNvbGlkIGJsYWNrKS5cblx0ICpcblx0ICpcdElmIHRoZSBmdWxsc2NyZWVuZWQgc3VyZmFjZSBpcyBub3Qgb3BhcXVlLCB0aGUgY29tcG9zaXRvciBtdXN0IG1ha2Vcblx0ICpcdHN1cmUgdGhhdCBvdGhlciBzY3JlZW4gY29udGVudCBub3QgcGFydCBvZiB0aGUgc2FtZSBzdXJmYWNlIHRyZWUgKG1hZGVcblx0ICpcdHVwIG9mIHN1YnN1cmZhY2VzLCBwb3B1cHMgb3Igc2ltaWxhcmx5IGNvdXBsZWQgc3VyZmFjZXMpIGFyZSBub3Rcblx0ICpcdHZpc2libGUgYmVsb3cgdGhlIGZ1bGxzY3JlZW5lZCBzdXJmYWNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0gez8qfSBvdXRwdXQgIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0RnVsbHNjcmVlbiAob3V0cHV0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMTEsIFtvYmplY3RPcHRpb25hbChvdXRwdXQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0TWFrZSB0aGUgc3VyZmFjZSBubyBsb25nZXIgZnVsbHNjcmVlbi5cblx0ICpcblx0ICpcdEFmdGVyIHJlcXVlc3RpbmcgdGhhdCB0aGUgc3VyZmFjZSBzaG91bGQgYmUgdW5mdWxsc2NyZWVuZWQsIHRoZVxuXHQgKlx0Y29tcG9zaXRvciB3aWxsIHJlc3BvbmQgYnkgZW1pdHRpbmcgYSBjb25maWd1cmUgZXZlbnQgd2l0aG91dCB0aGVcblx0ICpcdFwiZnVsbHNjcmVlblwiIHN0YXRlLlxuXHQgKlxuXHQgKlx0TWFraW5nIGEgc3VyZmFjZSB1bmZ1bGxzY3JlZW4gc2V0cyBzdGF0ZXMgZm9yIHRoZSBzdXJmYWNlIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmc6XG5cdCAqXHQqIHRoZSBzdGF0ZShzKSBpdCBtYXkgaGF2ZSBoYWQgYmVmb3JlIGJlY29taW5nIGZ1bGxzY3JlZW5cblx0ICpcdCogYW55IHN0YXRlKHMpIGRlY2lkZWQgYnkgdGhlIGNvbXBvc2l0b3Jcblx0ICpcdCogYW55IHN0YXRlKHMpIHJlcXVlc3RlZCBieSB0aGUgY2xpZW50IHdoaWxlIHRoZSBzdXJmYWNlIHdhcyBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqXHRUaGUgY29tcG9zaXRvciBtYXkgaW5jbHVkZSB0aGUgcHJldmlvdXMgd2luZG93IGdlb21ldHJ5IGRpbWVuc2lvbnMgaW5cblx0ICpcdHRoZSBjb25maWd1cmUgZXZlbnQsIGlmIGFwcGxpY2FibGUuXG5cdCAqXG5cdCAqXHRUaGUgY2xpZW50IG11c3QgYWxzbyBhY2tub3dsZWRnZSB0aGUgY29uZmlndXJlIHdoZW4gY29tbWl0dGluZyB0aGUgbmV3XG5cdCAqXHRjb250ZW50IChzZWUgYWNrX2NvbmZpZ3VyZSkuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHR1bnNldEZ1bGxzY3JlZW4gKCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEyLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0UmVxdWVzdCB0aGF0IHRoZSBjb21wb3NpdG9yIG1pbmltaXplIHlvdXIgc3VyZmFjZS4gVGhlcmUgaXMgbm9cblx0ICpcdHdheSB0byBrbm93IGlmIHRoZSBzdXJmYWNlIGlzIGN1cnJlbnRseSBtaW5pbWl6ZWQsIG5vciBpcyB0aGVyZVxuXHQgKlx0YW55IHdheSB0byB1bnNldCBtaW5pbWl6YXRpb24gb24gdGhpcyBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0SWYgeW91IGFyZSBsb29raW5nIHRvIHRocm90dGxlIHJlZHJhd2luZyB3aGVuIG1pbmltaXplZCwgcGxlYXNlXG5cdCAqXHRpbnN0ZWFkIHVzZSB0aGUgd2xfc3VyZmFjZS5mcmFtZSBldmVudCBmb3IgdGhpcywgYXMgdGhpcyB3aWxsXG5cdCAqXHRhbHNvIHdvcmsgd2l0aCBsaXZlIHByZXZpZXdzIG9uIHdpbmRvd3MgaW4gQWx0LVRhYiwgRXhwb3NlIG9yXG5cdCAqXHRzaW1pbGFyIGNvbXBvc2l0b3IgZmVhdHVyZXMuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRNaW5pbWl6ZWQgKCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEzLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtYZGdUb3BsZXZlbEV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmNvbmZpZ3VyZShpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBhKG1lc3NhZ2UsIGZhbHNlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuY2xvc2UoKVxuXHR9XG5cbn1cblhkZ1RvcGxldmVsUHJveHkucHJvdG9jb2xOYW1lID0gJ3hkZ190b3BsZXZlbCdcblxuWGRnVG9wbGV2ZWxQcm94eS5SZXNpemVFZGdlID0ge1xuICAvKipcbiAgICogXG4gICAqL1xuICBub25lOiAwLFxuICAvKipcbiAgICogXG4gICAqL1xuICB0b3A6IDEsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGJvdHRvbTogMixcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbGVmdDogNCxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgdG9wTGVmdDogNSxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgYm90dG9tTGVmdDogNixcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcmlnaHQ6IDgsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHRvcFJpZ2h0OiA5LFxuICAvKipcbiAgICogXG4gICAqL1xuICBib3R0b21SaWdodDogMTBcbn1cblxuWGRnVG9wbGV2ZWxQcm94eS5TdGF0ZSA9IHtcbiAgLyoqXG4gICAqIHRoZSBzdXJmYWNlIGlzIG1heGltaXplZFxuICAgKi9cbiAgbWF4aW1pemVkOiAxLFxuICAvKipcbiAgICogdGhlIHN1cmZhY2UgaXMgZnVsbHNjcmVlblxuICAgKi9cbiAgZnVsbHNjcmVlbjogMixcbiAgLyoqXG4gICAqIHRoZSBzdXJmYWNlIGlzIGJlaW5nIHJlc2l6ZWRcbiAgICovXG4gIHJlc2l6aW5nOiAzLFxuICAvKipcbiAgICogdGhlIHN1cmZhY2UgaXMgbm93IGFjdGl2YXRlZFxuICAgKi9cbiAgYWN0aXZhdGVkOiA0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFhkZ1RvcGxldmVsUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMyBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgUmFmYWVsIEFudG9nbm9sbGlcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgSmFzcGVyIFN0LiBQaWVycmVcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTMgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgU2Ftc3VuZyBFbGVjdHJvbmljcyBDby4sIEx0ZFxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBSZWQgSGF0IEluYy5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogICAgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogICAgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogICAgdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiAgICBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGUgbmV4dFxuICogICAgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZVxuICogICAgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqICAgIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogICAgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYZGdXbUJhc2VFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIHBpbmcgZXZlbnQgYXNrcyB0aGUgY2xpZW50IGlmIGl0J3Mgc3RpbGwgYWxpdmUuIFBhc3MgdGhlXG5cdCAqXHRzZXJpYWwgc3BlY2lmaWVkIGluIHRoZSBldmVudCBiYWNrIHRvIHRoZSBjb21wb3NpdG9yIGJ5IHNlbmRpbmdcblx0ICpcdGEgXCJwb25nXCIgcmVxdWVzdCBiYWNrIHdpdGggdGhlIHNwZWNpZmllZCBzZXJpYWwuIFNlZSB4ZGdfd21fYmFzZS5waW5nLlxuXHQgKlxuXHQgKlx0Q29tcG9zaXRvcnMgY2FuIHVzZSB0aGlzIHRvIGRldGVybWluZSBpZiB0aGUgY2xpZW50IGlzIHN0aWxsXG5cdCAqXHRhbGl2ZS4gSXQncyB1bnNwZWNpZmllZCB3aGF0IHdpbGwgaGFwcGVuIGlmIHRoZSBjbGllbnQgZG9lc24ndFxuXHQgKlx0cmVzcG9uZCB0byB0aGUgcGluZyByZXF1ZXN0LCBvciBpbiB3aGF0IHRpbWVmcmFtZS4gQ2xpZW50cyBzaG91bGRcblx0ICpcdHRyeSB0byByZXNwb25kIGluIGEgcmVhc29uYWJsZSBhbW91bnQgb2YgdGltZS5cblx0ICpcblx0ICpcdEEgY29tcG9zaXRvciBpcyBmcmVlIHRvIHBpbmcgaW4gYW55IHdheSBpdCB3YW50cywgYnV0IGEgY2xpZW50IG11c3Rcblx0ICpcdGFsd2F5cyByZXNwb25kIHRvIGFueSB4ZGdfd21fYmFzZSBvYmplY3QgaXQgY3JlYXRlZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBwYXNzIHRoaXMgdG8gdGhlIHBvbmcgcmVxdWVzdCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHBpbmcoc2VyaWFsKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTMgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMyAgICAgIFJhZmFlbCBBbnRvZ25vbGxpXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMyAgICAgIEphc3BlciBTdC4gUGllcnJlXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDEzIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFNhbXN1bmcgRWxlY3Ryb25pY3MgQ28uLCBMdGRcbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgUmVkIEhhdCBJbmMuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqICAgIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqICAgIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqICAgIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogICAgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiAgICBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlIG5leHRcbiAqICAgIHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGVcbiAqICAgIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiAgICBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqICAgIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmltcG9ydCBYZGdQb3NpdGlvbmVyUHJveHkgZnJvbSAnLi9YZGdQb3NpdGlvbmVyUHJveHknXG5pbXBvcnQgWGRnU3VyZmFjZVByb3h5IGZyb20gJy4vWGRnU3VyZmFjZVByb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoZSB4ZGdfd21fYmFzZSBpbnRlcmZhY2UgaXMgZXhwb3NlZCBhcyBhIGdsb2JhbCBvYmplY3QgZW5hYmxpbmcgY2xpZW50c1xuICogICAgICB0byB0dXJuIHRoZWlyIHdsX3N1cmZhY2VzIGludG8gd2luZG93cyBpbiBhIGRlc2t0b3AgZW52aXJvbm1lbnQuIEl0XG4gKiAgICAgIGRlZmluZXMgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdHkgbmVlZGVkIGZvciBjbGllbnRzIGFuZCB0aGUgY29tcG9zaXRvciB0b1xuICogICAgICBjcmVhdGUgd2luZG93cyB0aGF0IGNhbiBiZSBkcmFnZ2VkLCByZXNpemVkLCBtYXhpbWl6ZWQsIGV0YywgYXMgd2VsbCBhc1xuICogICAgICBjcmVhdGluZyB0cmFuc2llbnQgd2luZG93cyBzdWNoIGFzIHBvcHVwIG1lbnVzLlxuICogICAgXG4gKi9cbmNsYXNzIFhkZ1dtQmFzZVByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0RGVzdHJveSB0aGlzIHhkZ193bV9iYXNlIG9iamVjdC5cblx0ICpcblx0ICpcdERlc3Ryb3lpbmcgYSBib3VuZCB4ZGdfd21fYmFzZSBvYmplY3Qgd2hpbGUgdGhlcmUgYXJlIHN1cmZhY2VzXG5cdCAqXHRzdGlsbCBhbGl2ZSBjcmVhdGVkIGJ5IHRoaXMgeGRnX3dtX2Jhc2Ugb2JqZWN0IGluc3RhbmNlIGlzIGlsbGVnYWxcblx0ICpcdGFuZCB3aWxsIHJlc3VsdCBpbiBhIHByb3RvY29sIGVycm9yLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGVzdHJveSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdENyZWF0ZSBhIHBvc2l0aW9uZXIgb2JqZWN0LiBBIHBvc2l0aW9uZXIgb2JqZWN0IGlzIHVzZWQgdG8gcG9zaXRpb25cblx0ICpcdHN1cmZhY2VzIHJlbGF0aXZlIHRvIHNvbWUgcGFyZW50IHN1cmZhY2UuIFNlZSB0aGUgaW50ZXJmYWNlIGRlc2NyaXB0aW9uXG5cdCAqXHRhbmQgeGRnX3N1cmZhY2UuZ2V0X3BvcHVwIGZvciBkZXRhaWxzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtYZGdQb3NpdGlvbmVyUHJveHl9ICBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNyZWF0ZVBvc2l0aW9uZXIgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDEsIFhkZ1Bvc2l0aW9uZXJQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBjcmVhdGVzIGFuIHhkZ19zdXJmYWNlIGZvciB0aGUgZ2l2ZW4gc3VyZmFjZS4gV2hpbGUgeGRnX3N1cmZhY2Vcblx0ICpcdGl0c2VsZiBpcyBub3QgYSByb2xlLCB0aGUgY29ycmVzcG9uZGluZyBzdXJmYWNlIG1heSBvbmx5IGJlIGFzc2lnbmVkXG5cdCAqXHRhIHJvbGUgZXh0ZW5kaW5nIHhkZ19zdXJmYWNlLCBzdWNoIGFzIHhkZ190b3BsZXZlbCBvciB4ZGdfcG9wdXAuXG5cdCAqXG5cdCAqXHRUaGlzIGNyZWF0ZXMgYW4geGRnX3N1cmZhY2UgZm9yIHRoZSBnaXZlbiBzdXJmYWNlLiBBbiB4ZGdfc3VyZmFjZSBpc1xuXHQgKlx0dXNlZCBhcyBiYXNpcyB0byBkZWZpbmUgYSByb2xlIHRvIGEgZ2l2ZW4gc3VyZmFjZSwgc3VjaCBhcyB4ZGdfdG9wbGV2ZWxcblx0ICpcdG9yIHhkZ19wb3B1cC4gSXQgYWxzbyBtYW5hZ2VzIGZ1bmN0aW9uYWxpdHkgc2hhcmVkIGJldHdlZW4geGRnX3N1cmZhY2Vcblx0ICpcdGJhc2VkIHN1cmZhY2Ugcm9sZXMuXG5cdCAqXG5cdCAqXHRTZWUgdGhlIGRvY3VtZW50YXRpb24gb2YgeGRnX3N1cmZhY2UgZm9yIG1vcmUgZGV0YWlscyBhYm91dCB3aGF0IGFuXG5cdCAqXHR4ZGdfc3VyZmFjZSBpcyBhbmQgaG93IGl0IGlzIHVzZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc3VyZmFjZSAgXG5cdCAqIEByZXR1cm4ge1hkZ1N1cmZhY2VQcm94eX0gIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z2V0WGRnU3VyZmFjZSAoc3VyZmFjZSkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDIsIFhkZ1N1cmZhY2VQcm94eSwgW25ld09iamVjdCgpLCBvYmplY3Qoc3VyZmFjZSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRBIGNsaWVudCBtdXN0IHJlc3BvbmQgdG8gYSBwaW5nIGV2ZW50IHdpdGggYSBwb25nIHJlcXVlc3Qgb3Jcblx0ICpcdHRoZSBjbGllbnQgbWF5IGJlIGRlZW1lZCB1bnJlc3BvbnNpdmUuIFNlZSB4ZGdfd21fYmFzZS5waW5nLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBvZiB0aGUgcGluZyBldmVudCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHBvbmcgKHNlcmlhbCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDMsIFt1aW50KHNlcmlhbCldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1hkZ1dtQmFzZUV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLnBpbmcodShtZXNzYWdlKSlcblx0fVxuXG59XG5YZGdXbUJhc2VQcm94eS5wcm90b2NvbE5hbWUgPSAneGRnX3dtX2Jhc2UnXG5cblhkZ1dtQmFzZVByb3h5LkVycm9yID0ge1xuICAvKipcbiAgICogZ2l2ZW4gd2xfc3VyZmFjZSBoYXMgYW5vdGhlciByb2xlXG4gICAqL1xuICByb2xlOiAwLFxuICAvKipcbiAgICogeGRnX3dtX2Jhc2Ugd2FzIGRlc3Ryb3llZCBiZWZvcmUgY2hpbGRyZW5cbiAgICovXG4gIGRlZnVuY3RTdXJmYWNlczogMSxcbiAgLyoqXG4gICAqIHRoZSBjbGllbnQgdHJpZWQgdG8gbWFwIG9yIGRlc3Ryb3kgYSBub24tdG9wbW9zdCBwb3B1cFxuICAgKi9cbiAgbm90VGhlVG9wbW9zdFBvcHVwOiAyLFxuICAvKipcbiAgICogdGhlIGNsaWVudCBzcGVjaWZpZWQgYW4gaW52YWxpZCBwb3B1cCBwYXJlbnQgc3VyZmFjZVxuICAgKi9cbiAgaW52YWxpZFBvcHVwUGFyZW50OiAzLFxuICAvKipcbiAgICogdGhlIGNsaWVudCBwcm92aWRlZCBhbiBpbnZhbGlkIHN1cmZhY2Ugc3RhdGVcbiAgICovXG4gIGludmFsaWRTdXJmYWNlU3RhdGU6IDQsXG4gIC8qKlxuICAgKiB0aGUgY2xpZW50IHByb3ZpZGVkIGFuIGludmFsaWQgcG9zaXRpb25lclxuICAgKi9cbiAgaW52YWxpZFBvc2l0aW9uZXI6IDVcbn1cblxuZXhwb3J0IGRlZmF1bHQgWGRnV21CYXNlUHJveHlcbiIsImltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vc3JjL0Nvbm5lY3Rpb24nXG5pbXBvcnQgRml4ZWQgZnJvbSAnLi9zcmMvRml4ZWQnXG5pbXBvcnQgV2ViRkQgZnJvbSAnLi9zcmMvV2ViRkQnXG5pbXBvcnQgV2xPYmplY3QgZnJvbSAnLi9zcmMvV2xPYmplY3QnXG5cbmV4cG9ydCB7XG4gIENvbm5lY3Rpb24sXG4gIEZpeGVkLFxuICBXZWJGRCxcbiAgV2xPYmplY3Rcbn0iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDE3IEVyaWsgRGUgUmlqY2tlXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBGaXhlZCBmcm9tICcuL0ZpeGVkJ1xuXG5jbGFzcyBDb25uZWN0aW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhcmdcbiAgICogQHJldHVybnMge3t2YWx1ZTogbnVtYmVyLCB0eXBlOiAndScsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKi9cbiAgc3RhdGljIHVpbnQgKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogYXJnLFxuICAgICAgdHlwZTogJ3UnLFxuICAgICAgc2l6ZTogNCxcbiAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSB0aGlzLnZhbHVlXG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IG51bWJlciwgdHlwZTogJ3UnLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICpcbiAgICovXG4gIHN0YXRpYyB1aW50T3B0aW9uYWwgKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogYXJnLFxuICAgICAgdHlwZTogJ3UnLFxuICAgICAgc2l6ZTogNCxcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IChhcmcgPT09IG51bGwgPyAwIDogdGhpcy52YWx1ZSlcbiAgICAgICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgKz0gdGhpcy5zaXplXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7V2ViRkR9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiBudW1iZXIsIHR5cGU6ICdoJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqXG4gICAqL1xuICBzdGF0aWMgZmlsZURlc2NyaXB0b3IgKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogYXJnLFxuICAgICAgdHlwZTogJ2gnLFxuICAgICAgc2l6ZTogMCwgLy8gZmlsZSBkZXNjcmlwdG9ycyBhcmUgbm90IGFkZGVkIHRvIHRoZSBtZXNzYWdlIHNpemUgYmVjYXVzZSB0aGV5IGFyZSBzb21ld2hhdCBjb25zaWRlcmVkIG1ldGEgZGF0YS5cbiAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgd2lyZU1zZy5mZHMucHVzaCh0aGlzLnZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IG51bWJlciwgdHlwZTogJ2gnLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICpcbiAgICovXG4gIHN0YXRpYyBmaWxlRGVzY3JpcHRvck9wdGlvbmFsIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdoJyxcbiAgICAgIHNpemU6IDAsIC8vIGZpbGUgZGVzY3JpcHRvcnMgYXJlIG5vdCBhZGRlZCB0byB0aGUgbWVzc2FnZSBzaXplIGJlY2F1c2UgdGhleSBhcmUgbm90IHBhcnQgb2YgdGhlIHVuaXggc29ja2V0IG1lc3NhZ2UgYnVmZmVyLlxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIHdpcmVNc2cuZmRzLnB1c2godGhpcy52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiBudW1iZXIsIHR5cGU6ICdpJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqXG4gICAqL1xuICBzdGF0aWMgaW50IChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIHNpemU6IDQsXG4gICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIG5ldyBJbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSB0aGlzLnZhbHVlXG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IG51bWJlciwgdHlwZTogJ2knLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICpcbiAgICovXG4gIHN0YXRpYyBpbnRPcHRpb25hbCAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBhcmcsXG4gICAgICB0eXBlOiAnaScsXG4gICAgICBzaXplOiA0LFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIG5ldyBJbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSAoYXJnID09PSBudWxsID8gMCA6IHRoaXMudmFsdWUpXG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0ZpeGVkfSBhcmdcbiAgICogQHJldHVybnMge3t2YWx1ZTogRml4ZWQsIHR5cGU6ICdmJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqL1xuICBzdGF0aWMgZml4ZWQgKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogYXJnLFxuICAgICAgdHlwZTogJ2YnLFxuICAgICAgc2l6ZTogNCxcbiAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgbmV3IEludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IHRoaXMudmFsdWUuX3Jhd1xuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtGaXhlZH0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IEZpeGVkLCB0eXBlOiAnZicsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKi9cbiAgc3RhdGljIGZpeGVkT3B0aW9uYWwgKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogYXJnLFxuICAgICAgdHlwZTogJ2YnLFxuICAgICAgc2l6ZTogNCxcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICBuZXcgSW50MzJBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQsIDEpWzBdID0gKGFyZyA9PT0gbnVsbCA/IDAgOiB0aGlzLnZhbHVlLl9yYXcpXG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1Jlc291cmNlfSBhcmdcbiAgICogQHJldHVybnMge3t2YWx1ZTogUmVzb3VyY2UsIHR5cGU6ICdvJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqXG4gICAqL1xuICBzdGF0aWMgb2JqZWN0IChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdvJyxcbiAgICAgIHNpemU6IDQsXG4gICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIG5ldyBVaW50MzJBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQsIDEpWzBdID0gdGhpcy52YWx1ZS5pZFxuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtSZXNvdXJjZX0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IFJlc291cmNlLCB0eXBlOiAnbycsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKlxuICAgKi9cbiAgc3RhdGljIG9iamVjdE9wdGlvbmFsIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdvJyxcbiAgICAgIHNpemU6IDQsXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSAoYXJnID09PSBudWxsID8gMCA6IHRoaXMudmFsdWUuaWQpXG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiBudW1iZXIsIHR5cGU6ICduJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqL1xuICBzdGF0aWMgbmV3T2JqZWN0ICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IDAsIC8vIGlkIGZpbGxlZCBpbiBieSBfbWFyc2hhbGxDb25zdHJ1Y3RvclxuICAgICAgdHlwZTogJ24nLFxuICAgICAgc2l6ZTogNCxcbiAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IHRoaXMudmFsdWVcbiAgICAgICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgKz0gdGhpcy5zaXplXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcmdcbiAgICogQHJldHVybnMge3t2YWx1ZTogc3RyaW5nLCB0eXBlOiAncycsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKlxuICAgKi9cbiAgc3RhdGljIHN0cmluZyAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBgJHthcmd9XFwwYCxcbiAgICAgIHR5cGU6ICdzJyxcbiAgICAgIHNpemU6IDQgKyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBmYW5jeSBsb2dpYyB0byBjYWxjdWxhdGUgc2l6ZSB3aXRoIHBhZGRpbmcgdG8gYSBtdWx0aXBsZSBvZiA0IGJ5dGVzIChpbnQpLlxuICAgICAgICAvLyBsZW5ndGgrMSBmb3IgbnVsbCB0ZXJtaW5hdG9yXG4gICAgICAgIHJldHVybiAoYXJnLmxlbmd0aCArIDEgKyAzKSAmIH4zXG4gICAgICB9KSgpLFxuICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIG5ldyBVaW50MzJBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQsIDEpWzBdID0gdGhpcy52YWx1ZS5sZW5ndGhcblxuICAgICAgICBjb25zdCBzdHJMZW4gPSB0aGlzLnZhbHVlLmxlbmd0aFxuICAgICAgICBjb25zdCBidWY4ID0gbmV3IFVpbnQ4QXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICsgNCwgc3RyTGVuKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ckxlbjsgaSsrKSB7XG4gICAgICAgICAgYnVmOFtpXSA9IHRoaXMudmFsdWVbaV0uY29kZVBvaW50QXQoMClcbiAgICAgICAgfVxuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiAqLCB0eXBlOiAncycsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKlxuICAgKi9cbiAgc3RhdGljIHN0cmluZ09wdGlvbmFsIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGAke2FyZ31cXDBgLFxuICAgICAgdHlwZTogJ3MnLFxuICAgICAgc2l6ZTogNCArIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhcmcgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGZhbmN5IGxvZ2ljIHRvIGNhbGN1bGF0ZSBzaXplIHdpdGggcGFkZGluZyB0byBhIG11bHRpcGxlIG9mIDQgYnl0ZXMgKGludCkuXG4gICAgICAgICAgLy8gbGVuZ3RoKzEgZm9yIG51bGwgdGVybWluYXRvclxuICAgICAgICAgIHJldHVybiAoYXJnLmxlbmd0aCArIDEgKyAzKSAmIH4zXG4gICAgICAgIH1cbiAgICAgIH0pKCksXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IHRoaXMudmFsdWUubGVuZ3RoXG5cbiAgICAgICAgICBjb25zdCBzdHJMZW4gPSB0aGlzLnZhbHVlLmxlbmd0aFxuICAgICAgICAgIGNvbnN0IGJ1ZjggPSBuZXcgVWludDhBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQgKyA0LCBzdHJMZW4pXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJMZW47IGkrKykge1xuICAgICAgICAgICAgYnVmOFtpXSA9IHRoaXMudmFsdWVbaV0uY29kZVBvaW50QXQoMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgKz0gdGhpcy5zaXplXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7VHlwZWRBcnJheX0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6ICosIHR5cGU6ICdhJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqXG4gICAqL1xuICBzdGF0aWMgYXJyYXkgKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogYXJnLFxuICAgICAgdHlwZTogJ2EnLFxuICAgICAgc2l6ZTogNCArIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGZhbmN5IGxvZ2ljIHRvIGNhbGN1bGF0ZSBzaXplIHdpdGggcGFkZGluZyB0byBhIG11bHRpcGxlIG9mIDQgYnl0ZXMgKGludCkuXG4gICAgICAgIHJldHVybiAoYXJnLmJ5dGVMZW5ndGggKyAzKSAmIH4zXG4gICAgICB9KSgpLFxuICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IHRoaXMudmFsdWUuYnl0ZUxlbmd0aFxuXG4gICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSB0aGlzLnZhbHVlLmJ5dGVMZW5ndGhcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICsgNCwgYnl0ZUxlbmd0aCkuc2V0KG5ldyBVaW50OEFycmF5KHRoaXMudmFsdWUuYnVmZmVyLCAwLCBieXRlTGVuZ3RoKSlcblxuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtUeXBlZEFycmF5fSBhcmdcbiAgICogQHJldHVybnMge3t2YWx1ZTogKiwgdHlwZTogJ2EnLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICpcbiAgICovXG4gIHN0YXRpYyBhcnJheU9wdGlvbmFsIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdhJyxcbiAgICAgIHNpemU6IDQgKyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXJnID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBmYW5jeSBsb2dpYyB0byBjYWxjdWxhdGUgc2l6ZSB3aXRoIHBhZGRpbmcgdG8gYSBtdWx0aXBsZSBvZiA0IGJ5dGVzIChpbnQpLlxuICAgICAgICAgIHJldHVybiAoYXJnLmJ5dGVMZW5ndGggKyAzKSAmIH4zXG4gICAgICAgIH1cbiAgICAgIH0pKCksXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IHRoaXMudmFsdWUuYnl0ZUxlbmd0aFxuXG4gICAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IHRoaXMudmFsdWUuYnl0ZUxlbmd0aFxuICAgICAgICAgIG5ldyBVaW50OEFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCArIDQsIGJ5dGVMZW5ndGgpLnNldChuZXcgVWludDhBcnJheSh0aGlzLnZhbHVlLmJ1ZmZlciwgMCwgYnl0ZUxlbmd0aCkpXG4gICAgICAgIH1cbiAgICAgICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgKz0gdGhpcy5zaXplXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7e2J1ZmZlcjogVWludDMyQXJyYXksIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlciwgY29uc3VtZWQ6IG51bWJlciwgc2l6ZTogbnVtYmVyfX0gbWVzc2FnZVxuICAgKiBAcGFyYW0ge251bWJlcn1jb25zdW1wdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIF9jaGVja01lc3NhZ2VTaXplIChtZXNzYWdlLCBjb25zdW1wdGlvbikge1xuICAgIGlmIChtZXNzYWdlLmNvbnN1bWVkICsgY29uc3VtcHRpb24gPiBtZXNzYWdlLnNpemUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdCB0b28gc2hvcnQuYClcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5jb25zdW1lZCArPSBjb25zdW1wdGlvblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19IG1lc3NhZ2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyB1IChtZXNzYWdlKSB7IC8vIHVuc2lnbmVkIGludGVnZXIge251bWJlcn1cbiAgICBDb25uZWN0aW9uLl9jaGVja01lc3NhZ2VTaXplKG1lc3NhZ2UsIDQpXG4gICAgcmV0dXJuIG1lc3NhZ2UuYnVmZmVyW21lc3NhZ2UuYnVmZmVyT2Zmc2V0KytdXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHt7YnVmZmVyOiBVaW50MzJBcnJheSwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyLCBjb25zdW1lZDogbnVtYmVyLCBzaXplOiBudW1iZXJ9fSBtZXNzYWdlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgaSAobWVzc2FnZSkge1xuICAgIENvbm5lY3Rpb24uX2NoZWNrTWVzc2FnZVNpemUobWVzc2FnZSwgNClcbiAgICBjb25zdCBhcmcgPSBuZXcgSW50MzJBcnJheShtZXNzYWdlLmJ1ZmZlci5idWZmZXIsIG1lc3NhZ2UuYnVmZmVyLmJ5dGVPZmZzZXQgKyAobWVzc2FnZS5idWZmZXJPZmZzZXQgKiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCksIDEpWzBdXG4gICAgbWVzc2FnZS5idWZmZXJPZmZzZXQgKz0gMVxuICAgIHJldHVybiBhcmdcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19IG1lc3NhZ2VcbiAgICogQHJldHVybnMge0ZpeGVkfVxuICAgKi9cbiAgc3RhdGljIGYgKG1lc3NhZ2UpIHtcbiAgICBDb25uZWN0aW9uLl9jaGVja01lc3NhZ2VTaXplKG1lc3NhZ2UsIDQpXG4gICAgY29uc3QgYXJnID0gbmV3IEludDMyQXJyYXkobWVzc2FnZS5idWZmZXIuYnVmZmVyLCBtZXNzYWdlLmJ1ZmZlci5ieXRlT2Zmc2V0ICsgKG1lc3NhZ2UuYnVmZmVyT2Zmc2V0ICogVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQpLCAxKVswXVxuICAgIG1lc3NhZ2UuYnVmZmVyT2Zmc2V0ICs9IDFcbiAgICByZXR1cm4gbmV3IEZpeGVkKGFyZyA+PiAwKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7e2J1ZmZlcjogVWludDMyQXJyYXksIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlciwgY29uc3VtZWQ6IG51bWJlciwgc2l6ZTogbnVtYmVyfX0gbWVzc2FnZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbmFsXG4gICAqIEBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG4gICAqIEByZXR1cm5zIHtXbE9iamVjdH1cbiAgICovXG4gIHN0YXRpYyBvIChtZXNzYWdlLCBvcHRpb25hbCwgY29ubmVjdGlvbikge1xuICAgIENvbm5lY3Rpb24uX2NoZWNrTWVzc2FnZVNpemUobWVzc2FnZSwgNClcbiAgICBjb25zdCBhcmcgPSBtZXNzYWdlLmJ1ZmZlclttZXNzYWdlLmJ1ZmZlck9mZnNldCsrXVxuICAgIGlmIChvcHRpb25hbCAmJiBhcmcgPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdsT2JqZWN0ID0gY29ubmVjdGlvbi53bE9iamVjdHNbYXJnXVxuICAgICAgaWYgKHdsT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB3bE9iamVjdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG9iamVjdCBpZCAke2FyZ31gKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19IG1lc3NhZ2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBuIChtZXNzYWdlKSB7XG4gICAgQ29ubmVjdGlvbi5fY2hlY2tNZXNzYWdlU2l6ZShtZXNzYWdlLCA0KVxuICAgIHJldHVybiBtZXNzYWdlLmJ1ZmZlclttZXNzYWdlLmJ1ZmZlck9mZnNldCsrXVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7e2J1ZmZlcjogVWludDMyQXJyYXksIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlciwgY29uc3VtZWQ6IG51bWJlciwgc2l6ZTogbnVtYmVyfX0gbWVzc2FnZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbmFsXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgcyAobWVzc2FnZSwgb3B0aW9uYWwpIHsgLy8ge1N0cmluZ31cbiAgICBDb25uZWN0aW9uLl9jaGVja01lc3NhZ2VTaXplKG1lc3NhZ2UsIDQpXG4gICAgY29uc3Qgc3RyaW5nU2l6ZSA9IG1lc3NhZ2UuYnVmZmVyW21lc3NhZ2UuYnVmZmVyT2Zmc2V0KytdXG4gICAgaWYgKG9wdGlvbmFsICYmIHN0cmluZ1NpemUgPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFsaWduZWRTaXplID0gKChzdHJpbmdTaXplICsgMykgJiB+MylcbiAgICAgIENvbm5lY3Rpb24uX2NoZWNrTWVzc2FnZVNpemUobWVzc2FnZSwgYWxpZ25lZFNpemUpXG4gICAgICAvLyBzaXplIC0xIHRvIGVsaW1pbmF0ZSBudWxsIGJ5dGVcbiAgICAgIGNvbnN0IGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UuYnVmZmVyLmJ1ZmZlciwgbWVzc2FnZS5idWZmZXIuYnl0ZU9mZnNldCArIChtZXNzYWdlLmJ1ZmZlck9mZnNldCAqIFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSwgc3RyaW5nU2l6ZSAtIDEpXG4gICAgICBtZXNzYWdlLmJ1ZmZlck9mZnNldCArPSAoYWxpZ25lZFNpemUgLyA0KVxuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uYnl0ZUFycmF5KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19IG1lc3NhZ2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25hbFxuICAgKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9XG4gICAqL1xuICBzdGF0aWMgYSAobWVzc2FnZSwgb3B0aW9uYWwpIHtcbiAgICBDb25uZWN0aW9uLl9jaGVja01lc3NhZ2VTaXplKG1lc3NhZ2UsIDQpXG4gICAgY29uc3QgYXJyYXlTaXplID0gbWVzc2FnZS5idWZmZXJbbWVzc2FnZS5idWZmZXJPZmZzZXQrK11cbiAgICBpZiAob3B0aW9uYWwgJiYgYXJyYXlTaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbGlnbmVkU2l6ZSA9ICgoYXJyYXlTaXplICsgMykgJiB+MylcbiAgICAgIENvbm5lY3Rpb24uX2NoZWNrTWVzc2FnZVNpemUobWVzc2FnZSwgYWxpZ25lZFNpemUpXG4gICAgICBjb25zdCBhcmcgPSBtZXNzYWdlLmJ1ZmZlci5idWZmZXIuc2xpY2UobWVzc2FnZS5idWZmZXIuYnl0ZU9mZnNldCArIChtZXNzYWdlLmJ1ZmZlck9mZnNldCAqIFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSwgbWVzc2FnZS5idWZmZXIuYnl0ZU9mZnNldCArIChtZXNzYWdlLmJ1ZmZlck9mZnNldCAqIFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSArIGFycmF5U2l6ZSlcbiAgICAgIG1lc3NhZ2UuYnVmZmVyT2Zmc2V0ICs9IGFsaWduZWRTaXplXG4gICAgICByZXR1cm4gYXJnXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7e2J1ZmZlcjogVWludDMyQXJyYXksIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlciwgY29uc3VtZWQ6IG51bWJlciwgc2l6ZTogbnVtYmVyfX0gbWVzc2FnZVxuICAgKiBAcmV0dXJucyB7V2ViRkR9XG4gICAqL1xuICBzdGF0aWMgaCAobWVzc2FnZSkgeyAvLyBmaWxlIGRlc2NyaXB0b3Ige251bWJlcn1cbiAgICBpZiAobWVzc2FnZS5mZHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2UuZmRzLnNoaWZ0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgZW5vdWdoIGZpbGUgZGVzY3JpcHRvcnMgaW4gbWVzc2FnZSBvYmplY3QuJylcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdC48bnVtYmVyLFdsT2JqZWN0Pn1cbiAgICAgKi9cbiAgICB0aGlzLndsT2JqZWN0cyA9IHt9XG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5PHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPn0+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3V0TWVzc2FnZXMgPSBbXVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheTx7YnVmZmVyOiBVaW50MzJBcnJheSwgZmRzOiBBcnJheTxXZWJGRD59Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2luTWVzc2FnZXMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgKiBAcGFyYW0ge251bWJlcn0gb3Bjb2RlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAqIEBwYXJhbSB7QXJyYXk8e3ZhbHVlOiAqLCB0eXBlOiBzdHJpbmcsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9Pn0gYXJnc0FycmF5XG4gICAqL1xuICBtYXJzaGFsbE1zZyAoaWQsIG9wY29kZSwgc2l6ZSwgYXJnc0FycmF5KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fVxuICAgICAqL1xuICAgIGNvbnN0IHdpcmVNc2cgPSB7XG4gICAgICBidWZmZXI6IG5ldyBBcnJheUJ1ZmZlcihzaXplKSxcbiAgICAgIGZkczogW10sXG4gICAgICBidWZmZXJPZmZzZXQ6IDBcbiAgICB9XG5cbiAgICAvLyB3cml0ZSBhY3R1YWwgd2lyZSBtZXNzYWdlXG4gICAgY29uc3QgYnVmdTMyID0gbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyKVxuICAgIGNvbnN0IGJ1ZnUxNiA9IG5ldyBVaW50MTZBcnJheSh3aXJlTXNnLmJ1ZmZlcilcbiAgICBidWZ1MzJbMF0gPSBpZFxuICAgIGJ1ZnUxNlsyXSA9IG9wY29kZVxuICAgIGJ1ZnUxNlszXSA9IHNpemVcbiAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCA9IDhcblxuICAgIC8vIHdyaXRlIGFjdHVhbCBhcmd1bWVudCB2YWx1ZSB0byBidWZmZXJcbiAgICBhcmdzQXJyYXkuZm9yRWFjaCgoYXJnKSA9PiBhcmcuX21hcnNoYWxsQXJnKHdpcmVNc2cpKVxuICAgIHRoaXMub25TZW5kKHdpcmVNc2cpXG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHJlY2VpdmVkIHdpcmUgbWVzc2FnZXMuXG4gICAqIEBwYXJhbSB7e2J1ZmZlcjogVWludDMyQXJyYXksIGZkczogQXJyYXk8V2ViRkQ+fX0gaW5jb21pbmdXaXJlTWVzc2FnZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICogQHRocm93cyBFcnJvciBJZiBhbiBpbGxlZ2FsIGNsaWVudCByZXF1ZXN0IGlzIHJlY2VpdmVkIGllLiBiYWQgbGVuZ3RoIG9yIG1pc3NpbmcgZmlsZSBkZXNjcmlwdG9yLlxuICAgKi9cbiAgYXN5bmMgbWVzc2FnZSAoaW5jb21pbmdXaXJlTWVzc2FnZXMpIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHsgcmV0dXJuIH1cblxuICAgIC8vIG1vcmUgdGhhbiBvbmUgbWVzc2FnZSBpbiBxdWV1ZSBtZWFucyB0aGUgbWVzc2FnZSBsb29wIGlzIGluIGF3YWl0LCBkb24ndCBjb25jdXJyZW50bHkgcHJvY2VzcyB0aGUgbmV3XG4gICAgLy8gbWVzc2FnZSwgaW5zdGVhZCByZXR1cm4gZWFybHkgYW5kIGxldCB0aGUgcmVzdW1lLWZyb20tYXdhaXQgcGljayB1cCB0aGUgbmV3bHkgcXVldWVkIG1lc3NhZ2UuXG4gICAgaWYgKHRoaXMuX2luTWVzc2FnZXMucHVzaChpbmNvbWluZ1dpcmVNZXNzYWdlcykgPiAxKSB7IHJldHVybiB9XG5cbiAgICB3aGlsZSAodGhpcy5faW5NZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHdpcmVNZXNzYWdlcyA9IC8qKiBAdHlwZSB7e2J1ZmZlcjogVWludDMyQXJyYXksIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlciwgY29uc3VtZWQ6IG51bWJlciwgc2l6ZTogbnVtYmVyfX0gKi90aGlzLl9pbk1lc3NhZ2VzWzBdXG4gICAgICB3aXJlTWVzc2FnZXMuYnVmZmVyT2Zmc2V0ID0gMFxuICAgICAgd2lyZU1lc3NhZ2VzLmNvbnN1bWVkID0gMFxuICAgICAgd2lyZU1lc3NhZ2VzLnNpemUgPSAwXG4gICAgICB3aGlsZSAod2lyZU1lc3NhZ2VzLmJ1ZmZlck9mZnNldCA8IHdpcmVNZXNzYWdlcy5idWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gd2lyZU1lc3NhZ2VzLmJ1ZmZlclt3aXJlTWVzc2FnZXMuYnVmZmVyT2Zmc2V0XVxuICAgICAgICBjb25zdCBzaXplT3Bjb2RlID0gd2lyZU1lc3NhZ2VzLmJ1ZmZlclt3aXJlTWVzc2FnZXMuYnVmZmVyT2Zmc2V0ICsgMV1cbiAgICAgICAgd2lyZU1lc3NhZ2VzLnNpemUgPSBzaXplT3Bjb2RlID4+PiAxNlxuICAgICAgICBjb25zdCBvcGNvZGUgPSBzaXplT3Bjb2RlICYgMHgwMDAwRkZGRlxuXG4gICAgICAgIGlmICh3aXJlTWVzc2FnZXMuc2l6ZSA+IHdpcmVNZXNzYWdlcy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBidWZmZXIgdG9vIHNtYWxsJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdsT2JqZWN0ID0gdGhpcy53bE9iamVjdHNbaWRdXG4gICAgICAgIGlmICh3bE9iamVjdCkge1xuICAgICAgICAgIHdpcmVNZXNzYWdlcy5idWZmZXJPZmZzZXQgKz0gMlxuICAgICAgICAgIHdpcmVNZXNzYWdlcy5jb25zdW1lZCA9IDhcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgd2xPYmplY3Rbb3Bjb2RlXSh3aXJlTWVzc2FnZXMpXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgXG53bE9iamVjdDogJHt3bE9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lfVske29wY29kZX1dKC4uKVxubmFtZTogJHtlLm5hbWV9IG1lc3NhZ2U6ICR7ZS5tZXNzYWdlfSB0ZXh0OiAke2UudGV4dH1cbmVycm9yIG9iamVjdCBzdGFjazogXG4ke2Uuc3RhY2t9XG5gKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgICAgICB0aHJvdyBlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmNsb3NlZCkgeyByZXR1cm4gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBvYmplY3QgJHtpZH1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pbk1lc3NhZ2VzLnNoaWZ0KClcbiAgICB9XG5cbiAgICB0aGlzLmZsdXNoKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGRvZXNuJ3QgYWN0dWFsbHkgc2VuZCB0aGUgbWVzc2FnZSwgYnV0IHF1ZXVlcyBpdCBzbyBpdCBjYW4gYmUgc2VuZCBvbiBmbHVzaC5cbiAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD59fXdpcmVNc2cgYSBzaW5nbGUgd2lyZSBtZXNzYWdlIGV2ZW50LlxuICAgKi9cbiAgb25TZW5kICh3aXJlTXNnKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7IHJldHVybiB9XG5cbiAgICB0aGlzLl9vdXRNZXNzYWdlcy5wdXNoKHdpcmVNc2cpXG4gIH1cblxuICAvKipcbiAgICogRW1wdHkgdGhlIHF1ZXVlIG9mIHdpcmUgbWVzc2FnZXMgYW5kIHNlbmQgdGhlbSB0byB0aGUgb3RoZXIgZW5kLlxuICAgKi9cbiAgZmx1c2ggKCkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkgeyByZXR1cm4gfVxuICAgIGlmICh0aGlzLl9vdXRNZXNzYWdlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIH1cblxuICAgIHRoaXMub25GbHVzaCh0aGlzLl9vdXRNZXNzYWdlcylcbiAgICB0aGlzLl9vdXRNZXNzYWdlcyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgd2hlbiB0aGlzIGNvbm5lY3Rpb24gd2lzaGVzIHRvIHNlbmQgZGF0YSB0byB0aGUgb3RoZXIgZW5kLiBUaGlzIGNhbGxiYWNrIGNhbiBiZSB1c2VkIHRvIHNlbmQgdGhlIGdpdmVuXG4gICAqIGFycmF5IGJ1ZmZlcnMgdXNpbmcgYW55IHRyYW5zcG9ydCBtZWNoYW5pc20uXG4gICAqIEBwYXJhbSB7QXJyYXk8e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+fT59d2lyZU1lc3NhZ2VzXG4gICAqL1xuICBvbkZsdXNoICh3aXJlTWVzc2FnZXMpIHt9XG5cbiAgY2xvc2UgKCkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkgeyByZXR1cm4gfVxuXG4gICAgLy8gZGVzdHJveSByZXNvdXJjZXMgaW4gZGVzY2VuZGluZyBvcmRlclxuICAgIE9iamVjdC52YWx1ZXModGhpcy53bE9iamVjdHMpLnNvcnQoKGEsIGIpID0+IGEuaWQgLSBiLmlkKS5mb3JFYWNoKCh3bE9iamVjdCkgPT4gd2xPYmplY3QuZGVzdHJveSgpKVxuXG4gICAgdGhpcy5fb3V0TWVzc2FnZXMgPSBudWxsXG4gICAgdGhpcy5faW5NZXNzYWdlcyA9IG51bGxcbiAgICB0aGlzLmNsb3NlZCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1dsT2JqZWN0fSB3bE9iamVjdFxuICAgKi9cbiAgcmVnaXN0ZXJXbE9iamVjdCAod2xPYmplY3QpIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHsgcmV0dXJuIH1cbiAgICBpZiAod2xPYmplY3QuaWQgaW4gdGhpcy53bE9iamVjdHMpIHsgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIG9iamVjdCBpZDogJHt3bE9iamVjdC5pZH0uIEFscmVhZHkgcmVnaXN0ZXJlZC5gKSB9XG4gICAgdGhpcy53bE9iamVjdHNbd2xPYmplY3QuaWRdID0gd2xPYmplY3RcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1dsT2JqZWN0fSB3bE9iamVjdFxuICAgKi9cbiAgdW5yZWdpc3RlcldsT2JqZWN0ICh3bE9iamVjdCkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkgeyByZXR1cm4gfVxuICAgIGRlbGV0ZSB0aGlzLndsT2JqZWN0c1t3bE9iamVjdC5pZF1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgMjAxNyBFcmlrIERlIFJpamNrZVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG5cbid1c2Ugc3RyaWN0J1xuXG5jbGFzcyBGaXhlZCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn1udW1iZXJcbiAgICogQHJldHVybiB7Rml4ZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UgKG51bWJlcikge1xuICAgIHJldHVybiBuZXcgRml4ZWQoKG51bWJlciAqIDI1Ni4wKSA+PiAwKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudCBmaXhlZCBhcyBhIHNpZ25lZCAyNC1iaXQgaW50ZWdlci5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGFzSW50ICgpIHtcbiAgICByZXR1cm4gKCh0aGlzLl9yYXcgLyAyNTYuMCkgPj4gMClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnQgZml4ZWQgYXMgYSBzaWduZWQgMjQtYml0IG51bWJlciB3aXRoIGFuIDgtYml0IGZyYWN0aW9uYWwgcGFydC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGFzRG91YmxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3IC8gMjU2LjBcbiAgfVxuXG4gIC8qKlxuICAgKiB1c2UgcGFyc2VGaXhlZCBpbnN0ZWFkXG4gICAqIEBwYXJhbSB7bnVtYmVyfXJhd1xuICAgKi9cbiAgY29uc3RydWN0b3IgKHJhdykge1xuICAgIHRoaXMuX3JhdyA9IHJhd1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpeGVkIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgMjAxNyBFcmlrIERlIFJpamNrZVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG5cbid1c2Ugc3RyaWN0J1xuXG5jbGFzcyBXZWJGRCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn1mZFxuICAgKiBAcGFyYW0geydJbWFnZUJpdG1hcCd8J0FycmF5QnVmZmVyJ3wnTWVzc2FnZVBvcnQnfWZkVHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ31mZERvbWFpblVVSURcbiAgICogQHBhcmFtIHtmdW5jdGlvbihXZWJGRCk6IFByb21pc2U8VHJhbnNmZXJhYmxlPn1vbkdldFRyYW5zZmVyYWJsZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKFdlYkZEKTogUHJvbWlzZTx2b2lkPn0gb25DbG9zZVxuICAgKi9cbiAgY29uc3RydWN0b3IgKGZkLCBmZFR5cGUsIGZkRG9tYWluVVVJRCwgb25HZXRUcmFuc2ZlcmFibGUsIG9uQ2xvc2UpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZmQgPSBmZFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5mZFR5cGUgPSBmZFR5cGVcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZmREb21haW5VVUlEID0gZmREb21haW5VVUlEXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKFdlYkZEKTogUHJvbWlzZTxUcmFuc2ZlcmFibGU+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25HZXRUcmFuc2ZlcmFibGUgPSBvbkdldFRyYW5zZmVyYWJsZVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbihXZWJGRCk6IFByb21pc2U8dm9pZD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNsb3NlID0gb25DbG9zZVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VHJhbnNmZXJhYmxlPn1cbiAgICovXG4gIGFzeW5jIGdldFRyYW5zZmVyYWJsZSAoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX29uR2V0VHJhbnNmZXJhYmxlKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGFzeW5jIGNsb3NlICgpIHtcbiAgICBhd2FpdCB0aGlzLl9vbkNsb3NlKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2ViRkQiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDE3IEVyaWsgRGUgUmlqY2tlXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIFdsT2JqZWN0IHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Byb21pc2U8dm9pZD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kZXN0cm95UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fZGVzdHJveVJlc29sdmVyID0gcmVzb2x2ZSlcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QXJyYXk8ZnVuY3Rpb24oUmVzb3VyY2UpOnZvaWQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGVzdHJveUxpc3RlbmVycyA9IFtdXG4gICAgdGhpcy5fZGVzdHJveVByb21pc2UudGhlbigoKSA9PiB0aGlzLl9kZXN0cm95TGlzdGVuZXJzLmZvckVhY2goZGVzdHJveUxpc3RlbmVyID0+IGRlc3Ryb3lMaXN0ZW5lcih0aGlzKSkpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kZXN0cm95UmVzb2x2ZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oUmVzb3VyY2UpOnZvaWR9ZGVzdHJveUxpc3RlbmVyXG4gICAqL1xuICBhZGREZXN0cm95TGlzdGVuZXIgKGRlc3Ryb3lMaXN0ZW5lcikge1xuICAgIHRoaXMuX2Rlc3Ryb3lMaXN0ZW5lcnMucHVzaChkZXN0cm95TGlzdGVuZXIpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtmdW5jdGlvbihSZXNvdXJjZSk6dm9pZH1kZXN0cm95TGlzdGVuZXJcbiAgICovXG4gIHJlbW92ZURlc3Ryb3lMaXN0ZW5lciAoZGVzdHJveUxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZGVzdHJveUxpc3RlbmVycyA9IHRoaXMuX2Rlc3Ryb3lMaXN0ZW5lcnMuZmlsdGVyKChpdGVtKSA9PiB7IHJldHVybiBpdGVtICE9PSBkZXN0cm95TGlzdGVuZXIgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgb25EZXN0cm95ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdHJveVByb21pc2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXbE9iamVjdCIsImltcG9ydCB7XG4gIGRpc3BsYXksXG4gIHdlYkZTLFxuICBmcmFtZSxcbiAgV2xDb21wb3NpdG9yUHJveHksXG4gIEdyV2ViU2htUHJveHksXG4gIFdsU2hlbGxQcm94eVxufSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jbGllbnQnXG5cbmNsYXNzIFNobUJ1ZmZlclBvb2wge1xuICAvKipcbiAgICogQHBhcmFtIHtHcldlYlNobVByb3h5fXdlYlNobVxuICAgKiBAcGFyYW0ge251bWJlcn1wb29sU2l6ZVxuICAgKiBAcGFyYW0ge251bWJlcn13aWR0aFxuICAgKiBAcGFyYW0ge251bWJlcn1oZWlnaHRcbiAgICogQHJldHVybiB7U2htQnVmZmVyUG9vbH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKHdlYlNobSwgcG9vbFNpemUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBhdmFpbGFibGUgPSBuZXcgQXJyYXkocG9vbFNpemUpXG4gICAgY29uc3Qgc2htQnVmZmVyUG9vbCA9IG5ldyBTaG1CdWZmZXJQb29sKGF2YWlsYWJsZSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvb2xTaXplOyBpKyspIHtcbiAgICAgIGF2YWlsYWJsZVtpXSA9IFNobUJ1ZmZlci5jcmVhdGUod2ViU2htLCB3aWR0aCwgaGVpZ2h0LCBzaG1CdWZmZXJQb29sKVxuICAgIH1cbiAgICByZXR1cm4gc2htQnVmZmVyUG9vbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKGF2YWlsYWJsZSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheTxTaG1CdWZmZXI+fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hdmFpbGFibGUgPSBhdmFpbGFibGVcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QXJyYXk8U2htQnVmZmVyPn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYnVzeSA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTaG1CdWZmZXJ9c2htQnVmZmVyXG4gICAqL1xuICBnaXZlIChzaG1CdWZmZXIpIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLl9idXN5LmluZGV4T2Yoc2htQnVmZmVyKVxuICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgdGhpcy5fYnVzeS5zcGxpY2UoaWR4LCAxKVxuICAgIH1cbiAgICB0aGlzLl9hdmFpbGFibGUucHVzaChzaG1CdWZmZXIpXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7U2htQnVmZmVyfG51bGx9XG4gICAqL1xuICB0YWtlICgpIHtcbiAgICBjb25zdCBzaG1CdWZmZXIgPSB0aGlzLl9hdmFpbGFibGUuc2hpZnQoKVxuICAgIGlmIChzaG1CdWZmZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fYnVzeS5wdXNoKHNobUJ1ZmZlcilcbiAgICAgIHJldHVybiBzaG1CdWZmZXJcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIEdyV2ViU2htQnVmZmVyRXZlbnRzXG4gKiBAaW1wbGVtZW50cyBXbEJ1ZmZlckV2ZW50c1xuICovXG5jbGFzcyBTaG1CdWZmZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtHcldlYlNobVByb3h5fXdlYlNobVxuICAgKiBAcGFyYW0ge251bWJlcn13aWR0aFxuICAgKiBAcGFyYW0ge251bWJlcn1oZWlnaHRcbiAgICogQHBhcmFtIHtTaG1CdWZmZXJQb29sfXdlYkFycmF5QnVmZmVyUG9vbFxuICAgKiBAcmV0dXJuIHtTaG1CdWZmZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlICh3ZWJTaG0sIHdpZHRoLCBoZWlnaHQsIHdlYkFycmF5QnVmZmVyUG9vbCkge1xuICAgIGNvbnN0IGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGhlaWdodCAqIHdpZHRoICogVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQpXG4gICAgY29uc3QgcGl4ZWxDb250ZW50ID0gd2ViRlMuZnJvbUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKVxuXG4gICAgY29uc3QgcHJveHkgPSB3ZWJTaG0uY3JlYXRlV2ViQXJyYXlCdWZmZXIoKVxuICAgIGNvbnN0IGJ1ZmZlclByb3h5ID0gd2ViU2htLmNyZWF0ZUJ1ZmZlcihwcm94eSwgd2lkdGgsIGhlaWdodClcblxuICAgIGNvbnN0IHNobUJ1ZmZlciA9IG5ldyBTaG1CdWZmZXIocHJveHksIGJ1ZmZlclByb3h5LCBwaXhlbENvbnRlbnQsIGFycmF5QnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCB3ZWJBcnJheUJ1ZmZlclBvb2wpXG5cbiAgICBwcm94eS5saXN0ZW5lciA9IHNobUJ1ZmZlclxuICAgIGJ1ZmZlclByb3h5Lmxpc3RlbmVyID0gc2htQnVmZmVyXG5cbiAgICByZXR1cm4gc2htQnVmZmVyXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtHcldlYlNobUJ1ZmZlclByb3h5fXByb3h5XG4gICAqIEBwYXJhbSB7V2xCdWZmZXJQcm94eX1idWZmZXJQcm94eVxuICAgKiBAcGFyYW0ge1dlYkZEfXBpeGVsQ29udGVudFxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfWFycmF5QnVmZmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfXdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfWhlaWdodFxuICAgKiBAcGFyYW0ge1NobUJ1ZmZlclBvb2x9c2htQnVmZmVyUG9vbFxuICAgKi9cbiAgY29uc3RydWN0b3IgKHByb3h5LCBidWZmZXJQcm94eSwgcGl4ZWxDb250ZW50LCBhcnJheUJ1ZmZlciwgd2lkdGgsIGhlaWdodCwgc2htQnVmZmVyUG9vbCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtHcldlYlNobUJ1ZmZlclByb3h5fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPSBwcm94eVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtXbEJ1ZmZlclByb3h5fVxuICAgICAqL1xuICAgIHRoaXMuYnVmZmVyUHJveHkgPSBidWZmZXJQcm94eVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtXZWJGRH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BpeGVsQ29udGVudCA9IHBpeGVsQ29udGVudFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheUJ1ZmZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFycmF5QnVmZmVyID0gYXJyYXlCdWZmZXJcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U2htQnVmZmVyUG9vbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NobUJ1ZmZlclBvb2wgPSBzaG1CdWZmZXJQb29sXG4gIH1cblxuICBhdHRhY2ggKCkge1xuICAgIHRoaXMucHJveHkuYXR0YWNoKHRoaXMuX3BpeGVsQ29udGVudClcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiAgICAgICAgICAgICAgICBEZXRhY2hlcyBhIHByZXZpb3VzbHkgYXR0YWNoZWQgSFRNTDUgYXJyYXkgYnVmZmVyIGZyb20gdGhlIGNvbXBvc2l0b3IgYW5kIHJldHVybnMgaXQgdG8gdGhlIGNsaWVudCBzb1xuICAgKiAgICAgICAgICAgICAgICBpdCBjYW4gYmUgcmV1c2VkIGFnYWluIGZvciB3cml0aW5nLiBBZnRlciBkZXRhY2hpbmcsIHRoZSBhcnJheSBidWZmZXIgb3duZXJzaGlwIGlzIHBhc3NlZCBmcm9tXG4gICAqICAgICAgICAgICAgICAgIHRoZSBjb21wb3NpdG9yIG1haW4gdGhyZWFkIGJhY2sgdG8gdGhlIGNsaWVudC5cbiAgICpcbiAgICpcbiAgICogQHBhcmFtIHtXZWJGRH0gY29udGVudHMgQW4gSFRNTDUgYXJyYXkgYnVmZmVyLCBkZXRhY2hlZCBmcm9tIHRoZSBjb21wb3NpdG9yXG4gICAqXG4gICAqIEBzaW5jZSAxXG4gICAqXG4gICAqL1xuICBhc3luYyBkZXRhY2ggKGNvbnRlbnRzKSB7XG4gICAgdGhpcy5fcGl4ZWxDb250ZW50ID0gY29udGVudHNcbiAgICB0aGlzLmFycmF5QnVmZmVyID0gLyoqIEB0eXBlIHtBcnJheUJ1ZmZlcn0gKi8gYXdhaXQgY29udGVudHMuZ2V0VHJhbnNmZXJhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiAgU2VudCB3aGVuIHRoaXMgd2xfYnVmZmVyIGlzIG5vIGxvbmdlciB1c2VkIGJ5IHRoZSBjb21wb3NpdG9yLlxuICAgKiAgVGhlIGNsaWVudCBpcyBub3cgZnJlZSB0byByZXVzZSBvciBkZXN0cm95IHRoaXMgYnVmZmVyIGFuZCBpdHNcbiAgICogIGJhY2tpbmcgc3RvcmFnZS5cbiAgICpcbiAgICogIElmIGEgY2xpZW50IHJlY2VpdmVzIGEgcmVsZWFzZSBldmVudCBiZWZvcmUgdGhlIGZyYW1lIGNhbGxiYWNrXG4gICAqICByZXF1ZXN0ZWQgaW4gdGhlIHNhbWUgd2xfc3VyZmFjZS5jb21taXQgdGhhdCBhdHRhY2hlcyB0aGlzXG4gICAqICB3bF9idWZmZXIgdG8gYSBzdXJmYWNlLCB0aGVuIHRoZSBjbGllbnQgaXMgaW1tZWRpYXRlbHkgZnJlZSB0b1xuICAgKiAgcmV1c2UgdGhlIGJ1ZmZlciBhbmQgaXRzIGJhY2tpbmcgc3RvcmFnZSwgYW5kIGRvZXMgbm90IG5lZWQgYVxuICAgKiAgc2Vjb25kIGJ1ZmZlciBmb3IgdGhlIG5leHQgc3VyZmFjZSBjb250ZW50IHVwZGF0ZS4gVHlwaWNhbGx5XG4gICAqICB0aGlzIGlzIHBvc3NpYmxlLCB3aGVuIHRoZSBjb21wb3NpdG9yIG1haW50YWlucyBhIGNvcHkgb2YgdGhlXG4gICAqICB3bF9zdXJmYWNlIGNvbnRlbnRzLCBlLmcuIGFzIGEgR0wgdGV4dHVyZS4gVGhpcyBpcyBhbiBpbXBvcnRhbnRcbiAgICogIG9wdGltaXphdGlvbiBmb3IgR0woRVMpIGNvbXBvc2l0b3JzIHdpdGggd2xfc2htIGNsaWVudHMuXG4gICAqXG4gICAqXG4gICAqXG4gICAqIEBzaW5jZSAxXG4gICAqXG4gICAqL1xuICByZWxlYXNlICgpIHtcbiAgICB0aGlzLl9zaG1CdWZmZXJQb29sLmdpdmUodGhpcylcbiAgfVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIFdsUmVnaXN0cnlFdmVudHNcbiAqIEBpbXBsZW1lbnRzIFdsU2hlbGxTdXJmYWNlRXZlbnRzXG4gKi9cbmNsYXNzIFdpbmRvdyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn13aWR0aFxuICAgKiBAcGFyYW0ge251bWJlcn1oZWlnaHRcbiAgICogQHJldHVybiB7V2luZG93fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gZGlzcGxheS5nZXRSZWdpc3RyeSgpXG4gICAgY29uc3Qgd2luZG93ID0gbmV3IFdpbmRvdyhyZWdpc3RyeSwgd2lkdGgsIGhlaWdodClcbiAgICByZWdpc3RyeS5saXN0ZW5lciA9IHdpbmRvd1xuICAgIHJldHVybiB3aW5kb3dcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1dsUmVnaXN0cnlQcm94eX1yZWdpc3RyeVxuICAgKiBAcGFyYW0ge251bWJlcn13aWR0aFxuICAgKiBAcGFyYW0ge251bWJlcn1oZWlnaHRcbiAgICovXG4gIGNvbnN0cnVjdG9yIChyZWdpc3RyeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtXbFJlZ2lzdHJ5UHJveHl9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMuX3JlZ2lzdHJ5ID0gcmVnaXN0cnlcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U2htQnVmZmVyUG9vbHxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2htQnVmZmVyUG9vbCA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7V2xDb21wb3NpdG9yUHJveHl8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvc2l0b3IgPSBudWxsXG4gICAgLyoqXG4gICAgICogQHR5cGUge0dyV2ViU2htUHJveHl8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3dlYlNobSA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7V2xTaGVsbFByb3h5fG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zaGVsbCA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7V2xTdXJmYWNlUHJveHl8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N1cmZhY2UgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogIE5vdGlmeSB0aGUgY2xpZW50IG9mIGdsb2JhbCBvYmplY3RzLlxuICAgKlxuICAgKiAgVGhlIGV2ZW50IG5vdGlmaWVzIHRoZSBjbGllbnQgdGhhdCBhIGdsb2JhbCBvYmplY3Qgd2l0aFxuICAgKiAgdGhlIGdpdmVuIG5hbWUgaXMgbm93IGF2YWlsYWJsZSwgYW5kIGl0IGltcGxlbWVudHMgdGhlXG4gICAqICBnaXZlbiB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBpbnRlcmZhY2UuXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuYW1lIG51bWVyaWMgbmFtZSBvZiB0aGUgZ2xvYmFsIG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW50ZXJmYWNlXyBpbnRlcmZhY2UgaW1wbGVtZW50ZWQgYnkgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdmVyc2lvbiBpbnRlcmZhY2UgdmVyc2lvblxuICAgKlxuICAgKiBAc2luY2UgMVxuICAgKlxuICAgKi9cbiAgZ2xvYmFsIChuYW1lLCBpbnRlcmZhY2VfLCB2ZXJzaW9uKSB7XG4gICAgaWYgKGludGVyZmFjZV8gPT09IFdsQ29tcG9zaXRvclByb3h5LnByb3RvY29sTmFtZSkge1xuICAgICAgdGhpcy5fY29tcG9zaXRvciA9IHRoaXMuX3JlZ2lzdHJ5LmJpbmQobmFtZSwgaW50ZXJmYWNlXywgV2xDb21wb3NpdG9yUHJveHksIHZlcnNpb24pXG4gICAgICB0aGlzLl9zdXJmYWNlID0gdGhpcy5fY29tcG9zaXRvci5jcmVhdGVTdXJmYWNlKClcbiAgICAgIHRoaXMuX29uRnJhbWUgPSBmcmFtZSh0aGlzLl9zdXJmYWNlKVxuICAgIH1cblxuICAgIGlmIChpbnRlcmZhY2VfID09PSBHcldlYlNobVByb3h5LnByb3RvY29sTmFtZSkge1xuICAgICAgdGhpcy5fd2ViU2htID0gdGhpcy5fcmVnaXN0cnkuYmluZChuYW1lLCBpbnRlcmZhY2VfLCBHcldlYlNobVByb3h5LCB2ZXJzaW9uKVxuICAgICAgdGhpcy5fd2ViU2htLmxpc3RlbmVyID0gdGhpc1xuXG4gICAgICB0aGlzLl9zaG1CdWZmZXJQb29sID0gU2htQnVmZmVyUG9vbC5jcmVhdGUodGhpcy5fd2ViU2htLCAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJmYWNlXyA9PT0gV2xTaGVsbFByb3h5LnByb3RvY29sTmFtZSkge1xuICAgICAgdGhpcy5fc2hlbGwgPSB0aGlzLl9yZWdpc3RyeS5iaW5kKG5hbWUsIGludGVyZmFjZV8sIFdsU2hlbGxQcm94eSwgdmVyc2lvbilcbiAgICB9XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLl9zaGVsbFN1cmZhY2UgPSB0aGlzLl9zaGVsbC5nZXRTaGVsbFN1cmZhY2UodGhpcy5fc3VyZmFjZSlcbiAgICB0aGlzLl9zaGVsbFN1cmZhY2UubGlzdGVuZXIgPSB0aGlzXG4gICAgdGhpcy5fc2hlbGxTdXJmYWNlLnNldFRvcGxldmVsKClcbiAgICB0aGlzLl9zaGVsbFN1cmZhY2Uuc2V0VGl0bGUoJ1NpbXBsZSBXZWIgU2htJylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1NobUJ1ZmZlcn1zaG1CdWZmZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9dGltZXN0YW1wXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcGFpbnRQaXhlbHMgKHNobUJ1ZmZlciwgdGltZXN0YW1wKSB7XG4gICAgY29uc3QgaGFsZmggPSBzaG1CdWZmZXIud2lkdGggPj4gMVxuICAgIGNvbnN0IGhhbGZ3ID0gc2htQnVmZmVyLmhlaWdodCA+PiAxXG4gICAgbGV0IGlyXG4gICAgbGV0IG9yXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgVWludDMyQXJyYXkoc2htQnVmZmVyLmFycmF5QnVmZmVyKVxuXG4gICAgLyogc3F1YXJlZCByYWRpaSB0aHJlc2hvbGRzICovXG4gICAgb3IgPSAoaGFsZncgPCBoYWxmaCA/IGhhbGZ3IDogaGFsZmgpIC0gOFxuICAgIGlyID0gb3IgLSAzMlxuICAgIG9yID0gb3IgKiBvclxuICAgIGlyID0gaXIgKiBpclxuXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNobUJ1ZmZlci5oZWlnaHQ7IHkrKykge1xuICAgICAgY29uc3QgeTIgPSAoeSAtIGhhbGZoKSAqICh5IC0gaGFsZmgpXG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2htQnVmZmVyLndpZHRoOyB4KyspIHtcbiAgICAgICAgbGV0IHZcbiAgICAgICAgbGV0IHcgPSAweGZmMDAwMDAwXG5cbiAgICAgICAgLyogc3F1YXJlZCBkaXN0YW5jZSBmcm9tIGNlbnRlciAqL1xuICAgICAgICBjb25zdCByMiA9ICh4IC0gaGFsZncpICogKHggLSBoYWxmdykgKyB5MlxuXG4gICAgICAgIGlmIChyMiA8IGlyKSB7XG4gICAgICAgICAgdiA9ICgocjIgPj4gNSkgKyAodGltZXN0YW1wID4+IDYpKSAqIDB4MDA4MDQwMVxuICAgICAgICB9IGVsc2UgaWYgKHIyIDwgb3IpIHtcbiAgICAgICAgICB2ID0gKHkgKyAodGltZXN0YW1wID4+IDUpKSAqIDB4MDA4MDQwMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHYgPSAoeCArICh0aW1lc3RhbXAgPj4gNCkpICogMHgwMDgwNDAxXG4gICAgICAgIH1cbiAgICAgICAgLy8gQVJHQiA9PiBBQkdSIChSR0JBIExFKVxuICAgICAgICB3IHw9ICgodiAmIDB4MDBmZjAwMDApID4+IDE2KSAvLyBSXG4gICAgICAgIHcgfD0gKCh2ICYgMHgwMDAwZmYwMCkpIC8vIEdcbiAgICAgICAgdyB8PSAoKHYgJiAweDAwMDAwMGZmKSA8PCAxNikgLy8gQlxuXG4gICAgICAgIGltYWdlW29mZnNldCsrXSA9IHdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9dGltZXN0YW1wXG4gICAqL1xuICBkcmF3ICh0aW1lc3RhbXApIHtcbiAgICBjb25zdCBzaG1CdWZmZXIgPSB0aGlzLl9zaG1CdWZmZXJQb29sLnRha2UoKVxuICAgIGlmIChzaG1CdWZmZXIpIHtcbiAgICAgIHRoaXMuX3BhaW50UGl4ZWxzKHNobUJ1ZmZlciwgdGltZXN0YW1wKVxuICAgICAgc2htQnVmZmVyLmF0dGFjaCgpXG5cbiAgICAgIHRoaXMuX3N1cmZhY2UuYXR0YWNoKHNobUJ1ZmZlci5idWZmZXJQcm94eSwgMCwgMClcbiAgICAgIHRoaXMuX3N1cmZhY2UuZGFtYWdlKDAsIDAsIHNobUJ1ZmZlci53aWR0aCwgc2htQnVmZmVyLmhlaWdodClcblxuICAgICAgLy8gV2FpdCBmb3IgdGhlIGNvbXBvc2l0b3IgdG8gc2lnbmFsIHRoYXQgd2UgY2FuIGRyYXcgdGhlIG5leHQgZnJhbWUuXG4gICAgICAvLyBOb3RlIHRoYXQgdXNpbmcgJ2F3YWl0JyBoZXJlIHdvdWxkIHJlc3VsdCBpbiBhIGRlYWRsb2NrIGFzIHRoZSBldmVudCBsb29wIHdvdWxkIGJlIGJsb2NrZWQsIGFuZCB0aGUgZXZlbnRcbiAgICAgIC8vIHRoYXQgcmVzb2x2ZXMgdGhlIGF3YWl0IHN0YXRlIHdvdWxkIG5ldmVyIGJlIHBpY2tlZCB1cCBieSB0aGUgYmxvY2tlZCBldmVudCBsb29wLlxuICAgICAgdGhpcy5fb25GcmFtZSgpLnRoZW4odGltZXN0YW1wID0+IHRoaXMuZHJhdyh0aW1lc3RhbXApKVxuXG4gICAgICAvLyBzZXJpYWwgaXMgb25seSByZXF1aXJlZCBpZiBvdXIgYnVmZmVyIGNvbnRlbnRzIHdvdWxkIHRha2UgYSBsb25nIHRpbWUgdG8gc2VuZCB0byB0aGUgY29tcG9zaXRvciBpZS4gaW4gYSBuZXR3b3JrIHJlbW90ZSBjYXNlXG4gICAgICB0aGlzLl9zdXJmYWNlLmNvbW1pdCgwKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBbGwgYnVmZmVycyBvY2N1cGllZCBieSBjb21wb3NpdG9yIScpXG4gICAgICBkaXNwbGF5LmNsb3NlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9bmFtZVxuICAgKi9cbiAgZ2xvYmFsUmVtb3ZlIChuYW1lKSB7XG4gICAgLy8gRklYTUUga2VlcCB0cmFjayBvZiB0aGUgbmFtZSBudW1iZXIgb2YgdGhlIGdsb2JhbHMgd2UgYmluZCBzbyB3ZSBjYW4gZG8gY2xlYW51cCBpZiBhIGdsb2JhbCBzaG91bGQgZ28gYXdheS5cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiAgVGhlIGNvbmZpZ3VyZSBldmVudCBhc2tzIHRoZSBjbGllbnQgdG8gcmVzaXplIGl0cyBzdXJmYWNlLlxuICAgKlxuICAgKiAgVGhlIHNpemUgaXMgYSBoaW50LCBpbiB0aGUgc2Vuc2UgdGhhdCB0aGUgY2xpZW50IGlzIGZyZWUgdG9cbiAgICogIGlnbm9yZSBpdCBpZiBpdCBkb2Vzbid0IHJlc2l6ZSwgcGljayBhIHNtYWxsZXIgc2l6ZSAodG9cbiAgICogIHNhdGlzZnkgYXNwZWN0IHJhdGlvIG9yIHJlc2l6ZSBpbiBzdGVwcyBvZiBOeE0gcGl4ZWxzKS5cbiAgICpcbiAgICogIFRoZSBlZGdlcyBwYXJhbWV0ZXIgcHJvdmlkZXMgYSBoaW50IGFib3V0IGhvdyB0aGUgc3VyZmFjZVxuICAgKiAgd2FzIHJlc2l6ZWQuIFRoZSBjbGllbnQgbWF5IHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGRlY2lkZVxuICAgKiAgaG93IHRvIGFkanVzdCBpdHMgY29udGVudCB0byB0aGUgbmV3IHNpemUgKGUuZy4gYSBzY3JvbGxpbmdcbiAgICogIGFyZWEgbWlnaHQgYWRqdXN0IGl0cyBjb250ZW50IHBvc2l0aW9uIHRvIGxlYXZlIHRoZSB2aWV3YWJsZVxuICAgKiAgY29udGVudCB1bm1vdmVkKS5cbiAgICpcbiAgICogIFRoZSBjbGllbnQgaXMgZnJlZSB0byBkaXNtaXNzIGFsbCBidXQgdGhlIGxhc3QgY29uZmlndXJlXG4gICAqICBldmVudCBpdCByZWNlaXZlZC5cbiAgICpcbiAgICogIFRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZ3VtZW50cyBzcGVjaWZ5IHRoZSBzaXplIG9mIHRoZSB3aW5kb3dcbiAgICogIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMuXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlZGdlcyBob3cgdGhlIHN1cmZhY2Ugd2FzIHJlc2l6ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIG5ldyB3aWR0aCBvZiB0aGUgc3VyZmFjZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IG5ldyBoZWlnaHQgb2YgdGhlIHN1cmZhY2VcbiAgICpcbiAgICogQHNpbmNlIDFcbiAgICpcbiAgICovXG4gIGNvbmZpZ3VyZSAoZWRnZXMsIHdpZHRoLCBoZWlnaHQpIHsgLyogTk9PUCAqLyB9XG5cbiAgLyoqXG4gICAqXG4gICAqICBQaW5nIGEgY2xpZW50IHRvIGNoZWNrIGlmIGl0IGlzIHJlY2VpdmluZyBldmVudHMgYW5kIHNlbmRpbmdcbiAgICogIHJlcXVlc3RzLiBBIGNsaWVudCBpcyBleHBlY3RlZCB0byByZXBseSB3aXRoIGEgcG9uZyByZXF1ZXN0LlxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIHBpbmdcbiAgICpcbiAgICogQHNpbmNlIDFcbiAgICpcbiAgICovXG4gIHBpbmcgKHNlcmlhbCkge1xuICAgIHRoaXMuX3NoZWxsU3VyZmFjZS5wb25nKHNlcmlhbClcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiAgVGhlIHBvcHVwX2RvbmUgZXZlbnQgaXMgc2VudCBvdXQgd2hlbiBhIHBvcHVwIGdyYWIgaXMgYnJva2VuLFxuICAgKiAgdGhhdCBpcywgd2hlbiB0aGUgdXNlciBjbGlja3MgYSBzdXJmYWNlIHRoYXQgZG9lc24ndCBiZWxvbmdcbiAgICogIHRvIHRoZSBjbGllbnQgb3duaW5nIHRoZSBwb3B1cCBzdXJmYWNlLlxuICAgKlxuICAgKlxuICAgKlxuICAgKiBAc2luY2UgMVxuICAgKlxuICAgKi9cbiAgcG9wdXBEb25lICgpIHsgLyogTk9PUCAqLyB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4gKCkge1xuICAvLyBjcmVhdGUgYSBuZXcgd2luZG93IHdpdGggc29tZSBidWZmZXJzXG4gIGNvbnN0IHdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoMjUwLCAyNTApXG5cbiAgLy8gY3JlYXRlIGEgc3luYyBwcm9taXNlXG4gIGNvbnN0IHN5bmNQcm9taXNlID0gZGlzcGxheS5zeW5jKClcblxuICAvLyBmbHVzaCBvdXQgd2luZG93IGNyZWF0aW9uICYgc3luYyByZXF1ZXN0cyB0byB0aGUgY29tcG9zaXRvclxuICBkaXNwbGF5LmZsdXNoKClcblxuICAvLyB3YWl0IGZvciBjb21wb3NpdG9yIHRvIGhhdmUgcHJvY2Vzc2VkIGFsbCBvdXIgb3V0Z29pbmcgcmVxdWVzdHNcbiAgYXdhaXQgc3luY1Byb21pc2VcblxuICAvLyBOb3cgYmVnaW4gZHJhd2luZyBhZnRlciB0aGUgY29tcG9zaXRvciBpcyBkb25lIHByb2Nlc3NpbmcgYWxsIG91ciByZXF1ZXN0c1xuICB3aW5kb3cuaW5pdCgpXG4gIHdpbmRvdy5kcmF3KDApXG5cbiAgLy8gd2FpdCBmb3IgdGhlIGRpc3BsYXkgY29ubmVjdGlvbiB0byBjbG9zZVxuICB0cnkge1xuICAgIGF3YWl0IGRpc3BsYXkub25DbG9zZSgpXG4gICAgY29uc29sZS5sb2coJ0FwcGxpY2F0aW9uIGV4aXQuJylcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FwcGxpY2F0aW9uIHRlcm1pbmF0ZWQgd2l0aCBlcnJvci4nKVxuICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFja1RyYWNlKVxuICB9XG59XG5cbm1haW4oKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
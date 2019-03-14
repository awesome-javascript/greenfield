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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9EaXNwbGF5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL1dlYkZTLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL0dyV2ViR2xCdWZmZXJQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9HcldlYkdsUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvR3JXZWJTaG1CdWZmZXJFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvR3JXZWJTaG1CdWZmZXJQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9HcldlYlNobVByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1Byb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsQnVmZmVyRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsQnVmZmVyUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xDYWxsYmFja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbENhbGxiYWNrUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xDb21wb3NpdG9yUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xEYXRhRGV2aWNlRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsRGF0YURldmljZU1hbmFnZXJQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERhdGFEZXZpY2VQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERhdGFPZmZlckV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERhdGFPZmZlclByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsRGF0YVNvdXJjZUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERhdGFTb3VyY2VQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbERpc3BsYXlFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xEaXNwbGF5UHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xLZXlib2FyZEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbEtleWJvYXJkUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xPdXRwdXRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xPdXRwdXRQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbFBvaW50ZXJFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xQb2ludGVyUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xSZWdpb25Qcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbFJlZ2lzdHJ5RXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsUmVnaXN0cnlQcm94eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NsaWVudC9ydW50aW1lL3NyYy9wcm90b2NvbC9XbFNlYXRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTZWF0UHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTaGVsbFByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsU2hlbGxTdXJmYWNlRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsU2hlbGxTdXJmYWNlUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTdWJjb21wb3NpdG9yUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTdWJzdXJmYWNlUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xTdXJmYWNlRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsU3VyZmFjZVByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1dsVG91Y2hFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvV2xUb3VjaFByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1BvcHVwRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1BvcHVwUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvWGRnUG9zaXRpb25lclByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1N1cmZhY2VFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvWGRnU3VyZmFjZVByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1RvcGxldmVsRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1RvcGxldmVsUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jbGllbnQvcnVudGltZS9zcmMvcHJvdG9jb2wvWGRnV21CYXNlRXZlbnRzLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY2xpZW50L3J1bnRpbWUvc3JjL3Byb3RvY29sL1hkZ1dtQmFzZVByb3h5LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY29tbW9uL3NyYy9Db25uZWN0aW9uLmpzIiwid2VicGFjazovLy8vaG9tZS9lcmlrL2dpdC93ZXN0ZmllbGQvY29tbW9uL3NyYy9GaXhlZC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvZXJpay9naXQvd2VzdGZpZWxkL2NvbW1vbi9zcmMvV2ViRkQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2VyaWsvZ2l0L3dlc3RmaWVsZC9jb21tb24vc3JjL1dsT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVtQjtBQUNJO0FBQ2tCOztBQUVyRDtBQUMwRDtBQUNFO0FBQ0E7QUFDSTtBQUNoRTtBQUNBO0FBQ3dEO0FBQ007QUFDRTtBQUNBO0FBQ2M7QUFDeEI7QUFDYztBQUNWO0FBQ047QUFDTTtBQUNFO0FBQ047QUFDRTtBQUNBO0FBQ2M7QUFDTjtBQUNKO0FBQ0U7QUFDQTtBQUM5RDtBQUMwRDtBQUNNO0FBQ0U7QUFDQTtBQUNJO0FBQ1Y7QUFDTjtBQUNNO0FBQ0U7QUFDTjtBQUNFOztBQUUxRDtBQUMwRDtBQUNRO0FBQ047QUFDRTtBQUNOO0FBQ0k7QUFDRTtBQUNFO0FBQ047O0FBRTFEO0FBQ29FO0FBQ1o7QUFDYzs7QUFFdEU7QUFDa0U7QUFDWjs7QUFFdEQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxjQUFjLGtEQUFLO0FBQ25CO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsdUJBQXVCLG1FQUFVO0FBQ2pDO0FBQ0EsVUFBVTtBQUNWO0FBQ0Esb0JBQW9CLG9EQUFPOztBQUUzQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhLHVDQUF1QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qix5Q0FBeUMsdURBQXVEO0FBQ2hHO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQSxPQUFPO0FBQ1A7QUFDQSw0QkFBNEIsY0FBYztBQUMxQyxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPLHVDQUF1QyxFQUFFO0FBQzdELGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDJDQUEyQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ROQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNZOztBQUV5QztBQUNDOztBQUV2QztBQUNmO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsNkJBQTZCLGdFQUFjO0FBQzNDO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsMkRBQTJELHVCQUF1QixRQUFRLFNBQVMsVUFBVSxLQUFLLGFBQWEsUUFBUTtBQUN2STs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2S0E7QUFBQTtBQUFBO0FBQWdEOztBQUVoRDtBQUNlO0FBQ2Y7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFLLG1GQUFtRiwwQkFBMEI7QUFDeEk7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOERBQUssbUZBQW1GLDBCQUEwQjtBQUN4STtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUQ7QUFDckQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixHQUFHLG1FQUFVO0FBQ1Y7QUFDM0IsaUNBQWlDLDhDQUFLOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSxpRkFBa0I7Ozs7Ozs7Ozs7Ozs7QUNuRWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNyRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUcsbUVBQVU7QUFDVjtBQUMwQjtBQUNWOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBSzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMkRBQWtCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEVBQUU7QUFDZCxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzREFBYTtBQUM1RDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsMkVBQVk7Ozs7Ozs7Ozs7Ozs7QUM1RjNCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUQ7QUFDckQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixHQUFHLG1FQUFVO0FBQ1Y7QUFDM0Isa0NBQWtDLDhDQUFLOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlLGtGQUFtQjs7Ozs7Ozs7Ozs7OztBQzVFbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRyxtRUFBVTtBQUNWO0FBQzRCO0FBQ1o7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFLOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyw0REFBbUI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0RBQWE7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlLDRFQUFhOzs7Ozs7Ozs7Ozs7O0FDOUY1QjtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDWTs7QUFFdUM7O0FBRXBDLG9CQUFvQixpRUFBUTtBQUMzQztBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsT0FBTyxpRkFBaUYsNkRBQTZELE9BQU8sRUFBRTtBQUMzSztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTyxpRkFBaUYsNkRBQTZELE9BQU8sRUFBRTtBQUMzSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNyRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUcsbUVBQVU7QUFDVjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFLOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsNEVBQWE7Ozs7Ozs7Ozs7Ozs7QUNwRjVCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRyxtRUFBVTtBQUNWOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOENBQUs7O0FBRW5DO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsOEVBQWU7Ozs7Ozs7Ozs7Ozs7QUNsRTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUQ7QUFDckQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixHQUFHLG1FQUFVO0FBQ1Y7QUFDa0I7QUFDRjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOENBQUs7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx1REFBYztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0RBQWE7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlLGdGQUFpQjs7Ozs7Ozs7Ozs7OztBQzdGaEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksRUFBRTtBQUNkLFlBQVksTUFBTTtBQUNsQixZQUFZLE1BQU07QUFDbEIsWUFBWSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRyxtRUFBVTtBQUNWO0FBQ3dCO0FBQ0E7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOENBQUs7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBEQUFpQjtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwREFBaUI7QUFDaEU7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RkFBd0I7Ozs7Ozs7Ozs7Ozs7QUN4SHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRyxtRUFBVTtBQUNWO0FBQ3NCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOENBQUs7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxHQUFHO0FBQ2YsWUFBWSxFQUFFO0FBQ2QsWUFBWSxHQUFHO0FBQ2YsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLHlEQUFnQjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLGdGQUFpQjs7Ozs7Ozs7Ozs7OztBQzFLaEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRyxtRUFBVTtBQUNWOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4Q0FBSzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwrRUFBZ0I7Ozs7Ozs7Ozs7Ozs7QUN4Ty9CO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUQ7QUFDckQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixHQUFHLG1FQUFVO0FBQ1Y7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOENBQUs7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsZ0ZBQWlCOzs7Ozs7Ozs7Ozs7O0FDekpoQztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRyxtRUFBVTtBQUNWO0FBQ29CO0FBQ0E7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4Q0FBSzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3REFBZTtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0RBQWU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw2RUFBYzs7Ozs7Ozs7Ozs7OztBQy9IN0I7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksRUFBRTtBQUNkLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLEVBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNyRCxPQUFPO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsNEVBQWE7Ozs7Ozs7Ozs7Ozs7QUN4SzVCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLEVBQUU7QUFDZCxZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksRUFBRTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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LE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEVBQUU7QUFDZCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVksT0FBTztBQUNuQixZQUFZLEVBQUU7QUFDZCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxrRkFBbUI7Ozs7Ozs7Ozs7Ozs7QUN6WWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRyxtRUFBVTtBQUNWO0FBQ3dCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFLOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxFQUFFO0FBQ2QsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwREFBaUI7QUFDaEU7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRkFBb0I7Ozs7Ozs7Ozs7Ozs7QUMzSG5DO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNyRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUcsbUVBQVU7QUFDVjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4Q0FBSzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxnRkFBaUI7Ozs7Ozs7Ozs7Ozs7QUNqUWhDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEVBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNyRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEdBQUcsbUVBQVU7QUFDVjtBQUNvQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOENBQUs7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3REFBZTtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsNkVBQWM7Ozs7Ozs7Ozs7Ozs7QUMvZTdCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLEVBQUU7QUFDZCxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUcsbUVBQVU7QUFDVjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4Q0FBSzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEVBQUU7QUFDZCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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YSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0VBQU87O0FBRTdCO0FBQ0EsRUFBRSxnRUFBTzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnRUFBTztBQUNqQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzaW1wbGUud2ViLnNobS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDE3IEVyaWsgRGUgUmlqY2tlXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBXZWJGUyBmcm9tICcuL3NyYy9XZWJGUydcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4vc3JjL0Rpc3BsYXknXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuXG4vLyBjb3JlIHdheWxhbmQgcHJvdG9jb2xcbmltcG9ydCBXbERpc3BsYXlQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbERpc3BsYXlQcm94eSdcbmltcG9ydCBXbFJlZ2lzdHJ5UHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xSZWdpc3RyeVByb3h5J1xuaW1wb3J0IFdsQ2FsbGJhY2tQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbENhbGxiYWNrUHJveHknXG5pbXBvcnQgV2xDb21wb3NpdG9yUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xDb21wb3NpdG9yUHJveHknXG4vLyBpbXBvcnQgV2xTaG1Qb29sUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xTaG1Qb29sUHJveHknXG4vLyBpbXBvcnQgV2xTaG1Qcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFNobVByb3h5J1xuaW1wb3J0IFdsQnVmZmVyUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xCdWZmZXJQcm94eSdcbmltcG9ydCBXbERhdGFPZmZlclByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsRGF0YU9mZmVyUHJveHknXG5pbXBvcnQgV2xEYXRhU291cmNlUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xEYXRhU291cmNlUHJveHknXG5pbXBvcnQgV2xEYXRhRGV2aWNlUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xEYXRhRGV2aWNlUHJveHknXG5pbXBvcnQgV2xEYXRhRGV2aWNlTWFuYWdlclByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1dsRGF0YURldmljZU1hbmFnZXJQcm94eSdcbmltcG9ydCBXbFNoZWxsUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xTaGVsbFByb3h5J1xuaW1wb3J0IFdsU2hlbGxTdXJmYWNlUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xTaGVsbFN1cmZhY2VQcm94eSdcbmltcG9ydCBXbFN1cmZhY2VQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFN1cmZhY2VQcm94eSdcbmltcG9ydCBXbFNlYXRQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFNlYXRQcm94eSdcbmltcG9ydCBXbFBvaW50ZXJQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFBvaW50ZXJQcm94eSdcbmltcG9ydCBXbEtleWJvYXJkUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xLZXlib2FyZFByb3h5J1xuaW1wb3J0IFdsVG91Y2hQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFRvdWNoUHJveHknXG5pbXBvcnQgV2xPdXRwdXRQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbE91dHB1dFByb3h5J1xuaW1wb3J0IFdsUmVnaW9uUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xSZWdpb25Qcm94eSdcbmltcG9ydCBXbFN1YmNvbXBvc2l0b3JQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFN1YmNvbXBvc2l0b3JQcm94eSdcbmltcG9ydCBXbFN1YnN1cmZhY2VQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFN1YnN1cmZhY2VQcm94eSdcbmltcG9ydCBXbERpc3BsYXlFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xEaXNwbGF5RXZlbnRzJ1xuaW1wb3J0IFdsUmVnaXN0cnlFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xSZWdpc3RyeUV2ZW50cydcbmltcG9ydCBXbENhbGxiYWNrRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1dsQ2FsbGJhY2tFdmVudHMnXG4vLyBpbXBvcnQgV2xTaG1FdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xTaG1FdmVudHMnXG5pbXBvcnQgV2xCdWZmZXJFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xCdWZmZXJFdmVudHMnXG5pbXBvcnQgV2xEYXRhT2ZmZXJFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xEYXRhT2ZmZXJFdmVudHMnXG5pbXBvcnQgV2xEYXRhU291cmNlRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1dsRGF0YVNvdXJjZUV2ZW50cydcbmltcG9ydCBXbERhdGFEZXZpY2VFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xEYXRhRGV2aWNlRXZlbnRzJ1xuaW1wb3J0IFdsU2hlbGxTdXJmYWNlRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1dsU2hlbGxTdXJmYWNlRXZlbnRzJ1xuaW1wb3J0IFdsU3VyZmFjZUV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9XbFN1cmZhY2VFdmVudHMnXG5pbXBvcnQgV2xTZWF0RXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1dsU2VhdEV2ZW50cydcbmltcG9ydCBXbFBvaW50ZXJFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xQb2ludGVyRXZlbnRzJ1xuaW1wb3J0IFdsS2V5Ym9hcmRFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xLZXlib2FyZEV2ZW50cydcbmltcG9ydCBXbFRvdWNoRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1dsVG91Y2hFdmVudHMnXG5pbXBvcnQgV2xPdXRwdXRFdmVudHMgZnJvbSAnLi9zcmMvcHJvdG9jb2wvV2xPdXRwdXRFdmVudHMnXG5cbi8vIHhkZ19zaGVsbFxuaW1wb3J0IFhkZ1dtQmFzZVByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1dtQmFzZVByb3h5J1xuaW1wb3J0IFhkZ1Bvc2l0aW9uZXJQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9YZGdQb3NpdGlvbmVyUHJveHknXG5pbXBvcnQgWGRnU3VyZmFjZVByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1N1cmZhY2VQcm94eSdcbmltcG9ydCBYZGdUb3BsZXZlbFByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1RvcGxldmVsUHJveHknXG5pbXBvcnQgWGRnUG9wdXBQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9YZGdQb3B1cFByb3h5J1xuaW1wb3J0IFhkZ1dtQmFzZUV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9YZGdXbUJhc2VFdmVudHMnXG5pbXBvcnQgWGRnU3VyZmFjZUV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9YZGdTdXJmYWNlRXZlbnRzJ1xuaW1wb3J0IFhkZ1RvcGxldmVsRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1RvcGxldmVsRXZlbnRzJ1xuaW1wb3J0IFhkZ1BvcHVwRXZlbnRzIGZyb20gJy4vc3JjL3Byb3RvY29sL1hkZ1BvcHVwRXZlbnRzJ1xuXG4vLyB3ZWIgc2htXG5pbXBvcnQgR3JXZWJTaG1CdWZmZXJQcm94eSBmcm9tICcuL3NyYy9wcm90b2NvbC9HcldlYlNobUJ1ZmZlclByb3h5J1xuaW1wb3J0IEdyV2ViU2htUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvR3JXZWJTaG1Qcm94eSdcbmltcG9ydCBHcldlYlNobUJ1ZmZlckV2ZW50cyBmcm9tICcuL3NyYy9wcm90b2NvbC9HcldlYlNobUJ1ZmZlckV2ZW50cydcblxuLy8gd2ViIGdsXG5pbXBvcnQgR3JXZWJHbEJ1ZmZlclByb3h5IGZyb20gJy4vc3JjL3Byb3RvY29sL0dyV2ViR2xCdWZmZXJQcm94eSdcbmltcG9ydCBHcldlYkdsUHJveHkgZnJvbSAnLi9zcmMvcHJvdG9jb2wvR3JXZWJHbFByb3h5J1xuXG4vKipcbiAqIEB0eXBlIHtXZWJGU31cbiAqL1xuY29uc3Qgd2ViRlMgPSBXZWJGUy5jcmVhdGUoX3V1aWR2NCgpKVxuLyoqXG4gKiBAdHlwZSB7Q29ubmVjdGlvbn1cbiAqL1xuY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKClcbi8qKlxuICogQHR5cGUge0Rpc3BsYXl9XG4gKi9cbmNvbnN0IGRpc3BsYXkgPSBuZXcgRGlzcGxheShjb25uZWN0aW9uKVxuXG4vKipcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfdXVpZHY0ICgpIHtcbiAgcmV0dXJuIChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG4gICAgKGMgXiBzZWxmLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxuICApXG59XG5cbi8qKlxuICogQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcbiAqIEBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG4gKiBAcGFyYW0ge1dlYkZTfXdlYkZTXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfc2V0dXBNZXNzYWdlSGFuZGxpbmcgKGRpc3BsYXksIGNvbm5lY3Rpb24sIHdlYkZTKSB7XG4gIC8qKlxuICAgKiBAdHlwZSB7QXJyYXk8QXJyYXk8e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+fT4+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3QgX2ZsdXNoUXVldWUgPSBbXVxuICAvKipcbiAgICogQHBhcmFtIHtNZXNzYWdlRXZlbnR9ZXZlbnRcbiAgICovXG4gIG9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChjb25uZWN0aW9uLmNsb3NlZCkgeyByZXR1cm4gfVxuXG4gICAgY29uc3Qgd2ViV29ya2VyTWVzc2FnZSA9IC8qKiBAdHlwZSB7e3Byb3RvY29sTWVzc2FnZTpBcnJheUJ1ZmZlciwgbWV0YTpBcnJheTxUcmFuc2ZlcmFibGU+fX0gKi9ldmVudC5kYXRhXG4gICAgaWYgKHdlYldvcmtlck1lc3NhZ2UucHJvdG9jb2xNZXNzYWdlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50MzJBcnJheSgvKiogQHR5cGUge0FycmF5QnVmZmVyfSAqL3dlYldvcmtlck1lc3NhZ2UucHJvdG9jb2xNZXNzYWdlKVxuICAgICAgY29uc3QgZmRzID0gd2ViV29ya2VyTWVzc2FnZS5tZXRhLm1hcCh0cmFuc2ZlcmFibGUgPT4ge1xuICAgICAgICBpZiAodHJhbnNmZXJhYmxlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gd2ViRlMuZnJvbUFycmF5QnVmZmVyKHRyYW5zZmVyYWJsZSlcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2ZlcmFibGUgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCkge1xuICAgICAgICAgIHJldHVybiB3ZWJGUy5mcm9tSW1hZ2VCaXRtYXAodHJhbnNmZXJhYmxlKVxuICAgICAgICB9Ly8gZWxzZSBpZiAodHJhbnNmZXJhYmxlIGluc3RhbmNlb2YgTWVzc2FnZVBvcnQpIHtcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zb2xlLndhcm4oYENPTVBPU0lUT1IgQlVHPyBVbnN1cHBvcnRlZCB0cmFuc2ZlcmFibGUgcmVjZWl2ZWQgZnJvbSBjb21wb3NpdG9yOiAke3RyYW5zZmVyYWJsZX0uIFdlYkZEIHdpbGwgYmUgbnVsbC5gKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbm5lY3Rpb24ubWVzc2FnZSh7IGJ1ZmZlciwgZmRzIH0pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkaXNwbGF5LmVycm9ySGFuZGxlciAmJiB0eXBlb2YgZGlzcGxheS5lcnJvckhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkaXNwbGF5LmVycm9ySGFuZGxlcihlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1xcdG5hbWU6ICcgKyBlLm5hbWUgKyAnIG1lc3NhZ2U6ICcgKyBlLm1lc3NhZ2UgKyAnIHRleHQ6ICcgKyBlLnRleHQpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3Igb2JqZWN0IHN0YWNrOiAnKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjaylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbd2ViLXdvcmtlci1jbGllbnRdIHNlcnZlciBzZW5kIGFuIGlsbGVnYWwgbWVzc2FnZS5gKVxuICAgICAgY29ubmVjdGlvbi5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QXJyYXk8e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+fT59d2lyZU1lc3NhZ2VzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBjb25uZWN0aW9uLm9uRmx1c2ggPSBhc3luYyAod2lyZU1lc3NhZ2VzKSA9PiB7XG4gICAgX2ZsdXNoUXVldWUucHVzaCh3aXJlTWVzc2FnZXMpXG5cbiAgICBpZiAoX2ZsdXNoUXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgd2hpbGUgKF9mbHVzaFF1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc2VuZFdpcmVNZXNzYWdlcyA9IF9mbHVzaFF1ZXVlWzBdXG5cbiAgICAgIC8vIGNvbnZlcnQgdG8gc2luZ2xlIGFycmF5QnVmZmVyIHNvIGl0IGNhbiBiZSBzZW5kIG92ZXIgYSBkYXRhIGNoYW5uZWwgdXNpbmcgemVybyBjb3B5IHNlbWFudGljcy5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzU2l6ZSA9IHNlbmRXaXJlTWVzc2FnZXMucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWUuYnVmZmVyLmJ5dGVMZW5ndGgsIDApXG5cbiAgICAgIGNvbnN0IHNlbmRCdWZmZXIgPSBuZXcgVWludDMyQXJyYXkobmV3IEFycmF5QnVmZmVyKG1lc3NhZ2VzU2l6ZSkpXG4gICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgY29uc3QgbWV0YSA9IFtdXG4gICAgICBmb3IgKGNvbnN0IHdpcmVNZXNzYWdlIG9mIHNlbmRXaXJlTWVzc2FnZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCB3ZWJGZCBvZiB3aXJlTWVzc2FnZS5mZHMpIHtcbiAgICAgICAgICBjb25zdCB0cmFuc2ZlcmFibGUgPSBhd2FpdCB3ZWJGZC5nZXRUcmFuc2ZlcmFibGUoKVxuICAgICAgICAgIG1ldGEucHVzaCh0cmFuc2ZlcmFibGUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBVaW50MzJBcnJheSh3aXJlTWVzc2FnZS5idWZmZXIpXG4gICAgICAgIHNlbmRCdWZmZXIuc2V0KG1lc3NhZ2UsIG9mZnNldClcbiAgICAgICAgb2Zmc2V0ICs9IG1lc3NhZ2UubGVuZ3RoXG4gICAgICB9XG5cbiAgICAgIHBvc3RNZXNzYWdlKHsgcHJvdG9jb2xNZXNzYWdlOiBzZW5kQnVmZmVyLmJ1ZmZlciwgbWV0YSB9LCBbc2VuZEJ1ZmZlci5idWZmZXJdLmNvbmNhdChtZXRhKSlcbiAgICAgIF9mbHVzaFF1ZXVlLnNoaWZ0KClcbiAgICB9XG4gIH1cbn1cblxuX3NldHVwTWVzc2FnZUhhbmRsaW5nKGRpc3BsYXksIGNvbm5lY3Rpb24sIHdlYkZTKVxuXG4vKipcbiAqIEBwYXJhbSB7V2xTdXJmYWNlUHJveHl9d2xTdXJmYWNlUHJveHlcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKCk6IFByb21pc2U8bnVtYmVyPn1cbiAqL1xuZnVuY3Rpb24gZnJhbWUgKHdsU3VyZmFjZVByb3h5KSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3Qgd2xDYWxsYmFja1Byb3h5ID0gd2xTdXJmYWNlUHJveHkuZnJhbWUoKVxuICAgICAgd2xDYWxsYmFja1Byb3h5Lmxpc3RlbmVyID0ge1xuICAgICAgICBkb25lOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgICB3bENhbGxiYWNrUHJveHkuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHdlYkZTLFxuICBkaXNwbGF5LFxuICBmcmFtZSxcblxuICBXbERpc3BsYXlQcm94eSxcbiAgV2xSZWdpc3RyeVByb3h5LFxuICBXbENhbGxiYWNrUHJveHksXG4gIFdsQ29tcG9zaXRvclByb3h5LFxuICBXbEJ1ZmZlclByb3h5LFxuICBXbERhdGFPZmZlclByb3h5LFxuICBXbERhdGFTb3VyY2VQcm94eSxcbiAgV2xEYXRhRGV2aWNlUHJveHksXG4gIFdsRGF0YURldmljZU1hbmFnZXJQcm94eSxcbiAgV2xTaGVsbFByb3h5LFxuICBXbFNoZWxsU3VyZmFjZVByb3h5LFxuICBXbFN1cmZhY2VQcm94eSxcbiAgV2xTZWF0UHJveHksXG4gIFdsUG9pbnRlclByb3h5LFxuICBXbEtleWJvYXJkUHJveHksXG4gIFdsVG91Y2hQcm94eSxcbiAgV2xPdXRwdXRQcm94eSxcbiAgV2xSZWdpb25Qcm94eSxcbiAgV2xTdWJjb21wb3NpdG9yUHJveHksXG4gIFdsU3Vic3VyZmFjZVByb3h5LFxuICBXbERpc3BsYXlFdmVudHMsXG4gIFdsUmVnaXN0cnlFdmVudHMsXG4gIFdsQ2FsbGJhY2tFdmVudHMsXG4gIFdsQnVmZmVyRXZlbnRzLFxuICBXbERhdGFPZmZlckV2ZW50cyxcbiAgV2xEYXRhU291cmNlRXZlbnRzLFxuICBXbERhdGFEZXZpY2VFdmVudHMsXG4gIFdsU2hlbGxTdXJmYWNlRXZlbnRzLFxuICBXbFN1cmZhY2VFdmVudHMsXG4gIFdsU2VhdEV2ZW50cyxcbiAgV2xQb2ludGVyRXZlbnRzLFxuICBXbEtleWJvYXJkRXZlbnRzLFxuICBXbFRvdWNoRXZlbnRzLFxuICBXbE91dHB1dEV2ZW50cyxcblxuICBYZGdXbUJhc2VQcm94eSxcbiAgWGRnUG9zaXRpb25lclByb3h5LFxuICBYZGdTdXJmYWNlUHJveHksXG4gIFhkZ1RvcGxldmVsUHJveHksXG4gIFhkZ1BvcHVwUHJveHksXG4gIFhkZ1dtQmFzZUV2ZW50cyxcbiAgWGRnU3VyZmFjZUV2ZW50cyxcbiAgWGRnVG9wbGV2ZWxFdmVudHMsXG4gIFhkZ1BvcHVwRXZlbnRzLFxuXG4gIEdyV2ViU2htQnVmZmVyUHJveHksXG4gIEdyV2ViU2htUHJveHksXG4gIEdyV2ViU2htQnVmZmVyRXZlbnRzLFxuXG4gIEdyV2ViR2xCdWZmZXJQcm94eSxcbiAgR3JXZWJHbFByb3h5XG59IiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgMjAxNyBFcmlrIERlIFJpamNrZVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmltcG9ydCBXbERpc3BsYXlQcm94eSBmcm9tICcuL3Byb3RvY29sL1dsRGlzcGxheVByb3h5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29ubmVjdGlvbikge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVjeWNsZWRJZHMgPSBbXVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtDb25uZWN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29ubmVjdGlvbiA9IGNvbm5lY3Rpb25cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7V2xEaXNwbGF5UHJveHl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kaXNwbGF5UHJveHkgPSBuZXcgV2xEaXNwbGF5UHJveHkodGhpcywgdGhpcy5fY29ubmVjdGlvbiwgMSlcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGFzdElkID0gMVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbigpOnZvaWR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kZXN0cm95UmVzb2x2ZSA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb24oZXJyb3I6RXJyb3IpOnZvaWR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kZXN0cm95UmVqZWN0ID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGVzdHJveVByb21pc2UgPSBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fZGVzdHJveVJlc29sdmUgPSByZXNvbHZlXG4gICAgICB0aGlzLl9kZXN0cm95UmVqZWN0ID0gcmVqZWN0XG4gICAgfSkpXG5cbiAgICB0aGlzLl9kaXNwbGF5UHJveHkubGlzdGVuZXIgPSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSBpZFxuICAgICAgICovXG4gICAgICBkZWxldGVJZDogKGlkKSA9PiB7IHRoaXMuX3JlY3ljbGVkSWRzLnB1c2goaWQpIH0sXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSBwcm94eVxuICAgICAgICogQHBhcmFtIGNvZGVcbiAgICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICAgKi9cbiAgICAgIGVycm9yOiAocHJveHksIGNvZGUsIG1lc3NhZ2UpID0+IHsgdGhpcy5fcHJvdG9jb2xFcnJvcihwcm94eSwgY29kZSwgbWVzc2FnZSkgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhpcyB0byBoYXZlIGEgZGVmYXVsdCAnY2F0Y2gtYWxsJyBhcHBsaWNhdGlvbiBlcnJvciBoYW5kbGVyLiBDYW4gYmUgbnVsbCBmb3IgZGVmYXVsdCBiZWhhdmlvci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGVycm9yKTp2b2lkfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5lcnJvckhhbmRsZXIgPSBudWxsXG4gIH1cblxuICBjbG9zZSAoKSB7XG4gICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb24uY2xvc2VkKSB7IHJldHVybiB9XG4gICAgdGhpcy5fY29ubmVjdGlvbi5jbG9zZSgpXG4gICAgdGhpcy5fZGVzdHJveVJlc29sdmUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UHJveHl9cHJveHlcbiAgICogQHBhcmFtIHtudW1iZXJ9Y29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ31tZXNzYWdlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcHJvdG9jb2xFcnJvciAocHJveHksIGNvZGUsIG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5fY29ubmVjdGlvbi5jbG9zZWQpIHsgcmV0dXJuIH1cbiAgICB0aGlzLl9jb25uZWN0aW9uLmNsb3NlKClcbiAgICB0aGlzLl9kZXN0cm95UmVqZWN0KG5ldyBFcnJvcihgUHJvdG9jb2wgZXJyb3IuIHR5cGU6ICR7cHJveHkuY29uc3RydWN0b3IubmFtZX0sIGlkOiAke3Byb3h5LmlkfSwgY29kZTogJHtjb2RlfSwgbWVzc2FnZTogJHttZXNzYWdlfWApKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIG9uY2UgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkIG5vcm1hbGx5IGllLiB3aXRoIGEgY2FsbCB0byBjbG9zZSgpLiBUaGUgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGggYW5cbiAgICogZXJyb3IgaWYgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkIGFibm9ybWFsbHkgaWUgd2hlbiBhIHByb3RvY29sIGVycm9yIGlzIHJlY2VpdmVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgb25DbG9zZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3lQcm9taXNlXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7V2xSZWdpc3RyeVByb3h5fVxuICAgKi9cbiAgZ2V0UmVnaXN0cnkgKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5UHJveHkuZ2V0UmVnaXN0cnkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBpbnRlcm5hbCB1c2UuIEdlbmVyYXRlcyB0aGUgaWQgb2YgdGhlIG5leHQgcHJveHkgb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZW5lcmF0ZU5leHRJZCAoKSB7XG4gICAgaWYgKHRoaXMuX3JlY3ljbGVkSWRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlY3ljbGVkSWRzLnNoaWZ0KClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICsrdGhpcy5fbGFzdElkXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhaXQgZm9yIHRoZSBjb21wb3NpdG9yIHRvIGhhdmUgc2VuZCB1cyBhbGwgcmVtYWluaW5nIGV2ZW50cy5cbiAgICpcbiAgICogVGhlIGRhdGEgaW4gdGhlIHJlc29sdmVkIHByb21pc2UgaXMgdGhlIGV2ZW50IHNlcmlhbC5cbiAgICpcbiAgICogRG9uJ3QgJ2F3YWl0JyB0aGlzIHN5bmMgY2FsbCBhcyBpdCB3aWxsIHJlc3VsdCBpbiBhIGRlYWRsb2NrIHdoZXJlIHRoZSB3b3JrZXIgd2lsbCBibG9jayBhbGwgaW5jb21pbmcgZXZlbnRzLFxuICAgKiBpbmNsdWRpbmcgdGhlIGV2ZW50IHRoZSByZXNvbHZlcyB0aGUgYXdhaXQgc3RhdGUuIEluc3RlYWQgdXNlIHRoZSBjbGFzc2ljICd0aGVuKC4uKScgY29uc3RydWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBzeW5jICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCB3bENhbGxiYWNrUHJveHkgPSB0aGlzLl9kaXNwbGF5UHJveHkuc3luYygpXG4gICAgICB3bENhbGxiYWNrUHJveHkubGlzdGVuZXIgPSB7XG4gICAgICAgIGRvbmU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgIHdsQ2FsbGJhY2tQcm94eS5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2VuZCBxdWV1ZWQgbWVzc2FnZXMgdG8gdGhlIGNvbXBvc2l0b3IuXG4gICAqL1xuICBmbHVzaCAoKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbi5mbHVzaCgpXG4gIH1cbn1cbiIsImltcG9ydCB7IFdlYkZEIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuXG4vLyBUT0RPIFRoaXMgaXMgY3VycmVudGx5IGEgbGl0ZXJhbCBjb3B5IG9mIHRoZSBzZXJ2ZXIgaW1wbGVtZW50YXRpb24uIERvIGFsbCB1c2UgY2FzZXMgbWF0Y2ggMW8xIGFuZCBjYW4gd2UgdXNlIGEgc2luZ2xlIGNvbW1vbiBjb2RlIGJhc2UgYmV0d2VlbiBjbGllbnQgJiBzZXJ2ZXIgZm9yIFdlYkZTP1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViRlMge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9ZmREb21haW5VVUlEXG4gICAqIEByZXR1cm4ge1dlYkZTfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAoZmREb21haW5VVUlEKSB7XG4gICAgcmV0dXJuIG5ldyBXZWJGUyhmZERvbWFpblVVSUQpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9ZmREb21haW5VVUlEXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoZmREb21haW5VVUlEKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZkRG9tYWluVVVJRCA9IGZkRG9tYWluVVVJRFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3QuPG51bWJlcixXZWJGRD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl93ZWJGRHMgPSB7fVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9uZXh0RkQgPSAwXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXJcbiAgICogQHJldHVybiB7V2ViRkR9XG4gICAqL1xuICBmcm9tQXJyYXlCdWZmZXIgKGFycmF5QnVmZmVyKSB7XG4gICAgaWYgKCEoYXJyYXlCdWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGZpcnN0IGFyZ3VtZW50IHRvIGJlIG9mIHR5cGUgQXJyYXlCdWZmZXIuYClcbiAgICB9XG4gICAgY29uc3QgZmQgPSB0aGlzLl9uZXh0RkQrK1xuICAgIGNvbnN0IHdlYkZEID0gbmV3IFdlYkZEKGZkLCAnQXJyYXlCdWZmZXInLCB0aGlzLl9mZERvbWFpblVVSUQsICgpID0+IFByb21pc2UucmVzb2x2ZShhcnJheUJ1ZmZlciksICgpID0+IHsgZGVsZXRlIHRoaXMuX3dlYkZEc1tmZF0gfSlcbiAgICB0aGlzLl93ZWJGRHNbZmRdID0gd2ViRkRcbiAgICByZXR1cm4gd2ViRkRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0ltYWdlQml0bWFwfWltYWdlQml0bWFwXG4gICAqIEByZXR1cm4ge1dlYkZEfVxuICAgKi9cbiAgZnJvbUltYWdlQml0bWFwIChpbWFnZUJpdG1hcCkge1xuICAgIGlmICghKGltYWdlQml0bWFwIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXApKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBmaXJzdCBhcmd1bWVudCB0byBiZSBvZiB0eXBlIEltYWdlQml0bWFwLmApXG4gICAgfVxuICAgIGNvbnN0IGZkID0gdGhpcy5fbmV4dEZEKytcbiAgICBjb25zdCB3ZWJGRCA9IG5ldyBXZWJGRChmZCwgJ0ltYWdlQml0bWFwJywgdGhpcy5fZmREb21haW5VVUlELCAoKSA9PiBQcm9taXNlLnJlc29sdmUoaW1hZ2VCaXRtYXApLCAoKSA9PiB7IGRlbGV0ZSB0aGlzLl93ZWJGRHNbZmRdIH0pXG4gICAgdGhpcy5fd2ViRkRzW2ZkXSA9IHdlYkZEXG4gICAgcmV0dXJuIHdlYkZEXG4gIH1cblxuICAvLyBUT0RPIGZyb21NZXNzYWdlUG9ydFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn1mZFxuICAgKiBAcmV0dXJuIHtXZWJGRH1cbiAgICovXG4gIGdldFdlYkZEIChmZCkge1xuICAgIHJldHVybiB0aGlzLl93ZWJGRHNbZmRdXG4gIH1cbn1cbiIsIi8qXG4gKlxuICogICAgICAgIENvcHlyaWdodCDCqSAyMDE5IEVyaWsgRGUgUmlqY2tlXG4gKlxuICogICAgICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICAgICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICAgICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgICAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICAgICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICAgICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgICAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICAgICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICAgICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgICAgICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICAgICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICAgICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgICAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICAgICAgU09GVFdBUkUuXG4gKiAgICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmNsYXNzIEdyV2ViR2xCdWZmZXJQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICogICAgICAgICAgICAgICAgVHJhbnNmZXIgdGhlIGFzc29jaWF0ZWQgSFRNTDUgd2ViIGdsIGJ1ZmZlciBjb250ZW50cyB0byB0aGUgY29tcG9zaXRvci5cblx0ICogICAgICAgICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtXZWJGRH0gY29udGVudHMgSFRNTDUgd2ViIGdsIGltYWdlIGJpdG1hcCB0byB0cmFuc2ZlciB0byB0aGUgY29tcG9zaXRvci4gXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHR0cmFuc2ZlciAoY29udGVudHMpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbZmlsZURlc2NyaXB0b3IoY29udGVudHMpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtHcldlYkdsQnVmZmVyRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG59XG5HcldlYkdsQnVmZmVyUHJveHkucHJvdG9jb2xOYW1lID0gJ2dyX3dlYl9nbF9idWZmZXInXG5cbmV4cG9ydCBkZWZhdWx0IEdyV2ViR2xCdWZmZXJQcm94eVxuIiwiLypcbiAqXG4gKiAgICAgICAgQ29weXJpZ2h0IMKpIDIwMTkgRXJpayBEZSBSaWpja2VcbiAqXG4gKiAgICAgICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgICAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgICAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICAgICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgICAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICAgICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgICAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICAgICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgICAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgICAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgICAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgICAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgICAgICBTT0ZUV0FSRS5cbiAqICAgIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuaW1wb3J0IEdyV2ViR2xCdWZmZXJQcm94eSBmcm9tICcuL0dyV2ViR2xCdWZmZXJQcm94eSdcbmltcG9ydCBXbEJ1ZmZlclByb3h5IGZyb20gJy4vV2xCdWZmZXJQcm94eSdcblxuLyoqXG4gKlxuICogICAgICAgICAgICBBIHNpbmdsZXRvbiBnbG9iYWwgb2JqZWN0IHRoYXQgcHJvdmlkZXMgc3VwcG9ydCBmb3Igd2ViIGdsLlxuICpcbiAqICAgICAgICAgICAgQ2xpZW50cyBjYW4gY3JlYXRlIHdsX2J1ZmZlciBvYmplY3RzIHVzaW5nIHRoZSBjcmVhdGVfYnVmZmVyIHJlcXVlc3QuXG4gKiAgICAgICAgXG4gKi9cbmNsYXNzIEdyV2ViR2xQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICogICAgICAgICAgICAgICAgQ3JlYXRlIGEgd2ViX2dsX2J1ZmZlciBvYmplY3QuXG5cdCAqICAgICAgICAgICAgXG5cdCAqXG5cdCAqIEByZXR1cm4ge0dyV2ViR2xCdWZmZXJQcm94eX0gVGhlIGdyX3dlYl9nbCBidWZmZXIgdG8gY3JlYXRlLiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNyZWF0ZVdlYkdsQnVmZmVyICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAwLCBHcldlYkdsQnVmZmVyUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogICAgICAgICAgICAgICAgQ3JlYXRlIGEgd2xfYnVmZmVyIG9iamVjdCBmcm9tIGEgd2ViX2FycmF5X2J1ZmZlciBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgc3VyZmFjZS5cblx0ICogICAgICAgICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSBncldlYkdsQnVmZmVyIFRoZSBncl93ZWJfZ2xfYnVmZmVyIHRvIHdyYXAuIFxuXHQgKiBAcmV0dXJuIHtXbEJ1ZmZlclByb3h5fSBUaGUgYnVmZmVyIHRvIGNyZWF0ZS4gXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjcmVhdGVCdWZmZXIgKGdyV2ViR2xCdWZmZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAxLCBXbEJ1ZmZlclByb3h5LCBbbmV3T2JqZWN0KCksIG9iamVjdChncldlYkdsQnVmZmVyKV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7R3JXZWJHbEV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxufVxuR3JXZWJHbFByb3h5LnByb3RvY29sTmFtZSA9ICdncl93ZWJfZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IEdyV2ViR2xQcm94eVxuIiwiLypcbiAqXG4gKiAgICAgICAgQ29weXJpZ2h0IMKpIDIwMTkgRXJpayBEZSBSaWpja2VcbiAqXG4gKiAgICAgICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgICAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgICAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICAgICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgICAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICAgICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgICAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICAgICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgICAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgICAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgICAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgICAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgICAgICBTT0ZUV0FSRS5cbiAqICAgIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcldlYlNobUJ1ZmZlckV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqICAgICAgICAgICAgICAgIERldGFjaGVzIGEgcHJldmlvdXNseSBhdHRhY2hlZCBIVE1MNSBhcnJheSBidWZmZXIgZnJvbSB0aGUgY29tcG9zaXRvciBhbmQgcmV0dXJucyBpdCB0byB0aGUgY2xpZW50IHNvXG5cdCAqICAgICAgICAgICAgICAgIGl0IGNhbiBiZSByZXVzZWQgYWdhaW4gZm9yIHdyaXRpbmcuIEFmdGVyIGRldGFjaGluZywgdGhlIGFycmF5IGJ1ZmZlciBvd25lcnNoaXAgaXMgcGFzc2VkIGZyb21cblx0ICogICAgICAgICAgICAgICAgdGhlIGNvbXBvc2l0b3IgbWFpbiB0aHJlYWQgYmFjayB0byB0aGUgY2xpZW50LlxuXHQgKiAgICAgICAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge1dlYkZEfSBjb250ZW50cyBBbiBIVE1MNSBhcnJheSBidWZmZXIsIGRldGFjaGVkIGZyb20gdGhlIGNvbXBvc2l0b3IgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkZXRhY2goY29udGVudHMpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgICAgIENvcHlyaWdodCDCqSAyMDE5IEVyaWsgRGUgUmlqY2tlXG4gKlxuICogICAgICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICAgICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICAgICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgICAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICAgICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICAgICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgICAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICAgICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICAgICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgICAgICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICAgICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICAgICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgICAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICAgICAgU09GVFdBUkUuXG4gKiAgICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmNsYXNzIEdyV2ViU2htQnVmZmVyUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqICAgICAgICAgICAgICAgIEF0dGFjaGVzIGFuIEhUTUw1IGFycmF5IGJ1ZmZlciB0byB0aGUgY29tcG9zaXRvci4gQWZ0ZXIgYXR0YWNoaW5nLCB0aGUgYXJyYXkgYnVmZmVyIG93bmVyc2hpcCBpcyBwYXNzZWRcblx0ICogICAgICAgICAgICAgICAgdG8gdGhlIGNvbXBvc2l0b3IgbWFpbiB0aHJlYWQuIFRoZSBhcnJheSBidWZmZXIgY2FuIG5vdCBiZSB1c2VkIGZvciB3cml0aW5nIGFueW1vcmUgYnkgdGhlIGNsaWVudCBhc1xuXHQgKiAgICAgICAgICAgICAgICBwZXIgSFRNTDUgVHJhbnNmZXJhYmxlIG9iamVjdHMgc3BlYy5cblx0ICpcblx0ICogICAgICAgICAgICAgICAgVGhlIHBpeGVsIGZvcm1hdCBvZiB0aGUgYXR0YWNoZWQgYXJyYXkgYnVmZmVyIG11c3QgYWx3YXlzIGJlIFJHQkE4ODg4IGFzIHBlciBIVE1MNSBJbWFnZURhdGEgc3BlYy5cblx0ICogICAgICAgICAgICAgICAgU3RyaWRlIG11c3QgYWx3YXlzIGVxdWFsIHdpZHRoLlxuXHQgKiAgICAgICAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge1dlYkZEfSBjb250ZW50cyBBbiBIVE1MNSBhcnJheSBidWZmZXIgdG8gYXR0YWNoIHRvIHRoZSBjb21wb3NpdG9yLiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGF0dGFjaCAoY29udGVudHMpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbZmlsZURlc2NyaXB0b3IoY29udGVudHMpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtHcldlYlNobUJ1ZmZlckV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmRldGFjaChoKG1lc3NhZ2UpKVxuXHR9XG5cbn1cbkdyV2ViU2htQnVmZmVyUHJveHkucHJvdG9jb2xOYW1lID0gJ2dyX3dlYl9zaG1fYnVmZmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBHcldlYlNobUJ1ZmZlclByb3h5XG4iLCIvKlxuICpcbiAqICAgICAgICBDb3B5cmlnaHQgwqkgMjAxOSBFcmlrIERlIFJpamNrZVxuICpcbiAqICAgICAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAgICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICAgICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgICAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgICAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICAgICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgICAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICAgICAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICAgICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgICAgIFNPRlRXQVJFLlxuICogICAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgR3JXZWJTaG1CdWZmZXJQcm94eSBmcm9tICcuL0dyV2ViU2htQnVmZmVyUHJveHknXG5pbXBvcnQgV2xCdWZmZXJQcm94eSBmcm9tICcuL1dsQnVmZmVyUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgICAgICAgQSBzaW5nbGV0b24gZ2xvYmFsIG9iamVjdCB0aGF0IHByb3ZpZGVzIHN1cHBvcnQgZm9yIHNoYXJlZCBtZW1vcnkgdGhyb3VnaCBIVE1MNSBhcnJheSBidWZmZXJzLlxuICpcbiAqICAgICAgICAgICAgQ2xpZW50cyBjYW4gY3JlYXRlIHdsX2J1ZmZlciBvYmplY3RzIHVzaW5nIHRoZSBjcmVhdGVfYnVmZmVyIHJlcXVlc3QuXG4gKiAgICAgICAgXG4gKi9cbmNsYXNzIEdyV2ViU2htUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqICAgICAgICAgICAgICAgIENyZWF0ZSBhIGdyX3dlYl9zaG1fYnVmZmVyIG9iamVjdC5cblx0ICogICAgICAgICAgICBcblx0ICpcblx0ICogQHJldHVybiB7R3JXZWJTaG1CdWZmZXJQcm94eX0gd2ViIHNobSBidWZmZXIgdG8gY3JlYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y3JlYXRlV2ViQXJyYXlCdWZmZXIgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDAsIEdyV2ViU2htQnVmZmVyUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogICAgICAgICAgICAgICAgQ3JlYXRlIGEgd2xfYnVmZmVyIG9iamVjdCBmcm9tIGEgd2ViX2FycmF5X2J1ZmZlciBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgc3VyZmFjZS5cblx0ICogICAgICAgICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSB3ZWJBcnJheUJ1ZmZlciBUaGUgZ3Jfd2ViX2FycmF5X2J1ZmZlciB0byB3cmFwIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggQnVmZmVyIHdpZHRoLCBpbiBwaXhlbHMuIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEJ1ZmZlciBoZWlnaHQsIGluIHBpeGVscy4gXG5cdCAqIEByZXR1cm4ge1dsQnVmZmVyUHJveHl9IGJ1ZmZlciB0byBjcmVhdGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjcmVhdGVCdWZmZXIgKHdlYkFycmF5QnVmZmVyLCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMSwgV2xCdWZmZXJQcm94eSwgW25ld09iamVjdCgpLCBvYmplY3Qod2ViQXJyYXlCdWZmZXIpLCBpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7R3JXZWJTaG1FdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cbn1cbkdyV2ViU2htUHJveHkucHJvdG9jb2xOYW1lID0gJ2dyX3dlYl9zaG0nXG5cbmV4cG9ydCBkZWZhdWx0IEdyV2ViU2htUHJveHlcbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIDIwMTcgRXJpayBEZSBSaWpja2VcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuU09GVFdBUkUuXG4qL1xuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IFdsT2JqZWN0IH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eSBleHRlbmRzIFdsT2JqZWN0IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7RGlzcGxheX0gZGlzcGxheVxuICAgKiBAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn1pZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG4gICAgc3VwZXIoaWQpXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Rpc3BsYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgLyoqXG4gICAgICogQHR5cGUge0Nvbm5lY3Rpb259XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBjb25uZWN0aW9uXG4gICAgY29ubmVjdGlvbi5yZWdpc3RlcldsT2JqZWN0KHRoaXMpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBzdXBlci5kZXN0cm95KClcbiAgICB0aGlzLl9jb25uZWN0aW9uLnVucmVnaXN0ZXJXbE9iamVjdCh0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcGNvZGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJveHlDbGFzc1xuICAgKiBAcGFyYW0ge0FycmF5PHt2YWx1ZTogKiwgdHlwZTogc3RyaW5nLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfT59IGFyZ3NBcnJheVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfbWFyc2hhbGxDb25zdHJ1Y3RvciAoaWQsIG9wY29kZSwgcHJveHlDbGFzcywgYXJnc0FycmF5KSB7XG4gICAgLy8gY29uc3RydWN0IG5ldyBvYmplY3RcbiAgICBjb25zdCBwcm94eSA9IG5ldyBwcm94eUNsYXNzKHRoaXMuZGlzcGxheSwgdGhpcy5fY29ubmVjdGlvbiwgdGhpcy5kaXNwbGF5LmdlbmVyYXRlTmV4dElkKCkpXG5cbiAgICAvLyBkZXRlcm1pbmUgcmVxdWlyZWQgd2lyZSBtZXNzYWdlIGxlbmd0aFxuICAgIGxldCBzaXplID0gNCArIDIgKyAyIC8vIGlkK3NpemUrb3Bjb2RlXG4gICAgYXJnc0FycmF5LmZvckVhY2goYXJnID0+IHtcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ24nKSB7XG4gICAgICAgIGFyZy52YWx1ZSA9IHByb3h5LmlkXG4gICAgICB9XG4gICAgICBzaXplICs9IGFyZy5zaXplXG4gICAgfSlcblxuICAgIHRoaXMuX2Nvbm5lY3Rpb24ubWFyc2hhbGxNc2coaWQsIG9wY29kZSwgc2l6ZSwgYXJnc0FycmF5KVxuXG4gICAgcmV0dXJuIHByb3h5XG4gIH1cblxuICAvKipcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wY29kZVxuICAgKiBAcGFyYW0ge0FycmF5PHt2YWx1ZTogKiwgdHlwZTogc3RyaW5nLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfT59IGFyZ3NBcnJheVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfbWFyc2hhbGwgKGlkLCBvcGNvZGUsIGFyZ3NBcnJheSkge1xuICAgIC8vIGRldGVybWluZSByZXF1aXJlZCB3aXJlIG1lc3NhZ2UgbGVuZ3RoXG4gICAgbGV0IHNpemUgPSA0ICsgMiArIDIgIC8vIGlkK3NpemUrb3Bjb2RlXG4gICAgYXJnc0FycmF5LmZvckVhY2goYXJnID0+IHNpemUgKz0gYXJnLnNpemUpXG4gICAgdGhpcy5fY29ubmVjdGlvbi5tYXJzaGFsbE1zZyhpZCwgb3Bjb2RlLCBzaXplLCBhcmdzQXJyYXkpXG4gIH1cbn1cblxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xCdWZmZXJFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2VudCB3aGVuIHRoaXMgd2xfYnVmZmVyIGlzIG5vIGxvbmdlciB1c2VkIGJ5IHRoZSBjb21wb3NpdG9yLlxuXHQgKlx0VGhlIGNsaWVudCBpcyBub3cgZnJlZSB0byByZXVzZSBvciBkZXN0cm95IHRoaXMgYnVmZmVyIGFuZCBpdHNcblx0ICpcdGJhY2tpbmcgc3RvcmFnZS5cblx0ICpcblx0ICpcdElmIGEgY2xpZW50IHJlY2VpdmVzIGEgcmVsZWFzZSBldmVudCBiZWZvcmUgdGhlIGZyYW1lIGNhbGxiYWNrXG5cdCAqXHRyZXF1ZXN0ZWQgaW4gdGhlIHNhbWUgd2xfc3VyZmFjZS5jb21taXQgdGhhdCBhdHRhY2hlcyB0aGlzXG5cdCAqXHR3bF9idWZmZXIgdG8gYSBzdXJmYWNlLCB0aGVuIHRoZSBjbGllbnQgaXMgaW1tZWRpYXRlbHkgZnJlZSB0b1xuXHQgKlx0cmV1c2UgdGhlIGJ1ZmZlciBhbmQgaXRzIGJhY2tpbmcgc3RvcmFnZSwgYW5kIGRvZXMgbm90IG5lZWQgYVxuXHQgKlx0c2Vjb25kIGJ1ZmZlciBmb3IgdGhlIG5leHQgc3VyZmFjZSBjb250ZW50IHVwZGF0ZS4gVHlwaWNhbGx5XG5cdCAqXHR0aGlzIGlzIHBvc3NpYmxlLCB3aGVuIHRoZSBjb21wb3NpdG9yIG1haW50YWlucyBhIGNvcHkgb2YgdGhlXG5cdCAqXHR3bF9zdXJmYWNlIGNvbnRlbnRzLCBlLmcuIGFzIGEgR0wgdGV4dHVyZS4gVGhpcyBpcyBhbiBpbXBvcnRhbnRcblx0ICpcdG9wdGltaXphdGlvbiBmb3IgR0woRVMpIGNvbXBvc2l0b3JzIHdpdGggd2xfc2htIGNsaWVudHMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRyZWxlYXNlKCkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgQSBidWZmZXIgcHJvdmlkZXMgdGhlIGNvbnRlbnQgZm9yIGEgd2xfc3VyZmFjZS4gQnVmZmVycyBhcmVcbiAqICAgICAgY3JlYXRlZCB0aHJvdWdoIGZhY3RvcnkgaW50ZXJmYWNlcyBzdWNoIGFzIHdsX2RybSwgd2xfc2htIG9yXG4gKiAgICAgIHNpbWlsYXIuIEl0IGhhcyBhIHdpZHRoIGFuZCBhIGhlaWdodCBhbmQgY2FuIGJlIGF0dGFjaGVkIHRvIGFcbiAqICAgICAgd2xfc3VyZmFjZSwgYnV0IHRoZSBtZWNoYW5pc20gYnkgd2hpY2ggYSBjbGllbnQgcHJvdmlkZXMgYW5kXG4gKiAgICAgIHVwZGF0ZXMgdGhlIGNvbnRlbnRzIGlzIGRlZmluZWQgYnkgdGhlIGJ1ZmZlciBmYWN0b3J5IGludGVyZmFjZS5cbiAqICAgIFxuICovXG5jbGFzcyBXbEJ1ZmZlclByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0RGVzdHJveSBhIGJ1ZmZlci4gSWYgYW5kIGhvdyB5b3UgbmVlZCB0byByZWxlYXNlIHRoZSBiYWNraW5nXG5cdCAqXHRzdG9yYWdlIGlzIGRlZmluZWQgYnkgdGhlIGJ1ZmZlciBmYWN0b3J5IGludGVyZmFjZS5cblx0ICpcblx0ICpcdEZvciBwb3NzaWJsZSBzaWRlLWVmZmVjdHMgdG8gYSBzdXJmYWNlLCBzZWUgd2xfc3VyZmFjZS5hdHRhY2guXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkZXN0cm95ICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbEJ1ZmZlckV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLnJlbGVhc2UoKVxuXHR9XG5cbn1cbldsQnVmZmVyUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX2J1ZmZlcidcblxuZXhwb3J0IGRlZmF1bHQgV2xCdWZmZXJQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsQ2FsbGJhY2tFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Tm90aWZ5IHRoZSBjbGllbnQgd2hlbiB0aGUgcmVsYXRlZCByZXF1ZXN0IGlzIGRvbmUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFja0RhdGEgcmVxdWVzdC1zcGVjaWZpYyBkYXRhIGZvciB0aGUgY2FsbGJhY2sgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkb25lKGNhbGxiYWNrRGF0YSkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgQ2xpZW50cyBjYW4gaGFuZGxlIHRoZSAnZG9uZScgZXZlbnQgdG8gZ2V0IG5vdGlmaWVkIHdoZW5cbiAqICAgICAgdGhlIHJlbGF0ZWQgcmVxdWVzdCBpcyBkb25lLlxuICogICAgXG4gKi9cbmNsYXNzIFdsQ2FsbGJhY2tQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xDYWxsYmFja0V2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmRvbmUodShtZXNzYWdlKSlcblx0fVxuXG59XG5XbENhbGxiYWNrUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX2NhbGxiYWNrJ1xuXG5leHBvcnQgZGVmYXVsdCBXbENhbGxiYWNrUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuaW1wb3J0IFdsU3VyZmFjZVByb3h5IGZyb20gJy4vV2xTdXJmYWNlUHJveHknXG5pbXBvcnQgV2xSZWdpb25Qcm94eSBmcm9tICcuL1dsUmVnaW9uUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgQSBjb21wb3NpdG9yLiAgVGhpcyBvYmplY3QgaXMgYSBzaW5nbGV0b24gZ2xvYmFsLiAgVGhlXG4gKiAgICAgIGNvbXBvc2l0b3IgaXMgaW4gY2hhcmdlIG9mIGNvbWJpbmluZyB0aGUgY29udGVudHMgb2YgbXVsdGlwbGVcbiAqICAgICAgc3VyZmFjZXMgaW50byBvbmUgZGlzcGxheWFibGUgb3V0cHV0LlxuICogICAgXG4gKi9cbmNsYXNzIFdsQ29tcG9zaXRvclByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0QXNrIHRoZSBjb21wb3NpdG9yIHRvIGNyZWF0ZSBhIG5ldyBzdXJmYWNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtXbFN1cmZhY2VQcm94eX0gdGhlIG5ldyBzdXJmYWNlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y3JlYXRlU3VyZmFjZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMCwgV2xTdXJmYWNlUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdEFzayB0aGUgY29tcG9zaXRvciB0byBjcmVhdGUgYSBuZXcgcmVnaW9uLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtXbFJlZ2lvblByb3h5fSB0aGUgbmV3IHJlZ2lvbiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNyZWF0ZVJlZ2lvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMSwgV2xSZWdpb25Qcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbENvbXBvc2l0b3JFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cbn1cbldsQ29tcG9zaXRvclByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9jb21wb3NpdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCBXbENvbXBvc2l0b3JQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsRGF0YURldmljZUV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgZGF0YV9vZmZlciBldmVudCBpbnRyb2R1Y2VzIGEgbmV3IHdsX2RhdGFfb2ZmZXIgb2JqZWN0LFxuXHQgKlx0d2hpY2ggd2lsbCBzdWJzZXF1ZW50bHkgYmUgdXNlZCBpbiBlaXRoZXIgdGhlXG5cdCAqXHRkYXRhX2RldmljZS5lbnRlciBldmVudCAoZm9yIGRyYWctYW5kLWRyb3ApIG9yIHRoZVxuXHQgKlx0ZGF0YV9kZXZpY2Uuc2VsZWN0aW9uIGV2ZW50IChmb3Igc2VsZWN0aW9ucykuICBJbW1lZGlhdGVseVxuXHQgKlx0Zm9sbG93aW5nIHRoZSBkYXRhX2RldmljZV9kYXRhX29mZmVyIGV2ZW50LCB0aGUgbmV3IGRhdGFfb2ZmZXJcblx0ICpcdG9iamVjdCB3aWxsIHNlbmQgb3V0IGRhdGFfb2ZmZXIub2ZmZXIgZXZlbnRzIHRvIGRlc2NyaWJlIHRoZVxuXHQgKlx0bWltZSB0eXBlcyBpdCBvZmZlcnMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCB0aGUgbmV3IGRhdGFfb2ZmZXIgb2JqZWN0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGF0YU9mZmVyKGlkKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpcyBzZW50IHdoZW4gYW4gYWN0aXZlIGRyYWctYW5kLWRyb3AgcG9pbnRlciBlbnRlcnNcblx0ICpcdGEgc3VyZmFjZSBvd25lZCBieSB0aGUgY2xpZW50LiAgVGhlIHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIGF0XG5cdCAqXHRlbnRlciB0aW1lIGlzIHByb3ZpZGVkIGJ5IHRoZSB4IGFuZCB5IGFyZ3VtZW50cywgaW4gc3VyZmFjZS1sb2NhbFxuXHQgKlx0Y29vcmRpbmF0ZXMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgZW50ZXIgZXZlbnQgXG5cdCAqIEBwYXJhbSB7Kn0gc3VyZmFjZSBjbGllbnQgc3VyZmFjZSBlbnRlcmVkIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB4IHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSB5IHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0gez8qfSBpZCBzb3VyY2UgZGF0YV9vZmZlciBvYmplY3QgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRlbnRlcihzZXJpYWwsIHN1cmZhY2UsIHgsIHksIGlkKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpcyBzZW50IHdoZW4gdGhlIGRyYWctYW5kLWRyb3AgcG9pbnRlciBsZWF2ZXMgdGhlXG5cdCAqXHRzdXJmYWNlIGFuZCB0aGUgc2Vzc2lvbiBlbmRzLiAgVGhlIGNsaWVudCBtdXN0IGRlc3Ryb3kgdGhlXG5cdCAqXHR3bF9kYXRhX29mZmVyIGludHJvZHVjZWQgYXQgZW50ZXIgdGltZSBhdCB0aGlzIHBvaW50LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0bGVhdmUoKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpcyBzZW50IHdoZW4gdGhlIGRyYWctYW5kLWRyb3AgcG9pbnRlciBtb3ZlcyB3aXRoaW5cblx0ICpcdHRoZSBjdXJyZW50bHkgZm9jdXNlZCBzdXJmYWNlLiBUaGUgbmV3IHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyXG5cdCAqXHRpcyBwcm92aWRlZCBieSB0aGUgeCBhbmQgeSBhcmd1bWVudHMsIGluIHN1cmZhY2UtbG9jYWxcblx0ICpcdGNvb3JkaW5hdGVzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZCBncmFudWxhcml0eSBcblx0ICogQHBhcmFtIHtGaXhlZH0geCBzdXJmYWNlLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtGaXhlZH0geSBzdXJmYWNlLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdG1vdGlvbih0aW1lLCB4LCB5KSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIGV2ZW50IGlzIHNlbnQgd2hlbiBhIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uIGlzIGVuZGVkXG5cdCAqXHRiZWNhdXNlIHRoZSBpbXBsaWNpdCBncmFiIGlzIHJlbW92ZWQuXG5cdCAqXG5cdCAqXHRUaGUgZHJhZy1hbmQtZHJvcCBkZXN0aW5hdGlvbiBpcyBleHBlY3RlZCB0byBob25vciB0aGUgbGFzdCBhY3Rpb25cblx0ICpcdHJlY2VpdmVkIHRocm91Z2ggd2xfZGF0YV9vZmZlci5hY3Rpb24sIGlmIHRoZSByZXN1bHRpbmcgYWN0aW9uIGlzXG5cdCAqXHRcImNvcHlcIiBvciBcIm1vdmVcIiwgdGhlIGRlc3RpbmF0aW9uIGNhbiBzdGlsbCBwZXJmb3JtXG5cdCAqXHR3bF9kYXRhX29mZmVyLnJlY2VpdmUgcmVxdWVzdHMsIGFuZCBpcyBleHBlY3RlZCB0byBlbmQgYWxsXG5cdCAqXHR0cmFuc2ZlcnMgd2l0aCBhIHdsX2RhdGFfb2ZmZXIuZmluaXNoIHJlcXVlc3QuXG5cdCAqXG5cdCAqXHRJZiB0aGUgcmVzdWx0aW5nIGFjdGlvbiBpcyBcImFza1wiLCB0aGUgYWN0aW9uIHdpbGwgbm90IGJlIGNvbnNpZGVyZWRcblx0ICpcdGZpbmFsLiBUaGUgZHJhZy1hbmQtZHJvcCBkZXN0aW5hdGlvbiBpcyBleHBlY3RlZCB0byBwZXJmb3JtIG9uZSBsYXN0XG5cdCAqXHR3bF9kYXRhX29mZmVyLnNldF9hY3Rpb25zIHJlcXVlc3QsIG9yIHdsX2RhdGFfb2ZmZXIuZGVzdHJveSBpbiBvcmRlclxuXHQgKlx0dG8gY2FuY2VsIHRoZSBvcGVyYXRpb24uXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkcm9wKCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBzZWxlY3Rpb24gZXZlbnQgaXMgc2VudCBvdXQgdG8gbm90aWZ5IHRoZSBjbGllbnQgb2YgYSBuZXdcblx0ICpcdHdsX2RhdGFfb2ZmZXIgZm9yIHRoZSBzZWxlY3Rpb24gZm9yIHRoaXMgZGV2aWNlLiAgVGhlXG5cdCAqXHRkYXRhX2RldmljZS5kYXRhX29mZmVyIGFuZCB0aGUgZGF0YV9vZmZlci5vZmZlciBldmVudHMgYXJlXG5cdCAqXHRzZW50IG91dCBpbW1lZGlhdGVseSBiZWZvcmUgdGhpcyBldmVudCB0byBpbnRyb2R1Y2UgdGhlIGRhdGFcblx0ICpcdG9mZmVyIG9iamVjdC4gIFRoZSBzZWxlY3Rpb24gZXZlbnQgaXMgc2VudCB0byBhIGNsaWVudFxuXHQgKlx0aW1tZWRpYXRlbHkgYmVmb3JlIHJlY2VpdmluZyBrZXlib2FyZCBmb2N1cyBhbmQgd2hlbiBhIG5ld1xuXHQgKlx0c2VsZWN0aW9uIGlzIHNldCB3aGlsZSB0aGUgY2xpZW50IGhhcyBrZXlib2FyZCBmb2N1cy4gIFRoZVxuXHQgKlx0ZGF0YV9vZmZlciBpcyB2YWxpZCB1bnRpbCBhIG5ldyBkYXRhX29mZmVyIG9yIE5VTEwgaXMgcmVjZWl2ZWRcblx0ICpcdG9yIHVudGlsIHRoZSBjbGllbnQgbG9zZXMga2V5Ym9hcmQgZm9jdXMuICBUaGUgY2xpZW50IG11c3Rcblx0ICpcdGRlc3Ryb3kgdGhlIHByZXZpb3VzIHNlbGVjdGlvbiBkYXRhX29mZmVyLCBpZiBhbnksIHVwb24gcmVjZWl2aW5nXG5cdCAqXHR0aGlzIGV2ZW50LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0gez8qfSBpZCBzZWxlY3Rpb24gZGF0YV9vZmZlciBvYmplY3QgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZWxlY3Rpb24oaWQpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuaW1wb3J0IFdsRGF0YVNvdXJjZVByb3h5IGZyb20gJy4vV2xEYXRhU291cmNlUHJveHknXG5pbXBvcnQgV2xEYXRhRGV2aWNlUHJveHkgZnJvbSAnLi9XbERhdGFEZXZpY2VQcm94eSdcblxuLyoqXG4gKlxuICogICAgICBUaGUgd2xfZGF0YV9kZXZpY2VfbWFuYWdlciBpcyBhIHNpbmdsZXRvbiBnbG9iYWwgb2JqZWN0IHRoYXRcbiAqICAgICAgcHJvdmlkZXMgYWNjZXNzIHRvIGludGVyLWNsaWVudCBkYXRhIHRyYW5zZmVyIG1lY2hhbmlzbXMgc3VjaCBhc1xuICogICAgICBjb3B5LWFuZC1wYXN0ZSBhbmQgZHJhZy1hbmQtZHJvcC4gIFRoZXNlIG1lY2hhbmlzbXMgYXJlIHRpZWQgdG9cbiAqICAgICAgYSB3bF9zZWF0IGFuZCB0aGlzIGludGVyZmFjZSBsZXRzIGEgY2xpZW50IGdldCBhIHdsX2RhdGFfZGV2aWNlXG4gKiAgICAgIGNvcnJlc3BvbmRpbmcgdG8gYSB3bF9zZWF0LlxuICpcbiAqICAgICAgRGVwZW5kaW5nIG9uIHRoZSB2ZXJzaW9uIGJvdW5kLCB0aGUgb2JqZWN0cyBjcmVhdGVkIGZyb20gdGhlIGJvdW5kXG4gKiAgICAgIHdsX2RhdGFfZGV2aWNlX21hbmFnZXIgb2JqZWN0IHdpbGwgaGF2ZSBkaWZmZXJlbnQgcmVxdWlyZW1lbnRzIGZvclxuICogICAgICBmdW5jdGlvbmluZyBwcm9wZXJseS4gU2VlIHdsX2RhdGFfc291cmNlLnNldF9hY3Rpb25zLFxuICogICAgICB3bF9kYXRhX29mZmVyLmFjY2VwdCBhbmQgd2xfZGF0YV9vZmZlci5maW5pc2ggZm9yIGRldGFpbHMuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xEYXRhRGV2aWNlTWFuYWdlclByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Q3JlYXRlIGEgbmV3IGRhdGEgc291cmNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtXbERhdGFTb3VyY2VQcm94eX0gZGF0YSBzb3VyY2UgdG8gY3JlYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y3JlYXRlRGF0YVNvdXJjZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMCwgV2xEYXRhU291cmNlUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdENyZWF0ZSBhIG5ldyBkYXRhIGRldmljZSBmb3IgYSBnaXZlbiBzZWF0LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNlYXQgc2VhdCBhc3NvY2lhdGVkIHdpdGggdGhlIGRhdGEgZGV2aWNlIFxuXHQgKiBAcmV0dXJuIHtXbERhdGFEZXZpY2VQcm94eX0gZGF0YSBkZXZpY2UgdG8gY3JlYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z2V0RGF0YURldmljZSAoc2VhdCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDEsIFdsRGF0YURldmljZVByb3h5LCBbbmV3T2JqZWN0KCksIG9iamVjdChzZWF0KV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xEYXRhRGV2aWNlTWFuYWdlckV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxufVxuV2xEYXRhRGV2aWNlTWFuYWdlclByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9kYXRhX2RldmljZV9tYW5hZ2VyJ1xuXG5XbERhdGFEZXZpY2VNYW5hZ2VyUHJveHkuRG5kQWN0aW9uID0ge1xuICAvKipcbiAgICogbm8gYWN0aW9uXG4gICAqL1xuICBub25lOiAwLFxuICAvKipcbiAgICogY29weSBhY3Rpb25cbiAgICovXG4gIGNvcHk6IDEsXG4gIC8qKlxuICAgKiBtb3ZlIGFjdGlvblxuICAgKi9cbiAgbW92ZTogMixcbiAgLyoqXG4gICAqIGFzayBhY3Rpb25cbiAgICovXG4gIGFzazogNFxufVxuXG5leHBvcnQgZGVmYXVsdCBXbERhdGFEZXZpY2VNYW5hZ2VyUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuaW1wb3J0IFdsRGF0YU9mZmVyUHJveHkgZnJvbSAnLi9XbERhdGFPZmZlclByb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoZXJlIGlzIG9uZSB3bF9kYXRhX2RldmljZSBwZXIgc2VhdCB3aGljaCBjYW4gYmUgb2J0YWluZWRcbiAqICAgICAgZnJvbSB0aGUgZ2xvYmFsIHdsX2RhdGFfZGV2aWNlX21hbmFnZXIgc2luZ2xldG9uLlxuICpcbiAqICAgICAgQSB3bF9kYXRhX2RldmljZSBwcm92aWRlcyBhY2Nlc3MgdG8gaW50ZXItY2xpZW50IGRhdGEgdHJhbnNmZXJcbiAqICAgICAgbWVjaGFuaXNtcyBzdWNoIGFzIGNvcHktYW5kLXBhc3RlIGFuZCBkcmFnLWFuZC1kcm9wLlxuICogICAgXG4gKi9cbmNsYXNzIFdsRGF0YURldmljZVByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGFza3MgdGhlIGNvbXBvc2l0b3IgdG8gc3RhcnQgYSBkcmFnLWFuZC1kcm9wXG5cdCAqXHRvcGVyYXRpb24gb24gYmVoYWxmIG9mIHRoZSBjbGllbnQuXG5cdCAqXG5cdCAqXHRUaGUgc291cmNlIGFyZ3VtZW50IGlzIHRoZSBkYXRhIHNvdXJjZSB0aGF0IHByb3ZpZGVzIHRoZSBkYXRhXG5cdCAqXHRmb3IgdGhlIGV2ZW50dWFsIGRhdGEgdHJhbnNmZXIuIElmIHNvdXJjZSBpcyBOVUxMLCBlbnRlciwgbGVhdmVcblx0ICpcdGFuZCBtb3Rpb24gZXZlbnRzIGFyZSBzZW50IG9ubHkgdG8gdGhlIGNsaWVudCB0aGF0IGluaXRpYXRlZCB0aGVcblx0ICpcdGRyYWcgYW5kIHRoZSBjbGllbnQgaXMgZXhwZWN0ZWQgdG8gaGFuZGxlIHRoZSBkYXRhIHBhc3Npbmdcblx0ICpcdGludGVybmFsbHkuXG5cdCAqXG5cdCAqXHRUaGUgb3JpZ2luIHN1cmZhY2UgaXMgdGhlIHN1cmZhY2Ugd2hlcmUgdGhlIGRyYWcgb3JpZ2luYXRlcyBhbmRcblx0ICpcdHRoZSBjbGllbnQgbXVzdCBoYXZlIGFuIGFjdGl2ZSBpbXBsaWNpdCBncmFiIHRoYXQgbWF0Y2hlcyB0aGVcblx0ICpcdHNlcmlhbC5cblx0ICpcblx0ICpcdFRoZSBpY29uIHN1cmZhY2UgaXMgYW4gb3B0aW9uYWwgKGNhbiBiZSBOVUxMKSBzdXJmYWNlIHRoYXRcblx0ICpcdHByb3ZpZGVzIGFuIGljb24gdG8gYmUgbW92ZWQgYXJvdW5kIHdpdGggdGhlIGN1cnNvci4gIEluaXRpYWxseSxcblx0ICpcdHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIGljb24gc3VyZmFjZSBpcyBwbGFjZWQgYXQgdGhlIGN1cnNvclxuXHQgKlx0aG90c3BvdCwgYnV0IHN1YnNlcXVlbnQgd2xfc3VyZmFjZS5hdHRhY2ggcmVxdWVzdCBjYW4gbW92ZSB0aGVcblx0ICpcdHJlbGF0aXZlIHBvc2l0aW9uLiBBdHRhY2ggcmVxdWVzdHMgbXVzdCBiZSBjb25maXJtZWQgd2l0aFxuXHQgKlx0d2xfc3VyZmFjZS5jb21taXQgYXMgdXN1YWwuIFRoZSBpY29uIHN1cmZhY2UgaXMgZ2l2ZW4gdGhlIHJvbGUgb2Zcblx0ICpcdGEgZHJhZy1hbmQtZHJvcCBpY29uLiBJZiB0aGUgaWNvbiBzdXJmYWNlIGFscmVhZHkgaGFzIGFub3RoZXIgcm9sZSxcblx0ICpcdGl0IHJhaXNlcyBhIHByb3RvY29sIGVycm9yLlxuXHQgKlxuXHQgKlx0VGhlIGN1cnJlbnQgYW5kIHBlbmRpbmcgaW5wdXQgcmVnaW9ucyBvZiB0aGUgaWNvbiB3bF9zdXJmYWNlIGFyZVxuXHQgKlx0Y2xlYXJlZCwgYW5kIHdsX3N1cmZhY2Uuc2V0X2lucHV0X3JlZ2lvbiBpcyBpZ25vcmVkIHVudGlsIHRoZVxuXHQgKlx0d2xfc3VyZmFjZSBpcyBubyBsb25nZXIgdXNlZCBhcyB0aGUgaWNvbiBzdXJmYWNlLiBXaGVuIHRoZSB1c2Vcblx0ICpcdGFzIGFuIGljb24gZW5kcywgdGhlIGN1cnJlbnQgYW5kIHBlbmRpbmcgaW5wdXQgcmVnaW9ucyBiZWNvbWVcblx0ICpcdHVuZGVmaW5lZCwgYW5kIHRoZSB3bF9zdXJmYWNlIGlzIHVubWFwcGVkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0gez8qfSBzb3VyY2UgZGF0YSBzb3VyY2UgZm9yIHRoZSBldmVudHVhbCB0cmFuc2ZlciBcblx0ICogQHBhcmFtIHsqfSBvcmlnaW4gc3VyZmFjZSB3aGVyZSB0aGUgZHJhZyBvcmlnaW5hdGVzIFxuXHQgKiBAcGFyYW0gez8qfSBpY29uIGRyYWctYW5kLWRyb3AgaWNvbiBzdXJmYWNlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGltcGxpY2l0IGdyYWIgb24gdGhlIG9yaWdpbiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHN0YXJ0RHJhZyAoc291cmNlLCBvcmlnaW4sIGljb24sIHNlcmlhbCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtvYmplY3RPcHRpb25hbChzb3VyY2UpLCBvYmplY3Qob3JpZ2luKSwgb2JqZWN0T3B0aW9uYWwoaWNvbiksIHVpbnQoc2VyaWFsKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBhc2tzIHRoZSBjb21wb3NpdG9yIHRvIHNldCB0aGUgc2VsZWN0aW9uXG5cdCAqXHR0byB0aGUgZGF0YSBmcm9tIHRoZSBzb3VyY2Ugb24gYmVoYWxmIG9mIHRoZSBjbGllbnQuXG5cdCAqXG5cdCAqXHRUbyB1bnNldCB0aGUgc2VsZWN0aW9uLCBzZXQgdGhlIHNvdXJjZSB0byBOVUxMLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0gez8qfSBzb3VyY2UgZGF0YSBzb3VyY2UgZm9yIHRoZSBzZWxlY3Rpb24gXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhpcyByZXF1ZXN0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0U2VsZWN0aW9uIChzb3VyY2UsIHNlcmlhbCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtvYmplY3RPcHRpb25hbChzb3VyY2UpLCB1aW50KHNlcmlhbCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgZGVzdHJveXMgdGhlIGRhdGEgZGV2aWNlLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMlxuXHQgKlxuXHQgKi9cblx0cmVsZWFzZSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMiwgW10pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xEYXRhRGV2aWNlRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZGF0YU9mZmVyKG5ldyBXbERhdGFPZmZlclByb3h5KHRoaXMuX2Nvbm5lY3Rpb24sIG4obWVzc2FnZSkpKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5lbnRlcih1KG1lc3NhZ2UpLCBvKG1lc3NhZ2UsIGZhbHNlLCB0aGlzLl9jb25uZWN0aW9uKSwgZihtZXNzYWdlKSwgZihtZXNzYWdlKSwgbyhtZXNzYWdlLCB0cnVlLCB0aGlzLl9jb25uZWN0aW9uKSlcblx0fVxuXG5cdGFzeW5jIFsyXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIubGVhdmUoKVxuXHR9XG5cblx0YXN5bmMgWzNdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5tb3Rpb24odShtZXNzYWdlKSwgZihtZXNzYWdlKSwgZihtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFs0XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZHJvcCgpXG5cdH1cblxuXHRhc3luYyBbNV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLnNlbGVjdGlvbihvKG1lc3NhZ2UsIHRydWUsIHRoaXMuX2Nvbm5lY3Rpb24pKVxuXHR9XG5cbn1cbldsRGF0YURldmljZVByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9kYXRhX2RldmljZSdcblxuV2xEYXRhRGV2aWNlUHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiBnaXZlbiB3bF9zdXJmYWNlIGhhcyBhbm90aGVyIHJvbGVcbiAgICovXG4gIHJvbGU6IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2xEYXRhRGV2aWNlUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXbERhdGFPZmZlckV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZW50IGltbWVkaWF0ZWx5IGFmdGVyIGNyZWF0aW5nIHRoZSB3bF9kYXRhX29mZmVyIG9iamVjdC4gIE9uZVxuXHQgKlx0ZXZlbnQgcGVyIG9mZmVyZWQgbWltZSB0eXBlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWltZVR5cGUgb2ZmZXJlZCBtaW1lIHR5cGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRvZmZlcihtaW1lVHlwZSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgaW5kaWNhdGVzIHRoZSBhY3Rpb25zIG9mZmVyZWQgYnkgdGhlIGRhdGEgc291cmNlLiBJdFxuXHQgKlx0d2lsbCBiZSBzZW50IHJpZ2h0IGFmdGVyIHdsX2RhdGFfZGV2aWNlLmVudGVyLCBvciBhbnl0aW1lIHRoZSBzb3VyY2Vcblx0ICpcdHNpZGUgY2hhbmdlcyBpdHMgb2ZmZXJlZCBhY3Rpb25zIHRocm91Z2ggd2xfZGF0YV9zb3VyY2Uuc2V0X2FjdGlvbnMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzb3VyY2VBY3Rpb25zIGFjdGlvbnMgb2ZmZXJlZCBieSB0aGUgZGF0YSBzb3VyY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRzb3VyY2VBY3Rpb25zKHNvdXJjZUFjdGlvbnMpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGluZGljYXRlcyB0aGUgYWN0aW9uIHNlbGVjdGVkIGJ5IHRoZSBjb21wb3NpdG9yIGFmdGVyXG5cdCAqXHRtYXRjaGluZyB0aGUgc291cmNlL2Rlc3RpbmF0aW9uIHNpZGUgYWN0aW9ucy4gT25seSBvbmUgYWN0aW9uIChvclxuXHQgKlx0bm9uZSkgd2lsbCBiZSBvZmZlcmVkIGhlcmUuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGNhbiBiZSBlbWl0dGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyB0aGUgZHJhZy1hbmQtZHJvcFxuXHQgKlx0b3BlcmF0aW9uIGluIHJlc3BvbnNlIHRvIGRlc3RpbmF0aW9uIHNpZGUgYWN0aW9uIGNoYW5nZXMgdGhyb3VnaFxuXHQgKlx0d2xfZGF0YV9vZmZlci5zZXRfYWN0aW9ucy5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgd2lsbCBubyBsb25nZXIgYmUgZW1pdHRlZCBhZnRlciB3bF9kYXRhX2RldmljZS5kcm9wXG5cdCAqXHRoYXBwZW5lZCBvbiB0aGUgZHJhZy1hbmQtZHJvcCBkZXN0aW5hdGlvbiwgdGhlIGNsaWVudCBtdXN0XG5cdCAqXHRob25vciB0aGUgbGFzdCBhY3Rpb24gcmVjZWl2ZWQsIG9yIHRoZSBsYXN0IHByZWZlcnJlZCBvbmUgc2V0XG5cdCAqXHR0aHJvdWdoIHdsX2RhdGFfb2ZmZXIuc2V0X2FjdGlvbnMgd2hlbiBoYW5kbGluZyBhbiBcImFza1wiIGFjdGlvbi5cblx0ICpcblx0ICpcdENvbXBvc2l0b3JzIG1heSBhbHNvIGNoYW5nZSB0aGUgc2VsZWN0ZWQgYWN0aW9uIG9uIHRoZSBmbHksIG1haW5seVxuXHQgKlx0aW4gcmVzcG9uc2UgdG8ga2V5Ym9hcmQgbW9kaWZpZXIgY2hhbmdlcyBkdXJpbmcgdGhlIGRyYWctYW5kLWRyb3Bcblx0ICpcdG9wZXJhdGlvbi5cblx0ICpcblx0ICpcdFRoZSBtb3N0IHJlY2VudCBhY3Rpb24gcmVjZWl2ZWQgaXMgYWx3YXlzIHRoZSB2YWxpZCBvbmUuIFByaW9yIHRvXG5cdCAqXHRyZWNlaXZpbmcgd2xfZGF0YV9kZXZpY2UuZHJvcCwgdGhlIGNob3NlbiBhY3Rpb24gbWF5IGNoYW5nZSAoZS5nLlxuXHQgKlx0ZHVlIHRvIGtleWJvYXJkIG1vZGlmaWVycyBiZWluZyBwcmVzc2VkKS4gQXQgdGhlIHRpbWUgb2YgcmVjZWl2aW5nXG5cdCAqXHR3bF9kYXRhX2RldmljZS5kcm9wIHRoZSBkcmFnLWFuZC1kcm9wIGRlc3RpbmF0aW9uIG11c3QgaG9ub3IgdGhlXG5cdCAqXHRsYXN0IGFjdGlvbiByZWNlaXZlZC5cblx0ICpcblx0ICpcdEFjdGlvbiBjaGFuZ2VzIG1heSBzdGlsbCBoYXBwZW4gYWZ0ZXIgd2xfZGF0YV9kZXZpY2UuZHJvcCxcblx0ICpcdGVzcGVjaWFsbHkgb24gXCJhc2tcIiBhY3Rpb25zLCB3aGVyZSB0aGUgZHJhZy1hbmQtZHJvcCBkZXN0aW5hdGlvblxuXHQgKlx0bWF5IGNob29zZSBhbm90aGVyIGFjdGlvbiBhZnRlcndhcmRzLiBBY3Rpb24gY2hhbmdlcyBoYXBwZW5pbmdcblx0ICpcdGF0IHRoaXMgc3RhZ2UgYXJlIGFsd2F5cyB0aGUgcmVzdWx0IG9mIGludGVyLWNsaWVudCBuZWdvdGlhdGlvbiwgdGhlXG5cdCAqXHRjb21wb3NpdG9yIHNoYWxsIG5vIGxvbmdlciBiZSBhYmxlIHRvIGluZHVjZSBhIGRpZmZlcmVudCBhY3Rpb24uXG5cdCAqXG5cdCAqXHRVcG9uIFwiYXNrXCIgYWN0aW9ucywgaXQgaXMgZXhwZWN0ZWQgdGhhdCB0aGUgZHJhZy1hbmQtZHJvcCBkZXN0aW5hdGlvblxuXHQgKlx0bWF5IHBvdGVudGlhbGx5IGNob29zZSBhIGRpZmZlcmVudCBhY3Rpb24gYW5kL29yIG1pbWUgdHlwZSxcblx0ICpcdGJhc2VkIG9uIHdsX2RhdGFfb2ZmZXIuc291cmNlX2FjdGlvbnMgYW5kIGZpbmFsbHkgY2hvc2VuIGJ5IHRoZVxuXHQgKlx0dXNlciAoZS5nLiBwb3BwaW5nIHVwIGEgbWVudSB3aXRoIHRoZSBhdmFpbGFibGUgb3B0aW9ucykuIFRoZVxuXHQgKlx0ZmluYWwgd2xfZGF0YV9vZmZlci5zZXRfYWN0aW9ucyBhbmQgd2xfZGF0YV9vZmZlci5hY2NlcHQgcmVxdWVzdHNcblx0ICpcdG11c3QgaGFwcGVuIGJlZm9yZSB0aGUgY2FsbCB0byB3bF9kYXRhX29mZmVyLmZpbmlzaC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRuZEFjdGlvbiBhY3Rpb24gc2VsZWN0ZWQgYnkgdGhlIGNvbXBvc2l0b3IgXG5cdCAqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRhY3Rpb24oZG5kQWN0aW9uKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBIHdsX2RhdGFfb2ZmZXIgcmVwcmVzZW50cyBhIHBpZWNlIG9mIGRhdGEgb2ZmZXJlZCBmb3IgdHJhbnNmZXJcbiAqICAgICAgYnkgYW5vdGhlciBjbGllbnQgKHRoZSBzb3VyY2UgY2xpZW50KS4gIEl0IGlzIHVzZWQgYnkgdGhlXG4gKiAgICAgIGNvcHktYW5kLXBhc3RlIGFuZCBkcmFnLWFuZC1kcm9wIG1lY2hhbmlzbXMuICBUaGUgb2ZmZXJcbiAqICAgICAgZGVzY3JpYmVzIHRoZSBkaWZmZXJlbnQgbWltZSB0eXBlcyB0aGF0IHRoZSBkYXRhIGNhbiBiZVxuICogICAgICBjb252ZXJ0ZWQgdG8gYW5kIHByb3ZpZGVzIHRoZSBtZWNoYW5pc20gZm9yIHRyYW5zZmVycmluZyB0aGVcbiAqICAgICAgZGF0YSBkaXJlY3RseSBmcm9tIHRoZSBzb3VyY2UgY2xpZW50LlxuICogICAgXG4gKi9cbmNsYXNzIFdsRGF0YU9mZmVyUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRJbmRpY2F0ZSB0aGF0IHRoZSBjbGllbnQgY2FuIGFjY2VwdCB0aGUgZ2l2ZW4gbWltZSB0eXBlLCBvclxuXHQgKlx0TlVMTCBmb3Igbm90IGFjY2VwdGVkLlxuXHQgKlxuXHQgKlx0Rm9yIG9iamVjdHMgb2YgdmVyc2lvbiAyIG9yIG9sZGVyLCB0aGlzIHJlcXVlc3QgaXMgdXNlZCBieSB0aGVcblx0ICpcdGNsaWVudCB0byBnaXZlIGZlZWRiYWNrIHdoZXRoZXIgdGhlIGNsaWVudCBjYW4gcmVjZWl2ZSB0aGUgZ2l2ZW5cblx0ICpcdG1pbWUgdHlwZSwgb3IgTlVMTCBpZiBub25lIGlzIGFjY2VwdGVkOyB0aGUgZmVlZGJhY2sgZG9lcyBub3Rcblx0ICpcdGRldGVybWluZSB3aGV0aGVyIHRoZSBkcmFnLWFuZC1kcm9wIG9wZXJhdGlvbiBzdWNjZWVkcyBvciBub3QuXG5cdCAqXG5cdCAqXHRGb3Igb2JqZWN0cyBvZiB2ZXJzaW9uIDMgb3IgbmV3ZXIsIHRoaXMgcmVxdWVzdCBkZXRlcm1pbmVzIHRoZVxuXHQgKlx0ZmluYWwgcmVzdWx0IG9mIHRoZSBkcmFnLWFuZC1kcm9wIG9wZXJhdGlvbi4gSWYgdGhlIGVuZCByZXN1bHRcblx0ICpcdGlzIHRoYXQgbm8gbWltZSB0eXBlcyB3ZXJlIGFjY2VwdGVkLCB0aGUgZHJhZy1hbmQtZHJvcCBvcGVyYXRpb25cblx0ICpcdHdpbGwgYmUgY2FuY2VsbGVkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBkcmFnIHNvdXJjZSB3aWxsIHJlY2VpdmVcblx0ICpcdHdsX2RhdGFfc291cmNlLmNhbmNlbGxlZC4gQ2xpZW50cyBtYXkgc3RpbGwgdXNlIHRoaXMgZXZlbnQgaW5cblx0ICpcdGNvbmp1bmN0aW9uIHdpdGggd2xfZGF0YV9zb3VyY2UuYWN0aW9uIGZvciBmZWVkYmFjay5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBhY2NlcHQgcmVxdWVzdCBcblx0ICogQHBhcmFtIHs/c3RyaW5nfSBtaW1lVHlwZSBtaW1lIHR5cGUgYWNjZXB0ZWQgYnkgdGhlIGNsaWVudCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGFjY2VwdCAoc2VyaWFsLCBtaW1lVHlwZSkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFt1aW50KHNlcmlhbCksIHN0cmluZ09wdGlvbmFsKG1pbWVUeXBlKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRvIHRyYW5zZmVyIHRoZSBvZmZlcmVkIGRhdGEsIHRoZSBjbGllbnQgaXNzdWVzIHRoaXMgcmVxdWVzdFxuXHQgKlx0YW5kIGluZGljYXRlcyB0aGUgbWltZSB0eXBlIGl0IHdhbnRzIHRvIHJlY2VpdmUuICBUaGUgdHJhbnNmZXJcblx0ICpcdGhhcHBlbnMgdGhyb3VnaCB0aGUgcGFzc2VkIGZpbGUgZGVzY3JpcHRvciAodHlwaWNhbGx5IGNyZWF0ZWRcblx0ICpcdHdpdGggdGhlIHBpcGUgc3lzdGVtIGNhbGwpLiAgVGhlIHNvdXJjZSBjbGllbnQgd3JpdGVzIHRoZSBkYXRhXG5cdCAqXHRpbiB0aGUgbWltZSB0eXBlIHJlcHJlc2VudGF0aW9uIHJlcXVlc3RlZCBhbmQgdGhlbiBjbG9zZXMgdGhlXG5cdCAqXHRmaWxlIGRlc2NyaXB0b3IuXG5cdCAqXG5cdCAqXHRUaGUgcmVjZWl2aW5nIGNsaWVudCByZWFkcyBmcm9tIHRoZSByZWFkIGVuZCBvZiB0aGUgcGlwZSB1bnRpbFxuXHQgKlx0RU9GIGFuZCB0aGVuIGNsb3NlcyBpdHMgZW5kLCBhdCB3aGljaCBwb2ludCB0aGUgdHJhbnNmZXIgaXNcblx0ICpcdGNvbXBsZXRlLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG1heSBoYXBwZW4gbXVsdGlwbGUgdGltZXMgZm9yIGRpZmZlcmVudCBtaW1lIHR5cGVzLFxuXHQgKlx0Ym90aCBiZWZvcmUgYW5kIGFmdGVyIHdsX2RhdGFfZGV2aWNlLmRyb3AuIERyYWctYW5kLWRyb3AgZGVzdGluYXRpb25cblx0ICpcdGNsaWVudHMgbWF5IHByZWVtcHRpdmVseSBmZXRjaCBkYXRhIG9yIGV4YW1pbmUgaXQgbW9yZSBjbG9zZWx5IHRvXG5cdCAqXHRkZXRlcm1pbmUgYWNjZXB0YW5jZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIG1pbWUgdHlwZSBkZXNpcmVkIGJ5IHJlY2VpdmVyIFxuXHQgKiBAcGFyYW0ge1dlYkZEfSBmZCBmaWxlIGRlc2NyaXB0b3IgZm9yIGRhdGEgdHJhbnNmZXIgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRyZWNlaXZlIChtaW1lVHlwZSwgZmQpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxLCBbc3RyaW5nKG1pbWVUeXBlKSwgZmlsZURlc2NyaXB0b3IoZmQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0RGVzdHJveSB0aGUgZGF0YSBvZmZlci5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDIsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHROb3RpZmllcyB0aGUgY29tcG9zaXRvciB0aGF0IHRoZSBkcmFnIGRlc3RpbmF0aW9uIHN1Y2Nlc3NmdWxseVxuXHQgKlx0ZmluaXNoZWQgdGhlIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uLlxuXHQgKlxuXHQgKlx0VXBvbiByZWNlaXZpbmcgdGhpcyByZXF1ZXN0LCB0aGUgY29tcG9zaXRvciB3aWxsIGVtaXRcblx0ICpcdHdsX2RhdGFfc291cmNlLmRuZF9maW5pc2hlZCBvbiB0aGUgZHJhZyBzb3VyY2UgY2xpZW50LlxuXHQgKlxuXHQgKlx0SXQgaXMgYSBjbGllbnQgZXJyb3IgdG8gcGVyZm9ybSBvdGhlciByZXF1ZXN0cyB0aGFuXG5cdCAqXHR3bF9kYXRhX29mZmVyLmRlc3Ryb3kgYWZ0ZXIgdGhpcyBvbmUuIEl0IGlzIGFsc28gYW4gZXJyb3IgdG8gcGVyZm9ybVxuXHQgKlx0dGhpcyByZXF1ZXN0IGFmdGVyIGEgTlVMTCBtaW1lIHR5cGUgaGFzIGJlZW4gc2V0IGluXG5cdCAqXHR3bF9kYXRhX29mZmVyLmFjY2VwdCBvciBubyBhY3Rpb24gd2FzIHJlY2VpdmVkIHRocm91Z2hcblx0ICpcdHdsX2RhdGFfb2ZmZXIuYWN0aW9uLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgM1xuXHQgKlxuXHQgKi9cblx0ZmluaXNoICgpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAzLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0cyB0aGUgYWN0aW9ucyB0aGF0IHRoZSBkZXN0aW5hdGlvbiBzaWRlIGNsaWVudCBzdXBwb3J0cyBmb3Jcblx0ICpcdHRoaXMgb3BlcmF0aW9uLiBUaGlzIHJlcXVlc3QgbWF5IHRyaWdnZXIgdGhlIGVtaXNzaW9uIG9mXG5cdCAqXHR3bF9kYXRhX3NvdXJjZS5hY3Rpb24gYW5kIHdsX2RhdGFfb2ZmZXIuYWN0aW9uIGV2ZW50cyBpZiB0aGUgY29tcG9zaXRvclxuXHQgKlx0bmVlZHMgdG8gY2hhbmdlIHRoZSBzZWxlY3RlZCBhY3Rpb24uXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyB0aHJvdWdob3V0IHRoZVxuXHQgKlx0ZHJhZy1hbmQtZHJvcCBvcGVyYXRpb24sIHR5cGljYWxseSBpbiByZXNwb25zZSB0byB3bF9kYXRhX2RldmljZS5lbnRlclxuXHQgKlx0b3Igd2xfZGF0YV9kZXZpY2UubW90aW9uIGV2ZW50cy5cblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBkZXRlcm1pbmVzIHRoZSBmaW5hbCByZXN1bHQgb2YgdGhlIGRyYWctYW5kLWRyb3Bcblx0ICpcdG9wZXJhdGlvbi4gSWYgdGhlIGVuZCByZXN1bHQgaXMgdGhhdCBubyBhY3Rpb24gaXMgYWNjZXB0ZWQsXG5cdCAqXHR0aGUgZHJhZyBzb3VyY2Ugd2lsbCByZWNlaXZlIHdsX2RyYWdfc291cmNlLmNhbmNlbGxlZC5cblx0ICpcblx0ICpcdFRoZSBkbmRfYWN0aW9ucyBhcmd1bWVudCBtdXN0IGNvbnRhaW4gb25seSB2YWx1ZXMgZXhwcmVzc2VkIGluIHRoZVxuXHQgKlx0d2xfZGF0YV9kZXZpY2VfbWFuYWdlci5kbmRfYWN0aW9ucyBlbnVtLCBhbmQgdGhlIHByZWZlcnJlZF9hY3Rpb25cblx0ICpcdGFyZ3VtZW50IG11c3Qgb25seSBjb250YWluIG9uZSBvZiB0aG9zZSB2YWx1ZXMgc2V0LCBvdGhlcndpc2UgaXRcblx0ICpcdHdpbGwgcmVzdWx0IGluIGEgcHJvdG9jb2wgZXJyb3IuXG5cdCAqXG5cdCAqXHRXaGlsZSBtYW5hZ2luZyBhbiBcImFza1wiIGFjdGlvbiwgdGhlIGRlc3RpbmF0aW9uIGRyYWctYW5kLWRyb3AgY2xpZW50XG5cdCAqXHRtYXkgcGVyZm9ybSBmdXJ0aGVyIHdsX2RhdGFfb2ZmZXIucmVjZWl2ZSByZXF1ZXN0cywgYW5kIGlzIGV4cGVjdGVkXG5cdCAqXHR0byBwZXJmb3JtIG9uZSBsYXN0IHdsX2RhdGFfb2ZmZXIuc2V0X2FjdGlvbnMgcmVxdWVzdCB3aXRoIGEgcHJlZmVycmVkXG5cdCAqXHRhY3Rpb24gb3RoZXIgdGhhbiBcImFza1wiIChhbmQgb3B0aW9uYWxseSB3bF9kYXRhX29mZmVyLmFjY2VwdCkgYmVmb3JlXG5cdCAqXHRyZXF1ZXN0aW5nIHdsX2RhdGFfb2ZmZXIuZmluaXNoLCBpbiBvcmRlciB0byBjb252ZXkgdGhlIGFjdGlvbiBzZWxlY3RlZFxuXHQgKlx0YnkgdGhlIHVzZXIuIElmIHRoZSBwcmVmZXJyZWQgYWN0aW9uIGlzIG5vdCBpbiB0aGVcblx0ICpcdHdsX2RhdGFfb2ZmZXIuc291cmNlX2FjdGlvbnMgbWFzaywgYW4gZXJyb3Igd2lsbCBiZSByYWlzZWQuXG5cdCAqXG5cdCAqXHRJZiB0aGUgXCJhc2tcIiBhY3Rpb24gaXMgZGlzbWlzc2VkIChlLmcuIHVzZXIgY2FuY2VsbGF0aW9uKSwgdGhlIGNsaWVudFxuXHQgKlx0aXMgZXhwZWN0ZWQgdG8gcGVyZm9ybSB3bF9kYXRhX29mZmVyLmRlc3Ryb3kgcmlnaHQgYXdheS5cblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBjYW4gb25seSBiZSBtYWRlIG9uIGRyYWctYW5kLWRyb3Agb2ZmZXJzLCBhIHByb3RvY29sIGVycm9yXG5cdCAqXHR3aWxsIGJlIHJhaXNlZCBvdGhlcndpc2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkbmRBY3Rpb25zIGFjdGlvbnMgc3VwcG9ydGVkIGJ5IHRoZSBkZXN0aW5hdGlvbiBjbGllbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwcmVmZXJyZWRBY3Rpb24gYWN0aW9uIHByZWZlcnJlZCBieSB0aGUgZGVzdGluYXRpb24gY2xpZW50IFxuXHQgKlxuXHQgKiBAc2luY2UgM1xuXHQgKlxuXHQgKi9cblx0c2V0QWN0aW9ucyAoZG5kQWN0aW9ucywgcHJlZmVycmVkQWN0aW9uKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNCwgW3VpbnQoZG5kQWN0aW9ucyksIHVpbnQocHJlZmVycmVkQWN0aW9uKV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xEYXRhT2ZmZXJFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5vZmZlcihzKG1lc3NhZ2UsIGZhbHNlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuc291cmNlQWN0aW9ucyh1KG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzJdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5hY3Rpb24odShtZXNzYWdlKSlcblx0fVxuXG59XG5XbERhdGFPZmZlclByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9kYXRhX29mZmVyJ1xuXG5XbERhdGFPZmZlclByb3h5LkVycm9yID0ge1xuICAvKipcbiAgICogZmluaXNoIHJlcXVlc3Qgd2FzIGNhbGxlZCB1bnRpbWVseVxuICAgKi9cbiAgaW52YWxpZEZpbmlzaDogMCxcbiAgLyoqXG4gICAqIGFjdGlvbiBtYXNrIGNvbnRhaW5zIGludmFsaWQgdmFsdWVzXG4gICAqL1xuICBpbnZhbGlkQWN0aW9uTWFzazogMSxcbiAgLyoqXG4gICAqIGFjdGlvbiBhcmd1bWVudCBoYXMgYW4gaW52YWxpZCB2YWx1ZVxuICAgKi9cbiAgaW52YWxpZEFjdGlvbjogMixcbiAgLyoqXG4gICAqIG9mZmVyIGRvZXNuJ3QgYWNjZXB0IHRoaXMgcmVxdWVzdFxuICAgKi9cbiAgaW52YWxpZE9mZmVyOiAzXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsRGF0YU9mZmVyUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXbERhdGFTb3VyY2VFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2VudCB3aGVuIGEgdGFyZ2V0IGFjY2VwdHMgcG9pbnRlcl9mb2N1cyBvciBtb3Rpb24gZXZlbnRzLiAgSWZcblx0ICpcdGEgdGFyZ2V0IGRvZXMgbm90IGFjY2VwdCBhbnkgb2YgdGhlIG9mZmVyZWQgdHlwZXMsIHR5cGUgaXMgTlVMTC5cblx0ICpcblx0ICpcdFVzZWQgZm9yIGZlZWRiYWNrIGR1cmluZyBkcmFnLWFuZC1kcm9wLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0gez9zdHJpbmd9IG1pbWVUeXBlIG1pbWUgdHlwZSBhY2NlcHRlZCBieSB0aGUgdGFyZ2V0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0dGFyZ2V0KG1pbWVUeXBlKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0UmVxdWVzdCBmb3IgZGF0YSBmcm9tIHRoZSBjbGllbnQuICBTZW5kIHRoZSBkYXRhIGFzIHRoZVxuXHQgKlx0c3BlY2lmaWVkIG1pbWUgdHlwZSBvdmVyIHRoZSBwYXNzZWQgZmlsZSBkZXNjcmlwdG9yLCB0aGVuXG5cdCAqXHRjbG9zZSBpdC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIG1pbWUgdHlwZSBmb3IgdGhlIGRhdGEgXG5cdCAqIEBwYXJhbSB7V2ViRkR9IGZkIGZpbGUgZGVzY3JpcHRvciBmb3IgdGhlIGRhdGEgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZW5kKG1pbWVUeXBlLCBmZCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgZGF0YSBzb3VyY2UgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUaGVyZSBhcmUgc2V2ZXJhbCByZWFzb25zIHdoeVxuXHQgKlx0dGhpcyBjb3VsZCBoYXBwZW46XG5cdCAqXG5cdCAqXHQtIFRoZSBkYXRhIHNvdXJjZSBoYXMgYmVlbiByZXBsYWNlZCBieSBhbm90aGVyIGRhdGEgc291cmNlLlxuXHQgKlx0LSBUaGUgZHJhZy1hbmQtZHJvcCBvcGVyYXRpb24gd2FzIHBlcmZvcm1lZCwgYnV0IHRoZSBkcm9wIGRlc3RpbmF0aW9uXG5cdCAqXHQgIGRpZCBub3QgYWNjZXB0IGFueSBvZiB0aGUgbWltZSB0eXBlcyBvZmZlcmVkIHRocm91Z2hcblx0ICpcdCAgd2xfZGF0YV9zb3VyY2UudGFyZ2V0LlxuXHQgKlx0LSBUaGUgZHJhZy1hbmQtZHJvcCBvcGVyYXRpb24gd2FzIHBlcmZvcm1lZCwgYnV0IHRoZSBkcm9wIGRlc3RpbmF0aW9uXG5cdCAqXHQgIGRpZCBub3Qgc2VsZWN0IGFueSBvZiB0aGUgYWN0aW9ucyBwcmVzZW50IGluIHRoZSBtYXNrIG9mZmVyZWQgdGhyb3VnaFxuXHQgKlx0ICB3bF9kYXRhX3NvdXJjZS5hY3Rpb24uXG5cdCAqXHQtIFRoZSBkcmFnLWFuZC1kcm9wIG9wZXJhdGlvbiB3YXMgcGVyZm9ybWVkIGJ1dCBkaWRuJ3QgaGFwcGVuIG92ZXIgYVxuXHQgKlx0ICBzdXJmYWNlLlxuXHQgKlx0LSBUaGUgY29tcG9zaXRvciBjYW5jZWxsZWQgdGhlIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uIChlLmcuIGNvbXBvc2l0b3Jcblx0ICpcdCAgZGVwZW5kZW50IHRpbWVvdXRzIHRvIGF2b2lkIHN0YWxlIGRyYWctYW5kLWRyb3AgdHJhbnNmZXJzKS5cblx0ICpcblx0ICpcdFRoZSBjbGllbnQgc2hvdWxkIGNsZWFuIHVwIGFuZCBkZXN0cm95IHRoaXMgZGF0YSBzb3VyY2UuXG5cdCAqXG5cdCAqXHRGb3Igb2JqZWN0cyBvZiB2ZXJzaW9uIDIgb3Igb2xkZXIsIHdsX2RhdGFfc291cmNlLmNhbmNlbGxlZCB3aWxsXG5cdCAqXHRvbmx5IGJlIGVtaXR0ZWQgaWYgdGhlIGRhdGEgc291cmNlIHdhcyByZXBsYWNlZCBieSBhbm90aGVyIGRhdGFcblx0ICpcdHNvdXJjZS5cblx0ICogICAgICBcblx0ICpcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGNhbmNlbGxlZCgpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgdXNlciBwZXJmb3JtZWQgdGhlIGRyb3AgYWN0aW9uLiBUaGlzIGV2ZW50IGRvZXMgbm90IGluZGljYXRlXG5cdCAqXHRhY2NlcHRhbmNlLCB3bF9kYXRhX3NvdXJjZS5jYW5jZWxsZWQgbWF5IHN0aWxsIGJlIGVtaXR0ZWQgYWZ0ZXJ3YXJkc1xuXHQgKlx0aWYgdGhlIGRyb3AgZGVzdGluYXRpb24gZG9lcyBub3QgYWNjZXB0IGFueSBtaW1lIHR5cGUuXG5cdCAqXG5cdCAqXHRIb3dldmVyLCB0aGlzIGV2ZW50IG1pZ2h0IGhvd2V2ZXIgbm90IGJlIHJlY2VpdmVkIGlmIHRoZSBjb21wb3NpdG9yXG5cdCAqXHRjYW5jZWxsZWQgdGhlIGRyYWctYW5kLWRyb3Agb3BlcmF0aW9uIGJlZm9yZSB0aGlzIGV2ZW50IGNvdWxkIGhhcHBlbi5cblx0ICpcblx0ICpcdE5vdGUgdGhhdCB0aGUgZGF0YV9zb3VyY2UgbWF5IHN0aWxsIGJlIHVzZWQgaW4gdGhlIGZ1dHVyZSBhbmQgc2hvdWxkXG5cdCAqXHRub3QgYmUgZGVzdHJveWVkIGhlcmUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRkbmREcm9wUGVyZm9ybWVkKCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBkcm9wIGRlc3RpbmF0aW9uIGZpbmlzaGVkIGludGVyb3BlcmF0aW5nIHdpdGggdGhpcyBkYXRhXG5cdCAqXHRzb3VyY2UsIHNvIHRoZSBjbGllbnQgaXMgbm93IGZyZWUgdG8gZGVzdHJveSB0aGlzIGRhdGEgc291cmNlIGFuZFxuXHQgKlx0ZnJlZSBhbGwgYXNzb2NpYXRlZCBkYXRhLlxuXHQgKlxuXHQgKlx0SWYgdGhlIGFjdGlvbiB1c2VkIHRvIHBlcmZvcm0gdGhlIG9wZXJhdGlvbiB3YXMgXCJtb3ZlXCIsIHRoZVxuXHQgKlx0c291cmNlIGNhbiBub3cgZGVsZXRlIHRoZSB0cmFuc2ZlcnJlZCBkYXRhLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKlxuXHQgKiBAc2luY2UgM1xuXHQgKlxuXHQgKi9cblx0ZG5kRmluaXNoZWQoKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpbmRpY2F0ZXMgdGhlIGFjdGlvbiBzZWxlY3RlZCBieSB0aGUgY29tcG9zaXRvciBhZnRlclxuXHQgKlx0bWF0Y2hpbmcgdGhlIHNvdXJjZS9kZXN0aW5hdGlvbiBzaWRlIGFjdGlvbnMuIE9ubHkgb25lIGFjdGlvbiAob3Jcblx0ICpcdG5vbmUpIHdpbGwgYmUgb2ZmZXJlZCBoZXJlLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBjYW4gYmUgZW1pdHRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgdGhlIGRyYWctYW5kLWRyb3Bcblx0ICpcdG9wZXJhdGlvbiwgbWFpbmx5IGluIHJlc3BvbnNlIHRvIGRlc3RpbmF0aW9uIHNpZGUgY2hhbmdlcyB0aHJvdWdoXG5cdCAqXHR3bF9kYXRhX29mZmVyLnNldF9hY3Rpb25zLCBhbmQgYXMgdGhlIGRhdGEgZGV2aWNlIGVudGVycy9sZWF2ZXNcblx0ICpcdHN1cmZhY2VzLlxuXHQgKlxuXHQgKlx0SXQgaXMgb25seSBwb3NzaWJsZSB0byByZWNlaXZlIHRoaXMgZXZlbnQgYWZ0ZXJcblx0ICpcdHdsX2RhdGFfc291cmNlLmRuZF9kcm9wX3BlcmZvcm1lZCBpZiB0aGUgZHJhZy1hbmQtZHJvcCBvcGVyYXRpb25cblx0ICpcdGVuZGVkIGluIGFuIFwiYXNrXCIgYWN0aW9uLCBpbiB3aGljaCBjYXNlIHRoZSBmaW5hbCB3bF9kYXRhX3NvdXJjZS5hY3Rpb25cblx0ICpcdGV2ZW50IHdpbGwgaGFwcGVuIGltbWVkaWF0ZWx5IGJlZm9yZSB3bF9kYXRhX3NvdXJjZS5kbmRfZmluaXNoZWQuXG5cdCAqXG5cdCAqXHRDb21wb3NpdG9ycyBtYXkgYWxzbyBjaGFuZ2UgdGhlIHNlbGVjdGVkIGFjdGlvbiBvbiB0aGUgZmx5LCBtYWlubHlcblx0ICpcdGluIHJlc3BvbnNlIHRvIGtleWJvYXJkIG1vZGlmaWVyIGNoYW5nZXMgZHVyaW5nIHRoZSBkcmFnLWFuZC1kcm9wXG5cdCAqXHRvcGVyYXRpb24uXG5cdCAqXG5cdCAqXHRUaGUgbW9zdCByZWNlbnQgYWN0aW9uIHJlY2VpdmVkIGlzIGFsd2F5cyB0aGUgdmFsaWQgb25lLiBUaGUgY2hvc2VuXG5cdCAqXHRhY3Rpb24gbWF5IGNoYW5nZSBhbG9uZ3NpZGUgbmVnb3RpYXRpb24gKGUuZy4gYW4gXCJhc2tcIiBhY3Rpb24gY2FuIHR1cm5cblx0ICpcdGludG8gYSBcIm1vdmVcIiBvcGVyYXRpb24pLCBzbyB0aGUgZWZmZWN0cyBvZiB0aGUgZmluYWwgYWN0aW9uIG11c3Rcblx0ICpcdGFsd2F5cyBiZSBhcHBsaWVkIGluIHdsX2RhdGFfb2ZmZXIuZG5kX2ZpbmlzaGVkLlxuXHQgKlxuXHQgKlx0Q2xpZW50cyBjYW4gdHJpZ2dlciBjdXJzb3Igc3VyZmFjZSBjaGFuZ2VzIGZyb20gdGhpcyBwb2ludCwgc29cblx0ICpcdHRoZXkgcmVmbGVjdCB0aGUgY3VycmVudCBhY3Rpb24uXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkbmRBY3Rpb24gYWN0aW9uIHNlbGVjdGVkIGJ5IHRoZSBjb21wb3NpdG9yIFxuXHQgKlxuXHQgKiBAc2luY2UgM1xuXHQgKlxuXHQgKi9cblx0YWN0aW9uKGRuZEFjdGlvbikge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhlIHdsX2RhdGFfc291cmNlIG9iamVjdCBpcyB0aGUgc291cmNlIHNpZGUgb2YgYSB3bF9kYXRhX29mZmVyLlxuICogICAgICBJdCBpcyBjcmVhdGVkIGJ5IHRoZSBzb3VyY2UgY2xpZW50IGluIGEgZGF0YSB0cmFuc2ZlciBhbmRcbiAqICAgICAgcHJvdmlkZXMgYSB3YXkgdG8gZGVzY3JpYmUgdGhlIG9mZmVyZWQgZGF0YSBhbmQgYSB3YXkgdG8gcmVzcG9uZFxuICogICAgICB0byByZXF1ZXN0cyB0byB0cmFuc2ZlciB0aGUgZGF0YS5cbiAqICAgIFxuICovXG5jbGFzcyBXbERhdGFTb3VyY2VQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBhZGRzIGEgbWltZSB0eXBlIHRvIHRoZSBzZXQgb2YgbWltZSB0eXBlc1xuXHQgKlx0YWR2ZXJ0aXNlZCB0byB0YXJnZXRzLiAgQ2FuIGJlIGNhbGxlZCBzZXZlcmFsIHRpbWVzIHRvIG9mZmVyXG5cdCAqXHRtdWx0aXBsZSB0eXBlcy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIG1pbWUgdHlwZSBvZmZlcmVkIGJ5IHRoZSBkYXRhIHNvdXJjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdG9mZmVyIChtaW1lVHlwZSkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtzdHJpbmcobWltZVR5cGUpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0RGVzdHJveSB0aGUgZGF0YSBzb3VyY2UuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkZXN0cm95ICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0cyB0aGUgYWN0aW9ucyB0aGF0IHRoZSBzb3VyY2Ugc2lkZSBjbGllbnQgc3VwcG9ydHMgZm9yIHRoaXNcblx0ICpcdG9wZXJhdGlvbi4gVGhpcyByZXF1ZXN0IG1heSB0cmlnZ2VyIHdsX2RhdGFfc291cmNlLmFjdGlvbiBhbmRcblx0ICpcdHdsX2RhdGFfb2ZmZXIuYWN0aW9uIGV2ZW50cyBpZiB0aGUgY29tcG9zaXRvciBuZWVkcyB0byBjaGFuZ2UgdGhlXG5cdCAqXHRzZWxlY3RlZCBhY3Rpb24uXG5cdCAqXG5cdCAqXHRUaGUgZG5kX2FjdGlvbnMgYXJndW1lbnQgbXVzdCBjb250YWluIG9ubHkgdmFsdWVzIGV4cHJlc3NlZCBpbiB0aGVcblx0ICpcdHdsX2RhdGFfZGV2aWNlX21hbmFnZXIuZG5kX2FjdGlvbnMgZW51bSwgb3RoZXJ3aXNlIGl0IHdpbGwgcmVzdWx0XG5cdCAqXHRpbiBhIHByb3RvY29sIGVycm9yLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG11c3QgYmUgbWFkZSBvbmNlIG9ubHksIGFuZCBjYW4gb25seSBiZSBtYWRlIG9uIHNvdXJjZXNcblx0ICpcdHVzZWQgaW4gZHJhZy1hbmQtZHJvcCwgc28gaXQgbXVzdCBiZSBwZXJmb3JtZWQgYmVmb3JlXG5cdCAqXHR3bF9kYXRhX2RldmljZS5zdGFydF9kcmFnLiBBdHRlbXB0aW5nIHRvIHVzZSB0aGUgc291cmNlIG90aGVyIHRoYW5cblx0ICpcdGZvciBkcmFnLWFuZC1kcm9wIHdpbGwgcmFpc2UgYSBwcm90b2NvbCBlcnJvci5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRuZEFjdGlvbnMgYWN0aW9ucyBzdXBwb3J0ZWQgYnkgdGhlIGRhdGEgc291cmNlIFxuXHQgKlxuXHQgKiBAc2luY2UgM1xuXHQgKlxuXHQgKi9cblx0c2V0QWN0aW9ucyAoZG5kQWN0aW9ucykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDIsIFt1aW50KGRuZEFjdGlvbnMpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbERhdGFTb3VyY2VFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci50YXJnZXQocyhtZXNzYWdlLCB0cnVlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuc2VuZChzKG1lc3NhZ2UsIGZhbHNlKSwgaChtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsyXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuY2FuY2VsbGVkKClcblx0fVxuXG5cdGFzeW5jIFszXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZG5kRHJvcFBlcmZvcm1lZCgpXG5cdH1cblxuXHRhc3luYyBbNF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmRuZEZpbmlzaGVkKClcblx0fVxuXG5cdGFzeW5jIFs1XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuYWN0aW9uKHUobWVzc2FnZSkpXG5cdH1cblxufVxuV2xEYXRhU291cmNlUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX2RhdGFfc291cmNlJ1xuXG5XbERhdGFTb3VyY2VQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIGFjdGlvbiBtYXNrIGNvbnRhaW5zIGludmFsaWQgdmFsdWVzXG4gICAqL1xuICBpbnZhbGlkQWN0aW9uTWFzazogMCxcbiAgLyoqXG4gICAqIHNvdXJjZSBkb2Vzbid0IGFjY2VwdCB0aGlzIHJlcXVlc3RcbiAgICovXG4gIGludmFsaWRTb3VyY2U6IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2xEYXRhU291cmNlUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXbERpc3BsYXlFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIGVycm9yIGV2ZW50IGlzIHNlbnQgb3V0IHdoZW4gYSBmYXRhbCAobm9uLXJlY292ZXJhYmxlKVxuXHQgKlx0ZXJyb3IgaGFzIG9jY3VycmVkLiAgVGhlIG9iamVjdF9pZCBhcmd1bWVudCBpcyB0aGUgb2JqZWN0XG5cdCAqXHR3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQsIG1vc3Qgb2Z0ZW4gaW4gcmVzcG9uc2UgdG8gYSByZXF1ZXN0XG5cdCAqXHR0byB0aGF0IG9iamVjdC4gIFRoZSBjb2RlIGlkZW50aWZpZXMgdGhlIGVycm9yIGFuZCBpcyBkZWZpbmVkXG5cdCAqXHRieSB0aGUgb2JqZWN0IGludGVyZmFjZS4gIEFzIHN1Y2gsIGVhY2ggaW50ZXJmYWNlIGRlZmluZXMgaXRzXG5cdCAqXHRvd24gc2V0IG9mIGVycm9yIGNvZGVzLiAgVGhlIG1lc3NhZ2UgaXMgYSBicmllZiBkZXNjcmlwdGlvblxuXHQgKlx0b2YgdGhlIGVycm9yLCBmb3IgKGRlYnVnZ2luZykgY29udmVuaWVuY2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb2JqZWN0SWQgb2JqZWN0IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvZGUgZXJyb3IgY29kZSBcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgZXJyb3IgZGVzY3JpcHRpb24gXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRlcnJvcihvYmplY3RJZCwgY29kZSwgbWVzc2FnZSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgaXMgdXNlZCBpbnRlcm5hbGx5IGJ5IHRoZSBvYmplY3QgSUQgbWFuYWdlbWVudFxuXHQgKlx0bG9naWMuICBXaGVuIGEgY2xpZW50IGRlbGV0ZXMgYW4gb2JqZWN0LCB0aGUgc2VydmVyIHdpbGwgc2VuZFxuXHQgKlx0dGhpcyBldmVudCB0byBhY2tub3dsZWRnZSB0aGF0IGl0IGhhcyBzZWVuIHRoZSBkZWxldGUgcmVxdWVzdC5cblx0ICpcdFdoZW4gdGhlIGNsaWVudCByZWNlaXZlcyB0aGlzIGV2ZW50LCBpdCB3aWxsIGtub3cgdGhhdCBpdCBjYW5cblx0ICpcdHNhZmVseSByZXVzZSB0aGUgb2JqZWN0IElELlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaWQgZGVsZXRlZCBvYmplY3QgSUQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkZWxldGVJZChpZCkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgV2xDYWxsYmFja1Byb3h5IGZyb20gJy4vV2xDYWxsYmFja1Byb3h5J1xuaW1wb3J0IFdsUmVnaXN0cnlQcm94eSBmcm9tICcuL1dsUmVnaXN0cnlQcm94eSdcblxuLyoqXG4gKlxuICogICAgICBUaGUgY29yZSBnbG9iYWwgb2JqZWN0LiAgVGhpcyBpcyBhIHNwZWNpYWwgc2luZ2xldG9uIG9iamVjdC4gIEl0XG4gKiAgICAgIGlzIHVzZWQgZm9yIGludGVybmFsIFdheWxhbmQgcHJvdG9jb2wgZmVhdHVyZXMuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xEaXNwbGF5UHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgc3luYyByZXF1ZXN0IGFza3MgdGhlIHNlcnZlciB0byBlbWl0IHRoZSAnZG9uZScgZXZlbnRcblx0ICpcdG9uIHRoZSByZXR1cm5lZCB3bF9jYWxsYmFjayBvYmplY3QuICBTaW5jZSByZXF1ZXN0cyBhcmVcblx0ICpcdGhhbmRsZWQgaW4tb3JkZXIgYW5kIGV2ZW50cyBhcmUgZGVsaXZlcmVkIGluLW9yZGVyLCB0aGlzIGNhblxuXHQgKlx0YmUgdXNlZCBhcyBhIGJhcnJpZXIgdG8gZW5zdXJlIGFsbCBwcmV2aW91cyByZXF1ZXN0cyBhbmQgdGhlXG5cdCAqXHRyZXN1bHRpbmcgZXZlbnRzIGhhdmUgYmVlbiBoYW5kbGVkLlxuXHQgKlxuXHQgKlx0VGhlIG9iamVjdCByZXR1cm5lZCBieSB0aGlzIHJlcXVlc3Qgd2lsbCBiZSBkZXN0cm95ZWQgYnkgdGhlXG5cdCAqXHRjb21wb3NpdG9yIGFmdGVyIHRoZSBjYWxsYmFjayBpcyBmaXJlZCBhbmQgYXMgc3VjaCB0aGUgY2xpZW50IG11c3Qgbm90XG5cdCAqXHRhdHRlbXB0IHRvIHVzZSBpdCBhZnRlciB0aGF0IHBvaW50LlxuXHQgKlxuXHQgKlx0VGhlIGNhbGxiYWNrX2RhdGEgcGFzc2VkIGluIHRoZSBjYWxsYmFjayBpcyB0aGUgZXZlbnQgc2VyaWFsLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtXbENhbGxiYWNrUHJveHl9IGNhbGxiYWNrIG9iamVjdCBmb3IgdGhlIHN5bmMgcmVxdWVzdCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHN5bmMgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDAsIFdsQ2FsbGJhY2tQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGNyZWF0ZXMgYSByZWdpc3RyeSBvYmplY3QgdGhhdCBhbGxvd3MgdGhlIGNsaWVudFxuXHQgKlx0dG8gbGlzdCBhbmQgYmluZCB0aGUgZ2xvYmFsIG9iamVjdHMgYXZhaWxhYmxlIGZyb20gdGhlXG5cdCAqXHRjb21wb3NpdG9yLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtXbFJlZ2lzdHJ5UHJveHl9IGdsb2JhbCByZWdpc3RyeSBvYmplY3QgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRnZXRSZWdpc3RyeSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMSwgV2xSZWdpc3RyeVByb3h5LCBbbmV3T2JqZWN0KCldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsRGlzcGxheUV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmVycm9yKG8obWVzc2FnZSwgZmFsc2UsIHRoaXMuX2Nvbm5lY3Rpb24pLCB1KG1lc3NhZ2UpLCBzKG1lc3NhZ2UsIGZhbHNlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZGVsZXRlSWQodShtZXNzYWdlKSlcblx0fVxuXG59XG5XbERpc3BsYXlQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfZGlzcGxheSdcblxuV2xEaXNwbGF5UHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiBzZXJ2ZXIgY291bGRuJ3QgZmluZCBvYmplY3RcbiAgICovXG4gIGludmFsaWRPYmplY3Q6IDAsXG4gIC8qKlxuICAgKiBtZXRob2QgZG9lc24ndCBleGlzdCBvbiB0aGUgc3BlY2lmaWVkIGludGVyZmFjZVxuICAgKi9cbiAgaW52YWxpZE1ldGhvZDogMSxcbiAgLyoqXG4gICAqIHNlcnZlciBpcyBvdXQgb2YgbWVtb3J5XG4gICAqL1xuICBub01lbW9yeTogMlxufVxuXG5leHBvcnQgZGVmYXVsdCBXbERpc3BsYXlQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsS2V5Ym9hcmRFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBwcm92aWRlcyBhIGZpbGUgZGVzY3JpcHRvciB0byB0aGUgY2xpZW50IHdoaWNoIGNhbiBiZVxuXHQgKlx0bWVtb3J5LW1hcHBlZCB0byBwcm92aWRlIGEga2V5Ym9hcmQgbWFwcGluZyBkZXNjcmlwdGlvbi5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGZvcm1hdCBrZXltYXAgZm9ybWF0IFxuXHQgKiBAcGFyYW0ge1dlYkZEfSBmZCBrZXltYXAgZmlsZSBkZXNjcmlwdG9yIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBrZXltYXAgc2l6ZSwgaW4gYnl0ZXMgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRrZXltYXAoZm9ybWF0LCBmZCwgc2l6ZSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdE5vdGlmaWNhdGlvbiB0aGF0IHRoaXMgc2VhdCdzIGtleWJvYXJkIGZvY3VzIGlzIG9uIGEgY2VydGFpblxuXHQgKlx0c3VyZmFjZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBlbnRlciBldmVudCBcblx0ICogQHBhcmFtIHsqfSBzdXJmYWNlIHN1cmZhY2UgZ2FpbmluZyBrZXlib2FyZCBmb2N1cyBcblx0ICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0ga2V5cyB0aGUgY3VycmVudGx5IHByZXNzZWQga2V5cyBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGVudGVyKHNlcmlhbCwgc3VyZmFjZSwga2V5cykge31cblxuXHQvKipcblx0ICpcblx0ICpcdE5vdGlmaWNhdGlvbiB0aGF0IHRoaXMgc2VhdCdzIGtleWJvYXJkIGZvY3VzIGlzIG5vIGxvbmdlciBvblxuXHQgKlx0YSBjZXJ0YWluIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgbGVhdmUgbm90aWZpY2F0aW9uIGlzIHNlbnQgYmVmb3JlIHRoZSBlbnRlciBub3RpZmljYXRpb25cblx0ICpcdGZvciB0aGUgbmV3IGZvY3VzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGxlYXZlIGV2ZW50IFxuXHQgKiBAcGFyYW0geyp9IHN1cmZhY2Ugc3VyZmFjZSB0aGF0IGxvc3Qga2V5Ym9hcmQgZm9jdXMgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRsZWF2ZShzZXJpYWwsIHN1cmZhY2UpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRBIGtleSB3YXMgcHJlc3NlZCBvciByZWxlYXNlZC5cblx0ICpcdFRoZSB0aW1lIGFyZ3VtZW50IGlzIGEgdGltZXN0YW1wIHdpdGggbWlsbGlzZWNvbmRcblx0ICpcdGdyYW51bGFyaXR5LCB3aXRoIGFuIHVuZGVmaW5lZCBiYXNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGtleSBldmVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgdGltZXN0YW1wIHdpdGggbWlsbGlzZWNvbmQgZ3JhbnVsYXJpdHkgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBrZXkga2V5IHRoYXQgcHJvZHVjZWQgdGhlIGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gc3RhdGUgcGh5c2ljYWwgc3RhdGUgb2YgdGhlIGtleSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGtleShzZXJpYWwsIHRpbWUsIGtleSwgc3RhdGUpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHROb3RpZmllcyBjbGllbnRzIHRoYXQgdGhlIG1vZGlmaWVyIGFuZC9vciBncm91cCBzdGF0ZSBoYXNcblx0ICpcdGNoYW5nZWQsIGFuZCBpdCBzaG91bGQgdXBkYXRlIGl0cyBsb2NhbCBzdGF0ZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBtb2RpZmllcnMgZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtb2RzRGVwcmVzc2VkIGRlcHJlc3NlZCBtb2RpZmllcnMgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtb2RzTGF0Y2hlZCBsYXRjaGVkIG1vZGlmaWVycyBcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1vZHNMb2NrZWQgbG9ja2VkIG1vZGlmaWVycyBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGdyb3VwIGtleWJvYXJkIGxheW91dCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdG1vZGlmaWVycyhzZXJpYWwsIG1vZHNEZXByZXNzZWQsIG1vZHNMYXRjaGVkLCBtb2RzTG9ja2VkLCBncm91cCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdEluZm9ybXMgdGhlIGNsaWVudCBhYm91dCB0aGUga2V5Ym9hcmQncyByZXBlYXQgcmF0ZSBhbmQgZGVsYXkuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGlzIHNlbnQgYXMgc29vbiBhcyB0aGUgd2xfa2V5Ym9hcmQgb2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQsXG5cdCAqXHRhbmQgaXMgZ3VhcmFudGVlZCB0byBiZSByZWNlaXZlZCBieSB0aGUgY2xpZW50IGJlZm9yZSBhbnkga2V5IHByZXNzXG5cdCAqXHRldmVudC5cblx0ICpcblx0ICpcdE5lZ2F0aXZlIHZhbHVlcyBmb3IgZWl0aGVyIHJhdGUgb3IgZGVsYXkgYXJlIGlsbGVnYWwuIEEgcmF0ZSBvZiB6ZXJvXG5cdCAqXHR3aWxsIGRpc2FibGUgYW55IHJlcGVhdGluZyAocmVnYXJkbGVzcyBvZiB0aGUgdmFsdWUgb2YgZGVsYXkpLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBjYW4gYmUgc2VudCBsYXRlciBvbiBhcyB3ZWxsIHdpdGggYSBuZXcgdmFsdWUgaWYgbmVjZXNzYXJ5LFxuXHQgKlx0c28gY2xpZW50cyBzaG91bGQgY29udGludWUgbGlzdGVuaW5nIGZvciB0aGUgZXZlbnQgcGFzdCB0aGUgY3JlYXRpb25cblx0ICpcdG9mIHdsX2tleWJvYXJkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gcmF0ZSB0aGUgcmF0ZSBvZiByZXBlYXRpbmcga2V5cyBpbiBjaGFyYWN0ZXJzIHBlciBzZWNvbmQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBkZWxheSBpbiBtaWxsaXNlY29uZHMgc2luY2Uga2V5IGRvd24gdW50aWwgcmVwZWF0aW5nIHN0YXJ0cyBcblx0ICpcblx0ICogQHNpbmNlIDRcblx0ICpcblx0ICovXG5cdHJlcGVhdEluZm8ocmF0ZSwgZGVsYXkpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoZSB3bF9rZXlib2FyZCBpbnRlcmZhY2UgcmVwcmVzZW50cyBvbmUgb3IgbW9yZSBrZXlib2FyZHNcbiAqICAgICAgYXNzb2NpYXRlZCB3aXRoIGEgc2VhdC5cbiAqICAgIFxuICovXG5jbGFzcyBXbEtleWJvYXJkUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRyZWxlYXNlICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbEtleWJvYXJkRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIua2V5bWFwKHUobWVzc2FnZSksIGgobWVzc2FnZSksIHUobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbMV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmVudGVyKHUobWVzc2FnZSksIG8obWVzc2FnZSwgZmFsc2UsIHRoaXMuX2Nvbm5lY3Rpb24pLCBhKG1lc3NhZ2UsIGZhbHNlKSlcblx0fVxuXG5cdGFzeW5jIFsyXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIubGVhdmUodShtZXNzYWdlKSwgbyhtZXNzYWdlLCBmYWxzZSwgdGhpcy5fY29ubmVjdGlvbikpXG5cdH1cblxuXHRhc3luYyBbM10gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmtleSh1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzRdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5tb2RpZmllcnModShtZXNzYWdlKSwgdShtZXNzYWdlKSwgdShtZXNzYWdlKSwgdShtZXNzYWdlKSwgdShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFs1XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIucmVwZWF0SW5mbyhpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpKVxuXHR9XG5cbn1cbldsS2V5Ym9hcmRQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfa2V5Ym9hcmQnXG5cbldsS2V5Ym9hcmRQcm94eS5LZXltYXBGb3JtYXQgPSB7XG4gIC8qKlxuICAgKiBubyBrZXltYXA7IGNsaWVudCBtdXN0IHVuZGVyc3RhbmQgaG93IHRvIGludGVycHJldCB0aGUgcmF3IGtleWNvZGVcbiAgICovXG4gIG5vS2V5bWFwOiAwLFxuICAvKipcbiAgICogbGlieGtiY29tbW9uIGNvbXBhdGlibGU7IHRvIGRldGVybWluZSB0aGUgeGtiIGtleWNvZGUsIGNsaWVudHMgbXVzdCBhZGQgOCB0byB0aGUga2V5IGV2ZW50IGtleWNvZGVcbiAgICovXG4gIHhrYlYxOiAxXG59XG5cbldsS2V5Ym9hcmRQcm94eS5LZXlTdGF0ZSA9IHtcbiAgLyoqXG4gICAqIGtleSBpcyBub3QgcHJlc3NlZFxuICAgKi9cbiAgcmVsZWFzZWQ6IDAsXG4gIC8qKlxuICAgKiBrZXkgaXMgcHJlc3NlZFxuICAgKi9cbiAgcHJlc3NlZDogMVxufVxuXG5leHBvcnQgZGVmYXVsdCBXbEtleWJvYXJkUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXbE91dHB1dEV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgZ2VvbWV0cnkgZXZlbnQgZGVzY3JpYmVzIGdlb21ldHJpYyBwcm9wZXJ0aWVzIG9mIHRoZSBvdXRwdXQuXG5cdCAqXHRUaGUgZXZlbnQgaXMgc2VudCB3aGVuIGJpbmRpbmcgdG8gdGhlIG91dHB1dCBvYmplY3QgYW5kIHdoZW5ldmVyXG5cdCAqXHRhbnkgb2YgdGhlIHByb3BlcnRpZXMgY2hhbmdlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0geCB4IHBvc2l0aW9uIHdpdGhpbiB0aGUgZ2xvYmFsIGNvbXBvc2l0b3Igc3BhY2UgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgcG9zaXRpb24gd2l0aGluIHRoZSBnbG9iYWwgY29tcG9zaXRvciBzcGFjZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBoeXNpY2FsV2lkdGggd2lkdGggaW4gbWlsbGltZXRlcnMgb2YgdGhlIG91dHB1dCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBoeXNpY2FsSGVpZ2h0IGhlaWdodCBpbiBtaWxsaW1ldGVycyBvZiB0aGUgb3V0cHV0IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gc3VicGl4ZWwgc3VicGl4ZWwgb3JpZW50YXRpb24gb2YgdGhlIG91dHB1dCBcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1ha2UgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGUgbWFudWZhY3R1cmVyIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbW9kZWwgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGUgbW9kZWwgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2Zvcm0gdHJhbnNmb3JtIHRoYXQgbWFwcyBmcmFtZWJ1ZmZlciB0byBvdXRwdXQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRnZW9tZXRyeSh4LCB5LCBwaHlzaWNhbFdpZHRoLCBwaHlzaWNhbEhlaWdodCwgc3VicGl4ZWwsIG1ha2UsIG1vZGVsLCB0cmFuc2Zvcm0pIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgbW9kZSBldmVudCBkZXNjcmliZXMgYW4gYXZhaWxhYmxlIG1vZGUgZm9yIHRoZSBvdXRwdXQuXG5cdCAqXG5cdCAqXHRUaGUgZXZlbnQgaXMgc2VudCB3aGVuIGJpbmRpbmcgdG8gdGhlIG91dHB1dCBvYmplY3QgYW5kIHRoZXJlXG5cdCAqXHR3aWxsIGFsd2F5cyBiZSBvbmUgbW9kZSwgdGhlIGN1cnJlbnQgbW9kZS4gIFRoZSBldmVudCBpcyBzZW50XG5cdCAqXHRhZ2FpbiBpZiBhbiBvdXRwdXQgY2hhbmdlcyBtb2RlLCBmb3IgdGhlIG1vZGUgdGhhdCBpcyBub3dcblx0ICpcdGN1cnJlbnQuICBJbiBvdGhlciB3b3JkcywgdGhlIGN1cnJlbnQgbW9kZSBpcyBhbHdheXMgdGhlIGxhc3Rcblx0ICpcdG1vZGUgdGhhdCB3YXMgcmVjZWl2ZWQgd2l0aCB0aGUgY3VycmVudCBmbGFnIHNldC5cblx0ICpcblx0ICpcdFRoZSBzaXplIG9mIGEgbW9kZSBpcyBnaXZlbiBpbiBwaHlzaWNhbCBoYXJkd2FyZSB1bml0cyBvZlxuXHQgKlx0dGhlIG91dHB1dCBkZXZpY2UuIFRoaXMgaXMgbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIGFzXG5cdCAqXHR0aGUgb3V0cHV0IHNpemUgaW4gdGhlIGdsb2JhbCBjb21wb3NpdG9yIHNwYWNlLiBGb3IgaW5zdGFuY2UsXG5cdCAqXHR0aGUgb3V0cHV0IG1heSBiZSBzY2FsZWQsIGFzIGRlc2NyaWJlZCBpbiB3bF9vdXRwdXQuc2NhbGUsXG5cdCAqXHRvciB0cmFuc2Zvcm1lZCwgYXMgZGVzY3JpYmVkIGluIHdsX291dHB1dC50cmFuc2Zvcm0uXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBiaXRmaWVsZCBvZiBtb2RlIGZsYWdzIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggd2lkdGggb2YgdGhlIG1vZGUgaW4gaGFyZHdhcmUgdW5pdHMgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgaGVpZ2h0IG9mIHRoZSBtb2RlIGluIGhhcmR3YXJlIHVuaXRzIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gcmVmcmVzaCB2ZXJ0aWNhbCByZWZyZXNoIHJhdGUgaW4gbUh6IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0bW9kZShmbGFncywgd2lkdGgsIGhlaWdodCwgcmVmcmVzaCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgaXMgc2VudCBhZnRlciBhbGwgb3RoZXIgcHJvcGVydGllcyBoYXZlIGJlZW5cblx0ICpcdHNlbnQgYWZ0ZXIgYmluZGluZyB0byB0aGUgb3V0cHV0IG9iamVjdCBhbmQgYWZ0ZXIgYW55XG5cdCAqXHRvdGhlciBwcm9wZXJ0eSBjaGFuZ2VzIGRvbmUgYWZ0ZXIgdGhhdC4gVGhpcyBhbGxvd3Ncblx0ICpcdGNoYW5nZXMgdG8gdGhlIG91dHB1dCBwcm9wZXJ0aWVzIHRvIGJlIHNlZW4gYXNcblx0ICpcdGF0b21pYywgZXZlbiBpZiB0aGV5IGhhcHBlbiB2aWEgbXVsdGlwbGUgZXZlbnRzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKlxuXHQgKiBAc2luY2UgMlxuXHQgKlxuXHQgKi9cblx0ZG9uZSgpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGNvbnRhaW5zIHNjYWxpbmcgZ2VvbWV0cnkgaW5mb3JtYXRpb25cblx0ICpcdHRoYXQgaXMgbm90IGluIHRoZSBnZW9tZXRyeSBldmVudC4gSXQgbWF5IGJlIHNlbnQgYWZ0ZXJcblx0ICpcdGJpbmRpbmcgdGhlIG91dHB1dCBvYmplY3Qgb3IgaWYgdGhlIG91dHB1dCBzY2FsZSBjaGFuZ2VzXG5cdCAqXHRsYXRlci4gSWYgaXQgaXMgbm90IHNlbnQsIHRoZSBjbGllbnQgc2hvdWxkIGFzc3VtZSBhXG5cdCAqXHRzY2FsZSBvZiAxLlxuXHQgKlxuXHQgKlx0QSBzY2FsZSBsYXJnZXIgdGhhbiAxIG1lYW5zIHRoYXQgdGhlIGNvbXBvc2l0b3Igd2lsbFxuXHQgKlx0YXV0b21hdGljYWxseSBzY2FsZSBzdXJmYWNlIGJ1ZmZlcnMgYnkgdGhpcyBhbW91bnRcblx0ICpcdHdoZW4gcmVuZGVyaW5nLiBUaGlzIGlzIHVzZWQgZm9yIHZlcnkgaGlnaCByZXNvbHV0aW9uXG5cdCAqXHRkaXNwbGF5cyB3aGVyZSBhcHBsaWNhdGlvbnMgcmVuZGVyaW5nIGF0IHRoZSBuYXRpdmVcblx0ICpcdHJlc29sdXRpb24gd291bGQgYmUgdG9vIHNtYWxsIHRvIGJlIGxlZ2libGUuXG5cdCAqXG5cdCAqXHRJdCBpcyBpbnRlbmRlZCB0aGF0IHNjYWxpbmcgYXdhcmUgY2xpZW50cyB0cmFjayB0aGVcblx0ICpcdGN1cnJlbnQgb3V0cHV0IG9mIGEgc3VyZmFjZSwgYW5kIGlmIGl0IGlzIG9uIGEgc2NhbGVkXG5cdCAqXHRvdXRwdXQgaXQgc2hvdWxkIHVzZSB3bF9zdXJmYWNlLnNldF9idWZmZXJfc2NhbGUgd2l0aFxuXHQgKlx0dGhlIHNjYWxlIG9mIHRoZSBvdXRwdXQuIFRoYXQgd2F5IHRoZSBjb21wb3NpdG9yIGNhblxuXHQgKlx0YXZvaWQgc2NhbGluZyB0aGUgc3VyZmFjZSwgYW5kIHRoZSBjbGllbnQgY2FuIHN1cHBseVxuXHQgKlx0YSBoaWdoZXIgZGV0YWlsIGltYWdlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZmFjdG9yIHNjYWxpbmcgZmFjdG9yIG9mIG91dHB1dCBcblx0ICpcblx0ICogQHNpbmNlIDJcblx0ICpcblx0ICovXG5cdHNjYWxlKGZhY3Rvcikge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgQW4gb3V0cHV0IGRlc2NyaWJlcyBwYXJ0IG9mIHRoZSBjb21wb3NpdG9yIGdlb21ldHJ5LiAgVGhlXG4gKiAgICAgIGNvbXBvc2l0b3Igd29ya3MgaW4gdGhlICdjb21wb3NpdG9yIGNvb3JkaW5hdGUgc3lzdGVtJyBhbmQgYW5cbiAqICAgICAgb3V0cHV0IGNvcnJlc3BvbmRzIHRvIGEgcmVjdGFuZ3VsYXIgYXJlYSBpbiB0aGF0IHNwYWNlIHRoYXQgaXNcbiAqICAgICAgYWN0dWFsbHkgdmlzaWJsZS4gIFRoaXMgdHlwaWNhbGx5IGNvcnJlc3BvbmRzIHRvIGEgbW9uaXRvciB0aGF0XG4gKiAgICAgIGRpc3BsYXlzIHBhcnQgb2YgdGhlIGNvbXBvc2l0b3Igc3BhY2UuICBUaGlzIG9iamVjdCBpcyBwdWJsaXNoZWRcbiAqICAgICAgYXMgZ2xvYmFsIGR1cmluZyBzdGFydCB1cCwgb3Igd2hlbiBhIG1vbml0b3IgaXMgaG90cGx1Z2dlZC5cbiAqICAgIFxuICovXG5jbGFzcyBXbE91dHB1dFByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VXNpbmcgdGhpcyByZXF1ZXN0IGEgY2xpZW50IGNhbiB0ZWxsIHRoZSBzZXJ2ZXIgdGhhdCBpdCBpcyBub3QgZ29pbmcgdG9cblx0ICpcdHVzZSB0aGUgb3V0cHV0IG9iamVjdCBhbnltb3JlLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgM1xuXHQgKlxuXHQgKi9cblx0cmVsZWFzZSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW10pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xPdXRwdXRFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5nZW9tZXRyeShpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBzKG1lc3NhZ2UsIGZhbHNlKSwgcyhtZXNzYWdlLCBmYWxzZSksIGkobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbMV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLm1vZGUodShtZXNzYWdlKSwgaShtZXNzYWdlKSwgaShtZXNzYWdlKSwgaShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsyXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZG9uZSgpXG5cdH1cblxuXHRhc3luYyBbM10gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLnNjYWxlKGkobWVzc2FnZSkpXG5cdH1cblxufVxuV2xPdXRwdXRQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfb3V0cHV0J1xuXG5XbE91dHB1dFByb3h5LlN1YnBpeGVsID0ge1xuICAvKipcbiAgICogdW5rbm93biBnZW9tZXRyeVxuICAgKi9cbiAgdW5rbm93bjogMCxcbiAgLyoqXG4gICAqIG5vIGdlb21ldHJ5XG4gICAqL1xuICBub25lOiAxLFxuICAvKipcbiAgICogaG9yaXpvbnRhbCBSR0JcbiAgICovXG4gIGhvcml6b250YWxSZ2I6IDIsXG4gIC8qKlxuICAgKiBob3Jpem9udGFsIEJHUlxuICAgKi9cbiAgaG9yaXpvbnRhbEJncjogMyxcbiAgLyoqXG4gICAqIHZlcnRpY2FsIFJHQlxuICAgKi9cbiAgdmVydGljYWxSZ2I6IDQsXG4gIC8qKlxuICAgKiB2ZXJ0aWNhbCBCR1JcbiAgICovXG4gIHZlcnRpY2FsQmdyOiA1XG59XG5cbldsT3V0cHV0UHJveHkuVHJhbnNmb3JtID0ge1xuICAvKipcbiAgICogbm8gdHJhbnNmb3JtXG4gICAqL1xuICBub3JtYWw6IDAsXG4gIC8qKlxuICAgKiA5MCBkZWdyZWVzIGNvdW50ZXItY2xvY2t3aXNlXG4gICAqL1xuICA5MDogMSxcbiAgLyoqXG4gICAqIDE4MCBkZWdyZWVzIGNvdW50ZXItY2xvY2t3aXNlXG4gICAqL1xuICAxODA6IDIsXG4gIC8qKlxuICAgKiAyNzAgZGVncmVlcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAgKi9cbiAgMjcwOiAzLFxuICAvKipcbiAgICogMTgwIGRlZ3JlZSBmbGlwIGFyb3VuZCBhIHZlcnRpY2FsIGF4aXNcbiAgICovXG4gIGZsaXBwZWQ6IDQsXG4gIC8qKlxuICAgKiBmbGlwIGFuZCByb3RhdGUgOTAgZGVncmVlcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAgKi9cbiAgZmxpcHBlZDkwOiA1LFxuICAvKipcbiAgICogZmxpcCBhbmQgcm90YXRlIDE4MCBkZWdyZWVzIGNvdW50ZXItY2xvY2t3aXNlXG4gICAqL1xuICBmbGlwcGVkMTgwOiA2LFxuICAvKipcbiAgICogZmxpcCBhbmQgcm90YXRlIDI3MCBkZWdyZWVzIGNvdW50ZXItY2xvY2t3aXNlXG4gICAqL1xuICBmbGlwcGVkMjcwOiA3XG59XG5cbldsT3V0cHV0UHJveHkuTW9kZSA9IHtcbiAgLyoqXG4gICAqIGluZGljYXRlcyB0aGlzIGlzIHRoZSBjdXJyZW50IG1vZGVcbiAgICovXG4gIGN1cnJlbnQ6IDB4MSxcbiAgLyoqXG4gICAqIGluZGljYXRlcyB0aGlzIGlzIHRoZSBwcmVmZXJyZWQgbW9kZVxuICAgKi9cbiAgcHJlZmVycmVkOiAweDJcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2xPdXRwdXRQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsUG9pbnRlckV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHROb3RpZmljYXRpb24gdGhhdCB0aGlzIHNlYXQncyBwb2ludGVyIGlzIGZvY3VzZWQgb24gYSBjZXJ0YWluXG5cdCAqXHRzdXJmYWNlLlxuXHQgKlxuXHQgKlx0V2hlbiBhIHNlYXQncyBmb2N1cyBlbnRlcnMgYSBzdXJmYWNlLCB0aGUgcG9pbnRlciBpbWFnZVxuXHQgKlx0aXMgdW5kZWZpbmVkIGFuZCBhIGNsaWVudCBzaG91bGQgcmVzcG9uZCB0byB0aGlzIGV2ZW50IGJ5IHNldHRpbmdcblx0ICpcdGFuIGFwcHJvcHJpYXRlIHBvaW50ZXIgaW1hZ2Ugd2l0aCB0aGUgc2V0X2N1cnNvciByZXF1ZXN0LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGVudGVyIGV2ZW50IFxuXHQgKiBAcGFyYW0geyp9IHN1cmZhY2Ugc3VyZmFjZSBlbnRlcmVkIGJ5IHRoZSBwb2ludGVyIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSBzdXJmYWNlWCBzdXJmYWNlLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtGaXhlZH0gc3VyZmFjZVkgc3VyZmFjZS1sb2NhbCB5IGNvb3JkaW5hdGUgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRlbnRlcihzZXJpYWwsIHN1cmZhY2UsIHN1cmZhY2VYLCBzdXJmYWNlWSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdE5vdGlmaWNhdGlvbiB0aGF0IHRoaXMgc2VhdCdzIHBvaW50ZXIgaXMgbm8gbG9uZ2VyIGZvY3VzZWQgb25cblx0ICpcdGEgY2VydGFpbiBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhlIGxlYXZlIG5vdGlmaWNhdGlvbiBpcyBzZW50IGJlZm9yZSB0aGUgZW50ZXIgbm90aWZpY2F0aW9uXG5cdCAqXHRmb3IgdGhlIG5ldyBmb2N1cy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBsZWF2ZSBldmVudCBcblx0ICogQHBhcmFtIHsqfSBzdXJmYWNlIHN1cmZhY2UgbGVmdCBieSB0aGUgcG9pbnRlciBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGxlYXZlKHNlcmlhbCwgc3VyZmFjZSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdE5vdGlmaWNhdGlvbiBvZiBwb2ludGVyIGxvY2F0aW9uIGNoYW5nZS4gVGhlIGFyZ3VtZW50c1xuXHQgKlx0c3VyZmFjZV94IGFuZCBzdXJmYWNlX3kgYXJlIHRoZSBsb2NhdGlvbiByZWxhdGl2ZSB0byB0aGVcblx0ICpcdGZvY3VzZWQgc3VyZmFjZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgdGltZXN0YW1wIHdpdGggbWlsbGlzZWNvbmQgZ3JhbnVsYXJpdHkgXG5cdCAqIEBwYXJhbSB7Rml4ZWR9IHN1cmZhY2VYIHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge0ZpeGVkfSBzdXJmYWNlWSBzdXJmYWNlLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdG1vdGlvbih0aW1lLCBzdXJmYWNlWCwgc3VyZmFjZVkpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRNb3VzZSBidXR0b24gY2xpY2sgYW5kIHJlbGVhc2Ugbm90aWZpY2F0aW9ucy5cblx0ICpcblx0ICpcdFRoZSBsb2NhdGlvbiBvZiB0aGUgY2xpY2sgaXMgZ2l2ZW4gYnkgdGhlIGxhc3QgbW90aW9uIG9yXG5cdCAqXHRlbnRlciBldmVudC5cblx0ICpcdFRoZSB0aW1lIGFyZ3VtZW50IGlzIGEgdGltZXN0YW1wIHdpdGggbWlsbGlzZWNvbmRcblx0ICpcdGdyYW51bGFyaXR5LCB3aXRoIGFuIHVuZGVmaW5lZCBiYXNlLlxuXHQgKlxuXHQgKlx0VGhlIGJ1dHRvbiBpcyBhIGJ1dHRvbiBjb2RlIGFzIGRlZmluZWQgaW4gdGhlIExpbnV4IGtlcm5lbCdzXG5cdCAqXHRsaW51eC9pbnB1dC1ldmVudC1jb2Rlcy5oIGhlYWRlciBmaWxlLCBlLmcuIEJUTl9MRUZULlxuXHQgKlxuXHQgKlx0QW55IDE2LWJpdCBidXR0b24gY29kZSB2YWx1ZSBpcyByZXNlcnZlZCBmb3IgZnV0dXJlIGFkZGl0aW9ucyB0byB0aGVcblx0ICpcdGtlcm5lbCdzIGV2ZW50IGNvZGUgbGlzdC4gQWxsIG90aGVyIGJ1dHRvbiBjb2RlcyBhYm92ZSAweEZGRkYgYXJlXG5cdCAqXHRjdXJyZW50bHkgdW5kZWZpbmVkIGJ1dCBtYXkgYmUgdXNlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgdGhpc1xuXHQgKlx0cHJvdG9jb2wuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgYnV0dG9uIGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZCBncmFudWxhcml0eSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1dHRvbiBidXR0b24gdGhhdCBwcm9kdWNlZCB0aGUgZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZSBwaHlzaWNhbCBzdGF0ZSBvZiB0aGUgYnV0dG9uIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0YnV0dG9uKHNlcmlhbCwgdGltZSwgYnV0dG9uLCBzdGF0ZSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFNjcm9sbCBhbmQgb3RoZXIgYXhpcyBub3RpZmljYXRpb25zLlxuXHQgKlxuXHQgKlx0Rm9yIHNjcm9sbCBldmVudHMgKHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIHNjcm9sbCBheGVzKSwgdGhlXG5cdCAqXHR2YWx1ZSBwYXJhbWV0ZXIgaXMgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciBhbG9uZyB0aGUgc3BlY2lmaWVkXG5cdCAqXHRheGlzIGluIGEgY29vcmRpbmF0ZSBzcGFjZSBpZGVudGljYWwgdG8gdGhvc2Ugb2YgbW90aW9uIGV2ZW50cyxcblx0ICpcdHJlcHJlc2VudGluZyBhIHJlbGF0aXZlIG1vdmVtZW50IGFsb25nIHRoZSBzcGVjaWZpZWQgYXhpcy5cblx0ICpcblx0ICpcdEZvciBkZXZpY2VzIHRoYXQgc3VwcG9ydCBtb3ZlbWVudHMgbm9uLXBhcmFsbGVsIHRvIGF4ZXMgbXVsdGlwbGVcblx0ICpcdGF4aXMgZXZlbnRzIHdpbGwgYmUgZW1pdHRlZC5cblx0ICpcblx0ICpcdFdoZW4gYXBwbGljYWJsZSwgZm9yIGV4YW1wbGUgZm9yIHRvdWNoIHBhZHMsIHRoZSBzZXJ2ZXIgY2FuXG5cdCAqXHRjaG9vc2UgdG8gZW1pdCBzY3JvbGwgZXZlbnRzIHdoZXJlIHRoZSBtb3Rpb24gdmVjdG9yIGlzXG5cdCAqXHRlcXVpdmFsZW50IHRvIGEgbW90aW9uIGV2ZW50IHZlY3Rvci5cblx0ICpcblx0ICpcdFdoZW4gYXBwbGljYWJsZSwgYSBjbGllbnQgY2FuIHRyYW5zZm9ybSBpdHMgY29udGVudCByZWxhdGl2ZSB0byB0aGVcblx0ICpcdHNjcm9sbCBkaXN0YW5jZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgdGltZXN0YW1wIHdpdGggbWlsbGlzZWNvbmQgZ3JhbnVsYXJpdHkgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBheGlzIGF4aXMgdHlwZSBcblx0ICogQHBhcmFtIHtGaXhlZH0gdmFsdWUgbGVuZ3RoIG9mIHZlY3RvciBpbiBzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGUgc3BhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRheGlzKHRpbWUsIGF4aXMsIHZhbHVlKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0SW5kaWNhdGVzIHRoZSBlbmQgb2YgYSBzZXQgb2YgZXZlbnRzIHRoYXQgbG9naWNhbGx5IGJlbG9uZyB0b2dldGhlci5cblx0ICpcdEEgY2xpZW50IGlzIGV4cGVjdGVkIHRvIGFjY3VtdWxhdGUgdGhlIGRhdGEgaW4gYWxsIGV2ZW50cyB3aXRoaW4gdGhlXG5cdCAqXHRmcmFtZSBiZWZvcmUgcHJvY2VlZGluZy5cblx0ICpcblx0ICpcdEFsbCB3bF9wb2ludGVyIGV2ZW50cyBiZWZvcmUgYSB3bF9wb2ludGVyLmZyYW1lIGV2ZW50IGJlbG9uZ1xuXHQgKlx0bG9naWNhbGx5IHRvZ2V0aGVyLiBGb3IgZXhhbXBsZSwgaW4gYSBkaWFnb25hbCBzY3JvbGwgbW90aW9uIHRoZVxuXHQgKlx0Y29tcG9zaXRvciB3aWxsIHNlbmQgYW4gb3B0aW9uYWwgd2xfcG9pbnRlci5heGlzX3NvdXJjZSBldmVudCwgdHdvXG5cdCAqXHR3bF9wb2ludGVyLmF4aXMgZXZlbnRzIChob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCkgYW5kIGZpbmFsbHkgYVxuXHQgKlx0d2xfcG9pbnRlci5mcmFtZSBldmVudC4gVGhlIGNsaWVudCBtYXkgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG9cblx0ICpcdGNhbGN1bGF0ZSBhIGRpYWdvbmFsIHZlY3RvciBmb3Igc2Nyb2xsaW5nLlxuXHQgKlxuXHQgKlx0V2hlbiBtdWx0aXBsZSB3bF9wb2ludGVyLmF4aXMgZXZlbnRzIG9jY3VyIHdpdGhpbiB0aGUgc2FtZSBmcmFtZSxcblx0ICpcdHRoZSBtb3Rpb24gdmVjdG9yIGlzIHRoZSBjb21iaW5lZCBtb3Rpb24gb2YgYWxsIGV2ZW50cy5cblx0ICpcdFdoZW4gYSB3bF9wb2ludGVyLmF4aXMgYW5kIGEgd2xfcG9pbnRlci5heGlzX3N0b3AgZXZlbnQgb2NjdXIgd2l0aGluXG5cdCAqXHR0aGUgc2FtZSBmcmFtZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCBheGlzIG1vdmVtZW50IGluIG9uZSBheGlzIGhhc1xuXHQgKlx0c3RvcHBlZCBidXQgY29udGludWVzIGluIHRoZSBvdGhlciBheGlzLlxuXHQgKlx0V2hlbiBtdWx0aXBsZSB3bF9wb2ludGVyLmF4aXNfc3RvcCBldmVudHMgb2NjdXIgd2l0aGluIHRoZSBzYW1lXG5cdCAqXHRmcmFtZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGVzZSBheGVzIHN0b3BwZWQgaW4gdGhlIHNhbWUgaW5zdGFuY2UuXG5cdCAqXG5cdCAqXHRBIHdsX3BvaW50ZXIuZnJhbWUgZXZlbnQgaXMgc2VudCBmb3IgZXZlcnkgbG9naWNhbCBldmVudCBncm91cCxcblx0ICpcdGV2ZW4gaWYgdGhlIGdyb3VwIG9ubHkgY29udGFpbnMgYSBzaW5nbGUgd2xfcG9pbnRlciBldmVudC5cblx0ICpcdFNwZWNpZmljYWxseSwgYSBjbGllbnQgbWF5IGdldCBhIHNlcXVlbmNlOiBtb3Rpb24sIGZyYW1lLCBidXR0b24sXG5cdCAqXHRmcmFtZSwgYXhpcywgZnJhbWUsIGF4aXNfc3RvcCwgZnJhbWUuXG5cdCAqXG5cdCAqXHRUaGUgd2xfcG9pbnRlci5lbnRlciBhbmQgd2xfcG9pbnRlci5sZWF2ZSBldmVudHMgYXJlIGxvZ2ljYWwgZXZlbnRzXG5cdCAqXHRnZW5lcmF0ZWQgYnkgdGhlIGNvbXBvc2l0b3IgYW5kIG5vdCB0aGUgaGFyZHdhcmUuIFRoZXNlIGV2ZW50cyBhcmVcblx0ICpcdGFsc28gZ3JvdXBlZCBieSBhIHdsX3BvaW50ZXIuZnJhbWUuIFdoZW4gYSBwb2ludGVyIG1vdmVzIGZyb20gb25lXG5cdCAqXHRzdXJmYWNlIHRvIGFub3RoZXIsIGEgY29tcG9zaXRvciBzaG91bGQgZ3JvdXAgdGhlXG5cdCAqXHR3bF9wb2ludGVyLmxlYXZlIGV2ZW50IHdpdGhpbiB0aGUgc2FtZSB3bF9wb2ludGVyLmZyYW1lLlxuXHQgKlx0SG93ZXZlciwgYSBjbGllbnQgbXVzdCBub3QgcmVseSBvbiB3bF9wb2ludGVyLmxlYXZlIGFuZFxuXHQgKlx0d2xfcG9pbnRlci5lbnRlciBiZWluZyBpbiB0aGUgc2FtZSB3bF9wb2ludGVyLmZyYW1lLlxuXHQgKlx0Q29tcG9zaXRvci1zcGVjaWZpYyBwb2xpY2llcyBtYXkgcmVxdWlyZSB0aGUgd2xfcG9pbnRlci5sZWF2ZSBhbmRcblx0ICpcdHdsX3BvaW50ZXIuZW50ZXIgZXZlbnQgYmVpbmcgc3BsaXQgYWNyb3NzIG11bHRpcGxlIHdsX3BvaW50ZXIuZnJhbWVcblx0ICpcdGdyb3Vwcy5cblx0ICogICAgICBcblx0ICpcblx0ICpcblx0ICogQHNpbmNlIDVcblx0ICpcblx0ICovXG5cdGZyYW1lKCkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFNvdXJjZSBpbmZvcm1hdGlvbiBmb3Igc2Nyb2xsIGFuZCBvdGhlciBheGVzLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBkb2VzIG5vdCBvY2N1ciBvbiBpdHMgb3duLiBJdCBpcyBzZW50IGJlZm9yZSBhXG5cdCAqXHR3bF9wb2ludGVyLmZyYW1lIGV2ZW50IGFuZCBjYXJyaWVzIHRoZSBzb3VyY2UgaW5mb3JtYXRpb24gZm9yXG5cdCAqXHRhbGwgZXZlbnRzIHdpdGhpbiB0aGF0IGZyYW1lLlxuXHQgKlxuXHQgKlx0VGhlIHNvdXJjZSBzcGVjaWZpZXMgaG93IHRoaXMgZXZlbnQgd2FzIGdlbmVyYXRlZC4gSWYgdGhlIHNvdXJjZSBpc1xuXHQgKlx0d2xfcG9pbnRlci5heGlzX3NvdXJjZS5maW5nZXIsIGEgd2xfcG9pbnRlci5heGlzX3N0b3AgZXZlbnQgd2lsbCBiZVxuXHQgKlx0c2VudCB3aGVuIHRoZSB1c2VyIGxpZnRzIHRoZSBmaW5nZXIgb2ZmIHRoZSBkZXZpY2UuXG5cdCAqXG5cdCAqXHRJZiB0aGUgc291cmNlIGlzIHdsX3BvaW50ZXIuYXhpc19zb3VyY2Uud2hlZWwsXG5cdCAqXHR3bF9wb2ludGVyLmF4aXNfc291cmNlLndoZWVsX3RpbHQgb3Jcblx0ICpcdHdsX3BvaW50ZXIuYXhpc19zb3VyY2UuY29udGludW91cywgYSB3bF9wb2ludGVyLmF4aXNfc3RvcCBldmVudCBtYXlcblx0ICpcdG9yIG1heSBub3QgYmUgc2VudC4gV2hldGhlciBhIGNvbXBvc2l0b3Igc2VuZHMgYW4gYXhpc19zdG9wIGV2ZW50XG5cdCAqXHRmb3IgdGhlc2Ugc291cmNlcyBpcyBoYXJkd2FyZS1zcGVjaWZpYyBhbmQgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50O1xuXHQgKlx0Y2xpZW50cyBtdXN0IG5vdCByZWx5IG9uIHJlY2VpdmluZyBhbiBheGlzX3N0b3AgZXZlbnQgZm9yIHRoZXNlXG5cdCAqXHRzY3JvbGwgc291cmNlcyBhbmQgc2hvdWxkIHRyZWF0IHNjcm9sbCBzZXF1ZW5jZXMgZnJvbSB0aGVzZSBzY3JvbGxcblx0ICpcdHNvdXJjZXMgYXMgdW50ZXJtaW5hdGVkIGJ5IGRlZmF1bHQuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGlzIG9wdGlvbmFsLiBJZiB0aGUgc291cmNlIGlzIHVua25vd24gZm9yIGEgcGFydGljdWxhclxuXHQgKlx0YXhpcyBldmVudCBzZXF1ZW5jZSwgbm8gZXZlbnQgaXMgc2VudC5cblx0ICpcdE9ubHkgb25lIHdsX3BvaW50ZXIuYXhpc19zb3VyY2UgZXZlbnQgaXMgcGVybWl0dGVkIHBlciBmcmFtZS5cblx0ICpcblx0ICpcdFRoZSBvcmRlciBvZiB3bF9wb2ludGVyLmF4aXNfZGlzY3JldGUgYW5kIHdsX3BvaW50ZXIuYXhpc19zb3VyY2UgaXNcblx0ICpcdG5vdCBndWFyYW50ZWVkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYXhpc1NvdXJjZSBzb3VyY2Ugb2YgdGhlIGF4aXMgZXZlbnQgXG5cdCAqXG5cdCAqIEBzaW5jZSA1XG5cdCAqXG5cdCAqL1xuXHRheGlzU291cmNlKGF4aXNTb3VyY2UpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTdG9wIG5vdGlmaWNhdGlvbiBmb3Igc2Nyb2xsIGFuZCBvdGhlciBheGVzLlxuXHQgKlxuXHQgKlx0Rm9yIHNvbWUgd2xfcG9pbnRlci5heGlzX3NvdXJjZSB0eXBlcywgYSB3bF9wb2ludGVyLmF4aXNfc3RvcCBldmVudFxuXHQgKlx0aXMgc2VudCB0byBub3RpZnkgYSBjbGllbnQgdGhhdCB0aGUgYXhpcyBzZXF1ZW5jZSBoYXMgdGVybWluYXRlZC5cblx0ICpcdFRoaXMgZW5hYmxlcyB0aGUgY2xpZW50IHRvIGltcGxlbWVudCBraW5ldGljIHNjcm9sbGluZy5cblx0ICpcdFNlZSB0aGUgd2xfcG9pbnRlci5heGlzX3NvdXJjZSBkb2N1bWVudGF0aW9uIGZvciBpbmZvcm1hdGlvbiBvbiB3aGVuXG5cdCAqXHR0aGlzIGV2ZW50IG1heSBiZSBnZW5lcmF0ZWQuXG5cdCAqXG5cdCAqXHRBbnkgd2xfcG9pbnRlci5heGlzIGV2ZW50cyB3aXRoIHRoZSBzYW1lIGF4aXNfc291cmNlIGFmdGVyIHRoaXNcblx0ICpcdGV2ZW50IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHRoZSBzdGFydCBvZiBhIG5ldyBheGlzIG1vdGlvbi5cblx0ICpcblx0ICpcdFRoZSB0aW1lc3RhbXAgaXMgdG8gYmUgaW50ZXJwcmV0ZWQgaWRlbnRpY2FsIHRvIHRoZSB0aW1lc3RhbXAgaW4gdGhlXG5cdCAqXHR3bF9wb2ludGVyLmF4aXMgZXZlbnQuIFRoZSB0aW1lc3RhbXAgdmFsdWUgbWF5IGJlIHRoZSBzYW1lIGFzIGFcblx0ICpcdHByZWNlZGluZyB3bF9wb2ludGVyLmF4aXMgZXZlbnQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIHRpbWVzdGFtcCB3aXRoIG1pbGxpc2Vjb25kIGdyYW51bGFyaXR5IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gYXhpcyB0aGUgYXhpcyBzdG9wcGVkIHdpdGggdGhpcyBldmVudCBcblx0ICpcblx0ICogQHNpbmNlIDVcblx0ICpcblx0ICovXG5cdGF4aXNTdG9wKHRpbWUsIGF4aXMpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHREaXNjcmV0ZSBzdGVwIGluZm9ybWF0aW9uIGZvciBzY3JvbGwgYW5kIG90aGVyIGF4ZXMuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGNhcnJpZXMgdGhlIGF4aXMgdmFsdWUgb2YgdGhlIHdsX3BvaW50ZXIuYXhpcyBldmVudCBpblxuXHQgKlx0ZGlzY3JldGUgc3RlcHMgKGUuZy4gbW91c2Ugd2hlZWwgY2xpY2tzKS5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgZG9lcyBub3Qgb2NjdXIgb24gaXRzIG93biwgaXQgaXMgY291cGxlZCB3aXRoIGFcblx0ICpcdHdsX3BvaW50ZXIuYXhpcyBldmVudCB0aGF0IHJlcHJlc2VudHMgdGhpcyBheGlzIHZhbHVlIG9uIGFcblx0ICpcdGNvbnRpbnVvdXMgc2NhbGUuIFRoZSBwcm90b2NvbCBndWFyYW50ZWVzIHRoYXQgZWFjaCBheGlzX2Rpc2NyZXRlXG5cdCAqXHRldmVudCBpcyBhbHdheXMgZm9sbG93ZWQgYnkgZXhhY3RseSBvbmUgYXhpcyBldmVudCB3aXRoIHRoZSBzYW1lXG5cdCAqXHRheGlzIG51bWJlciB3aXRoaW4gdGhlIHNhbWUgd2xfcG9pbnRlci5mcmFtZS4gTm90ZSB0aGF0IHRoZSBwcm90b2NvbFxuXHQgKlx0YWxsb3dzIGZvciBvdGhlciBldmVudHMgdG8gb2NjdXIgYmV0d2VlbiB0aGUgYXhpc19kaXNjcmV0ZSBhbmRcblx0ICpcdGl0cyBjb3VwbGVkIGF4aXMgZXZlbnQsIGluY2x1ZGluZyBvdGhlciBheGlzX2Rpc2NyZXRlIG9yIGF4aXNcblx0ICpcdGV2ZW50cy5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgaXMgb3B0aW9uYWw7IGNvbnRpbnVvdXMgc2Nyb2xsaW5nIGRldmljZXNcblx0ICpcdGxpa2UgdHdvLWZpbmdlciBzY3JvbGxpbmcgb24gdG91Y2hwYWRzIGRvIG5vdCBoYXZlIGRpc2NyZXRlXG5cdCAqXHRzdGVwcyBhbmQgZG8gbm90IGdlbmVyYXRlIHRoaXMgZXZlbnQuXG5cdCAqXG5cdCAqXHRUaGUgZGlzY3JldGUgdmFsdWUgY2FycmllcyB0aGUgZGlyZWN0aW9uYWwgaW5mb3JtYXRpb24uIGUuZy4gYSB2YWx1ZVxuXHQgKlx0b2YgLTIgaXMgdHdvIHN0ZXBzIHRvd2FyZHMgdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiB0aGlzIGF4aXMuXG5cdCAqXG5cdCAqXHRUaGUgYXhpcyBudW1iZXIgaXMgaWRlbnRpY2FsIHRvIHRoZSBheGlzIG51bWJlciBpbiB0aGUgYXNzb2NpYXRlZFxuXHQgKlx0YXhpcyBldmVudC5cblx0ICpcblx0ICpcdFRoZSBvcmRlciBvZiB3bF9wb2ludGVyLmF4aXNfZGlzY3JldGUgYW5kIHdsX3BvaW50ZXIuYXhpc19zb3VyY2UgaXNcblx0ICpcdG5vdCBndWFyYW50ZWVkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYXhpcyBheGlzIHR5cGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkaXNjcmV0ZSBudW1iZXIgb2Ygc3RlcHMgXG5cdCAqXG5cdCAqIEBzaW5jZSA1XG5cdCAqXG5cdCAqL1xuXHRheGlzRGlzY3JldGUoYXhpcywgZGlzY3JldGUpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoZSB3bF9wb2ludGVyIGludGVyZmFjZSByZXByZXNlbnRzIG9uZSBvciBtb3JlIGlucHV0IGRldmljZXMsXG4gKiAgICAgIHN1Y2ggYXMgbWljZSwgd2hpY2ggY29udHJvbCB0aGUgcG9pbnRlciBsb2NhdGlvbiBhbmQgcG9pbnRlcl9mb2N1c1xuICogICAgICBvZiBhIHNlYXQuXG4gKlxuICogICAgICBUaGUgd2xfcG9pbnRlciBpbnRlcmZhY2UgZ2VuZXJhdGVzIG1vdGlvbiwgZW50ZXIgYW5kIGxlYXZlXG4gKiAgICAgIGV2ZW50cyBmb3IgdGhlIHN1cmZhY2VzIHRoYXQgdGhlIHBvaW50ZXIgaXMgbG9jYXRlZCBvdmVyLFxuICogICAgICBhbmQgYnV0dG9uIGFuZCBheGlzIGV2ZW50cyBmb3IgYnV0dG9uIHByZXNzZXMsIGJ1dHRvbiByZWxlYXNlc1xuICogICAgICBhbmQgc2Nyb2xsaW5nLlxuICogICAgXG4gKi9cbmNsYXNzIFdsUG9pbnRlclByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0IHRoZSBwb2ludGVyIHN1cmZhY2UsIGkuZS4sIHRoZSBzdXJmYWNlIHRoYXQgY29udGFpbnMgdGhlXG5cdCAqXHRwb2ludGVyIGltYWdlIChjdXJzb3IpLiBUaGlzIHJlcXVlc3QgZ2l2ZXMgdGhlIHN1cmZhY2UgdGhlIHJvbGVcblx0ICpcdG9mIGEgY3Vyc29yLiBJZiB0aGUgc3VyZmFjZSBhbHJlYWR5IGhhcyBhbm90aGVyIHJvbGUsIGl0IHJhaXNlc1xuXHQgKlx0YSBwcm90b2NvbCBlcnJvci5cblx0ICpcblx0ICpcdFRoZSBjdXJzb3IgYWN0dWFsbHkgY2hhbmdlcyBvbmx5IGlmIHRoZSBwb2ludGVyXG5cdCAqXHRmb2N1cyBmb3IgdGhpcyBkZXZpY2UgaXMgb25lIG9mIHRoZSByZXF1ZXN0aW5nIGNsaWVudCdzIHN1cmZhY2VzXG5cdCAqXHRvciB0aGUgc3VyZmFjZSBwYXJhbWV0ZXIgaXMgdGhlIGN1cnJlbnQgcG9pbnRlciBzdXJmYWNlLiBJZlxuXHQgKlx0dGhlcmUgd2FzIGEgcHJldmlvdXMgc3VyZmFjZSBzZXQgd2l0aCB0aGlzIHJlcXVlc3QgaXQgaXNcblx0ICpcdHJlcGxhY2VkLiBJZiBzdXJmYWNlIGlzIE5VTEwsIHRoZSBwb2ludGVyIGltYWdlIGlzIGhpZGRlbi5cblx0ICpcblx0ICpcdFRoZSBwYXJhbWV0ZXJzIGhvdHNwb3RfeCBhbmQgaG90c3BvdF95IGRlZmluZSB0aGUgcG9zaXRpb24gb2Zcblx0ICpcdHRoZSBwb2ludGVyIHN1cmZhY2UgcmVsYXRpdmUgdG8gdGhlIHBvaW50ZXIgbG9jYXRpb24uIEl0c1xuXHQgKlx0dG9wLWxlZnQgY29ybmVyIGlzIGFsd2F5cyBhdCAoeCwgeSkgLSAoaG90c3BvdF94LCBob3RzcG90X3kpLFxuXHQgKlx0d2hlcmUgKHgsIHkpIGFyZSB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBvaW50ZXIgbG9jYXRpb24sIGluXG5cdCAqXHRzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGVzLlxuXHQgKlxuXHQgKlx0T24gc3VyZmFjZS5hdHRhY2ggcmVxdWVzdHMgdG8gdGhlIHBvaW50ZXIgc3VyZmFjZSwgaG90c3BvdF94XG5cdCAqXHRhbmQgaG90c3BvdF95IGFyZSBkZWNyZW1lbnRlZCBieSB0aGUgeCBhbmQgeSBwYXJhbWV0ZXJzXG5cdCAqXHRwYXNzZWQgdG8gdGhlIHJlcXVlc3QuIEF0dGFjaCBtdXN0IGJlIGNvbmZpcm1lZCBieVxuXHQgKlx0d2xfc3VyZmFjZS5jb21taXQgYXMgdXN1YWwuXG5cdCAqXG5cdCAqXHRUaGUgaG90c3BvdCBjYW4gYWxzbyBiZSB1cGRhdGVkIGJ5IHBhc3NpbmcgdGhlIGN1cnJlbnRseSBzZXRcblx0ICpcdHBvaW50ZXIgc3VyZmFjZSB0byB0aGlzIHJlcXVlc3Qgd2l0aCBuZXcgdmFsdWVzIGZvciBob3RzcG90X3hcblx0ICpcdGFuZCBob3RzcG90X3kuXG5cdCAqXG5cdCAqXHRUaGUgY3VycmVudCBhbmQgcGVuZGluZyBpbnB1dCByZWdpb25zIG9mIHRoZSB3bF9zdXJmYWNlIGFyZVxuXHQgKlx0Y2xlYXJlZCwgYW5kIHdsX3N1cmZhY2Uuc2V0X2lucHV0X3JlZ2lvbiBpcyBpZ25vcmVkIHVudGlsIHRoZVxuXHQgKlx0d2xfc3VyZmFjZSBpcyBubyBsb25nZXIgdXNlZCBhcyB0aGUgY3Vyc29yLiBXaGVuIHRoZSB1c2UgYXMgYVxuXHQgKlx0Y3Vyc29yIGVuZHMsIHRoZSBjdXJyZW50IGFuZCBwZW5kaW5nIGlucHV0IHJlZ2lvbnMgYmVjb21lXG5cdCAqXHR1bmRlZmluZWQsIGFuZCB0aGUgd2xfc3VyZmFjZSBpcyB1bm1hcHBlZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBlbnRlciBldmVudCBcblx0ICogQHBhcmFtIHs/Kn0gc3VyZmFjZSBwb2ludGVyIHN1cmZhY2UgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBob3RzcG90WCBzdXJmYWNlLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhvdHNwb3RZIHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0Q3Vyc29yIChzZXJpYWwsIHN1cmZhY2UsIGhvdHNwb3RYLCBob3RzcG90WSkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFt1aW50KHNlcmlhbCksIG9iamVjdE9wdGlvbmFsKHN1cmZhY2UpLCBpbnQoaG90c3BvdFgpLCBpbnQoaG90c3BvdFkpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VXNpbmcgdGhpcyByZXF1ZXN0IGEgY2xpZW50IGNhbiB0ZWxsIHRoZSBzZXJ2ZXIgdGhhdCBpdCBpcyBub3QgZ29pbmcgdG9cblx0ICpcdHVzZSB0aGUgcG9pbnRlciBvYmplY3QgYW55bW9yZS5cblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBkZXN0cm95cyB0aGUgcG9pbnRlciBwcm94eSBvYmplY3QsIHNvIGNsaWVudHMgbXVzdCBub3QgY2FsbFxuXHQgKlx0d2xfcG9pbnRlcl9kZXN0cm95KCkgYWZ0ZXIgdXNpbmcgdGhpcyByZXF1ZXN0LlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgM1xuXHQgKlxuXHQgKi9cblx0cmVsZWFzZSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMSwgW10pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xQb2ludGVyRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZW50ZXIodShtZXNzYWdlKSwgbyhtZXNzYWdlLCBmYWxzZSwgdGhpcy5fY29ubmVjdGlvbiksIGYobWVzc2FnZSksIGYobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbMV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmxlYXZlKHUobWVzc2FnZSksIG8obWVzc2FnZSwgZmFsc2UsIHRoaXMuX2Nvbm5lY3Rpb24pKVxuXHR9XG5cblx0YXN5bmMgWzJdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5tb3Rpb24odShtZXNzYWdlKSwgZihtZXNzYWdlKSwgZihtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFszXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuYnV0dG9uKHUobWVzc2FnZSksIHUobWVzc2FnZSksIHUobWVzc2FnZSksIHUobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbNF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmF4aXModShtZXNzYWdlKSwgdShtZXNzYWdlKSwgZihtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFs1XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZnJhbWUoKVxuXHR9XG5cblx0YXN5bmMgWzZdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5heGlzU291cmNlKHUobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbN10gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmF4aXNTdG9wKHUobWVzc2FnZSksIHUobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbOF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmF4aXNEaXNjcmV0ZSh1KG1lc3NhZ2UpLCBpKG1lc3NhZ2UpKVxuXHR9XG5cbn1cbldsUG9pbnRlclByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9wb2ludGVyJ1xuXG5XbFBvaW50ZXJQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIGdpdmVuIHdsX3N1cmZhY2UgaGFzIGFub3RoZXIgcm9sZVxuICAgKi9cbiAgcm9sZTogMFxufVxuXG5XbFBvaW50ZXJQcm94eS5CdXR0b25TdGF0ZSA9IHtcbiAgLyoqXG4gICAqIHRoZSBidXR0b24gaXMgbm90IHByZXNzZWRcbiAgICovXG4gIHJlbGVhc2VkOiAwLFxuICAvKipcbiAgICogdGhlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAqL1xuICBwcmVzc2VkOiAxXG59XG5cbldsUG9pbnRlclByb3h5LkF4aXMgPSB7XG4gIC8qKlxuICAgKiB2ZXJ0aWNhbCBheGlzXG4gICAqL1xuICB2ZXJ0aWNhbFNjcm9sbDogMCxcbiAgLyoqXG4gICAqIGhvcml6b250YWwgYXhpc1xuICAgKi9cbiAgaG9yaXpvbnRhbFNjcm9sbDogMVxufVxuXG5XbFBvaW50ZXJQcm94eS5BeGlzU291cmNlID0ge1xuICAvKipcbiAgICogYSBwaHlzaWNhbCB3aGVlbCByb3RhdGlvblxuICAgKi9cbiAgd2hlZWw6IDAsXG4gIC8qKlxuICAgKiBmaW5nZXIgb24gYSB0b3VjaCBzdXJmYWNlXG4gICAqL1xuICBmaW5nZXI6IDEsXG4gIC8qKlxuICAgKiBjb250aW51b3VzIGNvb3JkaW5hdGUgc3BhY2VcbiAgICovXG4gIGNvbnRpbnVvdXM6IDIsXG4gIC8qKlxuICAgKiBhIHBoeXNpY2FsIHdoZWVsIHRpbHRcbiAgICovXG4gIHdoZWVsVGlsdDogM1xufVxuXG5leHBvcnQgZGVmYXVsdCBXbFBvaW50ZXJQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgQSByZWdpb24gb2JqZWN0IGRlc2NyaWJlcyBhbiBhcmVhLlxuICpcbiAqICAgICAgUmVnaW9uIG9iamVjdHMgYXJlIHVzZWQgdG8gZGVzY3JpYmUgdGhlIG9wYXF1ZSBhbmQgaW5wdXRcbiAqICAgICAgcmVnaW9ucyBvZiBhIHN1cmZhY2UuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xSZWdpb25Qcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdERlc3Ryb3kgdGhlIHJlZ2lvbi4gIFRoaXMgd2lsbCBpbnZhbGlkYXRlIHRoZSBvYmplY3QgSUQuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkZXN0cm95ICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0QWRkIHRoZSBzcGVjaWZpZWQgcmVjdGFuZ2xlIHRvIHRoZSByZWdpb24uXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHJlZ2lvbi1sb2NhbCB4IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHJlZ2lvbi1sb2NhbCB5IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCByZWN0YW5nbGUgd2lkdGggXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgcmVjdGFuZ2xlIGhlaWdodCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGFkZCAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtpbnQoeCksIGludCh5KSwgaW50KHdpZHRoKSwgaW50KGhlaWdodCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIHJlY3RhbmdsZSBmcm9tIHRoZSByZWdpb24uXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHJlZ2lvbi1sb2NhbCB4IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHJlZ2lvbi1sb2NhbCB5IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCByZWN0YW5nbGUgd2lkdGggXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgcmVjdGFuZ2xlIGhlaWdodCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHN1YnRyYWN0ICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMiwgW2ludCh4KSwgaW50KHkpLCBpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xSZWdpb25FdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cbn1cbldsUmVnaW9uUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX3JlZ2lvbidcblxuZXhwb3J0IGRlZmF1bHQgV2xSZWdpb25Qcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsUmVnaXN0cnlFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Tm90aWZ5IHRoZSBjbGllbnQgb2YgZ2xvYmFsIG9iamVjdHMuXG5cdCAqXG5cdCAqXHRUaGUgZXZlbnQgbm90aWZpZXMgdGhlIGNsaWVudCB0aGF0IGEgZ2xvYmFsIG9iamVjdCB3aXRoXG5cdCAqXHR0aGUgZ2l2ZW4gbmFtZSBpcyBub3cgYXZhaWxhYmxlLCBhbmQgaXQgaW1wbGVtZW50cyB0aGVcblx0ICpcdGdpdmVuIHZlcnNpb24gb2YgdGhlIGdpdmVuIGludGVyZmFjZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IG5hbWUgbnVtZXJpYyBuYW1lIG9mIHRoZSBnbG9iYWwgb2JqZWN0IFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaW50ZXJmYWNlIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSB0aGUgb2JqZWN0IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gdmVyc2lvbiBpbnRlcmZhY2UgdmVyc2lvbiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdsb2JhbChuYW1lLCBpbnRlcmZhY2VfLCB2ZXJzaW9uKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Tm90aWZ5IHRoZSBjbGllbnQgb2YgcmVtb3ZlZCBnbG9iYWwgb2JqZWN0cy5cblx0ICpcblx0ICpcdFRoaXMgZXZlbnQgbm90aWZpZXMgdGhlIGNsaWVudCB0aGF0IHRoZSBnbG9iYWwgaWRlbnRpZmllZFxuXHQgKlx0YnkgbmFtZSBpcyBubyBsb25nZXIgYXZhaWxhYmxlLiAgSWYgdGhlIGNsaWVudCBib3VuZCB0b1xuXHQgKlx0dGhlIGdsb2JhbCB1c2luZyB0aGUgYmluZCByZXF1ZXN0LCB0aGUgY2xpZW50IHNob3VsZCBub3dcblx0ICpcdGRlc3Ryb3kgdGhhdCBvYmplY3QuXG5cdCAqXG5cdCAqXHRUaGUgb2JqZWN0IHJlbWFpbnMgdmFsaWQgYW5kIHJlcXVlc3RzIHRvIHRoZSBvYmplY3Qgd2lsbCBiZVxuXHQgKlx0aWdub3JlZCB1bnRpbCB0aGUgY2xpZW50IGRlc3Ryb3lzIGl0LCB0byBhdm9pZCByYWNlcyBiZXR3ZWVuXG5cdCAqXHR0aGUgZ2xvYmFsIGdvaW5nIGF3YXkgYW5kIGEgY2xpZW50IHNlbmRpbmcgYSByZXF1ZXN0IHRvIGl0LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gbmFtZSBudW1lcmljIG5hbWUgb2YgdGhlIGdsb2JhbCBvYmplY3QgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRnbG9iYWxSZW1vdmUobmFtZSkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhlIHNpbmdsZXRvbiBnbG9iYWwgcmVnaXN0cnkgb2JqZWN0LiAgVGhlIHNlcnZlciBoYXMgYSBudW1iZXIgb2ZcbiAqICAgICAgZ2xvYmFsIG9iamVjdHMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvIGFsbCBjbGllbnRzLiAgVGhlc2Ugb2JqZWN0c1xuICogICAgICB0eXBpY2FsbHkgcmVwcmVzZW50IGFuIGFjdHVhbCBvYmplY3QgaW4gdGhlIHNlcnZlciAoZm9yIGV4YW1wbGUsXG4gKiAgICAgIGFuIGlucHV0IGRldmljZSkgb3IgdGhleSBhcmUgc2luZ2xldG9uIG9iamVjdHMgdGhhdCBwcm92aWRlXG4gKiAgICAgIGV4dGVuc2lvbiBmdW5jdGlvbmFsaXR5LlxuICpcbiAqICAgICAgV2hlbiBhIGNsaWVudCBjcmVhdGVzIGEgcmVnaXN0cnkgb2JqZWN0LCB0aGUgcmVnaXN0cnkgb2JqZWN0XG4gKiAgICAgIHdpbGwgZW1pdCBhIGdsb2JhbCBldmVudCBmb3IgZWFjaCBnbG9iYWwgY3VycmVudGx5IGluIHRoZVxuICogICAgICByZWdpc3RyeS4gIEdsb2JhbHMgY29tZSBhbmQgZ28gYXMgYSByZXN1bHQgb2YgZGV2aWNlIG9yXG4gKiAgICAgIG1vbml0b3IgaG90cGx1Z3MsIHJlY29uZmlndXJhdGlvbiBvciBvdGhlciBldmVudHMsIGFuZCB0aGVcbiAqICAgICAgcmVnaXN0cnkgd2lsbCBzZW5kIG91dCBnbG9iYWwgYW5kIGdsb2JhbF9yZW1vdmUgZXZlbnRzIHRvXG4gKiAgICAgIGtlZXAgdGhlIGNsaWVudCB1cCB0byBkYXRlIHdpdGggdGhlIGNoYW5nZXMuICBUbyBtYXJrIHRoZSBlbmRcbiAqICAgICAgb2YgdGhlIGluaXRpYWwgYnVyc3Qgb2YgZXZlbnRzLCB0aGUgY2xpZW50IGNhbiB1c2UgdGhlXG4gKiAgICAgIHdsX2Rpc3BsYXkuc3luYyByZXF1ZXN0IGltbWVkaWF0ZWx5IGFmdGVyIGNhbGxpbmdcbiAqICAgICAgd2xfZGlzcGxheS5nZXRfcmVnaXN0cnkuXG4gKlxuICogICAgICBBIGNsaWVudCBjYW4gYmluZCB0byBhIGdsb2JhbCBvYmplY3QgYnkgdXNpbmcgdGhlIGJpbmRcbiAqICAgICAgcmVxdWVzdC4gIFRoaXMgY3JlYXRlcyBhIGNsaWVudC1zaWRlIGhhbmRsZSB0aGF0IGxldHMgdGhlIG9iamVjdFxuICogICAgICBlbWl0IGV2ZW50cyB0byB0aGUgY2xpZW50IGFuZCBsZXRzIHRoZSBjbGllbnQgaW52b2tlIHJlcXVlc3RzIG9uXG4gKiAgICAgIHRoZSBvYmplY3QuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xSZWdpc3RyeVByb3h5IGV4dGVuZHMgUHJveHkge1xuXHQvKipcblx0KiBCaW5kIGEgbmV3IG9iamVjdCB0byB0aGUgZ2xvYmFsLlxuXHQqXG5cdCogQmluZHMgYSBuZXcsIGNsaWVudC1jcmVhdGVkIG9iamVjdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBzcGVjaWZpZWQgbmFtZSBhcyB0aGUgaWRlbnRpZmllci5cblx0KlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBuYW1lIHVuaXF1ZSBudW1lcmljIG5hbWUgb2YgdGhlIGdsb2JhbFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBpbnRlcmZhY2VfIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSB0aGUgbmV3IG9iamVjdFxuXHQqIEBwYXJhbSB7RnVuY3Rpb259IHByb3h5Q2xhc3Ncblx0KiBAcGFyYW0ge251bWJlcn0gdmVyc2lvbiBUaGUgdmVyc2lvbiB1c2VkIGFuZCBzdXBwb3J0ZWQgYnkgdGhlIGNsaWVudFxuXHQqIEByZXR1cm4ge09iamVjdH0gYSBuZXcgYm91bmRlZCBvYmplY3Rcblx0Ki9cblx0YmluZCAobmFtZSwgaW50ZXJmYWNlXywgcHJveHlDbGFzcywgdmVyc2lvbikge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDAsIHByb3h5Q2xhc3MsIFt1aW50KG5hbWUpLCBzdHJpbmcoaW50ZXJmYWNlXyksIHVpbnQodmVyc2lvbiksIG5ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFJlZ2lzdHJ5RXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZ2xvYmFsKHUobWVzc2FnZSksIHMobWVzc2FnZSwgZmFsc2UpLCB1KG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5nbG9iYWxSZW1vdmUodShtZXNzYWdlKSlcblx0fVxuXG59XG5XbFJlZ2lzdHJ5UHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX3JlZ2lzdHJ5J1xuXG5leHBvcnQgZGVmYXVsdCBXbFJlZ2lzdHJ5UHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXbFNlYXRFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyBpcyBlbWl0dGVkIHdoZW5ldmVyIGEgc2VhdCBnYWlucyBvciBsb3NlcyB0aGUgcG9pbnRlcixcblx0ICpcdGtleWJvYXJkIG9yIHRvdWNoIGNhcGFiaWxpdGllcy4gIFRoZSBhcmd1bWVudCBpcyBhIGNhcGFiaWxpdHlcblx0ICpcdGVudW0gY29udGFpbmluZyB0aGUgY29tcGxldGUgc2V0IG9mIGNhcGFiaWxpdGllcyB0aGlzIHNlYXQgaGFzLlxuXHQgKlxuXHQgKlx0V2hlbiB0aGUgcG9pbnRlciBjYXBhYmlsaXR5IGlzIGFkZGVkLCBhIGNsaWVudCBtYXkgY3JlYXRlIGFcblx0ICpcdHdsX3BvaW50ZXIgb2JqZWN0IHVzaW5nIHRoZSB3bF9zZWF0LmdldF9wb2ludGVyIHJlcXVlc3QuIFRoaXMgb2JqZWN0XG5cdCAqXHR3aWxsIHJlY2VpdmUgcG9pbnRlciBldmVudHMgdW50aWwgdGhlIGNhcGFiaWxpdHkgaXMgcmVtb3ZlZCBpbiB0aGVcblx0ICpcdGZ1dHVyZS5cblx0ICpcblx0ICpcdFdoZW4gdGhlIHBvaW50ZXIgY2FwYWJpbGl0eSBpcyByZW1vdmVkLCBhIGNsaWVudCBzaG91bGQgZGVzdHJveSB0aGVcblx0ICpcdHdsX3BvaW50ZXIgb2JqZWN0cyBhc3NvY2lhdGVkIHdpdGggdGhlIHNlYXQgd2hlcmUgdGhlIGNhcGFiaWxpdHkgd2FzXG5cdCAqXHRyZW1vdmVkLCB1c2luZyB0aGUgd2xfcG9pbnRlci5yZWxlYXNlIHJlcXVlc3QuIE5vIGZ1cnRoZXIgcG9pbnRlclxuXHQgKlx0ZXZlbnRzIHdpbGwgYmUgcmVjZWl2ZWQgb24gdGhlc2Ugb2JqZWN0cy5cblx0ICpcblx0ICpcdEluIHNvbWUgY29tcG9zaXRvcnMsIGlmIGEgc2VhdCByZWdhaW5zIHRoZSBwb2ludGVyIGNhcGFiaWxpdHkgYW5kIGFcblx0ICpcdGNsaWVudCBoYXMgYSBwcmV2aW91c2x5IG9idGFpbmVkIHdsX3BvaW50ZXIgb2JqZWN0IG9mIHZlcnNpb24gNCBvclxuXHQgKlx0bGVzcywgdGhhdCBvYmplY3QgbWF5IHN0YXJ0IHNlbmRpbmcgcG9pbnRlciBldmVudHMgYWdhaW4uIFRoaXNcblx0ICpcdGJlaGF2aW9yIGlzIGNvbnNpZGVyZWQgYSBtaXNpbnRlcnByZXRhdGlvbiBvZiB0aGUgaW50ZW5kZWQgYmVoYXZpb3Jcblx0ICpcdGFuZCBtdXN0IG5vdCBiZSByZWxpZWQgdXBvbiBieSB0aGUgY2xpZW50LiB3bF9wb2ludGVyIG9iamVjdHMgb2Zcblx0ICpcdHZlcnNpb24gNSBvciBsYXRlciBtdXN0IG5vdCBzZW5kIGV2ZW50cyBpZiBjcmVhdGVkIGJlZm9yZSB0aGUgbW9zdFxuXHQgKlx0cmVjZW50IGV2ZW50IG5vdGlmeWluZyB0aGUgY2xpZW50IG9mIGFuIGFkZGVkIHBvaW50ZXIgY2FwYWJpbGl0eS5cblx0ICpcblx0ICpcdFRoZSBhYm92ZSBiZWhhdmlvciBhbHNvIGFwcGxpZXMgdG8gd2xfa2V5Ym9hcmQgYW5kIHdsX3RvdWNoIHdpdGggdGhlXG5cdCAqXHRrZXlib2FyZCBhbmQgdG91Y2ggY2FwYWJpbGl0aWVzLCByZXNwZWN0aXZlbHkuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjYXBhYmlsaXRpZXMgY2FwYWJpbGl0aWVzIG9mIHRoZSBzZWF0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y2FwYWJpbGl0aWVzKGNhcGFiaWxpdGllcykge31cblxuXHQvKipcblx0ICpcblx0ICpcdEluIGEgbXVsdGlzZWF0IGNvbmZpZ3VyYXRpb24gdGhpcyBjYW4gYmUgdXNlZCBieSB0aGUgY2xpZW50IHRvIGhlbHBcblx0ICpcdGlkZW50aWZ5IHdoaWNoIHBoeXNpY2FsIGRldmljZXMgdGhlIHNlYXQgcmVwcmVzZW50cy4gQmFzZWQgb25cblx0ICpcdHRoZSBzZWF0IGNvbmZpZ3VyYXRpb24gdXNlZCBieSB0aGUgY29tcG9zaXRvci5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgc2VhdCBpZGVudGlmaWVyIFxuXHQgKlxuXHQgKiBAc2luY2UgMlxuXHQgKlxuXHQgKi9cblx0bmFtZShuYW1lKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmltcG9ydCBXbFBvaW50ZXJQcm94eSBmcm9tICcuL1dsUG9pbnRlclByb3h5J1xuaW1wb3J0IFdsS2V5Ym9hcmRQcm94eSBmcm9tICcuL1dsS2V5Ym9hcmRQcm94eSdcbmltcG9ydCBXbFRvdWNoUHJveHkgZnJvbSAnLi9XbFRvdWNoUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgQSBzZWF0IGlzIGEgZ3JvdXAgb2Yga2V5Ym9hcmRzLCBwb2ludGVyIGFuZCB0b3VjaCBkZXZpY2VzLiBUaGlzXG4gKiAgICAgIG9iamVjdCBpcyBwdWJsaXNoZWQgYXMgYSBnbG9iYWwgZHVyaW5nIHN0YXJ0IHVwLCBvciB3aGVuIHN1Y2ggYVxuICogICAgICBkZXZpY2UgaXMgaG90IHBsdWdnZWQuICBBIHNlYXQgdHlwaWNhbGx5IGhhcyBhIHBvaW50ZXIgYW5kXG4gKiAgICAgIG1haW50YWlucyBhIGtleWJvYXJkIGZvY3VzIGFuZCBhIHBvaW50ZXIgZm9jdXMuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xTZWF0UHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgSUQgcHJvdmlkZWQgd2lsbCBiZSBpbml0aWFsaXplZCB0byB0aGUgd2xfcG9pbnRlciBpbnRlcmZhY2Vcblx0ICpcdGZvciB0aGlzIHNlYXQuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3Qgb25seSB0YWtlcyBlZmZlY3QgaWYgdGhlIHNlYXQgaGFzIHRoZSBwb2ludGVyXG5cdCAqXHRjYXBhYmlsaXR5LCBvciBoYXMgaGFkIHRoZSBwb2ludGVyIGNhcGFiaWxpdHkgaW4gdGhlIHBhc3QuXG5cdCAqXHRJdCBpcyBhIHByb3RvY29sIHZpb2xhdGlvbiB0byBpc3N1ZSB0aGlzIHJlcXVlc3Qgb24gYSBzZWF0IHRoYXQgaGFzXG5cdCAqXHRuZXZlciBoYWQgdGhlIHBvaW50ZXIgY2FwYWJpbGl0eS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHJldHVybiB7V2xQb2ludGVyUHJveHl9IHNlYXQgcG9pbnRlciBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdldFBvaW50ZXIgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDAsIFdsUG9pbnRlclByb3h5LCBbbmV3T2JqZWN0KCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgSUQgcHJvdmlkZWQgd2lsbCBiZSBpbml0aWFsaXplZCB0byB0aGUgd2xfa2V5Ym9hcmQgaW50ZXJmYWNlXG5cdCAqXHRmb3IgdGhpcyBzZWF0LlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG9ubHkgdGFrZXMgZWZmZWN0IGlmIHRoZSBzZWF0IGhhcyB0aGUga2V5Ym9hcmRcblx0ICpcdGNhcGFiaWxpdHksIG9yIGhhcyBoYWQgdGhlIGtleWJvYXJkIGNhcGFiaWxpdHkgaW4gdGhlIHBhc3QuXG5cdCAqXHRJdCBpcyBhIHByb3RvY29sIHZpb2xhdGlvbiB0byBpc3N1ZSB0aGlzIHJlcXVlc3Qgb24gYSBzZWF0IHRoYXQgaGFzXG5cdCAqXHRuZXZlciBoYWQgdGhlIGtleWJvYXJkIGNhcGFiaWxpdHkuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEByZXR1cm4ge1dsS2V5Ym9hcmRQcm94eX0gc2VhdCBrZXlib2FyZCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdldEtleWJvYXJkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAxLCBXbEtleWJvYXJkUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBJRCBwcm92aWRlZCB3aWxsIGJlIGluaXRpYWxpemVkIHRvIHRoZSB3bF90b3VjaCBpbnRlcmZhY2Vcblx0ICpcdGZvciB0aGlzIHNlYXQuXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3Qgb25seSB0YWtlcyBlZmZlY3QgaWYgdGhlIHNlYXQgaGFzIHRoZSB0b3VjaFxuXHQgKlx0Y2FwYWJpbGl0eSwgb3IgaGFzIGhhZCB0aGUgdG91Y2ggY2FwYWJpbGl0eSBpbiB0aGUgcGFzdC5cblx0ICpcdEl0IGlzIGEgcHJvdG9jb2wgdmlvbGF0aW9uIHRvIGlzc3VlIHRoaXMgcmVxdWVzdCBvbiBhIHNlYXQgdGhhdCBoYXNcblx0ICpcdG5ldmVyIGhhZCB0aGUgdG91Y2ggY2FwYWJpbGl0eS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHJldHVybiB7V2xUb3VjaFByb3h5fSBzZWF0IHRvdWNoIGludGVyZmFjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdldFRvdWNoICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAyLCBXbFRvdWNoUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFVzaW5nIHRoaXMgcmVxdWVzdCBhIGNsaWVudCBjYW4gdGVsbCB0aGUgc2VydmVyIHRoYXQgaXQgaXMgbm90IGdvaW5nIHRvXG5cdCAqXHR1c2UgdGhlIHNlYXQgb2JqZWN0IGFueW1vcmUuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSA1XG5cdCAqXG5cdCAqL1xuXHRyZWxlYXNlICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAzLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFNlYXRFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5jYXBhYmlsaXRpZXModShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIubmFtZShzKG1lc3NhZ2UsIGZhbHNlKSlcblx0fVxuXG59XG5XbFNlYXRQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfc2VhdCdcblxuV2xTZWF0UHJveHkuQ2FwYWJpbGl0eSA9IHtcbiAgLyoqXG4gICAqIHRoZSBzZWF0IGhhcyBwb2ludGVyIGRldmljZXNcbiAgICovXG4gIHBvaW50ZXI6IDEsXG4gIC8qKlxuICAgKiB0aGUgc2VhdCBoYXMgb25lIG9yIG1vcmUga2V5Ym9hcmRzXG4gICAqL1xuICBrZXlib2FyZDogMixcbiAgLyoqXG4gICAqIHRoZSBzZWF0IGhhcyB0b3VjaCBkZXZpY2VzXG4gICAqL1xuICB0b3VjaDogNFxufVxuXG5leHBvcnQgZGVmYXVsdCBXbFNlYXRQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgV2xTaGVsbFN1cmZhY2VQcm94eSBmcm9tICcuL1dsU2hlbGxTdXJmYWNlUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhpcyBpbnRlcmZhY2UgaXMgaW1wbGVtZW50ZWQgYnkgc2VydmVycyB0aGF0IHByb3ZpZGVcbiAqICAgICAgZGVza3RvcC1zdHlsZSB1c2VyIGludGVyZmFjZXMuXG4gKlxuICogICAgICBJdCBhbGxvd3MgY2xpZW50cyB0byBhc3NvY2lhdGUgYSB3bF9zaGVsbF9zdXJmYWNlIHdpdGhcbiAqICAgICAgYSBiYXNpYyBzdXJmYWNlLlxuICogICAgXG4gKi9cbmNsYXNzIFdsU2hlbGxQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdENyZWF0ZSBhIHNoZWxsIHN1cmZhY2UgZm9yIGFuIGV4aXN0aW5nIHN1cmZhY2UuIFRoaXMgZ2l2ZXNcblx0ICpcdHRoZSB3bF9zdXJmYWNlIHRoZSByb2xlIG9mIGEgc2hlbGwgc3VyZmFjZS4gSWYgdGhlIHdsX3N1cmZhY2Vcblx0ICpcdGFscmVhZHkgaGFzIGFub3RoZXIgcm9sZSwgaXQgcmFpc2VzIGEgcHJvdG9jb2wgZXJyb3IuXG5cdCAqXG5cdCAqXHRPbmx5IG9uZSBzaGVsbCBzdXJmYWNlIGNhbiBiZSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBzdXJmYWNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHN1cmZhY2Ugc3VyZmFjZSB0byBiZSBnaXZlbiB0aGUgc2hlbGwgc3VyZmFjZSByb2xlIFxuXHQgKiBAcmV0dXJuIHtXbFNoZWxsU3VyZmFjZVByb3h5fSBzaGVsbCBzdXJmYWNlIHRvIGNyZWF0ZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdldFNoZWxsU3VyZmFjZSAoc3VyZmFjZSkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDAsIFdsU2hlbGxTdXJmYWNlUHJveHksIFtuZXdPYmplY3QoKSwgb2JqZWN0KHN1cmZhY2UpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFNoZWxsRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG59XG5XbFNoZWxsUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX3NoZWxsJ1xuXG5XbFNoZWxsUHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiBnaXZlbiB3bF9zdXJmYWNlIGhhcyBhbm90aGVyIHJvbGVcbiAgICovXG4gIHJvbGU6IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2xTaGVsbFByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xTaGVsbFN1cmZhY2VFdmVudHMge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0UGluZyBhIGNsaWVudCB0byBjaGVjayBpZiBpdCBpcyByZWNlaXZpbmcgZXZlbnRzIGFuZCBzZW5kaW5nXG5cdCAqXHRyZXF1ZXN0cy4gQSBjbGllbnQgaXMgZXhwZWN0ZWQgdG8gcmVwbHkgd2l0aCBhIHBvbmcgcmVxdWVzdC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSBwaW5nIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0cGluZyhzZXJpYWwpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgY29uZmlndXJlIGV2ZW50IGFza3MgdGhlIGNsaWVudCB0byByZXNpemUgaXRzIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgc2l6ZSBpcyBhIGhpbnQsIGluIHRoZSBzZW5zZSB0aGF0IHRoZSBjbGllbnQgaXMgZnJlZSB0b1xuXHQgKlx0aWdub3JlIGl0IGlmIGl0IGRvZXNuJ3QgcmVzaXplLCBwaWNrIGEgc21hbGxlciBzaXplICh0b1xuXHQgKlx0c2F0aXNmeSBhc3BlY3QgcmF0aW8gb3IgcmVzaXplIGluIHN0ZXBzIG9mIE54TSBwaXhlbHMpLlxuXHQgKlxuXHQgKlx0VGhlIGVkZ2VzIHBhcmFtZXRlciBwcm92aWRlcyBhIGhpbnQgYWJvdXQgaG93IHRoZSBzdXJmYWNlXG5cdCAqXHR3YXMgcmVzaXplZC4gVGhlIGNsaWVudCBtYXkgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gZGVjaWRlXG5cdCAqXHRob3cgdG8gYWRqdXN0IGl0cyBjb250ZW50IHRvIHRoZSBuZXcgc2l6ZSAoZS5nLiBhIHNjcm9sbGluZ1xuXHQgKlx0YXJlYSBtaWdodCBhZGp1c3QgaXRzIGNvbnRlbnQgcG9zaXRpb24gdG8gbGVhdmUgdGhlIHZpZXdhYmxlXG5cdCAqXHRjb250ZW50IHVubW92ZWQpLlxuXHQgKlxuXHQgKlx0VGhlIGNsaWVudCBpcyBmcmVlIHRvIGRpc21pc3MgYWxsIGJ1dCB0aGUgbGFzdCBjb25maWd1cmVcblx0ICpcdGV2ZW50IGl0IHJlY2VpdmVkLlxuXHQgKlxuXHQgKlx0VGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJndW1lbnRzIHNwZWNpZnkgdGhlIHNpemUgb2YgdGhlIHdpbmRvd1xuXHQgKlx0aW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGVkZ2VzIGhvdyB0aGUgc3VyZmFjZSB3YXMgcmVzaXplZCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIG5ldyB3aWR0aCBvZiB0aGUgc3VyZmFjZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBuZXcgaGVpZ2h0IG9mIHRoZSBzdXJmYWNlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y29uZmlndXJlKGVkZ2VzLCB3aWR0aCwgaGVpZ2h0KSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIHBvcHVwX2RvbmUgZXZlbnQgaXMgc2VudCBvdXQgd2hlbiBhIHBvcHVwIGdyYWIgaXMgYnJva2VuLFxuXHQgKlx0dGhhdCBpcywgd2hlbiB0aGUgdXNlciBjbGlja3MgYSBzdXJmYWNlIHRoYXQgZG9lc24ndCBiZWxvbmdcblx0ICpcdHRvIHRoZSBjbGllbnQgb3duaW5nIHRoZSBwb3B1cCBzdXJmYWNlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0cG9wdXBEb25lKCkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgQW4gaW50ZXJmYWNlIHRoYXQgbWF5IGJlIGltcGxlbWVudGVkIGJ5IGEgd2xfc3VyZmFjZSwgZm9yXG4gKiAgICAgIGltcGxlbWVudGF0aW9ucyB0aGF0IHByb3ZpZGUgYSBkZXNrdG9wLXN0eWxlIHVzZXIgaW50ZXJmYWNlLlxuICpcbiAqICAgICAgSXQgcHJvdmlkZXMgcmVxdWVzdHMgdG8gdHJlYXQgc3VyZmFjZXMgbGlrZSB0b3BsZXZlbCwgZnVsbHNjcmVlblxuICogICAgICBvciBwb3B1cCB3aW5kb3dzLCBtb3ZlLCByZXNpemUgb3IgbWF4aW1pemUgdGhlbSwgYXNzb2NpYXRlXG4gKiAgICAgIG1ldGFkYXRhIGxpa2UgdGl0bGUgYW5kIGNsYXNzLCBldGMuXG4gKlxuICogICAgICBPbiB0aGUgc2VydmVyIHNpZGUgdGhlIG9iamVjdCBpcyBhdXRvbWF0aWNhbGx5IGRlc3Ryb3llZCB3aGVuXG4gKiAgICAgIHRoZSByZWxhdGVkIHdsX3N1cmZhY2UgaXMgZGVzdHJveWVkLiBPbiB0aGUgY2xpZW50IHNpZGUsXG4gKiAgICAgIHdsX3NoZWxsX3N1cmZhY2VfZGVzdHJveSgpIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBkZXN0cm95aW5nXG4gKiAgICAgIHRoZSB3bF9zdXJmYWNlIG9iamVjdC5cbiAqICAgIFxuICovXG5jbGFzcyBXbFNoZWxsU3VyZmFjZVByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0QSBjbGllbnQgbXVzdCByZXNwb25kIHRvIGEgcGluZyBldmVudCB3aXRoIGEgcG9uZyByZXF1ZXN0IG9yXG5cdCAqXHR0aGUgY2xpZW50IG1heSBiZSBkZWVtZWQgdW5yZXNwb25zaXZlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIHBpbmcgZXZlbnQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRwb25nIChzZXJpYWwpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbdWludChzZXJpYWwpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U3RhcnQgYSBwb2ludGVyLWRyaXZlbiBtb3ZlIG9mIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG11c3QgYmUgdXNlZCBpbiByZXNwb25zZSB0byBhIGJ1dHRvbiBwcmVzcyBldmVudC5cblx0ICpcdFRoZSBzZXJ2ZXIgbWF5IGlnbm9yZSBtb3ZlIHJlcXVlc3RzIGRlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2Zcblx0ICpcdHRoZSBzdXJmYWNlIChlLmcuIGZ1bGxzY3JlZW4gb3IgbWF4aW1pemVkKS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSBzZWF0IHNlYXQgd2hvc2UgcG9pbnRlciBpcyB1c2VkIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIGltcGxpY2l0IGdyYWIgb24gdGhlIHBvaW50ZXIgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRtb3ZlIChzZWF0LCBzZXJpYWwpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxLCBbb2JqZWN0KHNlYXQpLCB1aW50KHNlcmlhbCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTdGFydCBhIHBvaW50ZXItZHJpdmVuIHJlc2l6aW5nIG9mIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG11c3QgYmUgdXNlZCBpbiByZXNwb25zZSB0byBhIGJ1dHRvbiBwcmVzcyBldmVudC5cblx0ICpcdFRoZSBzZXJ2ZXIgbWF5IGlnbm9yZSByZXNpemUgcmVxdWVzdHMgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZlxuXHQgKlx0dGhlIHN1cmZhY2UgKGUuZy4gZnVsbHNjcmVlbiBvciBtYXhpbWl6ZWQpLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNlYXQgc2VhdCB3aG9zZSBwb2ludGVyIGlzIHVzZWQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgaW1wbGljaXQgZ3JhYiBvbiB0aGUgcG9pbnRlciBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGVkZ2VzIHdoaWNoIGVkZ2Ugb3IgY29ybmVyIGlzIGJlaW5nIGRyYWdnZWQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRyZXNpemUgKHNlYXQsIHNlcmlhbCwgZWRnZXMpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAyLCBbb2JqZWN0KHNlYXQpLCB1aW50KHNlcmlhbCksIHVpbnQoZWRnZXMpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0TWFwIHRoZSBzdXJmYWNlIGFzIGEgdG9wbGV2ZWwgc3VyZmFjZS5cblx0ICpcblx0ICpcdEEgdG9wbGV2ZWwgc3VyZmFjZSBpcyBub3QgZnVsbHNjcmVlbiwgbWF4aW1pemVkIG9yIHRyYW5zaWVudC5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldFRvcGxldmVsICgpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAzLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0TWFwIHRoZSBzdXJmYWNlIHJlbGF0aXZlIHRvIGFuIGV4aXN0aW5nIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgeCBhbmQgeSBhcmd1bWVudHMgc3BlY2lmeSB0aGUgbG9jYXRpb24gb2YgdGhlIHVwcGVyIGxlZnRcblx0ICpcdGNvcm5lciBvZiB0aGUgc3VyZmFjZSByZWxhdGl2ZSB0byB0aGUgdXBwZXIgbGVmdCBjb3JuZXIgb2YgdGhlXG5cdCAqXHRwYXJlbnQgc3VyZmFjZSwgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcy5cblx0ICpcblx0ICpcdFRoZSBmbGFncyBhcmd1bWVudCBjb250cm9scyBkZXRhaWxzIG9mIHRoZSB0cmFuc2llbnQgYmVoYXZpb3VyLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHBhcmVudCBwYXJlbnQgc3VyZmFjZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggc3VyZmFjZS1sb2NhbCB4IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHN1cmZhY2UtbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgdHJhbnNpZW50IHN1cmZhY2UgYmVoYXZpb3IgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRUcmFuc2llbnQgKHBhcmVudCwgeCwgeSwgZmxhZ3MpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA0LCBbb2JqZWN0KHBhcmVudCksIGludCh4KSwgaW50KHkpLCB1aW50KGZsYWdzKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdE1hcCB0aGUgc3VyZmFjZSBhcyBhIGZ1bGxzY3JlZW4gc3VyZmFjZS5cblx0ICpcblx0ICpcdElmIGFuIG91dHB1dCBwYXJhbWV0ZXIgaXMgZ2l2ZW4gdGhlbiB0aGUgc3VyZmFjZSB3aWxsIGJlIG1hZGVcblx0ICpcdGZ1bGxzY3JlZW4gb24gdGhhdCBvdXRwdXQuIElmIHRoZSBjbGllbnQgZG9lcyBub3Qgc3BlY2lmeSB0aGVcblx0ICpcdG91dHB1dCB0aGVuIHRoZSBjb21wb3NpdG9yIHdpbGwgYXBwbHkgaXRzIHBvbGljeSAtIHVzdWFsbHlcblx0ICpcdGNob29zaW5nIHRoZSBvdXRwdXQgb24gd2hpY2ggdGhlIHN1cmZhY2UgaGFzIHRoZSBiaWdnZXN0IHN1cmZhY2Vcblx0ICpcdGFyZWEuXG5cdCAqXG5cdCAqXHRUaGUgY2xpZW50IG1heSBzcGVjaWZ5IGEgbWV0aG9kIHRvIHJlc29sdmUgYSBzaXplIGNvbmZsaWN0XG5cdCAqXHRiZXR3ZWVuIHRoZSBvdXRwdXQgc2l6ZSBhbmQgdGhlIHN1cmZhY2Ugc2l6ZSAtIHRoaXMgaXMgcHJvdmlkZWRcblx0ICpcdHRocm91Z2ggdGhlIG1ldGhvZCBwYXJhbWV0ZXIuXG5cdCAqXG5cdCAqXHRUaGUgZnJhbWVyYXRlIHBhcmFtZXRlciBpcyB1c2VkIG9ubHkgd2hlbiB0aGUgbWV0aG9kIGlzIHNldFxuXHQgKlx0dG8gXCJkcml2ZXJcIiwgdG8gaW5kaWNhdGUgdGhlIHByZWZlcnJlZCBmcmFtZXJhdGUuIEEgdmFsdWUgb2YgMFxuXHQgKlx0aW5kaWNhdGVzIHRoYXQgdGhlIGNsaWVudCBkb2VzIG5vdCBjYXJlIGFib3V0IGZyYW1lcmF0ZS4gIFRoZVxuXHQgKlx0ZnJhbWVyYXRlIGlzIHNwZWNpZmllZCBpbiBtSHosIHRoYXQgaXMgZnJhbWVyYXRlIG9mIDYwMDAwIGlzIDYwSHouXG5cdCAqXG5cdCAqXHRBIG1ldGhvZCBvZiBcInNjYWxlXCIgb3IgXCJkcml2ZXJcIiBpbXBsaWVzIGEgc2NhbGluZyBvcGVyYXRpb24gb2Zcblx0ICpcdHRoZSBzdXJmYWNlLCBlaXRoZXIgdmlhIGEgZGlyZWN0IHNjYWxpbmcgb3BlcmF0aW9uIG9yIGEgY2hhbmdlIG9mXG5cdCAqXHR0aGUgb3V0cHV0IG1vZGUuIFRoaXMgd2lsbCBvdmVycmlkZSBhbnkga2luZCBvZiBvdXRwdXQgc2NhbGluZywgc29cblx0ICpcdHRoYXQgbWFwcGluZyBhIHN1cmZhY2Ugd2l0aCBhIGJ1ZmZlciBzaXplIGVxdWFsIHRvIHRoZSBtb2RlIGNhblxuXHQgKlx0ZmlsbCB0aGUgc2NyZWVuIGluZGVwZW5kZW50IG9mIGJ1ZmZlcl9zY2FsZS5cblx0ICpcblx0ICpcdEEgbWV0aG9kIG9mIFwiZmlsbFwiIG1lYW5zIHdlIGRvbid0IHNjYWxlIHVwIHRoZSBidWZmZXIsIGhvd2V2ZXJcblx0ICpcdGFueSBvdXRwdXQgc2NhbGUgaXMgYXBwbGllZC4gVGhpcyBtZWFucyB0aGF0IHlvdSBtYXkgcnVuIGludG9cblx0ICpcdGFuIGVkZ2UgY2FzZSB3aGVyZSB0aGUgYXBwbGljYXRpb24gbWFwcyBhIGJ1ZmZlciB3aXRoIHRoZSBzYW1lXG5cdCAqXHRzaXplIG9mIHRoZSBvdXRwdXQgbW9kZSBidXQgYnVmZmVyX3NjYWxlIDEgKHRodXMgbWFraW5nIGFcblx0ICpcdHN1cmZhY2UgbGFyZ2VyIHRoYW4gdGhlIG91dHB1dCkuIEluIHRoaXMgY2FzZSBpdCBpcyBhbGxvd2VkIHRvXG5cdCAqXHRkb3duc2NhbGUgdGhlIHJlc3VsdHMgdG8gZml0IHRoZSBzY3JlZW4uXG5cdCAqXG5cdCAqXHRUaGUgY29tcG9zaXRvciBtdXN0IHJlcGx5IHRvIHRoaXMgcmVxdWVzdCB3aXRoIGEgY29uZmlndXJlIGV2ZW50XG5cdCAqXHR3aXRoIHRoZSBkaW1lbnNpb25zIGZvciB0aGUgb3V0cHV0IG9uIHdoaWNoIHRoZSBzdXJmYWNlIHdpbGxcblx0ICpcdGJlIG1hZGUgZnVsbHNjcmVlbi5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1ldGhvZCBtZXRob2QgZm9yIHJlc29sdmluZyBzaXplIGNvbmZsaWN0IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZnJhbWVyYXRlIGZyYW1lcmF0ZSBpbiBtSHogXG5cdCAqIEBwYXJhbSB7Pyp9IG91dHB1dCBvdXRwdXQgb24gd2hpY2ggdGhlIHN1cmZhY2UgaXMgdG8gYmUgZnVsbHNjcmVlbiBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldEZ1bGxzY3JlZW4gKG1ldGhvZCwgZnJhbWVyYXRlLCBvdXRwdXQpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA1LCBbdWludChtZXRob2QpLCB1aW50KGZyYW1lcmF0ZSksIG9iamVjdE9wdGlvbmFsKG91dHB1dCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRNYXAgdGhlIHN1cmZhY2UgYXMgYSBwb3B1cC5cblx0ICpcblx0ICpcdEEgcG9wdXAgc3VyZmFjZSBpcyBhIHRyYW5zaWVudCBzdXJmYWNlIHdpdGggYW4gYWRkZWQgcG9pbnRlclxuXHQgKlx0Z3JhYi5cblx0ICpcblx0ICpcdEFuIGV4aXN0aW5nIGltcGxpY2l0IGdyYWIgd2lsbCBiZSBjaGFuZ2VkIHRvIG93bmVyLWV2ZW50cyBtb2RlLFxuXHQgKlx0YW5kIHRoZSBwb3B1cCBncmFiIHdpbGwgY29udGludWUgYWZ0ZXIgdGhlIGltcGxpY2l0IGdyYWIgZW5kc1xuXHQgKlx0KGkuZS4gcmVsZWFzaW5nIHRoZSBtb3VzZSBidXR0b24gZG9lcyBub3QgY2F1c2UgdGhlIHBvcHVwIHRvXG5cdCAqXHRiZSB1bm1hcHBlZCkuXG5cdCAqXG5cdCAqXHRUaGUgcG9wdXAgZ3JhYiBjb250aW51ZXMgdW50aWwgdGhlIHdpbmRvdyBpcyBkZXN0cm95ZWQgb3IgYVxuXHQgKlx0bW91c2UgYnV0dG9uIGlzIHByZXNzZWQgaW4gYW55IG90aGVyIGNsaWVudCdzIHdpbmRvdy4gQSBjbGlja1xuXHQgKlx0aW4gYW55IG9mIHRoZSBjbGllbnQncyBzdXJmYWNlcyBpcyByZXBvcnRlZCBhcyBub3JtYWwsIGhvd2V2ZXIsXG5cdCAqXHRjbGlja3MgaW4gb3RoZXIgY2xpZW50cycgc3VyZmFjZXMgd2lsbCBiZSBkaXNjYXJkZWQgYW5kIHRyaWdnZXJcblx0ICpcdHRoZSBjYWxsYmFjay5cblx0ICpcblx0ICpcdFRoZSB4IGFuZCB5IGFyZ3VtZW50cyBzcGVjaWZ5IHRoZSBsb2NhdGlvbiBvZiB0aGUgdXBwZXIgbGVmdFxuXHQgKlx0Y29ybmVyIG9mIHRoZSBzdXJmYWNlIHJlbGF0aXZlIHRvIHRoZSB1cHBlciBsZWZ0IGNvcm5lciBvZiB0aGVcblx0ICpcdHBhcmVudCBzdXJmYWNlLCBpbiBzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGVzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNlYXQgc2VhdCB3aG9zZSBwb2ludGVyIGlzIHVzZWQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgaW1wbGljaXQgZ3JhYiBvbiB0aGUgcG9pbnRlciBcblx0ICogQHBhcmFtIHsqfSBwYXJlbnQgcGFyZW50IHN1cmZhY2UgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBzdXJmYWNlLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIHRyYW5zaWVudCBzdXJmYWNlIGJlaGF2aW9yIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0UG9wdXAgKHNlYXQsIHNlcmlhbCwgcGFyZW50LCB4LCB5LCBmbGFncykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDYsIFtvYmplY3Qoc2VhdCksIHVpbnQoc2VyaWFsKSwgb2JqZWN0KHBhcmVudCksIGludCh4KSwgaW50KHkpLCB1aW50KGZsYWdzKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdE1hcCB0aGUgc3VyZmFjZSBhcyBhIG1heGltaXplZCBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0SWYgYW4gb3V0cHV0IHBhcmFtZXRlciBpcyBnaXZlbiB0aGVuIHRoZSBzdXJmYWNlIHdpbGwgYmVcblx0ICpcdG1heGltaXplZCBvbiB0aGF0IG91dHB1dC4gSWYgdGhlIGNsaWVudCBkb2VzIG5vdCBzcGVjaWZ5IHRoZVxuXHQgKlx0b3V0cHV0IHRoZW4gdGhlIGNvbXBvc2l0b3Igd2lsbCBhcHBseSBpdHMgcG9saWN5IC0gdXN1YWxseVxuXHQgKlx0Y2hvb3NpbmcgdGhlIG91dHB1dCBvbiB3aGljaCB0aGUgc3VyZmFjZSBoYXMgdGhlIGJpZ2dlc3Qgc3VyZmFjZVxuXHQgKlx0YXJlYS5cblx0ICpcblx0ICpcdFRoZSBjb21wb3NpdG9yIHdpbGwgcmVwbHkgd2l0aCBhIGNvbmZpZ3VyZSBldmVudCB0ZWxsaW5nXG5cdCAqXHR0aGUgZXhwZWN0ZWQgbmV3IHN1cmZhY2Ugc2l6ZS4gVGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZWRcblx0ICpcdG9uIHRoZSBuZXh0IGJ1ZmZlciBhdHRhY2ggdG8gdGhpcyBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0QSBtYXhpbWl6ZWQgc3VyZmFjZSB0eXBpY2FsbHkgZmlsbHMgdGhlIGVudGlyZSBvdXRwdXQgaXQgaXNcblx0ICpcdGJvdW5kIHRvLCBleGNlcHQgZm9yIGRlc2t0b3AgZWxlbWVudHMgc3VjaCBhcyBwYW5lbHMuIFRoaXMgaXNcblx0ICpcdHRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBhIG1heGltaXplZCBzaGVsbCBzdXJmYWNlIGFuZCBhXG5cdCAqXHRmdWxsc2NyZWVuIHNoZWxsIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgZGV0YWlscyBkZXBlbmQgb24gdGhlIGNvbXBvc2l0b3IgaW1wbGVtZW50YXRpb24uXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Pyp9IG91dHB1dCBvdXRwdXQgb24gd2hpY2ggdGhlIHN1cmZhY2UgaXMgdG8gYmUgbWF4aW1pemVkIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0TWF4aW1pemVkIChvdXRwdXQpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA3LCBbb2JqZWN0T3B0aW9uYWwob3V0cHV0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFNldCBhIHNob3J0IHRpdGxlIGZvciB0aGUgc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoaXMgc3RyaW5nIG1heSBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBzdXJmYWNlIGluIGEgdGFzayBiYXIsXG5cdCAqXHR3aW5kb3cgbGlzdCwgb3Igb3RoZXIgdXNlciBpbnRlcmZhY2UgZWxlbWVudHMgcHJvdmlkZWQgYnkgdGhlXG5cdCAqXHRjb21wb3NpdG9yLlxuXHQgKlxuXHQgKlx0VGhlIHN0cmluZyBtdXN0IGJlIGVuY29kZWQgaW4gVVRGLTguXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBzdXJmYWNlIHRpdGxlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0VGl0bGUgKHRpdGxlKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgOCwgW3N0cmluZyh0aXRsZSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXQgYSBjbGFzcyBmb3IgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgc3VyZmFjZSBjbGFzcyBpZGVudGlmaWVzIHRoZSBnZW5lcmFsIGNsYXNzIG9mIGFwcGxpY2F0aW9uc1xuXHQgKlx0dG8gd2hpY2ggdGhlIHN1cmZhY2UgYmVsb25ncy4gQSBjb21tb24gY29udmVudGlvbiBpcyB0byB1c2UgdGhlXG5cdCAqXHRmaWxlIG5hbWUgKG9yIHRoZSBmdWxsIHBhdGggaWYgaXQgaXMgYSBub24tc3RhbmRhcmQgbG9jYXRpb24pIG9mXG5cdCAqXHR0aGUgYXBwbGljYXRpb24ncyAuZGVza3RvcCBmaWxlIGFzIHRoZSBjbGFzcy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNsYXp6IHN1cmZhY2UgY2xhc3MgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRDbGFzcyAoY2xhenopIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA5LCBbc3RyaW5nKGNsYXp6KV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xTaGVsbFN1cmZhY2VFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5waW5nKHUobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbMV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmNvbmZpZ3VyZSh1KG1lc3NhZ2UpLCBpKG1lc3NhZ2UpLCBpKG1lc3NhZ2UpKVxuXHR9XG5cblx0YXN5bmMgWzJdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5wb3B1cERvbmUoKVxuXHR9XG5cbn1cbldsU2hlbGxTdXJmYWNlUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX3NoZWxsX3N1cmZhY2UnXG5cbldsU2hlbGxTdXJmYWNlUHJveHkuUmVzaXplID0ge1xuICAvKipcbiAgICogbm8gZWRnZVxuICAgKi9cbiAgbm9uZTogMCxcbiAgLyoqXG4gICAqIHRvcCBlZGdlXG4gICAqL1xuICB0b3A6IDEsXG4gIC8qKlxuICAgKiBib3R0b20gZWRnZVxuICAgKi9cbiAgYm90dG9tOiAyLFxuICAvKipcbiAgICogbGVmdCBlZGdlXG4gICAqL1xuICBsZWZ0OiA0LFxuICAvKipcbiAgICogdG9wIGFuZCBsZWZ0IGVkZ2VzXG4gICAqL1xuICB0b3BMZWZ0OiA1LFxuICAvKipcbiAgICogYm90dG9tIGFuZCBsZWZ0IGVkZ2VzXG4gICAqL1xuICBib3R0b21MZWZ0OiA2LFxuICAvKipcbiAgICogcmlnaHQgZWRnZVxuICAgKi9cbiAgcmlnaHQ6IDgsXG4gIC8qKlxuICAgKiB0b3AgYW5kIHJpZ2h0IGVkZ2VzXG4gICAqL1xuICB0b3BSaWdodDogOSxcbiAgLyoqXG4gICAqIGJvdHRvbSBhbmQgcmlnaHQgZWRnZXNcbiAgICovXG4gIGJvdHRvbVJpZ2h0OiAxMFxufVxuXG5XbFNoZWxsU3VyZmFjZVByb3h5LlRyYW5zaWVudCA9IHtcbiAgLyoqXG4gICAqIGRvIG5vdCBzZXQga2V5Ym9hcmQgZm9jdXNcbiAgICovXG4gIGluYWN0aXZlOiAweDFcbn1cblxuV2xTaGVsbFN1cmZhY2VQcm94eS5GdWxsc2NyZWVuTWV0aG9kID0ge1xuICAvKipcbiAgICogbm8gcHJlZmVyZW5jZSwgYXBwbHkgZGVmYXVsdCBwb2xpY3lcbiAgICovXG4gIGRlZmF1bHQ6IDAsXG4gIC8qKlxuICAgKiBzY2FsZSwgcHJlc2VydmUgdGhlIHN1cmZhY2UncyBhc3BlY3QgcmF0aW8gYW5kIGNlbnRlciBvbiBvdXRwdXRcbiAgICovXG4gIHNjYWxlOiAxLFxuICAvKipcbiAgICogc3dpdGNoIG91dHB1dCBtb2RlIHRvIHRoZSBzbWFsbGVzdCBtb2RlIHRoYXQgY2FuIGZpdCB0aGUgc3VyZmFjZSwgYWRkIGJsYWNrIGJvcmRlcnMgdG8gY29tcGVuc2F0ZSBzaXplIG1pc21hdGNoXG4gICAqL1xuICBkcml2ZXI6IDIsXG4gIC8qKlxuICAgKiBubyB1cHNjYWxpbmcsIGNlbnRlciBvbiBvdXRwdXQgYW5kIGFkZCBibGFjayBib3JkZXJzIHRvIGNvbXBlbnNhdGUgc2l6ZSBtaXNtYXRjaFxuICAgKi9cbiAgZmlsbDogM1xufVxuXG5leHBvcnQgZGVmYXVsdCBXbFNoZWxsU3VyZmFjZVByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmltcG9ydCBXbFN1YnN1cmZhY2VQcm94eSBmcm9tICcuL1dsU3Vic3VyZmFjZVByb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoZSBnbG9iYWwgaW50ZXJmYWNlIGV4cG9zaW5nIHN1Yi1zdXJmYWNlIGNvbXBvc2l0aW5nIGNhcGFiaWxpdGllcy5cbiAqICAgICAgQSB3bF9zdXJmYWNlLCB0aGF0IGhhcyBzdWItc3VyZmFjZXMgYXNzb2NpYXRlZCwgaXMgY2FsbGVkIHRoZVxuICogICAgICBwYXJlbnQgc3VyZmFjZS4gU3ViLXN1cmZhY2VzIGNhbiBiZSBhcmJpdHJhcmlseSBuZXN0ZWQgYW5kIGNyZWF0ZVxuICogICAgICBhIHRyZWUgb2Ygc3ViLXN1cmZhY2VzLlxuICpcbiAqICAgICAgVGhlIHJvb3Qgc3VyZmFjZSBpbiBhIHRyZWUgb2Ygc3ViLXN1cmZhY2VzIGlzIHRoZSBtYWluXG4gKiAgICAgIHN1cmZhY2UuIFRoZSBtYWluIHN1cmZhY2UgY2Fubm90IGJlIGEgc3ViLXN1cmZhY2UsIGJlY2F1c2VcbiAqICAgICAgc3ViLXN1cmZhY2VzIG11c3QgYWx3YXlzIGhhdmUgYSBwYXJlbnQuXG4gKlxuICogICAgICBBIG1haW4gc3VyZmFjZSB3aXRoIGl0cyBzdWItc3VyZmFjZXMgZm9ybXMgYSAoY29tcG91bmQpIHdpbmRvdy5cbiAqICAgICAgRm9yIHdpbmRvdyBtYW5hZ2VtZW50IHB1cnBvc2VzLCB0aGlzIHNldCBvZiB3bF9zdXJmYWNlIG9iamVjdHMgaXNcbiAqICAgICAgdG8gYmUgY29uc2lkZXJlZCBhcyBhIHNpbmdsZSB3aW5kb3csIGFuZCBpdCBzaG91bGQgYWxzbyBiZWhhdmUgYXNcbiAqICAgICAgc3VjaC5cbiAqXG4gKiAgICAgIFRoZSBhaW0gb2Ygc3ViLXN1cmZhY2VzIGlzIHRvIG9mZmxvYWQgc29tZSBvZiB0aGUgY29tcG9zaXRpbmcgd29ya1xuICogICAgICB3aXRoaW4gYSB3aW5kb3cgZnJvbSBjbGllbnRzIHRvIHRoZSBjb21wb3NpdG9yLiBBIHByaW1lIGV4YW1wbGUgaXNcbiAqICAgICAgYSB2aWRlbyBwbGF5ZXIgd2l0aCBkZWNvcmF0aW9ucyBhbmQgdmlkZW8gaW4gc2VwYXJhdGUgd2xfc3VyZmFjZVxuICogICAgICBvYmplY3RzLiBUaGlzIHNob3VsZCBhbGxvdyB0aGUgY29tcG9zaXRvciB0byBwYXNzIFlVViB2aWRlbyBidWZmZXJcbiAqICAgICAgcHJvY2Vzc2luZyB0byBkZWRpY2F0ZWQgb3ZlcmxheSBoYXJkd2FyZSB3aGVuIHBvc3NpYmxlLlxuICogICAgXG4gKi9cbmNsYXNzIFdsU3ViY29tcG9zaXRvclByb3h5IGV4dGVuZHMgUHJveHkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKlx0SW5mb3JtcyB0aGUgc2VydmVyIHRoYXQgdGhlIGNsaWVudCB3aWxsIG5vdCBiZSB1c2luZyB0aGlzXG5cdCAqXHRwcm90b2NvbCBvYmplY3QgYW55bW9yZS4gVGhpcyBkb2VzIG5vdCBhZmZlY3QgYW55IG90aGVyXG5cdCAqXHRvYmplY3RzLCB3bF9zdWJzdXJmYWNlIG9iamVjdHMgaW5jbHVkZWQuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkZXN0cm95ICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0Q3JlYXRlIGEgc3ViLXN1cmZhY2UgaW50ZXJmYWNlIGZvciB0aGUgZ2l2ZW4gc3VyZmFjZSwgYW5kXG5cdCAqXHRhc3NvY2lhdGUgaXQgd2l0aCB0aGUgZ2l2ZW4gcGFyZW50IHN1cmZhY2UuIFRoaXMgdHVybnMgYVxuXHQgKlx0cGxhaW4gd2xfc3VyZmFjZSBpbnRvIGEgc3ViLXN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgdG8tYmUgc3ViLXN1cmZhY2UgbXVzdCBub3QgYWxyZWFkeSBoYXZlIGFub3RoZXIgcm9sZSwgYW5kIGl0XG5cdCAqXHRtdXN0IG5vdCBoYXZlIGFuIGV4aXN0aW5nIHdsX3N1YnN1cmZhY2Ugb2JqZWN0LiBPdGhlcndpc2UgYSBwcm90b2NvbFxuXHQgKlx0ZXJyb3IgaXMgcmFpc2VkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHN1cmZhY2UgdGhlIHN1cmZhY2UgdG8gYmUgdHVybmVkIGludG8gYSBzdWItc3VyZmFjZSBcblx0ICogQHBhcmFtIHsqfSBwYXJlbnQgdGhlIHBhcmVudCBzdXJmYWNlIFxuXHQgKiBAcmV0dXJuIHtXbFN1YnN1cmZhY2VQcm94eX0gdGhlIG5ldyBzdWItc3VyZmFjZSBvYmplY3QgSUQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRnZXRTdWJzdXJmYWNlIChzdXJmYWNlLCBwYXJlbnQpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAxLCBXbFN1YnN1cmZhY2VQcm94eSwgW25ld09iamVjdCgpLCBvYmplY3Qoc3VyZmFjZSksIG9iamVjdChwYXJlbnQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFN1YmNvbXBvc2l0b3JFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cbn1cbldsU3ViY29tcG9zaXRvclByb3h5LnByb3RvY29sTmFtZSA9ICd3bF9zdWJjb21wb3NpdG9yJ1xuXG5XbFN1YmNvbXBvc2l0b3JQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIHRoZSB0by1iZSBzdWItc3VyZmFjZSBpcyBpbnZhbGlkXG4gICAqL1xuICBiYWRTdXJmYWNlOiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsU3ViY29tcG9zaXRvclByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBbiBhZGRpdGlvbmFsIGludGVyZmFjZSB0byBhIHdsX3N1cmZhY2Ugb2JqZWN0LCB3aGljaCBoYXMgYmVlblxuICogICAgICBtYWRlIGEgc3ViLXN1cmZhY2UuIEEgc3ViLXN1cmZhY2UgaGFzIG9uZSBwYXJlbnQgc3VyZmFjZS4gQVxuICogICAgICBzdWItc3VyZmFjZSdzIHNpemUgYW5kIHBvc2l0aW9uIGFyZSBub3QgbGltaXRlZCB0byB0aGF0IG9mIHRoZSBwYXJlbnQuXG4gKiAgICAgIFBhcnRpY3VsYXJseSwgYSBzdWItc3VyZmFjZSBpcyBub3QgYXV0b21hdGljYWxseSBjbGlwcGVkIHRvIGl0c1xuICogICAgICBwYXJlbnQncyBhcmVhLlxuICpcbiAqICAgICAgQSBzdWItc3VyZmFjZSBiZWNvbWVzIG1hcHBlZCwgd2hlbiBhIG5vbi1OVUxMIHdsX2J1ZmZlciBpcyBhcHBsaWVkXG4gKiAgICAgIGFuZCB0aGUgcGFyZW50IHN1cmZhY2UgaXMgbWFwcGVkLiBUaGUgb3JkZXIgb2Ygd2hpY2ggb25lIGhhcHBlbnNcbiAqICAgICAgZmlyc3QgaXMgaXJyZWxldmFudC4gQSBzdWItc3VyZmFjZSBpcyBoaWRkZW4gaWYgdGhlIHBhcmVudCBiZWNvbWVzXG4gKiAgICAgIGhpZGRlbiwgb3IgaWYgYSBOVUxMIHdsX2J1ZmZlciBpcyBhcHBsaWVkLiBUaGVzZSBydWxlcyBhcHBseVxuICogICAgICByZWN1cnNpdmVseSB0aHJvdWdoIHRoZSB0cmVlIG9mIHN1cmZhY2VzLlxuICpcbiAqICAgICAgVGhlIGJlaGF2aW91ciBvZiBhIHdsX3N1cmZhY2UuY29tbWl0IHJlcXVlc3Qgb24gYSBzdWItc3VyZmFjZVxuICogICAgICBkZXBlbmRzIG9uIHRoZSBzdWItc3VyZmFjZSdzIG1vZGUuIFRoZSBwb3NzaWJsZSBtb2RlcyBhcmVcbiAqICAgICAgc3luY2hyb25pemVkIGFuZCBkZXN5bmNocm9uaXplZCwgc2VlIG1ldGhvZHNcbiAqICAgICAgd2xfc3Vic3VyZmFjZS5zZXRfc3luYyBhbmQgd2xfc3Vic3VyZmFjZS5zZXRfZGVzeW5jLiBTeW5jaHJvbml6ZWRcbiAqICAgICAgbW9kZSBjYWNoZXMgdGhlIHdsX3N1cmZhY2Ugc3RhdGUgdG8gYmUgYXBwbGllZCB3aGVuIHRoZSBwYXJlbnQnc1xuICogICAgICBzdGF0ZSBnZXRzIGFwcGxpZWQsIGFuZCBkZXN5bmNocm9uaXplZCBtb2RlIGFwcGxpZXMgdGhlIHBlbmRpbmdcbiAqICAgICAgd2xfc3VyZmFjZSBzdGF0ZSBkaXJlY3RseS4gQSBzdWItc3VyZmFjZSBpcyBpbml0aWFsbHkgaW4gdGhlXG4gKiAgICAgIHN5bmNocm9uaXplZCBtb2RlLlxuICpcbiAqICAgICAgU3ViLXN1cmZhY2VzIGhhdmUgYWxzbyBvdGhlciBraW5kIG9mIHN0YXRlLCB3aGljaCBpcyBtYW5hZ2VkIGJ5XG4gKiAgICAgIHdsX3N1YnN1cmZhY2UgcmVxdWVzdHMsIGFzIG9wcG9zZWQgdG8gd2xfc3VyZmFjZSByZXF1ZXN0cy4gVGhpc1xuICogICAgICBzdGF0ZSBpbmNsdWRlcyB0aGUgc3ViLXN1cmZhY2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHBhcmVudFxuICogICAgICBzdXJmYWNlICh3bF9zdWJzdXJmYWNlLnNldF9wb3NpdGlvbiksIGFuZCB0aGUgc3RhY2tpbmcgb3JkZXIgb2ZcbiAqICAgICAgdGhlIHBhcmVudCBhbmQgaXRzIHN1Yi1zdXJmYWNlcyAod2xfc3Vic3VyZmFjZS5wbGFjZV9hYm92ZSBhbmRcbiAqICAgICAgLnBsYWNlX2JlbG93KS4gVGhpcyBzdGF0ZSBpcyBhcHBsaWVkIHdoZW4gdGhlIHBhcmVudCBzdXJmYWNlJ3NcbiAqICAgICAgd2xfc3VyZmFjZSBzdGF0ZSBpcyBhcHBsaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzdWItc3VyZmFjZSdzIG1vZGUuXG4gKiAgICAgIEFzIHRoZSBleGNlcHRpb24sIHNldF9zeW5jIGFuZCBzZXRfZGVzeW5jIGFyZSBlZmZlY3RpdmUgaW1tZWRpYXRlbHkuXG4gKlxuICogICAgICBUaGUgbWFpbiBzdXJmYWNlIGNhbiBiZSB0aG91Z2h0IHRvIGJlIGFsd2F5cyBpbiBkZXN5bmNocm9uaXplZCBtb2RlLFxuICogICAgICBzaW5jZSBpdCBkb2VzIG5vdCBoYXZlIGEgcGFyZW50IGluIHRoZSBzdWItc3VyZmFjZXMgc2Vuc2UuXG4gKlxuICogICAgICBFdmVuIGlmIGEgc3ViLXN1cmZhY2UgaXMgaW4gZGVzeW5jaHJvbml6ZWQgbW9kZSwgaXQgd2lsbCBiZWhhdmUgYXNcbiAqICAgICAgaW4gc3luY2hyb25pemVkIG1vZGUsIGlmIGl0cyBwYXJlbnQgc3VyZmFjZSBiZWhhdmVzIGFzIGluXG4gKiAgICAgIHN5bmNocm9uaXplZCBtb2RlLiBUaGlzIHJ1bGUgaXMgYXBwbGllZCByZWN1cnNpdmVseSB0aHJvdWdob3V0IHRoZVxuICogICAgICB0cmVlIG9mIHN1cmZhY2VzLiBUaGlzIG1lYW5zLCB0aGF0IG9uZSBjYW4gc2V0IGEgc3ViLXN1cmZhY2UgaW50b1xuICogICAgICBzeW5jaHJvbml6ZWQgbW9kZSwgYW5kIHRoZW4gYXNzdW1lIHRoYXQgYWxsIGl0cyBjaGlsZCBhbmQgZ3JhbmQtY2hpbGRcbiAqICAgICAgc3ViLXN1cmZhY2VzIGFyZSBzeW5jaHJvbml6ZWQsIHRvbywgd2l0aG91dCBleHBsaWNpdGx5IHNldHRpbmcgdGhlbS5cbiAqXG4gKiAgICAgIElmIHRoZSB3bF9zdXJmYWNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgd2xfc3Vic3VyZmFjZSBpcyBkZXN0cm95ZWQsIHRoZVxuICogICAgICB3bF9zdWJzdXJmYWNlIG9iamVjdCBiZWNvbWVzIGluZXJ0LiBOb3RlLCB0aGF0IGRlc3Ryb3lpbmcgZWl0aGVyIG9iamVjdFxuICogICAgICB0YWtlcyBlZmZlY3QgaW1tZWRpYXRlbHkuIElmIHlvdSBuZWVkIHRvIHN5bmNocm9uaXplIHRoZSByZW1vdmFsXG4gKiAgICAgIG9mIGEgc3ViLXN1cmZhY2UgdG8gdGhlIHBhcmVudCBzdXJmYWNlIHVwZGF0ZSwgdW5tYXAgdGhlIHN1Yi1zdXJmYWNlXG4gKiAgICAgIGZpcnN0IGJ5IGF0dGFjaGluZyBhIE5VTEwgd2xfYnVmZmVyLCB1cGRhdGUgcGFyZW50LCBhbmQgdGhlbiBkZXN0cm95XG4gKiAgICAgIHRoZSBzdWItc3VyZmFjZS5cbiAqXG4gKiAgICAgIElmIHRoZSBwYXJlbnQgd2xfc3VyZmFjZSBvYmplY3QgaXMgZGVzdHJveWVkLCB0aGUgc3ViLXN1cmZhY2UgaXNcbiAqICAgICAgdW5tYXBwZWQuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xTdWJzdXJmYWNlUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgc3ViLXN1cmZhY2UgaW50ZXJmYWNlIGlzIHJlbW92ZWQgZnJvbSB0aGUgd2xfc3VyZmFjZSBvYmplY3Rcblx0ICpcdHRoYXQgd2FzIHR1cm5lZCBpbnRvIGEgc3ViLXN1cmZhY2Ugd2l0aCBhXG5cdCAqXHR3bF9zdWJjb21wb3NpdG9yLmdldF9zdWJzdXJmYWNlIHJlcXVlc3QuIFRoZSB3bF9zdXJmYWNlJ3MgYXNzb2NpYXRpb25cblx0ICpcdHRvIHRoZSBwYXJlbnQgaXMgZGVsZXRlZCwgYW5kIHRoZSB3bF9zdXJmYWNlIGxvc2VzIGl0cyByb2xlIGFzXG5cdCAqXHRhIHN1Yi1zdXJmYWNlLiBUaGUgd2xfc3VyZmFjZSBpcyB1bm1hcHBlZC5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHNjaGVkdWxlcyBhIHN1Yi1zdXJmYWNlIHBvc2l0aW9uIGNoYW5nZS5cblx0ICpcdFRoZSBzdWItc3VyZmFjZSB3aWxsIGJlIG1vdmVkIHNvIHRoYXQgaXRzIG9yaWdpbiAodG9wIGxlZnRcblx0ICpcdGNvcm5lciBwaXhlbCkgd2lsbCBiZSBhdCB0aGUgbG9jYXRpb24geCwgeSBvZiB0aGUgcGFyZW50IHN1cmZhY2Vcblx0ICpcdGNvb3JkaW5hdGUgc3lzdGVtLiBUaGUgY29vcmRpbmF0ZXMgYXJlIG5vdCByZXN0cmljdGVkIHRvIHRoZSBwYXJlbnRcblx0ICpcdHN1cmZhY2UgYXJlYS4gTmVnYXRpdmUgdmFsdWVzIGFyZSBhbGxvd2VkLlxuXHQgKlxuXHQgKlx0VGhlIHNjaGVkdWxlZCBjb29yZGluYXRlcyB3aWxsIHRha2UgZWZmZWN0IHdoZW5ldmVyIHRoZSBzdGF0ZSBvZiB0aGVcblx0ICpcdHBhcmVudCBzdXJmYWNlIGlzIGFwcGxpZWQuIFdoZW4gdGhpcyBoYXBwZW5zIGRlcGVuZHMgb24gd2hldGhlciB0aGVcblx0ICpcdHBhcmVudCBzdXJmYWNlIGlzIGluIHN5bmNocm9uaXplZCBtb2RlIG9yIG5vdC4gU2VlXG5cdCAqXHR3bF9zdWJzdXJmYWNlLnNldF9zeW5jIGFuZCB3bF9zdWJzdXJmYWNlLnNldF9kZXN5bmMgZm9yIGRldGFpbHMuXG5cdCAqXG5cdCAqXHRJZiBtb3JlIHRoYW4gb25lIHNldF9wb3NpdGlvbiByZXF1ZXN0IGlzIGludm9rZWQgYnkgdGhlIGNsaWVudCBiZWZvcmVcblx0ICpcdHRoZSBjb21taXQgb2YgdGhlIHBhcmVudCBzdXJmYWNlLCB0aGUgcG9zaXRpb24gb2YgYSBuZXcgcmVxdWVzdCBhbHdheXNcblx0ICpcdHJlcGxhY2VzIHRoZSBzY2hlZHVsZWQgcG9zaXRpb24gZnJvbSBhbnkgcHJldmlvdXMgcmVxdWVzdC5cblx0ICpcblx0ICpcdFRoZSBpbml0aWFsIHBvc2l0aW9uIGlzIDAsIDAuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY29vcmRpbmF0ZSBpbiB0aGUgcGFyZW50IHN1cmZhY2UgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY29vcmRpbmF0ZSBpbiB0aGUgcGFyZW50IHN1cmZhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRQb3NpdGlvbiAoeCwgeSkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtpbnQoeCksIGludCh5KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgc3ViLXN1cmZhY2UgaXMgdGFrZW4gZnJvbSB0aGUgc3RhY2ssIGFuZCBwdXQgYmFjayBqdXN0XG5cdCAqXHRhYm92ZSB0aGUgcmVmZXJlbmNlIHN1cmZhY2UsIGNoYW5naW5nIHRoZSB6LW9yZGVyIG9mIHRoZSBzdWItc3VyZmFjZXMuXG5cdCAqXHRUaGUgcmVmZXJlbmNlIHN1cmZhY2UgbXVzdCBiZSBvbmUgb2YgdGhlIHNpYmxpbmcgc3VyZmFjZXMsIG9yIHRoZVxuXHQgKlx0cGFyZW50IHN1cmZhY2UuIFVzaW5nIGFueSBvdGhlciBzdXJmYWNlLCBpbmNsdWRpbmcgdGhpcyBzdWItc3VyZmFjZSxcblx0ICpcdHdpbGwgY2F1c2UgYSBwcm90b2NvbCBlcnJvci5cblx0ICpcblx0ICpcdFRoZSB6LW9yZGVyIGlzIGRvdWJsZS1idWZmZXJlZC4gUmVxdWVzdHMgYXJlIGhhbmRsZWQgaW4gb3JkZXIgYW5kXG5cdCAqXHRhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIGEgcGVuZGluZyBzdGF0ZS4gVGhlIGZpbmFsIHBlbmRpbmcgc3RhdGUgaXNcblx0ICpcdGNvcGllZCB0byB0aGUgYWN0aXZlIHN0YXRlIHRoZSBuZXh0IHRpbWUgdGhlIHN0YXRlIG9mIHRoZSBwYXJlbnRcblx0ICpcdHN1cmZhY2UgaXMgYXBwbGllZC4gV2hlbiB0aGlzIGhhcHBlbnMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBwYXJlbnRcblx0ICpcdHN1cmZhY2UgaXMgaW4gc3luY2hyb25pemVkIG1vZGUgb3Igbm90LiBTZWUgd2xfc3Vic3VyZmFjZS5zZXRfc3luYyBhbmRcblx0ICpcdHdsX3N1YnN1cmZhY2Uuc2V0X2Rlc3luYyBmb3IgZGV0YWlscy5cblx0ICpcblx0ICpcdEEgbmV3IHN1Yi1zdXJmYWNlIGlzIGluaXRpYWxseSBhZGRlZCBhcyB0aGUgdG9wLW1vc3QgaW4gdGhlIHN0YWNrXG5cdCAqXHRvZiBpdHMgc2libGluZ3MgYW5kIHBhcmVudC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSBzaWJsaW5nIHRoZSByZWZlcmVuY2Ugc3VyZmFjZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHBsYWNlQWJvdmUgKHNpYmxpbmcpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAyLCBbb2JqZWN0KHNpYmxpbmcpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIHN1Yi1zdXJmYWNlIGlzIHBsYWNlZCBqdXN0IGJlbG93IHRoZSByZWZlcmVuY2Ugc3VyZmFjZS5cblx0ICpcdFNlZSB3bF9zdWJzdXJmYWNlLnBsYWNlX2Fib3ZlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNpYmxpbmcgdGhlIHJlZmVyZW5jZSBzdXJmYWNlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0cGxhY2VCZWxvdyAoc2libGluZykge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDMsIFtvYmplY3Qoc2libGluZyldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRDaGFuZ2UgdGhlIGNvbW1pdCBiZWhhdmlvdXIgb2YgdGhlIHN1Yi1zdXJmYWNlIHRvIHN5bmNocm9uaXplZFxuXHQgKlx0bW9kZSwgYWxzbyBkZXNjcmliZWQgYXMgdGhlIHBhcmVudCBkZXBlbmRlbnQgbW9kZS5cblx0ICpcblx0ICpcdEluIHN5bmNocm9uaXplZCBtb2RlLCB3bF9zdXJmYWNlLmNvbW1pdCBvbiBhIHN1Yi1zdXJmYWNlIHdpbGxcblx0ICpcdGFjY3VtdWxhdGUgdGhlIGNvbW1pdHRlZCBzdGF0ZSBpbiBhIGNhY2hlLCBidXQgdGhlIHN0YXRlIHdpbGxcblx0ICpcdG5vdCBiZSBhcHBsaWVkIGFuZCBoZW5jZSB3aWxsIG5vdCBjaGFuZ2UgdGhlIGNvbXBvc2l0b3Igb3V0cHV0LlxuXHQgKlx0VGhlIGNhY2hlZCBzdGF0ZSBpcyBhcHBsaWVkIHRvIHRoZSBzdWItc3VyZmFjZSBpbW1lZGlhdGVseSBhZnRlclxuXHQgKlx0dGhlIHBhcmVudCBzdXJmYWNlJ3Mgc3RhdGUgaXMgYXBwbGllZC4gVGhpcyBlbnN1cmVzIGF0b21pY1xuXHQgKlx0dXBkYXRlcyBvZiB0aGUgcGFyZW50IGFuZCBhbGwgaXRzIHN5bmNocm9uaXplZCBzdWItc3VyZmFjZXMuXG5cdCAqXHRBcHBseWluZyB0aGUgY2FjaGVkIHN0YXRlIHdpbGwgaW52YWxpZGF0ZSB0aGUgY2FjaGUsIHNvIGZ1cnRoZXJcblx0ICpcdHBhcmVudCBzdXJmYWNlIGNvbW1pdHMgZG8gbm90IChyZS0pYXBwbHkgb2xkIHN0YXRlLlxuXHQgKlxuXHQgKlx0U2VlIHdsX3N1YnN1cmZhY2UgZm9yIHRoZSByZWN1cnNpdmUgZWZmZWN0IG9mIHRoaXMgbW9kZS5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldFN5bmMgKCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDQsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRDaGFuZ2UgdGhlIGNvbW1pdCBiZWhhdmlvdXIgb2YgdGhlIHN1Yi1zdXJmYWNlIHRvIGRlc3luY2hyb25pemVkXG5cdCAqXHRtb2RlLCBhbHNvIGRlc2NyaWJlZCBhcyBpbmRlcGVuZGVudCBvciBmcmVlbHkgcnVubmluZyBtb2RlLlxuXHQgKlxuXHQgKlx0SW4gZGVzeW5jaHJvbml6ZWQgbW9kZSwgd2xfc3VyZmFjZS5jb21taXQgb24gYSBzdWItc3VyZmFjZSB3aWxsXG5cdCAqXHRhcHBseSB0aGUgcGVuZGluZyBzdGF0ZSBkaXJlY3RseSwgd2l0aG91dCBjYWNoaW5nLCBhcyBoYXBwZW5zXG5cdCAqXHRub3JtYWxseSB3aXRoIGEgd2xfc3VyZmFjZS4gQ2FsbGluZyB3bF9zdXJmYWNlLmNvbW1pdCBvbiB0aGVcblx0ICpcdHBhcmVudCBzdXJmYWNlIGhhcyBubyBlZmZlY3Qgb24gdGhlIHN1Yi1zdXJmYWNlJ3Mgd2xfc3VyZmFjZVxuXHQgKlx0c3RhdGUuIFRoaXMgbW9kZSBhbGxvd3MgYSBzdWItc3VyZmFjZSB0byBiZSB1cGRhdGVkIG9uIGl0cyBvd24uXG5cdCAqXG5cdCAqXHRJZiBjYWNoZWQgc3RhdGUgZXhpc3RzIHdoZW4gd2xfc3VyZmFjZS5jb21taXQgaXMgY2FsbGVkIGluXG5cdCAqXHRkZXN5bmNocm9uaXplZCBtb2RlLCB0aGUgcGVuZGluZyBzdGF0ZSBpcyBhZGRlZCB0byB0aGUgY2FjaGVkXG5cdCAqXHRzdGF0ZSwgYW5kIGFwcGxpZWQgYXMgYSB3aG9sZS4gVGhpcyBpbnZhbGlkYXRlcyB0aGUgY2FjaGUuXG5cdCAqXG5cdCAqXHROb3RlOiBldmVuIGlmIGEgc3ViLXN1cmZhY2UgaXMgc2V0IHRvIGRlc3luY2hyb25pemVkLCBhIHBhcmVudFxuXHQgKlx0c3ViLXN1cmZhY2UgbWF5IG92ZXJyaWRlIGl0IHRvIGJlaGF2ZSBhcyBzeW5jaHJvbml6ZWQuIEZvciBkZXRhaWxzLFxuXHQgKlx0c2VlIHdsX3N1YnN1cmZhY2UuXG5cdCAqXG5cdCAqXHRJZiBhIHN1cmZhY2UncyBwYXJlbnQgc3VyZmFjZSBiZWhhdmVzIGFzIGRlc3luY2hyb25pemVkLCB0aGVuXG5cdCAqXHR0aGUgY2FjaGVkIHN0YXRlIGlzIGFwcGxpZWQgb24gc2V0X2Rlc3luYy5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldERlc3luYyAoKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNSwgW10pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7V2xTdWJzdXJmYWNlRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG59XG5XbFN1YnN1cmZhY2VQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfc3Vic3VyZmFjZSdcblxuV2xTdWJzdXJmYWNlUHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiB3bF9zdXJmYWNlIGlzIG5vdCBhIHNpYmxpbmcgb3IgdGhlIHBhcmVudFxuICAgKi9cbiAgYmFkU3VyZmFjZTogMFxufVxuXG5leHBvcnQgZGVmYXVsdCBXbFN1YnN1cmZhY2VQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDExIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMSBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTItMjAxMyBDb2xsYWJvcmEsIEx0ZC5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcbiAqICAgICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbiAqICAgIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXG4gKiAgICBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxuICogICAgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqICAgIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlXG4gKiAgICBuZXh0IHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbFxuICogICAgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICAgIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgICBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSU1xuICogICAgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4gKiAgICBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogICAgQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogICAgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsU3VyZmFjZUV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYSBzdXJmYWNlJ3MgY3JlYXRpb24sIG1vdmVtZW50LCBvciByZXNpemluZ1xuXHQgKlx0cmVzdWx0cyBpbiBzb21lIHBhcnQgb2YgaXQgYmVpbmcgd2l0aGluIHRoZSBzY2Fub3V0IHJlZ2lvbiBvZiBhblxuXHQgKlx0b3V0cHV0LlxuXHQgKlxuXHQgKlx0Tm90ZSB0aGF0IGEgc3VyZmFjZSBtYXkgYmUgb3ZlcmxhcHBpbmcgd2l0aCB6ZXJvIG9yIG1vcmUgb3V0cHV0cy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSBvdXRwdXQgb3V0cHV0IGVudGVyZWQgYnkgdGhlIHN1cmZhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRlbnRlcihvdXRwdXQpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYSBzdXJmYWNlJ3MgY3JlYXRpb24sIG1vdmVtZW50LCBvciByZXNpemluZ1xuXHQgKlx0cmVzdWx0cyBpbiBpdCBubyBsb25nZXIgaGF2aW5nIGFueSBwYXJ0IG9mIGl0IHdpdGhpbiB0aGUgc2Nhbm91dCByZWdpb25cblx0ICpcdG9mIGFuIG91dHB1dC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHsqfSBvdXRwdXQgb3V0cHV0IGxlZnQgYnkgdGhlIHN1cmZhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRsZWF2ZShvdXRwdXQpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMSBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTEgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDEyLTIwMTMgQ29sbGFib3JhLCBMdGQuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzXG4gKiAgICAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG4gKiAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICogICAgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSxcbiAqICAgIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiAgICBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZVxuICogICAgbmV4dCBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbiAqICAgIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogICAgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlNcbiAqICAgIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuICogICAgQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqICAgIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICAgIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuaW1wb3J0IFdsQ2FsbGJhY2tQcm94eSBmcm9tICcuL1dsQ2FsbGJhY2tQcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBIHN1cmZhY2UgaXMgYSByZWN0YW5ndWxhciBhcmVhIHRoYXQgaXMgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW4uXG4gKiAgICAgIEl0IGhhcyBhIGxvY2F0aW9uLCBzaXplIGFuZCBwaXhlbCBjb250ZW50cy5cbiAqXG4gKiAgICAgIFRoZSBzaXplIG9mIGEgc3VyZmFjZSAoYW5kIHJlbGF0aXZlIHBvc2l0aW9ucyBvbiBpdCkgaXMgZGVzY3JpYmVkXG4gKiAgICAgIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMsIHdoaWNoIG1heSBkaWZmZXIgZnJvbSB0aGUgYnVmZmVyXG4gKiAgICAgIGNvb3JkaW5hdGVzIG9mIHRoZSBwaXhlbCBjb250ZW50LCBpbiBjYXNlIGEgYnVmZmVyX3RyYW5zZm9ybVxuICogICAgICBvciBhIGJ1ZmZlcl9zY2FsZSBpcyB1c2VkLlxuICpcbiAqICAgICAgQSBzdXJmYWNlIHdpdGhvdXQgYSBcInJvbGVcIiBpcyBmYWlybHkgdXNlbGVzczogYSBjb21wb3NpdG9yIGRvZXNcbiAqICAgICAgbm90IGtub3cgd2hlcmUsIHdoZW4gb3IgaG93IHRvIHByZXNlbnQgaXQuIFRoZSByb2xlIGlzIHRoZVxuICogICAgICBwdXJwb3NlIG9mIGEgd2xfc3VyZmFjZS4gRXhhbXBsZXMgb2Ygcm9sZXMgYXJlIGEgY3Vyc29yIGZvciBhXG4gKiAgICAgIHBvaW50ZXIgKGFzIHNldCBieSB3bF9wb2ludGVyLnNldF9jdXJzb3IpLCBhIGRyYWcgaWNvblxuICogICAgICAod2xfZGF0YV9kZXZpY2Uuc3RhcnRfZHJhZyksIGEgc3ViLXN1cmZhY2VcbiAqICAgICAgKHdsX3N1YmNvbXBvc2l0b3IuZ2V0X3N1YnN1cmZhY2UpLCBhbmQgYSB3aW5kb3cgYXMgZGVmaW5lZCBieSBhXG4gKiAgICAgIHNoZWxsIHByb3RvY29sIChlLmcuIHdsX3NoZWxsLmdldF9zaGVsbF9zdXJmYWNlKS5cbiAqXG4gKiAgICAgIEEgc3VyZmFjZSBjYW4gaGF2ZSBvbmx5IG9uZSByb2xlIGF0IGEgdGltZS4gSW5pdGlhbGx5IGFcbiAqICAgICAgd2xfc3VyZmFjZSBkb2VzIG5vdCBoYXZlIGEgcm9sZS4gT25jZSBhIHdsX3N1cmZhY2UgaXMgZ2l2ZW4gYVxuICogICAgICByb2xlLCBpdCBpcyBzZXQgcGVybWFuZW50bHkgZm9yIHRoZSB3aG9sZSBsaWZldGltZSBvZiB0aGVcbiAqICAgICAgd2xfc3VyZmFjZSBvYmplY3QuIEdpdmluZyB0aGUgY3VycmVudCByb2xlIGFnYWluIGlzIGFsbG93ZWQsXG4gKiAgICAgIHVubGVzcyBleHBsaWNpdGx5IGZvcmJpZGRlbiBieSB0aGUgcmVsZXZhbnQgaW50ZXJmYWNlXG4gKiAgICAgIHNwZWNpZmljYXRpb24uXG4gKlxuICogICAgICBTdXJmYWNlIHJvbGVzIGFyZSBnaXZlbiBieSByZXF1ZXN0cyBpbiBvdGhlciBpbnRlcmZhY2VzIHN1Y2ggYXNcbiAqICAgICAgd2xfcG9pbnRlci5zZXRfY3Vyc29yLiBUaGUgcmVxdWVzdCBzaG91bGQgZXhwbGljaXRseSBtZW50aW9uXG4gKiAgICAgIHRoYXQgdGhpcyByZXF1ZXN0IGdpdmVzIGEgcm9sZSB0byBhIHdsX3N1cmZhY2UuIE9mdGVuLCB0aGlzXG4gKiAgICAgIHJlcXVlc3QgYWxzbyBjcmVhdGVzIGEgbmV3IHByb3RvY29sIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlXG4gKiAgICAgIHJvbGUgYW5kIGFkZHMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IHRvIHdsX3N1cmZhY2UuIFdoZW4gYVxuICogICAgICBjbGllbnQgd2FudHMgdG8gZGVzdHJveSBhIHdsX3N1cmZhY2UsIHRoZXkgbXVzdCBkZXN0cm95IHRoaXMgJ3JvbGVcbiAqICAgICAgb2JqZWN0JyBiZWZvcmUgdGhlIHdsX3N1cmZhY2UuXG4gKlxuICogICAgICBEZXN0cm95aW5nIHRoZSByb2xlIG9iamVjdCBkb2VzIG5vdCByZW1vdmUgdGhlIHJvbGUgZnJvbSB0aGVcbiAqICAgICAgd2xfc3VyZmFjZSwgYnV0IGl0IG1heSBzdG9wIHRoZSB3bF9zdXJmYWNlIGZyb20gXCJwbGF5aW5nIHRoZSByb2xlXCIuXG4gKiAgICAgIEZvciBpbnN0YW5jZSwgaWYgYSB3bF9zdWJzdXJmYWNlIG9iamVjdCBpcyBkZXN0cm95ZWQsIHRoZSB3bF9zdXJmYWNlXG4gKiAgICAgIGl0IHdhcyBjcmVhdGVkIGZvciB3aWxsIGJlIHVubWFwcGVkIGFuZCBmb3JnZXQgaXRzIHBvc2l0aW9uIGFuZFxuICogICAgICB6LW9yZGVyLiBJdCBpcyBhbGxvd2VkIHRvIGNyZWF0ZSBhIHdsX3N1YnN1cmZhY2UgZm9yIHRoZSBzYW1lXG4gKiAgICAgIHdsX3N1cmZhY2UgYWdhaW4sIGJ1dCBpdCBpcyBub3QgYWxsb3dlZCB0byB1c2UgdGhlIHdsX3N1cmZhY2UgYXNcbiAqICAgICAgYSBjdXJzb3IgKGN1cnNvciBpcyBhIGRpZmZlcmVudCByb2xlIHRoYW4gc3ViLXN1cmZhY2UsIGFuZCByb2xlXG4gKiAgICAgIHN3aXRjaGluZyBpcyBub3QgYWxsb3dlZCkuXG4gKiAgICBcbiAqL1xuY2xhc3MgV2xTdXJmYWNlUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHREZWxldGVzIHRoZSBzdXJmYWNlIGFuZCBpbnZhbGlkYXRlcyBpdHMgb2JqZWN0IElELlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGVzdHJveSAoKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMCwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFNldCBhIGJ1ZmZlciBhcyB0aGUgY29udGVudCBvZiB0aGlzIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRUaGUgbmV3IHNpemUgb2YgdGhlIHN1cmZhY2UgaXMgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgYnVmZmVyXG5cdCAqXHRzaXplIHRyYW5zZm9ybWVkIGJ5IHRoZSBpbnZlcnNlIGJ1ZmZlcl90cmFuc2Zvcm0gYW5kIHRoZVxuXHQgKlx0aW52ZXJzZSBidWZmZXJfc2NhbGUuIFRoaXMgbWVhbnMgdGhhdCB0aGUgc3VwcGxpZWQgYnVmZmVyXG5cdCAqXHRtdXN0IGJlIGFuIGludGVnZXIgbXVsdGlwbGUgb2YgdGhlIGJ1ZmZlcl9zY2FsZS5cblx0ICpcblx0ICpcdFRoZSB4IGFuZCB5IGFyZ3VtZW50cyBzcGVjaWZ5IHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV3IHBlbmRpbmdcblx0ICpcdGJ1ZmZlcidzIHVwcGVyIGxlZnQgY29ybmVyLCByZWxhdGl2ZSB0byB0aGUgY3VycmVudCBidWZmZXIncyB1cHBlclxuXHQgKlx0bGVmdCBjb3JuZXIsIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMuIEluIG90aGVyIHdvcmRzLCB0aGVcblx0ICpcdHggYW5kIHksIGNvbWJpbmVkIHdpdGggdGhlIG5ldyBzdXJmYWNlIHNpemUgZGVmaW5lIGluIHdoaWNoXG5cdCAqXHRkaXJlY3Rpb25zIHRoZSBzdXJmYWNlJ3Mgc2l6ZSBjaGFuZ2VzLlxuXHQgKlxuXHQgKlx0U3VyZmFjZSBjb250ZW50cyBhcmUgZG91YmxlLWJ1ZmZlcmVkIHN0YXRlLCBzZWUgd2xfc3VyZmFjZS5jb21taXQuXG5cdCAqXG5cdCAqXHRUaGUgaW5pdGlhbCBzdXJmYWNlIGNvbnRlbnRzIGFyZSB2b2lkOyB0aGVyZSBpcyBubyBjb250ZW50LlxuXHQgKlx0d2xfc3VyZmFjZS5hdHRhY2ggYXNzaWducyB0aGUgZ2l2ZW4gd2xfYnVmZmVyIGFzIHRoZSBwZW5kaW5nXG5cdCAqXHR3bF9idWZmZXIuIHdsX3N1cmZhY2UuY29tbWl0IG1ha2VzIHRoZSBwZW5kaW5nIHdsX2J1ZmZlciB0aGUgbmV3XG5cdCAqXHRzdXJmYWNlIGNvbnRlbnRzLCBhbmQgdGhlIHNpemUgb2YgdGhlIHN1cmZhY2UgYmVjb21lcyB0aGUgc2l6ZVxuXHQgKlx0Y2FsY3VsYXRlZCBmcm9tIHRoZSB3bF9idWZmZXIsIGFzIGRlc2NyaWJlZCBhYm92ZS4gQWZ0ZXIgY29tbWl0LFxuXHQgKlx0dGhlcmUgaXMgbm8gcGVuZGluZyBidWZmZXIgdW50aWwgdGhlIG5leHQgYXR0YWNoLlxuXHQgKlxuXHQgKlx0Q29tbWl0dGluZyBhIHBlbmRpbmcgd2xfYnVmZmVyIGFsbG93cyB0aGUgY29tcG9zaXRvciB0byByZWFkIHRoZVxuXHQgKlx0cGl4ZWxzIGluIHRoZSB3bF9idWZmZXIuIFRoZSBjb21wb3NpdG9yIG1heSBhY2Nlc3MgdGhlIHBpeGVscyBhdFxuXHQgKlx0YW55IHRpbWUgYWZ0ZXIgdGhlIHdsX3N1cmZhY2UuY29tbWl0IHJlcXVlc3QuIFdoZW4gdGhlIGNvbXBvc2l0b3Jcblx0ICpcdHdpbGwgbm90IGFjY2VzcyB0aGUgcGl4ZWxzIGFueW1vcmUsIGl0IHdpbGwgc2VuZCB0aGVcblx0ICpcdHdsX2J1ZmZlci5yZWxlYXNlIGV2ZW50LiBPbmx5IGFmdGVyIHJlY2VpdmluZyB3bF9idWZmZXIucmVsZWFzZSxcblx0ICpcdHRoZSBjbGllbnQgbWF5IHJldXNlIHRoZSB3bF9idWZmZXIuIEEgd2xfYnVmZmVyIHRoYXQgaGFzIGJlZW5cblx0ICpcdGF0dGFjaGVkIGFuZCB0aGVuIHJlcGxhY2VkIGJ5IGFub3RoZXIgYXR0YWNoIGluc3RlYWQgb2YgY29tbWl0dGVkXG5cdCAqXHR3aWxsIG5vdCByZWNlaXZlIGEgcmVsZWFzZSBldmVudCwgYW5kIGlzIG5vdCB1c2VkIGJ5IHRoZVxuXHQgKlx0Y29tcG9zaXRvci5cblx0ICpcblx0ICpcdERlc3Ryb3lpbmcgdGhlIHdsX2J1ZmZlciBhZnRlciB3bF9idWZmZXIucmVsZWFzZSBkb2VzIG5vdCBjaGFuZ2Vcblx0ICpcdHRoZSBzdXJmYWNlIGNvbnRlbnRzLiBIb3dldmVyLCBpZiB0aGUgY2xpZW50IGRlc3Ryb3lzIHRoZVxuXHQgKlx0d2xfYnVmZmVyIGJlZm9yZSByZWNlaXZpbmcgdGhlIHdsX2J1ZmZlci5yZWxlYXNlIGV2ZW50LCB0aGUgc3VyZmFjZVxuXHQgKlx0Y29udGVudHMgYmVjb21lIHVuZGVmaW5lZCBpbW1lZGlhdGVseS5cblx0ICpcblx0ICpcdElmIHdsX3N1cmZhY2UuYXR0YWNoIGlzIHNlbnQgd2l0aCBhIE5VTEwgd2xfYnVmZmVyLCB0aGVcblx0ICpcdGZvbGxvd2luZyB3bF9zdXJmYWNlLmNvbW1pdCB3aWxsIHJlbW92ZSB0aGUgc3VyZmFjZSBjb250ZW50LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0gez8qfSBidWZmZXIgYnVmZmVyIG9mIHN1cmZhY2UgY29udGVudHMgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHN1cmZhY2UtbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBzdXJmYWNlLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGF0dGFjaCAoYnVmZmVyLCB4LCB5KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMSwgW29iamVjdE9wdGlvbmFsKGJ1ZmZlciksIGludCh4KSwgaW50KHkpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGlzIHVzZWQgdG8gZGVzY3JpYmUgdGhlIHJlZ2lvbnMgd2hlcmUgdGhlIHBlbmRpbmdcblx0ICpcdGJ1ZmZlciBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCBzdXJmYWNlIGNvbnRlbnRzLCBhbmQgd2hlcmVcblx0ICpcdHRoZSBzdXJmYWNlIHRoZXJlZm9yZSBuZWVkcyB0byBiZSByZXBhaW50ZWQuIFRoZSBjb21wb3NpdG9yXG5cdCAqXHRpZ25vcmVzIHRoZSBwYXJ0cyBvZiB0aGUgZGFtYWdlIHRoYXQgZmFsbCBvdXRzaWRlIG9mIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0RGFtYWdlIGlzIGRvdWJsZS1idWZmZXJlZCBzdGF0ZSwgc2VlIHdsX3N1cmZhY2UuY29tbWl0LlxuXHQgKlxuXHQgKlx0VGhlIGRhbWFnZSByZWN0YW5nbGUgaXMgc3BlY2lmaWVkIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMsXG5cdCAqXHR3aGVyZSB4IGFuZCB5IHNwZWNpZnkgdGhlIHVwcGVyIGxlZnQgY29ybmVyIG9mIHRoZSBkYW1hZ2UgcmVjdGFuZ2xlLlxuXHQgKlxuXHQgKlx0VGhlIGluaXRpYWwgdmFsdWUgZm9yIHBlbmRpbmcgZGFtYWdlIGlzIGVtcHR5OiBubyBkYW1hZ2UuXG5cdCAqXHR3bF9zdXJmYWNlLmRhbWFnZSBhZGRzIHBlbmRpbmcgZGFtYWdlOiB0aGUgbmV3IHBlbmRpbmcgZGFtYWdlXG5cdCAqXHRpcyB0aGUgdW5pb24gb2Ygb2xkIHBlbmRpbmcgZGFtYWdlIGFuZCB0aGUgZ2l2ZW4gcmVjdGFuZ2xlLlxuXHQgKlxuXHQgKlx0d2xfc3VyZmFjZS5jb21taXQgYXNzaWducyBwZW5kaW5nIGRhbWFnZSBhcyB0aGUgY3VycmVudCBkYW1hZ2UsXG5cdCAqXHRhbmQgY2xlYXJzIHBlbmRpbmcgZGFtYWdlLiBUaGUgc2VydmVyIHdpbGwgY2xlYXIgdGhlIGN1cnJlbnRcblx0ICpcdGRhbWFnZSBhcyBpdCByZXBhaW50cyB0aGUgc3VyZmFjZS5cblx0ICpcblx0ICpcdEFsdGVybmF0aXZlbHksIGRhbWFnZSBjYW4gYmUgcG9zdGVkIHdpdGggd2xfc3VyZmFjZS5kYW1hZ2VfYnVmZmVyXG5cdCAqXHR3aGljaCB1c2VzIGJ1ZmZlciBjb29yZGluYXRlcyBpbnN0ZWFkIG9mIHN1cmZhY2UgY29vcmRpbmF0ZXMsXG5cdCAqXHRhbmQgaXMgcHJvYmFibHkgdGhlIHByZWZlcnJlZCBhbmQgaW50dWl0aXZlIHdheSBvZiBkb2luZyB0aGlzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0geCBzdXJmYWNlLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgc3VyZmFjZS1sb2NhbCB5IGNvb3JkaW5hdGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCB3aWR0aCBvZiBkYW1hZ2UgcmVjdGFuZ2xlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IGhlaWdodCBvZiBkYW1hZ2UgcmVjdGFuZ2xlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZGFtYWdlICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMiwgW2ludCh4KSwgaW50KHkpLCBpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFJlcXVlc3QgYSBub3RpZmljYXRpb24gd2hlbiBpdCBpcyBhIGdvb2QgdGltZSB0byBzdGFydCBkcmF3aW5nIGEgbmV3XG5cdCAqXHRmcmFtZSwgYnkgY3JlYXRpbmcgYSBmcmFtZSBjYWxsYmFjay4gVGhpcyBpcyB1c2VmdWwgZm9yIHRocm90dGxpbmdcblx0ICpcdHJlZHJhd2luZyBvcGVyYXRpb25zLCBhbmQgZHJpdmluZyBhbmltYXRpb25zLlxuXHQgKlxuXHQgKlx0V2hlbiBhIGNsaWVudCBpcyBhbmltYXRpbmcgb24gYSB3bF9zdXJmYWNlLCBpdCBjYW4gdXNlIHRoZSAnZnJhbWUnXG5cdCAqXHRyZXF1ZXN0IHRvIGdldCBub3RpZmllZCB3aGVuIGl0IGlzIGEgZ29vZCB0aW1lIHRvIGRyYXcgYW5kIGNvbW1pdCB0aGVcblx0ICpcdG5leHQgZnJhbWUgb2YgYW5pbWF0aW9uLiBJZiB0aGUgY2xpZW50IGNvbW1pdHMgYW4gdXBkYXRlIGVhcmxpZXIgdGhhblxuXHQgKlx0dGhhdCwgaXQgaXMgbGlrZWx5IHRoYXQgc29tZSB1cGRhdGVzIHdpbGwgbm90IG1ha2UgaXQgdG8gdGhlIGRpc3BsYXksXG5cdCAqXHRhbmQgdGhlIGNsaWVudCBpcyB3YXN0aW5nIHJlc291cmNlcyBieSBkcmF3aW5nIHRvbyBvZnRlbi5cblx0ICpcblx0ICpcdFRoZSBmcmFtZSByZXF1ZXN0IHdpbGwgdGFrZSBlZmZlY3Qgb24gdGhlIG5leHQgd2xfc3VyZmFjZS5jb21taXQuXG5cdCAqXHRUaGUgbm90aWZpY2F0aW9uIHdpbGwgb25seSBiZSBwb3N0ZWQgZm9yIG9uZSBmcmFtZSB1bmxlc3Ncblx0ICpcdHJlcXVlc3RlZCBhZ2Fpbi4gRm9yIGEgd2xfc3VyZmFjZSwgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIHBvc3RlZCBpblxuXHQgKlx0dGhlIG9yZGVyIHRoZSBmcmFtZSByZXF1ZXN0cyB3ZXJlIGNvbW1pdHRlZC5cblx0ICpcblx0ICpcdFRoZSBzZXJ2ZXIgbXVzdCBzZW5kIHRoZSBub3RpZmljYXRpb25zIHNvIHRoYXQgYSBjbGllbnRcblx0ICpcdHdpbGwgbm90IHNlbmQgZXhjZXNzaXZlIHVwZGF0ZXMsIHdoaWxlIHN0aWxsIGFsbG93aW5nXG5cdCAqXHR0aGUgaGlnaGVzdCBwb3NzaWJsZSB1cGRhdGUgcmF0ZSBmb3IgY2xpZW50cyB0aGF0IHdhaXQgZm9yIHRoZSByZXBseVxuXHQgKlx0YmVmb3JlIGRyYXdpbmcgYWdhaW4uIFRoZSBzZXJ2ZXIgc2hvdWxkIGdpdmUgc29tZSB0aW1lIGZvciB0aGUgY2xpZW50XG5cdCAqXHR0byBkcmF3IGFuZCBjb21taXQgYWZ0ZXIgc2VuZGluZyB0aGUgZnJhbWUgY2FsbGJhY2sgZXZlbnRzIHRvIGxldCBpdFxuXHQgKlx0aGl0IHRoZSBuZXh0IG91dHB1dCByZWZyZXNoLlxuXHQgKlxuXHQgKlx0QSBzZXJ2ZXIgc2hvdWxkIGF2b2lkIHNpZ25hbGluZyB0aGUgZnJhbWUgY2FsbGJhY2tzIGlmIHRoZVxuXHQgKlx0c3VyZmFjZSBpcyBub3QgdmlzaWJsZSBpbiBhbnkgd2F5LCBlLmcuIHRoZSBzdXJmYWNlIGlzIG9mZi1zY3JlZW4sXG5cdCAqXHRvciBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IG90aGVyIG9wYXF1ZSBzdXJmYWNlcy5cblx0ICpcblx0ICpcdFRoZSBvYmplY3QgcmV0dXJuZWQgYnkgdGhpcyByZXF1ZXN0IHdpbGwgYmUgZGVzdHJveWVkIGJ5IHRoZVxuXHQgKlx0Y29tcG9zaXRvciBhZnRlciB0aGUgY2FsbGJhY2sgaXMgZmlyZWQgYW5kIGFzIHN1Y2ggdGhlIGNsaWVudCBtdXN0IG5vdFxuXHQgKlx0YXR0ZW1wdCB0byB1c2UgaXQgYWZ0ZXIgdGhhdCBwb2ludC5cblx0ICpcblx0ICpcdFRoZSBjYWxsYmFja19kYXRhIHBhc3NlZCBpbiB0aGUgY2FsbGJhY2sgaXMgdGhlIGN1cnJlbnQgdGltZSwgaW5cblx0ICpcdG1pbGxpc2Vjb25kcywgd2l0aCBhbiB1bmRlZmluZWQgYmFzZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHJldHVybiB7V2xDYWxsYmFja1Byb3h5fSBjYWxsYmFjayBvYmplY3QgZm9yIHRoZSBmcmFtZSByZXF1ZXN0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZnJhbWUgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDMsIFdsQ2FsbGJhY2tQcm94eSwgW25ld09iamVjdCgpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IHNldHMgdGhlIHJlZ2lvbiBvZiB0aGUgc3VyZmFjZSB0aGF0IGNvbnRhaW5zXG5cdCAqXHRvcGFxdWUgY29udGVudC5cblx0ICpcblx0ICpcdFRoZSBvcGFxdWUgcmVnaW9uIGlzIGFuIG9wdGltaXphdGlvbiBoaW50IGZvciB0aGUgY29tcG9zaXRvclxuXHQgKlx0dGhhdCBsZXRzIGl0IG9wdGltaXplIHRoZSByZWRyYXdpbmcgb2YgY29udGVudCBiZWhpbmQgb3BhcXVlXG5cdCAqXHRyZWdpb25zLiAgU2V0dGluZyBhbiBvcGFxdWUgcmVnaW9uIGlzIG5vdCByZXF1aXJlZCBmb3IgY29ycmVjdFxuXHQgKlx0YmVoYXZpb3VyLCBidXQgbWFya2luZyB0cmFuc3BhcmVudCBjb250ZW50IGFzIG9wYXF1ZSB3aWxsIHJlc3VsdFxuXHQgKlx0aW4gcmVwYWludCBhcnRpZmFjdHMuXG5cdCAqXG5cdCAqXHRUaGUgb3BhcXVlIHJlZ2lvbiBpcyBzcGVjaWZpZWQgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcy5cblx0ICpcblx0ICpcdFRoZSBjb21wb3NpdG9yIGlnbm9yZXMgdGhlIHBhcnRzIG9mIHRoZSBvcGFxdWUgcmVnaW9uIHRoYXQgZmFsbFxuXHQgKlx0b3V0c2lkZSBvZiB0aGUgc3VyZmFjZS5cblx0ICpcblx0ICpcdE9wYXF1ZSByZWdpb24gaXMgZG91YmxlLWJ1ZmZlcmVkIHN0YXRlLCBzZWUgd2xfc3VyZmFjZS5jb21taXQuXG5cdCAqXG5cdCAqXHR3bF9zdXJmYWNlLnNldF9vcGFxdWVfcmVnaW9uIGNoYW5nZXMgdGhlIHBlbmRpbmcgb3BhcXVlIHJlZ2lvbi5cblx0ICpcdHdsX3N1cmZhY2UuY29tbWl0IGNvcGllcyB0aGUgcGVuZGluZyByZWdpb24gdG8gdGhlIGN1cnJlbnQgcmVnaW9uLlxuXHQgKlx0T3RoZXJ3aXNlLCB0aGUgcGVuZGluZyBhbmQgY3VycmVudCByZWdpb25zIGFyZSBuZXZlciBjaGFuZ2VkLlxuXHQgKlxuXHQgKlx0VGhlIGluaXRpYWwgdmFsdWUgZm9yIGFuIG9wYXF1ZSByZWdpb24gaXMgZW1wdHkuIFNldHRpbmcgdGhlIHBlbmRpbmdcblx0ICpcdG9wYXF1ZSByZWdpb24gaGFzIGNvcHkgc2VtYW50aWNzLCBhbmQgdGhlIHdsX3JlZ2lvbiBvYmplY3QgY2FuIGJlXG5cdCAqXHRkZXN0cm95ZWQgaW1tZWRpYXRlbHkuIEEgTlVMTCB3bF9yZWdpb24gY2F1c2VzIHRoZSBwZW5kaW5nIG9wYXF1ZVxuXHQgKlx0cmVnaW9uIHRvIGJlIHNldCB0byBlbXB0eS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHs/Kn0gcmVnaW9uIG9wYXF1ZSByZWdpb24gb2YgdGhlIHN1cmZhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRPcGFxdWVSZWdpb24gKHJlZ2lvbikge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDQsIFtvYmplY3RPcHRpb25hbChyZWdpb24pXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IHNldHMgdGhlIHJlZ2lvbiBvZiB0aGUgc3VyZmFjZSB0aGF0IGNhbiByZWNlaXZlXG5cdCAqXHRwb2ludGVyIGFuZCB0b3VjaCBldmVudHMuXG5cdCAqXG5cdCAqXHRJbnB1dCBldmVudHMgaGFwcGVuaW5nIG91dHNpZGUgb2YgdGhpcyByZWdpb24gd2lsbCB0cnkgdGhlIG5leHRcblx0ICpcdHN1cmZhY2UgaW4gdGhlIHNlcnZlciBzdXJmYWNlIHN0YWNrLiBUaGUgY29tcG9zaXRvciBpZ25vcmVzIHRoZVxuXHQgKlx0cGFydHMgb2YgdGhlIGlucHV0IHJlZ2lvbiB0aGF0IGZhbGwgb3V0c2lkZSBvZiB0aGUgc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSBpbnB1dCByZWdpb24gaXMgc3BlY2lmaWVkIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMuXG5cdCAqXG5cdCAqXHRJbnB1dCByZWdpb24gaXMgZG91YmxlLWJ1ZmZlcmVkIHN0YXRlLCBzZWUgd2xfc3VyZmFjZS5jb21taXQuXG5cdCAqXG5cdCAqXHR3bF9zdXJmYWNlLnNldF9pbnB1dF9yZWdpb24gY2hhbmdlcyB0aGUgcGVuZGluZyBpbnB1dCByZWdpb24uXG5cdCAqXHR3bF9zdXJmYWNlLmNvbW1pdCBjb3BpZXMgdGhlIHBlbmRpbmcgcmVnaW9uIHRvIHRoZSBjdXJyZW50IHJlZ2lvbi5cblx0ICpcdE90aGVyd2lzZSB0aGUgcGVuZGluZyBhbmQgY3VycmVudCByZWdpb25zIGFyZSBuZXZlciBjaGFuZ2VkLFxuXHQgKlx0ZXhjZXB0IGN1cnNvciBhbmQgaWNvbiBzdXJmYWNlcyBhcmUgc3BlY2lhbCBjYXNlcywgc2VlXG5cdCAqXHR3bF9wb2ludGVyLnNldF9jdXJzb3IgYW5kIHdsX2RhdGFfZGV2aWNlLnN0YXJ0X2RyYWcuXG5cdCAqXG5cdCAqXHRUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgYW4gaW5wdXQgcmVnaW9uIGlzIGluZmluaXRlLiBUaGF0IG1lYW5zIHRoZVxuXHQgKlx0d2hvbGUgc3VyZmFjZSB3aWxsIGFjY2VwdCBpbnB1dC4gU2V0dGluZyB0aGUgcGVuZGluZyBpbnB1dCByZWdpb25cblx0ICpcdGhhcyBjb3B5IHNlbWFudGljcywgYW5kIHRoZSB3bF9yZWdpb24gb2JqZWN0IGNhbiBiZSBkZXN0cm95ZWRcblx0ICpcdGltbWVkaWF0ZWx5LiBBIE5VTEwgd2xfcmVnaW9uIGNhdXNlcyB0aGUgaW5wdXQgcmVnaW9uIHRvIGJlIHNldFxuXHQgKlx0dG8gaW5maW5pdGUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Pyp9IHJlZ2lvbiBpbnB1dCByZWdpb24gb2YgdGhlIHN1cmZhY2UgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRJbnB1dFJlZ2lvbiAocmVnaW9uKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNSwgW29iamVjdE9wdGlvbmFsKHJlZ2lvbildKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTdXJmYWNlIHN0YXRlIChpbnB1dCwgb3BhcXVlLCBhbmQgZGFtYWdlIHJlZ2lvbnMsIGF0dGFjaGVkIGJ1ZmZlcnMsXG5cdCAqXHRldGMuKSBpcyBkb3VibGUtYnVmZmVyZWQuIFByb3RvY29sIHJlcXVlc3RzIG1vZGlmeSB0aGUgcGVuZGluZyBzdGF0ZSxcblx0ICpcdGFzIG9wcG9zZWQgdG8gdGhlIGN1cnJlbnQgc3RhdGUgaW4gdXNlIGJ5IHRoZSBjb21wb3NpdG9yLiBBIGNvbW1pdFxuXHQgKlx0cmVxdWVzdCBhdG9taWNhbGx5IGFwcGxpZXMgYWxsIHBlbmRpbmcgc3RhdGUsIHJlcGxhY2luZyB0aGUgY3VycmVudFxuXHQgKlx0c3RhdGUuIEFmdGVyIGNvbW1pdCwgdGhlIG5ldyBwZW5kaW5nIHN0YXRlIGlzIGFzIGRvY3VtZW50ZWQgZm9yIGVhY2hcblx0ICpcdHJlbGF0ZWQgcmVxdWVzdC5cblx0ICpcblx0ICpcdE9uIGNvbW1pdCwgYSBwZW5kaW5nIHdsX2J1ZmZlciBpcyBhcHBsaWVkIGZpcnN0LCBhbmQgYWxsIG90aGVyIHN0YXRlXG5cdCAqXHRzZWNvbmQuIFRoaXMgbWVhbnMgdGhhdCBhbGwgY29vcmRpbmF0ZXMgaW4gZG91YmxlLWJ1ZmZlcmVkIHN0YXRlIGFyZVxuXHQgKlx0cmVsYXRpdmUgdG8gdGhlIG5ldyB3bF9idWZmZXIgY29taW5nIGludG8gdXNlLCBleGNlcHQgZm9yXG5cdCAqXHR3bF9zdXJmYWNlLmF0dGFjaCBpdHNlbGYuIElmIHRoZXJlIGlzIG5vIHBlbmRpbmcgd2xfYnVmZmVyLCB0aGVcblx0ICpcdGNvb3JkaW5hdGVzIGFyZSByZWxhdGl2ZSB0byB0aGUgY3VycmVudCBzdXJmYWNlIGNvbnRlbnRzLlxuXHQgKlxuXHQgKlx0QWxsIHJlcXVlc3RzIHRoYXQgbmVlZCBhIGNvbW1pdCB0byBiZWNvbWUgZWZmZWN0aXZlIGFyZSBkb2N1bWVudGVkXG5cdCAqXHR0byBhZmZlY3QgZG91YmxlLWJ1ZmZlcmVkIHN0YXRlLlxuXHQgKlxuXHQgKlx0T3RoZXIgaW50ZXJmYWNlcyBtYXkgYWRkIGZ1cnRoZXIgZG91YmxlLWJ1ZmZlcmVkIHN1cmZhY2Ugc3RhdGUuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgY29tbWl0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y29tbWl0IChzZXJpYWwpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA2LCBbdWludChzZXJpYWwpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IHNldHMgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gb24gaG93IHRoZSBjb21wb3NpdG9yXG5cdCAqXHRpbnRlcnByZXRzIHRoZSBjb250ZW50cyBvZiB0aGUgYnVmZmVyIGF0dGFjaGVkIHRvIHRoZSBzdXJmYWNlLiBUaGVcblx0ICpcdGFjY2VwdGVkIHZhbHVlcyBmb3IgdGhlIHRyYW5zZm9ybSBwYXJhbWV0ZXIgYXJlIHRoZSB2YWx1ZXMgZm9yXG5cdCAqXHR3bF9vdXRwdXQudHJhbnNmb3JtLlxuXHQgKlxuXHQgKlx0QnVmZmVyIHRyYW5zZm9ybSBpcyBkb3VibGUtYnVmZmVyZWQgc3RhdGUsIHNlZSB3bF9zdXJmYWNlLmNvbW1pdC5cblx0ICpcblx0ICpcdEEgbmV3bHkgY3JlYXRlZCBzdXJmYWNlIGhhcyBpdHMgYnVmZmVyIHRyYW5zZm9ybWF0aW9uIHNldCB0byBub3JtYWwuXG5cdCAqXG5cdCAqXHR3bF9zdXJmYWNlLnNldF9idWZmZXJfdHJhbnNmb3JtIGNoYW5nZXMgdGhlIHBlbmRpbmcgYnVmZmVyXG5cdCAqXHR0cmFuc2Zvcm1hdGlvbi4gd2xfc3VyZmFjZS5jb21taXQgY29waWVzIHRoZSBwZW5kaW5nIGJ1ZmZlclxuXHQgKlx0dHJhbnNmb3JtYXRpb24gdG8gdGhlIGN1cnJlbnQgb25lLiBPdGhlcndpc2UsIHRoZSBwZW5kaW5nIGFuZCBjdXJyZW50XG5cdCAqXHR2YWx1ZXMgYXJlIG5ldmVyIGNoYW5nZWQuXG5cdCAqXG5cdCAqXHRUaGUgcHVycG9zZSBvZiB0aGlzIHJlcXVlc3QgaXMgdG8gYWxsb3cgY2xpZW50cyB0byByZW5kZXIgY29udGVudFxuXHQgKlx0YWNjb3JkaW5nIHRvIHRoZSBvdXRwdXQgdHJhbnNmb3JtLCB0aHVzIHBlcm1pdHRpbmcgdGhlIGNvbXBvc2l0b3IgdG9cblx0ICpcdHVzZSBjZXJ0YWluIG9wdGltaXphdGlvbnMgZXZlbiBpZiB0aGUgZGlzcGxheSBpcyByb3RhdGVkLiBVc2luZ1xuXHQgKlx0aGFyZHdhcmUgb3ZlcmxheXMgYW5kIHNjYW5uaW5nIG91dCBhIGNsaWVudCBidWZmZXIgZm9yIGZ1bGxzY3JlZW5cblx0ICpcdHN1cmZhY2VzIGFyZSBleGFtcGxlcyBvZiBzdWNoIG9wdGltaXphdGlvbnMuIFRob3NlIG9wdGltaXphdGlvbnMgYXJlXG5cdCAqXHRoaWdobHkgZGVwZW5kZW50IG9uIHRoZSBjb21wb3NpdG9yIGltcGxlbWVudGF0aW9uLCBzbyB0aGUgdXNlIG9mIHRoaXNcblx0ICpcdHJlcXVlc3Qgc2hvdWxkIGJlIGNvbnNpZGVyZWQgb24gYSBjYXNlLWJ5LWNhc2UgYmFzaXMuXG5cdCAqXG5cdCAqXHROb3RlIHRoYXQgaWYgdGhlIHRyYW5zZm9ybSB2YWx1ZSBpbmNsdWRlcyA5MCBvciAyNzAgZGVncmVlIHJvdGF0aW9uLFxuXHQgKlx0dGhlIHdpZHRoIG9mIHRoZSBidWZmZXIgd2lsbCBiZWNvbWUgdGhlIHN1cmZhY2UgaGVpZ2h0IGFuZCB0aGUgaGVpZ2h0XG5cdCAqXHRvZiB0aGUgYnVmZmVyIHdpbGwgYmVjb21lIHRoZSBzdXJmYWNlIHdpZHRoLlxuXHQgKlxuXHQgKlx0SWYgdHJhbnNmb3JtIGlzIG5vdCBvbmUgb2YgdGhlIHZhbHVlcyBmcm9tIHRoZVxuXHQgKlx0d2xfb3V0cHV0LnRyYW5zZm9ybSBlbnVtIHRoZSBpbnZhbGlkX3RyYW5zZm9ybSBwcm90b2NvbCBlcnJvclxuXHQgKlx0aXMgcmFpc2VkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNmb3JtIHRyYW5zZm9ybSBmb3IgaW50ZXJwcmV0aW5nIGJ1ZmZlciBjb250ZW50cyBcblx0ICpcblx0ICogQHNpbmNlIDJcblx0ICpcblx0ICovXG5cdHNldEJ1ZmZlclRyYW5zZm9ybSAodHJhbnNmb3JtKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNywgW2ludCh0cmFuc2Zvcm0pXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IHNldHMgYW4gb3B0aW9uYWwgc2NhbGluZyBmYWN0b3Igb24gaG93IHRoZSBjb21wb3NpdG9yXG5cdCAqXHRpbnRlcnByZXRzIHRoZSBjb250ZW50cyBvZiB0aGUgYnVmZmVyIGF0dGFjaGVkIHRvIHRoZSB3aW5kb3cuXG5cdCAqXG5cdCAqXHRCdWZmZXIgc2NhbGUgaXMgZG91YmxlLWJ1ZmZlcmVkIHN0YXRlLCBzZWUgd2xfc3VyZmFjZS5jb21taXQuXG5cdCAqXG5cdCAqXHRBIG5ld2x5IGNyZWF0ZWQgc3VyZmFjZSBoYXMgaXRzIGJ1ZmZlciBzY2FsZSBzZXQgdG8gMS5cblx0ICpcblx0ICpcdHdsX3N1cmZhY2Uuc2V0X2J1ZmZlcl9zY2FsZSBjaGFuZ2VzIHRoZSBwZW5kaW5nIGJ1ZmZlciBzY2FsZS5cblx0ICpcdHdsX3N1cmZhY2UuY29tbWl0IGNvcGllcyB0aGUgcGVuZGluZyBidWZmZXIgc2NhbGUgdG8gdGhlIGN1cnJlbnQgb25lLlxuXHQgKlx0T3RoZXJ3aXNlLCB0aGUgcGVuZGluZyBhbmQgY3VycmVudCB2YWx1ZXMgYXJlIG5ldmVyIGNoYW5nZWQuXG5cdCAqXG5cdCAqXHRUaGUgcHVycG9zZSBvZiB0aGlzIHJlcXVlc3QgaXMgdG8gYWxsb3cgY2xpZW50cyB0byBzdXBwbHkgaGlnaGVyXG5cdCAqXHRyZXNvbHV0aW9uIGJ1ZmZlciBkYXRhIGZvciB1c2Ugb24gaGlnaCByZXNvbHV0aW9uIG91dHB1dHMuIEl0IGlzXG5cdCAqXHRpbnRlbmRlZCB0aGF0IHlvdSBwaWNrIHRoZSBzYW1lIGJ1ZmZlciBzY2FsZSBhcyB0aGUgc2NhbGUgb2YgdGhlXG5cdCAqXHRvdXRwdXQgdGhhdCB0aGUgc3VyZmFjZSBpcyBkaXNwbGF5ZWQgb24uIFRoaXMgbWVhbnMgdGhlIGNvbXBvc2l0b3Jcblx0ICpcdGNhbiBhdm9pZCBzY2FsaW5nIHdoZW4gcmVuZGVyaW5nIHRoZSBzdXJmYWNlIG9uIHRoYXQgb3V0cHV0LlxuXHQgKlxuXHQgKlx0Tm90ZSB0aGF0IGlmIHRoZSBzY2FsZSBpcyBsYXJnZXIgdGhhbiAxLCB0aGVuIHlvdSBoYXZlIHRvIGF0dGFjaFxuXHQgKlx0YSBidWZmZXIgdGhhdCBpcyBsYXJnZXIgKGJ5IGEgZmFjdG9yIG9mIHNjYWxlIGluIGVhY2ggZGltZW5zaW9uKVxuXHQgKlx0dGhhbiB0aGUgZGVzaXJlZCBzdXJmYWNlIHNpemUuXG5cdCAqXG5cdCAqXHRJZiBzY2FsZSBpcyBub3QgcG9zaXRpdmUgdGhlIGludmFsaWRfc2NhbGUgcHJvdG9jb2wgZXJyb3IgaXNcblx0ICpcdHJhaXNlZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlIHBvc2l0aXZlIHNjYWxlIGZvciBpbnRlcnByZXRpbmcgYnVmZmVyIGNvbnRlbnRzIFxuXHQgKlxuXHQgKiBAc2luY2UgM1xuXHQgKlxuXHQgKi9cblx0c2V0QnVmZmVyU2NhbGUgKHNjYWxlKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgOCwgW2ludChzY2FsZSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgaXMgdXNlZCB0byBkZXNjcmliZSB0aGUgcmVnaW9ucyB3aGVyZSB0aGUgcGVuZGluZ1xuXHQgKlx0YnVmZmVyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IHN1cmZhY2UgY29udGVudHMsIGFuZCB3aGVyZVxuXHQgKlx0dGhlIHN1cmZhY2UgdGhlcmVmb3JlIG5lZWRzIHRvIGJlIHJlcGFpbnRlZC4gVGhlIGNvbXBvc2l0b3Jcblx0ICpcdGlnbm9yZXMgdGhlIHBhcnRzIG9mIHRoZSBkYW1hZ2UgdGhhdCBmYWxsIG91dHNpZGUgb2YgdGhlIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHREYW1hZ2UgaXMgZG91YmxlLWJ1ZmZlcmVkIHN0YXRlLCBzZWUgd2xfc3VyZmFjZS5jb21taXQuXG5cdCAqXG5cdCAqXHRUaGUgZGFtYWdlIHJlY3RhbmdsZSBpcyBzcGVjaWZpZWQgaW4gYnVmZmVyIGNvb3JkaW5hdGVzLFxuXHQgKlx0d2hlcmUgeCBhbmQgeSBzcGVjaWZ5IHRoZSB1cHBlciBsZWZ0IGNvcm5lciBvZiB0aGUgZGFtYWdlIHJlY3RhbmdsZS5cblx0ICpcblx0ICpcdFRoZSBpbml0aWFsIHZhbHVlIGZvciBwZW5kaW5nIGRhbWFnZSBpcyBlbXB0eTogbm8gZGFtYWdlLlxuXHQgKlx0d2xfc3VyZmFjZS5kYW1hZ2VfYnVmZmVyIGFkZHMgcGVuZGluZyBkYW1hZ2U6IHRoZSBuZXcgcGVuZGluZ1xuXHQgKlx0ZGFtYWdlIGlzIHRoZSB1bmlvbiBvZiBvbGQgcGVuZGluZyBkYW1hZ2UgYW5kIHRoZSBnaXZlbiByZWN0YW5nbGUuXG5cdCAqXG5cdCAqXHR3bF9zdXJmYWNlLmNvbW1pdCBhc3NpZ25zIHBlbmRpbmcgZGFtYWdlIGFzIHRoZSBjdXJyZW50IGRhbWFnZSxcblx0ICpcdGFuZCBjbGVhcnMgcGVuZGluZyBkYW1hZ2UuIFRoZSBzZXJ2ZXIgd2lsbCBjbGVhciB0aGUgY3VycmVudFxuXHQgKlx0ZGFtYWdlIGFzIGl0IHJlcGFpbnRzIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGRpZmZlcnMgZnJvbSB3bF9zdXJmYWNlLmRhbWFnZSBpbiBvbmx5IG9uZSB3YXkgLSBpdFxuXHQgKlx0dGFrZXMgZGFtYWdlIGluIGJ1ZmZlciBjb29yZGluYXRlcyBpbnN0ZWFkIG9mIHN1cmZhY2UtbG9jYWxcblx0ICpcdGNvb3JkaW5hdGVzLiBXaGlsZSB0aGlzIGdlbmVyYWxseSBpcyBtb3JlIGludHVpdGl2ZSB0aGFuIHN1cmZhY2Vcblx0ICpcdGNvb3JkaW5hdGVzLCBpdCBpcyBlc3BlY2lhbGx5IGRlc2lyYWJsZSB3aGVuIHVzaW5nIHdwX3ZpZXdwb3J0XG5cdCAqXHRvciB3aGVuIGEgZHJhd2luZyBsaWJyYXJ5IChsaWtlIEVHTCkgaXMgdW5hd2FyZSBvZiBidWZmZXIgc2NhbGVcblx0ICpcdGFuZCBidWZmZXIgdHJhbnNmb3JtLlxuXHQgKlxuXHQgKlx0Tm90ZTogQmVjYXVzZSBidWZmZXIgdHJhbnNmb3JtYXRpb24gY2hhbmdlcyBhbmQgZGFtYWdlIHJlcXVlc3RzIG1heVxuXHQgKlx0YmUgaW50ZXJsZWF2ZWQgaW4gdGhlIHByb3RvY29sIHN0cmVhbSwgaXQgaXMgaW1wb3NzaWJsZSB0byBkZXRlcm1pbmVcblx0ICpcdHRoZSBhY3R1YWwgbWFwcGluZyBiZXR3ZWVuIHN1cmZhY2UgYW5kIGJ1ZmZlciBkYW1hZ2UgdW50aWxcblx0ICpcdHdsX3N1cmZhY2UuY29tbWl0IHRpbWUuIFRoZXJlZm9yZSwgY29tcG9zaXRvcnMgd2lzaGluZyB0byB0YWtlIGJvdGhcblx0ICpcdGtpbmRzIG9mIGRhbWFnZSBpbnRvIGFjY291bnQgd2lsbCBoYXZlIHRvIGFjY3VtdWxhdGUgZGFtYWdlIGZyb20gdGhlXG5cdCAqXHR0d28gcmVxdWVzdHMgc2VwYXJhdGVseSBhbmQgb25seSB0cmFuc2Zvcm0gZnJvbSBvbmUgdG8gdGhlIG90aGVyXG5cdCAqXHRhZnRlciByZWNlaXZpbmcgdGhlIHdsX3N1cmZhY2UuY29tbWl0LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0geCBidWZmZXItbG9jYWwgeCBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBidWZmZXItbG9jYWwgeSBjb29yZGluYXRlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggd2lkdGggb2YgZGFtYWdlIHJlY3RhbmdsZSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBoZWlnaHQgb2YgZGFtYWdlIHJlY3RhbmdsZSBcblx0ICpcblx0ICogQHNpbmNlIDRcblx0ICpcblx0ICovXG5cdGRhbWFnZUJ1ZmZlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDksIFtpbnQoeCksIGludCh5KSwgaW50KHdpZHRoKSwgaW50KGhlaWdodCldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1dsU3VyZmFjZUV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxuXHRhc3luYyBbMF0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmVudGVyKG8obWVzc2FnZSwgZmFsc2UsIHRoaXMuX2Nvbm5lY3Rpb24pKVxuXHR9XG5cblx0YXN5bmMgWzFdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5sZWF2ZShvKG1lc3NhZ2UsIGZhbHNlLCB0aGlzLl9jb25uZWN0aW9uKSlcblx0fVxuXG59XG5XbFN1cmZhY2VQcm94eS5wcm90b2NvbE5hbWUgPSAnd2xfc3VyZmFjZSdcblxuV2xTdXJmYWNlUHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiBidWZmZXIgc2NhbGUgdmFsdWUgaXMgaW52YWxpZFxuICAgKi9cbiAgaW52YWxpZFNjYWxlOiAwLFxuICAvKipcbiAgICogYnVmZmVyIHRyYW5zZm9ybSB2YWx1ZSBpcyBpbnZhbGlkXG4gICAqL1xuICBpbnZhbGlkVHJhbnNmb3JtOiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsU3VyZmFjZVByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xUb3VjaEV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRBIG5ldyB0b3VjaCBwb2ludCBoYXMgYXBwZWFyZWQgb24gdGhlIHN1cmZhY2UuIFRoaXMgdG91Y2ggcG9pbnQgaXNcblx0ICpcdGFzc2lnbmVkIGEgdW5pcXVlIElELiBGdXR1cmUgZXZlbnRzIGZyb20gdGhpcyB0b3VjaCBwb2ludCByZWZlcmVuY2Vcblx0ICpcdHRoaXMgSUQuIFRoZSBJRCBjZWFzZXMgdG8gYmUgdmFsaWQgYWZ0ZXIgYSB0b3VjaCB1cCBldmVudCBhbmQgbWF5IGJlXG5cdCAqXHRyZXVzZWQgaW4gdGhlIGZ1dHVyZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgbnVtYmVyIG9mIHRoZSB0b3VjaCBkb3duIGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZCBncmFudWxhcml0eSBcblx0ICogQHBhcmFtIHsqfSBzdXJmYWNlIHN1cmZhY2UgdG91Y2hlZCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIHRoZSB1bmlxdWUgSUQgb2YgdGhpcyB0b3VjaCBwb2ludCBcblx0ICogQHBhcmFtIHtGaXhlZH0geCBzdXJmYWNlLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtGaXhlZH0geSBzdXJmYWNlLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRvd24oc2VyaWFsLCB0aW1lLCBzdXJmYWNlLCBpZCwgeCwgeSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSB0b3VjaCBwb2ludCBoYXMgZGlzYXBwZWFyZWQuIE5vIGZ1cnRoZXIgZXZlbnRzIHdpbGwgYmUgc2VudCBmb3Jcblx0ICpcdHRoaXMgdG91Y2ggcG9pbnQgYW5kIHRoZSB0b3VjaCBwb2ludCdzIElEIGlzIHJlbGVhc2VkIGFuZCBtYXkgYmVcblx0ICpcdHJldXNlZCBpbiBhIGZ1dHVyZSB0b3VjaCBkb3duIGV2ZW50LlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2VyaWFsIHNlcmlhbCBudW1iZXIgb2YgdGhlIHRvdWNoIHVwIGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZCBncmFudWxhcml0eSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIHRoZSB1bmlxdWUgSUQgb2YgdGhpcyB0b3VjaCBwb2ludCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHVwKHNlcmlhbCwgdGltZSwgaWQpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRBIHRvdWNoIHBvaW50IGhhcyBjaGFuZ2VkIGNvb3JkaW5hdGVzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSB0aW1lc3RhbXAgd2l0aCBtaWxsaXNlY29uZCBncmFudWxhcml0eSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIHRoZSB1bmlxdWUgSUQgb2YgdGhpcyB0b3VjaCBwb2ludCBcblx0ICogQHBhcmFtIHtGaXhlZH0geCBzdXJmYWNlLWxvY2FsIHggY29vcmRpbmF0ZSBcblx0ICogQHBhcmFtIHtGaXhlZH0geSBzdXJmYWNlLWxvY2FsIHkgY29vcmRpbmF0ZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdG1vdGlvbih0aW1lLCBpZCwgeCwgeSkge31cblxuXHQvKipcblx0ICpcblx0ICpcdEluZGljYXRlcyB0aGUgZW5kIG9mIGEgc2V0IG9mIGV2ZW50cyB0aGF0IGxvZ2ljYWxseSBiZWxvbmcgdG9nZXRoZXIuXG5cdCAqXHRBIGNsaWVudCBpcyBleHBlY3RlZCB0byBhY2N1bXVsYXRlIHRoZSBkYXRhIGluIGFsbCBldmVudHMgd2l0aGluIHRoZVxuXHQgKlx0ZnJhbWUgYmVmb3JlIHByb2NlZWRpbmcuXG5cdCAqXG5cdCAqXHRBIHdsX3RvdWNoLmZyYW1lIHRlcm1pbmF0ZXMgYXQgbGVhc3Qgb25lIGV2ZW50IGJ1dCBvdGhlcndpc2Ugbm9cblx0ICpcdGd1YXJhbnRlZSBpcyBwcm92aWRlZCBhYm91dCB0aGUgc2V0IG9mIGV2ZW50cyB3aXRoaW4gYSBmcmFtZS4gQSBjbGllbnRcblx0ICpcdG11c3QgYXNzdW1lIHRoYXQgYW55IHN0YXRlIG5vdCB1cGRhdGVkIGluIGEgZnJhbWUgaXMgdW5jaGFuZ2VkIGZyb20gdGhlXG5cdCAqXHRwcmV2aW91c2x5IGtub3duIHN0YXRlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0ZnJhbWUoKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2VudCBpZiB0aGUgY29tcG9zaXRvciBkZWNpZGVzIHRoZSB0b3VjaCBzdHJlYW0gaXMgYSBnbG9iYWxcblx0ICpcdGdlc3R1cmUuIE5vIGZ1cnRoZXIgZXZlbnRzIGFyZSBzZW50IHRvIHRoZSBjbGllbnRzIGZyb20gdGhhdFxuXHQgKlx0cGFydGljdWxhciBnZXN0dXJlLiBUb3VjaCBjYW5jZWxsYXRpb24gYXBwbGllcyB0byBhbGwgdG91Y2ggcG9pbnRzXG5cdCAqXHRjdXJyZW50bHkgYWN0aXZlIG9uIHRoaXMgY2xpZW50J3Mgc3VyZmFjZS4gVGhlIGNsaWVudCBpc1xuXHQgKlx0cmVzcG9uc2libGUgZm9yIGZpbmFsaXppbmcgdGhlIHRvdWNoIHBvaW50cywgZnV0dXJlIHRvdWNoIHBvaW50cyBvblxuXHQgKlx0dGhpcyBzdXJmYWNlIG1heSByZXVzZSB0aGUgdG91Y2ggcG9pbnQgSUQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjYW5jZWwoKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2VudCB3aGVuIGEgdG91Y2hwb2ludCBoYXMgY2hhbmdlZCBpdHMgc2hhcGUuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGRvZXMgbm90IG9jY3VyIG9uIGl0cyBvd24uIEl0IGlzIHNlbnQgYmVmb3JlIGFcblx0ICpcdHdsX3RvdWNoLmZyYW1lIGV2ZW50IGFuZCBjYXJyaWVzIHRoZSBuZXcgc2hhcGUgaW5mb3JtYXRpb24gZm9yXG5cdCAqXHRhbnkgcHJldmlvdXNseSByZXBvcnRlZCwgb3IgbmV3IHRvdWNoIHBvaW50cyBvZiB0aGF0IGZyYW1lLlxuXHQgKlxuXHQgKlx0T3RoZXIgZXZlbnRzIGRlc2NyaWJpbmcgdGhlIHRvdWNoIHBvaW50IHN1Y2ggYXMgd2xfdG91Y2guZG93bixcblx0ICpcdHdsX3RvdWNoLm1vdGlvbiBvciB3bF90b3VjaC5vcmllbnRhdGlvbiBtYXkgYmUgc2VudCB3aXRoaW4gdGhlXG5cdCAqXHRzYW1lIHdsX3RvdWNoLmZyYW1lLiBBIGNsaWVudCBzaG91bGQgdHJlYXQgdGhlc2UgZXZlbnRzIGFzIGEgc2luZ2xlXG5cdCAqXHRsb2dpY2FsIHRvdWNoIHBvaW50IHVwZGF0ZS4gVGhlIG9yZGVyIG9mIHdsX3RvdWNoLnNoYXBlLFxuXHQgKlx0d2xfdG91Y2gub3JpZW50YXRpb24gYW5kIHdsX3RvdWNoLm1vdGlvbiBpcyBub3QgZ3VhcmFudGVlZC5cblx0ICpcdEEgd2xfdG91Y2guZG93biBldmVudCBpcyBndWFyYW50ZWVkIHRvIG9jY3VyIGJlZm9yZSB0aGUgZmlyc3Rcblx0ICpcdHdsX3RvdWNoLnNoYXBlIGV2ZW50IGZvciB0aGlzIHRvdWNoIElEIGJ1dCBib3RoIGV2ZW50cyBtYXkgb2NjdXIgd2l0aGluXG5cdCAqXHR0aGUgc2FtZSB3bF90b3VjaC5mcmFtZS5cblx0ICpcblx0ICpcdEEgdG91Y2hwb2ludCBzaGFwZSBpcyBhcHByb3hpbWF0ZWQgYnkgYW4gZWxsaXBzZSB0aHJvdWdoIHRoZSBtYWpvciBhbmRcblx0ICpcdG1pbm9yIGF4aXMgbGVuZ3RoLiBUaGUgbWFqb3IgYXhpcyBsZW5ndGggZGVzY3JpYmVzIHRoZSBsb25nZXIgZGlhbWV0ZXJcblx0ICpcdG9mIHRoZSBlbGxpcHNlLCB3aGlsZSB0aGUgbWlub3IgYXhpcyBsZW5ndGggZGVzY3JpYmVzIHRoZSBzaG9ydGVyXG5cdCAqXHRkaWFtZXRlci4gTWFqb3IgYW5kIG1pbm9yIGFyZSBvcnRob2dvbmFsIGFuZCBib3RoIGFyZSBzcGVjaWZpZWQgaW5cblx0ICpcdHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMuIFRoZSBjZW50ZXIgb2YgdGhlIGVsbGlwc2UgaXMgYWx3YXlzIGF0IHRoZVxuXHQgKlx0dG91Y2hwb2ludCBsb2NhdGlvbiBhcyByZXBvcnRlZCBieSB3bF90b3VjaC5kb3duIG9yIHdsX3RvdWNoLm1vdmUuXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGlzIG9ubHkgc2VudCBieSB0aGUgY29tcG9zaXRvciBpZiB0aGUgdG91Y2ggZGV2aWNlIHN1cHBvcnRzXG5cdCAqXHRzaGFwZSByZXBvcnRzLiBUaGUgY2xpZW50IGhhcyB0byBtYWtlIHJlYXNvbmFibGUgYXNzdW1wdGlvbnMgYWJvdXQgdGhlXG5cdCAqXHRzaGFwZSBpZiBpdCBkaWQgbm90IHJlY2VpdmUgdGhpcyBldmVudC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIHRoZSB1bmlxdWUgSUQgb2YgdGhpcyB0b3VjaCBwb2ludCBcblx0ICogQHBhcmFtIHtGaXhlZH0gbWFqb3IgbGVuZ3RoIG9mIHRoZSBtYWpvciBheGlzIGluIHN1cmZhY2UtbG9jYWwgY29vcmRpbmF0ZXMgXG5cdCAqIEBwYXJhbSB7Rml4ZWR9IG1pbm9yIGxlbmd0aCBvZiB0aGUgbWlub3IgYXhpcyBpbiBzdXJmYWNlLWxvY2FsIGNvb3JkaW5hdGVzIFxuXHQgKlxuXHQgKiBAc2luY2UgNlxuXHQgKlxuXHQgKi9cblx0c2hhcGUoaWQsIG1ham9yLCBtaW5vcikge31cblxuXHQvKipcblx0ICpcblx0ICpcdFNlbnQgd2hlbiBhIHRvdWNocG9pbnQgaGFzIGNoYW5nZWQgaXRzIG9yaWVudGF0aW9uLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBkb2VzIG5vdCBvY2N1ciBvbiBpdHMgb3duLiBJdCBpcyBzZW50IGJlZm9yZSBhXG5cdCAqXHR3bF90b3VjaC5mcmFtZSBldmVudCBhbmQgY2FycmllcyB0aGUgbmV3IHNoYXBlIGluZm9ybWF0aW9uIGZvclxuXHQgKlx0YW55IHByZXZpb3VzbHkgcmVwb3J0ZWQsIG9yIG5ldyB0b3VjaCBwb2ludHMgb2YgdGhhdCBmcmFtZS5cblx0ICpcblx0ICpcdE90aGVyIGV2ZW50cyBkZXNjcmliaW5nIHRoZSB0b3VjaCBwb2ludCBzdWNoIGFzIHdsX3RvdWNoLmRvd24sXG5cdCAqXHR3bF90b3VjaC5tb3Rpb24gb3Igd2xfdG91Y2guc2hhcGUgbWF5IGJlIHNlbnQgd2l0aGluIHRoZVxuXHQgKlx0c2FtZSB3bF90b3VjaC5mcmFtZS4gQSBjbGllbnQgc2hvdWxkIHRyZWF0IHRoZXNlIGV2ZW50cyBhcyBhIHNpbmdsZVxuXHQgKlx0bG9naWNhbCB0b3VjaCBwb2ludCB1cGRhdGUuIFRoZSBvcmRlciBvZiB3bF90b3VjaC5zaGFwZSxcblx0ICpcdHdsX3RvdWNoLm9yaWVudGF0aW9uIGFuZCB3bF90b3VjaC5tb3Rpb24gaXMgbm90IGd1YXJhbnRlZWQuXG5cdCAqXHRBIHdsX3RvdWNoLmRvd24gZXZlbnQgaXMgZ3VhcmFudGVlZCB0byBvY2N1ciBiZWZvcmUgdGhlIGZpcnN0XG5cdCAqXHR3bF90b3VjaC5vcmllbnRhdGlvbiBldmVudCBmb3IgdGhpcyB0b3VjaCBJRCBidXQgYm90aCBldmVudHMgbWF5IG9jY3VyXG5cdCAqXHR3aXRoaW4gdGhlIHNhbWUgd2xfdG91Y2guZnJhbWUuXG5cdCAqXG5cdCAqXHRUaGUgb3JpZW50YXRpb24gZGVzY3JpYmVzIHRoZSBjbG9ja3dpc2UgYW5nbGUgb2YgYSB0b3VjaHBvaW50J3MgbWFqb3Jcblx0ICpcdGF4aXMgdG8gdGhlIHBvc2l0aXZlIHN1cmZhY2UgeS1heGlzIGFuZCBpcyBub3JtYWxpemVkIHRvIHRoZSAtMTgwIHRvXG5cdCAqXHQrMTgwIGRlZ3JlZSByYW5nZS4gVGhlIGdyYW51bGFyaXR5IG9mIG9yaWVudGF0aW9uIGRlcGVuZHMgb24gdGhlIHRvdWNoXG5cdCAqXHRkZXZpY2UsIHNvbWUgZGV2aWNlcyBvbmx5IHN1cHBvcnQgYmluYXJ5IHJvdGF0aW9uIHZhbHVlcyBiZXR3ZWVuIDAgYW5kXG5cdCAqXHQ5MCBkZWdyZWVzLlxuXHQgKlxuXHQgKlx0VGhpcyBldmVudCBpcyBvbmx5IHNlbnQgYnkgdGhlIGNvbXBvc2l0b3IgaWYgdGhlIHRvdWNoIGRldmljZSBzdXBwb3J0c1xuXHQgKlx0b3JpZW50YXRpb24gcmVwb3J0cy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIHRoZSB1bmlxdWUgSUQgb2YgdGhpcyB0b3VjaCBwb2ludCBcblx0ICogQHBhcmFtIHtGaXhlZH0gb3JpZW50YXRpb24gYW5nbGUgYmV0d2VlbiBtYWpvciBheGlzIGFuZCBwb3NpdGl2ZSBzdXJmYWNlIHktYXhpcyBpbiBkZWdyZWVzIFxuXHQgKlxuXHQgKiBAc2luY2UgNlxuXHQgKlxuXHQgKi9cblx0b3JpZW50YXRpb24oaWQsIG9yaWVudGF0aW9uKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTEgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDExIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMi0yMDEzIENvbGxhYm9yYSwgTHRkLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuICogICAgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLFxuICogICAgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAqICAgIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG4gKiAgICBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogICAgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGVcbiAqICAgIG5leHQgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG4gKiAgICBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogICAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICAgIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTXG4gKiAgICBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbiAqICAgIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4gKiAgICBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgICBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcblxuLyoqXG4gKlxuICogICAgICBUaGUgd2xfdG91Y2ggaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB0b3VjaHNjcmVlblxuICogICAgICBhc3NvY2lhdGVkIHdpdGggYSBzZWF0LlxuICpcbiAqICAgICAgVG91Y2ggaW50ZXJhY3Rpb25zIGNhbiBjb25zaXN0IG9mIG9uZSBvciBtb3JlIGNvbnRhY3RzLlxuICogICAgICBGb3IgZWFjaCBjb250YWN0LCBhIHNlcmllcyBvZiBldmVudHMgaXMgZ2VuZXJhdGVkLCBzdGFydGluZ1xuICogICAgICB3aXRoIGEgZG93biBldmVudCwgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIG1vdGlvbiBldmVudHMsXG4gKiAgICAgIGFuZCBlbmRpbmcgd2l0aCBhbiB1cCBldmVudC4gRXZlbnRzIHJlbGF0aW5nIHRvIHRoZSBzYW1lXG4gKiAgICAgIGNvbnRhY3QgcG9pbnQgY2FuIGJlIGlkZW50aWZpZWQgYnkgdGhlIElEIG9mIHRoZSBzZXF1ZW5jZS5cbiAqICAgIFxuICovXG5jbGFzcyBXbFRvdWNoUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzXG5cdCAqXG5cdCAqL1xuXHRyZWxlYXNlICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtXbFRvdWNoRXZlbnRzfG51bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ZW5lciA9IG51bGxcblx0fVxuXG5cdGFzeW5jIFswXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuZG93bih1KG1lc3NhZ2UpLCB1KG1lc3NhZ2UpLCBvKG1lc3NhZ2UsIGZhbHNlLCB0aGlzLl9jb25uZWN0aW9uKSwgaShtZXNzYWdlKSwgZihtZXNzYWdlKSwgZihtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIudXAodShtZXNzYWdlKSwgdShtZXNzYWdlKSwgaShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsyXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIubW90aW9uKHUobWVzc2FnZSksIGkobWVzc2FnZSksIGYobWVzc2FnZSksIGYobWVzc2FnZSkpXG5cdH1cblxuXHRhc3luYyBbM10gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmZyYW1lKClcblx0fVxuXG5cdGFzeW5jIFs0XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuY2FuY2VsKClcblx0fVxuXG5cdGFzeW5jIFs1XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIuc2hhcGUoaShtZXNzYWdlKSwgZihtZXNzYWdlKSwgZihtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFs2XSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIub3JpZW50YXRpb24oaShtZXNzYWdlKSwgZihtZXNzYWdlKSlcblx0fVxuXG59XG5XbFRvdWNoUHJveHkucHJvdG9jb2xOYW1lID0gJ3dsX3RvdWNoJ1xuXG5leHBvcnQgZGVmYXVsdCBXbFRvdWNoUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMyBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgUmFmYWVsIEFudG9nbm9sbGlcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgSmFzcGVyIFN0LiBQaWVycmVcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTMgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgU2Ftc3VuZyBFbGVjdHJvbmljcyBDby4sIEx0ZFxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBSZWQgSGF0IEluYy5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogICAgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogICAgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogICAgdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiAgICBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGUgbmV4dFxuICogICAgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZVxuICogICAgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqICAgIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogICAgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYZGdQb3B1cEV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGV2ZW50IGFza3MgdGhlIHBvcHVwIHN1cmZhY2UgdG8gY29uZmlndXJlIGl0c2VsZiBnaXZlbiB0aGVcblx0ICpcdGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmVkIHN0YXRlIHNob3VsZCBub3QgYmUgYXBwbGllZCBpbW1lZGlhdGVseS5cblx0ICpcdFNlZSB4ZGdfc3VyZmFjZS5jb25maWd1cmUgZm9yIGRldGFpbHMuXG5cdCAqXG5cdCAqXHRUaGUgeCBhbmQgeSBhcmd1bWVudHMgcmVwcmVzZW50IHRoZSBwb3NpdGlvbiB0aGUgcG9wdXAgd2FzIHBsYWNlZCBhdFxuXHQgKlx0Z2l2ZW4gdGhlIHhkZ19wb3NpdGlvbmVyIHJ1bGUsIHJlbGF0aXZlIHRvIHRoZSB1cHBlciBsZWZ0IGNvcm5lciBvZiB0aGVcblx0ICpcdHdpbmRvdyBnZW9tZXRyeSBvZiB0aGUgcGFyZW50IHN1cmZhY2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IHggcG9zaXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IHN1cmZhY2Ugd2luZG93IGdlb21ldHJ5IFxuXHQgKiBAcGFyYW0ge251bWJlcn0geSB5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHBhcmVudCBzdXJmYWNlIHdpbmRvdyBnZW9tZXRyeSBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIHdpbmRvdyBnZW9tZXRyeSB3aWR0aCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCB3aW5kb3cgZ2VvbWV0cnkgaGVpZ2h0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Y29uZmlndXJlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHt9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgcG9wdXBfZG9uZSBldmVudCBpcyBzZW50IG91dCB3aGVuIGEgcG9wdXAgaXMgZGlzbWlzc2VkIGJ5IHRoZVxuXHQgKlx0Y29tcG9zaXRvci4gVGhlIGNsaWVudCBzaG91bGQgZGVzdHJveSB0aGUgeGRnX3BvcHVwIG9iamVjdCBhdCB0aGlzXG5cdCAqXHRwb2ludC5cblx0ICogICAgICBcblx0ICpcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHBvcHVwRG9uZSgpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMyBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgUmFmYWVsIEFudG9nbm9sbGlcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgSmFzcGVyIFN0LiBQaWVycmVcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTMgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgU2Ftc3VuZyBFbGVjdHJvbmljcyBDby4sIEx0ZFxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBSZWQgSGF0IEluYy5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogICAgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogICAgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogICAgdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiAgICBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGUgbmV4dFxuICogICAgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZVxuICogICAgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqICAgIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogICAgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIEEgcG9wdXAgc3VyZmFjZSBpcyBhIHNob3J0LWxpdmVkLCB0ZW1wb3Jhcnkgc3VyZmFjZS4gSXQgY2FuIGJlIHVzZWQgdG9cbiAqICAgICAgaW1wbGVtZW50IGZvciBleGFtcGxlIG1lbnVzLCBwb3BvdmVycywgdG9vbHRpcHMgYW5kIG90aGVyIHNpbWlsYXIgdXNlclxuICogICAgICBpbnRlcmZhY2UgY29uY2VwdHMuXG4gKlxuICogICAgICBBIHBvcHVwIGNhbiBiZSBtYWRlIHRvIHRha2UgYW4gZXhwbGljaXQgZ3JhYi4gU2VlIHhkZ19wb3B1cC5ncmFiIGZvclxuICogICAgICBkZXRhaWxzLlxuICpcbiAqICAgICAgV2hlbiB0aGUgcG9wdXAgaXMgZGlzbWlzc2VkLCBhIHBvcHVwX2RvbmUgZXZlbnQgd2lsbCBiZSBzZW50IG91dCwgYW5kIGF0XG4gKiAgICAgIHRoZSBzYW1lIHRpbWUgdGhlIHN1cmZhY2Ugd2lsbCBiZSB1bm1hcHBlZC4gU2VlIHRoZSB4ZGdfcG9wdXAucG9wdXBfZG9uZVxuICogICAgICBldmVudCBmb3IgZGV0YWlscy5cbiAqXG4gKiAgICAgIEV4cGxpY2l0bHkgZGVzdHJveWluZyB0aGUgeGRnX3BvcHVwIG9iamVjdCB3aWxsIGFsc28gZGlzbWlzcyB0aGUgcG9wdXAgYW5kXG4gKiAgICAgIHVubWFwIHRoZSBzdXJmYWNlLiBDbGllbnRzIHRoYXQgd2FudCB0byBkaXNtaXNzIHRoZSBwb3B1cCB3aGVuIGFub3RoZXJcbiAqICAgICAgc3VyZmFjZSBvZiB0aGVpciBvd24gaXMgY2xpY2tlZCBzaG91bGQgZGlzbWlzcyB0aGUgcG9wdXAgdXNpbmcgdGhlIGRlc3Ryb3lcbiAqICAgICAgcmVxdWVzdC5cbiAqXG4gKiAgICAgIFRoZSBwYXJlbnQgc3VyZmFjZSBtdXN0IGhhdmUgZWl0aGVyIHRoZSB4ZGdfdG9wbGV2ZWwgb3IgeGRnX3BvcHVwIHN1cmZhY2VcbiAqICAgICAgcm9sZS5cbiAqXG4gKiAgICAgIEEgbmV3bHkgY3JlYXRlZCB4ZGdfcG9wdXAgd2lsbCBiZSBzdGFja2VkIG9uIHRvcCBvZiBhbGwgcHJldmlvdXNseSBjcmVhdGVkXG4gKiAgICAgIHhkZ19wb3B1cCBzdXJmYWNlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHNhbWUgeGRnX3RvcGxldmVsLlxuICpcbiAqICAgICAgVGhlIHBhcmVudCBvZiBhbiB4ZGdfcG9wdXAgbXVzdCBiZSBtYXBwZWQgKHNlZSB0aGUgeGRnX3N1cmZhY2VcbiAqICAgICAgZGVzY3JpcHRpb24pIGJlZm9yZSB0aGUgeGRnX3BvcHVwIGl0c2VsZi5cbiAqXG4gKiAgICAgIFRoZSB4IGFuZCB5IGFyZ3VtZW50cyBwYXNzZWQgd2hlbiBjcmVhdGluZyB0aGUgcG9wdXAgb2JqZWN0IHNwZWNpZnlcbiAqICAgICAgd2hlcmUgdGhlIHRvcCBsZWZ0IG9mIHRoZSBwb3B1cCBzaG91bGQgYmUgcGxhY2VkLCByZWxhdGl2ZSB0byB0aGVcbiAqICAgICAgbG9jYWwgc3VyZmFjZSBjb29yZGluYXRlcyBvZiB0aGUgcGFyZW50IHN1cmZhY2UuIFNlZVxuICogICAgICB4ZGdfc3VyZmFjZS5nZXRfcG9wdXAuIEFuIHhkZ19wb3B1cCBtdXN0IGludGVyc2VjdCB3aXRoIG9yIGJlIGF0IGxlYXN0XG4gKiAgICAgIHBhcnRpYWxseSBhZGphY2VudCB0byBpdHMgcGFyZW50IHN1cmZhY2UuXG4gKlxuICogICAgICBUaGUgY2xpZW50IG11c3QgY2FsbCB3bF9zdXJmYWNlLmNvbW1pdCBvbiB0aGUgY29ycmVzcG9uZGluZyB3bF9zdXJmYWNlXG4gKiAgICAgIGZvciB0aGUgeGRnX3BvcHVwIHN0YXRlIHRvIHRha2UgZWZmZWN0LlxuICogICAgXG4gKi9cbmNsYXNzIFhkZ1BvcHVwUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGRlc3Ryb3lzIHRoZSBwb3B1cC4gRXhwbGljaXRseSBkZXN0cm95aW5nIHRoZSB4ZGdfcG9wdXBcblx0ICpcdG9iamVjdCB3aWxsIGFsc28gZGlzbWlzcyB0aGUgcG9wdXAsIGFuZCB1bm1hcCB0aGUgc3VyZmFjZS5cblx0ICpcblx0ICpcdElmIHRoaXMgeGRnX3BvcHVwIGlzIG5vdCB0aGUgXCJ0b3Btb3N0XCIgcG9wdXAsIGEgcHJvdG9jb2wgZXJyb3Jcblx0ICpcdHdpbGwgYmUgc2VudC5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgbWFrZXMgdGhlIGNyZWF0ZWQgcG9wdXAgdGFrZSBhbiBleHBsaWNpdCBncmFiLiBBbiBleHBsaWNpdFxuXHQgKlx0Z3JhYiB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSB1c2VyIGRpc21pc3NlcyB0aGUgcG9wdXAsIG9yIHdoZW4gdGhlXG5cdCAqXHRjbGllbnQgZGVzdHJveXMgdGhlIHhkZ19wb3B1cC4gVGhpcyBjYW4gYmUgZG9uZSBieSB0aGUgdXNlciBjbGlja2luZ1xuXHQgKlx0b3V0c2lkZSB0aGUgc3VyZmFjZSwgdXNpbmcgdGhlIGtleWJvYXJkLCBvciBldmVuIGxvY2tpbmcgdGhlIHNjcmVlblxuXHQgKlx0dGhyb3VnaCBjbG9zaW5nIHRoZSBsaWQgb3IgYSB0aW1lb3V0LlxuXHQgKlxuXHQgKlx0SWYgdGhlIGNvbXBvc2l0b3IgZGVuaWVzIHRoZSBncmFiLCB0aGUgcG9wdXAgd2lsbCBiZSBpbW1lZGlhdGVseVxuXHQgKlx0ZGlzbWlzc2VkLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG11c3QgYmUgdXNlZCBpbiByZXNwb25zZSB0byBzb21lIHNvcnQgb2YgdXNlciBhY3Rpb24gbGlrZSBhXG5cdCAqXHRidXR0b24gcHJlc3MsIGtleSBwcmVzcywgb3IgdG91Y2ggZG93biBldmVudC4gVGhlIHNlcmlhbCBudW1iZXIgb2YgdGhlXG5cdCAqXHRldmVudCBzaG91bGQgYmUgcGFzc2VkIGFzICdzZXJpYWwnLlxuXHQgKlxuXHQgKlx0VGhlIHBhcmVudCBvZiBhIGdyYWJiaW5nIHBvcHVwIG11c3QgZWl0aGVyIGJlIGFuIHhkZ190b3BsZXZlbCBzdXJmYWNlIG9yXG5cdCAqXHRhbm90aGVyIHhkZ19wb3B1cCB3aXRoIGFuIGV4cGxpY2l0IGdyYWIuIElmIHRoZSBwYXJlbnQgaXMgYW5vdGhlclxuXHQgKlx0eGRnX3BvcHVwIGl0IG1lYW5zIHRoYXQgdGhlIHBvcHVwcyBhcmUgbmVzdGVkLCB3aXRoIHRoaXMgcG9wdXAgbm93IGJlaW5nXG5cdCAqXHR0aGUgdG9wbW9zdCBwb3B1cC5cblx0ICpcblx0ICpcdE5lc3RlZCBwb3B1cHMgbXVzdCBiZSBkZXN0cm95ZWQgaW4gdGhlIHJldmVyc2Ugb3JkZXIgdGhleSB3ZXJlIGNyZWF0ZWRcblx0ICpcdGluLCBlLmcuIHRoZSBvbmx5IHBvcHVwIHlvdSBhcmUgYWxsb3dlZCB0byBkZXN0cm95IGF0IGFsbCB0aW1lcyBpcyB0aGVcblx0ICpcdHRvcG1vc3Qgb25lLlxuXHQgKlxuXHQgKlx0V2hlbiBjb21wb3NpdG9ycyBjaG9vc2UgdG8gZGlzbWlzcyBhIHBvcHVwLCB0aGV5IG1heSBkaXNtaXNzIGV2ZXJ5XG5cdCAqXHRuZXN0ZWQgZ3JhYmJpbmcgcG9wdXAgYXMgd2VsbC4gV2hlbiBhIGNvbXBvc2l0b3IgZGlzbWlzc2VzIHBvcHVwcywgaXRcblx0ICpcdHdpbGwgZm9sbG93IHRoZSBzYW1lIGRpc21pc3Npbmcgb3JkZXIgYXMgcmVxdWlyZWQgZnJvbSB0aGUgY2xpZW50LlxuXHQgKlxuXHQgKlx0VGhlIHBhcmVudCBvZiBhIGdyYWJiaW5nIHBvcHVwIG11c3QgZWl0aGVyIGJlIGFub3RoZXIgeGRnX3BvcHVwIHdpdGggYW5cblx0ICpcdGFjdGl2ZSBleHBsaWNpdCBncmFiLCBvciBhbiB4ZGdfcG9wdXAgb3IgeGRnX3RvcGxldmVsLCBpZiB0aGVyZSBhcmUgbm9cblx0ICpcdGV4cGxpY2l0IGdyYWJzIGFscmVhZHkgdGFrZW4uXG5cdCAqXG5cdCAqXHRJZiB0aGUgdG9wbW9zdCBncmFiYmluZyBwb3B1cCBpcyBkZXN0cm95ZWQsIHRoZSBncmFiIHdpbGwgYmUgcmV0dXJuZWQgdG9cblx0ICpcdHRoZSBwYXJlbnQgb2YgdGhlIHBvcHVwLCBpZiB0aGF0IHBhcmVudCBwcmV2aW91c2x5IGhhZCBhbiBleHBsaWNpdCBncmFiLlxuXHQgKlxuXHQgKlx0SWYgdGhlIHBhcmVudCBpcyBhIGdyYWJiaW5nIHBvcHVwIHdoaWNoIGhhcyBhbHJlYWR5IGJlZW4gZGlzbWlzc2VkLCB0aGlzXG5cdCAqXHRwb3B1cCB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc21pc3NlZC4gSWYgdGhlIHBhcmVudCBpcyBhIHBvcHVwIHRoYXQgZGlkXG5cdCAqXHRub3QgdGFrZSBhbiBleHBsaWNpdCBncmFiLCBhbiBlcnJvciB3aWxsIGJlIHJhaXNlZC5cblx0ICpcblx0ICpcdER1cmluZyBhIHBvcHVwIGdyYWIsIHRoZSBjbGllbnQgb3duaW5nIHRoZSBncmFiIHdpbGwgcmVjZWl2ZSBwb2ludGVyXG5cdCAqXHRhbmQgdG91Y2ggZXZlbnRzIGZvciBhbGwgdGhlaXIgc3VyZmFjZXMgYXMgbm9ybWFsIChzaW1pbGFyIHRvIGFuXG5cdCAqXHRcIm93bmVyLWV2ZW50c1wiIGdyYWIgaW4gWDExIHBhcmxhbmNlKSwgd2hpbGUgdGhlIHRvcCBtb3N0IGdyYWJiaW5nIHBvcHVwXG5cdCAqXHR3aWxsIGFsd2F5cyBoYXZlIGtleWJvYXJkIGZvY3VzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNlYXQgdGhlIHdsX3NlYXQgb2YgdGhlIHVzZXIgZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgdGhlIHNlcmlhbCBvZiB0aGUgdXNlciBldmVudCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdyYWIgKHNlYXQsIHNlcmlhbCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtvYmplY3Qoc2VhdCksIHVpbnQoc2VyaWFsKV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7WGRnUG9wdXBFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5jb25maWd1cmUoaShtZXNzYWdlKSwgaShtZXNzYWdlKSwgaShtZXNzYWdlKSwgaShtZXNzYWdlKSlcblx0fVxuXG5cdGFzeW5jIFsxXSAobWVzc2FnZSkge1xuXHRcdGF3YWl0IHRoaXMubGlzdGVuZXIucG9wdXBEb25lKClcblx0fVxuXG59XG5YZGdQb3B1cFByb3h5LnByb3RvY29sTmFtZSA9ICd4ZGdfcG9wdXAnXG5cblhkZ1BvcHVwUHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiB0cmllZCB0byBncmFiIGFmdGVyIGJlaW5nIG1hcHBlZFxuICAgKi9cbiAgaW52YWxpZEdyYWI6IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgWGRnUG9wdXBQcm94eVxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDEzIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBSYWZhZWwgQW50b2dub2xsaVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBKYXNwZXIgU3QuIFBpZXJyZVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMyBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBTYW1zdW5nIEVsZWN0cm9uaWNzIENvLiwgTHRkXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFJlZCBIYXQgSW5jLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiAgICBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiAgICB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiAgICB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqICAgIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZSBuZXh0XG4gKiAgICBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlXG4gKiAgICBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogICAgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiAgICBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5cbi8qKlxuICpcbiAqICAgICAgVGhlIHhkZ19wb3NpdGlvbmVyIHByb3ZpZGVzIGEgY29sbGVjdGlvbiBvZiBydWxlcyBmb3IgdGhlIHBsYWNlbWVudCBvZiBhXG4gKiAgICAgIGNoaWxkIHN1cmZhY2UgcmVsYXRpdmUgdG8gYSBwYXJlbnQgc3VyZmFjZS4gUnVsZXMgY2FuIGJlIGRlZmluZWQgdG8gZW5zdXJlXG4gKiAgICAgIHRoZSBjaGlsZCBzdXJmYWNlIHJlbWFpbnMgd2l0aGluIHRoZSB2aXNpYmxlIGFyZWEncyBib3JkZXJzLCBhbmQgdG9cbiAqICAgICAgc3BlY2lmeSBob3cgdGhlIGNoaWxkIHN1cmZhY2UgY2hhbmdlcyBpdHMgcG9zaXRpb24sIHN1Y2ggYXMgc2xpZGluZyBhbG9uZ1xuICogICAgICBhbiBheGlzLCBvciBmbGlwcGluZyBhcm91bmQgYSByZWN0YW5nbGUuIFRoZXNlIHBvc2l0aW9uZXItY3JlYXRlZCBydWxlcyBhcmVcbiAqICAgICAgY29uc3RyYWluZWQgYnkgdGhlIHJlcXVpcmVtZW50IHRoYXQgYSBjaGlsZCBzdXJmYWNlIG11c3QgaW50ZXJzZWN0IHdpdGggb3JcbiAqICAgICAgYmUgYXQgbGVhc3QgcGFydGlhbGx5IGFkamFjZW50IHRvIGl0cyBwYXJlbnQgc3VyZmFjZS5cbiAqXG4gKiAgICAgIFNlZSB0aGUgdmFyaW91cyByZXF1ZXN0cyBmb3IgZGV0YWlscyBhYm91dCBwb3NzaWJsZSBydWxlcy5cbiAqXG4gKiAgICAgIEF0IHRoZSB0aW1lIG9mIHRoZSByZXF1ZXN0LCB0aGUgY29tcG9zaXRvciBtYWtlcyBhIGNvcHkgb2YgdGhlIHJ1bGVzXG4gKiAgICAgIHNwZWNpZmllZCBieSB0aGUgeGRnX3Bvc2l0aW9uZXIuIFRodXMsIGFmdGVyIHRoZSByZXF1ZXN0IGlzIGNvbXBsZXRlIHRoZVxuICogICAgICB4ZGdfcG9zaXRpb25lciBvYmplY3QgY2FuIGJlIGRlc3Ryb3llZCBvciByZXVzZWQ7IGZ1cnRoZXIgY2hhbmdlcyB0byB0aGVcbiAqICAgICAgb2JqZWN0IHdpbGwgaGF2ZSBubyBlZmZlY3Qgb24gcHJldmlvdXMgdXNhZ2VzLlxuICpcbiAqICAgICAgRm9yIGFuIHhkZ19wb3NpdGlvbmVyIG9iamVjdCB0byBiZSBjb25zaWRlcmVkIGNvbXBsZXRlLCBpdCBtdXN0IGhhdmUgYVxuICogICAgICBub24temVybyBzaXplIHNldCBieSBzZXRfc2l6ZSwgYW5kIGEgbm9uLXplcm8gYW5jaG9yIHJlY3RhbmdsZSBzZXQgYnlcbiAqICAgICAgc2V0X2FuY2hvcl9yZWN0LiBQYXNzaW5nIGFuIGluY29tcGxldGUgeGRnX3Bvc2l0aW9uZXIgb2JqZWN0IHdoZW5cbiAqICAgICAgcG9zaXRpb25pbmcgYSBzdXJmYWNlIHJhaXNlcyBhbiBlcnJvci5cbiAqICAgIFxuICovXG5jbGFzcyBYZGdQb3NpdGlvbmVyUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHROb3RpZnkgdGhlIGNvbXBvc2l0b3IgdGhhdCB0aGUgeGRnX3Bvc2l0aW9uZXIgd2lsbCBubyBsb25nZXIgYmUgdXNlZC5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTZXQgdGhlIHNpemUgb2YgdGhlIHN1cmZhY2UgdGhhdCBpcyB0byBiZSBwb3NpdGlvbmVkIHdpdGggdGhlIHBvc2l0aW9uZXJcblx0ICpcdG9iamVjdC4gVGhlIHNpemUgaXMgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcyBhbmQgY29ycmVzcG9uZHMgdG8gdGhlXG5cdCAqXHR3aW5kb3cgZ2VvbWV0cnkuIFNlZSB4ZGdfc3VyZmFjZS5zZXRfd2luZG93X2dlb21ldHJ5LlxuXHQgKlxuXHQgKlx0SWYgYSB6ZXJvIG9yIG5lZ2F0aXZlIHNpemUgaXMgc2V0IHRoZSBpbnZhbGlkX2lucHV0IGVycm9yIGlzIHJhaXNlZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIHdpZHRoIG9mIHBvc2l0aW9uZWQgcmVjdGFuZ2xlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IGhlaWdodCBvZiBwb3NpdGlvbmVkIHJlY3RhbmdsZSBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldFNpemUgKHdpZHRoLCBoZWlnaHQpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxLCBbaW50KHdpZHRoKSwgaW50KGhlaWdodCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTcGVjaWZ5IHRoZSBhbmNob3IgcmVjdGFuZ2xlIHdpdGhpbiB0aGUgcGFyZW50IHN1cmZhY2UgdGhhdCB0aGUgY2hpbGRcblx0ICpcdHN1cmZhY2Ugd2lsbCBiZSBwbGFjZWQgcmVsYXRpdmUgdG8uIFRoZSByZWN0YW5nbGUgaXMgcmVsYXRpdmUgdG8gdGhlXG5cdCAqXHR3aW5kb3cgZ2VvbWV0cnkgYXMgZGVmaW5lZCBieSB4ZGdfc3VyZmFjZS5zZXRfd2luZG93X2dlb21ldHJ5IG9mIHRoZVxuXHQgKlx0cGFyZW50IHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRXaGVuIHRoZSB4ZGdfcG9zaXRpb25lciBvYmplY3QgaXMgdXNlZCB0byBwb3NpdGlvbiBhIGNoaWxkIHN1cmZhY2UsIHRoZVxuXHQgKlx0YW5jaG9yIHJlY3RhbmdsZSBtYXkgbm90IGV4dGVuZCBvdXRzaWRlIHRoZSB3aW5kb3cgZ2VvbWV0cnkgb2YgdGhlXG5cdCAqXHRwb3NpdGlvbmVkIGNoaWxkJ3MgcGFyZW50IHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRJZiBhIG5lZ2F0aXZlIHNpemUgaXMgc2V0IHRoZSBpbnZhbGlkX2lucHV0IGVycm9yIGlzIHJhaXNlZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggeCBwb3NpdGlvbiBvZiBhbmNob3IgcmVjdGFuZ2xlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0geSB5IHBvc2l0aW9uIG9mIGFuY2hvciByZWN0YW5nbGUgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCB3aWR0aCBvZiBhbmNob3IgcmVjdGFuZ2xlIFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IGhlaWdodCBvZiBhbmNob3IgcmVjdGFuZ2xlIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0QW5jaG9yUmVjdCAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDIsIFtpbnQoeCksIGludCh5KSwgaW50KHdpZHRoKSwgaW50KGhlaWdodCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHREZWZpbmVzIHRoZSBhbmNob3IgcG9pbnQgZm9yIHRoZSBhbmNob3IgcmVjdGFuZ2xlLiBUaGUgc3BlY2lmaWVkIGFuY2hvclxuXHQgKlx0aXMgdXNlZCBkZXJpdmUgYW4gYW5jaG9yIHBvaW50IHRoYXQgdGhlIGNoaWxkIHN1cmZhY2Ugd2lsbCBiZVxuXHQgKlx0cG9zaXRpb25lZCByZWxhdGl2ZSB0by4gSWYgYSBjb3JuZXIgYW5jaG9yIGlzIHNldCAoZS5nLiAndG9wX2xlZnQnIG9yXG5cdCAqXHQnYm90dG9tX3JpZ2h0JyksIHRoZSBhbmNob3IgcG9pbnQgd2lsbCBiZSBhdCB0aGUgc3BlY2lmaWVkIGNvcm5lcjtcblx0ICpcdG90aGVyd2lzZSwgdGhlIGRlcml2ZWQgYW5jaG9yIHBvaW50IHdpbGwgYmUgY2VudGVyZWQgb24gdGhlIHNwZWNpZmllZFxuXHQgKlx0ZWRnZSwgb3IgaW4gdGhlIGNlbnRlciBvZiB0aGUgYW5jaG9yIHJlY3RhbmdsZSBpZiBubyBlZGdlIGlzIHNwZWNpZmllZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFuY2hvciBhbmNob3IgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRBbmNob3IgKGFuY2hvcikge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDMsIFt1aW50KGFuY2hvcildKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHREZWZpbmVzIGluIHdoYXQgZGlyZWN0aW9uIGEgc3VyZmFjZSBzaG91bGQgYmUgcG9zaXRpb25lZCwgcmVsYXRpdmUgdG9cblx0ICpcdHRoZSBhbmNob3IgcG9pbnQgb2YgdGhlIHBhcmVudCBzdXJmYWNlLiBJZiBhIGNvcm5lciBncmF2aXR5IGlzXG5cdCAqXHRzcGVjaWZpZWQgKGUuZy4gJ2JvdHRvbV9yaWdodCcgb3IgJ3RvcF9sZWZ0JyksIHRoZW4gdGhlIGNoaWxkIHN1cmZhY2Vcblx0ICpcdHdpbGwgYmUgcGxhY2VkIHRvd2FyZHMgdGhlIHNwZWNpZmllZCBncmF2aXR5OyBvdGhlcndpc2UsIHRoZSBjaGlsZFxuXHQgKlx0c3VyZmFjZSB3aWxsIGJlIGNlbnRlcmVkIG92ZXIgdGhlIGFuY2hvciBwb2ludCBvbiBhbnkgYXhpcyB0aGF0IGhhZCBub1xuXHQgKlx0Z3Jhdml0eSBzcGVjaWZpZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBncmF2aXR5IGdyYXZpdHkgZGlyZWN0aW9uIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0R3Jhdml0eSAoZ3Jhdml0eSkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDQsIFt1aW50KGdyYXZpdHkpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U3BlY2lmeSBob3cgdGhlIHdpbmRvdyBzaG91bGQgYmUgcG9zaXRpb25lZCBpZiB0aGUgb3JpZ2luYWxseSBpbnRlbmRlZFxuXHQgKlx0cG9zaXRpb24gY2F1c2VkIHRoZSBzdXJmYWNlIHRvIGJlIGNvbnN0cmFpbmVkLCBtZWFuaW5nIGF0IGxlYXN0XG5cdCAqXHRwYXJ0aWFsbHkgb3V0c2lkZSBwb3NpdGlvbmluZyBib3VuZGFyaWVzIHNldCBieSB0aGUgY29tcG9zaXRvci4gVGhlXG5cdCAqXHRhZGp1c3RtZW50IGlzIHNldCBieSBjb25zdHJ1Y3RpbmcgYSBiaXRtYXNrIGRlc2NyaWJpbmcgdGhlIGFkanVzdG1lbnQgdG9cblx0ICpcdGJlIG1hZGUgd2hlbiB0aGUgc3VyZmFjZSBpcyBjb25zdHJhaW5lZCBvbiB0aGF0IGF4aXMuXG5cdCAqXG5cdCAqXHRJZiBubyBiaXQgZm9yIG9uZSBheGlzIGlzIHNldCwgdGhlIGNvbXBvc2l0b3Igd2lsbCBhc3N1bWUgdGhhdCB0aGUgY2hpbGRcblx0ICpcdHN1cmZhY2Ugc2hvdWxkIG5vdCBjaGFuZ2UgaXRzIHBvc2l0aW9uIG9uIHRoYXQgYXhpcyB3aGVuIGNvbnN0cmFpbmVkLlxuXHQgKlxuXHQgKlx0SWYgbW9yZSB0aGFuIG9uZSBiaXQgZm9yIG9uZSBheGlzIGlzIHNldCwgdGhlIG9yZGVyIG9mIGhvdyBhZGp1c3RtZW50c1xuXHQgKlx0YXJlIGFwcGxpZWQgaXMgc3BlY2lmaWVkIGluIHRoZSBjb3JyZXNwb25kaW5nIGFkanVzdG1lbnQgZGVzY3JpcHRpb25zLlxuXHQgKlxuXHQgKlx0VGhlIGRlZmF1bHQgYWRqdXN0bWVudCBpcyBub25lLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY29uc3RyYWludEFkanVzdG1lbnQgYml0IG1hc2sgb2YgY29uc3RyYWludCBhZGp1c3RtZW50cyBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldENvbnN0cmFpbnRBZGp1c3RtZW50IChjb25zdHJhaW50QWRqdXN0bWVudCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDUsIFt1aW50KGNvbnN0cmFpbnRBZGp1c3RtZW50KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFNwZWNpZnkgdGhlIHN1cmZhY2UgcG9zaXRpb24gb2Zmc2V0IHJlbGF0aXZlIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGVcblx0ICpcdGFuY2hvciBvbiB0aGUgYW5jaG9yIHJlY3RhbmdsZSBhbmQgdGhlIGFuY2hvciBvbiB0aGUgc3VyZmFjZS4gRm9yXG5cdCAqXHRleGFtcGxlIGlmIHRoZSBhbmNob3Igb2YgdGhlIGFuY2hvciByZWN0YW5nbGUgaXMgYXQgKHgsIHkpLCB0aGUgc3VyZmFjZVxuXHQgKlx0aGFzIHRoZSBncmF2aXR5IGJvdHRvbXxyaWdodCwgYW5kIHRoZSBvZmZzZXQgaXMgKG94LCBveSksIHRoZSBjYWxjdWxhdGVkXG5cdCAqXHRzdXJmYWNlIHBvc2l0aW9uIHdpbGwgYmUgKHggKyBveCwgeSArIG95KS4gVGhlIG9mZnNldCBwb3NpdGlvbiBvZiB0aGVcblx0ICpcdHN1cmZhY2UgaXMgdGhlIG9uZSB1c2VkIGZvciBjb25zdHJhaW50IHRlc3RpbmcuIFNlZVxuXHQgKlx0c2V0X2NvbnN0cmFpbnRfYWRqdXN0bWVudC5cblx0ICpcblx0ICpcdEFuIGV4YW1wbGUgdXNlIGNhc2UgaXMgcGxhY2luZyBhIHBvcHVwIG1lbnUgb24gdG9wIG9mIGEgdXNlciBpbnRlcmZhY2Vcblx0ICpcdGVsZW1lbnQsIHdoaWxlIGFsaWduaW5nIHRoZSB1c2VyIGludGVyZmFjZSBlbGVtZW50IG9mIHRoZSBwYXJlbnQgc3VyZmFjZVxuXHQgKlx0d2l0aCBzb21lIHVzZXIgaW50ZXJmYWNlIGVsZW1lbnQgcGxhY2VkIHNvbWV3aGVyZSBpbiB0aGUgcG9wdXAgc3VyZmFjZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggc3VyZmFjZSBwb3NpdGlvbiB4IG9mZnNldCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgc3VyZmFjZSBwb3NpdGlvbiB5IG9mZnNldCBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldE9mZnNldCAoeCwgeSkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDYsIFtpbnQoeCksIGludCh5KV0pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7WGRnUG9zaXRpb25lckV2ZW50c3xudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdGVuZXIgPSBudWxsXG5cdH1cblxufVxuWGRnUG9zaXRpb25lclByb3h5LnByb3RvY29sTmFtZSA9ICd4ZGdfcG9zaXRpb25lcidcblxuWGRnUG9zaXRpb25lclByb3h5LkVycm9yID0ge1xuICAvKipcbiAgICogaW52YWxpZCBpbnB1dCBwcm92aWRlZFxuICAgKi9cbiAgaW52YWxpZElucHV0OiAwXG59XG5cblhkZ1Bvc2l0aW9uZXJQcm94eS5BbmNob3IgPSB7XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG5vbmU6IDAsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHRvcDogMSxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgYm90dG9tOiAyLFxuICAvKipcbiAgICogXG4gICAqL1xuICBsZWZ0OiAzLFxuICAvKipcbiAgICogXG4gICAqL1xuICByaWdodDogNCxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgdG9wTGVmdDogNSxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgYm90dG9tTGVmdDogNixcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgdG9wUmlnaHQ6IDcsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGJvdHRvbVJpZ2h0OiA4XG59XG5cblhkZ1Bvc2l0aW9uZXJQcm94eS5HcmF2aXR5ID0ge1xuICAvKipcbiAgICogXG4gICAqL1xuICBub25lOiAwLFxuICAvKipcbiAgICogXG4gICAqL1xuICB0b3A6IDEsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGJvdHRvbTogMixcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbGVmdDogMyxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcmlnaHQ6IDQsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHRvcExlZnQ6IDUsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGJvdHRvbUxlZnQ6IDYsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHRvcFJpZ2h0OiA3LFxuICAvKipcbiAgICogXG4gICAqL1xuICBib3R0b21SaWdodDogOFxufVxuXG5YZGdQb3NpdGlvbmVyUHJveHkuQ29uc3RyYWludEFkanVzdG1lbnQgPSB7XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG5vbmU6IDAsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHNsaWRlWDogMSxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgc2xpZGVZOiAyLFxuICAvKipcbiAgICogXG4gICAqL1xuICBmbGlwWDogNCxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgZmxpcFk6IDgsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHJlc2l6ZVg6IDE2LFxuICAvKipcbiAgICogXG4gICAqL1xuICByZXNpemVZOiAzMlxufVxuXG5leHBvcnQgZGVmYXVsdCBYZGdQb3NpdGlvbmVyUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMyBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgUmFmYWVsIEFudG9nbm9sbGlcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgSmFzcGVyIFN0LiBQaWVycmVcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTMgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgU2Ftc3VuZyBFbGVjdHJvbmljcyBDby4sIEx0ZFxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBSZWQgSGF0IEluYy5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogICAgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogICAgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogICAgdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiAgICBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGUgbmV4dFxuICogICAgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZVxuICogICAgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqICAgIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogICAgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYZGdTdXJmYWNlRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBjb25maWd1cmUgZXZlbnQgbWFya3MgdGhlIGVuZCBvZiBhIGNvbmZpZ3VyZSBzZXF1ZW5jZS4gQSBjb25maWd1cmVcblx0ICpcdHNlcXVlbmNlIGlzIGEgc2V0IG9mIG9uZSBvciBtb3JlIGV2ZW50cyBjb25maWd1cmluZyB0aGUgc3RhdGUgb2YgdGhlXG5cdCAqXHR4ZGdfc3VyZmFjZSwgaW5jbHVkaW5nIHRoZSBmaW5hbCB4ZGdfc3VyZmFjZS5jb25maWd1cmUgZXZlbnQuXG5cdCAqXG5cdCAqXHRXaGVyZSBhcHBsaWNhYmxlLCB4ZGdfc3VyZmFjZSBzdXJmYWNlIHJvbGVzIHdpbGwgZHVyaW5nIGEgY29uZmlndXJlXG5cdCAqXHRzZXF1ZW5jZSBleHRlbmQgdGhpcyBldmVudCBhcyBhIGxhdGNoZWQgc3RhdGUgc2VudCBhcyBldmVudHMgYmVmb3JlIHRoZVxuXHQgKlx0eGRnX3N1cmZhY2UuY29uZmlndXJlIGV2ZW50LiBTdWNoIGV2ZW50cyBzaG91bGQgYmUgY29uc2lkZXJlZCB0byBtYWtlIHVwXG5cdCAqXHRhIHNldCBvZiBhdG9taWNhbGx5IGFwcGxpZWQgY29uZmlndXJhdGlvbiBzdGF0ZXMsIHdoZXJlIHRoZVxuXHQgKlx0eGRnX3N1cmZhY2UuY29uZmlndXJlIGNvbW1pdHMgdGhlIGFjY3VtdWxhdGVkIHN0YXRlLlxuXHQgKlxuXHQgKlx0Q2xpZW50cyBzaG91bGQgYXJyYW5nZSB0aGVpciBzdXJmYWNlIGZvciB0aGUgbmV3IHN0YXRlcywgYW5kIHRoZW4gc2VuZFxuXHQgKlx0YW4gYWNrX2NvbmZpZ3VyZSByZXF1ZXN0IHdpdGggdGhlIHNlcmlhbCBzZW50IGluIHRoaXMgY29uZmlndXJlIGV2ZW50IGF0XG5cdCAqXHRzb21lIHBvaW50IGJlZm9yZSBjb21taXR0aW5nIHRoZSBuZXcgc3VyZmFjZS5cblx0ICpcblx0ICpcdElmIHRoZSBjbGllbnQgcmVjZWl2ZXMgbXVsdGlwbGUgY29uZmlndXJlIGV2ZW50cyBiZWZvcmUgaXQgY2FuIHJlc3BvbmRcblx0ICpcdHRvIG9uZSwgaXQgaXMgZnJlZSB0byBkaXNjYXJkIGFsbCBidXQgdGhlIGxhc3QgZXZlbnQgaXQgcmVjZWl2ZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG9mIHRoZSBjb25maWd1cmUgZXZlbnQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjb25maWd1cmUoc2VyaWFsKSB7fVxufVxuXG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTMgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMyAgICAgIFJhZmFlbCBBbnRvZ25vbGxpXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMyAgICAgIEphc3BlciBTdC4gUGllcnJlXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDEzIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFNhbXN1bmcgRWxlY3Ryb25pY3MgQ28uLCBMdGRcbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgUmVkIEhhdCBJbmMuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqICAgIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqICAgIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqICAgIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogICAgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiAgICBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlIG5leHRcbiAqICAgIHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGVcbiAqICAgIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiAgICBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqICAgIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnd2VzdGZpZWxkLXJ1bnRpbWUtY29tbW9uJ1xuY29uc3QgeyB1aW50LCB1aW50T3B0aW9uYWwsIGludCwgaW50T3B0aW9uYWwsIGZpeGVkLCBcblx0Zml4ZWRPcHRpb25hbCwgb2JqZWN0LCBvYmplY3RPcHRpb25hbCwgbmV3T2JqZWN0LCBzdHJpbmcsIFxuXHRzdHJpbmdPcHRpb25hbCwgYXJyYXksIGFycmF5T3B0aW9uYWwsIFxuXHRmaWxlRGVzY3JpcHRvck9wdGlvbmFsLCBmaWxlRGVzY3JpcHRvciwgXG5oLCB1LCBpLCBmLCBvLCBuLCBzLCBhIH0gPSBDb25uZWN0aW9uXG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSdcbmltcG9ydCBYZGdUb3BsZXZlbFByb3h5IGZyb20gJy4vWGRnVG9wbGV2ZWxQcm94eSdcbmltcG9ydCBYZGdQb3B1cFByb3h5IGZyb20gJy4vWGRnUG9wdXBQcm94eSdcblxuLyoqXG4gKlxuICogICAgICBBbiBpbnRlcmZhY2UgdGhhdCBtYXkgYmUgaW1wbGVtZW50ZWQgYnkgYSB3bF9zdXJmYWNlLCBmb3JcbiAqICAgICAgaW1wbGVtZW50YXRpb25zIHRoYXQgcHJvdmlkZSBhIGRlc2t0b3Atc3R5bGUgdXNlciBpbnRlcmZhY2UuXG4gKlxuICogICAgICBJdCBwcm92aWRlcyBhIGJhc2Ugc2V0IG9mIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgdG8gY29uc3RydWN0IHVzZXJcbiAqICAgICAgaW50ZXJmYWNlIGVsZW1lbnRzIHJlcXVpcmluZyBtYW5hZ2VtZW50IGJ5IHRoZSBjb21wb3NpdG9yLCBzdWNoIGFzXG4gKiAgICAgIHRvcGxldmVsIHdpbmRvd3MsIG1lbnVzLCBldGMuIFRoZSB0eXBlcyBvZiBmdW5jdGlvbmFsaXR5IGFyZSBzcGxpdCBpbnRvXG4gKiAgICAgIHhkZ19zdXJmYWNlIHJvbGVzLlxuICpcbiAqICAgICAgQ3JlYXRpbmcgYW4geGRnX3N1cmZhY2UgZG9lcyBub3Qgc2V0IHRoZSByb2xlIGZvciBhIHdsX3N1cmZhY2UuIEluIG9yZGVyXG4gKiAgICAgIHRvIG1hcCBhbiB4ZGdfc3VyZmFjZSwgdGhlIGNsaWVudCBtdXN0IGNyZWF0ZSBhIHJvbGUtc3BlY2lmaWMgb2JqZWN0XG4gKiAgICAgIHVzaW5nLCBlLmcuLCBnZXRfdG9wbGV2ZWwsIGdldF9wb3B1cC4gVGhlIHdsX3N1cmZhY2UgZm9yIGFueSBnaXZlblxuICogICAgICB4ZGdfc3VyZmFjZSBjYW4gaGF2ZSBhdCBtb3N0IG9uZSByb2xlLCBhbmQgbWF5IG5vdCBiZSBhc3NpZ25lZCBhbnkgcm9sZVxuICogICAgICBub3QgYmFzZWQgb24geGRnX3N1cmZhY2UuXG4gKlxuICogICAgICBBIHJvbGUgbXVzdCBiZSBhc3NpZ25lZCBiZWZvcmUgYW55IG90aGVyIHJlcXVlc3RzIGFyZSBtYWRlIHRvIHRoZVxuICogICAgICB4ZGdfc3VyZmFjZSBvYmplY3QuXG4gKlxuICogICAgICBUaGUgY2xpZW50IG11c3QgY2FsbCB3bF9zdXJmYWNlLmNvbW1pdCBvbiB0aGUgY29ycmVzcG9uZGluZyB3bF9zdXJmYWNlXG4gKiAgICAgIGZvciB0aGUgeGRnX3N1cmZhY2Ugc3RhdGUgdG8gdGFrZSBlZmZlY3QuXG4gKlxuICogICAgICBDcmVhdGluZyBhbiB4ZGdfc3VyZmFjZSBmcm9tIGEgd2xfc3VyZmFjZSB3aGljaCBoYXMgYSBidWZmZXIgYXR0YWNoZWQgb3JcbiAqICAgICAgY29tbWl0dGVkIGlzIGEgY2xpZW50IGVycm9yLCBhbmQgYW55IGF0dGVtcHRzIGJ5IGEgY2xpZW50IHRvIGF0dGFjaCBvclxuICogICAgICBtYW5pcHVsYXRlIGEgYnVmZmVyIHByaW9yIHRvIHRoZSBmaXJzdCB4ZGdfc3VyZmFjZS5jb25maWd1cmUgY2FsbCBtdXN0XG4gKiAgICAgIGFsc28gYmUgdHJlYXRlZCBhcyBlcnJvcnMuXG4gKlxuICogICAgICBNYXBwaW5nIGFuIHhkZ19zdXJmYWNlLWJhc2VkIHJvbGUgc3VyZmFjZSBpcyBkZWZpbmVkIGFzIG1ha2luZyBpdFxuICogICAgICBwb3NzaWJsZSBmb3IgdGhlIHN1cmZhY2UgdG8gYmUgc2hvd24gYnkgdGhlIGNvbXBvc2l0b3IuIE5vdGUgdGhhdFxuICogICAgICBhIG1hcHBlZCBzdXJmYWNlIGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIHZpc2libGUgb25jZSBpdCBpcyBtYXBwZWQuXG4gKlxuICogICAgICBGb3IgYW4geGRnX3N1cmZhY2UgdG8gYmUgbWFwcGVkIGJ5IHRoZSBjb21wb3NpdG9yLCB0aGUgZm9sbG93aW5nXG4gKiAgICAgIGNvbmRpdGlvbnMgbXVzdCBiZSBtZXQ6XG4gKiAgICAgICgxKSB0aGUgY2xpZW50IGhhcyBhc3NpZ25lZCBhbiB4ZGdfc3VyZmFjZS1iYXNlZCByb2xlIHRvIHRoZSBzdXJmYWNlXG4gKiAgICAgICgyKSB0aGUgY2xpZW50IGhhcyBzZXQgYW5kIGNvbW1pdHRlZCB0aGUgeGRnX3N1cmZhY2Ugc3RhdGUgYW5kIHRoZVxuICpcdCAgcm9sZS1kZXBlbmRlbnQgc3RhdGUgdG8gdGhlIHN1cmZhY2VcbiAqICAgICAgKDMpIHRoZSBjbGllbnQgaGFzIGNvbW1pdHRlZCBhIGJ1ZmZlciB0byB0aGUgc3VyZmFjZVxuICpcbiAqICAgICAgQSBuZXdseS11bm1hcHBlZCBzdXJmYWNlIGlzIGNvbnNpZGVyZWQgdG8gaGF2ZSBtZXQgY29uZGl0aW9uICgxKSBvdXRcbiAqICAgICAgb2YgdGhlIDMgcmVxdWlyZWQgY29uZGl0aW9ucyBmb3IgbWFwcGluZyBhIHN1cmZhY2UgaWYgaXRzIHJvbGUgc3VyZmFjZVxuICogICAgICBoYXMgbm90IGJlZW4gZGVzdHJveWVkLlxuICogICAgXG4gKi9cbmNsYXNzIFhkZ1N1cmZhY2VQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdERlc3Ryb3kgdGhlIHhkZ19zdXJmYWNlIG9iamVjdC4gQW4geGRnX3N1cmZhY2UgbXVzdCBvbmx5IGJlIGRlc3Ryb3llZFxuXHQgKlx0YWZ0ZXIgaXRzIHJvbGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZC5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGNyZWF0ZXMgYW4geGRnX3RvcGxldmVsIG9iamVjdCBmb3IgdGhlIGdpdmVuIHhkZ19zdXJmYWNlIGFuZCBnaXZlc1xuXHQgKlx0dGhlIGFzc29jaWF0ZWQgd2xfc3VyZmFjZSB0aGUgeGRnX3RvcGxldmVsIHJvbGUuXG5cdCAqXG5cdCAqXHRTZWUgdGhlIGRvY3VtZW50YXRpb24gb2YgeGRnX3RvcGxldmVsIGZvciBtb3JlIGRldGFpbHMgYWJvdXQgd2hhdCBhblxuXHQgKlx0eGRnX3RvcGxldmVsIGlzIGFuZCBob3cgaXQgaXMgdXNlZC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHJldHVybiB7WGRnVG9wbGV2ZWxQcm94eX0gIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0Z2V0VG9wbGV2ZWwgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXJzaGFsbENvbnN0cnVjdG9yKHRoaXMuaWQsIDEsIFhkZ1RvcGxldmVsUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgY3JlYXRlcyBhbiB4ZGdfcG9wdXAgb2JqZWN0IGZvciB0aGUgZ2l2ZW4geGRnX3N1cmZhY2UgYW5kIGdpdmVzXG5cdCAqXHR0aGUgYXNzb2NpYXRlZCB3bF9zdXJmYWNlIHRoZSB4ZGdfcG9wdXAgcm9sZS5cblx0ICpcblx0ICpcdElmIG51bGwgaXMgcGFzc2VkIGFzIGEgcGFyZW50LCBhIHBhcmVudCBzdXJmYWNlIG11c3QgYmUgc3BlY2lmaWVkIHVzaW5nXG5cdCAqXHRzb21lIG90aGVyIHByb3RvY29sLCBiZWZvcmUgY29tbWl0dGluZyB0aGUgaW5pdGlhbCBzdGF0ZS5cblx0ICpcblx0ICpcdFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvZiB4ZGdfcG9wdXAgZm9yIG1vcmUgZGV0YWlscyBhYm91dCB3aGF0IGFuXG5cdCAqXHR4ZGdfcG9wdXAgaXMgYW5kIGhvdyBpdCBpcyB1c2VkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0gez8qfSBwYXJlbnQgIFxuXHQgKiBAcGFyYW0geyp9IHBvc2l0aW9uZXIgIFxuXHQgKiBAcmV0dXJuIHtYZGdQb3B1cFByb3h5fSAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRnZXRQb3B1cCAocGFyZW50LCBwb3NpdGlvbmVyKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21hcnNoYWxsQ29uc3RydWN0b3IodGhpcy5pZCwgMiwgWGRnUG9wdXBQcm94eSwgW25ld09iamVjdCgpLCBvYmplY3RPcHRpb25hbChwYXJlbnQpLCBvYmplY3QocG9zaXRpb25lcildKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGUgd2luZG93IGdlb21ldHJ5IG9mIGEgc3VyZmFjZSBpcyBpdHMgXCJ2aXNpYmxlIGJvdW5kc1wiIGZyb20gdGhlXG5cdCAqXHR1c2VyJ3MgcGVyc3BlY3RpdmUuIENsaWVudC1zaWRlIGRlY29yYXRpb25zIG9mdGVuIGhhdmUgaW52aXNpYmxlXG5cdCAqXHRwb3J0aW9ucyBsaWtlIGRyb3Atc2hhZG93cyB3aGljaCBzaG91bGQgYmUgaWdub3JlZCBmb3IgdGhlXG5cdCAqXHRwdXJwb3NlcyBvZiBhbGlnbmluZywgcGxhY2luZyBhbmQgY29uc3RyYWluaW5nIHdpbmRvd3MuXG5cdCAqXG5cdCAqXHRUaGUgd2luZG93IGdlb21ldHJ5IGlzIGRvdWJsZSBidWZmZXJlZCwgYW5kIHdpbGwgYmUgYXBwbGllZCBhdCB0aGVcblx0ICpcdHRpbWUgd2xfc3VyZmFjZS5jb21taXQgb2YgdGhlIGNvcnJlc3BvbmRpbmcgd2xfc3VyZmFjZSBpcyBjYWxsZWQuXG5cdCAqXG5cdCAqXHRXaGVuIG1haW50YWluaW5nIGEgcG9zaXRpb24sIHRoZSBjb21wb3NpdG9yIHNob3VsZCB0cmVhdCB0aGUgKHgsIHkpXG5cdCAqXHRjb29yZGluYXRlIG9mIHRoZSB3aW5kb3cgZ2VvbWV0cnkgYXMgdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgd2luZG93LlxuXHQgKlx0QSBjbGllbnQgY2hhbmdpbmcgdGhlICh4LCB5KSB3aW5kb3cgZ2VvbWV0cnkgY29vcmRpbmF0ZSBzaG91bGQgaW5cblx0ICpcdGdlbmVyYWwgbm90IGFsdGVyIHRoZSBwb3NpdGlvbiBvZiB0aGUgd2luZG93LlxuXHQgKlxuXHQgKlx0T25jZSB0aGUgd2luZG93IGdlb21ldHJ5IG9mIHRoZSBzdXJmYWNlIGlzIHNldCwgaXQgaXMgbm90IHBvc3NpYmxlIHRvXG5cdCAqXHR1bnNldCBpdCwgYW5kIGl0IHdpbGwgcmVtYWluIHRoZSBzYW1lIHVudGlsIHNldF93aW5kb3dfZ2VvbWV0cnkgaXNcblx0ICpcdGNhbGxlZCBhZ2FpbiwgZXZlbiBpZiBhIG5ldyBzdWJzdXJmYWNlIG9yIGJ1ZmZlciBpcyBhdHRhY2hlZC5cblx0ICpcblx0ICpcdElmIG5ldmVyIHNldCwgdGhlIHZhbHVlIGlzIHRoZSBmdWxsIGJvdW5kcyBvZiB0aGUgc3VyZmFjZSxcblx0ICpcdGluY2x1ZGluZyBhbnkgc3Vic3VyZmFjZXMuIFRoaXMgdXBkYXRlcyBkeW5hbWljYWxseSBvbiBldmVyeVxuXHQgKlx0Y29tbWl0LiBUaGlzIHVuc2V0IGlzIG1lYW50IGZvciBleHRyZW1lbHkgc2ltcGxlIGNsaWVudHMuXG5cdCAqXG5cdCAqXHRUaGUgYXJndW1lbnRzIGFyZSBnaXZlbiBpbiB0aGUgc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlIHNwYWNlIG9mXG5cdCAqXHR0aGUgd2xfc3VyZmFjZSBhc3NvY2lhdGVkIHdpdGggdGhpcyB4ZGdfc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoZSB3aWR0aCBhbmQgaGVpZ2h0IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uIFNldHRpbmcgYW4gaW52YWxpZCBzaXplXG5cdCAqXHR3aWxsIHJhaXNlIGFuIGVycm9yLiBXaGVuIGFwcGxpZWQsIHRoZSBlZmZlY3RpdmUgd2luZG93IGdlb21ldHJ5IHdpbGwgYmVcblx0ICpcdHRoZSBzZXQgd2luZG93IGdlb21ldHJ5IGNsYW1wZWQgdG8gdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGVcblx0ICpcdGNvbWJpbmVkIGdlb21ldHJ5IG9mIHRoZSBzdXJmYWNlIG9mIHRoZSB4ZGdfc3VyZmFjZSBhbmQgdGhlIGFzc29jaWF0ZWRcblx0ICpcdHN1YnN1cmZhY2VzLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0geCAgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5ICBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRXaW5kb3dHZW9tZXRyeSAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDMsIFtpbnQoeCksIGludCh5KSwgaW50KHdpZHRoKSwgaW50KGhlaWdodCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRXaGVuIGEgY29uZmlndXJlIGV2ZW50IGlzIHJlY2VpdmVkLCBpZiBhIGNsaWVudCBjb21taXRzIHRoZVxuXHQgKlx0c3VyZmFjZSBpbiByZXNwb25zZSB0byB0aGUgY29uZmlndXJlIGV2ZW50LCB0aGVuIHRoZSBjbGllbnRcblx0ICpcdG11c3QgbWFrZSBhbiBhY2tfY29uZmlndXJlIHJlcXVlc3Qgc29tZXRpbWUgYmVmb3JlIHRoZSBjb21taXRcblx0ICpcdHJlcXVlc3QsIHBhc3NpbmcgYWxvbmcgdGhlIHNlcmlhbCBvZiB0aGUgY29uZmlndXJlIGV2ZW50LlxuXHQgKlxuXHQgKlx0Rm9yIGluc3RhbmNlLCBmb3IgdG9wbGV2ZWwgc3VyZmFjZXMgdGhlIGNvbXBvc2l0b3IgbWlnaHQgdXNlIHRoaXNcblx0ICpcdGluZm9ybWF0aW9uIHRvIG1vdmUgYSBzdXJmYWNlIHRvIHRoZSB0b3AgbGVmdCBvbmx5IHdoZW4gdGhlIGNsaWVudCBoYXNcblx0ICpcdGRyYXduIGl0c2VsZiBmb3IgdGhlIG1heGltaXplZCBvciBmdWxsc2NyZWVuIHN0YXRlLlxuXHQgKlxuXHQgKlx0SWYgdGhlIGNsaWVudCByZWNlaXZlcyBtdWx0aXBsZSBjb25maWd1cmUgZXZlbnRzIGJlZm9yZSBpdFxuXHQgKlx0Y2FuIHJlc3BvbmQgdG8gb25lLCBpdCBvbmx5IGhhcyB0byBhY2sgdGhlIGxhc3QgY29uZmlndXJlIGV2ZW50LlxuXHQgKlxuXHQgKlx0QSBjbGllbnQgaXMgbm90IHJlcXVpcmVkIHRvIGNvbW1pdCBpbW1lZGlhdGVseSBhZnRlciBzZW5kaW5nXG5cdCAqXHRhbiBhY2tfY29uZmlndXJlIHJlcXVlc3QgLSBpdCBtYXkgZXZlbiBhY2tfY29uZmlndXJlIHNldmVyYWwgdGltZXNcblx0ICpcdGJlZm9yZSBpdHMgbmV4dCBzdXJmYWNlIGNvbW1pdC5cblx0ICpcblx0ICpcdEEgY2xpZW50IG1heSBzZW5kIG11bHRpcGxlIGFja19jb25maWd1cmUgcmVxdWVzdHMgYmVmb3JlIGNvbW1pdHRpbmcsIGJ1dFxuXHQgKlx0b25seSB0aGUgbGFzdCByZXF1ZXN0IHNlbnQgYmVmb3JlIGEgY29tbWl0IGluZGljYXRlcyB3aGljaCBjb25maWd1cmVcblx0ICpcdGV2ZW50IHRoZSBjbGllbnQgcmVhbGx5IGlzIHJlc3BvbmRpbmcgdG8uXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgdGhlIHNlcmlhbCBmcm9tIHRoZSBjb25maWd1cmUgZXZlbnQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRhY2tDb25maWd1cmUgKHNlcmlhbCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDQsIFt1aW50KHNlcmlhbCldKVxuXHR9XG5cblx0LyoqXG5cdCAqIERvIG5vdCBjb25zdHJ1Y3QgcHJveGllcyBkaXJlY3RseS4gSW5zdGVhZCB1c2Ugb25lIG9mIHRoZSBmYWN0b3J5IG1ldGhvZHMgZnJvbSBvdGhlciBwcm94aWVzLlxuXHQgKkBwYXJhbSB7RGlzcGxheX1kaXNwbGF5XG5cdCAqQHBhcmFtIHtDb25uZWN0aW9ufWNvbm5lY3Rpb25cblx0ICpAcGFyYW0ge251bWJlcn1pZFxuXHQgKi9cblx0Y29uc3RydWN0b3IgKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKSB7XG5cdFx0c3VwZXIoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge1hkZ1N1cmZhY2VFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5jb25maWd1cmUodShtZXNzYWdlKSlcblx0fVxuXG59XG5YZGdTdXJmYWNlUHJveHkucHJvdG9jb2xOYW1lID0gJ3hkZ19zdXJmYWNlJ1xuXG5YZGdTdXJmYWNlUHJveHkuRXJyb3IgPSB7XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG5vdENvbnN0cnVjdGVkOiAxLFxuICAvKipcbiAgICogXG4gICAqL1xuICBhbHJlYWR5Q29uc3RydWN0ZWQ6IDIsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHVuY29uZmlndXJlZEJ1ZmZlcjogM1xufVxuXG5leHBvcnQgZGVmYXVsdCBYZGdTdXJmYWNlUHJveHlcbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMyBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgUmFmYWVsIEFudG9nbm9sbGlcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgSmFzcGVyIFN0LiBQaWVycmVcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTMgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgU2Ftc3VuZyBFbGVjdHJvbmljcyBDby4sIEx0ZFxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBSZWQgSGF0IEluYy5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogICAgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogICAgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogICAgdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiAgICBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGUgbmV4dFxuICogICAgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZVxuICogICAgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqICAgIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogICAgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogIFxuICovXG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYZGdUb3BsZXZlbEV2ZW50cyB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIGNvbmZpZ3VyZSBldmVudCBhc2tzIHRoZSBjbGllbnQgdG8gcmVzaXplIGl0cyB0b3BsZXZlbCBzdXJmYWNlIG9yXG5cdCAqXHR0byBjaGFuZ2UgaXRzIHN0YXRlLiBUaGUgY29uZmlndXJlZCBzdGF0ZSBzaG91bGQgbm90IGJlIGFwcGxpZWRcblx0ICpcdGltbWVkaWF0ZWx5LiBTZWUgeGRnX3N1cmZhY2UuY29uZmlndXJlIGZvciBkZXRhaWxzLlxuXHQgKlxuXHQgKlx0VGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJndW1lbnRzIHNwZWNpZnkgYSBoaW50IHRvIHRoZSB3aW5kb3dcblx0ICpcdGFib3V0IGhvdyBpdHMgc3VyZmFjZSBzaG91bGQgYmUgcmVzaXplZCBpbiB3aW5kb3cgZ2VvbWV0cnlcblx0ICpcdGNvb3JkaW5hdGVzLiBTZWUgc2V0X3dpbmRvd19nZW9tZXRyeS5cblx0ICpcblx0ICpcdElmIHRoZSB3aWR0aCBvciBoZWlnaHQgYXJndW1lbnRzIGFyZSB6ZXJvLCBpdCBtZWFucyB0aGUgY2xpZW50XG5cdCAqXHRzaG91bGQgZGVjaWRlIGl0cyBvd24gd2luZG93IGRpbWVuc2lvbi4gVGhpcyBtYXkgaGFwcGVuIHdoZW4gdGhlXG5cdCAqXHRjb21wb3NpdG9yIG5lZWRzIHRvIGNvbmZpZ3VyZSB0aGUgc3RhdGUgb2YgdGhlIHN1cmZhY2UgYnV0IGRvZXNuJ3Rcblx0ICpcdGhhdmUgYW55IGluZm9ybWF0aW9uIGFib3V0IGFueSBwcmV2aW91cyBvciBleHBlY3RlZCBkaW1lbnNpb24uXG5cdCAqXG5cdCAqXHRUaGUgc3RhdGVzIGxpc3RlZCBpbiB0aGUgZXZlbnQgc3BlY2lmeSBob3cgdGhlIHdpZHRoL2hlaWdodFxuXHQgKlx0YXJndW1lbnRzIHNob3VsZCBiZSBpbnRlcnByZXRlZCwgYW5kIHBvc3NpYmx5IGhvdyBpdCBzaG91bGQgYmVcblx0ICpcdGRyYXduLlxuXHQgKlxuXHQgKlx0Q2xpZW50cyBtdXN0IHNlbmQgYW4gYWNrX2NvbmZpZ3VyZSBpbiByZXNwb25zZSB0byB0aGlzIGV2ZW50LiBTZWVcblx0ICpcdHhkZ19zdXJmYWNlLmNvbmZpZ3VyZSBhbmQgeGRnX3N1cmZhY2UuYWNrX2NvbmZpZ3VyZSBmb3IgZGV0YWlscy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAgXG5cdCAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IHN0YXRlcyAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjb25maWd1cmUod2lkdGgsIGhlaWdodCwgc3RhdGVzKSB7fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0VGhlIGNsb3NlIGV2ZW50IGlzIHNlbnQgYnkgdGhlIGNvbXBvc2l0b3Igd2hlbiB0aGUgdXNlclxuXHQgKlx0d2FudHMgdGhlIHN1cmZhY2UgdG8gYmUgY2xvc2VkLiBUaGlzIHNob3VsZCBiZSBlcXVpdmFsZW50IHRvXG5cdCAqXHR0aGUgdXNlciBjbGlja2luZyB0aGUgY2xvc2UgYnV0dG9uIGluIGNsaWVudC1zaWRlIGRlY29yYXRpb25zLFxuXHQgKlx0aWYgeW91ciBhcHBsaWNhdGlvbiBoYXMgYW55LlxuXHQgKlxuXHQgKlx0VGhpcyBpcyBvbmx5IGEgcmVxdWVzdCB0aGF0IHRoZSB1c2VyIGludGVuZHMgdG8gY2xvc2UgdGhlXG5cdCAqXHR3aW5kb3cuIFRoZSBjbGllbnQgbWF5IGNob29zZSB0byBpZ25vcmUgdGhpcyByZXF1ZXN0LCBvciBzaG93XG5cdCAqXHRhIGRpYWxvZyB0byBhc2sgdGhlIHVzZXIgdG8gc2F2ZSB0aGVpciBkYXRhLCBldGMuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjbG9zZSgpIHt9XG59XG5cbiIsIi8qXG4gKlxuICogICAgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMyBLcmlzdGlhbiBIw7hnc2JlcmdcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgUmFmYWVsIEFudG9nbm9sbGlcbiAqICAgIENvcHlyaWdodCDCqSAyMDEzICAgICAgSmFzcGVyIFN0LiBQaWVycmVcbiAqICAgIENvcHlyaWdodCDCqSAyMDEwLTIwMTMgSW50ZWwgQ29ycG9yYXRpb25cbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgU2Ftc3VuZyBFbGVjdHJvbmljcyBDby4sIEx0ZFxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBSZWQgSGF0IEluYy5cbiAqXG4gKiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogICAgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogICAgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogICAgdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiAgICBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgKGluY2x1ZGluZyB0aGUgbmV4dFxuICogICAgcGFyYWdyYXBoKSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZVxuICogICAgU29mdHdhcmUuXG4gKlxuICogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqICAgIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogICAgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogIFxuICovXG5cbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd3ZXN0ZmllbGQtcnVudGltZS1jb21tb24nXG5jb25zdCB7IHVpbnQsIHVpbnRPcHRpb25hbCwgaW50LCBpbnRPcHRpb25hbCwgZml4ZWQsIFxuXHRmaXhlZE9wdGlvbmFsLCBvYmplY3QsIG9iamVjdE9wdGlvbmFsLCBuZXdPYmplY3QsIHN0cmluZywgXG5cdHN0cmluZ09wdGlvbmFsLCBhcnJheSwgYXJyYXlPcHRpb25hbCwgXG5cdGZpbGVEZXNjcmlwdG9yT3B0aW9uYWwsIGZpbGVEZXNjcmlwdG9yLCBcbmgsIHUsIGksIGYsIG8sIG4sIHMsIGEgfSA9IENvbm5lY3Rpb25cbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5J1xuXG4vKipcbiAqXG4gKiAgICAgIFRoaXMgaW50ZXJmYWNlIGRlZmluZXMgYW4geGRnX3N1cmZhY2Ugcm9sZSB3aGljaCBhbGxvd3MgYSBzdXJmYWNlIHRvLFxuICogICAgICBhbW9uZyBvdGhlciB0aGluZ3MsIHNldCB3aW5kb3ctbGlrZSBwcm9wZXJ0aWVzIHN1Y2ggYXMgbWF4aW1pemUsXG4gKiAgICAgIGZ1bGxzY3JlZW4sIGFuZCBtaW5pbWl6ZSwgc2V0IGFwcGxpY2F0aW9uLXNwZWNpZmljIG1ldGFkYXRhIGxpa2UgdGl0bGUgYW5kXG4gKiAgICAgIGlkLCBhbmQgd2VsbCBhcyB0cmlnZ2VyIHVzZXIgaW50ZXJhY3RpdmUgb3BlcmF0aW9ucyBzdWNoIGFzIGludGVyYWN0aXZlXG4gKiAgICAgIHJlc2l6ZSBhbmQgbW92ZS5cbiAqXG4gKiAgICAgIFVubWFwcGluZyBhbiB4ZGdfdG9wbGV2ZWwgbWVhbnMgdGhhdCB0aGUgc3VyZmFjZSBjYW5ub3QgYmUgc2hvd25cbiAqICAgICAgYnkgdGhlIGNvbXBvc2l0b3IgdW50aWwgaXQgaXMgZXhwbGljaXRseSBtYXBwZWQgYWdhaW4uXG4gKiAgICAgIEFsbCBhY3RpdmUgb3BlcmF0aW9ucyAoZS5nLiwgbW92ZSwgcmVzaXplKSBhcmUgY2FuY2VsZWQgYW5kIGFsbFxuICogICAgICBhdHRyaWJ1dGVzIChlLmcuIHRpdGxlLCBzdGF0ZSwgc3RhY2tpbmcsIC4uLikgYXJlIGRpc2NhcmRlZCBmb3JcbiAqICAgICAgYW4geGRnX3RvcGxldmVsIHN1cmZhY2Ugd2hlbiBpdCBpcyB1bm1hcHBlZC5cbiAqXG4gKiAgICAgIEF0dGFjaGluZyBhIG51bGwgYnVmZmVyIHRvIGEgdG9wbGV2ZWwgdW5tYXBzIHRoZSBzdXJmYWNlLlxuICogICAgXG4gKi9cbmNsYXNzIFhkZ1RvcGxldmVsUHJveHkgZXh0ZW5kcyBQcm94eSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRUaGlzIHJlcXVlc3QgZGVzdHJveXMgdGhlIHJvbGUgc3VyZmFjZSBhbmQgdW5tYXBzIHRoZSBzdXJmYWNlO1xuXHQgKlx0c2VlIFwiVW5tYXBwaW5nXCIgYmVoYXZpb3IgaW4gaW50ZXJmYWNlIHNlY3Rpb24gZm9yIGRldGFpbHMuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRkZXN0cm95ICgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAwLCBbXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0IHRoZSBcInBhcmVudFwiIG9mIHRoaXMgc3VyZmFjZS4gVGhpcyBzdXJmYWNlIHNob3VsZCBiZSBzdGFja2VkXG5cdCAqXHRhYm92ZSB0aGUgcGFyZW50IHN1cmZhY2UgYW5kIGFsbCBvdGhlciBhbmNlc3RvciBzdXJmYWNlcy5cblx0ICpcblx0ICpcdFBhcmVudCB3aW5kb3dzIHNob3VsZCBiZSBzZXQgb24gZGlhbG9ncywgdG9vbGJveGVzLCBvciBvdGhlclxuXHQgKlx0XCJhdXhpbGlhcnlcIiBzdXJmYWNlcywgc28gdGhhdCB0aGUgcGFyZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBkaWFsb2dcblx0ICpcdGlzIHJhaXNlZC5cblx0ICpcblx0ICpcdFNldHRpbmcgYSBudWxsIHBhcmVudCBmb3IgYSBjaGlsZCB3aW5kb3cgcmVtb3ZlcyBhbnkgcGFyZW50LWNoaWxkXG5cdCAqXHRyZWxhdGlvbnNoaXAgZm9yIHRoZSBjaGlsZC4gU2V0dGluZyBhIG51bGwgcGFyZW50IGZvciBhIHdpbmRvdyB3aGljaFxuXHQgKlx0Y3VycmVudGx5IGhhcyBubyBwYXJlbnQgaXMgYSBuby1vcC5cblx0ICpcblx0ICpcdElmIHRoZSBwYXJlbnQgaXMgdW5tYXBwZWQgdGhlbiBpdHMgY2hpbGRyZW4gYXJlIG1hbmFnZWQgYXNcblx0ICpcdHRob3VnaCB0aGUgcGFyZW50IG9mIHRoZSBub3ctdW5tYXBwZWQgcGFyZW50IGhhcyBiZWNvbWUgdGhlXG5cdCAqXHRwYXJlbnQgb2YgdGhpcyBzdXJmYWNlLiBJZiBubyBwYXJlbnQgZXhpc3RzIGZvciB0aGUgbm93LXVubWFwcGVkXG5cdCAqXHRwYXJlbnQgdGhlbiB0aGUgY2hpbGRyZW4gYXJlIG1hbmFnZWQgYXMgdGhvdWdoIHRoZXkgaGF2ZSBub1xuXHQgKlx0cGFyZW50IHN1cmZhY2UuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Pyp9IHBhcmVudCAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRQYXJlbnQgKHBhcmVudCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDEsIFtvYmplY3RPcHRpb25hbChwYXJlbnQpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0IGEgc2hvcnQgdGl0bGUgZm9yIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhpcyBzdHJpbmcgbWF5IGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHN1cmZhY2UgaW4gYSB0YXNrIGJhcixcblx0ICpcdHdpbmRvdyBsaXN0LCBvciBvdGhlciB1c2VyIGludGVyZmFjZSBlbGVtZW50cyBwcm92aWRlZCBieSB0aGVcblx0ICpcdGNvbXBvc2l0b3IuXG5cdCAqXG5cdCAqXHRUaGUgc3RyaW5nIG11c3QgYmUgZW5jb2RlZCBpbiBVVEYtOC5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlICBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldFRpdGxlICh0aXRsZSkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDIsIFtzdHJpbmcodGl0bGUpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0IGFuIGFwcGxpY2F0aW9uIGlkZW50aWZpZXIgZm9yIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhlIGFwcCBJRCBpZGVudGlmaWVzIHRoZSBnZW5lcmFsIGNsYXNzIG9mIGFwcGxpY2F0aW9ucyB0byB3aGljaFxuXHQgKlx0dGhlIHN1cmZhY2UgYmVsb25ncy4gVGhlIGNvbXBvc2l0b3IgY2FuIHVzZSB0aGlzIHRvIGdyb3VwIG11bHRpcGxlXG5cdCAqXHRzdXJmYWNlcyB0b2dldGhlciwgb3IgdG8gZGV0ZXJtaW5lIGhvdyB0byBsYXVuY2ggYSBuZXcgYXBwbGljYXRpb24uXG5cdCAqXG5cdCAqXHRGb3IgRC1CdXMgYWN0aXZhdGFibGUgYXBwbGljYXRpb25zLCB0aGUgYXBwIElEIGlzIHVzZWQgYXMgdGhlIEQtQnVzXG5cdCAqXHRzZXJ2aWNlIG5hbWUuXG5cdCAqXG5cdCAqXHRUaGUgY29tcG9zaXRvciBzaGVsbCB3aWxsIHRyeSB0byBncm91cCBhcHBsaWNhdGlvbiBzdXJmYWNlcyB0b2dldGhlclxuXHQgKlx0YnkgdGhlaXIgYXBwIElELiBBcyBhIGJlc3QgcHJhY3RpY2UsIGl0IGlzIHN1Z2dlc3RlZCB0byBzZWxlY3QgYXBwXG5cdCAqXHRJRCdzIHRoYXQgbWF0Y2ggdGhlIGJhc2VuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbidzIC5kZXNrdG9wIGZpbGUuXG5cdCAqXHRGb3IgZXhhbXBsZSwgXCJvcmcuZnJlZWRlc2t0b3AuRm9vVmlld2VyXCIgd2hlcmUgdGhlIC5kZXNrdG9wIGZpbGUgaXNcblx0ICpcdFwib3JnLmZyZWVkZXNrdG9wLkZvb1ZpZXdlci5kZXNrdG9wXCIuXG5cdCAqXG5cdCAqXHRTZWUgdGhlIGRlc2t0b3AtZW50cnkgc3BlY2lmaWNhdGlvbiBbMF0gZm9yIG1vcmUgZGV0YWlscyBvblxuXHQgKlx0YXBwbGljYXRpb24gaWRlbnRpZmllcnMgYW5kIGhvdyB0aGV5IHJlbGF0ZSB0byB3ZWxsLWtub3duIEQtQnVzXG5cdCAqXHRuYW1lcyBhbmQgLmRlc2t0b3AgZmlsZXMuXG5cdCAqXG5cdCAqXHRbMF0gaHR0cDovL3N0YW5kYXJkcy5mcmVlZGVza3RvcC5vcmcvZGVza3RvcC1lbnRyeS1zcGVjL1xuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXBwSWQgIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0QXBwSWQgKGFwcElkKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgMywgW3N0cmluZyhhcHBJZCldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRDbGllbnRzIGltcGxlbWVudGluZyBjbGllbnQtc2lkZSBkZWNvcmF0aW9ucyBtaWdodCB3YW50IHRvIHNob3dcblx0ICpcdGEgY29udGV4dCBtZW51IHdoZW4gcmlnaHQtY2xpY2tpbmcgb24gdGhlIGRlY29yYXRpb25zLCBnaXZpbmcgdGhlXG5cdCAqXHR1c2VyIGEgbWVudSB0aGF0IHRoZXkgY2FuIHVzZSB0byBtYXhpbWl6ZSBvciBtaW5pbWl6ZSB0aGUgd2luZG93LlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IGFza3MgdGhlIGNvbXBvc2l0b3IgdG8gcG9wIHVwIHN1Y2ggYSB3aW5kb3cgbWVudSBhdFxuXHQgKlx0dGhlIGdpdmVuIHBvc2l0aW9uLCByZWxhdGl2ZSB0byB0aGUgbG9jYWwgc3VyZmFjZSBjb29yZGluYXRlcyBvZlxuXHQgKlx0dGhlIHBhcmVudCBzdXJmYWNlLiBUaGVyZSBhcmUgbm8gZ3VhcmFudGVlcyBhcyB0byB3aGF0IG1lbnUgaXRlbXNcblx0ICpcdHRoZSB3aW5kb3cgbWVudSBjb250YWlucy5cblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBtdXN0IGJlIHVzZWQgaW4gcmVzcG9uc2UgdG8gc29tZSBzb3J0IG9mIHVzZXIgYWN0aW9uXG5cdCAqXHRsaWtlIGEgYnV0dG9uIHByZXNzLCBrZXkgcHJlc3MsIG9yIHRvdWNoIGRvd24gZXZlbnQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc2VhdCB0aGUgd2xfc2VhdCBvZiB0aGUgdXNlciBldmVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCB0aGUgc2VyaWFsIG9mIHRoZSB1c2VyIGV2ZW50IFxuXHQgKiBAcGFyYW0ge251bWJlcn0geCB0aGUgeCBwb3NpdGlvbiB0byBwb3AgdXAgdGhlIHdpbmRvdyBtZW51IGF0IFxuXHQgKiBAcGFyYW0ge251bWJlcn0geSB0aGUgeSBwb3NpdGlvbiB0byBwb3AgdXAgdGhlIHdpbmRvdyBtZW51IGF0IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2hvd1dpbmRvd01lbnUgKHNlYXQsIHNlcmlhbCwgeCwgeSkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDQsIFtvYmplY3Qoc2VhdCksIHVpbnQoc2VyaWFsKSwgaW50KHgpLCBpbnQoeSldKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRTdGFydCBhbiBpbnRlcmFjdGl2ZSwgdXNlci1kcml2ZW4gbW92ZSBvZiB0aGUgc3VyZmFjZS5cblx0ICpcblx0ICpcdFRoaXMgcmVxdWVzdCBtdXN0IGJlIHVzZWQgaW4gcmVzcG9uc2UgdG8gc29tZSBzb3J0IG9mIHVzZXIgYWN0aW9uXG5cdCAqXHRsaWtlIGEgYnV0dG9uIHByZXNzLCBrZXkgcHJlc3MsIG9yIHRvdWNoIGRvd24gZXZlbnQuIFRoZSBwYXNzZWRcblx0ICpcdHNlcmlhbCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBpbnRlcmFjdGl2ZSBtb3ZlICh0b3VjaCxcblx0ICpcdHBvaW50ZXIsIGV0YykuXG5cdCAqXG5cdCAqXHRUaGUgc2VydmVyIG1heSBpZ25vcmUgbW92ZSByZXF1ZXN0cyBkZXBlbmRpbmcgb24gdGhlIHN0YXRlIG9mXG5cdCAqXHR0aGUgc3VyZmFjZSAoZS5nLiBmdWxsc2NyZWVuIG9yIG1heGltaXplZCksIG9yIGlmIHRoZSBwYXNzZWQgc2VyaWFsXG5cdCAqXHRpcyBubyBsb25nZXIgdmFsaWQuXG5cdCAqXG5cdCAqXHRJZiB0cmlnZ2VyZWQsIHRoZSBzdXJmYWNlIHdpbGwgbG9zZSB0aGUgZm9jdXMgb2YgdGhlIGRldmljZVxuXHQgKlx0KHdsX3BvaW50ZXIsIHdsX3RvdWNoLCBldGMpIHVzZWQgZm9yIHRoZSBtb3ZlLiBJdCBpcyB1cCB0byB0aGVcblx0ICpcdGNvbXBvc2l0b3IgdG8gdmlzdWFsbHkgaW5kaWNhdGUgdGhhdCB0aGUgbW92ZSBpcyB0YWtpbmcgcGxhY2UsIHN1Y2ggYXNcblx0ICpcdHVwZGF0aW5nIGEgcG9pbnRlciBjdXJzb3IsIGR1cmluZyB0aGUgbW92ZS4gVGhlcmUgaXMgbm8gZ3VhcmFudGVlXG5cdCAqXHR0aGF0IHRoZSBkZXZpY2UgZm9jdXMgd2lsbCByZXR1cm4gd2hlbiB0aGUgbW92ZSBpcyBjb21wbGV0ZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gc2VhdCB0aGUgd2xfc2VhdCBvZiB0aGUgdXNlciBldmVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCB0aGUgc2VyaWFsIG9mIHRoZSB1c2VyIGV2ZW50IFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0bW92ZSAoc2VhdCwgc2VyaWFsKSB7XG5cdFx0dGhpcy5fbWFyc2hhbGwodGhpcy5pZCwgNSwgW29iamVjdChzZWF0KSwgdWludChzZXJpYWwpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U3RhcnQgYSB1c2VyLWRyaXZlbiwgaW50ZXJhY3RpdmUgcmVzaXplIG9mIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0VGhpcyByZXF1ZXN0IG11c3QgYmUgdXNlZCBpbiByZXNwb25zZSB0byBzb21lIHNvcnQgb2YgdXNlciBhY3Rpb25cblx0ICpcdGxpa2UgYSBidXR0b24gcHJlc3MsIGtleSBwcmVzcywgb3IgdG91Y2ggZG93biBldmVudC4gVGhlIHBhc3NlZFxuXHQgKlx0c2VyaWFsIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGludGVyYWN0aXZlIHJlc2l6ZSAodG91Y2gsXG5cdCAqXHRwb2ludGVyLCBldGMpLlxuXHQgKlxuXHQgKlx0VGhlIHNlcnZlciBtYXkgaWdub3JlIHJlc2l6ZSByZXF1ZXN0cyBkZXBlbmRpbmcgb24gdGhlIHN0YXRlIG9mXG5cdCAqXHR0aGUgc3VyZmFjZSAoZS5nLiBmdWxsc2NyZWVuIG9yIG1heGltaXplZCkuXG5cdCAqXG5cdCAqXHRJZiB0cmlnZ2VyZWQsIHRoZSBjbGllbnQgd2lsbCByZWNlaXZlIGNvbmZpZ3VyZSBldmVudHMgd2l0aCB0aGVcblx0ICpcdFwicmVzaXplXCIgc3RhdGUgZW51bSB2YWx1ZSBhbmQgdGhlIGV4cGVjdGVkIHNpemVzLiBTZWUgdGhlIFwicmVzaXplXCJcblx0ICpcdGVudW0gdmFsdWUgZm9yIG1vcmUgZGV0YWlscyBhYm91dCB3aGF0IGlzIHJlcXVpcmVkLiBUaGUgY2xpZW50XG5cdCAqXHRtdXN0IGFsc28gYWNrbm93bGVkZ2UgY29uZmlndXJlIGV2ZW50cyB1c2luZyBcImFja19jb25maWd1cmVcIi4gQWZ0ZXJcblx0ICpcdHRoZSByZXNpemUgaXMgY29tcGxldGVkLCB0aGUgY2xpZW50IHdpbGwgcmVjZWl2ZSBhbm90aGVyIFwiY29uZmlndXJlXCJcblx0ICpcdGV2ZW50IHdpdGhvdXQgdGhlIHJlc2l6ZSBzdGF0ZS5cblx0ICpcblx0ICpcdElmIHRyaWdnZXJlZCwgdGhlIHN1cmZhY2UgYWxzbyB3aWxsIGxvc2UgdGhlIGZvY3VzIG9mIHRoZSBkZXZpY2Vcblx0ICpcdCh3bF9wb2ludGVyLCB3bF90b3VjaCwgZXRjKSB1c2VkIGZvciB0aGUgcmVzaXplLiBJdCBpcyB1cCB0byB0aGVcblx0ICpcdGNvbXBvc2l0b3IgdG8gdmlzdWFsbHkgaW5kaWNhdGUgdGhhdCB0aGUgcmVzaXplIGlzIHRha2luZyBwbGFjZSxcblx0ICpcdHN1Y2ggYXMgdXBkYXRpbmcgYSBwb2ludGVyIGN1cnNvciwgZHVyaW5nIHRoZSByZXNpemUuIFRoZXJlIGlzIG5vXG5cdCAqXHRndWFyYW50ZWUgdGhhdCB0aGUgZGV2aWNlIGZvY3VzIHdpbGwgcmV0dXJuIHdoZW4gdGhlIHJlc2l6ZSBpc1xuXHQgKlx0Y29tcGxldGVkLlxuXHQgKlxuXHQgKlx0VGhlIGVkZ2VzIHBhcmFtZXRlciBzcGVjaWZpZXMgaG93IHRoZSBzdXJmYWNlIHNob3VsZCBiZSByZXNpemVkLFxuXHQgKlx0YW5kIGlzIG9uZSBvZiB0aGUgdmFsdWVzIG9mIHRoZSByZXNpemVfZWRnZSBlbnVtLiBUaGUgY29tcG9zaXRvclxuXHQgKlx0bWF5IHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHVwZGF0ZSB0aGUgc3VyZmFjZSBwb3NpdGlvbiBmb3Jcblx0ICpcdGV4YW1wbGUgd2hlbiBkcmFnZ2luZyB0aGUgdG9wIGxlZnQgY29ybmVyLiBUaGUgY29tcG9zaXRvciBtYXkgYWxzb1xuXHQgKlx0dXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gYWRhcHQgaXRzIGJlaGF2aW9yLCBlLmcuIGNob29zZSBhblxuXHQgKlx0YXBwcm9wcmlhdGUgY3Vyc29yIGltYWdlLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNlYXQgdGhlIHdsX3NlYXQgb2YgdGhlIHVzZXIgZXZlbnQgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgdGhlIHNlcmlhbCBvZiB0aGUgdXNlciBldmVudCBcblx0ICogQHBhcmFtIHtudW1iZXJ9IGVkZ2VzIHdoaWNoIGVkZ2Ugb3IgY29ybmVyIGlzIGJlaW5nIGRyYWdnZWQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRyZXNpemUgKHNlYXQsIHNlcmlhbCwgZWRnZXMpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCA2LCBbb2JqZWN0KHNlYXQpLCB1aW50KHNlcmlhbCksIHVpbnQoZWRnZXMpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0U2V0IGEgbWF4aW11bSBzaXplIGZvciB0aGUgd2luZG93LlxuXHQgKlxuXHQgKlx0VGhlIGNsaWVudCBjYW4gc3BlY2lmeSBhIG1heGltdW0gc2l6ZSBzbyB0aGF0IHRoZSBjb21wb3NpdG9yIGRvZXNcblx0ICpcdG5vdCB0cnkgdG8gY29uZmlndXJlIHRoZSB3aW5kb3cgYmV5b25kIHRoaXMgc2l6ZS5cblx0ICpcblx0ICpcdFRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZ3VtZW50cyBhcmUgaW4gd2luZG93IGdlb21ldHJ5IGNvb3JkaW5hdGVzLlxuXHQgKlx0U2VlIHhkZ19zdXJmYWNlLnNldF93aW5kb3dfZ2VvbWV0cnkuXG5cdCAqXG5cdCAqXHRWYWx1ZXMgc2V0IGluIHRoaXMgd2F5IGFyZSBkb3VibGUtYnVmZmVyZWQuIFRoZXkgd2lsbCBnZXQgYXBwbGllZFxuXHQgKlx0b24gdGhlIG5leHQgY29tbWl0LlxuXHQgKlxuXHQgKlx0VGhlIGNvbXBvc2l0b3IgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGFsbG93IG9yIGRpc2FsbG93XG5cdCAqXHRkaWZmZXJlbnQgc3RhdGVzIGxpa2UgbWF4aW1pemUgb3IgZnVsbHNjcmVlbiBhbmQgZHJhdyBhY2N1cmF0ZVxuXHQgKlx0YW5pbWF0aW9ucy5cblx0ICpcblx0ICpcdFNpbWlsYXJseSwgYSB0aWxpbmcgd2luZG93IG1hbmFnZXIgbWF5IHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvXG5cdCAqXHRwbGFjZSBhbmQgcmVzaXplIGNsaWVudCB3aW5kb3dzIGluIGEgbW9yZSBlZmZlY3RpdmUgd2F5LlxuXHQgKlxuXHQgKlx0VGhlIGNsaWVudCBzaG91bGQgbm90IHJlbHkgb24gdGhlIGNvbXBvc2l0b3IgdG8gb2JleSB0aGUgbWF4aW11bVxuXHQgKlx0c2l6ZS4gVGhlIGNvbXBvc2l0b3IgbWF5IGRlY2lkZSB0byBpZ25vcmUgdGhlIHZhbHVlcyBzZXQgYnkgdGhlXG5cdCAqXHRjbGllbnQgYW5kIHJlcXVlc3QgYSBsYXJnZXIgc2l6ZS5cblx0ICpcblx0ICpcdElmIG5ldmVyIHNldCwgb3IgYSB2YWx1ZSBvZiB6ZXJvIGluIHRoZSByZXF1ZXN0LCBtZWFucyB0aGF0IHRoZVxuXHQgKlx0Y2xpZW50IGhhcyBubyBleHBlY3RlZCBtYXhpbXVtIHNpemUgaW4gdGhlIGdpdmVuIGRpbWVuc2lvbi5cblx0ICpcdEFzIGEgcmVzdWx0LCBhIGNsaWVudCB3aXNoaW5nIHRvIHJlc2V0IHRoZSBtYXhpbXVtIHNpemVcblx0ICpcdHRvIGFuIHVuc3BlY2lmaWVkIHN0YXRlIGNhbiB1c2UgemVybyBmb3Igd2lkdGggYW5kIGhlaWdodCBpbiB0aGVcblx0ICpcdHJlcXVlc3QuXG5cdCAqXG5cdCAqXHRSZXF1ZXN0aW5nIGEgbWF4aW11bSBzaXplIHRvIGJlIHNtYWxsZXIgdGhhbiB0aGUgbWluaW11bSBzaXplIG9mXG5cdCAqXHRhIHN1cmZhY2UgaXMgaWxsZWdhbCBhbmQgd2lsbCByZXN1bHQgaW4gYSBwcm90b2NvbCBlcnJvci5cblx0ICpcblx0ICpcdFRoZSB3aWR0aCBhbmQgaGVpZ2h0IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uIFVzaW5nXG5cdCAqXHRzdHJpY3RseSBuZWdhdGl2ZSB2YWx1ZXMgZm9yIHdpZHRoIGFuZCBoZWlnaHQgd2lsbCByZXN1bHQgaW4gYVxuXHQgKlx0cHJvdG9jb2wgZXJyb3IuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0TWF4U2l6ZSAod2lkdGgsIGhlaWdodCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDcsIFtpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFNldCBhIG1pbmltdW0gc2l6ZSBmb3IgdGhlIHdpbmRvdy5cblx0ICpcblx0ICpcdFRoZSBjbGllbnQgY2FuIHNwZWNpZnkgYSBtaW5pbXVtIHNpemUgc28gdGhhdCB0aGUgY29tcG9zaXRvciBkb2VzXG5cdCAqXHRub3QgdHJ5IHRvIGNvbmZpZ3VyZSB0aGUgd2luZG93IGJlbG93IHRoaXMgc2l6ZS5cblx0ICpcblx0ICpcdFRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZ3VtZW50cyBhcmUgaW4gd2luZG93IGdlb21ldHJ5IGNvb3JkaW5hdGVzLlxuXHQgKlx0U2VlIHhkZ19zdXJmYWNlLnNldF93aW5kb3dfZ2VvbWV0cnkuXG5cdCAqXG5cdCAqXHRWYWx1ZXMgc2V0IGluIHRoaXMgd2F5IGFyZSBkb3VibGUtYnVmZmVyZWQuIFRoZXkgd2lsbCBnZXQgYXBwbGllZFxuXHQgKlx0b24gdGhlIG5leHQgY29tbWl0LlxuXHQgKlxuXHQgKlx0VGhlIGNvbXBvc2l0b3IgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGFsbG93IG9yIGRpc2FsbG93XG5cdCAqXHRkaWZmZXJlbnQgc3RhdGVzIGxpa2UgbWF4aW1pemUgb3IgZnVsbHNjcmVlbiBhbmQgZHJhdyBhY2N1cmF0ZVxuXHQgKlx0YW5pbWF0aW9ucy5cblx0ICpcblx0ICpcdFNpbWlsYXJseSwgYSB0aWxpbmcgd2luZG93IG1hbmFnZXIgbWF5IHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvXG5cdCAqXHRwbGFjZSBhbmQgcmVzaXplIGNsaWVudCB3aW5kb3dzIGluIGEgbW9yZSBlZmZlY3RpdmUgd2F5LlxuXHQgKlxuXHQgKlx0VGhlIGNsaWVudCBzaG91bGQgbm90IHJlbHkgb24gdGhlIGNvbXBvc2l0b3IgdG8gb2JleSB0aGUgbWluaW11bVxuXHQgKlx0c2l6ZS4gVGhlIGNvbXBvc2l0b3IgbWF5IGRlY2lkZSB0byBpZ25vcmUgdGhlIHZhbHVlcyBzZXQgYnkgdGhlXG5cdCAqXHRjbGllbnQgYW5kIHJlcXVlc3QgYSBzbWFsbGVyIHNpemUuXG5cdCAqXG5cdCAqXHRJZiBuZXZlciBzZXQsIG9yIGEgdmFsdWUgb2YgemVybyBpbiB0aGUgcmVxdWVzdCwgbWVhbnMgdGhhdCB0aGVcblx0ICpcdGNsaWVudCBoYXMgbm8gZXhwZWN0ZWQgbWluaW11bSBzaXplIGluIHRoZSBnaXZlbiBkaW1lbnNpb24uXG5cdCAqXHRBcyBhIHJlc3VsdCwgYSBjbGllbnQgd2lzaGluZyB0byByZXNldCB0aGUgbWluaW11bSBzaXplXG5cdCAqXHR0byBhbiB1bnNwZWNpZmllZCBzdGF0ZSBjYW4gdXNlIHplcm8gZm9yIHdpZHRoIGFuZCBoZWlnaHQgaW4gdGhlXG5cdCAqXHRyZXF1ZXN0LlxuXHQgKlxuXHQgKlx0UmVxdWVzdGluZyBhIG1pbmltdW0gc2l6ZSB0byBiZSBsYXJnZXIgdGhhbiB0aGUgbWF4aW11bSBzaXplIG9mXG5cdCAqXHRhIHN1cmZhY2UgaXMgaWxsZWdhbCBhbmQgd2lsbCByZXN1bHQgaW4gYSBwcm90b2NvbCBlcnJvci5cblx0ICpcblx0ICpcdFRoZSB3aWR0aCBhbmQgaGVpZ2h0IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uIFVzaW5nXG5cdCAqXHRzdHJpY3RseSBuZWdhdGl2ZSB2YWx1ZXMgZm9yIHdpZHRoIGFuZCBoZWlnaHQgd2lsbCByZXN1bHQgaW4gYVxuXHQgKlx0cHJvdG9jb2wgZXJyb3IuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgIFxuXHQgKlxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0TWluU2l6ZSAod2lkdGgsIGhlaWdodCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDgsIFtpbnQod2lkdGgpLCBpbnQoaGVpZ2h0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdE1heGltaXplIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0QWZ0ZXIgcmVxdWVzdGluZyB0aGF0IHRoZSBzdXJmYWNlIHNob3VsZCBiZSBtYXhpbWl6ZWQsIHRoZSBjb21wb3NpdG9yXG5cdCAqXHR3aWxsIHJlc3BvbmQgYnkgZW1pdHRpbmcgYSBjb25maWd1cmUgZXZlbnQgd2l0aCB0aGUgXCJtYXhpbWl6ZWRcIiBzdGF0ZVxuXHQgKlx0YW5kIHRoZSByZXF1aXJlZCB3aW5kb3cgZ2VvbWV0cnkuIFRoZSBjbGllbnQgc2hvdWxkIHRoZW4gdXBkYXRlIGl0c1xuXHQgKlx0Y29udGVudCwgZHJhd2luZyBpdCBpbiBhIG1heGltaXplZCBzdGF0ZSwgaS5lLiB3aXRob3V0IHNoYWRvdyBvciBvdGhlclxuXHQgKlx0ZGVjb3JhdGlvbiBvdXRzaWRlIG9mIHRoZSB3aW5kb3cgZ2VvbWV0cnkuIFRoZSBjbGllbnQgbXVzdCBhbHNvXG5cdCAqXHRhY2tub3dsZWRnZSB0aGUgY29uZmlndXJlIHdoZW4gY29tbWl0dGluZyB0aGUgbmV3IGNvbnRlbnQgKHNlZVxuXHQgKlx0YWNrX2NvbmZpZ3VyZSkuXG5cdCAqXG5cdCAqXHRJdCBpcyB1cCB0byB0aGUgY29tcG9zaXRvciB0byBkZWNpZGUgaG93IGFuZCB3aGVyZSB0byBtYXhpbWl6ZSB0aGVcblx0ICpcdHN1cmZhY2UsIGZvciBleGFtcGxlIHdoaWNoIG91dHB1dCBhbmQgd2hhdCByZWdpb24gb2YgdGhlIHNjcmVlbiBzaG91bGRcblx0ICpcdGJlIHVzZWQuXG5cdCAqXG5cdCAqXHRJZiB0aGUgc3VyZmFjZSB3YXMgYWxyZWFkeSBtYXhpbWl6ZWQsIHRoZSBjb21wb3NpdG9yIHdpbGwgc3RpbGwgZW1pdFxuXHQgKlx0YSBjb25maWd1cmUgZXZlbnQgd2l0aCB0aGUgXCJtYXhpbWl6ZWRcIiBzdGF0ZS5cblx0ICpcblx0ICpcdElmIHRoZSBzdXJmYWNlIGlzIGluIGEgZnVsbHNjcmVlbiBzdGF0ZSwgdGhpcyByZXF1ZXN0IGhhcyBubyBkaXJlY3Rcblx0ICpcdGVmZmVjdC4gSXQgd2lsbCBhbHRlciB0aGUgc3RhdGUgdGhlIHN1cmZhY2UgaXMgcmV0dXJuZWQgdG8gd2hlblxuXHQgKlx0dW5tYXhpbWl6ZWQgaWYgbm90IG92ZXJyaWRkZW4gYnkgdGhlIGNvbXBvc2l0b3IuXG5cdCAqICAgICAgXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRzZXRNYXhpbWl6ZWQgKCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDksIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRVbm1heGltaXplIHRoZSBzdXJmYWNlLlxuXHQgKlxuXHQgKlx0QWZ0ZXIgcmVxdWVzdGluZyB0aGF0IHRoZSBzdXJmYWNlIHNob3VsZCBiZSB1bm1heGltaXplZCwgdGhlIGNvbXBvc2l0b3Jcblx0ICpcdHdpbGwgcmVzcG9uZCBieSBlbWl0dGluZyBhIGNvbmZpZ3VyZSBldmVudCB3aXRob3V0IHRoZSBcIm1heGltaXplZFwiXG5cdCAqXHRzdGF0ZS4gSWYgYXZhaWxhYmxlLCB0aGUgY29tcG9zaXRvciB3aWxsIGluY2x1ZGUgdGhlIHdpbmRvdyBnZW9tZXRyeVxuXHQgKlx0ZGltZW5zaW9ucyB0aGUgd2luZG93IGhhZCBwcmlvciB0byBiZWluZyBtYXhpbWl6ZWQgaW4gdGhlIGNvbmZpZ3VyZVxuXHQgKlx0ZXZlbnQuIFRoZSBjbGllbnQgbXVzdCB0aGVuIHVwZGF0ZSBpdHMgY29udGVudCwgZHJhd2luZyBpdCBpbiBhXG5cdCAqXHRyZWd1bGFyIHN0YXRlLCBpLmUuIHBvdGVudGlhbGx5IHdpdGggc2hhZG93LCBldGMuIFRoZSBjbGllbnQgbXVzdCBhbHNvXG5cdCAqXHRhY2tub3dsZWRnZSB0aGUgY29uZmlndXJlIHdoZW4gY29tbWl0dGluZyB0aGUgbmV3IGNvbnRlbnQgKHNlZVxuXHQgKlx0YWNrX2NvbmZpZ3VyZSkuXG5cdCAqXG5cdCAqXHRJdCBpcyB1cCB0byB0aGUgY29tcG9zaXRvciB0byBwb3NpdGlvbiB0aGUgc3VyZmFjZSBhZnRlciBpdCB3YXNcblx0ICpcdHVubWF4aW1pemVkOyB1c3VhbGx5IHRoZSBwb3NpdGlvbiB0aGUgc3VyZmFjZSBoYWQgYmVmb3JlIG1heGltaXppbmcsIGlmXG5cdCAqXHRhcHBsaWNhYmxlLlxuXHQgKlxuXHQgKlx0SWYgdGhlIHN1cmZhY2Ugd2FzIGFscmVhZHkgbm90IG1heGltaXplZCwgdGhlIGNvbXBvc2l0b3Igd2lsbCBzdGlsbFxuXHQgKlx0ZW1pdCBhIGNvbmZpZ3VyZSBldmVudCB3aXRob3V0IHRoZSBcIm1heGltaXplZFwiIHN0YXRlLlxuXHQgKlxuXHQgKlx0SWYgdGhlIHN1cmZhY2UgaXMgaW4gYSBmdWxsc2NyZWVuIHN0YXRlLCB0aGlzIHJlcXVlc3QgaGFzIG5vIGRpcmVjdFxuXHQgKlx0ZWZmZWN0LiBJdCB3aWxsIGFsdGVyIHRoZSBzdGF0ZSB0aGUgc3VyZmFjZSBpcyByZXR1cm5lZCB0byB3aGVuXG5cdCAqXHR1bm1heGltaXplZCBpZiBub3Qgb3ZlcnJpZGRlbiBieSB0aGUgY29tcG9zaXRvci5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHVuc2V0TWF4aW1pemVkICgpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxMCwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdE1ha2UgdGhlIHN1cmZhY2UgZnVsbHNjcmVlbi5cblx0ICpcblx0ICpcdEFmdGVyIHJlcXVlc3RpbmcgdGhhdCB0aGUgc3VyZmFjZSBzaG91bGQgYmUgZnVsbHNjcmVlbmVkLCB0aGVcblx0ICpcdGNvbXBvc2l0b3Igd2lsbCByZXNwb25kIGJ5IGVtaXR0aW5nIGEgY29uZmlndXJlIGV2ZW50IHdpdGggdGhlXG5cdCAqXHRcImZ1bGxzY3JlZW5cIiBzdGF0ZSBhbmQgdGhlIGZ1bGxzY3JlZW4gd2luZG93IGdlb21ldHJ5LiBUaGUgY2xpZW50IG11c3Rcblx0ICpcdGFsc28gYWNrbm93bGVkZ2UgdGhlIGNvbmZpZ3VyZSB3aGVuIGNvbW1pdHRpbmcgdGhlIG5ldyBjb250ZW50IChzZWVcblx0ICpcdGFja19jb25maWd1cmUpLlxuXHQgKlxuXHQgKlx0VGhlIG91dHB1dCBwYXNzZWQgYnkgdGhlIHJlcXVlc3QgaW5kaWNhdGVzIHRoZSBjbGllbnQncyBwcmVmZXJlbmNlIGFzXG5cdCAqXHR0byB3aGljaCBkaXNwbGF5IGl0IHNob3VsZCBiZSBzZXQgZnVsbHNjcmVlbiBvbi4gSWYgdGhpcyB2YWx1ZSBpcyBOVUxMLFxuXHQgKlx0aXQncyB1cCB0byB0aGUgY29tcG9zaXRvciB0byBjaG9vc2Ugd2hpY2ggZGlzcGxheSB3aWxsIGJlIHVzZWQgdG8gbWFwXG5cdCAqXHR0aGlzIHN1cmZhY2UuXG5cdCAqXG5cdCAqXHRJZiB0aGUgc3VyZmFjZSBkb2Vzbid0IGNvdmVyIHRoZSB3aG9sZSBvdXRwdXQsIHRoZSBjb21wb3NpdG9yIHdpbGxcblx0ICpcdHBvc2l0aW9uIHRoZSBzdXJmYWNlIGluIHRoZSBjZW50ZXIgb2YgdGhlIG91dHB1dCBhbmQgY29tcGVuc2F0ZSB3aXRoXG5cdCAqXHR3aXRoIGJvcmRlciBmaWxsIGNvdmVyaW5nIHRoZSByZXN0IG9mIHRoZSBvdXRwdXQuIFRoZSBjb250ZW50IG9mIHRoZVxuXHQgKlx0Ym9yZGVyIGZpbGwgaXMgdW5kZWZpbmVkLCBidXQgc2hvdWxkIGJlIGFzc3VtZWQgdG8gYmUgaW4gc29tZSB3YXkgdGhhdFxuXHQgKlx0YXR0ZW1wdHMgdG8gYmxlbmQgaW50byB0aGUgc3Vycm91bmRpbmcgYXJlYSAoZS5nLiBzb2xpZCBibGFjaykuXG5cdCAqXG5cdCAqXHRJZiB0aGUgZnVsbHNjcmVlbmVkIHN1cmZhY2UgaXMgbm90IG9wYXF1ZSwgdGhlIGNvbXBvc2l0b3IgbXVzdCBtYWtlXG5cdCAqXHRzdXJlIHRoYXQgb3RoZXIgc2NyZWVuIGNvbnRlbnQgbm90IHBhcnQgb2YgdGhlIHNhbWUgc3VyZmFjZSB0cmVlIChtYWRlXG5cdCAqXHR1cCBvZiBzdWJzdXJmYWNlcywgcG9wdXBzIG9yIHNpbWlsYXJseSBjb3VwbGVkIHN1cmZhY2VzKSBhcmUgbm90XG5cdCAqXHR2aXNpYmxlIGJlbG93IHRoZSBmdWxsc2NyZWVuZWQgc3VyZmFjZS5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHs/Kn0gb3V0cHV0ICBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdHNldEZ1bGxzY3JlZW4gKG91dHB1dCkge1xuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDExLCBbb2JqZWN0T3B0aW9uYWwob3V0cHV0KV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdE1ha2UgdGhlIHN1cmZhY2Ugbm8gbG9uZ2VyIGZ1bGxzY3JlZW4uXG5cdCAqXG5cdCAqXHRBZnRlciByZXF1ZXN0aW5nIHRoYXQgdGhlIHN1cmZhY2Ugc2hvdWxkIGJlIHVuZnVsbHNjcmVlbmVkLCB0aGVcblx0ICpcdGNvbXBvc2l0b3Igd2lsbCByZXNwb25kIGJ5IGVtaXR0aW5nIGEgY29uZmlndXJlIGV2ZW50IHdpdGhvdXQgdGhlXG5cdCAqXHRcImZ1bGxzY3JlZW5cIiBzdGF0ZS5cblx0ICpcblx0ICpcdE1ha2luZyBhIHN1cmZhY2UgdW5mdWxsc2NyZWVuIHNldHMgc3RhdGVzIGZvciB0aGUgc3VyZmFjZSBiYXNlZCBvbiB0aGUgZm9sbG93aW5nOlxuXHQgKlx0KiB0aGUgc3RhdGUocykgaXQgbWF5IGhhdmUgaGFkIGJlZm9yZSBiZWNvbWluZyBmdWxsc2NyZWVuXG5cdCAqXHQqIGFueSBzdGF0ZShzKSBkZWNpZGVkIGJ5IHRoZSBjb21wb3NpdG9yXG5cdCAqXHQqIGFueSBzdGF0ZShzKSByZXF1ZXN0ZWQgYnkgdGhlIGNsaWVudCB3aGlsZSB0aGUgc3VyZmFjZSB3YXMgZnVsbHNjcmVlblxuXHQgKlxuXHQgKlx0VGhlIGNvbXBvc2l0b3IgbWF5IGluY2x1ZGUgdGhlIHByZXZpb3VzIHdpbmRvdyBnZW9tZXRyeSBkaW1lbnNpb25zIGluXG5cdCAqXHR0aGUgY29uZmlndXJlIGV2ZW50LCBpZiBhcHBsaWNhYmxlLlxuXHQgKlxuXHQgKlx0VGhlIGNsaWVudCBtdXN0IGFsc28gYWNrbm93bGVkZ2UgdGhlIGNvbmZpZ3VyZSB3aGVuIGNvbW1pdHRpbmcgdGhlIG5ld1xuXHQgKlx0Y29udGVudCAoc2VlIGFja19jb25maWd1cmUpLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0dW5zZXRGdWxsc2NyZWVuICgpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxMiwgW10pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFJlcXVlc3QgdGhhdCB0aGUgY29tcG9zaXRvciBtaW5pbWl6ZSB5b3VyIHN1cmZhY2UuIFRoZXJlIGlzIG5vXG5cdCAqXHR3YXkgdG8ga25vdyBpZiB0aGUgc3VyZmFjZSBpcyBjdXJyZW50bHkgbWluaW1pemVkLCBub3IgaXMgdGhlcmVcblx0ICpcdGFueSB3YXkgdG8gdW5zZXQgbWluaW1pemF0aW9uIG9uIHRoaXMgc3VyZmFjZS5cblx0ICpcblx0ICpcdElmIHlvdSBhcmUgbG9va2luZyB0byB0aHJvdHRsZSByZWRyYXdpbmcgd2hlbiBtaW5pbWl6ZWQsIHBsZWFzZVxuXHQgKlx0aW5zdGVhZCB1c2UgdGhlIHdsX3N1cmZhY2UuZnJhbWUgZXZlbnQgZm9yIHRoaXMsIGFzIHRoaXMgd2lsbFxuXHQgKlx0YWxzbyB3b3JrIHdpdGggbGl2ZSBwcmV2aWV3cyBvbiB3aW5kb3dzIGluIEFsdC1UYWIsIEV4cG9zZSBvclxuXHQgKlx0c2ltaWxhciBjb21wb3NpdG9yIGZlYXR1cmVzLlxuXHQgKiAgICAgIFxuXHQgKiBAc2luY2UgMVxuXHQgKlxuXHQgKi9cblx0c2V0TWluaW1pemVkICgpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAxMywgW10pXG5cdH1cblxuXHQvKipcblx0ICogRG8gbm90IGNvbnN0cnVjdCBwcm94aWVzIGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBvbmUgb2YgdGhlIGZhY3RvcnkgbWV0aG9kcyBmcm9tIG90aGVyIHByb3hpZXMuXG5cdCAqQHBhcmFtIHtEaXNwbGF5fWRpc3BsYXlcblx0ICpAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuXHQgKkBwYXJhbSB7bnVtYmVyfWlkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoZGlzcGxheSwgY29ubmVjdGlvbiwgaWQpIHtcblx0XHRzdXBlcihkaXNwbGF5LCBjb25uZWN0aW9uLCBpZClcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7WGRnVG9wbGV2ZWxFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5jb25maWd1cmUoaShtZXNzYWdlKSwgaShtZXNzYWdlKSwgYShtZXNzYWdlLCBmYWxzZSkpXG5cdH1cblxuXHRhc3luYyBbMV0gKG1lc3NhZ2UpIHtcblx0XHRhd2FpdCB0aGlzLmxpc3RlbmVyLmNsb3NlKClcblx0fVxuXG59XG5YZGdUb3BsZXZlbFByb3h5LnByb3RvY29sTmFtZSA9ICd4ZGdfdG9wbGV2ZWwnXG5cblhkZ1RvcGxldmVsUHJveHkuUmVzaXplRWRnZSA9IHtcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbm9uZTogMCxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgdG9wOiAxLFxuICAvKipcbiAgICogXG4gICAqL1xuICBib3R0b206IDIsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGxlZnQ6IDQsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHRvcExlZnQ6IDUsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGJvdHRvbUxlZnQ6IDYsXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHJpZ2h0OiA4LFxuICAvKipcbiAgICogXG4gICAqL1xuICB0b3BSaWdodDogOSxcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgYm90dG9tUmlnaHQ6IDEwXG59XG5cblhkZ1RvcGxldmVsUHJveHkuU3RhdGUgPSB7XG4gIC8qKlxuICAgKiB0aGUgc3VyZmFjZSBpcyBtYXhpbWl6ZWRcbiAgICovXG4gIG1heGltaXplZDogMSxcbiAgLyoqXG4gICAqIHRoZSBzdXJmYWNlIGlzIGZ1bGxzY3JlZW5cbiAgICovXG4gIGZ1bGxzY3JlZW46IDIsXG4gIC8qKlxuICAgKiB0aGUgc3VyZmFjZSBpcyBiZWluZyByZXNpemVkXG4gICAqL1xuICByZXNpemluZzogMyxcbiAgLyoqXG4gICAqIHRoZSBzdXJmYWNlIGlzIG5vdyBhY3RpdmF0ZWRcbiAgICovXG4gIGFjdGl2YXRlZDogNFxufVxuXG5leHBvcnQgZGVmYXVsdCBYZGdUb3BsZXZlbFByb3h5XG4iLCIvKlxuICpcbiAqICAgIENvcHlyaWdodCDCqSAyMDA4LTIwMTMgS3Jpc3RpYW4gSMO4Z3NiZXJnXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMyAgICAgIFJhZmFlbCBBbnRvZ25vbGxpXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMyAgICAgIEphc3BlciBTdC4gUGllcnJlXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxMC0yMDEzIEludGVsIENvcnBvcmF0aW9uXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFNhbXN1bmcgRWxlY3Ryb25pY3MgQ28uLCBMdGRcbiAqICAgIENvcHlyaWdodCDCqSAyMDE1LTIwMTcgUmVkIEhhdCBJbmMuXG4gKlxuICogICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqICAgIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqICAgIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqICAgIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogICAgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiAgICBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIChpbmNsdWRpbmcgdGhlIG5leHRcbiAqICAgIHBhcmFncmFwaCkgc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGVcbiAqICAgIFNvZnR3YXJlLlxuICpcbiAqICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiAgICBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqICAgIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqICBcbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWGRnV21CYXNlRXZlbnRzIHtcblxuXHQvKipcblx0ICpcblx0ICpcdFRoZSBwaW5nIGV2ZW50IGFza3MgdGhlIGNsaWVudCBpZiBpdCdzIHN0aWxsIGFsaXZlLiBQYXNzIHRoZVxuXHQgKlx0c2VyaWFsIHNwZWNpZmllZCBpbiB0aGUgZXZlbnQgYmFjayB0byB0aGUgY29tcG9zaXRvciBieSBzZW5kaW5nXG5cdCAqXHRhIFwicG9uZ1wiIHJlcXVlc3QgYmFjayB3aXRoIHRoZSBzcGVjaWZpZWQgc2VyaWFsLiBTZWUgeGRnX3dtX2Jhc2UucGluZy5cblx0ICpcblx0ICpcdENvbXBvc2l0b3JzIGNhbiB1c2UgdGhpcyB0byBkZXRlcm1pbmUgaWYgdGhlIGNsaWVudCBpcyBzdGlsbFxuXHQgKlx0YWxpdmUuIEl0J3MgdW5zcGVjaWZpZWQgd2hhdCB3aWxsIGhhcHBlbiBpZiB0aGUgY2xpZW50IGRvZXNuJ3Rcblx0ICpcdHJlc3BvbmQgdG8gdGhlIHBpbmcgcmVxdWVzdCwgb3IgaW4gd2hhdCB0aW1lZnJhbWUuIENsaWVudHMgc2hvdWxkXG5cdCAqXHR0cnkgdG8gcmVzcG9uZCBpbiBhIHJlYXNvbmFibGUgYW1vdW50IG9mIHRpbWUuXG5cdCAqXG5cdCAqXHRBIGNvbXBvc2l0b3IgaXMgZnJlZSB0byBwaW5nIGluIGFueSB3YXkgaXQgd2FudHMsIGJ1dCBhIGNsaWVudCBtdXN0XG5cdCAqXHRhbHdheXMgcmVzcG9uZCB0byBhbnkgeGRnX3dtX2Jhc2Ugb2JqZWN0IGl0IGNyZWF0ZWQuXG5cdCAqICAgICAgXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgcGFzcyB0aGlzIHRvIHRoZSBwb25nIHJlcXVlc3QgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRwaW5nKHNlcmlhbCkge31cbn1cblxuIiwiLypcbiAqXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAwOC0yMDEzIEtyaXN0aWFuIEjDuGdzYmVyZ1xuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBSYWZhZWwgQW50b2dub2xsaVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTMgICAgICBKYXNwZXIgU3QuIFBpZXJyZVxuICogICAgQ29weXJpZ2h0IMKpIDIwMTAtMjAxMyBJbnRlbCBDb3Jwb3JhdGlvblxuICogICAgQ29weXJpZ2h0IMKpIDIwMTUtMjAxNyBTYW1zdW5nIEVsZWN0cm9uaWNzIENvLiwgTHRkXG4gKiAgICBDb3B5cmlnaHQgwqkgMjAxNS0yMDE3IFJlZCBIYXQgSW5jLlxuICpcbiAqICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiAgICBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiAgICB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiAgICB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqICAgIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSAoaW5jbHVkaW5nIHRoZSBuZXh0XG4gKiAgICBwYXJhZ3JhcGgpIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlXG4gKiAgICBTb2Z0d2FyZS5cbiAqXG4gKiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogICAgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiAgICBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiAgXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNvbW1vbidcbmNvbnN0IHsgdWludCwgdWludE9wdGlvbmFsLCBpbnQsIGludE9wdGlvbmFsLCBmaXhlZCwgXG5cdGZpeGVkT3B0aW9uYWwsIG9iamVjdCwgb2JqZWN0T3B0aW9uYWwsIG5ld09iamVjdCwgc3RyaW5nLCBcblx0c3RyaW5nT3B0aW9uYWwsIGFycmF5LCBhcnJheU9wdGlvbmFsLCBcblx0ZmlsZURlc2NyaXB0b3JPcHRpb25hbCwgZmlsZURlc2NyaXB0b3IsIFxuaCwgdSwgaSwgZiwgbywgbiwgcywgYSB9ID0gQ29ubmVjdGlvblxuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknXG5pbXBvcnQgWGRnUG9zaXRpb25lclByb3h5IGZyb20gJy4vWGRnUG9zaXRpb25lclByb3h5J1xuaW1wb3J0IFhkZ1N1cmZhY2VQcm94eSBmcm9tICcuL1hkZ1N1cmZhY2VQcm94eSdcblxuLyoqXG4gKlxuICogICAgICBUaGUgeGRnX3dtX2Jhc2UgaW50ZXJmYWNlIGlzIGV4cG9zZWQgYXMgYSBnbG9iYWwgb2JqZWN0IGVuYWJsaW5nIGNsaWVudHNcbiAqICAgICAgdG8gdHVybiB0aGVpciB3bF9zdXJmYWNlcyBpbnRvIHdpbmRvd3MgaW4gYSBkZXNrdG9wIGVudmlyb25tZW50LiBJdFxuICogICAgICBkZWZpbmVzIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXR5IG5lZWRlZCBmb3IgY2xpZW50cyBhbmQgdGhlIGNvbXBvc2l0b3IgdG9cbiAqICAgICAgY3JlYXRlIHdpbmRvd3MgdGhhdCBjYW4gYmUgZHJhZ2dlZCwgcmVzaXplZCwgbWF4aW1pemVkLCBldGMsIGFzIHdlbGwgYXNcbiAqICAgICAgY3JlYXRpbmcgdHJhbnNpZW50IHdpbmRvd3Mgc3VjaCBhcyBwb3B1cCBtZW51cy5cbiAqICAgIFxuICovXG5jbGFzcyBYZGdXbUJhc2VQcm94eSBleHRlbmRzIFByb3h5IHtcblxuXHQvKipcblx0ICpcblx0ICpcdERlc3Ryb3kgdGhpcyB4ZGdfd21fYmFzZSBvYmplY3QuXG5cdCAqXG5cdCAqXHREZXN0cm95aW5nIGEgYm91bmQgeGRnX3dtX2Jhc2Ugb2JqZWN0IHdoaWxlIHRoZXJlIGFyZSBzdXJmYWNlc1xuXHQgKlx0c3RpbGwgYWxpdmUgY3JlYXRlZCBieSB0aGlzIHhkZ193bV9iYXNlIG9iamVjdCBpbnN0YW5jZSBpcyBpbGxlZ2FsXG5cdCAqXHRhbmQgd2lsbCByZXN1bHQgaW4gYSBwcm90b2NvbCBlcnJvci5cblx0ICogICAgICBcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGRlc3Ryb3kgKCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMuX21hcnNoYWxsKHRoaXMuaWQsIDAsIFtdKVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqXHRDcmVhdGUgYSBwb3NpdGlvbmVyIG9iamVjdC4gQSBwb3NpdGlvbmVyIG9iamVjdCBpcyB1c2VkIHRvIHBvc2l0aW9uXG5cdCAqXHRzdXJmYWNlcyByZWxhdGl2ZSB0byBzb21lIHBhcmVudCBzdXJmYWNlLiBTZWUgdGhlIGludGVyZmFjZSBkZXNjcmlwdGlvblxuXHQgKlx0YW5kIHhkZ19zdXJmYWNlLmdldF9wb3B1cCBmb3IgZGV0YWlscy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHJldHVybiB7WGRnUG9zaXRpb25lclByb3h5fSAgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRjcmVhdGVQb3NpdGlvbmVyICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAxLCBYZGdQb3NpdGlvbmVyUHJveHksIFtuZXdPYmplY3QoKV0pXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICpcdFRoaXMgY3JlYXRlcyBhbiB4ZGdfc3VyZmFjZSBmb3IgdGhlIGdpdmVuIHN1cmZhY2UuIFdoaWxlIHhkZ19zdXJmYWNlXG5cdCAqXHRpdHNlbGYgaXMgbm90IGEgcm9sZSwgdGhlIGNvcnJlc3BvbmRpbmcgc3VyZmFjZSBtYXkgb25seSBiZSBhc3NpZ25lZFxuXHQgKlx0YSByb2xlIGV4dGVuZGluZyB4ZGdfc3VyZmFjZSwgc3VjaCBhcyB4ZGdfdG9wbGV2ZWwgb3IgeGRnX3BvcHVwLlxuXHQgKlxuXHQgKlx0VGhpcyBjcmVhdGVzIGFuIHhkZ19zdXJmYWNlIGZvciB0aGUgZ2l2ZW4gc3VyZmFjZS4gQW4geGRnX3N1cmZhY2UgaXNcblx0ICpcdHVzZWQgYXMgYmFzaXMgdG8gZGVmaW5lIGEgcm9sZSB0byBhIGdpdmVuIHN1cmZhY2UsIHN1Y2ggYXMgeGRnX3RvcGxldmVsXG5cdCAqXHRvciB4ZGdfcG9wdXAuIEl0IGFsc28gbWFuYWdlcyBmdW5jdGlvbmFsaXR5IHNoYXJlZCBiZXR3ZWVuIHhkZ19zdXJmYWNlXG5cdCAqXHRiYXNlZCBzdXJmYWNlIHJvbGVzLlxuXHQgKlxuXHQgKlx0U2VlIHRoZSBkb2N1bWVudGF0aW9uIG9mIHhkZ19zdXJmYWNlIGZvciBtb3JlIGRldGFpbHMgYWJvdXQgd2hhdCBhblxuXHQgKlx0eGRnX3N1cmZhY2UgaXMgYW5kIGhvdyBpdCBpcyB1c2VkLlxuXHQgKiAgICAgIFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHN1cmZhY2UgIFxuXHQgKiBAcmV0dXJuIHtYZGdTdXJmYWNlUHJveHl9ICBcblx0ICpcblx0ICogQHNpbmNlIDFcblx0ICpcblx0ICovXG5cdGdldFhkZ1N1cmZhY2UgKHN1cmZhY2UpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFyc2hhbGxDb25zdHJ1Y3Rvcih0aGlzLmlkLCAyLCBYZGdTdXJmYWNlUHJveHksIFtuZXdPYmplY3QoKSwgb2JqZWN0KHN1cmZhY2UpXSlcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKlx0QSBjbGllbnQgbXVzdCByZXNwb25kIHRvIGEgcGluZyBldmVudCB3aXRoIGEgcG9uZyByZXF1ZXN0IG9yXG5cdCAqXHR0aGUgY2xpZW50IG1heSBiZSBkZWVtZWQgdW5yZXNwb25zaXZlLiBTZWUgeGRnX3dtX2Jhc2UucGluZy5cblx0ICogICAgICBcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlcmlhbCBzZXJpYWwgb2YgdGhlIHBpbmcgZXZlbnQgXG5cdCAqXG5cdCAqIEBzaW5jZSAxXG5cdCAqXG5cdCAqL1xuXHRwb25nIChzZXJpYWwpIHtcblx0XHR0aGlzLl9tYXJzaGFsbCh0aGlzLmlkLCAzLCBbdWludChzZXJpYWwpXSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEbyBub3QgY29uc3RydWN0IHByb3hpZXMgZGlyZWN0bHkuIEluc3RlYWQgdXNlIG9uZSBvZiB0aGUgZmFjdG9yeSBtZXRob2RzIGZyb20gb3RoZXIgcHJveGllcy5cblx0ICpAcGFyYW0ge0Rpc3BsYXl9ZGlzcGxheVxuXHQgKkBwYXJhbSB7Q29ubmVjdGlvbn1jb25uZWN0aW9uXG5cdCAqQHBhcmFtIHtudW1iZXJ9aWRcblx0ICovXG5cdGNvbnN0cnVjdG9yIChkaXNwbGF5LCBjb25uZWN0aW9uLCBpZCkge1xuXHRcdHN1cGVyKGRpc3BsYXksIGNvbm5lY3Rpb24sIGlkKVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtYZGdXbUJhc2VFdmVudHN8bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3RlbmVyID0gbnVsbFxuXHR9XG5cblx0YXN5bmMgWzBdIChtZXNzYWdlKSB7XG5cdFx0YXdhaXQgdGhpcy5saXN0ZW5lci5waW5nKHUobWVzc2FnZSkpXG5cdH1cblxufVxuWGRnV21CYXNlUHJveHkucHJvdG9jb2xOYW1lID0gJ3hkZ193bV9iYXNlJ1xuXG5YZGdXbUJhc2VQcm94eS5FcnJvciA9IHtcbiAgLyoqXG4gICAqIGdpdmVuIHdsX3N1cmZhY2UgaGFzIGFub3RoZXIgcm9sZVxuICAgKi9cbiAgcm9sZTogMCxcbiAgLyoqXG4gICAqIHhkZ193bV9iYXNlIHdhcyBkZXN0cm95ZWQgYmVmb3JlIGNoaWxkcmVuXG4gICAqL1xuICBkZWZ1bmN0U3VyZmFjZXM6IDEsXG4gIC8qKlxuICAgKiB0aGUgY2xpZW50IHRyaWVkIHRvIG1hcCBvciBkZXN0cm95IGEgbm9uLXRvcG1vc3QgcG9wdXBcbiAgICovXG4gIG5vdFRoZVRvcG1vc3RQb3B1cDogMixcbiAgLyoqXG4gICAqIHRoZSBjbGllbnQgc3BlY2lmaWVkIGFuIGludmFsaWQgcG9wdXAgcGFyZW50IHN1cmZhY2VcbiAgICovXG4gIGludmFsaWRQb3B1cFBhcmVudDogMyxcbiAgLyoqXG4gICAqIHRoZSBjbGllbnQgcHJvdmlkZWQgYW4gaW52YWxpZCBzdXJmYWNlIHN0YXRlXG4gICAqL1xuICBpbnZhbGlkU3VyZmFjZVN0YXRlOiA0LFxuICAvKipcbiAgICogdGhlIGNsaWVudCBwcm92aWRlZCBhbiBpbnZhbGlkIHBvc2l0aW9uZXJcbiAgICovXG4gIGludmFsaWRQb3NpdGlvbmVyOiA1XG59XG5cbmV4cG9ydCBkZWZhdWx0IFhkZ1dtQmFzZVByb3h5XG4iLCJpbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL3NyYy9Db25uZWN0aW9uJ1xuaW1wb3J0IEZpeGVkIGZyb20gJy4vc3JjL0ZpeGVkJ1xuaW1wb3J0IFdlYkZEIGZyb20gJy4vc3JjL1dlYkZEJ1xuaW1wb3J0IFdsT2JqZWN0IGZyb20gJy4vc3JjL1dsT2JqZWN0J1xuXG5leHBvcnQge1xuICBDb25uZWN0aW9uLFxuICBGaXhlZCxcbiAgV2ViRkQsXG4gIFdsT2JqZWN0XG59IiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgMjAxNyBFcmlrIERlIFJpamNrZVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG5cbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgRml4ZWQgZnJvbSAnLi9GaXhlZCdcblxuY2xhc3MgQ29ubmVjdGlvbiB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IG51bWJlciwgdHlwZTogJ3UnLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICovXG4gIHN0YXRpYyB1aW50IChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICd1JyxcbiAgICAgIHNpemU6IDQsXG4gICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIG5ldyBVaW50MzJBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQsIDEpWzBdID0gdGhpcy52YWx1ZVxuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiBudW1iZXIsIHR5cGU6ICd1Jywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqXG4gICAqL1xuICBzdGF0aWMgdWludE9wdGlvbmFsIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICd1JyxcbiAgICAgIHNpemU6IDQsXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSAoYXJnID09PSBudWxsID8gMCA6IHRoaXMudmFsdWUpXG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1dlYkZEfSBhcmdcbiAgICogQHJldHVybnMge3t2YWx1ZTogbnVtYmVyLCB0eXBlOiAnaCcsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKlxuICAgKi9cbiAgc3RhdGljIGZpbGVEZXNjcmlwdG9yIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdoJyxcbiAgICAgIHNpemU6IDAsIC8vIGZpbGUgZGVzY3JpcHRvcnMgYXJlIG5vdCBhZGRlZCB0byB0aGUgbWVzc2FnZSBzaXplIGJlY2F1c2UgdGhleSBhcmUgc29tZXdoYXQgY29uc2lkZXJlZCBtZXRhIGRhdGEuXG4gICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIHdpcmVNc2cuZmRzLnB1c2godGhpcy52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiBudW1iZXIsIHR5cGU6ICdoJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqXG4gICAqL1xuICBzdGF0aWMgZmlsZURlc2NyaXB0b3JPcHRpb25hbCAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBhcmcsXG4gICAgICB0eXBlOiAnaCcsXG4gICAgICBzaXplOiAwLCAvLyBmaWxlIGRlc2NyaXB0b3JzIGFyZSBub3QgYWRkZWQgdG8gdGhlIG1lc3NhZ2Ugc2l6ZSBiZWNhdXNlIHRoZXkgYXJlIG5vdCBwYXJ0IG9mIHRoZSB1bml4IHNvY2tldCBtZXNzYWdlIGJ1ZmZlci5cbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICB3aXJlTXNnLmZkcy5wdXNoKHRoaXMudmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhcmdcbiAgICogQHJldHVybnMge3t2YWx1ZTogbnVtYmVyLCB0eXBlOiAnaScsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKlxuICAgKi9cbiAgc3RhdGljIGludCAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBhcmcsXG4gICAgICB0eXBlOiAnaScsXG4gICAgICBzaXplOiA0LFxuICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICBuZXcgSW50MzJBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQsIDEpWzBdID0gdGhpcy52YWx1ZVxuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiBudW1iZXIsIHR5cGU6ICdpJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqXG4gICAqL1xuICBzdGF0aWMgaW50T3B0aW9uYWwgKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogYXJnLFxuICAgICAgdHlwZTogJ2knLFxuICAgICAgc2l6ZTogNCxcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICBuZXcgSW50MzJBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQsIDEpWzBdID0gKGFyZyA9PT0gbnVsbCA/IDAgOiB0aGlzLnZhbHVlKVxuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtGaXhlZH0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IEZpeGVkLCB0eXBlOiAnZicsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKi9cbiAgc3RhdGljIGZpeGVkIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdmJyxcbiAgICAgIHNpemU6IDQsXG4gICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIG5ldyBJbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSB0aGlzLnZhbHVlLl9yYXdcbiAgICAgICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgKz0gdGhpcy5zaXplXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7Rml4ZWR9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiBGaXhlZCwgdHlwZTogJ2YnLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICovXG4gIHN0YXRpYyBmaXhlZE9wdGlvbmFsIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdmJyxcbiAgICAgIHNpemU6IDQsXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgbmV3IEludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IChhcmcgPT09IG51bGwgPyAwIDogdGhpcy52YWx1ZS5fcmF3KVxuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtSZXNvdXJjZX0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IFJlc291cmNlLCB0eXBlOiAnbycsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKlxuICAgKi9cbiAgc3RhdGljIG9iamVjdCAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBhcmcsXG4gICAgICB0eXBlOiAnbycsXG4gICAgICBzaXplOiA0LFxuICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IHRoaXMudmFsdWUuaWRcbiAgICAgICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgKz0gdGhpcy5zaXplXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7UmVzb3VyY2V9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiBSZXNvdXJjZSwgdHlwZTogJ28nLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICpcbiAgICovXG4gIHN0YXRpYyBvYmplY3RPcHRpb25hbCAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBhcmcsXG4gICAgICB0eXBlOiAnbycsXG4gICAgICBzaXplOiA0LFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIG5ldyBVaW50MzJBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQsIDEpWzBdID0gKGFyZyA9PT0gbnVsbCA/IDAgOiB0aGlzLnZhbHVlLmlkKVxuICAgICAgICB3aXJlTXNnLmJ1ZmZlck9mZnNldCArPSB0aGlzLnNpemVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3t2YWx1ZTogbnVtYmVyLCB0eXBlOiAnbicsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKi9cbiAgc3RhdGljIG5ld09iamVjdCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAwLCAvLyBpZCBmaWxsZWQgaW4gYnkgX21hcnNoYWxsQ29uc3RydWN0b3JcbiAgICAgIHR5cGU6ICduJyxcbiAgICAgIHNpemU6IDQsXG4gICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSB0aGlzLnZhbHVlXG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6IHN0cmluZywgdHlwZTogJ3MnLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICpcbiAgICovXG4gIHN0YXRpYyBzdHJpbmcgKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogYCR7YXJnfVxcMGAsXG4gICAgICB0eXBlOiAncycsXG4gICAgICBzaXplOiA0ICsgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZmFuY3kgbG9naWMgdG8gY2FsY3VsYXRlIHNpemUgd2l0aCBwYWRkaW5nIHRvIGEgbXVsdGlwbGUgb2YgNCBieXRlcyAoaW50KS5cbiAgICAgICAgLy8gbGVuZ3RoKzEgZm9yIG51bGwgdGVybWluYXRvclxuICAgICAgICByZXR1cm4gKGFyZy5sZW5ndGggKyAxICsgMykgJiB+M1xuICAgICAgfSkoKSxcbiAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX0gd2lyZU1zZ1xuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX21hcnNoYWxsQXJnOiBmdW5jdGlvbiAod2lyZU1zZykge1xuICAgICAgICBuZXcgVWludDMyQXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0LCAxKVswXSA9IHRoaXMudmFsdWUubGVuZ3RoXG5cbiAgICAgICAgY29uc3Qgc3RyTGVuID0gdGhpcy52YWx1ZS5sZW5ndGhcbiAgICAgICAgY29uc3QgYnVmOCA9IG5ldyBVaW50OEFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCArIDQsIHN0ckxlbilcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJMZW47IGkrKykge1xuICAgICAgICAgIGJ1ZjhbaV0gPSB0aGlzLnZhbHVlW2ldLmNvZGVQb2ludEF0KDApXG4gICAgICAgIH1cbiAgICAgICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgKz0gdGhpcy5zaXplXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcmdcbiAgICogQHJldHVybnMge3t2YWx1ZTogKiwgdHlwZTogJ3MnLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfX1cbiAgICpcbiAgICovXG4gIHN0YXRpYyBzdHJpbmdPcHRpb25hbCAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBgJHthcmd9XFwwYCxcbiAgICAgIHR5cGU6ICdzJyxcbiAgICAgIHNpemU6IDQgKyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXJnID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBmYW5jeSBsb2dpYyB0byBjYWxjdWxhdGUgc2l6ZSB3aXRoIHBhZGRpbmcgdG8gYSBtdWx0aXBsZSBvZiA0IGJ5dGVzIChpbnQpLlxuICAgICAgICAgIC8vIGxlbmd0aCsxIGZvciBudWxsIHRlcm1pbmF0b3JcbiAgICAgICAgICByZXR1cm4gKGFyZy5sZW5ndGggKyAxICsgMykgJiB+M1xuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9fSB3aXJlTXNnXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSB0aGlzLnZhbHVlLmxlbmd0aFxuXG4gICAgICAgICAgY29uc3Qgc3RyTGVuID0gdGhpcy52YWx1ZS5sZW5ndGhcbiAgICAgICAgICBjb25zdCBidWY4ID0gbmV3IFVpbnQ4QXJyYXkod2lyZU1zZy5idWZmZXIsIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICsgNCwgc3RyTGVuKVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyTGVuOyBpKyspIHtcbiAgICAgICAgICAgIGJ1ZjhbaV0gPSB0aGlzLnZhbHVlW2ldLmNvZGVQb2ludEF0KDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1R5cGVkQXJyYXl9IGFyZ1xuICAgKiBAcmV0dXJucyB7e3ZhbHVlOiAqLCB0eXBlOiAnYScsIHNpemU6IG51bWJlciwgb3B0aW9uYWw6IGJvb2xlYW4sIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24oe2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn0pOnZvaWR9fVxuICAgKlxuICAgKi9cbiAgc3RhdGljIGFycmF5IChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGFyZyxcbiAgICAgIHR5cGU6ICdhJyxcbiAgICAgIHNpemU6IDQgKyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBmYW5jeSBsb2dpYyB0byBjYWxjdWxhdGUgc2l6ZSB3aXRoIHBhZGRpbmcgdG8gYSBtdWx0aXBsZSBvZiA0IGJ5dGVzIChpbnQpLlxuICAgICAgICByZXR1cm4gKGFyZy5ieXRlTGVuZ3RoICsgMykgJiB+M1xuICAgICAgfSkoKSxcbiAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7e2J1ZmZlcjogQXJyYXlCdWZmZXIsIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlcn19IHdpcmVNc2dcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9tYXJzaGFsbEFyZzogZnVuY3Rpb24gKHdpcmVNc2cpIHtcbiAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSB0aGlzLnZhbHVlLmJ5dGVMZW5ndGhcblxuICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gdGhpcy52YWx1ZS5ieXRlTGVuZ3RoXG4gICAgICAgIG5ldyBVaW50OEFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCArIDQsIGJ5dGVMZW5ndGgpLnNldChuZXcgVWludDhBcnJheSh0aGlzLnZhbHVlLmJ1ZmZlciwgMCwgYnl0ZUxlbmd0aCkpXG5cbiAgICAgICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgKz0gdGhpcy5zaXplXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7VHlwZWRBcnJheX0gYXJnXG4gICAqIEByZXR1cm5zIHt7dmFsdWU6ICosIHR5cGU6ICdhJywgc2l6ZTogbnVtYmVyLCBvcHRpb25hbDogYm9vbGVhbiwgX21hcnNoYWxsQXJnOiBmdW5jdGlvbih7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfSk6dm9pZH19XG4gICAqXG4gICAqL1xuICBzdGF0aWMgYXJyYXlPcHRpb25hbCAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBhcmcsXG4gICAgICB0eXBlOiAnYScsXG4gICAgICBzaXplOiA0ICsgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFyZyA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZmFuY3kgbG9naWMgdG8gY2FsY3VsYXRlIHNpemUgd2l0aCBwYWRkaW5nIHRvIGEgbXVsdGlwbGUgb2YgNCBieXRlcyAoaW50KS5cbiAgICAgICAgICByZXR1cm4gKGFyZy5ieXRlTGVuZ3RoICsgMykgJiB+M1xuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uICh3aXJlTXNnKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3IFVpbnQzMkFycmF5KHdpcmVNc2cuYnVmZmVyLCB3aXJlTXNnLmJ1ZmZlck9mZnNldCwgMSlbMF0gPSB0aGlzLnZhbHVlLmJ5dGVMZW5ndGhcblxuICAgICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSB0aGlzLnZhbHVlLmJ5dGVMZW5ndGhcbiAgICAgICAgICBuZXcgVWludDhBcnJheSh3aXJlTXNnLmJ1ZmZlciwgd2lyZU1zZy5idWZmZXJPZmZzZXQgKyA0LCBieXRlTGVuZ3RoKS5zZXQobmV3IFVpbnQ4QXJyYXkodGhpcy52YWx1ZS5idWZmZXIsIDAsIGJ5dGVMZW5ndGgpKVxuICAgICAgICB9XG4gICAgICAgIHdpcmVNc2cuYnVmZmVyT2Zmc2V0ICs9IHRoaXMuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19IG1lc3NhZ2VcbiAgICogQHBhcmFtIHtudW1iZXJ9Y29uc3VtcHRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBfY2hlY2tNZXNzYWdlU2l6ZSAobWVzc2FnZSwgY29uc3VtcHRpb24pIHtcbiAgICBpZiAobWVzc2FnZS5jb25zdW1lZCArIGNvbnN1bXB0aW9uID4gbWVzc2FnZS5zaXplKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3QgdG9vIHNob3J0LmApXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29uc3VtZWQgKz0gY29uc3VtcHRpb25cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHt7YnVmZmVyOiBVaW50MzJBcnJheSwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyLCBjb25zdW1lZDogbnVtYmVyLCBzaXplOiBudW1iZXJ9fSBtZXNzYWdlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgdSAobWVzc2FnZSkgeyAvLyB1bnNpZ25lZCBpbnRlZ2VyIHtudW1iZXJ9XG4gICAgQ29ubmVjdGlvbi5fY2hlY2tNZXNzYWdlU2l6ZShtZXNzYWdlLCA0KVxuICAgIHJldHVybiBtZXNzYWdlLmJ1ZmZlclttZXNzYWdlLmJ1ZmZlck9mZnNldCsrXVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7e2J1ZmZlcjogVWludDMyQXJyYXksIGZkczogQXJyYXk8V2ViRkQ+LCBidWZmZXJPZmZzZXQ6IG51bWJlciwgY29uc3VtZWQ6IG51bWJlciwgc2l6ZTogbnVtYmVyfX0gbWVzc2FnZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGkgKG1lc3NhZ2UpIHtcbiAgICBDb25uZWN0aW9uLl9jaGVja01lc3NhZ2VTaXplKG1lc3NhZ2UsIDQpXG4gICAgY29uc3QgYXJnID0gbmV3IEludDMyQXJyYXkobWVzc2FnZS5idWZmZXIuYnVmZmVyLCBtZXNzYWdlLmJ1ZmZlci5ieXRlT2Zmc2V0ICsgKG1lc3NhZ2UuYnVmZmVyT2Zmc2V0ICogVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQpLCAxKVswXVxuICAgIG1lc3NhZ2UuYnVmZmVyT2Zmc2V0ICs9IDFcbiAgICByZXR1cm4gYXJnXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHt7YnVmZmVyOiBVaW50MzJBcnJheSwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyLCBjb25zdW1lZDogbnVtYmVyLCBzaXplOiBudW1iZXJ9fSBtZXNzYWdlXG4gICAqIEByZXR1cm5zIHtGaXhlZH1cbiAgICovXG4gIHN0YXRpYyBmIChtZXNzYWdlKSB7XG4gICAgQ29ubmVjdGlvbi5fY2hlY2tNZXNzYWdlU2l6ZShtZXNzYWdlLCA0KVxuICAgIGNvbnN0IGFyZyA9IG5ldyBJbnQzMkFycmF5KG1lc3NhZ2UuYnVmZmVyLmJ1ZmZlciwgbWVzc2FnZS5idWZmZXIuYnl0ZU9mZnNldCArIChtZXNzYWdlLmJ1ZmZlck9mZnNldCAqIFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSwgMSlbMF1cbiAgICBtZXNzYWdlLmJ1ZmZlck9mZnNldCArPSAxXG4gICAgcmV0dXJuIG5ldyBGaXhlZChhcmcgPj4gMClcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19IG1lc3NhZ2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25hbFxuICAgKiBAcGFyYW0ge0Nvbm5lY3Rpb259Y29ubmVjdGlvblxuICAgKiBAcmV0dXJucyB7V2xPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgbyAobWVzc2FnZSwgb3B0aW9uYWwsIGNvbm5lY3Rpb24pIHtcbiAgICBDb25uZWN0aW9uLl9jaGVja01lc3NhZ2VTaXplKG1lc3NhZ2UsIDQpXG4gICAgY29uc3QgYXJnID0gbWVzc2FnZS5idWZmZXJbbWVzc2FnZS5idWZmZXJPZmZzZXQrK11cbiAgICBpZiAob3B0aW9uYWwgJiYgYXJnID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3bE9iamVjdCA9IGNvbm5lY3Rpb24ud2xPYmplY3RzW2FyZ11cbiAgICAgIGlmICh3bE9iamVjdCkge1xuICAgICAgICByZXR1cm4gd2xPYmplY3RcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBvYmplY3QgaWQgJHthcmd9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHt7YnVmZmVyOiBVaW50MzJBcnJheSwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyLCBjb25zdW1lZDogbnVtYmVyLCBzaXplOiBudW1iZXJ9fSBtZXNzYWdlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgbiAobWVzc2FnZSkge1xuICAgIENvbm5lY3Rpb24uX2NoZWNrTWVzc2FnZVNpemUobWVzc2FnZSwgNClcbiAgICByZXR1cm4gbWVzc2FnZS5idWZmZXJbbWVzc2FnZS5idWZmZXJPZmZzZXQrK11cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19IG1lc3NhZ2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25hbFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHMgKG1lc3NhZ2UsIG9wdGlvbmFsKSB7IC8vIHtTdHJpbmd9XG4gICAgQ29ubmVjdGlvbi5fY2hlY2tNZXNzYWdlU2l6ZShtZXNzYWdlLCA0KVxuICAgIGNvbnN0IHN0cmluZ1NpemUgPSBtZXNzYWdlLmJ1ZmZlclttZXNzYWdlLmJ1ZmZlck9mZnNldCsrXVxuICAgIGlmIChvcHRpb25hbCAmJiBzdHJpbmdTaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbGlnbmVkU2l6ZSA9ICgoc3RyaW5nU2l6ZSArIDMpICYgfjMpXG4gICAgICBDb25uZWN0aW9uLl9jaGVja01lc3NhZ2VTaXplKG1lc3NhZ2UsIGFsaWduZWRTaXplKVxuICAgICAgLy8gc2l6ZSAtMSB0byBlbGltaW5hdGUgbnVsbCBieXRlXG4gICAgICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShtZXNzYWdlLmJ1ZmZlci5idWZmZXIsIG1lc3NhZ2UuYnVmZmVyLmJ5dGVPZmZzZXQgKyAobWVzc2FnZS5idWZmZXJPZmZzZXQgKiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCksIHN0cmluZ1NpemUgLSAxKVxuICAgICAgbWVzc2FnZS5idWZmZXJPZmZzZXQgKz0gKGFsaWduZWRTaXplIC8gNClcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmJ5dGVBcnJheSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHt7YnVmZmVyOiBVaW50MzJBcnJheSwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyLCBjb25zdW1lZDogbnVtYmVyLCBzaXplOiBudW1iZXJ9fSBtZXNzYWdlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9uYWxcbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfVxuICAgKi9cbiAgc3RhdGljIGEgKG1lc3NhZ2UsIG9wdGlvbmFsKSB7XG4gICAgQ29ubmVjdGlvbi5fY2hlY2tNZXNzYWdlU2l6ZShtZXNzYWdlLCA0KVxuICAgIGNvbnN0IGFycmF5U2l6ZSA9IG1lc3NhZ2UuYnVmZmVyW21lc3NhZ2UuYnVmZmVyT2Zmc2V0KytdXG4gICAgaWYgKG9wdGlvbmFsICYmIGFycmF5U2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWxpZ25lZFNpemUgPSAoKGFycmF5U2l6ZSArIDMpICYgfjMpXG4gICAgICBDb25uZWN0aW9uLl9jaGVja01lc3NhZ2VTaXplKG1lc3NhZ2UsIGFsaWduZWRTaXplKVxuICAgICAgY29uc3QgYXJnID0gbWVzc2FnZS5idWZmZXIuYnVmZmVyLnNsaWNlKG1lc3NhZ2UuYnVmZmVyLmJ5dGVPZmZzZXQgKyAobWVzc2FnZS5idWZmZXJPZmZzZXQgKiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCksIG1lc3NhZ2UuYnVmZmVyLmJ5dGVPZmZzZXQgKyAobWVzc2FnZS5idWZmZXJPZmZzZXQgKiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCkgKyBhcnJheVNpemUpXG4gICAgICBtZXNzYWdlLmJ1ZmZlck9mZnNldCArPSBhbGlnbmVkU2l6ZVxuICAgICAgcmV0dXJuIGFyZ1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19IG1lc3NhZ2VcbiAgICogQHJldHVybnMge1dlYkZEfVxuICAgKi9cbiAgc3RhdGljIGggKG1lc3NhZ2UpIHsgLy8gZmlsZSBkZXNjcmlwdG9yIHtudW1iZXJ9XG4gICAgaWYgKG1lc3NhZ2UuZmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBtZXNzYWdlLmZkcy5zaGlmdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGVub3VnaCBmaWxlIGRlc2NyaXB0b3JzIGluIG1lc3NhZ2Ugb2JqZWN0LicpXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3QuPG51bWJlcixXbE9iamVjdD59XG4gICAgICovXG4gICAgdGhpcy53bE9iamVjdHMgPSB7fVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheTx7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD59Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX291dE1lc3NhZ2VzID0gW11cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QXJyYXk8e2J1ZmZlcjogVWludDMyQXJyYXksIGZkczogQXJyYXk8V2ViRkQ+fT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pbk1lc3NhZ2VzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wY29kZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgKiBAcGFyYW0ge0FycmF5PHt2YWx1ZTogKiwgdHlwZTogc3RyaW5nLCBzaXplOiBudW1iZXIsIG9wdGlvbmFsOiBib29sZWFuLCBfbWFyc2hhbGxBcmc6IGZ1bmN0aW9uKHtidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXJ9KTp2b2lkfT59IGFyZ3NBcnJheVxuICAgKi9cbiAgbWFyc2hhbGxNc2cgKGlkLCBvcGNvZGUsIHNpemUsIGFyZ3NBcnJheSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHt7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD4sIGJ1ZmZlck9mZnNldDogbnVtYmVyfX1cbiAgICAgKi9cbiAgICBjb25zdCB3aXJlTXNnID0ge1xuICAgICAgYnVmZmVyOiBuZXcgQXJyYXlCdWZmZXIoc2l6ZSksXG4gICAgICBmZHM6IFtdLFxuICAgICAgYnVmZmVyT2Zmc2V0OiAwXG4gICAgfVxuXG4gICAgLy8gd3JpdGUgYWN0dWFsIHdpcmUgbWVzc2FnZVxuICAgIGNvbnN0IGJ1ZnUzMiA9IG5ldyBVaW50MzJBcnJheSh3aXJlTXNnLmJ1ZmZlcilcbiAgICBjb25zdCBidWZ1MTYgPSBuZXcgVWludDE2QXJyYXkod2lyZU1zZy5idWZmZXIpXG4gICAgYnVmdTMyWzBdID0gaWRcbiAgICBidWZ1MTZbMl0gPSBvcGNvZGVcbiAgICBidWZ1MTZbM10gPSBzaXplXG4gICAgd2lyZU1zZy5idWZmZXJPZmZzZXQgPSA4XG5cbiAgICAvLyB3cml0ZSBhY3R1YWwgYXJndW1lbnQgdmFsdWUgdG8gYnVmZmVyXG4gICAgYXJnc0FycmF5LmZvckVhY2goKGFyZykgPT4gYXJnLl9tYXJzaGFsbEFyZyh3aXJlTXNnKSlcbiAgICB0aGlzLm9uU2VuZCh3aXJlTXNnKVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSByZWNlaXZlZCB3aXJlIG1lc3NhZ2VzLlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPn19IGluY29taW5nV2lyZU1lc3NhZ2VzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqIEB0aHJvd3MgRXJyb3IgSWYgYW4gaWxsZWdhbCBjbGllbnQgcmVxdWVzdCBpcyByZWNlaXZlZCBpZS4gYmFkIGxlbmd0aCBvciBtaXNzaW5nIGZpbGUgZGVzY3JpcHRvci5cbiAgICovXG4gIGFzeW5jIG1lc3NhZ2UgKGluY29taW5nV2lyZU1lc3NhZ2VzKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7IHJldHVybiB9XG5cbiAgICAvLyBtb3JlIHRoYW4gb25lIG1lc3NhZ2UgaW4gcXVldWUgbWVhbnMgdGhlIG1lc3NhZ2UgbG9vcCBpcyBpbiBhd2FpdCwgZG9uJ3QgY29uY3VycmVudGx5IHByb2Nlc3MgdGhlIG5ld1xuICAgIC8vIG1lc3NhZ2UsIGluc3RlYWQgcmV0dXJuIGVhcmx5IGFuZCBsZXQgdGhlIHJlc3VtZS1mcm9tLWF3YWl0IHBpY2sgdXAgdGhlIG5ld2x5IHF1ZXVlZCBtZXNzYWdlLlxuICAgIGlmICh0aGlzLl9pbk1lc3NhZ2VzLnB1c2goaW5jb21pbmdXaXJlTWVzc2FnZXMpID4gMSkgeyByZXR1cm4gfVxuXG4gICAgd2hpbGUgKHRoaXMuX2luTWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB3aXJlTWVzc2FnZXMgPSAvKiogQHR5cGUge3tidWZmZXI6IFVpbnQzMkFycmF5LCBmZHM6IEFycmF5PFdlYkZEPiwgYnVmZmVyT2Zmc2V0OiBudW1iZXIsIGNvbnN1bWVkOiBudW1iZXIsIHNpemU6IG51bWJlcn19ICovdGhpcy5faW5NZXNzYWdlc1swXVxuICAgICAgd2lyZU1lc3NhZ2VzLmJ1ZmZlck9mZnNldCA9IDBcbiAgICAgIHdpcmVNZXNzYWdlcy5jb25zdW1lZCA9IDBcbiAgICAgIHdpcmVNZXNzYWdlcy5zaXplID0gMFxuICAgICAgd2hpbGUgKHdpcmVNZXNzYWdlcy5idWZmZXJPZmZzZXQgPCB3aXJlTWVzc2FnZXMuYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBpZCA9IHdpcmVNZXNzYWdlcy5idWZmZXJbd2lyZU1lc3NhZ2VzLmJ1ZmZlck9mZnNldF1cbiAgICAgICAgY29uc3Qgc2l6ZU9wY29kZSA9IHdpcmVNZXNzYWdlcy5idWZmZXJbd2lyZU1lc3NhZ2VzLmJ1ZmZlck9mZnNldCArIDFdXG4gICAgICAgIHdpcmVNZXNzYWdlcy5zaXplID0gc2l6ZU9wY29kZSA+Pj4gMTZcbiAgICAgICAgY29uc3Qgb3Bjb2RlID0gc2l6ZU9wY29kZSAmIDB4MDAwMEZGRkZcblxuICAgICAgICBpZiAod2lyZU1lc3NhZ2VzLnNpemUgPiB3aXJlTWVzc2FnZXMuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgYnVmZmVyIHRvbyBzbWFsbCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3bE9iamVjdCA9IHRoaXMud2xPYmplY3RzW2lkXVxuICAgICAgICBpZiAod2xPYmplY3QpIHtcbiAgICAgICAgICB3aXJlTWVzc2FnZXMuYnVmZmVyT2Zmc2V0ICs9IDJcbiAgICAgICAgICB3aXJlTWVzc2FnZXMuY29uc3VtZWQgPSA4XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHdsT2JqZWN0W29wY29kZV0od2lyZU1lc3NhZ2VzKVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFxud2xPYmplY3Q6ICR7d2xPYmplY3QuY29uc3RydWN0b3IubmFtZX1bJHtvcGNvZGV9XSguLilcbm5hbWU6ICR7ZS5uYW1lfSBtZXNzYWdlOiAke2UubWVzc2FnZX0gdGV4dDogJHtlLnRleHR9XG5lcnJvciBvYmplY3Qgc3RhY2s6IFxuJHtlLnN0YWNrfVxuYClcbiAgICAgICAgICAgIHRocm93IGVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7IHJldHVybiB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIG9iamVjdCAke2lkfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2luTWVzc2FnZXMuc2hpZnQoKVxuICAgIH1cblxuICAgIHRoaXMuZmx1c2goKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZG9lc24ndCBhY3R1YWxseSBzZW5kIHRoZSBtZXNzYWdlLCBidXQgcXVldWVzIGl0IHNvIGl0IGNhbiBiZSBzZW5kIG9uIGZsdXNoLlxuICAgKiBAcGFyYW0ge3tidWZmZXI6IEFycmF5QnVmZmVyLCBmZHM6IEFycmF5PFdlYkZEPn19d2lyZU1zZyBhIHNpbmdsZSB3aXJlIG1lc3NhZ2UgZXZlbnQuXG4gICAqL1xuICBvblNlbmQgKHdpcmVNc2cpIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHsgcmV0dXJuIH1cblxuICAgIHRoaXMuX291dE1lc3NhZ2VzLnB1c2god2lyZU1zZylcbiAgfVxuXG4gIC8qKlxuICAgKiBFbXB0eSB0aGUgcXVldWUgb2Ygd2lyZSBtZXNzYWdlcyBhbmQgc2VuZCB0aGVtIHRvIHRoZSBvdGhlciBlbmQuXG4gICAqL1xuICBmbHVzaCAoKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7IHJldHVybiB9XG4gICAgaWYgKHRoaXMuX291dE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gfVxuXG4gICAgdGhpcy5vbkZsdXNoKHRoaXMuX291dE1lc3NhZ2VzKVxuICAgIHRoaXMuX291dE1lc3NhZ2VzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB3aGVuIHRoaXMgY29ubmVjdGlvbiB3aXNoZXMgdG8gc2VuZCBkYXRhIHRvIHRoZSBvdGhlciBlbmQuIFRoaXMgY2FsbGJhY2sgY2FuIGJlIHVzZWQgdG8gc2VuZCB0aGUgZ2l2ZW5cbiAgICogYXJyYXkgYnVmZmVycyB1c2luZyBhbnkgdHJhbnNwb3J0IG1lY2hhbmlzbS5cbiAgICogQHBhcmFtIHtBcnJheTx7YnVmZmVyOiBBcnJheUJ1ZmZlciwgZmRzOiBBcnJheTxXZWJGRD59Pn13aXJlTWVzc2FnZXNcbiAgICovXG4gIG9uRmx1c2ggKHdpcmVNZXNzYWdlcykge31cblxuICBjbG9zZSAoKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7IHJldHVybiB9XG5cbiAgICAvLyBkZXN0cm95IHJlc291cmNlcyBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLndsT2JqZWN0cykuc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpLmZvckVhY2goKHdsT2JqZWN0KSA9PiB3bE9iamVjdC5kZXN0cm95KCkpXG5cbiAgICB0aGlzLl9vdXRNZXNzYWdlcyA9IG51bGxcbiAgICB0aGlzLl9pbk1lc3NhZ2VzID0gbnVsbFxuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7V2xPYmplY3R9IHdsT2JqZWN0XG4gICAqL1xuICByZWdpc3RlcldsT2JqZWN0ICh3bE9iamVjdCkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkgeyByZXR1cm4gfVxuICAgIGlmICh3bE9iamVjdC5pZCBpbiB0aGlzLndsT2JqZWN0cykgeyB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgb2JqZWN0IGlkOiAke3dsT2JqZWN0LmlkfS4gQWxyZWFkeSByZWdpc3RlcmVkLmApIH1cbiAgICB0aGlzLndsT2JqZWN0c1t3bE9iamVjdC5pZF0gPSB3bE9iamVjdFxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7V2xPYmplY3R9IHdsT2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyV2xPYmplY3QgKHdsT2JqZWN0KSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7IHJldHVybiB9XG4gICAgZGVsZXRlIHRoaXMud2xPYmplY3RzW3dsT2JqZWN0LmlkXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3Rpb24iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDE3IEVyaWsgRGUgUmlqY2tlXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIEZpeGVkIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfW51bWJlclxuICAgKiBAcmV0dXJuIHtGaXhlZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZSAobnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaXhlZCgobnVtYmVyICogMjU2LjApID4+IDApXG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50IGZpeGVkIGFzIGEgc2lnbmVkIDI0LWJpdCBpbnRlZ2VyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgYXNJbnQgKCkge1xuICAgIHJldHVybiAoKHRoaXMuX3JhdyAvIDI1Ni4wKSA+PiAwKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudCBmaXhlZCBhcyBhIHNpZ25lZCAyNC1iaXQgbnVtYmVyIHdpdGggYW4gOC1iaXQgZnJhY3Rpb25hbCBwYXJ0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgYXNEb3VibGUgKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXcgLyAyNTYuMFxuICB9XG5cbiAgLyoqXG4gICAqIHVzZSBwYXJzZUZpeGVkIGluc3RlYWRcbiAgICogQHBhcmFtIHtudW1iZXJ9cmF3XG4gICAqL1xuICBjb25zdHJ1Y3RvciAocmF3KSB7XG4gICAgdGhpcy5fcmF3ID0gcmF3XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRml4ZWQiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDE3IEVyaWsgRGUgUmlqY2tlXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIFdlYkZEIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfWZkXG4gICAqIEBwYXJhbSB7J0ltYWdlQml0bWFwJ3wnQXJyYXlCdWZmZXInfCdNZXNzYWdlUG9ydCd9ZmRUeXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfWZkRG9tYWluVVVJRFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKFdlYkZEKTogUHJvbWlzZTxUcmFuc2ZlcmFibGU+fW9uR2V0VHJhbnNmZXJhYmxlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oV2ViRkQpOiBQcm9taXNlPHZvaWQ+fSBvbkNsb3NlXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoZmQsIGZkVHlwZSwgZmREb21haW5VVUlELCBvbkdldFRyYW5zZmVyYWJsZSwgb25DbG9zZSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5mZCA9IGZkXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmZkVHlwZSA9IGZkVHlwZVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5mZERvbWFpblVVSUQgPSBmZERvbWFpblVVSURcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb24oV2ViRkQpOiBQcm9taXNlPFRyYW5zZmVyYWJsZT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkdldFRyYW5zZmVyYWJsZSA9IG9uR2V0VHJhbnNmZXJhYmxlXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKFdlYkZEKTogUHJvbWlzZTx2b2lkPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2xvc2UgPSBvbkNsb3NlXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7UHJvbWlzZTxUcmFuc2ZlcmFibGU+fVxuICAgKi9cbiAgYXN5bmMgZ2V0VHJhbnNmZXJhYmxlICgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fb25HZXRUcmFuc2ZlcmFibGUodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgYXN5bmMgY2xvc2UgKCkge1xuICAgIGF3YWl0IHRoaXMuX29uQ2xvc2UodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWJGRCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIDIwMTcgRXJpayBEZSBSaWpja2VcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuU09GVFdBUkUuXG4qL1xuXG4ndXNlIHN0cmljdCdcblxuY2xhc3MgV2xPYmplY3Qge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Rlc3Ryb3lQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9kZXN0cm95UmVzb2x2ZXIgPSByZXNvbHZlKVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheTxmdW5jdGlvbihSZXNvdXJjZSk6dm9pZD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kZXN0cm95TGlzdGVuZXJzID0gW11cbiAgICB0aGlzLl9kZXN0cm95UHJvbWlzZS50aGVuKCgpID0+IHRoaXMuX2Rlc3Ryb3lMaXN0ZW5lcnMuZm9yRWFjaChkZXN0cm95TGlzdGVuZXIgPT4gZGVzdHJveUxpc3RlbmVyKHRoaXMpKSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2Rlc3Ryb3lSZXNvbHZlcigpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtmdW5jdGlvbihSZXNvdXJjZSk6dm9pZH1kZXN0cm95TGlzdGVuZXJcbiAgICovXG4gIGFkZERlc3Ryb3lMaXN0ZW5lciAoZGVzdHJveUxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZGVzdHJveUxpc3RlbmVycy5wdXNoKGRlc3Ryb3lMaXN0ZW5lcilcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKFJlc291cmNlKTp2b2lkfWRlc3Ryb3lMaXN0ZW5lclxuICAgKi9cbiAgcmVtb3ZlRGVzdHJveUxpc3RlbmVyIChkZXN0cm95TGlzdGVuZXIpIHtcbiAgICB0aGlzLl9kZXN0cm95TGlzdGVuZXJzID0gdGhpcy5fZGVzdHJveUxpc3RlbmVycy5maWx0ZXIoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0gIT09IGRlc3Ryb3lMaXN0ZW5lciB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBvbkRlc3Ryb3kgKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95UHJvbWlzZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdsT2JqZWN0IiwiaW1wb3J0IHtcbiAgZGlzcGxheSxcbiAgd2ViRlMsXG4gIGZyYW1lLFxuICBXbENvbXBvc2l0b3JQcm94eSxcbiAgR3JXZWJTaG1Qcm94eSxcbiAgV2xTaGVsbFByb3h5XG59IGZyb20gJ3dlc3RmaWVsZC1ydW50aW1lLWNsaWVudCdcblxuY2xhc3MgU2htQnVmZmVyUG9vbCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0dyV2ViU2htUHJveHl9d2ViU2htXG4gICAqIEBwYXJhbSB7bnVtYmVyfXBvb2xTaXplXG4gICAqIEBwYXJhbSB7bnVtYmVyfXdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfWhlaWdodFxuICAgKiBAcmV0dXJuIHtTaG1CdWZmZXJQb29sfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAod2ViU2htLCBwb29sU2l6ZSwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGF2YWlsYWJsZSA9IG5ldyBBcnJheShwb29sU2l6ZSlcbiAgICBjb25zdCBzaG1CdWZmZXJQb29sID0gbmV3IFNobUJ1ZmZlclBvb2woYXZhaWxhYmxlKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9vbFNpemU7IGkrKykge1xuICAgICAgYXZhaWxhYmxlW2ldID0gU2htQnVmZmVyLmNyZWF0ZSh3ZWJTaG0sIHdpZHRoLCBoZWlnaHQsIHNobUJ1ZmZlclBvb2wpXG4gICAgfVxuICAgIHJldHVybiBzaG1CdWZmZXJQb29sXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoYXZhaWxhYmxlKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5PFNobUJ1ZmZlcj59XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2F2YWlsYWJsZSA9IGF2YWlsYWJsZVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheTxTaG1CdWZmZXI+fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9idXN5ID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1NobUJ1ZmZlcn1zaG1CdWZmZXJcbiAgICovXG4gIGdpdmUgKHNobUJ1ZmZlcikge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuX2J1c3kuaW5kZXhPZihzaG1CdWZmZXIpXG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICB0aGlzLl9idXN5LnNwbGljZShpZHgsIDEpXG4gICAgfVxuICAgIHRoaXMuX2F2YWlsYWJsZS5wdXNoKHNobUJ1ZmZlcilcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtTaG1CdWZmZXJ8bnVsbH1cbiAgICovXG4gIHRha2UgKCkge1xuICAgIGNvbnN0IHNobUJ1ZmZlciA9IHRoaXMuX2F2YWlsYWJsZS5zaGlmdCgpXG4gICAgaWYgKHNobUJ1ZmZlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9idXN5LnB1c2goc2htQnVmZmVyKVxuICAgICAgcmV0dXJuIHNobUJ1ZmZlclxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgR3JXZWJTaG1CdWZmZXJFdmVudHNcbiAqIEBpbXBsZW1lbnRzIFdsQnVmZmVyRXZlbnRzXG4gKi9cbmNsYXNzIFNobUJ1ZmZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0dyV2ViU2htUHJveHl9d2ViU2htXG4gICAqIEBwYXJhbSB7bnVtYmVyfXdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfWhlaWdodFxuICAgKiBAcGFyYW0ge1NobUJ1ZmZlclBvb2x9d2ViQXJyYXlCdWZmZXJQb29sXG4gICAqIEByZXR1cm4ge1NobUJ1ZmZlcn1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKHdlYlNobSwgd2lkdGgsIGhlaWdodCwgd2ViQXJyYXlCdWZmZXJQb29sKSB7XG4gICAgY29uc3QgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoaGVpZ2h0ICogd2lkdGggKiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVClcbiAgICBjb25zdCBwaXhlbENvbnRlbnQgPSB3ZWJGUy5mcm9tQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpXG5cbiAgICBjb25zdCBwcm94eSA9IHdlYlNobS5jcmVhdGVXZWJBcnJheUJ1ZmZlcigpXG4gICAgY29uc3QgYnVmZmVyUHJveHkgPSB3ZWJTaG0uY3JlYXRlQnVmZmVyKHByb3h5LCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgY29uc3Qgc2htQnVmZmVyID0gbmV3IFNobUJ1ZmZlcihwcm94eSwgYnVmZmVyUHJveHksIHBpeGVsQ29udGVudCwgYXJyYXlCdWZmZXIsIHdpZHRoLCBoZWlnaHQsIHdlYkFycmF5QnVmZmVyUG9vbClcblxuICAgIHByb3h5Lmxpc3RlbmVyID0gc2htQnVmZmVyXG4gICAgYnVmZmVyUHJveHkubGlzdGVuZXIgPSBzaG1CdWZmZXJcblxuICAgIHJldHVybiBzaG1CdWZmZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dyV2ViU2htQnVmZmVyUHJveHl9cHJveHlcbiAgICogQHBhcmFtIHtXbEJ1ZmZlclByb3h5fWJ1ZmZlclByb3h5XG4gICAqIEBwYXJhbSB7V2ViRkR9cGl4ZWxDb250ZW50XG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9YXJyYXlCdWZmZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9d2lkdGhcbiAgICogQHBhcmFtIHtudW1iZXJ9aGVpZ2h0XG4gICAqIEBwYXJhbSB7U2htQnVmZmVyUG9vbH1zaG1CdWZmZXJQb29sXG4gICAqL1xuICBjb25zdHJ1Y3RvciAocHJveHksIGJ1ZmZlclByb3h5LCBwaXhlbENvbnRlbnQsIGFycmF5QnVmZmVyLCB3aWR0aCwgaGVpZ2h0LCBzaG1CdWZmZXJQb29sKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0dyV2ViU2htQnVmZmVyUHJveHl9XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9IHByb3h5XG4gICAgLyoqXG4gICAgICogQHR5cGUge1dsQnVmZmVyUHJveHl9XG4gICAgICovXG4gICAgdGhpcy5idWZmZXJQcm94eSA9IGJ1ZmZlclByb3h5XG4gICAgLyoqXG4gICAgICogQHR5cGUge1dlYkZEfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGl4ZWxDb250ZW50ID0gcGl4ZWxDb250ZW50XG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5QnVmZmVyfVxuICAgICAqL1xuICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBhcnJheUJ1ZmZlclxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTaG1CdWZmZXJQb29sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2htQnVmZmVyUG9vbCA9IHNobUJ1ZmZlclBvb2xcbiAgfVxuXG4gIGF0dGFjaCAoKSB7XG4gICAgdGhpcy5wcm94eS5hdHRhY2godGhpcy5fcGl4ZWxDb250ZW50KVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqICAgICAgICAgICAgICAgIERldGFjaGVzIGEgcHJldmlvdXNseSBhdHRhY2hlZCBIVE1MNSBhcnJheSBidWZmZXIgZnJvbSB0aGUgY29tcG9zaXRvciBhbmQgcmV0dXJucyBpdCB0byB0aGUgY2xpZW50IHNvXG4gICAqICAgICAgICAgICAgICAgIGl0IGNhbiBiZSByZXVzZWQgYWdhaW4gZm9yIHdyaXRpbmcuIEFmdGVyIGRldGFjaGluZywgdGhlIGFycmF5IGJ1ZmZlciBvd25lcnNoaXAgaXMgcGFzc2VkIGZyb21cbiAgICogICAgICAgICAgICAgICAgdGhlIGNvbXBvc2l0b3IgbWFpbiB0aHJlYWQgYmFjayB0byB0aGUgY2xpZW50LlxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0ge1dlYkZEfSBjb250ZW50cyBBbiBIVE1MNSBhcnJheSBidWZmZXIsIGRldGFjaGVkIGZyb20gdGhlIGNvbXBvc2l0b3JcbiAgICpcbiAgICogQHNpbmNlIDFcbiAgICpcbiAgICovXG4gIGFzeW5jIGRldGFjaCAoY29udGVudHMpIHtcbiAgICB0aGlzLl9waXhlbENvbnRlbnQgPSBjb250ZW50c1xuICAgIHRoaXMuYXJyYXlCdWZmZXIgPSAvKiogQHR5cGUge0FycmF5QnVmZmVyfSAqLyBhd2FpdCBjb250ZW50cy5nZXRUcmFuc2ZlcmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqICBTZW50IHdoZW4gdGhpcyB3bF9idWZmZXIgaXMgbm8gbG9uZ2VyIHVzZWQgYnkgdGhlIGNvbXBvc2l0b3IuXG4gICAqICBUaGUgY2xpZW50IGlzIG5vdyBmcmVlIHRvIHJldXNlIG9yIGRlc3Ryb3kgdGhpcyBidWZmZXIgYW5kIGl0c1xuICAgKiAgYmFja2luZyBzdG9yYWdlLlxuICAgKlxuICAgKiAgSWYgYSBjbGllbnQgcmVjZWl2ZXMgYSByZWxlYXNlIGV2ZW50IGJlZm9yZSB0aGUgZnJhbWUgY2FsbGJhY2tcbiAgICogIHJlcXVlc3RlZCBpbiB0aGUgc2FtZSB3bF9zdXJmYWNlLmNvbW1pdCB0aGF0IGF0dGFjaGVzIHRoaXNcbiAgICogIHdsX2J1ZmZlciB0byBhIHN1cmZhY2UsIHRoZW4gdGhlIGNsaWVudCBpcyBpbW1lZGlhdGVseSBmcmVlIHRvXG4gICAqICByZXVzZSB0aGUgYnVmZmVyIGFuZCBpdHMgYmFja2luZyBzdG9yYWdlLCBhbmQgZG9lcyBub3QgbmVlZCBhXG4gICAqICBzZWNvbmQgYnVmZmVyIGZvciB0aGUgbmV4dCBzdXJmYWNlIGNvbnRlbnQgdXBkYXRlLiBUeXBpY2FsbHlcbiAgICogIHRoaXMgaXMgcG9zc2libGUsIHdoZW4gdGhlIGNvbXBvc2l0b3IgbWFpbnRhaW5zIGEgY29weSBvZiB0aGVcbiAgICogIHdsX3N1cmZhY2UgY29udGVudHMsIGUuZy4gYXMgYSBHTCB0ZXh0dXJlLiBUaGlzIGlzIGFuIGltcG9ydGFudFxuICAgKiAgb3B0aW1pemF0aW9uIGZvciBHTChFUykgY29tcG9zaXRvcnMgd2l0aCB3bF9zaG0gY2xpZW50cy5cbiAgICpcbiAgICpcbiAgICpcbiAgICogQHNpbmNlIDFcbiAgICpcbiAgICovXG4gIHJlbGVhc2UgKCkge1xuICAgIHRoaXMuX3NobUJ1ZmZlclBvb2wuZ2l2ZSh0aGlzKVxuICB9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgV2xSZWdpc3RyeUV2ZW50c1xuICogQGltcGxlbWVudHMgV2xTaGVsbFN1cmZhY2VFdmVudHNcbiAqL1xuY2xhc3MgV2luZG93IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfXdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfWhlaWdodFxuICAgKiBAcmV0dXJuIHtXaW5kb3d9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgcmVnaXN0cnkgPSBkaXNwbGF5LmdldFJlZ2lzdHJ5KClcbiAgICBjb25zdCB3aW5kb3cgPSBuZXcgV2luZG93KHJlZ2lzdHJ5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIHJlZ2lzdHJ5Lmxpc3RlbmVyID0gd2luZG93XG4gICAgcmV0dXJuIHdpbmRvd1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7V2xSZWdpc3RyeVByb3h5fXJlZ2lzdHJ5XG4gICAqIEBwYXJhbSB7bnVtYmVyfXdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfWhlaWdodFxuICAgKi9cbiAgY29uc3RydWN0b3IgKHJlZ2lzdHJ5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1dsUmVnaXN0cnlQcm94eX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fcmVnaXN0cnkgPSByZWdpc3RyeVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTaG1CdWZmZXJQb29sfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zaG1CdWZmZXJQb29sID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtXbENvbXBvc2l0b3JQcm94eXxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29tcG9zaXRvciA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7R3JXZWJTaG1Qcm94eXxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fd2ViU2htID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtXbFNoZWxsUHJveHl8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NoZWxsID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtXbFN1cmZhY2VQcm94eXxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3VyZmFjZSA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiAgTm90aWZ5IHRoZSBjbGllbnQgb2YgZ2xvYmFsIG9iamVjdHMuXG4gICAqXG4gICAqICBUaGUgZXZlbnQgbm90aWZpZXMgdGhlIGNsaWVudCB0aGF0IGEgZ2xvYmFsIG9iamVjdCB3aXRoXG4gICAqICB0aGUgZ2l2ZW4gbmFtZSBpcyBub3cgYXZhaWxhYmxlLCBhbmQgaXQgaW1wbGVtZW50cyB0aGVcbiAgICogIGdpdmVuIHZlcnNpb24gb2YgdGhlIGdpdmVuIGludGVyZmFjZS5cbiAgICpcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5hbWUgbnVtZXJpYyBuYW1lIG9mIHRoZSBnbG9iYWwgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnRlcmZhY2VfIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJzaW9uIGludGVyZmFjZSB2ZXJzaW9uXG4gICAqXG4gICAqIEBzaW5jZSAxXG4gICAqXG4gICAqL1xuICBnbG9iYWwgKG5hbWUsIGludGVyZmFjZV8sIHZlcnNpb24pIHtcbiAgICBpZiAoaW50ZXJmYWNlXyA9PT0gV2xDb21wb3NpdG9yUHJveHkucHJvdG9jb2xOYW1lKSB7XG4gICAgICB0aGlzLl9jb21wb3NpdG9yID0gdGhpcy5fcmVnaXN0cnkuYmluZChuYW1lLCBpbnRlcmZhY2VfLCBXbENvbXBvc2l0b3JQcm94eSwgdmVyc2lvbilcbiAgICAgIHRoaXMuX3N1cmZhY2UgPSB0aGlzLl9jb21wb3NpdG9yLmNyZWF0ZVN1cmZhY2UoKVxuICAgICAgdGhpcy5fb25GcmFtZSA9IGZyYW1lKHRoaXMuX3N1cmZhY2UpXG4gICAgfVxuXG4gICAgaWYgKGludGVyZmFjZV8gPT09IEdyV2ViU2htUHJveHkucHJvdG9jb2xOYW1lKSB7XG4gICAgICB0aGlzLl93ZWJTaG0gPSB0aGlzLl9yZWdpc3RyeS5iaW5kKG5hbWUsIGludGVyZmFjZV8sIEdyV2ViU2htUHJveHksIHZlcnNpb24pXG4gICAgICB0aGlzLl93ZWJTaG0ubGlzdGVuZXIgPSB0aGlzXG5cbiAgICAgIHRoaXMuX3NobUJ1ZmZlclBvb2wgPSBTaG1CdWZmZXJQb29sLmNyZWF0ZSh0aGlzLl93ZWJTaG0sIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cblxuICAgIGlmIChpbnRlcmZhY2VfID09PSBXbFNoZWxsUHJveHkucHJvdG9jb2xOYW1lKSB7XG4gICAgICB0aGlzLl9zaGVsbCA9IHRoaXMuX3JlZ2lzdHJ5LmJpbmQobmFtZSwgaW50ZXJmYWNlXywgV2xTaGVsbFByb3h5LCB2ZXJzaW9uKVxuICAgIH1cbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMuX3NoZWxsU3VyZmFjZSA9IHRoaXMuX3NoZWxsLmdldFNoZWxsU3VyZmFjZSh0aGlzLl9zdXJmYWNlKVxuICAgIHRoaXMuX3NoZWxsU3VyZmFjZS5saXN0ZW5lciA9IHRoaXNcbiAgICB0aGlzLl9zaGVsbFN1cmZhY2Uuc2V0VG9wbGV2ZWwoKVxuICAgIHRoaXMuX3NoZWxsU3VyZmFjZS5zZXRUaXRsZSgnU2ltcGxlIFdlYiBTaG0nKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U2htQnVmZmVyfXNobUJ1ZmZlclxuICAgKiBAcGFyYW0ge251bWJlcn10aW1lc3RhbXBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9wYWludFBpeGVscyAoc2htQnVmZmVyLCB0aW1lc3RhbXApIHtcbiAgICBjb25zdCBoYWxmaCA9IHNobUJ1ZmZlci53aWR0aCA+PiAxXG4gICAgY29uc3QgaGFsZncgPSBzaG1CdWZmZXIuaGVpZ2h0ID4+IDFcbiAgICBsZXQgaXJcbiAgICBsZXQgb3JcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBVaW50MzJBcnJheShzaG1CdWZmZXIuYXJyYXlCdWZmZXIpXG5cbiAgICAvKiBzcXVhcmVkIHJhZGlpIHRocmVzaG9sZHMgKi9cbiAgICBvciA9IChoYWxmdyA8IGhhbGZoID8gaGFsZncgOiBoYWxmaCkgLSA4XG4gICAgaXIgPSBvciAtIDMyXG4gICAgb3IgPSBvciAqIG9yXG4gICAgaXIgPSBpciAqIGlyXG5cbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2htQnVmZmVyLmhlaWdodDsgeSsrKSB7XG4gICAgICBjb25zdCB5MiA9ICh5IC0gaGFsZmgpICogKHkgLSBoYWxmaClcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaG1CdWZmZXIud2lkdGg7IHgrKykge1xuICAgICAgICBsZXQgdlxuICAgICAgICBsZXQgdyA9IDB4ZmYwMDAwMDBcblxuICAgICAgICAvKiBzcXVhcmVkIGRpc3RhbmNlIGZyb20gY2VudGVyICovXG4gICAgICAgIGNvbnN0IHIyID0gKHggLSBoYWxmdykgKiAoeCAtIGhhbGZ3KSArIHkyXG5cbiAgICAgICAgaWYgKHIyIDwgaXIpIHtcbiAgICAgICAgICB2ID0gKChyMiA+PiA1KSArICh0aW1lc3RhbXAgPj4gNikpICogMHgwMDgwNDAxXG4gICAgICAgIH0gZWxzZSBpZiAocjIgPCBvcikge1xuICAgICAgICAgIHYgPSAoeSArICh0aW1lc3RhbXAgPj4gNSkpICogMHgwMDgwNDAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9ICh4ICsgKHRpbWVzdGFtcCA+PiA0KSkgKiAweDAwODA0MDFcbiAgICAgICAgfVxuICAgICAgICAvLyBBUkdCID0+IEFCR1IgKFJHQkEgTEUpXG4gICAgICAgIHcgfD0gKCh2ICYgMHgwMGZmMDAwMCkgPj4gMTYpIC8vIFJcbiAgICAgICAgdyB8PSAoKHYgJiAweDAwMDBmZjAwKSkgLy8gR1xuICAgICAgICB3IHw9ICgodiAmIDB4MDAwMDAwZmYpIDw8IDE2KSAvLyBCXG5cbiAgICAgICAgaW1hZ2Vbb2Zmc2V0KytdID0gd1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn10aW1lc3RhbXBcbiAgICovXG4gIGRyYXcgKHRpbWVzdGFtcCkge1xuICAgIGNvbnN0IHNobUJ1ZmZlciA9IHRoaXMuX3NobUJ1ZmZlclBvb2wudGFrZSgpXG4gICAgaWYgKHNobUJ1ZmZlcikge1xuICAgICAgdGhpcy5fcGFpbnRQaXhlbHMoc2htQnVmZmVyLCB0aW1lc3RhbXApXG4gICAgICBzaG1CdWZmZXIuYXR0YWNoKClcblxuICAgICAgdGhpcy5fc3VyZmFjZS5hdHRhY2goc2htQnVmZmVyLmJ1ZmZlclByb3h5LCAwLCAwKVxuICAgICAgdGhpcy5fc3VyZmFjZS5kYW1hZ2UoMCwgMCwgc2htQnVmZmVyLndpZHRoLCBzaG1CdWZmZXIuaGVpZ2h0KVxuXG4gICAgICAvLyBXYWl0IGZvciB0aGUgY29tcG9zaXRvciB0byBzaWduYWwgdGhhdCB3ZSBjYW4gZHJhdyB0aGUgbmV4dCBmcmFtZS5cbiAgICAgIC8vIE5vdGUgdGhhdCB1c2luZyAnYXdhaXQnIGhlcmUgd291bGQgcmVzdWx0IGluIGEgZGVhZGxvY2sgYXMgdGhlIGV2ZW50IGxvb3Agd291bGQgYmUgYmxvY2tlZCwgYW5kIHRoZSBldmVudFxuICAgICAgLy8gdGhhdCByZXNvbHZlcyB0aGUgYXdhaXQgc3RhdGUgd291bGQgbmV2ZXIgYmUgcGlja2VkIHVwIGJ5IHRoZSBibG9ja2VkIGV2ZW50IGxvb3AuXG4gICAgICB0aGlzLl9vbkZyYW1lKCkudGhlbih0aW1lc3RhbXAgPT4gdGhpcy5kcmF3KHRpbWVzdGFtcCkpXG5cbiAgICAgIC8vIHNlcmlhbCBpcyBvbmx5IHJlcXVpcmVkIGlmIG91ciBidWZmZXIgY29udGVudHMgd291bGQgdGFrZSBhIGxvbmcgdGltZSB0byBzZW5kIHRvIHRoZSBjb21wb3NpdG9yIGllLiBpbiBhIG5ldHdvcmsgcmVtb3RlIGNhc2VcbiAgICAgIHRoaXMuX3N1cmZhY2UuY29tbWl0KDApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FsbCBidWZmZXJzIG9jY3VwaWVkIGJ5IGNvbXBvc2l0b3IhJylcbiAgICAgIGRpc3BsYXkuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn1uYW1lXG4gICAqL1xuICBnbG9iYWxSZW1vdmUgKG5hbWUpIHtcbiAgICAvLyBGSVhNRSBrZWVwIHRyYWNrIG9mIHRoZSBuYW1lIG51bWJlciBvZiB0aGUgZ2xvYmFscyB3ZSBiaW5kIHNvIHdlIGNhbiBkbyBjbGVhbnVwIGlmIGEgZ2xvYmFsIHNob3VsZCBnbyBhd2F5LlxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqICBUaGUgY29uZmlndXJlIGV2ZW50IGFza3MgdGhlIGNsaWVudCB0byByZXNpemUgaXRzIHN1cmZhY2UuXG4gICAqXG4gICAqICBUaGUgc2l6ZSBpcyBhIGhpbnQsIGluIHRoZSBzZW5zZSB0aGF0IHRoZSBjbGllbnQgaXMgZnJlZSB0b1xuICAgKiAgaWdub3JlIGl0IGlmIGl0IGRvZXNuJ3QgcmVzaXplLCBwaWNrIGEgc21hbGxlciBzaXplICh0b1xuICAgKiAgc2F0aXNmeSBhc3BlY3QgcmF0aW8gb3IgcmVzaXplIGluIHN0ZXBzIG9mIE54TSBwaXhlbHMpLlxuICAgKlxuICAgKiAgVGhlIGVkZ2VzIHBhcmFtZXRlciBwcm92aWRlcyBhIGhpbnQgYWJvdXQgaG93IHRoZSBzdXJmYWNlXG4gICAqICB3YXMgcmVzaXplZC4gVGhlIGNsaWVudCBtYXkgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gZGVjaWRlXG4gICAqICBob3cgdG8gYWRqdXN0IGl0cyBjb250ZW50IHRvIHRoZSBuZXcgc2l6ZSAoZS5nLiBhIHNjcm9sbGluZ1xuICAgKiAgYXJlYSBtaWdodCBhZGp1c3QgaXRzIGNvbnRlbnQgcG9zaXRpb24gdG8gbGVhdmUgdGhlIHZpZXdhYmxlXG4gICAqICBjb250ZW50IHVubW92ZWQpLlxuICAgKlxuICAgKiAgVGhlIGNsaWVudCBpcyBmcmVlIHRvIGRpc21pc3MgYWxsIGJ1dCB0aGUgbGFzdCBjb25maWd1cmVcbiAgICogIGV2ZW50IGl0IHJlY2VpdmVkLlxuICAgKlxuICAgKiAgVGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJndW1lbnRzIHNwZWNpZnkgdGhlIHNpemUgb2YgdGhlIHdpbmRvd1xuICAgKiAgaW4gc3VyZmFjZS1sb2NhbCBjb29yZGluYXRlcy5cbiAgICpcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVkZ2VzIGhvdyB0aGUgc3VyZmFjZSB3YXMgcmVzaXplZFxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggbmV3IHdpZHRoIG9mIHRoZSBzdXJmYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgbmV3IGhlaWdodCBvZiB0aGUgc3VyZmFjZVxuICAgKlxuICAgKiBAc2luY2UgMVxuICAgKlxuICAgKi9cbiAgY29uZmlndXJlIChlZGdlcywgd2lkdGgsIGhlaWdodCkgeyAvKiBOT09QICovIH1cblxuICAvKipcbiAgICpcbiAgICogIFBpbmcgYSBjbGllbnQgdG8gY2hlY2sgaWYgaXQgaXMgcmVjZWl2aW5nIGV2ZW50cyBhbmQgc2VuZGluZ1xuICAgKiAgcmVxdWVzdHMuIEEgY2xpZW50IGlzIGV4cGVjdGVkIHRvIHJlcGx5IHdpdGggYSBwb25nIHJlcXVlc3QuXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZXJpYWwgc2VyaWFsIG51bWJlciBvZiB0aGUgcGluZ1xuICAgKlxuICAgKiBAc2luY2UgMVxuICAgKlxuICAgKi9cbiAgcGluZyAoc2VyaWFsKSB7XG4gICAgdGhpcy5fc2hlbGxTdXJmYWNlLnBvbmcoc2VyaWFsKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqICBUaGUgcG9wdXBfZG9uZSBldmVudCBpcyBzZW50IG91dCB3aGVuIGEgcG9wdXAgZ3JhYiBpcyBicm9rZW4sXG4gICAqICB0aGF0IGlzLCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBhIHN1cmZhY2UgdGhhdCBkb2Vzbid0IGJlbG9uZ1xuICAgKiAgdG8gdGhlIGNsaWVudCBvd25pbmcgdGhlIHBvcHVwIHN1cmZhY2UuXG4gICAqXG4gICAqXG4gICAqXG4gICAqIEBzaW5jZSAxXG4gICAqXG4gICAqL1xuICBwb3B1cERvbmUgKCkgeyAvKiBOT09QICovIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbWFpbiAoKSB7XG4gIC8vIGNyZWF0ZSBhIG5ldyB3aW5kb3cgd2l0aCBzb21lIGJ1ZmZlcnNcbiAgY29uc3Qgd2luZG93ID0gV2luZG93LmNyZWF0ZSgyNTAsIDI1MClcblxuICAvLyBjcmVhdGUgYSBzeW5jIHByb21pc2VcbiAgY29uc3Qgc3luY1Byb21pc2UgPSBkaXNwbGF5LnN5bmMoKVxuXG4gIC8vIGZsdXNoIG91dCB3aW5kb3cgY3JlYXRpb24gJiBzeW5jIHJlcXVlc3RzIHRvIHRoZSBjb21wb3NpdG9yXG4gIGRpc3BsYXkuZmx1c2goKVxuXG4gIC8vIHdhaXQgZm9yIGNvbXBvc2l0b3IgdG8gaGF2ZSBwcm9jZXNzZWQgYWxsIG91ciBvdXRnb2luZyByZXF1ZXN0c1xuICBhd2FpdCBzeW5jUHJvbWlzZVxuXG4gIC8vIE5vdyBiZWdpbiBkcmF3aW5nIGFmdGVyIHRoZSBjb21wb3NpdG9yIGlzIGRvbmUgcHJvY2Vzc2luZyBhbGwgb3VyIHJlcXVlc3RzXG4gIHdpbmRvdy5pbml0KClcbiAgd2luZG93LmRyYXcoMClcblxuICAvLyB3YWl0IGZvciB0aGUgZGlzcGxheSBjb25uZWN0aW9uIHRvIGNsb3NlXG4gIHRyeSB7XG4gICAgYXdhaXQgZGlzcGxheS5vbkNsb3NlKClcbiAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb24gZXhpdC4nKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignQXBwbGljYXRpb24gdGVybWluYXRlZCB3aXRoIGVycm9yLicpXG4gICAgY29uc29sZS5lcnJvcihlLnN0YWNrVHJhY2UpXG4gIH1cbn1cblxubWFpbigpXG4iXSwic291cmNlUm9vdCI6IiJ9
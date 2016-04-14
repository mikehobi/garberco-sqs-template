/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./js_src/app.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _core = __webpack_require__(/*! ./core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _router = __webpack_require__(/*! ./router */ 56);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _overlay = __webpack_require__(/*! ./overlay */ 67);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _gallery = __webpack_require__(/*! ./gallery */ 71);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	/**
	 *
	 * @public
	 * @class App
	 * @classdesc Load the App application Class to handle it ALL.
	 *
	 */
	
	var App = (function () {
	    function App() {
	        _classCallCheck(this, App);
	
	        this.core = core;
	        this.router = _router2["default"];
	        this.overlay = _overlay2["default"];
	        this.gallery = _gallery2["default"];
	        this.analytics = new core.Analytics();
	        this.$mainPanels = this.core.dom.header.find(".js-main-panel");
	
	        this.initModules();
	        this.bindEvents();
	
	        // @note:
	        // Remove cart until it has a use ?
	        (0, _js_libsHoboDistHoboBuild2["default"])(".absolute-cart-box").remove();
	
	        core.log("App", this);
	    }
	
	    /******************************************************************************
	     * Bootstrap
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method initModules
	     * @memberof App
	     * @description Initialize modules.
	     *
	     */
	
	    _createClass(App, [{
	        key: "initModules",
	        value: function initModules() {
	            this.core.detect.init(this);
	            this.core.resizes.init(this);
	            this.core.scrolls.init(this);
	            this.router.init(this);
	            this.overlay.init(this);
	            this.gallery.init(this);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method bindEvents
	         * @memberof App
	         * @description Bind top-level app events.
	         *
	         */
	    }, {
	        key: "bindEvents",
	        value: function bindEvents() {
	            this.core.dom.header.on("click", ".js-controller", this.onController.bind(this));
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onController
	         * @param {object} e The Event object
	         * @memberof App
	         * @description Handle controller links for main app.
	         *
	         */
	    }, {
	        key: "onController",
	        value: function onController(e) {
	            e.preventDefault();
	
	            var i = e.path.length;
	            var $controller = null;
	            var data = null;
	            var $target = null;
	
	            for (i; i--;) {
	                if (e.path[i].tagName === "A") {
	                    $controller = (0, _js_libsHoboDistHoboBuild2["default"])(e.path[i]);
	                    data = $controller.data();
	                    $target = this.core.dom.main.find(".js-main--" + data.target);
	                    break;
	                }
	            }
	
	            this.$mainPanels.removeClass("is-active");
	            $target.addClass("is-active");
	
	            this.core.dom.main[0].id = "is-main--" + data.target;
	        }
	    }]);
	
	    return App;
	})();
	
	window.Squarespace.onInitialize(window.Y, function () {
	    window.app = new App();
	});

/***/ },
/* 1 */
/*!*****************************************!*\
  !*** ./js_libs/hobo/dist/hobo.build.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(/*! -!./~/expose-loader?hobo!./js_libs/hobo/dist/hobo.build.js */ 2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!****************************************************************!*\
  !*** ./~/expose-loader?hobo!./js_libs/hobo/dist/hobo.build.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["hobo"] = __webpack_require__(/*! -!./js_libs/hobo/dist/hobo.build.js */ 3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/*!*****************************************!*\
  !*** ./js_libs/hobo/dist/hobo.build.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 *
	 * @method hobo
	 * @author kitajchuk
	 * @hobo-dist npm run build -- is eq not attr next prev last first remove append detach parent filter closest trigger removeAttr
	 *
	 * @links
	 * https://developer.mozilla.org/en-US/docs/Web/API/Node
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element
	 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	 * https://github.com/jakearchibald/es6-promise
	 * http://www.html5rocks.com/en/tutorials/es6/promises/
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.hobo = factory();
	    }
	
	})(function () {
	
	    var Hobo = __webpack_require__( /*! ../lib/Hobo */ 4 ),
	        utils = __webpack_require__( /*! ../lib/utils */ 5 );
	
	
	    // Core Hobo methods:
	    Hobo.prototype.on = __webpack_require__( /*! ../lib/core/on */ 6 );
	    Hobo.prototype.off = __webpack_require__( /*! ../lib/core/off */ 8 );
	    Hobo.prototype.data = __webpack_require__( /*! ../lib/core/data */ 9 );
	    Hobo.prototype.find = __webpack_require__( /*! ../lib/core/find */ 10 );
	    Hobo.prototype.addClass = __webpack_require__( /*! ../lib/core/addClass */ 11 );
	    Hobo.prototype.removeClass = __webpack_require__( /*! ../lib/core/removeClass */ 12 );
	
	
	    // Extended Hobo methods:
	    Hobo.prototype.is = __webpack_require__( /*! ../lib/extended/is */ 13 );
	    Hobo.prototype.eq = __webpack_require__( /*! ../lib/extended/eq */ 14 );
	    Hobo.prototype.not = __webpack_require__( /*! ../lib/extended/not */ 15 );
	    Hobo.prototype.attr = __webpack_require__( /*! ../lib/extended/attr */ 16 );
	    Hobo.prototype.next = __webpack_require__( /*! ../lib/extended/next */ 17 );
	    Hobo.prototype.prev = __webpack_require__( /*! ../lib/extended/prev */ 18 );
	    Hobo.prototype.last = __webpack_require__( /*! ../lib/extended/last */ 19 );
	    Hobo.prototype.first = __webpack_require__( /*! ../lib/extended/first */ 20 );
	    Hobo.prototype.remove = __webpack_require__( /*! ../lib/extended/remove */ 21 );
	    Hobo.prototype.append = __webpack_require__( /*! ../lib/extended/append */ 22 );
	    Hobo.prototype.detach = __webpack_require__( /*! ../lib/extended/detach */ 23 );
	    Hobo.prototype.parent = __webpack_require__( /*! ../lib/extended/parent */ 24 );
	    Hobo.prototype.filter = __webpack_require__( /*! ../lib/extended/filter */ 25 );
	    Hobo.prototype.closest = __webpack_require__( /*! ../lib/extended/closest */ 26 );
	    Hobo.prototype.trigger = __webpack_require__( /*! ../lib/extended/trigger */ 27 );
	    Hobo.prototype.removeAttr = __webpack_require__( /*! ../lib/extended/removeAttr */ 28 );
	
	
	    /**
	     *
	     * @public
	     * @method hobo
	     * @description Wrapper for `Hobo` instances.
	     * @param {string} selector The parameter passed to `querySelectorAll`
	     * @param {element} context The Element used to call `querySelectorAll`
	     *
	     */
	    hobo = function ( selector, context ) {
	        return new Hobo( selector, context );
	    };
	
	
	    // Attach Hobo utilities to `wrapper` method
	    hobo.ajax = __webpack_require__( /*! ../lib/core/ajax */ 29 );
	
	
	    return hobo;
	
	});

/***/ },
/* 4 */
/*!**********************************!*\
  !*** ./js_libs/hobo/lib/Hobo.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * 
	 * @Hobo
	 * @author: kitajchuk
	 *
	 *
	 */
	var utils = __webpack_require__( /*! ./utils */ 5 ),
	    array = [];
	
	
	/**
	 *
	 * @class Hobo
	 * @classdesc A very small, modular DOM utility for modern web apps.
	 * @param {string} selector The goods - String, Element, Collection.
	 * @param {element} context The Element used to call `querySelectorAll`
	 *
	 */
	var Hobo = function ( selector, context ) {
	    // Hobo version?
	    this._hobo = utils.version;
	
	    // Hobo context
	    this._context = (context && context.nodeType && context.nodeType === 1 ? context : document);
	
	    // Hobo selector / elements
	    // Hobo supports a mixed selector argument
	
	    // Handle Window
	    // Handle Document
	    // Handle DOMElement
	    if ( selector === window || selector === document || (selector.nodeType && selector.nodeType === 1) ) {
	        this._selector = "";
	        selector = [ selector ];
	
	    // Handle String
	    } else if ( typeof selector === "string" ) {
	        // Trim trailing whitespace from the string
	        selector = utils.trimString( selector );
	
	        // Handle string html => Element creation
	        if ( utils.rTag.test( selector ) ) {
	            // Then remove the doctype - `<!DOCTYPE html>`
	            selector = selector.replace( utils.rDocType, "" );
	
	            // Create a dummy `hobo` element
	            // Dump the HTML payload in the `hobo` element
	            // Extract the elements from the `hobo` element
	            var el = document.createElement( "hobo" );
	                el.innerHTML = selector;
	
	            // Format elements as a true Array
	            selector = utils.makeArray( el.children );
	
	            el = null;
	
	        // Handle string selector
	        } else {
	            this._selector = selector;
	            selector = utils.makeArray( this._context.querySelectorAll( selector ) );
	        }
	
	    // Handle Collection: NodeList, HTMLCollection, Array
	    } else if ( selector.length !== undefined ) {
	        this._selector = "";
	        selector = utils.makeArray( selector );
	    }
	
	    // Hobo events?
	    this._events = {};
	
	    // Hobo length?
	    this.length = selector.length;
	
	    // Hobo elements?
	    for ( var i = this.length; i--; ) {
	        this[ i ] = selector[ i ];
	    }
	
	    // Initial mapping of each nodes data.
	    // Transfer {DOMStringMap} => {hoboDataMap}
	    this.forEach( utils.makeData );
	};
	
	
	// Shim Array-like presentation in console
	Hobo.prototype.splice = array.splice;
	
	
	/**
	 *
	 * @instance
	 * @method forEach
	 * @param {function} callback The method called on each iteration
	 * @memberof Hobo
	 * @description Make sure Hobo is iterable like an Array
	 *
	 */
	Hobo.prototype.each = array.forEach;
	Hobo.prototype.forEach = array.forEach;
	
	
	/**
	 *
	 * @instance
	 * @method push
	 * @param {?} element element1, ..., elementN
	 * @memberof Hobo
	 * @description Make sure Hobo is pushable like an Array
	 *
	 */
	Hobo.prototype.push = array.push;
	
	
	/**
	 *
	 * @instance
	 * @method map
	 * @param {function} callback The method called for each element
	 * @memberof Hobo
	 * @description Make sure Hobo is mappable like an Array
	 *
	 */
	Hobo.prototype.map = array.map;
	
	
	// Export the main Hobo Class :D
	module.exports = Hobo;

/***/ },
/* 5 */
/*!***********************************!*\
  !*** ./js_libs/hobo/lib/utils.js ***!
  \***********************************/
/***/ function(module, exports) {

	/*!
	 *
	 *
	 * @Hobo-utils
	 * @author: kitajchuk
	 *
	 *
	 */
	var version = "0.3.6",
	
	
	    rData = /^data-/,
	
	
	    rDigit = /\D/g,
	
	
	    rDashAlpha = /-([\da-z])/gi,
	
	
	    rTag = /^</,
	
	
	    rJson = /^\[|\{/,
	
	
	    rDocType = /^<\!DOCTYPE\shtml>/i,
	
	
	    rFront2Back = /^\s+|\s+$/g,
	
	
	    trimString = function ( str ) {
	        return str.replace( rFront2Back, "" );
	    },
	
	
	    camelCase = function ( string ) {
	        return string.replace( rDashAlpha, function ( all, letter ) {
	            return letter.toUpperCase();
	        });
	    },
	
	
	    makeId = function () {
	        return ("hobo" + ( version + Math.random() ).replace( rDigit, "" ));
	    },
	
	
	    makeArray = function ( nodes ) {
	        return [].slice.call( nodes );
	    },
	
	
	    makeData = function ( node ) {
	        if ( !node.hoboDataMap ) {
	            node.hoboDataMap = {};
	        }
	
	        if ( node.dataset ) {
	            _mapDataset( node );
	
	        } else if ( node.attributes ) {
	            _mapAttributes( node );
	        }
	    },
	
	
	    storeData = function ( data, node ) {
	        var id,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                id = camelCase( i );
	
	                node.hoboDataMap[ id ] = data[ i ];
	            }
	        }
	    },
	
	
	    mergeData = function ( data, node ) {
	        for ( var i in node.hoboDataMap ) {
	            if ( node.hoboDataMap.hasOwnProperty( i ) && !data[ i ] ) {
	                data[ i ] = node.hoboDataMap[ i ];
	            }
	        }
	    },
	
	
	    retrieveData = function ( key, node ) {
	        var ret = null;
	
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            ret = node.hoboDataMap[ key ];
	        }
	
	        return ret;
	    },
	
	
	    removeData = function ( key, node ) {
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            delete node.hoboDataMap[ key ];
	        }
	    },
	
	
	    serializeData = function ( data, prefix ) {
	        var str = [],
	            key,
	            val,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                key = prefix ? (prefix + "[" + i + "]") : i;
	                val = data[ i ];
	
	                if ( typeof val === "object" ) {
	                    str.push( serializeData( val, key ) );
	
	                } else {
	                    str.push( (encodeURIComponent( key ) + "=" + encodeURIComponent( val )) );
	                }
	            }
	        }
	
	        return str.join( "&" );
	    },
	
	
	    // DOMStringMap camel-cases data- attributes.
	    // NamedNodeMap is a fallback which supports IE 10.
	    // Data mapped through Hobo must camel-case as well.
	
	
	    _getDataValue = function ( data ) {
	        if ( rJson.test( data ) ) {
	            try {
	                data = JSON.parse( data );
	
	            } catch ( error ) {
	                throw error;
	            }
	        }
	
	        return data;
	    },
	
	
	    // Use {NamedNodeMap}
	    _mapAttributes = function ( node ) {
	        var i = node.attributes.length;
	
	        for ( i; i--; ) {
	            if ( rData.test( node.attributes[ i ].name ) ) {
	                var key = camelCase( node.attributes[ i ].name.replace( rData, "" ) );
	
	                node.hoboDataMap[ key ] = _getDataValue( node.attributes[ i ].value );
	            }
	        }
	    },
	
	
	    // Use {DOMStringMap}
	    _mapDataset = function ( node ) {
	        for ( var i in node.dataset ) {
	            if ( node.dataset.hasOwnProperty( i ) ) {
	                node.hoboDataMap[ i ] = _getDataValue( node.dataset[ i ] );
	            }
	        }
	    };
	
	
	module.exports = {
	    version: version,
	    rData: rData,
	    rDigit: rDigit,
	    rTag: rTag,
	    rJson: rJson,
	    rDocType: rDocType,
	    rFront2Back: rFront2Back,
	    trimString: trimString,
	    camelCase: camelCase,
	    makeId: makeId,
	    makeArray: makeArray,
	    makeData: makeData,
	    storeData: storeData,
	    retrieveData: retrieveData,
	    mergeData: mergeData,
	    removeData: removeData,
	    serializeData: serializeData
	};

/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./js_libs/hobo/lib/core/on.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var matchElement = __webpack_require__( /*! properjs-matchelement */ 7 ),
	    utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @private
	 * @method bind
	 * @description Bind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {string} selector
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var bind = function ( node, event, selector, callback ) {
	    // Unique ID for each node event
	    var eventId = (utils.makeId() + "EVENT"),
	
	        // The true event name
	        eventType = event,
	
	        // Normalize event handler with a small wrapper function
	        eventHandler = function ( e ) {
	            // Default context is `this` element
	            var context = (selector ? matchElement( e.target, selector, true ) : this);
	
	            // Handle `mouseenter` and `mouseleave`
	            if ( event === "mouseenter" || event === "mouseleave" ) {
	                var relatedElement = (event === "mouseenter" ? e.fromElement : e.toElement);
	
	                if ( context && ( relatedElement !== context && !context.contains( relatedElement ) ) ) {
	                    callback.call( context, e );
	                }
	
	            // Fire callback if context element
	            } else if ( context ) {
	                callback.call( context, e );
	            }
	        };
	
	    // Support `mouseenter` and `mouseleave`
	    if ( event === "mouseenter" ) {
	        eventType = "mouseover";
	
	    } else if ( event === "mouseleave" ) {
	        eventType = "mouseout";
	    }
	
	    // Each handler/callback pair gets stored in an `events` index
	    this._events[ event ][ eventId ] = {
	        id: eventId,
	        type: eventType,
	        node: node,
	        handler: eventHandler,
	        callback: callback
	    };
	
	    node.addEventListener( eventType, eventHandler, false );
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method on
	 * @description Bind a standard DOM Event. Honor delegation as a primary.
	 * @param {string} events 
	 * @param {string} selector 
	 * @param {function} callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, selector, callback ) {
	    var self = this;
	
	    // Normalize `selector` and `callback`
	    if ( !callback ) {
	        callback = selector;
	        selector = this._selector;
	    }
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    events.split( " " ).forEach(function ( event ) {
	        // Does this event type have an index yet
	        if ( !self._events[ event ] ) {
	            self._events[ event ] = {};
	        }
	
	        self.forEach(function ( node ) {
	            bind.call( self, node, event, selector, callback );
	        });
	    });
	
	    return this;
	};

/***/ },
/* 7 */
/*!**************************************************************!*\
  !*** ./js_libs/hobo/~/properjs-matchelement/matchElement.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Use native element selector matching
	 *
	 * @matchElement
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.matchElement = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Use native element selector matching
	     * @memberof! <global>
	     * @method matchElement
	     * @param {object} el the element
	     * @param {string} selector the selector to match
	     * @param {boolean} walk should we walk the tree if el is not a match?
	     * @returns element OR null
	     *
	     */
	    var matchElement = function ( el, selector, walk ) {
	        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
	                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
	                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
	                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
	                                      "oMatchesSelector" : null;
	
	        // Try testing the element against the selector
	        // 0.1 => Method is not undefined
	        // 0.2 => Element passes method call
	        if ( method && el[ method ].call( el, selector ) ) {
	            return el;
	
	        // Keep walking up the DOM if we can - only if `walk` flag is `true`
	        } else if ( walk && el !== document.documentElement && el.parentNode ) {
	            return matchElement( el.parentNode, selector, walk );
	
	        // Otherwise we should not execute an event
	        } else {
	            return null;
	        }
	    };
	
	
	    return matchElement;
	
	});

/***/ },
/* 8 */
/*!**************************************!*\
  !*** ./js_libs/hobo/lib/core/off.js ***!
  \**************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @private
	 * @method unbind
	 * @description Unbind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var unbind = function ( node, event, callback ) {
	    var type,
	        evo,
	        id;
	
	    // Remove a single handler for an event type
	    if ( callback ) {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes, Match the callback
	                if ( evo.node === node && evo.callback === callback ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	
	    // Remove all handlers for an event type
	    } else {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes
	                if ( evo.node === node ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @private
	 * @method teardown
	 * @description Unbind all events for instance.
	 * @param {element} node
	 * @this {Hobo}
	 *
	 */
	var teardown = function ( node ) {
	    var type,
	        evo,
	        id;
	
	    for ( type in this._events ) {
	        if ( this._events.hasOwnProperty( type ) ) {
	            for ( id in this._events[ type ] ) {
	                if ( this._events[ type ].hasOwnProperty( id ) ) {
	                    evo = this._events[ type ][ id ];
	
	                    // Match the nodes
	                    if ( evo.node === node ) {
	                        node.removeEventListener( evo.type, evo.handler, false );
	
	                        delete this._events[ type ][ id ];
	                    }
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method off
	 * @description Un-Bind a standard DOM Event.
	 * @param {string} events The event type
	 * @param {function} callback The supplied callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, callback ) {
	    var self = this;
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    // off() can be called with no args, account for this and remove ALL events
	    (events ? events.split( " " ) : [null]).forEach(function ( event ) {
	        self.forEach(function ( node ) {
	            // Explicit `null` check for teardown
	            if ( event === null ) {
	                teardown.call( self, node );
	
	            } else {
	                unbind.call( self, node, event, callback );
	            }
	        });
	    });
	
	    return this;
	};

/***/ },
/* 9 */
/*!***************************************!*\
  !*** ./js_libs/hobo/lib/core/data.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method data
	 * @description Get / set data values with nodes.
	 * @param {string} key The access key
	 * @param {string} value The value to be stored
	 * @returns {mixed}
	 *
	 */
	module.exports = function ( key, value ) {
	    // Any `non-unique` data keys resolve to the first unique occurrence
	    // Exactly how jQuery handles `.data( ... )` on multi-node collections
	
	    var ret = this,
	        obj = null;
	
	    // Storing data from an Object
	    if ( typeof key === "object" ) {
	        obj = key;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Storing data as a `key:value` pair
	    } else if ( value ) {
	        obj = {};
	        obj[ key ] = value;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Accessing data by `key`
	    } else if ( key ) {
	        this.forEach(function ( node ) {
	            if ( obj !== null ) {
	                return;
	            }
	
	            obj = utils.retrieveData( key, node );
	
	        });
	
	        ret = obj;
	
	    // Accessing all data
	    // Merges all `unique` data for a Hobo set
	    } else {
	        obj = {};
	
	        // Object is mutated here by `mergeData`
	        this.forEach(function ( node ) {
	            utils.mergeData( obj, node );
	        });
	
	        ret = obj;
	    }
	
	    return ret;
	};

/***/ },
/* 10 */
/*!***************************************!*\
  !*** ./js_libs/hobo/lib/core/find.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method find
	 * @description Query into a Hobo instance for new nodes.
	 * @param {string} selector The selector to query for
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var ret = this;
	
	    // If we are `finding` within a multi-node collection...
	    // Here its probably faster to grab the nodes within each Node
	    // and then just let the context be the document for the new instance. 
	    if ( this.length > 1 ) {
	        ret = [];
	
	        this.forEach(function ( node ) {
	            ret = ret.concat( utils.makeArray( node.querySelectorAll( selector ) ) );
	        });
	
	        ret = new Hobo( ret, null );
	
	    // Single node collection
	    // Empty node collection
	    } else {
	        ret = new Hobo( (this.length ? selector : []), (this.length ? this[ 0 ] : null) );
	    }
	
	    return ret;
	};

/***/ },
/* 11 */
/*!*******************************************!*\
  !*** ./js_libs/hobo/lib/core/addClass.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method addClass
	 * @description Add one or more classNames to the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        var newClass = classes.split( " " ),
	            elsClass = element.className.split( " " );
	
	        newClass.forEach(function ( klass ) {
	            if ( elsClass.indexOf( klass ) === -1 ) {
	                elsClass.push( klass );
	            }
	        });
	
	        element.className = utils.trimString( elsClass.join( " " ) );
	    });
	
	    return this;
	};

/***/ },
/* 12 */
/*!**********************************************!*\
  !*** ./js_libs/hobo/lib/core/removeClass.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method removeClass
	 * @description Remove one or more classNames from the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        // Explicit check for `undefined`
	        // Using `!classes` would be bad in this case
	        // Calling `removeClass( "" )` should not wipe the entire className
	        if ( classes === undefined ) {
	            element.className = "";
	
	        } else {
	            var oldClass = classes.split( " " ),
	                elsClass = element.className.split( " " );
	
	            oldClass.forEach(function ( klass ) {
	                if ( elsClass.indexOf( klass ) !== -1 ) {
	                    elsClass.splice( elsClass.indexOf( klass ), 1 );
	                }
	            });
	
	            element.className = utils.trimString( elsClass.join( " " ) );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 13 */
/*!*****************************************!*\
  !*** ./js_libs/hobo/lib/extended/is.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    matchElement = __webpack_require__( /*! properjs-matchelement */ 7 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method is
	 * @param {string} selector The selector to match elements against
	 * @description Determine if a node set is this selector.
	 * @returns {boolean}
	 *
	 */
	module.exports = function ( selector ) {
	    return (matchElement( this[ 0 ], selector ) ? true : false);
	};

/***/ },
/* 14 */
/*!*****************************************!*\
  !*** ./js_libs/hobo/lib/extended/eq.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method eq
	 * @param {number} i The indexOf the element
	 * @description Get the element at the index as a Hobo instance.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( i ) {
	    return i < this.length 
	            ? new Hobo(
	                this[ i ],
	                this._context
	            ) 
	            : this;
	};

/***/ },
/* 15 */
/*!******************************************!*\
  !*** ./js_libs/hobo/lib/extended/not.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var matchElement = __webpack_require__( /*! properjs-matchelement */ 7 ),
	    Hobo = __webpack_require__( /*! ../Hobo */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method not
	 * @param {string} selector The selector to filter out elements
	 * @description Filter out elements that are NOT this selector
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var keepers = new Hobo( [], this._context );
	
	    // Hobo instance
	    if ( selector instanceof Hobo ) {
	        this.forEach(function ( node ) {
	            var pushNode = true;
	
	            selector.forEach(function ( elem ) {
	                if ( node === elem ) {
	                    pushNode = false;
	                }
	            });
	
	            if ( pushNode ) {
	                keepers.push( node );
	            }
	        });
	
	    } else {
	        this.forEach(function ( node, i ) {
	            if ( typeof selector === "function" ) {
	                if ( selector( i, node ) ) {
	                    keepers.push( node );
	                }
	
	            } else if ( !matchElement( node, selector ) ) {
	                keepers.push( node );
	            }
	        });
	    }
	
	    return keepers;
	};

/***/ },
/* 16 */
/*!*******************************************!*\
  !*** ./js_libs/hobo/lib/extended/attr.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method addAttr
	 * @param {element} node The element to set attribute on
	 * @param {string} key The attribute
	 * @param {mixed} value The value to set
	 * @description Get or Set an attribute(s) on a DOM node
	 * @returns {string}
	 *
	 */
	var addAttr = function ( node, key, value ) {
	    node.setAttribute( key, value );
	
	    // Apply data()?
	    if ( utils.rData.test( key ) ) {
	        // storeData expects a {data object}
	        var obj = {};
	
	        obj[ key.replace( utils.rData, "" ) ] = value;
	
	        utils.storeData( obj, node );
	    }
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method attr
	 * @param {string} key The attribute
	 * @param {mixed} value The value to set
	 * @description Get or Set an attribute(s) on a DOM node
	 * @returns {string}
	 *
	 */
	module.exports = function ( key, value ) {
	    var ret = this;
	
	    // Value can be an {object}
	    if ( typeof key === "object" ) {
	        for ( var i in key ) {
	            this.forEach(function ( node ) {
	                addAttr( node, i, key[ i ] );
	            });
	        }
	
	    // Value could possibly be "" or 0
	    } else if ( value !== undefined ) {
	        this.forEach(function ( node ) {
	            addAttr( node, key, value );
	        });
	
	    } else {
	        ret = this[ 0 ].getAttribute( key );
	    }
	
	    return ret;
	};

/***/ },
/* 17 */
/*!*******************************************!*\
  !*** ./js_libs/hobo/lib/extended/next.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    matchElement = __webpack_require__( /*! properjs-matchelement */ 7 );
	
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method next
	 * @param {string} selector Optional selector to match
	 * @description Get the next sibling, test against selector
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var ret = [];
	
	    this.forEach(function ( node ) {
	        var nextNode = node.nextSibling;
	
	        while ( nextNode && nextNode.nodeType !== 1 ) {
	            nextNode = nextNode.nextSibling;
	        }
	
	        if ( nextNode && (!selector || (selector && matchElement( nextNode, selector ))) ) {
	            ret.push( nextNode );
	        }
	    });
	
	    return new Hobo( ret, this._context );
	};

/***/ },
/* 18 */
/*!*******************************************!*\
  !*** ./js_libs/hobo/lib/extended/prev.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    matchElement = __webpack_require__( /*! properjs-matchelement */ 7 );
	
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method prev
	 * @param {string} selector Optional selector to match
	 * @description Get the previous sibling, test against selector
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var ret = [];
	
	    this.forEach(function ( node ) {
	        var prevNode = node.previousSibling;
	
	        while ( prevNode && prevNode.nodeType !== 1 ) {
	            prevNode = nextNode.previousSibling;
	        }
	
	        if ( prevNode && (!selector || (selector && matchElement( prevNode, selector ))) ) {
	            ret.push( prevNode );
	        }
	    });
	
	    return new Hobo( ret, this._context );
	};

/***/ },
/* 19 */
/*!*******************************************!*\
  !*** ./js_libs/hobo/lib/extended/last.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method last
	 * @description Get hobo instance of the last element.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function () {
	    return new Hobo( this[ (this.length - 1) ], this._context );
	};

/***/ },
/* 20 */
/*!********************************************!*\
  !*** ./js_libs/hobo/lib/extended/first.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method first
	 * @description Get hobo instance of the first element.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function () {
	    return new Hobo( this[ 0 ], this._context );
	};

/***/ },
/* 21 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/remove.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method remove
	 * @description Remove the nodes from the DOM
	 *              This method will remove events and data.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function () {
	    // Remove Events
	    this.off();
	
	    this.forEach(function ( node ) {
	        // Remove Data
	        // Could this cause issues ?
	        delete node.hoboDataMap;
	
	        if ( node.parentNode ) {
	            node.parentNode.removeChild( node );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 22 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/append.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method append
	 * @param {mixed} appendage What to append? Hobo, Element...
	 * @description Append the nodes to the DOM
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( appendage ) {
	    // Selector string, wrap in new Hobo instance
	    if ( typeof appendage === "string" ) {
	        appendage = new Hobo( appendage );
	    }
	
	    this.forEach(function ( node ) {
	        // Hobo instance OR Array OR Array-like object with forEach
	        if ( appendage instanceof Hobo || (appendage.length && typeof appendage.forEach === "function") ) {
	            appendage.forEach(function ( append ) {
	                if ( append.nodeType && append.nodeType === 1 ) {
	                    node.appendChild( append );
	                }
	            });
	
	        } else if ( appendage.nodeType ) {
	            node.appendChild( appendage );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 23 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/detach.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method detach
	 * @description Detach the nodes from the DOM
	 *              This method does NOT remove events or data.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function () {
	    this.forEach(function ( node ) {
	        if ( node.parentNode ) {
	            node.parentNode.removeChild( node );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 24 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/parent.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    matchElement = __webpack_require__( /*! properjs-matchelement */ 7 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method parent
	 * @param {string} selector Optional selector to match
	 * @description Get a Hobo instance of the parent node of this instance.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var parents = [];
	
	    this.forEach(function ( node ) {
	        if ( !selector || (selector && matchElement( node.parentNode, selector )) ) {
	            parents.push( node.parentNode );
	        }
	    });
	
	    return new Hobo( parents, null );
	};

/***/ },
/* 25 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/filter.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    matchElement = __webpack_require__( /*! properjs-matchelement */ 7 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method filter
	 * @param {string} selector The selector to match elements against
	 * @description Filter out the elements that match the selector.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var filtered = [];
	
	    this.forEach(function ( node ) {
	        if ( matchElement( node, selector ) ) {
	            filtered.push( node );
	        }
	    });
	
	    return new Hobo( filtered, null );
	};

/***/ },
/* 26 */
/*!**********************************************!*\
  !*** ./js_libs/hobo/lib/extended/closest.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    matchElement = __webpack_require__( /*! properjs-matchelement */ 7 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method closest
	 * @param {string} selector The selector to try and match
	 * @description Find the first ancestor element with this selector
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var closest = [];
	
	    this.forEach(function ( node ) {
	        var match = matchElement( node, selector, true );
	
	        if ( match ) {
	            closest.push( match );
	        }
	    });
	
	    return new Hobo( closest, null );
	};

/***/ },
/* 27 */
/*!**********************************************!*\
  !*** ./js_libs/hobo/lib/extended/trigger.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method trigger
	 * @description Dispatch a simulated event.
	 * @param {string} event The event to dispatch
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( event ) {
	    var self = this,
	        evo,
	        id;
	
	    this.forEach(function ( node ) {
	        for ( id in self._events[ event ] ) {
	            if ( self._events[ event ].hasOwnProperty( id ) ) {
	                evo = self._events[ event ][ id ];
	
	                // Match the nodes
	                if ( evo.node === node ) {
	                    evo = document.createEvent( "Events" );
	
	                    evo.initEvent( event, true, false );
	
	                    node.dispatchEvent( evo );
	                }
	            }
	        }
	    });
	
	    return this;
	};

/***/ },
/* 28 */
/*!*************************************************!*\
  !*** ./js_libs/hobo/lib/extended/removeAttr.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method removeAttr
	 * @description Remove the specified attribute from each node in the set.
	 * @returns {Hobo}
	 *
	 * @note This method needs to update data() in case we remove data-attr's
	 *
	 */
	module.exports = function ( attr ) {
	    this.forEach(function ( node ) {
	        node.removeAttribute( attr );
	
	        // Remove data()?
	        if ( utils.rData.test( attr ) ) {
	            utils.removeData( attr.replace( utils.rData, "" ), node );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 29 */
/*!***************************************!*\
  !*** ./js_libs/hobo/lib/core/ajax.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @static
	 * @memberof Hobo
	 * @method ajax
	 * @description Perform standar XHR with a native Promise.
	 *              dataType can be `html`, `json`, `jsonp`.
	 * @param {object} config The ajax config object
	 *                        url       => string, default: window.location.href
	 *                        data      => object, default: null
	 *                        dataType  => string, default: "html"
	 *                        method    => string, default: "GET"
	 *                        jsonp     => string, default: "callback"
	 *                        headers   => object, default: null
	 * @returns {Promise}
	 *
	 */
	module.exports = function ( config ) {
	    var params = (config.data || null),
	        dataType = (config.dataType || "html"),
	        method = (config.method || "GET").toUpperCase(),
	        url = (config.url || window.location.href),
	        headers = (config.headers || null);
	
	    // Handle params
	    // Params will be one of the following:
	    // Serialized querystring
	    // Instanceof FormData
	    // Null
	    if ( params && !(FormData && params instanceof FormData) ) {
	        params = utils.serializeData( config.data );
	    }
	
	    // Handle params in GET URL
	    if ( method === "GET" && params ) {
	        url += ("?" + params);
	    }
	
	    return new Promise(function ( resolve, reject ) {
	        var handleResponse = function ( response ) {
	            if ( dataType === "json" ) {
	                try {
	                    response = JSON.parse( response );
	
	                } catch ( error ) {
	                    reject( ("Rejecting on JSON.parse error : " + error) );
	                }
	            }
	
	            resolve( response );
	        };
	
	        // JSONP
	        if ( dataType === "jsonp" ) {
	            var jsonpCallbackValue = (utils.makeId() + "JSONP"),
	                jsonpCallbackKey = (config.jsonp || "callback"),
	                jsonpScript = document.createElement( "script" );
	
	            jsonpScript.src = (url + (/\?/.test( url ) ? "&" : "?") + jsonpCallbackKey + "=" + jsonpCallbackValue);
	
	            window[ jsonpCallbackValue ] = function ( response ) {
	                document.getElementsByTagName( "head" )[ 0 ].removeChild( jsonpScript );
	                jsonpScript = null;
	                delete window[ jsonpCallbackValue ];
	
	                handleResponse( response );
	            };
	
	            document.getElementsByTagName( "head" )[ 0 ].appendChild( jsonpScript );
	
	        // XHR
	        } else {
	            var xhr = new XMLHttpRequest();
	
	            xhr.open( method, url, true );
	
	            if ( headers ) {
	                for ( var header in headers ) {
	                    if ( headers.hasOwnProperty( header ) ) {
	                        xhr.setRequestHeader( header, headers[ header ] );
	                    }
	                }
	            }
	
	            xhr.onreadystatechange = function ( e ) {
	                if ( this.readyState === 4 ) {
	                    // Two-Hundo's are A-Okay with Hobo
	                    if ( /^20/.test( this.status ) ) {
	                        handleResponse( this.responseText );
	
	                    } else {
	                        reject( ("Rejecting on server status code : " + this.status) );
	                    }
	                }
	            };
	
	            xhr.send( params );
	        }
	    });
	};

/***/ },
/* 30 */
/*!******************************!*\
  !*** ./js_src/core/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * @public
	 * @module core
	 * @description Holds the different core modules.
	 *
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _detect = __webpack_require__(/*! ./detect */ 31);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _dom = __webpack_require__(/*! ./dom */ 32);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _images = __webpack_require__(/*! ./images */ 39);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _resizes = __webpack_require__(/*! ./resizes */ 43);
	
	var _resizes2 = _interopRequireDefault(_resizes);
	
	var _scrolls = __webpack_require__(/*! ./scrolls */ 48);
	
	var _scrolls2 = _interopRequireDefault(_scrolls);
	
	var _util = __webpack_require__(/*! ./util */ 33);
	
	var util = _interopRequireWildcard(_util);
	
	var _config = __webpack_require__(/*! ./config */ 36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _env = __webpack_require__(/*! ./env */ 38);
	
	var _env2 = _interopRequireDefault(_env);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _api = __webpack_require__(/*! ./api */ 51);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _cache = __webpack_require__(/*! ./cache */ 53);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _Analytics = __webpack_require__(/*! ./Analytics */ 55);
	
	var _Analytics2 = _interopRequireDefault(_Analytics);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 40);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _scroller = __webpack_require__(/*! ./scroller */ 49);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _resizer = __webpack_require__(/*! ./resizer */ 44);
	
	var _resizer2 = _interopRequireDefault(_resizer);
	
	exports.detect = _detect2["default"];
	exports.dom = _dom2["default"];
	exports.images = _images2["default"];
	exports.resizes = _resizes2["default"];
	exports.scrolls = _scrolls2["default"];
	exports.util = util;
	exports.config = _config2["default"];
	exports.env = _env2["default"];
	exports.log = _log2["default"];
	exports.api = _api2["default"];
	exports.cache = _cache2["default"];
	exports.Analytics = _Analytics2["default"];
	exports.emitter = _emitter2["default"];
	exports.scroller = _scroller2["default"];
	exports.resizer = _resizer2["default"];

/***/ },
/* 31 */
/*!*******************************!*\
  !*** ./js_src/core/detect.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 32);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	/**
	 *
	 * @public
	 * @module detect
	 * @description Handles basic detection of touch devices.
	 *
	 */
	var detect = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof detect
	     * @description Initializes the detect module.
	     *
	     */
	    init: function init() {
	        this._isTouch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
	        this._isMobile = /Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Opera Mini/gi.test(window.navigator.userAgent);
	
	        if (this._isTouch) {
	            _dom2["default"].html.addClass("is-touchable");
	        } else {
	            _dom2["default"].html.addClass("is-hoverable");
	        }
	
	        (0, _log2["default"])("detect initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method isMobile
	     * @memberof detect
	     * @description Check for high-end mobile device user agents.
	     * @returns {boolean}
	     *
	     */
	    isMobile: function isMobile() {
	        return this._isMobile;
	    },
	
	    /**
	     *
	     * @public
	     * @method isTouch
	     * @memberof detect
	     * @description Check whether this is a touch device or not.
	     * [See Modernizr]{@link https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js}
	     * @returns {boolean}
	     *
	     */
	    isTouch: function isTouch() {
	        return this._isTouch;
	    },
	
	    /**
	     *
	     * @public
	     * @method isDevice
	     * @memberof detect
	     * @description Must be `isMobile` and `isTouch`.
	     * @returns {boolean}
	     *
	     */
	    isDevice: function isDevice() {
	        return this.isTouch() && this.isMobile();
	    },
	
	    /**
	     *
	     * @public
	     * @method isStandalone
	     * @memberof detect
	     * @description Must be window.standalone.
	     * @returns {boolean}
	     *
	     */
	    isStandalone: function isStandalone() {
	        return "standalone" in window;
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = detect;
	module.exports = exports["default"];

/***/ },
/* 32 */
/*!****************************!*\
  !*** ./js_src/core/dom.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _util = __webpack_require__(/*! ./util */ 33);
	
	var util = _interopRequireWildcard(_util);
	
	var $_jsOverlay = (0, _js_libsHoboDistHoboBuild2["default"])(".js-overlay");
	var $_jsProject = (0, _js_libsHoboDistHoboBuild2["default"])(".js-project-view");
	var $_jsGallery = (0, _js_libsHoboDistHoboBuild2["default"])(".js-gallery");
	
	/**
	 *
	 * @public
	 * @module dom
	 * @description Holds high-level cached Nodes.
	 *
	 */
	var dom = {
	  /**
	   *
	   * @public
	   * @member doc
	   * @memberof dom
	   * @description The cached document node.
	   *
	   */
	  doc: (0, _js_libsHoboDistHoboBuild2["default"])(document),
	
	  /**
	   *
	   * @public
	   * @member html
	   * @memberof dom
	   * @description The cached documentElement node.
	   *
	   */
	  html: (0, _js_libsHoboDistHoboBuild2["default"])(document.documentElement),
	
	  /**
	   *
	   * @public
	   * @member body
	   * @memberof dom
	   * @description The cached body node.
	   *
	   */
	  body: (0, _js_libsHoboDistHoboBuild2["default"])(document.body),
	
	  /**
	   *
	   * @public
	   * @member header
	   * @memberof dom
	   * @description The cached header node.
	   *
	   */
	  header: (0, _js_libsHoboDistHoboBuild2["default"])(".js-header"),
	
	  /**
	   *
	   * @public
	   * @member nav
	   * @memberof dom
	   * @description The cached nav node.
	   *
	   */
	  nav: (0, _js_libsHoboDistHoboBuild2["default"])(".js-nav"),
	
	  /**
	   *
	   * @public
	   * @member overlay
	   * @memberof dom
	   * @description The cached overlay node.
	   *
	   */
	  overlay: {
	    element: $_jsOverlay,
	    elementTitle: $_jsOverlay.find(".js-overlay-title"),
	    elementTransitionDuration: util.getTransitionDuration($_jsOverlay[0])
	  },
	
	  /**
	   *
	   * @public
	   * @member gallery
	   * @memberof dom
	   * @description The cached gallery node.
	   *
	   */
	  gallery: {
	    element: $_jsGallery,
	    elementNode: $_jsGallery.find(".js-gallery-node")
	  },
	
	  /**
	   *
	   * @public
	   * @member page
	   * @memberof dom
	   * @description The cached page container node.
	   *
	   */
	  page: (0, _js_libsHoboDistHoboBuild2["default"])(".js-page"),
	
	  /**
	   *
	   * @public
	   * @member project
	   * @memberof dom
	   * @description The project view node.
	   *
	   */
	  project: {
	    element: $_jsProject,
	    elementPane: $_jsProject.find(".js-project-view-pane"),
	    elementTransitionDuration: util.getTransitionDuration($_jsProject[0])
	  },
	
	  /**
	   *
	   * @public
	   * @member root
	   * @memberof dom
	   * @description The cached root node.
	   *
	   */
	  root: (0, _js_libsHoboDistHoboBuild2["default"])(".js-root"),
	
	  /**
	   *
	   * @public
	   * @member main
	   * @memberof dom
	   * @description The cached main node.
	   *
	   */
	  main: (0, _js_libsHoboDistHoboBuild2["default"])(".js-main")
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = dom;
	module.exports = exports["default"];

/***/ },
/* 33 */
/*!*****************************!*\
  !*** ./js_src/core/util.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * @public
	 * @module util
	 * @description Houses app-wide utility methods.
	 *
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _hammerjs = __webpack_require__(/*! hammerjs */ 34);
	
	var _hammerjs2 = _interopRequireDefault(_hammerjs);
	
	var _properjsImageloader = __webpack_require__(/*! properjs-imageloader */ 35);
	
	var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);
	
	var _dom = __webpack_require__(/*! ./dom */ 32);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _config = __webpack_require__(/*! ./config */ 36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _detect = __webpack_require__(/*! ./detect */ 31);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	/**
	 *
	 * @description Add pixel units when inline styling
	 * @method px
	 * @param {string} str The value to pixel-ify
	 * @memberof util
	 * @returns {string}
	 *
	 */
	var px = function px(str) {
	    return str + "px";
	};
	
	/**
	 *
	 * @description Apply a translate3d transform
	 * @method translate3d
	 * @param {object} el The element to transform
	 * @param {string|number} x The x value
	 * @param {string|number} y The y value
	 * @param {string|number} z The z value
	 * @memberof util
	 *
	 */
	var translate3d = function translate3d(el, x, y, z) {
	    el.style[_hammerjs2["default"].prefixed(el.style, "transform")] = "translate3d( " + x + ", " + y + ", " + z + " )";
	};
	
	/**
	 *
	 * @description Module onImageLoadHander method, handles event
	 * @method isElementLoadable
	 * @param {object} el The DOMElement to check the offset of
	 * @memberof util
	 * @returns {boolean}
	 *
	 */
	var isElementLoadable = function isElementLoadable(el) {
	    if (el) {
	        var bounds = el.getBoundingClientRect();
	
	        return bounds.top < window.innerHeight * 2;
	    }
	};
	
	/**
	 *
	 * @description Module isElementInViewport method, handles element boundaries
	 * @method isElementInViewport
	 * @param {object} el The DOMElement to check the offsets of
	 * @memberof util
	 * @returns {boolean}
	 *
	 */
	var isElementInViewport = function isElementInViewport(el) {
	    if (el) {
	        var bounds = el.getBoundingClientRect();
	
	        return bounds.top < window.innerHeight && bounds.bottom > 0;
	    }
	};
	
	/**
	 *
	 * @method getClosestValue
	 * @memberof util
	 * @param {array} arr The array to process
	 * @param {number} closestTo The number to get close to
	 * @description Get closest number value without going under
	 * @returns {number}
	 *
	 */
	var getClosestValue = function getClosestValue(arr, closestTo) {
	    // Get the highest number in arr in case it matches nothing.
	    var close = Math.max.apply(null, arr);
	    var i = arr.length;
	
	    for (i; i--;) {
	        // Check if it's higher than your number, but lower than your closest value
	        if (arr[i] >= closestTo && arr[i] < close) {
	            close = arr[i];
	        }
	    }
	
	    return close;
	};
	
	/**
	 *
	 * @public
	 * @method getElementsInView
	 * @param {Hobo} $nodes The elements to check
	 * @memberof util
	 * @description Get only visible elements
	 * @returns {Hobo}
	 *
	 */
	var getElementsInView = function getElementsInView($nodes) {
	    var i = $nodes.length;
	    var $ret = (0, _js_libsHoboDistHoboBuild2["default"])([]);
	
	    for (i; i--;) {
	        if (isElementLoadable($nodes[i])) {
	            $ret.push($nodes[i]);
	        }
	    }
	
	    return $ret;
	};
	
	/**
	 *
	 * @description Update images that have already been loaded
	 * @method updateImages
	 * @param {Hobo} images The optional argument passed collection to reload
	 * @memberof util
	 *
	 */
	var updateImages = function updateImages(images) {
	    images = images || (0, _js_libsHoboDistHoboBuild2["default"])("[" + _config2["default"].imageLoaderAttr + "]");
	
	    if (images.length) {
	        images.removeAttr(_config2["default"].imageLoaderAttr);
	
	        loadImages(images, noop);
	    }
	};
	
	/**
	 *
	 * @description Fresh query to lazyload images on page
	 * @method loadImages
	 * @param {object} images Optional collection of images to load
	 * @param {function} handler Optional handler for load conditions
	 * @param {boolean} useVariant Optional flag to skip loading size variants
	 * @param {number} useWidth Optional manual width to determine variant against
	 * @memberof util
	 * @returns {instance}
	 *
	 */
	var loadImages = function loadImages(images, handler, useVariant, useWidth) {
	    var rQuery = /\?(.*)$/;
	    var map = function map(vnt) {
	        return parseInt(vnt, 10);
	    };
	    var $img = null;
	    var data = null;
	    var dims = null;
	    var vars = null;
	    var width = null;
	    var variant = null;
	    var source = null;
	    var i = null;
	
	    // Normalize the handler
	    handler = handler || isElementLoadable;
	
	    // Normalize the images
	    images = images || _dom2["default"].page.find(_config2["default"].lazyImageSelector);
	
	    // Normalize the `useVariant` flag
	    if (!useVariant && useVariant !== false) {
	        useVariant = true;
	    }
	
	    // Get the right size image from Squarespace
	    // http://developers.squarespace.com/using-the-imageloader/
	    // Depending on the original upload size, we have these variants
	    // {original, 1500w, 1000w, 750w, 500w, 300w, 100w}
	    i = images.length;
	
	    for (i; i--;) {
	        $img = images.eq(i);
	        data = $img.data();
	        width = useWidth || $img[0].clientWidth || $img[0].parentNode.clientWidth || window.innerWidth;
	        source = data.imgSrc.replace(rQuery, "");
	
	        // Pre-process portrait vs landscape using originalSize
	        if (data.originalSize) {
	            dims = getOriginalDims(data.originalSize);
	
	            if (dims.width > dims.height) {
	                $img.addClass("image--wide");
	            } else {
	                $img.addClass("image--tall");
	            }
	        }
	
	        if (useVariant && data.variants) {
	            vars = data.variants.split(",").map(map);
	            variant = getClosestValue(vars, width);
	
	            // If the pixel density is higher, use a larger image ?
	            if (window.devicePixelRatio > 1) {
	                // Splice off the variant that was matched
	                vars.splice(vars.indexOf(variant), 1);
	
	                // Apply the new, larger variant as the format
	                variant = getClosestValue(vars, variant);
	            }
	
	            $img[0].setAttribute(_config2["default"].lazyImageAttr, source + "?format=" + variant + "w");
	        }
	    }
	
	    return new _properjsImageloader2["default"]({
	        elements: images,
	        property: _config2["default"].lazyImageAttr,
	        transitionDelay: 0
	
	    }).on("data", handler);
	};
	
	/**
	 *
	 * @description Get the applied transition duration from CSS
	 * @method getTransitionDuration
	 * @param {object} el The DOMElement
	 * @memberof util
	 * @returns {number}
	 *
	 */
	var getTransitionDuration = function getTransitionDuration(el) {
	    var ret = 0;
	    var duration = null;
	    var isSeconds = false;
	    var multiplyBy = 1000;
	
	    if (el) {
	        duration = getComputedStyle(el)[_hammerjs2["default"].prefixed(el.style, "transition-duration")];
	        isSeconds = duration.indexOf("ms") === -1;
	        multiplyBy = isSeconds ? 1000 : 1;
	
	        ret = parseFloat(duration) * multiplyBy;
	    }
	
	    return ret;
	};
	
	/**
	 *
	 * @description All true all the time
	 * @method noop
	 * @memberof util
	 * @returns {boolean}
	 *
	 */
	var noop = function noop() {
	    return true;
	};
	
	/**
	 *
	 * @method getDefaultHammerOptions
	 * @memberof util
	 * @description The default options for Hammer JS.
	 *              Disables cssProps for non-touch experiences.
	 * @returns {object}
	 *
	 */
	var getDefaultHammerOptions = function getDefaultHammerOptions() {
	    return _detect2["default"].isDevice() ? {} : {
	        cssProps: {
	            contentZoomingString: false,
	            tapHighlightColorString: false,
	            touchCalloutString: false,
	            touchSelectString: false,
	            userDragString: false,
	            userSelectString: false
	        }
	    };
	};
	
	/**
	 *
	 * @public
	 * @method getOriginalDims
	 * @memberof util
	 * @param {string} original The original image dims
	 * @description Get an object reference to original dims.
	 *              Format: "1600x1600"
	 * @returns {object}
	 *
	 */
	var getOriginalDims = function getOriginalDims(original) {
	    var dims = original.split("x");
	
	    return {
	        width: parseInt(dims[0], 10),
	        height: parseInt(dims[1], 10)
	    };
	};
	
	/**
	 *
	 * @public
	 * @method getPageKey
	 * @memberof util
	 * @description Get the unique page key for cache and such
	 * @returns {object}
	 *
	 */
	var getPageKey = function getPageKey() {
	    var ret = null;
	
	    if (window.location.pathname === _config2["default"].appRoot) {
	        ret = _config2["default"].homepageKey;
	    } else {
	        ret = "" + window.location.pathname + window.location.search;
	    }
	
	    return ret;
	};
	
	/**
	 *
	 * @public
	 * @method extendObject
	 * @memberof util
	 * @param {object} target The target object/array
	 * @param {object} arrow The incoming object/array
	 * @description Merge or clone objects and arrays
	 * @returns {object}
	 *
	 */
	var extendObject = function extendObject(target, arrow) {
	    var i = null;
	    var ret = target;
	
	    // Normalize arrow
	    arrow = arrow || {};
	
	    // Merge Arrays
	    // This is really just used as a `cloning` mechanism
	    if (Array.isArray(arrow)) {
	        i = arrow.length;
	
	        for (i; i--;) {
	            ret[i] = arrow[i];
	        }
	
	        // Merge Objects
	        // This could `clone` as well, but is better for merging 2 objects
	    } else {
	            for (i in arrow) {
	                if (arrow.hasOwnProperty(i)) {
	                    ret[i] = arrow[i];
	                }
	            }
	        }
	
	    return ret;
	};
	
	/**
	 *
	 * @public
	 * @method slugify
	 * @memberof util
	 * @param {string} str The string to slug
	 * @description Slugify a string
	 * @returns {string}
	 *
	 */
	var slugify = function slugify(str) {
	    str = str.toString().toLowerCase().trim()
	    // Replace & with "and"
	    .replace(/&/g, "-and-")
	
	    // Replace spaces, non-word characters and dashes with a single dash (-)
	    .replace(/[\s\W-]+/g, "-")
	
	    // Replace leading trailing slashes with an empty string - nothing
	    .replace(/^[-]+|[-]+$/g, "");
	
	    return str ? _config2["default"].homepageKey : str;
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = {
	    px: px,
	    noop: noop,
	    slugify: slugify,
	    getPageKey: getPageKey,
	    loadImages: loadImages,
	    translate3d: translate3d,
	    extendObject: extendObject,
	    updateImages: updateImages,
	    getElementsInView: getElementsInView,
	    isElementLoadable: isElementLoadable,
	    isElementInViewport: isElementInViewport,
	    getTransitionDuration: getTransitionDuration,
	    getDefaultHammerOptions: getDefaultHammerOptions
	};
	module.exports = exports["default"];

/***/ },
/* 34 */
/*!******************************!*\
  !*** ./~/hammerjs/hammer.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.6 - 2015-12-23
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2015 Jorik Tangelder;
	 * Licensed under the  license */
	(function(window, document, exportName, undefined) {
	  'use strict';
	
	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');
	
	var TYPE_FUNCTION = 'function';
	
	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;
	
	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}
	
	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}
	
	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;
	
	    if (!obj) {
	        return;
	    }
	
	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}
	
	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	
	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	
	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean=false} [merge]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');
	
	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');
	
	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;
	
	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;
	
	    if (properties) {
	        assign(childP, properties);
	    }
	}
	
	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}
	
	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}
	
	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}
	
	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}
	
	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}
	
	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}
	
	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}
	
	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}
	
	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}
	
	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}
	
	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;
	
	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }
	
	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }
	
	    return results;
	}
	
	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);
	
	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;
	
	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}
	
	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}
	
	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}
	
	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	
	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	
	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';
	
	var COMPUTE_INTERVAL = 25;
	
	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;
	
	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;
	
	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	
	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	
	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;
	
	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };
	
	    this.init();
	
	}
	
	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },
	
	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },
	
	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};
	
	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;
	
	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}
	
	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
	
	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;
	
	    if (isFirst) {
	        manager.session = {};
	    }
	
	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;
	
	    // compute scale, rotation etc
	    computeInputData(manager, input);
	
	    // emit secret event
	    manager.emit('hammer.input', input);
	
	    manager.recognize(input);
	    manager.session.prevInput = input;
	}
	
	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;
	
	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }
	
	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }
	
	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	
	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;
	
	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);
	
	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	
	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
	
	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	
	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
	
	    computeIntervalInputData(session, input);
	
	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}
	
	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};
	
	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };
	
	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }
	
	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}
	
	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;
	
	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;
	
	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);
	
	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }
	
	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}
	
	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }
	
	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}
	
	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;
	
	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }
	
	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }
	
	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}
	
	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}
	
	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }
	
	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}
	
	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	
	    return Math.sqrt((x * x) + (y * y));
	}
	
	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}
	
	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}
	
	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}
	
	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};
	
	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	
	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;
	
	    this.allow = true; // used by Input.TouchMouse to disable mouse events
	    this.pressed = false; // mousedown state
	
	    Input.apply(this, arguments);
	}
	
	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];
	
	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }
	
	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }
	
	        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
	        if (!this.pressed || !this.allow) {
	            return;
	        }
	
	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }
	
	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});
	
	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};
	
	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};
	
	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
	
	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}
	
	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;
	
	    Input.apply(this, arguments);
	
	    this.store = (this.manager.session.pointerEvents = []);
	}
	
	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;
	
	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	
	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
	
	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
	
	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }
	
	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }
	
	        // update the event in the store
	        store[storeIndex] = ev;
	
	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });
	
	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});
	
	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;
	
	    Input.apply(this, arguments);
	}
	
	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
	
	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }
	
	        if (!this.started) {
	            return;
	        }
	
	        var touches = normalizeSingleTouches.call(this, ev, type);
	
	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);
	
	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }
	
	    return [all, changed];
	}
	
	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};
	
	    Input.apply(this, arguments);
	}
	
	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;
	
	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }
	
	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;
	
	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });
	
	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }
	
	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }
	
	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }
	
	    if (!changedTargetTouches.length) {
	        return;
	    }
	
	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}
	
	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */
	function TouchMouseInput() {
	    Input.apply(this, arguments);
	
	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
	}
	
	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
	
	        // when we're in a touch event, so  block all upcoming mouse events
	        // most mobile browser also emit mouseevents, right after touchstart
	        if (isTouch) {
	            this.mouse.allow = false;
	        } else if (isMouse && !this.mouse.allow) {
	            return;
	        }
	
	        // reset the allowMouse when we're done
	        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
	            this.mouse.allow = true;
	        }
	
	        this.callback(manager, inputEvent, inputData);
	    },
	
	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});
	
	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	
	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}
	
	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }
	
	        if (NATIVE_TOUCH_ACTION && this.manager.element.style) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },
	
	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },
	
	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },
	
	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        // not needed with native support for the touchAction property
	        if (NATIVE_TOUCH_ACTION) {
	            return;
	        }
	
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;
	
	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }
	
	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	
	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture
	
	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;
	
	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }
	
	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }
	
	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },
	
	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};
	
	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	
	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }
	
	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }
	
	    return TOUCH_ACTION_AUTO;
	}
	
	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;
	
	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});
	
	    this.id = uniqueId();
	
	    this.manager = null;
	
	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);
	
	    this.state = STATE_POSSIBLE;
	
	    this.simultaneous = {};
	    this.requireFail = [];
	}
	
	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},
	
	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },
	
	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }
	
	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },
	
	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }
	
	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },
	
	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },
	
	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },
	
	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;
	
	        function emit(event) {
	            self.manager.emit(event, input);
	        }
	
	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	
	        emit(self.options.event); // simple 'eventName' events
	
	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }
	
	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },
	
	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },
	
	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },
	
	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);
	
	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }
	
	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }
	
	        this.state = this.process(inputDataClone);
	
	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },
	
	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line
	
	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },
	
	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};
	
	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}
	
	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}
	
	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}
	
	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}
	
	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },
	
	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },
	
	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;
	
	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);
	
	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});
	
	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	
	    this.pX = null;
	    this.pY = null;
	}
	
	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },
	
	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },
	
	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;
	
	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },
	
	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },
	
	    emit: function(input) {
	
	        this.pX = input.deltaX;
	        this.pY = input.deltaY;
	
	        var direction = directionStr(input.direction);
	
	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },
	
	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    this._timer = null;
	    this._input = null;
	}
	
	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },
	
	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;
	
	        this._input = input;
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }
	
	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});
	
	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },
	
	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },
	
	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;
	
	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }
	
	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },
	
	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }
	
	        this.manager.emit(this.options.event, input);
	    }
	});
	
	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;
	
	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}
	
	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },
	
	    process: function(input) {
	        var options = this.options;
	
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;
	
	        this.reset();
	
	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }
	
	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	
	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;
	
	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }
	
	            this._input = input;
	
	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },
	
	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}
	
	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.6';
	
	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,
	
	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,
	
	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,
	
	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,
	
	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,
	
	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],
	
	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',
	
	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',
	
	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',
	
	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',
	
	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',
	
	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};
	
	var STOP = 1;
	var FORCED_STOP = 2;
	
	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});
	
	    this.options.inputTarget = this.options.inputTarget || element;
	
	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	
	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);
	
	    toggleCssProps(this, true);
	
	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}
	
	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },
	
	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },
	
	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }
	
	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);
	
	        var recognizer;
	        var recognizers = this.recognizers;
	
	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;
	
	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }
	
	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];
	
	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }
	
	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },
	
	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }
	
	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },
	
	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }
	
	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }
	
	        this.recognizers.push(recognizer);
	        recognizer.manager = this;
	
	        this.touchAction.update();
	        return recognizer;
	    },
	
	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }
	
	        recognizer = this.get(recognizer);
	
	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);
	
	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }
	
	        return this;
	    },
	
	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },
	
	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },
	
	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }
	
	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }
	
	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };
	
	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },
	
	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);
	
	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};
	
	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    each(manager.options.cssProps, function(value, name) {
	        element.style[prefixed(element.style, name)] = add ? value : '';
	    });
	}
	
	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}
	
	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,
	
	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,
	
	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,
	
	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,
	
	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,
	
	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,
	
	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});
	
	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;
	
	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}
	
	})(window, document, 'Hammer');


/***/ },
/* 35 */
/*!***********************************************!*\
  !*** ./~/properjs-imageloader/ImageLoader.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handle lazy-loading images with contextual load conditions.
	 *
	 * @ImageLoader
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ImageLoader = factory();
	    }
	    
	})(function () {
	
	    var raf = window.requestAnimationFrame,
	        caf = window.cancelAnimationFrame,
	    
	        _i,
	        _all = 0,
	        _num = 0,
	        _raf = null,
	        _ini = false,
	    
	        // Holds all "instances"
	        // This way we can use a single animator
	        _instances = [];
	    
	    
	    // Should support elements as null, undefined, DOMElement, HTMLCollection, string selector
	    function setElements( elements ) {
	        // Handles string selector
	        if ( typeof elements === "string" ) {
	            elements = document.querySelectorAll( elements );
	    
	        // Handles DOMElement
	        } else if ( elements && elements.nodeType === 1 ) {
	            elements = [ elements ];
	        
	        } else if ( !elements ) {
	            elements = [];
	        }
	    
	        // Default:
	        // HTMLCollection / Array
	        return elements;
	    }
	    
	    
	    // Called when instances are created
	    function initializer( instance ) {
	        // Increment ALL
	        _all = _all + instance._num2Load;
	    
	        // Private instances array
	        _instances.push( instance );
	    
	        // One stop shopping
	        if ( !_ini ) {
	            _ini = true;
	            animate();
	        }
	    }
	    
	    
	    // Called on each iteration of the animation cycle
	    function animate() {
	        if ( _num !== _all ) {
	            _raf = raf( animate );
	    
	            for ( _i = _instances.length; _i--; ) {
	                if ( _instances[ _i ]._numLoaded !== _instances[ _i ]._num2Load && _instances[ _i ]._loadType === "async" ) {
	                    _instances[ _i ].handle();
	                }
	            }
	    
	        } else {
	            stop();
	        }
	    }
	    
	    
	    // Stops the animation cycle queue for loading images
	    function stop () {
	        caf( _raf );
	    
	        _raf = null;
	        _ini = false;
	    }
	    
	    
	    // Simple add class polyfill
	    function addClass( el, str ) {
	        var newClass = str.split( " " ),
	            elsClass = el.className.split( " " );
	    
	        for ( var i = 0, len = newClass.length; i < len; i++ ) {
	            if ( elsClass.indexOf( newClass[ i ] ) === -1 ) {
	                elsClass.push( newClass[ i ] );
	            }
	        }
	    
	        el.className = elsClass.join( " " );
	    }
	    
	    
	    // Simple remove class polyfill
	    function removeClass( el, str ) {
	        var oldClass = str.split( " " ),
	            elsClass = el.className.split( " " );
	    
	        for ( var i = 0, len = oldClass.length; i < len; i++ ) {
	            if ( elsClass.indexOf( oldClass[ i ] ) !== -1 ) {
	                elsClass.splice( elsClass.indexOf( oldClass[ i ] ), 1 );
	            }
	        }
	    
	        el.className = elsClass.join( " " );
	    }
	    
	    
	    /**
	     *
	     * Handle lazy-loading images with unique callback conditions
	     * @memberof! <global>
	     * @requires raf
	     * @constructor ImageLoader
	     * @param {object} options Controller settings
	     * <ul>
	     * <li>elements - The collection of elements to load against</li>
	     * <li>property - The property to pull the image source from</li>
	     * <li>transitionDelay - The timeout before transition starts</li>
	     * <li>transitionDuration - The length of the animation</li>
	     * </ul>
	     *
	     */
	    var ImageLoader = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    
	    /**
	     *
	     * Stop all instances and reset the stack for EVERYTHING
	     * @method killInstances
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.killInstances = function () {
	        stop();
	        
	        _all = 0;
	        _num = 0;
	        _instances = [];
	    };
	    
	    
	    /**
	     *
	     * ClassName for the element loading state
	     * @member IS_LOADING
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.IS_LOADING = "-is-lazy-loading";
	    
	    
	    /**
	     *
	     * ClassName for the element transitioning state
	     * @member IS_TRANSITION
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.IS_TRANSITION = "-is-lazy-transition";
	    
	    
	    /**
	     *
	     * ClassName for the elements loaded state
	     * @member IS_LOADED
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.IS_LOADED = "-is-lazy-loaded";
	    
	    
	    /**
	     *
	     * ClassName to define the element as having been loaded
	     * @member IS_HANDLED
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.IS_HANDLED = "-is-lazy-handled";
	    
	    
	    ImageLoader.prototype = {
	        constructor: ImageLoader,
	    
	        init: function ( options ) {
	            var self = this;
	    
	            if ( !options ) {
	                throw new Error( "ImageLoader Class requires options to be passed" );
	            }
	    
	            /**
	             *
	             * The Collection to load against
	             * @memberof ImageLoader
	             * @member _elements
	             * @private
	             *
	             */
	            this._elements = setElements( options.elements );
	    
	            /**
	             *
	             * The property to get image source from
	             * @memberof ImageLoader
	             * @member _property
	             * @private
	             *
	             */
	            this._property = (options.property || "data-src");
	    
	            /**
	             *
	             * The way to load, async or sync
	             * Using "sync" loading requires calling .start() on the instance
	             * and the "handle" event will not be utilized, rather each image
	             * will be loaded in succession as the previous finishes loading
	             * @memberof ImageLoader
	             * @member _loadType
	             * @private
	             *
	             */
	            this._loadType = (options.loadType || "async");
	    
	            /**
	             *
	             * The current amount of elements lazy loaded
	             * @memberof ImageLoader
	             * @member _numLoaded
	             * @private
	             *
	             */
	            this._numLoaded = 0;
	    
	            /**
	             *
	             * The total amount of elements to lazy load
	             * @memberof ImageLoader
	             * @member _num2Load
	             * @private
	             *
	             */
	            this._num2Load = (this._elements ? this._elements.length : 0);
	    
	            /**
	             *
	             * The delay to execute lazy loading on an element in ms
	             * @memberof ImageLoader
	             * @member _transitionDelay
	             * @default 100
	             * @private
	             *
	             */
	            this._transitionDelay = (options.transitionDelay || 100);
	    
	            /**
	             *
	             * The duration on a lazy loaded elements fade in in ms
	             * @memberof ImageLoader
	             * @member _transitionDuration
	             * @default 600
	             * @private
	             *
	             */
	            this._transitionDuration = (options.transitionDuration || 600);
	    
	            /**
	             *
	             * This flags that all elements have been loaded
	             * @memberof ImageLoader
	             * @member _resolved
	             * @private
	             *
	             */
	            this._resolved = false;
	    
	            /**
	             *
	             * Defined event namespaced handlers
	             * @memberof ImageLoader
	             * @member _handlers
	             * @private
	             *
	             */
	            this._handlers = {
	                data: null,
	                load: null,
	                done: null,
	                error: null,
	                update: null
	            };
	    
	            // Break out if no elements in collection
	            if ( !this._elements.length ) {
	                return this;
	            }
	    
	            // Only run animation frame for async loading
	            if ( this._loadType === "async" ) {
	                initializer( this );
	    
	            } else {
	                this._syncLoad();
	            }
	        },
	    
	        /**
	         *
	         * Add a callback handler for the specified event name
	         * @memberof ImageLoader
	         * @method on
	         * @param {string} event The event name to listen for
	         * @param {function} handler The handler callback to be fired
	         *
	         */
	        on: function ( event, handler ) {
	            this._handlers[ event ] = handler;
	    
	            return this;
	        },
	        
	        /**
	         *
	         * Fire the given event for the loaded element
	         * @memberof ImageLoader
	         * @method fire
	         * @returns bool
	         *
	         */
	        fire: function ( event, element ) {
	            var ret = false;
	    
	            if ( typeof this._handlers[ event ] === "function" ) {
	                ret = this._handlers[ event ].call( this, element );
	            }
	    
	            return ret;
	        },
	    
	        /**
	         *
	         * Iterate over elements and fire the update handler
	         * @memberof ImageLoader
	         * @method update
	         *
	         * @fires update
	         *
	         */
	        update: function () {
	            var self = this;
	    
	            for ( var i = 0, len = this._elements.length; i < len; i++ ) {
	                var element = this._elements[ i ];
	    
	                this.fire( "update", element );
	            }
	        },
	        
	        /**
	         *
	         * Perform the image loading and set correct values on element
	         * @method load
	         * @memberof ImageLoader
	         * @param {object} $elem element object
	         * @param {function} callback optional callback for each load
	         *
	         * @fires done
	         *
	         */
	        load: function ( element, callback ) {
	            var self = this,
	                image = null,
	                timeout = null,
	                isImage = (element.nodeName.toLowerCase() === "img"),
	                source = element.getAttribute( this._property );
	    
	            element.setAttribute( "data-imageloader", true );
	    
	            addClass( element, ImageLoader.IS_LOADING );
	    
	            if ( isImage ) {
	                image = element;
	    
	            } else {
	                image = new Image();
	            }
	    
	            timeout = setTimeout(function () {
	                clearTimeout( timeout );
	    
	                addClass( element, ImageLoader.IS_TRANSITION );
	    
	                image.onload = function () {
	                    self.fire( "load", element );
	    
	                    if ( !isImage ) {
	                        element.style.backgroundImage = ("url(" + source + ")");
	    
	                        image = null;
	                    }
	    
	                    addClass( element, ImageLoader.IS_LOADED );
	    
	                    timeout = setTimeout(function () {
	                        clearTimeout( timeout );
	    
	                        removeClass( element, ImageLoader.IS_LOADING + " " + ImageLoader.IS_TRANSITION + " " + ImageLoader.IS_LOADED )
	                        addClass( element, ImageLoader.IS_HANDLED );
	    
	                        if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
	                            self._resolveInstance( true );
	    
	                        } else if ( typeof callback === "function" ) {
	                            // Errors first
	                            callback( false );
	                        }
	    
	                    }, self._transitionDuration );
	                };
	    
	                image.onerror = function () {
	                    self.fire( "error", element );
	    
	                    if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
	                        self._resolveInstance( true );
	    
	                    } else if ( typeof callback === "function" ) {
	                        // Errors first
	                        callback( true );
	                    }
	                };
	    
	                image.src = source;
	    
	            }, this._transitionDelay );
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Handles element iterations and loading based on callbacks
	         * @memberof ImageLoader
	         * @method handle
	         *
	         * @fires handle
	         *
	         */
	        handle: function () {
	            var elems = this._getNotLoaded(),
	                self = this;
	    
	            for ( var i = 0, len = elems.length; i < len; i++ ) {
	                var elem = elems[ i ];
	    
	                // Fires the predefined "data" event
	                if ( self.fire( "data", elem ) ) {
	                    _num++;
	    
	                    self._numLoaded++;
	    
	                    self.load( elem );
	                }
	            }
	        },
	        
	        /**
	         *
	         * Resolve an instance and remove it from the stack
	         * @memberof ImageLoader
	         * @method _resolveInstance
	         *
	         */
	        _resolveInstance: function () {
	            // Resolved state
	            this._resolved = true;
	            
	            // Fires the predefined "done" event
	            this.fire( "done" );
	            
	            // Purge the instance from the stack
	            _instances.splice( _instances.indexOf( this ), 1 );
	        },
	    
	        /**
	         *
	         * Get all images in the set that have yet to be loaded
	         * @memberof ImageLoader
	         * @method _getNotLoaded
	         * @private
	         *
	         */
	        _getNotLoaded: function () {
	            var elems = [];
	    
	            for ( var i = 0, len = this._elements.length; i < len; i++ ) {
	                if ( !this._elements[ i ].getAttribute( "data-imageloader" ) ) {
	                    elems.push( this._elements[ i ] );
	                }
	            }
	    
	            return elems;
	        },
	    
	        /**
	         *
	         * Support batch synchronous loading of a set of images
	         * @memberof ImageLoader
	         * @method _syncLoad
	         * @private
	         *
	         */
	        _syncLoad: function () {
	            var self = this;
	    
	            function syncLoad() {
	                var elem = self._elements[ self._numLoaded ];
	    
	                self._numLoaded++;
	    
	                self.load( elem, function ( error ) {
	                    if ( !error && !self._resolved ) {
	                        syncLoad();
	                    }
	                });
	            }
	    
	            syncLoad();
	        }
	    };
	    
	    
	    return ImageLoader;
	
	
	});

/***/ },
/* 36 */
/*!*******************************!*\
  !*** ./js_src/core/config.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 *
	 * @public
	 * @module config
	 * @description Stores app-wide config values.
	 *
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  /**
	   *
	   * @public
	   * @member rootUrlId
	   * @memberof config
	   * @description The urlId for "/".
	   *
	   */
	  rootUrlId: "garberco",
	
	  /**
	   *
	   * @public
	   * @member homepageKey
	   * @memberof config
	   * @description The cache key to use for homepage.
	   *
	   */
	  homepageKey: "homepage",
	
	  /**
	   *
	   * @public
	   * @member lazyImageSelector
	   * @memberof config
	   * @description The string selector used for images deemed lazy-loadable.
	   *
	   */
	  lazyImageSelector: ".js-lazy-image",
	
	  /**
	   *
	   * @public
	   * @member lazyImageAttr
	   * @memberof config
	   * @description The string attribute for lazy image source URLs.
	   *
	   */
	  lazyImageAttr: "data-img-src",
	
	  /**
	   *
	   * @public
	   * @member imageLoaderAttr
	   * @memberof config
	   * @description The string attribute ImageLoader gives loaded images.
	   *
	   */
	  imageLoaderAttr: "data-imageloader",
	
	  /**
	   *
	   * @public
	   * @member offcanvasClasses
	   * @memberof config
	   * @description The string of offcanvas element classNames.
	   *
	   */
	  offcanvasClasses: "is-offcanvas is-offcanvas--about is-offcanvas--index is-offcanvas--project"
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = config;
	module.exports = exports["default"];

/***/ },
/* 37 */
/*!****************************!*\
  !*** ./js_src/core/log.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _env = __webpack_require__(/*! ./env */ 38);
	
	var _env2 = _interopRequireDefault(_env);
	
	/**
	 *
	 * @public
	 * @method log
	 * @description Normalized app console logger.
	 *
	 */
	var log = function log() {
	  if (_env2["default"].get() === _env2["default"].DEV) {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    console.log(args);
	  }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = log;
	module.exports = exports["default"];

/***/ },
/* 38 */
/*!****************************!*\
  !*** ./js_src/core/env.js ***!
  \****************************/
/***/ function(module, exports) {

	/**
	 *
	 * @public
	 * @module env
	 * @description Set the app environment.
	 *
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var env = {
	  /**
	   *
	   * @member DEV
	   * @memberof env
	   * @description The `production` development ref.
	   *
	   */
	  DEV: "development",
	
	  /**
	   *
	   * @member PROD
	   * @memberof env
	   * @description The `production` environment ref.
	   *
	   */
	  PROD: "production",
	
	  /**
	   *
	   * @method get
	   * @memberof env
	   * @description Returns the active code `environment`.
	   * @returns {boolean}
	   *
	   */
	  get: function get() {
	    return (/localhost|squarespace/g.test(document.domain) ? this.DEV : this.PROD
	    );
	  },
	
	  /**
	   *
	   * @method isConfig
	   * @memberof env
	   * @description Determine whether we are in Squarespace /config land or not.
	   * @returns {boolean}
	   *
	   */
	  isConfig: function isConfig() {
	    return window.parent.location.pathname.indexOf("/config") !== -1;
	  }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = env;
	module.exports = exports["default"];

/***/ },
/* 39 */
/*!*******************************!*\
  !*** ./js_src/core/images.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 32);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _util = __webpack_require__(/*! ./util */ 33);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _config = __webpack_require__(/*! ./config */ 36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 40);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _ImageController = __webpack_require__(/*! ./ImageController */ 42);
	
	var _ImageController2 = _interopRequireDefault(_ImageController);
	
	/**
	 *
	 * @public
	 * @namespace images
	 * @memberof core
	 * @description Handles separation of image pre-loading and image lazy-loading.
	 *
	 */
	var images = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof core.images
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        (0, _log2["default"])("preload initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof core.images
	     * @description Method informs PageController of active status.
	     * @returns {boolean}
	     *
	     */
	    isActive: util.noop,
	
	    /**
	     *
	     * @public
	     * @method onload
	     * @memberof core.images
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        this.handleImages();
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof core.images
	     * @description Method performs unloading actions for this module.
	     *
	     */
	    unload: function unload() {},
	
	    /**
	     *
	     * @public
	     * @method handlePreload
	     * @memberof core.images
	     * @param {function} callback The passed callback from `handleImages`
	     * @description Method handles the `done` preloading event cycle.
	     *
	     */
	    handlePreload: function handlePreload(callback) {
	        if (typeof callback === "function") {
	            callback();
	        }
	
	        _emitter2["default"].fire("app--preload-done");
	    },
	
	    /**
	     *
	     * @public
	     * @method handleImages
	     * @memberof core.images
	     * @param {object} $images Optionally, the image collection to load
	     * @param {function} callback Optionally, a callback to fire when loading is done
	     * @description Method handles separation of pre-load and lazy-load.
	     *
	     */
	    handleImages: function handleImages($images, callback) {
	        $images = $images || _dom2["default"].page.find(_config2["default"].lazyImageSelector);
	
	        if ($images.length) {
	            var imageController = new _ImageController2["default"]($images);
	
	            imageController.on("preload", this.handlePreload.bind(this, callback));
	
	            imageController.on("lazyload", function () {
	                _emitter2["default"].fire("app--lazyload-done");
	            });
	        } else {
	            this.handlePreload(callback);
	        }
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = images;
	module.exports = exports["default"];

/***/ },
/* 40 */
/*!********************************!*\
  !*** ./js_src/core/emitter.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 41);
	
	var _properjsController2 = _interopRequireDefault(_properjsController);
	
	/**
	 *
	 * @description Single app instanceof [Controller]{@link https://github.com/ProperJS/Controller} for arbitrary event emitting
	 * @member emitter
	 * @memberof core
	 *
	 */
	var emitter = new _properjsController2["default"]();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = emitter;
	module.exports = exports["default"];

/***/ },
/* 41 */
/*!*********************************************!*\
  !*** ./~/properjs-controller/Controller.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Event / Animation cycle manager
	 *
	 * @Controller
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Controller = factory();
	    }
	    
	})(function () {
	    // Private animation functions
	    var raf = window.requestAnimationFrame,
	        caf = window.cancelAnimationFrame,
	    
	    
	    /**
	     *
	     * Event / Animation cycle manager
	     * @constructor Controller
	     * @requires raf
	     * @memberof! <global>
	     *
	     */
	    Controller = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    Controller.prototype = {
	        constructor: Controller,
	    
	        /**
	         *
	         * Controller constructor method
	         * @memberof Controller
	         * @method Controller.init
	         *
	         */
	        init: function () {
	            /**
	             *
	             * Controller event handlers object
	             * @memberof Controller
	             * @member _handlers
	             * @private
	             *
	             */
	            this._handlers = {};
	    
	            /**
	             *
	             * Controller unique ID
	             * @memberof Controller
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
	    
	            /**
	             *
	             * Started iteration flag
	             * @memberof Controller
	             * @member _started
	             * @private
	             *
	             */
	            this._started = false;
	    
	            /**
	             *
	             * Paused flag
	             * @memberof Controller
	             * @member _paused
	             * @private
	             *
	             */
	            this._paused = false;
	    
	            /**
	             *
	             * Timeout reference
	             * @memberof Controller
	             * @member _cycle
	             * @private
	             *
	             */
	            this._cycle = null;
	        },
	    
	        /**
	         *
	         * Controller go method to start frames
	         * @memberof Controller
	         * @method go
	         *
	         */
	        go: function ( fn ) {
	            if ( this._started && this._cycle ) {
	                return this;
	            }
	    
	            this._started = true;
	    
	            var self = this,
	                anim = function () {
	                    self._cycle = raf( anim );
	    
	                    if ( self._started ) {
	                        if ( typeof fn === "function" ) {
	                            fn();
	                        }
	                    }
	                };
	    
	            anim();
	        },
	    
	        /**
	         *
	         * Pause the cycle
	         * @memberof Controller
	         * @method pause
	         *
	         */
	        pause: function () {
	            this._paused = true;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Play the cycle
	         * @memberof Controller
	         * @method play
	         *
	         */
	        play: function () {
	            this._paused = false;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Stop the cycle
	         * @memberof Controller
	         * @method stop
	         *
	         */
	        stop: function () {
	            caf( this._cycle );
	    
	            this._paused = false;
	            this._started = false;
	            this._cycle = null;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller add event handler
	         * @memberof Controller
	         * @method on
	         * @param {string} event the event to listen for
	         * @param {function} handler the handler to call
	         *
	         */
	        on: function ( event, handler ) {
	            var events = event.split( " " );
	    
	            // One unique ID per handler
	            handler._jsControllerID = this.getUID();
	    
	            for ( var i = events.length; i--; ) {
	                if ( typeof handler === "function" ) {
	                    if ( !this._handlers[ events[ i ] ] ) {
	                        this._handlers[ events[ i ] ] = [];
	                    }
	    
	                    // Handler can be stored with multiple events
	                    this._handlers[ events[ i ] ].push( handler );
	                }
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller remove event handler
	         * @memberof Controller
	         * @method off
	         * @param {string} event the event to remove handler for
	         * @param {function} handler the handler to remove
	         *
	         */
	        off: function ( event, handler ) {
	            if ( !this._handlers[ event ] ) {
	                return this;
	            }
	    
	            // Remove a single handler
	            if ( handler ) {
	                this._off( event, handler );
	    
	            // Remove all handlers for event
	            } else {
	                this._offed( event );
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller fire an event
	         * @memberof Controller
	         * @method fire
	         * @param {string} event the event to fire
	         *
	         */
	        fire: function ( event ) {
	            if ( !this._handlers[ event ] ) {
	                return this;
	            }
	    
	            var args = [].slice.call( arguments, 1 );
	    
	            for ( var i = this._handlers[ event ].length; i--; ) {
	                this._handlers[ event ][ i ].apply( this, args );
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Get a unique ID
	         * @memberof Controller
	         * @method getUID
	         * @returns number
	         *
	         */
	        getUID: function () {
	            this._uid = (this._uid + 1);
	    
	            return this._uid;
	        },
	    
	        /**
	         *
	         * Controller internal off method assumes event AND handler are good
	         * @memberof Controller
	         * @method _off
	         * @param {string} event the event to remove handler for
	         * @param {function} handler the handler to remove
	         * @private
	         *
	         */
	        _off: function ( event, handler ) {
	            for ( var i = 0, len = this._handlers[ event ].length; i < len; i++ ) {
	                if ( handler._jsControllerID === this._handlers[ event ][ i ]._jsControllerID ) {
	                    this._handlers[ event ].splice( i, 1 );
	    
	                    break;
	                }
	            }
	        },
	    
	        /**
	         *
	         * Controller completely remove all handlers and an event type
	         * @memberof Controller
	         * @method _offed
	         * @param {string} event the event to remove handler for
	         * @private
	         *
	         */
	        _offed: function ( event ) {
	            for ( var i = this._handlers[ event ].length; i--; ) {
	                this._handlers[ event ][ i ] = null;
	            }
	    
	            delete this._handlers[ event ];
	        }
	    };
	
	    return Controller;
	});

/***/ },
/* 42 */
/*!****************************************!*\
  !*** ./js_src/core/ImageController.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _util = __webpack_require__(/*! ./util */ 33);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 41);
	
	var _properjsController2 = _interopRequireDefault(_properjsController);
	
	/**
	 *
	 * @public
	 * @class ImageController
	 * @param {Hobo} $images The image collection to load
	 * @classdesc Handles breaking out the preload vs lazyload batches
	 * @memberof core
	 *
	 */
	
	var ImageController = (function (_Controller) {
	    _inherits(ImageController, _Controller);
	
	    function ImageController($images) {
	        _classCallCheck(this, ImageController);
	
	        _get(Object.getPrototypeOf(ImageController.prototype), "constructor", this).call(this);
	
	        this.$preload = util.getElementsInView($images);
	        this.$lazyload = $images.not(this.$preload);
	
	        if (this.$preload.length) {
	            this.handlePreload();
	        } else {
	            this.fire("preload");
	        }
	
	        if (this.$lazyload.length) {
	            this.handleLazyload();
	        }
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @method handlePreload
	     * @memberof core.ImageController
	     * @description ImageLoader instance for preload batch.
	     *
	     */
	
	    _createClass(ImageController, [{
	        key: "handlePreload",
	        value: function handlePreload() {
	            var _this = this;
	
	            (0, _log2["default"])("ImageController preload queue:", this.$preload.length);
	
	            this.preLoader = util.loadImages(this.$preload, util.noop);
	            this.preLoader.on("done", function () {
	                (0, _log2["default"])("ImageController preloaded:", _this.$preload.length);
	
	                _this.fire("preload");
	            });
	        }
	
	        /**
	         *
	         * @public
	         * @method handleLazyload
	         * @memberof core.ImageController
	         * @description ImageLoader instance for lazyload batch.
	         *
	         */
	    }, {
	        key: "handleLazyload",
	        value: function handleLazyload() {
	            var _this2 = this;
	
	            (0, _log2["default"])("ImageController lazyload queue:", this.$lazyload.length);
	
	            this.lazyLoader = util.loadImages(this.$lazyload, util.isElementLoadable);
	            this.lazyLoader.on("done", function () {
	                (0, _log2["default"])("ImageController lazyloaded:", _this2.$lazyload.length);
	
	                _this2.fire("lazyload");
	            });
	        }
	    }]);
	
	    return ImageController;
	})(_properjsController2["default"]);
	
	exports["default"] = ImageController;
	module.exports = exports["default"];

/***/ },
/* 43 */
/*!********************************!*\
  !*** ./js_src/core/resizes.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _util = __webpack_require__(/*! ./util */ 33);
	
	var util = _interopRequireWildcard(_util);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 40);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _resizer = __webpack_require__(/*! ./resizer */ 44);
	
	var _resizer2 = _interopRequireDefault(_resizer);
	
	var _properjsThrottle = __webpack_require__(/*! properjs-throttle */ 46);
	
	var _properjsThrottle2 = _interopRequireDefault(_properjsThrottle);
	
	var _properjsDebounce = __webpack_require__(/*! properjs-debounce */ 47);
	
	var _properjsDebounce2 = _interopRequireDefault(_properjsDebounce);
	
	var _throttled = 50;
	var _debounced = 300;
	
	/**
	 *
	 * @public
	 * @namespace resizes
	 * @memberof core
	 * @description Handles app-wide emission of various resize detection events.
	 *
	 */
	var resizes = {
	  /**
	   *
	   * @public
	   * @method init
	   * @memberof core.resizes
	   * @description Method binds event listeners for resize controller.
	   *
	   */
	  init: function init() {
	    _resizer2["default"].on("resize", (0, _properjsThrottle2["default"])(onThrottle, _throttled));
	
	    // Hook into resize of `width` only for this handler
	    // @bug: iOS window size changes when Safari's chrome switches between full and minimal-ui.
	    _resizer2["default"].on("resizewidth", (0, _properjsDebounce2["default"])(onDebounce, _debounced));
	
	    (0, _log2["default"])("resizes initialized");
	  }
	};
	
	/**
	 *
	 * @private
	 * @method onDebounce
	 * @memberof core.resizes
	 * @description Debounced resize events.
	 *
	 */
	var onDebounce = function onDebounce() {
	  _emitter2["default"].fire("app--resize-debounced");
	
	  util.updateImages();
	};
	
	/**
	 *
	 * @private
	 * @method onThrottle
	 * @memberof core.resizes
	 * @description Method handles the window resize event via [ResizeController]{@link https://github.com/ProperJS/ResizeController}.
	 *
	 */
	var onThrottle = function onThrottle() {
	  _emitter2["default"].fire("app--resize");
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = resizes;
	module.exports = exports["default"];

/***/ },
/* 44 */
/*!********************************!*\
  !*** ./js_src/core/resizer.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsResizecontroller = __webpack_require__(/*! properjs-resizecontroller */ 45);
	
	var _properjsResizecontroller2 = _interopRequireDefault(_properjsResizecontroller);
	
	/**
	 *
	 * @description Single app instanceof [ResizeController]{@link https://github.com/ProperJS/ResizeController} for raf resize handling
	 * @member resizer
	 * @memberof core
	 *
	 */
	var resizer = new _properjsResizecontroller2["default"]();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = resizer;
	module.exports = exports["default"];

/***/ },
/* 45 */
/*!*********************************************************!*\
  !*** ./~/properjs-resizecontroller/ResizeController.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Window resize / orientationchange event controller
	 *
	 * @ResizeController
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ResizeController = factory();
	    }
	    
	})(function () {
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 41 ),
	
	        // Orientation?
	        _hasOrientation = ("orientation" in window),
	
	        // Current window viewport
	        _currentView = null,
	
	        // Singleton
	        _instance = null;
	
	    /**
	     *
	     * Window resize / orientationchange event controller
	     * @constructor ResizeController
	     * @augments Controller
	     * @requires Controller
	     * @memberof! <global>
	     *
	     * @fires resize
	     * @fires resizedown
	     * @fires resizeup
	     * @fires resizewidth
	     * @fires resizeheight
	     * @fires orientationchange
	     * @fires orientationportrait
	     * @fires orientationlandscape
	     *
	     */
	    var ResizeController = function () {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	
	            // Initial viewport settings
	            _currentView = _instance.getViewport();
	
	            // Call on parent cycle
	            this.go(function () {
	                var currentView = _instance.getViewport(),
	                    isStill = (currentView.width === _currentView.width && currentView.height === _currentView.height),
	                    isResize = (currentView.width !== _currentView.width || currentView.height !== _currentView.height),
	                    isResizeUp = (currentView.width > _currentView.width || currentView.height > _currentView.height),
	                    isResizeDown = (currentView.width < _currentView.width || currentView.height < _currentView.height),
	                    isResizeWidth = (currentView.width !== _currentView.width),
	                    isResizeHeight = (currentView.height !== _currentView.height),
	                    isOrientation = (currentView.orient !== _currentView.orient),
	                    isOrientationPortrait = (currentView.orient !== _currentView.orient && currentView.orient !== 90),
	                    isOrientationLandscape = (currentView.orient !== _currentView.orient && currentView.orient === 90);
	
	                // Fire blanket resize event
	                if ( isResize ) {
	                    /**
	                     *
	                     * @event resize
	                     *
	                     */
	                    _instance.fire( "resize" );
	                }
	
	                // Fire resizeup and resizedown
	                if ( isResizeDown ) {
	                    /**
	                     *
	                     * @event resizedown
	                     *
	                     */
	                    _instance.fire( "resizedown" );
	
	                } else if ( isResizeUp ) {
	                    /**
	                     *
	                     * @event resizeup
	                     *
	                     */
	                    _instance.fire( "resizeup" );
	                }
	
	                // Fire resizewidth and resizeheight
	                if ( isResizeWidth ) {
	                    /**
	                     *
	                     * @event resizewidth
	                     *
	                     */
	                    _instance.fire( "resizewidth" );
	
	                } else if ( isResizeHeight ) {
	                    /**
	                     *
	                     * @event resizeheight
	                     *
	                     */
	                    _instance.fire( "resizeheight" );
	                }
	
	                // Fire blanket orientationchange event
	                if ( isOrientation ) {
	                    /**
	                     *
	                     * @event orientationchange
	                     *
	                     */
	                    _instance.fire( "orientationchange" );
	                }
	
	                // Fire orientationportrait and orientationlandscape
	                if ( isOrientationPortrait ) {
	                    /**
	                     *
	                     * @event orientationportrait
	                     *
	                     */
	                    _instance.fire( "orientationportrait" );
	
	                } else if ( isOrientationLandscape ) {
	                    /**
	                     *
	                     * @event orientationlandscape
	                     *
	                     */
	                    _instance.fire( "orientationlandscape" );
	                }
	
	                _currentView = currentView;
	            });
	        }
	
	        return _instance;
	    };
	
	    ResizeController.prototype = new Controller();
	
	    /**
	     *
	     * Returns the current window viewport specs
	     * @memberof ResizeController
	     * @method getViewport
	     * @returns object
	     *
	     */
	    ResizeController.prototype.getViewport = function () {
	        return {
	            width: window.innerWidth,
	            height: window.innerHeight,
	            orient: _hasOrientation ? Math.abs( window.orientation ) : null
	        };
	    };
	
	    /**
	     *
	     * Tells if the viewport is in protrait mode
	     * @memberof ResizeController
	     * @method isPortrait
	     * @returns boolean
	     *
	     */
	    ResizeController.prototype.isPortrait = function () {
	        var orient = this.getViewport().orient;
	
	        return (orient !== null && orient !== 90);
	    };
	
	    /**
	     *
	     * Tells if the viewport is in landscape mode
	     * @memberof ResizeController
	     * @method isLandscape
	     * @returns boolean
	     *
	     */
	    ResizeController.prototype.isLandscape = function () {
	        var orient = this.getViewport().orient;
	
	        return (orient !== null && orient === 90);
	    };
	
	
	    return ResizeController;
	
	});

/***/ },
/* 46 */
/*!*****************************************!*\
  !*** ./~/properjs-throttle/throttle.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Throttle callbacks
	 *
	 * @throttle
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.throttle = factory();
	    }
	    
	})(function () {
	
	
	    /**
	     *
	     * Rev limit your method calls
	     * @requires debounce
	     * @memberof! <global>
	     * @method throttle
	     * @param {function} callback The method handler
	     * @param {number} threshold The timeout delay in ms
	     *
	     */
	    var throttle = function ( callback, threshold ) {
	        var wait = false;
	
	        return function () {
	            if ( !wait ) {
	                callback.call();
	                wait = true;
	
	                setTimeout(function () {
	                    wait = false;
	
	                }, (threshold || 100) );
	            }
	        };
	    };
	    
	    
	    return throttle;
	
	
	});

/***/ },
/* 47 */
/*!*****************************************!*\
  !*** ./~/properjs-debounce/debounce.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Debounce methods
	 * Sourced from here:
	 * http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 *
	 * @debounce
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.debounce = factory();
	    }
	    
	})(function () {
	
	
	    /**
	     *
	     * Limit method calls
	     * @memberof! <global>
	     * @method debounce
	     * @param {function} callback The method handler
	     * @param {number} threshold The timeout delay in ms
	     * @param {boolean} execAsap Call function at beginning or end of detection period
	     *
	     */
	    var debounce = function ( callback, threshold, execAsap ) {
	        var timeout = null;
	        
	        return function debounced() {
	            var args = arguments,
	                context = this;
	            
	            function delayed() {
	                if ( !execAsap ) {
	                    callback.apply( context, args );
	                }
	                
	                timeout = null;
	            }
	            
	            if ( timeout ) {
	                clearTimeout( timeout );
	                
	            } else if ( execAsap ) {
	                callback.apply( context, args );
	            }
	            
	            timeout = setTimeout( delayed, (threshold || 100) );
	        };
	    };
	    
	    
	    return debounce;
	
	
	});

/***/ },
/* 48 */
/*!********************************!*\
  !*** ./js_src/core/scrolls.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 32);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _detect = __webpack_require__(/*! ./detect */ 31);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 40);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _scroller = __webpack_require__(/*! ./scroller */ 49);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _timeout = null;
	var _isSuppressed = false;
	var _isSuppressedEvents = false;
	var _idleout = 300;
	
	/**
	 *
	 * @public
	 * @namespace scrolls
	 * @memberof core
	 * @description Handles app-wide emission of various scroll detection events.
	 *
	 */
	var scrolls = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof core.scrolls
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        _scroller2["default"].on("scroll", onScroller);
	        _scroller2["default"].on("scrollup", onScrollerUp);
	        _scroller2["default"].on("scrolldown", onScrollerDown);
	
	        onScroller();
	
	        this.topout();
	
	        (0, _log2["default"])("scrolls initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method topout
	     * @param {number} top Optionally, the scroll position to apply
	     * @memberof core.scrolls
	     * @description Method set scroll position to argument value or zero.
	     *
	     */
	    topout: function topout(top) {
	        top = top || 0;
	
	        window.scrollTo(0, top);
	    },
	
	    /**
	     *
	     * @public
	     * @method suppress
	     * @param {boolean} bool Whether or not to suppress
	     * @memberof core.scrolls
	     * @description Method will suppress scroll position broadcasting.
	     *
	     */
	    suppress: function suppress(bool) {
	        _isSuppressed = bool;
	    },
	
	    /**
	     *
	     * @public
	     * @method clearStates
	     * @memberof core.scrolls
	     * @description Method removes all applied classNames from this module
	     *
	     */
	    clearStates: function clearStates() {
	        _dom2["default"].html.removeClass("is-scrolling-up is-scrolling-down is-scrolling");
	    },
	
	    /**
	     *
	     * @public
	     * @method isScrollInRange
	     * @memberof core.scrolls
	     * @description Method determines if scroll is within range
	     * @returns {boolean}
	     *
	     */
	    isScrollInRange: function isScrollInRange() {
	        var scrollPos = _scroller2["default"].getScrollY();
	
	        return scrollPos > 0 || scrollPos < _scroller2["default"].getScrollMax();
	    },
	
	    /**
	     *
	     * @public
	     * @method isScrollOutOfRange
	     * @memberof core.scrolls
	     * @description Method determines if scroll is out of range
	     * @returns {boolean}
	     *
	     */
	    isScrollOutOfRange: function isScrollOutOfRange() {
	        var scrollPos = _scroller2["default"].getScrollY();
	
	        return scrollPos <= 0 || scrollPos >= _scroller2["default"].getScrollMax();
	    }
	};
	
	/**
	 *
	 * @private
	 * @method broadcast
	 * @param {string} event The scroll event to emit
	 * @param {number} position The current scroll position
	 * @memberof core.scrolls
	 * @description Method will emit scroll position information.
	 *
	 */
	var broadcast = function broadcast(event, position) {
	    if (_isSuppressed) {
	        return;
	    }
	
	    _emitter2["default"].fire(event, position);
	};
	
	/**
	 *
	 * @private
	 * @method suppressEvents
	 * @param {number} scrollPos The current scrollY position
	 * @memberof core.scrolls
	 * @description Method applies className to disable events while scrolling
	 *
	 */
	var suppressEvents = function suppressEvents(scrollPos) {
	    if (_detect2["default"].isStandalone()) {
	        return;
	    }
	
	    try {
	        clearTimeout(_timeout);
	    } catch (error) {
	        (0, _log2["default"])(error);
	    }
	
	    if (!_isSuppressedEvents) {
	        _isSuppressedEvents = true;
	
	        _dom2["default"].html.addClass("is-scrolling");
	
	        broadcast("app--scroll-start", scrollPos);
	    }
	
	    _timeout = setTimeout(function () {
	        if (scrollPos === _scroller2["default"].getScrollY()) {
	            _isSuppressedEvents = false;
	
	            _dom2["default"].html.removeClass("is-scrolling");
	
	            broadcast("app--scroll-end", scrollPos);
	        }
	    }, _idleout);
	};
	
	/**
	 *
	 * @private
	 * @method onScrollerUp
	 * @memberof core.scrolls
	 * @description Method handles upward scroll event
	 *
	 */
	var onScrollerUp = function onScrollerUp() {
	    if (!scrolls.isScrollInRange() || _detect2["default"].isStandalone()) {
	        return;
	    }
	
	    var scrollPos = _scroller2["default"].getScrollY();
	
	    broadcast("app--scroll-up", scrollPos);
	
	    _dom2["default"].html.removeClass("is-scrolling-down").addClass("is-scrolling-up");
	};
	
	/**
	 *
	 * @private
	 * @method onScrollerDown
	 * @memberof core.scrolls
	 * @description Method handles downward scroll event
	 *
	 */
	var onScrollerDown = function onScrollerDown() {
	    if (!scrolls.isScrollInRange() || _detect2["default"].isStandalone()) {
	        return;
	    }
	
	    var scrollPos = _scroller2["default"].getScrollY();
	
	    broadcast("app--scroll-down", scrollPos);
	
	    _dom2["default"].html.removeClass("is-scrolling-up").addClass("is-scrolling-down");
	};
	
	/**
	 *
	 * @private
	 * @method onScroller
	 * @memberof core.scrolls
	 * @description Method handles regular scroll event via [ScrollController]{@link https://github.com/ProperJS/ScrollController}
	 *
	 */
	var onScroller = function onScroller() {
	    if (!scrolls.isScrollInRange() || _detect2["default"].isStandalone()) {
	        return;
	    }
	
	    var scrollPos = _scroller2["default"].getScrollY();
	
	    suppressEvents(scrollPos);
	
	    broadcast("app--scroll", scrollPos);
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = scrolls;
	module.exports = exports["default"];

/***/ },
/* 49 */
/*!*********************************!*\
  !*** ./js_src/core/scroller.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsScrollcontroller = __webpack_require__(/*! properjs-scrollcontroller */ 50);
	
	var _properjsScrollcontroller2 = _interopRequireDefault(_properjsScrollcontroller);
	
	/**
	 *
	 * @description Single app instanceof [ScrollController]{@link https://github.com/ProperJS/ScrollController} for raf scroll handling
	 * @member scroller
	 * @memberof core
	 *
	 */
	var scroller = new _properjsScrollcontroller2["default"]();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = scroller;
	module.exports = exports["default"];

/***/ },
/* 50 */
/*!*********************************************************!*\
  !*** ./~/properjs-scrollcontroller/ScrollController.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Window scroll event controller
	 *
	 * @ScrollController
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ScrollController = factory();
	    }
	    
	})(function () {
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 41 ),
	        
	        // Current scroll position
	        _currentY = null,
	    
	        // Singleton
	        _instance = null;
	    
	    /**
	     *
	     * Window scroll event controller
	     * @constructor ScrollController
	     * @augments Controller
	     * @requires Controller
	     * @memberof! <global>
	     *
	     * @fires scroll
	     * @fires scrolldown
	     * @fires scrollup
	     * @fires scrollmax
	     * @fires scrollmin
	     *
	     */
	    var ScrollController = function () {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	    
	            // Call on parent cycle
	            this.go(function () {
	                var currentY = _instance.getScrollY(),
	                    isStill = (currentY === _currentY),
	                    isScroll = (currentY !== _currentY),
	                    isScrollUp = (currentY < _currentY),
	                    isScrollDown = (currentY > _currentY),
	                    isScrollMax = (currentY !== _currentY && _instance.isScrollMax()),
	                    isScrollMin = (currentY !== _currentY && _instance.isScrollMin());
	    
	                // Fire blanket scroll event
	                if ( isScroll ) {
	                    /**
	                     *
	                     * @event scroll
	                     *
	                     */
	                    _instance.fire( "scroll" );
	                }
	    
	                // Fire scrollup and scrolldown
	                if ( isScrollDown ) {
	                    /**
	                     *
	                     * @event scrolldown
	                     *
	                     */
	                    _instance.fire( "scrolldown" );
	    
	                } else if ( isScrollUp ) {
	                    /**
	                     *
	                     * @event scrollup
	                     *
	                     */
	                    _instance.fire( "scrollup" );
	                }
	    
	                // Fire scrollmax and scrollmin
	                if ( isScrollMax ) {
	                    /**
	                     *
	                     * @event scrollmax
	                     *
	                     */
	                    _instance.fire( "scrollmax" );
	    
	                } else if ( isScrollMin ) {
	                    /**
	                     *
	                     * @event scrollmin
	                     *
	                     */
	                    _instance.fire( "scrollmin" );
	                }
	    
	                _currentY = currentY;
	            });
	        }
	    
	        return _instance;
	    };
	    
	    ScrollController.prototype = new Controller();
	    
	    /**
	     *
	     * Returns the current window vertical scroll position
	     * @memberof ScrollController
	     * @method getScrollY
	     * @returns number
	     *
	     */
	    ScrollController.prototype.getScrollY = function () {
	        return (window.scrollY || document.documentElement.scrollTop);
	    };
	    
	    /**
	     *
	     * Get the max document scrollable height
	     * @memberof ScrollController
	     * @method getScrollMax
	     * @returns number
	     *
	     */
	    ScrollController.prototype.getScrollMax = function () {
	        return Math.max(
	            document.body.scrollHeight, document.documentElement.scrollHeight,
	            document.body.offsetHeight, document.documentElement.offsetHeight,
	            document.documentElement.clientHeight
	
	        ) - window.innerHeight;
	    };
	    
	    /**
	     *
	     * Determines if scroll position is at maximum for document
	     * @memberof ScrollController
	     * @method isScrollMax
	     * @returns boolean
	     *
	     */
	    ScrollController.prototype.isScrollMax = function () {
	        return (this.getScrollY() >= this.getScrollMax());
	    };
	    
	    /**
	     *
	     * Determines if scroll position is at minimum for document
	     * @memberof ScrollController
	     * @method isScrollMin
	     * @returns boolean
	     *
	     */
	    ScrollController.prototype.isScrollMin = function () {
	        return (this.getScrollY() <= 0);
	    };
	    
	    
	    return ScrollController;
	
	});

/***/ },
/* 51 */
/*!****************************!*\
  !*** ./js_src/core/api.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _paramalama = __webpack_require__(/*! paramalama */ 52);
	
	var _paramalama2 = _interopRequireDefault(_paramalama);
	
	var _util = __webpack_require__(/*! ./util */ 33);
	
	var util = _interopRequireWildcard(_util);
	
	var _rSlash = /^\/|\/$/g;
	
	/**
	 *
	 * @public
	 * @module api
	 * @description Provide some api methods for accessing content via JS.
	 *
	 */
	var api = {
	    /**
	     *
	     * @public
	     * @member data
	     * @memberof core.api
	     * @description URLs this little api needs to use.
	     *
	     */
	    data: {
	        squarespace: {
	            url: location.origin,
	            api: [location.origin, "api"].join("/")
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @member dataType
	     * @memberof core.api
	     * @description Default dataType for the `request` api method.
	     *
	     */
	    dataType: "json",
	
	    /**
	     *
	     * @public
	     * @member format
	     * @memberof core.api
	     * @description Default format for the `request` api method.
	     *
	     */
	    format: "json",
	
	    /**
	     *
	     * @public
	     * @member method
	     * @memberof core.api
	     * @description Default method for the `request` api method.
	     *
	     */
	    method: "GET",
	
	    /**
	     *
	     * @public
	     * @method endpoint
	     * @param {string} uri The collection uri
	     * @memberof core.api
	     * @description Creates the fullUrl from a collection uri.
	     * @returns {string}
	     *
	     */
	    endpoint: function endpoint(uri) {
	        return [this.data.squarespace.url, uri.replace(_rSlash, "")].join("/");
	    },
	
	    /**
	     *
	     * @public
	     * @method apipoint
	     * @param {string} uri The API uri
	     * @memberof core.api
	     * @description Creates the fullUrl from an API uri.
	     * @returns {string}
	     *
	     */
	    apipoint: function apipoint(uri) {
	        return [this.data.squarespace.api, uri.replace(_rSlash, "")].join("/");
	    },
	
	    /**
	     *
	     * @public
	     * @method request
	     * @param {string} url The API URL
	     * @param {object} params Merge params to send
	     * @param {object} options Merge config to pass to $.ajax()
	     * @memberof core.api
	     * @description Creates the fullUrl from an API uri.
	     * @returns {object}
	     *
	     */
	    request: function request(url, params, options) {
	        var data = util.extendObject({
	            format: this.format,
	            nocache: true
	        }, params);
	        var opts = util.extendObject({
	            url: url,
	            data: data,
	            dataType: this.dataType,
	            method: this.method
	        }, options);
	
	        return _js_libsHoboDistHoboBuild2["default"].ajax(opts);
	    },
	
	    /**
	     *
	     * @public
	     * @method collection
	     * @param {string} uri The collection uri
	     * @param {object} params Merge params to send
	     * @param {object} options Merge options to send
	     * @memberof core.api
	     * @description Retrieves items from a given collection.
	     *              Returned Promise resolves with a data {object}
	     * @returns {Promise}
	     *
	     */
	    collection: function collection(uri, params, options) {
	        var _this = this;
	
	        return new Promise(function (resolve, reject) {
	            var collection = {};
	            var seg = uri.split("?")[0];
	
	            // This clones for us - non-mutable
	            params = util.extendObject({}, params);
	
	            // Merges any query string params from URI
	            params = util.extendObject(params, (0, _paramalama2["default"])(uri));
	
	            // Tackle the `+` issue with taxonomies
	            if (params.tag) {
	                params.tag = params.tag.replace(/\+/g, " ");
	            }
	
	            if (params.category) {
	                params.category = params.category.replace(/\+/g, " ");
	            }
	
	            _this.request(_this.endpoint(seg), params, options).then(function (data) {
	                // Resolve with `responseText`
	                if (typeof data === "string") {
	                    resolve(data);
	                } else {
	                    // Collection?
	                    collection = {
	                        collection: data.collection,
	                        item: data.item || null,
	                        items: data.items || null,
	                        pagination: data.pagination || null
	                    };
	
	                    resolve(collection);
	                }
	            })["catch"](function (error) {
	                reject(error);
	            });
	        });
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = api;
	module.exports = exports["default"];

/***/ },
/* 52 */
/*!************************************!*\
  !*** ./~/paramalama/paramalama.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Parse query string into object literal representation
	 *
	 * @compat: jQuery, Ender, Zepto
	 * @author: @kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.paramalama = factory();
	    }
	    
	})(function () {
	    
	    var paramalama = function ( str ) {
	        var query = decodeURIComponent( str ).match( /[#|?].*$/g ),
	            ret = {};
	        
	        if ( query ) {
	            query = query[ 0 ].replace( /^\?|^#|^\/|\/$|\[|\]/g, "" );
	            query = query.split( "&" );
	            
	            for ( var i = query.length; i--; ) {
	                var pair = query[ i ].split( "=" ),
	                    key = pair[ 0 ],
	                    val = pair[ 1 ];
	                
	                if ( ret[ key ] ) {
	                    // #2 https://github.com/kitajchuk/paramalama/issues/2
	                    // This supposedly will work as of ECMA-262
	                    // This works since we are not passing objects across frame boundaries
	                    // and we are not considering Array-like objects. This WILL be an Array.
	                    if ( {}.toString.call( ret[ key ] ) !== "[object Array]" ) {
	                        ret[ key ] = [ ret[ key ] ];
	                    }
	                    
	                    ret[ key ].push( val );
	                    
	                } else {
	                    ret[ key ] = val;
	                }
	            }
	        }
	        
	        return ret;
	    };
	    
	    if ( typeof $ !== "undefined" ) {
	        $.paramalama = paramalama;
	    }
	
	    return paramalama;
	    
	});


/***/ },
/* 53 */
/*!******************************!*\
  !*** ./js_src/core/cache.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _Store = __webpack_require__(/*! ./Store */ 54);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	/**
	 *
	 * @public
	 * @module cache
	 * @description Return Singleton instances of the cache Store.
	 *
	 */
	exports["default"] = new _Store2["default"]({
	  // If TRUE the Store will use LocalStorage...
	  enableStorage: false
	});
	module.exports = exports["default"];

/***/ },
/* 54 */
/*!******************************!*\
  !*** ./js_src/core/Store.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _util = __webpack_require__(/*! ./util */ 33);
	
	var _util2 = _interopRequireDefault(_util);
	
	// Singleton
	var _instance = null;
	var _initialized = false;
	
	// Session Storage
	var _cache = {};
	var _access = "garberco-cache";
	var _session = window.sessionStorage;
	
	/**
	 *
	 * @public
	 * @class Store
	 * @param {object} options The Store settings
	 * @classdesc Handles how data / content is cached and stored for webapp.
	 *
	 */
	
	var Store = (function () {
	    function Store(options) {
	        _classCallCheck(this, Store);
	
	        if (!_instance) {
	            _instance = this;
	
	            this._opts = options;
	            this._init();
	        }
	
	        return _instance;
	    }
	
	    /**
	     *
	     * @public
	     * @static
	     * @member isStorageSupported
	     * @memberof Store
	     * @description Boolean to test local/session storage support
	     *
	     */
	
	    /**
	     *
	     * @private
	     * @instance
	     * @method _init
	     * @memberof Store
	     * @description One time Store initialization
	     *
	     */
	
	    _createClass(Store, [{
	        key: "_init",
	        value: function _init() {
	            if (_initialized) {
	                return;
	            }
	
	            _initialized = true;
	
	            this.flush();
	
	            (0, _log2["default"])("Singleton Store initialized", this);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method flush
	         * @memberof Store
	         * @description Manually flush the Local Storage cache
	         *
	         */
	    }, {
	        key: "flush",
	        value: function flush() {
	            // New empty cache
	            _cache = {};
	
	            // Store the new cache object
	            this.save();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method save
	         * @memberof Store
	         * @description Perform the actual synchronous write to Local Storage
	         *
	         */
	    }, {
	        key: "save",
	        value: function save() {
	            if (!this._opts.enableStorage || !Store.isStorageSupported) {
	                (0, _log2["default"])("Cache Storage disabled - Not writing to SessionStorage");
	                return;
	            }
	
	            _session.setItem(_access, JSON.stringify(_cache));
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method set
	         * @param {string} id The index key
	         * @param {mixed} val The value to store
	         * @memberof Store
	         * @description Set a key's value in the cache
	         *
	         */
	    }, {
	        key: "set",
	        value: function set(id, val) {
	            id = _util2["default"].slugify(id);
	
	            _cache[id] = val;
	
	            this.save();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method get
	         * @param {string} id The index key
	         * @memberof Store
	         * @description Get a key's value from the cache
	         * @returns {mixed}
	         *
	         */
	    }, {
	        key: "get",
	        value: function get(id) {
	            id = id && _util2["default"].slugify(id);
	
	            return id ? this.getValue(_cache[id]) : _cache;
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method getValue
	         * @param {mixed} val The accessed value
	         * @memberof Store
	         * @description Get a value so cache is non-mutable from outside
	         * @returns {mixed}
	         *
	         */
	    }, {
	        key: "getValue",
	        value: function getValue(val) {
	            return typeof val === "string" ? String(val) : val ? _util2["default"].extendObject(Array.isArray(val) ? [] : {}, val) : null;
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method remove
	         * @param {string} id The index key
	         * @memberof Store
	         * @description Remove a key/val pair from the cache
	         *
	         */
	    }, {
	        key: "remove",
	        value: function remove(id) {
	            delete _cache[id];
	        }
	    }]);
	
	    return Store;
	})();
	
	Store.isStorageSupported = (function () {
	    var ret = true;
	
	    try {
	        _session.setItem("garberco-test", 1);
	        _session.removeItem("garberco-test");
	    } catch (err) {
	        ret = false;
	    }
	
	    return ret;
	})();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = Store;
	module.exports = exports["default"];

/***/ },
/* 55 */
/*!**********************************!*\
  !*** ./js_src/core/Analytics.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	//import $ from "js_libs/hobo/dist/hobo.build";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _util = __webpack_require__(/*! ./util */ 33);
	
	var util = _interopRequireWildcard(_util);
	
	var _cache = __webpack_require__(/*! ./cache */ 53);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 40);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	// Singleton
	var _instance = null;
	
	/**
	 *
	 * @public
	 * @class Analytics
	 * @classdesc Handles Squarespace Metrics and Google Analytics.
	 *            @see {@link https://developers.google.com/analytics/devguides/collection/analyticsjs/}
	 * @memberof core
	 *
	 */
	
	var Analytics = (function () {
	    function Analytics() {
	        _classCallCheck(this, Analytics);
	
	        if (!_instance) {
	            this.initSQSMetrics();
	
	            _emitter2["default"].on("app--analytics-push", this.pushTrack.bind(this));
	
	            (0, _log2["default"])("Analytics initialized");
	
	            _instance = this;
	        }
	
	        return _instance;
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @method initSQSMetrics
	     * @memberof core.Analytics
	     * @description Cache the initial static context object.
	     *
	     */
	
	    _createClass(Analytics, [{
	        key: "initSQSMetrics",
	        value: function initSQSMetrics() {
	            if (_instance) {
	                return;
	            }
	
	            this.cacheStaticContext(window.Static.SQUARESPACE_CONTEXT);
	        }
	
	        /**
	         *
	         * @public
	         * @method track
	         * @param {string} type The object type, item or collection
	         * @param {object} data The data context to track with
	         * @memberof core.Analytics
	         * @description Track Squarespace Metrics since we are ajax-routing.
	         *
	         */
	    }, {
	        key: "track",
	        value: function track(type, data) {
	            (0, _log2["default"])("Analytics track", type, data);
	
	            // Squarespace Metrics
	            window.Y.Squarespace.Analytics.view(type, data);
	        }
	
	        /**
	         *
	         * @public
	         * @method pushTrack
	         * @param {Hobo} $doc <html> node to receive and work with
	         * @memberof core.Analytics
	         * @description Parse static context from responseText and track it.
	         *
	         */
	    }, {
	        key: "pushTrack",
	        value: function pushTrack($doc) {
	            var $title = $doc.find("title");
	            var ctx = this.getStaticContext($doc.find("head")[0].innerHTML);
	
	            if (ctx) {
	                this.track(ctx.item ? "item" : "collection", ctx.item || ctx.collection);
	            }
	
	            this.setDocumentTitle($title[0].innerText);
	        }
	
	        /**
	         *
	         * @public
	         * @method setDocumentTitle
	         * @param {string} title The new title for the document
	         * @memberof core.Analytics
	         * @description Update the documents title.
	         *
	         */
	    }, {
	        key: "setDocumentTitle",
	        value: function setDocumentTitle(title) {
	            document.title = title;
	        }
	
	        /**
	         *
	         * @public
	         * @method getStaticContext
	         * @param {string} resHTML The responseText HTML string from router
	         * @memberof core.Analytics
	         * @description Attempt to parse the Squarespace data context from responseText.
	         * @returns {object}
	         *
	         */
	    }, {
	        key: "getStaticContext",
	        value: function getStaticContext(resHTML) {
	            // Match the { data } in Static.SQUARESPACE_CONTEXT
	            var ctx = _cache2["default"].get("context--" + util.getPageKey());
	
	            if (!ctx) {
	                ctx = resHTML.match(/Static\.SQUARESPACE_CONTEXT\s=\s(.*?)\};/);
	
	                if (ctx && ctx[1]) {
	                    ctx = ctx[1];
	
	                    // Put the ending {object} bracket back in there :-(
	                    ctx = ctx + "}";
	
	                    // Parse the string as a valid piece of JSON content
	                    try {
	                        ctx = JSON.parse(ctx);
	                    } catch (error) {
	                        (0, _log2["default"])("warn", "Analytics JSON.parse Error", error);
	                    }
	
	                    // Cache context locally
	                    this.cacheStaticContext(ctx);
	                } else {
	                    ctx = false;
	                }
	            }
	
	            return ctx;
	        }
	
	        /**
	         *
	         * @public
	         * @method cacheStaticContext
	         * @param {object} json The Static.SQUARESPACE_CONTEXT ref
	         * @memberof core.Analytics
	         * @description Cache the sqs context once its been parsed out.
	         *
	         */
	    }, {
	        key: "cacheStaticContext",
	        value: function cacheStaticContext(json) {
	            _cache2["default"].set("context--" + util.getPageKey(), json);
	        }
	    }]);
	
	    return Analytics;
	})();
	
	exports["default"] = Analytics;
	module.exports = exports["default"];

/***/ },
/* 56 */
/*!**************************!*\
  !*** ./js_src/router.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsPagecontroller = __webpack_require__(/*! properjs-pagecontroller */ 57);
	
	var _properjsPagecontroller2 = _interopRequireDefault(_properjsPagecontroller);
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _core = __webpack_require__(/*! ./core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _about = __webpack_require__(/*! ./about */ 62);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _indexes = __webpack_require__(/*! ./indexes */ 64);
	
	var _indexes2 = _interopRequireDefault(_indexes);
	
	var _indexesListing = __webpack_require__(/*! ./indexes/listing */ 69);
	
	var _indexesListing2 = _interopRequireDefault(_indexesListing);
	
	var _projects = __webpack_require__(/*! ./projects */ 73);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	var _overlay = __webpack_require__(/*! ./overlay */ 67);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _gallery = __webpack_require__(/*! ./gallery */ 71);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _projectsProject = __webpack_require__(/*! ./projects/Project */ 66);
	
	var _projectsProject2 = _interopRequireDefault(_projectsProject);
	
	/**
	 *
	 * @public
	 * @namespace router
	 * @description Handles async web app routing for nice transitions.
	 *
	 */
	var router = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof router
	     * @description Initialize the router module.
	     *
	     */
	    init: function init() {
	        this.state = {};
	        this.navData = core.dom.nav.data();
	        this.pageData = core.dom.page.data();
	        this.pageDuration = core.util.getTransitionDuration(core.dom.page[0]);
	        this.prepPage();
	        this.bindEmptyHashLinks();
	        this.initPageController();
	
	        core.log("router initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method setState
	     * @memberof router
	     * @param {string} name The access key
	     * @param {mixed} value The storage value
	     * @description Non-persistent state.
	     *              This state object will persist for one router cycle.
	     *              The next router cycle will delete this state object.
	     *
	     */
	    setState: function setState(name, value) {
	        this.state[name] = {
	            checked: false,
	            name: name,
	            value: value
	        };
	    },
	
	    /**
	     *
	     * @public
	     * @method getState
	     * @memberof router
	     * @param {string} name The access key
	     * @description Access a state object ref by its name.
	     * @returns {mixed}
	     *
	     */
	    getState: function getState(name) {
	        var id = null;
	        var ret = null;
	
	        for (id in this.state) {
	            if (this.state.hasOwnProperty(id)) {
	                if (this.state[id].name === name) {
	                    ret = this.state[id].value;
	                    break;
	                }
	            }
	        }
	
	        return ret;
	    },
	
	    /**
	     *
	     * @public
	     * @method checkState
	     * @memberof router
	     * @description Process state objects.
	     *              Objects that have already been `checked` are deleted.
	     *
	     */
	    checkState: function checkState() {
	        var id = null;
	
	        for (id in this.state) {
	            if (this.state.hasOwnProperty(id)) {
	                if (this.state[id].checked) {
	                    delete this.state[id];
	                } else {
	                    this.state[id].checked = true;
	                }
	            }
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method route
	     * @param {string} path The uri to route to
	     * @memberof router
	     * @description Trigger app to route a specific page. [Reference]{@link https://github.com/ProperJS/Router/blob/master/Router.js#L222}
	     *
	     */
	    route: function route(path) {
	        this.controller.getRouter().trigger(path);
	    },
	
	    /**
	     *
	     * @public
	     * @method push
	     * @param {string} path The uri to route to
	     * @param {function} cb Optional callback to fire
	     * @memberof router
	     * @description Trigger a silent route with a supplied callback.
	     *
	     */
	    push: function push(path, cb) {
	        this.controller.routeSilently(path, cb || core.util.noop);
	        this.checkState();
	    },
	
	    /**
	     *
	     * @public
	     * @method initPageController
	     * @memberof router
	     * @description Create the PageController instance.
	     *
	     */
	    initPageController: function initPageController() {
	        this.controller = new _properjsPagecontroller2["default"]({});
	
	        this.controller.setConfig(["*"]);
	
	        this.controller.setModules([_about2["default"], _indexes2["default"], _indexesListing2["default"], _projects2["default"]]);
	
	        this.controller.on("page-controller-router-transition-out", this.changePageOut.bind(this));
	        this.controller.on("page-controller-router-refresh-document", this.changeContent.bind(this));
	        this.controller.on("page-controller-router-transition-in", this.changePageIn.bind(this));
	        this.controller.on("page-controller-initialized-page", this.initPage.bind(this));
	
	        this.controller.initPage();
	    },
	
	    /**
	     *
	     * @public
	     * @method prepPage
	     * @memberof router
	     * @description Perform actions before PageController init callback.
	     *
	     */
	    prepPage: function prepPage() {
	        var _this = this;
	
	        this.root = null;
	
	        // Index?
	        // Indexes will already have the root gridwall loaded
	        // Offcanvas/Project paths will need to manually load the root index
	        if (this.pageData.type !== "index") {
	            if (this.pageData.type === "offcanvas") {
	                this.root = "/";
	            } else {
	                this.navData.appTree.forEach(function (indexItem) {
	                    if (indexItem.items) {
	                        indexItem.items.forEach(function (collectionItem) {
	                            if (collectionItem.collection.id === _this.pageData.id) {
	                                _this.root = indexItem.collection.fullUrl;
	                            }
	                        });
	                    }
	                });
	            }
	
	            this.root = this.root || "/";
	            this.loadRootIndex();
	        } else {
	            this.root = window.location.pathname;
	        }
	
	        core.dom.root.attr("href", this.root);
	
	        core.dom.root.on("click", function () {
	            core.dom.html.removeClass(core.config.offcanvasClasses);
	
	            core.emitter.fire("app--root");
	        });
	
	        core.emitter.on("app--project-ended", function () {
	            if (!_this.isPop) {
	                _this.route(_this.root);
	            }
	        });
	    },
	
	    /**
	     *
	     * @public
	     * @method initPage
	     * @memberof router
	     * @description Perform actions after PageController init callback.
	     *
	     */
	    initPage: function initPage() {
	        core.dom.nav.detach();
	        core.dom.page.detach();
	
	        core.dom.html.removeClass("is-clipped");
	        core.dom.body.removeClass("is-clipped");
	
	        window.addEventListener("popstate", this.handlePopstate.bind(this), false);
	    },
	
	    /**
	     *
	     * @public
	     * @method handlePopstate
	     * @memberof router
	     * @description Process actions to take on popstate.
	     *
	     */
	    handlePopstate: function handlePopstate() {
	        this.isPop = true;
	
	        var $tile = null;
	        var match = window.location.pathname.match(/^\/$|^\/about\/$|^\/index\/$/g);
	
	        // GarberCo?
	        // About?
	        // Index?
	        if (match && match[0]) {
	            match = match[0].replace(/\//g, "");
	            match = match ? match : "garberco";
	
	            core.dom.main[0].id = "is-main--" + match;
	
	            // GarberCo?
	            if (match === core.config.rootUrlId) {
	                core.dom.html.removeClass(core.config.offcanvasClasses);
	                //core.dom.html.removeClass( "is-neverflow" );
	            }
	
	            // Project?
	            if (_projectsProject2["default"].isActive()) {
	                core.emitter.fire("app--project-ended");
	            }
	
	            // Overlay?
	            _overlay2["default"].close();
	
	            // Project?
	        } else {
	                $tile = (0, _js_libsHoboDistHoboBuild2["default"])(".js-index-tile[href*='" + window.location.pathname + "']");
	                $tile.trigger("mouseenter");
	                $tile.trigger("click");
	            }
	
	        // Gallery?
	        _gallery2["default"].close();
	
	        this.isPop = false;
	    },
	
	    /**
	     *
	     * @public
	     * @method loadRootIndex
	     * @memberof router
	     * @description Load the parent Index for the current collection.
	     *
	     */
	    loadRootIndex: function loadRootIndex() {
	        var _this2 = this;
	
	        core.api.collection(this.root, { format: "html" }, { dataType: "html" }).then(function (response) {
	            var doc = _this2.parseDoc(response);
	
	            core.emitter.fire("app--load-root", doc.pageHtml);
	        });
	    },
	
	    /**
	     *
	     * @public
	     * @method loadFullIndex
	     * @param {function} cb The callback to fire
	     * @memberof router
	     * @description Load the parent Index JSON to render full Index view.
	     *
	     */
	    loadFullIndex: function loadFullIndex(cb) {
	        core.api.collection(this.root, { format: "json" }, { dataType: "json" }).then(cb);
	    },
	
	    /**
	     *
	     * @public
	     * @method parseDoc
	     * @param {string} html The responseText to parse out
	     * @memberof router
	     * @description Get the DOM information to cache for a request.
	     * @returns {object}
	     *
	     */
	    parseDoc: function parseDoc(html) {
	        var doc = document.createElement("html");
	
	        doc.innerHTML = html;
	
	        doc = (0, _js_libsHoboDistHoboBuild2["default"])(doc);
	
	        return {
	            $doc: doc,
	            $page: doc.find(".js-page"),
	            pageHtml: doc.find(".js-page")[0].innerHTML
	        };
	    },
	
	    /**
	     *
	     * @public
	     * @method bindEmptyHashLinks
	     * @memberof router
	     * @description Suppress #hash links.
	     *
	     */
	    bindEmptyHashLinks: function bindEmptyHashLinks() {
	        core.dom.body.on("click", "[href^='#']", function (e) {
	            return e.preventDefault();
	        });
	    },
	
	    /**
	     *
	     * @public
	     * @method changePageOut
	     * @memberof router
	     * @description Trigger transition-out animation.
	     *
	     */
	    changePageOut: function changePageOut() {
	        core.dom.html.addClass("is-routing");
	    },
	
	    /**
	     *
	     * @public
	     * @method changeContent
	     * @param {object} data The PageController data object
	     * @memberof router
	     * @description Swap the new content into the DOM.
	     *
	     */
	    changeContent: function changeContent(data) {
	        var doc = this.parseDoc(data.response);
	
	        core.dom.page[0].innerHTML = doc.pageHtml;
	
	        core.emitter.fire("app--analytics-push", doc.$doc);
	
	        this.pageData = doc.$page.data();
	
	        // Check state before cycle finishes so `checked` state can be deleted
	        this.checkState();
	    },
	
	    /**
	     *
	     * @public
	     * @method changePageIn
	     * @param {object} data The data object supplied by PageController from PushState
	     * @memberof router
	     * @description Trigger transition-in animation.
	     *
	     */
	    changePageIn: function changePageIn() /* data */{
	        core.dom.html.removeClass("is-routing");
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = router;
	module.exports = exports["default"];

/***/ },
/* 57 */
/*!*****************************************************!*\
  !*** ./~/properjs-pagecontroller/PageController.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Asynchronous webpage transitioning with pushstate management.
	 *
	 * @PageController
	 * @author: kitajchuk
	 *
	 * @module
	 * - init
	 * - isActive
	 * - onload
	 * - unload
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.PageController = factory();
	    }
	
	})(function () {
	
	    // Useful stuff
	    var Router = __webpack_require__( /*! properjs-router */ 58 ),
	        Controller = __webpack_require__( /*! properjs-controller */ 41 ),
	
	        _router = null,
	        _config = [],
	        _modules = [],
	        _synced = {
	            active: [],
	            inactive: []
	        },
	        _initialized = false,
	        _timeBefore = null,
	        _timeDelay = 0,
	        _eventPrefix = "page-controller-",
	        _currentRoute = null,
	        _isFirstRoute = true,
	        _currentQuery = null,
	        _currentToString = null,
	        _isSamePage = false,
	        _silentMode = false,
	        _silentCallback = null,
	        _isRoutingActive = false,
	
	        // Singleton
	        _instance = null,
	
	
	    // Private functions
	    fire = function ( event, arg ) {
	        if ( !_silentMode ) {
	            _instance.fire( (_eventPrefix + event), arg );
	        }
	    },
	
	
	    isFunction = function ( fn ) {
	        return (typeof fn === "function");
	    },
	
	
	    isSameObject = function ( o1, o2 ) {
	        return (JSON.stringify( o1 ) === JSON.stringify( o2 ));
	    },
	
	
	    execInit = function ( method ) {
	        // One time module initialization
	        for ( var i = _modules.length; i--; ) {
	            if ( !_modules[ i ].__initialized && isFunction( _modules[ i ].init ) ) {
	                _modules[ i ].__initialized = true;
	                _modules[ i ].init();
	            }
	        }
	    },
	
	
	    execUnload = function () {
	        if ( _silentMode ) {
	            return;
	        }
	
	        // Unload currently active modules only
	        for ( var i = _synced.active.length; i--; ) {
	            if ( isFunction( _synced.active[ i ].unload ) ) {
	                _synced.active[ i ].unload();
	            }
	        }
	    },
	
	
	    execOnload = function () {
	        if ( _silentMode ) {
	            return;
	        }
	
	        // Unload newly active modules only
	        for ( var i = _synced.active.length; i--; ) {
	            if ( isFunction( _synced.active[ i ].onload ) ) {
	                _synced.active[ i ].onload();
	            }
	        }
	    },
	
	
	    getRouteDataToString = function ( data ) {
	        var ret = data.uri,
	            i;
	
	        for ( i in data.query ) {
	            ret += "-" + i + "-" + data.query[ i ];
	        }
	
	        for ( i in data.params ) {
	            ret += "-" + i + "-" + data.params[ i ];
	        }
	
	        return ret;
	    },
	
	
	    /**
	     * @fires page-controller-router-synced-modules
	     */
	    syncModules = function () {
	        if ( _silentMode ) {
	            return;
	        }
	
	        _synced.active = [];
	        _synced.inactive = [];
	
	        for ( var i = _modules.length; i--; ) {
	            var module = _modules[ i ];
	
	            if ( isFunction( module.isActive ) ) {
	                // isActive method should rebuild module variables
	                if ( module.isActive() ) {
	                    _synced.active.push( module );
	
	                } else {
	                    _synced.inactive.push( module );
	                }
	            }
	        }
	
	        fire( "router-synced-modules", _synced );
	    },
	
	
	    onRouterResponse = function ( data ) {
	        if ( _isRoutingActive ) {
	            return;
	        }
	
	        _isRoutingActive = true;
	
	        function __route() {
	            if ( (Date.now() - _timeBefore) >= _instance._options.transitionTime ) {
	                _instance.stop();
	
	                handleRouterResponse( data );
	            }
	        }
	
	        _instance.go( __route );
	    },
	
	
	    onPopGetRouter = function ( data ) {
	        if ( _isRoutingActive ) {
	            return;
	        }
	
	        onPreGetRouter( data.request );
	    
	        setTimeout( function () {
	            handleRouterResponse( data );
	
	        }, _instance._options.transitionTime );
	    },
	
	
	    /**
	     * @fires page-controller-router-transition-out
	     * @fires page-controller-router-samepage
	     */
	    onPreGetRouter = function ( data ) {
	        if ( _isRoutingActive ) {
	            return;
	        }
	
	        var isSameRequest = (_currentToString === getRouteDataToString( data ));
	
	        if ( isSameRequest ) {
	            fire( "router-samepage", {
	                request: data
	            });
	            _isSamePage = true;
	            return;
	        }
	
	        _timeBefore = Date.now();
	
	        if ( !_isFirstRoute ) {
	            fire( "router-transition-out", {
	                request: data
	            });
	        }
	    },
	
	
	    /**
	     * @fires page-controller-router-refresh-document
	     * @fires page-controller-router-transition-in
	     */
	    handleRouterResponse = function ( res ) {
	        if ( _isSamePage ) {
	            _isSamePage = false;
	            _isRoutingActive = false;
	            return;
	        }
	
	        var data = {
	            response: res.response.responseText,
	            request: res.request,
	            status: res.status
	        };
	
	        _currentRoute = data.request.uri;
	        _currentQuery = data.request.query;
	        _currentToString = getRouteDataToString( data.request );
	
	        // Think of this as window.onload, happens once
	        if ( _isFirstRoute ) {
	            _isFirstRoute = false;
	            _isRoutingActive = false;
	            syncModules();
	            execOnload();
	
	            fire( "initialized-page", data );
	
	        // All other Router sequences fall here
	        } else {
	            // Allow transition duration to take place
	            setTimeout(function () {
	                // 0.1 Sync modules and unload active ones
	                syncModules();
	                execUnload();
	
	                // 0.2 Refresh the document content
	                fire( "router-refresh-document", data );
	
	                // 0.3 Sync modules and onload newly active ones
	                syncModules();
	                execOnload();
	
	                // 0.4 Trigger transition of content to come back in
	                fire( "router-transition-in", data );
	
	                _isRoutingActive = false;
	
	                // 0.5 Check `silent` mode
	                if ( _silentMode ) {
	                    _silentMode = false;
	
	                    if ( isFunction( _silentCallback ) ) {
	                        _silentCallback( data );
	                        _silentCallback = null;
	                    }
	                }
	
	            }, _instance._options.transitionTime );
	        }
	    };
	
	
	    /**
	     *
	     * Page transition manager
	     * @constructor PageController
	     * @augments Controller
	     * @requires Controller
	     * @requires Router
	     * @memberof! <global>
	     * @param {object} options Settings for control features
	     * <ul>
	     * <li>transitionTime</li>
	     * <li>routerOptions</li>
	     * </ul>
	     *
	     */
	    var PageController = function ( options ) {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	
	            /**
	             *
	             * The default options
	             * @memberof _options
	             * @member _routerOptions
	             * @private
	             *
	             */
	            this._options = {
	                transitionTime: _timeDelay,
	                routerOptions: {
	                    pushStateOptions: {}
	                }
	            };
	
	            // Normalize usage options passed in
	            options = (options || {});
	
	            // Merge usage options with defaults
	            if ( options.transitionTime ) {
	                this._options.transitionTime = options.transitionTime;
	            }
	
	            if ( options.routerOptions ) {
	                for ( var i in options.routerOptions ) {
	                    this._options.routerOptions[ i ] = options.routerOptions[ i ];
	                }
	            }
	        }
	
	        return _instance;
	    };
	
	    PageController.prototype = new Controller();
	
	    /**
	     *
	     * Initialize controller on page
	     * @memberof PageController
	     * @method initPage
	     *
	     */
	    PageController.prototype.initPage = function () {
	        if ( _initialized ) {
	            return;
	        }
	
	        _initialized = true;
	
	        /**
	         *
	         * Instance of Router
	         * @private
	         *
	         */
	        _router = new Router( this._options.routerOptions );
	
	        if ( _router._matcher.parse( window.location.href, _config ).matched ) {
	            _router.bind();
	
	            for ( var i = _config.length; i--; ) {
	                _router.get( _config[ i ], onRouterResponse );
	            }
	
	            _router.on( "preget", onPreGetRouter );
	            _router.on( "popget", onPopGetRouter );
	
	            execInit();
	        }
	    };
	
	    /**
	     *
	     * Trigger the router on a uri and run PageController `silently`, so no events fire.
	     * @memberof PageController
	     * @method routeSilently
	     * @param {string} uri The route to trigger
	     * @param {function} cb The optional callback to fire when done
	     *
	     */
	    PageController.prototype.routeSilently = function ( uri, cb ) {
	        _silentMode = true;
	        _silentCallback = cb;
	        _router.trigger( uri );
	    };
	
	    /**
	     *
	     * Set the Router configuration
	     * @memberof PageController
	     * @method setConfig
	     * @param {object} config The config for MatchRoute
	     *
	     */
	    PageController.prototype.setConfig = function ( config ) {
	        _config = config;
	    };
	
	    /**
	     *
	     * Set the module configuration
	     * @memberof PageController
	     * @method setModules
	     * @param {object} modules The array of module objects
	     *
	     */
	    PageController.prototype.setModules = function ( modules ) {
	        if ( !modules ) {
	            return;
	        }
	
	        for ( var i = modules.length; i--; ) {
	            this.addModule( modules[ i ] );
	        }
	    };
	
	    /**
	     *
	     * Add to the module configuration
	     * @memberof PageController
	     * @method addModule
	     * @param {object} module The module object to add
	     *
	     */
	    PageController.prototype.addModule = function ( module ) {
	        if ( _modules.indexOf( module ) === -1 && isFunction( module.isActive ) && isFunction( module.onload ) && isFunction( module.unload ) ) {
	            _modules.push( module );
	
	        } else {
	            throw new Error( "PageController ERROR - All registered modules require isActive, onload and unload methods." );
	        }
	    };
	
	    /**
	     *
	     * Returns the array of modules
	     * @memberof PageController
	     * @method getModules
	     * @returns array
	     *
	     */
	    PageController.prototype.getModules = function () {
	        return _modules;
	    };
	
	    /**
	     *
	     * Returns the MatchRoute config
	     * @memberof PageController
	     * @method getConfig
	     * @returns array
	     *
	     */
	    PageController.prototype.getConfig = function () {
	        return _config;
	    };
	
	    /**
	     *
	     * Returns the instances Router
	     * @memberof PageController
	     * @method getRouter
	     * @returns Router
	     *
	     */
	    PageController.prototype.getRouter = function () {
	        return _router;
	    };
	
	    /**
	     *
	     * Returns the instances PushState
	     * @memberof PageController
	     * @method getPusher
	     * @returns PushState
	     *
	     */
	    PageController.prototype.getPusher = function () {
	        return _router._pusher;
	    };
	
	    /**
	     *
	     * Returns the instances MatchRoute
	     * @memberof PageController
	     * @method getMatcher
	     * @returns MatchRoute
	     *
	     */
	    PageController.prototype.getMatcher = function () {
	        return _router._matcher;
	    };
	
	    /**
	     *
	     * Returns the current route pathed
	     * @memberof PageController
	     * @method getRoute
	     * @returns string
	     *
	     */
	    PageController.prototype.getRoute = function () {
	        return _currentRoute;
	    };
	
	    /**
	     *
	     * Returns the current query params object
	     * @memberof PageController
	     * @method getQuery
	     * @returns string
	     *
	     */
	    PageController.prototype.getQuery = function () {
	        return _currentQuery;
	    };
	
	    return PageController;
	
	});

/***/ },
/* 58 */
/*!***************************************************************!*\
  !*** ./~/properjs-pagecontroller/~/properjs-router/Router.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handles basic get routing
	 *
	 * @Router
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Router = factory();
	    }
	
	})(function () {
	
	    var PushState = __webpack_require__( /*! properjs-pushstate */ 59 ),
	        MatchRoute = __webpack_require__( /*! properjs-matchroute */ 60 ),
	        matchElement = __webpack_require__( /*! properjs-matchelement */ 61 ),
	        _initDelay = 200,
	        _triggerEl;
	
	
	    /**
	     *
	     * A simple router Class
	     * @constructor Router
	     * @requires PushState
	     * @requires MatchRoute
	     * @requires matchElement
	     * @memberof! <global>
	     *
	     */
	    var Router = function () {
	        return this.init.apply( this, arguments );
	    };
	
	    Router.prototype = {
	        constructor: Router,
	
	        /**
	         *
	         * Expression match http/https
	         * @memberof Router
	         * @member _rHTTPs
	         * @private
	         *
	         */
	        _rHTTPs: /^http[s]?:\/\/.*?\//,
	
	        /**
	         *
	         * Expression match common file types...
	         * @memberof Router
	         * @member _rFiles
	         * @private
	         *
	         */
	        _rFiles: /\.jpg|jpeg|png|gif|pdf|csv|txt|md|doc|docx|xls|xlsx|webm|mp4|mp3$/gi,
	
	        /**
	         *
	         * Expression match this documents domain
	         * @memberof Router
	         * @member _rDomain
	         * @private
	         *
	         */
	        _rDomain: new RegExp( document.domain ),
	
	        /**
	         *
	         * Flag routing state
	         * @memberof Router
	         * @member _isRouting
	         * @private
	         *
	         */
	        _isRouting: false,
	
	        /**
	         *
	         * Router init constructor method
	         * @memberof Router
	         * @method init
	         * @param {object} options Settings for PushState
	         * <ul>
	         * <li>options.caching</li>
	         * <li>options.proxy</li>
	         * <li>options.proxy.domain</li>
	         * <li>options.handle404</li>
	         * <li>options.handle500</li>
	         * <li>options.pushStateOptions</li>
	         * </ul>
	         *
	         * @fires preget
	         * @fires popget
	         * @fires get
	         *
	         */
	        init: function ( options ) {
	            /**
	             *
	             * Router Store user options
	             * @memberof Router
	             * @member _options
	             * @private
	             *
	             */
	            this._options = {
	                proxy: false,
	                caching: true,
	                handle404: true,
	                handle500: true,
	                pushStateOptions: {}
	            };
	
	            // Normalize usage options passed in
	            options = (options || {});
	
	            // Merge usage options with defaults
	            for ( var i in options ) {
	                this._options[ i ] = options[ i ];
	            }
	
	            /**
	             *
	             * Internal MatchRoute instance
	             * @memberof Router
	             * @member _matcher
	             * @private
	             *
	             */
	            this._matcher = new MatchRoute();
	
	            /**
	             *
	             * Internal PushState instance
	             * @memberof Router
	             * @member _pusher
	             * @private
	             *
	             */
	            this._pusher = new PushState( this._options.pushStateOptions );
	
	            /**
	             *
	             * Event handling callbacks
	             * @memberof Router
	             * @member _callbacks
	             * @private
	             *
	             */
	            this._callbacks = {};
	
	            /**
	             *
	             * Stored XHR responses
	             * @memberof Router
	             * @member _responses
	             * @private
	             *
	             */
	            this._responses = {};
	
	            /**
	             *
	             * Router unique ID
	             * @memberof Router
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
	
	            /**
	             *
	             * Router is READY status ?
	             * @memberof Router
	             * @member _ready
	             * @private
	             *
	             */
	            this._ready = false;
	        },
	
	        /**
	         *
	         * Create PushState instance and add event listener
	         * @memberof Router
	         * @method bind
	         *
	         */
	        bind: function () {
	            var self = this,
	                // Ensure this first cache URL is clean as a whistle
	                url = window.location.href.replace( window.location.hash, "" );
	
	            // Bind GET requests to links
	            document.addEventListener( "click", function ( e ) {
	                self._handleClick( this, e );
	
	            }, false );
	
	            // Bind popstate event for history
	            this._pusher.on( "popstate", function ( url, state ) {
	                self._handlePopstate( url, state );
	            });
	
	            // Fire first route - shim a little and bypass true XHR here
	            // Async this in order to allow .get() to work after instantiation
	            setTimeout(function () {
	                // https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer
	                var doc = new XMLSerializer().serializeToString( document );
	                var xhr = {
	                    status: 200,
	                    responseText: doc
	                };
	
	                self._fire( "get", url, xhr, xhr.status );
	                self._cache( url, xhr );
	                self._ready = true;
	
	            }, _initDelay );
	        },
	
	        /**
	         *
	         * Add an event listener
	         * Binding "beforeget" and "afterget" wraps the XHR request
	         * @memberof Router
	         * @method on
	         * @param {string} event The event to bind to
	         * @param {function} callback The function to call
	         *
	         */
	        on: function ( event, callback ) {
	            this._bind( event, callback );
	        },
	
	        /**
	         *
	         * Remove an event listener
	         * @memberof Router
	         * @method off
	         * @param {string} event The event to unbind
	         * @param {function} callback The function to reference
	         *
	         */
	        off: function ( event, callback ) {
	            this._unbind( event, callback );
	        },
	
	        /**
	         *
	         * Support router triggers by url
	         * @memberof Router
	         * @method trigger
	         * @param {string} url The url to route to
	         *
	         */
	        trigger: function ( url ) {
	            if ( !_triggerEl ) {
	                _triggerEl = document.createElement( "a" );
	            }
	
	            _triggerEl.href = url;
	
	            this._handleClick( _triggerEl, {
	                target: _triggerEl
	            });
	        },
	
	        /**
	         *
	         * Bind a GET request route
	         * @memberof Router
	         * @method get
	         * @param {string} route route to match
	         * @param {function} callback function to call when route is requested
	         *
	         */
	        get: function ( route, callback ) {
	            // Add route to matcher
	            this._matcher.config( [route] );
	
	            // Bind the route to the callback
	            if ( callback._routerRoutes ) {
	                callback._routerRoutes.push( route );
	
	            } else {
	                callback._routerRoutes = [route];
	            }
	
	            // When binding multiple routes to a single
	            // callback, we need to make sure the callbacks
	            // routes array is updated above but the callback
	            // only gets added to the list once.
	            if ( callback._routerRoutes.length === 1 ) {
	                this._bind( "get", callback );
	            }
	        },
	
	        /**
	         *
	         * Get a sanitized route for a url
	         * @memberof Router
	         * @method getRouteForUrl
	         * @param {string} url The url to use
	         * @returns {string}
	         *
	         */
	        getRouteForUrl: function ( url ) {
	            return this._matcher._cleanRoute( url );
	        },
	
	        /**
	         *
	         * Get the match data for a url against the routes config
	         * @memberof Router
	         * @method getRouteDataForUrl
	         * @param {string} url The url to use
	         * @returns {object}
	         *
	         */
	        getRouteDataForUrl: function ( url ) {
	            return this._matcher.parse( url, this._matcher.getRoutes() ).params;
	        },
	
	        /**
	         *
	         * Get a unique ID
	         * @memberof Router
	         * @method getUID
	         * @returns number
	         *
	         */
	        getUID: function () {
	            this._uid = (this._uid + 1);
	
	            return this._uid;
	        },
	
	        /**
	         * Compatible event preventDefault
	         * @memberof Router
	         * @method _preventDefault
	         * @param {object} e The event object
	         * @private
	         *
	         */
	        _preventDefault: function ( e ) {
	            if ( e.preventDefault ) {
	                e.preventDefault();
	
	            } else {
	                e.returnValue = false;
	            }
	        },
	
	        /**
	         * GET click event handler
	         * @memberof Router
	         * @method _handleClick
	         * @param {object} el The event context element
	         * @param {object} e The event object
	         * @private
	         *
	         * @fires get
	         *
	         */
	        _handleClick: function ( el, e ) {
	            var elem = (matchElement( el, "a" ) || matchElement( e.target, "a" )),
	                isMatched = elem && this._matcher.test( elem.href ),
	                isDomain = elem && this._rDomain.test( elem.href ),
	                isProxy = elem && this._options.proxy && this._options.proxy.domain,
	                isHashed = elem && elem.href.indexOf( "#" ) !== -1,
	                isIgnore = elem && elem.className.indexOf( "js-router--ignore" ) !== -1,
	                isMetaKey = elem && e.metaKey,
	                isBlank = elem && elem.target === "_blank",
	                isFile = elem && isDomain && elem.href.match( this._rFiles );
	
	            // 0.1 => Ensure url passes MatchRoute config
	            // 0.2 => Ensure url is on the Document's Domain
	            // 0.X => Allow proxy domain's to go through this checkpoint
	            if ( (isMatched && isDomain) || isProxy ) {
	                // 0.3 => Ensure url is not a #hash
	                // 0.4 => Ensure the element does not contain a `js-router--ignore` className
	                // 0.5 => Ensure the Event.metaKey is not TRUE - Command+click
	                // 0.6 => Ensure the element target is not for a new tab
	                // 0.7 => Ensure url is not a file link on the same document domain
	                if ( !isHashed && !isIgnore && !isMetaKey && !isBlank && !isFile ) {
	                    this._preventDefault( e );
	                    
	                    if ( !this._isRouting ) {
	                        this._route( elem.href );
	                    }
	                }
	            }
	        },
	
	        /**
	         * Handle history popstate event from PushState
	         * @memberof Router
	         * @method _handlePopstate
	         * @param {string} url The url popped to
	         * @param {object} state The PushState state object
	         * @private
	         *
	         * @fires get
	         *
	         */
	        _handlePopstate: function ( url, state ) {
	            // Hook around browsers firing popstate on pageload
	            if ( this._ready ) {
	                for ( var i = this._callbacks.get.length; i--; ) {
	                    var dat = this._matcher.parse( url, this._callbacks.get[ i ]._routerRoutes );
	
	                    if ( dat.matched ) {
	                        break;
	                    }
	                }
	
	                data = {
	                    route: this._matcher._cleanRoute( url ),
	                    response: this._responses[ url ],
	                    request: dat,
	                    status: this._responses[ url ].status
	                };
	
	                this._fire( "popget", url, data );
	
	            } else {
	                this._ready = true;
	            }
	        },
	
	        /**
	         * Execute the route
	         * @memberof Router
	         * @method _route
	         * @param {string} url The url in question
	         * @param {function} callback Optional, fired with done
	         * @private
	         *
	         */
	        _route: function ( url, callback ) {
	            var self = this,
	                urls = {
	                    // For XHR
	                    request: url,
	
	                    // For pushState and Cache
	                    original: url
	                };
	
	            this._isRouting = true;
	
	            this._matchUrl( urls.original );
	
	            // Handle proxy first since we modify the request URL
	            // Basically, just piece together a URL that swaps this domain with proxy domain
	            if ( this._options.proxy && this._options.proxy.domain ) {
	                // Use window.location.host so it includes port for localhost
	                urls.request = (this._options.proxy.domain + "/" + urls.request.replace( this._rHTTPs, "" ));
	            }
	
	            this._getUrl( urls, function ( response, status ) {
	                self._isRouting = false;
	
	                // Push the URL to window History
	                self._pusher.push( urls.original );
	
	                // Fire event for routing
	                self._fire( "get", urls.original, response, status );
	
	                if ( typeof callback === "function" ) {
	                    callback( response, status );
	                }
	            });
	        },
	
	        /**
	         * Match a URL and fire "preget"
	         * @memberof Router
	         * @method _matchUrl
	         * @param {string} url The url in question
	         * @private
	         *
	         */
	        _matchUrl: function ( url ) {
	            for ( var i = this._callbacks.get.length; i--; ) {
	                var data = this._matcher.parse( url, this._callbacks.get[ i ]._routerRoutes );
	
	                if ( data.matched ) {
	                    this._fire( "preget", url, data );
	                    break;
	                }
	            }
	        },
	
	        /**
	         *
	         * Request a url with an XMLHttpRequest
	         * @memberof Router
	         * @method _getUrl
	         * @param {object} urls The urls to request / push / cache
	         * @param {function} callback The function to call when done
	         * @private
	         *
	         */
	        _getUrl: function ( urls, callback ) {
	            var handler = function ( res, stat ) {
	                    try {
	                        // Cache if option enabled
	                        self._cache( urls.original, res );
	
	                        if ( typeof callback === "function" ) {
	                            callback( res, stat );
	                        }
	
	                    } catch ( error ) {}
	                },
	                xhr = null,
	                self = this;
	
	            // Cached response ?
	            if ( this._responses[ urls.original ] ) {
	                handler( this._responses[ urls.original ], this._responses[ urls.original ].status );
	
	            // Fresh request ?
	            } else {
	                xhr = new XMLHttpRequest();
	
	                xhr.open( "GET", urls.request, true );
	
	                xhr.onreadystatechange = function ( e ) {
	                    if ( this.readyState === 4 ) {
	                        if ( this.status === 200 ) {
	                            handler( this, 200 );
	
	                        } else if ( this.status === 404 && self._options.handle404 ) {
	                            handler( this, 404 );
	
	                        } else if ( this.status === 500 && self._options.handle500 ) {
	                            handler( this, 500 );
	                        }
	                    }
	                };
	
	                xhr.send();
	            }
	        },
	
	        /**
	         *
	         * Cache an XHR response object
	         * @memberof Router
	         * @method _cache
	         * @param {string} url The url to cache for
	         * @param {object} res The XHR object
	         * @private
	         *
	         */
	        _cache: function ( url, res ) {
	            // Caching is enabled, Not currently cached yet
	            if ( this._options.caching && !this._responses[ url ] ) {
	                this._responses[ url ] = res;
	            }
	        },
	
	        /**
	         *
	         * Bind an event to a callback
	         * @memberof Router
	         * @method _bind
	         * @param {string} event what to bind on
	         * @param {function} callback fired on event
	         * @private
	         *
	         */
	        _bind: function ( event, callback ) {
	            if ( typeof callback === "function" ) {
	                if ( !this._callbacks[ event ] ) {
	                    this._callbacks[ event ] = [];
	                }
	
	                callback._jsRouterID = this.getUID();
	
	                this._callbacks[ event ].push( callback );
	            }
	        },
	
	        /**
	         *
	         * Unbind an event to a callback(s)
	         * @memberof Router
	         * @method _bind
	         * @param {string} event what to bind on
	         * @param {function} callback fired on event
	         * @private
	         *
	         */
	        _unbind: function ( event, callback ) {
	            if ( !this._callbacks[ event ] ) {
	                return this;
	            }
	
	            // Remove a single callback
	            if ( callback ) {
	                for ( var i = 0, len = this._callbacks[ event ].length; i < len; i++ ) {
	                    if ( callback._jsRouterID === this._callbacks[ event ][ i ]._jsRouterID ) {
	                        this._callbacks[ event ].splice( i, 1 );
	
	                        break;
	                    }
	                }
	
	            // Remove all callbacks for event
	            } else {
	                for ( var j = this._callbacks[ event ].length; j--; ) {
	                    this._callbacks[ event ][ j ] = null;
	                }
	
	                delete this._callbacks[ event ];
	            }
	        },
	
	        /**
	         *
	         * Fire an event to a callback
	         * @memberof Router
	         * @method _fire
	         * @param {string} event what to bind on
	         * @param {string} url fired on event
	         * @param {string} response html from responseText
	         * @param {number} status The request status
	         * @private
	         *
	         */
	        _fire: function ( event, url, response, status ) {
	            var i;
	
	            // GET events have routes and are special ;-P
	            if ( event === "get" ) {
	                for ( i = this._callbacks[ event ].length; i--; ) {
	                    var data = this._matcher.parse( url, this._callbacks[ event ][ i ]._routerRoutes );
	
	                    if ( data.matched ) {
	                        this._callbacks[ event ][ i ].call( this, {
	                            route: this._matcher._cleanRoute( url ),
	                            response: response,
	                            request: data,
	                            status: status
	                        });
	                    }
	                }
	
	            // Fires basic timing events "preget", "popget"
	            } else if ( this._callbacks[ event ] ) {
	                for ( i = this._callbacks[ event ].length; i--; ) {
	                    this._callbacks[ event ][ i ].call( this, response );
	                }
	            }
	        }
	    };
	
	
	    return Router;
	
	});

/***/ },
/* 59 */
/*!***************************************************************************************!*\
  !*** ./~/properjs-pagecontroller/~/properjs-router/~/properjs-pushstate/PushState.js ***!
  \***************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handles history pushstate/popstate with async option
	 * If history is not supported, falls back to hashbang!
	 *
	 * @PushState
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.PushState = factory();
	    }
	
	})(function () {
	
	    /**
	     *
	     * A simple pushState Class
	     * @constructor PushState
	     * @memberof! <global>
	     *
	     */
	    var PushState = function () {
	        return this.init.apply( this, arguments );
	    };
	
	    PushState.prototype = {
	        constructor: PushState,
	
	        /**
	         *
	         * Flag whether pushState is enabled
	         * @memberof PushState
	         * @member _pushable
	         * @private
	         *
	         */
	        _pushable: ("history" in window && "pushState" in window.history),
	
	        /**
	         *
	         * Fallback to hashchange if needed. Support:
	         * <ul>
	         * <li>Internet Explorer 8</li>
	         * <li>Firefox 3.6</li>
	         * <li>Chrome 5</li>
	         * <li>Safari 5</li>
	         * <li>Opera 10.6</li>
	         * </ul>
	         * @memberof PushState
	         * @member _hashable
	         * @private
	         *
	         */
	        _hashable: ("onhashchange" in window),
	
	        /**
	         *
	         * PushState init constructor method
	         * @memberof PushState
	         * @method PushState.init
	         * @param {object} options Settings for PushState
	         * <ul>
	         * <li>options.forceHash</li>
	         * </ul>
	         *
	         * @fires backstate
	         * @fires forwardstate
	         * @fires popstate
	         *
	         */
	        init: function ( options ) {
	            /**
	             *
	             * Ensure this first cache URL is clean as a whistle
	             * @memberof PushState
	             * @member _initUrl
	             * @private
	             *
	             */
	            this._initUrl = window.location.href.replace( window.location.hash, "" );
	
	            /**
	             *
	             * User options for usage
	             * @memberof PushState
	             * @member _options
	             * @private
	             *
	             */
	            this._options = (options || {});
	
	            /**
	             *
	             * Flag whether state is enabled
	             * @memberof PushState
	             * @member _enabled
	             * @private
	             *
	             */
	            this._enabled = false;
	
	            /**
	             *
	             * Flag when hash is changed by PushState
	             * This allows appropriate replication of popstate
	             * @memberof PushState
	             * @member _ishashpushed
	             * @private
	             *
	             */
	            this._ishashpushed = false;;
	
	            /**
	             *
	             * Unique ID ticker
	             * @memberof PushState
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
	
	            /**
	             *
	             * Stored state objects
	             * @memberof PushState
	             * @member _states
	             * @private
	             *
	             */
	            this._states = {};
	
	            /**
	             *
	             * Event callbacks
	             * @memberof PushState
	             * @member _callbacks
	             * @private
	             *
	             */
	            this._callbacks = {};
	
	            // Set initial state
	            this._states[ this._initUrl ] = {
	                uid: this.getUID()
	            };
	
	            // Enable popstate management
	            this._stateEnable();
	        },
	
	        /**
	         *
	         * Bind a callback to an event
	         * @memberof PushState
	         * @method on
	         * @param {string} event The event to bind to
	         * @param {function} callback The function to call
	         *
	         */
	        on: function ( event, callback ) {
	            if ( typeof callback === "function" ) {
	                if ( !this._callbacks[ event ] ) {
	                    this._callbacks[ event ] = [];
	                }
	
	                callback._pushstateID = this.getUID();
	                callback._pushstateType = event;
	
	                this._callbacks[ event ].push( callback );
	            }
	        },
	
	        /**
	         *
	         * Unbind a callback to an event
	         * @memberof PushState
	         * @method off
	         * @param {string} event The event that was bound
	         * @param {function} callback The function to remove
	         *
	         */
	        off: function ( event, callback ) {
	            if ( this._callbacks[ event ] ) {
	                for ( var i = this._callbacks[ event ].length; i--; ) {
	                    if ( this._callbacks[ event ][ i ]._pushstateID === callback._pushstateID ) {
	                        this._callbacks[ event ].splice( i, 1 );
	                        break;
	                    }
	                }
	            }
	        },
	
	        /**
	         *
	         * Push onto the History state
	         * @memberof PushState
	         * @method push
	         * @param {string} url address to push to history
	         *
	         */
	        push: function ( url ) {
	            // Dont push current URL
	            if ( url === window.location.href ) {
	                return;
	            }
	
	            this._push( url );
	
	            this._states[ url ] = {
	                uid: this.getUID()
	            };
	        },
	
	        /**
	         *
	         * Manually go back in history state
	         * @memberof PushState
	         * @method goBack
	         *
	         * @fires backstate
	         *
	         */
	        goBack: function () {
	            window.history.back();
	
	            this._fire( "backstate" );
	        },
	
	        /**
	         *
	         * Manually go forward in history state
	         * @memberof PushState
	         * @method goForward
	         *
	         * @fires forwardstate
	         *
	         */
	        goForward: function () {
	            window.history.forward();
	
	            this._fire( "forwardstate" );
	        },
	
	        /**
	         *
	         * Get a unique ID
	         * @memberof PushState
	         * @method getUID
	         * @returns number
	         *
	         */
	        getUID: function () {
	            this._uid = (this._uid + 1);
	
	            return this._uid;
	        },
	
	        /**
	         *
	         * Calls window.history.pushState
	         * @memberof PushState
	         * @method _push
	         * @param {string} url The url to push
	         * @private
	         *
	         */
	        _push: function ( url ) {
	            if ( this._pushable && !this._options.forceHash ) {
	                window.history.pushState( this._states[ url ], "", url );
	
	            } else {
	                // This replace ensures we get the following:
	                // "/":         root
	                // "/foo/bar/": uri path
	                var hashUri = url.replace( window.location.origin, "" );
	
	                // Fix for root hash uri.
	                // Ensure we dont get the following:
	                // "/foo/bar/#/foo/bar/"
	                // Rather we would get the following:
	                // "/foo/bar/#/"
	                if ( hashUri === window.location.pathname ) {
	                    hashUri = "/";
	                }
	
	                this._ishashpushed = true;
	
	                window.location.hash = hashUri;
	            }
	        },
	
	        /**
	         *
	         * Fire an events callbacks
	         * @memberof PushState
	         * @method _fire
	         * @param {string} event The event to fire
	         * @param {string} url The current url
	         * @private
	         *
	         */
	        _fire: function ( event, url ) {
	            if ( this._callbacks[ event ] ) {
	                for ( var i = this._callbacks[ event ].length; i--; ) {
	                    this._callbacks[ event ][ i ].apply( this, [].slice.call( arguments, 1 ) );
	                }
	            }
	        },
	
	        /**
	         *
	         * Bind this instances state handler
	         * @memberof PushState
	         * @method _stateEnabled
	         * @private
	         *
	         * @fires popstate
	         *
	         */
	        _stateEnable: function () {
	            if ( this._enabled ) {
	                return this;
	            }
	
	            var self = this,
	                handler = function () {
	                    var url = window.location.href,
	                        roots = ["#/", "#", ""];
	
	                    // Ensure we clean out the hash for Router
	                    // Example:
	                    // Start:  http://localhost/foo/#/bar/
	                    // Result: http://localhost/foo/bar/
	                    if ( self._options.forceHash ) {
	                        // Shave the hash from the end of the URL
	                        url = url.replace( window.location.hash, "" );
	
	                        // Shave the hash root from the end of the URL
	                        url = url.replace( window.location.pathname, "" );
	
	                        // Empty hash means we have gone back to root
	                        if ( roots.indexOf( window.location.hash ) !== -1 ) {
	                            // Append the hash root to the URL
	                            url = (url + window.location.pathname);
	
	                        } else {
	                            // Append the applied hash pathname to the URL
	                            url = (url + window.location.hash.replace( "#", "" ));
	                        }
	                    }
	
	                    self._fire( "popstate", url, self._states[ url ] );
	                };
	
	            this._enabled = true;
	
	            if ( this._pushable && !this._options.forceHash ) {
	                window.addEventListener( "popstate", function ( e ) {
	                    handler();
	
	                }, false );
	
	            } else if ( this._hashable ) {
	                // For hashstate we should apply initial hash on page load
	                this._push( this._initUrl );
	
	                window.addEventListener( "hashchange", function ( e ) {
	                    if ( !self._ishashpushed ) {
	                        handler();
	
	                    } else {
	                        self._ishashpushed = false;
	                    }
	
	                }, false );
	            }
	        }
	    };
	
	    return PushState;
	
	});

/***/ },
/* 60 */
/*!*****************************************************************************************!*\
  !*** ./~/properjs-pagecontroller/~/properjs-router/~/properjs-matchroute/MatchRoute.js ***!
  \*****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handles wildcard route matching against urls with !num and !slug condition testing
	 *
	 * @MatchRoute
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.MatchRoute = factory();
	    }
	    
	})(function () {
	
	    var paramalama = __webpack_require__( /*! paramalama */ 52 ),
	
	    /**
	     *
	     * Handles wildcard route matching against urls with !num and !slug condition testing
	     * <ul>
	     * <li>route = "/some/random/path/:myvar"</li>
	     * <li>route = "/some/random/path/:myvar!num"</li>
	     * <li>route = "/some/random/path/:myvar!slug"</li>
	     * </ul>
	     * @constructor MatchRoute
	     * @memberof! <global>
	     * @requires paramalama
	     *
	     */
	    MatchRoute = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    MatchRoute.prototype = {
	        constructor: MatchRoute,
	        
	        /**
	         *
	         * Expression match http/https
	         * @memberof MatchRoute
	         * @member _rHTTPs
	         * @private
	         *
	         */
	        _rHTTPs: /^http[s]?:\/\/.*?\//,
	        
	        /**
	         *
	         * Expression match trail slashes
	         * @memberof MatchRoute
	         * @member _rTrails
	         * @private
	         *
	         */
	        _rTrails: /^\/|\/$/g,
	        
	        /**
	         *
	         * Expression match hashbang/querystring
	         * @memberof MatchRoute
	         * @member _rHashQuery
	         * @private
	         *
	         */
	        _rHashQuery: /#.*$|\?.*$/g,
	        
	        /**
	         *
	         * Expression match wildcards
	         * @memberof MatchRoute
	         * @member _rWild
	         * @private
	         *
	         */
	        _rWild: /^:/,
	        
	        /**
	         *
	         * Expressions to match wildcards with supported conditions
	         * @memberof MatchRoute
	         * @member _wilders
	         * @private
	         *
	         */
	        _wilders: {
	            num: /^[0-9]+$/,
	            slug: /^[A-Za-z]+[A-Za-z0-9-_.]*$/
	        },
	        
	        
	        /**
	         *
	         * MatchRoute init constructor method
	         * @memberof MatchRoute
	         * @method init
	         * @param {array} routes Config routes can be passed on instantiation
	         *
	         */
	        init: function ( routes ) {
	            /**
	             *
	             * The routes config array
	             * @memberof MatchRoute
	             * @member _routes
	             * @private
	             *
	             */
	            this._routes = ( routes ) ? this._cleanRoutes( routes ) : [];
	        },
	    
	        /**
	         *
	         * Get the internal route array
	         * @memberof MatchRoute
	         * @method MatchRoute.getRoutes
	         * @returns {array}
	         *
	         */
	        getRoutes: function () {
	            return this._routes;
	        },
	        
	        /**
	         *
	         * Update routes config array
	         * @memberof MatchRoute
	         * @method config
	         * @param {array} routes to match against
	         *
	         */
	        config: function ( routes ) {
	            // Force array on routes
	            routes = ( typeof routes === "string" ) ? [ routes ] : routes;
	    
	            this._routes = this._routes.concat( this._cleanRoutes( routes ) );
	            
	            return this;
	        },
	        
	        /**
	         *
	         * Test a url against a routes config for match validation
	         * @memberof MatchRoute
	         * @method test
	         * @param {string} url to test against routes
	         * @returns True or False
	         *
	         */
	        test: function ( url ) {
	            return this.parse( url, this._routes ).matched;
	        },
	        
	        /**
	         *
	         * Match a url against a routes config for matches
	         * @memberof MatchRoute
	         * @method params
	         * @param {string} url to test against routes
	         * @returns Array of matching routes
	         *
	         */
	        params: function ( url ) {
	            return this.parse( url, this._routes ).params;
	        },
	        
	        /**
	         *
	         * Compare a url against a specific route
	         * @memberof MatchRoute
	         * @method compare
	         * @param {string} route compare route
	         * @param {string} url compare url
	         * @returns MatchRoute.parse()
	         *
	         */
	        compare: function ( route, url ) {
	            return this.parse( url, [route] );
	        },
	        
	        /**
	         *
	         * Parse a url for matches against config array
	         * @memberof MatchRoute
	         * @method parse
	         * @param {string} url to test against routes
	         * @param {array} routes The routes to test against
	         * @returns Object witch match bool and matches array
	         *
	         */
	        parse: function ( url, routes ) {
	            var segMatches,
	                isStar,
	                params,
	                match,
	                route = this._cleanRoute( url ),
	                ruris,
	                regex,
	                cond,
	                uris = route.split( "/" ),
	                uLen = uris.length,
	                iLen = routes.length,
	                ret;
	            
	            for ( var i = 0; i < iLen; i++ ) {
	                // Flag "*" route
	                isStar = (routes[ i ] === "*");
	                
	                // Start fresh each iteration
	                // Only one matched route allowed
	                ret = {
	                    matched: false,
	                    route: null,
	                    uri: [],
	                    params: {},
	                    query: paramalama( url )
	                };
	                
	                ruris = routes[ i ].split( "/" );
	                
	                // Handle route === "/"
	                if ( route === "/" && routes[ i ] === "/" ) {
	                    ret.matched = true;
	                    ret.route = routes[ i ];
	                    ret.uri = "/";
	                    
	                    break;
	                }
	                
	                // If the actual url doesn't match the route in segment length,
	                // it cannot possibly be considered for matching so just skip it
	                if ( ruris.length !== uris.length && !isStar ) {
	                    continue;
	                }
	                
	                segMatches = 0;
	                
	                for ( var j = 0; j < uLen; j++ ) {
	                    // Matched a variable uri segment
	                    if ( this._rWild.test( ruris[ j ] ) ) {
	                        // Try to split on conditions
	                        params = ruris[ j ].split( "!" );
	                        
	                        // The variable segment
	                        match = params[ 0 ];
	                        
	                        // The match condition
	                        cond = params[ 1 ];
	                        
	                        // With conditions
	                        if ( cond ) {
	                            // We support this condition
	                            if ( this._wilders[ cond ] ) {
	                                regex = this._wilders[ cond ];
	                            }
	                            
	                            // Test against the condition
	                            if ( regex && regex.test( uris[ j ] ) ) {
	                                segMatches++;
	                                
	                                // Add the match to the config data
	                                ret.params[ match.replace( this._rWild, "" ) ] = uris[ j ];
	                                ret.uri.push( uris[ j ] );
	                            }
	                        
	                        // No conditions, anything goes   
	                        } else {
	                            segMatches++;
	                            
	                            // Add the match to the config data
	                            ret.params[ match.replace( this._rWild, "" ) ] = uris[ j ];
	                            ret.uri.push( uris[ j ] );
	                        }
	                    
	                    // Defined segment always goes   
	                    } else {
	                        if ( uris[ j ] === ruris[ j ] ) {
	                            segMatches++;
	                            
	                            ret.uri.push( uris[ j ] );
	                        }
	                    }
	                }
	                
	                // Handle a uri segment match OR "*" wildcard everything
	                if ( segMatches === uris.length || isStar ) {
	                    ret.matched = true;
	                    ret.route = routes[ i ];
	                    ret.uri = ( isStar ) ? route : ret.uri.join( "/" );
	                    
	                    break;
	                }
	            }
	            
	            return ret;
	        },
	        
	        /**
	         *
	         * Clean a route string
	         * If the route === "/" then it is returned as is
	         * @memberof MatchRoute
	         * @method _cleanRoute
	         * @param {string} route the route to clean
	         * @returns cleaned route string
	         * @private
	         *
	         */
	        _cleanRoute: function ( route ) {
	            if ( route !== "/" ) {
	                route = route.replace( this._rHTTPs, "" );
	                route = route.replace( this._rTrails, "" );
	                route = route.replace( this._rHashQuery, "" );
	                route = route.replace( this._rTrails, "" );
	            }
	            
	            if ( route === "" ) {
	                route = "/";
	            }
	            
	            return route;
	        },
	        
	        /**
	         *
	         * Clean an array of route strings
	         * @memberof MatchRoute
	         * @method _cleanRoutes
	         * @param {array} routes the routes to clean
	         * @returns cleaned routes array
	         * @private
	         *
	         */
	        _cleanRoutes: function ( routes ) {
	            for ( var i = routes.length; i--; ) {
	                routes[ i ] = this._cleanRoute( routes[ i ] );
	            }
	            
	            return routes;
	        }
	    };
	    
	    
	    return MatchRoute;
	
	
	});

/***/ },
/* 61 */
/*!*************************************************!*\
  !*** ./~/properjs-matchelement/matchElement.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Use native element selector matching
	 *
	 * @matchElement
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.matchElement = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Use native element selector matching
	     * @memberof! <global>
	     * @method matchElement
	     * @param {object} el the element
	     * @param {string} selector the selector to match
	     * @returns element OR null
	     *
	     */
	    var matchElement = function ( el, selector ) {
	        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
	                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
	                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
	                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
	                                      "oMatchesSelector" : null;
	        
	        // Try testing the element agains the selector
	        if ( method && el[ method ].call( el, selector ) ) {
	            return el;
	        
	        // Keep walking up the DOM if we can
	        } else if ( el !== document.documentElement && el.parentNode ) {
	            return matchElement( el.parentNode, selector );
	        
	        // Otherwise we should not execute an event
	        } else {
	            return null;
	        }
	    };
	    
	    
	    return matchElement;
	
	});

/***/ },
/* 62 */
/*!*******************************!*\
  !*** ./js_src/about/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	//import $ from "js_libs/hobo/dist/hobo.build";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ../core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _About = __webpack_require__(/*! ./About */ 63);
	
	var _About2 = _interopRequireDefault(_About);
	
	var $_jsElement = null;
	var instance = null;
	
	/**
	 *
	 * @public
	 * @namespace about
	 * @description A nice description of what this module does...
	 *
	 */
	var about = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof about
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        core.emitter.on("app--root", function () {
	            if (instance) {
	                instance.teardown();
	            }
	        });
	
	        core.log("about initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof about
	     * @description Method informs PageController of active status.
	     * @returns {boolean}
	     *
	     */
	    isActive: function isActive() {
	        return this.getElements() > 0;
	    },
	
	    /**
	     *
	     * @public
	     * @method onload
	     * @memberof about
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        core.emitter.fire("app--offcanvas");
	
	        core.dom.html.removeClass(core.config.offcanvasClasses).addClass("is-offcanvas is-offcanvas--about");
	
	        if (!instance) {
	            var data = $_jsElement.data();
	
	            instance = new _About2["default"]($_jsElement, data);
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof about
	     * @description Method performs unloading actions for this module.
	     *
	     */
	    unload: function unload() {},
	
	    /**
	     *
	     * @public
	     * @method getElements
	     * @memberof about
	     * @description Method queries DOM for this modules node.
	     * @returns {number}
	     *
	     */
	    getElements: function getElements() {
	        $_jsElement = core.dom.page.find(".js-about");
	
	        return $_jsElement.length;
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = about;
	module.exports = exports["default"];

/***/ },
/* 63 */
/*!*******************************!*\
  !*** ./js_src/about/About.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _core = __webpack_require__(/*! ../core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var instance = null;
	
	/**
	 *
	 * @public
	 * @class About
	 * @param {Hobo} $node The element
	 * @param {object} data The datas
	 * @classdesc Handle a menu view.
	 * @memberof menus
	 *
	 */
	
	var About = (function () {
	    function About($node, data) {
	        _classCallCheck(this, About);
	
	        if (!instance) {
	            this.initialize($node, data);
	        }
	
	        return instance;
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method initialize
	     * @param {Hobo} $node The element
	     * @param {object} data The datas
	     * @memberof about.About
	     * @description Perform instance bootstrap actions.
	     *
	     */
	
	    _createClass(About, [{
	        key: "initialize",
	        value: function initialize($node, data) {
	            this.$node = $node;
	            this.data = data;
	            this.transTime = 400;
	            this.$target = core.dom.main.find(".js-main--" + this.data.target);
	            this.$anim = this.$node.find(".js-animate-in");
	            this.$images = this.$node.find(".js-lazy-image");
	
	            instance = this;
	
	            core.images.handleImages(this.$images, this.onPreload.bind(this));
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onPreload
	         * @memberof about.About
	         * @description Handle preloaded images.
	         *
	         */
	    }, {
	        key: "onPreload",
	        value: function onPreload() {
	            var _this = this;
	
	            this.$target.append(this.$node);
	
	            setTimeout(function () {
	                _this.$anim.addClass("is-active");
	            }, this.transTime);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method teardown
	         * @memberof about.About
	         * @description Undo event bindings for this instance.
	         *
	         */
	    }, {
	        key: "teardown",
	        value: function teardown() {}
	    }]);
	
	    return About;
	})();
	
	exports["default"] = About;
	module.exports = exports["default"];

/***/ },
/* 64 */
/*!*********************************!*\
  !*** ./js_src/indexes/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _core = __webpack_require__(/*! ../core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _IndexRoot = __webpack_require__(/*! ./IndexRoot */ 65);
	
	var _IndexRoot2 = _interopRequireDefault(_IndexRoot);
	
	var $_jsElement = null;
	var instance = null;
	
	/**
	 *
	 * @public
	 * @namespace indexes
	 * @description A nice description of what this module does...
	 *
	 */
	var indexes = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof indexes
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        var _this = this;
	
	        core.emitter.on("app--offcanvas", function () {
	            if (instance) {
	                instance.teardown();
	            }
	        });
	
	        core.emitter.on("app--load-root", function (root) {
	            $_jsElement = (0, _js_libsHoboDistHoboBuild2["default"])(root);
	
	            _this.onload();
	        });
	
	        core.log("indexes initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof indexes
	     * @description Method informs PageController of active status.
	     * @returns {boolean}
	     *
	     */
	    isActive: function isActive() {
	        return this.getElements() > 0;
	    },
	
	    /**
	     *
	     * @public
	     * @method onload
	     * @memberof indexes
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        if (!instance) {
	            var data = $_jsElement.data();
	
	            instance = new _IndexRoot2["default"]($_jsElement, data);
	        } else {
	            instance.cycleAnimation();
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof indexes
	     * @description Method performs unloading actions for this module.
	     *
	     */
	    unload: function unload() {},
	
	    /**
	     *
	     * @public
	     * @method getElements
	     * @memberof indexes
	     * @description Method queries DOM for this modules node.
	     * @returns {number}
	     *
	     */
	    getElements: function getElements() {
	        $_jsElement = core.dom.page.find(".js-index");
	
	        return $_jsElement.length;
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = indexes;
	module.exports = exports["default"];

/***/ },
/* 65 */
/*!*************************************!*\
  !*** ./js_src/indexes/IndexRoot.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _core = __webpack_require__(/*! ../core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _router = __webpack_require__(/*! ../router */ 56);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _projectsProject = __webpack_require__(/*! ../projects/Project */ 66);
	
	var _projectsProject2 = _interopRequireDefault(_projectsProject);
	
	var _overlay = __webpack_require__(/*! ../overlay */ 67);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var instance = null;
	
	/**
	 *
	 * @public
	 * @class IndexRoot
	 * @param {Hobo} $node The element
	 * @param {object} data The datas
	 * @classdesc Handle an index as a Singleton(ish).
	 * @memberof indexes
	 *
	 */
	
	var IndexRoot = (function () {
	    function IndexRoot($node, data) {
	        _classCallCheck(this, IndexRoot);
	
	        if (!instance || instance && instance.data.id !== data.id) {
	            this.initialize($node, data);
	        }
	
	        return instance;
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method initialize
	     * @param {Hobo} $node The element
	     * @param {object} data The datas
	     * @memberof indexes.IndexRoot
	     * @description Perform instance bootstrap actions.
	     *
	     */
	
	    _createClass(IndexRoot, [{
	        key: "initialize",
	        value: function initialize($node, data) {
	            this.$node = $node;
	            this.data = data;
	            this.$target = core.dom.main.find(".js-main--" + this.data.target);
	            this.$images = this.$node.find(".js-lazy-image");
	            this.timeoutId = null;
	            this.timeoutDelay = core.dom.overlay.elementTransitionDuration;
	
	            this.bindEvents();
	            this.loadIndex();
	
	            instance = this;
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method cycleAnimation
	         * @memberof indexes.IndexRoot
	         * @description Start the animation cycle for the listing.
	         *
	         */
	    }, {
	        key: "cycleAnimation",
	        value: function cycleAnimation() {
	            // Fresh query for js- animatable elements each time
	            this.$anims = this.$node.find(".js-animate");
	
	            // If pathname is not the `root` we shant not start raf cycle
	            if (window.location.pathname === _router2["default"].root) {
	                core.emitter.stop();
	                core.emitter.go(this.updateAnimate.bind(this));
	            } else {
	                this.updateAnimate();
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method updateAnimate
	         * @memberof indexes.IndexRoot
	         * @description Update active photos for index.
	         *
	         */
	    }, {
	        key: "updateAnimate",
	        value: function updateAnimate() {
	            var $anim = null;
	            var i = this.$anims.length;
	
	            for (i; i--;) {
	                $anim = this.$anims.eq(i);
	
	                if (core.util.isElementInViewport($anim[0])) {
	                    $anim.addClass("is-active");
	                } else {
	                    $anim.removeClass("is-active");
	                }
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method bindEvents
	         * @memberof indexes.IndexRoot
	         * @description Bind event handlers for this instance.
	         *
	         */
	    }, {
	        key: "bindEvents",
	        value: function bindEvents() {
	            core.dom.body.on("click", ".js-index-tile", this.onTileClick.bind(this));
	            core.dom.body.on("mouseenter", ".js-index-tile img", this.onMouseEnter.bind(this));
	            core.dom.body.on("mousemove", ".js-index-tile img", this.onMouseEnter.bind(this));
	            core.dom.body.on("mouseleave", ".js-index-tile img", this.onMouseLeave.bind(this));
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method loadIndex
	         * @memberof indexes.IndexRoot
	         * @description Handle loading process for this instance.
	         *
	         */
	    }, {
	        key: "loadIndex",
	        value: function loadIndex() {
	            var _this = this;
	
	            // Node must be in DOM for image size to work
	            this.$target.append(this.$node);
	
	            core.images.handleImages(this.$images, function () {
	                _this.cycleAnimation();
	            });
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onTileClick
	         * @param {object} e The Event object
	         * @memberof indexes.IndexRoot
	         * @description Handle project grid tile clicks - loads a new Project.
	         *
	         */
	    }, {
	        key: "onTileClick",
	        value: function onTileClick(e) {
	            e.preventDefault();
	
	            var $tile = (0, _js_libsHoboDistHoboBuild2["default"])(e.target).closest(".js-index-tile");
	
	            _overlay2["default"].setTitle($tile.data("title"));
	
	            _overlay2["default"].open();
	
	            _projectsProject2["default"].open();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onMouseEnter
	         * @param {object} e The Event object
	         * @memberof indexes.IndexRoot
	         * @description Handle showing title on mouse enter grid tile.
	         *
	         */
	    }, {
	        key: "onMouseEnter",
	        value: function onMouseEnter(e) {
	            try {
	                clearTimeout(this.timeoutId);
	            } catch (error) {
	                core.log("warn", error);
	            }
	
	            if (_projectsProject2["default"].isActive()) {
	                return;
	            }
	
	            var $tile = (0, _js_libsHoboDistHoboBuild2["default"])(e.target).closest(".js-index-tile");
	
	            _overlay2["default"].setTitle($tile.data("title"));
	
	            _overlay2["default"].open();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onMouseLeave
	         * @memberof indexes.IndexRoot
	         * @description Handle removing title on mouse leave grid tile.
	         *
	         */
	    }, {
	        key: "onMouseLeave",
	        value: function onMouseLeave() {
	            if (_projectsProject2["default"].isActive()) {
	                return;
	            }
	
	            this.timeoutId = setTimeout(function () {
	                if (!_projectsProject2["default"].isActive()) {
	                    _overlay2["default"].close();
	                }
	            }, this.timeoutDelay);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method teardown
	         * @memberof indexes.IndexRoot
	         * @description Undo event bindings for this instance.
	         *
	         */
	    }, {
	        key: "teardown",
	        value: function teardown() {
	            core.emitter.stop();
	        }
	    }]);
	
	    return IndexRoot;
	})();
	
	exports["default"] = IndexRoot;
	module.exports = exports["default"];

/***/ },
/* 66 */
/*!************************************!*\
  !*** ./js_src/projects/Project.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _core = __webpack_require__(/*! ../core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _overlay = __webpack_require__(/*! ../overlay */ 67);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _Menu = __webpack_require__(/*! ../Menu */ 68);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var isActive = false;
	
	/**
	 *
	 * @public
	 * @class Project
	 * @param {Hobo} $node The element
	 * @param {object} data The datas
	 * @classdesc Handle an index.
	 * @memberof projects
	 *
	 */
	
	var Project = (function () {
	    function Project($node, $info, data) {
	        _classCallCheck(this, Project);
	
	        isActive = true;
	
	        this.$node = $node;
	        this.$infoScreen = $info;
	        this.$infoButton = core.dom.header.find(".js-project-info");
	        this.menu = new _Menu2["default"](this.$infoScreen);
	        this.data = data;
	        this.$plates = this.$node.find(".js-project-plate");
	        this.$images = this.$node.find(".js-lazy-image");
	        this.isEnded = false;
	
	        this.bindEvents();
	        this.loadProject();
	    }
	
	    /**
	     *
	     * @public
	     * @static
	     * @method isActive
	     * @memberof projects.Project
	     * @description Test if a project is active.
	     * @returns {boolean}
	     *
	     */
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method bindEvents
	     * @memberof projects.Project
	     * @description Bind event handlers for open Project.
	     *
	     */
	
	    _createClass(Project, [{
	        key: "bindEvents",
	        value: function bindEvents() {
	            this._onClickInfo = this.onClickInfo.bind(this);
	
	            this.$infoScreen.on("click", this._onClickInfo);
	            this.$infoButton.on("click", this._onClickInfo);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method loadProject
	         * @memberof projects.Project
	         * @description Load images with {@link ImageController}.
	         *
	         */
	    }, {
	        key: "loadProject",
	        value: function loadProject() {
	            // Node must be in DOM for image size to work
	            core.dom.project.elementPane.append(this.$node);
	
	            core.images.handleImages(this.$images, this.onPreload.bind(this));
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onClickInfo
	         * @memberof projects.Project
	         * @description Handle Info text/overlay interaction.
	         *
	         */
	    }, {
	        key: "onClickInfo",
	        value: function onClickInfo() {
	            if (core.env.isConfig() && this.menu.isActive()) {
	                return;
	            }
	
	            console.log(this.menu.isActive());
	
	            if (this.menu.isActive()) {
	                this.menu.close();
	            } else {
	                this.menu.open();
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onPreload
	         * @memberof projects.Project
	         * @description Handle loaded project images.
	         *
	         */
	    }, {
	        key: "onPreload",
	        value: function onPreload() {
	            _overlay2["default"].close();
	
	            this.cycleAnimation();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method cycleAnimation
	         * @memberof projects.Project
	         * @description Run raf cycle to handle animations.
	         *
	         */
	    }, {
	        key: "cycleAnimation",
	        value: function cycleAnimation() {
	            this.onUpdateEmitter();
	
	            core.emitter.stop();
	            core.emitter.go(this.onUpdateEmitter.bind(this));
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method updatePlates
	         * @memberof projects.Project
	         * @description Update active plates for the project.
	         *
	         */
	    }, {
	        key: "updatePlates",
	        value: function updatePlates() {
	            var $plate = null;
	            var i = this.$plates.length;
	
	            for (i; i--;) {
	                $plate = this.$plates.eq(i);
	
	                if (core.util.isElementInViewport($plate[0])) {
	                    $plate.addClass("is-active");
	                } else {
	                    $plate.removeClass("is-active");
	                }
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method updatePosition
	         * @memberof projects.Project
	         * @description Determine when to teardown a project.
	         *
	         */
	    }, {
	        key: "updatePosition",
	        value: function updatePosition() {
	            var nodeRect = this.$node[0].getBoundingClientRect();
	            var $imageloaded = this.$images.filter(".-is-lazy-handled");
	
	            if ($imageloaded.length !== this.$images.length) {
	                return;
	            }
	
	            if (Math.floor(nodeRect.bottom) <= 0 && !this.isEnded) {
	                this.isEnded = true;
	
	                core.dom.project.element.addClass("is-inactive");
	
	                setTimeout(function () {
	                    core.emitter.fire("app--project-ended");
	                }, core.dom.project.elementTransitionDuration);
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onUpdateEmitter
	         * @memberof projects.Project
	         * @description Handle the raf cycle.
	         *
	         */
	    }, {
	        key: "onUpdateEmitter",
	        value: function onUpdateEmitter() {
	            this.updatePlates();
	            this.updatePosition();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method teardown
	         * @memberof projects.Project
	         * @description Undo event bindings for this instance.
	         *
	         */
	    }, {
	        key: "teardown",
	        value: function teardown() {
	            if (this._onClickInfo) {
	                this.$infoScreen.on("click", this._onClickInfo);
	                this.$infoButton.on("click", this._onClickInfo);
	            }
	
	            Project.close();
	        }
	    }]);
	
	    return Project;
	})();
	
	Project.isActive = function () {
	    return isActive;
	};
	
	/**
	 *
	 * @public
	 * @static
	 * @method open
	 * @memberof projects.Project
	 * @description Open the project view element.
	 *
	 */
	Project.open = function () {
	    isActive = true;
	
	    core.dom.html.addClass("is-offcanvas is-offcanvas--project");
	    core.dom.body.append(core.dom.project.element);
	
	    setTimeout(function () {
	        return core.dom.project.element.addClass("is-active");
	    }, 10);
	};
	
	/**
	 *
	 * @public
	 * @static
	 * @method close
	 * @memberof projects.Project
	 * @description Close the project view element.
	 *
	 */
	Project.close = function () {
	    isActive = false;
	
	    core.emitter.stop();
	
	    core.dom.project.element.removeClass("is-active is-inactive");
	
	    setTimeout(function () {
	        core.dom.html.removeClass(core.config.offcanvasClasses);
	        core.dom.project.element.detach();
	        core.dom.project.elementPane[0].innerHTML = "";
	    }, core.dom.project.elementTransitionDuration);
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = Project;
	module.exports = exports["default"];

/***/ },
/* 67 */
/*!***************************!*\
  !*** ./js_src/overlay.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ./core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _isActive = false;
	var transTime = core.util.getTransitionDuration(core.dom.overlay.element[0]);
	
	/**
	 *
	 * @public
	 * @module overlay
	 * @description Performs the branded load-in screen sequence.
	 *
	 */
	var overlay = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof overlay
	     * @description Initialize the overlay element.
	     *
	     */
	    init: function init() {
	        if (core.dom.overlay.element.is(".is-active")) {
	            _isActive = true;
	        } else {
	            core.dom.overlay.element.detach();
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method open
	     * @memberof overlay
	     * @description Open the overlay.
	     * @returns {@this}
	     *
	     */
	    open: function open() {
	        if (_isActive) {
	            return this;
	        }
	
	        _isActive = true;
	
	        core.dom.html.addClass("is-overlay-active");
	        core.dom.body.append(core.dom.overlay.element);
	
	        setTimeout(function () {
	            return core.dom.overlay.element.addClass("is-active");
	        }, 10);
	    },
	
	    /**
	     *
	     * @public
	     * @method close
	     * @memberof overlay
	     * @description Close the overlay.
	     * @returns {@this}
	     *
	     */
	    close: function close() {
	        var _this = this;
	
	        if (!_isActive) {
	            return this;
	        }
	
	        core.dom.overlay.element.removeClass("is-active");
	
	        setTimeout(function () {
	            _isActive = false;
	
	            core.dom.html.removeClass("is-overlay-active");
	            core.dom.overlay.element.detach().removeClass("is-intro");
	
	            _this.empty();
	        }, transTime);
	    },
	
	    /**
	     *
	     * @public
	     * @method empty
	     * @memberof overlay
	     * @description Empty the overlay.
	     *
	     */
	    empty: function empty() {
	        core.dom.overlay.elementTitle[0].innerHTML = "";
	    },
	
	    /**
	     *
	     * @public
	     * @method setTitle
	     * @param {string} text The text/html to set.
	     * @memberof overlay
	     * @description Add text to the overlay.
	     *
	     */
	    setTitle: function setTitle(text) {
	        core.dom.overlay.elementTitle[0].innerHTML = text;
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof overlay
	     * @description Is the overlay open?.
	     * @returns {boolean}
	     *
	     */
	    isActive: function isActive() {
	        return _isActive;
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = overlay;
	module.exports = exports["default"];

/***/ },
/* 68 */
/*!************************!*\
  !*** ./js_src/Menu.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _core = __webpack_require__(/*! ./core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	/**
	 *
	 * @public
	 * @class Menu
	 * @classdesc Handle normalized open/close for overlay menus.
	 * @param {Hobo} $node The menu element
	 *
	 */
	
	var Menu = (function () {
	    function Menu($node) {
	        _classCallCheck(this, Menu);
	
	        this.$node = $node;
	        this.tDuration = core.util.getTransitionDuration(this.$node[0]);
	        this.isOpen = false;
	        this.scrollPos = core.scroller.getScrollY();
	
	        this.$node.detach();
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method open
	     * @memberof menus.Menu
	     * @description Open the menu.
	     *
	     */
	
	    _createClass(Menu, [{
	        key: "open",
	        value: function open() {
	            var _this = this;
	
	            this.isOpen = true;
	
	            core.dom.html.addClass("is-menu-open");
	            core.dom.body.append(this.$node);
	
	            // Handle scroll suppression
	
	            // 0.2 => Get the current scroll position
	            this.scrollPos = core.scroller.getScrollY();
	
	            // 0.3 => Suppress the scrolls emitter
	            core.scrolls.suppress(true);
	
	            // 0.4 => Broadcast the open menu
	            core.emitter.fire("app--menu-opened");
	
	            setTimeout(function () {
	                return _this.$node.addClass("is-active");
	            }, 0);
	            setTimeout(function () {
	                _this.$node.addClass("is-active-events");
	                core.dom.html.addClass("is-clipped");
	                core.dom.body.addClass("is-clipped");
	            }, this.tDuration * 2);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method close
	         * @memberof menus.Menu
	         * @description Close the menu.
	         *
	         */
	    }, {
	        key: "close",
	        value: function close() {
	            var _this2 = this;
	
	            this.$node.removeClass("is-active is-active-events");
	            core.dom.html.removeClass("is-clipped");
	            core.dom.body.removeClass("is-clipped");
	
	            // Handle scroll suppression
	
	            // 0.1 => Reset the document scroll position
	            core.dom.body[0].scrollTop = this.scrollPos;
	
	            // 0.2 => Un-suppress the scrolls emitter
	            core.scrolls.suppress(false);
	
	            // 0.3 => Broadcast the closed menu
	            core.emitter.fire("app--menu-closed");
	
	            setTimeout(function () {
	                _this2.isOpen = false;
	                core.dom.html.removeClass("is-menu-open");
	                _this2.$node.detach();
	            }, this.tDuration * 2);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method toggle
	         * @memberof menus.Menu
	         * @description Open or Close the menu.
	         *
	         */
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            if (this.isOpen) {
	                this.close();
	            } else {
	                this.open();
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method isActive
	         * @memberof menus.Menu
	         * @description Check the state of the menu.
	         * @returns {boolean}
	         *
	         */
	    }, {
	        key: "isActive",
	        value: function isActive() {
	            return this.isOpen;
	        }
	    }]);
	
	    return Menu;
	})();
	
	exports["default"] = Menu;
	module.exports = exports["default"];

/***/ },
/* 69 */
/*!***********************************!*\
  !*** ./js_src/indexes/listing.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ../core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _IndexFull = __webpack_require__(/*! ./IndexFull */ 70);
	
	var _IndexFull2 = _interopRequireDefault(_IndexFull);
	
	var $_jsElement = null;
	var instance = null;
	
	/**
	 *
	 * @public
	 * @namespace listing
	 * @description A nice description of what this module does...
	 *
	 */
	var listing = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof listing
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        core.emitter.on("app--root", function () {
	            if (instance) {
	                instance.teardown();
	            }
	        });
	
	        core.log("listing initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof listing
	     * @description Method informs PageController of active status.
	     * @returns {boolean}
	     *
	     */
	    isActive: function isActive() {
	        return this.getElements() > 0;
	    },
	
	    /**
	     *
	     * @public
	     * @method onload
	     * @memberof listing
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        core.emitter.fire("app--offcanvas");
	
	        core.dom.html.removeClass(core.config.offcanvasClasses).addClass("is-offcanvas is-offcanvas--index");
	
	        if (!instance) {
	            var data = $_jsElement.data();
	
	            instance = new _IndexFull2["default"]($_jsElement, data);
	        } else {
	            instance.cycleAnimation();
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof listing
	     * @description Method performs unloading actions for this module.
	     *
	     */
	    unload: function unload() {},
	
	    /**
	     *
	     * @public
	     * @method getElements
	     * @memberof listing
	     * @description Method queries DOM for this modules node.
	     * @returns {number}
	     *
	     */
	    getElements: function getElements() {
	        $_jsElement = core.dom.page.find(".js-listing");
	
	        return $_jsElement.length;
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = listing;
	module.exports = exports["default"];

/***/ },
/* 70 */
/*!*************************************!*\
  !*** ./js_src/indexes/IndexFull.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _core = __webpack_require__(/*! ../core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _router = __webpack_require__(/*! ../router */ 56);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _gallery = __webpack_require__(/*! ../gallery */ 71);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _overlay = __webpack_require__(/*! ../overlay */ 67);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _properjsTemplate = __webpack_require__(/*! properjs-template */ 72);
	
	var _properjsTemplate2 = _interopRequireDefault(_properjsTemplate);
	
	var instance = null;
	var _gridTitleTpl = "<div class=\"listing__title js-listing-title\" data-title=\"{title}\"><h3 class=\"listing__title__text h3\">{text}</h3></div>";
	var _gridWrapTpl = "<div class=\"listing__grid js-listing-project grid grid--index\"></div>";
	var _gridItemTpl = "\n<div class=\"listing__tile grid__item__small js-listing-tile\">\n    <div class=\"grid__photo grid__photo--small animate animate--fade js-animate\">\n        <figure class=\"figure\">\n            <img class=\"figure__image image js-lazy-image\" data-img-src=\"{assetUrl}\" data-variants=\"{systemDataVariants}\" data-original-size=\"{originalSize}\" />\n        </figure>\n    </div>\n</div>\n";
	
	/**
	 *
	 * @public
	 * @class IndexFull
	 * @param {Hobo} $node The element
	 * @param {object} data The datas
	 * @classdesc Handle an index as a Singleton(ish).
	 * @memberof indexes
	 *
	 */
	
	var IndexFull = (function () {
	    function IndexFull($node, data) {
	        _classCallCheck(this, IndexFull);
	
	        if (!instance) {
	            this.initialize($node, data);
	        }
	
	        return instance;
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method initialize
	     * @param {Hobo} $node The element
	     * @param {object} data The datas
	     * @memberof indexes.IndexFull
	     * @description Perform instance bootstrap actions.
	     *
	     */
	
	    _createClass(IndexFull, [{
	        key: "initialize",
	        value: function initialize($node, data) {
	            this.data = data;
	            this.$node = $node;
	            this.$tile = null;
	            this.$image = null;
	            this.$target = core.dom.main.find(".js-main--" + this.data.target);
	            this.$anims = null;
	
	            this.bindEvents();
	            this.loadIndex();
	
	            instance = this;
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method cycleAnimation
	         * @memberof indexes.IndexFull
	         * @description Start the animation cycle for the listing.
	         *
	         */
	    }, {
	        key: "cycleAnimation",
	        value: function cycleAnimation() {
	            // Fresh query for js- animatable elements each time
	            this.$anims = this.$node.find(".js-animate");
	
	            core.emitter.stop();
	            core.emitter.go(this.updateAnimate.bind(this));
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method updateAnimate
	         * @memberof indexes.IndexFull
	         * @description Update active photos for index.
	         *
	         */
	    }, {
	        key: "updateAnimate",
	        value: function updateAnimate() {
	            var $anim = null;
	            var i = this.$anims.length;
	
	            for (i; i--;) {
	                $anim = this.$anims.eq(i);
	
	                if (core.util.isElementInViewport($anim[0])) {
	                    $anim.addClass("is-active");
	                } else {
	                    $anim.removeClass("is-active");
	                }
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method bindEvents
	         * @memberof indexes.IndexFull
	         * @description Bind instance events.
	         *
	         */
	    }, {
	        key: "bindEvents",
	        value: function bindEvents() {
	            var _this = this;
	
	            this.$node.on("click", ".js-listing-tile", function (e) {
	                var i = e.path.length;
	
	                for (i; i--;) {
	                    if (e.path[i].className && e.path[i].className.indexOf("js-listing-tile") !== -1) {
	                        _this.bindGallery((0, _js_libsHoboDistHoboBuild2["default"])(e.path[i]));
	                        break;
	                    }
	                }
	            });
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method bindGallery
	         * @param {Hobo} $elem The tile image that was clicked
	         * @memberof indexes.IndexFull
	         * @description Bind active gallery view.
	         *
	         */
	    }, {
	        key: "bindGallery",
	        value: function bindGallery($elem) {
	            this.$tile = $elem;
	            this.$image = this.$tile.find(core.config.lazyImageSelector);
	
	            this._onKeyDown = this.onKeyDown.bind(this);
	            this._onGalleryImage = this.onGalleryImage.bind(this);
	            this._onGalleryBack = this.onGalleryBack.bind(this);
	
	            _gallery2["default"].setImage(this.$image);
	
	            core.emitter.on("app--gallery-image", this._onGalleryImage);
	            core.emitter.on("app--gallery-background", this._onGalleryBack);
	
	            core.dom.doc.on("keydown", this._onKeyDown);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method unbindGallery
	         * @memberof indexes.IndexFull
	         * @description Un-bind active gallery view.
	         *
	         */
	    }, {
	        key: "unbindGallery",
	        value: function unbindGallery() {
	            this.$tile = null;
	            this.$image = null;
	
	            _overlay2["default"].close();
	            _gallery2["default"].close();
	
	            core.dom.doc.off("keydown", this._onKeyDown);
	            core.emitter.off("app--gallery-image", this._onGalleryImage);
	            core.emitter.off("app--gallery-background", this._onGalleryBack);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method nextProject
	         * @param {Hobo} $project The project grid
	         * @param {Hobo} $tile The tile image to load in gallery
	         * @memberof indexes.IndexFull
	         * @description Transition to a tile in a new project scope.
	         *
	         */
	    }, {
	        key: "nextProject",
	        value: function nextProject($project, $tile) {
	            if ($project.length) {
	                // Tile?
	                this.$tile = $tile;
	
	                // Image?
	                this.$image = this.$tile.find(core.config.lazyImageSelector);
	
	                _gallery2["default"].setImage(this.$image);
	
	                _overlay2["default"].close();
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method nextTitle
	         * @param {Hobo} $title The title element
	         * @param {string} text The optional text for the title to display
	         * @memberof indexes.IndexFull
	         * @description Transition to the title of the next project.
	         *
	         */
	    }, {
	        key: "nextTitle",
	        value: function nextTitle($title, text) {
	            _gallery2["default"].empty();
	
	            if ($title.length) {
	                _overlay2["default"].setTitle(text || $title.data("title"));
	
	                _overlay2["default"].open();
	
	                core.dom.gallery.element.addClass("is-title");
	
	                this.$tile = $title;
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method nextTile
	         * @param {Hobo} $tile The tile element
	         * @memberof indexes.IndexFull
	         * @description Transition to the next tile in a project.
	         *
	         */
	    }, {
	        key: "nextTile",
	        value: function nextTile($tile) {
	            // Tile?
	            this.$tile = $tile;
	
	            // Image?
	            this.$image = this.$tile.find(core.config.lazyImageSelector);
	
	            _gallery2["default"].setImage(this.$image);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method loadIndex
	         * @memberof indexes.IndexFull
	         * @description Load the full Index JSON to build the UI.
	         *
	         */
	    }, {
	        key: "loadIndex",
	        value: function loadIndex() {
	            _router2["default"].loadFullIndex(this.onLoadFullIndex.bind(this));
	        }
	
	        /**
	         *
	         * @public
	         * @method onLoadFullIndex
	         * @param {object} json The collection json
	         * @memberof indexes.IndexFull
	         * @description Receive full collections data for an index.
	         *
	         */
	    }, {
	        key: "onLoadFullIndex",
	        value: function onLoadFullIndex(json) {
	            var _this2 = this;
	
	            json.collection.collections.forEach(function (collection) {
	                var $title = (0, _js_libsHoboDistHoboBuild2["default"])((0, _properjsTemplate2["default"])(_gridTitleTpl.replace(/\n/g, ""), { text: collection.title, title: collection.description || collection.title }));
	                var $grid = (0, _js_libsHoboDistHoboBuild2["default"])(_gridWrapTpl.replace(/\n/g, ""));
	
	                collection.items.forEach(function (item) {
	                    $grid.append((0, _properjsTemplate2["default"])(_gridItemTpl.replace(/\n/g, ""), item));
	
	                    if (item.customContent && item.customContent.diptychImage && item.customContent.diptychImage.systemDataVariants) {
	                        $grid.append((0, _properjsTemplate2["default"])(_gridItemTpl.replace(/\n/g, ""), item.customContent.diptychImage));
	                    }
	                });
	
	                _this2.$node.append($title);
	                _this2.$node.append($grid);
	            });
	
	            // Node must be in DOM for image size to work
	            this.$target.append(this.$node);
	
	            core.images.handleImages(this.$node.find(".js-lazy-image"), function () {
	                _this2.cycleAnimation();
	            });
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onGalleryImage
	         * @param {string} direction The direction to move
	         * @memberof indexes.IndexFull
	         * @description Trigger gallery arrow key right.
	         *
	         */
	    }, {
	        key: "onGalleryImage",
	        value: function onGalleryImage(direction) {
	            if (direction === "left") {
	                this.onKeyDown({
	                    keyCode: 37
	                });
	            } else {
	                this.onKeyDown({
	                    keyCode: 39
	                });
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onGalleryBack
	         * @memberof indexes.IndexFull
	         * @description Trigger gallery unbinding.
	         *
	         */
	    }, {
	        key: "onGalleryBack",
	        value: function onGalleryBack() {
	            _gallery2["default"].empty();
	
	            this.unbindGallery();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method onKeyDown
	         * @param {object} e The Event object
	         * @memberof indexes.IndexFull
	         * @description Handle key events when gallery is open.
	         * @returns {boolean}
	         *
	         */
	    }, {
	        key: "onKeyDown",
	        value: function onKeyDown(e) {
	            var text = null;
	            var $title = null;
	            var $parent = null;
	            var $project = null;
	            var $next = this.$tile.next();
	            var $prev = this.$tile.prev();
	
	            // Escape key
	            if (e.keyCode === 27) {
	                this.unbindGallery();
	                return false;
	            }
	
	            // Currently on a Title screen
	            // Title screen is using overlay module
	            if (this.$tile.is(".js-listing-title")) {
	                // Arrow right
	                if (e.keyCode === 39) {
	                    $project = this.$tile.next();
	
	                    this.nextProject($project, $project.find(".js-listing-tile").first());
	
	                    // Arrow left
	                } else if (e.keyCode === 37) {
	                        $project = this.$tile.prev();
	
	                        this.nextProject($project, $project.find(".js-listing-tile").last());
	                    }
	
	                core.dom.gallery.element.removeClass("is-title");
	
	                // Arrow right, has next tile
	            } else if (e.keyCode === 39 && $next.length) {
	                    this.nextTile($next);
	
	                    // Arrow right, has no next tile
	                } else if (e.keyCode === 39 && !$next.length) {
	                        this.nextTitle(this.$tile.parent().next());
	
	                        // Arrow left, has prev tile
	                    } else if (e.keyCode === 37 && $prev.length) {
	                            this.nextTile($prev);
	
	                            // Arrow left, has not prev tile
	                        } else if (e.keyCode === 37 && !$prev.length) {
	                                text = null;
	                                $parent = this.$tile.parent();
	                                $title = $parent.prev().prev().prev();
	
	                                // Previous project has a title
	                                if ($title.length) {
	                                    text = $title.data("title");
	                                }
	
	                                $title = $parent.prev();
	
	                                this.nextTitle($title, text);
	                            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method teardown
	         * @memberof indexes.IndexFull
	         * @description Undo event bindings for this instance.
	         *
	         */
	    }, {
	        key: "teardown",
	        value: function teardown() {
	            core.emitter.stop();
	        }
	    }]);
	
	    return IndexFull;
	})();
	
	exports["default"] = IndexFull;
	module.exports = exports["default"];

/***/ },
/* 71 */
/*!***************************!*\
  !*** ./js_src/gallery.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 1);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _core = __webpack_require__(/*! ./core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _Menu = __webpack_require__(/*! ./Menu */ 68);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _properjsDebounce = __webpack_require__(/*! properjs-debounce */ 47);
	
	var _properjsDebounce2 = _interopRequireDefault(_properjsDebounce);
	
	var _overlay = __webpack_require__(/*! ./overlay */ 67);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	/**
	 *
	 * @public
	 * @module gallery
	 * @description Handles single view images.
	 *
	 */
	var gallery = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof gallery
	     * @description Initialize the gallery element.
	     *
	     */
	    init: function init() {
	        this.menu = new _Menu2["default"](core.dom.gallery.element);
	        this.klasa = "gallery__image figure__image image";
	        this.$image = (0, _js_libsHoboDistHoboBuild2["default"])(new Image());
	        this.$image[0].className = this.klasa;
	
	        core.dom.gallery.elementNode.append(this.$image);
	
	        core.dom.gallery.element.on("click", (0, _properjsDebounce2["default"])(this.onClick.bind(this), 200, true));
	    },
	
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof onClick
	     * @param {object} e The Event object
	     * @description Handle gallery click event.
	     *
	     */
	    onClick: function onClick(e) {
	        if (e.target === core.dom.gallery.elementNode[0] || _overlay2["default"].isActive()) {
	            this.handleClick(e);
	        } else {
	            core.emitter.fire("app--gallery-background");
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof handleClick
	     * @param {object} e The Event object
	     * @description Handle gallery click, move forward/backward.
	     *
	     */
	    handleClick: function handleClick(e) {
	        var rect = this.$image[0].getBoundingClientRect();
	        var direction = null;
	
	        if (e.clientX <= rect.width / 2 + rect.left && !_overlay2["default"].isActive()) {
	            direction = "left";
	        } else {
	            direction = "right";
	        }
	
	        core.emitter.fire("app--gallery-image", direction);
	    },
	
	    /**
	     *
	     * @public
	     * @method open
	     * @memberof gallery
	     * @description Open the gallery.
	     *
	     */
	    open: function open() {
	        if (!this.menu.isActive()) {
	            this.menu.open();
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method close
	     * @memberof gallery
	     * @description Close the gallery.
	     *
	     */
	    close: function close() {
	        if (this.menu.isActive()) {
	            this.menu.close();
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method empty
	     * @memberof gallery
	     * @description Empty the gallery.
	     *
	     */
	    empty: function empty() {
	        this.$image[0].src = "";
	    },
	
	    /**
	     *
	     * @public
	     * @method setImage
	     * @param {Hobo} $image The image to create a full view of.
	     * @memberof gallery
	     * @description Apply an image to the gallery view.
	     *
	     */
	    setImage: function setImage($image) {
	        var data = $image.data();
	
	        this.open();
	        this.$image.removeAttr(core.config.imageLoaderAttr).attr({
	            "data-img-src": data.imgSrc,
	            "data-variants": data.variants,
	            "data-original-size": data.originalSize
	        });
	
	        core.util.loadImages(this.$image, core.util.noop, true, window.innerWidth);
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = gallery;
	module.exports = exports["default"];

/***/ },
/* 72 */
/*!*****************************************!*\
  !*** ./~/properjs-template/template.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * As bare bones a template render as it comes
	 * @method template
	 * @param {string} html HTML to render from
	 * @param {object} data Data to render with
	 * @returns {string}
	 * @memberof! <global>
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.template = factory();
	    }
	    
	})(function () {
	
	    var template = function ( html, data ) {
	        // Allow varying bracket styles, {{foo}} or {foo}
	        return html.replace( /\{{1,2}([^{}]*)\}{1,2}/g, function ( a, b ) {
	            // Replace spaces, allowing { foo } style
	            var r = data[ b.replace( /\s/g, "" ) ];
	    
	            // Allow string or numeral replacement
	            // This would be interesting also, return ("" + r);
	            // That would give you [Object object] for values that are iterable
	            return ( typeof r === "string" || typeof r === "number" ) ? r : a;
	        });
	    };
	
	    return template;
	
	});

/***/ },
/* 73 */
/*!**********************************!*\
  !*** ./js_src/projects/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ../core */ 30);
	
	var core = _interopRequireWildcard(_core);
	
	var _Project = __webpack_require__(/*! ./Project */ 66);
	
	var _Project2 = _interopRequireDefault(_Project);
	
	var $_jsInfo = null;
	var $_jsElement = null;
	var instance = null;
	
	/**
	 *
	 * @public
	 * @namespace projects
	 * @description A nice description of what this module does...
	 *
	 */
	var projects = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof projects
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        if (!core.dom.project.element.is(".is-active")) {
	            core.dom.project.element.detach();
	        }
	
	        core.log("projects initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof projects
	     * @description Method informs PageController of active status.
	     * @returns {boolean}
	     *
	     */
	    isActive: function isActive() {
	        return this.getElements() > 0;
	    },
	
	    /**
	     *
	     * @public
	     * @method onload
	     * @memberof projects
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        var data = $_jsElement.data();
	
	        instance = new _Project2["default"]($_jsElement, $_jsInfo, data);
	
	        core.emitter.on("app--root", killProject);
	        core.emitter.on("app--project-ended", killProject);
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof projects
	     * @description Method performs unloading actions for this module.
	     *
	     */
	    unload: function unload() {
	        this.teardown();
	    },
	
	    /**
	     *
	     * @public
	     * @method teardown
	     * @memberof projects
	     * @description Method performs cleanup after this module. Remmoves events, null vars etc...
	     *
	     */
	    teardown: function teardown() {
	        $_jsInfo = null;
	        $_jsElement = null;
	
	        if (instance) {
	            instance.teardown();
	            instance = null;
	        }
	
	        core.emitter.off("app--root", killProject);
	        core.emitter.off("app--project-ended", killProject);
	    },
	
	    /**
	     *
	     * @public
	     * @method getElements
	     * @memberof projects
	     * @description Method queries DOM for this modules node.
	     * @returns {number}
	     *
	     */
	    getElements: function getElements() {
	        $_jsInfo = core.dom.page.find(".js-info");
	        $_jsElement = core.dom.page.find(".js-project");
	
	        return $_jsElement.length;
	    }
	};
	
	/**
	 *
	 * @private
	 * @method killProject
	 * @memberof projects
	 * @description Destroy a project instance.
	 *
	 */
	var killProject = function killProject() {
	    if (instance) {
	        instance.teardown();
	        instance = null;
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = projects;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
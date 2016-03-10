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
  !*** ./js_src/App.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _js_libsJqueryDistJquery = __webpack_require__(/*! js_libs/jquery/dist/jquery */ 1);
	
	var _js_libsJqueryDistJquery2 = _interopRequireDefault(_js_libsJqueryDistJquery);
	
	var _core = __webpack_require__(/*! ./core */ 4);
	
	var core = _interopRequireWildcard(_core);
	
	var _router = __webpack_require__(/*! ./router */ 28);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _overlay = __webpack_require__(/*! ./overlay */ 35);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _Project = __webpack_require__(/*! ./Project */ 36);
	
	var _Project2 = _interopRequireDefault(_Project);
	
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
	
	        this.navData = core.dom.nav.data();
	        this.pageData = core.dom.page.data();
	        this.appEntry = null;
	        this.project = null;
	        this.timeoutId = null;
	        this.timeoutDelay = core.util.getTransitionDuration(core.dom.overlay.element[0]);
	        this.core = core;
	        this.router = _router2["default"];
	        this.overlay = _overlay2["default"];
	        this.analytics = new core.Analytics();
	
	        this.bindEvents();
	        this.initModules();
	        this.initAppEntry();
	
	        core.log("App", this);
	    }
	
	    /******************************************************************************
	     * Bootstrap
	    *******************************************************************************/
	
	    _createClass(App, [{
	        key: "destroy",
	        value: function destroy() {
	            this.core.dom.body.off("click", this._onTileClick);
	            this.core.dom.page.off("mouseenter", this._onMouseEnter);
	            this.core.dom.page.off("mouseleave", this._onMouseLeave);
	        }
	    }, {
	        key: "initAppEntry",
	        value: function initAppEntry() {
	            var _this = this;
	
	            // Index > Collection
	            if (this.pageData.appEntryType !== this.core.config.rootEntryType) {
	                this.project = new _Project2["default"](this, {
	                    url: window.location.pathname,
	                    onLoad: false
	                });
	
	                // Need to find the root index for app-entry point
	                this.navData.appTree.forEach(function (indexItem) {
	                    if (indexItem.items) {
	                        indexItem.items.forEach(function (collectionItem) {
	                            if (collectionItem.collection.fullUrl === _this.pageData.appEntry) {
	                                _this.appEntry = indexItem.collection.fullUrl;
	                            }
	                        });
	                    }
	                });
	
	                // Index
	            } else {
	                    this.appEntry = this.pageData.appEntry;
	
	                    this.core.dom.project.element.detach();
	                }
	
	            // Logo
	            this.core.dom.logo[0].href = this.appEntry;
	        }
	    }, {
	        key: "initModules",
	        value: function initModules() {
	            this.core.detect.init(this);
	            this.core.resizes.init(this);
	            this.core.scrolls.init(this);
	            this.router.init(this);
	            this.overlay.init(this);
	        }
	    }, {
	        key: "loadAppEntry",
	        value: function loadAppEntry() {
	            var dataType = { dataType: "html" };
	            var format = { format: "full", nocache: true };
	
	            this.core.api.collection(this.appEntry, format, dataType).done(this.onLoadAppEntry.bind(this));
	        }
	    }, {
	        key: "pushAppEntry",
	        value: function pushAppEntry() {
	            var _this2 = this;
	
	            this.router.push(this.appEntry, function () {
	                var cached = _this2.core.cache.get(_this2.appEntry);
	
	                _this2.core.util.emitter.fire("app--analytics-push", cached.$object);
	            });
	        }
	    }, {
	        key: "bindEvents",
	        value: function bindEvents() {
	            this._onTileClick = this.onTileClick.bind(this);
	            this._onPreloadDone = this.onPreloadDone.bind(this);
	            this._onMouseEnter = this.onMouseEnter.bind(this);
	            this._onMouseLeave = this.onMouseLeave.bind(this);
	            this._onLogoClick = this.onLogoClick.bind(this);
	            this._onProjectEnded = this.onProjectEnded.bind(this);
	
	            this.core.util.emitter.on("app--project-ended", this._onProjectEnded);
	            this.core.util.emitter.on("app--preload-done", this._onPreloadDone);
	            this.core.dom.body.on("click", ".js-project-tile", this._onTileClick);
	            this.core.dom.page.on("mouseenter", ".js-project-tile", this._onMouseEnter);
	            this.core.dom.page.on("mouseleave", ".js-project-tile", this._onMouseLeave);
	            this.core.dom.logo.on("click", this._onLogoClick);
	        }
	    }, {
	        key: "enableDocument",
	        value: function enableDocument() {
	            this.core.dom.html.removeClass("is-clipped");
	            this.core.dom.body.removeClass("is-clipped");
	        }
	    }, {
	        key: "isProjectActive",
	        value: function isProjectActive() {
	            return this.project !== null;
	        }
	    }, {
	        key: "destroyProject",
	        value: function destroyProject() {
	            if (this.project) {
	                this.enableDocument();
	                this.project.destroy();
	                this.project = null;
	            }
	        }
	    }, {
	        key: "clearTimeoutById",
	        value: function clearTimeoutById(timeoutId) {
	            try {
	                clearTimeout(timeoutId);
	            } catch (error) {
	                throw error;
	            }
	        }
	    }, {
	        key: "onLoadAppEntry",
	        value: function onLoadAppEntry(response) {
	            var _this3 = this;
	
	            var cache = this.router.parseDoc(response);
	            var $grid = cache.$object.find(".js-appentry").children();
	            var $images = $grid.find(".js-lazy-image");
	            var $anims = $grid.find(".js-animate");
	
	            this.core.dom.appentry.html($grid);
	
	            this.core.util.loadImages($images, this.core.util.noop).on("done", function () {
	                _this3.core.util.emitter.fire("app--update-animate", $anims);
	            });
	
	            this.core.cache.set(this.appEntry, cache);
	        }
	    }, {
	        key: "onPreloadDone",
	        value: function onPreloadDone() {
	            this.core.util.emitter.off("app--preload-done", this._onPreloadDone);
	
	            this.overlay.close();
	
	            if (this.pageData.appEntryType === this.core.config.rootEntryType) {
	                this.enableDocument();
	            } else {
	                this.loadAppEntry();
	            }
	        }
	    }, {
	        key: "onProjectEnded",
	        value: function onProjectEnded() {
	            this.pushAppEntry();
	
	            if (this.project) {
	                this.destroyProject();
	            }
	        }
	    }, {
	        key: "onLogoClick",
	        value: function onLogoClick(e) {
	            e.preventDefault();
	
	            this.pushAppEntry();
	
	            if (this.project) {
	                this.destroyProject();
	            }
	        }
	    }, {
	        key: "onTileClick",
	        value: function onTileClick(e) {
	            e.preventDefault();
	
	            this.project = new _Project2["default"](this, {
	                url: e.currentTarget.pathname,
	                onLoad: function onLoad() {}
	            });
	        }
	    }, {
	        key: "onMouseEnter",
	        value: function onMouseEnter(e) {
	            this.clearTimeoutById(this.timeoutId);
	
	            if (this.project) {
	                return;
	            }
	
	            var $tile = (0, _js_libsJqueryDistJquery2["default"])(e.currentTarget);
	
	            this.overlay.setTitle($tile.data("title"));
	
	            if (!this.overlay.isActive()) {
	                this.overlay.open();
	            }
	        }
	    }, {
	        key: "onMouseLeave",
	        value: function onMouseLeave() {
	            var _this4 = this;
	
	            if (this.project) {
	                return;
	            }
	
	            this.timeoutId = setTimeout(function () {
	                if (!_this4.project) {
	                    _this4.overlay.close();
	                }
	            }, this.timeoutDelay);
	        }
	    }]);
	
	    return App;
	})();
	
	window.onload = function () {
	    window.app = new App();
	};

/***/ },
/* 1 */
/*!***************************************!*\
  !*** ./js_libs/jquery/dist/jquery.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(/*! -!./~/expose-loader?jQuery!./js_libs/jquery/dist/jquery.js */ 2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!****************************************************************!*\
  !*** ./~/expose-loader?jQuery!./js_libs/jquery/dist/jquery.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(/*! -!./js_libs/jquery/dist/jquery.js */ 3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/*!***************************************!*\
  !*** ./js_libs/jquery/dist/jquery.js ***!
  \***************************************/
/***/ function(module, exports) {

	/*!
	 * jQuery JavaScript Library v3.0.0-pre -deprecated,-effects,-effects/Tween,-effects/animatedSelector,-css,-css/addGetHookIf,-css/adjustCSS,-css/curCSS,-css/hiddenVisibleSelectors,-css/showHide,-css/support,-css/var/cssExpand,-css/var/getStyles,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-css/var/swap,-dimensions,-offset,-wrap,-exports/amd,-event/alias,-core/ready
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-01T23:38Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];
	
	var document = window.document;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "3.0.0-pre -deprecated,-effects,-effects/Tween,-effects/animatedSelector,-css,-css/addGetHookIf,-css/adjustCSS,-css/curCSS,-css/hiddenVisibleSelectors,-css/showHide,-css/support,-css/var/cssExpand,-css/var/getStyles,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-css/var/swap,-dimensions,-offset,-wrap,-exports/amd,-event/alias,-core/ready",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor(null);
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) ||
						(copyIsArray = jQuery.isArray(copy)) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},
	
		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
	
			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script = document.createElement( "script" );
	
			script.text = code;
			document.head.appendChild( script ).parentNode.removeChild( script );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android<4.1, PhantomJS<2
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
	function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-10
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "[id='" + nid + "'] " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9 - 11
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		// Limit the fix to IE with document.documentMode and IE >=9 with document.defaultView
		if ( document.documentMode && (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		});
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};
	
	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return this.pushStack( len > 1 ? jQuery.uniqueSort( ret ) : ret );
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );
	
						if ( elem ) {
							// Inject the element directly into the jQuery object
							this[0] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[0] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;
	
			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},
	
		sibling: function( n, elem ) {
			var matched = [];
	
			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}
	
			return matched;
		}
	});
	
	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});
	
	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
			// Last fire value for non-forgettable lists
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to prevent firing
			locked,
			// Actual callback list
			list = [],
			// Queue of execution data for repeatable lists
			queue = [],
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					});
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	jQuery.extend({
	
		Deferred: function( func ) {
			var tuples = [
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks("memory"),
						jQuery.Callbacks("memory"), 2 ],
					[ "resolve", "done", jQuery.Callbacks("once memory"),
						jQuery.Callbacks("once memory"), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"),
						jQuery.Callbacks("once memory"), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								});
							});
							fns = null;
						}).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this === promise ? undefined : this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notify )
												);
											}
	
										// Handle all other returned values
										} else {
											// Only substitue handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )(
												that || deferred.promise(), args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
													// Only substitue handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that || deferred.promise(),
														args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred(function( newDefer ) {
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[1] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var method,
				i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				master = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							master.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							master.resolveWith( contexts, values );
						}
					};
				},
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] &&
						jQuery.isFunction( (method = resolveValues[ i ].promise) ) ) {
	
						method.call( resolveValues[ i ] )
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( master.reject );
					} else if ( resolveValues[ i ] &&
						jQuery.isFunction( (method = resolveValues[ i ].then) ) ) {
	
						method.call(
							resolveValues[ i ],
							updateFunc( i, resolveContexts, resolveValues ),
							master.reject,
							updateFunc( i, progressContexts, progressValues )
						);
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				master.resolveWith( resolveContexts, resolveValues );
			}
	
			return master.promise();
		}
	});
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[i], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};
	
	
	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	Data.accepts = jQuery.acceptData;
	
	Data.prototype = {
	
		register: function( owner ) {
			var value = {};
	
			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;
	
			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				});
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {
	
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !Data.accepts( owner ) ) {
				return {};
			}
	
			// Check if the owner object already has a cache
			var cache = owner[ this.expando ];
	
			// If so, return it
			if ( cache ) {
				return cache;
			}
	
			// If not, register one
			return this.register( owner );
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			var cache = this.cache( owner );
	
			return key === undefined ?
				cache :
	
				// Always use camelCase key (gh-2257)
				cache[ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
				delete owner[ this.expando ];
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend({
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	});
	
	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					dataUser.set( this, key );
				});
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each(function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				});
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each(function() {
				dataUser.remove( this, key );
			});
		}
	});
	
	
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});
	
	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}
	
			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		thead: [ 1, "<table>", "</table>" ],
	
		// Some of the following wrappers are not fully defined, because
		// their parent elements (except for "table" element) could be omitted
		// since browser parsers are smart enough to auto-insert them
	
		// Support: Android 2.3
		// Android browser doesn't auto-insert colgroup
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	
		// Auto-insert "tbody" element
		tr: [ 2, "<table>", "</table>" ],
	
		// Auto-insert "tbody" and "tr" elements
		td: [ 3, "<table>", "</table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0-4.3
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	
	
	support.focusin = "onfocusin" in window;
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !(events = elemData.events) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf(".") > -1 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split(" "),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the compat branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);
	
			jQuery.event.trigger( e, null, elem );
	
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		});
	}
	
	jQuery.fn.extend({
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},
	
		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each(function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			});
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; (node = nodes[i]) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend({
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					if ( (data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						delete elem[ dataPriv.expando ];
					}
					if ( elem[ dataUser.expando ] ) {
						delete elem[ dataUser.expando ];
					}
				}
			}
		}
	});
	
	jQuery.fn.extend({
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	});
	
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android<4.1, PhantomJS<2
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	});
	var documentElement = document.documentElement;
	
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		});
	};
	
	
	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android<4.4
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});
	
	jQuery.extend({
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[i++] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		}
	});
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i;
	
	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});
	
	jQuery.extend({
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) ||
						rfocusable.test( elem.nodeName ) || elem.href ?
							elem.tabIndex :
							-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});
	
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}
	
	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				});
			}
	
			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				});
			}
	
			return this.each(function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			});
		},
	
		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 &&
					( " " + getClass( this[i] ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	});
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each(function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});
	
	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					// Support: IE<11
					// option.value not trimmed (#14858)
					return jQuery.trim( elem.value );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected =
								jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1) ) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});
	
	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	
	
	
	
	// Return jQuery for attributes-only inclusion
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = (/\?/);
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
	
					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend({
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Url cleanup var
				urlAnchor,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	});
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			});
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
	
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport(function( options ) {
		var callback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = xhr.onload = xhr.onerror = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");
	
					// Create the abort callback
					callback = callback("abort");
	
					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf("application/x-www-form-urlencoded") === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			});
	
			// Delegate to script
			return "script";
		}
	});
	
	
	
	
	// Support: Safari 8+
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = (function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	})();
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		// document.implementation stops scripts or inline event handlers from
		// being executed immediately
		context = context || ( support.createHTMLDocument ?
			document.implementation.createHTMLDocument( "" ) :
			document );
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf(" ");
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			}).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				});
			});
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each([
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});
	
	
	
	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ },
/* 4 */
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
	
	var _detect = __webpack_require__(/*! ./detect */ 5);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _dom = __webpack_require__(/*! ./dom */ 6);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _images = __webpack_require__(/*! ./images */ 17);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _resizes = __webpack_require__(/*! ./resizes */ 19);
	
	var _resizes2 = _interopRequireDefault(_resizes);
	
	var _scrolls = __webpack_require__(/*! ./scrolls */ 22);
	
	var _scrolls2 = _interopRequireDefault(_scrolls);
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	var util = _interopRequireWildcard(_util);
	
	var _config = __webpack_require__(/*! ./config */ 13);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _env = __webpack_require__(/*! ./env */ 16);
	
	var _env2 = _interopRequireDefault(_env);
	
	var _log = __webpack_require__(/*! ./log */ 15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _api = __webpack_require__(/*! ./api */ 23);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _cache = __webpack_require__(/*! ./cache */ 25);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _Analytics = __webpack_require__(/*! ./Analytics */ 27);
	
	var _Analytics2 = _interopRequireDefault(_Analytics);
	
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

/***/ },
/* 5 */
/*!*******************************!*\
  !*** ./js_src/core/detect.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 6);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _log = __webpack_require__(/*! ./log */ 15);
	
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
/* 6 */
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
	
	var _js_libsJqueryDistJquery = __webpack_require__(/*! js_libs/jquery/dist/jquery */ 1);
	
	var _js_libsJqueryDistJquery2 = _interopRequireDefault(_js_libsJqueryDistJquery);
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	var util = _interopRequireWildcard(_util);
	
	var $_jsOverlay = (0, _js_libsJqueryDistJquery2["default"])(".js-overlay");
	var $_jsProject = (0, _js_libsJqueryDistJquery2["default"])(".js-project");
	
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
	  doc: (0, _js_libsJqueryDistJquery2["default"])(document),
	
	  /**
	   *
	   * @public
	   * @member win
	   * @memberof dom
	   * @description The cached window node.
	   *
	   */
	  win: (0, _js_libsJqueryDistJquery2["default"])(window),
	
	  /**
	   *
	   * @public
	   * @member nav
	   * @memberof dom
	   * @description The cached nav node.
	   *
	   */
	  nav: (0, _js_libsJqueryDistJquery2["default"])(".js-nav"),
	
	  /**
	   *
	   * @public
	   * @member html
	   * @memberof dom
	   * @description The cached documentElement node.
	   *
	   */
	  html: (0, _js_libsJqueryDistJquery2["default"])(document.documentElement),
	
	  /**
	   *
	   * @public
	   * @member body
	   * @memberof dom
	   * @description The cached body node.
	   *
	   */
	  body: (0, _js_libsJqueryDistJquery2["default"])(document.body),
	
	  /**
	   *
	   * @public
	   * @member page
	   * @memberof dom
	   * @description The cached page container node.
	   *
	   */
	  page: (0, _js_libsJqueryDistJquery2["default"])(".js-page"),
	
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
	    elementNode: $_jsProject.find(".js-project-node"),
	    elementTransitionDuration: util.getTransitionDuration($_jsProject[0])
	  },
	
	  /**
	   *
	   * @public
	   * @member logo
	   * @memberof dom
	   * @description The logo element.
	   *
	   */
	  logo: (0, _js_libsJqueryDistJquery2["default"])(".js-logo"),
	
	  /**
	   *
	   * @public
	   * @member appentry
	   * @memberof dom
	   * @description The appentry grid element.
	   *
	   */
	  appentry: (0, _js_libsJqueryDistJquery2["default"])(".js-appentry"),
	
	  /**
	   *
	   * @public
	   * @member header
	   * @memberof dom
	   * @description The cached header node.
	   *
	   */
	  header: (0, _js_libsJqueryDistJquery2["default"])(".js-header"),
	
	  /**
	   *
	   * @public
	   * @member intro
	   * @memberof dom
	   * @description The cached brand moment node.
	   *
	   */
	  overlay: {
	    element: $_jsOverlay,
	    elementTitle: $_jsOverlay.find(".js-overlay-title")
	  }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = dom;
	module.exports = exports["default"];

/***/ },
/* 7 */
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
	
	var _js_libsJqueryDistJquery = __webpack_require__(/*! js_libs/jquery/dist/jquery */ 1);
	
	var _js_libsJqueryDistJquery2 = _interopRequireDefault(_js_libsJqueryDistJquery);
	
	var _hammerjs = __webpack_require__(/*! hammerjs */ 8);
	
	var _hammerjs2 = _interopRequireDefault(_hammerjs);
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 9);
	
	var _properjsController2 = _interopRequireDefault(_properjsController);
	
	var _properjsScrollcontroller = __webpack_require__(/*! properjs-scrollcontroller */ 10);
	
	var _properjsScrollcontroller2 = _interopRequireDefault(_properjsScrollcontroller);
	
	var _properjsResizecontroller = __webpack_require__(/*! properjs-resizecontroller */ 11);
	
	var _properjsResizecontroller2 = _interopRequireDefault(_properjsResizecontroller);
	
	var _properjsImageloader = __webpack_require__(/*! properjs-imageloader */ 12);
	
	var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);
	
	var _dom = __webpack_require__(/*! ./dom */ 6);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _config = __webpack_require__(/*! ./config */ 13);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _detect = __webpack_require__(/*! ./detect */ 5);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	/**
	 *
	 * @description Noop a preventDefault() for event handlers
	 * @method preNoop
	 * @param {object} e The event object
	 * @returns {boolean}
	 *
	 */
	var preNoop = function preNoop(e) {
	    e.preventDefault();
	    return false;
	};
	
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
	 * @description Single app instanceof [Controller]{@link https://github.com/ProperJS/Controller} for arbitrary event emitting
	 * @member emitter
	 * @memberof util
	 *
	 */
	var emitter = new _properjsController2["default"]();
	
	/**
	 *
	 * @description Single app instanceof [ScrollController]{@link https://github.com/ProperJS/ScrollController}
	 * @member scroller
	 * @memberof util
	 *
	 */
	var scroller = new _properjsScrollcontroller2["default"]();
	
	/**
	 *
	 * @description Single app instanceof [ResizeController]{@link https://github.com/ProperJS/ResizeController}
	 * @member resizer
	 * @memberof util
	 *
	 */
	var resizer = new _properjsResizecontroller2["default"]();
	
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
	
	var getElementsInView = function getElementsInView($nodes) {
	    var i = $nodes.length;
	    var $ret = (0, _js_libsJqueryDistJquery2["default"])([]);
	
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
	 * @param {jQuery} images The optional argument passed collection to reload
	 * @memberof util
	 *
	 */
	var updateImages = function updateImages(images) {
	    images = images || (0, _js_libsJqueryDistJquery2["default"])("[" + _config2["default"].imageLoaderAttr + "]");
	
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
	 * @memberof util
	 * @returns {instance}
	 *
	 */
	var loadImages = function loadImages(images, handler, useVariant) {
	    var rQuery = /\?(.*)$/;
	    var map = function map(vnt) {
	        return parseInt(vnt, 10);
	    };
	    var $img = null;
	    var data = null;
	    var vars = null;
	    var width = null;
	    var height = null;
	    var dimension = null;
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
	        width = $img[0].clientWidth || $img[0].parentNode.clientWidth || window.innerWidth;
	        height = $img[0].clientHeight || $img[0].parentNode.clientHeight || window.innerHeight;
	        dimension = Math.max(width, height);
	        source = data.imgSrc.replace(rQuery, "");
	
	        if (useVariant && data.variants) {
	            vars = data.variants.split(",").map(map);
	            variant = getClosestValue(vars, dimension);
	
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
	 * @description Toggle on/off scrollability
	 * @method disableMouseWheel
	 * @param {boolean} enable Flag to enable/disable
	 * @memberof util
	 *
	 */
	var disableMouseWheel = function disableMouseWheel(enable) {
	    if (enable) {
	        _dom2["default"].doc.on("DOMMouseScroll mousewheel", preNoop);
	    } else {
	        _dom2["default"].doc.off("DOMMouseScroll mousewheel");
	    }
	};
	
	/**
	 *
	 * @description Toggle on/off touch movement
	 * @method disableTouchMove
	 * @param {boolean} enable Flag to enable/disable
	 * @memberof util
	 *
	 */
	var disableTouchMove = function disableTouchMove(enable) {
	    if (enable) {
	        _dom2["default"].doc.on("touchmove", preNoop);
	    } else {
	        _dom2["default"].doc.off("touchmove");
	    }
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
	
	var getPageKey = function getPageKey() {
	    return "" + window.location.pathname + window.location.search;
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = {
	    // Classes
	    emitter: emitter,
	    scroller: scroller,
	    resizer: resizer,
	
	    // Loading
	    loadImages: loadImages,
	    updateImages: updateImages,
	    isElementLoadable: isElementLoadable,
	    isElementInViewport: isElementInViewport,
	    getElementsInView: getElementsInView,
	
	    // Disabling
	    disableMouseWheel: disableMouseWheel,
	    disableTouchMove: disableTouchMove,
	
	    // Random
	    px: px,
	    noop: noop,
	    translate3d: translate3d,
	    getTransitionDuration: getTransitionDuration,
	    getDefaultHammerOptions: getDefaultHammerOptions,
	    getPageKey: getPageKey
	};
	module.exports = exports["default"];

/***/ },
/* 8 */
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
/* 9 */
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
/* 10 */
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
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 9 ),
	        
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
/* 11 */
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
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 9 ),
	
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
/* 12 */
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
/* 13 */
/*!*******************************!*\
  !*** ./js_src/core/config.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsEasing = __webpack_require__(/*! properjs-easing */ 14);
	
	var _properjsEasing2 = _interopRequireDefault(_properjsEasing);
	
	/**
	 *
	 * @public
	 * @module config
	 * @description Stores app-wide config values.
	 *
	 */
	var config = {
	  homepageKey: "homepage",
	  rootEntryType: "index",
	
	  /**
	   *
	   * @public
	   * @member sqsMaxImgWidth
	   * @memberof config
	   * @description The max width Squarespace allows for images.
	   *
	   */
	  sqsMaxImgWidth: 2500,
	
	  /**
	   *
	   * @public
	   * @member sqsSpecialProps
	   * @memberof config
	   * @description Normalize access to certain item object properties for application.
	   *
	   * Any of these indicate a post HAS a thumbnail image:
	   * - systemDataId
	   * - systemDataVariants
	   * - systemDataSourceType
	   * - systemDataOrigin
	   *
	   */
	  sqsSpecialProps: {
	    published: "publishOn",
	    userUpload: "systemDataVariants",
	    blockDataKey: "blockJson",
	    mainContent: "main-content"
	  },
	
	  /**
	   *
	   * @public
	   * @member defaultEasing
	   * @memberof config
	   * @description The default easing function for javascript Tweens.
	   *
	   */
	  defaultEasing: _properjsEasing2["default"].easeInOutCubic,
	
	  /**
	   *
	   * @public
	   * @member defaultDuration
	   * @memberof config
	   * @description The default duration for javascript Tweens.
	   *
	   */
	  defaultDuration: 300,
	
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
	   * @member asyncScriptPath
	   * @memberof config
	   * @description The string path where async scripts are kept.
	   *
	   */
	  asyncScriptPath: "/assets/async/scripts/",
	
	  /**
	   *
	   * @public
	   * @member asyncStylePath
	   * @memberof config
	   * @description The string path where async styles are kept.
	   *
	   */
	  asyncStylePath: "/assets/async/styles/"
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = config;
	module.exports = exports["default"];

/***/ },
/* 14 */
/*!*************************************!*\
  !*** ./~/properjs-easing/Easing.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * A base set of easing methods
	 * Most of which were found here:
	 * https://gist.github.com/gre/1650294
	 *
	 * @Easing
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Easing = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Easing functions
	     * @namespace Easing
	     * @memberof! <global>
	     *
	     */
	    var Easing = {
	        /**
	         *
	         * Produce a linear ease
	         * @method linear
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        linear: function ( t ) { return t; },
	        
	        /**
	         *
	         * Produce a swing ease like in jQuery
	         * @method swing
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        swing: function ( t ) { return (1-Math.cos( t*Math.PI ))/2; },
	        
	        /**
	         *
	         * Accelerating from zero velocity
	         * @method easeInQuad
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInQuad: function ( t ) { return t*t; },
	        
	        /**
	         *
	         * Decelerating to zero velocity
	         * @method easeOutQuad
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeOutQuad: function ( t ) { return t*(2-t); },
	        
	        /**
	         *
	         * Acceleration until halfway, then deceleration
	         * @method easeInOutQuad
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInOutQuad: function ( t ) { return t<0.5 ? 2*t*t : -1+(4-2*t)*t; },
	        
	        /**
	         *
	         * Accelerating from zero velocity
	         * @method easeInCubic
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInCubic: function ( t ) { return t*t*t; },
	        
	        /**
	         *
	         * Decelerating to zero velocity
	         * @method easeOutCubic
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeOutCubic: function ( t ) { return (--t)*t*t+1; },
	        
	        /**
	         *
	         * Acceleration until halfway, then deceleration
	         * @method easeInOutCubic
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInOutCubic: function ( t ) { return t<0.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; },
	        
	        /**
	         *
	         * Accelerating from zero velocity
	         * @method easeInQuart
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInQuart: function ( t ) { return t*t*t*t; },
	        
	        /**
	         *
	         * Decelerating to zero velocity
	         * @method easeOutQuart
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeOutQuart: function ( t ) { return 1-(--t)*t*t*t; },
	        
	        /**
	         *
	         * Acceleration until halfway, then deceleration
	         * @method easeInOutQuart
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInOutQuart: function ( t ) { return t<0.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t; },
	        
	        /**
	         *
	         * Accelerating from zero velocity
	         * @method easeInQuint
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInQuint: function ( t ) { return t*t*t*t*t; },
	        
	        /**
	         *
	         * Decelerating to zero velocity
	         * @method easeOutQuint
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeOutQuint: function ( t ) { return 1+(--t)*t*t*t*t; },
	        
	        /**
	         *
	         * Acceleration until halfway, then deceleration
	         * @method easeInOutQuint
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInOutQuint: function ( t ) { return t<0.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; }
	    };
	    
	    
	    return Easing;
	
	
	});

/***/ },
/* 15 */
/*!****************************!*\
  !*** ./js_src/core/log.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _env = __webpack_require__(/*! ./env */ 16);
	
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
/* 16 */
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
/* 17 */
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
	
	var _dom = __webpack_require__(/*! ./dom */ 6);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _config = __webpack_require__(/*! ./config */ 13);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _properjsImageloader = __webpack_require__(/*! properjs-imageloader */ 12);
	
	var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);
	
	var _ImageController = __webpack_require__(/*! ./ImageController */ 18);
	
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
	    unload: function unload() {
	        _properjsImageloader2["default"].killInstances();
	    },
	
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
	
	        util.emitter.fire("app--preload-done");
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
	                util.emitter.fire("app--lazyload-done");
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
/* 18 */
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
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 9);
	
	var _properjsController2 = _interopRequireDefault(_properjsController);
	
	/**
	 *
	 * @public
	 * @class ImageController
	 * @param {jQuery} $images The image collection to load
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
/* 19 */
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
	
	var _properjsThrottle = __webpack_require__(/*! properjs-throttle */ 20);
	
	var _properjsThrottle2 = _interopRequireDefault(_properjsThrottle);
	
	var _properjsDebounce = __webpack_require__(/*! properjs-debounce */ 21);
	
	var _properjsDebounce2 = _interopRequireDefault(_properjsDebounce);
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _throttled = 50;
	var _debounced = 300;
	
	/**
	 *
	 * @public
	 * @module resizes
	 * @description Handles app-wide emission of various resize detection events.
	 *
	 */
	var resizes = {
	  /**
	   *
	   * @public
	   * @method init
	   * @memberof resizes
	   * @description Method binds event listeners for resize controller.
	   *
	   */
	  init: function init() {
	    util.resizer.on("resize", (0, _properjsThrottle2["default"])(onThrottle, _throttled));
	
	    // Hook into resize of `width` only for this handler
	    // @bug: iOS window size changes when Safari's chrome switches between full and minimal-ui.
	    util.resizer.on("resizewidth", (0, _properjsDebounce2["default"])(onDebounce, _debounced));
	
	    (0, _log2["default"])("resizes initialized");
	  }
	};
	
	/**
	 *
	 * @private
	 * @method onDebounce
	 * @memberof resizes
	 * @description Debounced resize events.
	 *
	 */
	var onDebounce = function onDebounce() {
	  util.emitter.fire("app--resize-debounced");
	
	  util.updateImages();
	};
	
	/**
	 *
	 * @private
	 * @method onThrottle
	 * @memberof resizes
	 * @description Method handles the window resize event via [ResizeController]{@link https://github.com/ProperJS/ResizeController}.
	 *
	 */
	var onThrottle = function onThrottle() {
	  util.emitter.fire("app--resize");
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = resizes;
	module.exports = exports["default"];

/***/ },
/* 20 */
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
/* 21 */
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
/* 22 */
/*!********************************!*\
  !*** ./js_src/core/scrolls.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 6);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _detect = __webpack_require__(/*! ./detect */ 5);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _timeout = null;
	var _isNones = false;
	var _idleout = 300;
	
	/**
	 *
	 * @public
	 * @module scrolls
	 * @description Handles app-wide emission of various scroll detection events.
	 *
	 */
	var scrolls = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof scrolls
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        util.scroller.on("scroll", onScroller);
	        util.scroller.on("scrollup", onScrollerUp);
	        util.scroller.on("scrolldown", onScrollerDown);
	
	        onScroller();
	
	        this.topout();
	
	        (0, _log2["default"])("scrolls initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method topout
	     * @param {number} top Optionally, the scroll position to apply
	     * @memberof preload
	     * @description Method set scroll position to argument value or sero.
	     *
	     */
	    topout: function topout(top) {
	        top = top || 0;
	
	        window.scrollTo(0, top);
	    },
	
	    /**
	     *
	     * @public
	     * @method clearStates
	     * @memberof scrolls
	     * @description Method removes all applied classNames from this module
	     *
	     */
	    clearStates: function clearStates() {
	        _dom2["default"].html.removeClass("is-scrolling-up is-scrolling-down is-scrolling");
	    }
	};
	
	/**
	 *
	 * @private
	 * @method suppressEvents
	 * @param {number} scrollPos The current scrollY position
	 * @memberof scrolls
	 * @description Method applies className to disable events while scrolling
	 *
	 */
	var suppressEvents = function suppressEvents(scrollPos) {
	    if (_detect2["default"].isDevice()) {
	        return;
	    }
	
	    try {
	        clearTimeout(_timeout);
	    } catch (error) {
	        (0, _log2["default"])(error);
	    }
	
	    if (!_isNones) {
	        _isNones = true;
	
	        _dom2["default"].html.addClass("is-scrolling");
	
	        util.emitter.fire("app--scroll-start");
	    }
	
	    _timeout = setTimeout(function () {
	        if (scrollPos === util.scroller.getScrollY()) {
	            _isNones = false;
	
	            _dom2["default"].html.removeClass("is-scrolling");
	
	            util.emitter.fire("app--scroll-end");
	        }
	    }, _idleout);
	};
	
	/**
	 *
	 * @private
	 * @method onScrollerUp
	 * @memberof scrolls
	 * @description Method handles upward scroll event
	 *
	 */
	var onScrollerUp = function onScrollerUp() {
	    if (util.scroller.getScrollY() <= 0 || _detect2["default"].isDevice()) {
	        return;
	    }
	
	    var scrollPos = util.scroller.getScrollY();
	
	    util.emitter.fire("app--scroll-up", scrollPos);
	
	    _dom2["default"].html.removeClass("is-scrolling-down").addClass("is-scrolling-up");
	};
	
	/**
	 *
	 * @private
	 * @method onScrollerDown
	 * @memberof scrolls
	 * @description Method handles downward scroll event
	 *
	 */
	var onScrollerDown = function onScrollerDown() {
	    if (util.scroller.getScrollY() <= 0 || _detect2["default"].isDevice()) {
	        return;
	    }
	
	    var scrollPos = util.scroller.getScrollY();
	
	    util.emitter.fire("app--scroll-down", scrollPos);
	
	    _dom2["default"].html.removeClass("is-scrolling-up").addClass("is-scrolling-down");
	};
	
	/**
	 *
	 * @private
	 * @method onScroller
	 * @memberof scrolls
	 * @description Method handles regular scroll event via [ScrollController]{@link https://github.com/ProperJS/ScrollController}
	 *
	 */
	var onScroller = function onScroller() {
	    var scrollPos = util.scroller.getScrollY();
	
	    suppressEvents(scrollPos);
	
	    util.emitter.fire("app--scroll", scrollPos);
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = scrolls;
	module.exports = exports["default"];

/***/ },
/* 23 */
/*!****************************!*\
  !*** ./js_src/core/api.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsJqueryDistJquery = __webpack_require__(/*! js_libs/jquery/dist/jquery */ 1);
	
	var _js_libsJqueryDistJquery2 = _interopRequireDefault(_js_libsJqueryDistJquery);
	
	var _paramalama = __webpack_require__(/*! paramalama */ 24);
	
	var _paramalama2 = _interopRequireDefault(_paramalama);
	
	//import config from "./config";
	
	var _cache = __webpack_require__(/*! ./cache */ 25);
	
	var _cache2 = _interopRequireDefault(_cache);
	
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
	     * @memberof api
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
	     * @memberof api
	     * @description Default dataType for the `request` api method.
	     *
	     */
	    dataType: "json",
	
	    /**
	     *
	     * @public
	     * @member format
	     * @memberof api
	     * @description Default format for the `request` api method.
	     *
	     */
	    format: "json",
	
	    /**
	     *
	     * @public
	     * @member method
	     * @memberof api
	     * @description Default method for the `request` api method.
	     *
	     */
	    method: "GET",
	
	    /**
	     *
	     * @public
	     * @method urify
	     * @param {string} uri The collection uri
	     * @memberof api
	     * @description Ensures a leading/trailing slash.
	     * @returns {string}
	     *
	     */
	    urify: function urify(uri) {
	        return ["/", uri.replace(_rSlash, ""), "/"].join("");
	    },
	
	    /**
	     *
	     * @public
	     * @method endpoint
	     * @param {string} uri The collection uri
	     * @memberof api
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
	     * @memberof api
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
	     * @memberof api
	     * @description Creates the fullUrl from an API uri.
	     * @returns {object}
	     *
	     */
	    request: function request(url, params, options) {
	        var data = _js_libsJqueryDistJquery2["default"].extend({
	            format: this.format,
	            nocache: true
	        }, params);
	        var opts = _js_libsJqueryDistJquery2["default"].extend({
	            url: url,
	            data: data,
	            dataType: this.dataType,
	            method: this.method
	        }, options);
	
	        return _js_libsJqueryDistJquery2["default"].ajax(opts);
	    },
	
	    /**
	     *
	     * @public
	     * @method index
	     * @param {string} uri The index uri
	     * @param {object} params Merge params to send
	     * @param {object} options Merge options to send
	     * @memberof api
	     * @description Retrieves collections from a given index.
	     * @returns {object}
	     *
	     */
	    index: function index(uri, params, options) {
	        var i = 0;
	        var def = new _js_libsJqueryDistJquery2["default"].Deferred();
	        var colls = [];
	        var cached = _cache2["default"].get(uri);
	        var handle = function handle(data) {
	            for (i = data.collections.length; i--;) {
	                colls.push(data.collections[i].urlId);
	            }
	
	            api.collections(colls, params, options).done(function (items) {
	                return def.resolve(items);
	            });
	        };
	
	        if (cached) {
	            setTimeout(function () {
	                return handle(cached);
	            }, 1);
	        } else {
	            this.request(this.endpoint(uri)).done(function (data) {
	                //cache.set( data.collection.urlId, data.collection );
	
	                handle(data.collection);
	            }).fail(function (xhr, status, error) {
	                return def.reject(error);
	            });
	        }
	
	        return def;
	    },
	
	    /**
	     *
	     * @public
	     * @method collection
	     * @param {string} uri The collection uri
	     * @param {object} params Merge params to send
	     * @param {object} options Merge options to send
	     * @memberof api
	     * @description Retrieves items from a given collection.
	     * @returns {object}
	     *
	     */
	    collection: function collection(uri, params, options) {
	        var collection = {};
	        var def = new _js_libsJqueryDistJquery2["default"].Deferred();
	        var cached = _cache2["default"].get(uri);
	        var seg = uri.split("?")[0];
	
	        params = _js_libsJqueryDistJquery2["default"].extend(params || {}, (0, _paramalama2["default"])(uri));
	
	        if (cached) {
	            setTimeout(function () {
	                return def.resolve(cached);
	            }, 1);
	        } else {
	            this.request(this.endpoint(seg), params, options).done(function (data) {
	                // Resolve with `responseText`
	                if (typeof data === "string") {
	                    //cache.set( uri, data );
	
	                    def.resolve(data);
	                } else {
	                    // Collection?
	                    collection = {
	                        collection: data.collection,
	                        item: data.item || null,
	                        items: data.items || null,
	                        pagination: data.pagination || null
	                    };
	
	                    //cache.set( uri, collection );
	
	                    def.resolve(data.items || data.item ? collection : null);
	                }
	            }).fail(function (xhr, status, error) {
	                def.reject(error);
	            });
	        }
	
	        return def;
	    },
	
	    /**
	     *
	     * @public
	     * @method collections
	     * @param {array} uris The collection uris to query for
	     * @param {object} params Merge params to send
	     * @param {object} options Merge options to send
	     * @memberof api
	     * @description Retrieves items from a given set of collection.
	     * @returns {object}
	     *
	     */
	    collections: function collections(uris, params, options) {
	        var curr = 0;
	        var i = uris.length;
	        var items = {};
	        var def = new _js_libsJqueryDistJquery2["default"].Deferred();
	        var func = function func(uri, data) {
	            curr++;
	
	            if (data) {
	                items[uri] = data;
	            }
	
	            if (curr === uris.length) {
	                def.resolve(items);
	            }
	        };
	
	        for (i; i--;) {
	            this.collection(uris[i], params, options).done(func.bind(null, uris[i]));
	        }
	
	        return def;
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = api;
	module.exports = exports["default"];

/***/ },
/* 24 */
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
/* 25 */
/*!******************************!*\
  !*** ./js_src/core/cache.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _Store = __webpack_require__(/*! ./Store */ 26);
	
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
/* 26 */
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
	
	var _js_libsJqueryDistJquery = __webpack_require__(/*! js_libs/jquery/dist/jquery */ 1);
	
	var _js_libsJqueryDistJquery2 = _interopRequireDefault(_js_libsJqueryDistJquery);
	
	var _log = __webpack_require__(/*! ./log */ 15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _config = __webpack_require__(/*! ./config */ 13);
	
	var _config2 = _interopRequireDefault(_config);
	
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
	         * @method slug
	         * @param {string} uri The string to slugify
	         * @memberof Store
	         * @description Slug a uri string
	         * @returns {string}
	         *
	         */
	    }, {
	        key: "slug",
	        value: function slug(uri) {
	            uri = uri.replace(/^\/|\/$/g, "").replace(/\/|\?|\&|=|\s/g, "-").toLowerCase();
	            uri = uri === "" ? _config2["default"].homepageKey : uri;
	
	            return uri;
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
	            id = this.slug(id);
	
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
	            id = id && this.slug(id);
	
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
	            return typeof val === "string" ? String(val) : val ? _js_libsJqueryDistJquery2["default"].extend(_js_libsJqueryDistJquery2["default"].isArray(val) ? [] : {}, val) : null;
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
/* 27 */
/*!**********************************!*\
  !*** ./js_src/core/Analytics.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	//import $ from "js_libs/jquery/dist/jquery";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _log = __webpack_require__(/*! ./log */ 15);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	var util = _interopRequireWildcard(_util);
	
	var _cache = __webpack_require__(/*! ./cache */ 25);
	
	var _cache2 = _interopRequireDefault(_cache);
	
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
	
	            util.emitter.on("app--analytics-push", this.pushTrack.bind(this));
	
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
	            var ctx = _cache2["default"].get(util.getPageKey() + "-context");
	
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
	            _cache2["default"].set(util.getPageKey() + "-context", json);
	        }
	    }]);
	
	    return Analytics;
	})();
	
	exports["default"] = Analytics;
	module.exports = exports["default"];

/***/ },
/* 28 */
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
	
	var _js_libsJqueryDistJquery = __webpack_require__(/*! js_libs/jquery/dist/jquery */ 1);
	
	var _js_libsJqueryDistJquery2 = _interopRequireDefault(_js_libsJqueryDistJquery);
	
	var _properjsPagecontroller = __webpack_require__(/*! properjs-pagecontroller */ 29);
	
	var _properjsPagecontroller2 = _interopRequireDefault(_properjsPagecontroller);
	
	var _core = __webpack_require__(/*! ./core */ 4);
	
	var core = _interopRequireWildcard(_core);
	
	var _animate = __webpack_require__(/*! ./animate */ 34);
	
	var _animate2 = _interopRequireDefault(_animate);
	
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
	        this.pageDuration = core.util.getTransitionDuration(core.dom.page[0]);
	        this.bindEmptyHashLinks();
	        this.createPageController();
	
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
	     * @method createPageController
	     * @memberof router
	     * @description Create the PageController instance.
	     *
	     */
	    createPageController: function createPageController() {
	        this.controller = new _properjsPagecontroller2["default"]({
	            transitionTime: this.pageDuration
	        });
	
	        this.controller.setConfig(["*"]);
	
	        this.controller.setModules([core.images, _animate2["default"]]);
	
	        //this.controller.on( "page-controller-router-samepage", () => {} );
	        this.controller.on("page-controller-router-transition-out", this.changePageOut.bind(this));
	        this.controller.on("page-controller-router-refresh-document", this.changeContent.bind(this));
	        this.controller.on("page-controller-router-transition-in", this.changePageIn.bind(this));
	        this.controller.on("page-controller-initialized-page", this.initPage.bind(this));
	
	        this.controller.initPage();
	    },
	
	    /**
	     *
	     * @public
	     * @method initPage
	     * @param {string} html The responseText to parse out
	     * @memberof router
	     * @description Cache the initial page load.
	     *
	     */
	    initPage: function initPage(html) {
	        var cache = this.parseDoc(html);
	
	        this.cachePage(cache.$object, cache.response);
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
	
	        doc = (0, _js_libsJqueryDistJquery2["default"])(doc);
	
	        return {
	            $object: doc,
	            response: doc.find(".js-page")[0].innerHTML
	        };
	    },
	
	    /**
	     *
	     * @public
	     * @method cachePage
	     * @param {Hobo} $object The node for use
	     * @param {string} response The XHR responseText
	     * @memberof router
	     * @description Cache the DOM content for a page once its parsed out.
	     *
	     */
	    cachePage: function cachePage($object, response) {
	        core.cache.set(core.util.getPageKey(), {
	            $object: $object,
	            response: response
	        });
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
	     * @method onPreloadDone
	     * @memberof router
	     * @description Finish routing sequence when image pre-loading is done.
	     *
	     */
	    onPreloadDone: function onPreloadDone() {
	        core.util.disableMouseWheel(false);
	        core.util.disableTouchMove(false);
	
	        core.dom.html.removeClass("is-routing");
	        core.dom.page.removeClass("is-inactive");
	
	        core.scrolls.topout(0);
	        core.scrolls.clearStates();
	
	        setTimeout(function () {
	            core.util.emitter.fire("app--intro-art");
	        }, this.pageDuration);
	
	        core.util.emitter.off("app--preload-done", this.onPreloadDone);
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
	        core.util.disableMouseWheel(true);
	        core.util.disableTouchMove(true);
	
	        core.dom.html.addClass("is-routing");
	        core.dom.page.addClass("is-inactive");
	
	        core.util.emitter.on("app--preload-done", this.onPreloadDone);
	    },
	
	    /**
	     *
	     * @public
	     * @method changeContent
	     * @param {string} html The responseText as an HTML string
	     * @memberof router
	     * @description Swap the new content into the DOM.
	     *
	     */
	    changeContent: function changeContent(html) {
	        var cached = core.cache.get(core.util.getPageKey());
	
	        if (!cached) {
	            cached = this.parseDoc(html);
	
	            this.cachePage(cached.$object, cached.response);
	        }
	
	        core.dom.page[0].innerHTML = cached.response;
	
	        core.util.emitter.fire("app--analytics-push", cached.$object);
	
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
	    changePageIn: function changePageIn() /* data */{}
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = router;
	module.exports = exports["default"];

/***/ },
/* 29 */
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
	    var Router = __webpack_require__( /*! properjs-router */ 30 ),
	        Controller = __webpack_require__( /*! properjs-controller */ 9 ),
	
	        _router = null,
	        _config = [],
	        _modules = [],
	        _synced = {
	            active: [],
	            inactive: []
	        },
	        _initialized = false,
	        _timeBefore = null,
	        _timeDelay = 600,
	        _eventPrefix = "page-controller-",
	        _currentRoute = null,
	        _isFirstRoute = true,
	        _currentQuery = null,
	        _currentToString = null,
	        _isSamePage = false,
	        _silentMode = false,
	        _silentCallback = null,
	
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
	        function __route() {
	            if ( (Date.now() - _timeBefore) >= _instance._transitionTime ) {
	                _instance.stop();
	
	                handleRouterResponse( data );
	            }
	        }
	
	        _instance.go( __route );
	    },
	
	
	    onPopGetRouter = function ( data ) {
	        onPreGetRouter( data.request );
	    
	        setTimeout( function () {
	            handleRouterResponse( data );
	
	        }, _instance._transitionTime );
	    },
	
	
	    /**
	     * @fires page-controller-router-transition-out
	     * @fires page-controller-router-samepage
	     */
	    onPreGetRouter = function ( data ) {
	        var isSameRequest = (_currentToString === getRouteDataToString( data ));
	
	        if ( isSameRequest ) {
	            fire( "router-samepage", data );
	            _isSamePage = true;
	            return;
	        }
	
	        _timeBefore = Date.now();
	
	        if ( !_isFirstRoute ) {
	            fire( "router-transition-out", data );
	        }
	    },
	
	
	    /**
	     * @fires page-controller-router-refresh-document
	     * @fires page-controller-router-transition-in
	     */
	    handleRouterResponse = function ( res ) {
	        if ( _isSamePage ) {
	            _isSamePage = false;
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
	            syncModules();
	            execOnload();
	
	            fire( "initialized-page", data.response );
	
	        // All other Router sequences fall here
	        } else {
	            // Allow transition duration to take place
	            setTimeout(function () {
	                // 0.1 Sync modules and unload active ones
	                syncModules();
	                execUnload();
	
	                // 0.2 Refresh the document content
	                fire( "router-refresh-document", data.response );
	
	                // 0.3 Sync modules and onload newly active ones
	                syncModules();
	                execOnload();
	
	                // 0.4 Trigger transition of content to come back in
	                fire( "router-transition-in", data );
	
	                // 0.5 Check `silent` mode
	                if ( _silentMode ) {
	                    _silentMode = false;
	
	                    if ( isFunction( _silentCallback ) ) {
	                        _silentCallback( data );
	                        _silentCallback = null;
	                    }
	                }
	
	            }, _instance._transitionTime );
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
	     * <li>transitionTime - Number</li>
	     * <li>routerOptions - Object</li>
	     * </ul>
	     *
	     */
	    var PageController = function ( options ) {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	
	            options = (options || {});
	
	            /**
	             *
	             * The duration of your transition for page content
	             * @memberof PageController
	             * @member _transitionTime
	             * @private
	             *
	             */
	            this._transitionTime = (options.transitionTime || _timeDelay);
	
	            /**
	             *
	             * The flag to anchor to top of page on transitions
	             * @memberof PageController
	             * @member _routerOptions
	             * @private
	             *
	             */
	            this._routerOptions = (options.routerOptions || {
	                async: true,
	                caching: true,
	                preventDefault: true
	            });
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
	        _router = new Router( this._routerOptions );
	
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
	
	    /**
	     *
	     * Returns true if current page path equals slug
	     * Loose match if no second parameter is passed
	     * @memberof PageController
	     * @method is
	     * @param {string} slug The page slug to check
	     * @param {boolean} looseMatch Perform a less strict match
	     * @returns boolean
	     *
	     */
	    PageController.prototype.is = function ( slug, looseMatch ) {
	        var ret = false,
	            reg;
	
	        reg = new RegExp( looseMatch ? ("^" + slug) : ("^" + slug + "$") );
	        ret = reg.test( _currentRoute );
	
	        return ret;
	    };
	
	    /**
	     *
	     * Flushes the current route known as `active`
	     * @memberof PageController
	     * @method flushRoute
	     *
	     */
	    PageController.prototype.flushRoute = function () {
	        _currentToString = "";
	    };
	
	    return PageController;
	
	});

/***/ },
/* 30 */
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
	
	    var PushState = __webpack_require__( /*! properjs-pushstate */ 31 ),
	        MatchRoute = __webpack_require__( /*! properjs-matchroute */ 32 ),
	        matchElement = __webpack_require__( /*! properjs-matchelement */ 33 ),
	        _rSameDomain = new RegExp( document.domain ),
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
	         * Router init constructor method
	         * @memberof Router
	         * @method init
	         * @param {object} options Settings for PushState
	         * <ul>
	         * <li>options.async</li>
	         * <li>options.caching</li>
	         * </ul>
	         *
	         * @fires beforeget
	         * @fires afterget
	         * @fires get
	         *
	         */
	        init: function ( options ) {
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
	            this._pusher = null;
	            
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
	             * Router Store user options
	             * @memberof Router
	             * @member _options
	             * @private
	             *
	             */
	            this._options = options;
	            
	            /**
	             *
	             * Router unique ID
	             * @memberof Router
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
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
	                isReady = false;
	            
	            // Bind GET requests to links
	            if ( document.addEventListener ) {
	                document.addEventListener( "click", function ( e ) {
	                    self._handler( this, e );
	                    
	                }, false );
	                
	            } else if ( document.attachEvent ) {
	                document.attachEvent( "onclick", function ( e ) {
	                    self._handler( this, e );
	                });
	            }
	            
	            /**
	             *
	             * Instantiate PushState
	             *
	             */
	            this._pusher = new PushState( this._options );
	            
	            /**
	             *
	             * @event popstate
	             *
	             */
	            this._pusher.on( "popstate", function ( url, data, status ) {
	                // Hook around browsers firing popstate on pageload
	                if ( isReady ) {
	                    for ( var i = self._callbacks.get.length; i--; ) {
	                        var dat = self._matcher.parse( url, self._callbacks.get[ i ]._routerRoutes );
	                        
	                        if ( dat.matched ) {
	                            break;
	                        }
	                    }
	                    
	                    data = {
	                        route: self._matcher._cleanRoute( url ),
	                        response: data,
	                        request: dat,
	                        status: status || data.status
	                    };
	                    
	                    self._fire( "popget", url, data, status );
	                    
	                } else {
	                    isReady = true;
	                }
	            });
	            
	            // Manually fire first GET
	            // Async this in order to allow .get() to work after instantiation
	            setTimeout(function () {
	                self._pusher.push( window.location.href, function ( response, status ) {
	                    self._fire( "get", window.location.href, response, status );
	                    
	                    isReady = true;
	                });
	                
	            }, _initDelay );
	        },
	        
	        /**
	         *
	         * Add an event listener
	         * Binding "beforeget" and "afterget" is a wrapper
	         * to hook into the PushState classes "beforestate" and "afterstate".
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
	    
	            this._handler( _triggerEl, {
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
	            if ( !this._options.preventDefault ) {
	                return this;
	            }
	            
	            if ( e.preventDefault ) {
	                e.preventDefault();
	                
	            } else {
	                e.returnValue = false;
	            }
	        },
	        
	        /**
	         * GET click event handler
	         * @memberof Router
	         * @method _handler
	         * @param {object} el The event context element
	         * @param {object} e The event object
	         * @private
	         *
	         * @fires get
	         *
	         */
	        _handler: function ( el, e ) {
	            var self = this,
	                elem = (matchElement( el, "a" ) || matchElement( e.target, "a" )),
	                isDomain = elem && _rSameDomain.test( elem.href ),
	                isHashed = elem && elem.href.indexOf( "#" ) !== -1,
	                isMatched = elem && this._matcher.test( elem.href ),
	                isIgnore = elem && elem.className.indexOf( "js-router--ignore" ) !== -1,
	                isMetaKey = elem && e.metaKey;
	            
	            // 0.1 => Ensure url passes MatchRoute config
	            // 0.2 => Ensure url is on the Document's Domain
	            // 0.3 => Ensure url is not a #hash
	            // 0.4 => Ensure the element does not contain a `js-router--ignore` className
	            // 0.5 => Ensure the Event.metaKey is not TRUE - Command+click
	            if ( isMatched && isDomain && !isHashed && !isIgnore && !isMetaKey ) {
	                this._preventDefault( e );
	                
	                for ( var i = this._callbacks.get.length; i--; ) {
	                    var data = this._matcher.parse( elem.href, this._callbacks.get[ i ]._routerRoutes );
	                    
	                    if ( data.matched ) {
	                        this._fire( "preget", elem.href, data );
	                        break;
	                    }
	                }
	                
	                this._pusher.push( elem.href, function ( response, status ) {
	                    self._fire( "get", elem.href, response, status );
	                });
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
	            
	            // Fires basic timing events "beforeget" / "afterget"    
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
/* 31 */
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
	     * Supported events with .on():
	     * <ul>
	     * <li>popstate</li>
	     * <li>beforestate</li>
	     * <li>afterstate</li>
	     * </ul>
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
	         * Expression match #
	         * @memberof PushState
	         * @member _rHash
	         * @private
	         *
	         */
	        _rHash: /#/,
	        
	        /**
	         *
	         * Expression match http/https
	         * @memberof PushState
	         * @member _rHTTPs
	         * @private
	         *
	         */
	        _rHTTPs: /^http[s]?:\/\/.*?\//,
	        
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
	         * <li>options.async</li>
	         * <li>options.caching</li>
	         * <li>options.handle404</li>
	         * <li>options.handle500</li>
	         * </ul>
	         *
	         */
	        init: function ( options ) {
	            var url = window.location.href;
	            
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
	            this._ishashpushed = false;
	            
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
	             * Stored response objects
	             * @memberof PushState
	             * @member _responses
	             * @private
	             *
	             */
	            this._responses = {};
	            
	            /**
	             *
	             * Event callbacks
	             * @memberof PushState
	             * @member _callbacks
	             * @private
	             *
	             */
	            this._callbacks = {};
	            
	            /**
	             *
	             * Flag whether to use ajax
	             * @memberof PushState
	             * @member _async
	             * @private
	             *
	             */
	            this._async = ( options && options.async !== undefined ) ? options.async : true;
	            
	            /**
	             *
	             * Flag whether to use cached responses
	             * @memberof PushState
	             * @member _caching
	             * @private
	             *
	             */
	            this._caching = ( options && options.caching !== undefined ) ? options.caching : true;
	            
	            /**
	             *
	             * Flag whether to handle 404 pages
	             * @memberof PushState
	             * @member _handle404
	             * @private
	             *
	             */
	            this._handle404 = ( options && options.handle404 !== undefined ) ? options.handle404 : true;
	            
	            /**
	             *
	             * Flag whether to handle 500 pages
	             * @memberof PushState
	             * @member _handle500
	             * @private
	             *
	             */
	            this._handle500 = ( options && options.handle500 !== undefined ) ? options.handle500 : true;
	            
	            // Set initial state
	            this._states[ url ] = {
	                uid: this.getUID(),
	                cached: false
	            };
	    
	            // Enable the popstate event
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
	         * @param {function} callback function to call when done
	         *
	         * @fires beforestate
	         * @fires afterstate
	         *
	         */
	        push: function ( url, callback ) {
	            var self = this;
	            
	            // Break on pushing current url
	            if ( url === window.location.href && this._stateCached( url ) ) {
	                callback( this._responses[ url ], 200 );
	                
	                return;
	            }
	            
	            this._fire( "beforestate" );
	            
	            // Break on cached
	            if ( this._stateCached( url ) ) {
	                this._push( url );
	                        
	                callback( this._responses[ url ], 200 );
	            
	            // Push new state    
	            } else {
	                this._states[ url ] = {
	                    uid: this.getUID(),
	                    cached: false
	                };
	                
	                if ( this._async ) {
	                    this._getUrl( url, function ( response, status ) {
	                        self._push( url );
	        
	                        self._fire( "afterstate", response, status );
	                        
	                        if ( typeof callback === "function" ) {
	                            callback( response, status );
	                        }
	                    });
	        
	                } else {
	                    this._push( url );
	    
	                    this._fire( "afterstate" );
	                    
	                    if ( typeof callback === "function" ) {
	                        callback();
	                    }
	                }
	            }
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
	            if ( this._pushable ) {
	                window.history.pushState( this._states[ url ], "", url );
	                
	            } else {
	                this._ishashpushed = true;
	                
	                window.location.hash = url.replace( this._rHTTPs, "" );
	            }
	        },
	        
	        /**
	         *
	         * Check if state has been cached for a url
	         * @memberof PushState
	         * @method _stateCached
	         * @param {string} url The url to check
	         * @private
	         *
	         */
	        _stateCached: function ( url ) {
	            var ret = false;
	            
	            if ( this._caching && this._states[ url ] && this._states[ url ].cached && this._responses[ url ] ) {
	                ret = true;
	            }
	            
	            return ret;
	        },
	        
	        /**
	         *
	         * Cache the response for a url
	         * @memberof PushState
	         * @method _cacheState
	         * @param {string} url The url to cache for
	         * @param {object} response The XMLHttpRequest response object
	         * @private
	         *
	         */
	        _cacheState: function ( url, response ) {
	            if ( this._caching ) {
	                this._states[ url ].cached = true;
	                this._responses[ url ] = response;
	            }
	        },
	        
	        /**
	         *
	         * Request a url with an XMLHttpRequest
	         * @memberof PushState
	         * @method _getUrl
	         * @param {string} url The url to request
	         * @param {function} callback The function to call when done
	         * @private
	         *
	         */
	        _getUrl: function ( url, callback ) {
	            var handler = function ( res, stat ) {
	                    try {
	                        // Cache if option enabled
	                        self._cacheState( url, res );
	                        
	                        if ( typeof callback === "function" ) {
	                            callback( res, (stat ? stat : undefined) );
	                        }
	                        
	                    } catch ( error ) {}
	                },
	                xhr = new XMLHttpRequest(),
	                self = this;
	            
	            xhr.open( "GET", url, true );
	            
	            xhr.onreadystatechange = function ( e ) {
	                if ( this.readyState === 4 ) {
	                    if ( this.status === 200 ) {
	                        handler( this, 200 );
	                        
	                    } else if ( this.status === 404 && self._handle404 ) {
	                        handler( this, 404 );
	                        
	                    } else if ( this.status === 500 && self._handle500 ) {
	                        handler( this, 500 );
	                    }
	                }
	            };
	            
	            xhr.send();
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
	                    var url = window.location.href.replace( self._rHash, "/" );
	                    
	                    if ( self._stateCached( url ) ) {
	                        self._fire( "popstate", url, self._responses[ url ] );
	                        
	                    } else {
	                        self._getUrl( url, function ( response, status ) {
	                            self._fire( "popstate", url, response, status );
	                        });
	                    }
	                };
	    
	            this._enabled = true;
	            
	            if ( this._pushable ) {
	                window.addEventListener( "popstate", function ( e ) {
	                    handler();
	                    
	                }, false );
	                
	            } else if ( this._hashable ) {
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
/* 32 */
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
	
	    var paramalama = __webpack_require__( /*! paramalama */ 24 ),
	
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
/* 33 */
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
/* 34 */
/*!***************************!*\
  !*** ./js_src/animate.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ./core */ 4);
	
	var core = _interopRequireWildcard(_core);
	
	var $_jsElements = null;
	var _isActive = false;
	
	/**
	 *
	 * @public
	 * @module animate
	 * @description Handle a site-wide default animation style for elements in view.
	 *
	 */
	var animate = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof animate
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        core.log("animate initialized");
	
	        core.util.emitter.on("app--update-animate", this.onUpdateAnimate.bind(this));
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof animate
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
	     * @memberof animate
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        _isActive = true;
	
	        core.util.emitter.on("app--scroll", updateAnimate);
	        core.util.emitter.on("app--resize", updateAnimate);
	
	        updateAnimate();
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof animate
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
	     * @memberof animate
	     * @description Method performs cleanup after this module. Remmoves events, null vars etc...
	     *
	     */
	    teardown: function teardown() {
	        $_jsElements = null;
	        _isActive = false;
	    },
	
	    /**
	     *
	     * @public
	     * @method getElements
	     * @memberof animate
	     * @description Method queries DOM for this modules node.
	     * @returns {number}
	     *
	     */
	    getElements: function getElements() {
	        $_jsElements = core.dom.body.find(".js-animate");
	
	        return $_jsElements.length;
	    },
	
	    /**
	     *
	     * @public
	     * @method onUpdateAnimate
	     * @memberof animate
	     * @description Handle updating node list and activating elements.
	     *
	     */
	    onUpdateAnimate: function onUpdateAnimate() {
	        this.getElements();
	
	        if (!_isActive) {
	            this.onload();
	        }
	
	        updateAnimate();
	    }
	};
	
	/**
	 *
	 * @private
	 * @method updateAnimate
	 * @memberof animate
	 * @description Update animation nodes.
	 *
	 */
	var updateAnimate = function updateAnimate() {
	    var $elems = $_jsElements;
	    var $elem = null;
	    var i = $elems.length;
	
	    for (i; i--;) {
	        $elem = $elems.eq(i);
	
	        if (core.util.isElementInViewport($elem[0])) {
	            $elem.addClass("is-active");
	        } else {
	            $elem.removeClass("is-active");
	        }
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = animate;
	module.exports = exports["default"];

/***/ },
/* 35 */
/*!***************************!*\
  !*** ./js_src/overlay.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ./core */ 4);
	
	var core = _interopRequireWildcard(_core);
	
	var _isActive = false;
	var _transTime = core.util.getTransitionDuration(core.dom.overlay.element[0]);
	
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
	
	    open: function open() {
	        _isActive = true;
	
	        core.dom.html.addClass("is-overlay-active");
	        core.dom.page.append(core.dom.overlay.element);
	
	        setTimeout(function () {
	            return core.dom.overlay.element.addClass("is-active");
	        }, 10);
	    },
	
	    close: function close() {
	        core.dom.overlay.element.removeClass("is-active");
	
	        setTimeout(function () {
	            _isActive = false;
	
	            core.dom.html.removeClass("is-overlay-active");
	            core.dom.overlay.element.detach().removeClass("is-intro");
	        }, _transTime);
	    },
	
	    setTitle: function setTitle(text) {
	        core.dom.overlay.elementTitle.html(text);
	    },
	
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
/* 36 */
/*!***************************!*\
  !*** ./js_src/Project.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	//import $ from "js_libs/jquery/dist/jquery";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _core = __webpack_require__(/*! ./core */ 4);
	
	var core = _interopRequireWildcard(_core);
	
	var _router = __webpack_require__(/*! ./router */ 28);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _overlay = __webpack_require__(/*! ./overlay */ 35);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	/**
	 *
	 * @public
	 * @class Project
	 * @classdesc Load the Project collection into its container
	 *            options { url, onLoad? }
	 *
	 */
	
	var Project = (function () {
	    function Project(app, options) {
	        _classCallCheck(this, Project);
	
	        this.app = app;
	        this.opts = options;
	        this.$plates = null;
	        this.$images = null;
	        this.isLoaded = false;
	        this.isEnded = false;
	
	        if (this.opts.onLoad) {
	            this.loadCollection();
	        } else {
	            this.initCollection();
	        }
	
	        core.log("Project", this);
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    _createClass(Project, [{
	        key: "destroy",
	        value: function destroy() {
	            this.close();
	        }
	    }, {
	        key: "cycleAnimation",
	        value: function cycleAnimation() {
	            this.onUpdateEmitter();
	
	            core.util.emitter.go(this._onUpdateEmitter);
	        }
	    }, {
	        key: "initCollection",
	        value: function initCollection() {
	            this._onUpdateEmitter = this.onUpdateEmitter.bind(this);
	            this.$plates = core.dom.project.element.find(".js-project-plate");
	            this.cycleAnimation();
	        }
	    }, {
	        key: "loadCollection",
	        value: function loadCollection() {
	            var dataType = { dataType: "html" };
	            var format = { format: "full", nocache: true };
	            var cached = core.cache.get(this.opts.url);
	
	            this.open();
	
	            _router2["default"].push(this.opts.url, function () {});
	
	            if (cached) {
	                this.handleCollection(cached);
	            } else {
	                core.api.collection(this.opts.url, format, dataType).done(this.onLoadCollection.bind(this));
	            }
	        }
	
	        // You are mutating your cache references here.
	    }, {
	        key: "handleCollection",
	        value: function handleCollection(cache) {
	            var _this = this;
	
	            var $project = cache.$object.find(".js-project");
	
	            this.$plates = $project.find(".js-project-plate");
	            this.$images = this.$plates.find(".js-lazy-image");
	
	            core.dom.project.elementNode.html(this.$plates);
	
	            core.images.handleImages(this.$images, function () {
	                if (_overlay2["default"].isActive()) {
	                    _overlay2["default"].close();
	                }
	
	                if (typeof _this.opts.onLoad === "function") {
	                    _this.opts.onLoad();
	                }
	
	                _this._onUpdateEmitter = _this.onUpdateEmitter.bind(_this);
	                _this.cycleAnimation();
	            });
	        }
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
	    }, {
	        key: "updatePosition",
	        value: function updatePosition() {
	            var scrollMaxY = core.dom.project.element[0].scrollHeight - window.innerHeight;
	            var scrollCurrY = core.dom.project.element[0].scrollTop;
	            var calcBuffer = 10;
	
	            //console.log( scrollMaxY, scrollCurrY );
	
	            if (scrollCurrY >= scrollMaxY - calcBuffer && !this.isEnded) {
	                core.log("Project Ended");
	
	                this.isEnded = true;
	
	                core.dom.project.element.addClass("is-inactive");
	
	                setTimeout(function () {
	                    core.util.emitter.fire("app--project-ended");
	                }, core.dom.project.elementTransitionDuration);
	            }
	        }
	    }, {
	        key: "onUpdateEmitter",
	        value: function onUpdateEmitter() {
	            this.updatePlates();
	            this.updatePosition();
	        }
	    }, {
	        key: "onLoadCollection",
	        value: function onLoadCollection(response) {
	            var cache = this.app.router.parseDoc(response);
	
	            this.handleCollection(cache);
	
	            // @todo:
	            // Disable cache on Projects for now
	            // You should circle back to this one later...
	            // core.cache.set( this.opts.url, cache );
	
	            core.util.emitter.fire("app--analytics-push", cache.$object);
	        }
	    }, {
	        key: "open",
	        value: function open() {
	            core.dom.html.addClass("is-neverflow is-project-active");
	            core.dom.page.append(core.dom.project.element);
	
	            setTimeout(function () {
	                return core.dom.project.element.addClass("is-active");
	            }, 100);
	        }
	    }, {
	        key: "close",
	        value: function close() {
	            core.util.emitter.stop();
	
	            core.dom.project.element.removeClass("is-active is-inactive");
	            core.dom.html.removeClass("is-neverflow");
	
	            setTimeout(function () {
	                core.dom.html.removeClass("is-project-active");
	                core.dom.project.element.detach();
	                core.dom.project.elementNode.empty();
	            }, core.dom.project.elementTransitionDuration);
	        }
	    }]);
	
	    return Project;
	})();
	
	exports["default"] = Project;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=App.js.map
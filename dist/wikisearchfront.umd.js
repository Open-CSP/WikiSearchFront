(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wikisearchfront"] = factory(require("vue"));
	else
		root["wikisearchfront"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0075":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3b7e95c9_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb7e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3b7e95c9_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3b7e95c9_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0102":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("4625");
var aCallable = __webpack_require__("59ed");
var NATIVE_BIND = __webpack_require__("40d5");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "04f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("1212");
var fails = __webpack_require__("d039");
var globalThis = __webpack_require__("cfe9");

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "05a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCalendarYear_vue_vue_type_style_index_0_id_65438da0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d249");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCalendarYear_vue_vue_type_style_index_0_id_65438da0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCalendarYear_vue_vue_type_style_index_0_id_65438da0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "08fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetDateRange_vue_vue_type_style_index_0_id_3edc6efa_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e224");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetDateRange_vue_vue_type_style_index_0_id_3edc6efa_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetDateRange_vue_vue_type_style_index_0_id_3edc6efa_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0c2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_651d066f_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3d9f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_651d066f_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_651d066f_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "0f33":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var fails = __webpack_require__("d039");

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = globalThis.RegExp;

var FLAGS_GETTER_IS_CORRECT = !fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

module.exports = { correct: FLAGS_GETTER_IS_CORRECT };


/***/ }),

/***/ "1212":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var userAgent = __webpack_require__("b5db");

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "13a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagers_vue_vue_type_style_index_0_id_075113c4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("54b8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagers_vue_vue_type_style_index_0_id_075113c4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagers_vue_vue_type_style_index_0_id_075113c4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("1212");
var IS_NODE = __webpack_require__("9adc");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var fails = __webpack_require__("d039");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "15a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCalendar_vue_vue_type_style_index_0_id_f48421a4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6e0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCalendar_vue_vue_type_style_index_0_id_f48421a4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCalendar_vue_vue_type_style_index_0_id_f48421a4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "16b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortOrder_vue_vue_type_style_index_0_id_3b08bad2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa70");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortOrder_vue_vue_type_style_index_0_id_3b08bad2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortOrder_vue_vue_type_style_index_0_id_3b08bad2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "16d8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "19aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__("3a9b");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__("7234");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "2061":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var isArrayIteratorMethod = __webpack_require__("e95a");
var lengthOfArrayLike = __webpack_require__("07fa");
var isPrototypeOf = __webpack_require__("3a9b");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "258d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "271a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__("cb2d");
var uncurryThis = __webpack_require__("e330");
var toString = __webpack_require__("577e");
var validateArgumentsLength = __webpack_require__("d6d6");

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var getMethod = __webpack_require__("dc4a");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "2ba4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2baa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Should throw an error on invalid iterator
// https://issues.chromium.org/issues/336839115
module.exports = function (methodName, argument) {
  // eslint-disable-next-line es/no-iterator -- required for testing
  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  if (method) try {
    method.call({ next: null }, argument).next();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "2de3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2f62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export Store */
/* unused harmony export createLogger */
/* unused harmony export createNamespacedHelpers */
/* unused harmony export install */
/* unused harmony export mapActions */
/* unused harmony export mapGetters */
/* unused harmony export mapMutations */
/* unused harmony export mapState */
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((false)) {}

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((false)) {}
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((false)) {}

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((false)) {}
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((false)) {}

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((false)) {}
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((false)) {}
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {}
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((false)) {}
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((false)) {}
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((false)) {}
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((false)) {}
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((false)) {}
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("production" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((false)) {}
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((false)) {}
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((false)) {}
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((false)) {}

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((false)) {}
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (false) {}
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (false) {}
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (false) {}
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {}
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (false) {}
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {}
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* harmony default export */ __webpack_exports__["a"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "3511":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5df");
var getMethod = __webpack_require__("dc4a");
var isNullOrUndefined = __webpack_require__("7234");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "35c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PillsSelected_vue_vue_type_style_index_0_id_5a855c74_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2de3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PillsSelected_vue_vue_type_style_index_0_id_5a855c74_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PillsSelected_vue_vue_type_style_index_0_id_5a855c74_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var isArray = __webpack_require__("e8b5");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3d9f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "40d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_e6e3f082_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7eee");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_e6e3f082_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_e6e3f082_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "4167":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "41c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTools_vue_vue_type_style_index_0_id_08ea06a1_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("258d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTools_vue_vue_type_style_index_0_id_08ea06a1_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTools_vue_vue_type_style_index_0_id_08ea06a1_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ "45a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiTemplate_vue_vue_type_style_index_0_id_4710ef84_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a51c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiTemplate_vue_vue_type_style_index_0_id_4710ef84_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiTemplate_vue_vue_type_style_index_0_id_4710ef84_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4625":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__("c6b6");
var uncurryThis = __webpack_require__("e330");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "46c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ "4754":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "48f2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "492a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_2e547cd8_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0102");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_2e547cd8_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_2e547cd8_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4d91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_5982340c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9aeb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_5982340c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_5982340c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4fb1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5494":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var uncurryThis = __webpack_require__("e330");
var defineBuiltInAccessor = __webpack_require__("edd0");

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ }),

/***/ "54b8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5550":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetFilter_vue_vue_type_style_index_0_id_3609d37b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cd33");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetFilter_vue_vue_type_style_index_0_id_3609d37b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetFilter_vue_vue_type_style_index_0_id_3609d37b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var store = __webpack_require__("c6cd");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5df");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5b81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var isRegExp = __webpack_require__("44e7");
var toString = __webpack_require__("577e");
var getMethod = __webpack_require__("dc4a");
var getRegExpFlags = __webpack_require__("90d8");
var getSubstitution = __webpack_require__("0cb2");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, position, replacement;
    var endOfLastMatch = 0;
    var result = '';
    if (isObject(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) return call(replacer, searchValue, O, replaceValue);
      if (IS_PURE && IS_REG_EXP) return replace(toString(O), searchValue, replaceValue);
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = indexOf(string, searchString);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ "64bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDialog_vue_vue_type_style_index_0_id_b74582c0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7e65");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDialog_vue_vue_type_style_index_0_id_b74582c0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDialog_vue_vue_type_style_index_0_id_b74582c0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6964":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__("cb2d");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__("cdce");
var globalThis = __webpack_require__("cfe9");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6a09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_id_972cfd0a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("16d8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_id_972cfd0a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_id_972cfd0a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6e0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7234":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "767d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetSwitch_vue_vue_type_style_index_0_id_5940e75c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99a1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetSwitch_vue_vue_type_style_index_0_id_5940e75c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetSwitch_vue_vue_type_style_index_0_id_5940e75c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7839":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7959":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var definePropertiesModule = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "7d54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var iterate = __webpack_require__("2266");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorDirect = __webpack_require__("46c4");
var iteratorClose = __webpack_require__("2a62");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("f99f");

var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  forEach: function forEach(fn) {
    anObject(this);
    try {
      aCallable(fn);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);

    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ "7e65":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7eee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8097":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_4aa525f3_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("88ae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_4aa525f3_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_4aa525f3_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "8558":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Bun, Deno -- detection */
var globalThis = __webpack_require__("cfe9");
var userAgent = __webpack_require__("b5db");
var classof = __webpack_require__("c6b6");

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();


/***/ }),

/***/ "858b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetCombobox_vue_vue_type_style_index_0_id_43d58326_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("48f2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetCombobox_vue_vue_type_style_index_0_id_43d58326_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetCombobox_vue_vue_type_style_index_0_id_43d58326_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "88a7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__("cb2d");
var uncurryThis = __webpack_require__("e330");
var toString = __webpack_require__("577e");
var validateArgumentsLength = __webpack_require__("d6d6");

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ "88ae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8e87":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateInput_vue_vue_type_style_index_0_id_632046fe_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe9a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateInput_vue_vue_type_style_index_0_id_632046fe_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateInput_vue_vue_type_style_index_0_id_632046fe_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "90d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var hasOwn = __webpack_require__("1a2d");
var isPrototypeOf = __webpack_require__("3a9b");
var regExpFlagsDetection = __webpack_require__("0f33");
var regExpFlagsGetterImplementation = __webpack_require__("ad6d");

var RegExpPrototype = RegExp.prototype;

module.exports = regExpFlagsDetection.correct ? function (it) {
  return it.flags;
} : function (it) {
  return (!regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, 'flags'))
    ? call(regExpFlagsGetterImplementation, it)
    : it.flags;
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "910d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorDirect = __webpack_require__("46c4");
var createIteratorProxy = __webpack_require__("c5cc");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var IS_PURE = __webpack_require__("c430");
var iteratorClose = __webpack_require__("2a62");
var iteratorHelperThrowsOnInvalidIterator = __webpack_require__("2baa");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("f99f");

var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('filter', function () { /* empty */ });
var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('filter', TypeError);

var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  filter: function filter(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);

    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9485":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var iterate = __webpack_require__("2266");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorDirect = __webpack_require__("46c4");
var iteratorClose = __webpack_require__("2a62");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("f99f");
var apply = __webpack_require__("2ba4");
var fails = __webpack_require__("d039");

var $TypeError = TypeError;

// https://bugs.webkit.org/show_bug.cgi?id=291651
var FAILS_ON_INITIAL_UNDEFINED = fails(function () {
  // eslint-disable-next-line es/no-iterator-prototype-reduce, es/no-array-prototype-keys, array-callback-return -- required for testing
  [].keys().reduce(function () { /* empty */ }, undefined);
});

var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError('reduce', $TypeError);

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    try {
      aCallable(reducer);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    if (reduceWithoutClosingOnEarlyError) {
      return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
    }
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99a1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var getIteratorMethod = __webpack_require__("35a1");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "9adc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ENVIRONMENT = __webpack_require__("8558");

module.exports = ENVIRONMENT === 'NODE';


/***/ }),

/***/ "9aeb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a4c3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a51c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "aa70":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ab43":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorDirect = __webpack_require__("46c4");
var createIteratorProxy = __webpack_require__("c5cc");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var iteratorClose = __webpack_require__("2a62");
var iteratorHelperThrowsOnInvalidIterator = __webpack_require__("2baa");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("f99f");
var IS_PURE = __webpack_require__("c430");

var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ });
var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('map', TypeError);

var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  map: function map(mapper) {
    anObject(this);
    try {
      aCallable(mapper);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);

    return new IteratorProxy(getIteratorDirect(this), {
      mapper: mapper
    });
  }
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var defineBuiltIn = __webpack_require__("cb2d");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "b42e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b59b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b5db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var iteratorClose = __webpack_require__("2a62");

module.exports = function (iters, kind, value) {
  for (var i = iters.length - 1; i >= 0; i--) {
    if (iters[i] === undefined) continue;
    try {
      value = iteratorClose(iters[i].iterator, kind, value);
    } catch (error) {
      kind = 'throw';
      value = error;
    }
  }
  if (kind === 'throw') throw value;
  return value;
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c07c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c430":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = false;


/***/ }),

/***/ "c5cc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var create = __webpack_require__("7c73");
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIns = __webpack_require__("6964");
var wellKnownSymbol = __webpack_require__("b622");
var InternalStateModule = __webpack_require__("69f3");
var getMethod = __webpack_require__("dc4a");
var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var createIterResultObject = __webpack_require__("4754");
var iteratorClose = __webpack_require__("2a62");
var iteratorCloseAll = __webpack_require__("b64e");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var NORMAL = 'normal';
var THROW = 'throw';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (state.inner) try {
        iteratorClose(state.inner.iterator, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (state.openIters) try {
        iteratorCloseAll(state.openIters, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (iterator) iteratorClose(iterator, NORMAL);
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__("c430");
var globalThis = __webpack_require__("cfe9");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.45.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c972":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_0a0941b4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7959");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_0a0941b4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_0a0941b4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var isObject = __webpack_require__("861d");

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cd33":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cdce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var isCallable = __webpack_require__("1626");

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "cfe9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d012":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ "d0a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_style_index_0_id_68661a51_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b59b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_style_index_0_id_68661a51_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_style_index_0_id_68661a51_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d15b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d1ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_id_91951cbc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d15b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_id_91951cbc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_id_91951cbc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d249":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d625":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetCheckbox_vue_vue_type_style_index_0_id_345bc7fc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4fb1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetCheckbox_vue_vue_type_style_index_0_id_345bc7fc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetCheckbox_vue_vue_type_style_index_0_id_345bc7fc_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d6d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");
var isNullOrUndefined = __webpack_require__("7234");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "dea9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTemplate_vue_vue_type_style_index_0_id_f1bc9938_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4167");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTemplate_vue_vue_type_style_index_0_id_f1bc9938_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTemplate_vue_vue_type_style_index_0_id_f1bc9938_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e224":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "e9f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var globalThis = __webpack_require__("cfe9");
var anInstance = __webpack_require__("19aa");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var getPrototypeOf = __webpack_require__("e163");
var defineBuiltInAccessor = __webpack_require__("edd0");
var createProperty = __webpack_require__("8418");
var fails = __webpack_require__("d039");
var hasOwn = __webpack_require__("1a2d");
var wellKnownSymbol = __webpack_require__("b622");
var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var DESCRIPTORS = __webpack_require__("83ab");
var IS_PURE = __webpack_require__("c430");

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ "eb7e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "edd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__("13d2");
var defineProperty = __webpack_require__("9bf2");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "eed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pill_vue_vue_type_style_index_0_id_e040c6b4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4c3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pill_vue_vue_type_style_index_0_id_e040c6b4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pill_vue_vue_type_style_index_0_id_e040c6b4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f000":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetRangeSlider_vue_vue_type_style_index_0_id_e6f396c4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c07c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetRangeSlider_vue_vue_type_style_index_0_id_e6f396c4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacetRangeSlider_vue_vue_type_style_index_0_id_e6f396c4_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f99f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");

// https://github.com/tc39/ecma262/pull/3467
module.exports = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};


/***/ }),

/***/ "fafc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultProperty_vue_vue_type_style_index_0_id_4de934b3_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2061");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultProperty_vue_vue_type_style_index_0_id_4de934b3_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultProperty_vue_vue_type_style_index_0_id_4de934b3_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=3b7e95c9
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "wikisearch",
    class: [_vm.selectedClass, _vm.themeClass, _vm.sortClass]
  }, [_c('search-input'), _vm.showElement ? _c('pills-selected') : _vm._e(), _vm.settings['sort options'] && _vm.showElement ? _c('sort-order', {
    attrs: {
      "settings": _vm.settings
    }
  }) : _vm._e(), _c('div', {
    staticClass: "wikisearch-filters",
    class: {
      'wikisearch-filters__hidden': _vm.openFilters
    }
  }, [_c('wikisearch-button', {
    staticClass: "wssearch-button--hide-filters",
    attrs: {
      "icon": 'close',
      "type": 'icon'
    },
    on: {
      "click": function ($event) {
        _vm.openFilters = true;
      }
    }
  }), _vm.settings.layout === 'calendar' ? _c('wikisearch-calendar-tools', {
    attrs: {
      "outertime": _vm.$store.state.calendarDate
    }
  }) : _vm._e(), _vm.state.aggs ? _c('div', {
    staticClass: "wikisearch-filters__wrapper"
  }, _vm._l(_vm.filters, function (filterObject, name) {
    return _c(filterObject.component, {
      key: name,
      tag: "component",
      attrs: {
        "translation": _vm.facetSettings[name].translation,
        "query": _vm.facetSettings[name].query,
        "query-text": _vm.facetSettings[name].text,
        "query-data": _vm.facetSettings[name].data,
        "type": _vm.facetSettings[name].type,
        "settings": _vm.facetSettings[name],
        "buckets": filterObject.buckets || [],
        "label": _vm.facetSettings[name].label,
        "valueLabels": _vm.facetSettings[name].valueLabels,
        "name": name
      }
    });
  }), 1) : _vm._e()], 1), _c('div', {
    staticClass: "wikisearch-total"
  }, [_c('b', {
    staticClass: "wikisearch-total__nr"
  }, [_c('b', [_vm._v(_vm._s(_vm.resultCountText))])])]), _c('div', {
    staticClass: "wikisearch-action"
  }, [_vm.settings.action ? _c('wikisearch-checkbox', {
    staticClass: "wikisearch-action__checkbox",
    on: {
      "change": _vm.selectAll
    }
  }) : _vm._e(), _vm.settings.action ? _c('wikisearch-button', {
    staticClass: "wikisearch-action__button",
    attrs: {
      "label": _vm.settings.action.label,
      "type": _vm.state.selectedResults.length ? 'progressive' : ''
    },
    on: {
      "click": _vm.doAction
    }
  }) : _vm._e()], 1), _c('div', {
    staticClass: "wikisearch-results"
  }, [_c(_vm.resultDisplay, {
    tag: "component"
  }), _vm.showElement ? _c('wikisearch-pagers', {
    attrs: {
      "size": _vm.state.size,
      "from": _vm.state.from,
      "total": _vm.state.total.value,
      "settings": _vm.settings
    }
  }) : _vm._e()], 1), _c('wikisearch-button', {
    staticClass: "wssearch-button--show-filters",
    attrs: {
      "icon": 'settings',
      "label": 'Filters',
      "type": 'progressive'
    },
    on: {
      "click": function ($event) {
        _vm.openFilters = false;
      }
    }
  })], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=3b7e95c9

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__("e9f5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map = __webpack_require__("ab43");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__("910d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__("7d54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__("88a7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__("271a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__("5494");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/utilities/dateUtils.js
/**
 * create julian date
 *
 * @param {String} date formatted date YYYY-MM-DD
 * @returns {Number}    julian date timestamp
 */
function createDate(date) {
  return parseInt(window.moment(date) / 86400000 + 2440587.5, 10);
}

/**
 * create human readable date
 *
 * @param {Date} date a date object
 * @returns {String}  formatted date YYYY-M-D
 */
function readableDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

// CONCATENATED MODULE: ./src/utilities/elastic.js
const prepareQuery = term => term.trim();
/* harmony default export */ var elastic = (prepareQuery);
// CONCATENATED MODULE: ./src/store.js












external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vuex_esm["a" /* default */]);
const {
  moment
} = window;

// eslint-disable-next-line no-undef
const mediaWikiValues = mw.config.values;

/**
 * create url parameter string from state
 *
 * @param {Object} state vuex state object
 * @returns {String}     url string
 */
function createUrlString(state) {
  const url = new URL(window.location.href);
  const {
    searchParams
  } = url;
  if (state.from > 0) {
    searchParams.set('offset', state.from);
  } else {
    searchParams.delete('offset');
  }
  if (state.term) {
    searchParams.set('term', state.term);
  } else {
    searchParams.delete('term');
  }
  if (mediaWikiValues.WikiSearchFront.config.settings['sort options']) {
    if (state.sortOrder && state.sortOrderType !== 'score') {
      searchParams.set('order', state.sortOrder);
    } else {
      searchParams.delete('order');
    }
    if (state.sortOrderType && state.sortOrderType !== 'score') {
      searchParams.set('ordertype', state.sortOrderType);
    } else {
      searchParams.delete('ordertype');
    }
  }
  if (!state.selected.length) {
    searchParams.delete('filters');
  } else {
    const filtersUrl = state.selected.map(item => {
      let out;
      if (item.range) {
        if (state.realDates[item.value]) {
          out = `range_${item.value}_${item.key}^^${state.realDates[item.value].from}_${state.realDates[item.value].to}`;
        } else {
          out = `range_${item.value}_${item.key}^^${item.range.gte}_${item.range.lte}`;
        }
      } else if (item.type && item.type === 'query') {
        out = `query_${item.key}^^${item.value}`;
      } else {
        out = `${item.key}^^${item.value}`;
      }
      return out;
    }).join('~~');
    searchParams.set('filters', filtersUrl);
  }
  return url;
}

/**
 * get state from url parameters
 *
 * @param {Object} state         vuex state object
 * @param {Object} facetSettings settings retrieved from config
 * @returns {Object}             states to set on vuex store
 */
function getStateFromUrl(state, facetSettings) {
  const output = {};
  const urlParams = new URLSearchParams(window.location.search);
  const term = urlParams.get('term');
  const offset = urlParams.get('offset');
  const filters = urlParams.get('filters');
  const orderType = urlParams.get('ordertype');
  const order = urlParams.get('order');
  if (term) {
    output.term = term;
  }
  if (order) {
    output.sortOrder = order;
  }
  if (orderType) {
    output.sortOrderType = orderType;
  }
  if (offset) {
    output.from = parseInt(offset, 10);
  }
  if (filters) {
    const urlFiltersOutput = [];
    const filterOptions = {
      range: (_, values, secondKey, lastKey) => {
        const [from, to] = values.split('_');
        let gte = from;
        let lte = to;
        if (secondKey === 'customrange') {
          output.realDates = state.realDates;
          output.realDates.customrange = {
            from,
            to
          };
        }
        const calPropName = mediaWikiValues.WikiSearchFront.config.settings.calendar ? mediaWikiValues.WikiSearchFront.config.settings.calendar.name : 'Modification date';
        if (secondKey === 'customrange' || secondKey === 'date' || lastKey === 'Modification date' || lastKey === calPropName || facetSettings[lastKey].type === 'date') {
          output.rangeFrom = createDate(from);
          output.rangeTo = createDate(to);
          gte = output.rangeFrom;
          lte = output.rangeTo;
        }
        urlFiltersOutput.push({
          key: lastKey,
          value: secondKey,
          range: {
            gte,
            lte
          }
        });
      },
      query: (_, values, secondKey) => {
        urlFiltersOutput.push({
          value: values,
          key: secondKey,
          type: 'query'
        });
      },
      default: (keys, values) => {
        urlFiltersOutput.push({
          value: values,
          key: keys
        });
      }
    };
    filters.split('~~').forEach(filter => {
      const [keys, values] = filter.split('^^');
      const [firstKey, secondKey, lastKey] = keys.split('_');
      (filterOptions[firstKey] || filterOptions.default)(keys, values, secondKey, lastKey);
    });
    output.selected = urlFiltersOutput;
  }
  return output;
}

/**
 * create date ranges for date facets
 *
 * @param {Date} today
 * @returns {Object} ranges
 */
function createDateRanges(today, facetSettings) {
  // today
  const to = moment().format('YYYY-MM-DD');
  // human readable dates
  const realDateRanges = {
    'Last Week': {
      from: moment().subtract(7, 'days').format('YYYY-MM-DD'),
      to
    },
    'Last Month': {
      from: moment().subtract(1, 'months').format('YYYY-MM-DD'),
      to
    },
    'Last Quarter': {
      from: moment().subtract(1, 'quarter').format('YYYY-MM-DD'),
      to
    }
  };
  let max = 5;
  Object.keys(facetSettings).forEach(key => {
    if (facetSettings[key].display === 'date') {
      max = facetSettings[key].max;
    }
  });
  // 5 years or max setting
  for (let i = 0; i < max; i += 1) {
    const key = today.getFullYear() - i;
    realDateRanges[key] = {
      from: `${key}-01-01`,
      to: `${key + 1}-01-01`
    };
  }
  // convert to julian dates
  const dateRanges = Object.entries(realDateRanges).map(([key, value]) => ({
    key: key.toString(),
    from: createDate(value.from),
    to: createDate(value.to)
  }));
  const facetRanges = [];
  Object.keys(facetSettings).forEach(key => {
    if (facetSettings[key].display === 'date') {
      facetRanges.push({
        type: 'range',
        ranges: dateRanges,
        property: key
      });
    }
  });
  return {
    facet: facetRanges,
    real: realDateRanges
  };
}

/**
 * create ranges for range facets
 *
 * @param {Object} facetSettings settings retrieved from config
 * @param {Object} ranges        range objects
 * @param {Date} today           date today
 */
function createMoreRanges(facetSettings, ranges, today) {
  const rangeProp = [];
  const {
    facet,
    real
  } = ranges;
  Object.keys(facetSettings).forEach(key => {
    const newSetting = facetSettings[key];
    if (newSetting.display === 'range') {
      newSetting.name = key;
      rangeProp.push(newSetting);
    }
  });
  if (rangeProp.length > 0) {
    rangeProp.forEach(prop => {
      const max = parseInt(prop.max, 10);
      const step = parseInt(prop.step, 10);
      const moreRanges = [];
      if (prop.type === 'date') {
        for (let x = 0; x < max; x += 1) {
          const key = today.getFullYear() - x;
          real[key] = {
            from: `${key}-01-01`,
            to: `${key + 1}-01-01`
          };
          moreRanges.push({
            key: key.toString(),
            from: createDate(`${key}-01-01`),
            to: createDate(`${key + 1}-01-01`)
          });
        }
      } else {
        for (let i = 1; i < max + 1; i += step) {
          moreRanges.push({
            from: i,
            to: max + 1,
            key: i + step - 1
          });
        }
      }
      facet.push({
        type: 'range',
        ranges: moreRanges,
        property: prop.name
      });
    });
  }
  return [facet, real];
}

/**
 * gets selected filters for sending to api
 *
 * @param {Object} state vuex state object
 * @returns {Array}      active filters array for api query
 */
function getSelection(state) {
  const selection = {};
  const selected = [];
  state.selected.forEach(element => {
    const settings = mediaWikiValues.WikiSearchFront.config.facetSettings[element.key];
    const out = element;
    if (settings !== null && settings !== void 0 && settings.not) {
      out.negate = true;
    }
    const value = (element === null || element === void 0 ? void 0 : element.type) === 'query' ? elastic(out.value) : out.value;
    if (settings && settings.logic && settings.logic === 'or') {
      if (!selection[element.key]) {
        selection[element.key] = [value];
      } else {
        selection[element.key].push(value);
      }
    } else if (out.value !== 'unset') {
      selected.push({
        ...out,
        value
      });
    }
  });
  Object.keys(selection).forEach(key => {
    selected.push({
      key,
      value: selection[key]
    });
  });
  const switchValues = Object.entries(mediaWikiValues.WikiSearchFront.config.facetSettings).filter(([key, filter]) => filter.display === 'switch' && (state.switched[key] !== 'unset' || filter[filter.default] !== 'unset')).map(([key, filter]) => {
    const out = {
      key,
      value: state.switched[key] || filter[filter.default]
    };
    if (filter.not) {
      out.negate = true;
    }
    return out;
  });
  return [...selected, ...switchValues];
}
function setInitialSelection(state) {
  if (mediaWikiValues.WikiSearchFront.config.settings.selected) {
    state.selected = mediaWikiValues.WikiSearchFront.config.settings.selected.split(';').map(item => {
      const [key, value] = item.split(':');
      return {
        key,
        value
      };
    });
  }
}

/**
 * The facetSettings contain categories of filters,
 * each containing a valueLabels property.
 * This function splits the valueLabels string which looks like this:
 *
 * "originalLabel1^^newLabel1~~originalLabel2^^newLabel2"
 *
 * and creates an object with the originalLabel as a key and newLabel as a value.
 * It only adds it to the object when a valueLabels property is present.
 *
 * The return object's structure is as follows:
 * {
 *   facetCategory1: {
 *     originalLabel1 (key): newLabel1 (string value),
 *   },
 *  ... etc
 * }
 * @param {Object} facetSettings
 * @returns {Object} valueLabelMap
 */
function getValueLabelMap(facetSettings) {
  const valueLabelMap = {};
  Object.keys(facetSettings).forEach(key => {
    if (facetSettings[key].valueLabels) {
      const valueLabelsArray = facetSettings[key].valueLabels.split('~~').map(item => {
        const [value, label] = item.split('^^');
        return {
          value,
          label
        };
      });
      const valueLabelsObject = {};
      valueLabelsArray.forEach(item => {
        valueLabelsObject[item.value] = item.label;
      });
      valueLabelMap[key] = valueLabelsObject;
    }
  });
  console.log('Facet settings:', facetSettings);
  console.log('Value label map:', valueLabelMap);
  return valueLabelMap;
}

/**
 * vuex plugin that runs on all store mutations
 *
 * @param {Object} store vuex store object
 */
const updateStore = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'START' || mutation.type === 'SET_TERM' || mutation.type === 'CLEAR_ALL' || mutation.type === 'SET_FROM' || mutation.type === 'SET_ORDERTYPE' || mutation.type === 'SET_ORDER' || mutation.type === 'SET_SIZE' || mutation.type === 'SET_SELECTED' || mutation.type === 'SET_SWITCHED') {
      // reset page offset when mutation in not page change
      if (mutation.type !== 'SET_FROM' && mutation.type !== 'START') {
        store.commit('RESET_FROM');
      }
      if (mutation.type === 'START') {
        setInitialSelection(state);
      }
      store.commit('SET_LOADING');

      // update url parameters
      window.history.replaceState('', '', createUrlString(state));
      const selected = getSelection(state);

      // create parameters object for api
      const params = {
        action: 'query',
        meta: 'WikiSearch',
        format: 'json',
        filter: JSON.stringify(selected),
        term: elastic(state.term),
        from: state.from,
        limit: state.size,
        pageid: mediaWikiValues.wgArticleId,
        aggregations: JSON.stringify(state.dates)
      };

      // Add fuzziness
      // eslint-disable-next-line no-undef
      if (mediaWikiValues.WikiSearchFront.config.settings['fuzzy search'] === 'true' && params.term.trim().length > 0) {
        params.term = params.term.split(' ').join('~ ').trim().concat('~');
      }

      // // Remove the search term when it is empty in order to avoid getting no results
      // // eslint-disable-next-line no-undef
      // if (
      //   mediaWikiValues.WikiSearchFront.config.settings['search on empty queries'] === 'true'
      //   && params.term.trim().length === 0
      // ) {
      //   delete params.term;
      // }

      // when sort options are configured add them to the parameters
      if (mediaWikiValues.WikiSearchFront.config.settings['sort options'] && state.sortOrderType !== 'score') {
        params.sortings = JSON.stringify([{
          type: 'property',
          property: state.sortOrderType,
          order: state.sortOrder
        }]);
      } else if (mediaWikiValues.WikiSearchFront.config.settings.sort) {
        params.sortings = JSON.stringify([{
          type: 'property',
          property: mediaWikiValues.WikiSearchFront.config.settings.sort,
          order: mediaWikiValues.WikiSearchFront.config.settings.order || 'asc'
        }]);
      }
      // do WikiSearch api call
      store.dispatch('doApiCall', {
        actions: {
          params
        }
      });
    }
  });
};
const store_store = new vuex_esm["a" /* default */].Store({
  state: {
    loading: false,
    selected: [],
    switched: {},
    selectedResults: [],
    ongoingRequest: undefined,
    selectAllResults: false,
    sortOrder: 'asc',
    sortOrderType: 'score',
    hits: '',
    aggs: '',
    size: parseInt(mediaWikiValues.WikiSearchFront.config.settings.size, 10) || 10,
    total: 0,
    from: 0,
    calendarDate: moment(),
    rangeFrom: 0,
    rangeTo: 0,
    term: '',
    loaded: false,
    dates: [],
    realDates: {},
    apiCalls: [],
    renderedTemplates: {},
    valueLabelMap: getValueLabelMap(mediaWikiValues.WikiSearchFront.config.facetSettings)
  },
  mutations: {
    SET_TEMPLATES(state, templates) {
      state.apiCalls = [];
      state.renderedTemplates = templates;
    },
    SET_API_CALLS(state, call) {
      state.apiCalls.push(call);
    },
    CLEAR_ALL(state) {
      state.selected = [];
      state.term = '';
    },
    SET_SELECTED(state, selected) {
      state.selected = selected;
    },
    SET_SWITCHED(state, switched) {
      state.switched = switched;
    },
    SET_SELECTED_RESULTS(state, selected) {
      state.selectedResults = selected;
    },
    SET_SELECT_ALL_RESULTS(state, selected) {
      state.selectAllResults = selected;
    },
    SET_CALENDAR_DATE(state, date) {
      state.calendarDate = date;
    },
    SET_TERM(state, term) {
      state.term = term;
    },
    SET_ORDER(state, order) {
      state.sortOrder = order;
    },
    SET_SIZE(state, size) {
      state.size = size;
    },
    SET_LOADING(state) {
      state.loading = true;
    },
    SET_ORDERTYPE(state, type) {
      state.sortOrderType = type;
    },
    SET_FROM(state, from) {
      state.from = from;
    },
    RESET_FROM(state) {
      state.from = 0;
    },
    START(state, start) {
      const {
        facetSettings
      } = mediaWikiValues.WikiSearchFront.config;
      state.loaded = start;
      const today = new Date();
      const ranges = createDateRanges(today, facetSettings);
      const [facetRanges, realRanges] = createMoreRanges(facetSettings, ranges, today);
      state.realDates = realRanges;
      state.dates = facetRanges;
      const statesFromUrl = getStateFromUrl(state, facetSettings);
      Object.entries(statesFromUrl).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    SET_RANGE_from(state, range) {
      state.rangeFrom = range;
    },
    SET_RANGE_to(state, range) {
      state.rangeTo = range;
    },
    SET_REAL_DATES(state, date) {
      state.realDates = date;
    },
    SET_FROM_API(state, data) {
      state.hits = data.hits;
      state.total = data.total;
      state.aggs = data.aggs;
      state.loading = false;
    }
  },
  actions: {
    bundleApiCalls({
      commit
    }, {
      actions
    }) {
      commit('SET_API_CALLS', {
        text: actions.text,
        index: actions.index
      });
      // eslint-disable-next-line prefer-arrow-callback
      clearTimeout(this.ongoingRequest);
      this.ongoingRequest = setTimeout(() => {
        // eslint-disable-next-line no-undef
        const api = new mw.Api();
        const params = {
          action: 'parse',
          text: `<div>${store_store.state.apiCalls.map(call => `${call.index}^^%%%^^${call.text}`).join('%%^^^%%')}</div>`,
          format: 'json',
          wrapoutputclass: '',
          disablelimitreport: true
        };
        api.post(params).done(data => {
          if (!data.parse) {
            return;
          }
          const result = data.parse.text['*'];
          const templates = Object.fromEntries(result.substring(5, result.length - 6).split('%%^^^%%').map(e => e.split('^^%%%^^')));
          commit('SET_TEMPLATES', {
            ...store_store.state.renderedTemplates,
            ...templates
          });
        });
      }, 100);
    },
    doApiCall({
      commit
    }, {
      actions
    }) {
      // eslint-disable-next-line no-undef
      const api = new mw.Api();

      // eslint-disable-next-line no-undef
      mw.hook('wikisearchfrontent-pre-api-call').fire(actions.params);

      // handle api call
      api.post(actions.params).done(data => {
        // when call does not come form a component it is the WikiSearch api call
        if (!actions.component) {
          var _data$result$total, _data$result$total2;
          commit('SET_FROM_API', {
            hits: JSON.parse(data.result.hits),
            total: {
              value: (_data$result$total = data.result.total) !== null && _data$result$total !== void 0 && _data$result$total.value ? data.result.total.value : data.result.total,
              relation: (_data$result$total2 = data.result.total) !== null && _data$result$total2 !== void 0 && _data$result$total2.relation ? data.result.total.relation : 'eq'
            },
            aggs: data.result.aggs
          });
        } else {
          actions.component.apiResult(data);
        }
      });
    }
  },
  getters: {
    rangeFrom(state) {
      return state.rangeFrom;
    },
    rangeTo(state) {
      return state.rangeTo;
    }
  },
  plugins: [updateStore]
});

// CONCATENATED MODULE: ./src/utilities/stringUtils.js
/**
 * @param {String}
 * @returns {String} striped from special characters
 */
function strip(string) {
  return string.toLowerCase().replace(/[^a-z0-9]/gim, '_');
}
/**
 * @param {String} string
 * @returns {String} escaped from xss danger
 */
function sanitize(string) {
  const lt = /</g;
  const gt = />/g;
  const ap = /'/g;
  const ic = /"/g;
  const preTag = /{@@_HIGHLIGHT_@@/g;
  const postTag = /@@_HIGHLIGHT_@@}/g;
  return string.replace(lt, '&lt;').replace(gt, '&gt;').replace(ap, '&#39;').replace(ic, '&#34;').replace(preTag, '<b class="wikisearch-term-highlight">').replace(postTag, '</b>');
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchInput.vue?vue&type=template&id=e6e3f082
var SearchInputvue_type_template_id_e6e3f082_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-search wikisearch--has-button",
    attrs: {
      "aria-disabled": "false",
      "role": "search"
    }
  }, [_c('div', {
    staticClass: "wikisearch-search__wrapper"
  }, [_c('div', {
    ref: 'syntax',
    staticClass: "wikisearch-syntax",
    domProps: {
      "innerHTML": _vm._s(_vm.highlightedTerm)
    }
  }), _c('wikisearch-input', {
    attrs: {
      "pending": _vm.$store.state.loading,
      "clearable": true,
      "start-icon": 'search',
      "placeholder": _vm.$i18n('search')
    },
    on: {
      "input": _vm.onInput,
      "enter": _vm.search,
      "scroll": _vm.syncScroll,
      "clear": _vm.clearTerm
    },
    model: {
      value: _vm.term,
      callback: function ($$v) {
        _vm.term = $$v;
      },
      expression: "term"
    }
  })], 1), _c('wikisearch-button', {
    attrs: {
      "label": _vm.$i18n('search'),
      "type": 'progressive'
    },
    on: {
      "click": _vm.search
    }
  }), _vm.hasInfo ? _c('wikisearch-tooltip', {
    scopedSlots: _vm._u([{
      key: "slot",
      fn: function () {
        return [_c('div', {
          domProps: {
            "innerHTML": _vm._s(_vm.highlightedInfo)
          }
        })];
      },
      proxy: true
    }, {
      key: "button",
      fn: function () {
        return [_c('wikisearch-button', {
          attrs: {
            "icon": 'info',
            "type": 'icon'
          }
        })];
      },
      proxy: true
    }], null, false, 2795427984)
  }) : _vm._e()], 1);
};
var SearchInputvue_type_template_id_e6e3f082_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/SearchInput.vue?vue&type=template&id=e6e3f082

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Input.vue?vue&type=template&id=2e547cd8
var Inputvue_type_template_id_2e547cd8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-input",
    class: _vm.classes
  }, [_c('input', _vm._b({
    ref: 'input',
    class: {
      'wikisearch-input__input': true,
      'wikisearch-element--pending': _vm.pending
    },
    attrs: {
      "type": "text",
      "tabindex": "0",
      "aria-disabled": "false",
      "readonly": this.$parent.$options.name === 'WikisearchDateInput'
    },
    domProps: {
      "value": _vm.computedValue
    },
    on: {
      "input": _vm.onInput,
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) return null;
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.$emit('down');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) return null;
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.$emit('up');
      }],
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.$emit('enter');
      },
      "scroll": function ($event) {
        return _vm.$emit('scroll', _vm.$refs.input);
      },
      "focus": function ($event) {
        return _vm.$emit('focus');
      },
      "blur": function ($event) {
        return _vm.$emit('blur');
      },
      "click": function ($event) {
        return _vm.$emit('click');
      }
    }
  }, 'input', _vm.$attrs, false)), _vm.startIcon ? _c('wikisearch-icon', {
    staticClass: "wikisearch-input__start-icon",
    attrs: {
      "icon": _vm.startIcon
    }
  }) : _vm._e(), _c('span', {
    on: {
      "click": _vm.onEndIconClick
    }
  }, [_vm.isClearable || _vm.endIcon ? _c('wikisearch-icon', {
    staticClass: "wikisearch-input__end-icon",
    attrs: {
      "tabindex": _vm.isClearable ? '-1' : '',
      "role": _vm.isClearable ? 'button' : '',
      "icon": _vm.endIcon || 'clear'
    }
  }) : _vm._e()], 1)], 1);
};
var Inputvue_type_template_id_2e547cd8_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Input.vue?vue&type=template&id=2e547cd8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Icon.vue?vue&type=template&id=91951cbc
var Iconvue_type_template_id_91951cbc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', _vm._b({
    staticClass: "wikisearch-icon",
    class: 'wikisearch-icon--' + _vm.icon,
    attrs: {
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": _vm.viewBox
    }
  }, 'svg', _vm.$attrs, false), [_c('title', [_vm._v(" " + _vm._s(_vm.icon) + " ")]), _c('path', {
    attrs: {
      "fill": "currentColor",
      "d": _vm.path
    }
  })]);
};
var Iconvue_type_template_id_91951cbc_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Icon.vue?vue&type=template&id=91951cbc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Icon.vue?vue&type=script&lang=js
/* harmony default export */ var Iconvue_type_script_lang_js = ({
  name: 'WikisearchIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    path() {
      // eslint-disable max-len
      const icons = {
        close: 'M4.34 2.93 2.93 4.35l5.658 5.652L2.93 15.66l1.41 1.41 5.658-5.658 5.662 5.658 1.41-1.41L11.41 10l5.66-5.66-1.41-1.41L10 8.59 4.34 2.93z',
        clear: 'M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z',
        search: 'M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 017.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z',
        next: 'M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z',
        back: 'M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z',
        down: 'M10.085 2.943L6.05 6.803l-3.947-3.86L1.05 3.996l5 5 5-5z',
        up: 'M10.035 9.026L6 5.168 2.053 9.026 1 7.974l5-5 5 5z',
        info: 'M9.5 16A6.61 6.61 0 013 9.5 6.61 6.61 0 019.5 3 6.61 6.61 0 0116 9.5 6.63 6.63 0 019.5 16zm0-14A7.5 7.5 0 1017 9.5 7.5 7.5 0 009.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z',
        settings: 'M3 4h3v2H3zm9 0h9v2h-9zM8 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-5 8h9v2H3zm15 0h3v2h-3zm-4-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM3 18h6v2H3zm12 0h6v2h-6zm-4-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z'
      };
      return icons[this.icon];
    },
    viewBox() {
      const icons = {
        up: '0 0 12 12',
        down: '0 0 12 12',
        settings: '0 0 24 24',
        default: '0 0 20 20'
      };
      return icons[this.icon] || icons.default;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Icon.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Iconvue_type_script_lang_js = (Iconvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Icon.vue?vue&type=style&index=0&id=91951cbc&prod&lang=css
var Iconvue_type_style_index_0_id_91951cbc_prod_lang_css = __webpack_require__("d1ff");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Icon.vue






/* normalize component */

var Icon_component = normalizeComponent(
  components_Iconvue_type_script_lang_js,
  Iconvue_type_template_id_91951cbc_render,
  Iconvue_type_template_id_91951cbc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Icon = (Icon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Input.vue?vue&type=script&lang=js

/* harmony default export */ var Inputvue_type_script_lang_js = ({
  name: 'WikisearchInput',
  components: {
    WikisearchIcon: Icon
  },
  props: {
    id: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    startIcon: {
      type: String,
      default: undefined
    },
    endIcon: {
      type: String,
      default: undefined
    },
    clearable: {
      type: Boolean,
      default: false
    },
    pending: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newValue: this.value
    };
  },
  computed: {
    isClearable() {
      return this.clearable && this.computedValue;
    },
    classes() {
      return {
        'wikisearch-input--has-start-icon': !!this.startIcon,
        'wikisearch-input--has-end-icon': !!this.endIcon || this.clearable,
        'wikisearch-input--clearable': this.clearable
      };
    },
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit('input', value, this.id);
      }
    }
  },
  watch: {
    value(value) {
      this.newValue = value;
    }
  },
  methods: {
    onInput(e) {
      this.computedValue = e.target.value;
    },
    onEndIconClick() {
      if (this.clearable) {
        this.computedValue = '';
        this.$emit('clear', '', this.id);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Input.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Inputvue_type_script_lang_js = (Inputvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Input.vue?vue&type=style&index=0&id=2e547cd8&prod&lang=css
var Inputvue_type_style_index_0_id_2e547cd8_prod_lang_css = __webpack_require__("492a");

// CONCATENATED MODULE: ./src/components/Input.vue






/* normalize component */

var Input_component = normalizeComponent(
  components_Inputvue_type_script_lang_js,
  Inputvue_type_template_id_2e547cd8_render,
  Inputvue_type_template_id_2e547cd8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Input = (Input_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button.vue?vue&type=template&id=4aa525f3
var Buttonvue_type_template_id_4aa525f3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "wikisearch-button",
    class: _vm.classes,
    attrs: {
      "type": "button",
      "tabindex": "0",
      "aria-disabled": "false",
      "rel": "nofollow"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click');
      }
    }
  }, [_vm.icon ? _c('wikisearch-icon', {
    staticClass: "wikisearch-button__icon",
    attrs: {
      "icon": _vm.icon
    }
  }) : _vm._e(), _vm.label ? _c('span', {
    staticClass: "wikisearch-button__label"
  }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e()], 1);
};
var Buttonvue_type_template_id_4aa525f3_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=template&id=4aa525f3

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button.vue?vue&type=script&lang=js

/* harmony default export */ var Buttonvue_type_script_lang_js = ({
  name: 'WikisearchButton',
  components: {
    WikisearchIcon: Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'neutral'
    }
  },
  computed: {
    /**
     * @returns {Object} classes to enable
     */
    classes() {
      const classes = {
        'wikisearch-button--has-icon': !!this.icon
      };
      classes[`wikisearch-button--${this.type}`] = true;
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Buttonvue_type_script_lang_js = (Buttonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Button.vue?vue&type=style&index=0&id=4aa525f3&prod&lang=css
var Buttonvue_type_style_index_0_id_4aa525f3_prod_lang_css = __webpack_require__("8097");

// CONCATENATED MODULE: ./src/components/Button.vue






/* normalize component */

var Button_component = normalizeComponent(
  components_Buttonvue_type_script_lang_js,
  Buttonvue_type_template_id_4aa525f3_render,
  Buttonvue_type_template_id_4aa525f3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Button = (Button_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=template&id=651d066f
var Tooltipvue_type_template_id_651d066f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-tooltip"
  }, [_vm._t("button"), _c('div', {
    staticClass: "wikisearch-tooltip__popup",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('span', {
    staticClass: "wikisearch-tooltip__pivot"
  }), _vm._t("slot")], 2)], 2);
};
var Tooltipvue_type_template_id_651d066f_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=template&id=651d066f

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=script&lang=js
/* harmony default export */ var Tooltipvue_type_script_lang_js = ({
  name: 'WikisearchTooltip',
  data() {
    return {
      focused: false
    };
  }
});
// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Tooltipvue_type_script_lang_js = (Tooltipvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Tooltip.vue?vue&type=style&index=0&id=651d066f&prod&lang=css
var Tooltipvue_type_style_index_0_id_651d066f_prod_lang_css = __webpack_require__("0c2f");

// CONCATENATED MODULE: ./src/components/Tooltip.vue






/* normalize component */

var Tooltip_component = normalizeComponent(
  components_Tooltipvue_type_script_lang_js,
  Tooltipvue_type_template_id_651d066f_render,
  Tooltipvue_type_template_id_651d066f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tooltip = (Tooltip_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchInput.vue?vue&type=script&lang=js




/* harmony default export */ var SearchInputvue_type_script_lang_js = ({
  name: 'SearchInput',
  components: {
    WikisearchInput: Input,
    WikisearchButton: Button,
    WikisearchTooltip: Tooltip
  },
  data() {
    return {
      typedTerm: '',
      userHasTyped: false,
      infoIsActive: false
    };
  },
  computed: {
    hasInfo() {
      // eslint-disable-next-line no-undef
      return mw.config.values.WikiSearchFront.config.settings.info;
    },
    highlightedInfo() {
      // eslint-disable-next-line no-undef
      return this.highlight(mw.message('wikisearchfront-info').text());
    },
    highlightedTerm() {
      return this.highlight(sanitize(this.term));
    },
    /**
     * v-model user typed term
     */
    term: {
      set(value) {
        this.typedTerm = value.replace(/[“”„]/gim, '"');
        this.userHasTyped = true;
      },
      get() {
        return this.typedTerm || this.userHasTyped ? this.typedTerm : this.$store.state.term;
      }
    }
  },
  methods: {
    syncScroll(el) {
      this.$refs.syntax.scrollLeft = el.scrollLeft;
    },
    highlight(term) {
      const baseClass = 'wikisearch-syntax__item';
      return term.replace(/(["'])(?:(?=(\\?))\2.)*?\1|~\d/g, `<span class="${baseClass} ${baseClass}--qoute">$&</span>`).replace(/\s(-\w+)/g, ` <span class="${baseClass} ${baseClass}--minus">$1</span>`).replace(/\*/gm, `<span class="${baseClass} ${baseClass}--star">*</span>`).replace(/\sOR\s/gm, ` <span class="${baseClass} ${baseClass}--or">OR</span> `).replace(/\sAND\s/gm, ` <span class="${baseClass} ${baseClass}--and">AND</span> `);
    },
    onInput() {
      if (
      // eslint-disable-next-line no-undef
      mw.config.values.WikiSearchFront.config.settings.searchOnInput) {
        this.$store.commit('SET_TERM', this.typedTerm);
      }
    },
    /**
     * @event click|key.enter search for user input
     */
    search() {
      this.$store.commit('SET_TERM', this.typedTerm || this.term);
    },
    /**
     * @event click clear user typed input
     */
    clearTerm() {
      this.typedTerm = '';
      this.$store.commit('SET_TERM', '');
    }
  }
});
// CONCATENATED MODULE: ./src/components/SearchInput.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SearchInputvue_type_script_lang_js = (SearchInputvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/SearchInput.vue?vue&type=style&index=0&id=e6e3f082&prod&lang=css
var SearchInputvue_type_style_index_0_id_e6e3f082_prod_lang_css = __webpack_require__("40d2");

// CONCATENATED MODULE: ./src/components/SearchInput.vue






/* normalize component */

var SearchInput_component = normalizeComponent(
  components_SearchInputvue_type_script_lang_js,
  SearchInputvue_type_template_id_e6e3f082_render,
  SearchInputvue_type_template_id_e6e3f082_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SearchInput = (SearchInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PillsSelected.vue?vue&type=template&id=5a855c74
var PillsSelectedvue_type_template_id_5a855c74_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-selected"
  }, [_vm._l(_vm.selected, function (activefilter, index) {
    return _c('wikisearch-pill', {
      key: index,
      attrs: {
        "data": activefilter,
        "label": activefilter.name
      },
      on: {
        "click": _vm.deselect
      }
    });
  }), _vm.selected.length ? _c('span', {
    staticClass: "wikisearch-selected__clear",
    attrs: {
      "tabindex": "-1",
      "aria-label": "Clear",
      "role": "button"
    },
    on: {
      "click": _vm.clearFilters
    }
  }, [_vm._v(" " + _vm._s(_vm.$i18n("wikisearchfront-clear-all-filters")) + " ")]) : _vm._e()], 2);
};
var PillsSelectedvue_type_template_id_5a855c74_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PillsSelected.vue?vue&type=template&id=5a855c74

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pill.vue?vue&type=template&id=e040c6b4
var Pillvue_type_template_id_e040c6b4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    staticClass: "wikisearch-pill",
    class: _vm.classes,
    attrs: {
      "for": _vm.forKey,
      "tabindex": "0"
    },
    on: {
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.$emit('click', _vm.data);
      },
      "click": function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.$emit('click', _vm.data);
      }
    }
  }, [_c('bdi', [_vm._v(" " + _vm._s(_vm.title) + " ")])]);
};
var Pillvue_type_template_id_e040c6b4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pill.vue?vue&type=template&id=e040c6b4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pill.vue?vue&type=script&lang=js

/* harmony default export */ var Pillvue_type_script_lang_js = ({
  name: 'WikisearchPill',
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    /**
     * @returns {String} classes
     */
    classes() {
      const stripped = `wikisearch-pill--${strip(this.data.key)}`;
      return `${stripped} ${stripped}__${strip(this.data.value)}`;
    },
    /**
     * @returns {String} for attribute for label matching checkbox id
     */
    forKey() {
      return `${strip(this.data.key)}--${strip(this.data.value)}`;
    },
    /**
     * @returns {String} title for pill
     */
    title() {
      return this.label ? this.label : this.data.value;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pill.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pillvue_type_script_lang_js = (Pillvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pill.vue?vue&type=style&index=0&id=e040c6b4&prod&lang=css
var Pillvue_type_style_index_0_id_e040c6b4_prod_lang_css = __webpack_require__("eed3");

// CONCATENATED MODULE: ./src/components/Pill.vue






/* normalize component */

var Pill_component = normalizeComponent(
  components_Pillvue_type_script_lang_js,
  Pillvue_type_template_id_e040c6b4_render,
  Pillvue_type_template_id_e040c6b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pill = (Pill_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PillsSelected.vue?vue&type=script&lang=js




/* harmony default export */ var PillsSelectedvue_type_script_lang_js = ({
  name: 'PillsSelected',
  components: {
    WikisearchPill: Pill
  },
  computed: {
    /**
     * @returns {Array} selected filters
     */
    selected() {
      const [selected, labelMap] = [this.$store.state.selected, this.$store.state.valueLabelMap];
      selected.forEach((item, i) => {
        if (labelMap[item.key]) {
          selected[i].name = labelMap[item.key][item.value];
        }
      });
      return this.$store.state.selected;
    }
  },
  methods: {
    deselect(item) {
      const updatedSelection = this.selected.filter(ob => ob !== item);
      this.$store.commit('SET_SELECTED', updatedSelection);
    },
    clearFilters() {
      // eslint-disable-next-line no-undef
      if (mw.config.values.WikiSearchFront.config.settings.clear) {
        this.$store.commit('CLEAR_ALL');
      } else {
        this.$store.commit('SET_SELECTED', []);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/PillsSelected.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PillsSelectedvue_type_script_lang_js = (PillsSelectedvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/PillsSelected.vue?vue&type=style&index=0&id=5a855c74&prod&lang=css
var PillsSelectedvue_type_style_index_0_id_5a855c74_prod_lang_css = __webpack_require__("35c9");

// CONCATENATED MODULE: ./src/components/PillsSelected.vue






/* normalize component */

var PillsSelected_component = normalizeComponent(
  components_PillsSelectedvue_type_script_lang_js,
  PillsSelectedvue_type_template_id_5a855c74_render,
  PillsSelectedvue_type_template_id_5a855c74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PillsSelected = (PillsSelected_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SortOrder.vue?vue&type=template&id=3b08bad2
var SortOrdervue_type_template_id_3b08bad2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-order wikisearch--has-button"
  }, [_c('span', {
    staticClass: "wikisearch-order__label"
  }, [_vm._v(" " + _vm._s(_vm.$i18n("wikisearchfront-order")) + " ")]), _c('wikisearch-dropdown', {
    attrs: {
      "items": _vm.items,
      "placeholder": 'Select an item',
      "value": _vm.sortOrderType == 'score' ? {
        label: _vm.$i18n('wikisearchfront-score'),
        data: 'score'
      } : {
        label: _vm.sortOrderType,
        data: _vm.sortOrderType
      }
    },
    on: {
      "select": _vm.setSort
    }
  }), _c('wikisearch-button', {
    attrs: {
      "icon": _vm.sortOrder === 'desc' ? 'down' : 'up',
      "disabled": _vm.sortOrderType === 'score'
    },
    on: {
      "click": _vm.setOrder
    }
  })], 1);
};
var SortOrdervue_type_template_id_3b08bad2_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/SortOrder.vue?vue&type=template&id=3b08bad2

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dropdown.vue?vue&type=template&id=5982340c
var Dropdownvue_type_template_id_5982340c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-dropdown",
    class: _vm.classes
  }, [_c('label', {
    staticClass: "wikisearch-dropdown__select",
    attrs: {
      "tabindex": "0",
      "aria-disabled": "false"
    },
    on: {
      "focus": function ($event) {
        _vm.focused = true;
      },
      "blur": function ($event) {
        _vm.focused = false;
      },
      "click": function ($event) {
        _vm.focused = true;
      },
      "keydown": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) return null;
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.$refs.listBox.onDown();
      }
    }
  }, [_vm.selected.length ? _c('span', {
    staticClass: "wikisearch-dropdown__selected"
  }, [_vm._v(" " + _vm._s(_vm.selected[0].label) + " ")]) : _c('span', {
    staticClass: "wikisearch-dropdown__placeholder"
  }, [_vm._v(" " + _vm._s(_vm.placeholder) + " ")]), _c('svg', {
    staticClass: "wikisearch-dropdown__arrow",
    attrs: {
      "fill": "none",
      "viewBox": "0 0 12 12",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "fill": "currentColor",
      "d": "M6 10L12 3.94231L11 3L6 7.98077L1 3L5.2958e-07 3.94231L6 10Z"
    }
  })])]), _vm.focused ? _c('wikisearch-list-box', {
    ref: "listBox",
    attrs: {
      "items": _vm.items,
      "selected": _vm.selected
    },
    on: {
      "select": _vm.setSelected
    }
  }) : _vm._e()], 1);
};
var Dropdownvue_type_template_id_5982340c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Dropdown.vue?vue&type=template&id=5982340c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ListBox.vue?vue&type=template&id=68661a51
var ListBoxvue_type_template_id_68661a51_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', {
    staticClass: "wikisearch-list-box",
    attrs: {
      "role": "listbox"
    }
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c('li', {
      key: 'listbox' + item.id + item.label,
      staticClass: "wikisearch-list-box__item",
      class: _vm.itemClasses(item, index),
      attrs: {
        "id": item.id,
        "role": "option",
        "aria-selected": _vm.selected.includes(item)
      },
      on: {
        "click": function ($event) {
          return _vm.onItemClick(item);
        },
        "mousedown": function ($event) {
          $event.preventDefault();
          return _vm.onItemMousedown.apply(null, arguments);
        },
        "mouseenter": function ($event) {
          _vm.active = index;
        }
      }
    }, [_vm._t("menuItem", function () {
      return [_vm._v(" " + _vm._s(item.label) + " ")];
    }, {
      "item": item
    })], 2);
  }), 0);
};
var ListBoxvue_type_template_id_68661a51_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/ListBox.vue?vue&type=template&id=68661a51

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ListBox.vue?vue&type=script&lang=js


/* harmony default export */ var ListBoxvue_type_script_lang_js = ({
  name: 'WikisearchListBox',
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      active: 0
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.show !== 'no');
    }
  },
  methods: {
    onDown() {
      this.active = this.filteredItems.length - 1 <= this.active ? 0 : this.active + 1;
    },
    onUp() {
      this.active = this.active === 0 ? this.filteredItems.length - 1 : this.active - 1;
    },
    setActiveAsSelected() {
      this.$emit('select', this.filteredItems[this.active]);
    },
    itemClasses(item, index) {
      console.log(item.label, item.doc_count);
      return {
        'wikisearch-list-box__item--selected': !!this.selected.filter(e => e.data === item.data).length,
        'wikisearch-list-box__item--active': this.active === index
      };
    },
    onItemClick(item) {
      this.$emit('select', item);
    },
    onItemMousedown() {
      const mouseupHandler = () => {
        document.documentElement.removeEventListener('mouseup', mouseupHandler);
      };
      document.documentElement.addEventListener('mouseup', mouseupHandler);
    }
  }
});
// CONCATENATED MODULE: ./src/components/ListBox.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ListBoxvue_type_script_lang_js = (ListBoxvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/ListBox.vue?vue&type=style&index=0&id=68661a51&prod&lang=css
var ListBoxvue_type_style_index_0_id_68661a51_prod_lang_css = __webpack_require__("d0a1");

// CONCATENATED MODULE: ./src/components/ListBox.vue






/* normalize component */

var ListBox_component = normalizeComponent(
  components_ListBoxvue_type_script_lang_js,
  ListBoxvue_type_template_id_68661a51_render,
  ListBoxvue_type_template_id_68661a51_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListBox = (ListBox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dropdown.vue?vue&type=script&lang=js

/* harmony default export */ var Dropdownvue_type_script_lang_js = ({
  name: 'WikisearchDropdown',
  components: {
    WikisearchListBox: ListBox
  },
  props: {
    value: {
      type: Object,
      default() {
        return null;
      }
    },
    placeholder: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      focused: false,
      selected: [this.value],
      newValue: this.value
    };
  },
  computed: {
    classes() {
      return {
        'wikisearch-dropdown--has-selection': !!this.selected.length
      };
    }
  },
  watch: {
    value(value) {
      this.selected = [value];
    }
  },
  methods: {
    setSelected(item) {
      this.selected = [item];
      this.$emit('select', item);
      this.focused = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Dropdown.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Dropdownvue_type_script_lang_js = (Dropdownvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Dropdown.vue?vue&type=style&index=0&id=5982340c&prod&lang=css
var Dropdownvue_type_style_index_0_id_5982340c_prod_lang_css = __webpack_require__("4d91");

// CONCATENATED MODULE: ./src/components/Dropdown.vue






/* normalize component */

var Dropdown_component = normalizeComponent(
  components_Dropdownvue_type_script_lang_js,
  Dropdownvue_type_template_id_5982340c_render,
  Dropdownvue_type_template_id_5982340c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dropdown = (Dropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SortOrder.vue?vue&type=script&lang=js




/* harmony default export */ var SortOrdervue_type_script_lang_js = ({
  name: 'SortOrder',
  components: {
    WikisearchDropdown: Dropdown,
    WikisearchButton: Button
  },
  props: {
    settings: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      options: this.settings['sort options']
    };
  },
  computed: {
    items() {
      const items = Object.entries(this.options).map(([key, order]) => ({
        label: order.label || key,
        data: key
      }));
      items.unshift({
        label: this.$i18n('wikisearchfront-score'),
        data: 'score'
      });
      return items;
    },
    /**
     * @returns {String} sort order type title
     */
    sortOrderType() {
      const option = this.$store.state.sortOrderType;
      const type = this.options[option];
      return type && type.label ? type.label : option;
    },
    /**
     * @returns {String} active order
     */
    sortOrder() {
      return this.$store.state.sortOrder;
    }
  },
  methods: {
    setSort(item) {
      this.$store.commit('SET_ORDERTYPE', item.data);
    },
    /**
     * @event click change order
     * @returns {String} order
     */
    setOrder() {
      return this.sortOrder === 'desc' ? this.$store.commit('SET_ORDER', 'asc') : this.$store.commit('SET_ORDER', 'desc');
    }
  }
});
// CONCATENATED MODULE: ./src/components/SortOrder.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SortOrdervue_type_script_lang_js = (SortOrdervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/SortOrder.vue?vue&type=style&index=0&id=3b08bad2&prod&lang=css
var SortOrdervue_type_style_index_0_id_3b08bad2_prod_lang_css = __webpack_require__("16b4");

// CONCATENATED MODULE: ./src/components/SortOrder.vue






/* normalize component */

var SortOrder_component = normalizeComponent(
  components_SortOrdervue_type_script_lang_js,
  SortOrdervue_type_template_id_3b08bad2_render,
  SortOrdervue_type_template_id_3b08bad2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SortOrder = (SortOrder_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Checkbox.vue?vue&type=template&id=972cfd0a
var Checkboxvue_type_template_id_972cfd0a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    staticClass: "wikisearch-checkbox",
    class: 'wikisearch-checkbox--' + _vm.id,
    attrs: {
      "aria-disabled": "false"
    }
  }, [_c('span', {
    staticClass: "wikisearch-checkbox__wrapper",
    attrs: {
      "aria-disabled": "false"
    }
  }, [_c('input', {
    staticClass: "wikisearch-checkbox__input",
    attrs: {
      "id": _vm.id,
      "type": "checkbox",
      "aria-disabled": "false",
      "tabindex": "0"
    },
    domProps: {
      "value": _vm.value,
      "checked": _vm.checked
    },
    on: {
      "change": function ($event) {
        return _vm.$emit('change', _vm.value);
      }
    }
  }), _c('span', {
    staticClass: "wikisearch-checkbox__icon",
    attrs: {
      "aria-disabled": "false"
    }
  })]), _c('span', [_c('span', {
    staticClass: "wikisearch-checkbox__label"
  }, [_vm._t("slot", function () {
    return [_vm._v(" " + _vm._s(_vm.label) + " ")];
  })], 2)])]);
};
var Checkboxvue_type_template_id_972cfd0a_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Checkbox.vue?vue&type=template&id=972cfd0a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Checkbox.vue?vue&type=script&lang=js
/* harmony default export */ var Checkboxvue_type_script_lang_js = ({
  name: 'WikisearchCheckbox',
  props: {
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Object, Number, Array],
      default: undefined
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: this.checked
    };
  }
});
// CONCATENATED MODULE: ./src/components/Checkbox.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Checkboxvue_type_script_lang_js = (Checkboxvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Checkbox.vue?vue&type=style&index=0&id=972cfd0a&prod&lang=css
var Checkboxvue_type_style_index_0_id_972cfd0a_prod_lang_css = __webpack_require__("6a09");

// CONCATENATED MODULE: ./src/components/Checkbox.vue






/* normalize component */

var Checkbox_component = normalizeComponent(
  components_Checkboxvue_type_script_lang_js,
  Checkboxvue_type_template_id_972cfd0a_render,
  Checkboxvue_type_template_id_972cfd0a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Checkbox = (Checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagers.vue?vue&type=template&id=075113c4
var Pagersvue_type_template_id_075113c4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-pager"
  }, [_vm.settings['size options'] ? _c('wikisearch-dropdown', {
    staticClass: "wikisearch-pager__dropdown",
    attrs: {
      "items": _vm.options,
      "value": _vm.size == 999 ? {
        label: _vm.$i18n('wikisearchfront-all'),
        data: 999
      } : {
        label: _vm.size + _vm.$i18n('wikisearchfront-page'),
        data: _vm.size
      }
    },
    on: {
      "select": _vm.changeSize
    }
  }) : _vm._e(), _vm.total > _vm.size ? _c('div', [_c('span', {
    staticClass: "wikisearch-pager__item wikisearch-pager__item--back",
    class: _vm.showBack,
    on: {
      "click": _vm.back
    }
  }, [_c('wikisearch-icon', {
    staticClass: "wikisearch-pager__item--back-icon",
    attrs: {
      "icon": 'back'
    }
  })], 1), _c('span', {
    staticClass: "wikisearch-pager__item",
    class: _vm.activePage(1),
    on: {
      "click": _vm.move
    }
  }, [_c('span', [_vm._v(" 1 ")])]), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.from / _vm.size > 2 && _vm.total / _vm.size > 5,
      expression: "from / size > 2 && total / size > 5"
    }],
    staticClass: "wikisearch-pager__item wikisearch--dots",
    class: _vm.showBack
  }, [_vm._v(" ... ")]), _vm._l(_vm.pagers, function (pager, index) {
    return _c('span', {
      key: index,
      staticClass: "wikisearch-pager__item",
      class: _vm.activePage(pager),
      on: {
        "click": _vm.move
      }
    }, [_c('span', [_vm._v(" " + _vm._s(pager) + " ")])]);
  }), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.from / _vm.size < _vm.last - 3 && _vm.total / _vm.size > 5,
      expression: "from / size < last - 3 && total / size > 5"
    }],
    staticClass: "wikisearch-pager__item wikisearch--dots"
  }, [_vm._v(" ... ")]), _c('span', {
    staticClass: "wikisearch-pager__item",
    class: _vm.activePage(_vm.last),
    on: {
      "click": _vm.move
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.last) + " ")])]), _c('span', {
    staticClass: "wikisearch-pager__item wikisearch-pager__item--forward",
    class: _vm.showForward,
    on: {
      "click": _vm.next
    }
  }, [_c('wikisearch-icon', {
    staticClass: "wikisearch-pager__item--forward-icon",
    attrs: {
      "icon": 'next'
    }
  })], 1)], 2) : _vm._e()], 1);
};
var Pagersvue_type_template_id_075113c4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagers.vue?vue&type=template&id=075113c4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagers.vue?vue&type=script&lang=js





/* harmony default export */ var Pagersvue_type_script_lang_js = ({
  name: 'WikisearchPagers',
  components: {
    WikisearchDropdown: Dropdown,
    WikisearchIcon: Icon
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    from: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 0
    },
    settings: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    /**
     * Options for size dropdown
     * @returns {Object[]} options
     * @returns {String} options[].label
     * @returns {Number} options[].data
     */
    options() {
      const options = this.settings['size options'].map(option => ({
        label: option + this.$i18n('wikisearchfront-page'),
        data: option
      }));
      options.push({
        label: this.$i18n('wikisearchfront-all'),
        data: 999
      });
      return options;
    },
    /**
     * @returns {Number} last pager number
     */
    last() {
      return Math.ceil(this.total / this.size);
    },
    /**
     * @returns {String} class for hiding back button
     */
    showBack() {
      return this.from < 1 ? 'wikisearch-pager__item--hide' : '';
    },
    /**
     * @returns {String} class for hiding forward button
     */
    showForward() {
      return this.from + this.size >= this.total ? 'wikisearch-pager__item--hide' : '';
    },
    /**
     * @returns {Array|Boolean} pagers or false
     */
    pagers() {
      if (this.total >= this.size) {
        const pages = [];
        let i;
        const step = Math.ceil(this.total / this.size);
        if (step > 5) {
          if (this.from / this.size < 3) {
            for (i = 1; i < 4; i += 1) {
              pages.push(i + 1);
            }
          } else if (this.from / this.size > this.last - 4) {
            for (i = this.last - 4; i < this.last; i += 1) {
              pages.push(i);
            }
          } else {
            pages.push(this.from / this.size);
            pages.push(this.from / this.size + 1);
            pages.push(this.from / this.size + 2);
          }
          return pages;
        }
        for (i = 0; i < step; i += 1) {
          if (i + 1 > 1 && i + 1 < this.last) {
            pages.push(i + 1);
          }
        }
        return pages;
      }
      return false;
    }
  },
  methods: {
    /**
     * Set pager size
     * @param {Object} item
     * @param {String} item.label
     * @param {Number} item.data
     */
    changeSize(item) {
      this.$store.commit('SET_SIZE', parseInt(item.data, 10));
    },
    /**
     * @param {Number} pager number
     * @returns {String|Boolean} active class or false
     */
    activePage(pager) {
      if (pager === this.from / this.size + 1) {
        return 'active';
      }
      return false;
    },
    /**
     * @event click back button
     */
    back() {
      const from = this.from - this.size;
      this.$store.commit('SET_FROM', from);
    },
    /**
     * @event click pager
     * @param {Event} e the click event
     */
    move(e) {
      const from = Math.ceil(this.size * (e.target.innerText - 1));
      this.$store.commit('SET_FROM', from);
    },
    /**
     * @event click forward button
     */
    next() {
      const from = this.from + this.size;
      this.$store.commit('SET_FROM', from);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pagers.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pagersvue_type_script_lang_js = (Pagersvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Pagers.vue?vue&type=style&index=0&id=075113c4&prod&lang=css
var Pagersvue_type_style_index_0_id_075113c4_prod_lang_css = __webpack_require__("13a7");

// CONCATENATED MODULE: ./src/components/Pagers.vue






/* normalize component */

var Pagers_component = normalizeComponent(
  components_Pagersvue_type_script_lang_js,
  Pagersvue_type_template_id_075113c4_render,
  Pagersvue_type_template_id_075113c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagers = (Pagers_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/results/Results.vue?vue&type=template&id=0a0941b4
var Resultsvue_type_template_id_0a0941b4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-result",
    class: _vm.config.settings.layout ? 'wikisearch-result--layout-' + _vm.config.settings.layout : ''
  }, [_vm.config.settings.layout === 'table' ? _c('div', {
    staticClass: "wikisearch-result__header"
  }, _vm._l(_vm.computedHitSettings, function (hitConfig, label) {
    return _c('span', {
      key: 'result-header-item--' + label,
      staticClass: "wikisearch-result__header-item"
    }, [_vm._v(" " + _vm._s(hitConfig.label || label.replace(/^\$/, '')) + " ")]);
  }), 0) : _vm._e(), _vm._l(_vm.$store.state.hits, function (hit, index) {
    return _c(_vm.config.settings.title.wrap ? 'a' : 'div', {
      key: 'result-item--' + index,
      tag: "component",
      staticClass: "wikisearch-result__item",
      attrs: {
        "href": _vm.config.settings.title.wrap ? _vm.getHref(hit) : false
      }
    }, _vm._l(_vm.computedHitSettings, function (hitConfig, label) {
      return _c('wikisearch-result-property', {
        key: hit['_id'] + label,
        attrs: {
          "label": label,
          "config": hitConfig,
          "data": hit
        }
      });
    }), 1);
  })], 2);
};
var Resultsvue_type_template_id_0a0941b4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/results/Results.vue?vue&type=template&id=0a0941b4

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace-all.js
var es_string_replace_all = __webpack_require__("5b81");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ResultProperty.vue?vue&type=template&id=4de934b3
var ResultPropertyvue_type_template_id_4de934b3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "wikisearch-result-property",
    attrs: {
      "data-header": _vm.computedLabel
    }
  }, [_c('span', {
    staticClass: "wikisearch-result-property__wrapper"
  }, _vm._l(_vm.properties, function (property, i) {
    return _c(_vm.tagName, {
      key: _vm.data['_id'] + '_' + _vm.label + '-' + i,
      tag: "component",
      staticClass: "wikisearch-result-property__value",
      class: 'wikisearch-result-property__value--' + _vm.label.replace('$', '-'),
      attrs: {
        "index": _vm.data['_id'] + '_' + _vm.label + '-' + i,
        "data": _vm.dataForComponent(property),
        "label": _vm.labelForComponent(property),
        "value": _vm.valueForComponent(property),
        "src": _vm.src(property),
        "loading": _vm.isLazy,
        "href": _vm.href(property),
        "checked": _vm.isChecked
      },
      on: {
        "click": _vm.onClick,
        "change": _vm.onChange
      }
    }, [_vm.isHighlichted ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.highlightProperty(_vm.sanitize(property)))
      }
    }) : [_vm._v(" " + _vm._s(property) + " ")]], 2);
  }), 1)]);
};
var ResultPropertyvue_type_template_id_4de934b3_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/ResultProperty.vue?vue&type=template&id=4de934b3

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WikiTemplate.vue?vue&type=template&id=4710ef84
var WikiTemplatevue_type_template_id_4710ef84_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "wikisearch-wiki-template",
    class: !_vm.renderedTemplate ? 'wikisearch-wiki-template--loading wikisearch-element--pending' : '',
    domProps: {
      "innerHTML": _vm._s(_vm.renderedTemplate)
    }
  });
};
var WikiTemplatevue_type_template_id_4710ef84_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/WikiTemplate.vue?vue&type=template&id=4710ef84

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WikiTemplate.vue?vue&type=script&lang=js
/* harmony default export */ var WikiTemplatevue_type_script_lang_js = ({
  name: 'WikisearchWikiTemplate',
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    index: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: this.data.value
    };
  },
  computed: {
    renderedTemplate() {
      return this.$store.state.renderedTemplates[this.index] || '';
    }
  },
  watch: {
    value() {
      this.parseTemplate();
    }
  },
  mounted() {
    this.parseTemplate();
  },
  methods: {
    parseTemplate() {
      this.$store.dispatch('bundleApiCalls', {
        actions: {
          index: this.index,
          text: `{{${this.data.template}
                 |Page=${this.data.page}
                 ${this.data.date ? `|$date=${this.data.date}` : ''}
                 |Value=${this.data.value}
                 }}`
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/WikiTemplate.vue?vue&type=script&lang=js
 /* harmony default export */ var components_WikiTemplatevue_type_script_lang_js = (WikiTemplatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/WikiTemplate.vue?vue&type=style&index=0&id=4710ef84&prod&lang=css
var WikiTemplatevue_type_style_index_0_id_4710ef84_prod_lang_css = __webpack_require__("45a9");

// CONCATENATED MODULE: ./src/components/WikiTemplate.vue






/* normalize component */

var WikiTemplate_component = normalizeComponent(
  components_WikiTemplatevue_type_script_lang_js,
  WikiTemplatevue_type_template_id_4710ef84_render,
  WikiTemplatevue_type_template_id_4710ef84_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WikiTemplate = (WikiTemplate_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ResultProperty.vue?vue&type=script&lang=js










/* harmony default export */ var ResultPropertyvue_type_script_lang_js = ({
  name: 'WikisearchResultProperties',
  components: {
    WikisearchPill: Pill,
    WikisearchCheckbox: Checkbox,
    WikisearchWikiTemplate: WikiTemplate
  },
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    label: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      articlePath: mw.config.values.wgArticlePath.replace('/$1', '').replace('?title=$1', ''),
      // eslint-disable-next-line no-undef
      scriptPath: mw.config.get('wgScript'),
      // eslint-disable-next-line no-undef
      configTitle: mw.config.values.WikiSearchFront.config.settings.title
    };
  },
  computed: {
    computedLabel() {
      return this.config.label || this.label.replace(/^\$/, '');
    },
    properties() {
      return this.label.charAt(0) === '$' ? this.getUnderscorePropertiesFromData : this.getPropertiesFromData;
    },
    tagName() {
      const options = {
        pill: this.properties ? Pill : 'span',
        link: 'a',
        pdflink: 'a',
        image: 'img',
        template: WikiTemplate,
        checkbox: Checkbox,
        default: 'span',
        pdf: 'img'
      };
      return options[this.config.display] || options.default;
    },
    isHighlichted() {
      return this.config.highlight || this.label === '$snippet' || this.label === '$title' && this.configTitle.highlight;
    },
    isLazy() {
      return this.config.display === 'image' || this.config.display === 'pdf' ? 'lazy' : false;
    },
    getPropertiesFromData() {
      const source = '_source';
      const key = `P:${this.config.key}`;
      const type = this.config.type === 'datField' ? 'dat_raw' : this.config.type;
      const props = this.config.key && this.data[source] && this.data[source][key] && this.data[source][key][type] ? this.data[source][key][type] : '';
      if (props && this.config.type === 'datField') {
        return this.formatDates(props);
      }
      return props;
    },
    getUnderscorePropertiesFromData() {
      const source = '_source';
      const prop = this.label.substring(1);
      const options = {
        'Modification date': this.data[source]['P:29'] ? this.formatDates(this.data[source]['P:29'].dat_raw) : '',
        page: [this.data[source].subject.title],
        image: [this.data[source].file_path],
        namespacename: [this.data[source].subject.namespacename],
        snippet: this.getSnippets,
        title: [this.getTitle]
      };
      return options[prop] || '';
    },
    getTitle() {
      // eslint-disable-next-line no-undef
      const {
        configTitle
      } = this;
      const source = '_source';
      const key = configTitle ? `P:${configTitle.key}` : '';
      return configTitle && configTitle.key && this.data[source][key] && this.data[source][key][configTitle.type] ? this.data[source][key][configTitle.type][0] : this.data[source].subject.title;
    },
    getSnippets() {
      return this.data.highlight ? Object.values(this.data.highlight).flat() : [];
    },
    isChecked() {
      return this.$store.state.selectAllResults;
    },
    getUrlString() {
      return this.$store.state.term ? `?${this.configTitle.urlstring}=${this.$store.state.term}` : '';
    }
  },
  watch: {
    isChecked(value) {
      if (!value) {
        this.$store.commit('SET_SELECTED_RESULTS', []);
      } else if (this.properties.length) {
        this.properties.forEach(prop => {
          this.onChange(prop);
        });
      }
    }
  },
  methods: {
    src(prop) {
      if (this.config.display === 'pdf') {
        const source = '_source';
        const subjectTitle = this.data[source].subject.title.replaceAll(/\s/g, '_');
        return `${this.scriptPath}?title=Special:Redirect/file/${subjectTitle}&width=300`;
      }
      return this.config.display === 'image' ? `${this.articlePath}/${prop}`.replaceAll(' ', '_') : false;
    },
    href(prop) {
      const source = '_source';
      const {
        title,
        namespacename
      } = this.data[source].subject;
      if (this.label === '$title' && this.config.display !== 'pdflink') {
        const page = title.replace(/\?/gim, '%3F');
        const ns = namespacename ? `${namespacename}:` : '';
        const urlString = this.configTitle && this.configTitle.urlstring ? this.getUrlString : '';
        return `${this.articlePath}/${ns}${page}${urlString}`;
      }
      if (this.config.display === 'pdflink') {
        const snippet = this.$store.state.term ? `&snippet=${encodeURIComponent(this.$store.state.term)}` : '';
        return `${this.articlePath}/Pdf_viewer?pdf=${encodeURIComponent(title.replaceAll(' ', '_'))}${snippet}`;
      }
      if (this.config.display === 'link') {
        const regex = new RegExp('http');
        return regex.test(prop) ? prop.replace(/\s/gim, '_') : `${this.articlePath}/${prop.replace(/\s/gim, '_')}`;
      }
      return false;
    },
    labelForComponent(prop) {
      const label = this.config.label || prop;
      return this.config.display === 'pill' || this.config.display === 'checkbox' ? label : false;
    },
    valueForComponent(prop) {
      return this.config.display === 'checkbox' ? prop : false;
    },
    dataForComponent(prop) {
      if (this.config.display === 'template') {
        const source = '_source';
        const {
          title,
          namespacename
        } = this.data[source].subject;
        const ns = namespacename ? `${namespacename}:` : '';
        const outData = {
          key: this.label,
          value: prop,
          template: this.config.template,
          page: `${ns}${title}`
        };
        // eslint-disable-next-line no-undef
        const calendarSettings = mw.config.values.WikiSearchFront.config.settings.calendar;
        const dateKey = calendarSettings && calendarSettings.key ? `P:${calendarSettings.key}` : 'P:29';
        if (this.data[source][dateKey] || this.data[source][dateKey].dat_raw || this.data[source][dateKey].dat_raw[0]) {
          const [, year, month, day] = this.data[source][dateKey].dat_raw[0].split('/');
          outData.date = `${year}-${month}-${day}`;
        }
        return outData;
      }
      return this.config.display === 'pill' || this.config.display === 'template' ? {
        key: this.label,
        value: prop
      } : false;
    },
    highlightProperty(prop) {
      const {
        term
      } = this.$store.state;
      const regex = new RegExp(term, 'gmi');
      if (!term || this.label === '$snippet') {
        return prop;
      }
      return prop.replace(regex, `<b class="wikisearch-term-highlight">${term}</b>`);
    },
    sanitize(prop) {
      return sanitize(prop);
    },
    formatDates(dates) {
      return dates.map(date => {
        const [, year, month, day] = date.split('/');
        // eslint-disable-next-line no-undef
        const monthName = mw.config.values.wgMonthNames[month];
        return `${day} ${monthName}, ${year}`;
      });
    },
    onClick(e) {
      if (this.config.display === 'pill') {
        const selection = [];
        let found = false;
        const updatedSelection = this.$store.state.selected;
        updatedSelection.forEach(el => {
          if (el.key === e.key && el.value === e.value) {
            found = true;
          } else {
            selection.push(el);
          }
        });
        if (!found) {
          selection.push(e);
        }
        this.$store.commit('SET_SELECTED', selection);
      }
    },
    onChange(e) {
      if (this.config.display === 'checkbox') {
        let {
          selectedResults
        } = this.$store.state;
        if (selectedResults.includes(e)) {
          selectedResults = selectedResults.filter(x => x !== e);
        } else {
          selectedResults.push(e);
        }
        this.$store.commit('SET_SELECTED_RESULTS', selectedResults);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/ResultProperty.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ResultPropertyvue_type_script_lang_js = (ResultPropertyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/ResultProperty.vue?vue&type=style&index=0&id=4de934b3&prod&lang=css
var ResultPropertyvue_type_style_index_0_id_4de934b3_prod_lang_css = __webpack_require__("fafc");

// CONCATENATED MODULE: ./src/components/ResultProperty.vue






/* normalize component */

var ResultProperty_component = normalizeComponent(
  components_ResultPropertyvue_type_script_lang_js,
  ResultPropertyvue_type_template_id_4de934b3_render,
  ResultPropertyvue_type_template_id_4de934b3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ResultProperty = (ResultProperty_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/results/Results.vue?vue&type=script&lang=js




/* harmony default export */ var Resultsvue_type_script_lang_js = ({
  name: 'WikisearchResults',
  components: {
    WikisearchResultProperty: ResultProperty
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      articlePath: mw.config.values.wgArticlePath.replace('/$1', '').replace('?title=$1', ''),
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config
    };
  },
  computed: {
    /**
     * @returns {Object} settings for how and what result properties to show
     */
    computedHitSettings() {
      // check if we have $ prefixed properties otherwise load the defaults
      const isCustom = Object.keys(this.config.hitSettings).filter(e => e.charAt(0) === '$');
      if (!isCustom.length) {
        const start = {
          $title: {
            display: 'link',
            label: 'Page'
          },
          $snippet: {}
        };
        const end = {
          $page: {
            label: 'Page title'
          },
          '$Modification date': {}
        };
        return {
          ...start,
          ...this.config.hitSettings,
          ...end
        };
      }
      return this.config.hitSettings;
    }
  },
  methods: {
    getHref(hit) {
      const titleSettings = this.config.settings.title;
      const source = '_source';
      if (this.config.settings.title.display === 'pdflink' || this.config.hitSettings.$title && this.config.hitSettings.$title.display === 'pdflink') {
        const snippet = this.$store.state.term ? `&snippet=${encodeURIComponent(this.$store.state.term)}` : '';
        return `${this.articlePath}/Pdf_viewer?pdf=${encodeURIComponent(hit[source].subject.title.replaceAll(' ', '_'))}${snippet}`;
      }
      return hit[source] && hit[source][`P:${titleSettings.key}`] && hit[source][`P:${titleSettings.key}`][titleSettings.type] && hit[source][`P:${titleSettings.key}`][titleSettings.type][0] ? hit[source][`P:${titleSettings.key}`][titleSettings.type][0] : hit[source].subject.title;
    }
  }
});
// CONCATENATED MODULE: ./src/components/results/Results.vue?vue&type=script&lang=js
 /* harmony default export */ var results_Resultsvue_type_script_lang_js = (Resultsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/results/Results.vue?vue&type=style&index=0&id=0a0941b4&prod&lang=css
var Resultsvue_type_style_index_0_id_0a0941b4_prod_lang_css = __webpack_require__("c972");

// CONCATENATED MODULE: ./src/components/results/Results.vue






/* normalize component */

var Results_component = normalizeComponent(
  results_Resultsvue_type_script_lang_js,
  Resultsvue_type_template_id_0a0941b4_render,
  Resultsvue_type_template_id_0a0941b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Results = (Results_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/results/ResultsCalendar.vue?vue&type=template&id=f48421a4
var ResultsCalendarvue_type_template_id_f48421a4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-result-calendar",
    class: _vm.baseClass
  }, [_c('div', {
    staticClass: "wikisearch-result-calendar__header"
  }, _vm._l(_vm.calendar[0].days, function (day, index) {
    return _c('div', {
      key: 'header-' + index,
      staticClass: "wikisearch-result-calendar__header-item",
      class: _vm.dayClasses(day, 'isHeader')
    }, [_vm._v(" " + _vm._s(day.format('dd')) + " ")]);
  }), 0), _vm._l(_vm.calendar, function (week, index) {
    return _c('div', {
      key: 'week-' + index,
      staticClass: "wikisearch-result-calendar__week"
    }, _vm._l(week.days, function (day, i) {
      return _c('div', {
        key: 'day-' + index + i,
        staticClass: "wikisearch-result-calendar__day",
        class: _vm.dayClasses(day)
      }, [_c('span', {
        staticClass: "wikisearch-result-calendar__day-number",
        attrs: {
          "data-header": day.format('dd')
        }
      }, [_vm._v(" " + _vm._s(day.format('D')) + " ")]), _vm._l(_vm.getHit(day.format('YYYY-MM-DD')), function (hit) {
        return _c('div', {
          key: 'cal-hit-' + hit['_id'],
          staticClass: "wikisearch-result-calendar__result",
          class: _vm.resultClass(hit)
        }, _vm._l(_vm.computedHitSettings, function (hitConfig, label) {
          return _c('wikisearch-result-property', {
            key: day.format('YYYY-MM-DD') + label,
            attrs: {
              "label": label,
              "config": hitConfig,
              "data": hit
            }
          });
        }), 1);
      }), _vm.config.settings.calendar && _vm.config.settings.calendar.template ? _c('wikisearch-button', {
        staticClass: "wikisearch-result-calendar__add-item",
        attrs: {
          "icon": 'close',
          "type": 'icon'
        },
        on: {
          "click": function ($event) {
            return _vm.openDialog(day);
          }
        }
      }) : _vm._e()], 2);
    }), 0);
  }), _vm.dialog ? _c('wikisearch-calendar-dialog', {
    attrs: {
      "date": _vm.dialog
    },
    on: {
      "close": _vm.closeDialog
    }
  }) : _vm._e()], 2);
};
var ResultsCalendarvue_type_template_id_f48421a4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/results/ResultsCalendar.vue?vue&type=template&id=f48421a4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CalendarDialog.vue?vue&type=template&id=b74582c0
var CalendarDialogvue_type_template_id_b74582c0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-dialog__wrapper"
  }, [_c('div', {
    staticClass: "wikisearch-dialog"
  }, [_c('div', {
    staticClass: "wikisearch-dialog__tools",
    class: _vm.pending ? 'wikisearch-element--pending' : ''
  }, [_c('wikisearch-button', {
    attrs: {
      "label": 'Cancel'
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }), _c('div', {
    staticClass: "wikisearch-dialog__label"
  }, [_vm._v(" " + _vm._s(_vm.date.format('dd, D MMM YYYY')) + " ")]), _c('wikisearch-button', {
    attrs: {
      "label": 'Create',
      "type": 'progressive'
    },
    on: {
      "click": _vm.writeToWiki
    }
  })], 1), _c('div', {
    staticClass: "wikisearch-dialog__body"
  }, [_c('div', {
    staticClass: "wikisearch-dialog__field-label"
  }, [_vm._v(" Page name ")]), _c('wikisearch-input', {
    attrs: {
      "placeholder": 'Page name'
    },
    on: {
      "input": _vm.setPageName
    }
  }), _c('div', {
    staticClass: "wikisearch-dialog__description"
  }, [_vm._v(" " + _vm._s(_vm.description) + " ")]), _vm._l(_vm.templateData.params, function (param, key) {
    return _c('div', {
      key: 'param-' + key,
      staticClass: "wikisearch-dialog__field"
    }, [_c('div', {
      staticClass: "wikisearch-dialog__field-label"
    }, [_vm._v(" " + _vm._s(param.label ? param.label.en : key) + " ")]), _c('wikisearch-input', {
      attrs: {
        "id": key,
        "placeholder": key
      },
      on: {
        "input": _vm.updateValues
      }
    })], 1);
  })], 2)])]);
};
var CalendarDialogvue_type_template_id_b74582c0_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/CalendarDialog.vue?vue&type=template&id=b74582c0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CalendarDialog.vue?vue&type=script&lang=js




/* harmony default export */ var CalendarDialogvue_type_script_lang_js = ({
  name: 'WikisearchCalendarDialog',
  components: {
    WikisearchInput: Input,
    WikisearchButton: Button
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    date: {
      type: Object,
      default() {
        return {};
      }
    },
    type: {
      type: String,
      default: 'neutral'
    }
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config.settings.calendar,
      templateData: {},
      values: {},
      pageName: '',
      pending: false
    };
  },
  computed: {
    description() {
      return this.templateData.description ? this.templateData.description.en : '';
    }
  },
  mounted() {
    this.getTemplateData();
  },
  methods: {
    updateValues(value, key) {
      this.values[key] = value;
    },
    setPageName(value) {
      this.pageName = this.config.prefix ? this.config.prefix + value : value;
    },
    writeToWiki() {
      this.pending = true;
      const vars = Object.entries(this.values).map(([key, value]) => `|${key}=${value}`).join('\n');
      const wikitext = `{{${this.config.template}
      ${vars}
      |${this.config.name}=${this.date.format('YYYY-MM-DD')}
      }}`;
      const params = {
        action: 'edit',
        title: this.pageName,
        text: wikitext,
        format: 'json'
      };
      if (this.config.slot) {
        params.slot = this.config.slot;
        params.action = 'editslot';
      }
      // eslint-disable-next-line no-undef
      const api = new mw.Api();
      const that = this;
      api.postWithToken('csrf', params).done(() => {
        that.$emit('close');
        that.pending = false;
        that.$store.commit('SET_SELECTED', that.$store.state.selected);
      });
    },
    apiResult(data) {
      if (data.pages) {
        this.templateData = data.pages[Object.keys(data.pages)[0]];
      }
    },
    getTemplateData() {
      const params = {
        action: 'templatedata',
        titles: `Template:${this.config.template}`,
        format: 'json',
        formatversion: 2
      };
      this.$store.dispatch('doApiCall', {
        actions: {
          params,
          component: this
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/CalendarDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CalendarDialogvue_type_script_lang_js = (CalendarDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/CalendarDialog.vue?vue&type=style&index=0&id=b74582c0&prod&lang=css
var CalendarDialogvue_type_style_index_0_id_b74582c0_prod_lang_css = __webpack_require__("64bf");

// CONCATENATED MODULE: ./src/components/CalendarDialog.vue






/* normalize component */

var CalendarDialog_component = normalizeComponent(
  components_CalendarDialogvue_type_script_lang_js,
  CalendarDialogvue_type_template_id_b74582c0_render,
  CalendarDialogvue_type_template_id_b74582c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CalendarDialog = (CalendarDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/results/ResultsCalendar.vue?vue&type=script&lang=js








/* harmony default export */ var ResultsCalendarvue_type_script_lang_js = ({
  name: 'WikisearchResultsCalendar',
  components: {
    WikisearchResultProperty: ResultProperty,
    WikisearchButton: Button,
    WikisearchCalendarDialog: CalendarDialog
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      selectedCheckboxes: [],
      date: window.moment(),
      today: window.moment(),
      dialog: ''
    };
  },
  computed: {
    /**
     * @returns {String} classes for layout and weekend
     */
    baseClass() {
      const layout = this.config.settings.layout ? `wikisearch-result--layout-${this.config.settings.layout}` : '';
      const weekend = this.config.settings.calendar && this.config.settings.calendar.weekend === 'false' ? 'wikisearch-result-calendar--no-weekend' : '';
      return `${layout} ${weekend}`;
    },
    /**
     * @returns {Object} moment date object
     */
    time() {
      // this console log is a hack, maybe use a watcher instead?
      console.log(this.$store.state.selected);
      return this.$store.state.calendarDate || this.date;
    },
    /**
     * @returns {Array} of weeks with days as moment objects
     */
    calendar() {
      const calendar = [];
      const today = this.time;
      const startDay = today.clone().startOf('month').startOf('week');
      const endDay = today.clone().endOf('month').endOf('week');
      const date = startDay.clone().subtract(1, 'day');
      while (date.isBefore(endDay, 'day')) {
        calendar.push({
          days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
        });
      }
      return calendar;
    },
    /**
     * @returns {Object} settings for how and what result properties to show
     */
    computedHitSettings() {
      // check if we have $ prefixed properties otherwise load the title link first
      const isCustom = Object.keys(this.config.hitSettings).filter(e => e.charAt(0) === '$');
      if (!isCustom.length) {
        const start = {
          $title: {
            display: 'link',
            label: 'Page'
          }
        };
        return {
          ...start,
          ...this.config.hitSettings
        };
      }
      return this.config.hitSettings;
    },
    /**
     * @returns {String} key for the date property, falls back to Modification Date P:29
     */
    computedPropertyKey() {
      const calendarSettings = this.config.settings.calendar;
      return calendarSettings && calendarSettings.key ? `P:${calendarSettings.key}` : 'P:29';
    }
  },
  methods: {
    /**
     * Create class based on color setting property
     * @param {Object} hit result object
     * @returns {String} css class
     */
    resultClass(hit) {
      const source = '_source';
      const colorSettings = this.config.settings.calendar.color;
      if (colorSettings && colorSettings.key && colorSettings.type && hit[source][`P:${colorSettings.key}`]) {
        const prop = hit[source][`P:${colorSettings.key}`][colorSettings.type][0];
        return `wikisearch-result-calendar__result--${strip(prop)}`;
      }
      return '';
    },
    /**
     * Set dialog
     */
    closeDialog() {
      this.dialog = '';
    },
    /**
     * Set dialog day
     * @param {Object} day moment date object
     */
    openDialog(day) {
      this.dialog = day;
    },
    /**
     * Create classes for day display
     * @param {Object} day moment date object
     * @param {Boolean} isHeader is a header item
     * @returns {Object} classes to enable
     */
    dayClasses(day, isHeader) {
      const dayNumber = parseInt(day.format('d'), 10);
      return {
        'wikisearch-result-calendar__day--weekend': dayNumber === 0 || dayNumber === 6,
        'wikisearch-result-calendar__day--other-month': !isHeader && day.format('M') !== this.time.format('M'),
        'wikisearch-result-calendar__day--today': !isHeader && this.today.format('YYYY-MM-DD') === day.format('YYYY-MM-DD')
      };
    },
    /**
     * Add leading zero if needed
     * @param {String|Number} number
     * @returns {String|Number}
     */
    addZero(number) {
      return number.toString().length === 1 ? `0${number}` : number;
    },
    /**
     * Get hits for a specific date
     * @param {String} date format YYYY-MM-DD
     * @returns {Array} of matched hits for date
     */
    getHit(date) {
      const source = '_source';
      const input = this.$store.state.hits || [];
      const output = input.filter(hit => {
        if (!hit[source][this.computedPropertyKey] || !hit[source][this.computedPropertyKey].dat_raw || !hit[source][this.computedPropertyKey].dat_raw[0]) {
          return false;
        }
        const [, year, month, day] = hit[source][this.computedPropertyKey].dat_raw[0].split('/');
        return date === `${year}-${this.addZero(month)}-${this.addZero(day)}` ? hit : false;
      });
      if (output[0]) {
        return output;
      }
      return [];
    }
  }
});
// CONCATENATED MODULE: ./src/components/results/ResultsCalendar.vue?vue&type=script&lang=js
 /* harmony default export */ var results_ResultsCalendarvue_type_script_lang_js = (ResultsCalendarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/results/ResultsCalendar.vue?vue&type=style&index=0&id=f48421a4&prod&lang=css
var ResultsCalendarvue_type_style_index_0_id_f48421a4_prod_lang_css = __webpack_require__("15a8");

// CONCATENATED MODULE: ./src/components/results/ResultsCalendar.vue






/* normalize component */

var ResultsCalendar_component = normalizeComponent(
  results_ResultsCalendarvue_type_script_lang_js,
  ResultsCalendarvue_type_template_id_f48421a4_render,
  ResultsCalendarvue_type_template_id_f48421a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ResultsCalendar = (ResultsCalendar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/results/ResultsTemplate.vue?vue&type=template&id=f1bc9938
var ResultsTemplatevue_type_template_id_f1bc9938_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-wiki-template",
    class: _vm.loading ? 'wikisearch-wiki-template--loading wikisearch-element--pending' : '',
    domProps: {
      "innerHTML": _vm._s(_vm.result)
    }
  });
};
var ResultsTemplatevue_type_template_id_f1bc9938_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/results/ResultsTemplate.vue?vue&type=template&id=f1bc9938

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/results/ResultsTemplate.vue?vue&type=script&lang=js





/* harmony default export */ var ResultsTemplatevue_type_script_lang_js = ({
  name: 'WikisearchResultsTemplate',
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      // eslint-disable-next-line no-undef
      configTitle: mw.config.values.WikiSearchFront.config.settings.title,
      result: '',
      loading: false
    };
  },
  computed: {
    hits() {
      return this.$store.state.hits;
    },
    parse() {
      let wikitext = '';
      if (this.config.settings.intro) {
        wikitext += this.config.settings.intro;
      }
      if (Array.isArray(this.$store.state.hits)) {
        this.$store.state.hits.forEach(data => {
          wikitext += `{{${this.config.settings.template}`;
          Object.entries(this.computedHitSettings).forEach(([key, value]) => {
            const text = key.charAt(0) === '$' ? this.getUnderscorePropertiesFromData(data, key) : this.getPropertiesFromData(data, value.key, value.type, key);
            wikitext += text ? `|${text}` : '';
          });
          wikitext += `|$term=${elastic(this.$store.state.term)}`;
          wikitext += '}}';
        });
      }
      if (this.config.settings.outro) {
        wikitext += this.config.settings.outro;
      }
      return wikitext;
    },
    computedHitSettings() {
      // check if we have $ prefixed properties otherwise load the defaults
      const isCustom = Object.keys(this.config.hitSettings).filter(e => e.charAt(0) === '$');
      if (!isCustom.length) {
        const start = {
          $title: {
            display: 'link',
            label: 'Page'
          },
          $snippet: {}
        };
        const end = {
          $page: {
            label: 'Page title'
          },
          '$Modification date': {}
        };
        return {
          ...start,
          ...this.config.hitSettings,
          ...end
        };
      }
      return this.config.hitSettings;
    }
  },
  watch: {
    hits() {
      console.log('hits changed, render template');
      this.parseTemplate();
    }
  },
  mounted() {
    this.parseTemplate();
  },
  methods: {
    getPropertiesFromData(data, configKey, configType, label) {
      const source = '_source';
      const key = `P:${configKey}`;
      let props = configKey && data[source] && data[source][key] && data[source][key][configType] ? data[source][key].dat_raw || data[source][key][configType] : false;
      if (props && configType === 'datField') {
        props = this.formatDates(props);
      }
      props = Array.isArray(props) ? props.join(',') : props;
      return props ? `${label}=${props}` : '';
    },
    getUnderscorePropertiesFromData(data, label) {
      const source = '_source';
      const prop = label.substring(1);
      const options = {
        'Modification date': data[source]['P:29'] ? this.formatDates(data[source]['P:29'].dat_raw) : '',
        page: [data[source].subject.title],
        image: [data[source].file_path],
        namespacename: [data[source].subject.namespacename],
        snippet: this.sanitizeSnippet(this.getSnippets(data)),
        title: [this.getTitle(data)]
      };
      const value = Array.isArray(options[prop]) ? options[prop].join(',') : options[prop] || '';
      return value ? `${label}=${value}` : '';
    },
    getTitle(data) {
      const {
        configTitle
      } = this;
      const source = '_source';
      const key = configTitle ? `P:${configTitle.key}` : '';
      return configTitle && configTitle.key && data[source][key] && data[source][key][configTitle.type] ? data[source][key][configTitle.type][0] : data[source].subject.title;
    },
    sanitize(string) {
      const preTag = /{@@_HIGHLIGHT_@@/g;
      const postTag = /@@_HIGHLIGHT_@@}/g;
      return string.replace(preTag, '</nowiki><b class="wikisearch-term-highlight"><nowiki>').replace(postTag, '</nowiki></b><nowiki>');
    },
    sanitizeSnippet(data) {
      if (!data) {
        return '';
      }
      return Array.isArray(data) ? data.map(e => `<nowiki>${this.sanitize(e)}</nowiki>`) : `<nowiki>${this.sanitize(data)}</nowiki>`;
    },
    getSnippets(data) {
      return data.highlight ? Object.values(data.highlight).flat() : [];
    },
    formatDates(dates) {
      return dates.map(date => {
        const [, year, month, day] = date.split('/');
        // eslint-disable-next-line no-undef
        const monthName = mw.config.values.wgMonthNames[month];
        return `${day} ${monthName}, ${year}`;
      });
    },
    apiResult(data) {
      if (data.parse) {
        this.result = data.parse.text['*'];
        this.loading = false;
      }
    },
    parseTemplate() {
      this.loading = true;
      const params = {
        action: 'parse',
        text: this.parse,
        format: 'json',
        wrapoutputclass: 'wikisearch-wiki-template__output',
        disablelimitreport: true,
        disabletoc: true
      };
      this.$store.dispatch('doApiCall', {
        actions: {
          params,
          component: this
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/results/ResultsTemplate.vue?vue&type=script&lang=js
 /* harmony default export */ var results_ResultsTemplatevue_type_script_lang_js = (ResultsTemplatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/results/ResultsTemplate.vue?vue&type=style&index=0&id=f1bc9938&prod&lang=css
var ResultsTemplatevue_type_style_index_0_id_f1bc9938_prod_lang_css = __webpack_require__("dea9");

// CONCATENATED MODULE: ./src/components/results/ResultsTemplate.vue






/* normalize component */

var ResultsTemplate_component = normalizeComponent(
  results_ResultsTemplatevue_type_script_lang_js,
  ResultsTemplatevue_type_template_id_f1bc9938_render,
  ResultsTemplatevue_type_template_id_f1bc9938_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ResultsTemplate = (ResultsTemplate_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/results/ResultsCalendarYear.vue?vue&type=template&id=65438da0
var ResultsCalendarYearvue_type_template_id_65438da0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-result-calendar"
  }, [_c('div', {
    staticClass: "wikisearch-result-calendar__year"
  }, _vm._l(12, function (index) {
    return _c('div', {
      key: 'month-' + index,
      staticClass: "wikisearch-result-calendar__month"
    }, [_c('div', {
      staticClass: "wikisearch-result-calendar__month-header"
    }, [_vm._v(" " + _vm._s(_vm.months[index]) + " ")]), _c('div', {
      staticClass: "wikisearch-result-calendar__month-results"
    }, _vm._l(_vm.getHit(index), function (hit) {
      return _c('div', {
        key: 'cal-hit-' + hit['_id'],
        staticClass: "wikisearch-result-calendar__result",
        class: _vm.resultClass(hit)
      }, _vm._l(_vm.computedHitSettings, function (hitConfig, label) {
        return _c('wikisearch-result-property', {
          key: 'hit-' + label,
          attrs: {
            "label": label,
            "config": hitConfig,
            "data": hit
          }
        });
      }), 1);
    }), 0)]);
  }), 0)]);
};
var ResultsCalendarYearvue_type_template_id_65438da0_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/results/ResultsCalendarYear.vue?vue&type=template&id=65438da0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/results/ResultsCalendarYear.vue?vue&type=script&lang=js




/* harmony default export */ var ResultsCalendarYearvue_type_script_lang_js = ({
  name: 'WikisearchResultsCalendarYear',
  components: {
    WikisearchResultProperty: ResultProperty
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      // eslint-disable-next-line no-undef
      months: mw.config.values.wgMonthNames,
      selectedCheckboxes: [],
      date: window.moment(),
      today: window.moment(),
      dialog: ''
    };
  },
  computed: {
    /**
     * @returns {Object} moment date object
     */
    time() {
      // this console log is a hack, maybe use a watcher instead?
      console.log(this.$store.state.selected);
      return this.$store.state.calendarDate || this.date;
    },
    /**
     * @returns {Object} settings for how and what result properties to show
     */
    computedHitSettings() {
      // check if we have $ prefixed properties otherwise load the title link first
      const isCustom = Object.keys(this.config.hitSettings).filter(e => e.charAt(0) === '$');
      if (!isCustom.length) {
        const start = {
          $title: {
            display: 'link',
            label: 'Page'
          }
        };
        return {
          ...start,
          ...this.config.hitSettings
        };
      }
      return this.config.hitSettings;
    },
    /**
     * @returns {String} key for the date property, falls back to Modification Date P:29
     */
    computedPropertyKey() {
      const calendarSettings = this.config.settings.calendar;
      return calendarSettings && calendarSettings.key ? `P:${calendarSettings.key}` : 'P:29';
    }
  },
  methods: {
    /**
     * Create class based on color setting property
     * @param {Object} hit result object
     * @returns {String} css class
     */
    resultClass(hit) {
      const source = '_source';
      const colorSettings = this.config.settings.calendar.color;
      if (colorSettings && colorSettings.key && colorSettings.type && hit[source][`P:${colorSettings.key}`]) {
        const prop = hit[source][`P:${colorSettings.key}`][colorSettings.type][0];
        return `wikisearch-result-calendar__result--${strip(prop)}`;
      }
      return '';
    },
    /**
     * Add leading zero if needed
     * @param {String|Number} number
     * @returns {String|Number}
     */
    addZero(number) {
      return number.toString().length === 1 ? `0${number}` : number;
    },
    /**
     * Get hits for a specific date
     * @param {String} date format YYYY-MM-DD
     * @returns {Array} of matched hits for date
     */
    getHit(index) {
      const source = '_source';
      const input = this.$store.state.hits || [];
      const output = input.filter(hit => {
        if (!hit[source][this.computedPropertyKey] || !hit[source][this.computedPropertyKey].dat_raw || !hit[source][this.computedPropertyKey].dat_raw[0]) {
          return false;
        }
        const [, year, month] = hit[source][this.computedPropertyKey].dat_raw[0].split('/');
        return index === parseInt(month, 10) && year === this.time.format('YYYY') ? hit : false;
      });
      if (output[0]) {
        return output;
      }
      return [];
    }
  }
});
// CONCATENATED MODULE: ./src/components/results/ResultsCalendarYear.vue?vue&type=script&lang=js
 /* harmony default export */ var results_ResultsCalendarYearvue_type_script_lang_js = (ResultsCalendarYearvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/results/ResultsCalendarYear.vue?vue&type=style&index=0&id=65438da0&prod&lang=css
var ResultsCalendarYearvue_type_style_index_0_id_65438da0_prod_lang_css = __webpack_require__("05a0");

// CONCATENATED MODULE: ./src/components/results/ResultsCalendarYear.vue






/* normalize component */

var ResultsCalendarYear_component = normalizeComponent(
  results_ResultsCalendarYearvue_type_script_lang_js,
  ResultsCalendarYearvue_type_template_id_65438da0_render,
  ResultsCalendarYearvue_type_template_id_65438da0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ResultsCalendarYear = (ResultsCalendarYear_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CalendarTools.vue?vue&type=template&id=08ea06a1
var CalendarToolsvue_type_template_id_08ea06a1_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-calendar-tools"
  }, [_c('div', {
    staticClass: "wikisearch-calendar-tools__month"
  }, [_vm.view === 'month' ? _c('wikisearch-dropdown', {
    attrs: {
      "items": _vm.monthItems,
      "value": _vm.monthValue
    },
    on: {
      "select": _vm.onMonthSelect
    }
  }) : _vm._e(), _vm.view === 'year' ? _c('wikisearch-dropdown', {
    attrs: {
      "items": _vm.yearItems,
      "value": _vm.yearValue
    },
    on: {
      "select": _vm.onYearSelect
    }
  }) : _vm._e(), _c('wikisearch-button', {
    attrs: {
      "icon": 'back',
      "type": 'icon'
    },
    on: {
      "click": function ($event) {
        return _vm.changeDate(-1);
      }
    }
  }), _c('wikisearch-button', {
    attrs: {
      "icon": 'next',
      "type": 'icon'
    },
    on: {
      "click": function ($event) {
        return _vm.changeDate(1);
      }
    }
  })], 1), _vm.view === 'month' ? _c('wikisearch-dropdown', {
    attrs: {
      "items": _vm.yearItems,
      "value": _vm.yearValue
    },
    on: {
      "select": _vm.onYearSelect
    }
  }) : _vm._e()], 1);
};
var CalendarToolsvue_type_template_id_08ea06a1_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/CalendarTools.vue?vue&type=template&id=08ea06a1

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CalendarTools.vue?vue&type=script&lang=js






/* harmony default export */ var CalendarToolsvue_type_script_lang_js = ({
  name: 'WikisearchCalendarTools',
  components: {
    WikisearchButton: Button,
    WikisearchDropdown: Dropdown
  },
  props: {
    outertime: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      date: this.outertime,
      change: 0,
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config
    };
  },
  computed: {
    view() {
      return !this.config.settings.calendar || this.config.settings.calendar && this.config.settings.calendar.display !== 'year' ? 'month' : 'year';
    },
    time() {
      console.log(this.change);
      return this.$store.state.calendarDate || this.date;
    },
    yearValue() {
      const year = parseInt(this.time.format('YYYY'), 10);
      return {
        label: year,
        data: year
      };
    },
    monthValue() {
      return {
        label: this.time.format('MMMM'),
        data: this.time.format('M') - 1
      };
    },
    yearItems() {
      const year = parseInt(this.date.format('Y'), 10) + 2;
      return [...Array(10)].map((_, i) => ({
        data: year - i,
        label: year - i
      }));
    },
    monthItems() {
      return window.moment.months().map((month, index) => ({
        label: month,
        data: index
      }));
    },
    computedPropertyKey() {
      const calendarSettings = this.config.settings.calendar;
      return calendarSettings && calendarSettings.name ? calendarSettings.name : 'Modification date';
    }
  },
  watch: {
    time(value) {
      this.commitRange(value);
      this.$emit('change', value);
    }
  },
  mounted() {
    console.log('mounted', this.date);
    this.commitRange(this.date);
  },
  methods: {
    onMonthSelect(e) {
      this.date = this.time.set('month', e.data);
      this.$store.commit('SET_CALENDAR_DATE', this.date);
      this.change += 1;
    },
    onYearSelect(e) {
      this.date = this.time.set('year', e.data);
      this.$store.commit('SET_CALENDAR_DATE', this.date);
      this.change += 1;
    },
    changeDate(number) {
      this.date = this.view === 'year' ? this.time.add(number, 'years') : this.time.add(number, 'months');
      this.$store.commit('SET_CALENDAR_DATE', this.date);
      this.change += 1;
    },
    commitRange(date) {
      const startDay = this.view === 'year' ? date.clone().startOf('year') : date.clone().startOf('month').startOf('week');
      const endDay = this.view === 'year' ? date.clone().endOf('year') : date.clone().endOf('month').endOf('week');
      const ob = {
        key: this.computedPropertyKey,
        value: 'Calendar',
        range: {
          gte: this.julian(startDay),
          lte: this.julian(endDay)
        }
      };
      const {
        realDates
      } = this.$store.state;
      realDates.Calendar = {
        from: startDay.format('YYYY-MM-DD'),
        to: endDay.format('YYYY-MM-DD')
      };
      this.$store.commit('SET_REAL_DATES', realDates);
      console.log(ob);
      const selected = this.$store.state.selected.filter(e => e.key !== this.computedPropertyKey && e.value !== 'Calendar');
      selected.push(ob);
      this.$store.commit('SET_SELECTED', selected);
      console.log(selected);
    },
    julian(date) {
      return parseInt(date / 86400000 + 2440587.5, 10);
    }
  }
});
// CONCATENATED MODULE: ./src/components/CalendarTools.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CalendarToolsvue_type_script_lang_js = (CalendarToolsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/CalendarTools.vue?vue&type=style&index=0&id=08ea06a1&prod&lang=css
var CalendarToolsvue_type_style_index_0_id_08ea06a1_prod_lang_css = __webpack_require__("41c0");

// CONCATENATED MODULE: ./src/components/CalendarTools.vue






/* normalize component */

var CalendarTools_component = normalizeComponent(
  components_CalendarToolsvue_type_script_lang_js,
  CalendarToolsvue_type_template_id_08ea06a1_render,
  CalendarToolsvue_type_template_id_08ea06a1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CalendarTools = (CalendarTools_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetDateRange.vue?vue&type=template&id=3edc6efa
var FacetDateRangevue_type_template_id_3edc6efa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-daterange"
  }, [_c('div', {
    staticClass: "wikisearch-filter__label"
  }, [_c('label', [_vm._v(_vm._s(_vm.labelName))])]), _vm._v(" " + _vm._s(_vm.$i18n("wikisearchfront-date-range-from")) + " "), _c('wikisearch-date-input', {
    attrs: {
      "name": 'from'
    },
    on: {
      "change": _vm.updateRange
    }
  }), _vm._v(" " + _vm._s(_vm.$i18n("wikisearchfront-date-range-to")) + " "), _c('wikisearch-date-input', {
    attrs: {
      "name": 'to'
    },
    on: {
      "change": _vm.updateRange
    }
  }), _vm.showCheckbox ? _c('facet-checbox', {
    attrs: {
      "agg": _vm.agg,
      "index": 0,
      "name": _vm.name
    }
  }) : _vm._e()], 1);
};
var FacetDateRangevue_type_template_id_3edc6efa_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetDateRange.vue?vue&type=template&id=3edc6efa

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetCheckbox.vue?vue&type=template&id=345bc7fc
var FacetCheckboxvue_type_template_id_345bc7fc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('wikisearch-checkbox', {
    attrs: {
      "id": _vm.createID,
      "value": _vm.val,
      "checked": _vm.checked
    },
    on: {
      "change": _vm.updateSelection
    },
    scopedSlots: _vm._u([{
      key: "slot",
      fn: function () {
        return [_c('span', [_c('span', {
          staticClass: "wikisearch-checkbox__label"
        }, [_vm._v(" " + _vm._s(_vm.title) + " ")]), _vm.agg.doc_count > 0 ? _c('span', {
          staticClass: "wikisearch-checkbox__count",
          attrs: {
            "title": "count"
          }
        }, [_vm._v(" " + _vm._s(_vm.agg.doc_count) + " ")]) : _vm._e()])];
      },
      proxy: true
    }])
  });
};
var FacetCheckboxvue_type_template_id_345bc7fc_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetCheckbox.vue?vue&type=template&id=345bc7fc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetCheckbox.vue?vue&type=script&lang=js







/* harmony default export */ var FacetCheckboxvue_type_script_lang_js = ({
  name: 'FacetCheckbox',
  components: {
    WikisearchCheckbox: Checkbox
  },
  props: {
    agg: {
      type: Object,
      default() {
        return {};
      }
    },
    name: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    checked() {
      let found = false;
      const updatedSelection = this.$store.state.selected;
      updatedSelection.forEach(el => {
        if (el.key === this.val.key && el.value === this.val.value) {
          found = true;
        }
      });
      if (found) {
        return true;
      }
      return false;
    },
    /**
     * v-model the selection of all checkboxes
     */
    modelSelected: {
      set(val) {
        this.$store.commit('SET_SELECTED', val);
      },
      get() {
        return this.$store.state.selected;
      }
    },
    /**
     * @returns {String} classes for all current slected facets
     */
    labelClass() {
      let selectedClass = '';
      const {
        selected
      } = this.$store.state;
      let keyValue = this.agg.key_as_string ? this.agg.key_as_string : this.agg.key;
      const matches = selected.filter(el => el.value === this.agg.key || this.agg.key_as_string && el.value === this.agg.key_as_string);
      if (matches.length) {
        selectedClass = ' wikisearch--checkbox-selected';
      }
      if (!keyValue) {
        keyValue = '_';
      }
      return `wikisearch--checkbox__${strip(this.name)}--${strip(keyValue)}${selectedClass}`;
    },
    /**
     * @returns {String} title for checkbox label
     */
    title() {
      let title = '';
      if (this.agg.name) {
        title = this.agg.name;
      } else {
        title = this.agg.key_as_string
        // eslint-disable-next-line no-undef
        ? mw.message(`wikisearchfront-${this.agg.key_as_string}`).text() : this.agg.key;
      }
      return title;
    },
    /**
     * @returns {String} id for checkbox
     */
    createID() {
      let keyValue = this.agg.key_as_string ? this.agg.key_as_string : this.agg.key;
      if (!keyValue) {
        keyValue = '_';
      }
      return `${strip(this.name)}--${strip(keyValue)}`;
    },
    /**
     * @returns {Boolean} show checbox
     */
    show() {
      return this.agg.show !== 'no' && this.agg.doc_count > 0;
    },
    /**
     * @returns {Object} value for checkbox
     */
    val() {
      let out = '';
      const keyValue = this.agg.key_as_string ? this.agg.key_as_string : this.agg.key;
      if (this.agg.to) {
        console.log('hhh', this.agg);
        out = {
          value: this.agg.key,
          key: this.name,
          range: {
            gte: Number(`${this.agg.from}.0000000`),
            lte: Number(`${this.agg.to}.0000000`)
          }
        };
        if (this.agg.name) {
          out.name = this.agg.name;
        }
      } else {
        out = {
          value: keyValue,
          key: this.name
        };
        if (this.agg.name) {
          out.name = this.agg.name;
        }
        if (this.agg.key_as_string) {
          // eslint-disable-next-line no-undef
          out.name = mw.message(`wikisearchfront-${this.agg.key_as_string}`).text();
        }
        if (this.agg.type) {
          out.type = this.agg.type;
        }
      }
      return out;
    }
  },
  mounted() {
    const {
      selected
    } = this.$store.state;
    if (selected.length > 0 && this.agg.key_as_string) {
      selected.forEach((element, i) => {
        if (element.key === this.name && !selected[i].name) {
          // eslint-disable-next-line no-undef
          selected[i].name = mw.message(`wikisearchfront-${selected[i].value}`).text();
          external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.$store.state.selected, i, selected[i]);
        }
      });
    }
  },
  methods: {
    updateSelection(item) {
      const selection = [];
      let found = false;
      const updatedSelection = this.$store.state.selected;
      updatedSelection.forEach(el => {
        if (el.key === item.key && el.value === item.value) {
          found = true;
        } else {
          selection.push(el);
        }
      });
      if (!found) {
        selection.push(item);
      }
      this.$store.commit('SET_SELECTED', selection);
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetCheckbox.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetCheckboxvue_type_script_lang_js = (FacetCheckboxvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/filters/FacetCheckbox.vue?vue&type=style&index=0&id=345bc7fc&prod&lang=css
var FacetCheckboxvue_type_style_index_0_id_345bc7fc_prod_lang_css = __webpack_require__("d625");

// CONCATENATED MODULE: ./src/components/filters/FacetCheckbox.vue






/* normalize component */

var FacetCheckbox_component = normalizeComponent(
  filters_FacetCheckboxvue_type_script_lang_js,
  FacetCheckboxvue_type_template_id_345bc7fc_render,
  FacetCheckboxvue_type_template_id_345bc7fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetCheckbox = (FacetCheckbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DateInput.vue?vue&type=template&id=632046fe
var DateInputvue_type_template_id_632046fe_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-date-input"
  }, [_c('wikisearch-input', {
    attrs: {
      "value": _vm.time.format('D MMM YYYY')
    },
    on: {
      "focus": function ($event) {
        _vm.focused = true;
      },
      "blur": function ($event) {
        _vm.focused = false;
      },
      "click": function ($event) {
        _vm.focused = true;
        _vm.justSelected = false;
      }
    }
  }), _vm.focused && !_vm.justSelected ? _c('div', {
    staticClass: "wikisearch-date-input__list-box",
    attrs: {
      "role": "listbox"
    },
    on: {
      "mousedown": function ($event) {
        $event.preventDefault();
        return _vm.onItemMousedown.apply(null, arguments);
      },
      "click": function ($event) {
        _vm.focused = true;
      }
    }
  }, [_c('div', {
    staticClass: "wikisearch-date-input__tools"
  }, [_c('wikisearch-button', {
    attrs: {
      "icon": 'back',
      "type": 'icon'
    },
    on: {
      "click": function ($event) {
        return _vm.setMonth(-1);
      }
    }
  }), _c('wikisearch-button', {
    attrs: {
      "icon": 'up',
      "label": _vm.time.format('MMMM') + ' ' + _vm.time.format('YYYY')
    },
    on: {
      "click": _vm.changeDisplay
    }
  }), _c('wikisearch-button', {
    attrs: {
      "icon": 'next',
      "type": 'icon'
    },
    on: {
      "click": function ($event) {
        return _vm.setMonth(1);
      }
    }
  })], 1), _vm.display === 'years' ? _c('div', {
    staticClass: "wikisearch-date-input__years"
  }, _vm._l(_vm.years, function (year, index) {
    return _c('div', {
      key: 'year-' + index,
      staticClass: "wikisearch-date-input__year",
      class: {
        'wikisearch-date-input__year--active': year === _vm.yearValue
      },
      on: {
        "click": function ($event) {
          _vm.time.set('year', year);
          _vm.change += 1;
          _vm.activeDisplay = 1;
        }
      }
    }, [_vm._v(" " + _vm._s(year) + " ")]);
  }), 0) : _vm._e(), _vm.display === 'months' ? _c('div', {
    staticClass: "wikisearch-date-input__months"
  }, _vm._l(_vm.months, function (month, index) {
    return _c('div', {
      key: 'month-' + index,
      staticClass: "wikisearch-date-input__month",
      class: {
        'wikisearch-date-input__month--active': month === _vm.monthValue
      },
      on: {
        "click": function ($event) {
          _vm.time.set('month', index);
          _vm.change += 1;
          _vm.activeDisplay = 0;
        }
      }
    }, [_vm._v(" " + _vm._s(month) + " ")]);
  }), 0) : _vm._e(), _vm.display === 'days' ? _c('div', {
    staticClass: "wikisearch-date-input__days"
  }, [_c('div', {
    staticClass: "wikisearch-date-input__days-header"
  }, _vm._l(_vm.calendar[0].days, function (day, index) {
    return _c('div', {
      key: 'header-' + index,
      staticClass: "wikisearch-date-input__days-header-item"
    }, [_vm._v(" " + _vm._s(day.format('dd')) + " ")]);
  }), 0), _vm._l(_vm.calendar, function (week, index) {
    return _c('div', {
      key: 'week-' + index,
      staticClass: "wikisearch-date-input__week"
    }, _vm._l(week.days, function (day, i) {
      return _c('div', {
        key: 'day-' + index + i,
        staticClass: "wikisearch-date-input__day",
        class: {
          'wikisearch-date-input__day--active': day.format('YYYY-MM-DD') === _vm.time.format('YYYY-MM-DD'),
          'wikisearch-date-input__day--other-month': day.format('M') !== _vm.time.format('M'),
          'wikisearch-date-input__day--disabled': _vm.disabledDirection ? _vm.operators[_vm.disabledDirection](day, _vm.moment(_vm.disabledDate)) : false
        },
        on: {
          "click": function ($event) {
            _vm.date = day;
            _vm.justSelected = true;
          }
        }
      }, [_vm._v(" " + _vm._s(day.format('D')) + " ")]);
    }), 0);
  })], 2) : _vm._e()]) : _vm._e()], 1);
};
var DateInputvue_type_template_id_632046fe_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/DateInput.vue?vue&type=template&id=632046fe

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DateInput.vue?vue&type=script&lang=js






/* harmony default export */ var DateInputvue_type_script_lang_js = ({
  name: 'WikisearchDateInput',
  components: {
    WikisearchButton: Button,
    WikisearchInput: Input
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: String,
      default: ''
    },
    disabledDirection: {
      type: String,
      default: ''
    },
    disabledDate: {
      type: String,
      default: ''
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      selectedItems: this.selected,
      moment: window.moment,
      date: window.moment(),
      change: 0,
      activeDisplay: 0,
      displays: ['days', 'months', 'years'],
      operators: {
        before: (a, b) => a.format('YYYYMMDD') > b.format('YYYYMMDD'),
        after: (a, b) => a.format('YYYYMMDD') < b.format('YYYYMMDD')
      },
      displayYear: '',
      focused: false,
      justSelected: false
    };
  },
  computed: {
    time() {
      console.log(this.change);
      return this.date;
    },
    display() {
      return this.displays[this.activeDisplay];
    },
    yearValue() {
      return parseInt(this.time.format('YYYY'), 10);
    },
    monthValue() {
      return this.time.format('MMMM');
    },
    years() {
      // 00 20 40 60 80
      const year = parseInt(this.time.format('Y'), 10);
      const start = this.displayYear ? this.displayYear : year - year % 10;
      return [...Array(20)].map((_, i) => start + i);
    },
    months() {
      return this.moment.months();
    },
    calendar() {
      const calendar = [];
      const today = this.time;
      const startDay = today.clone().startOf('month').startOf('week');
      const endDay = today.clone().endOf('month').endOf('week');
      const date = startDay.clone().subtract(1, 'day');
      while (date.isBefore(endDay, 'day')) {
        calendar.push({
          days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
        });
      }
      return calendar;
    }
  },
  watch: {
    time(value) {
      this.$emit('change', value, this.name);
    },
    value(value) {
      this.date = window.moment(value);
    }
  },
  mounted() {
    if (this.value) {
      this.date = window.moment(this.value);
    }
  },
  methods: {
    itemClasses(item) {
      return {
        'wikisearch-list-box__item--selected': !!this.selectedItems.filter(e => e.data === item.data).length
      };
    },
    changeDisplay() {
      this.activeDisplay = this.activeDisplay === 2 ? 0 : this.activeDisplay + 1;
    },
    setMonth(number) {
      if (this.display !== 'years') {
        this.date = this.time.add(number, 'months');
        this.change += 1;
      } else {
        this.displayYear = this.years[0] + 20 * number;
      }
    },
    onItemMousedown() {
      const mouseupHandler = () => {
        document.documentElement.removeEventListener('mouseup', mouseupHandler);
      };
      document.documentElement.addEventListener('mouseup', mouseupHandler);
    }
  }
});
// CONCATENATED MODULE: ./src/components/DateInput.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DateInputvue_type_script_lang_js = (DateInputvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/DateInput.vue?vue&type=style&index=0&id=632046fe&prod&lang=css
var DateInputvue_type_style_index_0_id_632046fe_prod_lang_css = __webpack_require__("8e87");

// CONCATENATED MODULE: ./src/components/DateInput.vue






/* normalize component */

var DateInput_component = normalizeComponent(
  components_DateInputvue_type_script_lang_js,
  DateInputvue_type_template_id_632046fe_render,
  DateInputvue_type_template_id_632046fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DateInput = (DateInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetDateRange.vue?vue&type=script&lang=js





/* harmony default export */ var FacetDateRangevue_type_script_lang_js = ({
  name: 'FacetDateRange',
  components: {
    'facet-checbox': FacetCheckbox,
    WikisearchDateInput: DateInput
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      from: 0,
      to: 0
    };
  },
  computed: {
    /**
     * @returns {String} label for filter header
     */
    labelName() {
      return this.label || this.name.replace('_', ' ');
    },
    /**
     * @returns {Boolean}
     */
    showCheckbox() {
      if (this.$store.getters.rangeFrom && this.$store.getters.rangeTo) {
        return true;
      }
      return false;
    },
    /**
     * @returns {Object} data for checkbox
     */
    agg() {
      return {
        key: 'customrange',
        from: this.$store.getters.rangeFrom,
        to: this.$store.getters.rangeTo,
        doc_count: 1
      };
    }
  },
  mounted() {
    // this.dateInputs();
  },
  methods: {
    updateRange(value, element) {
      this[element] = value.format('YYYY-MM-DD');
      if (!this.from || !this.to) {
        return;
      }
      this.$store.commit(`SET_RANGE_${element}`, createDate(this[element]) + 1);
      let realdatesUpdated = this.$store.state.realDates;
      if (this.$store.state.rangeTo > 0) {
        realdatesUpdated = {
          customrange: {
            from: this.from,
            to: this.to
          }
        };
        const selectedUpdated = this.$store.state.selected;
        this.$store.commit('SET_REAL_DATES', realdatesUpdated);
        Object.keys(this.$store.state.selected).forEach((_, i) => {
          if (this.$store.state.selected && this.$store.state.selected[i] && this.$store.state.selected[i].value === 'customrange') {
            let te = '';
            if (element === 'from') {
              te = 'gte';
            } else {
              te = 'lte';
            }
            selectedUpdated[i].range[te] = Number(`${this.$store.state[`range${element.charAt(0).toUpperCase()}${element.slice(1)}`]}.0000000`);
            this.$store.commit('SET_SELECTED', selectedUpdated);
          }
        });
      }
    },
    /**
     * create mw.widgets.DateInputWidgets
     */
    dateInputs() {
      const {
        state
      } = this.$store;
      const that = this;
      const date = {};
      const dateInput = {};
      const dateInputs = ['from', 'to'];
      dateInputs.forEach(element => {
        // eslint-disable-next-line no-undef
        dateInput[element] = new mw.widgets.DateInputWidget();
        if (state.realDates.customrange) {
          dateInput[element].setValue(state.realDates.customrange[element]);
        }
        dateInput[element].on('change', () => {
          date[element] = dateInput[element].getValue();
          dateInput.to.mustBeAfter = date.from;
          dateInput.from.mustBeBefore = date.to;
          that.$store.commit(`SET_RANGE_${element}`, createDate(date[element]) + 1);
          let realdatesUpdated = state.realDates;
          if (state.rangeTo > 0) {
            realdatesUpdated = {
              customrange: {
                from: date.from,
                to: date.to
              }
            };
            const selectedUpdated = state.selected;
            that.$store.commit('SET_REAL_DATES', realdatesUpdated);
            Object.keys(state.selected).forEach((_, i) => {
              if (state.selected && state.selected[i] && state.selected[i].value === 'customrange') {
                let te = '';
                if (element === 'from') {
                  te = 'gte';
                } else {
                  te = 'lte';
                }
                selectedUpdated[i].range[te] = Number(`${state[`range${element.charAt(0).toUpperCase()}${element.slice(1)}`]}.0000000`);
                that.$store.commit('SET_SELECTED', selectedUpdated);
              }
            });
          }
        });
        document.querySelector(`#dateinput${element}`).appendChild(dateInput[element].$element[0]);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetDateRange.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetDateRangevue_type_script_lang_js = (FacetDateRangevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/filters/FacetDateRange.vue?vue&type=style&index=0&id=3edc6efa&prod&lang=css
var FacetDateRangevue_type_style_index_0_id_3edc6efa_prod_lang_css = __webpack_require__("08fc");

// CONCATENATED MODULE: ./src/components/filters/FacetDateRange.vue






/* normalize component */

var FacetDateRange_component = normalizeComponent(
  filters_FacetDateRangevue_type_script_lang_js,
  FacetDateRangevue_type_template_id_3edc6efa_render,
  FacetDateRangevue_type_template_id_3edc6efa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetDateRange = (FacetDateRange_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetRangeSlider.vue?vue&type=template&id=e6f396c4
var FacetRangeSlidervue_type_template_id_e6f396c4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: `wikisearch-filter
     wikisearch-slider
     wikisearch-slider__${_vm.strip(_vm.name)}
     wikisearch-slider__${_vm.strip(_vm.name)}--${_vm.realVal}`,
    style: `--slider-val:${_vm.realVal};--slider-val2:${_vm.realVal2}`
  }, [_c('span', {
    staticClass: "wikisearch-filter__label"
  }, [_c('label', [_vm._v(" " + _vm._s(_vm.name.replace(/_/g, ' ')) + " ")])]), _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isSelected,
      expression: "isSelected"
    }],
    staticClass: "wikisearch-filter-values"
  }, [_c('span', {
    staticClass: "wikisearch-filter-value1"
  }, [_vm._v(_vm._s(_vm.slideVal))]), _c('span', {
    staticClass: "wikisearch-filter-value2"
  }, [_vm._v(_vm._s(_vm.slideVal2))])])]), _c('div', {
    staticClass: "wikisearch-slider-input",
    class: _vm.sliderActiveClass
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modalVal,
      expression: "modalVal"
    }],
    attrs: {
      "type": "range",
      "max": _vm.max
    },
    domProps: {
      "value": _vm.modalVal
    },
    on: {
      "__r": function ($event) {
        _vm.modalVal = $event.target.value;
      }
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modalVal2,
      expression: "modalVal2"
    }],
    attrs: {
      "type": "range",
      "max": _vm.max
    },
    domProps: {
      "value": _vm.modalVal2
    },
    on: {
      "__r": function ($event) {
        _vm.modalVal2 = $event.target.value;
      }
    }
  }), _c('span', {
    staticClass: "wikisearch-slider-input-icon"
  })]), _c('facet-checbox', {
    attrs: {
      "name": _vm.name,
      "agg": _vm.agg,
      "index": 0
    }
  })], 1);
};
var FacetRangeSlidervue_type_template_id_e6f396c4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetRangeSlider.vue?vue&type=template&id=e6f396c4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetRangeSlider.vue?vue&type=script&lang=js





/* harmony default export */ var FacetRangeSlidervue_type_script_lang_js = ({
  name: 'FacetRangeSlider',
  components: {
    'facet-checbox': FacetCheckbox
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      slideVal: 0,
      slideVal2: 0,
      // eslint-disable-next-line no-undef
      facetSettings: mw.config.values.WikiSearchFront.config.facetSettings
    };
  },
  computed: {
    /**
     * @returns {String} active class
     */
    sliderActiveClass() {
      return this.isSelected ? '' : 'wikisearch-slider__inactive';
    },
    /**
     * @returns {Number} 0 = false
     */
    isSelected() {
      const {
        selected
      } = this.$store.state;
      return selected.filter(el => el.value === this.name).length;
    },
    /**
     * @returns {Number} max for input slider
     */
    max() {
      return this.facetSettings[this.name].max;
    },
    /**
     * v-model slider value
     */
    modalVal2: {
      set(val) {
        this.slideVal2 = val;
        const {
          selected
        } = this.$store.state;
        Object.keys(selected).forEach((_, i) => {
          if (selected && selected[i] && selected[i].value === this.name) {
            selected[i].range = {
              gte: this.slideVal,
              lte: this.slideVal2
            };
            this.$store.commit('SET_SELECTED', selected);
          }
        });
      },
      get() {
        return this.slideVal2;
      }
    },
    /**
     * v-model slider value
     */
    modalVal: {
      set(val) {
        this.slideVal = val;
        const {
          selected
        } = this.$store.state;
        Object.keys(selected).forEach((_, i) => {
          if (selected && selected[i] && selected[i].value === this.name) {
            selected[i].range = {
              gte: this.slideVal,
              lte: this.slideVal2
            };
            this.$store.commit('SET_SELECTED', selected);
          }
        });
      },
      get() {
        return this.slideVal;
      }
    },
    /**
     * @returns {Number} slider value to procentage
     */
    realVal() {
      return 100 / this.max * this.slideVal;
    },
    /**
     * @returns {Number} slider value to procentage
     */
    realVal2() {
      return 100 / this.max * this.slideVal2;
    },
    /**
     * @returns {Object} data for facet-checbox
     */
    agg() {
      return {
        key: this.name,
        from: this.slideVal,
        to: this.slideVal2,
        doc_count: 1
      };
    }
  },
  mounted() {
    // set default value for second slider to half of the max value
    this.slideVal2 = Math.round(this.max / 2);
  },
  methods: {
    strip(string) {
      return strip(string);
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetRangeSlider.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetRangeSlidervue_type_script_lang_js = (FacetRangeSlidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/filters/FacetRangeSlider.vue?vue&type=style&index=0&id=e6f396c4&prod&lang=css
var FacetRangeSlidervue_type_style_index_0_id_e6f396c4_prod_lang_css = __webpack_require__("f000");

// CONCATENATED MODULE: ./src/components/filters/FacetRangeSlider.vue






/* normalize component */

var FacetRangeSlider_component = normalizeComponent(
  filters_FacetRangeSlidervue_type_script_lang_js,
  FacetRangeSlidervue_type_template_id_e6f396c4_render,
  FacetRangeSlidervue_type_template_id_e6f396c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetRangeSlider = (FacetRangeSlider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetCombobox.vue?vue&type=template&id=43d58326


var FacetComboboxvue_type_template_id_43d58326_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.buckets.length ? _c('div', {
    class: `wikisearch-filter
     wikisearch-combobox
     wikisearch-filter--${_vm.strip(_vm.name)}`
  }, [_c('span', {
    staticClass: "wikisearch-filter__label"
  }, [_c('label', [_vm._v(" " + _vm._s(_vm.filterName) + " ")])]), _c('div', {
    staticClass: "wikisearch-combobox__selected"
  }, _vm._l(_vm.pils, function (activefilter, index) {
    return _c('wikisearch-pill', {
      key: index,
      attrs: {
        "data": activefilter,
        "label": activefilter.name
      },
      on: {
        "click": _vm.deselect
      }
    });
  }), 1), _c('div', {
    staticClass: "wikisearch-combobox__wrapper"
  }, [_c('wikisearch-input', {
    attrs: {
      "pending": _vm.pending,
      "value": _vm.term,
      "clearable": true,
      "placeholder": _vm.filterName,
      "role": "combobox",
      "aria-autocomplete": "list",
      "aria-owns": _vm.strip(_vm.name) + '-list-box',
      "aria-haspopup": "listbox",
      "aria-expanded": _vm.focused ? 'true' : 'false'
    },
    on: {
      "down": function ($event) {
        _vm.focused = true;
        _vm.$refs.listBox.onDown();
      },
      "up": function ($event) {
        return _vm.$refs.listBox.onUp();
      },
      "enter": _vm.onEnter,
      "input": _vm.searchAggs,
      "focus": function ($event) {
        _vm.focused = true;
      },
      "blur": function ($event) {
        _vm.focused = false;
      },
      "click": function ($event) {
        _vm.focused = true;
      }
    }
  }), _c('wikisearch-list-box', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.focused,
      expression: "focused"
    }],
    ref: "listBox",
    attrs: {
      "id": _vm.strip(_vm.name) + '-list-box',
      "items": _vm.sortedBuckets.map((e, i) => {
        return {
          id: i,
          label: e.name || e.key,
          doc_count: e.doc_count,
          data: e.key,
          show: e.show,
          icon: e.icon
        };
      }),
      "selected": _vm.selection
    },
    on: {
      "select": _vm.updateSelected
    },
    scopedSlots: _vm._u([{
      key: "menuItem",
      fn: function ({
        item
      }) {
        return [item.icon ? _c('wikisearch-icon', {
          staticClass: "wikisearch-combobox__option-icon",
          attrs: {
            "icon": item.icon
          }
        }) : _vm._e(), item.icon ? _c('span', [_vm._v(" " + _vm._s(_vm.$i18n('search')) + " "), _c('b', [_vm._v(_vm._s(item.label))])]) : _c('span', [_vm._v(" " + _vm._s(item.label) + " ")]), !_vm.noCount && !item.icon ? _c('span', {
          staticClass: "wikisearch-combobox__doc-count"
        }, [_vm._v(" " + _vm._s(item.doc_count) + " ")]) : _vm._e()];
      }
    }], null, false, 1145308393)
  })], 1)]) : _vm._e();
};
var FacetComboboxvue_type_template_id_43d58326_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetCombobox.vue?vue&type=template&id=43d58326

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetCombobox.vue?vue&type=script&lang=js










/* harmony default export */ var FacetComboboxvue_type_script_lang_js = ({
  name: 'FacetComboBox',
  components: {
    WikisearchPill: Pill,
    WikisearchInput: Input,
    WikisearchListBox: ListBox,
    WikisearchIcon: Icon
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    buckets: {
      type: [Array, Object],
      default() {
        return {};
      }
    },
    pending: {
      type: Boolean,
      default: false
    },
    noCount: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      focused: false,
      updatedBuckets: this.buckets,
      term: '',
      // eslint-disable-next-line no-undef
      facetSettings: mw.config.values.WikiSearchFront.config.facetSettings
    };
  },
  computed: {
    /**
     * @returns {String} label for filter group header
     */
    filterName() {
      return this.label || this.name.replace('_', ' ');
    },
    /**
     * @returns {Array} sorted buckets
     */
    sortedBuckets() {
      let unsorted = this.buckets;
      if (this.term) {
        const regex = new RegExp(this.term.replace('*', '.*'), 'ig');
        unsorted = this.buckets.filter(agg => agg.name ? agg.name.match(regex) : agg.key.match(regex));
      }
      let sorted = '';
      if (this.facetSettings[this.name] && this.facetSettings[this.name].sort === 'alphabetically') {
        sorted = unsorted.sort((a, b) => {
          const textA = a.key.toUpperCase();
          const textB = b.key.toUpperCase();
          // eslint-disable-next-line no-nested-ternary
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      } else {
        sorted = unsorted;
      }
      if (this.term && this.facetSettings[this.name].search) {
        sorted.unshift({
          doc_count: 'z',
          key: this.term,
          icon: 'search'
        });
      }
      if (this.facetSettings[this.name].order === 'reverse') {
        sorted.reverse();
      }
      return sorted;
    },
    /**
     * @returns {Array} slection for this filter group
     */
    pils() {
      const {
        selected
      } = this.$store.state;
      return selected.filter(el => el.key === this.name);
    },
    selection() {
      return this.pils.map(e => ({
        data: e.value
      }));
    }
  },
  methods: {
    onEnter() {
      const isSearch = this.sortedBuckets[this.$refs.listBox.active].icon;
      if (this.focused && !isSearch) {
        this.$refs.listBox.setActiveAsSelected();
      }
      if (isSearch) {
        this.search();
      }
    },
    strip(string) {
      return strip(string);
    },
    /**
     * @param {String} term user typed search term
     */
    search() {
      if (this.facetSettings[this.name] && this.facetSettings[this.name].search) {
        const selection = this.$store.state.selected;
        const newSelection = selection.filter(selected => selected.key !== this.name);
        if (this.term) {
          newSelection.push({
            key: this.name,
            value: this.term,
            type: 'query'
          });
        }
        this.$store.commit('SET_SELECTED', newSelection);
      }
    },
    updateSelected(item) {
      console.log(item);
      if (item.icon) {
        this.search();
        return;
      }
      this.focused = false;
      this.term = '';
      const selection = [];
      let found = false;
      const updatedSelection = this.$store.state.selected;
      updatedSelection.forEach(el => {
        if (el.key === this.name && el.value === item.data) {
          found = true;
        } else {
          selection.push(el);
        }
      });
      if (!found) {
        // this.term = item.label;
        selection.push({
          key: this.name,
          value: item.data,
          name: item.label
        });
      }
      this.$store.commit('SET_SELECTED', selection);
    },
    deselect(item) {
      const updatedSelection = this.$store.state.selected.filter(ob => ob !== item);
      this.$store.commit('SET_SELECTED', updatedSelection);
    },
    /**
     * @emits input to parent
     * @param {Event} e
     */
    searchAggs(e) {
      this.focused = true;
      this.term = e;
      this.$emit('input', this.term);
    },
    clearInput() {
      this.term = '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetCombobox.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetComboboxvue_type_script_lang_js = (FacetComboboxvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/filters/FacetCombobox.vue?vue&type=style&index=0&id=43d58326&prod&lang=css
var FacetComboboxvue_type_style_index_0_id_43d58326_prod_lang_css = __webpack_require__("858b");

// CONCATENATED MODULE: ./src/components/filters/FacetCombobox.vue






/* normalize component */

var FacetCombobox_component = normalizeComponent(
  filters_FacetComboboxvue_type_script_lang_js,
  FacetComboboxvue_type_template_id_43d58326_render,
  FacetComboboxvue_type_template_id_43d58326_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetCombobox = (FacetCombobox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetAskCombobox.vue?vue&type=template&id=537d69a6
var FacetAskComboboxvue_type_template_id_537d69a6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('facet-combobox', {
    attrs: {
      "pending": _vm.pending,
      "no-count": "",
      "buckets": _vm.buckets,
      "name": _vm.name,
      "label": _vm.label
    },
    on: {
      "input": _vm.ask,
      "search": _vm.search
    }
  });
};
var FacetAskComboboxvue_type_template_id_537d69a6_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetAskCombobox.vue?vue&type=template&id=537d69a6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetAskCombobox.vue?vue&type=script&lang=js







/* harmony default export */ var FacetAskComboboxvue_type_script_lang_js = ({
  name: 'FacetAskCombobox',
  components: {
    'facet-combobox': FacetCombobox
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    query: {
      type: String,
      default: ''
    },
    queryData: {
      type: String,
      default: ''
    },
    queryText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pending: false,
      buckets: [{
        doc_count: 1,
        key: '',
        show: 'no'
      }],
      // eslint-disable-next-line no-undef
      facetSettings: mw.config.values.WikiSearchFront.config.facetSettings
    };
  },
  mounted() {
    const {
      selected
    } = this.$store.state;
    selected.forEach(el => {
      if (el.key && el.key === this.name && el.type !== 'query') {
        this.ask(el.value, 'initial');
      }
    });
  },
  methods: {
    /**
     * process results from ask api query
     *
     * @param {Object} data result data from aks api query
     * @sets vue-data buckets
     */
    apiResult(data) {
      this.pending = false;
      const outputLabel = this.queryText;
      const alreadySelected = [];
      const {
        selected
      } = this.$store.state;
      const outputBuckets = selected.map(el => {
        let outputSelected = false;
        if (el.key && el.key === this.name) {
          alreadySelected.push(el.value);
          outputSelected = {
            key: el.value,
            doc_count: 1
          };
          if (el.name) {
            outputSelected.name = el.name;
          }
          if (el.type === 'query') {
            outputSelected.type = 'query';
            outputSelected.show = 'no';
          }
        }
        return outputSelected;
      }).filter(x => x);
      Object.entries(data.query.results).forEach(([key, value]) => {
        let outkey = this.queryData ? value.printouts[this.queryData] : value.fulltext;
        if (outkey) {
          if (Array.isArray(outkey)) {
            outkey = outkey[0].fulltext || outkey[0];
          }
          const buck = {
            doc_count: 1,
            key: outkey,
            page: key
          };
          if (outputLabel && value.printouts[outputLabel]) {
            const label = value.printouts[outputLabel];
            buck.name = label[0].fulltext || label[0];
            selected.forEach((el, i) => {
              if (el.key && el.key === this.name && el.value && el.value === outkey) {
                selected[i].name = buck.name;
                if (el.type === 'query') {
                  selected[i].type = 'query';
                }
                external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.$store.state.selected, i, selected[i]);
                if (outputBuckets[i]) {
                  outputBuckets[i].name = buck.name;
                }
              }
            });
          }
          if (!alreadySelected.includes(outkey)) {
            outputBuckets.push(buck);
          }
        }
      });
      if (outputBuckets.length > 0) {
        console.log(outputBuckets);
        this.buckets = outputBuckets;
      } else {
        this.buckets = [{
          doc_count: 1,
          key: '',
          show: 'no'
        }];
      }
    },
    /**
     * @event emited from facet-combobox
     * @param {String} term user typed search term
     */
    search(term) {
      if (this.facetSettings[this.name] && this.facetSettings[this.name].search) {
        const selection = this.$store.state.selected;
        const newSelection = selection.filter(selected => selected.key !== this.name);
        if (term) {
          this.buckets.push({
            key: term,
            doc_count: 1,
            type: 'query',
            show: 'no'
          });
          newSelection.push({
            key: this.name,
            value: term,
            type: 'query'
          });
        }
        this.$store.commit('SET_SELECTED', newSelection);
      }
    },
    /**
     * @event emited from facet-combobox
     * @param {String} term user typed search term
     * @param {Boolean} initial initiated on load or on user input
     */
    ask(term, initial) {
      this.pending = true;
      const outputData = this.queryData;
      const outputLabel = this.queryText;
      const output = outputLabel || initial ? `|?${outputData}|?${outputLabel}` : `|?${outputData}`;
      const input = outputLabel && !initial ? outputLabel : outputData;
      const askQuery = `${this.query}[[${input}::in:${term}]]${output}`;
      console.log(askQuery);
      const params = {
        action: 'ask',
        query: askQuery,
        format: 'json',
        formatversion: 2
      };
      this.$store.dispatch('doApiCall', {
        actions: {
          params,
          component: this
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetAskCombobox.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetAskComboboxvue_type_script_lang_js = (FacetAskComboboxvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/filters/FacetAskCombobox.vue





/* normalize component */

var FacetAskCombobox_component = normalizeComponent(
  filters_FacetAskComboboxvue_type_script_lang_js,
  FacetAskComboboxvue_type_template_id_537d69a6_render,
  FacetAskComboboxvue_type_template_id_537d69a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetAskCombobox = (FacetAskCombobox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetElasticCombobox.vue?vue&type=template&id=50f7ab21
var FacetElasticComboboxvue_type_template_id_50f7ab21_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('facet-combobox', {
    attrs: {
      "pending": _vm.pending,
      "buckets": _vm.buckets,
      "no-count": _vm.facetSettings[_vm.name].count === 'false',
      "name": _vm.name,
      "label": _vm.label
    },
    on: {
      "input": _vm.ask,
      "search": _vm.search
    }
  });
};
var FacetElasticComboboxvue_type_template_id_50f7ab21_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetElasticCombobox.vue?vue&type=template&id=50f7ab21

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetElasticCombobox.vue?vue&type=script&lang=js




// import Vue from 'vue';



/* harmony default export */ var FacetElasticComboboxvue_type_script_lang_js = ({
  name: 'FacetElasticCombobox',
  components: {
    'facet-combobox': FacetCombobox
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pending: false,
      buckets: [{
        doc_count: 1,
        key: '',
        show: 'no'
      }],
      // eslint-disable-next-line no-undef
      facetSettings: mw.config.values.WikiSearchFront.config.facetSettings
    };
  },
  mounted() {
    const {
      selected
    } = this.$store.state;
    selected.forEach(el => {
      if (el.key && el.key === this.name && el.type !== 'query') {
        this.ask(el.value);
      }
    });
  },
  methods: {
    /**
     * process results from ask api query
     *
     * @param {Object} data result data from aks api query
     * @sets vue-data buckets
     */
    apiResult(data) {
      this.pending = false;
      this.buckets = data.result.length ? data.result : [{
        doc_count: 1,
        key: '',
        show: 'no'
      }];
    },
    /**
     * @event emited from facet-combobox
     * @param {String} term user typed search term
     */
    search(term) {
      if (this.facetSettings[this.name] && this.facetSettings[this.name].search) {
        const selection = this.$store.state.selected;
        const newSelection = selection.filter(selected => selected.key !== this.name);
        if (term) {
          this.buckets.push({
            key: term,
            doc_count: 1,
            type: 'query',
            show: 'no'
          });
          newSelection.push({
            key: this.name,
            value: term,
            type: 'query'
          });
        }
        this.$store.commit('SET_SELECTED', newSelection);
      }
    },
    /**
     * @event emited from facet-combobox
     * @param {String} term user typed search term
     * @param {Boolan} initial initiated on load or on user input
     */
    ask(term) {
      this.pending = true;
      const params = {
        action: 'query',
        meta: 'WikiSearchCombobox',
        // eslint-disable-next-line no-undef
        pageid: mw.config.values.wgArticleId,
        filter: JSON.stringify(getSelection(this.$store.state)),
        search_term: elastic(this.$store.state.term),
        property: this.name,
        term: elastic(term),
        format: 'json',
        formatversion: 2
      };
      this.$store.dispatch('doApiCall', {
        actions: {
          params,
          component: this
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetElasticCombobox.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetElasticComboboxvue_type_script_lang_js = (FacetElasticComboboxvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/filters/FacetElasticCombobox.vue





/* normalize component */

var FacetElasticCombobox_component = normalizeComponent(
  filters_FacetElasticComboboxvue_type_script_lang_js,
  FacetElasticComboboxvue_type_template_id_50f7ab21_render,
  FacetElasticComboboxvue_type_template_id_50f7ab21_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetElasticCombobox = (FacetElasticCombobox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetFilter.vue?vue&type=template&id=3609d37b
var FacetFiltervue_type_template_id_3609d37b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: `wikisearch-filter wikisearch-filter--${_vm.strip(_vm.name)}`,
    attrs: {
      "role": "group",
      "aria-labelledby": `filter__label--${_vm.strip(_vm.name)}`
    }
  }, [_vm.strippedBuckets.length || _vm.type === 'date' ? _c('span', {
    staticClass: "wikisearch-filter__label"
  }, [_c('label', {
    attrs: {
      "id": `filter__label--${_vm.strip(_vm.name)}`
    }
  }, [_vm._v(" " + _vm._s(_vm.cleanName) + " ")])]) : _vm._e(), _c('div', {
    staticClass: "wikisearch-filter__options"
  }, [_vm._l(_vm.bucketsToShow, function (agg, i) {
    return _c('facet-checkbox', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: i < _vm.collapsed || _vm.open,
        expression: "i < collapsed || open"
      }],
      key: i + agg.key + _vm.name,
      attrs: {
        "agg": agg,
        "index": i,
        "name": _vm.name
      }
    });
  }), _vm.type === 'date' ? _c('div', {
    staticClass: "wikisearch-filter__custom-date"
  }, [_c('facet-checkbox', {
    attrs: {
      "agg": {
        'from': _vm.createDate(_vm.customDates.from),
        'to': _vm.createDate(_vm.customDates.to),
        'doc_count': 4,
        'key': 'customrange',
        'name': _vm.customDateRangeLabel
      },
      "index": 999,
      "name": _vm.name
    }
  }), _c('div', {
    staticClass: "wikisearch-date-input-container"
  }, [_c('wikisearch-date-input', {
    attrs: {
      "disabled-direction": "before",
      "disabled-date": _vm.customDates.to,
      "value": _vm.customDates.from
    },
    on: {
      "change": function ($event) {
        return _vm.setCustomDate($event, 'from');
      }
    }
  }), _c('wikisearch-date-input', {
    attrs: {
      "disabled-direction": "after",
      "disabled-date": _vm.customDates.from,
      "value": _vm.customDates.to
    },
    on: {
      "change": function ($event) {
        return _vm.setCustomDate($event, 'to');
      }
    }
  })], 1)], 1) : _vm._e(), _vm.strippedBuckets.length > _vm.collapsed ? _c('wikisearch-button', {
    staticClass: "wikisearch-filter__button",
    attrs: {
      "icon": _vm.open ? 'up' : 'down',
      "label": _vm.$i18n(`wikisearchfront-${_vm.lessOrMore}`)
    },
    on: {
      "click": function ($event) {
        _vm.open = !_vm.open;
      }
    }
  }) : _vm._e()], 2)]);
};
var FacetFiltervue_type_template_id_3609d37b_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetFilter.vue?vue&type=template&id=3609d37b

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetFilter.vue?vue&type=script&lang=js










/* harmony default export */ var FacetFiltervue_type_script_lang_js = ({
  name: 'FacetFilter',
  components: {
    FacetCheckbox: FacetCheckbox,
    WikisearchButton: Button,
    WikisearchDateInput: DateInput
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    valueLabels: {
      type: String,
      default: ''
    },
    buckets: {
      type: [Array, Object],
      default() {
        return {};
      }
    },
    translation: {
      type: String,
      default: ''
    },
    query: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      open: false,
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      translations: '',
      strippedBuckets: '',
      bucketsToShow: '',
      fired: false,
      customDates: {
        from: '',
        to: ''
      }
    };
  },
  computed: {
    customDateRangeLabel() {
      const format = 'D MMM YYYY';
      return `${window.moment(this.customDates.from).format(format)} - ${window.moment(this.customDates.to).format(format)}`;
    },
    /**
     * @returns {Number} number of uncollapsed items
     */
    collapsed() {
      return this.config.settings.facets ? parseInt(this.config.settings.facets, 10) : 5;
    },
    /**
     * @returns {Array} bucktes for watch
     */
    propChange() {
      return this.buckets;
    },
    /**
     * @returns {String} title for filter group header
     */
    cleanName() {
      return this.label || this.name.replace(/_/g, ' ');
    },
    /**
     * @returns {String} less or more
     */
    lessOrMore() {
      return this.open ? 'less' : 'more';
    }
  },
  /**
   * watch for changes in buckets
   */
  watch: {
    propChange() {
      this.organize();
    }
  },
  mounted() {
    const {
      selected,
      realDates
    } = this.$store.state;
    const isSelected = selected.filter(item => item.key === this.name && item.value === 'customrange');
    if (isSelected.length) {
      this.customDates = {
        to: realDates.customrange.to,
        from: realDates.customrange.from
      };
    }
    if (!isSelected.length) {
      this.customDates = {
        from: window.moment().subtract(1, 'days').format('YYYY-MM-DD'),
        to: window.moment().format('YYYY-MM-DD')
      };
    }
    /**
     * do translations
     */
    if (this.translation) {
      const params = {
        action: 'ask',
        query: `${this.query}|limit=500|?${this.translation}`,
        format: 'json',
        formatversion: 2
      };
      this.$store.dispatch('doApiCall', {
        actions: {
          params,
          component: this
        }
      });
    } else {
      this.organize();
    }
  },
  methods: {
    readableDate(value) {
      return readableDate(value);
    },
    createDate(value) {
      return createDate(value);
    },
    setCustomDate(value, type) {
      const {
        selected,
        realDates
      } = this.$store.state;
      this.customDates[type] = value.format('YYYY-MM-DD');
      const realdatesUpdated = {
        ...realDates,
        customrange: this.customDates
      };
      this.$store.commit('SET_REAL_DATES', realdatesUpdated);
      const isSelected = selected.filter(item => item.key === this.name);
      if (isSelected.length) {
        const selectedUpdated = selected.map(item => item.key === this.name ? {
          key: this.name,
          range: {
            gte: this.createDate(this.customDates.from),
            lte: this.createDate(window.moment(this.customDates.to).add(1, 'days').format('YYYY-MM-DD'))
          },
          value: 'customrange',
          name: this.customDateRangeLabel
        } : item);
        this.$store.commit('SET_SELECTED', selectedUpdated);
      }
    },
    /**
     * @param {Object} data query result from ask api
     */
    apiResult(data) {
      if (data.query) {
        this.translations = data.query.results;
        this.organize();
      }
    },
    /**
     * organize buckets
     */
    organize() {
      let organizedBuckets = [];
      const {
        selected
      } = this.$store.state;

      // check if buckets are an array, if not create array from the object
      organizedBuckets = Array.isArray(this.buckets) ? this.buckets : Object.entries(this.buckets).map(entrie => {
        const out = entrie[1];
        [out.key] = entrie;
        return out;
      });

      // remove buckets with 0 doc count
      organizedBuckets = organizedBuckets ? organizedBuckets.filter(el => el.doc_count > 0) : [];

      // sort the buckets
      if (this.type === 'date') {
        organizedBuckets.reverse();
      } else if (this.config.facetSettings[this.name] && this.config.facetSettings[this.name].sort === 'alphabetically') {
        organizedBuckets.sort((a, b) => {
          const textA = a.key_as_string ? a.key_as_string.toUpperCase() : a.key.toUpperCase();
          const textB = b.key_as_string ? b.key_as_string.toUpperCase() : b.key.toUpperCase();
          // eslint-disable-next-line no-nested-ternary
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      } else if (this.config.facetSettings[this.name] && this.config.facetSettings[this.name].sort === 'alphanumeric') {
        const reA = /[^a-zA-Z]/g;
        const reN = /[^0-9]/g;
        organizedBuckets.sort((a, b) => {
          const textA = a.key_as_string ? a.key_as_string.toUpperCase() : a.key.toUpperCase();
          const textB = b.key_as_string ? b.key_as_string.toUpperCase() : b.key.toUpperCase();
          const aA = textA.split(' ')[0].replace(reA, '');
          const bA = textB.split(' ')[0].replace(reA, '');
          if (aA === bA) {
            const aN = parseInt(textA.replace(reN, ''), 10);
            const bN = parseInt(textB.replace(reN, ''), 10);
            // eslint-disable-next-line no-nested-ternary
            return aN === bN ? 0 : aN > bN ? 1 : -1;
          }
          return aA > bA ? 1 : -1;
        });
      }
      if (this.config.facetSettings[this.name].order === 'reverse') {
        organizedBuckets.reverse();
      }
      if (this.translation) {
        organizedBuckets.forEach((element, i) => {
          const transKey = this.translations[element.key];
          if (transKey && transKey.printouts[this.translation]) {
            if (transKey.printouts[this.translation][0].fulltext) {
              console.log('translation:', this.translation);
              organizedBuckets[i].name = transKey.printouts[this.translation][0].fulltext;
            } else {
              [organizedBuckets[i].name] = transKey.printouts[this.translation];
            }
          }
        });
      }
      if (selected.length > 0 && !this.fired) {
        selected.forEach((element, i) => {
          if (this.translation) {
            const transValue = this.translations[element.value];
            if (transValue && transValue.printouts[this.translation]) {
              if (transValue.printouts[this.translation][0].fulltext) {
                selected[i].name = transValue.printouts[this.translation][0].fulltext;
              } else {
                [selected[i].name] = transValue.printouts[this.translation];
              }
              external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.$store.state.selected, i, selected[i]);
            }
          }
          const value = this.config.facetSettings[selected[i].key] ? this.config.facetSettings[selected[i].key] : false;
          if (value) {
            const {
              valueLabel
            } = this.config.facetSettings[selected[i].key];
            selected[i].name = valueLabel;
          }
          external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.$store.state.selected, i, selected[i]);
        });
        this.fired = true;
      } else {
        this.fired = true;
      }

      // If valueLabels are set, replace the original labels
      if (this.$store.state.valueLabelMap) {
        const labelMap = this.$store.state.valueLabelMap;
        if (labelMap[this.name]) {
          organizedBuckets.forEach((bucket, i) => {
            organizedBuckets[i].name = labelMap[this.name][bucket.key];
          });
        }
      }
      this.strippedBuckets = organizedBuckets;
      const {
        value
      } = this.config.facetSettings[this.name];
      if (value) {
        const {
          valueLabel
        } = this.config.facetSettings[this.name];
        const bucket = {
          key: value,
          doc_count: 0,
          show: 'yes'
        };
        if (valueLabel) {
          bucket.name = valueLabel;
        }
        this.strippedBuckets = [bucket];
      }
      this.bucketsToShow = this.strippedBuckets;
    },
    strip(string) {
      return strip(string);
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetFilter.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetFiltervue_type_script_lang_js = (FacetFiltervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/filters/FacetFilter.vue?vue&type=style&index=0&id=3609d37b&prod&lang=css
var FacetFiltervue_type_style_index_0_id_3609d37b_prod_lang_css = __webpack_require__("5550");

// CONCATENATED MODULE: ./src/components/filters/FacetFilter.vue






/* normalize component */

var FacetFilter_component = normalizeComponent(
  filters_FacetFiltervue_type_script_lang_js,
  FacetFiltervue_type_template_id_3609d37b_render,
  FacetFiltervue_type_template_id_3609d37b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetFilter = (FacetFilter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetSwitch.vue?vue&type=template&id=5940e75c
var FacetSwitchvue_type_template_id_5940e75c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: `wikisearch-filter wikisearch-filter--${_vm.strip(_vm.name)}`,
    attrs: {
      "role": "group",
      "aria-labelledby": `filter__label--${_vm.strip(_vm.name)}`
    }
  }, [_c('span', {
    staticClass: "wikisearch-filter__label"
  }, [_c('label', {
    attrs: {
      "id": `filter__label--${_vm.strip(_vm.name)}`
    }
  }, [_vm._v(" " + _vm._s(_vm.cleanName) + " ")])]), _c('div', {
    staticClass: "wikisearch-filter__options"
  }, [_c('label', {
    staticClass: "wikisearchfront-switch"
  }, [_c('input', {
    ref: "checkbox",
    staticClass: "wikisearchfront-switch__checkbox",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.isChecked
    },
    on: {
      "change": _vm.updateSwitched
    }
  }), _c('span', {
    staticClass: "wikisearchfront-switch__slider"
  })])])]);
};
var FacetSwitchvue_type_template_id_5940e75c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetSwitch.vue?vue&type=template&id=5940e75c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetSwitch.vue?vue&type=script&lang=js

/* harmony default export */ var FacetSwitchvue_type_script_lang_js = ({
  name: 'FacetSwitch',
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    settings: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    /**
     * @returns {String} title for checkbox label
     */
    cleanName() {
      return this.label || this.name.replace(/_/g, ' ');
    },
    isChecked() {
      if (this.$store.state.switched[this.name] === this.settings.true) {
        return true;
      }
      if (this.$store.state.switched[this.name] === this.settings.false) {
        return false;
      }
      return this.settings.default === 'true';
    }
  },
  methods: {
    strip(string) {
      return strip(string);
    },
    updateSwitched() {
      const {
        switched
      } = this.$store.state;
      switched[this.name] = this.$refs.checkbox.checked ? this.settings.true : this.settings.false;
      this.$store.commit('SET_SWITCHED', switched);
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetSwitch.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetSwitchvue_type_script_lang_js = (FacetSwitchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/filters/FacetSwitch.vue?vue&type=style&index=0&id=5940e75c&prod&lang=css
var FacetSwitchvue_type_style_index_0_id_5940e75c_prod_lang_css = __webpack_require__("767d");

// CONCATENATED MODULE: ./src/components/filters/FacetSwitch.vue






/* normalize component */

var FacetSwitch_component = normalizeComponent(
  filters_FacetSwitchvue_type_script_lang_js,
  FacetSwitchvue_type_template_id_5940e75c_render,
  FacetSwitchvue_type_template_id_5940e75c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetSwitch = (FacetSwitch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetSearch.vue?vue&type=template&id=083e4bdd
var FacetSearchvue_type_template_id_083e4bdd_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wikisearch-filter",
    class: `wikisearch-filter--${_vm.strip(_vm.name)}`,
    attrs: {
      "aria-disabled": "false"
    }
  }, [_c('div', {
    staticClass: "wikisearch-filter__label"
  }, [_c('label', [_vm._v(_vm._s(_vm.labelName))])]), _c('div', {
    staticClass: "wikisearch-filter__wrapper"
  }, [_c('wikisearch-input', {
    attrs: {
      "id": _vm.setID,
      "clearable": true,
      "start-icon": 'search',
      "placeholder": _vm.$i18n('search')
    },
    on: {
      "enter": _vm.search,
      "clear": _vm.clearTerm
    },
    model: {
      value: _vm.termTyped,
      callback: function ($$v) {
        _vm.termTyped = $$v;
      },
      expression: "termTyped"
    }
  })], 1)]);
};
var FacetSearchvue_type_template_id_083e4bdd_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetSearch.vue?vue&type=template&id=083e4bdd

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetSearch.vue?vue&type=script&lang=js





/* harmony default export */ var FacetSearchvue_type_script_lang_js = ({
  name: 'FacetSearch',
  components: {
    WikisearchInput: Input
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      termClear: '',
      userHasTyped: false
    };
  },
  computed: {
    /**
     * @returns {String} title for facet group header
     */
    labelName() {
      return this.label ? this.label : this.name;
    },
    /**
     * @returns {String} id
     */
    setID() {
      return `${this.strip(this.name)}--${this.strip(this.termTyped)}`;
    },
    /**
     * v-model user typed search term
     */
    termTyped: {
      set(value) {
        this.termClear = value;
        this.userHasTyped = true;
      },
      get() {
        if (this.termClear || this.userHasTyped) {
          return this.termClear;
        }
        const valueFromSelection = this.$store.state.selected.filter(el => el.key === this.name);
        return valueFromSelection.length ? valueFromSelection[0].value : '';
      }
    }
  },
  methods: {
    strip(string) {
      return strip(string);
    },
    /**
     * @returns {Array} selections from this filter group
     */
    filterSelected() {
      const {
        selected
      } = this.$store.state;
      return selected.filter(el => el.key !== this.name);
    },
    /**
     * @event keyup.enter search for user typed term
     */
    search() {
      const newSelected = this.filterSelected();
      if (this.termTyped) {
        newSelected.push({
          key: this.name,
          value: this.termTyped,
          type: 'query'
        });
      }
      this.$store.commit('SET_SELECTED', newSelected);
    },
    /**
     * clear user typed serach term
     */
    clearTerm() {
      const newSelected = this.filterSelected();
      this.termTyped = '';
      this.$store.commit('SET_SELECTED', newSelected);
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetSearch.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetSearchvue_type_script_lang_js = (FacetSearchvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/filters/FacetSearch.vue





/* normalize component */

var FacetSearch_component = normalizeComponent(
  filters_FacetSearchvue_type_script_lang_js,
  FacetSearchvue_type_template_id_083e4bdd_render,
  FacetSearchvue_type_template_id_083e4bdd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetSearch = (FacetSearch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"609ae40f-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetSorted.vue?vue&type=template&id=9265fa64
var FacetSortedvue_type_template_id_9265fa64_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._l(_vm.outputBuckets, function (typer, i) {
    return _c('div', {
      key: i,
      class: 'wikisearch-filter'
    }, [typer.buckets.length ? _c('span', {
      staticClass: "wikisearch-filter__label"
    }, [_c('label', [_vm._v(" " + _vm._s(i) + " ")])]) : _vm._e(), _c('div', {
      staticClass: "wikisearch-filter__options"
    }, [typer.buckets.length > _vm.collapsed && !_vm.open.includes(i) ? [_vm._l(typer.buckets.slice(0, _vm.collapsed), function (agg, j) {
      return _c('facet-checkbox', {
        key: j + agg.key + _vm.name,
        attrs: {
          "agg": agg,
          "index": j,
          "name": _vm.name
        }
      });
    }), _vm._l(typer.buckets.slice(_vm.collapsed, typer.buckets.length), function (agg, k) {
      return _c('facet-checkbox', {
        key: k + agg.key + _vm.name,
        staticStyle: {
          "display": "none"
        },
        attrs: {
          "agg": agg,
          "index": k,
          "name": _vm.name
        }
      });
    })] : _vm._l(typer.buckets, function (agg, l) {
      return _c('facet-checkbox', {
        key: l + agg.key + _vm.name,
        attrs: {
          "agg": agg,
          "index": l,
          "name": _vm.name
        }
      });
    }), typer.buckets.length > _vm.collapsed ? _c('wikisearch-button', {
      staticClass: "wikisearch-filter__button",
      attrs: {
        "icon": _vm.open.includes(i) ? 'up' : 'down',
        "label": _vm.$i18n(_vm.open.includes(i) ? 'wikisearchfront-less' : 'wikisearchfront-more')
      },
      on: {
        "click": function ($event) {
          return _vm.lessOrMore(i);
        }
      }
    }) : _vm._e()], 2)]);
  }), 0);
};
var FacetSortedvue_type_template_id_9265fa64_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/filters/FacetSorted.vue?vue&type=template&id=9265fa64

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.reduce.js
var es_iterator_reduce = __webpack_require__("9485");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filters/FacetSorted.vue?vue&type=script&lang=js







/* harmony default export */ var FacetSortedvue_type_script_lang_js = ({
  name: 'FacetSorted',
  components: {
    FacetCheckbox: FacetCheckbox,
    WikisearchButton: Button
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    buckets: {
      type: [Array, Object],
      default() {
        return {};
      }
    },
    queryData: {
      type: String,
      default: ''
    },
    query: {
      type: String,
      default: ''
    },
    queryText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      open: [],
      // eslint-disable-next-line no-undef
      facetSize: mw.config.values.WikiSearchFront.config.settings.facets,
      translations: ''
    };
  },
  computed: {
    /**
     * @returns {Number} number of facets to show uncollapsed
     */
    collapsed() {
      return this.facetSize ? parseInt(this.facetSize, 10) : 5;
    },
    /**
     * @returns {Array} sorted buckets
     */
    outputBuckets() {
      const out = {};
      const newTranslations = this.translations;
      this.buckets.forEach(element => {
        if (newTranslations[element.key]) {
          if (!out[newTranslations[element.key]]) {
            out[newTranslations[element.key]] = {
              buckets: [element]
            };
          } else {
            out[newTranslations[element.key]].buckets.push(element);
          }
        }
      });
      const sorted = Object.keys(out).sort().reduce((acc, key) => ({
        ...acc,
        [key]: out[key]
      }), {});
      return sorted;
    }
  },
  mounted() {
    const params = {
      action: 'ask',
      query: `${this.query}|limit=500|?${this.queryData}|?${this.queryText}`,
      format: 'json',
      formatversion: 2
    };
    this.$store.dispatch('doApiCall', {
      actions: {
        params,
        component: this
      }
    });
  },
  methods: {
    /**
     * @param {Object} data result data from ask api query
     */
    apiResult(data) {
      const stripQueryData = this.queryData.split('.');
      const strip = stripQueryData[stripQueryData.length - 1];
      const newTranslations = {};
      let sr = '';
      let rs = '';
      if (data.query) {
        Object.entries(data.query.results).forEach(element => {
          const queryResult = element[1];
          if (queryResult.printouts && queryResult.printouts[this.queryText] && queryResult.printouts[strip]) {
            if (queryResult.printouts[this.queryText][0] && queryResult.printouts[this.queryText][0].fulltext) {
              sr = queryResult.printouts[this.queryText][0].fulltext;
            } else {
              [sr] = queryResult.printouts[this.queryText];
            }
            if (queryResult.printouts[strip][0] && queryResult.printouts[strip][0].fulltext) {
              rs = queryResult.printouts[strip][0].fulltext;
            } else {
              [rs] = queryResult.printouts[strip];
            }
            newTranslations[sr] = rs;
          }
          this.translations = newTranslations;
        });
      }
    },
    /**
     * @param {String} ob filter group key
     */
    lessOrMore(ob) {
      const index = this.open.indexOf(ob);
      if (index > -1) {
        this.open.splice(index, 1);
      } else {
        this.open.push(ob);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/filters/FacetSorted.vue?vue&type=script&lang=js
 /* harmony default export */ var filters_FacetSortedvue_type_script_lang_js = (FacetSortedvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/filters/FacetSorted.vue





/* normalize component */

var FacetSorted_component = normalizeComponent(
  filters_FacetSortedvue_type_script_lang_js,
  FacetSortedvue_type_template_id_9265fa64_render,
  FacetSortedvue_type_template_id_9265fa64_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FacetSorted = (FacetSorted_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js
























/* harmony default export */ var Appvue_type_script_lang_js = ({
  store: store_store,
  name: 'App',
  components: {
    // ui
    SearchInput: SearchInput,
    PillsSelected: PillsSelected,
    SortOrder: SortOrder,
    WikisearchPagers: Pagers,
    WikisearchButton: Button,
    WikisearchCheckbox: Checkbox,
    WikisearchResults: Results,
    WikisearchResultsTemplate: ResultsTemplate,
    WikisearchResultsCalendar: ResultsCalendar,
    WikisearchResultsCalendarYear: ResultsCalendarYear,
    WikisearchCalendarTools: CalendarTools,
    // filters
    FacetCombobox: FacetCombobox,
    FacetFilter: FacetFilter,
    FacetSwitch: FacetSwitch,
    FacetAskCombobox: FacetAskCombobox,
    FacetElasticCombobox: FacetElasticCombobox,
    FacetSearch: FacetSearch,
    FacetSorted: FacetSorted,
    FacetDateRange: FacetDateRange,
    FacetRangeSlider: FacetRangeSlider
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      config: mw.config.values.WikiSearchFront.config,
      openFilters: true
    };
  },
  computed: {
    facetSettings() {
      return this.config.facetSettings;
    },
    hitSettings() {
      return this.config.hitSettings;
    },
    settings() {
      return this.config.settings;
    },
    state() {
      return this.$store.state;
    },
    themeClass() {
      return this.settings.theme ? `wikisearch--theme-${this.settings.theme}` : '';
    },
    selectedClass() {
      return this.state.selected.map(el => `wss-selected--${this.strip(el.key)}--${this.strip(el.value)}`).join(' ');
    },
    sortClass() {
      var _this$state$sortOrder, _this$state$sortOrder2;
      return `wss-order--${this.strip((_this$state$sortOrder = this.state.sortOrderType) !== null && _this$state$sortOrder !== void 0 ? _this$state$sortOrder : 'score')}--${this.strip((_this$state$sortOrder2 = this.state.sortOrder) !== null && _this$state$sortOrder2 !== void 0 ? _this$state$sortOrder2 : 'desc')}`;
    },
    showElement() {
      return this.settings.layout !== 'calendar';
    },
    resultDisplay() {
      const component = {
        calendar: this.settings.calendar && this.settings.calendar.display === 'year' ? ResultsCalendarYear : ResultsCalendar,
        template: ResultsTemplate,
        default: Results
      };
      return component[this.settings.layout] || component.default;
    },
    filters() {
      const components = {
        combobox: FacetCombobox,
        sorted: FacetSorted,
        search: FacetSearch,
        switch: FacetSwitch,
        datepicker: FacetDateRange,
        'ask combobox': FacetAskCombobox,
        'elastic combobox': FacetElasticCombobox,
        slider: FacetRangeSlider,
        default: FacetFilter
      };
      return Object.fromEntries(Object.keys(this.facetSettings).map(key => [key, {
        ...(this.state.aggs[key] && this.state.aggs[key][key] ? this.state.aggs[key][key] : {}),
        component: components[this.facetSettings[key].display] || components.default
      }]));
    },
    resultCountText() {
      switch (this.state.total.relation) {
        case 'gte':
          return this.$i18n('wikisearchfront-total-gte', this.state.total.value);
        case 'lte':
          return this.$i18n('wikisearchfront-total-lte', this.state.total.value);
        default:
          return this.$i18n('wikisearchfront-total-eq', this.state.total.value);
      }
    }
  },
  mounted() {
    this.$store.commit('START', true);
  },
  methods: {
    strip(string) {
      return strip(string);
    },
    doAction() {
      if (this.state.selectedResults.length) {
        if (this.settings.action.type === 'page') {
          const params = `?props=${this.state.selectedResults.join(',')}`;
          window.location = `${window.location.origin}/${this.settings.action.name}${params}`;
        } else {
          window[this.settings.action.name](this.state.selectedResults);
        }
      }
    },
    selectAll() {
      this.$store.commit('SET_SELECT_ALL_RESULTS', !this.state.selectAllResults);
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=3b7e95c9&prod&lang=css
var Appvue_type_style_index_0_id_3b7e95c9_prod_lang_css = __webpack_require__("0075");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (App);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("04f8");

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fe9a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];
});
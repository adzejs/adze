(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AdzeLib"] = factory();
	else
		root["AdzeLib"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/ansi-styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-styles/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

const wrapAnsi16 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => (...args) => {
	const rgb = fn(...args);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

const ansi2ansi = n => n;
const rgb2rgb = (r, g, b) => [r, g, b];

const setLazyProperty = (object, property, get) => {
	Object.defineProperty(object, property, {
		get: () => {
			const value = get();

			Object.defineProperty(object, property, {
				value,
				enumerable: true,
				configurable: true
			});

			return value;
		},
		enumerable: true,
		configurable: true
	});
};

/** @type {typeof import('color-convert')} */
let colorConvert;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
	if (colorConvert === undefined) {
		colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
	}

	const offset = isBackground ? 10 : 0;
	const styles = {};

	for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
		const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
		if (sourceSpace === targetSpace) {
			styles[name] = wrap(identity, offset);
		} else if (typeof suite === 'object') {
			styles[name] = wrap(suite[targetSpace], offset);
		}
	}

	return styles;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],

			// Bright color
			blackBright: [90, 39],
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Alias bright black as gray (and grey)
	styles.color.gray = styles.color.blackBright;
	styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	styles.color.grey = styles.color.blackBright;
	styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
	setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/browser-process-hrtime/index.js":
/*!******************************************************!*\
  !*** ./node_modules/browser-process-hrtime/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {module.exports = process.hrtime || hrtime

// polyfil for window.performance.now
var performance = global.performance || {}
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() }

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3
  var seconds = Math.floor(clocktime)
  var nanoseconds = Math.floor((clocktime%1)*1e9)
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0]
    nanoseconds = nanoseconds - previousTimestamp[1]
    if (nanoseconds<0) {
      seconds--
      nanoseconds += 1e9
    }
  }
  return [seconds,nanoseconds]
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/chalk/source/index.js":
/*!********************************************!*\
  !*** ./node_modules/chalk/source/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js");
const {stdout: stdoutColor, stderr: stderrColor} = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/browser.js");
const {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
} = __webpack_require__(/*! ./util */ "./node_modules/chalk/source/util.js");

const {isArray} = Array;

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m'
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class ChalkClass {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = {};
	applyOptions(chalk, options);

	chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

	Object.setPrototypeOf(chalk, Chalk.prototype);
	Object.setPrototypeOf(chalk.template, chalk);

	chalk.template.constructor = () => {
		throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
	};

	chalk.template.Instance = ChalkClass;

	return chalk.template;
};

function Chalk(options) {
	return chalkFactory(options);
}

for (const [styleName, style] of Object.entries(ansiStyles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		}
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this._styler, true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	}
};

const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

for (const model of usedModels) {
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this._generator.level;
		},
		set(level) {
			this._generator.level = level;
		}
	}
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => {
		if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
			// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
			return applyStyle(builder, chalkTag(builder, ...arguments_));
		}

		// Single argument is hot path, implicit coercion is faster than anything
		// eslint-disable-next-line no-implicit-coercion
		return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
	};

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder._generator = self;
	builder._styler = _styler;
	builder._isEmpty = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self._isEmpty ? '' : string;
	}

	let styler = self._styler;

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.indexOf('\u001B') !== -1) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

let template;
const chalkTag = (chalk, ...strings) => {
	const [firstString] = strings;

	if (!isArray(firstString) || !isArray(firstString.raw)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return strings.join(' ');
	}

	const arguments_ = strings.slice(1);
	const parts = [firstString.raw[0]];

	for (let i = 1; i < firstString.length; i++) {
		parts.push(
			String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
			String(firstString.raw[i])
		);
	}

	if (template === undefined) {
		template = __webpack_require__(/*! ./templates */ "./node_modules/chalk/source/templates.js");
	}

	return template(chalk, parts.join(''));
};

Object.defineProperties(Chalk.prototype, styles);

const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;

module.exports = chalk;


/***/ }),

/***/ "./node_modules/chalk/source/templates.js":
/*!************************************************!*\
  !*** ./node_modules/chalk/source/templates.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	const u = c[0] === 'u';
	const bracket = c[1] === '{';

	if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	if (u && bracket) {
		return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, arguments_) {
	const results = [];
	const chunks = arguments_.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		const number = Number(chunk);
		if (!Number.isNaN(number)) {
			results.push(number);
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const [styleName, styles] of Object.entries(enabled)) {
		if (!Array.isArray(styles)) {
			continue;
		}

		if (!(styleName in current)) {
			throw new Error(`Unknown Chalk style: ${styleName}`);
		}

		current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
	}

	return current;
}

module.exports = (chalk, temporary) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
		if (escapeCharacter) {
			chunk.push(unescape(escapeCharacter));
		} else if (style) {
			const string = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(character);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMessage);
	}

	return chunks.join('');
};


/***/ }),

/***/ "./node_modules/chalk/source/util.js":
/*!*******************************************!*\
  !*** ./node_modules/chalk/source/util.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const stringReplaceAll = (string, substring, replacer) => {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

module.exports = {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
};


/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
/* eslint-disable no-mixed-operators */
const cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

module.exports = convert;

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
const route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/lodash.defaultsdeep/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash.defaultsdeep/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = defaultsDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/supports-color/browser.js":
/*!************************************************!*\
  !*** ./node_modules/supports-color/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
	stdout: false,
	stderr: false
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/_contracts/Adze.ts":
/*!********************************!*\
  !*** ./src/_contracts/Adze.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Bundle.ts":
/*!**********************************!*\
  !*** ./src/_contracts/Bundle.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Configuration.ts":
/*!*****************************************!*\
  !*** ./src/_contracts/Configuration.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;
;

/***/ }),

/***/ "./src/_contracts/HrTime.ts":
/*!**********************************!*\
  !*** ./src/_contracts/HrTime.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Label.ts":
/*!*********************************!*\
  !*** ./src/_contracts/Label.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Log.ts":
/*!*******************************!*\
  !*** ./src/_contracts/Log.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Fingerprint of the function that is called when you execute
 * a log method such as info().
 */

/**
 * Fingerprint of the function that is called when you execute
 * a custom log method defined in the configuration.
 */

/**
 * The keys of the default terminating log methods included with Adze.
 */

/**
 * The configuration interface for the default Adze terminating log methods.
 */

/**
 * Boolean flags that represent various states of how the log
 * should be printed.
 */

/**
 * Values of the log instance that determine how it should
 * be printed.
 */

/**
 * All of the user accessible methods that can be chained to
 * create a customized log.
 */

/**
 * The final Adze log object prototype interface.
 */
;
;

/***/ }),

/***/ "./src/_contracts/Shed.ts":
/*!********************************!*\
  !*** ./src/_contracts/Shed.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Styles.ts":
/*!**********************************!*\
  !*** ./src/_contracts/Styles.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Utility.ts":
/*!***********************************!*\
  !*** ./src/_contracts/Utility.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/index.ts":
/*!*********************************!*\
  !*** ./src/_contracts/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Adze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Adze */ "./src/_contracts/Adze.ts");
/* harmony import */ var _Adze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Adze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Adze__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Adze__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Log */ "./src/_contracts/Log.ts");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Log__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Log__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Log__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bundle */ "./src/_contracts/Bundle.ts");
/* harmony import */ var _Bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Bundle__WEBPACK_IMPORTED_MODULE_2__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Bundle__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shed */ "./src/_contracts/Shed.ts");
/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Shed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Shed__WEBPACK_IMPORTED_MODULE_3__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Configuration */ "./src/_contracts/Configuration.ts");
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Configuration__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Configuration__WEBPACK_IMPORTED_MODULE_4__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Label */ "./src/_contracts/Label.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Label__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Label__WEBPACK_IMPORTED_MODULE_5__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Label__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Styles */ "./src/_contracts/Styles.ts");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Styles__WEBPACK_IMPORTED_MODULE_6__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Styles__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HrTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HrTime */ "./src/_contracts/HrTime.ts");
/* harmony import */ var _HrTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_HrTime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HrTime__WEBPACK_IMPORTED_MODULE_7__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HrTime__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utility */ "./src/_contracts/Utility.ts");
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Utility__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Utility__WEBPACK_IMPORTED_MODULE_8__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Utility__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));










/***/ }),

/***/ "./src/_defaults/defaults.ts":
/*!***********************************!*\
  !*** ./src/_defaults/defaults.ts ***!
  \***********************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/global */ "./src/global.ts");

var defaults = {
  log_level: 8,
  log_cache_size: 300,
  use_emoji: false,
  base_style: 'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;',
  custom_levels: {},
  log_levels: {
    verbose: {
      level: 8,
      style: 'padding-right: 26px; border-color: 1px solid #d9dce0; color: #999999; border-color: #cbc9c9;',
      terminal: ['italic', 'white'],
      method: 'debug',
      emoji: '💤'
    },
    debug: {
      level: 7,
      style: 'padding-right: 38px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
      terminal: ['bgBlack', 'white'],
      method: 'debug',
      emoji: '🐞'
    },
    log: {
      level: 6,
      style: "padding-right: 50px; background: linear-gradient(to right, #fff, #d9dce0); color: #333435; border-color: #bfc1c5;",
      terminal: ['bgGray', 'white'],
      method: 'log',
      emoji: '📓'
    },
    success: {
      level: 5,
      style: 'padding-right: 26px; background: linear-gradient(to right, #fff, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
      terminal: ['bgGreen', 'gray'],
      method: 'info',
      emoji: '🎉'
    },
    fail: {
      level: 4,
      style: "padding-right: ".concat(_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '42' : '44', "px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;"),
      terminal: ['bgRed', 'white'],
      method: 'info',
      emoji: '❌'
    },
    info: {
      level: 3,
      style: "padding-right: ".concat(_global__WEBPACK_IMPORTED_MODULE_0__["isSafari"] ? '49' : '44', "px; background: linear-gradient(to right, #fff, #b2d7ff); color: #465464; border-color: #96b5d7;"),
      terminal: ['bgBlue', 'white'],
      method: 'info',
      emoji: '📬'
    },
    warn: {
      level: 2,
      style: "background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ".concat(_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '34' : '44', "px; "),
      terminal: ['bgYellow', 'gray'],
      method: 'warn',
      emoji: '🔔'
    },
    error: {
      level: 1,
      style: "padding-right: ".concat(_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '29' : '27', "px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;"),
      terminal: ['bgRed', 'white'],
      method: 'error',
      emoji: '🔥'
    },
    attention: {
      level: 0,
      style: 'padding-right: 15px; background: linear-gradient(to right, #fff, #e2baff); color: #483c51; border-color: #c19fd9;',
      terminal: ['white', 'bold', 'bgMagenta'],
      method: 'info',
      emoji: '🌈'
    }
  },
  filters: {
    hideAll: false,
    namespace: {
      hideAll: false,
      exclude: [],
      include: []
    },
    label: {
      hideAll: false,
      exclude: [],
      include: []
    }
  }
};

/***/ }),

/***/ "./src/_defaults/index.ts":
/*!********************************!*\
  !*** ./src/_defaults/index.ts ***!
  \********************************/
/*! exports provided: defaults, shed_defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./src/_defaults/defaults.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults__WEBPACK_IMPORTED_MODULE_0__["defaults"]; });

/* harmony import */ var _shed_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shed_defaults */ "./src/_defaults/shed_defaults.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shed_defaults", function() { return _shed_defaults__WEBPACK_IMPORTED_MODULE_1__["shed_defaults"]; });




/***/ }),

/***/ "./src/_defaults/shed_defaults.ts":
/*!****************************************!*\
  !*** ./src/_defaults/shed_defaults.ts ***!
  \****************************************/
/*! exports provided: shed_defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shed_defaults", function() { return shed_defaults; });
var shed_defaults = {
  cache_limit: 300,
  global_cfg: null,
  filters: {}
};

/***/ }),

/***/ "./src/adze.ts":
/*!*********************!*\
  !*** ./src/adze.ts ***!
  \*********************/
/*! exports provided: adze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adze", function() { return adze; });
/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/terminators */ "./src/terminators/index.ts");
/* harmony import */ var _modifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/modifiers */ "./src/modifiers/index.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/printers */ "./src/printers/index.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/_defaults */ "./src/_defaults/index.ts");
var defaultsDeep = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");





/*
 * Future planned features:
 * 
 * - Select log levels optionally by name in listener creation.
 * - Create `silent()` terminator which doesn't print anything to the console but still fires listeners.
 * - Analytics and Reporting support.
 * - Remote server for receiving and analyzing logs.
 * - Attach meta data to logs (for listeners to take advantage of).
 * - Add default meta data to the configuration of the log.
 * - Persist logs in localStorage (configurable, off by default).
 * - Add easy functions for transporting logging data to various sources.
 *     - Write to a file.
 *     - Write to local storage.
 *     - Push to an API endpoint.
 */

/**
 * The entry point for creating Adze logs. This factory function can be used directly or configuration
 * can be provided and the result can be assigned to a new variable. This allows for multiple
 * logging instances with different configurations.
 * 
 * --- Default levels ---
 * 
 * 0. attention
 * 1. error
 * 2. warn
 * 3. info
 * 4. fail
 * 5. success
 * 6. log
 * 7. debug
 * 8. verbose 
 */

function adze() {
  var user_cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cfg = defaultsDeep(user_cfg, _defaults__WEBPACK_IMPORTED_MODULE_3__["defaults"]);
  return {
    cfg: cfg,
    traceable: false,
    dumpContext: false,
    isSilent: false,
    modifierQueue: [],
    printer: _printers__WEBPACK_IMPORTED_MODULE_2__["printLog"],
    attention: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('attention'),
    error: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('error'),
    warn: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('warn'),
    info: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('info'),
    fail: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('fail'),
    success: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('success'),
    log: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('log'),
    debug: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('debug'),
    verbose: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])('verbose'),
    custom: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["customMethod"])(),
    seal: _terminators__WEBPACK_IMPORTED_MODULE_0__["seal"],
    count: _modifiers__WEBPACK_IMPORTED_MODULE_1__["count"],
    countReset: _modifiers__WEBPACK_IMPORTED_MODULE_1__["countReset"],
    thread: _terminators__WEBPACK_IMPORTED_MODULE_0__["thread"],
    dump: _modifiers__WEBPACK_IMPORTED_MODULE_1__["dump"],
    close: _terminators__WEBPACK_IMPORTED_MODULE_0__["close"],
    clear: _terminators__WEBPACK_IMPORTED_MODULE_0__["clear"],
    clr: _terminators__WEBPACK_IMPORTED_MODULE_0__["clr"],
    dir: _modifiers__WEBPACK_IMPORTED_MODULE_1__["dir"],
    dirxml: _modifiers__WEBPACK_IMPORTED_MODULE_1__["dirxml"],
    table: _modifiers__WEBPACK_IMPORTED_MODULE_1__["table"],
    assert: _modifiers__WEBPACK_IMPORTED_MODULE_1__["assert"],
    test: _modifiers__WEBPACK_IMPORTED_MODULE_1__["test"],
    group: _modifiers__WEBPACK_IMPORTED_MODULE_1__["group"],
    groupCollapsed: _modifiers__WEBPACK_IMPORTED_MODULE_1__["groupCollapsed"],
    groupEnd: _modifiers__WEBPACK_IMPORTED_MODULE_1__["groupEnd"],
    label: _modifiers__WEBPACK_IMPORTED_MODULE_1__["label"],
    namespace: _modifiers__WEBPACK_IMPORTED_MODULE_1__["namespace"],
    ns: _modifiers__WEBPACK_IMPORTED_MODULE_1__["ns"],
    silent: _modifiers__WEBPACK_IMPORTED_MODULE_1__["silent"],
    trace: _modifiers__WEBPACK_IMPORTED_MODULE_1__["trace"],
    time: _modifiers__WEBPACK_IMPORTED_MODULE_1__["time"],
    timeNow: _modifiers__WEBPACK_IMPORTED_MODULE_1__["timeNow"],
    timeEnd: _modifiers__WEBPACK_IMPORTED_MODULE_1__["timeEnd"],

    // A shortcut accessor for grabbing the thread context from the label object.
    get context() {
      var _this$labelVal;

      return (_this$labelVal = this.labelVal) === null || _this$labelVal === void 0 ? void 0 : _this$labelVal.context;
    }

  };
}

/***/ }),

/***/ "./src/bundle.ts":
/*!***********************!*\
  !*** ./src/bundle.ts ***!
  \***********************/
/*! exports provided: bundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bundle", function() { return bundle; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Bundles all logs together by wrapping all subsequent logs in a Bundle callback
 * that curries them into an array. This bundle array can be used to recall and
 * filter logs.
 * 
 * **Example:**
 * ```javascript
 * const bundled = bundle(adze());
 * bundled.log("This is a log.");
 * bundled.log("This is another log.");
 * bundle.all(); // -> reprints all "bundled" logs.
 * ```
 */
function bundle(log) {
  var bundle_arr = [];
  return function () {
    var bundled_log = _objectSpread(_objectSpread({}, log), {}, {
      get bundle() {
        return bundle_arr;
      }

    });

    bundle_arr.push(bundled_log);
    return bundled_log;
  };
}
;

/***/ }),

/***/ "./src/conditions/conditions.ts":
/*!**************************************!*\
  !*** ./src/conditions/conditions.ts ***!
  \**************************************/
/*! exports provided: allowed, levelActive, evalPasses, notTestEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowed", function() { return allowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelActive", function() { return levelActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evalPasses", function() { return evalPasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notTestEnv", function() { return notTestEnv; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/util */ "./src/util/index.ts");


/**
 * Determine the fate of whether this log will terminate.
 */

function allowed(cfg, def) {
  return levelActive(def, cfg.log_level) && notTestEnv();
}
/**
 * Check if the log level is high enough for the log to terminate.
 */

function levelActive(def, level) {
  return def.level <= level;
}
/**
 * Check if any assertions or expressions pass for this log to terminate.
 */

function evalPasses(log) {
  if (log.assertion !== undefined && log.expression !== undefined) {
    console.warn("You have declared both an assertion and test on the same log. Please only declare one or nefarious results may occur.");
    return true;
  }

  if (log.assertion !== undefined) {
    return log.assertion === false;
  }

  if (log.expression !== undefined) {
    return log.expression === true;
  }

  return true;
}
/**
 * Verify that this log is not in a test environment by checking the environment context
 * or URL params if within a browser context. Prevent termination of the log if it is 'test'.
 */

function notTestEnv() {
  var _env$ADZE_ENV;

  // Allow for URL Param of ADZE_ENV when in the browser.
  return ((_env$ADZE_ENV = _global__WEBPACK_IMPORTED_MODULE_0__["env"] === null || _global__WEBPACK_IMPORTED_MODULE_0__["env"] === void 0 ? void 0 : _global__WEBPACK_IMPORTED_MODULE_0__["env"].ADZE_ENV) !== null && _env$ADZE_ENV !== void 0 ? _env$ADZE_ENV : Object(_util__WEBPACK_IMPORTED_MODULE_1__["getSearchParams"])().get('ADZE_ENV')) !== 'test';
}

/***/ }),

/***/ "./src/conditions/index.ts":
/*!*********************************!*\
  !*** ./src/conditions/index.ts ***!
  \*********************************/
/*! exports provided: allowed, levelActive, evalPasses, notTestEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditions */ "./src/conditions/conditions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowed", function() { return _conditions__WEBPACK_IMPORTED_MODULE_0__["allowed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "levelActive", function() { return _conditions__WEBPACK_IMPORTED_MODULE_0__["levelActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "evalPasses", function() { return _conditions__WEBPACK_IMPORTED_MODULE_0__["evalPasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notTestEnv", function() { return _conditions__WEBPACK_IMPORTED_MODULE_0__["notTestEnv"]; });



/***/ }),

/***/ "./src/filters/filters.ts":
/*!********************************!*\
  !*** ./src/filters/filters.ts ***!
  \********************************/
/*! exports provided: filterAll, filterNamespace, filterLabel, filterLevelRange, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAll", function() { return filterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return filterNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return filterLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return filterLevelRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/util */ "./src/util/index.ts");


 // CONVERT API TO EXPORT FILTER FUNCS

/**
 * Re-render the bundle of logs.
 */

function filterAll() {
  var bundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  loopBundle(bundle, function (log) {
    return true;
  });
}
/**
 * Filter the bundle of logs by the namespace.
 */

function filterNamespace() {
  var bundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ns = arguments.length > 1 ? arguments[1] : undefined;
  loopBundle(bundle, function (log) {
    var log_ns = log.namespaceVal;

    if (log_ns) {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(log_ns)) {
        var _ns$includes;

        return Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(ns) ? log_ns === ns : (_ns$includes = ns.includes(log_ns)) !== null && _ns$includes !== void 0 ? _ns$includes : false;
      } else {
        // Loop over each log ns value and see if any match any ns value.
        return log_ns.map(function (val) {
          return Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(ns) ? val === ns : ns.includes(val);
        }).includes(true);
      }
    }

    return false;
  });
}
/**
 * Filter and render the bundle of logs by the label.
 */

function filterLabel() {
  var bundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var lbl = arguments.length > 1 ? arguments[1] : undefined;
  loopBundle(bundle, function (log) {
    var _log$labelVal;

    return ((_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.name) === lbl;
  });
}
/**
 * Filter the bundle of logs by their log level.
 */

function filterLevelRange() {
  var bundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var low = arguments.length > 1 ? arguments[1] : undefined;
  var high = arguments.length > 2 ? arguments[2] : undefined;
  loopBundle(bundle, function (log, rndr) {
    var _log$level;

    var level = (_log$level = log.level) !== null && _log$level !== void 0 ? _log$level : Infinity;
    return level >= low && level <= high;
  });
}
/**
 * Loops over a bundle of logs and executes the callback for each log that 
 * has a render value.
 */

function loopBundle(bundle, cb) {
  bundle.forEach(function (log) {
    if (log.render) {
      var result = cb(log, log.render);
      if (result) render(log.render);
    }
  });
}
/**
 * Render a log based on a render object.
 */


function render(_ref) {
  var _console;

  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
      method = _ref2[0],
      args = _ref2[1];

  (_console = console)[method].apply(_console, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
}

/***/ }),

/***/ "./src/filters/index.ts":
/*!******************************!*\
  !*** ./src/filters/index.ts ***!
  \******************************/
/*! exports provided: filterAll, filterNamespace, filterLabel, filterLevelRange, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ "./src/filters/filters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAll", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterLevelRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: env, isBrowser, envIsWindow, isChrome, isFirefox, isSafari */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envIsWindow", function() { return envIsWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var env = global ? global : window;
var isBrowser = typeof window !== 'undefined';
/**
 * TypeGuard to determine if the env value is the Window object.
 */

var envIsWindow = function envIsWindow(env) {
  return (typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window)) !== undefined;
};
var isChromeVar = false;
var isFirefoxVar = false;
var isSafariVar = false;

if (envIsWindow(env)) {
  isChromeVar = env.navigator.userAgent.indexOf("Chrome") > -1;
  isFirefoxVar = env.navigator.userAgent.indexOf("Firefox") > -1;
  isSafariVar = env.navigator.userAgent.indexOf("Safari") > -1 && !isChromeVar;
}

var isChrome = isChromeVar;
var isFirefox = isFirefoxVar;
var isSafari = isSafariVar;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: adze, shedExists, createShed, removeShed, defaults, Log, LogFunction, bundle, filterAll, filterLabel, filterLevelRange, filterNamespace, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/_contracts */ "./src/_contracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["Log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFunction", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["LogFunction"]; });

/* harmony import */ var _adze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/adze */ "./src/adze.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adze", function() { return _adze__WEBPACK_IMPORTED_MODULE_1__["adze"]; });

/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/bundle */ "./src/bundle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bundle", function() { return _bundle__WEBPACK_IMPORTED_MODULE_2__["bundle"]; });

/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/shed */ "./src/shed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shedExists", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["shedExists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createShed", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["createShed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeShed", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["removeShed"]; });

/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/_defaults */ "./src/_defaults/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"]; });

/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/filters */ "./src/filters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAll", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["filterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["filterLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["filterLevelRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["filterNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["render"]; });









/***/ }),

/***/ "./src/label/index.ts":
/*!****************************!*\
  !*** ./src/label/index.ts ***!
  \****************************/
/*! exports provided: getLabel, addLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label */ "./src/label/label.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_0__["getLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_0__["addLabel"]; });



/***/ }),

/***/ "./src/label/label.ts":
/*!****************************!*\
  !*** ./src/label/label.ts ***!
  \****************************/
/*! exports provided: getLabel, addLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return getLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLabel", function() { return addLabel; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/global */ "./src/global.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/shed */ "./src/shed.ts");


/**
 * Attempts to get a label by the given name from the shed if it exists.
 */

function getLabel(name) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_1__["shedExists"])(shed)) {
    return shed.getLabel(name);
  }
}
/**
 * Attempts to add a label to the global store if it exists.
 */

function addLabel(label) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_1__["shedExists"])(shed)) {
    shed.addLabel(label);
  }

  return label;
}

/***/ }),

/***/ "./src/modifiers/contexts.ts":
/*!***********************************!*\
  !*** ./src/modifiers/contexts.ts ***!
  \***********************************/
/*! exports provided: dump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dump", function() { return dump; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");

/**
 * Instructs the log terminator to add the key/value pairs from the 
 * thread context to the console output.
 */

function dump() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this.dumpContext = true;
  });
}

/***/ }),

/***/ "./src/modifiers/counting.ts":
/*!***********************************!*\
  !*** ./src/modifiers/counting.ts ***!
  \***********************************/
/*! exports provided: count, countReset, countClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countReset", function() { return countReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countClear", function() { return countClear; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");

/**
 * Adds to the log count for log instances that share this log's label.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
 */

function count() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    if (_this.labelVal) {
      var _this$labelVal$count;

      _this.labelVal.count = (_this$labelVal$count = _this.labelVal.count) !== null && _this$labelVal$count !== void 0 ? _this$labelVal$count : 0;
      _this.labelVal.count += 1;
    }
  });
}
/**
 * Resets the count for the log instances that share this log's label.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
 */

function countReset() {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    if (_this2.labelVal) {
      _this2.labelVal.count = 0;
    }
  });
}
/**
 * Unsets the count for the log instances that share this log's label.
 * 
 * This is a non-standard method.
 */

function countClear() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    if (_this3.labelVal) {
      _this3.labelVal.count = undefined;
    }
  });
}

/***/ }),

/***/ "./src/modifiers/formatting.ts":
/*!*************************************!*\
  !*** ./src/modifiers/formatting.ts ***!
  \*************************************/
/*! exports provided: dir, dirxml, table, silent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirxml", function() { return dirxml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silent", function() { return silent; });
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/printers */ "./src/printers/index.ts");
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");


/**
 * Instructs this log to print in the dir format. Typically this is useful
 * for rendering deeply nested objects in the console.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
 */

function dir() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this.printer = _printers__WEBPACK_IMPORTED_MODULE_0__["printDir"];
  });
}
/**
 * Instructs this log to print in the dirxml format. Typically this is useful
 * for rendering HTML/DOM or XML Elements in the console.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
 */

function dirxml() {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this2.printer = _printers__WEBPACK_IMPORTED_MODULE_0__["printDirxml"];
  });
}
/**
 * Instructs this log to print its argument in a table format.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
 */

function table() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this3.printer = _printers__WEBPACK_IMPORTED_MODULE_0__["printTable"];
  });
}
/**
 * This modifier method allows the log to execute normally but
 * prevent it from printing to the console.
 */

function silent() {
  var _this4 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this4.isSilent = true;
  });
}

/***/ }),

/***/ "./src/modifiers/grouping.ts":
/*!***********************************!*\
  !*** ./src/modifiers/grouping.ts ***!
  \***********************************/
/*! exports provided: group, groupCollapsed, groupEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupCollapsed", function() { return groupCollapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupEnd", function() { return groupEnd; });
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/printers */ "./src/printers/index.ts");
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");


/**
 * Starts a log group.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
 */

function group() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this.printer = _printers__WEBPACK_IMPORTED_MODULE_0__["printGroup"];
  });
}
/**
 * Starts a log group that is collapsed by default.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
 */

function groupCollapsed() {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this2.printer = _printers__WEBPACK_IMPORTED_MODULE_0__["printGroupCollapsed"];
  });
}
/**
 * Ends the most recently opened log group.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
 */

function groupEnd() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this3.printer = _printers__WEBPACK_IMPORTED_MODULE_0__["printGroupEnd"];
  });
}

/***/ }),

/***/ "./src/modifiers/identifying.ts":
/*!**************************************!*\
  !*** ./src/modifiers/identifying.ts ***!
  \**************************************/
/*! exports provided: label, namespace, ns, trace, meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ns", function() { return ns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/label */ "./src/label/index.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/printers */ "./src/printers/index.ts");
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");



/**
 * Adds a label to the log. Label's can be used for log identification
 * and grouping. Label's also link log instances together.
 * 
 * This is a non-standard API, but it replaces the need to provide
 * a label to `count()` or `time()`.
 */

function label(name) {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_2__["prependModifier"])(this, function () {
    var _getLabel;

    _this.labelVal = Object(_label__WEBPACK_IMPORTED_MODULE_0__["addLabel"])((_getLabel = Object(_label__WEBPACK_IMPORTED_MODULE_0__["getLabel"])(name)) !== null && _getLabel !== void 0 ? _getLabel : {
      name: name,
      context: {}
    });
  });
}
/**
 * Adds a namespace to the log. Namespace's are primarily useful
 * for grouping logs together.
 * 
 * This is a non-standard API.
 */

function namespace(ns) {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_2__["modifier"])(this, function () {
    _this2.namespaceVal = ns;
  });
}
/**
 * An alias for `namespace()`.
 */

function ns(ns) {
  return this.namespace(ns);
}
/**
 * Prints a stacktrace along with the log.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
 */

function trace() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_2__["modifier"])(this, function () {
    _this3.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printTrace"];
  });
}
/**
 * Adds custom meta data to the log instance. This is useful
 * for scraping extra data from a log from a log listener.
 */

function meta(data) {
  var _this4 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_2__["modifier"])(this, function () {
    _this4.meta = data;
  });
}

/***/ }),

/***/ "./src/modifiers/index.ts":
/*!********************************!*\
  !*** ./src/modifiers/index.ts ***!
  \********************************/
/*! exports provided: time, timeNow, timeEnd, count, countReset, countClear, dir, dirxml, table, silent, group, groupCollapsed, groupEnd, label, namespace, ns, trace, meta, modifier, prependModifier, assert, test, dump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "./src/modifiers/timing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeNow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeEnd"]; });

/* harmony import */ var _counting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counting */ "./src/modifiers/counting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _counting__WEBPACK_IMPORTED_MODULE_1__["count"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countReset", function() { return _counting__WEBPACK_IMPORTED_MODULE_1__["countReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countClear", function() { return _counting__WEBPACK_IMPORTED_MODULE_1__["countClear"]; });

/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatting */ "./src/modifiers/formatting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return _formatting__WEBPACK_IMPORTED_MODULE_2__["dir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirxml", function() { return _formatting__WEBPACK_IMPORTED_MODULE_2__["dirxml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "table", function() { return _formatting__WEBPACK_IMPORTED_MODULE_2__["table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silent", function() { return _formatting__WEBPACK_IMPORTED_MODULE_2__["silent"]; });

/* harmony import */ var _grouping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grouping */ "./src/modifiers/grouping.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _grouping__WEBPACK_IMPORTED_MODULE_3__["group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupCollapsed", function() { return _grouping__WEBPACK_IMPORTED_MODULE_3__["groupCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupEnd", function() { return _grouping__WEBPACK_IMPORTED_MODULE_3__["groupEnd"]; });

/* harmony import */ var _identifying__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identifying */ "./src/modifiers/identifying.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ns", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["ns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["trace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["meta"]; });

/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_5__["modifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependModifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_5__["prependModifier"]; });

/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testing */ "./src/modifiers/testing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _testing__WEBPACK_IMPORTED_MODULE_6__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _testing__WEBPACK_IMPORTED_MODULE_6__["test"]; });

/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contexts */ "./src/modifiers/contexts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dump", function() { return _contexts__WEBPACK_IMPORTED_MODULE_7__["dump"]; });










/***/ }),

/***/ "./src/modifiers/modifier.ts":
/*!***********************************!*\
  !*** ./src/modifiers/modifier.ts ***!
  \***********************************/
/*! exports provided: modifier, prependModifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifier", function() { return modifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependModifier", function() { return prependModifier; });
/**
 * Queues a modifier method for execution when the log is terminated.
 */
function modifier(log, func) {
  log.modifierQueue = log.modifierQueue.concat([func]);
  return log;
}
/**
 * Queues a modifier method for execution at the beginning of the queue when the log is terminated.
 * This is used to ensure that labels are applied before modifiers that use labels are executed.
 */

function prependModifier(log, func) {
  log.modifierQueue = [func].concat(log.modifierQueue);
  return log;
}

/***/ }),

/***/ "./src/modifiers/testing.ts":
/*!**********************************!*\
  !*** ./src/modifiers/testing.ts ***!
  \**********************************/
/*! exports provided: assert, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");

/**
 * Prints a log warning that the assertion failed if the assertion is false.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
 */

function assert(assertion) {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this.assertion = assertion;
  });
}
/**
 * Allows the log to print if the expression is true.
 * 
 * This is a non-standard method.
 */

function test(expression) {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this2.expression = expression;
  });
}

/***/ }),

/***/ "./src/modifiers/timing.ts":
/*!*********************************!*\
  !*** ./src/modifiers/timing.ts ***!
  \*********************************/
/*! exports provided: time, timeNow, timeEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return timeNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return timeEnd; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");


var hrtime = __webpack_require__(/*! browser-process-hrtime */ "./node_modules/browser-process-hrtime/index.js");


/**
 * Starts a timer associated with this log's *label*. This will do nothing if
 * this log has no label.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
 */

function time() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    if (_this.labelVal) {
      _this.labelVal.timeStart = hrtime();
    }
  });
}
/**
 * Modifies the log render to show the current high-resolution real time.
 * 
 * This is a non-standard method.
 */

function timeNow() {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    var time_now = formatTime(hrtime());
    _this2.labelVal ? _this2.labelVal.timeNow = time_now : _this2.timeNowVal = time_now;
  });
}
/**
 * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the 
 * difference between the start time and when this method was called. This then
 * modifies the log render to show the time difference. This will do nothing if the *label* does
 * not exist.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
 */

function timeEnd() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    if (_this3.labelVal) {
      _this3.labelVal.timeEllapsed = formatTime(hrtime(_this3.labelVal.timeStart));
    }
  });
}
/*
  ! console.timeLog() is purposefully omitted from this API.

  timeLog() is a useless method within the Adze API. The same effect can be 
  accomplished by created a new log with the same label.
*/

/**
 * Takes an HrTime tuple and converts it into a human-readable formatted
 * string in the format of `{sec}s {ms}ms`.
 */

function formatTime(_ref) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
      sec = _ref2[0],
      nano = _ref2[1];

  return "".concat(sec, "s ").concat(nano / 1000000, "ms");
}

/***/ }),

/***/ "./src/printers/browser/index.ts":
/*!***************************************!*\
  !*** ./src/printers/browser/index.ts ***!
  \***************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed, fLeader, fMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printers */ "./src/printers/browser/printers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroupCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fLeader", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["fLeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fMeta", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["fMeta"]; });



/***/ }),

/***/ "./src/printers/browser/printers.ts":
/*!******************************************!*\
  !*** ./src/printers/browser/printers.ts ***!
  \******************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed, fLeader, fMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return printLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return printGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return printGroupCollapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fLeader", function() { return fLeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fMeta", function() { return fMeta; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/printers/shared.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/util */ "./src/util/index.ts");



 // ------- PRINT METHODS -------- //

/**
 * The primary method for printing logs to the browser console.
 */

function printLog(log, def, use_emoji, args) {
  var _ref = [def.method, fLeader(def, use_emoji, args), log.cfg.base_style + def.style, fMeta(log, use_emoji)],
      method = _ref[0],
      leader = _ref[1],
      style = _ref[2],
      meta = _ref[3];
  var render_args = meta === '' ? [leader, style].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)) : [leader, style, meta].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, method, render_args), log.isSilent);
}
/**
 * The method for printing group logs to the browser console.
 */

function printGroup(log, def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args), log.cfg.base_style + def.style];
  var render_args = typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, 'group', render_args), log.isSilent);
}
/**
 * The method for printing collapsed group logs to the browser console.
 */

function printGroupCollapsed(log, def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args), log.cfg.base_style + def.style];
  var render_args = typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, 'groupCollapsed', render_args), log.isSilent);
} // ------- PRINT FORMATTERS -------- //

/**
 * Formats the leader of the log string. This contains the emoji if enabled,
 * the log level name, and the number of arguments being printed.
 */

function fLeader(def, use_emoji, args) {
  return " %c".concat(fEmoji(def, use_emoji), " ").concat(fName(def.levelName), "(").concat(args.length, ")");
}
/**
 * Adds the emoji to the log leader if enabled.
 */

function fEmoji(def, use_emoji) {
  var _env$$shed, _env$$shed$overrides;

  return ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) || use_emoji ? " ".concat(def.emoji) : '';
}
/**
 * Adds the log level name to the leader in initial caps.
 */


function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_3__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}
/**
 * Formats the meta section of the log string which includes the
 * log namespace, the label, the timestamp from the timer, the count
 * from the counter, or the test result from any assertions if any of
 * these modifiers were applied to this log.
 */


function fMeta(log, use_emoji) {
  return "".concat(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["fNamespace"])(log)).concat(fLabel(log)).concat(fTime(log, use_emoji)).concat(fCount(log)).concat(fTest(log, use_emoji));
}
/**
 * Formats the time on the log string based on any time modifiers
 * that have been applied to this log.
 */

function fTime(log, use_emoji) {
  var _ref2, _log$labelVal$timeNow, _log$labelVal, _log$labelVal2, _env$$shed2, _env$$shed2$overrides;

  var label_txt = "".concat((_ref2 = (_log$labelVal$timeNow = (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.timeNow) !== null && _log$labelVal$timeNow !== void 0 ? _log$labelVal$timeNow : (_log$labelVal2 = log.labelVal) === null || _log$labelVal2 === void 0 ? void 0 : _log$labelVal2.timeEllapsed) !== null && _ref2 !== void 0 ? _ref2 : '');
  return label_txt !== '' ? " (".concat(((_env$$shed2 = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed2 === void 0 ? void 0 : (_env$$shed2$overrides = _env$$shed2.overrides) === null || _env$$shed2$overrides === void 0 ? void 0 : _env$$shed2$overrides.use_emoji) || use_emoji ? '⏱' : '').concat(label_txt, ") ") : '';
}
/**
 * Formats the count on the log string based on any counter modifiers
 * that have been applied to this log.
 */


function fCount(log) {
  var _log$labelVal3;

  var count = (_log$labelVal3 = log.labelVal) === null || _log$labelVal3 === void 0 ? void 0 : _log$labelVal3.count;
  return count !== undefined ? "(Count: ".concat(count, ")") : '';
}
/**
 * Formats the label on the log string based on the label
 * modifier applied to this log.
 */


function fLabel(log) {
  return log.labelVal ? "[".concat(log.labelVal.name, "] ") : '';
}
/**
 * Formats the assertion or test on the log string based on
 * any testing modifiers applied to this log.
 */


function fTest(log, use_emoji) {
  return log.assertion === false ? "".concat(use_emoji ? '❌ ' : '', "Assertion failed:") : '';
}

/***/ }),

/***/ "./src/printers/index.ts":
/*!*******************************!*\
  !*** ./src/printers/index.ts ***!
  \*******************************/
/*! exports provided: print, printLog, printGroup, printGroupCollapsed, printGroupEnd, printTable, printDir, printDirxml, printTrace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return printLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return printGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return printGroupCollapsed; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/global */ "./src/global.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./src/printers/browser/index.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "./src/printers/node/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/printers/shared.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroupEnd", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printGroupEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printTable", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printDir", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printDir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printDirxml", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printDirxml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printTrace", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printTrace"]; });





var printLog = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printLog"] : _node__WEBPACK_IMPORTED_MODULE_2__["printLog"];
var printGroup = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printGroup"] : _node__WEBPACK_IMPORTED_MODULE_2__["printGroup"];
var printGroupCollapsed = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printGroupCollapsed"] : _node__WEBPACK_IMPORTED_MODULE_2__["printGroupCollapsed"];


/***/ }),

/***/ "./src/printers/node/index.ts":
/*!************************************!*\
  !*** ./src/printers/node/index.ts ***!
  \************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed, fLeader, fMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printers */ "./src/printers/node/printers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroupCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fLeader", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["fLeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fMeta", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["fMeta"]; });



/***/ }),

/***/ "./src/printers/node/printers.ts":
/*!***************************************!*\
  !*** ./src/printers/node/printers.ts ***!
  \***************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed, fLeader, fMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return printLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return printGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return printGroupCollapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fLeader", function() { return fLeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fMeta", function() { return fMeta; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/printers/shared.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/util */ "./src/util/index.ts");




 // ------- PRINT METHODS -------- //

/**
 * The primary method for printing logs to the node console.
 */

function printLog(log, def, use_emoji, args) {
  var _ref = [def.method, fLeader(def, use_emoji, args), def.terminal, fMeta(log, use_emoji)],
      method = _ref[0],
      leader = _ref[1],
      style = _ref[2],
      meta = _ref[3];
  var render_args = meta === '' ? [leader].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)) : [leader, style, meta].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, method, render_args), log.isSilent);
}
/**
 * The method for printing group logs to the node console.
 */

function printGroup(log, def, use_emoji, args) {
  var render_args = setupPrintGroup(def, use_emoji, args);
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, 'group', render_args), log.isSilent);
}
/**
 * The method for printing collapsed group logs to the node console.
 */

function printGroupCollapsed(log, def, use_emoji, args) {
  var render_args = setupPrintGroup(def, use_emoji, args);
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, 'groupCollapsed', render_args), log.isSilent);
}

function setupPrintGroup(def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args)];
  return typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
} // ------- PRINT FORMATTERS -------- //

/**
 * Formats the leader of the log string. This contains the emoji if enabled,
 * the log level name, and the number of arguments being printed.
 */


function fLeader(def, use_emoji, args) {
  var emoji = use_emoji ? fEmoji(def.emoji) : '';
  var padding = use_emoji ? 14 + emoji.length : 14;
  var padded_leader = addPadding("".concat(emoji, " ").concat(fName(def.levelName), "(").concat(args.length, ")"), padding);
  return def.terminal.reduce(function (acc, style) {
    return chalk__WEBPACK_IMPORTED_MODULE_1__[style](acc);
  }, padded_leader);
}
/**
 * Add spaces to the end of a log title to make them all align.
 */

function addPadding(str, len) {
  var diff = len - str.length;
  var padded = str;

  for (var i = 0; i <= diff; i += 1) {
    padded += ' ';
  }

  return padded;
}
/**
 * Adds the emoji to the log leader if enabled.
 */


function fEmoji(emoji) {
  return " ".concat(emoji);
}
/**
 * Adds the log level name to the leader in initial caps.
 */


function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_4__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}
/**
 * Formats the meta section of the log string which includes the
 * log namespace, the label, the timestamp from the timer, the count
 * from the counter, or the test result from any assertions if any of
 * these modifiers were applied to this log.
 */


function fMeta(log, use_emoji) {
  return "".concat(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["fNamespace"])(log)).concat(fLabel(log)).concat(fTime(log, use_emoji)).concat(fCount(log)).concat(fTest(log, use_emoji));
}
/**
 * Formats the time on the log string based on any time modifiers
 * that have been applied to this log.
 */

function fTime(log, use_emoji) {
  var _ref2, _log$timeNowVal, _log$labelVal, _env$$shed, _env$$shed$overrides;

  var label_txt = "".concat((_ref2 = (_log$timeNowVal = log.timeNowVal) !== null && _log$timeNowVal !== void 0 ? _log$timeNowVal : (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.timeEllapsed) !== null && _ref2 !== void 0 ? _ref2 : '');
  return label_txt !== '' ? "(".concat(((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_3__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) || use_emoji ? '⏱' : '').concat(label_txt, ") ") : '';
}
/**
 * Formats the count on the log string based on any counter modifiers
 * that have been applied to this log.
 */


function fCount(log) {
  var _log$labelVal2;

  var count = (_log$labelVal2 = log.labelVal) === null || _log$labelVal2 === void 0 ? void 0 : _log$labelVal2.count;
  return count !== undefined ? "(Count: ".concat(count, ")") : '';
}
/**
 * Formats the label on the log string based on the label
 * modifier applied to this log.
 */


function fLabel(log) {
  return log.labelVal ? "[".concat(log.labelVal.name, "] ") : '';
}
/**
 * Formats the assertion or test on the log string based on
 * any testing modifiers applied to this log.
 */


function fTest(log, use_emoji) {
  return log.assertion === false ? "".concat(use_emoji ? '❌ ' : '', "Assertion failed:") : '';
}

/***/ }),

/***/ "./src/printers/shared.ts":
/*!********************************!*\
  !*** ./src/printers/shared.ts ***!
  \********************************/
/*! exports provided: print, printGroupEnd, printTable, printDir, printDirxml, printTrace, applyRender, toConsole, fNamespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupEnd", function() { return printGroupEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printTable", function() { return printTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDir", function() { return printDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDirxml", function() { return printDirxml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printTrace", function() { return printTrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyRender", function() { return applyRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toConsole", function() { return toConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fNamespace", function() { return fNamespace; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/util */ "./src/util/index.ts");



 // ------- PRINT ENTRY -------- //

function print(log, def, args) {
  var _env$$shed, _env$$shed$overrides;

  var use_emoji = ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) === true || log.cfg.use_emoji === true;
  return log.printer(log, def, use_emoji, args);
} // ------- PRINT METHODS -------- //

function printGroupEnd(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'groupEnd', []), log.isSilent);
}
function printTable(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'table', args), log.isSilent, false);
}
function printDir(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'dir', args), log.isSilent, false);
}
function printDirxml(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'dirxml', args), log.isSilent, false);
}
function printTrace(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'trace', args), log.isSilent);
} // ------ Print to the console ------- //

function applyRender(log, method, args) {
  var expanded_args = log.dumpContext ? args.concat([log.context]) : args;
  log.render = [method, expanded_args];
  return log.render;
}
/**
 * Render the log. If the ADZE_ENV is set to "dev" the log will not render and 
 * will be returned for unit library development purposes.
 */

function toConsole(render, is_silent) {
  var spread = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _render = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(render, 2),
      method = _render[0],
      args = _render[1];

  if (_global__WEBPACK_IMPORTED_MODULE_2__["env"].ADZE_ENV !== 'dev' && !is_silent) {
    var _console;

    spread ? (_console = console)[method].apply(_console, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)) : console[method](args);
  }

  return render;
} // ------ Shared Formatters ------- //

/**
 * Formats the namespace on the log string based on the namespace
 * modifier applied to this log.
 */

function fNamespace(log) {
  var ns = log.namespaceVal;

  if (ns) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(ns)) {
      return "#".concat(log.namespaceVal, " ");
    } else {
      return ns.reduce(function (acc, name) {
        return "".concat(acc, "#").concat(name, " ");
      }, '');
    }
  }

  return '';
}

/***/ }),

/***/ "./src/shed.ts":
/*!*********************!*\
  !*** ./src/shed.ts ***!
  \*********************/
/*! exports provided: shedExists, createShed, removeShed, Shed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shedExists", function() { return shedExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShed", function() { return createShed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeShed", function() { return removeShed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shed", function() { return Shed; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/_defaults */ "./src/_defaults/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/util */ "./src/util/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/global */ "./src/global.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/**
 * A typeguard that indicates that a global shed store exists.
 */
function shedExists(store) {
  return store !== undefined;
}
/**
 * Creates a new shed instance in your environment's global context.
 */

function createShed(config) {
  _global__WEBPACK_IMPORTED_MODULE_7__["env"].$shed = new Shed(config);
  return _global__WEBPACK_IMPORTED_MODULE_7__["env"].$shed;
}
/**
 * Removes the shed from the environment's global context.
 */

function removeShed() {
  delete _global__WEBPACK_IMPORTED_MODULE_7__["env"].$shed;
}
/**
 * A global store for caching, listening, and recalling Adze logs.
 */

var Shed = /*#__PURE__*/function () {
  /**
   * The configuration for Shed. Shed is constructed with a set of 
   * defaults that can overriden by the configuration supplied by the user.
   */

  /**
   * Cache of finalized logs (terminated and have meta data applied to them). This
   * is mainly used for recalling logs and filtering them.
   */

  /**
   * Cache of label instances. Useful for globally linking labelled logs.
   */

  /**
   * Counter for generating ID's for listeners.
   */

  /**
   * Cache of log listeners. These are fire when specified log levels
   * are printed.
   */
  function Shed(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Shed);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "cfg", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "cache", []);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "labels", new Map());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "id_counter", -1);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "listeners", new Map());

    var global_cfg = (config === null || config === void 0 ? void 0 : config.global_cfg) ? lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(config.global_cfg, _defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"]) : null;

    var cfg_global_defaults = _objectSpread(_objectSpread({}, config), {}, {
      global_cfg: global_cfg
    });

    this.cfg = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(cfg_global_defaults, _defaults__WEBPACK_IMPORTED_MODULE_5__["shed_defaults"]);
  }
  /*************************************\
   * GET/SET METHODS
  \*************************************/

  /**
   * Store a log in the shed for later recall.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Shed, [{
    key: "store",
    value: function store(log) {
      if (this.cache.length < this.cfg.cache_limit) {
        this.cache = this.cache.concat([log]);
      }
    }
    /**
     * Sets the limit for the maximum number of logs that Shed will cache.
     */

  }, {
    key: "getBundle",

    /**
     * Returns all of the cached logs of the provided levels as a bundle.
     * This is useful for recalling logs and applying filters.
     */
    value: function getBundle(levels) {
      var lvls = Object(_util__WEBPACK_IMPORTED_MODULE_6__["formatLevels"])(this.cfg.global_cfg, levels);
      return this.cache.reduce(function (acc, log) {
        return acc.concat(lvls.includes(log.level) ? [log] : []);
      }, []);
    }
    /**
     * Indicates whether this shed instance has global Adze config overrides set.
     */

  }, {
    key: "getLabel",

    /**
     * Get a label from the Shed by name.
     */
    value: function getLabel(name) {
      return this.labels.get(name);
    }
    /**
     * Adds a label to the Shed to be tracked globally.
     */

  }, {
    key: "addLabel",
    value: function addLabel(label) {
      if (!this.hasLabel(label.name)) {
        this.labels.set(label.name, label);
      }
    }
    /**
     * Validates whether a label with the given name exists in the Shed label cache.
     */

  }, {
    key: "hasLabel",
    value: function hasLabel(name) {
      return this.labels.has(name);
    }
    /*************************************\
     * LISTENER METHODS
    \*************************************/

    /**
     * Add a listener callback that fires any time a log of one of the provided levels is generated.
     */

  }, {
    key: "addListener",
    value: function addListener(levels, cb) {
      var _this = this;

      var lvls = Object(_util__WEBPACK_IMPORTED_MODULE_6__["formatLevels"])(this.cfg.global_cfg, levels);
      return lvls.map(function (lvl) {
        // Get the map for the listeners of the given log level.
        var level_map = _this.listenerBucket(lvl); // Generate a new ID for the listener.


        var id = _this.assignId(); // Assign an ID to the listener for later teardown.


        level_map.set(id, cb);

        _this.listeners.set(lvl, level_map); // Return the listener location tuple


        return [lvl, id];
      });
    }
    /**
     * Remove log listeners at the given bucket locations.
     */

  }, {
    key: "removeListener",
    value: function removeListener(locations) {
      var _this2 = this;

      locations.forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            lvl_id = _ref2[0],
            id = _ref2[1];

        var level = _this2.listeners.get(lvl_id);

        level === null || level === void 0 ? void 0 : level["delete"](id);
      });
    }
    /**
     * Fire any log listeners for the provided log.
     */

  }, {
    key: "fireListeners",
    value: function fireListeners(log, def) {
      var _this$listeners$get;

      (_this$listeners$get = this.listeners.get(log.level)) === null || _this$listeners$get === void 0 ? void 0 : _this$listeners$get.forEach(function (listener) {
        listener(_objectSpread(_objectSpread({}, log), def));
      });
    }
    /*************************************\
     * GLOBAL FILTER METHODS
    \*************************************/

    /**
     * Returns a boolean indicating if this log instance should be 
     * allowed to print.
     */

  }, {
    key: "logGloballyAllowed",
    value: function logGloballyAllowed(log) {
      return !this.hideAll && this.levelAllowed(log) && this.labelAllowed(log) && this.namespaceAllowed(log);
    }
    /**
     * Validate that the current level set on the log is allowed based on
     * the global filter rules.
     */

  }, {
    key: "levelAllowed",
    value: function levelAllowed(log) {
      var _this3 = this;

      return this.filterAllowed('level', function (filter, func) {
        var _this3$cfg$filters$le, _this3$cfg$filters, _this3$cfg$filters$le2;

        var raw_source = (_this3$cfg$filters$le = (_this3$cfg$filters = _this3.cfg.filters) === null || _this3$cfg$filters === void 0 ? void 0 : (_this3$cfg$filters$le2 = _this3$cfg$filters.level) === null || _this3$cfg$filters$le2 === void 0 ? void 0 : _this3$cfg$filters$le2[filter]) !== null && _this3$cfg$filters$le !== void 0 ? _this3$cfg$filters$le : [];
        var source = raw_source === '*' ? Object(_util__WEBPACK_IMPORTED_MODULE_6__["allLevels"])(_this3.cfg.global_cfg) : raw_source;
        return _this3[func](source, log.level);
      });
    }
    /**
     * Validate that the current label set on the log is allowed based on
     * the global filter rules.
     */

  }, {
    key: "labelAllowed",
    value: function labelAllowed(log) {
      var _this4 = this;

      return this.filterAllowed('label', function (filter, func) {
        var _this4$cfg$filters$la, _this4$cfg$filters, _this4$cfg$filters$la2, _log$labelVal$name, _log$labelVal;

        var source = (_this4$cfg$filters$la = (_this4$cfg$filters = _this4.cfg.filters) === null || _this4$cfg$filters === void 0 ? void 0 : (_this4$cfg$filters$la2 = _this4$cfg$filters.label) === null || _this4$cfg$filters$la2 === void 0 ? void 0 : _this4$cfg$filters$la2[filter]) !== null && _this4$cfg$filters$la !== void 0 ? _this4$cfg$filters$la : [];
        return _this4[func](source, (_log$labelVal$name = log === null || log === void 0 ? void 0 : (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.name) !== null && _log$labelVal$name !== void 0 ? _log$labelVal$name : '');
      });
    }
    /**
     * Validate that at least one of the current namespaces set on the log
     * is allowed based on the global filter rules.
     */

  }, {
    key: "namespaceAllowed",
    value: function namespaceAllowed(log) {
      var _this5 = this;

      return this.filterAllowed('namespace', function (filter, func) {
        var _this5$cfg$filters$na, _this5$cfg$filters, _this5$cfg$filters$na2;

        var source = (_this5$cfg$filters$na = (_this5$cfg$filters = _this5.cfg.filters) === null || _this5$cfg$filters === void 0 ? void 0 : (_this5$cfg$filters$na2 = _this5$cfg$filters.namespace) === null || _this5$cfg$filters$na2 === void 0 ? void 0 : _this5$cfg$filters$na2[filter]) !== null && _this5$cfg$filters$na !== void 0 ? _this5$cfg$filters$na : [];
        var target = log.namespaceVal;

        if (target) {
          if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isString"])(target)) {
            return _this5[func](source, target);
          } else {
            // Namespace log value is an array. Check each namespace value.
            return target.map(function (val) {
              return _this5[func](source, val);
            }).includes(true);
          }
        }
      });
    }
    /**
     * Wrapper around the filter methods to handle some basic setup for validating
     * the filter values.
     */

  }, {
    key: "filterAllowed",
    value: function filterAllowed(category, cb) {
      var filter_type = this.filterType(category);

      if (filter_type) {
        var _filter_type = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(filter_type, 2),
            _filter = _filter_type[0],
            _func = _filter_type[1];

        var result = cb(_filter, _func);

        if (result !== undefined) {
          return result;
        }
      }

      return true;
    }
    /**
     * Returns tuples indicating what filter type is active. Include gets precedence over exclude.
     */

  }, {
    key: "filterType",
    value: function filterType(category) {
      switch (true) {
        case this.filterIsSet('include', category):
          return ['include', 'isIncluded'];

        case this.filterIsSet('exclude', category):
          return ['exclude', 'isNotExcluded'];
      }
    }
    /**
     * Is the log in the included filter?
     */

  }, {
    key: "isIncluded",
    value: function isIncluded(source, value) {
      return source.length > 0 && source.indexOf(value) !== -1;
    }
    /**
     * Is the log not in the excluded filter?
     */

  }, {
    key: "isNotExcluded",
    value: function isNotExcluded(source, value) {
      return source.length > 0 && source.indexOf(value) === -1;
    }
    /**
     * Has the user defined rules for a specific filter?
     */

  }, {
    key: "filterIsSet",
    value: function filterIsSet(type, filter) {
      var _this$cfg$filters$fil, _this$cfg, _this$cfg$filters, _this$cfg$filters$fil2;

      var include_prop = (_this$cfg$filters$fil = (_this$cfg = this.cfg) === null || _this$cfg === void 0 ? void 0 : (_this$cfg$filters = _this$cfg.filters) === null || _this$cfg$filters === void 0 ? void 0 : (_this$cfg$filters$fil2 = _this$cfg$filters[filter]) === null || _this$cfg$filters$fil2 === void 0 ? void 0 : _this$cfg$filters$fil2[type]) !== null && _this$cfg$filters$fil !== void 0 ? _this$cfg$filters$fil : [];
      return include_prop.length > 0;
    }
    /*************************************\
     * HELPER METHODS
    \*************************************/

    /**
     * Guarantee that a listener bucket exists for the given log level and return the bucket.
     */

  }, {
    key: "listenerBucket",
    value: function listenerBucket(lvl) {
      if (!this.listeners.has(lvl)) {
        this.listeners.set(lvl, new Map());
      } // Override TS because the ListenerBucket is guaranteed by the condition above.


      return this.listeners.get(lvl);
    }
    /**
     * Increment the ID counter and return the new value.
     */

  }, {
    key: "assignId",
    value: function assignId() {
      return this.id_counter += 1;
    }
  }, {
    key: "cacheLimit",
    set: function set(limit) {
      this.cfg.cache_limit = limit;
    }
    /**
     * Gets the limit for the maximum number of logs that Shed will cache.
     */
    ,
    get: function get() {
      return this.cfg.cache_limit;
    }
  }, {
    key: "hasOverrides",
    get: function get() {
      return this.cfg.global_cfg !== null;
    }
    /**
     * Returns the current value of the global Adze configuration overrides.
     */

  }, {
    key: "overrides",
    get: function get() {
      return this.cfg.global_cfg;
    }
    /**
     * Getter for configuration of the hideAll filter property.
     */

  }, {
    key: "hideAll",
    get: function get() {
      var _this$cfg$filters$hid, _this$cfg2;

      return (_this$cfg$filters$hid = (_this$cfg2 = this.cfg) === null || _this$cfg2 === void 0 ? void 0 : _this$cfg2.filters.hideAll) !== null && _this$cfg$filters$hid !== void 0 ? _this$cfg$filters$hid : false;
    }
    /**
     * Sets the current value of the global Adze configuration overrides.
     */

  }, {
    key: "config",
    set: function set(cfg) {
      var defaulted = cfg ? lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(cfg, _defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"]) : cfg;
      this.cfg.global_cfg = defaulted;
    }
  }]);

  return Shed;
}();

/***/ }),

/***/ "./src/terminators/index.ts":
/*!**********************************!*\
  !*** ./src/terminators/index.ts ***!
  \**********************************/
/*! exports provided: seal, thread, close, clear, clr, logMethod, customMethod, store, fireListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminators */ "./src/terminators/terminators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["seal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thread", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["thread"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clr", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["clr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logMethod", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customMethod", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["customMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fireListeners", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["fireListeners"]; });



/***/ }),

/***/ "./src/terminators/terminators.ts":
/*!****************************************!*\
  !*** ./src/terminators/terminators.ts ***!
  \****************************************/
/*! exports provided: seal, thread, close, clear, clr, logMethod, customMethod, store, fireListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return seal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thread", function() { return thread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clr", function() { return clr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logMethod", function() { return logMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customMethod", function() { return customMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireListeners", function() { return fireListeners; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/printers */ "./src/printers/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/conditions */ "./src/conditions/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/util */ "./src/util/index.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/shed */ "./src/shed.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/global */ "./src/global.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/**
 * Seals the configuration of a log and returns a function that
 * constructs a new log with the same configuration.
 * 
 * **Example:**
 * ```javascript
 * const sealed = adze({ use_emoji: true }).ns('sealed').label('sealed-label').seal();
 * sealed().success('Success!'); // -> prints "#sealed [sealed-label] Success!"
 * sealed().log('Another log.'); // -> prints "#sealed [sealed-label] Another log."
 * ```
 */

function seal() {
  var _this = this;

  // Run the modifier queue to apply their results
  runModifierQueue(this.modifierQueue); // Clear the queue as to not repeat the actions when the subsequent logs are terminated.

  this.modifierQueue = [];
  return function () {
    return _objectSpread({}, _this);
  };
}
/**
 * Following the MDC (Mapped Diagnostic Context) pattern this method enables you to create
 * a thread for adding context from different scopes before finally terminating the log.
 * 
 * In order to create a thread, this log must specify a label that will be used to link the
 * context and your environment must have a **shed** created.
 * 
 * **Example:**
 * ```typescript
 * import { adze, createShed } from 'adze';
 * 
 * const shed = createShed();
 * 
 * // Creating a shed listener is a great way to get meta data from your
 * // threaded logs to write to disk or pass to another plugin, library, 
 * // or service.
 * shed.addListener([1,2,3,4,5,6,7,8], (log) => {
 *   // Do something with `log.context.added` or `log.context.subtracted`.
 * });
 * 
 * function add(a, b) {
 *   const answer = a + b;
 *   adze().label('foo').thread('added', { a, b, answer });
 *   return answer;
 * }
 * 
 * function subtract(x, y) {
 *   const answer = x - y;
 *   adze().label('foo').thread('subtracted', { x, y, answer });
 *   return answer;
 * }
 * 
 * add(1, 2);
 * subtract(4, 3);
 * 
 * adze().label('foo').dump().info('Results from our thread');
 * // Info => Results from our thread, { a: 1, b: 2, answer: 3 }, { x: 4, y: 3, answer: 1 }
 * 
 * ```
 */

function thread(key, value) {
  // Check if the log has a label. If not, console.warn the user.
  // If the log has a label, attach the context to the label.
  runModifierQueue(this.modifierQueue);

  if (this.labelVal) {
    this.labelVal.context[key] = value;
  } else {
    console.warn('Thread context was not added! Threads must have a label.');
  }
}
/**
 * Closes a thread assigned to the log by clearing the context values.
 */

function close() {
  if (this.labelVal) {
    this.labelVal.context = {};
  }
}
/**
 * Alias for console.clear().
 */

function clear() {
  console.clear();
}
/**
 * Alias for clear() which is an alias for console.clear().
 */

function clr() {
  this.clear();
}
/**
 * Generates a terminating log method the specified log level name.
 */

function logMethod(levelName) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return executionPipeline(this, this.cfg, getDefinition(this.cfg, 'log_levels', levelName), args);
  };
}
/**
 * Generates a terminating log method that enables the user to specify a custom
 * log level by key as the format for the log.
 */

function customMethod() {
  return function (levelName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return executionPipeline(this, this.cfg, getDefinition(this.cfg, 'custom_levels', levelName), args);
  };
}
;
/**
 * Gets the log level definition from the log configuration.
 */

function getDefinition(cfg, type, levelName) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed;
  var definition = undefined;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_4__["shedExists"])(shed) && shed.hasOverrides) {
    var _shed$overrides, _shed$overrides$type;

    definition = (_shed$overrides = shed.overrides) === null || _shed$overrides === void 0 ? void 0 : (_shed$overrides$type = _shed$overrides[type]) === null || _shed$overrides$type === void 0 ? void 0 : _shed$overrides$type[levelName];
  } else {
    definition = cfg[type][levelName];
  }

  return definition ? _objectSpread(_objectSpread({}, definition), {}, {
    levelName: levelName
  }) : undefined;
}
/**
 * The primary execution pipeline for terminating log methods.
 */


function executionPipeline(log, cfg, def, args) {
  if (def && Object(_conditions__WEBPACK_IMPORTED_MODULE_2__["allowed"])(cfg, def)) {
    // Apply modifiers in the proper order.
    runModifierQueue(log.modifierQueue); // Check the test modifiers.

    if (Object(_conditions__WEBPACK_IMPORTED_MODULE_2__["evalPasses"])(log)) {
      var _env$$shed$logGloball, _env$$shed;

      // Save terminator props for recall purposes
      var final_log = Object(_util__WEBPACK_IMPORTED_MODULE_3__["mutateProps"])(log, [['args', args], ['level', def.level]]); // If a global context exists, check if this log is allowed.

      var globally_allowed = (_env$$shed$logGloball = (_env$$shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : _env$$shed.logGloballyAllowed(final_log)) !== null && _env$$shed$logGloball !== void 0 ? _env$$shed$logGloball : true;

      if (globally_allowed) {
        // Render the log
        var render = Object(_printers__WEBPACK_IMPORTED_MODULE_1__["print"])(final_log, def, args); // Fire log events

        store(final_log);
        fireListeners(final_log, def); // Return the terminated log object for testing purposes

        return {
          log: final_log,
          render: render
        };
      }
    }
  } // Return the terminated log object for testing purposes


  return {
    log: log,
    render: null
  };
}
/**
 * Executes all of the log modifier functions within the queue.
 */


function runModifierQueue(queue) {
  queue.forEach(function (func) {
    return func();
  });
}
/*----------------------------------------*\
 * Log Events
\*----------------------------------------*/

/**
 * Stores this log in the Shed if the Shed exists.
 */


function store(log) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_4__["shedExists"])(shed)) {
    shed.store(log);
  }
}
/**
 * Fires listeners for this log instance if a Shed exists.
 */

function fireListeners(log, def) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_4__["shedExists"])(shed)) {
    shed.fireListeners(log, def);
  }
}

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: initialCaps, mutateProps, timestamp, getSearchParams, formatLevels, allLevels, levelsFromConfig, createArrayOfNumbers, isString, isArray, isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["initialCaps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutateProps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["mutateProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["timestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLevels", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["formatLevels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allLevels", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["allLevels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "levelsFromConfig", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["levelsFromConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArrayOfNumbers", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["createArrayOfNumbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });



/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! exports provided: initialCaps, mutateProps, timestamp, getSearchParams, formatLevels, allLevels, levelsFromConfig, createArrayOfNumbers, isString, isArray, isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return initialCaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutateProps", function() { return mutateProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return getSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatLevels", function() { return formatLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allLevels", function() { return allLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelsFromConfig", function() { return levelsFromConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArrayOfNumbers", function() { return createArrayOfNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Capitalizes the first character of the provided string.
 */
function initialCaps(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Applies property mutations to the provided object.
 */

function mutateProps(obj, mutations) {
  mutations.forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
        prop = _ref2[0],
        val = _ref2[1];

    return obj[prop] = val;
  });
  return obj;
}
/**
 * Generate a unique ID for your log.
 */

function timestamp() {
  var unixMilli = Date.now();
  var date = new Date(unixMilli);
  var utc = date.toUTCString();
  return {
    unixMilli: unixMilli,
    utc: utc
  };
}
/**
 * Gets a URLSearchParams object of the current URL.
 */

function getSearchParams() {
  return new URLSearchParams(document.location.search.substring(1));
}
/**
 * Converts a level value of '*' to an array of numbers up to the highest
 * value defined by the user configuration. If levels is already a number array
 * it is returned unchanged.
 */

function formatLevels(cfg, levels) {
  if (levels === "*") {
    return allLevels(cfg);
  }

  return levels !== null && levels !== void 0 ? levels : [];
}
/**
 * Creates an array of numbers from 0 to the highest value found in the 
 * provided configuration.
 */

function allLevels(cfg) {
  var _cfg$custom_levels;

  var max = Math.max.apply(Math, [8].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(levelsFromConfig((_cfg$custom_levels = cfg === null || cfg === void 0 ? void 0 : cfg.custom_levels) !== null && _cfg$custom_levels !== void 0 ? _cfg$custom_levels : {}))));
  return createArrayOfNumbers(0, max);
}
/**
 * Get all level values from a config of type LogLevels.
 */

function levelsFromConfig(lvls) {
  return Object.values(lvls).map(function (lvl) {
    return lvl === null || lvl === void 0 ? void 0 : lvl.level;
  }).filter(isDefined);
}
/**
 * Create an array of number containing every number from the start value to end value.
 */

function createArrayOfNumbers(start, end) {
  var arr = [];

  for (var i = start; i <= end; i += 1) {
    arr.push(i);
  }

  return arr;
}
/**
 * Type Guard to check if the given value is a String.
 */

function isString(val) {
  return typeof val === 'string';
}
/**
 * Type Guard to check if the given value is an Array.
 */

function isArray(val) {
  return Array.isArray(val);
}
/**
 * Type Guard that validates that the given value is not undefined.
 */

function isDefined(val) {
  return val !== undefined;
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvYW5zaS1zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9icm93c2VyLXByb2Nlc3MtaHJ0aW1lL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS91dGlsLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWZhdWx0c2RlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9icm93c2VyLmpzIiwid2VicGFjazovL0FkemVMaWIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0FkemVMaWIvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2NvbnRyYWN0cy9Db25maWd1cmF0aW9uLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2NvbnRyYWN0cy9Mb2cudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fY29udHJhY3RzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL2RlZmF1bHRzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL3NoZWRfZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9hZHplLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvYnVuZGxlLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvY29uZGl0aW9ucy9jb25kaXRpb25zLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvY29uZGl0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2ZpbHRlcnMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2xhYmVsL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbGFiZWwvbGFiZWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvY29udGV4dHMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvY291bnRpbmcudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvZm9ybWF0dGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9ncm91cGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9pZGVudGlmeWluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9tb2RpZmllci50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy90ZXN0aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL3RpbWluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL2Jyb3dzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9icm93c2VyL3ByaW50ZXJzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9ub2RlL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvbm9kZS9wcmludGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL3NoYXJlZC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3NoZWQudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy90ZXJtaW5hdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3Rlcm1pbmF0b3JzL3Rlcm1pbmF0b3JzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3V0aWwvdXRpbC50cyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImxvZ19sZXZlbCIsImxvZ19jYWNoZV9zaXplIiwidXNlX2Vtb2ppIiwiYmFzZV9zdHlsZSIsImN1c3RvbV9sZXZlbHMiLCJsb2dfbGV2ZWxzIiwidmVyYm9zZSIsImxldmVsIiwic3R5bGUiLCJ0ZXJtaW5hbCIsIm1ldGhvZCIsImVtb2ppIiwiZGVidWciLCJsb2ciLCJzdWNjZXNzIiwiZmFpbCIsImlzQ2hyb21lIiwiaW5mbyIsImlzU2FmYXJpIiwid2FybiIsImVycm9yIiwiYXR0ZW50aW9uIiwiZmlsdGVycyIsImhpZGVBbGwiLCJuYW1lc3BhY2UiLCJleGNsdWRlIiwiaW5jbHVkZSIsImxhYmVsIiwic2hlZF9kZWZhdWx0cyIsImNhY2hlX2xpbWl0IiwiZ2xvYmFsX2NmZyIsImRlZmF1bHRzRGVlcCIsInJlcXVpcmUiLCJhZHplIiwidXNlcl9jZmciLCJjZmciLCJ0cmFjZWFibGUiLCJkdW1wQ29udGV4dCIsImlzU2lsZW50IiwibW9kaWZpZXJRdWV1ZSIsInByaW50ZXIiLCJwcmludExvZyIsImxvZ01ldGhvZCIsImN1c3RvbSIsImN1c3RvbU1ldGhvZCIsInNlYWwiLCJjb3VudCIsImNvdW50UmVzZXQiLCJ0aHJlYWQiLCJkdW1wIiwiY2xvc2UiLCJjbGVhciIsImNsciIsImRpciIsImRpcnhtbCIsInRhYmxlIiwiYXNzZXJ0IiwidGVzdCIsImdyb3VwIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsIm5zIiwic2lsZW50IiwidHJhY2UiLCJ0aW1lIiwidGltZU5vdyIsInRpbWVFbmQiLCJjb250ZXh0IiwibGFiZWxWYWwiLCJidW5kbGUiLCJidW5kbGVfYXJyIiwiYnVuZGxlZF9sb2ciLCJwdXNoIiwiYWxsb3dlZCIsImRlZiIsImxldmVsQWN0aXZlIiwibm90VGVzdEVudiIsImV2YWxQYXNzZXMiLCJhc3NlcnRpb24iLCJ1bmRlZmluZWQiLCJleHByZXNzaW9uIiwiY29uc29sZSIsImVudiIsIkFEWkVfRU5WIiwiZ2V0U2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmlsdGVyQWxsIiwibG9vcEJ1bmRsZSIsImZpbHRlck5hbWVzcGFjZSIsImxvZ19ucyIsIm5hbWVzcGFjZVZhbCIsImlzU3RyaW5nIiwiaW5jbHVkZXMiLCJtYXAiLCJ2YWwiLCJmaWx0ZXJMYWJlbCIsImxibCIsIm5hbWUiLCJmaWx0ZXJMZXZlbFJhbmdlIiwibG93IiwiaGlnaCIsInJuZHIiLCJJbmZpbml0eSIsImNiIiwiZm9yRWFjaCIsInJlbmRlciIsInJlc3VsdCIsImFyZ3MiLCJnbG9iYWwiLCJ3aW5kb3ciLCJpc0Jyb3dzZXIiLCJlbnZJc1dpbmRvdyIsImlzQ2hyb21lVmFyIiwiaXNGaXJlZm94VmFyIiwiaXNTYWZhcmlWYXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNGaXJlZm94IiwiZ2V0TGFiZWwiLCJzaGVkIiwiJHNoZWQiLCJzaGVkRXhpc3RzIiwiYWRkTGFiZWwiLCJtb2RpZmllciIsImNvdW50Q2xlYXIiLCJwcmludERpciIsInByaW50RGlyeG1sIiwicHJpbnRUYWJsZSIsInByaW50R3JvdXAiLCJwcmludEdyb3VwQ29sbGFwc2VkIiwicHJpbnRHcm91cEVuZCIsInByZXBlbmRNb2RpZmllciIsInByaW50VHJhY2UiLCJtZXRhIiwiZGF0YSIsImZ1bmMiLCJjb25jYXQiLCJocnRpbWUiLCJ0aW1lU3RhcnQiLCJ0aW1lX25vdyIsImZvcm1hdFRpbWUiLCJ0aW1lTm93VmFsIiwidGltZUVsbGFwc2VkIiwic2VjIiwibmFubyIsImZMZWFkZXIiLCJmTWV0YSIsImxlYWRlciIsInJlbmRlcl9hcmdzIiwidG9Db25zb2xlIiwiYXBwbHlSZW5kZXIiLCJwYXJ0aWFsX2FyZ3MiLCJmRW1vamkiLCJmTmFtZSIsImxldmVsTmFtZSIsImxlbmd0aCIsIm92ZXJyaWRlcyIsImluaXRpYWxDYXBzIiwiZk5hbWVzcGFjZSIsImZMYWJlbCIsImZUaW1lIiwiZkNvdW50IiwiZlRlc3QiLCJsYWJlbF90eHQiLCJwcmludExvZ0Jyb3dzZXIiLCJwcmludExvZ05vZGUiLCJwcmludEdyb3VwQnJvd3NlciIsInByaW50R3JvdXBOb2RlIiwicHJpbnRHcm91cENvbGxhcHNlZEJyb3dzZXIiLCJwcmludEdyb3VwQ29sbGFwc2VkTm9kZSIsInNldHVwUHJpbnRHcm91cCIsInBhZGRpbmciLCJwYWRkZWRfbGVhZGVyIiwiYWRkUGFkZGluZyIsInJlZHVjZSIsImFjYyIsImNoYWxrIiwic3RyIiwibGVuIiwiZGlmZiIsInBhZGRlZCIsImkiLCJwcmludCIsImV4cGFuZGVkX2FyZ3MiLCJpc19zaWxlbnQiLCJzcHJlYWQiLCJzdG9yZSIsImNyZWF0ZVNoZWQiLCJjb25maWciLCJTaGVkIiwicmVtb3ZlU2hlZCIsIk1hcCIsImNmZ19nbG9iYWxfZGVmYXVsdHMiLCJjYWNoZSIsImxldmVscyIsImx2bHMiLCJmb3JtYXRMZXZlbHMiLCJsYWJlbHMiLCJoYXNMYWJlbCIsInNldCIsImhhcyIsImx2bCIsImxldmVsX21hcCIsImxpc3RlbmVyQnVja2V0IiwiaWQiLCJhc3NpZ25JZCIsImxpc3RlbmVycyIsImxvY2F0aW9ucyIsImx2bF9pZCIsImxpc3RlbmVyIiwibGV2ZWxBbGxvd2VkIiwibGFiZWxBbGxvd2VkIiwibmFtZXNwYWNlQWxsb3dlZCIsImZpbHRlckFsbG93ZWQiLCJmaWx0ZXIiLCJyYXdfc291cmNlIiwic291cmNlIiwiYWxsTGV2ZWxzIiwidGFyZ2V0IiwiY2F0ZWdvcnkiLCJmaWx0ZXJfdHlwZSIsImZpbHRlclR5cGUiLCJmaWx0ZXJJc1NldCIsInZhbHVlIiwidHlwZSIsImluY2x1ZGVfcHJvcCIsImlkX2NvdW50ZXIiLCJsaW1pdCIsImRlZmF1bHRlZCIsInJ1bk1vZGlmaWVyUXVldWUiLCJrZXkiLCJleGVjdXRpb25QaXBlbGluZSIsImdldERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiaGFzT3ZlcnJpZGVzIiwiZmluYWxfbG9nIiwibXV0YXRlUHJvcHMiLCJnbG9iYWxseV9hbGxvd2VkIiwibG9nR2xvYmFsbHlBbGxvd2VkIiwiZmlyZUxpc3RlbmVycyIsInF1ZXVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm9iaiIsIm11dGF0aW9ucyIsInByb3AiLCJ0aW1lc3RhbXAiLCJ1bml4TWlsbGkiLCJEYXRlIiwibm93IiwiZGF0ZSIsInV0YyIsInRvVVRDU3RyaW5nIiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIm1heCIsIk1hdGgiLCJsZXZlbHNGcm9tQ29uZmlnIiwiY3JlYXRlQXJyYXlPZk51bWJlcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpc0RlZmluZWQiLCJzdGFydCIsImVuZCIsImFyciIsImlzQXJyYXkiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDSkEsdUJBQXVCLG1CQUFPLENBQUMscUZBQW9COztBQUVuRDtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Qzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNKQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DLDJCQUEyQixtQkFBTyxDQUFDLDZGQUF3Qjs7QUFFM0QsaUNBQWlDLG1CQUFPLENBQUMseUdBQThCOztBQUV2RSxzQkFBc0IsbUJBQU8sQ0FBQyxtRkFBbUI7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNaQSx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJELHNCQUFzQixtQkFBTyxDQUFDLG1GQUFtQjs7QUFFakQsaUNBQWlDLG1CQUFPLENBQUMseUdBQThCOztBQUV2RSx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFvQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7O0FDWEEsOENBQWE7O0FBRWI7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYSxFQUFFLEVBQUUsS0FBSztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGFBQWEsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTztBQUM5RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLFdBQVcsK0JBQStCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHFCQUFxQixTQUFTO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsS0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztBQzNCYTtBQUNiLG1CQUFtQixtQkFBTyxDQUFDLHdEQUFhO0FBQ3hDLE9BQU8seUNBQXlDLEdBQUcsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHQUFHLG1CQUFPLENBQUMsbURBQVE7O0FBRXBCLE9BQU8sUUFBUTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLE9BQU8sS0FBSztBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxrQkFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLG1CQUFPLENBQUMsNkRBQWE7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQSxzQkFBc0IsMkNBQTJDLEVBQUU7QUFDbkU7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwT2E7QUFDYiwwQ0FBMEMsRUFBRSxHQUFHLFFBQVEsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLHVFQUF1RTtBQUMzSjtBQUNBO0FBQ0EscUNBQXFDLEVBQUUsRUFBRSxRQUFRLEtBQUssV0FBVyxFQUFFOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILDZEQUE2RCxNQUFNLGNBQWMsS0FBSztBQUN0RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQsR0FBRztBQUNIO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBLDBEQUEwRCxjQUFjLGtCQUFrQiwrQkFBK0IsS0FBSztBQUM5SDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNySWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQU8sQ0FBQyxzREFBWTs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGlCQUFpQjtBQUN6QjtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjtBQUNwRSxrREFBa0QsY0FBYztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUSxTQUFTO0FBQ2pDLGdCQUFnQixRQUFRLFNBQVM7QUFDakMsaUJBQWlCLE9BQU8sUUFBUTtBQUNoQyxpQkFBaUIsT0FBTyxRQUFRO0FBQ2hDLGdCQUFnQixTQUFTLE9BQU87QUFDaEMsZ0JBQWdCLFNBQVMsT0FBTztBQUNoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUU7O0FBRXpFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsRUFBRSxVQUFVLEVBQUU7QUFDL0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3grREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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dUYsT0FBRyxDQUFDck0sSUFBSixDQUFTOEcsQ0FBVDtBQUNEOztBQUNELFNBQU91RixHQUFQO0FBQ0Q7QUFFRDs7OztBQUdPLFNBQVNsTCxRQUFULENBQWtCRyxHQUFsQixFQUEyQztBQUNoRCxTQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUF0QjtBQUNEO0FBRUQ7Ozs7QUFHTyxTQUFTZ0wsT0FBVCxDQUFpQmhMLEdBQWpCLEVBQXNDO0FBQzNDLFNBQU9pTCxLQUFLLENBQUNELE9BQU4sQ0FBY2hMLEdBQWQsQ0FBUDtBQUNEO0FBRUQ7Ozs7QUFHTyxTQUFTNEssU0FBVCxDQUFzQjVLLEdBQXRCLEVBQWtEO0FBQ3ZELFNBQU9BLEdBQUcsS0FBS2YsU0FBZjtBQUNELEMiLCJmaWxlIjoiYWR6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFkemVMaWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWR6ZUxpYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgd3JhcEFuc2kxNiA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBjb2RlID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlske2NvZGUgKyBvZmZzZXR9bWA7XG59O1xuXG5jb25zdCB3cmFwQW5zaTI1NiA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBjb2RlID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTs1OyR7Y29kZX1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMTZtID0gKGZuLCBvZmZzZXQpID0+ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHJnYiA9IGZuKC4uLmFyZ3MpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07Mjske3JnYlswXX07JHtyZ2JbMV19OyR7cmdiWzJdfW1gO1xufTtcblxuY29uc3QgYW5zaTJhbnNpID0gbiA9PiBuO1xuY29uc3QgcmdiMnJnYiA9IChyLCBnLCBiKSA9PiBbciwgZywgYl07XG5cbmNvbnN0IHNldExhenlQcm9wZXJ0eSA9IChvYmplY3QsIHByb3BlcnR5LCBnZXQpID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIHtcblx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0KCk7XG5cblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCB7XG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9KTtcbn07XG5cbi8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnY29sb3ItY29udmVydCcpfSAqL1xubGV0IGNvbG9yQ29udmVydDtcbmNvbnN0IG1ha2VEeW5hbWljU3R5bGVzID0gKHdyYXAsIHRhcmdldFNwYWNlLCBpZGVudGl0eSwgaXNCYWNrZ3JvdW5kKSA9PiB7XG5cdGlmIChjb2xvckNvbnZlcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbG9yQ29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblx0fVxuXG5cdGNvbnN0IG9mZnNldCA9IGlzQmFja2dyb3VuZCA/IDEwIDogMDtcblx0Y29uc3Qgc3R5bGVzID0ge307XG5cblx0Zm9yIChjb25zdCBbc291cmNlU3BhY2UsIHN1aXRlXSBvZiBPYmplY3QuZW50cmllcyhjb2xvckNvbnZlcnQpKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHNvdXJjZVNwYWNlID09PSAnYW5zaTE2JyA/ICdhbnNpJyA6IHNvdXJjZVNwYWNlO1xuXHRcdGlmIChzb3VyY2VTcGFjZSA9PT0gdGFyZ2V0U3BhY2UpIHtcblx0XHRcdHN0eWxlc1tuYW1lXSA9IHdyYXAoaWRlbnRpdHksIG9mZnNldCk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc3VpdGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRzdHlsZXNbbmFtZV0gPSB3cmFwKHN1aXRlW3RhcmdldFNwYWNlXSwgb2Zmc2V0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufTtcblxuZnVuY3Rpb24gYXNzZW1ibGVTdHlsZXMoKSB7XG5cdGNvbnN0IGNvZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0bW9kaWZpZXI6IHtcblx0XHRcdHJlc2V0OiBbMCwgMF0sXG5cdFx0XHQvLyAyMSBpc24ndCB3aWRlbHkgc3VwcG9ydGVkIGFuZCAyMiBkb2VzIHRoZSBzYW1lIHRoaW5nXG5cdFx0XHRib2xkOiBbMSwgMjJdLFxuXHRcdFx0ZGltOiBbMiwgMjJdLFxuXHRcdFx0aXRhbGljOiBbMywgMjNdLFxuXHRcdFx0dW5kZXJsaW5lOiBbNCwgMjRdLFxuXHRcdFx0aW52ZXJzZTogWzcsIDI3XSxcblx0XHRcdGhpZGRlbjogWzgsIDI4XSxcblx0XHRcdHN0cmlrZXRocm91Z2g6IFs5LCAyOV1cblx0XHR9LFxuXHRcdGNvbG9yOiB7XG5cdFx0XHRibGFjazogWzMwLCAzOV0sXG5cdFx0XHRyZWQ6IFszMSwgMzldLFxuXHRcdFx0Z3JlZW46IFszMiwgMzldLFxuXHRcdFx0eWVsbG93OiBbMzMsIDM5XSxcblx0XHRcdGJsdWU6IFszNCwgMzldLFxuXHRcdFx0bWFnZW50YTogWzM1LCAzOV0sXG5cdFx0XHRjeWFuOiBbMzYsIDM5XSxcblx0XHRcdHdoaXRlOiBbMzcsIDM5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRibGFja0JyaWdodDogWzkwLCAzOV0sXG5cdFx0XHRyZWRCcmlnaHQ6IFs5MSwgMzldLFxuXHRcdFx0Z3JlZW5CcmlnaHQ6IFs5MiwgMzldLFxuXHRcdFx0eWVsbG93QnJpZ2h0OiBbOTMsIDM5XSxcblx0XHRcdGJsdWVCcmlnaHQ6IFs5NCwgMzldLFxuXHRcdFx0bWFnZW50YUJyaWdodDogWzk1LCAzOV0sXG5cdFx0XHRjeWFuQnJpZ2h0OiBbOTYsIDM5XSxcblx0XHRcdHdoaXRlQnJpZ2h0OiBbOTcsIDM5XVxuXHRcdH0sXG5cdFx0YmdDb2xvcjoge1xuXHRcdFx0YmdCbGFjazogWzQwLCA0OV0sXG5cdFx0XHRiZ1JlZDogWzQxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuOiBbNDIsIDQ5XSxcblx0XHRcdGJnWWVsbG93OiBbNDMsIDQ5XSxcblx0XHRcdGJnQmx1ZTogWzQ0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGE6IFs0NSwgNDldLFxuXHRcdFx0YmdDeWFuOiBbNDYsIDQ5XSxcblx0XHRcdGJnV2hpdGU6IFs0NywgNDldLFxuXG5cdFx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRcdGJnQmxhY2tCcmlnaHQ6IFsxMDAsIDQ5XSxcblx0XHRcdGJnUmVkQnJpZ2h0OiBbMTAxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuQnJpZ2h0OiBbMTAyLCA0OV0sXG5cdFx0XHRiZ1llbGxvd0JyaWdodDogWzEwMywgNDldLFxuXHRcdFx0YmdCbHVlQnJpZ2h0OiBbMTA0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGFCcmlnaHQ6IFsxMDUsIDQ5XSxcblx0XHRcdGJnQ3lhbkJyaWdodDogWzEwNiwgNDldLFxuXHRcdFx0YmdXaGl0ZUJyaWdodDogWzEwNywgNDldXG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFsaWFzIGJyaWdodCBibGFjayBhcyBncmF5IChhbmQgZ3JleSlcblx0c3R5bGVzLmNvbG9yLmdyYXkgPSBzdHlsZXMuY29sb3IuYmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5iZ0NvbG9yLmJnR3JheSA9IHN0eWxlcy5iZ0NvbG9yLmJnQmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5jb2xvci5ncmV5ID0gc3R5bGVzLmNvbG9yLmJsYWNrQnJpZ2h0O1xuXHRzdHlsZXMuYmdDb2xvci5iZ0dyZXkgPSBzdHlsZXMuYmdDb2xvci5iZ0JsYWNrQnJpZ2h0O1xuXG5cdGZvciAoY29uc3QgW2dyb3VwTmFtZSwgZ3JvdXBdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlcykpIHtcblx0XHRmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhncm91cCkpIHtcblx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0ge1xuXHRcdFx0XHRvcGVuOiBgXFx1MDAxQlske3N0eWxlWzBdfW1gLFxuXHRcdFx0XHRjbG9zZTogYFxcdTAwMUJbJHtzdHlsZVsxXX1tYFxuXHRcdFx0fTtcblxuXHRcdFx0Z3JvdXBbc3R5bGVOYW1lXSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuXG5cdFx0XHRjb2Rlcy5zZXQoc3R5bGVbMF0sIHN0eWxlWzFdKTtcblx0XHR9XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCBncm91cE5hbWUsIHtcblx0XHRcdHZhbHVlOiBncm91cCxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCAnY29kZXMnLCB7XG5cdFx0dmFsdWU6IGNvZGVzLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdH0pO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTYsICdhbnNpMTYnLCBhbnNpMmFuc2ksIGZhbHNlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuY29sb3IsICdhbnNpMjU2JywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kyNTYsICdhbnNpMjU2JywgYW5zaTJhbnNpLCBmYWxzZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaTE2bScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTZtLCAncmdiJywgcmdiMnJnYiwgZmFsc2UpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTYsICdhbnNpMTYnLCBhbnNpMmFuc2ksIHRydWUpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaTI1NicsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMjU2LCAnYW5zaTI1NicsIGFuc2kyYW5zaSwgdHJ1ZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmJnQ29sb3IsICdhbnNpMTZtJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNm0sICdyZ2InLCByZ2IycmdiLCB0cnVlKSk7XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuLy8gTWFrZSB0aGUgZXhwb3J0IGltbXV0YWJsZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogYXNzZW1ibGVTdHlsZXNcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzLmhydGltZSB8fCBocnRpbWVcblxuLy8gcG9seWZpbCBmb3Igd2luZG93LnBlcmZvcm1hbmNlLm5vd1xudmFyIHBlcmZvcm1hbmNlID0gZ2xvYmFsLnBlcmZvcm1hbmNlIHx8IHt9XG52YXIgcGVyZm9ybWFuY2VOb3cgPVxuICBwZXJmb3JtYW5jZS5ub3cgICAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm1vek5vdyAgICAgfHxcbiAgcGVyZm9ybWFuY2UubXNOb3cgICAgICB8fFxuICBwZXJmb3JtYW5jZS5vTm93ICAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLndlYmtpdE5vdyAgfHxcbiAgZnVuY3Rpb24oKXsgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgfVxuXG4vLyBnZW5lcmF0ZSB0aW1lc3RhbXAgb3IgZGVsdGFcbi8vIHNlZSBodHRwOi8vbm9kZWpzLm9yZy9hcGkvcHJvY2Vzcy5odG1sI3Byb2Nlc3NfcHJvY2Vzc19ocnRpbWVcbmZ1bmN0aW9uIGhydGltZShwcmV2aW91c1RpbWVzdGFtcCl7XG4gIHZhciBjbG9ja3RpbWUgPSBwZXJmb3JtYW5jZU5vdy5jYWxsKHBlcmZvcm1hbmNlKSoxZS0zXG4gIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcihjbG9ja3RpbWUpXG4gIHZhciBuYW5vc2Vjb25kcyA9IE1hdGguZmxvb3IoKGNsb2NrdGltZSUxKSoxZTkpXG4gIGlmIChwcmV2aW91c1RpbWVzdGFtcCkge1xuICAgIHNlY29uZHMgPSBzZWNvbmRzIC0gcHJldmlvdXNUaW1lc3RhbXBbMF1cbiAgICBuYW5vc2Vjb25kcyA9IG5hbm9zZWNvbmRzIC0gcHJldmlvdXNUaW1lc3RhbXBbMV1cbiAgICBpZiAobmFub3NlY29uZHM8MCkge1xuICAgICAgc2Vjb25kcy0tXG4gICAgICBuYW5vc2Vjb25kcyArPSAxZTlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtzZWNvbmRzLG5hbm9zZWNvbmRzXVxufSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lTdHlsZXMgPSByZXF1aXJlKCdhbnNpLXN0eWxlcycpO1xuY29uc3Qge3N0ZG91dDogc3Rkb3V0Q29sb3IsIHN0ZGVycjogc3RkZXJyQ29sb3J9ID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcbmNvbnN0IHtcblx0c3RyaW5nUmVwbGFjZUFsbCxcblx0c3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4XG59ID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IHtpc0FycmF5fSA9IEFycmF5O1xuXG4vLyBgc3VwcG9ydHNDb2xvci5sZXZlbGAg4oaSIGBhbnNpU3R5bGVzLmNvbG9yW25hbWVdYCBtYXBwaW5nXG5jb25zdCBsZXZlbE1hcHBpbmcgPSBbXG5cdCdhbnNpJyxcblx0J2Fuc2knLFxuXHQnYW5zaTI1NicsXG5cdCdhbnNpMTZtJ1xuXTtcblxuY29uc3Qgc3R5bGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuY29uc3QgYXBwbHlPcHRpb25zID0gKG9iamVjdCwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGlmIChvcHRpb25zLmxldmVsICYmICEoTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLmxldmVsKSAmJiBvcHRpb25zLmxldmVsID49IDAgJiYgb3B0aW9ucy5sZXZlbCA8PSAzKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBsZXZlbGAgb3B0aW9uIHNob3VsZCBiZSBhbiBpbnRlZ2VyIGZyb20gMCB0byAzJyk7XG5cdH1cblxuXHQvLyBEZXRlY3QgbGV2ZWwgaWYgbm90IHNldCBtYW51YWxseVxuXHRjb25zdCBjb2xvckxldmVsID0gc3Rkb3V0Q29sb3IgPyBzdGRvdXRDb2xvci5sZXZlbCA6IDA7XG5cdG9iamVjdC5sZXZlbCA9IG9wdGlvbnMubGV2ZWwgPT09IHVuZGVmaW5lZCA/IGNvbG9yTGV2ZWwgOiBvcHRpb25zLmxldmVsO1xufTtcblxuY2xhc3MgQ2hhbGtDbGFzcyB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RydWN0b3ItcmV0dXJuXG5cdFx0cmV0dXJuIGNoYWxrRmFjdG9yeShvcHRpb25zKTtcblx0fVxufVxuXG5jb25zdCBjaGFsa0ZhY3RvcnkgPSBvcHRpb25zID0+IHtcblx0Y29uc3QgY2hhbGsgPSB7fTtcblx0YXBwbHlPcHRpb25zKGNoYWxrLCBvcHRpb25zKTtcblxuXHRjaGFsay50ZW1wbGF0ZSA9ICguLi5hcmd1bWVudHNfKSA9PiBjaGFsa1RhZyhjaGFsay50ZW1wbGF0ZSwgLi4uYXJndW1lbnRzXyk7XG5cblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYWxrLCBDaGFsay5wcm90b3R5cGUpO1xuXHRPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhbGsudGVtcGxhdGUsIGNoYWxrKTtcblxuXHRjaGFsay50ZW1wbGF0ZS5jb25zdHJ1Y3RvciA9ICgpID0+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2BjaGFsay5jb25zdHJ1Y3RvcigpYCBpcyBkZXByZWNhdGVkLiBVc2UgYG5ldyBjaGFsay5JbnN0YW5jZSgpYCBpbnN0ZWFkLicpO1xuXHR9O1xuXG5cdGNoYWxrLnRlbXBsYXRlLkluc3RhbmNlID0gQ2hhbGtDbGFzcztcblxuXHRyZXR1cm4gY2hhbGsudGVtcGxhdGU7XG59O1xuXG5mdW5jdGlvbiBDaGFsayhvcHRpb25zKSB7XG5cdHJldHVybiBjaGFsa0ZhY3Rvcnkob3B0aW9ucyk7XG59XG5cbmZvciAoY29uc3QgW3N0eWxlTmFtZSwgc3R5bGVdIG9mIE9iamVjdC5lbnRyaWVzKGFuc2lTdHlsZXMpKSB7XG5cdHN0eWxlc1tzdHlsZU5hbWVdID0ge1xuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IGJ1aWxkZXIgPSBjcmVhdGVCdWlsZGVyKHRoaXMsIGNyZWF0ZVN0eWxlcihzdHlsZS5vcGVuLCBzdHlsZS5jbG9zZSwgdGhpcy5fc3R5bGVyKSwgdGhpcy5faXNFbXB0eSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgc3R5bGVOYW1lLCB7dmFsdWU6IGJ1aWxkZXJ9KTtcblx0XHRcdHJldHVybiBidWlsZGVyO1xuXHRcdH1cblx0fTtcbn1cblxuc3R5bGVzLnZpc2libGUgPSB7XG5cdGdldCgpIHtcblx0XHRjb25zdCBidWlsZGVyID0gY3JlYXRlQnVpbGRlcih0aGlzLCB0aGlzLl9zdHlsZXIsIHRydWUpO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndmlzaWJsZScsIHt2YWx1ZTogYnVpbGRlcn0pO1xuXHRcdHJldHVybiBidWlsZGVyO1xuXHR9XG59O1xuXG5jb25zdCB1c2VkTW9kZWxzID0gWydyZ2InLCAnaGV4JywgJ2tleXdvcmQnLCAnaHNsJywgJ2hzdicsICdod2InLCAnYW5zaScsICdhbnNpMjU2J107XG5cbmZvciAoY29uc3QgbW9kZWwgb2YgdXNlZE1vZGVscykge1xuXHRzdHlsZXNbbW9kZWxdID0ge1xuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IHtsZXZlbH0gPSB0aGlzO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdFx0XHRcdGNvbnN0IHN0eWxlciA9IGNyZWF0ZVN0eWxlcihhbnNpU3R5bGVzLmNvbG9yW2xldmVsTWFwcGluZ1tsZXZlbF1dW21vZGVsXSguLi5hcmd1bWVudHNfKSwgYW5zaVN0eWxlcy5jb2xvci5jbG9zZSwgdGhpcy5fc3R5bGVyKTtcblx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJ1aWxkZXIodGhpcywgc3R5bGVyLCB0aGlzLl9pc0VtcHR5KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuXG5mb3IgKGNvbnN0IG1vZGVsIG9mIHVzZWRNb2RlbHMpIHtcblx0Y29uc3QgYmdNb2RlbCA9ICdiZycgKyBtb2RlbFswXS50b1VwcGVyQ2FzZSgpICsgbW9kZWwuc2xpY2UoMSk7XG5cdHN0eWxlc1tiZ01vZGVsXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCB7bGV2ZWx9ID0gdGhpcztcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRcdFx0XHRjb25zdCBzdHlsZXIgPSBjcmVhdGVTdHlsZXIoYW5zaVN0eWxlcy5iZ0NvbG9yW2xldmVsTWFwcGluZ1tsZXZlbF1dW21vZGVsXSguLi5hcmd1bWVudHNfKSwgYW5zaVN0eWxlcy5iZ0NvbG9yLmNsb3NlLCB0aGlzLl9zdHlsZXIpO1xuXHRcdFx0XHRyZXR1cm4gY3JlYXRlQnVpbGRlcih0aGlzLCBzdHlsZXIsIHRoaXMuX2lzRW1wdHkpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IHByb3RvID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKCkgPT4ge30sIHtcblx0Li4uc3R5bGVzLFxuXHRsZXZlbDoge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2dlbmVyYXRvci5sZXZlbDtcblx0XHR9LFxuXHRcdHNldChsZXZlbCkge1xuXHRcdFx0dGhpcy5fZ2VuZXJhdG9yLmxldmVsID0gbGV2ZWw7XG5cdFx0fVxuXHR9XG59KTtcblxuY29uc3QgY3JlYXRlU3R5bGVyID0gKG9wZW4sIGNsb3NlLCBwYXJlbnQpID0+IHtcblx0bGV0IG9wZW5BbGw7XG5cdGxldCBjbG9zZUFsbDtcblx0aWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3BlbkFsbCA9IG9wZW47XG5cdFx0Y2xvc2VBbGwgPSBjbG9zZTtcblx0fSBlbHNlIHtcblx0XHRvcGVuQWxsID0gcGFyZW50Lm9wZW5BbGwgKyBvcGVuO1xuXHRcdGNsb3NlQWxsID0gY2xvc2UgKyBwYXJlbnQuY2xvc2VBbGw7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG9wZW4sXG5cdFx0Y2xvc2UsXG5cdFx0b3BlbkFsbCxcblx0XHRjbG9zZUFsbCxcblx0XHRwYXJlbnRcblx0fTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1aWxkZXIgPSAoc2VsZiwgX3N0eWxlciwgX2lzRW1wdHkpID0+IHtcblx0Y29uc3QgYnVpbGRlciA9ICguLi5hcmd1bWVudHNfKSA9PiB7XG5cdFx0aWYgKGlzQXJyYXkoYXJndW1lbnRzX1swXSkgJiYgaXNBcnJheShhcmd1bWVudHNfWzBdLnJhdykpIHtcblx0XHRcdC8vIENhbGxlZCBhcyBhIHRlbXBsYXRlIGxpdGVyYWwsIGZvciBleGFtcGxlOiBjaGFsay5yZWRgMiArIDMgPSB7Ym9sZCAkezIrM319YFxuXHRcdFx0cmV0dXJuIGFwcGx5U3R5bGUoYnVpbGRlciwgY2hhbGtUYWcoYnVpbGRlciwgLi4uYXJndW1lbnRzXykpO1xuXHRcdH1cblxuXHRcdC8vIFNpbmdsZSBhcmd1bWVudCBpcyBob3QgcGF0aCwgaW1wbGljaXQgY29lcmNpb24gaXMgZmFzdGVyIHRoYW4gYW55dGhpbmdcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cblx0XHRyZXR1cm4gYXBwbHlTdHlsZShidWlsZGVyLCAoYXJndW1lbnRzXy5sZW5ndGggPT09IDEpID8gKCcnICsgYXJndW1lbnRzX1swXSkgOiBhcmd1bWVudHNfLmpvaW4oJyAnKSk7XG5cdH07XG5cblx0Ly8gV2UgYWx0ZXIgdGhlIHByb3RvdHlwZSBiZWNhdXNlIHdlIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24sIGJ1dCB0aGVyZSBpc1xuXHQvLyBubyB3YXkgdG8gY3JlYXRlIGEgZnVuY3Rpb24gd2l0aCBhIGRpZmZlcmVudCBwcm90b3R5cGVcblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1aWxkZXIsIHByb3RvKTtcblxuXHRidWlsZGVyLl9nZW5lcmF0b3IgPSBzZWxmO1xuXHRidWlsZGVyLl9zdHlsZXIgPSBfc3R5bGVyO1xuXHRidWlsZGVyLl9pc0VtcHR5ID0gX2lzRW1wdHk7XG5cblx0cmV0dXJuIGJ1aWxkZXI7XG59O1xuXG5jb25zdCBhcHBseVN0eWxlID0gKHNlbGYsIHN0cmluZykgPT4ge1xuXHRpZiAoc2VsZi5sZXZlbCA8PSAwIHx8ICFzdHJpbmcpIHtcblx0XHRyZXR1cm4gc2VsZi5faXNFbXB0eSA/ICcnIDogc3RyaW5nO1xuXHR9XG5cblx0bGV0IHN0eWxlciA9IHNlbGYuX3N0eWxlcjtcblxuXHRpZiAoc3R5bGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0Y29uc3Qge29wZW5BbGwsIGNsb3NlQWxsfSA9IHN0eWxlcjtcblx0aWYgKHN0cmluZy5pbmRleE9mKCdcXHUwMDFCJykgIT09IC0xKSB7XG5cdFx0d2hpbGUgKHN0eWxlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBSZXBsYWNlIGFueSBpbnN0YW5jZXMgYWxyZWFkeSBwcmVzZW50IHdpdGggYSByZS1vcGVuaW5nIGNvZGVcblx0XHRcdC8vIG90aGVyd2lzZSBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBzdHJpbmcgdW50aWwgc2FpZCBjbG9zaW5nIGNvZGVcblx0XHRcdC8vIHdpbGwgYmUgY29sb3JlZCwgYW5kIHRoZSByZXN0IHdpbGwgc2ltcGx5IGJlICdwbGFpbicuXG5cdFx0XHRzdHJpbmcgPSBzdHJpbmdSZXBsYWNlQWxsKHN0cmluZywgc3R5bGVyLmNsb3NlLCBzdHlsZXIub3Blbik7XG5cblx0XHRcdHN0eWxlciA9IHN0eWxlci5wYXJlbnQ7XG5cdFx0fVxuXHR9XG5cblx0Ly8gV2UgY2FuIG1vdmUgYm90aCBuZXh0IGFjdGlvbnMgb3V0IG9mIGxvb3AsIGJlY2F1c2UgcmVtYWluaW5nIGFjdGlvbnMgaW4gbG9vcCB3b24ndCBoYXZlXG5cdC8vIGFueS92aXNpYmxlIGVmZmVjdCBvbiBwYXJ0cyB3ZSBhZGQgaGVyZS4gQ2xvc2UgdGhlIHN0eWxpbmcgYmVmb3JlIGEgbGluZWJyZWFrIGFuZCByZW9wZW5cblx0Ly8gYWZ0ZXIgbmV4dCBsaW5lIHRvIGZpeCBhIGJsZWVkIGlzc3VlIG9uIG1hY09TOiBodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvY2hhbGsvcHVsbC85MlxuXHRjb25zdCBsZkluZGV4ID0gc3RyaW5nLmluZGV4T2YoJ1xcbicpO1xuXHRpZiAobGZJbmRleCAhPT0gLTEpIHtcblx0XHRzdHJpbmcgPSBzdHJpbmdFbmNhc2VDUkxGV2l0aEZpcnN0SW5kZXgoc3RyaW5nLCBjbG9zZUFsbCwgb3BlbkFsbCwgbGZJbmRleCk7XG5cdH1cblxuXHRyZXR1cm4gb3BlbkFsbCArIHN0cmluZyArIGNsb3NlQWxsO1xufTtcblxubGV0IHRlbXBsYXRlO1xuY29uc3QgY2hhbGtUYWcgPSAoY2hhbGssIC4uLnN0cmluZ3MpID0+IHtcblx0Y29uc3QgW2ZpcnN0U3RyaW5nXSA9IHN0cmluZ3M7XG5cblx0aWYgKCFpc0FycmF5KGZpcnN0U3RyaW5nKSB8fCAhaXNBcnJheShmaXJzdFN0cmluZy5yYXcpKSB7XG5cdFx0Ly8gSWYgY2hhbGsoKSB3YXMgY2FsbGVkIGJ5IGl0c2VsZiBvciB3aXRoIGEgc3RyaW5nLFxuXHRcdC8vIHJldHVybiB0aGUgc3RyaW5nIGl0c2VsZiBhcyBhIHN0cmluZy5cblx0XHRyZXR1cm4gc3RyaW5ncy5qb2luKCcgJyk7XG5cdH1cblxuXHRjb25zdCBhcmd1bWVudHNfID0gc3RyaW5ncy5zbGljZSgxKTtcblx0Y29uc3QgcGFydHMgPSBbZmlyc3RTdHJpbmcucmF3WzBdXTtcblxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGZpcnN0U3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0cGFydHMucHVzaChcblx0XHRcdFN0cmluZyhhcmd1bWVudHNfW2kgLSAxXSkucmVwbGFjZSgvW3t9XFxcXF0vZywgJ1xcXFwkJicpLFxuXHRcdFx0U3RyaW5nKGZpcnN0U3RyaW5nLnJhd1tpXSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcblx0XHR0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5cdH1cblxuXHRyZXR1cm4gdGVtcGxhdGUoY2hhbGssIHBhcnRzLmpvaW4oJycpKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENoYWxrLnByb3RvdHlwZSwgc3R5bGVzKTtcblxuY29uc3QgY2hhbGsgPSBDaGFsaygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbmNoYWxrLnN1cHBvcnRzQ29sb3IgPSBzdGRvdXRDb2xvcjtcbmNoYWxrLnN0ZGVyciA9IENoYWxrKHtsZXZlbDogc3RkZXJyQ29sb3IgPyBzdGRlcnJDb2xvci5sZXZlbCA6IDB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5jaGFsay5zdGRlcnIuc3VwcG9ydHNDb2xvciA9IHN0ZGVyckNvbG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYWxrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgVEVNUExBVEVfUkVHRVggPSAvKD86XFxcXCh1KD86W2EtZlxcZF17NH18XFx7W2EtZlxcZF17MSw2fVxcfSl8eFthLWZcXGRdezJ9fC4pKXwoPzpcXHsofik/KFxcdysoPzpcXChbXildKlxcKSk/KD86XFwuXFx3Kyg/OlxcKFteKV0qXFwpKT8pKikoPzpbIFxcdF18KD89XFxyP1xcbikpKXwoXFx9KXwoKD86LnxbXFxyXFxuXFxmXSkrPykvZ2k7XG5jb25zdCBTVFlMRV9SRUdFWCA9IC8oPzpefFxcLikoXFx3KykoPzpcXCgoW14pXSopXFwpKT8vZztcbmNvbnN0IFNUUklOR19SRUdFWCA9IC9eKFsnXCJdKSgoPzpcXFxcLnwoPyFcXDEpW15cXFxcXSkqKVxcMSQvO1xuY29uc3QgRVNDQVBFX1JFR0VYID0gL1xcXFwodSg/OlthLWZcXGRdezR9fHtbYS1mXFxkXXsxLDZ9fSl8eFthLWZcXGRdezJ9fC4pfChbXlxcXFxdKS9naTtcblxuY29uc3QgRVNDQVBFUyA9IG5ldyBNYXAoW1xuXHRbJ24nLCAnXFxuJ10sXG5cdFsncicsICdcXHInXSxcblx0Wyd0JywgJ1xcdCddLFxuXHRbJ2InLCAnXFxiJ10sXG5cdFsnZicsICdcXGYnXSxcblx0Wyd2JywgJ1xcdiddLFxuXHRbJzAnLCAnXFwwJ10sXG5cdFsnXFxcXCcsICdcXFxcJ10sXG5cdFsnZScsICdcXHUwMDFCJ10sXG5cdFsnYScsICdcXHUwMDA3J11cbl0pO1xuXG5mdW5jdGlvbiB1bmVzY2FwZShjKSB7XG5cdGNvbnN0IHUgPSBjWzBdID09PSAndSc7XG5cdGNvbnN0IGJyYWNrZXQgPSBjWzFdID09PSAneyc7XG5cblx0aWYgKCh1ICYmICFicmFja2V0ICYmIGMubGVuZ3RoID09PSA1KSB8fCAoY1swXSA9PT0gJ3gnICYmIGMubGVuZ3RoID09PSAzKSkge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGMuc2xpY2UoMSksIDE2KSk7XG5cdH1cblxuXHRpZiAodSAmJiBicmFja2V0KSB7XG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KHBhcnNlSW50KGMuc2xpY2UoMiwgLTEpLCAxNikpO1xuXHR9XG5cblx0cmV0dXJuIEVTQ0FQRVMuZ2V0KGMpIHx8IGM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKG5hbWUsIGFyZ3VtZW50c18pIHtcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRjb25zdCBjaHVua3MgPSBhcmd1bWVudHNfLnRyaW0oKS5zcGxpdCgvXFxzKixcXHMqL2cpO1xuXHRsZXQgbWF0Y2hlcztcblxuXHRmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuXHRcdGNvbnN0IG51bWJlciA9IE51bWJlcihjaHVuayk7XG5cdFx0aWYgKCFOdW1iZXIuaXNOYU4obnVtYmVyKSkge1xuXHRcdFx0cmVzdWx0cy5wdXNoKG51bWJlcik7XG5cdFx0fSBlbHNlIGlmICgobWF0Y2hlcyA9IGNodW5rLm1hdGNoKFNUUklOR19SRUdFWCkpKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2gobWF0Y2hlc1syXS5yZXBsYWNlKEVTQ0FQRV9SRUdFWCwgKG0sIGVzY2FwZSwgY2hhcmFjdGVyKSA9PiBlc2NhcGUgPyB1bmVzY2FwZShlc2NhcGUpIDogY2hhcmFjdGVyKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBDaGFsayB0ZW1wbGF0ZSBzdHlsZSBhcmd1bWVudDogJHtjaHVua30gKGluIHN0eWxlICcke25hbWV9JylgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZShzdHlsZSkge1xuXHRTVFlMRV9SRUdFWC5sYXN0SW5kZXggPSAwO1xuXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0bGV0IG1hdGNoZXM7XG5cblx0d2hpbGUgKChtYXRjaGVzID0gU1RZTEVfUkVHRVguZXhlYyhzdHlsZSkpICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgbmFtZSA9IG1hdGNoZXNbMV07XG5cblx0XHRpZiAobWF0Y2hlc1syXSkge1xuXHRcdFx0Y29uc3QgYXJncyA9IHBhcnNlQXJndW1lbnRzKG5hbWUsIG1hdGNoZXNbMl0pO1xuXHRcdFx0cmVzdWx0cy5wdXNoKFtuYW1lXS5jb25jYXQoYXJncykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goW25hbWVdKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKSB7XG5cdGNvbnN0IGVuYWJsZWQgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGxheWVyIG9mIHN0eWxlcykge1xuXHRcdGZvciAoY29uc3Qgc3R5bGUgb2YgbGF5ZXIuc3R5bGVzKSB7XG5cdFx0XHRlbmFibGVkW3N0eWxlWzBdXSA9IGxheWVyLmludmVyc2UgPyBudWxsIDogc3R5bGUuc2xpY2UoMSk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGN1cnJlbnQgPSBjaGFsaztcblx0Zm9yIChjb25zdCBbc3R5bGVOYW1lLCBzdHlsZXNdIG9mIE9iamVjdC5lbnRyaWVzKGVuYWJsZWQpKSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghKHN0eWxlTmFtZSBpbiBjdXJyZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIENoYWxrIHN0eWxlOiAke3N0eWxlTmFtZX1gKTtcblx0XHR9XG5cblx0XHRjdXJyZW50ID0gc3R5bGVzLmxlbmd0aCA+IDAgPyBjdXJyZW50W3N0eWxlTmFtZV0oLi4uc3R5bGVzKSA6IGN1cnJlbnRbc3R5bGVOYW1lXTtcblx0fVxuXG5cdHJldHVybiBjdXJyZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IChjaGFsaywgdGVtcG9yYXJ5KSA9PiB7XG5cdGNvbnN0IHN0eWxlcyA9IFtdO1xuXHRjb25zdCBjaHVua3MgPSBbXTtcblx0bGV0IGNodW5rID0gW107XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcblx0dGVtcG9yYXJ5LnJlcGxhY2UoVEVNUExBVEVfUkVHRVgsIChtLCBlc2NhcGVDaGFyYWN0ZXIsIGludmVyc2UsIHN0eWxlLCBjbG9zZSwgY2hhcmFjdGVyKSA9PiB7XG5cdFx0aWYgKGVzY2FwZUNoYXJhY3Rlcikge1xuXHRcdFx0Y2h1bmsucHVzaCh1bmVzY2FwZShlc2NhcGVDaGFyYWN0ZXIpKTtcblx0XHR9IGVsc2UgaWYgKHN0eWxlKSB7XG5cdFx0XHRjb25zdCBzdHJpbmcgPSBjaHVuay5qb2luKCcnKTtcblx0XHRcdGNodW5rID0gW107XG5cdFx0XHRjaHVua3MucHVzaChzdHlsZXMubGVuZ3RoID09PSAwID8gc3RyaW5nIDogYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKShzdHJpbmcpKTtcblx0XHRcdHN0eWxlcy5wdXNoKHtpbnZlcnNlLCBzdHlsZXM6IHBhcnNlU3R5bGUoc3R5bGUpfSk7XG5cdFx0fSBlbHNlIGlmIChjbG9zZSkge1xuXHRcdFx0aWYgKHN0eWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGb3VuZCBleHRyYW5lb3VzIH0gaW4gQ2hhbGsgdGVtcGxhdGUgbGl0ZXJhbCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRjaHVua3MucHVzaChidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpKGNodW5rLmpvaW4oJycpKSk7XG5cdFx0XHRjaHVuayA9IFtdO1xuXHRcdFx0c3R5bGVzLnBvcCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaHVuay5wdXNoKGNoYXJhY3Rlcik7XG5cdFx0fVxuXHR9KTtcblxuXHRjaHVua3MucHVzaChjaHVuay5qb2luKCcnKSk7XG5cblx0aWYgKHN0eWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0Y29uc3QgZXJyTWVzc2FnZSA9IGBDaGFsayB0ZW1wbGF0ZSBsaXRlcmFsIGlzIG1pc3NpbmcgJHtzdHlsZXMubGVuZ3RofSBjbG9zaW5nIGJyYWNrZXQke3N0eWxlcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gKFxcYH1cXGApYDtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyTWVzc2FnZSk7XG5cdH1cblxuXHRyZXR1cm4gY2h1bmtzLmpvaW4oJycpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3RyaW5nUmVwbGFjZUFsbCA9IChzdHJpbmcsIHN1YnN0cmluZywgcmVwbGFjZXIpID0+IHtcblx0bGV0IGluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc3Vic3RyaW5nKTtcblx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRjb25zdCBzdWJzdHJpbmdMZW5ndGggPSBzdWJzdHJpbmcubGVuZ3RoO1xuXHRsZXQgZW5kSW5kZXggPSAwO1xuXHRsZXQgcmV0dXJuVmFsdWUgPSAnJztcblx0ZG8ge1xuXHRcdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgsIGluZGV4IC0gZW5kSW5kZXgpICsgc3Vic3RyaW5nICsgcmVwbGFjZXI7XG5cdFx0ZW5kSW5kZXggPSBpbmRleCArIHN1YnN0cmluZ0xlbmd0aDtcblx0XHRpbmRleCA9IHN0cmluZy5pbmRleE9mKHN1YnN0cmluZywgZW5kSW5kZXgpO1xuXHR9IHdoaWxlIChpbmRleCAhPT0gLTEpO1xuXG5cdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgpO1xuXHRyZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG5jb25zdCBzdHJpbmdFbmNhc2VDUkxGV2l0aEZpcnN0SW5kZXggPSAoc3RyaW5nLCBwcmVmaXgsIHBvc3RmaXgsIGluZGV4KSA9PiB7XG5cdGxldCBlbmRJbmRleCA9IDA7XG5cdGxldCByZXR1cm5WYWx1ZSA9ICcnO1xuXHRkbyB7XG5cdFx0Y29uc3QgZ290Q1IgPSBzdHJpbmdbaW5kZXggLSAxXSA9PT0gJ1xccic7XG5cdFx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCwgKGdvdENSID8gaW5kZXggLSAxIDogaW5kZXgpIC0gZW5kSW5kZXgpICsgcHJlZml4ICsgKGdvdENSID8gJ1xcclxcbicgOiAnXFxuJykgKyBwb3N0Zml4O1xuXHRcdGVuZEluZGV4ID0gaW5kZXggKyAxO1xuXHRcdGluZGV4ID0gc3RyaW5nLmluZGV4T2YoJ1xcbicsIGVuZEluZGV4KTtcblx0fSB3aGlsZSAoaW5kZXggIT09IC0xKTtcblxuXHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4KTtcblx0cmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN0cmluZ1JlcGxhY2VBbGwsXG5cdHN0cmluZ0VuY2FzZUNSTEZXaXRoRmlyc3RJbmRleFxufTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbmNvbnN0IGNzc0tleXdvcmRzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG5jb25zdCByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNzc0tleXdvcmRzKSkge1xuXHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG59XG5cbmNvbnN0IGNvbnZlcnQgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdyZ2InfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzbCd9LFxuXHRoc3Y6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHN2J30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdod2InfSxcblx0Y215azoge2NoYW5uZWxzOiA0LCBsYWJlbHM6ICdjbXlrJ30sXG5cdHh5ejoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICd4eXonfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xhYid9LFxuXHRsY2g6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGNoJ30sXG5cdGhleDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnaGV4J119LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydrZXl3b3JkJ119LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kxNiddfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTI1NiddfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydoJywgJ2MnLCAnZyddfSxcblx0YXBwbGU6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ3IxNicsICdnMTYnLCAnYjE2J119LFxuXHRncmF5OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydncmF5J119XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG5cbi8vIEhpZGUgLmNoYW5uZWxzIGFuZCAubGFiZWxzIHByb3BlcnRpZXNcbmZvciAoY29uc3QgbW9kZWwgb2YgT2JqZWN0LmtleXMoY29udmVydCkpIHtcblx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbCBsYWJlbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHRpZiAoY29udmVydFttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydFttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NoYW5uZWwgYW5kIGxhYmVsIGNvdW50cyBtaXNtYXRjaDogJyArIG1vZGVsKTtcblx0fVxuXG5cdGNvbnN0IHtjaGFubmVscywgbGFiZWxzfSA9IGNvbnZlcnRbbW9kZWxdO1xuXHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0Y29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG5cdGxldCBoO1xuXHRsZXQgcztcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGNvbnN0IGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHRsZXQgcmRpZjtcblx0bGV0IGdkaWY7XG5cdGxldCBiZGlmO1xuXHRsZXQgaDtcblx0bGV0IHM7XG5cblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblx0Y29uc3QgdiA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHRjb25zdCBkaWZmID0gdiAtIE1hdGgubWluKHIsIGcsIGIpO1xuXHRjb25zdCBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IDA7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRpZmYgLyB2O1xuXHRcdHJkaWYgPSBkaWZmYyhyKTtcblx0XHRnZGlmID0gZGlmZmMoZyk7XG5cdFx0YmRpZiA9IGRpZmZjKGIpO1xuXG5cdFx0aWYgKHIgPT09IHYpIHtcblx0XHRcdGggPSBiZGlmIC0gZ2RpZjtcblx0XHR9IGVsc2UgaWYgKGcgPT09IHYpIHtcblx0XHRcdGggPSAoMSAvIDMpICsgcmRpZiAtIGJkaWY7XG5cdFx0fSBlbHNlIGlmIChiID09PSB2KSB7XG5cdFx0XHRoID0gKDIgLyAzKSArIGdkaWYgLSByZGlmO1xuXHRcdH1cblxuXHRcdGlmIChoIDwgMCkge1xuXHRcdFx0aCArPSAxO1xuXHRcdH0gZWxzZSBpZiAoaCA+IDEpIHtcblx0XHRcdGggLT0gMTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGggKiAzNjAsXG5cdFx0cyAqIDEwMCxcblx0XHR2ICogMTAwXG5cdF07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF07XG5cdGNvbnN0IGcgPSByZ2JbMV07XG5cdGxldCBiID0gcmdiWzJdO1xuXHRjb25zdCBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdGNvbnN0IHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHRjb25zdCBrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGNvbnN0IGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0Y29uc3QgbSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRjb25zdCB5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHQvKlxuXHRcdFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuXHQqL1xuXHRyZXR1cm4gKFxuXHRcdCgoeFswXSAtIHlbMF0pICoqIDIpICtcblx0XHQoKHhbMV0gLSB5WzFdKSAqKiAyKSArXG5cdFx0KCh4WzJdIC0geVsyXSkgKiogMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0bGV0IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0bGV0IGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKGNvbnN0IGtleXdvcmQgb2YgT2JqZWN0LmtleXMoY3NzS2V5d29yZHMpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcblxuXHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRjb25zdCBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHRsZXQgciA9IHJnYlswXSAvIDI1NTtcblx0bGV0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGxldCBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIEFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/ICgoKHIgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyAoKChnICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gKCgoYiArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0Y29uc3QgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0Y29uc3QgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0Y29uc3QgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0bGV0IHggPSB4eXpbMF07XG5cdGxldCB5ID0geHl6WzFdO1xuXHRsZXQgeiA9IHh5elsyXTtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gKHggKiogKDEgLyAzKSkgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyAoeSAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/ICh6ICoqICgxIC8gMykpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGNvbnN0IGwgPSAoMTE2ICogeSkgLSAxNjtcblx0Y29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG5cdGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdGNvbnN0IGggPSBoc2xbMF0gLyAzNjA7XG5cdGNvbnN0IHMgPSBoc2xbMV0gLyAxMDA7XG5cdGNvbnN0IGwgPSBoc2xbMl0gLyAxMDA7XG5cdGxldCB0Mjtcblx0bGV0IHQzO1xuXHRsZXQgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdGNvbnN0IHQxID0gMiAqIGwgLSB0MjtcblxuXHRjb25zdCByZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdGNvbnN0IGggPSBoc2xbMF07XG5cdGxldCBzID0gaHNsWzFdIC8gMTAwO1xuXHRsZXQgbCA9IGhzbFsyXSAvIDEwMDtcblx0bGV0IHNtaW4gPSBzO1xuXHRjb25zdCBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0Y29uc3QgdiA9IChsICsgcykgLyAyO1xuXHRjb25zdCBzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBoID0gaHN2WzBdIC8gNjA7XG5cdGNvbnN0IHMgPSBoc3ZbMV0gLyAxMDA7XG5cdGxldCB2ID0gaHN2WzJdIC8gMTAwO1xuXHRjb25zdCBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdGNvbnN0IGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0Y29uc3QgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHRjb25zdCBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdGNvbnN0IHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdGNvbnN0IGggPSBoc3ZbMF07XG5cdGNvbnN0IHMgPSBoc3ZbMV0gLyAxMDA7XG5cdGNvbnN0IHYgPSBoc3ZbMl0gLyAxMDA7XG5cdGNvbnN0IHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0bGV0IHNsO1xuXHRsZXQgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGNvbnN0IGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdGNvbnN0IGggPSBod2JbMF0gLyAzNjA7XG5cdGxldCB3aCA9IGh3YlsxXSAvIDEwMDtcblx0bGV0IGJsID0gaHdiWzJdIC8gMTAwO1xuXHRjb25zdCByYXRpbyA9IHdoICsgYmw7XG5cdGxldCBmO1xuXG5cdC8vIFdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0Y29uc3QgaSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHRjb25zdCB2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0Y29uc3QgbiA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdGxldCByO1xuXHRsZXQgZztcblx0bGV0IGI7XG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyAgZyA9IG47ICBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47ICBnID0gdjsgIGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyAgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgIGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyAgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgIGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cdC8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUsbm8tbXVsdGktc3BhY2VzICovXG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHRjb25zdCBjID0gY215a1swXSAvIDEwMDtcblx0Y29uc3QgbSA9IGNteWtbMV0gLyAxMDA7XG5cdGNvbnN0IHkgPSBjbXlrWzJdIC8gMTAwO1xuXHRjb25zdCBrID0gY215a1szXSAvIDEwMDtcblxuXHRjb25zdCByID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGNvbnN0IGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0Y29uc3QgYiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdGNvbnN0IHggPSB4eXpbMF0gLyAxMDA7XG5cdGNvbnN0IHkgPSB4eXpbMV0gLyAxMDA7XG5cdGNvbnN0IHogPSB4eXpbMl0gLyAxMDA7XG5cdGxldCByO1xuXHRsZXQgZztcblx0bGV0IGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gQXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiAociAqKiAoMS4wIC8gMi40KSkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiAoZyAqKiAoMS4wIC8gMi40KSkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiAoYiAqKiAoMS4wIC8gMi40KSkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHRsZXQgeCA9IHh5elswXTtcblx0bGV0IHkgPSB4eXpbMV07XG5cdGxldCB6ID0geHl6WzJdO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyAoeCAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/ICh5ICoqICgxIC8gMykpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gKHogKiogKDEgLyAzKSkgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0Y29uc3QgbCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRjb25zdCBhID0gNTAwICogKHggLSB5KTtcblx0Y29uc3QgYiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYlswXTtcblx0Y29uc3QgYSA9IGxhYlsxXTtcblx0Y29uc3QgYiA9IGxhYlsyXTtcblx0bGV0IHg7XG5cdGxldCB5O1xuXHRsZXQgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdGNvbnN0IHkyID0geSAqKiAzO1xuXHRjb25zdCB4MiA9IHggKiogMztcblx0Y29uc3QgejIgPSB6ICoqIDM7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYlswXTtcblx0Y29uc3QgYSA9IGxhYlsxXTtcblx0Y29uc3QgYiA9IGxhYlsyXTtcblx0bGV0IGg7XG5cblx0Y29uc3QgaHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGNvbnN0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0Y29uc3QgbCA9IGxjaFswXTtcblx0Y29uc3QgYyA9IGxjaFsxXTtcblx0Y29uc3QgaCA9IGxjaFsyXTtcblxuXHRjb25zdCBociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0Y29uc3QgYSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGNvbnN0IGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncywgc2F0dXJhdGlvbiA9IG51bGwpIHtcblx0Y29uc3QgW3IsIGcsIGJdID0gYXJncztcblx0bGV0IHZhbHVlID0gc2F0dXJhdGlvbiA9PT0gbnVsbCA/IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXSA6IHNhdHVyYXRpb247IC8vIEhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdGxldCBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIE9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgciA9IGFyZ3NbMF07XG5cdGNvbnN0IGcgPSBhcmdzWzFdO1xuXHRjb25zdCBiID0gYXJnc1syXTtcblxuXHQvLyBXZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdGNvbnN0IGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRsZXQgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gSGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0Y29uc3QgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdGNvbnN0IHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0Y29uc3QgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0Y29uc3QgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIEhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0Y29uc3QgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHRsZXQgcmVtO1xuXHRjb25zdCByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0Y29uc3QgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdGNvbnN0IGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHRjb25zdCBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHRjb25zdCBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn18W2EtZjAtOV17M30vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0bGV0IGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cblx0aWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChjaGFyID0+IHtcblx0XHRcdHJldHVybiBjaGFyICsgY2hhcjtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdGNvbnN0IGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXHRjb25zdCByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0Y29uc3QgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0Y29uc3QgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0Y29uc3QgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHRjb25zdCBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0bGV0IGdyYXlzY2FsZTtcblx0bGV0IGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hO1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdGNvbnN0IHMgPSBoc2xbMV0gLyAxMDA7XG5cdGNvbnN0IGwgPSBoc2xbMl0gLyAxMDA7XG5cblx0Y29uc3QgYyA9IGwgPCAwLjUgPyAoMi4wICogcyAqIGwpIDogKDIuMCAqIHMgKiAoMS4wIC0gbCkpO1xuXG5cdGxldCBmID0gMDtcblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0Y29uc3QgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHRjb25zdCBjID0gcyAqIHY7XG5cdGxldCBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgaCA9IGhjZ1swXSAvIDM2MDtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdGNvbnN0IHB1cmUgPSBbMCwgMCwgMF07XG5cdGNvbnN0IGhpID0gKGggJSAxKSAqIDY7XG5cdGNvbnN0IHYgPSBoaSAlIDE7XG5cdGNvbnN0IHcgPSAxIC0gdjtcblx0bGV0IG1nID0gMDtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSAqL1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblx0LyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSAqL1xuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0Y29uc3QgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRsZXQgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0Y29uc3QgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHRsZXQgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXHRjb25zdCB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0Y29uc3QgdyA9IGh3YlsxXSAvIDEwMDtcblx0Y29uc3QgYiA9IGh3YlsyXSAvIDEwMDtcblx0Y29uc3QgdiA9IDEgLSBiO1xuXHRjb25zdCBjID0gdiAtIHc7XG5cdGxldCBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0LmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc2wgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmhzdiA9IGNvbnZlcnQuZ3JheS5oc2w7XG5cbmNvbnZlcnQuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRjb25zdCB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0Y29uc3QgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcblxuXHRjb25zdCBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5yZ2IuZ3JheSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwiY29uc3QgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5jb25zdCByb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxuY29uc3QgY29udmVydCA9IHt9O1xuXG5jb25zdCBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0Y29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRjb25zdCBhcmcwID0gYXJnc1swXTtcblx0XHRpZiAoYXJnMCA9PT0gdW5kZWZpbmVkIHx8IGFyZzAgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmcwO1xuXHRcdH1cblxuXHRcdGlmIChhcmcwLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBhcmcwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBQcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdGNvbnN0IHdyYXBwZWRGbiA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Y29uc3QgYXJnMCA9IGFyZ3NbMF07XG5cblx0XHRpZiAoYXJnMCA9PT0gdW5kZWZpbmVkIHx8IGFyZzAgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmcwO1xuXHRcdH1cblxuXHRcdGlmIChhcmcwLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBhcmcwO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gV2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAobGV0IGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gUHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmcm9tTW9kZWwgPT4ge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHRjb25zdCByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHRjb25zdCByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaCh0b01vZGVsID0+IHtcblx0XHRjb25zdCBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsImNvbnN0IGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuXG4vKlxuXHRUaGlzIGZ1bmN0aW9uIHJvdXRlcyBhIG1vZGVsIHRvIGFsbCBvdGhlciBtb2RlbHMuXG5cblx0YWxsIGZ1bmN0aW9ucyB0aGF0IGFyZSByb3V0ZWQgaGF2ZSBhIHByb3BlcnR5IGAuY29udmVyc2lvbmAgYXR0YWNoZWRcblx0dG8gdGhlIHJldHVybmVkIHN5bnRoZXRpYyBmdW5jdGlvbi4gVGhpcyBwcm9wZXJ0eSBpcyBhbiBhcnJheVxuXHRvZiBzdHJpbmdzLCBlYWNoIHdpdGggdGhlIHN0ZXBzIGluIGJldHdlZW4gdGhlICdmcm9tJyBhbmQgJ3RvJ1xuXHRjb2xvciBtb2RlbHMgKGluY2x1c2l2ZSkuXG5cblx0Y29udmVyc2lvbnMgdGhhdCBhcmUgbm90IHBvc3NpYmxlIHNpbXBseSBhcmUgbm90IGluY2x1ZGVkLlxuKi9cblxuZnVuY3Rpb24gYnVpbGRHcmFwaCgpIHtcblx0Y29uc3QgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHRjb25zdCBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cblx0Zm9yIChsZXQgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGdyYXBoW21vZGVsc1tpXV0gPSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS8xLXZzLWluZmluaXR5XG5cdFx0XHQvLyBtaWNyby1vcHQsIGJ1dCB0aGlzIGlzIHNpbXBsZS5cblx0XHRcdGRpc3RhbmNlOiAtMSxcblx0XHRcdHBhcmVudDogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyZWFkdGgtZmlyc3Rfc2VhcmNoXG5mdW5jdGlvbiBkZXJpdmVCRlMoZnJvbU1vZGVsKSB7XG5cdGNvbnN0IGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHRjb25zdCBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyBVbnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gcXVldWUucG9wKCk7XG5cdFx0Y29uc3QgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yIChsZXQgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0Y29uc3QgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHRjb25zdCBub2RlID0gZ3JhcGhbYWRqYWNlbnRdO1xuXG5cdFx0XHRpZiAobm9kZS5kaXN0YW5jZSA9PT0gLTEpIHtcblx0XHRcdFx0bm9kZS5kaXN0YW5jZSA9IGdyYXBoW2N1cnJlbnRdLmRpc3RhbmNlICsgMTtcblx0XHRcdFx0bm9kZS5wYXJlbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KGFkamFjZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxpbmsoZnJvbSwgdG8pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0cmV0dXJuIHRvKGZyb20oYXJncykpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCkge1xuXHRjb25zdCBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdGxldCBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0bGV0IGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb25zdCBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHRjb25zdCBjb252ZXJzaW9uID0ge307XG5cblx0Y29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKGxldCBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Y29uc3QgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHRjb25zdCBub2RlID0gZ3JhcGhbdG9Nb2RlbF07XG5cblx0XHRpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdC8vIE5vIHBvc3NpYmxlIGNvbnZlcnNpb24sIG9yIHRoaXMgbm9kZSBpcyB0aGUgc291cmNlIG1vZGVsLlxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvblt0b01vZGVsXSA9IHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJzaW9uO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9vcGVuanNmLm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQsXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlLFxuICAgIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgaWYgKGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgICAgYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgYmFzZU1lcmdlLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgICA/IGN1c3RvbWl6ZXIoc2FmZUdldChvYmplY3QsIGtleSksIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgICAgfVxuICAgICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSwga2V5c0luKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VNZXJnZWAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgbWVyZ2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXJnZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1lcmdlIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IHNhZmVHZXQob2JqZWN0LCBrZXkpLFxuICAgICAgc3JjVmFsdWUgPSBzYWZlR2V0KHNvdXJjZSwga2V5KSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuXG4gIGlmIChzdGFja2VkKSB7XG4gICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICBpZiAoaXNDb21tb24pIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KHNyY1ZhbHVlKSxcbiAgICAgICAgaXNCdWZmID0gIWlzQXJyICYmIGlzQnVmZmVyKHNyY1ZhbHVlKSxcbiAgICAgICAgaXNUeXBlZCA9ICFpc0FyciAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheShzcmNWYWx1ZSk7XG5cbiAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgIGlmIChpc0FyciB8fCBpc0J1ZmYgfHwgaXNUeXBlZCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCdWZmKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVCdWZmZXIoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNUeXBlZCkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lVHlwZWRBcnJheShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCBpc0Z1bmN0aW9uKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGluaXRDbG9uZU9iamVjdChzcmNWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgbWVyZ2VGdW5jKG5ld1ZhbHVlLCBzcmNWYWx1ZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlZmF1bHRzRGVlcGAgdG8gY3VzdG9taXplIGl0cyBgXy5tZXJnZWAgdXNlIHRvIG1lcmdlIHNvdXJjZVxuICogb2JqZWN0cyBpbnRvIGRlc3RpbmF0aW9uIG9iamVjdHMgdGhhdCBhcmUgcGFzc2VkIHRocnUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gb2JqVmFsdWUgVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgc291cmNlIHZhbHVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHBhcmVudCBvYmplY3Qgb2YgYG9ialZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHBhcmVudCBvYmplY3Qgb2YgYHNyY1ZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gY3VzdG9tRGVmYXVsdHNNZXJnZShvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKSB7XG4gIGlmIChpc09iamVjdChvYmpWYWx1ZSkgJiYgaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBvYmpWYWx1ZSk7XG4gICAgYmFzZU1lcmdlKG9ialZhbHVlLCBzcmNWYWx1ZSwgdW5kZWZpbmVkLCBjdXN0b21EZWZhdWx0c01lcmdlLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqVmFsdWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCwgdW5sZXNzIGBrZXlgIGlzIFwiX19wcm90b19fXCIgb3IgXCJjb25zdHJ1Y3RvclwiLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2FmZUdldChvYmplY3QsIGtleSkge1xuICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcGxhaW4gb2JqZWN0IGZsYXR0ZW5pbmcgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nXG4gKiBrZXllZCBwcm9wZXJ0aWVzIG9mIGB2YWx1ZWAgdG8gb3duIHByb3BlcnRpZXMgb2YgdGhlIHBsYWluIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBwbGFpbiBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIG5ldyBGb28pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgXy50b1BsYWluT2JqZWN0KG5ldyBGb28pKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMyB9XG4gKi9cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3QodmFsdWUsIGtleXNJbih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZGVmYXVsdHNgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGFzc2lnbnNcbiAqIGRlZmF1bHQgcHJvcGVydGllcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMTAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmRlZmF1bHRzXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmYXVsdHNEZWVwKHsgJ2EnOiB7ICdiJzogMiB9IH0sIHsgJ2EnOiB7ICdiJzogMSwgJ2MnOiAzIH0gfSk7XG4gKiAvLyA9PiB7ICdhJzogeyAnYic6IDIsICdjJzogMyB9IH1cbiAqL1xudmFyIGRlZmF1bHRzRGVlcCA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFyZ3MpIHtcbiAgYXJncy5wdXNoKHVuZGVmaW5lZCwgY3VzdG9tRGVmYXVsdHNNZXJnZSk7XG4gIHJldHVybiBhcHBseShtZXJnZVdpdGgsIHVuZGVmaW5lZCwgYXJncyk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5tZXJnZWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgY3VzdG9taXplcmAgd2hpY2hcbiAqIGlzIGludm9rZWQgdG8gcHJvZHVjZSB0aGUgbWVyZ2VkIHZhbHVlcyBvZiB0aGUgZGVzdGluYXRpb24gYW5kIHNvdXJjZVxuICogcHJvcGVydGllcy4gSWYgYGN1c3RvbWl6ZXJgIHJldHVybnMgYHVuZGVmaW5lZGAsIG1lcmdpbmcgaXMgaGFuZGxlZCBieSB0aGVcbiAqIG1ldGhvZCBpbnN0ZWFkLiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGludm9rZWQgd2l0aCBzaXggYXJndW1lbnRzOlxuICogKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBzb3VyY2VzIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSkge1xuICogICBpZiAoXy5pc0FycmF5KG9ialZhbHVlKSkge1xuICogICAgIHJldHVybiBvYmpWYWx1ZS5jb25jYXQoc3JjVmFsdWUpO1xuICogICB9XG4gKiB9XG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbMV0sICdiJzogWzJdIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogWzNdLCAnYic6IFs0XSB9O1xuICpcbiAqIF8ubWVyZ2VXaXRoKG9iamVjdCwgb3RoZXIsIGN1c3RvbWl6ZXIpO1xuICogLy8gPT4geyAnYSc6IFsxLCAzXSwgJ2InOiBbMiwgNF0gfVxuICovXG52YXIgbWVyZ2VXaXRoID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyKSB7XG4gIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHNEZWVwO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdGRvdXQ6IGZhbHNlLFxuXHRzdGRlcnI6IGZhbHNlXG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHsgTG9nLCBMYWJlbCwgUmVjdXJzaXZlUGFydGlhbCwgQ2hhbGtTdHlsZXMgfSBmcm9tICcuJztcblxudHlwZSBMYWJlbE1hcCA9IE1hcDxzdHJpbmcsIExhYmVsPjtcblxuZXhwb3J0IHR5cGUgQ29uc29sZU1ldGhvZCA9IFwiZXJyb3JcInxcIndhcm5cInxcImluZm9cInxcImxvZ1wifFwiZGVidWdcInxcInRyYWNlXCJ8XCJncm91cFwifFwiZ3JvdXBDb2xsYXBzZWRcInxcImdyb3VwRW5kXCJ8XCJ0YWJsZVwifFwiZGlyXCJ8XCJkaXJ4bWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaGVkIHtcbiAgY2ZnOiBEZWZhdWx0cztcbiAgY2FjaGU6IExvZ1tdO1xuICBsYWJlbHM6IExhYmVsTWFwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRzIHtcbiAgbG9nX2xldmVsOiBudW1iZXI7XG4gIGxvZ19jYWNoZV9zaXplOiBudW1iZXI7XG4gIHVzZV9lbW9qaTogYm9vbGVhbjtcbiAgYmFzZV9zdHlsZTogc3RyaW5nO1xuICBsb2dfbGV2ZWxzOiBMb2dMZXZlbHM7XG4gIGN1c3RvbV9sZXZlbHM6IFBhcnRpYWw8TG9nTGV2ZWxzPjtcbiAgZmlsdGVyczogRmlsdGVycztcbn07XG5cbmV4cG9ydCB0eXBlIExvZ0xldmVscyA9IHtcbiAgW21ldGhvZDogc3RyaW5nXTogTG9nTGV2ZWxEZWZpbml0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ0xldmVsRGVmaW5pdGlvbiB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGxldmVsTmFtZT86IHN0cmluZztcbiAgbWV0aG9kOiBDb25zb2xlTWV0aG9kO1xuICBzdHlsZTogc3RyaW5nO1xuICB0ZXJtaW5hbDogQ2hhbGtTdHlsZXNbXTtcbiAgZW1vamk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJzIHtcbiAgaGlkZUFsbDogYm9vbGVhbjtcbiAgbmFtZXNwYWNlOiBGaWx0ZXJPcHRpb25zO1xuICBsYWJlbDogRmlsdGVyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJPcHRpb25zIHtcbiAgaGlkZUFsbDogYm9vbGVhbjtcbiAgZXhjbHVkZTogc3RyaW5nW107XG4gIGluY2x1ZGU6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBSZWN1cnNpdmVQYXJ0aWFsPERlZmF1bHRzPiB7fTtcblxuZXhwb3J0IHR5cGUgTGV2ZWxzID0gbnVtYmVyW10gfCBcIipcIjsiLCJpbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgeyBMb2dMZXZlbERlZmluaXRpb24sIENvbmZpZ3VyYXRpb24sIENvbnNvbGVNZXRob2QsIERlZmF1bHRzIH0gZnJvbSBcIi5cIjtcblxuLyoqXG4gKiBGaW5nZXJwcmludCBvZiB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB5b3UgZXhlY3V0ZVxuICogYSBsb2cgbWV0aG9kIHN1Y2ggYXMgaW5mbygpLlxuICovXG5leHBvcnQgdHlwZSBMb2dGdW5jdGlvbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gVGVybWluYXRlZExvZztcblxuLyoqXG4gKiBGaW5nZXJwcmludCBvZiB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB5b3UgZXhlY3V0ZVxuICogYSBjdXN0b20gbG9nIG1ldGhvZCBkZWZpbmVkIGluIHRoZSBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgdHlwZSBDdXN0b21Mb2dGdW5jdGlvbiA9IChsZXZlbE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55W10pID0+IFRlcm1pbmF0ZWRMb2c7XG5cbi8qKlxuICogVGhlIGtleXMgb2YgdGhlIGRlZmF1bHQgdGVybWluYXRpbmcgbG9nIG1ldGhvZHMgaW5jbHVkZWQgd2l0aCBBZHplLlxuICovXG5leHBvcnQgdHlwZSBUZXJtaW5hdGluZ01ldGhvZEtleXMgPSBcImF0dGVudGlvblwifFwiZXJyb3JcInxcIndhcm5cInxcImZhaWxcInxcInN1Y2Nlc3NcInxcImluZm9cInxcImxvZ1wifFwiZGVidWdcInxcInZlcmJvc2VcIjtcblxuLyoqXG4gKiBUaGUgY29uZmlndXJhdGlvbiBpbnRlcmZhY2UgZm9yIHRoZSBkZWZhdWx0IEFkemUgdGVybWluYXRpbmcgbG9nIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCB0eXBlIFRlcm1pbmF0aW5nTWV0aG9kcyA9IHtcbiAgW21ldGhvZCBpbiBUZXJtaW5hdGluZ01ldGhvZEtleXNdOiBMb2dGdW5jdGlvbjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nVGltZXN0YW1wIHtcbiAgdW5peE1pbGxpOiBudW1iZXI7XG4gIHV0Yzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJvb2xlYW4gZmxhZ3MgdGhhdCByZXByZXNlbnQgdmFyaW91cyBzdGF0ZXMgb2YgaG93IHRoZSBsb2dcbiAqIHNob3VsZCBiZSBwcmludGVkLlxuICovXG5pbnRlcmZhY2UgTG9nRmxhZ3Mge1xuICB0cmFjZWFibGU6IGJvb2xlYW47XG4gIGFzc2VydGlvbj86IGJvb2xlYW47XG4gIGV4cHJlc3Npb24/OiBib29sZWFuO1xuICBpc1NpbGVudDogYm9vbGVhbjtcbiAgZHVtcENvbnRleHQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogVmFsdWVzIG9mIHRoZSBsb2cgaW5zdGFuY2UgdGhhdCBkZXRlcm1pbmUgaG93IGl0IHNob3VsZFxuICogYmUgcHJpbnRlZC5cbiAqL1xuaW50ZXJmYWNlIExvZ1ZhbHVlcyB7XG4gIGNmZzogRGVmYXVsdHM7XG4gIHRpbWVzdGFtcD86IExvZ1RpbWVzdGFtcDtcbiAgcmVuZGVyPzogTG9nUmVuZGVyO1xuICBsZXZlbD86IG51bWJlcjtcbiAgYXJncz86IGFueVtdO1xuICBuYW1lc3BhY2VWYWw/OiBzdHJpbmd8c3RyaW5nW107XG4gIGxhYmVsVmFsPzogTGFiZWw7XG4gIHRpbWVOb3dWYWw/OiBzdHJpbmc7XG4gIG1ldGE/OiBhbnk7XG4gIG1vZGlmaWVyUXVldWU6IEZ1bmN0aW9uW107XG4gIHByaW50ZXIobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTogTG9nUmVuZGVyO1xufVxuXG4vKipcbiAqIEFsbCBvZiB0aGUgdXNlciBhY2Nlc3NpYmxlIG1ldGhvZHMgdGhhdCBjYW4gYmUgY2hhaW5lZCB0b1xuICogY3JlYXRlIGEgY3VzdG9taXplZCBsb2cuXG4gKi9cbmludGVyZmFjZSBMb2dNZXRob2RzIHtcbiAgY3VzdG9tOiBDdXN0b21Mb2dGdW5jdGlvbjtcbiAgc2VhbCh0aGlzOiBMb2cpOiAoKSA9PiBMb2c7XG4gIGNvbnRleHQ8VD4oKTogVDtcbiAgdGhyZWFkKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcbiAgY2xvc2UoKTogdm9pZDtcbiAgY2xlYXIoKTogdm9pZDtcbiAgY2xyKCk6IHZvaWQ7XG4gIFxuICAvLyBNb2RpZmllciBGdW5jdGlvbnNcbiAgY291bnQoKTogTG9nO1xuICBjb3VudFJlc2V0KCk6IExvZztcbiAgZGlyKCk6IExvZztcbiAgZGlyeG1sKCk6IExvZztcbiAgZHVtcCgpOiBMb2c7XG4gIHRhYmxlKCk6IExvZztcbiAgYXNzZXJ0KGFzc2VydGlvbjogYm9vbGVhbik6IExvZztcbiAgdGVzdChleHByZXNzaW9uOiBib29sZWFuKTogTG9nO1xuICBncm91cCgpOiBMb2c7XG4gIGdyb3VwQ29sbGFwc2VkKCk6IExvZztcbiAgZ3JvdXBFbmQoKTogTG9nO1xuICBsYWJlbChuYW1lOiBzdHJpbmcpOiBMb2c7XG4gIG5zKG5zOiBzdHJpbmcpOiBMb2c7XG4gIG5hbWVzcGFjZShuczogc3RyaW5nfHN0cmluZ1tdKTogTG9nO1xuICBzaWxlbnQoKTogdm9pZDtcbiAgdHJhY2UoKTogTG9nO1xuICB0aW1lKCk6IExvZztcbiAgdGltZU5vdygpOiBMb2c7XG4gIHRpbWVFbmQoKTogTG9nO1xufVxuXG4vKipcbiAqIFRoZSBmaW5hbCBBZHplIGxvZyBvYmplY3QgcHJvdG90eXBlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2cgZXh0ZW5kcyBMb2dGbGFncywgTG9nVmFsdWVzLCBMb2dNZXRob2RzLCBUZXJtaW5hdGluZ01ldGhvZHMge307XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluYWxMb2cgZXh0ZW5kcyBMb2cge1xuICBsZXZlbDogbnVtYmVyO1xuICBhcmdzOiBhbnlbXTtcbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHZhbHVlIGZvciBhIExvZy5cbiAqL1xudHlwZSBBcmd1bWVudHMgPSBhbnlbXTtcbmV4cG9ydCB0eXBlIExvZ1JlbmRlciA9IFtDb25zb2xlTWV0aG9kLCBBcmd1bWVudHNdO1xuXG4vKipcbiAqIFRoZSBmaW5hbCB2YWx1ZSBvZiBhIGxvZyBhZnRlciBpdCBoYXMgYmVlbiB0ZXJtaW5hdGVkLiBUaGlzIGlzIHVzZWZ1bCBmb3IgXG4gKiBnbGVhbmluZyB0aGUgZmluYWwgcmVuZGVyIGluZm9ybWF0aW9uIGFuZCBnZXR0aW5nIHRoZSBMb2cgaW5zdGFuY2UgZm9yIFxuICogdW5pdCB0ZXN0aW5nIHB1cnBvc2VzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlcm1pbmF0ZWRMb2cge1xuICBsb2c6IExvZ3xGaW5hbExvZztcbiAgcmVuZGVyOiBMb2dSZW5kZXJ8bnVsbDtcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9BZHplJztcbmV4cG9ydCAqIGZyb20gJy4vTG9nJztcbmV4cG9ydCAqIGZyb20gJy4vQnVuZGxlJztcbmV4cG9ydCAqIGZyb20gJy4vU2hlZCc7XG5leHBvcnQgKiBmcm9tICcuL0NvbmZpZ3VyYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9MYWJlbCc7XG5leHBvcnQgKiBmcm9tICcuL1N0eWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL0hyVGltZSc7XG5leHBvcnQgKiBmcm9tICcuL1V0aWxpdHknOyIsImltcG9ydCB7IGlzQ2hyb21lLCBpc0ZpcmVmb3gsIGlzU2FmYXJpIH0gZnJvbSAnfi9nbG9iYWwnO1xuaW1wb3J0IHsgRGVmYXVsdHMgfSBmcm9tIFwifi9fY29udHJhY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0czogRGVmYXVsdHMgPSB7XG4gIGxvZ19sZXZlbDogOCxcbiAgbG9nX2NhY2hlX3NpemU6IDMwMCxcbiAgdXNlX2Vtb2ppOiBmYWxzZSxcbiAgYmFzZV9zdHlsZTogJ2ZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7IGJvcmRlci13aWR0aDogMXB4OyBib3JkZXItc3R5bGU6IHNvbGlkOycsXG4gIGN1c3RvbV9sZXZlbHM6IHt9LFxuICBsb2dfbGV2ZWxzOiB7XG4gICAgdmVyYm9zZToge1xuICAgICAgbGV2ZWw6IDgsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDI2cHg7IGJvcmRlci1jb2xvcjogMXB4IHNvbGlkICNkOWRjZTA7IGNvbG9yOiAjOTk5OTk5OyBib3JkZXItY29sb3I6ICNjYmM5Yzk7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ2l0YWxpYycsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnZGVidWcnLFxuICAgICAgZW1vamk6ICfwn5KkJ1xuICAgIH0sXG4gICAgZGVidWc6IHtcbiAgICAgIGxldmVsOiA3LFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAzOHB4OyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDlkY2UwOyBjb2xvcjogIzQ2NTQ2NDsgYm9yZGVyLWNvbG9yOiAjOTk5OTk5OycsXG4gICAgICB0ZXJtaW5hbDogWydiZ0JsYWNrJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdkZWJ1ZycsXG4gICAgICBlbW9qaTogJ/CfkJ4nXG4gICAgfSxcbiAgICBsb2c6IHtcbiAgICAgIGxldmVsOiA2LFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiA1MHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNkOWRjZTApOyBjb2xvcjogIzMzMzQzNTsgYm9yZGVyLWNvbG9yOiAjYmZjMWM1O2AsXG4gICAgICB0ZXJtaW5hbDogWydiZ0dyYXknLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2xvZycsXG4gICAgICBlbW9qaTogJ/Cfk5MnXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBsZXZlbDogNSxcbiAgICAgIHN0eWxlOiAncGFkZGluZy1yaWdodDogMjZweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjY2VlZGM5KTsgY29sb3I6ICM0ZTU5NGQ7IGJvcmRlci1jb2xvcjogI2I3ZDFiMzsnLFxuICAgICAgdGVybWluYWw6IFsnYmdHcmVlbicsICdncmF5J10sXG4gICAgICBtZXRob2Q6ICdpbmZvJyxcbiAgICAgIGVtb2ppOiAn8J+OiSdcbiAgICB9LFxuICAgIGZhaWw6IHtcbiAgICAgIGxldmVsOiA0LFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiAkeyBpc0Nocm9tZSA/ICc0MicgOiAnNDQnIH1weDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZkMWQxKTsgY29sb3I6ICNhNDAwMGY7IGJvcmRlci1jb2xvcjogI2UzYmJiYjtgLFxuICAgICAgdGVybWluYWw6IFsnYmdSZWQnLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfinYwnXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICBsZXZlbDogMyxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHsgaXNTYWZhcmkgPyAnNDknIDogJzQ0JyB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2IyZDdmZik7IGNvbG9yOiAjNDY1NDY0OyBib3JkZXItY29sb3I6ICM5NmI1ZDc7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmx1ZScsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/Cfk6wnXG4gICAgfSxcbiAgICB3YXJuOiB7XG4gICAgICBsZXZlbDogMixcbiAgICAgIHN0eWxlOiBgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZmMGE4KTsgY29sb3I6ICM3MTUxMDA7IGJvcmRlci1jb2xvcjogI2UzZDY5NjsgcGFkZGluZy1yaWdodDogJHsgaXNDaHJvbWUgPyAnMzQnIDogJzQ0JyB9cHg7IGAsXG4gICAgICB0ZXJtaW5hbDogWydiZ1llbGxvdycsICdncmF5J10sXG4gICAgICBtZXRob2Q6ICd3YXJuJyxcbiAgICAgIGVtb2ppOiAn8J+UlCdcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBsZXZlbDogMSxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHsgaXNDaHJvbWUgPyAnMjknIDogJzI3JyB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2ZmZDFkMSk7IGNvbG9yOiAjYTQwMDBmOyBib3JkZXItY29sb3I6ICNlM2JiYmI7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnUmVkJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdlcnJvcicsXG4gICAgICBlbW9qaTogJ/CflKUnXG4gICAgfSxcbiAgICBhdHRlbnRpb246IHtcbiAgICAgIGxldmVsOiAwLFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAxNXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNlMmJhZmYpOyBjb2xvcjogIzQ4M2M1MTsgYm9yZGVyLWNvbG9yOiAjYzE5ZmQ5OycsXG4gICAgICB0ZXJtaW5hbDogWyd3aGl0ZScsJ2JvbGQnLCdiZ01hZ2VudGEnXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfwn4yIJyxcbiAgICB9LFxuICB9LFxuICBmaWx0ZXJzOiB7XG4gICAgaGlkZUFsbDogZmFsc2UsXG4gICAgbmFtZXNwYWNlOiB7XG4gICAgICBoaWRlQWxsOiBmYWxzZSxcbiAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgaW5jbHVkZTogW10sXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgaGlkZUFsbDogZmFsc2UsXG4gICAgICBleGNsdWRlOiBbXSxcbiAgICAgIGluY2x1ZGU6IFtdLFxuICAgIH1cbiAgfSxcbn07XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vZGVmYXVsdHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGVkX2RlZmF1bHRzJztcblxuIiwiaW1wb3J0IHsgU2hlZENvbmZpZyB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJ34vX2RlZmF1bHRzJztcblxuZXhwb3J0IGNvbnN0IHNoZWRfZGVmYXVsdHM6IFNoZWRDb25maWcgPSB7XG4gIGNhY2hlX2xpbWl0OiAzMDAsXG4gIGdsb2JhbF9jZmc6IG51bGwsXG4gIGZpbHRlcnM6IHt9LFxufTsiLCJjb25zdCBkZWZhdWx0c0RlZXAgPSByZXF1aXJlKCdsb2Rhc2guZGVmYXVsdHNkZWVwJyk7XG5cbmltcG9ydCB7IExvZywgQ29uZmlndXJhdGlvbiwgRGVmYXVsdHMgfSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHtcbiAgbG9nTWV0aG9kLCBjdXN0b21NZXRob2QsIHNlYWwsIHRocmVhZCxcbiAgY2xvc2UsIGNsZWFyLCBjbHIsXG59IGZyb20gJ34vdGVybWluYXRvcnMnO1xuaW1wb3J0IHtcbiAgY291bnQsIGNvdW50UmVzZXQsIGRpciwgZGlyeG1sLCBkdW1wLCB0YWJsZSwgYXNzZXJ0LFxuICB0ZXN0LCAgZ3JvdXAsIGdyb3VwQ29sbGFwc2VkLCBncm91cEVuZCwgbGFiZWwsXG4gIG5hbWVzcGFjZSwgc2lsZW50LCBucywgdHJhY2UsIHRpbWUsIHRpbWVOb3csIHRpbWVFbmQsXG59IGZyb20gJ34vbW9kaWZpZXJzJztcbmltcG9ydCB7IHByaW50TG9nIH0gZnJvbSAnfi9wcmludGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJ34vX2RlZmF1bHRzJztcblxuLypcbiAqIEZ1dHVyZSBwbGFubmVkIGZlYXR1cmVzOlxuICogXG4gKiAtIFNlbGVjdCBsb2cgbGV2ZWxzIG9wdGlvbmFsbHkgYnkgbmFtZSBpbiBsaXN0ZW5lciBjcmVhdGlvbi5cbiAqIC0gQ3JlYXRlIGBzaWxlbnQoKWAgdGVybWluYXRvciB3aGljaCBkb2Vzbid0IHByaW50IGFueXRoaW5nIHRvIHRoZSBjb25zb2xlIGJ1dCBzdGlsbCBmaXJlcyBsaXN0ZW5lcnMuXG4gKiAtIEFuYWx5dGljcyBhbmQgUmVwb3J0aW5nIHN1cHBvcnQuXG4gKiAtIFJlbW90ZSBzZXJ2ZXIgZm9yIHJlY2VpdmluZyBhbmQgYW5hbHl6aW5nIGxvZ3MuXG4gKiAtIEF0dGFjaCBtZXRhIGRhdGEgdG8gbG9ncyAoZm9yIGxpc3RlbmVycyB0byB0YWtlIGFkdmFudGFnZSBvZikuXG4gKiAtIEFkZCBkZWZhdWx0IG1ldGEgZGF0YSB0byB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgbG9nLlxuICogLSBQZXJzaXN0IGxvZ3MgaW4gbG9jYWxTdG9yYWdlIChjb25maWd1cmFibGUsIG9mZiBieSBkZWZhdWx0KS5cbiAqIC0gQWRkIGVhc3kgZnVuY3Rpb25zIGZvciB0cmFuc3BvcnRpbmcgbG9nZ2luZyBkYXRhIHRvIHZhcmlvdXMgc291cmNlcy5cbiAqICAgICAtIFdyaXRlIHRvIGEgZmlsZS5cbiAqICAgICAtIFdyaXRlIHRvIGxvY2FsIHN0b3JhZ2UuXG4gKiAgICAgLSBQdXNoIHRvIGFuIEFQSSBlbmRwb2ludC5cbiAqL1xuXG4vKipcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgY3JlYXRpbmcgQWR6ZSBsb2dzLiBUaGlzIGZhY3RvcnkgZnVuY3Rpb24gY2FuIGJlIHVzZWQgZGlyZWN0bHkgb3IgY29uZmlndXJhdGlvblxuICogY2FuIGJlIHByb3ZpZGVkIGFuZCB0aGUgcmVzdWx0IGNhbiBiZSBhc3NpZ25lZCB0byBhIG5ldyB2YXJpYWJsZS4gVGhpcyBhbGxvd3MgZm9yIG11bHRpcGxlXG4gKiBsb2dnaW5nIGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25maWd1cmF0aW9ucy5cbiAqIFxuICogLS0tIERlZmF1bHQgbGV2ZWxzIC0tLVxuICogXG4gKiAwLiBhdHRlbnRpb25cbiAqIDEuIGVycm9yXG4gKiAyLiB3YXJuXG4gKiAzLiBpbmZvXG4gKiA0LiBmYWlsXG4gKiA1LiBzdWNjZXNzXG4gKiA2LiBsb2dcbiAqIDcuIGRlYnVnXG4gKiA4LiB2ZXJib3NlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWR6ZSh1c2VyX2NmZzogQ29uZmlndXJhdGlvbiA9IHt9KTpMb2cge1xuICBjb25zdCBjZmcgPSBkZWZhdWx0c0RlZXAodXNlcl9jZmcsIGRlZmF1bHRzKSBhcyBEZWZhdWx0cztcblxuICByZXR1cm4ge1xuICAgIGNmZyxcbiAgICB0cmFjZWFibGU6IGZhbHNlLFxuICAgIGR1bXBDb250ZXh0OiBmYWxzZSxcbiAgICBpc1NpbGVudDogZmFsc2UsXG4gICAgbW9kaWZpZXJRdWV1ZTogW10sXG4gICAgcHJpbnRlcjogcHJpbnRMb2csXG5cbiAgICBhdHRlbnRpb246ICBsb2dNZXRob2QoJ2F0dGVudGlvbicpLFxuICAgIGVycm9yOiAgICAgIGxvZ01ldGhvZCgnZXJyb3InKSxcbiAgICB3YXJuOiAgICAgICBsb2dNZXRob2QoJ3dhcm4nKSxcbiAgICBpbmZvOiAgICAgICBsb2dNZXRob2QoJ2luZm8nKSxcbiAgICBmYWlsOiAgICAgICBsb2dNZXRob2QoJ2ZhaWwnKSxcbiAgICBzdWNjZXNzOiAgICBsb2dNZXRob2QoJ3N1Y2Nlc3MnKSxcbiAgICBsb2c6ICAgICAgICBsb2dNZXRob2QoJ2xvZycpLFxuICAgIGRlYnVnOiAgICAgIGxvZ01ldGhvZCgnZGVidWcnKSxcbiAgICB2ZXJib3NlOiAgICBsb2dNZXRob2QoJ3ZlcmJvc2UnKSxcbiAgICBjdXN0b206ICAgICBjdXN0b21NZXRob2QoKSxcblxuICAgIHNlYWwsIGNvdW50LCBjb3VudFJlc2V0LCB0aHJlYWQsIGR1bXAsIGNsb3NlLCBjbGVhciwgY2xyLFxuICAgIGRpciwgZGlyeG1sLCB0YWJsZSwgYXNzZXJ0LCB0ZXN0LCBncm91cCwgZ3JvdXBDb2xsYXBzZWQsXG4gICAgZ3JvdXBFbmQsIGxhYmVsLCBuYW1lc3BhY2UsIG5zLCBzaWxlbnQsIHRyYWNlLFxuICAgIHRpbWUsIHRpbWVOb3csIHRpbWVFbmQsXG5cbiAgICAvLyBBIHNob3J0Y3V0IGFjY2Vzc29yIGZvciBncmFiYmluZyB0aGUgdGhyZWFkIGNvbnRleHQgZnJvbSB0aGUgbGFiZWwgb2JqZWN0LlxuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxWYWw/LmNvbnRleHQ7XG4gICAgfVxuICB9O1xufSIsImltcG9ydCB7IEJ1bmRsZSwgQnVuZGxlciwgQnVuZGxlZExvZywgTG9nIH0gZnJvbSAnfi9fY29udHJhY3RzJztcblxuLyoqXG4gKiBCdW5kbGVzIGFsbCBsb2dzIHRvZ2V0aGVyIGJ5IHdyYXBwaW5nIGFsbCBzdWJzZXF1ZW50IGxvZ3MgaW4gYSBCdW5kbGUgY2FsbGJhY2tcbiAqIHRoYXQgY3VycmllcyB0aGVtIGludG8gYW4gYXJyYXkuIFRoaXMgYnVuZGxlIGFycmF5IGNhbiBiZSB1c2VkIHRvIHJlY2FsbCBhbmRcbiAqIGZpbHRlciBsb2dzLlxuICogXG4gKiAqKkV4YW1wbGU6KipcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IGJ1bmRsZWQgPSBidW5kbGUoYWR6ZSgpKTtcbiAqIGJ1bmRsZWQubG9nKFwiVGhpcyBpcyBhIGxvZy5cIik7XG4gKiBidW5kbGVkLmxvZyhcIlRoaXMgaXMgYW5vdGhlciBsb2cuXCIpO1xuICogYnVuZGxlLmFsbCgpOyAvLyAtPiByZXByaW50cyBhbGwgXCJidW5kbGVkXCIgbG9ncy5cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVuZGxlKGxvZzogTG9nKTpCdW5kbGVyIHtcbiAgY29uc3QgYnVuZGxlX2FyciA9IFtdIGFzIEJ1bmRsZTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgYnVuZGxlZF9sb2c6IEJ1bmRsZWRMb2cgPSB7XG4gICAgICAuLi5sb2csXG4gICAgICBnZXQgYnVuZGxlKCkge1xuICAgICAgICByZXR1cm4gYnVuZGxlX2FycjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGJ1bmRsZV9hcnIucHVzaChidW5kbGVkX2xvZyk7XG4gICAgcmV0dXJuIGJ1bmRsZWRfbG9nO1xuICB9O1xufTsiLCJpbXBvcnQgeyBMb2csIERlZmF1bHRzLCBMb2dMZXZlbERlZmluaXRpb24gfSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHsgZW52LCBpc0Jyb3dzZXIgfSBmcm9tICd+L2dsb2JhbCc7XG5pbXBvcnQgeyBnZXRTZWFyY2hQYXJhbXMgfSBmcm9tICd+L3V0aWwnO1xuXG4vKipcbiAqIERldGVybWluZSB0aGUgZmF0ZSBvZiB3aGV0aGVyIHRoaXMgbG9nIHdpbGwgdGVybWluYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dlZChjZmc6IERlZmF1bHRzLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbik6Ym9vbGVhbiB7XG4gIHJldHVybiBsZXZlbEFjdGl2ZShkZWYsIGNmZy5sb2dfbGV2ZWwpICYmIG5vdFRlc3RFbnYoKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgbG9nIGxldmVsIGlzIGhpZ2ggZW5vdWdoIGZvciB0aGUgbG9nIHRvIHRlcm1pbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxldmVsQWN0aXZlKGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBsZXZlbDogbnVtYmVyKTpib29sZWFuIHtcbiAgcmV0dXJuIGRlZi5sZXZlbCA8PSBsZXZlbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbnkgYXNzZXJ0aW9ucyBvciBleHByZXNzaW9ucyBwYXNzIGZvciB0aGlzIGxvZyB0byB0ZXJtaW5hdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmFsUGFzc2VzKGxvZzogTG9nKTpib29sZWFuIHtcbiAgaWYgKGxvZy5hc3NlcnRpb24gIT09IHVuZGVmaW5lZCAmJiBsb2cuZXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IGhhdmUgZGVjbGFyZWQgYm90aCBhbiBhc3NlcnRpb24gYW5kIHRlc3Qgb24gdGhlIHNhbWUgbG9nLiBQbGVhc2Ugb25seSBkZWNsYXJlIG9uZSBvciBuZWZhcmlvdXMgcmVzdWx0cyBtYXkgb2NjdXIuXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChsb2cuYXNzZXJ0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbG9nLmFzc2VydGlvbiA9PT0gZmFsc2U7XG4gIH1cbiAgaWYgKGxvZy5leHByZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbG9nLmV4cHJlc3Npb24gPT09IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogVmVyaWZ5IHRoYXQgdGhpcyBsb2cgaXMgbm90IGluIGEgdGVzdCBlbnZpcm9ubWVudCBieSBjaGVja2luZyB0aGUgZW52aXJvbm1lbnQgY29udGV4dFxuICogb3IgVVJMIHBhcmFtcyBpZiB3aXRoaW4gYSBicm93c2VyIGNvbnRleHQuIFByZXZlbnQgdGVybWluYXRpb24gb2YgdGhlIGxvZyBpZiBpdCBpcyAndGVzdCcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RUZXN0RW52KCk6Ym9vbGVhbiB7XG4gIC8vIEFsbG93IGZvciBVUkwgUGFyYW0gb2YgQURaRV9FTlYgd2hlbiBpbiB0aGUgYnJvd3Nlci5cbiAgcmV0dXJuIChlbnY/LkFEWkVfRU5WID8/IGdldFNlYXJjaFBhcmFtcygpLmdldCgnQURaRV9FTlYnKSkgIT09ICd0ZXN0Jztcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbmRpdGlvbnMnOyIsImltcG9ydCB7IExvZywgTG9nUmVuZGVyIH0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnfi91dGlsJztcblxuLy8gQ09OVkVSVCBBUEkgVE8gRVhQT1JUIEZJTFRFUiBGVU5DU1xuXG4vKipcbiAqIFJlLXJlbmRlciB0aGUgYnVuZGxlIG9mIGxvZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJBbGwoYnVuZGxlOiBMb2dbXSA9IFtdKTp2b2lkIHtcbiAgbG9vcEJ1bmRsZShidW5kbGUsIChsb2cpID0+IHRydWUpO1xufVxuXG4vKipcbiAqIEZpbHRlciB0aGUgYnVuZGxlIG9mIGxvZ3MgYnkgdGhlIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlck5hbWVzcGFjZShidW5kbGU6IExvZ1tdID0gW10sIG5zOiBzdHJpbmd8c3RyaW5nW10pOnZvaWQge1xuICBsb29wQnVuZGxlKGJ1bmRsZSwgKGxvZykgPT4ge1xuICAgIGNvbnN0IGxvZ19ucyA9IGxvZy5uYW1lc3BhY2VWYWw7XG4gICAgaWYgKGxvZ19ucykge1xuICAgICAgaWYgKGlzU3RyaW5nKGxvZ19ucykpIHtcbiAgICAgICAgcmV0dXJuIGlzU3RyaW5nKG5zKSA/IGxvZ19ucyA9PT0gbnMgOiBucy5pbmNsdWRlcyhsb2dfbnMpID8/IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTG9vcCBvdmVyIGVhY2ggbG9nIG5zIHZhbHVlIGFuZCBzZWUgaWYgYW55IG1hdGNoIGFueSBucyB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIGxvZ19ucy5tYXAodmFsID0+IHtcbiAgICAgICAgICByZXR1cm4gaXNTdHJpbmcobnMpID8gdmFsID09PSBucyA6IG5zLmluY2x1ZGVzKHZhbCk7XG4gICAgICAgIH0pLmluY2x1ZGVzKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG4vKipcbiAqIEZpbHRlciBhbmQgcmVuZGVyIHRoZSBidW5kbGUgb2YgbG9ncyBieSB0aGUgbGFiZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJMYWJlbChidW5kbGU6IExvZ1tdID0gW10sIGxibDogc3RyaW5nKTp2b2lkIHtcbiAgbG9vcEJ1bmRsZShidW5kbGUsIChsb2cpID0+IGxvZy5sYWJlbFZhbD8ubmFtZSA9PT0gbGJsKTtcbn1cblxuLyoqXG4gKiBGaWx0ZXIgdGhlIGJ1bmRsZSBvZiBsb2dzIGJ5IHRoZWlyIGxvZyBsZXZlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckxldmVsUmFuZ2UoYnVuZGxlOiBMb2dbXSA9IFtdLCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyKTp2b2lkIHtcbiAgbG9vcEJ1bmRsZShidW5kbGUsIChsb2csIHJuZHIpID0+IHtcbiAgICBjb25zdCBsZXZlbCA9IChsb2cubGV2ZWwgPz8gSW5maW5pdHkpO1xuICAgIHJldHVybiBsZXZlbCA+PSBsb3cgJiYgbGV2ZWwgPD0gaGlnaDtcbiAgfSk7XG59XG5cbi8qKlxuICogTG9vcHMgb3ZlciBhIGJ1bmRsZSBvZiBsb2dzIGFuZCBleGVjdXRlcyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggbG9nIHRoYXQgXG4gKiBoYXMgYSByZW5kZXIgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxvb3BCdW5kbGUoYnVuZGxlOiBMb2dbXSwgY2I6IChsb2c6IExvZywgcm5kcjogTG9nUmVuZGVyKSA9PiBib29sZWFuKTp2b2lkIHtcbiAgYnVuZGxlLmZvckVhY2gobG9nID0+IHtcbiAgICBpZiAobG9nLnJlbmRlcikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2IobG9nLCBsb2cucmVuZGVyKTtcbiAgICAgIGlmIChyZXN1bHQpIHJlbmRlcihsb2cucmVuZGVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlbmRlciBhIGxvZyBiYXNlZCBvbiBhIHJlbmRlciBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoWyBtZXRob2QsIGFyZ3MgXTogTG9nUmVuZGVyKTp2b2lkIHtcbiAgY29uc29sZVttZXRob2RdKC4uLmFyZ3MpO1xufSIsImV4cG9ydCAqIGZyb20gJy4vZmlsdGVycyc7IiwiaW1wb3J0IHsgU2hlZCB9IGZyb20gJ34vc2hlZCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgJHNoZWQ/OiBTaGVkO1xuICAgIEFEWkVfRU5WPzogXCJ0ZXN0XCJ8XCJkZXZcIjtcbiAgfVxuICBuYW1lc3BhY2UgTm9kZUpTIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdsb2JhbCB7XG4gICAgICAkc2hlZD86IFNoZWQ7XG4gICAgICBBRFpFX0VOVj86IFwidGVzdFwifFwiZGV2XCI7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbnY6IFdpbmRvd3xOb2RlSlMuR2xvYmFsID0gZ2xvYmFsID8gZ2xvYmFsIDogd2luZG93O1xuZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG4vKipcbiAqIFR5cGVHdWFyZCB0byBkZXRlcm1pbmUgaWYgdGhlIGVudiB2YWx1ZSBpcyB0aGUgV2luZG93IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudklzV2luZG93ID0gKGVudjogV2luZG93fE5vZGVKUy5HbG9iYWwpOiBlbnYgaXMgV2luZG93ID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZDtcbn07XG5cbmxldCBpc0Nocm9tZVZhciA9IGZhbHNlO1xubGV0IGlzRmlyZWZveFZhciA9IGZhbHNlO1xubGV0IGlzU2FmYXJpVmFyID0gZmFsc2U7XG5cbmlmIChlbnZJc1dpbmRvdyhlbnYpKSB7XG4gIGlzQ2hyb21lVmFyID0gZW52Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKSA+IC0xO1xuICBpc0ZpcmVmb3hWYXIgPSBlbnYubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSA+IC0xO1xuICBpc1NhZmFyaVZhciA9IGVudi5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgPiAtMSAmJiAhaXNDaHJvbWVWYXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc0Nocm9tZSA9IGlzQ2hyb21lVmFyO1xuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IGlzRmlyZWZveFZhcjtcbmV4cG9ydCBjb25zdCBpc1NhZmFyaSA9IGlzU2FmYXJpVmFyOyIsImltcG9ydCB7IExvZywgTG9nRnVuY3Rpb24gfSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHsgYWR6ZSB9IGZyb20gJ34vYWR6ZSc7XG5pbXBvcnQgeyBidW5kbGUgfSBmcm9tICd+L2J1bmRsZSc7XG5pbXBvcnQgeyBzaGVkRXhpc3RzLCBjcmVhdGVTaGVkLCByZW1vdmVTaGVkIH0gZnJvbSAnfi9zaGVkJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnfi9fZGVmYXVsdHMnO1xuaW1wb3J0IHsgZmlsdGVyQWxsLCBmaWx0ZXJMYWJlbCwgZmlsdGVyTGV2ZWxSYW5nZSwgZmlsdGVyTmFtZXNwYWNlLCByZW5kZXIgfSBmcm9tICd+L2ZpbHRlcnMnO1xuXG5leHBvcnQge1xuICBhZHplLFxuICBzaGVkRXhpc3RzLFxuICBjcmVhdGVTaGVkLFxuICByZW1vdmVTaGVkLFxuICBkZWZhdWx0cyxcbiAgTG9nLFxuICBMb2dGdW5jdGlvbixcbiAgYnVuZGxlLFxuICBmaWx0ZXJBbGwsXG4gIGZpbHRlckxhYmVsLFxuICBmaWx0ZXJMZXZlbFJhbmdlLFxuICBmaWx0ZXJOYW1lc3BhY2UsXG4gIHJlbmRlcixcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9sYWJlbCc7IiwiaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnfi9nbG9iYWwnO1xuaW1wb3J0IHsgc2hlZEV4aXN0cyB9IGZyb20gJ34vc2hlZCc7XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZ2V0IGEgbGFiZWwgYnkgdGhlIGdpdmVuIG5hbWUgZnJvbSB0aGUgc2hlZCBpZiBpdCBleGlzdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbChuYW1lOiBzdHJpbmcpOiBMYWJlbCB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHNoZWQgPSBlbnYuJHNoZWQ7XG4gIGlmIChzaGVkRXhpc3RzKHNoZWQpKSB7XG4gICAgcmV0dXJuIHNoZWQuZ2V0TGFiZWwobmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBhZGQgYSBsYWJlbCB0byB0aGUgZ2xvYmFsIHN0b3JlIGlmIGl0IGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExhYmVsKGxhYmVsOiBMYWJlbCk6IExhYmVsIHtcbiAgY29uc3Qgc2hlZCA9IGVudi4kc2hlZDtcbiAgaWYgKHNoZWRFeGlzdHMoc2hlZCkpIHtcbiAgICBzaGVkLmFkZExhYmVsKGxhYmVsKTtcbiAgfVxuICByZXR1cm4gbGFiZWw7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8qKlxuICogSW5zdHJ1Y3RzIHRoZSBsb2cgdGVybWluYXRvciB0byBhZGQgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBcbiAqIHRocmVhZCBjb250ZXh0IHRvIHRoZSBjb25zb2xlIG91dHB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGR1bXAodGhpczogTG9nKTogTG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmR1bXBDb250ZXh0ID0gdHJ1ZTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8qKlxuICogQWRkcyB0byB0aGUgbG9nIGNvdW50IGZvciBsb2cgaW5zdGFuY2VzIHRoYXQgc2hhcmUgdGhpcyBsb2cncyBsYWJlbC5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS9jb3VudClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50KHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC5jb3VudCA9IHRoaXMubGFiZWxWYWwuY291bnQgPz8gMDtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgKz0gMTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgY291bnQgZm9yIHRoZSBsb2cgaW5zdGFuY2VzIHRoYXQgc2hhcmUgdGhpcyBsb2cncyBsYWJlbC5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS9jb3VudFJlc2V0KVxuICovXG5leHBvcnQgZnVuY3Rpb24gY291bnRSZXNldCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgPSAwO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVW5zZXRzIHRoZSBjb3VudCBmb3IgdGhlIGxvZyBpbnN0YW5jZXMgdGhhdCBzaGFyZSB0aGlzIGxvZydzIGxhYmVsLlxuICogXG4gKiBUaGlzIGlzIGEgbm9uLXN0YW5kYXJkIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50Q2xlYXIodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IHByaW50RGlyLCBwcmludERpcnhtbCwgcHJpbnRUYWJsZSB9IGZyb20gJ34vcHJpbnRlcnMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuLyoqXG4gKiBJbnN0cnVjdHMgdGhpcyBsb2cgdG8gcHJpbnQgaW4gdGhlIGRpciBmb3JtYXQuIFR5cGljYWxseSB0aGlzIGlzIHVzZWZ1bFxuICogZm9yIHJlbmRlcmluZyBkZWVwbHkgbmVzdGVkIG9iamVjdHMgaW4gdGhlIGNvbnNvbGUuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZGlyKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlyKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludERpcjtcbiAgfSk7XG59XG5cbi8qKlxuICogSW5zdHJ1Y3RzIHRoaXMgbG9nIHRvIHByaW50IGluIHRoZSBkaXJ4bWwgZm9ybWF0LiBUeXBpY2FsbHkgdGhpcyBpcyB1c2VmdWxcbiAqIGZvciByZW5kZXJpbmcgSFRNTC9ET00gb3IgWE1MIEVsZW1lbnRzIGluIHRoZSBjb25zb2xlLlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2RpcnhtbClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpcnhtbCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnREaXJ4bWw7XG4gIH0pO1xufVxuXG4vKipcbiAqIEluc3RydWN0cyB0aGlzIGxvZyB0byBwcmludCBpdHMgYXJndW1lbnQgaW4gYSB0YWJsZSBmb3JtYXQuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvdGFibGUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWJsZSh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRUYWJsZTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBtb2RpZmllciBtZXRob2QgYWxsb3dzIHRoZSBsb2cgdG8gZXhlY3V0ZSBub3JtYWxseSBidXRcbiAqIHByZXZlbnQgaXQgZnJvbSBwcmludGluZyB0byB0aGUgY29uc29sZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbGVudCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5pc1NpbGVudCA9IHRydWU7XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBwcmludEdyb3VwLCBwcmludEdyb3VwQ29sbGFwc2VkLCBwcmludEdyb3VwRW5kIH0gZnJvbSAnfi9wcmludGVycyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIFN0YXJ0cyBhIGxvZyBncm91cC5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS9ncm91cClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTdGFydHMgYSBsb2cgZ3JvdXAgdGhhdCBpcyBjb2xsYXBzZWQgYnkgZGVmYXVsdC5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS9ncm91cENvbGxhcHNlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQ29sbGFwc2VkKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwQ29sbGFwc2VkO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFbmRzIHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBsb2cgZ3JvdXAuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZ3JvdXBFbmQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cEVuZCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRHcm91cEVuZDtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IGdldExhYmVsLCBhZGRMYWJlbCB9IGZyb20gJ34vbGFiZWwnO1xuaW1wb3J0IHsgcHJpbnRUcmFjZSB9IGZyb20gJ34vcHJpbnRlcnMnO1xuaW1wb3J0IHsgcHJlcGVuZE1vZGlmaWVyLCBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIEFkZHMgYSBsYWJlbCB0byB0aGUgbG9nLiBMYWJlbCdzIGNhbiBiZSB1c2VkIGZvciBsb2cgaWRlbnRpZmljYXRpb25cbiAqIGFuZCBncm91cGluZy4gTGFiZWwncyBhbHNvIGxpbmsgbG9nIGluc3RhbmNlcyB0b2dldGhlci5cbiAqIFxuICogVGhpcyBpcyBhIG5vbi1zdGFuZGFyZCBBUEksIGJ1dCBpdCByZXBsYWNlcyB0aGUgbmVlZCB0byBwcm92aWRlXG4gKiBhIGxhYmVsIHRvIGBjb3VudCgpYCBvciBgdGltZSgpYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsKHRoaXM6IExvZywgbmFtZTogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gcHJlcGVuZE1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmxhYmVsVmFsID0gYWRkTGFiZWwoZ2V0TGFiZWwobmFtZSkgPz8geyBuYW1lLCBjb250ZXh0OiB7fSB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogQWRkcyBhIG5hbWVzcGFjZSB0byB0aGUgbG9nLiBOYW1lc3BhY2UncyBhcmUgcHJpbWFyaWx5IHVzZWZ1bFxuICogZm9yIGdyb3VwaW5nIGxvZ3MgdG9nZXRoZXIuXG4gKiBcbiAqIFRoaXMgaXMgYSBub24tc3RhbmRhcmQgQVBJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlKHRoaXM6IExvZywgbnM6IHN0cmluZ3xzdHJpbmdbXSk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLm5hbWVzcGFjZVZhbCA9IG5zO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBbiBhbGlhcyBmb3IgYG5hbWVzcGFjZSgpYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5zKHRoaXM6IExvZywgbnM6IHN0cmluZ3xzdHJpbmdbXSk6TG9nIHtcbiAgcmV0dXJuIHRoaXMubmFtZXNwYWNlKG5zKTtcbn1cblxuLyoqXG4gKiBQcmludHMgYSBzdGFja3RyYWNlIGFsb25nIHdpdGggdGhlIGxvZy5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS90cmFjZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNlKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludFRyYWNlO1xuICB9KVxufVxuXG4vKipcbiAqIEFkZHMgY3VzdG9tIG1ldGEgZGF0YSB0byB0aGUgbG9nIGluc3RhbmNlLiBUaGlzIGlzIHVzZWZ1bFxuICogZm9yIHNjcmFwaW5nIGV4dHJhIGRhdGEgZnJvbSBhIGxvZyBmcm9tIGEgbG9nIGxpc3RlbmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWV0YSh0aGlzOiBMb2csIGRhdGE6IGFueSk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLm1ldGEgPSBkYXRhO1xuICB9KTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL3RpbWluZyc7XG5leHBvcnQgKiBmcm9tICcuL2NvdW50aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybWF0dGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2dyb3VwaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpZnlpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RpZmllcic7XG5leHBvcnQgKiBmcm9tICcuL3Rlc3RpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250ZXh0cyc7XG4iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICd+L19jb250cmFjdHMnO1xuXG4vKipcbiAqIFF1ZXVlcyBhIG1vZGlmaWVyIG1ldGhvZCBmb3IgZXhlY3V0aW9uIHdoZW4gdGhlIGxvZyBpcyB0ZXJtaW5hdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZpZXIobG9nOiBMb2csIGZ1bmM6IEZ1bmN0aW9uKTpMb2cge1xuICBsb2cubW9kaWZpZXJRdWV1ZSA9IGxvZy5tb2RpZmllclF1ZXVlLmNvbmNhdChbZnVuY10pO1xuICByZXR1cm4gbG9nO1xufVxuXG4vKipcbiAqIFF1ZXVlcyBhIG1vZGlmaWVyIG1ldGhvZCBmb3IgZXhlY3V0aW9uIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlIHdoZW4gdGhlIGxvZyBpcyB0ZXJtaW5hdGVkLlxuICogVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IGxhYmVscyBhcmUgYXBwbGllZCBiZWZvcmUgbW9kaWZpZXJzIHRoYXQgdXNlIGxhYmVscyBhcmUgZXhlY3V0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIobG9nOiBMb2csIGZ1bmM6IEZ1bmN0aW9uKTpMb2cge1xuICBsb2cubW9kaWZpZXJRdWV1ZSA9IFtmdW5jXS5jb25jYXQobG9nLm1vZGlmaWVyUXVldWUpO1xuICByZXR1cm4gbG9nO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIFByaW50cyBhIGxvZyB3YXJuaW5nIHRoYXQgdGhlIGFzc2VydGlvbiBmYWlsZWQgaWYgdGhlIGFzc2VydGlvbiBpcyBmYWxzZS5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvY29uc29sZS9hc3NlcnQpXG4gKi8gXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KHRoaXM6IExvZywgYXNzZXJ0aW9uOiBib29sZWFuKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMuYXNzZXJ0aW9uID0gYXNzZXJ0aW9uO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBbGxvd3MgdGhlIGxvZyB0byBwcmludCBpZiB0aGUgZXhwcmVzc2lvbiBpcyB0cnVlLlxuICogXG4gKiBUaGlzIGlzIGEgbm9uLXN0YW5kYXJkIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3QodGhpczogTG9nLCBleHByZXNzaW9uOiBib29sZWFuKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH0pO1xufSIsImNvbnN0IGhydGltZSA9IHJlcXVpcmUoJ2Jyb3dzZXItcHJvY2Vzcy1ocnRpbWUnKTtcblxuaW1wb3J0IHsgTG9nLCBIclRpbWUgfSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuLyoqXG4gKiBTdGFydHMgYSB0aW1lciBhc3NvY2lhdGVkIHdpdGggdGhpcyBsb2cncyAqbGFiZWwqLiBUaGlzIHdpbGwgZG8gbm90aGluZyBpZlxuICogdGhpcyBsb2cgaGFzIG5vIGxhYmVsLlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL3RpbWUpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZSh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwudGltZVN0YXJ0ID0gaHJ0aW1lKCk7XG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBsb2cgcmVuZGVyIHRvIHNob3cgdGhlIGN1cnJlbnQgaGlnaC1yZXNvbHV0aW9uIHJlYWwgdGltZS5cbiAqIFxuICogVGhpcyBpcyBhIG5vbi1zdGFuZGFyZCBtZXRob2QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lTm93KHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBjb25zdCB0aW1lX25vdyA9IGZvcm1hdFRpbWUoaHJ0aW1lKCkpO1xuICAgIHRoaXMubGFiZWxWYWwgPyB0aGlzLmxhYmVsVmFsLnRpbWVOb3cgPSB0aW1lX25vdyA6IHRoaXMudGltZU5vd1ZhbCA9IHRpbWVfbm93O1xuICB9KVxufVxuXG4vKipcbiAqIFN0b3BzIGEgdGltZXIgdGhhdCB3YXMgcHJldmlvdXNseSBzdGFydGVkIGJ5IGNhbGxpbmcgdGltZSgpIG9uIGEgKmxhYmVsZWQqIGxvZy4gQ2FsY3VsYXRlcyB0aGUgXG4gKiBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHN0YXJ0IHRpbWUgYW5kIHdoZW4gdGhpcyBtZXRob2Qgd2FzIGNhbGxlZC4gVGhpcyB0aGVuXG4gKiBtb2RpZmllcyB0aGUgbG9nIHJlbmRlciB0byBzaG93IHRoZSB0aW1lIGRpZmZlcmVuY2UuIFRoaXMgd2lsbCBkbyBub3RoaW5nIGlmIHRoZSAqbGFiZWwqIGRvZXNcbiAqIG5vdCBleGlzdC5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS90aW1lRW5kKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVFbmQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLnRpbWVFbGxhcHNlZCA9IGZvcm1hdFRpbWUoaHJ0aW1lKHRoaXMubGFiZWxWYWwudGltZVN0YXJ0KSk7XG4gICAgfVxuICB9KTtcbn1cblxuLypcbiAgISBjb25zb2xlLnRpbWVMb2coKSBpcyBwdXJwb3NlZnVsbHkgb21pdHRlZCBmcm9tIHRoaXMgQVBJLlxuXG4gIHRpbWVMb2coKSBpcyBhIHVzZWxlc3MgbWV0aG9kIHdpdGhpbiB0aGUgQWR6ZSBBUEkuIFRoZSBzYW1lIGVmZmVjdCBjYW4gYmUgXG4gIGFjY29tcGxpc2hlZCBieSBjcmVhdGVkIGEgbmV3IGxvZyB3aXRoIHRoZSBzYW1lIGxhYmVsLlxuKi9cblxuLyoqXG4gKiBUYWtlcyBhbiBIclRpbWUgdHVwbGUgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBodW1hbi1yZWFkYWJsZSBmb3JtYXR0ZWRcbiAqIHN0cmluZyBpbiB0aGUgZm9ybWF0IG9mIGB7c2VjfXMge21zfW1zYC5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGltZShbIHNlYywgbmFubyBdOiBIclRpbWUpOnN0cmluZyB7XG4gIHJldHVybiBgJHtzZWN9cyAke25hbm8gLyAxMDAwMDAwfW1zYDtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcHJpbnRlcnMnOyIsImltcG9ydCB7IExvZywgTG9nTGV2ZWxEZWZpbml0aW9uLCBMb2dSZW5kZXIgfSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHsgYXBwbHlSZW5kZXIsIHRvQ29uc29sZSwgZk5hbWVzcGFjZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICd+L2dsb2JhbCc7XG5pbXBvcnQgeyBpbml0aWFsQ2FwcyB9IGZyb20gJ34vdXRpbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG4vKipcbiAqIFRoZSBwcmltYXJ5IG1ldGhvZCBmb3IgcHJpbnRpbmcgbG9ncyB0byB0aGUgYnJvd3NlciBjb25zb2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2cobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCBbIG1ldGhvZCwgbGVhZGVyLCBzdHlsZSwgbWV0YSBdID0gWyBkZWYubWV0aG9kLCBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSwgKGxvZy5jZmcuYmFzZV9zdHlsZSArIGRlZi5zdHlsZSksIGZNZXRhKGxvZywgdXNlX2Vtb2ppKSBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9IG1ldGEgPT09ICcnID8gWyBsZWFkZXIsIHN0eWxlLCAuLi5hcmdzIF0gOiBbIGxlYWRlciwgc3R5bGUsIG1ldGEsIC4uLmFyZ3MgXTtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csIG1ldGhvZCwgcmVuZGVyX2FyZ3MgKSwgbG9nLmlzU2lsZW50KTtcbn1cblxuLyoqXG4gKiBUaGUgbWV0aG9kIGZvciBwcmludGluZyBncm91cCBsb2dzIHRvIHRoZSBicm93c2VyIGNvbnNvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgcGFydGlhbF9hcmdzID0gWyBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSwgKGxvZy5jZmcuYmFzZV9zdHlsZSArIGRlZi5zdHlsZSkgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IFsgLi4ucGFydGlhbF9hcmdzLCBhcmdzWzBdIF0gOiBwYXJ0aWFsX2FyZ3M7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZ3JvdXAnLCByZW5kZXJfYXJncyksIGxvZy5pc1NpbGVudCk7XG59XG5cbi8qKlxuICogVGhlIG1ldGhvZCBmb3IgcHJpbnRpbmcgY29sbGFwc2VkIGdyb3VwIGxvZ3MgdG8gdGhlIGJyb3dzZXIgY29uc29sZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXBDb2xsYXBzZWQobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCBwYXJ0aWFsX2FyZ3MgPSBbIGZMZWFkZXIoZGVmLCB1c2VfZW1vamksIGFyZ3MpLCAobG9nLmNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gWyAuLi5wYXJ0aWFsX2FyZ3MsIGFyZ3NbMF0gXSA6IHBhcnRpYWxfYXJncztcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csICdncm91cENvbGxhcHNlZCcsIHJlbmRlcl9hcmdzKSwgbG9nLmlzU2lsZW50KTtcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBGT1JNQVRURVJTIC0tLS0tLS0tIC8vXG5cbi8qKlxuICogRm9ybWF0cyB0aGUgbGVhZGVyIG9mIHRoZSBsb2cgc3RyaW5nLiBUaGlzIGNvbnRhaW5zIHRoZSBlbW9qaSBpZiBlbmFibGVkLFxuICogdGhlIGxvZyBsZXZlbCBuYW1lLCBhbmQgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgYmVpbmcgcHJpbnRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZMZWFkZXIoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOnN0cmluZyB7XG4gIHJldHVybiBgICVjJHtmRW1vamkoZGVmLCB1c2VfZW1vamkpfSAke2ZOYW1lKGRlZi5sZXZlbE5hbWUpfSgke2FyZ3MubGVuZ3RofSlgO1xufVxuXG4vKipcbiAqIEFkZHMgdGhlIGVtb2ppIHRvIHRoZSBsb2cgbGVhZGVyIGlmIGVuYWJsZWQuXG4gKi9cbmZ1bmN0aW9uIGZFbW9qaShkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuKTpzdHJpbmcge1xuICByZXR1cm4gZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSB8fCB1c2VfZW1vamkgPyBgICR7ZGVmLmVtb2ppfWAgOiAnJztcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBsb2cgbGV2ZWwgbmFtZSB0byB0aGUgbGVhZGVyIGluIGluaXRpYWwgY2Fwcy5cbiAqL1xuZnVuY3Rpb24gZk5hbWUobmFtZTogc3RyaW5nfHVuZGVmaW5lZCk6c3RyaW5nIHtcbiAgcmV0dXJuIGluaXRpYWxDYXBzKG5hbWUgPz8gJycpO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIG1ldGEgc2VjdGlvbiBvZiB0aGUgbG9nIHN0cmluZyB3aGljaCBpbmNsdWRlcyB0aGVcbiAqIGxvZyBuYW1lc3BhY2UsIHRoZSBsYWJlbCwgdGhlIHRpbWVzdGFtcCBmcm9tIHRoZSB0aW1lciwgdGhlIGNvdW50XG4gKiBmcm9tIHRoZSBjb3VudGVyLCBvciB0aGUgdGVzdCByZXN1bHQgZnJvbSBhbnkgYXNzZXJ0aW9ucyBpZiBhbnkgb2ZcbiAqIHRoZXNlIG1vZGlmaWVycyB3ZXJlIGFwcGxpZWQgdG8gdGhpcyBsb2cuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmTWV0YShsb2c6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTpzdHJpbmcge1xuICByZXR1cm4gYCR7Zk5hbWVzcGFjZShsb2cpfSR7ZkxhYmVsKGxvZyl9JHtmVGltZShsb2csIHVzZV9lbW9qaSl9JHtmQ291bnQobG9nKX0ke2ZUZXN0KGxvZywgdXNlX2Vtb2ppKX1gO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIHRpbWUgb24gdGhlIGxvZyBzdHJpbmcgYmFzZWQgb24gYW55IHRpbWUgbW9kaWZpZXJzXG4gKiB0aGF0IGhhdmUgYmVlbiBhcHBsaWVkIHRvIHRoaXMgbG9nLlxuICovXG5mdW5jdGlvbiBmVGltZShsb2c6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTpzdHJpbmcge1xuICBjb25zdCBsYWJlbF90eHQgPSBgJHtsb2cubGFiZWxWYWw/LnRpbWVOb3cgPz8gbG9nLmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJycgPyBgICgke2Vudi4kc2hlZD8ub3ZlcnJpZGVzPy51c2VfZW1vamkgfHwgdXNlX2Vtb2ppID8gJ+KPsScgOiAnJ30ke2xhYmVsX3R4dH0pIGAgOiAnJztcbn1cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBjb3VudCBvbiB0aGUgbG9nIHN0cmluZyBiYXNlZCBvbiBhbnkgY291bnRlciBtb2RpZmllcnNcbiAqIHRoYXQgaGF2ZSBiZWVuIGFwcGxpZWQgdG8gdGhpcyBsb2cuXG4gKi9cbmZ1bmN0aW9uIGZDb3VudChsb2c6IExvZyk6c3RyaW5nIHtcbiAgY29uc3QgY291bnQgPSBsb2cubGFiZWxWYWw/LmNvdW50O1xuICByZXR1cm4gY291bnQgIT09IHVuZGVmaW5lZCA/IGAoQ291bnQ6ICR7Y291bnR9KWAgOiAnJztcbn1cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBsYWJlbCBvbiB0aGUgbG9nIHN0cmluZyBiYXNlZCBvbiB0aGUgbGFiZWxcbiAqIG1vZGlmaWVyIGFwcGxpZWQgdG8gdGhpcyBsb2cuXG4gKi9cbmZ1bmN0aW9uIGZMYWJlbChsb2c6IExvZyk6c3RyaW5nIHtcbiAgcmV0dXJuIGxvZy5sYWJlbFZhbCA/IGBbJHtsb2cubGFiZWxWYWwubmFtZX1dIGAgOiAnJztcbn1cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBhc3NlcnRpb24gb3IgdGVzdCBvbiB0aGUgbG9nIHN0cmluZyBiYXNlZCBvblxuICogYW55IHRlc3RpbmcgbW9kaWZpZXJzIGFwcGxpZWQgdG8gdGhpcyBsb2cuXG4gKi9cbmZ1bmN0aW9uIGZUZXN0KGxvZzogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOnN0cmluZyB7XG4gIHJldHVybiBsb2cuYXNzZXJ0aW9uID09PSBmYWxzZSA/IGAke3VzZV9lbW9qaSA/ICfinYwgJyA6ICcnfUFzc2VydGlvbiBmYWlsZWQ6YCA6ICcnO1xufSIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ34vZ2xvYmFsJztcbmltcG9ydCB7XG4gIHByaW50TG9nIGFzIHByaW50TG9nQnJvd3NlcixcbiAgcHJpbnRHcm91cCBhcyBwcmludEdyb3VwQnJvd3NlcixcbiAgcHJpbnRHcm91cENvbGxhcHNlZCBhcyBwcmludEdyb3VwQ29sbGFwc2VkQnJvd3Nlcixcbn0gZnJvbSAnLi9icm93c2VyJztcbmltcG9ydCB7XG4gIHByaW50TG9nIGFzIHByaW50TG9nTm9kZSxcbiAgcHJpbnRHcm91cCBhcyBwcmludEdyb3VwTm9kZSxcbiAgcHJpbnRHcm91cENvbGxhcHNlZCBhcyBwcmludEdyb3VwQ29sbGFwc2VkTm9kZSxcbn0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7XG4gIHByaW50LFxuICBwcmludEdyb3VwRW5kLFxuICBwcmludFRhYmxlLFxuICBwcmludERpcixcbiAgcHJpbnREaXJ4bWwsXG4gIHByaW50VHJhY2UsXG59IGZyb20gJy4vc2hhcmVkJztcblxuY29uc3QgcHJpbnRMb2cgPSBpc0Jyb3dzZXIgPyBwcmludExvZ0Jyb3dzZXIgOiBwcmludExvZ05vZGU7XG5jb25zdCBwcmludEdyb3VwID0gaXNCcm93c2VyID8gcHJpbnRHcm91cEJyb3dzZXIgOiBwcmludEdyb3VwTm9kZTtcbmNvbnN0IHByaW50R3JvdXBDb2xsYXBzZWQgPSBpc0Jyb3dzZXIgPyBwcmludEdyb3VwQ29sbGFwc2VkQnJvd3NlciA6IHByaW50R3JvdXBDb2xsYXBzZWROb2RlO1xuXG5leHBvcnQge1xuICBwcmludCxcbiAgcHJpbnRMb2csXG4gIHByaW50R3JvdXAsXG4gIHByaW50R3JvdXBDb2xsYXBzZWQsXG4gIHByaW50R3JvdXBFbmQsXG4gIHByaW50VGFibGUsXG4gIHByaW50RGlyLFxuICBwcmludERpcnhtbCxcbiAgcHJpbnRUcmFjZSxcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9wcmludGVycyc7IiwiaW1wb3J0ICogYXMgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHsgTG9nLCBMb2dMZXZlbERlZmluaXRpb24sIExvZ1JlbmRlciB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyB0b0NvbnNvbGUsIGFwcGx5UmVuZGVyLCBmTmFtZXNwYWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IGVudiB9IGZyb20gJ34vZ2xvYmFsJztcbmltcG9ydCB7IGluaXRpYWxDYXBzLCBpc1N0cmluZyB9IGZyb20gJ34vdXRpbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG4vKipcbiAqIFRoZSBwcmltYXJ5IG1ldGhvZCBmb3IgcHJpbnRpbmcgbG9ncyB0byB0aGUgbm9kZSBjb25zb2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2cobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCBbIG1ldGhvZCwgbGVhZGVyLCBzdHlsZSwgbWV0YSBdID0gWyBkZWYubWV0aG9kLCBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSwgZGVmLnRlcm1pbmFsLCBmTWV0YShsb2csIHVzZV9lbW9qaSkgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBtZXRhID09PSAnJyA/IFsgbGVhZGVyLCAuLi5hcmdzIF0gOiBbIGxlYWRlciwgc3R5bGUsIG1ldGEsIC4uLmFyZ3MgXTtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csIG1ldGhvZCwgcmVuZGVyX2FyZ3MgKSwgbG9nLmlzU2lsZW50KTtcbn1cblxuLyoqXG4gKiBUaGUgbWV0aG9kIGZvciBwcmludGluZyBncm91cCBsb2dzIHRvIHRoZSBub2RlIGNvbnNvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBzZXR1cFByaW50R3JvdXAoZGVmLCB1c2VfZW1vamksIGFyZ3MpO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2dyb3VwJywgcmVuZGVyX2FyZ3MpLCBsb2cuaXNTaWxlbnQpO1xufVxuXG4vKipcbiAqIFRoZSBtZXRob2QgZm9yIHByaW50aW5nIGNvbGxhcHNlZCBncm91cCBsb2dzIHRvIHRoZSBub2RlIGNvbnNvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwQ29sbGFwc2VkKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBzZXR1cFByaW50R3JvdXAoZGVmLCB1c2VfZW1vamksIGFyZ3MpO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2dyb3VwQ29sbGFwc2VkJywgcmVuZGVyX2FyZ3MpLCBsb2cuaXNTaWxlbnQpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFByaW50R3JvdXAoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOmFueVtdIHtcbiAgY29uc3QgcGFydGlhbF9hcmdzID0gWyBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSBdO1xuICByZXR1cm4gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBbIC4uLnBhcnRpYWxfYXJncywgYXJnc1swXSBdIDogcGFydGlhbF9hcmdzO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIEZPUk1BVFRFUlMgLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBsZWFkZXIgb2YgdGhlIGxvZyBzdHJpbmcuIFRoaXMgY29udGFpbnMgdGhlIGVtb2ppIGlmIGVuYWJsZWQsXG4gKiB0aGUgbG9nIGxldmVsIG5hbWUsIGFuZCB0aGUgbnVtYmVyIG9mIGFyZ3VtZW50cyBiZWluZyBwcmludGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZkxlYWRlcihkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6c3RyaW5nIHtcbiAgY29uc3QgZW1vamkgPSB1c2VfZW1vamkgPyBmRW1vamkoZGVmLmVtb2ppKSA6ICcnO1xuICBjb25zdCBwYWRkaW5nID0gdXNlX2Vtb2ppID8gKDE0ICsgZW1vamkubGVuZ3RoKSA6IDE0O1xuICBjb25zdCBwYWRkZWRfbGVhZGVyID0gYWRkUGFkZGluZyhgJHtlbW9qaX0gJHtmTmFtZShkZWYubGV2ZWxOYW1lKX0oJHthcmdzLmxlbmd0aH0pYCwgcGFkZGluZyk7XG4gIFxuICByZXR1cm4gZGVmLnRlcm1pbmFsLnJlZHVjZSgoYWNjLCBzdHlsZSkgPT4ge1xuICAgIHJldHVybiBjaGFsa1tzdHlsZV0oYWNjKTtcbiAgfSwgcGFkZGVkX2xlYWRlcik7XG59XG5cbi8qKlxuICogQWRkIHNwYWNlcyB0byB0aGUgZW5kIG9mIGEgbG9nIHRpdGxlIHRvIG1ha2UgdGhlbSBhbGwgYWxpZ24uXG4gKi9cbmZ1bmN0aW9uIGFkZFBhZGRpbmcoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyKTpzdHJpbmcge1xuICBjb25zdCBkaWZmID0gbGVuIC0gc3RyLmxlbmd0aDtcbiAgbGV0IHBhZGRlZCA9IHN0cjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZGlmZjsgaSArPSAxKSB7XG4gICAgcGFkZGVkICs9ICcgJztcbiAgfVxuICByZXR1cm4gcGFkZGVkO1xufVxuXG4vKipcbiAqIEFkZHMgdGhlIGVtb2ppIHRvIHRoZSBsb2cgbGVhZGVyIGlmIGVuYWJsZWQuXG4gKi9cbmZ1bmN0aW9uIGZFbW9qaShlbW9qaTogc3RyaW5nKTpzdHJpbmcge1xuICByZXR1cm4gYCAke2Vtb2ppfWA7XG59XG5cbi8qKlxuICogQWRkcyB0aGUgbG9nIGxldmVsIG5hbWUgdG8gdGhlIGxlYWRlciBpbiBpbml0aWFsIGNhcHMuXG4gKi9cbmZ1bmN0aW9uIGZOYW1lKG5hbWU6IHN0cmluZ3x1bmRlZmluZWQpOnN0cmluZyB7XG4gIHJldHVybiBpbml0aWFsQ2FwcyhuYW1lID8/ICcnKTtcbn1cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBtZXRhIHNlY3Rpb24gb2YgdGhlIGxvZyBzdHJpbmcgd2hpY2ggaW5jbHVkZXMgdGhlXG4gKiBsb2cgbmFtZXNwYWNlLCB0aGUgbGFiZWwsIHRoZSB0aW1lc3RhbXAgZnJvbSB0aGUgdGltZXIsIHRoZSBjb3VudFxuICogZnJvbSB0aGUgY291bnRlciwgb3IgdGhlIHRlc3QgcmVzdWx0IGZyb20gYW55IGFzc2VydGlvbnMgaWYgYW55IG9mXG4gKiB0aGVzZSBtb2RpZmllcnMgd2VyZSBhcHBsaWVkIHRvIHRoaXMgbG9nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZk1ldGEobG9nOiBMb2csIHVzZV9lbW9qaTogYm9vbGVhbik6c3RyaW5nIHtcbiAgcmV0dXJuIGAke2ZOYW1lc3BhY2UobG9nKX0ke2ZMYWJlbChsb2cpfSR7ZlRpbWUobG9nLCB1c2VfZW1vamkpfSR7ZkNvdW50KGxvZyl9JHtmVGVzdChsb2csIHVzZV9lbW9qaSl9YDtcbn1cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSB0aW1lIG9uIHRoZSBsb2cgc3RyaW5nIGJhc2VkIG9uIGFueSB0aW1lIG1vZGlmaWVyc1xuICogdGhhdCBoYXZlIGJlZW4gYXBwbGllZCB0byB0aGlzIGxvZy5cbiAqL1xuZnVuY3Rpb24gZlRpbWUobG9nOiBMb2csIHVzZV9lbW9qaTogYm9vbGVhbik6c3RyaW5nIHtcbiAgY29uc3QgbGFiZWxfdHh0ID0gYCR7bG9nLnRpbWVOb3dWYWwgPz8gbG9nLmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJycgPyBgKCR7ZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSB8fCB1c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIGNvdW50IG9uIHRoZSBsb2cgc3RyaW5nIGJhc2VkIG9uIGFueSBjb3VudGVyIG1vZGlmaWVyc1xuICogdGhhdCBoYXZlIGJlZW4gYXBwbGllZCB0byB0aGlzIGxvZy5cbiAqL1xuZnVuY3Rpb24gZkNvdW50KGxvZzogTG9nKTpzdHJpbmcge1xuICBjb25zdCBjb3VudCA9IGxvZy5sYWJlbFZhbD8uY291bnQ7XG4gIHJldHVybiBjb3VudCAhPT0gdW5kZWZpbmVkID8gYChDb3VudDogJHtjb3VudH0pYCA6ICcnO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIGxhYmVsIG9uIHRoZSBsb2cgc3RyaW5nIGJhc2VkIG9uIHRoZSBsYWJlbFxuICogbW9kaWZpZXIgYXBwbGllZCB0byB0aGlzIGxvZy5cbiAqL1xuZnVuY3Rpb24gZkxhYmVsKGxvZzogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gbG9nLmxhYmVsVmFsID8gYFske2xvZy5sYWJlbFZhbC5uYW1lfV0gYCA6ICcnO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIGFzc2VydGlvbiBvciB0ZXN0IG9uIHRoZSBsb2cgc3RyaW5nIGJhc2VkIG9uXG4gKiBhbnkgdGVzdGluZyBtb2RpZmllcnMgYXBwbGllZCB0byB0aGlzIGxvZy5cbiAqL1xuZnVuY3Rpb24gZlRlc3QobG9nOiBMb2csIHVzZV9lbW9qaTogYm9vbGVhbik6c3RyaW5nIHtcbiAgcmV0dXJuIGxvZy5hc3NlcnRpb24gPT09IGZhbHNlID8gYCR7dXNlX2Vtb2ppID8gJ+KdjCAnIDogJyd9QXNzZXJ0aW9uIGZhaWxlZDpgIDogJyc7XG59IiwiaW1wb3J0IHsgTG9nLCBMb2dSZW5kZXIsIENvbnNvbGVNZXRob2QsIExvZ0xldmVsRGVmaW5pdGlvbiB9IGZyb20gXCJ+L19jb250cmFjdHNcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gJ34vZ2xvYmFsJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnfi91dGlsJztcblxuLy8gLS0tLS0tLSBQUklOVCBFTlRSWSAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnQobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgdXNlX2Vtb2ppID0gZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSA9PT0gdHJ1ZSB8fCBsb2cuY2ZnLnVzZV9lbW9qaSA9PT0gdHJ1ZTtcbiAgcmV0dXJuIGxvZy5wcmludGVyKGxvZywgZGVmLCB1c2VfZW1vamksIGFyZ3MpO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIE1FVEhPRFMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXBFbmQobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2dyb3VwRW5kJywgW10pLCBsb2cuaXNTaWxlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRUYWJsZShsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAndGFibGUnLCBhcmdzKSwgbG9nLmlzU2lsZW50LCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludERpcihsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZGlyJywgYXJncyksIGxvZy5pc1NpbGVudCwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnREaXJ4bWwobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2RpcnhtbCcsIGFyZ3MpLCBsb2cuaXNTaWxlbnQsIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VHJhY2UobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ3RyYWNlJywgYXJncyksIGxvZy5pc1NpbGVudCk7XG59XG5cbi8vIC0tLS0tLSBQcmludCB0byB0aGUgY29uc29sZSAtLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJlbmRlcihsb2c6IExvZywgbWV0aG9kOiBDb25zb2xlTWV0aG9kLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgZXhwYW5kZWRfYXJncyA9IGxvZy5kdW1wQ29udGV4dCA/IGFyZ3MuY29uY2F0KFtsb2cuY29udGV4dF0pIDogYXJncztcbiAgbG9nLnJlbmRlciA9IFttZXRob2QsIGV4cGFuZGVkX2FyZ3NdO1xuICByZXR1cm4gbG9nLnJlbmRlcjtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGxvZy4gSWYgdGhlIEFEWkVfRU5WIGlzIHNldCB0byBcImRldlwiIHRoZSBsb2cgd2lsbCBub3QgcmVuZGVyIGFuZCBcbiAqIHdpbGwgYmUgcmV0dXJuZWQgZm9yIHVuaXQgbGlicmFyeSBkZXZlbG9wbWVudCBwdXJwb3Nlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ29uc29sZShyZW5kZXI6IExvZ1JlbmRlciwgaXNfc2lsZW50OiBib29sZWFuLCBzcHJlYWQgPSB0cnVlKTpMb2dSZW5kZXIge1xuICBjb25zdCBbbWV0aG9kLCBhcmdzXSA9IHJlbmRlcjtcbiAgaWYgKGVudi5BRFpFX0VOViAhPT0gJ2RldicgJiYgIWlzX3NpbGVudCkge1xuICAgIHNwcmVhZCA/IGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKSA6IGNvbnNvbGVbbWV0aG9kXShhcmdzKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyO1xufVxuXG4vLyAtLS0tLS0gU2hhcmVkIEZvcm1hdHRlcnMgLS0tLS0tLSAvL1xuXG4vKipcbiAqIEZvcm1hdHMgdGhlIG5hbWVzcGFjZSBvbiB0aGUgbG9nIHN0cmluZyBiYXNlZCBvbiB0aGUgbmFtZXNwYWNlXG4gKiBtb2RpZmllciBhcHBsaWVkIHRvIHRoaXMgbG9nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZk5hbWVzcGFjZShsb2c6IExvZyk6c3RyaW5nIHtcbiAgY29uc3QgbnMgPSBsb2cubmFtZXNwYWNlVmFsO1xuICBpZiAobnMpIHtcbiAgICBpZiAoaXNTdHJpbmcobnMpKSB7XG4gICAgICByZXR1cm4gYCMke2xvZy5uYW1lc3BhY2VWYWx9IGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBucy5yZWR1Y2UoKGFjYywgbmFtZSkgPT4gYCR7YWNjfSMke25hbWV9IGAsICcnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufSIsImltcG9ydCBkZWZhdWx0c0RlZXAgZnJvbSAnbG9kYXNoLmRlZmF1bHRzZGVlcCc7XG5pbXBvcnQge1xuICBTaGVkQ29uZmlnLCBEZWZhdWx0cywgTGFiZWwsIExldmVscyxcbiAgU2hlZFVzZXJDb25maWcsIEZpbmFsTG9nLCBCdW5kbGUsIEZpbHRlclZhbHVlLFxuICBHbG9iYWxGaWx0ZXIsIExvZ0xldmVsRGVmaW5pdGlvbiwgTGlzdGVuZXJMb2NhdGlvbnMsXG4gIExpc3RlbmVyQnVja2V0LCBMaXN0ZW5lckNhbGxiYWNrLCBMYWJlbE1hcCwgTGlzdGVuZXJCdWNrZXRzXG59IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBkZWZhdWx0cywgc2hlZF9kZWZhdWx0cyB9IGZyb20gJ34vX2RlZmF1bHRzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBmb3JtYXRMZXZlbHMsIGFsbExldmVscyB9IGZyb20gJ34vdXRpbCc7XG5cbmltcG9ydCB7IGVudiB9IGZyb20gJ34vZ2xvYmFsJztcblxudHlwZSBGaWx0ZXJUeXBlID0gXCJpbmNsdWRlXCJ8XCJleGNsdWRlXCI7XG50eXBlIEZpbHRlckZ1bmN0aW9uID0gXCJpc0luY2x1ZGVkXCJ8XCJpc05vdEV4Y2x1ZGVkXCI7XG50eXBlIEZpbHRlckFsbG93ZWRDYWxsYmFjayA9IChmaWx0ZXI6IEZpbHRlclR5cGUsIGZ1bmM6IEZpbHRlckZ1bmN0aW9uKSA9PiBib29sZWFufHVuZGVmaW5lZDtcbi8qKlxuICogQSB0eXBlZ3VhcmQgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIGdsb2JhbCBzaGVkIHN0b3JlIGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoZWRFeGlzdHMoc3RvcmU6IFNoZWR8dW5kZWZpbmVkKTpzdG9yZSBpcyBTaGVkIHtcbiAgcmV0dXJuIHN0b3JlICE9PSB1bmRlZmluZWQ7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgc2hlZCBpbnN0YW5jZSBpbiB5b3VyIGVudmlyb25tZW50J3MgZ2xvYmFsIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGVkKGNvbmZpZzogU2hlZFVzZXJDb25maWcpOiBTaGVkIHtcbiAgZW52LiRzaGVkID0gbmV3IFNoZWQoY29uZmlnKTtcbiAgcmV0dXJuIGVudi4kc2hlZDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBzaGVkIGZyb20gdGhlIGVudmlyb25tZW50J3MgZ2xvYmFsIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTaGVkKCk6dm9pZCB7XG4gIGRlbGV0ZSBlbnYuJHNoZWQ7XG59XG5cbi8qKlxuICogQSBnbG9iYWwgc3RvcmUgZm9yIGNhY2hpbmcsIGxpc3RlbmluZywgYW5kIHJlY2FsbGluZyBBZHplIGxvZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGVkIHtcblxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gZm9yIFNoZWQuIFNoZWQgaXMgY29uc3RydWN0ZWQgd2l0aCBhIHNldCBvZiBcbiAgICogZGVmYXVsdHMgdGhhdCBjYW4gb3ZlcnJpZGVuIGJ5IHRoZSBjb25maWd1cmF0aW9uIHN1cHBsaWVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBjZmc6IFNoZWRDb25maWc7XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIGZpbmFsaXplZCBsb2dzICh0ZXJtaW5hdGVkIGFuZCBoYXZlIG1ldGEgZGF0YSBhcHBsaWVkIHRvIHRoZW0pLiBUaGlzXG4gICAqIGlzIG1haW5seSB1c2VkIGZvciByZWNhbGxpbmcgbG9ncyBhbmQgZmlsdGVyaW5nIHRoZW0uXG4gICAqL1xuICBwcml2YXRlIGNhY2hlOiBGaW5hbExvZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIGxhYmVsIGluc3RhbmNlcy4gVXNlZnVsIGZvciBnbG9iYWxseSBsaW5raW5nIGxhYmVsbGVkIGxvZ3MuXG4gICAqL1xuICBwcml2YXRlIGxhYmVsczogTGFiZWxNYXAgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIENvdW50ZXIgZm9yIGdlbmVyYXRpbmcgSUQncyBmb3IgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBpZF9jb3VudGVyOiBudW1iZXIgPSAtMTtcblxuICAvKipcbiAgICogQ2FjaGUgb2YgbG9nIGxpc3RlbmVycy4gVGhlc2UgYXJlIGZpcmUgd2hlbiBzcGVjaWZpZWQgbG9nIGxldmVsc1xuICAgKiBhcmUgcHJpbnRlZC5cbiAgICovXG4gIHByaXZhdGUgbGlzdGVuZXJzOiBMaXN0ZW5lckJ1Y2tldHMgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBTaGVkVXNlckNvbmZpZykge1xuICAgIGNvbnN0IGdsb2JhbF9jZmcgPSBjb25maWc/Lmdsb2JhbF9jZmcgPyBkZWZhdWx0c0RlZXAoY29uZmlnLmdsb2JhbF9jZmcsIGRlZmF1bHRzKSA6IG51bGw7XG4gICAgY29uc3QgY2ZnX2dsb2JhbF9kZWZhdWx0cyA9IHsgLi4uY29uZmlnLCBnbG9iYWxfY2ZnIH07XG4gICAgdGhpcy5jZmcgPSBkZWZhdWx0c0RlZXAoY2ZnX2dsb2JhbF9kZWZhdWx0cywgc2hlZF9kZWZhdWx0cyk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gICAqIEdFVC9TRVQgTUVUSE9EU1xuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIFN0b3JlIGEgbG9nIGluIHRoZSBzaGVkIGZvciBsYXRlciByZWNhbGwuXG4gICAqL1xuICBwdWJsaWMgc3RvcmUobG9nOiBGaW5hbExvZyk6dm9pZCB7XG4gICAgaWYgKHRoaXMuY2FjaGUubGVuZ3RoIDwgdGhpcy5jZmcuY2FjaGVfbGltaXQpIHtcbiAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmNhY2hlLmNvbmNhdChbbG9nXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpbWl0IGZvciB0aGUgbWF4aW11bSBudW1iZXIgb2YgbG9ncyB0aGF0IFNoZWQgd2lsbCBjYWNoZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgY2FjaGVMaW1pdChsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5jZmcuY2FjaGVfbGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsaW1pdCBmb3IgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxvZ3MgdGhhdCBTaGVkIHdpbGwgY2FjaGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhY2hlTGltaXQoKTpudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNmZy5jYWNoZV9saW1pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBvZiB0aGUgY2FjaGVkIGxvZ3Mgb2YgdGhlIHByb3ZpZGVkIGxldmVscyBhcyBhIGJ1bmRsZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHJlY2FsbGluZyBsb2dzIGFuZCBhcHBseWluZyBmaWx0ZXJzLlxuICAgKi9cbiAgcHVibGljIGdldEJ1bmRsZShsZXZlbHM6IExldmVscyk6QnVuZGxlIHtcbiAgICBjb25zdCBsdmxzID0gZm9ybWF0TGV2ZWxzKHRoaXMuY2ZnLmdsb2JhbF9jZmcsIGxldmVscyk7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGUucmVkdWNlKChhY2MsIGxvZykgPT4ge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQobHZscy5pbmNsdWRlcyhsb2cubGV2ZWwpID8gWyBsb2cgXSA6IFtdKTtcbiAgICB9LCBbXSBhcyBCdW5kbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgc2hlZCBpbnN0YW5jZSBoYXMgZ2xvYmFsIEFkemUgY29uZmlnIG92ZXJyaWRlcyBzZXQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc092ZXJyaWRlcygpOmJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNmZy5nbG9iYWxfY2ZnICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGdsb2JhbCBBZHplIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzLlxuICAgKi9cbiAgcHVibGljIGdldCBvdmVycmlkZXMoKTpEZWZhdWx0c3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jZmcuZ2xvYmFsX2NmZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGhpZGVBbGwgZmlsdGVyIHByb3BlcnR5LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaGlkZUFsbCgpOmJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNmZz8uZmlsdGVycy5oaWRlQWxsID8/IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGdsb2JhbCBBZHplIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzLlxuICAgKi9cbiAgcHVibGljIHNldCBjb25maWcoY2ZnOiBEZWZhdWx0c3xudWxsKSB7XG4gICAgY29uc3QgZGVmYXVsdGVkID0gY2ZnID8gZGVmYXVsdHNEZWVwKGNmZywgZGVmYXVsdHMpIDogY2ZnO1xuICAgIHRoaXMuY2ZnLmdsb2JhbF9jZmcgPSBkZWZhdWx0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGFiZWwgZnJvbSB0aGUgU2hlZCBieSBuYW1lLlxuICAgKi9cbiAgcHVibGljIGdldExhYmVsKG5hbWU6IHN0cmluZyk6TGFiZWx8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuZ2V0KG5hbWUpO1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkcyBhIGxhYmVsIHRvIHRoZSBTaGVkIHRvIGJlIHRyYWNrZWQgZ2xvYmFsbHkuXG4gICAqL1xuICBwdWJsaWMgYWRkTGFiZWwobGFiZWw6IExhYmVsKTp2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzTGFiZWwobGFiZWwubmFtZSkpIHtcbiAgICAgIHRoaXMubGFiZWxzLnNldChsYWJlbC5uYW1lLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIGEgbGFiZWwgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBleGlzdHMgaW4gdGhlIFNoZWQgbGFiZWwgY2FjaGUuXG4gICAqL1xuICBwdWJsaWMgaGFzTGFiZWwobmFtZTogc3RyaW5nKTpib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuaGFzKG5hbWUpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICAgKiBMSVNURU5FUiBNRVRIT0RTXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQWRkIGEgbGlzdGVuZXIgY2FsbGJhY2sgdGhhdCBmaXJlcyBhbnkgdGltZSBhIGxvZyBvZiBvbmUgb2YgdGhlIHByb3ZpZGVkIGxldmVscyBpcyBnZW5lcmF0ZWQuXG4gICAqL1xuICBwdWJsaWMgYWRkTGlzdGVuZXIobGV2ZWxzOiBMZXZlbHMsIGNiOiBMaXN0ZW5lckNhbGxiYWNrKTpMaXN0ZW5lckxvY2F0aW9ucyB7XG4gICAgY29uc3QgbHZscyA9IGZvcm1hdExldmVscyh0aGlzLmNmZy5nbG9iYWxfY2ZnLCBsZXZlbHMpO1xuICAgIHJldHVybiBsdmxzLm1hcCgobHZsOiBudW1iZXIpID0+IHtcblxuICAgICAgLy8gR2V0IHRoZSBtYXAgZm9yIHRoZSBsaXN0ZW5lcnMgb2YgdGhlIGdpdmVuIGxvZyBsZXZlbC5cbiAgICAgIGNvbnN0IGxldmVsX21hcCA9IHRoaXMubGlzdGVuZXJCdWNrZXQobHZsKTtcbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIGZvciB0aGUgbGlzdGVuZXIuXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYXNzaWduSWQoKTtcblxuICAgICAgLy8gQXNzaWduIGFuIElEIHRvIHRoZSBsaXN0ZW5lciBmb3IgbGF0ZXIgdGVhcmRvd24uXG4gICAgICBsZXZlbF9tYXAuc2V0KGlkLCBjYik7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQobHZsLCBsZXZlbF9tYXApO1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIGxpc3RlbmVyIGxvY2F0aW9uIHR1cGxlXG4gICAgICByZXR1cm4gW2x2bCwgaWRdO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsb2cgbGlzdGVuZXJzIGF0IHRoZSBnaXZlbiBidWNrZXQgbG9jYXRpb25zLlxuICAgKi8gXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lcihsb2NhdGlvbnM6IExpc3RlbmVyTG9jYXRpb25zKTp2b2lkIHtcbiAgICBsb2NhdGlvbnMuZm9yRWFjaCgoW2x2bF9pZCwgaWRdKSA9PiB7XG4gICAgICBjb25zdCBsZXZlbCA9IHRoaXMubGlzdGVuZXJzLmdldChsdmxfaWQpO1xuICAgICAgbGV2ZWw/LmRlbGV0ZShpZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZSBhbnkgbG9nIGxpc3RlbmVycyBmb3IgdGhlIHByb3ZpZGVkIGxvZy5cbiAgICovXG4gIHB1YmxpYyBmaXJlTGlzdGVuZXJzKGxvZzogRmluYWxMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uKTp2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5nZXQobG9nLmxldmVsKT8uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICBsaXN0ZW5lcih7IC4uLmxvZywgLi4uZGVmIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICAgKiBHTE9CQUwgRklMVEVSIE1FVEhPRFNcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbG9nIGluc3RhbmNlIHNob3VsZCBiZSBcbiAgICogYWxsb3dlZCB0byBwcmludC5cbiAgICovXG4gIHB1YmxpYyBsb2dHbG9iYWxseUFsbG93ZWQobG9nOiBGaW5hbExvZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5oaWRlQWxsXG4gICAgICAmJiB0aGlzLmxldmVsQWxsb3dlZChsb2cpXG4gICAgICAmJiB0aGlzLmxhYmVsQWxsb3dlZChsb2cpXG4gICAgICAmJiB0aGlzLm5hbWVzcGFjZUFsbG93ZWQobG9nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGF0IHRoZSBjdXJyZW50IGxldmVsIHNldCBvbiB0aGUgbG9nIGlzIGFsbG93ZWQgYmFzZWQgb25cbiAgICogdGhlIGdsb2JhbCBmaWx0ZXIgcnVsZXMuXG4gICAqL1xuICBwcml2YXRlIGxldmVsQWxsb3dlZChsb2c6IEZpbmFsTG9nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyQWxsb3dlZCgnbGV2ZWwnLCAoZmlsdGVyLCBmdW5jKSA9PiB7XG4gICAgICBjb25zdCByYXdfc291cmNlID0gdGhpcy5jZmcuZmlsdGVycz8ubGV2ZWw/LltmaWx0ZXJdID8/IFtdIGFzIG51bWJlcltdO1xuICAgICAgY29uc3Qgc291cmNlID0gcmF3X3NvdXJjZSA9PT0gJyonID8gYWxsTGV2ZWxzKHRoaXMuY2ZnLmdsb2JhbF9jZmcpIDogcmF3X3NvdXJjZTtcbiAgICAgIHJldHVybiB0aGlzW2Z1bmNdPG51bWJlcj4oc291cmNlLCBsb2cubGV2ZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoYXQgdGhlIGN1cnJlbnQgbGFiZWwgc2V0IG9uIHRoZSBsb2cgaXMgYWxsb3dlZCBiYXNlZCBvblxuICAgKiB0aGUgZ2xvYmFsIGZpbHRlciBydWxlcy5cbiAgICovXG4gIHByaXZhdGUgbGFiZWxBbGxvd2VkKGxvZzogRmluYWxMb2cpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJBbGxvd2VkKCdsYWJlbCcsIChmaWx0ZXIsIGZ1bmMpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuY2ZnLmZpbHRlcnM/LmxhYmVsPy5bZmlsdGVyXSA/PyBbXSBhcyBzdHJpbmdbXTtcbiAgICAgIHJldHVybiB0aGlzW2Z1bmNdPHN0cmluZz4oc291cmNlLCBsb2c/LmxhYmVsVmFsPy5uYW1lID8/ICcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGF0IGF0IGxlYXN0IG9uZSBvZiB0aGUgY3VycmVudCBuYW1lc3BhY2VzIHNldCBvbiB0aGUgbG9nXG4gICAqIGlzIGFsbG93ZWQgYmFzZWQgb24gdGhlIGdsb2JhbCBmaWx0ZXIgcnVsZXMuXG4gICAqL1xuICBwcml2YXRlIG5hbWVzcGFjZUFsbG93ZWQobG9nOiBGaW5hbExvZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckFsbG93ZWQoJ25hbWVzcGFjZScsIChmaWx0ZXIsIGZ1bmMpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuY2ZnLmZpbHRlcnM/Lm5hbWVzcGFjZT8uW2ZpbHRlcl0gPz8gW10gYXMgc3RyaW5nW107XG4gICAgICBjb25zdCB0YXJnZXQgPSBsb2cubmFtZXNwYWNlVmFsO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBpZiAoaXNTdHJpbmcodGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybiB0aGlzW2Z1bmNdPHN0cmluZz4oc291cmNlLCB0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5hbWVzcGFjZSBsb2cgdmFsdWUgaXMgYW4gYXJyYXkuIENoZWNrIGVhY2ggbmFtZXNwYWNlIHZhbHVlLlxuICAgICAgICAgIHJldHVybiB0YXJnZXQubWFwKHZhbCA9PiB0aGlzW2Z1bmNdPHN0cmluZz4oc291cmNlLCB2YWwpKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIHRoZSBmaWx0ZXIgbWV0aG9kcyB0byBoYW5kbGUgc29tZSBiYXNpYyBzZXR1cCBmb3IgdmFsaWRhdGluZ1xuICAgKiB0aGUgZmlsdGVyIHZhbHVlcy5cbiAgICovXG4gIHByaXZhdGUgZmlsdGVyQWxsb3dlZChjYXRlZ29yeTogR2xvYmFsRmlsdGVyLCBjYjogRmlsdGVyQWxsb3dlZENhbGxiYWNrKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZmlsdGVyX3R5cGUgPSB0aGlzLmZpbHRlclR5cGUoY2F0ZWdvcnkpO1xuICAgIGlmIChmaWx0ZXJfdHlwZSkge1xuICAgICAgY29uc3QgWyBmaWx0ZXIsIGZ1bmMgXSA9IGZpbHRlcl90eXBlO1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2IoZmlsdGVyLCBmdW5jKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHR1cGxlcyBpbmRpY2F0aW5nIHdoYXQgZmlsdGVyIHR5cGUgaXMgYWN0aXZlLiBJbmNsdWRlIGdldHMgcHJlY2VkZW5jZSBvdmVyIGV4Y2x1ZGUuXG4gICAqL1xuICBwcml2YXRlIGZpbHRlclR5cGUoY2F0ZWdvcnk6IEdsb2JhbEZpbHRlcik6IFtcImluY2x1ZGVcIixcImlzSW5jbHVkZWRcIl18W1wiZXhjbHVkZVwiLFwiaXNOb3RFeGNsdWRlZFwiXXx1bmRlZmluZWQge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSB0aGlzLmZpbHRlcklzU2V0KCdpbmNsdWRlJywgY2F0ZWdvcnkpICA6IHJldHVybiBbJ2luY2x1ZGUnLCdpc0luY2x1ZGVkJ107XG4gICAgICBjYXNlIHRoaXMuZmlsdGVySXNTZXQoJ2V4Y2x1ZGUnLCBjYXRlZ29yeSkgIDogcmV0dXJuIFsnZXhjbHVkZScsJ2lzTm90RXhjbHVkZWQnXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXMgdGhlIGxvZyBpbiB0aGUgaW5jbHVkZWQgZmlsdGVyP1xuICAgKi9cbiAgcHJpdmF0ZSBpc0luY2x1ZGVkPFQ+KHNvdXJjZTogVFtdLCB2YWx1ZTogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzb3VyY2UubGVuZ3RoID4gMCAmJiBzb3VyY2UuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIElzIHRoZSBsb2cgbm90IGluIHRoZSBleGNsdWRlZCBmaWx0ZXI/XG4gICAqL1xuICBwcml2YXRlIGlzTm90RXhjbHVkZWQ8VD4oc291cmNlOiBUW10sIHZhbHVlOiBUKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHNvdXJjZS5sZW5ndGggPiAwICYmIHNvdXJjZS5pbmRleE9mKHZhbHVlKSA9PT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogSGFzIHRoZSB1c2VyIGRlZmluZWQgcnVsZXMgZm9yIGEgc3BlY2lmaWMgZmlsdGVyP1xuICAgKi9cbiAgcHJpdmF0ZSBmaWx0ZXJJc1NldCh0eXBlOiBcImluY2x1ZGVcInxcImV4Y2x1ZGVcIiwgZmlsdGVyOiBHbG9iYWxGaWx0ZXIpOmJvb2xlYW4ge1xuICAgIGNvbnN0IGluY2x1ZGVfcHJvcCA9IHRoaXMuY2ZnPy5maWx0ZXJzPy5bZmlsdGVyXT8uW3R5cGVdID8/IFtdO1xuICAgIHJldHVybiBpbmNsdWRlX3Byb3AubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAgICogSEVMUEVSIE1FVEhPRFNcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHdWFyYW50ZWUgdGhhdCBhIGxpc3RlbmVyIGJ1Y2tldCBleGlzdHMgZm9yIHRoZSBnaXZlbiBsb2cgbGV2ZWwgYW5kIHJldHVybiB0aGUgYnVja2V0LlxuICAgKi9cbiAgcHJpdmF0ZSBsaXN0ZW5lckJ1Y2tldChsdmw6IG51bWJlcik6TGlzdGVuZXJCdWNrZXQge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKGx2bCkpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNldChsdmwsIG5ldyBNYXAoKSk7XG4gICAgfVxuICAgIC8vIE92ZXJyaWRlIFRTIGJlY2F1c2UgdGhlIExpc3RlbmVyQnVja2V0IGlzIGd1YXJhbnRlZWQgYnkgdGhlIGNvbmRpdGlvbiBhYm92ZS5cbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMuZ2V0KGx2bCkgYXMgTGlzdGVuZXJCdWNrZXQ7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVtZW50IHRoZSBJRCBjb3VudGVyIGFuZCByZXR1cm4gdGhlIG5ldyB2YWx1ZS5cbiAgICovXG4gIHByaXZhdGUgYXNzaWduSWQoKTpudW1iZXIge1xuICAgIHJldHVybiAodGhpcy5pZF9jb3VudGVyICs9IDEpO1xuICB9XG5cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdGVybWluYXRvcnMnOyIsImltcG9ydCB7XG4gIExvZywgRmluYWxMb2csIExvZ0Z1bmN0aW9uLFxuICBDdXN0b21Mb2dGdW5jdGlvbixcbiAgRGVmYXVsdHMsIExvZ0xldmVsRGVmaW5pdGlvbiwgVGVybWluYXRlZExvZyxcbn0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IHByaW50IH0gZnJvbSAnfi9wcmludGVycyc7XG5pbXBvcnQgeyBhbGxvd2VkLCBldmFsUGFzc2VzIH0gZnJvbSAnfi9jb25kaXRpb25zJztcbmltcG9ydCB7IG11dGF0ZVByb3BzIH0gZnJvbSAnfi91dGlsJztcbmltcG9ydCB7IHNoZWRFeGlzdHMgfSBmcm9tICd+L3NoZWQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnfi9nbG9iYWwnO1xuXG4vKipcbiAqIFNlYWxzIHRoZSBjb25maWd1cmF0aW9uIG9mIGEgbG9nIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdFxuICogY29uc3RydWN0cyBhIG5ldyBsb2cgd2l0aCB0aGUgc2FtZSBjb25maWd1cmF0aW9uLlxuICogXG4gKiAqKkV4YW1wbGU6KipcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHNlYWxlZCA9IGFkemUoeyB1c2VfZW1vamk6IHRydWUgfSkubnMoJ3NlYWxlZCcpLmxhYmVsKCdzZWFsZWQtbGFiZWwnKS5zZWFsKCk7XG4gKiBzZWFsZWQoKS5zdWNjZXNzKCdTdWNjZXNzIScpOyAvLyAtPiBwcmludHMgXCIjc2VhbGVkIFtzZWFsZWQtbGFiZWxdIFN1Y2Nlc3MhXCJcbiAqIHNlYWxlZCgpLmxvZygnQW5vdGhlciBsb2cuJyk7IC8vIC0+IHByaW50cyBcIiNzZWFsZWQgW3NlYWxlZC1sYWJlbF0gQW5vdGhlciBsb2cuXCJcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VhbCh0aGlzOiBMb2cpOigpID0+IExvZyB7XG4gIC8vIFJ1biB0aGUgbW9kaWZpZXIgcXVldWUgdG8gYXBwbHkgdGhlaXIgcmVzdWx0c1xuICBydW5Nb2RpZmllclF1ZXVlKHRoaXMubW9kaWZpZXJRdWV1ZSk7XG4gIC8vIENsZWFyIHRoZSBxdWV1ZSBhcyB0byBub3QgcmVwZWF0IHRoZSBhY3Rpb25zIHdoZW4gdGhlIHN1YnNlcXVlbnQgbG9ncyBhcmUgdGVybWluYXRlZC5cbiAgdGhpcy5tb2RpZmllclF1ZXVlID0gW107XG4gIHJldHVybiAoKSA9PiAoeyAuLi50aGlzIH0pO1xufVxuXG4vKipcbiAqIEZvbGxvd2luZyB0aGUgTURDIChNYXBwZWQgRGlhZ25vc3RpYyBDb250ZXh0KSBwYXR0ZXJuIHRoaXMgbWV0aG9kIGVuYWJsZXMgeW91IHRvIGNyZWF0ZVxuICogYSB0aHJlYWQgZm9yIGFkZGluZyBjb250ZXh0IGZyb20gZGlmZmVyZW50IHNjb3BlcyBiZWZvcmUgZmluYWxseSB0ZXJtaW5hdGluZyB0aGUgbG9nLlxuICogXG4gKiBJbiBvcmRlciB0byBjcmVhdGUgYSB0aHJlYWQsIHRoaXMgbG9nIG11c3Qgc3BlY2lmeSBhIGxhYmVsIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGxpbmsgdGhlXG4gKiBjb250ZXh0IGFuZCB5b3VyIGVudmlyb25tZW50IG11c3QgaGF2ZSBhICoqc2hlZCoqIGNyZWF0ZWQuXG4gKiBcbiAqICoqRXhhbXBsZToqKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgYWR6ZSwgY3JlYXRlU2hlZCB9IGZyb20gJ2FkemUnO1xuICogXG4gKiBjb25zdCBzaGVkID0gY3JlYXRlU2hlZCgpO1xuICogXG4gKiAvLyBDcmVhdGluZyBhIHNoZWQgbGlzdGVuZXIgaXMgYSBncmVhdCB3YXkgdG8gZ2V0IG1ldGEgZGF0YSBmcm9tIHlvdXJcbiAqIC8vIHRocmVhZGVkIGxvZ3MgdG8gd3JpdGUgdG8gZGlzayBvciBwYXNzIHRvIGFub3RoZXIgcGx1Z2luLCBsaWJyYXJ5LCBcbiAqIC8vIG9yIHNlcnZpY2UuXG4gKiBzaGVkLmFkZExpc3RlbmVyKFsxLDIsMyw0LDUsNiw3LDhdLCAobG9nKSA9PiB7XG4gKiAgIC8vIERvIHNvbWV0aGluZyB3aXRoIGBsb2cuY29udGV4dC5hZGRlZGAgb3IgYGxvZy5jb250ZXh0LnN1YnRyYWN0ZWRgLlxuICogfSk7XG4gKiBcbiAqIGZ1bmN0aW9uIGFkZChhLCBiKSB7XG4gKiAgIGNvbnN0IGFuc3dlciA9IGEgKyBiO1xuICogICBhZHplKCkubGFiZWwoJ2ZvbycpLnRocmVhZCgnYWRkZWQnLCB7IGEsIGIsIGFuc3dlciB9KTtcbiAqICAgcmV0dXJuIGFuc3dlcjtcbiAqIH1cbiAqIFxuICogZnVuY3Rpb24gc3VidHJhY3QoeCwgeSkge1xuICogICBjb25zdCBhbnN3ZXIgPSB4IC0geTtcbiAqICAgYWR6ZSgpLmxhYmVsKCdmb28nKS50aHJlYWQoJ3N1YnRyYWN0ZWQnLCB7IHgsIHksIGFuc3dlciB9KTtcbiAqICAgcmV0dXJuIGFuc3dlcjtcbiAqIH1cbiAqIFxuICogYWRkKDEsIDIpO1xuICogc3VidHJhY3QoNCwgMyk7XG4gKiBcbiAqIGFkemUoKS5sYWJlbCgnZm9vJykuZHVtcCgpLmluZm8oJ1Jlc3VsdHMgZnJvbSBvdXIgdGhyZWFkJyk7XG4gKiAvLyBJbmZvID0+IFJlc3VsdHMgZnJvbSBvdXIgdGhyZWFkLCB7IGE6IDEsIGI6IDIsIGFuc3dlcjogMyB9LCB7IHg6IDQsIHk6IDMsIGFuc3dlcjogMSB9XG4gKiBcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyZWFkKHRoaXM6IExvZywga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgLy8gQ2hlY2sgaWYgdGhlIGxvZyBoYXMgYSBsYWJlbC4gSWYgbm90LCBjb25zb2xlLndhcm4gdGhlIHVzZXIuXG4gIC8vIElmIHRoZSBsb2cgaGFzIGEgbGFiZWwsIGF0dGFjaCB0aGUgY29udGV4dCB0byB0aGUgbGFiZWwuXG4gIHJ1bk1vZGlmaWVyUXVldWUodGhpcy5tb2RpZmllclF1ZXVlKTtcbiAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICB0aGlzLmxhYmVsVmFsLmNvbnRleHRba2V5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybignVGhyZWFkIGNvbnRleHQgd2FzIG5vdCBhZGRlZCEgVGhyZWFkcyBtdXN0IGhhdmUgYSBsYWJlbC4nKTtcbiAgfVxufVxuXG4vKipcbiAqIENsb3NlcyBhIHRocmVhZCBhc3NpZ25lZCB0byB0aGUgbG9nIGJ5IGNsZWFyaW5nIHRoZSBjb250ZXh0IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlKHRoaXM6IExvZyk6IHZvaWQge1xuICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgIHRoaXMubGFiZWxWYWwuY29udGV4dCA9IHt9O1xuICB9XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIGNvbnNvbGUuY2xlYXIoKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKHRoaXM6IExvZyk6IHZvaWQge1xuICBjb25zb2xlLmNsZWFyKCk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIGNsZWFyKCkgd2hpY2ggaXMgYW4gYWxpYXMgZm9yIGNvbnNvbGUuY2xlYXIoKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNscih0aGlzOiBMb2cpOiB2b2lkIHtcbiAgdGhpcy5jbGVhcigpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHRlcm1pbmF0aW5nIGxvZyBtZXRob2QgdGhlIHNwZWNpZmllZCBsb2cgbGV2ZWwgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ01ldGhvZChsZXZlbE5hbWU6IHN0cmluZyk6IExvZ0Z1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IExvZywgLi4uYXJnczogYW55W10pOlRlcm1pbmF0ZWRMb2cge1xuICAgIHJldHVybiBleGVjdXRpb25QaXBlbGluZSh0aGlzLCB0aGlzLmNmZywgZ2V0RGVmaW5pdGlvbih0aGlzLmNmZywgJ2xvZ19sZXZlbHMnLCBsZXZlbE5hbWUpLCBhcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kIHRoYXQgZW5hYmxlcyB0aGUgdXNlciB0byBzcGVjaWZ5IGEgY3VzdG9tXG4gKiBsb2cgbGV2ZWwgYnkga2V5IGFzIHRoZSBmb3JtYXQgZm9yIHRoZSBsb2cuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21NZXRob2QoKTpDdXN0b21Mb2dGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbih0aGlzOiBMb2csIGxldmVsTmFtZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IFRlcm1pbmF0ZWRMb2cge1xuICAgIHJldHVybiBleGVjdXRpb25QaXBlbGluZSh0aGlzLCB0aGlzLmNmZywgZ2V0RGVmaW5pdGlvbih0aGlzLmNmZywgJ2N1c3RvbV9sZXZlbHMnLCBsZXZlbE5hbWUpLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgbG9nIGxldmVsIGRlZmluaXRpb24gZnJvbSB0aGUgbG9nIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldERlZmluaXRpb24oY2ZnOiBEZWZhdWx0cywgdHlwZTogXCJsb2dfbGV2ZWxzXCJ8XCJjdXN0b21fbGV2ZWxzXCIsIGxldmVsTmFtZTogc3RyaW5nKTogTG9nTGV2ZWxEZWZpbml0aW9ufHVuZGVmaW5lZCB7XG4gIGNvbnN0IHNoZWQgPSBlbnYuJHNoZWQ7XG4gIGxldCBkZWZpbml0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGlmIChzaGVkRXhpc3RzKHNoZWQpICYmIHNoZWQuaGFzT3ZlcnJpZGVzKSB7XG4gICAgZGVmaW5pdGlvbiA9IHNoZWQub3ZlcnJpZGVzPy5bdHlwZV0/LltsZXZlbE5hbWVdO1xuICB9IGVsc2Uge1xuICAgIGRlZmluaXRpb24gPSBjZmdbdHlwZV1bbGV2ZWxOYW1lXTtcbiAgfVxuICBcbiAgcmV0dXJuIGRlZmluaXRpb24gPyB7IC4uLmRlZmluaXRpb24sIGxldmVsTmFtZSB9IDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRoZSBwcmltYXJ5IGV4ZWN1dGlvbiBwaXBlbGluZSBmb3IgdGVybWluYXRpbmcgbG9nIG1ldGhvZHMuXG4gKi9cbmZ1bmN0aW9uIGV4ZWN1dGlvblBpcGVsaW5lKGxvZzogTG9nLCBjZmc6IERlZmF1bHRzLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbnx1bmRlZmluZWQsIGFyZ3M6IGFueVtdKTogVGVybWluYXRlZExvZyB7XG4gIGlmIChkZWYgJiYgYWxsb3dlZChjZmcsIGRlZikpIHtcblxuICAgIC8vIEFwcGx5IG1vZGlmaWVycyBpbiB0aGUgcHJvcGVyIG9yZGVyLlxuICAgIHJ1bk1vZGlmaWVyUXVldWUobG9nLm1vZGlmaWVyUXVldWUpO1xuXG4gICAgLy8gQ2hlY2sgdGhlIHRlc3QgbW9kaWZpZXJzLlxuICAgIGlmIChldmFsUGFzc2VzKGxvZykpIHtcblxuICAgICAgLy8gU2F2ZSB0ZXJtaW5hdG9yIHByb3BzIGZvciByZWNhbGwgcHVycG9zZXNcbiAgICAgIGNvbnN0IGZpbmFsX2xvZyA9IG11dGF0ZVByb3BzPEZpbmFsTG9nPihsb2csIFsgWydhcmdzJywgYXJnc10sIFsnbGV2ZWwnLCBkZWYubGV2ZWxdIF0pO1xuXG4gICAgICAvLyBJZiBhIGdsb2JhbCBjb250ZXh0IGV4aXN0cywgY2hlY2sgaWYgdGhpcyBsb2cgaXMgYWxsb3dlZC5cbiAgICAgIGNvbnN0IGdsb2JhbGx5X2FsbG93ZWQgPSBlbnYuJHNoZWQ/LmxvZ0dsb2JhbGx5QWxsb3dlZChmaW5hbF9sb2cpID8/IHRydWU7XG5cbiAgICAgIGlmIChnbG9iYWxseV9hbGxvd2VkKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgbG9nXG4gICAgICAgIGNvbnN0IHJlbmRlciA9IHByaW50KGZpbmFsX2xvZywgZGVmLCBhcmdzKTtcbiAgICAgIFxuICAgICAgICAvLyBGaXJlIGxvZyBldmVudHNcbiAgICAgICAgc3RvcmUoZmluYWxfbG9nKTtcbiAgICAgICAgZmlyZUxpc3RlbmVycyhmaW5hbF9sb2csIGRlZik7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSB0ZXJtaW5hdGVkIGxvZyBvYmplY3QgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICAgICAgcmV0dXJuIHsgbG9nOiBmaW5hbF9sb2csIHJlbmRlciB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgdGVybWluYXRlZCBsb2cgb2JqZWN0IGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gIHJldHVybiB7IGxvZywgcmVuZGVyOiBudWxsIH07XG59XG5cbi8qKlxuICogRXhlY3V0ZXMgYWxsIG9mIHRoZSBsb2cgbW9kaWZpZXIgZnVuY3Rpb25zIHdpdGhpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIHJ1bk1vZGlmaWVyUXVldWUocXVldWU6IEZ1bmN0aW9uW10pOiB2b2lkIHtcbiAgcXVldWUuZm9yRWFjaChmdW5jID0+IGZ1bmMoKSk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuICogTG9nIEV2ZW50c1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKlxuICogU3RvcmVzIHRoaXMgbG9nIGluIHRoZSBTaGVkIGlmIHRoZSBTaGVkIGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlKGxvZzogRmluYWxMb2cpOiB2b2lkIHtcbiAgY29uc3Qgc2hlZCA9IGVudi4kc2hlZDtcbiAgaWYgKHNoZWRFeGlzdHMoc2hlZCkpIHtcbiAgICBzaGVkLnN0b3JlKGxvZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBGaXJlcyBsaXN0ZW5lcnMgZm9yIHRoaXMgbG9nIGluc3RhbmNlIGlmIGEgU2hlZCBleGlzdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXJlTGlzdGVuZXJzKGxvZzogRmluYWxMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uKTogdm9pZCB7XG4gIGNvbnN0IHNoZWQgPSBlbnYuJHNoZWQ7XG4gIGlmIChzaGVkRXhpc3RzKHNoZWQpKSB7XG4gICAgc2hlZC5maXJlTGlzdGVuZXJzKGxvZywgZGVmKTtcbiAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vdXRpbCc7IiwiaW1wb3J0IHsgTG9nVGltZXN0YW1wLCBEZWZhdWx0cywgTG9nTGV2ZWxzLCBGaWx0ZXJWYWx1ZSB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiB0aGUgcHJvdmlkZWQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbENhcHMoc3RyOiBzdHJpbmcpOnN0cmluZyB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbi8qKlxuICogQXBwbGllcyBwcm9wZXJ0eSBtdXRhdGlvbnMgdG8gdGhlIHByb3ZpZGVkIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZVByb3BzPE8+KG9iajogYW55LCBtdXRhdGlvbnM6IEFycmF5PFtzdHJpbmcsIGFueV0+KTpPIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKFtwcm9wLCB2YWxdKSA9PiBvYmpbcHJvcF0gPSB2YWwpO1xuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB5b3VyIGxvZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzdGFtcCgpOkxvZ1RpbWVzdGFtcCB7XG4gIGNvbnN0IHVuaXhNaWxsaSA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1bml4TWlsbGkpO1xuICBjb25zdCB1dGMgPSBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gIHJldHVybiB7IHVuaXhNaWxsaSwgdXRjIH07XG59XG5cbi8qKlxuICogR2V0cyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoUGFyYW1zKCk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbGV2ZWwgdmFsdWUgb2YgJyonIHRvIGFuIGFycmF5IG9mIG51bWJlcnMgdXAgdG8gdGhlIGhpZ2hlc3RcbiAqIHZhbHVlIGRlZmluZWQgYnkgdGhlIHVzZXIgY29uZmlndXJhdGlvbi4gSWYgbGV2ZWxzIGlzIGFscmVhZHkgYSBudW1iZXIgYXJyYXlcbiAqIGl0IGlzIHJldHVybmVkIHVuY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdExldmVscyhjZmc6IERlZmF1bHRzfG51bGwsIGxldmVsczogXCIqXCJ8bnVtYmVyW118dW5kZWZpbmVkKTogbnVtYmVyW10ge1xuICBpZiAobGV2ZWxzID09PSBcIipcIikge1xuICAgIHJldHVybiBhbGxMZXZlbHMoY2ZnKTtcbiAgfVxuICByZXR1cm4gbGV2ZWxzID8/IDxudW1iZXJbXT5bXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG51bWJlcnMgZnJvbSAwIHRvIHRoZSBoaWdoZXN0IHZhbHVlIGZvdW5kIGluIHRoZSBcbiAqIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGxMZXZlbHMoY2ZnOiBEZWZhdWx0c3xudWxsKTogbnVtYmVyW10ge1xuICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5bOCwgLi4ubGV2ZWxzRnJvbUNvbmZpZyhjZmc/LmN1c3RvbV9sZXZlbHMgPz8ge30pXSk7XG4gIHJldHVybiBjcmVhdGVBcnJheU9mTnVtYmVycygwLCBtYXgpO1xufVxuXG4vKipcbiAqIEdldCBhbGwgbGV2ZWwgdmFsdWVzIGZyb20gYSBjb25maWcgb2YgdHlwZSBMb2dMZXZlbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbHNGcm9tQ29uZmlnKGx2bHM6IExvZ0xldmVsc3xQYXJ0aWFsPExvZ0xldmVscz4pOiBudW1iZXJbXSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGx2bHMpLm1hcChsdmwgPT4gbHZsPy5sZXZlbCkuZmlsdGVyKGlzRGVmaW5lZCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGFycmF5IG9mIG51bWJlciBjb250YWluaW5nIGV2ZXJ5IG51bWJlciBmcm9tIHRoZSBzdGFydCB2YWx1ZSB0byBlbmQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcnJheU9mTnVtYmVycyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlcltdIHtcbiAgbGV0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICBhcnIucHVzaChpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG4vKipcbiAqIFR5cGUgR3VhcmQgdG8gY2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgU3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsOiBhbnkpOiB2YWwgaXMgc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIFR5cGUgR3VhcmQgdG8gY2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIEFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh2YWw6IGFueSk6IHZhbCBpcyBbXSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG59XG5cbi8qKlxuICogVHlwZSBHdWFyZCB0aGF0IHZhbGlkYXRlcyB0aGF0IHRoZSBnaXZlbiB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZWZpbmVkPFQ+KHZhbDogVHx1bmRlZmluZWQpOiB2YWwgaXMgVCB7XG4gIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9
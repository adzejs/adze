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
 * 1. URL Param to control the Adze environment (param name is configurable).
 * 2. Analytics and Reporting support.
 * 3. Remote server for receiving and analyzing logs.
 * 4. Attach meta data to logs (for listeners to take advantage of).
 * 5. Add default meta data to the configuration of the log.
 * 6. Persist logs in localStorage (configurable, off by default).
 * 7. Add easy functions for transporting logging data to various sources.
 *     a. Write to a file.
 *     b. Write to local storage.
 *     c. Push to an API endpoint.
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
    modifierQueue: [],
    printer: _printers__WEBPACK_IMPORTED_MODULE_2__["printLog"],
    attention: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'attention'),
    error: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'error'),
    warn: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'warn'),
    info: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'info'),
    fail: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'fail'),
    success: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'success'),
    log: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'log'),
    debug: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'debug'),
    verbose: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'verbose'),
    custom: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["customMethod"])(cfg),
    seal: _terminators__WEBPACK_IMPORTED_MODULE_0__["seal"],
    count: _modifiers__WEBPACK_IMPORTED_MODULE_1__["count"],
    countReset: _modifiers__WEBPACK_IMPORTED_MODULE_1__["countReset"],
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
    trace: _modifiers__WEBPACK_IMPORTED_MODULE_1__["trace"],
    time: _modifiers__WEBPACK_IMPORTED_MODULE_1__["time"],
    timeNow: _modifiers__WEBPACK_IMPORTED_MODULE_1__["timeNow"],
    timeEnd: _modifiers__WEBPACK_IMPORTED_MODULE_1__["timeEnd"]
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
 * Verify that this log is not in a test environment and prevent
 * termination if it is.
 */

function notTestEnv() {
  if (_global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    return true;
  }

  return (_global__WEBPACK_IMPORTED_MODULE_0__["env"] === null || _global__WEBPACK_IMPORTED_MODULE_0__["env"] === void 0 ? void 0 : _global__WEBPACK_IMPORTED_MODULE_0__["env"].ADZE_ENV) !== 'test';
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
    return log.namespaceVal === ns;
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
var envIsWindow = function envIsWindow(env) {
  return (typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window)) !== undefined;
};
var isChromeVar = false;
var isFirefoxVar = false;
var isSafariVar = false;

if (envIsWindow(env)) {
  var _env$navigator, _env$navigator2, _env$navigator3;

  isChromeVar = (env === null || env === void 0 ? void 0 : (_env$navigator = env.navigator) === null || _env$navigator === void 0 ? void 0 : _env$navigator.userAgent.indexOf("Chrome")) > -1;
  isFirefoxVar = (env === null || env === void 0 ? void 0 : (_env$navigator2 = env.navigator) === null || _env$navigator2 === void 0 ? void 0 : _env$navigator2.userAgent.indexOf("Firefox")) > -1;
  isSafariVar = (env === null || env === void 0 ? void 0 : (_env$navigator3 = env.navigator) === null || _env$navigator3 === void 0 ? void 0 : _env$navigator3.userAgent.indexOf("Safari")) > -1 && !isChromeVar;
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
/*! exports provided: dir, dirxml, table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirxml", function() { return dirxml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
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
      name: name
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
/*! exports provided: time, timeNow, timeEnd, count, countReset, countClear, dir, dirxml, table, group, groupCollapsed, groupEnd, label, namespace, ns, trace, meta, modifier, prependModifier, assert, test */
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

function printLog(log, def, use_emoji, args) {
  var _ref = [def.method, fLeader(def, use_emoji, args), log.cfg.base_style + def.style, fMeta(log, use_emoji)],
      method = _ref[0],
      leader = _ref[1],
      style = _ref[2],
      meta = _ref[3];
  var render_args = meta === '' ? [leader, style].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)) : [leader, style, meta].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, method, render_args));
}
function printGroup(log, def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args), log.cfg.base_style + def.style];
  var render_args = typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, 'group', render_args));
}
function printGroupCollapsed(log, def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args), log.cfg.base_style + def.style];
  var render_args = typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, 'groupCollapsed', render_args));
} // ------- PRINT FORMATTERS -------- //

function fLeader(def, use_emoji, args) {
  return " %c".concat(fEmoji(def, use_emoji), " ").concat(fName(def.levelName), "(").concat(args.length, ")");
}

function fEmoji(def, use_emoji) {
  var _env$$shed, _env$$shed$overrides;

  return ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) || use_emoji ? " ".concat(def.emoji) : '';
}

function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_3__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}

function fMeta(log, use_emoji) {
  return "".concat(fNamespace(log)).concat(fLabel(log)).concat(fTime(log, use_emoji)).concat(fCount(log)).concat(fTest(log, use_emoji));
}

function fTime(log, use_emoji) {
  var _ref2, _log$labelVal$timeNow, _log$labelVal, _log$labelVal2, _env$$shed2, _env$$shed2$overrides;

  var label_txt = "".concat((_ref2 = (_log$labelVal$timeNow = (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.timeNow) !== null && _log$labelVal$timeNow !== void 0 ? _log$labelVal$timeNow : (_log$labelVal2 = log.labelVal) === null || _log$labelVal2 === void 0 ? void 0 : _log$labelVal2.timeEllapsed) !== null && _ref2 !== void 0 ? _ref2 : '');
  return label_txt !== '' ? " (".concat(((_env$$shed2 = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed2 === void 0 ? void 0 : (_env$$shed2$overrides = _env$$shed2.overrides) === null || _env$$shed2$overrides === void 0 ? void 0 : _env$$shed2$overrides.use_emoji) || use_emoji ? '⏱' : '').concat(label_txt, ") ") : '';
}

function fCount(log) {
  var _log$labelVal3;

  var count = (_log$labelVal3 = log.labelVal) === null || _log$labelVal3 === void 0 ? void 0 : _log$labelVal3.count;
  return count !== undefined ? "(Count: ".concat(count, ")") : '';
}

function fNamespace(log) {
  return log.namespaceVal ? "#".concat(log.namespaceVal, " ") : '';
}

function fLabel(log) {
  return log.labelVal ? "[".concat(log.labelVal.name, "] ") : '';
}

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

function printLog(log, def, use_emoji, args) {
  var _ref = [def.method, fLeader(def, use_emoji, args), def.terminal, fMeta(log, use_emoji)],
      method = _ref[0],
      leader = _ref[1],
      style = _ref[2],
      meta = _ref[3];
  var render_args = meta === '' ? [leader].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)) : [leader, style, meta].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, method, render_args));
}
function printGroup(log, def, use_emoji, args) {
  var render_args = setupPrintGroup(def, use_emoji, args);
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, 'group', render_args));
}
function printGroupCollapsed(log, def, use_emoji, args) {
  var render_args = setupPrintGroup(def, use_emoji, args);
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, 'groupCollapsed', render_args));
}

function setupPrintGroup(def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args)];
  return typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
} // ------- PRINT FORMATTERS -------- //


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

function fEmoji(emoji) {
  return " ".concat(emoji);
}

function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_4__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}

function fMeta(log, use_emoji) {
  return "".concat(fNamespace(log)).concat(fLabel(log)).concat(fTime(log, use_emoji)).concat(fCount(log)).concat(fTest(log, use_emoji));
}

function fTime(log, use_emoji) {
  var _ref2, _log$timeNowVal, _log$labelVal, _env$$shed, _env$$shed$overrides;

  var label_txt = "".concat((_ref2 = (_log$timeNowVal = log.timeNowVal) !== null && _log$timeNowVal !== void 0 ? _log$timeNowVal : (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.timeEllapsed) !== null && _ref2 !== void 0 ? _ref2 : '');
  return label_txt !== '' ? "(".concat(((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_3__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) || use_emoji ? '⏱' : '').concat(label_txt, ") ") : '';
}

function fCount(log) {
  var _log$labelVal2;

  var count = (_log$labelVal2 = log.labelVal) === null || _log$labelVal2 === void 0 ? void 0 : _log$labelVal2.count;
  return count !== undefined ? "(Count: ".concat(count, ")") : '';
}

function fNamespace(log) {
  return log.namespaceVal ? "#".concat(log.namespaceVal, " ") : '';
}

function fLabel(log) {
  return log.labelVal ? "[".concat(log.labelVal.name, "] ") : '';
}

function fTest(log, use_emoji) {
  return log.assertion === false ? "".concat(use_emoji ? '❌ ' : '', "Assertion failed:") : '';
}

/***/ }),

/***/ "./src/printers/shared.ts":
/*!********************************!*\
  !*** ./src/printers/shared.ts ***!
  \********************************/
/*! exports provided: print, printGroupEnd, printTable, printDir, printDirxml, printTrace, applyRender, toConsole */
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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/global.ts");


 // ------- PRINT ENTRY -------- //

function print(log, def, args) {
  var _env$$shed, _env$$shed$overrides;

  var use_emoji = ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) === true || log.cfg.use_emoji === true;
  return log.printer(log, def, use_emoji, args);
} // ------- PRINT METHODS -------- //

function printGroupEnd(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'groupEnd', []));
}
function printTable(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'table', args), false);
}
function printDir(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'dir', args), false);
}
function printDirxml(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'dirxml', args), false);
}
function printTrace(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'trace', args));
} // ------ Print to the console ------- //

function applyRender(log, method, args) {
  log.render = [method, args];
  return log.render;
}
function toConsole(render) {
  var spread = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var _render = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(render, 2),
      method = _render[0],
      args = _render[1];

  if (_global__WEBPACK_IMPORTED_MODULE_2__["env"].ADZE_ENV !== 'dev') {
    if (spread) {
      var _console;

      (_console = console)[method].apply(_console, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
    } else {
      console[method](args);
    }
  }

  return render;
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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/global */ "./src/global.ts");





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
  _global__WEBPACK_IMPORTED_MODULE_6__["env"].$shed = new Shed(config);
}
/**
 * Removes the shed from the environment's global context.
 */

function removeShed() {
  delete _global__WEBPACK_IMPORTED_MODULE_6__["env"].$shed;
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

    this.cfg = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(config, _defaults__WEBPACK_IMPORTED_MODULE_5__["shed_defaults"]);
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
      return this.cache.reduce(function (acc, log) {
        return acc.concat(levels.includes(log.level) ? [log] : []);
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

      return levels.map(function (lvl) {
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
      var _log$labelVal;

      return !this.hideAll && this.logAllowedLogic('label', log === null || log === void 0 ? void 0 : (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.name) && this.logAllowedLogic('level', log.level) && this.logAllowedLogic('namespace', log.namespaceVal);
    }
    /**
     * Determines if provided value passes user configured
     * global filters.
     */

  }, {
    key: "logAllowedLogic",
    value: function logAllowedLogic(category, value) {
      // If the value is undefined we cannot determine if it should hide the log
      if (value === undefined) {
        return true;
      }

      if (this.filterIsSet('include', category)) {
        return this.isIncluded(category, value);
      }

      if (this.filterIsSet('exclude', category)) {
        return this.isNotExcluded(category, value);
      }

      return true;
    }
    /**
     * Has the user has defined rules for a specific filter?
     */

  }, {
    key: "filterIsSet",
    value: function filterIsSet(type, filter) {
      var _this$cfg$filters$fil, _this$cfg, _this$cfg$filters, _this$cfg$filters$fil2;

      var include_prop = (_this$cfg$filters$fil = (_this$cfg = this.cfg) === null || _this$cfg === void 0 ? void 0 : (_this$cfg$filters = _this$cfg.filters) === null || _this$cfg$filters === void 0 ? void 0 : (_this$cfg$filters$fil2 = _this$cfg$filters[filter]) === null || _this$cfg$filters$fil2 === void 0 ? void 0 : _this$cfg$filters$fil2.include) !== null && _this$cfg$filters$fil !== void 0 ? _this$cfg$filters$fil : [];
      return include_prop.length > 0;
    }
    /**
     * Is the log in the included filter?
     */

  }, {
    key: "isIncluded",
    value: function isIncluded(filter, value) {
      var _this$cfg$filters$fil3, _this$cfg2, _this$cfg2$filters, _this$cfg2$filters$fi;

      var filter_vals = (_this$cfg$filters$fil3 = (_this$cfg2 = this.cfg) === null || _this$cfg2 === void 0 ? void 0 : (_this$cfg2$filters = _this$cfg2.filters) === null || _this$cfg2$filters === void 0 ? void 0 : (_this$cfg2$filters$fi = _this$cfg2$filters[filter]) === null || _this$cfg2$filters$fi === void 0 ? void 0 : _this$cfg2$filters$fi.include) !== null && _this$cfg$filters$fil3 !== void 0 ? _this$cfg$filters$fil3 : [];
      return filter_vals.length > 0 && filter_vals.indexOf(value) !== -1;
    }
    /**
     * Is the log not in the excluded filter?
     */

  }, {
    key: "isNotExcluded",
    value: function isNotExcluded(filter, value) {
      var _this$cfg$filters$fil4, _this$cfg3, _this$cfg3$filters, _this$cfg3$filters$fi;

      var filter_vals = (_this$cfg$filters$fil4 = (_this$cfg3 = this.cfg) === null || _this$cfg3 === void 0 ? void 0 : (_this$cfg3$filters = _this$cfg3.filters) === null || _this$cfg3$filters === void 0 ? void 0 : (_this$cfg3$filters$fi = _this$cfg3$filters[filter]) === null || _this$cfg3$filters$fi === void 0 ? void 0 : _this$cfg3$filters$fi.exclude) !== null && _this$cfg$filters$fil4 !== void 0 ? _this$cfg$filters$fil4 : [];
      return filter_vals.length > 0 && filter_vals.indexOf(value) === -1;
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
      var _this$cfg$filters$hid, _this$cfg4;

      return (_this$cfg$filters$hid = (_this$cfg4 = this.cfg) === null || _this$cfg4 === void 0 ? void 0 : _this$cfg4.filters.hideAll) !== null && _this$cfg$filters$hid !== void 0 ? _this$cfg$filters$hid : false;
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
/*! exports provided: seal, logMethod, customMethod, store, fireListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminators */ "./src/terminators/terminators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["seal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logMethod", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customMethod", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["customMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fireListeners", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["fireListeners"]; });



/***/ }),

/***/ "./src/terminators/terminators.ts":
/*!****************************************!*\
  !*** ./src/terminators/terminators.ts ***!
  \****************************************/
/*! exports provided: seal, logMethod, customMethod, store, fireListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return seal; });
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
 * Generates a terminating log method the specified log level name.
 */

function logMethod(cfg, levelName) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return executionPipeline(this, cfg, getDefinition(cfg, 'log_levels', levelName), args);
  };
}
/**
 * Generates a terminating log method that enables the user to specify a custom
 * log level by key as the format for the log.
 */

function customMethod(cfg) {
  return function (levelName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return executionPipeline(this, cfg, getDefinition(cfg, 'custom_levels', levelName), args);
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
      // Save terminator props for recall purposes
      var final_log = Object(_util__WEBPACK_IMPORTED_MODULE_3__["mutateProps"])(log, [['args', args], ['level', def.level]]); // Render the log

      var render = Object(_printers__WEBPACK_IMPORTED_MODULE_1__["print"])(final_log, def, args); // Fire log events

      store(final_log);
      fireListeners(final_log, def); // Return the terminated log object for testing purposes

      return {
        log: final_log,
        render: render
      };
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
/*! exports provided: initialCaps, mutateProps, timestamp, getSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["initialCaps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutateProps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["mutateProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["timestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"]; });



/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! exports provided: initialCaps, mutateProps, timestamp, getSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return initialCaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutateProps", function() { return mutateProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return getSearchParams; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);


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
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvYW5zaS1zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9icm93c2VyLXByb2Nlc3MtaHJ0aW1lL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS91dGlsLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWZhdWx0c2RlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9icm93c2VyLmpzIiwid2VicGFjazovL0FkemVMaWIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0FkemVMaWIvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2NvbnRyYWN0cy9Db25maWd1cmF0aW9uLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2NvbnRyYWN0cy9Mb2cudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fY29udHJhY3RzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL2RlZmF1bHRzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL3NoZWRfZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9hZHplLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvYnVuZGxlLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvY29uZGl0aW9ucy9jb25kaXRpb25zLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvY29uZGl0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2ZpbHRlcnMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2xhYmVsL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbGFiZWwvbGFiZWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvY291bnRpbmcudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvZm9ybWF0dGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9ncm91cGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9pZGVudGlmeWluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9tb2RpZmllci50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy90ZXN0aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL3RpbWluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL2Jyb3dzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9icm93c2VyL3ByaW50ZXJzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9ub2RlL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvbm9kZS9wcmludGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL3NoYXJlZC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3NoZWQudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy90ZXJtaW5hdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3Rlcm1pbmF0b3JzL3Rlcm1pbmF0b3JzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3V0aWwvdXRpbC50cyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImxvZ19sZXZlbCIsImxvZ19jYWNoZV9zaXplIiwidXNlX2Vtb2ppIiwiYmFzZV9zdHlsZSIsImN1c3RvbV9sZXZlbHMiLCJsb2dfbGV2ZWxzIiwidmVyYm9zZSIsImxldmVsIiwic3R5bGUiLCJ0ZXJtaW5hbCIsIm1ldGhvZCIsImVtb2ppIiwiZGVidWciLCJsb2ciLCJzdWNjZXNzIiwiZmFpbCIsImlzQ2hyb21lIiwiaW5mbyIsImlzU2FmYXJpIiwid2FybiIsImVycm9yIiwiYXR0ZW50aW9uIiwiZmlsdGVycyIsImhpZGVBbGwiLCJuYW1lc3BhY2UiLCJleGNsdWRlIiwiaW5jbHVkZSIsImxhYmVsIiwic2hlZF9kZWZhdWx0cyIsImNhY2hlX2xpbWl0IiwiZ2xvYmFsX2NmZyIsImRlZmF1bHRzRGVlcCIsInJlcXVpcmUiLCJhZHplIiwidXNlcl9jZmciLCJjZmciLCJ0cmFjZWFibGUiLCJtb2RpZmllclF1ZXVlIiwicHJpbnRlciIsInByaW50TG9nIiwibG9nTWV0aG9kIiwiY3VzdG9tIiwiY3VzdG9tTWV0aG9kIiwic2VhbCIsImNvdW50IiwiY291bnRSZXNldCIsImRpciIsImRpcnhtbCIsInRhYmxlIiwiYXNzZXJ0IiwidGVzdCIsImdyb3VwIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsIm5zIiwidHJhY2UiLCJ0aW1lIiwidGltZU5vdyIsInRpbWVFbmQiLCJidW5kbGUiLCJidW5kbGVfYXJyIiwiYnVuZGxlZF9sb2ciLCJwdXNoIiwiYWxsb3dlZCIsImRlZiIsImxldmVsQWN0aXZlIiwibm90VGVzdEVudiIsImV2YWxQYXNzZXMiLCJhc3NlcnRpb24iLCJ1bmRlZmluZWQiLCJleHByZXNzaW9uIiwiY29uc29sZSIsImlzQnJvd3NlciIsImVudiIsIkFEWkVfRU5WIiwiZmlsdGVyQWxsIiwibG9vcEJ1bmRsZSIsImZpbHRlck5hbWVzcGFjZSIsIm5hbWVzcGFjZVZhbCIsImZpbHRlckxhYmVsIiwibGJsIiwibGFiZWxWYWwiLCJuYW1lIiwiZmlsdGVyTGV2ZWxSYW5nZSIsImxvdyIsImhpZ2giLCJybmRyIiwiSW5maW5pdHkiLCJjYiIsImZvckVhY2giLCJyZW5kZXIiLCJyZXN1bHQiLCJhcmdzIiwiZ2xvYmFsIiwid2luZG93IiwiZW52SXNXaW5kb3ciLCJpc0Nocm9tZVZhciIsImlzRmlyZWZveFZhciIsImlzU2FmYXJpVmFyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsImlzRmlyZWZveCIsImdldExhYmVsIiwic2hlZCIsIiRzaGVkIiwic2hlZEV4aXN0cyIsImFkZExhYmVsIiwibW9kaWZpZXIiLCJjb3VudENsZWFyIiwicHJpbnREaXIiLCJwcmludERpcnhtbCIsInByaW50VGFibGUiLCJwcmludEdyb3VwIiwicHJpbnRHcm91cENvbGxhcHNlZCIsInByaW50R3JvdXBFbmQiLCJwcmVwZW5kTW9kaWZpZXIiLCJwcmludFRyYWNlIiwibWV0YSIsImRhdGEiLCJmdW5jIiwiY29uY2F0IiwiaHJ0aW1lIiwidGltZVN0YXJ0IiwidGltZV9ub3ciLCJmb3JtYXRUaW1lIiwidGltZU5vd1ZhbCIsInRpbWVFbGxhcHNlZCIsInNlYyIsIm5hbm8iLCJmTGVhZGVyIiwiZk1ldGEiLCJsZWFkZXIiLCJyZW5kZXJfYXJncyIsInRvQ29uc29sZSIsImFwcGx5UmVuZGVyIiwicGFydGlhbF9hcmdzIiwiZkVtb2ppIiwiZk5hbWUiLCJsZXZlbE5hbWUiLCJsZW5ndGgiLCJvdmVycmlkZXMiLCJpbml0aWFsQ2FwcyIsImZOYW1lc3BhY2UiLCJmTGFiZWwiLCJmVGltZSIsImZDb3VudCIsImZUZXN0IiwibGFiZWxfdHh0IiwicHJpbnRMb2dCcm93c2VyIiwicHJpbnRMb2dOb2RlIiwicHJpbnRHcm91cEJyb3dzZXIiLCJwcmludEdyb3VwTm9kZSIsInByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyIiwicHJpbnRHcm91cENvbGxhcHNlZE5vZGUiLCJzZXR1cFByaW50R3JvdXAiLCJwYWRkaW5nIiwicGFkZGVkX2xlYWRlciIsImFkZFBhZGRpbmciLCJyZWR1Y2UiLCJhY2MiLCJjaGFsayIsInN0ciIsImxlbiIsImRpZmYiLCJwYWRkZWQiLCJpIiwicHJpbnQiLCJzcHJlYWQiLCJzdG9yZSIsImNyZWF0ZVNoZWQiLCJjb25maWciLCJTaGVkIiwicmVtb3ZlU2hlZCIsIk1hcCIsImNhY2hlIiwibGV2ZWxzIiwiaW5jbHVkZXMiLCJsYWJlbHMiLCJnZXQiLCJoYXNMYWJlbCIsInNldCIsImhhcyIsIm1hcCIsImx2bCIsImxldmVsX21hcCIsImxpc3RlbmVyQnVja2V0IiwiaWQiLCJhc3NpZ25JZCIsImxpc3RlbmVycyIsImxvY2F0aW9ucyIsImx2bF9pZCIsImxpc3RlbmVyIiwibG9nQWxsb3dlZExvZ2ljIiwiY2F0ZWdvcnkiLCJ2YWx1ZSIsImZpbHRlcklzU2V0IiwiaXNJbmNsdWRlZCIsImlzTm90RXhjbHVkZWQiLCJ0eXBlIiwiZmlsdGVyIiwiaW5jbHVkZV9wcm9wIiwiZmlsdGVyX3ZhbHMiLCJpZF9jb3VudGVyIiwibGltaXQiLCJkZWZhdWx0ZWQiLCJydW5Nb2RpZmllclF1ZXVlIiwiZXhlY3V0aW9uUGlwZWxpbmUiLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImhhc092ZXJyaWRlcyIsImZpbmFsX2xvZyIsIm11dGF0ZVByb3BzIiwiZmlyZUxpc3RlbmVycyIsInF1ZXVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm9iaiIsIm11dGF0aW9ucyIsInByb3AiLCJ2YWwiLCJ0aW1lc3RhbXAiLCJ1bml4TWlsbGkiLCJEYXRlIiwibm93IiwiZGF0ZSIsInV0YyIsInRvVVRDU3RyaW5nIiwiZ2V0U2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGlCQUFpQjtBQUN6QjtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjtBQUNwRSxrREFBa0QsY0FBYztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUSxTQUFTO0FBQ2pDLGdCQUFnQixRQUFRLFNBQVM7QUFDakMsaUJBQWlCLE9BQU8sUUFBUTtBQUNoQyxpQkFBaUIsT0FBTyxRQUFRO0FBQ2hDLGdCQUFnQixTQUFTLE9BQU87QUFDaEMsZ0JBQWdCLFNBQVMsT0FBTztBQUNoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUU7O0FBRXpFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsRUFBRSxVQUFVLEVBQUU7QUFDL0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3QwQkEsb0JBQW9CLG1CQUFPLENBQUMsa0VBQWU7QUFDM0MsY0FBYyxtQkFBTyxDQUFDLHNEQUFTOztBQUUvQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDaEZBLG9CQUFvQixtQkFBTyxDQUFDLGtFQUFlOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvRlk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixLQUEwQjs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLE1BQU07QUFDakIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixVQUFVO0FBQ1Y7QUFDQSxhQUFhLFNBQVM7QUFDdEIsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU8sU0FBUyxFQUFFLEdBQUcsT0FBTyxpQkFBaUIsRUFBRTtBQUNsRSxVQUFVLE9BQU8saUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQSxXQUFXLFNBQVMsR0FBRyxTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3grREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMekI7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0QsQyIsImZpbGUiOiJhZHplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWR6ZUxpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBZHplTGliXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB3cmFwQW5zaTE2ID0gKGZuLCBvZmZzZXQpID0+ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGNvZGUgPSBmbiguLi5hcmdzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7Y29kZSArIG9mZnNldH1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMjU2ID0gKGZuLCBvZmZzZXQpID0+ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGNvZGUgPSBmbiguLi5hcmdzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzU7JHtjb2RlfW1gO1xufTtcblxuY29uc3Qgd3JhcEFuc2kxNm0gPSAoZm4sIG9mZnNldCkgPT4gKC4uLmFyZ3MpID0+IHtcblx0Y29uc3QgcmdiID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTsyOyR7cmdiWzBdfTske3JnYlsxXX07JHtyZ2JbMl19bWA7XG59O1xuXG5jb25zdCBhbnNpMmFuc2kgPSBuID0+IG47XG5jb25zdCByZ2IycmdiID0gKHIsIGcsIGIpID0+IFtyLCBnLCBiXTtcblxuY29uc3Qgc2V0TGF6eVByb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHksIGdldCkgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSwge1xuXHRcdGdldDogKCkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXQoKTtcblxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIHtcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9LFxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdH0pO1xufTtcblxuLyoqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCdjb2xvci1jb252ZXJ0Jyl9ICovXG5sZXQgY29sb3JDb252ZXJ0O1xuY29uc3QgbWFrZUR5bmFtaWNTdHlsZXMgPSAod3JhcCwgdGFyZ2V0U3BhY2UsIGlkZW50aXR5LCBpc0JhY2tncm91bmQpID0+IHtcblx0aWYgKGNvbG9yQ29udmVydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29sb3JDb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xuXHR9XG5cblx0Y29uc3Qgb2Zmc2V0ID0gaXNCYWNrZ3JvdW5kID8gMTAgOiAwO1xuXHRjb25zdCBzdHlsZXMgPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtzb3VyY2VTcGFjZSwgc3VpdGVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbG9yQ29udmVydCkpIHtcblx0XHRjb25zdCBuYW1lID0gc291cmNlU3BhY2UgPT09ICdhbnNpMTYnID8gJ2Fuc2knIDogc291cmNlU3BhY2U7XG5cdFx0aWYgKHNvdXJjZVNwYWNlID09PSB0YXJnZXRTcGFjZSkge1xuXHRcdFx0c3R5bGVzW25hbWVdID0gd3JhcChpZGVudGl0eSwgb2Zmc2V0KTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzdWl0ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHN0eWxlc1tuYW1lXSA9IHdyYXAoc3VpdGVbdGFyZ2V0U3BhY2VdLCBvZmZzZXQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59O1xuXG5mdW5jdGlvbiBhc3NlbWJsZVN0eWxlcygpIHtcblx0Y29uc3QgY29kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRtb2RpZmllcjoge1xuXHRcdFx0cmVzZXQ6IFswLCAwXSxcblx0XHRcdC8vIDIxIGlzbid0IHdpZGVseSBzdXBwb3J0ZWQgYW5kIDIyIGRvZXMgdGhlIHNhbWUgdGhpbmdcblx0XHRcdGJvbGQ6IFsxLCAyMl0sXG5cdFx0XHRkaW06IFsyLCAyMl0sXG5cdFx0XHRpdGFsaWM6IFszLCAyM10sXG5cdFx0XHR1bmRlcmxpbmU6IFs0LCAyNF0sXG5cdFx0XHRpbnZlcnNlOiBbNywgMjddLFxuXHRcdFx0aGlkZGVuOiBbOCwgMjhdLFxuXHRcdFx0c3RyaWtldGhyb3VnaDogWzksIDI5XVxuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdGJsYWNrOiBbMzAsIDM5XSxcblx0XHRcdHJlZDogWzMxLCAzOV0sXG5cdFx0XHRncmVlbjogWzMyLCAzOV0sXG5cdFx0XHR5ZWxsb3c6IFszMywgMzldLFxuXHRcdFx0Ymx1ZTogWzM0LCAzOV0sXG5cdFx0XHRtYWdlbnRhOiBbMzUsIDM5XSxcblx0XHRcdGN5YW46IFszNiwgMzldLFxuXHRcdFx0d2hpdGU6IFszNywgMzldLFxuXG5cdFx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRcdGJsYWNrQnJpZ2h0OiBbOTAsIDM5XSxcblx0XHRcdHJlZEJyaWdodDogWzkxLCAzOV0sXG5cdFx0XHRncmVlbkJyaWdodDogWzkyLCAzOV0sXG5cdFx0XHR5ZWxsb3dCcmlnaHQ6IFs5MywgMzldLFxuXHRcdFx0Ymx1ZUJyaWdodDogWzk0LCAzOV0sXG5cdFx0XHRtYWdlbnRhQnJpZ2h0OiBbOTUsIDM5XSxcblx0XHRcdGN5YW5CcmlnaHQ6IFs5NiwgMzldLFxuXHRcdFx0d2hpdGVCcmlnaHQ6IFs5NywgMzldXG5cdFx0fSxcblx0XHRiZ0NvbG9yOiB7XG5cdFx0XHRiZ0JsYWNrOiBbNDAsIDQ5XSxcblx0XHRcdGJnUmVkOiBbNDEsIDQ5XSxcblx0XHRcdGJnR3JlZW46IFs0MiwgNDldLFxuXHRcdFx0YmdZZWxsb3c6IFs0MywgNDldLFxuXHRcdFx0YmdCbHVlOiBbNDQsIDQ5XSxcblx0XHRcdGJnTWFnZW50YTogWzQ1LCA0OV0sXG5cdFx0XHRiZ0N5YW46IFs0NiwgNDldLFxuXHRcdFx0YmdXaGl0ZTogWzQ3LCA0OV0sXG5cblx0XHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdFx0YmdCbGFja0JyaWdodDogWzEwMCwgNDldLFxuXHRcdFx0YmdSZWRCcmlnaHQ6IFsxMDEsIDQ5XSxcblx0XHRcdGJnR3JlZW5CcmlnaHQ6IFsxMDIsIDQ5XSxcblx0XHRcdGJnWWVsbG93QnJpZ2h0OiBbMTAzLCA0OV0sXG5cdFx0XHRiZ0JsdWVCcmlnaHQ6IFsxMDQsIDQ5XSxcblx0XHRcdGJnTWFnZW50YUJyaWdodDogWzEwNSwgNDldLFxuXHRcdFx0YmdDeWFuQnJpZ2h0OiBbMTA2LCA0OV0sXG5cdFx0XHRiZ1doaXRlQnJpZ2h0OiBbMTA3LCA0OV1cblx0XHR9XG5cdH07XG5cblx0Ly8gQWxpYXMgYnJpZ2h0IGJsYWNrIGFzIGdyYXkgKGFuZCBncmV5KVxuXHRzdHlsZXMuY29sb3IuZ3JheSA9IHN0eWxlcy5jb2xvci5ibGFja0JyaWdodDtcblx0c3R5bGVzLmJnQ29sb3IuYmdHcmF5ID0gc3R5bGVzLmJnQ29sb3IuYmdCbGFja0JyaWdodDtcblx0c3R5bGVzLmNvbG9yLmdyZXkgPSBzdHlsZXMuY29sb3IuYmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5iZ0NvbG9yLmJnR3JleSA9IHN0eWxlcy5iZ0NvbG9yLmJnQmxhY2tCcmlnaHQ7XG5cblx0Zm9yIChjb25zdCBbZ3JvdXBOYW1lLCBncm91cF0gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVzKSkge1xuXHRcdGZvciAoY29uc3QgW3N0eWxlTmFtZSwgc3R5bGVdIG9mIE9iamVjdC5lbnRyaWVzKGdyb3VwKSkge1xuXHRcdFx0c3R5bGVzW3N0eWxlTmFtZV0gPSB7XG5cdFx0XHRcdG9wZW46IGBcXHUwMDFCWyR7c3R5bGVbMF19bWAsXG5cdFx0XHRcdGNsb3NlOiBgXFx1MDAxQlske3N0eWxlWzFdfW1gXG5cdFx0XHR9O1xuXG5cdFx0XHRncm91cFtzdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG5cblx0XHRcdGNvZGVzLnNldChzdHlsZVswXSwgc3R5bGVbMV0pO1xuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsIGdyb3VwTmFtZSwge1xuXHRcdFx0dmFsdWU6IGdyb3VwLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsICdjb2RlcycsIHtcblx0XHR2YWx1ZTogY29kZXMsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0fSk7XG5cblx0c3R5bGVzLmNvbG9yLmNsb3NlID0gJ1xcdTAwMUJbMzltJztcblx0c3R5bGVzLmJnQ29sb3IuY2xvc2UgPSAnXFx1MDAxQls0OW0nO1xuXG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuY29sb3IsICdhbnNpJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNiwgJ2Fuc2kxNicsIGFuc2kyYW5zaSwgZmFsc2UpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5jb2xvciwgJ2Fuc2kyNTYnLCAoKSA9PiBtYWtlRHluYW1pY1N0eWxlcyh3cmFwQW5zaTI1NiwgJ2Fuc2kyNTYnLCBhbnNpMmFuc2ksIGZhbHNlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuY29sb3IsICdhbnNpMTZtJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNm0sICdyZ2InLCByZ2IycmdiLCBmYWxzZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmJnQ29sb3IsICdhbnNpJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNiwgJ2Fuc2kxNicsIGFuc2kyYW5zaSwgdHJ1ZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmJnQ29sb3IsICdhbnNpMjU2JywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kyNTYsICdhbnNpMjU2JywgYW5zaTJhbnNpLCB0cnVlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuYmdDb2xvciwgJ2Fuc2kxNm0nLCAoKSA9PiBtYWtlRHluYW1pY1N0eWxlcyh3cmFwQW5zaTE2bSwgJ3JnYicsIHJnYjJyZ2IsIHRydWUpKTtcblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG4vLyBNYWtlIHRoZSBleHBvcnQgaW1tdXRhYmxlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Z2V0OiBhc3NlbWJsZVN0eWxlc1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3MuaHJ0aW1lIHx8IGhydGltZVxuXG4vLyBwb2x5ZmlsIGZvciB3aW5kb3cucGVyZm9ybWFuY2Uubm93XG52YXIgcGVyZm9ybWFuY2UgPSBnbG9iYWwucGVyZm9ybWFuY2UgfHwge31cbnZhciBwZXJmb3JtYW5jZU5vdyA9XG4gIHBlcmZvcm1hbmNlLm5vdyAgICAgICAgfHxcbiAgcGVyZm9ybWFuY2UubW96Tm93ICAgICB8fFxuICBwZXJmb3JtYW5jZS5tc05vdyAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm9Ob3cgICAgICAgfHxcbiAgcGVyZm9ybWFuY2Uud2Via2l0Tm93ICB8fFxuICBmdW5jdGlvbigpeyByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSB9XG5cbi8vIGdlbmVyYXRlIHRpbWVzdGFtcCBvciBkZWx0YVxuLy8gc2VlIGh0dHA6Ly9ub2RlanMub3JnL2FwaS9wcm9jZXNzLmh0bWwjcHJvY2Vzc19wcm9jZXNzX2hydGltZVxuZnVuY3Rpb24gaHJ0aW1lKHByZXZpb3VzVGltZXN0YW1wKXtcbiAgdmFyIGNsb2NrdGltZSA9IHBlcmZvcm1hbmNlTm93LmNhbGwocGVyZm9ybWFuY2UpKjFlLTNcbiAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKGNsb2NrdGltZSlcbiAgdmFyIG5hbm9zZWNvbmRzID0gTWF0aC5mbG9vcigoY2xvY2t0aW1lJTEpKjFlOSlcbiAgaWYgKHByZXZpb3VzVGltZXN0YW1wKSB7XG4gICAgc2Vjb25kcyA9IHNlY29uZHMgLSBwcmV2aW91c1RpbWVzdGFtcFswXVxuICAgIG5hbm9zZWNvbmRzID0gbmFub3NlY29uZHMgLSBwcmV2aW91c1RpbWVzdGFtcFsxXVxuICAgIGlmIChuYW5vc2Vjb25kczwwKSB7XG4gICAgICBzZWNvbmRzLS1cbiAgICAgIG5hbm9zZWNvbmRzICs9IDFlOVxuICAgIH1cbiAgfVxuICByZXR1cm4gW3NlY29uZHMsbmFub3NlY29uZHNdXG59IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgYW5zaVN0eWxlcyA9IHJlcXVpcmUoJ2Fuc2ktc3R5bGVzJyk7XG5jb25zdCB7c3Rkb3V0OiBzdGRvdXRDb2xvciwgc3RkZXJyOiBzdGRlcnJDb2xvcn0gPSByZXF1aXJlKCdzdXBwb3J0cy1jb2xvcicpO1xuY29uc3Qge1xuXHRzdHJpbmdSZXBsYWNlQWxsLFxuXHRzdHJpbmdFbmNhc2VDUkxGV2l0aEZpcnN0SW5kZXhcbn0gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3Qge2lzQXJyYXl9ID0gQXJyYXk7XG5cbi8vIGBzdXBwb3J0c0NvbG9yLmxldmVsYCDihpIgYGFuc2lTdHlsZXMuY29sb3JbbmFtZV1gIG1hcHBpbmdcbmNvbnN0IGxldmVsTWFwcGluZyA9IFtcblx0J2Fuc2knLFxuXHQnYW5zaScsXG5cdCdhbnNpMjU2Jyxcblx0J2Fuc2kxNm0nXG5dO1xuXG5jb25zdCBzdHlsZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5jb25zdCBhcHBseU9wdGlvbnMgPSAob2JqZWN0LCBvcHRpb25zID0ge30pID0+IHtcblx0aWYgKG9wdGlvbnMubGV2ZWwgJiYgIShOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMubGV2ZWwpICYmIG9wdGlvbnMubGV2ZWwgPj0gMCAmJiBvcHRpb25zLmxldmVsIDw9IDMpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGxldmVsYCBvcHRpb24gc2hvdWxkIGJlIGFuIGludGVnZXIgZnJvbSAwIHRvIDMnKTtcblx0fVxuXG5cdC8vIERldGVjdCBsZXZlbCBpZiBub3Qgc2V0IG1hbnVhbGx5XG5cdGNvbnN0IGNvbG9yTGV2ZWwgPSBzdGRvdXRDb2xvciA/IHN0ZG91dENvbG9yLmxldmVsIDogMDtcblx0b2JqZWN0LmxldmVsID0gb3B0aW9ucy5sZXZlbCA9PT0gdW5kZWZpbmVkID8gY29sb3JMZXZlbCA6IG9wdGlvbnMubGV2ZWw7XG59O1xuXG5jbGFzcyBDaGFsa0NsYXNzIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cblx0XHRyZXR1cm4gY2hhbGtGYWN0b3J5KG9wdGlvbnMpO1xuXHR9XG59XG5cbmNvbnN0IGNoYWxrRmFjdG9yeSA9IG9wdGlvbnMgPT4ge1xuXHRjb25zdCBjaGFsayA9IHt9O1xuXHRhcHBseU9wdGlvbnMoY2hhbGssIG9wdGlvbnMpO1xuXG5cdGNoYWxrLnRlbXBsYXRlID0gKC4uLmFyZ3VtZW50c18pID0+IGNoYWxrVGFnKGNoYWxrLnRlbXBsYXRlLCAuLi5hcmd1bWVudHNfKTtcblxuXHRPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhbGssIENoYWxrLnByb3RvdHlwZSk7XG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFsay50ZW1wbGF0ZSwgY2hhbGspO1xuXG5cdGNoYWxrLnRlbXBsYXRlLmNvbnN0cnVjdG9yID0gKCkgPT4ge1xuXHRcdHRocm93IG5ldyBFcnJvcignYGNoYWxrLmNvbnN0cnVjdG9yKClgIGlzIGRlcHJlY2F0ZWQuIFVzZSBgbmV3IGNoYWxrLkluc3RhbmNlKClgIGluc3RlYWQuJyk7XG5cdH07XG5cblx0Y2hhbGsudGVtcGxhdGUuSW5zdGFuY2UgPSBDaGFsa0NsYXNzO1xuXG5cdHJldHVybiBjaGFsay50ZW1wbGF0ZTtcbn07XG5cbmZ1bmN0aW9uIENoYWxrKG9wdGlvbnMpIHtcblx0cmV0dXJuIGNoYWxrRmFjdG9yeShvcHRpb25zKTtcbn1cblxuZm9yIChjb25zdCBbc3R5bGVOYW1lLCBzdHlsZV0gb2YgT2JqZWN0LmVudHJpZXMoYW5zaVN0eWxlcykpIHtcblx0c3R5bGVzW3N0eWxlTmFtZV0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3QgYnVpbGRlciA9IGNyZWF0ZUJ1aWxkZXIodGhpcywgY3JlYXRlU3R5bGVyKHN0eWxlLm9wZW4sIHN0eWxlLmNsb3NlLCB0aGlzLl9zdHlsZXIpLCB0aGlzLl9pc0VtcHR5KTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBzdHlsZU5hbWUsIHt2YWx1ZTogYnVpbGRlcn0pO1xuXHRcdFx0cmV0dXJuIGJ1aWxkZXI7XG5cdFx0fVxuXHR9O1xufVxuXG5zdHlsZXMudmlzaWJsZSA9IHtcblx0Z2V0KCkge1xuXHRcdGNvbnN0IGJ1aWxkZXIgPSBjcmVhdGVCdWlsZGVyKHRoaXMsIHRoaXMuX3N0eWxlciwgdHJ1ZSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd2aXNpYmxlJywge3ZhbHVlOiBidWlsZGVyfSk7XG5cdFx0cmV0dXJuIGJ1aWxkZXI7XG5cdH1cbn07XG5cbmNvbnN0IHVzZWRNb2RlbHMgPSBbJ3JnYicsICdoZXgnLCAna2V5d29yZCcsICdoc2wnLCAnaHN2JywgJ2h3YicsICdhbnNpJywgJ2Fuc2kyNTYnXTtcblxuZm9yIChjb25zdCBtb2RlbCBvZiB1c2VkTW9kZWxzKSB7XG5cdHN0eWxlc1ttb2RlbF0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3Qge2xldmVsfSA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0XHRcdFx0Y29uc3Qgc3R5bGVyID0gY3JlYXRlU3R5bGVyKGFuc2lTdHlsZXMuY29sb3JbbGV2ZWxNYXBwaW5nW2xldmVsXV1bbW9kZWxdKC4uLmFyZ3VtZW50c18pLCBhbnNpU3R5bGVzLmNvbG9yLmNsb3NlLCB0aGlzLl9zdHlsZXIpO1xuXHRcdFx0XHRyZXR1cm4gY3JlYXRlQnVpbGRlcih0aGlzLCBzdHlsZXIsIHRoaXMuX2lzRW1wdHkpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5cbmZvciAoY29uc3QgbW9kZWwgb2YgdXNlZE1vZGVscykge1xuXHRjb25zdCBiZ01vZGVsID0gJ2JnJyArIG1vZGVsWzBdLnRvVXBwZXJDYXNlKCkgKyBtb2RlbC5zbGljZSgxKTtcblx0c3R5bGVzW2JnTW9kZWxdID0ge1xuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IHtsZXZlbH0gPSB0aGlzO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdFx0XHRcdGNvbnN0IHN0eWxlciA9IGNyZWF0ZVN0eWxlcihhbnNpU3R5bGVzLmJnQ29sb3JbbGV2ZWxNYXBwaW5nW2xldmVsXV1bbW9kZWxdKC4uLmFyZ3VtZW50c18pLCBhbnNpU3R5bGVzLmJnQ29sb3IuY2xvc2UsIHRoaXMuX3N0eWxlcik7XG5cdFx0XHRcdHJldHVybiBjcmVhdGVCdWlsZGVyKHRoaXMsIHN0eWxlciwgdGhpcy5faXNFbXB0eSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgcHJvdG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcygoKSA9PiB7fSwge1xuXHQuLi5zdHlsZXMsXG5cdGxldmVsOiB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZ2VuZXJhdG9yLmxldmVsO1xuXHRcdH0sXG5cdFx0c2V0KGxldmVsKSB7XG5cdFx0XHR0aGlzLl9nZW5lcmF0b3IubGV2ZWwgPSBsZXZlbDtcblx0XHR9XG5cdH1cbn0pO1xuXG5jb25zdCBjcmVhdGVTdHlsZXIgPSAob3BlbiwgY2xvc2UsIHBhcmVudCkgPT4ge1xuXHRsZXQgb3BlbkFsbDtcblx0bGV0IGNsb3NlQWxsO1xuXHRpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRvcGVuQWxsID0gb3Blbjtcblx0XHRjbG9zZUFsbCA9IGNsb3NlO1xuXHR9IGVsc2Uge1xuXHRcdG9wZW5BbGwgPSBwYXJlbnQub3BlbkFsbCArIG9wZW47XG5cdFx0Y2xvc2VBbGwgPSBjbG9zZSArIHBhcmVudC5jbG9zZUFsbDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0b3Blbixcblx0XHRjbG9zZSxcblx0XHRvcGVuQWxsLFxuXHRcdGNsb3NlQWxsLFxuXHRcdHBhcmVudFxuXHR9O1xufTtcblxuY29uc3QgY3JlYXRlQnVpbGRlciA9IChzZWxmLCBfc3R5bGVyLCBfaXNFbXB0eSkgPT4ge1xuXHRjb25zdCBidWlsZGVyID0gKC4uLmFyZ3VtZW50c18pID0+IHtcblx0XHRpZiAoaXNBcnJheShhcmd1bWVudHNfWzBdKSAmJiBpc0FycmF5KGFyZ3VtZW50c19bMF0ucmF3KSkge1xuXHRcdFx0Ly8gQ2FsbGVkIGFzIGEgdGVtcGxhdGUgbGl0ZXJhbCwgZm9yIGV4YW1wbGU6IGNoYWxrLnJlZGAyICsgMyA9IHtib2xkICR7MiszfX1gXG5cdFx0XHRyZXR1cm4gYXBwbHlTdHlsZShidWlsZGVyLCBjaGFsa1RhZyhidWlsZGVyLCAuLi5hcmd1bWVudHNfKSk7XG5cdFx0fVxuXG5cdFx0Ly8gU2luZ2xlIGFyZ3VtZW50IGlzIGhvdCBwYXRoLCBpbXBsaWNpdCBjb2VyY2lvbiBpcyBmYXN0ZXIgdGhhbiBhbnl0aGluZ1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvblxuXHRcdHJldHVybiBhcHBseVN0eWxlKGJ1aWxkZXIsIChhcmd1bWVudHNfLmxlbmd0aCA9PT0gMSkgPyAoJycgKyBhcmd1bWVudHNfWzBdKSA6IGFyZ3VtZW50c18uam9pbignICcpKTtcblx0fTtcblxuXHQvLyBXZSBhbHRlciB0aGUgcHJvdG90eXBlIGJlY2F1c2Ugd2UgbXVzdCByZXR1cm4gYSBmdW5jdGlvbiwgYnV0IHRoZXJlIGlzXG5cdC8vIG5vIHdheSB0byBjcmVhdGUgYSBmdW5jdGlvbiB3aXRoIGEgZGlmZmVyZW50IHByb3RvdHlwZVxuXHRPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVpbGRlciwgcHJvdG8pO1xuXG5cdGJ1aWxkZXIuX2dlbmVyYXRvciA9IHNlbGY7XG5cdGJ1aWxkZXIuX3N0eWxlciA9IF9zdHlsZXI7XG5cdGJ1aWxkZXIuX2lzRW1wdHkgPSBfaXNFbXB0eTtcblxuXHRyZXR1cm4gYnVpbGRlcjtcbn07XG5cbmNvbnN0IGFwcGx5U3R5bGUgPSAoc2VsZiwgc3RyaW5nKSA9PiB7XG5cdGlmIChzZWxmLmxldmVsIDw9IDAgfHwgIXN0cmluZykge1xuXHRcdHJldHVybiBzZWxmLl9pc0VtcHR5ID8gJycgOiBzdHJpbmc7XG5cdH1cblxuXHRsZXQgc3R5bGVyID0gc2VsZi5fc3R5bGVyO1xuXG5cdGlmIChzdHlsZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRjb25zdCB7b3BlbkFsbCwgY2xvc2VBbGx9ID0gc3R5bGVyO1xuXHRpZiAoc3RyaW5nLmluZGV4T2YoJ1xcdTAwMUInKSAhPT0gLTEpIHtcblx0XHR3aGlsZSAoc3R5bGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIFJlcGxhY2UgYW55IGluc3RhbmNlcyBhbHJlYWR5IHByZXNlbnQgd2l0aCBhIHJlLW9wZW5pbmcgY29kZVxuXHRcdFx0Ly8gb3RoZXJ3aXNlIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHN0cmluZyB1bnRpbCBzYWlkIGNsb3NpbmcgY29kZVxuXHRcdFx0Ly8gd2lsbCBiZSBjb2xvcmVkLCBhbmQgdGhlIHJlc3Qgd2lsbCBzaW1wbHkgYmUgJ3BsYWluJy5cblx0XHRcdHN0cmluZyA9IHN0cmluZ1JlcGxhY2VBbGwoc3RyaW5nLCBzdHlsZXIuY2xvc2UsIHN0eWxlci5vcGVuKTtcblxuXHRcdFx0c3R5bGVyID0gc3R5bGVyLnBhcmVudDtcblx0XHR9XG5cdH1cblxuXHQvLyBXZSBjYW4gbW92ZSBib3RoIG5leHQgYWN0aW9ucyBvdXQgb2YgbG9vcCwgYmVjYXVzZSByZW1haW5pbmcgYWN0aW9ucyBpbiBsb29wIHdvbid0IGhhdmVcblx0Ly8gYW55L3Zpc2libGUgZWZmZWN0IG9uIHBhcnRzIHdlIGFkZCBoZXJlLiBDbG9zZSB0aGUgc3R5bGluZyBiZWZvcmUgYSBsaW5lYnJlYWsgYW5kIHJlb3BlblxuXHQvLyBhZnRlciBuZXh0IGxpbmUgdG8gZml4IGEgYmxlZWQgaXNzdWUgb24gbWFjT1M6IGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9jaGFsay9wdWxsLzkyXG5cdGNvbnN0IGxmSW5kZXggPSBzdHJpbmcuaW5kZXhPZignXFxuJyk7XG5cdGlmIChsZkluZGV4ICE9PSAtMSkge1xuXHRcdHN0cmluZyA9IHN0cmluZ0VuY2FzZUNSTEZXaXRoRmlyc3RJbmRleChzdHJpbmcsIGNsb3NlQWxsLCBvcGVuQWxsLCBsZkluZGV4KTtcblx0fVxuXG5cdHJldHVybiBvcGVuQWxsICsgc3RyaW5nICsgY2xvc2VBbGw7XG59O1xuXG5sZXQgdGVtcGxhdGU7XG5jb25zdCBjaGFsa1RhZyA9IChjaGFsaywgLi4uc3RyaW5ncykgPT4ge1xuXHRjb25zdCBbZmlyc3RTdHJpbmddID0gc3RyaW5ncztcblxuXHRpZiAoIWlzQXJyYXkoZmlyc3RTdHJpbmcpIHx8ICFpc0FycmF5KGZpcnN0U3RyaW5nLnJhdykpIHtcblx0XHQvLyBJZiBjaGFsaygpIHdhcyBjYWxsZWQgYnkgaXRzZWxmIG9yIHdpdGggYSBzdHJpbmcsXG5cdFx0Ly8gcmV0dXJuIHRoZSBzdHJpbmcgaXRzZWxmIGFzIGEgc3RyaW5nLlxuXHRcdHJldHVybiBzdHJpbmdzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGNvbnN0IGFyZ3VtZW50c18gPSBzdHJpbmdzLnNsaWNlKDEpO1xuXHRjb25zdCBwYXJ0cyA9IFtmaXJzdFN0cmluZy5yYXdbMF1dO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgZmlyc3RTdHJpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRwYXJ0cy5wdXNoKFxuXHRcdFx0U3RyaW5nKGFyZ3VtZW50c19baSAtIDFdKS5yZXBsYWNlKC9be31cXFxcXS9nLCAnXFxcXCQmJyksXG5cdFx0XHRTdHJpbmcoZmlyc3RTdHJpbmcucmF3W2ldKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZShjaGFsaywgcGFydHMuam9pbignJykpO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ2hhbGsucHJvdG90eXBlLCBzdHlsZXMpO1xuXG5jb25zdCBjaGFsayA9IENoYWxrKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuY2hhbGsuc3VwcG9ydHNDb2xvciA9IHN0ZG91dENvbG9yO1xuY2hhbGsuc3RkZXJyID0gQ2hhbGsoe2xldmVsOiBzdGRlcnJDb2xvciA/IHN0ZGVyckNvbG9yLmxldmVsIDogMH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbmNoYWxrLnN0ZGVyci5zdXBwb3J0c0NvbG9yID0gc3RkZXJyQ29sb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhbGs7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBURU1QTEFURV9SRUdFWCA9IC8oPzpcXFxcKHUoPzpbYS1mXFxkXXs0fXxcXHtbYS1mXFxkXXsxLDZ9XFx9KXx4W2EtZlxcZF17Mn18LikpfCg/Olxceyh+KT8oXFx3Kyg/OlxcKFteKV0qXFwpKT8oPzpcXC5cXHcrKD86XFwoW14pXSpcXCkpPykqKSg/OlsgXFx0XXwoPz1cXHI/XFxuKSkpfChcXH0pfCgoPzoufFtcXHJcXG5cXGZdKSs/KS9naTtcbmNvbnN0IFNUWUxFX1JFR0VYID0gLyg/Ol58XFwuKShcXHcrKSg/OlxcKChbXildKilcXCkpPy9nO1xuY29uc3QgU1RSSU5HX1JFR0VYID0gL14oWydcIl0pKCg/OlxcXFwufCg/IVxcMSlbXlxcXFxdKSopXFwxJC87XG5jb25zdCBFU0NBUEVfUkVHRVggPSAvXFxcXCh1KD86W2EtZlxcZF17NH18e1thLWZcXGRdezEsNn19KXx4W2EtZlxcZF17Mn18Lil8KFteXFxcXF0pL2dpO1xuXG5jb25zdCBFU0NBUEVTID0gbmV3IE1hcChbXG5cdFsnbicsICdcXG4nXSxcblx0WydyJywgJ1xcciddLFxuXHRbJ3QnLCAnXFx0J10sXG5cdFsnYicsICdcXGInXSxcblx0WydmJywgJ1xcZiddLFxuXHRbJ3YnLCAnXFx2J10sXG5cdFsnMCcsICdcXDAnXSxcblx0WydcXFxcJywgJ1xcXFwnXSxcblx0WydlJywgJ1xcdTAwMUInXSxcblx0WydhJywgJ1xcdTAwMDcnXVxuXSk7XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGMpIHtcblx0Y29uc3QgdSA9IGNbMF0gPT09ICd1Jztcblx0Y29uc3QgYnJhY2tldCA9IGNbMV0gPT09ICd7JztcblxuXHRpZiAoKHUgJiYgIWJyYWNrZXQgJiYgYy5sZW5ndGggPT09IDUpIHx8IChjWzBdID09PSAneCcgJiYgYy5sZW5ndGggPT09IDMpKSB7XG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoYy5zbGljZSgxKSwgMTYpKTtcblx0fVxuXG5cdGlmICh1ICYmIGJyYWNrZXQpIHtcblx0XHRyZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQocGFyc2VJbnQoYy5zbGljZSgyLCAtMSksIDE2KSk7XG5cdH1cblxuXHRyZXR1cm4gRVNDQVBFUy5nZXQoYykgfHwgYztcbn1cblxuZnVuY3Rpb24gcGFyc2VBcmd1bWVudHMobmFtZSwgYXJndW1lbnRzXykge1xuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGNvbnN0IGNodW5rcyA9IGFyZ3VtZW50c18udHJpbSgpLnNwbGl0KC9cXHMqLFxccyovZyk7XG5cdGxldCBtYXRjaGVzO1xuXG5cdGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG5cdFx0Y29uc3QgbnVtYmVyID0gTnVtYmVyKGNodW5rKTtcblx0XHRpZiAoIU51bWJlci5pc05hTihudW1iZXIpKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2gobnVtYmVyKTtcblx0XHR9IGVsc2UgaWYgKChtYXRjaGVzID0gY2h1bmsubWF0Y2goU1RSSU5HX1JFR0VYKSkpIHtcblx0XHRcdHJlc3VsdHMucHVzaChtYXRjaGVzWzJdLnJlcGxhY2UoRVNDQVBFX1JFR0VYLCAobSwgZXNjYXBlLCBjaGFyYWN0ZXIpID0+IGVzY2FwZSA/IHVuZXNjYXBlKGVzY2FwZSkgOiBjaGFyYWN0ZXIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIENoYWxrIHRlbXBsYXRlIHN0eWxlIGFyZ3VtZW50OiAke2NodW5rfSAoaW4gc3R5bGUgJyR7bmFtZX0nKWApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0eWxlKHN0eWxlKSB7XG5cdFNUWUxFX1JFR0VYLmxhc3RJbmRleCA9IDA7XG5cblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRsZXQgbWF0Y2hlcztcblxuXHR3aGlsZSAoKG1hdGNoZXMgPSBTVFlMRV9SRUdFWC5leGVjKHN0eWxlKSkgIT09IG51bGwpIHtcblx0XHRjb25zdCBuYW1lID0gbWF0Y2hlc1sxXTtcblxuXHRcdGlmIChtYXRjaGVzWzJdKSB7XG5cdFx0XHRjb25zdCBhcmdzID0gcGFyc2VBcmd1bWVudHMobmFtZSwgbWF0Y2hlc1syXSk7XG5cdFx0XHRyZXN1bHRzLnB1c2goW25hbWVdLmNvbmNhdChhcmdzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChbbmFtZV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpIHtcblx0Y29uc3QgZW5hYmxlZCA9IHt9O1xuXG5cdGZvciAoY29uc3QgbGF5ZXIgb2Ygc3R5bGVzKSB7XG5cdFx0Zm9yIChjb25zdCBzdHlsZSBvZiBsYXllci5zdHlsZXMpIHtcblx0XHRcdGVuYWJsZWRbc3R5bGVbMF1dID0gbGF5ZXIuaW52ZXJzZSA/IG51bGwgOiBzdHlsZS5zbGljZSgxKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY3VycmVudCA9IGNoYWxrO1xuXHRmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlc10gb2YgT2JqZWN0LmVudHJpZXMoZW5hYmxlZCkpIHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCEoc3R5bGVOYW1lIGluIGN1cnJlbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gQ2hhbGsgc3R5bGU6ICR7c3R5bGVOYW1lfWApO1xuXHRcdH1cblxuXHRcdGN1cnJlbnQgPSBzdHlsZXMubGVuZ3RoID4gMCA/IGN1cnJlbnRbc3R5bGVOYW1lXSguLi5zdHlsZXMpIDogY3VycmVudFtzdHlsZU5hbWVdO1xuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gKGNoYWxrLCB0ZW1wb3JhcnkpID0+IHtcblx0Y29uc3Qgc3R5bGVzID0gW107XG5cdGNvbnN0IGNodW5rcyA9IFtdO1xuXHRsZXQgY2h1bmsgPSBbXTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuXHR0ZW1wb3JhcnkucmVwbGFjZShURU1QTEFURV9SRUdFWCwgKG0sIGVzY2FwZUNoYXJhY3RlciwgaW52ZXJzZSwgc3R5bGUsIGNsb3NlLCBjaGFyYWN0ZXIpID0+IHtcblx0XHRpZiAoZXNjYXBlQ2hhcmFjdGVyKSB7XG5cdFx0XHRjaHVuay5wdXNoKHVuZXNjYXBlKGVzY2FwZUNoYXJhY3RlcikpO1xuXHRcdH0gZWxzZSBpZiAoc3R5bGUpIHtcblx0XHRcdGNvbnN0IHN0cmluZyA9IGNodW5rLmpvaW4oJycpO1xuXHRcdFx0Y2h1bmsgPSBbXTtcblx0XHRcdGNodW5rcy5wdXNoKHN0eWxlcy5sZW5ndGggPT09IDAgPyBzdHJpbmcgOiBidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpKHN0cmluZykpO1xuXHRcdFx0c3R5bGVzLnB1c2goe2ludmVyc2UsIHN0eWxlczogcGFyc2VTdHlsZShzdHlsZSl9KTtcblx0XHR9IGVsc2UgaWYgKGNsb3NlKSB7XG5cdFx0XHRpZiAoc3R5bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGV4dHJhbmVvdXMgfSBpbiBDaGFsayB0ZW1wbGF0ZSBsaXRlcmFsJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNodW5rcy5wdXNoKGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykoY2h1bmsuam9pbignJykpKTtcblx0XHRcdGNodW5rID0gW107XG5cdFx0XHRzdHlsZXMucG9wKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNodW5rLnB1c2goY2hhcmFjdGVyKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNodW5rcy5wdXNoKGNodW5rLmpvaW4oJycpKTtcblxuXHRpZiAoc3R5bGVzLmxlbmd0aCA+IDApIHtcblx0XHRjb25zdCBlcnJNZXNzYWdlID0gYENoYWxrIHRlbXBsYXRlIGxpdGVyYWwgaXMgbWlzc2luZyAke3N0eWxlcy5sZW5ndGh9IGNsb3NpbmcgYnJhY2tldCR7c3R5bGVzLmxlbmd0aCA9PT0gMSA/ICcnIDogJ3MnfSAoXFxgfVxcYClgO1xuXHRcdHRocm93IG5ldyBFcnJvcihlcnJNZXNzYWdlKTtcblx0fVxuXG5cdHJldHVybiBjaHVua3Muam9pbignJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdHJpbmdSZXBsYWNlQWxsID0gKHN0cmluZywgc3Vic3RyaW5nLCByZXBsYWNlcikgPT4ge1xuXHRsZXQgaW5kZXggPSBzdHJpbmcuaW5kZXhPZihzdWJzdHJpbmcpO1xuXHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdGNvbnN0IHN1YnN0cmluZ0xlbmd0aCA9IHN1YnN0cmluZy5sZW5ndGg7XG5cdGxldCBlbmRJbmRleCA9IDA7XG5cdGxldCByZXR1cm5WYWx1ZSA9ICcnO1xuXHRkbyB7XG5cdFx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCwgaW5kZXggLSBlbmRJbmRleCkgKyBzdWJzdHJpbmcgKyByZXBsYWNlcjtcblx0XHRlbmRJbmRleCA9IGluZGV4ICsgc3Vic3RyaW5nTGVuZ3RoO1xuXHRcdGluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc3Vic3RyaW5nLCBlbmRJbmRleCk7XG5cdH0gd2hpbGUgKGluZGV4ICE9PSAtMSk7XG5cblx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCk7XG5cdHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbmNvbnN0IHN0cmluZ0VuY2FzZUNSTEZXaXRoRmlyc3RJbmRleCA9IChzdHJpbmcsIHByZWZpeCwgcG9zdGZpeCwgaW5kZXgpID0+IHtcblx0bGV0IGVuZEluZGV4ID0gMDtcblx0bGV0IHJldHVyblZhbHVlID0gJyc7XG5cdGRvIHtcblx0XHRjb25zdCBnb3RDUiA9IHN0cmluZ1tpbmRleCAtIDFdID09PSAnXFxyJztcblx0XHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4LCAoZ290Q1IgPyBpbmRleCAtIDEgOiBpbmRleCkgLSBlbmRJbmRleCkgKyBwcmVmaXggKyAoZ290Q1IgPyAnXFxyXFxuJyA6ICdcXG4nKSArIHBvc3RmaXg7XG5cdFx0ZW5kSW5kZXggPSBpbmRleCArIDE7XG5cdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZignXFxuJywgZW5kSW5kZXgpO1xuXHR9IHdoaWxlIChpbmRleCAhPT0gLTEpO1xuXG5cdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgpO1xuXHRyZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3RyaW5nUmVwbGFjZUFsbCxcblx0c3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4XG59O1xuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuY29uc3QgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbmNvbnN0IHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY3NzS2V5d29yZHMpKSB7XG5cdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcbn1cblxuY29uc3QgY29udmVydCA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcblxuLy8gSGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yIChjb25zdCBtb2RlbCBvZiBPYmplY3Qua2V5cyhjb252ZXJ0KSkge1xuXHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0fVxuXG5cdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0fVxuXG5cdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHR9XG5cblx0Y29uc3Qge2NoYW5uZWxzLCBsYWJlbHN9ID0gY29udmVydFttb2RlbF07XG5cdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogbGFiZWxzfSk7XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblx0Y29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHRjb25zdCBkZWx0YSA9IG1heCAtIG1pbjtcblx0bGV0IGg7XG5cdGxldCBzO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0Y29uc3QgbCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGxldCByZGlmO1xuXHRsZXQgZ2RpZjtcblx0bGV0IGJkaWY7XG5cdGxldCBoO1xuXHRsZXQgcztcblxuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCB2ID0gTWF0aC5tYXgociwgZywgYik7XG5cdGNvbnN0IGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdGNvbnN0IGRpZmZjID0gZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG5cdH07XG5cblx0aWYgKGRpZmYgPT09IDApIHtcblx0XHRoID0gMDtcblx0XHRzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gZGlmZiAvIHY7XG5cdFx0cmRpZiA9IGRpZmZjKHIpO1xuXHRcdGdkaWYgPSBkaWZmYyhnKTtcblx0XHRiZGlmID0gZGlmZmMoYik7XG5cblx0XHRpZiAociA9PT0gdikge1xuXHRcdFx0aCA9IGJkaWYgLSBnZGlmO1xuXHRcdH0gZWxzZSBpZiAoZyA9PT0gdikge1xuXHRcdFx0aCA9ICgxIC8gMykgKyByZGlmIC0gYmRpZjtcblx0XHR9IGVsc2UgaWYgKGIgPT09IHYpIHtcblx0XHRcdGggPSAoMiAvIDMpICsgZ2RpZiAtIHJkaWY7XG5cdFx0fVxuXG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXTtcblx0Y29uc3QgZyA9IHJnYlsxXTtcblx0bGV0IGIgPSByZ2JbMl07XG5cdGNvbnN0IGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0Y29uc3QgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdGNvbnN0IGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0Y29uc3QgYyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRjb25zdCBtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdGNvbnN0IHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdC8qXG5cdFx0U2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG5cdCovXG5cdHJldHVybiAoXG5cdFx0KCh4WzBdIC0geVswXSkgKiogMikgK1xuXHRcdCgoeFsxXSAtIHlbMV0pICoqIDIpICtcblx0XHQoKHhbMl0gLSB5WzJdKSAqKiAyKVxuXHQpO1xufVxuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHRsZXQgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHRsZXQgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAoY29uc3Qga2V5d29yZCBvZiBPYmplY3Qua2V5cyhjc3NLZXl3b3JkcykpIHtcblx0XHRjb25zdCB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdGNvbnN0IGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdGxldCByID0gcmdiWzBdIC8gMjU1O1xuXHRsZXQgZyA9IHJnYlsxXSAvIDI1NTtcblx0bGV0IGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gQXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gKCgociArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/ICgoKGcgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyAoKChiICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHRjb25zdCB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHRjb25zdCB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHRjb25zdCB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHRsZXQgeCA9IHh5elswXTtcblx0bGV0IHkgPSB4eXpbMV07XG5cdGxldCB6ID0geHl6WzJdO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyAoeCAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/ICh5ICoqICgxIC8gMykpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gKHogKiogKDEgLyAzKSkgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0Y29uc3QgbCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRjb25zdCBhID0gNTAwICogKHggLSB5KTtcblx0Y29uc3QgYiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0Y29uc3QgaCA9IGhzbFswXSAvIDM2MDtcblx0Y29uc3QgcyA9IGhzbFsxXSAvIDEwMDtcblx0Y29uc3QgbCA9IGhzbFsyXSAvIDEwMDtcblx0bGV0IHQyO1xuXHRsZXQgdDM7XG5cdGxldCB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0Y29uc3QgdDEgPSAyICogbCAtIHQyO1xuXG5cdGNvbnN0IHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0Y29uc3QgaCA9IGhzbFswXTtcblx0bGV0IHMgPSBoc2xbMV0gLyAxMDA7XG5cdGxldCBsID0gaHNsWzJdIC8gMTAwO1xuXHRsZXQgc21pbiA9IHM7XG5cdGNvbnN0IGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHRjb25zdCB2ID0gKGwgKyBzKSAvIDI7XG5cdGNvbnN0IHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdGNvbnN0IGggPSBoc3ZbMF0gLyA2MDtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0bGV0IHYgPSBoc3ZbMl0gLyAxMDA7XG5cdGNvbnN0IGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0Y29uc3QgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHRjb25zdCBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdGNvbnN0IHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0Y29uc3QgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgaCA9IGhzdlswXTtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0Y29uc3QgdiA9IGhzdlsyXSAvIDEwMDtcblx0Y29uc3Qgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHRsZXQgc2w7XG5cdGxldCBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0Y29uc3QgbG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0Y29uc3QgaCA9IGh3YlswXSAvIDM2MDtcblx0bGV0IHdoID0gaHdiWzFdIC8gMTAwO1xuXHRsZXQgYmwgPSBod2JbMl0gLyAxMDA7XG5cdGNvbnN0IHJhdGlvID0gd2ggKyBibDtcblx0bGV0IGY7XG5cblx0Ly8gV2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRjb25zdCBpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdGNvbnN0IHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRjb25zdCBuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIExpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0bGV0IHI7XG5cdGxldCBnO1xuXHRsZXQgYjtcblx0LyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUsbm8tbXVsdGktc3BhY2VzICovXG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7ICBnID0gbjsgIGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgIGcgPSB2OyAgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7ICBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyAgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47ICBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyAgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblx0LyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSxuby1tdWx0aS1zcGFjZXMgKi9cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdGNvbnN0IGMgPSBjbXlrWzBdIC8gMTAwO1xuXHRjb25zdCBtID0gY215a1sxXSAvIDEwMDtcblx0Y29uc3QgeSA9IGNteWtbMl0gLyAxMDA7XG5cdGNvbnN0IGsgPSBjbXlrWzNdIC8gMTAwO1xuXG5cdGNvbnN0IHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0Y29uc3QgZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRjb25zdCBiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0Y29uc3QgeCA9IHh5elswXSAvIDEwMDtcblx0Y29uc3QgeSA9IHh5elsxXSAvIDEwMDtcblx0Y29uc3QgeiA9IHh5elsyXSAvIDEwMDtcblx0bGV0IHI7XG5cdGxldCBnO1xuXHRsZXQgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBBc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChyICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChnICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChiICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdGxldCB4ID0geHl6WzBdO1xuXHRsZXQgeSA9IHh5elsxXTtcblx0bGV0IHogPSB4eXpbMl07XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/ICh4ICoqICgxIC8gMykpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gKHkgKiogKDEgLyAzKSkgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyAoeiAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRjb25zdCBsID0gKDExNiAqIHkpIC0gMTY7XG5cdGNvbnN0IGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRjb25zdCBiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHRjb25zdCBsID0gbGFiWzBdO1xuXHRjb25zdCBhID0gbGFiWzFdO1xuXHRjb25zdCBiID0gbGFiWzJdO1xuXHRsZXQgeDtcblx0bGV0IHk7XG5cdGxldCB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0Y29uc3QgeTIgPSB5ICoqIDM7XG5cdGNvbnN0IHgyID0geCAqKiAzO1xuXHRjb25zdCB6MiA9IHogKiogMztcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHRjb25zdCBsID0gbGFiWzBdO1xuXHRjb25zdCBhID0gbGFiWzFdO1xuXHRjb25zdCBiID0gbGFiWzJdO1xuXHRsZXQgaDtcblxuXHRjb25zdCBociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0Y29uc3QgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHRjb25zdCBsID0gbGNoWzBdO1xuXHRjb25zdCBjID0gbGNoWzFdO1xuXHRjb25zdCBoID0gbGNoWzJdO1xuXG5cdGNvbnN0IGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRjb25zdCBhID0gYyAqIE1hdGguY29zKGhyKTtcblx0Y29uc3QgYiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzLCBzYXR1cmF0aW9uID0gbnVsbCkge1xuXHRjb25zdCBbciwgZywgYl0gPSBhcmdzO1xuXHRsZXQgdmFsdWUgPSBzYXR1cmF0aW9uID09PSBudWxsID8gY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdIDogc2F0dXJhdGlvbjsgLy8gSHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0bGV0IGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gT3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHRjb25zdCByID0gYXJnc1swXTtcblx0Y29uc3QgZyA9IGFyZ3NbMV07XG5cdGNvbnN0IGIgPSBhcmdzWzJdO1xuXG5cdC8vIFdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0Y29uc3QgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGxldCBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBIYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHRjb25zdCBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0Y29uc3QgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHRjb25zdCBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHRjb25zdCBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gSGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHRjb25zdCBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdGxldCByZW07XG5cdGNvbnN0IHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHRjb25zdCBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0Y29uc3QgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdGNvbnN0IHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRjb25zdCBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHRsZXQgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGNoYXIgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYXIgKyBjaGFyO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0Y29uc3QgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdGNvbnN0IHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHRjb25zdCBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHRjb25zdCBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdGNvbnN0IGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHRsZXQgZ3JheXNjYWxlO1xuXHRsZXQgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWE7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0Y29uc3QgcyA9IGhzbFsxXSAvIDEwMDtcblx0Y29uc3QgbCA9IGhzbFsyXSAvIDEwMDtcblxuXHRjb25zdCBjID0gbCA8IDAuNSA/ICgyLjAgKiBzICogbCkgOiAoMi4wICogcyAqICgxLjAgLSBsKSk7XG5cblx0bGV0IGYgPSAwO1xuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRjb25zdCB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdGNvbnN0IGMgPSBzICogdjtcblx0bGV0IGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBoID0gaGNnWzBdIC8gMzYwO1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0Y29uc3QgcHVyZSA9IFswLCAwLCAwXTtcblx0Y29uc3QgaGkgPSAoaCAlIDEpICogNjtcblx0Y29uc3QgdiA9IGhpICUgMTtcblx0Y29uc3QgdyA9IDEgLSB2O1xuXHRsZXQgbWcgPSAwO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lICovXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lICovXG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRjb25zdCB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdGxldCBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRjb25zdCBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdGxldCBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cdGNvbnN0IHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHRjb25zdCB3ID0gaHdiWzFdIC8gMTAwO1xuXHRjb25zdCBiID0gaHdiWzJdIC8gMTAwO1xuXHRjb25zdCB2ID0gMSAtIGI7XG5cdGNvbnN0IGMgPSB2IC0gdztcblx0bGV0IGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbMCwgMCwgYXJnc1swXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHN2ID0gY29udmVydC5ncmF5LmhzbDtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdGNvbnN0IHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuXHRjb25zdCBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdGNvbnN0IHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG5cdHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG4iLCJjb25zdCBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG5jb25zdCBjb252ZXJ0ID0ge307XG5cbmNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHRjb25zdCB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGNvbnN0IGFyZzAgPSBhcmdzWzBdO1xuXHRcdGlmIChhcmcwID09PSB1bmRlZmluZWQgfHwgYXJnMCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZzA7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZzAubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IGFyZzA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIFByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0Y29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRjb25zdCBhcmcwID0gYXJnc1swXTtcblxuXHRcdGlmIChhcmcwID09PSB1bmRlZmluZWQgfHwgYXJnMCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZzA7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZzAubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IGFyZzA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyBXZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yIChsZXQgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBQcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZyb21Nb2RlbCA9PiB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdGNvbnN0IHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdGNvbnN0IHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKHRvTW9kZWwgPT4ge1xuXHRcdGNvbnN0IGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwiY29uc3QgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdFRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHRjb25zdCBncmFwaCA9IHt9O1xuXHQvLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG5cdGNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuXHRmb3IgKGxldCBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0Y29uc3QgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdGNvbnN0IHF1ZXVlID0gW2Zyb21Nb2RlbF07IC8vIFVuc2hpZnQgLT4gcXVldWUgLT4gcG9wXG5cblx0Z3JhcGhbZnJvbU1vZGVsXS5kaXN0YW5jZSA9IDA7XG5cblx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHRjb25zdCBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKGxldCBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRjb25zdCBhZGphY2VudCA9IGFkamFjZW50c1tpXTtcblx0XHRcdGNvbnN0IG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdGNvbnN0IHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0bGV0IGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHRsZXQgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnN0IGdyYXBoID0gZGVyaXZlQkZTKGZyb21Nb2RlbCk7XG5cdGNvbnN0IGNvbnZlcnNpb24gPSB7fTtcblxuXHRjb25zdCBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAobGV0IGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRjb25zdCB0b01vZGVsID0gbW9kZWxzW2ldO1xuXHRcdGNvbnN0IG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gTm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcclxuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL29wZW5qc2Yub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZCxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2UsXG4gICAgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFzc2lnblZhbHVlYCBleGNlcHQgdGhhdCBpdCBkb2Vzbid0IGFzc2lnblxuICogYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmICgodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZXEob2JqZWN0W2tleV0sIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZXJnZWAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIG1lcmdlZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKG9iamVjdCA9PT0gc291cmNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGJhc2VGb3Ioc291cmNlLCBmdW5jdGlvbihzcmNWYWx1ZSwga2V5KSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICBpZiAoaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgID8gY3VzdG9taXplcihzYWZlR2V0KG9iamVjdCwga2V5KSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgICB9XG4gICAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9LCBrZXlzSW4pO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZU1lcmdlYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIG1lcmdlcyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBtZXJnZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIG1lcmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1lcmdlRnVuYyBUaGUgZnVuY3Rpb24gdG8gbWVyZ2UgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIG1lcmdlRnVuYywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgdmFyIG9ialZhbHVlID0gc2FmZUdldChvYmplY3QsIGtleSksXG4gICAgICBzcmNWYWx1ZSA9IHNhZmVHZXQoc291cmNlLCBrZXkpLFxuICAgICAgc3RhY2tlZCA9IHN0YWNrLmdldChzcmNWYWx1ZSk7XG5cbiAgaWYgKHN0YWNrZWQpIHtcbiAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBzdGFja2VkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICA6IHVuZGVmaW5lZDtcblxuICB2YXIgaXNDb21tb24gPSBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc0NvbW1vbikge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkoc3JjVmFsdWUpLFxuICAgICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgaXNCdWZmZXIoc3JjVmFsdWUpLFxuICAgICAgICBpc1R5cGVkID0gIWlzQXJyICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHNyY1ZhbHVlKTtcblxuICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgaWYgKGlzQXJyIHx8IGlzQnVmZiB8fCBpc1R5cGVkKSB7XG4gICAgICBpZiAoaXNBcnJheShvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGNvcHlBcnJheShvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0J1ZmYpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZUJ1ZmZlcihzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc1R5cGVkKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVUeXBlZEFycmF5KHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHNyY1ZhbHVlKSB8fCBpc0FyZ3VtZW50cyhzcmNWYWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICBpZiAoaXNBcmd1bWVudHMob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdG9QbGFpbk9iamVjdChvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaXNPYmplY3Qob2JqVmFsdWUpIHx8IGlzRnVuY3Rpb24ob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaW5pdENsb25lT2JqZWN0KHNyY1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoaXNDb21tb24pIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICBtZXJnZUZ1bmMobmV3VmFsdWUsIHNyY1ZhbHVlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIHN0YWNrWydkZWxldGUnXShzcmNWYWx1ZSk7XG4gIH1cbiAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVmYXVsdHNEZWVwYCB0byBjdXN0b21pemUgaXRzIGBfLm1lcmdlYCB1c2UgdG8gbWVyZ2Ugc291cmNlXG4gKiBvYmplY3RzIGludG8gZGVzdGluYXRpb24gb2JqZWN0cyB0aGF0IGFyZSBwYXNzZWQgdGhydS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBvYmpWYWx1ZSBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSBzb3VyY2UgdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIG1lcmdlLlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgcGFyZW50IG9iamVjdCBvZiBgb2JqVmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgcGFyZW50IG9iamVjdCBvZiBgc3JjVmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBjdXN0b21EZWZhdWx0c01lcmdlKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spIHtcbiAgaWYgKGlzT2JqZWN0KG9ialZhbHVlKSAmJiBpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG9ialZhbHVlKTtcbiAgICBiYXNlTWVyZ2Uob2JqVmFsdWUsIHNyY1ZhbHVlLCB1bmRlZmluZWQsIGN1c3RvbURlZmF1bHRzTWVyZ2UsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmpWYWx1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgLCB1bmxlc3MgYGtleWAgaXMgXCJfX3Byb3RvX19cIiBvciBcImNvbnN0cnVjdG9yXCIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzYWZlR2V0KG9iamVjdCwga2V5KSB7XG4gIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIG9iamVjdFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PSAnX19wcm90b19fJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5kZWZhdWx0c2AgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgYXNzaWduc1xuICogZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4xMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uZGVmYXVsdHNcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZhdWx0c0RlZXAoeyAnYSc6IHsgJ2InOiAyIH0gfSwgeyAnYSc6IHsgJ2InOiAxLCAnYyc6IDMgfSB9KTtcbiAqIC8vID0+IHsgJ2EnOiB7ICdiJzogMiwgJ2MnOiAzIH0gfVxuICovXG52YXIgZGVmYXVsdHNEZWVwID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJncykge1xuICBhcmdzLnB1c2godW5kZWZpbmVkLCBjdXN0b21EZWZhdWx0c01lcmdlKTtcbiAgcmV0dXJuIGFwcGx5KG1lcmdlV2l0aCwgdW5kZWZpbmVkLCBhcmdzKTtcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLm1lcmdlYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBjdXN0b21pemVyYCB3aGljaFxuICogaXMgaW52b2tlZCB0byBwcm9kdWNlIHRoZSBtZXJnZWQgdmFsdWVzIG9mIHRoZSBkZXN0aW5hdGlvbiBhbmQgc291cmNlXG4gKiBwcm9wZXJ0aWVzLiBJZiBgY3VzdG9taXplcmAgcmV0dXJucyBgdW5kZWZpbmVkYCwgbWVyZ2luZyBpcyBoYW5kbGVkIGJ5IHRoZVxuICogbWV0aG9kIGluc3RlYWQuIFRoZSBgY3VzdG9taXplcmAgaXMgaW52b2tlZCB3aXRoIHNpeCBhcmd1bWVudHM6XG4gKiAob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjaykuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IHNvdXJjZXMgVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlKSB7XG4gKiAgIGlmIChfLmlzQXJyYXkob2JqVmFsdWUpKSB7XG4gKiAgICAgcmV0dXJuIG9ialZhbHVlLmNvbmNhdChzcmNWYWx1ZSk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFsxXSwgJ2InOiBbMl0gfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiBbM10sICdiJzogWzRdIH07XG4gKlxuICogXy5tZXJnZVdpdGgob2JqZWN0LCBvdGhlciwgY3VzdG9taXplcik7XG4gKiAvLyA9PiB7ICdhJzogWzEsIDNdLCAnYic6IFsyLCA0XSB9XG4gKi9cbnZhciBtZXJnZVdpdGggPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplcik7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0c0RlZXA7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN0ZG91dDogZmFsc2UsXG5cdHN0ZGVycjogZmFsc2Vcbn07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgeyBMb2csIExhYmVsLCBSZWN1cnNpdmVQYXJ0aWFsLCBDaGFsa1N0eWxlcyB9IGZyb20gJy4nO1xuXG50eXBlIExhYmVsTWFwID0gTWFwPHN0cmluZywgTGFiZWw+O1xuXG5leHBvcnQgdHlwZSBDb25zb2xlTWV0aG9kID0gXCJlcnJvclwifFwid2FyblwifFwiaW5mb1wifFwibG9nXCJ8XCJkZWJ1Z1wifFwidHJhY2VcInxcImdyb3VwXCJ8XCJncm91cENvbGxhcHNlZFwifFwiZ3JvdXBFbmRcInxcInRhYmxlXCJ8XCJkaXJcInxcImRpcnhtbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoZWQge1xuICBjZmc6IERlZmF1bHRzO1xuICBjYWNoZTogTG9nW107XG4gIGxhYmVsczogTGFiZWxNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdHMge1xuICBsb2dfbGV2ZWw6IG51bWJlcjtcbiAgbG9nX2NhY2hlX3NpemU6IG51bWJlcjtcbiAgdXNlX2Vtb2ppOiBib29sZWFuO1xuICBiYXNlX3N0eWxlOiBzdHJpbmc7XG4gIGxvZ19sZXZlbHM6IExvZ0xldmVscztcbiAgY3VzdG9tX2xldmVsczogUGFydGlhbDxMb2dMZXZlbHM+O1xuICBmaWx0ZXJzOiBGaWx0ZXJzO1xufTtcblxuZXhwb3J0IHR5cGUgTG9nTGV2ZWxzID0ge1xuICBbbWV0aG9kOiBzdHJpbmddOiBMb2dMZXZlbERlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nTGV2ZWxEZWZpbml0aW9uIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgbGV2ZWxOYW1lPzogc3RyaW5nO1xuICBtZXRob2Q6IENvbnNvbGVNZXRob2Q7XG4gIHN0eWxlOiBzdHJpbmc7XG4gIHRlcm1pbmFsOiBDaGFsa1N0eWxlc1tdO1xuICBlbW9qaTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlcnMge1xuICBoaWRlQWxsOiBib29sZWFuO1xuICBuYW1lc3BhY2U6IEZpbHRlck9wdGlvbnM7XG4gIGxhYmVsOiBGaWx0ZXJPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlck9wdGlvbnMge1xuICBoaWRlQWxsOiBib29sZWFuO1xuICBleGNsdWRlOiBzdHJpbmdbXTtcbiAgaW5jbHVkZTogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZVBhcnRpYWw8RGVmYXVsdHM+IHt9OyIsImltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCB7IExvZ0xldmVsRGVmaW5pdGlvbiwgQ29uZmlndXJhdGlvbiwgQ29uc29sZU1ldGhvZCwgRGVmYXVsdHMgfSBmcm9tIFwiLlwiO1xuXG4vKipcbiAqIEZpbmdlcnByaW50IG9mIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHlvdSBleGVjdXRlXG4gKiBhIGxvZyBtZXRob2Qgc3VjaCBhcyBpbmZvKCkuXG4gKi9cbmV4cG9ydCB0eXBlIExvZ0Z1bmN0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBUZXJtaW5hdGVkTG9nO1xuXG4vKipcbiAqIEZpbmdlcnByaW50IG9mIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHlvdSBleGVjdXRlXG4gKiBhIGN1c3RvbSBsb2cgbWV0aG9kIGRlZmluZWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCB0eXBlIEN1c3RvbUxvZ0Z1bmN0aW9uID0gKGxldmVsTmFtZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkgPT4gVGVybWluYXRlZExvZztcblxuLyoqXG4gKiBUaGUga2V5cyBvZiB0aGUgZGVmYXVsdCB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kcyBpbmNsdWRlZCB3aXRoIEFkemUuXG4gKi9cbmV4cG9ydCB0eXBlIFRlcm1pbmF0aW5nTWV0aG9kS2V5cyA9IFwiYXR0ZW50aW9uXCJ8XCJlcnJvclwifFwid2FyblwifFwiZmFpbFwifFwic3VjY2Vzc1wifFwiaW5mb1wifFwibG9nXCJ8XCJkZWJ1Z1wifFwidmVyYm9zZVwiO1xuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIGludGVyZmFjZSBmb3IgdGhlIGRlZmF1bHQgQWR6ZSB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IHR5cGUgVGVybWluYXRpbmdNZXRob2RzID0ge1xuICBbbWV0aG9kIGluIFRlcm1pbmF0aW5nTWV0aG9kS2V5c106IExvZ0Z1bmN0aW9uO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dUaW1lc3RhbXAge1xuICB1bml4TWlsbGk6IG51bWJlcjtcbiAgdXRjOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQm9vbGVhbiBmbGFncyB0aGF0IHJlcHJlc2VudCB2YXJpb3VzIHN0YXRlcyBvZiBob3cgdGhlIGxvZ1xuICogc2hvdWxkIGJlIHByaW50ZWQuXG4gKi9cbmludGVyZmFjZSBMb2dGbGFncyB7XG4gIHRyYWNlYWJsZTogYm9vbGVhbjtcbiAgYXNzZXJ0aW9uPzogYm9vbGVhbjtcbiAgZXhwcmVzc2lvbj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVmFsdWVzIG9mIHRoZSBsb2cgaW5zdGFuY2UgdGhhdCBkZXRlcm1pbmUgaG93IGl0IHNob3VsZFxuICogYmUgcHJpbnRlZC5cbiAqL1xuaW50ZXJmYWNlIExvZ1ZhbHVlcyB7XG4gIGNmZzogQ29uZmlndXJhdGlvbjtcbiAgdGltZXN0YW1wPzogTG9nVGltZXN0YW1wO1xuICByZW5kZXI/OiBMb2dSZW5kZXI7XG4gIGxldmVsPzogbnVtYmVyO1xuICBhcmdzPzogYW55W107XG4gIG5hbWVzcGFjZVZhbD86IHN0cmluZztcbiAgbGFiZWxWYWw/OiBMYWJlbDtcbiAgdGltZU5vd1ZhbD86IHN0cmluZztcbiAgbWV0YT86IGFueTtcbiAgbW9kaWZpZXJRdWV1ZTogRnVuY3Rpb25bXTtcbiAgcHJpbnRlcihsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOiBMb2dSZW5kZXI7XG59XG5cbi8qKlxuICogQWxsIG9mIHRoZSB1c2VyIGFjY2Vzc2libGUgbWV0aG9kcyB0aGF0IGNhbiBiZSBjaGFpbmVkIHRvXG4gKiBjcmVhdGUgYSBjdXN0b21pemVkIGxvZy5cbiAqL1xuaW50ZXJmYWNlIExvZ01ldGhvZHMge1xuICBjdXN0b206IEN1c3RvbUxvZ0Z1bmN0aW9uO1xuICBzZWFsKHRoaXM6IExvZyk6ICgpID0+IExvZztcbiAgXG4gIC8vIE1vZGlmaWVyIEZ1bmN0aW9uc1xuICBjb3VudCgpOiBMb2c7XG4gIGNvdW50UmVzZXQoKTogTG9nO1xuICBkaXIoKTogTG9nO1xuICBkaXJ4bWwoKTogTG9nO1xuICB0YWJsZSgpOiBMb2c7XG4gIGFzc2VydChhc3NlcnRpb246IGJvb2xlYW4pOiBMb2c7XG4gIHRlc3QoZXhwcmVzc2lvbjogYm9vbGVhbik6IExvZztcbiAgZ3JvdXAoKTogTG9nO1xuICBncm91cENvbGxhcHNlZCgpOiBMb2c7XG4gIGdyb3VwRW5kKCk6IExvZztcbiAgbGFiZWwobmFtZTogc3RyaW5nKTogTG9nO1xuICBucyhuczogc3RyaW5nKTogTG9nO1xuICBuYW1lc3BhY2UobnM6IHN0cmluZyk6IExvZztcbiAgdHJhY2UoKTogTG9nO1xuICB0aW1lKCk6IExvZztcbiAgdGltZU5vdygpOiBMb2c7XG4gIHRpbWVFbmQoKTogTG9nO1xufVxuXG4vKipcbiAqIFRoZSBmaW5hbCBBZHplIGxvZyBvYmplY3QgcHJvdG90eXBlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2cgZXh0ZW5kcyBMb2dGbGFncywgTG9nVmFsdWVzLCBMb2dNZXRob2RzLCBUZXJtaW5hdGluZ01ldGhvZHMge307XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluYWxMb2cgZXh0ZW5kcyBMb2cge1xuICBsZXZlbDogbnVtYmVyO1xuICBhcmdzOiBhbnlbXTtcbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHZhbHVlIGZvciBhIExvZy5cbiAqL1xudHlwZSBBcmd1bWVudHMgPSBhbnlbXTtcbmV4cG9ydCB0eXBlIExvZ1JlbmRlciA9IFtDb25zb2xlTWV0aG9kLCBBcmd1bWVudHNdO1xuXG4vKipcbiAqIFRoZSBmaW5hbCB2YWx1ZSBvZiBhIGxvZyBhZnRlciBpdCBoYXMgYmVlbiB0ZXJtaW5hdGVkLiBUaGlzIGlzIHVzZWZ1bCBmb3IgXG4gKiBnbGVhbmluZyB0aGUgZmluYWwgcmVuZGVyIGluZm9ybWF0aW9uIGFuZCBnZXR0aW5nIHRoZSBMb2cgaW5zdGFuY2UgZm9yIFxuICogdW5pdCB0ZXN0aW5nIHB1cnBvc2VzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlcm1pbmF0ZWRMb2cge1xuICBsb2c6IExvZ3xGaW5hbExvZztcbiAgcmVuZGVyOiBMb2dSZW5kZXJ8bnVsbDtcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9BZHplJztcbmV4cG9ydCAqIGZyb20gJy4vTG9nJztcbmV4cG9ydCAqIGZyb20gJy4vQnVuZGxlJztcbmV4cG9ydCAqIGZyb20gJy4vU2hlZCc7XG5leHBvcnQgKiBmcm9tICcuL0NvbmZpZ3VyYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9MYWJlbCc7XG5leHBvcnQgKiBmcm9tICcuL1N0eWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL0hyVGltZSc7XG5leHBvcnQgKiBmcm9tICcuL1V0aWxpdHknOyIsImltcG9ydCB7IGlzQ2hyb21lLCBpc0ZpcmVmb3gsIGlzU2FmYXJpIH0gZnJvbSAnfi9nbG9iYWwnO1xuaW1wb3J0IHsgRGVmYXVsdHMgfSBmcm9tIFwifi9fY29udHJhY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0czogRGVmYXVsdHMgPSB7XG4gIGxvZ19sZXZlbDogOCxcbiAgbG9nX2NhY2hlX3NpemU6IDMwMCxcbiAgdXNlX2Vtb2ppOiBmYWxzZSxcbiAgYmFzZV9zdHlsZTogJ2ZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7IGJvcmRlci13aWR0aDogMXB4OyBib3JkZXItc3R5bGU6IHNvbGlkOycsXG4gIGN1c3RvbV9sZXZlbHM6IHt9LFxuICBsb2dfbGV2ZWxzOiB7XG4gICAgdmVyYm9zZToge1xuICAgICAgbGV2ZWw6IDgsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDI2cHg7IGJvcmRlci1jb2xvcjogMXB4IHNvbGlkICNkOWRjZTA7IGNvbG9yOiAjOTk5OTk5OyBib3JkZXItY29sb3I6ICNjYmM5Yzk7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ2l0YWxpYycsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnZGVidWcnLFxuICAgICAgZW1vamk6ICfwn5KkJ1xuICAgIH0sXG4gICAgZGVidWc6IHtcbiAgICAgIGxldmVsOiA3LFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAzOHB4OyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDlkY2UwOyBjb2xvcjogIzQ2NTQ2NDsgYm9yZGVyLWNvbG9yOiAjOTk5OTk5OycsXG4gICAgICB0ZXJtaW5hbDogWydiZ0JsYWNrJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdkZWJ1ZycsXG4gICAgICBlbW9qaTogJ/CfkJ4nXG4gICAgfSxcbiAgICBsb2c6IHtcbiAgICAgIGxldmVsOiA2LFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiA1MHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNkOWRjZTApOyBjb2xvcjogIzMzMzQzNTsgYm9yZGVyLWNvbG9yOiAjYmZjMWM1O2AsXG4gICAgICB0ZXJtaW5hbDogWydiZ0dyYXknLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2xvZycsXG4gICAgICBlbW9qaTogJ/Cfk5MnXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBsZXZlbDogNSxcbiAgICAgIHN0eWxlOiAncGFkZGluZy1yaWdodDogMjZweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjY2VlZGM5KTsgY29sb3I6ICM0ZTU5NGQ7IGJvcmRlci1jb2xvcjogI2I3ZDFiMzsnLFxuICAgICAgdGVybWluYWw6IFsnYmdHcmVlbicsICdncmF5J10sXG4gICAgICBtZXRob2Q6ICdpbmZvJyxcbiAgICAgIGVtb2ppOiAn8J+OiSdcbiAgICB9LFxuICAgIGZhaWw6IHtcbiAgICAgIGxldmVsOiA0LFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiAkeyBpc0Nocm9tZSA/ICc0MicgOiAnNDQnIH1weDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZkMWQxKTsgY29sb3I6ICNhNDAwMGY7IGJvcmRlci1jb2xvcjogI2UzYmJiYjtgLFxuICAgICAgdGVybWluYWw6IFsnYmdSZWQnLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfinYwnXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICBsZXZlbDogMyxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHsgaXNTYWZhcmkgPyAnNDknIDogJzQ0JyB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2IyZDdmZik7IGNvbG9yOiAjNDY1NDY0OyBib3JkZXItY29sb3I6ICM5NmI1ZDc7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmx1ZScsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/Cfk6wnXG4gICAgfSxcbiAgICB3YXJuOiB7XG4gICAgICBsZXZlbDogMixcbiAgICAgIHN0eWxlOiBgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZmMGE4KTsgY29sb3I6ICM3MTUxMDA7IGJvcmRlci1jb2xvcjogI2UzZDY5NjsgcGFkZGluZy1yaWdodDogJHsgaXNDaHJvbWUgPyAnMzQnIDogJzQ0JyB9cHg7IGAsXG4gICAgICB0ZXJtaW5hbDogWydiZ1llbGxvdycsICdncmF5J10sXG4gICAgICBtZXRob2Q6ICd3YXJuJyxcbiAgICAgIGVtb2ppOiAn8J+UlCdcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBsZXZlbDogMSxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHsgaXNDaHJvbWUgPyAnMjknIDogJzI3JyB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2ZmZDFkMSk7IGNvbG9yOiAjYTQwMDBmOyBib3JkZXItY29sb3I6ICNlM2JiYmI7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnUmVkJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdlcnJvcicsXG4gICAgICBlbW9qaTogJ/CflKUnXG4gICAgfSxcbiAgICBhdHRlbnRpb246IHtcbiAgICAgIGxldmVsOiAwLFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAxNXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNlMmJhZmYpOyBjb2xvcjogIzQ4M2M1MTsgYm9yZGVyLWNvbG9yOiAjYzE5ZmQ5OycsXG4gICAgICB0ZXJtaW5hbDogWyd3aGl0ZScsJ2JvbGQnLCdiZ01hZ2VudGEnXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfwn4yIJyxcbiAgICB9LFxuICB9LFxuICBmaWx0ZXJzOiB7XG4gICAgaGlkZUFsbDogZmFsc2UsXG4gICAgbmFtZXNwYWNlOiB7XG4gICAgICBoaWRlQWxsOiBmYWxzZSxcbiAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgaW5jbHVkZTogW10sXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgaGlkZUFsbDogZmFsc2UsXG4gICAgICBleGNsdWRlOiBbXSxcbiAgICAgIGluY2x1ZGU6IFtdLFxuICAgIH1cbiAgfSxcbn07XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vZGVmYXVsdHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGVkX2RlZmF1bHRzJztcblxuIiwiaW1wb3J0IHsgU2hlZENvbmZpZyB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5cbmV4cG9ydCBjb25zdCBzaGVkX2RlZmF1bHRzOiBTaGVkQ29uZmlnID0ge1xuICBjYWNoZV9saW1pdDogMzAwLFxuICBnbG9iYWxfY2ZnOiBudWxsLFxuICBmaWx0ZXJzOiB7fSxcbn07IiwiY29uc3QgZGVmYXVsdHNEZWVwID0gcmVxdWlyZSgnbG9kYXNoLmRlZmF1bHRzZGVlcCcpO1xuXG5pbXBvcnQgeyBMb2csIENvbmZpZ3VyYXRpb24sIERlZmF1bHRzIH0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IGxvZ01ldGhvZCwgY3VzdG9tTWV0aG9kLCBzZWFsIH0gZnJvbSAnfi90ZXJtaW5hdG9ycyc7XG5pbXBvcnQge1xuICBjb3VudCwgY291bnRSZXNldCwgZGlyLCBkaXJ4bWwsIHRhYmxlLCBhc3NlcnQsXG4gIHRlc3QsICBncm91cCwgZ3JvdXBDb2xsYXBzZWQsIGdyb3VwRW5kLCBsYWJlbCxcbiAgbmFtZXNwYWNlLCBucywgdHJhY2UsIHRpbWUsIHRpbWVOb3csIHRpbWVFbmQsXG59IGZyb20gJ34vbW9kaWZpZXJzJztcbmltcG9ydCB7IHByaW50TG9nIH0gZnJvbSAnfi9wcmludGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJ34vX2RlZmF1bHRzJztcblxuLypcbiAqIEZ1dHVyZSBwbGFubmVkIGZlYXR1cmVzOlxuICogXG4gKiAxLiBVUkwgUGFyYW0gdG8gY29udHJvbCB0aGUgQWR6ZSBlbnZpcm9ubWVudCAocGFyYW0gbmFtZSBpcyBjb25maWd1cmFibGUpLlxuICogMi4gQW5hbHl0aWNzIGFuZCBSZXBvcnRpbmcgc3VwcG9ydC5cbiAqIDMuIFJlbW90ZSBzZXJ2ZXIgZm9yIHJlY2VpdmluZyBhbmQgYW5hbHl6aW5nIGxvZ3MuXG4gKiA0LiBBdHRhY2ggbWV0YSBkYXRhIHRvIGxvZ3MgKGZvciBsaXN0ZW5lcnMgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YpLlxuICogNS4gQWRkIGRlZmF1bHQgbWV0YSBkYXRhIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBsb2cuXG4gKiA2LiBQZXJzaXN0IGxvZ3MgaW4gbG9jYWxTdG9yYWdlIChjb25maWd1cmFibGUsIG9mZiBieSBkZWZhdWx0KS5cbiAqIDcuIEFkZCBlYXN5IGZ1bmN0aW9ucyBmb3IgdHJhbnNwb3J0aW5nIGxvZ2dpbmcgZGF0YSB0byB2YXJpb3VzIHNvdXJjZXMuXG4gKiAgICAgYS4gV3JpdGUgdG8gYSBmaWxlLlxuICogICAgIGIuIFdyaXRlIHRvIGxvY2FsIHN0b3JhZ2UuXG4gKiAgICAgYy4gUHVzaCB0byBhbiBBUEkgZW5kcG9pbnQuXG4gKi9cblxuLyoqXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIEFkemUgbG9ncy4gVGhpcyBmYWN0b3J5IGZ1bmN0aW9uIGNhbiBiZSB1c2VkIGRpcmVjdGx5IG9yIGNvbmZpZ3VyYXRpb25cbiAqIGNhbiBiZSBwcm92aWRlZCBhbmQgdGhlIHJlc3VsdCBjYW4gYmUgYXNzaWduZWQgdG8gYSBuZXcgdmFyaWFibGUuIFRoaXMgYWxsb3dzIGZvciBtdWx0aXBsZVxuICogbG9nZ2luZyBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uZmlndXJhdGlvbnMuXG4gKiBcbiAqIC0tLSBEZWZhdWx0IGxldmVscyAtLS1cbiAqIFxuICogMC4gYXR0ZW50aW9uXG4gKiAxLiBlcnJvclxuICogMi4gd2FyblxuICogMy4gaW5mb1xuICogNC4gZmFpbFxuICogNS4gc3VjY2Vzc1xuICogNi4gbG9nXG4gKiA3LiBkZWJ1Z1xuICogOC4gdmVyYm9zZSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkemUodXNlcl9jZmc6IENvbmZpZ3VyYXRpb24gPSB7fSk6TG9nIHtcbiAgY29uc3QgY2ZnID0gZGVmYXVsdHNEZWVwKHVzZXJfY2ZnLCBkZWZhdWx0cykgYXMgRGVmYXVsdHM7XG5cbiAgcmV0dXJuIHtcbiAgICBjZmcsXG4gICAgdHJhY2VhYmxlOiBmYWxzZSxcbiAgICBtb2RpZmllclF1ZXVlOiBbXSxcbiAgICBwcmludGVyOiBwcmludExvZyxcblxuICAgIGF0dGVudGlvbjogIGxvZ01ldGhvZChjZmcsICdhdHRlbnRpb24nKSxcbiAgICBlcnJvcjogICAgICBsb2dNZXRob2QoY2ZnLCAnZXJyb3InKSxcbiAgICB3YXJuOiAgICAgICBsb2dNZXRob2QoY2ZnLCAnd2FybicpLFxuICAgIGluZm86ICAgICAgIGxvZ01ldGhvZChjZmcsICdpbmZvJyksXG4gICAgZmFpbDogICAgICAgbG9nTWV0aG9kKGNmZywgJ2ZhaWwnKSxcbiAgICBzdWNjZXNzOiAgICBsb2dNZXRob2QoY2ZnLCAnc3VjY2VzcycpLFxuICAgIGxvZzogICAgICAgIGxvZ01ldGhvZChjZmcsICdsb2cnKSxcbiAgICBkZWJ1ZzogICAgICBsb2dNZXRob2QoY2ZnLCAnZGVidWcnKSxcbiAgICB2ZXJib3NlOiAgICBsb2dNZXRob2QoY2ZnLCAndmVyYm9zZScpLFxuICAgIGN1c3RvbTogICAgIGN1c3RvbU1ldGhvZChjZmcpLFxuXG4gICAgc2VhbCwgY291bnQsIGNvdW50UmVzZXQsXG4gICAgZGlyLCBkaXJ4bWwsIHRhYmxlLCBhc3NlcnQsIHRlc3QsIGdyb3VwLCBncm91cENvbGxhcHNlZCxcbiAgICBncm91cEVuZCwgbGFiZWwsIG5hbWVzcGFjZSwgbnMsIHRyYWNlLCB0aW1lLCB0aW1lTm93LCB0aW1lRW5kLFxuICB9O1xufSIsImltcG9ydCB7IEJ1bmRsZSwgQnVuZGxlciwgQnVuZGxlZExvZywgTG9nIH0gZnJvbSAnfi9fY29udHJhY3RzJztcblxuLyoqXG4gKiBCdW5kbGVzIGFsbCBsb2dzIHRvZ2V0aGVyIGJ5IHdyYXBwaW5nIGFsbCBzdWJzZXF1ZW50IGxvZ3MgaW4gYSBCdW5kbGUgY2FsbGJhY2tcbiAqIHRoYXQgY3VycmllcyB0aGVtIGludG8gYW4gYXJyYXkuIFRoaXMgYnVuZGxlIGFycmF5IGNhbiBiZSB1c2VkIHRvIHJlY2FsbCBhbmRcbiAqIGZpbHRlciBsb2dzLlxuICogXG4gKiAqKkV4YW1wbGU6KipcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IGJ1bmRsZWQgPSBidW5kbGUoYWR6ZSgpKTtcbiAqIGJ1bmRsZWQubG9nKFwiVGhpcyBpcyBhIGxvZy5cIik7XG4gKiBidW5kbGVkLmxvZyhcIlRoaXMgaXMgYW5vdGhlciBsb2cuXCIpO1xuICogYnVuZGxlLmFsbCgpOyAvLyAtPiByZXByaW50cyBhbGwgXCJidW5kbGVkXCIgbG9ncy5cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVuZGxlKGxvZzogTG9nKTpCdW5kbGVyIHtcbiAgY29uc3QgYnVuZGxlX2FyciA9IFtdIGFzIEJ1bmRsZTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgYnVuZGxlZF9sb2c6IEJ1bmRsZWRMb2cgPSB7XG4gICAgICAuLi5sb2csXG4gICAgICBnZXQgYnVuZGxlKCkge1xuICAgICAgICByZXR1cm4gYnVuZGxlX2FycjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGJ1bmRsZV9hcnIucHVzaChidW5kbGVkX2xvZyk7XG4gICAgcmV0dXJuIGJ1bmRsZWRfbG9nO1xuICB9O1xufTsiLCJpbXBvcnQgeyBMb2csIERlZmF1bHRzLCBMb2dMZXZlbERlZmluaXRpb24gfSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHsgZW52LCBpc0Jyb3dzZXIgfSBmcm9tICd+L2dsb2JhbCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSBmYXRlIG9mIHdoZXRoZXIgdGhpcyBsb2cgd2lsbCB0ZXJtaW5hdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd2VkKGNmZzogRGVmYXVsdHMsIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uKTpib29sZWFuIHtcbiAgcmV0dXJuIGxldmVsQWN0aXZlKGRlZiwgY2ZnLmxvZ19sZXZlbCkgJiYgbm90VGVzdEVudigpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBsb2cgbGV2ZWwgaXMgaGlnaCBlbm91Z2ggZm9yIHRoZSBsb2cgdG8gdGVybWluYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGV2ZWxBY3RpdmUoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGxldmVsOiBudW1iZXIpOmJvb2xlYW4ge1xuICByZXR1cm4gZGVmLmxldmVsIDw9IGxldmVsO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFueSBhc3NlcnRpb25zIG9yIGV4cHJlc3Npb25zIHBhc3MgZm9yIHRoaXMgbG9nIHRvIHRlcm1pbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2YWxQYXNzZXMobG9nOiBMb2cpOmJvb2xlYW4ge1xuICBpZiAobG9nLmFzc2VydGlvbiAhPT0gdW5kZWZpbmVkICYmIGxvZy5leHByZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLndhcm4oXCJZb3UgaGF2ZSBkZWNsYXJlZCBib3RoIGFuIGFzc2VydGlvbiBhbmQgdGVzdCBvbiB0aGUgc2FtZSBsb2cuIFBsZWFzZSBvbmx5IGRlY2xhcmUgb25lIG9yIG5lZmFyaW91cyByZXN1bHRzIG1heSBvY2N1ci5cIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGxvZy5hc3NlcnRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBsb2cuYXNzZXJ0aW9uID09PSBmYWxzZTtcbiAgfVxuICBpZiAobG9nLmV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBsb2cuZXhwcmVzc2lvbiA9PT0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBWZXJpZnkgdGhhdCB0aGlzIGxvZyBpcyBub3QgaW4gYSB0ZXN0IGVudmlyb25tZW50IGFuZCBwcmV2ZW50XG4gKiB0ZXJtaW5hdGlvbiBpZiBpdCBpcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdFRlc3RFbnYoKTpib29sZWFuIHtcbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBlbnY/LkFEWkVfRU5WICE9PSAndGVzdCc7XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb25kaXRpb25zJzsiLCJpbXBvcnQgeyBMb2csIExvZ1JlbmRlciB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5cbi8vIENPTlZFUlQgQVBJIFRPIEVYUE9SVCBGSUxURVIgRlVOQ1NcblxuLyoqXG4gKiBSZS1yZW5kZXIgdGhlIGJ1bmRsZSBvZiBsb2dzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQWxsKGJ1bmRsZTogTG9nW10gPSBbXSk6dm9pZCB7XG4gIGxvb3BCdW5kbGUoYnVuZGxlLCAobG9nKSA9PiB0cnVlKTtcbn1cblxuLyoqXG4gKiBGaWx0ZXIgdGhlIGJ1bmRsZSBvZiBsb2dzIGJ5IHRoZSBuYW1lc3BhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJOYW1lc3BhY2UoYnVuZGxlOiBMb2dbXSA9IFtdLCBuczogc3RyaW5nKTp2b2lkIHtcbiAgbG9vcEJ1bmRsZShidW5kbGUsIChsb2cpID0+IGxvZy5uYW1lc3BhY2VWYWwgPT09IG5zKTtcbn1cblxuLyoqXG4gKiBGaWx0ZXIgYW5kIHJlbmRlciB0aGUgYnVuZGxlIG9mIGxvZ3MgYnkgdGhlIGxhYmVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTGFiZWwoYnVuZGxlOiBMb2dbXSA9IFtdLCBsYmw6IHN0cmluZyk6dm9pZCB7XG4gIGxvb3BCdW5kbGUoYnVuZGxlLCAobG9nKSA9PiBsb2cubGFiZWxWYWw/Lm5hbWUgPT09IGxibCk7XG59XG5cbi8qKlxuICogRmlsdGVyIHRoZSBidW5kbGUgb2YgbG9ncyBieSB0aGVpciBsb2cgbGV2ZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJMZXZlbFJhbmdlKGJ1bmRsZTogTG9nW10gPSBbXSwgbG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcik6dm9pZCB7XG4gIGxvb3BCdW5kbGUoYnVuZGxlLCAobG9nLCBybmRyKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSAobG9nLmxldmVsID8/IEluZmluaXR5KTtcbiAgICByZXR1cm4gbGV2ZWwgPj0gbG93ICYmIGxldmVsIDw9IGhpZ2g7XG4gIH0pO1xufVxuXG4vKipcbiAqIExvb3BzIG92ZXIgYSBidW5kbGUgb2YgbG9ncyBhbmQgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIGZvciBlYWNoIGxvZyB0aGF0IFxuICogaGFzIGEgcmVuZGVyIHZhbHVlLlxuICovXG5mdW5jdGlvbiBsb29wQnVuZGxlKGJ1bmRsZTogTG9nW10sIGNiOiAobG9nOiBMb2csIHJuZHI6IExvZ1JlbmRlcikgPT4gYm9vbGVhbik6dm9pZCB7XG4gIGJ1bmRsZS5mb3JFYWNoKGxvZyA9PiB7XG4gICAgaWYgKGxvZy5yZW5kZXIpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNiKGxvZywgbG9nLnJlbmRlcik7XG4gICAgICBpZiAocmVzdWx0KSByZW5kZXIobG9nLnJlbmRlcik7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgYSBsb2cgYmFzZWQgb24gYSByZW5kZXIgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKFsgbWV0aG9kLCBhcmdzIF06IExvZ1JlbmRlcik6dm9pZCB7XG4gIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2ZpbHRlcnMnOyIsImltcG9ydCB7IFNoZWQgfSBmcm9tICd+L3NoZWQnO1xuaW1wb3J0IHsgZ2V0U2VhcmNoUGFyYW1zIH0gZnJvbSAnfi91dGlsJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAkc2hlZD86IFNoZWQ7XG4gICAgQURaRV9FTlY/OiBzdHJpbmc7XG4gIH1cbiAgbmFtZXNwYWNlIE5vZGVKUyB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBHbG9iYWwge1xuICAgICAgJHNoZWQ/OiBTaGVkO1xuICAgICAgQURaRV9FTlY/OiBzdHJpbmc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbnY6IFdpbmRvd3xOb2RlSlMuR2xvYmFsID0gZ2xvYmFsID8gZ2xvYmFsIDogd2luZG93O1xuZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgY29uc3QgZW52SXNXaW5kb3cgPSAoZW52OiBXaW5kb3d8Tm9kZUpTLkdsb2JhbCk6IGVudiBpcyBXaW5kb3cgPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkO1xufTtcblxubGV0IGlzQ2hyb21lVmFyID0gZmFsc2U7XG5sZXQgaXNGaXJlZm94VmFyID0gZmFsc2U7XG5sZXQgaXNTYWZhcmlWYXIgPSBmYWxzZTtcblxuaWYgKGVudklzV2luZG93KGVudikpIHtcbiAgaXNDaHJvbWVWYXIgPSBlbnY/Lm5hdmlnYXRvcj8udXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIikgPiAtMTtcbiAgaXNGaXJlZm94VmFyID0gZW52Py5uYXZpZ2F0b3I/LnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSA+IC0xO1xuICBpc1NhZmFyaVZhciA9IGVudj8ubmF2aWdhdG9yPy51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSA+IC0xICYmICFpc0Nocm9tZVZhcjtcbn1cblxuZXhwb3J0IGNvbnN0IGlzQ2hyb21lID0gaXNDaHJvbWVWYXI7XG5leHBvcnQgY29uc3QgaXNGaXJlZm94ID0gaXNGaXJlZm94VmFyO1xuZXhwb3J0IGNvbnN0IGlzU2FmYXJpID0gaXNTYWZhcmlWYXI7IiwiaW1wb3J0IHsgTG9nLCBMb2dGdW5jdGlvbiB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBhZHplIH0gZnJvbSAnfi9hZHplJztcbmltcG9ydCB7IGJ1bmRsZSB9IGZyb20gJ34vYnVuZGxlJztcbmltcG9ydCB7IHNoZWRFeGlzdHMsIGNyZWF0ZVNoZWQsIHJlbW92ZVNoZWQgfSBmcm9tICd+L3NoZWQnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICd+L19kZWZhdWx0cyc7XG5pbXBvcnQgeyBmaWx0ZXJBbGwsIGZpbHRlckxhYmVsLCBmaWx0ZXJMZXZlbFJhbmdlLCBmaWx0ZXJOYW1lc3BhY2UsIHJlbmRlciB9IGZyb20gJ34vZmlsdGVycyc7XG5cbmV4cG9ydCB7XG4gIGFkemUsXG4gIHNoZWRFeGlzdHMsXG4gIGNyZWF0ZVNoZWQsXG4gIHJlbW92ZVNoZWQsXG4gIGRlZmF1bHRzLFxuICBMb2csXG4gIExvZ0Z1bmN0aW9uLFxuICBidW5kbGUsXG4gIGZpbHRlckFsbCxcbiAgZmlsdGVyTGFiZWwsXG4gIGZpbHRlckxldmVsUmFuZ2UsXG4gIGZpbHRlck5hbWVzcGFjZSxcbiAgcmVuZGVyLFxufTsiLCJleHBvcnQgKiBmcm9tICcuL2xhYmVsJzsiLCJpbXBvcnQgeyBMYWJlbCB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICd+L2dsb2JhbCc7XG5pbXBvcnQgeyBzaGVkRXhpc3RzIH0gZnJvbSAnfi9zaGVkJztcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBnZXQgYSBsYWJlbCBieSB0aGUgZ2l2ZW4gbmFtZSBmcm9tIHRoZSBzaGVkIGlmIGl0IGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVsKG5hbWU6IHN0cmluZyk6TGFiZWx8dW5kZWZpbmVkIHtcbiAgY29uc3Qgc2hlZCA9IGVudi4kc2hlZDtcbiAgaWYgKHNoZWRFeGlzdHMoc2hlZCkpIHtcbiAgICByZXR1cm4gc2hlZC5nZXRMYWJlbChuYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGFkZCBhIGxhYmVsIHRvIHRoZSBnbG9iYWwgc3RvcmUgaWYgaXQgZXhpc3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGFiZWwobGFiZWw6IExhYmVsKTpMYWJlbCB7XG4gIGNvbnN0IHNoZWQgPSBlbnYuJHNoZWQ7XG4gIGlmIChzaGVkRXhpc3RzKHNoZWQpKSB7XG4gICAgc2hlZC5hZGRMYWJlbChsYWJlbCk7XG4gIH1cbiAgcmV0dXJuIGxhYmVsO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIEFkZHMgdG8gdGhlIGxvZyBjb3VudCBmb3IgbG9nIGluc3RhbmNlcyB0aGF0IHNoYXJlIHRoaXMgbG9nJ3MgbGFiZWwuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvY291bnQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgPSB0aGlzLmxhYmVsVmFsLmNvdW50ID8/IDA7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ICs9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIGNvdW50IGZvciB0aGUgbG9nIGluc3RhbmNlcyB0aGF0IHNoYXJlIHRoaXMgbG9nJ3MgbGFiZWwuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvY291bnRSZXNldClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50UmVzZXQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ID0gMDtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFVuc2V0cyB0aGUgY291bnQgZm9yIHRoZSBsb2cgaW5zdGFuY2VzIHRoYXQgc2hhcmUgdGhpcyBsb2cncyBsYWJlbC5cbiAqIFxuICogVGhpcyBpcyBhIG5vbi1zdGFuZGFyZCBtZXRob2QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudENsZWFyKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC5jb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBwcmludERpciwgcHJpbnREaXJ4bWwsIHByaW50VGFibGUgfSBmcm9tICd+L3ByaW50ZXJzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8qKlxuICogSW5zdHJ1Y3RzIHRoaXMgbG9nIHRvIHByaW50IGluIHRoZSBkaXIgZm9ybWF0LiBUeXBpY2FsbHkgdGhpcyBpcyB1c2VmdWxcbiAqIGZvciByZW5kZXJpbmcgZGVlcGx5IG5lc3RlZCBvYmplY3RzIGluIHRoZSBjb25zb2xlLlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2RpcilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpcih0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnREaXI7XG4gIH0pO1xufVxuXG4vKipcbiAqIEluc3RydWN0cyB0aGlzIGxvZyB0byBwcmludCBpbiB0aGUgZGlyeG1sIGZvcm1hdC4gVHlwaWNhbGx5IHRoaXMgaXMgdXNlZnVsXG4gKiBmb3IgcmVuZGVyaW5nIEhUTUwvRE9NIG9yIFhNTCBFbGVtZW50cyBpbiB0aGUgY29uc29sZS5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS9kaXJ4bWwpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXJ4bWwodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50RGlyeG1sO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnN0cnVjdHMgdGhpcyBsb2cgdG8gcHJpbnQgaXRzIGFyZ3VtZW50IGluIGEgdGFibGUgZm9ybWF0LlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL3RhYmxlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFibGUodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50VGFibGU7XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBwcmludEdyb3VwLCBwcmludEdyb3VwQ29sbGFwc2VkLCBwcmludEdyb3VwRW5kIH0gZnJvbSAnfi9wcmludGVycyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIFN0YXJ0cyBhIGxvZyBncm91cC5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS9ncm91cClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTdGFydHMgYSBsb2cgZ3JvdXAgdGhhdCBpcyBjb2xsYXBzZWQgYnkgZGVmYXVsdC5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS9ncm91cENvbGxhcHNlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQ29sbGFwc2VkKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwQ29sbGFwc2VkO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFbmRzIHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBsb2cgZ3JvdXAuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZ3JvdXBFbmQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cEVuZCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRHcm91cEVuZDtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IGdldExhYmVsLCBhZGRMYWJlbCB9IGZyb20gJ34vbGFiZWwnO1xuaW1wb3J0IHsgcHJpbnRUcmFjZSB9IGZyb20gJ34vcHJpbnRlcnMnO1xuaW1wb3J0IHsgcHJlcGVuZE1vZGlmaWVyLCBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIEFkZHMgYSBsYWJlbCB0byB0aGUgbG9nLiBMYWJlbCdzIGNhbiBiZSB1c2VkIGZvciBsb2cgaWRlbnRpZmljYXRpb25cbiAqIGFuZCBncm91cGluZy4gTGFiZWwncyBhbHNvIGxpbmsgbG9nIGluc3RhbmNlcyB0b2dldGhlci5cbiAqIFxuICogVGhpcyBpcyBhIG5vbi1zdGFuZGFyZCBBUEksIGJ1dCBpdCByZXBsYWNlcyB0aGUgbmVlZCB0byBwcm92aWRlXG4gKiBhIGxhYmVsIHRvIGBjb3VudCgpYCBvciBgdGltZSgpYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsKHRoaXM6IExvZywgbmFtZTogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gcHJlcGVuZE1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmxhYmVsVmFsID0gYWRkTGFiZWwoZ2V0TGFiZWwobmFtZSkgPz8geyBuYW1lIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBZGRzIGEgbmFtZXNwYWNlIHRvIHRoZSBsb2cuIE5hbWVzcGFjZSdzIGFyZSBwcmltYXJpbHkgdXNlZnVsXG4gKiBmb3IgZ3JvdXBpbmcgbG9ncyB0b2dldGhlci5cbiAqIFxuICogVGhpcyBpcyBhIG5vbi1zdGFuZGFyZCBBUEkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2UodGhpczogTG9nLCBuczogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMubmFtZXNwYWNlVmFsID0gbnM7XG4gIH0pO1xufVxuXG4vKipcbiAqIEFuIGFsaWFzIGZvciBgbmFtZXNwYWNlKClgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbnModGhpczogTG9nLCBuczogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gdGhpcy5uYW1lc3BhY2UobnMpO1xufVxuXG4vKipcbiAqIFByaW50cyBhIHN0YWNrdHJhY2UgYWxvbmcgd2l0aCB0aGUgbG9nLlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL3RyYWNlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2UodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50VHJhY2U7XG4gIH0pXG59XG5cbi8qKlxuICogQWRkcyBjdXN0b20gbWV0YSBkYXRhIHRvIHRoZSBsb2cgaW5zdGFuY2UuIFRoaXMgaXMgdXNlZnVsXG4gKiBmb3Igc2NyYXBpbmcgZXh0cmEgZGF0YSBmcm9tIGEgbG9nIGZyb20gYSBsb2cgbGlzdGVuZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKHRoaXM6IExvZywgZGF0YTogYW55KTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMubWV0YSA9IGRhdGE7XG4gIH0pO1xufSIsImV4cG9ydCAqIGZyb20gJy4vdGltaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vY291bnRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXR0aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXBpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9pZGVudGlmeWluZyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGlmaWVyJztcbmV4cG9ydCAqIGZyb20gJy4vdGVzdGluZyc7XG5cbiIsImltcG9ydCB7IExvZyB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5cbi8qKlxuICogUXVldWVzIGEgbW9kaWZpZXIgbWV0aG9kIGZvciBleGVjdXRpb24gd2hlbiB0aGUgbG9nIGlzIHRlcm1pbmF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb2RpZmllcihsb2c6IExvZywgZnVuYzogRnVuY3Rpb24pOkxvZyB7XG4gIGxvZy5tb2RpZmllclF1ZXVlID0gbG9nLm1vZGlmaWVyUXVldWUuY29uY2F0KFtmdW5jXSk7XG4gIHJldHVybiBsb2c7XG59XG5cbi8qKlxuICogUXVldWVzIGEgbW9kaWZpZXIgbWV0aG9kIGZvciBleGVjdXRpb24gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgcXVldWUgd2hlbiB0aGUgbG9nIGlzIHRlcm1pbmF0ZWQuXG4gKiBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgbGFiZWxzIGFyZSBhcHBsaWVkIGJlZm9yZSBtb2RpZmllcnMgdGhhdCB1c2UgbGFiZWxzIGFyZSBleGVjdXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRNb2RpZmllcihsb2c6IExvZywgZnVuYzogRnVuY3Rpb24pOkxvZyB7XG4gIGxvZy5tb2RpZmllclF1ZXVlID0gW2Z1bmNdLmNvbmNhdChsb2cubW9kaWZpZXJRdWV1ZSk7XG4gIHJldHVybiBsb2c7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnfi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8qKlxuICogUHJpbnRzIGEgbG9nIHdhcm5pbmcgdGhhdCB0aGUgYXNzZXJ0aW9uIGZhaWxlZCBpZiB0aGUgYXNzZXJ0aW9uIGlzIGZhbHNlLlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9jb25zb2xlL2Fzc2VydClcbiAqLyBcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQodGhpczogTG9nLCBhc3NlcnRpb246IGJvb2xlYW4pOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5hc3NlcnRpb24gPSBhc3NlcnRpb247XG4gIH0pO1xufVxuXG4vKipcbiAqIEFsbG93cyB0aGUgbG9nIHRvIHByaW50IGlmIHRoZSBleHByZXNzaW9uIGlzIHRydWUuXG4gKiBcbiAqIFRoaXMgaXMgYSBub24tc3RhbmRhcmQgbWV0aG9kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVzdCh0aGlzOiBMb2csIGV4cHJlc3Npb246IGJvb2xlYW4pOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfSk7XG59IiwiY29uc3QgaHJ0aW1lID0gcmVxdWlyZSgnYnJvd3Nlci1wcm9jZXNzLWhydGltZScpO1xuXG5pbXBvcnQgeyBMb2csIEhyVGltZSB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIFN0YXJ0cyBhIHRpbWVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxvZydzICpsYWJlbCouIFRoaXMgd2lsbCBkbyBub3RoaW5nIGlmXG4gKiB0aGlzIGxvZyBoYXMgbm8gbGFiZWwuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvdGltZSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC50aW1lU3RhcnQgPSBocnRpbWUoKTtcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIGxvZyByZW5kZXIgdG8gc2hvdyB0aGUgY3VycmVudCBoaWdoLXJlc29sdXRpb24gcmVhbCB0aW1lLlxuICogXG4gKiBUaGlzIGlzIGEgbm9uLXN0YW5kYXJkIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVOb3codGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVfbm93ID0gZm9ybWF0VGltZShocnRpbWUoKSk7XG4gICAgdGhpcy5sYWJlbFZhbCA/IHRoaXMubGFiZWxWYWwudGltZU5vdyA9IHRpbWVfbm93IDogdGhpcy50aW1lTm93VmFsID0gdGltZV9ub3c7XG4gIH0pXG59XG5cbi8qKlxuICogU3RvcHMgYSB0aW1lciB0aGF0IHdhcyBwcmV2aW91c2x5IHN0YXJ0ZWQgYnkgY2FsbGluZyB0aW1lKCkgb24gYSAqbGFiZWxlZCogbG9nLiBDYWxjdWxhdGVzIHRoZSBcbiAqIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgc3RhcnQgdGltZSBhbmQgd2hlbiB0aGlzIG1ldGhvZCB3YXMgY2FsbGVkLiBUaGlzIHRoZW5cbiAqIG1vZGlmaWVzIHRoZSBsb2cgcmVuZGVyIHRvIHNob3cgdGhlIHRpbWUgZGlmZmVyZW5jZS4gVGhpcyB3aWxsIGRvIG5vdGhpbmcgaWYgdGhlICpsYWJlbCogZG9lc1xuICogbm90IGV4aXN0LlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL3RpbWVFbmQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZUVuZCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwudGltZUVsbGFwc2VkID0gZm9ybWF0VGltZShocnRpbWUodGhpcy5sYWJlbFZhbC50aW1lU3RhcnQpKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKlxuICAhIGNvbnNvbGUudGltZUxvZygpIGlzIHB1cnBvc2VmdWxseSBvbWl0dGVkIGZyb20gdGhpcyBBUEkuXG5cbiAgdGltZUxvZygpIGlzIGEgdXNlbGVzcyBtZXRob2Qgd2l0aGluIHRoZSBBZHplIEFQSS4gVGhlIHNhbWUgZWZmZWN0IGNhbiBiZSBcbiAgYWNjb21wbGlzaGVkIGJ5IGNyZWF0ZWQgYSBuZXcgbG9nIHdpdGggdGhlIHNhbWUgbGFiZWwuXG4qL1xuXG4vKipcbiAqIFRha2VzIGFuIEhyVGltZSB0dXBsZSBhbmQgY29udmVydHMgaXQgaW50byBhIGh1bWFuLXJlYWRhYmxlIGZvcm1hdHRlZFxuICogc3RyaW5nIGluIHRoZSBmb3JtYXQgb2YgYHtzZWN9cyB7bXN9bXNgLlxuICovXG5mdW5jdGlvbiBmb3JtYXRUaW1lKFsgc2VjLCBuYW5vIF06IEhyVGltZSk6c3RyaW5nIHtcbiAgcmV0dXJuIGAke3NlY31zICR7bmFubyAvIDEwMDAwMDB9bXNgO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wcmludGVycyc7IiwiaW1wb3J0IHsgTG9nLCBMb2dMZXZlbERlZmluaXRpb24sIExvZ1JlbmRlciB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBhcHBseVJlbmRlciwgdG9Db25zb2xlIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IGVudiB9IGZyb20gJ34vZ2xvYmFsJztcbmltcG9ydCB7IGluaXRpYWxDYXBzIH0gZnJvbSAnfi91dGlsJztcblxuLy8gLS0tLS0tLSBQUklOVCBNRVRIT0RTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludExvZyhsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IFsgbWV0aG9kLCBsZWFkZXIsIHN0eWxlLCBtZXRhIF0gPSBbIGRlZi5tZXRob2QsIGZMZWFkZXIoZGVmLCB1c2VfZW1vamksIGFyZ3MpLCAobG9nLmNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSwgZk1ldGEobG9nLCB1c2VfZW1vamkpIF07XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gbWV0YSA9PT0gJycgPyBbIGxlYWRlciwgc3R5bGUsIC4uLmFyZ3MgXSA6IFsgbGVhZGVyLCBzdHlsZSwgbWV0YSwgLi4uYXJncyBdO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgbWV0aG9kLCByZW5kZXJfYXJncyApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXAobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCBwYXJ0aWFsX2FyZ3MgPSBbIGZMZWFkZXIoZGVmLCB1c2VfZW1vamksIGFyZ3MpLCAobG9nLmNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gWyAuLi5wYXJ0aWFsX2FyZ3MsIGFyZ3NbMF0gXSA6IHBhcnRpYWxfYXJncztcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csICdncm91cCcsIHJlbmRlcl9hcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwQ29sbGFwc2VkKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgcGFydGlhbF9hcmdzID0gWyBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSwgKGxvZy5jZmcuYmFzZV9zdHlsZSArIGRlZi5zdHlsZSkgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IFsgLi4ucGFydGlhbF9hcmdzLCBhcmdzWzBdIF0gOiBwYXJ0aWFsX2FyZ3M7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZ3JvdXBDb2xsYXBzZWQnLCByZW5kZXJfYXJncykpO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIEZPUk1BVFRFUlMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZMZWFkZXIoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOnN0cmluZyB7XG4gIHJldHVybiBgICVjJHtmRW1vamkoZGVmLCB1c2VfZW1vamkpfSAke2ZOYW1lKGRlZi5sZXZlbE5hbWUpfSgke2FyZ3MubGVuZ3RofSlgO1xufVxuXG5mdW5jdGlvbiBmRW1vamkoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbik6c3RyaW5nIHtcbiAgcmV0dXJuIGVudi4kc2hlZD8ub3ZlcnJpZGVzPy51c2VfZW1vamkgfHwgdXNlX2Vtb2ppID8gYCAke2RlZi5lbW9qaX1gIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZOYW1lKG5hbWU6IHN0cmluZ3x1bmRlZmluZWQpOnN0cmluZyB7XG4gIHJldHVybiBpbml0aWFsQ2FwcyhuYW1lID8/ICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZNZXRhKGxvZzogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOnN0cmluZyB7XG4gIHJldHVybiBgJHtmTmFtZXNwYWNlKGxvZyl9JHtmTGFiZWwobG9nKX0ke2ZUaW1lKGxvZywgdXNlX2Vtb2ppKX0ke2ZDb3VudChsb2cpfSR7ZlRlc3QobG9nLCB1c2VfZW1vamkpfWA7XG59XG5cbmZ1bmN0aW9uIGZUaW1lKGxvZzogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOnN0cmluZyB7XG4gIGNvbnN0IGxhYmVsX3R4dCA9IGAke2xvZy5sYWJlbFZhbD8udGltZU5vdyA/PyBsb2cubGFiZWxWYWw/LnRpbWVFbGxhcHNlZCA/PyAnJ31gO1xuICByZXR1cm4gbGFiZWxfdHh0ICE9PSAnJyA/IGAgKCR7ZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSB8fCB1c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmQ291bnQobG9nOiBMb2cpOnN0cmluZyB7XG4gIGNvbnN0IGNvdW50ID0gbG9nLmxhYmVsVmFsPy5jb3VudDtcbiAgcmV0dXJuIGNvdW50ICE9PSB1bmRlZmluZWQgPyBgKENvdW50OiAke2NvdW50fSlgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZOYW1lc3BhY2UobG9nOiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBsb2cubmFtZXNwYWNlVmFsID8gYCMke2xvZy5uYW1lc3BhY2VWYWx9IGAgOiAnJztcbn1cblxuZnVuY3Rpb24gZkxhYmVsKGxvZzogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gbG9nLmxhYmVsVmFsID8gYFske2xvZy5sYWJlbFZhbC5uYW1lfV0gYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmVGVzdChsb2c6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTpzdHJpbmcge1xuICByZXR1cm4gbG9nLmFzc2VydGlvbiA9PT0gZmFsc2UgPyBgJHt1c2VfZW1vamkgPyAn4p2MICcgOiAnJ31Bc3NlcnRpb24gZmFpbGVkOmAgOiAnJztcbn0iLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICd+L2dsb2JhbCc7XG5pbXBvcnQge1xuICBwcmludExvZyBhcyBwcmludExvZ0Jyb3dzZXIsXG4gIHByaW50R3JvdXAgYXMgcHJpbnRHcm91cEJyb3dzZXIsXG4gIHByaW50R3JvdXBDb2xsYXBzZWQgYXMgcHJpbnRHcm91cENvbGxhcHNlZEJyb3dzZXIsXG59IGZyb20gJy4vYnJvd3Nlcic7XG5pbXBvcnQge1xuICBwcmludExvZyBhcyBwcmludExvZ05vZGUsXG4gIHByaW50R3JvdXAgYXMgcHJpbnRHcm91cE5vZGUsXG4gIHByaW50R3JvdXBDb2xsYXBzZWQgYXMgcHJpbnRHcm91cENvbGxhcHNlZE5vZGUsXG59IGZyb20gJy4vbm9kZSc7XG5pbXBvcnQge1xuICBwcmludCxcbiAgcHJpbnRHcm91cEVuZCxcbiAgcHJpbnRUYWJsZSxcbiAgcHJpbnREaXIsXG4gIHByaW50RGlyeG1sLFxuICBwcmludFRyYWNlLFxufSBmcm9tICcuL3NoYXJlZCc7XG5cbmNvbnN0IHByaW50TG9nID0gaXNCcm93c2VyID8gcHJpbnRMb2dCcm93c2VyIDogcHJpbnRMb2dOb2RlO1xuY29uc3QgcHJpbnRHcm91cCA9IGlzQnJvd3NlciA/IHByaW50R3JvdXBCcm93c2VyIDogcHJpbnRHcm91cE5vZGU7XG5jb25zdCBwcmludEdyb3VwQ29sbGFwc2VkID0gaXNCcm93c2VyID8gcHJpbnRHcm91cENvbGxhcHNlZEJyb3dzZXIgOiBwcmludEdyb3VwQ29sbGFwc2VkTm9kZTtcblxuZXhwb3J0IHtcbiAgcHJpbnQsXG4gIHByaW50TG9nLFxuICBwcmludEdyb3VwLFxuICBwcmludEdyb3VwQ29sbGFwc2VkLFxuICBwcmludEdyb3VwRW5kLFxuICBwcmludFRhYmxlLFxuICBwcmludERpcixcbiAgcHJpbnREaXJ4bWwsXG4gIHByaW50VHJhY2UsXG59OyIsImV4cG9ydCAqIGZyb20gJy4vcHJpbnRlcnMnOyIsImltcG9ydCAqIGFzIGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IExvZywgTG9nTGV2ZWxEZWZpbml0aW9uLCBMb2dSZW5kZXIgfSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHsgdG9Db25zb2xlLCBhcHBseVJlbmRlciB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICd+L2dsb2JhbCc7XG5pbXBvcnQgeyBpbml0aWFsQ2FwcyB9IGZyb20gJ34vdXRpbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2cobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCBbIG1ldGhvZCwgbGVhZGVyLCBzdHlsZSwgbWV0YSBdID0gWyBkZWYubWV0aG9kLCBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSwgZGVmLnRlcm1pbmFsLCBmTWV0YShsb2csIHVzZV9lbW9qaSkgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBtZXRhID09PSAnJyA/IFsgbGVhZGVyLCAuLi5hcmdzIF0gOiBbIGxlYWRlciwgc3R5bGUsIG1ldGEsIC4uLmFyZ3MgXTtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csIG1ldGhvZCwgcmVuZGVyX2FyZ3MgKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBzZXR1cFByaW50R3JvdXAoZGVmLCB1c2VfZW1vamksIGFyZ3MpO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2dyb3VwJywgcmVuZGVyX2FyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXBDb2xsYXBzZWQobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCByZW5kZXJfYXJncyA9IHNldHVwUHJpbnRHcm91cChkZWYsIHVzZV9lbW9qaSwgYXJncyk7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZ3JvdXBDb2xsYXBzZWQnLCByZW5kZXJfYXJncykpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFByaW50R3JvdXAoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOmFueVtdIHtcbiAgY29uc3QgcGFydGlhbF9hcmdzID0gWyBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSBdO1xuICByZXR1cm4gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBbIC4uLnBhcnRpYWxfYXJncywgYXJnc1swXSBdIDogcGFydGlhbF9hcmdzO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIEZPUk1BVFRFUlMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZMZWFkZXIoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOnN0cmluZyB7XG4gIGNvbnN0IGVtb2ppID0gdXNlX2Vtb2ppID8gZkVtb2ppKGRlZi5lbW9qaSkgOiAnJztcbiAgY29uc3QgcGFkZGluZyA9IHVzZV9lbW9qaSA/ICgxNCArIGVtb2ppLmxlbmd0aCkgOiAxNDtcbiAgY29uc3QgcGFkZGVkX2xlYWRlciA9IGFkZFBhZGRpbmcoYCR7ZW1vaml9ICR7Zk5hbWUoZGVmLmxldmVsTmFtZSl9KCR7YXJncy5sZW5ndGh9KWAsIHBhZGRpbmcpO1xuICBcbiAgcmV0dXJuIGRlZi50ZXJtaW5hbC5yZWR1Y2UoKGFjYywgc3R5bGUpID0+IHtcbiAgICByZXR1cm4gY2hhbGtbc3R5bGVdKGFjYyk7XG4gIH0sIHBhZGRlZF9sZWFkZXIpO1xufVxuXG4vKipcbiAqIEFkZCBzcGFjZXMgdG8gdGhlIGVuZCBvZiBhIGxvZyB0aXRsZSB0byBtYWtlIHRoZW0gYWxsIGFsaWduLlxuICovXG5mdW5jdGlvbiBhZGRQYWRkaW5nKHN0cjogc3RyaW5nLCBsZW46IG51bWJlcik6c3RyaW5nIHtcbiAgY29uc3QgZGlmZiA9IGxlbiAtIHN0ci5sZW5ndGg7XG4gIGxldCBwYWRkZWQgPSBzdHI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGRpZmY7IGkgKz0gMSkge1xuICAgIHBhZGRlZCArPSAnICc7XG4gIH1cbiAgcmV0dXJuIHBhZGRlZDtcbn1cblxuZnVuY3Rpb24gZkVtb2ppKGVtb2ppOiBzdHJpbmcpOnN0cmluZyB7XG4gIHJldHVybiBgICR7ZW1vaml9YDtcbn1cblxuZnVuY3Rpb24gZk5hbWUobmFtZTogc3RyaW5nfHVuZGVmaW5lZCk6c3RyaW5nIHtcbiAgcmV0dXJuIGluaXRpYWxDYXBzKG5hbWUgPz8gJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZk1ldGEobG9nOiBMb2csIHVzZV9lbW9qaTogYm9vbGVhbik6c3RyaW5nIHtcbiAgcmV0dXJuIGAke2ZOYW1lc3BhY2UobG9nKX0ke2ZMYWJlbChsb2cpfSR7ZlRpbWUobG9nLCB1c2VfZW1vamkpfSR7ZkNvdW50KGxvZyl9JHtmVGVzdChsb2csIHVzZV9lbW9qaSl9YDtcbn1cblxuZnVuY3Rpb24gZlRpbWUobG9nOiBMb2csIHVzZV9lbW9qaTogYm9vbGVhbik6c3RyaW5nIHtcbiAgY29uc3QgbGFiZWxfdHh0ID0gYCR7bG9nLnRpbWVOb3dWYWwgPz8gbG9nLmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJycgPyBgKCR7ZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSB8fCB1c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmQ291bnQobG9nOiBMb2cpOnN0cmluZyB7XG4gIGNvbnN0IGNvdW50ID0gbG9nLmxhYmVsVmFsPy5jb3VudDtcbiAgcmV0dXJuIGNvdW50ICE9PSB1bmRlZmluZWQgPyBgKENvdW50OiAke2NvdW50fSlgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZOYW1lc3BhY2UobG9nOiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBsb2cubmFtZXNwYWNlVmFsID8gYCMke2xvZy5uYW1lc3BhY2VWYWx9IGAgOiAnJztcbn1cblxuZnVuY3Rpb24gZkxhYmVsKGxvZzogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gbG9nLmxhYmVsVmFsID8gYFske2xvZy5sYWJlbFZhbC5uYW1lfV0gYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmVGVzdChsb2c6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTpzdHJpbmcge1xuICByZXR1cm4gbG9nLmFzc2VydGlvbiA9PT0gZmFsc2UgPyBgJHt1c2VfZW1vamkgPyAn4p2MICcgOiAnJ31Bc3NlcnRpb24gZmFpbGVkOmAgOiAnJztcbn0iLCJpbXBvcnQgeyBMb2csIExvZ1JlbmRlciwgRGVmYXVsdHMsIENvbnNvbGVNZXRob2QsIExvZ0xldmVsRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9fY29udHJhY3RzXCI7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi9nbG9iYWwnO1xuXG4vLyAtLS0tLS0tIFBSSU5UIEVOVFJZIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludChsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCB1c2VfZW1vamkgPSBlbnYuJHNoZWQ/Lm92ZXJyaWRlcz8udXNlX2Vtb2ppID09PSB0cnVlIHx8IGxvZy5jZmcudXNlX2Vtb2ppID09PSB0cnVlO1xuICByZXR1cm4gbG9nLnByaW50ZXIobG9nLCBkZWYsIHVzZV9lbW9qaSwgYXJncyk7XG59XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRHcm91cEVuZChsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZ3JvdXBFbmQnLCBbXSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRUYWJsZShsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAndGFibGUnLCBhcmdzKSwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnREaXIobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2RpcicsIGFyZ3MpLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludERpcnhtbChsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZGlyeG1sJywgYXJncyksIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VHJhY2UobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ3RyYWNlJywgYXJncykpO1xufVxuXG4vLyAtLS0tLS0gUHJpbnQgdG8gdGhlIGNvbnNvbGUgLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZW5kZXIobG9nOiBMb2csIG1ldGhvZDogQ29uc29sZU1ldGhvZCwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGxvZy5yZW5kZXIgPSBbbWV0aG9kLCBhcmdzXTtcbiAgcmV0dXJuIGxvZy5yZW5kZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0NvbnNvbGUocmVuZGVyOiBMb2dSZW5kZXIsIHNwcmVhZDogYm9vbGVhbiA9IHRydWUpOkxvZ1JlbmRlciB7XG4gIGNvbnN0IFttZXRob2QsIGFyZ3NdID0gcmVuZGVyO1xuICBpZiAoZW52LkFEWkVfRU5WICE9PSAnZGV2Jykge1xuICAgIGlmIChzcHJlYWQpIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZVttZXRob2RdKGFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVuZGVyO1xufSIsImltcG9ydCBkZWZhdWx0c0RlZXAgZnJvbSAnbG9kYXNoLmRlZmF1bHRzZGVlcCc7XG5pbXBvcnQge1xuICBTaGVkQ29uZmlnLCBEZWZhdWx0cywgTGFiZWwsXG4gIFNoZWRVc2VyQ29uZmlnLCBGaW5hbExvZywgQnVuZGxlLFxuICBMb2dMZXZlbERlZmluaXRpb24sIExpc3RlbmVyTG9jYXRpb25zLFxuICBMaXN0ZW5lckJ1Y2tldCwgTGlzdGVuZXJDYWxsYmFjaywgTGFiZWxNYXAsIExpc3RlbmVyQnVja2V0c1xufSBmcm9tICd+L19jb250cmFjdHMnO1xuaW1wb3J0IHsgZGVmYXVsdHMsIHNoZWRfZGVmYXVsdHMgfSBmcm9tICd+L19kZWZhdWx0cyc7XG5cbmltcG9ydCB7IGVudiB9IGZyb20gJ34vZ2xvYmFsJztcblxudHlwZSBHbG9iYWxGaWx0ZXJzID0gXCJsYWJlbFwifFwibmFtZXNwYWNlXCJ8XCJsZXZlbFwiO1xuXG4vKipcbiAqIEEgdHlwZWd1YXJkIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBnbG9iYWwgc2hlZCBzdG9yZSBleGlzdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGVkRXhpc3RzKHN0b3JlOiBTaGVkfHVuZGVmaW5lZCk6c3RvcmUgaXMgU2hlZCB7XG4gIHJldHVybiBzdG9yZSAhPT0gdW5kZWZpbmVkO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNoZWQgaW5zdGFuY2UgaW4geW91ciBlbnZpcm9ubWVudCdzIGdsb2JhbCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hlZChjb25maWc6IFNoZWRVc2VyQ29uZmlnKTp2b2lkIHtcbiAgZW52LiRzaGVkID0gbmV3IFNoZWQoY29uZmlnKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBzaGVkIGZyb20gdGhlIGVudmlyb25tZW50J3MgZ2xvYmFsIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTaGVkKCk6dm9pZCB7XG4gIGRlbGV0ZSBlbnYuJHNoZWQ7XG59XG5cbi8qKlxuICogQSBnbG9iYWwgc3RvcmUgZm9yIGNhY2hpbmcsIGxpc3RlbmluZywgYW5kIHJlY2FsbGluZyBBZHplIGxvZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGVkIHtcblxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gZm9yIFNoZWQuIFNoZWQgaXMgY29uc3RydWN0ZWQgd2l0aCBhIHNldCBvZiBcbiAgICogZGVmYXVsdHMgdGhhdCBjYW4gb3ZlcnJpZGVuIGJ5IHRoZSBjb25maWd1cmF0aW9uIHN1cHBsaWVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBjZmc6IFNoZWRDb25maWc7XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIGZpbmFsaXplZCBsb2dzICh0ZXJtaW5hdGVkIGFuZCBoYXZlIG1ldGEgZGF0YSBhcHBsaWVkIHRvIHRoZW0pLiBUaGlzXG4gICAqIGlzIG1haW5seSB1c2VkIGZvciByZWNhbGxpbmcgbG9ncyBhbmQgZmlsdGVyaW5nIHRoZW0uXG4gICAqL1xuICBwcml2YXRlIGNhY2hlOiBGaW5hbExvZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIGxhYmVsIGluc3RhbmNlcy4gVXNlZnVsIGZvciBnbG9iYWxseSBsaW5raW5nIGxhYmVsbGVkIGxvZ3MuXG4gICAqL1xuICBwcml2YXRlIGxhYmVsczogTGFiZWxNYXAgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIENvdW50ZXIgZm9yIGdlbmVyYXRpbmcgSUQncyBmb3IgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBpZF9jb3VudGVyOiBudW1iZXIgPSAtMTtcblxuICAvKipcbiAgICogQ2FjaGUgb2YgbG9nIGxpc3RlbmVycy4gVGhlc2UgYXJlIGZpcmUgd2hlbiBzcGVjaWZpZWQgbG9nIGxldmVsc1xuICAgKiBhcmUgcHJpbnRlZC5cbiAgICovXG4gIHByaXZhdGUgbGlzdGVuZXJzOiBMaXN0ZW5lckJ1Y2tldHMgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBTaGVkVXNlckNvbmZpZykge1xuICAgIHRoaXMuY2ZnID0gZGVmYXVsdHNEZWVwKGNvbmZpZywgc2hlZF9kZWZhdWx0cyk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gICAqIEdFVC9TRVQgTUVUSE9EU1xuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIFN0b3JlIGEgbG9nIGluIHRoZSBzaGVkIGZvciBsYXRlciByZWNhbGwuXG4gICAqL1xuICBwdWJsaWMgc3RvcmUobG9nOiBGaW5hbExvZyk6dm9pZCB7XG4gICAgaWYgKHRoaXMuY2FjaGUubGVuZ3RoIDwgdGhpcy5jZmcuY2FjaGVfbGltaXQpIHtcbiAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmNhY2hlLmNvbmNhdChbbG9nXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpbWl0IGZvciB0aGUgbWF4aW11bSBudW1iZXIgb2YgbG9ncyB0aGF0IFNoZWQgd2lsbCBjYWNoZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgY2FjaGVMaW1pdChsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5jZmcuY2FjaGVfbGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsaW1pdCBmb3IgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxvZ3MgdGhhdCBTaGVkIHdpbGwgY2FjaGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhY2hlTGltaXQoKTpudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNmZy5jYWNoZV9saW1pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBvZiB0aGUgY2FjaGVkIGxvZ3Mgb2YgdGhlIHByb3ZpZGVkIGxldmVscyBhcyBhIGJ1bmRsZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHJlY2FsbGluZyBsb2dzIGFuZCBhcHBseWluZyBmaWx0ZXJzLlxuICAgKi9cbiAgcHVibGljIGdldEJ1bmRsZShsZXZlbHM6IG51bWJlcltdKTpCdW5kbGUge1xuICAgIHJldHVybiB0aGlzLmNhY2hlLnJlZHVjZSgoYWNjLCBsb2cpID0+IHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGxldmVscy5pbmNsdWRlcyhsb2cubGV2ZWwpID8gWyBsb2cgXSA6IFtdKTtcbiAgICB9LCBbXSBhcyBCdW5kbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgc2hlZCBpbnN0YW5jZSBoYXMgZ2xvYmFsIEFkemUgY29uZmlnIG92ZXJyaWRlcyBzZXQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc092ZXJyaWRlcygpOmJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNmZy5nbG9iYWxfY2ZnICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGdsb2JhbCBBZHplIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzLlxuICAgKi9cbiAgcHVibGljIGdldCBvdmVycmlkZXMoKTpEZWZhdWx0c3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jZmcuZ2xvYmFsX2NmZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGhpZGVBbGwgZmlsdGVyIHByb3BlcnR5LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaGlkZUFsbCgpOmJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNmZz8uZmlsdGVycy5oaWRlQWxsID8/IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGdsb2JhbCBBZHplIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzLlxuICAgKi9cbiAgcHVibGljIHNldCBjb25maWcoY2ZnOiBEZWZhdWx0c3xudWxsKSB7XG4gICAgY29uc3QgZGVmYXVsdGVkID0gY2ZnID8gZGVmYXVsdHNEZWVwKGNmZywgZGVmYXVsdHMpIDogY2ZnO1xuICAgIHRoaXMuY2ZnLmdsb2JhbF9jZmcgPSBkZWZhdWx0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGFiZWwgZnJvbSB0aGUgU2hlZCBieSBuYW1lLlxuICAgKi9cbiAgcHVibGljIGdldExhYmVsKG5hbWU6IHN0cmluZyk6TGFiZWx8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuZ2V0KG5hbWUpO1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkcyBhIGxhYmVsIHRvIHRoZSBTaGVkIHRvIGJlIHRyYWNrZWQgZ2xvYmFsbHkuXG4gICAqL1xuICBwdWJsaWMgYWRkTGFiZWwobGFiZWw6IExhYmVsKTp2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzTGFiZWwobGFiZWwubmFtZSkpIHtcbiAgICAgIHRoaXMubGFiZWxzLnNldChsYWJlbC5uYW1lLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIGEgbGFiZWwgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBleGlzdHMgaW4gdGhlIFNoZWQgbGFiZWwgY2FjaGUuXG4gICAqL1xuICBwdWJsaWMgaGFzTGFiZWwobmFtZTogc3RyaW5nKTpib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuaGFzKG5hbWUpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICAgKiBMSVNURU5FUiBNRVRIT0RTXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQWRkIGEgbGlzdGVuZXIgY2FsbGJhY2sgdGhhdCBmaXJlcyBhbnkgdGltZSBhIGxvZyBvZiBvbmUgb2YgdGhlIHByb3ZpZGVkIGxldmVscyBpcyBnZW5lcmF0ZWQuXG4gICAqL1xuICBwdWJsaWMgYWRkTGlzdGVuZXIobGV2ZWxzOiBudW1iZXJbXSwgY2I6IExpc3RlbmVyQ2FsbGJhY2spOkxpc3RlbmVyTG9jYXRpb25zIHtcbiAgICByZXR1cm4gbGV2ZWxzLm1hcCgobHZsOiBudW1iZXIpID0+IHtcblxuICAgICAgLy8gR2V0IHRoZSBtYXAgZm9yIHRoZSBsaXN0ZW5lcnMgb2YgdGhlIGdpdmVuIGxvZyBsZXZlbC5cbiAgICAgIGNvbnN0IGxldmVsX21hcCA9IHRoaXMubGlzdGVuZXJCdWNrZXQobHZsKTtcbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIGZvciB0aGUgbGlzdGVuZXIuXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYXNzaWduSWQoKTtcblxuICAgICAgLy8gQXNzaWduIGFuIElEIHRvIHRoZSBsaXN0ZW5lciBmb3IgbGF0ZXIgdGVhcmRvd24uXG4gICAgICBsZXZlbF9tYXAuc2V0KGlkLCBjYik7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQobHZsLCBsZXZlbF9tYXApO1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIGxpc3RlbmVyIGxvY2F0aW9uIHR1cGxlXG4gICAgICByZXR1cm4gW2x2bCwgaWRdO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsb2cgbGlzdGVuZXJzIGF0IHRoZSBnaXZlbiBidWNrZXQgbG9jYXRpb25zLlxuICAgKi8gXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lcihsb2NhdGlvbnM6IExpc3RlbmVyTG9jYXRpb25zKTp2b2lkIHtcbiAgICBsb2NhdGlvbnMuZm9yRWFjaCgoW2x2bF9pZCwgaWRdKSA9PiB7XG4gICAgICBjb25zdCBsZXZlbCA9IHRoaXMubGlzdGVuZXJzLmdldChsdmxfaWQpO1xuICAgICAgbGV2ZWw/LmRlbGV0ZShpZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZSBhbnkgbG9nIGxpc3RlbmVycyBmb3IgdGhlIHByb3ZpZGVkIGxvZy5cbiAgICovXG4gIHB1YmxpYyBmaXJlTGlzdGVuZXJzKGxvZzogRmluYWxMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uKTp2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5nZXQobG9nLmxldmVsKT8uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICBsaXN0ZW5lcih7IC4uLmxvZywgLi4uZGVmIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICAgKiBHTE9CQUwgRklMVEVSIE1FVEhPRFNcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbG9nIGluc3RhbmNlIHNob3VsZCBiZSBcbiAgICogYWxsb3dlZCB0byBwcmludC5cbiAgICovXG4gIHB1YmxpYyBsb2dHbG9iYWxseUFsbG93ZWQobG9nOiBGaW5hbExvZyk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmhpZGVBbGxcbiAgICAgICYmIHRoaXMubG9nQWxsb3dlZExvZ2ljKCdsYWJlbCcsIGxvZz8ubGFiZWxWYWw/Lm5hbWUpXG4gICAgICAmJiB0aGlzLmxvZ0FsbG93ZWRMb2dpYygnbGV2ZWwnLCBsb2cubGV2ZWwpXG4gICAgICAmJiB0aGlzLmxvZ0FsbG93ZWRMb2dpYygnbmFtZXNwYWNlJywgbG9nLm5hbWVzcGFjZVZhbCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBwcm92aWRlZCB2YWx1ZSBwYXNzZXMgdXNlciBjb25maWd1cmVkXG4gICAqIGdsb2JhbCBmaWx0ZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2dBbGxvd2VkTG9naWMoY2F0ZWdvcnk6IEdsb2JhbEZpbHRlcnMsIHZhbHVlOiBzdHJpbmd8bnVtYmVyfHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgLy8gSWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCB3ZSBjYW5ub3QgZGV0ZXJtaW5lIGlmIGl0IHNob3VsZCBoaWRlIHRoZSBsb2dcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcklzU2V0KCdpbmNsdWRlJywgY2F0ZWdvcnkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0luY2x1ZGVkKGNhdGVnb3J5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcklzU2V0KCdleGNsdWRlJywgY2F0ZWdvcnkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc05vdEV4Y2x1ZGVkKGNhdGVnb3J5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhcyB0aGUgdXNlciBoYXMgZGVmaW5lZCBydWxlcyBmb3IgYSBzcGVjaWZpYyBmaWx0ZXI/XG4gICAqL1xuICBwcml2YXRlIGZpbHRlcklzU2V0KHR5cGU6IFwiaW5jbHVkZVwifFwiZXhjbHVkZVwiLCBmaWx0ZXI6IEdsb2JhbEZpbHRlcnMpOmJvb2xlYW4ge1xuICAgIGNvbnN0IGluY2x1ZGVfcHJvcCA9IHRoaXMuY2ZnPy5maWx0ZXJzPy5bZmlsdGVyXT8uaW5jbHVkZSA/PyBbXTtcbiAgICByZXR1cm4gaW5jbHVkZV9wcm9wLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogSXMgdGhlIGxvZyBpbiB0aGUgaW5jbHVkZWQgZmlsdGVyP1xuICAgKi9cbiAgcHJpdmF0ZSBpc0luY2x1ZGVkKGZpbHRlcjogR2xvYmFsRmlsdGVycywgdmFsdWU6IHN0cmluZ3xudW1iZXIpOmJvb2xlYW4ge1xuICAgIGNvbnN0IGZpbHRlcl92YWxzID0gdGhpcy5jZmc/LmZpbHRlcnM/LltmaWx0ZXJdPy5pbmNsdWRlID8/IDxhbnk+W107XG4gICAgcmV0dXJuIGZpbHRlcl92YWxzLmxlbmd0aCA+IDAgJiYgZmlsdGVyX3ZhbHMuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIElzIHRoZSBsb2cgbm90IGluIHRoZSBleGNsdWRlZCBmaWx0ZXI/XG4gICAqL1xuICBwcml2YXRlIGlzTm90RXhjbHVkZWQoZmlsdGVyOiBHbG9iYWxGaWx0ZXJzLCB2YWx1ZTogc3RyaW5nfG51bWJlcik6Ym9vbGVhbiB7XG4gICAgY29uc3QgZmlsdGVyX3ZhbHMgPSB0aGlzLmNmZz8uZmlsdGVycz8uW2ZpbHRlcl0/LmV4Y2x1ZGUgPz8gPGFueT5bXTtcbiAgICByZXR1cm4gZmlsdGVyX3ZhbHMubGVuZ3RoID4gMCAmJiBmaWx0ZXJfdmFscy5pbmRleE9mKHZhbHVlKSA9PT0gLTE7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gICAqIEhFTFBFUiBNRVRIT0RTXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogR3VhcmFudGVlIHRoYXQgYSBsaXN0ZW5lciBidWNrZXQgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gbG9nIGxldmVsIGFuZCByZXR1cm4gdGhlIGJ1Y2tldC5cbiAgICovXG4gIHByaXZhdGUgbGlzdGVuZXJCdWNrZXQobHZsOiBudW1iZXIpOkxpc3RlbmVyQnVja2V0IHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsdmwpKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQobHZsLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgICAvLyBPdmVycmlkZSBUUyBiZWNhdXNlIHRoZSBMaXN0ZW5lckJ1Y2tldCBpcyBndWFyYW50ZWVkIGJ5IHRoZSBjb25kaXRpb24gYWJvdmUuXG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLmdldChsdmwpIGFzIExpc3RlbmVyQnVja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudCB0aGUgSUQgY291bnRlciBhbmQgcmV0dXJuIHRoZSBuZXcgdmFsdWUuXG4gICAqL1xuICBwcml2YXRlIGFzc2lnbklkKCk6bnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuaWRfY291bnRlciArPSAxKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3Rlcm1pbmF0b3JzJzsiLCJpbXBvcnQge1xuICBMb2csIEZpbmFsTG9nLCBMb2dGdW5jdGlvbixcbiAgQ3VzdG9tTG9nRnVuY3Rpb24sXG4gIERlZmF1bHRzLCBMb2dMZXZlbERlZmluaXRpb24sIFRlcm1pbmF0ZWRMb2csXG59IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBwcmludCB9IGZyb20gJ34vcHJpbnRlcnMnO1xuaW1wb3J0IHsgYWxsb3dlZCwgZXZhbFBhc3NlcyB9IGZyb20gJ34vY29uZGl0aW9ucyc7XG5pbXBvcnQgeyBtdXRhdGVQcm9wcyB9IGZyb20gJ34vdXRpbCc7XG5pbXBvcnQgeyBzaGVkRXhpc3RzIH0gZnJvbSAnfi9zaGVkJztcbmltcG9ydCB7IGVudiB9IGZyb20gJ34vZ2xvYmFsJztcblxuLyoqXG4gKiBTZWFscyB0aGUgY29uZmlndXJhdGlvbiBvZiBhIGxvZyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXRcbiAqIGNvbnN0cnVjdHMgYSBuZXcgbG9nIHdpdGggdGhlIHNhbWUgY29uZmlndXJhdGlvbi5cbiAqIFxuICogKipFeGFtcGxlOioqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBzZWFsZWQgPSBhZHplKHsgdXNlX2Vtb2ppOiB0cnVlIH0pLm5zKCdzZWFsZWQnKS5sYWJlbCgnc2VhbGVkLWxhYmVsJykuc2VhbCgpO1xuICogc2VhbGVkKCkuc3VjY2VzcygnU3VjY2VzcyEnKTsgLy8gLT4gcHJpbnRzIFwiI3NlYWxlZCBbc2VhbGVkLWxhYmVsXSBTdWNjZXNzIVwiXG4gKiBzZWFsZWQoKS5sb2coJ0Fub3RoZXIgbG9nLicpOyAvLyAtPiBwcmludHMgXCIjc2VhbGVkIFtzZWFsZWQtbGFiZWxdIEFub3RoZXIgbG9nLlwiXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlYWwodGhpczogTG9nKTooKSA9PiBMb2cge1xuICAvLyBSdW4gdGhlIG1vZGlmaWVyIHF1ZXVlIHRvIGFwcGx5IHRoZWlyIHJlc3VsdHNcbiAgcnVuTW9kaWZpZXJRdWV1ZSh0aGlzLm1vZGlmaWVyUXVldWUpO1xuICAvLyBDbGVhciB0aGUgcXVldWUgYXMgdG8gbm90IHJlcGVhdCB0aGUgYWN0aW9ucyB3aGVuIHRoZSBzdWJzZXF1ZW50IGxvZ3MgYXJlIHRlcm1pbmF0ZWQuXG4gIHRoaXMubW9kaWZpZXJRdWV1ZSA9IFtdO1xuICByZXR1cm4gKCkgPT4gKHsgLi4udGhpcyB9KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kIHRoZSBzcGVjaWZpZWQgbG9nIGxldmVsIG5hbWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dNZXRob2QoY2ZnOiBEZWZhdWx0cywgbGV2ZWxOYW1lOiBzdHJpbmcpOkxvZ0Z1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IExvZywgLi4uYXJnczogYW55W10pOlRlcm1pbmF0ZWRMb2cge1xuICAgIHJldHVybiBleGVjdXRpb25QaXBlbGluZSh0aGlzLCBjZmcsIGdldERlZmluaXRpb24oY2ZnLCAnbG9nX2xldmVscycsIGxldmVsTmFtZSksIGFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHRlcm1pbmF0aW5nIGxvZyBtZXRob2QgdGhhdCBlbmFibGVzIHRoZSB1c2VyIHRvIHNwZWNpZnkgYSBjdXN0b21cbiAqIGxvZyBsZXZlbCBieSBrZXkgYXMgdGhlIGZvcm1hdCBmb3IgdGhlIGxvZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbU1ldGhvZChjZmc6IERlZmF1bHRzKTpDdXN0b21Mb2dGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbih0aGlzOiBMb2csIGxldmVsTmFtZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6VGVybWluYXRlZExvZyB7XG4gICAgcmV0dXJuIGV4ZWN1dGlvblBpcGVsaW5lKHRoaXMsIGNmZywgZ2V0RGVmaW5pdGlvbihjZmcsICdjdXN0b21fbGV2ZWxzJywgbGV2ZWxOYW1lKSwgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGxvZyBsZXZlbCBkZWZpbml0aW9uIGZyb20gdGhlIGxvZyBjb25maWd1cmF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXREZWZpbml0aW9uKGNmZzogRGVmYXVsdHMsIHR5cGU6IFwibG9nX2xldmVsc1wifFwiY3VzdG9tX2xldmVsc1wiLCBsZXZlbE5hbWU6IHN0cmluZyk6TG9nTGV2ZWxEZWZpbml0aW9ufHVuZGVmaW5lZCB7XG4gIGNvbnN0IHNoZWQgPSBlbnYuJHNoZWQ7XG4gIGxldCBkZWZpbml0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGlmIChzaGVkRXhpc3RzKHNoZWQpICYmIHNoZWQuaGFzT3ZlcnJpZGVzKSB7XG4gICAgZGVmaW5pdGlvbiA9IHNoZWQub3ZlcnJpZGVzPy5bdHlwZV0/LltsZXZlbE5hbWVdO1xuICB9IGVsc2Uge1xuICAgIGRlZmluaXRpb24gPSBjZmdbdHlwZV1bbGV2ZWxOYW1lXTtcbiAgfVxuICBcbiAgcmV0dXJuIGRlZmluaXRpb24gPyB7IC4uLmRlZmluaXRpb24sIGxldmVsTmFtZSB9IDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRoZSBwcmltYXJ5IGV4ZWN1dGlvbiBwaXBlbGluZSBmb3IgdGVybWluYXRpbmcgbG9nIG1ldGhvZHMuXG4gKi9cbmZ1bmN0aW9uIGV4ZWN1dGlvblBpcGVsaW5lKGxvZzogTG9nLCBjZmc6IERlZmF1bHRzLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbnx1bmRlZmluZWQsIGFyZ3M6IGFueVtdKTpUZXJtaW5hdGVkTG9nIHtcblxuICBpZiAoZGVmICYmIGFsbG93ZWQoY2ZnLCBkZWYpKSB7XG4gICAgLy8gQXBwbHkgbW9kaWZpZXJzIGluIHRoZSBwcm9wZXIgb3JkZXIuXG4gICAgcnVuTW9kaWZpZXJRdWV1ZShsb2cubW9kaWZpZXJRdWV1ZSk7XG5cbiAgICAvLyBDaGVjayB0aGUgdGVzdCBtb2RpZmllcnMuXG4gICAgaWYgKGV2YWxQYXNzZXMobG9nKSkge1xuXG4gICAgICAvLyBTYXZlIHRlcm1pbmF0b3IgcHJvcHMgZm9yIHJlY2FsbCBwdXJwb3Nlc1xuICAgICAgY29uc3QgZmluYWxfbG9nID0gbXV0YXRlUHJvcHM8RmluYWxMb2c+KGxvZywgWyBbJ2FyZ3MnLCBhcmdzXSwgWydsZXZlbCcsIGRlZi5sZXZlbF0gXSk7XG5cbiAgICAgIC8vIFJlbmRlciB0aGUgbG9nXG4gICAgICBjb25zdCByZW5kZXIgPSBwcmludChmaW5hbF9sb2csIGRlZiwgYXJncyk7XG4gICAgXG4gICAgICAvLyBGaXJlIGxvZyBldmVudHNcbiAgICAgIHN0b3JlKGZpbmFsX2xvZyk7XG4gICAgICBmaXJlTGlzdGVuZXJzKGZpbmFsX2xvZywgZGVmKTtcblxuICAgICAgLy8gUmV0dXJuIHRoZSB0ZXJtaW5hdGVkIGxvZyBvYmplY3QgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICAgIHJldHVybiB7IGxvZzogZmluYWxfbG9nLCByZW5kZXIgfTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHRlcm1pbmF0ZWQgbG9nIG9iamVjdCBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICByZXR1cm4geyBsb2csIHJlbmRlcjogbnVsbCB9O1xufVxuXG4vKipcbiAqIEV4ZWN1dGVzIGFsbCBvZiB0aGUgbG9nIG1vZGlmaWVyIGZ1bmN0aW9ucyB3aXRoaW4gdGhlIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBydW5Nb2RpZmllclF1ZXVlKHF1ZXVlOiBGdW5jdGlvbltdKTp2b2lkIHtcbiAgcXVldWUuZm9yRWFjaChmdW5jID0+IGZ1bmMoKSk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuICogTG9nIEV2ZW50c1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKlxuICogU3RvcmVzIHRoaXMgbG9nIGluIHRoZSBTaGVkIGlmIHRoZSBTaGVkIGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlKGxvZzogRmluYWxMb2cpOnZvaWQge1xuICBjb25zdCBzaGVkID0gZW52LiRzaGVkO1xuICBpZiAoc2hlZEV4aXN0cyhzaGVkKSkge1xuICAgIHNoZWQuc3RvcmUobG9nKTtcbiAgfVxufVxuXG4vKipcbiAqIEZpcmVzIGxpc3RlbmVycyBmb3IgdGhpcyBsb2cgaW5zdGFuY2UgaWYgYSBTaGVkIGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnMobG9nOiBGaW5hbExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24pOnZvaWQge1xuICBjb25zdCBzaGVkID0gZW52LiRzaGVkO1xuICBpZiAoc2hlZEV4aXN0cyhzaGVkKSkge1xuICAgIHNoZWQuZmlyZUxpc3RlbmVycyhsb2csIGRlZik7XG4gIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3V0aWwnOyIsImltcG9ydCB7IExvZ1RpbWVzdGFtcCB9IGZyb20gJ34vX2NvbnRyYWN0cyc7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiB0aGUgcHJvdmlkZWQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbENhcHMoc3RyOiBzdHJpbmcpOnN0cmluZyB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbi8qKlxuICogQXBwbGllcyBwcm9wZXJ0eSBtdXRhdGlvbnMgdG8gdGhlIHByb3ZpZGVkIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZVByb3BzPE8+KG9iajogYW55LCBtdXRhdGlvbnM6IEFycmF5PFtzdHJpbmcsIGFueV0+KTpPIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKFtwcm9wLCB2YWxdKSA9PiBvYmpbcHJvcF0gPSB2YWwpO1xuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB5b3VyIGxvZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzdGFtcCgpOkxvZ1RpbWVzdGFtcCB7XG4gIGNvbnN0IHVuaXhNaWxsaSA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1bml4TWlsbGkpO1xuICBjb25zdCB1dGMgPSBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gIHJldHVybiB7IHVuaXhNaWxsaSwgdXRjIH07XG59XG5cbi8qKlxuICogR2V0cyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoUGFyYW1zKCk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
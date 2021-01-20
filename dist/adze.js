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
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log */ "./src/_contracts/Log.ts");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Log__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Log__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Log__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bundle */ "./src/_contracts/Bundle.ts");
/* harmony import */ var _Bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Bundle__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Bundle__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shed */ "./src/_contracts/Shed.ts");
/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Shed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Shed__WEBPACK_IMPORTED_MODULE_2__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Shed__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Configuration */ "./src/_contracts/Configuration.ts");
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Configuration__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Configuration__WEBPACK_IMPORTED_MODULE_3__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Configuration__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/_contracts/Label.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Label__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Label__WEBPACK_IMPORTED_MODULE_4__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Label__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Styles */ "./src/_contracts/Styles.ts");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Styles__WEBPACK_IMPORTED_MODULE_5__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Styles__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HrTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HrTime */ "./src/_contracts/HrTime.ts");
/* harmony import */ var _HrTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_HrTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HrTime__WEBPACK_IMPORTED_MODULE_6__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HrTime__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Utility */ "./src/_contracts/Utility.ts");
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Utility__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Utility__WEBPACK_IMPORTED_MODULE_7__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Utility__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));









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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");

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
  cache_location: 'memory',
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
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminators */ "./src/terminators/index.ts");
/* harmony import */ var _modifiers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers */ "./src/modifiers/index.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printers */ "./src/printers/index.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");





/*
 * Future planned features:
 *
 * - Select log levels optionally by name in listener creation.
 * - Analytics and Reporting support.
 * - Remote server for receiving and analyzing logs.
 * - Add default meta data to the configuration of the log.
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
  var cfg = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()(user_cfg, _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"]);
  return {
    cfg: cfg,
    traceable: false,
    dumpContext: false,
    isSilent: false,
    modifierQueue: [],
    printer: _printers__WEBPACK_IMPORTED_MODULE_3__["printLog"],
    metaData: {},
    attention: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('attention'),
    error: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('error'),
    warn: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('warn'),
    info: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('info'),
    fail: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('fail'),
    success: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('success'),
    log: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('log'),
    debug: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('debug'),
    verbose: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["logMethod"])('verbose'),
    custom: Object(_terminators__WEBPACK_IMPORTED_MODULE_1__["customMethod"])(),
    seal: _terminators__WEBPACK_IMPORTED_MODULE_1__["seal"],
    count: _modifiers__WEBPACK_IMPORTED_MODULE_2__["count"],
    countReset: _modifiers__WEBPACK_IMPORTED_MODULE_2__["countReset"],
    thread: _terminators__WEBPACK_IMPORTED_MODULE_1__["thread"],
    dump: _modifiers__WEBPACK_IMPORTED_MODULE_2__["dump"],
    close: _terminators__WEBPACK_IMPORTED_MODULE_1__["close"],
    clear: _terminators__WEBPACK_IMPORTED_MODULE_1__["clear"],
    clr: _terminators__WEBPACK_IMPORTED_MODULE_1__["clr"],
    dir: _modifiers__WEBPACK_IMPORTED_MODULE_2__["dir"],
    dirxml: _modifiers__WEBPACK_IMPORTED_MODULE_2__["dirxml"],
    table: _modifiers__WEBPACK_IMPORTED_MODULE_2__["table"],
    assert: _modifiers__WEBPACK_IMPORTED_MODULE_2__["assert"],
    test: _modifiers__WEBPACK_IMPORTED_MODULE_2__["test"],
    group: _modifiers__WEBPACK_IMPORTED_MODULE_2__["group"],
    groupCollapsed: _modifiers__WEBPACK_IMPORTED_MODULE_2__["groupCollapsed"],
    groupEnd: _modifiers__WEBPACK_IMPORTED_MODULE_2__["groupEnd"],
    label: _modifiers__WEBPACK_IMPORTED_MODULE_2__["label"],
    meta: _modifiers__WEBPACK_IMPORTED_MODULE_2__["meta"],
    namespace: _modifiers__WEBPACK_IMPORTED_MODULE_2__["namespace"],
    ns: _modifiers__WEBPACK_IMPORTED_MODULE_2__["ns"],
    silent: _modifiers__WEBPACK_IMPORTED_MODULE_2__["silent"],
    trace: _modifiers__WEBPACK_IMPORTED_MODULE_2__["trace"],
    time: _modifiers__WEBPACK_IMPORTED_MODULE_2__["time"],
    timeNow: _modifiers__WEBPACK_IMPORTED_MODULE_2__["timeNow"],
    timeEnd: _modifiers__WEBPACK_IMPORTED_MODULE_2__["timeEnd"],

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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");


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
    console.warn('You have declared both an assertion and test on the same log. Please only declare one or nefarious results may occur.');
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
  var _ref, _env$ADZE_ENV, _getSearchParams;

  // Allow for URL Param of ADZE_ENV when in the browser.
  return ((_ref = (_env$ADZE_ENV = _global__WEBPACK_IMPORTED_MODULE_0__["env"] === null || _global__WEBPACK_IMPORTED_MODULE_0__["env"] === void 0 ? void 0 : _global__WEBPACK_IMPORTED_MODULE_0__["env"].ADZE_ENV) !== null && _env$ADZE_ENV !== void 0 ? _env$ADZE_ENV : (_getSearchParams = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getSearchParams"])()) === null || _getSearchParams === void 0 ? void 0 : _getSearchParams.get('ADZE_ENV')) !== null && _ref !== void 0 ? _ref : '') !== 'test';
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
/*! exports provided: filterNamespace, filterLabel, filterLevelRange, loopCollection, rerender, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return filterNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return filterLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return filterLevelRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopCollection", function() { return loopCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");



/**
 * Filter a collection of logs by the namespace.
 */

function filterNamespace() {
  var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ns = arguments.length > 1 ? arguments[1] : undefined;
  return loopCollection(collection, function (log) {
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
  var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var lbl = arguments.length > 1 ? arguments[1] : undefined;
  return loopCollection(collection, function (log) {
    var _log$labelVal;

    return ((_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.name) === lbl;
  });
}
/**
 * Filter the bundle of logs by their log level.
 */

function filterLevelRange() {
  var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var low = arguments.length > 1 ? arguments[1] : undefined;
  var high = arguments.length > 2 ? arguments[2] : undefined;
  return loopCollection(collection, function (log) {
    var _log$level;

    var level = (_log$level = log.level) !== null && _log$level !== void 0 ? _log$level : Infinity;
    return level >= low && level <= high;
  });
}
/**
 * Loops over a bundle of logs and executes the callback for each log that
 * has a render value.
 */

function loopCollection(collection, cb) {
  return collection.reduce(function (acc, log) {
    var result = cb(log);
    return result ? acc.concat([log]) : acc;
  }, []);
}
/**
 * If the provided log has been previously rendered, this function
 * re-renders it to the console.
 */

function rerender(log) {
  if (log.render) {
    render(log.render);
  }
}
/**
 * Render a log to the console based on a render object.
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
/*! exports provided: filterNamespace, filterLabel, filterLevelRange, loopCollection, rerender, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ "./src/filters/filters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterLevelRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopCollection", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["loopCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["rerender"]; });

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
/* eslint-disable @typescript-eslint/no-namespace */
var env = global ? global : window;
var isBrowser = typeof window !== 'undefined';
/**
 * TypeGuard to determine if the env value is the Window object.
 */

var envIsWindow = function envIsWindow(env) {
  return isBrowser;
};
var isChromeVar = false;
var isFirefoxVar = false;
var isSafariVar = false;

if (envIsWindow(env)) {
  var _env$navigator, _env$navigator$userAg, _env$navigator2, _env$navigator2$userA, _env$navigator3, _env$navigator3$userA;

  isChromeVar = ((_env$navigator = env.navigator) === null || _env$navigator === void 0 ? void 0 : (_env$navigator$userAg = _env$navigator.userAgent) === null || _env$navigator$userAg === void 0 ? void 0 : _env$navigator$userAg.indexOf('Chrome')) > -1;
  isFirefoxVar = ((_env$navigator2 = env.navigator) === null || _env$navigator2 === void 0 ? void 0 : (_env$navigator2$userA = _env$navigator2.userAgent) === null || _env$navigator2$userA === void 0 ? void 0 : _env$navigator2$userA.indexOf('Firefox')) > -1;
  isSafariVar = ((_env$navigator3 = env.navigator) === null || _env$navigator3 === void 0 ? void 0 : (_env$navigator3$userA = _env$navigator3.userAgent) === null || _env$navigator3$userA === void 0 ? void 0 : _env$navigator3$userA.indexOf('Safari')) > -1 && !isChromeVar;
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
/*! exports provided: adze, shedExists, createShed, removeShed, defaults, Log, LogFunction, bundle, filterLabel, filterLevelRange, filterNamespace, loopCollection, render, rerender, fireListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_contracts */ "./src/_contracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["Log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFunction", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["LogFunction"]; });

/* harmony import */ var _adze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adze */ "./src/adze.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adze", function() { return _adze__WEBPACK_IMPORTED_MODULE_1__["adze"]; });

/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bundle */ "./src/bundle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bundle", function() { return _bundle__WEBPACK_IMPORTED_MODULE_2__["bundle"]; });

/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shed */ "./src/shed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shedExists", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["shedExists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createShed", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["createShed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeShed", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["removeShed"]; });

/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"]; });

/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminators */ "./src/terminators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fireListeners", function() { return _terminators__WEBPACK_IMPORTED_MODULE_5__["fireListeners"]; });

/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters */ "./src/filters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return _filters__WEBPACK_IMPORTED_MODULE_6__["filterLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return _filters__WEBPACK_IMPORTED_MODULE_6__["filterLevelRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return _filters__WEBPACK_IMPORTED_MODULE_6__["filterNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopCollection", function() { return _filters__WEBPACK_IMPORTED_MODULE_6__["loopCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _filters__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return _filters__WEBPACK_IMPORTED_MODULE_6__["rerender"]; });










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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shed */ "./src/shed.ts");


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
/*! exports provided: dump, meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dump", function() { return dump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
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
function meta(key, val) {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this2.metaData[key] = val;
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
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");
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
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");
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
/*! exports provided: label, namespace, ns, trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ns", function() { return ns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../label */ "./src/label/index.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");
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

/***/ }),

/***/ "./src/modifiers/index.ts":
/*!********************************!*\
  !*** ./src/modifiers/index.ts ***!
  \********************************/
/*! exports provided: time, timeNow, timeEnd, count, countReset, countClear, dir, dirxml, table, silent, group, groupCollapsed, groupEnd, label, namespace, ns, trace, modifier, prependModifier, assert, test, dump, meta */
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

/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_5__["modifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependModifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_5__["prependModifier"]; });

/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testing */ "./src/modifiers/testing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _testing__WEBPACK_IMPORTED_MODULE_6__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _testing__WEBPACK_IMPORTED_MODULE_6__["test"]; });

/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contexts */ "./src/modifiers/contexts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dump", function() { return _contexts__WEBPACK_IMPORTED_MODULE_7__["dump"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return _contexts__WEBPACK_IMPORTED_MODULE_7__["meta"]; });










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
/* harmony import */ var browser_process_hrtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-process-hrtime */ "./node_modules/browser-process-hrtime/index.js");
/* harmony import */ var browser_process_hrtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browser_process_hrtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");



/**
 * Starts a timer associated with this log's *label*. This will do nothing if
 * this log has no label.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
 */

function time() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_2__["modifier"])(this, function () {
    if (_this.labelVal) {
      _this.labelVal.timeStart = browser_process_hrtime__WEBPACK_IMPORTED_MODULE_1___default()();
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

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_2__["modifier"])(this, function () {
    var time_now = formatTime(browser_process_hrtime__WEBPACK_IMPORTED_MODULE_1___default()());
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

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_2__["modifier"])(this, function () {
    if (_this3.labelVal) {
      _this3.labelVal.timeEllapsed = formatTime(browser_process_hrtime__WEBPACK_IMPORTED_MODULE_1___default()(_this3.labelVal.timeStart));
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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");



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
  var render_args = typeof args[0] === 'string' ? [].concat(partial_args, [args[0]]) : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, 'group', render_args), log.isSilent);
}
/**
 * The method for printing collapsed group logs to the browser console.
 */

function printGroupCollapsed(log, def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args), log.cfg.base_style + def.style];
  var render_args = typeof args[0] === 'string' ? [].concat(partial_args, [args[0]]) : partial_args;
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

  return (_env$$shed = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) !== null && _env$$shed !== void 0 && (_env$$shed$overrides = _env$$shed.overrides) !== null && _env$$shed$overrides !== void 0 && _env$$shed$overrides.use_emoji || use_emoji ? " ".concat(def.emoji) : '';
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
  return label_txt !== '' ? " (".concat((_env$$shed2 = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) !== null && _env$$shed2 !== void 0 && (_env$$shed2$overrides = _env$$shed2.overrides) !== null && _env$$shed2$overrides !== void 0 && _env$$shed2$overrides.use_emoji || use_emoji ? '⏱' : '').concat(label_txt, ") ") : '';
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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");




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
  return typeof args[0] === 'string' ? [].concat(partial_args, [args[0]]) : partial_args;
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
  return label_txt !== '' ? "(".concat((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_3__["env"].$shed) !== null && _env$$shed !== void 0 && (_env$$shed$overrides = _env$$shed.overrides) !== null && _env$$shed$overrides !== void 0 && _env$$shed$overrides.use_emoji || use_emoji ? '⏱' : '').concat(label_txt, ") ") : '';
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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");



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
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./src/util/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global */ "./src/global.ts");





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
   * In-memory cache of finalized logs (terminated and have meta data applied to them). This
   * is mainly used for recalling logs and filtering them.
   *
   * Do not access this value directly. Use the `cache()` setter and getter.
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

    var global_cfg = config !== null && config !== void 0 && config.global_cfg ? lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(config.global_cfg, _defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"]) : null;

    var cfg_global_defaults = _objectSpread(_objectSpread({}, config), {}, {
      global_cfg: global_cfg
    });

    var cfg_defaults = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(cfg_global_defaults, _defaults__WEBPACK_IMPORTED_MODULE_5__["shed_defaults"]);
    var cfg_global_parsed = this.parseFilterLevels(cfg_defaults);
    this.cfg = cfg_global_parsed;
  }
  /**
   * Parses the level filter on the configuration and reassigns it.
   * This is for increased performance so this calculation isn't done each
   * time a log is checking against the filter.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Shed, [{
    key: "parseFilterLevels",
    value: function parseFilterLevels(cfg) {
      var _new_cfg$filters$leve, _new_cfg$filters$leve2;

      var new_cfg = _objectSpread({}, cfg);

      if (this.filterIsSet(cfg, 'include', 'level') && (_new_cfg$filters$leve = new_cfg.filters.level) !== null && _new_cfg$filters$leve !== void 0 && _new_cfg$filters$leve.include) {
        new_cfg.filters.level.include = Object(_util__WEBPACK_IMPORTED_MODULE_6__["formatLevels"])(new_cfg.global_cfg, new_cfg.filters.level.include);
      }

      if (this.filterIsSet(cfg, 'exclude', 'level') && (_new_cfg$filters$leve2 = new_cfg.filters.level) !== null && _new_cfg$filters$leve2 !== void 0 && _new_cfg$filters$leve2.exclude) {
        new_cfg.filters.level.exclude = Object(_util__WEBPACK_IMPORTED_MODULE_6__["formatLevels"])(new_cfg.global_cfg, new_cfg.filters.level.exclude);
      }

      return new_cfg;
    }
    /*************************************\
     * GET/SET METHODS
    \*************************************/

    /**
     * Store a log in the shed for later recall.
     */

  }, {
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
    key: "getCollection",

    /**
     * Returns all of the cached logs of the provided levels as a bundle.
     * This is useful for recalling logs and applying filters.
     */
    value: function getCollection(levels) {
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
    value: function fireListeners(log) {
      var _this$listeners$get;

      (_this$listeners$get = this.listeners.get(log.level)) === null || _this$listeners$get === void 0 ? void 0 : _this$listeners$get.forEach(function (listener) {
        listener(log);
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

        var source = (_this3$cfg$filters$le = (_this3$cfg$filters = _this3.cfg.filters) === null || _this3$cfg$filters === void 0 ? void 0 : (_this3$cfg$filters$le2 = _this3$cfg$filters.level) === null || _this3$cfg$filters$le2 === void 0 ? void 0 : _this3$cfg$filters$le2[filter]) !== null && _this3$cfg$filters$le !== void 0 ? _this3$cfg$filters$le : [];
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
            filter = _filter_type[0],
            func = _filter_type[1];

        var result = cb(filter, func);

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
        case this.filterIsSet(this.cfg, 'include', category):
          return ['include', 'isIncluded'];

        case this.filterIsSet(this.cfg, 'exclude', category):
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
    value: function filterIsSet(cfg, type, filter) {
      var _cfg$filters$filter$t, _cfg$filters, _cfg$filters$filter;

      var include_prop = (_cfg$filters$filter$t = cfg === null || cfg === void 0 ? void 0 : (_cfg$filters = cfg.filters) === null || _cfg$filters === void 0 ? void 0 : (_cfg$filters$filter = _cfg$filters[filter]) === null || _cfg$filters$filter === void 0 ? void 0 : _cfg$filters$filter[type]) !== null && _cfg$filters$filter$t !== void 0 ? _cfg$filters$filter$t : [];
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
      var _this$cfg$filters$hid, _this$cfg;

      return (_this$cfg$filters$hid = (_this$cfg = this.cfg) === null || _this$cfg === void 0 ? void 0 : _this$cfg.filters.hideAll) !== null && _this$cfg$filters$hid !== void 0 ? _this$cfg$filters$hid : false;
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
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conditions */ "./src/conditions/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shed */ "./src/shed.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global */ "./src/global.ts");


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
      var final_log = finalizeLog(log, def, args); // If a global context exists, check if this log is allowed.

      var globally_allowed = (_env$$shed$logGloball = (_env$$shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : _env$$shed.logGloballyAllowed(final_log)) !== null && _env$$shed$logGloball !== void 0 ? _env$$shed$logGloball : true;

      if (globally_allowed) {
        // Render the log
        var render = Object(_printers__WEBPACK_IMPORTED_MODULE_1__["print"])(final_log, def, args); // Fire log events

        store(final_log);
        fireListeners(final_log); // Return the terminated log object for testing purposes

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

function fireListeners(log) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_4__["shedExists"])(shed)) {
    shed.fireListeners(log);
  }
}
/*----------------------------------------*\
 * Log Helpers
\*----------------------------------------*/

function finalizeLog(log, def, args) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_3__["mutateProps"])(log, [['args', args], ['level', def.level], ['definition', def]]);
}

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: initialCaps, mutateProps, timestamp, getSearchParams, formatLevels, isRange, getMaxLevel, parseRange, levelsFromConfig, createArrayOfNumbers, isString, isArray, isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["initialCaps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutateProps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["mutateProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["timestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLevels", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["formatLevels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRange", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["isRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxLevel", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["getMaxLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseRange", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["parseRange"]; });

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
/*! exports provided: initialCaps, mutateProps, timestamp, getSearchParams, formatLevels, isRange, getMaxLevel, parseRange, levelsFromConfig, createArrayOfNumbers, isString, isArray, isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return initialCaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutateProps", function() { return mutateProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return getSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatLevels", function() { return formatLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRange", function() { return isRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxLevel", function() { return getMaxLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRange", function() { return parseRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelsFromConfig", function() { return levelsFromConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArrayOfNumbers", function() { return createArrayOfNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/global.ts");



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
  if (Object(_global__WEBPACK_IMPORTED_MODULE_2__["envIsWindow"])(_global__WEBPACK_IMPORTED_MODULE_2__["env"])) {
    return new URLSearchParams(_global__WEBPACK_IMPORTED_MODULE_2__["env"].document.location.search.substring(1));
  }
}
/**
 * Converts a level value of '*' to an array of numbers up to the highest
 * value defined by the user configuration. If levels is already a number array
 * it is returned unchanged.
 */

function formatLevels(cfg, levels) {
  if (isString(levels)) {
    if (levels === '*') {
      return createArrayOfNumbers(0, getMaxLevel(cfg));
    }

    if (isRange(levels)) {
      return createArrayOfNumbers.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(parseRange(levels)));
    }

    console.warn('The provided level filter string is invalid. This will cause logs to stop printing.');
  } else if (isArray(levels)) {
    return levels;
  }

  return [];
}
/**
 * Type Guard that validates that a given string represents a
 * range of numbers.
 */

function isRange(val) {
  var vals = val.split('-');

  var _vals = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(vals, 2),
      low = _vals[0],
      high = _vals[1];

  return vals.length === 2 && Number(low) !== NaN && Number(high) !== NaN;
}
/**
 * Returns the highest level from the provided configuration.
 */

function getMaxLevel(cfg) {
  var _cfg$custom_levels;

  return Math.max.apply(Math, [8].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(levelsFromConfig((_cfg$custom_levels = cfg === null || cfg === void 0 ? void 0 : cfg.custom_levels) !== null && _cfg$custom_levels !== void 0 ? _cfg$custom_levels : {}))));
}
/**
 * Parse a range string into a tuple of numbers containing low and high.
 */

function parseRange(range) {
  var _range$split = range.split('-'),
      _range$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_range$split, 2),
      low = _range$split2[0],
      high = _range$split2[1];

  return [Number(low), Number(high)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wcm9jZXNzLWhydGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdXRpbC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVmYXVsdHNkZWVwL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9BZHplTGliLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL19jb250cmFjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fZGVmYXVsdHMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fZGVmYXVsdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fZGVmYXVsdHMvc2hlZF9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2FkemUudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9idW5kbGUudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9jb25kaXRpb25zL2NvbmRpdGlvbnMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9jb25kaXRpb25zL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvZmlsdGVycy9maWx0ZXJzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvZmlsdGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbGFiZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9sYWJlbC9sYWJlbC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9jb250ZXh0cy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9jb3VudGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9mb3JtYXR0aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2dyb3VwaW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2lkZW50aWZ5aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL21vZGlmaWVyLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL3Rlc3RpbmcudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvdGltaW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvYnJvd3Nlci9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL2Jyb3dzZXIvcHJpbnRlcnMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL25vZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9ub2RlL3ByaW50ZXJzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvc2hhcmVkLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvc2hlZC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3Rlcm1pbmF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdGVybWluYXRvcnMvdGVybWluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy91dGlsL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdXRpbC91dGlsLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRzIiwibG9nX2xldmVsIiwibG9nX2NhY2hlX3NpemUiLCJ1c2VfZW1vamkiLCJiYXNlX3N0eWxlIiwiY3VzdG9tX2xldmVscyIsImxvZ19sZXZlbHMiLCJ2ZXJib3NlIiwibGV2ZWwiLCJzdHlsZSIsInRlcm1pbmFsIiwibWV0aG9kIiwiZW1vamkiLCJkZWJ1ZyIsImxvZyIsInN1Y2Nlc3MiLCJmYWlsIiwiaXNDaHJvbWUiLCJpbmZvIiwiaXNTYWZhcmkiLCJ3YXJuIiwiZXJyb3IiLCJhdHRlbnRpb24iLCJmaWx0ZXJzIiwiaGlkZUFsbCIsIm5hbWVzcGFjZSIsImV4Y2x1ZGUiLCJpbmNsdWRlIiwibGFiZWwiLCJzaGVkX2RlZmF1bHRzIiwiY2FjaGVfbG9jYXRpb24iLCJjYWNoZV9saW1pdCIsImdsb2JhbF9jZmciLCJhZHplIiwidXNlcl9jZmciLCJjZmciLCJkZWZhdWx0c0RlZXAiLCJ0cmFjZWFibGUiLCJkdW1wQ29udGV4dCIsImlzU2lsZW50IiwibW9kaWZpZXJRdWV1ZSIsInByaW50ZXIiLCJwcmludExvZyIsIm1ldGFEYXRhIiwibG9nTWV0aG9kIiwiY3VzdG9tIiwiY3VzdG9tTWV0aG9kIiwic2VhbCIsImNvdW50IiwiY291bnRSZXNldCIsInRocmVhZCIsImR1bXAiLCJjbG9zZSIsImNsZWFyIiwiY2xyIiwiZGlyIiwiZGlyeG1sIiwidGFibGUiLCJhc3NlcnQiLCJ0ZXN0IiwiZ3JvdXAiLCJncm91cENvbGxhcHNlZCIsImdyb3VwRW5kIiwibWV0YSIsIm5zIiwic2lsZW50IiwidHJhY2UiLCJ0aW1lIiwidGltZU5vdyIsInRpbWVFbmQiLCJjb250ZXh0IiwibGFiZWxWYWwiLCJidW5kbGUiLCJidW5kbGVfYXJyIiwiYnVuZGxlZF9sb2ciLCJwdXNoIiwiYWxsb3dlZCIsImRlZiIsImxldmVsQWN0aXZlIiwibm90VGVzdEVudiIsImV2YWxQYXNzZXMiLCJhc3NlcnRpb24iLCJ1bmRlZmluZWQiLCJleHByZXNzaW9uIiwiY29uc29sZSIsImVudiIsIkFEWkVfRU5WIiwiZ2V0U2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmlsdGVyTmFtZXNwYWNlIiwiY29sbGVjdGlvbiIsImxvb3BDb2xsZWN0aW9uIiwibG9nX25zIiwibmFtZXNwYWNlVmFsIiwiaXNTdHJpbmciLCJpbmNsdWRlcyIsIm1hcCIsInZhbCIsImZpbHRlckxhYmVsIiwibGJsIiwibmFtZSIsImZpbHRlckxldmVsUmFuZ2UiLCJsb3ciLCJoaWdoIiwiSW5maW5pdHkiLCJjYiIsInJlZHVjZSIsImFjYyIsInJlc3VsdCIsImNvbmNhdCIsInJlcmVuZGVyIiwicmVuZGVyIiwiYXJncyIsImdsb2JhbCIsIndpbmRvdyIsImlzQnJvd3NlciIsImVudklzV2luZG93IiwiaXNDaHJvbWVWYXIiLCJpc0ZpcmVmb3hWYXIiLCJpc1NhZmFyaVZhciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJpc0ZpcmVmb3giLCJnZXRMYWJlbCIsInNoZWQiLCIkc2hlZCIsInNoZWRFeGlzdHMiLCJhZGRMYWJlbCIsIm1vZGlmaWVyIiwia2V5IiwiY291bnRDbGVhciIsInByaW50RGlyIiwicHJpbnREaXJ4bWwiLCJwcmludFRhYmxlIiwicHJpbnRHcm91cCIsInByaW50R3JvdXBDb2xsYXBzZWQiLCJwcmludEdyb3VwRW5kIiwicHJlcGVuZE1vZGlmaWVyIiwicHJpbnRUcmFjZSIsImZ1bmMiLCJ0aW1lU3RhcnQiLCJocnRpbWUiLCJ0aW1lX25vdyIsImZvcm1hdFRpbWUiLCJ0aW1lTm93VmFsIiwidGltZUVsbGFwc2VkIiwic2VjIiwibmFubyIsImZMZWFkZXIiLCJmTWV0YSIsImxlYWRlciIsInJlbmRlcl9hcmdzIiwidG9Db25zb2xlIiwiYXBwbHlSZW5kZXIiLCJwYXJ0aWFsX2FyZ3MiLCJmRW1vamkiLCJmTmFtZSIsImxldmVsTmFtZSIsImxlbmd0aCIsIm92ZXJyaWRlcyIsImluaXRpYWxDYXBzIiwiZk5hbWVzcGFjZSIsImZMYWJlbCIsImZUaW1lIiwiZkNvdW50IiwiZlRlc3QiLCJsYWJlbF90eHQiLCJwcmludExvZ0Jyb3dzZXIiLCJwcmludExvZ05vZGUiLCJwcmludEdyb3VwQnJvd3NlciIsInByaW50R3JvdXBOb2RlIiwicHJpbnRHcm91cENvbGxhcHNlZEJyb3dzZXIiLCJwcmludEdyb3VwQ29sbGFwc2VkTm9kZSIsInNldHVwUHJpbnRHcm91cCIsInBhZGRpbmciLCJwYWRkZWRfbGVhZGVyIiwiYWRkUGFkZGluZyIsImNoYWxrIiwic3RyIiwibGVuIiwiZGlmZiIsInBhZGRlZCIsImkiLCJwcmludCIsImV4cGFuZGVkX2FyZ3MiLCJpc19zaWxlbnQiLCJzcHJlYWQiLCJzdG9yZSIsImNyZWF0ZVNoZWQiLCJjb25maWciLCJTaGVkIiwicmVtb3ZlU2hlZCIsIk1hcCIsImNmZ19nbG9iYWxfZGVmYXVsdHMiLCJjZmdfZGVmYXVsdHMiLCJjZmdfZ2xvYmFsX3BhcnNlZCIsInBhcnNlRmlsdGVyTGV2ZWxzIiwibmV3X2NmZyIsImZpbHRlcklzU2V0IiwiZm9ybWF0TGV2ZWxzIiwiY2FjaGUiLCJsZXZlbHMiLCJsdmxzIiwibGFiZWxzIiwiaGFzTGFiZWwiLCJzZXQiLCJoYXMiLCJsdmwiLCJsZXZlbF9tYXAiLCJsaXN0ZW5lckJ1Y2tldCIsImlkIiwiYXNzaWduSWQiLCJsaXN0ZW5lcnMiLCJsb2NhdGlvbnMiLCJmb3JFYWNoIiwibHZsX2lkIiwibGlzdGVuZXIiLCJsZXZlbEFsbG93ZWQiLCJsYWJlbEFsbG93ZWQiLCJuYW1lc3BhY2VBbGxvd2VkIiwiZmlsdGVyQWxsb3dlZCIsImZpbHRlciIsInNvdXJjZSIsInRhcmdldCIsImNhdGVnb3J5IiwiZmlsdGVyX3R5cGUiLCJmaWx0ZXJUeXBlIiwidmFsdWUiLCJ0eXBlIiwiaW5jbHVkZV9wcm9wIiwiaWRfY291bnRlciIsImxpbWl0IiwiZGVmYXVsdGVkIiwicnVuTW9kaWZpZXJRdWV1ZSIsImV4ZWN1dGlvblBpcGVsaW5lIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJoYXNPdmVycmlkZXMiLCJmaW5hbF9sb2ciLCJmaW5hbGl6ZUxvZyIsImdsb2JhbGx5X2FsbG93ZWQiLCJsb2dHbG9iYWxseUFsbG93ZWQiLCJmaXJlTGlzdGVuZXJzIiwicXVldWUiLCJtdXRhdGVQcm9wcyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJvYmoiLCJtdXRhdGlvbnMiLCJwcm9wIiwidGltZXN0YW1wIiwidW5peE1pbGxpIiwiRGF0ZSIsIm5vdyIsImRhdGUiLCJ1dGMiLCJ0b1VUQ1N0cmluZyIsIlVSTFNlYXJjaFBhcmFtcyIsImRvY3VtZW50IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJjcmVhdGVBcnJheU9mTnVtYmVycyIsImdldE1heExldmVsIiwiaXNSYW5nZSIsInBhcnNlUmFuZ2UiLCJpc0FycmF5IiwidmFscyIsInNwbGl0IiwiTnVtYmVyIiwiTmFOIiwiTWF0aCIsIm1heCIsImxldmVsc0Zyb21Db25maWciLCJyYW5nZSIsIk9iamVjdCIsInZhbHVlcyIsImlzRGVmaW5lZCIsInN0YXJ0IiwiZW5kIiwiYXJyIiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRLFNBQVM7QUFDakMsZ0JBQWdCLFFBQVEsU0FBUztBQUNqQyxpQkFBaUIsT0FBTyxRQUFRO0FBQ2hDLGlCQUFpQixPQUFPLFFBQVE7QUFDaEMsZ0JBQWdCLFNBQVMsT0FBTztBQUNoQyxnQkFBZ0IsU0FBUyxPQUFPO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RTs7QUFFekU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxFQUFFLFVBQVUsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFl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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLEtBQTBCOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsRUFBRTtBQUNiLFdBQVcsTUFBTTtBQUNqQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU8sV0FBVztBQUM3QixXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0IsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hC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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7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LE1BQU1DLEdBQUcsR0FBRyxFQUFaOztBQUNBLE9BQUssSUFBSW5HLENBQUMsR0FBR2lHLEtBQWIsRUFBb0JqRyxDQUFDLElBQUlrRyxHQUF6QixFQUE4QmxHLENBQUMsSUFBSSxDQUFuQyxFQUFzQztBQUNwQ21HLE9BQUcsQ0FBQy9NLElBQUosQ0FBUzRHLENBQVQ7QUFDRDs7QUFDRCxTQUFPbUcsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVM1TCxRQUFULENBQWtCRyxHQUFsQixFQUEyQztBQUNoRCxTQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUF0QjtBQUNEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVMySyxPQUFULENBQWlCM0ssR0FBakIsRUFBc0M7QUFDM0MsU0FBTzBMLEtBQUssQ0FBQ2YsT0FBTixDQUFjM0ssR0FBZCxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU3NMLFNBQVQsQ0FBc0J0TCxHQUF0QixFQUFvRDtBQUN6RCxTQUFPQSxHQUFHLEtBQUtmLFNBQWY7QUFDRCxDIiwiZmlsZSI6ImFkemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBZHplTGliXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFkemVMaWJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgd3JhcEFuc2kxNiA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBjb2RlID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlske2NvZGUgKyBvZmZzZXR9bWA7XG59O1xuXG5jb25zdCB3cmFwQW5zaTI1NiA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBjb2RlID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTs1OyR7Y29kZX1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMTZtID0gKGZuLCBvZmZzZXQpID0+ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHJnYiA9IGZuKC4uLmFyZ3MpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07Mjske3JnYlswXX07JHtyZ2JbMV19OyR7cmdiWzJdfW1gO1xufTtcblxuY29uc3QgYW5zaTJhbnNpID0gbiA9PiBuO1xuY29uc3QgcmdiMnJnYiA9IChyLCBnLCBiKSA9PiBbciwgZywgYl07XG5cbmNvbnN0IHNldExhenlQcm9wZXJ0eSA9IChvYmplY3QsIHByb3BlcnR5LCBnZXQpID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIHtcblx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0KCk7XG5cblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCB7XG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9KTtcbn07XG5cbi8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnY29sb3ItY29udmVydCcpfSAqL1xubGV0IGNvbG9yQ29udmVydDtcbmNvbnN0IG1ha2VEeW5hbWljU3R5bGVzID0gKHdyYXAsIHRhcmdldFNwYWNlLCBpZGVudGl0eSwgaXNCYWNrZ3JvdW5kKSA9PiB7XG5cdGlmIChjb2xvckNvbnZlcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbG9yQ29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblx0fVxuXG5cdGNvbnN0IG9mZnNldCA9IGlzQmFja2dyb3VuZCA/IDEwIDogMDtcblx0Y29uc3Qgc3R5bGVzID0ge307XG5cblx0Zm9yIChjb25zdCBbc291cmNlU3BhY2UsIHN1aXRlXSBvZiBPYmplY3QuZW50cmllcyhjb2xvckNvbnZlcnQpKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHNvdXJjZVNwYWNlID09PSAnYW5zaTE2JyA/ICdhbnNpJyA6IHNvdXJjZVNwYWNlO1xuXHRcdGlmIChzb3VyY2VTcGFjZSA9PT0gdGFyZ2V0U3BhY2UpIHtcblx0XHRcdHN0eWxlc1tuYW1lXSA9IHdyYXAoaWRlbnRpdHksIG9mZnNldCk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc3VpdGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRzdHlsZXNbbmFtZV0gPSB3cmFwKHN1aXRlW3RhcmdldFNwYWNlXSwgb2Zmc2V0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufTtcblxuZnVuY3Rpb24gYXNzZW1ibGVTdHlsZXMoKSB7XG5cdGNvbnN0IGNvZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0bW9kaWZpZXI6IHtcblx0XHRcdHJlc2V0OiBbMCwgMF0sXG5cdFx0XHQvLyAyMSBpc24ndCB3aWRlbHkgc3VwcG9ydGVkIGFuZCAyMiBkb2VzIHRoZSBzYW1lIHRoaW5nXG5cdFx0XHRib2xkOiBbMSwgMjJdLFxuXHRcdFx0ZGltOiBbMiwgMjJdLFxuXHRcdFx0aXRhbGljOiBbMywgMjNdLFxuXHRcdFx0dW5kZXJsaW5lOiBbNCwgMjRdLFxuXHRcdFx0aW52ZXJzZTogWzcsIDI3XSxcblx0XHRcdGhpZGRlbjogWzgsIDI4XSxcblx0XHRcdHN0cmlrZXRocm91Z2g6IFs5LCAyOV1cblx0XHR9LFxuXHRcdGNvbG9yOiB7XG5cdFx0XHRibGFjazogWzMwLCAzOV0sXG5cdFx0XHRyZWQ6IFszMSwgMzldLFxuXHRcdFx0Z3JlZW46IFszMiwgMzldLFxuXHRcdFx0eWVsbG93OiBbMzMsIDM5XSxcblx0XHRcdGJsdWU6IFszNCwgMzldLFxuXHRcdFx0bWFnZW50YTogWzM1LCAzOV0sXG5cdFx0XHRjeWFuOiBbMzYsIDM5XSxcblx0XHRcdHdoaXRlOiBbMzcsIDM5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRibGFja0JyaWdodDogWzkwLCAzOV0sXG5cdFx0XHRyZWRCcmlnaHQ6IFs5MSwgMzldLFxuXHRcdFx0Z3JlZW5CcmlnaHQ6IFs5MiwgMzldLFxuXHRcdFx0eWVsbG93QnJpZ2h0OiBbOTMsIDM5XSxcblx0XHRcdGJsdWVCcmlnaHQ6IFs5NCwgMzldLFxuXHRcdFx0bWFnZW50YUJyaWdodDogWzk1LCAzOV0sXG5cdFx0XHRjeWFuQnJpZ2h0OiBbOTYsIDM5XSxcblx0XHRcdHdoaXRlQnJpZ2h0OiBbOTcsIDM5XVxuXHRcdH0sXG5cdFx0YmdDb2xvcjoge1xuXHRcdFx0YmdCbGFjazogWzQwLCA0OV0sXG5cdFx0XHRiZ1JlZDogWzQxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuOiBbNDIsIDQ5XSxcblx0XHRcdGJnWWVsbG93OiBbNDMsIDQ5XSxcblx0XHRcdGJnQmx1ZTogWzQ0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGE6IFs0NSwgNDldLFxuXHRcdFx0YmdDeWFuOiBbNDYsIDQ5XSxcblx0XHRcdGJnV2hpdGU6IFs0NywgNDldLFxuXG5cdFx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRcdGJnQmxhY2tCcmlnaHQ6IFsxMDAsIDQ5XSxcblx0XHRcdGJnUmVkQnJpZ2h0OiBbMTAxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuQnJpZ2h0OiBbMTAyLCA0OV0sXG5cdFx0XHRiZ1llbGxvd0JyaWdodDogWzEwMywgNDldLFxuXHRcdFx0YmdCbHVlQnJpZ2h0OiBbMTA0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGFCcmlnaHQ6IFsxMDUsIDQ5XSxcblx0XHRcdGJnQ3lhbkJyaWdodDogWzEwNiwgNDldLFxuXHRcdFx0YmdXaGl0ZUJyaWdodDogWzEwNywgNDldXG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFsaWFzIGJyaWdodCBibGFjayBhcyBncmF5IChhbmQgZ3JleSlcblx0c3R5bGVzLmNvbG9yLmdyYXkgPSBzdHlsZXMuY29sb3IuYmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5iZ0NvbG9yLmJnR3JheSA9IHN0eWxlcy5iZ0NvbG9yLmJnQmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5jb2xvci5ncmV5ID0gc3R5bGVzLmNvbG9yLmJsYWNrQnJpZ2h0O1xuXHRzdHlsZXMuYmdDb2xvci5iZ0dyZXkgPSBzdHlsZXMuYmdDb2xvci5iZ0JsYWNrQnJpZ2h0O1xuXG5cdGZvciAoY29uc3QgW2dyb3VwTmFtZSwgZ3JvdXBdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlcykpIHtcblx0XHRmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhncm91cCkpIHtcblx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0ge1xuXHRcdFx0XHRvcGVuOiBgXFx1MDAxQlske3N0eWxlWzBdfW1gLFxuXHRcdFx0XHRjbG9zZTogYFxcdTAwMUJbJHtzdHlsZVsxXX1tYFxuXHRcdFx0fTtcblxuXHRcdFx0Z3JvdXBbc3R5bGVOYW1lXSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuXG5cdFx0XHRjb2Rlcy5zZXQoc3R5bGVbMF0sIHN0eWxlWzFdKTtcblx0XHR9XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCBncm91cE5hbWUsIHtcblx0XHRcdHZhbHVlOiBncm91cCxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCAnY29kZXMnLCB7XG5cdFx0dmFsdWU6IGNvZGVzLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdH0pO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTYsICdhbnNpMTYnLCBhbnNpMmFuc2ksIGZhbHNlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuY29sb3IsICdhbnNpMjU2JywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kyNTYsICdhbnNpMjU2JywgYW5zaTJhbnNpLCBmYWxzZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaTE2bScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTZtLCAncmdiJywgcmdiMnJnYiwgZmFsc2UpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTYsICdhbnNpMTYnLCBhbnNpMmFuc2ksIHRydWUpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaTI1NicsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMjU2LCAnYW5zaTI1NicsIGFuc2kyYW5zaSwgdHJ1ZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmJnQ29sb3IsICdhbnNpMTZtJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNm0sICdyZ2InLCByZ2IycmdiLCB0cnVlKSk7XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuLy8gTWFrZSB0aGUgZXhwb3J0IGltbXV0YWJsZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogYXNzZW1ibGVTdHlsZXNcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzLmhydGltZSB8fCBocnRpbWVcblxuLy8gcG9seWZpbCBmb3Igd2luZG93LnBlcmZvcm1hbmNlLm5vd1xudmFyIHBlcmZvcm1hbmNlID0gZ2xvYmFsLnBlcmZvcm1hbmNlIHx8IHt9XG52YXIgcGVyZm9ybWFuY2VOb3cgPVxuICBwZXJmb3JtYW5jZS5ub3cgICAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm1vek5vdyAgICAgfHxcbiAgcGVyZm9ybWFuY2UubXNOb3cgICAgICB8fFxuICBwZXJmb3JtYW5jZS5vTm93ICAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLndlYmtpdE5vdyAgfHxcbiAgZnVuY3Rpb24oKXsgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgfVxuXG4vLyBnZW5lcmF0ZSB0aW1lc3RhbXAgb3IgZGVsdGFcbi8vIHNlZSBodHRwOi8vbm9kZWpzLm9yZy9hcGkvcHJvY2Vzcy5odG1sI3Byb2Nlc3NfcHJvY2Vzc19ocnRpbWVcbmZ1bmN0aW9uIGhydGltZShwcmV2aW91c1RpbWVzdGFtcCl7XG4gIHZhciBjbG9ja3RpbWUgPSBwZXJmb3JtYW5jZU5vdy5jYWxsKHBlcmZvcm1hbmNlKSoxZS0zXG4gIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcihjbG9ja3RpbWUpXG4gIHZhciBuYW5vc2Vjb25kcyA9IE1hdGguZmxvb3IoKGNsb2NrdGltZSUxKSoxZTkpXG4gIGlmIChwcmV2aW91c1RpbWVzdGFtcCkge1xuICAgIHNlY29uZHMgPSBzZWNvbmRzIC0gcHJldmlvdXNUaW1lc3RhbXBbMF1cbiAgICBuYW5vc2Vjb25kcyA9IG5hbm9zZWNvbmRzIC0gcHJldmlvdXNUaW1lc3RhbXBbMV1cbiAgICBpZiAobmFub3NlY29uZHM8MCkge1xuICAgICAgc2Vjb25kcy0tXG4gICAgICBuYW5vc2Vjb25kcyArPSAxZTlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtzZWNvbmRzLG5hbm9zZWNvbmRzXVxufSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lTdHlsZXMgPSByZXF1aXJlKCdhbnNpLXN0eWxlcycpO1xuY29uc3Qge3N0ZG91dDogc3Rkb3V0Q29sb3IsIHN0ZGVycjogc3RkZXJyQ29sb3J9ID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcbmNvbnN0IHtcblx0c3RyaW5nUmVwbGFjZUFsbCxcblx0c3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4XG59ID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IHtpc0FycmF5fSA9IEFycmF5O1xuXG4vLyBgc3VwcG9ydHNDb2xvci5sZXZlbGAg4oaSIGBhbnNpU3R5bGVzLmNvbG9yW25hbWVdYCBtYXBwaW5nXG5jb25zdCBsZXZlbE1hcHBpbmcgPSBbXG5cdCdhbnNpJyxcblx0J2Fuc2knLFxuXHQnYW5zaTI1NicsXG5cdCdhbnNpMTZtJ1xuXTtcblxuY29uc3Qgc3R5bGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuY29uc3QgYXBwbHlPcHRpb25zID0gKG9iamVjdCwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGlmIChvcHRpb25zLmxldmVsICYmICEoTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLmxldmVsKSAmJiBvcHRpb25zLmxldmVsID49IDAgJiYgb3B0aW9ucy5sZXZlbCA8PSAzKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBsZXZlbGAgb3B0aW9uIHNob3VsZCBiZSBhbiBpbnRlZ2VyIGZyb20gMCB0byAzJyk7XG5cdH1cblxuXHQvLyBEZXRlY3QgbGV2ZWwgaWYgbm90IHNldCBtYW51YWxseVxuXHRjb25zdCBjb2xvckxldmVsID0gc3Rkb3V0Q29sb3IgPyBzdGRvdXRDb2xvci5sZXZlbCA6IDA7XG5cdG9iamVjdC5sZXZlbCA9IG9wdGlvbnMubGV2ZWwgPT09IHVuZGVmaW5lZCA/IGNvbG9yTGV2ZWwgOiBvcHRpb25zLmxldmVsO1xufTtcblxuY2xhc3MgQ2hhbGtDbGFzcyB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RydWN0b3ItcmV0dXJuXG5cdFx0cmV0dXJuIGNoYWxrRmFjdG9yeShvcHRpb25zKTtcblx0fVxufVxuXG5jb25zdCBjaGFsa0ZhY3RvcnkgPSBvcHRpb25zID0+IHtcblx0Y29uc3QgY2hhbGsgPSB7fTtcblx0YXBwbHlPcHRpb25zKGNoYWxrLCBvcHRpb25zKTtcblxuXHRjaGFsay50ZW1wbGF0ZSA9ICguLi5hcmd1bWVudHNfKSA9PiBjaGFsa1RhZyhjaGFsay50ZW1wbGF0ZSwgLi4uYXJndW1lbnRzXyk7XG5cblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYWxrLCBDaGFsay5wcm90b3R5cGUpO1xuXHRPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhbGsudGVtcGxhdGUsIGNoYWxrKTtcblxuXHRjaGFsay50ZW1wbGF0ZS5jb25zdHJ1Y3RvciA9ICgpID0+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2BjaGFsay5jb25zdHJ1Y3RvcigpYCBpcyBkZXByZWNhdGVkLiBVc2UgYG5ldyBjaGFsay5JbnN0YW5jZSgpYCBpbnN0ZWFkLicpO1xuXHR9O1xuXG5cdGNoYWxrLnRlbXBsYXRlLkluc3RhbmNlID0gQ2hhbGtDbGFzcztcblxuXHRyZXR1cm4gY2hhbGsudGVtcGxhdGU7XG59O1xuXG5mdW5jdGlvbiBDaGFsayhvcHRpb25zKSB7XG5cdHJldHVybiBjaGFsa0ZhY3Rvcnkob3B0aW9ucyk7XG59XG5cbmZvciAoY29uc3QgW3N0eWxlTmFtZSwgc3R5bGVdIG9mIE9iamVjdC5lbnRyaWVzKGFuc2lTdHlsZXMpKSB7XG5cdHN0eWxlc1tzdHlsZU5hbWVdID0ge1xuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IGJ1aWxkZXIgPSBjcmVhdGVCdWlsZGVyKHRoaXMsIGNyZWF0ZVN0eWxlcihzdHlsZS5vcGVuLCBzdHlsZS5jbG9zZSwgdGhpcy5fc3R5bGVyKSwgdGhpcy5faXNFbXB0eSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgc3R5bGVOYW1lLCB7dmFsdWU6IGJ1aWxkZXJ9KTtcblx0XHRcdHJldHVybiBidWlsZGVyO1xuXHRcdH1cblx0fTtcbn1cblxuc3R5bGVzLnZpc2libGUgPSB7XG5cdGdldCgpIHtcblx0XHRjb25zdCBidWlsZGVyID0gY3JlYXRlQnVpbGRlcih0aGlzLCB0aGlzLl9zdHlsZXIsIHRydWUpO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndmlzaWJsZScsIHt2YWx1ZTogYnVpbGRlcn0pO1xuXHRcdHJldHVybiBidWlsZGVyO1xuXHR9XG59O1xuXG5jb25zdCB1c2VkTW9kZWxzID0gWydyZ2InLCAnaGV4JywgJ2tleXdvcmQnLCAnaHNsJywgJ2hzdicsICdod2InLCAnYW5zaScsICdhbnNpMjU2J107XG5cbmZvciAoY29uc3QgbW9kZWwgb2YgdXNlZE1vZGVscykge1xuXHRzdHlsZXNbbW9kZWxdID0ge1xuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IHtsZXZlbH0gPSB0aGlzO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdFx0XHRcdGNvbnN0IHN0eWxlciA9IGNyZWF0ZVN0eWxlcihhbnNpU3R5bGVzLmNvbG9yW2xldmVsTWFwcGluZ1tsZXZlbF1dW21vZGVsXSguLi5hcmd1bWVudHNfKSwgYW5zaVN0eWxlcy5jb2xvci5jbG9zZSwgdGhpcy5fc3R5bGVyKTtcblx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJ1aWxkZXIodGhpcywgc3R5bGVyLCB0aGlzLl9pc0VtcHR5KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuXG5mb3IgKGNvbnN0IG1vZGVsIG9mIHVzZWRNb2RlbHMpIHtcblx0Y29uc3QgYmdNb2RlbCA9ICdiZycgKyBtb2RlbFswXS50b1VwcGVyQ2FzZSgpICsgbW9kZWwuc2xpY2UoMSk7XG5cdHN0eWxlc1tiZ01vZGVsXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCB7bGV2ZWx9ID0gdGhpcztcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRcdFx0XHRjb25zdCBzdHlsZXIgPSBjcmVhdGVTdHlsZXIoYW5zaVN0eWxlcy5iZ0NvbG9yW2xldmVsTWFwcGluZ1tsZXZlbF1dW21vZGVsXSguLi5hcmd1bWVudHNfKSwgYW5zaVN0eWxlcy5iZ0NvbG9yLmNsb3NlLCB0aGlzLl9zdHlsZXIpO1xuXHRcdFx0XHRyZXR1cm4gY3JlYXRlQnVpbGRlcih0aGlzLCBzdHlsZXIsIHRoaXMuX2lzRW1wdHkpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IHByb3RvID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKCkgPT4ge30sIHtcblx0Li4uc3R5bGVzLFxuXHRsZXZlbDoge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2dlbmVyYXRvci5sZXZlbDtcblx0XHR9LFxuXHRcdHNldChsZXZlbCkge1xuXHRcdFx0dGhpcy5fZ2VuZXJhdG9yLmxldmVsID0gbGV2ZWw7XG5cdFx0fVxuXHR9XG59KTtcblxuY29uc3QgY3JlYXRlU3R5bGVyID0gKG9wZW4sIGNsb3NlLCBwYXJlbnQpID0+IHtcblx0bGV0IG9wZW5BbGw7XG5cdGxldCBjbG9zZUFsbDtcblx0aWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3BlbkFsbCA9IG9wZW47XG5cdFx0Y2xvc2VBbGwgPSBjbG9zZTtcblx0fSBlbHNlIHtcblx0XHRvcGVuQWxsID0gcGFyZW50Lm9wZW5BbGwgKyBvcGVuO1xuXHRcdGNsb3NlQWxsID0gY2xvc2UgKyBwYXJlbnQuY2xvc2VBbGw7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG9wZW4sXG5cdFx0Y2xvc2UsXG5cdFx0b3BlbkFsbCxcblx0XHRjbG9zZUFsbCxcblx0XHRwYXJlbnRcblx0fTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1aWxkZXIgPSAoc2VsZiwgX3N0eWxlciwgX2lzRW1wdHkpID0+IHtcblx0Y29uc3QgYnVpbGRlciA9ICguLi5hcmd1bWVudHNfKSA9PiB7XG5cdFx0aWYgKGlzQXJyYXkoYXJndW1lbnRzX1swXSkgJiYgaXNBcnJheShhcmd1bWVudHNfWzBdLnJhdykpIHtcblx0XHRcdC8vIENhbGxlZCBhcyBhIHRlbXBsYXRlIGxpdGVyYWwsIGZvciBleGFtcGxlOiBjaGFsay5yZWRgMiArIDMgPSB7Ym9sZCAkezIrM319YFxuXHRcdFx0cmV0dXJuIGFwcGx5U3R5bGUoYnVpbGRlciwgY2hhbGtUYWcoYnVpbGRlciwgLi4uYXJndW1lbnRzXykpO1xuXHRcdH1cblxuXHRcdC8vIFNpbmdsZSBhcmd1bWVudCBpcyBob3QgcGF0aCwgaW1wbGljaXQgY29lcmNpb24gaXMgZmFzdGVyIHRoYW4gYW55dGhpbmdcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cblx0XHRyZXR1cm4gYXBwbHlTdHlsZShidWlsZGVyLCAoYXJndW1lbnRzXy5sZW5ndGggPT09IDEpID8gKCcnICsgYXJndW1lbnRzX1swXSkgOiBhcmd1bWVudHNfLmpvaW4oJyAnKSk7XG5cdH07XG5cblx0Ly8gV2UgYWx0ZXIgdGhlIHByb3RvdHlwZSBiZWNhdXNlIHdlIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24sIGJ1dCB0aGVyZSBpc1xuXHQvLyBubyB3YXkgdG8gY3JlYXRlIGEgZnVuY3Rpb24gd2l0aCBhIGRpZmZlcmVudCBwcm90b3R5cGVcblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1aWxkZXIsIHByb3RvKTtcblxuXHRidWlsZGVyLl9nZW5lcmF0b3IgPSBzZWxmO1xuXHRidWlsZGVyLl9zdHlsZXIgPSBfc3R5bGVyO1xuXHRidWlsZGVyLl9pc0VtcHR5ID0gX2lzRW1wdHk7XG5cblx0cmV0dXJuIGJ1aWxkZXI7XG59O1xuXG5jb25zdCBhcHBseVN0eWxlID0gKHNlbGYsIHN0cmluZykgPT4ge1xuXHRpZiAoc2VsZi5sZXZlbCA8PSAwIHx8ICFzdHJpbmcpIHtcblx0XHRyZXR1cm4gc2VsZi5faXNFbXB0eSA/ICcnIDogc3RyaW5nO1xuXHR9XG5cblx0bGV0IHN0eWxlciA9IHNlbGYuX3N0eWxlcjtcblxuXHRpZiAoc3R5bGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0Y29uc3Qge29wZW5BbGwsIGNsb3NlQWxsfSA9IHN0eWxlcjtcblx0aWYgKHN0cmluZy5pbmRleE9mKCdcXHUwMDFCJykgIT09IC0xKSB7XG5cdFx0d2hpbGUgKHN0eWxlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBSZXBsYWNlIGFueSBpbnN0YW5jZXMgYWxyZWFkeSBwcmVzZW50IHdpdGggYSByZS1vcGVuaW5nIGNvZGVcblx0XHRcdC8vIG90aGVyd2lzZSBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBzdHJpbmcgdW50aWwgc2FpZCBjbG9zaW5nIGNvZGVcblx0XHRcdC8vIHdpbGwgYmUgY29sb3JlZCwgYW5kIHRoZSByZXN0IHdpbGwgc2ltcGx5IGJlICdwbGFpbicuXG5cdFx0XHRzdHJpbmcgPSBzdHJpbmdSZXBsYWNlQWxsKHN0cmluZywgc3R5bGVyLmNsb3NlLCBzdHlsZXIub3Blbik7XG5cblx0XHRcdHN0eWxlciA9IHN0eWxlci5wYXJlbnQ7XG5cdFx0fVxuXHR9XG5cblx0Ly8gV2UgY2FuIG1vdmUgYm90aCBuZXh0IGFjdGlvbnMgb3V0IG9mIGxvb3AsIGJlY2F1c2UgcmVtYWluaW5nIGFjdGlvbnMgaW4gbG9vcCB3b24ndCBoYXZlXG5cdC8vIGFueS92aXNpYmxlIGVmZmVjdCBvbiBwYXJ0cyB3ZSBhZGQgaGVyZS4gQ2xvc2UgdGhlIHN0eWxpbmcgYmVmb3JlIGEgbGluZWJyZWFrIGFuZCByZW9wZW5cblx0Ly8gYWZ0ZXIgbmV4dCBsaW5lIHRvIGZpeCBhIGJsZWVkIGlzc3VlIG9uIG1hY09TOiBodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvY2hhbGsvcHVsbC85MlxuXHRjb25zdCBsZkluZGV4ID0gc3RyaW5nLmluZGV4T2YoJ1xcbicpO1xuXHRpZiAobGZJbmRleCAhPT0gLTEpIHtcblx0XHRzdHJpbmcgPSBzdHJpbmdFbmNhc2VDUkxGV2l0aEZpcnN0SW5kZXgoc3RyaW5nLCBjbG9zZUFsbCwgb3BlbkFsbCwgbGZJbmRleCk7XG5cdH1cblxuXHRyZXR1cm4gb3BlbkFsbCArIHN0cmluZyArIGNsb3NlQWxsO1xufTtcblxubGV0IHRlbXBsYXRlO1xuY29uc3QgY2hhbGtUYWcgPSAoY2hhbGssIC4uLnN0cmluZ3MpID0+IHtcblx0Y29uc3QgW2ZpcnN0U3RyaW5nXSA9IHN0cmluZ3M7XG5cblx0aWYgKCFpc0FycmF5KGZpcnN0U3RyaW5nKSB8fCAhaXNBcnJheShmaXJzdFN0cmluZy5yYXcpKSB7XG5cdFx0Ly8gSWYgY2hhbGsoKSB3YXMgY2FsbGVkIGJ5IGl0c2VsZiBvciB3aXRoIGEgc3RyaW5nLFxuXHRcdC8vIHJldHVybiB0aGUgc3RyaW5nIGl0c2VsZiBhcyBhIHN0cmluZy5cblx0XHRyZXR1cm4gc3RyaW5ncy5qb2luKCcgJyk7XG5cdH1cblxuXHRjb25zdCBhcmd1bWVudHNfID0gc3RyaW5ncy5zbGljZSgxKTtcblx0Y29uc3QgcGFydHMgPSBbZmlyc3RTdHJpbmcucmF3WzBdXTtcblxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGZpcnN0U3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0cGFydHMucHVzaChcblx0XHRcdFN0cmluZyhhcmd1bWVudHNfW2kgLSAxXSkucmVwbGFjZSgvW3t9XFxcXF0vZywgJ1xcXFwkJicpLFxuXHRcdFx0U3RyaW5nKGZpcnN0U3RyaW5nLnJhd1tpXSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcblx0XHR0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5cdH1cblxuXHRyZXR1cm4gdGVtcGxhdGUoY2hhbGssIHBhcnRzLmpvaW4oJycpKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENoYWxrLnByb3RvdHlwZSwgc3R5bGVzKTtcblxuY29uc3QgY2hhbGsgPSBDaGFsaygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbmNoYWxrLnN1cHBvcnRzQ29sb3IgPSBzdGRvdXRDb2xvcjtcbmNoYWxrLnN0ZGVyciA9IENoYWxrKHtsZXZlbDogc3RkZXJyQ29sb3IgPyBzdGRlcnJDb2xvci5sZXZlbCA6IDB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5jaGFsay5zdGRlcnIuc3VwcG9ydHNDb2xvciA9IHN0ZGVyckNvbG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYWxrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgVEVNUExBVEVfUkVHRVggPSAvKD86XFxcXCh1KD86W2EtZlxcZF17NH18XFx7W2EtZlxcZF17MSw2fVxcfSl8eFthLWZcXGRdezJ9fC4pKXwoPzpcXHsofik/KFxcdysoPzpcXChbXildKlxcKSk/KD86XFwuXFx3Kyg/OlxcKFteKV0qXFwpKT8pKikoPzpbIFxcdF18KD89XFxyP1xcbikpKXwoXFx9KXwoKD86LnxbXFxyXFxuXFxmXSkrPykvZ2k7XG5jb25zdCBTVFlMRV9SRUdFWCA9IC8oPzpefFxcLikoXFx3KykoPzpcXCgoW14pXSopXFwpKT8vZztcbmNvbnN0IFNUUklOR19SRUdFWCA9IC9eKFsnXCJdKSgoPzpcXFxcLnwoPyFcXDEpW15cXFxcXSkqKVxcMSQvO1xuY29uc3QgRVNDQVBFX1JFR0VYID0gL1xcXFwodSg/OlthLWZcXGRdezR9fHtbYS1mXFxkXXsxLDZ9fSl8eFthLWZcXGRdezJ9fC4pfChbXlxcXFxdKS9naTtcblxuY29uc3QgRVNDQVBFUyA9IG5ldyBNYXAoW1xuXHRbJ24nLCAnXFxuJ10sXG5cdFsncicsICdcXHInXSxcblx0Wyd0JywgJ1xcdCddLFxuXHRbJ2InLCAnXFxiJ10sXG5cdFsnZicsICdcXGYnXSxcblx0Wyd2JywgJ1xcdiddLFxuXHRbJzAnLCAnXFwwJ10sXG5cdFsnXFxcXCcsICdcXFxcJ10sXG5cdFsnZScsICdcXHUwMDFCJ10sXG5cdFsnYScsICdcXHUwMDA3J11cbl0pO1xuXG5mdW5jdGlvbiB1bmVzY2FwZShjKSB7XG5cdGNvbnN0IHUgPSBjWzBdID09PSAndSc7XG5cdGNvbnN0IGJyYWNrZXQgPSBjWzFdID09PSAneyc7XG5cblx0aWYgKCh1ICYmICFicmFja2V0ICYmIGMubGVuZ3RoID09PSA1KSB8fCAoY1swXSA9PT0gJ3gnICYmIGMubGVuZ3RoID09PSAzKSkge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGMuc2xpY2UoMSksIDE2KSk7XG5cdH1cblxuXHRpZiAodSAmJiBicmFja2V0KSB7XG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KHBhcnNlSW50KGMuc2xpY2UoMiwgLTEpLCAxNikpO1xuXHR9XG5cblx0cmV0dXJuIEVTQ0FQRVMuZ2V0KGMpIHx8IGM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKG5hbWUsIGFyZ3VtZW50c18pIHtcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRjb25zdCBjaHVua3MgPSBhcmd1bWVudHNfLnRyaW0oKS5zcGxpdCgvXFxzKixcXHMqL2cpO1xuXHRsZXQgbWF0Y2hlcztcblxuXHRmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuXHRcdGNvbnN0IG51bWJlciA9IE51bWJlcihjaHVuayk7XG5cdFx0aWYgKCFOdW1iZXIuaXNOYU4obnVtYmVyKSkge1xuXHRcdFx0cmVzdWx0cy5wdXNoKG51bWJlcik7XG5cdFx0fSBlbHNlIGlmICgobWF0Y2hlcyA9IGNodW5rLm1hdGNoKFNUUklOR19SRUdFWCkpKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2gobWF0Y2hlc1syXS5yZXBsYWNlKEVTQ0FQRV9SRUdFWCwgKG0sIGVzY2FwZSwgY2hhcmFjdGVyKSA9PiBlc2NhcGUgPyB1bmVzY2FwZShlc2NhcGUpIDogY2hhcmFjdGVyKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBDaGFsayB0ZW1wbGF0ZSBzdHlsZSBhcmd1bWVudDogJHtjaHVua30gKGluIHN0eWxlICcke25hbWV9JylgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZShzdHlsZSkge1xuXHRTVFlMRV9SRUdFWC5sYXN0SW5kZXggPSAwO1xuXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0bGV0IG1hdGNoZXM7XG5cblx0d2hpbGUgKChtYXRjaGVzID0gU1RZTEVfUkVHRVguZXhlYyhzdHlsZSkpICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgbmFtZSA9IG1hdGNoZXNbMV07XG5cblx0XHRpZiAobWF0Y2hlc1syXSkge1xuXHRcdFx0Y29uc3QgYXJncyA9IHBhcnNlQXJndW1lbnRzKG5hbWUsIG1hdGNoZXNbMl0pO1xuXHRcdFx0cmVzdWx0cy5wdXNoKFtuYW1lXS5jb25jYXQoYXJncykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goW25hbWVdKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKSB7XG5cdGNvbnN0IGVuYWJsZWQgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGxheWVyIG9mIHN0eWxlcykge1xuXHRcdGZvciAoY29uc3Qgc3R5bGUgb2YgbGF5ZXIuc3R5bGVzKSB7XG5cdFx0XHRlbmFibGVkW3N0eWxlWzBdXSA9IGxheWVyLmludmVyc2UgPyBudWxsIDogc3R5bGUuc2xpY2UoMSk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGN1cnJlbnQgPSBjaGFsaztcblx0Zm9yIChjb25zdCBbc3R5bGVOYW1lLCBzdHlsZXNdIG9mIE9iamVjdC5lbnRyaWVzKGVuYWJsZWQpKSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghKHN0eWxlTmFtZSBpbiBjdXJyZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIENoYWxrIHN0eWxlOiAke3N0eWxlTmFtZX1gKTtcblx0XHR9XG5cblx0XHRjdXJyZW50ID0gc3R5bGVzLmxlbmd0aCA+IDAgPyBjdXJyZW50W3N0eWxlTmFtZV0oLi4uc3R5bGVzKSA6IGN1cnJlbnRbc3R5bGVOYW1lXTtcblx0fVxuXG5cdHJldHVybiBjdXJyZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IChjaGFsaywgdGVtcG9yYXJ5KSA9PiB7XG5cdGNvbnN0IHN0eWxlcyA9IFtdO1xuXHRjb25zdCBjaHVua3MgPSBbXTtcblx0bGV0IGNodW5rID0gW107XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcblx0dGVtcG9yYXJ5LnJlcGxhY2UoVEVNUExBVEVfUkVHRVgsIChtLCBlc2NhcGVDaGFyYWN0ZXIsIGludmVyc2UsIHN0eWxlLCBjbG9zZSwgY2hhcmFjdGVyKSA9PiB7XG5cdFx0aWYgKGVzY2FwZUNoYXJhY3Rlcikge1xuXHRcdFx0Y2h1bmsucHVzaCh1bmVzY2FwZShlc2NhcGVDaGFyYWN0ZXIpKTtcblx0XHR9IGVsc2UgaWYgKHN0eWxlKSB7XG5cdFx0XHRjb25zdCBzdHJpbmcgPSBjaHVuay5qb2luKCcnKTtcblx0XHRcdGNodW5rID0gW107XG5cdFx0XHRjaHVua3MucHVzaChzdHlsZXMubGVuZ3RoID09PSAwID8gc3RyaW5nIDogYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKShzdHJpbmcpKTtcblx0XHRcdHN0eWxlcy5wdXNoKHtpbnZlcnNlLCBzdHlsZXM6IHBhcnNlU3R5bGUoc3R5bGUpfSk7XG5cdFx0fSBlbHNlIGlmIChjbG9zZSkge1xuXHRcdFx0aWYgKHN0eWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGb3VuZCBleHRyYW5lb3VzIH0gaW4gQ2hhbGsgdGVtcGxhdGUgbGl0ZXJhbCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRjaHVua3MucHVzaChidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpKGNodW5rLmpvaW4oJycpKSk7XG5cdFx0XHRjaHVuayA9IFtdO1xuXHRcdFx0c3R5bGVzLnBvcCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaHVuay5wdXNoKGNoYXJhY3Rlcik7XG5cdFx0fVxuXHR9KTtcblxuXHRjaHVua3MucHVzaChjaHVuay5qb2luKCcnKSk7XG5cblx0aWYgKHN0eWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0Y29uc3QgZXJyTWVzc2FnZSA9IGBDaGFsayB0ZW1wbGF0ZSBsaXRlcmFsIGlzIG1pc3NpbmcgJHtzdHlsZXMubGVuZ3RofSBjbG9zaW5nIGJyYWNrZXQke3N0eWxlcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gKFxcYH1cXGApYDtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyTWVzc2FnZSk7XG5cdH1cblxuXHRyZXR1cm4gY2h1bmtzLmpvaW4oJycpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3RyaW5nUmVwbGFjZUFsbCA9IChzdHJpbmcsIHN1YnN0cmluZywgcmVwbGFjZXIpID0+IHtcblx0bGV0IGluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc3Vic3RyaW5nKTtcblx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRjb25zdCBzdWJzdHJpbmdMZW5ndGggPSBzdWJzdHJpbmcubGVuZ3RoO1xuXHRsZXQgZW5kSW5kZXggPSAwO1xuXHRsZXQgcmV0dXJuVmFsdWUgPSAnJztcblx0ZG8ge1xuXHRcdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgsIGluZGV4IC0gZW5kSW5kZXgpICsgc3Vic3RyaW5nICsgcmVwbGFjZXI7XG5cdFx0ZW5kSW5kZXggPSBpbmRleCArIHN1YnN0cmluZ0xlbmd0aDtcblx0XHRpbmRleCA9IHN0cmluZy5pbmRleE9mKHN1YnN0cmluZywgZW5kSW5kZXgpO1xuXHR9IHdoaWxlIChpbmRleCAhPT0gLTEpO1xuXG5cdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgpO1xuXHRyZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG5jb25zdCBzdHJpbmdFbmNhc2VDUkxGV2l0aEZpcnN0SW5kZXggPSAoc3RyaW5nLCBwcmVmaXgsIHBvc3RmaXgsIGluZGV4KSA9PiB7XG5cdGxldCBlbmRJbmRleCA9IDA7XG5cdGxldCByZXR1cm5WYWx1ZSA9ICcnO1xuXHRkbyB7XG5cdFx0Y29uc3QgZ290Q1IgPSBzdHJpbmdbaW5kZXggLSAxXSA9PT0gJ1xccic7XG5cdFx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCwgKGdvdENSID8gaW5kZXggLSAxIDogaW5kZXgpIC0gZW5kSW5kZXgpICsgcHJlZml4ICsgKGdvdENSID8gJ1xcclxcbicgOiAnXFxuJykgKyBwb3N0Zml4O1xuXHRcdGVuZEluZGV4ID0gaW5kZXggKyAxO1xuXHRcdGluZGV4ID0gc3RyaW5nLmluZGV4T2YoJ1xcbicsIGVuZEluZGV4KTtcblx0fSB3aGlsZSAoaW5kZXggIT09IC0xKTtcblxuXHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4KTtcblx0cmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN0cmluZ1JlcGxhY2VBbGwsXG5cdHN0cmluZ0VuY2FzZUNSTEZXaXRoRmlyc3RJbmRleFxufTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbmNvbnN0IGNzc0tleXdvcmRzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG5jb25zdCByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNzc0tleXdvcmRzKSkge1xuXHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG59XG5cbmNvbnN0IGNvbnZlcnQgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdyZ2InfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzbCd9LFxuXHRoc3Y6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHN2J30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdod2InfSxcblx0Y215azoge2NoYW5uZWxzOiA0LCBsYWJlbHM6ICdjbXlrJ30sXG5cdHh5ejoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICd4eXonfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xhYid9LFxuXHRsY2g6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGNoJ30sXG5cdGhleDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnaGV4J119LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydrZXl3b3JkJ119LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kxNiddfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTI1NiddfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydoJywgJ2MnLCAnZyddfSxcblx0YXBwbGU6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ3IxNicsICdnMTYnLCAnYjE2J119LFxuXHRncmF5OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydncmF5J119XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG5cbi8vIEhpZGUgLmNoYW5uZWxzIGFuZCAubGFiZWxzIHByb3BlcnRpZXNcbmZvciAoY29uc3QgbW9kZWwgb2YgT2JqZWN0LmtleXMoY29udmVydCkpIHtcblx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbCBsYWJlbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHRpZiAoY29udmVydFttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydFttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NoYW5uZWwgYW5kIGxhYmVsIGNvdW50cyBtaXNtYXRjaDogJyArIG1vZGVsKTtcblx0fVxuXG5cdGNvbnN0IHtjaGFubmVscywgbGFiZWxzfSA9IGNvbnZlcnRbbW9kZWxdO1xuXHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0Y29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG5cdGxldCBoO1xuXHRsZXQgcztcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGNvbnN0IGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHRsZXQgcmRpZjtcblx0bGV0IGdkaWY7XG5cdGxldCBiZGlmO1xuXHRsZXQgaDtcblx0bGV0IHM7XG5cblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblx0Y29uc3QgdiA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHRjb25zdCBkaWZmID0gdiAtIE1hdGgubWluKHIsIGcsIGIpO1xuXHRjb25zdCBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IDA7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRpZmYgLyB2O1xuXHRcdHJkaWYgPSBkaWZmYyhyKTtcblx0XHRnZGlmID0gZGlmZmMoZyk7XG5cdFx0YmRpZiA9IGRpZmZjKGIpO1xuXG5cdFx0aWYgKHIgPT09IHYpIHtcblx0XHRcdGggPSBiZGlmIC0gZ2RpZjtcblx0XHR9IGVsc2UgaWYgKGcgPT09IHYpIHtcblx0XHRcdGggPSAoMSAvIDMpICsgcmRpZiAtIGJkaWY7XG5cdFx0fSBlbHNlIGlmIChiID09PSB2KSB7XG5cdFx0XHRoID0gKDIgLyAzKSArIGdkaWYgLSByZGlmO1xuXHRcdH1cblxuXHRcdGlmIChoIDwgMCkge1xuXHRcdFx0aCArPSAxO1xuXHRcdH0gZWxzZSBpZiAoaCA+IDEpIHtcblx0XHRcdGggLT0gMTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGggKiAzNjAsXG5cdFx0cyAqIDEwMCxcblx0XHR2ICogMTAwXG5cdF07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF07XG5cdGNvbnN0IGcgPSByZ2JbMV07XG5cdGxldCBiID0gcmdiWzJdO1xuXHRjb25zdCBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdGNvbnN0IHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHRjb25zdCBrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGNvbnN0IGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0Y29uc3QgbSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRjb25zdCB5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHQvKlxuXHRcdFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuXHQqL1xuXHRyZXR1cm4gKFxuXHRcdCgoeFswXSAtIHlbMF0pICoqIDIpICtcblx0XHQoKHhbMV0gLSB5WzFdKSAqKiAyKSArXG5cdFx0KCh4WzJdIC0geVsyXSkgKiogMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0bGV0IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0bGV0IGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKGNvbnN0IGtleXdvcmQgb2YgT2JqZWN0LmtleXMoY3NzS2V5d29yZHMpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcblxuXHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRjb25zdCBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHRsZXQgciA9IHJnYlswXSAvIDI1NTtcblx0bGV0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGxldCBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIEFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/ICgoKHIgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyAoKChnICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gKCgoYiArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0Y29uc3QgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0Y29uc3QgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0Y29uc3QgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0bGV0IHggPSB4eXpbMF07XG5cdGxldCB5ID0geHl6WzFdO1xuXHRsZXQgeiA9IHh5elsyXTtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gKHggKiogKDEgLyAzKSkgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyAoeSAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/ICh6ICoqICgxIC8gMykpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGNvbnN0IGwgPSAoMTE2ICogeSkgLSAxNjtcblx0Y29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG5cdGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdGNvbnN0IGggPSBoc2xbMF0gLyAzNjA7XG5cdGNvbnN0IHMgPSBoc2xbMV0gLyAxMDA7XG5cdGNvbnN0IGwgPSBoc2xbMl0gLyAxMDA7XG5cdGxldCB0Mjtcblx0bGV0IHQzO1xuXHRsZXQgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdGNvbnN0IHQxID0gMiAqIGwgLSB0MjtcblxuXHRjb25zdCByZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdGNvbnN0IGggPSBoc2xbMF07XG5cdGxldCBzID0gaHNsWzFdIC8gMTAwO1xuXHRsZXQgbCA9IGhzbFsyXSAvIDEwMDtcblx0bGV0IHNtaW4gPSBzO1xuXHRjb25zdCBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0Y29uc3QgdiA9IChsICsgcykgLyAyO1xuXHRjb25zdCBzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBoID0gaHN2WzBdIC8gNjA7XG5cdGNvbnN0IHMgPSBoc3ZbMV0gLyAxMDA7XG5cdGxldCB2ID0gaHN2WzJdIC8gMTAwO1xuXHRjb25zdCBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdGNvbnN0IGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0Y29uc3QgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHRjb25zdCBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdGNvbnN0IHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdGNvbnN0IGggPSBoc3ZbMF07XG5cdGNvbnN0IHMgPSBoc3ZbMV0gLyAxMDA7XG5cdGNvbnN0IHYgPSBoc3ZbMl0gLyAxMDA7XG5cdGNvbnN0IHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0bGV0IHNsO1xuXHRsZXQgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGNvbnN0IGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdGNvbnN0IGggPSBod2JbMF0gLyAzNjA7XG5cdGxldCB3aCA9IGh3YlsxXSAvIDEwMDtcblx0bGV0IGJsID0gaHdiWzJdIC8gMTAwO1xuXHRjb25zdCByYXRpbyA9IHdoICsgYmw7XG5cdGxldCBmO1xuXG5cdC8vIFdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0Y29uc3QgaSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHRjb25zdCB2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0Y29uc3QgbiA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdGxldCByO1xuXHRsZXQgZztcblx0bGV0IGI7XG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyAgZyA9IG47ICBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47ICBnID0gdjsgIGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyAgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgIGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyAgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgIGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cdC8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUsbm8tbXVsdGktc3BhY2VzICovXG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHRjb25zdCBjID0gY215a1swXSAvIDEwMDtcblx0Y29uc3QgbSA9IGNteWtbMV0gLyAxMDA7XG5cdGNvbnN0IHkgPSBjbXlrWzJdIC8gMTAwO1xuXHRjb25zdCBrID0gY215a1szXSAvIDEwMDtcblxuXHRjb25zdCByID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGNvbnN0IGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0Y29uc3QgYiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdGNvbnN0IHggPSB4eXpbMF0gLyAxMDA7XG5cdGNvbnN0IHkgPSB4eXpbMV0gLyAxMDA7XG5cdGNvbnN0IHogPSB4eXpbMl0gLyAxMDA7XG5cdGxldCByO1xuXHRsZXQgZztcblx0bGV0IGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gQXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiAociAqKiAoMS4wIC8gMi40KSkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiAoZyAqKiAoMS4wIC8gMi40KSkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiAoYiAqKiAoMS4wIC8gMi40KSkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHRsZXQgeCA9IHh5elswXTtcblx0bGV0IHkgPSB4eXpbMV07XG5cdGxldCB6ID0geHl6WzJdO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyAoeCAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/ICh5ICoqICgxIC8gMykpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gKHogKiogKDEgLyAzKSkgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0Y29uc3QgbCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRjb25zdCBhID0gNTAwICogKHggLSB5KTtcblx0Y29uc3QgYiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYlswXTtcblx0Y29uc3QgYSA9IGxhYlsxXTtcblx0Y29uc3QgYiA9IGxhYlsyXTtcblx0bGV0IHg7XG5cdGxldCB5O1xuXHRsZXQgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdGNvbnN0IHkyID0geSAqKiAzO1xuXHRjb25zdCB4MiA9IHggKiogMztcblx0Y29uc3QgejIgPSB6ICoqIDM7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYlswXTtcblx0Y29uc3QgYSA9IGxhYlsxXTtcblx0Y29uc3QgYiA9IGxhYlsyXTtcblx0bGV0IGg7XG5cblx0Y29uc3QgaHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGNvbnN0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0Y29uc3QgbCA9IGxjaFswXTtcblx0Y29uc3QgYyA9IGxjaFsxXTtcblx0Y29uc3QgaCA9IGxjaFsyXTtcblxuXHRjb25zdCBociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0Y29uc3QgYSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGNvbnN0IGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncywgc2F0dXJhdGlvbiA9IG51bGwpIHtcblx0Y29uc3QgW3IsIGcsIGJdID0gYXJncztcblx0bGV0IHZhbHVlID0gc2F0dXJhdGlvbiA9PT0gbnVsbCA/IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXSA6IHNhdHVyYXRpb247IC8vIEhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdGxldCBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIE9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgciA9IGFyZ3NbMF07XG5cdGNvbnN0IGcgPSBhcmdzWzFdO1xuXHRjb25zdCBiID0gYXJnc1syXTtcblxuXHQvLyBXZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdGNvbnN0IGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRsZXQgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gSGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0Y29uc3QgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdGNvbnN0IHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0Y29uc3QgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0Y29uc3QgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIEhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0Y29uc3QgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHRsZXQgcmVtO1xuXHRjb25zdCByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0Y29uc3QgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdGNvbnN0IGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHRjb25zdCBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHRjb25zdCBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn18W2EtZjAtOV17M30vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0bGV0IGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cblx0aWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChjaGFyID0+IHtcblx0XHRcdHJldHVybiBjaGFyICsgY2hhcjtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdGNvbnN0IGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXHRjb25zdCByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0Y29uc3QgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0Y29uc3QgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0Y29uc3QgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHRjb25zdCBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0bGV0IGdyYXlzY2FsZTtcblx0bGV0IGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hO1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdGNvbnN0IHMgPSBoc2xbMV0gLyAxMDA7XG5cdGNvbnN0IGwgPSBoc2xbMl0gLyAxMDA7XG5cblx0Y29uc3QgYyA9IGwgPCAwLjUgPyAoMi4wICogcyAqIGwpIDogKDIuMCAqIHMgKiAoMS4wIC0gbCkpO1xuXG5cdGxldCBmID0gMDtcblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0Y29uc3QgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHRjb25zdCBjID0gcyAqIHY7XG5cdGxldCBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgaCA9IGhjZ1swXSAvIDM2MDtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdGNvbnN0IHB1cmUgPSBbMCwgMCwgMF07XG5cdGNvbnN0IGhpID0gKGggJSAxKSAqIDY7XG5cdGNvbnN0IHYgPSBoaSAlIDE7XG5cdGNvbnN0IHcgPSAxIC0gdjtcblx0bGV0IG1nID0gMDtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSAqL1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblx0LyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSAqL1xuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0Y29uc3QgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRsZXQgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0Y29uc3QgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHRsZXQgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXHRjb25zdCB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0Y29uc3QgdyA9IGh3YlsxXSAvIDEwMDtcblx0Y29uc3QgYiA9IGh3YlsyXSAvIDEwMDtcblx0Y29uc3QgdiA9IDEgLSBiO1xuXHRjb25zdCBjID0gdiAtIHc7XG5cdGxldCBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0LmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc2wgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmhzdiA9IGNvbnZlcnQuZ3JheS5oc2w7XG5cbmNvbnZlcnQuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRjb25zdCB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0Y29uc3QgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcblxuXHRjb25zdCBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5yZ2IuZ3JheSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwiY29uc3QgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5jb25zdCByb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxuY29uc3QgY29udmVydCA9IHt9O1xuXG5jb25zdCBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0Y29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRjb25zdCBhcmcwID0gYXJnc1swXTtcblx0XHRpZiAoYXJnMCA9PT0gdW5kZWZpbmVkIHx8IGFyZzAgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmcwO1xuXHRcdH1cblxuXHRcdGlmIChhcmcwLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBhcmcwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBQcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdGNvbnN0IHdyYXBwZWRGbiA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Y29uc3QgYXJnMCA9IGFyZ3NbMF07XG5cblx0XHRpZiAoYXJnMCA9PT0gdW5kZWZpbmVkIHx8IGFyZzAgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmcwO1xuXHRcdH1cblxuXHRcdGlmIChhcmcwLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBhcmcwO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gV2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAobGV0IGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gUHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmcm9tTW9kZWwgPT4ge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHRjb25zdCByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHRjb25zdCByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaCh0b01vZGVsID0+IHtcblx0XHRjb25zdCBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsImNvbnN0IGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuXG4vKlxuXHRUaGlzIGZ1bmN0aW9uIHJvdXRlcyBhIG1vZGVsIHRvIGFsbCBvdGhlciBtb2RlbHMuXG5cblx0YWxsIGZ1bmN0aW9ucyB0aGF0IGFyZSByb3V0ZWQgaGF2ZSBhIHByb3BlcnR5IGAuY29udmVyc2lvbmAgYXR0YWNoZWRcblx0dG8gdGhlIHJldHVybmVkIHN5bnRoZXRpYyBmdW5jdGlvbi4gVGhpcyBwcm9wZXJ0eSBpcyBhbiBhcnJheVxuXHRvZiBzdHJpbmdzLCBlYWNoIHdpdGggdGhlIHN0ZXBzIGluIGJldHdlZW4gdGhlICdmcm9tJyBhbmQgJ3RvJ1xuXHRjb2xvciBtb2RlbHMgKGluY2x1c2l2ZSkuXG5cblx0Y29udmVyc2lvbnMgdGhhdCBhcmUgbm90IHBvc3NpYmxlIHNpbXBseSBhcmUgbm90IGluY2x1ZGVkLlxuKi9cblxuZnVuY3Rpb24gYnVpbGRHcmFwaCgpIHtcblx0Y29uc3QgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHRjb25zdCBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cblx0Zm9yIChsZXQgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGdyYXBoW21vZGVsc1tpXV0gPSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS8xLXZzLWluZmluaXR5XG5cdFx0XHQvLyBtaWNyby1vcHQsIGJ1dCB0aGlzIGlzIHNpbXBsZS5cblx0XHRcdGRpc3RhbmNlOiAtMSxcblx0XHRcdHBhcmVudDogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyZWFkdGgtZmlyc3Rfc2VhcmNoXG5mdW5jdGlvbiBkZXJpdmVCRlMoZnJvbU1vZGVsKSB7XG5cdGNvbnN0IGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHRjb25zdCBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyBVbnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gcXVldWUucG9wKCk7XG5cdFx0Y29uc3QgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yIChsZXQgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0Y29uc3QgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHRjb25zdCBub2RlID0gZ3JhcGhbYWRqYWNlbnRdO1xuXG5cdFx0XHRpZiAobm9kZS5kaXN0YW5jZSA9PT0gLTEpIHtcblx0XHRcdFx0bm9kZS5kaXN0YW5jZSA9IGdyYXBoW2N1cnJlbnRdLmRpc3RhbmNlICsgMTtcblx0XHRcdFx0bm9kZS5wYXJlbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KGFkamFjZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxpbmsoZnJvbSwgdG8pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0cmV0dXJuIHRvKGZyb20oYXJncykpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCkge1xuXHRjb25zdCBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdGxldCBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0bGV0IGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb25zdCBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHRjb25zdCBjb252ZXJzaW9uID0ge307XG5cblx0Y29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKGxldCBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Y29uc3QgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHRjb25zdCBub2RlID0gZ3JhcGhbdG9Nb2RlbF07XG5cblx0XHRpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdC8vIE5vIHBvc3NpYmxlIGNvbnZlcnNpb24sIG9yIHRoaXMgbm9kZSBpcyB0aGUgc291cmNlIG1vZGVsLlxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvblt0b01vZGVsXSA9IHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJzaW9uO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9vcGVuanNmLm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQsXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlLFxuICAgIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgaWYgKGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgICAgYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgYmFzZU1lcmdlLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgICA/IGN1c3RvbWl6ZXIoc2FmZUdldChvYmplY3QsIGtleSksIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgICAgfVxuICAgICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSwga2V5c0luKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VNZXJnZWAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgbWVyZ2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXJnZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1lcmdlIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IHNhZmVHZXQob2JqZWN0LCBrZXkpLFxuICAgICAgc3JjVmFsdWUgPSBzYWZlR2V0KHNvdXJjZSwga2V5KSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuXG4gIGlmIChzdGFja2VkKSB7XG4gICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICBpZiAoaXNDb21tb24pIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KHNyY1ZhbHVlKSxcbiAgICAgICAgaXNCdWZmID0gIWlzQXJyICYmIGlzQnVmZmVyKHNyY1ZhbHVlKSxcbiAgICAgICAgaXNUeXBlZCA9ICFpc0FyciAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheShzcmNWYWx1ZSk7XG5cbiAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgIGlmIChpc0FyciB8fCBpc0J1ZmYgfHwgaXNUeXBlZCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCdWZmKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVCdWZmZXIoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNUeXBlZCkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lVHlwZWRBcnJheShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCBpc0Z1bmN0aW9uKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGluaXRDbG9uZU9iamVjdChzcmNWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgbWVyZ2VGdW5jKG5ld1ZhbHVlLCBzcmNWYWx1ZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlZmF1bHRzRGVlcGAgdG8gY3VzdG9taXplIGl0cyBgXy5tZXJnZWAgdXNlIHRvIG1lcmdlIHNvdXJjZVxuICogb2JqZWN0cyBpbnRvIGRlc3RpbmF0aW9uIG9iamVjdHMgdGhhdCBhcmUgcGFzc2VkIHRocnUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gb2JqVmFsdWUgVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgc291cmNlIHZhbHVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHBhcmVudCBvYmplY3Qgb2YgYG9ialZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHBhcmVudCBvYmplY3Qgb2YgYHNyY1ZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gY3VzdG9tRGVmYXVsdHNNZXJnZShvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKSB7XG4gIGlmIChpc09iamVjdChvYmpWYWx1ZSkgJiYgaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBvYmpWYWx1ZSk7XG4gICAgYmFzZU1lcmdlKG9ialZhbHVlLCBzcmNWYWx1ZSwgdW5kZWZpbmVkLCBjdXN0b21EZWZhdWx0c01lcmdlLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqVmFsdWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCwgdW5sZXNzIGBrZXlgIGlzIFwiX19wcm90b19fXCIgb3IgXCJjb25zdHJ1Y3RvclwiLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2FmZUdldChvYmplY3QsIGtleSkge1xuICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcGxhaW4gb2JqZWN0IGZsYXR0ZW5pbmcgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nXG4gKiBrZXllZCBwcm9wZXJ0aWVzIG9mIGB2YWx1ZWAgdG8gb3duIHByb3BlcnRpZXMgb2YgdGhlIHBsYWluIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBwbGFpbiBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIG5ldyBGb28pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgXy50b1BsYWluT2JqZWN0KG5ldyBGb28pKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMyB9XG4gKi9cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3QodmFsdWUsIGtleXNJbih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZGVmYXVsdHNgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGFzc2lnbnNcbiAqIGRlZmF1bHQgcHJvcGVydGllcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMTAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmRlZmF1bHRzXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmYXVsdHNEZWVwKHsgJ2EnOiB7ICdiJzogMiB9IH0sIHsgJ2EnOiB7ICdiJzogMSwgJ2MnOiAzIH0gfSk7XG4gKiAvLyA9PiB7ICdhJzogeyAnYic6IDIsICdjJzogMyB9IH1cbiAqL1xudmFyIGRlZmF1bHRzRGVlcCA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFyZ3MpIHtcbiAgYXJncy5wdXNoKHVuZGVmaW5lZCwgY3VzdG9tRGVmYXVsdHNNZXJnZSk7XG4gIHJldHVybiBhcHBseShtZXJnZVdpdGgsIHVuZGVmaW5lZCwgYXJncyk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5tZXJnZWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgY3VzdG9taXplcmAgd2hpY2hcbiAqIGlzIGludm9rZWQgdG8gcHJvZHVjZSB0aGUgbWVyZ2VkIHZhbHVlcyBvZiB0aGUgZGVzdGluYXRpb24gYW5kIHNvdXJjZVxuICogcHJvcGVydGllcy4gSWYgYGN1c3RvbWl6ZXJgIHJldHVybnMgYHVuZGVmaW5lZGAsIG1lcmdpbmcgaXMgaGFuZGxlZCBieSB0aGVcbiAqIG1ldGhvZCBpbnN0ZWFkLiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGludm9rZWQgd2l0aCBzaXggYXJndW1lbnRzOlxuICogKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBzb3VyY2VzIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSkge1xuICogICBpZiAoXy5pc0FycmF5KG9ialZhbHVlKSkge1xuICogICAgIHJldHVybiBvYmpWYWx1ZS5jb25jYXQoc3JjVmFsdWUpO1xuICogICB9XG4gKiB9XG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbMV0sICdiJzogWzJdIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogWzNdLCAnYic6IFs0XSB9O1xuICpcbiAqIF8ubWVyZ2VXaXRoKG9iamVjdCwgb3RoZXIsIGN1c3RvbWl6ZXIpO1xuICogLy8gPT4geyAnYSc6IFsxLCAzXSwgJ2InOiBbMiwgNF0gfVxuICovXG52YXIgbWVyZ2VXaXRoID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyKSB7XG4gIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHNEZWVwO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdGRvdXQ6IGZhbHNlLFxuXHRzdGRlcnI6IGZhbHNlXG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Mb2cnO1xuZXhwb3J0ICogZnJvbSAnLi9CdW5kbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9TaGVkJztcbmV4cG9ydCAqIGZyb20gJy4vQ29uZmlndXJhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL0xhYmVsJztcbmV4cG9ydCAqIGZyb20gJy4vU3R5bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vSHJUaW1lJztcbmV4cG9ydCAqIGZyb20gJy4vVXRpbGl0eSc7IiwiaW1wb3J0IHsgaXNDaHJvbWUsIGlzU2FmYXJpIH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IERlZmF1bHRzIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0czogRGVmYXVsdHMgPSB7XG4gIGxvZ19sZXZlbDogOCxcbiAgbG9nX2NhY2hlX3NpemU6IDMwMCxcbiAgdXNlX2Vtb2ppOiBmYWxzZSxcbiAgYmFzZV9zdHlsZTpcbiAgICAnZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogYm9sZDsgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDsgYm9yZGVyLXdpZHRoOiAxcHg7IGJvcmRlci1zdHlsZTogc29saWQ7JyxcbiAgY3VzdG9tX2xldmVsczoge30sXG4gIGxvZ19sZXZlbHM6IHtcbiAgICB2ZXJib3NlOiB7XG4gICAgICBsZXZlbDogOCxcbiAgICAgIHN0eWxlOlxuICAgICAgICAncGFkZGluZy1yaWdodDogMjZweDsgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgI2Q5ZGNlMDsgY29sb3I6ICM5OTk5OTk7IGJvcmRlci1jb2xvcjogI2NiYzljOTsnLFxuICAgICAgdGVybWluYWw6IFsnaXRhbGljJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdkZWJ1ZycsXG4gICAgICBlbW9qaTogJ/CfkqQnLFxuICAgIH0sXG4gICAgZGVidWc6IHtcbiAgICAgIGxldmVsOiA3LFxuICAgICAgc3R5bGU6XG4gICAgICAgICdwYWRkaW5nLXJpZ2h0OiAzOHB4OyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDlkY2UwOyBjb2xvcjogIzQ2NTQ2NDsgYm9yZGVyLWNvbG9yOiAjOTk5OTk5OycsXG4gICAgICB0ZXJtaW5hbDogWydiZ0JsYWNrJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdkZWJ1ZycsXG4gICAgICBlbW9qaTogJ/CfkJ4nLFxuICAgIH0sXG4gICAgbG9nOiB7XG4gICAgICBsZXZlbDogNixcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogNTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZDlkY2UwKTsgY29sb3I6ICMzMzM0MzU7IGJvcmRlci1jb2xvcjogI2JmYzFjNTtgLFxuICAgICAgdGVybWluYWw6IFsnYmdHcmF5JywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdsb2cnLFxuICAgICAgZW1vamk6ICfwn5OTJyxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIGxldmVsOiA1LFxuICAgICAgc3R5bGU6XG4gICAgICAgICdwYWRkaW5nLXJpZ2h0OiAyNnB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNjZWVkYzkpOyBjb2xvcjogIzRlNTk0ZDsgYm9yZGVyLWNvbG9yOiAjYjdkMWIzOycsXG4gICAgICB0ZXJtaW5hbDogWydiZ0dyZWVuJywgJ2dyYXknXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfwn46JJyxcbiAgICB9LFxuICAgIGZhaWw6IHtcbiAgICAgIGxldmVsOiA0LFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiAke1xuICAgICAgICBpc0Nocm9tZSA/ICc0MicgOiAnNDQnXG4gICAgICB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2ZmZDFkMSk7IGNvbG9yOiAjYTQwMDBmOyBib3JkZXItY29sb3I6ICNlM2JiYmI7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnUmVkJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdpbmZvJyxcbiAgICAgIGVtb2ppOiAn4p2MJyxcbiAgICB9LFxuICAgIGluZm86IHtcbiAgICAgIGxldmVsOiAzLFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiAke1xuICAgICAgICBpc1NhZmFyaSA/ICc0OScgOiAnNDQnXG4gICAgICB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2IyZDdmZik7IGNvbG9yOiAjNDY1NDY0OyBib3JkZXItY29sb3I6ICM5NmI1ZDc7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmx1ZScsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/Cfk6wnLFxuICAgIH0sXG4gICAgd2Fybjoge1xuICAgICAgbGV2ZWw6IDIsXG4gICAgICBzdHlsZTogYGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2ZmZjBhOCk7IGNvbG9yOiAjNzE1MTAwOyBib3JkZXItY29sb3I6ICNlM2Q2OTY7IHBhZGRpbmctcmlnaHQ6ICR7XG4gICAgICAgIGlzQ2hyb21lID8gJzM0JyA6ICc0NCdcbiAgICAgIH1weDsgYCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnWWVsbG93JywgJ2dyYXknXSxcbiAgICAgIG1ldGhvZDogJ3dhcm4nLFxuICAgICAgZW1vamk6ICfwn5SUJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBsZXZlbDogMSxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHtcbiAgICAgICAgaXNDaHJvbWUgPyAnMjknIDogJzI3J1xuICAgICAgfXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNmZmQxZDEpOyBjb2xvcjogI2E0MDAwZjsgYm9yZGVyLWNvbG9yOiAjZTNiYmJiO2AsXG4gICAgICB0ZXJtaW5hbDogWydiZ1JlZCcsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgZW1vamk6ICfwn5SlJyxcbiAgICB9LFxuICAgIGF0dGVudGlvbjoge1xuICAgICAgbGV2ZWw6IDAsXG4gICAgICBzdHlsZTpcbiAgICAgICAgJ3BhZGRpbmctcmlnaHQ6IDE1cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2UyYmFmZik7IGNvbG9yOiAjNDgzYzUxOyBib3JkZXItY29sb3I6ICNjMTlmZDk7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ3doaXRlJywgJ2JvbGQnLCAnYmdNYWdlbnRhJ10sXG4gICAgICBtZXRob2Q6ICdpbmZvJyxcbiAgICAgIGVtb2ppOiAn8J+MiCcsXG4gICAgfSxcbiAgfSxcbiAgZmlsdGVyczoge1xuICAgIGhpZGVBbGw6IGZhbHNlLFxuICAgIG5hbWVzcGFjZToge1xuICAgICAgaGlkZUFsbDogZmFsc2UsXG4gICAgICBleGNsdWRlOiBbXSxcbiAgICAgIGluY2x1ZGU6IFtdLFxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIGhpZGVBbGw6IGZhbHNlLFxuICAgICAgZXhjbHVkZTogW10sXG4gICAgICBpbmNsdWRlOiBbXSxcbiAgICB9LFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZGVmYXVsdHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGVkX2RlZmF1bHRzJztcbiIsImltcG9ydCB7IFNoZWRDb25maWcgfSBmcm9tICcuLi9fY29udHJhY3RzJztcblxuZXhwb3J0IGNvbnN0IHNoZWRfZGVmYXVsdHM6IFNoZWRDb25maWcgPSB7XG4gIGNhY2hlX2xvY2F0aW9uOiAnbWVtb3J5JyxcbiAgY2FjaGVfbGltaXQ6IDMwMCxcbiAgZ2xvYmFsX2NmZzogbnVsbCxcbiAgZmlsdGVyczoge30sXG59O1xuIiwiaW1wb3J0IGRlZmF1bHRzRGVlcCBmcm9tICdsb2Rhc2guZGVmYXVsdHNkZWVwJztcblxuaW1wb3J0IHsgTG9nLCBDb25maWd1cmF0aW9uLCBEZWZhdWx0cyB9IGZyb20gJy4vX2NvbnRyYWN0cyc7XG5pbXBvcnQge1xuICBsb2dNZXRob2QsXG4gIGN1c3RvbU1ldGhvZCxcbiAgc2VhbCxcbiAgdGhyZWFkLFxuICBjbG9zZSxcbiAgY2xlYXIsXG4gIGNscixcbn0gZnJvbSAnLi90ZXJtaW5hdG9ycyc7XG5pbXBvcnQge1xuICBjb3VudCxcbiAgY291bnRSZXNldCxcbiAgZGlyLFxuICBkaXJ4bWwsXG4gIGR1bXAsXG4gIHRhYmxlLFxuICBhc3NlcnQsXG4gIHRlc3QsXG4gIGdyb3VwLFxuICBncm91cENvbGxhcHNlZCxcbiAgZ3JvdXBFbmQsXG4gIGxhYmVsLFxuICBtZXRhLFxuICBuYW1lc3BhY2UsXG4gIHNpbGVudCxcbiAgbnMsXG4gIHRyYWNlLFxuICB0aW1lLFxuICB0aW1lTm93LFxuICB0aW1lRW5kLFxufSBmcm9tICcuL21vZGlmaWVycyc7XG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gJy4vcHJpbnRlcnMnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL19kZWZhdWx0cyc7XG5cbi8qXG4gKiBGdXR1cmUgcGxhbm5lZCBmZWF0dXJlczpcbiAqXG4gKiAtIFNlbGVjdCBsb2cgbGV2ZWxzIG9wdGlvbmFsbHkgYnkgbmFtZSBpbiBsaXN0ZW5lciBjcmVhdGlvbi5cbiAqIC0gQW5hbHl0aWNzIGFuZCBSZXBvcnRpbmcgc3VwcG9ydC5cbiAqIC0gUmVtb3RlIHNlcnZlciBmb3IgcmVjZWl2aW5nIGFuZCBhbmFseXppbmcgbG9ncy5cbiAqIC0gQWRkIGRlZmF1bHQgbWV0YSBkYXRhIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBsb2cuXG4gKiAtIEFkZCBlYXN5IGZ1bmN0aW9ucyBmb3IgdHJhbnNwb3J0aW5nIGxvZ2dpbmcgZGF0YSB0byB2YXJpb3VzIHNvdXJjZXMuXG4gKiAgICAgLSBXcml0ZSB0byBhIGZpbGUuXG4gKiAgICAgLSBXcml0ZSB0byBsb2NhbCBzdG9yYWdlLlxuICogICAgIC0gUHVzaCB0byBhbiBBUEkgZW5kcG9pbnQuXG4gKi9cblxuLyoqXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIEFkemUgbG9ncy4gVGhpcyBmYWN0b3J5IGZ1bmN0aW9uIGNhbiBiZSB1c2VkIGRpcmVjdGx5IG9yIGNvbmZpZ3VyYXRpb25cbiAqIGNhbiBiZSBwcm92aWRlZCBhbmQgdGhlIHJlc3VsdCBjYW4gYmUgYXNzaWduZWQgdG8gYSBuZXcgdmFyaWFibGUuIFRoaXMgYWxsb3dzIGZvciBtdWx0aXBsZVxuICogbG9nZ2luZyBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uZmlndXJhdGlvbnMuXG4gKlxuICogLS0tIERlZmF1bHQgbGV2ZWxzIC0tLVxuICpcbiAqIDAuIGF0dGVudGlvblxuICogMS4gZXJyb3JcbiAqIDIuIHdhcm5cbiAqIDMuIGluZm9cbiAqIDQuIGZhaWxcbiAqIDUuIHN1Y2Nlc3NcbiAqIDYuIGxvZ1xuICogNy4gZGVidWdcbiAqIDguIHZlcmJvc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkemUodXNlcl9jZmc6IENvbmZpZ3VyYXRpb24gPSB7fSk6IExvZyB7XG4gIGNvbnN0IGNmZyA9IGRlZmF1bHRzRGVlcCh1c2VyX2NmZywgZGVmYXVsdHMpIGFzIERlZmF1bHRzO1xuXG4gIHJldHVybiB7XG4gICAgY2ZnLFxuICAgIHRyYWNlYWJsZTogZmFsc2UsXG4gICAgZHVtcENvbnRleHQ6IGZhbHNlLFxuICAgIGlzU2lsZW50OiBmYWxzZSxcbiAgICBtb2RpZmllclF1ZXVlOiBbXSxcbiAgICBwcmludGVyOiBwcmludExvZyxcbiAgICBtZXRhRGF0YToge30sXG5cbiAgICBhdHRlbnRpb246IGxvZ01ldGhvZCgnYXR0ZW50aW9uJyksXG4gICAgZXJyb3I6IGxvZ01ldGhvZCgnZXJyb3InKSxcbiAgICB3YXJuOiBsb2dNZXRob2QoJ3dhcm4nKSxcbiAgICBpbmZvOiBsb2dNZXRob2QoJ2luZm8nKSxcbiAgICBmYWlsOiBsb2dNZXRob2QoJ2ZhaWwnKSxcbiAgICBzdWNjZXNzOiBsb2dNZXRob2QoJ3N1Y2Nlc3MnKSxcbiAgICBsb2c6IGxvZ01ldGhvZCgnbG9nJyksXG4gICAgZGVidWc6IGxvZ01ldGhvZCgnZGVidWcnKSxcbiAgICB2ZXJib3NlOiBsb2dNZXRob2QoJ3ZlcmJvc2UnKSxcbiAgICBjdXN0b206IGN1c3RvbU1ldGhvZCgpLFxuXG4gICAgc2VhbCxcbiAgICBjb3VudCxcbiAgICBjb3VudFJlc2V0LFxuICAgIHRocmVhZCxcbiAgICBkdW1wLFxuICAgIGNsb3NlLFxuICAgIGNsZWFyLFxuICAgIGNscixcbiAgICBkaXIsXG4gICAgZGlyeG1sLFxuICAgIHRhYmxlLFxuICAgIGFzc2VydCxcbiAgICB0ZXN0LFxuICAgIGdyb3VwLFxuICAgIGdyb3VwQ29sbGFwc2VkLFxuICAgIGdyb3VwRW5kLFxuICAgIGxhYmVsLFxuICAgIG1ldGEsXG4gICAgbmFtZXNwYWNlLFxuICAgIG5zLFxuICAgIHNpbGVudCxcbiAgICB0cmFjZSxcbiAgICB0aW1lLFxuICAgIHRpbWVOb3csXG4gICAgdGltZUVuZCxcblxuICAgIC8vIEEgc2hvcnRjdXQgYWNjZXNzb3IgZm9yIGdyYWJiaW5nIHRoZSB0aHJlYWQgY29udGV4dCBmcm9tIHRoZSBsYWJlbCBvYmplY3QuXG4gICAgZ2V0IGNvbnRleHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbFZhbD8uY29udGV4dDtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHsgQnVuZGxlLCBCdW5kbGVyLCBCdW5kbGVkTG9nLCBMb2cgfSBmcm9tICcuL19jb250cmFjdHMnO1xuXG4vKipcbiAqIEJ1bmRsZXMgYWxsIGxvZ3MgdG9nZXRoZXIgYnkgd3JhcHBpbmcgYWxsIHN1YnNlcXVlbnQgbG9ncyBpbiBhIEJ1bmRsZSBjYWxsYmFja1xuICogdGhhdCBjdXJyaWVzIHRoZW0gaW50byBhbiBhcnJheS4gVGhpcyBidW5kbGUgYXJyYXkgY2FuIGJlIHVzZWQgdG8gcmVjYWxsIGFuZFxuICogZmlsdGVyIGxvZ3MuXG4gKlxuICogKipFeGFtcGxlOioqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBidW5kbGVkID0gYnVuZGxlKGFkemUoKSk7XG4gKiBidW5kbGVkLmxvZyhcIlRoaXMgaXMgYSBsb2cuXCIpO1xuICogYnVuZGxlZC5sb2coXCJUaGlzIGlzIGFub3RoZXIgbG9nLlwiKTtcbiAqIGJ1bmRsZS5hbGwoKTsgLy8gLT4gcmVwcmludHMgYWxsIFwiYnVuZGxlZFwiIGxvZ3MuXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1bmRsZShsb2c6IExvZyk6IEJ1bmRsZXIge1xuICBjb25zdCBidW5kbGVfYXJyID0gW10gYXMgQnVuZGxlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGJ1bmRsZWRfbG9nOiBCdW5kbGVkTG9nID0ge1xuICAgICAgLi4ubG9nLFxuICAgICAgZ2V0IGJ1bmRsZSgpIHtcbiAgICAgICAgcmV0dXJuIGJ1bmRsZV9hcnI7XG4gICAgICB9LFxuICAgIH07XG4gICAgYnVuZGxlX2Fyci5wdXNoKGJ1bmRsZWRfbG9nKTtcbiAgICByZXR1cm4gYnVuZGxlZF9sb2c7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBMb2csIERlZmF1bHRzLCBMb2dMZXZlbERlZmluaXRpb24gfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgeyBnZXRTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGZhdGUgb2Ygd2hldGhlciB0aGlzIGxvZyB3aWxsIHRlcm1pbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG93ZWQoY2ZnOiBEZWZhdWx0cywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24pOiBib29sZWFuIHtcbiAgcmV0dXJuIGxldmVsQWN0aXZlKGRlZiwgY2ZnLmxvZ19sZXZlbCkgJiYgbm90VGVzdEVudigpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBsb2cgbGV2ZWwgaXMgaGlnaCBlbm91Z2ggZm9yIHRoZSBsb2cgdG8gdGVybWluYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGV2ZWxBY3RpdmUoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGxldmVsOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRlZi5sZXZlbCA8PSBsZXZlbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbnkgYXNzZXJ0aW9ucyBvciBleHByZXNzaW9ucyBwYXNzIGZvciB0aGlzIGxvZyB0byB0ZXJtaW5hdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmFsUGFzc2VzKGxvZzogTG9nKTogYm9vbGVhbiB7XG4gIGlmIChsb2cuYXNzZXJ0aW9uICE9PSB1bmRlZmluZWQgJiYgbG9nLmV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdZb3UgaGF2ZSBkZWNsYXJlZCBib3RoIGFuIGFzc2VydGlvbiBhbmQgdGVzdCBvbiB0aGUgc2FtZSBsb2cuIFBsZWFzZSBvbmx5IGRlY2xhcmUgb25lIG9yIG5lZmFyaW91cyByZXN1bHRzIG1heSBvY2N1ci4nXG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobG9nLmFzc2VydGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGxvZy5hc3NlcnRpb24gPT09IGZhbHNlO1xuICB9XG4gIGlmIChsb2cuZXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGxvZy5leHByZXNzaW9uID09PSB0cnVlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFZlcmlmeSB0aGF0IHRoaXMgbG9nIGlzIG5vdCBpbiBhIHRlc3QgZW52aXJvbm1lbnQgYnkgY2hlY2tpbmcgdGhlIGVudmlyb25tZW50IGNvbnRleHRcbiAqIG9yIFVSTCBwYXJhbXMgaWYgd2l0aGluIGEgYnJvd3NlciBjb250ZXh0LiBQcmV2ZW50IHRlcm1pbmF0aW9uIG9mIHRoZSBsb2cgaWYgaXQgaXMgJ3Rlc3QnLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90VGVzdEVudigpOiBib29sZWFuIHtcbiAgLy8gQWxsb3cgZm9yIFVSTCBQYXJhbSBvZiBBRFpFX0VOViB3aGVuIGluIHRoZSBicm93c2VyLlxuICByZXR1cm4gKGVudj8uQURaRV9FTlYgPz8gZ2V0U2VhcmNoUGFyYW1zKCk/LmdldCgnQURaRV9FTlYnKSA/PyAnJykgIT09ICd0ZXN0Jztcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9ucyc7XG4iLCJpbXBvcnQgeyBMb2csIExvZ1JlbmRlciwgRmluYWxMb2csIEJ1bmRsZSwgQ29sbGVjdGlvbiB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiBGaWx0ZXIgYSBjb2xsZWN0aW9uIG9mIGxvZ3MgYnkgdGhlIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlck5hbWVzcGFjZShcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvbiA9IFtdLFxuICBuczogc3RyaW5nIHwgc3RyaW5nW11cbik6IENvbGxlY3Rpb24ge1xuICByZXR1cm4gbG9vcENvbGxlY3Rpb24oY29sbGVjdGlvbiwgKGxvZykgPT4ge1xuICAgIGNvbnN0IGxvZ19ucyA9IGxvZy5uYW1lc3BhY2VWYWw7XG4gICAgaWYgKGxvZ19ucykge1xuICAgICAgaWYgKGlzU3RyaW5nKGxvZ19ucykpIHtcbiAgICAgICAgcmV0dXJuIGlzU3RyaW5nKG5zKSA/IGxvZ19ucyA9PT0gbnMgOiBucy5pbmNsdWRlcyhsb2dfbnMpID8/IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTG9vcCBvdmVyIGVhY2ggbG9nIG5zIHZhbHVlIGFuZCBzZWUgaWYgYW55IG1hdGNoIGFueSBucyB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIGxvZ19uc1xuICAgICAgICAgIC5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlzU3RyaW5nKG5zKSA/IHZhbCA9PT0gbnMgOiBucy5pbmNsdWRlcyh2YWwpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluY2x1ZGVzKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG4vKipcbiAqIEZpbHRlciBhbmQgcmVuZGVyIHRoZSBidW5kbGUgb2YgbG9ncyBieSB0aGUgbGFiZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJMYWJlbChcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvbiA9IFtdLFxuICBsYmw6IHN0cmluZ1xuKTogQ29sbGVjdGlvbiB7XG4gIHJldHVybiBsb29wQ29sbGVjdGlvbihjb2xsZWN0aW9uLCAobG9nKSA9PiBsb2cubGFiZWxWYWw/Lm5hbWUgPT09IGxibCk7XG59XG5cbi8qKlxuICogRmlsdGVyIHRoZSBidW5kbGUgb2YgbG9ncyBieSB0aGVpciBsb2cgbGV2ZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJMZXZlbFJhbmdlKFxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uID0gW10sXG4gIGxvdzogbnVtYmVyLFxuICBoaWdoOiBudW1iZXJcbik6IENvbGxlY3Rpb24ge1xuICByZXR1cm4gbG9vcENvbGxlY3Rpb24oY29sbGVjdGlvbiwgKGxvZykgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gbG9nLmxldmVsID8/IEluZmluaXR5O1xuICAgIHJldHVybiBsZXZlbCA+PSBsb3cgJiYgbGV2ZWwgPD0gaGlnaDtcbiAgfSk7XG59XG5cbi8qKlxuICogTG9vcHMgb3ZlciBhIGJ1bmRsZSBvZiBsb2dzIGFuZCBleGVjdXRlcyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggbG9nIHRoYXRcbiAqIGhhcyBhIHJlbmRlciB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb3BDb2xsZWN0aW9uKFxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uLFxuICBjYjogKGxvZzogTG9nIHwgRmluYWxMb2cpID0+IGJvb2xlYW5cbik6IENvbGxlY3Rpb24ge1xuICByZXR1cm4gY29sbGVjdGlvbi5yZWR1Y2UoKGFjYywgbG9nKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2IobG9nKTtcbiAgICByZXR1cm4gcmVzdWx0ID8gYWNjLmNvbmNhdChbbG9nXSkgOiBhY2M7XG4gIH0sIFtdIGFzIENvbGxlY3Rpb24pO1xufVxuXG4vKipcbiAqIElmIHRoZSBwcm92aWRlZCBsb2cgaGFzIGJlZW4gcHJldmlvdXNseSByZW5kZXJlZCwgdGhpcyBmdW5jdGlvblxuICogcmUtcmVuZGVycyBpdCB0byB0aGUgY29uc29sZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcmVuZGVyKGxvZzogRmluYWxMb2cpOiB2b2lkIHtcbiAgaWYgKGxvZy5yZW5kZXIpIHtcbiAgICByZW5kZXIobG9nLnJlbmRlcik7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW5kZXIgYSBsb2cgdG8gdGhlIGNvbnNvbGUgYmFzZWQgb24gYSByZW5kZXIgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKFttZXRob2QsIGFyZ3NdOiBMb2dSZW5kZXIpOiB2b2lkIHtcbiAgY29uc29sZVttZXRob2RdKC4uLmFyZ3MpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9maWx0ZXJzJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2UgKi9cbmltcG9ydCB7IFNoZWQgfSBmcm9tICcuL3NoZWQnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgICRzaGVkPzogU2hlZDtcbiAgICBBRFpFX0VOVj86ICd0ZXN0JyB8ICdkZXYnO1xuICB9XG4gIG5hbWVzcGFjZSBOb2RlSlMge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsIHtcbiAgICAgICRzaGVkPzogU2hlZDtcbiAgICAgIEFEWkVfRU5WPzogJ3Rlc3QnIHwgJ2Rldic7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbnY6IFdpbmRvdyB8IE5vZGVKUy5HbG9iYWwgPSBnbG9iYWwgPyBnbG9iYWwgOiB3aW5kb3c7XG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qKlxuICogVHlwZUd1YXJkIHRvIGRldGVybWluZSBpZiB0aGUgZW52IHZhbHVlIGlzIHRoZSBXaW5kb3cgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZW52SXNXaW5kb3cgPSAoZW52OiBXaW5kb3cgfCBOb2RlSlMuR2xvYmFsKTogZW52IGlzIFdpbmRvdyA9PiB7XG4gIHJldHVybiBpc0Jyb3dzZXI7XG59O1xuXG5sZXQgaXNDaHJvbWVWYXIgPSBmYWxzZTtcbmxldCBpc0ZpcmVmb3hWYXIgPSBmYWxzZTtcbmxldCBpc1NhZmFyaVZhciA9IGZhbHNlO1xuXG5pZiAoZW52SXNXaW5kb3coZW52KSkge1xuICBpc0Nocm9tZVZhciA9IGVudi5uYXZpZ2F0b3I/LnVzZXJBZ2VudD8uaW5kZXhPZignQ2hyb21lJykgPiAtMTtcbiAgaXNGaXJlZm94VmFyID0gZW52Lm5hdmlnYXRvcj8udXNlckFnZW50Py5pbmRleE9mKCdGaXJlZm94JykgPiAtMTtcbiAgaXNTYWZhcmlWYXIgPVxuICAgIGVudi5uYXZpZ2F0b3I/LnVzZXJBZ2VudD8uaW5kZXhPZignU2FmYXJpJykgPiAtMSAmJiAhaXNDaHJvbWVWYXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc0Nocm9tZSA9IGlzQ2hyb21lVmFyO1xuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IGlzRmlyZWZveFZhcjtcbmV4cG9ydCBjb25zdCBpc1NhZmFyaSA9IGlzU2FmYXJpVmFyO1xuIiwiaW1wb3J0IHsgTG9nLCBMb2dGdW5jdGlvbiB9IGZyb20gJy4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBhZHplIH0gZnJvbSAnLi9hZHplJztcbmltcG9ydCB7IGJ1bmRsZSB9IGZyb20gJy4vYnVuZGxlJztcbmltcG9ydCB7IHNoZWRFeGlzdHMsIGNyZWF0ZVNoZWQsIHJlbW92ZVNoZWQgfSBmcm9tICcuL3NoZWQnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL19kZWZhdWx0cyc7XG5pbXBvcnQgeyBmaXJlTGlzdGVuZXJzIH0gZnJvbSAnLi90ZXJtaW5hdG9ycyc7XG5pbXBvcnQge1xuICBmaWx0ZXJMYWJlbCxcbiAgZmlsdGVyTGV2ZWxSYW5nZSxcbiAgZmlsdGVyTmFtZXNwYWNlLFxuICBsb29wQ29sbGVjdGlvbixcbiAgcmVuZGVyLFxuICByZXJlbmRlcixcbn0gZnJvbSAnLi9maWx0ZXJzJztcblxuZXhwb3J0IHtcbiAgYWR6ZSxcbiAgc2hlZEV4aXN0cyxcbiAgY3JlYXRlU2hlZCxcbiAgcmVtb3ZlU2hlZCxcbiAgZGVmYXVsdHMsXG4gIExvZyxcbiAgTG9nRnVuY3Rpb24sXG4gIGJ1bmRsZSxcbiAgZmlsdGVyTGFiZWwsXG4gIGZpbHRlckxldmVsUmFuZ2UsXG4gIGZpbHRlck5hbWVzcGFjZSxcbiAgbG9vcENvbGxlY3Rpb24sXG4gIHJlbmRlcixcbiAgcmVyZW5kZXIsXG4gIGZpcmVMaXN0ZW5lcnMsXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9sYWJlbCc7XG4iLCJpbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IHNoZWRFeGlzdHMgfSBmcm9tICcuLi9zaGVkJztcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBnZXQgYSBsYWJlbCBieSB0aGUgZ2l2ZW4gbmFtZSBmcm9tIHRoZSBzaGVkIGlmIGl0IGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVsKG5hbWU6IHN0cmluZyk6IExhYmVsIHwgdW5kZWZpbmVkIHtcbiAgY29uc3Qgc2hlZCA9IGVudi4kc2hlZDtcbiAgaWYgKHNoZWRFeGlzdHMoc2hlZCkpIHtcbiAgICByZXR1cm4gc2hlZC5nZXRMYWJlbChuYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGFkZCBhIGxhYmVsIHRvIHRoZSBnbG9iYWwgc3RvcmUgaWYgaXQgZXhpc3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGFiZWwobGFiZWw6IExhYmVsKTogTGFiZWwge1xuICBjb25zdCBzaGVkID0gZW52LiRzaGVkO1xuICBpZiAoc2hlZEV4aXN0cyhzaGVkKSkge1xuICAgIHNoZWQuYWRkTGFiZWwobGFiZWwpO1xuICB9XG4gIHJldHVybiBsYWJlbDtcbn1cbiIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuLyoqXG4gKiBJbnN0cnVjdHMgdGhlIGxvZyB0ZXJtaW5hdG9yIHRvIGFkZCB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlXG4gKiB0aHJlYWQgY29udGV4dCB0byB0aGUgY29uc29sZSBvdXRwdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkdW1wKHRoaXM6IExvZyk6IExvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5kdW1wQ29udGV4dCA9IHRydWU7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YTxUPih0aGlzOiBMb2csIGtleTogc3RyaW5nLCB2YWw6IFQpOiBMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMubWV0YURhdGFba2V5XSA9IHZhbDtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8qKlxuICogQWRkcyB0byB0aGUgbG9nIGNvdW50IGZvciBsb2cgaW5zdGFuY2VzIHRoYXQgc2hhcmUgdGhpcyBsb2cncyBsYWJlbC5cbiAqXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2NvdW50KVxuICovXG5leHBvcnQgZnVuY3Rpb24gY291bnQodGhpczogTG9nKTogTG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC5jb3VudCA9IHRoaXMubGFiZWxWYWwuY291bnQgPz8gMDtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgKz0gMTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgY291bnQgZm9yIHRoZSBsb2cgaW5zdGFuY2VzIHRoYXQgc2hhcmUgdGhpcyBsb2cncyBsYWJlbC5cbiAqXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2NvdW50UmVzZXQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFJlc2V0KHRoaXM6IExvZyk6IExvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgPSAwO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVW5zZXRzIHRoZSBjb3VudCBmb3IgdGhlIGxvZyBpbnN0YW5jZXMgdGhhdCBzaGFyZSB0aGlzIGxvZydzIGxhYmVsLlxuICpcbiAqIFRoaXMgaXMgYSBub24tc3RhbmRhcmQgbWV0aG9kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY291bnRDbGVhcih0aGlzOiBMb2cpOiBMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IHByaW50RGlyLCBwcmludERpcnhtbCwgcHJpbnRUYWJsZSB9IGZyb20gJy4uL3ByaW50ZXJzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8qKlxuICogSW5zdHJ1Y3RzIHRoaXMgbG9nIHRvIHByaW50IGluIHRoZSBkaXIgZm9ybWF0LiBUeXBpY2FsbHkgdGhpcyBpcyB1c2VmdWxcbiAqIGZvciByZW5kZXJpbmcgZGVlcGx5IG5lc3RlZCBvYmplY3RzIGluIHRoZSBjb25zb2xlLlxuICpcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZGlyKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlyKHRoaXM6IExvZyk6IExvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnREaXI7XG4gIH0pO1xufVxuXG4vKipcbiAqIEluc3RydWN0cyB0aGlzIGxvZyB0byBwcmludCBpbiB0aGUgZGlyeG1sIGZvcm1hdC4gVHlwaWNhbGx5IHRoaXMgaXMgdXNlZnVsXG4gKiBmb3IgcmVuZGVyaW5nIEhUTUwvRE9NIG9yIFhNTCBFbGVtZW50cyBpbiB0aGUgY29uc29sZS5cbiAqXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2RpcnhtbClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpcnhtbCh0aGlzOiBMb2cpOiBMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50RGlyeG1sO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnN0cnVjdHMgdGhpcyBsb2cgdG8gcHJpbnQgaXRzIGFyZ3VtZW50IGluIGEgdGFibGUgZm9ybWF0LlxuICpcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvdGFibGUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWJsZSh0aGlzOiBMb2cpOiBMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50VGFibGU7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRoaXMgbW9kaWZpZXIgbWV0aG9kIGFsbG93cyB0aGUgbG9nIHRvIGV4ZWN1dGUgbm9ybWFsbHkgYnV0XG4gKiBwcmV2ZW50IGl0IGZyb20gcHJpbnRpbmcgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWxlbnQodGhpczogTG9nKTogTG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmlzU2lsZW50ID0gdHJ1ZTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IHByaW50R3JvdXAsIHByaW50R3JvdXBDb2xsYXBzZWQsIHByaW50R3JvdXBFbmQgfSBmcm9tICcuLi9wcmludGVycyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIFN0YXJ0cyBhIGxvZyBncm91cC5cbiAqXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2dyb3VwKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXAodGhpczogTG9nKTogTG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTdGFydHMgYSBsb2cgZ3JvdXAgdGhhdCBpcyBjb2xsYXBzZWQgYnkgZGVmYXVsdC5cbiAqXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2dyb3VwQ29sbGFwc2VkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBDb2xsYXBzZWQodGhpczogTG9nKTogTG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwQ29sbGFwc2VkO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFbmRzIHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBsb2cgZ3JvdXAuXG4gKlxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS9ncm91cEVuZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwRW5kKHRoaXM6IExvZyk6IExvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRHcm91cEVuZDtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGdldExhYmVsLCBhZGRMYWJlbCB9IGZyb20gJy4uL2xhYmVsJztcbmltcG9ydCB7IHByaW50VHJhY2UgfSBmcm9tICcuLi9wcmludGVycyc7XG5pbXBvcnQgeyBwcmVwZW5kTW9kaWZpZXIsIG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8qKlxuICogQWRkcyBhIGxhYmVsIHRvIHRoZSBsb2cuIExhYmVsJ3MgY2FuIGJlIHVzZWQgZm9yIGxvZyBpZGVudGlmaWNhdGlvblxuICogYW5kIGdyb3VwaW5nLiBMYWJlbCdzIGFsc28gbGluayBsb2cgaW5zdGFuY2VzIHRvZ2V0aGVyLlxuICpcbiAqIFRoaXMgaXMgYSBub24tc3RhbmRhcmQgQVBJLCBidXQgaXQgcmVwbGFjZXMgdGhlIG5lZWQgdG8gcHJvdmlkZVxuICogYSBsYWJlbCB0byBgY291bnQoKWAgb3IgYHRpbWUoKWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbCh0aGlzOiBMb2csIG5hbWU6IHN0cmluZyk6IExvZyB7XG4gIHJldHVybiBwcmVwZW5kTW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMubGFiZWxWYWwgPSBhZGRMYWJlbChnZXRMYWJlbChuYW1lKSA/PyB7IG5hbWUsIGNvbnRleHQ6IHt9IH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBZGRzIGEgbmFtZXNwYWNlIHRvIHRoZSBsb2cuIE5hbWVzcGFjZSdzIGFyZSBwcmltYXJpbHkgdXNlZnVsXG4gKiBmb3IgZ3JvdXBpbmcgbG9ncyB0b2dldGhlci5cbiAqXG4gKiBUaGlzIGlzIGEgbm9uLXN0YW5kYXJkIEFQSS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZSh0aGlzOiBMb2csIG5zOiBzdHJpbmcgfCBzdHJpbmdbXSk6IExvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5uYW1lc3BhY2VWYWwgPSBucztcbiAgfSk7XG59XG5cbi8qKlxuICogQW4gYWxpYXMgZm9yIGBuYW1lc3BhY2UoKWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBucyh0aGlzOiBMb2csIG5zOiBzdHJpbmcgfCBzdHJpbmdbXSk6IExvZyB7XG4gIHJldHVybiB0aGlzLm5hbWVzcGFjZShucyk7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgc3RhY2t0cmFjZSBhbG9uZyB3aXRoIHRoZSBsb2cuXG4gKlxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS90cmFjZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNlKHRoaXM6IExvZyk6IExvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRUcmFjZTtcbiAgfSk7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3RpbWluZyc7XG5leHBvcnQgKiBmcm9tICcuL2NvdW50aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybWF0dGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2dyb3VwaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpZnlpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RpZmllcic7XG5leHBvcnQgKiBmcm9tICcuL3Rlc3RpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250ZXh0cyc7XG4iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcblxuLyoqXG4gKiBRdWV1ZXMgYSBtb2RpZmllciBtZXRob2QgZm9yIGV4ZWN1dGlvbiB3aGVuIHRoZSBsb2cgaXMgdGVybWluYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmaWVyKGxvZzogTG9nLCBmdW5jOiAoKSA9PiB2b2lkKTogTG9nIHtcbiAgbG9nLm1vZGlmaWVyUXVldWUgPSBsb2cubW9kaWZpZXJRdWV1ZS5jb25jYXQoW2Z1bmNdKTtcbiAgcmV0dXJuIGxvZztcbn1cblxuLyoqXG4gKiBRdWV1ZXMgYSBtb2RpZmllciBtZXRob2QgZm9yIGV4ZWN1dGlvbiBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBxdWV1ZSB3aGVuIHRoZSBsb2cgaXMgdGVybWluYXRlZC5cbiAqIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBsYWJlbHMgYXJlIGFwcGxpZWQgYmVmb3JlIG1vZGlmaWVycyB0aGF0IHVzZSBsYWJlbHMgYXJlIGV4ZWN1dGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZE1vZGlmaWVyKGxvZzogTG9nLCBmdW5jOiAoKSA9PiB2b2lkKTogTG9nIHtcbiAgbG9nLm1vZGlmaWVyUXVldWUgPSBbZnVuY10uY29uY2F0KGxvZy5tb2RpZmllclF1ZXVlKTtcbiAgcmV0dXJuIGxvZztcbn1cbiIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuLyoqXG4gKiBQcmludHMgYSBsb2cgd2FybmluZyB0aGF0IHRoZSBhc3NlcnRpb24gZmFpbGVkIGlmIHRoZSBhc3NlcnRpb24gaXMgZmFsc2UuXG4gKlxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvY29uc29sZS9hc3NlcnQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQodGhpczogTG9nLCBhc3NlcnRpb246IGJvb2xlYW4pOiBMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMuYXNzZXJ0aW9uID0gYXNzZXJ0aW9uO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBbGxvd3MgdGhlIGxvZyB0byBwcmludCBpZiB0aGUgZXhwcmVzc2lvbiBpcyB0cnVlLlxuICpcbiAqIFRoaXMgaXMgYSBub24tc3RhbmRhcmQgbWV0aG9kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVzdCh0aGlzOiBMb2csIGV4cHJlc3Npb246IGJvb2xlYW4pOiBMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH0pO1xufVxuIiwiaW1wb3J0IGhydGltZSBmcm9tICdicm93c2VyLXByb2Nlc3MtaHJ0aW1lJztcblxuaW1wb3J0IHsgTG9nLCBIclRpbWUgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8qKlxuICogU3RhcnRzIGEgdGltZXIgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbG9nJ3MgKmxhYmVsKi4gVGhpcyB3aWxsIGRvIG5vdGhpbmcgaWZcbiAqIHRoaXMgbG9nIGhhcyBubyBsYWJlbC5cbiAqXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL3RpbWUpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZSh0aGlzOiBMb2cpOiBMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLnRpbWVTdGFydCA9IGhydGltZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIGxvZyByZW5kZXIgdG8gc2hvdyB0aGUgY3VycmVudCBoaWdoLXJlc29sdXRpb24gcmVhbCB0aW1lLlxuICpcbiAqIFRoaXMgaXMgYSBub24tc3RhbmRhcmQgbWV0aG9kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZU5vdyh0aGlzOiBMb2cpOiBMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVfbm93ID0gZm9ybWF0VGltZShocnRpbWUoKSk7XG4gICAgdGhpcy5sYWJlbFZhbFxuICAgICAgPyAodGhpcy5sYWJlbFZhbC50aW1lTm93ID0gdGltZV9ub3cpXG4gICAgICA6ICh0aGlzLnRpbWVOb3dWYWwgPSB0aW1lX25vdyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFN0b3BzIGEgdGltZXIgdGhhdCB3YXMgcHJldmlvdXNseSBzdGFydGVkIGJ5IGNhbGxpbmcgdGltZSgpIG9uIGEgKmxhYmVsZWQqIGxvZy4gQ2FsY3VsYXRlcyB0aGVcbiAqIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgc3RhcnQgdGltZSBhbmQgd2hlbiB0aGlzIG1ldGhvZCB3YXMgY2FsbGVkLiBUaGlzIHRoZW5cbiAqIG1vZGlmaWVzIHRoZSBsb2cgcmVuZGVyIHRvIHNob3cgdGhlIHRpbWUgZGlmZmVyZW5jZS4gVGhpcyB3aWxsIGRvIG5vdGhpbmcgaWYgdGhlICpsYWJlbCogZG9lc1xuICogbm90IGV4aXN0LlxuICpcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvdGltZUVuZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lRW5kKHRoaXM6IExvZyk6IExvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwudGltZUVsbGFwc2VkID0gZm9ybWF0VGltZShocnRpbWUodGhpcy5sYWJlbFZhbC50aW1lU3RhcnQpKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKlxuICAhIGNvbnNvbGUudGltZUxvZygpIGlzIHB1cnBvc2VmdWxseSBvbWl0dGVkIGZyb20gdGhpcyBBUEkuXG5cbiAgdGltZUxvZygpIGlzIGEgdXNlbGVzcyBtZXRob2Qgd2l0aGluIHRoZSBBZHplIEFQSS4gVGhlIHNhbWUgZWZmZWN0IGNhbiBiZSBcbiAgYWNjb21wbGlzaGVkIGJ5IGNyZWF0ZWQgYSBuZXcgbG9nIHdpdGggdGhlIHNhbWUgbGFiZWwuXG4qL1xuXG4vKipcbiAqIFRha2VzIGFuIEhyVGltZSB0dXBsZSBhbmQgY29udmVydHMgaXQgaW50byBhIGh1bWFuLXJlYWRhYmxlIGZvcm1hdHRlZFxuICogc3RyaW5nIGluIHRoZSBmb3JtYXQgb2YgYHtzZWN9cyB7bXN9bXNgLlxuICovXG5mdW5jdGlvbiBmb3JtYXRUaW1lKFtzZWMsIG5hbm9dOiBIclRpbWUpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7c2VjfXMgJHtuYW5vIC8gMTAwMDAwMH1tc2A7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3ByaW50ZXJzJztcbiIsImltcG9ydCB7IExvZywgTG9nTGV2ZWxEZWZpbml0aW9uLCBMb2dSZW5kZXIgfSBmcm9tICcuLi8uLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGFwcGx5UmVuZGVyLCB0b0NvbnNvbGUsIGZOYW1lc3BhY2UgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcbmltcG9ydCB7IGluaXRpYWxDYXBzIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG4vKipcbiAqIFRoZSBwcmltYXJ5IG1ldGhvZCBmb3IgcHJpbnRpbmcgbG9ncyB0byB0aGUgYnJvd3NlciBjb25zb2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2coXG4gIGxvZzogTG9nLFxuICBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbixcbiAgdXNlX2Vtb2ppOiBib29sZWFuLFxuICBhcmdzOiBhbnlbXVxuKTogTG9nUmVuZGVyIHtcbiAgY29uc3QgW21ldGhvZCwgbGVhZGVyLCBzdHlsZSwgbWV0YV0gPSBbXG4gICAgZGVmLm1ldGhvZCxcbiAgICBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSxcbiAgICBsb2cuY2ZnLmJhc2Vfc3R5bGUgKyBkZWYuc3R5bGUsXG4gICAgZk1ldGEobG9nLCB1c2VfZW1vamkpLFxuICBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9XG4gICAgbWV0YSA9PT0gJycgPyBbbGVhZGVyLCBzdHlsZSwgLi4uYXJnc10gOiBbbGVhZGVyLCBzdHlsZSwgbWV0YSwgLi4uYXJnc107XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCBtZXRob2QsIHJlbmRlcl9hcmdzKSwgbG9nLmlzU2lsZW50KTtcbn1cblxuLyoqXG4gKiBUaGUgbWV0aG9kIGZvciBwcmludGluZyBncm91cCBsb2dzIHRvIHRoZSBicm93c2VyIGNvbnNvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwKFxuICBsb2c6IExvZyxcbiAgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sXG4gIHVzZV9lbW9qaTogYm9vbGVhbixcbiAgYXJnczogYW55W11cbik6IExvZ1JlbmRlciB7XG4gIGNvbnN0IHBhcnRpYWxfYXJncyA9IFtcbiAgICBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSxcbiAgICBsb2cuY2ZnLmJhc2Vfc3R5bGUgKyBkZWYuc3R5bGUsXG4gIF07XG4gIGNvbnN0IHJlbmRlcl9hcmdzID1cbiAgICB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgPyBbLi4ucGFydGlhbF9hcmdzLCBhcmdzWzBdXSA6IHBhcnRpYWxfYXJncztcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csICdncm91cCcsIHJlbmRlcl9hcmdzKSwgbG9nLmlzU2lsZW50KTtcbn1cblxuLyoqXG4gKiBUaGUgbWV0aG9kIGZvciBwcmludGluZyBjb2xsYXBzZWQgZ3JvdXAgbG9ncyB0byB0aGUgYnJvd3NlciBjb25zb2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRHcm91cENvbGxhcHNlZChcbiAgbG9nOiBMb2csXG4gIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLFxuICB1c2VfZW1vamk6IGJvb2xlYW4sXG4gIGFyZ3M6IGFueVtdXG4pOiBMb2dSZW5kZXIge1xuICBjb25zdCBwYXJ0aWFsX2FyZ3MgPSBbXG4gICAgZkxlYWRlcihkZWYsIHVzZV9lbW9qaSwgYXJncyksXG4gICAgbG9nLmNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlLFxuICBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9XG4gICAgdHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnID8gWy4uLnBhcnRpYWxfYXJncywgYXJnc1swXV0gOiBwYXJ0aWFsX2FyZ3M7XG4gIHJldHVybiB0b0NvbnNvbGUoXG4gICAgYXBwbHlSZW5kZXIobG9nLCAnZ3JvdXBDb2xsYXBzZWQnLCByZW5kZXJfYXJncyksXG4gICAgbG9nLmlzU2lsZW50XG4gICk7XG59XG5cbi8vIC0tLS0tLS0gUFJJTlQgRk9STUFUVEVSUyAtLS0tLS0tLSAvL1xuXG4vKipcbiAqIEZvcm1hdHMgdGhlIGxlYWRlciBvZiB0aGUgbG9nIHN0cmluZy4gVGhpcyBjb250YWlucyB0aGUgZW1vamkgaWYgZW5hYmxlZCxcbiAqIHRoZSBsb2cgbGV2ZWwgbmFtZSwgYW5kIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIGJlaW5nIHByaW50ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmTGVhZGVyKFxuICBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbixcbiAgdXNlX2Vtb2ppOiBib29sZWFuLFxuICBhcmdzOiBhbnlbXVxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAgJWMke2ZFbW9qaShkZWYsIHVzZV9lbW9qaSl9ICR7Zk5hbWUoZGVmLmxldmVsTmFtZSl9KCR7YXJncy5sZW5ndGh9KWA7XG59XG5cbi8qKlxuICogQWRkcyB0aGUgZW1vamkgdG8gdGhlIGxvZyBsZWFkZXIgaWYgZW5hYmxlZC5cbiAqL1xuZnVuY3Rpb24gZkVtb2ppKGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4pOiBzdHJpbmcge1xuICByZXR1cm4gZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSB8fCB1c2VfZW1vamkgPyBgICR7ZGVmLmVtb2ppfWAgOiAnJztcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBsb2cgbGV2ZWwgbmFtZSB0byB0aGUgbGVhZGVyIGluIGluaXRpYWwgY2Fwcy5cbiAqL1xuZnVuY3Rpb24gZk5hbWUobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgcmV0dXJuIGluaXRpYWxDYXBzKG5hbWUgPz8gJycpO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIG1ldGEgc2VjdGlvbiBvZiB0aGUgbG9nIHN0cmluZyB3aGljaCBpbmNsdWRlcyB0aGVcbiAqIGxvZyBuYW1lc3BhY2UsIHRoZSBsYWJlbCwgdGhlIHRpbWVzdGFtcCBmcm9tIHRoZSB0aW1lciwgdGhlIGNvdW50XG4gKiBmcm9tIHRoZSBjb3VudGVyLCBvciB0aGUgdGVzdCByZXN1bHQgZnJvbSBhbnkgYXNzZXJ0aW9ucyBpZiBhbnkgb2ZcbiAqIHRoZXNlIG1vZGlmaWVycyB3ZXJlIGFwcGxpZWQgdG8gdGhpcyBsb2cuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmTWV0YShsb2c6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2ZOYW1lc3BhY2UobG9nKX0ke2ZMYWJlbChsb2cpfSR7ZlRpbWUobG9nLCB1c2VfZW1vamkpfSR7ZkNvdW50KFxuICAgIGxvZ1xuICApfSR7ZlRlc3QobG9nLCB1c2VfZW1vamkpfWA7XG59XG5cbi8qKlxuICogRm9ybWF0cyB0aGUgdGltZSBvbiB0aGUgbG9nIHN0cmluZyBiYXNlZCBvbiBhbnkgdGltZSBtb2RpZmllcnNcbiAqIHRoYXQgaGF2ZSBiZWVuIGFwcGxpZWQgdG8gdGhpcyBsb2cuXG4gKi9cbmZ1bmN0aW9uIGZUaW1lKGxvZzogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCBsYWJlbF90eHQgPSBgJHtcbiAgICBsb2cubGFiZWxWYWw/LnRpbWVOb3cgPz8gbG9nLmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJydcbiAgfWA7XG4gIHJldHVybiBsYWJlbF90eHQgIT09ICcnXG4gICAgPyBgICgke1xuICAgICAgICBlbnYuJHNoZWQ/Lm92ZXJyaWRlcz8udXNlX2Vtb2ppIHx8IHVzZV9lbW9qaSA/ICfij7EnIDogJydcbiAgICAgIH0ke2xhYmVsX3R4dH0pIGBcbiAgICA6ICcnO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIGNvdW50IG9uIHRoZSBsb2cgc3RyaW5nIGJhc2VkIG9uIGFueSBjb3VudGVyIG1vZGlmaWVyc1xuICogdGhhdCBoYXZlIGJlZW4gYXBwbGllZCB0byB0aGlzIGxvZy5cbiAqL1xuZnVuY3Rpb24gZkNvdW50KGxvZzogTG9nKTogc3RyaW5nIHtcbiAgY29uc3QgY291bnQgPSBsb2cubGFiZWxWYWw/LmNvdW50O1xuICByZXR1cm4gY291bnQgIT09IHVuZGVmaW5lZCA/IGAoQ291bnQ6ICR7Y291bnR9KWAgOiAnJztcbn1cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBsYWJlbCBvbiB0aGUgbG9nIHN0cmluZyBiYXNlZCBvbiB0aGUgbGFiZWxcbiAqIG1vZGlmaWVyIGFwcGxpZWQgdG8gdGhpcyBsb2cuXG4gKi9cbmZ1bmN0aW9uIGZMYWJlbChsb2c6IExvZyk6IHN0cmluZyB7XG4gIHJldHVybiBsb2cubGFiZWxWYWwgPyBgWyR7bG9nLmxhYmVsVmFsLm5hbWV9XSBgIDogJyc7XG59XG5cbi8qKlxuICogRm9ybWF0cyB0aGUgYXNzZXJ0aW9uIG9yIHRlc3Qgb24gdGhlIGxvZyBzdHJpbmcgYmFzZWQgb25cbiAqIGFueSB0ZXN0aW5nIG1vZGlmaWVycyBhcHBsaWVkIHRvIHRoaXMgbG9nLlxuICovXG5mdW5jdGlvbiBmVGVzdChsb2c6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxvZy5hc3NlcnRpb24gPT09IGZhbHNlXG4gICAgPyBgJHt1c2VfZW1vamkgPyAn4p2MICcgOiAnJ31Bc3NlcnRpb24gZmFpbGVkOmBcbiAgICA6ICcnO1xufVxuIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7XG4gIHByaW50TG9nIGFzIHByaW50TG9nQnJvd3NlcixcbiAgcHJpbnRHcm91cCBhcyBwcmludEdyb3VwQnJvd3NlcixcbiAgcHJpbnRHcm91cENvbGxhcHNlZCBhcyBwcmludEdyb3VwQ29sbGFwc2VkQnJvd3Nlcixcbn0gZnJvbSAnLi9icm93c2VyJztcbmltcG9ydCB7XG4gIHByaW50TG9nIGFzIHByaW50TG9nTm9kZSxcbiAgcHJpbnRHcm91cCBhcyBwcmludEdyb3VwTm9kZSxcbiAgcHJpbnRHcm91cENvbGxhcHNlZCBhcyBwcmludEdyb3VwQ29sbGFwc2VkTm9kZSxcbn0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7XG4gIHByaW50LFxuICBwcmludEdyb3VwRW5kLFxuICBwcmludFRhYmxlLFxuICBwcmludERpcixcbiAgcHJpbnREaXJ4bWwsXG4gIHByaW50VHJhY2UsXG59IGZyb20gJy4vc2hhcmVkJztcblxuY29uc3QgcHJpbnRMb2cgPSBpc0Jyb3dzZXIgPyBwcmludExvZ0Jyb3dzZXIgOiBwcmludExvZ05vZGU7XG5jb25zdCBwcmludEdyb3VwID0gaXNCcm93c2VyID8gcHJpbnRHcm91cEJyb3dzZXIgOiBwcmludEdyb3VwTm9kZTtcbmNvbnN0IHByaW50R3JvdXBDb2xsYXBzZWQgPSBpc0Jyb3dzZXJcbiAgPyBwcmludEdyb3VwQ29sbGFwc2VkQnJvd3NlclxuICA6IHByaW50R3JvdXBDb2xsYXBzZWROb2RlO1xuXG5leHBvcnQge1xuICBwcmludCxcbiAgcHJpbnRMb2csXG4gIHByaW50R3JvdXAsXG4gIHByaW50R3JvdXBDb2xsYXBzZWQsXG4gIHByaW50R3JvdXBFbmQsXG4gIHByaW50VGFibGUsXG4gIHByaW50RGlyLFxuICBwcmludERpcnhtbCxcbiAgcHJpbnRUcmFjZSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3ByaW50ZXJzJztcbiIsImltcG9ydCAqIGFzIGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IExvZywgTG9nTGV2ZWxEZWZpbml0aW9uLCBMb2dSZW5kZXIgfSBmcm9tICcuLi8uLi9fY29udHJhY3RzJztcbmltcG9ydCB7IHRvQ29uc29sZSwgYXBwbHlSZW5kZXIsIGZOYW1lc3BhY2UgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcbmltcG9ydCB7IGluaXRpYWxDYXBzLCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG4vLyAtLS0tLS0tIFBSSU5UIE1FVEhPRFMgLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBUaGUgcHJpbWFyeSBtZXRob2QgZm9yIHByaW50aW5nIGxvZ3MgdG8gdGhlIG5vZGUgY29uc29sZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50TG9nKFxuICBsb2c6IExvZyxcbiAgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sXG4gIHVzZV9lbW9qaTogYm9vbGVhbixcbiAgYXJnczogYW55W11cbik6IExvZ1JlbmRlciB7XG4gIGNvbnN0IFttZXRob2QsIGxlYWRlciwgc3R5bGUsIG1ldGFdID0gW1xuICAgIGRlZi5tZXRob2QsXG4gICAgZkxlYWRlcihkZWYsIHVzZV9lbW9qaSwgYXJncyksXG4gICAgZGVmLnRlcm1pbmFsLFxuICAgIGZNZXRhKGxvZywgdXNlX2Vtb2ppKSxcbiAgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPVxuICAgIG1ldGEgPT09ICcnID8gW2xlYWRlciwgLi4uYXJnc10gOiBbbGVhZGVyLCBzdHlsZSwgbWV0YSwgLi4uYXJnc107XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCBtZXRob2QsIHJlbmRlcl9hcmdzKSwgbG9nLmlzU2lsZW50KTtcbn1cblxuLyoqXG4gKiBUaGUgbWV0aG9kIGZvciBwcmludGluZyBncm91cCBsb2dzIHRvIHRoZSBub2RlIGNvbnNvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwKFxuICBsb2c6IExvZyxcbiAgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sXG4gIHVzZV9lbW9qaTogYm9vbGVhbixcbiAgYXJnczogYW55W11cbik6IExvZ1JlbmRlciB7XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gc2V0dXBQcmludEdyb3VwKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKTtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csICdncm91cCcsIHJlbmRlcl9hcmdzKSwgbG9nLmlzU2lsZW50KTtcbn1cblxuLyoqXG4gKiBUaGUgbWV0aG9kIGZvciBwcmludGluZyBjb2xsYXBzZWQgZ3JvdXAgbG9ncyB0byB0aGUgbm9kZSBjb25zb2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRHcm91cENvbGxhcHNlZChcbiAgbG9nOiBMb2csXG4gIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLFxuICB1c2VfZW1vamk6IGJvb2xlYW4sXG4gIGFyZ3M6IGFueVtdXG4pOiBMb2dSZW5kZXIge1xuICBjb25zdCByZW5kZXJfYXJncyA9IHNldHVwUHJpbnRHcm91cChkZWYsIHVzZV9lbW9qaSwgYXJncyk7XG4gIHJldHVybiB0b0NvbnNvbGUoXG4gICAgYXBwbHlSZW5kZXIobG9nLCAnZ3JvdXBDb2xsYXBzZWQnLCByZW5kZXJfYXJncyksXG4gICAgbG9nLmlzU2lsZW50XG4gICk7XG59XG5cbmZ1bmN0aW9uIHNldHVwUHJpbnRHcm91cChcbiAgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sXG4gIHVzZV9lbW9qaTogYm9vbGVhbixcbiAgYXJnczogYW55W11cbik6IGFueVtdIHtcbiAgY29uc3QgcGFydGlhbF9hcmdzID0gW2ZMZWFkZXIoZGVmLCB1c2VfZW1vamksIGFyZ3MpXTtcbiAgcmV0dXJuIHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJ1xuICAgID8gWy4uLnBhcnRpYWxfYXJncywgYXJnc1swXV1cbiAgICA6IHBhcnRpYWxfYXJncztcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBGT1JNQVRURVJTIC0tLS0tLS0tIC8vXG5cbi8qKlxuICogRm9ybWF0cyB0aGUgbGVhZGVyIG9mIHRoZSBsb2cgc3RyaW5nLiBUaGlzIGNvbnRhaW5zIHRoZSBlbW9qaSBpZiBlbmFibGVkLFxuICogdGhlIGxvZyBsZXZlbCBuYW1lLCBhbmQgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgYmVpbmcgcHJpbnRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZMZWFkZXIoXG4gIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLFxuICB1c2VfZW1vamk6IGJvb2xlYW4sXG4gIGFyZ3M6IGFueVtdXG4pOiBzdHJpbmcge1xuICBjb25zdCBlbW9qaSA9IHVzZV9lbW9qaSA/IGZFbW9qaShkZWYuZW1vamkpIDogJyc7XG4gIGNvbnN0IHBhZGRpbmcgPSB1c2VfZW1vamkgPyAxNCArIGVtb2ppLmxlbmd0aCA6IDE0O1xuICBjb25zdCBwYWRkZWRfbGVhZGVyID0gYWRkUGFkZGluZyhcbiAgICBgJHtlbW9qaX0gJHtmTmFtZShkZWYubGV2ZWxOYW1lKX0oJHthcmdzLmxlbmd0aH0pYCxcbiAgICBwYWRkaW5nXG4gICk7XG5cbiAgcmV0dXJuIGRlZi50ZXJtaW5hbC5yZWR1Y2UoKGFjYywgc3R5bGUpID0+IHtcbiAgICByZXR1cm4gY2hhbGtbc3R5bGVdKGFjYyk7XG4gIH0sIHBhZGRlZF9sZWFkZXIpO1xufVxuXG4vKipcbiAqIEFkZCBzcGFjZXMgdG8gdGhlIGVuZCBvZiBhIGxvZyB0aXRsZSB0byBtYWtlIHRoZW0gYWxsIGFsaWduLlxuICovXG5mdW5jdGlvbiBhZGRQYWRkaW5nKHN0cjogc3RyaW5nLCBsZW46IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGRpZmYgPSBsZW4gLSBzdHIubGVuZ3RoO1xuICBsZXQgcGFkZGVkID0gc3RyO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBkaWZmOyBpICs9IDEpIHtcbiAgICBwYWRkZWQgKz0gJyAnO1xuICB9XG4gIHJldHVybiBwYWRkZWQ7XG59XG5cbi8qKlxuICogQWRkcyB0aGUgZW1vamkgdG8gdGhlIGxvZyBsZWFkZXIgaWYgZW5hYmxlZC5cbiAqL1xuZnVuY3Rpb24gZkVtb2ppKGVtb2ppOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCAke2Vtb2ppfWA7XG59XG5cbi8qKlxuICogQWRkcyB0aGUgbG9nIGxldmVsIG5hbWUgdG8gdGhlIGxlYWRlciBpbiBpbml0aWFsIGNhcHMuXG4gKi9cbmZ1bmN0aW9uIGZOYW1lKG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIHJldHVybiBpbml0aWFsQ2FwcyhuYW1lID8/ICcnKTtcbn1cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBtZXRhIHNlY3Rpb24gb2YgdGhlIGxvZyBzdHJpbmcgd2hpY2ggaW5jbHVkZXMgdGhlXG4gKiBsb2cgbmFtZXNwYWNlLCB0aGUgbGFiZWwsIHRoZSB0aW1lc3RhbXAgZnJvbSB0aGUgdGltZXIsIHRoZSBjb3VudFxuICogZnJvbSB0aGUgY291bnRlciwgb3IgdGhlIHRlc3QgcmVzdWx0IGZyb20gYW55IGFzc2VydGlvbnMgaWYgYW55IG9mXG4gKiB0aGVzZSBtb2RpZmllcnMgd2VyZSBhcHBsaWVkIHRvIHRoaXMgbG9nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZk1ldGEobG9nOiBMb2csIHVzZV9lbW9qaTogYm9vbGVhbik6IHN0cmluZyB7XG4gIHJldHVybiBgJHtmTmFtZXNwYWNlKGxvZyl9JHtmTGFiZWwobG9nKX0ke2ZUaW1lKGxvZywgdXNlX2Vtb2ppKX0ke2ZDb3VudChcbiAgICBsb2dcbiAgKX0ke2ZUZXN0KGxvZywgdXNlX2Vtb2ppKX1gO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIHRpbWUgb24gdGhlIGxvZyBzdHJpbmcgYmFzZWQgb24gYW55IHRpbWUgbW9kaWZpZXJzXG4gKiB0aGF0IGhhdmUgYmVlbiBhcHBsaWVkIHRvIHRoaXMgbG9nLlxuICovXG5mdW5jdGlvbiBmVGltZShsb2c6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgbGFiZWxfdHh0ID0gYCR7bG9nLnRpbWVOb3dWYWwgPz8gbG9nLmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJydcbiAgICA/IGAoJHtcbiAgICAgICAgZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSB8fCB1c2VfZW1vamkgPyAn4o+xJyA6ICcnXG4gICAgICB9JHtsYWJlbF90eHR9KSBgXG4gICAgOiAnJztcbn1cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBjb3VudCBvbiB0aGUgbG9nIHN0cmluZyBiYXNlZCBvbiBhbnkgY291bnRlciBtb2RpZmllcnNcbiAqIHRoYXQgaGF2ZSBiZWVuIGFwcGxpZWQgdG8gdGhpcyBsb2cuXG4gKi9cbmZ1bmN0aW9uIGZDb3VudChsb2c6IExvZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNvdW50ID0gbG9nLmxhYmVsVmFsPy5jb3VudDtcbiAgcmV0dXJuIGNvdW50ICE9PSB1bmRlZmluZWQgPyBgKENvdW50OiAke2NvdW50fSlgIDogJyc7XG59XG5cbi8qKlxuICogRm9ybWF0cyB0aGUgbGFiZWwgb24gdGhlIGxvZyBzdHJpbmcgYmFzZWQgb24gdGhlIGxhYmVsXG4gKiBtb2RpZmllciBhcHBsaWVkIHRvIHRoaXMgbG9nLlxuICovXG5mdW5jdGlvbiBmTGFiZWwobG9nOiBMb2cpOiBzdHJpbmcge1xuICByZXR1cm4gbG9nLmxhYmVsVmFsID8gYFske2xvZy5sYWJlbFZhbC5uYW1lfV0gYCA6ICcnO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIGFzc2VydGlvbiBvciB0ZXN0IG9uIHRoZSBsb2cgc3RyaW5nIGJhc2VkIG9uXG4gKiBhbnkgdGVzdGluZyBtb2RpZmllcnMgYXBwbGllZCB0byB0aGlzIGxvZy5cbiAqL1xuZnVuY3Rpb24gZlRlc3QobG9nOiBMb2csIHVzZV9lbW9qaTogYm9vbGVhbik6IHN0cmluZyB7XG4gIHJldHVybiBsb2cuYXNzZXJ0aW9uID09PSBmYWxzZVxuICAgID8gYCR7dXNlX2Vtb2ppID8gJ+KdjCAnIDogJyd9QXNzZXJ0aW9uIGZhaWxlZDpgXG4gICAgOiAnJztcbn1cbiIsImltcG9ydCB7XG4gIExvZyxcbiAgTG9nUmVuZGVyLFxuICBDb25zb2xlTWV0aG9kLFxuICBMb2dMZXZlbERlZmluaXRpb24sXG59IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgRU5UUlkgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50KFxuICBsb2c6IExvZyxcbiAgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sXG4gIGFyZ3M6IGFueVtdXG4pOiBMb2dSZW5kZXIge1xuICBjb25zdCB1c2VfZW1vamkgPVxuICAgIGVudi4kc2hlZD8ub3ZlcnJpZGVzPy51c2VfZW1vamkgPT09IHRydWUgfHwgbG9nLmNmZy51c2VfZW1vamkgPT09IHRydWU7XG4gIHJldHVybiBsb2cucHJpbnRlcihsb2csIGRlZiwgdXNlX2Vtb2ppLCBhcmdzKTtcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBNRVRIT0RTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwRW5kKFxuICBsb2c6IExvZyxcbiAgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sXG4gIHVzZV9lbW9qaTogYm9vbGVhbixcbiAgYXJnczogYW55W11cbik6IExvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZ3JvdXBFbmQnLCBbXSksIGxvZy5pc1NpbGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFRhYmxlKFxuICBsb2c6IExvZyxcbiAgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sXG4gIHVzZV9lbW9qaTogYm9vbGVhbixcbiAgYXJnczogYW55W11cbik6IExvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAndGFibGUnLCBhcmdzKSwgbG9nLmlzU2lsZW50LCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludERpcihcbiAgbG9nOiBMb2csXG4gIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLFxuICB1c2VfZW1vamk6IGJvb2xlYW4sXG4gIGFyZ3M6IGFueVtdXG4pOiBMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2RpcicsIGFyZ3MpLCBsb2cuaXNTaWxlbnQsIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGlyeG1sKFxuICBsb2c6IExvZyxcbiAgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sXG4gIHVzZV9lbW9qaTogYm9vbGVhbixcbiAgYXJnczogYW55W11cbik6IExvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZGlyeG1sJywgYXJncyksIGxvZy5pc1NpbGVudCwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRUcmFjZShcbiAgbG9nOiBMb2csXG4gIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLFxuICB1c2VfZW1vamk6IGJvb2xlYW4sXG4gIGFyZ3M6IGFueVtdXG4pOiBMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ3RyYWNlJywgYXJncyksIGxvZy5pc1NpbGVudCk7XG59XG5cbi8vIC0tLS0tLSBQcmludCB0byB0aGUgY29uc29sZSAtLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJlbmRlcihcbiAgbG9nOiBMb2csXG4gIG1ldGhvZDogQ29uc29sZU1ldGhvZCxcbiAgYXJnczogYW55W11cbik6IExvZ1JlbmRlciB7XG4gIGNvbnN0IGV4cGFuZGVkX2FyZ3MgPSBsb2cuZHVtcENvbnRleHQgPyBhcmdzLmNvbmNhdChbbG9nLmNvbnRleHRdKSA6IGFyZ3M7XG4gIGxvZy5yZW5kZXIgPSBbbWV0aG9kLCBleHBhbmRlZF9hcmdzXTtcbiAgcmV0dXJuIGxvZy5yZW5kZXI7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBsb2cuIElmIHRoZSBBRFpFX0VOViBpcyBzZXQgdG8gXCJkZXZcIiB0aGUgbG9nIHdpbGwgbm90IHJlbmRlciBhbmRcbiAqIHdpbGwgYmUgcmV0dXJuZWQgZm9yIHVuaXQgbGlicmFyeSBkZXZlbG9wbWVudCBwdXJwb3Nlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ29uc29sZShcbiAgcmVuZGVyOiBMb2dSZW5kZXIsXG4gIGlzX3NpbGVudDogYm9vbGVhbixcbiAgc3ByZWFkID0gdHJ1ZVxuKTogTG9nUmVuZGVyIHtcbiAgY29uc3QgW21ldGhvZCwgYXJnc10gPSByZW5kZXI7XG4gIGlmIChlbnYuQURaRV9FTlYgIT09ICdkZXYnICYmICFpc19zaWxlbnQpIHtcbiAgICBzcHJlYWQgPyBjb25zb2xlW21ldGhvZF0oLi4uYXJncykgOiBjb25zb2xlW21ldGhvZF0oYXJncyk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlcjtcbn1cblxuLy8gLS0tLS0tIFNoYXJlZCBGb3JtYXR0ZXJzIC0tLS0tLS0gLy9cblxuLyoqXG4gKiBGb3JtYXRzIHRoZSBuYW1lc3BhY2Ugb24gdGhlIGxvZyBzdHJpbmcgYmFzZWQgb24gdGhlIG5hbWVzcGFjZVxuICogbW9kaWZpZXIgYXBwbGllZCB0byB0aGlzIGxvZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZOYW1lc3BhY2UobG9nOiBMb2cpOiBzdHJpbmcge1xuICBjb25zdCBucyA9IGxvZy5uYW1lc3BhY2VWYWw7XG4gIGlmIChucykge1xuICAgIGlmIChpc1N0cmluZyhucykpIHtcbiAgICAgIHJldHVybiBgIyR7bG9nLm5hbWVzcGFjZVZhbH0gYDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5zLnJlZHVjZSgoYWNjLCBuYW1lKSA9PiBgJHthY2N9IyR7bmFtZX0gYCwgJycpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG4iLCJpbXBvcnQgZGVmYXVsdHNEZWVwIGZyb20gJ2xvZGFzaC5kZWZhdWx0c2RlZXAnO1xuaW1wb3J0IHtcbiAgU2hlZENvbmZpZyxcbiAgRGVmYXVsdHMsXG4gIExhYmVsLFxuICBTaGVkVXNlckNvbmZpZyxcbiAgRmluYWxMb2csXG4gIENvbGxlY3Rpb24sXG4gIExldmVsRmlsdGVyLFxuICBHbG9iYWxGaWx0ZXIsXG4gIExpc3RlbmVyTG9jYXRpb25zLFxuICBMaXN0ZW5lckJ1Y2tldHMsXG4gIExpc3RlbmVyQnVja2V0LFxuICBMaXN0ZW5lckNhbGxiYWNrLFxuICBMYWJlbE1hcCxcbiAgRmlsdGVyQWxsb3dlZENhbGxiYWNrLFxufSBmcm9tICcuL19jb250cmFjdHMnO1xuaW1wb3J0IHsgZGVmYXVsdHMsIHNoZWRfZGVmYXVsdHMgfSBmcm9tICcuL19kZWZhdWx0cyc7XG5pbXBvcnQgeyBpc1N0cmluZywgZm9ybWF0TGV2ZWxzIH0gZnJvbSAnLi91dGlsJztcblxuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi9nbG9iYWwnO1xuXG4vKipcbiAqIEEgdHlwZWd1YXJkIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBnbG9iYWwgc2hlZCBzdG9yZSBleGlzdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGVkRXhpc3RzKHN0b3JlOiBTaGVkIHwgdW5kZWZpbmVkKTogc3RvcmUgaXMgU2hlZCB7XG4gIHJldHVybiBzdG9yZSAhPT0gdW5kZWZpbmVkO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNoZWQgaW5zdGFuY2UgaW4geW91ciBlbnZpcm9ubWVudCdzIGdsb2JhbCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hlZChjb25maWc6IFNoZWRVc2VyQ29uZmlnKTogU2hlZCB7XG4gIGVudi4kc2hlZCA9IG5ldyBTaGVkKGNvbmZpZyk7XG4gIHJldHVybiBlbnYuJHNoZWQ7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgc2hlZCBmcm9tIHRoZSBlbnZpcm9ubWVudCdzIGdsb2JhbCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2hlZCgpOiB2b2lkIHtcbiAgZGVsZXRlIGVudi4kc2hlZDtcbn1cblxuLyoqXG4gKiBBIGdsb2JhbCBzdG9yZSBmb3IgY2FjaGluZywgbGlzdGVuaW5nLCBhbmQgcmVjYWxsaW5nIEFkemUgbG9ncy5cbiAqL1xuZXhwb3J0IGNsYXNzIFNoZWQge1xuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gZm9yIFNoZWQuIFNoZWQgaXMgY29uc3RydWN0ZWQgd2l0aCBhIHNldCBvZlxuICAgKiBkZWZhdWx0cyB0aGF0IGNhbiBvdmVycmlkZW4gYnkgdGhlIGNvbmZpZ3VyYXRpb24gc3VwcGxpZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICBwcml2YXRlIGNmZzogU2hlZENvbmZpZztcblxuICAvKipcbiAgICogSW4tbWVtb3J5IGNhY2hlIG9mIGZpbmFsaXplZCBsb2dzICh0ZXJtaW5hdGVkIGFuZCBoYXZlIG1ldGEgZGF0YSBhcHBsaWVkIHRvIHRoZW0pLiBUaGlzXG4gICAqIGlzIG1haW5seSB1c2VkIGZvciByZWNhbGxpbmcgbG9ncyBhbmQgZmlsdGVyaW5nIHRoZW0uXG4gICAqXG4gICAqIERvIG5vdCBhY2Nlc3MgdGhpcyB2YWx1ZSBkaXJlY3RseS4gVXNlIHRoZSBgY2FjaGUoKWAgc2V0dGVyIGFuZCBnZXR0ZXIuXG4gICAqL1xuICBwcml2YXRlIGNhY2hlOiBDb2xsZWN0aW9uID0gW107XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIGxhYmVsIGluc3RhbmNlcy4gVXNlZnVsIGZvciBnbG9iYWxseSBsaW5raW5nIGxhYmVsbGVkIGxvZ3MuXG4gICAqL1xuICBwcml2YXRlIGxhYmVsczogTGFiZWxNYXAgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIENvdW50ZXIgZm9yIGdlbmVyYXRpbmcgSUQncyBmb3IgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBpZF9jb3VudGVyID0gLTE7XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIGxvZyBsaXN0ZW5lcnMuIFRoZXNlIGFyZSBmaXJlIHdoZW4gc3BlY2lmaWVkIGxvZyBsZXZlbHNcbiAgICogYXJlIHByaW50ZWQuXG4gICAqL1xuICBwcml2YXRlIGxpc3RlbmVyczogTGlzdGVuZXJCdWNrZXRzID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogU2hlZFVzZXJDb25maWcpIHtcbiAgICBjb25zdCBnbG9iYWxfY2ZnID0gY29uZmlnPy5nbG9iYWxfY2ZnXG4gICAgICA/IChkZWZhdWx0c0RlZXAoY29uZmlnLmdsb2JhbF9jZmcsIGRlZmF1bHRzKSBhcyBEZWZhdWx0cylcbiAgICAgIDogbnVsbDtcbiAgICBjb25zdCBjZmdfZ2xvYmFsX2RlZmF1bHRzID0geyAuLi5jb25maWcsIGdsb2JhbF9jZmcgfTtcbiAgICBjb25zdCBjZmdfZGVmYXVsdHMgPSBkZWZhdWx0c0RlZXAoY2ZnX2dsb2JhbF9kZWZhdWx0cywgc2hlZF9kZWZhdWx0cyk7XG4gICAgY29uc3QgY2ZnX2dsb2JhbF9wYXJzZWQgPSB0aGlzLnBhcnNlRmlsdGVyTGV2ZWxzKGNmZ19kZWZhdWx0cyk7XG4gICAgdGhpcy5jZmcgPSBjZmdfZ2xvYmFsX3BhcnNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGxldmVsIGZpbHRlciBvbiB0aGUgY29uZmlndXJhdGlvbiBhbmQgcmVhc3NpZ25zIGl0LlxuICAgKiBUaGlzIGlzIGZvciBpbmNyZWFzZWQgcGVyZm9ybWFuY2Ugc28gdGhpcyBjYWxjdWxhdGlvbiBpc24ndCBkb25lIGVhY2hcbiAgICogdGltZSBhIGxvZyBpcyBjaGVja2luZyBhZ2FpbnN0IHRoZSBmaWx0ZXIuXG4gICAqL1xuICBwcml2YXRlIHBhcnNlRmlsdGVyTGV2ZWxzKGNmZzogU2hlZENvbmZpZykge1xuICAgIGNvbnN0IG5ld19jZmc6IFNoZWRDb25maWcgPSB7IC4uLmNmZyB9O1xuICAgIGlmIChcbiAgICAgIHRoaXMuZmlsdGVySXNTZXQoY2ZnLCAnaW5jbHVkZScsICdsZXZlbCcpICYmXG4gICAgICBuZXdfY2ZnLmZpbHRlcnMubGV2ZWw/LmluY2x1ZGVcbiAgICApIHtcbiAgICAgIG5ld19jZmcuZmlsdGVycy5sZXZlbC5pbmNsdWRlID0gZm9ybWF0TGV2ZWxzKFxuICAgICAgICBuZXdfY2ZnLmdsb2JhbF9jZmcsXG4gICAgICAgIG5ld19jZmcuZmlsdGVycy5sZXZlbC5pbmNsdWRlXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLmZpbHRlcklzU2V0KGNmZywgJ2V4Y2x1ZGUnLCAnbGV2ZWwnKSAmJlxuICAgICAgbmV3X2NmZy5maWx0ZXJzLmxldmVsPy5leGNsdWRlXG4gICAgKSB7XG4gICAgICBuZXdfY2ZnLmZpbHRlcnMubGV2ZWwuZXhjbHVkZSA9IGZvcm1hdExldmVscyhcbiAgICAgICAgbmV3X2NmZy5nbG9iYWxfY2ZnLFxuICAgICAgICBuZXdfY2ZnLmZpbHRlcnMubGV2ZWwuZXhjbHVkZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld19jZmc7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gICAqIEdFVC9TRVQgTUVUSE9EU1xuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIFN0b3JlIGEgbG9nIGluIHRoZSBzaGVkIGZvciBsYXRlciByZWNhbGwuXG4gICAqL1xuICBwdWJsaWMgc3RvcmUobG9nOiBGaW5hbExvZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhY2hlLmxlbmd0aCA8IHRoaXMuY2ZnLmNhY2hlX2xpbWl0KSB7XG4gICAgICB0aGlzLmNhY2hlID0gdGhpcy5jYWNoZS5jb25jYXQoW2xvZ10pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBsaW1pdCBmb3IgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxvZ3MgdGhhdCBTaGVkIHdpbGwgY2FjaGUuXG4gICAqL1xuICBwdWJsaWMgc2V0IGNhY2hlTGltaXQobGltaXQ6IG51bWJlcikge1xuICAgIHRoaXMuY2ZnLmNhY2hlX2xpbWl0ID0gbGltaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbGltaXQgZm9yIHRoZSBtYXhpbXVtIG51bWJlciBvZiBsb2dzIHRoYXQgU2hlZCB3aWxsIGNhY2hlLlxuICAgKi9cbiAgcHVibGljIGdldCBjYWNoZUxpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2ZnLmNhY2hlX2xpbWl0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIG9mIHRoZSBjYWNoZWQgbG9ncyBvZiB0aGUgcHJvdmlkZWQgbGV2ZWxzIGFzIGEgYnVuZGxlLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgcmVjYWxsaW5nIGxvZ3MgYW5kIGFwcGx5aW5nIGZpbHRlcnMuXG4gICAqL1xuICBwdWJsaWMgZ2V0Q29sbGVjdGlvbihsZXZlbHM6IExldmVsRmlsdGVyKTogQ29sbGVjdGlvbiB7XG4gICAgY29uc3QgbHZscyA9IGZvcm1hdExldmVscyh0aGlzLmNmZy5nbG9iYWxfY2ZnLCBsZXZlbHMpO1xuICAgIHJldHVybiB0aGlzLmNhY2hlLnJlZHVjZSgoYWNjLCBsb2cpID0+IHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGx2bHMuaW5jbHVkZXMobG9nLmxldmVsKSA/IFtsb2ddIDogW10pO1xuICAgIH0sIFtdIGFzIENvbGxlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgc2hlZCBpbnN0YW5jZSBoYXMgZ2xvYmFsIEFkemUgY29uZmlnIG92ZXJyaWRlcyBzZXQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc092ZXJyaWRlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jZmcuZ2xvYmFsX2NmZyAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBnbG9iYWwgQWR6ZSBjb25maWd1cmF0aW9uIG92ZXJyaWRlcy5cbiAgICovXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVzKCk6IERlZmF1bHRzIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY2ZnLmdsb2JhbF9jZmc7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciBjb25maWd1cmF0aW9uIG9mIHRoZSBoaWRlQWxsIGZpbHRlciBwcm9wZXJ0eS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGhpZGVBbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2ZnPy5maWx0ZXJzLmhpZGVBbGwgPz8gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZ2xvYmFsIEFkemUgY29uZmlndXJhdGlvbiBvdmVycmlkZXMuXG4gICAqL1xuICBwdWJsaWMgc2V0IGNvbmZpZyhjZmc6IERlZmF1bHRzIHwgbnVsbCkge1xuICAgIGNvbnN0IGRlZmF1bHRlZCA9IGNmZyA/IGRlZmF1bHRzRGVlcChjZmcsIGRlZmF1bHRzKSA6IGNmZztcbiAgICB0aGlzLmNmZy5nbG9iYWxfY2ZnID0gZGVmYXVsdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxhYmVsIGZyb20gdGhlIFNoZWQgYnkgbmFtZS5cbiAgICovXG4gIHB1YmxpYyBnZXRMYWJlbChuYW1lOiBzdHJpbmcpOiBMYWJlbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzLmdldChuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGFiZWwgdG8gdGhlIFNoZWQgdG8gYmUgdHJhY2tlZCBnbG9iYWxseS5cbiAgICovXG4gIHB1YmxpYyBhZGRMYWJlbChsYWJlbDogTGFiZWwpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzTGFiZWwobGFiZWwubmFtZSkpIHtcbiAgICAgIHRoaXMubGFiZWxzLnNldChsYWJlbC5uYW1lLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIGEgbGFiZWwgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBleGlzdHMgaW4gdGhlIFNoZWQgbGFiZWwgY2FjaGUuXG4gICAqL1xuICBwdWJsaWMgaGFzTGFiZWwobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzLmhhcyhuYW1lKTtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAgICogTElTVEVORVIgTUVUSE9EU1xuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIGNhbGxiYWNrIHRoYXQgZmlyZXMgYW55IHRpbWUgYSBsb2cgb2Ygb25lIG9mIHRoZSBwcm92aWRlZCBsZXZlbHMgaXMgZ2VuZXJhdGVkLlxuICAgKi9cbiAgcHVibGljIGFkZExpc3RlbmVyKFxuICAgIGxldmVsczogTGV2ZWxGaWx0ZXIsXG4gICAgY2I6IExpc3RlbmVyQ2FsbGJhY2tcbiAgKTogTGlzdGVuZXJMb2NhdGlvbnMge1xuICAgIGNvbnN0IGx2bHMgPSBmb3JtYXRMZXZlbHModGhpcy5jZmcuZ2xvYmFsX2NmZywgbGV2ZWxzKTtcbiAgICByZXR1cm4gbHZscy5tYXAoKGx2bDogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBHZXQgdGhlIG1hcCBmb3IgdGhlIGxpc3RlbmVycyBvZiB0aGUgZ2l2ZW4gbG9nIGxldmVsLlxuICAgICAgY29uc3QgbGV2ZWxfbWFwID0gdGhpcy5saXN0ZW5lckJ1Y2tldChsdmwpO1xuICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgZm9yIHRoZSBsaXN0ZW5lci5cbiAgICAgIGNvbnN0IGlkID0gdGhpcy5hc3NpZ25JZCgpO1xuXG4gICAgICAvLyBBc3NpZ24gYW4gSUQgdG8gdGhlIGxpc3RlbmVyIGZvciBsYXRlciB0ZWFyZG93bi5cbiAgICAgIGxldmVsX21hcC5zZXQoaWQsIGNiKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNldChsdmwsIGxldmVsX21hcCk7XG5cbiAgICAgIC8vIFJldHVybiB0aGUgbGlzdGVuZXIgbG9jYXRpb24gdHVwbGVcbiAgICAgIHJldHVybiBbbHZsLCBpZF07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxvZyBsaXN0ZW5lcnMgYXQgdGhlIGdpdmVuIGJ1Y2tldCBsb2NhdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIobG9jYXRpb25zOiBMaXN0ZW5lckxvY2F0aW9ucyk6IHZvaWQge1xuICAgIGxvY2F0aW9ucy5mb3JFYWNoKChbbHZsX2lkLCBpZF0pID0+IHtcbiAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5saXN0ZW5lcnMuZ2V0KGx2bF9pZCk7XG4gICAgICBsZXZlbD8uZGVsZXRlKGlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlIGFueSBsb2cgbGlzdGVuZXJzIGZvciB0aGUgcHJvdmlkZWQgbG9nLlxuICAgKi9cbiAgcHVibGljIGZpcmVMaXN0ZW5lcnMobG9nOiBGaW5hbExvZyk6IHZvaWQge1xuICAgIHRoaXMubGlzdGVuZXJzLmdldChsb2cubGV2ZWwpPy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIobG9nKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAgICogR0xPQkFMIEZJTFRFUiBNRVRIT0RTXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIGxvZyBpbnN0YW5jZSBzaG91bGQgYmVcbiAgICogYWxsb3dlZCB0byBwcmludC5cbiAgICovXG4gIHB1YmxpYyBsb2dHbG9iYWxseUFsbG93ZWQobG9nOiBGaW5hbExvZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5oaWRlQWxsICYmXG4gICAgICB0aGlzLmxldmVsQWxsb3dlZChsb2cpICYmXG4gICAgICB0aGlzLmxhYmVsQWxsb3dlZChsb2cpICYmXG4gICAgICB0aGlzLm5hbWVzcGFjZUFsbG93ZWQobG9nKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdGhhdCB0aGUgY3VycmVudCBsZXZlbCBzZXQgb24gdGhlIGxvZyBpcyBhbGxvd2VkIGJhc2VkIG9uXG4gICAqIHRoZSBnbG9iYWwgZmlsdGVyIHJ1bGVzLlxuICAgKi9cbiAgcHJpdmF0ZSBsZXZlbEFsbG93ZWQobG9nOiBGaW5hbExvZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckFsbG93ZWQoJ2xldmVsJywgKGZpbHRlciwgZnVuYykgPT4ge1xuICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5jZmcuZmlsdGVycz8ubGV2ZWw/LltmaWx0ZXJdID8/IChbXSBhcyBudW1iZXJbXSk7XG4gICAgICByZXR1cm4gdGhpc1tmdW5jXTxudW1iZXI+KHNvdXJjZSwgbG9nLmxldmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGF0IHRoZSBjdXJyZW50IGxhYmVsIHNldCBvbiB0aGUgbG9nIGlzIGFsbG93ZWQgYmFzZWQgb25cbiAgICogdGhlIGdsb2JhbCBmaWx0ZXIgcnVsZXMuXG4gICAqL1xuICBwcml2YXRlIGxhYmVsQWxsb3dlZChsb2c6IEZpbmFsTG9nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyQWxsb3dlZCgnbGFiZWwnLCAoZmlsdGVyLCBmdW5jKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLmNmZy5maWx0ZXJzPy5sYWJlbD8uW2ZpbHRlcl0gPz8gKFtdIGFzIHN0cmluZ1tdKTtcbiAgICAgIHJldHVybiB0aGlzW2Z1bmNdPHN0cmluZz4oc291cmNlLCBsb2c/LmxhYmVsVmFsPy5uYW1lID8/ICcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGF0IGF0IGxlYXN0IG9uZSBvZiB0aGUgY3VycmVudCBuYW1lc3BhY2VzIHNldCBvbiB0aGUgbG9nXG4gICAqIGlzIGFsbG93ZWQgYmFzZWQgb24gdGhlIGdsb2JhbCBmaWx0ZXIgcnVsZXMuXG4gICAqL1xuICBwcml2YXRlIG5hbWVzcGFjZUFsbG93ZWQobG9nOiBGaW5hbExvZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckFsbG93ZWQoJ25hbWVzcGFjZScsIChmaWx0ZXIsIGZ1bmMpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuY2ZnLmZpbHRlcnM/Lm5hbWVzcGFjZT8uW2ZpbHRlcl0gPz8gKFtdIGFzIHN0cmluZ1tdKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGxvZy5uYW1lc3BhY2VWYWw7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc1N0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbZnVuY108c3RyaW5nPihzb3VyY2UsIHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTmFtZXNwYWNlIGxvZyB2YWx1ZSBpcyBhbiBhcnJheS4gQ2hlY2sgZWFjaCBuYW1lc3BhY2UgdmFsdWUuXG4gICAgICAgICAgcmV0dXJuIHRhcmdldFxuICAgICAgICAgICAgLm1hcCgodmFsKSA9PiB0aGlzW2Z1bmNdPHN0cmluZz4oc291cmNlLCB2YWwpKVxuICAgICAgICAgICAgLmluY2x1ZGVzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgdGhlIGZpbHRlciBtZXRob2RzIHRvIGhhbmRsZSBzb21lIGJhc2ljIHNldHVwIGZvciB2YWxpZGF0aW5nXG4gICAqIHRoZSBmaWx0ZXIgdmFsdWVzLlxuICAgKi9cbiAgcHJpdmF0ZSBmaWx0ZXJBbGxvd2VkKFxuICAgIGNhdGVnb3J5OiBHbG9iYWxGaWx0ZXIsXG4gICAgY2I6IEZpbHRlckFsbG93ZWRDYWxsYmFja1xuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBmaWx0ZXJfdHlwZSA9IHRoaXMuZmlsdGVyVHlwZShjYXRlZ29yeSk7XG4gICAgaWYgKGZpbHRlcl90eXBlKSB7XG4gICAgICBjb25zdCBbZmlsdGVyLCBmdW5jXSA9IGZpbHRlcl90eXBlO1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2IoZmlsdGVyLCBmdW5jKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHR1cGxlcyBpbmRpY2F0aW5nIHdoYXQgZmlsdGVyIHR5cGUgaXMgYWN0aXZlLiBJbmNsdWRlIGdldHMgcHJlY2VkZW5jZSBvdmVyIGV4Y2x1ZGUuXG4gICAqL1xuICBwcml2YXRlIGZpbHRlclR5cGUoXG4gICAgY2F0ZWdvcnk6IEdsb2JhbEZpbHRlclxuICApOiBbJ2luY2x1ZGUnLCAnaXNJbmNsdWRlZCddIHwgWydleGNsdWRlJywgJ2lzTm90RXhjbHVkZWQnXSB8IHVuZGVmaW5lZCB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHRoaXMuZmlsdGVySXNTZXQodGhpcy5jZmcsICdpbmNsdWRlJywgY2F0ZWdvcnkpOlxuICAgICAgICByZXR1cm4gWydpbmNsdWRlJywgJ2lzSW5jbHVkZWQnXTtcbiAgICAgIGNhc2UgdGhpcy5maWx0ZXJJc1NldCh0aGlzLmNmZywgJ2V4Y2x1ZGUnLCBjYXRlZ29yeSk6XG4gICAgICAgIHJldHVybiBbJ2V4Y2x1ZGUnLCAnaXNOb3RFeGNsdWRlZCddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJcyB0aGUgbG9nIGluIHRoZSBpbmNsdWRlZCBmaWx0ZXI/XG4gICAqL1xuICBwcml2YXRlIGlzSW5jbHVkZWQ8VD4oc291cmNlOiBUW10sIHZhbHVlOiBUKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHNvdXJjZS5sZW5ndGggPiAwICYmIHNvdXJjZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogSXMgdGhlIGxvZyBub3QgaW4gdGhlIGV4Y2x1ZGVkIGZpbHRlcj9cbiAgICovXG4gIHByaXZhdGUgaXNOb3RFeGNsdWRlZDxUPihzb3VyY2U6IFRbXSwgdmFsdWU6IFQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc291cmNlLmxlbmd0aCA+IDAgJiYgc291cmNlLmluZGV4T2YodmFsdWUpID09PSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYXMgdGhlIHVzZXIgZGVmaW5lZCBydWxlcyBmb3IgYSBzcGVjaWZpYyBmaWx0ZXI/XG4gICAqL1xuICBwcml2YXRlIGZpbHRlcklzU2V0KFxuICAgIGNmZzogU2hlZENvbmZpZyxcbiAgICB0eXBlOiAnaW5jbHVkZScgfCAnZXhjbHVkZScsXG4gICAgZmlsdGVyOiBHbG9iYWxGaWx0ZXJcbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5jbHVkZV9wcm9wID0gY2ZnPy5maWx0ZXJzPy5bZmlsdGVyXT8uW3R5cGVdID8/IFtdO1xuICAgIHJldHVybiBpbmNsdWRlX3Byb3AubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxcbiAgICogSEVMUEVSIE1FVEhPRFNcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHdWFyYW50ZWUgdGhhdCBhIGxpc3RlbmVyIGJ1Y2tldCBleGlzdHMgZm9yIHRoZSBnaXZlbiBsb2cgbGV2ZWwgYW5kIHJldHVybiB0aGUgYnVja2V0LlxuICAgKi9cbiAgcHJpdmF0ZSBsaXN0ZW5lckJ1Y2tldChsdmw6IG51bWJlcik6IExpc3RlbmVyQnVja2V0IHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsdmwpKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQobHZsLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgICAvLyBPdmVycmlkZSBUUyBiZWNhdXNlIHRoZSBMaXN0ZW5lckJ1Y2tldCBpcyBndWFyYW50ZWVkIGJ5IHRoZSBjb25kaXRpb24gYWJvdmUuXG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLmdldChsdmwpIGFzIExpc3RlbmVyQnVja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudCB0aGUgSUQgY291bnRlciBhbmQgcmV0dXJuIHRoZSBuZXcgdmFsdWUuXG4gICAqL1xuICBwcml2YXRlIGFzc2lnbklkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLmlkX2NvdW50ZXIgKz0gMSk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdGVybWluYXRvcnMnO1xuIiwiaW1wb3J0IHtcbiAgTG9nLFxuICBGaW5hbExvZyxcbiAgTG9nRnVuY3Rpb24sXG4gIEN1c3RvbUxvZ0Z1bmN0aW9uLFxuICBEZWZhdWx0cyxcbiAgTG9nTGV2ZWxEZWZpbml0aW9uLFxuICBUZXJtaW5hdGVkTG9nLFxufSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IHByaW50IH0gZnJvbSAnLi4vcHJpbnRlcnMnO1xuaW1wb3J0IHsgYWxsb3dlZCwgZXZhbFBhc3NlcyB9IGZyb20gJy4uL2NvbmRpdGlvbnMnO1xuaW1wb3J0IHsgbXV0YXRlUHJvcHMgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IHNoZWRFeGlzdHMgfSBmcm9tICcuLi9zaGVkJztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uL2dsb2JhbCc7XG5cbi8qKlxuICogU2VhbHMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgYSBsb2cgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0XG4gKiBjb25zdHJ1Y3RzIGEgbmV3IGxvZyB3aXRoIHRoZSBzYW1lIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogKipFeGFtcGxlOioqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBzZWFsZWQgPSBhZHplKHsgdXNlX2Vtb2ppOiB0cnVlIH0pLm5zKCdzZWFsZWQnKS5sYWJlbCgnc2VhbGVkLWxhYmVsJykuc2VhbCgpO1xuICogc2VhbGVkKCkuc3VjY2VzcygnU3VjY2VzcyEnKTsgLy8gLT4gcHJpbnRzIFwiI3NlYWxlZCBbc2VhbGVkLWxhYmVsXSBTdWNjZXNzIVwiXG4gKiBzZWFsZWQoKS5sb2coJ0Fub3RoZXIgbG9nLicpOyAvLyAtPiBwcmludHMgXCIjc2VhbGVkIFtzZWFsZWQtbGFiZWxdIEFub3RoZXIgbG9nLlwiXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlYWwodGhpczogTG9nKTogKCkgPT4gTG9nIHtcbiAgLy8gUnVuIHRoZSBtb2RpZmllciBxdWV1ZSB0byBhcHBseSB0aGVpciByZXN1bHRzXG4gIHJ1bk1vZGlmaWVyUXVldWUodGhpcy5tb2RpZmllclF1ZXVlKTtcbiAgLy8gQ2xlYXIgdGhlIHF1ZXVlIGFzIHRvIG5vdCByZXBlYXQgdGhlIGFjdGlvbnMgd2hlbiB0aGUgc3Vic2VxdWVudCBsb2dzIGFyZSB0ZXJtaW5hdGVkLlxuICB0aGlzLm1vZGlmaWVyUXVldWUgPSBbXTtcbiAgcmV0dXJuICgpID0+ICh7IC4uLnRoaXMgfSk7XG59XG5cbi8qKlxuICogRm9sbG93aW5nIHRoZSBNREMgKE1hcHBlZCBEaWFnbm9zdGljIENvbnRleHQpIHBhdHRlcm4gdGhpcyBtZXRob2QgZW5hYmxlcyB5b3UgdG8gY3JlYXRlXG4gKiBhIHRocmVhZCBmb3IgYWRkaW5nIGNvbnRleHQgZnJvbSBkaWZmZXJlbnQgc2NvcGVzIGJlZm9yZSBmaW5hbGx5IHRlcm1pbmF0aW5nIHRoZSBsb2cuXG4gKlxuICogSW4gb3JkZXIgdG8gY3JlYXRlIGEgdGhyZWFkLCB0aGlzIGxvZyBtdXN0IHNwZWNpZnkgYSBsYWJlbCB0aGF0IHdpbGwgYmUgdXNlZCB0byBsaW5rIHRoZVxuICogY29udGV4dCBhbmQgeW91ciBlbnZpcm9ubWVudCBtdXN0IGhhdmUgYSAqKnNoZWQqKiBjcmVhdGVkLlxuICpcbiAqICoqRXhhbXBsZToqKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgYWR6ZSwgY3JlYXRlU2hlZCB9IGZyb20gJ2FkemUnO1xuICpcbiAqIGNvbnN0IHNoZWQgPSBjcmVhdGVTaGVkKCk7XG4gKlxuICogLy8gQ3JlYXRpbmcgYSBzaGVkIGxpc3RlbmVyIGlzIGEgZ3JlYXQgd2F5IHRvIGdldCBtZXRhIGRhdGEgZnJvbSB5b3VyXG4gKiAvLyB0aHJlYWRlZCBsb2dzIHRvIHdyaXRlIHRvIGRpc2sgb3IgcGFzcyB0byBhbm90aGVyIHBsdWdpbiwgbGlicmFyeSxcbiAqIC8vIG9yIHNlcnZpY2UuXG4gKiBzaGVkLmFkZExpc3RlbmVyKFsxLDIsMyw0LDUsNiw3LDhdLCAobG9nKSA9PiB7XG4gKiAgIC8vIERvIHNvbWV0aGluZyB3aXRoIGBsb2cuY29udGV4dC5hZGRlZGAgb3IgYGxvZy5jb250ZXh0LnN1YnRyYWN0ZWRgLlxuICogfSk7XG4gKlxuICogZnVuY3Rpb24gYWRkKGEsIGIpIHtcbiAqICAgY29uc3QgYW5zd2VyID0gYSArIGI7XG4gKiAgIGFkemUoKS5sYWJlbCgnZm9vJykudGhyZWFkKCdhZGRlZCcsIHsgYSwgYiwgYW5zd2VyIH0pO1xuICogICByZXR1cm4gYW5zd2VyO1xuICogfVxuICpcbiAqIGZ1bmN0aW9uIHN1YnRyYWN0KHgsIHkpIHtcbiAqICAgY29uc3QgYW5zd2VyID0geCAtIHk7XG4gKiAgIGFkemUoKS5sYWJlbCgnZm9vJykudGhyZWFkKCdzdWJ0cmFjdGVkJywgeyB4LCB5LCBhbnN3ZXIgfSk7XG4gKiAgIHJldHVybiBhbnN3ZXI7XG4gKiB9XG4gKlxuICogYWRkKDEsIDIpO1xuICogc3VidHJhY3QoNCwgMyk7XG4gKlxuICogYWR6ZSgpLmxhYmVsKCdmb28nKS5kdW1wKCkuaW5mbygnUmVzdWx0cyBmcm9tIG91ciB0aHJlYWQnKTtcbiAqIC8vIEluZm8gPT4gUmVzdWx0cyBmcm9tIG91ciB0aHJlYWQsIHsgYTogMSwgYjogMiwgYW5zd2VyOiAzIH0sIHsgeDogNCwgeTogMywgYW5zd2VyOiAxIH1cbiAqXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocmVhZCh0aGlzOiBMb2csIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gIC8vIENoZWNrIGlmIHRoZSBsb2cgaGFzIGEgbGFiZWwuIElmIG5vdCwgY29uc29sZS53YXJuIHRoZSB1c2VyLlxuICAvLyBJZiB0aGUgbG9nIGhhcyBhIGxhYmVsLCBhdHRhY2ggdGhlIGNvbnRleHQgdG8gdGhlIGxhYmVsLlxuICBydW5Nb2RpZmllclF1ZXVlKHRoaXMubW9kaWZpZXJRdWV1ZSk7XG4gIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgdGhpcy5sYWJlbFZhbC5jb250ZXh0W2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ1RocmVhZCBjb250ZXh0IHdhcyBub3QgYWRkZWQhIFRocmVhZHMgbXVzdCBoYXZlIGEgbGFiZWwuJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbG9zZXMgYSB0aHJlYWQgYXNzaWduZWQgdG8gdGhlIGxvZyBieSBjbGVhcmluZyB0aGUgY29udGV4dCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZSh0aGlzOiBMb2cpOiB2b2lkIHtcbiAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICB0aGlzLmxhYmVsVmFsLmNvbnRleHQgPSB7fTtcbiAgfVxufVxuXG4vKipcbiAqIEFsaWFzIGZvciBjb25zb2xlLmNsZWFyKCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcih0aGlzOiBMb2cpOiB2b2lkIHtcbiAgY29uc29sZS5jbGVhcigpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciBjbGVhcigpIHdoaWNoIGlzIGFuIGFsaWFzIGZvciBjb25zb2xlLmNsZWFyKCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbHIodGhpczogTG9nKTogdm9pZCB7XG4gIHRoaXMuY2xlYXIoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kIHRoZSBzcGVjaWZpZWQgbG9nIGxldmVsIG5hbWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dNZXRob2QobGV2ZWxOYW1lOiBzdHJpbmcpOiBMb2dGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhpczogTG9nLCAuLi5hcmdzOiBhbnlbXSk6IFRlcm1pbmF0ZWRMb2cge1xuICAgIHJldHVybiBleGVjdXRpb25QaXBlbGluZShcbiAgICAgIHRoaXMsXG4gICAgICB0aGlzLmNmZyxcbiAgICAgIGdldERlZmluaXRpb24odGhpcy5jZmcsICdsb2dfbGV2ZWxzJywgbGV2ZWxOYW1lKSxcbiAgICAgIGFyZ3NcbiAgICApO1xuICB9O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHRlcm1pbmF0aW5nIGxvZyBtZXRob2QgdGhhdCBlbmFibGVzIHRoZSB1c2VyIHRvIHNwZWNpZnkgYSBjdXN0b21cbiAqIGxvZyBsZXZlbCBieSBrZXkgYXMgdGhlIGZvcm1hdCBmb3IgdGhlIGxvZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbU1ldGhvZCgpOiBDdXN0b21Mb2dGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiAoXG4gICAgdGhpczogTG9nLFxuICAgIGxldmVsTmFtZTogc3RyaW5nLFxuICAgIC4uLmFyZ3M6IGFueVtdXG4gICk6IFRlcm1pbmF0ZWRMb2cge1xuICAgIHJldHVybiBleGVjdXRpb25QaXBlbGluZShcbiAgICAgIHRoaXMsXG4gICAgICB0aGlzLmNmZyxcbiAgICAgIGdldERlZmluaXRpb24odGhpcy5jZmcsICdjdXN0b21fbGV2ZWxzJywgbGV2ZWxOYW1lKSxcbiAgICAgIGFyZ3NcbiAgICApO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxvZyBsZXZlbCBkZWZpbml0aW9uIGZyb20gdGhlIGxvZyBjb25maWd1cmF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXREZWZpbml0aW9uKFxuICBjZmc6IERlZmF1bHRzLFxuICB0eXBlOiAnbG9nX2xldmVscycgfCAnY3VzdG9tX2xldmVscycsXG4gIGxldmVsTmFtZTogc3RyaW5nXG4pOiBMb2dMZXZlbERlZmluaXRpb24gfCB1bmRlZmluZWQge1xuICBjb25zdCBzaGVkID0gZW52LiRzaGVkO1xuICBsZXQgZGVmaW5pdGlvbiA9IHVuZGVmaW5lZDtcblxuICBpZiAoc2hlZEV4aXN0cyhzaGVkKSAmJiBzaGVkLmhhc092ZXJyaWRlcykge1xuICAgIGRlZmluaXRpb24gPSBzaGVkLm92ZXJyaWRlcz8uW3R5cGVdPy5bbGV2ZWxOYW1lXTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbml0aW9uID0gY2ZnW3R5cGVdW2xldmVsTmFtZV07XG4gIH1cblxuICByZXR1cm4gZGVmaW5pdGlvbiA/IHsgLi4uZGVmaW5pdGlvbiwgbGV2ZWxOYW1lIH0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVGhlIHByaW1hcnkgZXhlY3V0aW9uIHBpcGVsaW5lIGZvciB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kcy5cbiAqL1xuZnVuY3Rpb24gZXhlY3V0aW9uUGlwZWxpbmUoXG4gIGxvZzogTG9nLFxuICBjZmc6IERlZmF1bHRzLFxuICBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCxcbiAgYXJnczogYW55W11cbik6IFRlcm1pbmF0ZWRMb2cge1xuICBpZiAoZGVmICYmIGFsbG93ZWQoY2ZnLCBkZWYpKSB7XG4gICAgLy8gQXBwbHkgbW9kaWZpZXJzIGluIHRoZSBwcm9wZXIgb3JkZXIuXG4gICAgcnVuTW9kaWZpZXJRdWV1ZShsb2cubW9kaWZpZXJRdWV1ZSk7XG5cbiAgICAvLyBDaGVjayB0aGUgdGVzdCBtb2RpZmllcnMuXG4gICAgaWYgKGV2YWxQYXNzZXMobG9nKSkge1xuICAgICAgLy8gU2F2ZSB0ZXJtaW5hdG9yIHByb3BzIGZvciByZWNhbGwgcHVycG9zZXNcbiAgICAgIGNvbnN0IGZpbmFsX2xvZyA9IGZpbmFsaXplTG9nKGxvZywgZGVmLCBhcmdzKTtcblxuICAgICAgLy8gSWYgYSBnbG9iYWwgY29udGV4dCBleGlzdHMsIGNoZWNrIGlmIHRoaXMgbG9nIGlzIGFsbG93ZWQuXG4gICAgICBjb25zdCBnbG9iYWxseV9hbGxvd2VkID0gZW52LiRzaGVkPy5sb2dHbG9iYWxseUFsbG93ZWQoZmluYWxfbG9nKSA/PyB0cnVlO1xuXG4gICAgICBpZiAoZ2xvYmFsbHlfYWxsb3dlZCkge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGxvZ1xuICAgICAgICBjb25zdCByZW5kZXIgPSBwcmludChmaW5hbF9sb2csIGRlZiwgYXJncyk7XG5cbiAgICAgICAgLy8gRmlyZSBsb2cgZXZlbnRzXG4gICAgICAgIHN0b3JlKGZpbmFsX2xvZyk7XG4gICAgICAgIGZpcmVMaXN0ZW5lcnMoZmluYWxfbG9nKTtcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHRlcm1pbmF0ZWQgbG9nIG9iamVjdCBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgICAgICByZXR1cm4geyBsb2c6IGZpbmFsX2xvZywgcmVuZGVyIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSB0ZXJtaW5hdGVkIGxvZyBvYmplY3QgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgcmV0dXJuIHsgbG9nLCByZW5kZXI6IG51bGwgfTtcbn1cblxuLyoqXG4gKiBFeGVjdXRlcyBhbGwgb2YgdGhlIGxvZyBtb2RpZmllciBmdW5jdGlvbnMgd2l0aGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gcnVuTW9kaWZpZXJRdWV1ZShxdWV1ZTogQXJyYXk8KCkgPT4gdm9pZD4pOiB2b2lkIHtcbiAgcXVldWUuZm9yRWFjaCgoZnVuYykgPT4gZnVuYygpKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG4gKiBMb2cgRXZlbnRzXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBTdG9yZXMgdGhpcyBsb2cgaW4gdGhlIFNoZWQgaWYgdGhlIFNoZWQgZXhpc3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmUobG9nOiBGaW5hbExvZyk6IHZvaWQge1xuICBjb25zdCBzaGVkID0gZW52LiRzaGVkO1xuICBpZiAoc2hlZEV4aXN0cyhzaGVkKSkge1xuICAgIHNoZWQuc3RvcmUobG9nKTtcbiAgfVxufVxuXG4vKipcbiAqIEZpcmVzIGxpc3RlbmVycyBmb3IgdGhpcyBsb2cgaW5zdGFuY2UgaWYgYSBTaGVkIGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnMobG9nOiBGaW5hbExvZyk6IHZvaWQge1xuICBjb25zdCBzaGVkID0gZW52LiRzaGVkO1xuICBpZiAoc2hlZEV4aXN0cyhzaGVkKSkge1xuICAgIHNoZWQuZmlyZUxpc3RlbmVycyhsb2cpO1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuICogTG9nIEhlbHBlcnNcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiBmaW5hbGl6ZUxvZyhsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGFyZ3M6IGFueVtdKTogRmluYWxMb2cge1xuICByZXR1cm4gbXV0YXRlUHJvcHM8RmluYWxMb2c+KGxvZywgW1xuICAgIFsnYXJncycsIGFyZ3NdLFxuICAgIFsnbGV2ZWwnLCBkZWYubGV2ZWxdLFxuICAgIFsnZGVmaW5pdGlvbicsIGRlZl0sXG4gIF0pO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi91dGlsJztcbiIsImltcG9ydCB7IExvZ1RpbWVzdGFtcCwgRGVmYXVsdHMsIExvZ0xldmVscywgTGV2ZWxGaWx0ZXIgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGVudiwgZW52SXNXaW5kb3cgfSBmcm9tICcuLi9nbG9iYWwnO1xuXG4vKipcbiAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgdGhlIHByb3ZpZGVkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxDYXBzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIHByb3BlcnR5IG11dGF0aW9ucyB0byB0aGUgcHJvdmlkZWQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRlUHJvcHM8Tz4ob2JqOiBhbnksIG11dGF0aW9uczogQXJyYXk8W3N0cmluZywgYW55XT4pOiBPIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKFtwcm9wLCB2YWxdKSA9PiAob2JqW3Byb3BdID0gdmFsKSk7XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIHlvdXIgbG9nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZXN0YW1wKCk6IExvZ1RpbWVzdGFtcCB7XG4gIGNvbnN0IHVuaXhNaWxsaSA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1bml4TWlsbGkpO1xuICBjb25zdCB1dGMgPSBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gIHJldHVybiB7IHVuaXhNaWxsaSwgdXRjIH07XG59XG5cbi8qKlxuICogR2V0cyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoUGFyYW1zKCk6IFVSTFNlYXJjaFBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gIGlmIChlbnZJc1dpbmRvdyhlbnYpKSB7XG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoZW52LmRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBsZXZlbCB2YWx1ZSBvZiAnKicgdG8gYW4gYXJyYXkgb2YgbnVtYmVycyB1cCB0byB0aGUgaGlnaGVzdFxuICogdmFsdWUgZGVmaW5lZCBieSB0aGUgdXNlciBjb25maWd1cmF0aW9uLiBJZiBsZXZlbHMgaXMgYWxyZWFkeSBhIG51bWJlciBhcnJheVxuICogaXQgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TGV2ZWxzKFxuICBjZmc6IERlZmF1bHRzIHwgbnVsbCxcbiAgbGV2ZWxzOiBMZXZlbEZpbHRlclxuKTogbnVtYmVyW10ge1xuICBpZiAoaXNTdHJpbmcobGV2ZWxzKSkge1xuICAgIGlmIChsZXZlbHMgPT09ICcqJykge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFycmF5T2ZOdW1iZXJzKDAsIGdldE1heExldmVsKGNmZykpO1xuICAgIH1cbiAgICBpZiAoaXNSYW5nZShsZXZlbHMpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQXJyYXlPZk51bWJlcnMoLi4ucGFyc2VSYW5nZShsZXZlbHMpKTtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1RoZSBwcm92aWRlZCBsZXZlbCBmaWx0ZXIgc3RyaW5nIGlzIGludmFsaWQuIFRoaXMgd2lsbCBjYXVzZSBsb2dzIHRvIHN0b3AgcHJpbnRpbmcuJ1xuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNBcnJheShsZXZlbHMpKSB7XG4gICAgcmV0dXJuIGxldmVscztcbiAgfVxuICByZXR1cm4gW10gYXMgbnVtYmVyW107XG59XG5cbi8qKlxuICogVHlwZSBHdWFyZCB0aGF0IHZhbGlkYXRlcyB0aGF0IGEgZ2l2ZW4gc3RyaW5nIHJlcHJlc2VudHMgYVxuICogcmFuZ2Ugb2YgbnVtYmVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmFuZ2UodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdmFscyA9IHZhbC5zcGxpdCgnLScpO1xuICBjb25zdCBbbG93LCBoaWdoXSA9IHZhbHM7XG4gIHJldHVybiB2YWxzLmxlbmd0aCA9PT0gMiAmJiBOdW1iZXIobG93KSAhPT0gTmFOICYmIE51bWJlcihoaWdoKSAhPT0gTmFOO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGhpZ2hlc3QgbGV2ZWwgZnJvbSB0aGUgcHJvdmlkZWQgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1heExldmVsKGNmZzogRGVmYXVsdHMgfCBudWxsKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWF4KC4uLls4LCAuLi5sZXZlbHNGcm9tQ29uZmlnKGNmZz8uY3VzdG9tX2xldmVscyA/PyB7fSldKTtcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHJhbmdlIHN0cmluZyBpbnRvIGEgdHVwbGUgb2YgbnVtYmVycyBjb250YWluaW5nIGxvdyBhbmQgaGlnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmFuZ2UocmFuZ2U6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBbbG93LCBoaWdoXSA9IHJhbmdlLnNwbGl0KCctJyk7XG4gIHJldHVybiBbTnVtYmVyKGxvdyksIE51bWJlcihoaWdoKV07XG59XG5cbi8qKlxuICogR2V0IGFsbCBsZXZlbCB2YWx1ZXMgZnJvbSBhIGNvbmZpZyBvZiB0eXBlIExvZ0xldmVscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxldmVsc0Zyb21Db25maWcoXG4gIGx2bHM6IExvZ0xldmVscyB8IFBhcnRpYWw8TG9nTGV2ZWxzPlxuKTogbnVtYmVyW10ge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhsdmxzKVxuICAgIC5tYXAoKGx2bCkgPT4gbHZsPy5sZXZlbClcbiAgICAuZmlsdGVyKGlzRGVmaW5lZCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGFycmF5IG9mIG51bWJlciBjb250YWluaW5nIGV2ZXJ5IG51bWJlciBmcm9tIHRoZSBzdGFydCB2YWx1ZSB0byBlbmQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcnJheU9mTnVtYmVycyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlcltdIHtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgIGFyci5wdXNoKGkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbi8qKlxuICogVHlwZSBHdWFyZCB0byBjaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBTdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh2YWw6IGFueSk6IHZhbCBpcyBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogVHlwZSBHdWFyZCB0byBjaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gQXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbDogYW55KTogdmFsIGlzIFtdIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKTtcbn1cblxuLyoqXG4gKiBUeXBlIEd1YXJkIHRoYXQgdmFsaWRhdGVzIHRoYXQgdGhlIGdpdmVuIHZhbHVlIGlzIG5vdCB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQ8VD4odmFsOiBUIHwgdW5kZWZpbmVkKTogdmFsIGlzIFQge1xuICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
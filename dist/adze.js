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

	if (!Array.isArray(firstString)) {
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
;
/**
 * All of the user accessible methods that can be chained to
 * create a customized log.
 */

;
/**
 * The render value for a Log.
 */

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
/*! exports provided: Adze, LogFactory, Log, LogFunction, CustomLogFunction, Bundle, TerminatingMethods, TerminatingMethodKeys, LogRender, TerminatedLog, Shed, ListenerCallback, Listeners, ListenerLocations, ListenerData, Defaults, LogLevels, LogLevelDefinition, Filters, Configuration, ConsoleMethod, Label, ChalkStyles, HrTime, RecursivePartial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Adze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Adze */ "./src/_contracts/Adze.ts");
/* harmony import */ var _Adze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Adze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adze", function() { return _Adze__WEBPACK_IMPORTED_MODULE_0__["Adze"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFactory", function() { return _Adze__WEBPACK_IMPORTED_MODULE_0__["LogFactory"]; });

/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Log */ "./src/_contracts/Log.ts");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Log__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["Log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFunction", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["LogFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomLogFunction", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["CustomLogFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bundle", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["Bundle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminatingMethods", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["TerminatingMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminatingMethodKeys", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["TerminatingMethodKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogRender", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["LogRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminatedLog", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["TerminatedLog"]; });

/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shed */ "./src/_contracts/Shed.ts");
/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Shed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shed", function() { return _Shed__WEBPACK_IMPORTED_MODULE_2__["Shed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerCallback", function() { return _Shed__WEBPACK_IMPORTED_MODULE_2__["ListenerCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Listeners", function() { return _Shed__WEBPACK_IMPORTED_MODULE_2__["Listeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerLocations", function() { return _Shed__WEBPACK_IMPORTED_MODULE_2__["ListenerLocations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerData", function() { return _Shed__WEBPACK_IMPORTED_MODULE_2__["ListenerData"]; });

/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Configuration */ "./src/_contracts/Configuration.ts");
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Configuration__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Defaults", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_3__["Defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevels", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_3__["LogLevels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevelDefinition", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_3__["LogLevelDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_3__["Filters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleMethod", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_3__["ConsoleMethod"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/_contracts/Label.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Label__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_4__["Label"]; });

/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Styles */ "./src/_contracts/Styles.ts");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChalkStyles", function() { return _Styles__WEBPACK_IMPORTED_MODULE_5__["ChalkStyles"]; });

/* harmony import */ var _HrTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HrTime */ "./src/_contracts/HrTime.ts");
/* harmony import */ var _HrTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_HrTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrTime", function() { return _HrTime__WEBPACK_IMPORTED_MODULE_6__["HrTime"]; });

/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Utility */ "./src/_contracts/Utility.ts");
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Utility__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecursivePartial", function() { return _Utility__WEBPACK_IMPORTED_MODULE_7__["RecursivePartial"]; });










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

const defaults = {
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
      style: `padding-right: 50px; background: linear-gradient(to right, #fff, #d9dce0); color: #333435; border-color: #bfc1c5;`,
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
      style: `padding-right: ${_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '34' : '32'}px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
      terminal: ['bgRed', 'white'],
      method: 'info',
      emoji: '❌'
    },
    info: {
      level: 3,
      style: `padding-right: ${_global__WEBPACK_IMPORTED_MODULE_0__["isSafari"] ? '49' : '44'}px; background: linear-gradient(to right, #fff, #b2d7ff); color: #465464; border-color: #96b5d7;`,
      terminal: ['bgBlue', 'white'],
      method: 'info',
      emoji: '📬'
    },
    warn: {
      level: 2,
      style: `background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ${_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '34' : '44'}px; `,
      terminal: ['bgYellow', 'gray'],
      method: 'warn',
      emoji: '🔔'
    },
    error: {
      level: 1,
      style: `padding-right: ${_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '29' : '27'}px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
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
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./src/_defaults/defaults.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults__WEBPACK_IMPORTED_MODULE_0__["defaults"]; });



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
/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminators */ "./src/terminators/index.ts");
/* harmony import */ var _modifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers */ "./src/modifiers/index.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printers */ "./src/printers/index.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/events/index.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");
const defaultsDeep = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");






/**
 * The entry point for creating Adze logs. This factory method can be used directly or configuration
 * can be provided and the result can be assigned to a new variable. This allows for multiple
 * logging instances with different configurations.
 * 
 * --- Default levels ---
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

function adze(user_cfg = {}) {
  const cfg = defaultsDeep(user_cfg, _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"]);
  return {
    cfg,
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
    all: () => {},
    seal: _terminators__WEBPACK_IMPORTED_MODULE_0__["seal"],
    cache: _events__WEBPACK_IMPORTED_MODULE_3__["cache"],
    print: _printers__WEBPACK_IMPORTED_MODULE_2__["print"],
    fireListeners: _events__WEBPACK_IMPORTED_MODULE_3__["fireListeners"],
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
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./src/filters/index.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function bundle(log) {
  const bundle = [];
  return () => {
    let bundled_log = _objectSpread({}, log);

    bundled_log.all = curryBundle(bundled_log, bundle, _filters__WEBPACK_IMPORTED_MODULE_1__["all"]);
    bundle.push(bundled_log);
    return bundled_log;
  };
}
;

function curryBundle(ctxt, bundle, fn, ...args) {
  return () => {
    fn(ctxt, bundle, ...args);
  };
}

/***/ }),

/***/ "./src/events/events.ts":
/*!******************************!*\
  !*** ./src/events/events.ts ***!
  \******************************/
/*! exports provided: cache, fireListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireListeners", function() { return fireListeners; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shed */ "./src/shed.ts");


/**
 * Caches this log to the Shed if it exists.
 */

function cache(args) {
  if (Object(_shed__WEBPACK_IMPORTED_MODULE_1__["storeExists"])(_global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed)) {
    _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed.addToCache(this, args);
  }
}
/**
 * Fires listeners for this log instance if a Shed exists.
 */

function fireListeners(args) {
  if (Object(_shed__WEBPACK_IMPORTED_MODULE_1__["storeExists"])(_global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed)) {
    _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed.fireListeners(this, args);
  }
}

/***/ }),

/***/ "./src/events/index.ts":
/*!*****************************!*\
  !*** ./src/events/index.ts ***!
  \*****************************/
/*! exports provided: cache, fireListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events/events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fireListeners", function() { return _events__WEBPACK_IMPORTED_MODULE_0__["fireListeners"]; });



/***/ }),

/***/ "./src/filters/filters.ts":
/*!********************************!*\
  !*** ./src/filters/filters.ts ***!
  \********************************/
/*! exports provided: all */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
function all(ctxt, bundle = []) {
  bundle.forEach(log => {
    const render = log.render;

    if (render) {
      const [method, args] = render;
      console[method](...args);
    }
  });
}

/***/ }),

/***/ "./src/filters/index.ts":
/*!******************************!*\
  !*** ./src/filters/index.ts ***!
  \******************************/
/*! exports provided: all */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ "./src/filters/filters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["all"]; });



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
const env = global ? global : window;
const isBrowser = typeof window !== 'undefined';
const envIsWindow = env => {
  return typeof window !== undefined;
};
let isChromeVar = false;
let isFirefoxVar = false;
let isSafariVar = false;

if (envIsWindow(env)) {
  var _env$navigator, _env$navigator2, _env$navigator3;

  isChromeVar = (env === null || env === void 0 ? void 0 : (_env$navigator = env.navigator) === null || _env$navigator === void 0 ? void 0 : _env$navigator.userAgent.indexOf("Chrome")) > -1;
  isFirefoxVar = (env === null || env === void 0 ? void 0 : (_env$navigator2 = env.navigator) === null || _env$navigator2 === void 0 ? void 0 : _env$navigator2.userAgent.indexOf("Firefox")) > -1;
  isSafariVar = (env === null || env === void 0 ? void 0 : (_env$navigator3 = env.navigator) === null || _env$navigator3 === void 0 ? void 0 : _env$navigator3.userAgent.indexOf("Safari")) > -1 && !isChromeVar;
}

const isChrome = isChromeVar;
const isFirefox = isFirefoxVar;
const isSafari = isSafariVar;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: adze, defaults, Log, LogFunction, bundle */
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

/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults__WEBPACK_IMPORTED_MODULE_3__["defaults"]; });







/***/ }),

/***/ "./src/label/index.ts":
/*!****************************!*\
  !*** ./src/label/index.ts ***!
  \****************************/
/*! exports provided: getLabel, addLabel, hasLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label */ "./src/label/label.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_0__["getLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_0__["addLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_0__["hasLabel"]; });



/***/ }),

/***/ "./src/label/label.ts":
/*!****************************!*\
  !*** ./src/label/label.ts ***!
  \****************************/
/*! exports provided: getLabel, addLabel, hasLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return getLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLabel", function() { return addLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLabel", function() { return hasLabel; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shed */ "./src/shed.ts");


function getLabel(name) {
  if (Object(_shed__WEBPACK_IMPORTED_MODULE_1__["storeExists"])(_global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed)) {
    return _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed.labels.get(name);
  }
}
function addLabel(label) {
  if (Object(_shed__WEBPACK_IMPORTED_MODULE_1__["storeExists"])(_global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed) && !hasLabel(label.name)) {
    _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed.labels.set(label.name, label);
  }

  return label;
}
function hasLabel(name) {
  var _env$$shed;

  return (_env$$shed = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : _env$$shed.labels.has(name);
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

function count() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal) {
      var _this$labelVal$count;

      this.labelVal.count = (_this$labelVal$count = this.labelVal.count) !== null && _this$labelVal$count !== void 0 ? _this$labelVal$count : 0;
      this.labelVal.count += 1;
    }
  });
}
function countReset() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal) {
      this.labelVal.count = 0;
    }
  });
}
function countClear() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal) {
      this.labelVal.count = undefined;
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
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");


function dir() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    this.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printDir"];
  });
}
function dirxml() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    this.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printDirxml"];
  });
}
function table() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    this.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printTable"];
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
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");


function group() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    this.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printGroup"];
  });
}
function groupCollapsed() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    this.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printGroupCollapsed"];
  });
}
function groupEnd() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    this.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printGroupEnd"];
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
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");



function label(name) {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["prependModifier"])(this, () => {
    var _getLabel;

    this.labelVal = Object(_label__WEBPACK_IMPORTED_MODULE_0__["addLabel"])((_getLabel = Object(_label__WEBPACK_IMPORTED_MODULE_0__["getLabel"])(name)) !== null && _getLabel !== void 0 ? _getLabel : {
      name
    });
  });
}
function namespace(ns) {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, () => {
    this.namespaceVal = ns;
  });
}
function ns(ns) {
  return this.namespace(ns);
}
function trace() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, () => {
    this.printer = _printers__WEBPACK_IMPORTED_MODULE_2__["printTrace"];
  });
}

/***/ }),

/***/ "./src/modifiers/index.ts":
/*!********************************!*\
  !*** ./src/modifiers/index.ts ***!
  \********************************/
/*! exports provided: time, timeNow, timeEnd, count, countReset, dir, dirxml, table, group, groupCollapsed, groupEnd, label, namespace, ns, trace, modifier, prependModifier, assert, test */
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
function modifier(context, func) {
  context.modifierQueue = context.modifierQueue.concat([func]);
  return context;
}
function prependModifier(context, func) {
  context.modifierQueue = [func].concat(context.modifierQueue);
  return context;
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
 // Prints log warning that the assertion failed if assertion is false.

function assert(assertion) {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    this.assertion = assertion;
  });
} // Non-standard. Allows log to print if expression is true.

function test(expression) {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    this.expression = expression;
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
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
const hrtime = __webpack_require__(/*! browser-process-hrtime */ "./node_modules/browser-process-hrtime/index.js");


/**
 * Starts a timer associated with this log's *label*. This will do nothing if
 * this log has no label.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
 */

function time() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal) {
      this.labelVal.timeStart = hrtime();
    }
  });
}
/**
 * Modifies the log render to show the current high-resolution real time.
 * 
 * !! This is not a standard method. !!
 */

function timeNow() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    const time_now = formatTime(hrtime());
    this.labelVal ? this.labelVal.timeNow = time_now : this.timeNowVal = time_now;
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
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal) {
      this.labelVal.timeEllapsed = formatTime(hrtime(this.labelVal.timeStart));
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

function formatTime([sec, nano]) {
  return `${sec}s ${nano / 1000000}ms`;
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
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ "./src/printers/shared.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");


 // ------- PRINT METHODS -------- //

function printLog(def, use_emoji, args) {
  const [method, leader, style, meta] = [def.method, fLeader(def, args), this.cfg.base_style + def.style, fMeta(this)];
  const render_args = meta === '' ? [leader, style, ...args] : [leader, style, meta, ...args];
  return Object(_shared__WEBPACK_IMPORTED_MODULE_0__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_0__["applyRender"])(this, method, render_args));
}
function printGroup(def, use_emoji, args) {
  const partial_args = [fLeader(def, args), this.cfg.base_style + def.style];
  const render_args = typeof args[0] === "string" ? [...partial_args, args[0]] : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_0__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_0__["applyRender"])(this, 'group', render_args));
}
function printGroupCollapsed(def, use_emoji, args) {
  const partial_args = [fLeader(def, args), this.cfg.base_style + def.style];
  const render_args = typeof args[0] === "string" ? [...partial_args, args[0]] : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_0__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_0__["applyRender"])(this, 'groupCollapsed', render_args));
} // ------- PRINT FORMATTERS -------- //

function fLeader(def, args) {
  return ` %c${fEmoji(def)} ${fName(def.levelName)}(${args.length})`;
}

function fEmoji(def) {
  var _env$$shed, _env$$shed$cfg;

  return ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_1__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$cfg = _env$$shed.cfg) === null || _env$$shed$cfg === void 0 ? void 0 : _env$$shed$cfg.use_emoji) === true ? ` ${def.emoji}` : '';
}

function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_2__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}

function fMeta(ctxt) {
  return `${fNamespace(ctxt)}${fLabel(ctxt)}${fTime(ctxt)}${fCount(ctxt)}`;
}

function fTime(ctxt) {
  var _ref, _ctxt$labelVal$timeNo, _ctxt$labelVal, _ctxt$labelVal2, _env$$shed2, _env$$shed2$cfg;

  const label_txt = `${(_ref = (_ctxt$labelVal$timeNo = (_ctxt$labelVal = ctxt.labelVal) === null || _ctxt$labelVal === void 0 ? void 0 : _ctxt$labelVal.timeNow) !== null && _ctxt$labelVal$timeNo !== void 0 ? _ctxt$labelVal$timeNo : (_ctxt$labelVal2 = ctxt.labelVal) === null || _ctxt$labelVal2 === void 0 ? void 0 : _ctxt$labelVal2.timeEllapsed) !== null && _ref !== void 0 ? _ref : ''}`;
  return label_txt !== '' ? ` (${((_env$$shed2 = _global__WEBPACK_IMPORTED_MODULE_1__["env"].$shed) === null || _env$$shed2 === void 0 ? void 0 : (_env$$shed2$cfg = _env$$shed2.cfg) === null || _env$$shed2$cfg === void 0 ? void 0 : _env$$shed2$cfg.use_emoji) ? '⏱' : ''}${label_txt}) ` : '';
}

function fCount(ctxt) {
  var _ctxt$labelVal3;

  const count = (_ctxt$labelVal3 = ctxt.labelVal) === null || _ctxt$labelVal3 === void 0 ? void 0 : _ctxt$labelVal3.count;
  return count !== undefined ? `(Count: ${count})` : '';
}

function fNamespace(ctxt) {
  return ctxt.namespaceVal ? `#${ctxt.namespaceVal} ` : '';
}

function fLabel(ctxt) {
  return ctxt.labelVal ? `[${ctxt.labelVal.name}] ` : '';
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





const printLog = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printLog"] : _node__WEBPACK_IMPORTED_MODULE_2__["printLog"];
const printGroup = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printGroup"] : _node__WEBPACK_IMPORTED_MODULE_2__["printGroup"];
const printGroupCollapsed = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printGroupCollapsed"] : _node__WEBPACK_IMPORTED_MODULE_2__["printGroupCollapsed"];


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
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/printers/shared.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");



 // ------- PRINT METHODS -------- //

function printLog(def, use_emoji, args) {
  const [method, leader, meta] = [def.method, fLeader(def, use_emoji, args), fMeta(this, use_emoji)];
  const render_args = meta === '' ? [leader, ...args] : [leader, meta, ...args];
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(this, method, render_args));
}
function printGroup(def, use_emoji, args) {
  const render_args = setupPrintGroup(def, use_emoji, args);
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(this, 'group', render_args));
}
function printGroupCollapsed(def, use_emoji, args) {
  const render_args = setupPrintGroup(def, use_emoji, args);
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(this, 'groupCollapsed', render_args));
}

function setupPrintGroup(def, use_emoji, args) {
  const partial_args = [fLeader(def, use_emoji, args)];
  return typeof args[0] === "string" ? [...partial_args, args[0]] : partial_args;
} // ------- PRINT FORMATTERS -------- //


function fLeader(def, use_emoji, args) {
  const emoji = use_emoji ? fEmoji(def.emoji) : '';
  const padding = use_emoji ? 14 + emoji.length : 14;
  const padded_leader = addPadding(`${emoji} ${fName(def.levelName)}(${args.length})`, padding);
  return def.terminal.reduce((acc, style) => {
    return chalk__WEBPACK_IMPORTED_MODULE_0__[style](acc);
  }, padded_leader);
}

function addPadding(str, len) {
  const diff = len - str.length;
  let padded = str;

  for (let i = 0; i <= diff; i += 1) {
    padded += ' ';
  }

  return padded;
}

function fEmoji(emoji) {
  return ` ${emoji}`;
}

function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_3__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}

function fMeta(ctxt, use_emoji) {
  return `${fNamespace(ctxt)}${fLabel(ctxt)}${fTime(ctxt, use_emoji)}${fCount(ctxt)}`;
}

function fTime(ctxt, use_emoji) {
  var _ref, _ctxt$timeNowVal, _ctxt$labelVal, _env$$shed, _env$$shed$cfg;

  const label_txt = `${(_ref = (_ctxt$timeNowVal = ctxt.timeNowVal) !== null && _ctxt$timeNowVal !== void 0 ? _ctxt$timeNowVal : (_ctxt$labelVal = ctxt.labelVal) === null || _ctxt$labelVal === void 0 ? void 0 : _ctxt$labelVal.timeEllapsed) !== null && _ref !== void 0 ? _ref : ''}`;
  return label_txt !== '' ? `(${((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$cfg = _env$$shed.cfg) === null || _env$$shed$cfg === void 0 ? void 0 : _env$$shed$cfg.use_emoji) || use_emoji ? '⏱' : ''}${label_txt}) ` : '';
}

function fCount(ctxt) {
  var _ctxt$labelVal2;

  const count = (_ctxt$labelVal2 = ctxt.labelVal) === null || _ctxt$labelVal2 === void 0 ? void 0 : _ctxt$labelVal2.count;
  return count !== undefined ? `(Count: ${count})` : '';
}

function fNamespace(ctxt) {
  return ctxt.namespaceVal ? `#${ctxt.namespaceVal} ` : '';
}

function fLabel(ctxt) {
  return ctxt.labelVal ? `[${ctxt.labelVal.name}] ` : '';
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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
 // ------- PRINT ENTRY -------- //

function print(def, args) {
  var _env$$shed, _env$$shed$cfg;

  const use_emoji = ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$cfg = _env$$shed.cfg) === null || _env$$shed$cfg === void 0 ? void 0 : _env$$shed$cfg.use_emoji) === true || this.cfg.use_emoji === true;
  return this.printer(def, use_emoji, args);
} // ------- PRINT METHODS -------- //

function printGroupEnd(def, use_emoji, args) {
  return toConsole(applyRender(this, 'groupEnd', []));
}
function printTable(def, use_emoji, args) {
  return toConsole(applyRender(this, 'table', args), false);
}
function printDir(def, use_emoji, args) {
  return toConsole(applyRender(this, 'dir', args), false);
}
function printDirxml(def, use_emoji, args) {
  return toConsole(applyRender(this, 'dirxml', args), false);
}
function printTrace(def, use_emoji, args) {
  return toConsole(applyRender(this, 'trace', args));
} // ------ Print to the console ------- //

function applyRender(ctxt, method, args) {
  ctxt.render = [method, args];
  return ctxt.render;
}
function toConsole(render, spread = true) {
  const [method, args] = render;

  if (_global__WEBPACK_IMPORTED_MODULE_0__["env"].ADZE_ENV !== 'dev') {
    if (spread) {
      console[method](...args);
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
/*! exports provided: storeExists, createShed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeExists", function() { return storeExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShed", function() { return createShed; });
function storeExists(store) {
  return store !== undefined;
}
function createShed(config) {} // const cfg: Defaults = defaultsDeep(config, defaults);
// env.$shed = {
//   cfg,
//   cache: [],
//   labels: new Map(),
//   id_counter: -1,
//   listeners: initListenerLocations(cfg),
//   assignId,
//   addToCache,
//   addListener,
//   removeListener,
//   fireListeners,
// };
// function initListenerLocations(cfg: Defaults):Listeners {
//   const listeners: Listeners = new Map();
//   Object.values(cfg.log_levels).forEach((def) => {
//     listeners.set(def.level, new Map());
//   });
//   return listeners;
// }
// function addToCache(this: Shed, log: Log, def: LogLevelDefinition, args: any[]):void {
//   if (this.cache.length < this.cfg.log_cache_size) {
//     this.cache = this.cache.concat([[log, def, args]]);
//   }
// }
// /**
//  * Takes an instance of a log and returns a boolean indicating whether or
//  * not it should be hidden according to the configured global filter rules. 
//  * @param log Instance of a log.
//  */
// public globalFilter(log: LogBrowser|LogNode):boolean {
//   if (this.all_hidden && log.namespace === null && log.Label === null) {
//     return true;
//   }
//   return this.globalFilterNamespace(log) || this.globalFilterLabel(log);
// }
// /**
//  * Takes an instance of a log and returns a boolean indicating whether or
//  * not it should be hidden according to the configured global **label** filter rules. 
//  * @param log Instance of a log.
//  */
// private globalFilterNamespace(log: LogBrowser|LogNode):boolean {
//   if (log.namespace) {
//     if (this.included_namespaces.includes(log.namespace)) {
//       return false;
//     }
//     if (this.excluded_namespaces.includes(log.namespace) || this.namespaces_hidden === true || this.all_hidden === true) {
//       return true;
//     }
//   }
//   return false;
// }
// /**
//  * Takes an instance of a log and returns a boolean indicating whether or
//  * not it should be hidden according to the configured global **namespace** filter rules. 
//  * @param log Instance of a log.
//  */
// private globalFilterLabel(log: LogBrowser|LogNode):boolean {
//   if (log.Label) {
//     if (this.included_labels.includes(log.Label.name)) {
//       return false;
//     }
//     if (this.excluded_labels.includes(log.Label.name) || this.labels_hidden === true || this.all_hidden === true) {
//       return true;
//     }
//   }
//   return false;
// }
// function addListener(this: Shed, levels: number[], cb: ListenerCallback):ListenerLocations {
//   return levels.map((lvl: number) => {
//     const level_map = this.listeners.get(lvl);
//     const id = this.assignId();
//     level_map?.set(id, cb);
//     this.listeners.set(lvl, level_map ?? new Map());
//     return [lvl, id];
//   });
// }
// function removeListener(this: Shed, locations: ListenerLocations):void {
//   locations.forEach(([lvl_id, id]) => {
//     const level = this.listeners.get(lvl_id);
//     level?.delete(id);
//   });
// }
// function fireListeners(this: Shed, ctxt: Log, def: LogLevelDefinition, args: any[]):void {
//   this.listeners.get(def.level)?.forEach(listener => {
//     listener({ ...ctxt, ...def, args });
//   });
// }
// function assignId(this: Shed):number {
//   this.id_counter = this.id_counter + 1; // Written for clarity
//   return this.id_counter;
// }

/***/ }),

/***/ "./src/terminators/index.ts":
/*!**********************************!*\
  !*** ./src/terminators/index.ts ***!
  \**********************************/
/*! exports provided: logMethod, customMethod, seal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminators */ "./src/terminators/terminators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logMethod", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customMethod", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["customMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["seal"]; });



/***/ }),

/***/ "./src/terminators/terminators.ts":
/*!****************************************!*\
  !*** ./src/terminators/terminators.ts ***!
  \****************************************/
/*! exports provided: seal, logMethod, customMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return seal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logMethod", function() { return logMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customMethod", function() { return customMethod; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * Take a Log and branch from it by providing new copied logs.
 */

function seal() {
  return _objectSpread({}, this);
}
/**
 * Generates a terminating log method the specified log level name.
 */

function logMethod(cfg, levelName) {
  return function (...args) {
    const definition = cfg.log_levels[levelName];

    const def = _objectSpread(_objectSpread({}, definition), {}, {
      levelName
    });

    if (allowed(cfg, def)) {
      return executionPipeline(this, def, args);
    }

    return {
      log: this,
      render: null
    };
  };
}
/**
 * Generates a terminating log method that enables the user to specify a custom
 * log level by key as the format for the log.
 */

function customMethod(cfg) {
  return function (levelName, ...args) {
    const definition = cfg.custom_levels[levelName];

    if (definition) {
      const def = _objectSpread(_objectSpread({}, definition), {}, {
        levelName
      });

      if (allowed(cfg, def)) {
        return executionPipeline(this, def, args);
      }
    }

    return {
      log: this,
      render: null
    };
  };
}
;
/**
 * The primary execution pipeline for terminating log methods.
 */

function executionPipeline(log, def, args) {
  // Apply modifiers in the proper order.
  log.modifierQueue.forEach(func => func()); // Check the test modifiers.

  if (evalPasses(log)) {
    // Save the args for recall purposes
    log.args = args;
    const render = log.print(def, args);
    log.cache(args);
    log.fireListeners(args);
    return {
      log,
      render
    };
  }

  return {
    log,
    render: null
  };
}
/*----------------------------------------*\
 * Terminator Conditions
\*----------------------------------------*/

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


function evalPasses(ctxt) {
  if (ctxt.assertion !== undefined && ctxt.expression !== undefined) {
    console.warn("You have declared both an assertion and test on the same log. Please only declare one or nefarious results may occur.");
    return true;
  }

  if (ctxt.assertion !== undefined) {
    return ctxt.assertion === false;
  }

  if (ctxt.expression !== undefined) {
    return ctxt.expression === true;
  }

  return true;
}
/**
 * Verify that this log is not in a test environment and prevent
 * termination if it is.
 */


function notTestEnv() {
  if (_global__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
    return true;
  }

  return (_global__WEBPACK_IMPORTED_MODULE_1__["env"] === null || _global__WEBPACK_IMPORTED_MODULE_1__["env"] === void 0 ? void 0 : _global__WEBPACK_IMPORTED_MODULE_1__["env"].ADZE_ENV) !== 'test';
}

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: initialCaps, applyMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["initialCaps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["applyMixins"]; });



/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! exports provided: initialCaps, applyMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return initialCaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return applyMixins; });
function initialCaps(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      var _Object$getOwnPropert;

      Object.defineProperty(derivedCtor.prototype, name, (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(baseCtor.prototype, name)) !== null && _Object$getOwnPropert !== void 0 ? _Object$getOwnPropert : '');
    });
  });
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wcm9jZXNzLWhydGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdXRpbC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVmYXVsdHNkZWVwL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9BZHplTGliLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL19jb250cmFjdHMvQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL19jb250cmFjdHMvTG9nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2NvbnRyYWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL19kZWZhdWx0cy9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL19kZWZhdWx0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2FkemUudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9idW5kbGUudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9ldmVudHMvZXZlbnRzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvZXZlbnRzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvZmlsdGVycy9maWx0ZXJzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvZmlsdGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbGFiZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9sYWJlbC9sYWJlbC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9jb3VudGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9mb3JtYXR0aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2dyb3VwaW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2lkZW50aWZ5aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL21vZGlmaWVyLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL3Rlc3RpbmcudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvdGltaW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvYnJvd3Nlci9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL2Jyb3dzZXIvcHJpbnRlcnMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL25vZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9ub2RlL3ByaW50ZXJzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvc2hhcmVkLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvc2hlZC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3Rlcm1pbmF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdGVybWluYXRvcnMvdGVybWluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy91dGlsL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdXRpbC91dGlsLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRzIiwibG9nX2xldmVsIiwibG9nX2NhY2hlX3NpemUiLCJ1c2VfZW1vamkiLCJiYXNlX3N0eWxlIiwiY3VzdG9tX2xldmVscyIsImxvZ19sZXZlbHMiLCJ2ZXJib3NlIiwibGV2ZWwiLCJzdHlsZSIsInRlcm1pbmFsIiwibWV0aG9kIiwiZW1vamkiLCJkZWJ1ZyIsImxvZyIsInN1Y2Nlc3MiLCJmYWlsIiwiaXNDaHJvbWUiLCJpbmZvIiwiaXNTYWZhcmkiLCJ3YXJuIiwiZXJyb3IiLCJhdHRlbnRpb24iLCJmaWx0ZXJzIiwiaGlkZUFsbCIsIm5hbWVzcGFjZSIsImV4Y2x1ZGUiLCJpbmNsdWRlIiwibGFiZWwiLCJkZWZhdWx0c0RlZXAiLCJyZXF1aXJlIiwiYWR6ZSIsInVzZXJfY2ZnIiwiY2ZnIiwidHJhY2VhYmxlIiwibW9kaWZpZXJRdWV1ZSIsInByaW50ZXIiLCJwcmludExvZyIsImxvZ01ldGhvZCIsImN1c3RvbSIsImN1c3RvbU1ldGhvZCIsImFsbCIsInNlYWwiLCJjYWNoZSIsInByaW50IiwiZmlyZUxpc3RlbmVycyIsImNvdW50IiwiY291bnRSZXNldCIsImRpciIsImRpcnhtbCIsInRhYmxlIiwiYXNzZXJ0IiwidGVzdCIsImdyb3VwIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsIm5zIiwidHJhY2UiLCJ0aW1lIiwidGltZU5vdyIsInRpbWVFbmQiLCJidW5kbGUiLCJidW5kbGVkX2xvZyIsImN1cnJ5QnVuZGxlIiwicHVzaCIsImN0eHQiLCJmbiIsImFyZ3MiLCJzdG9yZUV4aXN0cyIsImVudiIsIiRzaGVkIiwiYWRkVG9DYWNoZSIsImZvckVhY2giLCJyZW5kZXIiLCJjb25zb2xlIiwiZ2xvYmFsIiwid2luZG93IiwiaXNCcm93c2VyIiwiZW52SXNXaW5kb3ciLCJ1bmRlZmluZWQiLCJpc0Nocm9tZVZhciIsImlzRmlyZWZveFZhciIsImlzU2FmYXJpVmFyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsImlzRmlyZWZveCIsImdldExhYmVsIiwibmFtZSIsImxhYmVscyIsImdldCIsImFkZExhYmVsIiwiaGFzTGFiZWwiLCJzZXQiLCJoYXMiLCJtb2RpZmllciIsImxhYmVsVmFsIiwiY291bnRDbGVhciIsInByaW50RGlyIiwicHJpbnREaXJ4bWwiLCJwcmludFRhYmxlIiwicHJpbnRHcm91cCIsInByaW50R3JvdXBDb2xsYXBzZWQiLCJwcmludEdyb3VwRW5kIiwicHJlcGVuZE1vZGlmaWVyIiwibmFtZXNwYWNlVmFsIiwicHJpbnRUcmFjZSIsImNvbnRleHQiLCJmdW5jIiwiY29uY2F0IiwiYXNzZXJ0aW9uIiwiZXhwcmVzc2lvbiIsImhydGltZSIsInRpbWVTdGFydCIsInRpbWVfbm93IiwiZm9ybWF0VGltZSIsInRpbWVOb3dWYWwiLCJ0aW1lRWxsYXBzZWQiLCJzZWMiLCJuYW5vIiwiZGVmIiwibGVhZGVyIiwibWV0YSIsImZMZWFkZXIiLCJmTWV0YSIsInJlbmRlcl9hcmdzIiwidG9Db25zb2xlIiwiYXBwbHlSZW5kZXIiLCJwYXJ0aWFsX2FyZ3MiLCJmRW1vamkiLCJmTmFtZSIsImxldmVsTmFtZSIsImxlbmd0aCIsImluaXRpYWxDYXBzIiwiZk5hbWVzcGFjZSIsImZMYWJlbCIsImZUaW1lIiwiZkNvdW50IiwibGFiZWxfdHh0IiwicHJpbnRMb2dCcm93c2VyIiwicHJpbnRMb2dOb2RlIiwicHJpbnRHcm91cEJyb3dzZXIiLCJwcmludEdyb3VwTm9kZSIsInByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyIiwicHJpbnRHcm91cENvbGxhcHNlZE5vZGUiLCJzZXR1cFByaW50R3JvdXAiLCJwYWRkaW5nIiwicGFkZGVkX2xlYWRlciIsImFkZFBhZGRpbmciLCJyZWR1Y2UiLCJhY2MiLCJjaGFsayIsInN0ciIsImxlbiIsImRpZmYiLCJwYWRkZWQiLCJpIiwic3ByZWFkIiwiQURaRV9FTlYiLCJzdG9yZSIsImNyZWF0ZVNoZWQiLCJjb25maWciLCJkZWZpbml0aW9uIiwiYWxsb3dlZCIsImV4ZWN1dGlvblBpcGVsaW5lIiwiZXZhbFBhc3NlcyIsImxldmVsQWN0aXZlIiwibm90VGVzdEVudiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJhcHBseU1peGlucyIsImRlcml2ZWRDdG9yIiwiYmFzZUN0b3JzIiwiYmFzZUN0b3IiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvdG90eXBlIiwiZGVmaW5lUHJv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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRLFNBQVM7QUFDakMsZ0JBQWdCLFFBQVEsU0FBUztBQUNqQyxpQkFBaUIsT0FBTyxRQUFRO0FBQ2hDLGlCQUFpQixPQUFPLFFBQVE7QUFDaEMsZ0JBQWdCLFNBQVMsT0FBTztBQUNoQyxnQkFBZ0IsU0FBUyxPQUFPO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RTs7QUFFekU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxFQUFFLFVBQVUsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdDBCQSxvQkFBb0IsbUJBQU8sQ0FBQyxrRUFBZTtBQUMzQyxjQUFjLG1CQUFPLENBQUMsc0RBQVM7O0FBRS9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0RBQXdELHVDQUF1QztBQUMvRixzREFBc0QscUNBQXFDOztBQUUzRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7QUNoRkEsb0JBQW9CLG1CQUFPLENBQUMsa0VBQWU7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9GWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2Is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QUFJN0MsSUFBSSxDQUFDOEMsVUFBTCxLQUFvQmhDLFNBQXhCLEVBQW1DO0FBQ2pDLFdBQU9kLElBQUksQ0FBQzhDLFVBQUwsS0FBb0IsSUFBM0I7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7QUFJQSxTQUFTd0QsVUFBVCxHQUE4QjtBQUM1QixNQUFJMUYsaURBQUosRUFBZTtBQUNiLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sQ0FBQVIsMkNBQUcsU0FBSCxJQUFBQSwyQ0FBRyxXQUFILFlBQUFBLDJDQUFHLENBQUV5RixRQUFMLE1BQWtCLE1BQXpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDaEhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFPLFNBQVN6QixXQUFULENBQXFCbUIsR0FBckIsRUFBeUM7QUFDOUMsU0FBT0EsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxLQUE4QmpCLEdBQUcsQ0FBQ2tCLEtBQUosQ0FBVSxDQUFWLENBQXJDO0FBQ0Q7QUFFTSxTQUFTQyxXQUFULENBQXFCQyxXQUFyQixFQUF1Q0MsU0FBdkMsRUFBeUQ7QUFDOURBLFdBQVMsQ0FBQ3JHLE9BQVYsQ0FBa0JzRyxRQUFRLElBQUk7QUFDNUJDLFVBQU0sQ0FBQ0MsbUJBQVAsQ0FBMkJGLFFBQVEsQ0FBQ0csU0FBcEMsRUFBK0N6RyxPQUEvQyxDQUF1RGdCLElBQUksSUFBSTtBQUFBOztBQUM3RHVGLFlBQU0sQ0FBQ0csY0FBUCxDQUNFTixXQUFXLENBQUNLLFNBRGQsRUFFRXpGLElBRkYsMkJBR0V1RixNQUFNLENBQUNJLHdCQUFQLENBQWdDTCxRQUFRLENBQUNHLFNBQXpDLEVBQW9EekYsSUFBcEQsQ0FIRix5RUFHK0QsRUFIL0Q7QUFLRCxLQU5EO0FBT0QsR0FSRDtBQVNELEMiLCJmaWxlIjoiYWR6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFkemVMaWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWR6ZUxpYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgd3JhcEFuc2kxNiA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBjb2RlID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlske2NvZGUgKyBvZmZzZXR9bWA7XG59O1xuXG5jb25zdCB3cmFwQW5zaTI1NiA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBjb2RlID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTs1OyR7Y29kZX1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMTZtID0gKGZuLCBvZmZzZXQpID0+ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHJnYiA9IGZuKC4uLmFyZ3MpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07Mjske3JnYlswXX07JHtyZ2JbMV19OyR7cmdiWzJdfW1gO1xufTtcblxuY29uc3QgYW5zaTJhbnNpID0gbiA9PiBuO1xuY29uc3QgcmdiMnJnYiA9IChyLCBnLCBiKSA9PiBbciwgZywgYl07XG5cbmNvbnN0IHNldExhenlQcm9wZXJ0eSA9IChvYmplY3QsIHByb3BlcnR5LCBnZXQpID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIHtcblx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0KCk7XG5cblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCB7XG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9KTtcbn07XG5cbi8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnY29sb3ItY29udmVydCcpfSAqL1xubGV0IGNvbG9yQ29udmVydDtcbmNvbnN0IG1ha2VEeW5hbWljU3R5bGVzID0gKHdyYXAsIHRhcmdldFNwYWNlLCBpZGVudGl0eSwgaXNCYWNrZ3JvdW5kKSA9PiB7XG5cdGlmIChjb2xvckNvbnZlcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbG9yQ29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblx0fVxuXG5cdGNvbnN0IG9mZnNldCA9IGlzQmFja2dyb3VuZCA/IDEwIDogMDtcblx0Y29uc3Qgc3R5bGVzID0ge307XG5cblx0Zm9yIChjb25zdCBbc291cmNlU3BhY2UsIHN1aXRlXSBvZiBPYmplY3QuZW50cmllcyhjb2xvckNvbnZlcnQpKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHNvdXJjZVNwYWNlID09PSAnYW5zaTE2JyA/ICdhbnNpJyA6IHNvdXJjZVNwYWNlO1xuXHRcdGlmIChzb3VyY2VTcGFjZSA9PT0gdGFyZ2V0U3BhY2UpIHtcblx0XHRcdHN0eWxlc1tuYW1lXSA9IHdyYXAoaWRlbnRpdHksIG9mZnNldCk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc3VpdGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRzdHlsZXNbbmFtZV0gPSB3cmFwKHN1aXRlW3RhcmdldFNwYWNlXSwgb2Zmc2V0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufTtcblxuZnVuY3Rpb24gYXNzZW1ibGVTdHlsZXMoKSB7XG5cdGNvbnN0IGNvZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0bW9kaWZpZXI6IHtcblx0XHRcdHJlc2V0OiBbMCwgMF0sXG5cdFx0XHQvLyAyMSBpc24ndCB3aWRlbHkgc3VwcG9ydGVkIGFuZCAyMiBkb2VzIHRoZSBzYW1lIHRoaW5nXG5cdFx0XHRib2xkOiBbMSwgMjJdLFxuXHRcdFx0ZGltOiBbMiwgMjJdLFxuXHRcdFx0aXRhbGljOiBbMywgMjNdLFxuXHRcdFx0dW5kZXJsaW5lOiBbNCwgMjRdLFxuXHRcdFx0aW52ZXJzZTogWzcsIDI3XSxcblx0XHRcdGhpZGRlbjogWzgsIDI4XSxcblx0XHRcdHN0cmlrZXRocm91Z2g6IFs5LCAyOV1cblx0XHR9LFxuXHRcdGNvbG9yOiB7XG5cdFx0XHRibGFjazogWzMwLCAzOV0sXG5cdFx0XHRyZWQ6IFszMSwgMzldLFxuXHRcdFx0Z3JlZW46IFszMiwgMzldLFxuXHRcdFx0eWVsbG93OiBbMzMsIDM5XSxcblx0XHRcdGJsdWU6IFszNCwgMzldLFxuXHRcdFx0bWFnZW50YTogWzM1LCAzOV0sXG5cdFx0XHRjeWFuOiBbMzYsIDM5XSxcblx0XHRcdHdoaXRlOiBbMzcsIDM5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRibGFja0JyaWdodDogWzkwLCAzOV0sXG5cdFx0XHRyZWRCcmlnaHQ6IFs5MSwgMzldLFxuXHRcdFx0Z3JlZW5CcmlnaHQ6IFs5MiwgMzldLFxuXHRcdFx0eWVsbG93QnJpZ2h0OiBbOTMsIDM5XSxcblx0XHRcdGJsdWVCcmlnaHQ6IFs5NCwgMzldLFxuXHRcdFx0bWFnZW50YUJyaWdodDogWzk1LCAzOV0sXG5cdFx0XHRjeWFuQnJpZ2h0OiBbOTYsIDM5XSxcblx0XHRcdHdoaXRlQnJpZ2h0OiBbOTcsIDM5XVxuXHRcdH0sXG5cdFx0YmdDb2xvcjoge1xuXHRcdFx0YmdCbGFjazogWzQwLCA0OV0sXG5cdFx0XHRiZ1JlZDogWzQxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuOiBbNDIsIDQ5XSxcblx0XHRcdGJnWWVsbG93OiBbNDMsIDQ5XSxcblx0XHRcdGJnQmx1ZTogWzQ0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGE6IFs0NSwgNDldLFxuXHRcdFx0YmdDeWFuOiBbNDYsIDQ5XSxcblx0XHRcdGJnV2hpdGU6IFs0NywgNDldLFxuXG5cdFx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRcdGJnQmxhY2tCcmlnaHQ6IFsxMDAsIDQ5XSxcblx0XHRcdGJnUmVkQnJpZ2h0OiBbMTAxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuQnJpZ2h0OiBbMTAyLCA0OV0sXG5cdFx0XHRiZ1llbGxvd0JyaWdodDogWzEwMywgNDldLFxuXHRcdFx0YmdCbHVlQnJpZ2h0OiBbMTA0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGFCcmlnaHQ6IFsxMDUsIDQ5XSxcblx0XHRcdGJnQ3lhbkJyaWdodDogWzEwNiwgNDldLFxuXHRcdFx0YmdXaGl0ZUJyaWdodDogWzEwNywgNDldXG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFsaWFzIGJyaWdodCBibGFjayBhcyBncmF5IChhbmQgZ3JleSlcblx0c3R5bGVzLmNvbG9yLmdyYXkgPSBzdHlsZXMuY29sb3IuYmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5iZ0NvbG9yLmJnR3JheSA9IHN0eWxlcy5iZ0NvbG9yLmJnQmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5jb2xvci5ncmV5ID0gc3R5bGVzLmNvbG9yLmJsYWNrQnJpZ2h0O1xuXHRzdHlsZXMuYmdDb2xvci5iZ0dyZXkgPSBzdHlsZXMuYmdDb2xvci5iZ0JsYWNrQnJpZ2h0O1xuXG5cdGZvciAoY29uc3QgW2dyb3VwTmFtZSwgZ3JvdXBdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlcykpIHtcblx0XHRmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhncm91cCkpIHtcblx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0ge1xuXHRcdFx0XHRvcGVuOiBgXFx1MDAxQlske3N0eWxlWzBdfW1gLFxuXHRcdFx0XHRjbG9zZTogYFxcdTAwMUJbJHtzdHlsZVsxXX1tYFxuXHRcdFx0fTtcblxuXHRcdFx0Z3JvdXBbc3R5bGVOYW1lXSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuXG5cdFx0XHRjb2Rlcy5zZXQoc3R5bGVbMF0sIHN0eWxlWzFdKTtcblx0XHR9XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCBncm91cE5hbWUsIHtcblx0XHRcdHZhbHVlOiBncm91cCxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCAnY29kZXMnLCB7XG5cdFx0dmFsdWU6IGNvZGVzLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdH0pO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTYsICdhbnNpMTYnLCBhbnNpMmFuc2ksIGZhbHNlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuY29sb3IsICdhbnNpMjU2JywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kyNTYsICdhbnNpMjU2JywgYW5zaTJhbnNpLCBmYWxzZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaTE2bScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTZtLCAncmdiJywgcmdiMnJnYiwgZmFsc2UpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTYsICdhbnNpMTYnLCBhbnNpMmFuc2ksIHRydWUpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaTI1NicsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMjU2LCAnYW5zaTI1NicsIGFuc2kyYW5zaSwgdHJ1ZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmJnQ29sb3IsICdhbnNpMTZtJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNm0sICdyZ2InLCByZ2IycmdiLCB0cnVlKSk7XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuLy8gTWFrZSB0aGUgZXhwb3J0IGltbXV0YWJsZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogYXNzZW1ibGVTdHlsZXNcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzLmhydGltZSB8fCBocnRpbWVcblxuLy8gcG9seWZpbCBmb3Igd2luZG93LnBlcmZvcm1hbmNlLm5vd1xudmFyIHBlcmZvcm1hbmNlID0gZ2xvYmFsLnBlcmZvcm1hbmNlIHx8IHt9XG52YXIgcGVyZm9ybWFuY2VOb3cgPVxuICBwZXJmb3JtYW5jZS5ub3cgICAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm1vek5vdyAgICAgfHxcbiAgcGVyZm9ybWFuY2UubXNOb3cgICAgICB8fFxuICBwZXJmb3JtYW5jZS5vTm93ICAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLndlYmtpdE5vdyAgfHxcbiAgZnVuY3Rpb24oKXsgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgfVxuXG4vLyBnZW5lcmF0ZSB0aW1lc3RhbXAgb3IgZGVsdGFcbi8vIHNlZSBodHRwOi8vbm9kZWpzLm9yZy9hcGkvcHJvY2Vzcy5odG1sI3Byb2Nlc3NfcHJvY2Vzc19ocnRpbWVcbmZ1bmN0aW9uIGhydGltZShwcmV2aW91c1RpbWVzdGFtcCl7XG4gIHZhciBjbG9ja3RpbWUgPSBwZXJmb3JtYW5jZU5vdy5jYWxsKHBlcmZvcm1hbmNlKSoxZS0zXG4gIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcihjbG9ja3RpbWUpXG4gIHZhciBuYW5vc2Vjb25kcyA9IE1hdGguZmxvb3IoKGNsb2NrdGltZSUxKSoxZTkpXG4gIGlmIChwcmV2aW91c1RpbWVzdGFtcCkge1xuICAgIHNlY29uZHMgPSBzZWNvbmRzIC0gcHJldmlvdXNUaW1lc3RhbXBbMF1cbiAgICBuYW5vc2Vjb25kcyA9IG5hbm9zZWNvbmRzIC0gcHJldmlvdXNUaW1lc3RhbXBbMV1cbiAgICBpZiAobmFub3NlY29uZHM8MCkge1xuICAgICAgc2Vjb25kcy0tXG4gICAgICBuYW5vc2Vjb25kcyArPSAxZTlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtzZWNvbmRzLG5hbm9zZWNvbmRzXVxufSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lTdHlsZXMgPSByZXF1aXJlKCdhbnNpLXN0eWxlcycpO1xuY29uc3Qge3N0ZG91dDogc3Rkb3V0Q29sb3IsIHN0ZGVycjogc3RkZXJyQ29sb3J9ID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcbmNvbnN0IHtcblx0c3RyaW5nUmVwbGFjZUFsbCxcblx0c3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4XG59ID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8vIGBzdXBwb3J0c0NvbG9yLmxldmVsYCDihpIgYGFuc2lTdHlsZXMuY29sb3JbbmFtZV1gIG1hcHBpbmdcbmNvbnN0IGxldmVsTWFwcGluZyA9IFtcblx0J2Fuc2knLFxuXHQnYW5zaScsXG5cdCdhbnNpMjU2Jyxcblx0J2Fuc2kxNm0nXG5dO1xuXG5jb25zdCBzdHlsZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5jb25zdCBhcHBseU9wdGlvbnMgPSAob2JqZWN0LCBvcHRpb25zID0ge30pID0+IHtcblx0aWYgKG9wdGlvbnMubGV2ZWwgJiYgIShOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMubGV2ZWwpICYmIG9wdGlvbnMubGV2ZWwgPj0gMCAmJiBvcHRpb25zLmxldmVsIDw9IDMpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGxldmVsYCBvcHRpb24gc2hvdWxkIGJlIGFuIGludGVnZXIgZnJvbSAwIHRvIDMnKTtcblx0fVxuXG5cdC8vIERldGVjdCBsZXZlbCBpZiBub3Qgc2V0IG1hbnVhbGx5XG5cdGNvbnN0IGNvbG9yTGV2ZWwgPSBzdGRvdXRDb2xvciA/IHN0ZG91dENvbG9yLmxldmVsIDogMDtcblx0b2JqZWN0LmxldmVsID0gb3B0aW9ucy5sZXZlbCA9PT0gdW5kZWZpbmVkID8gY29sb3JMZXZlbCA6IG9wdGlvbnMubGV2ZWw7XG59O1xuXG5jbGFzcyBDaGFsa0NsYXNzIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cblx0XHRyZXR1cm4gY2hhbGtGYWN0b3J5KG9wdGlvbnMpO1xuXHR9XG59XG5cbmNvbnN0IGNoYWxrRmFjdG9yeSA9IG9wdGlvbnMgPT4ge1xuXHRjb25zdCBjaGFsayA9IHt9O1xuXHRhcHBseU9wdGlvbnMoY2hhbGssIG9wdGlvbnMpO1xuXG5cdGNoYWxrLnRlbXBsYXRlID0gKC4uLmFyZ3VtZW50c18pID0+IGNoYWxrVGFnKGNoYWxrLnRlbXBsYXRlLCAuLi5hcmd1bWVudHNfKTtcblxuXHRPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhbGssIENoYWxrLnByb3RvdHlwZSk7XG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFsay50ZW1wbGF0ZSwgY2hhbGspO1xuXG5cdGNoYWxrLnRlbXBsYXRlLmNvbnN0cnVjdG9yID0gKCkgPT4ge1xuXHRcdHRocm93IG5ldyBFcnJvcignYGNoYWxrLmNvbnN0cnVjdG9yKClgIGlzIGRlcHJlY2F0ZWQuIFVzZSBgbmV3IGNoYWxrLkluc3RhbmNlKClgIGluc3RlYWQuJyk7XG5cdH07XG5cblx0Y2hhbGsudGVtcGxhdGUuSW5zdGFuY2UgPSBDaGFsa0NsYXNzO1xuXG5cdHJldHVybiBjaGFsay50ZW1wbGF0ZTtcbn07XG5cbmZ1bmN0aW9uIENoYWxrKG9wdGlvbnMpIHtcblx0cmV0dXJuIGNoYWxrRmFjdG9yeShvcHRpb25zKTtcbn1cblxuZm9yIChjb25zdCBbc3R5bGVOYW1lLCBzdHlsZV0gb2YgT2JqZWN0LmVudHJpZXMoYW5zaVN0eWxlcykpIHtcblx0c3R5bGVzW3N0eWxlTmFtZV0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3QgYnVpbGRlciA9IGNyZWF0ZUJ1aWxkZXIodGhpcywgY3JlYXRlU3R5bGVyKHN0eWxlLm9wZW4sIHN0eWxlLmNsb3NlLCB0aGlzLl9zdHlsZXIpLCB0aGlzLl9pc0VtcHR5KTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBzdHlsZU5hbWUsIHt2YWx1ZTogYnVpbGRlcn0pO1xuXHRcdFx0cmV0dXJuIGJ1aWxkZXI7XG5cdFx0fVxuXHR9O1xufVxuXG5zdHlsZXMudmlzaWJsZSA9IHtcblx0Z2V0KCkge1xuXHRcdGNvbnN0IGJ1aWxkZXIgPSBjcmVhdGVCdWlsZGVyKHRoaXMsIHRoaXMuX3N0eWxlciwgdHJ1ZSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd2aXNpYmxlJywge3ZhbHVlOiBidWlsZGVyfSk7XG5cdFx0cmV0dXJuIGJ1aWxkZXI7XG5cdH1cbn07XG5cbmNvbnN0IHVzZWRNb2RlbHMgPSBbJ3JnYicsICdoZXgnLCAna2V5d29yZCcsICdoc2wnLCAnaHN2JywgJ2h3YicsICdhbnNpJywgJ2Fuc2kyNTYnXTtcblxuZm9yIChjb25zdCBtb2RlbCBvZiB1c2VkTW9kZWxzKSB7XG5cdHN0eWxlc1ttb2RlbF0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3Qge2xldmVsfSA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0XHRcdFx0Y29uc3Qgc3R5bGVyID0gY3JlYXRlU3R5bGVyKGFuc2lTdHlsZXMuY29sb3JbbGV2ZWxNYXBwaW5nW2xldmVsXV1bbW9kZWxdKC4uLmFyZ3VtZW50c18pLCBhbnNpU3R5bGVzLmNvbG9yLmNsb3NlLCB0aGlzLl9zdHlsZXIpO1xuXHRcdFx0XHRyZXR1cm4gY3JlYXRlQnVpbGRlcih0aGlzLCBzdHlsZXIsIHRoaXMuX2lzRW1wdHkpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5cbmZvciAoY29uc3QgbW9kZWwgb2YgdXNlZE1vZGVscykge1xuXHRjb25zdCBiZ01vZGVsID0gJ2JnJyArIG1vZGVsWzBdLnRvVXBwZXJDYXNlKCkgKyBtb2RlbC5zbGljZSgxKTtcblx0c3R5bGVzW2JnTW9kZWxdID0ge1xuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IHtsZXZlbH0gPSB0aGlzO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdFx0XHRcdGNvbnN0IHN0eWxlciA9IGNyZWF0ZVN0eWxlcihhbnNpU3R5bGVzLmJnQ29sb3JbbGV2ZWxNYXBwaW5nW2xldmVsXV1bbW9kZWxdKC4uLmFyZ3VtZW50c18pLCBhbnNpU3R5bGVzLmJnQ29sb3IuY2xvc2UsIHRoaXMuX3N0eWxlcik7XG5cdFx0XHRcdHJldHVybiBjcmVhdGVCdWlsZGVyKHRoaXMsIHN0eWxlciwgdGhpcy5faXNFbXB0eSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgcHJvdG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcygoKSA9PiB7fSwge1xuXHQuLi5zdHlsZXMsXG5cdGxldmVsOiB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZ2VuZXJhdG9yLmxldmVsO1xuXHRcdH0sXG5cdFx0c2V0KGxldmVsKSB7XG5cdFx0XHR0aGlzLl9nZW5lcmF0b3IubGV2ZWwgPSBsZXZlbDtcblx0XHR9XG5cdH1cbn0pO1xuXG5jb25zdCBjcmVhdGVTdHlsZXIgPSAob3BlbiwgY2xvc2UsIHBhcmVudCkgPT4ge1xuXHRsZXQgb3BlbkFsbDtcblx0bGV0IGNsb3NlQWxsO1xuXHRpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRvcGVuQWxsID0gb3Blbjtcblx0XHRjbG9zZUFsbCA9IGNsb3NlO1xuXHR9IGVsc2Uge1xuXHRcdG9wZW5BbGwgPSBwYXJlbnQub3BlbkFsbCArIG9wZW47XG5cdFx0Y2xvc2VBbGwgPSBjbG9zZSArIHBhcmVudC5jbG9zZUFsbDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0b3Blbixcblx0XHRjbG9zZSxcblx0XHRvcGVuQWxsLFxuXHRcdGNsb3NlQWxsLFxuXHRcdHBhcmVudFxuXHR9O1xufTtcblxuY29uc3QgY3JlYXRlQnVpbGRlciA9IChzZWxmLCBfc3R5bGVyLCBfaXNFbXB0eSkgPT4ge1xuXHRjb25zdCBidWlsZGVyID0gKC4uLmFyZ3VtZW50c18pID0+IHtcblx0XHQvLyBTaW5nbGUgYXJndW1lbnQgaXMgaG90IHBhdGgsIGltcGxpY2l0IGNvZXJjaW9uIGlzIGZhc3RlciB0aGFuIGFueXRoaW5nXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0cmV0dXJuIGFwcGx5U3R5bGUoYnVpbGRlciwgKGFyZ3VtZW50c18ubGVuZ3RoID09PSAxKSA/ICgnJyArIGFyZ3VtZW50c19bMF0pIDogYXJndW1lbnRzXy5qb2luKCcgJykpO1xuXHR9O1xuXG5cdC8vIFdlIGFsdGVyIHRoZSBwcm90b3R5cGUgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcblx0Ly8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihidWlsZGVyLCBwcm90byk7XG5cblx0YnVpbGRlci5fZ2VuZXJhdG9yID0gc2VsZjtcblx0YnVpbGRlci5fc3R5bGVyID0gX3N0eWxlcjtcblx0YnVpbGRlci5faXNFbXB0eSA9IF9pc0VtcHR5O1xuXG5cdHJldHVybiBidWlsZGVyO1xufTtcblxuY29uc3QgYXBwbHlTdHlsZSA9IChzZWxmLCBzdHJpbmcpID0+IHtcblx0aWYgKHNlbGYubGV2ZWwgPD0gMCB8fCAhc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHNlbGYuX2lzRW1wdHkgPyAnJyA6IHN0cmluZztcblx0fVxuXG5cdGxldCBzdHlsZXIgPSBzZWxmLl9zdHlsZXI7XG5cblx0aWYgKHN0eWxlciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdGNvbnN0IHtvcGVuQWxsLCBjbG9zZUFsbH0gPSBzdHlsZXI7XG5cdGlmIChzdHJpbmcuaW5kZXhPZignXFx1MDAxQicpICE9PSAtMSkge1xuXHRcdHdoaWxlIChzdHlsZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gUmVwbGFjZSBhbnkgaW5zdGFuY2VzIGFscmVhZHkgcHJlc2VudCB3aXRoIGEgcmUtb3BlbmluZyBjb2RlXG5cdFx0XHQvLyBvdGhlcndpc2Ugb25seSB0aGUgcGFydCBvZiB0aGUgc3RyaW5nIHVudGlsIHNhaWQgY2xvc2luZyBjb2RlXG5cdFx0XHQvLyB3aWxsIGJlIGNvbG9yZWQsIGFuZCB0aGUgcmVzdCB3aWxsIHNpbXBseSBiZSAncGxhaW4nLlxuXHRcdFx0c3RyaW5nID0gc3RyaW5nUmVwbGFjZUFsbChzdHJpbmcsIHN0eWxlci5jbG9zZSwgc3R5bGVyLm9wZW4pO1xuXG5cdFx0XHRzdHlsZXIgPSBzdHlsZXIucGFyZW50O1xuXHRcdH1cblx0fVxuXG5cdC8vIFdlIGNhbiBtb3ZlIGJvdGggbmV4dCBhY3Rpb25zIG91dCBvZiBsb29wLCBiZWNhdXNlIHJlbWFpbmluZyBhY3Rpb25zIGluIGxvb3Agd29uJ3QgaGF2ZVxuXHQvLyBhbnkvdmlzaWJsZSBlZmZlY3Qgb24gcGFydHMgd2UgYWRkIGhlcmUuIENsb3NlIHRoZSBzdHlsaW5nIGJlZm9yZSBhIGxpbmVicmVhayBhbmQgcmVvcGVuXG5cdC8vIGFmdGVyIG5leHQgbGluZSB0byBmaXggYSBibGVlZCBpc3N1ZSBvbiBtYWNPUzogaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL2NoYWxrL3B1bGwvOTJcblx0Y29uc3QgbGZJbmRleCA9IHN0cmluZy5pbmRleE9mKCdcXG4nKTtcblx0aWYgKGxmSW5kZXggIT09IC0xKSB7XG5cdFx0c3RyaW5nID0gc3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4KHN0cmluZywgY2xvc2VBbGwsIG9wZW5BbGwsIGxmSW5kZXgpO1xuXHR9XG5cblx0cmV0dXJuIG9wZW5BbGwgKyBzdHJpbmcgKyBjbG9zZUFsbDtcbn07XG5cbmxldCB0ZW1wbGF0ZTtcbmNvbnN0IGNoYWxrVGFnID0gKGNoYWxrLCAuLi5zdHJpbmdzKSA9PiB7XG5cdGNvbnN0IFtmaXJzdFN0cmluZ10gPSBzdHJpbmdzO1xuXG5cdGlmICghQXJyYXkuaXNBcnJheShmaXJzdFN0cmluZykpIHtcblx0XHQvLyBJZiBjaGFsaygpIHdhcyBjYWxsZWQgYnkgaXRzZWxmIG9yIHdpdGggYSBzdHJpbmcsXG5cdFx0Ly8gcmV0dXJuIHRoZSBzdHJpbmcgaXRzZWxmIGFzIGEgc3RyaW5nLlxuXHRcdHJldHVybiBzdHJpbmdzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGNvbnN0IGFyZ3VtZW50c18gPSBzdHJpbmdzLnNsaWNlKDEpO1xuXHRjb25zdCBwYXJ0cyA9IFtmaXJzdFN0cmluZy5yYXdbMF1dO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgZmlyc3RTdHJpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRwYXJ0cy5wdXNoKFxuXHRcdFx0U3RyaW5nKGFyZ3VtZW50c19baSAtIDFdKS5yZXBsYWNlKC9be31cXFxcXS9nLCAnXFxcXCQmJyksXG5cdFx0XHRTdHJpbmcoZmlyc3RTdHJpbmcucmF3W2ldKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZShjaGFsaywgcGFydHMuam9pbignJykpO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ2hhbGsucHJvdG90eXBlLCBzdHlsZXMpO1xuXG5jb25zdCBjaGFsayA9IENoYWxrKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuY2hhbGsuc3VwcG9ydHNDb2xvciA9IHN0ZG91dENvbG9yO1xuY2hhbGsuc3RkZXJyID0gQ2hhbGsoe2xldmVsOiBzdGRlcnJDb2xvciA/IHN0ZGVyckNvbG9yLmxldmVsIDogMH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbmNoYWxrLnN0ZGVyci5zdXBwb3J0c0NvbG9yID0gc3RkZXJyQ29sb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhbGs7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBURU1QTEFURV9SRUdFWCA9IC8oPzpcXFxcKHUoPzpbYS1mXFxkXXs0fXxcXHtbYS1mXFxkXXsxLDZ9XFx9KXx4W2EtZlxcZF17Mn18LikpfCg/Olxceyh+KT8oXFx3Kyg/OlxcKFteKV0qXFwpKT8oPzpcXC5cXHcrKD86XFwoW14pXSpcXCkpPykqKSg/OlsgXFx0XXwoPz1cXHI/XFxuKSkpfChcXH0pfCgoPzoufFtcXHJcXG5cXGZdKSs/KS9naTtcbmNvbnN0IFNUWUxFX1JFR0VYID0gLyg/Ol58XFwuKShcXHcrKSg/OlxcKChbXildKilcXCkpPy9nO1xuY29uc3QgU1RSSU5HX1JFR0VYID0gL14oWydcIl0pKCg/OlxcXFwufCg/IVxcMSlbXlxcXFxdKSopXFwxJC87XG5jb25zdCBFU0NBUEVfUkVHRVggPSAvXFxcXCh1KD86W2EtZlxcZF17NH18e1thLWZcXGRdezEsNn19KXx4W2EtZlxcZF17Mn18Lil8KFteXFxcXF0pL2dpO1xuXG5jb25zdCBFU0NBUEVTID0gbmV3IE1hcChbXG5cdFsnbicsICdcXG4nXSxcblx0WydyJywgJ1xcciddLFxuXHRbJ3QnLCAnXFx0J10sXG5cdFsnYicsICdcXGInXSxcblx0WydmJywgJ1xcZiddLFxuXHRbJ3YnLCAnXFx2J10sXG5cdFsnMCcsICdcXDAnXSxcblx0WydcXFxcJywgJ1xcXFwnXSxcblx0WydlJywgJ1xcdTAwMUInXSxcblx0WydhJywgJ1xcdTAwMDcnXVxuXSk7XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGMpIHtcblx0Y29uc3QgdSA9IGNbMF0gPT09ICd1Jztcblx0Y29uc3QgYnJhY2tldCA9IGNbMV0gPT09ICd7JztcblxuXHRpZiAoKHUgJiYgIWJyYWNrZXQgJiYgYy5sZW5ndGggPT09IDUpIHx8IChjWzBdID09PSAneCcgJiYgYy5sZW5ndGggPT09IDMpKSB7XG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoYy5zbGljZSgxKSwgMTYpKTtcblx0fVxuXG5cdGlmICh1ICYmIGJyYWNrZXQpIHtcblx0XHRyZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQocGFyc2VJbnQoYy5zbGljZSgyLCAtMSksIDE2KSk7XG5cdH1cblxuXHRyZXR1cm4gRVNDQVBFUy5nZXQoYykgfHwgYztcbn1cblxuZnVuY3Rpb24gcGFyc2VBcmd1bWVudHMobmFtZSwgYXJndW1lbnRzXykge1xuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGNvbnN0IGNodW5rcyA9IGFyZ3VtZW50c18udHJpbSgpLnNwbGl0KC9cXHMqLFxccyovZyk7XG5cdGxldCBtYXRjaGVzO1xuXG5cdGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG5cdFx0Y29uc3QgbnVtYmVyID0gTnVtYmVyKGNodW5rKTtcblx0XHRpZiAoIU51bWJlci5pc05hTihudW1iZXIpKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2gobnVtYmVyKTtcblx0XHR9IGVsc2UgaWYgKChtYXRjaGVzID0gY2h1bmsubWF0Y2goU1RSSU5HX1JFR0VYKSkpIHtcblx0XHRcdHJlc3VsdHMucHVzaChtYXRjaGVzWzJdLnJlcGxhY2UoRVNDQVBFX1JFR0VYLCAobSwgZXNjYXBlLCBjaGFyYWN0ZXIpID0+IGVzY2FwZSA/IHVuZXNjYXBlKGVzY2FwZSkgOiBjaGFyYWN0ZXIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIENoYWxrIHRlbXBsYXRlIHN0eWxlIGFyZ3VtZW50OiAke2NodW5rfSAoaW4gc3R5bGUgJyR7bmFtZX0nKWApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0eWxlKHN0eWxlKSB7XG5cdFNUWUxFX1JFR0VYLmxhc3RJbmRleCA9IDA7XG5cblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRsZXQgbWF0Y2hlcztcblxuXHR3aGlsZSAoKG1hdGNoZXMgPSBTVFlMRV9SRUdFWC5leGVjKHN0eWxlKSkgIT09IG51bGwpIHtcblx0XHRjb25zdCBuYW1lID0gbWF0Y2hlc1sxXTtcblxuXHRcdGlmIChtYXRjaGVzWzJdKSB7XG5cdFx0XHRjb25zdCBhcmdzID0gcGFyc2VBcmd1bWVudHMobmFtZSwgbWF0Y2hlc1syXSk7XG5cdFx0XHRyZXN1bHRzLnB1c2goW25hbWVdLmNvbmNhdChhcmdzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChbbmFtZV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpIHtcblx0Y29uc3QgZW5hYmxlZCA9IHt9O1xuXG5cdGZvciAoY29uc3QgbGF5ZXIgb2Ygc3R5bGVzKSB7XG5cdFx0Zm9yIChjb25zdCBzdHlsZSBvZiBsYXllci5zdHlsZXMpIHtcblx0XHRcdGVuYWJsZWRbc3R5bGVbMF1dID0gbGF5ZXIuaW52ZXJzZSA/IG51bGwgOiBzdHlsZS5zbGljZSgxKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY3VycmVudCA9IGNoYWxrO1xuXHRmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlc10gb2YgT2JqZWN0LmVudHJpZXMoZW5hYmxlZCkpIHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCEoc3R5bGVOYW1lIGluIGN1cnJlbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gQ2hhbGsgc3R5bGU6ICR7c3R5bGVOYW1lfWApO1xuXHRcdH1cblxuXHRcdGN1cnJlbnQgPSBzdHlsZXMubGVuZ3RoID4gMCA/IGN1cnJlbnRbc3R5bGVOYW1lXSguLi5zdHlsZXMpIDogY3VycmVudFtzdHlsZU5hbWVdO1xuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gKGNoYWxrLCB0ZW1wb3JhcnkpID0+IHtcblx0Y29uc3Qgc3R5bGVzID0gW107XG5cdGNvbnN0IGNodW5rcyA9IFtdO1xuXHRsZXQgY2h1bmsgPSBbXTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuXHR0ZW1wb3JhcnkucmVwbGFjZShURU1QTEFURV9SRUdFWCwgKG0sIGVzY2FwZUNoYXJhY3RlciwgaW52ZXJzZSwgc3R5bGUsIGNsb3NlLCBjaGFyYWN0ZXIpID0+IHtcblx0XHRpZiAoZXNjYXBlQ2hhcmFjdGVyKSB7XG5cdFx0XHRjaHVuay5wdXNoKHVuZXNjYXBlKGVzY2FwZUNoYXJhY3RlcikpO1xuXHRcdH0gZWxzZSBpZiAoc3R5bGUpIHtcblx0XHRcdGNvbnN0IHN0cmluZyA9IGNodW5rLmpvaW4oJycpO1xuXHRcdFx0Y2h1bmsgPSBbXTtcblx0XHRcdGNodW5rcy5wdXNoKHN0eWxlcy5sZW5ndGggPT09IDAgPyBzdHJpbmcgOiBidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpKHN0cmluZykpO1xuXHRcdFx0c3R5bGVzLnB1c2goe2ludmVyc2UsIHN0eWxlczogcGFyc2VTdHlsZShzdHlsZSl9KTtcblx0XHR9IGVsc2UgaWYgKGNsb3NlKSB7XG5cdFx0XHRpZiAoc3R5bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGV4dHJhbmVvdXMgfSBpbiBDaGFsayB0ZW1wbGF0ZSBsaXRlcmFsJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNodW5rcy5wdXNoKGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykoY2h1bmsuam9pbignJykpKTtcblx0XHRcdGNodW5rID0gW107XG5cdFx0XHRzdHlsZXMucG9wKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNodW5rLnB1c2goY2hhcmFjdGVyKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNodW5rcy5wdXNoKGNodW5rLmpvaW4oJycpKTtcblxuXHRpZiAoc3R5bGVzLmxlbmd0aCA+IDApIHtcblx0XHRjb25zdCBlcnJNZXNzYWdlID0gYENoYWxrIHRlbXBsYXRlIGxpdGVyYWwgaXMgbWlzc2luZyAke3N0eWxlcy5sZW5ndGh9IGNsb3NpbmcgYnJhY2tldCR7c3R5bGVzLmxlbmd0aCA9PT0gMSA/ICcnIDogJ3MnfSAoXFxgfVxcYClgO1xuXHRcdHRocm93IG5ldyBFcnJvcihlcnJNZXNzYWdlKTtcblx0fVxuXG5cdHJldHVybiBjaHVua3Muam9pbignJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdHJpbmdSZXBsYWNlQWxsID0gKHN0cmluZywgc3Vic3RyaW5nLCByZXBsYWNlcikgPT4ge1xuXHRsZXQgaW5kZXggPSBzdHJpbmcuaW5kZXhPZihzdWJzdHJpbmcpO1xuXHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdGNvbnN0IHN1YnN0cmluZ0xlbmd0aCA9IHN1YnN0cmluZy5sZW5ndGg7XG5cdGxldCBlbmRJbmRleCA9IDA7XG5cdGxldCByZXR1cm5WYWx1ZSA9ICcnO1xuXHRkbyB7XG5cdFx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCwgaW5kZXggLSBlbmRJbmRleCkgKyBzdWJzdHJpbmcgKyByZXBsYWNlcjtcblx0XHRlbmRJbmRleCA9IGluZGV4ICsgc3Vic3RyaW5nTGVuZ3RoO1xuXHRcdGluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc3Vic3RyaW5nLCBlbmRJbmRleCk7XG5cdH0gd2hpbGUgKGluZGV4ICE9PSAtMSk7XG5cblx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCk7XG5cdHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbmNvbnN0IHN0cmluZ0VuY2FzZUNSTEZXaXRoRmlyc3RJbmRleCA9IChzdHJpbmcsIHByZWZpeCwgcG9zdGZpeCwgaW5kZXgpID0+IHtcblx0bGV0IGVuZEluZGV4ID0gMDtcblx0bGV0IHJldHVyblZhbHVlID0gJyc7XG5cdGRvIHtcblx0XHRjb25zdCBnb3RDUiA9IHN0cmluZ1tpbmRleCAtIDFdID09PSAnXFxyJztcblx0XHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4LCAoZ290Q1IgPyBpbmRleCAtIDEgOiBpbmRleCkgLSBlbmRJbmRleCkgKyBwcmVmaXggKyAoZ290Q1IgPyAnXFxyXFxuJyA6ICdcXG4nKSArIHBvc3RmaXg7XG5cdFx0ZW5kSW5kZXggPSBpbmRleCArIDE7XG5cdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZignXFxuJywgZW5kSW5kZXgpO1xuXHR9IHdoaWxlIChpbmRleCAhPT0gLTEpO1xuXG5cdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgpO1xuXHRyZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3RyaW5nUmVwbGFjZUFsbCxcblx0c3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4XG59O1xuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuY29uc3QgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbmNvbnN0IHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY3NzS2V5d29yZHMpKSB7XG5cdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcbn1cblxuY29uc3QgY29udmVydCA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcblxuLy8gSGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yIChjb25zdCBtb2RlbCBvZiBPYmplY3Qua2V5cyhjb252ZXJ0KSkge1xuXHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0fVxuXG5cdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0fVxuXG5cdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHR9XG5cblx0Y29uc3Qge2NoYW5uZWxzLCBsYWJlbHN9ID0gY29udmVydFttb2RlbF07XG5cdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogbGFiZWxzfSk7XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblx0Y29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHRjb25zdCBkZWx0YSA9IG1heCAtIG1pbjtcblx0bGV0IGg7XG5cdGxldCBzO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0Y29uc3QgbCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGxldCByZGlmO1xuXHRsZXQgZ2RpZjtcblx0bGV0IGJkaWY7XG5cdGxldCBoO1xuXHRsZXQgcztcblxuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCB2ID0gTWF0aC5tYXgociwgZywgYik7XG5cdGNvbnN0IGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdGNvbnN0IGRpZmZjID0gZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG5cdH07XG5cblx0aWYgKGRpZmYgPT09IDApIHtcblx0XHRoID0gMDtcblx0XHRzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gZGlmZiAvIHY7XG5cdFx0cmRpZiA9IGRpZmZjKHIpO1xuXHRcdGdkaWYgPSBkaWZmYyhnKTtcblx0XHRiZGlmID0gZGlmZmMoYik7XG5cblx0XHRpZiAociA9PT0gdikge1xuXHRcdFx0aCA9IGJkaWYgLSBnZGlmO1xuXHRcdH0gZWxzZSBpZiAoZyA9PT0gdikge1xuXHRcdFx0aCA9ICgxIC8gMykgKyByZGlmIC0gYmRpZjtcblx0XHR9IGVsc2UgaWYgKGIgPT09IHYpIHtcblx0XHRcdGggPSAoMiAvIDMpICsgZ2RpZiAtIHJkaWY7XG5cdFx0fVxuXG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXTtcblx0Y29uc3QgZyA9IHJnYlsxXTtcblx0bGV0IGIgPSByZ2JbMl07XG5cdGNvbnN0IGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0Y29uc3QgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdGNvbnN0IGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0Y29uc3QgYyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRjb25zdCBtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdGNvbnN0IHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdC8qXG5cdFx0U2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG5cdCovXG5cdHJldHVybiAoXG5cdFx0KCh4WzBdIC0geVswXSkgKiogMikgK1xuXHRcdCgoeFsxXSAtIHlbMV0pICoqIDIpICtcblx0XHQoKHhbMl0gLSB5WzJdKSAqKiAyKVxuXHQpO1xufVxuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHRsZXQgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHRsZXQgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAoY29uc3Qga2V5d29yZCBvZiBPYmplY3Qua2V5cyhjc3NLZXl3b3JkcykpIHtcblx0XHRjb25zdCB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdGNvbnN0IGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdGxldCByID0gcmdiWzBdIC8gMjU1O1xuXHRsZXQgZyA9IHJnYlsxXSAvIDI1NTtcblx0bGV0IGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gQXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gKCgociArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/ICgoKGcgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyAoKChiICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHRjb25zdCB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHRjb25zdCB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHRjb25zdCB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHRsZXQgeCA9IHh5elswXTtcblx0bGV0IHkgPSB4eXpbMV07XG5cdGxldCB6ID0geHl6WzJdO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyAoeCAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/ICh5ICoqICgxIC8gMykpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gKHogKiogKDEgLyAzKSkgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0Y29uc3QgbCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRjb25zdCBhID0gNTAwICogKHggLSB5KTtcblx0Y29uc3QgYiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0Y29uc3QgaCA9IGhzbFswXSAvIDM2MDtcblx0Y29uc3QgcyA9IGhzbFsxXSAvIDEwMDtcblx0Y29uc3QgbCA9IGhzbFsyXSAvIDEwMDtcblx0bGV0IHQyO1xuXHRsZXQgdDM7XG5cdGxldCB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0Y29uc3QgdDEgPSAyICogbCAtIHQyO1xuXG5cdGNvbnN0IHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0Y29uc3QgaCA9IGhzbFswXTtcblx0bGV0IHMgPSBoc2xbMV0gLyAxMDA7XG5cdGxldCBsID0gaHNsWzJdIC8gMTAwO1xuXHRsZXQgc21pbiA9IHM7XG5cdGNvbnN0IGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHRjb25zdCB2ID0gKGwgKyBzKSAvIDI7XG5cdGNvbnN0IHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdGNvbnN0IGggPSBoc3ZbMF0gLyA2MDtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0bGV0IHYgPSBoc3ZbMl0gLyAxMDA7XG5cdGNvbnN0IGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0Y29uc3QgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHRjb25zdCBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdGNvbnN0IHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0Y29uc3QgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgaCA9IGhzdlswXTtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0Y29uc3QgdiA9IGhzdlsyXSAvIDEwMDtcblx0Y29uc3Qgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHRsZXQgc2w7XG5cdGxldCBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0Y29uc3QgbG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0Y29uc3QgaCA9IGh3YlswXSAvIDM2MDtcblx0bGV0IHdoID0gaHdiWzFdIC8gMTAwO1xuXHRsZXQgYmwgPSBod2JbMl0gLyAxMDA7XG5cdGNvbnN0IHJhdGlvID0gd2ggKyBibDtcblx0bGV0IGY7XG5cblx0Ly8gV2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRjb25zdCBpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdGNvbnN0IHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRjb25zdCBuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIExpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0bGV0IHI7XG5cdGxldCBnO1xuXHRsZXQgYjtcblx0LyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUsbm8tbXVsdGktc3BhY2VzICovXG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7ICBnID0gbjsgIGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgIGcgPSB2OyAgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7ICBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyAgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47ICBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyAgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblx0LyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSxuby1tdWx0aS1zcGFjZXMgKi9cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdGNvbnN0IGMgPSBjbXlrWzBdIC8gMTAwO1xuXHRjb25zdCBtID0gY215a1sxXSAvIDEwMDtcblx0Y29uc3QgeSA9IGNteWtbMl0gLyAxMDA7XG5cdGNvbnN0IGsgPSBjbXlrWzNdIC8gMTAwO1xuXG5cdGNvbnN0IHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0Y29uc3QgZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRjb25zdCBiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0Y29uc3QgeCA9IHh5elswXSAvIDEwMDtcblx0Y29uc3QgeSA9IHh5elsxXSAvIDEwMDtcblx0Y29uc3QgeiA9IHh5elsyXSAvIDEwMDtcblx0bGV0IHI7XG5cdGxldCBnO1xuXHRsZXQgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBBc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChyICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChnICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChiICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdGxldCB4ID0geHl6WzBdO1xuXHRsZXQgeSA9IHh5elsxXTtcblx0bGV0IHogPSB4eXpbMl07XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/ICh4ICoqICgxIC8gMykpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gKHkgKiogKDEgLyAzKSkgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyAoeiAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRjb25zdCBsID0gKDExNiAqIHkpIC0gMTY7XG5cdGNvbnN0IGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRjb25zdCBiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHRjb25zdCBsID0gbGFiWzBdO1xuXHRjb25zdCBhID0gbGFiWzFdO1xuXHRjb25zdCBiID0gbGFiWzJdO1xuXHRsZXQgeDtcblx0bGV0IHk7XG5cdGxldCB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0Y29uc3QgeTIgPSB5ICoqIDM7XG5cdGNvbnN0IHgyID0geCAqKiAzO1xuXHRjb25zdCB6MiA9IHogKiogMztcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHRjb25zdCBsID0gbGFiWzBdO1xuXHRjb25zdCBhID0gbGFiWzFdO1xuXHRjb25zdCBiID0gbGFiWzJdO1xuXHRsZXQgaDtcblxuXHRjb25zdCBociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0Y29uc3QgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHRjb25zdCBsID0gbGNoWzBdO1xuXHRjb25zdCBjID0gbGNoWzFdO1xuXHRjb25zdCBoID0gbGNoWzJdO1xuXG5cdGNvbnN0IGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRjb25zdCBhID0gYyAqIE1hdGguY29zKGhyKTtcblx0Y29uc3QgYiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzLCBzYXR1cmF0aW9uID0gbnVsbCkge1xuXHRjb25zdCBbciwgZywgYl0gPSBhcmdzO1xuXHRsZXQgdmFsdWUgPSBzYXR1cmF0aW9uID09PSBudWxsID8gY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdIDogc2F0dXJhdGlvbjsgLy8gSHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0bGV0IGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gT3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHRjb25zdCByID0gYXJnc1swXTtcblx0Y29uc3QgZyA9IGFyZ3NbMV07XG5cdGNvbnN0IGIgPSBhcmdzWzJdO1xuXG5cdC8vIFdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0Y29uc3QgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGxldCBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBIYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHRjb25zdCBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0Y29uc3QgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHRjb25zdCBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHRjb25zdCBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gSGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHRjb25zdCBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdGxldCByZW07XG5cdGNvbnN0IHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHRjb25zdCBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0Y29uc3QgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdGNvbnN0IHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRjb25zdCBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHRsZXQgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGNoYXIgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYXIgKyBjaGFyO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0Y29uc3QgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdGNvbnN0IHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHRjb25zdCBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHRjb25zdCBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdGNvbnN0IGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHRsZXQgZ3JheXNjYWxlO1xuXHRsZXQgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWE7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0Y29uc3QgcyA9IGhzbFsxXSAvIDEwMDtcblx0Y29uc3QgbCA9IGhzbFsyXSAvIDEwMDtcblxuXHRjb25zdCBjID0gbCA8IDAuNSA/ICgyLjAgKiBzICogbCkgOiAoMi4wICogcyAqICgxLjAgLSBsKSk7XG5cblx0bGV0IGYgPSAwO1xuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRjb25zdCB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdGNvbnN0IGMgPSBzICogdjtcblx0bGV0IGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBoID0gaGNnWzBdIC8gMzYwO1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0Y29uc3QgcHVyZSA9IFswLCAwLCAwXTtcblx0Y29uc3QgaGkgPSAoaCAlIDEpICogNjtcblx0Y29uc3QgdiA9IGhpICUgMTtcblx0Y29uc3QgdyA9IDEgLSB2O1xuXHRsZXQgbWcgPSAwO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lICovXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lICovXG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRjb25zdCB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdGxldCBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRjb25zdCBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdGxldCBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cdGNvbnN0IHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHRjb25zdCB3ID0gaHdiWzFdIC8gMTAwO1xuXHRjb25zdCBiID0gaHdiWzJdIC8gMTAwO1xuXHRjb25zdCB2ID0gMSAtIGI7XG5cdGNvbnN0IGMgPSB2IC0gdztcblx0bGV0IGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbMCwgMCwgYXJnc1swXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHN2ID0gY29udmVydC5ncmF5LmhzbDtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdGNvbnN0IHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuXHRjb25zdCBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdGNvbnN0IHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG5cdHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG4iLCJjb25zdCBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG5jb25zdCBjb252ZXJ0ID0ge307XG5cbmNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHRjb25zdCB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGNvbnN0IGFyZzAgPSBhcmdzWzBdO1xuXHRcdGlmIChhcmcwID09PSB1bmRlZmluZWQgfHwgYXJnMCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZzA7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZzAubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IGFyZzA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIFByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0Y29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRjb25zdCBhcmcwID0gYXJnc1swXTtcblxuXHRcdGlmIChhcmcwID09PSB1bmRlZmluZWQgfHwgYXJnMCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZzA7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZzAubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IGFyZzA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyBXZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yIChsZXQgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBQcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZyb21Nb2RlbCA9PiB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdGNvbnN0IHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdGNvbnN0IHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKHRvTW9kZWwgPT4ge1xuXHRcdGNvbnN0IGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwiY29uc3QgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdFRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHRjb25zdCBncmFwaCA9IHt9O1xuXHQvLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG5cdGNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuXHRmb3IgKGxldCBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0Y29uc3QgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdGNvbnN0IHF1ZXVlID0gW2Zyb21Nb2RlbF07IC8vIFVuc2hpZnQgLT4gcXVldWUgLT4gcG9wXG5cblx0Z3JhcGhbZnJvbU1vZGVsXS5kaXN0YW5jZSA9IDA7XG5cblx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHRjb25zdCBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKGxldCBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRjb25zdCBhZGphY2VudCA9IGFkamFjZW50c1tpXTtcblx0XHRcdGNvbnN0IG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdGNvbnN0IHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0bGV0IGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHRsZXQgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnN0IGdyYXBoID0gZGVyaXZlQkZTKGZyb21Nb2RlbCk7XG5cdGNvbnN0IGNvbnZlcnNpb24gPSB7fTtcblxuXHRjb25zdCBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAobGV0IGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRjb25zdCB0b01vZGVsID0gbW9kZWxzW2ldO1xuXHRcdGNvbnN0IG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gTm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcclxuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL29wZW5qc2Yub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZCxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2UsXG4gICAgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFzc2lnblZhbHVlYCBleGNlcHQgdGhhdCBpdCBkb2Vzbid0IGFzc2lnblxuICogYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmICgodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZXEob2JqZWN0W2tleV0sIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZXJnZWAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIG1lcmdlZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKG9iamVjdCA9PT0gc291cmNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGJhc2VGb3Ioc291cmNlLCBmdW5jdGlvbihzcmNWYWx1ZSwga2V5KSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICBpZiAoaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgID8gY3VzdG9taXplcihzYWZlR2V0KG9iamVjdCwga2V5KSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgICB9XG4gICAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9LCBrZXlzSW4pO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZU1lcmdlYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIG1lcmdlcyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBtZXJnZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIG1lcmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1lcmdlRnVuYyBUaGUgZnVuY3Rpb24gdG8gbWVyZ2UgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIG1lcmdlRnVuYywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgdmFyIG9ialZhbHVlID0gc2FmZUdldChvYmplY3QsIGtleSksXG4gICAgICBzcmNWYWx1ZSA9IHNhZmVHZXQoc291cmNlLCBrZXkpLFxuICAgICAgc3RhY2tlZCA9IHN0YWNrLmdldChzcmNWYWx1ZSk7XG5cbiAgaWYgKHN0YWNrZWQpIHtcbiAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBzdGFja2VkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICA6IHVuZGVmaW5lZDtcblxuICB2YXIgaXNDb21tb24gPSBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc0NvbW1vbikge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkoc3JjVmFsdWUpLFxuICAgICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgaXNCdWZmZXIoc3JjVmFsdWUpLFxuICAgICAgICBpc1R5cGVkID0gIWlzQXJyICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHNyY1ZhbHVlKTtcblxuICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgaWYgKGlzQXJyIHx8IGlzQnVmZiB8fCBpc1R5cGVkKSB7XG4gICAgICBpZiAoaXNBcnJheShvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGNvcHlBcnJheShvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0J1ZmYpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZUJ1ZmZlcihzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc1R5cGVkKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVUeXBlZEFycmF5KHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHNyY1ZhbHVlKSB8fCBpc0FyZ3VtZW50cyhzcmNWYWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICBpZiAoaXNBcmd1bWVudHMob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdG9QbGFpbk9iamVjdChvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaXNPYmplY3Qob2JqVmFsdWUpIHx8IGlzRnVuY3Rpb24ob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaW5pdENsb25lT2JqZWN0KHNyY1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoaXNDb21tb24pIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICBtZXJnZUZ1bmMobmV3VmFsdWUsIHNyY1ZhbHVlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIHN0YWNrWydkZWxldGUnXShzcmNWYWx1ZSk7XG4gIH1cbiAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVmYXVsdHNEZWVwYCB0byBjdXN0b21pemUgaXRzIGBfLm1lcmdlYCB1c2UgdG8gbWVyZ2Ugc291cmNlXG4gKiBvYmplY3RzIGludG8gZGVzdGluYXRpb24gb2JqZWN0cyB0aGF0IGFyZSBwYXNzZWQgdGhydS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBvYmpWYWx1ZSBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSBzb3VyY2UgdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIG1lcmdlLlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgcGFyZW50IG9iamVjdCBvZiBgb2JqVmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgcGFyZW50IG9iamVjdCBvZiBgc3JjVmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBjdXN0b21EZWZhdWx0c01lcmdlKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spIHtcbiAgaWYgKGlzT2JqZWN0KG9ialZhbHVlKSAmJiBpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG9ialZhbHVlKTtcbiAgICBiYXNlTWVyZ2Uob2JqVmFsdWUsIHNyY1ZhbHVlLCB1bmRlZmluZWQsIGN1c3RvbURlZmF1bHRzTWVyZ2UsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmpWYWx1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgLCB1bmxlc3MgYGtleWAgaXMgXCJfX3Byb3RvX19cIiBvciBcImNvbnN0cnVjdG9yXCIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzYWZlR2V0KG9iamVjdCwga2V5KSB7XG4gIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIG9iamVjdFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PSAnX19wcm90b19fJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5kZWZhdWx0c2AgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgYXNzaWduc1xuICogZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4xMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uZGVmYXVsdHNcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZhdWx0c0RlZXAoeyAnYSc6IHsgJ2InOiAyIH0gfSwgeyAnYSc6IHsgJ2InOiAxLCAnYyc6IDMgfSB9KTtcbiAqIC8vID0+IHsgJ2EnOiB7ICdiJzogMiwgJ2MnOiAzIH0gfVxuICovXG52YXIgZGVmYXVsdHNEZWVwID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJncykge1xuICBhcmdzLnB1c2godW5kZWZpbmVkLCBjdXN0b21EZWZhdWx0c01lcmdlKTtcbiAgcmV0dXJuIGFwcGx5KG1lcmdlV2l0aCwgdW5kZWZpbmVkLCBhcmdzKTtcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLm1lcmdlYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBjdXN0b21pemVyYCB3aGljaFxuICogaXMgaW52b2tlZCB0byBwcm9kdWNlIHRoZSBtZXJnZWQgdmFsdWVzIG9mIHRoZSBkZXN0aW5hdGlvbiBhbmQgc291cmNlXG4gKiBwcm9wZXJ0aWVzLiBJZiBgY3VzdG9taXplcmAgcmV0dXJucyBgdW5kZWZpbmVkYCwgbWVyZ2luZyBpcyBoYW5kbGVkIGJ5IHRoZVxuICogbWV0aG9kIGluc3RlYWQuIFRoZSBgY3VzdG9taXplcmAgaXMgaW52b2tlZCB3aXRoIHNpeCBhcmd1bWVudHM6XG4gKiAob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjaykuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IHNvdXJjZXMgVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlKSB7XG4gKiAgIGlmIChfLmlzQXJyYXkob2JqVmFsdWUpKSB7XG4gKiAgICAgcmV0dXJuIG9ialZhbHVlLmNvbmNhdChzcmNWYWx1ZSk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFsxXSwgJ2InOiBbMl0gfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiBbM10sICdiJzogWzRdIH07XG4gKlxuICogXy5tZXJnZVdpdGgob2JqZWN0LCBvdGhlciwgY3VzdG9taXplcik7XG4gKiAvLyA9PiB7ICdhJzogWzEsIDNdLCAnYic6IFsyLCA0XSB9XG4gKi9cbnZhciBtZXJnZVdpdGggPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplcik7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0c0RlZXA7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN0ZG91dDogZmFsc2UsXG5cdHN0ZGVycjogZmFsc2Vcbn07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgeyBMb2csIExhYmVsLCBSZWN1cnNpdmVQYXJ0aWFsLCBDaGFsa1N0eWxlcyB9IGZyb20gJy4nO1xuXG50eXBlIExhYmVsTWFwID0gTWFwPHN0cmluZywgTGFiZWw+O1xuXG5leHBvcnQgdHlwZSBDb25zb2xlTWV0aG9kID0gXCJlcnJvclwifFwid2FyblwifFwiaW5mb1wifFwibG9nXCJ8XCJkZWJ1Z1wifFwidHJhY2VcInxcImdyb3VwXCJ8XCJncm91cENvbGxhcHNlZFwifFwiZ3JvdXBFbmRcInxcInRhYmxlXCJ8XCJkaXJcInxcImRpcnhtbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoZWQge1xuICBjZmc6IERlZmF1bHRzO1xuICBjYWNoZTogTG9nW107XG4gIGxhYmVsczogTGFiZWxNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdHMge1xuICBsb2dfbGV2ZWw6IG51bWJlcjtcbiAgbG9nX2NhY2hlX3NpemU6IG51bWJlcjtcbiAgdXNlX2Vtb2ppOiBib29sZWFuO1xuICBiYXNlX3N0eWxlOiBzdHJpbmc7XG4gIGxvZ19sZXZlbHM6IExvZ0xldmVscztcbiAgY3VzdG9tX2xldmVsczogUGFydGlhbDxMb2dMZXZlbHM+O1xuICBmaWx0ZXJzOiBGaWx0ZXJzO1xufTtcblxuZXhwb3J0IHR5cGUgTG9nTGV2ZWxzID0ge1xuICBbbWV0aG9kOiBzdHJpbmddOiBMb2dMZXZlbERlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nTGV2ZWxEZWZpbml0aW9uIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgbGV2ZWxOYW1lPzogc3RyaW5nO1xuICBtZXRob2Q6IENvbnNvbGVNZXRob2Q7XG4gIHN0eWxlOiBzdHJpbmc7XG4gIHRlcm1pbmFsOiBDaGFsa1N0eWxlc1tdO1xuICBlbW9qaTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlcnMge1xuICBoaWRlQWxsOiBib29sZWFuO1xuICBuYW1lc3BhY2U6IEZpbHRlck9wdGlvbnM7XG4gIGxhYmVsOiBGaWx0ZXJPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlck9wdGlvbnMge1xuICBoaWRlQWxsOiBib29sZWFuO1xuICBleGNsdWRlOiBzdHJpbmdbXTtcbiAgaW5jbHVkZTogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZVBhcnRpYWw8RGVmYXVsdHM+IHt9OyIsImltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCB7IExvZ0xldmVsRGVmaW5pdGlvbiwgQ29uZmlndXJhdGlvbiwgQ29uc29sZU1ldGhvZCwgRGVmYXVsdHMgfSBmcm9tIFwiLlwiO1xuXG4vKipcbiAqIEZpbmdlcnByaW50IG9mIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHlvdSBleGVjdXRlXG4gKiBhIGxvZyBtZXRob2Qgc3VjaCBhcyBpbmZvKCkuXG4gKi9cbmV4cG9ydCB0eXBlIExvZ0Z1bmN0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBUZXJtaW5hdGVkTG9nO1xuXG4vKipcbiAqIEZpbmdlcnByaW50IG9mIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHlvdSBleGVjdXRlXG4gKiBhIGN1c3RvbSBsb2cgbWV0aG9kIGRlZmluZWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCB0eXBlIEN1c3RvbUxvZ0Z1bmN0aW9uID0gKGxldmVsTmFtZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkgPT4gVGVybWluYXRlZExvZztcblxuLyoqXG4gKiBUaGUga2V5cyBvZiB0aGUgZGVmYXVsdCB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kcyBpbmNsdWRlZCB3aXRoIEFkemUuXG4gKi9cbmV4cG9ydCB0eXBlIFRlcm1pbmF0aW5nTWV0aG9kS2V5cyA9IFwiYXR0ZW50aW9uXCJ8XCJlcnJvclwifFwid2FyblwifFwiZmFpbFwifFwic3VjY2Vzc1wifFwiaW5mb1wifFwibG9nXCJ8XCJkZWJ1Z1wifFwidmVyYm9zZVwiO1xuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIGludGVyZmFjZSBmb3IgdGhlIGRlZmF1bHQgQWR6ZSB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IHR5cGUgVGVybWluYXRpbmdNZXRob2RzID0ge1xuICBbbWV0aG9kIGluIFRlcm1pbmF0aW5nTWV0aG9kS2V5c106IExvZ0Z1bmN0aW9uO1xufTtcblxuLyoqXG4gKiBCb29sZWFuIGZsYWdzIHRoYXQgcmVwcmVzZW50IHZhcmlvdXMgc3RhdGVzIG9mIGhvdyB0aGUgbG9nXG4gKiBzaG91bGQgYmUgcHJpbnRlZC5cbiAqL1xuaW50ZXJmYWNlIExvZ0ZsYWdzIHtcbiAgdHJhY2VhYmxlOiBib29sZWFuO1xuICBhc3NlcnRpb24/OiBib29sZWFuO1xuICBleHByZXNzaW9uPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBWYWx1ZXMgb2YgdGhlIGxvZyBpbnN0YW5jZSB0aGF0IGRldGVybWluZSBob3cgaXQgc2hvdWxkXG4gKiBiZSBwcmludGVkLlxuICovXG5pbnRlcmZhY2UgTG9nVmFsdWVzIHtcbiAgY2ZnOiBDb25maWd1cmF0aW9uO1xuICByZW5kZXI/OiBMb2dSZW5kZXI7XG4gIGFyZ3M/OiBhbnlbXTtcbiAgbmFtZXNwYWNlVmFsPzogc3RyaW5nO1xuICBsYWJlbFZhbD86IExhYmVsO1xuICB0aW1lTm93VmFsPzogc3RyaW5nO1xuICBtb2RpZmllclF1ZXVlOiBGdW5jdGlvbltdO1xuICBwcmludGVyKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOiBMb2dSZW5kZXI7XG59XG5cbmV4cG9ydCB0eXBlIEJ1bmRsZSA9ICh1c2VyX2NmZz86IENvbmZpZ3VyYXRpb24pID0+IExvZztcblxuZXhwb3J0IGludGVyZmFjZSBCdW5kbGVkIHtcbiAgYWxsKCk6IHZvaWQ7XG59O1xuXG4vKipcbiAqIEFsbCBvZiB0aGUgdXNlciBhY2Nlc3NpYmxlIG1ldGhvZHMgdGhhdCBjYW4gYmUgY2hhaW5lZCB0b1xuICogY3JlYXRlIGEgY3VzdG9taXplZCBsb2cuXG4gKi9cbmludGVyZmFjZSBMb2dNZXRob2RzIHtcbiAgY3VzdG9tOiBDdXN0b21Mb2dGdW5jdGlvbjtcbiAgc2VhbCh0aGlzOiBMb2cpOiBMb2c7XG4gIGNhY2hlKHRoaXM6IExvZywgYXJnczogYW55W10pOiB2b2lkO1xuICBwcmludCh0aGlzOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBhcmdzOiBhbnlbXSk6IExvZ1JlbmRlcjtcbiAgZmlyZUxpc3RlbmVycyh0aGlzOiBMb2csIGFyZ3M6IGFueVtdKTogdm9pZDtcbiAgXG4gIC8vIE1vZGlmaWVyIEZ1bmN0aW9uc1xuICBjb3VudCgpOiBMb2c7XG4gIGNvdW50UmVzZXQoKTogTG9nO1xuICBkaXIoKTogTG9nO1xuICBkaXJ4bWwoKTogTG9nO1xuICB0YWJsZSgpOiBMb2c7XG4gIGFzc2VydChhc3NlcnRpb246IGJvb2xlYW4pOiBMb2c7XG4gIHRlc3QoZXhwcmVzc2lvbjogYm9vbGVhbik6IExvZztcbiAgZ3JvdXAoKTogTG9nO1xuICBncm91cENvbGxhcHNlZCgpOiBMb2c7XG4gIGdyb3VwRW5kKCk6IExvZztcbiAgbGFiZWwobmFtZTogc3RyaW5nKTogTG9nO1xuICBucyhuczogc3RyaW5nKTogTG9nO1xuICBuYW1lc3BhY2UobnM6IHN0cmluZyk6IExvZztcbiAgdHJhY2UoKTogTG9nO1xuICB0aW1lKCk6IExvZztcbiAgdGltZU5vdygpOiBMb2c7XG4gIHRpbWVFbmQoKTogTG9nO1xufVxuXG4vKipcbiAqIFRoZSBmaW5hbCBBZHplIGxvZyBvYmplY3QgcHJvdG90eXBlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2cgZXh0ZW5kcyBMb2dGbGFncywgTG9nVmFsdWVzLCBMb2dNZXRob2RzLCBUZXJtaW5hdGluZ01ldGhvZHMsIEJ1bmRsZWQge307XG5cbi8qKlxuICogVGhlIHJlbmRlciB2YWx1ZSBmb3IgYSBMb2cuXG4gKi9cbnR5cGUgQXJndW1lbnRzID0gYW55W107XG5leHBvcnQgdHlwZSBMb2dSZW5kZXIgPSBbQ29uc29sZU1ldGhvZCwgQXJndW1lbnRzXTtcblxuLyoqXG4gKiBUaGUgZmluYWwgdmFsdWUgb2YgYSBsb2cgYWZ0ZXIgaXQgaGFzIGJlZW4gdGVybWluYXRlZC4gVGhpcyBpcyB1c2VmdWwgZm9yIFxuICogZ2xlYW5pbmcgdGhlIGZpbmFsIHJlbmRlciBpbmZvcm1hdGlvbiBhbmQgZ2V0dGluZyB0aGUgTG9nIGluc3RhbmNlIGZvciBcbiAqIHVuaXQgdGVzdGluZyBwdXJwb3Nlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZXJtaW5hdGVkTG9nIHtcbiAgbG9nOiBMb2c7XG4gIHJlbmRlcjogTG9nUmVuZGVyfG51bGw7XG59OyIsImV4cG9ydCB7IEFkemUsIExvZ0ZhY3RvcnkgfSBmcm9tICcuL0FkemUnO1xuZXhwb3J0IHtcbiAgTG9nLCBMb2dGdW5jdGlvbiwgQ3VzdG9tTG9nRnVuY3Rpb24sIEJ1bmRsZSxcbiAgVGVybWluYXRpbmdNZXRob2RzLCBUZXJtaW5hdGluZ01ldGhvZEtleXMsXG4gIExvZ1JlbmRlciwgVGVybWluYXRlZExvZyxcbn0gZnJvbSAnLi9Mb2cnO1xuZXhwb3J0IHtcbiAgU2hlZCwgTGlzdGVuZXJDYWxsYmFjaywgTGlzdGVuZXJzLFxuICBMaXN0ZW5lckxvY2F0aW9ucywgTGlzdGVuZXJEYXRhLFxufSBmcm9tICcuL1NoZWQnO1xuZXhwb3J0IHtcbiAgRGVmYXVsdHMsIExvZ0xldmVscywgTG9nTGV2ZWxEZWZpbml0aW9uLFxuICBGaWx0ZXJzLCBDb25maWd1cmF0aW9uLCBDb25zb2xlTWV0aG9kLFxufSBmcm9tICcuL0NvbmZpZ3VyYXRpb24nO1xuZXhwb3J0IHsgTGFiZWwgfSBmcm9tICcuL0xhYmVsJztcbmV4cG9ydCB7IENoYWxrU3R5bGVzIH0gZnJvbSAnLi9TdHlsZXMnO1xuZXhwb3J0IHsgSHJUaW1lIH0gZnJvbSAnLi9IclRpbWUnO1xuZXhwb3J0IHsgUmVjdXJzaXZlUGFydGlhbCB9IGZyb20gJy4vVXRpbGl0eSc7IiwiaW1wb3J0IHsgaXNDaHJvbWUsIGlzRmlyZWZveCwgaXNTYWZhcmkgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgRGVmYXVsdHMgfSBmcm9tIFwiLi4vX2NvbnRyYWN0c1wiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdHM6IERlZmF1bHRzID0ge1xuICBsb2dfbGV2ZWw6IDgsXG4gIGxvZ19jYWNoZV9zaXplOiAzMDAsXG4gIHVzZV9lbW9qaTogZmFsc2UsXG4gIGJhc2Vfc3R5bGU6ICdmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwOyBib3JkZXItd2lkdGg6IDFweDsgYm9yZGVyLXN0eWxlOiBzb2xpZDsnLFxuICBjdXN0b21fbGV2ZWxzOiB7fSxcbiAgbG9nX2xldmVsczoge1xuICAgIHZlcmJvc2U6IHtcbiAgICAgIGxldmVsOiA4LFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAyNnB4OyBib3JkZXItY29sb3I6IDFweCBzb2xpZCAjZDlkY2UwOyBjb2xvcjogIzk5OTk5OTsgYm9yZGVyLWNvbG9yOiAjY2JjOWM5OycsXG4gICAgICB0ZXJtaW5hbDogWydpdGFsaWMnLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2RlYnVnJyxcbiAgICAgIGVtb2ppOiAn8J+SpCdcbiAgICB9LFxuICAgIGRlYnVnOiB7XG4gICAgICBsZXZlbDogNyxcbiAgICAgIHN0eWxlOiAncGFkZGluZy1yaWdodDogMzhweDsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q5ZGNlMDsgY29sb3I6ICM0NjU0NjQ7IGJvcmRlci1jb2xvcjogIzk5OTk5OTsnLFxuICAgICAgdGVybWluYWw6IFsnYmdCbGFjaycsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnZGVidWcnLFxuICAgICAgZW1vamk6ICfwn5CeJ1xuICAgIH0sXG4gICAgbG9nOiB7XG4gICAgICBsZXZlbDogNixcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogNTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZDlkY2UwKTsgY29sb3I6ICMzMzM0MzU7IGJvcmRlci1jb2xvcjogI2JmYzFjNTtgLFxuICAgICAgdGVybWluYWw6IFsnYmdHcmF5JywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdsb2cnLFxuICAgICAgZW1vamk6ICfwn5OTJ1xuICAgIH0sXG4gICAgc3VjY2Vzczoge1xuICAgICAgbGV2ZWw6IDUsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDI2cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2NlZWRjOSk7IGNvbG9yOiAjNGU1OTRkOyBib3JkZXItY29sb3I6ICNiN2QxYjM7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnR3JlZW4nLCAnZ3JheSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/CfjoknXG4gICAgfSxcbiAgICBmYWlsOiB7XG4gICAgICBsZXZlbDogNCxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHsgaXNDaHJvbWUgPyAnMzQnIDogJzMyJyB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2ZmZDFkMSk7IGNvbG9yOiAjYTQwMDBmOyBib3JkZXItY29sb3I6ICNlM2JiYmI7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnUmVkJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdpbmZvJyxcbiAgICAgIGVtb2ppOiAn4p2MJ1xuICAgIH0sXG4gICAgaW5mbzoge1xuICAgICAgbGV2ZWw6IDMsXG4gICAgICBzdHlsZTogYHBhZGRpbmctcmlnaHQ6ICR7IGlzU2FmYXJpID8gJzQ5JyA6ICc0NCcgfXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNiMmQ3ZmYpOyBjb2xvcjogIzQ2NTQ2NDsgYm9yZGVyLWNvbG9yOiAjOTZiNWQ3O2AsXG4gICAgICB0ZXJtaW5hbDogWydiZ0JsdWUnLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfwn5OsJ1xuICAgIH0sXG4gICAgd2Fybjoge1xuICAgICAgbGV2ZWw6IDIsXG4gICAgICBzdHlsZTogYGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2ZmZjBhOCk7IGNvbG9yOiAjNzE1MTAwOyBib3JkZXItY29sb3I6ICNlM2Q2OTY7IHBhZGRpbmctcmlnaHQ6ICR7IGlzQ2hyb21lID8gJzM0JyA6ICc0NCcgfXB4OyBgLFxuICAgICAgdGVybWluYWw6IFsnYmdZZWxsb3cnLCAnZ3JheSddLFxuICAgICAgbWV0aG9kOiAnd2FybicsXG4gICAgICBlbW9qaTogJ/CflJQnXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbGV2ZWw6IDEsXG4gICAgICBzdHlsZTogYHBhZGRpbmctcmlnaHQ6ICR7IGlzQ2hyb21lID8gJzI5JyA6ICcyNycgfXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNmZmQxZDEpOyBjb2xvcjogI2E0MDAwZjsgYm9yZGVyLWNvbG9yOiAjZTNiYmJiO2AsXG4gICAgICB0ZXJtaW5hbDogWydiZ1JlZCcsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgZW1vamk6ICfwn5SlJ1xuICAgIH0sXG4gICAgYXR0ZW50aW9uOiB7XG4gICAgICBsZXZlbDogMCxcbiAgICAgIHN0eWxlOiAncGFkZGluZy1yaWdodDogMTVweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZTJiYWZmKTsgY29sb3I6ICM0ODNjNTE7IGJvcmRlci1jb2xvcjogI2MxOWZkOTsnLFxuICAgICAgdGVybWluYWw6IFsnd2hpdGUnLCdib2xkJywnYmdNYWdlbnRhJ10sXG4gICAgICBtZXRob2Q6ICdpbmZvJyxcbiAgICAgIGVtb2ppOiAn8J+MiCcsXG4gICAgfSxcbiAgfSxcbiAgZmlsdGVyczoge1xuICAgIGhpZGVBbGw6IGZhbHNlLFxuICAgIG5hbWVzcGFjZToge1xuICAgICAgaGlkZUFsbDogZmFsc2UsXG4gICAgICBleGNsdWRlOiBbXSxcbiAgICAgIGluY2x1ZGU6IFtdLFxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIGhpZGVBbGw6IGZhbHNlLFxuICAgICAgZXhjbHVkZTogW10sXG4gICAgICBpbmNsdWRlOiBbXSxcbiAgICB9XG4gIH0sXG59O1xuXG4iLCJleHBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMnOyIsImNvbnN0IGRlZmF1bHRzRGVlcCA9IHJlcXVpcmUoJ2xvZGFzaC5kZWZhdWx0c2RlZXAnKTtcblxuaW1wb3J0IHsgTG9nLCBDb25maWd1cmF0aW9uLCBEZWZhdWx0cyB9IGZyb20gJy4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBsb2dNZXRob2QsIGN1c3RvbU1ldGhvZCwgc2VhbCB9IGZyb20gJy4vdGVybWluYXRvcnMnO1xuaW1wb3J0IHtcbiAgY291bnQsIGNvdW50UmVzZXQsIGRpciwgZGlyeG1sLCB0YWJsZSwgYXNzZXJ0LFxuICB0ZXN0LCAgZ3JvdXAsIGdyb3VwQ29sbGFwc2VkLCBncm91cEVuZCwgbGFiZWwsXG4gIG5hbWVzcGFjZSwgbnMsIHRyYWNlLCB0aW1lLCB0aW1lTm93LCB0aW1lRW5kLFxufSBmcm9tICcuL21vZGlmaWVycyc7XG5pbXBvcnQgeyBwcmludCwgcHJpbnRMb2cgfSBmcm9tICcuL3ByaW50ZXJzJztcbmltcG9ydCB7IGNhY2hlLCBmaXJlTGlzdGVuZXJzIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL19kZWZhdWx0cyc7XG5cbi8qKlxuICogVGhlIGVudHJ5IHBvaW50IGZvciBjcmVhdGluZyBBZHplIGxvZ3MuIFRoaXMgZmFjdG9yeSBtZXRob2QgY2FuIGJlIHVzZWQgZGlyZWN0bHkgb3IgY29uZmlndXJhdGlvblxuICogY2FuIGJlIHByb3ZpZGVkIGFuZCB0aGUgcmVzdWx0IGNhbiBiZSBhc3NpZ25lZCB0byBhIG5ldyB2YXJpYWJsZS4gVGhpcyBhbGxvd3MgZm9yIG11bHRpcGxlXG4gKiBsb2dnaW5nIGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25maWd1cmF0aW9ucy5cbiAqIFxuICogLS0tIERlZmF1bHQgbGV2ZWxzIC0tLVxuICogMC4gYXR0ZW50aW9uXG4gKiAxLiBlcnJvclxuICogMi4gd2FyblxuICogMy4gaW5mb1xuICogNC4gZmFpbFxuICogNS4gc3VjY2Vzc1xuICogNi4gbG9nXG4gKiA3LiBkZWJ1Z1xuICogOC4gdmVyYm9zZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWR6ZSh1c2VyX2NmZzogQ29uZmlndXJhdGlvbiA9IHt9KTpMb2cge1xuICBjb25zdCBjZmcgPSBkZWZhdWx0c0RlZXAodXNlcl9jZmcsIGRlZmF1bHRzKSBhcyBEZWZhdWx0cztcblxuICByZXR1cm4ge1xuICAgIGNmZyxcbiAgICB0cmFjZWFibGU6IGZhbHNlLFxuICAgIG1vZGlmaWVyUXVldWU6IFtdLFxuICAgIHByaW50ZXI6IHByaW50TG9nLFxuXG4gICAgYXR0ZW50aW9uOiAgbG9nTWV0aG9kKGNmZywgJ2F0dGVudGlvbicpLFxuICAgIGVycm9yOiAgICAgIGxvZ01ldGhvZChjZmcsICdlcnJvcicpLFxuICAgIHdhcm46ICAgICAgIGxvZ01ldGhvZChjZmcsICd3YXJuJyksXG4gICAgaW5mbzogICAgICAgbG9nTWV0aG9kKGNmZywgJ2luZm8nKSxcbiAgICBmYWlsOiAgICAgICBsb2dNZXRob2QoY2ZnLCAnZmFpbCcpLFxuICAgIHN1Y2Nlc3M6ICAgIGxvZ01ldGhvZChjZmcsICdzdWNjZXNzJyksXG4gICAgbG9nOiAgICAgICAgbG9nTWV0aG9kKGNmZywgJ2xvZycpLFxuICAgIGRlYnVnOiAgICAgIGxvZ01ldGhvZChjZmcsICdkZWJ1ZycpLFxuICAgIHZlcmJvc2U6ICAgIGxvZ01ldGhvZChjZmcsICd2ZXJib3NlJyksXG4gICAgY3VzdG9tOiAgICAgY3VzdG9tTWV0aG9kKGNmZyksXG5cbiAgICBhbGw6ICgpID0+IHt9LFxuXG4gICAgc2VhbCwgY2FjaGUsIHByaW50LCBmaXJlTGlzdGVuZXJzLCBjb3VudCwgY291bnRSZXNldCxcbiAgICBkaXIsIGRpcnhtbCwgdGFibGUsIGFzc2VydCwgdGVzdCwgZ3JvdXAsIGdyb3VwQ29sbGFwc2VkLFxuICAgIGdyb3VwRW5kLCBsYWJlbCwgbmFtZXNwYWNlLCBucywgdHJhY2UsIHRpbWUsIHRpbWVOb3csIHRpbWVFbmQsXG4gIH07XG59IiwiaW1wb3J0IHsgQWR6ZSwgQ29uZmlndXJhdGlvbiwgQnVuZGxlLCBMb2csIFRlcm1pbmF0aW5nTWV0aG9kcywgVGVybWluYXRpbmdNZXRob2RLZXlzIH0gZnJvbSAnLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGFsbCB9IGZyb20gJy4vZmlsdGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidW5kbGUobG9nOiBMb2cpOkJ1bmRsZSB7XG4gIGNvbnN0IGJ1bmRsZSA9IFtdIGFzIExvZ1tdO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCBidW5kbGVkX2xvZzogTG9nID0geyAuLi5sb2cgfTtcbiAgICBidW5kbGVkX2xvZy5hbGwgPSBjdXJyeUJ1bmRsZShidW5kbGVkX2xvZywgYnVuZGxlLCBhbGwpO1xuICAgIGJ1bmRsZS5wdXNoKGJ1bmRsZWRfbG9nKTtcbiAgICByZXR1cm4gYnVuZGxlZF9sb2c7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBjdXJyeUJ1bmRsZShjdHh0OiBMb2csIGJ1bmRsZTogTG9nW10sIGZuOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOigpID0+IHZvaWQge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGZuKGN0eHQsIGJ1bmRsZSwgLi4uYXJncyk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBMb2csIExvZ0xldmVsRGVmaW5pdGlvbiwgRGVmYXVsdHMgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgeyBzdG9yZUV4aXN0cyB9IGZyb20gJy4uL3NoZWQnO1xuXG4vKipcbiAqIENhY2hlcyB0aGlzIGxvZyB0byB0aGUgU2hlZCBpZiBpdCBleGlzdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZSh0aGlzOiBMb2csIGFyZ3M6IGFueVtdKTp2b2lkIHtcbiAgaWYgKHN0b3JlRXhpc3RzKGVudi4kc2hlZCkpIHtcbiAgICBlbnYuJHNoZWQuYWRkVG9DYWNoZSh0aGlzLCBhcmdzKTtcbiAgfVxufVxuXG4vKipcbiAqIEZpcmVzIGxpc3RlbmVycyBmb3IgdGhpcyBsb2cgaW5zdGFuY2UgaWYgYSBTaGVkIGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnModGhpczogTG9nLCBhcmdzOiBhbnlbXSk6dm9pZCB7XG4gIGlmIChzdG9yZUV4aXN0cyhlbnYuJHNoZWQpKSB7XG4gICAgZW52LiRzaGVkLmZpcmVMaXN0ZW5lcnModGhpcywgYXJncyk7XG4gIH1cbn0iLCJleHBvcnQgeyBjYWNoZSwgZmlyZUxpc3RlbmVycyB9IGZyb20gJy4vZXZlbnRzJzsiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFsbChjdHh0OiBMb2csIGJ1bmRsZTogTG9nW10gPSBbXSkge1xuICBidW5kbGUuZm9yRWFjaChsb2cgPT4ge1xuICAgIGNvbnN0IHJlbmRlciA9IGxvZy5yZW5kZXI7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY29uc3QgWyBtZXRob2QsIGFyZ3MgXSA9IHJlbmRlcjtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICB9XG4gIH0pO1xufSIsImV4cG9ydCB7IGFsbCB9IGZyb20gJy4vZmlsdGVycyc7IiwiaW1wb3J0IHsgU2hlZCB9IGZyb20gJy4vX2NvbnRyYWN0cyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgJHNoZWQ/OiBTaGVkO1xuICAgIEFEWkVfRU5WPzogc3RyaW5nO1xuICB9XG4gIG5hbWVzcGFjZSBOb2RlSlMge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsIHtcbiAgICAgICRzaGVkPzogU2hlZDtcbiAgICAgIEFEWkVfRU5WPzogc3RyaW5nO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW52OiBXaW5kb3d8Tm9kZUpTLkdsb2JhbCA9IGdsb2JhbCA/IGdsb2JhbCA6IHdpbmRvdztcbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGNvbnN0IGVudklzV2luZG93ID0gKGVudjogV2luZG93fE5vZGVKUy5HbG9iYWwpOiBlbnYgaXMgV2luZG93ID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZDtcbn07XG5cbmxldCBpc0Nocm9tZVZhciA9IGZhbHNlO1xubGV0IGlzRmlyZWZveFZhciA9IGZhbHNlO1xubGV0IGlzU2FmYXJpVmFyID0gZmFsc2U7XG5cbmlmIChlbnZJc1dpbmRvdyhlbnYpKSB7XG4gIGlzQ2hyb21lVmFyID0gZW52Py5uYXZpZ2F0b3I/LnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpID4gLTE7XG4gIGlzRmlyZWZveFZhciA9IGVudj8ubmF2aWdhdG9yPy51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgPiAtMTtcbiAgaXNTYWZhcmlWYXIgPSBlbnY/Lm5hdmlnYXRvcj8udXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgPiAtMSAmJiAhaXNDaHJvbWVWYXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc0Nocm9tZSA9IGlzQ2hyb21lVmFyO1xuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IGlzRmlyZWZveFZhcjtcbmV4cG9ydCBjb25zdCBpc1NhZmFyaSA9IGlzU2FmYXJpVmFyOyIsImltcG9ydCB7IFNoZWQsIExvZywgTG9nRnVuY3Rpb24gfSBmcm9tICcuL19jb250cmFjdHMnO1xuaW1wb3J0IHsgYWR6ZSB9IGZyb20gJy4vYWR6ZSc7XG5pbXBvcnQgeyBidW5kbGUgfSBmcm9tICcuL2J1bmRsZSc7XG5pbXBvcnQgeyBjcmVhdGVTaGVkIH0gZnJvbSAnLi9zaGVkJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xuXG5leHBvcnQgeyBhZHplLCBkZWZhdWx0cywgTG9nLCBMb2dGdW5jdGlvbiwgYnVuZGxlIH07IiwiZXhwb3J0IHsgZ2V0TGFiZWwsIGFkZExhYmVsLCBoYXNMYWJlbCB9IGZyb20gJy4vbGFiZWwnOyIsImltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgc3RvcmVFeGlzdHMgfSBmcm9tICcuLi9zaGVkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVsKG5hbWU6IHN0cmluZyk6TGFiZWx8dW5kZWZpbmVkIHtcbiAgaWYgKHN0b3JlRXhpc3RzKGVudi4kc2hlZCkpIHtcbiAgICByZXR1cm4gZW52LiRzaGVkLmxhYmVscy5nZXQobmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExhYmVsKGxhYmVsOiBMYWJlbCk6TGFiZWwge1xuICBpZiAoc3RvcmVFeGlzdHMoZW52LiRzaGVkKSAmJiAhaGFzTGFiZWwobGFiZWwubmFtZSkpIHtcbiAgICBlbnYuJHNoZWQubGFiZWxzLnNldChsYWJlbC5uYW1lLCBsYWJlbCk7XG4gIH1cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzTGFiZWwobmFtZTogc3RyaW5nKTpib29sZWFufHVuZGVmaW5lZCB7XG4gIHJldHVybiBlbnYuJHNoZWQ/LmxhYmVscy5oYXMobmFtZSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY291bnQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ID0gdGhpcy5sYWJlbFZhbC5jb3VudCA/PyAwO1xuICAgICAgdGhpcy5sYWJlbFZhbC5jb3VudCArPSAxO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFJlc2V0KHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC5jb3VudCA9IDA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50Q2xlYXIodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuaW1wb3J0IHsgcHJpbnREaXIsIHByaW50RGlyeG1sLCBwcmludFRhYmxlIH0gZnJvbSAnLi4vcHJpbnRlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludERpcjtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJ4bWwodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50RGlyeG1sO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhYmxlKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludFRhYmxlO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5pbXBvcnQgeyBwcmludEdyb3VwLCBwcmludEdyb3VwQ29sbGFwc2VkLCBwcmludEdyb3VwRW5kIH0gZnJvbSAnLi4vcHJpbnRlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXAodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50R3JvdXA7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBDb2xsYXBzZWQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50R3JvdXBDb2xsYXBzZWQ7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBFbmQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50R3JvdXBFbmQ7XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgZ2V0TGFiZWwsIGFkZExhYmVsIH0gZnJvbSAnLi4vbGFiZWwnO1xuaW1wb3J0IHsgcHJlcGVuZE1vZGlmaWVyLCBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuaW1wb3J0IHsgcHJpbnRUcmFjZSB9IGZyb20gJy4uL3ByaW50ZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsKHRoaXM6IExvZywgbmFtZTogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gcHJlcGVuZE1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmxhYmVsVmFsID0gYWRkTGFiZWwoZ2V0TGFiZWwobmFtZSkgPz8geyBuYW1lIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZSh0aGlzOiBMb2csIG5zOiBzdHJpbmcpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5uYW1lc3BhY2VWYWwgPSBucztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBucyh0aGlzOiBMb2csIG5zOiBzdHJpbmcpOkxvZyB7XG4gIHJldHVybiB0aGlzLm5hbWVzcGFjZShucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFjZSh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRUcmFjZTtcbiAgfSlcbn0iLCJleHBvcnQgeyB0aW1lLCB0aW1lTm93LCB0aW1lRW5kIH0gZnJvbSAnLi90aW1pbmcnO1xuZXhwb3J0IHsgY291bnQsIGNvdW50UmVzZXQgfSBmcm9tICcuL2NvdW50aW5nJztcbmV4cG9ydCB7IGRpciwgZGlyeG1sLCB0YWJsZSB9IGZyb20gJy4vZm9ybWF0dGluZyc7XG5leHBvcnQgeyBncm91cCwgZ3JvdXBDb2xsYXBzZWQsIGdyb3VwRW5kIH0gZnJvbSAnLi9ncm91cGluZyc7XG5leHBvcnQgeyBsYWJlbCwgbmFtZXNwYWNlLCBucywgdHJhY2UgfSBmcm9tICcuL2lkZW50aWZ5aW5nJztcbmV4cG9ydCB7IG1vZGlmaWVyLCBwcmVwZW5kTW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcbmV4cG9ydCB7IGFzc2VydCwgdGVzdCB9IGZyb20gJy4vdGVzdGluZyc7XG5cbiIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZpZXIoY29udGV4dDogTG9nLCBmdW5jOiBGdW5jdGlvbik6TG9nIHtcbiAgY29udGV4dC5tb2RpZmllclF1ZXVlID0gY29udGV4dC5tb2RpZmllclF1ZXVlLmNvbmNhdChbZnVuY10pO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRNb2RpZmllcihjb250ZXh0OiBMb2csIGZ1bmM6IEZ1bmN0aW9uKTpMb2cge1xuICBjb250ZXh0Lm1vZGlmaWVyUXVldWUgPSBbZnVuY10uY29uY2F0KGNvbnRleHQubW9kaWZpZXJRdWV1ZSk7XG4gIHJldHVybiBjb250ZXh0O1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuLy8gUHJpbnRzIGxvZyB3YXJuaW5nIHRoYXQgdGhlIGFzc2VydGlvbiBmYWlsZWQgaWYgYXNzZXJ0aW9uIGlzIGZhbHNlLlxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydCh0aGlzOiBMb2csIGFzc2VydGlvbjogYm9vbGVhbik6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmFzc2VydGlvbiA9IGFzc2VydGlvbjtcbiAgfSk7XG59XG5cbi8vIE5vbi1zdGFuZGFyZC4gQWxsb3dzIGxvZyB0byBwcmludCBpZiBleHByZXNzaW9uIGlzIHRydWUuXG5leHBvcnQgZnVuY3Rpb24gdGVzdCh0aGlzOiBMb2csIGV4cHJlc3Npb246IGJvb2xlYW4pOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfSk7XG59IiwiY29uc3QgaHJ0aW1lID0gcmVxdWlyZSgnYnJvd3Nlci1wcm9jZXNzLWhydGltZScpO1xuXG5pbXBvcnQgeyBMb2csIEhyVGltZSB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuLyoqXG4gKiBTdGFydHMgYSB0aW1lciBhc3NvY2lhdGVkIHdpdGggdGhpcyBsb2cncyAqbGFiZWwqLiBUaGlzIHdpbGwgZG8gbm90aGluZyBpZlxuICogdGhpcyBsb2cgaGFzIG5vIGxhYmVsLlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL3RpbWUpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZSh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwudGltZVN0YXJ0ID0gaHJ0aW1lKCk7XG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBsb2cgcmVuZGVyIHRvIHNob3cgdGhlIGN1cnJlbnQgaGlnaC1yZXNvbHV0aW9uIHJlYWwgdGltZS5cbiAqIFxuICogISEgVGhpcyBpcyBub3QgYSBzdGFuZGFyZCBtZXRob2QuICEhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lTm93KHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBjb25zdCB0aW1lX25vdyA9IGZvcm1hdFRpbWUoaHJ0aW1lKCkpO1xuICAgIHRoaXMubGFiZWxWYWwgPyB0aGlzLmxhYmVsVmFsLnRpbWVOb3cgPSB0aW1lX25vdyA6IHRoaXMudGltZU5vd1ZhbCA9IHRpbWVfbm93O1xuICB9KVxufVxuXG4vKipcbiAqIFN0b3BzIGEgdGltZXIgdGhhdCB3YXMgcHJldmlvdXNseSBzdGFydGVkIGJ5IGNhbGxpbmcgdGltZSgpIG9uIGEgKmxhYmVsZWQqIGxvZy4gQ2FsY3VsYXRlcyB0aGUgXG4gKiBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHN0YXJ0IHRpbWUgYW5kIHdoZW4gdGhpcyBtZXRob2Qgd2FzIGNhbGxlZC4gVGhpcyB0aGVuXG4gKiBtb2RpZmllcyB0aGUgbG9nIHJlbmRlciB0byBzaG93IHRoZSB0aW1lIGRpZmZlcmVuY2UuIFRoaXMgd2lsbCBkbyBub3RoaW5nIGlmIHRoZSAqbGFiZWwqIGRvZXNcbiAqIG5vdCBleGlzdC5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS90aW1lRW5kKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVFbmQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLnRpbWVFbGxhcHNlZCA9IGZvcm1hdFRpbWUoaHJ0aW1lKHRoaXMubGFiZWxWYWwudGltZVN0YXJ0KSk7XG4gICAgfVxuICB9KTtcbn1cblxuLypcbiAgISBjb25zb2xlLnRpbWVMb2coKSBpcyBwdXJwb3NlZnVsbHkgb21pdHRlZCBmcm9tIHRoaXMgQVBJLlxuXG4gIHRpbWVMb2coKSBpcyBhIHVzZWxlc3MgbWV0aG9kIHdpdGhpbiB0aGUgQWR6ZSBBUEkuIFRoZSBzYW1lIGVmZmVjdCBjYW4gYmUgXG4gIGFjY29tcGxpc2hlZCBieSBjcmVhdGVkIGEgbmV3IGxvZyB3aXRoIHRoZSBzYW1lIGxhYmVsLlxuKi9cblxuLyoqXG4gKiBUYWtlcyBhbiBIclRpbWUgdHVwbGUgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBodW1hbi1yZWFkYWJsZSBmb3JtYXR0ZWRcbiAqIHN0cmluZyBpbiB0aGUgZm9ybWF0IG9mIGB7c2VjfXMge21zfW1zYC5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGltZShbIHNlYywgbmFubyBdOiBIclRpbWUpOnN0cmluZyB7XG4gIHJldHVybiBgJHtzZWN9cyAke25hbm8gLyAxMDAwMDAwfW1zYDtcbn1cbiIsImV4cG9ydCB7IHByaW50TG9nLCBwcmludEdyb3VwLCBwcmludEdyb3VwQ29sbGFwc2VkLCBmTGVhZGVyLCBmTWV0YSB9IGZyb20gJy4vcHJpbnRlcnMnOyIsImltcG9ydCB7IExvZywgTG9nTGV2ZWxEZWZpbml0aW9uLCBMb2dSZW5kZXIgfSBmcm9tICcuLi8uLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGFwcGx5UmVuZGVyLCB0b0NvbnNvbGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcbmltcG9ydCB7IGluaXRpYWxDYXBzIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2codGhpczogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgWyBtZXRob2QsIGxlYWRlciwgc3R5bGUsIG1ldGEgXSA9IFsgZGVmLm1ldGhvZCwgZkxlYWRlcihkZWYsIGFyZ3MpLCAodGhpcy5jZmcuYmFzZV9zdHlsZSArIGRlZi5zdHlsZSksIGZNZXRhKHRoaXMpIF07XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gbWV0YSA9PT0gJycgPyBbIGxlYWRlciwgc3R5bGUsIC4uLmFyZ3MgXSA6IFsgbGVhZGVyLCBzdHlsZSwgbWV0YSwgLi4uYXJncyBdO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKHRoaXMsIG1ldGhvZCwgcmVuZGVyX2FyZ3MgKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IHBhcnRpYWxfYXJncyA9IFsgZkxlYWRlcihkZWYsIGFyZ3MpLCAodGhpcy5jZmcuYmFzZV9zdHlsZSArIGRlZi5zdHlsZSkgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IFsgLi4ucGFydGlhbF9hcmdzLCBhcmdzWzBdIF0gOiBwYXJ0aWFsX2FyZ3M7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIodGhpcywgJ2dyb3VwJywgcmVuZGVyX2FyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXBDb2xsYXBzZWQodGhpczogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgcGFydGlhbF9hcmdzID0gWyBmTGVhZGVyKGRlZiwgYXJncyksICh0aGlzLmNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gWyAuLi5wYXJ0aWFsX2FyZ3MsIGFyZ3NbMF0gXSA6IHBhcnRpYWxfYXJncztcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAnZ3JvdXBDb2xsYXBzZWQnLCByZW5kZXJfYXJncykpO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIEZPUk1BVFRFUlMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZMZWFkZXIoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGFyZ3M6IGFueVtdKTpzdHJpbmcge1xuICByZXR1cm4gYCAlYyR7ZkVtb2ppKGRlZil9ICR7Zk5hbWUoZGVmLmxldmVsTmFtZSl9KCR7YXJncy5sZW5ndGh9KWA7XG59XG5cbmZ1bmN0aW9uIGZFbW9qaShkZWY6IExvZ0xldmVsRGVmaW5pdGlvbik6c3RyaW5nIHtcbiAgcmV0dXJuIGVudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPT09IHRydWUgPyBgICR7ZGVmLmVtb2ppfWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWUobmFtZTogc3RyaW5nfHVuZGVmaW5lZCk6c3RyaW5nIHtcbiAgcmV0dXJuIGluaXRpYWxDYXBzKG5hbWUgPz8gJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZk1ldGEoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gYCR7Zk5hbWVzcGFjZShjdHh0KX0ke2ZMYWJlbChjdHh0KX0ke2ZUaW1lKGN0eHQpfSR7ZkNvdW50KGN0eHQpfWA7XG59XG5cbmZ1bmN0aW9uIGZUaW1lKGN0eHQ6IExvZyk6c3RyaW5nIHtcbiAgY29uc3QgbGFiZWxfdHh0ID0gYCR7Y3R4dC5sYWJlbFZhbD8udGltZU5vdyA/PyBjdHh0LmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJycgPyBgICgke2Vudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmQ291bnQoY3R4dDogTG9nKTpzdHJpbmcge1xuICBjb25zdCBjb3VudCA9IGN0eHQubGFiZWxWYWw/LmNvdW50O1xuICByZXR1cm4gY291bnQgIT09IHVuZGVmaW5lZCA/IGAoQ291bnQ6ICR7Y291bnR9KWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWVzcGFjZShjdHh0OiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBjdHh0Lm5hbWVzcGFjZVZhbCA/IGAjJHtjdHh0Lm5hbWVzcGFjZVZhbH0gYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmTGFiZWwoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gY3R4dC5sYWJlbFZhbCA/IGBbJHtjdHh0LmxhYmVsVmFsLm5hbWV9XSBgIDogJyc7XG59XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHtcbiAgcHJpbnRMb2cgYXMgcHJpbnRMb2dCcm93c2VyLFxuICBwcmludEdyb3VwIGFzIHByaW50R3JvdXBCcm93c2VyLFxuICBwcmludEdyb3VwQ29sbGFwc2VkIGFzIHByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyLFxufSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHtcbiAgcHJpbnRMb2cgYXMgcHJpbnRMb2dOb2RlLFxuICBwcmludEdyb3VwIGFzIHByaW50R3JvdXBOb2RlLFxuICBwcmludEdyb3VwQ29sbGFwc2VkIGFzIHByaW50R3JvdXBDb2xsYXBzZWROb2RlLFxufSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtcbiAgcHJpbnQsXG4gIHByaW50R3JvdXBFbmQsXG4gIHByaW50VGFibGUsXG4gIHByaW50RGlyLFxuICBwcmludERpcnhtbCxcbiAgcHJpbnRUcmFjZSxcbn0gZnJvbSAnLi9zaGFyZWQnO1xuXG5jb25zdCBwcmludExvZyA9IGlzQnJvd3NlciA/IHByaW50TG9nQnJvd3NlciA6IHByaW50TG9nTm9kZTtcbmNvbnN0IHByaW50R3JvdXAgPSBpc0Jyb3dzZXIgPyBwcmludEdyb3VwQnJvd3NlciA6IHByaW50R3JvdXBOb2RlO1xuY29uc3QgcHJpbnRHcm91cENvbGxhcHNlZCA9IGlzQnJvd3NlciA/IHByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyIDogcHJpbnRHcm91cENvbGxhcHNlZE5vZGU7XG5cbmV4cG9ydCB7XG4gIHByaW50LFxuICBwcmludExvZyxcbiAgcHJpbnRHcm91cCxcbiAgcHJpbnRHcm91cENvbGxhcHNlZCxcbiAgcHJpbnRHcm91cEVuZCxcbiAgcHJpbnRUYWJsZSxcbiAgcHJpbnREaXIsXG4gIHByaW50RGlyeG1sLFxuICBwcmludFRyYWNlLFxufTsiLCJleHBvcnQgeyBwcmludExvZywgcHJpbnRHcm91cCwgcHJpbnRHcm91cENvbGxhcHNlZCwgZkxlYWRlciwgZk1ldGEgfSBmcm9tICcuL3ByaW50ZXJzJzsiLCJpbXBvcnQgKiBhcyBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBMb2csIExvZ0xldmVsRGVmaW5pdGlvbiwgTG9nUmVuZGVyIH0gZnJvbSAnLi4vLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyB0b0NvbnNvbGUsIGFwcGx5UmVuZGVyIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XG5pbXBvcnQgeyBpbml0aWFsQ2FwcyB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG4vLyAtLS0tLS0tIFBSSU5UIE1FVEhPRFMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50TG9nKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IFsgbWV0aG9kLCBsZWFkZXIsIG1ldGEgXSA9IFsgZGVmLm1ldGhvZCwgZkxlYWRlcihkZWYsIHVzZV9lbW9qaSwgYXJncyksIGZNZXRhKHRoaXMsIHVzZV9lbW9qaSkgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBtZXRhID09PSAnJyA/IFsgbGVhZGVyLCAuLi5hcmdzIF0gOiBbIGxlYWRlciwgbWV0YSwgLi4uYXJncyBdO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKHRoaXMsIG1ldGhvZCwgcmVuZGVyX2FyZ3MgKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gc2V0dXBQcmludEdyb3VwKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKTtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAnZ3JvdXAnLCByZW5kZXJfYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRHcm91cENvbGxhcHNlZCh0aGlzOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCByZW5kZXJfYXJncyA9IHNldHVwUHJpbnRHcm91cChkZWYsIHVzZV9lbW9qaSwgYXJncyk7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIodGhpcywgJ2dyb3VwQ29sbGFwc2VkJywgcmVuZGVyX2FyZ3MpKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBQcmludEdyb3VwKGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTphbnlbXSB7XG4gIGNvbnN0IHBhcnRpYWxfYXJncyA9IFsgZkxlYWRlcihkZWYsIHVzZV9lbW9qaSwgYXJncykgXTtcbiAgcmV0dXJuIHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gWyAuLi5wYXJ0aWFsX2FyZ3MsIGFyZ3NbMF0gXSA6IHBhcnRpYWxfYXJncztcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBGT1JNQVRURVJTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBmTGVhZGVyKGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpzdHJpbmcge1xuICBjb25zdCBlbW9qaSA9IHVzZV9lbW9qaSA/IGZFbW9qaShkZWYuZW1vamkpIDogJyc7XG4gIGNvbnN0IHBhZGRpbmcgPSB1c2VfZW1vamkgPyAoMTQgKyBlbW9qaS5sZW5ndGgpIDogMTQ7XG4gIGNvbnN0IHBhZGRlZF9sZWFkZXIgPSBhZGRQYWRkaW5nKGAke2Vtb2ppfSAke2ZOYW1lKGRlZi5sZXZlbE5hbWUpfSgke2FyZ3MubGVuZ3RofSlgLCBwYWRkaW5nKTtcbiAgXG4gIHJldHVybiBkZWYudGVybWluYWwucmVkdWNlKChhY2MsIHN0eWxlKSA9PiB7XG4gICAgcmV0dXJuIGNoYWxrW3N0eWxlXShhY2MpO1xuICB9LCBwYWRkZWRfbGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkUGFkZGluZyhzdHI6IHN0cmluZywgbGVuOiBudW1iZXIpOnN0cmluZyB7XG4gIGNvbnN0IGRpZmYgPSBsZW4gLSBzdHIubGVuZ3RoO1xuICBsZXQgcGFkZGVkID0gc3RyO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBkaWZmOyBpICs9IDEpIHtcbiAgICBwYWRkZWQgKz0gJyAnO1xuICB9XG4gIHJldHVybiBwYWRkZWQ7XG59XG5cbmZ1bmN0aW9uIGZFbW9qaShlbW9qaTogc3RyaW5nKTpzdHJpbmcge1xuICByZXR1cm4gYCAke2Vtb2ppfWA7XG59XG5cbmZ1bmN0aW9uIGZOYW1lKG5hbWU6IHN0cmluZ3x1bmRlZmluZWQpOnN0cmluZyB7XG4gIHJldHVybiBpbml0aWFsQ2FwcyhuYW1lID8/ICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZNZXRhKGN0eHQ6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTpzdHJpbmcge1xuICByZXR1cm4gYCR7Zk5hbWVzcGFjZShjdHh0KX0ke2ZMYWJlbChjdHh0KX0ke2ZUaW1lKGN0eHQsIHVzZV9lbW9qaSl9JHtmQ291bnQoY3R4dCl9YDtcbn1cblxuZnVuY3Rpb24gZlRpbWUoY3R4dDogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOnN0cmluZyB7XG4gIGNvbnN0IGxhYmVsX3R4dCA9IGAke2N0eHQudGltZU5vd1ZhbCA/PyBjdHh0LmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJycgPyBgKCR7ZW52LiRzaGVkPy5jZmc/LnVzZV9lbW9qaSB8fCB1c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmQ291bnQoY3R4dDogTG9nKTpzdHJpbmcge1xuICBjb25zdCBjb3VudCA9IGN0eHQubGFiZWxWYWw/LmNvdW50O1xuICByZXR1cm4gY291bnQgIT09IHVuZGVmaW5lZCA/IGAoQ291bnQ6ICR7Y291bnR9KWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWVzcGFjZShjdHh0OiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBjdHh0Lm5hbWVzcGFjZVZhbCA/IGAjJHtjdHh0Lm5hbWVzcGFjZVZhbH0gYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmTGFiZWwoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gY3R4dC5sYWJlbFZhbCA/IGBbJHtjdHh0LmxhYmVsVmFsLm5hbWV9XSBgIDogJyc7XG59IiwiaW1wb3J0IHsgTG9nLCBMb2dSZW5kZXIsIERlZmF1bHRzLCBDb25zb2xlTWV0aG9kLCBMb2dMZXZlbERlZmluaXRpb24gfSBmcm9tIFwiLi4vX2NvbnRyYWN0c1wiO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vZ2xvYmFsJztcblxuLy8gLS0tLS0tLSBQUklOVCBFTlRSWSAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnQodGhpczogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IHVzZV9lbW9qaSA9IGVudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPT09IHRydWUgfHwgdGhpcy5jZmcudXNlX2Vtb2ppID09PSB0cnVlO1xuICByZXR1cm4gdGhpcy5wcmludGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKTtcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBNRVRIT0RTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwRW5kKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIodGhpcywgJ2dyb3VwRW5kJywgW10pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VGFibGUodGhpczogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAndGFibGUnLCBhcmdzKSwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnREaXIodGhpczogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAnZGlyJywgYXJncyksIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGlyeG1sKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIodGhpcywgJ2RpcnhtbCcsIGFyZ3MpLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFRyYWNlKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIodGhpcywgJ3RyYWNlJywgYXJncykpO1xufVxuXG4vLyAtLS0tLS0gUHJpbnQgdG8gdGhlIGNvbnNvbGUgLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZW5kZXIoY3R4dDogTG9nLCBtZXRob2Q6IENvbnNvbGVNZXRob2QsIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjdHh0LnJlbmRlciA9IFttZXRob2QsIGFyZ3NdO1xuICByZXR1cm4gY3R4dC5yZW5kZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0NvbnNvbGUocmVuZGVyOiBMb2dSZW5kZXIsIHNwcmVhZDogYm9vbGVhbiA9IHRydWUpOkxvZ1JlbmRlciB7XG4gIGNvbnN0IFttZXRob2QsIGFyZ3NdID0gcmVuZGVyO1xuICBpZiAoZW52LkFEWkVfRU5WICE9PSAnZGV2Jykge1xuICAgIGlmIChzcHJlYWQpIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZVttZXRob2RdKGFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVuZGVyO1xufSIsImltcG9ydCBkZWZhdWx0c0RlZXAgZnJvbSAnbG9kYXNoLmRlZmF1bHRzZGVlcCc7XG5pbXBvcnQge1xuICBTaGVkLCBMb2csXG4gIENvbmZpZ3VyYXRpb24sIERlZmF1bHRzLFxuICBMb2dMZXZlbERlZmluaXRpb24sIExpc3RlbmVyTG9jYXRpb25zLFxuICBMaXN0ZW5lcnMsIExpc3RlbmVyQ2FsbGJhY2ssIEFkemVcbn0gZnJvbSAnLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xuXG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuL2dsb2JhbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZUV4aXN0cyhzdG9yZTogU2hlZHx1bmRlZmluZWQpOnN0b3JlIGlzIFNoZWQge1xuICByZXR1cm4gc3RvcmUgIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoZWQoY29uZmlnOiBDb25maWd1cmF0aW9uKTp2b2lkIHtcbiAgLy8gY29uc3QgY2ZnOiBEZWZhdWx0cyA9IGRlZmF1bHRzRGVlcChjb25maWcsIGRlZmF1bHRzKTtcbiAgLy8gZW52LiRzaGVkID0ge1xuICAvLyAgIGNmZyxcbiAgLy8gICBjYWNoZTogW10sXG4gIC8vICAgbGFiZWxzOiBuZXcgTWFwKCksXG4gIC8vICAgaWRfY291bnRlcjogLTEsXG4gIC8vICAgbGlzdGVuZXJzOiBpbml0TGlzdGVuZXJMb2NhdGlvbnMoY2ZnKSxcblxuICAvLyAgIGFzc2lnbklkLFxuICAvLyAgIGFkZFRvQ2FjaGUsXG4gIC8vICAgYWRkTGlzdGVuZXIsXG4gIC8vICAgcmVtb3ZlTGlzdGVuZXIsXG4gIC8vICAgZmlyZUxpc3RlbmVycyxcbiAgLy8gfTtcbn1cblxuLy8gZnVuY3Rpb24gaW5pdExpc3RlbmVyTG9jYXRpb25zKGNmZzogRGVmYXVsdHMpOkxpc3RlbmVycyB7XG4vLyAgIGNvbnN0IGxpc3RlbmVyczogTGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuLy8gICBPYmplY3QudmFsdWVzKGNmZy5sb2dfbGV2ZWxzKS5mb3JFYWNoKChkZWYpID0+IHtcbi8vICAgICBsaXN0ZW5lcnMuc2V0KGRlZi5sZXZlbCwgbmV3IE1hcCgpKTtcbi8vICAgfSk7XG4vLyAgIHJldHVybiBsaXN0ZW5lcnM7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGFkZFRvQ2FjaGUodGhpczogU2hlZCwgbG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBhcmdzOiBhbnlbXSk6dm9pZCB7XG4vLyAgIGlmICh0aGlzLmNhY2hlLmxlbmd0aCA8IHRoaXMuY2ZnLmxvZ19jYWNoZV9zaXplKSB7XG4vLyAgICAgdGhpcy5jYWNoZSA9IHRoaXMuY2FjaGUuY29uY2F0KFtbbG9nLCBkZWYsIGFyZ3NdXSk7XG4vLyAgIH1cbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBUYWtlcyBhbiBpbnN0YW5jZSBvZiBhIGxvZyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIG9yXG4vLyAgKiBub3QgaXQgc2hvdWxkIGJlIGhpZGRlbiBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyZWQgZ2xvYmFsIGZpbHRlciBydWxlcy4gXG4vLyAgKiBAcGFyYW0gbG9nIEluc3RhbmNlIG9mIGEgbG9nLlxuLy8gICovXG4vLyBwdWJsaWMgZ2xvYmFsRmlsdGVyKGxvZzogTG9nQnJvd3NlcnxMb2dOb2RlKTpib29sZWFuIHtcbi8vICAgaWYgKHRoaXMuYWxsX2hpZGRlbiAmJiBsb2cubmFtZXNwYWNlID09PSBudWxsICYmIGxvZy5MYWJlbCA9PT0gbnVsbCkge1xuLy8gICAgIHJldHVybiB0cnVlO1xuLy8gICB9XG4vLyAgIHJldHVybiB0aGlzLmdsb2JhbEZpbHRlck5hbWVzcGFjZShsb2cpIHx8IHRoaXMuZ2xvYmFsRmlsdGVyTGFiZWwobG9nKTtcbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBUYWtlcyBhbiBpbnN0YW5jZSBvZiBhIGxvZyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIG9yXG4vLyAgKiBub3QgaXQgc2hvdWxkIGJlIGhpZGRlbiBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyZWQgZ2xvYmFsICoqbGFiZWwqKiBmaWx0ZXIgcnVsZXMuIFxuLy8gICogQHBhcmFtIGxvZyBJbnN0YW5jZSBvZiBhIGxvZy5cbi8vICAqL1xuLy8gcHJpdmF0ZSBnbG9iYWxGaWx0ZXJOYW1lc3BhY2UobG9nOiBMb2dCcm93c2VyfExvZ05vZGUpOmJvb2xlYW4ge1xuLy8gICBpZiAobG9nLm5hbWVzcGFjZSkge1xuLy8gICAgIGlmICh0aGlzLmluY2x1ZGVkX25hbWVzcGFjZXMuaW5jbHVkZXMobG9nLm5hbWVzcGFjZSkpIHtcbi8vICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHRoaXMuZXhjbHVkZWRfbmFtZXNwYWNlcy5pbmNsdWRlcyhsb2cubmFtZXNwYWNlKSB8fCB0aGlzLm5hbWVzcGFjZXNfaGlkZGVuID09PSB0cnVlIHx8IHRoaXMuYWxsX2hpZGRlbiA9PT0gdHJ1ZSkge1xuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiBmYWxzZTtcbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBUYWtlcyBhbiBpbnN0YW5jZSBvZiBhIGxvZyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIG9yXG4vLyAgKiBub3QgaXQgc2hvdWxkIGJlIGhpZGRlbiBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyZWQgZ2xvYmFsICoqbmFtZXNwYWNlKiogZmlsdGVyIHJ1bGVzLiBcbi8vICAqIEBwYXJhbSBsb2cgSW5zdGFuY2Ugb2YgYSBsb2cuXG4vLyAgKi9cbi8vIHByaXZhdGUgZ2xvYmFsRmlsdGVyTGFiZWwobG9nOiBMb2dCcm93c2VyfExvZ05vZGUpOmJvb2xlYW4ge1xuLy8gICBpZiAobG9nLkxhYmVsKSB7XG4vLyAgICAgaWYgKHRoaXMuaW5jbHVkZWRfbGFiZWxzLmluY2x1ZGVzKGxvZy5MYWJlbC5uYW1lKSkge1xuLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH1cbi8vICAgICBpZiAodGhpcy5leGNsdWRlZF9sYWJlbHMuaW5jbHVkZXMobG9nLkxhYmVsLm5hbWUpIHx8IHRoaXMubGFiZWxzX2hpZGRlbiA9PT0gdHJ1ZSB8fCB0aGlzLmFsbF9oaWRkZW4gPT09IHRydWUpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGFkZExpc3RlbmVyKHRoaXM6IFNoZWQsIGxldmVsczogbnVtYmVyW10sIGNiOiBMaXN0ZW5lckNhbGxiYWNrKTpMaXN0ZW5lckxvY2F0aW9ucyB7XG4vLyAgIHJldHVybiBsZXZlbHMubWFwKChsdmw6IG51bWJlcikgPT4ge1xuLy8gICAgIGNvbnN0IGxldmVsX21hcCA9IHRoaXMubGlzdGVuZXJzLmdldChsdmwpO1xuLy8gICAgIGNvbnN0IGlkID0gdGhpcy5hc3NpZ25JZCgpO1xuLy8gICAgIGxldmVsX21hcD8uc2V0KGlkLCBjYik7XG4vLyAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGx2bCwgbGV2ZWxfbWFwID8/IG5ldyBNYXAoKSk7XG4vLyAgICAgcmV0dXJuIFtsdmwsIGlkXTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHRoaXM6IFNoZWQsIGxvY2F0aW9uczogTGlzdGVuZXJMb2NhdGlvbnMpOnZvaWQge1xuLy8gICBsb2NhdGlvbnMuZm9yRWFjaCgoW2x2bF9pZCwgaWRdKSA9PiB7XG4vLyAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLmxpc3RlbmVycy5nZXQobHZsX2lkKTtcbi8vICAgICBsZXZlbD8uZGVsZXRlKGlkKTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnModGhpczogU2hlZCwgY3R4dDogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgYXJnczogYW55W10pOnZvaWQge1xuLy8gICB0aGlzLmxpc3RlbmVycy5nZXQoZGVmLmxldmVsKT8uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4vLyAgICAgbGlzdGVuZXIoeyAuLi5jdHh0LCAuLi5kZWYsIGFyZ3MgfSk7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBhc3NpZ25JZCh0aGlzOiBTaGVkKTpudW1iZXIge1xuLy8gICB0aGlzLmlkX2NvdW50ZXIgPSB0aGlzLmlkX2NvdW50ZXIgKyAxOyAvLyBXcml0dGVuIGZvciBjbGFyaXR5XG4vLyAgIHJldHVybiB0aGlzLmlkX2NvdW50ZXI7XG4vLyB9IiwiZXhwb3J0IHsgbG9nTWV0aG9kLCBjdXN0b21NZXRob2QsIHNlYWwgfSBmcm9tICcuL3Rlcm1pbmF0b3JzJzsiLCJpbXBvcnQge1xuICBMb2csIExvZ0Z1bmN0aW9uLFxuICBDdXN0b21Mb2dGdW5jdGlvbixcbiAgRGVmYXVsdHMsIExvZ0xldmVsRGVmaW5pdGlvbiwgVGVybWluYXRlZExvZyxcbn0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4uL19kZWZhdWx0cyc7XG5pbXBvcnQgeyBlbnYsIGlzQnJvd3NlciB9IGZyb20gJy4uL2dsb2JhbCc7XG5cbi8qKlxuICogVGFrZSBhIExvZyBhbmQgYnJhbmNoIGZyb20gaXQgYnkgcHJvdmlkaW5nIG5ldyBjb3BpZWQgbG9ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlYWwodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4geyAuLi50aGlzIH07XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgdGVybWluYXRpbmcgbG9nIG1ldGhvZCB0aGUgc3BlY2lmaWVkIGxvZyBsZXZlbCBuYW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9nTWV0aG9kKGNmZzogRGVmYXVsdHMsIGxldmVsTmFtZTogc3RyaW5nKTpMb2dGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbih0aGlzOiBMb2csIC4uLmFyZ3M6IGFueVtdKTpUZXJtaW5hdGVkTG9nIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gY2ZnLmxvZ19sZXZlbHNbbGV2ZWxOYW1lXTtcbiAgICBjb25zdCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiA9IHsgLi4uZGVmaW5pdGlvbiwgbGV2ZWxOYW1lIH07XG4gICAgaWYgKGFsbG93ZWQoY2ZnLCBkZWYpKSB7XG4gICAgICByZXR1cm4gZXhlY3V0aW9uUGlwZWxpbmUodGhpcywgZGVmLCBhcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbG9nOiB0aGlzLCByZW5kZXI6IG51bGwgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kIHRoYXQgZW5hYmxlcyB0aGUgdXNlciB0byBzcGVjaWZ5IGEgY3VzdG9tXG4gKiBsb2cgbGV2ZWwgYnkga2V5IGFzIHRoZSBmb3JtYXQgZm9yIHRoZSBsb2cuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21NZXRob2QoY2ZnOiBEZWZhdWx0cyk6Q3VzdG9tTG9nRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24odGhpczogTG9nLCBsZXZlbE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55W10pOlRlcm1pbmF0ZWRMb2cge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBjZmcuY3VzdG9tX2xldmVsc1tsZXZlbE5hbWVdO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBkZWYgPSB7IC4uLmRlZmluaXRpb24sIGxldmVsTmFtZSB9O1xuICAgICAgaWYgKGFsbG93ZWQoY2ZnLCBkZWYpKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRpb25QaXBlbGluZSh0aGlzLCBkZWYsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBsb2c6IHRoaXMsIHJlbmRlcjogbnVsbCB9O1xuICB9O1xufTtcblxuLyoqXG4gKiBUaGUgcHJpbWFyeSBleGVjdXRpb24gcGlwZWxpbmUgZm9yIHRlcm1pbmF0aW5nIGxvZyBtZXRob2RzLlxuICovXG5mdW5jdGlvbiBleGVjdXRpb25QaXBlbGluZShsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGFyZ3M6IGFueVtdKTpUZXJtaW5hdGVkTG9nIHtcblxuICAvLyBBcHBseSBtb2RpZmllcnMgaW4gdGhlIHByb3BlciBvcmRlci5cbiAgbG9nLm1vZGlmaWVyUXVldWUuZm9yRWFjaChmdW5jID0+IGZ1bmMoKSk7XG5cbiAgLy8gQ2hlY2sgdGhlIHRlc3QgbW9kaWZpZXJzLlxuICBpZiAoZXZhbFBhc3Nlcyhsb2cpKSB7XG4gICAgLy8gU2F2ZSB0aGUgYXJncyBmb3IgcmVjYWxsIHB1cnBvc2VzXG4gICAgbG9nLmFyZ3MgPSBhcmdzO1xuICAgIGNvbnN0IHJlbmRlciA9IGxvZy5wcmludChkZWYsIGFyZ3MpO1xuICAgIGxvZy5jYWNoZShhcmdzKTtcbiAgICBsb2cuZmlyZUxpc3RlbmVycyhhcmdzKTtcblxuICAgIHJldHVybiB7IGxvZywgcmVuZGVyIH1cbiAgfVxuXG4gIHJldHVybiB7IGxvZywgcmVuZGVyOiBudWxsIH07XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuICogVGVybWluYXRvciBDb25kaXRpb25zXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGZhdGUgb2Ygd2hldGhlciB0aGlzIGxvZyB3aWxsIHRlcm1pbmF0ZS5cbiAqL1xuZnVuY3Rpb24gYWxsb3dlZChjZmc6IERlZmF1bHRzLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbik6Ym9vbGVhbiB7XG4gIHJldHVybiBsZXZlbEFjdGl2ZShkZWYsIGNmZy5sb2dfbGV2ZWwpICYmIG5vdFRlc3RFbnYoKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgbG9nIGxldmVsIGlzIGhpZ2ggZW5vdWdoIGZvciB0aGUgbG9nIHRvIHRlcm1pbmF0ZS5cbiAqL1xuZnVuY3Rpb24gbGV2ZWxBY3RpdmUoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGxldmVsOiBudW1iZXIpOmJvb2xlYW4ge1xuICByZXR1cm4gZGVmLmxldmVsIDw9IGxldmVsO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFueSBhc3NlcnRpb25zIG9yIGV4cHJlc3Npb25zIHBhc3MgZm9yIHRoaXMgbG9nIHRvIHRlcm1pbmF0ZS5cbiAqL1xuZnVuY3Rpb24gZXZhbFBhc3NlcyhjdHh0OiBMb2cpOmJvb2xlYW4ge1xuICBpZiAoY3R4dC5hc3NlcnRpb24gIT09IHVuZGVmaW5lZCAmJiBjdHh0LmV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcIllvdSBoYXZlIGRlY2xhcmVkIGJvdGggYW4gYXNzZXJ0aW9uIGFuZCB0ZXN0IG9uIHRoZSBzYW1lIGxvZy4gUGxlYXNlIG9ubHkgZGVjbGFyZSBvbmUgb3IgbmVmYXJpb3VzIHJlc3VsdHMgbWF5IG9jY3VyLlwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY3R4dC5hc3NlcnRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjdHh0LmFzc2VydGlvbiA9PT0gZmFsc2U7XG4gIH1cbiAgaWYgKGN0eHQuZXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGN0eHQuZXhwcmVzc2lvbiA9PT0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBWZXJpZnkgdGhhdCB0aGlzIGxvZyBpcyBub3QgaW4gYSB0ZXN0IGVudmlyb25tZW50IGFuZCBwcmV2ZW50XG4gKiB0ZXJtaW5hdGlvbiBpZiBpdCBpcy5cbiAqL1xuZnVuY3Rpb24gbm90VGVzdEVudigpOmJvb2xlYW4ge1xuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGVudj8uQURaRV9FTlYgIT09ICd0ZXN0Jztcbn0iLCJleHBvcnQgeyBpbml0aWFsQ2FwcywgYXBwbHlNaXhpbnMgfSBmcm9tICcuL3V0aWwnOyIsImV4cG9ydCBmdW5jdGlvbiBpbml0aWFsQ2FwcyhzdHI6IHN0cmluZyk6c3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TWl4aW5zKGRlcml2ZWRDdG9yOiBhbnksIGJhc2VDdG9yczogYW55W10pIHtcbiAgYmFzZUN0b3JzLmZvckVhY2goYmFzZUN0b3IgPT4ge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJhc2VDdG9yLnByb3RvdHlwZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgZGVyaXZlZEN0b3IucHJvdG90eXBlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2VDdG9yLnByb3RvdHlwZSwgbmFtZSkgPz8gJydcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
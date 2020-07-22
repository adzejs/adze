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
/*! exports provided: Adze, LogFactory, Log, LogFunction, CustomLogFunction, Bundle, TerminatingMethods, TerminatingMethodKeys, LogRender, TerminatedLog, Shed, ListenerCallback, Listeners, ListenerLocations, ListenerData, Defaults, LogLevels, LogLevelDefinition, Filters, Configuration, ConsoleMethod, Label, RecursivePartial */
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

/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utility */ "./src/_contracts/Utility.ts");
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Utility__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecursivePartial", function() { return _Utility__WEBPACK_IMPORTED_MODULE_5__["RecursivePartial"]; });








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
  use_emoji: true,
  base_style: 'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;',
  custom_levels: {},
  log_levels: {
    verbose: {
      level: 8,
      style: 'padding-right: 26px; border-color: 1px solid #d9dce0; color: #999999; border-color: #cbc9c9;',
      terminal: ['bgBlack', 'italic', 'white'],
      method: 'debug',
      emoji: '💤'
    },
    debug: {
      level: 7,
      style: 'padding-right: 38px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
      terminal: ['bgBlack', 'italic', 'white'],
      method: 'debug',
      emoji: '🐞'
    },
    log: {
      level: 6,
      style: `padding-right: 50px; background: linear-gradient(to right, #fff, #d9dce0); color: #333435; border-color: #bfc1c5;`,
      terminal: ['bgBlack', 'white'],
      method: 'log',
      emoji: '📓'
    },
    success: {
      level: 5,
      style: 'padding-right: 26px; background: linear-gradient(to right, #fff, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
      terminal: ['bgGreen', 'white'],
      method: 'info',
      emoji: '🎉'
    },
    fail: {
      level: 4,
      style: `padding-right: ${_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '34' : '32'}px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
      terminal: ['bgRed', 'white'],
      method: 'error',
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
    const render = ctxt.render;

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

/***/ "./src/modifiers/browser/index.ts":
/*!****************************************!*\
  !*** ./src/modifiers/browser/index.ts ***!
  \****************************************/
/*! exports provided: time, timeNow, timeEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "./src/modifiers/browser/timing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeNow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeEnd"]; });



/***/ }),

/***/ "./src/modifiers/browser/timing.ts":
/*!*****************************************!*\
  !*** ./src/modifiers/browser/timing.ts ***!
  \*****************************************/
/*! exports provided: time, timeNow, timeEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return timeNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return timeEnd; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modifier */ "./src/modifiers/modifier.ts");

function time() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal) {
      this.labelVal.timeStart = performance.now();
    }
  });
}
function timeNow() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal) {
      this.labelVal.timeNow = performance.now();
    }
  });
}
function timeEnd() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal && this.labelVal.timeStart) {
      this.labelVal.timeEllapsed = performance.now() - this.labelVal.timeStart;
    }
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return timeNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return timeEnd; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./src/modifiers/browser/index.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "./src/modifiers/node/index.ts");
/* harmony import */ var _counting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counting */ "./src/modifiers/counting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _counting__WEBPACK_IMPORTED_MODULE_3__["count"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countReset", function() { return _counting__WEBPACK_IMPORTED_MODULE_3__["countReset"]; });

/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatting */ "./src/modifiers/formatting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return _formatting__WEBPACK_IMPORTED_MODULE_4__["dir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirxml", function() { return _formatting__WEBPACK_IMPORTED_MODULE_4__["dirxml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "table", function() { return _formatting__WEBPACK_IMPORTED_MODULE_4__["table"]; });

/* harmony import */ var _grouping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grouping */ "./src/modifiers/grouping.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _grouping__WEBPACK_IMPORTED_MODULE_5__["group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupCollapsed", function() { return _grouping__WEBPACK_IMPORTED_MODULE_5__["groupCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupEnd", function() { return _grouping__WEBPACK_IMPORTED_MODULE_5__["groupEnd"]; });

/* harmony import */ var _identifying__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identifying */ "./src/modifiers/identifying.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _identifying__WEBPACK_IMPORTED_MODULE_6__["label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _identifying__WEBPACK_IMPORTED_MODULE_6__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ns", function() { return _identifying__WEBPACK_IMPORTED_MODULE_6__["ns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return _identifying__WEBPACK_IMPORTED_MODULE_6__["trace"]; });

/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_7__["modifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependModifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_7__["prependModifier"]; });

/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testing */ "./src/modifiers/testing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _testing__WEBPACK_IMPORTED_MODULE_8__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _testing__WEBPACK_IMPORTED_MODULE_8__["test"]; });




const time = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["time"] : _node__WEBPACK_IMPORTED_MODULE_2__["time"];
const timeNow = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["timeNow"] : _node__WEBPACK_IMPORTED_MODULE_2__["timeNow"];
const timeEnd = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["timeEnd"] : _node__WEBPACK_IMPORTED_MODULE_2__["timeEnd"];








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

/***/ "./src/modifiers/node/index.ts":
/*!*************************************!*\
  !*** ./src/modifiers/node/index.ts ***!
  \*************************************/
/*! exports provided: time, timeNow, timeEnd, timeLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "./src/modifiers/node/timing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeNow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeLog", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeLog"]; });



/***/ }),

/***/ "./src/modifiers/node/timing.ts":
/*!**************************************!*\
  !*** ./src/modifiers/node/timing.ts ***!
  \**************************************/
/*! exports provided: time, timeNow, timeEnd, timeLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return timeNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return timeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeLog", function() { return timeLog; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modifier */ "./src/modifiers/modifier.ts");

function time() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {
    if (this.labelVal) {}
  });
}
function timeNow() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {});
}
function timeEnd() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {});
}
function timeLog() {
  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, () => {});
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

function printLog(cfg, levelName, args) {
  const def = cfg.log_levels[levelName];
  const [method, leader, style, meta] = [def.method, fLeader(def, args), cfg.base_style + def.style, fMeta(this)];
  const render_args = meta === '' ? [leader, style, ...args] : [leader, style, meta, ...args];
  return Object(_shared__WEBPACK_IMPORTED_MODULE_0__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_0__["applyRender"])(this, method, render_args));
}
function printGroup(cfg, levelName, args) {
  const def = cfg.log_levels[levelName];
  const partial_args = [fLeader(def, args), cfg.base_style + def.style];
  const render_args = typeof args[0] === "string" ? [...partial_args, args[0]] : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_0__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_0__["applyRender"])(this, 'group', render_args));
}
function printGroupCollapsed(cfg, levelName, args) {
  const def = cfg.log_levels[levelName];
  const partial_args = [fLeader(def, args), cfg.base_style + def.style];
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
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ "./src/printers/shared.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");


 // ------- PRINT METHODS -------- //

function printLog(cfg, levelName, args) {
  const def = cfg.log_levels[levelName];
  const [method, leader, style, meta] = [def.method, fLeader(def, args), cfg.base_style + def.style, fMeta(this)];
  const render_args = meta === '' ? [leader, style, ...args] : [leader, style, meta, ...args];
  return Object(_shared__WEBPACK_IMPORTED_MODULE_0__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_0__["applyRender"])(this, method, render_args));
}
function printGroup(cfg, levelName, args) {
  const def = cfg.log_levels[levelName];
  const partial_args = [fLeader(def, args), cfg.base_style + def.style];
  const render_args = typeof args[0] === "string" ? [...partial_args, args[0]] : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_0__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_0__["applyRender"])(this, 'group', render_args));
}
function printGroupCollapsed(cfg, levelName, args) {
  const def = cfg.log_levels[levelName];
  const partial_args = [fLeader(def, args), cfg.base_style + def.style];
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

function print(cfg, levelName, args) {
  return this.printer(cfg, levelName, args);
} // ------- PRINT METHODS -------- //

function printGroupEnd(cfg, _, args) {
  return toConsole(applyRender(this, 'groupEnd', []));
}
function printTable(cfg, _, args) {
  return toConsole(applyRender(this, 'table', args), false);
}
function printDir(cfg, _, args) {
  return toConsole(applyRender(this, 'dir', args), false);
}
function printDirxml(cfg, _, args) {
  return toConsole(applyRender(this, 'dirxml', args), false);
}
function printTrace(cfg, _, args) {
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

    if (allowed(this, cfg, def)) {
      return executionPipeline(this, cfg, levelName, args);
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
      if (allowed(this, cfg, definition)) {
        return executionPipeline(this, cfg, levelName, args);
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

function executionPipeline(log, cfg, levelName, args) {
  // Save the args for recall purposes
  log.args = args; // Apply modifiers in the proper order

  log.modifierQueue.forEach(func => func());
  const render = log.print(cfg, levelName, args);
  log.cache(args);
  log.fireListeners(args);
  return {
    log,
    render
  };
}
/*----------------------------------------*\
 * Terminator Conditions
\*----------------------------------------*/

/**
 * Determine the fate of whether this log will terminate.
 */


function allowed(ctxt, cfg, def) {
  // For performance, check if the level is active before evaluating other conditions
  if (levelActive(def, cfg.log_level)) {
    return evalPasses(ctxt) && notTestEnv();
  }

  return false;
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
    return !(ctxt.assertion === false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWZhdWx0c2RlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fY29udHJhY3RzL0NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fY29udHJhY3RzL0xvZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL19jb250cmFjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fZGVmYXVsdHMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fZGVmYXVsdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9hZHplLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvYnVuZGxlLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvZXZlbnRzL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2V2ZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2ZpbHRlcnMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2xhYmVsL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbGFiZWwvbGFiZWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvYnJvd3Nlci9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9icm93c2VyL3RpbWluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9jb3VudGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9mb3JtYXR0aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2dyb3VwaW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2lkZW50aWZ5aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL21vZGlmaWVyLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL25vZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvbm9kZS90aW1pbmcudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvdGVzdGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL2Jyb3dzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9icm93c2VyL3ByaW50ZXJzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9ub2RlL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvbm9kZS9wcmludGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL3NoYXJlZC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3NoZWQudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy90ZXJtaW5hdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3Rlcm1pbmF0b3JzL3Rlcm1pbmF0b3JzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3V0aWwvdXRpbC50cyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImxvZ19sZXZlbCIsImxvZ19jYWNoZV9zaXplIiwidXNlX2Vtb2ppIiwiYmFzZV9zdHlsZSIsImN1c3RvbV9sZXZlbHMiLCJsb2dfbGV2ZWxzIiwidmVyYm9zZSIsImxldmVsIiwic3R5bGUiLCJ0ZXJtaW5hbCIsIm1ldGhvZCIsImVtb2ppIiwiZGVidWciLCJsb2ciLCJzdWNjZXNzIiwiZmFpbCIsImlzQ2hyb21lIiwiaW5mbyIsImlzU2FmYXJpIiwid2FybiIsImVycm9yIiwiYXR0ZW50aW9uIiwiZmlsdGVycyIsImhpZGVBbGwiLCJuYW1lc3BhY2UiLCJleGNsdWRlIiwiaW5jbHVkZSIsImxhYmVsIiwiZGVmYXVsdHNEZWVwIiwicmVxdWlyZSIsImFkemUiLCJ1c2VyX2NmZyIsImNmZyIsInRyYWNlYWJsZSIsIm1vZGlmaWVyUXVldWUiLCJwcmludGVyIiwicHJpbnRMb2ciLCJsb2dNZXRob2QiLCJjdXN0b20iLCJjdXN0b21NZXRob2QiLCJhbGwiLCJzZWFsIiwiY2FjaGUiLCJwcmludCIsImZpcmVMaXN0ZW5lcnMiLCJjb3VudCIsImNvdW50UmVzZXQiLCJkaXIiLCJkaXJ4bWwiLCJ0YWJsZSIsImFzc2VydCIsInRlc3QiLCJncm91cCIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJucyIsInRyYWNlIiwidGltZSIsInRpbWVOb3ciLCJ0aW1lRW5kIiwiYnVuZGxlIiwiYnVuZGxlZF9sb2ciLCJjdXJyeUJ1bmRsZSIsInB1c2giLCJjdHh0IiwiZm4iLCJhcmdzIiwic3RvcmVFeGlzdHMiLCJlbnYiLCIkc2hlZCIsImFkZFRvQ2FjaGUiLCJmb3JFYWNoIiwicmVuZGVyIiwiY29uc29sZSIsImdsb2JhbCIsIndpbmRvdyIsImlzQnJvd3NlciIsImVudklzV2luZG93IiwidW5kZWZpbmVkIiwiaXNDaHJvbWVWYXIiLCJpc0ZpcmVmb3hWYXIiLCJpc1NhZmFyaVZhciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJpc0ZpcmVmb3giLCJnZXRMYWJlbCIsIm5hbWUiLCJsYWJlbHMiLCJnZXQiLCJhZGRMYWJlbCIsImhhc0xhYmVsIiwic2V0IiwiaGFzIiwibW9kaWZpZXIiLCJsYWJlbFZhbCIsInRpbWVTdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwidGltZUVsbGFwc2VkIiwiY291bnRDbGVhciIsInByaW50RGlyIiwicHJpbnREaXJ4bWwiLCJwcmludFRhYmxlIiwicHJpbnRHcm91cCIsInByaW50R3JvdXBDb2xsYXBzZWQiLCJwcmludEdyb3VwRW5kIiwicHJlcGVuZE1vZGlmaWVyIiwibmFtZXNwYWNlVmFsIiwicHJpbnRUcmFjZSIsInRpbWVCcm93c2VyIiwidGltZU5vZGUiLCJ0aW1lTm93QnJvd3NlciIsInRpbWVOb3dOb2RlIiwidGltZUVuZEJyb3dzZXIiLCJ0aW1lRW5kTm9kZSIsImNvbnRleHQiLCJmdW5jIiwiY29uY2F0IiwidGltZUxvZyIsImFzc2VydGlvbiIsImV4cHJlc3Npb24iLCJsZXZlbE5hbWUiLCJkZWYiLCJsZWFkZXIiLCJtZXRhIiwiZkxlYWRlciIsImZNZXRhIiwicmVuZGVyX2FyZ3MiLCJ0b0NvbnNvbGUiLCJhcHBseVJlbmRlciIsInBhcnRpYWxfYXJncyIsImZFbW9qaSIsImZOYW1lIiwibGVuZ3RoIiwiaW5pdGlhbENhcHMiLCJmTmFtZXNwYWNlIiwiZkxhYmVsIiwiZlRpbWUiLCJmQ291bnQiLCJsYWJlbF90eHQiLCJwcmludExvZ0Jyb3dzZXIiLCJwcmludExvZ05vZGUiLCJwcmludEdyb3VwQnJvd3NlciIsInByaW50R3JvdXBOb2RlIiwicHJpbnRHcm91cENvbGxhcHNlZEJyb3dzZXIiLCJwcmludEdyb3VwQ29sbGFwc2VkTm9kZSIsIl8iLCJzcHJlYWQiLCJBRFpFX0VOViIsInN0b3JlIiwiY3JlYXRlU2hlZCIsImNvbmZpZyIsImRlZmluaXRpb24iLCJhbGxvd2VkIiwiZXhlY3V0aW9uUGlwZWxpbmUiLCJsZXZlbEFjdGl2ZSIsImV2YWxQYXNzZXMiLCJub3RUZXN0RW52Iiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImFwcGx5TWl4aW5zIiwiZGVyaXZlZEN0b3IiLCJiYXNlQ3RvcnMiLCJiYXNlQ3RvciIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm90b3R5cGUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsS0FBMEI7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTyxXQUFXO0FBQzdCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQixFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCLEVBQUU7QUFDbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsVUFBVTtBQUNWO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPLFNBQVMsRUFBRSxHQUFHLE9BQU8saUJBQWlCLEVBQUU7QUFDbEUsVUFBVSxPQUFPLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0EsV0FBVyxTQUFTLEdBQUcsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN4K0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQztBQTJCbUUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDcEU7Ozs7O0FBTUE7Ozs7O0FBTUE7Ozs7QUFLQTs7OztBQU9BOzs7OztBQVVBOzs7O0FBa0JDO0FBRUQ7Ozs7O0FBa0M0RjtBQUU1Rjs7OztBQWNDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUlBO0FBSUE7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU1BLFFBQWtCLEdBQUc7QUFDaENDLFdBQVMsRUFBRSxDQURxQjtBQUVoQ0MsZ0JBQWMsRUFBRSxHQUZnQjtBQUdoQ0MsV0FBUyxFQUFFLElBSHFCO0FBSWhDQyxZQUFVLEVBQUUsMkdBSm9CO0FBS2hDQyxlQUFhLEVBQUUsRUFMaUI7QUFNaENDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFLENBREE7QUFFUEMsV0FBSyxFQUFFLDhGQUZBO0FBR1BDLGNBQVEsRUFBRSxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLE9BQXRCLENBSEg7QUFJUEMsWUFBTSxFQUFFLE9BSkQ7QUFLUEMsV0FBSyxFQUFFO0FBTEEsS0FEQztBQVFWQyxTQUFLLEVBQUU7QUFDTEwsV0FBSyxFQUFFLENBREY7QUFFTEMsV0FBSyxFQUFFLDhGQUZGO0FBR0xDLGNBQVEsRUFBRSxDQUFDLFNBQUQsRUFBVyxRQUFYLEVBQXFCLE9BQXJCLENBSEw7QUFJTEMsWUFBTSxFQUFFLE9BSkg7QUFLTEMsV0FBSyxFQUFFO0FBTEYsS0FSRztBQWVWRSxPQUFHLEVBQUU7QUFDSE4sV0FBSyxFQUFFLENBREo7QUFFSEMsV0FBSyxFQUFHLG1IQUZMO0FBR0hDLGNBQVEsRUFBRSxDQUFDLFNBQUQsRUFBWSxPQUFaLENBSFA7QUFJSEMsWUFBTSxFQUFFLEtBSkw7QUFLSEMsV0FBSyxFQUFFO0FBTEosS0FmSztBQXNCVkcsV0FBTyxFQUFFO0FBQ1BQLFdBQUssRUFBRSxDQURBO0FBRVBDLFdBQUssRUFBRSxtSEFGQTtBQUdQQyxjQUFRLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWixDQUhIO0FBSVBDLFlBQU0sRUFBRSxNQUpEO0FBS1BDLFdBQUssRUFBRTtBQUxBLEtBdEJDO0FBNkJWSSxRQUFJLEVBQUU7QUFDSlIsV0FBSyxFQUFFLENBREg7QUFFSkMsV0FBSyxFQUFHLGtCQUFrQlEsZ0RBQVEsR0FBRyxJQUFILEdBQVUsSUFBTSxrR0FGOUM7QUFHSlAsY0FBUSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FITjtBQUlKQyxZQUFNLEVBQUUsT0FKSjtBQUtKQyxXQUFLLEVBQUU7QUFMSCxLQTdCSTtBQW9DVk0sUUFBSSxFQUFFO0FBQ0pWLFdBQUssRUFBRSxDQURIO0FBRUpDLFdBQUssRUFBRyxrQkFBa0JVLGdEQUFRLEdBQUcsSUFBSCxHQUFVLElBQU0sa0dBRjlDO0FBR0pULGNBQVEsRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLENBSE47QUFJSkMsWUFBTSxFQUFFLE1BSko7QUFLSkMsV0FBSyxFQUFFO0FBTEgsS0FwQ0k7QUEyQ1ZRLFFBQUksRUFBRTtBQUNKWixXQUFLLEVBQUUsQ0FESDtBQUVKQyxXQUFLLEVBQUcsK0dBQStHUSxnREFBUSxHQUFHLElBQUgsR0FBVSxJQUFNLE1BRjNJO0FBR0pQLGNBQVEsRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFiLENBSE47QUFJSkMsWUFBTSxFQUFFLE1BSko7QUFLSkMsV0FBSyxFQUFFO0FBTEgsS0EzQ0k7QUFrRFZTLFNBQUssRUFBRTtBQUNMYixXQUFLLEVBQUUsQ0FERjtBQUVMQyxXQUFLLEVBQUcsa0JBQWtCUSxnREFBUSxHQUFHLElBQUgsR0FBVSxJQUFNLGtHQUY3QztBQUdMUCxjQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUhMO0FBSUxDLFlBQU0sRUFBRSxPQUpIO0FBS0xDLFdBQUssRUFBRTtBQUxGLEtBbERHO0FBeURWVSxhQUFTLEVBQUU7QUFDVGQsV0FBSyxFQUFFLENBREU7QUFFVEMsV0FBSyxFQUFFLG1IQUZFO0FBR1RDLGNBQVEsRUFBRSxDQUFDLE9BQUQsRUFBUyxNQUFULEVBQWdCLFdBQWhCLENBSEQ7QUFJVEMsWUFBTSxFQUFFLE1BSkM7QUFLVEMsV0FBSyxFQUFFO0FBTEU7QUF6REQsR0FOb0I7QUF1RWhDVyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFLEtBREY7QUFFUEMsYUFBUyxFQUFFO0FBQ1RELGFBQU8sRUFBRSxLQURBO0FBRVRFLGFBQU8sRUFBRSxFQUZBO0FBR1RDLGFBQU8sRUFBRTtBQUhBLEtBRko7QUFPUEMsU0FBSyxFQUFFO0FBQ0xKLGFBQU8sRUFBRSxLQURKO0FBRUxFLGFBQU8sRUFBRSxFQUZKO0FBR0xDLGFBQU8sRUFBRTtBQUhKO0FBUEE7QUF2RXVCLENBQTNCLEM7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNRSxZQUFZLEdBQUdDLG1CQUFPLENBQUMsd0VBQUQsQ0FBNUI7O0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFTQyxJQUFULENBQWNDLFFBQXVCLEdBQUcsRUFBeEMsRUFBZ0Q7QUFDckQsUUFBTUMsR0FBRyxHQUFHSixZQUFZLENBQUNHLFFBQUQsRUFBV2hDLGtEQUFYLENBQXhCO0FBRUEsU0FBTztBQUNMaUMsT0FESztBQUVMQyxhQUFTLEVBQUUsS0FGTjtBQUdMQyxpQkFBYSxFQUFFLEVBSFY7QUFJTEMsV0FBTyxFQUFFQyxrREFKSjtBQU1MZixhQUFTLEVBQUdnQiw4REFBUyxDQUFDTCxHQUFELEVBQU0sV0FBTixDQU5oQjtBQU9MWixTQUFLLEVBQU9pQiw4REFBUyxDQUFDTCxHQUFELEVBQU0sT0FBTixDQVBoQjtBQVFMYixRQUFJLEVBQVFrQiw4REFBUyxDQUFDTCxHQUFELEVBQU0sTUFBTixDQVJoQjtBQVNMZixRQUFJLEVBQVFvQiw4REFBUyxDQUFDTCxHQUFELEVBQU0sTUFBTixDQVRoQjtBQVVMakIsUUFBSSxFQUFRc0IsOERBQVMsQ0FBQ0wsR0FBRCxFQUFNLE1BQU4sQ0FWaEI7QUFXTGxCLFdBQU8sRUFBS3VCLDhEQUFTLENBQUNMLEdBQUQsRUFBTSxTQUFOLENBWGhCO0FBWUxuQixPQUFHLEVBQVN3Qiw4REFBUyxDQUFDTCxHQUFELEVBQU0sS0FBTixDQVpoQjtBQWFMcEIsU0FBSyxFQUFPeUIsOERBQVMsQ0FBQ0wsR0FBRCxFQUFNLE9BQU4sQ0FiaEI7QUFjTDFCLFdBQU8sRUFBSytCLDhEQUFTLENBQUNMLEdBQUQsRUFBTSxTQUFOLENBZGhCO0FBZUxNLFVBQU0sRUFBTUMsaUVBQVksQ0FBQ1AsR0FBRCxDQWZuQjtBQWlCTFEsT0FBRyxFQUFFLE1BQU0sQ0FBRSxDQWpCUjtBQW1CTEMsMkRBbkJLO0FBbUJDQyx3REFuQkQ7QUFtQlFDLDBEQW5CUjtBQW1CZUMsd0VBbkJmO0FBbUI4QkMsMkRBbkI5QjtBQW1CcUNDLHFFQW5CckM7QUFvQkxDLHVEQXBCSztBQW9CQUMsNkRBcEJBO0FBb0JRQywyREFwQlI7QUFvQmVDLDZEQXBCZjtBQW9CdUJDLHlEQXBCdkI7QUFvQjZCQywyREFwQjdCO0FBb0JvQ0MsNkVBcEJwQztBQXFCTEMsaUVBckJLO0FBcUJLM0IsMkRBckJMO0FBcUJZSCxtRUFyQlo7QUFxQnVCK0IscURBckJ2QjtBQXFCMkJDLDJEQXJCM0I7QUFxQmtDQyx5REFyQmxDO0FBcUJ3Q0MsK0RBckJ4QztBQXFCaURDLCtEQUFPQTtBQXJCeEQsR0FBUDtBQXVCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RERDtBQUVPLFNBQVNDLE1BQVQsQ0FBZ0IvQyxHQUFoQixFQUFpQztBQUN0QyxRQUFNK0MsTUFBTSxHQUFHLEVBQWY7QUFDQSxTQUFPLE1BQU07QUFDWCxRQUFJQyxXQUFnQixxQkFBUWhELEdBQVIsQ0FBcEI7O0FBQ0FnRCxlQUFXLENBQUNyQixHQUFaLEdBQWtCc0IsV0FBVyxDQUFDRCxXQUFELEVBQWNELE1BQWQsRUFBc0JwQiw0Q0FBdEIsQ0FBN0I7QUFDQW9CLFVBQU0sQ0FBQ0csSUFBUCxDQUFZRixXQUFaO0FBQ0EsV0FBT0EsV0FBUDtBQUNELEdBTEQ7QUFNRDtBQUFBOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJFLElBQXJCLEVBQWdDSixNQUFoQyxFQUErQ0ssRUFBL0MsRUFBNkQsR0FBR0MsSUFBaEUsRUFBd0Y7QUFDdEYsU0FBTyxNQUFNO0FBQ1hELE1BQUUsQ0FBQ0QsSUFBRCxFQUFPSixNQUFQLEVBQWUsR0FBR00sSUFBbEIsQ0FBRjtBQUNELEdBRkQ7QUFHRCxDOzs7Ozs7Ozs7Ozs7QUNoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdPLFNBQVN4QixLQUFULENBQTBCd0IsSUFBMUIsRUFBNEM7QUFDakQsTUFBSUMseURBQVcsQ0FBQ0MsMkNBQUcsQ0FBQ0MsS0FBTCxDQUFmLEVBQTRCO0FBQzFCRCwrQ0FBRyxDQUFDQyxLQUFKLENBQVVDLFVBQVYsQ0FBcUIsSUFBckIsRUFBMkJKLElBQTNCO0FBQ0Q7QUFDRjtBQUVEOzs7O0FBR08sU0FBU3RCLGFBQVQsQ0FBa0NzQixJQUFsQyxFQUFvRDtBQUN6RCxNQUFJQyx5REFBVyxDQUFDQywyQ0FBRyxDQUFDQyxLQUFMLENBQWYsRUFBNEI7QUFDMUJELCtDQUFHLENBQUNDLEtBQUosQ0FBVXpCLGFBQVYsQ0FBd0IsSUFBeEIsRUFBOEJzQixJQUE5QjtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0tBO0FBQUE7QUFBTyxTQUFTMUIsR0FBVCxDQUFhd0IsSUFBYixFQUF3QkosTUFBYSxHQUFHLEVBQXhDLEVBQTRDO0FBQ2pEQSxRQUFNLENBQUNXLE9BQVAsQ0FBZTFELEdBQUcsSUFBSTtBQUNwQixVQUFNMkQsTUFBTSxHQUFHUixJQUFJLENBQUNRLE1BQXBCOztBQUNBLFFBQUlBLE1BQUosRUFBWTtBQUNWLFlBQU0sQ0FBRTlELE1BQUYsRUFBVXdELElBQVYsSUFBbUJNLE1BQXpCO0FBQ0FDLGFBQU8sQ0FBQy9ELE1BQUQsQ0FBUCxDQUFnQixHQUFHd0QsSUFBbkI7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDOzs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUUsR0FBeUIsR0FBR00sTUFBTSxHQUFHQSxNQUFILEdBQVlDLE1BQXBEO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLE9BQU9ELE1BQVAsS0FBa0IsV0FBcEM7QUFFQSxNQUFNRSxXQUFXLEdBQUlULEdBQUQsSUFBOEM7QUFDdkUsU0FBTyxPQUFPTyxNQUFQLEtBQWtCRyxTQUF6QjtBQUNELENBRk07QUFJUCxJQUFJQyxXQUFXLEdBQUcsS0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUcsS0FBbkI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsS0FBbEI7O0FBRUEsSUFBSUosV0FBVyxDQUFDVCxHQUFELENBQWYsRUFBc0I7QUFBQTs7QUFDcEJXLGFBQVcsR0FBRyxDQUFBWCxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILDhCQUFBQSxHQUFHLENBQUVjLFNBQUwsa0VBQWdCQyxTQUFoQixDQUEwQkMsT0FBMUIsQ0FBa0MsUUFBbEMsS0FBOEMsQ0FBQyxDQUE3RDtBQUNBSixjQUFZLEdBQUcsQ0FBQVosR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCwrQkFBQUEsR0FBRyxDQUFFYyxTQUFMLG9FQUFnQkMsU0FBaEIsQ0FBMEJDLE9BQTFCLENBQWtDLFNBQWxDLEtBQStDLENBQUMsQ0FBL0Q7QUFDQUgsYUFBVyxHQUFHLENBQUFiLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgsK0JBQUFBLEdBQUcsQ0FBRWMsU0FBTCxvRUFBZ0JDLFNBQWhCLENBQTBCQyxPQUExQixDQUFrQyxRQUFsQyxLQUE4QyxDQUFDLENBQS9DLElBQW9ELENBQUNMLFdBQW5FO0FBQ0Q7O0FBRU0sTUFBTS9ELFFBQVEsR0FBRytELFdBQWpCO0FBQ0EsTUFBTU0sU0FBUyxHQUFHTCxZQUFsQjtBQUNBLE1BQU05RCxRQUFRLEdBQUcrRCxXQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDbENQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTSyxRQUFULENBQWtCQyxJQUFsQixFQUFnRDtBQUNyRCxNQUFJcEIseURBQVcsQ0FBQ0MsMkNBQUcsQ0FBQ0MsS0FBTCxDQUFmLEVBQTRCO0FBQzFCLFdBQU9ELDJDQUFHLENBQUNDLEtBQUosQ0FBVW1CLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCRixJQUFyQixDQUFQO0FBQ0Q7QUFDRjtBQUVNLFNBQVNHLFFBQVQsQ0FBa0IvRCxLQUFsQixFQUFzQztBQUMzQyxNQUFJd0MseURBQVcsQ0FBQ0MsMkNBQUcsQ0FBQ0MsS0FBTCxDQUFYLElBQTBCLENBQUNzQixRQUFRLENBQUNoRSxLQUFLLENBQUM0RCxJQUFQLENBQXZDLEVBQXFEO0FBQ25EbkIsK0NBQUcsQ0FBQ0MsS0FBSixDQUFVbUIsTUFBVixDQUFpQkksR0FBakIsQ0FBcUJqRSxLQUFLLENBQUM0RCxJQUEzQixFQUFpQzVELEtBQWpDO0FBQ0Q7O0FBQ0QsU0FBT0EsS0FBUDtBQUNEO0FBRU0sU0FBU2dFLFFBQVQsQ0FBa0JKLElBQWxCLEVBQWtEO0FBQUE7O0FBQ3ZELHVCQUFPbkIsMkNBQUcsQ0FBQ0MsS0FBWCwrQ0FBTyxXQUFXbUIsTUFBWCxDQUFrQkssR0FBbEIsQ0FBc0JOLElBQXRCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVM5QixJQUFULEdBQTZCO0FBQ2xDLFNBQU9xQywwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQzFCLFFBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQixXQUFLQSxRQUFMLENBQWNDLFNBQWQsR0FBMEJDLFdBQVcsQ0FBQ0MsR0FBWixFQUExQjtBQUNEO0FBQ0YsR0FKYyxDQUFmO0FBS0Q7QUFFTSxTQUFTeEMsT0FBVCxHQUFnQztBQUNyQyxTQUFPb0MsMERBQVEsQ0FBQyxJQUFELEVBQU8sTUFBTTtBQUMxQixRQUFJLEtBQUtDLFFBQVQsRUFBbUI7QUFDakIsV0FBS0EsUUFBTCxDQUFjckMsT0FBZCxHQUF3QnVDLFdBQVcsQ0FBQ0MsR0FBWixFQUF4QjtBQUNEO0FBQ0YsR0FKYyxDQUFmO0FBS0Q7QUFFTSxTQUFTdkMsT0FBVCxHQUFnQztBQUNyQyxTQUFPbUMsMERBQVEsQ0FBQyxJQUFELEVBQU8sTUFBTTtBQUMxQixRQUFJLEtBQUtDLFFBQUwsSUFBaUIsS0FBS0EsUUFBTCxDQUFjQyxTQUFuQyxFQUE4QztBQUM1QyxXQUFLRCxRQUFMLENBQWNJLFlBQWQsR0FBNkJGLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQixLQUFLSCxRQUFMLENBQWNDLFNBQS9EO0FBQ0Q7QUFDRixHQUpjLENBQWY7QUFLRCxDOzs7Ozs7Ozs7Ozs7QUN4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU25ELEtBQVQsR0FBOEI7QUFDbkMsU0FBT2lELDBEQUFRLENBQUMsSUFBRCxFQUFPLE1BQU07QUFDMUIsUUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQUE7O0FBQ2pCLFdBQUtBLFFBQUwsQ0FBY2xELEtBQWQsMkJBQXNCLEtBQUtrRCxRQUFMLENBQWNsRCxLQUFwQyx1RUFBNkMsQ0FBN0M7QUFDQSxXQUFLa0QsUUFBTCxDQUFjbEQsS0FBZCxJQUF1QixDQUF2QjtBQUNEO0FBQ0YsR0FMYyxDQUFmO0FBTUQ7QUFFTSxTQUFTQyxVQUFULEdBQW1DO0FBQ3hDLFNBQU9nRCwwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQzFCLFFBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQixXQUFLQSxRQUFMLENBQWNsRCxLQUFkLEdBQXNCLENBQXRCO0FBQ0Q7QUFDRixHQUpjLENBQWY7QUFLRDtBQUVNLFNBQVN1RCxVQUFULEdBQW1DO0FBQ3hDLFNBQU9OLDBEQUFRLENBQUMsSUFBRCxFQUFPLE1BQU07QUFDMUIsUUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ2pCLFdBQUtBLFFBQUwsQ0FBY2xELEtBQWQsR0FBc0JpQyxTQUF0QjtBQUNEO0FBQ0YsR0FKYyxDQUFmO0FBS0QsQzs7Ozs7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTL0IsR0FBVCxHQUE0QjtBQUNqQyxTQUFPK0MsMERBQVEsQ0FBQyxJQUFELEVBQU8sTUFBTTtBQUMxQixTQUFLM0QsT0FBTCxHQUFla0Usa0RBQWY7QUFDRCxHQUZjLENBQWY7QUFHRDtBQUVNLFNBQVNyRCxNQUFULEdBQStCO0FBQ3BDLFNBQU84QywwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQzFCLFNBQUszRCxPQUFMLEdBQWVtRSxxREFBZjtBQUNELEdBRmMsQ0FBZjtBQUdEO0FBRU0sU0FBU3JELEtBQVQsR0FBOEI7QUFDbkMsU0FBTzZDLDBEQUFRLENBQUMsSUFBRCxFQUFPLE1BQU07QUFDMUIsU0FBSzNELE9BQUwsR0FBZW9FLG9EQUFmO0FBQ0QsR0FGYyxDQUFmO0FBR0QsQzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTbkQsS0FBVCxHQUE4QjtBQUNuQyxTQUFPMEMsMERBQVEsQ0FBQyxJQUFELEVBQU8sTUFBTTtBQUMxQixTQUFLM0QsT0FBTCxHQUFlcUUsb0RBQWY7QUFDRCxHQUZjLENBQWY7QUFHRDtBQUVNLFNBQVNuRCxjQUFULEdBQXVDO0FBQzVDLFNBQU95QywwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQzFCLFNBQUszRCxPQUFMLEdBQWVzRSw2REFBZjtBQUNELEdBRmMsQ0FBZjtBQUdEO0FBRU0sU0FBU25ELFFBQVQsR0FBaUM7QUFDdEMsU0FBT3dDLDBEQUFRLENBQUMsSUFBRCxFQUFPLE1BQU07QUFDMUIsU0FBSzNELE9BQUwsR0FBZXVFLHVEQUFmO0FBQ0QsR0FGYyxDQUFmO0FBR0QsQzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTL0UsS0FBVCxDQUEwQjRELElBQTFCLEVBQTRDO0FBQ2pELFNBQU9vQixpRUFBZSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQUE7O0FBQ2pDLFNBQUtaLFFBQUwsR0FBZ0JMLHVEQUFRLGNBQUNKLHVEQUFRLENBQUNDLElBQUQsQ0FBVCxpREFBbUI7QUFBRUE7QUFBRixLQUFuQixDQUF4QjtBQUNELEdBRnFCLENBQXRCO0FBR0Q7QUFFTSxTQUFTL0QsU0FBVCxDQUE4QitCLEVBQTlCLEVBQThDO0FBQ25ELFNBQU91QywwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQzFCLFNBQUtjLFlBQUwsR0FBb0JyRCxFQUFwQjtBQUNELEdBRmMsQ0FBZjtBQUdEO0FBRU0sU0FBU0EsRUFBVCxDQUF1QkEsRUFBdkIsRUFBdUM7QUFDNUMsU0FBTyxLQUFLL0IsU0FBTCxDQUFlK0IsRUFBZixDQUFQO0FBQ0Q7QUFFTSxTQUFTQyxLQUFULEdBQThCO0FBQ25DLFNBQU9zQywwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQzFCLFNBQUszRCxPQUFMLEdBQWUwRSxvREFBZjtBQUNELEdBRmMsQ0FBZjtBQUdELEM7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNcEQsSUFBSSxHQUFHbUIsaURBQVMsR0FBR2tDLDZDQUFILEdBQWlCQywwQ0FBdkM7QUFDQSxNQUFNckQsT0FBTyxHQUFHa0IsaURBQVMsR0FBR29DLGdEQUFILEdBQW9CQyw2Q0FBN0M7QUFDQSxNQUFNdEQsT0FBTyxHQUFHaUIsaURBQVMsR0FBR3NDLGdEQUFILEdBQW9CQyw2Q0FBN0M7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBTyxTQUFTckIsUUFBVCxDQUFrQnNCLE9BQWxCLEVBQWdDQyxJQUFoQyxFQUFvRDtBQUN6REQsU0FBTyxDQUFDbEYsYUFBUixHQUF3QmtGLE9BQU8sQ0FBQ2xGLGFBQVIsQ0FBc0JvRixNQUF0QixDQUE2QixDQUFDRCxJQUFELENBQTdCLENBQXhCO0FBQ0EsU0FBT0QsT0FBUDtBQUNEO0FBRU0sU0FBU1QsZUFBVCxDQUF5QlMsT0FBekIsRUFBdUNDLElBQXZDLEVBQTJEO0FBQ2hFRCxTQUFPLENBQUNsRixhQUFSLEdBQXdCLENBQUNtRixJQUFELEVBQU9DLE1BQVAsQ0FBY0YsT0FBTyxDQUFDbEYsYUFBdEIsQ0FBeEI7QUFDQSxTQUFPa0YsT0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTM0QsSUFBVCxHQUE2QjtBQUNsQyxTQUFPcUMsMERBQVEsQ0FBQyxJQUFELEVBQU8sTUFBTTtBQUMxQixRQUFJLEtBQUtDLFFBQVQsRUFBbUIsQ0FFbEI7QUFDRixHQUpjLENBQWY7QUFLRDtBQUVNLFNBQVNyQyxPQUFULEdBQWdDO0FBQ3JDLFNBQU9vQywwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNLENBRTNCLENBRmMsQ0FBZjtBQUdEO0FBRU0sU0FBU25DLE9BQVQsR0FBZ0M7QUFDckMsU0FBT21DLDBEQUFRLENBQUMsSUFBRCxFQUFPLE1BQU0sQ0FFM0IsQ0FGYyxDQUFmO0FBR0Q7QUFFTSxTQUFTeUIsT0FBVCxHQUFnQztBQUNyQyxTQUFPekIsMERBQVEsQ0FBQyxJQUFELEVBQU8sTUFBTSxDQUUzQixDQUZjLENBQWY7QUFHRCxDOzs7Ozs7Ozs7Ozs7QUMxQkQ7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDTyxTQUFTNUMsTUFBVCxDQUEyQnNFLFNBQTNCLEVBQW1EO0FBQ3hELFNBQU8xQiwwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQzFCLFNBQUswQixTQUFMLEdBQWlCQSxTQUFqQjtBQUNELEdBRmMsQ0FBZjtBQUdELEMsQ0FFRDs7QUFDTyxTQUFTckUsSUFBVCxDQUF5QnNFLFVBQXpCLEVBQWtEO0FBQ3ZELFNBQU8zQiwwREFBUSxDQUFDLElBQUQsRUFBTyxNQUFNO0FBQzFCLFNBQUsyQixVQUFMLEdBQWtCQSxVQUFsQjtBQUNELEdBRmMsQ0FBZjtBQUdELEM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFFTyxTQUFTckYsUUFBVCxDQUE2QkosR0FBN0IsRUFBNEMwRixTQUE1QyxFQUErRHhELElBQS9ELEVBQXNGO0FBQzNGLFFBQU15RCxHQUFHLEdBQUczRixHQUFHLENBQUMzQixVQUFKLENBQWVxSCxTQUFmLENBQVo7QUFDQSxRQUFNLENBQUVoSCxNQUFGLEVBQVVrSCxNQUFWLEVBQWtCcEgsS0FBbEIsRUFBeUJxSCxJQUF6QixJQUFrQyxDQUFFRixHQUFHLENBQUNqSCxNQUFOLEVBQWNvSCxPQUFPLENBQUNILEdBQUQsRUFBTXpELElBQU4sQ0FBckIsRUFBbUNsQyxHQUFHLENBQUM3QixVQUFKLEdBQWlCd0gsR0FBRyxDQUFDbkgsS0FBeEQsRUFBZ0V1SCxLQUFLLENBQUMsSUFBRCxDQUFyRSxDQUF4QztBQUNBLFFBQU1DLFdBQVcsR0FBR0gsSUFBSSxLQUFLLEVBQVQsR0FBYyxDQUFFRCxNQUFGLEVBQVVwSCxLQUFWLEVBQWlCLEdBQUcwRCxJQUFwQixDQUFkLEdBQTJDLENBQUUwRCxNQUFGLEVBQVVwSCxLQUFWLEVBQWlCcUgsSUFBakIsRUFBdUIsR0FBRzNELElBQTFCLENBQS9EO0FBQ0EsU0FBTytELHlEQUFTLENBQUNDLDJEQUFXLENBQUMsSUFBRCxFQUFPeEgsTUFBUCxFQUFlc0gsV0FBZixDQUFaLENBQWhCO0FBQ0Q7QUFFTSxTQUFTeEIsVUFBVCxDQUErQnhFLEdBQS9CLEVBQThDMEYsU0FBOUMsRUFBaUV4RCxJQUFqRSxFQUF3RjtBQUM3RixRQUFNeUQsR0FBRyxHQUFHM0YsR0FBRyxDQUFDM0IsVUFBSixDQUFlcUgsU0FBZixDQUFaO0FBQ0EsUUFBTVMsWUFBWSxHQUFHLENBQUVMLE9BQU8sQ0FBQ0gsR0FBRCxFQUFNekQsSUFBTixDQUFULEVBQXVCbEMsR0FBRyxDQUFDN0IsVUFBSixHQUFpQndILEdBQUcsQ0FBQ25ILEtBQTVDLENBQXJCO0FBQ0EsUUFBTXdILFdBQVcsR0FBRyxPQUFPOUQsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixRQUFuQixHQUE4QixDQUFFLEdBQUdpRSxZQUFMLEVBQW1CakUsSUFBSSxDQUFDLENBQUQsQ0FBdkIsQ0FBOUIsR0FBNkRpRSxZQUFqRjtBQUNBLFNBQU9GLHlEQUFTLENBQUNDLDJEQUFXLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0JGLFdBQWhCLENBQVosQ0FBaEI7QUFDRDtBQUVNLFNBQVN2QixtQkFBVCxDQUF3Q3pFLEdBQXhDLEVBQXVEMEYsU0FBdkQsRUFBMEV4RCxJQUExRSxFQUFpRztBQUN0RyxRQUFNeUQsR0FBRyxHQUFHM0YsR0FBRyxDQUFDM0IsVUFBSixDQUFlcUgsU0FBZixDQUFaO0FBQ0EsUUFBTVMsWUFBWSxHQUFHLENBQUVMLE9BQU8sQ0FBQ0gsR0FBRCxFQUFNekQsSUFBTixDQUFULEVBQXVCbEMsR0FBRyxDQUFDN0IsVUFBSixHQUFpQndILEdBQUcsQ0FBQ25ILEtBQTVDLENBQXJCO0FBQ0EsUUFBTXdILFdBQVcsR0FBRyxPQUFPOUQsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixRQUFuQixHQUE4QixDQUFFLEdBQUdpRSxZQUFMLEVBQW1CakUsSUFBSSxDQUFDLENBQUQsQ0FBdkIsQ0FBOUIsR0FBNkRpRSxZQUFqRjtBQUNBLFNBQU9GLHlEQUFTLENBQUNDLDJEQUFXLENBQUMsSUFBRCxFQUFPLGdCQUFQLEVBQXlCRixXQUF6QixDQUFaLENBQWhCO0FBQ0QsQyxDQUVEOztBQUVPLFNBQVNGLE9BQVQsQ0FBaUJILEdBQWpCLEVBQTBDekQsSUFBMUMsRUFBOEQ7QUFDbkUsU0FBUSxNQUFLa0UsTUFBTSxDQUFDVCxHQUFELENBQU0sSUFBR1UsS0FBSyxDQUFDVixHQUFHLENBQUNELFNBQUwsQ0FBZ0IsSUFBR3hELElBQUksQ0FBQ29FLE1BQU8sR0FBaEU7QUFDRDs7QUFFRCxTQUFTRixNQUFULENBQWdCVCxHQUFoQixFQUFnRDtBQUFBOztBQUM5QyxTQUFPLGVBQUF2RCwyQ0FBRyxDQUFDQyxLQUFKLDRFQUFXckMsR0FBWCxrRUFBZ0I5QixTQUFoQixNQUE4QixJQUE5QixHQUFzQyxJQUFHeUgsR0FBRyxDQUFDaEgsS0FBTSxFQUFuRCxHQUF1RCxFQUE5RDtBQUNEOztBQUVELFNBQVMwSCxLQUFULENBQWU5QyxJQUFmLEVBQThDO0FBQzVDLFNBQU9nRCx5REFBVyxDQUFDaEQsSUFBRCxhQUFDQSxJQUFELGNBQUNBLElBQUQsR0FBUyxFQUFULENBQWxCO0FBQ0Q7O0FBRU0sU0FBU3dDLEtBQVQsQ0FBZS9ELElBQWYsRUFBaUM7QUFDdEMsU0FBUSxHQUFFd0UsVUFBVSxDQUFDeEUsSUFBRCxDQUFPLEdBQUV5RSxNQUFNLENBQUN6RSxJQUFELENBQU8sR0FBRTBFLEtBQUssQ0FBQzFFLElBQUQsQ0FBTyxHQUFFMkUsTUFBTSxDQUFDM0UsSUFBRCxDQUFPLEVBQXZFO0FBQ0Q7O0FBRUQsU0FBUzBFLEtBQVQsQ0FBZTFFLElBQWYsRUFBaUM7QUFBQTs7QUFDL0IsUUFBTTRFLFNBQVMsR0FBSSxHQUFELG1EQUFHNUUsSUFBSSxDQUFDK0IsUUFBUixtREFBRyxlQUFlckMsT0FBbEIsNEZBQTZCTSxJQUFJLENBQUMrQixRQUFsQyxvREFBNkIsZ0JBQWVJLFlBQTVDLHVDQUE0RCxFQUFHLEVBQWpGO0FBQ0EsU0FBT3lDLFNBQVMsS0FBSyxFQUFkLEdBQW9CLEtBQUksZ0JBQUF4RSwyQ0FBRyxDQUFDQyxLQUFKLCtFQUFXckMsR0FBWCxvRUFBZ0I5QixTQUFoQixJQUE0QixHQUE1QixHQUFrQyxFQUFHLEdBQUUwSSxTQUFVLElBQXpFLEdBQStFLEVBQXRGO0FBQ0Q7O0FBRUQsU0FBU0QsTUFBVCxDQUFnQjNFLElBQWhCLEVBQWtDO0FBQUE7O0FBQ2hDLFFBQU1uQixLQUFLLHNCQUFHbUIsSUFBSSxDQUFDK0IsUUFBUixvREFBRyxnQkFBZWxELEtBQTdCO0FBQ0EsU0FBT0EsS0FBSyxLQUFLaUMsU0FBVixHQUF1QixXQUFVakMsS0FBTSxHQUF2QyxHQUE0QyxFQUFuRDtBQUNEOztBQUVELFNBQVMyRixVQUFULENBQW9CeEUsSUFBcEIsRUFBc0M7QUFDcEMsU0FBT0EsSUFBSSxDQUFDNEMsWUFBTCxHQUFxQixJQUFHNUMsSUFBSSxDQUFDNEMsWUFBYSxHQUExQyxHQUErQyxFQUF0RDtBQUNEOztBQUVELFNBQVM2QixNQUFULENBQWdCekUsSUFBaEIsRUFBa0M7QUFDaEMsU0FBT0EsSUFBSSxDQUFDK0IsUUFBTCxHQUFpQixJQUFHL0IsSUFBSSxDQUFDK0IsUUFBTCxDQUFjUixJQUFLLElBQXZDLEdBQTZDLEVBQXBEO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDOUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFLQTtBQVNBLE1BQU1uRCxRQUFRLEdBQUd3QyxpREFBUyxHQUFHaUUsaURBQUgsR0FBcUJDLDhDQUEvQztBQUNBLE1BQU10QyxVQUFVLEdBQUc1QixpREFBUyxHQUFHbUUsbURBQUgsR0FBdUJDLGdEQUFuRDtBQUNBLE1BQU12QyxtQkFBbUIsR0FBRzdCLGlEQUFTLEdBQUdxRSw0REFBSCxHQUFnQ0MseURBQXJFOzs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFFTyxTQUFTOUcsUUFBVCxDQUE2QkosR0FBN0IsRUFBNEMwRixTQUE1QyxFQUErRHhELElBQS9ELEVBQXNGO0FBQzNGLFFBQU15RCxHQUFHLEdBQUczRixHQUFHLENBQUMzQixVQUFKLENBQWVxSCxTQUFmLENBQVo7QUFDQSxRQUFNLENBQUVoSCxNQUFGLEVBQVVrSCxNQUFWLEVBQWtCcEgsS0FBbEIsRUFBeUJxSCxJQUF6QixJQUFrQyxDQUFFRixHQUFHLENBQUNqSCxNQUFOLEVBQWNvSCxPQUFPLENBQUNILEdBQUQsRUFBTXpELElBQU4sQ0FBckIsRUFBbUNsQyxHQUFHLENBQUM3QixVQUFKLEdBQWlCd0gsR0FBRyxDQUFDbkgsS0FBeEQsRUFBZ0V1SCxLQUFLLENBQUMsSUFBRCxDQUFyRSxDQUF4QztBQUNBLFFBQU1DLFdBQVcsR0FBR0gsSUFBSSxLQUFLLEVBQVQsR0FBYyxDQUFFRCxNQUFGLEVBQVVwSCxLQUFWLEVBQWlCLEdBQUcwRCxJQUFwQixDQUFkLEdBQTJDLENBQUUwRCxNQUFGLEVBQVVwSCxLQUFWLEVBQWlCcUgsSUFBakIsRUFBdUIsR0FBRzNELElBQTFCLENBQS9EO0FBQ0EsU0FBTytELHlEQUFTLENBQUNDLDJEQUFXLENBQUMsSUFBRCxFQUFPeEgsTUFBUCxFQUFlc0gsV0FBZixDQUFaLENBQWhCO0FBQ0Q7QUFFTSxTQUFTeEIsVUFBVCxDQUErQnhFLEdBQS9CLEVBQThDMEYsU0FBOUMsRUFBaUV4RCxJQUFqRSxFQUF3RjtBQUM3RixRQUFNeUQsR0FBRyxHQUFHM0YsR0FBRyxDQUFDM0IsVUFBSixDQUFlcUgsU0FBZixDQUFaO0FBQ0EsUUFBTVMsWUFBWSxHQUFHLENBQUVMLE9BQU8sQ0FBQ0gsR0FBRCxFQUFNekQsSUFBTixDQUFULEVBQXVCbEMsR0FBRyxDQUFDN0IsVUFBSixHQUFpQndILEdBQUcsQ0FBQ25ILEtBQTVDLENBQXJCO0FBQ0EsUUFBTXdILFdBQVcsR0FBRyxPQUFPOUQsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixRQUFuQixHQUE4QixDQUFFLEdBQUdpRSxZQUFMLEVBQW1CakUsSUFBSSxDQUFDLENBQUQsQ0FBdkIsQ0FBOUIsR0FBNkRpRSxZQUFqRjtBQUNBLFNBQU9GLHlEQUFTLENBQUNDLDJEQUFXLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0JGLFdBQWhCLENBQVosQ0FBaEI7QUFDRDtBQUVNLFNBQVN2QixtQkFBVCxDQUF3Q3pFLEdBQXhDLEVBQXVEMEYsU0FBdkQsRUFBMEV4RCxJQUExRSxFQUFpRztBQUN0RyxRQUFNeUQsR0FBRyxHQUFHM0YsR0FBRyxDQUFDM0IsVUFBSixDQUFlcUgsU0FBZixDQUFaO0FBQ0EsUUFBTVMsWUFBWSxHQUFHLENBQUVMLE9BQU8sQ0FBQ0gsR0FBRCxFQUFNekQsSUFBTixDQUFULEVBQXVCbEMsR0FBRyxDQUFDN0IsVUFBSixHQUFpQndILEdBQUcsQ0FBQ25ILEtBQTVDLENBQXJCO0FBQ0EsUUFBTXdILFdBQVcsR0FBRyxPQUFPOUQsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixRQUFuQixHQUE4QixDQUFFLEdBQUdpRSxZQUFMLEVBQW1CakUsSUFBSSxDQUFDLENBQUQsQ0FBdkIsQ0FBOUIsR0FBNkRpRSxZQUFqRjtBQUNBLFNBQU9GLHlEQUFTLENBQUNDLDJEQUFXLENBQUMsSUFBRCxFQUFPLGdCQUFQLEVBQXlCRixXQUF6QixDQUFaLENBQWhCO0FBQ0QsQyxDQUVEOztBQUVPLFNBQVNGLE9BQVQsQ0FBaUJILEdBQWpCLEVBQTBDekQsSUFBMUMsRUFBOEQ7QUFDbkUsU0FBUSxNQUFLa0UsTUFBTSxDQUFDVCxHQUFELENBQU0sSUFBR1UsS0FBSyxDQUFDVixHQUFHLENBQUNELFNBQUwsQ0FBZ0IsSUFBR3hELElBQUksQ0FBQ29FLE1BQU8sR0FBaEU7QUFDRDs7QUFFRCxTQUFTRixNQUFULENBQWdCVCxHQUFoQixFQUFnRDtBQUFBOztBQUM5QyxTQUFPLGVBQUF2RCwyQ0FBRyxDQUFDQyxLQUFKLDRFQUFXckMsR0FBWCxrRUFBZ0I5QixTQUFoQixNQUE4QixJQUE5QixHQUFzQyxJQUFHeUgsR0FBRyxDQUFDaEgsS0FBTSxFQUFuRCxHQUF1RCxFQUE5RDtBQUNEOztBQUVELFNBQVMwSCxLQUFULENBQWU5QyxJQUFmLEVBQThDO0FBQzVDLFNBQU9nRCx5REFBVyxDQUFDaEQsSUFBRCxhQUFDQSxJQUFELGNBQUNBLElBQUQsR0FBUyxFQUFULENBQWxCO0FBQ0Q7O0FBRU0sU0FBU3dDLEtBQVQsQ0FBZS9ELElBQWYsRUFBaUM7QUFDdEMsU0FBUSxHQUFFd0UsVUFBVSxDQUFDeEUsSUFBRCxDQUFPLEdBQUV5RSxNQUFNLENBQUN6RSxJQUFELENBQU8sR0FBRTBFLEtBQUssQ0FBQzFFLElBQUQsQ0FBTyxHQUFFMkUsTUFBTSxDQUFDM0UsSUFBRCxDQUFPLEVBQXZFO0FBQ0Q7O0FBRUQsU0FBUzBFLEtBQVQsQ0FBZTFFLElBQWYsRUFBaUM7QUFBQTs7QUFDL0IsUUFBTTRFLFNBQVMsR0FBSSxHQUFELG1EQUFHNUUsSUFBSSxDQUFDK0IsUUFBUixtREFBRyxlQUFlckMsT0FBbEIsNEZBQTZCTSxJQUFJLENBQUMrQixRQUFsQyxvREFBNkIsZ0JBQWVJLFlBQTVDLHVDQUE0RCxFQUFHLEVBQWpGO0FBQ0EsU0FBT3lDLFNBQVMsS0FBSyxFQUFkLEdBQW9CLEtBQUksZ0JBQUF4RSwyQ0FBRyxDQUFDQyxLQUFKLCtFQUFXckMsR0FBWCxvRUFBZ0I5QixTQUFoQixJQUE0QixHQUE1QixHQUFrQyxFQUFHLEdBQUUwSSxTQUFVLElBQXpFLEdBQStFLEVBQXRGO0FBQ0Q7O0FBRUQsU0FBU0QsTUFBVCxDQUFnQjNFLElBQWhCLEVBQWtDO0FBQUE7O0FBQ2hDLFFBQU1uQixLQUFLLHNCQUFHbUIsSUFBSSxDQUFDK0IsUUFBUixvREFBRyxnQkFBZWxELEtBQTdCO0FBQ0EsU0FBT0EsS0FBSyxLQUFLaUMsU0FBVixHQUF1QixXQUFVakMsS0FBTSxHQUF2QyxHQUE0QyxFQUFuRDtBQUNEOztBQUVELFNBQVMyRixVQUFULENBQW9CeEUsSUFBcEIsRUFBc0M7QUFDcEMsU0FBT0EsSUFBSSxDQUFDNEMsWUFBTCxHQUFxQixJQUFHNUMsSUFBSSxDQUFDNEMsWUFBYSxHQUExQyxHQUErQyxFQUF0RDtBQUNEOztBQUVELFNBQVM2QixNQUFULENBQWdCekUsSUFBaEIsRUFBa0M7QUFDaEMsU0FBT0EsSUFBSSxDQUFDK0IsUUFBTCxHQUFpQixJQUFHL0IsSUFBSSxDQUFDK0IsUUFBTCxDQUFjUixJQUFLLElBQXZDLEdBQTZDLEVBQXBEO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDOUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBRU8sU0FBUzVDLEtBQVQsQ0FBMEJYLEdBQTFCLEVBQXlDMEYsU0FBekMsRUFBNER4RCxJQUE1RCxFQUFtRjtBQUN4RixTQUFPLEtBQUsvQixPQUFMLENBQWFILEdBQWIsRUFBa0IwRixTQUFsQixFQUE2QnhELElBQTdCLENBQVA7QUFDRCxDLENBRUQ7O0FBRU8sU0FBU3dDLGFBQVQsQ0FBa0MxRSxHQUFsQyxFQUFpRG1ILENBQWpELEVBQTREakYsSUFBNUQsRUFBbUY7QUFDeEYsU0FBTytELFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLElBQUQsRUFBTyxVQUFQLEVBQW1CLEVBQW5CLENBQVosQ0FBaEI7QUFDRDtBQUVNLFNBQVMzQixVQUFULENBQStCdkUsR0FBL0IsRUFBOENtSCxDQUE5QyxFQUF5RGpGLElBQXpELEVBQWdGO0FBQ3JGLFNBQU8rRCxTQUFTLENBQUNDLFdBQVcsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQmhFLElBQWhCLENBQVosRUFBbUMsS0FBbkMsQ0FBaEI7QUFDRDtBQUVNLFNBQVNtQyxRQUFULENBQTZCckUsR0FBN0IsRUFBNENtSCxDQUE1QyxFQUF1RGpGLElBQXZELEVBQThFO0FBQ25GLFNBQU8rRCxTQUFTLENBQUNDLFdBQVcsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjaEUsSUFBZCxDQUFaLEVBQWlDLEtBQWpDLENBQWhCO0FBQ0Q7QUFFTSxTQUFTb0MsV0FBVCxDQUFnQ3RFLEdBQWhDLEVBQStDbUgsQ0FBL0MsRUFBMERqRixJQUExRCxFQUFpRjtBQUN0RixTQUFPK0QsU0FBUyxDQUFDQyxXQUFXLENBQUMsSUFBRCxFQUFPLFFBQVAsRUFBaUJoRSxJQUFqQixDQUFaLEVBQW9DLEtBQXBDLENBQWhCO0FBQ0Q7QUFFTSxTQUFTMkMsVUFBVCxDQUErQjdFLEdBQS9CLEVBQThDbUgsQ0FBOUMsRUFBeURqRixJQUF6RCxFQUFnRjtBQUNyRixTQUFPK0QsU0FBUyxDQUFDQyxXQUFXLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0JoRSxJQUFoQixDQUFaLENBQWhCO0FBQ0QsQyxDQUVEOztBQUVPLFNBQVNnRSxXQUFULENBQXFCbEUsSUFBckIsRUFBZ0N0RCxNQUFoQyxFQUF1RHdELElBQXZELEVBQThFO0FBQ25GRixNQUFJLENBQUNRLE1BQUwsR0FBYyxDQUFDOUQsTUFBRCxFQUFTd0QsSUFBVCxDQUFkO0FBQ0EsU0FBT0YsSUFBSSxDQUFDUSxNQUFaO0FBQ0Q7QUFFTSxTQUFTeUQsU0FBVCxDQUFtQnpELE1BQW5CLEVBQXNDNEUsTUFBZSxHQUFHLElBQXhELEVBQXdFO0FBQzdFLFFBQU0sQ0FBQzFJLE1BQUQsRUFBU3dELElBQVQsSUFBaUJNLE1BQXZCOztBQUNBLE1BQUlKLDJDQUFHLENBQUNpRixRQUFKLEtBQWlCLEtBQXJCLEVBQTRCO0FBQzFCLFFBQUlELE1BQUosRUFBWTtBQUNWM0UsYUFBTyxDQUFDL0QsTUFBRCxDQUFQLENBQWdCLEdBQUd3RCxJQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMTyxhQUFPLENBQUMvRCxNQUFELENBQVAsQ0FBZ0J3RCxJQUFoQjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT00sTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUFBO0FBQUE7QUFBTyxTQUFTTCxXQUFULENBQXFCbUYsS0FBckIsRUFBMEQ7QUFDL0QsU0FBT0EsS0FBSyxLQUFLeEUsU0FBakI7QUFDRDtBQUVNLFNBQVN5RSxVQUFULENBQW9CQyxNQUFwQixFQUFnRCxDQWV0RCxDQWZNLENBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7QUN0SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTtBQUVBOzs7O0FBR08sU0FBUy9HLElBQVQsR0FBNkI7QUFDbEMsMkJBQVksSUFBWjtBQUNEO0FBRUQ7Ozs7QUFHTyxTQUFTSixTQUFULENBQW1CTCxHQUFuQixFQUFrQzBGLFNBQWxDLEVBQWlFO0FBQ3RFLFNBQU8sVUFBb0IsR0FBR3hELElBQXZCLEVBQWtEO0FBQ3ZELFVBQU11RixVQUFVLEdBQUd6SCxHQUFHLENBQUMzQixVQUFKLENBQWVxSCxTQUFmLENBQW5COztBQUNBLFVBQU1DLEdBQXVCLG1DQUFROEIsVUFBUjtBQUFvQi9CO0FBQXBCLE1BQTdCOztBQUNBLFFBQUlnQyxPQUFPLENBQUMsSUFBRCxFQUFPMUgsR0FBUCxFQUFZMkYsR0FBWixDQUFYLEVBQTZCO0FBQzNCLGFBQU9nQyxpQkFBaUIsQ0FBQyxJQUFELEVBQU8zSCxHQUFQLEVBQVkwRixTQUFaLEVBQXVCeEQsSUFBdkIsQ0FBeEI7QUFDRDs7QUFDRCxXQUFPO0FBQUVyRCxTQUFHLEVBQUUsSUFBUDtBQUFhMkQsWUFBTSxFQUFFO0FBQXJCLEtBQVA7QUFDRCxHQVBEO0FBUUQ7QUFFRDs7Ozs7QUFJTyxTQUFTakMsWUFBVCxDQUFzQlAsR0FBdEIsRUFBdUQ7QUFDNUQsU0FBTyxVQUFvQjBGLFNBQXBCLEVBQXVDLEdBQUd4RCxJQUExQyxFQUFxRTtBQUMxRSxVQUFNdUYsVUFBVSxHQUFHekgsR0FBRyxDQUFDNUIsYUFBSixDQUFrQnNILFNBQWxCLENBQW5COztBQUNBLFFBQUkrQixVQUFKLEVBQWdCO0FBQ2QsVUFBSUMsT0FBTyxDQUFDLElBQUQsRUFBTzFILEdBQVAsRUFBWXlILFVBQVosQ0FBWCxFQUFvQztBQUNsQyxlQUFPRSxpQkFBaUIsQ0FBQyxJQUFELEVBQU8zSCxHQUFQLEVBQVkwRixTQUFaLEVBQXVCeEQsSUFBdkIsQ0FBeEI7QUFDRDtBQUNGOztBQUNELFdBQU87QUFBRXJELFNBQUcsRUFBRSxJQUFQO0FBQWEyRCxZQUFNLEVBQUU7QUFBckIsS0FBUDtBQUNELEdBUkQ7QUFTRDtBQUFBO0FBRUQ7Ozs7QUFHQSxTQUFTbUYsaUJBQVQsQ0FBMkI5SSxHQUEzQixFQUFxQ21CLEdBQXJDLEVBQW9EMEYsU0FBcEQsRUFBdUV4RCxJQUF2RSxFQUFrRztBQUNoRztBQUNBckQsS0FBRyxDQUFDcUQsSUFBSixHQUFXQSxJQUFYLENBRmdHLENBR2hHOztBQUNBckQsS0FBRyxDQUFDcUIsYUFBSixDQUFrQnFDLE9BQWxCLENBQTBCOEMsSUFBSSxJQUFJQSxJQUFJLEVBQXRDO0FBQ0EsUUFBTTdDLE1BQU0sR0FBRzNELEdBQUcsQ0FBQzhCLEtBQUosQ0FBVVgsR0FBVixFQUFlMEYsU0FBZixFQUEwQnhELElBQTFCLENBQWY7QUFDQXJELEtBQUcsQ0FBQzZCLEtBQUosQ0FBVXdCLElBQVY7QUFDQXJELEtBQUcsQ0FBQytCLGFBQUosQ0FBa0JzQixJQUFsQjtBQUVBLFNBQU87QUFBRXJELE9BQUY7QUFBTzJEO0FBQVAsR0FBUDtBQUNEO0FBRUQ7Ozs7QUFJQTs7Ozs7QUFHQSxTQUFTa0YsT0FBVCxDQUFpQjFGLElBQWpCLEVBQTRCaEMsR0FBNUIsRUFBMkMyRixHQUEzQyxFQUE0RTtBQUMxRTtBQUNBLE1BQUlpQyxXQUFXLENBQUNqQyxHQUFELEVBQU0zRixHQUFHLENBQUNoQyxTQUFWLENBQWYsRUFBcUM7QUFDbkMsV0FBTzZKLFVBQVUsQ0FBQzdGLElBQUQsQ0FBVixJQUFvQjhGLFVBQVUsRUFBckM7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRDtBQUVEOzs7OztBQUdBLFNBQVNGLFdBQVQsQ0FBcUJqQyxHQUFyQixFQUE4Q3BILEtBQTlDLEVBQXFFO0FBQ25FLFNBQU9vSCxHQUFHLENBQUNwSCxLQUFKLElBQWFBLEtBQXBCO0FBQ0Q7QUFFRDs7Ozs7QUFHQSxTQUFTc0osVUFBVCxDQUFvQjdGLElBQXBCLEVBQXVDO0FBQ3JDLE1BQUlBLElBQUksQ0FBQ3dELFNBQUwsS0FBbUIxQyxTQUFuQixJQUFnQ2QsSUFBSSxDQUFDeUQsVUFBTCxLQUFvQjNDLFNBQXhELEVBQW1FO0FBQ2pFTCxXQUFPLENBQUN0RCxJQUFSLENBQWEsdUhBQWI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFJNkMsSUFBSSxDQUFDd0QsU0FBTCxLQUFtQjFDLFNBQXZCLEVBQWtDO0FBQ2hDLFdBQU8sRUFBRWQsSUFBSSxDQUFDd0QsU0FBTCxLQUFtQixLQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSXhELElBQUksQ0FBQ3lELFVBQUwsS0FBb0IzQyxTQUF4QixFQUFtQztBQUNqQyxXQUFPZCxJQUFJLENBQUN5RCxVQUFMLEtBQW9CLElBQTNCO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O0FBSUEsU0FBU3FDLFVBQVQsR0FBOEI7QUFDNUIsTUFBSWxGLGlEQUFKLEVBQWU7QUFDYixXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLENBQUFSLDJDQUFHLFNBQUgsSUFBQUEsMkNBQUcsV0FBSCxZQUFBQSwyQ0FBRyxDQUFFaUYsUUFBTCxNQUFrQixNQUF6QjtBQUNELEM7Ozs7Ozs7Ozs7OztBQzVHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBTyxTQUFTZCxXQUFULENBQXFCd0IsR0FBckIsRUFBeUM7QUFDOUMsU0FBT0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCRixHQUFHLENBQUNHLEtBQUosQ0FBVSxDQUFWLENBQXJDO0FBQ0Q7QUFFTSxTQUFTQyxXQUFULENBQXFCQyxXQUFyQixFQUF1Q0MsU0FBdkMsRUFBeUQ7QUFDOURBLFdBQVMsQ0FBQzlGLE9BQVYsQ0FBa0IrRixRQUFRLElBQUk7QUFDNUJDLFVBQU0sQ0FBQ0MsbUJBQVAsQ0FBMkJGLFFBQVEsQ0FBQ0csU0FBcEMsRUFBK0NsRyxPQUEvQyxDQUF1RGdCLElBQUksSUFBSTtBQUFBOztBQUM3RGdGLFlBQU0sQ0FBQ0csY0FBUCxDQUNFTixXQUFXLENBQUNLLFNBRGQsRUFFRWxGLElBRkYsMkJBR0VnRixNQUFNLENBQUNJLHdCQUFQLENBQWdDTCxRQUFRLENBQUNHLFNBQXpDLEVBQW9EbEYsSUFBcEQsQ0FIRix5RUFHK0QsRUFIL0Q7QUFLRCxLQU5EO0FBT0QsR0FSRDtBQVNELEMiLCJmaWxlIjoiYWR6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFkemVMaWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWR6ZUxpYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9vcGVuanNmLm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQsXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlLFxuICAgIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgaWYgKGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgICAgYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgYmFzZU1lcmdlLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgICA/IGN1c3RvbWl6ZXIoc2FmZUdldChvYmplY3QsIGtleSksIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgICAgfVxuICAgICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSwga2V5c0luKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VNZXJnZWAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgbWVyZ2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXJnZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1lcmdlIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IHNhZmVHZXQob2JqZWN0LCBrZXkpLFxuICAgICAgc3JjVmFsdWUgPSBzYWZlR2V0KHNvdXJjZSwga2V5KSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuXG4gIGlmIChzdGFja2VkKSB7XG4gICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICBpZiAoaXNDb21tb24pIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KHNyY1ZhbHVlKSxcbiAgICAgICAgaXNCdWZmID0gIWlzQXJyICYmIGlzQnVmZmVyKHNyY1ZhbHVlKSxcbiAgICAgICAgaXNUeXBlZCA9ICFpc0FyciAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheShzcmNWYWx1ZSk7XG5cbiAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgIGlmIChpc0FyciB8fCBpc0J1ZmYgfHwgaXNUeXBlZCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCdWZmKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVCdWZmZXIoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNUeXBlZCkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lVHlwZWRBcnJheShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCBpc0Z1bmN0aW9uKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGluaXRDbG9uZU9iamVjdChzcmNWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgbWVyZ2VGdW5jKG5ld1ZhbHVlLCBzcmNWYWx1ZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlZmF1bHRzRGVlcGAgdG8gY3VzdG9taXplIGl0cyBgXy5tZXJnZWAgdXNlIHRvIG1lcmdlIHNvdXJjZVxuICogb2JqZWN0cyBpbnRvIGRlc3RpbmF0aW9uIG9iamVjdHMgdGhhdCBhcmUgcGFzc2VkIHRocnUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gb2JqVmFsdWUgVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgc291cmNlIHZhbHVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHBhcmVudCBvYmplY3Qgb2YgYG9ialZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHBhcmVudCBvYmplY3Qgb2YgYHNyY1ZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gY3VzdG9tRGVmYXVsdHNNZXJnZShvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKSB7XG4gIGlmIChpc09iamVjdChvYmpWYWx1ZSkgJiYgaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBvYmpWYWx1ZSk7XG4gICAgYmFzZU1lcmdlKG9ialZhbHVlLCBzcmNWYWx1ZSwgdW5kZWZpbmVkLCBjdXN0b21EZWZhdWx0c01lcmdlLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqVmFsdWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCwgdW5sZXNzIGBrZXlgIGlzIFwiX19wcm90b19fXCIgb3IgXCJjb25zdHJ1Y3RvclwiLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2FmZUdldChvYmplY3QsIGtleSkge1xuICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcGxhaW4gb2JqZWN0IGZsYXR0ZW5pbmcgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nXG4gKiBrZXllZCBwcm9wZXJ0aWVzIG9mIGB2YWx1ZWAgdG8gb3duIHByb3BlcnRpZXMgb2YgdGhlIHBsYWluIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBwbGFpbiBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIG5ldyBGb28pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgXy50b1BsYWluT2JqZWN0KG5ldyBGb28pKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMyB9XG4gKi9cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3QodmFsdWUsIGtleXNJbih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZGVmYXVsdHNgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGFzc2lnbnNcbiAqIGRlZmF1bHQgcHJvcGVydGllcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMTAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmRlZmF1bHRzXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmYXVsdHNEZWVwKHsgJ2EnOiB7ICdiJzogMiB9IH0sIHsgJ2EnOiB7ICdiJzogMSwgJ2MnOiAzIH0gfSk7XG4gKiAvLyA9PiB7ICdhJzogeyAnYic6IDIsICdjJzogMyB9IH1cbiAqL1xudmFyIGRlZmF1bHRzRGVlcCA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFyZ3MpIHtcbiAgYXJncy5wdXNoKHVuZGVmaW5lZCwgY3VzdG9tRGVmYXVsdHNNZXJnZSk7XG4gIHJldHVybiBhcHBseShtZXJnZVdpdGgsIHVuZGVmaW5lZCwgYXJncyk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5tZXJnZWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgY3VzdG9taXplcmAgd2hpY2hcbiAqIGlzIGludm9rZWQgdG8gcHJvZHVjZSB0aGUgbWVyZ2VkIHZhbHVlcyBvZiB0aGUgZGVzdGluYXRpb24gYW5kIHNvdXJjZVxuICogcHJvcGVydGllcy4gSWYgYGN1c3RvbWl6ZXJgIHJldHVybnMgYHVuZGVmaW5lZGAsIG1lcmdpbmcgaXMgaGFuZGxlZCBieSB0aGVcbiAqIG1ldGhvZCBpbnN0ZWFkLiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGludm9rZWQgd2l0aCBzaXggYXJndW1lbnRzOlxuICogKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBzb3VyY2VzIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSkge1xuICogICBpZiAoXy5pc0FycmF5KG9ialZhbHVlKSkge1xuICogICAgIHJldHVybiBvYmpWYWx1ZS5jb25jYXQoc3JjVmFsdWUpO1xuICogICB9XG4gKiB9XG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbMV0sICdiJzogWzJdIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogWzNdLCAnYic6IFs0XSB9O1xuICpcbiAqIF8ubWVyZ2VXaXRoKG9iamVjdCwgb3RoZXIsIGN1c3RvbWl6ZXIpO1xuICogLy8gPT4geyAnYSc6IFsxLCAzXSwgJ2InOiBbMiwgNF0gfVxuICovXG52YXIgbWVyZ2VXaXRoID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyKSB7XG4gIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHNEZWVwO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHsgTG9nLCBMYWJlbCwgUmVjdXJzaXZlUGFydGlhbCB9IGZyb20gJy4nO1xuXG50eXBlIExhYmVsTWFwID0gTWFwPHN0cmluZywgTGFiZWw+O1xuXG5leHBvcnQgdHlwZSBDb25zb2xlTWV0aG9kID0gXCJlcnJvclwifFwid2FyblwifFwiaW5mb1wifFwibG9nXCJ8XCJkZWJ1Z1wifFwidHJhY2VcInxcImdyb3VwXCJ8XCJncm91cENvbGxhcHNlZFwifFwiZ3JvdXBFbmRcInxcInRhYmxlXCJ8XCJkaXJcInxcImRpcnhtbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoZWQge1xuICBjZmc6IERlZmF1bHRzO1xuICBjYWNoZTogTG9nW107XG4gIGxhYmVsczogTGFiZWxNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdHMge1xuICBsb2dfbGV2ZWw6IG51bWJlcjtcbiAgbG9nX2NhY2hlX3NpemU6IG51bWJlcjtcbiAgdXNlX2Vtb2ppOiBib29sZWFuO1xuICBiYXNlX3N0eWxlOiBzdHJpbmc7XG4gIGxvZ19sZXZlbHM6IExvZ0xldmVscztcbiAgY3VzdG9tX2xldmVsczogUGFydGlhbDxMb2dMZXZlbHM+O1xuICBmaWx0ZXJzOiBGaWx0ZXJzO1xufTtcblxuZXhwb3J0IHR5cGUgTG9nTGV2ZWxzID0ge1xuICBbbWV0aG9kOiBzdHJpbmddOiBMb2dMZXZlbERlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nTGV2ZWxEZWZpbml0aW9uIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgbGV2ZWxOYW1lPzogc3RyaW5nO1xuICBtZXRob2Q6IENvbnNvbGVNZXRob2Q7XG4gIHN0eWxlOiBzdHJpbmc7XG4gIHRlcm1pbmFsOiBzdHJpbmd8c3RyaW5nW107XG4gIGVtb2ppOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVycyB7XG4gIGhpZGVBbGw6IGJvb2xlYW47XG4gIG5hbWVzcGFjZTogRmlsdGVyT3B0aW9ucztcbiAgbGFiZWw6IEZpbHRlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyT3B0aW9ucyB7XG4gIGhpZGVBbGw6IGJvb2xlYW47XG4gIGV4Y2x1ZGU6IHN0cmluZ1tdO1xuICBpbmNsdWRlOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIGV4dGVuZHMgUmVjdXJzaXZlUGFydGlhbDxEZWZhdWx0cz4ge307IiwiaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IHsgTG9nTGV2ZWxEZWZpbml0aW9uLCBDb25maWd1cmF0aW9uLCBDb25zb2xlTWV0aG9kLCBEZWZhdWx0cyB9IGZyb20gXCIuXCI7XG5cbi8qKlxuICogRmluZ2VycHJpbnQgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4geW91IGV4ZWN1dGVcbiAqIGEgbG9nIG1ldGhvZCBzdWNoIGFzIGluZm8oKS5cbiAqL1xuZXhwb3J0IHR5cGUgTG9nRnVuY3Rpb24gPSAoLi4uYXJnczogYW55W10pID0+IFRlcm1pbmF0ZWRMb2c7XG5cbi8qKlxuICogRmluZ2VycHJpbnQgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4geW91IGV4ZWN1dGVcbiAqIGEgY3VzdG9tIGxvZyBtZXRob2QgZGVmaW5lZCBpbiB0aGUgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgQ3VzdG9tTG9nRnVuY3Rpb24gPSAobGV2ZWxOYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiBUZXJtaW5hdGVkTG9nO1xuXG4vKipcbiAqIFRoZSBrZXlzIG9mIHRoZSBkZWZhdWx0IHRlcm1pbmF0aW5nIGxvZyBtZXRob2RzIGluY2x1ZGVkIHdpdGggQWR6ZS5cbiAqL1xuZXhwb3J0IHR5cGUgVGVybWluYXRpbmdNZXRob2RLZXlzID0gXCJhdHRlbnRpb25cInxcImVycm9yXCJ8XCJ3YXJuXCJ8XCJmYWlsXCJ8XCJzdWNjZXNzXCJ8XCJpbmZvXCJ8XCJsb2dcInxcImRlYnVnXCJ8XCJ2ZXJib3NlXCI7XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gaW50ZXJmYWNlIGZvciB0aGUgZGVmYXVsdCBBZHplIHRlcm1pbmF0aW5nIGxvZyBtZXRob2RzLlxuICovXG5leHBvcnQgdHlwZSBUZXJtaW5hdGluZ01ldGhvZHMgPSB7XG4gIFttZXRob2QgaW4gVGVybWluYXRpbmdNZXRob2RLZXlzXTogTG9nRnVuY3Rpb247XG59O1xuXG4vKipcbiAqIEJvb2xlYW4gZmxhZ3MgdGhhdCByZXByZXNlbnQgdmFyaW91cyBzdGF0ZXMgb2YgaG93IHRoZSBsb2dcbiAqIHNob3VsZCBiZSBwcmludGVkLlxuICovXG5pbnRlcmZhY2UgTG9nRmxhZ3Mge1xuICB0cmFjZWFibGU6IGJvb2xlYW47XG4gIGFzc2VydGlvbj86IGJvb2xlYW47XG4gIGV4cHJlc3Npb24/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFZhbHVlcyBvZiB0aGUgbG9nIGluc3RhbmNlIHRoYXQgZGV0ZXJtaW5lIGhvdyBpdCBzaG91bGRcbiAqIGJlIHByaW50ZWQuXG4gKi9cbmludGVyZmFjZSBMb2dWYWx1ZXMge1xuICBjZmc6IENvbmZpZ3VyYXRpb247XG4gIHJlbmRlcj86IExvZ1JlbmRlcjtcbiAgYXJncz86IGFueVtdO1xuICBuYW1lc3BhY2VWYWw/OiBzdHJpbmc7XG4gIGxhYmVsVmFsPzogTGFiZWw7XG4gIG1vZGlmaWVyUXVldWU6IEZ1bmN0aW9uW107XG4gIHByaW50ZXIodGhpczogTG9nLCBjZmc6IERlZmF1bHRzLCBsZXZlbE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBMb2dSZW5kZXI7XG59XG5cbmV4cG9ydCB0eXBlIEJ1bmRsZSA9ICh1c2VyX2NmZz86IENvbmZpZ3VyYXRpb24pID0+IExvZztcblxuZXhwb3J0IGludGVyZmFjZSBCdW5kbGVkIHtcbiAgYWxsKCk6IHZvaWQ7XG59O1xuXG4vKipcbiAqIEFsbCBvZiB0aGUgdXNlciBhY2Nlc3NpYmxlIG1ldGhvZHMgdGhhdCBjYW4gYmUgY2hhaW5lZCB0b1xuICogY3JlYXRlIGEgY3VzdG9taXplZCBsb2cuXG4gKi9cbmludGVyZmFjZSBMb2dNZXRob2RzIHtcbiAgY3VzdG9tOiBDdXN0b21Mb2dGdW5jdGlvbjtcbiAgc2VhbCh0aGlzOiBMb2cpOiBMb2c7XG4gIGNhY2hlKHRoaXM6IExvZywgYXJnczogYW55W10pOiB2b2lkO1xuICBwcmludCh0aGlzOiBMb2csIGNmZzogRGVmYXVsdHMsIGxldmVsTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IExvZ1JlbmRlcjtcbiAgZmlyZUxpc3RlbmVycyh0aGlzOiBMb2csIGFyZ3M6IGFueVtdKTogdm9pZDtcbiAgXG4gIC8vIE1vZGlmaWVyIEZ1bmN0aW9uc1xuICBjb3VudCgpOiBMb2c7XG4gIGNvdW50UmVzZXQoKTogTG9nO1xuICBkaXIoKTogTG9nO1xuICBkaXJ4bWwoKTogTG9nO1xuICB0YWJsZSgpOiBMb2c7XG4gIGFzc2VydChhc3NlcnRpb246IGJvb2xlYW4pOiBMb2c7XG4gIHRlc3QoZXhwcmVzc2lvbjogYm9vbGVhbik6IExvZztcbiAgZ3JvdXAoKTogTG9nO1xuICBncm91cENvbGxhcHNlZCgpOiBMb2c7XG4gIGdyb3VwRW5kKCk6IExvZztcbiAgbGFiZWwobmFtZTogc3RyaW5nKTogTG9nO1xuICBucyhuczogc3RyaW5nKTogTG9nO1xuICBuYW1lc3BhY2UobnM6IHN0cmluZyk6IExvZztcbiAgdHJhY2UoKTogTG9nO1xuICB0aW1lKCk6IExvZztcbiAgdGltZU5vdygpOiBMb2c7XG4gIHRpbWVFbmQoKTogTG9nO1xufVxuXG4vKipcbiAqIFRoZSBmaW5hbCBBZHplIGxvZyBvYmplY3QgcHJvdG90eXBlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2cgZXh0ZW5kcyBMb2dGbGFncywgTG9nVmFsdWVzLCBMb2dNZXRob2RzLCBUZXJtaW5hdGluZ01ldGhvZHMsIEJ1bmRsZWQge307XG5cbi8qKlxuICogVGhlIHJlbmRlciB2YWx1ZSBmb3IgYSBMb2cuXG4gKi9cbnR5cGUgQXJndW1lbnRzID0gYW55W107XG5leHBvcnQgdHlwZSBMb2dSZW5kZXIgPSBbQ29uc29sZU1ldGhvZCwgQXJndW1lbnRzXTtcblxuLyoqXG4gKiBUaGUgZmluYWwgdmFsdWUgb2YgYSBsb2cgYWZ0ZXIgaXQgaGFzIGJlZW4gdGVybWluYXRlZC4gVGhpcyBpcyB1c2VmdWwgZm9yIFxuICogZ2xlYW5pbmcgdGhlIGZpbmFsIHJlbmRlciBpbmZvcm1hdGlvbiBhbmQgZ2V0dGluZyB0aGUgTG9nIGluc3RhbmNlIGZvciBcbiAqIHVuaXQgdGVzdGluZyBwdXJwb3Nlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZXJtaW5hdGVkTG9nIHtcbiAgbG9nOiBMb2c7XG4gIHJlbmRlcjogTG9nUmVuZGVyfG51bGw7XG59OyIsImV4cG9ydCB7IEFkemUsIExvZ0ZhY3RvcnkgfSBmcm9tICcuL0FkemUnO1xuZXhwb3J0IHtcbiAgTG9nLCBMb2dGdW5jdGlvbiwgQ3VzdG9tTG9nRnVuY3Rpb24sIEJ1bmRsZSxcbiAgVGVybWluYXRpbmdNZXRob2RzLCBUZXJtaW5hdGluZ01ldGhvZEtleXMsXG4gIExvZ1JlbmRlciwgVGVybWluYXRlZExvZyxcbn0gZnJvbSAnLi9Mb2cnO1xuZXhwb3J0IHtcbiAgU2hlZCwgTGlzdGVuZXJDYWxsYmFjaywgTGlzdGVuZXJzLFxuICBMaXN0ZW5lckxvY2F0aW9ucywgTGlzdGVuZXJEYXRhLFxufSBmcm9tICcuL1NoZWQnO1xuZXhwb3J0IHtcbiAgRGVmYXVsdHMsIExvZ0xldmVscywgTG9nTGV2ZWxEZWZpbml0aW9uLFxuICBGaWx0ZXJzLCBDb25maWd1cmF0aW9uLCBDb25zb2xlTWV0aG9kLFxufSBmcm9tICcuL0NvbmZpZ3VyYXRpb24nO1xuZXhwb3J0IHsgTGFiZWwgfSBmcm9tICcuL0xhYmVsJztcbmV4cG9ydCB7IFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tICcuL1V0aWxpdHknOyIsImltcG9ydCB7IGlzQ2hyb21lLCBpc0ZpcmVmb3gsIGlzU2FmYXJpIH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IERlZmF1bHRzIH0gZnJvbSBcIi4uL19jb250cmFjdHNcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzOiBEZWZhdWx0cyA9IHtcbiAgbG9nX2xldmVsOiA4LFxuICBsb2dfY2FjaGVfc2l6ZTogMzAwLFxuICB1c2VfZW1vamk6IHRydWUsXG4gIGJhc2Vfc3R5bGU6ICdmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwOyBib3JkZXItd2lkdGg6IDFweDsgYm9yZGVyLXN0eWxlOiBzb2xpZDsnLFxuICBjdXN0b21fbGV2ZWxzOiB7fSxcbiAgbG9nX2xldmVsczoge1xuICAgIHZlcmJvc2U6IHtcbiAgICAgIGxldmVsOiA4LFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAyNnB4OyBib3JkZXItY29sb3I6IDFweCBzb2xpZCAjZDlkY2UwOyBjb2xvcjogIzk5OTk5OTsgYm9yZGVyLWNvbG9yOiAjY2JjOWM5OycsXG4gICAgICB0ZXJtaW5hbDogWydiZ0JsYWNrJywgJ2l0YWxpYycsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnZGVidWcnLFxuICAgICAgZW1vamk6ICfwn5KkJ1xuICAgIH0sXG4gICAgZGVidWc6IHtcbiAgICAgIGxldmVsOiA3LFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAzOHB4OyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDlkY2UwOyBjb2xvcjogIzQ2NTQ2NDsgYm9yZGVyLWNvbG9yOiAjOTk5OTk5OycsXG4gICAgICB0ZXJtaW5hbDogWydiZ0JsYWNrJywnaXRhbGljJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdkZWJ1ZycsXG4gICAgICBlbW9qaTogJ/CfkJ4nXG4gICAgfSxcbiAgICBsb2c6IHtcbiAgICAgIGxldmVsOiA2LFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiA1MHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNkOWRjZTApOyBjb2xvcjogIzMzMzQzNTsgYm9yZGVyLWNvbG9yOiAjYmZjMWM1O2AsXG4gICAgICB0ZXJtaW5hbDogWydiZ0JsYWNrJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdsb2cnLFxuICAgICAgZW1vamk6ICfwn5OTJ1xuICAgIH0sXG4gICAgc3VjY2Vzczoge1xuICAgICAgbGV2ZWw6IDUsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDI2cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2NlZWRjOSk7IGNvbG9yOiAjNGU1OTRkOyBib3JkZXItY29sb3I6ICNiN2QxYjM7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnR3JlZW4nLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfwn46JJ1xuICAgIH0sXG4gICAgZmFpbDoge1xuICAgICAgbGV2ZWw6IDQsXG4gICAgICBzdHlsZTogYHBhZGRpbmctcmlnaHQ6ICR7IGlzQ2hyb21lID8gJzM0JyA6ICczMicgfXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNmZmQxZDEpOyBjb2xvcjogI2E0MDAwZjsgYm9yZGVyLWNvbG9yOiAjZTNiYmJiO2AsXG4gICAgICB0ZXJtaW5hbDogWydiZ1JlZCcsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgZW1vamk6ICfinYwnXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICBsZXZlbDogMyxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHsgaXNTYWZhcmkgPyAnNDknIDogJzQ0JyB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2IyZDdmZik7IGNvbG9yOiAjNDY1NDY0OyBib3JkZXItY29sb3I6ICM5NmI1ZDc7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmx1ZScsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/Cfk6wnXG4gICAgfSxcbiAgICB3YXJuOiB7XG4gICAgICBsZXZlbDogMixcbiAgICAgIHN0eWxlOiBgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZmMGE4KTsgY29sb3I6ICM3MTUxMDA7IGJvcmRlci1jb2xvcjogI2UzZDY5NjsgcGFkZGluZy1yaWdodDogJHsgaXNDaHJvbWUgPyAnMzQnIDogJzQ0JyB9cHg7IGAsXG4gICAgICB0ZXJtaW5hbDogWydiZ1llbGxvdycsICdncmF5J10sXG4gICAgICBtZXRob2Q6ICd3YXJuJyxcbiAgICAgIGVtb2ppOiAn8J+UlCdcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBsZXZlbDogMSxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHsgaXNDaHJvbWUgPyAnMjknIDogJzI3JyB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2ZmZDFkMSk7IGNvbG9yOiAjYTQwMDBmOyBib3JkZXItY29sb3I6ICNlM2JiYmI7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnUmVkJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdlcnJvcicsXG4gICAgICBlbW9qaTogJ/CflKUnXG4gICAgfSxcbiAgICBhdHRlbnRpb246IHtcbiAgICAgIGxldmVsOiAwLFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAxNXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNlMmJhZmYpOyBjb2xvcjogIzQ4M2M1MTsgYm9yZGVyLWNvbG9yOiAjYzE5ZmQ5OycsXG4gICAgICB0ZXJtaW5hbDogWyd3aGl0ZScsJ2JvbGQnLCdiZ01hZ2VudGEnXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfwn4yIJyxcbiAgICB9LFxuICB9LFxuICBmaWx0ZXJzOiB7XG4gICAgaGlkZUFsbDogZmFsc2UsXG4gICAgbmFtZXNwYWNlOiB7XG4gICAgICBoaWRlQWxsOiBmYWxzZSxcbiAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgaW5jbHVkZTogW10sXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgaGlkZUFsbDogZmFsc2UsXG4gICAgICBleGNsdWRlOiBbXSxcbiAgICAgIGluY2x1ZGU6IFtdLFxuICAgIH1cbiAgfSxcbn07XG5cbiIsImV4cG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9kZWZhdWx0cyc7IiwiY29uc3QgZGVmYXVsdHNEZWVwID0gcmVxdWlyZSgnbG9kYXNoLmRlZmF1bHRzZGVlcCcpO1xuXG5pbXBvcnQgeyBMb2csIENvbmZpZ3VyYXRpb24sIERlZmF1bHRzIH0gZnJvbSAnLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGxvZ01ldGhvZCwgY3VzdG9tTWV0aG9kLCBzZWFsIH0gZnJvbSAnLi90ZXJtaW5hdG9ycyc7XG5pbXBvcnQge1xuICBjb3VudCwgY291bnRSZXNldCwgZGlyLCBkaXJ4bWwsIHRhYmxlLCBhc3NlcnQsXG4gIHRlc3QsICBncm91cCwgZ3JvdXBDb2xsYXBzZWQsIGdyb3VwRW5kLCBsYWJlbCxcbiAgbmFtZXNwYWNlLCBucywgdHJhY2UsIHRpbWUsIHRpbWVOb3csIHRpbWVFbmQsXG59IGZyb20gJy4vbW9kaWZpZXJzJztcbmltcG9ydCB7IHByaW50LCBwcmludExvZyB9IGZyb20gJy4vcHJpbnRlcnMnO1xuaW1wb3J0IHsgY2FjaGUsIGZpcmVMaXN0ZW5lcnMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vX2RlZmF1bHRzJztcblxuLyoqXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIEFkemUgbG9ncy4gVGhpcyBmYWN0b3J5IG1ldGhvZCBjYW4gYmUgdXNlZCBkaXJlY3RseSBvciBjb25maWd1cmF0aW9uXG4gKiBjYW4gYmUgcHJvdmlkZWQgYW5kIHRoZSByZXN1bHQgY2FuIGJlIGFzc2lnbmVkIHRvIGEgbmV3IHZhcmlhYmxlLiBUaGlzIGFsbG93cyBmb3IgbXVsdGlwbGVcbiAqIGxvZ2dpbmcgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbmZpZ3VyYXRpb25zLlxuICogXG4gKiAtLS0gRGVmYXVsdCBsZXZlbHMgLS0tXG4gKiAwLiBhdHRlbnRpb25cbiAqIDEuIGVycm9yXG4gKiAyLiB3YXJuXG4gKiAzLiBpbmZvXG4gKiA0LiBmYWlsXG4gKiA1LiBzdWNjZXNzXG4gKiA2LiBsb2dcbiAqIDcuIGRlYnVnXG4gKiA4LiB2ZXJib3NlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZHplKHVzZXJfY2ZnOiBDb25maWd1cmF0aW9uID0ge30pOkxvZyB7XG4gIGNvbnN0IGNmZyA9IGRlZmF1bHRzRGVlcCh1c2VyX2NmZywgZGVmYXVsdHMpIGFzIERlZmF1bHRzO1xuICBcbiAgcmV0dXJuIHtcbiAgICBjZmcsXG4gICAgdHJhY2VhYmxlOiBmYWxzZSxcbiAgICBtb2RpZmllclF1ZXVlOiBbXSxcbiAgICBwcmludGVyOiBwcmludExvZyxcblxuICAgIGF0dGVudGlvbjogIGxvZ01ldGhvZChjZmcsICdhdHRlbnRpb24nKSxcbiAgICBlcnJvcjogICAgICBsb2dNZXRob2QoY2ZnLCAnZXJyb3InKSxcbiAgICB3YXJuOiAgICAgICBsb2dNZXRob2QoY2ZnLCAnd2FybicpLFxuICAgIGluZm86ICAgICAgIGxvZ01ldGhvZChjZmcsICdpbmZvJyksXG4gICAgZmFpbDogICAgICAgbG9nTWV0aG9kKGNmZywgJ2ZhaWwnKSxcbiAgICBzdWNjZXNzOiAgICBsb2dNZXRob2QoY2ZnLCAnc3VjY2VzcycpLFxuICAgIGxvZzogICAgICAgIGxvZ01ldGhvZChjZmcsICdsb2cnKSxcbiAgICBkZWJ1ZzogICAgICBsb2dNZXRob2QoY2ZnLCAnZGVidWcnKSxcbiAgICB2ZXJib3NlOiAgICBsb2dNZXRob2QoY2ZnLCAndmVyYm9zZScpLFxuICAgIGN1c3RvbTogICAgIGN1c3RvbU1ldGhvZChjZmcpLFxuXG4gICAgYWxsOiAoKSA9PiB7fSxcblxuICAgIHNlYWwsIGNhY2hlLCBwcmludCwgZmlyZUxpc3RlbmVycywgY291bnQsIGNvdW50UmVzZXQsXG4gICAgZGlyLCBkaXJ4bWwsIHRhYmxlLCBhc3NlcnQsIHRlc3QsIGdyb3VwLCBncm91cENvbGxhcHNlZCxcbiAgICBncm91cEVuZCwgbGFiZWwsIG5hbWVzcGFjZSwgbnMsIHRyYWNlLCB0aW1lLCB0aW1lTm93LCB0aW1lRW5kLFxuICB9O1xufSIsImltcG9ydCB7IEFkemUsIENvbmZpZ3VyYXRpb24sIEJ1bmRsZSwgTG9nLCBUZXJtaW5hdGluZ01ldGhvZHMsIFRlcm1pbmF0aW5nTWV0aG9kS2V5cyB9IGZyb20gJy4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBhbGwgfSBmcm9tICcuL2ZpbHRlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVuZGxlKGxvZzogTG9nKTpCdW5kbGUge1xuICBjb25zdCBidW5kbGUgPSBbXSBhcyBMb2dbXTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgYnVuZGxlZF9sb2c6IExvZyA9IHsgLi4ubG9nIH07XG4gICAgYnVuZGxlZF9sb2cuYWxsID0gY3VycnlCdW5kbGUoYnVuZGxlZF9sb2csIGJ1bmRsZSwgYWxsKTtcbiAgICBidW5kbGUucHVzaChidW5kbGVkX2xvZyk7XG4gICAgcmV0dXJuIGJ1bmRsZWRfbG9nO1xuICB9O1xufTtcblxuZnVuY3Rpb24gY3VycnlCdW5kbGUoY3R4dDogTG9nLCBidW5kbGU6IExvZ1tdLCBmbjogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTooKSA9PiB2b2lkIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBmbihjdHh0LCBidW5kbGUsIC4uLmFyZ3MpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgTG9nLCBMb2dMZXZlbERlZmluaXRpb24sIERlZmF1bHRzIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgc3RvcmVFeGlzdHMgfSBmcm9tICcuLi9zaGVkJztcblxuLyoqXG4gKiBDYWNoZXMgdGhpcyBsb2cgdG8gdGhlIFNoZWQgaWYgaXQgZXhpc3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGUodGhpczogTG9nLCBhcmdzOiBhbnlbXSk6dm9pZCB7XG4gIGlmIChzdG9yZUV4aXN0cyhlbnYuJHNoZWQpKSB7XG4gICAgZW52LiRzaGVkLmFkZFRvQ2FjaGUodGhpcywgYXJncyk7XG4gIH1cbn1cblxuLyoqXG4gKiBGaXJlcyBsaXN0ZW5lcnMgZm9yIHRoaXMgbG9nIGluc3RhbmNlIGlmIGEgU2hlZCBleGlzdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXJlTGlzdGVuZXJzKHRoaXM6IExvZywgYXJnczogYW55W10pOnZvaWQge1xuICBpZiAoc3RvcmVFeGlzdHMoZW52LiRzaGVkKSkge1xuICAgIGVudi4kc2hlZC5maXJlTGlzdGVuZXJzKHRoaXMsIGFyZ3MpO1xuICB9XG59IiwiZXhwb3J0IHsgY2FjaGUsIGZpcmVMaXN0ZW5lcnMgfSBmcm9tICcuL2V2ZW50cyc7IiwiaW1wb3J0IHtcbiAgTG9nLCBDb25maWd1cmF0aW9uLFxuICBUZXJtaW5hdGluZ01ldGhvZEtleXMsXG59IGZyb20gJy4uL19jb250cmFjdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsKGN0eHQ6IExvZywgYnVuZGxlOiBMb2dbXSA9IFtdKSB7XG4gIGJ1bmRsZS5mb3JFYWNoKGxvZyA9PiB7XG4gICAgY29uc3QgcmVuZGVyID0gY3R4dC5yZW5kZXI7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY29uc3QgWyBtZXRob2QsIGFyZ3MgXSA9IHJlbmRlcjtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICB9XG4gIH0pO1xufSIsImV4cG9ydCB7IGFsbCB9IGZyb20gJy4vZmlsdGVycyc7IiwiaW1wb3J0IHsgU2hlZCB9IGZyb20gJy4vX2NvbnRyYWN0cyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgJHNoZWQ/OiBTaGVkO1xuICAgIEFEWkVfRU5WPzogc3RyaW5nO1xuICB9XG4gIG5hbWVzcGFjZSBOb2RlSlMge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsIHtcbiAgICAgICRzaGVkPzogU2hlZDtcbiAgICAgIEFEWkVfRU5WPzogc3RyaW5nO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW52OiBXaW5kb3d8Tm9kZUpTLkdsb2JhbCA9IGdsb2JhbCA/IGdsb2JhbCA6IHdpbmRvdztcbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGNvbnN0IGVudklzV2luZG93ID0gKGVudjogV2luZG93fE5vZGVKUy5HbG9iYWwpOiBlbnYgaXMgV2luZG93ID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZDtcbn07XG5cbmxldCBpc0Nocm9tZVZhciA9IGZhbHNlO1xubGV0IGlzRmlyZWZveFZhciA9IGZhbHNlO1xubGV0IGlzU2FmYXJpVmFyID0gZmFsc2U7XG5cbmlmIChlbnZJc1dpbmRvdyhlbnYpKSB7XG4gIGlzQ2hyb21lVmFyID0gZW52Py5uYXZpZ2F0b3I/LnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpID4gLTE7XG4gIGlzRmlyZWZveFZhciA9IGVudj8ubmF2aWdhdG9yPy51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgPiAtMTtcbiAgaXNTYWZhcmlWYXIgPSBlbnY/Lm5hdmlnYXRvcj8udXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgPiAtMSAmJiAhaXNDaHJvbWVWYXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc0Nocm9tZSA9IGlzQ2hyb21lVmFyO1xuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IGlzRmlyZWZveFZhcjtcbmV4cG9ydCBjb25zdCBpc1NhZmFyaSA9IGlzU2FmYXJpVmFyOyIsImltcG9ydCB7IFNoZWQsIExvZywgTG9nRnVuY3Rpb24gfSBmcm9tICcuL19jb250cmFjdHMnO1xuaW1wb3J0IHsgYWR6ZSB9IGZyb20gJy4vYWR6ZSc7XG5pbXBvcnQgeyBidW5kbGUgfSBmcm9tICcuL2J1bmRsZSc7XG5pbXBvcnQgeyBjcmVhdGVTaGVkIH0gZnJvbSAnLi9zaGVkJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xuXG5leHBvcnQgeyBhZHplLCBkZWZhdWx0cywgTG9nLCBMb2dGdW5jdGlvbiwgYnVuZGxlIH07IiwiZXhwb3J0IHsgZ2V0TGFiZWwsIGFkZExhYmVsLCBoYXNMYWJlbCB9IGZyb20gJy4vbGFiZWwnOyIsImltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgc3RvcmVFeGlzdHMgfSBmcm9tICcuLi9zaGVkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVsKG5hbWU6IHN0cmluZyk6TGFiZWx8dW5kZWZpbmVkIHtcbiAgaWYgKHN0b3JlRXhpc3RzKGVudi4kc2hlZCkpIHtcbiAgICByZXR1cm4gZW52LiRzaGVkLmxhYmVscy5nZXQobmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExhYmVsKGxhYmVsOiBMYWJlbCk6TGFiZWwge1xuICBpZiAoc3RvcmVFeGlzdHMoZW52LiRzaGVkKSAmJiAhaGFzTGFiZWwobGFiZWwubmFtZSkpIHtcbiAgICBlbnYuJHNoZWQubGFiZWxzLnNldChsYWJlbC5uYW1lLCBsYWJlbCk7XG4gIH1cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzTGFiZWwobmFtZTogc3RyaW5nKTpib29sZWFufHVuZGVmaW5lZCB7XG4gIHJldHVybiBlbnYuJHNoZWQ/LmxhYmVscy5oYXMobmFtZSk7XG59IiwiZXhwb3J0IHsgdGltZSwgdGltZU5vdywgdGltZUVuZCB9IGZyb20gJy4vdGltaW5nJzsiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi8uLi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi4vbW9kaWZpZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZSh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwudGltZVN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVOb3codGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLnRpbWVOb3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZUVuZCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwgJiYgdGhpcy5sYWJlbFZhbC50aW1lU3RhcnQpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwudGltZUVsbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhYmVsVmFsLnRpbWVTdGFydDtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50KHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC5jb3VudCA9IHRoaXMubGFiZWxWYWwuY291bnQgPz8gMDtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgKz0gMTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRSZXNldCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgPSAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudENsZWFyKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC5jb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcbmltcG9ydCB7IHByaW50RGlyLCBwcmludERpcnhtbCwgcHJpbnRUYWJsZSB9IGZyb20gJy4uL3ByaW50ZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcih0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnREaXI7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyeG1sKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludERpcnhtbDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWJsZSh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRUYWJsZTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuaW1wb3J0IHsgcHJpbnRHcm91cCwgcHJpbnRHcm91cENvbGxhcHNlZCwgcHJpbnRHcm91cEVuZCB9IGZyb20gJy4uL3ByaW50ZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQ29sbGFwc2VkKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwQ29sbGFwc2VkO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwRW5kKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludEdyb3VwRW5kO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGdldExhYmVsLCBhZGRMYWJlbCB9IGZyb20gJy4uL2xhYmVsJztcbmltcG9ydCB7IHByZXBlbmRNb2RpZmllciwgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcbmltcG9ydCB7IHByaW50VHJhY2UgfSBmcm9tICcuLi9wcmludGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbCh0aGlzOiBMb2csIG5hbWU6IHN0cmluZyk6TG9nIHtcbiAgcmV0dXJuIHByZXBlbmRNb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5sYWJlbFZhbCA9IGFkZExhYmVsKGdldExhYmVsKG5hbWUpID8/IHsgbmFtZSB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2UodGhpczogTG9nLCBuczogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMubmFtZXNwYWNlVmFsID0gbnM7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnModGhpczogTG9nLCBuczogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gdGhpcy5uYW1lc3BhY2UobnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2UodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50VHJhY2U7XG4gIH0pXG59IiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IHRpbWUgYXMgdGltZUJyb3dzZXIsIHRpbWVOb3cgYXMgdGltZU5vd0Jyb3dzZXIsIHRpbWVFbmQgYXMgdGltZUVuZEJyb3dzZXIgfSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHsgdGltZSBhcyB0aW1lTm9kZSwgdGltZU5vdyBhcyB0aW1lTm93Tm9kZSwgdGltZUVuZCBhcyB0aW1lRW5kTm9kZSB9IGZyb20gJy4vbm9kZSc7XG5cbmNvbnN0IHRpbWUgPSBpc0Jyb3dzZXIgPyB0aW1lQnJvd3NlciA6IHRpbWVOb2RlO1xuY29uc3QgdGltZU5vdyA9IGlzQnJvd3NlciA/IHRpbWVOb3dCcm93c2VyIDogdGltZU5vd05vZGU7XG5jb25zdCB0aW1lRW5kID0gaXNCcm93c2VyID8gdGltZUVuZEJyb3dzZXIgOiB0aW1lRW5kTm9kZTtcblxuZXhwb3J0IHsgdGltZSwgdGltZU5vdywgdGltZUVuZCB9XG5leHBvcnQgeyBjb3VudCwgY291bnRSZXNldCB9IGZyb20gJy4vY291bnRpbmcnO1xuZXhwb3J0IHsgZGlyLCBkaXJ4bWwsIHRhYmxlIH0gZnJvbSAnLi9mb3JtYXR0aW5nJztcbmV4cG9ydCB7IGdyb3VwLCBncm91cENvbGxhcHNlZCwgZ3JvdXBFbmQgfSBmcm9tICcuL2dyb3VwaW5nJztcbmV4cG9ydCB7IGxhYmVsLCBuYW1lc3BhY2UsIG5zLCB0cmFjZSB9IGZyb20gJy4vaWRlbnRpZnlpbmcnO1xuZXhwb3J0IHsgbW9kaWZpZXIsIHByZXBlbmRNb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuZXhwb3J0IHsgYXNzZXJ0LCB0ZXN0IH0gZnJvbSAnLi90ZXN0aW5nJztcblxuIiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RpZmllcihjb250ZXh0OiBMb2csIGZ1bmM6IEZ1bmN0aW9uKTpMb2cge1xuICBjb250ZXh0Lm1vZGlmaWVyUXVldWUgPSBjb250ZXh0Lm1vZGlmaWVyUXVldWUuY29uY2F0KFtmdW5jXSk7XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZE1vZGlmaWVyKGNvbnRleHQ6IExvZywgZnVuYzogRnVuY3Rpb24pOkxvZyB7XG4gIGNvbnRleHQubW9kaWZpZXJRdWV1ZSA9IFtmdW5jXS5jb25jYXQoY29udGV4dC5tb2RpZmllclF1ZXVlKTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59IiwiZXhwb3J0IHsgdGltZSwgdGltZU5vdywgdGltZUVuZCwgdGltZUxvZyB9IGZyb20gJy4vdGltaW5nJzsiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi8uLi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi4vbW9kaWZpZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZSh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIFxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVOb3codGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lRW5kKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVMb2codGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuXG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuLy8gUHJpbnRzIGxvZyB3YXJuaW5nIHRoYXQgdGhlIGFzc2VydGlvbiBmYWlsZWQgaWYgYXNzZXJ0aW9uIGlzIGZhbHNlLlxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydCh0aGlzOiBMb2csIGFzc2VydGlvbjogYm9vbGVhbik6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmFzc2VydGlvbiA9IGFzc2VydGlvbjtcbiAgfSk7XG59XG5cbi8vIE5vbi1zdGFuZGFyZC4gQWxsb3dzIGxvZyB0byBwcmludCBpZiBleHByZXNzaW9uIGlzIHRydWUuXG5leHBvcnQgZnVuY3Rpb24gdGVzdCh0aGlzOiBMb2csIGV4cHJlc3Npb246IGJvb2xlYW4pOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfSk7XG59IiwiZXhwb3J0IHsgcHJpbnRMb2csIHByaW50R3JvdXAsIHByaW50R3JvdXBDb2xsYXBzZWQsIGZMZWFkZXIsIGZNZXRhIH0gZnJvbSAnLi9wcmludGVycyc7IiwiaW1wb3J0IHsgTG9nLCBMb2dMZXZlbERlZmluaXRpb24sIExvZ1JlbmRlciwgRGVmYXVsdHMgfSBmcm9tICcuLi8uLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGFwcGx5UmVuZGVyLCB0b0NvbnNvbGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcbmltcG9ydCB7IGluaXRpYWxDYXBzIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2codGhpczogTG9nLCBjZmc6IERlZmF1bHRzLCBsZXZlbE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IGRlZiA9IGNmZy5sb2dfbGV2ZWxzW2xldmVsTmFtZV07XG4gIGNvbnN0IFsgbWV0aG9kLCBsZWFkZXIsIHN0eWxlLCBtZXRhIF0gPSBbIGRlZi5tZXRob2QsIGZMZWFkZXIoZGVmLCBhcmdzKSwgKGNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSwgZk1ldGEodGhpcykgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBtZXRhID09PSAnJyA/IFsgbGVhZGVyLCBzdHlsZSwgLi4uYXJncyBdIDogWyBsZWFkZXIsIHN0eWxlLCBtZXRhLCAuLi5hcmdzIF07XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIodGhpcywgbWV0aG9kLCByZW5kZXJfYXJncyApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXAodGhpczogTG9nLCBjZmc6IERlZmF1bHRzLCBsZXZlbE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IGRlZiA9IGNmZy5sb2dfbGV2ZWxzW2xldmVsTmFtZV07XG4gIGNvbnN0IHBhcnRpYWxfYXJncyA9IFsgZkxlYWRlcihkZWYsIGFyZ3MpLCAoY2ZnLmJhc2Vfc3R5bGUgKyBkZWYuc3R5bGUpIF07XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBbIC4uLnBhcnRpYWxfYXJncywgYXJnc1swXSBdIDogcGFydGlhbF9hcmdzO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKHRoaXMsICdncm91cCcsIHJlbmRlcl9hcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwQ29sbGFwc2VkKHRoaXM6IExvZywgY2ZnOiBEZWZhdWx0cywgbGV2ZWxOYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCBkZWYgPSBjZmcubG9nX2xldmVsc1tsZXZlbE5hbWVdO1xuICBjb25zdCBwYXJ0aWFsX2FyZ3MgPSBbIGZMZWFkZXIoZGVmLCBhcmdzKSwgKGNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gWyAuLi5wYXJ0aWFsX2FyZ3MsIGFyZ3NbMF0gXSA6IHBhcnRpYWxfYXJncztcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAnZ3JvdXBDb2xsYXBzZWQnLCByZW5kZXJfYXJncykpO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIEZPUk1BVFRFUlMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZMZWFkZXIoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGFyZ3M6IGFueVtdKTpzdHJpbmcge1xuICByZXR1cm4gYCAlYyR7ZkVtb2ppKGRlZil9ICR7Zk5hbWUoZGVmLmxldmVsTmFtZSl9KCR7YXJncy5sZW5ndGh9KWA7XG59XG5cbmZ1bmN0aW9uIGZFbW9qaShkZWY6IExvZ0xldmVsRGVmaW5pdGlvbik6c3RyaW5nIHtcbiAgcmV0dXJuIGVudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPT09IHRydWUgPyBgICR7ZGVmLmVtb2ppfWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWUobmFtZTogc3RyaW5nfHVuZGVmaW5lZCk6c3RyaW5nIHtcbiAgcmV0dXJuIGluaXRpYWxDYXBzKG5hbWUgPz8gJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZk1ldGEoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gYCR7Zk5hbWVzcGFjZShjdHh0KX0ke2ZMYWJlbChjdHh0KX0ke2ZUaW1lKGN0eHQpfSR7ZkNvdW50KGN0eHQpfWA7XG59XG5cbmZ1bmN0aW9uIGZUaW1lKGN0eHQ6IExvZyk6c3RyaW5nIHtcbiAgY29uc3QgbGFiZWxfdHh0ID0gYCR7Y3R4dC5sYWJlbFZhbD8udGltZU5vdyA/PyBjdHh0LmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJycgPyBgICgke2Vudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmQ291bnQoY3R4dDogTG9nKTpzdHJpbmcge1xuICBjb25zdCBjb3VudCA9IGN0eHQubGFiZWxWYWw/LmNvdW50O1xuICByZXR1cm4gY291bnQgIT09IHVuZGVmaW5lZCA/IGAoQ291bnQ6ICR7Y291bnR9KWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWVzcGFjZShjdHh0OiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBjdHh0Lm5hbWVzcGFjZVZhbCA/IGAjJHtjdHh0Lm5hbWVzcGFjZVZhbH0gYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmTGFiZWwoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gY3R4dC5sYWJlbFZhbCA/IGBbJHtjdHh0LmxhYmVsVmFsLm5hbWV9XSBgIDogJyc7XG59XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHtcbiAgcHJpbnRMb2cgYXMgcHJpbnRMb2dCcm93c2VyLFxuICBwcmludEdyb3VwIGFzIHByaW50R3JvdXBCcm93c2VyLFxuICBwcmludEdyb3VwQ29sbGFwc2VkIGFzIHByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyLFxufSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHtcbiAgcHJpbnRMb2cgYXMgcHJpbnRMb2dOb2RlLFxuICBwcmludEdyb3VwIGFzIHByaW50R3JvdXBOb2RlLFxuICBwcmludEdyb3VwQ29sbGFwc2VkIGFzIHByaW50R3JvdXBDb2xsYXBzZWROb2RlLFxufSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtcbiAgcHJpbnQsXG4gIHByaW50R3JvdXBFbmQsXG4gIHByaW50VGFibGUsXG4gIHByaW50RGlyLFxuICBwcmludERpcnhtbCxcbiAgcHJpbnRUcmFjZSxcbn0gZnJvbSAnLi9zaGFyZWQnO1xuXG5jb25zdCBwcmludExvZyA9IGlzQnJvd3NlciA/IHByaW50TG9nQnJvd3NlciA6IHByaW50TG9nTm9kZTtcbmNvbnN0IHByaW50R3JvdXAgPSBpc0Jyb3dzZXIgPyBwcmludEdyb3VwQnJvd3NlciA6IHByaW50R3JvdXBOb2RlO1xuY29uc3QgcHJpbnRHcm91cENvbGxhcHNlZCA9IGlzQnJvd3NlciA/IHByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyIDogcHJpbnRHcm91cENvbGxhcHNlZE5vZGU7XG5cbmV4cG9ydCB7XG4gIHByaW50LFxuICBwcmludExvZyxcbiAgcHJpbnRHcm91cCxcbiAgcHJpbnRHcm91cENvbGxhcHNlZCxcbiAgcHJpbnRHcm91cEVuZCxcbiAgcHJpbnRUYWJsZSxcbiAgcHJpbnREaXIsXG4gIHByaW50RGlyeG1sLFxuICBwcmludFRyYWNlLFxufTsiLCJleHBvcnQgeyBwcmludExvZywgcHJpbnRHcm91cCwgcHJpbnRHcm91cENvbGxhcHNlZCwgZkxlYWRlciwgZk1ldGEgfSBmcm9tICcuL3ByaW50ZXJzJzsiLCJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHsgTG9nLCBMb2dMZXZlbERlZmluaXRpb24sIExvZ1JlbmRlciwgRGVmYXVsdHMgfSBmcm9tICcuLi8uLi9fY29udHJhY3RzJztcbmltcG9ydCB7IHRvQ29uc29sZSwgYXBwbHlSZW5kZXIgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcbmltcG9ydCB7IGluaXRpYWxDYXBzIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2codGhpczogTG9nLCBjZmc6IERlZmF1bHRzLCBsZXZlbE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IGRlZiA9IGNmZy5sb2dfbGV2ZWxzW2xldmVsTmFtZV07XG4gIGNvbnN0IFsgbWV0aG9kLCBsZWFkZXIsIHN0eWxlLCBtZXRhIF0gPSBbIGRlZi5tZXRob2QsIGZMZWFkZXIoZGVmLCBhcmdzKSwgKGNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSwgZk1ldGEodGhpcykgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBtZXRhID09PSAnJyA/IFsgbGVhZGVyLCBzdHlsZSwgLi4uYXJncyBdIDogWyBsZWFkZXIsIHN0eWxlLCBtZXRhLCAuLi5hcmdzIF07XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIodGhpcywgbWV0aG9kLCByZW5kZXJfYXJncyApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXAodGhpczogTG9nLCBjZmc6IERlZmF1bHRzLCBsZXZlbE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IGRlZiA9IGNmZy5sb2dfbGV2ZWxzW2xldmVsTmFtZV07XG4gIGNvbnN0IHBhcnRpYWxfYXJncyA9IFsgZkxlYWRlcihkZWYsIGFyZ3MpLCAoY2ZnLmJhc2Vfc3R5bGUgKyBkZWYuc3R5bGUpIF07XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBbIC4uLnBhcnRpYWxfYXJncywgYXJnc1swXSBdIDogcGFydGlhbF9hcmdzO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKHRoaXMsICdncm91cCcsIHJlbmRlcl9hcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwQ29sbGFwc2VkKHRoaXM6IExvZywgY2ZnOiBEZWZhdWx0cywgbGV2ZWxOYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCBkZWYgPSBjZmcubG9nX2xldmVsc1tsZXZlbE5hbWVdO1xuICBjb25zdCBwYXJ0aWFsX2FyZ3MgPSBbIGZMZWFkZXIoZGVmLCBhcmdzKSwgKGNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gWyAuLi5wYXJ0aWFsX2FyZ3MsIGFyZ3NbMF0gXSA6IHBhcnRpYWxfYXJncztcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAnZ3JvdXBDb2xsYXBzZWQnLCByZW5kZXJfYXJncykpO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIEZPUk1BVFRFUlMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZMZWFkZXIoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGFyZ3M6IGFueVtdKTpzdHJpbmcge1xuICByZXR1cm4gYCAlYyR7ZkVtb2ppKGRlZil9ICR7Zk5hbWUoZGVmLmxldmVsTmFtZSl9KCR7YXJncy5sZW5ndGh9KWA7XG59XG5cbmZ1bmN0aW9uIGZFbW9qaShkZWY6IExvZ0xldmVsRGVmaW5pdGlvbik6c3RyaW5nIHtcbiAgcmV0dXJuIGVudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPT09IHRydWUgPyBgICR7ZGVmLmVtb2ppfWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWUobmFtZTogc3RyaW5nfHVuZGVmaW5lZCk6c3RyaW5nIHtcbiAgcmV0dXJuIGluaXRpYWxDYXBzKG5hbWUgPz8gJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZk1ldGEoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gYCR7Zk5hbWVzcGFjZShjdHh0KX0ke2ZMYWJlbChjdHh0KX0ke2ZUaW1lKGN0eHQpfSR7ZkNvdW50KGN0eHQpfWA7XG59XG5cbmZ1bmN0aW9uIGZUaW1lKGN0eHQ6IExvZyk6c3RyaW5nIHtcbiAgY29uc3QgbGFiZWxfdHh0ID0gYCR7Y3R4dC5sYWJlbFZhbD8udGltZU5vdyA/PyBjdHh0LmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJycgPyBgICgke2Vudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmQ291bnQoY3R4dDogTG9nKTpzdHJpbmcge1xuICBjb25zdCBjb3VudCA9IGN0eHQubGFiZWxWYWw/LmNvdW50O1xuICByZXR1cm4gY291bnQgIT09IHVuZGVmaW5lZCA/IGAoQ291bnQ6ICR7Y291bnR9KWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWVzcGFjZShjdHh0OiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBjdHh0Lm5hbWVzcGFjZVZhbCA/IGAjJHtjdHh0Lm5hbWVzcGFjZVZhbH0gYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmTGFiZWwoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gY3R4dC5sYWJlbFZhbCA/IGBbJHtjdHh0LmxhYmVsVmFsLm5hbWV9XSBgIDogJyc7XG59IiwiaW1wb3J0IHsgTG9nLCBMb2dSZW5kZXIsIERlZmF1bHRzLCBDb25zb2xlTWV0aG9kIH0gZnJvbSBcIi4uL19jb250cmFjdHNcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uL2dsb2JhbCc7XG5cbi8vIC0tLS0tLS0gUFJJTlQgRU5UUlkgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50KHRoaXM6IExvZywgY2ZnOiBEZWZhdWx0cywgbGV2ZWxOYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdGhpcy5wcmludGVyKGNmZywgbGV2ZWxOYW1lLCBhcmdzKTtcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBNRVRIT0RTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwRW5kKHRoaXM6IExvZywgY2ZnOiBEZWZhdWx0cywgXzogc3RyaW5nLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAnZ3JvdXBFbmQnLCBbXSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRUYWJsZSh0aGlzOiBMb2csIGNmZzogRGVmYXVsdHMsIF86IHN0cmluZywgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIodGhpcywgJ3RhYmxlJywgYXJncyksIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGlyKHRoaXM6IExvZywgY2ZnOiBEZWZhdWx0cywgXzogc3RyaW5nLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAnZGlyJywgYXJncyksIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGlyeG1sKHRoaXM6IExvZywgY2ZnOiBEZWZhdWx0cywgXzogc3RyaW5nLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcih0aGlzLCAnZGlyeG1sJywgYXJncyksIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VHJhY2UodGhpczogTG9nLCBjZmc6IERlZmF1bHRzLCBfOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKHRoaXMsICd0cmFjZScsIGFyZ3MpKTtcbn1cblxuLy8gLS0tLS0tIFByaW50IHRvIHRoZSBjb25zb2xlIC0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVuZGVyKGN0eHQ6IExvZywgbWV0aG9kOiBDb25zb2xlTWV0aG9kLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY3R4dC5yZW5kZXIgPSBbbWV0aG9kLCBhcmdzXTtcbiAgcmV0dXJuIGN0eHQucmVuZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Db25zb2xlKHJlbmRlcjogTG9nUmVuZGVyLCBzcHJlYWQ6IGJvb2xlYW4gPSB0cnVlKTpMb2dSZW5kZXIge1xuICBjb25zdCBbbWV0aG9kLCBhcmdzXSA9IHJlbmRlcjtcbiAgaWYgKGVudi5BRFpFX0VOViAhPT0gJ2RldicpIHtcbiAgICBpZiAoc3ByZWFkKSB7XG4gICAgICBjb25zb2xlW21ldGhvZF0oLi4uYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXShhcmdzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlbmRlcjtcbn0iLCJpbXBvcnQgZGVmYXVsdHNEZWVwIGZyb20gJ2xvZGFzaC5kZWZhdWx0c2RlZXAnO1xuaW1wb3J0IHtcbiAgU2hlZCwgTG9nLFxuICBDb25maWd1cmF0aW9uLCBEZWZhdWx0cyxcbiAgTG9nTGV2ZWxEZWZpbml0aW9uLCBMaXN0ZW5lckxvY2F0aW9ucyxcbiAgTGlzdGVuZXJzLCBMaXN0ZW5lckNhbGxiYWNrLCBBZHplXG59IGZyb20gJy4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vX2RlZmF1bHRzJztcblxuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi9nbG9iYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVFeGlzdHMoc3RvcmU6IFNoZWR8dW5kZWZpbmVkKTpzdG9yZSBpcyBTaGVkIHtcbiAgcmV0dXJuIHN0b3JlICE9PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGVkKGNvbmZpZzogQ29uZmlndXJhdGlvbik6dm9pZCB7XG4gIC8vIGNvbnN0IGNmZzogRGVmYXVsdHMgPSBkZWZhdWx0c0RlZXAoY29uZmlnLCBkZWZhdWx0cyk7XG4gIC8vIGVudi4kc2hlZCA9IHtcbiAgLy8gICBjZmcsXG4gIC8vICAgY2FjaGU6IFtdLFxuICAvLyAgIGxhYmVsczogbmV3IE1hcCgpLFxuICAvLyAgIGlkX2NvdW50ZXI6IC0xLFxuICAvLyAgIGxpc3RlbmVyczogaW5pdExpc3RlbmVyTG9jYXRpb25zKGNmZyksXG5cbiAgLy8gICBhc3NpZ25JZCxcbiAgLy8gICBhZGRUb0NhY2hlLFxuICAvLyAgIGFkZExpc3RlbmVyLFxuICAvLyAgIHJlbW92ZUxpc3RlbmVyLFxuICAvLyAgIGZpcmVMaXN0ZW5lcnMsXG4gIC8vIH07XG59XG5cbi8vIGZ1bmN0aW9uIGluaXRMaXN0ZW5lckxvY2F0aW9ucyhjZmc6IERlZmF1bHRzKTpMaXN0ZW5lcnMge1xuLy8gICBjb25zdCBsaXN0ZW5lcnM6IExpc3RlbmVycyA9IG5ldyBNYXAoKTtcbi8vICAgT2JqZWN0LnZhbHVlcyhjZmcubG9nX2xldmVscykuZm9yRWFjaCgoZGVmKSA9PiB7XG4vLyAgICAgbGlzdGVuZXJzLnNldChkZWYubGV2ZWwsIG5ldyBNYXAoKSk7XG4vLyAgIH0pO1xuLy8gICByZXR1cm4gbGlzdGVuZXJzO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBhZGRUb0NhY2hlKHRoaXM6IFNoZWQsIGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgYXJnczogYW55W10pOnZvaWQge1xuLy8gICBpZiAodGhpcy5jYWNoZS5sZW5ndGggPCB0aGlzLmNmZy5sb2dfY2FjaGVfc2l6ZSkge1xuLy8gICAgIHRoaXMuY2FjaGUgPSB0aGlzLmNhY2hlLmNvbmNhdChbW2xvZywgZGVmLCBhcmdzXV0pO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8qKlxuLy8gICogVGFrZXMgYW4gaW5zdGFuY2Ugb2YgYSBsb2cgYW5kIHJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBvclxuLy8gICogbm90IGl0IHNob3VsZCBiZSBoaWRkZW4gYWNjb3JkaW5nIHRvIHRoZSBjb25maWd1cmVkIGdsb2JhbCBmaWx0ZXIgcnVsZXMuIFxuLy8gICogQHBhcmFtIGxvZyBJbnN0YW5jZSBvZiBhIGxvZy5cbi8vICAqL1xuLy8gcHVibGljIGdsb2JhbEZpbHRlcihsb2c6IExvZ0Jyb3dzZXJ8TG9nTm9kZSk6Ym9vbGVhbiB7XG4vLyAgIGlmICh0aGlzLmFsbF9oaWRkZW4gJiYgbG9nLm5hbWVzcGFjZSA9PT0gbnVsbCAmJiBsb2cuTGFiZWwgPT09IG51bGwpIHtcbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgfVxuLy8gICByZXR1cm4gdGhpcy5nbG9iYWxGaWx0ZXJOYW1lc3BhY2UobG9nKSB8fCB0aGlzLmdsb2JhbEZpbHRlckxhYmVsKGxvZyk7XG4vLyB9XG5cbi8vIC8qKlxuLy8gICogVGFrZXMgYW4gaW5zdGFuY2Ugb2YgYSBsb2cgYW5kIHJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBvclxuLy8gICogbm90IGl0IHNob3VsZCBiZSBoaWRkZW4gYWNjb3JkaW5nIHRvIHRoZSBjb25maWd1cmVkIGdsb2JhbCAqKmxhYmVsKiogZmlsdGVyIHJ1bGVzLiBcbi8vICAqIEBwYXJhbSBsb2cgSW5zdGFuY2Ugb2YgYSBsb2cuXG4vLyAgKi9cbi8vIHByaXZhdGUgZ2xvYmFsRmlsdGVyTmFtZXNwYWNlKGxvZzogTG9nQnJvd3NlcnxMb2dOb2RlKTpib29sZWFuIHtcbi8vICAgaWYgKGxvZy5uYW1lc3BhY2UpIHtcbi8vICAgICBpZiAodGhpcy5pbmNsdWRlZF9uYW1lc3BhY2VzLmluY2x1ZGVzKGxvZy5uYW1lc3BhY2UpKSB7XG4vLyAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfVxuLy8gICAgIGlmICh0aGlzLmV4Y2x1ZGVkX25hbWVzcGFjZXMuaW5jbHVkZXMobG9nLm5hbWVzcGFjZSkgfHwgdGhpcy5uYW1lc3BhY2VzX2hpZGRlbiA9PT0gdHJ1ZSB8fCB0aGlzLmFsbF9oaWRkZW4gPT09IHRydWUpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbi8vIC8qKlxuLy8gICogVGFrZXMgYW4gaW5zdGFuY2Ugb2YgYSBsb2cgYW5kIHJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBvclxuLy8gICogbm90IGl0IHNob3VsZCBiZSBoaWRkZW4gYWNjb3JkaW5nIHRvIHRoZSBjb25maWd1cmVkIGdsb2JhbCAqKm5hbWVzcGFjZSoqIGZpbHRlciBydWxlcy4gXG4vLyAgKiBAcGFyYW0gbG9nIEluc3RhbmNlIG9mIGEgbG9nLlxuLy8gICovXG4vLyBwcml2YXRlIGdsb2JhbEZpbHRlckxhYmVsKGxvZzogTG9nQnJvd3NlcnxMb2dOb2RlKTpib29sZWFuIHtcbi8vICAgaWYgKGxvZy5MYWJlbCkge1xuLy8gICAgIGlmICh0aGlzLmluY2x1ZGVkX2xhYmVscy5pbmNsdWRlcyhsb2cuTGFiZWwubmFtZSkpIHtcbi8vICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHRoaXMuZXhjbHVkZWRfbGFiZWxzLmluY2x1ZGVzKGxvZy5MYWJlbC5uYW1lKSB8fCB0aGlzLmxhYmVsc19oaWRkZW4gPT09IHRydWUgfHwgdGhpcy5hbGxfaGlkZGVuID09PSB0cnVlKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgcmV0dXJuIGZhbHNlO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0aGlzOiBTaGVkLCBsZXZlbHM6IG51bWJlcltdLCBjYjogTGlzdGVuZXJDYWxsYmFjayk6TGlzdGVuZXJMb2NhdGlvbnMge1xuLy8gICByZXR1cm4gbGV2ZWxzLm1hcCgobHZsOiBudW1iZXIpID0+IHtcbi8vICAgICBjb25zdCBsZXZlbF9tYXAgPSB0aGlzLmxpc3RlbmVycy5nZXQobHZsKTtcbi8vICAgICBjb25zdCBpZCA9IHRoaXMuYXNzaWduSWQoKTtcbi8vICAgICBsZXZlbF9tYXA/LnNldChpZCwgY2IpO1xuLy8gICAgIHRoaXMubGlzdGVuZXJzLnNldChsdmwsIGxldmVsX21hcCA/PyBuZXcgTWFwKCkpO1xuLy8gICAgIHJldHVybiBbbHZsLCBpZF07XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0aGlzOiBTaGVkLCBsb2NhdGlvbnM6IExpc3RlbmVyTG9jYXRpb25zKTp2b2lkIHtcbi8vICAgbG9jYXRpb25zLmZvckVhY2goKFtsdmxfaWQsIGlkXSkgPT4ge1xuLy8gICAgIGNvbnN0IGxldmVsID0gdGhpcy5saXN0ZW5lcnMuZ2V0KGx2bF9pZCk7XG4vLyAgICAgbGV2ZWw/LmRlbGV0ZShpZCk7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBmaXJlTGlzdGVuZXJzKHRoaXM6IFNoZWQsIGN0eHQ6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGFyZ3M6IGFueVtdKTp2b2lkIHtcbi8vICAgdGhpcy5saXN0ZW5lcnMuZ2V0KGRlZi5sZXZlbCk/LmZvckVhY2gobGlzdGVuZXIgPT4ge1xuLy8gICAgIGxpc3RlbmVyKHsgLi4uY3R4dCwgLi4uZGVmLCBhcmdzIH0pO1xuLy8gICB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gYXNzaWduSWQodGhpczogU2hlZCk6bnVtYmVyIHtcbi8vICAgdGhpcy5pZF9jb3VudGVyID0gdGhpcy5pZF9jb3VudGVyICsgMTsgLy8gV3JpdHRlbiBmb3IgY2xhcml0eVxuLy8gICByZXR1cm4gdGhpcy5pZF9jb3VudGVyO1xuLy8gfSIsImV4cG9ydCB7IGxvZ01ldGhvZCwgY3VzdG9tTWV0aG9kLCBzZWFsIH0gZnJvbSAnLi90ZXJtaW5hdG9ycyc7IiwiaW1wb3J0IHtcbiAgTG9nLCBMb2dGdW5jdGlvbixcbiAgQ3VzdG9tTG9nRnVuY3Rpb24sXG4gIERlZmF1bHRzLCBMb2dMZXZlbERlZmluaXRpb24sIFRlcm1pbmF0ZWRMb2csXG59IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi9fZGVmYXVsdHMnO1xuaW1wb3J0IHsgZW52LCBpc0Jyb3dzZXIgfSBmcm9tICcuLi9nbG9iYWwnO1xuXG4vKipcbiAqIFRha2UgYSBMb2cgYW5kIGJyYW5jaCBmcm9tIGl0IGJ5IHByb3ZpZGluZyBuZXcgY29waWVkIGxvZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWFsKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIHsgLi4udGhpcyB9O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHRlcm1pbmF0aW5nIGxvZyBtZXRob2QgdGhlIHNwZWNpZmllZCBsb2cgbGV2ZWwgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ01ldGhvZChjZmc6IERlZmF1bHRzLCBsZXZlbE5hbWU6IHN0cmluZyk6TG9nRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24odGhpczogTG9nLCAuLi5hcmdzOiBhbnlbXSk6VGVybWluYXRlZExvZyB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGNmZy5sb2dfbGV2ZWxzW2xldmVsTmFtZV07XG4gICAgY29uc3QgZGVmOiBMb2dMZXZlbERlZmluaXRpb24gPSB7IC4uLmRlZmluaXRpb24sIGxldmVsTmFtZSB9O1xuICAgIGlmIChhbGxvd2VkKHRoaXMsIGNmZywgZGVmKSkge1xuICAgICAgcmV0dXJuIGV4ZWN1dGlvblBpcGVsaW5lKHRoaXMsIGNmZywgbGV2ZWxOYW1lLCBhcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbG9nOiB0aGlzLCByZW5kZXI6IG51bGwgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kIHRoYXQgZW5hYmxlcyB0aGUgdXNlciB0byBzcGVjaWZ5IGEgY3VzdG9tXG4gKiBsb2cgbGV2ZWwgYnkga2V5IGFzIHRoZSBmb3JtYXQgZm9yIHRoZSBsb2cuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21NZXRob2QoY2ZnOiBEZWZhdWx0cyk6Q3VzdG9tTG9nRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24odGhpczogTG9nLCBsZXZlbE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55W10pOlRlcm1pbmF0ZWRMb2cge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBjZmcuY3VzdG9tX2xldmVsc1tsZXZlbE5hbWVdO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBpZiAoYWxsb3dlZCh0aGlzLCBjZmcsIGRlZmluaXRpb24pKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRpb25QaXBlbGluZSh0aGlzLCBjZmcsIGxldmVsTmFtZSwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGxvZzogdGhpcywgcmVuZGVyOiBudWxsIH07XG4gIH07XG59O1xuXG4vKipcbiAqIFRoZSBwcmltYXJ5IGV4ZWN1dGlvbiBwaXBlbGluZSBmb3IgdGVybWluYXRpbmcgbG9nIG1ldGhvZHMuXG4gKi9cbmZ1bmN0aW9uIGV4ZWN1dGlvblBpcGVsaW5lKGxvZzogTG9nLCBjZmc6IERlZmF1bHRzLCBsZXZlbE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOlRlcm1pbmF0ZWRMb2cge1xuICAvLyBTYXZlIHRoZSBhcmdzIGZvciByZWNhbGwgcHVycG9zZXNcbiAgbG9nLmFyZ3MgPSBhcmdzO1xuICAvLyBBcHBseSBtb2RpZmllcnMgaW4gdGhlIHByb3BlciBvcmRlclxuICBsb2cubW9kaWZpZXJRdWV1ZS5mb3JFYWNoKGZ1bmMgPT4gZnVuYygpKTtcbiAgY29uc3QgcmVuZGVyID0gbG9nLnByaW50KGNmZywgbGV2ZWxOYW1lLCBhcmdzKTtcbiAgbG9nLmNhY2hlKGFyZ3MpO1xuICBsb2cuZmlyZUxpc3RlbmVycyhhcmdzKTtcblxuICByZXR1cm4geyBsb2csIHJlbmRlciB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuICogVGVybWluYXRvciBDb25kaXRpb25zXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGZhdGUgb2Ygd2hldGhlciB0aGlzIGxvZyB3aWxsIHRlcm1pbmF0ZS5cbiAqL1xuZnVuY3Rpb24gYWxsb3dlZChjdHh0OiBMb2csIGNmZzogRGVmYXVsdHMsIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uKTpib29sZWFuIHtcbiAgLy8gRm9yIHBlcmZvcm1hbmNlLCBjaGVjayBpZiB0aGUgbGV2ZWwgaXMgYWN0aXZlIGJlZm9yZSBldmFsdWF0aW5nIG90aGVyIGNvbmRpdGlvbnNcbiAgaWYgKGxldmVsQWN0aXZlKGRlZiwgY2ZnLmxvZ19sZXZlbCkpIHtcbiAgICByZXR1cm4gZXZhbFBhc3NlcyhjdHh0KSAmJiBub3RUZXN0RW52KCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBsb2cgbGV2ZWwgaXMgaGlnaCBlbm91Z2ggZm9yIHRoZSBsb2cgdG8gdGVybWluYXRlLlxuICovXG5mdW5jdGlvbiBsZXZlbEFjdGl2ZShkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgbGV2ZWw6IG51bWJlcik6Ym9vbGVhbiB7XG4gIHJldHVybiBkZWYubGV2ZWwgPD0gbGV2ZWw7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW55IGFzc2VydGlvbnMgb3IgZXhwcmVzc2lvbnMgcGFzcyBmb3IgdGhpcyBsb2cgdG8gdGVybWluYXRlLlxuICovXG5mdW5jdGlvbiBldmFsUGFzc2VzKGN0eHQ6IExvZyk6Ym9vbGVhbiB7XG4gIGlmIChjdHh0LmFzc2VydGlvbiAhPT0gdW5kZWZpbmVkICYmIGN0eHQuZXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IGhhdmUgZGVjbGFyZWQgYm90aCBhbiBhc3NlcnRpb24gYW5kIHRlc3Qgb24gdGhlIHNhbWUgbG9nLiBQbGVhc2Ugb25seSBkZWNsYXJlIG9uZSBvciBuZWZhcmlvdXMgcmVzdWx0cyBtYXkgb2NjdXIuXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChjdHh0LmFzc2VydGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICEoY3R4dC5hc3NlcnRpb24gPT09IGZhbHNlKTtcbiAgfVxuICBpZiAoY3R4dC5leHByZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY3R4dC5leHByZXNzaW9uID09PSB0cnVlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFZlcmlmeSB0aGF0IHRoaXMgbG9nIGlzIG5vdCBpbiBhIHRlc3QgZW52aXJvbm1lbnQgYW5kIHByZXZlbnRcbiAqIHRlcm1pbmF0aW9uIGlmIGl0IGlzLlxuICovXG5mdW5jdGlvbiBub3RUZXN0RW52KCk6Ym9vbGVhbiB7XG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZW52Py5BRFpFX0VOViAhPT0gJ3Rlc3QnO1xufSIsImV4cG9ydCB7IGluaXRpYWxDYXBzLCBhcHBseU1peGlucyB9IGZyb20gJy4vdXRpbCc7IiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxDYXBzKHN0cjogc3RyaW5nKTpzdHJpbmcge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNaXhpbnMoZGVyaXZlZEN0b3I6IGFueSwgYmFzZUN0b3JzOiBhbnlbXSkge1xuICBiYXNlQ3RvcnMuZm9yRWFjaChiYXNlQ3RvciA9PiB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYmFzZUN0b3IucHJvdG90eXBlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICBkZXJpdmVkQ3Rvci5wcm90b3R5cGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZUN0b3IucHJvdG90eXBlLCBuYW1lKSA/PyAnJ1xuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
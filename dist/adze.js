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

/***/ "./src/_contracts/Configuration.ts":
/*!*****************************************!*\
  !*** ./src/_contracts/Configuration.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;
;

/***/ }),

/***/ "./src/_contracts/ConsoleMethod.ts":
/*!*****************************************!*\
  !*** ./src/_contracts/ConsoleMethod.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Defaults.ts":
/*!************************************!*\
  !*** ./src/_contracts/Defaults.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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



/***/ }),

/***/ "./src/_contracts/LogFunction.ts":
/*!***************************************!*\
  !*** ./src/_contracts/LogFunction.ts ***!
  \***************************************/
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

/***/ "./src/_contracts/index.ts":
/*!*********************************!*\
  !*** ./src/_contracts/index.ts ***!
  \*********************************/
/*! exports provided: Log, ConsoleMethod, LogFunctions, LogFunction, Shed, ListenerCallback, Listeners, ListenerLocations, ListenerData, Configuration, CustomLogLevels, Defaults, BaseLogLevels, LogLevelDefinition, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log */ "./src/_contracts/Log.ts");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Log__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _Log__WEBPACK_IMPORTED_MODULE_0__["Log"]; });

/* harmony import */ var _ConsoleMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleMethod */ "./src/_contracts/ConsoleMethod.ts");
/* harmony import */ var _ConsoleMethod__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ConsoleMethod__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleMethod", function() { return _ConsoleMethod__WEBPACK_IMPORTED_MODULE_1__["ConsoleMethod"]; });

/* harmony import */ var _LogFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogFunction */ "./src/_contracts/LogFunction.ts");
/* harmony import */ var _LogFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LogFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFunctions", function() { return _LogFunction__WEBPACK_IMPORTED_MODULE_2__["LogFunctions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFunction", function() { return _LogFunction__WEBPACK_IMPORTED_MODULE_2__["LogFunction"]; });

/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shed */ "./src/_contracts/Shed.ts");
/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Shed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shed", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["Shed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerCallback", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ListenerCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Listeners", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["Listeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerLocations", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ListenerLocations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerData", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ListenerData"]; });

/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Configuration */ "./src/_contracts/Configuration.ts");
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Configuration__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomLogLevels", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__["CustomLogLevels"]; });

/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Defaults */ "./src/_contracts/Defaults.ts");
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Defaults__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Defaults", function() { return _Defaults__WEBPACK_IMPORTED_MODULE_5__["Defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLogLevels", function() { return _Defaults__WEBPACK_IMPORTED_MODULE_5__["BaseLogLevels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevelDefinition", function() { return _Defaults__WEBPACK_IMPORTED_MODULE_5__["LogLevelDefinition"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./src/_contracts/Label.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Label__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_6__["Label"]; });

 // export { CustomLog } from './CustomLog';








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
  log_level: 7,
  log_cache_size: 300,
  use_emoji: true,
  base_style: 'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;',
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
    info: {
      level: 4,
      style: `padding-right: ${_global__WEBPACK_IMPORTED_MODULE_0__["isSafari"] ? '49' : '44'}px; background: linear-gradient(to right, #fff, #b2d7ff); color: #465464; border-color: #96b5d7;`,
      terminal: ['bgBlue', 'white'],
      method: 'info',
      emoji: '📬'
    },
    warn: {
      level: 3,
      style: `background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ${_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '34' : '44'}px; `,
      terminal: ['bgYellow', 'gray'],
      method: 'warn',
      emoji: '🔔'
    },
    fail: {
      level: 2,
      style: `padding-right: ${_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '34' : '32'}px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
      terminal: ['bgRed', 'white'],
      method: 'error',
      emoji: '❌'
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

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: env, isBrowser, isChrome, isFirefox, isSafari */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
// Declare the Global scope of the environment for TypeScript
const env = global ? global : window;
const isBrowser = typeof window !== 'undefined';
const isChrome = navigator.userAgent.indexOf("Chrome") > -1;
const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
const isSafari = navigator.userAgent.indexOf("Safari") > -1 && !isChrome;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: initialize, Shed, Log, LogFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_contracts */ "./src/_contracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shed", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["Shed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["Log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFunction", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["LogFunction"]; });

/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize */ "./src/initialize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return _initialize__WEBPACK_IMPORTED_MODULE_1__["initialize"]; });



 // const Log = isBrowser ? LogBrowser : LogNode;
// export const ink: Ink = () => {
//   return new Log();
// };

/***/ }),

/***/ "./src/initialize.ts":
/*!***************************!*\
  !*** ./src/initialize.ts ***!
  \***************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shed */ "./src/shed.ts");
/* harmony import */ var _modifiers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers */ "./src/modifiers/index.ts");
/* harmony import */ var _modifiers_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/browser */ "./src/modifiers/browser/index.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./printers */ "./src/printers/index.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








const base_log = {
  traceable: false,
  modifierQueue: [],
  printer: _printers__WEBPACK_IMPORTED_MODULE_6__["printLog"],
  cache,
  print: _printers__WEBPACK_IMPORTED_MODULE_6__["print"],
  fireListeners,
  count: _modifiers__WEBPACK_IMPORTED_MODULE_4__["count"],
  countReset: _modifiers__WEBPACK_IMPORTED_MODULE_4__["countReset"],
  dir: _modifiers__WEBPACK_IMPORTED_MODULE_4__["dir"],
  dirxml: _modifiers__WEBPACK_IMPORTED_MODULE_4__["dirxml"],
  table: _modifiers__WEBPACK_IMPORTED_MODULE_4__["table"],
  assert: _modifiers__WEBPACK_IMPORTED_MODULE_4__["assert"],
  test: _modifiers__WEBPACK_IMPORTED_MODULE_4__["test"],
  group: _modifiers__WEBPACK_IMPORTED_MODULE_4__["group"],
  groupCollapsed: _modifiers__WEBPACK_IMPORTED_MODULE_4__["groupCollapsed"],
  groupEnd: _modifiers__WEBPACK_IMPORTED_MODULE_4__["groupEnd"],
  label: _modifiers__WEBPACK_IMPORTED_MODULE_4__["label"],
  namespace: _modifiers__WEBPACK_IMPORTED_MODULE_4__["namespace"],
  ns: _modifiers__WEBPACK_IMPORTED_MODULE_4__["ns"],
  trace: _modifiers__WEBPACK_IMPORTED_MODULE_4__["trace"],
  time: _modifiers_browser__WEBPACK_IMPORTED_MODULE_5__["time"],
  timeNow: _modifiers_browser__WEBPACK_IMPORTED_MODULE_5__["timeNow"],
  timeEnd: _modifiers_browser__WEBPACK_IMPORTED_MODULE_5__["timeEnd"]
}; // export function createLog():Log {
//   // generate log levels.
//   const standard_levels = env.$shed?.cfg.log_levels ?? defaults.log_levels; // Fulcrum is already merged with defaults.
//   const custom_levels = env.$shed?.cfg?.custom_levels ?? {};
//   const levels = { ...generateLevels(standard_levels), ...generateLevels(custom_levels) };
//   // Create a log object.
//   return {...base_log, ...levels};
// }
// --- Levels ---
// 0. attention
// 1. error
// 2. fail
// 3. warn
// 4. info
// 5. success
// 6. log
// 7. debug
// 8. verbose

function initialize(config) {
  if (config !== undefined) {
    return fromConfig(config);
  }

  return fromDefaults();
}

function fromDefaults() {
  return _objectSpread(_objectSpread({}, base_log), generateLevels(_defaults__WEBPACK_IMPORTED_MODULE_7__["defaults"].log_levels));
}

function fromConfig(config) {
  var _config$custom_levels;

  // generate log levels.
  const standard_levels = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_1___default()(config.log_levels, _defaults__WEBPACK_IMPORTED_MODULE_7__["defaults"].log_levels); // Fulcrum is already merged with defaults.

  const custom_levels = (_config$custom_levels = config === null || config === void 0 ? void 0 : config.custom_levels) !== null && _config$custom_levels !== void 0 ? _config$custom_levels : {};

  const levels = _objectSpread(_objectSpread({}, generateLevels(standard_levels)), generateLevels(custom_levels));

  return _objectSpread(_objectSpread({}, base_log), levels);
}
/**
 * Takes a set of log level definitions and generates ink methods.
 */


function generateLevels(levels) {
  return Object.entries(levels).reduce((acc, [levelName, {
    level,
    method,
    style,
    terminal,
    emoji
  }]) => {
    return _objectSpread(_objectSpread({}, acc), {}, {
      [levelName](...args) {
        const def = {
          level,
          levelName,
          method,
          style,
          terminal,
          emoji
        };
        this.modifierQueue.forEach(func => func());
        this.print(def, _defaults__WEBPACK_IMPORTED_MODULE_7__["defaults"].base_style, args);
        this.cache(def, args);
        this.fireListeners(def, args);
      }

    });
  }, {});
}

function cache(def, args) {
  if (Object(_shed__WEBPACK_IMPORTED_MODULE_3__["storeExists"])(_global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed)) {
    _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed.addToCache(this, def, args);
  }
}

function fireListeners(def, args) {
  if (Object(_shed__WEBPACK_IMPORTED_MODULE_3__["storeExists"])(_global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed)) {
    _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed.fireListeners(this, def, args);
  }
}

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
    this.method = 'trace';
  });
}

/***/ }),

/***/ "./src/modifiers/index.ts":
/*!********************************!*\
  !*** ./src/modifiers/index.ts ***!
  \********************************/
/*! exports provided: count, countReset, dir, dirxml, table, group, groupCollapsed, groupEnd, label, namespace, ns, trace, modifier, prependModifier, assert, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _counting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counting */ "./src/modifiers/counting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _counting__WEBPACK_IMPORTED_MODULE_0__["count"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countReset", function() { return _counting__WEBPACK_IMPORTED_MODULE_0__["countReset"]; });

/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatting */ "./src/modifiers/formatting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return _formatting__WEBPACK_IMPORTED_MODULE_1__["dir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirxml", function() { return _formatting__WEBPACK_IMPORTED_MODULE_1__["dirxml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "table", function() { return _formatting__WEBPACK_IMPORTED_MODULE_1__["table"]; });

/* harmony import */ var _grouping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grouping */ "./src/modifiers/grouping.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _grouping__WEBPACK_IMPORTED_MODULE_2__["group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupCollapsed", function() { return _grouping__WEBPACK_IMPORTED_MODULE_2__["groupCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupEnd", function() { return _grouping__WEBPACK_IMPORTED_MODULE_2__["groupEnd"]; });

/* harmony import */ var _identifying__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identifying */ "./src/modifiers/identifying.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _identifying__WEBPACK_IMPORTED_MODULE_3__["label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _identifying__WEBPACK_IMPORTED_MODULE_3__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ns", function() { return _identifying__WEBPACK_IMPORTED_MODULE_3__["ns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return _identifying__WEBPACK_IMPORTED_MODULE_3__["trace"]; });

/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_4__["modifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependModifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_4__["prependModifier"]; });

/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testing */ "./src/modifiers/testing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _testing__WEBPACK_IMPORTED_MODULE_5__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _testing__WEBPACK_IMPORTED_MODULE_5__["test"]; });








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

/***/ "./src/printers/browser/index.ts":
/*!***************************************!*\
  !*** ./src/printers/browser/index.ts ***!
  \***************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printers */ "./src/printers/browser/printers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroupCollapsed"]; });



/***/ }),

/***/ "./src/printers/browser/printers.ts":
/*!******************************************!*\
  !*** ./src/printers/browser/printers.ts ***!
  \******************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return printLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return printGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return printGroupCollapsed; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");

 // ------- PRINT METHODS -------- //

function printLog(def, base_style, args) {
  // Must check the return value of meta otherwise FF prints "empty string"...
  const meta = fMeta(this);

  if (meta === '') {
    console[def.method](`${fLeader(def, args)}`, base_style + def.style, ...args);
  } else {
    console[def.method](`${fLeader(def, args)}`, base_style + def.style, fMeta(this), ...args);
  }
}
function printGroup(def, base_style, args) {
  console.group(`${fLeader(def, args)}`, base_style + def.style, typeof args[0] === "string" ? args[0] : undefined);
}
function printGroupCollapsed(def, base_style, args) {
  console.groupCollapsed(`${fLeader(def, args)}`, base_style + def.style, typeof args[0] === "string" ? args[0] : undefined);
} // ------- PRINT FORMATTERS -------- //

function fLeader(def, args) {
  return ` %c${fEmoji(def)} ${fName(def.levelName)}(${args.length})`;
}

function fEmoji(def) {
  var _env$$shed, _env$$shed$cfg;

  return ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$cfg = _env$$shed.cfg) === null || _env$$shed$cfg === void 0 ? void 0 : _env$$shed$cfg.use_emoji) === true ? ` ${def.emoji}` : '';
}

function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_1__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}

function fMeta(ctxt) {
  return `${fNamespace(ctxt)}${fLabel(ctxt)}${fTime(ctxt)}${fCount(ctxt)}`;
}

function fTime(ctxt) {
  var _ref, _ctxt$labelVal$timeNo, _ctxt$labelVal, _ctxt$labelVal2, _env$$shed2, _env$$shed2$cfg;

  const label_txt = `${(_ref = (_ctxt$labelVal$timeNo = (_ctxt$labelVal = ctxt.labelVal) === null || _ctxt$labelVal === void 0 ? void 0 : _ctxt$labelVal.timeNow) !== null && _ctxt$labelVal$timeNo !== void 0 ? _ctxt$labelVal$timeNo : (_ctxt$labelVal2 = ctxt.labelVal) === null || _ctxt$labelVal2 === void 0 ? void 0 : _ctxt$labelVal2.timeEllapsed) !== null && _ref !== void 0 ? _ref : ''}`;
  return label_txt !== '' ? ` (${((_env$$shed2 = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed) === null || _env$$shed2 === void 0 ? void 0 : (_env$$shed2$cfg = _env$$shed2.cfg) === null || _env$$shed2$cfg === void 0 ? void 0 : _env$$shed2$cfg.use_emoji) ? '⏱' : ''}${label_txt}) ` : '';
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
/*! exports provided: print, printLog, printGroup, printGroupCollapsed, printGroupEnd, printTable, printDir, printDirxml */
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





const printLog = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printLog"] : _node__WEBPACK_IMPORTED_MODULE_2__["printNode"];
const printGroup = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printGroup"] : _node__WEBPACK_IMPORTED_MODULE_2__["printNodeGroup"];
const printGroupCollapsed = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printGroupCollapsed"] : _node__WEBPACK_IMPORTED_MODULE_2__["printNodeGroupCollapsed"];


/***/ }),

/***/ "./src/printers/node/index.ts":
/*!************************************!*\
  !*** ./src/printers/node/index.ts ***!
  \************************************/
/*! exports provided: printNode, printNodeGroup, printNodeGroupCollapsed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printers */ "./src/printers/node/printers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printNode", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printNodeGroup", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printNodeGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printNodeGroupCollapsed", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printNodeGroupCollapsed"]; });



/***/ }),

/***/ "./src/printers/node/printers.ts":
/*!***************************************!*\
  !*** ./src/printers/node/printers.ts ***!
  \***************************************/
/*! exports provided: printNode, printNodeGroup, printNodeGroupCollapsed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printNode", function() { return printNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printNodeGroup", function() { return printNodeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printNodeGroupCollapsed", function() { return printNodeGroupCollapsed; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");

 // ------- PRINT METHODS -------- //

function printNode(def, base_style, args) {
  // Must check the return value of meta otherwise FF prints "empty string"...
  const meta = fMeta(this);

  if (meta === '') {
    console[def.method](`${fLeader(def, args)}`, base_style + def.style, ...args);
  } else {
    console[def.method](`${fLeader(def, args)}`, base_style + def.style, fMeta(this), ...args);
  }
}
function printNodeGroup(def, base_style, args) {
  console.group(`${fLeader(def, args)}`, base_style + def.style, typeof args[0] === "string" ? args[0] : undefined);
}
function printNodeGroupCollapsed(def, base_style, args) {
  console.groupCollapsed(`${fLeader(def, args)}`, base_style + def.style, typeof args[0] === "string" ? args[0] : undefined);
} // ------- PRINT FORMATTERS -------- //

function fLeader(def, args) {
  return ` %c${fEmoji(def)} ${fName(def.levelName)}(${args.length})`;
}

function fEmoji(def) {
  var _env$$shed, _env$$shed$cfg;

  return ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$cfg = _env$$shed.cfg) === null || _env$$shed$cfg === void 0 ? void 0 : _env$$shed$cfg.use_emoji) === true ? ` ${def.emoji}` : '';
}

function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_1__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}

function fMeta(ctxt) {
  return `${fNamespace(ctxt)}${fLabel(ctxt)}${fTime(ctxt)}${fCount(ctxt)}`;
}

function fTime(ctxt) {
  var _ref, _ctxt$labelVal$timeNo, _ctxt$labelVal, _ctxt$labelVal2, _env$$shed2, _env$$shed2$cfg;

  const label_txt = `${(_ref = (_ctxt$labelVal$timeNo = (_ctxt$labelVal = ctxt.labelVal) === null || _ctxt$labelVal === void 0 ? void 0 : _ctxt$labelVal.timeNow) !== null && _ctxt$labelVal$timeNo !== void 0 ? _ctxt$labelVal$timeNo : (_ctxt$labelVal2 = ctxt.labelVal) === null || _ctxt$labelVal2 === void 0 ? void 0 : _ctxt$labelVal2.timeEllapsed) !== null && _ref !== void 0 ? _ref : ''}`;
  return label_txt !== '' ? ` (${((_env$$shed2 = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed) === null || _env$$shed2 === void 0 ? void 0 : (_env$$shed2$cfg = _env$$shed2.cfg) === null || _env$$shed2$cfg === void 0 ? void 0 : _env$$shed2$cfg.use_emoji) ? '⏱' : ''}${label_txt}) ` : '';
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
/*! exports provided: print, printGroupEnd, printTable, printDir, printDirxml, allowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupEnd", function() { return printGroupEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printTable", function() { return printTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDir", function() { return printDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDirxml", function() { return printDirxml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowed", function() { return allowed; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");

// ------- PRINT ENTRY -------- //
function print(def, base_style, args) {
  if (allowed(this, def)) {
    this.printer(def, base_style, args);
  }
} // ------- PRINT METHODS -------- //

function printGroupEnd(def, base_style, args) {
  console.groupEnd();
}
function printTable(def, base_style, args) {
  console.table(args);
}
function printDir(def, base_style, args) {
  console.dir(args);
}
function printDirxml(def, base_style, args) {
  console.dirxml(args);
} // ------- PRINT HELPERS -------- //

function allowed(ctxt, def) {
  return levelActive(def) && evalPasses(ctxt) && notTestEnv();
}

function levelActive(def) {
  if (_global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed) {
    return def.level <= _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed.cfg.log_level;
  }

  return true;
}

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

function notTestEnv() {
  if (_global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    return true;
  }

  return _global__WEBPACK_IMPORTED_MODULE_0__["env"] && _global__WEBPACK_IMPORTED_MODULE_0__["env"].CSAW_ENV !== 'test';
}

/***/ }),

/***/ "./src/shed.ts":
/*!*********************!*\
  !*** ./src/shed.ts ***!
  \*********************/
/*! exports provided: storeExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeExists", function() { return storeExists; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_contracts */ "./src/_contracts/index.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function storeExists(store) {
  return store !== undefined;
}

function createShed(config) {
  const cfg = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_1___default()(config, _defaults__WEBPACK_IMPORTED_MODULE_2__["defaults"]);
  _global__WEBPACK_IMPORTED_MODULE_3__["env"].$shed = {
    cfg,
    cache: [],
    labels: new Map(),
    id_counter: -1,
    listeners: initListenerLocations(cfg),
    assignId,
    addToCache,
    addListener,
    removeListener,
    fireListeners
  };
}

function initListenerLocations(cfg) {
  const listeners = new Map();
  Object.values(cfg.log_levels).forEach(def => {
    listeners.set(def.level, new Map());
  });
  return listeners;
}

function addToCache(log, def, args) {
  if (this.cache.length < this.cfg.log_cache_size) {
    this.cache = this.cache.concat([[log, def, args]]);
  }
} // /**
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


function addListener(levels, cb) {
  return levels.map(lvl => {
    const level_map = this.listeners.get(lvl);
    const id = this.assignId();
    level_map === null || level_map === void 0 ? void 0 : level_map.set(id, cb);
    this.listeners.set(lvl, level_map !== null && level_map !== void 0 ? level_map : new Map());
    return [lvl, id];
  });
}

function removeListener(locations) {
  locations.forEach(([lvl_id, id]) => {
    const level = this.listeners.get(lvl_id);
    level === null || level === void 0 ? void 0 : level.delete(id);
  });
}

function fireListeners(ctxt, def, args) {
  var _this$listeners$get;

  (_this$listeners$get = this.listeners.get(def.level)) === null || _this$listeners$get === void 0 ? void 0 : _this$listeners$get.forEach(listener => {
    listener(_objectSpread(_objectSpread(_objectSpread({}, ctxt), def), {}, {
      args
    }));
  });
}

function assignId() {
  this.id_counter = this.id_counter + 1; // Written for clarity

  return this.id_counter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWZhdWx0c2RlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fY29udHJhY3RzL0NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fY29udHJhY3RzL0RlZmF1bHRzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2NvbnRyYWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL19kZWZhdWx0cy9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL19kZWZhdWx0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvaW5pdGlhbGl6ZS50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2xhYmVsL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbGFiZWwvbGFiZWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvYnJvd3Nlci9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9icm93c2VyL3RpbWluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9jb3VudGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9mb3JtYXR0aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2dyb3VwaW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2lkZW50aWZ5aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL21vZGlmaWVyLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL3Rlc3RpbmcudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9icm93c2VyL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvYnJvd3Nlci9wcmludGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvbm9kZS9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL25vZGUvcHJpbnRlcnMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9zaGFyZWQudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9zaGVkLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3V0aWwvdXRpbC50cyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImxvZ19sZXZlbCIsImxvZ19jYWNoZV9zaXplIiwidXNlX2Vtb2ppIiwiYmFzZV9zdHlsZSIsImxvZ19sZXZlbHMiLCJ2ZXJib3NlIiwibGV2ZWwiLCJzdHlsZSIsInRlcm1pbmFsIiwibWV0aG9kIiwiZW1vamkiLCJkZWJ1ZyIsImxvZyIsInN1Y2Nlc3MiLCJpbmZvIiwiaXNTYWZhcmkiLCJ3YXJuIiwiaXNDaHJvbWUiLCJmYWlsIiwiZXJyb3IiLCJhdHRlbnRpb24iLCJmaWx0ZXJzIiwiaGlkZUFsbCIsIm5hbWVzcGFjZSIsImV4Y2x1ZGUiLCJpbmNsdWRlIiwibGFiZWwiLCJlbnYiLCJnbG9iYWwiLCJ3aW5kb3ciLCJpc0Jyb3dzZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNGaXJlZm94IiwiYmFzZV9sb2ciLCJ0cmFjZWFibGUiLCJtb2RpZmllclF1ZXVlIiwicHJpbnRlciIsInByaW50TG9nIiwiY2FjaGUiLCJwcmludCIsImZpcmVMaXN0ZW5lcnMiLCJjb3VudCIsImNvdW50UmVzZXQiLCJkaXIiLCJkaXJ4bWwiLCJ0YWJsZSIsImFzc2VydCIsInRlc3QiLCJncm91cCIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJucyIsInRyYWNlIiwidGltZSIsInRpbWVOb3ciLCJ0aW1lRW5kIiwiaW5pdGlhbGl6ZSIsImNvbmZpZyIsInVuZGVmaW5lZCIsImZyb21Db25maWciLCJmcm9tRGVmYXVsdHMiLCJnZW5lcmF0ZUxldmVscyIsInN0YW5kYXJkX2xldmVscyIsImRlZmF1bHRzRGVlcCIsImN1c3RvbV9sZXZlbHMiLCJsZXZlbHMiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjIiwibGV2ZWxOYW1lIiwiYXJncyIsImRlZiIsImZvckVhY2giLCJmdW5jIiwic3RvcmVFeGlzdHMiLCIkc2hlZCIsImFkZFRvQ2FjaGUiLCJnZXRMYWJlbCIsIm5hbWUiLCJsYWJlbHMiLCJnZXQiLCJhZGRMYWJlbCIsImhhc0xhYmVsIiwic2V0IiwiaGFzIiwibW9kaWZpZXIiLCJsYWJlbFZhbCIsInRpbWVTdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwidGltZUVsbGFwc2VkIiwiY291bnRDbGVhciIsInByaW50RGlyIiwicHJpbnREaXJ4bWwiLCJwcmludFRhYmxlIiwicHJpbnRHcm91cCIsInByaW50R3JvdXBDb2xsYXBzZWQiLCJwcmludEdyb3VwRW5kIiwicHJlcGVuZE1vZGlmaWVyIiwibmFtZXNwYWNlVmFsIiwiY29udGV4dCIsImNvbmNhdCIsImFzc2VydGlvbiIsImV4cHJlc3Npb24iLCJtZXRhIiwiZk1ldGEiLCJjb25zb2xlIiwiZkxlYWRlciIsImZFbW9qaSIsImZOYW1lIiwibGVuZ3RoIiwiY2ZnIiwiaW5pdGlhbENhcHMiLCJjdHh0IiwiZk5hbWVzcGFjZSIsImZMYWJlbCIsImZUaW1lIiwiZkNvdW50IiwibGFiZWxfdHh0IiwicHJpbnRMb2dCIiwicHJpbnROb2RlIiwicHJpbnRHcm91cEIiLCJwcmludE5vZGVHcm91cCIsInByaW50R3JvdXBDb2xsYXBzZWRCIiwicHJpbnROb2RlR3JvdXBDb2xsYXBzZWQiLCJhbGxvd2VkIiwibGV2ZWxBY3RpdmUiLCJldmFsUGFzc2VzIiwibm90VGVzdEVudiIsIkNTQVdfRU5WIiwic3RvcmUiLCJjcmVhdGVTaGVkIiwiTWFwIiwiaWRfY291bnRlciIsImxpc3RlbmVycyIsImluaXRMaXN0ZW5lckxvY2F0aW9ucyIsImFzc2lnbklkIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsInZhbHVlcyIsImNiIiwibWFwIiwibHZsIiwibGV2ZWxfbWFwIiwiaWQiLCJsb2NhdGlvbnMiLCJsdmxfaWQiLCJkZWxldGUiLCJsaXN0ZW5lciIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJhcHBseU1peGlucyIsImRlcml2ZWRDdG9yIiwiYmFzZUN0b3JzIiwiYmFzZUN0b3IiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvdG90eXBlIiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LGtCQUFrQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0ksU0FEZCxFQUVFaEYsSUFGRiwyQkFHRWIsTUFBTSxDQUFDK0Ysd0JBQVAsQ0FBZ0NKLFFBQVEsQ0FBQ0UsU0FBekMsRUFBb0RoRixJQUFwRCxDQUhGLHlFQUcrRCxFQUgvRDtBQUtELEtBTkQ7QUFPRCxHQVJEO0FBU0QsQyIsImZpbGUiOiJhZHplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWR6ZUxpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBZHplTGliXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL29wZW5qc2Yub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZCxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2UsXG4gICAgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFzc2lnblZhbHVlYCBleGNlcHQgdGhhdCBpdCBkb2Vzbid0IGFzc2lnblxuICogYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmICgodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZXEob2JqZWN0W2tleV0sIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZXJnZWAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIG1lcmdlZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKG9iamVjdCA9PT0gc291cmNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGJhc2VGb3Ioc291cmNlLCBmdW5jdGlvbihzcmNWYWx1ZSwga2V5KSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICBpZiAoaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgID8gY3VzdG9taXplcihzYWZlR2V0KG9iamVjdCwga2V5KSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgICB9XG4gICAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9LCBrZXlzSW4pO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZU1lcmdlYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIG1lcmdlcyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBtZXJnZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIG1lcmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1lcmdlRnVuYyBUaGUgZnVuY3Rpb24gdG8gbWVyZ2UgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIG1lcmdlRnVuYywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgdmFyIG9ialZhbHVlID0gc2FmZUdldChvYmplY3QsIGtleSksXG4gICAgICBzcmNWYWx1ZSA9IHNhZmVHZXQoc291cmNlLCBrZXkpLFxuICAgICAgc3RhY2tlZCA9IHN0YWNrLmdldChzcmNWYWx1ZSk7XG5cbiAgaWYgKHN0YWNrZWQpIHtcbiAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBzdGFja2VkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICA6IHVuZGVmaW5lZDtcblxuICB2YXIgaXNDb21tb24gPSBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc0NvbW1vbikge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkoc3JjVmFsdWUpLFxuICAgICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgaXNCdWZmZXIoc3JjVmFsdWUpLFxuICAgICAgICBpc1R5cGVkID0gIWlzQXJyICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHNyY1ZhbHVlKTtcblxuICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgaWYgKGlzQXJyIHx8IGlzQnVmZiB8fCBpc1R5cGVkKSB7XG4gICAgICBpZiAoaXNBcnJheShvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGNvcHlBcnJheShvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0J1ZmYpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZUJ1ZmZlcihzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc1R5cGVkKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVUeXBlZEFycmF5KHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHNyY1ZhbHVlKSB8fCBpc0FyZ3VtZW50cyhzcmNWYWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICBpZiAoaXNBcmd1bWVudHMob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdG9QbGFpbk9iamVjdChvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaXNPYmplY3Qob2JqVmFsdWUpIHx8IGlzRnVuY3Rpb24ob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaW5pdENsb25lT2JqZWN0KHNyY1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoaXNDb21tb24pIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICBtZXJnZUZ1bmMobmV3VmFsdWUsIHNyY1ZhbHVlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIHN0YWNrWydkZWxldGUnXShzcmNWYWx1ZSk7XG4gIH1cbiAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVmYXVsdHNEZWVwYCB0byBjdXN0b21pemUgaXRzIGBfLm1lcmdlYCB1c2UgdG8gbWVyZ2Ugc291cmNlXG4gKiBvYmplY3RzIGludG8gZGVzdGluYXRpb24gb2JqZWN0cyB0aGF0IGFyZSBwYXNzZWQgdGhydS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBvYmpWYWx1ZSBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSBzb3VyY2UgdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIG1lcmdlLlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgcGFyZW50IG9iamVjdCBvZiBgb2JqVmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgcGFyZW50IG9iamVjdCBvZiBgc3JjVmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBjdXN0b21EZWZhdWx0c01lcmdlKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spIHtcbiAgaWYgKGlzT2JqZWN0KG9ialZhbHVlKSAmJiBpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG9ialZhbHVlKTtcbiAgICBiYXNlTWVyZ2Uob2JqVmFsdWUsIHNyY1ZhbHVlLCB1bmRlZmluZWQsIGN1c3RvbURlZmF1bHRzTWVyZ2UsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmpWYWx1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgLCB1bmxlc3MgYGtleWAgaXMgXCJfX3Byb3RvX19cIiBvciBcImNvbnN0cnVjdG9yXCIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzYWZlR2V0KG9iamVjdCwga2V5KSB7XG4gIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIG9iamVjdFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PSAnX19wcm90b19fJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5kZWZhdWx0c2AgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgYXNzaWduc1xuICogZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4xMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uZGVmYXVsdHNcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZhdWx0c0RlZXAoeyAnYSc6IHsgJ2InOiAyIH0gfSwgeyAnYSc6IHsgJ2InOiAxLCAnYyc6IDMgfSB9KTtcbiAqIC8vID0+IHsgJ2EnOiB7ICdiJzogMiwgJ2MnOiAzIH0gfVxuICovXG52YXIgZGVmYXVsdHNEZWVwID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJncykge1xuICBhcmdzLnB1c2godW5kZWZpbmVkLCBjdXN0b21EZWZhdWx0c01lcmdlKTtcbiAgcmV0dXJuIGFwcGx5KG1lcmdlV2l0aCwgdW5kZWZpbmVkLCBhcmdzKTtcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLm1lcmdlYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBjdXN0b21pemVyYCB3aGljaFxuICogaXMgaW52b2tlZCB0byBwcm9kdWNlIHRoZSBtZXJnZWQgdmFsdWVzIG9mIHRoZSBkZXN0aW5hdGlvbiBhbmQgc291cmNlXG4gKiBwcm9wZXJ0aWVzLiBJZiBgY3VzdG9taXplcmAgcmV0dXJucyBgdW5kZWZpbmVkYCwgbWVyZ2luZyBpcyBoYW5kbGVkIGJ5IHRoZVxuICogbWV0aG9kIGluc3RlYWQuIFRoZSBgY3VzdG9taXplcmAgaXMgaW52b2tlZCB3aXRoIHNpeCBhcmd1bWVudHM6XG4gKiAob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjaykuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IHNvdXJjZXMgVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlKSB7XG4gKiAgIGlmIChfLmlzQXJyYXkob2JqVmFsdWUpKSB7XG4gKiAgICAgcmV0dXJuIG9ialZhbHVlLmNvbmNhdChzcmNWYWx1ZSk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFsxXSwgJ2InOiBbMl0gfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiBbM10sICdiJzogWzRdIH07XG4gKlxuICogXy5tZXJnZVdpdGgob2JqZWN0LCBvdGhlciwgY3VzdG9taXplcik7XG4gKiAvLyA9PiB7ICdhJzogWzEsIDNdLCAnYic6IFsyLCA0XSB9XG4gKi9cbnZhciBtZXJnZVdpdGggPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplcik7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0c0RlZXA7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgeyBCYXNlTG9nTGV2ZWxzIH0gZnJvbSAnLi9EZWZhdWx0cyc7XG5pbXBvcnQgeyBDb25zb2xlTWV0aG9kIH0gZnJvbSAnLi9Db25zb2xlTWV0aG9kJztcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgbG9nX2xldmVsPzogbnVtYmVyO1xuICBsb2dfY2FjaGVfc2l6ZT86IG51bWJlcjtcbiAgdXNlX2Vtb2ppPzogYm9vbGVhbjtcbiAgYmFzZV9zdHlsZT86IHN0cmluZztcbiAgbG9nX2xldmVscz86IFBhcnRpYWw8QmFzZUxvZ0xldmVscz47XG4gIGN1c3RvbV9sZXZlbHM/OiBDdXN0b21Mb2dMZXZlbHM7XG4gIGZpbHRlcnM/OiBGaWx0ZXJzO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlU3R5bGVzIHtcbiAgZ3JvdXA/OiBzdHJpbmc7XG4gIHNpbmdsZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tTG9nTGV2ZWxzIHtcbiAgW3R5cGU6IHN0cmluZ106IExvZ0xldmVsRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dMZXZlbERlZmluaXRpb24ge1xuICBsZXZlbDogbnVtYmVyO1xuICBtZXRob2Q6IENvbnNvbGVNZXRob2Q7XG4gIHN0eWxlOiBzdHJpbmc7XG4gIHRlcm1pbmFsOiBzdHJpbmd8c3RyaW5nW107XG4gIGVtb2ppOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nTGV2ZWxPdmVycmlkZXMge1xuICBsZXZlbD86IG51bWJlcjtcbiAgbWV0aG9kPzogQ29uc29sZU1ldGhvZDtcbiAgc3R5bGU/OiBzdHJpbmc7XG4gIHRlcm1pbmFsPzogc3RyaW5nfHN0cmluZ1tdO1xuICBlbW9qaT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJzIHtcbiAgaGlkZUFsbD86IGJvb2xlYW47XG4gIG5hbWVzcGFjZT86IEZpbHRlck9wdGlvbnM7XG4gIGxhYmVsPzogRmlsdGVyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJPcHRpb25zIHtcbiAgaGlkZUFsbD86IGJvb2xlYW47XG4gIGV4Y2x1ZGU/OiBzdHJpbmdbXTtcbiAgaW5jbHVkZT86IHN0cmluZ1tdO1xufSIsImltcG9ydCB7IExvZywgQ29uc29sZU1ldGhvZCB9IGZyb20gJy4vTG9nJztcbmltcG9ydCB7IEN1c3RvbUxvZ0xldmVscyB9IGZyb20gJy4vQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vTGFiZWwnO1xuXG50eXBlIExhYmVsTWFwID0gTWFwPHN0cmluZywgTGFiZWw+O1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ0Z1bmN0aW9ucyB7XG4gIFtuYW1lOiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hlZCB7XG4gIGNmZzogRGVmYXVsdHM7XG4gIGNhY2hlOiBMb2dbXTtcbiAgbGFiZWxzOiBMYWJlbE1hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0cyB7XG4gIGxvZ19sZXZlbDogbnVtYmVyO1xuICBsb2dfY2FjaGVfc2l6ZTogbnVtYmVyO1xuICB1c2VfZW1vamk6IGJvb2xlYW47XG4gIGJhc2Vfc3R5bGU6IHN0cmluZztcbiAgbG9nX2xldmVsczogQmFzZUxvZ0xldmVscztcbiAgY3VzdG9tX2xldmVscz86IEN1c3RvbUxvZ0xldmVscztcbiAgZmlsdGVyczogRmlsdGVycztcbn07XG5cbmV4cG9ydCB0eXBlIEJhc2VMb2dMZXZlbHMgPSB7XG4gIHZlcmJvc2U6IExvZ0xldmVsRGVmaW5pdGlvbjtcbiAgZGVidWc6IExvZ0xldmVsRGVmaW5pdGlvbjtcbiAgbG9nOiBMb2dMZXZlbERlZmluaXRpb247XG4gIHN1Y2Nlc3M6IExvZ0xldmVsRGVmaW5pdGlvbjtcbiAgaW5mbzogTG9nTGV2ZWxEZWZpbml0aW9uO1xuICB3YXJuOiBMb2dMZXZlbERlZmluaXRpb247XG4gIGZhaWw6IExvZ0xldmVsRGVmaW5pdGlvbjtcbiAgZXJyb3I6IExvZ0xldmVsRGVmaW5pdGlvbjtcbiAgYXR0ZW50aW9uOiBMb2dMZXZlbERlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nTGV2ZWxEZWZpbml0aW9uIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgbGV2ZWxOYW1lPzogc3RyaW5nO1xuICBtZXRob2Q6IENvbnNvbGVNZXRob2Q7XG4gIHN0eWxlOiBzdHJpbmc7XG4gIHRlcm1pbmFsOiBzdHJpbmd8c3RyaW5nW107XG4gIGVtb2ppOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVycyB7XG4gIGhpZGVBbGw6IGJvb2xlYW47XG4gIG5hbWVzcGFjZTogRmlsdGVyT3B0aW9ucztcbiAgbGFiZWw6IEZpbHRlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyT3B0aW9ucyB7XG4gIGhpZGVBbGw6IGJvb2xlYW47XG4gIGV4Y2x1ZGU6IHN0cmluZ1tdO1xuICBpbmNsdWRlOiBzdHJpbmdbXTtcbn0iLCJleHBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZyc7XG4vLyBleHBvcnQgeyBDdXN0b21Mb2cgfSBmcm9tICcuL0N1c3RvbUxvZyc7XG5leHBvcnQgeyBDb25zb2xlTWV0aG9kIH0gZnJvbSAnLi9Db25zb2xlTWV0aG9kJztcbmV4cG9ydCB7IExvZ0Z1bmN0aW9ucywgTG9nRnVuY3Rpb24gfSBmcm9tICcuL0xvZ0Z1bmN0aW9uJztcbmV4cG9ydCB7XG4gIFNoZWQsXG4gIExpc3RlbmVyQ2FsbGJhY2ssXG4gIExpc3RlbmVycyxcbiAgTGlzdGVuZXJMb2NhdGlvbnMsXG4gIExpc3RlbmVyRGF0YSxcbn0gZnJvbSAnLi9TaGVkJztcbmV4cG9ydCB7IENvbmZpZ3VyYXRpb24sIEN1c3RvbUxvZ0xldmVscyB9IGZyb20gJy4vQ29uZmlndXJhdGlvbic7XG5leHBvcnQgeyBEZWZhdWx0cywgQmFzZUxvZ0xldmVscywgTG9nTGV2ZWxEZWZpbml0aW9uIH0gZnJvbSAnLi9EZWZhdWx0cyc7XG5leHBvcnQgeyBMYWJlbCB9IGZyb20gJy4vTGFiZWwnOyIsImltcG9ydCB7IGlzQ2hyb21lLCBpc0ZpcmVmb3gsIGlzU2FmYXJpIH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IERlZmF1bHRzIH0gZnJvbSBcIi4uL19jb250cmFjdHNcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzOiBEZWZhdWx0cyA9IHtcbiAgbG9nX2xldmVsOiA3LFxuICBsb2dfY2FjaGVfc2l6ZTogMzAwLFxuICB1c2VfZW1vamk6IHRydWUsXG4gIGJhc2Vfc3R5bGU6ICdmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwOyBib3JkZXItd2lkdGg6IDFweDsgYm9yZGVyLXN0eWxlOiBzb2xpZDsnLFxuICBsb2dfbGV2ZWxzOiB7XG4gICAgdmVyYm9zZToge1xuICAgICAgbGV2ZWw6IDgsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDI2cHg7IGJvcmRlci1jb2xvcjogMXB4IHNvbGlkICNkOWRjZTA7IGNvbG9yOiAjOTk5OTk5OyBib3JkZXItY29sb3I6ICNjYmM5Yzk7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmxhY2snLCAnaXRhbGljJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdkZWJ1ZycsXG4gICAgICBlbW9qaTogJ/CfkqQnXG4gICAgfSxcbiAgICBkZWJ1Zzoge1xuICAgICAgbGV2ZWw6IDcsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDM4cHg7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOWRjZTA7IGNvbG9yOiAjNDY1NDY0OyBib3JkZXItY29sb3I6ICM5OTk5OTk7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmxhY2snLCdpdGFsaWMnLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2RlYnVnJyxcbiAgICAgIGVtb2ppOiAn8J+QnidcbiAgICB9LFxuICAgIGxvZzoge1xuICAgICAgbGV2ZWw6IDYsXG4gICAgICBzdHlsZTogYHBhZGRpbmctcmlnaHQ6IDUwcHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2Q5ZGNlMCk7IGNvbG9yOiAjMzMzNDM1OyBib3JkZXItY29sb3I6ICNiZmMxYzU7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmxhY2snLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2xvZycsXG4gICAgICBlbW9qaTogJ/Cfk5MnXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBsZXZlbDogNSxcbiAgICAgIHN0eWxlOiAncGFkZGluZy1yaWdodDogMjZweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjY2VlZGM5KTsgY29sb3I6ICM0ZTU5NGQ7IGJvcmRlci1jb2xvcjogI2I3ZDFiMzsnLFxuICAgICAgdGVybWluYWw6IFsnYmdHcmVlbicsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/CfjoknXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICBsZXZlbDogNCxcbiAgICAgIHN0eWxlOiBgcGFkZGluZy1yaWdodDogJHsgaXNTYWZhcmkgPyAnNDknIDogJzQ0JyB9cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2IyZDdmZik7IGNvbG9yOiAjNDY1NDY0OyBib3JkZXItY29sb3I6ICM5NmI1ZDc7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmx1ZScsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/Cfk6wnXG4gICAgfSxcbiAgICB3YXJuOiB7XG4gICAgICBsZXZlbDogMyxcbiAgICAgIHN0eWxlOiBgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZmMGE4KTsgY29sb3I6ICM3MTUxMDA7IGJvcmRlci1jb2xvcjogI2UzZDY5NjsgcGFkZGluZy1yaWdodDogJHsgaXNDaHJvbWUgPyAnMzQnIDogJzQ0JyB9cHg7IGAsXG4gICAgICB0ZXJtaW5hbDogWydiZ1llbGxvdycsICdncmF5J10sXG4gICAgICBtZXRob2Q6ICd3YXJuJyxcbiAgICAgIGVtb2ppOiAn8J+UlCdcbiAgICB9LFxuICAgIGZhaWw6IHtcbiAgICAgIGxldmVsOiAyLFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiAkeyBpc0Nocm9tZSA/ICczNCcgOiAnMzInIH1weDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZkMWQxKTsgY29sb3I6ICNhNDAwMGY7IGJvcmRlci1jb2xvcjogI2UzYmJiYjtgLFxuICAgICAgdGVybWluYWw6IFsnYmdSZWQnLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2Vycm9yJyxcbiAgICAgIGVtb2ppOiAn4p2MJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiAkeyBpc0Nocm9tZSA/ICcyOScgOiAnMjcnIH1weDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZkMWQxKTsgY29sb3I6ICNhNDAwMGY7IGJvcmRlci1jb2xvcjogI2UzYmJiYjtgLFxuICAgICAgdGVybWluYWw6IFsnYmdSZWQnLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2Vycm9yJyxcbiAgICAgIGVtb2ppOiAn8J+UpSdcbiAgICB9LFxuICAgIGF0dGVudGlvbjoge1xuICAgICAgbGV2ZWw6IDAsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDE1cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2UyYmFmZik7IGNvbG9yOiAjNDgzYzUxOyBib3JkZXItY29sb3I6ICNjMTlmZDk7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ3doaXRlJywnYm9sZCcsJ2JnTWFnZW50YSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/CfjIgnLFxuICAgIH0sXG4gIH0sXG4gIGZpbHRlcnM6IHtcbiAgICBoaWRlQWxsOiBmYWxzZSxcbiAgICBuYW1lc3BhY2U6IHtcbiAgICAgIGhpZGVBbGw6IGZhbHNlLFxuICAgICAgZXhjbHVkZTogW10sXG4gICAgICBpbmNsdWRlOiBbXSxcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBoaWRlQWxsOiBmYWxzZSxcbiAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgaW5jbHVkZTogW10sXG4gICAgfVxuICB9LFxufTtcblxuIiwiZXhwb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzJzsiLCJpbXBvcnQgeyBGdWxjcnVtIH0gZnJvbSAnLi9fY29udHJhY3RzJztcblxuLy8gRGVjbGFyZSB0aGUgR2xvYmFsIHNjb3BlIG9mIHRoZSBlbnZpcm9ubWVudCBmb3IgVHlwZVNjcmlwdFxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAkc2hlZD86IEZ1bGNydW07XG4gICAgQ1NBV19FTlY/OiBzdHJpbmc7XG4gIH1cbiAgbmFtZXNwYWNlIE5vZGVKUyB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBHbG9iYWwge1xuICAgICAgJHNoZWQ/OiBGdWxjcnVtO1xuICAgICAgQ1NBV19FTlY/OiBzdHJpbmc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbnY6IFdpbmRvd3xOb2RlSlMuR2xvYmFsID0gZ2xvYmFsID8gZ2xvYmFsIDogd2luZG93O1xuZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IGNvbnN0IGlzQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpID4gLTE7XG5leHBvcnQgY29uc3QgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSA+IC0xO1xuZXhwb3J0IGNvbnN0IGlzU2FmYXJpID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpID4gLTEgJiYgIWlzQ2hyb21lOyIsImltcG9ydCB7IFNoZWQsIExvZywgTG9nRnVuY3Rpb24gfSBmcm9tICcuL19jb250cmFjdHMnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnLi9nbG9iYWwnO1xuaW1wb3J0IHsgYWR6ZSB9IGZyb20gJy4vYWR6ZSc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi9pbml0aWFsaXplJztcblxuZXhwb3J0IHsgaW5pdGlhbGl6ZSwgU2hlZCwgTG9nLCBMb2dGdW5jdGlvbiB9O1xuXG4vLyBjb25zdCBMb2cgPSBpc0Jyb3dzZXIgPyBMb2dCcm93c2VyIDogTG9nTm9kZTtcbi8vIGV4cG9ydCBjb25zdCBpbms6IEluayA9ICgpID0+IHtcbi8vICAgcmV0dXJuIG5ldyBMb2coKTtcbi8vIH07IiwiaW1wb3J0IGRlZmF1bHRzRGVlcCBmcm9tICdsb2Rhc2guZGVmYXVsdHNkZWVwJztcblxuaW1wb3J0IHsgTG9nLCBMb2dGdW5jdGlvbnMsIENvbmZpZ3VyYXRpb24sIEJhc2VMb2dMZXZlbHMsIEN1c3RvbUxvZ0xldmVscywgTG9nTGV2ZWxEZWZpbml0aW9uIH0gZnJvbSAnLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4vZ2xvYmFsJztcbmltcG9ydCB7IHN0b3JlRXhpc3RzIH0gZnJvbSAnLi9zaGVkJztcbmltcG9ydCB7XG4gIGNvdW50LCBjb3VudFJlc2V0LCBkaXIsIGRpcnhtbCwgdGFibGUsIGFzc2VydCwgdGVzdCxcbiAgZ3JvdXAsIGdyb3VwQ29sbGFwc2VkLCBncm91cEVuZCwgbGFiZWwsIG5hbWVzcGFjZSwgbnMsXG4gIHRyYWNlXG59IGZyb20gJy4vbW9kaWZpZXJzJztcbmltcG9ydCB7IHRpbWUsIHRpbWVOb3csIHRpbWVFbmQsIH0gZnJvbSAnLi9tb2RpZmllcnMvYnJvd3Nlcic7XG5pbXBvcnQgeyBwcmludCwgcHJpbnRMb2cgfSBmcm9tICcuL3ByaW50ZXJzJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xuaW1wb3J0IHsgYXBwbHlNaXhpbnMgfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBiYXNlX2xvZyA9IHtcbiAgdHJhY2VhYmxlOiBmYWxzZSxcbiAgbW9kaWZpZXJRdWV1ZTogW10sXG4gIHByaW50ZXI6IHByaW50TG9nLFxuICBjYWNoZSwgcHJpbnQsIGZpcmVMaXN0ZW5lcnMsIGNvdW50LCBjb3VudFJlc2V0LCBkaXIsIGRpcnhtbCwgdGFibGUsIGFzc2VydCwgdGVzdCxcbiAgZ3JvdXAsIGdyb3VwQ29sbGFwc2VkLCBncm91cEVuZCwgbGFiZWwsIG5hbWVzcGFjZSwgbnMsXG4gIHRyYWNlLCB0aW1lLCB0aW1lTm93LCB0aW1lRW5kLFxufTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvZygpOkxvZyB7XG4vLyAgIC8vIGdlbmVyYXRlIGxvZyBsZXZlbHMuXG4vLyAgIGNvbnN0IHN0YW5kYXJkX2xldmVscyA9IGVudi4kc2hlZD8uY2ZnLmxvZ19sZXZlbHMgPz8gZGVmYXVsdHMubG9nX2xldmVsczsgLy8gRnVsY3J1bSBpcyBhbHJlYWR5IG1lcmdlZCB3aXRoIGRlZmF1bHRzLlxuLy8gICBjb25zdCBjdXN0b21fbGV2ZWxzID0gZW52LiRzaGVkPy5jZmc/LmN1c3RvbV9sZXZlbHMgPz8ge307XG4vLyAgIGNvbnN0IGxldmVscyA9IHsgLi4uZ2VuZXJhdGVMZXZlbHMoc3RhbmRhcmRfbGV2ZWxzKSwgLi4uZ2VuZXJhdGVMZXZlbHMoY3VzdG9tX2xldmVscykgfTtcblxuLy8gICAvLyBDcmVhdGUgYSBsb2cgb2JqZWN0LlxuLy8gICByZXR1cm4gey4uLmJhc2VfbG9nLCAuLi5sZXZlbHN9O1xuLy8gfVxuXG4vLyAtLS0gTGV2ZWxzIC0tLVxuLy8gMC4gYXR0ZW50aW9uXG4vLyAxLiBlcnJvclxuLy8gMi4gZmFpbFxuLy8gMy4gd2FyblxuLy8gNC4gaW5mb1xuLy8gNS4gc3VjY2Vzc1xuLy8gNi4gbG9nXG4vLyA3LiBkZWJ1Z1xuLy8gOC4gdmVyYm9zZVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWc/OiBDb25maWd1cmF0aW9uKTpMb2cge1xuICBpZiAoY29uZmlnICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZnJvbUNvbmZpZyhjb25maWcpO1xuICB9XG4gIHJldHVybiBmcm9tRGVmYXVsdHMoKTtcbn1cblxuZnVuY3Rpb24gZnJvbURlZmF1bHRzKCk6TG9nIHtcbiAgcmV0dXJuIHsgLi4uYmFzZV9sb2csIC4uLmdlbmVyYXRlTGV2ZWxzKGRlZmF1bHRzLmxvZ19sZXZlbHMpIH07XG59XG5cbmZ1bmN0aW9uIGZyb21Db25maWcoY29uZmlnOiBDb25maWd1cmF0aW9uKTpMb2cge1xuICAvLyBnZW5lcmF0ZSBsb2cgbGV2ZWxzLlxuICBjb25zdCBzdGFuZGFyZF9sZXZlbHMgPSBkZWZhdWx0c0RlZXAoY29uZmlnLmxvZ19sZXZlbHMsIGRlZmF1bHRzLmxvZ19sZXZlbHMpIGFzIEJhc2VMb2dMZXZlbHM7IC8vIEZ1bGNydW0gaXMgYWxyZWFkeSBtZXJnZWQgd2l0aCBkZWZhdWx0cy5cbiAgY29uc3QgY3VzdG9tX2xldmVscyA9IGNvbmZpZz8uY3VzdG9tX2xldmVscyA/PyB7fTtcbiAgY29uc3QgbGV2ZWxzID0geyAuLi5nZW5lcmF0ZUxldmVscyhzdGFuZGFyZF9sZXZlbHMpLCAuLi5nZW5lcmF0ZUxldmVscyhjdXN0b21fbGV2ZWxzKSB9O1xuXG4gIHJldHVybiB7IC4uLmJhc2VfbG9nLCAuLi5sZXZlbHMgfTtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIHNldCBvZiBsb2cgbGV2ZWwgZGVmaW5pdGlvbnMgYW5kIGdlbmVyYXRlcyBpbmsgbWV0aG9kcy5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVMZXZlbHMobGV2ZWxzOiBCYXNlTG9nTGV2ZWxzfEN1c3RvbUxvZ0xldmVscyk6TG9nRnVuY3Rpb25zIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGxldmVscykucmVkdWNlKChhY2MsIFsgbGV2ZWxOYW1lLCB7IGxldmVsLCBtZXRob2QsIHN0eWxlLCB0ZXJtaW5hbCwgZW1vamkgfSBdOiBMb2dMZXZlbFR1cGxlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtsZXZlbE5hbWVdKHRoaXM6IExvZywgLi4uYXJnczogYW55W10pOnZvaWQge1xuICAgICAgICBjb25zdCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICBsZXZlbCwgbGV2ZWxOYW1lLCBtZXRob2QsIHN0eWxlLCB0ZXJtaW5hbCwgZW1vamksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kaWZpZXJRdWV1ZS5mb3JFYWNoKGZ1bmMgPT4gZnVuYygpKTtcbiAgICAgICAgdGhpcy5wcmludChkZWYsIGRlZmF1bHRzLmJhc2Vfc3R5bGUsIGFyZ3MpO1xuICAgICAgICB0aGlzLmNhY2hlKGRlZiwgYXJncyk7XG4gICAgICAgIHRoaXMuZmlyZUxpc3RlbmVycyhkZWYsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY2FjaGUodGhpczogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgYXJnczogYW55W10pOnZvaWQge1xuICBpZiAoc3RvcmVFeGlzdHMoZW52LiRzaGVkKSkge1xuICAgIGVudi4kc2hlZC5hZGRUb0NhY2hlKHRoaXMsIGRlZiwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlyZUxpc3RlbmVycyh0aGlzOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBhcmdzOiBhbnlbXSk6dm9pZCB7XG4gIGlmIChzdG9yZUV4aXN0cyhlbnYuJHNoZWQpKSB7XG4gICAgZW52LiRzaGVkLmZpcmVMaXN0ZW5lcnModGhpcywgZGVmLCBhcmdzKTtcbiAgfVxufSIsImV4cG9ydCB7IGdldExhYmVsLCBhZGRMYWJlbCwgaGFzTGFiZWwgfSBmcm9tICcuL2xhYmVsJzsiLCJpbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IHN0b3JlRXhpc3RzIH0gZnJvbSAnLi4vc2hlZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbChuYW1lOiBzdHJpbmcpOkxhYmVsfHVuZGVmaW5lZCB7XG4gIGlmIChzdG9yZUV4aXN0cyhlbnYuJHNoZWQpKSB7XG4gICAgcmV0dXJuIGVudi4kc2hlZC5sYWJlbHMuZ2V0KG5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMYWJlbChsYWJlbDogTGFiZWwpOkxhYmVsIHtcbiAgaWYgKHN0b3JlRXhpc3RzKGVudi4kc2hlZCkgJiYgIWhhc0xhYmVsKGxhYmVsLm5hbWUpKSB7XG4gICAgZW52LiRzaGVkLmxhYmVscy5zZXQobGFiZWwubmFtZSwgbGFiZWwpO1xuICB9XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0xhYmVsKG5hbWU6IHN0cmluZyk6Ym9vbGVhbnx1bmRlZmluZWQge1xuICByZXR1cm4gZW52LiRzaGVkPy5sYWJlbHMuaGFzKG5hbWUpO1xufSIsImV4cG9ydCB7IHRpbWUsIHRpbWVOb3csIHRpbWVFbmQgfSBmcm9tICcuL3RpbWluZyc7IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4uL21vZGlmaWVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWUodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLnRpbWVTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lTm93KHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC50aW1lTm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVFbmQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsICYmIHRoaXMubGFiZWxWYWwudGltZVN0YXJ0KSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLnRpbWVFbGxhcHNlZCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYWJlbFZhbC50aW1lU3RhcnQ7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgPSB0aGlzLmxhYmVsVmFsLmNvdW50ID8/IDA7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ICs9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50UmVzZXQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ID0gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRDbGVhcih0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5pbXBvcnQgeyBwcmludERpciwgcHJpbnREaXJ4bWwsIHByaW50VGFibGUgfSBmcm9tICcuLi9wcmludGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXIodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50RGlyO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcnhtbCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnREaXJ4bWw7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFibGUodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50VGFibGU7XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcbmltcG9ydCB7IHByaW50R3JvdXAsIHByaW50R3JvdXBDb2xsYXBzZWQsIHByaW50R3JvdXBFbmQgfSBmcm9tICcuLi9wcmludGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRHcm91cDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cENvbGxhcHNlZCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRHcm91cENvbGxhcHNlZDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cEVuZCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRHcm91cEVuZDtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBnZXRMYWJlbCwgYWRkTGFiZWwgfSBmcm9tICcuLi9sYWJlbCc7XG5pbXBvcnQgeyBwcmVwZW5kTW9kaWZpZXIsIG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbCh0aGlzOiBMb2csIG5hbWU6IHN0cmluZyk6TG9nIHtcbiAgcmV0dXJuIHByZXBlbmRNb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5sYWJlbFZhbCA9IGFkZExhYmVsKGdldExhYmVsKG5hbWUpID8/IHsgbmFtZSB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2UodGhpczogTG9nLCBuczogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMubmFtZXNwYWNlVmFsID0gbnM7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnModGhpczogTG9nLCBuczogc3RyaW5nKTpMb2cge1xuICByZXR1cm4gdGhpcy5uYW1lc3BhY2UobnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2UodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMubWV0aG9kID0gJ3RyYWNlJztcbiAgfSlcbn0iLCJleHBvcnQgeyBjb3VudCwgY291bnRSZXNldCB9IGZyb20gJy4vY291bnRpbmcnO1xuZXhwb3J0IHsgZGlyLCBkaXJ4bWwsIHRhYmxlIH0gZnJvbSAnLi9mb3JtYXR0aW5nJztcbmV4cG9ydCB7IGdyb3VwLCBncm91cENvbGxhcHNlZCwgZ3JvdXBFbmQgfSBmcm9tICcuL2dyb3VwaW5nJztcbmV4cG9ydCB7IGxhYmVsLCBuYW1lc3BhY2UsIG5zLCB0cmFjZSB9IGZyb20gJy4vaWRlbnRpZnlpbmcnO1xuZXhwb3J0IHsgbW9kaWZpZXIsIHByZXBlbmRNb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuZXhwb3J0IHsgYXNzZXJ0LCB0ZXN0IH0gZnJvbSAnLi90ZXN0aW5nJzsiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmaWVyKGNvbnRleHQ6IExvZywgZnVuYzogRnVuY3Rpb24pOkxvZyB7XG4gIGNvbnRleHQubW9kaWZpZXJRdWV1ZSA9IGNvbnRleHQubW9kaWZpZXJRdWV1ZS5jb25jYXQoW2Z1bmNdKTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIoY29udGV4dDogTG9nLCBmdW5jOiBGdW5jdGlvbik6TG9nIHtcbiAgY29udGV4dC5tb2RpZmllclF1ZXVlID0gW2Z1bmNdLmNvbmNhdChjb250ZXh0Lm1vZGlmaWVyUXVldWUpO1xuICByZXR1cm4gY29udGV4dDtcbn0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IG1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcic7XG5cbi8vIFByaW50cyBsb2cgd2FybmluZyB0aGF0IHRoZSBhc3NlcnRpb24gZmFpbGVkIGlmIGFzc2VydGlvbiBpcyBmYWxzZS5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQodGhpczogTG9nLCBhc3NlcnRpb246IGJvb2xlYW4pOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5hc3NlcnRpb24gPSBhc3NlcnRpb247XG4gIH0pO1xufVxuXG4vLyBOb24tc3RhbmRhcmQuIEFsbG93cyBsb2cgdG8gcHJpbnQgaWYgZXhwcmVzc2lvbiBpcyB0cnVlLlxuZXhwb3J0IGZ1bmN0aW9uIHRlc3QodGhpczogTG9nLCBleHByZXNzaW9uOiBib29sZWFuKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH0pO1xufSIsImV4cG9ydCB7IHByaW50TG9nLCBwcmludEdyb3VwLCBwcmludEdyb3VwQ29sbGFwc2VkIH0gZnJvbSAnLi9wcmludGVycyc7IiwiaW1wb3J0IHsgTG9nLCBMb2dMZXZlbERlZmluaXRpb24gfSBmcm9tICcuLi8uLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XG5pbXBvcnQgeyBpbml0aWFsQ2FwcyB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG4vLyAtLS0tLS0tIFBSSU5UIE1FVEhPRFMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50TG9nKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGJhc2Vfc3R5bGU6IHN0cmluZywgYXJnczogYW55W10pOnZvaWQge1xuICAvLyBNdXN0IGNoZWNrIHRoZSByZXR1cm4gdmFsdWUgb2YgbWV0YSBvdGhlcndpc2UgRkYgcHJpbnRzIFwiZW1wdHkgc3RyaW5nXCIuLi5cbiAgY29uc3QgbWV0YSA9IGZNZXRhKHRoaXMpO1xuICBpZiAobWV0YSA9PT0gJycpIHtcbiAgICBjb25zb2xlW2RlZi5tZXRob2RdKGAke2ZMZWFkZXIoZGVmLCBhcmdzKX1gLCAoYmFzZV9zdHlsZSArIGRlZi5zdHlsZSksIC4uLmFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGVbZGVmLm1ldGhvZF0oYCR7ZkxlYWRlcihkZWYsIGFyZ3MpfWAsIChiYXNlX3N0eWxlICsgZGVmLnN0eWxlKSwgZk1ldGEodGhpcyksIC4uLmFyZ3MpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGJhc2Vfc3R5bGU6IHN0cmluZywgYXJnczogYW55W10pOnZvaWQge1xuICBjb25zb2xlLmdyb3VwKGAke2ZMZWFkZXIoZGVmLCBhcmdzKX1gLCAoYmFzZV9zdHlsZSArIGRlZi5zdHlsZSksIHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJnc1swXSA6IHVuZGVmaW5lZCApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRHcm91cENvbGxhcHNlZCh0aGlzOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBiYXNlX3N0eWxlOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTp2b2lkIHtcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZChgJHtmTGVhZGVyKGRlZiwgYXJncyl9YCwgKGJhc2Vfc3R5bGUgKyBkZWYuc3R5bGUpLCB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3NbMF0gOiB1bmRlZmluZWQgKTtcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBGT1JNQVRURVJTIC0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGZMZWFkZXIoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGFyZ3M6IGFueVtdKTpzdHJpbmcge1xuICByZXR1cm4gYCAlYyR7ZkVtb2ppKGRlZil9ICR7Zk5hbWUoZGVmLmxldmVsTmFtZSl9KCR7YXJncy5sZW5ndGh9KWA7XG59XG5cbmZ1bmN0aW9uIGZFbW9qaShkZWY6IExvZ0xldmVsRGVmaW5pdGlvbik6c3RyaW5nIHtcbiAgcmV0dXJuIGVudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPT09IHRydWUgPyBgICR7ZGVmLmVtb2ppfWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWUobmFtZTogc3RyaW5nfHVuZGVmaW5lZCk6c3RyaW5nIHtcbiAgcmV0dXJuIGluaXRpYWxDYXBzKG5hbWUgPz8gJycpO1xufVxuXG5mdW5jdGlvbiBmTWV0YShjdHh0OiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBgJHtmTmFtZXNwYWNlKGN0eHQpfSR7ZkxhYmVsKGN0eHQpfSR7ZlRpbWUoY3R4dCl9JHtmQ291bnQoY3R4dCl9YDtcbn1cblxuZnVuY3Rpb24gZlRpbWUoY3R4dDogTG9nKTpzdHJpbmcge1xuICBjb25zdCBsYWJlbF90eHQgPSBgJHtjdHh0LmxhYmVsVmFsPy50aW1lTm93ID8/IGN0eHQubGFiZWxWYWw/LnRpbWVFbGxhcHNlZCA/PyAnJ31gO1xuICByZXR1cm4gbGFiZWxfdHh0ICE9PSAnJyA/IGAgKCR7ZW52LiRzaGVkPy5jZmc/LnVzZV9lbW9qaSA/ICfij7EnIDogJyd9JHtsYWJlbF90eHR9KSBgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZDb3VudChjdHh0OiBMb2cpOnN0cmluZyB7XG4gIGNvbnN0IGNvdW50ID0gY3R4dC5sYWJlbFZhbD8uY291bnQ7XG4gIHJldHVybiBjb3VudCAhPT0gdW5kZWZpbmVkID8gYChDb3VudDogJHtjb3VudH0pYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmTmFtZXNwYWNlKGN0eHQ6IExvZyk6c3RyaW5nIHtcbiAgcmV0dXJuIGN0eHQubmFtZXNwYWNlVmFsID8gYCMke2N0eHQubmFtZXNwYWNlVmFsfSBgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZMYWJlbChjdHh0OiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBjdHh0LmxhYmVsVmFsID8gYFske2N0eHQubGFiZWxWYWwubmFtZX1dIGAgOiAnJztcbn0iLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHtcbiAgcHJpbnRMb2cgYXMgcHJpbnRMb2dCLFxuICBwcmludEdyb3VwIGFzIHByaW50R3JvdXBCLFxuICBwcmludEdyb3VwQ29sbGFwc2VkIGFzIHByaW50R3JvdXBDb2xsYXBzZWRCLFxufSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHtcbiAgcHJpbnROb2RlLFxuICBwcmludE5vZGVHcm91cCxcbiAgcHJpbnROb2RlR3JvdXBDb2xsYXBzZWQsXG59IGZyb20gJy4vbm9kZSc7XG5pbXBvcnQge1xuICBwcmludCxcbiAgcHJpbnRHcm91cEVuZCxcbiAgcHJpbnRUYWJsZSxcbiAgcHJpbnREaXIsXG4gIHByaW50RGlyeG1sLFxufSBmcm9tICcuL3NoYXJlZCc7XG5cbmNvbnN0IHByaW50TG9nID0gaXNCcm93c2VyID8gcHJpbnRMb2dCIDogcHJpbnROb2RlO1xuY29uc3QgcHJpbnRHcm91cCA9IGlzQnJvd3NlciA/IHByaW50R3JvdXBCIDogcHJpbnROb2RlR3JvdXA7XG5jb25zdCBwcmludEdyb3VwQ29sbGFwc2VkID0gaXNCcm93c2VyID8gcHJpbnRHcm91cENvbGxhcHNlZEIgOiBwcmludE5vZGVHcm91cENvbGxhcHNlZDtcblxuZXhwb3J0IHtcbiAgcHJpbnQsXG4gIHByaW50TG9nLFxuICBwcmludEdyb3VwLFxuICBwcmludEdyb3VwQ29sbGFwc2VkLFxuICBwcmludEdyb3VwRW5kLFxuICBwcmludFRhYmxlLFxuICBwcmludERpcixcbiAgcHJpbnREaXJ4bWwsXG59OyIsImV4cG9ydCB7IHByaW50Tm9kZSwgcHJpbnROb2RlR3JvdXAsIHByaW50Tm9kZUdyb3VwQ29sbGFwc2VkIH0gZnJvbSAnLi9wcmludGVycyc7IiwiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IExvZywgTG9nTGV2ZWxEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xuaW1wb3J0IHsgaW5pdGlhbENhcHMgfSBmcm9tICcuLi8uLi91dGlsJztcblxuLy8gLS0tLS0tLSBQUklOVCBNRVRIT0RTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludE5vZGUodGhpczogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgYmFzZV9zdHlsZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6dm9pZCB7XG4gIC8vIE11c3QgY2hlY2sgdGhlIHJldHVybiB2YWx1ZSBvZiBtZXRhIG90aGVyd2lzZSBGRiBwcmludHMgXCJlbXB0eSBzdHJpbmdcIi4uLlxuICBjb25zdCBtZXRhID0gZk1ldGEodGhpcyk7XG4gIGlmIChtZXRhID09PSAnJykge1xuICAgIGNvbnNvbGVbZGVmLm1ldGhvZF0oYCR7ZkxlYWRlcihkZWYsIGFyZ3MpfWAsIChiYXNlX3N0eWxlICsgZGVmLnN0eWxlKSwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZVtkZWYubWV0aG9kXShgJHtmTGVhZGVyKGRlZiwgYXJncyl9YCwgKGJhc2Vfc3R5bGUgKyBkZWYuc3R5bGUpLCBmTWV0YSh0aGlzKSwgLi4uYXJncyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50Tm9kZUdyb3VwKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGJhc2Vfc3R5bGU6IHN0cmluZywgYXJnczogYW55W10pOnZvaWQge1xuICBjb25zb2xlLmdyb3VwKGAke2ZMZWFkZXIoZGVmLCBhcmdzKX1gLCAoYmFzZV9zdHlsZSArIGRlZi5zdHlsZSksIHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJnc1swXSA6IHVuZGVmaW5lZCApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnROb2RlR3JvdXBDb2xsYXBzZWQodGhpczogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgYmFzZV9zdHlsZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6dm9pZCB7XG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYCR7ZkxlYWRlcihkZWYsIGFyZ3MpfWAsIChiYXNlX3N0eWxlICsgZGVmLnN0eWxlKSwgdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzWzBdIDogdW5kZWZpbmVkICk7XG59XG5cbi8vIC0tLS0tLS0gUFJJTlQgRk9STUFUVEVSUyAtLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBmTGVhZGVyKGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBhcmdzOiBhbnlbXSk6c3RyaW5nIHtcbiAgcmV0dXJuIGAgJWMke2ZFbW9qaShkZWYpfSAke2ZOYW1lKGRlZi5sZXZlbE5hbWUpfSgke2FyZ3MubGVuZ3RofSlgO1xufVxuXG5mdW5jdGlvbiBmRW1vamkoZGVmOiBMb2dMZXZlbERlZmluaXRpb24pOnN0cmluZyB7XG4gIHJldHVybiBlbnYuJHNoZWQ/LmNmZz8udXNlX2Vtb2ppID09PSB0cnVlID8gYCAke2RlZi5lbW9qaX1gIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZOYW1lKG5hbWU6IHN0cmluZ3x1bmRlZmluZWQpOnN0cmluZyB7XG4gIHJldHVybiBpbml0aWFsQ2FwcyhuYW1lID8/ICcnKTtcbn1cblxuZnVuY3Rpb24gZk1ldGEoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gYCR7Zk5hbWVzcGFjZShjdHh0KX0ke2ZMYWJlbChjdHh0KX0ke2ZUaW1lKGN0eHQpfSR7ZkNvdW50KGN0eHQpfWA7XG59XG5cbmZ1bmN0aW9uIGZUaW1lKGN0eHQ6IExvZyk6c3RyaW5nIHtcbiAgY29uc3QgbGFiZWxfdHh0ID0gYCR7Y3R4dC5sYWJlbFZhbD8udGltZU5vdyA/PyBjdHh0LmxhYmVsVmFsPy50aW1lRWxsYXBzZWQgPz8gJyd9YDtcbiAgcmV0dXJuIGxhYmVsX3R4dCAhPT0gJycgPyBgICgke2Vudi4kc2hlZD8uY2ZnPy51c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmQ291bnQoY3R4dDogTG9nKTpzdHJpbmcge1xuICBjb25zdCBjb3VudCA9IGN0eHQubGFiZWxWYWw/LmNvdW50O1xuICByZXR1cm4gY291bnQgIT09IHVuZGVmaW5lZCA/IGAoQ291bnQ6ICR7Y291bnR9KWAgOiAnJztcbn1cblxuZnVuY3Rpb24gZk5hbWVzcGFjZShjdHh0OiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBjdHh0Lm5hbWVzcGFjZVZhbCA/IGAjJHtjdHh0Lm5hbWVzcGFjZVZhbH0gYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmTGFiZWwoY3R4dDogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gY3R4dC5sYWJlbFZhbCA/IGBbJHtjdHh0LmxhYmVsVmFsLm5hbWV9XSBgIDogJyc7XG59IiwiaW1wb3J0IHsgZW52LCBpc0Jyb3dzZXIgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgTG9nTGV2ZWxEZWZpbml0aW9uLCBMb2cgfSBmcm9tIFwiLi4vX2NvbnRyYWN0c1wiO1xuXG4vLyAtLS0tLS0tIFBSSU5UIEVOVFJZIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludCh0aGlzOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBiYXNlX3N0eWxlOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTp2b2lkIHtcbiAgaWYgKGFsbG93ZWQodGhpcywgZGVmKSkge1xuICAgIHRoaXMucHJpbnRlcihkZWYsIGJhc2Vfc3R5bGUsIGFyZ3MpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0gUFJJTlQgTUVUSE9EUyAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRHcm91cEVuZCh0aGlzOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBiYXNlX3N0eWxlOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTp2b2lkIHtcbiAgY29uc29sZS5ncm91cEVuZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRUYWJsZSh0aGlzOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBiYXNlX3N0eWxlOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTp2b2lkIHtcbiAgY29uc29sZS50YWJsZShhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGlyKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGJhc2Vfc3R5bGU6IHN0cmluZywgYXJnczogYW55W10pOnZvaWQge1xuICBjb25zb2xlLmRpcihhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGlyeG1sKHRoaXM6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIGJhc2Vfc3R5bGU6IHN0cmluZywgYXJnczogYW55W10pOnZvaWQge1xuICBjb25zb2xlLmRpcnhtbChhcmdzKTtcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBIRUxQRVJTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd2VkKGN0eHQ6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24pOmJvb2xlYW4ge1xuICByZXR1cm4gbGV2ZWxBY3RpdmUoZGVmKSAmJiBldmFsUGFzc2VzKGN0eHQpICYmIG5vdFRlc3RFbnYoKTtcblxufVxuXG5mdW5jdGlvbiBsZXZlbEFjdGl2ZShkZWY6IExvZ0xldmVsRGVmaW5pdGlvbik6Ym9vbGVhbiB7XG4gIGlmIChlbnYuJHNoZWQpIHtcbiAgICByZXR1cm4gZGVmLmxldmVsIDw9IGVudi4kc2hlZC5jZmcubG9nX2xldmVsO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBldmFsUGFzc2VzKGN0eHQ6IExvZyk6Ym9vbGVhbiB7XG4gIGlmIChjdHh0LmFzc2VydGlvbiAhPT0gdW5kZWZpbmVkICYmIGN0eHQuZXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IGhhdmUgZGVjbGFyZWQgYm90aCBhbiBhc3NlcnRpb24gYW5kIHRlc3Qgb24gdGhlIHNhbWUgbG9nLiBQbGVhc2Ugb25seSBkZWNsYXJlIG9uZSBvciBuZWZhcmlvdXMgcmVzdWx0cyBtYXkgb2NjdXIuXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChjdHh0LmFzc2VydGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICEoY3R4dC5hc3NlcnRpb24gPT09IGZhbHNlKTtcbiAgfVxuICBpZiAoY3R4dC5leHByZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY3R4dC5leHByZXNzaW9uID09PSB0cnVlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBub3RUZXN0RW52KCk6Ym9vbGVhbiB7XG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZW52ICYmIGVudi5DU0FXX0VOViAhPT0gJ3Rlc3QnO1xufSIsImltcG9ydCBkZWZhdWx0c0RlZXAgZnJvbSAnbG9kYXNoLmRlZmF1bHRzZGVlcCc7XG5pbXBvcnQge1xuICBTaGVkLFxuICBDb25maWd1cmF0aW9uLCBEZWZhdWx0cyxcbiAgTG9nLCBTdG9yZUxvZyxcbiAgQmFzZUxvZ0xldmVscywgQ3VzdG9tTG9nTGV2ZWxzLFxuICBMaXN0ZW5lckRhdGEsIExpc3RlbmVyTG9jYXRpb25zLFxuICBMaXN0ZW5lcnMsIExpc3RlbmVyQ2FsbGJhY2tcbn0gZnJvbSAnLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xuXG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuL2dsb2JhbCc7XG5pbXBvcnQgeyAgfSBmcm9tICcuL19jb250cmFjdHMnO1xuaW1wb3J0IHsgTG9nTGV2ZWxEZWZpbml0aW9uIH0gZnJvbSAnLi9fY29udHJhY3RzL0NvbmZpZ3VyYXRpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVFeGlzdHMoc3RvcmU6IFNoZWR8dW5kZWZpbmVkKTpzdG9yZSBpcyBTaGVkIHtcbiAgcmV0dXJuIHN0b3JlICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoZWQoY29uZmlnOiBDb25maWd1cmF0aW9uKTp2b2lkIHtcbiAgY29uc3QgY2ZnOiBEZWZhdWx0cyA9IGRlZmF1bHRzRGVlcChjb25maWcsIGRlZmF1bHRzKTtcbiAgZW52LiRzaGVkID0ge1xuICAgIGNmZyxcbiAgICBjYWNoZTogW10sXG4gICAgbGFiZWxzOiBuZXcgTWFwKCksXG4gICAgaWRfY291bnRlcjogLTEsXG4gICAgbGlzdGVuZXJzOiBpbml0TGlzdGVuZXJMb2NhdGlvbnMoY2ZnKSxcblxuICAgIGFzc2lnbklkLFxuICAgIGFkZFRvQ2FjaGUsXG4gICAgYWRkTGlzdGVuZXIsXG4gICAgcmVtb3ZlTGlzdGVuZXIsXG4gICAgZmlyZUxpc3RlbmVycyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdExpc3RlbmVyTG9jYXRpb25zKGNmZzogRGVmYXVsdHMpOkxpc3RlbmVycyB7XG4gIGNvbnN0IGxpc3RlbmVyczogTGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuICBPYmplY3QudmFsdWVzKGNmZy5sb2dfbGV2ZWxzKS5mb3JFYWNoKChkZWYpID0+IHtcbiAgICBsaXN0ZW5lcnMuc2V0KGRlZi5sZXZlbCwgbmV3IE1hcCgpKTtcbiAgfSk7XG4gIHJldHVybiBsaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFRvQ2FjaGUodGhpczogU2hlZCwgbG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBhcmdzOiBhbnlbXSk6dm9pZCB7XG4gIGlmICh0aGlzLmNhY2hlLmxlbmd0aCA8IHRoaXMuY2ZnLmxvZ19jYWNoZV9zaXplKSB7XG4gICAgdGhpcy5jYWNoZSA9IHRoaXMuY2FjaGUuY29uY2F0KFtbbG9nLCBkZWYsIGFyZ3NdXSk7XG4gIH1cbn1cblxuLy8gLyoqXG4vLyAgKiBUYWtlcyBhbiBpbnN0YW5jZSBvZiBhIGxvZyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIG9yXG4vLyAgKiBub3QgaXQgc2hvdWxkIGJlIGhpZGRlbiBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyZWQgZ2xvYmFsIGZpbHRlciBydWxlcy4gXG4vLyAgKiBAcGFyYW0gbG9nIEluc3RhbmNlIG9mIGEgbG9nLlxuLy8gICovXG4vLyBwdWJsaWMgZ2xvYmFsRmlsdGVyKGxvZzogTG9nQnJvd3NlcnxMb2dOb2RlKTpib29sZWFuIHtcbi8vICAgaWYgKHRoaXMuYWxsX2hpZGRlbiAmJiBsb2cubmFtZXNwYWNlID09PSBudWxsICYmIGxvZy5MYWJlbCA9PT0gbnVsbCkge1xuLy8gICAgIHJldHVybiB0cnVlO1xuLy8gICB9XG4vLyAgIHJldHVybiB0aGlzLmdsb2JhbEZpbHRlck5hbWVzcGFjZShsb2cpIHx8IHRoaXMuZ2xvYmFsRmlsdGVyTGFiZWwobG9nKTtcbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBUYWtlcyBhbiBpbnN0YW5jZSBvZiBhIGxvZyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIG9yXG4vLyAgKiBub3QgaXQgc2hvdWxkIGJlIGhpZGRlbiBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyZWQgZ2xvYmFsICoqbGFiZWwqKiBmaWx0ZXIgcnVsZXMuIFxuLy8gICogQHBhcmFtIGxvZyBJbnN0YW5jZSBvZiBhIGxvZy5cbi8vICAqL1xuLy8gcHJpdmF0ZSBnbG9iYWxGaWx0ZXJOYW1lc3BhY2UobG9nOiBMb2dCcm93c2VyfExvZ05vZGUpOmJvb2xlYW4ge1xuLy8gICBpZiAobG9nLm5hbWVzcGFjZSkge1xuLy8gICAgIGlmICh0aGlzLmluY2x1ZGVkX25hbWVzcGFjZXMuaW5jbHVkZXMobG9nLm5hbWVzcGFjZSkpIHtcbi8vICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHRoaXMuZXhjbHVkZWRfbmFtZXNwYWNlcy5pbmNsdWRlcyhsb2cubmFtZXNwYWNlKSB8fCB0aGlzLm5hbWVzcGFjZXNfaGlkZGVuID09PSB0cnVlIHx8IHRoaXMuYWxsX2hpZGRlbiA9PT0gdHJ1ZSkge1xuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiBmYWxzZTtcbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBUYWtlcyBhbiBpbnN0YW5jZSBvZiBhIGxvZyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIG9yXG4vLyAgKiBub3QgaXQgc2hvdWxkIGJlIGhpZGRlbiBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyZWQgZ2xvYmFsICoqbmFtZXNwYWNlKiogZmlsdGVyIHJ1bGVzLiBcbi8vICAqIEBwYXJhbSBsb2cgSW5zdGFuY2Ugb2YgYSBsb2cuXG4vLyAgKi9cbi8vIHByaXZhdGUgZ2xvYmFsRmlsdGVyTGFiZWwobG9nOiBMb2dCcm93c2VyfExvZ05vZGUpOmJvb2xlYW4ge1xuLy8gICBpZiAobG9nLkxhYmVsKSB7XG4vLyAgICAgaWYgKHRoaXMuaW5jbHVkZWRfbGFiZWxzLmluY2x1ZGVzKGxvZy5MYWJlbC5uYW1lKSkge1xuLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH1cbi8vICAgICBpZiAodGhpcy5leGNsdWRlZF9sYWJlbHMuaW5jbHVkZXMobG9nLkxhYmVsLm5hbWUpIHx8IHRoaXMubGFiZWxzX2hpZGRlbiA9PT0gdHJ1ZSB8fCB0aGlzLmFsbF9oaWRkZW4gPT09IHRydWUpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKHRoaXM6IFNoZWQsIGxldmVsczogbnVtYmVyW10sIGNiOiBMaXN0ZW5lckNhbGxiYWNrKTpMaXN0ZW5lckxvY2F0aW9ucyB7XG4gIHJldHVybiBsZXZlbHMubWFwKChsdmw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGxldmVsX21hcCA9IHRoaXMubGlzdGVuZXJzLmdldChsdmwpO1xuICAgIGNvbnN0IGlkID0gdGhpcy5hc3NpZ25JZCgpO1xuICAgIGxldmVsX21hcD8uc2V0KGlkLCBjYik7XG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KGx2bCwgbGV2ZWxfbWFwID8/IG5ldyBNYXAoKSk7XG4gICAgcmV0dXJuIFtsdmwsIGlkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHRoaXM6IFNoZWQsIGxvY2F0aW9uczogTGlzdGVuZXJMb2NhdGlvbnMpOnZvaWQge1xuICBsb2NhdGlvbnMuZm9yRWFjaCgoW2x2bF9pZCwgaWRdKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSB0aGlzLmxpc3RlbmVycy5nZXQobHZsX2lkKTtcbiAgICBsZXZlbD8uZGVsZXRlKGlkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnModGhpczogU2hlZCwgY3R4dDogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgYXJnczogYW55W10pOnZvaWQge1xuICB0aGlzLmxpc3RlbmVycy5nZXQoZGVmLmxldmVsKT8uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgbGlzdGVuZXIoeyAuLi5jdHh0LCAuLi5kZWYsIGFyZ3MgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25JZCh0aGlzOiBTaGVkKTpudW1iZXIge1xuICB0aGlzLmlkX2NvdW50ZXIgPSB0aGlzLmlkX2NvdW50ZXIgKyAxOyAvLyBXcml0dGVuIGZvciBjbGFyaXR5XG4gIHJldHVybiB0aGlzLmlkX2NvdW50ZXI7XG59IiwiZXhwb3J0IHsgaW5pdGlhbENhcHMsIGFwcGx5TWl4aW5zIH0gZnJvbSAnLi91dGlsJzsiLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhbENhcHMoc3RyOiBzdHJpbmcpOnN0cmluZyB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU1peGlucyhkZXJpdmVkQ3RvcjogYW55LCBiYXNlQ3RvcnM6IGFueVtdKSB7XG4gIGJhc2VDdG9ycy5mb3JFYWNoKGJhc2VDdG9yID0+IHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgIGRlcml2ZWRDdG9yLnByb3RvdHlwZSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlQ3Rvci5wcm90b3R5cGUsIG5hbWUpID8/ICcnXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
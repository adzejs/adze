const defaultsDeep = require('lodash.defaultsdeep');

import {
  Log, BaseLog, Configuration, LogFunction,
  LogLevels, Defaults,
  LogLevelDefinition, Methods,
} from './_contracts';
import { env } from './global';
import { storeExists } from './shed';
import {
  count, countReset, dir, dirxml, table, assert, test,
  group, groupCollapsed, groupEnd, label, namespace, ns,
  trace
} from './modifiers';
import { time, timeNow, timeEnd, } from './modifiers/browser';
import { print, printLog } from './printers';
import { defaults } from './_defaults';

type LogLevelTuple = [string, LogLevelDefinition|undefined];

// --- Levels ---
// 0. attention
// 1. error
// 2. warn
// 3. info
// 4. fail
// 5. success
// 6. log
// 7. debug
// 8. verbose

export function initialize(user_cfg: Configuration = {}):Log {
  const cfg = defaultsDeep(user_cfg, defaults) as Defaults;
  
  return {
    traceable: false,
    modifierQueue: [],
    printer: printLog,
    attention: logMethod('attention', cfg.log_levels.attention),
    error: logMethod('error', cfg.log_levels.error),
    warn: logMethod('warn', cfg.log_levels.warn),
    info: logMethod('info', cfg.log_levels.info),
    fail: logMethod('fail', cfg.log_levels.fail),
    success: logMethod('success', cfg.log_levels.success),
    log: logMethod('log', cfg.log_levels.log),
    debug: logMethod('debug', cfg.log_levels.debug),
    verbose: logMethod('verbose', cfg.log_levels.verbose),
    custom: custom(cfg.custom_levels),
    cache, print,  fireListeners, count, countReset, dir, dirxml, table, assert, test,
    group, groupCollapsed, groupEnd, label, namespace, ns,
    trace, time, timeNow, timeEnd,
  };
}

function custom(custom_levels: Partial<LogLevels>):LogFunction {
  return function(this: Log, levelName: string, ...args: any[]):void {
    const definition = custom_levels[levelName];
    if (definition) {
      const def: LogLevelDefinition = { ...definition, levelName };
      this.modifierQueue.forEach(func => func());
      this.print(def, defaults.base_style, args);
      this.cache(def, args);
      this.fireListeners(def, args);
    }
  };
};

function cache(this: Log, def: LogLevelDefinition, args: any[]):void {
  if (storeExists(env.$shed)) {
    env.$shed.addToCache(this, def, args);
  }
}

function fireListeners(this: Log, def: LogLevelDefinition, args: any[]):void {
  if (storeExists(env.$shed)) {
    env.$shed.fireListeners(this, def, args);
  }
}

function logMethod(levelName: string, definition: LogLevelDefinition):LogFunction {
  return function(this: Log, ...args: any[]):void {
    const def: LogLevelDefinition = { ...definition, levelName };
    this.modifierQueue.forEach(func => func());
    this.print(def, defaults.base_style, args);
    this.cache(def, args);
    this.fireListeners(def, args);
  };
}
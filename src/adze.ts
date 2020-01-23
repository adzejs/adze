import { Log, BaseLogLevels, CustomLogLevels, LogFunctions, LogLevelDefinition } from './_contracts';
import {
  count, countReset, dir, dirxml, table, assert, test,
  group, groupCollapsed, groupEnd, label, namespace, ns,
  trace
} from './modifiers';
import { time, timeNow, timeEnd, } from './modifiers/browser';
import { env } from './global';
import { defaults } from './_defaults';
import { print, printLog } from './printers';
import { storeExists } from './shed';

type LogLevelTuple = [string, LogLevelDefinition];

const base_log = {
  traceable: false,
  modifierQueue: [],
  printer: printLog,
  cache, print, fireListeners, count, countReset, dir, dirxml, table, assert, test,
  group, groupCollapsed, groupEnd, label, namespace, ns,
  trace, time, timeNow, timeEnd,
};

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

/**
 * The entry function to create a Adze log. Generates an object representing the state of the log and to allow chaining.
 */
export function adze():Log {
  // generate log levels.
  const standard_levels = env.$shed?.cfg.log_levels ?? defaults.log_levels; // Fulcrum is already merged with defaults.
  const custom_levels = env.$shed?.cfg?.custom_levels ?? {};
  const levels = { ...generateLevels(standard_levels), ...generateLevels(custom_levels) };

  // Create a log object.
  return {...base_log, ...levels};
}

/**
 * Takes a set of log level definitions and generates ink methods.
 */
function generateLevels(levels: BaseLogLevels|CustomLogLevels):LogFunctions {
  return Object.entries(levels).reduce((acc, [ levelName, { level, method, style, terminal, emoji } ]: LogLevelTuple) => {
    return {
      ...acc,
      [levelName](this: Log, ...args: any[]):void {
        const def: LogLevelDefinition = {
          level, levelName, method, style, terminal, emoji,
        };
        this.modifierQueue.forEach(func => func());
        this.print(def, defaults.base_style, args);
        this.cache(def, args);
        this.fireListeners(def, args);
      }
    };
  }, {});
}

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
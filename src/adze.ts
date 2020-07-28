const defaultsDeep = require('lodash.defaultsdeep');

import { Log, Configuration, Defaults } from './_contracts';
import { logMethod, customMethod, seal } from './terminators';
import {
  count, countReset, dir, dirxml, table, assert,
  test,  group, groupCollapsed, groupEnd, label,
  namespace, ns, trace, time, timeNow, timeEnd,
} from './modifiers';
import { print, printLog } from './printers';
import { cache, fireListeners } from './events';
import { defaults } from './_defaults';

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
export function adze(user_cfg: Configuration = {}):Log {
  const cfg = defaultsDeep(user_cfg, defaults) as Defaults;

  return {
    cfg,
    traceable: false,
    modifierQueue: [],
    printer: printLog,

    attention:  logMethod(cfg, 'attention'),
    error:      logMethod(cfg, 'error'),
    warn:       logMethod(cfg, 'warn'),
    info:       logMethod(cfg, 'info'),
    fail:       logMethod(cfg, 'fail'),
    success:    logMethod(cfg, 'success'),
    log:        logMethod(cfg, 'log'),
    debug:      logMethod(cfg, 'debug'),
    verbose:    logMethod(cfg, 'verbose'),
    custom:     customMethod(cfg),

    all: () => {},

    seal, print, count, countReset,
    dir, dirxml, table, assert, test, group, groupCollapsed,
    groupEnd, label, namespace, ns, trace, time, timeNow, timeEnd,
  };
}
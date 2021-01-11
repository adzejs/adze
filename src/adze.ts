const defaultsDeep = require('lodash.defaultsdeep');

import { Log, Configuration, Defaults } from '~/_contracts';
import {
  logMethod, customMethod, seal, thread,
  close, clear, clr,
} from '~/terminators';
import {
  count, countReset, dir, dirxml, dump, table, assert,
  test,  group, groupCollapsed, groupEnd, label,
  namespace, ns, trace, time, timeNow, timeEnd,
} from '~/modifiers';
import { printLog } from '~/printers';
import { defaults } from '~/_defaults';

/*
 * Future planned features:
 * 
 * - Select log levels optionally by name in listener creation.
 * - Allow for '*' to select all log levels in listener creation.
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
export function adze(user_cfg: Configuration = {}):Log {
  const cfg = defaultsDeep(user_cfg, defaults) as Defaults;

  return {
    cfg,
    traceable: false,
    dumpContext: false,
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

    seal, count, countReset, thread, dump, close, clear, clr,
    dir, dirxml, table, assert, test, group, groupCollapsed,
    groupEnd, label, namespace, ns, trace, time, timeNow, timeEnd,

    // A shortcut accessor for grabbing the thread context from the label object.
    get context() {
      return this.labelVal?.context;
    }
  };
}
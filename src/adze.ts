import defaultsDeep from 'lodash/defaultsDeep';

import { Log, Configuration, Defaults } from './_contracts';
import {
  logMethod,
  customMethod,
  seal,
  thread,
  close,
  clear,
  clr,
} from './terminators';
import {
  count,
  countReset,
  countClear,
  dir,
  dirxml,
  dump,
  table,
  assert,
  test,
  group,
  groupCollapsed,
  groupEnd,
  label,
  meta,
  namespace,
  silent,
  ns,
  trace,
  time,
  timeNow,
  timeEnd,
} from './modifiers';
import { printLog } from './printers';
import { defaults } from './_defaults';

/*
 * Planned features:
 *
 * - Select log levels optionally by name in listener creation.
 * - Analytics and Reporting support.
 * - Remote server for receiving and analyzing logs.
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
export function adze(user_cfg: Configuration = {}): Log {
  const cfg = defaultsDeep(user_cfg, defaults) as Defaults;
  // Allow the user to attach default meta data that all child logs will inherit.
  const metaData = cfg.meta;

  return {
    // ======================================
    // Data Properties
    // ======================================
    cfg,
    level: null,
    args: null,
    render: null,
    timestamp: null,
    stacktrace: null,
    traceable: false,
    dumpContext: false,
    isSilent: false,
    modifierQueue: [],
    printer: printLog(),
    metaData,

    // ======================================
    // Terminating Methods (return void)
    // ======================================
    attention: logMethod('attention'),
    error: logMethod('error'),
    warn: logMethod('warn'),
    info: logMethod('info'),
    fail: logMethod('fail'),
    success: logMethod('success'),
    log: logMethod('log'),
    debug: logMethod('debug'),
    verbose: logMethod('verbose'),
    custom: customMethod(),
    seal,
    thread,
    close,
    clear,
    clr,

    // ======================================
    // Modifiers that require parameters
    // ======================================
    assert,
    test,
    label,
    meta,
    namespace,
    ns,

    // ==========================================
    // Modifiers that do not require parameters
    // ==========================================
    get dir() {
      return dir(this);
    },

    get dirxml() {
      return dirxml(this);
    },

    get table() {
      return table(this);
    },

    get silent() {
      return silent(this);
    },

    get group() {
      return group(this);
    },

    get groupCollapsed() {
      return groupCollapsed(this);
    },

    get groupEnd() {
      return groupEnd(this);
    },

    get count() {
      return count(this);
    },

    get countReset() {
      return countReset(this);
    },

    get countClear() {
      return countClear(this);
    },

    get dump() {
      return dump(this);
    },

    get trace() {
      return trace(this);
    },

    get time() {
      return time(this);
    },

    get timeNow() {
      return timeNow(this);
    },

    get timeEnd() {
      return timeEnd(this);
    },

    // ======================================
    // Shortcuts
    // ======================================
    get context() {
      return this.labelVal?.context;
    },
  };
}

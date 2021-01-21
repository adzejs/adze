import defaultsDeep from 'lodash.defaultsdeep';

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
 * Future planned features:
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
    cfg,
    traceable: false,
    dumpContext: false,
    isSilent: false,
    modifierQueue: [],
    printer: printLog,
    metaData,

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
    count,
    countReset,
    thread,
    dump,
    close,
    clear,
    clr,
    dir,
    dirxml,
    table,
    assert,
    test,
    group,
    groupCollapsed,
    groupEnd,
    label,
    meta,
    namespace,
    ns,
    silent,
    trace,
    time,
    timeNow,
    timeEnd,

    // A shortcut accessor for grabbing the thread context from the label object.
    get context() {
      return this.labelVal?.context;
    },
  };
}

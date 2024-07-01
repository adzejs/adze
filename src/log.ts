import {
  Configuration,
  Format,
  FormatterConstructor,
  LevelConfig,
  LogData,
  Modifier,
  ModifierData,
  Terminator,
  UserConfiguration,
} from './_types';
import {
  captureTimeNow,
  formatTime,
  getGlobalStore,
  globalContext,
  hrtime,
  isMethodWithArgs,
  stacktrace,
} from './functions';
import { formatISO } from 'date-fns/formatISO';
import {
  getAlertConfig,
  getErrorConfig,
  getWarnConfig,
  getInfoConfig,
  getFailConfig,
  getSuccessConfig,
  getLogConfig,
  getDebugConfig,
  getVerboseConfig,
  defaultConfiguration,
} from './constants';
import PrettyFormatter from './formatters/pretty';

export default class Log {
  /**
   * The global context object.
   */
  private globalContext: Window | typeof globalThis;

  /**
   * The configuration for the adze log.
   */
  private _cfg: Configuration;

  /**
   * Incomplete log data.
   */
  private modifierData: ModifierData;

  /**
   * The log data object.
   */
  private _data?: LogData;

  /**
   * Queue up modifiers to ensure they are in the correct order when executed.
   */
  private modifierQueue: Modifier[] = [];

  constructor(cfg: Partial<Configuration> = {}, modifierData?: ModifierData) {
    this.globalContext = globalContext();
    this.modifierData = modifierData ?? {};
    this._cfg = this.mergeConfiguration(cfg);
  }

  ////////////////////////////////////////////////////////
  // Getters and Setters
  ////////////////////////////////////////////////////////

  public get data(): LogData | undefined {
    return this.data;
  }

  public get configuration(): Configuration {
    return this._cfg;
  }

  ////////////////////////////////////////////////////////
  // Terminators
  ////////////////////////////////////////////////////////

  /**
   * Terminates the log at the *alert* level.
   *
   * **Default Level = "alert" or 0**
   *
   * This level is useful for calling alert to
   * important information and lives at the lowest level.
   *
   * You should use this sparingly since it's level is lower
   * than error.
   *
   * This is a non-standard API.
   */
  public alert(...args: unknown[]): void {
    this.terminate('alert', getAlertConfig(), args);
  }

  /**
   * Terminates the log at the *alert* level.
   *
   * **Default Level = "alert" or 0**
   *
   * This level is useful for calling alert to
   * important information and lives at the lowest level.
   *
   * You should use this sparingly since it's level is lower
   * than error.
   *
   * This is a non-standard API.
   */
  public static alert(...args: unknown[]): void {
    return new Log().alert(...args);
  }

  /**
   * Terminates the log at the *error* level.
   *
   * **Default Level = "error" or 1**
   *
   * Use this for logging fatal errors or errors that
   * impact functionality of your application.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)
   */
  public error(...args: unknown[]): void {
    this.terminate('error', getErrorConfig(), args);
  }

  /**
   * Terminates the log at the *error* level.
   *
   * **Default Level = "error" or 1**
   *
   * Use this for logging fatal errors or errors that
   * impact functionality of your application.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)
   */
  public static error(...args: unknown[]): void {
    return new Log().error(...args);
  }

  /**
   * Terminates the log at the *warning* level.
   *
   * **Default Level = "warn" or 2**
   *
   * Use this for logging issues that may impact
   * app performance in a less impactful way than
   * an error.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/warn)
   */
  public warn(...args: unknown[]): void {
    this.terminate('warn', getWarnConfig(), args);
  }

  /**
   * Terminates the log at the *warning* level.
   *
   * **Default Level = "warn" or 2**
   *
   * Use this for logging issues that may impact
   * app performance in a less impactful way than
   * an error.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/warn)
   */
  public static warn(...args: unknown[]): void {
    return new Log().warn(...args);
  }

  /**
   * Terminates the log at the *info* level.
   *
   * **Default Level = "info" or 3**
   *
   * Use this for logging general insights into your
   * application. This level does not indicate any
   * problems.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/info)
   */
  public info(...args: unknown[]): void {
    this.terminate('info', getInfoConfig(), args);
  }

  /**
   * Terminates the log at the *info* level.
   *
   * **Default Level = "info" or 3**
   *
   * Use this for logging general insights into your
   * application. This level does not indicate any
   * problems.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/info)
   */
  public static info(...args: unknown[]): void {
    return new Log().info(...args);
  }

  /**
   * Terminates the log at the *fail* level.
   *
   * **Default Level = "fail" or 4**
   *
   * Use this for logging network communication errors
   * that do not break your application.
   *
   * This is a non-standard API.
   */
  public fail(...args: unknown[]): void {
    this.terminate('fail', getFailConfig(), args);
  }

  /**
   * Terminates the log at the *fail* level.
   *
   * **Default Level = "fail" or 4**
   *
   * Use this for logging network communication errors
   * that do not break your application.
   *
   * This is a non-standard API.
   */
  public static fail(...args: unknown[]): void {
    return new Log().fail(...args);
  }

  /**
   * Terminates the log at the *success* level.
   *
   * **Default Level = "success" or 5**
   *
   * Use this for logging successful network communication.
   *
   * This is a non-standard API.
   */
  public success(...args: unknown[]): void {
    this.terminate('success', getSuccessConfig(), args);
  }

  /**
   * Terminates the log at the *success* level.
   *
   * **Default Level = "success" or 5**
   *
   * Use this for logging successful network communication.
   *
   * This is a non-standard API.
   */
  public static success(...args: unknown[]): void {
    return new Log().success(...args);
  }

  /**
   * Terminates the log at the *log* level.
   *
   * **Default Level = "log" or 6**
   *
   * Use this for general logging that doesn't apply
   * to any of the lower levels.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
   */
  public log(...args: unknown[]): void {
    this.terminate('log', getLogConfig(), args);
  }

  /**
   * Terminates the log at the *log* level.
   *
   * **Default Level = "log" or 6**
   *
   * Use this for general logging that doesn't apply
   * to any of the lower levels.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
   */
  public static log(...args: unknown[]): void {
    return new Log().log(...args);
  }

  /**
   * Terminates the log at the *log* level.
   *
   * **Default Level = "debug" or 7**
   *
   * Use this for general logging that doesn't apply
   * to any of the lower levels.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
   */
  public debug(...args: unknown[]): void {
    this.terminate('debug', getDebugConfig(), args);
  }

  /**
   * Terminates the log at the *log* level.
   *
   * **Default Level = "debug" or 7**
   *
   * Use this for general logging that doesn't apply
   * to any of the lower levels.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
   */
  public static debug(...args: unknown[]): void {
    return new Log().debug(...args);
  }

  /**
   * Terminates the log at the *verbose* level.
   *
   * **Default Level = "verbose" or 8**
   *
   * Use this for logging extremely detailed debugging
   * information. Use this level when the values you are
   * logging are granular enough that they are no longer
   * easily human readable.
   *
   * This is a non-standard API.
   */
  public verbose(...args: unknown[]): void {
    this.terminate('verbose', getVerboseConfig(), args);
  }

  /**
   * Terminates the log at the *verbose* level.
   *
   * **Default Level = "verbose" or 8**
   *
   * Use this for logging extremely detailed debugging
   * information. Use this level when the values you are
   * logging are granular enough that they are no longer
   * easily human readable.
   *
   * This is a non-standard API.
   */
  public static verbose(...args: unknown[]): void {
    return new Log().verbose(...args);
  }

  /**
   * Seals the configuration of a log and returns a function that
   * constructs a new log with the same configuration.
   *
   * **Example:**
   * ```javascript
   * const sealed = adze.withEmoji.ns('sealed').label('sealed-label').seal();
   * sealed.success('Success!'); // -> prints "#sealed [sealed-label] Success!"
   * sealed.log('Another log.'); // -> prints "#sealed [sealed-label] Another log."
   * ```
   */
  public seal(cfg?: UserConfiguration): Log {
    this.runModifierQueue();
    this._cfg = this.mergeConfiguration({ ...this._cfg, ...cfg });
    return new Log(structuredClone(this._cfg), structuredClone(this.modifierData));
  }

  /**
   * Seals the configuration of a log and returns a function that
   * constructs a new log with the same configuration.
   *
   * **Example:**
   * ```javascript
   * const sealed = adze.withEmoji.ns('sealed').label('sealed-label').seal();
   * sealed.success('Success!'); // -> prints "#sealed [sealed-label] Success!"
   * sealed.log('Another log.'); // -> prints "#sealed [sealed-label] Another log."
   * ```
   */
  public static seal(cfg?: UserConfiguration): Log {
    return new Log().seal(cfg);
  }

  ////////////////////////////////////////////////////////
  // Modifiers
  ////////////////////////////////////////////////////////

  /**
   * Generates a log message if the provided expression is falsey.
   */
  public assert(expression: boolean): Log {
    this.modifierQueue.push((data) => {
      data.assertion = expression;
      return data;
    });
    return this;
  }

  /**
   * Generates a log message if the provided expression is falsey.
   */
  public static assert(expression: boolean): Log {
    return new Log().assert(expression);
  }

  /**
   * Configures the log instance. This is useful for applying many configuration values at once
   * rather than calling each modifier individually.
   */
  public configure(cfg: UserConfiguration): Log {
    this.modifierQueue.unshift((data) => {
      this._cfg = this.mergeConfiguration(cfg);
      return data;
    });
    return this;
  }

  /**
   * Configures the log instance. This is useful for applying many configuration values at once
   * rather than calling each modifier individually.
   */
  public static configure(cfg: UserConfiguration): Log {
    return new Log().configure(cfg);
  }

  /**
   * Alias for the `configure` method.
   *
   * Configures the log instance. This is useful for applying many configuration values at once
   * rather than calling each modifier individually.
   */
  public cfg(cfg: UserConfiguration): Log {
    return this.configure(cfg);
  }

  /**
   * Alias for the `configure` method.
   *
   * Configures the log instance. This is useful for applying many configuration values at once
   * rather than calling each modifier individually.
   */
  public static cfg(cfg: UserConfiguration): Log {
    return new Log().configure(cfg);
  }

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public get count(): Log {
    this.modifierQueue.push((data) => {
      if (data.label) {
        data.label.count = data.label.count !== undefined ? data.label.count + 1 : 1;
      }
      return data;
    });
    return this;
  }

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public static get count(): Log {
    return new Log().count;
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public get countClear(): Log {
    this.modifierQueue.push((data) => {
      if (data.label) {
        delete data.label.count;
      }
      return data;
    });
    return this;
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public static get countClear(): Log {
    return new Log().countClear;
  }

  /**
   * Resets the count for the log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public get countReset(): Log {
    this.modifierQueue.push((data) => {
      if (data.label) {
        data.label.count = 0;
      }
      return data;
    });
    return this;
  }

  /**
   * Resets the count for the log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public static get countReset(): Log {
    return new Log().countReset;
  }

  /**
   * Instructs this log to print in the dir format. Typically this is useful
   * for rendering deeply nested objects in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
   */
  public get dir(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'dir';
      return data;
    });
    return this;
  }

  /**
   * Instructs this log to print in the dir format. Typically this is useful
   * for rendering deeply nested objects in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
   */
  public static get dir(): Log {
    return new Log().dir;
  }

  /**
   * Instructs this log to print in the dirxml format. Typically this is useful
   * for rendering HTML/DOM or XML Elements in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
   */
  public get dirxml(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'dirxml';
      return data;
    });
    return this;
  }

  /**
   * Instructs this log to print in the dirxml format. Typically this is useful
   * for rendering HTML/DOM or XML Elements in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
   */
  public static get dirxml(): Log {
    return new Log().dirxml;
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   *
   * This is a non-standard API.
   */
  public get dump(): Log {
    this.modifierQueue.push((data) => {
      this._cfg.dump = true;
      return data;
    });
    return this;
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   *
   * This is a non-standard API.
   */
  public static get dump(): Log {
    return new Log().dump;
  }

  /**
   * Instructs the logger to print according to the provided format.
   *
   * This is a non-standard API.
   */
  public format(format: Format): Log {
    this.modifierQueue.push((data) => {
      this._cfg.format = format;
      return data;
    });
    return this;
  }

  /**
   * Instructs the logger to print according to the provided format.
   *
   * This is a non-standard API.
   */
  public static format(format: Format): Log {
    return new Log().format(format);
  }

  /**
   * Instructs the logger to print with the pretty human-readable format.
   *
   * This is a non-standard API.
   */
  public get pretty(): Log {
    this.modifierQueue.push((data) => {
      this._cfg.format = 'pretty';
      return data;
    });
    return this;
  }

  /**
   * Instructs the logger to print with a pretty human-readable format.
   *
   * This is a non-standard API.
   */
  public static get pretty(): Log {
    return new Log().pretty;
  }

  /**
   * Instructs the logger to print in the Common Log format.
   *
   * [https://en.wikipedia.org/wiki/Common_Log_Format](https://en.wikipedia.org/wiki/Common_Log_Format)
   *
   * This is a non-standard API.
   */
  public get common(): Log {
    this.modifierQueue.push((data) => {
      this._cfg.format = 'common';
      return data;
    });
    return this;
  }

  /**
   * Instructs the logger to print in the Common Log format.
   *
   * [https://en.wikipedia.org/wiki/Common_Log_Format](https://en.wikipedia.org/wiki/Common_Log_Format)
   *
   * This is a non-standard API.
   */
  public static get common(): Log {
    return new Log().common;
  }

  /**
   * Instructs the logger to format logs as JSON messages. This format follows the Bunyan library's
   * logging conventions.
   *
   * [https://github.com/trentm/node-bunyan?tab=readme-ov-file#log-record-fields](https://github.com/trentm/node-bunyan?tab=readme-ov-file#log-record-fields)
   *
   * This is a non-standard API.
   */
  public get json(): Log {
    this.modifierQueue.push((data) => {
      this._cfg.format = 'json';
      return data;
    });
    return this;
  }

  /**
   * Instructs the logger to format logs as JSON messages. This format follows the Bunyan library's
   * logging conventions.
   *
   * [https://github.com/trentm/node-bunyan?tab=readme-ov-file#log-record-fields](https://github.com/trentm/node-bunyan?tab=readme-ov-file#log-record-fields)
   *
   * This is a non-standard API.
   */
  public static get json(): Log {
    return new Log().json;
  }

  /**
   * Starts a log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
   */
  public get group(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'group';
      return data;
    });
    return this;
  }

  /**
   * Starts a log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
   */
  public static get group(): Log {
    return new Log().group;
  }

  /**
   * Starts a log group that is collapsed by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
   */
  public get groupCollapsed(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'groupCollapsed';
      return data;
    });
    return this;
  }

  /**
   * Starts a log group that is collapsed by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
   */
  public static get groupCollapsed(): Log {
    return new Log().groupCollapsed;
  }

  /**
   * Ends the most recently opened log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
   */
  public get groupEnd(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'groupEnd';
      return data;
    });
    return this;
  }

  /**
   * Ends the most recently opened log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
   */
  public static get groupEnd(): Log {
    return new Log().groupEnd;
  }

  /**
   * Generates a log message if the provided expression is truthy.
   *
   * This is a non-standard API.
   */
  public if(expression: boolean): Log {
    this.modifierQueue.push((data) => {
      data.if = expression;
      return data;
    });
    return this;
  }

  /**
   * Generates a log message if the provided expression is truthy.
   *
   * This is a non-standard API.
   */
  public static if(expression: boolean): Log {
    return new Log().if(expression);
  }

  /**
   * DEPRECATED: Use the equivalent `if` method instead.
   *
   * @deprecated
   */
  public test(expression: boolean): Log {
    return this.if(expression);
  }

  /**
   * DEPRECATED: Use the equivalent `if` method instead.
   *
   * @deprecated
   */
  public static test(expression: boolean): Log {
    return new Log().if(expression);
  }

  /**
   * Adds a label to the log. Label's can be used for log identification
   * and grouping. Label's also link log instances together.
   *
   * This is a non-standard API, but it replaces the need to provide
   * a label to methods that require a global identifier for tracking purposes.
   */
  public label(name: string): Log {
    // prepend the modifier queue
    this.modifierQueue.unshift((data) => {
      const globalStore = getGlobalStore(this.globalContext);
      if (globalStore) {
        const label = globalStore.getLabel(name) ?? { name };
        data.label = label;
        globalStore.setLabel(name, label);
      }
      return data;
    });
    return this;
  }

  /**
   * Adds a label to the log. Label's can be used for log identification
   * and grouping. Label's also link log instances together.
   *
   * This is a non-standard API, but it replaces the need to provide
   * a label to methods that require a global identifier for tracking purposes.
   */
  public static label(name: string): Log {
    return new Log().label(name);
  }

  /**
   * Assign meta data to this log instance that is meant to be
   * retrievable in a log listener or from a `log.data()` dump.
   *
   * This is a non-standard API.
   */
  public meta(meta: Record<string, unknown>): Log {
    this.modifierQueue.push((data) => {
      data.meta = meta;
      return data;
    });
    return this;
  }

  /**
   * Assign meta data to this log instance that is meant to be
   * retrievable in a log listener or from a `log.data()` dump.
   *
   * This is a non-standard API.
   */
  public static meta(meta: Record<string, unknown>): Log {
    return new Log().meta(meta);
  }

  /**
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together. Multiple calls to namespace are
   * additive in nature.
   *
   * This is a non-standard API.
   */
  public namespace(...namespace: string[]): Log {
    this.modifierQueue.push((data) => {
      let arr = data.namespace ?? [];
      data.namespace = arr.length > 0 ? [...arr, ...namespace] : namespace;
      return data;
    });
    return this;
  }

  /**
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together. Multiple calls to namespace are
   * additive in nature.
   *
   * This is a non-standard API.
   */
  public static namespace(...namespace: string[]): Log {
    return new Log().namespace(...namespace);
  }

  /**
   * Alias for the `namespace` modifier.
   *
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together. Multiple calls to namespace are
   * additive in nature.
   *
   * This is a non-standard API.
   */
  public ns(...namespace: string[]): Log {
    return this.namespace(...namespace);
  }

  /**
   * Alias for the `namespace` modifier.
   *
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together. Multiple calls to namespace are
   * additive in nature.
   *
   * This is a non-standard API.
   */
  public static ns(...namespace: string[]): Log {
    return new Log().namespace(...namespace);
  }

  /**
   * This modifier prevents the log from printing. It can still be picked up by middleware or
   * listeners.
   */
  public get silent(): Log {
    this.modifierQueue.push((data) => {
      this._cfg.silent = true;
      return data;
    });
    return this;
  }

  /**
   * This modifier prevents the log from printing. It can still be picked up by middleware or
   * listeners.
   */
  public static get silent(): Log {
    return new Log().silent;
  }

  /**
   * Instructs this log to print its argument in a table format.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
   */
  public get table(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'table';
      return data;
    });
    return this;
  }

  /**
   * Instructs this log to print its argument in a table format.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
   */
  public static get table(): Log {
    return new Log().table;
  }

  /**
   * Starts a timer associated with this log's *label*. This will do nothing if
   * this log has no label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
   */
  public get time(): Log {
    this.modifierQueue.push((data) => {
      const timeStart = hrtime();
      if (data.label) {
        data.label.timeStart = timeStart;
      }
      return data;
    });
    return this;
  }

  /**
   * Starts a timer associated with this log's *label*. This will do nothing if
   * this log has no label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
   */
  public static get time(): Log {
    return new Log().time;
  }

  /**
   * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the
   * difference between the start time and when this method was called. This then
   * modifies the log render to show the time difference. This will do nothing if the *label* does
   * not exist.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
   */
  public get timeEnd(): Log {
    this.modifierQueue.push((data) => {
      if (data.label && data.label?.timeStart) {
        data.label.timeElapsed = formatTime(hrtime(data.label.timeStart));
      }
      return data;
    });
    return this;
  }

  /**
   * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the
   * difference between the start time and when this method was called. This then
   * modifies the log render to show the time difference. This will do nothing if the *label* does
   * not exist.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
   */
  public static get timeEnd(): Log {
    return new Log().timeEnd;
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public get timeNow(): Log {
    this.modifierQueue.push((data) => {
      data.timeNow = captureTimeNow();
      return data;
    });
    return this;
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public static get timeNow(): Log {
    return new Log().timeNow;
  }

  /**
   * This modifier method tells the log to render a timestamp.
   *
   * This is a non-standard API.
   */
  public get timestamp(): Log {
    this.modifierQueue.push((data) => {
      this._cfg.showTimestamp = true;
      return data;
    });
    return this;
  }

  /**
   * This modifier method tells the log to render a timestamp.
   *
   * This is a non-standard API.
   */
  public static get timestamp(): Log {
    return new Log().timestamp;
  }

  /**
   * Prints a stacktrace along with the log. This does not use the standard "trace" method but
   * derives the stacktrace from the current call stack and appends it to your log.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
   */
  public get trace(): Log {
    this.modifierQueue.push((data) => {
      data.stacktrace = stacktrace();
      return data;
    });
    return this;
  }

  /**
   * Prints a stacktrace along with the log. This does not use the standard "trace" method but
   * derives the stacktrace from the current call stack and appends it to your log.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
   */
  public static get trace(): Log {
    return new Log().trace;
  }

  /**
   * Allows emoji's to be printed in pretty logs.
   */
  public get withEmoji(): Log {
    this.modifierQueue.push((data) => {
      this._cfg.withEmoji = true;
      return data;
    });
    return this;
  }

  /**
   * Allows emoji's to be printed in pretty logs.
   */
  public static get withEmoji(): Log {
    return new Log().withEmoji;
  }

  ////////////////////////////////////////////////////////
  // Private Methods
  ////////////////////////////////////////////////////////

  private terminate(terminator: Terminator, level: LevelConfig, args: unknown[]): void {
    // Generate the timestamp
    const timestamp = formatISO(new Date());

    // Get the log formatter
    const formatter = this.selectFormatter(this._cfg.format);

    // Run the modifier queue to modify the data object.
    this.runModifierQueue();

    // call beforeTerminated hook

    // Create our final log data object
    const data: LogData = {
      ...level,
      ...this.modifierData,
      terminator,
      args,
      timestamp,
      message: new formatter(this._cfg, level).print(this.modifierData, timestamp, args),
    };

    // save the data to this instance
    this._data = data;

    // Don't print if the message is empty.
    if (data.message.length === 0) return;

    if (isMethodWithArgs(data.method)) {
      console[data.method](...data.message);
    } else {
      console[data.method]();
    }

    // console.debug('CFG', this._cfg);
    // console.debug('DATA', data);
    // call terminated hook
  }

  /**
   * Returns a formatter constructor based on the provided format.
   */
  private selectFormatter(format: Format): FormatterConstructor {
    switch (format) {
      case 'pretty':
        return PrettyFormatter;
      case 'prettyEmoji':
        return PrettyFormatter;
      case 'json':
        return PrettyFormatter;
      case 'common':
        return PrettyFormatter;
      default:
        return PrettyFormatter;
    }
  }

  /**
   * Merge the user configuration with the default configuration and the global configuration.
   */
  private mergeConfiguration(cfg?: UserConfiguration): Configuration {
    return {
      ...defaultConfiguration,
      ...cfg,
      ...this.globalContext?.$adzeGlobal?.configuration,
    };
  }

  /**
   * Runs the modifier queue against this instance.
   */
  private runModifierQueue(): void {
    this.modifierQueue.forEach((modifier) => {
      this.modifierData = modifier(this.modifierData);
    });
  }
}

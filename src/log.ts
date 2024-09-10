import {
  DefaultTerminatorMethod,
  FormatterConstructor,
  LevelConfiguration,
  LogData,
  LogListener,
  Modifier,
  ModifierData,
  UserConfiguration,
  TableData,
} from './_types';
import AdzeGlobal from './adze-global';
import { Configuration } from './configuration';
import {
  captureTimeNow,
  formatTime,
  setup,
  hrtime,
  isMethodWithArgs,
  stacktrace,
  cleanMessage,
  isTestEnvironment,
  SealedLog,
} from './functions';
import { Middleware } from './middleware';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isCallback(maybeFunction: unknown): maybeFunction is (...args: any[]) => void {
  return typeof maybeFunction === 'function';
}

export default class Log<N extends string = string, Msg = unknown> {
  /**
   * The global context object.
   */
  private globalStore: AdzeGlobal;

  /**
   * The configuration for the adze log.
   */
  private _cfg: Configuration;

  /**
   * Incomplete log data.
   */
  private _modifierData: ModifierData;

  /**
   * The log data object.
   */
  private _data?: LogData;

  /**
   * Queue up modifiers to ensure they are in the correct order when executed.
   */
  private modifierQueue: Modifier[] = [];

  constructor(cfg: UserConfiguration = {}, modifierData?: ModifierData) {
    this.globalStore = setup(cfg);
    this._modifierData = modifierData ?? {};
    this._cfg = new Configuration(cfg);
    this.doHook((m) => {
      if (m.constructed) m.constructed(this);
    });
  }

  ////////////////////////////////////////////////////////
  // Getters and Setters
  ////////////////////////////////////////////////////////

  public get data(): LogData | undefined {
    return this._data;
  }

  public get modifierData(): ModifierData {
    return this._modifierData;
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
  public alert(...args: []): void;
  public alert(...args: [Msg, ...unknown[]]): void;
  public alert(...args: unknown[]): void {
    this.terminate('alert', args);
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
  public static alert<M extends string>(...args: [M, ...unknown[]]): void {
    new this().alert(...args);
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
  public error(...args: []): void;
  public error(...args: [Msg, ...unknown[]]): void;
  public error(...args: unknown[]): void {
    this.terminate('error', args);
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
  public static error<M extends string>(...args: [M, ...unknown[]]): void {
    new this().error(...args);
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
  public warn(...args: []): void;
  public warn(...args: [Msg, ...unknown[]]): void;
  public warn(...args: unknown[]): void {
    this.terminate('warn', args);
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
  public static warn<M extends string>(...args: [M, ...unknown[]]): void {
    new this().warn(...args);
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
  public info(...args: []): void;
  public info(...args: [Msg, ...unknown[]]): void;
  public info(...args: unknown[]): void {
    this.terminate('info', args);
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
  public static info<M extends string>(...args: [M, ...unknown[]]): void {
    new this().info(...args);
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
  public fail(...args: []): void;
  public fail(...args: [Msg, ...unknown[]]): void;
  public fail(...args: unknown[]): void {
    this.terminate('fail', args);
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
  public static fail<M extends string>(...args: [M, ...unknown[]]): void {
    new this().fail(...args);
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
  public success(...args: []): void;
  public success(...args: [Msg, ...unknown[]]): void;
  public success(...args: unknown[]): void {
    this.terminate('success', args);
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
  public static success<M>(...args: [M, ...unknown[]]): void {
    new this().success(...args);
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
  public log(...args: []): void;
  public log(...args: [Msg, ...unknown[]]): void;
  public log(...args: unknown[]): void {
    this.terminate('log', args);
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
  public static log<M>(args_0: M, ...args: unknown[]): void {
    new this().log(...[args_0, ...args]);
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
  public debug(...args: []): void;
  public debug(...args: [Msg, ...unknown[]]): void;
  public debug(...args: unknown[]): void {
    this.terminate('debug', args);
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
  public static debug<M extends string>(...args: [M, ...unknown[]]): void {
    new this().debug(...args);
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
  public verbose(...args: []): void;
  public verbose(...args: [Msg, ...unknown[]]): void;
  public verbose(...args: unknown[]): void {
    this.terminate('verbose', args);
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
  public static verbose<M extends string>(...args: [M, ...unknown[]]): void {
    new this().verbose(...args);
  }

  /**
   * Clears the console.
   *
   * This terminator simply exists as an alias for `console.clear()`.
   */
  public clear(): void {
    console.clear();
  }

  /**
   * Clears the console.
   *
   * This terminator simply exists as an alias for `console.clear()`.
   */
  public static clear(): void {
    console.clear();
  }

  /**
   * Alias for `clear()`. Clears the console.
   *
   * This terminator simply exists as an alias for `console.clear()`.
   */
  public clr(): void {
    console.clear();
  }

  /**
   * Alias for `clear()`. Clears the console.
   *
   * This terminator simply exists as an alias for `console.clear()`.
   */
  public static clr(): void {
    console.clear();
  }

  /**
   * Terminates the log at the provided custom log level. Custom log levels are defined within the
   * Adze configuration object under the levels property.
   */
  public custom<M extends string>(levelName: string, ...args: [M, ...unknown[]]): this {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!this._cfg.levels[levelName]) {
      console.warn(new Error('Custom log level not found in configuration.'));
      return this;
    }
    this.terminate(levelName, args);
    return this;
  }

  /**
   * Terminates the log at the provided custom log level. Custom log levels are defined within the
   * Adze configuration object under the levels property.
   */
  public static custom<M extends string>(levelName: string, ...args: [M, ...unknown[]]): Log {
    return new this().custom(levelName, ...args);
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
  public seal<N extends string = string, M = unknown>(cfg?: UserConfiguration) {
    this._cfg = new Configuration({ ...this._cfg.exportValues(), ...cfg });
    return SealedLog<N, M>(Log<N, M>, this._cfg, this.modifierData, this.modifierQueue);
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
  public static seal<N extends string = string>(cfg?: UserConfiguration) {
    return new this().seal<N>(cfg);
  }

  /**
   * Seals the configuration of a log and returns a template string tag function.
   *
   * Example:
   *
   * ```typescript
   * const ERR = adze.ns('foo').sealTag('error');
   * ERR`This is an error message.`; // => prints "Error #foo This is an error message."
   * ```
   */
  public sealTag<T extends DefaultTerminatorMethod = DefaultTerminatorMethod>(
    method: T,
    cfg?: UserConfiguration
  ) {
    this._cfg = new Configuration({ ...this._cfg.exportValues(), ...cfg });
    return (strings: TemplateStringsArray, ...values: string[]) => {
      const message = String.raw({ raw: strings }, ...values);
      const sealed = SealedLog(Log<N, Msg>, this._cfg, this.modifierData, this.modifierQueue);
      const _method: keyof typeof sealed = method;
      if (isCallback(sealed[_method])) {
        sealed[_method](message);
      }
    };
  }

  /**
   * Seals the configuration of a log and returns a template string tag function.
   *
   * Example:
   *
   * ```typescript
   * const ERR = adze.ns('foo').sealTag('error');
   * ERR`This is an error message.`; // => prints "Error #foo This is an error message."
   * ```
   */
  public static sealTag<T extends DefaultTerminatorMethod = DefaultTerminatorMethod>(
    method: T,
    cfg?: UserConfiguration
  ) {
    return new this().sealTag(method, cfg);
  }

  /**
   * Following the MDC (Mapped Diagnostic Context) pattern, this method enables you to create a
   * thread for adding context from different scopes before finally terminating the log.
   *
   * In order to create a thread, this log must specify a label. The label identifies the shared
   * context that other logs in your thread can contribute to.
   *
   * Example:
   *
   * ```typescript
   * function add(a: number, b: number) {
   *   const answer = a + b;
   *   adze.label('maths').thread('added', { a, b, answer });
   *   return answer;
   * }
   *
   * function subtract(x: number, y: number) {
   *   const answer = x - y;
   *   adze.label('maths').thread('subtracted', { x, y, answer });
   *   return answer;
   * }
   *
   * add(1, 2);
   * subtract(4, 3);
   *
   * adze.label('maths').dump.info('Results from our thread');
   * // => prints the log with the context values from both thread logs applied.
   * ```
   */
  public thread<T>(key: string, value: T): void {
    this.runModifierQueue();
    if (this._modifierData.label) {
      if (!this._modifierData.label.context) this._modifierData.label.context = {};
      this._modifierData.label.context = { ...this._modifierData.label.context, [key]: value };
    }
  }

  /**
   * Following the MDC (Mapped Diagnostic Context) pattern, this method enables you to create a
   * thread for adding context from different scopes before finally terminating the log.
   *
   * In order to create a thread, this log must specify a label. The label identifies the shared
   * context that other logs in your thread can contribute to.
   *
   * Example:
   *
   * ```typescript
   * function add(a, b) {
   *   const answer = a + b;
   *   adze.label('foo').thread('added', { a, b, answer });
   *   return answer;
   * }
   *
   * function subtract(x, y) {
   *   const answer = x - y;
   *   adze.label('foo').thread('subtracted', { x, y, answer });
   *   return answer;
   * }
   *
   * add(1, 2);
   * subtract(4, 3);
   *
   * adze.label('foo').dump.info('Results from our thread');
   * // => prints the log with the context values from both thread logs applied.
   * ```
   */
  public static thread<T>(key: string, value: T): void {
    new this().thread(key, value);
  }

  ////////////////////////////////////////////////////////
  // Modifiers
  ////////////////////////////////////////////////////////

  /**
   * Generates a log message if the provided expression is falsey.
   */
  public assert(expression: boolean): this {
    this.modifierQueue.push([
      'assert',
      (data: ModifierData) => {
        data.assertion = expression;
        return data;
      },
    ]);
    return this;
  }

  /**
   * Generates a log message if the provided expression is falsey.
   */
  public static assert(expression: boolean): Log {
    return new this().assert(expression);
  }

  /**
   * Closes a thread by resetting its context.
   */
  public get closeThread(): this {
    this.modifierQueue.push([
      'closeThread',
      (data: ModifierData) => {
        if (data.label?.context) {
          data.label.context = undefined;
        }
        return data;
      },
    ]);
    return this;
  }

  /**
   * Closes a thread by resetting its context.
   */
  public static get closeThread(): Log {
    return new this().closeThread;
  }

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public get count(): this {
    this.modifierQueue.push([
      'count',
      (data: ModifierData) => {
        if (data.label) {
          data.label.count = data.label.count !== undefined ? data.label.count + 1 : 1;
        }
        return data;
      },
    ]);
    return this;
  }

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public static get count() {
    return new this().count;
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public get countClear(): this {
    this.modifierQueue.push([
      'countClear',
      (data: ModifierData) => {
        if (data.label) {
          delete data.label.count;
        }
        return data;
      },
    ]);
    return this;
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public static get countClear(): Log {
    return new this().countClear;
  }

  /**
   * Resets the count for the log instances that share this log's label back to 0.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public get countReset(): this {
    this.modifierQueue.push([
      'countReset',
      (data: ModifierData) => {
        if (data.label) {
          data.label.count = 0;
        }
        return data;
      },
    ]);
    return this;
  }

  /**
   * Resets the count for the log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public static get countReset(): Log {
    return new this().countReset;
  }

  /**
   * Instructs this log to print in the dir format. Typically this is useful
   * for rendering deeply nested objects in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
   */
  public get dir(): Log<string, Record<string | symbol | number, unknown>> {
    this.modifierQueue.push([
      'dir',
      (data: ModifierData) => {
        data.method = 'dir';
        return data;
      },
    ]);
    return this as Log<string, Record<string | symbol | number, unknown>>;
  }

  /**
   * Instructs this log to print in the dir format. Typically this is useful
   * for rendering deeply nested objects in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
   */
  public static get dir(): Log<string, Record<string | symbol | number, unknown>> {
    return new this().dir;
  }

  /**
   * Instructs this log to print in the dirxml format. Typically this is useful
   * for rendering HTML/DOM or XML Elements in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
   */
  public get dirxml(): Log<string, Element | XMLDocument | Node | ChildNode> {
    this.modifierQueue.push([
      'dirxml',
      (data: ModifierData) => {
        data.method = 'dirxml';
        return data;
      },
    ]);
    return this as Log<string, Element | XMLDocument | Node | ChildNode>;
  }

  /**
   * Instructs this log to print in the dirxml format. Typically this is useful
   * for rendering HTML/DOM or XML Elements in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
   */
  public static get dirxml(): Log<string, Element | XMLDocument | Node | ChildNode> {
    return new this().dirxml;
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   *
   * This is a non-standard API.
   */
  public get dump(): this {
    this.modifierQueue.push([
      'dump',
      (data: ModifierData, ctxt: Log) => {
        ctxt._cfg.dump = true;
        return data;
      },
    ]);
    return this;
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   *
   * This is a non-standard API.
   */
  public static get dump(): Log {
    return new this().dump;
  }

  /**
   * Instructs the logger to print according to the provided format.
   *
   * This is a non-standard API.
   */
  public format(format: string): this {
    this.modifierQueue.push([
      'format',
      (data: ModifierData, ctxt: Log) => {
        if (Object.keys(ctxt._cfg.formatters).includes(format)) {
          ctxt._cfg.format = format;
          return data;
        }
        console.warn(new Error(`Adze: Formatter "${format}" not found in configuration.`));
        return data;
      },
    ]);
    return this;
  }

  /**
   * Instructs the logger to print according to the provided format.
   *
   * This is a non-standard API.
   */
  public static format(format: string): Log {
    return new this().format(format);
  }

  /**
   * Starts a log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
   */
  public get group(): this {
    this.modifierQueue.push([
      'group',
      (data: ModifierData) => {
        data.method = 'group';
        return data;
      },
    ]);
    return this;
  }

  /**
   * Starts a log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
   */
  public static get group(): Log {
    return new this().group;
  }

  /**
   * Starts a log group that is collapsed by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
   */
  public get groupCollapsed(): this {
    this.modifierQueue.push([
      'groupCollapsed',
      (data: ModifierData) => {
        data.method = 'groupCollapsed';
        return data;
      },
    ]);
    return this;
  }

  /**
   * Starts a log group that is collapsed by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
   */
  public static get groupCollapsed(): Log {
    return new this().groupCollapsed;
  }

  /**
   * Ends the most recently opened log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
   */
  public get groupEnd(): Log<string, never> {
    this.modifierQueue.push([
      'groupEnd',
      (data: ModifierData) => {
        data.method = 'groupEnd';
        return data;
      },
    ]);
    return this as Log<string, never>;
  }

  /**
   * Ends the most recently opened log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
   */
  public static get groupEnd(): Log<string, never> {
    return new this().groupEnd;
  }

  /**
   * Generates a log message if the provided expression is truthy.
   *
   * This is a non-standard API.
   */
  public if(expression: boolean): this {
    this.modifierQueue.push([
      'if',
      (data: ModifierData) => {
        data.if = expression;
        return data;
      },
    ]);
    return this;
  }

  /**
   * Generates a log message if the provided expression is truthy.
   *
   * This is a non-standard API.
   */
  public static if(expression: boolean): Log {
    return new this().if(expression);
  }

  /**
   * DEPRECATED: Use the equivalent `if` method instead.
   *
   * @deprecated
   */
  public test(expression: boolean): this {
    return this.if(expression);
  }

  /**
   * DEPRECATED: Use the equivalent `if` method instead.
   *
   * @deprecated
   */
  public static test(expression: boolean): Log {
    return new this().if(expression);
  }

  /**
   * Adds a label to the log. Label's can be used for log identification
   * and grouping. Label's also link log instances together.
   *
   * This is a non-standard API, but it replaces the need to provide
   * a label to methods that require a global identifier for tracking purposes.
   */
  public label(name: string): this {
    // prepend the modifier queue
    this.modifierQueue.unshift([
      'label',
      (data: ModifierData) => {
        const label = this.globalStore.getLabel(name) ?? { name };
        data.label = label;
        this.globalStore.setLabel(name, label);
        return data;
      },
    ]);
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
    return new this().label(name);
  }

  /**
   * Assign meta data to this log instance that is meant to be
   * retrievable in a log listener or from a `log.data()` dump.
   *
   * This is a non-standard API.
   */
  public meta<T extends Record<string, unknown> = Record<string, unknown>>(meta: T): this {
    this.modifierQueue.push([
      'meta',
      (data: ModifierData, ctxt: Log) => {
        ctxt._cfg.meta = { ...ctxt._cfg.meta, ...meta };
        return data;
      },
    ]);
    return this;
  }

  /**
   * Assign meta data to this log instance that is meant to be
   * retrievable in a log listener or from a `log.data()` dump.
   *
   * This is a non-standard API.
   */
  public static meta<T extends Record<string, unknown> = Record<string, unknown>>(meta: T): Log {
    return new this().meta<T>(meta);
  }

  /**
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together. Multiple calls to namespace are
   * additive in nature.
   *
   * This is a non-standard API.
   */
  public namespace(...namespace: string[]): this {
    this.modifierQueue.push([
      'namespace',
      (data: ModifierData) => {
        const arr = data.namespace ?? [];
        data.namespace = arr.length > 0 ? [...arr, ...namespace] : namespace;
        return data;
      },
    ]);
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
    return new this().namespace(...namespace);
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
  public ns(...namespace: N[]): this {
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
    return new this().namespace(...namespace);
  }

  /**
   * This modifier prevents the log from printing. It can still be picked up by middleware or
   * listeners.
   */
  public get silent(): this {
    this.modifierQueue.push([
      'silent',
      (data: ModifierData, ctxt: Log) => {
        ctxt._cfg.silent = true;
        return data;
      },
    ]);
    return this;
  }

  /**
   * This modifier prevents the log from printing. It can still be picked up by middleware or
   * listeners.
   */
  public static get silent(): Log {
    return new this().silent;
  }

  /**
   * Instructs this log to print its argument in a table format.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
   */
  public get table(): Log<N, TableData> {
    this.modifierQueue.push([
      'table',
      (data: ModifierData) => {
        data.method = 'table';
        return data;
      },
    ]);
    return this as Log<N, TableData>;
  }

  /**
   * Instructs this log to print its argument in a table format.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
   */
  public static get table(): Log<never, TableData> {
    return new this().table;
  }

  /**
   * Starts a timer associated with this log's *label*. This will do nothing if
   * this log has no label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
   */
  public get time(): this {
    this.modifierQueue.push([
      'time',
      (data: ModifierData) => {
        const timeStart = hrtime();
        if (data.label) {
          data.label.timeStart = timeStart;
        }
        return data;
      },
    ]);
    return this;
  }

  /**
   * Starts a timer associated with this log's *label*. This will do nothing if
   * this log has no label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
   */
  public static get time(): Log {
    return new this().time;
  }

  /**
   * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the
   * difference between the start time and when this method was called. This then
   * modifies the log render to show the time difference. This will do nothing if the *label* does
   * not exist.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
   */
  public get timeEnd(): this {
    this.modifierQueue.push([
      'timeEnd',
      (data: ModifierData) => {
        if (data.label?.timeStart) {
          data.label.timeElapsed = formatTime(hrtime(data.label.timeStart));
        }
        return data;
      },
    ]);
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
    return new this().timeEnd;
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public get timeNow(): this {
    this.modifierQueue.push([
      'timeNow',
      (data: ModifierData) => {
        data.timeNow = captureTimeNow();
        return data;
      },
    ]);
    return this;
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public static get timeNow(): Log {
    return new this().timeNow;
  }

  /**
   * This modifier method tells the log to render a timestamp.
   *
   * This is a non-standard API.
   */
  public get timestamp(): this {
    this.modifierQueue.push([
      'timestamp',
      (data: ModifierData, ctxt: Log) => {
        ctxt._cfg.showTimestamp = true;
        return data;
      },
    ]);
    return this;
  }

  /**
   * This modifier method tells the log to render a timestamp.
   *
   * This is a non-standard API.
   */
  public static get timestamp(): Log {
    return new this().timestamp;
  }

  /**
   * Prints a stacktrace along with the log. This does not use the standard "trace" method but
   * derives the stacktrace from the current call stack and appends it to your log.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
   */
  public get trace(): this {
    this.modifierQueue.push([
      'trace',
      (data: ModifierData) => {
        data.stacktrace = stacktrace();
        return data;
      },
    ]);
    return this;
  }

  /**
   * Prints a stacktrace along with the log. This does not use the standard "trace" method but
   * derives the stacktrace from the current call stack and appends it to your log.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
   */
  public static get trace(): Log {
    return new this().trace;
  }

  /**
   * Allows emoji's to be printed in pretty logs.
   */
  public get withEmoji(): this {
    this.modifierQueue.push([
      'withEmoji',
      (data: ModifierData, ctxt: Log) => {
        ctxt._cfg.withEmoji = true;
        return data;
      },
    ]);
    return this;
  }

  /**
   * Allows emoji's to be printed in pretty logs.
   */
  public static get withEmoji() {
    return new this().withEmoji;
  }

  ////////////////////////////////////////////////////////
  // Public Utility Methods
  ////////////////////////////////////////////////////////
  /**
   * Prints the log to the console.
   */
  public print(data: LogData): void {
    // Skip printing if the Adze environment is set to test.
    if (isTestEnvironment()) return;
    if (data.message.length > 0) {
      // Don't print if it is configured to be silent.
      if (data.silent) return;
      // Only print the message with arguments if it is using a method that allows arguments.
      if (isMethodWithArgs(data.method)) {
        console[data.method](...data.message);
      } else {
        console[data.method]();
      }
    } else {
      console.warn(new Error('Adze: Cannot print a log that has never been previously printed.'));
    }
  }

  ////////////////////////////////////////////////////////
  // Private Methods
  ////////////////////////////////////////////////////////

  private terminate(terminator: string, args: unknown[]): void {
    // Run the beforeTerminated middleware hooks
    this.doHook((m) => {
      if (m.beforeTerminated) m.beforeTerminated(this, terminator, args);
    });

    // Run the modifier queue to modify the data object.
    this.runModifierQueue();

    // Get the level configuration based on the level name.
    const level = this.getLevelConfig(terminator);

    // Get the log formatter
    const formatterConstructor = this.selectFormatter(this._cfg.format);
    // Instantiate the formatter.
    const formatter = new formatterConstructor(this._cfg, level);
    // Generate the timestamp. Use the user configured formatter if it is set.
    const timestamp = formatter.timestampFormatter(new Date());

    // Create our final log data object
    const message = cleanMessage(formatter.print(this.modifierData, timestamp, args));
    // If dump is enabled, add the context to the message.
    if (this._cfg.dump && this.modifierData.label?.context) {
      message.push(this.modifierData.label.context);
    }
    this.doHook((m) => {
      if (m.beforeFormatApplied) m.beforeFormatApplied(this, this._cfg.format, message);
    });
    const { activeLevel, cache, cacheSize, dump, format, meta, showTimestamp, silent, withEmoji } =
      this._cfg;
    const data: LogData = {
      activeLevel,
      cache,
      cacheSize,
      dump,
      format,
      meta,
      showTimestamp,
      silent,
      withEmoji,
      ...level,
      ...this._modifierData,
      terminator,
      args,
      timestamp,
      message,
    };
    this.doHook((m) => {
      if (m.afterFormatApplied) m.afterFormatApplied(this, this._cfg.format, message);
    });

    // save the data to this instance
    this._data = data;
    if (this._cfg.cache) {
      this.globalStore.addLogToCache(this);
    }

    this.doHook((m) => {
      if (m.beforePrint) m.beforePrint(this);
    });

    // Print the log to the console.
    this.print(this._data);

    this.doHook((m) => {
      if (m.afterTerminated) m.afterTerminated(this, terminator, args);
    });

    // Fire all of the log listeners and pass this log instance to them.
    this.globalStore.getListeners(level.level).forEach((listener: LogListener) => {
      listener(this);
    });
  }

  /**
   * Returns a formatter constructor based on the provided format.
   */
  private selectFormatter(format: string): FormatterConstructor {
    return this._cfg.formatters[format];
  }

  /**
   * Returns the level configuration object based on the provided level name.
   */
  private getLevelConfig(levelName: string): LevelConfiguration {
    return this._cfg.levels[levelName];
  }

  /**
   * Runs the modifier queue against this instance.
   */
  private runModifierQueue(): void {
    this.modifierQueue.forEach(([modName, modFunc]) => {
      const result = modFunc(this.modifierData, this);
      this.doHook((m) => {
        if (m.beforeModifierApplied) m.beforeModifierApplied(this, modName, result);
      });
      this._modifierData = result;
      this.doHook((m) => {
        if (m.afterModifierApplied) m.afterModifierApplied(this, modName, result);
      });
    });
  }

  /**
   * Execute a middleware hook.
   */
  private doHook(cb: (middleware: Middleware) => void): void {
    this._cfg.middleware?.forEach((middleware: Middleware) => {
      cb(middleware);
    });
  }
}

import defaultsDeep from 'lodash/defaultsDeep';
import cloneDeep from 'lodash/cloneDeep';
import {
  Configuration,
  Defaults,
  LogRender,
  LogTimestamp,
  ModifierQueue,
  MetaData,
  LogLevelDefinition,
  PrintMethod,
  LogData,
  FinalLogData,
  TerminatedLog,
} from '../_contracts';
import { isString, stacktrace, timestamp, toConsole } from '../util';
import { Label, addLabel, getLabel } from '../label';
import { defaults } from '../_defaults';
import { Env } from '../Env';
import { Printer } from '../printers';
import { allowed } from '../conditions';
import { shedExists } from '../shed';

export class Log {
  /**
   * The Printer class constructor.
   */
  private Printer: typeof Printer;

  /**
   * Instance of the Env class.
   */
  private env: Env = new Env();

  /**
   * The Adze log configuration merged with defaults.
   */
  private cfg: Defaults;

  /**
   * The level of this log instance.
   */
  private _level: number | null = null;

  /**
   * The log level definition selected for this log
   * after it has been terminated.
   */
  private definition: LogLevelDefinition | null = null;

  /**
   * Arguments passed into a terminating method.
   */
  private args: unknown[] | null = null;

  /**
   * The log render after this log has been terminated.
   */
  private _render: LogRender | null = null;

  /**
   * The timestamp object generated when this log has been terminated.
   */
  private timestamp: LogTimestamp | null = null;

  /**
   * The stacktrace of the log when it has been terminated.
   */
  private stacktrace: string | null = null;

  /**
   * The namespaces assigned to this log.
   */
  private _namespaceVal: string[] | null = null;

  /**
   * The label instance assigned to this log.
   */
  private _labelVal: Label | null = null;

  /**
   * The time ellapsed when this log was terminated.
   */
  private timeNowVal: string | null = null;

  /**
   * Queue of modifiers applied to this log instance.
   * These will be executed in order when the log is terminated.
   */
  private modifierQueue: ModifierQueue = [];

  /**
   * The function used to generate a log render when
   * the log is terminated.
   */
  private printer: PrintMethod = 'printLog';

  /**
   * Meta data attached to this log instance through the
   * meta modifier or through MDC threads. This is retrievable
   * in log listeners.
   */
  private metaData: MetaData = {};

  // ======================================
  //   Flags
  // ======================================

  /**
   * The result of the expression evaluated from
   * the assertion modifier. If this value is false,
   * the log will print the provided message denoting
   * the failure of the assertion.
   */
  private assertion: boolean | undefined;

  /**
   * The result of the expression evaluated from
   * the assertion modifier. If this value is false,
   * the log will print the provided message denoting
   * the failure of the assertion.
   */
  private expression: boolean | undefined;

  /**
   * Flag which tells the log instance to skip rendering.
   */
  private isSilent = false;

  /**
   * Flag which tells the log instance to add the
   * MDC context to the log render arguments.
   */
  private dumpContext = false;

  constructor(printer: typeof Printer, env: Env, user_cfg?: Configuration) {
    this.Printer = printer;
    this.env = env;
    this.cfg = defaultsDeep(user_cfg, defaults) as Defaults;
  }

  public get level(): number | null {
    return this._level;
  }

  public get render(): LogRender | null {
    return this._render;
  }

  // ======================================
  //   Terminating Methods (return void)
  // ======================================

  /**
   * Terminates the log at the *attention* level.
   *
   * **Default Level = 0**
   *
   * This level is useful for calling attention to
   * important information and lives at the lowest level.
   *
   * You should use this sparingly since it's level is lower
   * than error.
   */
  public attention(...args: unknown[]): TerminatedLog {
    return this.logMethod('attention', args);
  }

  /**
   * Terminates the log at the *error* level.
   *
   * **Default Level = 1**
   *
   * Use this for logging fatal errors or errors that
   * impact functionality of your application.
   */
  public error(...args: unknown[]): TerminatedLog {
    return this.logMethod('error', args);
  }

  /**
   * Terminates the log at the *warning* level.
   *
   * **Default Level = 2**
   *
   * Use this for logging issues that may impact
   * app performance in a less impactful way than
   * an error.
   */
  public warn(...args: unknown[]): TerminatedLog {
    return this.logMethod('warn', args);
  }

  /**
   * Terminates the log at the *info* level.
   *
   * **Default Level = 3**
   *
   * Use this for logging general insights into your
   * application. This level does not indicate any
   * problems.
   */
  public info(...args: unknown[]): TerminatedLog {
    return this.logMethod('info', args);
  }

  /**
   * Terminates the log at the *fail* level.
   *
   * **Default Level = 4**
   *
   * Use this for logging network communication errors
   * that do not break your application.
   */
  public fail(...args: unknown[]): TerminatedLog {
    return this.logMethod('fail', args);
  }

  /**
   * Terminates the log at the *success* level.
   *
   * **Default Level = 5**
   *
   * Use this for logging successful network communication.
   */
  public success(...args: unknown[]): TerminatedLog {
    return this.logMethod('success', args);
  }

  /**
   * Terminates the log at the *log* level.
   *
   * **Default Level = 6**
   *
   * Use this for general logging that doesn't apply
   * to any of the lower levels.
   */
  public log(...args: unknown[]): TerminatedLog {
    return this.logMethod('log', args);
  }

  /**
   * Terminates the log at the *debug* level.
   *
   * **Default Level = 7**
   *
   * Use this for logging information that you typically
   * do not want to see unless you are debugging a problem
   * with your application. This is typically hidden by
   * default.
   */
  public debug(...args: unknown[]): TerminatedLog {
    return this.logMethod('debug', args);
  }

  /**
   * Terminates the log at the *verbose* level.
   *
   * **Default Level = 8**
   *
   * Use this for logging extremely detailed debugging
   * information. Use this level when the values you are
   * logging are granular enough that they are no longer
   * easily human readable.
   */
  public verbose(...args: unknown[]): TerminatedLog {
    return this.logMethod('verbose', args);
  }

  /**
   * Terminates the log at the provided custom log level.
   *
   * Custom log levels are defined within the Adze configuration object
   * under the `custom_levels` property.
   */
  public custom(level_name: string, ...args: unknown[]): TerminatedLog {
    return this.customMethod(level_name, args);
  }

  /**
   * Seals the configuration of a log and returns a function that
   * constructs a new log with the same configuration.
   *
   * **Example:**
   * ```javascript
   * const sealed = adze({ use_emoji: true }).ns('sealed').label('sealed-label').seal();
   * sealed().success('Success!'); // -> prints "#sealed [sealed-label] Success!"
   * sealed().log('Another log.'); // -> prints "#sealed [sealed-label] Another log."
   * ```
   */
  public seal(): () => Log {
    // Run the modifier queue to apply their results
    this.runModifierQueue();
    // Clear the queue as to not repeat the actions when the subsequent logs are terminated.
    this.modifierQueue = [];
    // Create a new Adze log and hydrate it with the data from this instance.
    // This effectively clones the Adze log.
    return () => new Log(this.Printer, this.env).hydrate(this.data);
  }

  /**
   * Following the MDC (Mapped Diagnostic Context) pattern this method enables you to create
   * a thread for adding context from different scopes before finally terminating the log.
   *
   * In order to create a thread, this log must specify a label that will be used to link the
   * context and your environment must have a **shed** created.
   *
   * **Example:**
   * ```typescript
   * import { adze, createShed } from 'adze';
   *
   * const shed = createShed();
   *
   * // Creating a shed listener is a great way to get meta data from your
   * // threaded logs to write to disk or pass to another plugin, library,
   * // or service.
   * shed.addListener([1,2,3,4,5,6,7,8], (log) => {
   *   // Do something with `log.context.added` or `log.context.subtracted`.
   * });
   *
   * function add(a, b) {
   *   const answer = a + b;
   *   adze().label('foo').thread('added', { a, b, answer });
   *   return answer;
   * }
   *
   * function subtract(x, y) {
   *   const answer = x - y;
   *   adze().label('foo').thread('subtracted', { x, y, answer });
   *   return answer;
   * }
   *
   * add(1, 2);
   * subtract(4, 3);
   *
   * adze().label('foo').dump().info('Results from our thread');
   * // Info => Results from our thread, { a: 1, b: 2, answer: 3 }, { x: 4, y: 3, answer: 1 }
   *
   * ```
   */
  public thread<T>(key: string, value: T): void {
    // Check if the log has a label. If not, console.warn the user.
    // If the log has a label, attach the context to the label.
    this.runModifierQueue();
    if (this._labelVal) {
      this._labelVal.addContext(key, value);
    } else {
      console.warn('Thread context was not added! Threads must have a label.');
    }
  }

  /**
   * Closes a thread assigned to the log by clearing the context values.
   */
  public close(): void {
    if (this._labelVal) {
      this._labelVal.clearContext();
    }
  }

  /**
   * Alias for console.clear().
   */
  public clear(): void {
    console.clear();
  }

  /**
   * Alias for clear() which is an alias for console.clear().
   */
  public clr(): void {
    this.clear();
  }

  // =============================
  //   MODIFIERS
  // =============================

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public get count(): this {
    return this.modifier(() => {
      if (this._labelVal) {
        this._labelVal.addCount();
      }
    });
  }

  /**
   * Resets the count for the log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public get countReset(): this {
    return this.modifier(() => {
      if (this._labelVal) {
        this._labelVal.resetCount();
      }
    });
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public get countClear(): this {
    return this.modifier(() => {
      if (this._labelVal) {
        this._labelVal.clearCount();
      }
    });
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   */
  public get dump(): this {
    return this.modifier(() => {
      this.dumpContext = true;
    });
  }

  /**
   * Assign meta data to this log instance that is retrievable
   * in a log listener.
   */
  public meta<T>(key: string, val: T): this {
    return this.modifier(() => {
      this.metaData[key] = val;
    });
  }

  /**
   * Instructs this log to print in the dir format. Typically this is useful
   * for rendering deeply nested objects in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
   */
  public get dir(): this {
    return this.modifier(() => {
      this.printer = 'printDir';
    });
  }

  /**
   * Instructs this log to print in the dirxml format. Typically this is useful
   * for rendering HTML/DOM or XML Elements in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
   */
  public get dirxml(): this {
    return this.modifier(() => {
      this.printer = 'printDirxml';
    });
  }

  /**
   * Instructs this log to print its argument in a table format.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
   */
  public get table(): this {
    return this.modifier(() => {
      this.printer = 'printTable';
    });
  }

  /**
   * This modifier method allows the log to execute normally but
   * prevent it from printing to the console.
   */
  public get silent(): this {
    return this.modifier(() => {
      this.isSilent = true;
    });
  }

  /**
   * Starts a log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
   */
  public get group(): this {
    return this.modifier(() => {
      this.printer = 'printGroup';
    });
  }

  /**
   * Starts a log group that is collapsed by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
   */
  public get groupCollapsed(): this {
    return this.modifier(() => {
      this.printer = 'printGroupCollapsed';
    });
  }

  /**
   * Ends the most recently opened log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
   */
  public get groupEnd(): this {
    return this.modifier(() => {
      this.printer = 'printGroupEnd';
    });
  }

  /**
   * Adds a label to the log. Label's can be used for log identification
   * and grouping. Label's also link log instances together.
   *
   * This is a non-standard API, but it replaces the need to provide
   * a label to `count` or `time`.
   */
  public label(name: string): this {
    return this.prependModifier(() => {
      this._labelVal = addLabel(getLabel(name) ?? new Label(name));
    });
  }

  /**
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together.
   *
   * This is a non-standard API.
   */
  public namespace(ns: string | string[]): this {
    return this.modifier(() => {
      this._namespaceVal = isString(ns) ? [ns] : ns;
    });
  }

  /**
   * An alias for `namespace()`.
   */
  public ns(ns: string | string[]): this {
    return this.namespace(ns);
  }

  /**
   * Prints a stacktrace along with the log.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
   */
  public get trace(): this {
    return this.modifier(() => {
      this.printer = 'printTrace';
    });
  }

  /**
   * Prints a log warning that the assertion failed if the assertion is false.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
   */
  public assert(assertion: boolean): this {
    return this.modifier(() => {
      this.assertion = assertion;
    });
  }

  /**
   * Allows the log to print if the expression is true.
   *
   * This is a non-standard method.
   */
  public test(expression: boolean): this {
    return this.modifier(() => {
      this.expression = expression;
    });
  }

  /**
   * Starts a timer associated with this log's *label*. This will do nothing if
   * this log has no label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
   */
  public get time(): this {
    return this.modifier(() => {
      if (this._labelVal) {
        this._labelVal.startTime();
      }
    });
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public get timeNow(): this {
    return this.modifier(() => {
      if (this._labelVal) {
        this._labelVal.captureTimeNow();
      } else {
        this.timeNowVal = Label.createTimeNow();
      }
    });
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
    return this.modifier(() => {
      if (this._labelVal) {
        this._labelVal.endTime();
      }
    });
  }

  /*
    ! console.timeLog() is purposefully omitted from this API.

    timeLog() is a useless method within the Adze API. The same effect can be 
    accomplished by created a new log with the same label.
  */

  /**
   * Getter shortcut for retrieving MDC context from the log instance.
   */
  public get context(): MetaData {
    return this._labelVal?.getContext() ?? {};
  }

  // public get bundle(): Bundle {
  //   return;
  // }

  // ==============================
  //   Private Methods
  // ==============================

  /**
   * Queues a modifier method for execution when the log is terminated.
   */
  private modifier(func: () => void): this {
    this.modifierQueue = this.modifierQueue.concat([func]);
    return this;
  }

  /**
   * Queues a modifier method for execution at the beginning of the queue when the log is terminated.
   * This is used to ensure that labels are applied before modifiers that use labels are executed.
   */
  private prependModifier(func: () => void): this {
    this.modifierQueue = [func].concat(this.modifierQueue);
    return this;
  }

  /**
   * Executes all of the log modifier functions within the queue.
   */
  private runModifierQueue(): void {
    this.modifierQueue.forEach((func) => func());
  }

  // ===================================
  //   Private Methods for Terminators
  // ===================================

  /**
   * Generates a terminating log method the specified log level name.
   */
  private logMethod(levelName: string, args: unknown[]): TerminatedLog {
    return this.executionPipeline(
      this.getDefinition('log_levels', levelName),
      args
    );
  }

  /**
   * Generates a terminating log method that enables the user to specify a custom
   * log level by key as the format for the log.
   */
  private customMethod(levelName: string, args: unknown[]): TerminatedLog {
    return this.executionPipeline(
      this.getDefinition('custom_levels', levelName),
      args
    );
  }

  /**
   * Gets the log level definition from the log configuration.
   */
  private getDefinition(
    type: 'log_levels' | 'custom_levels',
    levelName: string
  ): LogLevelDefinition | undefined {
    let definition = this.cfg[type][levelName];

    const shed = this.env.global.$shed;
    if (shedExists(shed)) {
      definition = shed.hasOverrides
        ? shed.overrides?.[type]?.[levelName]
        : definition;
    }

    return definition ? { ...definition, levelName } : undefined;
  }

  /**
   * The primary execution pipeline for terminating log methods.
   */
  private executionPipeline(
    def: LogLevelDefinition | undefined,
    args: unknown[]
  ): TerminatedLog {
    if (def && allowed(this.cfg, def)) {
      // Apply modifiers in the proper order.
      this.runModifierQueue();

      // Check the test modifiers.
      if (this.evalPasses()) {
        // Save values to this log instance for later recall
        this.args = args;
        this._level = def.level;
        this.definition = def;
        this.timestamp = timestamp();
        this.stacktrace = this.cfg.capture_stacktrace ? stacktrace() : null;

        // Set this log data to a variable for type checking
        const log_data = this.data;

        if (this.isFinalLogData(log_data)) {
          // If a global context exists, check if this log is allowed.
          const globally_allowed =
            this.env.global.$shed?.logGloballyAllowed(log_data) ?? true;

          if (globally_allowed) {
            // Render the log and print to the console
            const render = new Printer(log_data)[this.printer]();

            if (render) {
              // Write the LogRender to the console.
              toConsole(render, this.isSilent);

              // Fire log events
              this.store();
              this.fireListeners(log_data, render);

              // Return the terminated log object for testing purposes
              return { log: this, render };
            }
          }
        }
      }
    }

    // Return the terminated log object for testing purposes
    return { log: this, render: null };
  }

  /**
   * Check if any assertions or expressions pass for this log to terminate.
   */
  private evalPasses(): boolean {
    if (this.assertion !== undefined && this.expression !== undefined) {
      console.warn(
        'You have declared both an assertion and test on the same log. Please only declare one or nefarious results may occur.'
      );
      return true;
    }
    if (this.assertion !== undefined) {
      return this.assertion === false;
    }
    if (this.expression !== undefined) {
      return this.expression === true;
    }
    return true;
  }

  // ===================================
  //   Log Events
  // ===================================

  /**
   * Stores this log in the Shed if the Shed exists.
   */
  private store(): void {
    const shed = this.env.global.$shed;
    if (shedExists(shed)) {
      shed.store(this);
    }
  }

  /**
   * Fires listeners for this log instance if a Shed exists.
   */
  private fireListeners(data: FinalLogData, render: LogRender): void {
    const shed = this.env.global.$shed;
    if (shedExists(shed)) {
      shed.fireListeners(data, render);
    }
  }

  // ===================================
  //   Generate Log Data
  // ===================================

  /**
   * Creates a slimmed down object comprised of data from a log.
   */
  public get data(): LogData | FinalLogData {
    const values: LogData = {
      cfg: cloneDeep(this.cfg),
      level: this._level,
      definition: this.definition ? { ...this.definition } : null,
      args: this.args ? [...this.args] : null,
      timestamp: this.timestamp ? { ...this.timestamp } : null,
      stacktrace: this.stacktrace,
      namespace: this._namespaceVal ? [...this._namespaceVal] : null,
      label: {
        name: this._labelVal?.name ?? null,
        timeNow: this._labelVal?.timeNow ?? null,
        timeEllapsed: this._labelVal?.timeEllapsed ?? null,
        count: this._labelVal?.count ?? null,
      },
      dumpContext: this.dumpContext,
      isSilent: this.isSilent,
      timeNow: this.timeNowVal,
      meta: { ...this.metaData },
      context: { ...this.context },
    };
    if (this.isFinalLogData(values)) {
      return values as FinalLogData;
    }
    return values;
  }

  /**
   * Hydrate this log's properties from a log data object.
   */
  public hydrate(data: LogData | FinalLogData): this {
    this.cfg = cloneDeep(data.cfg);
    this._level = data.level;
    this.definition = data.definition ? { ...data.definition } : null;
    this.args = data.args ? [...data.args] : null;
    this.timestamp = data.timestamp ? { ...data.timestamp } : null;
    this.stacktrace = data.stacktrace;
    this._namespaceVal = data.namespace ? [...data.namespace] : null;
    this._labelVal = this.resolveLabel(data);
    this.dumpContext = data.dumpContext;
    this.isSilent = data.isSilent;
    this.timeNowVal = data.timeNow;
    this.metaData = { ...data.meta };

    return this;
  }

  /**
   * Returns the label from the store if it exists by the given name.
   * If it's not in the store, generate a new log with the provided data
   * properties. If the label name is null in the data, return null.
   */
  private resolveLabel(data: LogData | FinalLogData): Label | null {
    if (data.label.name) {
      const stored_label = getLabel(data.label.name) ?? null;
      if (stored_label) {
        return stored_label;
      }
      return new Label(
        data.label.name,
        data.context,
        data.label.count,
        data.label.timeNow,
        data.label.timeEllapsed
      );
    }
    return null;
  }

  // ============================
  //   Private Utility Methods
  // ============================
  private isFinalLogData(
    values: LogData | FinalLogData
  ): values is FinalLogData {
    return (
      values.level !== null &&
      values.definition !== null &&
      values.args !== null &&
      values.timestamp !== null
    );
  }
}

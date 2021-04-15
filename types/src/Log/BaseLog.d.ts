import { Configuration, Defaults, LogRender, MetaData, LogData, FinalLogData, TerminatedLog } from '../_contracts';
import { Env } from '../Env';
import { Printer } from '../printers';
export declare class BaseLog {
    /**
     * The Printer class constructor.
     */
    protected Printer: typeof Printer;
    /**
     * Instance of the Env class.
     */
    protected env: Env;
    /**
     * The Adze log configuration merged with defaults.
     */
    protected cfg: Defaults;
    /**
     * The level of this log instance.
     */
    private _level;
    /**
     * The log level definition selected for this log
     * after it has been terminated.
     */
    private definition;
    /**
     * Arguments passed into a terminating method.
     */
    private args;
    /**
     * The log render after this log has been terminated.
     */
    private _render;
    /**
     * The timestamp object generated when this log has been terminated.
     */
    private timestamp;
    /**
     * The stacktrace of the log when it has been terminated.
     */
    private stacktrace;
    /**
     * The namespaces assigned to this log.
     */
    private _namespaceVal;
    /**
     * The label instance assigned to this log.
     */
    private _labelVal;
    /**
     * The time ellapsed when this log was terminated.
     */
    private timeNowVal;
    /**
     * Queue of modifiers applied to this log instance.
     * These will be executed in order when the log is terminated.
     */
    protected modifierQueue: Array<(ctxt: BaseLog) => void>;
    /**
     * The function used to generate a log render when
     * the log is terminated.
     */
    private printer;
    /**
     * Meta data attached to this log instance through the
     * meta modifier or through MDC threads. This is retrievable
     * in log listeners.
     */
    private metaData;
    /**
     * The result of the expression evaluated from
     * the assertion modifier. If this value is false,
     * the log will print the provided message denoting
     * the failure of the assertion.
     */
    private assertion;
    /**
     * The result of the expression evaluated from
     * the assertion modifier. If this value is false,
     * the log will print the provided message denoting
     * the failure of the assertion.
     */
    private expression;
    /**
     * Flag which tells the log instance to skip rendering.
     */
    private isSilent;
    /**
     * Flag which tells the log instance to add the
     * MDC context to the log render arguments.
     */
    private dumpContext;
    constructor(printer: typeof Printer, env: Env, user_cfg?: Configuration);
    /**
     * Getter for retrieving the level from the instance.
     */
    get level(): number | null;
    /**
     * Getter for retrieving the log render from the instance.
     */
    get render(): LogRender | null;
    /**
     * Getter shortcut for retrieving MDC context from the log instance.
     */
    get context(): MetaData;
    /**
     * Terminates the log at the *alert* level.
     *
     * **Default Level = 0**
     *
     * This level is useful for calling alert to
     * important information and lives at the lowest level.
     *
     * You should use this sparingly since it's level is lower
     * than error.
     */
    alert(...args: unknown[]): TerminatedLog<this>;
    /**
     * Terminates the log at the *error* level.
     *
     * **Default Level = 1**
     *
     * Use this for logging fatal errors or errors that
     * impact functionality of your application.
     */
    error(...args: unknown[]): TerminatedLog<this>;
    /**
     * Terminates the log at the *warning* level.
     *
     * **Default Level = 2**
     *
     * Use this for logging issues that may impact
     * app performance in a less impactful way than
     * an error.
     */
    warn(...args: unknown[]): TerminatedLog<this>;
    /**
     * Terminates the log at the *info* level.
     *
     * **Default Level = 3**
     *
     * Use this for logging general insights into your
     * application. This level does not indicate any
     * problems.
     */
    info(...args: unknown[]): TerminatedLog<this>;
    /**
     * Terminates the log at the *fail* level.
     *
     * **Default Level = 4**
     *
     * Use this for logging network communication errors
     * that do not break your application.
     */
    fail(...args: unknown[]): TerminatedLog<this>;
    /**
     * Terminates the log at the *success* level.
     *
     * **Default Level = 5**
     *
     * Use this for logging successful network communication.
     */
    success(...args: unknown[]): TerminatedLog<this>;
    /**
     * Terminates the log at the *log* level.
     *
     * **Default Level = 6**
     *
     * Use this for general logging that doesn't apply
     * to any of the lower levels.
     */
    log(...args: unknown[]): TerminatedLog<this>;
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
    debug(...args: unknown[]): TerminatedLog<this>;
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
    verbose(...args: unknown[]): TerminatedLog<this>;
    /**
     * Terminates the log at the provided custom log level.
     *
     * Custom log levels are defined within the Adze configuration object
     * under the `custom_levels` property.
     */
    custom(level_name: string, ...args: unknown[]): TerminatedLog<this>;
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
     * adze().label('foo').dump.info('Results from our thread');
     * // Info => Results from our thread, { a: 1, b: 2, answer: 3 }, { x: 4, y: 3, answer: 1 }
     *
     * ```
     */
    thread<T>(key: string, value: T): void;
    /**
     * Closes a thread assigned to the log by clearing the context values.
     */
    close(): void;
    /**
     * Alias for console.clear().
     */
    clear(): void;
    /**
     * Alias for clear() which is an alias for console.clear().
     */
    clr(): void;
    /**
     * Adds to the log count for log instances that share this log's label.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
     */
    get count(): this;
    /**
     * Resets the count for the log instances that share this log's label.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
     */
    get countReset(): this;
    /**
     * Unsets the count for the log instances that share this log's label.
     *
     * This is a non-standard method.
     */
    get countClear(): this;
    /**
     * Instructs the log terminator to add the key/value pairs from the
     * thread context to the console output.
     */
    get dump(): this;
    /**
     * Assign meta data to this log instance that is meant to be
     * retrievable in a log listener or from a `log.data()` dump.
     */
    meta<T>(key: string, val: T): this;
    /**
     * Instructs this log to print in the dir format. Typically this is useful
     * for rendering deeply nested objects in the console.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
     */
    get dir(): this;
    /**
     * Instructs this log to print in the dirxml format. Typically this is useful
     * for rendering HTML/DOM or XML Elements in the console.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
     */
    get dirxml(): this;
    /**
     * Instructs this log to print its argument in a table format.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
     */
    get table(): this;
    /**
     * This modifier method allows the log to execute normally but
     * prevent it from printing to the console.
     */
    get silent(): this;
    /**
     * Starts a log group.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
     */
    get group(): this;
    /**
     * Starts a log group that is collapsed by default.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
     */
    get groupCollapsed(): this;
    /**
     * Ends the most recently opened log group.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
     */
    get groupEnd(): this;
    /**
     * Adds a label to the log. Label's can be used for log identification
     * and grouping. Label's also link log instances together.
     *
     * This is a non-standard API, but it replaces the need to provide
     * a label to `count` or `time`.
     */
    label(name: string): this;
    /**
     * Adds a namespace to the log. Namespace's are primarily useful
     * for grouping logs together.
     *
     * This is a non-standard API.
     */
    namespace(ns: string | string[]): this;
    /**
     * An alias for `namespace()`.
     */
    ns(ns: string | string[]): this;
    /**
     * Prints a stacktrace along with the log.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
     */
    get trace(): this;
    /**
     * Prints a log warning that the assertion failed if the assertion is false.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
     */
    assert(assertion: boolean): this;
    /**
     * Allows the log to print if the expression is true.
     *
     * This is a non-standard method.
     */
    test(expression: boolean): this;
    /**
     * Starts a timer associated with this log's *label*. This will do nothing if
     * this log has no label.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
     */
    get time(): this;
    /**
     * Modifies the log render to show the current high-resolution real time.
     *
     * This is a non-standard method.
     */
    get timeNow(): this;
    /**
     * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the
     * difference between the start time and when this method was called. This then
     * modifies the log render to show the time difference. This will do nothing if the *label* does
     * not exist.
     *
     * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
     */
    get timeEnd(): this;
    /**
     * Queues a modifier method for execution when the log is terminated.
     */
    private modifier;
    /**
     * Queues a modifier method for execution at the beginning of the queue when the log is terminated.
     * This is used to ensure that labels are applied before modifiers that use labels are executed.
     */
    private prependModifier;
    /**
     * Executes all of the log modifier functions within the queue.
     */
    private runModifierQueue;
    /**
     * Generates a terminating log method the specified log level name.
     */
    private logMethod;
    /**
     * Generates a terminating log method that enables the user to specify a custom
     * log level by key as the format for the log.
     */
    private customMethod;
    /**
     * Gets the log level definition from the log configuration.
     */
    private getDefinition;
    /**
     * The primary logic for terminating log methods.
     */
    private terminate;
    /**
     * Check if any assertions or expressions pass for this log to terminate.
     */
    private evalPasses;
    /**
     * Stores this log in the Shed if the Shed exists.
     */
    private store;
    /**
     * Fires listeners for this log instance if a Shed exists.
     */
    private fireListeners;
    /**
     * Creates a slimmed down object comprised of data from a log.
     */
    get data(): LogData | FinalLogData;
    /**
     * Hydrate this log's properties from a log data object.
     */
    hydrate(data: LogData | FinalLogData): this;
    /**
     * Returns the label from the store if it exists by the given name.
     * If it's not in the store, generate a new log with the provided data
     * properties. If the label name is null in the data, return null.
     */
    private resolveLabel;
}

import {
  Constraints,
  LogData,
  FinalLogData,
  TerminatedLog,
} from './_contracts';
import { Log } from './log';

export class AdzeStatic<C extends Constraints> {
  // ======================================
  //   Terminating Methods (return void)
  // ======================================

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
   *
   * This is a non-standard API.
   */
  public alert(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().alert(...args);
  }

  /**
   * Terminates the log at the *error* level.
   *
   * **Default Level = 1**
   *
   * Use this for logging fatal errors or errors that
   * impact functionality of your application.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)
   */
  public error(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().error(...args);
  }

  /**
   * Terminates the log at the *warning* level.
   *
   * **Default Level = 2**
   *
   * Use this for logging issues that may impact app performance in a less impactful way than
   * an error.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/warn)
   */
  public warn(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().warn(...args);
  }

  /**
   * Terminates the log at the *info* level.
   *
   * **Default Level = 3**
   *
   * Use this for logging general insights into your application. This level does not indicate any
   * problems.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/info)
   */
  public info(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().info(...args);
  }

  /**
   * Terminates the log at the *fail* level.
   *
   * **Default Level = 4**
   *
   * Use this for logging network communication errors that do not break your application.
   *
   * This is a non-standard API.
   */
  public fail(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().fail(...args);
  }

  /**
   * Terminates the log at the *success* level.
   *
   * **Default Level = 5**
   *
   * Use this for logging successful network communication.
   *
   * This is a non-standard API.
   */
  public success(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().success(...args);
  }

  /**
   * Terminates the log at the *log* level.
   *
   * **Default Level = 6**
   *
   * Use this for general logging that doesn't apply to any of the lower levels.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
   */
  public log(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().log(...args);
  }

  /**
   * Terminates the log at the *debug* level.
   *
   * **Default Level = 7**
   *
   * Use this for logging information that you typically do not want to see unless you are
   * debugging a problem with your application. This is typically hidden by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/debug)
   */
  public debug(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().debug(...args);
  }

  /**
   * Terminates the log at the *verbose* level.
   *
   * **Default Level = 8**
   *
   * Use this for logging extremely detailed debugging information. Use this level when the values
   * you are logging are granular enough that they are no longer easily human readable.
   *
   * This is a non-standard API.
   */
  public verbose(...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().verbose(...args);
  }

  /**
   * Terminates the log at the provided custom log level.
   *
   * Custom log levels are defined within the Adze configuration object
   * under the `custom_levels` property.
   *
   * This is a non-standard API.
   */
  public custom(level_name: string, ...args: unknown[]): TerminatedLog<C, Log<C>> {
    return new Log<C>().custom(level_name, ...args);
  }

  /**
   * Following the MDC (Mapped Diagnostic Context) pattern this method enables you to create
   * a thread for adding context from different scopes before finally terminating the log.
   *
   * In order to create a thread, this log must specify a label that will be used to link the
   * context and your environment must have a **GlobalStore** created.
   *
   * **Example:**
   * ```typescript
   * import { adze, createGlobalStore } from 'adze';
   *
   * const globalStore = createGlobalStore();
   *
   * // Creating a GlobalStore listener is a great way to get meta data from your
   * // threaded logs to write to disk or pass to another plugin, library,
   * // or service.
   * globalStore.addListener([1,2,3,4,5,6,7,8], (log) => {
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
   *
   * This is a non-standard API.
   */
  public thread<T>(key: string, value: T): void {
    return new Log<C>().thread(key, value);
  }

  /**
   * Alias for console.clear().
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/clear)
   */
  public clear(): void {
    console.clear();
  }

  /**
   * Alias for clear() which is an alias for console.clear().
   *
   * This is a non-standard API.
   */
  public clr(): void {
    console.clear();
  }

  // =============================
  //   MODIFIERS
  // =============================

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public get count(): Log<C> {
    return new Log<C>().count;
  }

  /**
   * Resets the count for the log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public get countReset(): Log<C> {
    return new Log<C>().countReset;
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public get countClear(): Log<C> {
    return new Log<C>().countClear;
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   *
   * This is a non-standard API.
   */
  public get dump(): Log<C> {
    return new Log<C>().dump;
  }

  /**
   * Assign meta data to this log instance that is meant to be
   * retrievable in a log listener or from a `log.data()` dump.
   *
   * This is a non-standard API.
   */
  public meta<T>(key: string, val: T): Log<C>;
  public meta<KV extends [string, any]>(...[key, val]: KV): Log<C>;
  public meta(key: string, val: unknown): Log<C> {
    return new Log<C>().meta(key, val);
  }

  /**
   * Instructs this log to print in the dir format. Typically this is useful
   * for rendering deeply nested objects in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
   */
  public get dir(): Log<C> {
    return new Log<C>().dir;
  }

  /**
   * Instructs this log to print in the dirxml format. Typically this is useful
   * for rendering HTML/DOM or XML Elements in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
   */
  public get dirxml(): Log<C> {
    return new Log<C>().dirxml;
  }

  /**
   * Instructs this log to print its argument in a table format.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
   */
  public get table(): Log<C> {
    return new Log<C>().table;
  }

  /**
   * This modifier method allows the log to execute normally but
   * prevent it from printing to the console.
   */
  public get silent(): Log<C> {
    return new Log<C>().silent;
  }

  /**
   * Starts a log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
   */
  public get group(): Log<C> {
    return new Log<C>().group;
  }

  /**
   * Starts a log group that is collapsed by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
   */
  public get groupCollapsed(): Log<C> {
    return new Log<C>().groupCollapsed;
  }

  /**
   * Ends the most recently opened log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
   */
  public get groupEnd(): Log<C> {
    return new Log<C>().groupEnd;
  }

  /**
   * Adds a label to the log. Label's can be used for log identification
   * and grouping. Label's also link log instances together.
   *
   * This is a non-standard API, but it replaces the need to provide
   * a label to `count` or `time`.
   */
  public label(name: string): Log<C> {
    return new Log<C>().label(name);
  }

  /**
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together. Multiple calls to namespace are
   * additive in nature.
   *
   * This is a non-standard API.
   */
  public namespace(...namespaces: C['allowedNamespaces'][]): Log<C> {
    return new Log<C>().namespace(...namespaces);
  }

  /**
   * An alias for `namespace()`.
   *
   * This is a non-standard API.
   */
  public ns(...namespaces: C['allowedNamespaces'][]): Log<C> {
    return this.namespace(...namespaces);
  }

  /**
   * Prints a stacktrace along with the log.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
   */
  public get trace(): Log<C> {
    return new Log<C>().trace;
  }

  /**
   * Prints a log warning that the assertion failed if the assertion is false.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
   */
  public assert(assertion: boolean): Log<C> {
    return new Log<C>().assert(assertion);
  }

  /**
   * Allows the log to print if the expression is true.
   *
   * This is a non-standard method.
   */
  public test(expression: boolean): Log<C> {
    return new Log<C>().test(expression);
  }

  /**
   * Starts a timer associated with this log's *label*. This will do nothing if
   * this log has no label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
   */
  public get time(): Log<C> {
    return new Log<C>().time;
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public get timeNow(): Log<C> {
    return new Log<C>().timeNow;
  }

  /**
   * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the
   * difference between the start time and when this method was called. This then
   * modifies the log render to show the time difference. This will do nothing if the *label* does
   * not exist.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
   */
  public get timeEnd(): Log<C> {
    return new Log<C>().timeEnd;
  }

  /*
    ! console.timeLog() is purposefully omitted from this API.

    timeLog() is a useless method within the Adze API. The same effect can be 
    accomplished by created a new log with the same label.
  */

  /**
   * This modifier method tells the log to render a timestamp.
   *
   * This is a non-standard API.
   */
  public get timestamp(): Log<C> {
    return new Log<C>().timestamp;
  }

  // ===================================
  //   Generate Log Data
  // ===================================

  /**
   * Hydrate this log's properties from a log data object.
   */
  public hydrate(data: LogData<C> | FinalLogData<C>): Log<C> {
    return new Log<C>().hydrate(data);
  }
}

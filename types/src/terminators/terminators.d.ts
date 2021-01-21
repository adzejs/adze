import { Log, FinalLog, LogFunction, CustomLogFunction, LogRender } from '../_contracts';
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
export declare function seal(this: Log): () => Log;
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
export declare function thread(this: Log, key: string, value: any): void;
/**
 * Closes a thread assigned to the log by clearing the context values.
 */
export declare function close(this: Log): void;
/**
 * Alias for console.clear().
 */
export declare function clear(this: Log): void;
/**
 * Alias for clear() which is an alias for console.clear().
 */
export declare function clr(this: Log): void;
/**
 * Generates a terminating log method the specified log level name.
 */
export declare function logMethod(levelName: string): LogFunction;
/**
 * Generates a terminating log method that enables the user to specify a custom
 * log level by key as the format for the log.
 */
export declare function customMethod(): CustomLogFunction;
/**
 * Stores this log in the Shed if the Shed exists.
 */
export declare function store(log: FinalLog): void;
/**
 * Fires listeners for this log instance if a Shed exists.
 */
export declare function fireListeners(render: LogRender, log: FinalLog): void;

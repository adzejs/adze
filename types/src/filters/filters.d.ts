import { LogRender, Collection, LogData, LevelFilter } from '../_contracts';
import { Log } from '../log';
/**
 * Filter a collection of logs by the namespace.
 */
export declare function filterNamespace(collection: Collection | undefined, ns: string[]): Collection;
/**
 * Filter and render the collection of logs by the label.
 */
export declare function filterLabel(collection: Collection | undefined, lbl: string): Collection;
/**
 * Filter the collection of logs by their log level.
 */
export declare function filterLevel(collection: Collection | undefined, levels: LevelFilter): Collection;
/**
 * Executes a callback on each value of a collection. The callback receives a
 * log data object for each log in the collection. If a truthy value is returned the
 * current log of the iteration will be added into a new collection. If a falsy value is
 * returned it will be omitted.
 */
export declare function filterCollection(collection: Collection, cb: (log: LogData) => boolean): Collection;
/**
 * If the provided log has been previously rendered, this function
 * re-renders it to the console.
 */
export declare function rerender(log: Log): void;
/**
 * Render a log to the console based on a log render object.
 */
export declare function render([method, args]: LogRender): void;

import { Log, LogRender, FinalLog, Collection } from '../_contracts';
/**
 * Filter a collection of logs by the namespace.
 */
export declare function filterNamespace(collection: Collection | undefined, ns: string | string[]): Collection;
/**
 * Filter and render the bundle of logs by the label.
 */
export declare function filterLabel(collection: Collection | undefined, lbl: string): Collection;
/**
 * Filter the bundle of logs by their log level.
 */
export declare function filterLevelRange(collection: Collection | undefined, low: number, high: number): Collection;
/**
 * Loops over a bundle of logs and executes the callback for each log that
 * has a render value.
 */
export declare function loopCollection(collection: Collection, cb: (log: Log | FinalLog) => boolean): Collection;
/**
 * If the provided log has been previously rendered, this function
 * re-renders it to the console.
 */
export declare function rerender(log: FinalLog): void;
/**
 * Render a log to the console based on a render object.
 */
export declare function render([method, args]: LogRender): void;

import { Log, LogRender } from '~/_contracts';
/**
 * Re-render the bundle of logs.
 */
export declare function filterAll(bundle?: Log[]): void;
/**
 * Filter the bundle of logs by the namespace.
 */
export declare function filterNamespace(bundle: Log[] | undefined, ns: string | string[]): void;
/**
 * Filter and render the bundle of logs by the label.
 */
export declare function filterLabel(bundle: Log[] | undefined, lbl: string): void;
/**
 * Filter the bundle of logs by their log level.
 */
export declare function filterLevelRange(bundle: Log[] | undefined, low: number, high: number): void;
/**
 * Render a log based on a render object.
 */
export declare function render([method, args]: LogRender): void;

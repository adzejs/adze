import { FinalLog, LogRender, ConsoleMethod } from '../_contracts';
export declare function print(log: FinalLog): LogRender;
export declare function printGroupEnd(log: FinalLog): LogRender;
export declare function printTable(log: FinalLog): LogRender;
export declare function printDir(log: FinalLog): LogRender;
export declare function printDirxml(log: FinalLog): LogRender;
export declare function printTrace(log: FinalLog): LogRender;
/**
 * Applies the render tuple to the log instance. If spread is indicated, the args
 * value will be an array. If spread is false, the args value will be an array with
 * a nested array to prevent the spread operator from destructuring the values.
 */
export declare function applyRender(log: FinalLog, method: ConsoleMethod, args: unknown[], spread?: boolean): LogRender;
/**
 * Render the log. If the ADZE_ENV is set to "dev" the log will not render and
 * will be returned for unit library development purposes.
 */
export declare function toConsole(render: LogRender, is_silent: boolean): LogRender;
/**
 * Formats the namespace on the log string based on the namespace
 * modifier applied to this log.
 */
export declare function fNamespace(log: FinalLog): string;

import { Log, LogRender, ConsoleMethod, LogLevelDefinition } from "~/_contracts";
export declare function print(log: Log, def: LogLevelDefinition, args: any[]): LogRender;
export declare function printGroupEnd(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]): LogRender;
export declare function printTable(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]): LogRender;
export declare function printDir(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]): LogRender;
export declare function printDirxml(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]): LogRender;
export declare function printTrace(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]): LogRender;
export declare function applyRender(log: Log, method: ConsoleMethod, args: any[]): LogRender;
/**
 * Render the log. If the ADZE_ENV is set to "dev" the log will not render and
 * will be returned for unit library development purposes.
 */
export declare function toConsole(render: LogRender, is_silent: boolean, spread?: boolean): LogRender;
/**
 * Formats the namespace on the log string based on the namespace
 * modifier applied to this log.
 */
export declare function fNamespace(log: Log): string;

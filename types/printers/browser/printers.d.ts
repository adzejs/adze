import { FinalLog, LogLevelDefinition, LogRender } from '../../_contracts';
/**
 * The primary method for printing logs to the browser console.
 */
export declare function printLog(log: FinalLog, use_emoji: boolean): LogRender;
/**
 * The method for printing group logs to the browser console.
 */
export declare function printGroup(log: FinalLog, use_emoji: boolean): LogRender;
/**
 * The method for printing collapsed group logs to the browser console.
 */
export declare function printGroupCollapsed(log: FinalLog, use_emoji: boolean): LogRender;
/**
 * Formats the leader of the log string. This contains the emoji if enabled,
 * the log level name, and the number of arguments being printed.
 */
export declare function fLeader(def: LogLevelDefinition, use_emoji: boolean, args: any[]): string;
/**
 * Formats the meta section of the log string which includes the
 * log namespace, the label, the timestamp from the timer, the count
 * from the counter, or the test result from any assertions if any of
 * these modifiers were applied to this log.
 */
export declare function fMeta(log: FinalLog, use_emoji: boolean): string;

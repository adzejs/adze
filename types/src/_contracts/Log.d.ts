import { Label } from './Label';
import { LogLevelDefinition, ConsoleMethod, Defaults } from '.';
/**
 * Fingerprint of the function that is called when you execute
 * a log method such as info().
 */
export declare type LogFunction = (...args: any[]) => TerminatedLog;
/**
 * Fingerprint of the function that is called when you execute
 * a custom log method defined in the configuration.
 */
export declare type CustomLogFunction = (levelName: string, ...args: any[]) => TerminatedLog;
/**
 * The keys of the default terminating log methods included with Adze.
 */
export declare type TerminatingMethodKeys = 'attention' | 'error' | 'warn' | 'fail' | 'success' | 'info' | 'log' | 'debug' | 'verbose';
/**
 * The configuration interface for the default Adze terminating log methods.
 */
export declare type TerminatingMethods = {
    [method in TerminatingMethodKeys]: LogFunction;
};
export interface LogTimestamp {
    unixMilli: number;
    utc: string;
}
/**
 * Boolean flags that represent various states of how the log
 * should be printed.
 */
interface LogFlags {
    traceable: boolean;
    assertion?: boolean;
    expression?: boolean;
    isSilent: boolean;
    dumpContext: boolean;
}
/**
 * Values of the log instance that determine how it should
 * be printed.
 */
interface LogValues {
    cfg: Defaults;
    timestamp?: LogTimestamp;
    render?: LogRender;
    level?: number;
    args?: any[];
    namespaceVal?: string | string[];
    labelVal?: Label;
    timeNowVal?: string;
    metaData: MetaData;
    modifierQueue: Array<() => void>;
    printer(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]): LogRender;
}
export interface MetaData {
    [key: string]: any;
}
/**
 * All of the user accessible methods that can be chained to
 * create a customized log.
 */
interface LogMethods {
    custom: CustomLogFunction;
    seal(this: Log): () => Log;
    context<T>(): T;
    thread(key: string, value: any): void;
    close(): void;
    clear(): void;
    clr(): void;
    count(): Log;
    countReset(): Log;
    dir(): Log;
    dirxml(): Log;
    dump(): Log;
    table(): Log;
    assert(assertion: boolean): Log;
    test(expression: boolean): Log;
    group(): Log;
    groupCollapsed(): Log;
    groupEnd(): Log;
    label(name: string): Log;
    meta<T>(key: string, val: T): Log;
    ns(ns: string): Log;
    namespace(ns: string | string[]): Log;
    silent(): Log;
    trace(): Log;
    time(): Log;
    timeNow(): Log;
    timeEnd(): Log;
}
/**
 * The final Adze log object prototype interface.
 */
export interface Log extends LogFlags, LogValues, LogMethods, TerminatingMethods {
}
export interface FinalLog extends Log {
    level: number;
    timestamp: LogTimestamp;
    args: any[];
    definition: LogLevelDefinition;
}
/**
 * The render value for a Log.
 */
declare type Arguments = any[];
export declare type LogRender = [ConsoleMethod, Arguments];
/**
 * The final value of a log after it has been terminated. This is useful for
 * gleaning the final render information and getting the Log instance for
 * unit testing purposes.
 */
export interface TerminatedLog {
    log: Log | FinalLog;
    render: LogRender | null;
}
export declare type Collection = FinalLog[];
export {};

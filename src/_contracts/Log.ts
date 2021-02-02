import { Label } from './Label';
import { LogLevelDefinition, ConsoleMethod, Defaults } from '.';

/**
 * Fingerprint of the function that is called when you execute
 * a log method such as info().
 */
export type LogFunction = (...args: unknown[]) => TerminatedLog;

/**
 * Fingerprint of the function that is called when you execute
 * a custom log method defined in the configuration.
 */
export type CustomLogFunction = (
  levelName: string,
  ...args: unknown[]
) => TerminatedLog;

/**
 * The keys of the default terminating log methods included with Adze.
 */
export type TerminatingMethodKeys =
  | 'attention'
  | 'error'
  | 'warn'
  | 'fail'
  | 'success'
  | 'info'
  | 'log'
  | 'debug'
  | 'verbose';

/**
 * The configuration interface for the default Adze terminating log methods.
 */
export type TerminatingMethods = {
  [method in TerminatingMethodKeys]: LogFunction;
};

export interface LogTimestamp {
  unixMilli: number;
  utc: string;
}

export type PrintFunction = (log: FinalLog, use_emoji: boolean) => LogRender;

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
  timestamp: LogTimestamp | null;
  stacktrace: string | null;
  render: LogRender | null;
  level: number | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: unknown[] | null;
  namespaceVal?: string[];
  labelVal?: Label;
  timeNowVal?: string;
  metaData: MetaData;
  modifierQueue: Array<() => void>;
  printer: PrintFunction;
}

export interface MetaData {
  [key: string]: unknown;
}

/**
 * All of the user accessible methods that can be chained to
 * create a customized log.
 */
interface LogMethods {
  custom: CustomLogFunction;
  seal(this: Log): () => Log;
  context<T>(): T;
  thread(key: string, value: unknown): void;
  close(): void;
  clear(): void;
  clr(): void;
  // Modifier Functions
  count: Log;
  countReset: Log;
  countClear: Log;
  dir: Log;
  dirxml: Log;
  dump: Log;
  table: Log;
  assert(assertion: boolean): Log;
  test(expression: boolean): Log;
  group: Log;
  groupCollapsed: Log;
  groupEnd: Log;
  label(name: string): Log;
  meta<T>(key: string, val: T): Log;
  ns(ns: string): Log;
  namespace(ns: string | string[]): Log;
  silent: Log;
  trace: Log;
  time: Log;
  timeNow: Log;
  timeEnd: Log;
}

/**
 * The final Adze log object prototype interface.
 */
export interface Log
  extends LogFlags,
    LogValues,
    LogMethods,
    TerminatingMethods {}

export interface FinalLog extends Log {
  level: number;
  timestamp: LogTimestamp;
  render: LogRender;
  args: unknown[];
  definition: LogLevelDefinition;
}

/**
 * The render value for a Log.
 */
type Arguments = unknown[];
export type LogRender = [ConsoleMethod, Arguments];

/**
 * The final value of a log after it has been terminated. This is useful for
 * gleaning the final render information and getting the Log instance for
 * unit testing purposes.
 */
export interface TerminatedLog {
  log: Log | FinalLog;
  render: LogRender | null;
}

export type Collection = FinalLog[];

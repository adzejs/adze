import { Log } from '../Log';
import { LogLevelDefinition, ConsoleMethod, Defaults, LabelData } from '.';

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
 * To keep the size of this library down we are providing
 * the user with standard browser timestamp values.
 */
export interface LogTimestamp {
  unixMilli: number;
  utc: string;
}
/**
 * A queue of modifier methods that apply various property
 * transforms on the Log instance. They are queued up so that
 * ordering can be established internally to make the end user
 * API easier to use.
 */
export type ModifierQueue = Array<() => void>;

type PrintMethodNames =
  | 'Dir'
  | 'Dirxml'
  | 'Log'
  | 'Group'
  | 'GroupCollapsed'
  | 'GroupEnd'
  | 'Trace'
  | 'Table';

/**
 * Printer class method names. This is used within Log internally
 * for selecting which Printer method to use to render the Log.
 */
export type PrintMethod = `print${PrintMethodNames}`;

/**
 * Interface for unknown meta data values provided by the user.
 */
export interface MetaData {
  [key: string]: unknown;
}

/**
 * The render value for a Log.
 */
type Arguments = unknown[];
export type LogRender = [ConsoleMethod, Arguments];

/**
 * Type alias for an array of Log instances.
 */
export type Collection = Log[];

/**
 * Log data object generated from a Log instance. This is
 * primarily used for listeners and log cloning.
 */
export interface LogData {
  cfg: Defaults;
  level: number | null;
  definition: LogLevelDefinition | null;
  args: unknown[] | null;
  timestamp: LogTimestamp | null;
  stacktrace: string | null;
  namespace: string[] | null;
  dumpContext: boolean;
  meta: MetaData;
  context: MetaData;
  label: LabelData;
  timeNow: string | null;
  assertion?: boolean;
  expression?: boolean;
  isSilent: boolean;
}

/**
 * Log data object generated from a Log instance after it
 * has been terminated. The values in this extended interface
 * reflect that they are no longer possibly null.
 */
export interface FinalLogData extends LogData {
  level: number;
  definition: LogLevelDefinition;
  args: unknown[];
  timestamp: LogTimestamp;
}

/**
 * The final value of a log after it has been terminated. This is useful for
 * gleaning the final render information and getting the Log instance for
 * unit testing purposes.
 */
export interface TerminatedLog {
  log: Log;
  render: LogRender | null;
}

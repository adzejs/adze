import { Label } from "./Label";
import { LogLevelDefinition, Configuration, ConsoleMethod, Defaults } from ".";

/**
 * Fingerprint of the function that is called when you execute
 * a log method such as info().
 */
export type LogFunction = (...args: any[]) => TerminatedLog;

/**
 * Fingerprint of the function that is called when you execute
 * a custom log method defined in the configuration.
 */
export type CustomLogFunction = (levelName: string, ...args: any[]) => TerminatedLog;

/**
 * The keys of the default terminating log methods included with Adze.
 */
export type TerminatingMethodKeys = "attention"|"error"|"warn"|"fail"|"success"|"info"|"log"|"debug"|"verbose";

/**
 * The configuration interface for the default Adze terminating log methods.
 */
export type TerminatingMethods = {
  [method in TerminatingMethodKeys]: LogFunction;
};

/**
 * Boolean flags that represent various states of how the log
 * should be printed.
 */
interface LogFlags {
  traceable: boolean;
  assertion?: boolean;
  expression?: boolean;
}

/**
 * Values of the log instance that determine how it should
 * be printed.
 */
interface LogValues {
  cfg: Configuration;
  render?: LogRender;
  args?: any[];
  namespaceVal?: string;
  labelVal?: Label;
  modifierQueue: Function[];
  printer(this: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]): LogRender;
}

export type Bundle = (user_cfg?: Configuration) => Log;

export interface Bundled {
  all(): void;
};

/**
 * All of the user accessible methods that can be chained to
 * create a customized log.
 */
interface LogMethods {
  custom: CustomLogFunction;
  seal(this: Log): Log;
  cache(this: Log, args: any[]): void;
  print(this: Log, def: LogLevelDefinition, args: any[]): LogRender;
  fireListeners(this: Log, args: any[]): void;
  
  // Modifier Functions
  count(): Log;
  countReset(): Log;
  dir(): Log;
  dirxml(): Log;
  table(): Log;
  assert(assertion: boolean): Log;
  test(expression: boolean): Log;
  group(): Log;
  groupCollapsed(): Log;
  groupEnd(): Log;
  label(name: string): Log;
  ns(ns: string): Log;
  namespace(ns: string): Log;
  trace(): Log;
  time(): Log;
  timeNow(): Log;
  timeEnd(): Log;
}

/**
 * The final Adze log object prototype interface.
 */
export interface Log extends LogFlags, LogValues, LogMethods, TerminatingMethods, Bundled {};

/**
 * The render value for a Log.
 */
type Arguments = any[];
export type LogRender = [ConsoleMethod, Arguments];

/**
 * The final value of a log after it has been terminated. This is useful for 
 * gleaning the final render information and getting the Log instance for 
 * unit testing purposes.
 */
export interface TerminatedLog {
  log: Log;
  render: LogRender|null;
};
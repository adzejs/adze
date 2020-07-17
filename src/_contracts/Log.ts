import { Label } from "./Label";
import { LogLevelDefinition } from ".";

/**
 * Fingerprint of the function that is called when you execute
 * a log method such as info().
 */
export type LogFunction = (...args: any[]) => void;

/**
 * Fingerprint of the function that is called when you execute
 * a custom log method defined in the configuration.
 */
export type CustomLogFunction = (levelName: string, ...args: any[]) => void;

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
  namespaceVal?: string;
  labelVal?: Label;
  modifierQueue: Function[];
  printer(this: Log, def: LogLevelDefinition, ...args: any[]): void;
}

/**
 * All of the user accessible methods that can be chained to
 * create a customized log.
 */
interface LogMethods {
  custom: CustomLogFunction;
  cache(this: Log, def: LogLevelDefinition, args: any[]): void;
  print(this: Log, def: LogLevelDefinition, base_style: string, args: any[]): void;
  fireListeners(this: Log, def: LogLevelDefinition, args: any[]): void;
  
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
export interface Log extends LogFlags, LogValues, LogMethods, TerminatingMethods {};
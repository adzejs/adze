import { LogFunction } from './shed';
import { Label } from "./label";
import { LogLevelDefinition } from ".";

export type ConsoleMethod = "error"|"warn"|"info"|"log"|"debug"|"trace";

interface LogFlags {
  traceable: boolean;
  assertion?: boolean;
  expression?: boolean;
}

interface LogValues {
  namespaceVal?: string;
  labelVal?: Label;
  modifierQueue: Function[];
  printer(this: Log, def: LogLevelDefinition, ...args: any[]): void;
}

interface LogMethods {
  [name: string]: LogFunction;
  
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

export interface Log extends LogValues, LogFlags, LogMethods {}
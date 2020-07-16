import { Label } from "./Label";
import { LogLevelDefinition, LogFunction } from ".";

export type MethodKeys = "attention"|"error"|"warn"|"fail"|"success"|"info"|"log"|"debug"|"verbose";

export type Methods = {
  [method in MethodKeys]: LogFunction;
};

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
  custom: LogFunction;
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

export interface BaseLog extends LogFlags, LogValues, LogMethods {};

export type Log = BaseLog & Methods;
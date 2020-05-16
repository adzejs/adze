import { Log } from './log';
import { Label } from './label';
import { LogLevelDefinition } from '.';
import { Defaults } from './defaults';

type LabelMap = Map<string, Label>;

export type ListenerLocations = Array<[number, number]>;

export type Listeners<M> = Map<number, Map<number, ListenerCallback<M>>>;

export interface ListenerData<M> extends Log<M>, LogLevelDefinition {
  args: any[];
}

export type ListenerCallback<M> = (log: ListenerData<M>) => void;

interface ShedProps<M> {
  cfg: Defaults;
  cache: Array<[Log<M>, LogLevelDefinition, any[]]>;
  id_counter: number;
  listeners: Listeners<M>;
  labels: LabelMap;
}

interface ShedMethods<M> {
  assignId(this: Shed<M>): number;
  addToCache(this: Shed<M>, log: Log<M>, def: LogLevelDefinition, args: any[]): void;
  addListener(this: Shed<M>, levels: number[], cb: ListenerCallback<M>): void;
  removeListener(this: Shed<M>, locations: ListenerLocations): void;
  fireListeners(this: Shed<M>, ctxt: Log<M>, def: LogLevelDefinition, args: any[]): void;
}

export interface Shed<M> extends ShedProps<M>, ShedMethods<M> {}

export interface LogFunctions {
  [name: string]: LogFunction;
}

export type LogFunction = (...args: any[]) => void;
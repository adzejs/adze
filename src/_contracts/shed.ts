import { Log, FinalLog, Bundle, Label, LogLevelDefinition, Defaults } from '.';

export type LabelMap = Map<string, Label>;

export type ListenerLocations = Array<[number, number]>;

export type ListenerBuckets = Map<number, ListenerBucket>;

export type ListenerBucket = Map<number, ListenerCallback>;

export type ListenerCallback = (log: Log) => void;

export interface AdzeFilters {
  hideAll: boolean;
  level?: FilterOptions<number>;
  label?: FilterOptions<string>;
  namespace?: FilterOptions<string>;
}

export interface FilterOptions<T> {
  include: Array<T>;
  exclude: Array<T>;
}

export interface ShedConfig {
  cache_limit: number;
  global_cfg: Defaults|null;
  filters: AdzeFilters;
}

export interface ShedUserConfig extends Partial<ShedConfig> {}
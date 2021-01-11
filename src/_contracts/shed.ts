import { Log, Label, Defaults, Levels } from '.';

export type LabelMap = Map<string, Label>;

export type ListenerLocations = Array<[number, number]>;

export type ListenerBuckets = Map<number, ListenerBucket>;

export type ListenerBucket = Map<number, ListenerCallback>;

export type ListenerCallback = (log: Log) => void;

export interface ShedConfig {
  cache_limit: number;
  global_cfg: Defaults|null;
  filters: AdzeFilters;
}

export interface AdzeFilters {
  hideAll?: boolean;
  level?: GlobalFilterOptions<Levels>;
  label?: GlobalFilterOptions<string[]>;
  namespace?: GlobalFilterOptions<string[]>;
}

export interface GlobalFilterOptions<T> {
  include: T;
  exclude: T;
}

export interface ShedUserConfig extends Partial<ShedConfig> {}

export type GlobalFilter = "label"|"namespace"|"level";

export type FilterValue = string[]|number[]|"*"|undefined;
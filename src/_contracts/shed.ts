import { Log, Label, Defaults, Range } from '.';

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
  level?: GlobalFilterOptions<LevelFilter>;
  label?: GlobalFilterOptions<string[]>;
  namespace?: GlobalFilterOptions<string[]>;
}

export interface GlobalFilterOptions<T> {
  include?: T;
  exclude?: T;
}

export interface ShedUserConfig extends Partial<ShedConfig> {}

export type GlobalFilter = "label"|"namespace"|"level";

export type LevelFilter = "*"|Range|number[];

export type FilterType = "include"|"exclude";

export type FilterFunction = "isIncluded"|"isNotExcluded";

export type FilterAllowedCallback = (filter: FilterType, func: FilterFunction) => boolean|undefined;
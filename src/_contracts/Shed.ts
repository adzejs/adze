import { Log, Label, Defaults } from '.';

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
  level?: GlobalFilterOptions<number[]>;
  label?: GlobalFilterOptions<string[]>;
  namespace?: GlobalFilterOptions<string[]>;
}

export interface UserAdzeFilters extends Omit<AdzeFilters, "level"> {
  level?: GlobalFilterOptions<LevelFilter>
}

export interface GlobalFilterOptions<T> {
  include?: T;
  exclude?: T;
}

export interface ShedUserConfig extends Partial<Omit<ShedConfig, "filters">> {
  filters: UserAdzeFilters;
}

export type GlobalFilter = "label"|"namespace"|"level";

export type LevelFilter = string|number[];

export type FilterType = "include"|"exclude";

export type FilterFunction = "isIncluded"|"isNotExcluded";

export type FilterAllowedCallback = (filter: FilterType, func: FilterFunction) => boolean|undefined;
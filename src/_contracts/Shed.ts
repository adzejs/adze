import { Label } from '../label';
import { Defaults, Configuration, LogRender, LogData } from '.';

export type LabelMap = Map<string, Label>;

export type ListenerLocations = Array<[number, number]>;

export type ListenerBuckets = Map<number, ListenerBucket>;

export type ListenerBucket = Map<number, ListenerCallback>;

export type ListenerCallback = (
  LogData: LogData,
  render: LogRender | null
) => void;

export interface ShedConfig {
  cache_limit: number;
  global_cfg: Defaults | null;
  filters: AdzeFilters;
}

export interface AdzeFilters {
  hideAll?: boolean;
  level?: GlobalFilterOptions<number[]>;
  label?: GlobalFilterOptions<string[]>;
  namespace?: GlobalFilterOptions<string[]>;
}

export interface UserAdzeFilters extends Omit<AdzeFilters, 'level'> {
  level?: GlobalFilterOptions<LevelFilter>;
}

export interface GlobalFilterOptions<T> {
  include?: T;
  exclude?: T;
}

export interface ShedUserConfig
  extends Partial<Omit<ShedConfig, 'filters' | 'global_cfg'>> {
  filters: UserAdzeFilters;
  global_cfg: Configuration | null;
}

export type GlobalFilter = 'label' | 'namespace' | 'level';

export type LevelFilter = string | number[];

export type FilterType = 'include' | 'exclude';

export type FilterFunction = 'isIncluded' | 'isNotExcluded';

export type FilterAllowedCallback = (
  filter: FilterType,
  func: FilterFunction
) => boolean | undefined;

export interface LabelData {
  name: string | null;
  timeNow: string | null;
  timeEllapsed: string | null;
  count: number | null;
}

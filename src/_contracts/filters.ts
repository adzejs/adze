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

export type GlobalFilter = 'label' | 'namespace' | 'level';

export type Range = [number, '-', number];

export type LevelFilter = '*' | Range | number[];

export type FilterType = 'include' | 'exclude';

export type FilterFunction = <T>(source: T[], value: T) => boolean;

export type FilterAllowedCallback = (
  filter: FilterType,
  func: FilterFunction
) => boolean | undefined;

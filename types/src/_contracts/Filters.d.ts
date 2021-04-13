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
export declare type GlobalFilter = 'label' | 'namespace' | 'level';
export declare type LevelFilter = string | number[];
export declare type FilterType = 'include' | 'exclude';
export declare type FilterFunction = <T>(source: T[], value: T) => boolean;
export declare type FilterAllowedCallback = (filter: FilterType, func: FilterFunction) => boolean | undefined;

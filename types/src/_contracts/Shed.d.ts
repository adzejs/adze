import { Label } from '../label';
import { Defaults, Configuration, LogRender, LogData } from '.';
import { FinalLogData } from './Log';
export declare type LabelMap = Map<string, Label>;
export declare type ListenerLocations = Array<[number, number]>;
export declare type ListenerBuckets = Map<number, ListenerBucket>;
export declare type ListenerBucket = Map<number, ListenerCallback>;
export declare type ListenerCallback = (LogData: LogData | FinalLogData, render: LogRender | null) => void;
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
export interface ShedUserConfig extends Partial<Omit<ShedConfig, 'filters' | 'global_cfg'>> {
    filters?: UserAdzeFilters;
    global_cfg?: Configuration | null;
}
export declare type GlobalFilter = 'label' | 'namespace' | 'level';
export declare type LevelFilter = string | number[];
export declare type FilterType = 'include' | 'exclude';
export declare type FilterFunction = 'isIncluded' | 'isNotExcluded';
export declare type FilterAllowedCallback = (filter: FilterType, func: FilterFunction) => boolean | undefined;
export interface LabelData {
    name: string | null;
    timeNow: string | null;
    timeEllapsed: string | null;
    count: number | null;
}

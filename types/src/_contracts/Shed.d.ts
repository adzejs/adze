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
}
export interface ShedUserConfig extends Partial<Omit<ShedConfig, 'global_cfg'>> {
    global_cfg?: Configuration | null;
}
export interface LabelData {
    name: string | null;
    timeNow: string | null;
    timeEllapsed: string | null;
    count: number | null;
}

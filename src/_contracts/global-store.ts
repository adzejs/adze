import { Label } from '../label';
import { Defaults, Configuration, LogRender, LogData } from '.';
import { FinalLogData } from './Log';

export type LabelMap = Map<string, Label>;

export type ListenerLocations = Array<[number, number]>;

export type ListenerBuckets = Map<number, ListenerBucket>;

export type ListenerBucket = Map<number, ListenerCallback>;

export type ListenerCallback = (
  LogData: LogData<any> | FinalLogData<any>,
  render: LogRender | null,
  printed: boolean
) => void;

export interface GlobalStoreConfig {
  cacheLimit: number;
  globalCfg: Defaults | null;
}

export interface GlobalStoreUserConfig extends Partial<Omit<GlobalStoreConfig, 'globalCfg'>> {
  globalCfg?: Configuration | null;
}

export interface LabelData {
  name: string | null;
  timeElapsed: string | null;
  count: number | null;
}

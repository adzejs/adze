import { Log, ConsoleMethod } from './log';
import { CustomLogLevels } from './configuration';
import { Label } from './label';

type LabelMap = Map<string, Label>;

export interface LogFunctions {
  [name: string]: (...args: any[]) => void;
}

export interface Shed {
  cfg: Defaults;
  cache: Log[];
  labels: LabelMap;
}

export interface Defaults {
  log_level: number;
  log_cache_size: number;
  use_emoji: boolean;
  base_style: string;
  log_levels: BaseLogLevels;
  custom_levels?: CustomLogLevels;
  filters: Filters;
};

export type BaseLogLevels = {
  verbose: LogLevelDefinition;
  debug: LogLevelDefinition;
  log: LogLevelDefinition;
  success: LogLevelDefinition;
  info: LogLevelDefinition;
  warn: LogLevelDefinition;
  fail: LogLevelDefinition;
  error: LogLevelDefinition;
  attention: LogLevelDefinition;
}

export interface LogLevelDefinition {
  level: number;
  levelName?: string;
  method: ConsoleMethod;
  style: string;
  terminal: string|string[];
  emoji: string;
}

export interface Filters {
  hideAll: boolean;
  namespace: FilterOptions;
  label: FilterOptions;
}

export interface FilterOptions {
  hideAll: boolean;
  exclude: string[];
  include: string[];
}
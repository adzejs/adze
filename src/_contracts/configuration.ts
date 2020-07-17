import { Log, Label, RecursivePartial } from '.';

type LabelMap = Map<string, Label>;

export type ConsoleMethod = "error"|"warn"|"info"|"log"|"debug"|"trace";

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
  log_levels: LogLevels;
  custom_levels: Partial<LogLevels>;
  filters: Filters;
};

export type LogLevels = {
  [method: string]: LogLevelDefinition;
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

export interface Configuration extends RecursivePartial<Defaults> {};
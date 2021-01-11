import { Log, Label, RecursivePartial, ChalkStyles } from '.';

type LabelMap = Map<string, Label>;

export type ConsoleMethod = "error"|"warn"|"info"|"log"|"debug"|"trace"|"group"|"groupCollapsed"|"groupEnd"|"table"|"dir"|"dirxml";

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
  terminal: ChalkStyles[];
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

export type Levels = number[] | "*";
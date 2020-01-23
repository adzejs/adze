import { ConsoleMethod } from './log';

export interface Configuration {
  log_level?: number;
  log_cache_size?: number;
  use_emoji?: boolean;
  base_style?: string;
  log_levels?: BaseLogLevelsConfiguration;
  custom_levels?: CustomLogLevels;
  filters?: Filters;
};

export interface BaseStyles {
  group?: string;
  single?: string;
};

export type BaseLogLevelsConfiguration = {
  detail?: LogLevelOverrides;
  debug?: LogLevelOverrides;
  log?: LogLevelOverrides;
  success?: LogLevelOverrides;
  info?: LogLevelOverrides;
  warn?: LogLevelOverrides;
  fail?: LogLevelOverrides;
  error?: LogLevelOverrides;
  attention?: LogLevelOverrides;
}

export interface CustomLogLevels {
  [type: string]: LogLevelDefinition;
}

export interface LogLevelDefinition {
  level: number;
  method: ConsoleMethod;
  baseStyle: string;
  style: string;
  terminal: string|string[];
  emoji: string;
}

export interface LogLevelOverrides {
  level?: number;
  method?: ConsoleMethod;
  style?: string;
  terminal?: string|string[];
  emoji?: string;
}

export interface Filters {
  hideAll?: boolean;
  namespace?: FilterOptions;
  label?: FilterOptions;
}

export interface FilterOptions {
  hideAll?: boolean;
  exclude?: string[];
  include?: string[];
}
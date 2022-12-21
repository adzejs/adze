import { RecursivePartial, ChalkStyle } from '.';
import { AdzeFilters, UserAdzeFilters } from './Filters';

export type ConsoleMethod =
  | 'error'
  | 'warn'
  | 'info'
  | 'log'
  | 'debug'
  | 'trace'
  | 'group'
  | 'groupCollapsed'
  | 'groupEnd'
  | 'table'
  | 'dir'
  | 'dirxml';

export interface Defaults {
  argCount: boolean;
  baseStyle: string;
  captureStacktrace: boolean;
  customLevels: LogLevels;
  filters: AdzeFilters;
  logLevel: number;
  logLevels: LogLevels;
  machineReadable: boolean;
  meta: {
    [key: string]: unknown;
  };
  terminalColorFidelity: 0 | 1 | 2 | 3;
  useEmoji: boolean;
  unstyled: boolean;
}

export type LogLevels = {
  [method: string]: LogLevelDefinition;
};

export interface LogLevelDefinition {
  level: number;
  levelName?: string;
  method: ConsoleMethod;
  style: string;
  terminal: ChalkStyle[];
  emoji: string;
}

export interface Configuration extends Partial<Omit<Defaults, 'filters' | 'logLevels'>> {
  logLevels?: RecursivePartial<LogLevels>;
  filters?: UserAdzeFilters;
}

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
  logLevel: number;
  useEmoji: boolean;
  terminalColorFidelity: 0 | 1 | 2 | 3;
  captureStacktrace: boolean;
  unstyled: boolean;
  baseStyle: string;
  logLevels: LogLevels;
  customLevels: LogLevels;
  filters: AdzeFilters;
  meta: {
    [key: string]: unknown;
  };
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Configuration extends Partial<Omit<Defaults, 'filters' | 'logLevels'>> {
  logLevels?: RecursivePartial<LogLevels>;
  filters?: UserAdzeFilters;
}

import { RecursivePartial, ChalkStyle } from '.';
import { AdzeFilters, UserAdzeFilters } from './Filters';
export declare type ConsoleMethod = 'error' | 'warn' | 'info' | 'log' | 'debug' | 'trace' | 'group' | 'groupCollapsed' | 'groupEnd' | 'table' | 'dir' | 'dirxml';
export interface Defaults {
    log_level: number;
    use_emoji: boolean;
    terminal_color_fidelity: 0 | 1 | 2 | 3;
    capture_stacktrace: boolean;
    base_style: string;
    log_levels: LogLevels;
    custom_levels: LogLevels;
    filters: AdzeFilters;
    meta: {
        [key: string]: unknown;
    };
}
export declare type LogLevels = {
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
export interface Configuration extends Partial<Omit<Defaults, 'filters' | 'log_levels'>> {
    log_levels?: RecursivePartial<LogLevels>;
    filters?: UserAdzeFilters;
}

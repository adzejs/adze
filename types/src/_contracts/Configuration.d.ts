import { RecursivePartial, ChalkStyle } from '.';
export declare type ConsoleMethod = 'error' | 'warn' | 'info' | 'log' | 'debug' | 'trace' | 'group' | 'groupCollapsed' | 'groupEnd' | 'table' | 'dir' | 'dirxml';
export interface Defaults {
    log_level: number;
    use_emoji: boolean;
    capture_stacktrace: boolean;
    base_style: string;
    log_levels: LogLevels;
    custom_levels: Partial<LogLevels>;
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
export interface Configuration extends RecursivePartial<Defaults> {
}

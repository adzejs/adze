import { Defaults, LogLevels, LevelFilter, LogRender, ChalkStyle } from '../_contracts';
/**
 * Capitalizes the first character of the provided string.
 */
export declare function initialCaps(str: string): string;
/**
 * Converts a level value of '*' to an array of numbers up to the highest
 * value defined by the user configuration. If levels is already a number array
 * it is returned unchanged.
 */
export declare function formatLevels(cfg: Defaults | null, levels: LevelFilter): number[];
/**
 * Type Guard that validates that a given string represents a
 * range of numbers.
 */
export declare function isRange(val: string): boolean;
/**
 * Returns the highest level from the provided configuration.
 */
export declare function getMaxLevel(cfg: Defaults | null): number;
/**
 * Parse a range string into a tuple of numbers containing low and high.
 */
export declare function parseRange(range: string): [number, number];
/**
 * Get all level values from a config of type LogLevels.
 */
export declare function levelsFromConfig(lvls: LogLevels | Partial<LogLevels>): number[];
/**
 * Create an array of number containing every number from the start value to end value.
 */
export declare function createArrayOfNumbers(start: number, end: number): number[];
/**
 * Render the log. If the ADZE_ENV is set to "dev" the log will not render and
 * will be returned for unit testing purposes.
 */
export declare function toConsole(render: LogRender | null): void;
/**
 * Applies array of chalk styles to the provided string.
 */
export declare function applyChalkStyles(str: string, styles: ChalkStyle[]): string;

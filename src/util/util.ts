import { LogTimestamp, Defaults, LogLevels, LevelFilter } from '../_contracts';
import { env, envIsWindow } from '../global';

/**
 * Capitalizes the first character of the provided string.
 */
export function initialCaps(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Applies property mutations to the provided object.
 */
export function mutateProps<O>(obj: any, mutations: Array<[string, any]>): O {
  mutations.forEach(([prop, val]) => (obj[prop] = val));
  return obj;
}

/**
 * Generate a unique ID for your log.
 */
export function timestamp(): LogTimestamp {
  const unixMilli = Date.now();
  const date = new Date(unixMilli);
  const utc = date.toUTCString();
  return { unixMilli, utc };
}

/**
 * Gets a URLSearchParams object of the current URL.
 */
export function getSearchParams(): URLSearchParams | undefined {
  if (envIsWindow(env)) {
    return new URLSearchParams(env.document.location.search.substring(1));
  }
}

/**
 * Converts a level value of '*' to an array of numbers up to the highest
 * value defined by the user configuration. If levels is already a number array
 * it is returned unchanged.
 */
export function formatLevels(
  cfg: Defaults | null,
  levels: LevelFilter
): number[] {
  if (isString(levels)) {
    if (levels === '*') {
      return createArrayOfNumbers(0, getMaxLevel(cfg));
    }
    if (isRange(levels)) {
      return createArrayOfNumbers(...parseRange(levels));
    }
    console.warn(
      'The provided level filter string is invalid. This will cause logs to stop printing.'
    );
  } else if (isArray(levels)) {
    return levels;
  }
  return [] as number[];
}

/**
 * Type Guard that validates that a given string represents a
 * range of numbers.
 */
export function isRange(val: string): boolean {
  const vals = val.split('-');
  const [low, high] = vals;
  return vals.length === 2 && Number(low) !== NaN && Number(high) !== NaN;
}

/**
 * Returns the highest level from the provided configuration.
 */
export function getMaxLevel(cfg: Defaults | null): number {
  return Math.max(...[8, ...levelsFromConfig(cfg?.custom_levels ?? {})]);
}

/**
 * Parse a range string into a tuple of numbers containing low and high.
 */
export function parseRange(range: string): [number, number] {
  const [low, high] = range.split('-');
  return [Number(low), Number(high)];
}

/**
 * Get all level values from a config of type LogLevels.
 */
export function levelsFromConfig(
  lvls: LogLevels | Partial<LogLevels>
): number[] {
  return Object.values(lvls)
    .map((lvl) => lvl?.level)
    .filter(isDefined);
}

/**
 * Create an array of number containing every number from the start value to end value.
 */
export function createArrayOfNumbers(start: number, end: number): number[] {
  const arr = [];
  for (let i = start; i <= end; i += 1) {
    arr.push(i);
  }
  return arr;
}

/**
 * Type Guard to check if the given value is a String.
 */
export function isString(val: any): val is string {
  return typeof val === 'string';
}

/**
 * Type Guard to check if the given value is an Array.
 */
export function isArray(val: any): val is [] {
  return Array.isArray(val);
}

/**
 * Type Guard that validates that the given value is not undefined.
 */
export function isDefined<T>(val: T | undefined): val is T {
  return val !== undefined;
}

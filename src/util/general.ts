import * as _chalk from 'chalk';
import { Defaults, LogLevels, LevelFilter, LogRender, ChalkStyle, Range } from '../_contracts';
import { isNumber, isArray, isDefined } from './type-guards';
import { globalContext } from './env';

/**
 * Capitalizes the first character of the provided string.
 */
export function initialCaps(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a level value of '*' to an array of numbers up to the highest
 * value defined by the user configuration. If levels is already a number array
 * it is returned unchanged.
 */
export function formatLevels(levels: LevelFilter, cfg: Defaults | null = null): number[] {
  if (levels === '*') {
    return createArrayOfNumbers(0, getMaxLevel(cfg));
  }
  if (isRange(levels)) {
    return createArrayOfNumbers(...parseRange(levels));
  }
  if (isArray(levels)) {
    return levels;
  }
  return [] as number[];
}

/**
 * Type Guard that validates that a given string represents a
 * range of numbers.
 */
export function isRange(val: unknown[]): val is Range {
  return isNumber(val[0]) && val[1] === '-' && isNumber(val[2]);
}

/**
 * Returns the highest level from the provided configuration.
 */
export function getMaxLevel(cfg: Defaults | null): number {
  return Math.max(...[8, ...levelsFromConfig(cfg?.customLevels ?? {})]);
}

/**
 * Parse a range string into a tuple of numbers containing low and high.
 */
export function parseRange(range: Range): [number, number] {
  return [range[0], range[2]];
}

/**
 * Get all level values from a config of type LogLevels.
 */
export function levelsFromConfig(lvls: LogLevels | Partial<LogLevels>): number[] {
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
 * Render the log. If the ADZE_ENV is set to "dev" the log will not render and
 * will be returned for unit testing purposes.
 */
export function toConsole(render: LogRender | null): void {
  if (render && globalContext().ADZE_ENV !== 'dev') {
    const [method, args] = render;
    console[method](...args);
  }
}

/**
 * Applies array of chalk styles to the provided string. An optional terminal color fidelity
 * value can be passed to enable different color fidelities for different terminals.
 *
 * Refer to https://github.com/chalk/chalk#chalklevel
 */
export function applyChalkStyles(
  str: string,
  styles: ChalkStyle[],
  fidelity: 0 | 1 | 2 | 3 = 1
): string {
  // Force chalk colors
  const chalk = new _chalk.Instance({ level: fidelity });
  return styles.reduce((acc, style) => {
    return chalk[style](acc);
  }, str);
}

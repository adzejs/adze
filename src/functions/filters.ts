import { Configuration, LevelFilter } from '..';
import { isRange, isStringArray } from './type-guards';
import { makeRange } from './util';

/**
 * Normalize a level filter value to an array of log level numbers.
 */
export function normalizeLevelFilter(cfg: Configuration, filter: LevelFilter): number[] {
  // If all, return numbers for all levels.
  if (filter === '*') return Object.values(cfg.levels).map((lvl) => lvl.level);
  //
  // Is the provided value a range?
  if (isRange(filter)) {
    // If they are strings, convert them to numbers and return the number range.
    if (isStringArray(filter)) {
      const start = cfg.levels[filter[0]].level;
      const end = cfg.levels[filter[2]].level;
      return makeRange(start, end);
    }
    return makeRange(filter[0], filter[2]);
  }
  // Return array of matching numbers for the provided levels.
  if (isStringArray(filter)) {
    return filter.map((f) => cfg.levels[f].level);
  }
  // If no other condition is met, return the provided array of numbers.
  return filter;
}

/**
 * Is the provided level filtered out?
 */
export function failsLevelFilter(levels: number[], level: number): boolean {
  // If the filter is an empty array, then no levels are filtered.
  if (levels.length === 0) return false;
  // If the level is not in the provided levels, then it is filtered.
  return levels.includes(level);
}

/**
 * Allow only values that are in the include list. If no values are found in the include list,
 * the result is false.
 */
export function isNotIncluded(source: string[], values: string[]): boolean {
  if (source.length === 0) return false;
  if (source.length > 0 && values.length === 0) return true;
  return !values.map((v) => source.includes(v)).includes(true);
}

/**
 * Allow only values that are not in the exclude list. If one or more values are found in the
 * exclude list, the result is false.
 */
export function isExcluded(source: string[], values: string[]): boolean {
  if (source.length === 0) return false;
  if (source.length > 0 && values.length === 0) return true;
  return values.map((v) => source.includes(v)).includes(true);
}

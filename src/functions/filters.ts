import { LevelConfiguration, LevelSelector } from '..';
import Log from '../log';
import { isNumber, isRange, isString, isStringArray } from './type-guards';
import { allLevels, makeRange } from './util';

/**
 * Normalize a level filter value to an array of log level numbers.
 */
export function normalizeLevelSelector(
  levels: Record<string, LevelConfiguration>,
  selector: LevelSelector
): number[] {
  // If all, return numbers for all levels.
  if (selector === '*') return Object.values(levels).map((lvl) => lvl.level);
  // If it's a string, convert it to a number and coerce it to a number array.
  if (isString(selector)) {
    // it's actually not always truthy eslint... you fool...
    return [levels[selector].level];
  }
  // If it's a number, coerce it to a number array.
  if (isNumber(selector)) return [selector];
  // Is the provided value a range?
  if (isRange(selector)) {
    // If they are strings, convert them to numbers and return the number range.
    if (isStringArray(selector)) {
      const start = levels[selector[0]].level;
      const end = levels[selector[2]].level;
      return makeRange(allLevels(levels), start, end);
    }
    return makeRange(allLevels(levels), selector[0], selector[2]);
  }
  // Return array of matching numbers for the provided levels.
  if (Array.isArray(selector) && isStringArray(selector)) {
    return selector.map((f) => levels[f].level);
  }
  // If no other condition is met, return the provided array of numbers.
  return selector;
}

/**
 * Is the provided level filtered out?
 */
export function failsLevelSelector(
  type: 'include' | 'exclude',
  levels: number[],
  level: number
): boolean {
  // If the filter is an empty array, then no levels are filtered.
  if (levels.length === 0) return false;
  // If the level is not in the provided levels, then it is filtered.
  return type === 'include' ? !levels.includes(level) : levels.includes(level);
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

/**
 * Returns an array of Log instances that have the provided label.
 */
export function filterByLabel(label: string, logs: Log[]): Log[] {
  return logs.filter((log) => log.data?.label?.name === label);
}

/**
 * Filters an array of Log instances that contain the provided namespaces.
 */
export function filterByNamespace(namespace: string[], logs: Log[]): Log[] {
  return logs.filter((log) => {
    if (log.data?.namespace) {
      const isMatched = log.data.namespace
        .map((ns: string) => namespace.includes(ns))
        .includes(true);
      return isMatched;
    }
    return false;
  });
}

export function filterByLevel(level: LevelSelector, logs: Log[]): Log[] {
  return logs.filter((log) => {
    const levels = normalizeLevelSelector(log.configuration.levels, level);
    if (log.data?.level === undefined) return false;
    return failsLevelSelector('exclude', levels, log.data.level);
  });
}

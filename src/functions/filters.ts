import { Configuration, LevelSelector } from '..';
import Log from '../log';
import { isNumber, isRange, isString, isStringArray } from './type-guards';
import { allLevels, makeRange } from './util';

/**
 * Normalize a level filter value to an array of log level numbers.
 */
export function normalizeLevelSelector(cfg: Configuration, levels: LevelSelector): number[] {
  // If all, return numbers for all levels.
  if (levels === '*') return Object.values(cfg.levels).map((lvl) => lvl.level);
  // If it's a string, convert it to a number and coerce it to a number array.
  if (isString(levels)) {
    return cfg.levels[levels] ? [cfg.levels[levels].level] : [];
  }
  // If it's a number, coerce it to a number array.
  if (isNumber(levels)) return [levels];
  // Is the provided value a range?
  if (isRange(levels)) {
    // If they are strings, convert them to numbers and return the number range.
    if (isStringArray(levels)) {
      const start = cfg.levels[levels[0]].level;
      const end = cfg.levels[levels[2]].level;
      return makeRange(allLevels(cfg.levels), start, end);
    }
    return makeRange(allLevels(cfg.levels), levels[0], levels[2]);
  }
  // Return array of matching numbers for the provided levels.
  if (Array.isArray(levels) && isStringArray(levels)) {
    return levels.map((f) => cfg.levels[f].level);
  }
  // If no other condition is met, return the provided array of numbers.
  return levels;
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
  console.log('logs arg', logs);
  return logs.filter((log) => log.data?.label?.name === label);
}

/**
 * Filters an array of Log instances that contain the provided namespaces.
 */
export function filterByNamespace(namespace: string[], logs: Log[]): Log[] {
  return logs.filter((log) => {
    if (log.data?.namespace) {
      const isMatched = log.data.namespace.map((ns) => namespace.includes(ns)).includes(true);
      return isMatched;
    }
    return false;
  });
}

export function filterByLevel(level: LevelSelector, logs: Log[]): Log[] {
  return logs.filter((log) => {
    const levels = normalizeLevelSelector(log.configuration, level);
    if (log.data?.level === undefined) return false;
    return failsLevelSelector('exclude', levels, log.data.level);
  });
}

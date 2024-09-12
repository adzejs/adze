import { Configuration } from '../configuration';
import { envIsWindow } from './global';
import { isNumber } from './type-guards';

/**
 * Generates a stacktrace and returns it.
 */
export function stacktrace(): string | undefined {
  return Error().stack?.replace(/^Error\n/, '\n');
}

/**
 * Gets a URLSearchParams object of the current URL.
 */
export function getSearchParams(): URLSearchParams | undefined {
  const ctxt = globalThis;
  if (envIsWindow(ctxt)) {
    return new URLSearchParams(ctxt.location.search.substring(1));
  }
}

/**
 * Returns the active level number from the provided level identifier.
 */
export function getActiveLevel(cfg: Configuration): number {
  if (isNumber(cfg.activeLevel)) return cfg.activeLevel;
  return cfg.levels[cfg.activeLevel].level;
}

/**
 * Adds a leading zero to a number if it is less than 10.
 */
export function leadingZero(num: number): string {
  return (num < 10 ? '0' : '') + `${num}`;
}

/**
 * Returns an ISO-8601 formatted string from the provided date.
 */
export function formatISO(date: Date) {
  const tzo = -date.getTimezoneOffset();
  const dif = tzo >= 0 ? '+' : '-';

  return (
    `${date.getFullYear()}` +
    '-' +
    leadingZero(date.getMonth() + 1) +
    '-' +
    leadingZero(date.getDate()) +
    'T' +
    leadingZero(date.getHours()) +
    ':' +
    leadingZero(date.getMinutes()) +
    ':' +
    leadingZero(date.getSeconds()) +
    dif +
    leadingZero(Math.floor(Math.abs(tzo) / 60)) +
    ':' +
    leadingZero(Math.abs(tzo) % 60)
  );
}

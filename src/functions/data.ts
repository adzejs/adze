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

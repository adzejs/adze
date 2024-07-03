import { Configuration, Level, UserConfiguration } from '../_types';
import { defaultConfiguration } from '../constants';
import { envIsWindow, globalContext } from './global';
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
  const ctxt = globalContext();
  if (envIsWindow(ctxt)) {
    return new URLSearchParams(ctxt.document.location.search.substring(1));
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
 * Merges configurations together in the proper order of precedence.
 */
export function mergeConfiguration(
  cfg?: UserConfiguration,
  newCfg?: UserConfiguration,
  globalCfg?: UserConfiguration
): Configuration {
  const levels = {
    ...defaultConfiguration.levels,
    ...cfg?.levels,
    ...newCfg?.levels,
    ...globalCfg?.levels,
  };
  return {
    ...defaultConfiguration,
    ...cfg,
    ...newCfg,
    ...globalCfg,
    levels,
  };
}

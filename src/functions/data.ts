import { Configuration, Filters, Level, LevelConfig, UserConfiguration } from '../_types';
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
  const levels: Record<string, LevelConfig> = {
    ...defaultConfiguration.levels,
    ...cfg?.levels,
    ...newCfg?.levels,
    ...globalCfg?.levels,
  };
  const filters: Filters = {
    levels:
      globalCfg?.filters?.levels ??
      newCfg?.filters?.levels ??
      cfg?.filters?.levels ??
      defaultConfiguration.filters.levels,
    namespaces: {
      include:
        globalCfg?.filters?.namespaces?.include ??
        newCfg?.filters?.namespaces?.include ??
        cfg?.filters?.namespaces?.include ??
        defaultConfiguration.filters.namespaces.include,
      exclude:
        globalCfg?.filters?.namespaces?.exclude ??
        newCfg?.filters?.namespaces?.exclude ??
        cfg?.filters?.namespaces?.exclude ??
        defaultConfiguration.filters.namespaces.exclude,
    },
    labels: {
      include:
        globalCfg?.filters?.labels?.include ??
        newCfg?.filters?.labels?.include ??
        cfg?.filters?.labels?.include ??
        defaultConfiguration.filters.labels.include,
      exclude:
        globalCfg?.filters?.labels?.exclude ??
        newCfg?.filters?.labels?.exclude ??
        cfg?.filters?.labels?.exclude ??
        defaultConfiguration.filters.labels.exclude,
    },
  };
  return {
    ...defaultConfiguration,
    ...cfg,
    ...newCfg,
    ...globalCfg,
    levels,
    filters,
  };
}

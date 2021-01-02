import { Log, Defaults, LogLevelDefinition } from '~/_contracts';
import { env, isBrowser } from '~/global';
import { getSearchParams } from '~/util';

/**
 * Determine the fate of whether this log will terminate.
 */
export function allowed(cfg: Defaults, def: LogLevelDefinition):boolean {
  return levelActive(def, cfg.log_level) && notTestEnv();
}

/**
 * Check if the log level is high enough for the log to terminate.
 */
export function levelActive(def: LogLevelDefinition, level: number):boolean {
  return def.level <= level;
}

/**
 * Check if any assertions or expressions pass for this log to terminate.
 */
export function evalPasses(log: Log):boolean {
  if (log.assertion !== undefined && log.expression !== undefined) {
    console.warn("You have declared both an assertion and test on the same log. Please only declare one or nefarious results may occur.");
    return true;
  }
  if (log.assertion !== undefined) {
    return log.assertion === false;
  }
  if (log.expression !== undefined) {
    return log.expression === true;
  }
  return true;
}

/**
 * Verify that this log is not in a test environment by checking the environment context
 * or URL params if within a browser context. Prevent termination of the log if it is 'test'.
 */
export function notTestEnv():boolean {
  // Allow for URL Param of ADZE_ENV when in the browser.
  return (env?.ADZE_ENV ?? getSearchParams().get('ADZE_ENV')) !== 'test';
}
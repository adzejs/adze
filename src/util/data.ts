import { LogTimestamp } from '../_contracts';
import { Env } from '../Env';

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
 * Generates a stacktrace and returns it.
 */
export function stacktrace(): string | null {
  return Error().stack ?? null;
}

/**
 * Gets a URLSearchParams object of the current URL.
 */
export function getSearchParams(): URLSearchParams | undefined {
  const env = new Env();
  const ctxt = env.global;
  if (Env.envIsWindow(ctxt)) {
    return new URLSearchParams(ctxt.document.location.search.substring(1));
  }
}

import { LogTimestamp } from '../_contracts';
import { Env } from '../env';

/**
 * Generate a unique ID for your log.
 */
export function timestamp(): LogTimestamp {
  const unixMilli = Date.now();
  const date = new Date(unixMilli);
  const utc = date.toUTCString();
  const utcTimezoneOffset = date.getTimezoneOffset();
  return { unixMilli, utc, utcTimezoneOffset };
}

/**
 * Converts a JavaScript timezone offset into a UTC offset string.
 */
export function formatTimezoneOffset(raw: number): string {
  const offset = Math.abs(raw / 60);
  const isNegative = raw < 0;
  return `${isNegative ? '-' : '+'}${
    offset > 9 ? `${offset}` : `0${offset}`
  }00`;
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

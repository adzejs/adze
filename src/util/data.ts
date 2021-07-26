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
  const iso8601 = iso8601Timestamp(unixMilli);
  return { unixMilli, utc, utcTimezoneOffset, iso8601 };
}

/**
 * Generates a UTC iso8601 timestamp from epoch milliseconds.
 *
 * Example: 2002-10-10T12:00:00−05:00
 */
export function iso8601Timestamp(milli: number): string {
  const d = new Date(milli);

  const year = d.getUTCFullYear();
  const month = twoDigitWholeNumber(d.getUTCMonth() + 1);
  const day = twoDigitWholeNumber(d.getUTCDate());
  // console.log('====', d.getTimezoneOffset(), d.getTimezoneOffset() / 60);
  const hours = twoDigitWholeNumber(
    d.getUTCHours() - d.getTimezoneOffset() / 60
  );
  const minutes = twoDigitWholeNumber(d.getUTCMinutes());
  const seconds = twoDigitWholeNumber(d.getUTCSeconds());
  const timezone = formatTimezoneOffset(d.getTimezoneOffset());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezone}`;
}

/**
 * Converts a number to a two digit positive whole number string.
 *
 * Example: twoDigitWholeNumber(4) => '04'
 */
export function twoDigitWholeNumber(val: number): string {
  const num = Math.abs(val);
  return num < 10 ? `0${num}` : `${num}`;
}

/**
 * Converts a JavaScript timezone offset into a UTC offset string.
 */
export function formatTimezoneOffset(raw: number): string {
  const offset = Math.abs(raw / 60);
  if (offset === 0) {
    return 'Z';
  }

  const isNegative = raw < 0;
  return `${isNegative ? '+' : '-'}${
    offset > 9 ? `${offset}` : `0${offset}`
  }:00`;
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

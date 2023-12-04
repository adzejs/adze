import type { HrTime, LogTimestamp } from '../_contracts';
import { envIsWindow, globalContext } from './env';

/**
 * Takes an HrTime tuple and converts it into a human-readable formatted
 * string in the format of `{sec}s {ms}ms`.
 */
export function formatTime([sec, nano]: HrTime): string {
  return `${sec}s ${nano / 1000000}ms`;
}

/**
 * Generates the current execution time.
 */
export function captureTimeNow(): string {
  return formatTime(hrtime());
}

/**
 * Generate a timestamp object for your log.
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

  const year = d.getFullYear();
  const month = leadingZeros(2, d.getMonth() + 1);
  const day = leadingZeros(2, d.getDate());
  const hours = leadingZeros(2, d.getHours());
  const minutes = leadingZeros(2, d.getMinutes());
  const seconds = leadingZeros(2, d.getSeconds());
  const timezone = formatTimezoneOffset(d.getTimezoneOffset());
  const milliseconds = leadingZeros(3, d.getMilliseconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezone}`;
}

/**
 * Adds leading zeros to a number to make it equal the provided digit count.
 *
 * Example: leadingZeros(2, 4) => '04'
 */
export function leadingZeros(digits: number, num: number): string {
  let leadingZeros = '';
  for (let i = 0; i < digits - `${num}`.length; i += 1) {
    leadingZeros += '0';
  }
  return `${leadingZeros}${num}`;
}

/**
 * Converts a JavaScript timezone offset into a UTC offset string.
 */
export function formatTimezoneOffset(raw: number): string {
  const offset = Math.abs(raw / 60);
  if (offset === 0) {
    return 'Z';
  }

  const sign = raw < 0 ? '+' : '-';
  return `${sign}${leadingZeros(2, offset)}:00`;
}

/**
 * Returns an hrtime object with different implementations based on the current environment.
 */
export function hrtime(prev?: [number, number]): [number, number] {
  const ctxt = globalContext();
  if (envIsWindow(ctxt)) {
    return hrtimeBrowser(ctxt, prev);
  } else {
    return process?.hrtime(prev);
  }
}

/**
 * Browser implementation of the node hrtime function for recording elapsed time.
 */
function hrtimeBrowser(ctxt: Window, prev?: [number, number]): [number, number] {
  const time = ctxt.performance.now() * 0.001;
  const seconds = Math.floor(time);
  const nanoseconds = Math.floor((time % 1) * 1000000000);

  // If a previous value has been provided
  if (prev === undefined) {
    return [seconds, nanoseconds];
  }

  let secondsDiff = seconds - prev[0];
  let nanosecondsDiff = nanoseconds - prev[1];
  if (nanosecondsDiff < 0) {
    secondsDiff -= 1;
    nanosecondsDiff += 1e9;
  }
  return [secondsDiff, nanosecondsDiff];
}

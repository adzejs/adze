import type { HrTime } from '../_types';

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
 * Browser implementation of the node hrtime function for recording elapsed time.
 */
export function hrtime(prev?: [number, number]): [number, number] {
  const time = performance.now() * 0.001;
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

/**
 * Generates an ISO-8601 formatted string with timezone offset.
 */
export function dateFormatISO(date: Date) {
  const pad = (n: number) => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
  const tzOffset = -date.getTimezoneOffset();
  const diff = tzOffset >= 0 ? '+' : '-';
  const timezone = `${diff}${pad(tzOffset / 60)}:${pad(tzOffset % 60)}`;

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}${timezone}`;
}

/**
 * Generates a timestamp in the common log format (`'dd/MMM/yyyy:HH:mm:ss xx'`).
 */
export function dateFormatCommon(date: Date) {
  const pad = (num: number, size = 2) => String(num).padStart(size, '0');

  const day = pad(date.getDate()); // dd
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getMonth()]; // MMM
  const year = date.getFullYear(); // yyyy

  const hours = pad(date.getHours()); // HH
  const minutes = pad(date.getMinutes()); // mm
  const seconds = pad(date.getSeconds()); // ss

  // Timezone offset in ±HHMM format (xx)
  const tzOffset = -date.getTimezoneOffset(); // in minutes
  const sign = tzOffset >= 0 ? '+' : '-';
  const absOffset = Math.abs(tzOffset);
  const tzHours = pad(Math.floor(absOffset / 60));
  const tzMinutes = pad(absOffset % 60);
  const timezone = `${sign}${tzHours}${tzMinutes}`; // xx

  return `${day}/${month}/${year}:${hours}:${minutes}:${seconds} ${timezone}`;
}

import type { HrTime } from '../_types';
import { envIsWindow, globalContext } from './global';

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

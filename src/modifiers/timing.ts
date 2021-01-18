const hrtime = require('browser-process-hrtime');

import { Log, HrTime } from '../_contracts';
import { modifier } from './modifier';

/**
 * Starts a timer associated with this log's *label*. This will do nothing if
 * this log has no label.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
 */
export function time(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal) {
      this.labelVal.timeStart = hrtime();
    }
  })
}

/**
 * Modifies the log render to show the current high-resolution real time.
 * 
 * This is a non-standard method.
 */
export function timeNow(this: Log):Log {
  return modifier(this, () => {
    const time_now = formatTime(hrtime());
    this.labelVal ? this.labelVal.timeNow = time_now : this.timeNowVal = time_now;
  })
}

/**
 * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the 
 * difference between the start time and when this method was called. This then
 * modifies the log render to show the time difference. This will do nothing if the *label* does
 * not exist.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
 */
export function timeEnd(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal) {
      this.labelVal.timeEllapsed = formatTime(hrtime(this.labelVal.timeStart));
    }
  });
}

/*
  ! console.timeLog() is purposefully omitted from this API.

  timeLog() is a useless method within the Adze API. The same effect can be 
  accomplished by created a new log with the same label.
*/

/**
 * Takes an HrTime tuple and converts it into a human-readable formatted
 * string in the format of `{sec}s {ms}ms`.
 */
function formatTime([ sec, nano ]: HrTime):string {
  return `${sec}s ${nano / 1000000}ms`;
}

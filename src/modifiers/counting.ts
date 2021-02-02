import { Log } from '../_contracts';
import { modifier } from './modifier';

/**
 * Adds to the log count for log instances that share this log's label.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
 */
export function count(ctxt: Log): Log {
  return modifier(ctxt, () => {
    if (ctxt.labelVal) {
      ctxt.labelVal.count = ctxt.labelVal.count ?? 0;
      ctxt.labelVal.count += 1;
    }
  });
}

/**
 * Resets the count for the log instances that share this log's label.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
 */
export function countReset(ctxt: Log): Log {
  return modifier(ctxt, () => {
    if (ctxt.labelVal) {
      ctxt.labelVal.count = 0;
    }
  });
}

/**
 * Unsets the count for the log instances that share this log's label.
 *
 * This is a non-standard method.
 */
export function countClear(ctxt: Log): Log {
  return modifier(ctxt, () => {
    if (ctxt.labelVal) {
      ctxt.labelVal.count = undefined;
    }
  });
}

import { Log } from '../_contracts';
import { printGroup, printGroupCollapsed, printGroupEnd } from '../printers';
import { modifier } from './modifier';

/**
 * Starts a log group.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
 */
export function group(this: Log):Log {
  return modifier(this, () => {
    this.printer = printGroup;
  });
}

/**
 * Starts a log group that is collapsed by default.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
 */
export function groupCollapsed(this: Log):Log {
  return modifier(this, () => {
    this.printer = printGroupCollapsed;
  });
}

/**
 * Ends the most recently opened log group.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
 */
export function groupEnd(this: Log):Log {
  return modifier(this, () => {
    this.printer = printGroupEnd;
  });
}
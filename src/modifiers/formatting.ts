import { Log } from '../_contracts';
import { printDir, printDirxml, printTable } from '../printers';
import { modifier } from './modifier';

/**
 * Instructs this log to print in the dir format. Typically this is useful
 * for rendering deeply nested objects in the console.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
 */
export function dir(ctxt: Log): Log {
  return modifier(ctxt, () => {
    ctxt.printer = printDir;
  });
}

/**
 * Instructs this log to print in the dirxml format. Typically this is useful
 * for rendering HTML/DOM or XML Elements in the console.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
 */
export function dirxml(ctxt: Log): Log {
  return modifier(ctxt, () => {
    ctxt.printer = printDirxml;
  });
}

/**
 * Instructs this log to print its argument in a table format.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
 */
export function table(ctxt: Log): Log {
  return modifier(ctxt, () => {
    ctxt.printer = printTable;
  });
}

/**
 * This modifier method allows the log to execute normally but
 * prevent it from printing to the console.
 */
export function silent(ctxt: Log): Log {
  return modifier(ctxt, () => {
    ctxt.isSilent = true;
  });
}

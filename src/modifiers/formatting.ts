import { Log } from '../_contracts';
import { modifier } from './modifier';
import { printDir, printDirxml, printTable } from '../printers';

/**
 * Instructs this log to print in the dir format. Typically this is useful
 * for rendering deeply nested objects in the console.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
 */
export function dir(this: Log):Log {
  return modifier(this, () => {
    this.printer = printDir;
  });
}

/**
 * Instructs this log to print in the dirxml format. Typically this is useful
 * for rendering HTML/DOM or XML Elements in the console.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
 */
export function dirxml(this: Log):Log {
  return modifier(this, () => {
    this.printer = printDirxml;
  });
}

/**
 * Instructs this log to print its argument in a table format.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
 */
export function table(this: Log):Log {
  return modifier(this, () => {
    this.printer = printTable;
  });
}
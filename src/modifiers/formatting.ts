import { Log } from '../_contracts';
import { modifier } from './modifier';
import { printDir, printDirxml, printTable } from '../printers';

export function dir(this: Log):Log {
  return modifier(this, () => {
    this.printer = printDir;
  });
}

export function dirxml(this: Log):Log {
  return modifier(this, () => {
    this.printer = printDirxml;
  });
}

export function table(this: Log):Log {
  return modifier(this, () => {
    this.printer = printTable;
  });
}
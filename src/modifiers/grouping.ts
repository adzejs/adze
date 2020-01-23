import { Log } from '../_contracts';
import { modifier } from './modifier';
import { printGroup, printGroupCollapsed, printGroupEnd } from '../printers';

export function group(this: Log):Log {
  return modifier(this, () => {
    this.printer = printGroup;
  });
}

export function groupCollapsed(this: Log):Log {
  return modifier(this, () => {
    this.printer = printGroupCollapsed;
  });
}

export function groupEnd(this: Log):Log {
  return modifier(this, () => {
    this.printer = printGroupEnd;
  });
}
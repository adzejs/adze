import { Log } from '../_contracts';
import { modifier } from './modifier';

export function count(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal) {
      this.labelVal.count = this.labelVal.count ?? 0;
      this.labelVal.count += 1;
    }
  });
}

export function countReset(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal) {
      this.labelVal.count = 0;
    }
  });
}

export function countClear(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal) {
      this.labelVal.count = undefined;
    }
  });
}
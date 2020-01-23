import { Log } from '../../_contracts';
import { modifier } from '../modifier';

export function time(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal) {
      this.labelVal.timeStart = performance.now();
    }
  });
}

export function timeNow(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal) {
      this.labelVal.timeNow = performance.now();
    }
  });
}

export function timeEnd(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal && this.labelVal.timeStart) {
      this.labelVal.timeEllapsed = performance.now() - this.labelVal.timeStart;
    }
  });
}
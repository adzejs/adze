import hrtime from 'browser-process-hrtime';

import { Log } from '../../_contracts';
import { modifier } from '../modifier';

export function time(this: Log):Log {
  return modifier(this, () => {
    if (this.labelVal) {
      
    }
  })
}

export function timeNow(this: Log):Log {
  return modifier(this, () => {
    const time = hrtime();
    this.time_now = `${time[0]}s ${time[1] / 1000000}ms`;
    return this;
  })
}

export function timeEnd(this: Log):Log {
  return modifier(this, () => {

  });
}

export function timeLog(this: Log):Log {
  return modifier(this, () => {

  });
}
import { Log } from '../log';
import { Configuration, Constraints } from '.';

/* eslint-disable @typescript-eslint/ban-types */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

/**
 * Utility type for describing an Adze log factory.
 */
export type LogFactory<C extends Constraints> = (user_cfg: Configuration) => Log<C>;

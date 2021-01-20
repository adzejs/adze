import { Log } from '../_contracts';
import { getLabel, addLabel } from '../label';
import { printTrace } from '../printers';
import { prependModifier, modifier } from './modifier';

/**
 * Adds a label to the log. Label's can be used for log identification
 * and grouping. Label's also link log instances together.
 *
 * This is a non-standard API, but it replaces the need to provide
 * a label to `count()` or `time()`.
 */
export function label(this: Log, name: string): Log {
  return prependModifier(this, () => {
    this.labelVal = addLabel(getLabel(name) ?? { name, context: {} });
  });
}

/**
 * Adds a namespace to the log. Namespace's are primarily useful
 * for grouping logs together.
 *
 * This is a non-standard API.
 */
export function namespace(this: Log, ns: string | string[]): Log {
  return modifier(this, () => {
    this.namespaceVal = ns;
  });
}

/**
 * An alias for `namespace()`.
 */
export function ns(this: Log, ns: string | string[]): Log {
  return this.namespace(ns);
}

/**
 * Prints a stacktrace along with the log.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
 */
export function trace(this: Log): Log {
  return modifier(this, () => {
    this.printer = printTrace;
  });
}

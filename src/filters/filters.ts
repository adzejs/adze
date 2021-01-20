import { Log, LogRender, FinalLog, Bundle, Collection } from '../_contracts';
import { isString } from '../util';

/**
 * Filter a collection of logs by the namespace.
 */
export function filterNamespace(
  collection: Collection = [],
  ns: string | string[]
): Collection {
  return loopCollection(collection, (log) => {
    const log_ns = log.namespaceVal;
    if (log_ns) {
      if (isString(log_ns)) {
        return isString(ns) ? log_ns === ns : ns.includes(log_ns) ?? false;
      } else {
        // Loop over each log ns value and see if any match any ns value.
        return log_ns
          .map((val) => {
            return isString(ns) ? val === ns : ns.includes(val);
          })
          .includes(true);
      }
    }
    return false;
  });
}

/**
 * Filter and render the bundle of logs by the label.
 */
export function filterLabel(
  collection: Collection = [],
  lbl: string
): Collection {
  return loopCollection(collection, (log) => log.labelVal?.name === lbl);
}

/**
 * Filter the bundle of logs by their log level.
 */
export function filterLevelRange(
  collection: Collection = [],
  low: number,
  high: number
): Collection {
  return loopCollection(collection, (log) => {
    const level = log.level ?? Infinity;
    return level >= low && level <= high;
  });
}

/**
 * Loops over a bundle of logs and executes the callback for each log that
 * has a render value.
 */
export function loopCollection(
  collection: Collection,
  cb: (log: Log | FinalLog) => boolean
): Collection {
  return collection.reduce((acc, log) => {
    const result = cb(log);
    return result ? acc.concat([log]) : acc;
  }, [] as Collection);
}

/**
 * If the provided log has been previously rendered, this function
 * re-renders it to the console.
 */
export function rerender(log: FinalLog): void {
  if (log.render) {
    render(log.render);
  }
}

/**
 * Render a log to the console based on a render object.
 */
export function render([method, args]: LogRender): void {
  console[method](...args);
}

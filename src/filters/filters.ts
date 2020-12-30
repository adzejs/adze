import { Log, LogRender } from '~/_contracts';

// CONVERT API TO EXPORT FILTER FUNCS

/**
 * Re-render the bundle of logs.
 */
export function filterAll(bundle: Log[] = []):void {
  loopBundle(bundle, (log) => true);
}

/**
 * Filter the bundle of logs by the namespace.
 */
export function filterNamespace(bundle: Log[] = [], ns: string):void {
  loopBundle(bundle, (log) => log.namespaceVal === ns);
}

/**
 * Filter and render the bundle of logs by the label.
 */
export function filterLabel(bundle: Log[] = [], lbl: string):void {
  loopBundle(bundle, (log) => log.labelVal?.name === lbl);
}

/**
 * Filter the bundle of logs by their log level.
 */
export function filterLevelRange(bundle: Log[] = [], low: number, high: number):void {
  loopBundle(bundle, (log, rndr) => {
    const level = (log.level ?? Infinity);
    return level >= low && level <= high;
  });
}

/**
 * Loops over a bundle of logs and executes the callback for each log that 
 * has a render value.
 */
function loopBundle(bundle: Log[], cb: (log: Log, rndr: LogRender) => boolean):void {
  bundle.forEach(log => {
    if (log.render) {
      const result = cb(log, log.render);
      if (result) render(log.render);
    }
  });
}

/**
 * Render a log based on a render object.
 */
export function render([ method, args ]: LogRender):void {
  console[method](...args);
}
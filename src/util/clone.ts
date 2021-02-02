import cloneDeep from 'lodash/cloneDeep';
import { Log } from '../_contracts';
import { adze } from '../adze';

/**
 * For API convenience, modifiers are getters. A wholesale copy
 * or cloneDeep of a log instance causes all of the modifiers to
 * execute and add themselves to the queue which results in a
 * corrupted new log instance. Rather than wholesale copy, we will
 * individually select the properties that are safe to copy.
 */
export function cloneLog<T extends Log>(
  log: Log,
  additional: Record<string, unknown> = {}
): T {
  const {
    cfg: cfgRaw,
    timestamp: timestampRaw,
    stacktrace,
    render,
    level,
    args: argsRaw,
    namespaceVal: namespaceValRaw,
    labelVal,
    timeNowVal,
    traceable,
    dumpContext,
    isSilent,
    modifierQueue: modifierQueueRaw,
    printer,
    metaData: metaDataRaw,
    assertion,
    expression,
  } = log;

  // Deep clone the configuration
  const cfg = cloneDeep(cfgRaw);

  // Deep clone the timestamp object
  const timestamp =
    timestampRaw === null ? timestampRaw : cloneDeep(timestampRaw);

  // Clone the args array. This does not prevent mutation of individual args.
  const args = argsRaw === null ? argsRaw : [...argsRaw];

  // Clone the namespace array
  const namespaceVal =
    namespaceValRaw !== undefined ? [...namespaceValRaw] : namespaceValRaw;

  // Clone the modifier queue
  const modifierQueue = [...modifierQueueRaw];

  // Clone any MDC meta data
  const metaData = cloneDeep(metaDataRaw);

  return Object.assign(adze(), {
    ...additional,
    cfg,
    timestamp,
    stacktrace,
    render,
    level,
    args,
    namespaceVal,
    labelVal,
    timeNowVal,
    traceable,
    dumpContext,
    isSilent,
    modifierQueue,
    printer,
    metaData,
    assertion,
    expression,
  }) as T;
}

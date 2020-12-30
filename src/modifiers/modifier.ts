import { Log } from '~/_contracts';

/**
 * Queues a modifier method for execution when the log is terminated.
 */
export function modifier(log: Log, func: Function):Log {
  log.modifierQueue = log.modifierQueue.concat([func]);
  return log;
}

/**
 * Queues a modifier method for execution at the beginning of the queue when the log is terminated.
 * This is used to ensure that labels are applied before modifiers that use labels are executed.
 */
export function prependModifier(log: Log, func: Function):Log {
  log.modifierQueue = [func].concat(log.modifierQueue);
  return log;
}
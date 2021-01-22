import { Log } from '../_contracts';
/**
 * Queues a modifier method for execution when the log is terminated.
 */
export declare function modifier(log: Log, func: () => void): Log;
/**
 * Queues a modifier method for execution at the beginning of the queue when the log is terminated.
 * This is used to ensure that labels are applied before modifiers that use labels are executed.
 */
export declare function prependModifier(log: Log, func: () => void): Log;

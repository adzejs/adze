import { ModifierData } from '.';
import Log from './log';

/**
 * Middleware interface that defines the hooks that can be implemented by middleware.
 */
export interface Middleware {
  /**
   * Hook that is called during construction of a log instance.
   */
  constructed?: (log: Log) => void;
  /**
   * Hook that is called just before a log is terminated.
   */
  beforeTerminated?: (log: Log, terminator: string, args: unknown[]) => void;
  /**
   * Hook that is called just before a modifier is applied to a log instance.
   */
  beforeModifierApplied?: (log: Log, data: ModifierData) => void;
  /**
   * Hook that is called just after a modifier is applied to a log instance.
   */
  afterModifierApplied?: (log: Log, data: ModifierData) => void;
  /**
   * Hook that is called just before a formatter is applied to a log instance to format a message.
   */
  beforeFormatApplied?: (log: Log, message: unknown[]) => void;
  /**
   * Hook that is called just after a formatter is applied to a log instance to format a message.
   */
  afterFormatApplied?: (log: Log, message: unknown[]) => void;
  /**
   * Hook that is called just before a log instance message is printed to the browser or console.
   */
  beforePrint?: (log: Log) => void;
  /**
   * Hook that is called just when a log instance has completed termination.
   */
  afterTerminated?: (log: Log) => void;
}

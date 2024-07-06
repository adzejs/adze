import { ModifierData } from '.';
import Log from './log';

export abstract class Middleware {
  // - constructed
  // - before modifier registered
  // - after modifier registered
  // - before modifier applied
  // - after modifier applied
  // - before format applied
  // - after format applied
  // - before terminated
  // - before print
  // - after print
  // - after terminated
  public abstract constructed(log: Log): void;
  public abstract beforeModifierApplied(log: Log, data: ModifierData): void;
  public abstract afterModifierApplied(log: Log, data: ModifierData): void;
  public abstract beforeFormatApplied(log: Log, message: unknown[]): void;
  public abstract afterFormatApplied(log: Log, message: unknown[]): void;
  public abstract beforePrint(log: Log): void;
  public abstract afterPrint(log: Log): void;
  public abstract beforeTerminated(log: Log): void;
  public abstract afterTerminated(log: Log): void;
}

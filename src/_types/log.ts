import { commonMethods, formats, levels, methods, specialMethods, terminators } from '../constants';
import { Label } from './label';

/**
 * All valid terminator names.
 */
export type Terminator = (typeof terminators)[number];

/**
 * All valid native browser methods.
 */
export type Method = (typeof methods)[number];

/**
 * Valid console methods that accept at least one argument as the first argument.
 */
export type CommonMethod = (typeof commonMethods)[number];

/**
 * Console methods that have alternative behaviors.
 */
export type SpecialMethod = (typeof specialMethods)[number];

/**
 * All valid default log levels.
 */
export type Level = (typeof levels)[number];

/**
 * An unknown object type.
 */
export type IObject = Record<string, unknown>;

/**
 * The data structure that represents a log message as its being assembled.
 *
 * Phase 1.
 */
export type IncompleteLogData = Partial<PartialLogData>;

/**
 * The data structure that represents a log message after it has been assembled but prior to being emitted.
 *
 * Phase 2.
 */
export interface PartialLogData {
  args: unknown[];
  level: Level;
  terminator: Terminator;
  method: Method;
  meta: Record<string, unknown>;
  modifiers: Modifier[];
  namespace: string[];
  timestamp: string;
  hostname?: string;
  label?: Label;
  name?: string;
  stacktrace?: string;
  timeNow?: string;
  style: {
    style?: string;
    terminalStyle?: string[];
    emoji?: string;
  };
  tests: {
    assertion?: boolean;
    if?: boolean;
  };
}

/**
 * The data structure representing a complete log.
 *
 * Phase 3.
 */
export interface LogData extends PartialLogData {
  message: unknown[];
}

/**
 * A modifier function.
 */
export type Modifier = (data: PartialLogData) => PartialLogData;

/**
 * Configuration object for a specific log level.
 */
export interface LevelConfig {
  level: Level;
  style: string;
  terminalStyle: string[];
  method: Method;
  emoji: string;
}

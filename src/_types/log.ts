import adze, { ChalkStyle, ConfigurationData } from '..';
import {
  methodsWithArgs,
  levels,
  methods,
  specialMethods,
  specialMethodsWithoutArgs,
  terminators,
  specialMethodsWithArgsAndLeader,
} from '../constants';
import Formatter from '../formatters/formatter';
import Log from '../log';
import { Configuration, UserConfiguration } from './configuration';
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
 * All valid default log level terminator methods.
 */
export type DefaultTerminatorMethod = (typeof levels)[number];

/**
 * Valid console methods that accept at least one argument as the first argument.
 */
export type MethodWithArgs = (typeof methodsWithArgs)[number];

/**
 * Console methods that have alternative behaviors.
 */
export type MethodWithoutArgs = (typeof specialMethodsWithoutArgs)[number];

/**
 * All valid console methods with alternative behaviors.
 */
export type SpecialMethod = (typeof specialMethods)[number];

/**
 * All avalid console methods with alternative behaviors that can be printed with a leader.
 */
export type SpecialMethodWithLeader = (typeof specialMethodsWithArgsAndLeader)[number];

/**
 * All valid default log levels.
 */
export type Level = (typeof levels)[number];

/**
 * An unknown object type.
 */
export type IObject = Record<string, unknown>;

/**
 * Type for the constructor of a Formatter class.
 */
export interface FormatterConstructor {
  new (cfg: Configuration, level: LevelConfig): Formatter;
}

/**
 * Type for the constructor of an adze class.
 */
export interface AdzeConstructor {
  new (cfg: UserConfiguration, modifierData?: ModifierData): adze;
}

export interface ModifierData {
  method?: Method;
  namespace?: string[];
  timestamp?: string;
  hostname?: string;
  label?: Label;
  name?: string;
  stacktrace?: string;
  timeNow?: string;
  assertion?: boolean;
  if?: boolean;
}

/**
 * A modifier function.
 */
export type Modifier = (data: ModifierData, ctxt: Log) => ModifierData;

/**
 * Configuration object for a specific log level.
 */
export interface LevelConfig {
  levelName: string;
  level: number;
  style: string;
  terminalStyle: ChalkStyle[];
  method: Method;
  emoji: string;
}

/**
 * The data structure that represents a complete log message.
 */
export type LogData = ModifierData &
  ConfigurationData &
  LevelConfig & {
    args: unknown[];
    terminator: string;
    message: unknown[];
    timestamp: string;
  };

/**
 * A log listener callback function.
 */
export type LogListener = (log: Log) => void;

/**
 * Data structure for creating a table log message.
 */
export type TableData = Record<string, unknown>[];

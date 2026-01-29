import { formats } from '../constants';
import { Middleware } from '../middleware';
import { FormatterConstructor, Level, LevelConfiguration } from './log';
import type Log from '../log';

/**
 * All valid log formats. These determine the style that is emitted.
 */
export type Format = (typeof formats)[number];

/**
 * Configuration data points that are also emitted with log data.
 */
export interface ConfigurationData<Meta extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * The level of logs to render.
   *
   * Note: You must use a number value if you are referencing a custom log level.
   */
  activeLevel: Level | number;
  /**
   * Should logs be cached for recall?
   */
  cache: boolean;
  /**
   * The maximum number of logs that can be cached.
   *
   * Default: 300
   */
  cacheSize: number;
  /**
   * Add log meta data to the printed message.
   */
  dump: boolean;
  /**
   * Additional metadata to be included with each log.
   */
  meta: Meta;
  /**
   * Allow processing of logs but do not generate them automatically.
   *
   * **Default:** `false`
   */
  silent: boolean;
  /**
   * Add the timestamp to the printed message. This value is ignored if using the 'json'
   * or 'common' log formats.
   *
   * **Default:** `true`
   */
  showTimestamp: boolean;
  /**
   * Render emoji's in the log output.
   */
  withEmoji: boolean;
  /**
   * The format to use when generating logs.
   *
   * The built-in values are:
   * - pretty (default)
   * - json
   * - common
   * - standard
   */
  format: string;
}

/**
 * Configuration for the logger.
 */
export interface Configuration<Meta extends Record<string, unknown> = Record<string, unknown>>
  extends ConfigurationData<Meta> {
  /**
   * Automatically serialize certain types of objects such as Errors, Dates, Maps, Sets,
   * and BigInts.
   */
  autoSerialize: boolean;
  /**
   * Custom replacer function for JSON formatter stringification. Use this if you have a value
   * type that isn't automatically serialized by default or if you want to override the default
   * serialization.
   */
  customReplacer?: (key: string, value: unknown) => unknown;
  /**
   * Applies middleware to execute along with the log.
   */
  middleware?: Middleware[];
  /**
   * Configuration of all log levels.
   */
  levels: Record<string, LevelConfiguration>;
  /**
   * Filter logs based on the provided criteria.
   */
  filters?: Filters;
  /**
   * A callback function that allows the user to return a custom timestamp format for each log.
   */
  timestampFormatter?: TimestampFormatter;
  /**
   * A callback function that allows the user to specify a custom log destination in addition to console.
   */
  destination?: DestinationCallback;
  /**
   * Map of formatters that can be used to render logs.
   */
  formatters: Record<string, FormatterConstructor>;
}

/**
 * A callback function that allows the user to return a custom timestamp format for each log.
 */
export type TimestampFormatter = (date: Date) => string;

/**
 * Type for the log destination callback that will be invoked instead of console.
 */
export type DestinationCallback = (log: Log, terminator: string, args: unknown[]) => void;

/**
 * Configuration for filtering logs.
 */
export interface Filters {
  levels?: FilterConfig<LevelSelector>;
  /**
   * Filter by log namespaces.
   */
  namespaces?: FilterConfig;
  /**
   * Filter by log labels.
   */
  labels?: FilterConfig;
}

/**
 * The log levels to filter.
 */
export type LevelSelector =
  | string
  | number
  | string[]
  | number[]
  | [number, '-', number]
  | [string, '-', string];

/**
 * The normalized level selector.
 */
export type NormalizedLevelSelector = number[];

/**
 * The values to include or exclude logs from printing.
 */
export interface FilterConfig<T = string[]> {
  /**
   * The type of filter to apply.
   */
  type: 'include' | 'exclude';
  /**
   * Values to include or exclude from printing.
   */
  values: T;
}

/**
 * Partial configuration provided by the user.
 */
export type UserConfiguration<Meta extends Record<string, unknown> = Record<string, unknown>> =
  Partial<Configuration<Meta>>;

/**
 * Extended configuration if the user specifies a the formatter as "common".
 */
export interface CommonLogConfiguration extends Configuration {
  /**
   * The name of the app this logger is being used in.
   */
  name: string;
  /**
   * The hostname of the machine generating logs.
   *
   * **Defaults:**
   * - Browsers - The browser's name and version.
   * - Server - The host IP address.
   */
  hostname: string;
}

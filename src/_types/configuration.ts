import { formats } from '../constants';
import Formatter from '../formatters/formatter';
import { Middleware } from '../middleware';
import { FormatterConstructor, Level, LevelConfig } from './log';

/**
 * All valid log formats. These determine the style that is emitted.
 */
export type Format = (typeof formats)[number];

/**
 * Configuration data points that are also emitted with log data.
 */
export interface ConfigurationData {
  /**
   * The level of logs to render.
   */
  activeLevel: Level | number;
  /**
   * Should logs be cached for recall?
   */
  cache: boolean;
  /**
   * Add log meta data to the printed message.
   */
  dump: boolean;
  /**
   * Additional metadata to be included with each log.
   */
  meta: Record<string, any>;
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
   */
  format: Format;
}

/**
 * Configuration for the logger.
 */
export interface Configuration extends ConfigurationData {
  /**
   * Applies middleware to execute along with the log.
   */
  middleware?: Middleware[];
  /**
   * Configuration of all log levels.
   */
  levels: Record<string, LevelConfig>;
  /**
   * Filter logs based on the provided criteria.
   */
  filters?: Filters;
  /**
   * A callback that allows the user to return a custom timestamp format for each log.
   */
  timestampFormatter?: (date: Date) => string;
  /**
   * The color fidelity to use when rendering logs.
   */
  terminalFidelity: 0 | 1 | 2 | 3;
  /**
   * Map of formatters that can be used to render logs.
   */
  formatters: Record<string, FormatterConstructor>;
}

/**
 * Configuration for filtering logs.
 */
export interface Filters {
  levels?: LevelFilter;
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
export type LevelFilter =
  | '*'
  | string
  | number
  | string[]
  | number[]
  | [number, '-', number]
  | [string, '-', string];

/**
 * The values to include or exclude logs from printing.
 */
export interface FilterConfig {
  /**
   * The type of filter to apply.
   */
  type: 'include' | 'exclude';
  /**
   * Values to include or exclude from printing.
   */
  values: string[];
}

/**
 * Partial configuration provided by the user.
 */
export type UserConfiguration = Partial<Configuration>;

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
   * - Node - The host IP address.
   */
  hostname: string;
}

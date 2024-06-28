import { Level } from './log';

/**
 * Configuration for the logger.
 */
export interface Configuration {
  level: Level;
  /**
   * The format to use when generating logs.
   */
  format: 'pretty' | 'prettyEmoji' | 'json' | 'common';
  /**
   * Allow processing of logs but do not generate them automatically.
   *
   * **Default:** `false`
   */
  silent: boolean;
  /**
   * Additional metadata to be included with each log.
   */
  meta: Record<string, unknown>;
  /**
   * Applies middleware to execute along with the log.
   */
  middleware: unknown[];
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

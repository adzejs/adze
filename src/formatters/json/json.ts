import Formatter from '../formatter';
import { ModifierData } from '../../_types';
import { JsonLog, JsonLogOptionalFields, JsonLogRequiredFields } from './types';
import { hasRequiredFields } from './type-guards';
import { dateFormatISO, getGlobal } from '../../functions';

/**
 * Formats log messages in machine-readable JSON format.
 */
export default class JsonFormatter extends Formatter {
  /**
   * Format the date in the ISO8601 format by default.
   */
  protected timestampFormatFunction: (date: Date) => string = (date: Date) => dateFormatISO(date);

  /**
   * Format the log message for the browser.
   */
  protected formatBrowser(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    return this.formatMessage(mods, timestamp, args);
  }

  /**
   * Format the log message for the server.
   */
  protected formatServer(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    return this.formatMessage(mods, timestamp, args);
  }

  /**
   * Format the log message for NDJSON lines.
   */
  private formatMessage(mods: ModifierData, timestamp: string, _args: unknown[]): unknown[] {
    const global = getGlobal();
    const args = [..._args];
    const msg = args.shift() as string;
    if (hasRequiredFields(this.cfg.meta)) {
      const { src, err, req_id, req, res, latency, hostname, name, ...meta } = this.cfg
        .meta as JsonLogRequiredFields & JsonLogOptionalFields;
      const { namespace, label } = mods;
      const json: JsonLog = {
        v: 1,
        level: this.level.level,
        levelName: this.level.levelName,
        name,
        hostname,
        msg: msg,
        args,
        pid: global.pid,
        time: timestamp,
        meta: Object.keys(meta).length > 0 ? meta : undefined,
        namespace,
        label: label?.name,
        src,
        err,
        req_id,
        req,
        res,
        latency,
      };
      return [JSON.stringify(json)];
    }
    console.warn(
      new Error('Adze: Required fields are missing from the log meta for generating a JSON log.')
    );
    return [...args];
  }
}

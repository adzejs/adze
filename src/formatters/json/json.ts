import { ModifierData } from '../../_types';
import { dateFormatISO, getGlobal } from '../../functions';
import Formatter from '../formatter';
import { hasRequiredFields } from './type-guards';
import { JsonLog, JsonLogOptionalFields, JsonLogRequiredFields } from './types';

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
      try {
        let result: unknown;
        if (this.cfg.autoSerialize) {
          const serializer = this.cfg.customReplacer ?? autoSerializer;
          result = JSON.stringify(json, serializer);
        } else {
          result = JSON.stringify(json);
        }
        return [result];
      } catch (e) {
        console.warn(
          'Adze: Failed to stringify log message to JSON format. Returning original args. Be sure to use the appropriate serializer functions for errors, requests, and responses. More info: https://adzejs.com/reference/formatters.html#jsonlogformatmeta-serializer-functions\n\n',
          e
        );
        return [...args];
      }
    }
    console.warn(
      new Error(
        'Adze: Required fields are missing from the log meta for generating a JSON log. If using TypeScript, use the JsonLogFormatMeta type for type safety. More info: https://adzejs.com/reference/formatters.html#jsonlogformatmeta-interface'
      )
    );
    return [...args];
  }
}

/**
 * Auto-serializes certain types of objects for JSON stringification.
 */
function autoSerializer(_key: string, value: unknown): unknown {
  // BigInt → string
  if (typeof value === 'bigint') {
    return value.toString();
  }

  // Error → structured object
  if (value instanceof Error) {
    return {
      name: value.name,
      message: value.message,
      stack: value.stack,
    };
  }

  // Date → ISO string
  if (value instanceof Date) {
    return value.toISOString();
  }

  // Map → plain object
  if (value instanceof Map) {
    return Object.fromEntries(value);
  }

  // Set → array
  if (value instanceof Set) {
    return Array.from(value);
  }

  // TypedArrays & DataView → number[]
  if (ArrayBuffer.isView(value)) {
    // Covers:
    // Uint8Array, Uint8ClampedArray
    // Int8Array, Uint16Array, Int16Array
    // Uint32Array, Int32Array
    // Float32Array, Float64Array
    // BigInt64Array, BigUint64Array
    // DataView
    return Array.from(value as unknown as ArrayLike<number>);
  }

  // Drop non-serializable values
  if (typeof value === 'function' || typeof value === 'symbol' || value === undefined) {
    return undefined;
  }

  return value;
}

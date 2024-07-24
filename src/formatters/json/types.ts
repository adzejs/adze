import { HttpMethod, HttpStatus } from '../../_types';

/**
 * The required fields for the JSON log format.
 *
 * https://github.com/trentm/node-bunyan?tab=readme-ov-file#log-record-fields
 */
export interface JsonLogRequiredFields {
  /**
   * The name of the application or logger that is generating the log.
   */
  name: string;
  /**
   * The hostname of the machine that generated the log.
   */
  hostname: string;
}

/**
 * Optional JSON log format fields that comply with the Bunyan JSON log format.
 *
 * https://github.com/trentm/node-bunyan?tab=readme-ov-file#log-record-fields
 */
export interface JsonLogOptionalFields extends Record<string, unknown> {
  /**
   * The name of the log level.
   */
  levelName?: string;
  /**
   * Optional. Object giving log call source info. This is added automatically by Bunyan if the
   * "src: true" config option is given to the Logger. Never use in production as this is really
   * slow.
   */
  src?: string;
  /**
   * A caught JS exception. This will be added anytime adze detects an Error object in the log
   * terminator arguments. You may also manually serialize an error with the `serializeError`
   * function from adze.
   */
  err?: JsonLogError;
  /**
   * A request identifier. Including this field in all logging tied to handling a particular request
   * to your server is strongly suggested. This allows post analysis of logs to easily collate all
   * related logging for a request. This really shines when you have a SOA with multiple services
   * and you carry a single request ID from the top API down through all APIs.
   */
  req_id?: string;
  /**
   * An HTTP server request. This can be generated with the `serializeRequest` function from adze.
   */
  req?: JsonLogHttpRequest;
  /**
   * An HTTP server response. This can be generated with the `serializeResponse` function from adze.
   */
  res?: JsonLogHttpResponse;
  /**
   * The latency of the logged request in milliseconds.
   */
  latency?: number;
  /**
   * Any additional meta data that you want to include in the log.
   */
  meta?: Record<string, unknown>;
}

/**
 * JSON log format that complies with the Bunyan JSON log format.
 */
export type JsonLog = JsonLogRequiredFields &
  JsonLogOptionalFields & {
    /**
     * Version of the JSON log format.
     */
    v: 1;
    /**
     * The log level integer value.
     */
    level: number;
    /**
     * Auto incremented integer that represents the log entry.
     *
     * This is based on the order in which the log is generated from the time your application starts.
     * If your application restarts, this number will reset to 1 for the first log.
     */
    pid: number;
    /**
     * The timestamp of when the log was generated.
     */
    time: string;
    /**
     * The log message.
     */
    msg: string;
    /**
     * The arguments passed to the log terminator.
     */
    args: unknown[];
    /**
     * The namespaces to which this log belongs.
     */
    namespace?: string[];
    /**
     * Any label applied to the log.
     */
    label?: string;
  };

/**
 * JSON log error data that complies with the Bunyan JSON log format.
 *
 * https://github.com/trentm/node-bunyan?tab=readme-ov-file#log-record-fields
 */
export interface JsonLogError {
  message: string;
  name: string;
  stack?: string;
}

/**
 * Type for declaring a JSON log HTTP request object.
 *
 * This can be generated from the `serializeRequest` function from adze.
 */
export interface JsonLogHttpRequest {
  method: HttpMethod;
  url: string;
  headers: Record<string, string>;
  body?: string;
  remoteAddress: string;
  remotePort?: number;
  username?: string;
}

/**
 * Type for declaring a JSON log HTTP response object.
 *
 * This can be generated from the `serializeResponse` function from adze.
 */
export interface JsonLogHttpResponse {
  statusCode: HttpStatus;
  header: string;
}

/**
 * Required and optional JSON log meta data fields.
 */
export type JsonLogMeta = JsonLogRequiredFields &
  JsonLogOptionalFields & {
    /**
     * The name of the application or logger that is generating the log.
     */
    name: string;
    /**
     * The hostname of the machine that generated the log.
     */
    hostname: string;
  };

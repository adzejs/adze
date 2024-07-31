/**
 * Meta data interface for configuring standard out logs.
 */
export interface StandardLogFormatMeta extends Record<string, unknown> {
  appname?: string;
  hostname?: string;
  port?: number;
}

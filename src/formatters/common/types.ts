import { HttpMethod, HttpVersion, HttpStatus } from '../../_types';

/**
 * Meta data interface for configuring logs according to the common log format.
 *
 * https://en.wikipedia.org/wiki/Common_Log_Format
 */
export interface CommonLogFormatMeta extends Record<string, unknown> {
  hostname: string;
  ident?: string;
  user?: string;
}

/**
 * The common log format for the request.
 *
 * **Format:** HTTP_METHOD PATH HTTP_VERSION HTTP_STATUS BYTES
 *
 * **Example:** `GET /index.html HTTP/1.0 200 2326`
 *
 * https://en.wikipedia.org/wiki/Common_Log_Format
 */
export type CommonLogFormatMessage =
  `"${HttpMethod} ${string} ${HttpVersion}" ${HttpStatus} ${number}`;

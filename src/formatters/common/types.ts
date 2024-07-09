//host ident authuser date request status bytes
export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS'
  | 'TRACE'
  | 'CONNECT';

/**
 * The HTTP version for the request.
 */
export type HttpVersion = 'HTTP/1.0' | 'HTTP/1.1' | 'HTTP/2.0';

/**
 * The HTTP status code for the request.
 */
export type HttpStatus =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;

/**
 * Meta data interface for configuring logs according to the common log format.
 *
 * https://en.wikipedia.org/wiki/Common_Log_Format
 */
export interface CommonLogFormatMeta {
  host: string;
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
export type CommonLogFormatLog = `"${HttpMethod} ${string} ${HttpVersion}" ${HttpStatus} ${number}`;

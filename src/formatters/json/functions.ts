import { HttpMethod, HttpStatus } from '../..';
import { JsonLogHttpRequest, JsonLogHttpResponse, JsonLogError } from './types';

/**
 * Serializes a Request object into a JSON Log HTTP Request object.
 *
 * If `true` is passed as the second parameter, it will attempt to extract the username from the
 * request headers for base64 encoded basic authorization only. All other forms of authorization
 * will return `undefined`.
 *
 * NOTICE: The "Authorization" header will always be excluded.
 */
export async function serializeRequest(
  request: Request,
  includeUsername: boolean = false
): Promise<JsonLogHttpRequest> {
  const url = new URL(request.url);
  return {
    headers: getHeaders(request.headers),
    method: request.method as HttpMethod,
    url: request.url,
    body: await request.json(),
    remoteAddress: url.host.split(':')[0],
    remotePort: getPortFromUrl(url),
    username: includeUsername ? getUsername(request.headers) : undefined,
  };
}

/**
 * Takes a URL and attempts to extract the port number from it. If a port is not specified, it will
 * attempt to return the corresponding HTTP port. If the protocol is not HTTP or HTTPS, it will
 * return `undefined`.
 */
function getPortFromUrl(url: URL): number | undefined {
  return url.port ? parseInt(url.port) : undefined;
}

/**
 * Converts a Headers object to a plain object.
 */
function getHeaders(headers: Headers): Record<string, string> {
  let headerObj: Record<string, string> = {};
  headers.forEach((v, k) => (headerObj[k] = v));
  const { Authorization, authorization, ...rest } = headerObj;
  return rest;
}

/**
 * Attempts to extract a username from a basic Authorization header that is base64 encoded.
 * If another type of authorization is used, such as JWT, it will return `undefined`.
 */
function getUsername(headers: Headers): string | undefined {
  const authorization = headers.get('Authorization');
  if (authorization) {
    const [type, encodedValue] = authorization.split(' ');
    if (type === 'Basic') {
      const decoded = atob(encodedValue);
      return decoded.split(':')[0];
    }
  }
}

/**
 * Serializes a Response object into a JSON Log HTTP Response object.
 */
export async function serializeResponse(response: Response): Promise<JsonLogHttpResponse> {
  const url = new URL(response.url);
  const headerString = Object.keys(getHeaders(response.headers)).reduce(
    (s, k, v) => `${s}${k}: ${v}\r\n`,
    ''
  );
  const header = `${url.protocol.split(':')[0].toUpperCase()} ${response.status} ${response.statusText}\r\n${headerString}\r\n`;
  return {
    statusCode: response.status as HttpStatus,
    header,
  };
}

/**
 * Serializes an Error object into a JSON Log Error object that is compatible with JsonLogFormatMeta.
 */
export function serializeError(error: Error): JsonLogError {
  return {
    message: error.message,
    name: error.name,
    stack: error.stack,
  };
}

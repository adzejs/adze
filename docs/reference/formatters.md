# Formatters

The primary purpose of Adze is to give the user simple ways of shaping their logs to fit their
needs. Adze comes with **four** formatters out of the box.

| Formatter                       | Value        | Description                                                                                                                                                                |
| ------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Pretty](#pretty-formatter)     | `"pretty"`   | The default formatter. This prints logs in a pretty, human-readable format.                                                                                                |
| [JSON](#json-formatter)         | `"json"`     | This formatter prints logs as machine-readable JSON objects that are compatible with the [Bunyan CLI](https://github.com/trentm/node-bunyan?tab=readme-ov-file#cli-usage). |
| [Standard](#standard-formatter) | `"standard"` | This formatter prints human-readable logs for a simple **stdout** format for terminals or files.                                                                           |
| [Common](#common-formatter)     | `"common"`   | This formatter prints logs according to the [Common Log Format](https://en.wikipedia.org/wiki/Common_Log_Format).                                                          |

## Pretty Formatter

The **Pretty** formatter is the default formatter used by Adze. It formats logs in a pretty,
human-readable manner.

To use it, set the [User Configuration](./configuration.md#user-configuration) `format` value to be
`"pretty"`.

```typescript
import adze, { setup } from 'adze';

setup({
  format: 'pretty',
});
```

#### Browser and Server Output

![example of browser and server output for the pretty format](../getting-started/examples/introduction/demo.jpg)

<br />

## JSON Formatter

The **JSON** formatter is used to generate machine-readable JSON logs. The logs that are generated are
compatible with the [Bunyan CLI](https://github.com/trentm/node-bunyan?tab=readme-ov-file#cli-usage)
for parsing logs to be human-readable or for filtering them based on their values.

To use it, set the [User Configuration](./configuration.md#user-configuration) `format` value to be
`"json"`.

```typescript
import adze, { setup } from 'adze';

setup({
  format: 'json',
});
```

### JsonLogFormatMeta Interface

JSON formatted logs require some meta data to be compatible with the [Bunyan JSON Schema](https://github.com/trentm/node-bunyan?tab=readme-ov-file#log-record-fields).
To apply these values you must include them when calling the [meta modifier](./modifiers.md#meta) or
apply them in the [setup function](./configuration.md#setup-function).

#### Usage Example

To get TS type checking for these values, Adze exports an interface called `JsonLogFormatMeta` that
can be passed to the meta modifier as a generic type.

The minimum required fields are `name` and `hostname`.

```typescript
import adze, { setup, type JsonLogFormatMeta } from 'adze';

setup({
  level: 'debug',
  format: 'json',
});

const logger = adze.meta<JsonLogFormatMeta>({ name: 'myApp', hostname: 'localhost' }).seal();
export default logger;

// --- OR ALTERNATIVELY

setup<JsonLogFormatMeta>({
  level: 'debug',
  format: 'json',
  meta: {
    name: 'myApp',
    hostname: 'localhost',
  },
});
```

If you want to later apply extra optional JSON log meta fields, you can use the
`JsonLogOptionalFields` interface.

```typescript
// ./elsewhere.ts
import { type JsonLogOptionalFields } from 'adze';
import logger from './logger';

logger.meta<JsonLogOptionalFields>({ latency: 400 }).debug('Logging the latency of our app.');
```

#### Interface

```typescript
interface JsonLogFormatMeta {
  /**
   * The name of the application or logger that is generating the log.
   */
  name: string;
  /**
   * The hostname of the machine that generated the log.
   */
  hostname: string;
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
 * Type for a JSON Log error on the `err` property.
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
```

### JsonLogFormatMeta Serializer Functions

For the JSON log meta properties of `err`, `req`, and `res` Adze provides a set of serializer
functions to make it much simpler to apply these meta data values.

#### serializeError

---

This function accepts a [JavaScript Error object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
and returns a serialized meta data object that is compatible with the
[JsonLogFormatMeta interface](#jsonlogformatmeta-interface).

##### Example

```typescript
import adze, { serializeError, type JsonLogOptionalFields } from 'adze';

// Doing some stuff and an error occurs!
const errMsg = 'An error occurred! UH OH!';
adze
  .meta<JsonLogOptionalFields>({
    err: serializeError(new Error(errMsg)),
  })
  .error(errMsg);
```

##### Example Output

![example of a json log with a serialized error](./examples/formatters/jsonFormatErrorSerializer-example-node.png)

<br />

#### serializeRequest

---

This function accepts a [JavaScript Request object](https://developer.mozilla.org/en-US/docs/Web/API/Request)
and returns a serialized meta data object that is compatible with the
[JsonLogFormatMeta interface](#jsonlogformatmeta-interface).

##### Example

```typescript
import adze, { serializeRequest, type JsonLogOptionalFields } from 'adze';

const request = new Request('https://example.com/login', {
  method: 'POST',
  headers: {
    'x-hi': 'Mom',
    connection: 'close',
    Authorization: 'Basic ' + btoa('username:password'),
  },
  body: JSON.stringify({ foo: 'bar' }),
});

// The Request serializer returns a promise so it must be awaited.
adze
  .meta<JsonLogOptionalFields>({
    req: await serializeRequest(request),
  })
  .log('Made a request!');
```

##### Example Output

![example of a json log with a serialized request](./examples/formatters/jsonFormatRequestSerializer-example-node.png)

<br />

#### serializeResponse

---

This function accepts a [JavaScript Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response)
and returns a serialized meta data object that is compatible with the
[JsonLogFormatMeta interface](#jsonlogformatmeta-interface).

##### Example

```typescript
import adze, { serializeResponse, type JsonLogOptionalFields } from 'adze';

// We'll make a fake response just for this example
const response = new Response('hello world!', {
  status: 200,
  statusText: 'OK',
  headers: { boop: 'beep' },
});
Object.defineProperty(response, 'url', { value: 'https://example.com/login' });

// The Response serializer returns a promise so it must be awaited.
adze
  .meta<JsonLogOptionalFields>({
    res: await serializeResponse(response),
  })
  .log('Received a response!');
```

##### Example Output

![example of a json log with a serialized response](./examples/formatters/jsonFormatResponseSerializer-example-node.png)

#### Automatic Argument Serialization

> Supported by [Version >= 2.3.0]

JSON formatted log arguments that are not included in the [JSONLogFormatMeta](#jsonlogformatmeta-interface)
are automatically attempted to be [serialized by default]().

Data types that are automatically serialized are as follows:

- [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Array Buffers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
  - Uint8Array
  - Uint8ClampedArray
  - Int8Array
  - Uint16Array
  - Int16Array
  - Uint32Array
  - Int32Array
  - Float32Array
  - Float64Array
  - BigInt64Array
  - BigUint64Array
  - DataView

#### Custom Serialization

> Supported by [Version >= 2.3.0]

If you have a value that is not handled by the automatic serializer, you can configure a custom
replacer in the [setup function](./global-store.md#setup-function) or by the
[seal terminator](./terminators.md#seal). Please check out the
[configuration documentation](./configuration.md#userconfiguration-property-descriptions) for more
details on the interface and how to configure it.

##### Example

```typescript
import adze, { setup } from 'adze';

setup({
  // Replace null values with a value of 0
  customReplacer: (key: string, value: unknown) => {
    if (value === null) {
      return 0;
    }
  },
  format: 'json',
});

adze.log('No null values allowed', null);
```

<br />

## Standard Formatter

The **Standard** formatter is for generating human-readable logs in a [stdout](https://en.wikipedia.org/wiki/Standard_streams)
environment. This is useful for writing human-readable logs to a file or for transporting them to
other platforms. The Standard formatter does not require you to specify that you want [timestamps](./modifiers.md#timestamp)
as it is a requirement for all logs of this type.

To use it, set the [User Configuration](./configuration.md#user-configuration) `format` value to be
`"standard"`.

```typescript
import adze, { setup } from 'adze';

setup({
  format: 'standard',
});

adze.warn('This is a standard warn log.');
```

#### Example Output

![example of server output for the standard format](./examples/formatters/standardFormat-example-node.png)

<br />

## Common Formatter

The **Common** formatter is for generating human-readable logs according to the [Common Log Format](https://en.wikipedia.org/wiki/Common_Log_Format).
This is primarily used for tracking network communications on servers.

To use it, set the [User Configuration](./configuration.md#user-configuration) `format` value to be
`"common"`.

### CommonLogFormatMeta

The Common formatter requires some extra meta data to fill in various properties within a log
formatted to the Common Log standard. Adze exports the `CommonLogFormatMeta` interface to assist you
with filling in the necessary data. The Common formatter does not require you to specify that you
want [timestamps](./modifiers.md#timestamp) as it is a requirement for all logs of this type.

#### Usage Example

```typescript
import adze, { setup, type CommonLogFormatMeta } from 'adze';

setup<CommonLogFormatMeta>({
  format: 'common',
  meta: {
    hostname: 'localhost',
    ident: 'user-identifier',
    user: 'joe',
  },
});

adze.log('This is a standard warn log.');
```

#### Interface

```typescript
interface CommonLogFormatMeta {
  hostname: string;
  ident?: string;
  user?: string;
}
```

#### Example Output

![example of server output for the common format](./examples/formatters/commonFormat-example-node.png)

<br />

## Creating Third-party Formatters

If the formatters provided by Adze do not meet your requirements, you can create a custom formatter
by extending the [Formatter class](#formatter-class).

### Formatter Class

The **Formatter class** is the base for all built-in formatters and third-party formatters. It
abstracts some of the basic logic away from the formatter in regards to the visibility, setting an
apex timestamp formatter override method, and routing the log to the appropriate formatter method
depending on the environment.

#### Interface

```typescript
class Formatter {
  // Properties
  protected cfg: Configuration;
  protected level: LevelConfiguration;
  protected timestampFormatFunction: (date: Date) => string;
  // Constructor
  constructor(cfg: Configuration, level: LevelConfiguration) {}
  // Methods
  public get timestampFormatter(): (date: Date) => string;
  protected abstract formatBrowser(
    data: ModifierData,
    timestamp: string,
    args: unknown[]
  ): unknown[];
  protected abstract formatServer(
    data: ModifierData,
    timestamp: string,
    args: unknown[]
  ): unknown[];
}
```

#### Properties

| Property                | Type                   | Description                                                                          |
| ----------------------- | ---------------------- | ------------------------------------------------------------------------------------ |
| cfg                     | Configuration          | The configuration of the log that is being formatted.                                |
| level                   | LevelConfiguration     | The configuration for the log level that this log is being terminated as.            |
| timestampFormatFunction | (date: Date) => string | An optional override function for the formatting the timestamp of the formatted log. |

### timestampFormatter getter

This method returns the most relevant `timestampFormatter` function based on the hierarchy of
the default function for formatting ISO-8601, then the timestampFormatter override from the
`UserConfiguration`, then the timestamp formatter function defined by the Formatter class, with the
Formatter class taking the highest priority.

### formatBrowser

This method is called when in a browser environment for formatting the provided log arguments to be
output in a browser developer console.

This method is provided the [modifier data](./modifiers.md) for all modifiers applied to the log,
the timestamp according to the [timestampFormatter getter](#timestampformatter-getter), and the
raw arguments for the log provided by the user.

After applying formatting to the arguments, the `formatBrowser` method should return the formatted
arguments as an array in the same order they were provided.

#### Example

```typescript
import { Configuration, Formatter, type LevelConfiguration, type ModifierData } from 'adze';

class HelloFormatter extends Formatter {
  constructor(cfg: Configuration, level: LevelConfiguration) {
    // This constructor isn't necessary, but is here for illustrative purposes.
    super(cfg, level);
  }

  protected formatBrowser(data: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    // We'll make the first arg printed always the word "Hello".
    return ['Hello', ...args];
  }

  /*
  ...a TypeScript error will be shown because we have not yet implemented 
  the formatServer() method. We will add it in the next section.
  */
}
```

### formatServer

This method is called when in a backend environment for formatting the provided log arguments to be
output to the server terminal.

This method is provided the [modifier data](./modifiers.md) for all modifiers applied to the log,
the timestamp according to the [timestampFormatter getter](#timestampformatter-getter), and the
raw arguments for the log provided by the user.

After applying formatting to the arguments, the `formatServer` method should return the formatted
arguments as an array in the same order they were provided.

#### Example

```typescript
import { Configuration, Formatter, type LevelConfiguration, type ModifierData } from 'adze';

class HelloFormatter extends Formatter {
  constructor(cfg: Configuration, level: LevelConfiguration) {
    super(cfg, level);
  }

  // ...formatBrowser method should be here from the previous section.

  protected formatServer(data: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    // We'll make the first arg printed always the word "Hello".
    return ['Hello', ...args];
  }
}
```

### Using a Third-party Formatter

To include a third-party formatter for use with Adze you must add it to the `formatters` object
property of the [User Configuration](./configuration.md#user-configuration) as a key/value pair.

#### Example

```typescript
import adze, { setup } from 'adze';
import HelloFormatter from './hello-formatter.ts';

setup({
  formatters: {
    hello: HelloFormatter,
  },
});

// And to use the HelloFormatter, simply use the key as the value for the `format` property.
setup({
  format: 'hello',
  formatters: {
    hello: HelloFormatter,
  },
});
```

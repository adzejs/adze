# Configuration

Adze is a completely configurable library by design that comes with sensible defaults. There are two
primary configurations to understand; the log configuration and the [Global Store](../reference/global-store.md)
configuration. In this section we'll take a look at each configuration and explain each property in
detail.

## User Configuration

This configuration is generated when you use [modifiers](../reference/modifiers.md) or when you pass
in a configuration object with the [seal](../reference/terminators.md#seal) or
[sealTag](../reference/terminators.md#sealtag) terminators.

### UserConfiguration Interface

```typescript
interface UserConfiguration {
  activeLevel?: Level | number;
  autoSerialize?: boolean;
  cache?: boolean;
  cacheSize?: number;
  customReplacer?: (key: string, value: unknown) => unknown | undefined;
  dump?: boolean;
  filters?: Filters;
  format?: string;
  formatters: Record<string, FormatterConstructor>;
  levels: Record<string, LevelConfig>;
  meta?: Record<string, any>;
  middleware?: Middleware[];
  silent?: boolean;
  showTimestamp?: boolean;
  timestampFormatter?: (date: Date) => string;
  withEmoji?: boolean;
}

type Level = 'alert' | 'error' | 'warn' | 'info' | 'fail' | 'success' | 'log' | 'debug' | 'verbose';
```

### UserConfiguration Property Descriptions

| Property Name      | Default Value                                 | Description                                                                                                                                        |
| ------------------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| activeLevel        | `"log"`                                       | Set the maximum log level that will be rendered.                                                                                                   |
| autoSerialize      | `true`                                        | Allows for automatic serialization of complex types when using the [JSON formatter](./formatters.md#json-formatter).                               |
| cache              | `false`                                       | Allows the [Global Store](./global-store.md) to [cache logs](./global-store.md#cache) for later recall.                                            |
| cacheSize          | `300`                                         | The maximum number of logs that will be cached. This is to prevent memory leaks. This only applies if `cache` is `true`.                           |
| customReplacer     | `undefined`                                   | A custom replacer function for [`JSON.stringify()`](https://tinyurl.com/jsonStringify) for serializing complex data types with the JSON formatter. |
| dump               | `false`                                       | Tells logs to add any associated [thread](../getting-started/threading.md) data to the log output.                                                 |
| filters            | `undefined`                                   | Controls [filtering](../getting-started/filtering.md) of logs by level, label, or namespace.                                                       |
| format             | `"pretty"`                                    | Sets the [format](./formatters.md) of how logs will be generated.                                                                                  |
| formatters         | `{ pretty, json, common, standard }`          | Key / value pairs of formatter names to [Formatter](./formatters.md) classes. Comes with four built in. Pretty, JSON, Common, and Standard.        |
| levels             | `{ [levelName: string]: LevelConfiguration }` | [Level Configuration](#levelconfiguration) for each [log level](./terminators.md), including [custom](./terminators.md#custom) log levels.         |
| meta               | `{}`                                          | Series of user defined key/value pairs of [meta data](./modifiers.md#meta) to attach to logs.                                                      |
| middleware         | [Middleware](./middleware.md)\[\]             | Array of [middleware](./middleware.md) instances that will be used during the each log's lifecycle.                                                |
| silent             | `false`                                       | [Silent](./modifiers.md#silent) logs will not print but will still be evaluated and trigger listeners and middleware hooks.                        |
| showTimestamp      | `false`                                       | Instructs logs to record and print the [timestamp](./modifiers.md#timestamp) of when they were generated.                                          |
| timestampFormatter | `undefined`                                   | A callback function for taking a log Date object and returning a timestamp with the preferred custom formatting.                                   |
| withEmoji          | `false`                                       | Tells formatters that they are allowed to print an emoji with the output.                                                                          |

## Setup Function

When a log is created, if a [Global Store](./global-store.md) does not already exist, it will be
automatically created. You can also set one up and configure it manually by using the `setup()`
function.

The setup function accepts a [UserConfiguration](#user-configuration) object that acts as a global
configuration override for all logs. When setup is called, it also returns a reference to the
Global Store which you can use for adding [log listeners](./global-store.md#addlistener) or
[removing](./global-store.md#removelistener) them.

### Setup Example

```typescript
import adze, { setup } from 'adze';

const store = setup({
  cache: true,
});

store.addListener('*', (log) => {
  // Do something with the log data here...
});
```

## LevelConfiguration

The `LevelConfiguration` type is used for creating or modifying log level configurations. Each
default log level also has a LevelConfiguration associated with it by default in the `levels`
property of the [UserConfiguration](#user-configuration).

### LevelConfiguration Interface

> Refer to the [picocolors documentation](https://github.com/alexeyraspopov/picocolors#usage) for information about terminal style values.

```typescript
interface LevelConfiguration {
  levelName: string;
  level: number;
  style: string;
  terminalStyle: ConsoleStyle[];
  method: Method;
  emoji: string;
}
```

### Custom Level Example

You can use the [UserConfiguration](#user-configuration) levels property with a `LevelConfiguration`
to add a custom level.

```typescript
import adze, { setup } from 'adze';

setup({
  activeLevel: 1337,
  levels: {
    leetLevel: {
      levelName: 'leetLevel',
      level: 1337,
      method: 'log',
      style:
        'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
      terminalStyle: ['white', 'bgMagenta'],
      emoji: '👾',
    },
  },
});

adze.withEmoji.custom('leetLevel', 'This is an example leetLevel log!');
```

#### Browser Output

![Example of a custom level named leet level in a browser](./examples/configuration/customLevel-example-browser.png)

#### Server Output

![Example of a custom level named leet level in a terminal](./examples/configuration/customLevel-example-node.png)

### Default Level Override Example

All default log levels can have their settings overridden by passing a `LevelConfiguration` with a
key and `levelName` of the same name. You can use the default log level configuration generator
functions to get a base configuration for modifying.

```typescript
import adze, { setup } from 'adze';

setup({
  levels: {
    error: {
      levelName: 'error',
      level: 1,
      method: 'error',
      style: 'color: purple; background: white;', // <- changing the error style to use purple text.
      terminalStyle: ['magenta', 'bgWhite'],
      emoji: '🔥',
    },
  },
});

adze.withEmoji.error('This is an error log with overridden style configuration.');
```

#### Browser Output

![Example of the default error level with overridden configuration in the browser](./examples/configuration/defaultOverride-example-browser.png)

#### Server Output

![Example of the default error level with overridden configuration in the server](./examples/configuration/defaultOverride-example-node.png)

<br />

## Styling

All of Adze default level configurations come with default styling. These can be [overridden](#default-level-override-example)
by providing a `LevelConfiguration` with a matching key to the default log level in the `levels`
property.

When creating custom levels or overriding existing configuration, you may want to apply custom
styles or emoji's. Below are the values used for the default log levels.

### Default Browser Styles

This is a comprehensive list of the default browser styles. If you notice, these styles use
`padding-right` for spacing and alignment. It is a painful way to do this, but due to the different
ways each browser handles log styling, the only consistent way for them to align on the right is to
use manual padding numbers. The goal of the default styles was to make them as consistent as
possible across browsers.

**For more information:** [MDN Docs - refer to "Styling console output" section](https://developer.mozilla.org/en-US/docs/Web/API/Console)

#### Default Level Styles

_NOTE: The default styles use [template string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
to change the padding based on the browser environment. These functions are also exported from adze._

| Level Name | emoji | Style                                                                                                                                                                                |
| ---------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alert      | 🚨    | `padding-right: ${isChrome() ? '32' : '26'}px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;`    |
| error      | 🔥    | `padding-right: ${isChrome() ? '32' : '26'}px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`    |
| warn       | 🔔    | `font-size: 12px; border-radius: 4px;  background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ${isChrome() ? '38' : '44'}px;`   |
| info       | ℹ️    | `padding-right: ${isSafari() ? '49' : '52'}px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #d8ebff, #b2d7ff); color: #465464; border-color: #96b5d7;` |
| fail       | ❌    | `padding-right: ${isChrome() ? '52' : '44'}px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #ffe8e8, #ffd1d1); color: #a4000f; border-color: #e3bbbb;` |
| success    | 🎉    | `font-size: 12px; border-radius: 4px; padding-right: 30px; background: linear-gradient(to right, #e6f6e4, #ceedc9); color: #4e594d; border-color: #b7d1b3;`                          |
| log        | 🪵    | `font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;`                          |
| debug      | 🐞    | `font-size: 12px; padding-right: 44px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;`                                                                      |
| verbose    | 💬    | `font-size: 12px; padding-right: 31px; color: #999999;`                                                                                                                              |

<br/>

---

### Default Server Styles

Adze styling for the server makes use of a library named [picocolors](https://github.com/alexeyraspopov/picocolors).
picocolors exposes several formatting functions for server text styling that Adze exposes in its
configuration.

For a list of styles available for use with picocolors, refer to the
[picocolors styles documentation](https://github.com/alexeyraspopov/picocolors#usage).

#### Default Level Styles

| Level Name | emoji | Style                        |
| ---------- | ----- | ---------------------------- |
| alert      | 🚨    | `['white', 'bold', 'bgRed']` |
| error      | 🔥    | `['bgRed', 'white']`         |
| warn       | 🔔    | `['bgYellow', 'white']`      |
| info       | ℹ️    | `['bgBlue', 'white']`        |
| fail       | ❌    | `['bgRed', 'white']`         |
| success    | 🎉    | `['bgGreen', 'white']`       |
| log        | 🪵    | `['bgGray', 'white']`        |
| debug      | 🐞    | `['bgBlack', 'white']`       |
| verbose    | 💬    | `['italic', 'black']`        |

<br />

---

### Default Level Style Functions

Each default level has a corresponding function for getting the styles that can be imported. This
can simplify applying small tweaks to the default log level configurations.

| Level Name | Style              |
| ---------- | ------------------ |
| alert      | `getAlertConfig`   |
| error      | `getErrorConfig`   |
| warn       | `getWarnConfig`    |
| info       | `getInfoConfig`    |
| fail       | `getFailConfig`    |
| success    | `getSuccessConfig` |
| log        | `getLogConfig`     |
| debug      | `getDebugConfig`   |
| verbose    | `getVerboseConfig` |

#### Level Style Function Example

```typescript
import adze, { setup, getAlertConfig } from 'adze';

const alert = getAlertConfig({
  emoji: '😭',
});

setup({
  levels: {
    alert,
  },
});

adze.withEmoji.alert('A customized alert log.');
```

#### Browser Output

![customized alert log browser example](./examples/configuration/customizedAlert-example-browser.png)

#### Server Output

![customized alert log server example](./examples/configuration/customizedAlert-example-node.png)

<br />

---

## Filters

Filters determine whether logs are allowed to print to the developer console/server based on their log level,
[label](./modifiers.md#label), or [namespace](./modifiers.md#namespace--ns). When filtering levels,
you can provide a [level selector](#levelselector) data type.

Each filter type can specify and `include` or `exclude` statement. Include tells Adze to only render
logs that are included in the value set. Exclude says to not render any logs that are included in
the value set. If both are specified, include takes precedence over exclude in case of conflicts.

#### Interface

```typescript
interface Filters {
  level?: FilterConfig<LevelSelector>;
  label?: FilterConfig;
  namespace?: FilterConfig;
}

interface FilterConfig<T = string[]> {
  type: 'include' | 'exclude';
  values: T;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

setup({
  filters: {
    namespaces: {
      type: 'include',
      values: ['foo'],
    },
  },
});

adze.ns('foo').success('I should print.');
adze.ns('foo', 'bar').success('I should print.');
adze.ns('bar').fail('I should not print.');
adze.fail('I should not print because I do not have a namespace.');
```

#### Browser Output

![customized alert log browser example](./examples/configuration/filter-example-browser.png)

#### Server Output

![customized alert log server example](./examples/configuration/filter-example-node.png)

<br />

---

## Customized Timestamps

The `timestampFormatter` [configuration option](#userconfiguration-property-descriptions) accepts a callback function that is executed each time
a log needs to generate a timestamp.

By default, Adze will generate an **ISO 8601** formatted timestamp, but you can use this function to
generate a customized timestamp to whatever format you desire.

#### Interface

```typescript
type TimestampFormatter = (date: Date) => string;
```

#### Example

```typescript
import adze, { setup } from 'adze';

setup({
  timestampFormatter: (date: Date) => '07/04/1776',
});

adze.timestamp.success('America has achieved independence!');
```

#### Browser Output

![customized timestamp browser example](./examples/configuration/timestampFormatter-example-browser.png)

#### Server Output

![customized timestamp server example](./examples/configuration/timestampFormatter-example-node.png)

<br />

---

## LevelSelector Type

In various places in the Adze library, a `LevelSelector` value is required. It is used in:

- [Configuration.activeLevel](#userconfiguration-property-descriptions)
- [Configuration.filters](#filters)
- [GlobalStore.addListener](./global-store.md#addlistener)
- [GlobalStore.tools.filterByLevel](./tools.md#filterbylevel)

The `LevelSelector` type is a user friendly way of selecting one or more log levels.

#### Interface

```typescript
type LevelSelector =
  | '*'
  | string
  | number
  | string[]
  | number[]
  | [number, '-', number]
  | [string, '-', string];
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();

// Add a listener that selects ALL log levels.
store.addListener('*', (log: Log) => {
  /* Do something */
});

// Add a listener that selects a single log level by name.
store.addListener('info', (log: Log) => {
  /* Do something with info logs */
});

// Add a listener that selects both alert and error log levels by name.
store.addListener(['alert', 'error'], (log: Log) => {
  /* Do something with the alert and error logs */
});

// Or select a range of values by their name.
store.addListener(['alert', '-', 'warn'], (log: Log) => {
  /* Do something with the alert, error, and warn logs */
});

// Alternatively, select alert and error logs by their level values.
store.addListener([0, 1], (log: Log) => {
  /* Do something with the alert and error logs */
});

// Or select a range of logs by their level values.
store.addListener([0, '-', 3], (log: Log) => {
  /* Do something with the alert, error, warn, and info logs */
});
```

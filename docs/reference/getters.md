# Data Getters

Every Adze log instance exposes three getters for getting log data. Usually you will want to
[capture log data](../getting-started/capture-data.md) when inside of a
[listener](./global-store.md#addlistener) or a [middleware](./middleware.md) hook.

- [data](#data) - Returns the log data.
- [modifierData]() - Returns object containing key/values from called modifiers.
- [configuration]() - Returns the configuration that this log instance is using.

## data

The data getter contains all of the finalized log data after the log has been terminated.

In addition to all of the properties defined in the [User Configuration](./configuration.md#user-configuration)
(with the exception of the `middleware` and `formatters` properties), the log data also includes the
properties in the table below.

| Property  | Type        | Description                                         |
| --------- | ----------- | --------------------------------------------------- |
| level     | `number`    | The level value of this log.                        |
| emoji     | `string`    | The emoji associated to this log.                   |
| levelName | `string`    | The level name that this log was terminated with.   |
| method    | `string`    | The standard console method used to print this log. |
| style     | `string`    | The styles used for pretty printing this log.       |
| args      | `unknown[]` | The arguments provided to be logged.                |
| message   | `unknown[]` | The formatted log arguments to be printed.          |

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();
// Let's create a log listener and then access the log data
store.addListener('*', (log) => {
  const level = log.data.level;
  // do something else...
});
```

<br />

## modifierData

The modifier data is an object containing values that will be applied to the log when it is
terminated. Each time a modifier is executed, it either modifies the log's configuration or it
adds a value to the `modifierData` property.

These values will ultimately be applied to how the log renders and will be included in the log data
object after the log is terminated.

| Property  | Type        | Description                                         |
| --------- | ----------- | --------------------------------------------------- |
| level     | `number`    | The level value of this log.                        |
| emoji     | `string`    | The emoji associated to this log.                   |
| levelName | `string`    | The level name that this log was terminated with.   |
| method    | `string`    | The standard console method used to print this log. |
| style     | `string`    | The styles used for pretty printing this log.       |
| args      | `unknown[]` | The arguments provided to be logged.                |
| message   | `unknown[]` | The formatted log arguments to be printed.          |

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();
store.addListener('*', (log) => {
  // We cannot call adze logs here or we'll trigger an infinite loop.
  console.log(log.modifierData);
});
// adze.withEmoji.log('This is a log');
adze.ns('hello').log('This is a namespaced log.');
```

#### Browser Output

![example browser output of logging modifier data](./examples/getters/modifierData-example-browser.png)

#### Server Output

![example server output of logging modifier data](./examples/getters/modifierData-example-node.png)

<br />

## configuration

The configuration getter returns the configuration object for this log instance. It will contain
default values to fill in any omitted values from the provided [User Configuration](./configuration.md#user-configuration).

If global configuration values are present from the [Global Store](./global-store.md), then those
values will take precendence and override the default or user configured values.

For more information on the values, refer to the [Configuration page](./configuration.md).

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();
store.addListener('*', (log) => {
  // We cannot call adze logs here or we'll trigger an infinite loop.
  console.log(log.configuration);
});
// adze.withEmoji.log('This is a log');
adze.ns('hello').log('This is a namespaced log.');
```

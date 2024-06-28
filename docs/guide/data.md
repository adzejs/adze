# Data

In this section of the guide we'll take a look at some of the important data structures that exist across the Adze API.

## Collections

A Collection is simply an array of Adze log instances that extend from the **BaseLog** class. There are two types of instances that extend BaseLog, **BundledLog** and **Log**. You will never interact with a **BaseLog** instance directly.

A **Log** is the instance type that is created whenever you normally terminate a log.

A **BundledLog** is a log instance that is generated from a [bundle](factories.md#bundle) factory. These log instances have a getter that allows you to access the log bundle.

Collections are typically used in conjunction with filter functions like [filterNamespace](filtering-and-utility-functions.md#filternamespace), [filterLabel](filtering-and-utility-functions.md#filterlabel), [filterLevel](filtering-and-utility-functions.md#filterlevel), and [filterCollection](filtering-and-utility-functions.md#filtercollection).

### Interface

```typescript
type Collection = BaseLog[];
```

### Bundle Example

```javascript
import { adze, createGlobalStore } from 'adze';

// Let's create a log bundle
const bundled = bundle(adze({ useEmoji: true }));

bundled().label('collect').error('This is an error!');
bundled().label('collect').info('A bundled log with namespaces.');
bundled().label('collect').success('Successfully bundled this log!');
const { log } = bundled().label('collect').log('Another log in the bundle.');

// Let's get our Collection from our bundle
const collection = log.bundle;
```

### GlobalStore Example

```javascript
import { adze, createGlobalStore } from 'adze';

// We'll create a GlobalStore to capture our logs
const globalStore = createGlobalStore();

// Let's get our collection from the GlobalStore
const collection = globalStore.getCollection();
```

## Label Data Object

A label data object is generated from a label instance. This object contains data that from globally tracked [counters](modifiers.md#count), [timers](modifiers.md#time), and [MDC context](other-terminators.md#thread).

### Interface

```typescript
interface LabelData {
  name: string | null;
  timeElapsed: string | null;
  count: number | null;
}
```

## Level Filter

A level filter type is a value that represents one or more log levels. Level Filters are used with any method that allows you to specify a target log level like [addListener](using-globalstore.md#addlistener), [filterLevel](filtering-and-utility-functions.md#filterlevel), or within the [filter configurations on Adze logs](/config/#filters).

| Value              | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `'*'`              | Target all logs of any level.                             |
| `[min, '-', max]`  | Targets logs with levels of `min <= level <= max`.        |
| `[n1, n2, n3, n*]` | Array of numbers representing targeted log level numbers. |

### Example

```javascript
import { adze, createGlobalStore } from 'adze';

// For our example, we'll create a GlobalStore and add some listeners
const globalStore = createGlobalStore();

// Our first listener will target all logs of any level
globalStore.addListener('*', (data, render, printed) => {
  // do stuff...
});

// Our next listener will target logs with a level within our range
globalStore.addListener([2, '-', 5], (data, render, printed) => {
  // do stuff...
});

// Our last listener will target logs of specific levels
globalStore.addListener([2, 3, 6, 8], (data, render, printed) => {
  // do stuff...
});
```

### Output

![log render example output](./examples/log-render-example.png)

![log render example terminal output](./examples/log-render-terminal-example.png)

## Log Data

The log data object contains all of the important meta data from a log's instance. The log data object is used throughout the Adze API. For example, when a [log listener](using-globalstore.md#addlistener) on a [GlobalStore](globalstore-concepts.md) is fired, the callback function will be invoked with two parameters; the **log data object** and a [log render](adze-concepts.md#logrender).

A log data object can be manually retrieved from a log instance using the [data getter](getters-and-setters.md#data).

A log data object can also be used to create a clone of a log by [hydrating](getters-and-setters.md#hydrate) a new log instance from the log data object.

Final log data extends log data and changes the possible values of some properties. Certain methods require final log data to be provided to it. Use the [isFinalLogData](filtering-and-utility-functions.md#isfinallogdata) type guard to verify it.

> Property showTimestamp available in Version >= 1.1

### Interface

```typescript
// The log data object's interface
interface LogData {
  args: unknown[] | null;
  assertion?: boolean;
  cfg: Defaults;
  context: MetaData;
  definition: LogLevelDefinition | null;
  dumpContext: boolean;
  expression?: boolean;
  isSilent: boolean;
  printed: boolean;
  showTimestamp: boolean;
  label: LabelData;
  level: number | null;
  meta: MetaData;
  modifierQueue: Array<(ctxt: BaseLog) => void>;
  namespace: string[] | null;
  stacktrace: string | null;
  timeNow: string | null;
  timestamp: LogTimestamp | null;
}

// This is the definition for log meta data after termination
interface FinalLogData extends LogData {
  level: number;
  definition: LogLevelDefinition;
  args: unknown[];
  timestamp: LogTimestamp;
}
```

### Property Descriptions

| Name          | Description                                                                                  | Documentation                                                    |
| ------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| args          | Arguments provided to the log instance.                                                      | -                                                                |
| assertion     | The boolean result of the assertion expression on the log instance.                          | [assert](modifiers.md#assert)                                    |
| cfg           | The configuration of the instance.                                                           | [Config](/config/#adze-configuration)                            |
| context       | The context value of an MDC thread.                                                          | [MDC](mapped-diagnostic-context.md)                              |
| definition    | Configuration of the log level of the instance.                                              | [Log Level Definition](/config/#log-levels-log-level-definition) |
| dumpContext   | Boolean indicating if the mapped diagnostic context (MDC) should be rendered.                | [MDC](mapped-diagnostic-context.md)                              |
| expression    | The boolean result of the test expression on the log instance.                               | [test](modifiers.md#test)                                        |
| isSilent      | Boolean value indicating if the log should execute silently.                                 | [silent](modifiers.md#silent)                                    |
| printed       | Boolean value indicating if the log has been printed to the console (versions >= 1.3.0).     | [Terminated Log Object](#terminated-log-object)                  |
| showTimestamp | Boolean value indicating that the log should render an ISO 8601 timestamp.                   | [timestamp](modifiers.md#timestamp)                              |
| label         | The values of a label instance attached to the log instance.                                 | [Label](#label-data-object)                                      |
| level         | The log level of the instance.                                                               | [Log Level Definition](/config/#log-levels-log-level-definition) |
| meta          | Meta data attached to the instance.                                                          | [meta](modifiers.md#meta)                                        |
| modifierQueue | The queue of modifiers that will be executed against the log instance when it is terminated. | -                                                                |
| namespace     | Array of namespaces associate to the log instance.                                           | [namespace / ns](modifiers.md#namespace-ns)                      |
| stacktrace    | A stringified stacktrace that leads up to when the log instance was created.                 | [Config](/config/#adze-configuration)                            |
| timeNow       | The timestamp from executing a timeNow modifier.                                             | [timeNow](modifiers.md#timenow)                                  |
| timestamp     | Object containing time signatures of when the log instance was created.                      | [Log Timestamp](#log-timestamp)                                  |

### Example

```javascript
import { adze } from 'adze';

// Let's create a log instance with some various properties
const { log } = adze().ns('foo').label('bar').timeNow.info('Some important information.');

// Let's get the log data by using the data getter on the instance
const data = log.data;

adze().log('Displaying the value of the log data object!', data);
```

### Output

![log data example output](./examples/log-data-example.png)

![log data example terminal output](./examples/log-data-terminal-example.png)

## Log Render

A log render is returned as a sub-property of a [terminated log object](#terminated-log-object). The log render is a tuple in the form of `[method, args]` that you can use to [re-render](filtering-and-utility-functions.md#rerender) your log exactly how the Adze log instance rendered it. Here is an example of how [render](filtering-and-utility-functions.md#render) a log using a log render:

### Manual Example

_NOTE:_ This is not the recommended way of doing this. Please refer to [render](filtering-and-utility-functions.md#render).

```javascript
import { adze } from 'adze';

// Let's generate a log and get its render
const { render } = adze().info('This is an info log');

// Then we will destructure the log to get the method and arguments
const [method, args] = render;

/* And now we can re-render the log by calling the
   console method and spreading the args */
console[method](...args);
```

### Output

![log render example output](./examples/log-render-example.png)

![log render example terminal output](./examples/log-render-terminal-example.png)

## Log Timestamp

The log timestamp data object contains timestamp values in multiple formats from when the log instance was terminated.

> utcTimezoneOffset and iso8601 properties: Version >= 1.1

### Interface

```typescript
interface LogTimestamp {
  unixMilli: number;
  utc: string;
  utcTimezoneOffset: string;
  iso8601: string;
}
```

### Example

```javascript
import { adze, createGlobalStore } from 'adze';

// Let's generate a log and get its instance
const { log } = adze().info('This is an info log');

// Now let's export its meta data and select the timestamp data object
const timestamp = log.data.timestamp;
// => { unixMilli: 1617827970649, utc: 'Wed, 07 Apr 2021 20:39:30 GMT', utcTimezoneOffset: '+04:00', iso8601: '2021-04-07T20:39:30+04:00' }
```

## Terminated Log Object

After an Adze log has been terminated a **Terminated Log object** will be returned (with a couple of exceptions, like [clear](other-terminators.md#clear-clr)). A terminated log object consists of three parts, the **Log Instance**, the [Log Render](#log-render), and the **printed** value that indicates if the log was printed to the console.

The log instance is the reference to the instance that was terminated. You can use this to get [meta data about the Log](#log-data) or get a [collection](#collection) of logs if the log was [bundled](factories.md#bundle).

> `printed` property supported in versions >= 1.3.0

### Interface

```typescript
// Versions < 1.3.0
interface TerminatedLog<T extends BaseLog> {
  log: T;
  render: LogRender | null;
}

// Versions >= 1.3.0
interface TerminatedLog<T extends BaseLog> {
  log: T;
  render: LogRender | null;
  printed: boolean;
}
```

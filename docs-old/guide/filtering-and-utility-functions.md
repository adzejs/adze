# Filtering & Utility Functions

When working with Adze logs sometimes you may have a [Collection](advanced.md#collections) of logs that you would like to filter down to a specific subset. Adze provides you with some filtering functions out of the box to help with this. Adze also provides a couple utility functions that are explained below.

## filterCollection

This function provides a generic way of filtering [collections](advanced.md#collections). The provided callback function receives a [log data object](data.md#log-data) for each log in the collection. If a truthy value is returned the current log of the iteration will be added into a new collection. If a falsy value is returned it will be omitted.

### filterCollection Interface

```typescript
function filterCollection(collection: Collection, cb: (log: LogData) => boolean): Collection;
```

### filterCollection with GlobalStore Example

```javascript
import { adze, createGlobalStore, filterCollection, rerender } from 'adze';

const globalStore = createGlobalStore();

// Let's create a new log factory
const log = adze({ useEmoji: true }).seal();

log().ns('foo').error('This is an error!');
log().label('bar').info('This is some info.');
log().ns('baz').success('Successfully did something!');
log().label('baz').log('Logging something.');

// Let's get our collection from the GlobalStore
const collection = globalStore.getCollection();

/* Let's filter the collection by logs with namespace of 
  'foo' or labels of 'bar' and then re-render it. */
filterCollection(collection, (data) => {
  return data.namespace?.includes('foo') || data.label?.name === 'bar';
}).forEach(rerender);
```

### filterCollection Output

In these example's of the output we can see our initial four logs and then the logs with a namespace of `'foo'` or a label of `'bar'` are re-rendered.

![filter collection example output](./examples/filterCollection-example.png)

![filter collection example terminal output](./examples/filterCollection-terminal-example.png)

## filterLabel

Filters a [collection](advanced.md#collections) of logs by the given [label](modifiers.md#label).

### filterLabel Interface

```typescript
function filterLabel(collection: Collection = [], label: string): Collection;
```

### filterLabel with GlobalStore Example

```javascript
import { adze, createGlobalStore, filterLabel, rerender } from 'adze';

const globalStore = createGlobalStore();

// Let's create a new log factory
const log = adze({ useEmoji: true }).seal();

log().label('foo').error('This is an error!');
log().label('bar').info('This is some info.');
log().label('baz').success('Successfully did something!');
log().label('baz').log('Logging something.');

// Let's get our collection from the GlobalStore
const collection = globalStore.getCollection();

// Let's filter the collection and then re-render it.
filterLabel(collection, 'bar').forEach(rerender);
```

### filterLabel Output

In these example's of the output we can see our initial four logs and then the log with a label of `'bar'` is re-rendered.

![filter label example output](./examples/filterLabel-example.png)

![filter label example terminal output](./examples/filterLabel-terminal-example.png)

## filterLevel

Filters a [collection](advanced.md#collections) of logs by the given [level filter](data.md#level-filter).

### filterLevel Interface

```typescript
function filterLevel(collection: Collection = [], levels: LevelFilter): Collection;
```

### filterLevel with GlobalStore Example

```javascript
import { adze, globalStore, filterLevel, rerender } from 'adze';

const globalStore = globalStore();

// Let's create a new log factory
const log = adze({ useEmoji: true }).seal();

log().error('This is an error!');
log().info('This is some info.');
log().success('Successfully did something!');
log().log('Logging something.');

// Let's get our collection from the GlobalStore
const collection = globalStore.getCollection();

// Let's filter the collection and then re-render it.
filterLevel(collection, '0-3').forEach(rerender);
```

### filterLevel with GlobalStore Output

In these example's of the output we can see our initial four logs and then the logs with a level of in the range of 0 - 3 are re-rendered.

![filter level example output](./examples/filterLevel-example.png)

![filter level example terminal output](./examples/filterLevel-terminal-example.png)

## filterNamespace

Filters a [collection](advanced.md#collections) of logs by the given [namespace](modifiers.md#namespace-ns).

### filterNamespace Interface

```typescript
function filterNamespace(collection: Collection = [], ns: string[]): Collection;
```

### filterNamespace with GlobalStore Example

```javascript
import { adze, createGlobalStore, filterNamespace, rerender } from 'adze';

const globalStore = createGlobalStore();

// Let's create a new log factory
const log = adze({ useEmoji: true }).seal();

log().ns('bar').error('This is an error!');
log().ns(['foo', 'bar']).info('This is some info.');
log().ns('baz').success('Successfully did something!');
log().ns('baz').log('Logging something.');

// Let's get our collection from the GlobalStore
const collection = globalStore.getCollection();

// Let's filter the collection and then re-render it.
filterNamespace(collection, ['bar']).forEach(rerender);
```

### filterNamespace with GlobalStore Output

In these example's of the output we can see our initial four logs and then the logs with a namespace of `'bar'` are re-rendered.

![filter namespace example output](./examples/filterNamespace-example.png)

![filter namespace example terminal output](./examples/filterNamespace-terminal-example.png)

## isFinalLogData

This utility function is a type guard that allows you to validate that a log data object is a final log data object type. This is important for a few methods that require [final log data](data.md#log-data).

### isFinalLogData Interface

```typescript
function isFinalLogData(data: LogData | FinalLogData): data is FinalLogData;
```

### isFinalLogData Example

```javascript
import { adze, createGlobalStore, isFinalLogData } from 'adze';

const globalStore = createGlobalStore();

// Let's create a listener and store it's location in a variable
globalStore.addListener('*', (data, render, printed) => {
  // Do stuff with the log data.
});

const { log, render, printed } = adze().info('some important info.');
const data = log.data;

// Listeners only accept finalized log data so we must use a type guard to verify it
if (isFinalLogData(data)) {
  globalStore.fireListeners(data, render, printed);
}
```

## render

This utility function accepts a [log render](adze-concepts.md#log-render) and prints it to the console / terminal.

### render Interface

```typescript
function render([method, args]: LogRender): void;
```

### render Example

```javascript
import { adze, render } from 'adze';

/* Let's get our log render tuple and rename it as to
   not conflict with our function name */
const { render: logRender } = adze().success('Something executed successfully!');

// Now we'll render our log render tuple
render(logRender);
```

### render Output

![render example output](./examples/render-example.png)

![render example terminal output](./examples/render-terminal-example.png)

## rerender

This utility function accepts a log instance and if it has been previously rendered this rerenders it. This function is often used in conjunction with a filter function like [filterLevel](#filterlevel).

### rerender Interface

```typescript
function rerender(log: Log): void;
```

### rerender Example

```javascript
import { adze, rerender } from 'adze';

const { log } = adze().fail('Something failed to execute!');
const { log: silentLog } = adze().silent.alert('Alerting that something went horribly wrong!');

// Let's rerender our fail log
rerender(log);
// Our alert log will not rerender because it was silent and not previously rendered
rerender(silentLog);
```

### rerender Output

![re-render example output](./examples/rerender-example.png)

![re-render example terminal output](./examples/rerender-terminal-example.png)

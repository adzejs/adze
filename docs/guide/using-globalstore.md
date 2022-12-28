# Using GlobalStore

Let's take a deeper dive into each of GlobalStore's public methods.

## addLabel

Adds a [label](modifiers.md#label) instance to the GlobalStore.

### addLabel Interface

```typescript
class GlobalStore {
  public addLabel(label: Label): void;
}
```

### addLabel Example

```javascript
import { adze, createGlobalStore, Label } from 'adze';

// Create a GlobalStore instance
const globalStore = createGlobalStore();

// Let's create a Label instance
const label = new Label('foo');

// Now we can add the label named 'foo' to the GlobalStore
globalStore.addLabel(label);
```

## addListener

Adds a log listener to GlobalStore that invokes the provided callback function if a log passes the provided [level filter](data.md#level-filter).

### addListener Interface

```typescript
class GlobalStore {
  public addListener(
    levels: LevelFilter,
    cb: ListenerCallback
  ): ListenerLocations;
}
```

### addListener Example

```javascript
import { adze, createGlobalStore } from 'adze';

const globalStore = createGlobalStore();

// We'll listen to all levels
globalStore.addListener('*', (data, render) => {
  // Do stuff with the log data.
  if (render) {
    // Do something with the log if it was rendered
  }
});
```

## cacheLimit

Getter and setter for manually overriding the configured or default log cache limit.

### cacheLimit Interface

```typescript
class GlobalStore {
  public set cacheLimit(limit: number);
  public get cacheLimit(): number;
}
```

### cacheLimit Example

```javascript
import { adze, createGlobalStore } from 'adze';

const globalStore = createGlobalStore({
  cacheLimit: 300,
});

// Override the cache limit
globalStore.cacheLimit = 500;

// Let's get the cache limit
const cacheLimit = globalStore.cacheLimit;
// cacheLimit => 500
```

## cacheSize

Getter that returns the number of logs currently cached.

### cacheSize Interface

```typescript
class GlobalStore {
  public get cacheSize(): number;
}
```

### cacheSize Example

```javascript
import { adze, createGlobalStore } from 'adze';

const globalStore = createGlobalStore();

adze().log('First log');
adze().log('Second log');
adze().log('Third log');

// Let's get the cache size
const size = globalStore.cacheSize;
// size => 3
```

## config

Sets the value of the GlobalStore configuration.

### config Interface

```typescript
class GlobalStore {
  public set config(cfg: GlobalStoreUserConfig | undefined);
}
```

### config Example

```javascript
import { adze, createGlobalStore } from 'adze';

// Creating a GlobalStore instance with no config overrides
const globalStore = createGlobalStore({
  globalCfg: {
    logLevel: 0,
  },
});

// Now we'll override the configuration
globalStore.config = {
  globalCfg: {
    logLevel: 3,
  },
};
```

## fireListeners

Fires any listeners that are watching the log level defined with the provided [final log data](data.md#log-data). The final log data and render object will be passed to the listener callback.

_NOTE:_ It is not necessary to call this method manually to fire listeners. When a log is terminated it will fire it automatically. However, if you are recalling a log and want to fire the listener for it again, you'll need to use the pattern in the example below.

### fireListeners Interface

```typescript
// Versions < 1.3.0
class GlobalStore {
  public fireListeners(log: FinalLogData, render: LogRender | null): void;
}

// Versions >= 1.3.0
class GlobalStore {
  public fireListeners(log: FinalLogData, render: LogRender | null, printed: boolean): void;
}
```

### fireListeners Example

For information about the type guard in this example, refer to [isFinalLogData](filtering-and-utility-functions.md#isfinallogdata).

```javascript
import { adze, createGlobalStore, isFinalLogData } from 'adze';

const globalStore = createGlobalStore();

// Let's create a listener and store it's location in a variable
globalStore.addListener('*', (data, render) => {
  // Do stuff with the log data.
});

const { log, render, printed } = adze().info('some important info.');
const data = log.data;

// Listeners only accept finalized log data so we must use a type guard to verify it
if (isFinalLogData(data)) {
  globalStore.fireListeners(data, render, printed);
}
```

## getCollection

Recalls all of the cached logs based on the provided [level filter](data.md#level-filter) as a bundle. This is useful for applying [filters](filtering-and-utility-functions.md) to them, [re-rendering](filtering-and-utility-functions.md#rerender) them, etc.

### Interface

```typescript
class GlobalStore {
  public getCollection(levels: LevelFilter): Collection;
}
```

### Example

```javascript
import { adze, createGlobalStore, rerender } from 'adze';

const globalStore = createGlobalStore();

adze().log('First log');
adze().log('Second log');
adze().log('Third log');

// Let's get the a collection of all cached logs
const collection = globalStore.getCollection('*');

// Now we can re-render them all
collection.forEach(rerender);
```

## getLabel

Get a [label](modifiers.md#label) instance from the GlobalStore by name.

### getLabel Interface

```typescript
class GlobalStore {
  public getLabel(name: string): Label | undefined;
}
```

### getLabel Example

```javascript
import { adze, createGlobalStore } from 'adze';

// Create a GlobalStore instance
const globalStore = createGlobalStore();

// Create a log with a label
adze().label('foo').log('Hello World!');

// Now we can get the label instance named 'foo'
const label = globalStore.getLabel('foo');
```

## hasLabel

Returns a boolean value indicating the existence of a label in the GlobalStore.

### hasLabel Interface

```typescript
class GlobalStore {
  public hasLabel(name: string): boolean;
}
```

### hasLabel Example

```javascript
import { adze, createGlobalStore, Label } from 'adze';

// Create a GlobalStore instance
const globalStore = createGlobalStore();

// Create a log with a label
adze().label('foo').log('Hello World!');

// Now we can add the label named 'foo' to the GlobalStore
const labelExists = globalStore.hasLabel('foo');
// labelExists => true
```

## hasOverrides

Indicates whether this GlobalStore instance has global Adze configuration overrides set.

### hasOverrides Interface

```typescript
class GlobalStore {
  public get hasOverrides(): boolean;
}
```

### hasOverrides Example

```javascript
import { adze, createGlobalStore } from 'adze';

// Creating a GlobalStore instance with no config overrides
const globalStore = createGlobalStore();

// Let's check if the GlobalStore has global overrides configured
const has_overrides = globalStore.hasOverrides;
// has_overrides => false
```

## overrides

Returns the current value of the global [Adze configuration](/config/#adze-configuration) overrides.

### overrides Interface

```typescript
class GlobalStore {
  public get overrides(): Configuration | null;
}
```

### overrides Example

```javascript
import { adze, createGlobalStore } from 'adze';

// Creating a GlobalStore instance with no config overrides
const globalStore = createGlobalStore({
  globalCfg: {
    logLevel: 0,
  },
});

// Let's get our global configuration overrides
const overrides = globalStore.overrides;
```

## removeListener

Adds a log listener to GlobalStore that invokes the provided callback function if a log passes the provided [level filter](data.md#level-filter).

### removeListener Interface

```typescript
class GlobalStore {
  public removeListener(locations: ListenerLocations): void;
}
```

### removeListener Example

```javascript
import { adze, createGlobalStore } from 'adze';

const globalStore = createGlobalStore();

// Let's create a listener and store it's location in a variable
const loc = globalStore.addListener('*', (data, render) => {
  // Do stuff with the log data.
});

// We can now tear down the listener at a later time
globalStore.removeListener(loc);
```

## store

Stores a log in the GlobalStore.

_NOTE:_ This is not required to be done manually. If a GlobalStore exists logs will automatically be stored in it until the cache limit has been reached.

### store Interface

```typescript
class GlobalStore {
  public store(log: BaseLog): void;
}
```

### store Example

```javascript
import { adze, createGlobalStore } from 'adze';

const globalStore = createGlobalStore();

// Generate a log and get the instance
const { log } = adze().info('Some important info.');

// Store the log
globalStore.store(log);
```

## $globalStore.tools

Manual debugging tools primarily for use in the web browser. To use the tools, access them via `window.$globalStore.tools` or simply `$globalStore.tools` in your browser console. Any of the methods listed in the interface below will be made available to you. For all methods other than `renderCache`, `renderNamespace`, and `renderLabel` please refer to the documentation for [Filtering & Utility Functions](filtering-and-utility-functions.md).

### $globalStore.tools Interface

```typescript
class GlobalStore {
  public tools: Tools;
}

class Tools {

  /**
   * Pass-through alias for the render function.
   */
  public render = render;

  /**
   * Pass-through alias for the rerender function.
   */
  public rerender = rerender;

  /**
   * Pass-through alias for the filterCollection function.
   */
  public filterCollection = filterCollection;

  /**
   * Pass-through alias for the filterLabel function.
   */
  public filterLabel = filterLabel;

  /**
   * Pass-through alias for the filterLevel function.
   */
  public filterLevel = filterLevel;

  /**
   * Pass-through alias for the filterNamespace function.
   */
  public filterNamespace = filterNamespace;

  /**
   * Shortcut method for rendering a level-filtered collection from the GlobalStore cache.
   */
  public renderCache(filter: LevelFilter): Collection;

  /**
   * Shortcut method for rendering a level and namespace filtered collection from the GlobalStore cache.
   */
  public renderNamespace(filter: LevelFilter, ...ns: string[]): Collection;

  /**
   * Shortcut method for rendering a level and label filtered collection from the GlobalStore cache.
   */
  public renderLabel(filter: LevelFilter, label: string): Collection;
}
```

### $globalStore.tools Example

![GlobalStore tools example](./examples/globalstore-tools-example.png)

# Global Store

The **Global Store** is a global cache and control hub for your Adze logs. For a more in depth
review of how it works, refer to the [Global Store](../getting-started/global-store.md) section of
the [Getting Started](../getting-started/introduction.md) guide.

## Setup Function

The primary way of configuring the global store is through the `setup()` function. This function
accepts a [UserConfiguration]() value and uses it as a global configuration override.

The setup function also returns a reference to the **Global Store** instance. You can use this
reference to apply [listeners](#addlistener) among other things.

For a more in depth tutorial on using the setup function, refer to the [using the setup function](../getting-started/global-store.md#using-the-setup-function)
section of the [Global Store](../getting-started/global-store.md) page of the [Getting Started](../getting-started/introduction.md) guide.

#### Interface

```typescript
class AdzeGlobal {
  public get cache(): Log[];
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

// Apply global configuration
const store = setup({
  format: 'json',
});

// Add a log listener
store.addListener('*', (log) => {
  // Do stuff with the logs that trigger this listener.
});

adze.log('This is a log.');
adze.log('This is another log.');
```

## Public Getters

These are used for retrieving data and accessing the browser console [tools]().

### cache

---

Retrieves the log cache which is an array of log instances in the order they were generated.

#### Interface

```typescript
class AdzeGlobal {
  public get cache(): Log[];
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup({
  cache: true,
});

adze.log('This is a log.');
adze.log('This is another log.');

// Get the log cache.
const cache = store.cache; // => [Log, Log]
```

### configuration

---

Retrieves the global configuration overrides.

#### Interface

```typescript
class AdzeGlobal {
  public get configuration(): UserConfiguration;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup({
  format: 'json',
});

// Get the global configuration overrides.
const config = store.configuration; // => { format: 'json' }
```

### pid

---

Returns an auto-incremented process ID. This is used by some formatters to provide a `pid` value to
the logs.

#### Interface

```typescript
class AdzeGlobal {
  public get pid(): number;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();

// Get the global configuration overrides.
const pid1 = store.pid; // => 1
const pid2 = store.pid; // => 2
```

### tools

---

Returns a reference to the browser console [tools]() for filtering and recalling logs.

#### Interface

```typescript
class AdzeGlobal {
  public get tools(): Tools;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup({
  cache: true,
});

// Use the tools to reprint every cached error log.
store.tools.filterByLevel('error');
```

## Public Methods

These are used for caching logs, setting up log listeners, and creating and modifying [labels]().

### addLogToCache

---

Adds a log to the log cache.

**This is done automatically when [log caching]() is enabled.**

#### Interface

```typescript
class AdzeGlobal {
  public addLogToCache(log: Log): void;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();

// If I wanted to manually add a new log to the cache for some reason...
// NOTE: Don't do this! This is for demo purposes only!
store.addLogToCache(new adze());
```

<br />

### clearCache

---

Clears the log cache.

#### Interface

```typescript
class AdzeGlobal {
  public clearCache(): void;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup({ cache: true });

adze.log('This is a test log.');

// If I want to clear the cached logs...
store.clearCache();
```

<br />

### getLabel

---

Get a label object by name.

#### Interface

```typescript
class AdzeGlobal {
  public getLabel(name: string): Label | undefined;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup({ cache: true });

adze.label('foo').log('This is a test log.');

// Get the label object named foo...
const label = store.getLabel('foo');
```

<br />

### setLabel

---

Get a label object by name.

#### Interface

```typescript
class AdzeGlobal {
  public setLabel(name: string, label: Label): void;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup({ cache: true });

adze.label('foo').log('This is a test log.');

// Updating the foo label by setting the count to 1.
// EXAMPLE ONLY: DO NOT DO THIS!
const label = store.setLabel('foo', { name: 'foo', count: 1 });
```

<br />

### addListener

---

Adds a log listener that listens for logs that match the provided level selector and returns the
ID of the listener. The ID can be used to remove the listener at a later time by using the
[removeListener](#removelistener) method.

#### Interface

```typescript
class AdzeGlobal {
  public addListener(levels: LevelSelector, listener: LogListener): number;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();

store.addListener('log', (log) => {
  // Do something with the log...
});

adze.label('foo').log('This is a test log.');
```

<br />

### removeListener

---

Removes an existing log listener by its ID. This ID is returned from the [addListener](#addlistener)
method.

#### Interface

```typescript
class AdzeGlobal {
  public removeListener(id: number): void;
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();

const id = store.addListener('log', (log) => {
  // Do something with the log...
});

adze.label('foo').log('This is a test log.');

store.removeListener(id);
```

<br />

### getListeners

---

Returns an array of log listener callback functions by the level they target.

#### Interface

```typescript
class AdzeGlobal {
  public getListeners(level: number): LogListener[];
}
```

#### Example

```typescript
import adze, { setup } from 'adze';

const store = setup();

store.addListener('log', (log) => {
  // Do something with the log...
});

adze.label('foo').log('This is a test log.');

const logListeners = store.getListeners(6);
```

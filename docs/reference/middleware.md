# Middleware

Adze is able to be extended through middleware classes. Adze exports a [Middleware Class]() that can
be extended to hook into various points in a log's [lifecycle](./introduction.md#lifecycle).

Look for Adze middleware libraries for extending the functionality of your logs or for transporting
your log data to various targets.

The **Middleware Class** is meant to be used as a base class that is extended for creating middleware
components for Adze to use.

Because Adze is [isomorphic](https://en.wikipedia.org/wiki/Isomorphic_JavaScript), all middleware
**MUST** also be isomorphic.

## Environment Targeting

When creating middleware, sometimes you care about browser and backend environments, and sometimes
you only care about one of them.

The Middleware Class requires that you specify your target if you only care about a single
environment. If you don't specify your target environment, it will default to assuming your
middleware cares about `'both'`. You can specify your target by providing your value as the first
parameter to the `super()` call in your middleware constructor.

The options are:

- `"both"` - (Default) This middleware will operate in both server and browser environments.
- `"browser"` - This middleware only operates in the browser.
- `"server"` - This middleware only operates in backend environments.

#### Example

```typescript
import { Middleware } from 'adze';

export class HelloMiddleware extends Middleware {
  constructor() {
    // Let's target the server environment for our middleware.
    super('server');
  }
}
```

## Loading Dependencies

Middleware dependencies may function in one or both types of environments. To support all of the
various situations, the Middleware Class provides simple hooks for conditionally loading
dependencies.

These hooks are called when the consumer of the middleware calls the `load` method on the middleware
instance. This is required because we must await our conditionally loaded dependencies.

The methods that are called for each environment are:

- `protected async loadServerDependencies()` - Hook for loading server side dependencies.
- `protected async loadBrowserDependencies()` - Hook for loading browser side dependencies.

#### Example

```typescript
import { Middleware } from 'adze';
// Make sure to include the "type" value here! Otherwise your code will try to import the function!
import type { writeFile } from 'node:fs';

export class HelloMiddleware extends Middleware {
  private writeFile: typeof writeFile;

  constructor() {
    super('server');
  }

  /**
   * Load dependencies for the node environment.
   */
  protected async loadServerDependencies() {
    // We'll load the fs.readFile function so we can write data to our file system.
    const fs = await import('node:fs');
    // Save our dependency to the private writeFile property to be used elsewhere in our middleware.
    this.writeFile = fs.writeFile;
  }
  /**
   * Load dependencies for the browser environment.
   */
  protected async loadBrowserDependencies() {
    // We won't put anything here because we're only targeting the server.
  }
}
```

### Using the Middleware

To use our middleware, we'll need to make sure we instantiate it and await a call to the load method
before passing it in to the [setup](./configuration.md#setup-function) function.

```typescript
import adze, { setup } from 'adze';
import HelloMiddleware from './hello-middleware';

const helloMw = new HelloMiddleware();
await helloMw.load();

setup({
  middleware: [helloMw],
});
```

<br />

## Using Lifecycle Hooks

To hook into various points in the Adze log [lifecycle](./introduction.md#lifecycle), we can define
hooks in our middleware. The hooks listed below are in order of when they are called in the
lifecycle.

### constructed

This hook is called during construction of a log instance.

```typescript
interface Middleware {
  constructed?(log: Log): void;
}
```

| Order | Parameter | Description                                                                             |
| ----- | --------- | --------------------------------------------------------------------------------------- |
| 1     | log       | The instance of the log. This can be used to access its [data](./log-class.md#getters). |

<br/>

### beforeModifierApplied

This hook is called just before a modifier is applied to a log instance.

```typescript
interface Middleware {
  beforeModifierApplied?(log: Log, name: ModifierName, data: ModifierData): void;
}
```

| Order | Parameter | Description                                                                             |
| ----- | --------- | --------------------------------------------------------------------------------------- |
| 1     | log       | The instance of the log. This can be used to access its [data](./log-class.md#getters). |
| 2     | name      | The name of the [modifier](./modifiers.md) that was called (ie. `"withEmoji"`)          |
| 3     | data      | The cumulative [modifier](./modifiers.md) data object from all modifier calls.          |

<br/>

### afterModifierApplied

This hook is called just after a modifier is applied to a log instance.

```typescript
interface Middleware {
  afterModifierApplied?(log: Log, name: ModifierName, data: ModifierData): void;
}
```

| Order | Parameter | Description                                                                             |
| ----- | --------- | --------------------------------------------------------------------------------------- |
| 1     | log       | The instance of the log. This can be used to access its [data](./log-class.md#getters). |
| 2     | name      | The name of the [modifier](./modifiers.md) that was called (ie. `"withEmoji"`)          |
| 3     | data      | The cumulative [modifier](./modifiers.md) data object from all modifier calls.          |

<br/>

### beforeFormatApplied

This hook is called just before a formatter is applied to a log instance to format a message.

```typescript
interface Middleware {
  beforeFormatApplied?(log: Log, format: string, message: unknown[]): void;
}
```

| Order | Parameter | Description                                                                             |
| ----- | --------- | --------------------------------------------------------------------------------------- |
| 1     | log       | The instance of the log. This can be used to access its [data](./log-class.md#getters). |
| 2     | format    | The name of the log [formatter]() that will be used.                                    |
| 3     | message   | Array of arguments to be printed to the console.                                        |

<br/>

### afterFormatApplied

This hook is called just after a formatter is applied to a log instance to format a message.

```typescript
interface Middleware {
  afterFormatApplied?(log: Log, format: string, message: unknown[]): void;
}
```

| Order | Parameter | Description                                                                             |
| ----- | --------- | --------------------------------------------------------------------------------------- |
| 1     | log       | The instance of the log. This can be used to access its [data](./log-class.md#getters). |
| 2     | format    | The name of the log [formatter]() that was used.                                        |
| 3     | message   | Array of [formatted]() arguments to be printed to the console.                          |

<br/>

### beforePrint

This hook is called just before a log instance message is printed to the browser or console.

```typescript
interface Middleware {
  beforePrint?(log: Log): void;
}
```

| Order | Parameter | Description                                                                             |
| ----- | --------- | --------------------------------------------------------------------------------------- |
| 1     | log       | The instance of the log. This can be used to access its [data](./log-class.md#getters). |

<br/>

### beforeTerminated

This hook is called just before a log is terminated.

```typescript
interface Middleware {
  beforeTerminated?(log: Log, terminator: string, args: unknown[]): void;
}
```

| Order | Parameter  | Description                                                                             |
| ----- | ---------- | --------------------------------------------------------------------------------------- |
| 1     | log        | The instance of the log. This can be used to access its [data](./log-class.md#getters). |
| 2     | terminator | The name of the [terminator](./terminators.md) that is being called to print the log.   |
| 3     | args       | The log arguments prior to formatting.                                                  |

<br/>

### afterTerminated

This hook is called just when a log instance has completed termination.

```typescript
interface Middleware {
  afterTerminated?(log: Log, terminator: string, args: unknown[]): void;
}
```

| Order | Parameter  | Description                                                                             |
| ----- | ---------- | --------------------------------------------------------------------------------------- |
| 1     | log        | The instance of the log. This can be used to access its [data](./log-class.md#getters). |
| 2     | terminator | The name of the [terminator](./terminators.md) that is being called to print the log.   |
| 3     | args       | The [formatted]() arguments that will be printed.                                       |

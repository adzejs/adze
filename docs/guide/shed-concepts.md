# Shed Concepts

## What is a Shed?

A **Shed** is an optional global cache and control hub for your Adze logs. The primary purpose of a Shed is to enable global log filtering, configuration overrides, and log listeners. To see how a Shed fits into the architecture, refer to the [Lifecycle Diagram](adze-concepts.html#lifecycle).

Shed is also a dependency to take advantage of some log features such as [labels](modifiers.md#labels), [counters](modifiers.md#count), and [timers](modifiers.md#time). Without the presence of a Shed, these log modifiers either do not function or their functionality is stunted.

For complete documentation on Shed configuration, go [here](/config/#shed-configuration).

## How does it work?

One of the primary purposes of the Shed is to enable large project to centrally
control how their logs render. Let's imagine we have a large project where we
need to split out our code base into multiple packages.

![Large corporate project with broken into packages](./assets/large-project.svg)

Now that our project has been divided up into reusable packages we'll deploy it.

However, after deploying we discovered that we have an error occurring with authentication in the field. During development we usually have debug logs available to us to help sort out where the failure may be occurring, but for production we are stripping them out because we do not have any control over how or when they render.

With Shed and Adze we can declare logs within our packages that we want to keep for debugging purposes. Because Adze logs can be hidden and ignored based on log levels, namespaces, or labels we can set global configuration and filters to show or hide them as needed.

### Example

**Authentication Module**

```typescript
import { adze } from 'adze';

export class Authentication {
  private user_context: UserContext;

  public authenticate() {
    adze().debug('Attempting authentication');
    // ... do some stuff to authenticate
    adze().success('Authentication successful', this.user_context);
  }
}
```

**Large Corporate Project**

```typescript
import { adze, createShed } from 'adze';
import { Authentication } from 'authentication';
import { ENV } from './environment';

/* We'll get our log level from a value we can control in production. */
const level = ENV.level; // <- Env.level currently is set to 0.

// Let's create a shed to globally control our modules
createShed({
  global_cfg: {
    log_level: level, // <- level is 0 so all logs except alert's are hidden
  },
});

// Let's run our authentication
Authentication.authenticate(); // <- No logs are printed
```

As you can see in the example code above, although the Authentication class has logs
defined our Shed configuration overrides the allowed `log_level` and sets it to 0. Our
debug log has a level of 7 and our success log has a level of 5 thus they are both hidden
because their levels are **greater than 0**.

You can also see from this example that we can change how our logs are generated in production by changing the value of `ENV.level`. If we were to change this value to **7** in production we would start seeing our success and debug logs.

## Filtering

One of the primary features of Shed is to allow you to recall and filter your logs while developing and debugging.

For more details about Shed configuration, go [here](/config/#shed-configuration).

### Example

Let's say that throughout our app we have declared some logs with a namespace of "new-feature" to represent a new feature that we are building.

```javascript
// MyNewFeature.ts
import { adze } from 'adze';

function myNewFeature() {
  // ns() is an alias for namespace()
  adze().ns('new-feature').debug('Staring to run myNewFeature');
  // Do some logic for our new feature...
  adze().ns('new-feature').log('Dumping a value in our code', X);
  // Do some more logic...
  adze().ns('new-feature').success('Completed execution of myNewFeature!');
}
```

Now, elsewhere in our codebase, usually sometime during boot of our application we will create a Shed.

```javascript
// Main.ts
import { adze, createShed } from 'adze';

/* This will register a shed globally at either Window.$shed or global.$shed
depending on your environment. It also returns a reference to itself. */
const shed = createShed({
  filters: {
    namespace: {
      exclude: ['new-feature'],
    },
  },
});

// Let's use the shed instance reference to add a log listener.
shed.addListener('*', (data, render) => {
  // Render will be null if the log was never written to the console.
  if (render) {
    // do something with data
  }
});

// Doing some boot stuff...
```

The code above will globally exclude any logs with a namespace of "new-feature" from being written to the console. Also take notice of the listener we created. It watches all log levels (represented by the `'*'`) and will fire for the logs with a namespace of `'new-feature'` even though they are being filtered out. This is done to give you flexibility in how you want to handle your logs in your listeners.

Also notice in our code we are checking if the render value is truthy. We are doing this because any log that was not written to the console will have a `null` log render. This is an easy way to ignore logs that are hidden by any of our filters.

## Listeners

One of the most powerful features of Adze is the ability to listen for logs and react to them in some way.

A log listener is created by calling `addListener()` on a [Shed](#shed-concepts). When an Adze log terminates, it checks if a Shed exists in the global context (`Window` for browsers and `global` for Node). If it does it will attempt to invoke listeners that are targeting that log's level. When a listener is invoked it is provided a [log data object](data.md#log-data) and the [log render](data.md#log-render). With these data objects Adze enables the user to do with the data as they wish. You could write a log to a file. You could send some data about the log to a REST API. It's up to you.

This is a feature that differentiates Adze from other JS logging libraries. Other libraries are typically more focused on Node environments and lock you in to a rigid API for handling the data. Adze takes a different approach by decoupling log data handlers which allows for easier customization and keeps the library lighter weight. As the library and community matures we will add out of the box log data handlers that you can easily install along side of Adze.

### Interface

```typescript
class Shed {
  public addListener(
    levels: LevelFilter,
    cb: ListenerCallback
  ): ListenerLocations;
}

type ListenerCallback = (
  LogData: LogData | FinalLogData,
  render: LogRender | null
) => void;
```

### JSON Log Example

```javascript
import { adze, createShed } from 'adze';

const shed = createShed();

// Let's only listen to levels 1, 2 and 3
shed.addListener([1, 2, 3], ({ definition, timestamp, args }, render) => {
  // We only want write logs if they were allowed to render
  if (render) {
    // Let's write our log as a JSON object
    const log = {
      level: definition.level,
      name: definition.levelName,
      timestamp: timestamp.utc,
      args,
    };
    // You could now write it to a file, send it to a rest API, etc.
  }
});
```

## Recalling Logs

Sometimes you need to recall logs for debugging purposes and you may want to filter them with more detail than the browser console allows. Adze comes with some [filter functions](filtering-and-utility-functions.md) out of the box and that you can use to operate on a [collection](data.md#collection) of logs.

When a Shed exists in the global context logs will automatically be cached in it. These logs can then be retrieved at a later time for filtering.

_NOTE:_ The size of the log cache is [configurable](/config/#shed-configuration) and defaults to 300 logs.

### Example

```javascript
import { adze, createShed, filterLabel, rerender } from 'adze';

const shed = createShed();

// Let's create some logs
adze().label('test').log('First log');
adze().log('Second log');

// Now we can get them from the Shed
const collection = shed.getCollection('*');

// And then we can filter them, re-render them, etc.
filterLabel(collection, 'test').forEach(rerender);
```

# GlobalStore Concepts

## What is a GlobalStore?

A **GlobalStore** is an optional global cache and control hub for your Adze logs. The primary purposes of a GlobalStore are to enable global configuration overrides and log listeners. To see how a GlobalStore fits into the architecture, refer to the [Lifecycle Diagram](adze-concepts.html#lifecycle).

GlobalStore is also a dependency to take advantage of some log features such as [labels](modifiers.md#label), [counters](modifiers.md#count), and [timers](modifiers.md#time). Without the presence of a GlobalStore, these log modifiers either do not function or their functionality is stunted.

For complete documentation on GlobalStore configuration, go [here](/config/#globalstore-configuration).

## How does it work?

One of the primary purposes of the GlobalStore is to enable large project to centrally control how their logs render. Let's imagine we have a large project where we need to split out our code base into multiple packages.

![Large corporate project with broken into packages](./assets/large-project.svg)

Now that our project has been divided up into reusable packages we'll deploy it.

However, after deploying we discovered that we have an error occurring with authentication in the field. During development we usually have debug logs available to us to help sort out where the failure may be occurring, but for production we are stripping them out because we do not have any control over how or when they render.

With GlobalStore and Adze we can declare logs within our packages that we want to keep for debugging purposes. Because Adze logs can be hidden and ignored based on log levels, namespaces, or labels we can set global configuration and filters to show or hide them as needed.

### GlobalStore Example

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
import { adze, createGlobalStore } from 'adze';
import { Authentication } from 'authentication';
import { ENV } from './environment';

/* We'll get our log level from a value we can control in production. */
const level = ENV.level; // <- Env.level currently is set to 0.

// Let's create a GlobalStore to globally control our modules
createGlobalStore({
  globalCfg: {
    logLevel: level, // <- level is 0 so all logs except alert's are hidden
  },
});

// Let's run our authentication
Authentication.authenticate(); // <- No logs are printed
```

As you can see in the example code above, although the Authentication class has logs defined our GlobalStore configuration overrides the allowed `logLevel` and sets it to 0. Our debug log has a level of 7 and our success log has a level of 5 thus they are both hidden because their levels are **greater than 0**.

You can also see from this example that we can change how our logs are generated in production by changing the value of `ENV.level`. If we were to change this value to **7** in production we would start seeing our success and debug logs.

## Listeners

One of the most powerful features of Adze is the ability to listen for logs and react to them in some way.

A log listener is created by calling `addListener()` on a [GlobalStore](#globalstore-concepts). When an Adze log terminates, it checks if a GlobalStore exists in the global context (`Window` for browsers and `global` for Node). If it does it will attempt to invoke listeners that are targeting that log's level. When a listener is invoked it is provided a [log data object](data.md#log-data) and the [log render](data.md#log-render). With these data objects Adze enables the user to do with the data as they wish. You could write a log to a file. You could send some data about the log to a REST API. It's up to you.

This is a feature that differentiates Adze from other JS logging libraries. Other libraries are typically more focused on Node environments and lock you in to a rigid API for handling the data. Adze takes a different approach by decoupling log data handlers which allows for easier customization and keeps the library lighter weight. As the library and community matures we will add out of the box log data handlers that you can easily install along side of Adze.

### Listeners Interface

```typescript
class GlobalStore {
  public addListener(levels: LevelFilter, cb: ListenerCallback): ListenerLocations;
}

type ListenerCallback = (
  LogData: LogData | FinalLogData,
  render: LogRender | null,
  printed: boolean
) => void;
```

### JSON Log Example

```javascript
import { adze, createGlobalStore } from 'adze';

const globalStore = createGlobalStore();

// Let's only listen to levels 1, 2 and 3
globalStore.addListener([1, 2, 3], ({ definition, timestamp, args }, render, printed) => {
  // We only want write logs if they printed to the console
  if (printed) {
    // If version is < 1.3.0 use `if (render)`
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

When a GlobalStore exists in the global context logs will automatically be cached in it. These logs can then be retrieved at a later time for filtering.

_NOTE:_ The size of the log cache is [configurable](/config/#globalstore-configuration) and defaults to 300 logs.

### Recalling Logs Example

```javascript
import { adze, createGlobalStore, filterLabel, rerender } from 'adze';

const globalStore = createGlobalStore();

// Let's create some logs
adze().label('test').log('First log');
adze().log('Second log');

// Now we can get them from the GlobalStore
const collection = globalStore.getCollection('*');

// And then we can filter them, re-render them, etc.
filterLabel(collection, 'test').forEach(rerender);
```

## Manual Debugging Tools

There may be occasions where you need to do manual debugging in a browser environment by [recalling logs](#recalling-logs). The GlobalStore instance gives you access to functions for rerendering logs in the global context.

This is mostly useful in cases where you are deploying your application to a QA or test environment that has the same log level set as that of production. Because of this, you will likely have some of your logs hidden from rendering. If a bug has popped up and you need these logs this can be problematic. With the use of the GlobalStore tools you can work around this limitation and render logs that were previously hidden.

### Manual Debugging Tools Example

```javascript
import { adze, createGlobalStore, filterLabel, rerender } from 'adze';

const globalStore = createGlobalStore();

// In our production environment we only want alert and error level logs to render.
const log = adze({ logLevel: 1 }).seal();

// Throughout our app we generate some debugging logs...
log().label('test').debug('This has some important debugging information.');
log().info('This also has some important debugging information.');

// However, these logs will not print. Now, that your app is in QA you discover a bug. You now need
// to get some of your debugging information without creating a new build and redeploying...
```

![GlobalStore tools example](./examples/globalstore-tools-example.png)

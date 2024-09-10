# Capturing Log Data

Now that we have setup our logger and configured it to our liking, we may also want to capture our
log data and transport it to another source for tracking and monitoring our application.

**Transports** are a term for moving our log data from our application to anothe source. Adze
provides two ways for capturing the log data and then acting upon it to either send over the
network, write to a file, or insert into a database.

The two supported methods are **middleware** and **log listeners**.

## Middleware

Middleware can be created by extending the base **Middleware class** that is provided by Adze. The
Middleware class allows you to hook into various points in the [Adze log lifecycle](../reference/introduction.md#lifecycle).

When the lifecycle hooks are called, they always provide the log instance which can be accessed to
get its data, configuration, and formatted message, as well as any other relevant information to
that hook.

The hook can then process the data and transport it to a destination, such as a file, API, or
database.

For more information about creating middleware, please visit the [middleware](../reference/middleware.md) page in the
[Reference Manual](../reference/introduction.md).

As an example, let's take a look at adding middleware to a logger that transports data to a local
file and rotates the file on a specified interval. We'll use the [@adze/transport-file](https://github.com/adzejs/transport-file)
middleware package to handle this.

```typescript
import adze, { setup } from 'adze';
import AdzeFileTransport from '@adze/transport-file';

// First, we will create an instance of our file transport. We'll rotate our log file every 12 hours.
const fileTransport = new AdzeTransportFile({ directory: './logs', frequency: '12h' });
// Next, we call the load method.
// This is necessary for our middleware to conditionally load its dependencies based on the runtime environment.
// File transports are only relative to server environments.
await fileTransport.load();

// Now, we'll setup Adze and provide the middleware instance.
setup({
  middleware: [fileTransport],
});

const logger = adze.timestamp.seal();
export default logger;
```

Pay special attention to how the AdzeTransportFile middleware class is used. First, it is instantiated
with some options. Second, we must call the `load` method.

We must call the `load` method because Adze is isomorphic and support both the browser and server out
of the box. The dependencies that AdzeTransportFile uses under the hood can only be loaded in a server
environment. The `load` method allows the middleware to load these dependencies only if it is in a
server environment, thus prevent errors from occuring in the browser.

## Log Listeners

Another method of capturing or reacting to logs is by using log listeners. Log listeners are
callback functions that are called when a log has been terminated. They have less capability than
middleware for hooking into the log lifecycle, but are much simpler to implement and can be handy
for simple use cases.

Let's take a look at how to set up a listener.

```typescript
import adze, { setup } from 'adze';

// When the setup function is called, it returns a reference to the Adze global store.
const store = setup();

// From our store reference we can add one or more listeners that target specific log levels.
// The first one here will target all log levels by passing the `'*'` wildcard.
const allListenerId = store.addListener('*', (log: Log) => {
  const data = log.data;
  // Do something with the log instance...
});

// Let's add another listener that only targets alerts.
const alertListenerId = store.addListener('alert', (log: Log) => {
  // Do something with the alert log such as triggering a notification.
});

const logger = adze.timestamp.seal();
export default logger;
```

In the above example we have created two log listeners. One targets all logs and the other targets
only alert logs. You can also target logs with a number array that represents specific log levels
or a string array of log level names. For more information on targeting levels, refer to the
[Reference Manual](../reference/introduction.md) on [LevelSelector's](../reference/configuration.md#levelselector-type).

Also notice that the `addListener` returns the ID for the registered listener. You can use this ID
elsewhere in your application to remove the listeners if necessary.

```typescript
const allListenerId = store.addListener('*', (log: Log) => {
  // Do something with the log instance...
});

// elsewhere in your application...
store.removeListener(allListenerId);
```

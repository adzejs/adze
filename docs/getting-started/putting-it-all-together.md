# Putting It All Together

In summary, we have learned how to do the following:

- [Installing Adze](./installation.md)
- [Setting up Adze for use throughout our applications](./setup.md)
- [Configuring and customizing Adze](./setup.md#configure-the-shared-logger)
- [Annotating our logs with meta data](./annotation.md)
- [Capturing our log data for transport](./capture-data.md)
- [Filtering our logs for readability](./filtering.md)
- [and using tools to filter our logs in our runtime environments](./tools.md)

If you would like to dive even deeper into the functionality that Adze provides, please read through
the [Reference Manual](). Here you will be introduced to all of the available [modifiers]() and
[terminators](), as well as greater detail about [log formatting]() and [customizability]().

## Production Example

Here is an overview of a basic implementation of Adze for use in a production environment.

```typescript
import adze, { setup } from 'adze';
import AdzeTransportFile from '@adze/transport-file';

// Make the output format pretty when in development. Use JSON formatting in all other environments.
const format = import.meta.env.DEV ? 'pretty' : 'json';
// Get an environment variable for controlling my active log level. Default to info level.
const activeLevel = import.meta.env.LOG_LEVEL ?? 'info';

// Setup our middleware to write logs to rotating log files
const fileTransport = new AdzeTransportFile({ directory: './logs' });
await fileTransport.load();

// Configure our logger globally.
const store = setup({
  activeLevel,
  format,
  middleware: [fileTransport],
});

// Listen for alerts to trigger a notification
store.addListener('alert', (log: Log) => {
  // POST my alert to a service that will notify me
});

// Create our logger instance to use throughout our app
const logger = adze.timestamp.ns('MyApp').seal();
export default logger;
```

And using our logger in another module...

```typescript
// my-module.ts
import _logger from './logger';

// Add a namespace of "my-module" for this module's logs.
const logger = _logger.ns('my-module').seal();

logger.info('This is some information about my application.');
```

> Now go read the [reference manual]() and have fun!

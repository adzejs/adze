# Machine Readable Logs

When working with your logs, typically in a production environment, the best practice is to generate logs as JSON objects. By generating them as JSON objects it makes them simpler to index, search, and sort at a later time. Adze supports this out of the box through the [`machineReadable` configuration property](#configuration). When this is enabled, all logs will cease printing in a user-friendly human-readable format and print to the console as JSON objects. These objects will contain all of the information that would normally be present in a human-readable log.

## Configuration

To enable machine readable JSON logs you must activate it through Adze configuration.

```javascript
import adze from 'adze';

adze({ machineReadable: true }).log('This log will be generated as JSON.');
```

## Common Usage

The example above for configuring a machine readable log would only cause that single log that is defined to be machine readable. Not only that, but this log would also always be machine readable. This obviously is not the behavior we are after, so how can we set up our application to become machine readable in production environments? Let's look at an example using node environment variables:

```javascript
import adze from 'adze';

// When process.env.production is set to "true", we will
// set the machineReadable property to true.
const cfg = {
  machineReadable: process.env.environment === 'production'
};

// We'll seal our configuration into a new log factory named logger
const logger = adze(cfg).seal();

// Now we'll export our new logger for use throughout our application.
export default logger;
```

Now, as we import and use our logger throughout our application, when our environment is not 'production' we will have human readable logs. When our environment is production all logs will now be generated as machine readable JSON.
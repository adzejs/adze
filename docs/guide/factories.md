# Factories

As you know from the high-level concepts, Adze logs are typically generated from a factory function. Out-of-the-box you get the `adze()` function that is your normal entry point into creating logs. However, you can also use `seal()` and `bundle()` to take advantage of some other cool features that we will review below.

## adze

The `adze()` factory take a single parameter which is a [Configuration](/config/#adze-configuration) object that controls how this log instance will behave. The factory function will then return a new Adze log instance that you can chain modifiers with and ultimately terminate.

Here are a few examples of some patterns that you can use:

```javascript
import { adze } from 'adze';

// Here we are creating a log with a configuration that will only apply to this instance
adze({ use_emoji: true }).log('Hello World with emoji!');

// But... what if we want to apply the same configuration to multiple logs?
const cfg = {
  use_emoji: true,
};

adze(cfg).log('A log with emoji enabled.');
adze(cfg).log('Another log with emoji enabled');
```

Optionally, you could import and export your configuration across your app:

```javascript
import { adze } from 'adze';
import { cfg } from '~/configuration.ts';

// Generating a log with a shared configuration
adze(cfg).log('Hello World with emoji!');
```

## seal

We've seen some patterns for reusing configuration for your logs, but what if we would like to create a log factory that has the configuration and even some modifiers baked in? This is the case where you would use `seal()`.

### Interface

```typescript
class BaseLog {
  public seal(): () => Log;
}
```

### Example

```javascript
import { adze } from 'adze';

// Let's seal a configuration and namespace into a new log factory
const log = adze({ use_emoji: true }).ns('my-project').seal();

/* Now we can create new logs from our factory that enable emoji's and all
 * have the 'my-project' namespace! */
log().info('This log is generated from a new factory');
log().success('This is another log from the same factory');
```

### Output

![Output of our sealed log](./examples/seal-example.png)

## bundle

There are occassions where you may want to group logs together in a collection that you can later recall and filter. Adze provides a `bundle()` function that will wrap an Adze factory function and curry each subsequent log that is generated from the bundle.

### Interface

```typescript
function bundle(_log: Log | (() => Log)): Bundler;

type Bundler = () => BundledLog;

class BundledBaseLog {
  public get bundle(): Bundle;
}

type Bundle = BundledLog[];
```

### Example

```javascript
import { adze, bundle, filterLabel, rerender } from 'adze';

const bundled = bundle(adze());

bundled().label('foo').info('This log is bundled.');
const { log } = bundled().label('bar').log('This log is also bundled.');

filterLabel(log.bundle, 'foo').forEach(rerender);
```

### Output

![Output from bundling logs, running them through a filter, and rerendering the filtered logs](./examples/bundle-example.png)

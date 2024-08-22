# Setting Up Adze

Although Adze can be used in a very simple, no-config manner by just importing it and using it,
most often we want to centrally create shared loggers that can be imported and used throughout our
application.

## Create a Shared Logger

To create a shared logger, first create a new file somewhere that makes sense in your application
(like `./src/logger.[ts|js]`).

After you have created your file, let's import our dependencies.

```typescript
// ./src/logger.ts
import adze, { setup } from 'adze';

// ...more setup code will go here
```

Here you may have noticed the presence of the `setup` function that we are importing. This function
is used to create a global log store and to apply global configuration to all adze logs.

Now that we have imported our dependencies, let's create and export a shared logger that has
emoji's enabled and outputs timestamps with every log.

```typescript
// ./src/logger.ts
import adze, { setup } from 'adze';

const logger = adze.withEmoji.timestamp.seal();
export default logger;
```

The interesting thing about the code above is that we are calling the `seal` method instead of a
typical log terminator like `info` or `error`.

What `seal` does is it returns a new Log class that inherits any modifiers and configuration from
the parent log chain. In this case, it will inherit the modifiers `withEmoji` and `timestamp`.

Now, let's import and use our new shared logger.

```typescript
// ./src/index.ts
import logger from './logger';

logger.log('Logging from the index.');
```

#### Example output from index.ts

![Shared logger output](./examples/setup-shared-logger.png)

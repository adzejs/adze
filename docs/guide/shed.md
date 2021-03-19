# Shed Concepts

## What is a Shed?

A **Shed** is an optional global cache and control hub for your Adze logs. The
primary purpose of a Shed is to enable global log filtering and
configuration overrides. To see how a Shed fits into the architecture, refer to
the Lifecycle Diagram [here](concepts.html#lifecycle).

## How does it work?

One of the primary purposes of the Shed is to enable large project to centrally
control how their logs render. Let's imagine we have a large project where we
need to split out our code base into multiple packages.

![Large corporate project with broken into packages](../assets/large-project.svg)

Now that our project has been divided up into reusable packages we'll deploy it.

However, after deploying we discovered that we have an error occurring with authentication in the field. During development we usually have debug logs available to us to help sort out where the failure may be occurring, but for production we are stripping them out because we do not have any control over how or when they render.

With Shed and Adze we can declare logs within our packages that we want to keep for debugging purposes. Because Adze logs can be hidden and ignored based on log levels, namespaces, or labels we can set global configuration and filters to show or hide them as needed. Let's look at a simple example:

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
    log_level: level, // <- level is 0 so all logs except attention's are hidden
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

## Filtering with Shed

Beyond applying overrides to log configurations, Shed's other primary purpose is to allow you to recall and filter your logs while developing and debugging. Let's say that throughout our app we have declared some logs with a namespace of "new-feature" to represent a new feature that we are building.

```typescript
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

```typescript
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

## Recalling Logs with Shed

For detailed information about Shed and its configuration go [here](#add-me-later).

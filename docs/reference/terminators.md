# Terminators

When you have an Adze [log](./log-class.md) instance, and have applied your desired
[modifiers](modifiers.md), you must terminate the method chain. The methods used to terminate the
chain are called **terminators**.

Adze comes with 9 default log level terminators, all of which can be [configured](configuration).

| Level | Name                | Standard Method Used |
| ----- | ------------------- | -------------------- |
| 0     | [alert](#alert)     | error                |
| 1     | [error](#error)     | error                |
| 2     | [warn](#warn)       | warn                 |
| 3     | [info](#info)       | info                 |
| 4     | [fail](#fail)       | info                 |
| 5     | [success](#success) | info                 |
| 6     | [log](#log)         | log                  |
| 7     | [debug](#debug)     | debug                |
| 8     | [verbose](#verbose) | debug                |

In addition to the default log levels, Adze provides a handful of other special terminators.

| Name                  | Description                                                                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [clear / clr](#clear) | An alias for `console.clear()`.                                                                                                                                                                                    |
| [custom](#warn)       | Allows you to generate a log for a custom log level.                                                                                                                                                               |
| [seal](#seal)         | Allows you to create a child logger by sealing your log chain into a new logger class.                                                                                                                             |
| [sealTag](#sealTag)   | Allows you to create a child logger by sealing your log chain into a [template string literal tag function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates). |
| [thread](#thread)     | Creates a context thread that can capture data points throughout multiple scopes of your application.                                                                                                              |

## alert

This level should only be used for logs that require immediate attention. This should be used
sparingly and only for the most critical of errors.

**Default log level** = 0

**Standard Log Method:** error

_This is not a standard API._

#### Interface

```typescript
class BaseLog {
  public alert(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze from 'adze';

adze.alert('Something went horribly wrong!');
// With emoji's enabled
adze.withEmoji.alert('Something went horribly wrong!');
```

#### Browser Output

![alert example browser output](./examples/terminators/alert-example-browser.png)

#### Node Output

![alert example node output](./examples/terminators/alert-example-node.png)

## error

Use this for logging fatal errors or errors that impact functionality of your application.

**Default log level** = 1

**Standard Log Method:** error

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)

#### Interface

```typescript
class BaseLog {
  public error(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze from 'adze';

adze.error('An error occurred!');
// With emoji's enabled
adze.withEmoji.error('An error occurred!');
```

#### Browser Output

![error example browser output](./examples/terminators/error-example-browser.png)

#### Node Output

![error example node output](./examples/terminators/error-example-node.png)

## warn

Use this for logging issues that may impact app performance in a less impactful way than an error.

**Default log level** = 2

**Standard Log Method:** warn

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/warn)

#### Interface

```typescript
class BaseLog {
  public warn(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze from 'adze';

adze.warn("I'm warning you!");
// With emoji's enabled
adze.withEmoji.warn("I'm warning you!");
```

#### Browser Output

![warn example browser output](./examples/terminators/warn-example-browser.png)

#### Node Output

![warn example node output](./examples/terminators/warn-example-node.png)

## info

Use this for logging general insights into your application. This level does not indicate any
problems.

**Default log level** = 3

**Standard Log Method:** info

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/info)

#### Interface

```typescript
class BaseLog {
  public info(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze from 'adze';

adze.info('App information');
// With emoji's enabled
adze.withEmoji.info('App information');
```

#### Browser Output

![info example browser output](./examples/terminators/info-example-browser.png)

#### Node Output

![info example node output](./examples/terminators/info-example-node.png)

## fail

Use this for logging network communication errors or other non-fatal errors that do not break your
application.

**Default log level** = 4

**Standard Log Method:** info

_This is not a standard API._

#### Interface

```typescript
class BaseLog {
  public fail(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze from 'adze';

adze.fail('An operation failed to execute!');
// With emoji's enabled
adze.withEmoji.fail('An operation failed to execute!');
```

#### Browser Output

![fail example browser output](./examples/terminators/fail-example-browser.png)

#### Node Output

![fail example node output](./examples/terminators/fail-example-node.png)

## success

Use this for logging successful network communications or other successful operations within your
app.

**Default log level** = 5

**Standard Log Method:** info

_This is not a standard API._

#### Interface

```typescript
class BaseLog {
  public success(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze from 'adze';

adze.success('An operation was successful!');
// With emoji's enabled
adze.withEmoji.success('An operation was successful!');
```

#### Browser Output

![success example browser output](./examples/terminators/success-example-browser.png)

#### Node Output

![success example node output](./examples/terminators/success-example-node.png)

## log

Use this for general logging that doesn't apply to any of the lower levels.

**Default log level** = 6

**Standard Log Method:** log

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)

#### Interface

```typescript
class BaseLog {
  public log(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze from 'adze';

adze.log('Logging a message.');
// With emoji's enabled
adze.withEmoji.log('Logging a message.');
```

#### Browser Output

![log example browser output](./examples/terminators/log-example-browser.png)

#### Node Output

![log example node output](./examples/terminators/log-example-node.png)

## debug

Use this for logging information that you typically do not want to see unless you are debugging a
problem with your application. This is typically hidden by default.

**Default log level** = 7

**Standard Log Method:** debug

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/debug)

#### Interface

```typescript
class BaseLog {
  public debug(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze, { setup } from 'adze';

// We need to raise the active log level to see debug logs.
setup({
  activeLevel: 'debug',
});

adze.debug('Debugging an issue.');
// With emoji's enabled
adze.withEmoji.debug('Debugging an issue.');
```

#### Browser Output

![debug example browser output](./examples/terminators/debug-example-browser.png)

#### Node Output

![debug example node output](./examples/terminators/debug-example-node.png)

## verbose

Use this for logging extremely detailed debugging information. Use this level when the values you
are logging are granular enough that they are no longer easily human readable.

**Default log level** = 8

**Standard Log Method:** verbose

_This is not a standard API._

#### Interface

```typescript
class BaseLog {
  public verbose(...args: unknown[]): void;
}
```

#### Example

```javascript
import adze, { setup } from 'adze';

// We need to raise the active log level to see verbose logs.
setup({
  activeLevel: 'verbose',
});

adze.verbose('Logging some extreme detail.');
// With emoji's enabled
adze.withEmoji.verbose('Logging some extreme detail.');
```

#### Browser Output

![verbose example browser output](./examples/terminators/verbose-example-browser.png)

#### Node Output

![verbose example node output](./examples/terminators/verbose-example-node.png)

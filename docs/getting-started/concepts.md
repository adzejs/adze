# Concepts

Adze as a library has a few core goals it attempts to meet.

The first goal is to provide **a logging library that just works** in both the node and browser
environments.

The second goal is to provide **a simple Typescript compatible API** that wraps, extends, or replicates
all of the functionality of the standard [Console API](https://developer.mozilla.org/en-US/docs/Web/API/console).
The API is nearly identical to the standard console API, but is more feature rich and includes
chaining methods for configuring your logs as you go.

Lastly, **most other libraries do too much**. Adze seeks to separate concerns when it comes to
generating logs and transporting them to another source. Other libraries tend to try to solve both
problems which leads to library bloat. Adze provides a middleware API and log listeners for handling
log data transport separately.

## Lifecycle

Let's take a look under the hood to see how the Adze architecture enables its API and see when the
various middleware hooks are called.

![Lifecycle Diagram of Adze Logs](../assets/lifecycle.svg)

## The Log Chain

As you can see in the diagram, a log chain is made up of three parts:

- [Log Class](adze-class.md)
  - This is where all logs begin, often by calling its static methods to start a chain.
- [Modifiers](modifiers.md)
  - These log methods modify the instance and then return it.
- [Terminator](default-terminators.md)
  - These methods end the chain and generate the log.

#### Example

```typescript
//[Log Class].[Modifier].[Modifier].[Terminator](...arguments)
adze.timestamp.timeNow.log('Logging the current time since pageload.');
```

### Log Class

**Every modifier and terminator method that can be called has a static implementation.**

By calling any of the methods statically, it will also generate a log instance. If a modifier was
called, the log instance will be returned and you can continue your chain. To finalize and print a
log, simply call a terminator method.

### Modifiers

Once you have a Log instance you can immediately [terminate](terminators) it, or you can call
certain methods that this library calls **modifiers**. Modifiers are methods on a Log instance
that changes its behavior. For example, if you wanted to add a performance timestamp to your log you
could use the `timeNow` modifier.

```typescript
adze.timeNow.log('This is the time from pageload.');
```

And it would output like this:

![Adze log with time now modifier preview](./examples/concepts/modifier-example.png)

---

For documentation of all of the supported modifiers, please read the [Modifiers](../reference/modifiers.md) page of the
[Reference Manual](../reference/introduction.md).

### Terminator

In our [Modifiers](../reference/modifiers.md) example code above, you can see we ended our
chain with [`log()`](default-terminators.md#log). The log method is one of the eight [default log terminators](default-terminators.md).
The library also comes with [other special terminators](other-terminators.md) like
[custom](other-terminators.md#custom). A log method is considered a terminator when it
ends your log chain and returns a [terminated log object](data.md#terminated-log-object).

For more information about all of the supported terminators, please read the [Terminators](../reference/terminators.md) page of
the [Reference Manual](../reference/introduction.md).

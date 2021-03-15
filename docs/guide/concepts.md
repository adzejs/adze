# Adze Concepts

One of the core goals of the Adze project is to give you, the developer,
full control over all aspects of your logging while also making the experience
of writing your logs feel natural. To make the experience of using Adze feel
natural, Adze provides a chainable API. Let's look at a basic lifecycle diagram
of the library _(please keep in mind this is not an exhaustive diagram)_.

## Lifecycle

![Lifecycle Diagram of Adze Logs](../assets/basic-architecture.svg)

## The Log Chain

As you can see in the diagram, a log chain is made up of three parts:

- Log Factory
  - This is a function that generates a log instance and returns it.
- Modifiers
  - These log methods modify the instance and then return it.
- Terminator
  - These methods end the chain and finalize the log.

### Log Factory

Adze comes with a function named `adze()` out-of-the-box. This function is
a factory that creates a new Adze instance. Most of the time when interacting
with this library you will either use this factory directly or assign it to
a variable after calling `seal()`, but we'll come back to that later.

### Modifiers

Once you have an instance of Adze you can immediately terminate it, or you
can call certain methods that this library calls modifiers. Modifiers are
methods on an Adze log instance that changes its behavior. For example, if
you wanted to add a performance timestamp to your log you would use the
`timeNow` modifier.

```typescript
adze().timeNow.log('This log is being counted!');
```

And it would output like this:

![Adze log with time now modifier preview](../assets/timenow-example.png)

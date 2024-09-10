# Log Class

The **Log Class** is the core of the Adze library and contains most of the features. All Adze logs
begin with the Log Class.

When generating a new log, you'll start by importing the Log Class which is the default export
of the library. In all examples you will see it imported with the name `adze`.

#### Example

```typescript
import adze from 'adze';
```

---

## Class Methods

Every modifier and terminator method within the Log Class has a corresponding static implementation.
This allows the user to call and instantiate an instance of the Log Class **without** the need of
explicitly calling `new Log()`.

#### Example

```typescript
import adze from 'adze';

// Example value to be logged.
const x = 123;

adze.log('This is a log.', x);
```

---

### Getters

The public getters are used for getting data from a log instance.

- [data](./getters.md#data) - Returns the log data.
- [modifierData](./getters.md#modifierdata) - Returns object containing key/values from called modifiers.
- [configuration](./getters.md#configuration) - Returns the configuration that this log instance is using.

### Modifiers

Modifiers are used to alter log behavior or add context.

- [assert](./modifiers.md#assert)
- [closeThread](./modifiers.md#closethread)
- [count](./modifiers.md#count)
- [countClear](./modifiers.md#countclear)
- [countReset](./modifiers.md#countreset)
- [dir](./modifiers.md#dir)
- [dirxml](./modifiers.md#dirxml)
- [dump](./modifiers.md#dump)
- [format](./modifiers.md#format)
- [group](./modifiers.md#group)
- [groupCollapsed](./modifiers.md#groupcollapsed)
- [groupEnd](./modifiers.md#groupend)
- [if](./modifiers.md#if)
- [label](./modifiers.md#label)
- [meta](./modifiers.md#meta)
- [namespace/ns](./modifiers.md#namespace--ns)
- [silent](./modifiers.md#silent)
- [table](./modifiers.md#table)
- [time](./modifiers.md#time)
- [timeEnd](./modifiers.md#timeend)
- [timeNow](./modifiers.md#timenow)
- [timestamp](./modifiers.md#timestamp)
- [trace](./modifiers.md#trace)
- [withEmoji](./modifiers.md#withemoji)

### Terminators

Terminators end a log and generate it at the specified level.

- [alert](./terminators.md#alert)
- [error](./terminators.md#error)
- [warn](./terminators.md#warn)
- [info](./terminators.md#info)
- [fail](./terminators.md#fail)
- [success](./terminators.md#success)
- [log](./terminators.md#log)
- [debug](./terminators.md#debug)
- [verbose](./terminators.md#verbose)
- [custom](./terminators.md#custom)
- [thread](./terminators.md#thread)
- [seal](./terminators.md#seal)
- [sealTag](./terminators.md#sealtag)

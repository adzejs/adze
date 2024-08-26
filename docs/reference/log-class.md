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

- [data]() - Returns the log data.
- [modifierData]() - Returns object containing key/values from called modifiers.
- [configuration]() - Returns the configuration that this log instance is using.

### Modifiers

Modifiers are used to alter log behavior or add context.

- [assert]()
- [closeThread]()
- [count]()
- [countClear]()
- [countReset]()
- [dir]()
- [dirxml]()
- [dump]()
- [format]()
- [group]()
- [groupCollapsed]()
- [groupEnd]()
- [if]()
- [label]()
- [meta]()
- [namespace/ns]()
- [silent]()
- [table]()
- [time]()
- [timeEnd]()
- [timeNow]()
- [timestamp]()
- [trace]()
- [withEmoji]()

### Terminators

Terminators end a log and generate it at the specified level.

- [alert]()
- [error]()
- [warn]()
- [info]()
- [fail]()
- [success]()
- [log]()
- [debug]()
- [verbose]()
- [custom]()
- [thread]()
- [seal]()
- [sealTag]()

### Other Methods

- [print]() - Prints the log message to the console if it has a generated message.

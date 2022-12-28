# Modifiers

Once you have an Adze log instance you can now start applying modifiers. Modifiers are methods that alter the log in some way and then return
the log instance so that you may chain more modifiers or terminate the instance. Keep in mind, some modifiers have a dependency on the presence of a [label](#label) and labels rely on GlobalStore.

## assert

This modifier accepts an assertion boolean expression and will only print if the boolean expression fails (is a falsy value).

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/assert)

### assert Interface

```typescript
class Log {
  public assert(assertion: boolean): this;
}
```

### assert Example

```javascript
import { adze } from 'adze';

const x = 2;
const y = 3;

// Let's assert that x and y should be equal
adze()
  .assert(x === y)
  .log('X does not equal Y');

// This log will not print because the assertion passes
adze()
  .assert(x === 2)
  .log('X does not equal 2');

// Let's look at the output with emoji's enabled
adze({ useEmoji: true })
  .assert(x === y)
  .log('X does not equal Y');
```

### assert Output

![assert modifier example output](./examples/assert-example.png)

![assert modifier example terminal output](./examples/assert-terminal-example.png)

## count

The count modifier tells the log to increment a counter associated to the log's [label](#label).

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)

### count Interface

```typescript
class Log {
  public get count(): this;
}
```

### count Example

```javascript
import { adze, createGlobalStore } from 'adze';

// A GlobalStore is required for labels and modifiers that depend on them
createGlobalStore();

for (let i = 0; i < 5; i += 1) {
  adze().label('my-counter').count.log('Counting iterations.');
}
```

### count Output

![Count modifier output](./examples/count-example.png)

![Count modifier terminal output](./examples/count-terminal-example.png)

## countClear

The countClear modifier completely clears the count from a [label](#label). Rather than setting the count to 0 it instead becomes null.

_NOTE:_
This method is deliberately a modifier rather than a terminator because it forces you to write a log that gives you insight into when a counter was cleared. It also makes the countClear log recallable from the [GlobalStore](/guide/globalstore) in the order it was created.

_This is not a standard API._

### countClear Interface

```typescript
class Log {
  public get countClear(): this;
}
```

### countClear Example

```javascript
import { adze, createGlobalStore } from 'adze';

// A GlobalStore is required for labels and modifiers that depend on them
createGlobalStore();

for (let i = 0; i < 4; i += 1) {
  adze().label('my-counter').count.log('Counting iterations.');
}

adze().label('my-counter').countClear.log('Clearing the counter.');

adze().label('my-counter').log('A log with the my-counter label but no count.');
```

### countClear Output

![count clear modifier example output](./examples/countClear-example.png)

## countReset

The countReset modifier resets the counter associated to the log's [label](#label) to 0.

_NOTE:_
This method is deliberately a modifier rather than a terminator because it forces you to write a log that gives you insight into when a counter was reset. It also makes the countReset log recallable from a [GlobalStore](/guide/globalstore) in the order it was created.

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)

### countReset Interface

```typescript
class Log {
  public get countReset(): this;
}
```

### countReset Example

```javascript
import { adze, createGlobalStore } from 'adze';

// A GlobalStore is required for labels and modifiers that depend on them
createGlobalStore();

for (let i = 0; i < 4; i += 1) {
  adze().label('my-counter').count.log('Counting iterations.');
}

adze().label('my-counter').countReset.log('Resetting the counter.');

for (let i = 0; i < 4; i += 1) {
  adze().label('my-counter').count.log('Counting iterations again.');
}
```

### countReset Output

![count reset modifier example output](./examples/countReset-example.png)

![count reset modifier example terminal output](./examples/countReset-terminal-example.png)

## dir

The dir modifier transforms the output of the log by directing it to use the `console.dir()` method for printing purposes only.

_NOTE:_ Logs that use `dir` as a modifier should only be given a single argument which is usually an object. If multiple arguments are given, behavior may differ between browser and node environments. Refer to the MDN docs for more details.

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)

### dir Interface

```typescript
class Log {
  public get dir(): this;
}
```

### dir Example

```javascript
import { adze } from 'adze';

adze().dir.log({ foo: 'bar' });
```

### dir Output

![dir modifier output](./examples/dir-example.png)

![dir modifier terminal output](./examples/dir-terminal-example.png)

## dirxml

The dirxml modifier transforms the output of the log by directing it to use the `console.dirxml()` method for printing purposes only. This is mainly useful for logging out DOM elements.

_NOTE:_ Logs that use `dirxml` as a modifier should only be given a single argument which is usually a DOM Element or other XML object. If multiple arguments are given, behavior may differ between browser and node environments. Refer to the MDN docs for more details.

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)

### dirxml Interface

```typescript
class Log {
  public get dirxml(): this;
}
```

### dirxml Example

```javascript
import { adze } from 'adze';

// create a new div element
const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'test');
// and give it some content
const newContent = document.createTextNode('Hi there and greetings!');
// add the text node to the newly created div
newDiv.appendChild(newContent);

adze().dirxml.log(newDiv);
```

### dirxml Output

![dirxml modifier output](./examples/dirxml-example.png)

![dirxml modifier terminal output](./examples/dirxml-terminal-example.png)

## dump

This modifier instructs the [labeled](#label) log to print the context values from a [thread](#thread).

Refer to the [Mapped Diagnostic Context (MDC)](mapped-diagnostic-context.md) page for more information about the purpose of MDC.

This modifier is dependent upon having a [label](#label) and a [GlobalStore](./globalstore-concepts.md).

_This is not a standard API._

### dump Interface

```typescript
class Log {
  public get dump(): this;
}
```

### dump Example

```javascript
import { adze, createGlobalStore } from 'adze';

const globalStore = createGlobalStore();

// Creating a GlobalStore listener is a great way to get meta data from your
// threaded logs to write to disk or pass to another plugin, library,
// or service.
globalStore.addListener([1, 2, 3, 4, 5, 6, 7, 8], (log) => {
  // Do something with `log.context.added` or `log.context.subtracted`.
});

function add(a, b) {
  const answer = a + b;
  adze().label('foo').thread('added', { a, b, answer });
  return answer;
}

function subtract(x, y) {
  const answer = x - y;
  adze().label('foo').thread('subtracted', { x, y, answer });
  return answer;
}

add(1, 2);
subtract(4, 3);

adze().label('foo').dump.info('Results from our thread');
```

### dump Output

![dump modifier example output](./examples/dump-example.png)

![dump modifier terminal example output](./examples/dump-terminal-example.png)

## group

The group modifier starts an uncollapsed group of logs. This means that all subsequent logs will be nested beneath this log until a [groupEnd](#groupEnd) log occurs.

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)

### group Interface

```typescript
class Log {
  public get group(): this;
}
```

### group Example

```javascript
import { adze } from 'adze';

// Some info about our app.
const version = 'v1.0.0';
const browser = 'firefox';

adze().group.info('App Information');
adze().info(`Version: ${version}`);
adze().info(`Browser: ${browser}`);
adze().groupEnd.info();
```

### group Output

![group modifier example output](./examples/group-example.png)

![group modifier terminal example output](./examples/group-terminal-example.png)

## groupCollapsed

The groupCollapsed modifier starts an collapsed group of logs. This means that all subsequent logs will be nested beneath this log until a [groupEnd](#groupEnd) log occurs.

_Note:_ This will not be collapsed in a terminal environment since there is no way to uncollapse it.

[**MDN Docs**](1)

### groupCollapsed Interface

```typescript
class Log {
  public get groupCollapsed(): this;
}
```

### groupCollapsed Example

```javascript
import { adze } from 'adze';

// Some info about our app.
const version = 'v1.0.0';
const browser = 'firefox';

adze().groupCollapsed.info('App Information');
adze().info(`Version: ${version}`);
adze().info(`Browser: ${browser}`);
adze().groupEnd.info();
```

### groupCollapsed Output

![groupCollapsed modifier example output](./examples/groupCollapsed-example.png)

![groupCollapsed modifier terminal example output](./examples/groupCollapsed-terminal-example.png)

## groupEnd

The groupEnd modifier ends a log group. Any logs following a groupEnd will no longer be grouped.

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)

### groupEnd Interface

```typescript
class Log {
  public get groupEnd(): this;
}
```

### groupEnd Example

```javascript
import { adze } from 'adze';

// Some info about our app.
const version = 'v1.0.0';
const browser = 'firefox';

adze().group.info('App Information');
adze().info(`Version: ${version}`);
adze().info(`Browser: ${browser}`);
adze().groupEnd.info(); // <-- Ends the group

adze().info('Some other information...');
```

### groupEnd Output

![groupEnd modifier example output](./examples/groupEnd-example.png)

![groupEnd modifier terminal example output](./examples/groupEnd-terminal-example.png)

## label

Applies an identifying label to a log. If a [GlobalStore](../globalstore-concepts.md) is present, all logs that share the same label will be linked together behind the scenes. This enables global tracking for modifiers that require a label as a prerequisite.

These are the modifiers that require a label and a [GlobalStore](../globalstore-concepts.md) to be useful:

- [count](#count)
- [countReset](#countreset)
- [countClear](#countclear)
- [time](#time)
- [timeNow](#timenow)
- [timeEnd](#timeend)

_This is not a standard API._

### label Interface

```typescript
class Log {
  public label(name: string): this;
}
```

### label Example

```javascript
import { adze, createGlobalStore } from 'adze';

createGlobalStore();

// Labels can be applied in any order in a modifier chain
adze().count.label('foo').log('Bar');
adze().label('foo').count.log('Foo');
```

### label Output

![label modifier example output](./examples/label-example.png)

![label modifier terminal example output](./examples/label-terminal-example.png)

## meta

The meta modifier allows you to attach meta data to your log instance. You can then retrieve it at a later time from within a log listener or by calling the `data()` method on a log instance.

_This is not a standard API._

### meta Interface

> The interface of `meta<KV extends [string, any]>(...[key, val]: KV): this;` is available for Adze versions >= 1.2.0

```typescript
class Log {
  // Types are Overloaded
  public meta<T>(key: string, val: T): this;
  public meta<KV extends [string, any]>(...[key, val]: KV): this;
}
```

### meta Example

```javascript
import { adze, createGlobalStore } from 'adze';

// Let's optionally create a GlobalStore to show the use of meta data on listeners
const globalStore = createGlobalStore();

// We'll listen only to logs of level 6 which is "log"
globalStore.addListener([6], (data) => {
  adze().info("My log's meta data!", data.meta);
});

// Let's create a super important message to attach as meta data
const info = 'Hello World!';

adze().meta('message', info).log('This log contains an important message.');
```

```typescript
import { adze, createGlobalStore } from 'adze';

// Let's optionally create a GlobalStore to show the use of meta data on listeners
const globalStore = createGlobalStore();

// We'll listen only to logs of level 6 which is "log"
globalStore.addListener([6], (data) => {
  adze().info("My log's meta data!", data.meta);
});

// Let's create a super important message to attach as meta data
const info = 'Hello World!';

adze().meta('message', info).log('This log contains an important message.');
```

### meta Output

![meta modifier output with listener output](./examples/meta-example.png)

![meta modifier terminal output with listener output](./examples/meta-terminal-example.png)

## namespace / ns

This modifier adds one or more namespaces to a log. Multiple calls to the namespace modifier are additive by nature
and will not overwrite previously applied namespaces. These are mainly used as human readable group identifiers but are
also useful for filtering recalled logs and for identifying logs from a log listener. This modifier does not do any
special grouping under the hood. The `ns()` method is just a shorter alias for `namespace()`.

Adze also supports passing a Constraints type to the log factory that will allow you to centrally specify what namespaces are allowed to be used. This is beneficial because it will force users to add any new namespace that they might want to add to the central `allowedNamespaces` type property. This will make it easier to filter namespaces throughout your application because you will only have a single place to look to understand what namespaces are being used.

_This is not a standard API._

### namespace / ns Interface

```typescript
class Log {
  public namespace(ns: string | string[]): this;
  public ns(ns: string | string[]): this;
  // Or alternatively with the restof operator (versions >= 1.5.0)
  public namespace(...ns: string[]): this;
  public ns(...ns: string[]): this;
}
```

### namespace / ns Example

```javascript
import { adze } from 'adze';

adze().namespace('tix-123').log('Important info for a feature.');
adze()
  .namespace('tix-123', 'tix-456', 'tix-789')
  .log('Multiple namespace entry simplified by the restof operator.');
// ns() is a shorthand alias for namespace()
adze().ns('tix-456').log('More info');
// Multiple calls to namespace/ns are additive
adze().ns('foo').ns('bar', 'baz').log('This log has all applied namespaces.');

//----- Example with TS Constraints -----//
import adze, { Constraints } from 'adze';

// First we will create our app constraints by extending the Constraint interface
interface MyAppConstraints extends Constraints {
  allowedNamespaces: 'foo' | 'bar' | 'hello' | 'world';
}

// Now we apply the constraints to our app's logger factory
const logger = adze<MyAppConstraints>().seal();

// Now when we define namespaces for a log a type error will be thrown if the 
// namespace provided isn't in the allowedNamespaces union type.
logger().ns('foo', 'bar', 'baz').fail('This is not allowed.');
//                        ^^^^^
// Argument of type '"baz"' is not assignable to parameter of type '"foo" | "bar" | "hello" | "world"'.
```

### namespace / ns Output

![namespace modifier example output](./examples/namespace-example.png)

![namespace modifier terminal example output](./examples/namespace-terminal-example.png)

## silent

The silent modifier allows a log to be terminated and cached but prevents it from printing to the console. This can be useful for providing a log to a log listener that you do not want to have printed.

_This is not a standard API._

### silent Interface

```typescript
class Log {
  public get silent(): this;
}
```

### silent Example

```javascript
import { adze } from 'adze';

adze().log('Hello World!');
adze().silent.log('Crickets...');
adze().log('I guess nobody is home :(');
```

### silent Output

![example of silent log output](./examples/silent-example.png)

![example of silent log terminal output](./examples/silent-terminal-example.png)

## table

The table modifier transforms the output of the log by directing it to use the `console.table()` method for printing purposes only.

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)

### table Interface

```typescript
class Log {
  public get table(): this;
}
```

### table Example

```javascript
import { adze } from 'adze';

const tabular_data = [
  { firstName: 'Andrew', lastName: 'Stacy' },
  { firstName: 'Jim', lastName: 'Bob' },
];

adze().table.log(tabular_data);
```

### table Output

![table modifier output](./examples/table-example.png)

![table modifier terminal output](./examples/table-terminal-example.png)

## test

This modifier accepts a boolean expression and will only print if the boolean expression passes (is a truthy value).

_This is not a standard API._

### test Interface

```typescript
class Log {
  public test(expression: boolean): this;
}
```

### test Example

```javascript
import { adze } from 'adze';

const x = 2;
const y = 3;

// Let's test that x equals 2
adze()
  .test(x === 2)
  .log('X equals 2');

// This log will not print because the test fails
adze()
  .test(x === y)
  .log('X does not equal Y');

// Let's look at the output with emoji's enabled
adze({ useEmoji: true })
  .test(y === 3)
  .log('Y equals 3');
```

### test Output

![test modifier example output](./examples/test-example.png)

![test modifier terminal example output](./examples/test-terminal-example.png)

## time

This modifier starts a timer associated to the log's [label](#label). This is useful for taking performance measurements. A log with a time modifier must be followed by a log with a [timeEnd](#timeend) modifier in order to get the final measurement.

This modifier is dependent upon having a [label](#label) and a [GlobalStore](./globalstore-concepts.md).

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/time)

### time Interface

```typescript
class Log {
  public get time(): this;
}
```

### time Example

```javascript
import { adze, createGlobalStore } from 'adze';

createGlobalStore();

// Let's create a timer for performance
adze().label('loop').time.log('Starting a timer.');

for (let i = 0; i < 10000; i += 1) {
  // Do a lot of stuff that takes time
}

// End the timer to get the loop performance
adze().label('loop').timeEnd.log('Performance of our loop.');

// Let's see the output with emoji's
adze({ useEmoji: true }).label('loop').timeEnd.log('Performance of our loop.');
```

### time Output

![time modifier example output](./examples/time-example.png)

![time modifier terminal example output](./examples/time-terminal-example.png)

## timeEnd

This modifier ends a timer associated to the log's [label](#label). This is useful for taking performance measurements. A log with a timeEnd modifier must be preceded by a log with a [time](#time) modifier in order to get the final measurement.

This modifier is dependent upon having a [label](#label) and a [GlobalStore](./globalstore-concepts.md).

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd)

### timeEnd Interface

```typescript
class Log {
  public get time(): this;
}
```

### timeEnd Example

```javascript
import { adze, createGlobalStore } from 'adze';

createGlobalStore();

// Let's create a timer for performance
adze().label('loop').time.log('Starting a timer.');

for (let i = 0; i < 10000; i += 1) {
  // Do a lot of stuff that takes time
}

// End the timer to get the loop performance
adze().label('loop').timeEnd.log('Performance of our loop.');

// Let's see the output with emoji's
adze({ useEmoji: true }).label('loop').timeEnd.log('Performance of our loop.');
```

### timeEnd Output

![time end modifier example output](./examples/time-example.png)

![time end modifier example output](./examples/time-terminal-example.png)

## timeNow

This modifier logs the time elapsed since the page has loaded. This is useful for measuring page load performance rather than performance of a particular piece of code. This modifier is **not** dependent upon a [label](#label) or [GlobalStore](./globalstore-concepts.md).

_This is not a standard API._

### timeNow Interface

```typescript
class Log {
  public get timeNow(): this;
}
```

### timeNow Example

```javascript
import { adze } from 'adze';

for (let i = 0; i < 10000; i += 1) {
  // Do a lot of stuff that takes time
}

// Let's create a timer for performance
adze().timeNow.log('Recording the time elapsed since page load.');

// Let's see what it looks like with emoji's enabled.
adze({ useEmoji: true }).timeNow.log(
  'Recording the time elapsed since page load.'
);
```

### timeNow Output

![time now modifier example output](./examples/timeNow-example.png)

![time now modifier terminal example output](./examples/timeNow-terminal-example.png)

## timestamp

This modifier instructs the log to render an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.

_This is not a standard API._

### timestamp Interface

```typescript
class Log {
  public get timestamp(): this;
}
```

### timestamp Example

```javascript
import { adze } from 'adze';

adze().label('timestamped').timestamp.log('This log has a timestamp.');
```

### timestamp Output

![timestamp modifier example output](./examples/timestamp-example.png)

![timestamp modifier terminal example output](./examples/timestamp-terminal-example.png)

## trace

This modifier instructs the log to print a stacktrace using the standard `console.trace()` method.

_NOTE:_ The styling for logs using this modifier varies by browser. Chrome will render the log message with proper styling while Firefox will only render the message unstyled.

[**MDN Docs**](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)

### trace Interface

```typescript
class Log {
  public get trace(): this;
}
```

### trace Example

```javascript
import { adze } from 'adze';

adze().trace.log('Trying to find an issue...');
```

### trace Output

![trace modifier example output](./examples/trace-example.png)

![trace modifier example terminal output](./examples/trace-terminal-example.png)

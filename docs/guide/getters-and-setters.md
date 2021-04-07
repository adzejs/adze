# Getters and Setters

Adze log instances have a few setters and getters that you can take advantage of.

## context

Use this getter to retrieve the log instance's Mapped Diagnostic Context (MDC) value.

### Example

```javascript
import { adze, createShed } from 'adze';

createShed();

// Let's generate a log
adze().label('context').thread('foo', 'bar');
const { log } = adze().label('context').info('This is an info log');

// Get the MDC context of the log
const context = log.context;
```

## data

Use this getter to retrieve all of the meta [data](data.md#log-data) related to the log instance.

### Example

```javascript
import { adze } from 'adze';

// Let's generate a log
const { log } = adze().label('foo').timeNow.info('This is an info log');

// Get all of the meta data from the log instance
const data = log.data;
```

## hydrate

This setter enables you to create a new log instance or replicate a log instance by providing the method with a [log data object](data.md#log-data). The log instance will inherit all of the properties from the log data object.

### Example

```javascript
import { adze } from 'adze';

// Let's generate a log
const { log } = adze().label('foo').timeNow.info('This is an info log');

// Let's clone it by using the hydrate setter
const cloned = adze().hydrate(log.data);
```

## level

Use this getter to retrieve the log instance's level.

### Example

```javascript
import { adze } from 'adze';

// Let's generate a log
const { log } = adze().info('This is an info log');

// Get the level of the log
const level = log.level;
```

## render

Use this getter to retrieve the log instance's [render](data.md#log-render). Under normal circumstances you should retrieve the log render from the [terminated log object](data.md#terminated-log-object) that is returned by a terminated log rather than from the getter.

### Example

```javascript
import { adze } from 'adze';

// Let's generate a log
const { log } = adze().info('This is an info log');

// Get the render of the log
const render = log.render;
```

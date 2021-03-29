# Advanced

In this section of the guide we'll take a look at some of the more in-depth concepts and interfaces of Adze.

## Collections

A Collection is simply an array of Adze log instances that extend from the **BaseLog** class. There are two types of instances that extends BaseLog, **BundledLog** and **Log**. You will never interact with a **BaseLog** instance directly.

A **Log** is the instance type that is created whenever you normally terminate a log.

A **BundledLog** is a log instance that is generated from a [bundle](factories.md#bundle) factory. These log instances have a getter that allows you to access the log bundle.

### Interface

```typescript
type Collection = BaseLog[];
```

### Bundle Example

```javascript
import { adze, createShed } from 'adze';

// Let's create a log bundle
const bundled = bundle(adze({ use_emoji: true }));

bundled().label('collect').error('This is an error!');
bundled().label('collect').info('A bundled log with namespaces.');
bundled().label('collect').success('Successfully bundled this log!');
const { log } = bundled().label('collect').log('Another log in the bundle.');

// Let's get our Collection from our bundle
const collection = log.bundle;

// -----

// We can also get a collection from the Shed if we one exists
```

### Shed Example

```javascript
import { adze, createShed } from 'adze';

// We'll create a Shed to capture our logs
const shed = createShed();

// Let's get our collection from the Shed
const collection = shed.getCollection();
```

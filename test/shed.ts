import anyTest, { TestInterface } from 'ava';
import { Shed } from '../src/shed/Shed';
import adze, { createShed, removeShed, shedExists, isFinalLogData } from '../src';
import { Label } from '../src/label';

global.ADZE_ENV = 'dev';

// Setup our test hook context
const test = anyTest as TestInterface<{ shed: Shed }>;

test.afterEach(() => {
  removeShed();
});

test('createShed adds a shed instance to the global context', (t) => {
  createShed();
  t.truthy(global.$shed);
});

test('removeShed removes the shed instance from the global context', (t) => {
  createShed();
  t.truthy(global.$shed);
  removeShed();
  t.falsy(global.$shed);
});

test('shedExists correctly indicates that a shed instance exists in the global context', (t) => {
  const store = undefined;
  if (shedExists(store)) {
    t.fail();
  } else {
    t.pass();
  }
});

test('stores a log instance', (t) => {
  // We have a log instance before a shed existed
  const { log } = adze({ useEmoji: true }).ns('Foo').info('This is an info log.');
  // Create a shed
  const shed = createShed();
  // Let's add our orphaned log instance to the shed
  shed.store(log);
  // Now let's get our collection of logs from the shed. We'll select all.
  const collection = shed.getCollection('*');

  t.truthy(collection.length === 1);

  const data = collection[0].data;
  t.is(data.namespace?.[0], 'Foo');
  t.is(data.args?.[0], 'This is an info log.');
});

test('store accepts cache limit override with setter', (t) => {
  const shed = createShed();
  shed.cacheLimit = 500;
  t.is(shed.cacheLimit, 500);
});

test('store returns the cache limit from getter', (t) => {
  const shed = createShed();
  t.is(shed.cacheLimit, 300);
});

test('store accepts global config overrides with setter', (t) => {
  const shed = createShed();
  shed.config = { cacheLimit: 50 };

  t.is(shed.cacheLimit, 50);
});

test('store returns global config overrides from getter', (t) => {
  const shed = createShed({
    globalCfg: {
      logLevels: {
        log: {
          level: 100,
        },
      },
    },
  });
  const cfg = shed.overrides;
  t.is(cfg?.logLevels?.log?.level, 100);
});

test('store hasOverrides correctly indicates that global config override has been set', (t) => {
  const shed = createShed({
    globalCfg: {
      logLevels: {
        log: {
          level: 100,
        },
      },
    },
  });
  t.truthy(shed.hasOverrides);
});

test('stores and returns a label instance', (t) => {
  const shed = createShed();
  shed.addLabel(new Label('test'));
  const label = shed.getLabel('test');

  t.is(label?.name, 'test');
});

test('hasLabel indicates existence of label in the cache', (t) => {
  const shed = createShed();
  shed.addLabel(new Label('test'));

  t.truthy(shed.hasLabel('test'));
});

test('adds a log listener targeting specific log levels', (t) => {
  t.plan(2);
  const shed = createShed();
  shed.addListener([1, 6], (data) => {
    if (data.level) {
      t.truthy([1, 6].includes(data.level));
    } else {
      t.fail();
    }
  });

  adze().error('This is an error.');
  adze().log('This is a log.');
  adze().verbose('This is a verbose.');
});

test('adds a log listener targeting all log levels', (t) => {
  t.plan(3);
  const shed = createShed();
  shed.addListener('*', (data) => {
    if (data.level) {
      t.truthy([1, 6, 8].includes(data.level));
    } else {
      t.fail();
    }
  });

  adze().error('This is an error.');
  adze().log('This is a log.');
  adze().verbose('This is a verbose.');
});

test('adds a log listener targeting a range of log levels', (t) => {
  t.plan(2);
  const shed = createShed();
  shed.addListener([1, '-', 6], (data) => {
    if (data.level) {
      t.truthy([1, 6].includes(data.level));
    } else {
      t.fail();
    }
  });

  adze().error('This is an error.');
  adze().log('This is a log.');
  adze().verbose('This is a verbose.');
});

test('removes a log listener', (t) => {
  t.plan(3);
  const shed = createShed();
  const location = shed.addListener([1, '-', 3], (data) => {
    if (data.level) {
      t.truthy([1, 2, 3].includes(data.level));
    } else {
      t.fail();
    }
  });

  adze().error('This is an error.');
  adze().warn('This is a log.');
  adze().info('This is a verbose.');

  shed.removeListener(location);

  adze().error('This is an error.');
  adze().warn('This is a log.');
  adze().info('This is a verbose.');
});

test('fires the log listeners', (t) => {
  const { log, render, printed } = adze().info('A basic log.');

  const shed = createShed();
  shed.addListener([3], () => {
    t.pass();
  });

  const data = log.data;
  if (isFinalLogData(data)) {
    shed.fireListeners(data, render, printed);
  } else {
    t.fail();
  }
});

test('configured cache limit works properly', (t) => {
  const shed = createShed({ cacheLimit: 2 });

  adze().log('Log 1');
  adze().log('Log 2');
  adze().log('Log 3');

  const collection = shed.getCollection('*');
  t.is(collection.length, 2);
});

test('shed tools renderCache renders appropriate log levels from the shed cache', (t) => {
  const shed = createShed();

  adze().alert('This is an alert!');
  adze().error('This is an error!');
  adze().warn('This is a warn!');
  adze().info('This is an info!');
  adze().fail('This is a failure!');
  adze().success('This is a success!');
  adze().log('This is a log!');
  adze().debug('This is a debug!');
  adze().verbose('This is a verbose!');

  const rendered = shed.tools.renderCache([0, '-', 3]);

  t.is(rendered.length, 4);
});

test('shed tools renderNamespace renders appropriate logs with provided level and namespace filter from the shed cache', (t) => {
  const shed = createShed();

  adze().ns('foo', 'bar').alert('This is an alert!');
  adze().ns('bar').error('This is an error!');
  adze().ns('hello').warn('This is a warn!');
  adze().ns('world').info('This is an info!');
  adze().ns('hello', 'world').fail('This is a failure!');
  adze().ns('baz').success('This is a success!');
  adze().ns('foo', 'baz').log('This is a log!');
  adze().ns('foo').debug('This is a debug!');
  adze().ns('foo', 'hello', 'world').verbose('This is a verbose!');

  const renderedAll = shed.tools.renderNamespace('*', 'bar', 'baz');

  const renderedAlert = shed.tools.renderNamespace([0], 'bar', 'baz');

  t.is(renderedAll.length, 4);
  t.is(renderedAlert.length, 1);
});

test('shed tools renderLabel renders appropriate logs with provided level and label filter from the shed cache', (t) => {
  const shed = createShed();

  adze().label('foo').alert('This is an alert!');
  adze().error('This is an error!');
  adze().label('foo').warn('This is a warn!');
  adze().label('bar').info('This is an info!');
  adze().label('hello').fail('This is a failure!');
  adze().success('This is a success!');
  adze().label('foo').log('This is a log!');
  adze().label('world').debug('This is a debug!');
  adze().label('foo').verbose('This is a verbose!');

  const renderedAll = shed.tools.renderLabel('*', 'foo');
  const renderedWarn = shed.tools.renderLabel([2], 'foo');

  t.is(renderedAll.length, 4);
  t.is(renderedWarn.length, 1);
});

test('log listeners should have printed set to false when a log is silent', (t) => {
  const shed = createShed();

  shed.addListener([0], (data, render, printed) => {
    t.true(data.isSilent);
    t.not(render, null);
    t.false(printed);
  });

  adze().silent.alert('This log is silent.');
});

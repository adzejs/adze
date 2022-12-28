import anyTest, { TestInterface } from 'ava';
import { GlobalStore } from '../src/global-store/global-store';
import adze, {
  createGlobalStore,
  removeGlobalStore,
  globalStoreExists,
  isFinalLogData,
} from '../src';
import { Label } from '../src/label';

global.ADZE_ENV = 'dev';

// Setup our test hook context
const test = anyTest as TestInterface<{ globalStore: GlobalStore }>;

test.afterEach(() => {
  removeGlobalStore();
});

test('createGlobalStore adds a GlobalStore instance to the global context', (t) => {
  createGlobalStore();
  t.truthy(global.$globalStore);
});

test('removeGlobalStore removes the GlobalStore instance from the global context', (t) => {
  createGlobalStore();
  t.truthy(global.$globalStore);
  removeGlobalStore();
  t.falsy(global.$globalStore);
});

test('globalStoreExists correctly indicates that a GlobalStore instance exists in the global context', (t) => {
  const store = undefined;
  if (globalStoreExists(store)) {
    t.fail();
  } else {
    t.pass();
  }
});

test('stores a log instance', (t) => {
  // We have a log instance before a GlobalStore existed
  const { log } = adze({ useEmoji: true }).ns('Foo').info('This is an info log.');
  // Create a GlobalStore
  const globalStore = createGlobalStore();
  // Let's add our orphaned log instance to the GlobalStore
  globalStore.store(log);
  // Now let's get our collection of logs from the GlobalStore. We'll select all.
  const collection = globalStore.getCollection('*');

  t.truthy(collection.length === 1);

  const data = collection[0].data;
  t.is(data.namespace?.[0], 'Foo');
  t.is(data.args?.[0], 'This is an info log.');
});

test('store accepts cache limit override with setter', (t) => {
  const globalStore = createGlobalStore();
  globalStore.cacheLimit = 500;
  t.is(globalStore.cacheLimit, 500);
});

test('store returns the cache limit from getter', (t) => {
  const globalStore = createGlobalStore();
  t.is(globalStore.cacheLimit, 300);
});

test('store accepts global config overrides with setter', (t) => {
  const globalStore = createGlobalStore();
  globalStore.config = { cacheLimit: 50 };

  t.is(globalStore.cacheLimit, 50);
});

test('store returns global config overrides from getter', (t) => {
  const globalStore = createGlobalStore({
    globalCfg: {
      logLevels: {
        log: {
          level: 100,
        },
      },
    },
  });
  const cfg = globalStore.overrides;
  t.is(cfg?.logLevels?.log?.level, 100);
});

test('store hasOverrides correctly indicates that global config override has been set', (t) => {
  const globalStore = createGlobalStore({
    globalCfg: {
      logLevels: {
        log: {
          level: 100,
        },
      },
    },
  });
  t.truthy(globalStore.hasOverrides);
});

test('stores and returns a label instance', (t) => {
  const globalStore = createGlobalStore();
  globalStore.addLabel(new Label('test'));
  const label = globalStore.getLabel('test');

  t.is(label?.name, 'test');
});

test('hasLabel indicates existence of label in the cache', (t) => {
  const globalStore = createGlobalStore();
  globalStore.addLabel(new Label('test'));

  t.truthy(globalStore.hasLabel('test'));
});

test('adds a log listener targeting specific log levels', (t) => {
  t.plan(2);
  const globalStore = createGlobalStore();
  globalStore.addListener([1, 6], (data) => {
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
  const globalStore = createGlobalStore();
  globalStore.addListener('*', (data) => {
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
  const globalStore = createGlobalStore();
  globalStore.addListener([1, '-', 6], (data) => {
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
  const globalStore = createGlobalStore();
  const location = globalStore.addListener([1, '-', 3], (data) => {
    if (data.level) {
      t.truthy([1, 2, 3].includes(data.level));
    } else {
      t.fail();
    }
  });

  adze().error('This is an error.');
  adze().warn('This is a log.');
  adze().info('This is a verbose.');

  globalStore.removeListener(location);

  adze().error('This is an error.');
  adze().warn('This is a log.');
  adze().info('This is a verbose.');
});

test('fires the log listeners', (t) => {
  const { log, render, printed } = adze().info('A basic log.');

  const globalStore = createGlobalStore();
  globalStore.addListener([3], () => {
    t.pass();
  });

  const data = log.data;
  if (isFinalLogData(data)) {
    globalStore.fireListeners(data, render, printed);
  } else {
    t.fail();
  }
});

test('configured cache limit works properly', (t) => {
  const globalStore = createGlobalStore({ cacheLimit: 2 });

  adze().log('Log 1');
  adze().log('Log 2');
  adze().log('Log 3');

  const collection = globalStore.getCollection('*');
  t.is(collection.length, 2);
});

test('GlobalStore tools renderCache renders appropriate log levels from the GlobalStore cache', (t) => {
  const globalStore = createGlobalStore();

  adze().alert('This is an alert!');
  adze().error('This is an error!');
  adze().warn('This is a warn!');
  adze().info('This is an info!');
  adze().fail('This is a failure!');
  adze().success('This is a success!');
  adze().log('This is a log!');
  adze().debug('This is a debug!');
  adze().verbose('This is a verbose!');

  const rendered = globalStore.tools.renderCache([0, '-', 3]);

  t.is(rendered.length, 4);
});

test('GlobalStore tools renderNamespace renders appropriate logs with provided level and namespace filter from the GlobalStore cache', (t) => {
  const globalStore = createGlobalStore();

  adze().ns('foo', 'bar').alert('This is an alert!');
  adze().ns('bar').error('This is an error!');
  adze().ns('hello').warn('This is a warn!');
  adze().ns('world').info('This is an info!');
  adze().ns('hello', 'world').fail('This is a failure!');
  adze().ns('baz').success('This is a success!');
  adze().ns('foo', 'baz').log('This is a log!');
  adze().ns('foo').debug('This is a debug!');
  adze().ns('foo', 'hello', 'world').verbose('This is a verbose!');

  const renderedAll = globalStore.tools.renderNamespace('*', 'bar', 'baz');

  const renderedAlert = globalStore.tools.renderNamespace([0], 'bar', 'baz');

  t.is(renderedAll.length, 4);
  t.is(renderedAlert.length, 1);
});

test('GlobalStore tools renderLabel renders appropriate logs with provided level and label filter from the GlobalStore cache', (t) => {
  const globalStore = createGlobalStore();

  adze().label('foo').alert('This is an alert!');
  adze().error('This is an error!');
  adze().label('foo').warn('This is a warn!');
  adze().label('bar').info('This is an info!');
  adze().label('hello').fail('This is a failure!');
  adze().success('This is a success!');
  adze().label('foo').log('This is a log!');
  adze().label('world').debug('This is a debug!');
  adze().label('foo').verbose('This is a verbose!');

  const renderedAll = globalStore.tools.renderLabel('*', 'foo');
  const renderedWarn = globalStore.tools.renderLabel([2], 'foo');

  t.is(renderedAll.length, 4);
  t.is(renderedWarn.length, 1);
});

test('log listeners should have printed set to false when a log is silent', (t) => {
  const globalStore = createGlobalStore();

  globalStore.addListener([0], (data, render, printed) => {
    t.true(data.isSilent);
    t.not(render, null);
    t.false(printed);
  });

  adze().silent.alert('This log is silent.');
});

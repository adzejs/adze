import anyTest, { TestInterface } from 'ava';
import { Shed } from 'src/shed';
import {
  createShed,
  adze,
  removeShed,
  shedExists,
  isFinalLogData,
} from '../src';
import { Label } from '../src/label';

global.ADZE_ENV = 'dev';

// Setup our test hook context
const test = anyTest as TestInterface<{ shed: Shed }>;

test.afterEach((t) => {
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
  const { log } = adze({ use_emoji: true })
    .ns('Foo')
    .info('This is an info log.');
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
  shed.config = { cache_limit: 50 };

  t.is(shed.cacheLimit, 50);
});

test('store returns global config overrides from getter', (t) => {
  const shed = createShed({
    global_cfg: {
      log_levels: {
        log: {
          level: 100,
        },
      },
    },
  });
  const cfg = shed.overrides;
  t.is(cfg?.log_levels.log.level, 100);
});

test('store hasOverrides correctly indicates that global config override has been set', (t) => {
  const shed = createShed({
    global_cfg: {
      log_levels: {
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
  shed.addListener('1-6', (data) => {
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
  const location = shed.addListener('1-3', (data) => {
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
  const { log, render } = adze().info('A basic log.');

  const shed = createShed();
  shed.addListener([3], () => {
    t.pass();
  });

  const data = log.data;
  if (isFinalLogData(data)) {
    shed.fireListeners(data, render);
  } else {
    t.fail();
  }
});

test('logGloballyAllowed correctly indicates that a log is allowed to render', (t) => {
  const shed = createShed({
    filters: {
      hideAll: true,
    },
  });
  const { log } = adze().log('This is a test.');
  const data = log.data;

  if (isFinalLogData(data)) {
    if (shed.logGloballyAllowed(data)) {
      t.fail();
    } else {
      t.pass();
    }
  } else {
    t.fail();
  }
});

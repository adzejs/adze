import anyTest, { TestInterface } from 'ava';
import { create } from 'lodash';
import { Shed } from 'src/shed';
import { createShed, adze, removeShed, shedExists } from '../src';

global.ADZE_ENV = 'dev';

// Setup our test hook context
const test = anyTest as TestInterface<{ shed: Shed }>;

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

test.todo('store returns global config overrides from getter');

test.todo(
  'store hasOverrides correctly indicates that global config override has been set'
);

test.todo('stores a label instance');

test.todo('returns a label from the cache');

test.todo('hasLabel indicates existence of label in the cache');

test.todo('adds a log listener');

test.todo('removes a log listener');

test.todo('fires the log listeners');

test.todo(
  'logGloballyAllowed correctly indicates that a log is allowed to render'
);

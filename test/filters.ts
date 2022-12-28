import test from 'ava';
import adze, {
  filterNamespace,
  filterLabel,
  filterLevel,
  filterCollection,
  createGlobalStore,
  removeGlobalStore,
} from '../src';

global.ADZE_ENV = 'dev';

test.afterEach(() => {
  removeGlobalStore();
});

test.serial('filters a log collection by namespace', (t) => {
  const globalStore = createGlobalStore();

  adze().ns('SPACE').error('This is an error!');
  adze().ns('foo', 'SPACE').info('A log with namespaces.');
  adze().label('i-am-label').success('A successful log!');
  adze().log('Yet another log.');

  const collection = globalStore.getCollection('*');
  t.is(collection.length, 4);

  const filtered = filterNamespace(collection, ['SPACE']);

  t.is(filtered.length, 2);
});

test.serial('filters a log collection by label', (t) => {
  const globalStore = createGlobalStore();

  adze().ns('SPACE').error('This is an error!');
  adze().ns('foo', 'SPACE').info('A log with namespaces.');
  adze().label('i-am-label').success('A successful log!');
  adze().log('Yet another log.');

  const collection = globalStore.getCollection('*');
  t.is(collection.length, 4);

  const filtered = filterLabel(collection, 'i-am-label');

  t.is(filtered.length, 1);
});

test.serial('filters a log collection by levels', (t) => {
  const globalStore = createGlobalStore();

  adze().ns('SPACE').error('This is an error!');
  adze().ns('foo', 'SPACE').info('A log with namespaces.');
  adze().label('i-am-label').success('A successful log!');
  adze().log('Yet another log.');

  const collection = globalStore.getCollection('*');
  t.is(collection.length, 4);

  const filtered = filterLevel(collection, [3, '-', 5]);

  t.is(filtered.length, 2);
});

test.serial('filterCollection filters collection by a log data value', (t) => {
  const globalStore = createGlobalStore();

  adze().ns('SPACE').silent.error('This is an error!');
  adze().ns('foo', 'SPACE').info('A log with namespaces.');
  adze().label('i-am-label').success('A successful log!');
  adze().log('Yet another log.');

  const collection = globalStore.getCollection('*');
  t.is(collection.length, 4);

  const filtered = filterCollection(collection, (log_data) => log_data.isSilent === false);
  t.is(filtered.length, 3);
});

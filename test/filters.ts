import test from 'ava';
import adze, {
  filterNamespace,
  filterLabel,
  filterLevel,
  filterCollection,
  createShed,
  removeShed,
} from '../src';

global.ADZE_ENV = 'dev';

test.afterEach(() => {
  removeShed();
});

test.serial('filters a log collection by namespace', (t) => {
  const shed = createShed();

  adze().ns('SPACE').error('This is an error!');
  adze().ns(['foo', 'SPACE']).info('A bundled log with namespaces.');
  adze().label('i-am-label').success('Successfully bundled this log!');
  adze().log('Here is another log in the bundle.');

  const collection = shed.getCollection('*');
  t.is(collection.length, 4);

  const filtered = filterNamespace(collection, ['SPACE']);

  t.is(filtered.length, 2);
});

test.serial('filters a log collection by label', (t) => {
  const shed = createShed();

  adze().ns('SPACE').error('This is an error!');
  adze().ns(['foo', 'SPACE']).info('A bundled log with namespaces.');
  adze().label('i-am-label').success('Successfully bundled this log!');
  adze().log('Here is another log in the bundle.');

  const collection = shed.getCollection('*');
  t.is(collection.length, 4);

  const filtered = filterLabel(collection, 'i-am-label');

  t.is(filtered.length, 1);
});

test.serial('filters a log collection by levels', (t) => {
  const shed = createShed();

  adze().ns('SPACE').error('This is an error!');
  adze().ns(['foo', 'SPACE']).info('A bundled log with namespaces.');
  adze().label('i-am-label').success('Successfully bundled this log!');
  adze().log('Here is another log in the bundle.');

  const collection = shed.getCollection('*');
  t.is(collection.length, 4);

  const filtered = filterLevel(collection, [3, '-', 5]);

  t.is(filtered.length, 2);
});

test.serial('filterCollection filters collection by a log data value', (t) => {
  const shed = createShed();

  adze().ns('SPACE').silent.error('This is an error!');
  adze().ns(['foo', 'SPACE']).info('A bundled log with namespaces.');
  adze().label('i-am-label').success('Successfully bundled this log!');
  adze().log('Here is another log in the bundle.');

  const collection = shed.getCollection('*');
  t.is(collection.length, 4);

  const filtered = filterCollection(collection, (log_data) => log_data.isSilent === false);
  t.is(filtered.length, 3);
});

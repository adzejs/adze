import test from 'ava';
import {
  adze,
  bundle,
  filterNamespace,
  filterLabel,
  filterLevel,
  filterCollection,
} from '../src';

global.ADZE_ENV = 'dev';

test('filters a log collection by namespace', (t) => {
  const bundled = bundle(adze({ useEmoji: true }));

  bundled().ns('SPACE').error('This is an error!');
  bundled().ns(['foo', 'SPACE']).info('A bundled log with namespaces.');
  bundled().label('i-am-label').success('Successfully bundled this log!');
  const { log } = bundled().log('Here is another log in the bundle.');

  const collection = log.bundle;
  t.is(collection.length, 4);

  const filtered = filterNamespace(collection, ['SPACE']);

  t.is(filtered.length, 2);
});

test('filters a log collection by label', (t) => {
  const bundled = bundle(adze({ useEmoji: true }));

  bundled().ns('SPACE').error('This is an error!');
  bundled().ns(['foo', 'SPACE']).info('A bundled log with namespaces.');
  bundled().label('i-am-label').success('Successfully bundled this log!');
  const { log } = bundled().log('Here is another log in the bundle.');

  const collection = log.bundle;
  t.is(collection.length, 4);

  const filtered = filterLabel(collection, 'i-am-label');

  t.is(filtered.length, 1);
});

test('filters a log collection by levels', (t) => {
  const bundled = bundle(adze({ useEmoji: true }));

  bundled().ns('SPACE').error('This is an error!');
  bundled().ns(['foo', 'SPACE']).info('A bundled log with namespaces.');
  bundled().label('i-am-label').success('Successfully bundled this log!');
  const { log } = bundled().log('Here is another log in the bundle.');

  const collection = log.bundle;
  t.is(collection.length, 4);

  const filtered = filterLevel(collection, [3, '-', 5]);

  t.is(filtered.length, 2);
});

test('filterCollection filters collection by a log data value', (t) => {
  const bundled = bundle(adze({ useEmoji: true }));

  bundled().ns('SPACE').silent.error('This is an error!');
  bundled().ns(['foo', 'SPACE']).info('A bundled log with namespaces.');
  bundled().label('i-am-label').success('Successfully bundled this log!');
  const { log } = bundled().log('Here is another log in the bundle.');

  const collection = log.bundle;
  t.is(collection.length, 4);

  const filtered = filterCollection(
    collection,
    (log_data) => log_data.isSilent === false
  );
  t.is(filtered.length, 3);
});

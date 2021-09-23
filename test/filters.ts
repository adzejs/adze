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

// test('config filtering by namespace include only prints logs with specified namespace', (t) => {
//   const logger = adze({
//     filters: {
//       namespace: {
//         include: ['foo'],
//       },
//     },
//   }).seal();

//   const { render: render1 } = logger().ns('foo').log('I should print.');
//   const { render: render2 } = logger().ns('bar').log('I should not print.');
//   const { render: render3 } = logger()
//     .ns(['foo', 'bar'])
//     .log('I should print.');
//   const { render: render4 } = logger().log('I should not print.');

//   t.truthy(render1);
//   t.falsy(render2);
//   t.truthy(render3);
//   t.falsy(render4);
// });

// test('config filtering by namespace exclude prints all logs without the specified namespace', (t) => {
//   const logger = adze({
//     filters: {
//       namespace: {
//         exclude: ['foo'],
//       },
//     },
//   }).seal();

//   const { render: render1 } = logger().ns('foo').log('I should not print.');
//   const { render: render2 } = logger().ns('bar').log('I should print.');
//   const { render: render3 } = logger()
//     .ns(['foo', 'bar'])
//     .log('I should not print.');
//   const { render: render4 } = logger().log('I should print.');

//   t.falsy(render1);
//   t.truthy(render2);
//   t.falsy(render3);
//   t.truthy(render4);
// });

// test('config filtering by label include only prints logs with specified label', (t) => {
//   const logger = adze({
//     filters: {
//       label: {
//         include: ['foo'],
//       },
//     },
//   }).seal();

//   const { render: render1 } = logger().label('foo').log('I should print.');
//   const { render: render2 } = logger().label('bar').log('I should not print.');
//   const { render: render3 } = logger().log('I should not print.');

//   t.truthy(render1);
//   t.falsy(render2);
//   t.falsy(render3);
// });

// test('config filtering by label exclude prints all logs without the specified label', (t) => {
//   const logger = adze({
//     filters: {
//       label: {
//         exclude: ['foo'],
//       },
//     },
//   }).seal();

//   const { render: render1 } = logger().label('foo').log('I should not print.');
//   const { render: render2 } = logger().label('bar').log('I should print.');
//   const { render: render3 } = logger().log('I should print.');

//   t.falsy(render1);
//   t.truthy(render2);
//   t.truthy(render3);
// });

// test('config filtering hideAll should force all logs to not print', (t) => {
//   const logger = adze({
//     filters: {
//       hideAll: true,
//     },
//   }).seal();

//   const { render: render1 } = logger().label('foo').log('I should not print.');
//   const { render: render2 } = logger()
//     .label('bar')
//     .debug('I should not print.');
//   const { render: render3 } = logger()
//     .ns(['foo', 'bar'])
//     .alert('I should not print.');

//   t.falsy(render1);
//   t.falsy(render2);
//   t.falsy(render3);
// });

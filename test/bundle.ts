import test from 'ava';
import { adze, bundle, createShed, removeShed } from '../src';

global.ADZE_ENV = 'dev';

test('bundles logs', (t) => {
  const bundled = bundle(adze({ useEmoji: true }));

  const { log, render } = bundled().ns('SPACE').error('This is an error!');
  const { log: log2, render: render2 } = bundled()
    .ns(['foo', 'SPACE'])
    .info('Multiple namespaces.');

  if (render === null || render2 === null) {
    t.fail();
  }

  t.deepEqual(log.bundle[0].data.namespace, ['SPACE']);
  t.deepEqual(log.bundle[1].data.namespace, ['foo', 'SPACE']);

  t.deepEqual(log2.bundle[0].data.namespace, ['SPACE']);
  t.deepEqual(log2.bundle[1].data.namespace, ['foo', 'SPACE']);
});

test('can bundle sealed log instance', (t) => {
  createShed();
  const bundled = bundle(adze({ useEmoji: true }).count.label('SEALED').seal());

  const { log } = bundled().ns('SPACE').error('This is an error!');
  const { log: log2 } = bundled()
    .ns(['foo', 'SPACE'])
    .info('Multiple namespaces.');

  t.is(log.bundle[0].data.label.name, 'SEALED');
  t.is(log.bundle[0].data.label.count, 2);
  t.is(log.bundle[1].data.label.name, 'SEALED');
  t.is(log.bundle[1].data.label.count, 2);

  t.is(log2.bundle[0].data.label.name, 'SEALED');
  t.is(log2.bundle[0].data.label.count, 2);
  t.is(log2.bundle[1].data.label.name, 'SEALED');
  t.is(log2.bundle[1].data.label.count, 2);
  removeShed();
});

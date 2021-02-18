import test from 'ava';
import { adze, bundle } from '../src';

global.ADZE_ENV = 'dev';

test('bundles logs', (t) => {
  const bundled = bundle(adze({ use_emoji: true }));

  const { log, render } = bundled().ns('SPACE').error('This is an error!');
  const { log: log2, render: render2 } = bundled()
    .ns(['foo', 'SPACE'])
    .info('Multiple namespaces.');

  const sealed = bundled().count.seal();

  if (render === null || render2 === null) {
    t.fail();
  }

  t.is(log.bundle, 

});

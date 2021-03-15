import test from 'ava';
import { adze } from '../src';

global.ADZE_ENV = 'dev';

interface Test {
  a: number;
  b: number;
}

test('log saves meta data correctly', (t) => {
  const with_meta = adze()
    .meta<Test>('test', { a: 12, b: 34 })
    .seal();
  const { log, render } = with_meta()
    .meta('test2', 5678)
    .log('Added meta twice.');

  t.truthy(render);
  t.deepEqual(log.data.meta, {
    test: {
      a: 12,
      b: 34,
    },
    test2: 5678,
  });
});

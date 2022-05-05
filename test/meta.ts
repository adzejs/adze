import test from 'ava';
import adze from '../src';

global.ADZE_ENV = 'dev';

interface TestMeta {
  a: number;
  b: number;
}
type Test = ['test', TestMeta];

test('log saves meta data correctly with Tuple generic type', (t) => {
  const with_meta = adze()
    .meta<Test>('test', { a: 12, b: 34 })
    .seal();
  const { log, render } = with_meta().meta('test2', 5678).log('Added meta twice.');

  t.truthy(render);
  t.deepEqual(log.data.meta, {
    test: {
      a: 12,
      b: 34,
    },
    test2: 5678,
  });
});

test('log saves meta data correctly with generic type', (t) => {
  const with_meta = adze()
    .meta<TestMeta>('test', { a: 12, b: 34 })
    .seal();
  const { log, render } = with_meta().meta('test2', 5678).log('Added meta twice.');

  t.truthy(render);
  t.deepEqual(log.data.meta, {
    test: {
      a: 12,
      b: 34,
    },
    test2: 5678,
  });
});

test('log contains global meta data and inline meta data', (t) => {
  const with_meta = adze({ meta: { foo: 'bar' } }).seal();
  const { log, render } = with_meta().meta('test2', 5678).log('Added meta twice.');

  t.truthy(render);
  t.deepEqual(log.data.meta, {
    foo: 'bar',
    test2: 5678,
  });
});

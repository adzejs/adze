import test from 'ava';
import adze from '../../../src';

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

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.deepEqual(parsed.meta, {
      test: {
        a: 12,
        b: 34,
      },
      test2: 5678,
    });
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Added meta twice.');
  } else {
    t.fail();
  }
});

test('adds stacktrace property to log output', (t) => {
  const { log, render } = adze().trace.log('Tracing a problem.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.is(parsed.namespace.length, 3);
    t.truthy(parsed.stacktrace);
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'This log has multiple namespaces that are added together.');
  } else {
    t.fail();
  }
});

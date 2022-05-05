import test from 'ava';
import adze, { Configuration } from '../../src';

global.ADZE_ENV = 'dev';

test('captureStacktrace adds stacktrace to output for all logs', (t) => {
  const cfg: Configuration = {
    machineReadable: true,
    captureStacktrace: true,
  };

  const { log, render } = adze(cfg).log('This log has a stacktrace attached.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.truthy(parsed.stacktrace);
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'This log has a stacktrace attached.');
  } else {
    t.fail();
  }
});

test('meta adds metadata to output for all logs', (t) => {
  const cfg: Configuration = {
    machineReadable: true,
    meta: {
      hello: 'world',
    },
  };

  const { log, render } = adze(cfg).log('This log has global metadata attached.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.is(parsed.meta.hello, 'world');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'This log has global metadata attached.');
  } else {
    t.fail();
  }
});

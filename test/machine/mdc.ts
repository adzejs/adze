// eslint-disable-next-line @typescript-eslint/no-var-requires
import test from 'ava';
import adze, { createShed, removeShed } from '../../src';

global.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createShed();
});

test.afterEach(() => {
  removeShed();
});

test('Dumps the MDC context', (t) => {
  adze().label('thread').thread('key1', 'value1');
  adze().label('thread').thread('key2', 'value2');
  const { log, render } = adze({ machineReadable: true }).label('thread').dump.log('Threaded log.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.is(parsed.label, 'thread');
    t.deepEqual(parsed.context, {
      key1: 'value1',
      key2: 'value2',
    });
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Threaded log.');
  } else {
    t.fail();
  }
});

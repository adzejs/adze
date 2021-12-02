import test from 'ava';
import adze, { createShed, removeShed } from '../../../src';

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
  const { log, render } = adze().label('thread').dump.log('Threaded log.');

  t.is(log.data.context.key1, 'value1');
  t.is(log.data.context.key2, 'value2');

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.deepEqual(args[args.length - 1], {
      key1: 'value1',
      key2: 'value2',
    });
  } else {
    t.fail();
  }
});

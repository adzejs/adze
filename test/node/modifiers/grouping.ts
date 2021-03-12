import test from 'ava';
import { adze } from '../../../src';

global.ADZE_ENV = 'dev';

test('group log renders correctly', (t) => {
  const { log, render } = adze().group.success('Opening a log group.');
  if (render) {
    const [method, args] = render;
    t.is(method, 'group');
    t.is(log.data.level, 5);
    t.is(args[0], ' Success(1)    ');
    t.is(args[1], 'Opening a log group.');
  } else {
    t.fail();
  }
});

test('group collapsed renders correctly', (t) => {
  const { log, render } = adze().groupCollapsed.success(
    'Opening a collapsed log group.'
  );
  if (render) {
    const [method, args] = render;
    t.is(method, 'groupCollapsed');
    t.is(log.data.level, 5);
    t.is(args[0], ' Success(1)    ');
    t.is(args[1], 'Opening a collapsed log group.');
  } else {
    t.fail();
  }
});

import test from 'ava';
import adze from '../src';

// Our global context is the window not global
global.ADZE_ENV = 'dev';

test('group ends correctly', (t) => {
  const { log, render } = adze().groupEnd.success();
  if (render) {
    const [method] = render;
    t.is(log.data.level, 5);
    t.is(method, 'groupEnd');
  } else {
    t.fail();
  }
});

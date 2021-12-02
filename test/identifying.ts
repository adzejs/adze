import test from 'ava';
import adze, { createShed, removeShed } from '../src';

global.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createShed();
});

test.afterEach(() => {
  removeShed();
});

test('label can be applied in any order as a modifier', (t) => {
  createShed();
  const { log, render } = adze()
    .count.label('test')
    .log('Label modifier added after count modifier.');

  if (render) {
    t.is(log.data.label.count, 1);
    t.is(log.data.label.name, 'test');
  } else {
    t.fail();
  }
});

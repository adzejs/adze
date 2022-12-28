import test from 'ava';
import adze, { createGlobalStore, removeGlobalStore } from '../src';

global.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createGlobalStore();
});

test.afterEach(() => {
  removeGlobalStore();
});

test('label can be applied in any order as a modifier', (t) => {
  createGlobalStore();
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

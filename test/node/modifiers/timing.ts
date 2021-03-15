import test from 'ava';
import { adze, createShed, removeShed } from '../../../src';

global.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createShed();
});

test.afterEach(() => {
  removeShed();
});

test('timer starts and ends and prints correctly', (t) => {
  adze().label('test').time.log('Starting the timer.');
  const { render } = adze().label('test').timeEnd.log('Stopping the timer.');
  if (render) {
    const [_, args] = render;
    if (typeof args[1] === 'string') {
      t.regex(args[1], /\[test\]\s\(\d+s\s\d+\.\d+ms\)\s/g);
    }
  } else {
    t.fail();
  }
});

test('timer starts and ends and prints correctly with emoji', (t) => {
  const log = adze({ use_emoji: true }).seal();
  log().label('test').time.log('Starting the timer.');
  const { render } = log().label('test').timeEnd.log('Stopping the timer.');
  if (render) {
    const [_, args] = render;
    if (typeof args[1] === 'string') {
      t.regex(args[1], /\[test\]\s\(⏱\d+s\s\d+\.\d+ms\)\s/g);
    }
  } else {
    t.fail();
  }
});

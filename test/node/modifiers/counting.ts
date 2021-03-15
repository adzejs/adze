import test from 'ava';
import { adze, createShed, removeShed } from '../../../src';

global.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createShed();
});

test.afterEach(() => {
  removeShed();
});

test('counts 10 logs', (t) => {
  let terminated;
  for (let i = 0; i < 10; i += 1) {
    terminated = adze().label('test').count.log('Counting...');
  }
  if (terminated) {
    const { render } = terminated;
    if (render) {
      const [_, args] = render;
      if (typeof args[1] === 'string') {
        t.is(args[1], '[test] (Count: 10)');
      }
    } else {
      t.fail();
    }
  }
});

test('counts 10 logs then resets to 0', (t) => {
  for (let i = 0; i < 10; i += 1) {
    adze().label('test').count.log('Counting...');
  }

  const terminated = adze().label('test').countReset.log('Reset to 0.');

  if (terminated) {
    const { render } = terminated;
    if (render) {
      const [_, args] = render;
      if (typeof args[1] === 'string') {
        t.is(args[1], '[test] (Count: 0)');
      }
    } else {
      t.fail();
    }
  }
});

test('counts 10 logs then resets to 0 and counts 5 logs', (t) => {
  let terminated;

  for (let i = 0; i < 10; i += 1) {
    adze().label('test').count.log('Counting...');
  }

  adze().label('test').countReset.log('Resetting the count.');

  for (let i = 0; i < 5; i += 1) {
    terminated = adze().label('test').count.log('Counting...');
  }

  if (terminated) {
    const { render } = terminated;
    if (render) {
      const [_, args] = render;
      if (typeof args[1] === 'string') {
        t.is(args[1], '[test] (Count: 5)');
      }
    } else {
      t.fail();
    }
  }
});

test('counts 10 logs then clears the log count for the "test" label', (t) => {
  for (let i = 0; i < 10; i += 1) {
    adze().label('test').count.log('Counting...');
  }

  const terminated = adze().label('test').countClear.log('Clearing the count.');

  if (terminated) {
    const { log, render } = terminated;
    if (render) {
      const [_, args] = render;

      // Validate the output string
      if (typeof args[1] === 'string') {
        t.is(args[1], '[test] ');
      }

      t.is(log.data.label.count, null);
    } else {
      t.fail();
    }
  }
});

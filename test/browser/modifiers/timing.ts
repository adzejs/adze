// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import { format } from 'date-fns';
import adze, { createGlobalStore, removeGlobalStore } from '../../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createGlobalStore();
});

test.afterEach(() => {
  removeGlobalStore();
});

test('timer starts and ends and prints correctly', (t) => {
  adze().label('test').time.log('Starting the timer.');
  const { render } = adze().label('test').timeEnd.log('Stopping the timer.');
  if (render) {
    const [_, args] = render;
    if (typeof args[2] === 'string') {
      t.regex(args[2], /\[test\]\s\s\(\d+s\s\d+\.\d+ms\)/g);
    }
  } else {
    t.fail();
  }
});

test('timer starts and ends and prints correctly with emoji', (t) => {
  const log = adze({ useEmoji: true }).seal();
  log().label('test').time.log('Starting the timer.');
  const { render } = log().label('test').timeEnd.log('Stopping the timer.');
  if (render) {
    const [_, args] = render;
    if (typeof args[2] === 'string') {
      t.regex(args[2], /\[test\]\s\s\(⏱\d+s\s\d+\.\d+ms\)/g);
    }
  } else {
    t.fail();
  }
});

test('captures time since app load', (t) => {
  const { render } = adze().timeNow.log('Time since app load.');
  if (render) {
    const [_, args] = render;
    if (typeof args[2] === 'string') {
      t.regex(args[2], /\(\d+s\s\d+\.\d+ms\)\s/g);
    }
  } else {
    t.fail();
  }
});

test('captures time since app load with emoji', (t) => {
  const { render } = adze({ useEmoji: true }).timeNow.log('Time since app load.');
  if (render) {
    const [_, args] = render;
    if (typeof args[2] === 'string') {
      t.regex(args[2], /\(⏱\d+s\s\d+\.\d+ms\)\s/g);
    }
  } else {
    t.fail();
  }
});

test('renders iso8601 timestamp properly', (t) => {
  const { log, render } = adze().timestamp.log('Timestamp test.');
  const [_, args] = render ?? [];
  const milli = log.data.timestamp?.unixMilli;

  if (args && milli && typeof args[2] === 'string') {
    // Get a date object to generate a timestamp with date-fns to check for accuracy
    const compareDate = new Date(milli);
    const ymd = format(compareDate, 'yyyy-MM-dd');
    const hmsSx = format(compareDate, 'HH:mm:ss.SSSXXX');
    const compareDateStr = `${ymd}T${hmsSx}  `;

    t.regex(
      args[2],
      /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]).[0-9]{3}([+-][0-9]{2}:[0-9]+)?(Z)?\s+$/g
    );
    t.is(args[2], compareDateStr);
  } else {
    t.fail();
  }
});

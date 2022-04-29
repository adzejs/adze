// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import { format } from 'date-fns';
import adze, { createShed, removeShed } from '../../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createShed();
});

test.afterEach(() => {
  removeShed();
});

test('timer starts and ends and prints correctly', (t) => {
  adze().label('test').time.log('Starting the timer.');
  const { log, render } = adze().label('test').timeEnd.log('Stopping the timer.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.is(parsed.label, 'test');
    t.regex(`${parsed.timeEllapsed}`, /\d+s\s\d+\.\d/g);
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Stopping the timer.');
  } else {
    t.fail();
  }
});

test('renders iso8601 timestamp properly', (t) => {
  const { log, render } = adze().timestamp.log('Timestamp test.');
  t.truthy(log);

  const [_, args] = render ?? [];
  const milli = log.data.timestamp?.unixMilli;

  if (render && args && milli) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    // Get a date object to generate a timestamp with date-fns to check for accuracy
    const compareDate = new Date(milli);
    const ymd = format(compareDate, 'yyyy-MM-dd');
    const hmsSx = format(compareDate, 'HH:mm:ss.SSSXXX');
    const compareDateStr = `${ymd}T${hmsSx}  `;

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.regex(
      parsed.timestamp,
      /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]).[0-9]{3}([+-][0-9]{2}:[0-9]+)?(Z)?\s+$/g
    );
    t.is(parsed.timestamp, compareDateStr);
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Timestamp test.');
  } else {
    t.fail();
  }
});

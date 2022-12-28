import test from 'ava';
import adze, { createGlobalStore, JsonOutput, removeGlobalStore } from '../../../src';

global.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createGlobalStore();
});

test.afterEach(() => {
  removeGlobalStore();
});

test('timer starts and ends and prints correctly', (t) => {
  adze().label('test').time.log('Starting the timer.');
  const { log, render } = adze({ machineReadable: true })
    .label('test')
    .timeEnd.log('Stopping the timer.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed: JsonOutput = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.is(parsed.label, 'test');
    t.regex(`${parsed.timeElapsed}`, /\d+s\s\d+\.\d/g);
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Stopping the timer.');
  } else {
    t.fail();
  }
});

test('capture time elapsed since application load', (t) => {
  const { log, render } = adze({ machineReadable: true })
    .label('test')
    .timeNow.log('Time elapsed from load.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed: JsonOutput = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.is(parsed.label, 'test');
    t.truthy(parsed.timeNow);
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Time elapsed from load.');
  } else {
    t.fail();
  }
});

test('renders iso8601 timestamp properly', (t) => {
  const { log, render } = adze({ machineReadable: true }).timestamp.log('Timestamp test.');
  t.truthy(log);

  const [_, args] = render ?? [];
  const milli = log.data.timestamp?.unixMilli;

  if (render && args && milli) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed: JsonOutput = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    if (parsed.timestamp) {
      t.truthy(parsed.timestamp.unixMilli);
      t.truthy(parsed.timestamp.iso8601);
      t.truthy(parsed.timestamp.utc);
      t.false(isNaN(parsed.timestamp.utcTimezoneOffset));
    }
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Timestamp test.');
  } else {
    t.fail();
  }
});

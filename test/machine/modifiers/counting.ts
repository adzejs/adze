import test from 'ava';
import adze, { createShed, removeShed, JsonOutput } from '../../../src';

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
    terminated = adze({ machineReadable: true }).label('test').count.log('Counting...');
  }
  if (terminated) {
    const { log, render } = terminated;

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
      t.is(parsed.count, 10);
      t.is(parsed.args.length, 1);
      t.is(parsed.args[0], 'Counting...');
    } else {
      t.fail();
    }
  }
});

test('counts 10 logs then resets to 0', (t) => {
  for (let i = 0; i < 10; i += 1) {
    adze({ machineReadable: true }).label('test').count.log('Counting...');
  }

  const terminated = adze({ machineReadable: true }).label('test').countReset.log('Reset to 0.');

  if (terminated) {
    const { log, render } = terminated;

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
      t.is(parsed.count, 0);
      t.is(parsed.args.length, 1);
      t.is(parsed.args[0], 'Reset to 0.');
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
    terminated = adze({ machineReadable: true }).label('test').count.log('Counting...');
  }

  if (terminated) {
    const { log, render } = terminated;

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
      t.is(parsed.count, 5);
      t.is(parsed.args.length, 1);
      t.is(parsed.args[0], 'Counting...');
    } else {
      t.fail();
    }
  }
});

test('counts 10 logs then clears the log count for the "test" label', (t) => {
  for (let i = 0; i < 10; i += 1) {
    adze().label('test').count.log('Counting...');
  }

  const terminated = adze({ machineReadable: true })
    .label('test')
    .countClear.log('Clearing the count.');

  if (terminated) {
    const { log, render } = terminated;

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
      t.is(parsed.count, undefined);
      t.is(parsed.args.length, 1);
      t.is(parsed.args[0], 'Clearing the count.');
    } else {
      t.fail();
    }
  }
});

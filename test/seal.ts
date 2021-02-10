// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import { adze, createShed, removeShed } from '../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test('sealing a log preserves configuration but creates new log instances', (t) => {
  const sealed = adze().label('test').ns(['test1', 'test2']).seal();
  const { log: log1, render: render1 } = sealed().log('Log #1');
  const { log: log2, render: render2 } = sealed().info('Log #2');

  if (render1 && render2) {
    const data1 = log1.data;
    const data2 = log2.data;

    const [method1, args1] = render1;
    const [method2, args2] = render2;

    // Check Log #1
    t.is(data1.label.name, 'test');
    t.is(data1.namespace?.[0], 'test1');
    t.is(data1.namespace?.[1], 'test2');
    t.is(method1, 'log');
    t.is(args1[2], '#test1 #test2 [test] ');
    t.is(args1[3], 'Log #1');

    // Check Log #1
    t.is(data2.label.name, 'test');
    t.is(data2.namespace?.[0], 'test1');
    t.is(data2.namespace?.[1], 'test2');
    t.is(method2, 'info');
    t.is(args1[2], '#test1 #test2 [test] ');
    t.is(args2[3], 'Log #2');
  } else {
    t.fail();
  }
});

test('sealed log gets label instance from store', (t) => {
  createShed();
  adze().label('test').count.log('Counting.');
  const sealed = adze().label('test').count.seal();
  const { log, render } = sealed().info('Sealed log.');

  if (render) {
    const data = log.data;
    const [method1, args1] = render;

    // Check Log #1
    t.is(data.label.name, 'test');
    t.is(data.label.count, 2);
    t.is(method1, 'info');
    t.is(args1[2], '[test] (Count: 2)');
    t.is(args1[3], 'Sealed log.');
    removeShed();
  } else {
    removeShed();
    t.fail();
  }
});

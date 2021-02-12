import test from 'ava';
import { adze, createShed, removeShed } from '../src';

global.ADZE_ENV = 'dev';

test('dir log terminates properly', (t) => {
  const { log, render } = adze().dir.info({ a: 1234, b: 5678 });
  if (render) {
    const [method, args] = render;
    t.is(method, 'dir');
    t.deepEqual(args[0], { a: 1234, b: 5678 });
    t.pass();
  } else {
    t.fail();
  }
});

test.todo('dirxml log terminates properly');

test.todo('table log terminates properly.');

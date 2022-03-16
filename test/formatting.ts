import test from 'ava';
import adze from '../src';

global.ADZE_ENV = 'dev';

test('dir log terminates properly', (t) => {
  const { render } = adze().dir.info({ a: 1234, b: 5678 });
  if (render) {
    const [method, args] = render;
    t.is(method, 'dir');
    t.deepEqual(args[0], { a: 1234, b: 5678 });
  } else {
    t.fail();
  }
});

test('dirxml log terminates properly', (t) => {
  const { render } = adze().dirxml.info('<a href="http://www.andrewstacy.com/></a>');
  if (render) {
    const [method, args] = render;
    t.is(method, 'dirxml');
    t.is(args[0], '<a href="http://www.andrewstacy.com/></a>');
  } else {
    t.fail();
  }
});

test('table log terminates properly.', (t) => {
  const { render } = adze().table.info([
    { firstName: 'Andrew', lastName: 'Stacy' },
    { firstName: 'Jim', lastName: 'Bob' },
  ]);
  if (render) {
    const [method, args] = render;
    t.is(method, 'table');
    t.deepEqual(args[0], [
      { firstName: 'Andrew', lastName: 'Stacy' },
      { firstName: 'Jim', lastName: 'Bob' },
    ]);
  } else {
    t.fail();
  }
});

test('silent modifier prevents log rendering', (t) => {
  const { render } = adze().silent.alert('This log should not render.');
  if (render) {
    t.fail();
  } else {
    t.pass();
  }
});

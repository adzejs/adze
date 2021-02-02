import test from 'ava';

test.before((t) => {
  global.window = window;
  global.ADZE_ENV = 'dev';
});

test.skip('testing bundle', (t) => {
  t.pass();
});

import test from 'ava';
import '../src';

test.before((t) => {
  global.ADZE_ENV = 'dev';
});

test.skip('testing shed', (t) => {
  t.pass();
});

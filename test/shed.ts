import test from 'ava';

test.before((t) => {
  global.ADZE_ENV = 'dev';
});

test.skip('testing shed', (t) => {
  t.pass();
});

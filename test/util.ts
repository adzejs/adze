import test from 'ava';
import { leadingZeros } from '../src/util';

global.ADZE_ENV = 'dev';

test('properly pads a number with leading zeros', (t) => {
  const result = leadingZeros(5, 65);
  const lessThan = leadingZeros(1, 65);

  t.is(result, '00065');
  t.is(lessThan, '65');
});

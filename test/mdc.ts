import test from 'ava';
import { adze, createShed, removeShed } from '../src';

test.beforeEach((t) => {
  createShed();
});

test.afterEach((t) => {
  removeShed();
});

test('Maps context across multiple calls', (t) => {
  adze().label('thread').thread('key1', 'value1');
  adze().label('thread').thread('key2', 'value2');
  const { log } = adze().label('thread').log('Threaded log.');

  t.is(log.data.context.key1, 'value1');
  t.is(log.data.context.key2, 'value2');
});

test('Closes a context thread', (t) => {
  adze().label('thread').thread('key1', 'value1');
  adze().label('thread').thread('key2', 'value2');
  const { log } = adze().label('thread').log('Threaded log.');

  t.is(log.data.context.key1, 'value1');
  t.is(log.data.context.key2, 'value2');

  adze().label('thread').close();

  t.deepEqual(log.data.context, {});
});

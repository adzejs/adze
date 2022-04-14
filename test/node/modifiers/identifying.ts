import test from 'ava';
import adze from '../../../src';

global.ADZE_ENV = 'dev';

test('label prints correctly', (t) => {
  const { render } = adze().label('test').log('This log has a label.');
  if (render) {
    const [_, args] = render;
    t.is(args[1], '[test] ');
  } else {
    t.fail();
  }
});

test('log with single namespace prints correctly', (t) => {
  const { render } = adze().ns('test').log('This log has a namespace.');
  if (render) {
    const [_, args] = render;
    t.is(args[1], '#test ');
  } else {
    t.fail();
  }
});

test('log with multiple namespaces prints correctly', (t) => {
  const { render } = adze().ns(['test', 'test2']).log('This log has two namespaces.');
  if (render) {
    const [_, args] = render;
    t.is(args[1], '#test #test2 ');
  } else {
    t.fail();
  }
});

test('log with multiple namespaces using rest parameters prints correctly', (t) => {
  const { render } = adze()
    .ns('test', 'test2')
    .log('This log has multiple namespaces using restof operator.');
  if (render) {
    const [_, args] = render;
    t.is(args[1], '#test #test2 ');
  } else {
    t.fail();
  }
});

test('multiple calls to namespace are additive', (t) => {
  const { render } = adze()
    .ns('foo', 'bar')
    .ns('baz')
    .log('This log has multiple namespaces that are added together.');
  if (render) {
    const [_, args] = render;
    t.is(args[1], '#foo #bar #baz ');
  } else {
    t.fail();
  }
});

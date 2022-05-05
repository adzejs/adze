import test from 'ava';
import adze from '../../src';

global.ADZE_ENV = 'dev';

test('dir log terminates properly', (t) => {
  const { log, render } = adze({ machineReadable: true }).dir.info({ a: 1234, b: 5678 });

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 3);
    t.is(parsed.levelName, 'info');
    t.is(parsed.args.length, 1);
    t.deepEqual(parsed.args[0], { a: 1234, b: 5678 });
  } else {
    t.fail();
  }
});

test('dirxml log terminates properly', (t) => {
  const { log, render } = adze({ machineReadable: true }).dirxml.info(
    '<a href="http://www.andrewstacy.com/></a>'
  );

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 3);
    t.is(parsed.levelName, 'info');
    t.is(parsed.args.length, 1);
    t.deepEqual(parsed.args[0], '<a href="http://www.andrewstacy.com/></a>');
  } else {
    t.fail();
  }
});

test('table log terminates properly.', (t) => {
  const { log, render } = adze({ machineReadable: true }).table.info([
    { firstName: 'Andrew', lastName: 'Stacy' },
    { firstName: 'Jim', lastName: 'Bob' },
  ]);

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 3);
    t.is(parsed.levelName, 'info');
    t.is(parsed.args.length, 1);
    t.deepEqual(parsed.args[0], [
      { firstName: 'Andrew', lastName: 'Stacy' },
      { firstName: 'Jim', lastName: 'Bob' },
    ]);
  } else {
    t.fail();
  }
});

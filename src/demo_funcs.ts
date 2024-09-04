import adze, {
  setup,
  teardown,
  CommonLogFormatMeta,
  CommonLogFormatMessage,
  JsonLogFormatMeta,
  JsonLogOptionalFields,
  serializeRequest,
  serializeResponse,
  LevelConfiguration,
  isBrowser,
  serializeError,
  getAlertConfig,
} from '.';
import { StandardLogFormatMeta } from './formatters/standard/types';

if (isBrowser()) {
  // @ts-ignore
  window.adze = adze;
}

const leetLevel: LevelConfiguration = {
  levelName: 'leetLevel',
  level: 1337,
  method: 'log',
  style:
    'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
  terminalStyle: ['white', 'bgMagenta'],
  emoji: '👾',
};

// Run our demo modules
async function runDemo() {
  defaultLevels();
  // configuration();
  // custom();
  // namespace();
  // label();
  // filterLevelRange();
  // filterLevels();
  // filterNamespaces();
  // filterLabels();
  // filterBoth();
  // counting();
  // tests();
  // dir();
  // table();
  // group();
  // groupCollapsed();
  // seal();
  // trace();
  // timestamp();
  // sealTag();
  // silent();
  // tools();
  // common();
  // standard();
  // await json();
  // time();
  // thread();
  // listener();
}

async function defaultLevels() {
  setup<JsonLogFormatMeta>({
    format: 'json',
    meta: {
      name: 'myApp',
      hostname: 'localhost',
    },
  });

  const response = new Response('hello world!', {
    status: 200,
    statusText: 'OK',
    headers: { boop: 'beep' },
  });
  Object.defineProperty(response, 'url', { value: 'https://example.com/login' });

  // The Request serializer returns a promise so it must be awaited.
  adze
    .meta<JsonLogOptionalFields>({
      res: await serializeResponse(response),
    })
    .log('Received a response!');
  // setup({
  //   withEmoji: true,
  //   activeLevel: 1337,
  //   levels: {
  //     leetLevel,
  //   },
  // });
  // adze.alert('This is an alert log');
  // adze.error('This is an error log');
  // adze.warn('This is a warning log');
  // adze.info('This is an info log');
  // adze.fail('This is a fail log');
  // adze.success('This is a success log');
  // adze.log('This is a log');
  // adze.debug('This is a debug log');
  // adze.verbose('This is a verbose log');
  // adze.count.custom('leetLevel', 'This is a custom log!');
  // teardown();
}

function configuration() {
  setup({ withEmoji: true });
  adze.alert('Example alert log with emoji from configuration!');
  teardown();
}

function custom() {
  setup({
    withEmoji: true,
    activeLevel: 1337,
    levels: {
      leetLevel,
    },
  });
  adze.count.custom('leetLevel', 'This is a custom log!');
  teardown();
}

function namespace() {
  const logger = adze.ns('foo', 'bar').seal();
  logger.ns('baz').log('This is a namespaced log');
}

function label() {
  setup();
  adze.label('foo').log('This is a labeled log');
  teardown();
}

function filterLevelRange() {
  setup({
    activeLevel: 'verbose',
    filters: {
      levels: {
        type: 'include',
        values: [4, '-', 8],
      },
    },
  });
  adze.alert('This should show.');
  adze.error('This should show.');
  adze.warn('This should show.');
  adze.info('This should show.');
  adze.fail('This should not show.');
  adze.success('This should not show.');
  adze.log('This should not show.');
  adze.debug('This should not show.');
  adze.verbose('This should not show.');
  teardown();
  setup({
    activeLevel: 'verbose',
    filters: {
      levels: {
        type: 'include',
        values: ['fail', '-', 'verbose'],
      },
    },
  });
  adze.alert('This should show.');
  adze.error('This should show.');
  adze.warn('This should show.');
  adze.info('This should show.');
  adze.fail('This should not show.');
  adze.success('This should not show.');
  adze.log('This should not show.');
  adze.debug('This should not show.');
  adze.verbose('This should not show.');
  teardown();
}

function filterLevels() {
  setup({
    activeLevel: 'verbose',
    filters: {
      levels: {
        type: 'include',
        values: [0, 2, 4, 6, 8],
      },
    },
  });
  adze.alert('This should not show.');
  adze.error('This should show.');
  adze.warn('This should not show.');
  adze.info('This should show.');
  adze.fail('This should not show.');
  adze.success('This should show.');
  adze.log('This should not show.');
  adze.debug('This should show.');
  adze.verbose('This should not show.');
  teardown();
}

function filterNamespaces() {
  setup({
    activeLevel: 'verbose',
    filters: {
      namespaces: {
        type: 'include',
        values: ['foo', 'bar'],
      },
    },
  });
  adze.ns('hello').alert('This should not show.');
  adze.ns('world').error('This should not show.');
  adze.ns('foo', 'bar').warn('This should show.');
  adze.ns('baz', 'bar').info('This should show.');
  adze.ns('baz', 'foo').fail('This should show.');
  adze.success('This should not show.');
  adze.log('This should not show.');
  adze.debug('This should not show.');
  adze.verbose('This should not show.');
  teardown();
  setup({
    activeLevel: 'verbose',
    filters: {
      namespaces: {
        type: 'exclude',
        values: ['foo', 'bar'],
      },
    },
  });
  adze.ns('hello').alert('This should show.');
  adze.ns('world').error('This should show.');
  adze.ns('foo', 'bar').warn('This should not show.');
  adze.ns('baz', 'bar').info('This should not show.');
  adze.ns('baz', 'foo').fail('This should not show.');
  adze.success('This should not show.');
  adze.log('This should not show.');
  adze.debug('This should not show.');
  adze.verbose('This should not show.');
  teardown();
}

function filterLabels() {
  setup({
    activeLevel: 'verbose',
    filters: {
      labels: {
        type: 'include',
        values: ['foo', 'bar'],
      },
    },
  });
  adze.label('hello').alert('This should not show.');
  adze.label('world').error('This should not show.');
  adze.label('foo').warn('This should show.');
  adze.label('bar').info('This should show.');
  adze.label('baz').fail('This should not show.');
  adze.success('This should not show.');
  adze.log('This should not show.');
  adze.debug('This should not show.');
  adze.verbose('This should not show.');
  teardown();
  setup({
    activeLevel: 'verbose',
    filters: {
      labels: {
        type: 'exclude',
        values: ['foo', 'bar'],
      },
    },
  });
  adze.label('hello').alert('This should show.');
  adze.label('world').error('This should show.');
  adze.label('foo').warn('This should not show.');
  adze.label('bar').info('This should not show.');
  adze.label('baz').fail('This should show.');
  adze.success('This should not show.');
  adze.log('This should not show.');
  adze.debug('This should not show.');
  adze.verbose('This should not show.');
  teardown();
}

function filterBoth() {
  setup({
    activeLevel: 'verbose',
    filters: {
      labels: {
        type: 'include',
        values: ['foo', 'bar'],
      },
      namespaces: {
        type: 'include',
        values: ['hello'],
      },
    },
  });
  adze.label('hello').alert('This should not show.');
  adze.label('world').error('This should not show.');
  adze.label('foo').warn('This should show.');
  adze.label('bar').ns('hello').info('This should show.');
  adze.ns('hello').label('foo').fail('This should show.');
  adze.ns('hello').success('This should not show.');
  adze.log('This should not show.');
  adze.debug('This should not show.');
  adze.verbose('This should not show.');
  teardown();
  setup({
    activeLevel: 'verbose',
    filters: {
      labels: {
        type: 'exclude',
        values: ['foo', 'bar'],
      },
      namespaces: {
        type: 'exclude',
        values: ['hello'],
      },
    },
  });
  adze.ns('hello').label('foo').alert('This should not show.');
  adze.ns('world').label('foo').error('This should not show.');
  adze.label('baz').ns('derp').warn('This should show.');
  adze.label('bar').info('This should not show.');
  adze.label('baz').fail('This should show.');
  adze.success('This should not show.');
  adze.log('This should not show.');
  adze.debug('This should not show.');
  adze.verbose('This should not show.');
  teardown();
}

function counting() {
  setup();
  for (let i = 0; i < 10; i++) {
    adze.label('foo').count.log('This is a labeled log');
  }
  teardown();
}

function tests() {
  // @ts-expect-error Intentional error to test the assertion
  adze.assert(2 === 4).log('This is a failed assertion!');
  // @ts-expect-error Intentional error to test the assertion
  adze.withEmoji.assert(2 === 4).log('This is a failed assertion with emoji!');
  adze.assert(4 === 4).log('This passed so it should not show!');
  adze.if(2 === 2).log('This condition passed!');
  adze.withEmoji.if(2 === 2).log('This condition passed with emoji!');
  // @ts-expect-error Intentional error to test the assertion
  adze.if(2 === 4).log('This condition failed so it should not show!');
}

function dir() {
  adze.log({ foo: 'bar' });
  adze.dir.log({ foo: 'bar' });
}

function table() {
  const tabular_data = [
    { firstName: 'Andrew', lastName: 'Stacy' },
    { firstName: 'Jim', lastName: 'Bob' },
  ];
  adze.table.log(tabular_data);
}

function group() {
  adze.group.log('This is a group.');
  adze.log('This is a child of a group log.');
  adze.groupEnd.log();
}

function groupCollapsed() {
  adze.groupCollapsed.log('This is a collapsed group.');
  adze.log('This is a child of a collapsed group.');
  adze.groupEnd.log();
}

function sealTag() {
  const ERR = adze.ns('doobadoo').withEmoji.sealTag('error');
  const INFO = adze.ns('doobadoo').withEmoji.sealTag('info');
  const SUCCESS = adze.ns('doobadoo').withEmoji.sealTag('success');
  ERR`This is an error log`;
  INFO`This is an info log`;
  SUCCESS`This is a success log`;
}

function trace() {
  adze.trace.log('Tracing...');
}

function timestamp() {
  adze.timestamp.log('This is a log with the timestamp printed.');
  setup({
    activeLevel: 'verbose',
    timestampFormatter: () => {
      return 'doobadoo';
    },
  });
  adze.timestamp.log('This is a log with a custom timestamp.');
  teardown();
}

function silent() {
  adze.silent.log('You should not see me.');
}

function thread() {
  function add(a: number, b: number) {
    const answer = a + b;
    adze.label('foo').thread('added', { a, b, answer });
    return answer;
  }

  function subtract(x: number, y: number) {
    const answer = x - y;
    adze.label('foo').thread('subtracted', { x, y, answer });
    return answer;
  }

  add(1, 2);
  subtract(4, 3);

  adze.label('foo').dump.info('Results from our thread');
}

function common() {
  setup({ activeLevel: 'verbose', format: 'common' });
  const logger = adze
    .meta<CommonLogFormatMeta>({
      hostname: '192.168.1.5',
      ident: 'user-identifier',
      user: 'astacy',
    })
    .seal<string, CommonLogFormatMessage>();
  logger.alert('"GET /index.html HTTP/1.0" 200 2326', {}, 1, '');
  logger.error('"GET /index.html HTTP/1.0" 200 2326');
  logger.warn('"GET /index.html HTTP/1.0" 200 2326');
  logger.info('"GET /index.html HTTP/1.0" 200 2326');
  logger.fail('"GET /index.html HTTP/1.0" 200 2326');
  logger.success('"GET /index.html HTTP/1.0" 200 2326');
  logger.log('"GET /index.html HTTP/1.0" 200 2326');
  logger.debug('"GET /index.html HTTP/1.0" 200 2326');
  logger.verbose('"GET /index.html HTTP/1.0" 200 2326');
  teardown();
}

function standard() {
  setup({ activeLevel: 'verbose', format: 'standard' });
  const logger = adze
    .meta<StandardLogFormatMeta>({
      hostname: '192.168.1.5',
      appname: 'myapp',
      port: 80,
    })
    .seal();
  logger.alert('This is an alert log');
  logger.error('This is an error log');
  logger.warn('This is a warning log');
  logger.info('This is an info log');
  logger.fail('This is a fail log');
  logger.success('This is a success log');
  logger.log('This is a log');
  logger.debug('This is a debug log');
  logger.verbose('This is a verbose log');
  teardown();
}

function seal() {
  const x = adze.ns('doobadoo').withEmoji.seal();

  x.ns('zibeedee').count.label('derp').success('Hello');
  x.ns('zibeedee').count.label('derp').success('Hello');
  x.ns('zibeedee').count.label('derp').success('Hello');
  x.ns('zibeedee').count.label('flerp').log('World');
  x.ns('zibeedee').count.label('flerp').log('World');
  x.ns('zibeedee').count.label('flerp').log('World');
}

function tools() {
  setup({ cache: true });
  const logger = adze.seal();
  logger.label('meow').log('purrrr');
  logger.label('meow').log('purrrrfect');
  logger.label('meowzer').log('purrrrfectly');
  logger.ns('foo').info('doobadoo');
  logger.ns('foo', 'bar').info('doobadoo');
  logger.ns('baz').info('doobadoo');
  logger.log('nothing modified');
  teardown();
}

async function json() {
  setup({ activeLevel: 'verbose', format: 'json' });
  const logger = adze
    .meta<JsonLogFormatMeta>({
      hostname: '192.168.1.5',
      name: 'myapp',
    })
    .seal();

  const request = new Request('https://120.0.0.1:51244/path?q=1#anchor', {
    method: 'POST',
    headers: {
      'x-hi': 'Mom',
      connection: 'close',
      Authorization: 'Basic ' + btoa('astacy:password'),
    },
    body: JSON.stringify({ foo: 'bar' }),
  });
  const response = new Response('hello world!', {
    status: 200,
    statusText: 'OK',
    headers: { boop: 'beep' },
  });
  Object.defineProperty(response, 'url', { value: 'https://120.0.0.1:51244/path?q=1#anchor' });
  const err = new Error('This is an error.');
  logger
    .meta<JsonLogOptionalFields>({
      src: 'src/demo_funcs.ts',
      err: {
        message: err.message,
        name: err.name,
        stack: err.stack,
      },
      req_id: '12345',
      req: await serializeRequest(request, true),
      res: await serializeResponse(response),
      latency: 4444444,
    })
    .ns('foobar', 'baz')
    .label('derp')
    .alert('This is an alert log');
  logger.ns('foobar').error('This is an error log');
  logger.warn('This is a warning log');
  logger.ns('hello world').info('This is an info log');
  logger.fail('This is a fail log');
  logger.success('This is a success log');
  logger.log('This is a log');
  logger.debug('This is a debug log');
  logger.verbose('This is a verbose log');
  teardown();
}

function listener() {
  const store = setup();
  const id = store.addListener('*', (log) => {
    console.log(log.data);
  });
  adze.withEmoji.log('This is a log');
  adze.ns('derp').log('This is a namespaced log');
  adze.silent.log('This is a silent log');
  store.removeListener(id);
  teardown();
}

function time() {
  setup();
  adze.timeNow.log('This is a time log');
  adze.withEmoji.timeNow.log('This is a time log with emoji');
  adze.label('timer').time.log('Starting a timer');
  setTimeout(() => {
    adze.label('timer').timeEnd.log('Ending a timer');
  }, 1000);
  adze.withEmoji.label('timer2').time.log('Starting a timer');
  setTimeout(() => {
    adze.withEmoji.label('timer2').timeEnd.log('Ending a timer with emoji');
    teardown();
  }, 1000);
}

await runDemo();

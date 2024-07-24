import adze, {
  setup,
  teardown,
  ModifierData,
  UserConfiguration,
  CommonLogFormatMeta,
  CommonLogFormatMessage,
  JsonLogMeta,
  JsonLogOptionalFields,
  serializeRequest,
  serializeResponse,
} from '.';
import { StandardLogFormatMeta } from './formatters/standard/types';

class logger extends adze {
  constructor(cfg: UserConfiguration = {}, modifierData?: ModifierData) {
    super(cfg, modifierData);
    this.customLevel('leetLevel', {
      levelName: 'leetLevel',
      level: 1337,
      method: 'log',
      style:
        'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
      terminalStyle: ['white', 'bgBlue'],
      emoji: '👾',
    });
  }

  public leetLevel(...args: unknown[]): void {
    this.terminate('leetLevel', args);
  }

  public static leetLevel(...args: unknown[]): void {
    new logger().leetLevel(...args);
  }
}

// Run our demo modules
async function runDemo() {
  defaultLevels();
  configuration();
  custom();
  namespace();
  label();
  filterLevelRange();
  filterLevels();
  filterNamespaces();
  filterLabels();
  filterBoth();
  counting();
  tests();
  dir();
  table();
  group();
  groupCollapsed();
  seal();
  trace();
  timestamp();
  sealTag();
  silent();
  common();
  standard();
  json();
  time();
  listener();
}

function defaultLevels() {
  setup({
    activeLevel: 'verbose',
  });
  adze.alert('Example alert log');
  adze.error('Example error log');
  adze.warn('Example warning log');
  adze.info('Example info log');
  adze.fail('Example fail log');
  adze.success('Example success log');
  adze.log('Example log');
  adze.debug('Example debug log');
  adze.verbose('Example verbose log');
  const log2 = adze.withEmoji.seal();
  log2.alert('Example alert log');
  log2.error('Example error log');
  log2.warn('Example warning log');
  log2.info('Example info log');
  log2.fail('Example fail log');
  log2.success('Example success log');
  log2.log('Example log');
  log2.debug('Example debug log');
  log2.verbose('Example verbose log');
  teardown();
}

function configuration() {
  const logger = adze.cfg({ withEmoji: true }).seal();
  logger.alert('Example alert log with emoji from configuration!');
}

function custom() {
  logger.cfg({ withEmoji: true, activeLevel: 1338 }).leetLevel('This is a custom log!');
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
      levels: [4, '-', 8],
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
      levels: ['fail', '-', 'verbose'],
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
      levels: [0, 2, 4, 6, 8],
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

function common() {
  const logger = adze
    .cfg({ activeLevel: 'verbose', format: 'common' })
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
}

function standard() {
  const logger = adze
    .cfg({ activeLevel: 'verbose', format: 'standard' })
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

async function json() {
  const logger = adze
    .cfg({ activeLevel: 'verbose', format: 'json' })
    .meta<JsonLogMeta>({
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
}

function listener() {
  const store = setup();
  const id = store.addListener((data) => {
    console.log(data);
  });
  adze.withEmoji.log('This is a log');
  adze.ns('derp').log('This is a namespaced log');
  adze.silent.log('This is a silent log');
  store.removeListener(id);
}

await runDemo();

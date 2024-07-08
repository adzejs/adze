import adze from './dist/index.js';

class logger extends adze {
  constructor(cfg = {}, modifierData) {
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

  leetLevel(...args) {
    this.terminate('leetLevel', args);
  }

  static leetLevel(...args) {
    return new this().leetLevel(...args);
  }
}

// Run our demo modules
export default function runDemo(adzelib) {
  const adze = adzelib.default;
  defaultLevels(adze, adzelib);
  configuration(adze);
  custom(adze);
  namespace(adze);
  label(adze, adzelib);
  filterLevelRange(adze, adzelib);
  filterLevels(adze, adzelib);
  filterNamespaces(adze, adzelib);
  filterLabels(adze, adzelib);
  filterBoth(adze, adzelib);
  counting(adze, adzelib);
  tests(adze, adzelib);
  dir(adze);
  table(adze);
  group(adze);
  groupCollapsed(adze);
  trace(adze);
  timestamp(adze, adzelib);
  silent(adze);
  time(adze, adzelib);
}

function defaultLevels(adze, { setup, teardown }) {
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

function configuration(adze) {
  const logger = adze.cfg({ withEmoji: true }).seal();
  logger.alert('Example alert log with emoji from configuration!');
}

function custom() {
  logger.cfg({ withEmoji: true, activeLevel: 1338 }).leetLevel('This is a custom log!');
}

function namespace(adze) {
  const logger = adze.ns('foo', 'bar').seal();
  logger.ns('baz').log('This is a namespaced log');
}

function label(adze, { setup, teardown }) {
  setup();
  adze.label('foo').log('This is a labeled log');
  teardown();
}

function filterLevelRange(adze, { setup, teardown }) {
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

function filterLevels(adze, { setup, teardown }) {
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

function filterNamespaces(adze, { setup, teardown }) {
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

function filterLabels(adze, { setup, teardown }) {
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

function filterBoth(adze, { setup, teardown }) {
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

function counting(adze, { setup, teardown }) {
  setup();
  for (let i = 0; i < 10; i++) {
    adze.label('foo').count.log('This is a labeled log');
  }
  teardown();
}

function tests(adze) {
  adze.assert(2 === 4).log('This is a failed assertion!');
  adze.withEmoji.assert(2 === 4).log('This is a failed assertion with emoji!');
  adze.assert(4 === 4).log('This passed so it should not show!');
  adze.if(2 === 2).log('This condition passed!');
  adze.withEmoji.if(2 === 2).log('This condition passed with emoji!');
  adze.if(2 === 4).log('This condition failed so it should not show!');
}

function dir(adze) {
  adze.log({ foo: 'bar' });
  adze.dir.log({ foo: 'bar' });
  adze.log(document.body);
  adze.dirxml.log(document.body);
}

function table(adze) {
  const tabular_data = [
    { firstName: 'Andrew', lastName: 'Stacy' },
    { firstName: 'Jim', lastName: 'Bob' },
  ];
  adze.table.log(tabular_data);
}

function group(adze) {
  adze.group.log('This is a group.');
  adze.log('This is a child of a group log.');
  adze.groupEnd.log();
}

function groupCollapsed(adze) {
  adze.groupCollapsed.log('This is a collapsed group.');
  adze.log('This is a child of a collapsed group.');
  adze.groupEnd.log();
}

function trace(adze) {
  adze.trace.log('Tracing...');
}

function timestamp(adze, { setup, teardown }) {
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

function silent(adze) {
  adze.silent.log('You should not see me.');
}

function time(adze, { setup, teardown }) {
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

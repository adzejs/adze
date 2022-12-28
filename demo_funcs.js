// Run our demo modules
export default function runDemo(lib, el) {
  screenshots(lib, el);
  // screenshotDemo(lib);
  defaultLevels(lib);
  defaultLevelsWithEmoji(lib);
  defaultLevelsWithGlobalOverride(lib);
  customLevels(lib);
  customLevelsWithEmoji(lib);
  thread(lib);
  logLevelOf2(lib);
  filterLogs(lib);
  sealLogModifiers(lib);
  withSilent(lib);
  withLabel(lib);
  withNamespace(lib);
  withMultiNamespace(lib);
  withTime(lib);
  asTable(lib);
  asDir(lib);
  asDirxml(lib, el);
  asGroup(lib);
  asGroupCollapsed(lib);
  evaluation(lib);
  withTrace(lib);
  unstyled(lib);
  withTimestamp(lib);
  namespaceIncludeFilter(lib);
  namespaceExcludeFilter(lib);
  labelIncludeFilter(lib);
  labelExcludeFilter(lib);
  machineReadableLogs(lib);
  disableLeader(lib);
  disableArgCount(lib);
}

function screenshots({ adze, createGlobalStore }, el) { }

function screenshotDemo({ adze }) {
  adze().alert('Example alert log');
  adze().error('Example error log');
  adze().warn('Example warning log');
  adze().info('Example info log');
  adze().fail('Example fail log');
  adze().success('Example success log');
  adze().log('Example log');
  adze().debug('Example debug log');
  adze().verbose('Example verbose log');
  const log2 = adze({ useEmoji: true }).seal();
  log2().alert('Example alert log');
  log2().error('Example error log');
  log2().warn('Example warning log');
  log2().info('Example info log');
  log2().fail('Example fail log');
  log2().success('Example success log');
  log2().log('Example log');
  log2().debug('Example debug log');
  log2().verbose('Example verbose log');
  adze({
    useEmoji: true,
    customLevels: {
      customError: {
        level: 1,
        method: 'error',
        style:
          'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
        terminal: ['bgRed', 'white'],
        emoji: '😭',
      },
    },
  }).custom('customError', 'This is a custom error log');
}

function defaultLevels({ adze }) {
  console.log('\n----- Default Levels -----\n');
  adze().alert('This is an alert!');
  adze().error('This is an error!');
  adze().warn('This is a warn!');
  adze().info('This is an info!');
  adze().fail('This is a failure!');
  adze().success('This is a success!');
  adze().log('This is a log!');
  adze().debug('This is a debug!');
  adze().verbose('This is a verbose!');
}

function defaultLevelsWithEmoji({ adze }) {
  console.log('\n----- Default Levels w/ Emoji -----\n');
  const log = adze({ useEmoji: true }).seal();
  log().alert('This is an alert!');
  log().error('This is an error!');
  log().warn('This is a warn!');
  log().info('This is an info!');
  log().fail('This is a failure!');
  log().success('This is a success!');
  log().log('This is a log!');
  log().debug('This is a debug!');
  log().verbose('This is a verbose!');
}

function defaultLevelsWithGlobalOverride({ adze, createGlobalStore, removeGlobalStore }) {
  console.log('\n----- Default Verbose Level w/ Global Overrides -----\n');
  createGlobalStore({
    global_cfg: {
      useEmoji: true,
      logLevels: {
        verbose: {
          style:
            'padding-right: 26px; background-color: CornflowerBlue; border-color: 1px solid black; color: white; border-color: #cbc9c9;',
          terminal: ['bgBlue', 'white'],
        },
      },
    },
  });
  adze().verbose('This is a verbose with styling overrides from the GlobalStore.');
  removeGlobalStore();
}

function customLevels({ adze }) {
  console.log('\n----- Custom Levels -----\n');
  const log = adze({
    customLevels: {
      special: {
        level: 4,
        method: 'info',
        terminal: ['bgBlue', 'yellow'],
        style:
          'background: linear-gradient(to right, #fff, #0000FF); padding-right: 31px;',
        emoji: '🎁',
      },
      important: {
        level: 1,
        method: 'info',
        terminal: ['bgRed', 'white'],
        style:
          'background: linear-gradient(to right, #fff, #FF0000); padding-right: 31px;',
        emoji: '❗',
      },
    },
  });

  log.custom('special', 'This is a special log!');
  log.custom('important', 'This is an important log!');
}

function customLevelsWithEmoji({ adze }) {
  console.log('\n----- Custom Levels w/ Emoji -----\n');
  const log = adze({
    useEmoji: true,
    customLevels: {
      special: {
        level: 4,
        method: 'info',
        terminal: ['bgBlue', 'yellow'],
        style:
          'background: linear-gradient(to right, #fff, #0000FF); padding-right: 31px;',
        emoji: '🎁',
      },
      important: {
        level: 1,
        method: 'info',
        terminal: ['bgRed', 'white'],
        style:
          'background: linear-gradient(to right, #fff, #FF0000); padding-right: 31px;',
        emoji: '❗',
      },
    },
  });

  log.custom('special', 'This is a special log!');
  log.custom('important', 'This is an important log!');
}

function thread({ adze, createGlobalStore, removeGlobalStore, render }) {
  console.log('\n----- Thread (MDC) -----\n');
  const globalStore = createGlobalStore();

  // Creating a GlobalStore listener is a great way to get meta data from your
  // threaded logs to write to disk or pass to another plugin, library,
  // or service.
  globalStore.addListener([1, 2, 3, 4, 5, 6, 7, 8], (data, render_val) => {
    console.log('(MDC) Log Context from Listener', data.context, render_val);
    render(render_val);
  });

  const add = (a, b) => {
    const answer = a + b;
    adze().label('foo').thread('added', { a, b, answer });
    return answer;
  };

  const subtract = (x, y) => {
    const answer = x - y;
    adze().label('foo').thread('subtracted', { x, y, answer });
    return answer;
  };

  add(1, 2);
  subtract(4, 3);

  adze().label('foo').dump.info('Results from our thread');
  adze().label('foo').close();
  removeGlobalStore();
  adze().label('foo').dump.info('(MDC) Context after closing the thread');
}

function logLevelOf2({ adze }) {
  console.log('\n----- Log Level of 2 -----\n');
  const log = adze({
    logLevel: 2,
    useEmoji: true,
    customLevels: {
      special: {
        level: 3,
        method: 'info',
        terminal: ['bgBlue', 'yellow'],
        style:
          'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
        emoji: '🎁',
      },
      important: {
        level: 1,
        method: 'info',
        terminal: ['bgRed', 'white'],
        style:
          'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
        emoji: '❗',
      },
    },
  });

  log.alert('This alert log should render. (level = 0)');
  log.error('This error log should render. (level = 1)');
  log.warn('This warning log should render. (level = 2)');
  log.info('This info log should be hidden.');
  log.fail('This failure log should be hidden.');
  log.success('This success log should be hidden.');
  log.log('This log should be hidden.');
  log.debug('This debug log should be hidden.');
  log.verbose('This verbose log should be hidden.');

  log.custom('special', 'This custom special log should be hidden.');
  log.custom(
    'important',
    'This custom important log should render. (level = 1)'
  );
}

function filterLogs({
  adze,
  rerender,
  filterNamespace,
  filterLabel,
  filterLevel,
  createGlobalStore,
  removeGlobalStore,
}) {
  console.log('\n----- Get Collection of Logs and Filter -----\n\n');
  const globalStore = createGlobalStore();
  const log = adze({ useEmoji: true }).seal();

  log().ns('SPACE').error('This is an error!');
  log().ns(['foo', 'SPACE']).info('A bundled log with multiple namespaces.');
  log().label('i-am-label').success('Successfully bundled this log!');
  log().log('Here is another log in the bundle.');
  log().ns('foo', 'bar').ns('baz').log('Multiple calls to namespace are additive.');

  const collection = globalStore.getCollection('*');

  console.log('---- Next is a recall of all logs in the bundle ----');
  collection.forEach(rerender);

  console.log(
    '---- Next is a recall of all logs with the label of i-am-label ----'
  );
  filterLabel(collection, 'i-am-label').forEach(rerender);

  console.log(
    '---- Next is a recall of all logs with the namespace of SPACE ----'
  );
  filterNamespace(collection, 'SPACE').forEach(rerender);

  console.log(
    '---- Next is a recall of all logs with a level in the range of 4 to 8 ----'
  );
  filterLevel(collection, [4, '-', 8]).forEach(rerender);
  removeGlobalStore();
}

function sealLogModifiers({ adze }) {
  console.log('\n----- Seals Log Modifiers for New Logs -----\n\n');
  const sealed = adze({ useEmoji: true })
    .ns('sealed')
    .label('sealed-label')
    .seal();

  sealed().success('Successfully sealed this log!');
  sealed().log('Here is another sealed log.');
}

function withSilent({ adze, createGlobalStore, removeGlobalStore }) {
  console.log('\n----- Silent Log -----\n\n');
  const globalStore = createGlobalStore();
  globalStore.addListener([6], (data, render, printed) => {
    adze().test(data.isSilent === true).success('The log is silent!', data);
    adze().test(render !== null).success('Render is not null!', render);
    adze().test(printed === false).success('The log did not print!', printed);
  });
  adze().silent.log('Testing a silent log.');
  removeGlobalStore();
}

function withLabel({ adze }) {
  console.log('\n----- Default Log w/ No Store -----\n\n');
  adze().label('test').log('Testing a label with no store.');
}

function withNamespace({ adze }) {
  console.log('\n----- Default Namespace Log w/ No Store -----\n');
  adze().namespace('test').log('Testing a namespace with no store.');
  adze().ns('test').log('Testing a namespace using the ns() alias.');
}

function withMultiNamespace({ adze }) {
  console.log('\n----- Default Multiple Namespace Log w/ No Store -----\n');
  adze().ns(['foo', 'bar']).info('This log has multiple namespaces.');
  adze().namespace('foo', 'bar', 'baz').info('Testing multiple namespaces using rest parameters.');
  adze().ns('foo', 'bar', 'baz').info('Testing multiple namespaces using rest parameters with the ns() alias.');
}

function withTime({ adze }) {
  console.log('\n----- Default Log Timing w/ No Store -----\n');
  adze().time.log('Testing time with no store.');
  adze().timeEnd.log('Testing time with no store.');
  adze().timeNow.log('Testing timeNow with no store.');
  adze({ useEmoji: true }).timeNow.log(
    "Testing timeNow with no store and emoji's enabled."
  );
}

function asTable({ adze }) {
  console.log('\n----- Default Table Log -----\n');
  const tabular_data = [
    { firstName: 'Andrew', lastName: 'Stacy' },
    { firstName: 'Jim', lastName: 'Bob' },
  ];
  adze().table.log(tabular_data);
}

function asDir({ adze }) {
  console.log('\n----- Default Dir Log -----\n');
  const deep_obj = { a: { b: 'testing' } };
  adze().dir.log(deep_obj);
}

function asDirxml({ adze }, el) {
  console.log('\n----- Default Dirxml Log -----\n');
  adze().dirxml.log(el);
}

function asGroup({ adze }) {
  console.log('\n----- Default Expanded Group Log -----\n');
  adze().group.log('This is a group.');
  adze().log('This is a child of a group log.');
  adze().groupEnd.log();
}

function asGroupCollapsed({ adze }) {
  console.log('\n----- Default Collapsed Group Log -----\n');
  adze().groupCollapsed.log('This is a collapsed group.');
  adze().log('This is a child of a collapsed group.');
  adze().groupEnd.log();
}

function evaluation({ adze }) {
  console.log('\n----- Default Log w/ Evaluations -----\n');
  adze()
    .assert(1 === 2)
    .log('1 does not equal 2');
  adze({ useEmoji: true })
    .assert(1 === 2)
    .log('1 does not equal 2. Testing emoji.');
  adze()
    .assert(2 === 2)
    .log('This assertion passes so this log is hidden');
  adze()
    .test(2 === 2)
    .log('2 equals 2 so this log is allowed to print');
  adze()
    .test(1 === 2)
    .log('1 does not equal 2 so this test fails and this log is hidden');
}

function withTrace({ adze }) {
  console.log('\n----- Default Log w/ Trace -----\n');
  adze().trace.log('Tracing...');
}

function unstyled({ adze }) {
  console.log('\n----- Unstyled Log -----\n');
  adze({ unstyled: true }).label('unstyled').log("I'm an unstyled log.");
}

function withTimestamp({ adze }) {
  console.log('\n----- With Timestamp -----\n');
  adze().label('timestamped').timestamp.log("I have a timestamp.");
  adze({ unstyled: true }).label('timestamped').timestamp.log("I have a timestamp and no styles.");
}

function namespaceIncludeFilter({ adze }) {
  console.log('\n----- Global Namespace Include Filter -----\n');
  const logger = adze({
    useEmoji: true,
    filters: {
      namespace: {
        include: ['foo'],
      },
    },
  }).seal();

  logger().ns('foo').success("I should print.");
  logger().ns('bar').fail("I should not print.");
  logger().ns(['foo', 'bar']).success("I should print.");
  logger().fail("I should not print.");
}

function namespaceExcludeFilter({ adze }) {
  console.log('\n----- Global Namespace Exclude Filter -----\n');
  const logger = adze({
    useEmoji: true,
    filters: {
      namespace: {
        exclude: ['foo'],
      },
    },
  }).seal();

  logger().ns('foo').fail("I should not print.");
  logger().ns('bar').success("I should print.");
  logger().ns(['foo', 'bar']).fail("I should not print.");
  logger().success("I should print.");
}

function labelIncludeFilter({ adze }) {
  console.log('\n----- Global Label Include Filter -----\n');
  const logger = adze({
    useEmoji: true,
    filters: {
      label: {
        include: ['foo'],
      },
    },
  }).seal();

  logger().label('foo').success("I should print.");
  logger().label('bar').fail("I should not print.");
  logger().fail("I should not print.");
}

function labelExcludeFilter({ adze }) {
  console.log('\n----- Global Label Exclude Filter -----\n');
  const logger = adze({
    useEmoji: true,
    filters: {
      label: {
        exclude: ['foo'],
      },
    },
  }).seal();

  logger().label('foo').fail("I should not print.");
  logger().label('bar').success("I should print.");
  logger().success("I should print.");
}

function machineReadableLogs({ adze, createGlobalStore, removeGlobalStore }) {
  removeGlobalStore();
  createGlobalStore();
  const cfg = { machineReadable: true, meta: { hello: 'world' } };
  const log = adze(cfg).seal();
  console.log('\n----- Machine Readable Logs Demo -----\n');

  log().alert('Machine-readable alert');
  log().error('Machine-readable error');
  log().warn('Machine-readable warning');
  log().info('Machine-readable info');
  log().fail('Machine-readable fail');
  log().success('Machine-readable success');
  log().log('Machine-readable');
  log().debug('Machine-readable debug');
  log().verbose('Machine-readable verbose');

  log().label('test').log('A log with a label.');
  log().ns('foo', 'bar').log('A log with namespaces.');
  log().timestamp.log('A log with a timestamp.');
  log().label('timer').time.log('Starting a timer.');
  log().label('timer').timeEnd.log('Ending a timer.');
  log().label('test').timeNow.log('Time elapsed since load.');
  log().meta('foo', 'bar').meta('bar', 'baz').log('Adding foo bar meta data.');
  log().label('counting').count.log('Counting this log.');
  log().label('counting').count.log('Counting this log.');
  log().label('counting').count.log('Counting this log.');

  log().group.log('Opening a log group.');
  log().log('testing');
  log().groupEnd.log();

  log().groupCollapsed.log('Opening a log group collapsed.');
  log().log('testing');
  log().groupEnd.log();

  log().label('my-thread').thread('foo', 'bar');
  log().label('my-thread').thread('bar', 'baz');
  log().label('my-thread').dump.log('Dumping the MDC context.');

  log().trace.log('This log has a stacktrace.');
  log().dir.log('A dir log');
  log().dirxml.log('A dirxml log');
  log().table.log([
    { firstName: 'Andrew', lastName: 'Stacy' },
    { firstName: 'Jim', lastName: 'Bob' },
  ]);

  adze({ machineReadable: true, captureStacktrace: true }).log('Testing the global captureStacktrace configuration.');
}

function disableLeader({ adze }) {
  console.log('\n----- Disabled Rendering the Leader -----\n');
  adze({ renderLeader: false }).log('I have no leader!');
}

function disableArgCount({ adze }) {
  console.log('\n----- Disabled Rendering the Arg Count in the Leader -----\n');
  adze({ renderArgCount: false }).log('I have no arg count!');
}

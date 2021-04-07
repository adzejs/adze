// Run our demo modules
export default function runDemo(lib, el) {
  screenshots(lib, el);
  // screenshotDemo(lib);
  // defaultLevels(lib);
  // defaultLevelsWithEmoji(lib);
  // defaultLevelsWithGlobalOverride(lib);
  // customLevels(lib);
  // customLevelsWithEmoji(lib);
  // thread(lib);
  // logLevelOf2(lib);
  // bundleLogs(lib);
  // sealLogModifiers(lib);
  // withLabel(lib);
  // withNamespace(lib);
  // withMultiNamespace(lib);
  // withTime(lib);
  // asTable(lib);
  // asDir(lib);
  // asDirxml(lib, el);
  // asGroup(lib);
  // asGroupCollapsed(lib);
  // evaluation(lib);
  // withTrace(lib);
}

function screenshots({ adze, createShed }, el) {
  createShed({
    filters: {
      namespace: {
        include: ['foo'],
      },
    },
  });

  adze().ns('foo').log('First log');
  adze().ns(['foo', 'bar']).log('Second log');
  adze().ns('bar').log('Third log');
}

function screenshotDemo({ adze }) {
  const log = adze();
  log.alert('Example alert log');
  log.error('Example error log');
  log.warn('Example warning log');
  log.info('Example info log');
  log.fail('Example fail log');
  log.success('Example success log');
  log.log('Example log');
  log.debug('Example debug log');
  log.verbose('Example verbose log');
  const log2 = adze({ use_emoji: true });
  log2.alert('Example alert log');
  log2.error('Example error log');
  log2.warn('Example warning log');
  log2.info('Example info log');
  log2.fail('Example fail log');
  log2.success('Example success log');
  log2.log('Example log');
  log2.debug('Example debug log');
  log2.verbose('Example verbose log');
  adze({
    use_emoji: true,
    custom_levels: {
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
  const log = adze({ use_emoji: true });
  log.alert('This is an alert!');
  log.error('This is an error!');
  log.warn('This is a warn!');
  log.info('This is an info!');
  log.fail('This is a failure!');
  log.success('This is a success!');
  log.log('This is a log!');
  log.debug('This is a debug!');
  log.verbose('This is a verbose!');
}

function defaultLevelsWithGlobalOverride({ adze, createShed, removeShed }) {
  console.log('\n----- Default Verbose Level w/ Global Overrides -----\n');
  createShed({
    global_cfg: {
      use_emoji: true,
      log_levels: {
        verbose: {
          style:
            'padding-right: 26px; background-color: CornflowerBlue; border-color: 1px solid black; color: white; border-color: #cbc9c9;',
          terminal: ['bgBlue', 'white'],
        },
      },
    },
  });
  adze().verbose('This is a verbose with styling overrides from the shed.');
  removeShed();
}

function customLevels({ adze }) {
  console.log('\n----- Custom Levels -----\n');
  const log = adze({
    custom_levels: {
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
    use_emoji: true,
    custom_levels: {
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

function thread({ adze, createShed, removeShed, render }) {
  console.log('\n----- Thread (MDC) -----\n');
  const shed = createShed();

  // Creating a shed listener is a great way to get meta data from your
  // threaded logs to write to disk or pass to another plugin, library,
  // or service.
  shed.addListener([1, 2, 3, 4, 5, 6, 7, 8], (data, render_val) => {
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
  removeShed();
  adze().label('foo').dump.info('(MDC) Context after closing the thread');
}

function logLevelOf2({ adze }) {
  console.log('\n----- Log Level of 2 -----\n');
  const log = adze({
    log_level: 2,
    use_emoji: true,
    custom_levels: {
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

function bundleLogs({
  adze,
  bundle,
  rerender,
  filterNamespace,
  filterLabel,
  filterLevel,
}) {
  console.log('\n----- Bundle Logs & Recall All -----\n');
  const log = bundle(adze({ use_emoji: true }));
  const divider = adze({ use_emoji: true });

  log().ns('SPACE').error('This is an error!');
  log().ns(['foo', 'SPACE']).info('A bundled log with multiple namespaces.');
  log().label('i-am-label').success('Successfully bundled this log!');
  log().log('Here is another log in the bundle.');

  divider.info('---- Next is a recall of all logs in the bundle ----');
  console.log({ bundle: log().bundle });
  log().bundle.forEach(rerender);

  divider.info(
    '---- Next is a recall of all logs with the label of i-am-label ----'
  );
  filterLabel(log().bundle, 'i-am-label').forEach(rerender);

  divider.info(
    '---- Next is a recall of all logs with the namespace of SPACE ----'
  );
  filterNamespace(log().bundle, 'SPACE').forEach(rerender);

  divider.info(
    '---- Next is a recall of all logs with a level in the range of 4 to 8 ----'
  );
  filterLevel(log().bundle, 4, 8).forEach(rerender);
}

function sealLogModifiers({ adze }) {
  console.log('\n----- Seals Log Modifiers for New Logs -----\n');
  const sealed = adze({ use_emoji: true })
    .ns('sealed')
    .label('sealed-label')
    .seal();

  sealed().success('Successfully sealed this log!');
  sealed().log('Here is another sealed log.');
}

function withLabel({ adze }) {
  console.log('\n----- Default Log w/ No Store -----\n');
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
}

function withTime({ adze }) {
  console.log('\n----- Default Log Timing w/ No Store -----\n');
  adze().time.log('Testing time with no store.');
  adze().timeEnd.log('Testing time with no store.');
  adze().timeNow.log('Testing timeNow with no store.');
  adze({ use_emoji: true }).timeNow.log(
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
  adze({ use_emoji: true })
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

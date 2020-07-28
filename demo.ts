import { adze, bundle } from './src';

// declare const $shed: Shed;

// Run our demo modules
defaultLevels();
defaultLevelsWithEmoji();
customLevels();
customLevelsWithEmoji();
logLevelOf2();
bundleLogsAndRecallAll();
sealLogModifiers();
defaultWithLabel();
defaultWithNamespace();
defaultWithTime();
defaultAsTable();
defaultAsGroup();
defaultAsGroupCollapsed();
defaultEvaluation();
defaultWithTrace();

// const log = adze({
//   log_level: 9,
//   use_emoji: true,
//   custom_levels: {
//     andrew: {
//       level: 9,
//       method: 'info',
//       terminal: ['green'],
//       style: 'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
//       emoji: '🧙‍♂️',
//     }
//   }
// });

// log.custom('andrew', 'falkdfjaldkfjadlkfjalsdkfj');

// adze().label('testAll').time().info();

// adze().andrew('flippyfloo');
// adze().matt('poopypoo');

// $shed.addListener([0,1,2], (log) => {
//   console.debug(`Callback fired for level ${log.level}`, log);
// });

// adze().label('TestTimer').time().log("This is the start of my timer log.");

// const wow = bundle(adze({ use_emoji: true }).ns('wow!').seal());

// wow().attention("This is an attention!", 'adsfadf', 'dfadfadf');
// wow().error("This is an error!", 'adsfadf', 'dfadfadf');
// wow().warn("This is a warn!", 'adsfadf', 'dfadfadf');
// wow().info("This is an info!", 'adsfadf', 'dfadfadf');
// wow().fail("This is a failure!", 'adsfadf', 'dfadfadf');
// wow().success("This is a success!", 'adsfadf', 'adsfadf');
// wow().log("This is a log!", 'adsfadf', 'dfadfadf');
// wow().debug("This is a debug!", 'adsfadf', 'adsfadf');
// wow().verbose("This is a verbose!", 'adsfadf', 'adsfadf');

// adze().log("----- ALL IN BUNDLE -----");
// wow().all();

// adze.level = 5;
// adze().verbose("This shouldn't appear because the log level excludes it.");
// adze().debug("This one shouldn't appear either.");
// adze.level = 7;

// adze().label('doobadoo').time().verbose();
// adze().label('doobadoo').timeEnd().verbose();
// const tabular_data = [
//   {firstName: 'Andrew', lastName: 'Stacy'},
//   {firstName: 'James', lastName: 'Jones'}
// ];
// adze().label('tables').table().count().success(tabular_data);
// adze().label('tables').table().count().success(tabular_data);

// adze().label('tables').log("Counted tables!");
// adze().table().dir().success({firstName: 'Andrew', lastName: 'Stacy'});

// const el = document.querySelector('.main h2');
// adze().dirxml().success(el);

// adze().assert(2 > 3).warn("This will print because the assertion failed.");
// adze().test(2 < 3).warn("This will print because the test passed.");
// for (let i = 0; i < 5; i++) {
//   adze().label("Test Counting").count().log("This is a message with a counter.", "More text.", "even more");
// }
// adze().count().log("This is a message with a counter but no label.");

// adze().label('TestTimer').timeEnd().log("This is the end of my timer log.");

// adze().groupCollapsed().warn("This is a group!");
// adze().log("This is a sub-message of the group.");
// adze().log("This is another sub-message.");
// adze().groupEnd().warn();

// adze().label('DMAC-99999').log('This is an important log for DMAC-99999');
// adze().label('DMAC-99999').success('This another important log');
// adze().label('DMAC-99999').warn('Woopee important log');
// adze().label('DMAC-99999').error('scoobydoo');

// adze().label('testAll').timeEnd().info('End of the timer');

// adze().label("Test").info("Trying to create a labeled log without a store.");

function defaultLevels() {
  console.log('\n----- Default Levels -----\n');
  adze().attention("This is an attention!");
  adze().error("This is an error!");
  adze().warn("This is a warn!");
  adze().info("This is an info!");
  adze().fail("This is a failure!");
  adze().success("This is a success!");
  adze().log("This is a log!");
  adze().debug("This is a debug!");
  adze().verbose("This is a verbose!");
};

function defaultLevelsWithEmoji() {
  console.log('\n----- Default Levels w/ Emoji -----\n');
  const log = adze({ use_emoji: true });
  log.attention("This is an attention!");
  log.error("This is an error!");
  log.warn("This is a warn!");
  log.info("This is an info!");
  log.fail("This is a failure!");
  log.success("This is a success!");
  log.log("This is a log!");
  log.debug("This is a debug!");
  log.verbose("This is a verbose!");
}

function customLevels() {
  console.log('\n----- Custom Levels -----\n');
  const log = adze({
    custom_levels: {
      special: {
        level: 4,
        method: 'info',
        terminal: ['bgBlue', 'yellow'],
        style: 'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
        emoji: '🎁',
      },
      important: {
        level: 1,
        method: 'info',
        terminal: ['bgRed', 'white'],
        style: 'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
        emoji: '❗',
      }
    }
  });

  log.custom('special', 'This is a special log!');
  log.custom('important', 'This is an important log!');
}

function customLevelsWithEmoji() {
  console.log('\n----- Custom Levels w/ Emoji -----\n');
  const log = adze({
    use_emoji: true,
    custom_levels: {
      special: {
        level: 4,
        method: 'info',
        terminal: ['bgBlue', 'yellow'],
        style: 'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
        emoji: '🎁',
      },
      important: {
        level: 1,
        method: 'info',
        terminal: ['bgRed', 'white'],
        style: 'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
        emoji: '❗',
      }
    }
  });

  log.custom('special', 'This is a special log!');
  log.custom('important', 'This is an important log!');
}

function logLevelOf2() {
  console.log('\n----- Log Level of 2 -----\n');
  const log = adze({
    log_level: 2,
    use_emoji: true,
    custom_levels: {
      special: {
        level: 3,
        method: 'info',
        terminal: ['bgBlue', 'yellow'],
        style: 'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
        emoji: '🎁',
      },
      important: {
        level: 1,
        method: 'info',
        terminal: ['bgRed', 'white'],
        style: 'background: linear-gradient(to right, #fff, #00FF00); padding-right: 31px;',
        emoji: '❗',
      }
    }
  });

  log.attention("This attention log should render. (level = 0)");
  log.error("This error log should render. (level = 1)");
  log.warn("This warning log should render. (level = 2)");
  log.info("This info log should be hidden.");
  log.fail("This failure log should be hidden.");
  log.success("This success log should be hidden.");
  log.log("This log should be hidden.");
  log.debug("This debug log should be hidden.");
  log.verbose("This verbose log should be hidden.");

  log.custom('special', 'This custom special log should be hidden.');
  log.custom('important', 'This custom important log should render. (level = 1)');
}

function bundleLogsAndRecallAll() {
  console.log('\n----- Bundle Logs & Recall All -----\n');
  const bundled = bundle(adze({ use_emoji: true }));

  bundled().success('Successfully bundled this log!');
  bundled().log('Here is another log in the bundle.');

  adze({ use_emoji: true }).log("---- Next is a recall of all logs in the bundle ----");

  bundled().all();
}

function sealLogModifiers() {
  console.log('\n----- Seals Log Modifiers for New Logs -----\n');
  const sealed = adze({ use_emoji: true }).ns('sealed').label('sealed-label').seal();

  sealed.success('Successfully sealed this log!');
  sealed.log('Here is another sealed log.');
}

function defaultWithLabel() {
  console.log('\n----- Default Log w/ No Store -----\n');
  adze().label('test').log('Testing a label with no store.');
}

function defaultWithNamespace() {
  console.log('\n----- Default Namespace Log w/ No Store -----\n');
  adze().namespace('test').log('Testing a namespace with no store.');
  adze().ns('test').log('Testing a namespace using the ns() alias.');
}

function defaultWithTime() {
  console.log('\n----- Default Log Timing w/ No Store -----\n');
  adze().time().log("Testing time with no store.");
  adze().timeEnd().log("Testing time with no store.");
  adze().timeNow().log("Testing timeNow with no store.");
  adze({ use_emoji: true }).timeNow().log("Testing timeNow with no store and emoji's enabled.");
}

function defaultAsTable() {
  console.log('\n----- Default Table Log -----\n');
  const tabular_data = [
    {firstName: 'Andrew', lastName: 'Stacy'},
    {firstName: 'Jim', lastName: 'Bob'}
  ];
  adze().table().log(tabular_data);
}

function defaultAsGroup() {
  console.log('\n----- Default Expanded Group Log -----\n');
  adze().group().log("This is a group.");
  adze().log("This is a child of a group log.");
  adze().groupEnd().log();
}

function defaultAsGroupCollapsed() {
  console.log('\n----- Default Collapsed Group Log -----\n');
  adze().groupCollapsed().log("This is a collapsed group.");
  adze().log("This is a child of a collapsed group.");
  adze().groupEnd().log();
}

function defaultEvaluation() {
  console.log('\n----- Default Log w/ Evaluations -----\n');
  // @ts-ignore
  adze().assert(1 === 2).log("1 does not equal 2");
  // @ts-ignore
  adze({ use_emoji: true }).assert(1 === 2).log("1 does not equal 2. Testing emoji.");
  // @ts-ignore
  adze().assert(2 === 2).log("This assertion passes so this log is hidden");
  // @ts-ignore
  adze().test(2 === 2).log("2 equals 2 so this log is allowed to print");
  // @ts-ignore 
  adze().test(1 === 2).log("1 does not equal 2 so this test fails and this log is hidden");
}

function defaultWithTrace() {
  console.log('\n----- Default Log w/ Trace -----\n');
  adze().trace().log('Tracing...');
}
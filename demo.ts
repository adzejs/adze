import { adze, bundle } from './src';

// declare const $shed: Shed;

// Run our demo modules
defaultLevels();
defaultWithLabel();
defaultWithNamespace();
defaultTime();


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

function defaultWithLabel() {
  adze().label('test').log('Testing a label with no store.');
}

function defaultWithNamespace() {
  adze().namespace('test').log('Testing a namespace with no store.');
  adze().ns('test').log('Testing a namespace using the ns() alias.');
}

function defaultTime() {
  adze().time().log("Testing time with no store.");
  adze().timeEnd().log("Testing time with no store.");
  adze().timeNow().log("Testing timeNow with no store.");
}


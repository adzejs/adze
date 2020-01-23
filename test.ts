import { adze, createStore } from './src';
import { ConsoleType } from './src/_contracts';

declare const $shed: Shed;

adze().label("Test").info("Trying to create a labeled log without a store.");

createStore({
  log_level: 9000,
  custom_levels: {
    andrew: {
      level: 8,
      method: ConsoleType.Info,
      style: 'background: #00FF00; padding-right: 26px;',
      terminal: ['bgGreen', 'yellow'],
      emoji: '🧙‍♂️',
    },
    matt: {
      level: 9,
      method: ConsoleType.Info,
      style: 'color: #fff; background: #7E5109; padding-right: 39px;',
      terminal: ['bgBlack', 'red'],
      emoji: '💩',
    }
  }
});

adze().label('testAll').time().info();

adze().andrew('flippyfloo');
adze().matt('poopypoo');

$shed.addListener([0,1], (log: any) => {
  console.debug("Testing the log listener callbacks", log.level);
});

adze().label('TestTimer').time().log("This is the start of my timer log.");

adze().ns('wow!').attention("This is an attention!", 'adsfadf', 'dfadfadf');
adze().ns('wow!').error("This is an error!", 'adsfadf', 'dfadfadf');
adze().ns('wow!').warn("This is a warn!", 'adsfadf', 'dfadfadf');
adze().ns('wow!').info("This is an info!", 'adsfadf', 'dfadfadf');
adze().ns('wow!').success("This is a success!", 'adsfadf', 'adsfadf');
adze().ns('wow!').log("This is a log!", 'adsfadf', 'dfadfadf');
adze().ns('wow!').debug("This is a debug!", 'adsfadf', 'adsfadf');
adze().ns('wow!').detail("This is a detail!", 'adsfadf', 'adsfadf');

$shed.level = 5;
adze().detail("This shouldn't appear because the log level excludes it.");
adze().debug("This one shouldn't appear either.");
$shed.level = 7;

adze().label('doobadoo').time().detail();
adze().label('doobadoo').timeEnd().detail();
const tabular_data = [
  {firstName: 'Andrew', lastName: 'Stacy'},
  {firstName: 'James', lastName: 'Jones'}
];
adze().label('tables').table().count().success(tabular_data);
adze().label('tables').table().count().success(tabular_data);

adze().label('tables').log("Counted tables!");
adze().assert(2 < 3).warn("This should show because the assertion is true.");
adze().assert(3 < 2).warn("This shouldn't show because the assertion is false.");
for (let i = 0; i < 5; i++) {
  adze().label("Test Counting").count().log("This is a message with a counter.", "More text.", "even more");
}
adze().count().log("This is a message with a counter but no label.");

adze().label('TestTimer').timeEnd().log("This is the end of my timer log.");

adze().groupCollapsed().warn("This is a group!");
adze().log("This is a sub-message of the group.");
adze().log("This is another sub-message.");
adze().groupEnd().warn();

adze().label('DMAC-99999').log('This is an important log for DMAC-99999');
adze().label('DMAC-99999').success('This another important log');
adze().label('DMAC-99999').warn('Woopee important log');
adze().label('DMAC-99999').error('scoobydoo');

adze().label('testAll').timeEnd().info('End of the timer');
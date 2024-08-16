import { afterEach, describe, test } from 'vitest';
import { teardown } from '../../../src';
import {
  defaultTimestamp,
  noEmoji,
  printStandardAlert,
  printStandardCustom,
  printStandardDebug,
  printStandardError,
  printStandardFail,
  printStandardInfo,
  printStandardLog,
  printStandardSuccess,
  printStandardVerbose,
  printStandardWarn,
} from './log.terminators';

/**
 * @vitest-environment node
 */

describe('terminators with standard format', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a standard log with level of alert', printStandardAlert);

  test('prints a standard log with level of error', printStandardError);

  test('prints a standard log with level of warn', printStandardWarn);

  test('prints a standard log with level of info', printStandardInfo);

  test('prints a standard log with level of fail', printStandardFail);

  test('prints a standard log with level of success', printStandardSuccess);

  test('prints a standard log with level of log', printStandardLog);

  test('prints a standard log with level of debug', printStandardDebug);

  test('prints a standard log with level of verbose', printStandardVerbose);

  test('prints a custom standard log', printStandardCustom);

  test('does not print an emoji', noEmoji);

  test('default timestamp matches ISO-8601 format', defaultTimestamp);
});

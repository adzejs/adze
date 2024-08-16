import { afterEach, describe, test } from 'vitest';
import { teardown } from '../../../src';
import {
  noEmoji,
  printCommonAlert,
  printCommonCustom,
  printCommonDebug,
  printCommonError,
  printCommonFail,
  printCommonInfo,
  printCommonLog,
  printCommonSuccess,
  printCommonVerbose,
  printCommonWarn,
} from './log.terminators';
import { defaultTimestamp } from '../json/log.terminators';

/**
 * @vitest-environment node
 */

describe('terminators with common format', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a log with level of alert', printCommonAlert);

  test('prints a log with level of error', printCommonError);

  test('prints a log with level of warn', printCommonWarn);

  test('prints a log with level of info', printCommonInfo);

  test('prints a log with level of fail', printCommonFail);

  test('prints a log with level of success', printCommonSuccess);

  test('prints a log with level of log', printCommonLog);

  test('prints a log with level of debug', printCommonDebug);

  test('prints a log with level of verbose', printCommonVerbose);

  test('prints a custom log', printCommonCustom);

  test('does not print an emoji', noEmoji);

  test('default timestamp matches dd/MMM/yyyy:HH:mm:ss xx', defaultTimestamp);
});

import { afterEach, describe, test } from 'vitest';
import { teardown } from '../../../src';
import {
  defaultTimestamp,
  incrementingPids,
  noEmoji,
  printJsonAlert,
  printJsonCustom,
  printJsonDebug,
  printJsonError,
  printJsonFail,
  printJsonInfo,
  printJsonLog,
  printJsonSuccess,
  printJsonVerbose,
  printJsonWarn,
  printsOptionalFields,
} from './log.terminators';

/**
 * @vitest-environment node
 */

describe('terminators with json format in browser', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a json log with level of alert', printJsonAlert);

  test('prints a json log with level of error', printJsonError);

  test('prints a json log with level of warn', printJsonWarn);

  test('prints a json log with level of info', printJsonInfo);

  test('prints a json log with level of fail', printJsonFail);

  test('prints a json log with level of success', printJsonSuccess);

  test('prints a json log with level of log', printJsonLog);

  test('prints a json log with level of debug', printJsonDebug);

  test('prints a json log with level of verbose', printJsonVerbose);

  test('prints a custom json log', printJsonCustom);

  test('does not print an emoji', noEmoji);

  test('default timestamp matches ISO-8601 format', defaultTimestamp);

  test('multiple json logs have incrementing pids', incrementingPids);

  test('prints an alert json log with all of the optional fields', printsOptionalFields);
});

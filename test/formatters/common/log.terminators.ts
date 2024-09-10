import { expect, vi } from 'vitest';
import adze, { CommonLogFormatMeta, LevelConfiguration, setup } from '../../../src';
import { isMatch } from 'date-fns';

export const printCommonAlert = () => {
  console.error = vi.fn();
  setup({ format: 'common', timestampFormatter: () => '31/Jul/2024:12:38:35 -0400' });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .alert('This is an alert log.');
  expect(console.error).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is an alert log.'
  );
};

export const printCommonError = () => {
  console.error = vi.fn();
  setup({ format: 'common', timestampFormatter: () => '31/Jul/2024:12:38:35 -0400' });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .error('This is an error log.');
  expect(console.error).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is an error log.'
  );
};

export const printCommonWarn = () => {
  console.warn = vi.fn();
  setup({ format: 'common', timestampFormatter: () => '31/Jul/2024:12:38:35 -0400' });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .warn('This is a warn log.');
  expect(console.warn).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is a warn log.'
  );
};

export const printCommonInfo = () => {
  console.info = vi.fn();
  setup({ format: 'common', timestampFormatter: () => '31/Jul/2024:12:38:35 -0400' });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .info('This is an info log.');
  expect(console.info).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is an info log.'
  );
};

export const printCommonFail = () => {
  console.info = vi.fn();
  setup({ format: 'common', timestampFormatter: () => '31/Jul/2024:12:38:35 -0400' });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .fail('This is a fail log.');
  expect(console.info).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is a fail log.'
  );
};

export const printCommonSuccess = () => {
  console.info = vi.fn();
  setup({ format: 'common', timestampFormatter: () => '31/Jul/2024:12:38:35 -0400' });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .success('This is a success log.');
  expect(console.info).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is a success log.'
  );
};

export const printCommonLog = () => {
  console.log = vi.fn();
  setup({ format: 'common', timestampFormatter: () => '31/Jul/2024:12:38:35 -0400' });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .log('This is a log log.');
  expect(console.log).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is a log log.'
  );
};

export const printCommonDebug = () => {
  console.debug = vi.fn();
  setup({
    activeLevel: 'debug',
    format: 'common',
    timestampFormatter: () => '31/Jul/2024:12:38:35 -0400',
  });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .debug('This is a debug log.');
  expect(console.debug).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is a debug log.'
  );
};

export const printCommonVerbose = () => {
  console.debug = vi.fn();
  setup({
    activeLevel: 'verbose',
    format: 'common',
    timestampFormatter: () => '31/Jul/2024:12:38:35 -0400',
  });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .verbose('This is a verbose log.');
  expect(console.debug).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is a verbose log.'
  );
};

export const printCommonCustom = () => {
  console.log = vi.fn();
  const leetLevel: LevelConfiguration = {
    levelName: 'leetLevel',
    level: 1337,
    method: 'log',
    style:
      'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
    terminalStyle: ['white', 'bgMagenta'],
    emoji: '👾',
  };
  setup({
    activeLevel: 1337,
    levels: { leetLevel },
    format: 'common',
    timestampFormatter: () => '31/Jul/2024:12:38:35 -0400',
  });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .custom('leetLevel', 'This is a custom log.');
  expect(console.log).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is a custom log.'
  );
};

export const noEmoji = () => {
  console.error = vi.fn();
  setup({
    format: 'common',
    timestampFormatter: () => '31/Jul/2024:12:38:35 -0400',
  });
  adze.withEmoji
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .alert('This is an alert log.');
  expect(console.error).toHaveBeenCalledWith(
    'localhost 12345 group-user [31/Jul/2024:12:38:35 -0400] This is an alert log.'
  );
};

export const commonTimestamp = () => {
  const fn = vi.fn();
  console.error = fn;
  setup({
    format: 'common',
  });
  adze
    .meta<CommonLogFormatMeta>({
      hostname: 'localhost',
      ident: '12345',
      user: 'group-user',
    })
    .alert('This is an alert log.');
  expect(console.error).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const message = fn.mock.calls[0][0];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const timestamp = message.split('[')[1].split(']')[0];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  expect(isMatch(timestamp, 'dd/MMM/yyyy:HH:mm:ss xx')).toBe(true);
};

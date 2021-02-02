export default {
  require: ['ts-node/register'],
  files: [
    'test/**/*.ts',
    '!test/browser-env.d.ts',
    '!test/mock/**/*.ts',
    '!test/data/**/*.ts',
    '!test/polyfill/**/*.ts',
  ],
  // environmentVariables: {
  //   ADZE_ENV: 'dev',
  // },
  ingoredByWatcher: ['src/**/*.ts'],
  verbose: true,
  extensions: ['ts'],
};

export default ({
  babel: {
    compileEnhancements: false,
  },
  require: [
    "ts-node/register"
  ],
  files: [
    "test/**/*.ts",
    "!test/mock/**/*.ts",
    "!test/data/**/*.ts",
    "!test/polyfill/**/*.ts",
  ],
  ingoredByWatcher: [
    "src/**/*.ts"
  ],
  verbose: true,
  extensions: [
    "ts"
  ]
});
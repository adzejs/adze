// Run our demo modules
export default function runDemo(adzelib) {
  console.log('ADZELIB', adzelib);
  const adze = adzelib.default;
  defaultLevels(adze);
  withNamespace(adze);
  withLabel(adze, adzelib);
  counting(adze, adzelib);
}

function defaultLevels(adze) {
  adze.alert('Example alert log');
  adze.error('Example error log');
  adze.warn('Example warning log');
  adze.info('Example info log');
  adze.fail('Example fail log');
  adze.success('Example success log');
  adze.log('Example log');
  adze.debug('Example debug log');
  adze.verbose('Example verbose log');
  const log2 = adze.seal({ withEmoji: true });
  log2.alert('Example alert log');
  log2.error('Example error log');
  log2.warn('Example warning log');
  log2.info('Example info log');
  log2.fail('Example fail log');
  log2.success('Example success log');
  log2.log('Example log');
  log2.debug('Example debug log');
  log2.verbose('Example verbose log');
  // adze({
  //   useEmoji: true,
  //   customLevels: {
  //     customError: {
  //       level: 1,
  //       method: "error",
  //       style:
  //         "font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;",
  //       terminal: ["bgRed", "white"],
  //       emoji: "😭",
  //     },
  //   },
  // }).custom("customError", "This is a custom error log");
}

function withNamespace(adze) {
  adze.ns('foo', 'bar').log('This is a namespaced log');
}

function withLabel(adze, { setup, teardown }) {
  setup();
  adze.label('foo').log('This is a labeled log');
  teardown();
}

function counting(adze, { setup, teardown }) {
  setup();
  for (let i = 0; i < 10; i++) {
    adze.label('foo').count.log('This is a labeled log');
  }
  // teardown();
}

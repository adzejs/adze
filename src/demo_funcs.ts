import adze, {
  setup,
  teardown,
  CommonLogFormatMeta,
  CommonLogFormatMessage,
  JsonLogFormatMeta,
  JsonLogOptionalFields,
  serializeRequest,
  serializeResponse,
  LevelConfig,
  isBrowser,
} from '.';
import AdzeFileTransport from './lib/adze-file-transport';
import { StandardLogFormatMeta } from './formatters/standard/types';

if (isBrowser()) {
  // @ts-ignore
  window.adze = adze;
}

const leetLevel: LevelConfig = {
  levelName: 'leetLevel',
  level: 1337,
  method: 'log',
  style:
    'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
  terminalStyle: ['white', 'bgMagenta'],
  emoji: '👾',
};

// Run our demo modules
async function runDemo() {
  // defaultLevels();
  // configuration();
  // custom();
  // namespace();
  // label();
  // filterLevelRange();
  // filterLevels();
  // filterNamespaces();
  // filterLabels();
  // filterBoth();
  // counting();
  // tests();
  // dir();
  // table();
  // group();
  // groupCollapsed();
  // seal();
  // trace();
  // timestamp();
  // sealTag();
  // silent();
  // tools();
  // common();
  // standard();
  // json();
  // time();
  // thread();
  // listener();
  middlewareFileTransport();
}

function middlewareFileTransport() {
  setup({
    middleware: [new AdzeFileTransport({ directory: './logs' })],
  });
  const logger = adze.timestamp.withEmoji.seal();

  for (let i = 0; i < 100; i++) {
    logger.log('This is a test log message');
  }
}

await runDemo();

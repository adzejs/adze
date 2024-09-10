# Migrating from Adze v1

If you were previously using [v1.x](https://adzejs.com/v1/) of Adze, migration should be fairly
straightforward. Only a few of the original API's changed and you should be able to resolve them for
the most part with a find and replace in your project.

Here's what has changed:

- `adze().` is now just `adze.`
  - Calling [seal](../reference/terminators.md#seal) returns a class with static methods as well.
- Calling `createShed` is no longer required for any functionality.
  - `createShed` has been replaced with the [`setup` function](../reference/configuration.md#setup-function).
  - The [global context](../getting-started/global-store.md) is now named `$adzeGlobal`
- [Log listeners](../reference/global-store.md#addlistener) now only receive the log instance.
- The configuration object now has a [new configuration schema](../reference/configuration.md).
- The [Filtering and Utility](https://adzejs.com/v1/guide/filtering-and-utility-functions.html#filtercollection) functions have been removed.
- [Bundling](https://adzejs.com/v1/guide/factories.html#bundle) has been removed.

:::warning
Some items may have been missed. Please open an [issue](https://github.com/adzejs/adze/issues) if
any other differences are discovered and we will get them documented.
:::

## Adze Factory Changes

`adze().` is now just `adze.`

#### v1 Example

```typescript
import adze from 'adze';

adze().log('This is a log.');
```

#### v2 Example

```typescript
import adze from 'adze';

adze.log('This is a log.');
```

## Sealing Changes

Calling [seal](../reference/terminators.md#seal) returns a class with static methods as well.

#### v1 Example

```typescript
import adze from 'adze';

const logger = adze().timestamp.seal();
logger().log('This is a log with a timestamp.');
```

#### v2 Example

```typescript
import adze from 'adze';

const logger = adze.timestamp.seal();
logger.log('This is a log with a timestamp.');
```

## Calling createShed Not Required

Calling `createShed` is no longer required for any functionality like labels, count, etc.

#### v1 Example

```typescript
import adze from 'adze';

adze().label('blah').count.log('Counter log.');
adze().label('blah').count.log('Counter log.'); // <- count not increased
```

#### v2 Example

```typescript
import adze from 'adze';

adze.label('blah').count.log('Counter log.');
adze.label('blah').count.log('Counter log.'); // <- count is increased
```

## createShed replaced with setup

`createShed` has been replaced with the [`setup` function](../reference/configuration.md#setup-function).

[Log listeners](../reference/global-store.md#addlistener) now only receive the log instance.

#### v1 Example

```typescript
import adze, { createShed } from 'adze';

const shed = createShed({
  globalCfg: {
    // overrides here
  },
});

shed.addListener('*', (data, render, printed) => {
  // do stuff...
});
```

#### v2 Example

```typescript
import adze, { setup } from 'adze';

const store = setup({
  // overrides here
});

store.addListener('*', (log) => {
  // do stuff...
});
```

## Global Context is Now $adzeGlobal

The [global context](../getting-started/global-store.md) is now named `$adzeGlobal` instead of `$shed`.

#### v1 Example

```typescript
import adze, { createShed } from 'adze';

const shed = createShed();
// Old context was named $shed
console.log('Context', global.$shed);
```

#### v2 Example

```typescript
import adze, { setup } from 'adze';

setup();
// New context is named $adzeGlobal
console.log('Context', globalThis.$adzeGlobal);
```

## Configuration Has New Schema

The configuration object now has a [new configuration schema](../reference/configuration.md).

#### v1 Example

```typescript
interface Configuration {
  logLevel?: number;
  useEmoji?: boolean;
  unstyled?: boolean;
  terminalColorFidelity?: 0 | 1 | 2 | 3;
  captureStacktrace?: boolean;
  machineReadable?: boolean;
  baseStyle?: string;
  logLevels?: LogLevels;
  customLevels?: Partial<LogLevels>;
  meta?: {
    [key: string]: unknown;
  };
  filters?: AdzeFilters;
}
```

#### v2 Example

```typescript
interface UserConfiguration {
  activeLevel?: Level | number;
  cache?: boolean;
  cacheSize?: number;
  dump?: boolean;
  filters?: Filters;
  format?: string;
  formatters: Record<string, FormatterConstructor>;
  levels: Record<string, LevelConfig>;
  meta?: Record<string, any>;
  middleware?: Middleware[];
  silent?: boolean;
  showTimestamp?: boolean;
  timestampFormatter?: (date: Date) => string;
  withEmoji?: boolean;
}

type Level = 'alert' | 'error' | 'warn' | 'info' | 'fail' | 'success' | 'log' | 'debug' | 'verbose';
```

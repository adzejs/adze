# Adze

![Adze Logo](./readme/logo-small.png)

[![build workflow](https://github.com/adzejs/adze/actions/workflows/build.yml/badge.svg)](https://github.com/adzejs/adze/actions/workflows/build.yml)
![npm](https://img.shields.io/npm/v/adze) ![node-lts](https://img.shields.io/node/v-lts/adze) [![size](https://badgen.net/bundlephobia/minzip/adze)](https://bundlephobia.com/result?p=adze) [![dependency count](https://badgen.net/bundlephobia/dependency-count/adze)](https://bundlephobia.com/result?p=adze) [![apache 2.0](https://badgen.net/npm/license/adze)](/LICENSE.md)

**Please visit our official docs at [adzejs.com](http://www.adzejs.com/).**

## Why is this named Adze?

![A drawing of a man using an adze to shape a log](./readme/adze-wikipedia.png)

_Photo from [Wikipedia](https://en.wikipedia.org/wiki/Adze)_

> Adze - [a cutting tool that ... is used chiefly for shaping wood](https://www.merriam-webster.com/dictionary/adze).

(Pronounced ["Ads"](https://dictionary.cambridge.org/us/pronunciation/english/adze)) Adze was chosen as a name for this library to maintain solidarity with the logging puns and to emphasize that this library is a tool for shaping the logs of your application.

## Why should I use Adze?

> Adze is **UNIVERSAL**, meaning it can run in any JS runtime (node, bun, deno, browser) without any special considerations.

Compared to existing Javascript logging libraries, Adze sets itself apart because it is **universal**, meaning **it can run in both server and browser environments with zero config**. Other libraries, such as Winston or Bunyan only support server environments. Libraries like Pino and Log4JS support both environments, but it either requires some configuration or it only provides you with a very limited feature set. None of them directly support Deno or Bun.

Javascript frameworks have been shifting to server-side rendering (SSR) and to micro-frontend style architectures. Both of these architecture approaches present unique challenges with logging in a production-ready environment. Because Adze is universal by nature, you can write your logs the same way throughout your application and **it will just work**.

Aside from [universalism](https://en.wikipedia.org/wiki/Isomorphic_JavaScript), Adze also offers many other compelling features:

- First-class TypeScript support (not bolted-on)
- Wraps and extends the entire [standard API](https://developer.mozilla.org/en-US/docs/Web/API/console)
- A convenient chainable API
- Log Listeners for capturing log data
- Middleware support for plugins and transporting logs
- Log annotations such as namespaces, labels, and other meta data
- Four formats supported out of the box:
  - Pretty - Human readable logs that are easy on the eyes
  - JSON - Machine readable logs that are compatible with the [Bunyan CLI](https://github.com/trentm/node-bunyan?tab=readme-ov-file#cli-usage)
  - Standard - Human readable stdout logs
  - Common - Logs that adhere to the [Common Log Format](https://en.wikipedia.org/wiki/Common_Log_Format)
- Everything is customizable and configurable
- Tools for caching, filtering, and recalling logs
- Support for creating log thread to track data across multiple scopes
- Convenient child logger API's
- and much more...

### Here is a simple preview:

<span style="display: block; max-width: 600px">

![Preview of Adze logs](./readme/demo.jpg)

</span>

> This preview was generated from the same code executed in both the browser (left) and the node (right) environments.

## What does the API look like?

As stated above, Adze offers an easy to use, chainable API. To create a log you simply chain together an Adze log instance with a series of modifiers and then end with a terminator. Here's an example of creating a log with a namespace:

```typescript
import adze from 'adze';

adze.namespace('example').log('Example log');
```

The output of this would look like the following:

![Adze log example](./readme/api_example_output_1.png)

## Install the Package

You can install Adze from NPM using the following command:

```bash
# npm
npm install -S adze

# pnpm
pnpm add adze
```

## Version Requirements

| Dependency | Supported Versions | Notes                                    |
| ---------- | ------------------ | ---------------------------------------- |
| node       | >= 18.18.x         | When running Adze in a Node environment. |
| bun        | >= 1.1.26          | When running Adze in a Bun environment.  |
| deno       | >= 1.46.3          | When running Adze in a Deno environment. |
| typescript | >= 5.5.2           | When using Adze with TypeScript          |

## TypeScript Configuration

Adze is built to be used with TypeScript and we highly encourage using it in this way.

When building your project with TypeScript, you need to make sure you use the `"DOM"` lib because Adze supports both the web browser and Node. Also, to support the dependencies of Adze, you'll need to add `"esModuleInterop": true` to your tsconfig as well.

For more information about configuring TypeScript, go to [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### Example

```json
{
  "compilerOptions": {
    // ...your other options
    "lib": ["DOM"],
    "esModuleInterop": true
  }
}
```

## Importing Adze

Adze comes bundled with a few different ways of accessing it. Here are some examples:

### CommonJS

```javascript
const { adze } = require('adze'); // Or alternatively `const adze = require('adze').adze;`

adze.log('Hello World!');
```

### ESM / TypeScript

```typescript
import adze from 'adze';

adze.log('Hello World!');
```

## Documentation

**Please visit our official docs at [adzejs.com](http://www.adzejs.com/).**

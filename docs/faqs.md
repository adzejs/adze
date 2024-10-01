# Frequently Asked Questions

On this page we hope to document frequently asked questions in regards to using the adze library.

## How can I make Adze work with NestJS?

### Problem

"When installing Adze in NestJS I get the following error:"

```bash
Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/andrewstacy/Projects/personal/adze/dist/index.js from /Users/andrewstacy/Projects/personal/project-name/dist/logger.js not supported.
```

### Solution

NestJS currently does not support importing of ES Modules directly. There is currently an
[open PR on GitHub](https://github.com/nestjs/nest/pull/8736) to resolve this.

There are currently two preferred options for working around this limitation:

#### Use Experimental Require Module Flag

The easiest way to work around this issue is to use the node `--experimental-require-module` flag.
Keep in mind that this will only work with **node version >= 22.x** and it is an experimental
feature that can change at any time with new node versions.

Change your nestjs scripts to look like this:

```json
{
  "scripts": {
    "start": "nest start -e 'node --experimental-require-module'",
    "start:dev": "nest start --watch -e 'node --experimental-require-module'",
    "start:debug": "nest start --debug --watch -e 'node --experimental-require-module'",
    "start:prod": "node --experimental-require-module dist/main"
  }
}
```

#### Use Helpers

This method is a bit safer, but is also quite ugly. It requires the use of the dynamic import
function with means that you'll have to await the function each time you want a copy of your adze
logger.

More information about this method can be found at this StackOverflow post:

[https://stackoverflow.com/questions/74830166/unable-to-import-esm-module-in-nestjs](https://stackoverflow.com/questions/74830166/unable-to-import-esm-module-in-nestjs)

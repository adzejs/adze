# Installing Adze

## Install the Package

You can install Adze from NPM using the following command:

```bash
# NPM
npm install --save adze

# Yarn
yarn add adze
```

## Importing Adze

Adze comes bundled with a few different ways of accessing it. Here are some examples:

### Browser

```html
<!-- In the head of your html -->
<head>
  <script src="path/to/adze.js"></script>
</head>

<!-- Using adze elsewhere in JS -->
<script>
  // Adze is registered globally in your browser as AdzeLib
  const { adze } = AdzeLib;

  adze().log('Hello World!');
</script>
```

### Node JS (CommonJS)

```javascript
const { adze } = require('adze');

adze().log('Hello World!');
```

### ES6 / TypeScript

```typescript
import { adze } from 'adze';

adze().log('Hello World!');
```

## Line Numbers / Blackboxing

Although Adze is meant primarily for long-lived logs that should be in production environments you can use it for debugging purposes just like the standard console API. The caveat with using it for debugging is that you will need to enable [**Blackboxing**](https://bit.ly/3d1eOex).

A common problem with libraries that wrap the standard console API is that they lose line numbers in the browser console. This occurs because the browser console is reporting the line number at which the console API was called, which is usually within the library wrapper. To get around this problem, Chromium based browsers (like Chrome, Edge and Brave) added the [**Blackboxing**](https://bit.ly/3d1eOex) concept. This tells the browser to pretend like the library source code doesn't exist. This enables Adze logs to print correct line numbers from where they are called.

For information on setting up **Blackboxing**, please go to [https://bit.ly/3d1eOex](https://bit.ly/3d1eOex).

_NOTE: The verbiage for this has been changed to **Ignore List** in the console settings._

For non-chromium based browsers, right now there is no easy way to work around this issue. We suggest using the standard console API for debugging purposes where line numbers are important and reserving Adze logs for long-lived logs that will be used in production environments.

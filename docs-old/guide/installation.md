# Installing Adze

## Install the Package

You can install Adze from NPM using the following command:

```bash
# NPM
npm install --save adze

# Yarn
yarn add adze
```

## Version Requirements

| Dependency | Supported Versions | Notes                                    |
| ---------- | ------------------ | ---------------------------------------- |
| node       | >= 10.x            | When running Adze in a Node environment. |
| typescript | >= 4.1             | When using Adze with TypeScript          |

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

### CDN

You can import the library directly into your HTML from the [jsDelivr](https://www.jsdelivr.com/package/npm/adze) CDN.

_**NOTE:** In the script tag in the example below, replace `<version>` with the version of Adze you would like to use._

```html
<!-- In the head of your html -->
<head>
  <!-- To use v1.4.0 you would write https://cdn.jsdelivr.net/npm/adze@1.4.0/dist/adze.min.js -->
  <script src="https://cdn.jsdelivr.net/npm/adze@<version>/dist/adze.min.js"></script>
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
const { adze } = require('adze'); // Or alternatively `const adze = require('adze').adze;`

adze().log('Hello World!');
```

### ES6 / TypeScript

```typescript
import adze from 'adze';

adze().log('Hello World!');
```

## Line Numbers / Blackboxing

Although Adze is meant primarily for long-lived logs that should be in production environments you can use it for debugging purposes just like the standard console API. The caveat with using it for debugging is that you will need to enable [**Blackboxing**](https://bit.ly/3d1eOex).

A common problem with libraries that wrap the standard console API is that they lose line numbers in the browser console. This occurs because the browser console is reporting the line number at which the console API was called, which is usually within the library wrapper. To get around this problem, Chromium based browsers (like Chrome, Edge and Brave) added the [**Blackboxing**](https://bit.ly/3d1eOex) concept. This tells the browser to pretend like the library source code doesn't exist. This enables Adze logs to print correct line numbers from where they are called.

For information on setting up **Blackboxing**, please go to [https://bit.ly/3d1eOex](https://bit.ly/3d1eOex).

_NOTE: The verbiage for this has been changed to **Ignore List** in the console settings._

To **blackbox** the adze library you will need to supply the following regular expression:

```typescript
/\b(?:util|BaseLog)\b\.js/g;
```

For non-chromium based browsers, right now there is no easy way to work around this issue. We suggest using the standard console API for debugging purposes where line numbers are important and reserving Adze logs for long-lived logs that will be used in production environments.

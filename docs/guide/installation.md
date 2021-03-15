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

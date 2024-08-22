---
sidebar: auto
---

# Frequently Asked Questions

This section is dedicated to answering common problems that might occur while using Adze in your project.

## SvelteKit Error

### Question

```
I'm using Adze with SvelteKit and I'm getting the following error:

"process is not defined"
```

### Solution

This error occurs because one of Adze's dependencies, [browser-process-hrtime](https://www.npmjs.com/package/browser-process-hrtime), makes use of some global environment variables that are only available in a Node environment in order to detect within which environment it is running. SvelteKit uses [Vite](https://vitejs.dev/) for Hot Module Reloading (HRM) when running the dev environment. Vite loses context of these global variables which causes this error to be thrown. This can easily be fixed with a little extra configuration in your [svelte.config.js](https://kit.svelte.dev/docs#configuration).

```javascript
// Import this at the top of your config file
const process = require('process');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Add the following configuration
    vite: () => ({
      define: {
        process: process,
        global: {},
      },
    }),
  },
};
```

This is explicitly defining the globals that are missing in the Vite context by assigning Node's process and creating an empty object representing the nodejs `global` variable.

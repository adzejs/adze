# Creating Add-on's

One of the core tenets of Adze is to **not do too much**. This means that the core functionality of Adze is to provide the user with the ability to have control over their logs, how they are shaped, and to be able to listen to their logs and do with the log data as they please. Anything resembling transporting log data to files, API's, or databases is purposefully omitted from the core. However, because of Adze [log listeners](../guide/globalstore-concepts.md#listeners), there is opportunity for add-on packages to provide simple solutions for handling log data transports and various other solutions.

## Best Practices

When creating add-on's for Adze your primary interface should be wrapping a [log listener](../guide/globalstore-concepts.md#listeners). By wrapping a log listener you can intercept the [log data](../guide/data.md#label-data-object) and [log render](../guide/data.md#log-render) and act upon it. To do this, your add-on should export a function that takes a callback function as a parameter and then executes that callback function at a later time and forwards the **log data** and **log render** to it as parameters. Let's take a look at an example.

## Add-on Example

Let's first create our wrapper function that our add-on will expose.

#### my-addon.js

```javascript
// We'll create an exported function that takes a callback as a parameter
// and sets a default to an empty anonymous function.
export function MyAddon(cb = () => {}) {
  // Our wrapper will return a log listener callback function that
  // accepts log data and a log render.
  return (data, render) => {
    // Do stuff with the log data and log render

    // Then make sure to execute the user specified callback before finishing.
    cb(data, render);
  };
}
```

#### my-app.js

```javascript
import { adze, createGlobalStore } from 'adze';

// Now, in our app, we'll import the wrapper function we created above.
import { MyAddon } from './my-addon.js';

const globalStore = createGlobalStore();

// Now, to use the add-on, I'll wrap my log listener callback function with
// the MyAddon wrapper. We'll target all logs to use this add-on.
globalStore.addListener(
  '*',
  MyAddon((data, render) => {
    // Do normal log listener stuff here...
  })
);

// Or alternatively, since we specified an empty anonymous function
// as the default parameter of our add-on, we can call it empty.
globalStore.addListener('*', MyAddon());

adze().log('This log will be intercepted by our add-on!');
```

Following the pattern above allows your add-on to operate on log data and log renders while also giving control to the end-user over which logs it wants your add-on to target.

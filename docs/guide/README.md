# Introduction

## Why is this named Adze?

![A drawing of a man using an adze to shape a log](./assets/adze.png)

_Photo from [Wikipedia](https://en.wikipedia.org/wiki/Adze)_

> Adze - [a cutting tool that ... is used chiefly for shaping wood](https://www.merriam-webster.com/dictionary/adze).

Adze was chosen as a name for this library to maintain solidarity with the logging puns and to emphasize that this library is a tool for shaping the logs of your application.

## Adze Demo

<div class="youtube-video-container">
  <iframe width="560" height="315"  src="https://www.youtube-nocookie.com/embed/8Ht3LKowKR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Why should I use Adze?

As you may already be aware there are a number of other good JS libraries out there to assist with logging. The focus of Adze is to provide a convenient and clean API, provide first-class TypeScript support, and to empower you to take command of your logs rather than pigeon-hole you into a specific way of handling them.

Here is a list of the features that Adze provides:

- First-class TypeScript support
- Runs in both the browser and node
- A fluent, chainable API for creating logs
- Log Listeners that empower you to do with your logs as you wish
- Annotate your logs with namespaces, labels, and other meta data
- Attractive styling (EMOJI'S INCLUDED and consistent across major browsers)
- Everything is configurable
- Create custom log levels
- A global log store for recalling logs and overriding configuration
- and much more...

Beyond the new features that Adze provides you, it also wraps the entire console web standard.
Read more about the standard here: [MDN Console Docs](https://developer.mozilla.org/en-US/docs/Web/API/console)

### Here is a simple preview

![Preview of Adze logs](./assets/demo.png)

> This preview was generated from the same code executed in both the browser (left) and the node (right) environments.

## What does the API look like?

As stated above, Adze offers an easy to use, chainable API. To create a log you simply chain together an Adze log instance with a series of modifiers and then end with a terminator. Here's an example of creating a log with emoji's and a namespace:

```typescript
import { adze } from 'adze';

adze({ useEmoji: true }).ns('tix-456').log('Example log');
```

The output of this would look like the following:

![Preview of Adze logs](./examples/api_example_output.png)

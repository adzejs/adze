<template>
  <div>
    <h1 id="introduction" tabindex="-1">
      <a class="header-anchor" href="#introduction"><span>Introduction</span></a>
    </h1>
    <h2 id="why-is-this-named-adze" tabindex="-1">
      <a class="header-anchor" href="#why-is-this-named-adze"
        ><span>Why is this named Adze?</span></a
      >
    </h2>
    <p>
      <img
        src="@source/.vuepress/guide/assets/adze.png"
        alt="A drawing of a man using an adze to shape a log"
      />
    </p>
    <p>
      <em
        >Photo from
        <a href="https://en.wikipedia.org/wiki/Adze" target="_blank" rel="noopener noreferrer"
          >Wikipedia</a
        ></em
      >
    </p>
    <blockquote>
      <p>
        Adze -
        <a
          href="https://www.merriam-webster.com/dictionary/adze"
          target="_blank"
          rel="noopener noreferrer"
          >a cutting tool that ... is used chiefly for shaping wood</a
        >.
      </p>
    </blockquote>
    <p>
      Adze was chosen as a name for this library to maintain solidarity with the logging puns and to
      emphasize that this library is a tool for shaping the logs of your application.
    </p>
    <h2 id="adze-demo" tabindex="-1">
      <a class="header-anchor" href="#adze-demo"><span>Adze Demo</span></a>
    </h2>
    <div class="youtube-video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/8Ht3LKowKR0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h2 id="why-should-i-use-adze" tabindex="-1">
      <a class="header-anchor" href="#why-should-i-use-adze"><span>Why should I use Adze?</span></a>
    </h2>
    <p>
      As you may already be aware there are a number of other good JS libraries out there to assist
      with logging. The focus of Adze is to provide a convenient and clean API, provide first-class
      TypeScript support, and to empower you to take command of your logs rather than pigeon-hole
      you into a specific way of handling them.
    </p>
    <p>Here is a list of the features that Adze provides:</p>
    <ul>
      <li>First-class TypeScript support</li>
      <li>Multi-environment support for the Browser and Node</li>
      <li>Wraps and extends the entire standard API</li>
      <li>A fluent, chainable API</li>
      <li>Log Listeners for capturing log data</li>
      <li>Log annotation namespaces, labels, and other meta data</li>
      <li>Attractive styling (EMOJI'S INCLUDED and consistent across major browsers)</li>
      <li>Everything is configurable</li>
      <li>Enables completely custom log levels</li>
      <li>
        A global log store for recalling logs and overriding configuration (supports micro-frontends
        and modules)
      </li>
      <li>Support for Mapped Diagnostic Context</li>
      <li>Convenient unit testing environment controls</li>
      <li>Advanced Log Filtering</li>
      <li>and much more...</li>
    </ul>
    <p>
      Beyond the new features that Adze provides you, it also wraps the entire console web standard.
      Read more about the standard here:
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/console"
        target="_blank"
        rel="noopener noreferrer"
        >MDN Console Docs</a
      >
    </p>
    <h3 id="here-is-a-simple-preview" tabindex="-1">
      <a class="header-anchor" href="#here-is-a-simple-preview"
        ><span>Here is a simple preview</span></a
      >
    </h3>
    <p><img src="@source/.vuepress/guide/assets/demo.png" alt="Preview of Adze logs" /></p>
    <blockquote>
      <p>
        This preview was generated from the same code executed in both the browser (left) and the
        node (right) environments.
      </p>
    </blockquote>
    <h2 id="what-does-the-api-look-like" tabindex="-1">
      <a class="header-anchor" href="#what-does-the-api-look-like"
        ><span>What does the API look like?</span></a
      >
    </h2>
    <p>
      As stated above, Adze offers an easy to use, chainable API. To create a log you simply chain
      together an Adze log instance with a series of modifiers and then end with a terminator.
      Here's an example of creating a log with emoji's and a namespace:
    </p>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create our global log in-memory cache</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Listen to logs that are generated and operate on them</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// if my log printed to the console</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>printed<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// do stuff with my log data like sending to an API or localStorage</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> useEmoji<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'tix-456'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Example log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>The output of this would look like the following:</p>
    <p>
      <img
        src="@source/.vuepress/guide/examples/api_example_output.png"
        alt="Preview of Adze logs"
      />
    </p>
  </div>
</template>

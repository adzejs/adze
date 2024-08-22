<template>
  <div>
    <p>::: slot typescript-support</p>
    <h2 id="first-class-typescript-support" tabindex="-1">
      <a class="header-anchor" href="#first-class-typescript-support"
        ><span>First Class TypeScript Support</span></a
      >
    </h2>
    <p>
      Adze is built with TypeScript from the ground up. Take advantage of all of the benefits of
      using TypeScript with your app's logs. :::
    </p>
    <p>::: slot chainable-api</p>
    <h2 id="a-fluent-chainable-api" tabindex="-1">
      <a class="header-anchor" href="#a-fluent-chainable-api"
        ><span>A Fluent, Chainable API</span></a
      >
    </h2>
    <p>
      Writing your logs should feel natural which is why Adze chose to implement a
      <RouteLink to="/guide/adze-concepts.html">chainable API</RouteLink> that feels very much like
      the standard console API (but better).
    </p>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <p>:::</p>
    <p>::: slot everything-configurable</p>
    <h2 id="everything-is-configurable" tabindex="-1">
      <a class="header-anchor" href="#everything-is-configurable"
        ><span>Everything is Configurable</span></a
      >
    </h2>
    <p>
      Setup your logging exactly how you need it.
      <a href="/config">Everything with Adze is configurable</a>, from the default log levels down
      to the emoji's your logs use. You can even create completely custom log levels. How you use
      Adze is up to you.
    </p>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> useEmoji<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">"I'm configured to use emoji's!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <p>:::</p>
    <p>::: slot browser-and-node</p>
    <h2 id="supports-browser-and-node-environments" tabindex="-1">
      <a class="header-anchor" href="#supports-browser-and-node-environments"
        ><span>Supports Browser and Node Environments</span></a
      >
    </h2>
    <p>
      Run code containing your adze logs seamlessly
      <RouteLink to="/guide/installation.html">in both the browser and node</RouteLink>
      environments. There is no extra configuration required. :::
    </p>
    <p>::: slot globalStore</p>
    <h2 id="global-store-and-overrides" tabindex="-1">
      <a class="header-anchor" href="#global-store-and-overrides"
        ><span>Global Store and Overrides</span></a
      >
    </h2>
    <p>
      Adze comes with a component called
      <RouteLink to="/guide/globalstore-concepts.html">GlobalStore</RouteLink> which provides a
      global store for your logs. With the global store you can recall logs from an in-memory cache
      and override log configurations; effectively enabling
      <a href="/guide/micro-frontends">micro-service and micro-frontend architectures</a>. :::
    </p>
    <p>
      ::: slot footer Made by
      <a href="https://github.com/AJStacy" target="_blank" rel="noopener noreferrer"
        >Andrew Stacy</a
      >
      with ❤️
    </p>
    <p>
      Find Adze on
      <a href="https://github.com/AJStacy/adze" target="_blank" rel="noopener noreferrer">GitHub</a>
      :::
    </p>
    <p>::: slot learn-more</p>
    <h2 id="and-much-more" tabindex="-1">
      <a class="header-anchor" href="#and-much-more"><span>And much more...</span></a>
    </h2>
    <p>
      To learn more about Adze and how to use it in your project, take a look at the
      <a href="/guide">Guide</a> and watch the introduction video. :::
    </p>
  </div>
</template>

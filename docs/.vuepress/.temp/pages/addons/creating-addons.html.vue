<template>
  <div>
    <h1 id="creating-add-on-s" tabindex="-1">
      <a class="header-anchor" href="#creating-add-on-s"><span>Creating Add-on's</span></a>
    </h1>
    <p>
      One of the core tenets of Adze is to <strong>not do too much</strong>. This means that the
      core functionality of Adze is to provide the user with the ability to have control over their
      logs, how they are shaped, and to be able to listen to their logs and do with the log data as
      they please. Anything resembling transporting log data to files, API's, or databases is
      purposefully omitted from the core. However, because of Adze
      <RouteLink to="/guide/globalstore-concepts.html#listeners">log listeners</RouteLink>, there is
      opportunity for add-on packages to provide simple solutions for handling log data transports
      and various other solutions.
    </p>
    <h2 id="best-practices" tabindex="-1">
      <a class="header-anchor" href="#best-practices"><span>Best Practices</span></a>
    </h2>
    <p>
      When creating add-on's for Adze your primary interface should be wrapping a
      <RouteLink to="/guide/globalstore-concepts.html#listeners">log listener</RouteLink>. By
      wrapping a log listener you can intercept the
      <RouteLink to="/guide/data.html#label-data-object">log data</RouteLink> and
      <RouteLink to="/guide/data.html#log-render">log render</RouteLink> and act upon it. To do
      this, your add-on should export a function that takes a callback function as a parameter and
      then executes that callback function at a later time and forwards the
      <strong>log data</strong> and <strong>log render</strong> to it as parameters. Let's take a
      look at an example.
    </p>
    <h2 id="add-on-example" tabindex="-1">
      <a class="header-anchor" href="#add-on-example"><span>Add-on Example</span></a>
    </h2>
    <p>Let's first create our wrapper function that our add-on will expose.</p>
    <h4 id="my-addon-js" tabindex="-1">
      <a class="header-anchor" href="#my-addon-js"><span>my-addon.js</span></a>
    </h4>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token comment">// We'll create an exported function that takes a callback as a parameter</span></span>
<span class="line"><span class="token comment">// and sets a default to an empty anonymous function.</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">MyAddon</span><span class="token punctuation">(</span><span class="token function-variable function">cb</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Our wrapper will return a log listener callback function that</span></span>
<span class="line">  <span class="token comment">// accepts log data and a log render.</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Do stuff with the log data and log render</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Then make sure to execute the user specified callback before finishing.</span></span>
<span class="line">    <span class="token function">cb</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> render<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
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
      </div>
    </div>
    <h4 id="my-app-js" tabindex="-1">
      <a class="header-anchor" href="#my-app-js"><span>my-app.js</span></a>
    </h4>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now, in our app, we'll import the wrapper function we created above.</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MyAddon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./my-addon.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now, to use the add-on, I'll wrap my log listener callback function with</span></span>
<span class="line"><span class="token comment">// the MyAddon wrapper. We'll target all logs to use this add-on.</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'*'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">MyAddon</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Do normal log listener stuff here...</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Or alternatively, since we specified an empty anonymous function</span></span>
<span class="line"><span class="token comment">// as the default parameter of our add-on, we can call it empty.</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token function">MyAddon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log will be intercepted by our add-on!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      Following the pattern above allows your add-on to operate on log data and log renders while
      also giving control to the end-user over which logs it wants your add-on to target.
    </p>
  </div>
</template>

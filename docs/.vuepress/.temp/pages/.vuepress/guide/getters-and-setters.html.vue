<template>
  <div>
    <h1 id="getters-and-setters" tabindex="-1">
      <a class="header-anchor" href="#getters-and-setters"><span>Getters and Setters</span></a>
    </h1>
    <p>Adze log instances have a few setters and getters that you can take advantage of.</p>
    <h2 id="context" tabindex="-1">
      <a class="header-anchor" href="#context"><span>context</span></a>
    </h2>
    <p>Use this getter to retrieve the log instance's Mapped Diagnostic Context (MDC) value.</p>
    <h3 id="example" tabindex="-1">
      <a class="header-anchor" href="#example"><span>Example</span></a>
    </h3>
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
<span class="line"><span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's generate a log</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'context'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'context'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is an info log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Get the MDC context of the log</span></span>
<span class="line"><span class="token keyword">const</span> context <span class="token operator">=</span> log<span class="token punctuation">.</span>context<span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h2 id="data" tabindex="-1">
      <a class="header-anchor" href="#data"><span>data</span></a>
    </h2>
    <p>
      Use this getter to retrieve all of the meta
      <RouteLink to="/.vuepress/guide/data.html#log-data">data</RouteLink> related to the log
      instance.
    </p>
    <h3 id="example-1" tabindex="-1">
      <a class="header-anchor" href="#example-1"><span>Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's generate a log</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is an info log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Get all of the meta data from the log instance</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> log<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="hydrate" tabindex="-1">
      <a class="header-anchor" href="#hydrate"><span>hydrate</span></a>
    </h2>
    <p>
      This setter enables you to create a new log instance or replicate a log instance by providing
      the method with a
      <RouteLink to="/.vuepress/guide/data.html#log-data">log data object</RouteLink>. The log
      instance will inherit all of the properties from the log data object.
    </p>
    <h3 id="example-2" tabindex="-1">
      <a class="header-anchor" href="#example-2"><span>Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's generate a log</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is an info log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's clone it by using the hydrate setter</span></span>
<span class="line"><span class="token keyword">const</span> cloned <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hydrate</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="level" tabindex="-1">
      <a class="header-anchor" href="#level"><span>level</span></a>
    </h2>
    <p>Use this getter to retrieve the log instance's level.</p>
    <h3 id="example-3" tabindex="-1">
      <a class="header-anchor" href="#example-3"><span>Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's generate a log</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is an info log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Get the level of the log</span></span>
<span class="line"><span class="token keyword">const</span> level <span class="token operator">=</span> log<span class="token punctuation">.</span>level<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="render" tabindex="-1">
      <a class="header-anchor" href="#render"><span>render</span></a>
    </h2>
    <p>
      Use this getter to retrieve the log instance's
      <RouteLink to="/.vuepress/guide/data.html#log-render">render</RouteLink>. Under normal
      circumstances you should retrieve the log render from the
      <RouteLink to="/.vuepress/guide/data.html#terminated-log-object"
        >terminated log object</RouteLink
      >
      that is returned by a terminated log rather than from the getter.
    </p>
    <h3 id="example-4" tabindex="-1">
      <a class="header-anchor" href="#example-4"><span>Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's generate a log</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is an info log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Get the render of the log</span></span>
<span class="line"><span class="token keyword">const</span> render <span class="token operator">=</span> log<span class="token punctuation">.</span>render<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
  </div>
</template>

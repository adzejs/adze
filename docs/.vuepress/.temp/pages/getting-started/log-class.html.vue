<template>
  <div>
    <h1 id="adze-class" tabindex="-1">
      <a class="header-anchor" href="#adze-class"><span>Adze Class</span></a>
    </h1>
    <p>
      As you know from the high-level concepts, Adze logs are typically generated from a factory
      function. Out-of-the-box you get the <code v-pre>adze()</code> function that is your normal
      entry point into creating logs. However, you can also use <code v-pre>seal()</code> and
      <code v-pre>bundle()</code> to take advantage of some other cool features that we will review
      below.
    </p>
    <h2 id="adze" tabindex="-1">
      <a class="header-anchor" href="#adze"><span>adze</span></a>
    </h2>
    <p>
      The <code v-pre>adze()</code> factory take a single parameter which is a
      <RouteLink to="/config/#adze-configuration">Configuration</RouteLink> object that controls how
      this log instance will behave. The factory function will then return a new Adze log instance
      that you can chain modifiers with and ultimately terminate.
    </p>
    <p>Here are a few examples of some patterns that you can use:</p>
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
<span class="line"><span class="token comment">// Here we are creating a log with a configuration that will only apply to this instance</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello World with emoji!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// But... what if we want to apply the same configuration to multiple logs?</span></span>
<span class="line"><span class="token keyword">const</span> cfg <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'A log with emoji enabled.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Another log with emoji enabled'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <p>Optionally, you could import and export your configuration across your app:</p>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> cfg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'~/configuration.ts'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Generating a log with a shared configuration</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello World with emoji!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="seal" tabindex="-1">
      <a class="header-anchor" href="#seal"><span>seal</span></a>
    </h2>
    <p>
      We've seen some patterns for reusing configuration for your logs, but what if we would like to
      create a log factory that has the configuration and even some modifiers baked in? This is the
      case where you would use <code v-pre>seal()</code>.
    </p>
    <h3 id="interface" tabindex="-1">
      <a class="header-anchor" href="#interface"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
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
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's seal a configuration and namespace into a new log factory</span></span>
<span class="line"><span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'my-project'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Now we can create new logs from our factory that enable emoji's and all</span>
<span class="line"> * have the 'my-project' namespace! */</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This log is generated from a new factory'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'This is another log from the same factory'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="output" tabindex="-1">
      <a class="header-anchor" href="#output"><span>Output</span></a>
    </h3>
    <p>
      <img src="@source/getting-started/examples/seal-example.png" alt="Output of our sealed log" />
    </p>
  </div>
</template>

<template>
  <div>
    <h1 id="mapped-diagnostic-context-mdc" tabindex="-1">
      <a class="header-anchor" href="#mapped-diagnostic-context-mdc"
        ><span>Mapped Diagnostic Context (MDC)</span></a
      >
    </h1>
    <h2 id="what-is-mapped-diagnostic-context" tabindex="-1">
      <a class="header-anchor" href="#what-is-mapped-diagnostic-context"
        ><span>What is Mapped Diagnostic Context?</span></a
      >
    </h2>
    <p>
      <em
        >&quot;The basic idea of Mapped Diagnostic Context is to provide a way to enrich log
        messages with pieces of information that could be not available in the scope where the
        logging actually occurs, but that can be useful to better track the execution of the
        program.&quot;</em
      >
    </p>
    <blockquote>
      <p>
        Quote from
        <a
          href="https://www.baeldung.com/mdc-in-log4j-2-logback"
          target="_blank"
          rel="noopener noreferrer"
          >https://www.baeldung.com/mdc-in-log4j-2-logback</a
        >
      </p>
    </blockquote>
    <p>
      Adze provides a way to use an MDC pattern through the combination of a few of it's API's such
      as <RouteLink to="/guide/globalstore-concepts.html">GlobalStore</RouteLink>,
      <RouteLink to="/guide/modifiers.html#label">label</RouteLink>, and
      <RouteLink to="/guide/other-terminators.html#thread">thread</RouteLink>. We can also print our
      context using <RouteLink to="/guide/modifiers.html#dump">dump</RouteLink> or clear our context
      using <RouteLink to="/guide/modifiers.html#close">close</RouteLink>.
    </p>
    <h2 id="example" tabindex="-1">
      <a class="header-anchor" href="#example"><span>Example</span></a>
    </h2>
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
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// We can capture our MDC thread data from the log data object.</span></span>
<span class="line">  <span class="token keyword">const</span> context <span class="token operator">=</span> data<span class="token punctuation">.</span>context<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'added'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'subtracted'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dump<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Results from our thread'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dump<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Results from our thread after closing'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h2 id="output" tabindex="-1">
      <a class="header-anchor" href="#output"><span>Output</span></a>
    </h2>
    <p><img src="@source/guide/examples/close-example.png" alt="close example output" /></p>
    <p>
      <img
        src="@source/guide/examples/close-terminal-example.png"
        alt="close example output in the terminal"
      />
    </p>
  </div>
</template>

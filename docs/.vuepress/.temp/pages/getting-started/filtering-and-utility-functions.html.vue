<template>
  <div>
    <h1 id="filtering-utility-functions" tabindex="-1">
      <a class="header-anchor" href="#filtering-utility-functions"
        ><span>Filtering &amp; Utility Functions</span></a
      >
    </h1>
    <p>
      When working with Adze logs sometimes you may have a
      <RouteLink to="/getting-started/advanced.html#collections">Collection</RouteLink> of logs that
      you would like to filter down to a specific subset. Adze provides you with some filtering
      functions out of the box to help with this. Adze also provides a couple utility functions that
      are explained below.
    </p>
    <h2 id="filtercollection" tabindex="-1">
      <a class="header-anchor" href="#filtercollection"><span>filterCollection</span></a>
    </h2>
    <p>
      This function provides a generic way of filtering
      <RouteLink to="/getting-started/advanced.html#collections">collections</RouteLink>. The
      provided callback function receives a
      <RouteLink to="/getting-started/data.html#log-data">log data object</RouteLink> for each log
      in the collection. If a truthy value is returned the current log of the iteration will be
      added into a new collection. If a falsy value is returned it will be omitted.
    </p>
    <h3 id="filtercollection-interface" tabindex="-1">
      <a class="header-anchor" href="#filtercollection-interface"
        ><span>filterCollection Interface</span></a
      >
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">function</span> <span class="token function">filterCollection</span><span class="token punctuation">(</span>collection<span class="token operator">:</span> Collection<span class="token punctuation">,</span> <span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span>log<span class="token operator">:</span> LogData<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> Collection<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="filtercollection-with-globalstore-example" tabindex="-1">
      <a class="header-anchor" href="#filtercollection-with-globalstore-example"
        ><span>filterCollection with GlobalStore Example</span></a
      >
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> filterCollection<span class="token punctuation">,</span> rerender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a new log factory</span></span>
<span class="line"><span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'This is an error!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is some info.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Successfully did something!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging something.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get our collection from the GlobalStore</span></span>
<span class="line"><span class="token keyword">const</span> collection <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Let's filter the collection by logs with namespace of </span>
<span class="line">  'foo' or labels of 'bar' and then re-render it. */</span></span>
<span class="line"><span class="token function">filterCollection</span><span class="token punctuation">(</span>collection<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> data<span class="token punctuation">.</span>namespace<span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token operator">||</span> data<span class="token punctuation">.</span>label<span class="token operator">?.</span>name <span class="token operator">===</span> <span class="token string">'bar'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>rerender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="filtercollection-output" tabindex="-1">
      <a class="header-anchor" href="#filtercollection-output"
        ><span>filterCollection Output</span></a
      >
    </h3>
    <p>
      In these example's of the output we can see our initial four logs and then the logs with a
      namespace of <code v-pre>'foo'</code> or a label of <code v-pre>'bar'</code> are re-rendered.
    </p>
    <p>
      <img
        src="@source/getting-started/examples/filterCollection-example.png"
        alt="filter collection example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/filterCollection-terminal-example.png"
        alt="filter collection example terminal output"
      />
    </p>
    <h2 id="filterlabel" tabindex="-1">
      <a class="header-anchor" href="#filterlabel"><span>filterLabel</span></a>
    </h2>
    <p>
      Filters a <RouteLink to="/getting-started/advanced.html#collections">collection</RouteLink> of
      logs by the given <RouteLink to="/getting-started/modifiers.html#label">label</RouteLink>.
    </p>
    <h3 id="filterlabel-interface" tabindex="-1">
      <a class="header-anchor" href="#filterlabel-interface"><span>filterLabel Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">function</span> <span class="token function">filterLabel</span><span class="token punctuation">(</span>collection<span class="token operator">:</span> Collection <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Collection<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="filterlabel-with-globalstore-example" tabindex="-1">
      <a class="header-anchor" href="#filterlabel-with-globalstore-example"
        ><span>filterLabel with GlobalStore Example</span></a
      >
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> filterLabel<span class="token punctuation">,</span> rerender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a new log factory</span></span>
<span class="line"><span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'This is an error!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is some info.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Successfully did something!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging something.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get our collection from the GlobalStore</span></span>
<span class="line"><span class="token keyword">const</span> collection <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's filter the collection and then re-render it.</span></span>
<span class="line"><span class="token function">filterLabel</span><span class="token punctuation">(</span>collection<span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>rerender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="filterlabel-output" tabindex="-1">
      <a class="header-anchor" href="#filterlabel-output"><span>filterLabel Output</span></a>
    </h3>
    <p>
      In these example's of the output we can see our initial four logs and then the log with a
      label of <code v-pre>'bar'</code> is re-rendered.
    </p>
    <p>
      <img
        src="@source/getting-started/examples/filterLabel-example.png"
        alt="filter label example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/filterLabel-terminal-example.png"
        alt="filter label example terminal output"
      />
    </p>
    <h2 id="filterlevel" tabindex="-1">
      <a class="header-anchor" href="#filterlevel"><span>filterLevel</span></a>
    </h2>
    <p>
      Filters a <RouteLink to="/getting-started/advanced.html#collections">collection</RouteLink> of
      logs by the given
      <RouteLink to="/getting-started/data.html#level-filter">level filter</RouteLink>.
    </p>
    <h3 id="filterlevel-interface" tabindex="-1">
      <a class="header-anchor" href="#filterlevel-interface"><span>filterLevel Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">function</span> <span class="token function">filterLevel</span><span class="token punctuation">(</span>collection<span class="token operator">:</span> Collection <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> levels<span class="token operator">:</span> LevelFilter<span class="token punctuation">)</span><span class="token operator">:</span> Collection<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="filterlevel-with-globalstore-example" tabindex="-1">
      <a class="header-anchor" href="#filterlevel-with-globalstore-example"
        ><span>filterLevel with GlobalStore Example</span></a
      >
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> globalStore<span class="token punctuation">,</span> filterLevel<span class="token punctuation">,</span> rerender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">globalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a new log factory</span></span>
<span class="line"><span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'This is an error!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is some info.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Successfully did something!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging something.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get our collection from the GlobalStore</span></span>
<span class="line"><span class="token keyword">const</span> collection <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's filter the collection and then re-render it.</span></span>
<span class="line"><span class="token function">filterLevel</span><span class="token punctuation">(</span>collection<span class="token punctuation">,</span> <span class="token string">'0-3'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>rerender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="filterlevel-with-globalstore-output" tabindex="-1">
      <a class="header-anchor" href="#filterlevel-with-globalstore-output"
        ><span>filterLevel with GlobalStore Output</span></a
      >
    </h3>
    <p>
      In these example's of the output we can see our initial four logs and then the logs with a
      level of in the range of 0 - 3 are re-rendered.
    </p>
    <p>
      <img
        src="@source/getting-started/examples/filterLevel-example.png"
        alt="filter level example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/filterLevel-terminal-example.png"
        alt="filter level example terminal output"
      />
    </p>
    <h2 id="filternamespace" tabindex="-1">
      <a class="header-anchor" href="#filternamespace"><span>filterNamespace</span></a>
    </h2>
    <p>
      Filters a <RouteLink to="/getting-started/advanced.html#collections">collection</RouteLink> of
      logs by the given
      <RouteLink to="/getting-started/modifiers.html#namespace-ns">namespace</RouteLink>.
    </p>
    <h3 id="filternamespace-interface" tabindex="-1">
      <a class="header-anchor" href="#filternamespace-interface"
        ><span>filterNamespace Interface</span></a
      >
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">function</span> <span class="token function">filterNamespace</span><span class="token punctuation">(</span>collection<span class="token operator">:</span> Collection <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Collection<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="filternamespace-with-globalstore-example" tabindex="-1">
      <a class="header-anchor" href="#filternamespace-with-globalstore-example"
        ><span>filterNamespace with GlobalStore Example</span></a
      >
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> filterNamespace<span class="token punctuation">,</span> rerender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a new log factory</span></span>
<span class="line"><span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'This is an error!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is some info.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Successfully did something!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging something.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get our collection from the GlobalStore</span></span>
<span class="line"><span class="token keyword">const</span> collection <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's filter the collection and then re-render it.</span></span>
<span class="line"><span class="token function">filterNamespace</span><span class="token punctuation">(</span>collection<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'bar'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>rerender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="filternamespace-with-globalstore-output" tabindex="-1">
      <a class="header-anchor" href="#filternamespace-with-globalstore-output"
        ><span>filterNamespace with GlobalStore Output</span></a
      >
    </h3>
    <p>
      In these example's of the output we can see our initial four logs and then the logs with a
      namespace of <code v-pre>'bar'</code> are re-rendered.
    </p>
    <p>
      <img
        src="@source/getting-started/examples/filterNamespace-example.png"
        alt="filter namespace example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/filterNamespace-terminal-example.png"
        alt="filter namespace example terminal output"
      />
    </p>
    <h2 id="isfinallogdata" tabindex="-1">
      <a class="header-anchor" href="#isfinallogdata"><span>isFinalLogData</span></a>
    </h2>
    <p>
      This utility function is a type guard that allows you to validate that a log data object is a
      final log data object type. This is important for a few methods that require
      <RouteLink to="/getting-started/data.html#log-data">final log data</RouteLink>.
    </p>
    <h3 id="isfinallogdata-interface" tabindex="-1">
      <a class="header-anchor" href="#isfinallogdata-interface"
        ><span>isFinalLogData Interface</span></a
      >
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">function</span> <span class="token function">isFinalLogData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> LogData <span class="token operator">|</span> FinalLogData<span class="token punctuation">)</span><span class="token operator">:</span> data <span class="token keyword">is</span> FinalLogData<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="isfinallogdata-example" tabindex="-1">
      <a class="header-anchor" href="#isfinallogdata-example"
        ><span>isFinalLogData Example</span></a
      >
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> isFinalLogData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a listener and store it's location in a variable</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do stuff with the log data.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'some important info.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> log<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Listeners only accept finalized log data so we must use a type guard to verify it</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFinalLogData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  globalStore<span class="token punctuation">.</span><span class="token function">fireListeners</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      This utility function accepts a
      <RouteLink to="/getting-started/adze-concepts.html#log-render">log render</RouteLink> and
      prints it to the console / terminal.
    </p>
    <h3 id="render-interface" tabindex="-1">
      <a class="header-anchor" href="#render-interface"><span>render Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">[</span>method<span class="token punctuation">,</span> args<span class="token punctuation">]</span><span class="token operator">:</span> LogRender<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="render-example" tabindex="-1">
      <a class="header-anchor" href="#render-example"><span>render Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Let's get our log render tuple and rename it as to</span>
<span class="line">   not conflict with our function name */</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">render</span><span class="token operator">:</span> logRender <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Something executed successfully!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we'll render our log render tuple</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span>logRender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="render-output" tabindex="-1">
      <a class="header-anchor" href="#render-output"><span>render Output</span></a>
    </h3>
    <p>
      <img src="@source/getting-started/examples/render-example.png" alt="render example output" />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/render-terminal-example.png"
        alt="render example terminal output"
      />
    </p>
    <h2 id="rerender" tabindex="-1">
      <a class="header-anchor" href="#rerender"><span>rerender</span></a>
    </h2>
    <p>
      This utility function accepts a log instance and if it has been previously rendered this
      rerenders it. This function is often used in conjunction with a filter function like
      <a href="#filterlevel">filterLevel</a>.
    </p>
    <h3 id="rerender-interface" tabindex="-1">
      <a class="header-anchor" href="#rerender-interface"><span>rerender Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">function</span> <span class="token function">rerender</span><span class="token punctuation">(</span>log<span class="token operator">:</span> Log<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="rerender-example" tabindex="-1">
      <a class="header-anchor" href="#rerender-example"><span>rerender Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> rerender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'Something failed to execute!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">log</span><span class="token operator">:</span> silentLog <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>silent<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Alerting that something went horribly wrong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's rerender our fail log</span></span>
<span class="line"><span class="token function">rerender</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Our alert log will not rerender because it was silent and not previously rendered</span></span>
<span class="line"><span class="token function">rerender</span><span class="token punctuation">(</span>silentLog<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="rerender-output" tabindex="-1">
      <a class="header-anchor" href="#rerender-output"><span>rerender Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/rerender-example.png"
        alt="re-render example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/rerender-terminal-example.png"
        alt="re-render example terminal output"
      />
    </p>
  </div>
</template>

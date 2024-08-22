<template>
  <div>
    <h1 id="modifiers" tabindex="-1">
      <a class="header-anchor" href="#modifiers"><span>Modifiers</span></a>
    </h1>
    <p>
      Once you have an Adze log instance you can now start applying modifiers. Modifiers are methods
      that alter the log in some way and then return the log instance so that you may chain more
      modifiers or terminate the instance. Keep in mind, some modifiers have a dependency on the
      presence of a <a href="#label">label</a> and labels rely on GlobalStore.
    </p>
    <h2 id="assert" tabindex="-1">
      <a class="header-anchor" href="#assert"><span>assert</span></a>
    </h2>
    <p>
      This modifier accepts an assertion boolean expression and will only print if the boolean
      expression fails (is a falsy value).
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/assert"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="assert-interface" tabindex="-1">
      <a class="header-anchor" href="#assert-interface"><span>assert Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">assert</span><span class="token punctuation">(</span>assertion<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="assert-example" tabindex="-1">
      <a class="header-anchor" href="#assert-example"><span>assert Example</span></a>
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
<span class="line"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's assert that x and y should be equal</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X does not equal Y'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// This log will not print because the assertion passes</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X does not equal 2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's look at the output with emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X does not equal Y'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="assert-output" tabindex="-1">
      <a class="header-anchor" href="#assert-output"><span>assert Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/assert-example.png"
        alt="assert modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/assert-terminal-example.png"
        alt="assert modifier example terminal output"
      />
    </p>
    <h2 id="count" tabindex="-1">
      <a class="header-anchor" href="#count"><span>count</span></a>
    </h2>
    <p>
      The count modifier tells the log to increment a counter associated to the log's
      <a href="#label">label</a>.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/count"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="count-interface" tabindex="-1">
      <a class="header-anchor" href="#count-interface"><span>count Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="count-example" tabindex="-1">
      <a class="header-anchor" href="#count-example"><span>count Example</span></a>
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
<span class="line"><span class="token comment">// A GlobalStore is required for labels and modifiers that depend on them</span></span>
<span class="line"><span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Counting iterations.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="count-output" tabindex="-1">
      <a class="header-anchor" href="#count-output"><span>count Output</span></a>
    </h3>
    <p>
      <img src="@source/getting-started/examples/count-example.png" alt="Count modifier output" />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/count-terminal-example.png"
        alt="Count modifier terminal output"
      />
    </p>
    <h2 id="countclear" tabindex="-1">
      <a class="header-anchor" href="#countclear"><span>countClear</span></a>
    </h2>
    <p>
      The countClear modifier completely clears the count from a <a href="#label">label</a>. Rather
      than setting the count to 0 it instead becomes null.
    </p>
    <p>
      <em>NOTE:</em> This method is deliberately a modifier rather than a terminator because it
      forces you to write a log that gives you insight into when a counter was cleared. It also
      makes the countClear log recallable from the <a href="/guide/globalstore">GlobalStore</a> in
      the order it was created.
    </p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="countclear-interface" tabindex="-1">
      <a class="header-anchor" href="#countclear-interface"><span>countClear Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">countClear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="countclear-example" tabindex="-1">
      <a class="header-anchor" href="#countclear-example"><span>countClear Example</span></a>
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
<span class="line"><span class="token comment">// A GlobalStore is required for labels and modifiers that depend on them</span></span>
<span class="line"><span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Counting iterations.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>countClear<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Clearing the counter.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'A log with the my-counter label but no count.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="countclear-output" tabindex="-1">
      <a class="header-anchor" href="#countclear-output"><span>countClear Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/countClear-example.png"
        alt="count clear modifier example output"
      />
    </p>
    <h2 id="countreset" tabindex="-1">
      <a class="header-anchor" href="#countreset"><span>countReset</span></a>
    </h2>
    <p>
      The countReset modifier resets the counter associated to the log's
      <a href="#label">label</a> to 0.
    </p>
    <p>
      <em>NOTE:</em> This method is deliberately a modifier rather than a terminator because it
      forces you to write a log that gives you insight into when a counter was reset. It also makes
      the countReset log recallable from a <a href="/guide/globalstore">GlobalStore</a> in the order
      it was created.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="countreset-interface" tabindex="-1">
      <a class="header-anchor" href="#countreset-interface"><span>countReset Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">countReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="countreset-example" tabindex="-1">
      <a class="header-anchor" href="#countreset-example"><span>countReset Example</span></a>
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
<span class="line"><span class="token comment">// A GlobalStore is required for labels and modifiers that depend on them</span></span>
<span class="line"><span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Counting iterations.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>countReset<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Resetting the counter.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Counting iterations again.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="countreset-output" tabindex="-1">
      <a class="header-anchor" href="#countreset-output"><span>countReset Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/countReset-example.png"
        alt="count reset modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/countReset-terminal-example.png"
        alt="count reset modifier example terminal output"
      />
    </p>
    <h2 id="dir" tabindex="-1">
      <a class="header-anchor" href="#dir"><span>dir</span></a>
    </h2>
    <p>
      The dir modifier transforms the output of the log by directing it to use the
      <code v-pre>console.dir()</code> method for printing purposes only.
    </p>
    <p>
      <em>NOTE:</em> Logs that use <code v-pre>dir</code> as a modifier should only be given a
      single argument which is usually an object. If multiple arguments are given, behavior may
      differ between browser and node environments. Refer to the MDN docs for more details.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/dir"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="dir-interface" tabindex="-1">
      <a class="header-anchor" href="#dir-interface"><span>dir Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="dir-example" tabindex="-1">
      <a class="header-anchor" href="#dir-example"><span>dir Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dir<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="dir-output" tabindex="-1">
      <a class="header-anchor" href="#dir-output"><span>dir Output</span></a>
    </h3>
    <p><img src="@source/getting-started/examples/dir-example.png" alt="dir modifier output" /></p>
    <p>
      <img
        src="@source/getting-started/examples/dir-terminal-example.png"
        alt="dir modifier terminal output"
      />
    </p>
    <h2 id="dirxml" tabindex="-1">
      <a class="header-anchor" href="#dirxml"><span>dirxml</span></a>
    </h2>
    <p>
      The dirxml modifier transforms the output of the log by directing it to use the
      <code v-pre>console.dirxml()</code> method for printing purposes only. This is mainly useful
      for logging out DOM elements.
    </p>
    <p>
      <em>NOTE:</em> Logs that use <code v-pre>dirxml</code> as a modifier should only be given a
      single argument which is usually a DOM Element or other XML object. If multiple arguments are
      given, behavior may differ between browser and node environments. Refer to the MDN docs for
      more details.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="dirxml-interface" tabindex="-1">
      <a class="header-anchor" href="#dirxml-interface"><span>dirxml Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">dirxml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="dirxml-example" tabindex="-1">
      <a class="header-anchor" href="#dirxml-example"><span>dirxml Example</span></a>
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
<span class="line"><span class="token comment">// create a new div element</span></span>
<span class="line"><span class="token keyword">const</span> newDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">newDiv<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// and give it some content</span></span>
<span class="line"><span class="token keyword">const</span> newContent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">'Hi there and greetings!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// add the text node to the newly created div</span></span>
<span class="line">newDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dirxml<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newDiv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="dirxml-output" tabindex="-1">
      <a class="header-anchor" href="#dirxml-output"><span>dirxml Output</span></a>
    </h3>
    <p>
      <img src="@source/getting-started/examples/dirxml-example.png" alt="dirxml modifier output" />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/dirxml-terminal-example.png"
        alt="dirxml modifier terminal output"
      />
    </p>
    <h2 id="dump" tabindex="-1">
      <a class="header-anchor" href="#dump"><span>dump</span></a>
    </h2>
    <p>
      This modifier instructs the <a href="#label">labeled</a> log to print the context values from
      a <a href="#thread">thread</a>.
    </p>
    <p>
      Refer to the
      <RouteLink to="/getting-started/mapped-diagnostic-context.html"
        >Mapped Diagnostic Context (MDC)</RouteLink
      >
      page for more information about the purpose of MDC.
    </p>
    <p>
      This modifier is dependent upon having a <a href="#label">label</a> and a
      <RouteLink to="/getting-started/globalstore-concepts.html">GlobalStore</RouteLink>.
    </p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="dump-interface" tabindex="-1">
      <a class="header-anchor" href="#dump-interface"><span>dump Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="dump-example" tabindex="-1">
      <a class="header-anchor" href="#dump-example"><span>dump Example</span></a>
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
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Creating a GlobalStore listener is a great way to get meta data from your</span></span>
<span class="line"><span class="token comment">// threaded logs to write to disk or pass to another plugin, library,</span></span>
<span class="line"><span class="token comment">// or service.</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">log</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do something with `log.context.added` or `log.context.subtracted`.</span></span>
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
      </div>
    </div>
    <h3 id="dump-output" tabindex="-1">
      <a class="header-anchor" href="#dump-output"><span>dump Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/dump-example.png"
        alt="dump modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/dump-terminal-example.png"
        alt="dump modifier terminal example output"
      />
    </p>
    <h2 id="group" tabindex="-1">
      <a class="header-anchor" href="#group"><span>group</span></a>
    </h2>
    <p>
      The group modifier starts an uncollapsed group of logs. This means that all subsequent logs
      will be nested beneath this log until a <a href="#groupEnd">groupEnd</a> log occurs.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/group"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="group-interface" tabindex="-1">
      <a class="header-anchor" href="#group-interface"><span>group Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="group-example" tabindex="-1">
      <a class="header-anchor" href="#group-example"><span>group Example</span></a>
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
<span class="line"><span class="token comment">// Some info about our app.</span></span>
<span class="line"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">'v1.0.0'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token string">'firefox'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>group<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App Information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Version: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Browser: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>browser<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>groupEnd<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="group-output" tabindex="-1">
      <a class="header-anchor" href="#group-output"><span>group Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/group-example.png"
        alt="group modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/group-terminal-example.png"
        alt="group modifier terminal example output"
      />
    </p>
    <h2 id="groupcollapsed" tabindex="-1">
      <a class="header-anchor" href="#groupcollapsed"><span>groupCollapsed</span></a>
    </h2>
    <p>
      The groupCollapsed modifier starts an collapsed group of logs. This means that all subsequent
      logs will be nested beneath this log until a <a href="#groupEnd">groupEnd</a> log occurs.
    </p>
    <p>
      <em>Note:</em> This will not be collapsed in a terminal environment since there is no way to
      uncollapse it.
    </p>
    <p>
      <a href="1"><strong>MDN Docs</strong></a>
    </p>
    <h3 id="groupcollapsed-interface" tabindex="-1">
      <a class="header-anchor" href="#groupcollapsed-interface"
        ><span>groupCollapsed Interface</span></a
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
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">groupCollapsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="groupcollapsed-example" tabindex="-1">
      <a class="header-anchor" href="#groupcollapsed-example"
        ><span>groupCollapsed Example</span></a
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
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Some info about our app.</span></span>
<span class="line"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">'v1.0.0'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token string">'firefox'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>groupCollapsed<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App Information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Version: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Browser: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>browser<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>groupEnd<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="groupcollapsed-output" tabindex="-1">
      <a class="header-anchor" href="#groupcollapsed-output"><span>groupCollapsed Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/groupCollapsed-example.png"
        alt="groupCollapsed modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/groupCollapsed-terminal-example.png"
        alt="groupCollapsed modifier terminal example output"
      />
    </p>
    <h2 id="groupend" tabindex="-1">
      <a class="header-anchor" href="#groupend"><span>groupEnd</span></a>
    </h2>
    <p>
      The groupEnd modifier ends a log group. Any logs following a groupEnd will no longer be
      grouped.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="groupend-interface" tabindex="-1">
      <a class="header-anchor" href="#groupend-interface"><span>groupEnd Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="groupend-example" tabindex="-1">
      <a class="header-anchor" href="#groupend-example"><span>groupEnd Example</span></a>
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
<span class="line"><span class="token comment">// Some info about our app.</span></span>
<span class="line"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">'v1.0.0'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token string">'firefox'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>group<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App Information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Version: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Browser: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>browser<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>groupEnd<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- Ends the group</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Some other information...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="groupend-output" tabindex="-1">
      <a class="header-anchor" href="#groupend-output"><span>groupEnd Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/groupEnd-example.png"
        alt="groupEnd modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/groupEnd-terminal-example.png"
        alt="groupEnd modifier terminal example output"
      />
    </p>
    <h2 id="label" tabindex="-1">
      <a class="header-anchor" href="#label"><span>label</span></a>
    </h2>
    <p>
      Applies an identifying label to a log. If a
      <RouteLink to="/globalstore-concepts.html">GlobalStore</RouteLink> is present, all logs that
      share the same label will be linked together behind the scenes. This enables global tracking
      for modifiers that require a label as a prerequisite.
    </p>
    <p>
      These are the modifiers that require a label and a
      <RouteLink to="/globalstore-concepts.html">GlobalStore</RouteLink> to be useful:
    </p>
    <ul>
      <li><a href="#count">count</a></li>
      <li><a href="#countreset">countReset</a></li>
      <li><a href="#countclear">countClear</a></li>
      <li><a href="#time">time</a></li>
      <li><a href="#timenow">timeNow</a></li>
      <li><a href="#timeend">timeEnd</a></li>
    </ul>
    <p><em>This is not a standard API.</em></p>
    <h3 id="label-interface" tabindex="-1">
      <a class="header-anchor" href="#label-interface"><span>label Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">label</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="label-example" tabindex="-1">
      <a class="header-anchor" href="#label-example"><span>label Example</span></a>
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
<span class="line"><span class="token comment">// Labels can be applied in any order in a modifier chain</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="label-output" tabindex="-1">
      <a class="header-anchor" href="#label-output"><span>label Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/label-example.png"
        alt="label modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/label-terminal-example.png"
        alt="label modifier terminal example output"
      />
    </p>
    <h2 id="meta" tabindex="-1">
      <a class="header-anchor" href="#meta"><span>meta</span></a>
    </h2>
    <p>
      The meta modifier allows you to attach meta data to your log instance. You can then retrieve
      it at a later time from within a log listener or by calling the
      <code v-pre>data()</code> method on a log instance.
    </p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="meta-interface" tabindex="-1">
      <a class="header-anchor" href="#meta-interface"><span>meta Interface</span></a>
    </h3>
    <blockquote>
      <p>
        The interface of
        <code v-pre>meta&lt;KV extends [string, any]&gt;(...[key, val]: KV): this;</code> is
        available for Adze versions &gt;= 1.2.0
      </p>
    </blockquote>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Types are Overloaded</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">meta</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">meta</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">KV</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> val<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">KV</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="meta-example" tabindex="-1">
      <a class="header-anchor" href="#meta-example"><span>meta Example</span></a>
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
<span class="line"><span class="token comment">// Let's optionally create a GlobalStore to show the use of meta data on listeners</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We'll listen only to logs of level 6 which is "log"</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"My log's meta data!"</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>meta<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a super important message to attach as meta data</span></span>
<span class="line"><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token string">'Hello World!'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">meta</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log contains an important message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's optionally create a GlobalStore to show the use of meta data on listeners</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We'll listen only to logs of level 6 which is "log"</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"My log's meta data!"</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>meta<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a super important message to attach as meta data</span></span>
<span class="line"><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token string">'Hello World!'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">meta</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log contains an important message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="meta-output" tabindex="-1">
      <a class="header-anchor" href="#meta-output"><span>meta Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/meta-example.png"
        alt="meta modifier output with listener output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/meta-terminal-example.png"
        alt="meta modifier terminal output with listener output"
      />
    </p>
    <h2 id="namespace-ns" tabindex="-1">
      <a class="header-anchor" href="#namespace-ns"><span>namespace / ns</span></a>
    </h2>
    <p>
      This modifier adds one or more namespaces to a log. Multiple calls to the namespace modifier
      are additive by nature and will not overwrite previously applied namespaces. These are mainly
      used as human readable group identifiers but are also useful for filtering recalled logs and
      for identifying logs from a log listener. This modifier does not do any special grouping under
      the hood. The <code v-pre>ns()</code> method is just a shorter alias for
      <code v-pre>namespace()</code>.
    </p>
    <p>
      Adze also supports passing a Constraints type to the log factory that will allow you to
      centrally specify what namespaces are allowed to be used. This is beneficial because it will
      force users to add any new namespace that they might want to add to the central
      <code v-pre>allowedNamespaces</code> type property. This will make it easier to filter
      namespaces throughout your application because you will only have a single place to look to
      understand what namespaces are being used.
    </p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="namespace-ns-interface" tabindex="-1">
      <a class="header-anchor" href="#namespace-ns-interface"
        ><span>namespace / ns Interface</span></a
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
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">namespace</span><span class="token punctuation">(</span>ns<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">ns</span><span class="token punctuation">(</span>ns<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// Or alternatively with the restof operator (versions >= 1.5.0)</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">namespace</span><span class="token punctuation">(</span><span class="token operator">...</span>ns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">ns</span><span class="token punctuation">(</span><span class="token operator">...</span>ns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="namespace-ns-example" tabindex="-1">
      <a class="header-anchor" href="#namespace-ns-example"><span>namespace / ns Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">namespace</span><span class="token punctuation">(</span><span class="token string">'tix-123'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Important info for a feature.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">namespace</span><span class="token punctuation">(</span><span class="token string">'tix-123'</span><span class="token punctuation">,</span> <span class="token string">'tix-456'</span><span class="token punctuation">,</span> <span class="token string">'tix-789'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Multiple namespace entry simplified by the restof operator.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ns() is a shorthand alias for namespace()</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'tix-456'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'More info'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Multiple calls to namespace/ns are additive</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log has all applied namespaces.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//----- Example with TS Constraints -----//</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> Constraints <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// First we will create our app constraints by extending the Constraint interface</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">MyAppConstraints</span> <span class="token keyword">extends</span> <span class="token class-name">Constraints</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedNamespaces</span><span class="token operator">:</span> <span class="token string">'foo'</span> <span class="token operator">|</span> <span class="token string">'bar'</span> <span class="token operator">|</span> <span class="token string">'hello'</span> <span class="token operator">|</span> <span class="token string">'world'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we apply the constraints to our app's logger factory</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token operator">&lt;</span>MyAppConstraints<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now when we define namespaces for a log a type error will be thrown if the</span></span>
<span class="line"><span class="token comment">// namespace provided isn't in the allowedNamespaces union type.</span></span>
<span class="line"><span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'This is not allowed.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//                        ^^^^^</span></span>
<span class="line"><span class="token comment">// Argument of type '"baz"' is not assignable to parameter of type '"foo" | "bar" | "hello" | "world"'.</span></span>
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
      </div>
    </div>
    <h3 id="namespace-ns-output" tabindex="-1">
      <a class="header-anchor" href="#namespace-ns-output"><span>namespace / ns Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/namespace-example.png"
        alt="namespace modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/namespace-terminal-example.png"
        alt="namespace modifier terminal example output"
      />
    </p>
    <h2 id="silent" tabindex="-1">
      <a class="header-anchor" href="#silent"><span>silent</span></a>
    </h2>
    <p>
      The silent modifier allows a log to be terminated and cached but prevents it from printing to
      the console. This can be useful for providing a log to a log listener that you do not want to
      have printed.
    </p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="silent-interface" tabindex="-1">
      <a class="header-anchor" href="#silent-interface"><span>silent Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">silent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="silent-example" tabindex="-1">
      <a class="header-anchor" href="#silent-example"><span>silent Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>silent<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Crickets...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I guess nobody is home :('</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="silent-output" tabindex="-1">
      <a class="header-anchor" href="#silent-output"><span>silent Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/silent-example.png"
        alt="example of silent log output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/silent-terminal-example.png"
        alt="example of silent log terminal output"
      />
    </p>
    <h2 id="table" tabindex="-1">
      <a class="header-anchor" href="#table"><span>table</span></a>
    </h2>
    <p>
      The table modifier transforms the output of the log by directing it to use the
      <code v-pre>console.table()</code> method for printing purposes only.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/table"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="table-interface" tabindex="-1">
      <a class="header-anchor" href="#table-interface"><span>table Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">table</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="table-example" tabindex="-1">
      <a class="header-anchor" href="#table-example"><span>table Example</span></a>
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
<span class="line"><span class="token keyword">const</span> tabular_data <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Andrew'</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Stacy'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Jim'</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Bob'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>table<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tabular_data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="table-output" tabindex="-1">
      <a class="header-anchor" href="#table-output"><span>table Output</span></a>
    </h3>
    <p>
      <img src="@source/getting-started/examples/table-example.png" alt="table modifier output" />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/table-terminal-example.png"
        alt="table modifier terminal output"
      />
    </p>
    <h2 id="test" tabindex="-1">
      <a class="header-anchor" href="#test"><span>test</span></a>
    </h2>
    <p>
      This modifier accepts a boolean expression and will only print if the boolean expression
      passes (is a truthy value).
    </p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="test-interface" tabindex="-1">
      <a class="header-anchor" href="#test-interface"><span>test Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">test</span><span class="token punctuation">(</span>expression<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="test-example" tabindex="-1">
      <a class="header-anchor" href="#test-example"><span>test Example</span></a>
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
<span class="line"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's test that x equals 2</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X equals 2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// This log will not print because the test fails</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X does not equal Y'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's look at the output with emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>y <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Y equals 3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="test-output" tabindex="-1">
      <a class="header-anchor" href="#test-output"><span>test Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/test-example.png"
        alt="test modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/test-terminal-example.png"
        alt="test modifier terminal example output"
      />
    </p>
    <h2 id="time" tabindex="-1">
      <a class="header-anchor" href="#time"><span>time</span></a>
    </h2>
    <p>
      This modifier starts a timer associated to the log's <a href="#label">label</a>. This is
      useful for taking performance measurements. A log with a time modifier must be followed by a
      log with a <a href="#timeend">timeEnd</a> modifier in order to get the final measurement.
    </p>
    <p>
      This modifier is dependent upon having a <a href="#label">label</a> and a
      <RouteLink to="/getting-started/globalstore-concepts.html">GlobalStore</RouteLink>.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/time"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="time-interface" tabindex="-1">
      <a class="header-anchor" href="#time-interface"><span>time Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="time-example" tabindex="-1">
      <a class="header-anchor" href="#time-example"><span>time Example</span></a>
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
<span class="line"><span class="token comment">// Let's create a timer for performance</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Starting a timer.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do a lot of stuff that takes time</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// End the timer to get the loop performance</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeEnd<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Performance of our loop.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's see the output with emoji's</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeEnd<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Performance of our loop.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="time-output" tabindex="-1">
      <a class="header-anchor" href="#time-output"><span>time Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/time-example.png"
        alt="time modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/time-terminal-example.png"
        alt="time modifier terminal example output"
      />
    </p>
    <h2 id="timeend" tabindex="-1">
      <a class="header-anchor" href="#timeend"><span>timeEnd</span></a>
    </h2>
    <p>
      This modifier ends a timer associated to the log's <a href="#label">label</a>. This is useful
      for taking performance measurements. A log with a timeEnd modifier must be preceded by a log
      with a <a href="#time">time</a> modifier in order to get the final measurement.
    </p>
    <p>
      This modifier is dependent upon having a <a href="#label">label</a> and a
      <RouteLink to="/getting-started/globalstore-concepts.html">GlobalStore</RouteLink>.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="timeend-interface" tabindex="-1">
      <a class="header-anchor" href="#timeend-interface"><span>timeEnd Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="timeend-example" tabindex="-1">
      <a class="header-anchor" href="#timeend-example"><span>timeEnd Example</span></a>
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
<span class="line"><span class="token comment">// Let's create a timer for performance</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Starting a timer.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do a lot of stuff that takes time</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// End the timer to get the loop performance</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeEnd<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Performance of our loop.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's see the output with emoji's</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeEnd<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Performance of our loop.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="timeend-output" tabindex="-1">
      <a class="header-anchor" href="#timeend-output"><span>timeEnd Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/time-example.png"
        alt="time end modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/time-terminal-example.png"
        alt="time end modifier example output"
      />
    </p>
    <h2 id="timenow" tabindex="-1">
      <a class="header-anchor" href="#timenow"><span>timeNow</span></a>
    </h2>
    <p>
      This modifier logs the time elapsed since the page has loaded. This is useful for measuring
      page load performance rather than performance of a particular piece of code. This modifier is
      <strong>not</strong> dependent upon a <a href="#label">label</a> or
      <RouteLink to="/getting-started/globalstore-concepts.html">GlobalStore</RouteLink>.
    </p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="timenow-interface" tabindex="-1">
      <a class="header-anchor" href="#timenow-interface"><span>timeNow Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">timeNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="timenow-example" tabindex="-1">
      <a class="header-anchor" href="#timenow-example"><span>timeNow Example</span></a>
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
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do a lot of stuff that takes time</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a timer for performance</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Recording the time elapsed since page load.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's see what it looks like with emoji's enabled.</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Recording the time elapsed since page load.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="timenow-output" tabindex="-1">
      <a class="header-anchor" href="#timenow-output"><span>timeNow Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/timeNow-example.png"
        alt="time now modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/timeNow-terminal-example.png"
        alt="time now modifier terminal example output"
      />
    </p>
    <h2 id="timestamp" tabindex="-1">
      <a class="header-anchor" href="#timestamp"><span>timestamp</span></a>
    </h2>
    <p>
      This modifier instructs the log to render an
      <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener noreferrer"
        >ISO 8601</a
      >
      timestamp.
    </p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="timestamp-interface" tabindex="-1">
      <a class="header-anchor" href="#timestamp-interface"><span>timestamp Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="timestamp-example" tabindex="-1">
      <a class="header-anchor" href="#timestamp-example"><span>timestamp Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'timestamped'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log has a timestamp.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="timestamp-output" tabindex="-1">
      <a class="header-anchor" href="#timestamp-output"><span>timestamp Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/timestamp-example.png"
        alt="timestamp modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/timestamp-terminal-example.png"
        alt="timestamp modifier terminal example output"
      />
    </p>
    <h2 id="trace" tabindex="-1">
      <a class="header-anchor" href="#trace"><span>trace</span></a>
    </h2>
    <p>
      This modifier instructs the log to print a stacktrace using the standard
      <code v-pre>console.trace()</code> method.
    </p>
    <p>
      <em>NOTE:</em> The styling for logs using this modifier varies by browser. Chrome will render
      the log message with proper styling while Firefox will only render the message unstyled.
    </p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/trace"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="trace-interface" tabindex="-1">
      <a class="header-anchor" href="#trace-interface"><span>trace Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">trace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="trace-example" tabindex="-1">
      <a class="header-anchor" href="#trace-example"><span>trace Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>trace<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trying to find an issue...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="trace-output" tabindex="-1">
      <a class="header-anchor" href="#trace-output"><span>trace Output</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/examples/trace-example.png"
        alt="trace modifier example output"
      />
    </p>
    <p>
      <img
        src="@source/getting-started/examples/trace-terminal-example.png"
        alt="trace modifier example terminal output"
      />
    </p>
  </div>
</template>

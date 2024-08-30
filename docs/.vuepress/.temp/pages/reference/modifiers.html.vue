<template><div><h1 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers"><span>Modifiers</span></a></h1>
<p>Once you have an Adze log instance you can now start applying modifiers. Modifiers are methods that alter the log in some way and then return
the log instance so that you may chain more modifiers or terminate the instance. Keep in mind, some modifiers have a dependency on the presence of a <a href="#label">label</a> and labels rely on GlobalStore.</p>
<h2 id="assert" tabindex="-1"><a class="header-anchor" href="#assert"><span>assert</span></a></h2>
<p>This modifier accepts an assertion boolean expression and will only print if the boolean expression fails (is a falsy value).</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/assert" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">assert</span><span class="token punctuation">(</span>expression<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's assert that x and y should be equal</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X does not equal Y'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// This log will not print because the assertion passes</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X does not equal 2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's look at the output with emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X does not equal Y'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output" tabindex="-1"><a class="header-anchor" href="#browser-output"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/assert-example-browser.png" alt="assert modifier example browser output"></p>
<h4 id="standard-output" tabindex="-1"><a class="header-anchor" href="#standard-output"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/assert-example-node.png" alt="assert modifier example standard Output"></p>
<h2 id="closethread" tabindex="-1"><a class="header-anchor" href="#closethread"><span>closeThread</span></a></h2>
<p>This modifier closes a thread by deleting its tracked context from a shared label group.</p>
<p>This is used primarily in conjunction with a <a href="#label">label</a> and the <RouteLink to="/reference/terminators.html#thread">thread</RouteLink>
terminator for implementing <RouteLink to="/getting-started/threading.html">Threading</RouteLink>.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-1" tabindex="-1"><a class="header-anchor" href="#interface-1"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">closeThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'added'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">subtract</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'subtracted'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dump<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Results from our thread'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>closeThread<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Closing the foo thread.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dump<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Dumping the thread context after closing it.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-1" tabindex="-1"><a class="header-anchor" href="#browser-output-1"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/closeThread-example-browser.png" alt="close thread modifier example browser output"></p>
<h4 id="standard-output-1" tabindex="-1"><a class="header-anchor" href="#standard-output-1"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/closeThread-example-node.png" alt="close thread modifier example standard Output"></p>
<h2 id="count" tabindex="-1"><a class="header-anchor" href="#count"><span>count</span></a></h2>
<p>The count modifier tells the log to increment a counter associated to the log's <a href="#label">label</a>.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/count" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-2" tabindex="-1"><a class="header-anchor" href="#interface-2"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Counting iterations.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-2" tabindex="-1"><a class="header-anchor" href="#browser-output-2"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/count-example-browser.png" alt="Count modifier output"></p>
<h4 id="standard-output-2" tabindex="-1"><a class="header-anchor" href="#standard-output-2"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/count-example-node.png" alt="Count modifier terminal output"></p>
<h2 id="countclear" tabindex="-1"><a class="header-anchor" href="#countclear"><span>countClear</span></a></h2>
<p>The countClear modifier completely clears the count from a <a href="#label">label</a>. Rather than setting the
count to <code v-pre>0</code> it instead becomes <code v-pre>null</code>.</p>
<p><em>NOTE:</em>
This method is deliberately a modifier rather than a terminator because it forces you to write a log
that gives you insight into when a counter was cleared. It also makes the countClear log recallable
from the <a href="">global store</a> in the order it was created.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-3" tabindex="-1"><a class="header-anchor" href="#interface-3"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">countClear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Counting iterations.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>countClear<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Clearing the counter.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'A log with the my-counter label but no count.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span>Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/countClear-example.png" alt="count clear modifier example output"></p>
<h2 id="countreset" tabindex="-1"><a class="header-anchor" href="#countreset"><span>countReset</span></a></h2>
<p>The countReset modifier resets the counter associated to the log's <a href="#label">label</a> to <code v-pre>0</code>.</p>
<p><em>NOTE:</em>
This method is deliberately a modifier rather than a terminator because it forces you to write a log
that gives you insight into when a counter was reset. It also makes the countReset log recallable
from the <a href="/guide/globalstore">global store</a> in the order it was created.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-4" tabindex="-1"><a class="header-anchor" href="#interface-4"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">countReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Counting iterations.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>countReset<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Resetting the counter.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Counting iterations again.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-3" tabindex="-1"><a class="header-anchor" href="#browser-output-3"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/countReset-example-browser.png" alt="count reset modifier example browser output"></p>
<h4 id="standard-output-3" tabindex="-1"><a class="header-anchor" href="#standard-output-3"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/countReset-example-node.png" alt="count reset modifier example standard Output"></p>
<h2 id="dir" tabindex="-1"><a class="header-anchor" href="#dir"><span>dir</span></a></h2>
<p>The dir modifier transforms the output of the log by directing it to use the <code v-pre>console.dir()</code> method
for printing purposes only.</p>
<p><em>NOTE:</em> Logs that use <code v-pre>dir</code> as a modifier should only be given a single argument which is usually an
object. If multiple arguments are given, behavior may differ between browser and node environments.
Refer to the MDN docs for more details.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/dir" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-5" tabindex="-1"><a class="header-anchor" href="#interface-5"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>dir<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">'bar'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-4" tabindex="-1"><a class="header-anchor" href="#browser-output-4"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/dir-example-browser.png" alt="dir modifier browser output"></p>
<h4 id="standard-output-4" tabindex="-1"><a class="header-anchor" href="#standard-output-4"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/dir-example-node.png" alt="dir modifier standard output"></p>
<h2 id="dirxml" tabindex="-1"><a class="header-anchor" href="#dirxml"><span>dirxml</span></a></h2>
<p>The dirxml modifier transforms the output of the log by directing it to use the <code v-pre>console.dirxml()</code>
method for printing purposes only. This is mainly useful for logging out DOM elements.</p>
<p><em>NOTE:</em> Logs that use <code v-pre>dirxml</code> as a modifier should only be given a single argument which is usually
a DOM Element or other XML object. If multiple arguments are given, behavior may differ between
browser and node environments. Refer to the MDN docs for more details.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="dirxml-interface" tabindex="-1"><a class="header-anchor" href="#dirxml-interface"><span>dirxml Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">dirxml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-6" tabindex="-1"><a class="header-anchor" href="#example-6"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// create a new div element</span></span>
<span class="line"><span class="token keyword">const</span> newDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">newDiv<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// and give it some content</span></span>
<span class="line"><span class="token keyword">const</span> newContent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">'Hi there and greetings!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// add the text node to the newly created div</span></span>
<span class="line">newDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>dirxml<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newDiv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dump" tabindex="-1"><a class="header-anchor" href="#dump"><span>dump</span></a></h2>
<p>This modifier instructs the <a href="#label">labeled</a> log to print the context values from a <RouteLink to="/reference/terminators.html#thread">thread</RouteLink>.</p>
<p>Refer to the <RouteLink to="/getting-started/threading.html">threading</RouteLink> section of the <RouteLink to="/getting-started/">Getting Started</RouteLink>
guide for more information.</p>
<p>This modifier is dependent upon having a <a href="#label">label</a>.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-6" tabindex="-1"><a class="header-anchor" href="#interface-6"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-7" tabindex="-1"><a class="header-anchor" href="#example-7"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Creating a GlobalStore listener is a great way to get meta data from your</span></span>
<span class="line"><span class="token comment">// threaded logs to write to disk or pass to another plugin, library,</span></span>
<span class="line"><span class="token comment">// or service.</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>log<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do something with `log.data?.label?.context.added` or `log.data?.label?.context.subtracted`.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'added'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">subtract</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'subtracted'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dump<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Results from our thread'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-5" tabindex="-1"><a class="header-anchor" href="#browser-output-5"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/dump-example-browser.png" alt="dump modifier example browser output"></p>
<h4 id="standard-output-5" tabindex="-1"><a class="header-anchor" href="#standard-output-5"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/dump-example-node.png" alt="dump modifier example standard Output"></p>
<h2 id="format" tabindex="-1"><a class="header-anchor" href="#format"><span>format</span></a></h2>
<p>The format modifier sets the formatter that will be used for the log. This can also be used in
conjunction with the <RouteLink to="/reference/terminators.html#seal">seal</RouteLink> or <RouteLink to="/reference/terminators.html#sealTag">sealTag</RouteLink>
terminators to create specifically formatted child loggers.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-7" tabindex="-1"><a class="header-anchor" href="#interface-7"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">format</span><span class="token punctuation">(</span>format<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-8" tabindex="-1"><a class="header-anchor" href="#example-8"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'standard'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging a JSON formatted message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-6" tabindex="-1"><a class="header-anchor" href="#browser-output-6"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/format-example-browser.png" alt="format modifier browser output"></p>
<h4 id="standard-output-6" tabindex="-1"><a class="header-anchor" href="#standard-output-6"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/format-example-node.png" alt="format modifier standard output"></p>
<h2 id="group" tabindex="-1"><a class="header-anchor" href="#group"><span>group</span></a></h2>
<p>The group modifier starts an uncollapsed group of logs. This means that all subsequent logs will be
nested beneath this log until a <a href="#groupEnd">groupEnd</a> log occurs.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/group" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-8" tabindex="-1"><a class="header-anchor" href="#interface-8"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-9" tabindex="-1"><a class="header-anchor" href="#example-9"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Some info about our app.</span></span>
<span class="line"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">'v1.0.0'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token string">'firefox'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>group<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App Information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Version: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Browser: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>browser<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span>groupEnd<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-7" tabindex="-1"><a class="header-anchor" href="#browser-output-7"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/group-example-browser.png" alt="group modifier example browser output"></p>
<h4 id="standard-output-7" tabindex="-1"><a class="header-anchor" href="#standard-output-7"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/group-example-node.png" alt="group modifier example standard Output"></p>
<h2 id="groupcollapsed" tabindex="-1"><a class="header-anchor" href="#groupcollapsed"><span>groupCollapsed</span></a></h2>
<p>The groupCollapsed modifier starts an collapsed group of logs. This means that all subsequent logs
will be nested beneath this log until a <a href="#groupEnd">groupEnd</a> log occurs.</p>
<p><em>Note:</em> This will not be collapsed in a terminal environment since there is no way to uncollapse it.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/console/groupCollapsed_static" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-9" tabindex="-1"><a class="header-anchor" href="#interface-9"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">groupCollapsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-10" tabindex="-1"><a class="header-anchor" href="#example-10"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Some info about our app.</span></span>
<span class="line"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">'v1.0.0'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token string">'firefox'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>groupCollapsed<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App Information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Version: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Browser: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>browser<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span>groupEnd<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-8" tabindex="-1"><a class="header-anchor" href="#browser-output-8"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/groupCollapsed-example-browser.png" alt="groupCollapsed modifier example output"></p>
<h4 id="standard-output-8" tabindex="-1"><a class="header-anchor" href="#standard-output-8"><span>Standard Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/groupCollapsed-example-node.png" alt="groupCollapsed modifier terminal example output"></p>
<h2 id="groupend" tabindex="-1"><a class="header-anchor" href="#groupend"><span>groupEnd</span></a></h2>
<p>The groupEnd modifier ends a log group. Any logs following a groupEnd will no longer be grouped.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-10" tabindex="-1"><a class="header-anchor" href="#interface-10"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-11" tabindex="-1"><a class="header-anchor" href="#example-11"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Some info about our app.</span></span>
<span class="line"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">'v1.0.0'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token string">'firefox'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>group<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App Information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Version: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Browser: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>browser<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span>groupEnd<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- Ends the group</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Some other information...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-9" tabindex="-1"><a class="header-anchor" href="#browser-output-9"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/groupEnd-example-browser.png" alt="groupEnd modifier example browser output"></p>
<h4 id="node-output" tabindex="-1"><a class="header-anchor" href="#node-output"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/groupEnd-example-node.png" alt="groupEnd modifier example node output"></p>
<h2 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h2>
<p>This modifier accepts a boolean expression and will only print if the boolean expression passes (is
a truthy value). This modifier is the opposite behavior of the <a href="#assert">assert</a> modifier.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-11" tabindex="-1"><a class="header-anchor" href="#interface-11"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">if</span><span class="token punctuation">(</span>expression<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-12" tabindex="-1"><a class="header-anchor" href="#example-12"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Print the log if x equals 2</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">if</span><span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X equals 2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// This log will not print because the if fails</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">if</span><span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'X does not equal Y'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's look at the output with emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">if</span><span class="token punctuation">(</span>y <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Y equals 3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-10" tabindex="-1"><a class="header-anchor" href="#browser-output-10"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/if-example-browser.png" alt="if modifier example browser output"></p>
<h4 id="node-output-1" tabindex="-1"><a class="header-anchor" href="#node-output-1"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/if-example-node.png" alt="if modifier example node output"></p>
<h2 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>label</span></a></h2>
<p>Applies an identifying label to a log. All logs that share the same label will be linked together in
the <a href="">Global Store</a>. This enables global tracking for modifiers that require a label as a
prerequisite.</p>
<p>These are the modifiers and terminators that require a label to be useful:</p>
<ul>
<li><a href="#count">count</a></li>
<li><a href="#countreset">countReset</a></li>
<li><a href="#countclear">countClear</a></li>
<li><a href="#closeThread">closeThread</a></li>
<li><RouteLink to="/reference/terminators.html#thread">thread</RouteLink></li>
<li><a href="#time">time</a></li>
<li><a href="#timenow">timeNow</a></li>
<li><a href="#timeend">timeEnd</a></li>
</ul>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-12" tabindex="-1"><a class="header-anchor" href="#interface-12"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">label</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-13" tabindex="-1"><a class="header-anchor" href="#example-13"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Labels can be applied in any order in a modifier chain</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-11" tabindex="-1"><a class="header-anchor" href="#browser-output-11"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/label-example-browser.png" alt="label modifier example output"></p>
<h4 id="node-output-2" tabindex="-1"><a class="header-anchor" href="#node-output-2"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/label-example-node.png" alt="label modifier terminal example output"></p>
<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>meta</span></a></h2>
<p>The meta modifier allows you to attach meta data to your log instance. You can then retrieve it at a
later time from within a log listener or by calling the <code v-pre>data()</code> method on a log instance.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-13" tabindex="-1"><a class="header-anchor" href="#interface-13"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Types are Overloaded</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">meta</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">meta</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">KV</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> val<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">KV</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="basic-example" tabindex="-1"><a class="header-anchor" href="#basic-example"><span>Basic Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a super important message to attach as meta data</span></span>
<span class="line"><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token string">'Hello World!'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">meta</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log contains an important message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-with-generic-type-ts-only" tabindex="-1"><a class="header-anchor" href="#example-with-generic-type-ts-only"><span>Example with Generic Type (TS Only)</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">JsonLogFormatMeta</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We'll setup our logger to output JSON.</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  format<span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze</span>
<span class="line">  <span class="token comment">// The type here ⬇️ ensures that you input the values required by the JSON formatter.</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token generic-function"><span class="token function">meta</span><span class="token generic class-name"><span class="token operator">&lt;</span>JsonLogFormatMeta<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> hostname<span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'myapp'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log contains an important message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-with-listener" tabindex="-1"><a class="header-anchor" href="#example-with-listener"><span>Example with Listener</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's optionally create a GlobalStore to show the use of meta data on listeners</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We'll listen only to logs of level 6 which is "log"</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'log'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>log<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"My log's meta data!"</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>data<span class="token operator">?.</span>meta<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">meta</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log contains an important message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-from-listener" tabindex="-1"><a class="header-anchor" href="#browser-output-from-listener"><span>Browser Output from Listener</span></a></h4>
<p><img src="@source/reference/examples/modifiers/meta-example-browser.png" alt="meta modifier browser output with listener output"></p>
<h4 id="node-output-from-listener" tabindex="-1"><a class="header-anchor" href="#node-output-from-listener"><span>Node Output from Listener</span></a></h4>
<p><img src="@source/reference/examples/modifiers/meta-example-node.png" alt="meta modifier node output with listener output"></p>
<h2 id="namespace-ns" tabindex="-1"><a class="header-anchor" href="#namespace-ns"><span>namespace / ns</span></a></h2>
<p>This modifier adds one or more namespaces to a log. These are mainly used as
human readable group identifiers but are also useful for filtering logs and for identifying logs
from a log listener. This modifier does not do any special grouping under the hood.</p>
<p>Multiple calls to the namespace modifier are additive by nature and will not overwrite previously
applied namespaces. This is especially useful when working with <RouteLink to="/reference/terminators.html#seal">sealed</RouteLink>
child loggers.</p>
<p>The <code v-pre>ns()</code> method is just a shorter alias for <code v-pre>namespace()</code>.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-14" tabindex="-1"><a class="header-anchor" href="#interface-14"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">namespace</span><span class="token punctuation">(</span><span class="token operator">...</span>ns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">ns</span><span class="token punctuation">(</span><span class="token operator">...</span>ns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-14" tabindex="-1"><a class="header-anchor" href="#example-14"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">namespace</span><span class="token punctuation">(</span><span class="token string">'tix-123'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Important info for a feature.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">namespace</span><span class="token punctuation">(</span><span class="token string">'tix-123'</span><span class="token punctuation">,</span> <span class="token string">'tix-456'</span><span class="token punctuation">,</span> <span class="token string">'tix-789'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Multiple namespace entry simplified by the restof operator.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ns() is a shorthand alias for namespace()</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'tix-456'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'More info'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Multiple calls to namespace/ns are additive</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log has all applied namespaces.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-12" tabindex="-1"><a class="header-anchor" href="#browser-output-12"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/namespace-example-browser-1.png" alt="namespace modifier example browser output"></p>
<h4 id="node-output-3" tabindex="-1"><a class="header-anchor" href="#node-output-3"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/namespace-example-node-1.png" alt="namespace modifier terminal example output"></p>
<h3 id="namespaces-with-constraints" tabindex="-1"><a class="header-anchor" href="#namespaces-with-constraints"><span>Namespaces with Constraints</span></a></h3>
<p>Adze also supports passing a constraints type when <RouteLink to="/reference/terminators.html#seal">sealing</RouteLink> a new logger or
when calling the <a href="">setup</a> function. This is beneficial because it will force users to add any
new namespace to the central constraints type. This will make it easier to filter namespaces
throughout your application because you will only have a single place to reference to understand
what namespaces are being used.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// First we will create our app namespace constraints.</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">AllowedNamespaces</span> <span class="token operator">=</span> <span class="token string">'foo'</span> <span class="token operator">|</span> <span class="token string">'bar'</span> <span class="token operator">|</span> <span class="token string">'hello'</span> <span class="token operator">|</span> <span class="token string">'world'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We can apply it when we call the `setup` function, or...</span></span>
<span class="line"><span class="token generic-function"><span class="token function">setup</span><span class="token generic class-name"><span class="token operator">&lt;</span>AllowedNamespaces<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Alternatively, we can apply the namespace constraint type when sealing a child logger.</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">seal</span><span class="token generic class-name"><span class="token operator">&lt;</span>AllowedNamespaces<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now when we define namespaces for a log a type error will be thrown if the</span></span>
<span class="line"><span class="token comment">// namespace provided isn't in the allowedNamespaces union type.</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'This is not allowed.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//                      ~~~~~</span></span>
<span class="line"><span class="token comment">// Argument of type '"baz"' is not assignable to parameter of type '"foo" | "bar" | "hello" | "world"'.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="silent" tabindex="-1"><a class="header-anchor" href="#silent"><span>silent</span></a></h2>
<p>The silent modifier allows a log to be terminated and cached but prevents it from printing to the
console. Because the log is still processed, it will still trigger <a href="">middleware hooks</a> and
<a href="">listeners</a>.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-15" tabindex="-1"><a class="header-anchor" href="#interface-15"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">silent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-15" tabindex="-1"><a class="header-anchor" href="#example-15"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Knock knock!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span>silent<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Crickets...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I guess nobody is home :('</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-13" tabindex="-1"><a class="header-anchor" href="#browser-output-13"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/silent-example-browser.png" alt="example of silent log browser output"></p>
<h4 id="node-output-4" tabindex="-1"><a class="header-anchor" href="#node-output-4"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/silent-example-node.png" alt="example of silent log node output"></p>
<h2 id="table" tabindex="-1"><a class="header-anchor" href="#table"><span>table</span></a></h2>
<p>The table modifier transforms the output of the log by directing it to use the <code v-pre>console.table()</code>
method for printing purposes only.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/table" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-16" tabindex="-1"><a class="header-anchor" href="#interface-16"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">table</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-16" tabindex="-1"><a class="header-anchor" href="#example-16"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> tabular_data <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">'Andrew'</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">'Stacy'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">'Jim'</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">'Bob'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>table<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tabular_data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-14" tabindex="-1"><a class="header-anchor" href="#browser-output-14"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/table-example-browser.png" alt="table modifier browser output"></p>
<h4 id="node-output-5" tabindex="-1"><a class="header-anchor" href="#node-output-5"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/table-example-node.png" alt="table modifier node output"></p>
<h2 id="time" tabindex="-1"><a class="header-anchor" href="#time"><span>time</span></a></h2>
<p>This modifier starts a timer associated to the log's <a href="#label">label</a>. This is useful for taking
performance measurements. A log with a time modifier must be followed by a log with a
<a href="#timeend">timeEnd</a> modifier in order to get the final measurement.</p>
<p>This modifier is dependent upon having a <a href="#label">label</a>.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/time" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-17" tabindex="-1"><a class="header-anchor" href="#interface-17"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-17" tabindex="-1"><a class="header-anchor" href="#example-17"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a timer for performance</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Starting a timer.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do a lot of stuff that takes time</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// End the timer to get the loop performance</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeEnd<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Performance of our loop.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's see the output with emoji's</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeEnd<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Performance of our loop.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-15" tabindex="-1"><a class="header-anchor" href="#browser-output-15"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/time-example-browser.png" alt="time modifier example browser output"></p>
<h4 id="node-output-6" tabindex="-1"><a class="header-anchor" href="#node-output-6"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/time-example-node.png" alt="time modifier example node output"></p>
<h2 id="timeend" tabindex="-1"><a class="header-anchor" href="#timeend"><span>timeEnd</span></a></h2>
<p>This modifier ends a timer associated to the log's <a href="#label">label</a>. This is useful for taking
performance measurements. A log with a timeEnd modifier must be preceded by a log with a
<a href="#time">time</a> modifier in order to get the final measurement.</p>
<p>This modifier is dependent upon having a <a href="#label">label</a>.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-18" tabindex="-1"><a class="header-anchor" href="#interface-18"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-18" tabindex="-1"><a class="header-anchor" href="#example-18"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a timer for performance</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Starting a timer.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do a lot of stuff that takes time</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// End the timer to get the loop performance</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeEnd<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Performance of our loop.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's see the output with emoji's</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeEnd<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Performance of our loop.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-16" tabindex="-1"><a class="header-anchor" href="#browser-output-16"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/timeEnd-example-browser.png" alt="time end modifier example browser output"></p>
<h4 id="node-output-7" tabindex="-1"><a class="header-anchor" href="#node-output-7"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/timeEnd-example-node.png" alt="time end modifier example node output"></p>
<h2 id="timenow" tabindex="-1"><a class="header-anchor" href="#timenow"><span>timeNow</span></a></h2>
<p>This modifier logs the time elapsed since the page has loaded. This is useful for measuring page
load performance rather than performance of a particular piece of code.</p>
<p>This modifier is <strong>not</strong> dependent upon a <a href="#label">label</a>.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-19" tabindex="-1"><a class="header-anchor" href="#interface-19"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">timeNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-19" tabindex="-1"><a class="header-anchor" href="#example-19"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do a lot of stuff that takes time</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a timer for performance</span></span>
<span class="line">adze<span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Recording the time elapsed since page load.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's see what it looks like with emoji's enabled.</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Recording the time elapsed since page load.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-17" tabindex="-1"><a class="header-anchor" href="#browser-output-17"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/timeNow-example-browser.png" alt="time now modifier example browser output"></p>
<h4 id="node-output-8" tabindex="-1"><a class="header-anchor" href="#node-output-8"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/timeNow-example-node.png" alt="time now modifier example node output"></p>
<h2 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp"><span>timestamp</span></a></h2>
<p>This modifier instructs the log to render an <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener noreferrer">ISO 8601</a>
timestamp.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-20" tabindex="-1"><a class="header-anchor" href="#interface-20"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-20" tabindex="-1"><a class="header-anchor" href="#example-20"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This log has a timestamp.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-18" tabindex="-1"><a class="header-anchor" href="#browser-output-18"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/timestamp-example-browser.png" alt="timestamp modifier example browser output"></p>
<h4 id="node-output-9" tabindex="-1"><a class="header-anchor" href="#node-output-9"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/timestamp-example-node.png" alt="timestamp modifier example node output"></p>
<h2 id="trace" tabindex="-1"><a class="header-anchor" href="#trace"><span>trace</span></a></h2>
<p>This modifier instructs the log to print a stacktrace using the standard <code v-pre>console.trace()</code> method.</p>
<p><em>NOTE:</em> The styling for logs using this modifier varies by browser. Chrome will render the log
message with proper styling while Firefox will only render the message unstyled.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/trace" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-21" tabindex="-1"><a class="header-anchor" href="#interface-21"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">trace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-21" tabindex="-1"><a class="header-anchor" href="#example-21"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>trace<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trying to find an issue...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-19" tabindex="-1"><a class="header-anchor" href="#browser-output-19"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/trace-example-browser.png" alt="trace modifier example browser output"></p>
<h4 id="node-output-10" tabindex="-1"><a class="header-anchor" href="#node-output-10"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/trace-example-node.png" alt="trace modifier example node output"></p>
<h2 id="withemoji" tabindex="-1"><a class="header-anchor" href="#withemoji"><span>withEmoji</span></a></h2>
<p>This modifier instructs the log to be printed with an emoji if the formatter supports it.</p>
<p>The only formatter that supports this out of the box is the <a href="">pretty</a> formatter.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-22" tabindex="-1"><a class="header-anchor" href="#interface-22"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">withEmoji</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Log<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-22" tabindex="-1"><a class="header-anchor" href="#example-22"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging with an emoji!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-20" tabindex="-1"><a class="header-anchor" href="#browser-output-20"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/withEmoji-example-browser.png" alt="with emoji modifier example browser output"></p>
<h4 id="node-output-11" tabindex="-1"><a class="header-anchor" href="#node-output-11"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/modifiers/withEmoji-example-node.png" alt="with emoji modifier example node output"></p>
</div></template>



<template><div><h1 id="terminators" tabindex="-1"><a class="header-anchor" href="#terminators"><span>Terminators</span></a></h1>
<p>When you have an Adze <RouteLink to="/reference/log-class.html">log</RouteLink> instance, and have applied your desired
<RouteLink to="/reference/modifiers.html">modifiers</RouteLink>, you must terminate the method chain. The methods used to terminate the
chain are called <strong>terminators</strong>.</p>
<p>Adze comes with <strong>9</strong> default log level terminators, all of which can be <a href="configuration">configured</a>.</p>
<table>
<thead>
<tr>
<th>Level</th>
<th>Name</th>
<th>Standard Method Used</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td><a href="#alert">alert</a></td>
<td>error</td>
</tr>
<tr>
<td>1</td>
<td><a href="#error">error</a></td>
<td>error</td>
</tr>
<tr>
<td>2</td>
<td><a href="#warn">warn</a></td>
<td>warn</td>
</tr>
<tr>
<td>3</td>
<td><a href="#info">info</a></td>
<td>info</td>
</tr>
<tr>
<td>4</td>
<td><a href="#fail">fail</a></td>
<td>info</td>
</tr>
<tr>
<td>5</td>
<td><a href="#success">success</a></td>
<td>info</td>
</tr>
<tr>
<td>6</td>
<td><a href="#log">log</a></td>
<td>log</td>
</tr>
<tr>
<td>7</td>
<td><a href="#debug">debug</a></td>
<td>debug</td>
</tr>
<tr>
<td>8</td>
<td><a href="#verbose">verbose</a></td>
<td>debug</td>
</tr>
</tbody>
</table>
<p>In addition to the default log levels, Adze provides a handful of other special terminators.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#clear">clear / clr</a></td>
<td>An alias for <code v-pre>console.clear()</code>.</td>
</tr>
<tr>
<td><a href="#warn">custom</a></td>
<td>Allows you to generate a log for a custom log level.</td>
</tr>
<tr>
<td><a href="#seal">seal</a></td>
<td>Allows you to create a child logger by sealing your log chain into a new logger class.</td>
</tr>
<tr>
<td><a href="#sealtag">sealTag</a></td>
<td>Allows you to create a child logger by sealing your log chain into a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates" target="_blank" rel="noopener noreferrer">template string literal tag function</a>.</td>
</tr>
<tr>
<td><a href="#thread">thread</a></td>
<td>Creates a context thread that can capture data points throughout multiple scopes of your application.</td>
</tr>
</tbody>
</table>
<h2 id="level-terminators" tabindex="-1"><a class="header-anchor" href="#level-terminators"><span>Level Terminators</span></a></h2>
<p>These are the basic level terminators that come with Adze by default.</p>
<h3 id="alert" tabindex="-1"><a class="header-anchor" href="#alert"><span>alert</span></a></h3>
<p>This level should only be used for logs that require immediate attention. This should be used
sparingly and only for the most critical of errors.</p>
<p><strong>Default log level</strong> = 0</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.error()</code></p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Something went horribly wrong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Something went horribly wrong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output" tabindex="-1"><a class="header-anchor" href="#browser-output"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/alert-example-browser.png" alt="alert example browser output"></p>
<h4 id="node-output" tabindex="-1"><a class="header-anchor" href="#node-output"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/alert-example-node.png" alt="alert example node output"></p>
<hr>
<h3 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h3>
<p>Use this for logging fatal errors or errors that impact functionality of your application.</p>
<p><strong>Default log level</strong> = 1</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.error()</code></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/error" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-1" tabindex="-1"><a class="header-anchor" href="#interface-1"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-1" tabindex="-1"><a class="header-anchor" href="#browser-output-1"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/error-example-browser.png" alt="error example browser output"></p>
<h4 id="node-output-1" tabindex="-1"><a class="header-anchor" href="#node-output-1"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/error-example-node.png" alt="error example node output"></p>
<hr>
<h3 id="warn" tabindex="-1"><a class="header-anchor" href="#warn"><span>warn</span></a></h3>
<p>Use this for logging issues that may impact app performance in a less impactful way than an error.</p>
<p><strong>Default log level</strong> = 2</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.warn()</code></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/warn" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-2" tabindex="-1"><a class="header-anchor" href="#interface-2"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">warn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"I'm warning you!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"I'm warning you!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-2" tabindex="-1"><a class="header-anchor" href="#browser-output-2"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/warn-example-browser.png" alt="warn example browser output"></p>
<h4 id="node-output-2" tabindex="-1"><a class="header-anchor" href="#node-output-2"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/warn-example-node.png" alt="warn example node output"></p>
<hr>
<h3 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h3>
<p>Use this for logging general insights into your application. This level does not indicate any
problems.</p>
<p><strong>Default log level</strong> = 3</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.info()</code></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/info" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-3" tabindex="-1"><a class="header-anchor" href="#interface-3"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-3" tabindex="-1"><a class="header-anchor" href="#browser-output-3"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/info-example-browser.png" alt="info example browser output"></p>
<h4 id="node-output-3" tabindex="-1"><a class="header-anchor" href="#node-output-3"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/info-example-node.png" alt="info example node output"></p>
<hr>
<h3 id="fail" tabindex="-1"><a class="header-anchor" href="#fail"><span>fail</span></a></h3>
<p>Use this for logging network communication errors or other non-fatal errors that do not break your
application.</p>
<p><strong>Default log level</strong> = 4</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.info()</code></p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-4" tabindex="-1"><a class="header-anchor" href="#interface-4"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'An operation failed to execute!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'An operation failed to execute!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-4" tabindex="-1"><a class="header-anchor" href="#browser-output-4"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/fail-example-browser.png" alt="fail example browser output"></p>
<h4 id="node-output-4" tabindex="-1"><a class="header-anchor" href="#node-output-4"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/fail-example-node.png" alt="fail example node output"></p>
<hr>
<h3 id="success" tabindex="-1"><a class="header-anchor" href="#success"><span>success</span></a></h3>
<p>Use this for logging successful network communications or other successful operations within your
app.</p>
<p><strong>Default log level</strong> = 5</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.info()</code></p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-5" tabindex="-1"><a class="header-anchor" href="#interface-5"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'An operation was successful!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'An operation was successful!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-5" tabindex="-1"><a class="header-anchor" href="#browser-output-5"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/success-example-browser.png" alt="success example browser output"></p>
<h4 id="node-output-5" tabindex="-1"><a class="header-anchor" href="#node-output-5"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/success-example-node.png" alt="success example node output"></p>
<hr>
<h3 id="log" tabindex="-1"><a class="header-anchor" href="#log"><span>log</span></a></h3>
<p>Use this for general logging that doesn't apply to any of the lower levels.</p>
<p><strong>Default log level</strong> = 6</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.log()</code></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/log" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-6" tabindex="-1"><a class="header-anchor" href="#interface-6"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-6" tabindex="-1"><a class="header-anchor" href="#example-6"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging a message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging a message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-6" tabindex="-1"><a class="header-anchor" href="#browser-output-6"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/log-example-browser.png" alt="log example browser output"></p>
<h4 id="node-output-6" tabindex="-1"><a class="header-anchor" href="#node-output-6"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/log-example-node.png" alt="log example node output"></p>
<hr>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>debug</span></a></h3>
<p>Use this for logging information that you typically do not want to see unless you are debugging a
problem with your application. This is typically hidden by default.</p>
<p><strong>Default log level</strong> = 7</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.debug()</code></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/debug" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<h4 id="interface-7" tabindex="-1"><a class="header-anchor" href="#interface-7"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">debug</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-7" tabindex="-1"><a class="header-anchor" href="#example-7"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We need to raise the active log level to see debug logs.</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">activeLevel</span><span class="token operator">:</span> <span class="token string">'debug'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'Debugging an issue.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'Debugging an issue.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-7" tabindex="-1"><a class="header-anchor" href="#browser-output-7"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/debug-example-browser.png" alt="debug example browser output"></p>
<h4 id="node-output-7" tabindex="-1"><a class="header-anchor" href="#node-output-7"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/debug-example-node.png" alt="debug example node output"></p>
<hr>
<h3 id="verbose" tabindex="-1"><a class="header-anchor" href="#verbose"><span>verbose</span></a></h3>
<p>Use this for logging extremely detailed debugging information. Use this level when the values you
are logging are granular enough that they are no longer easily human readable.</p>
<p><strong>Default log level</strong> = 8</p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.debug()</code></p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-8" tabindex="-1"><a class="header-anchor" href="#interface-8"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">verbose</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-8" tabindex="-1"><a class="header-anchor" href="#example-8"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We need to raise the active log level to see verbose logs.</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">activeLevel</span><span class="token operator">:</span> <span class="token string">'verbose'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">verbose</span><span class="token punctuation">(</span><span class="token string">'Logging some extreme detail.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">verbose</span><span class="token punctuation">(</span><span class="token string">'Logging some extreme detail.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-8" tabindex="-1"><a class="header-anchor" href="#browser-output-8"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/verbose-example-browser.png" alt="verbose example browser output"></p>
<h4 id="node-output-8" tabindex="-1"><a class="header-anchor" href="#node-output-8"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/verbose-example-node.png" alt="verbose example node output"></p>
<hr>
<h2 id="other-terminators" tabindex="-1"><a class="header-anchor" href="#other-terminators"><span>Other Terminators</span></a></h2>
<p>Aside from the basic <a href="#level-terminators">level terminator</a> methods, Adze also exposes a few others
for different utility purposes.</p>
<h3 id="clear-clr" tabindex="-1"><a class="header-anchor" href="#clear-clr"><span>clear / clr</span></a></h3>
<p>This terminator simply exists as an alias for <code v-pre>console.clear()</code>.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/clear" target="_blank" rel="noopener noreferrer"><strong>MDN Docs</strong></a></p>
<p><strong>Standard Log Method:</strong> <code v-pre>console.clear()</code></p>
<h4 id="interface-9" tabindex="-1"><a class="header-anchor" href="#interface-9"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">clr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-9" tabindex="-1"><a class="header-anchor" href="#example-9"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is a log to be cleared.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span> </span></a></h2>
<h3 id="custom" tabindex="-1"><a class="header-anchor" href="#custom"><span>custom</span></a></h3>
<p>Terminates the log at the provided custom log level. Custom log levels are defined within the Adze
configuration object under the <a href=""><code v-pre>levels</code></a> property. Adze can be configured by the <a href="">setup</a>
function or by passing configuration to the <a href="#seal">seal</a> or <a href="#sealTag">sealTag</a> terminator.</p>
<p><a href="">Configuration Details</a></p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-10" tabindex="-1"><a class="header-anchor" href="#interface-10"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">custom</span><span class="token punctuation">(</span>levelName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-10" tabindex="-1"><a class="header-anchor" href="#example-10"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">levels</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">myLevel</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">levelName</span><span class="token operator">:</span> <span class="token string">'myLevel'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">style</span><span class="token operator">:</span></span>
<span class="line">        <span class="token string">'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">terminalStyle</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'white'</span><span class="token punctuation">,</span> <span class="token string">'bgMagenta'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">'👾'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">custom</span><span class="token punctuation">(</span><span class="token string">'myLevel'</span><span class="token punctuation">,</span> <span class="token string">'This is my custom log level.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">custom</span><span class="token punctuation">(</span><span class="token string">'myLevel'</span><span class="token punctuation">,</span> <span class="token string">'This is my custom log level with an emoji.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-9" tabindex="-1"><a class="header-anchor" href="#browser-output-9"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/custom-example-browser.png" alt="custom example browser output"></p>
<h4 id="node-output-9" tabindex="-1"><a class="header-anchor" href="#node-output-9"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/custom-example-node.png" alt="custom example node output"></p>
<hr>
<h3 id="seal" tabindex="-1"><a class="header-anchor" href="#seal"><span>seal</span></a></h3>
<p>The seal terminator is used for creating child loggers.</p>
<p>It allows you to setup your child logger by writing a log chain as you normally would, except that
instead of terminating it with a log level, you seal the configuration into a new
<RouteLink to="/reference/log-class.html">log class</RouteLink>.</p>
<p>The new <RouteLink to="/reference/log-class.html">log class</RouteLink> inherits all of the configuration of your log chain.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-11" tabindex="-1"><a class="header-anchor" href="#interface-11"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">seal</span><span class="token punctuation">(</span>cfg<span class="token operator">?</span><span class="token operator">:</span> UserConfiguration<span class="token punctuation">)</span><span class="token operator">:</span> SealedLog<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-11" tabindex="-1"><a class="header-anchor" href="#example-11"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'my-app'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is a log from my sealed child logger.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-10" tabindex="-1"><a class="header-anchor" href="#browser-output-10"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/seal-example-browser.png" alt="seal example browser output"></p>
<h4 id="node-output-10" tabindex="-1"><a class="header-anchor" href="#node-output-10"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/seal-example-node.png" alt="seal example node output"></p>
<hr>
<h3 id="sealtag" tabindex="-1"><a class="header-anchor" href="#sealtag"><span>sealTag</span></a></h3>
<p>The sealTag terminator is used for creating child loggers for a specific log level that can be used
as a convenient <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates" target="_blank" rel="noopener noreferrer">string template tag function</a>.</p>
<p>For instance, if you find yourself logging errors in catch functions repeatedly, you can create an
<code v-pre>Err</code> template tag function for logging the errors.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-12" tabindex="-1"><a class="header-anchor" href="#interface-12"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">sealTag</span><span class="token punctuation">(</span>method<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> cfg<span class="token operator">?</span><span class="token operator">:</span> UserConfiguration<span class="token punctuation">)</span><span class="token operator">:</span> SealedLog<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-12" tabindex="-1"><a class="header-anchor" href="#example-12"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">ERR</span> <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">sealTag</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'http://www.example.com/'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">ERR</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Failed to fetch from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-11" tabindex="-1"><a class="header-anchor" href="#browser-output-11"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/sealTag-example-browser.png" alt="sealTag example browser output"></p>
<h4 id="node-output-11" tabindex="-1"><a class="header-anchor" href="#node-output-11"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/sealTag-example-node.png" alt="sealTag example node output"></p>
<hr>
<h3 id="thread" tabindex="-1"><a class="header-anchor" href="#thread"><span>thread</span></a></h3>
<p>The thread terminator is used to create a <a href="https://www.baeldung.com/mdc-in-log4j-2-logback" target="_blank" rel="noopener noreferrer">Mapped Diagnostic Context</a>
where context values are recorded from multiple scopes but are output together in a single log. This
is used in conjunction with the <RouteLink to="/reference/modifiers.html#dump">dump modifier</RouteLink> for outputting the thread's
values.</p>
<p>Refer to <RouteLink to="/getting-started/threading.html">threading</RouteLink> in the Getting Started guide for more
information.</p>
<p><em>This is not a standard API.</em></p>
<h4 id="interface-13" tabindex="-1"><a class="header-anchor" href="#interface-13"><span>Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">thread</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-13" tabindex="-1"><a class="header-anchor" href="#example-13"><span>Example</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'maths'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'added'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'maths'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'subtracted'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'maths'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dump<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Results from our thread'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browser-output-12" tabindex="-1"><a class="header-anchor" href="#browser-output-12"><span>Browser Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/thread-example-browser.png" alt="thread example browser output"></p>
<h4 id="node-output-12" tabindex="-1"><a class="header-anchor" href="#node-output-12"><span>Node Output</span></a></h4>
<p><img src="@source/reference/examples/terminators/thread-example-node.png" alt="thread example node output"></p>
</div></template>



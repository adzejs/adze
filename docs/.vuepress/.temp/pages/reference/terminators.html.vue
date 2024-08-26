<template><div><h1 id="terminators" tabindex="-1"><a class="header-anchor" href="#terminators"><span>Terminators</span></a></h1>
<p>When you have an Adze <RouteLink to="/reference/log-class.html">log</RouteLink> instance, and have applied your desired
<RouteLink to="/reference/modifiers.html">modifiers</RouteLink>, you must terminate the method chain. The methods used to terminate the
chain are called <strong>terminators</strong>.</p>
<p>Adze comes with 9 default log level terminators, all of which can be <a href="configuration">configured</a>.</p>
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
<td><a href="#sealTag">sealTag</a></td>
<td>Allows you to create a child logger by sealing your log chain into a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates" target="_blank" rel="noopener noreferrer">template string literal tag function</a>.</td>
</tr>
<tr>
<td><a href="#thread">thread</a></td>
<td>Creates a context thread that can capture data points throughout multiple scopes of your application.</td>
</tr>
</tbody>
</table>
<h2 id="alert" tabindex="-1"><a class="header-anchor" href="#alert"><span>alert</span></a></h2>
<p>This level should only be used for logs that require immediate attention. This should be used
sparingly and only for the most critical of errors.</p>
<p><strong>Default log level</strong> = 0</p>
<p><strong>Standard Log Method:</strong> error</p>
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
<h2 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h2>
<p>Use this for logging fatal errors or errors that impact functionality of your application.</p>
<p><strong>Default log level</strong> = 1</p>
<p><strong>Standard Log Method:</strong> error</p>
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
<h2 id="warn" tabindex="-1"><a class="header-anchor" href="#warn"><span>warn</span></a></h2>
<p>Use this for logging issues that may impact app performance in a less impactful way than an error.</p>
<p><strong>Default log level</strong> = 2</p>
<p><strong>Standard Log Method:</strong> warn</p>
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
<h2 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h2>
<p>Use this for logging general insights into your application. This level does not indicate any
problems.</p>
<p><strong>Default log level</strong> = 3</p>
<p><strong>Standard Log Method:</strong> info</p>
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
<h2 id="fail" tabindex="-1"><a class="header-anchor" href="#fail"><span>fail</span></a></h2>
<p>Use this for logging network communication errors or other non-fatal errors that do not break your
application.</p>
<p><strong>Default log level</strong> = 4</p>
<p><strong>Standard Log Method:</strong> info</p>
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
<h2 id="success" tabindex="-1"><a class="header-anchor" href="#success"><span>success</span></a></h2>
<p>Use this for logging successful network communications or other successful operations within your
app.</p>
<p><strong>Default log level</strong> = 5</p>
<p><strong>Standard Log Method:</strong> info</p>
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
<h2 id="log" tabindex="-1"><a class="header-anchor" href="#log"><span>log</span></a></h2>
<p>Use this for general logging that doesn't apply to any of the lower levels.</p>
<p><strong>Default log level</strong> = 6</p>
<p><strong>Standard Log Method:</strong> log</p>
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
<h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>debug</span></a></h2>
<p>Use this for logging information that you typically do not want to see unless you are debugging a
problem with your application. This is typically hidden by default.</p>
<p><strong>Default log level</strong> = 7</p>
<p><strong>Standard Log Method:</strong> debug</p>
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
<h2 id="verbose" tabindex="-1"><a class="header-anchor" href="#verbose"><span>verbose</span></a></h2>
<p>Use this for logging extremely detailed debugging information. Use this level when the values you
are logging are granular enough that they are no longer easily human readable.</p>
<p><strong>Default log level</strong> = 8</p>
<p><strong>Standard Log Method:</strong> verbose</p>
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
</div></template>



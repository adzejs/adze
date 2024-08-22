<template><div><h1 id="tools" tabindex="-1"><a class="header-anchor" href="#tools"><span>Tools</span></a></h1>
<p>Adze supports some tools for helping developers sift through logs that have been generated.</p>
<h2 id="browser-tools" tabindex="-1"><a class="header-anchor" href="#browser-tools"><span>Browser Tools</span></a></h2>
<p>In browser environments, Adze will always generate a global store named <code v-pre>$adzeGlobal</code> on the
<code v-pre>window</code> object. From the adze global object you can access tools for filtering logs that have
been generated and cached.</p>
<p>Log caching is disabled by default and the number of logs that can be cached is capped at 300 by
default. You must enable log caching to take advantage of the browser tools. You can also raise or
lower the cache size as well.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Enable log caching and raise the maximum cache size from the default of 300 to 500.</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  cache<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  cacheSize<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The filtering tools that are available are similar to the <RouteLink to="/getting-started/filtering.html">configuration based filtering</RouteLink>
in the previous section of this guide. The tools are as follows:</p>
<ul>
<li><strong>filterByNamespace</strong> - Reprints logs that match the <a href="">namespace</a> values provided.</li>
<li><strong>filterByLabel</strong> - Reprints logs that match the <a href="">label</a> value provided.</li>
<li><strong>filterByLevel</strong> - Reprints logs that match the <a href="">LevelFilter</a> value provided.</li>
</ul>
<p>As an example, let's first write some basic logs to showcase the browser tools.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'A log with a namespace!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'A success log with a label!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I'm just a log... Yes I'm only a log..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we open up the developer console in a browser, we can see all of our Adze logs that were
generated when our web application executed.</p>
<p><img src="@source/getting-started/examples/tools-example-levels-1.png" alt="Example of the generated logs in the browser"></p>
<p>Now, let's clear the logs. Type <code v-pre>console.clear()</code> in the developer tools console.</p>
<p><img src="@source/getting-started/examples/tools-example-levels-2.png" alt="Example of clearing the developer tools console"></p>
<p>Now that the console has been cleared, let's use our tools to rerender all logs with a level of
<code v-pre>&quot;log&quot;</code>.</p>
<p><img src="@source/getting-started/examples/tools-example-levels-3.png" alt="Example of using browser tools to rerender logs"></p>
<p>Our log that we generated earlier has now been rerendered from the log cache.</p>
<p>We can repeat this process for logs with <strong>namespaces</strong> and <strong>labels</strong> as well.</p>
<h2 id="terminal-tools" tabindex="-1"><a class="header-anchor" href="#terminal-tools"><span>Terminal Tools</span></a></h2>
<p>When working with logs in a backend node environment, often times we write our logs to a file, much
like our example in the <RouteLink to="/getting-started/capture-data.html#middleware">Capturing Log Data - Middleware</RouteLink> section of
the guide.</p>
<p>It's very useful to use a <RouteLink to="/getting-started/setup.html#set-the-output-format">JSON log format</RouteLink> for machine readable
logs that are easy for programs to parse and consume. Other libraries, such as <a href="https://github.com/trentm/node-bunyan" target="_blank" rel="noopener noreferrer">Bunyan</a>
are completely focused on JSON logging and do a great job with generating them.</p>
<p>Because of how well <a href="https://github.com/trentm/node-bunyan" target="_blank" rel="noopener noreferrer">Bunyan</a> handles JSON logging, Adze JSON
logs are modeled to match the <strong>Bunyan JSON format</strong>. Because Adze does not reinvent the wheel here,
developers can take advantage of <a href="https://github.com/trentm/node-bunyan?tab=readme-ov-file#cli-usage" target="_blank" rel="noopener noreferrer">Bunyan's handy CLI tool</a>.</p>
<p>This tool can be used for parsing and filtering machine-readable JSON logs into human readable
formats. For more information on using the Bunyan CLI, please refer to the <a href="https://github.com/trentm/node-bunyan?tab=readme-ov-file#cli-usage" target="_blank" rel="noopener noreferrer">Bunyan docs</a>
for setup and usage instructions.</p>
</div></template>



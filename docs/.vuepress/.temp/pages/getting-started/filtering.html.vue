<template><div><h1 id="filtering-logs" tabindex="-1"><a class="header-anchor" href="#filtering-logs"><span>Filtering Logs</span></a></h1>
<p>When working in large applications, often you will have a large number of logs that are generated.
With a large number of logs it can be difficult to sift through them to find the logs that you care
about.</p>
<p>Adze offers a few ways to help deal with filtering your logs so that you can focus on the ones that
are currently relevant to you.</p>
<p>When setting up Adze, in the configuration you can provide criteria for what logs will be rendered
based on either their label, namespace, or level. This filter can either <code v-pre>&quot;include&quot;</code> or <code v-pre>&quot;exclude&quot;</code>
logs.</p>
<ul>
<li>If the <strong>include</strong> filter type is used, only logs that match the values will be printed.</li>
<li>If the <strong>exclude</strong> filter type is used, any logs that match the values will not be printed.</li>
</ul>
<h2 id="filtering-namespaces" tabindex="-1"><a class="header-anchor" href="#filtering-namespaces"><span>Filtering Namespaces</span></a></h2>
<p>Let's take a look at an example of how to apply an <code v-pre>&quot;include&quot;</code> filter against some logs with
namespaces.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  filters<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    namespaces<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">'include'</span><span class="token punctuation">,</span></span>
<span class="line">      values<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"I will print because I'm included."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"I will print because I'm included."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I will NOT print because I am not included.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I will print because I'm included."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I will not print because I do not have any namespaces.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output" tabindex="-1"><a class="header-anchor" href="#example-output"><span>Example Output</span></a></h4>
<p><img src="@source/getting-started/examples/filtering-example-namespaces-1.png" alt="Example output after filtering only namespaces that include the names foo and bar"></p>
<hr>
<p>Filtering by namespaces is particularly useful when debugging as it allows you to focus on a
specific code module without the noise of other logs. There is, however, one drawback that can
make filtering by namespaces cumbersome.</p>
<blockquote>
<p>How do I know what the namespaces in my app are?</p>
</blockquote>
<h3 id="restricting-namespaces-ts-only" tabindex="-1"><a class="header-anchor" href="#restricting-namespaces-ts-only"><span>Restricting Namespaces (TS Only)</span></a></h3>
<p>If your application uses TypeScript, Adze provides a convenient way to force all namespaces to be
registered in a centralized location. This is especially helpful because it forces developers to
keep a running list of all namespaces in use. This makes it much easier to know which namespaces to
filter by.</p>
<p>Let's look at an example of restricting namespaces.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a TS type for the valid namespaces in our application</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ValidNamespaces</span> <span class="token operator">=</span> <span class="token string">'foo'</span> <span class="token operator">|</span> <span class="token string">'bar'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">seal</span><span class="token generic class-name"><span class="token operator">&lt;</span>ValidNamespaces<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, in other places in our app where we import our sealed logger we will only be able to apply
namespaces of <code v-pre>&quot;foo&quot;</code> and <code v-pre>&quot;bar&quot;</code>.</p>
<p>Let's look at an example where we try to use an invalid namespace.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trying to log something in the baz module.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//      ~~~~~ &lt;- Argument of type '"baz"' is not assignable to parameter of type 'ValidNamespaces'.ts(2345)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Typescript will prevent us from writing a namespace of <code v-pre>'baz'</code> until we add <code v-pre>'baz'</code> to our
<code v-pre>ValidNamespaces</code> type.</p>
<h2 id="filtering-labels" tabindex="-1"><a class="header-anchor" href="#filtering-labels"><span>Filtering Labels</span></a></h2>
<p>Just like our example above where we are filtering namespaces, we can also filter logs by labels.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  filters<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    labels<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">'exclude'</span><span class="token punctuation">,</span></span>
<span class="line">      values<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"I will not print because I'm excluded."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"I will print because I'm NOT excluded."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'baz'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I will print because I am NOT excluded.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I will not print because I'm excluded."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I will not print because I do not have a label.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output-1" tabindex="-1"><a class="header-anchor" href="#example-output-1"><span>Example Output</span></a></h4>
<p><img src="@source/getting-started/examples/filter-example-labels-1.png" alt="Example output after filtering labels that exclude the name foo"></p>
<hr>
<h2 id="filtering-by-levels" tabindex="-1"><a class="header-anchor" href="#filtering-by-levels"><span>Filtering by Levels</span></a></h2>
<p>Lastly, we can filter logs by log levels using a <a href="">LevelFilter</a> value.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  filters<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    levels<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">'include'</span><span class="token punctuation">,</span></span>
<span class="line">      values<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token string">'log'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'I will print because I am included.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'I will not print because I am NOT included.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I will print because I am included.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'I will not print because I am not included.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">verbose</span><span class="token punctuation">(</span><span class="token string">'I will not print because I am not included.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output-2" tabindex="-1"><a class="header-anchor" href="#example-output-2"><span>Example Output</span></a></h4>
<p><img src="@source/getting-started/examples/filter-example-levels-1.png" alt="Example output after filtering levels that include the levels warn and log"></p>
<hr>
</div></template>



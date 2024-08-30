<template><div><h1 id="using-globalstore" tabindex="-1"><a class="header-anchor" href="#using-globalstore"><span>Using GlobalStore</span></a></h1>
<p>Let's take a deeper dive into each of GlobalStore's public methods.</p>
<h2 id="addlabel" tabindex="-1"><a class="header-anchor" href="#addlabel"><span>addLabel</span></a></h2>
<p>Adds a <RouteLink to="/reference/modifiers.html#label">label</RouteLink> instance to the GlobalStore.</p>
<h3 id="addlabel-interface" tabindex="-1"><a class="header-anchor" href="#addlabel-interface"><span>addLabel Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">addLabel</span><span class="token punctuation">(</span>label<span class="token operator">:</span> Label<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addlabel-example" tabindex="-1"><a class="header-anchor" href="#addlabel-example"><span>addLabel Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> Label <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a GlobalStore instance</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a Label instance</span></span>
<span class="line"><span class="token keyword">const</span> label <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we can add the label named 'foo' to the GlobalStore</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addLabel</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addlistener" tabindex="-1"><a class="header-anchor" href="#addlistener"><span>addListener</span></a></h2>
<p>Adds a log listener to GlobalStore that invokes the provided callback function if a log passes the provided <RouteLink to="/reference/data.html#level-filter">level filter</RouteLink>.</p>
<h3 id="addlistener-interface" tabindex="-1"><a class="header-anchor" href="#addlistener-interface"><span>addListener Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">addListener</span><span class="token punctuation">(</span>levels<span class="token operator">:</span> LevelFilter<span class="token punctuation">,</span> cb<span class="token operator">:</span> ListenerCallback<span class="token punctuation">)</span><span class="token operator">:</span> ListenerLocations<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addlistener-example" tabindex="-1"><a class="header-anchor" href="#addlistener-example"><span>addListener Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We'll listen to all levels</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do stuff with the log data.</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Do something with the log if it was rendered</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cachelimit" tabindex="-1"><a class="header-anchor" href="#cachelimit"><span>cacheLimit</span></a></h2>
<p>Getter and setter for manually overriding the configured or default log cache limit.</p>
<h3 id="cachelimit-interface" tabindex="-1"><a class="header-anchor" href="#cachelimit-interface"><span>cacheLimit Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">set</span> <span class="token function">cacheLimit</span><span class="token punctuation">(</span>limit<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">cacheLimit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cachelimit-example" tabindex="-1"><a class="header-anchor" href="#cachelimit-example"><span>cacheLimit Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">cacheLimit</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Override the cache limit</span></span>
<span class="line">globalStore<span class="token punctuation">.</span>cacheLimit <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get the cache limit</span></span>
<span class="line"><span class="token keyword">const</span> cacheLimit <span class="token operator">=</span> globalStore<span class="token punctuation">.</span>cacheLimit<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// cacheLimit => 500</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cachesize" tabindex="-1"><a class="header-anchor" href="#cachesize"><span>cacheSize</span></a></h2>
<p>Getter that returns the number of logs currently cached.</p>
<h3 id="cachesize-interface" tabindex="-1"><a class="header-anchor" href="#cachesize-interface"><span>cacheSize Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">cacheSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cachesize-example" tabindex="-1"><a class="header-anchor" href="#cachesize-example"><span>cacheSize Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'First log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Second log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Third log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get the cache size</span></span>
<span class="line"><span class="token keyword">const</span> size <span class="token operator">=</span> globalStore<span class="token punctuation">.</span>cacheSize<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// size => 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h2>
<p>Sets the value of the GlobalStore configuration.</p>
<h3 id="config-interface" tabindex="-1"><a class="header-anchor" href="#config-interface"><span>config Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">set</span> <span class="token function">config</span><span class="token punctuation">(</span>cfg<span class="token operator">:</span> GlobalStoreUserConfig <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config-example" tabindex="-1"><a class="header-anchor" href="#config-example"><span>config Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Creating a GlobalStore instance with no config overrides</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">globalCfg</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we'll override the configuration</span></span>
<span class="line">globalStore<span class="token punctuation">.</span>config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">globalCfg</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="firelisteners" tabindex="-1"><a class="header-anchor" href="#firelisteners"><span>fireListeners</span></a></h2>
<p>Fires any listeners that are watching the log level defined with the provided <RouteLink to="/reference/data.html#log-data">final log data</RouteLink>. The final log data and render object will be passed to the listener callback.</p>
<p><em>NOTE:</em> It is not necessary to call this method manually to fire listeners. When a log is terminated it will fire it automatically. However, if you are recalling a log and want to fire the listener for it again, you'll need to use the pattern in the example below.</p>
<h3 id="firelisteners-interface" tabindex="-1"><a class="header-anchor" href="#firelisteners-interface"><span>fireListeners Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// Versions &lt; 1.3.0</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">fireListeners</span><span class="token punctuation">(</span>log<span class="token operator">:</span> FinalLogData<span class="token punctuation">,</span> render<span class="token operator">:</span> LogRender <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Versions >= 1.3.0</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">fireListeners</span><span class="token punctuation">(</span>log<span class="token operator">:</span> FinalLogData<span class="token punctuation">,</span> render<span class="token operator">:</span> LogRender <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> printed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="firelisteners-example" tabindex="-1"><a class="header-anchor" href="#firelisteners-example"><span>fireListeners Example</span></a></h3>
<p>For information about the type guard in this example, refer to <RouteLink to="/reference/filtering-and-utility-functions.html#isfinallogdata">isFinalLogData</RouteLink>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> isFinalLogData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a listener and store it's location in a variable</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getcollection" tabindex="-1"><a class="header-anchor" href="#getcollection"><span>getCollection</span></a></h2>
<p>Recalls all of the cached logs based on the provided <RouteLink to="/reference/data.html#level-filter">level filter</RouteLink> as a bundle. This is useful for applying <RouteLink to="/reference/filtering-and-utility-functions.html">filters</RouteLink> to them, <RouteLink to="/reference/filtering-and-utility-functions.html#rerender">re-rendering</RouteLink> them, etc.</p>
<h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span>Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">getCollection</span><span class="token punctuation">(</span>levels<span class="token operator">:</span> LevelFilter<span class="token punctuation">)</span><span class="token operator">:</span> Collection<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> rerender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'First log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Second log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Third log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get the a collection of all cached logs</span></span>
<span class="line"><span class="token keyword">const</span> collection <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we can re-render them all</span></span>
<span class="line">collection<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>rerender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getlabel" tabindex="-1"><a class="header-anchor" href="#getlabel"><span>getLabel</span></a></h2>
<p>Get a <RouteLink to="/reference/modifiers.html#label">label</RouteLink> instance from the GlobalStore by name.</p>
<h3 id="getlabel-interface" tabindex="-1"><a class="header-anchor" href="#getlabel-interface"><span>getLabel Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">getLabel</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Label <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getlabel-example" tabindex="-1"><a class="header-anchor" href="#getlabel-example"><span>getLabel Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a GlobalStore instance</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a log with a label</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we can get the label instance named 'foo'</span></span>
<span class="line"><span class="token keyword">const</span> label <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">getLabel</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="haslabel" tabindex="-1"><a class="header-anchor" href="#haslabel"><span>hasLabel</span></a></h2>
<p>Returns a boolean value indicating the existence of a label in the GlobalStore.</p>
<h3 id="haslabel-interface" tabindex="-1"><a class="header-anchor" href="#haslabel-interface"><span>hasLabel Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">hasLabel</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="haslabel-example" tabindex="-1"><a class="header-anchor" href="#haslabel-example"><span>hasLabel Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> Label <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a GlobalStore instance</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a log with a label</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we can add the label named 'foo' to the GlobalStore</span></span>
<span class="line"><span class="token keyword">const</span> labelExists <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">hasLabel</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// labelExists => true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hasoverrides" tabindex="-1"><a class="header-anchor" href="#hasoverrides"><span>hasOverrides</span></a></h2>
<p>Indicates whether this GlobalStore instance has global Adze configuration overrides set.</p>
<h3 id="hasoverrides-interface" tabindex="-1"><a class="header-anchor" href="#hasoverrides-interface"><span>hasOverrides Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">hasOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hasoverrides-example" tabindex="-1"><a class="header-anchor" href="#hasoverrides-example"><span>hasOverrides Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Creating a GlobalStore instance with no config overrides</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's check if the GlobalStore has global overrides configured</span></span>
<span class="line"><span class="token keyword">const</span> has_overrides <span class="token operator">=</span> globalStore<span class="token punctuation">.</span>hasOverrides<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// has_overrides => false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides"><span>overrides</span></a></h2>
<p>Returns the current value of the global <RouteLink to="/config/#adze-configuration">Adze configuration</RouteLink> overrides.</p>
<h3 id="overrides-interface" tabindex="-1"><a class="header-anchor" href="#overrides-interface"><span>overrides Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">overrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Configuration <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="overrides-example" tabindex="-1"><a class="header-anchor" href="#overrides-example"><span>overrides Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Creating a GlobalStore instance with no config overrides</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">globalCfg</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get our global configuration overrides</span></span>
<span class="line"><span class="token keyword">const</span> overrides <span class="token operator">=</span> globalStore<span class="token punctuation">.</span>overrides<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removelistener" tabindex="-1"><a class="header-anchor" href="#removelistener"><span>removeListener</span></a></h2>
<p>Adds a log listener to GlobalStore that invokes the provided callback function if a log passes the provided <RouteLink to="/reference/data.html#level-filter">level filter</RouteLink>.</p>
<h3 id="removelistener-interface" tabindex="-1"><a class="header-anchor" href="#removelistener-interface"><span>removeListener Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">removeListener</span><span class="token punctuation">(</span>locations<span class="token operator">:</span> ListenerLocations<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="removelistener-example" tabindex="-1"><a class="header-anchor" href="#removelistener-example"><span>removeListener Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a listener and store it's location in a variable</span></span>
<span class="line"><span class="token keyword">const</span> loc <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do stuff with the log data.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We can now tear down the listener at a later time</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span>loc<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="store" tabindex="-1"><a class="header-anchor" href="#store"><span>store</span></a></h2>
<p>Stores a log in the GlobalStore.</p>
<p><em>NOTE:</em> This is not required to be done manually. If a GlobalStore exists logs will automatically be stored in it until the cache limit has been reached.</p>
<h3 id="store-interface" tabindex="-1"><a class="header-anchor" href="#store-interface"><span>store Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">store</span><span class="token punctuation">(</span>log<span class="token operator">:</span> BaseLog<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="store-example" tabindex="-1"><a class="header-anchor" href="#store-example"><span>store Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Generate a log and get the instance</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Some important info.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Store the log</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="globalstore-tools" tabindex="-1"><a class="header-anchor" href="#globalstore-tools"><span>$globalStore.tools</span></a></h2>
<p>Manual debugging tools primarily for use in the web browser. To use the tools, access them via <code v-pre>window.$globalStore.tools</code> or simply <code v-pre>$globalStore.tools</code> in your browser console. Any of the methods listed in the interface below will be made available to you. For all methods other than <code v-pre>renderCache</code>, <code v-pre>renderNamespace</code>, and <code v-pre>renderLabel</code> please refer to the documentation for <RouteLink to="/reference/filtering-and-utility-functions.html">Filtering &amp; Utility Functions</RouteLink>.</p>
<h3 id="globalstore-tools-interface" tabindex="-1"><a class="header-anchor" href="#globalstore-tools-interface"><span>$globalStore.tools Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> tools<span class="token operator">:</span> Tools<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Tools</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Pass-through alias for the render function.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> render <span class="token operator">=</span> render<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Pass-through alias for the rerender function.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> rerender <span class="token operator">=</span> rerender<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Pass-through alias for the filterCollection function.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> filterCollection <span class="token operator">=</span> filterCollection<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Pass-through alias for the filterLabel function.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> filterLabel <span class="token operator">=</span> filterLabel<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Pass-through alias for the filterLevel function.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> filterLevel <span class="token operator">=</span> filterLevel<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Pass-through alias for the filterNamespace function.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> filterNamespace <span class="token operator">=</span> filterNamespace<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shortcut method for rendering a level-filtered collection from the GlobalStore cache.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">renderCache</span><span class="token punctuation">(</span>filter<span class="token operator">:</span> LevelFilter<span class="token punctuation">)</span><span class="token operator">:</span> Collection<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shortcut method for rendering a level and namespace filtered collection from the GlobalStore cache.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">renderNamespace</span><span class="token punctuation">(</span>filter<span class="token operator">:</span> LevelFilter<span class="token punctuation">,</span> <span class="token operator">...</span>ns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Collection<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shortcut method for rendering a level and label filtered collection from the GlobalStore cache.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">renderLabel</span><span class="token punctuation">(</span>filter<span class="token operator">:</span> LevelFilter<span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Collection<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="globalstore-tools-example" tabindex="-1"><a class="header-anchor" href="#globalstore-tools-example"><span>$globalStore.tools Example</span></a></h3>
<p><img src="@source/reference/examples/globalstore-tools-example.png" alt="GlobalStore tools example"></p>
</div></template>



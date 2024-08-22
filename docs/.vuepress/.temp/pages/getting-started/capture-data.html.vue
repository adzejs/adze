<template><div><h1 id="capturing-log-data" tabindex="-1"><a class="header-anchor" href="#capturing-log-data"><span>Capturing Log Data</span></a></h1>
<p>Now that we have setup our logger and configured it to our liking, we may also want to capture our
log data and transport it to another source for tracking and monitoring our application.</p>
<p><strong>Transports</strong> are a term for moving our log data from our application to anothe source. Adze
provides two ways for capturing the log data and then acting upon it to either send over the
network, write to a file, or insert into a database.</p>
<p>The two supported methods are <strong>middleware</strong> and <strong>log listeners</strong>.</p>
<h2 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware"><span>Middleware</span></a></h2>
<p>Middleware can be created by extending the base <strong>Middleware class</strong> that is provided by Adze. The
Middleware class allows you to hook into various points in the <a href="">Adze log lifecycle</a>.</p>
<p>When the lifecycle hooks are called, they always provide the log instance which can be accessed to
get its data, configuration, and formatted message, as well as any other relevant information to
that hook.</p>
<p>The hook can then process the data and transport it to a destination, such as a file, API, or
database.</p>
<p>For more information about creating middleware, please visit the <a href="">creating middleware</a> page in the
<a href="">Reference Manual</a>.</p>
<p>As an example, let's take a look at adding middleware to a logger that transports data to a local
file and rotates the file on a specified interval. We'll use the <a href="https://github.com/adzejs/transport-file" target="_blank" rel="noopener noreferrer">@adze/transport-file</a>
middleware package to handle this.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> AdzeFileTransport <span class="token keyword">from</span> <span class="token string">'@adze/transport-file'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// First, we will create an instance of our file transport. We'll rotate our log file every 12 hours.</span></span>
<span class="line"><span class="token keyword">const</span> fileTransport <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdzeTransportFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span> directory<span class="token operator">:</span> <span class="token string">'./logs'</span><span class="token punctuation">,</span> frequency<span class="token operator">:</span> <span class="token string">'12h'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Next, we call the load method.</span></span>
<span class="line"><span class="token comment">// This is necessary for our middleware to conditionally load its dependencies based on the runtime environment.</span></span>
<span class="line"><span class="token comment">// File transports are only relative to node environments.</span></span>
<span class="line"><span class="token keyword">await</span> fileTransport<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now, we'll setup Adze and provide the middleware instance.</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  middleware<span class="token operator">:</span> <span class="token punctuation">[</span>fileTransport<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pay special attention to how the AdzeTransportFile middleware class is used. First, it is instantiated
with some options. Second, we must call the <code v-pre>load</code> method.</p>
<p>We must call the <code v-pre>load</code> method because Adze is isomorphic and support both the browser and node out
of the box. The dependencies that AdzeTransportFile uses under the hood can only be loaded in a node
environment. The <code v-pre>load</code> method allows the middleware to load these dependencies only if it is in a
node environment, thus prevent errors from occuring in the browser.</p>
<h2 id="log-listeners" tabindex="-1"><a class="header-anchor" href="#log-listeners"><span>Log Listeners</span></a></h2>
<p>Another method of capturing or reacting to logs is by using log listeners. Log listeners are
callback functions that are called when a log has been terminated. They have less capability than
middleware for hooking into the log lifecycle, but are much simpler to implement and can be handy
for simple use cases.</p>
<p>Let's take a look at how to set up a listener.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// When the setup function is called, it returns a reference to the Adze global store.</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// From our store reference we can add one or more listeners that target specific log levels.</span></span>
<span class="line"><span class="token comment">// The first one here will target all log levels by passing the `'*'` wildcard.</span></span>
<span class="line"><span class="token keyword">const</span> allListenerId <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>log<span class="token operator">:</span> Log<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> log<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// Do something with the log instance...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's add another listener that only targets alerts.</span></span>
<span class="line"><span class="token keyword">const</span> alertListenerId <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'alert'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>log<span class="token operator">:</span> Log<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do something with the alert log such as triggering a notification.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example we have created two log listeners. One targets all logs and the other targets
only alert logs. You can also target logs with a number array that represents specific log levels
or a string array of log level names. For more information on targeting levels, refer to the
<a href="">Reference Manual</a> on <a href="">LevelFilter's</a>.</p>
<p>Also notice that the <code v-pre>addListener</code> returns the ID for the registered listener. You can use this ID
elsewhere in your application to remove the listeners if necessary.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> allListenerId <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>log<span class="token operator">:</span> Log<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Do something with the log instance...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// elsewhere in your application...</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span>allListenerId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



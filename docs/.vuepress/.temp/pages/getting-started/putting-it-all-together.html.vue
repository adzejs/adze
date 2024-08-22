<template><div><h1 id="putting-it-all-together" tabindex="-1"><a class="header-anchor" href="#putting-it-all-together"><span>Putting It All Together</span></a></h1>
<p>In summary, we have learned how to do the following:</p>
<ul>
<li><RouteLink to="/getting-started/installation.html">Installing Adze</RouteLink></li>
<li><RouteLink to="/getting-started/setup.html">Setting up Adze for use throughout our applications</RouteLink></li>
<li><RouteLink to="/getting-started/setup.html#configure-the-shared-logger">Configuring and customizing Adze</RouteLink></li>
<li><RouteLink to="/getting-started/annotation.html">Annotating our logs with meta data</RouteLink></li>
<li><RouteLink to="/getting-started/capture-data.html">Capturing our log data for transport</RouteLink></li>
<li><RouteLink to="/getting-started/filtering.html">Filtering our logs for readability</RouteLink></li>
<li><RouteLink to="/getting-started/tools.html">and using tools to filter our logs in our runtime environments</RouteLink></li>
</ul>
<p>If you would like to dive even deeper into the functionality that Adze provides, please read through
the <a href="">Reference Manual</a>. Here you will be introduced to all of the available <a href="">modifiers</a> and
<a href="">terminators</a>, as well as greater detail about <a href="">log formatting</a> and <a href="">customizability</a>.</p>
<h2 id="production-example" tabindex="-1"><a class="header-anchor" href="#production-example"><span>Production Example</span></a></h2>
<p>Here is an overview of a basic implementation of Adze for use in a production environment.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> AdzeTransportFile <span class="token keyword">from</span> <span class="token string">'@adze/transport-file'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Make the output format pretty when in development. Use JSON formatting in all other environments.</span></span>
<span class="line"><span class="token keyword">const</span> format <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEV</span> <span class="token operator">?</span> <span class="token string">'pretty'</span> <span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Get an environment variable for controlling my active log level. Default to info level.</span></span>
<span class="line"><span class="token keyword">const</span> activeLevel <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">LOG_LEVEL</span> <span class="token operator">??</span> <span class="token string">'info'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Setup our middleware to write logs to rotating log files</span></span>
<span class="line"><span class="token keyword">const</span> fileTransport <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdzeTransportFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span> directory<span class="token operator">:</span> <span class="token string">'./logs'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> fileTransport<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Configure our logger globally.</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  activeLevel<span class="token punctuation">,</span></span>
<span class="line">  format<span class="token punctuation">,</span></span>
<span class="line">  middleware<span class="token operator">:</span> <span class="token punctuation">[</span>fileTransport<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Listen for alerts to trigger a notification</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'alert'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>log<span class="token operator">:</span> Log<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// POST my alert to a service that will notify me</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create our logger instance to use throughout our app</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'MyApp'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And using our logger in another module...</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// my-module.ts</span></span>
<span class="line"><span class="token keyword">import</span> _logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Add a namespace of "my-module" for this module's logs.</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> _logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'my-module'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is some information about my application.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Now go read the <a href="">reference manual</a> and have fun!</p>
</blockquote>
</div></template>



<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h1>
<h2 id="why-is-this-named-adze" tabindex="-1"><a class="header-anchor" href="#why-is-this-named-adze"><span>Why is this named Adze?</span></a></h2>
<p><img src="@source/getting-started/assets/adze.jpg" alt="A drawing of a man using an adze to shape a log"></p>
<p><em>Illustration from <a href="https://en.wikipedia.org/wiki/Adze" target="_blank" rel="noopener noreferrer">Wikipedia</a></em></p>
<blockquote>
<p>Adze - <a href="https://www.merriam-webster.com/dictionary/adze" target="_blank" rel="noopener noreferrer">a cutting tool that ... is used chiefly for shaping wood</a>.</p>
</blockquote>
<p>Adze was chosen as a name for this library to maintain solidarity with the logging puns and to emphasize that this library is a tool for shaping the logs of your application.</p>
<h2 id="adze-demo" tabindex="-1"><a class="header-anchor" href="#adze-demo"><span>Adze Demo</span></a></h2>
<p>TODO: Redo the demo video</p>
<div class="youtube-video-container">
  <iframe width="560" height="315"  src="https://www.youtube-nocookie.com/embed/8Ht3LKowKR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h2 id="why-should-i-use-adze" tabindex="-1"><a class="header-anchor" href="#why-should-i-use-adze"><span>Why should I use Adze?</span></a></h2>
<p>Compared to existing Javascript logging libraries, Adze sets itself apart because it is <strong>isomorphic</strong>, meaning <strong>it can run in both the node and browser environments with zero config</strong>. Other libraries, such as Winston or Bunyan only support the node environment. Libraries like Pino and Log4JS support both environments, but it either requires some configuration or it only provides you with a very limited feature set.</p>
<p>Javascript frameworks have been shifting to server-side rendering (SSR) and to micro-frontend style architectures. Both of these architecture approaches present unique challenges with logging in a production-ready environment. Because Adze is isomorphic by nature, you can write your logs the same way throughout your application and <strong>it will just work</strong>.</p>
<p>Aside from isomorphism, Adze also offers many other compelling features:</p>
<ul>
<li>First-class TypeScript support (not bolted-on)</li>
<li>Wraps and extends the entire <a href="https://developer.mozilla.org/en-US/docs/Web/API/console" target="_blank" rel="noopener noreferrer">standard API</a></li>
<li>A convenient chainable API</li>
<li>Log Listeners for capturing log data</li>
<li>Middleware support for plugins and transporting logs</li>
<li>Log annotations such as namespaces, labels, and other meta data</li>
<li>Four formats supported out of the box:
<ul>
<li>Pretty - Human readable logs that are easy on the eyes</li>
<li>JSON - Machine readable logs that are compatible with the <a href="https://github.com/trentm/node-bunyan?tab=readme-ov-file#cli-usage" target="_blank" rel="noopener noreferrer">Bunyan CLI</a></li>
<li>Standard - Human readable stdout logs</li>
<li>Common - Logs that adhere to the <a href="https://en.wikipedia.org/wiki/Common_Log_Format" target="_blank" rel="noopener noreferrer">Common Log Format</a></li>
</ul>
</li>
<li>Everything is customizable and configurable</li>
<li>Tools for caching, filtering, and recalling logs</li>
<li>Support for creating log thread to track data across multiple scopes</li>
<li>Convenient child logger API's</li>
<li>and much more...</li>
</ul>
<h3 id="here-is-a-simple-preview" tabindex="-1"><a class="header-anchor" href="#here-is-a-simple-preview"><span>Here is a simple preview</span></a></h3>
<p><img src="@source/getting-started/assets/demo.jpg" alt="Preview of Adze logs"></p>
<blockquote>
<p>This preview was generated from the same code executed in both the browser (left) and the node (right) environments.</p>
</blockquote>
<h2 id="what-does-the-api-look-like" tabindex="-1"><a class="header-anchor" href="#what-does-the-api-look-like"><span>What does the API look like?</span></a></h2>
<p>As stated above, Adze offers an easy to use, chainable API. To create a log you simply chain together an Adze log instance with a series of modifiers and then end with a terminator. Here's an example of creating a log with a namespace:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">namespace</span><span class="token punctuation">(</span><span class="token string">'example'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Example log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output of this would look like the following:</p>
<p><img src="@source/getting-started/examples/api_example_output_1.png" alt="Adze log example"></p>
<h3 id="what-about-child-loggers" tabindex="-1"><a class="header-anchor" href="#what-about-child-loggers"><span>What about child loggers?</span></a></h3>
<p>You might be asking yourself, &quot;the chainable API looks nice, but how about creating reusable loggers
throughout my application?&quot;</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a child logger where all logs generated include the "example" namespace and emoji styles.</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span><span class="token function">namespace</span><span class="token punctuation">(</span><span class="token string">'example'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">//- otherFile.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> logger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./logger.ts'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This was generated by the child logger.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output of this would look like the following:</p>
<p><img src="@source/getting-started/examples/api_example_output_2.png" alt="Example of Adze child logger"></p>
</div></template>



<template><div><h1 id="setting-up-adze" tabindex="-1"><a class="header-anchor" href="#setting-up-adze"><span>Setting Up Adze</span></a></h1>
<p>Although Adze can be used in a very simple, no-config manner by just importing it and using it,
most often we want to centrally create shared loggers that can be imported and used throughout our
application.</p>
<h2 id="create-a-shared-logger" tabindex="-1"><a class="header-anchor" href="#create-a-shared-logger"><span>Create a Shared Logger</span></a></h2>
<p>To create a shared logger, first create a new file somewhere that makes sense in your application
(like <code v-pre>./src/logger.[ts|js]</code>).</p>
<p>After you have created your file, let's import our dependencies.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...more setup code will go here</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here you may have noticed the presence of the <code v-pre>setup</code> function that we are importing. This function
is used to create a global log store and to apply global configuration to all adze logs.</p>
<p>Now that we have imported our dependencies, let's create and export a shared logger that has
emoji's enabled and outputs timestamps with every log.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The interesting thing about the code above is that we are calling the <code v-pre>seal</code> method instead of a
typical log terminator like <code v-pre>info</code> or <code v-pre>error</code>.</p>
<p>What <code v-pre>seal</code> does is it returns a new Log class that inherits any modifiers and configuration from
the parent log chain. In this case, it will inherit the modifiers <code v-pre>withEmoji</code> and <code v-pre>timestamp</code>.</p>
<p>Now, let's import and use our new shared logger.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/index.ts</span></span>
<span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging from the index.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output-from-index-ts" tabindex="-1"><a class="header-anchor" href="#example-output-from-index-ts"><span>Example output from index.ts</span></a></h4>
<p><img src="@source/getting-started/examples/setup-shared-logger.png" alt="Shared logger output"></p>
</div></template>



<template><div><h1 id="log-threading" tabindex="-1"><a class="header-anchor" href="#log-threading"><span>Log Threading</span></a></h1>
<p>In large applications there are often times when we need to log data that comes from multiple
different scopes but we want to collect all of the data and print it in a single log.</p>
<p>This practice of collating data from many scopes is called <a href="https://www.baeldung.com/mdc-in-log4j-2-logback" target="_blank" rel="noopener noreferrer">Mapped Diagnostic Context</a>.
This is a common feature in Java's Log4J library.</p>
<p>Adze also supports <a href="https://www.baeldung.com/mdc-in-log4j-2-logback" target="_blank" rel="noopener noreferrer">Mapped Diagnostic Context</a>, or
as Adze calls it, <a href="">Log Threading</a>. Think of a log thread like a thread on a message board or
reddit where multiple individuals make a comment on a common topic.</p>
<p>Here is an example of how threads can be used with Adze:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'maths'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'added'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">subtract</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> answer <span class="token operator">=</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span></span>
<span class="line">  adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'maths'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thread</span><span class="token punctuation">(</span><span class="token string">'subtracted'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> answer <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> answer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'maths'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dump<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Results from our thread'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// => prints the log with the context values from both thread logs applied.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-output" tabindex="-1"><a class="header-anchor" href="#example-output"><span>Example Output</span></a></h2>
<p><img src="@source/getting-started/examples/thread-example-1.png" alt="Example of a single log dumping out values from multiple scopes"></p>
<hr>
<p>Notice that each log within the <code v-pre>add</code> and <code v-pre>subtract</code> functions does not actually generate a log, but
rather they add a key / value pair of data to the <code v-pre>&quot;maths&quot;</code> label thread.</p>
<p>On line 16, we create a log with the <code v-pre>&quot;maths&quot;</code> label, which provides it with the same context as the
other logs in the thread, and the <code v-pre>dump</code> modifier instructs the info log to dump the values from
the <code v-pre>&quot;maths&quot;</code> thread into the log output.</p>
<p>We now have a single log that contains values from multiple scopes in our application.</p>
</div></template>



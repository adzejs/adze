<template><div><h1 id="annotating-logs" tabindex="-1"><a class="header-anchor" href="#annotating-logs"><span>Annotating Logs</span></a></h1>
<p>When logging, often there is extra information we would like to know about the context of the log.</p>
<p>For instance, if I generate a log inside of a utility function, I might want to know that's where
it came from when I'm reading through my logs at a later time.</p>
<p>This is where <strong>namespaces</strong> and <strong>labels</strong> come in to help.</p>
<p>Let's assume a file structure for our project like this:</p>
<ul>
<li><code v-pre>src/</code>
<ul>
<li><code v-pre>index.ts</code></li>
<li><code v-pre>logger.ts</code></li>
<li><code v-pre>utilities.ts</code></li>
</ul>
</li>
</ul>
<h2 id="using-namespaces" tabindex="-1"><a class="header-anchor" href="#using-namespaces"><span>Using Namespaces</span></a></h2>
<p>We'll assume we have already set up our logger for our project in <code v-pre>logger.ts</code> that just uses emoji's
and we would like to write a utility function to fetch a value from a remote source.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// utilities.ts</span></span>
<span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Fetch data and return the body as an object.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getJsonData</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred while fetching from the provided url.'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In our example above, if the resource at the provided URL returns an error response, the function
will catch it and log an error message.</p>
<p>However, when sifting through our logs, we might not know that this error originated from the
<code v-pre>utilities.ts / getJsonData()</code> function.</p>
<p>Let's apply some namespaces to the error log to annotate the logs source. You can use the
<code v-pre>.namespace()</code> modifier to apply the namespace.</p>
<p>You can alternatively use the <code v-pre>.ns()</code> modifier alias which is just shorthand for the namespace
modifier. We'll use the shorter <code v-pre>.ns()</code> for our example.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// utilities.ts</span></span>
<span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Fetch data and return the body as an object.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getJsonData</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'utilities'</span><span class="token punctuation">,</span> <span class="token string">'getJsonData'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred while fetching from the provided url.'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When we run our application, we will see a log that looks like the following when an error occurs
in the <code v-pre>getJsonData</code> function.</p>
<h4 id="example-output" tabindex="-1"><a class="header-anchor" href="#example-output"><span>Example Output</span></a></h4>
<p><img src="@source/getting-started/examples/log-annotation/namespaces-example-1.png" alt="Example output of an error log with namespaces"></p>
<blockquote>
<p>Notice, the log output contains <code v-pre>#utilities #getJsonData</code> which indicates the namespaces.</p>
</blockquote>
<p>Great! We have a log with namespaces to help us identify it's origin.</p>
<p>But what happens if we have many utility functions? Do we have to repeat ourselves by writing
<code v-pre>.ns('utilities')</code> every time?</p>
<p>Fortunately, Adze let's us progressively enhance our logs through the <code v-pre>seal()</code> terminator. Let's
look at how we can apply a namespace of <strong>&quot;utilities&quot;</strong> to all logs within the <code v-pre>utilities.ts</code> file.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// utilities.ts</span></span>
<span class="line"><span class="token keyword">import</span> _logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- Change the import name to "_logger" from "logger"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We'll define a local logger for this file that applies the "utilities" namespace.</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> _logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'utilities'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Fetch data and return the body as an object.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getJsonData</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'getJsonData'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred while fetching from the provided url.'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Validates that two unknown values are numbers and then adds them together.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addValues</span><span class="token punctuation">(</span>val1<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> val2<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Check if our values are numbers first.</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNumber</span><span class="token punctuation">(</span>val1<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isNumber</span><span class="token punctuation">(</span>val2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'addValues'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'One or both of the values to add was not a number!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> val1 <span class="token operator">+</span> val2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Type Guard to validate that the value is a number.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> value <span class="token keyword">is</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output-1" tabindex="-1"><a class="header-anchor" href="#example-output-1"><span>Example Output</span></a></h4>
<p><img src="@source/getting-started/examples/log-annotation/namespaces-example-2.png" alt="Example output of an error log and warn log with namespaces"></p>
<h2 id="using-labels" tabindex="-1"><a class="header-anchor" href="#using-labels"><span>Using Labels</span></a></h2>
<p>When writing logs we can also apply a label to the log using the <code v-pre>label()</code> modifier.</p>
<p>Labels differ from namespaces in a couple ways.</p>
<ul>
<li>Only one label may be applied to a log.</li>
<li>Labels associate logs together for modifiers like <code v-pre>count</code> and <code v-pre>time</code> and for other features like <a href="">threads</a>.</li>
</ul>
<p>Let's revisit our utility functions above and let's add a new function that executes a callback
function 10 times and generates a log that counts its iterations.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// utilities.ts</span></span>
<span class="line"><span class="token keyword">import</span> _logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> _logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'utilities'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...other functions hidden for brevity</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Does something 10 times.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">doTen</span><span class="token punctuation">(</span><span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'doTen'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Doing the thing!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output-2" tabindex="-1"><a class="header-anchor" href="#example-output-2"><span>Example Output</span></a></h4>
<p><img src="@source/getting-started/examples/log-annotation/annotation-label-example-1.png" alt="Example of log printed 10 times"></p>
<hr>
<p>Notice here that no counter was applied to the generated logs. This is because in order for the logs
to be properly counted, they must be associated with each other via a label. Let's fix our mistake.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// utilities.ts</span></span>
<span class="line"><span class="token keyword">import</span> _logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> _logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'utilities'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...other functions hidden for brevity</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Does something 10 times.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">doTen</span><span class="token punctuation">(</span><span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'doTen'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'doTenLoop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Doing the thing!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- Add a label of 'doTenLoop'</span></span>
<span class="line">    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output-3" tabindex="-1"><a class="header-anchor" href="#example-output-3"><span>Example Output</span></a></h4>
<p><img src="@source/getting-started/examples/log-annotation/annotation-label-example-2.png" alt="Example of log printed 10 times with a counter"></p>
<hr>
<p>Now we see in the output above the name of the label <code v-pre>[doTenLoop]</code> as well as the counter showing
the number of times this log was called; <code v-pre>(Count: n)</code>.</p>
</div></template>



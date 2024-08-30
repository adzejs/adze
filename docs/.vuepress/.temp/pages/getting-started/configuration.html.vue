<template><div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h1>
<p>Now that we have a shared logger from the <a href="./setup">setup</a> section we may want to apply some more
advanced configuration. In the following steps we'll take a look at how to change the active log
level, change the output format of our logs, and even add a completely custom log level.</p>
<h2 id="set-the-active-log-level" tabindex="-1"><a class="header-anchor" href="#set-the-active-log-level"><span>Set the Active Log Level</span></a></h2>
<p>When we are writing logs for our applications, there are many different levels of information that
we want to capture. However, we do not always want to see every level of detail at all times. This
is where log levels come into play.</p>
<p>Log levels are categorized by the most severe being the lowest to the most <a href="https://www.merriam-webster.com/dictionary/innocuous" target="_blank" rel="noopener noreferrer">innocuous</a>
being the highest.</p>
<p>By ordering our logs by severity in this way, when problems arise, we can simply
raise our active log level and all logs that are less than or equal to the active level will be
rendered. This allows us to capture only the most important logs the majority of the time, but in
cases where we need to debug something, we can increase the visibility into our application.</p>
<p>Adze comes with <strong>9</strong> log levels by default, ranging from levels <strong>0 through 8</strong>.</p>
<ol start="0">
<li><strong>Alert</strong> - This level should only be used for logs that require immediate attention. This should be used sparingly and only for the most critical of errors.</li>
<li><strong>Error</strong> - Use this for logging fatal errors or errors that impact functionality of your application.</li>
<li><strong>Warn</strong> - Use this for logging issues that may impact app performance in a less impactful way than an error.</li>
<li><strong>Info</strong> - Use this for logging general insights into your application. This level does not indicate any problems.</li>
<li><strong>Fail</strong> - Use this for logging network communication errors or other non-fatal errors that do not break your application.</li>
<li><strong>Success</strong> - Use this for logging successful network communications or other successful operations within your app.</li>
<li><strong>Log</strong> - Use this for general logging that doesn't apply to any of the lower levels.</li>
<li><strong>Debug</strong> - Use this for logging information that you typically do not want to see unless you are debugging a problem with your application. This is typically hidden by default.</li>
<li><strong>Verbose</strong> - Use this for logging extremely detailed debugging information. Use this level when the values you are logging are granular enough that they are no longer easily human readable.</li>
</ol>
<blockquote>
<p>By default the active level is set to 6.</p>
</blockquote>
<p>Let's lower our active level so that we only see alert, error, warn, and info logs.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set our active level to 3</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  activeLevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adze also supports using <strong>level names</strong> for setting the active level. We'll use this going forward
since it's more readable.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set our active level to 'info' which is equivalent to 3</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  activeLevel<span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When we run our application, all alert, error, warning, and info logs will render and all other logs
will be hidden.</p>
<p>Since we would still like to see our log in <code v-pre>index.ts</code>, let's change that to an info level.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/index.ts</span></span>
<span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Change -> logger.log('Logging from the index.');</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Logging from the index.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-the-output-format" tabindex="-1"><a class="header-anchor" href="#set-the-output-format"><span>Set the Output Format</span></a></h2>
<p>Now that we have our active log level configured, we decide that what's best for our application is
to generate logs as structured data, also known as JSON logs.</p>
<p>Adze comes with four log formatters built in:</p>
<ul>
<li><strong>Pretty</strong> - Human readable, pretty printed logs.</li>
<li><strong>JSON</strong> - Machine readable, structured JSON logs.</li>
<li><strong>Common</strong> - Logs that conform to the <a href="https://en.wikipedia.org/wiki/Common_Log_Format" target="_blank" rel="noopener noreferrer">Common Log Format</a></li>
<li><strong>Standard</strong> - Logs that are human-readable but formatted for stdout in backend/terminal environments.</li>
</ul>
<p>Let's configure our shared logger to output as JSON.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set the format to "json"</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  activeLevel<span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span></span>
<span class="line">  format<span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now run the code.</p>
<h4 id="example-output" tabindex="-1"><a class="header-anchor" href="#example-output"><span>Example Output</span></a></h4>
<p>Oops! When we run our code we ge the following error:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Error: Required fields are missing from the log meta for generating a JSON log.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>Certain formatters require specific meta data for generating the logs.</p>
<p>In this case, the <strong>JSON formatter</strong> requires the following fields:</p>
<ul>
<li><strong>hostname</strong> - The name of the machine or client that is running the code.</li>
<li><strong>name</strong> - The name of the application that is running.</li>
</ul>
<p>There are two ways we can provide this meta data to the logger.</p>
<p>The first way is through the <code v-pre>setup</code> function. The second way is by the <code v-pre>meta</code> modifier.</p>
<p>Adze also provides a convenient type (<code v-pre>JsonLogFormatMeta</code>) that can be used for type safety when
adding the meta data.</p>
<h4 id="by-the-setup-function" tabindex="-1"><a class="header-anchor" href="#by-the-setup-function"><span>By the setup function</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">JsonLogFormatMeta</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set the format to "json"</span></span>
<span class="line"><span class="token generic-function"><span class="token function">setup</span><span class="token generic class-name"><span class="token operator">&lt;</span>JsonLogFormatMeta<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  activeLevel<span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span></span>
<span class="line">  format<span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span></span>
<span class="line">  meta<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    hostname<span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'myapp'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="by-the-meta-modifier" tabindex="-1"><a class="header-anchor" href="#by-the-meta-modifier"><span>By the meta modifier</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">JsonLogFormatMeta</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set the format to "json"</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  activeLevel<span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span></span>
<span class="line">  format<span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze</span>
<span class="line">  <span class="token punctuation">.</span><span class="token generic-function"><span class="token function">meta</span><span class="token generic class-name"><span class="token operator">&lt;</span>JsonLogFormatMeta<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    hostname<span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'myapp'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output-1" tabindex="-1"><a class="header-anchor" href="#example-output-1"><span>Example Output</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{"v":1,"level":3,"levelName":"info","name":"myapp","hostname":"localhost","msg":"Logging from the index.","args":[],"pid":1,"time":"2024-08-21T10:15:38-04:00"}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>Notice, even though we configured the <code v-pre>withEmoji</code> modifier on the logger, no emoji is rendered. This
is because not every formatter will abide by every configuration value. It would not make sense to
include emoji's in a machine-readable log.</p>
<p>Before continuing, let's change our format back to the default of <code v-pre>&quot;pretty&quot;</code> and remove the meta
data.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set the format to "json"</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  activeLevel<span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-a-custom-log-level" tabindex="-1"><a class="header-anchor" href="#create-a-custom-log-level"><span>Create a Custom Log Level</span></a></h2>
<p>Sometimes when we use a logger it can be useful to create a custom log level.</p>
<p>For instance, let's say that we want an error logger that is less important than the default error
level and the same importance as a warning. We can create a custom log level to handle this
condition.</p>
<p>Let's create a new log level named <strong>&quot;issue&quot;</strong>.</p>
<p>To create the log level we first must create a <code v-pre>LevelConfig</code> object. If you are using TypeScript
you can import the type from Adze to assist with filling out the required fields.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/logger.ts</span></span>
<span class="line"><span class="token keyword">import</span> adze<span class="token punctuation">,</span> <span class="token punctuation">{</span> setup<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">LevelConfig</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Here we create the configuration for our new custom level named "issue"</span></span>
<span class="line"><span class="token keyword">const</span> issue<span class="token operator">:</span> LevelConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  levelName<span class="token operator">:</span> <span class="token string">'issue'</span><span class="token punctuation">,</span></span>
<span class="line">  level<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  method<span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">  style<span class="token operator">:</span></span>
<span class="line">    <span class="token string">'padding-right: 32px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;'</span><span class="token punctuation">,</span></span>
<span class="line">  terminalStyle<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'white'</span><span class="token punctuation">,</span> <span class="token string">'bgRed'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  emoji<span class="token operator">:</span> <span class="token string">'🔥'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set the format to "json"</span></span>
<span class="line"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  activeLevel<span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span></span>
<span class="line">  levels<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    issue<span class="token punctuation">,</span> <span class="token comment">// &lt;-- Add the issue level configuration value here.</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> adze<span class="token punctuation">.</span>withEmoji<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that we have added our custom log level, let's go to <code v-pre>index.ts</code> and write a log for our new
level.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// ./src/index.ts</span></span>
<span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Logging from the index.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">custom</span><span class="token punctuation">(</span><span class="token string">'issue'</span><span class="token punctuation">,</span> <span class="token string">'An issue has occurred that needs attention.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-output-2" tabindex="-1"><a class="header-anchor" href="#example-output-2"><span>Example Output</span></a></h4>
<p><img src="@source/getting-started/examples/configuration/custom-log-example.png" alt="Example of custom log level output"></p>
<hr>
<p>Adze will always apply namespaces in an additive manner. Inherited namespaces will never be
overwritten by subsequent calls to the <code v-pre>namespace</code> modifier.</p>
</div></template>



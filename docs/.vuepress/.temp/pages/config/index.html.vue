<template><div><h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1>
<p>Adze is a completely configurable library by design that comes with sensible defaults. There are two primary configurations to understand; the Adze configuration and the GlobalStore configuration. In this section we'll take a look at each configuration and explain each property in detail.</p>
<p><em>NOTE: <a href="https://github.com/chalk/chalk#chalklevel" target="_blank" rel="noopener noreferrer">Chalk</a> is what Adze uses under the hood for terminal coloring. Because terminals differ in their color fidelity, Chalk exposes a setting allowing you to specify your fidelity. Adze is basic with its colors so the low level of 1 is sufficient, however, you can change it to your liking with the <code v-pre>terminalColorFidelity</code> option described below. Please refer to the <a href="https://github.com/chalk/chalk#chalklevel" target="_blank" rel="noopener noreferrer">Chalk</a> docs for information about what the fidelity levels mean.</em></p>
<h2 id="adze-configuration" tabindex="-1"><a class="header-anchor" href="#adze-configuration"><span>Adze Configuration</span></a></h2>
<h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span>Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// This is the top level Adze configuration</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Configuration</span> <span class="token punctuation">{</span></span>
<span class="line">  renderLeader<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  renderArgCount<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  logLevel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  useEmoji<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  unstyled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  terminalColorFidelity<span class="token operator">?</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">  captureStacktrace<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  machineReadable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  baseStyle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  logLevels<span class="token operator">?</span><span class="token operator">:</span> LogLevels<span class="token punctuation">;</span></span>
<span class="line">  customLevels<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>LogLevels<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  meta<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  filters<span class="token operator">?</span><span class="token operator">:</span> AdzeFilters<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// The allowable values for the method property</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ConsoleMethod</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'error'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'warn'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'info'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'log'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'debug'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'trace'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'group'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'groupCollapsed'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'groupEnd'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'table'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dir'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dirxml'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="descriptions" tabindex="-1"><a class="header-anchor" href="#descriptions"><span>Descriptions</span></a></h3>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>renderLeader</td>
<td>true</td>
<td>Render the leader for pretty printed logs which includes the log level name, the emoji, and the number of args in the log.</td>
</tr>
<tr>
<td>renderArgCount</td>
<td>true</td>
<td>Renders the number of args in the leader on pretty printed logs.</td>
</tr>
<tr>
<td>logLevel</td>
<td>8</td>
<td>The highest log level that will be allowed to render.</td>
</tr>
<tr>
<td>useEmoji</td>
<td>false</td>
<td>Toggle emoji's on or off for log rendering.</td>
</tr>
<tr>
<td>unstyled</td>
<td>false</td>
<td>Disables all styling of logs. Useful for stdout use cases.</td>
</tr>
<tr>
<td>terminalColorFidelity</td>
<td>1</td>
<td>Control terminal color fidelity with <a href="https://github.com/chalk/chalk#chalklevel" target="_blank" rel="noopener noreferrer">Chalk</a>.</td>
</tr>
<tr>
<td>captureStacktrace</td>
<td>false</td>
<td>Logs will record their stacktrace when they are created. Disabled by default for performance.</td>
</tr>
<tr>
<td>machineReadable</td>
<td>false</td>
<td>When enabled all logs will be generated as <RouteLink to="/guide/machine-readable-logs.html">machine readable JSON objects</RouteLink>.</td>
</tr>
<tr>
<td>baseStyle</td>
<td><a href="#styling">Reference</a></td>
<td>These styles will be applied to all default log levels.</td>
</tr>
<tr>
<td>logLevels</td>
<td><a href="#log-levels-log-level-definition">Reference</a></td>
<td>Configuration for default Adze log levels.</td>
</tr>
<tr>
<td>customLevels</td>
<td><a href="#log-levels-log-level-definition">Reference</a></td>
<td>Configuration for custom Adze log levels.</td>
</tr>
<tr>
<td>meta</td>
<td><code v-pre>{}</code></td>
<td>Key/value pairs of data to be applied to all logs by default.</td>
</tr>
<tr>
<td>filters</td>
<td><a href="#filters">Reference</a></td>
<td>Filters determine whether logs are allowed to print to the console/terminal based on their log level, label, or namespace.</td>
</tr>
</tbody>
</table>
<h2 id="globalstore-configuration" tabindex="-1"><a class="header-anchor" href="#globalstore-configuration"><span>GlobalStore Configuration</span></a></h2>
<p>When you create a GlobalStore you can provide it with configuration to control it's caching, <a href="#filters">filtering</a>, and <a href="#adze-configuration">configuration</a> overrides.</p>
<h3 id="interface-1" tabindex="-1"><a class="header-anchor" href="#interface-1"><span>Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// This is the top level Adze log configuration</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">GlobalStoreConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  cacheLimit<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  globalCfg<span class="token operator">:</span> Configuration <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="descriptions-1" tabindex="-1"><a class="header-anchor" href="#descriptions-1"><span>Descriptions</span></a></h3>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>cacheLimit</td>
<td>300</td>
<td>The maximum number of logs that GlobalStore will cache. This exists to prevent memory leaks.</td>
</tr>
<tr>
<td>globalCfg</td>
<td><a href="#adze-configuration">Reference</a></td>
<td>Adze configuration that will override all other Adze log configurations.</td>
</tr>
</tbody>
</table>
<h2 id="log-levels-log-level-definition" tabindex="-1"><a class="header-anchor" href="#log-levels-log-level-definition"><span>Log Levels / Log Level Definition</span></a></h2>
<p>The log levels object is made up of key/value pairs where the key is the name of the log level and the value is an object containing configuration about that log level. All properties for a log level definition are required <em>unless</em> you are applying overrides to default log levels.</p>
<h3 id="interface-2" tabindex="-1"><a class="header-anchor" href="#interface-2"><span>Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">/* These are the configurations for default log levels</span>
<span class="line">   and custom log levels. */</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">LogLevels</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>method<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> LogLevelDefinition<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">LogLevelDefinition</span> <span class="token punctuation">{</span></span>
<span class="line">  level<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  method<span class="token operator">:</span> ConsoleMethod<span class="token punctuation">;</span></span>
<span class="line">  style<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  terminal<span class="token operator">:</span> ChalkStyle<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  emoji<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// Overriding some default log level settings</span></span>
<span class="line">  <span class="token literal-property property">logLevels</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">log</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">'🧙‍♂️'</span><span class="token punctuation">,</span> <span class="token comment">// We'll change the default log emoji to a wizard for funsies</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">customLevels</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// We'll create a new log level called foobar that goes to 11</span></span>
<span class="line">    <span class="token literal-property property">foobar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">style</span><span class="token operator">:</span></span>
<span class="line">        <span class="token string">'padding-right: 25px; background: linear-gradient(to right, white, red); color: white; border-color: black;'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">terminal</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'bgRed'</span><span class="token punctuation">,</span> <span class="token string">'white'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">'🤬'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I'm a wizard!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Magic!</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">custom</span><span class="token punctuation">(</span><span class="token string">'foobar'</span><span class="token punctuation">,</span> <span class="token string">'#$%&amp;%#$@&amp;!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Anger!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span>Output</span></a></h3>
<p><img src="@source/config/examples/log-level-definition-example.png" alt="log level definition customization example"></p>
<p><img src="@source/config/examples/log-level-definition-terminal-example.png" alt="log level definition customization terminal example"></p>
<h2 id="styling" tabindex="-1"><a class="header-anchor" href="#styling"><span>Styling</span></a></h2>
<p>Although Adze comes with some pretty default styles, all logs within Adze can have their styling customized. Default log level styling is a combination of the <code v-pre>baseStyle</code> property plus the <code v-pre>style</code> property on its <a href="#log-levels--log-level-definition">log level definition</a>. For styling logs in the terminal, each log level definition exposes a <code v-pre>terminal</code> property that is an array of <a href="https://github.com/chalk/chalk" target="_blank" rel="noopener noreferrer">Chalk</a> style functions. This section contains a breakdown of what those default styles are as well as a list of possible values for the chalk styles.</p>
<h3 id="default-browser-styles" tabindex="-1"><a class="header-anchor" href="#default-browser-styles"><span>Default Browser Styles</span></a></h3>
<p>This is a comprehensive list of the default browser styles. If you notice, these styles use <code v-pre>padding-right</code> for spacing and alignment. It is a painful way to do this, but due to the different ways each browser handles log styling, the only consistent way for them to align on the right is to use manual padding numbers. The goal of the default styles was to make them as consistent as possible across browsers.</p>
<p><strong>For more information:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/API/Console" target="_blank" rel="noopener noreferrer">MDN Docs - refer to &quot;Styling console output&quot; section</a></p>
<h4 id="base-style" tabindex="-1"><a class="header-anchor" href="#base-style"><span>Base Style</span></a></h4>
<p><code v-pre>font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;</code></p>
<h4 id="default-level-styles" tabindex="-1"><a class="header-anchor" href="#default-level-styles"><span>Default Level Styles</span></a></h4>
<p><em>NOTE: The default styles use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank" rel="noopener noreferrer">template string interpolation</a> to change the padding based on the browser environment.</em></p>
<table>
<thead>
<tr>
<th>Level Name</th>
<th>emoji</th>
<th>Style</th>
</tr>
</thead>
<tbody>
<tr>
<td>alert</td>
<td>🚨</td>
<td><code v-pre>padding-right: 26px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;</code></td>
</tr>
<tr>
<td>error</td>
<td>🔥</td>
<td><code v-pre>padding-right: ${Env.isChrome() ? '29' : '26'}px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;</code></td>
</tr>
<tr>
<td>warn</td>
<td>🔔</td>
<td><code v-pre>background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ${Env.isChrome() ? '34' : '44'}px;</code></td>
</tr>
<tr>
<td>info</td>
<td>📬</td>
<td><code v-pre>padding-right: ${Env.isSafari() ? '49' : '44'}px; background: linear-gradient(to right, #fff, #b2d7ff); color: #465464; border-color: #96b5d7;</code></td>
</tr>
<tr>
<td>fail</td>
<td>❌</td>
<td><code v-pre>padding-right: ${Env.isChrome() ? '43' : '44'}px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;</code></td>
</tr>
<tr>
<td>success</td>
<td>🎉</td>
<td><code v-pre>padding-right: 26px; background: linear-gradient(to right, #fff, #ceedc9); color: #4e594d; border-color: #b7d1b3;</code></td>
</tr>
<tr>
<td>log</td>
<td>📌</td>
<td><code v-pre>padding-right: 50px; background: linear-gradient(to right, #fff, #d9dce0); color: #333435; border-color: #bfc1c5;</code></td>
</tr>
<tr>
<td>debug</td>
<td>🐞</td>
<td><code v-pre>padding-right: 38px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;</code></td>
</tr>
<tr>
<td>verbose</td>
<td>💤</td>
<td><code v-pre>padding-right: 26px; border-color: 1px solid #d9dce0; color: #999999; border-color: #cbc9c9;</code></td>
</tr>
</tbody>
</table>
<h4 id="output-1" tabindex="-1"><a class="header-anchor" href="#output-1"><span>Output</span></a></h4>
<p><img src="@source/config/examples/default-browser-styles-example.png" alt="default browser styles example"></p>
<h3 id="default-terminal-styles" tabindex="-1"><a class="header-anchor" href="#default-terminal-styles"><span>Default Terminal Styles</span></a></h3>
<p>Adze styling for the terminal makes use of a library named <a href="https://github.com/chalk/chalk" target="_blank" rel="noopener noreferrer">Chalk</a>. Chalk exposes several formatting functions for terminal text styling that Adze exposes in its configuration.</p>
<p><em>NOTE: <a href="https://github.com/chalk/chalk#chalklevel" target="_blank" rel="noopener noreferrer">Chalk</a> is what Adze uses under the hood for terminal coloring. Because terminals differ in their color fidelity, Chalk exposes a setting allowing you to specify your fidelity. Adze is basic with its colors so the low level of 1 is sufficient, however, you can change it to your liking with the <code v-pre>terminalColorFidelity</code> option described in the <a href="#adze-configuration">Adze Configuration</a> section above. Please refer to the <a href="https://github.com/chalk/chalk#chalklevel" target="_blank" rel="noopener noreferrer">Chalk</a> docs for information about what the fidelity levels mean.</em></p>
<h4 id="default-level-styles-1" tabindex="-1"><a class="header-anchor" href="#default-level-styles-1"><span>Default Level Styles</span></a></h4>
<table>
<thead>
<tr>
<th>Level Name</th>
<th>emoji</th>
<th>Style</th>
</tr>
</thead>
<tbody>
<tr>
<td>alert</td>
<td>🚨</td>
<td><code v-pre>['white', 'bold', 'bgRed']</code></td>
</tr>
<tr>
<td>error</td>
<td>🔥</td>
<td><code v-pre>['bgRed', 'white']</code></td>
</tr>
<tr>
<td>warn</td>
<td>🔔</td>
<td><code v-pre>['bgYellow', 'gray']</code></td>
</tr>
<tr>
<td>info</td>
<td>📬</td>
<td><code v-pre>['bgBlue', 'white']</code></td>
</tr>
<tr>
<td>fail</td>
<td>❌</td>
<td><code v-pre>['bgRed', 'white']</code></td>
</tr>
<tr>
<td>success</td>
<td>🎉</td>
<td><code v-pre>['bgGreen', 'gray']</code></td>
</tr>
<tr>
<td>log</td>
<td>📌</td>
<td><code v-pre>['bgGray', 'white']</code></td>
</tr>
<tr>
<td>debug</td>
<td>🐞</td>
<td><code v-pre>['bgBlack', 'white']</code></td>
</tr>
<tr>
<td>verbose</td>
<td>💤</td>
<td><code v-pre>['italic', 'white']</code></td>
</tr>
</tbody>
</table>
<h4 id="available-chalk-styles" tabindex="-1"><a class="header-anchor" href="#available-chalk-styles"><span>Available Chalk Styles</span></a></h4>
<table>
<thead>
<tr>
<th>Text</th>
<th>Background</th>
<th>Style</th>
</tr>
</thead>
<tbody>
<tr>
<td>black</td>
<td>bgBlack</td>
<td>reset</td>
</tr>
<tr>
<td>red</td>
<td>bgRed</td>
<td>bold</td>
</tr>
<tr>
<td>green</td>
<td>bgGreen</td>
<td>dim</td>
</tr>
<tr>
<td>yellow</td>
<td>bgYellow</td>
<td>italic</td>
</tr>
<tr>
<td>blue</td>
<td>bgBlue</td>
<td>underline</td>
</tr>
<tr>
<td>magenta</td>
<td>bgMagenta</td>
<td>inverse</td>
</tr>
<tr>
<td>cyan</td>
<td>bgCyan</td>
<td>hidden</td>
</tr>
<tr>
<td>white</td>
<td>bgWhite</td>
<td>strikethrough</td>
</tr>
<tr>
<td>gray</td>
<td>bgGray</td>
<td>visible</td>
</tr>
<tr>
<td>grey</td>
<td>bgGrey</td>
<td></td>
</tr>
<tr>
<td>blackBright</td>
<td>bgBlackBright</td>
<td></td>
</tr>
<tr>
<td>redBright</td>
<td>bgRedBright</td>
<td></td>
</tr>
<tr>
<td>greenBright</td>
<td>bgGreenBright</td>
<td></td>
</tr>
<tr>
<td>yellowBright</td>
<td>bgYellowBright</td>
<td></td>
</tr>
<tr>
<td>blueBright</td>
<td>bgBlueBright</td>
<td></td>
</tr>
<tr>
<td>magentaBright</td>
<td>bgMagentaBright</td>
<td></td>
</tr>
<tr>
<td>cyanBright</td>
<td>bgCyanBright</td>
<td></td>
</tr>
<tr>
<td>whiteBright</td>
<td>bgWhiteBright</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="output-2" tabindex="-1"><a class="header-anchor" href="#output-2"><span>Output</span></a></h4>
<p><img src="@source/config/examples/default-terminal-styles-example.png" alt="default terminal styles example"></p>
<h2 id="filters" tabindex="-1"><a class="header-anchor" href="#filters"><span>Filters</span></a></h2>
<p>Filters determine whether logs are allowed to print to the console/terminal based on their log level, <RouteLink to="/guide/modifiers.html#label">label</RouteLink>, or <RouteLink to="/guide/modifiers.html#namespace-ns">namespace</RouteLink>. When filtering levels, you can provide a <RouteLink to="/guide/data.html#level-filter">level filter</RouteLink> data type.</p>
<p>Each filter type can specify and <code v-pre>include</code> or <code v-pre>exclude</code> statement. Include tells Adze to only render logs that are included in the value set. Exclude says to not render any logs that are included in the value set. If both are specified, include takes precedence over exclude in case of conflicts.</p>
<h3 id="interface-3" tabindex="-1"><a class="header-anchor" href="#interface-3"><span>Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AdzeFilters</span> <span class="token punctuation">{</span></span>
<span class="line">  hideAll<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  level<span class="token operator">?</span><span class="token operator">:</span> GlobalFilterOptions<span class="token operator">&lt;</span>LevelFilter<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  label<span class="token operator">?</span><span class="token operator">:</span> GlobalFilterOptions<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  namespace<span class="token operator">?</span><span class="token operator">:</span> GlobalFilterOptions<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GlobalFilterOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  include<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span></span>
<span class="line">  exclude<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> cfg <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  filters<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    namespace<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'I should print.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'I should print.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'I should not print.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'I should not print because I do not have a namespace.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output-3" tabindex="-1"><a class="header-anchor" href="#output-3"><span>Output</span></a></h3>
<p><img src="@source/config/examples/filters-example.png" alt="filters example"></p>
<p><img src="@source/config/examples/filters-terminal-example.png" alt="filters terminal example"></p>
</div></template>



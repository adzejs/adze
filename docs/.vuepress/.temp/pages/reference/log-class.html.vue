<template><div><h1 id="log-class" tabindex="-1"><a class="header-anchor" href="#log-class"><span>Log Class</span></a></h1>
<p>The <strong>Log Class</strong> is the core of the Adze library and contains most of the features. All Adze logs
begin with the Log Class.</p>
<p>When generating a new log, you'll start by importing the Log Class which is the default export
of the library. In all examples you will see it imported with the name <code v-pre>adze</code>.</p>
<h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h2 id="class-methods" tabindex="-1"><a class="header-anchor" href="#class-methods"><span>Class Methods</span></a></h2>
<p>Every modifier and terminator method within the Log Class has a corresponding static implementation.
This allows the user to call and instantiate an instance of the Log Class <strong>without</strong> the need of
explicitly calling <code v-pre>new Log()</code>.</p>
<h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Example value to be logged.</span></span>
<span class="line"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">adze<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is a log.'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters"><span>Getters</span></a></h3>
<p>The public getters are used for getting data from a log instance.</p>
<ul>
<li><a href="">data</a> - Returns the log data.</li>
<li><a href="">modifierData</a> - Returns object containing key/values from called modifiers.</li>
<li><a href="">configuration</a> - Returns the configuration that this log instance is using.</li>
</ul>
<h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers"><span>Modifiers</span></a></h3>
<p>Modifiers are used to alter log behavior or add context.</p>
<ul>
<li><a href="">assert</a></li>
<li><a href="">closeThread</a></li>
<li><a href="">count</a></li>
<li><a href="">countClear</a></li>
<li><a href="">countReset</a></li>
<li><a href="">dir</a></li>
<li><a href="">dirxml</a></li>
<li><a href="">dump</a></li>
<li><a href="">format</a></li>
<li><a href="">group</a></li>
<li><a href="">groupCollapsed</a></li>
<li><a href="">groupEnd</a></li>
<li><a href="">if</a></li>
<li><a href="">label</a></li>
<li><a href="">meta</a></li>
<li><a href="">namespace/ns</a></li>
<li><a href="">silent</a></li>
<li><a href="">table</a></li>
<li><a href="">time</a></li>
<li><a href="">timeEnd</a></li>
<li><a href="">timeNow</a></li>
<li><a href="">timestamp</a></li>
<li><a href="">trace</a></li>
<li><a href="">withEmoji</a></li>
</ul>
<h3 id="terminators" tabindex="-1"><a class="header-anchor" href="#terminators"><span>Terminators</span></a></h3>
<p>Terminators end a log and generate it at the specified level.</p>
<ul>
<li><a href="">alert</a></li>
<li><a href="">error</a></li>
<li><a href="">warn</a></li>
<li><a href="">info</a></li>
<li><a href="">fail</a></li>
<li><a href="">success</a></li>
<li><a href="">log</a></li>
<li><a href="">debug</a></li>
<li><a href="">verbose</a></li>
<li><a href="">custom</a></li>
<li><a href="">thread</a></li>
<li><a href="">seal</a></li>
<li><a href="">sealTag</a></li>
</ul>
<h3 id="other-methods" tabindex="-1"><a class="header-anchor" href="#other-methods"><span>Other Methods</span></a></h3>
<ul>
<li><a href="">print</a> - Prints the log message to the console if it has a generated message.</li>
</ul>
</div></template>



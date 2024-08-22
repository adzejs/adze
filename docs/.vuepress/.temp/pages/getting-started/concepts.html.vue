<template><div><h1 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts"><span>Concepts</span></a></h1>
<p>Adze as a library has a few core goals it attempts to meet.</p>
<p>The first goal is to provide <strong>a logging library that just works</strong> in both the node and browser
environments.</p>
<p>The second goal is to provide <strong>a simple Typescript compatible API</strong> that wraps, extends, or replicates
all of the functionality of the standard <a href="https://developer.mozilla.org/en-US/docs/Web/API/console" target="_blank" rel="noopener noreferrer">Console API</a>.
The API is nearly identical to the standard console API, but is more feature rich and includes
chaining methods for configuring your logs as you go.</p>
<p>Lastly, <strong>most other libraries do too much</strong>. Adze seeks to separate concerns when it comes to
generating logs and transporting them to another source. Other libraries tend to try to solve both
problems which leads to library bloat. Adze provides a middleware API and log listeners for handling
log data transport separately.</p>
<h2 id="lifecycle" tabindex="-1"><a class="header-anchor" href="#lifecycle"><span>Lifecycle</span></a></h2>
<p>Let's take a look under the hood to see how the Adze architecture enables its API and see when the
various middleware hooks are called.</p>
<p><img src="@source/getting-started/assets/basic-architecture.svg" alt="Lifecycle Diagram of Adze Logs"></p>
<h2 id="the-log-chain" tabindex="-1"><a class="header-anchor" href="#the-log-chain"><span>The Log Chain</span></a></h2>
<p>As you can see in the diagram, a log chain is made up of three parts:</p>
<ul>
<li><RouteLink to="/getting-started/adze-class.html">Log Class</RouteLink>
<ul>
<li>This is where all logs begin, often by calling its static methods to start a chain.</li>
</ul>
</li>
<li><RouteLink to="/getting-started/modifiers.html">Modifiers</RouteLink>
<ul>
<li>These log methods modify the instance and then return it.</li>
</ul>
</li>
<li><RouteLink to="/getting-started/default-terminators.html">Terminator</RouteLink>
<ul>
<li>These methods end the chain and generate the log.</li>
</ul>
</li>
</ul>
<h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">//[Log Class].[Modifier].[Modifier].[Terminator](...arguments)</span></span>
<span class="line">adze<span class="token punctuation">.</span>timestamp<span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging the current time since pageload.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="log-class" tabindex="-1"><a class="header-anchor" href="#log-class"><span>Log Class</span></a></h3>
<p><strong>Every modifier and terminator method that can be called has a static implementation.</strong></p>
<p>By calling any of the methods statically, it will also generate a log instance. If a modifier was
called, the log instance will be returned and you can continue your chain. To finalize and print a
log, simply call a terminator method.</p>
<h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers"><span>Modifiers</span></a></h3>
<p>Once you have a Log instance you can immediately <a href="terminators">terminate</a> it, or you can call
certain methods that this library calls <strong>modifiers</strong>. Modifiers are methods on a Log instance
that changes its behavior. For example, if you wanted to add a performance timestamp to your log you
could use the <code v-pre>timeNow</code> modifier.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">adze<span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is the time from pageload.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>And it would output like this:</p>
<p><img src="@source/getting-started/examples/modifier-example.png" alt="Adze log with time now modifier preview"></p>
<hr>
<p>For documentation of all of the supported modifiers, please read the <a href="">Modifiers</a> page of the
<a href="">Reference Manual</a>.</p>
<h3 id="terminator" tabindex="-1"><a class="header-anchor" href="#terminator"><span>Terminator</span></a></h3>
<p>In our <a href="modifiers">Modifiers</a> example code above, you can see we ended our
chain with <RouteLink to="/getting-started/default-terminators.html#log"><code v-pre>log()</code></RouteLink>. The log method is one of the eight <RouteLink to="/getting-started/default-terminators.html">default log terminators</RouteLink>.
The library also comes with <RouteLink to="/getting-started/other-terminators.html">other special terminators</RouteLink> like
<RouteLink to="/getting-started/other-terminators.html#custom">custom</RouteLink>. A log method is considered a terminator when it
ends your log chain and returns a <RouteLink to="/getting-started/data.html#terminated-log-object">terminated log object</RouteLink>.</p>
<p>For more information about all of the supported terminators, please read the <a href="">Terminators</a> page of
the <a href="">Reference Manual</a>.</p>
</div></template>



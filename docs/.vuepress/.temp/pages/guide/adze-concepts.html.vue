<template>
  <div>
    <h1 id="adze-concepts" tabindex="-1">
      <a class="header-anchor" href="#adze-concepts"><span>Adze Concepts</span></a>
    </h1>
    <p>
      Adze as a library has a few core goals it attempts to meet. The first goal is to provide an
      API that wraps, extends, or replicates all of the functionality of the standard
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/console"
        target="_blank"
        rel="noopener noreferrer"
        >Console API</a
      >. The standard console API allows you to create logs based on severity, however other utility
      logs like table, assert, trace, etc. are all tied to the severity of <code v-pre>log</code>.
      Adze takes a different approach by turning these into
      <RouteLink to="/guide/modifiers.html">modifiers</RouteLink> which can be terminated by
      whichever severity level you prefer.
    </p>
    <p>
      The second goal of the Adze project is to give you a natural log writing experience that
      doesn't feel too different from the standard. To make the experience of using Adze feel
      natural, Adze provides a chainable API that is similar to the standard
      <code v-pre>console.log()</code> API.
    </p>
    <p>
      Lastly, most other libraries <strong>do too much</strong>. Adze seeks to separate concerns
      when it comes to generating logs and transporting them to another source. Other libraries tend
      to try to solve both problems, but over time what ends up occurring is that the library author
      isn't able to predict all of the different ways someone might want to transport their log
      data. This ends up creating a lot of bloat in the library. You end up with support for
      transports you may never use. The library's configuration also ends up becoming a mess to
      support all of these different transports.
    </p>
    <p>
      Adze rejects the idea of coupling the log inputs with transport outputs which is why the core
      library only offers
      <RouteLink to="/guide/globalstore-concepts.html#listeners">listeners</RouteLink> as a way of
      collecting log data. With access to the listeners the end user can harvest the desired data
      and do with it as they please. However, we also understand it's nice to have an out-of-the-box
      solution for transports. Over time we hope to provide some secondary packages that can be
      installed along side of Adze to provide some simple transport options.
    </p>
    <h2 id="lifecycle" tabindex="-1">
      <a class="header-anchor" href="#lifecycle"><span>Lifecycle</span></a>
    </h2>
    <p>
      Let's take a look under the hood to see how the Adze architecture enables its API.
      <em>Please keep in mind this diagram is not exhaustive.</em>
    </p>
    <p>
      <img src="@source/guide/assets/basic-architecture.svg" alt="Lifecycle Diagram of Adze Logs" />
    </p>
    <h2 id="the-log-chain" tabindex="-1">
      <a class="header-anchor" href="#the-log-chain"><span>The Log Chain</span></a>
    </h2>
    <p>As you can see in the diagram, a log chain is made up of three parts:</p>
    <ul>
      <li>
        <RouteLink to="/guide/factories.html">Log Factory</RouteLink>
        <ul>
          <li>This is a function that generates a log instance and returns it.</li>
        </ul>
      </li>
      <li>
        <RouteLink to="/guide/modifiers.html">Modifiers</RouteLink>
        <ul>
          <li>These log methods modify the instance and then return it.</li>
        </ul>
      </li>
      <li>
        <RouteLink to="/guide/default-terminators.html">Terminator</RouteLink>
        <ul>
          <li>These methods end the chain and finalize the log.</li>
        </ul>
      </li>
    </ul>
    <h3 id="log-factory" tabindex="-1">
      <a class="header-anchor" href="#log-factory"><span>Log Factory</span></a>
    </h3>
    <p>
      Adze comes with a function named
      <RouteLink to="/guide/factories.html#adze"><code v-pre>adze()</code></RouteLink> out of the
      box. This function is a <RouteLink to="/guide/factories.html">factory</RouteLink> that creates
      a new Adze instance. Most of the time when interacting with this library you will either use
      this factory directly or assign it to a variable after calling
      <RouteLink to="/guide/factories.html#seal">seal</RouteLink>, but we'll come back to that later
      in the guide.
    </p>
    <h3 id="modifiers" tabindex="-1">
      <a class="header-anchor" href="#modifiers"><span>Modifiers</span></a>
    </h3>
    <p>
      Once you have an instance of Adze you can immediately <a href="terminators">terminate</a> it,
      or you can call certain methods that this library calls modifiers. Modifiers are methods on an
      Adze log instance that changes its behavior. For example, if you wanted to add a performance
      timestamp to your log you would use the <code v-pre>timeNow</code> modifier.
    </p>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is the time from pageload.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <p>And it would output like this:</p>
    <p>
      <img
        src="@source/guide/examples/modifier-example.png"
        alt="Adze log with time now modifier preview"
      />
    </p>
    <h3 id="terminator" tabindex="-1">
      <a class="header-anchor" href="#terminator"><span>Terminator</span></a>
    </h3>
    <p>
      In our <a href="modifiers">Modifiers</a> example code above, you can see we ended our chain
      with <RouteLink to="/guide/default-terminators.html#log"><code v-pre>log()</code></RouteLink
      >. The log method is one of the eight
      <RouteLink to="/guide/default-terminators.html">default log terminators</RouteLink>. The
      library also comes with
      <RouteLink to="/guide/other-terminators.html">other special terminators</RouteLink> like
      <RouteLink to="/guide/other-terminators.html#custom">custom</RouteLink>. A log method is
      considered a terminator when it ends your log chain and returns a
      <RouteLink to="/guide/data.html#terminated-log-object">terminated log object</RouteLink>.
    </p>
    <h2 id="common-usage" tabindex="-1">
      <a class="header-anchor" href="#common-usage"><span>Common Usage</span></a>
    </h2>
    <p>
      Most of the time when you are using a logging library you will want to configure a logging
      instance once and then use it throughout your codebase. This is done with the
      <RouteLink to="/guide/factories.html#seal">seal factory</RouteLink>. When your configuration
      is sealed a new log factory is returned. All subsequent logs generated from that factory will
      inherit the configuration you sealed.
    </p>
    <h3 id="example" tabindex="-1">
      <a class="header-anchor" href="#example"><span>Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token comment">// ----- setup.js ----- //</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* We'll create a GlobalStore to enable labels and counting</span>
<span class="line">   for our example. */</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Let's create a log listener to transport our log data</span>
<span class="line">   to a destination. We'll listen to all log levels. */</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// If a log did not print then we will ignore transporting it.</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>printed<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Do transport logic here.</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create an Adze configuration (or import it from an env file).</span></span>
<span class="line"><span class="token keyword">const</span> cfg <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we'll create a new factory using seal</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ----- elsewhere.js ----- //</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'~/setup.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// And now we can create new logs using our new factory</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred! Oh no!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Another error occurred! Quick! Help!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I won't display because my log level is too high."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="output" tabindex="-1">
      <a class="header-anchor" href="#output"><span>Output</span></a>
    </h3>
    <p>
      <img
        src="@source/guide/examples/common-usage-example.png"
        alt="common usage example with seal"
      />
    </p>
    <p>
      <img
        src="@source/guide/examples/common-usage-terminal-example.png"
        alt="common usage terminal example with seal"
      />
    </p>
    <h2 id="standard-output-stdout" tabindex="-1">
      <a class="header-anchor" href="#standard-output-stdout"
        ><span>Standard Output (stdout)</span></a
      >
    </h2>
    <p>
      When writing adze logs in a Node environment there may be times where logs in stdout need to
      be unstyled to avoid styling artifacts polluting the log strings. Adze provides a simple
      <RouteLink to="/config/#adze-configuration">configuration option</RouteLink> to turn off
      styling.
    </p>
    <h3 id="example-1" tabindex="-1">
      <a class="header-anchor" href="#example-1"><span>Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token comment">// ----- setup.js ----- //</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a new unstyled log factory using seal</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> stdout <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">unstyled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ----- elsewhere.js ----- //</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> stdout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'~/setup.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// And now we can create new unstyled logs using our unstyled factory</span></span>
<span class="line"><span class="token function">stdout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred! This log has no styles applied.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="filtering" tabindex="-1">
      <a class="header-anchor" href="#filtering"><span>Filtering</span></a>
    </h2>
    <p>
      One of the primary features of Adze is to allow you to filter your logs while developing and
      debugging. These filters are created within the optional
      <RouteLink to="/config/#adze-configuration">configuration</RouteLink> that you provide Adze
      logs.
    </p>
    <h3 id="example-2" tabindex="-1">
      <a class="header-anchor" href="#example-2"><span>Example</span></a>
    </h3>
    <p>
      In our app's boot file (named <code v-pre>main.ts</code> for our example) we'll create a
      <RouteLink to="/guide/globalstore-concepts.html">GlobalStore</RouteLink> for
      <RouteLink to="/guide/globalstore-concepts.html#listeners">listening</RouteLink> to our logs
      and we'll configure our adze factory with some
      <RouteLink to="/config/#filters">filters</RouteLink> that we'll
      <RouteLink to="/guide/modifiers.html#seal">seal</RouteLink> into a new factory named
      <code v-pre>log</code>.
    </p>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre v-pre><code><span class="line"><span class="token comment">// Main.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Generate our GlobalStore for listening to our logs</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's use the globalStore instance reference to add a log listener.</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// printed will be false if the log was never written to the console.</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>printed<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// do something with data</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Let's create an Adze configuration with some filters. In a real-world environment</span>
<span class="line">   you would import this configuration from a environment file. */</span></span>
<span class="line"><span class="token keyword">const</span> cfg <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'new-feature'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we'll seal our configuration into a new factory named log</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Doing some boot stuff...</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      Now, elsewhere in our codebase we'll import our <code v-pre>log</code> factory for creating
      new logs.
    </p>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token comment">// ----- MyNewFeature.ts -----</span></span>
<span class="line"><span class="token comment">// Import our log factory</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./main.ts'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">myNewFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ns() is an alias for namespace()</span></span>
<span class="line">  <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'new-feature'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'Staring to run myNewFeature'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// Do some logic for our new feature...</span></span>
<span class="line">  <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'new-feature'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Dumping a value in our code'</span><span class="token punctuation">,</span> <span class="token constant">X</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// Do some more logic...</span></span>
<span class="line">  <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'new-feature'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Completed execution of myNewFeature!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      The code above will exclude any logs with a namespace of &quot;new-feature&quot; from being
      written to the console. Also take notice of the listener we created in our
      <code v-pre>main.ts</code>. It watches all log levels (represented by the
      <code v-pre>'*'</code>) and will fire for the logs with a namespace of
      <code v-pre>'new-feature'</code> even though they are being filtered out. This is done to give
      you flexibility in how you want to handle your logs in your listeners.
    </p>
    <p>
      Also notice in our code we are checking if the printed value is true. We are doing this
      because any log that was not written to the console will have a <code v-pre>false</code> value
      for <code v-pre>printed</code>. This is an easy way to ignore logs that are hidden by any of
      our filters.
    </p>
  </div>
</template>

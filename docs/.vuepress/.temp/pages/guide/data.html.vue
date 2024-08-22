<template>
  <div>
    <h1 id="data" tabindex="-1">
      <a class="header-anchor" href="#data"><span>Data</span></a>
    </h1>
    <p>
      In this section of the guide we'll take a look at some of the important data structures that
      exist across the Adze API.
    </p>
    <h2 id="collections" tabindex="-1">
      <a class="header-anchor" href="#collections"><span>Collections</span></a>
    </h2>
    <p>
      A Collection is simply an array of Adze log instances that extend from the
      <strong>BaseLog</strong> class. There are two types of instances that extend BaseLog,
      <strong>BundledLog</strong> and <strong>Log</strong>. You will never interact with a
      <strong>BaseLog</strong> instance directly.
    </p>
    <p>
      A <strong>Log</strong> is the instance type that is created whenever you normally terminate a
      log.
    </p>
    <p>
      A <strong>BundledLog</strong> is a log instance that is generated from a
      <RouteLink to="/guide/factories.html#bundle">bundle</RouteLink> factory. These log instances
      have a getter that allows you to access the log bundle.
    </p>
    <p>
      Collections are typically used in conjunction with filter functions like
      <RouteLink to="/guide/filtering-and-utility-functions.html#filternamespace"
        >filterNamespace</RouteLink
      >,
      <RouteLink to="/guide/filtering-and-utility-functions.html#filterlabel">filterLabel</RouteLink
      >,
      <RouteLink to="/guide/filtering-and-utility-functions.html#filterlevel">filterLevel</RouteLink
      >, and
      <RouteLink to="/guide/filtering-and-utility-functions.html#filtercollection"
        >filterCollection</RouteLink
      >.
    </p>
    <h3 id="interface" tabindex="-1">
      <a class="header-anchor" href="#interface"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Collection</span> <span class="token operator">=</span> BaseLog<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="bundle-example" tabindex="-1">
      <a class="header-anchor" href="#bundle-example"><span>Bundle Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a log bundle</span></span>
<span class="line"><span class="token keyword">const</span> bundled <span class="token operator">=</span> <span class="token function">bundle</span><span class="token punctuation">(</span><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">bundled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'collect'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'This is an error!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">bundled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'collect'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'A bundled log with namespaces.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">bundled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'collect'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Successfully bundled this log!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">bundled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'collect'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Another log in the bundle.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get our Collection from our bundle</span></span>
<span class="line"><span class="token keyword">const</span> collection <span class="token operator">=</span> log<span class="token punctuation">.</span>bundle<span class="token punctuation">;</span></span>
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
    <h3 id="globalstore-example" tabindex="-1">
      <a class="header-anchor" href="#globalstore-example"><span>GlobalStore Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We'll create a GlobalStore to capture our logs</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get our collection from the GlobalStore</span></span>
<span class="line"><span class="token keyword">const</span> collection <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="label-data-object" tabindex="-1">
      <a class="header-anchor" href="#label-data-object"><span>Label Data Object</span></a>
    </h2>
    <p>
      A label data object is generated from a label instance. This object contains data that from
      globally tracked <RouteLink to="/guide/modifiers.html#count">counters</RouteLink>,
      <RouteLink to="/guide/modifiers.html#time">timers</RouteLink>, and
      <RouteLink to="/guide/other-terminators.html#thread">MDC context</RouteLink>.
    </p>
    <h3 id="interface-1" tabindex="-1">
      <a class="header-anchor" href="#interface-1"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">LabelData</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  timeElapsed<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="level-filter" tabindex="-1">
      <a class="header-anchor" href="#level-filter"><span>Level Filter</span></a>
    </h2>
    <p>
      A level filter type is a value that represents one or more log levels. Level Filters are used
      with any method that allows you to specify a target log level like
      <RouteLink to="/guide/using-globalstore.html#addlistener">addListener</RouteLink>,
      <RouteLink to="/guide/filtering-and-utility-functions.html#filterlevel">filterLevel</RouteLink
      >, or within the
      <RouteLink to="/config/#filters">filter configurations on Adze logs</RouteLink>.
    </p>
    <table>
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code v-pre>'*'</code></td>
          <td>Target all logs of any level.</td>
        </tr>
        <tr>
          <td><code v-pre>[min, '-', max]</code></td>
          <td>Targets logs with levels of <code v-pre>min &lt;= level &lt;= max</code>.</td>
        </tr>
        <tr>
          <td><code v-pre>[n1, n2, n3, n*]</code></td>
          <td>Array of numbers representing targeted log level numbers.</td>
        </tr>
      </tbody>
    </table>
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
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// For our example, we'll create a GlobalStore and add some listeners</span></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Our first listener will target all logs of any level</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// do stuff...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Our next listener will target logs with a level within our range</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'-'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// do stuff...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Our last listener will target logs of specific levels</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// do stuff...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="output" tabindex="-1">
      <a class="header-anchor" href="#output"><span>Output</span></a>
    </h3>
    <p>
      <img src="@source/guide/examples/log-render-example.png" alt="log render example output" />
    </p>
    <p>
      <img
        src="@source/guide/examples/log-render-terminal-example.png"
        alt="log render example terminal output"
      />
    </p>
    <h2 id="log-data" tabindex="-1">
      <a class="header-anchor" href="#log-data"><span>Log Data</span></a>
    </h2>
    <p>
      The log data object contains all of the important meta data from a log's instance. The log
      data object is used throughout the Adze API. For example, when a
      <RouteLink to="/guide/using-globalstore.html#addlistener">log listener</RouteLink> on a
      <RouteLink to="/guide/globalstore-concepts.html">GlobalStore</RouteLink> is fired, the
      callback function will be invoked with two parameters; the
      <strong>log data object</strong> and a
      <RouteLink to="/guide/adze-concepts.html#logrender">log render</RouteLink>.
    </p>
    <p>
      A log data object can be manually retrieved from a log instance using the
      <RouteLink to="/guide/getters-and-setters.html#data">data getter</RouteLink>.
    </p>
    <p>
      A log data object can also be used to create a clone of a log by
      <RouteLink to="/guide/getters-and-setters.html#hydrate">hydrating</RouteLink> a new log
      instance from the log data object.
    </p>
    <p>
      Final log data extends log data and changes the possible values of some properties. Certain
      methods require final log data to be provided to it. Use the
      <RouteLink to="/guide/filtering-and-utility-functions.html#isfinallogdata"
        >isFinalLogData</RouteLink
      >
      type guard to verify it.
    </p>
    <blockquote>
      <p>Property showTimestamp available in Version &gt;= 1.1</p>
    </blockquote>
    <h3 id="interface-2" tabindex="-1">
      <a class="header-anchor" href="#interface-2"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token comment">// The log data object's interface</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">LogData</span> <span class="token punctuation">{</span></span>
<span class="line">  args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  assertion<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  cfg<span class="token operator">:</span> Defaults<span class="token punctuation">;</span></span>
<span class="line">  context<span class="token operator">:</span> MetaData<span class="token punctuation">;</span></span>
<span class="line">  definition<span class="token operator">:</span> LogLevelDefinition <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  dumpContext<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  expression<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  isSilent<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  printed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  showTimestamp<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  label<span class="token operator">:</span> LabelData<span class="token punctuation">;</span></span>
<span class="line">  level<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  meta<span class="token operator">:</span> MetaData<span class="token punctuation">;</span></span>
<span class="line">  modifierQueue<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">(</span>ctxt<span class="token operator">:</span> BaseLog<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  namespace<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  stacktrace<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  timeNow<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  timestamp<span class="token operator">:</span> LogTimestamp <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// This is the definition for log meta data after termination</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">FinalLogData</span> <span class="token keyword">extends</span> <span class="token class-name">LogData</span> <span class="token punctuation">{</span></span>
<span class="line">  level<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  definition<span class="token operator">:</span> LogLevelDefinition<span class="token punctuation">;</span></span>
<span class="line">  args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  timestamp<span class="token operator">:</span> LogTimestamp<span class="token punctuation">;</span></span>
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
    <h3 id="property-descriptions" tabindex="-1">
      <a class="header-anchor" href="#property-descriptions"><span>Property Descriptions</span></a>
    </h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Documentation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>args</td>
          <td>Arguments provided to the log instance.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>assertion</td>
          <td>The boolean result of the assertion expression on the log instance.</td>
          <td><RouteLink to="/guide/modifiers.html#assert">assert</RouteLink></td>
        </tr>
        <tr>
          <td>cfg</td>
          <td>The configuration of the instance.</td>
          <td><RouteLink to="/config/#adze-configuration">Config</RouteLink></td>
        </tr>
        <tr>
          <td>context</td>
          <td>The context value of an MDC thread.</td>
          <td><RouteLink to="/guide/mapped-diagnostic-context.html">MDC</RouteLink></td>
        </tr>
        <tr>
          <td>definition</td>
          <td>Configuration of the log level of the instance.</td>
          <td>
            <RouteLink to="/config/#log-levels-log-level-definition"
              >Log Level Definition</RouteLink
            >
          </td>
        </tr>
        <tr>
          <td>dumpContext</td>
          <td>Boolean indicating if the mapped diagnostic context (MDC) should be rendered.</td>
          <td><RouteLink to="/guide/mapped-diagnostic-context.html">MDC</RouteLink></td>
        </tr>
        <tr>
          <td>expression</td>
          <td>The boolean result of the test expression on the log instance.</td>
          <td><RouteLink to="/guide/modifiers.html#test">test</RouteLink></td>
        </tr>
        <tr>
          <td>isSilent</td>
          <td>Boolean value indicating if the log should execute silently.</td>
          <td><RouteLink to="/guide/modifiers.html#silent">silent</RouteLink></td>
        </tr>
        <tr>
          <td>printed</td>
          <td>
            Boolean value indicating if the log has been printed to the console (versions &gt;=
            1.3.0).
          </td>
          <td><a href="#terminated-log-object">Terminated Log Object</a></td>
        </tr>
        <tr>
          <td>showTimestamp</td>
          <td>Boolean value indicating that the log should render an ISO 8601 timestamp.</td>
          <td><RouteLink to="/guide/modifiers.html#timestamp">timestamp</RouteLink></td>
        </tr>
        <tr>
          <td>label</td>
          <td>The values of a label instance attached to the log instance.</td>
          <td><a href="#label-data-object">Label</a></td>
        </tr>
        <tr>
          <td>level</td>
          <td>The log level of the instance.</td>
          <td>
            <RouteLink to="/config/#log-levels-log-level-definition"
              >Log Level Definition</RouteLink
            >
          </td>
        </tr>
        <tr>
          <td>meta</td>
          <td>Meta data attached to the instance.</td>
          <td><RouteLink to="/guide/modifiers.html#meta">meta</RouteLink></td>
        </tr>
        <tr>
          <td>modifierQueue</td>
          <td>
            The queue of modifiers that will be executed against the log instance when it is
            terminated.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>namespace</td>
          <td>Array of namespaces associate to the log instance.</td>
          <td><RouteLink to="/guide/modifiers.html#namespace-ns">namespace / ns</RouteLink></td>
        </tr>
        <tr>
          <td>stacktrace</td>
          <td>A stringified stacktrace that leads up to when the log instance was created.</td>
          <td><RouteLink to="/config/#adze-configuration">Config</RouteLink></td>
        </tr>
        <tr>
          <td>timeNow</td>
          <td>The timestamp from executing a timeNow modifier.</td>
          <td><RouteLink to="/guide/modifiers.html#timenow">timeNow</RouteLink></td>
        </tr>
        <tr>
          <td>timestamp</td>
          <td>Object containing time signatures of when the log instance was created.</td>
          <td><a href="#log-timestamp">Log Timestamp</a></td>
        </tr>
      </tbody>
    </table>
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
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a log instance with some various properties</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ns</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timeNow<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Some important information.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's get the log data by using the data getter on the instance</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> log<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Displaying the value of the log data object!'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h3 id="output-1" tabindex="-1">
      <a class="header-anchor" href="#output-1"><span>Output</span></a>
    </h3>
    <p><img src="@source/guide/examples/log-data-example.png" alt="log data example output" /></p>
    <p>
      <img
        src="@source/guide/examples/log-data-terminal-example.png"
        alt="log data example terminal output"
      />
    </p>
    <h2 id="log-render" tabindex="-1">
      <a class="header-anchor" href="#log-render"><span>Log Render</span></a>
    </h2>
    <p>
      A log render is returned as a sub-property of a
      <a href="#terminated-log-object">terminated log object</a>. The log render is a tuple in the
      form of <code v-pre>[method, args]</code> that you can use to
      <RouteLink to="/guide/filtering-and-utility-functions.html#rerender">re-render</RouteLink>
      your log exactly how the Adze log instance rendered it. Here is an example of how
      <RouteLink to="/guide/filtering-and-utility-functions.html#render">render</RouteLink> a log
      using a log render:
    </p>
    <h3 id="manual-example" tabindex="-1">
      <a class="header-anchor" href="#manual-example"><span>Manual Example</span></a>
    </h3>
    <p>
      <em>NOTE:</em> This is not the recommended way of doing this. Please refer to
      <RouteLink to="/guide/filtering-and-utility-functions.html#render">render</RouteLink>.
    </p>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's generate a log and get its render</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is an info log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Then we will destructure the log to get the method and arguments</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">[</span>method<span class="token punctuation">,</span> args<span class="token punctuation">]</span> <span class="token operator">=</span> render<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* And now we can re-render the log by calling the</span>
<span class="line">   console method and spreading the args */</span></span>
<span class="line">console<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
    <h3 id="output-2" tabindex="-1">
      <a class="header-anchor" href="#output-2"><span>Output</span></a>
    </h3>
    <p>
      <img src="@source/guide/examples/log-render-example.png" alt="log render example output" />
    </p>
    <p>
      <img
        src="@source/guide/examples/log-render-terminal-example.png"
        alt="log render example terminal output"
      />
    </p>
    <h2 id="log-timestamp" tabindex="-1">
      <a class="header-anchor" href="#log-timestamp"><span>Log Timestamp</span></a>
    </h2>
    <p>
      The log timestamp data object contains timestamp values in multiple formats from when the log
      instance was terminated.
    </p>
    <blockquote>
      <p>utcTimezoneOffset and iso8601 properties: Version &gt;= 1.1</p>
    </blockquote>
    <h3 id="interface-3" tabindex="-1">
      <a class="header-anchor" href="#interface-3"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">LogTimestamp</span> <span class="token punctuation">{</span></span>
<span class="line">  unixMilli<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  utc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  utcTimezoneOffset<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  iso8601<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="example-2" tabindex="-1">
      <a class="header-anchor" href="#example-2"><span>Example</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's generate a log and get its instance</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is an info log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now let's export its meta data and select the timestamp data object</span></span>
<span class="line"><span class="token keyword">const</span> timestamp <span class="token operator">=</span> log<span class="token punctuation">.</span>data<span class="token punctuation">.</span>timestamp<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// => { unixMilli: 1617827970649, utc: 'Wed, 07 Apr 2021 20:39:30 GMT', utcTimezoneOffset: '+04:00', iso8601: '2021-04-07T20:39:30+04:00' }</span></span>
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
      </div>
    </div>
    <h2 id="terminated-log-object" tabindex="-1">
      <a class="header-anchor" href="#terminated-log-object"><span>Terminated Log Object</span></a>
    </h2>
    <p>
      After an Adze log has been terminated a <strong>Terminated Log object</strong> will be
      returned (with a couple of exceptions, like
      <RouteLink to="/guide/other-terminators.html#clear-clr">clear</RouteLink>). A terminated log
      object consists of three parts, the <strong>Log Instance</strong>, the
      <a href="#log-render">Log Render</a>, and the <strong>printed</strong> value that indicates if
      the log was printed to the console.
    </p>
    <p>
      The log instance is the reference to the instance that was terminated. You can use this to get
      <a href="#log-data">meta data about the Log</a> or get a
      <a href="#collection">collection</a> of logs if the log was
      <RouteLink to="/guide/factories.html#bundle">bundled</RouteLink>.
    </p>
    <blockquote>
      <p><code v-pre>printed</code> property supported in versions &gt;= 1.3.0</p>
    </blockquote>
    <h3 id="interface-4" tabindex="-1">
      <a class="header-anchor" href="#interface-4"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token comment">// Versions &lt; 1.3.0</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">TerminatedLog<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> BaseLog<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  log<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span></span>
<span class="line">  render<span class="token operator">:</span> LogRender <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Versions >= 1.3.0</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">TerminatedLog<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> BaseLog<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  log<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span></span>
<span class="line">  render<span class="token operator">:</span> LogRender <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  printed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
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
  </div>
</template>

<template>
  <div>
    <h1 id="globalstore-concepts" tabindex="-1">
      <a class="header-anchor" href="#globalstore-concepts"><span>GlobalStore Concepts</span></a>
    </h1>
    <h2 id="what-is-a-globalstore" tabindex="-1">
      <a class="header-anchor" href="#what-is-a-globalstore"><span>What is a GlobalStore?</span></a>
    </h2>
    <p>
      A <strong>GlobalStore</strong> is an optional global cache and control hub for your Adze logs.
      The primary purposes of a GlobalStore are to enable global configuration overrides and log
      listeners. To see how a GlobalStore fits into the architecture, refer to the
      <RouteLink to="/.vuepress/guide/adze-concepts.html#lifecycle">Lifecycle Diagram</RouteLink>.
    </p>
    <p>
      GlobalStore is also a dependency to take advantage of some log features such as
      <RouteLink to="/.vuepress/guide/modifiers.html#label">labels</RouteLink>,
      <RouteLink to="/.vuepress/guide/modifiers.html#count">counters</RouteLink>, and
      <RouteLink to="/.vuepress/guide/modifiers.html#time">timers</RouteLink>. Without the presence
      of a GlobalStore, these log modifiers either do not function or their functionality is
      stunted.
    </p>
    <p>
      For complete documentation on GlobalStore configuration, go
      <RouteLink to="/config/#globalstore-configuration">here</RouteLink>.
    </p>
    <h2 id="how-does-it-work" tabindex="-1">
      <a class="header-anchor" href="#how-does-it-work"><span>How does it work?</span></a>
    </h2>
    <p>
      One of the primary purposes of the GlobalStore is to enable large project to centrally control
      how their logs render. Let's imagine we have a large project where we need to split out our
      code base into multiple packages.
    </p>
    <p>
      <img
        src="@source/.vuepress/guide/assets/large-project.svg"
        alt="Large corporate project with broken into packages"
      />
    </p>
    <p>Now that our project has been divided up into reusable packages we'll deploy it.</p>
    <p>
      However, after deploying we discovered that we have an error occurring with authentication in
      the field. During development we usually have debug logs available to us to help sort out
      where the failure may be occurring, but for production we are stripping them out because we do
      not have any control over how or when they render.
    </p>
    <p>
      With GlobalStore and Adze we can declare logs within our packages that we want to keep for
      debugging purposes. Because Adze logs can be hidden and ignored based on log levels,
      namespaces, or labels we can set global configuration and filters to show or hide them as
      needed.
    </p>
    <h3 id="globalstore-example" tabindex="-1">
      <a class="header-anchor" href="#globalstore-example"><span>GlobalStore Example</span></a>
    </h3>
    <p><strong>Authentication Module</strong></p>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Authentication</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> user_context<span class="token operator">:</span> UserContext<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'Attempting authentication'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// ... do some stuff to authenticate</span></span>
<span class="line">    <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Authentication successful'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user_context<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
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
      </div>
    </div>
    <p><strong>Large Corporate Project</strong></p>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Authentication <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'authentication'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ENV</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./environment'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* We'll get our log level from a value we can control in production. */</span></span>
<span class="line"><span class="token keyword">const</span> level <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">.</span>level<span class="token punctuation">;</span> <span class="token comment">// &lt;- Env.level currently is set to 0.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create a GlobalStore to globally control our modules</span></span>
<span class="line"><span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  globalCfg<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    logLevel<span class="token operator">:</span> level<span class="token punctuation">,</span> <span class="token comment">// &lt;- level is 0 so all logs except alert's are hidden</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's run our authentication</span></span>
<span class="line">Authentication<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;- No logs are printed</span></span>
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
      </div>
    </div>
    <p>
      As you can see in the example code above, although the Authentication class has logs defined
      our GlobalStore configuration overrides the allowed <code v-pre>logLevel</code> and sets it to
      0. Our debug log has a level of 7 and our success log has a level of 5 thus they are both
      hidden because their levels are <strong>greater than 0</strong>.
    </p>
    <p>
      You can also see from this example that we can change how our logs are generated in production
      by changing the value of <code v-pre>ENV.level</code>. If we were to change this value to
      <strong>7</strong> in production we would start seeing our success and debug logs.
    </p>
    <h2 id="listeners" tabindex="-1">
      <a class="header-anchor" href="#listeners"><span>Listeners</span></a>
    </h2>
    <p>
      One of the most powerful features of Adze is the ability to listen for logs and react to them
      in some way.
    </p>
    <p>
      A log listener is created by calling <code v-pre>addListener()</code> on a
      <a href="#globalstore-concepts">GlobalStore</a>. When an Adze log terminates, it checks if a
      GlobalStore exists in the global context (<code v-pre>Window</code> for browsers and
      <code v-pre>global</code> for Node). If it does it will attempt to invoke listeners that are
      targeting that log's level. When a listener is invoked it is provided a
      <RouteLink to="/.vuepress/guide/data.html#log-data">log data object</RouteLink> and the
      <RouteLink to="/.vuepress/guide/data.html#log-render">log render</RouteLink>. With these data
      objects Adze enables the user to do with the data as they wish. You could write a log to a
      file. You could send some data about the log to a REST API. It's up to you.
    </p>
    <p>
      This is a feature that differentiates Adze from other JS logging libraries. Other libraries
      are typically more focused on Node environments and lock you in to a rigid API for handling
      the data. Adze takes a different approach by decoupling log data handlers which allows for
      easier customization and keeps the library lighter weight. As the library and community
      matures we will add out of the box log data handlers that you can easily install along side of
      Adze.
    </p>
    <h3 id="listeners-interface" tabindex="-1">
      <a class="header-anchor" href="#listeners-interface"><span>Listeners Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlobalStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">addListener</span><span class="token punctuation">(</span>levels<span class="token operator">:</span> LevelFilter<span class="token punctuation">,</span> cb<span class="token operator">:</span> ListenerCallback<span class="token punctuation">)</span><span class="token operator">:</span> ListenerLocations<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ListenerCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">  LogData<span class="token operator">:</span> LogData <span class="token operator">|</span> FinalLogData<span class="token punctuation">,</span></span>
<span class="line">  render<span class="token operator">:</span> LogRender <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  printed<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
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
    <h3 id="json-log-example" tabindex="-1">
      <a class="header-anchor" href="#json-log-example"><span>JSON Log Example</span></a>
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
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's only listen to levels 1, 2 and 3</span></span>
<span class="line">globalStore<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> definition<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> args <span class="token punctuation">}</span><span class="token punctuation">,</span> render<span class="token punctuation">,</span> printed</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// We only want write logs if they printed to the console</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>printed<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// If version is &lt; 1.3.0 use `if (render)`</span></span>
<span class="line">    <span class="token comment">// Let's write our log as a JSON object</span></span>
<span class="line">    <span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">level</span><span class="token operator">:</span> definition<span class="token punctuation">.</span>level<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> definition<span class="token punctuation">.</span>levelName<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> timestamp<span class="token punctuation">.</span>utc<span class="token punctuation">,</span></span>
<span class="line">      args<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// You could now write it to a file, send it to a rest API, etc.</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
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
    <h2 id="recalling-logs" tabindex="-1">
      <a class="header-anchor" href="#recalling-logs"><span>Recalling Logs</span></a>
    </h2>
    <p>
      Sometimes you need to recall logs for debugging purposes and you may want to filter them with
      more detail than the browser console allows. Adze comes with some
      <RouteLink to="/.vuepress/guide/filtering-and-utility-functions.html"
        >filter functions</RouteLink
      >
      out of the box and that you can use to operate on a
      <RouteLink to="/.vuepress/guide/data.html#collection">collection</RouteLink> of logs.
    </p>
    <p>
      When a GlobalStore exists in the global context logs will automatically be cached in it. These
      logs can then be retrieved at a later time for filtering.
    </p>
    <p>
      <em>NOTE:</em> The size of the log cache is
      <RouteLink to="/config/#globalstore-configuration">configurable</RouteLink> and defaults to
      300 logs.
    </p>
    <h3 id="recalling-logs-example" tabindex="-1">
      <a class="header-anchor" href="#recalling-logs-example"
        ><span>Recalling Logs Example</span></a
      >
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> filterLabel<span class="token punctuation">,</span> rerender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Let's create some logs</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'First log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Second log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Now we can get them from the GlobalStore</span></span>
<span class="line"><span class="token keyword">const</span> collection <span class="token operator">=</span> globalStore<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// And then we can filter them, re-render them, etc.</span></span>
<span class="line"><span class="token function">filterLabel</span><span class="token punctuation">(</span>collection<span class="token punctuation">,</span> <span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>rerender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <h2 id="manual-debugging-tools" tabindex="-1">
      <a class="header-anchor" href="#manual-debugging-tools"
        ><span>Manual Debugging Tools</span></a
      >
    </h2>
    <p>
      There may be occasions where you need to do manual debugging in a browser environment by
      <a href="#recalling-logs">recalling logs</a>. The GlobalStore instance gives you access to
      functions for rerendering logs in the global context.
    </p>
    <p>
      This is mostly useful in cases where you are deploying your application to a QA or test
      environment that has the same log level set as that of production. Because of this, you will
      likely have some of your logs hidden from rendering. If a bug has popped up and you need these
      logs this can be problematic. With the use of the GlobalStore tools you can work around this
      limitation and render logs that were previously hidden.
    </p>
    <h3 id="manual-debugging-tools-example" tabindex="-1">
      <a class="header-anchor" href="#manual-debugging-tools-example"
        ><span>Manual Debugging Tools Example</span></a
      >
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze<span class="token punctuation">,</span> createGlobalStore<span class="token punctuation">,</span> filterLabel<span class="token punctuation">,</span> rerender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">createGlobalStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// In our production environment we only want alert and error level logs to render.</span></span>
<span class="line"><span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Throughout our app we generate some debugging logs...</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'This has some important debugging information.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This also has some important debugging information.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// However, these logs will not print. Now, that your app is in QA you discover a bug. You now need</span></span>
<span class="line"><span class="token comment">// to get some of your debugging information without creating a new build and redeploying...</span></span>
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
      </div>
    </div>
    <p>
      <img
        src="@source/.vuepress/guide/examples/globalstore-tools-example.png"
        alt="GlobalStore tools example"
      />
    </p>
  </div>
</template>

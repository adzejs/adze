<template>
  <div>
    <h1 id="default-terminators" tabindex="-1">
      <a class="header-anchor" href="#default-terminators"><span>Default Terminators</span></a>
    </h1>
    <p>
      After you generated an Adze log instance from a
      <RouteLink to="/reference/factories.html">factory function</RouteLink> and have applied the
      desired <RouteLink to="/reference/modifiers.html">modifiers</RouteLink> you must terminate the
      method chain. The methods used to terminate the chain are called <strong>terminators</strong>.
    </p>
    <p>
      When a log has been terminated it will generate a log render, check if it is allowed to print
      the log render, cache the log instance if a <a href="/globalstore">GlobalStore</a> exists, and
      then return a data object representing the log properties and the log render to any registered
      log listeners. After all of that it will return a
      <RouteLink to="/guide/concepts.html#terminated-log-object">terminated log object</RouteLink>.
    </p>
    <p>
      Adze comes with 8 default log level terminators, all of which can be
      <a href="configuration">configured</a>:
    </p>
    <table>
      <thead>
        <tr>
          <th>Level</th>
          <th>Name</th>
          <th>Standard Method Used</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td><a href="#alert">alert</a></td>
          <td>error</td>
        </tr>
        <tr>
          <td>1</td>
          <td><a href="#error">error</a></td>
          <td>error</td>
        </tr>
        <tr>
          <td>2</td>
          <td><a href="#warn">warn</a></td>
          <td>warn</td>
        </tr>
        <tr>
          <td>3</td>
          <td><a href="#info">info</a></td>
          <td>info</td>
        </tr>
        <tr>
          <td>4</td>
          <td><a href="#fail">fail</a></td>
          <td>info</td>
        </tr>
        <tr>
          <td>5</td>
          <td><a href="#success">success</a></td>
          <td>info</td>
        </tr>
        <tr>
          <td>6</td>
          <td><a href="#log">log</a></td>
          <td>log</td>
        </tr>
        <tr>
          <td>7</td>
          <td><a href="#debug">debug</a></td>
          <td>debug</td>
        </tr>
        <tr>
          <td>8</td>
          <td><a href="#verbose">verbose</a></td>
          <td>debug</td>
        </tr>
      </tbody>
    </table>
    <h2 id="alert" tabindex="-1">
      <a class="header-anchor" href="#alert"><span>alert</span></a>
    </h2>
    <p>
      This level should only be used for logs that require immediate attention. This should be used
      sparingly and only for the most critical of errors.
    </p>
    <p><strong>Default log level</strong> = 0</p>
    <p><strong>Standard Log Method:</strong> error</p>
    <p><em>This is not a standard API.</em></p>
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
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
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
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Something went horribly wrong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Something went horribly wrong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
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
    <p><img src="@source/reference/examples/alert-example.png" alt="alert example output" /></p>
    <p>
      <img
        src="@source/reference/examples/alert-terminal-example.png"
        alt="alert terminal example output"
      />
    </p>
    <h2 id="error" tabindex="-1">
      <a class="header-anchor" href="#error"><span>error</span></a>
    </h2>
    <p>
      Use this for logging fatal errors or errors that impact functionality of your application.
    </p>
    <p><strong>Default log level</strong> = 1</p>
    <p><strong>Standard Log Method:</strong> error</p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/error"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
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
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'An error occurred!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
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
    <p><img src="@source/reference/examples/error-example.png" alt="error example output" /></p>
    <p>
      <img
        src="@source/reference/examples/error-terminal-example.png"
        alt="error terminal example output"
      />
    </p>
    <h2 id="warn" tabindex="-1">
      <a class="header-anchor" href="#warn"><span>warn</span></a>
    </h2>
    <p>
      Use this for logging issues that may impact app performance in a less impactful way than an
      error.
    </p>
    <p><strong>Default log level</strong> = 2</p>
    <p><strong>Standard Log Method:</strong> warn</p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/warn"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
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
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">warn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
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
      ><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"I'm warning you!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"I'm warning you!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
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
    <p><img src="@source/reference/examples/warn-example.png" alt="warn example output" /></p>
    <p>
      <img
        src="@source/reference/examples/warn-terminal-example.png"
        alt="warn terminal example output"
      />
    </p>
    <h2 id="info" tabindex="-1">
      <a class="header-anchor" href="#info"><span>info</span></a>
    </h2>
    <p>
      Use this for logging general insights into your application. This level does not indicate any
      problems.
    </p>
    <p><strong>Default log level</strong> = 3</p>
    <p><strong>Standard Log Method:</strong> info</p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/info"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
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
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="example-3" tabindex="-1">
      <a class="header-anchor" href="#example-3"><span>Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'App information'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="output-3" tabindex="-1">
      <a class="header-anchor" href="#output-3"><span>Output</span></a>
    </h3>
    <p><img src="@source/reference/examples/info-example.png" alt="info example output" /></p>
    <p>
      <img
        src="@source/reference/examples/info-terminal-example.png"
        alt="info terminal example output"
      />
    </p>
    <h2 id="fail" tabindex="-1">
      <a class="header-anchor" href="#fail"><span>fail</span></a>
    </h2>
    <p>
      Use this for logging network communication errors or other non-fatal errors that do not break
      your application.
    </p>
    <p><strong>Default log level</strong> = 4</p>
    <p><strong>Standard Log Method:</strong> info</p>
    <p><em>This is not a standard API.</em></p>
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
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="example-4" tabindex="-1">
      <a class="header-anchor" href="#example-4"><span>Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'An operation failed to execute!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">'An operation failed to execute!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="output-4" tabindex="-1">
      <a class="header-anchor" href="#output-4"><span>Output</span></a>
    </h3>
    <p><img src="@source/reference/examples/fail-example.png" alt="fail example output" /></p>
    <p>
      <img
        src="@source/reference/examples/fail-terminal-example.png"
        alt="fail terminal example output"
      />
    </p>
    <h2 id="success" tabindex="-1">
      <a class="header-anchor" href="#success"><span>success</span></a>
    </h2>
    <p>
      Use this for logging successful network communications or other successful operations within
      your app.
    </p>
    <p><strong>Default log level</strong> = 5</p>
    <p><strong>Standard Log Method:</strong> info</p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="interface-5" tabindex="-1">
      <a class="header-anchor" href="#interface-5"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="example-5" tabindex="-1">
      <a class="header-anchor" href="#example-5"><span>Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'An operation was successful!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'An operation was successful!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="output-5" tabindex="-1">
      <a class="header-anchor" href="#output-5"><span>Output</span></a>
    </h3>
    <p><img src="@source/reference/examples/success-example.png" alt="success example output" /></p>
    <p>
      <img
        src="@source/reference/examples/success-terminal-example.png"
        alt="success terminal example output"
      />
    </p>
    <h2 id="log" tabindex="-1">
      <a class="header-anchor" href="#log"><span>log</span></a>
    </h2>
    <p>Use this for general logging that doesn't apply to any of the lower levels.</p>
    <p><strong>Default log level</strong> = 6</p>
    <p><strong>Standard Log Method:</strong> log</p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/log"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="interface-6" tabindex="-1">
      <a class="header-anchor" href="#interface-6"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="example-6" tabindex="-1">
      <a class="header-anchor" href="#example-6"><span>Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging a message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Logging a message.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="output-6" tabindex="-1">
      <a class="header-anchor" href="#output-6"><span>Output</span></a>
    </h3>
    <p><img src="@source/reference/examples/log-example.png" alt="log example output" /></p>
    <p>
      <img
        src="@source/reference/examples/log-terminal-example.png"
        alt="log terminal example output"
      />
    </p>
    <h2 id="debug" tabindex="-1">
      <a class="header-anchor" href="#debug"><span>debug</span></a>
    </h2>
    <p>
      Use this for logging information that you typically do not want to see unless you are
      debugging a problem with your application. This is typically hidden by default.
    </p>
    <p><strong>Default log level</strong> = 7</p>
    <p><strong>Standard Log Method:</strong> debug</p>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Console/debug"
        target="_blank"
        rel="noopener noreferrer"
        ><strong>MDN Docs</strong></a
      >
    </p>
    <h3 id="interface-7" tabindex="-1">
      <a class="header-anchor" href="#interface-7"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">debug</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="example-7" tabindex="-1">
      <a class="header-anchor" href="#example-7"><span>Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'Debugging an issue.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'Debugging an issue.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="output-7" tabindex="-1">
      <a class="header-anchor" href="#output-7"><span>Output</span></a>
    </h3>
    <p><img src="@source/reference/examples/debug-example.png" alt="debug example output" /></p>
    <p>
      <img
        src="@source/reference/examples/debug-terminal-example.png"
        alt="debug terminal example output"
      />
    </p>
    <h2 id="verbose" tabindex="-1">
      <a class="header-anchor" href="#verbose"><span>verbose</span></a>
    </h2>
    <p>
      Use this for logging extremely detailed debugging information. Use this level when the values
      you are logging are granular enough that they are no longer easily human readable.
    </p>
    <p><strong>Default log level</strong> = 8</p>
    <p><strong>Standard Log Method:</strong> verbose</p>
    <p><em>This is not a standard API.</em></p>
    <h3 id="interface-8" tabindex="-1">
      <a class="header-anchor" href="#interface-8"><span>Interface</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseLog</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token function">verbose</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TerminatedLog<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="example-8" tabindex="-1">
      <a class="header-anchor" href="#example-8"><span>Example</span></a>
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
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">verbose</span><span class="token punctuation">(</span><span class="token string">'Logging some extreme detail.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With emoji's enabled</span></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">verbose</span><span class="token punctuation">(</span><span class="token string">'Logging some extreme detail.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="output-8" tabindex="-1">
      <a class="header-anchor" href="#output-8"><span>Output</span></a>
    </h3>
    <p><img src="@source/reference/examples/verbose-example.png" alt="verbose example output" /></p>
    <p>
      <img
        src="@source/reference/examples/verbose-terminal-example.png"
        alt="verbose terminal example output"
      />
    </p>
  </div>
</template>

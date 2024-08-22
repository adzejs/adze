<template>
  <div>
    <h1 id="installing-adze" tabindex="-1">
      <a class="header-anchor" href="#installing-adze"><span>Installing Adze</span></a>
    </h1>
    <h2 id="install-the-package" tabindex="-1">
      <a class="header-anchor" href="#install-the-package"><span>Install the Package</span></a>
    </h2>
    <p>You can install Adze from NPM using the following command:</p>
    <div
      class="language-bash line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="sh"
      data-title="sh"
    >
      <pre v-pre><code><span class="line"><span class="token comment"># NPM</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> adze</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Yarn</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> adze</span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="version-requirements" tabindex="-1">
      <a class="header-anchor" href="#version-requirements"><span>Version Requirements</span></a>
    </h2>
    <table>
      <thead>
        <tr>
          <th>Dependency</th>
          <th>Supported Versions</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>node</td>
          <td>&gt;= 10.x</td>
          <td>When running Adze in a Node environment.</td>
        </tr>
        <tr>
          <td>typescript</td>
          <td>&gt;= 4.1</td>
          <td>When using Adze with TypeScript</td>
        </tr>
      </tbody>
    </table>
    <h2 id="typescript-configuration" tabindex="-1">
      <a class="header-anchor" href="#typescript-configuration"
        ><span>TypeScript Configuration</span></a
      >
    </h2>
    <p>Adze is built to be used with TypeScript and we highly encourage using it in this way.</p>
    <p>
      When building your project with TypeScript, you need to make sure you use the
      <code v-pre>&quot;DOM&quot;</code> lib because Adze supports both the web browser and Node.
      Also, to support the dependencies of Adze, you'll need to add
      <code v-pre>&quot;esModuleInterop&quot;: true</code> to your tsconfig as well.
    </p>
    <p>
      For more information about configuring TypeScript, go to
      <a
        href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"
        target="_blank"
        rel="noopener noreferrer"
        >https://www.typescriptlang.org/docs/handbook/tsconfig-json.html</a
      >.
    </p>
    <h3 id="example" tabindex="-1">
      <a class="header-anchor" href="#example"><span>Example</span></a>
    </h3>
    <div
      class="language-json line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="json"
      data-title="json"
    >
      <pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...your other options</span></span>
<span class="line">    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"DOM"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
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
      </div>
    </div>
    <h2 id="importing-adze" tabindex="-1">
      <a class="header-anchor" href="#importing-adze"><span>Importing Adze</span></a>
    </h2>
    <p>Adze comes bundled with a few different ways of accessing it. Here are some examples:</p>
    <h3 id="cdn" tabindex="-1">
      <a class="header-anchor" href="#cdn"><span>CDN</span></a>
    </h3>
    <p>
      You can import the library directly into your HTML from the
      <a href="https://www.jsdelivr.com/package/npm/adze" target="_blank" rel="noopener noreferrer"
        >jsDelivr</a
      >
      CDN.
    </p>
    <p>
      <em
        ><strong>NOTE:</strong> In the script tag in the example below, replace
        <code v-pre>&lt;version&gt;</code> with the version of Adze you would like to use.</em
      >
    </p>
    <div
      class="language-html line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="html"
      data-title="html"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token comment">&lt;!-- In the head of your html --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- To use v1.4.0 you would write https://cdn.jsdelivr.net/npm/adze@1.4.0/dist/adze.min.js --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/adze@&lt;version>/dist/adze.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- Using adze elsewhere in JS --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token comment">// Adze is registered globally in your browser as AdzeLib</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token operator">=</span> AdzeLib<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
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
    <h3 id="node-js-commonjs" tabindex="-1">
      <a class="header-anchor" href="#node-js-commonjs"><span>Node JS (CommonJS)</span></a>
    </h3>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> adze <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'adze'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Or alternatively `const adze = require('adze').adze;`</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="es6-typescript" tabindex="-1">
      <a class="header-anchor" href="#es6-typescript"><span>ES6 / TypeScript</span></a>
    </h3>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token keyword">import</span> adze <span class="token keyword">from</span> <span class="token string">'adze'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">adze</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="line-numbers-blackboxing" tabindex="-1">
      <a class="header-anchor" href="#line-numbers-blackboxing"
        ><span>Line Numbers / Blackboxing</span></a
      >
    </h2>
    <p>
      Although Adze is meant primarily for long-lived logs that should be in production environments
      you can use it for debugging purposes just like the standard console API. The caveat with
      using it for debugging is that you will need to enable
      <a href="https://bit.ly/3d1eOex" target="_blank" rel="noopener noreferrer"
        ><strong>Blackboxing</strong></a
      >.
    </p>
    <p>
      A common problem with libraries that wrap the standard console API is that they lose line
      numbers in the browser console. This occurs because the browser console is reporting the line
      number at which the console API was called, which is usually within the library wrapper. To
      get around this problem, Chromium based browsers (like Chrome, Edge and Brave) added the
      <a href="https://bit.ly/3d1eOex" target="_blank" rel="noopener noreferrer"
        ><strong>Blackboxing</strong></a
      >
      concept. This tells the browser to pretend like the library source code doesn't exist. This
      enables Adze logs to print correct line numbers from where they are called.
    </p>
    <p>
      For information on setting up <strong>Blackboxing</strong>, please go to
      <a href="https://bit.ly/3d1eOex" target="_blank" rel="noopener noreferrer"
        >https://bit.ly/3d1eOex</a
      >.
    </p>
    <p>
      <em
        >NOTE: The verbiage for this has been changed to <strong>Ignore List</strong> in the console
        settings.</em
      >
    </p>
    <p>
      To <strong>blackbox</strong> the adze library you will need to supply the following regular
      expression:
    </p>
    <div
      class="language-typescript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="ts"
      data-title="ts"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\b(?:util|BaseLog)\b\.js</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      For non-chromium based browsers, right now there is no easy way to work around this issue. We
      suggest using the standard console API for debugging purposes where line numbers are important
      and reserving Adze logs for long-lived logs that will be used in production environments.
    </p>
  </div>
</template>

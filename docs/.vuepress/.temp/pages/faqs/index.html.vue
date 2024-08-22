<template>
  <div>
    <h1 id="frequently-asked-questions" tabindex="-1">
      <a class="header-anchor" href="#frequently-asked-questions"
        ><span>Frequently Asked Questions</span></a
      >
    </h1>
    <p>
      This section is dedicated to answering common problems that might occur while using Adze in
      your project.
    </p>
    <h2 id="sveltekit-error" tabindex="-1">
      <a class="header-anchor" href="#sveltekit-error"><span>SvelteKit Error</span></a>
    </h2>
    <h3 id="question" tabindex="-1">
      <a class="header-anchor" href="#question"><span>Question</span></a>
    </h3>
    <div
      class="language-text line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="text"
      data-title="text"
    >
      <pre
        v-pre
      ><code><span class="line">I'm using Adze with SvelteKit and I'm getting the following error:</span>
<span class="line"></span>
<span class="line">"process is not defined"</span>
<span class="line"></span></code></pre>
      <div class="line-numbers" aria-hidden="true" style="counter-reset: line-number 0">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="solution" tabindex="-1">
      <a class="header-anchor" href="#solution"><span>Solution</span></a>
    </h3>
    <p>
      This error occurs because one of Adze's dependencies,
      <a
        href="https://www.npmjs.com/package/browser-process-hrtime"
        target="_blank"
        rel="noopener noreferrer"
        >browser-process-hrtime</a
      >, makes use of some global environment variables that are only available in a Node
      environment in order to detect within which environment it is running. SvelteKit uses
      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> for Hot
      Module Reloading (HRM) when running the dev environment. Vite loses context of these global
      variables which causes this error to be thrown. This can easily be fixed with a little extra
      configuration in your
      <a href="https://kit.svelte.dev/docs#configuration" target="_blank" rel="noopener noreferrer"
        >svelte.config.js</a
      >.
    </p>
    <div
      class="language-javascript line-numbers-mode"
      data-highlighter="prismjs"
      data-ext="js"
      data-title="js"
    >
      <pre
        v-pre
      ><code><span class="line"><span class="token comment">// Import this at the top of your config file</span></span>
<span class="line"><span class="token keyword">const</span> process <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'process'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@sveltejs/kit'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Add the following configuration</span></span>
<span class="line">    <span class="token function-variable function">vite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">process</span><span class="token operator">:</span> process<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
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
      </div>
    </div>
    <p>
      This is explicitly defining the globals that are missing in the Vite context by assigning
      Node's process and creating an empty object representing the nodejs
      <code v-pre>global</code> variable.
    </p>
  </div>
</template>

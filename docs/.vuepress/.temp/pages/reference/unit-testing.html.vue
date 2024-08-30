<template><div><h1 id="unit-testing" tabindex="-1"><a class="header-anchor" href="#unit-testing"><span>Unit Testing</span></a></h1>
<p>When executing your unit tests you generally do not want to see the internal logging of the code you are testing; rather you only care about the inputs and outputs. To disable logs while executing your unit tests, within your unit test file you should set the global value <code v-pre>ADZE_ENV = 'test'</code>. This tells adze logs to prevent rendering for the sake of unit tests.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// ----- Browser Environment ----- //</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token constant">ADZE_ENV</span> <span class="token operator">=</span> <span class="token string">'test'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ----- Node Environment ----- //</span></span>
<span class="line">global<span class="token punctuation">.</span><span class="token constant">ADZE_ENV</span> <span class="token operator">=</span> <span class="token string">'test'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url-parameter-override" tabindex="-1"><a class="header-anchor" href="#url-parameter-override"><span>URL Parameter Override</span></a></h3>
<p>There may be a time when you are debugging in the browser and would like to set the Adze ENV without changing any code. In this case you can use the reserved <code v-pre>ADZE_ENV</code> URL parameter to set it.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">http://my-site.com/?ADZE_ENV=test</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>



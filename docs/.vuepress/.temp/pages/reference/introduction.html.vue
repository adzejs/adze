<template><div><h1 id="introduction-lifecycle" tabindex="-1"><a class="header-anchor" href="#introduction-lifecycle"><span>Introduction &amp; Lifecycle</span></a></h1>
<p>This section of the documentation will be focused on details about individual functions, log
methods, data, types, etc. The reference manual is not intended to provide you with a walkthrough
style tutorial.</p>
<p>For a step-by-step tutorial, please read through the <RouteLink to="/getting-started/introduction.html">Getting Started</RouteLink>
user guide.</p>
<h2 id="lifecycle" tabindex="-1"><a class="header-anchor" href="#lifecycle"><span>Lifecycle</span></a></h2>
<p>Before diving into the rest of the reference manual, it can be beneficial to have an understanding
of the workflow / lifecycle of an Adze log. Understanding the lifecycle is vital to understanding
how <a href="">middleware</a>, <a href="">log listeners</a>, and the <a href="">global store</a> work.</p>
<h3 id="lifecycle-diagram" tabindex="-1"><a class="header-anchor" href="#lifecycle-diagram"><span>Lifecycle Diagram</span></a></h3>
<p><img src="@source/assets/lifecycle.svg" alt="Lifecycle diagram of an Adze log"></p>
<p>The Adze class is a class that contains static method equivalents for every <a href="">modifier</a> and
<a href="">terminator</a> method. If a modifier method has been called statically, a new instance of Adze will
be created and returned, thus allowing you to chain more modifier method calls or call a terminator
method.</p>
<h3 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation"><span>Explanation</span></a></h3>
<p>Modifier methods can be chained indefinitely whereas a terminator method which finalizes a log will
not return the log instance and the chain is ended. At this point is when the properties of the log
instance are evaluated and then the log message is generated and printed.</p>
<p>Throughout the termination process, various lifecycle hooks will be called on any <a href="">middleware</a>
instances that have been registered. This is useful for plugins to capture log data or manipulate
logs in various ways.</p>
<p>After a log has been terminated, its instance is stored in the <a href="">Global Store</a> if <a href="">caching is
enabled</a>. From the global store you can filter and recall logs that have already been generated
using the <a href="">global store tools</a>.</p>
</div></template>



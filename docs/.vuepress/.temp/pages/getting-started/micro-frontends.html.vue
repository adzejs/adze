<template>
  <div>
    <h1 id="micro-frontends" tabindex="-1">
      <a class="header-anchor" href="#micro-frontends"><span>Micro-Frontends</span></a>
    </h1>
    <p>
      You may be asking yourself, &quot;What are micro-frontends?&quot; To be brief, micro-frontends
      are an extension of the micro-services architecture pattern all the way through to the
      frontend of an application.
    </p>
    <p>For a more detailed explanation, please visit these excellent resources:</p>
    <ul>
      <li>
        <a href="https://micro-frontends.org/" target="_blank" rel="noopener noreferrer"
          >Micro-Frontends.org</a
        >
      </li>
      <li>
        <a
          href="https://aws.amazon.com/blogs/architecture/micro-frontend-architectures-on-aws/"
          target="_blank"
          rel="noopener noreferrer"
          >Micro-Frontend Architectures on AWS</a
        >
      </li>
    </ul>
    <h2 id="micro-frontend-logging" tabindex="-1">
      <a class="header-anchor" href="#micro-frontend-logging"
        ><span>Micro-Frontend Logging</span></a
      >
    </h2>
    <p>
      A challenge that comes with micro-frontend architectures is enabling the parent application to
      be able to coordinate behaviors from the child applications. One of these challenges is
      logging. Within a micro-frontend architecture you will have multiple apps that are able to
      injected into the parent application without the parent application needing to know much about
      how the child application implements their features. In order to prevent chaos within the
      parent app, child apps typically remove all of their logs before packaging for the parent
      application. This keeps the browser console clean. The downside to this however is that you
      may need to capture some logs in production and react to them. Removing them leaves you
      helpless in this regard.
    </p>
    <p>
      This is where <RouteLink to="/getting-started/adze-concepts.html">Adze</RouteLink> and
      <RouteLink to="/getting-started/globalstore-concepts.html">GlobalStore</RouteLink> come in to
      help. Because a GlobalStore is a global cache and configuration store, it takes precedence
      over the configuration of any Adze logs. What this means for a micro-frontend architecture is
      that you can keep your logs for production and the parent application can control their
      behavior without knowing anything about the child application.
    </p>
    <h3 id="example-architecture" tabindex="-1">
      <a class="header-anchor" href="#example-architecture"><span>Example Architecture</span></a>
    </h3>
    <p>
      <img
        src="@source/getting-started/assets/micro-frontends-diagram.svg"
        alt="micro front end architecture example"
      />
    </p>
    <h3 id="explanation" tabindex="-1">
      <a class="header-anchor" href="#explanation"><span>Explanation</span></a>
    </h3>
    <p>
      Within the dev environment of each of your child applications you can interact with a
      GlobalStore. When packaging your application for production you will leave out your
      GlobalStore instance and only deploy it with Adze logs. Then, in the parent application, your
      child applications logging behavior can be controlled by the parent app's GlobalStore
      instance.
    </p>
    <h2 id="best-practices" tabindex="-1">
      <a class="header-anchor" href="#best-practices"><span>Best Practices</span></a>
    </h2>
    <p>
      When writing logs in your child applications you should apply a common
      <RouteLink to="/getting-started/modifiers.html#namespace-ns">namespace</RouteLink> across all
      of them. This enables the parent application to target those logs and control them as needed.
    </p>
  </div>
</template>

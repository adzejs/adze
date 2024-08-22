<template>
  <div>
    <h1 id="official-add-on-s" tabindex="-1">
      <a class="header-anchor" href="#official-add-on-s"><span>Official Add-on's</span></a>
    </h1>
    <p>
      The following list contains add-on's that are officially supported by core Adze contributors
      and are maintained under the
      <a href=""><code v-pre>@adze</code> npm organization namespace</a>. We hope that over time
      this list will grow and hopefully community created add-on's can be adopted by the official
      organization.
    </p>
    <hr />
    <h2 id="adze-security-validator" tabindex="-1">
      <a class="header-anchor" href="#adze-security-validator"
        ><span>@adze/security-validator</span></a
      >
    </h2>
    <p>
      This project is a plugin for the Adze logging library to provide tools for ensuring proper
      context is applied to logs that are meant to record security events such as access events and
      authentication events.
    </p>
    <p>
      This library exposes some opinionated interfaces and a log listener factory for validating
      your security event logs.
    </p>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Source Code</td>
          <td>
            <a
              href="https://github.com/AJStacy/adze-security-validator"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/AJStacy/adze-security-validator</a
            >
          </td>
        </tr>
        <tr>
          <td>npm</td>
          <td>
            <a
              href="https://www.npmjs.com/package/@adze/security-validator"
              target="_blank"
              rel="noopener noreferrer"
              >https://www.npmjs.com/package/@adze/security-validator</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <h2 id="adze-transport-cloudwatch-logs" tabindex="-1">
      <a class="header-anchor" href="#adze-transport-cloudwatch-logs"
        ><span>@adze/transport-cloudwatch-logs</span></a
      >
    </h2>
    <p>
      This project is a plugin for the Adze logging library to transport log data to AWS CloudWatch
      Logs.
    </p>
    <p>
      This library exposes a log listener factory for setting up log groups and streams in
      CloudWatch Logs. It can be configured to automatically create the group or stream if it does
      not already exist.
    </p>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Source Code</td>
          <td>
            <a
              href="https://github.com/AJStacy/adze-transport-cloudwatch-logs"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/AJStacy/adze-transport-cloudwatch-logs</a
            >
          </td>
        </tr>
        <tr>
          <td>npm</td>
          <td>
            <a
              href="https://www.npmjs.com/package/@adze/transport-cloudwatch-logs"
              target="_blank"
              rel="noopener noreferrer"
              >https://www.npmjs.com/package/@adze/transport-cloudwatch-logs</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

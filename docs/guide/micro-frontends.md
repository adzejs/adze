# Micro-Frontends

:::danger
This version is now deprecated! Please upgrade to [version 2](https://adzejs.com/)!
:::

You may be asking yourself, "What are micro-frontends?" To be brief, micro-frontends are an extension of the micro-services architecture pattern all the way through to the frontend of an application.

For a more detailed explanation, please visit these excellent resources:

- [Micro-Frontends.org](https://micro-frontends.org/)
- [Micro-Frontend Architectures on AWS](https://aws.amazon.com/blogs/architecture/micro-frontend-architectures-on-aws/)

## Micro-Frontend Logging

A challenge that comes with micro-frontend architectures is enabling the parent application to be able to coordinate behaviors from the child applications. One of these challenges is logging. Within a micro-frontend architecture you will have multiple apps that are able to injected into the parent application without the parent application needing to know much about how the child application implements their features. In order to prevent chaos within the parent app, child apps typically remove all of their logs before packaging for the parent application. This keeps the browser console clean. The downside to this however is that you may need to capture some logs in production and react to them. Removing them leaves you helpless in this regard.

This is where [Adze](adze-concepts.md) and [Shed](shed-concepts.md) come in to help. Because a Shed is a global cache and configuration store, it takes precedence over the configuration of any Adze logs. What this means for a micro-frontend architecture is that you can keep your logs for production and the parent application can control their behavior without knowing anything about the child application.

### Example Architecture

![micro front end architecture example](./assets/micro-frontends-diagram.svg)

### Explanation

Within the dev environment of each of your child applications you can interact with a Shed. When packaging your application for production you will leave out your Shed instance and only deploy it with Adze logs. Then, in the parent application, your child applications logging behavior can be controlled by the parent app's Shed instance.

## Best Practices

When writing logs in your child applications you should apply a common [namespace](modifiers.md#namespace-ns) across all of them. This enables the parent application to target those logs and control them as needed.

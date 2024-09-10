Because Adze automatically comes with a [global store](../reference/global-store.md) that can have
configuration applied that all logs will inherit from.

What this means for microfrontend's is that
if you have multiple frontend applications generating Adze logs, you can easily control them
centrally. Change the log level, filter out logs that aren't relevant, or even change the format
for all logs regardless of the source.

For an in-depth tutorial, visit this [article](https://andrewstacy.com/blog/logging-with-micro-frontends/).

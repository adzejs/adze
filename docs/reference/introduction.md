# Introduction & Lifecycle

This section of the documentation will be focused on details about individual functions, log
methods, data, types, etc. The reference manual is not intended to provide you with a walkthrough
style tutorial.

For a step-by-step tutorial, please read through the [Getting Started](../getting-started/introduction.md)
user guide.

## Lifecycle

Before diving into the rest of the reference manual, it can be beneficial to have an understanding
of the workflow / lifecycle of an Adze log. Understanding the lifecycle is vital to understanding
how [middleware](), [log listeners](), and the [global store]() work.

### Lifecycle Diagram

![Lifecycle diagram of an Adze log](../assets/lifecycle.svg)

The Adze class is a class that contains static method equivalents for every [modifier]() and
[terminator]() method. If a modifier method has been called statically, a new instance of Adze will
be created and returned, thus allowing you to chain more modifier method calls or call a terminator
method.

### Explanation

Modifier methods can be chained indefinitely whereas a terminator method which finalizes a log will
not return the log instance and the chain is ended. At this point is when the properties of the log
instance are evaluated and then the log message is generated and printed.

Throughout the termination process, various lifecycle hooks will be called on any [middleware]()
instances that have been registered. This is useful for plugins to capture log data or manipulate
logs in various ways.

After a log has been terminated, its instance is stored in the [Global Store]() if [caching is
enabled](). From the global store you can filter and recall logs that have already been generated
using the [global store tools]().

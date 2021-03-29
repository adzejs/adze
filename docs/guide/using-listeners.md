# Using Listeners

One of the most powerful features of Adze is the ability to listen for logs and react to them in some way.

A log listener is created by adding it to a Shed. When an Adze log terminates, it checks if a Shed exists in the global context (`Window` for browsers and `global` for Node). If it does it will attempt to invoke listeners that are targeting that log's level. When a listener is invoked it is provided a log data object and the log render. With these data objects Adze enables the user to do with the data as they wish. You could write a log to a file. You could send some data about the log to a REST API. It's up to you.

This is a feature that differentiates Adze from other JS logging libraries. The other libraries are typically more focused on Node environments and lock you in to a rigid API for handling the data. Adze takes a different approach by decoupling log data handlers from the log's which allows for easier customization and keeps the library file size smaller. As the library and community matures we will add out of the box log data handlers that you can easily install along side of Adze.

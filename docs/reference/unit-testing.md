# Unit Testing

When executing your unit tests you generally do not want to see the internal logging of the code you
are testing; rather you only care about the inputs and outputs. To disable logs while executing your
unit tests, within your unit test environment you should set the global value `$ADZE_ENV = 'test'`.
This tells adze logs to prevent rendering for the sake of unit tests.

#### Example

```javascript
// For all environments
globalThis.$ADZE_ENV = 'test';
```

## URL Parameter Override

There may be a time when you are debugging in the browser and would like to set the Adze ENV without
changing any code. In this case you can use the reserved `ADZE_ENV` URL parameter to set it.

```html
http://my-site.com/?ADZE_ENV=test
```

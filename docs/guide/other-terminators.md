# Other Terminators

Aside from the [default terminator methods](default-terminators.md), Adze also exposes a few others for different utility purposes.

## custom

Terminates the log at the provided custom log level. Custom log levels are defined within the Adze configuration object under the [`custom_levels`](configuration.html#customlevels) property.

[Configuration Details](configuration.html#customlevels)

_This is not a standard API._

### Interface

```typescript
class BaseLog {
  public custom(level_name: string, ...args: unknown[]): TerminatedLog<this>;
}
```

### Example

```javascript
import { adze } from 'adze';

// Create our Adze configuration
const cfg = {
  log_level: Infinity,
  use_emoji: true,
  custom_levels: {
    leetLevel: {
      level: 1337,
      method: 'log',
      style:
        'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid; padding-right: 40px; ',
      terminal: ['white', 'bgBlue'],
      emoji: '👾',
    },
  },
};

// Use the configuration and write a custom log
adze(cfg).custom('leetLevel', 'This log is leet.');
```

### Output

![custom example output](../assets/examples/custom-example.png)

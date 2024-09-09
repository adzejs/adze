Adze provides you with a means of writing logs that feels very natural. Writing highly-configured
logs in place is a breeze with the chainable API. Want to add timestamps and emoji's? Just add the `timestamp` and `withEmoji`
[modifiers](../reference/modifiers.md#timestamp).

```typescript
adze.withEmoji.timestamp.alert('Oh no! Something terrible happened!');
```

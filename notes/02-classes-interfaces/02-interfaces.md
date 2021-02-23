# Interfaces

## What are interfaces?

Interfaces define an object or class.

The "properties" inside are field definitions. The values and method contents cannot be initialized inside an interface.

```ts
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}
```

## Difference with `type`

- One major difference: interfaces can _only_ be used to describe an object while `type` can be used for any type.
- By using interfaces you are more explicit and it is clearer what is the intent.
- Interfaces are good with classes.

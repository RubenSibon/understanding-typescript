# Return type

By default functions in JavaScript that do not explicitly return something, i.e. do not have the `return` or `yield` keyword do, return `undefined`.

In TypeScript when the type of the returned value cannot be inferred or is `undefined` then the type of the returned value is `void`.

Examples:

```ts
function logToConsole (msg: string) {
  console.log(msg); // There is no explicit return so void is inferred.
}
```

```ts
function addUp (num1: number, num2: number) {
  return num1 + num2; // The `number` type is inferred as the returned type.
}
```

```ts
function logToConsole (msg: string): void { // In functions without an explicit return it can be a good pratice to make it explicit to the reader with `void`.
  console.log(msg);
}
```

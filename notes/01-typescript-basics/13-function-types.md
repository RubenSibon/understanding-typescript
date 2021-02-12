# Functions as Types

The stored value of a variable can be a function.

```ts
function addUp (num1: number, num2: number) {
  return num1 + num2; // The `number` type is inferred as the returned type.
}

let combineValues: Function;

combineValues = addUp;

console.log(combineValues(8, 8));
```

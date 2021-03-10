# First class decorator

A decorator is in the end just a function. It is a function that you apply to _something_ such as a `class`.

Decorators run on class creation.

```ts
// The `constructor` arg is the constructor function of the class that the decorator applies to.
// Conventionally it is often called `target` as well.
function Logger(constructor: Function) {
  console.log("Logging...", constructor);
}

@Logger
class Person2 {
  name = "Ruben";

  constructor() {
    console.log("Creating the person object...");
  }
}

const person = new Person2();

console.log(person);
```

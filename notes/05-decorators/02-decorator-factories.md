# Decorator factories

With decorator factories you can make more generic functionality by passing in values where the decorator factory is called.

Angular uses decorator factories with classes to generate component templates.

```ts
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString, constructor);
  };
}

// Note that the function Logger is called to return a new, anonymous decorator function.
// This way you can pass in parameters to add specific data or functionality.
@Logger("LOGGING PERSON2")
class Person2 {
  name = "Ruben";

  constructor() {
    console.log("Creating the person object...");
  }
}

const person = new Person2();

console.log(person);
```

# Decorators inside classes

Decorators can be used inside classes on properties, accessors and methods. They are run on the creation of the class, not in instanteation or later use of these props and methods.

```ts
@Logger("LOGGING PERSON3")
@Template("<h1>A person object has been created!</h1>", "app")
class Person3 {
  // Decorators can be added to class props.
  @Log
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Decorators can be added to class methods.
  @Log
  sayMyName() {
    return `My name is ${this.name}`;
  }
}
```

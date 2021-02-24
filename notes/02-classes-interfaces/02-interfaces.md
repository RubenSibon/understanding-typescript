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

## Goes well with classes to share structure

```ts
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(
    name: string,
    age: number
  ) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    return `${phrase} ${this.name}`;
  }
}

let user1: Greetable;

// ...sometime later...

user1 = new Person("Ruben", 34);

console.log(user1.greet("Hello"));
```

## Interfaces as Function Types

Define a function's parameter and return types.

```ts
interface FnAdd {
  (a: number, b: number): number;
}
```

## Optional properties

```ts
interface Named {
  name: string;
  fullName?: string;
}
```

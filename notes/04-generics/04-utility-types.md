# Utility types

## Partials

`Partial` is a built-in utility type that makes all properties on an object type optional until all have a value.

```ts
interface User = {
  name: string;
  age: number;
};

function makeNewUser (): User {
  let user: Partial<User>;

  user.name = "Ruben";
  user.age = 24;

  return user;
}
```

## Readonly

Lock a type down with `Readonly`.

```ts
// Array may not be modified.
const names: Readonky<string[]> = ["Ruben", "Max", "Anna"];
```

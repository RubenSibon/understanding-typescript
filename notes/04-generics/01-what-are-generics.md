# What are generics?

Generics are a feature that TypeScript has borrowed from other languages like C#. The concept does not exist in JavaScript and can only be utilized in TS.

`Array` is a generic type. It itself does not convey something about the type of data inside the array.

By using, for example, `Array<string>` or `string[]` you can be more specific.

Another example of a generic type: `Promise`. With something like `Promise<RestData>` you can be more specific about what a promise is going to resolve to.

By using _generics_ you get more type safety with general types.

Generics are very useful with functions. A Generic Function pattern:

```ts
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB); // Returned value will be an intersection of the generic "T" and "U" types.
}

const mergedObj = merge({ name: "Ruben" }, { age: 30 });

console.log(mergedObj.age); // No error because type is inferred with generics.
```

With generics in functions we tell TS to expect some types that are unknown in advance.

You can use type constraints to be more restrictive (recommended!):

```ts
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB); // Returned value will be an intersection of "T" and "U".
}

const mergedObj = merge({ name: "Ruben" }, { age: 30 });

console.log(mergedObj.age); // No error because type is inferred with generics.
```

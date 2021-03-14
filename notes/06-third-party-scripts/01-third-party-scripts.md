# Third party scripts & TypeScript

## Using JavaScript libraries in TypeScript

Many popular JavaScript libraries like lodash do not provide type definitions, but very often their types are covered in the third-party repository of [DefinitelyTyped](https://definitelytyped.org/).

They can be added to the nodejs project with `npm install --save-dev @types/lodash` or `yarn add -D @types/lodash`.

## Use "declare" as a "Last Resort"

Any pre-existing variable or function can be declared so that TS is informed about it and its type.

```ts
// index.html
var GLOBAL = "A global variable";

// app.ts
declare var GLOBAL: string;

console.log(GLOBAL); // TS does not complain.
```

## No Types Needed: class-transformer

The class-transformer package is useful to convert JSON-objects returned from back-end into a class.

## TypeScript-embracing: class-validator

Class-validator is a library is squarly aimed at Class-based OOP TypeScript projects. It allows developers to add validation to class properties with the decorators that the library provides.

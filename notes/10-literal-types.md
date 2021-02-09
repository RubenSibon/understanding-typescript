# Literal types

The type of a value is the exact value.

```ts
// Example 1
const theAnswerToLifeTheUniverseAndEverything = 42; // The type is inferred as `42`.

console.log(theAnswerToLifeTheUniverseAndEverything);

// Example 2
let oneOfTwoStrings: "string1" | "string2";

oneOfTwoStrings = Math.round(Math.random()) % 2 === 1 ? "string1" : "string2";

console.log(oneOfTwoStrings); // "string1" OR "string2"
```

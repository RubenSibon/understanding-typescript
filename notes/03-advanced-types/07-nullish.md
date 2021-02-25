# Nullish coalescing

Nullish = data about which you are not certain if it is null or undefined.

```ts
const userInput = "";

const storedData = userInput || "DEFAULT"; // JS way; also checks for falsy values such as "".

const storedData = userInput ?? "DEFAULT"; // TS alternative. but it check only for `null` or `undefined` and nothing else!
```

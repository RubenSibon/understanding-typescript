# Unision

Combined multiple types so that a value may be of any of those types:

```ts
let anser: string | number| boolean;

answer = "George W. Bush"; // Allowed
answer = 42; // Allowed
answer = true; // Allowed
```

A more elaborate example with a function call:

```ts
function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "string" && typeof input2 === "string") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(34, 37);
console.log(combinedAges); // 71

const combinedNames = combine("Ruben", "Işıl");
console.log(combinedNames); // "RubenIşıl"
```

We need to do a manual type check in the function because the TS interpreter cannot know if both arguments are of the same type. It wants to either add up to numbers together or concatenate two strings.

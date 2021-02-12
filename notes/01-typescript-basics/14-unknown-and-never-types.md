# Unknown and never types

## Unknown

With the `unknown` type you may store any value without getting errors. That makes it similar to `any`.

But as the below example show `unknown` is not a liberal as `any` because it does not allow to be passed on to a newly assigned variable with a different type than that which was inferred from the initial assignment.

Like `any`, `unknown` should generally be used as a last resort, but it is better to use `unknown` than `any` in such cases.

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Ruben";

userName = userInput; // Type error because `unknown` cannot be converted to `string`.

if (typeof userInput === "string") {
  userName = userInput; // No type error because of the manual type check.
}
```

## Never

The `never` type can be used when a function will and should never return something.

```ts
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

const result = generateError("An error occured!", 500);

console.log(result);
```

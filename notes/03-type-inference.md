# Type inference

You do not have to assign a type to every constant or variable you create. In fact it is not considered good practice to do so, because TypeScript infers the type from the assigned value.

Only if you declare a variable without assigning a value is it good practice to assign the expected type to it like so:

```ts
// The type of the returned value is inferred from the mathematical operations on the arguments which are all numbers:
function totalPrice (amount: number, price: number, tax: number) {
  return amount * price * tax;
}

// Type "number" is inferred:
const price = 10;
const tax = 1.125;

// Explicit typing:
let amount: number;

// ... some code in between ...

amount = 5; // `amount = "5";` would cause a type error.

const totalPrice = calcPrice(amount, price, tax);
```

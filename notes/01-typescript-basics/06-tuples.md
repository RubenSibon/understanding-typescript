# Tuples

Tuples are like arrays, but with two unique characteristics:

- tuples are of a fixed length, and
- the Tuple's items are of a fixed type.

```ts
const tuple: [string, string, number] = ["Ruben", "Sibon", 34];

tuple[1] = 100; // Type error!
tuple[2] = 100; // Allowed!
```

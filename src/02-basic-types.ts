console.group("02-BASIC-TYPES");

// Object with type inferrence (preferred).
const personObj1 = {
  name: "Ruben",
  age: 34,
};

// Object with explicit typing.
const personObj2: {
  name: string;
  age: number;
} = {
  name: "Ruben",
  age: 34,
};

// Correct:
console.log("personObj1", personObj1.name);
console.log("personObj2", personObj2.name);

// Error, property does not exist on type:
// console.log("personObj1", personObj1.nickname); // Type error!
// console.log("personObj2", personObj2.nickname); // Type error!

console.groupEnd();

console.group("06-GENERICS");

//
// Generics basics
//

console.group("Generics basics");

// Array is a generic
// const names1: Array = []; // Type error because `Array` is a generic type.
const names2: Array<string> = ["Ruben", "Bennie", "Marian", "Alexander"];
const names3: string[] = ["Ruben", "Bennie", "Marian", "Alexander"];

// Promise is a generic
const promisedData: Promise<string> = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("Returned data!");
  }, 2000);
});

promisedData.then(data => {
  data.split(" ");
});

// Object is a generic
function merge1(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

function merge2<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj1 = merge1({ name: "Ruben" }, { age: 34 });
const mergedObj2 = merge2({ name: "Ruben" }, { age: 34 });

// console.log(mergedObj1.name); // Type error because TS cannot infer property (types).
console.log(mergedObj2.name); // No error because type is inferred with generics.

interface Lengthy {
  length: number;
}

// Generic T extends Lengthy that checks if an object has the `length` property.
// The function returns a tuple with the type T and a string.
function countAndDesribe<T extends Lengthy>(element: T): [T, string] {
  let description = "has no length.";

  if (element.length === 1) {
    description = "has 1 element.";
  } else if (element.length > 1) {
    description = `has ${element.length} elements.`;
  }

  return [element, description];
}

console.log(countAndDesribe("Hello world! My name is Ruben!"));
console.log(countAndDesribe([1, 2, 3, 4, 5]));

// With `keyof` keyword to check if an object has a given key.
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Ruben", age: 34 }, "age"));
console.log(extractAndConvert({ name: "Ruben", age: 34 }, "name"));
// console.log(extractAndConvert({ name: "Ruben", age: 34 }, "job")); // Type error because "job" does not exist on the object passed in as the first parameters.

console.groupEnd();


//
// Generic classes
//

console.group("Generic classes");

// It is a good idea to only allow primitives due to objects being passed by reference.
class DataStorage<T extends string | number> {
  private data: T[] = [];

  get getItems() {
    return [...this.data];
  }

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Ruben");
textStorage.addItem("Manu");
console.log(textStorage.getItems);
textStorage.addItem("Daan");
console.log(textStorage.getItems);
textStorage.removeItem("Manu");
console.log(textStorage.getItems);

console.groupEnd();
console.groupEnd();

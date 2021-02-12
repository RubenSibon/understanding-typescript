//
// Basic types, inferrence, unision types, type aliases.
//

console.group("// Basic types, inferrence, unision types, type aliases.");

type NumOrStr = number | string;
type ConvertAsTypes = "number" | "string" | null;

function combine(input1: NumOrStr, input2: NumOrStr, convertAs: ConvertAsTypes = null) {
  const areNumbers = typeof input1 === "number" && typeof input2 === "number";

  let result: NumOrStr;

  if (areNumbers && convertAs !== "string" || convertAs === "number") {
    result = Number(input1) + Number(input2);
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges1 = combine(34, 37, "string");
console.log(combinedAges1); // "3437"

const combinedAges2 = combine("34", "37", "number");
console.log(combinedAges2); // "71"

const combinedNames = combine("Ruben", "Işıl");
console.log(combinedNames); // "RubenIşıl"

console.groupEnd();

//
// Return types.
//

console.group("// Return types.");

function logToConsole(msg: string | number): void {
  console.log("Logged:", msg);
}
logToConsole("The medium is the message.");

function addUp(num1: number, num2: number) {
  return num1 + num2; // The `number` type is inferred as the returned type.
}
console.log(addUp(4, 7)); // 11

logToConsole(addUp(3, 6)); // "Logged:" 9

console.groupEnd();

//
// Function as Type
//

console.group("// Function types.");

// let combineValues: Function; // Set the type of the value as `Function`
let combineValues: (a: number, b: number) => number; // Pass a function with param and return types as a type.

combineValues = addUp;

console.log(combineValues(8, 8)); // 16

console.groupEnd();

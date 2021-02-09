type NumOrStr = number | string;
type ConvertAsTypes = "number" | "string";

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

function combine(input1: number | string, input2: number | string, convertAs = null) {
  const areNumbers = typeof input1 === "number" && typeof input2 === "number";

  let result: string | number;

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

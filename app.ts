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

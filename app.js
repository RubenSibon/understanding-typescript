"number" | "string";
function combine(input1, input2, convertAs) {
    if (convertAs === void 0) { convertAs = null; }
    var areNumbers = typeof input1 === "number" && typeof input2 === "number";
    var result;
    if (areNumbers && convertAs !== "string" || convertAs === "number") {
        result = Number(input1) + Number(input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges1 = combine(34, 37, "string");
console.log(combinedAges1); // "3437"
var combinedAges2 = combine("34", "37", "number");
console.log(combinedAges2); // "71"
var combinedNames = combine("Ruben", "Işıl");
console.log(combinedNames); // "RubenIşıl"

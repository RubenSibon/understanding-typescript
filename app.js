//
// Basic types, inferrence, unision types, type aliases.
//
console.group("// Basic types, inferrence, unision types, type aliases.");
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
console.groupEnd();
//
// Return types.
//
console.group("// Return types.");
function logToConsole(msg) {
    console.log("Logged:", msg);
}
logToConsole("The medium is the message.");
function addUp(num1, num2) {
    return num1 + num2; // The `number` type is inferred as the returned type.
}
console.log(addUp(4, 7));
logToConsole(addUp(2, 6));
console.groupEnd();

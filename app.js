function combine(input1, input2) {
    var result;
    if (typeof input1 === "string" && typeof input2 === "string") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(34, 37);
console.log(combinedAges); // 71
var combinedNames = combine("Ruben", "Işıl");
console.log(combinedNames); // "RubenIşıl"

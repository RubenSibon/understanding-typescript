function add(a, b, print, text) {
    var result = a + b;
    return print
        ? console.log("" + (text + " ") + result)
        : result;
}
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var printText = "The result is";
var result = add(num1, num2, printResult, printText);

console.group("01-BASICS");

function combine2(a: number, b: number, print?: boolean, text?: string) {
  const result = a + b;

  return print
    ? console.log(`${text + " "}${result}`)
    : result;
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const printText = "The result is";

const result = combine2(num1, num2, printResult, printText);

console.groupEnd();

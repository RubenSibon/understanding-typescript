console.group("05-DECORATORS");

// `constructor` is the constructor function of the class in this case.
function Logger(constructor: Function) {
  console.log("Logging...", constructor);
}

@Logger
class Person2 {
  name = "Ruben";

  constructor() {
    console.log("Creating the person object...");
  }
}

const person = new Person2();

console.log(person);

console.groupEnd();

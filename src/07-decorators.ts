console.group("05-DECORATORS");

//
// Basic decorator factory to log a new object creation from a class.
//

// `constructor` is the constructor function of the class in this case.
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString, constructor);
  };
}

@Logger("LOGGING PERSON2")
class Person2 {
  name = "Ruben";

  constructor() {
    console.log("Creating the person object...");
  }
}

const person = new Person2();

console.log(person);

//
// More complex example to render something in the view.
//

function Template(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);

    const person = new constructor("Ruben is awesome");

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = person.name;
    }
  };
}

@Template("<h1>A person object has been created!</h1>", "app")
class Person3 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const ruben = new Person3("Ruben");

console.log(ruben);

console.groupEnd();

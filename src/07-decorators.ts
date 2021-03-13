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

function Log(_: any, propName: string) {
  console.log(`Prop "${propName}"`);
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

// Multiple decorators can be added.
@Logger("LOGGING PERSON3")
@Template("<h1>A person object has been created!</h1>", "app")
class Person3 {
  // Decorators can be added to class props.
  @Log
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Decorators can be added to class methods.
  @Log
  sayMyName() {
    return `My name is ${this.name}`;
  }
}

const ruben = new Person3("Ruben");

console.log(ruben);
console.log(ruben.sayMyName());

//
// Autobind
//

console.group("Autobind");

function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,

    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };

  return adjDescriptor;
}

class Printer {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer("A new message!");

const button: HTMLButtonElement = document.querySelector("button")!;
button.addEventListener("click", printer.showMessage);

console.groupEnd();
console.groupEnd();

# Autobind decorator

When calling methods in event listeners the execution context accessed with `this` is lost. This is tradionally resolved by adding `.bind(CLASSNAME)` to the callback function. With decorators there is another way:

```ts
function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,

    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }

  return adjDescriptor;
}

class Printer {
  message: "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector("button");
button.addEventListener("click", printer.showMessage);
```

console.group("04-INTERFACES");

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(
    name: string,
    age: number
  ) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    return `${phrase} ${this.name}`;
  }
}

let user1: Greetable;

// ...sometime later...

user1 = new Person("Ruben", 34);

console.log(user1);
console.log(user1.greet("Hello"));

console.groupEnd();

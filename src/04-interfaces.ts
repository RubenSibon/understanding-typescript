console.group("04-INTERFACES");

interface Named {
  name: string;
}

interface Greetable extends Named {
  greet(phrase: string): string;
}

interface Mortal {
  readonly isMortal: boolean,

  kill(): string;
}

class Person implements Greetable, Mortal {
  name: string;
  age: number;
  isMortal: boolean;

  constructor(
    name: string,
    age: number
  ) {
    this.name = name;
    this.age = age;
    this.isMortal = true;
  }

  greet(phrase: string) {
    return `${phrase} ${this.name}`;
  }

  kill() {
    return `${this.name} has been killed!`;
  }
}

// let user1: Greetable; // Greetable interfaces does not have the Mortal interface so it fails when we want to call `kill()` on it later.
let user1: Person;

// ...sometime later...

user1 = new Person("Ruben", 34);

console.log(user1);
console.log(user1.greet("Hello"));
console.log(user1.kill()); // Would fail if `user1` was constructed according to the Greetable interface only.

console.groupEnd();

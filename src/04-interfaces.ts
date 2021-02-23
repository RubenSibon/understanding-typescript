console.group("04-INTERFACES");

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

// ...sometime later...

user1 = {
  name: "Ruben",
  age: 34,
  greet(phrase) {
    return `${phrase} ${this.name}`;
  }
};

console.log(user1);
console.log(user1.greet("Hello"));

console.groupEnd();

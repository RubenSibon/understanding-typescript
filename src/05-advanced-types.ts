console.group("05-ADVANCED-TYPES");


type Input = string | number;
type Numeric = number | boolean;

type Universal = Input & Numeric; // Is of type `number` because that is the only intersection.

function add(a: Input, b: Input) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

console.log(add("15", 12));

type Admin = {
  name: string;
  privileges: string[];
};

type Newbie = {
  name: string;
  startDate: Date;
};

type User = Admin | Newbie;

function printUserInfo(user: User) {
  if ("name" in user) {
    console.log(`Name: ${user.name}`);
  }
  if ("privileges" in user) {
    console.log(`Privileges: ${user.privileges}`);
  }
  // With instances of classes you could use the following type guard:
  // if (user instanceof Newbie) {
  //   console.log("Newbie!", user.startDate);
  // }
}

const empl1: Newbie = {
  name: "Ruben",
  startDate: new Date("2020-06-22"),
};

const admin1: Admin = {
  name: "Fred",
  privileges: ["break-stuff", "shenanigans"],
};

printUserInfo(empl1);
printUserInfo(admin1);

console.groupEnd();

# Type guards

The JavaScript keyword `typeof` already provides a type guard feature. It's standard JavaScript, but can effectively be used with TypeScript.

```ts
function add(a: number | string, b: number | string) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}
```

But for objects (custom types) the typeof keyword cannot be used. Then you may use:

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type User = Admin | Employee;

function printUserInfo(user: User) {
  console.log(`Name: ${user.name}`);
  if ("privileges" in User) {
    console.log(`Privileges: ${user.privileges}`);
  }
}

const empl1: Employee = {
  name: "Ruben";
  startDate: new Date("2020-06-22");
}

const admin1: Admin = {
  name: "Fred";
  privileges: ["break-stuff", "shenanigans"];
}

printUserInfo(empl1);
printUserInfo(admin1);
```

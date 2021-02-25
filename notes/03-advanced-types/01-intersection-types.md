# Intersection types

Type definitions can be combined (or intersected).

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// or:
interface ElevatedEmployee extends Employee, Admin {}; // where the extended types are interfaces.

const empl1: ElevatedEmployee = {
  name: "Ruben",
  privileges: ["create-server"],
  startDate: new Date(),
};
```

Example without objects. Any type can be combined (or intersected).

```ts
type Input = string | number;
type Numeric = number | boolean;

type Universal = Input & Numeric; // Is of type `number` because that is the only intersection.
```

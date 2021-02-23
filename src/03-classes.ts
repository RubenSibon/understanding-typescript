console.group("03-CLASSES");

type DateNull = Date | null;

abstract class OrgUnit {
  // Example of a protected and read-only property.
  protected readonly id: string;

  constructor(
    // Protected properties and methods, unlike private ones, can be inherited,
    // but cannot be manipulated or accessed directly from outside the instances.
    protected name: string,
  ) {
    this.id = `id${Math.round(Math.random() * 100000)}`;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  // Example of an abstract method that should exist on all derived (extended) classes,
  // but that may have varying implementations.
  abstract describe(this: OrgUnit): void;
}

// Example of class inheritance (extension).
class Employee extends OrgUnit {
  protected readonly id: string;

  constructor(
    // Examples of a private property.
    protected name: string,

    private dateStarted: DateNull,
    private dateEnded: DateNull = null
  ) {
    super(name);

    this.id = `empl${this.name}${Math.round(Math.random() * 100000)}`;
  }


  get getDateStarted() {
    return this.dateStarted;
  }

  get getDateEnded() {
    return this.dateEnded;
  }

  // Nonsensical example of a static method that should be called on the constructor/class and not an instance.
  static createEmployee(name: string, dateStarted: DateNull, dateEnded: DateNull) {
    return new Employee(name, dateStarted, dateEnded);
  }

  describe() {
    return `
${this.constructor.name} name: ${this.getName};
${this.constructor.name} ID: ${this.getId};
`;
  }
}

class Department extends OrgUnit {
  protected readonly id: string;

  constructor(
    protected name: string,

    private employees: Employee[] = []
  ) {
    super(name);

    this.id = `dept${this.name}${Math.round(Math.random() * 100000)}`;
  }

  // Example of a static property that exists on the class.
  static fiscalYear = 2021;

  describe() {
    return `
${this.constructor.name} name: ${this.getName};
${this.constructor.name} ID: ${this.getId};
`;
  }

  addEmployee(employee: Employee) {
    this.employees = [...this.employees, employee];
  }

  getEmployeeNames(activeOnly = false) {
    const filteredEmployees = activeOnly
      ? this.employees.filter(empl => !empl.getDateEnded && empl.getDateEnded! <= new Date())
      : this.employees;

    return filteredEmployees.map(empl => empl.getName);
  }

  getEmployeeInfo() {
    return `
========================
Employees in ${this.name}:
Number of employees: ${this.employees.length}.
All the employees:
${this.getEmployeeNames(true)}
========================
    `;
  }
}

const deptMarketing = new Department("Marketing", []);
const deptAccounting = new Department("Accounting", []);

const emplRuben = new Employee("Ruben", new Date("2020-06-22"));
const emplDaan = new Employee("Daan", new Date("2020-08-01"));
const emplIsaac = new Employee("Isaac", new Date("2021-01-03"));

deptMarketing.addEmployee(emplRuben);
deptAccounting.addEmployee(emplDaan);
deptMarketing.addEmployee(emplIsaac);

// Add a "new" employee using the static method.
const emplMax = Employee.createEmployee("Max", new Date("2019-05-20"), new Date("2021-01-15"));
deptAccounting.addEmployee(emplMax);

// Access a static property on a class. Static props cannot be accessed from instances derived from the class!
console.log(Department.fiscalYear);

console.log("Instance 1 of a department:\n", deptMarketing.describe(), deptMarketing);
console.log(deptMarketing.getEmployeeInfo());

console.log("Instance 2 of a department:\n", deptAccounting.describe(), deptAccounting);
console.log(deptAccounting.getEmployeeInfo());
console.log("Employees in accounting that are active", deptAccounting.getEmployeeNames(true));

console.log(deptAccounting.getName, deptAccounting.getId);
console.log(emplRuben.getName, emplRuben.getId);

console.groupEnd();

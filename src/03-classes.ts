console.group("03-CLASSES");

class OrgUnit {
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
}

// Example of class inheritance (extension).
class Employee extends OrgUnit {
  protected readonly id: string;

  constructor(
    // Examples of a private property.
    protected name: string,

    private dateStarted: Date | null,
    private dateEnded: Date | null = null
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

  // `this` is a special type of parameter in TypeScript which tells the compiler what type of class this method can be called on.
  describe(this: Department) {
    return `Department: ${this.name}`;
  }

  addEmployee(employee: Employee) {
    this.employees = [...this.employees, employee];
  }

  getEmployeeNames() {
    return this.employees.map(empl => empl.getName);
  }

  getEmployeeInfo() {
    return `
========================
Employees in ${this.name}:
Number of employees: ${this.employees.length}.
All the employees:
${this.getEmployeeNames()}
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

console.log("Instance 1 of a department:\n", deptMarketing.describe(), deptMarketing);
console.log(deptMarketing.getEmployeeInfo());

console.log("Instance 2 of a department:\n", deptAccounting.describe(), deptAccounting);
console.log(deptAccounting.getEmployeeInfo());

console.log(deptAccounting.getName, deptAccounting.getId);
console.log(emplRuben.getName, emplRuben.getId);

console.groupEnd();

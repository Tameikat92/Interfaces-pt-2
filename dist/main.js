"use strict";
class Employee {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }
    calculateSalary() {
        return 0;
    }
    displayInfo() {
        console.log(`${this.employeeName} earns $$${this.calculateSalary()}`);
    }
}
class FulltimeEmplyoyee extends Employee {
    constructor(fullTimeName, salary) {
        super(fullTimeName);
        this.fullTimeName = fullTimeName;
        this.salary = salary;
    }
    calculateSalary() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(partTimeName, hourlyRate, hoursWorked) {
        super(partTimeName);
        this.partTimeName = partTimeName;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    // really a getter because its a public method
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
function showSalaryDetails(employee) {
    employee.displayInfo();
}
// * new * means create an instance
const fulltTimeEmp = new FulltimeEmplyoyee("James", 100000000);
const partTimeEmp = new PartTimeEmployee("Nailah", 250, 40);
showSalaryDetails(fulltTimeEmp);
showSalaryDetails(partTimeEmp);

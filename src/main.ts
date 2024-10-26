class Employee {
    constructor(public employeeName: string){}

    calculateSalary(): number {
        return 0;
    }

    displayInfo(): void {
        console.log(`${this.employeeName} earns $$${this.calculateSalary()}`)
    }
}

class FulltimeEmplyoyee extends Employee {
    constructor(private fullTimeName: string, private salary: number){
        super(fullTimeName);
    }

        calculateSalary(): number {
            return this.salary;
        }
}

class PartTimeEmployee extends Employee {
    constructor(private partTimeName: string, private hourlyRate: number, private hoursWorked: number){
    super(partTimeName)
    }
    // really a getter because its a public method
    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

function showSalaryDetails(employee: Employee){
    employee.displayInfo();
}

// * new * means create an instance
const fulltTimeEmp = new FulltimeEmplyoyee("James", 100_000_000);
const partTimeEmp = new PartTimeEmployee("Nailah",250,40);

showSalaryDetails(fulltTimeEmp);
showSalaryDetails(partTimeEmp);


// 

interface Character {
    nameCharacter: string;
    healthCharacter: number;
    attackCharacter: number;
    attack(): string;
    takeDamage(amount: number): void;
    specialMove(): string;
}

class BaseCharacter implements Character {
    nameCharacter: string;
    healthCharacter: number;
    attackCharacter: number;

    constructor(nameCharacter: string, healthCharacter: number) {
        this.nameCharacter = nameCharacter;
        this.healthCharacter = healthCharacter;
        this.attackCharacter = 10; // Default attack power for base characters
    }

    attack(): string {
        return `${this.nameCharacter} attacks with ${this.attackCharacter} power!`;
    }

    takeDamage(amount: number): void {
        this.healthCharacter -= amount;
        console.log(`${this.nameCharacter} took ${amount} damage! Health is now ${this.healthCharacter}.`);
    }

    specialMove(): string {
        return `${this.nameCharacter} performs a special move!`;
    }
}

class Warrior extends BaseCharacter {
    constructor(nameBaseChrac: string, healthBaseCharac: number) {
        super(nameBaseChrac, healthBaseCharac);
        this.attackCharacter = 20; // Warrior has a higher attack power
    }

    attack(): string {
        return `${this.nameCharacter} strikes with a mighty sword!`;
    }

    specialMove(): string {
        return `${this.nameCharacter} charges forward with a shield bash!`;
    }
}

class Wizzard extends BaseCharacter {
    constructor(name: string, health: number) {
        super(name, health);
        this.attackCharacter = 15; // Wizzards have a different attack power
    }

    attack(): string {
        return `${this.nameCharacter} casts a fireball spell!`;
    }

    specialMove(): string {
        return `${this.nameCharacter} summons a barrier of protection!`;
    }
}

// Example usage
const aragorn = new Warrior("Aragorn", 120);
const gandolf = new Wizzard("Gandalf", 100);
const guts = new Wizzard("Guts", 100);

const characters: Character[] = [aragorn, gandolf, guts];

characters.forEach((character) => {
    console.log(character.attack());   // Logs the attack message
    console.log(character.specialMove());  // Logs the special move of the current character
    character.takeDamage(25);   // Reduces character's health by 25 and logs damage message
});






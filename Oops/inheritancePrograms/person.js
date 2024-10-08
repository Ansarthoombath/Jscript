// Base class Person
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    displayInfo() {
        return `Person Info: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}

// Inheriting from Person: Student class
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}

// Inheriting from Person: Teacher class
class Teacher extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}

// Example usage
const student = new Student("John", 20, "123 Main St");
const teacher = new Teacher("Ms. Smith", 35, "456 Oak St");

console.log(student.displayInfo());
console.log(teacher.displayInfo());

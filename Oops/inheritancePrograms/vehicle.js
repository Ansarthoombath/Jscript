// Base class Vehicle
class Vehicle {
    constructor(color, model, year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return `Vehicle Info: ${this.color} ${this.model}, Year: ${this.year}`;
    }
}

// Inheriting from Vehicle: Car class
class Car extends Vehicle {
    constructor(color, model, year) {
        super(color, model, year);
    }
}

// Inheriting from Vehicle: Truck class
class Truck extends Vehicle {
    constructor(color, model, year) {
        super(color, model, year);
    }
}

// Example usage
const car = new Car("Red", "Honda Civic", 2020);
const truck = new Truck("Blue", "Ford F-150", 2018);

console.log(car.displayInfo());
console.log(truck.displayInfo());

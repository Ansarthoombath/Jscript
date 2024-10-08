// Base class Computer
class Computer {
    constructor(processor, ram, storage) {
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
    }

    displayInfo() {
        return `Computer Info: Processor - ${this.processor}, RAM - ${this.ram}GB, Storage - ${this.storage}GB`;
    }
}

// Inheriting from Computer: Laptop class
class Laptop extends Computer {
    constructor(processor, ram, storage, weight) {
        super(processor, ram, storage);
        this.weight = weight; // additional property specific to laptops
    }

    displayInfo() {
        return `${super.displayInfo()}, Weight - ${this.weight}kg`;
    }
}

// Inheriting from Computer: Desktop class
class Desktop extends Computer {
    constructor(processor, ram, storage, hasMonitor) {
        super(processor, ram, storage);
        this.hasMonitor = hasMonitor; // additional property specific to desktops
    }

    displayInfo() {
        return `${super.displayInfo()}, Monitor Included - ${this.hasMonitor}`;
    }
}

// Inheriting from Laptop: GamingLaptop class
class GamingLaptop extends Laptop {
    constructor(processor, ram, storage, weight, gpu) {
        super(processor, ram, storage, weight);
        this.gpu = gpu; // additional property for gaming laptops
    }

    displayInfo() {
        return `${super.displayInfo()}, GPU - ${this.gpu}`;
    }
}

// Inheriting from Laptop: BusinessLaptop class
class BusinessLaptop extends Laptop {
    constructor(processor, ram, storage, weight, batteryLife) {
        super(processor, ram, storage, weight);
        this.batteryLife = batteryLife; // additional property for business laptops
    }

    displayInfo() {
        return `${super.displayInfo()}, Battery Life - ${this.batteryLife} hours`;
    }
}

// Example usage:
const gamingLaptop = new GamingLaptop("Intel i9", 32, 1000, 2.5, "NVIDIA RTX 3080");
const businessLaptop = new BusinessLaptop("Intel i7", 16, 512, 1.8, 10);

console.log(gamingLaptop.displayInfo());
console.log(businessLaptop.displayInfo());

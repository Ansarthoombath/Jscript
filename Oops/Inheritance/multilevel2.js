class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    getDetails(){
        return `Name:${this.name},Age:${this.age}`
    }
}
class Employee extends Person{
    constructor(name,age,employeeId){
        super(name,age)
        this.employeeId=employeeId
    }
    getEmployeeDetails(){
        return `${this.getDetails()},Employee ID:${this.employeeId}`
    }
}
class Manager extends Employee{
    constructor(name,age,employeeId,department){
        super(name,age,employeeId)  //call the parent class constructor
        this.department=department
    }
    getManagerDetails(){
        return `${this.getEmployeeDetails()},Department:${this.department}`
    }
}

const manager = new Manager("John Doe",35,"E1234","Sales")
console.log(manager.getManagerDetails())
console.log(manager.getEmployeeDetails())
console.log(manager.getDetails())
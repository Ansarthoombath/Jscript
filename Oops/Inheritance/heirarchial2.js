


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
    class Manager extends Person{
            constructor(name,age,department){
                super(name,age)  //call the parent class constructor
                this.department=department
            }
            getManagerDetails(){
                return `${this.getDetails()},Department:${this.department}`
            }
        }
        const manager = new Manager("John Doe",35,"Sales")
        const employee = new Employee("John Doe",35,"E1234")
        console.log(manager.getManagerDetails())
        console.log(employee.getEmployeeDetails())
class Animal {
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} makes sound.`)
    }
}

class Dog extends Animal{
    walk(){
        console.log(`${this.name} barks.`)
    }
}
const myDog= new Dog(`Buddy`)
myDog.speak();
myDog.walk()
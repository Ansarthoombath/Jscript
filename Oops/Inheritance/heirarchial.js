class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes s a sound.`)
    }
}

class Dog extends Animal{
   
    bark(){
        console.log(`${this.name} bark.`)
    }
}

class Cat extends Animal{
   
   meow(){
       console.log(`${this.name} meow.`)
   }
}
const cat=new Cat('tyson')
cat.meow()
cat.speak()

const  dog=new Dog('tiger')
dog.bark()
dog.speak()
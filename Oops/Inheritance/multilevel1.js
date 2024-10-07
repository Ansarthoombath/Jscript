class Animal {
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} makes sound.`)
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name} barks.`)
    }
}

class Puppy extends Dog{
    play(){
        console.log(`${this.name} is playing.`)
    }
}

const myPuppy =new Puppy('Buddy')
myPuppy.speak()
myPuppy.bark()
myPuppy.play()
console.log(myPuppy)
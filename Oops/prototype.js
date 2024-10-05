let person=function(name,yob){
    this.name=name;
    this.yob=yob;
    this.printname = function(){
        return `Iam ${this.name} and year of birth is ${this.yob}`
    }
}
person.prototype.age=function(){
    return new Date().getFullYear()-this.yob
}
person.prototype.place=function(){
    return 'kottakkal'
}

person.prototype.email='email'

let sony=new person('sony',2003)
console.log(sony.printname())
console.log(sony.age())



let thasni=new person('thasni',2004)
console.log(thasni.printname())
console.log(thasni.age())

let nithun=new person('nithun',2004)
console.log(nithun.printname())
console.log(nithun.age())

let ansar=new person('ansar',2004)
console.log(ansar.printname())
console.log(ansar.age())
console.log(sony)

console.log(ansar.place())
console.log(ansar)

     const person={
        name:'John',
        yob:'2000',
        age:function(){
            return new Date().getFullYear()-this.yob
        }

    }

    const person2={
        name:'Adam',
        yob:'1998',
        age:function(){
            return new Date().getFullYear()-this.yob
        }

    }
    console.log(person.age(),person.name)
    console.log(person2.age(),person2.name)

function HouseKeeper( yearsOfExperience,name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience
    this.name = name
    this.cleaningRepertoire = cleaningRepertoire
    this.cleaning = function(){
        alert("Cleaning in progress")
    }
}

var houseKeeper1=new HouseKeeper(12,'Adam',["lobby",'bedroom'])
var houseKeeper2=new HouseKeeper(20,'James',["Bathroom",'bedroom'])
console.log(houseKeeper1)
console.log(houseKeeper2)
console.log(houseKeeper2.name)
houseKeeper1.cleaning()
const circle={
    radius:5,
    calculateArea:function(){
        return Math.PI * this.area * this.radius
    }
}

const square = {
    side:4,
    calculateArea:function(){
        return this.side * this.side
    }
}

function printArea(shape){
    console.log(`The area is :${shape.calculateArea}`)
}

printArea(circle)
printArea(square)

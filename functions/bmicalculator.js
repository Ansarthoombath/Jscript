
function bmiCalculator(weight,height){
    var bmi = weight / (height * height)
    return Math.round(bmi) 
 }
 document.write(bmiCalculator(65,1.8)) 
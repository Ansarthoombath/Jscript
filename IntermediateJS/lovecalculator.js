name1=prompt("enter the first person")
name2=prompt("enter the second person")

var n=Math.random()
n=n*100
loveScore= Math.floor(n)
if(loveScore>70){
    alert(loveScore+" very good")
}
else if(loveScore<70 && loveScore>50){
    alert(loveScore+"good")
}
else{
    alert(loveScore+"bad")
}

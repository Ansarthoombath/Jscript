var a=document.querySelectorAll("h1")

console.log(a)
a[0].innerHTML = "changed using queryselector"
a[1].style.color="red"
a[2].innerHTML="python changed" 
for(i=0;i<a.length;i++){
    a[i].style.background="green"
}
var b= document.querySelectorAll(".hclass")
console.log(b)
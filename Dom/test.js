let h1=document.createElement('h1')
let h2=document.createElement('h2')
 heading1=document.createTextNode("Heading1")
h1.appendChild(heading1)
document.body.appendChild(h1)
document.write("<br>")


let paragraph1=document.createElement('p')
 paratext1=document.createTextNode("1.this content is created using textNode")
paragraph1.appendChild(paratext1)
document.body.appendChild(paragraph1)
document.write("<br>")


heading2=document.createTextNode("Heading2")
h2.appendChild(heading2)
document.body.appendChild(h2)
document.write("<br>")

let paragraph2=document.createElement('p')
 paraText2=document.createTextNode("2.this content is created using textNode")
paragraph2.appendChild(paraText2)
document.body.appendChild(paragraph2)
document.write("<br>")


h1.className="heading"
h2.className="heading"

var a=document.querySelectorAll(".heading")
var b=document.querySelectorAll('p')
console.log(a)
console.log(b)
function styleHeading()
{
    for(i=0;i<b.length;i++){
          b[i].style.color="red"
    }
   
    

}
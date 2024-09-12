
function mul(a,b){
 
    for(i=1;i<=b;i++){
       
        document.write(`${i}*${a}=${a*i}`+"<br>")
    }
 
}
a=Number(prompt("value1"))
b=Number(prompt("limit"))

mul(a,b)
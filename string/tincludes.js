
let str="one Team solutions calicut"
let a=str.split(" ")




document.write(a+"<br>")
for(i=0;i<a.length;i++){
    let b=a[i]
    if (b.includes("t")||b.includes("T")){
        document.write(b+"<br>")
    }



}
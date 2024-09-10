
let str="one team solutions calicut"
let a=str.split(" ")



document.write(a+'<br>')
for(i=0;i<a.length;i++){
    let b=a[i][0]
    if (b==='t'){
        document.write(a[i])
    }



}

function reverseString(a){
    let rev=""
       for(i=a.length-1;i>=0;i--){
         rev += a[i]
       }
       return rev
}
document.write(reverseString("oneteam"))
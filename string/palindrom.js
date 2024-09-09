
let str="malayalam"

let flag=true
for(i=0;i<str.length/2;i++){
   if(str[i]!=str[str.length-1-i]) {
    flag=false
    break;
    
   }
   

}
if(flag==true){
    document.write("its a palindrome")
}
else{
    document.write("Not palindrome")
}
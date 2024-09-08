a=Number(prompt("enter number"))
 let flag=true
if(a==0 || a==1){
    console.log("not prime")
}
else{
    for(i=2;i<=Math.sqrt(a);i++){
        if(a%i==0){
           flag=false
           break;
        }
    }
}
if(flag==true){
    console.log(" prime")
}
else{
    console.log("not  prime")
}
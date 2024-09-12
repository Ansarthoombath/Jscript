let i=2
let flag=true
function isPrime(n){
     for(i=2;i<=Math.floor(n/2);i++){
    if(n%i==0){
        flag=false
        return flag
    }
}


}
console.log(isPrime(21))
if(flag==true)

   {
    console.log("its a prime")
   }

   else{
    console.log("not a prime")
   }

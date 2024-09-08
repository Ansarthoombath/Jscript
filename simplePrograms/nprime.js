a=Number(prompt("enter limit"))
let isPrime=true
let num=2
let count=0
let result=""


while (count < a) {
    isPrime = true;

   for(i=2;i<=Math.sqrt(num);i++){
       if(num%i==0){
          isPrime=false
          break;
       }
   }

if(isPrime){
   result+=num + " ";
   count++
}
num++;
}
document.write(result)
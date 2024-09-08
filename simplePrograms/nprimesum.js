a=Number(prompt("enter limit"))
let isPrime=true
let num=2
let count=0
let arr=[]
let sum=0


while (count < a) {
    isPrime = true;

   for(i=2;i<=Math.sqrt(num);i++){
       if(num%i==0){
          isPrime=false
          break;
       }
   }

if(isPrime){
   arr.push(num)
   count++
}
num++;
}
for(i=0;i<arr.length;i++){
sum+=arr[i]
}
document.write(arr+"<br>")
document.write(sum+"<br>")
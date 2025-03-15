function CountEvenOdd(arr){
  let  evencount=0
  var  oddcount=0;
 for(i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evencount++
    }
    else{
        oddcount++
    }
 }
 return {oddcount,evencount}
}
console.log(CountEvenOdd([3,2,4,5,6,9,7]))

// function countEvenOdd(arr) {
//     let evenCount = 0, oddCount = 0;

//     arr.forEach(num => {
//         num % 2 === 0 ? evenCount++ : oddCount++;
//     });

//     return { oddCount, evenCount };
// }

// console.log(countEvenOdd([3, 2, 4, 5, 6, 9, 7]));

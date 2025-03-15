// function removeDuplicates(arr){
//     return [...new Set(arr)]
// }
// console.log(removeDuplicates([3,2,2,4,5,6,6]))


function removeDuplicates(arr){
  return  arr.filter((value,index)=>arr.indexOf(value)===index)
}
console.log(removeDuplicates([3,4,4,3,2,2,4,5,6,6]))

// function removeDuplicates(arr) {
//     return arr.reduce((unique, item) => {
//         if (!unique.includes(item)) {
//             unique.push(item);
//         }
//         return unique;
//     }, []);
// }

// // Example usage
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
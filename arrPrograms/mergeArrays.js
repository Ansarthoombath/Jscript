// function merge(arr1,arr2){
//     return arr1.concat(arr2)
// }
// console.log(merge([1,3,4],[9,8,7]))


//2.
// function mergeArrays(arr1,arr2){
//     return [...arr1,...arr2]
// }
// console.log(mergeArrays([1,3,4],[9,8,7]))


//3.without duplicate
function mergeArrays(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
}

console.log(mergeArrays([1,3,4,3,1],[9,1,3,8,7]))
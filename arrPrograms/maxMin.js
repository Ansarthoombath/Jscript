function maxMin(arr){
    const max=Math.max(...arr)
    const min=Math.min(...arr)
    return {max,min}
}
console.log(maxMin([8,5,9,1,2]))
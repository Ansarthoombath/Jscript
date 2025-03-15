function reverse(arr){
    let left=0;
    let right=arr.length-1

    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--
    }
    return arr
}
console.log(reverse([4,6,3,7,9]))
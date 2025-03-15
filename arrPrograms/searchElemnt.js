function searchElement(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
console.log(searchElement([2,1,4,5,9],8))
function largest(){
    let arr=[2,5,9,3,8]
    let large=arr[0]
    for(i=0;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i]
        }
    }
    return large
}
document.write(largest())
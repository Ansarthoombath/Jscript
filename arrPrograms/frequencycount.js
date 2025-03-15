function frequencyCount(arr){

    let frequency ={};
    for(i=0;i<arr.length;i++){
        num=arr[i];

        if(frequency[num]){
            frequency[num]+=1;
        }
        else{
            frequency[num]=1;
        }
    }
    return frequency
 
}

console.log(frequencyCount([2,4,3,2,8,8,9]))
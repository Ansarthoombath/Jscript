function sumDigits(num) {
    let sum = 0;
    let digitalsum=0
    while (num>0) {
        sum += num % 10;  
        num = Math.floor(num / 10);  
    }
    
    while (sum>0) {
        digitalsum += sum % 10;  
        sum = Math.floor(sum / 10);  
    }
    return digitalsum
}

document.write(sumDigits(99991))
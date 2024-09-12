let fact=1

function factorial(a){
    for(i=1;i=a;i++){
        fact=fact*i
    }
    return fact
}
document.write(factorial(4))
function neon(num){
    let square = num * num
    let sum = 0
    let product =1
    while(square>0){
        
        digit=square%10
        sum+=digit
       
        square=Math.floor(num/10)

    }
    
    if(sum==product){
        return true
    }
    return false
    
}
function spy(num){
    let sum=0
    let product=1
    let temp=num
    while(temp>0){
        digit=temp%10
        sum+=digit
        product*=digit
        temp=Math.floor(temp/10)
    }
    if(sum==product){
        return true
    }
    return false
}
function palindrome(num){
    orgNum=num
    rev=0
    while(num>0){
        digit=num%10
        rev=rev*10+digit
        num=Math.floor(num/10)
        
    }
    return orgNum==rev
  


}



    
operation=prompt("enter the function to be called:'neon' or 'spy' or 'palindrome'")
num=Number(prompt("enter a number"))
if(operation=='neon'){
    if(neon(num)){
    document.write("its a neon number")
}else{
    document.write("not neon")
}
}
if(operation=='spy'){
if(spy(num)){
    document.write("its a spy number")
}else{
    document.write("not spy")
}
}
if(operation=='palindrome'){
if(palindrome(num)){
    document.write("its a palindrome number")
}else{
    document.write("not palindrom")
}
}
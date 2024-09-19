function isPalindrome(num){
    let orgNum=num
    let rev=0
    while(num>0){
     rev=num%10+rev*10
    
    num=Math.floor(num/10)
    
 
    }
    if(rev==orgNum){
     return "palindrome"
    }
    else{
     return "not palindrome"
    }
 }
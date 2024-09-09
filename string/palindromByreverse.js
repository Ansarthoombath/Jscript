let name="racecar"
  
   let len=name.length
   let reverse=""
    for(i=len-1;i>=0;i--){
        reverse+=name[i]

    }
    document.write(reverse+"<br>")
    if(name==reverse){
        document.write("its a palindrome")
    }
    else{
        document.write("not a palindrome")
    }
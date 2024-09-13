function countVowels(a){
    let count=0
    let characters=a.split('')  
    let vowels="aeiou"
    for(char of characters){
    if(vowels.includes(char)){
        count++
    }
}
return count;
}
document.write(countVowels("one team")) 
document.write()
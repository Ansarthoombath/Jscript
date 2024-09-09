
str="john"
str1="aeiou"
count=0

for(i=0;i<str.length;i++){
    if(str1.includes(str[i])){
    count++

    }



}
document.write(count)
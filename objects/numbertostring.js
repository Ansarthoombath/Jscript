let result=""
    let digit ={
        0 : "zero",
        1 : "one",
        2 : "Two",
        3 : "Three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine"
    }

    let position = {
        0 : "one",
        1 : "ten",
        2 : "hundred",
        3: "thousand"
    }
     
     num =prompt("Enter a number")
     len = num.length
     for(i=0;i<num.length;i++){
        k=num[i]
        a=digit[k]
        result+=" "+ a + " " + position[len-1]
        len--
     }
     document.write(`The value corresponds to ${num} is ${result}`)
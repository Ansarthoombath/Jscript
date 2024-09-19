function isAlphabet(str) {
    return /^[A-Za-z]+$/.test(str);
}


document.write(isAlphabet("Helloworld"))
document.write(isAlphabet("ansar123"))

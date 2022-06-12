function reverseString (wordToReverse) {
    let array = wordToReverse.split("")
    let reversedArray = array.reverse()
    let reversedWord = reversedArray.join("")
    return reversedWord
}

// Do not edit below this line
module.exports = reverseString;

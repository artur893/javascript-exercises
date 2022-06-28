function palindromes(word) {
    const lowWord = word.toLowerCase()
    const replaced = lowWord.replace(/!/g, "")
    const replaced2 = replaced.replace(/,/g, "")
    const replaced3 = replaced2.replace(".", "")
    const replaced4 = replaced3.replace(/ /g, "")
    const splittedWord = replaced4.split("")
    const reversed = splittedWord.reverse()
    const equalWord = reversed.join("")
    if (replaced4 === equalWord) {
        return true
    }
    else {
        return false
    }
}

// Do not edit below this line
module.exports = palindromes;

const repeatString = function(word, number) {
    let string = ""
    if (number < 0) {
        return "ERROR"
    }
    for (let i = 1; i <= number; i++) {
        string = string + word
    }
    return string


};

// Do not edit below this line
module.exports = repeatString;

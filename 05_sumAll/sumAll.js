function sumAll(a, b) {
    let sum = 0
    if (a < 0 || b < 0) {
        return sum = "ERROR"
    }
    else if (typeof a !== typeof 1 || typeof b !== typeof 1) {
        return sum = "ERROR"
    }
    else if (a < b) {
        for (i = a; i <= b; i++) {
            sum = sum + i
        }
        return sum
    }
    else if (a > b) {
        for (i = b; i <= a; i++) {
            sum = sum + i
        }
        return sum
    }
}

// Do not edit below this line
module.exports = sumAll;

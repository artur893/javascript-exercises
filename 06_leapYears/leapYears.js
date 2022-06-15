function leapYears(year) {
    if (year % 400 === 0) return true
    if (year % 100 === 0) return false
    if (year % 4 === 0) return true
    if (year % 4 !== 0) return false
}

// Do not edit below this line
module.exports = leapYears;

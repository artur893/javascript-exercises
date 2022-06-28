function fibonacci(x) {
    if (x <= 0) {
        return ("OOPS")
    }
    const fibo = [1, 1]
    for (i = 2; i < x; i++) {
        fibo[i] = fibo[fibo.length - 1] + fibo[fibo.length - 2]
    }
    return fibo[x-1]
}

// Do not edit below this line
module.exports = fibonacci;

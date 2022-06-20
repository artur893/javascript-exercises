const add = function (a, b) {
  let x = a + b
  return x
};

const subtract = function (a, b) {
  let x = a - b
  return x

};

const sum = function (args) {
  return args.reduce((total, current) => total + current, 0);
};

function multiply(args) {
  let argsLength
  argsLength = args.length
  let result
  result = 1
  for (i = 0; i < argsLength; i++) {
    result = result * args[i]
  }
  return result
}

function power(a, b) {
  return a ** b
}

function factorial(x) {
  let result
  result = 1
  for (i = 1; i <= x; i++) {
    result = result * i
  }
  return result
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

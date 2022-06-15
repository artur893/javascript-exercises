function ftoc(far) {
  celc = (far - 32) * 5 / 9
  fixedCelc = celc.toFixed(1)
  numberCelc = Number(fixedCelc)
  return numberCelc
}

function ctof(celc) {
  far = celc * 9 / 5 + 32
  fixedFar = far.toFixed(1)
  numberFar = Number(fixedFar)
  return numberFar
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

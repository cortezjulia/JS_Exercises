let base
let exponent

const prompt = require('prompt-sync')
const prompt_final = prompt()

let enter = prompt_final("Digite o valor de base: ")
base = parseFloat(enter)

enter = prompt_final("Digite o valor de expoente: ")
exponent = parseFloat(enter)

const exponentiation = (base, exponent) => base **exponent

console.log(exponentiation(base, exponent))

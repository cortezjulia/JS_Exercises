//operacoes matematicas basicas

let value1
let value2
let multi
let sum

const prompt = require('prompt-sync')
const prompt_final = prompt()
let enter = prompt_final("Digite o primeiro valor: ");
value1 = parseFloat(enter)
enter = prompt_final("Digite o segundo valor: ");
value2 = parseFloat(enter)



multi=(value1 * value2).toFixed(2)
sum = (value1 + value2).toFixed(2)

if (value1 < value2) sub = (value1 - value2).toFixed(2)
else {
     sub = (value1 - value2).toFixed(2)
}

if (value1 < value2) div = (value1 / value2).toFixed(2)
else {
     div = (value1 / value2).toFixed(2)
}
console.log(`A soma resulta em ${sum}`)
console.log(`A subtração resulta em ${sub}`)
console.log(`A multiplicação resulta em ${multi}`)
console.log(`A divisão resulta em ${div}`)



//resto de divisao divisao inteira

let int_dividend=20
let int_divisor=6



function operation(divisor,dividend) {
    return [(dividend/divisor),(dividend%divisor)]
}

const [division,rest]=operation(int_divisor,int_dividend)

console.log(`A divisão inteira é igual a ${division} e o resto da divisão é ${rest}`)

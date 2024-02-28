//o usuario insere os termos de uma equacao quadratica
//é calculado as raizes

let a
let b
let c
let delta
let x1
let x2
let sinal
let sinal_c 
let sinal_b

const roots = (a, b, c) => {

    delta = (b ** 2) - (4 * a * c)


    x1 = (-b + Math.sqrt(delta)) / (2 * a)
    x2 = (-b - Math.sqrt(delta)) / (2 * a)

    return [x1, x2]
}
const prompt = require('prompt-sync')
const prompt_final = prompt()

let enter = prompt_final("Digite o elemento A da seguinte equação Ax2 + Bx + C: ");
a = parseFloat(enter)

enter = prompt_final("Digite o elemento B da seguinte equação Ax2 + Bx + C: ");
b = parseFloat(enter)

enter = prompt_final("Digite o elemento C da seguinte equação Ax2 + Bx + C: ");
c = parseFloat(enter)



if (delta > 0) {
    [x1, x2] = roots(a, b, c)

    const check_polarity = (value) => value > 0 ? sinal = '+' : sinal = '-'
    sinal_c = check_polarity(c)
    sinal_b = check_polarity(b)

    console.log(`A equação ${a}x2 ${sinal_b} ${Math.abs(b)}x ${sinal_c} ${Math.abs(c)} possui as seguintes raízes ${x1} e ${x2}}`)
}
else {
    console.log("Delta negativo")
}

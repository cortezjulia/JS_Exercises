//aplicacao que retorna o tipo de triangulo baseado nos medidas dos lados inseridos pelo usuario

let side1
let side2
let side3

const prompt = require('prompt-sync')
const prompt_final = prompt()
let enter = prompt_final("Digite o primeiro valor: ");
side1 = parseFloat(enter)


enter = prompt_final("Digite o segundo valor: ");
side2 = parseFloat(enter)

enter = prompt_final("Digite o segundo valor: ");
side3 = parseFloat(enter)

if (side1==side2 && side1==side3 && side2==side3){
    console.log(`O triangulo é equilatero de lados ${side1}`)
}
else if (side1==side2|| side1==side3 || side2==side3){
    console.log(`O triangulo é isósceles de lados ${side1}, ${side2} e ${side3}`)

}
else if (side1!=side2!=side3)
{
    console.log(`O triangulo é escaleno de lados ${side1}, ${side2} e ${side3}`)
}
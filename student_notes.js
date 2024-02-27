let array_notes = []
let array_weights=[]
let note
let weight

const prompt = require('prompt-sync')
const prompt_final = prompt()

let enter = prompt_final("Digite quantas notas deseja inserir: ")
qnt_notes = parseInt(enter)

//preenche notas e pesos
for(let i=0;i<qnt_notes;i++){
    enter = prompt_final("Insira uma nota: ")
    note=parseInt(enter)
    array_notes.push(note)
    enter = prompt_final("Insira um peso: ")
    weight=parseInt(enter)
    array_weights.push(weight)

}

const multiplication=function(element,index){
return element*array_weights[index]
}
const sum=function(result_sum,element){
    return result_sum+element
}

//calcula a multiplicacao de pesos por notas
const save_multiplication=array_notes.map(multiplication)

//soma os resultados anteriores
const save_sum=save_multiplication.reduce(sum)

//soma de pesos
const sum_weights=array_weights.reduce(sum)

//divide as somas anteriores
let average=save_sum/sum_weights
average=Math.round(average)
let average_init=average

//descobre o divisor por 5 mais proximo
while(average%5!=0)
{
    average=average+1
}

//arredonda ou nao
const rounding=(average_init,average)=>((average-average_init)<3)?average:average_init

//separa os reprovados a aprovados já considerando o arredondamento
if(rounding(average_init,average)>38)console.log(`O aluno foi aprovado com a média de ${rounding(average_init,average)}.`)

else console.log(`O aluno foi reprovado com a média de ${rounding(average_init,average)}.`)


//'divisibilidade' por 3

let int_user

const prompt = require('prompt-sync')
const prompt_final = prompt()

let enter = prompt_final("Verifique seu o número é divisível por 3: ");
int_user=parseInt(enter)

const calculator_divisible= (int_user)=>int_user%3==0?true:false

if(calculator_divisible(int_user))console.log(`O número ${int_user} é divisivel por 3.`)
else{
    console.log(`O número ${int_user} não é divisivel por 3.`)
}
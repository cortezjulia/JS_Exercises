//money converter

let int_money=0.6789

const convert_money=(money) => int_money.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})

console.log(`O valor ${int_money} convertido para unidade monetária é igual a ${convert_money(int_money)}`)
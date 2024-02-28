// calculo de montante de uma aplicacao a juros simples

let time=12
let interest=1.2
let start_money=23000


const final_investment=(time,interest,start_money)=>start_money+(start_money*time*(interest/100))
console.log(`O montante resultante é ${final_investment(time,interest,start_money)} de um investimento` +
` inicial de ${start_money} rendendo a uma taxa de ${interest} ao mês, durante ${time} mes(es).`)
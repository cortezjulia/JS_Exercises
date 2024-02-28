//aplicacao para leitura de menu de restaurante salvo em json 
//o usuario insere o codigo dos itens que deseja comprar
//retorna-se o valor de compra por produto e o valor total

const fs = require('fs')
const prompt = require('prompt-sync')
const prompt_final = prompt()
let array_cod = []
let array_qnt = []
let flag_find_cod
let total
let sum_totals=0
let qnt_units
let cod
// Caminho para o arquivo JSON local
const path = './food_menu.json'

function format_money(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

}
function print_values(qnt_keys, cod, jsonData, qnt_units) {
  flag_find_cod = 0
  for (let i = 0; i < qnt_keys; i++) {

    if (jsonData[i].codigo == cod) {
      console.log(`Código: ${jsonData[i].codigo}`)
      console.log(`Descrição: ${jsonData[i].descricao}`)
      console.log(`Preço: ${format_money(jsonData[i].preco)}`)
      console.log(`Quantidade: ${qnt_units}`)
      total = (jsonData[i].preco) * qnt_units
      console.log(`Total: ${format_money(total)}`)
      flag_find_cod = 1
      return total
    }
  }
  if (flag_find_cod == 0) {
    console.log(`Código ${cod} não localizado.`)
    return total = 0
  }
}

while (true) {
  let enter = prompt_final("Digite o código do produto que deseja comprar: ")
  cod = parseInt(enter)
  array_cod.push(cod)
  enter = prompt_final("Quantidade: ")
  qnt_units = parseInt(enter)
  array_qnt.push(qnt_units)

  enter = prompt_final("Finalizar o seu pedido? [s] ou [n]: ")
  if (enter == 's' || enter == 'S') {
    break
  }

}

// Lendo o conteúdo do arquivo JSON
fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo JSON:', err)
    return
  }

  // Convertendo o conteúdo para objeto JavaScript
  jsonData = JSON.parse(data)
  const keys = Object.keys(jsonData)
  const qnt_keys = (keys.length)
  total = 0
  console.log('\n')
  console.log(`Itens do seu pedido:`)
  for (let i = 0; i < array_cod.length; i++) {
    sum_totals = print_values(qnt_keys, array_cod[i], jsonData, array_qnt[i]) + sum_totals
    console.log('\n')
  }
  console.log(`Total da sua compra: ${format_money(sum_totals)}`)
})



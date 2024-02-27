const fs = require('fs')
const prompt = require('prompt-sync')
const prompt_final = prompt()
let array_cod = []
let array_qnt = []

function format_money(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

}
function print_values(qnt_keys, cod, jsonData, qnt_units) {
  let flag_find_cod=0
  for (let i = 0; i < qnt_keys; i++) {

    if (jsonData[i].codigo == cod) {
      console.log(`Código: ${jsonData[i].codigo}`)
      console.log(`Descrição: ${jsonData[i].descricao}`)
      console.log(`Preço: ${format_money(jsonData[i].preco)}`)
      console.log(`Quantidade: ${qnt_units}`)
      let total = (jsonData[i].preco) * qnt_units
      console.log(`Total: ${format_money(total)}`)
      flag_find_cod=1
      return total
    }
  }
  if(flag_find_cod==0){
    console.log(`Código ${cod} não localizado.`)
    return total=0
}
}




// Caminho para o arquivo JSON local
const path = './food_menu.json'

while (true) {
  let enter = prompt_final("Digite o código do produto que deseja comprar: ")
  let cod = parseInt(enter)
  array_cod.push(cod)
  enter = prompt_final("Quantidade: ")
  let qnt_units = parseInt(enter)
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
  const qnt_keys = (keys.length - 1)
  let total=0
  console.log('\n')
  console.log(`Itens do seu pedido:`)
  for (let i = 0; i < array_cod.length; i++) {
    total=print_values(qnt_keys, array_cod[i], jsonData, array_qnt[i])+total
    console.log('\n')
  }
  console.log(`Total da sua compra: ${format_money(total)}`)
})



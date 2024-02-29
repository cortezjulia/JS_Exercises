//ao usar esse objeto sequence, cada vez que você acessa sequence.id, 
//você obtém o valor atual de _id e _id é incrementado para o próximo valor.
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    //!produto.id: Isso verifica se a propriedade id do objeto produto é falsy, tornando a expressão verdadeira.
    //produto.id = sequence.id: se a condição anterior for valida, a propriedade id de produto recebe o id de sequence


    produtos[produto.id] = produto // A chave do produto é o ID e o valor o próprio produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    // Retorna todos os valores dentro do objeto
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}
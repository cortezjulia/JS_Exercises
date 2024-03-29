const porta = 3003
// Forma para selecionar qual processo vai atender a requisição específica
// Posso ter um processo executando por porta

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


app.use(bodyParser.urlencoded({ extended: true }))
//PADRAO URLENCODED
// bodyParser refere-se a um middleware utilizado para analisar o corpo das solicitações HTTP, especialmente útil para interpretar dados de formulários HTML.
// configurado como true indica que o parser deve aceitar objetos e arrays complexos no corpo da solicitação, além dos tipos de dados padrão.

//imprime todos os produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

// Para acessar produto através do id na URL
app.get('/produtos/:id', (req, res, next) => {
    // req.params -> onde encontram os parametros colocados na URL
    res.send(bancoDeDados.getProduto(req.params.id))
})

//para salvar produtos 
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//para substituir produtos com o id especificado
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})


/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})


app.get('/produtos', (req, res, next) => {
    res.send({nome:'Notebook',preco:123.45})//converte para JSON
})
*/
app.listen(porta, () =>{console.log(`Servidor executando na porta ${porta}`)})
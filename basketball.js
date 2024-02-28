//recebe as pontuacoes do usuario e retorna quantas vezes o recorde foi batido 
//retorna tambem o dia de pior pontuacao

let points = []
let record = points[0]
let worst_score = 100
let index_point
let enter
let calculator_record
let calculator_worst_score

while (true) {
    record = points[0]
    worst_score = 100
    const prompt = require('prompt-sync')
    const prompt_final = prompt()
    enter = prompt_final("Insira a pontuação do dia: ");
    points.push(parseInt(enter))
    console.log(points)

    calculator_record = points.filter((one_point) => one_point > record ? record = one_point : false)
    calculator_worst_score = points.reduce((worst_score, one_point) => one_point < worst_score ? worst_score = one_point : worst_score = worst_score)

//verifica o dia/index da pior pontuacao
    for (let i = 0; i < points.length; i++) {
        if (points[i] == calculator_worst_score) index_point = i + 1
    }


    console.log(`O recorde foi superado em ${calculator_record.length} dia(s) e a pior pontuação foi ${calculator_worst_score} ponto(s) no ${index_point}º dia.`)

    enter = prompt_final("Se quiser sair digite [0]: ")
    if (enter == '0') break
}
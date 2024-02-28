//o seguinte programa imprime a velocidade atual baseada nos limites inseridos pelo usuario
//apos determinado intervalo de tempo, a média é apresentada


let min_limit
let max_limit
let array_velocity = []
let final_sum
let current_velocity
let enter

//obtem somatorio das velocidades
const sum =(result, element)=>result + element


//valor atual de velocidade
function velocity() {
    current_velocity = Math.floor(Math.random() * (max_limit - min_limit) + min_limit)
    array_velocity.push(current_velocity)
    console.log(`A velocidade atual é ${current_velocity}.`)

}
//media das velocidades
function average(){
    clearInterval(velocity_interval)
    final_sum=array_velocity.reduce(sum)
    console.log(`A média das velocidades é ${(final_sum/array_velocity.length).toFixed(2)} km/h.`)
}


const prompt = require('prompt-sync')
const prompt_final = prompt()
enter = prompt_final("Insira o limite inferior de velocidade: ");
min_limit = parseFloat(enter)

enter = prompt_final("Insira o limite superior de velocidade: ");
max_limit = parseFloat(enter)


const velocity_interval=setInterval(velocity, 1000)
setTimeout(average, 10000);


    
 
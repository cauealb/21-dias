// Laços de Repetição
// ++= contador = contador + 1
//--= contador = contador - 1
// += = contador  = contador + 

let tabuada
tabuada = Number(prompt('Digite o número da sua tabuada: '))

for(let contador = 0; contador <= 10; contador++){
    console.log(tabuada + ' x ' + contador + ' = ' + (tabuada * contador))
}
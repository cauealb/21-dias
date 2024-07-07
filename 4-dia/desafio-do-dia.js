// Desafio número 1

// let fome = prompt('Está com fome: ');
// let dinheiro = prompt('Tem dinheiro: ')
// let restaurante = prompt('O restaurante está aberto: ')

// if(fome === 'Não' || dinheiro === 'Não'){
//     console.log('Hoje a janta será em casa')
// }else if(fome === 'Sim' && dinheiro === 'Sim' && restaurante === 'Não'){
//     console.log('Peça um delivery!')
// }else if(fome === 'Sim' && dinheiro === 'Sim' && restaurante === 'Sim'){
//     console.log('Hoje o jantar será no seu restaurante preferido!')
// }

//Desafio número 2

let nome = prompt('Digite seu nome:')
let idade = parseInt(prompt('Digite sua idade: '))
let carta = prompt('Tem carta de motorista:')
let carro = prompt('Tem carro:')

if(idade < 18 || carta === 'Não'){
    console.log(nome, ', Você não pode dirigir!!!')
}else if(idade >= 18 && carta === 'Sim' && carro === 'Não'){
    console.log(nome, ', você pode dirigir mas não tem um carro')
}else if(idade >= 18 && carta === 'Sim' && carro === 'Sim'){
    console.log(nome, ', você será o motorista!')
}

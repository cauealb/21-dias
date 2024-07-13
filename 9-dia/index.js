//Desafio 1
let nome, idade, peso, altura, profissa, opcao
let cont = 0


do {
    //Parte 1 - Inicio
    alert('Parte 1 - Inicio')
    nome = prompt('Digite seu nome:')
    idade = parseInt(prompt('Digite sua idade:'))
    altura = Number(prompt('Digite sua altura'))
    peso = Number(prompt('Digite sua peso:'))
    profissa = prompt('Digite sua profissão:')

    alert(`Olá ${nome}, você tem ${idade} anos, é ${profissa}, tem ${altura}M de altura e pesa ${peso}kg.`)

    if(idade >= 18){
        alert(`Está liberado para tomar umas geladas.`)
    }else{
        alert(`Sem gelada para você menino!`)
    }

    let contaM = idade * 12
    let contaD = idade * 365
    let contaS = contaD / 7
    alert(`Em meses você tem: ${Math.round(contaM)} meses.\nEm semanas você tem: ${Math.round(contaS)} semana.\nEm dias você tem: ${Math.round(contaD)} dias.`)




    //Parte 2 - IMC
    alert('Parte 2 - IMC')
    let conta = peso / (altura ** 2)
    if(conta < 18.5){
        alert('Você está na Magreza.')
    }else if(conta < 24.9){
        alert('Você está no Normal.')
    }else if(conta < 30){
        alert('Você está no Sobrepeso.')
    }else{
        alert('Você está na Obesidade.')
    }

    conta = 2024 - idade
    alert(`Você nasceu em ${conta}`)






    //Parte 3 - Anos
    alert('Parte 3 - Anos')
    for(let i = conta; i <= 2024; i++){
        alert(`${i} - ${cont} anos de idade.`)
        cont++
    }


    //Fim
    opcao = prompt('Desaja sair:\n1 - Não\n2 - Sim')
} while(opcao === '1');
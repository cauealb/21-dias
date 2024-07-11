//DESAFIO 1
let contM = 0
let contF = 0
let contTotal = 0
let contF7 = 0
let sexo
let nota
let maior = 0

while(true){
    sexo = prompt('Digite seu sexo (M/F ou digite 0 para parar) :')
    if(sexo === '0'){
        break;
    }else{
        nota = parseInt(prompt('Qual sua nota:'))
        contTotal += nota

    if(sexo == 'M'){
        contM++
        if(nota > maior){
            maior = nota
        }

    }else if (sexo == 'F'){
        contF++
        if(nota > 7){
            contF7++
        }

    }else if(sexo == '0'){
        break;
    }
    }
}

alert(`Média dos alunos: ${contTotal / (contM + contF)} de média.`)
alert(`Quantos homens enviaram a nota: ${contM} enviadas.`)
alert(`Quantas mulheres tiveram nota acima de 7: ${contF7} nota(s).`)
alert(`Qual a maior nota entre os homens: ${maior}.`)

// DESAFIO 2

let nome
let cpf
let saldo = 1000
let valorPedido
let opcao
let maiorD = 0
let total = 0
let cont = 0

do {
    alert(`Saldo na sua conta: R$${saldo}`)

    nome = prompt('Digite seu nome: ')
    cpf = prompt('Digite seu CPF: ')
    valorPedido = parseInt(prompt('Digite seu valor: '))

    total += valorPedido
    if(valorPedido > maiorD){
        maiorD = valorPedido
    }

    opcao = prompt('Deseja saque ou depósito (S/D): ')
    cont++

    if(opcao === 'S'){
        if(valorPedido > saldo){
            alert('Não é permitido sacar um valor maior que o saldo!')

        }else if(valorPedido < 0){
            alert('Você não pode sacar um valor negativo!')

        }else{
            saldo -= valorPedido
        }
        
    }else if(opcao === 'D'){
        if(valorPedido < 0){
            alert('Você não pode sacar um valor negativo!')
        }else{
            saldo += valorPedido
        }
    }
           
    opcao = Number(prompt('Deseja:\n1 - Continua\n2 - Parar: '))
} while (opcao === 1);


alert(`Saldo na sua conta: R$${saldo}`)
alert(`Maior valor inserido: ${maiorD}`)
alert(`Média dos valores inseridos: ${total / cont}`)

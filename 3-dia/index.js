//Entrada de Dados


let nome = prompt('Insira seu nome: ');
let idade = parseInt(prompt('Insira sua idade: '));
const altura = Number(prompt('Insira sua Altura: '))
let peso = Number(prompt('Insira seu peso: '))
//Contas
const imc = peso / (altura * altura)
const nasceu = 2023 - idade


console.log('Olá, ' + nome + ' você tem ' + idade + ' anos, nasceu em ' + nasceu + ' , tem ' + altura + ' de altura, pesa ' + peso + 'kg, seu IMC é ' + imc + ' Kg/m2')



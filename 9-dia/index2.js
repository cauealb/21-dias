//Desafio 2
let nome, idade, salario, opcao, ano;
let perc = 0


do {
    nome = prompt('Digite seu nome: ')
    idade = parseInt(prompt('Digite sua idade: '))
    salario = Number(prompt('Digite seu salário:'))

    opcao = prompt(`Olá ${nome}, você tem ${idade} anos e tem um salário de R$${salario}.\n\nSuas informações estão corretas?`)

} while (opcao === 'Não');

ano = parseInt(prompt('Digite o ano que está:'))
perc = 1.5 / 100
let conta = 0
for(let i = ano; i <= ano + 10; i++){
    conta = salario + (salario * perc)
    alert(`${i} - Salário: R$${conta}`)
    perc *= 2
}
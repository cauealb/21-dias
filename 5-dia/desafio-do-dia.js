// Desafio 1

const num1 = Number(prompt('Digite o número 1: '))
const num2 = Number(prompt('Digite o número 2: '))

const perg = prompt('Qual operação vai querer (+, -, *, /):')

switch(perg){
    case '+':
        let contamais = num1 + num2
        console.log('Conta de soma: '+ num1 + ' + ' + num2 + ' = ' + contamais)
        break;
    case '-':
        let contamenos = num1 - num2
        console.log('Conta de subtração: ' + num1 + ' - ' + num2 + ' = ' + contamenos)
        break;
    case '*':
        let contavezes = num1 * num2
        console.log('Conta de multiplicação: ' + num1 + ' x ' + num2 + ' = ' + contavezes)
        break;
    case '/':
        let contadividir = num1 / num2
        console.log('Conta de dividir: ' + num1 + ' / ' + num2 + ' = ' + contadividir)
        break;
    default:
        console.log('Operação Inválida!')
}

//Desafio 2

const opcao = prompt('Qual opção vai escolher (Gasolina, Álcool ou Calibrar os pneus): ')

switch(opcao){
    case 'Gasolina':
        let valorGasolina = parseInt(prompt('Quanto vai querer: '))
        let contaGasolina = valorGasolina / 5
        console.log('Litros: ' + contaGasolina)
        break;
    case 'Álcool':
        let valorAlcool = parseInt(prompt('Quanto vai querer: '))
        let contaAlcool = valorAlcool / 3
        console.log('Litros: ' + contaAlcool)
        break;
    default:
        console.log('Pneus calibrados com sucesso!')
}
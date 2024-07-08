// Condição (Swith Case)

let idade = parseInt(prompt('Digite sua idade: '))

switch(idade){
    case 7:
        console.log('Você é criança')
        break;
    case 15:
        console.log('Você é adolescente')
        break;
    case 18:
        console.log('Você é jovem adulto')
        break;
    default:
        console.log('Você é Adulto!')
}
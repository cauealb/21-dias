//Condicionais 
let nome = prompt('Digite seu nome:');
let idade = parseInt(prompt('Insira sua idade: '));

// ==: Se ele for igual
// !=: Se ele for diferente
// >: Maior que 
// <: Menor que 
// >=: Maior ou igual
// <=: Menor ou igual
// ===: Se é igual ou se for o mesmo tipo
// !==: Se for diferente ou diferente que o mesmo tipo

//Operadores E e OU
// &&: Se todas as condições forem verdadeiras
// ||: Se UMA for verdadeira

if(nome === 'Cauê Alves' && idade === 18){
    console.log('Você é o Cauê Alves e tem 18 anos.')
}

if (nome === 'Cauê Alves' || idade === 18){
    console.log('Você OU é o Cauê Alves OU tem 18 anos.')
}else{
    console.log('Você não é nada!')
}
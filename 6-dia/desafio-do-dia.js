// Desafio 1 = Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.

// let num;
// num = parseInt(prompt('Digite o valor: '));

// if(num < 0) {
//     alert('Digite um número positivo.')
// }else{
//     for(let i = 0; i <= num; i++){
//         alert(i)
//     }
    
// }

//================================================================================================================================

// Desafio 2 = Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
//   Ex.: 0 5 10 15 20 25 … 45 50 Fim!

// for(let i = 0; i <= 50; i+=5){
//     alert(i)
// }

// alert('Fim!')

//================================================================================================================================

// Desafio 3 = Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa.
//   Ex.: 50 45 40 35 30 25 … 5 0 Fim!

// for(let i = 50; i >= 0; i-=5){
//     alert(i)
// }

// alert('Fim!')

// Desafio 4 = Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.
// Ex: Números de entrada:3
//        Saída:  Número 3:      Número 4:         Número 5:      
//                3 x 1 = 3      4 x 1 = 4         5 x 1 = 5
//                3 x 2 = 6      4 x 2 = 8         5 x 2 = 10
//                3 x 3 = 9      4 x 3 = 12        5 x 3 = 15          
//                3 x 4 = 12     4 x 4 = 16        5 x 4 = 20         
//                   ...            ...               ... 

let num1 = parseInt(prompt("Digte um valor para Tabuada: "))

for(let i = num1; i <= num1 + 2; i++){
    alert('Tabuada do '+ i)
    for(let e = 0; e <= 10; e++){
        alert(i + ' x ' + e + ' = ' + (i*e))
    }
}
// // Desafio 1
let array = []
let nome, opcao
let primeiraVez = true
let cont = 0

// while(primeiraVez){
//     opcao = prompt('Olá, bem vindo ao adicionar de array, deseja inserir um número?\n1 - Sim\n2 - Não')
//     if(opcao === '2'){
//         alert(array)
//         primeiraVez = false
//         break;
//     }else{
//         primeiraVez = false
//         while(!primeiraVez){
//             nome = parseInt(prompt('Digite o item que quer inserir: '))
//             array.push(nome)
//             cont++
//             if(array.length > 10){
//                 alert('Seu array possui 10 números máximos!')
//                 alert(array)
//                 break;
//             }else{
//                 nome = prompt('Deseja continuar: \n1 - Sim\n2 - Não')
//             if(nome === '2'){
//                 alert(array)
//                 break;
//                 }
//             }
//         }
//     }
// }

// while(!primeiraVez){
//     cont = -1
//     opcao = parseInt(prompt('Digite o número buscado: '))
//     for(let i of array){
//         cont++
//         if(i === opcao){
//             alert(`O número ${i} tem o indice ${cont}`)
//             primeiraVez = true
//             continue;
//         }
//     }
//     if(!primeiraVez){
//         alert('Esse número não existe!')
//         break;
//     }
    
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Desafio 2

// while(true){
//     nome = parseInt(prompt('Digite o número para inserir: '))
//     array.push(nome)
//     nome = prompt('Deseja terminar:\n1 - Sim\n2 - Não')
//     if(nome === '1'){
//         let reverte = array.reverse()
//         alert(array)
//     }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Desafio 3

while(true){
        nome = parseInt(prompt('Quantos números deseja inserir no array: '))
        for(let i = 0; i < nome; i++){
            nome = parseInt(prompt('Digite o número para inserir: '))
            array.push(nome)
        }
    
        alert(`Array normal: ${array}`)
        let jjj = array.reverse()
        alert(`Array invertido: ${jjj}`)
        break;
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

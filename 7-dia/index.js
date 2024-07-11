// DESAFIO 1
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
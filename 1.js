let nomeArray = new Array()
let senhasArray = new Array()
let opcao, nome, senha
let index = -1
let findName = false

opcao = prompt("Bem-Vindo Usuário, deseje fazer o que?\n1 - Cadastrar Usuário\n2 - Fazer Login\n3 - Excluir login")

// CADASTRAR

do {
    do {
        nome = prompt('Digite o nome do usuário que queira cadastrar:')
        nomeArray.push(nome)

        opcao = prompt('Deseje salvar o usuário? (S/N)')

        if(opcao === 'N'){
            nomeArray.pop()
        }

    } while (opcao === 'N');


    do {
        senha = prompt('Digite a senha do usuário cadastrado:')
        senhasArray.push(senha)

        opcao = prompt('Deseje salvar a senha? (S/N)')
        if(opcao === 'N'){
            senhasArray.pop()
        }
    } while (opcao === 'N');

    opcao = prompt('Deseje sair\n1 - Sim\n2 - Não')
    
} while (opcao === 'N'); 


do {
    while(!findName){
        nome = prompt('Digite seu usuário:')
        findName = nomeArray.find(n => {if(n === nome) return true} )
            
        if(!findName){
            alert('Ops! Usuário Incorreto, Tente novamente.')
        }else{
            index = nomeArray.indexOf(nome)
        }
    }


    while(findName){
        senha = prompt('Digite a senha do seu Usuário:')

        if(senhasArray[index] === senha){
            alert('Parabéns')
        }
    }

    opcao = prompt('Deseje sair\n1 - Sim\n2 - Não')

} while (opcao === 'N');



do {
    do {
        nome = prompt('Digite o usuário que queira excluir \n(ele excluirá automáticamente o usario e senha)')
        findName = nomeArray.find(n => {if(n === nome) index = nomeArray.indexOf(nome)} )

        if(index <0){
            alert('Usuário incorreto! Digite Novamente.')
        }else{
            nomeArray.splice(index, 1)
            senhasArray.splice(index, 1)
        }

    } while (findName < 0);


    if(nomeArray.length <= 0){
        alert('Nenhum usuário em seu Banco de Dados!')
        opcao = 'Não'
    }else{
        opcao = prompt('Deseje Continuar?\n1 - Sim\n2 - ')
    }
} while (opcao === 'Sim');
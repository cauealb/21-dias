let nomeArray = new Array()
let senhasArray = new Array()
let opcao, nome, senha, repartir
let index = -1
let findName = false

while(opcao != 7){
    opcao = prompt("Bem-Vindo Usuário, deseje fazer o que?\n1 - Cadastrar Usuário\n2 - Fazer Login\n3 - Excluir login\n4 - Adicionar na Primeira Posição\n5 - Eliminar na primeira Posição\n6 - Repartir as Senhas\n7 - Sair")

switch (opcao){
    case '1':
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
        
            opcao = prompt('Deseje sair\n1 - S\n2 - N')
            
        } while (opcao === 'N'); 
        break;
    




    case '2':
        if(nomeArray.length == 0){
            alert('Nenhum usuário em seu Banco de Dados!')
        }else{
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
        }

        break;



    case '3':
        if(nomeArray.length == 0){
            alert('Nenhum usuário em seu Banco de Dados!')
        }else{
            do {
                do {
                    nome = prompt('Digite o usuário que queira excluir \n(ele excluirá automáticamente o usario e senha)')
                    findName = nomeArray.find(n => {if(n === nome) index = nomeArray.indexOf(nome)} )
        
                    if(index < 0){
                        alert('Usuário incorreto! Digite Novamente.')
                    }else{
                        nomeArray.splice(index, 1)
                        senhasArray.splice(index, 1)
                    }   
        
                } while (index < 0);
        
        
                if(nomeArray.length <= 0){
                    alert('Nenhum usuário em seu Banco de Dados!')
                    opcao = 'Não'
                }else{
                    opcao = prompt('Deseje Continuar?\n1 - Sim\n2 - Não')
                }
            } while (opcao === 'S');
            
        }
        break;


    case '4':
       
        do {
            nome = prompt('Digite o usuário que queira cadastrar:')
            senha = prompt('Digite a senha desse usuário:')

            nomeArray.unshift(nome)
            senhasArray.unshift(senha)

            opcao = prompt('Deseja visulizar seus dados? (S/N)')
            if(opcao === 'S'){
                alert(`Usuários: ${nomeArray}`)
                alert(`Senhas: ${senhasArray}`)
            }

            opcao = prompt('Deseja adicionar mais :\n1 - S\n2 - N')
        } while (opcao === 'S');

        break;



    case '5':
        do {
            while (findName == false || opcao == false) {
                nome = prompt('Digite o usuário que queira eliminar:')
                senha = prompt('Digite a senha desse usuário:')

                findName = nomeArray.find(n => {if(n === nome) return true})
                opcao = senhasArray.find(m => {if(m === senha) return true})
                    
                if((findName == true) && (opcao = true)){
                    opcao = prompt('Deseja visualizar seus dados? (S/N)')
                    if(opcao === 'S'){
                        alert(`Usuários: ${nomeArray}`)
                        alert(`Senhas: ${senhasArray}`)
                    }
                }else{
                    alert('Usuário ou senha errados!')
                    }
                }
                
            opcao = prompt('Deseja adicionar mais:\n1 - S\n2 - N')

        } while (opcao === 'S');

        break;



    case '6':
        do {
            opcao = prompt('Apartir de qual usuário deseja repartir:')

            findName = nomeArray(n => {if(n === opcao) index = nomeArray.indexOf(opcao)})

            if(findName >= 0){
                repartir = nomeArray.slice(index)
                opcao = prompt('Deseja exibir exebir esses dados?\n1 - S\n2 - N')
                if(opcao === 'S'){
                    alert(`Array de usuários normais: ${nomeArray}`)
                    alert(`Repartição nova: ${repartir}`)
                }
            }

            opcao = prompt('Desja continuar\n1 - S\n2 - N')
        } while (opcao === 'S');

        break;


    case '7':
        alert('Obrigado pela preferência')

        break;

    default:
        alert('Erro ao entrar!')

}
}








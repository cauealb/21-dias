let vt = []
let index = 0

while(true){
    const resp = parseInt(prompt('Olá usuário! Digite o número da opção desejada: \n1. Cadastrar item na lista. \n2. Mostrar itens cadastrados. \n3. Sair do programa.'))

    if(resp === 1){

        while(true){

            if(vt.length == 0){
                let adicionair = prompt('Sua lista não existe dados, insira-os(digite 0 para parar): ')
                    if(adicionair === '0'){
                        break
                    }else{
                        vt[0] = adicionair
                        alert(vt)
                    }
            }else{
                for(let i = 0; i < vt.length; i++){
                    index++
                }
                adicionair = prompt('Digite o item que quer cadastrar(digite 0 para parar): ')

                if(adicionair === '0'){
                    index = 0
                    break
                }else{
                    vt[index] = adicionair
                    alert(vt)
                    index = 0
                }
            }

        }
    }else if(resp === 2){
        if(vt.length == 0){
            alert('Não existe itens cadastrados!')
        }else{
            alert(vt)
        }

    }else if(resp === 3){
        alert('Fim do programa!')
        break;
    }

}
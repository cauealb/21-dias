let array = new array(100000000);
let item = 55398


function pesquisaBinaria (){
    let baixo = 0
    let alto = length(array) - 1

    while(baixo < alto){
        let meio = Math.floor((baixo + alto)  / 2)
        if(meio === item){
            return meio
        } else if(meio < item){
            baixo = meio
        }else{
            alto = meio
        }
    }
    return meio
}

pesquisaBinaria()

    
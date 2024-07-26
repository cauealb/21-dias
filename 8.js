let nomeArray = new Array('Melancia', 'Abóbora', 'Beterraba', 'Banana')

let nome = 'PerÂ'
const findName = nomeArray.find(n => {if(n === nome) return true})

if(findName){
    alert('sim')
}else{
    alert('Naop')
}
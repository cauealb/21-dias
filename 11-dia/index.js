let aNome = []
let aNota = []
let nome, nota, opcao
let somaT, cont, media = 0

alert('Bem-Vindo ao seu adicionador de Notas')
do {
    // Adiciona e insere um nome no Array de Nomes
    nome = prompt('Digite seu nome:')
    aNome.push(nome);

    // Adiciona e insere uma nota no Array de notas
    nota = Number(prompt('Digite sua nota:'))
    aNota.push(nota);
    // Atriubui um contador e vai somando todos as notas para média
    somaT += nota
    cont++

    opcao = prompt('Deseje para:\n1 - Não\n2 - Sim')

} while (opcao === '1');

for(let i; i < aNome.length; i++){
    alert(`O aluno ${aNome[i]}, tem a nota: ${aNota[i]}`)
}
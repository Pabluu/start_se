// FOR 
const operacoes = ['soma', 'subtração', 'multiplicação', 'divisão'];

let i = 0;
// enquanto for verdade, faça algo 
while(i < operacoes.length){
    console.log(operacoes[i]);
    i++;
}

let j=0;

// faça algo primeiro, depois verifica 
do{
    console.log(`${j} - ${operacoes[j]}`);
    j++;
}while(j < operacoes.length);

function montaTextoDaLista(){
    let textoDaLista = '';
    for(let operacao of operacoes){
        textoDaLista += `<li>${operacao}</li>`
    }

    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();


let jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Zagueiro'
    },
    {
        nome: 'Milton',
        poscao: 'volante'
    }
];

for(let jogador of jogadores){
    console.log(jogador.nome);
}
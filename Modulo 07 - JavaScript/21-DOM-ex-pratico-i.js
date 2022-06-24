const listaTarefas = document.querySelector("#listaTarefas");
const caixaTexto = document.querySelector("#caixaDeTexto");
const botaoAdicionar = document.querySelector('#botaoAdicionar');

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';

    listaTarefas.appendChild(adicionarTarefa(textoDaTarefa));
    caixaTexto.focus();
});

function adicionarTarefa(textoDaTarefa){
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id', 'tarefa');
    elementoSPAN.textContent = textoDaTarefa;

    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(addBotaoRemover());
    console.log(elementoSPAN);

    return elementoLI;

}

function addBotaoRemover(){
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✘';
    botaoRemover.className = 'remover';

    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode)
    });

    return botaoRemover;
}
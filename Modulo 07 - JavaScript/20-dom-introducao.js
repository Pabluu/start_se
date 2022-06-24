// objter um elemento
const lista = document.querySelector('#lista');
console.log(lista);

//criando um elemento
const elementoLI = document.createElement('li');
// conteudo do elemento
elementoLI.textContent = 'Um novo item na lista';

// add um elemento ao nó(pai)
lista.appendChild(elementoLI);

// add uma classe
// lista.className = 'ponteiro';
//OUTRA MANEIRA DE FAZER A MESMA COISA
lista.setAttribute('class', 'ponteiro'); 

// seleciona todos os 'li' da 'lista';
const filhosDaLista = lista.querySelectorAll('li');

for(filho of filhosDaLista){
    // remove um filho em específico
    // lista.removeChild(filho);
}

// remove todos os elementos do nó
// lista.remove();

console.log(lista);

//OBJETO - OBJECT


const livro = {
    titulo: 'Introdução ao JavaScript',
    numPag: 500
}

console.log(livro['titulo']);
console.log(livro['numPag']);

// alterando o valor do attr titulo
livro.titulo = 'JavaScript - Avançado';
console.log(livro['titulo']);

// alterando o valor do attr numPag
livro.numPag = 630;
console.log(livro['numPag']);


const pessoa = {
    primeiroNome: 'Ana',
    ultimoNome: 'Silva',
    endereco: {
        rua: 'Paraná',
        num: 50
    },

    nomeCompleto: function(){
        return `${this.primeiroNome} ${this.ultimoNome}`
    }
};
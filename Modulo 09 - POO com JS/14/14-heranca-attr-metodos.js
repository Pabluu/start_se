'use strict'


class Produto {
    tipo;
    constructor(tipo) {
        this.tipo = tipo;
    }

    getDados() {
        return `
        Tipo: ${this.tipo}`;
    }
}

class Livro extends Produto {
    titulo;
    numPag;
    constructor(tipo='Livro', titulo, numPag) {
        super(tipo);
        this.titulo = titulo;
        this.numPag = numPag;
        // console.log(this.getDados());
    }

    exibeDadosLivro() {
        console.log(`${this.getDados()}. ${this.titulo} - ${this.numPag} páginas.`);
    }

    exibeTipo(){
    console.log(this.tipo);
    }
}

const prod = new Produto('Produto Genérico');
console.log(prod);

const livro = new Livro('Livro', 'Percy Jackson', 420);
console.log(livro);
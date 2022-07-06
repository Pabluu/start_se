'use strict'


class Produto {
    #tipo;
    #valor;
    constructor(tipo, valor) {
        this.#tipo = tipo;
        this.#valor = valor;
    }


    #validaValor(valor) {
        if (typeof (valor) !== 'number') {
            console.log('Valor Inválido!');
        }
    }

    getDados() {
        return `Tipo: ${this.tipo}
        Valor: ${this.valor}`;
    }
}

class Livro extends Produto {
    #titulo;
    #numPag;
    constructor(tipo = 'Livro', titulo, numPag) {
        super(tipo);
        this.#titulo = titulo;
        this.#numPag = numPag;
    }

    getDados() {
        return `
        ${super.getDados()}
        Titulo: ${this.#titulo}
        Numero de Páginas: ${this.#numPag}`;
    }
}

const prod = new Produto('Produto Genérico', 54);
// impossivel acessar pois ele é privado
console.log(Produto.validaValor());
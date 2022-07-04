'use strict';

class Filme{
    constructor(titulo, ano){
        this.titulo = titulo;
        this.ano = ano;
    }
}

let meuFilme = new Filme('Aprendendo JS', 2022);


class Produto{
    constructor(){
        this.tipo = 'Produto x';
    }
}

const prod = new Produto();
console.log(prod);
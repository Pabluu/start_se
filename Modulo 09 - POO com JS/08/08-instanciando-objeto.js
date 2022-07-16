'use strict'

class Produto{
    codigo;
    nome;
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
    }
}

class Disciplina {
    codigo;
    nome;
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
}

const d1 = new Disciplina(1, 'Matematica');

console.log(d1);

const p1 = new Produto(455, 'Produto xyz');
console.log(p1);

const d2 = new Disciplina(123, 'Quimica');
console.log(d2.nome);
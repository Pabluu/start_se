'use strict';

class Produto{
    codigo;
    titulo;
    valor;

    constructor(codigo, titulo, valor){
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
    }
}

class Disciplina{
    codigo;
    nome;
    nota;
    constructor(codigo, nome, nota){
        this.codigo = codigo;
        this.nome = nome;
        this.nota = nota;
    }
}

const d1 = new Disciplina(213, 'Matemática');
console.log(d1);

const d2 = d1;
d2.codigo = 444;
d2.nome = 'Algebra';

console.log(d1);
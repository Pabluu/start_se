'use strict';

class Produto{
    // attr static
    static GRANDE = 10;
    static MEDIO = 5;
    static PEQUENO = 1;
    codigo;
    titulo;
    valor;

    constructor(codigo, titulo, valor, tamanho){
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
        this.tamanho = tamanho;
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

var d1 = new Disciplina(213, 'Matemática', Produto.GRANDE);
console.log(d1);
'use strict';

class Produto {
    descricao;
    largura;
    altura;
    profundidade;

    constructor(descricao, largura, altura, profundidade) {
        this.descricao = descricao;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
    }

    volumeProduto(){
        return this.largura * this.altura * this.profundidade;
    }
}
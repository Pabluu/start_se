'use strict'


class Laboratorio {
    #nme;
    #capacidade;
    constructor(nome, capacidade) {
        this.#nome = nome;
        this.#capacidade = capacidade;
    }

    // GETTERS
    getNome() {
        return this.#nome;
    }
    getCapacidade() {
        return this.#capacidade;
    }

    // SETTERS
    setNome(nome) {
        this.#nome = nome;
    }
    setCapacidade(capacidade) {
        this.#capacidade = capacidade;
    }
}

const lab = new Laboratorio('Informática', 45);
console.log(lab.nome);

lab.nome = 'Computacao';
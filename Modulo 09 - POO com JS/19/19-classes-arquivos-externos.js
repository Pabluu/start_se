'use strict'

import {CupomDesconto} from './19-cupom-desconto.js';

class Cliente {
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome) {
        this.#nome = nome;
        this.#cupom = new CupomDesconto();
    }

    getBeneficios() {
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }

    setGasto(valor) {
        this.#gastosAcumulados += valor;
    }
}


const clientenovo = new Cliente('Pablo');
clientenovo.setGasto(2000);
clientenovo.setGasto(20000);
clientenovo.getBeneficios();
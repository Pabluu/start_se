'use strict'

class CupomDesconto {
    #desc1 = 10;
    #desc2 = 20;
    constructor() { }
    getDesconto(gastos) {
        if (gastos >= 1000 && gastos <= 3000) {
            console.log(`Você tem direito a ${this.#desc1}% de desconto!`);
        } else if (gastos > 3000) {
            console.log(`Você tem direito a ${this.#desc2}% de desconto!`);
        } else {
            console.log(`Infelizmente você não tem descontos no momento!`);
        }
    }
}

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
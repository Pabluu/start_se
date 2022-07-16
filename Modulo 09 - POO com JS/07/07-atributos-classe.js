'use strict';

class Financiamento{
    valorFinanciamento;
    txJuros;
    numero;
    constructor(valorFinanciado, txJuros){
        this.valorFinanciado = valorFinanciado;
        this.txJuros = txJuros;
    }
}

const fin = new Financiamento(10000, 1);
console.log(fin);
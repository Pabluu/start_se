import {Parcela} from './parcela.js'


class Financiaento{
    #taxaJuros; //juros mensais
    #prazo; //em meses
    #parcelas = [];

    constructor(valor, entrada, taxaJuros, prazo){
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        // composicao - Financiamento possui ou tem parcelas;
        this.#parcelas.push(new Parcela(0,0,0,0, valor - entrada));
    }
}
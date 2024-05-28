"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    constructor() {
        this.saldoDaContaBancaria = 0;
    }
    get getValor() {
        return this.saldoDaContaBancaria;
    }
    ;
    // public get getNomeDaPessoa(): Pessoa{
    //     return this.nomeDaPessoa;
    // }
    //
    set Depositar(deposito) {
        this.saldoDaContaBancaria = deposito;
    }
}
exports.default = ContaBancaria;

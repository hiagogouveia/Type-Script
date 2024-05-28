"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    // saldoDaContaBancaria: ContaBancaria;
    constructor(nome) {
        this.nome = nome;
    }
    get getNome() {
        return this.nome;
    }
    ;
    // public get getSaldoDaContaBancaria(): number {
    //     return this.saldoDaContaBancaria.getValor
    // }
    //
    set setNome(nomeDaPessoa) {
        this.nome = nomeDaPessoa;
    }
    ;
}
exports.default = Pessoa;

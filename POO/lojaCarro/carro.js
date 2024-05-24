"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(modelo, valor, ano) {
        this.modelo = modelo;
        this.valor = valor;
        this.ano = ano;
    }
    get getModelo() {
        return this.modelo;
    }
    set setModelo(modelo) {
        this.modelo = modelo;
    }
    get getValor() {
        return this.valor;
    }
    set setValor(novoValor) {
        this.valor = novoValor;
    }
    get getAno() {
        return this.ano;
    }
    set setAno(ano) {
        this.ano = ano;
    }
}
exports.default = Carro;

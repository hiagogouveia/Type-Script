"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome) {
        this.comissao = 0;
        this.nome = nome;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getComissao() {
        return this.comissao;
    }
    set setComissao(valor) {
        this.comissao = valor;
    }
}
exports.default = Funcionario;

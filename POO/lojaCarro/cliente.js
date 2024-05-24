"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, idade, renda) {
        this.nome = nome;
        this.idade = idade;
        this.renda = renda;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getIdade() {
        return this.idade;
    }
    set setIdade(idade) {
        this.idade = idade;
    }
    get getRenda() {
        return this.renda;
    }
    set setRenda(renda) {
        this.renda = renda;
    }
}
exports.default = Cliente;

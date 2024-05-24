"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OldPessoa {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}
exports.default = OldPessoa;
;
class Pessoa {
    constructor(nome, idade, email) { }
}
const pessoa = new OldPessoa("Vitor", 13, "vitor@OldPessoagmail.com");
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);

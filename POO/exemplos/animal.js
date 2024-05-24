"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(tipo, nome, cor) {
        this.tipo = tipo;
        this.nome = nome;
        this.cor = cor;
    }
    ;
    /**
     * metodo comunicar
     */
    comunicar() {
        console.log("Sou metodo da classe Mãe");
    }
}
exports.default = Animal;
;
class Cachorro extends Animal {
    constructor(tipo, nome, cor, raca) {
        super(tipo, nome, cor);
        this.raca = raca;
    }
    ;
    comunicar() {
        console.log("Estou usando a classe Cachorro");
    }
}
;
class Pessoa extends Animal {
    constructor(tipo, nome, cor, cpf) {
        super(tipo, nome, cor);
        this.cpf = cpf;
    }
    ;
}
;
let cachorro1 = new Cachorro("terrestre", "betoven", "Branco", "Boder Colie");
// console.log(`Nome: ${cachorro1.nome}, Raça: ${cachorro1.raca}` );
cachorro1.comunicar();

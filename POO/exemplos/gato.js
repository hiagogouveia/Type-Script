"use strict";
class Gato {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
    miar() {
        console.log("Miauu");
    }
}
class Tom extends Gato {
    constructor(nome, cor, idade) {
        super(nome, cor);
        this.idade = idade;
    }
}
let gato1 = new Tom("Tom", "Cinza", 2);
console.log(gato1.cor);
console.log(gato1.idade);
gato1.miar();

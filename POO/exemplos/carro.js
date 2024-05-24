"use strict";
class Carro {
    constructor(nome, ano, valor) {
        this.cor = nome;
        this.ano = ano;
        this.valor = valor;
    }
    get getCor() {
        return this.cor;
    }
    setCor(value) {
        this.cor = value;
    }
}
let carro1 = new Carro("cinza", 2010, 20000);
console.log(carro1.getCor);
carro1.setCor("Azul");
console.log(carro1.getCor);

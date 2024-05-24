"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jerry {
    constructor(nome) {
        this.nome = nome;
    }
    fugir() {
        console.log("Corre lá vem o Tom!");
    }
}
const rato1 = new Jerry("Jerry");
console.log(rato1.nome);

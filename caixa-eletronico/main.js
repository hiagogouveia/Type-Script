"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./classe/pessoa"));
const contaBancaria_1 = __importDefault(require("./classe/contaBancaria"));
// Comando para deixar automatizado a criação do arquivo js.
// tsc --init
// tsc --watch
// Abra outro terminal para executar os comandos 'node nome.js'
function saqueContabancaria(saldo, valor) {
    if (valor <= saldo.saldoDaContaBancaria) {
        saldo.saldoDaContaBancaria = saldo.saldoDaContaBancaria - valor;
        return console.log(`Seu saldo é de: ${contaDaMaria.saldoDaContaBancaria}`);
    }
    else {
        return console.log(`Não pode realizar o saque pois seu saldo é de ${saldo.saldoDaContaBancaria}`);
    }
}
function saqueComMenorQuantidadeDeNotas(valor) {
    const cedulas = [200, 100, 50, 10, 5];
    const quantidadeCedulas = {};
    for (const cedula of cedulas) {
        quantidadeCedulas[cedula] = Math.floor(valor / cedula);
        valor %= cedula;
    }
    const cedulasUtilizadas = Object.entries(quantidadeCedulas)
        .filter(([_, quantidade]) => quantidade > 0)
        .map(([cedula, quantidade]) => `${quantidade} cédulas de R$ ${cedula.toFixed(2)}`)
        .join(', ');
    return cedulasUtilizadas;
}
const maria = new pessoa_1.default('Maria');
const contaDaMaria = new contaBancaria_1.default();
console.log(`Seu saldo é de: ${contaDaMaria.saldoDaContaBancaria}`);
contaDaMaria.Depositar = 500;
saqueContabancaria(contaDaMaria, 510);

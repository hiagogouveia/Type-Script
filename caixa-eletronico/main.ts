import Pessoa from "./classe/pessoa";
import ContaBancaria from "./classe/contaBancaria";

// Comando para deixar automatizado a criação do arquivo js.
// tsc --init
// tsc --watch
// Abra outro terminal para executar os comandos 'node nome.js'

function saqueContabancaria(saldo: ContaBancaria, valor: number) {
    if (valor <= saldo.saldoDaContaBancaria){
        saldo.saldoDaContaBancaria = saldo.saldoDaContaBancaria - valor;
        return console.log(`Seu saldo é de: ${contaDaMaria.saldoDaContaBancaria}`);
    } else {
        return console.log(`Não pode realizar o saque pois seu saldo é de ${saldo.saldoDaContaBancaria}`);
    }
}

function saqueComMenorQuantidadeDeNotas (valor: number): string {
    const cedulas = [200, 100, 50, 10, 5];
    const quantidadeCedulas: Record<number, number> = {};

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


const maria = new Pessoa('Maria');
const contaDaMaria = new ContaBancaria();

console.log(`Seu saldo é de: ${contaDaMaria.saldoDaContaBancaria}`);

contaDaMaria.Depositar = 500;

saqueContabancaria(contaDaMaria, 510);
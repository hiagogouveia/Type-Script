import ContaBancaria from "./contaBancaria";

export default class Pessoa {
    nome: string;
    // saldoDaContaBancaria: ContaBancaria;

    constructor(nome: string) {
        this.nome = nome;
    }

    public get getNome(): string {
        return this.nome;
    };

    // public get getSaldoDaContaBancaria(): number {
    //     return this.saldoDaContaBancaria.getValor
    // }

    //

    public set setNome(nomeDaPessoa: string) {
        this.nome = nomeDaPessoa;
    };
    
}


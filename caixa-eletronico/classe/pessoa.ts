import ContaBancaria from "./contaBancaria";

export default class Pessoa {
    nome: string;
    cpf: string;
    dataNascimento: Date;
    renda: number;
    conta: ContaBancaria;
    saldoDaContaBancaria: ContaBancaria;

    constructor(nome: string, saldo: number) {
        this.nome = nome;
        this.saldoDaContaBancaria = saldo;
    }

    public get getNome(): string {
        return this.nome;
    };

    public get getSaldoDaContaBancaria(): number {
        
    };

    public get getDataNascimento(): Date {
        return this.dataNascimento;
    };

    public get getRenda(): number {
        return this.renda;
    }

    //

    public set setNome(nomeDaPessoa: string) {
        this.nome = nomeDaPessoa;
    };

    public set setCPf(cpf: string) {
        this.cpf = cpf;
    };

    public set setDataNascimento(dataNascimento: Date) {
        this.dataNascimento = dataNascimento
    };

    public set setRenda(renda: number) {
        this.renda = renda;
    }

}
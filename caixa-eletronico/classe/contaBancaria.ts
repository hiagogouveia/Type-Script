import Pessoa from "./pessoa";

export default class ContaBancaria {
    // nomeDaPessoa: Pessoa;
    saldoDaContaBancaria: number;

    constructor() {
        this.saldoDaContaBancaria = 0;
    }

    public get getValor(): number {
        return this.saldoDaContaBancaria;
    };

    // public get getNomeDaPessoa(): Pessoa{
    //     return this.nomeDaPessoa;
    // }

    //

    public set Depositar(deposito: number){
        this.saldoDaContaBancaria = deposito;
    }

}
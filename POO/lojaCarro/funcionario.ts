export default class Funcionario {
    nome: string;
    comissao: number = 0;

    constructor(nome: string){
        this.nome = nome;
    }

    public get getNome(): string{
        return this.nome;
    }

    public set setNome(nome: string){
        this.nome = nome;
    }

    public get getComissao(): number{
        return this.comissao;
    }

    public set setComissao(valor: number){
        this.comissao= valor;
    }
}

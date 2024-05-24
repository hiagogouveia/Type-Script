export default class Cliente {
    private nome: string;
    private idade: number;
    private renda: number;

    constructor(nome: string, idade: number, renda: number) {
        this.nome = nome;
        this.idade = idade;
        this.renda = renda;
    }

    public get getNome(){
        return this.nome;
    }

    public set setNome(nome: string){
        this.nome = nome;
    }

    public get getIdade(){
        return this.idade;
    }

    public set setIdade(idade: number){
        this.idade = idade;
    }

    public get getRenda(){
        return this.renda;
    }

    public set setRenda(renda: number){
        this.renda = renda;
    }
}
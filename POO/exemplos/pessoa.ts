export default class OldPessoa {
    nome: string;
    idade: number;
    email: string;

    constructor(nome: string, idade: number, email: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
};

class Pessoa {
    constructor(nome: string, 
        idade: number,
        email: string) {}
}

const pessoa = new OldPessoa("Vitor", 13, "vitor@OldPessoagmail.com");

console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
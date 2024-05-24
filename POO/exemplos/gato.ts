abstract class Gato {
    nome: string;
    cor: string;

    constructor(nome: string, cor: string){
        this.nome = nome;
        this.cor = cor;
    }

    miar(){
        console.log("Miauu");
    }

}

class Tom extends Gato {
    idade: number;
    constructor(nome: string, cor: string, idade: number){
        super(nome, cor);
        this.idade = idade;
    }

    }


let gato1 = new Tom("Tom", "Cinza", 2 );	
console.log(gato1.cor);
console.log(gato1.idade);
gato1.miar();
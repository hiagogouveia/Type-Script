export default interface Rato {
    nome: string;
    fugir(): void;
}

class Jerry implements Rato {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    fugir(){
        console.log("Corre lá vem o Tom!");
    }
    
}

const rato1 = new Jerry("Jerry");

console.log(rato1.nome);
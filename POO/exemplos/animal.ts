export default class Animal {
    tipo: string;
    nome: string;
    cor: string;

    constructor(tipo: string, nome: string, cor: string) {
        this.tipo = tipo;
        this.nome = nome;
        this.cor = cor;
    };

    /**
     * metodo comunicar
     */
    public comunicar(): void {
        console.log("Sou metodo da classe Mãe");
    }
};

class Cachorro extends Animal {
    raca: string;

    constructor(tipo: string, nome: string, cor: string, raca: string) {
        super(tipo, nome, cor)
        this.raca = raca;
    };
    public comunicar(): void {
        console.log("Estou usando a classe Cachorro");
    }
};


class Pessoa extends Animal {
    cpf: number;

    constructor(tipo: string, nome: string, cor: string, cpf: number) {
        super(tipo, nome, cor)
        this.cpf = cpf;
    };
};

let cachorro1 = new Cachorro("terrestre", "betoven", "Branco", "Boder Colie");

// console.log(`Nome: ${cachorro1.nome}, Raça: ${cachorro1.raca}` );
cachorro1.comunicar();
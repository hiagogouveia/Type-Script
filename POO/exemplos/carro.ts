class Carro {
    private cor: string;
    private ano: number;
    private valor: number;

    constructor(nome: string, ano: number, valor: number) {
        this.cor = nome;
        this.ano = ano;
        this.valor = valor;
    }
    public get getCor (){
        return this.cor;
    }

    public setCor(value: string){
        this.cor = value;
    }

}
let carro1 = new Carro("cinza", 2010, 20000);

console.log(carro1.getCor);
carro1.setCor("Azul");
console.log(carro1.getCor);
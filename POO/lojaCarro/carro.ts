export default class Carro{
    modelo: string;
    valor: number;
    ano: number;

    constructor(modelo: string, valor: number, ano: number) {
        this.modelo = modelo;
        this.valor = valor;
        this.ano = ano;
    }

    public get getModelo(): string {
        return this.modelo;
    }

    public set setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public get getValor(): number {
        return this.valor;
    } 

    public set setValor(novoValor: number) {
        this.valor = novoValor;
    }
    
    public get getAno(): number {
        return this.ano;
    }

    public set setAno(ano: number) {
        this.ano = ano;
    }
}

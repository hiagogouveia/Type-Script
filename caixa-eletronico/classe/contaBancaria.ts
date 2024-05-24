export default class ContaBancaria {
    private numeroDaConta: number;
    private saldo: number;

    constructor(numeroDaConta: number, saldo: number) {
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
    }

    get getSaldo(): number {
        return this.saldo;
    }

    get getNumeroDaConta(): number {
        return this.numeroDaConta;
    }

    set setNumeroDaConta(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }

    set setSaldo(saldo: number) {
        this.saldo = saldo;
    }


}
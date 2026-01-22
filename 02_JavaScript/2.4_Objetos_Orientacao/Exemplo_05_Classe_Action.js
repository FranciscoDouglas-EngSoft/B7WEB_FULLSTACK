// Exemplo 5: Classes: Action
// Métodos representam ações que os objetos podem executar

class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado.`);
    }
    exibirSaldo() {
        console.log(`Saldo de ${this.titular}: R$${this.saldo}`);
    }
}

let conta1 = new Conta('João', 1000);
conta1.depositar(500);
conta1.exibirSaldo();

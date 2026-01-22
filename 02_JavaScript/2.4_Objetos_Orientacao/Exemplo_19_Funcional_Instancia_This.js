// Exemplo 19: Funcional: Instância e This
// Em factories funcionais, o this se refere ao objeto retornado

function criarConta(titular, saldo) {
    return {
        titular,
        saldo,
        exibirSaldo() {
            console.log(`Saldo de ${this.titular}: R$${this.saldo}`);
        }
    };
}

let conta = criarConta('João', 500);
conta.exibirSaldo();

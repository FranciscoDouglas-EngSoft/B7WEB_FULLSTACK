// Exemplo 13: Projeto: Luta - Criar classes de cenário 1
// Classe para o cenário da luta

class Cenario {
    constructor(nome) {
        this.nome = nome;
    }
    exibir() {
        console.log(`Cenário: ${this.nome}`);
    }
}

let floresta = new Cenario('Floresta Sombria');
floresta.exibir();

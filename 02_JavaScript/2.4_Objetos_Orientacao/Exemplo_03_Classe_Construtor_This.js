// Exemplo 3: Classes: Construtor e This
// Classes permitem criar objetos com propriedades e métodos

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let maria = new Pessoa('Maria', 28);
maria.apresentar();

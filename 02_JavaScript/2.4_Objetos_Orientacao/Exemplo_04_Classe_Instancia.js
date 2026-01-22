// Exemplo 4: Classes: Instância
// Cada vez que usamos new, criamos uma nova instância da classe

class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`${this.nome} faz um som.`);
    }
}

let gato = new Animal('Mimi');
let cachorro = new Animal('Rex');
gato.falar();
cachorro.falar();

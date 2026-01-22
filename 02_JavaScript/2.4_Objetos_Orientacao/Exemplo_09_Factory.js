// Exemplo 9: Classes: Factory
// Factory é uma função que retorna objetos, facilitando a criação de múltiplas instâncias

function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
        apresentar() {
            console.log(`Olá, meu nome é ${this.nome}`);
        }
    };
}

let p1 = criarPessoa('Lucas', 22);
let p2 = criarPessoa('Marina', 30);
p1.apresentar();
p2.apresentar();

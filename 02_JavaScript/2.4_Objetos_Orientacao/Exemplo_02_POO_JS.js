// Exemplo 2: POO no Javascript
// JavaScript suporta Programação Orientada a Objetos (POO) usando objetos, funções construtoras e classes.

// Objeto literal
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ligar: function() {
        console.log('Carro ligado!');
    }
};
carro.ligar();

// Função construtora
function Animal(nome) {
    this.nome = nome;
}
let cachorro = new Animal('Rex');
console.log(cachorro.nome);

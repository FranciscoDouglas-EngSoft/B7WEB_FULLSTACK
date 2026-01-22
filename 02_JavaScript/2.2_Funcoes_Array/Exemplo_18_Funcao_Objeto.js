// Exemplo 18: Função dentro de objeto
// Objetos podem ter funções como propriedades (métodos)

let pessoa = {
    nome: 'Ana',
    apresentar: function() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

console.log(pessoa.apresentar());

// Exemplo 20: Funcional: Construtor
// Podemos criar objetos usando funções construtoras (com new)

function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}

let livro1 = new Livro('JS Essencial', 'João Ribeiro');
console.log(livro1);

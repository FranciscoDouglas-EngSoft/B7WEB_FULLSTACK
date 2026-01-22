// Exemplo 10: let, const, var
// let: escopo de bloco, pode ser reatribuída
let nome = 'Ana';
nome = 'João';

// const: escopo de bloco, não pode ser reatribuída
const pi = 3.14;
// pi = 3.1415; // erro

// var: escopo de função, pode ser redeclarada
var idade = 20;
var idade = 25;

console.log(nome, pi, idade);

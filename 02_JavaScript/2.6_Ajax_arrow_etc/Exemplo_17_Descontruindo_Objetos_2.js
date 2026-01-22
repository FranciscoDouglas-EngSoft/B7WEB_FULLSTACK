// Exemplo 17: Descontruindo Objetos (2/2)
// Renomeando variáveis e valores padrão

let usuario = { nome: 'Carlos', idade: 40 };
let { nome: n, idade: i, cidade = 'Desconhecida' } = usuario;
console.log(n, i, cidade);

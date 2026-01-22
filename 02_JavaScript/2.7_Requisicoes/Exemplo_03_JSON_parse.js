// Exemplo 3: JSON.parse
// Converte uma string JSON em objeto JavaScript

let json = '{"nome":"Carlos","idade":40}';
let obj = JSON.parse(json);
console.log('Objeto:', obj);
console.log('Nome:', obj.nome);

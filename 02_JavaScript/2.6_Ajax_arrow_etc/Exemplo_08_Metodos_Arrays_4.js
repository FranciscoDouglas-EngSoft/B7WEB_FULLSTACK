// Exemplo 8: Métodos de Arrays (4/4)
// forEach, map, filter, reduce

let numeros = [1, 2, 3, 4];
numeros.forEach(n => console.log('forEach:', n));
let dobrados = numeros.map(n => n * 2);
console.log('map:', dobrados);
let pares = numeros.filter(n => n % 2 === 0);
console.log('filter:', pares);
let soma = numeros.reduce((acc, n) => acc + n, 0);
console.log('reduce:', soma);

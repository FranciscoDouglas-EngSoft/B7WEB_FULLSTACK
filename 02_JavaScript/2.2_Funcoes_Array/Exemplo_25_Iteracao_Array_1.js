// Exemplo 25: Iteração de array 1
// Métodos como forEach, map, filter permitem iterar arrays de forma funcional

let numeros = [1, 2, 3, 4];

// forEach executa uma função para cada elemento
numeros.forEach(function(n) {
    console.log('forEach:', n);
});

// map cria um novo array com base na função
let dobrados = numeros.map(n => n * 2);
console.log('Dobrados:', dobrados);

// filter cria um novo array apenas com elementos que passam no teste
let pares = numeros.filter(n => n % 2 === 0);
console.log('Pares:', pares);

// Exemplo 20: Operador Spread
// Spread ... expande elementos de arrays ou objetos

let arr1 = [1, 2, 3];
let arr2 = [4, 5, ...arr1];
console.log('Spread em array:', arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log('Spread em objeto:', obj2);

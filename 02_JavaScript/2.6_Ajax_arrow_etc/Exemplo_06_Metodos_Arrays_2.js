// Exemplo 6: Métodos de Arrays (2/4)
// concat, join, slice, splice

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log('concat:', c);
console.log('join:', c.join('-'));
console.log('slice:', c.slice(1, 3));
c.splice(2, 1, 99); // remove 1 elemento no índice 2 e adiciona 99
console.log('splice:', c);

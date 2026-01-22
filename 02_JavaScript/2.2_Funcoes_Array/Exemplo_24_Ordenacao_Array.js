// Exemplo 24: Ordenação de array
// O método sort() ordena os elementos de um array

let numeros = [5, 2, 9, 1, 7];
numeros.sort(); // ordena como string por padrão
console.log('Ordenação padrão:', numeros);

// Para ordenar numericamente:
numeros.sort((a, b) => a - b);
console.log('Ordenação numérica:', numeros);

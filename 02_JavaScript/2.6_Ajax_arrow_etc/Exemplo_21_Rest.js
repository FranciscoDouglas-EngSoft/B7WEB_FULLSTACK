// Exemplo 21: Operador Rest
// Rest ... agrupa argumentos em um array

function somar(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}
console.log('Soma:', somar(1, 2, 3, 4));

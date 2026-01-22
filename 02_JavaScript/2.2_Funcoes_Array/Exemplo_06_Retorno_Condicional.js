// Exemplo 6: Função com retorno condicional
// O valor de retorno pode depender de condições

function verificarIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

console.log(verificarIdade(20));
console.log(verificarIdade(15));

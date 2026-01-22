// Exemplo 8: Classes: Variável/Método estático
// Métodos e variáveis estáticas pertencem à classe, não à instância

class Matematica {
    static PI = 3.1415;
    static dobro(x) {
        return x * 2;
    }
}

console.log(Matematica.PI);
console.log(Matematica.dobro(10));

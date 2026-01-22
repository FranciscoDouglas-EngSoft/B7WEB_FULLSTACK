// Exemplo 18: Funcional: Factory
// Factory funcional retorna objetos sem usar classes

function criarAnimal(nome, tipo) {
    return {
        nome,
        tipo,
        falar() {
            console.log(`${nome} faz um som!`);
        }
    };
}

let cachorro = criarAnimal('Rex', 'Cachorro');
cachorro.falar();

// Exemplo 23: Projeto: Luta Funcional - Criando o cenário
// Factory funcional para cenário

function criarCenario(nome) {
    return {
        nome,
        exibir() {
            console.log(`Cenário: ${nome}`);
        }
    };
}

let cenario = criarCenario('Arena Funcional');
cenario.exibir();

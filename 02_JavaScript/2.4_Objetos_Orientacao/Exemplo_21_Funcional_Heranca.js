// Exemplo 21: Funcional: Herança
// Herança funcional pode ser feita por composição

function criarVeiculo(marca) {
    return {
        marca,
        buzinar() {
            console.log('Buzinando!');
        }
    };
}

function criarCarro(marca, modelo) {
    let veiculo = criarVeiculo(marca);
    return {
        ...veiculo,
        modelo,
        exibir() {
            console.log(`Carro: ${marca} ${modelo}`);
        }
    };
}

let carro = criarCarro('Ford', 'Ka');
carro.buzinar();
carro.exibir();

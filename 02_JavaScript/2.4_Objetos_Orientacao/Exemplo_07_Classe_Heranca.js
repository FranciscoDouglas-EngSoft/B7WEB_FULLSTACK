// Exemplo 7: Classes: Herança
// Herança permite criar classes que herdam propriedades e métodos de outra classe

class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }
    buzinar() {
        console.log('Buzinando!');
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }
    exibir() {
        console.log(`Carro: ${this.marca} ${this.modelo}`);
    }
}

let c = new Carro('Ford', 'Ka');
c.buzinar();
c.exibir();

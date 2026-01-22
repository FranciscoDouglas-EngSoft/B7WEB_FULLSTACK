// Exemplo 12: Projeto: Luta - Criar classes de personagens 2
// Herança para diferentes tipos de personagens

class Mago extends Personagem {
    constructor(nome, vida, ataque, defesa, magia) {
        super(nome, vida, ataque, defesa);
        this.magia = magia;
    }
}

let mago = new Mago('Mago', 80, 15, 8, 30);
console.log(mago);

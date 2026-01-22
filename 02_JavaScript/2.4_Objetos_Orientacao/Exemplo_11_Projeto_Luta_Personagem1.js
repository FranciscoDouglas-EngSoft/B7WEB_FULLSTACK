// Exemplo 11: Projeto: Luta - Criar classes de personagens 1
// Classe base para personagens

class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}

let guerreiro = new Personagem('Guerreiro', 100, 20, 10);
console.log(guerreiro);

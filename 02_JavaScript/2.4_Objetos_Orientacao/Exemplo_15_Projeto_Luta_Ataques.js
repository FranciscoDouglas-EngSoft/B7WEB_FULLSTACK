// Exemplo 15: Projeto: Luta - Criar ataques
// Método para atacar outro personagem

class Lutador extends Personagem {
    atacar(alvo) {
        let dano = this.ataque - alvo.defesa;
        if (dano > 0) {
            alvo.vida -= dano;
            console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
        } else {
            console.log(`${this.nome} atacou ${alvo.nome} mas não causou dano.`);
        }
    }
}

let l1 = new Lutador('Lutador1', 100, 25, 5);
let l2 = new Lutador('Lutador2', 90, 15, 10);
l1.atacar(l2);
console.log(l2);

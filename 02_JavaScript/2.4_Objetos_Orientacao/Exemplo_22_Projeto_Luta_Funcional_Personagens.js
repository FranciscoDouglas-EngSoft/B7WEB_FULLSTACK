// Exemplo 22: Projeto: Luta Funcional - Criando Personagens
// Factory funcional para personagens de luta

function criarLutador(nome, vida, ataque, defesa) {
    return {
        nome,
        vida,
        ataque,
        defesa,
        atacar(alvo) {
            let dano = this.ataque - alvo.defesa;
            if (dano > 0) {
                alvo.vida -= dano;
                console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
            } else {
                console.log(`${this.nome} atacou ${alvo.nome} mas não causou dano.`);
            }
        }
    };
}

let l1 = criarLutador('Lutador1', 100, 25, 5);
let l2 = criarLutador('Lutador2', 90, 15, 10);
l1.atacar(l2);
console.log(l2);

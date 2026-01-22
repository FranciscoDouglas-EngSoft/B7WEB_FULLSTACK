// Exemplo 24: Projeto: Luta Funcional - Criando Ataques
// Função para ataque entre personagens funcionais

function atacar(lutador, alvo) {
    let dano = lutador.ataque - alvo.defesa;
    if (dano > 0) {
        alvo.vida -= dano;
        console.log(`${lutador.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    } else {
        console.log(`${lutador.nome} atacou ${alvo.nome} mas não causou dano.`);
    }
}

let l1 = criarLutador('Lutador1', 100, 25, 5);
let l2 = criarLutador('Lutador2', 90, 15, 10);
atacar(l1, l2);
console.log(l2);

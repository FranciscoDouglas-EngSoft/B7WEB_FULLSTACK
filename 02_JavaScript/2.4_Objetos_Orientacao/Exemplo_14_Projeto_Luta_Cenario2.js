// Exemplo 14: Projeto: Luta - Criar classes de cenário 2
// Cenário pode ter métodos para iniciar ou finalizar a luta

class Arena extends Cenario {
    iniciarLuta() {
        console.log('A luta começou na arena!');
    }
}

let arena = new Arena('Arena Principal');
arena.exibir();
arena.iniciarLuta();

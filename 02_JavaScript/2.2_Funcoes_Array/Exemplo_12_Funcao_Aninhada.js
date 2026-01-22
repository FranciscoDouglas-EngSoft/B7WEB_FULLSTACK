// Exemplo 12: Funções dentro de funções
// Funções podem ser declaradas dentro de outras funções (aninhadas)

function saudacao(nome) {
    function mensagem() {
        return `Olá, ${nome}!`;
    }
    return mensagem();
}

console.log(saudacao('Ana'));

// Exemplo 11: Variáveis dentro de funções
// Variáveis declaradas dentro de funções só existem no escopo da função

function mostrarMensagem() {
    let mensagem = 'Olá do escopo da função!';
    console.log(mensagem);
}

mostrarMensagem();
// console.log(mensagem); // Erro: mensagem não está definida fora da função

// Exemplo 5: O que é um Callback?
// Callback é uma função passada como argumento para outra função
// Muito usado em operações assíncronas

function saudacao(nome, callback) {
    console.log('Olá, ' + nome);
    callback();
}

saudacao('Maria', function() {
    console.log('Callback executado!');
});

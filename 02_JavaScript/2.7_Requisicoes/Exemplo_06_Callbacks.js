// Exemplo 6: Callbacks
// Callback é uma função passada como argumento para outra função

function saudacao(nome, callback) {
    console.log('Olá, ' + nome);
    callback();
}

saudacao('Maria', function() {
    console.log('Callback executado!');
});

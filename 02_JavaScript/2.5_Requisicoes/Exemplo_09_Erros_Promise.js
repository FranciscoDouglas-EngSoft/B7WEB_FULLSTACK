// Exemplo 9: Gerenciando erros na Promise
// Use .catch para tratar erros em Promises

let promessa = new Promise((resolve, reject) => {
    let sucesso = false;
    if (sucesso) {
        resolve('Tudo certo!');
    } else {
        reject('Algo deu errado.');
    }
});

promessa.then(res => {
    console.log(res);
}).catch(erro => {
    console.error('Erro capturado:', erro);
});

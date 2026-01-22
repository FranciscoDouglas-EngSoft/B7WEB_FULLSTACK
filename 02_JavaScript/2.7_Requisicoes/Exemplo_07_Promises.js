// Exemplo 7: Promises
// Promise representa uma operação assíncrona que pode ser concluída ou rejeitada

let promessa = new Promise((resolve, reject) => {
    let sucesso = true;
    if (sucesso) {
        resolve('Operação bem-sucedida!');
    } else {
        reject('Ocorreu um erro.');
    }
});

promessa.then(resultado => {
    console.log(resultado);
}).catch(erro => {
    console.error(erro);
});

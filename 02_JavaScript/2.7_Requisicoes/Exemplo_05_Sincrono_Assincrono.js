// Exemplo 5: Código síncrono vs assíncrono
// Síncrono: executa linha a linha, bloqueando o restante
// Assíncrono: permite que outras tarefas ocorram enquanto espera

console.log('Início');
setTimeout(() => {
    console.log('Assíncrono: depois de 2 segundos');
}, 2000);
console.log('Fim');

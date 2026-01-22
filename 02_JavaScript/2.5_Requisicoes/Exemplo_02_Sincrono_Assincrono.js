// Exemplo 2: O que é Síncrono e Assíncrono?
// Código síncrono executa linha a linha, bloqueando a execução
// Código assíncrono permite que outras tarefas ocorram enquanto espera uma resposta

console.log('Início');
setTimeout(() => {
    console.log('Assíncrono: depois de 2 segundos');
}, 2000);
console.log('Fim');
// O setTimeout é assíncrono, não bloqueia o restante do código

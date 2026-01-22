// Exemplo 14: Intervalos (2/2)
// Cancelando intervalos e timeouts

let idTimeout = setTimeout(() => {
    console.log('Nunca será executado');
}, 5000);
clearTimeout(idTimeout);

let idInterval = setInterval(() => {
    console.log('Não será repetido');
}, 1000);
clearInterval(idInterval);

// Exemplo 13: Intervalos (1/2)
// setTimeout e setInterval

setTimeout(() => {
    console.log('Executado após 2 segundos');
}, 2000);

let contador = 0;
let intervalo = setInterval(() => {
    contador++;
    console.log('Contador:', contador);
    if (contador === 3) {
        clearInterval(intervalo);
    }
}, 1000);

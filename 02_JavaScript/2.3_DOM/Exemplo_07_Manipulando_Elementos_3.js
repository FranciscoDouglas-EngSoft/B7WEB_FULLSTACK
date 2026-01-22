// Exemplo 7: Manipulando elementos 3
// Podemos navegar entre elementos pai, filho e irmãos

// Suponha <ul id="lista"><li>Item 1</li><li>Item 2</li></ul>
let lista = document.getElementById('lista');
let primeiroItem = lista.firstElementChild;
let proximoItem = primeiroItem.nextElementSibling;

console.log('Primeiro item:', primeiroItem.textContent);
console.log('Próximo item:', proximoItem.textContent);

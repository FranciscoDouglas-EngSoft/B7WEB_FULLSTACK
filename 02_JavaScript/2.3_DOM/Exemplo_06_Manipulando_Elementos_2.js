// Exemplo 6: Manipulando elementos 2
// Podemos criar, adicionar e remover elementos dinamicamente

// Criando um novo elemento
let novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Parágrafo criado via JS!';

document.body.appendChild(novoParagrafo); // adiciona ao final do body

// Removendo um elemento
// document.body.removeChild(novoParagrafo);

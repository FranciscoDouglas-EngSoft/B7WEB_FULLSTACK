// Exemplo 13: Exercício - Lista de Tarefas Simples
// Crie um campo de texto, um botão e uma lista para adicionar tarefas
// HTML sugerido:
/*
<input id="tarefaInput">
<button id="adicionarBtn">Adicionar</button>
<ul id="listaTarefas"></ul>
*/

// Lógica JS:
let input = document.getElementById('tarefaInput');
let btn = document.getElementById('adicionarBtn');
let lista = document.getElementById('listaTarefas');

btn.addEventListener('click', function() {
    let texto = input.value.trim();
    if (texto) {
        let item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
        input.value = '';
    }
});

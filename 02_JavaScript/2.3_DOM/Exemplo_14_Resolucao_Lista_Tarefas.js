// Exemplo 14: Resolução - Lista de Tarefas Simples
// Solução completa para o exercício de lista de tarefas
// HTML sugerido:
/*
<input id="tarefaInput">
<button id="adicionarBtn">Adicionar</button>
<ul id="listaTarefas"></ul>
*/

let input = document.getElementById('tarefaInput');
let btn = document.getElementById('adicionarBtn');
let lista = document.getElementById('listaTarefas');

btn.addEventListener('click', adicionarTarefa);
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    let texto = input.value.trim();
    if (texto) {
        let item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
        input.value = '';
    }
}

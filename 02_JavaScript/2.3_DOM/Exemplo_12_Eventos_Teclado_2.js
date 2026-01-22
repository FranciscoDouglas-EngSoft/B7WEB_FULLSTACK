// Exemplo 12: Eventos de teclado 2
// Podemos reagir a eventos de digitação em campos de texto

// Suponha <input id="campoTexto">
let campo = document.getElementById('campoTexto');
campo.addEventListener('keyup', function(event) {
    console.log('Valor atual:', campo.value);
});

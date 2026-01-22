// Exemplo 13: Thumbnails com JS
// Exibindo miniatura de imagem selecionada
// HTML sugerido:
/*
<input type="file" id="arquivoInput">
<img id="thumb" width="100">
*/

document.getElementById('arquivoInput').onchange = function(event) {
    let arquivo = event.target.files[0];
    let url = URL.createObjectURL(arquivo);
    document.getElementById('thumb').src = url;
};

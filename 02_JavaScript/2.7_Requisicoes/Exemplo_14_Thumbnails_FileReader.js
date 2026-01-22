// Exemplo 14: Thumbnails com FileReader
// Usando FileReader para exibir miniatura de imagem
// HTML sugerido:
/*
<input type="file" id="arquivoInput">
<img id="thumb" width="100">
*/

document.getElementById('arquivoInput').onchange = function(event) {
    let arquivo = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('thumb').src = e.target.result;
    };
    reader.readAsDataURL(arquivo);
};

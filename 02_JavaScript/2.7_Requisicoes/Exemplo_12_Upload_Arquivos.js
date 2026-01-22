// Exemplo 12: Upload de arquivos com JS
// Usando FormData para enviar arquivos via fetch
// HTML sugerido:
/*
<input type="file" id="arquivoInput">
<button id="enviarBtn">Enviar</button>
*/

document.getElementById('enviarBtn').onclick = async function() {
    let input = document.getElementById('arquivoInput');
    let arquivo = input.files[0];
    let formData = new FormData();
    formData.append('arquivo', arquivo);

    let resposta = await fetch('URL_DA_API', {
        method: 'POST',
        body: formData
    });
    let dados = await resposta.json();
    console.log('Resposta do upload:', dados);
};

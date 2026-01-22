// Exemplo 8: Fetch 1
// Usando fetch para buscar dados de uma API

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log('Dados recebidos:', data);
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });

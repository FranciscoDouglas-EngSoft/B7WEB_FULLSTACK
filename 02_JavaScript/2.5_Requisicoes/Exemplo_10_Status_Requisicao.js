// Exemplo 10: Tipos de status de uma requisição
// Status HTTP indicam o resultado da requisição
// Exemplos: 200 (OK), 404 (Não encontrado), 500 (Erro interno)

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Dados:', data);
    });

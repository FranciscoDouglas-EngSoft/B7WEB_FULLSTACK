// Exemplo 9: Fetch 2
// Exemplo de tratamento de status e erros

fetch('https://jsonplaceholder.typicode.com/posts/9999')
    .then(response => {
        if (!response.ok) {
            throw new Error('Recurso não encontrado!');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados:', data);
    })
    .catch(error => {
        console.error('Erro:', error.message);
    });

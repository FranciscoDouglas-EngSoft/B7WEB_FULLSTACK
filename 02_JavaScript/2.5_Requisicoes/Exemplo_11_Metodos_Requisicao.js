// Exemplo 11: Métodos de envio de requisição
// Os métodos mais comuns são GET, POST, PUT, DELETE

// GET: busca dados
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(r => r.json()).then(d => console.log('GET:', d));

// POST: envia dados
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Novo Post', body: 'Conteúdo', userId: 1 })
})
.then(r => r.json()).then(d => console.log('POST:', d));

// Exemplo 11: Fetch com POST
// Enviando dados para uma API usando POST

async function criarPost() {
    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Novo Post', body: 'Conteúdo', userId: 1 })
    });
    let dados = await resposta.json();
    console.log('Post criado:', dados);
}

criarPost();

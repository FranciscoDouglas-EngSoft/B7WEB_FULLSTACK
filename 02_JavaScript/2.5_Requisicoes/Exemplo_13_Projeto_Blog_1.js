// Exemplo 13: Projeto: Blog do JSONPlaceholder 1
// Busca e exibe posts de uma API fake

async function carregarPosts() {
    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await resposta.json();
    posts.slice(0, 5).forEach(post => {
        console.log(`Título: ${post.title}`);
        console.log(`Corpo: ${post.body}`);
        console.log('---');
    });
}

carregarPosts();

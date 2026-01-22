// Exemplo 14: Projeto: Blog do JSONPlaceholder 2
// Exibe detalhes de um post ao clicar

async function carregarPosts() {
    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await resposta.json();
    posts.slice(0, 5).forEach(post => {
        let btn = document.createElement('button');
        btn.textContent = post.title;
        btn.onclick = async () => {
            let resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
            let detalhes = await resp.json();
            alert(`Título: ${detalhes.title}\nCorpo: ${detalhes.body}`);
        };
        document.body.appendChild(btn);
    });
}

carregarPosts();

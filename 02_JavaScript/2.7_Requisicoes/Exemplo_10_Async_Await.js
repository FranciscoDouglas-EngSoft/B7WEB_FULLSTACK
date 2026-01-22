// Exemplo 10: Async e Await
// async/await facilita o uso de Promises, deixando o código mais legível

async function buscarPost() {
    try {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let dados = await resposta.json();
        console.log('Dados com async/await:', dados);
    } catch (erro) {
        console.error('Erro:', erro);
    }
}

buscarPost();

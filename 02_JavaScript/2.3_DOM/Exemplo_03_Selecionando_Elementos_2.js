// Exemplo 3: Selecionando elementos 2
// Podemos selecionar elementos por classe, tag ou seletor CSS

// Por classe
let itens = document.getElementsByClassName('item');
console.log(itens);

// Por tag
let paragrafos = document.getElementsByTagName('p');
console.log(paragrafos);

// Por seletor CSS (querySelector e querySelectorAll)
let primeiroBotao = document.querySelector('button');
let todosOsBotoes = document.querySelectorAll('button');
console.log(primeiroBotao, todosOsBotoes);

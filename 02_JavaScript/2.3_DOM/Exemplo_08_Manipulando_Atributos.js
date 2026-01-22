// Exemplo 8: Manipulando atributos
// Podemos acessar e modificar atributos de elementos

// Suponha <img id="foto" src="imagem1.jpg">
let foto = document.getElementById('foto');
console.log('SRC atual:', foto.getAttribute('src'));
foto.setAttribute('src', 'imagem2.jpg');

// Exemplo 15: Multi-condicionais (&& e ||)
// && (E lógico): todas as condições devem ser verdadeiras
// || (OU lógico): pelo menos uma condição deve ser verdadeira

let idade = 20;
let temCNH = true;

if (idade >= 18 && temCNH) {
    console.log('Pode dirigir');
}

let temPermissao = false;
if (idade >= 18 || temPermissao) {
    console.log('Pode entrar');
}

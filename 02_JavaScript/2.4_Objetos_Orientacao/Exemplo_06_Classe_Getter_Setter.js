// Exemplo 6: Classes: Getter e Setter
// Getters e setters permitem controlar o acesso a propriedades

class Produto {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get preco() {
        return this._preco;
    }
    set preco(novoPreco) {
        if (novoPreco > 0) {
            this._preco = novoPreco;
        }
    }
}

let p = new Produto('Celular', 1500);
console.log(p.nome);
p.preco = 2000;
console.log(p.preco);

// Exemplo 20: Switch
// Switch permite executar diferentes blocos de código com base em um valor

let dia = 2;
let nomeDia;

switch (dia) {
    case 1:
        nomeDia = 'Domingo';
        break;
    case 2:
        nomeDia = 'Segunda-feira';
        break;
    case 3:
        nomeDia = 'Terça-feira';
        break;
    default:
        nomeDia = 'Outro dia';
}
console.log('Dia da semana:', nomeDia);

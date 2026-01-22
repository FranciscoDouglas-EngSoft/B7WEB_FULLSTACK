// Exemplo 25: Projeto: Luta Funcional - Fazendo Log
// Função para registrar ações da luta funcional

function registrarLog(mensagem) {
    let log = document.getElementById('log');
    let p = document.createElement('p');
    p.textContent = mensagem;
    log.appendChild(p);
}

registrarLog('Lutador1 atacou Lutador2!');

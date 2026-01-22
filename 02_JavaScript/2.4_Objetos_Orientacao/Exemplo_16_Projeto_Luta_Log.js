// Exemplo 16: Projeto: Luta - Fazer o log
// Função para registrar ações da luta

function registrarLog(mensagem) {
    let log = document.getElementById('log');
    let p = document.createElement('p');
    p.textContent = mensagem;
    log.appendChild(p);
}

// Exemplo de uso:
registrarLog('Lutador1 atacou Lutador2!');

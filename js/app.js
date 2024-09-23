let numeroDeJogosAlugados = 0;

function controleDeLocacao() {
    console.log(`O número atual de jogos alugados é: ${numeroDeJogosAlugados}`);
}

function alterarStatus(id) {
    let botaoClicado = document.getElementById(`game-${id}`);
    let imagem = botaoClicado.querySelector('.dashboard__item__img');
    let botao = botaoClicado.querySelector('.dashboard__item__button');
    let nomeDojogo = botaoClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza de que deseja devolver o jogo ${nomeDojogo.textContent}?`)) {
            
        } else {
            alert(`A entrega de ${nomeDojogo.textContent} foi cancelada. Aproveite o jogo.`);
        }
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        numeroDeJogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        numeroDeJogosAlugados++;
    }
    controleDeLocacao();
}

document.addEventListener('DOMContentLoaded', function() {
    numeroDeJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    controleDeLocacao();
});



















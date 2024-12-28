let totalJogosAlugados = 1;

function countJogosAlugados () {
    console.log(`Jogos alugados:  ${totalJogosAlugados}`)
}


function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let NomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    if (imagem.classList.contains('dashboard__item__img--rented')) {

         if(confirm(`Você tem certeza que deseja devolver o jogo ${NomeJogo}`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
        totalJogosAlugados --;
         
         }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
         botao.innerHTML = 'Devolver';
         totalJogosAlugados ++;
    }

    countJogosAlugados();
}


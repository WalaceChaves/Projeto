function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Quantidade Invalida!')
    } else {
        if (tipo == 'pista') {
            comprarPista(qtd);
        } else if (tipo == 'superior') {
            comprarSuperior(qtd);
        } else {
            comprarInferior(qtd);
        }
    }

}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtdPista - qtd < 0) {
        alert('Quantidade Não disponível');
    } else {
        qtdPista -= qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
    }

}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtdSuperior - qtd < 0) {
        alert('Quantidade Não Disponível');
    } else {
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtdInferior - qtd < 0) {
        alert('Quantidade Não Disponível');
    } else {
        qtdInferior -= qtd;

        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
}





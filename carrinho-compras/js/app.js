let somaTotal;
let texto = ''
limpar()
let paragrafo = document.getElementById('paragrafo')

function adicionar() {
    let btnAdicionar = document.querySelector('.botao-adicionar');
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = valorUnitario * quantidade;
    let carrinho = document.getElementById('lista-produtos');
    let total = document.getElementById('valor-total');
    somaTotal += subTotal;
    
    if (quantidade <= 0) {
        alert('Quantidade Vazia')
    }else{
        carrinho.innerHTML +=
            `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
            </section>`;

        total.innerHTML = `R$ ${somaTotal}`
        document.getElementById('quantidade').value = 0;
        }
    
        paragrafo.textContent = `${nomeProduto} adicionado; ao Carrinho; com sucesso!; Valor Total Carrinho R$${somaTotal}`
    }

function limpar() {
     somaTotal = 0;
     total = document.getElementById('valor-total').innerHTML = 'R$ 0';
     carrinho = document.getElementById('lista-produtos').innerHTML = '';
     document.getElementById('paragrafo').innerHTML = ''
}
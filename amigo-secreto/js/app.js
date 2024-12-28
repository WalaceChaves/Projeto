let amigos = [];

function limpar() {
    let amigo = document.getElementById('nome-amigo');
    amigo.value = '';
}

function adicionar() {
    var amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (amigos.includes(amigo.value)) {
        alert(`O amigo(a) ${amigo.value}, já esta na lista!`);
        limpar();
    } else {

        if (amigo.value == '') {
            alert('Não pode adicionar nome em branco a lista!')
        } else {

            amigos.push(amigo.value);
            
            if(lista.textContent == '') {
                lista.textContent = amigo.value;
            } else {
                lista.textContent += `, ${amigo.value}`;
            }

            limpar();
        }
        
    }
    
}

function sortear() {
    embaralhar(amigos); // Certifique-se de passar 'amigos' para embaralhar
    if (!amigos.length == true){
        alert('A lista esta vazia! Adicione amigos para sortear...')
    } else {

        if(amigos.length < 4) {
            alert(`A lista não possui amigos(a) suficientes para sortear. Adicione mais ${4 - amigos.length} amigo(a) para sortear`)
        } else {
            let sorteio = document.getElementById('lista-sorteio');
            sorteio.innerHTML = ''; // Limpar conteúdo anterior

            for (let i = 0; i < amigos.length; i++) {
                
                if(i == amigos.length) {
                    sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
                } else {
                sorteio.innerHTML += amigos[i] + ' --> ' + amigos[(i + 1) % amigos.length] + '<br>';
                console.log('dentro do for')  
                }
            }
        
       
    }
    }
    
}

function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    let amigos = [];
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

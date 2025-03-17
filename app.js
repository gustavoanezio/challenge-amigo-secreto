let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nomeAmigo = input.value.trim();

    if (nomeAmigo === '') {
        alert('Nenhum nome foi inserido.');
        return;
    }

    amigos.push(nomeAmigo);


    input.value = '';

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, insira o nome de pelo menos dois amigos.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado: ${amigoSorteado}</li>`;
}
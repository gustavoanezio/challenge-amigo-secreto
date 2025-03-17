# Desafio de Lógica de Programação - Amigo Secreto

## Sobre o Projeto

Este projeto foi desenvolvido como parte do curso Oracle Next Education e consiste em uma aplicação simples de sorteio de amigo secreto. Ele permite que usuários adicionem nomes a uma lista e realizem um sorteio aleatório entre os participantes.

## Tecnologias Utilizadas

JavaScript (ES6+)

HTML5

CSS3 

## Funcionalidades

- Adicionar Amigo: Permite ao usuário inserir um nome na lista de amigos.

- Atualizar Lista: Exibe a lista de amigos adicionados.

- Sortear Amigo Secreto: Realiza um sorteio aleatório entre os amigos cadastrados.

## Como Funciona

- O usuário insere nomes em um campo de entrada e clica no botão "Adicionar".

- Os nomes inseridos são armazenados em um array amigos.

- Ao clicar no botão "Sortear", o sistema seleciona aleatoriamente um nome da lista.

- O nome sorteado é exibido na tela.

- Se houver menos de dois participantes, uma mensagem de alerta é exibida.

## Estrutura do Código

### Variáveis

`amigos`: Array para armazenar os nomes dos participantes.

### Funções

`adicionarAmigo()`: Captura o nome inserido, verifica se é válido e adiciona ao array.

`atualizarListaAmigos()`: Atualiza a exibição da lista de amigos.

`sortearAmigo()`: Verifica se há participantes suficientes e realiza o sorteio.

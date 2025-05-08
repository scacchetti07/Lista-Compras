import { criarListaDeCompras, criarComprados } from './createHTML.js';

let listaDeItens = []

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");

// Não é necessário colocar um id no botão se ele estiver dentro de uma tag form e sendo do tip "submit"
form.addEventListener("submit", adicionarItens)

function adicionarItens(evento) {
    // preventDefault() => faz com que o conteúdo se mantenha no formulário após o clique do botão.
    evento.preventDefault();
    salvarItem();
    mostrarItem();
}

function salvarItem() {
    const comprasItem = itensInput.value;
    
    // some() => Teste se pelo menos 1 dos valores de uma array ou objeto condizem a condição estabelecida. Retornando True ou False
    const checarDuplicado = listaDeItens.some((item) => item.nomeItem.toLowerCase() === comprasItem.toLowerCase());

    if (checarDuplicado) {
        alert(`O item ${comprasItem.toUpperCase()} já existe na lista. Tente Adicionar outro!`);
        return;
    }
    
    // Atribuí o objeto com propriedade nomeItem para o Array listaDeItens
    listaDeItens.push({
        nomeItem: comprasItem.charAt(0).toUpperCase() + comprasItem.slice(1)
    });

    // Limpa o input e coloca o cursor em foco nesse input.
    itensInput.value = '';
    itensInput.focus();

}

function mostrarItem() {
    limparLista(ulItens); // a chamada desse método impede que os itens sejam inseridos 2x no HTML

    // foreach() => método para manipular elementos dentro de uma array (método callback)
    listaDeItens.forEach((elem, index) => {
        ulItens.appendChild(criarListaDeCompras(elem.nomeItem, index));
    });
}

// Essa função irá limpar todos os Childs existentes na lista
function limparLista(list) {
    while (list.firstChild) {
        list.removeChild(ulItens.firstChild);
    }
}

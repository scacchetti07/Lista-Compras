import { criarListaDeCompras, criarComprados } from './createHTML.js';

let listaDeItens = []

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");
const ultItensComprados = document.getElementById("itens-comprados");

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
        nomeItem: comprasItem.charAt(0).toUpperCase() + comprasItem.slice(1), // os métodos adicionados faz com que o item adicionado fique em "Capitalize" Case.
        check: false
    });

    // Limpa o input e coloca o cursor em foco nesse input.
    itensInput.value = '';
    itensInput.focus();

}

function mostrarItem() {
    limparLista(ulItens); // a chamada desse método impede que os itens sejam inseridos 2x no HTML
    limparLista(ultItensComprados); // a chamada desse método impede que os itens sejam inseridos multiplicamente no HTML

    // foreach() => método para manipular elementos dentro de uma array (método callback)
    listaDeItens.forEach((elem, index) => {
        if (elem.check) {
            ultItensComprados.appendChild(criarComprados(elem.nomeItem, index)); // Cria um item comprado dos itens adicionados, e coloca na outra <ul>
            return;            
        }
        ulItens.appendChild(criarListaDeCompras(elem.nomeItem, index)); // Cria um novo item no HTML e adiciona a <ul>
    });
    
    
    const inputsCheck = document.querySelectorAll('input[type="checkbox"]') // seleciona todos os inputs do tipo checkbox existentes no html.
    const deletarObjetos = document.querySelectorAll(".deletar"); // Referenciando o icone de lixeira para excluir os itens pela classe.

    inputsCheck.forEach(check => {
        check.addEventListener('click', (item) => {
            const idxItem = (item.target.parentElement.parentElement).getAttribute('data-value'); // Pega o index do objeto armazenada na tag <li>
            listaDeItens[idxItem].check = item.target.checked; // Altera o valor da propriedade check a partir do index especificado, de acordo com o clique do usuário...
            mostrarItem(); // Faz com que o item ao ter a caixa clicada, ele mude no HTML a visualização.  
        });
    });

    deletarObjetos.forEach(btn => {
        btn.addEventListener('click', (item) => {
            const idxItem = (item.target.parentElement.parentElement).getAttribute('data-value'); // Pega o index do objeto armazenada na tag <li>
            listaDeItens.splice(idxItem, 1); // Remove N elementos de uma array a partir de uma posição definida, e se necessário adiciona também.
            mostrarItem(); // Faz com que o item ao ter a caixa clicada, ele mude no HTML a visualização.  
        })
    })
}

// Essa função irá limpar todos os Childs existentes na lista
function limparLista(list) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

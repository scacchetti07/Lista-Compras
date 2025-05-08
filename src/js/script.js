let listaDeItens = []

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

// Não é necessário colocar um id no botão se ele estiver dentro de uma tag form e sendo do tip "submit"
form.addEventListener("submit", adicionarItens)

function adicionarItens(evento) {
    // preventDefault() => faz com que o conteúdo se mantenha no formulário após o clique do botão.
    evento.preventDefault();
    salvarItem();
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
        nomeItem: comprasItem
    });
}

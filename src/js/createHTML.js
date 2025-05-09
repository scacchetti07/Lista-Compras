// Irá criar o HTML da li Lista de Compras pelo JS
export function criarListaDeCompras(itemName, data) {
    // Definindo tags
    const li = document.createElement("li");
    const divItem = document.createElement("div");
    const divRemove = document.createElement("div");
    const inputCheck =  document.createElement("input");
    const inputItem = document.createElement("input");
    const icon = document.createElement("i");
    
    // Definindo a classe ao li
    li.className = "item-compra is-flex is-justify-content-space-between";
    li.dataset.value = data;

    // Definindo atributos ao input
    inputCheck.className = "is-clickable"
    inputCheck.type = "checkbox";

    // Definindo atributos ao inputItem (onde ficará exibido o produto adicionado)
    inputItem.className = "is-size-5";
    inputItem.type = "text";
    inputItem.value = itemName;

    // Definindo icone de exclusão do item
    icon.className = "fa-solid fa-trash is-clickable deletar";

    // Adicionando tags input e span a divItem
    divItem.appendChild(inputCheck);
    divItem.appendChild(inputItem);

    // Adicionando o icone a divRemove
    criarIcones(divRemove); // Icones Editar e Remover
    divRemove.appendChild(icon); // Icone Lixeira

    // Adicionado as divs no li
    li.appendChild(divItem);
    li.appendChild(divRemove);

    // Retornando a li criada
    return li;
}

// Irá criar o HTML da li Comprados pelo JS
export function criarComprados(itemName, data) {
    const li_lista = criarListaDeCompras(itemName, data);
    const span = document.createElement('span');
    const divItem = li_lista.childNodes[0];
    const divRemove = li_lista.childNodes[1];

    // Adicionando classe ao span
    span.className = "itens-comprados is-size-5";
    span.textContent = itemName;

    // Alterando divItem do li
    divItem.removeChild(divItem.lastChild);
    divItem.appendChild(span);
    divItem.firstChild.checked = true;

    // Removendo Icones Editar e Salvar
    divRemove.removeChild(divRemove.firstChild); // Excluí O icone salvar
    divRemove.removeChild(divRemove.firstChild); // Exclui O icone editar


    return li_lista;
}

function criarIcones(container) {

    const iconeSalvar = document.createElement("i");
    const iconeEditar = document.createElement("i");

    iconeSalvar.className = "fa-regular fa-floppy-disk is-clickable salvar";
    iconeEditar.className = "fa-regular is-clickable fa-pen-to-square editar";

    container.appendChild(iconeSalvar);
    container.appendChild(iconeEditar);

    return container;

}
// Função exportada para script.js que armazena os itens adicionados no localstorage do website
export function adicionarNoLocalStorage (list) {
    // método stringfy tranforma a lista de objetos enviada e tranforma em strings JSON
    const varName = Object.keys({list})[0]; // Obtêm o nome da variável em string (semelhante ao nameof)
    localStorage.setItem(varName, JSON.stringify(list)); // setitem coloca o JSON criado no localstorage
}

export function getListaLocalStorage(list) {
    const varName = Object.keys({list})[0]; // Obtêm o nome da variável em string (semelhante ao nameof)
    const listJson = localStorage.getItem(varName)
    if (!listJson) {
        return [];
    }
    
    list = JSON.parse(listJson);
    return list
}

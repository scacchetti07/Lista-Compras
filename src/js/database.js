// Função exportada para script.js que armazena os itens adicionados no localstorage do website
export function adicionarNoLocalStorage (list) {
    // método stringfy tranforma a lista de objetos enviada e tranforma em strings JSON
    localStorage.setItem(`${list}`, JSON.stringify(list)); // setitem coloca o JSON criado no localstorage
}
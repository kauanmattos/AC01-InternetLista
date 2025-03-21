document.getElementById('adicionar').addEventListener('click', function () {
    let inputTarefa = document.getElementById('adicionarTarefa');
    let textoTarefa = inputTarefa.value.trim(); //espaçamento esquerda

    if (textoTarefa === "") return; //caso input vazio

    let lista = document.getElementById('listaTarefa');

    let item = document.createElement('li')
    item.textContent = textoTarefa;

    let btnConcluido = document.createElement('button');
    btnConcluido.textContent = "Concluir";
    btnConcluido.addEventListener('click', function () {
        item.classList.toggle("concluido");
    })

    let btnRemover = document.createElement('button');
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener('click', function () {
        lista.removeChild(item)
    })

    item.appendChild(btnConcluido);
    item.appendChild(btnRemover)
    lista.appendChild(item)

    inputTarefa.value = ""
    inputTarefa.focus();
})
function avisoAlerta(){
    const aviso = document.getElementById('aviso');

    if()


}


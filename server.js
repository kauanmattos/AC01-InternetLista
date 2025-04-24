document.getElementById('adicionar').addEventListener('click', function () { // Obtém o elemento de input onde o usuário digita a tarefa
    let inputTarefa = document.getElementById('adicionarTarefa');  // Obtém o valor digitado, removendo espaços em branco no início e no final
    let textoTarefa = inputTarefa.value.trim(); //espaçamento esquerda

    if (textoTarefa === "") return; //caso input vazio

    let lista = document.getElementById('listaTarefa'); // Obtém a lista não ordenada onde as tarefas serão adicionadas

    // Cria um novo item de lista

    let item = document.createElement('li')
    item.textContent = textoTarefa;

    // Botão Concluir

    let btnConcluido = document.createElement('button');
    btnConcluido.textContent = "Concluir";
    btnConcluido.addEventListener('click', function () {
        item.classList.toggle("concluido");
    })

    // Cria o botão "Remover"

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


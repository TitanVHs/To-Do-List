let listaDeTarefas = document.querySelector('.listaDeTarefas');
let submitButton = document.querySelector('.submitButton');
let input = document.querySelector('.input');
let clearButton = document.querySelector('.clearButton');

submitButton.addEventListener('click', function() {
    //Função que adiciona uma tarefa.
    const inputValue = input.value;
    const li = document.createElement('li');
    li.textContent = inputValue;

    if(inputValue.trim() !== '') {
        listaDeTarefas.append(li);
        clearButton.classList.remove('disabled');
    } else {
        alert('Insira uma tarefa.');
    }

    input.value = '';

    //Função que deleta uma tarefa.
    const span = document.createElement('span');
    span.className = 'close';
    span.innerHTML = '<i class="ri-close-line"></i>';
    li.appendChild(span);
    
    const close = document.getElementsByClassName('close');
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.closest('li');
        div.remove();
        checkTaskList();
      }
    }
});

clearButton.addEventListener('click', function() {
    listaDeTarefas.innerHTML = '';
    clearButton.classList.add('disabled');
});

function checkTaskList() {
    if (listaDeTarefas.children.length === 0) {
        clearButton.classList.add('disabled');
    }
}
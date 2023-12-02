let listaDeTarefas = document.querySelector('.listaDeTarefas');
let submitButton = document.querySelector('.submitButton');
let input = document.querySelector('.input');
let clearButton = document.querySelector('.clearButton');
let tasksAmount = document.querySelector('.tasksAmount');

tasks = 0;

//Função que adiciona um evento de teclado a tecla 'enter'.
input.addEventListener('keydown', function(event) {
    if(event.code === 'Enter') {
        submitTask();
    }
});

//Função que remove todas as tarefas adicionadas.
clearButton.addEventListener('click', function() {
    listaDeTarefas.innerHTML = '';
    clearButton.style.display = 'none';

    tasks = 0;
    tasksAmount.innerHTML = `Tarefas: ${tasks}`;
});

function submitTask() {
    //Função que adiciona uma tarefa.
    const inputValue = input.value;
    const li = document.createElement('li');
    li.innerHTML = `<div>${inputValue}</div>`;

    if(inputValue !== '') {
        listaDeTarefas.append(li);
        clearButton.style.display = 'block';

        tasks++;
        tasksAmount.innerHTML = `Tarefas: ${tasks}`;
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
    for(let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.closest('li');
        div.remove();
        checkTaskList();

        tasks--;
        tasksAmount.innerHTML = `Tarefas: ${tasks}`;
      }
    }

    //Função que marca uma tarefas como concluida.
    li.addEventListener('click', function() {
        const div = li.querySelector('div');
        div.classList.toggle('completed');
    });
};

//Função que checa se a lista de Tarefas está vazia.
function checkTaskList() {
    if (listaDeTarefas.children.length <= 0) {
        clearButton.style.display = 'none';
    }
};
let listaDeTarefas = document.querySelector('.listaDeTarefas');
let input = document.querySelector('.input');
let submitButton = document.querySelector('.submitButton');
let deleteButton = document.querySelector('.deleteButton');
let clearButton = document.querySelector('.clearButton');

function submitItem() {
    if(input.value) {
        let span = document.createElement('span');
        span.innerHTML = `${input.value} <i class="ri-delete-bin-7-line deleteButton"></i>`;

        listaDeTarefas.prepend(span);
    
        input.value = '';

        clearButton.style.display = 'block';
        clearButton.classList.remove('disabled');
    };
};

clearButton.addEventListener('click', function() {
    listaDeTarefas.innerHTML = '';

    clearButton.classList.add('disabled');
});
  
input.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      submitItem();
    }
});
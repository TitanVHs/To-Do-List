let listaDeTarefas = document.querySelector('.listaDeTarefas');
let input = document.querySelector('.input');
let submitButton = document.querySelector('.submitButton');
let deleteButton = document.querySelector('.deleteButton');

let items = [];

function submitItem() {
    if(input.value) {
        let span = document.createElement('span');
        span.innerHTML = `${input.value} <i class="ri-delete-bin-7-line deleteIcon"></i>`;

        items = span;
        listaDeTarefas.prepend(items);
    
        input.value = '';
    };
};

input.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      submitItem();
    }
});


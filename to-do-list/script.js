const inputBox = document.getElementById('input-box');
const btn = document.getElementById('addTodo');
const todoContainer = document.getElementById('todoContainer');


btn.addEventListener('click', () => {
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputBox.value;
    inputBox.value = '';


    todoContainer.appendChild(paragraph);
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = 'line-through';
    })
})
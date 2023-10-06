const inputBox = document.querySelector('.todo-input');
const btnButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-container');
const ulList = document.querySelector('.todo-list');

//addEventListener
btnButton.addEventListener('click', addtoDo);
ulList.addEventListener('click', deleteCheck);

function addtoDo(event) {

    //prevent from submitting
    event.preventDefault();
    //div todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const litoDo = document.createElement('li');
    litoDo.innerText = inputBox.value;
    litoDo.classList.add('todo-item');
    todoDiv.appendChild(litoDo);
    //check mark button

    const completedButton = document.createElement('button');
    //completeButton.innerText = 'iiiiii';
    completedButton.innerHTML =
        `<i class="fa fa-check" aria-hidden="true"></i>
`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    //completeButton.innerText = 'iiiiii';
    trashButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>

`;
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);


    //append to list
    ulList.appendChild(todoDiv);
    //clear input value
    inputBox.value = '';
}
function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn') {
        // item.remove();
        const todo = item.parentElement;
        //animation class fall
        todo.classList.add('fall');
        //todo.remove();
        todo.addEventListener('transitioned',function () {
            todo.remove();
        });
        
    }
    //check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
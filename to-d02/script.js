const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo')

let todos = [];
form.addEventListener('submit', (event) => {
    event.preventDefault();

    saveTodo();
    
});
//saveToDO
function saveTodo() {
    const todoValue = touedoInput.val
}

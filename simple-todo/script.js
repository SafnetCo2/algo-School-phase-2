document.querySelector('#tutotials1').onclick = function () {
    if (document.querySelector('#task').value.length == 0) {
        alert('enter a task');
    } else {
        document.querySelector('#tutorial2').innerHTML += `
            div class ='perform'>
                ${document.querySelector('#task').value}
                <button class="remove">Remove Task
        <i class="far fa-trash-alt"></i>      <button>





                
        `,
        
        
            
            

        

        var current_task = document.querySelectorAll('.remove');
        for (let i = 0; i < current_task.length; i++){
            current_task[i].onclick = function () {
                this.parentNode.removeChild();
            }
            
        }
    }
}
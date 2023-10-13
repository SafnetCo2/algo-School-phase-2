document.querySelector('#tutotials1').onclick = function () {
    if (document.querySelector('#container input').value.length == 0) {
        alert('enter a task');
    } else {
        document.querySelector('#tutorial2').innerHTML += `
        div class ='perform'
        ${document.querySelector('#container input').value
            < button class="remove" >
                Remove Task
                    < i class="far fa-trash-alt" ></ >
      </button >
        
}`
    }
}
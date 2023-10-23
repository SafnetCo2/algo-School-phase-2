const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById('question');
const scoreEl = document.getElementById('score');



const formEl = document.getElementById('form');



let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0;
}
scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `what is ${num1} multipliedby  ${num2}?`;

const inputEl= document.getElementById('input')

const correctAns = num1 * num2;

formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value;
    // console.log(userAns, typeof userAns);
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    

        
    } else {
        score--;
        updateLocalStorage();

    }
});
function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}


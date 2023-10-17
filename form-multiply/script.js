//create a random number 1- 10
const num1 = Math.ceil(Math.random() *10);
const num2 = Math.ceil(Math.random() *10);
//manipulate h1 id question
const question1 = document.getElementById('question');
const inputEl = document.getElementById('input');

const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score')
let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0;
}
scoreEl.innerText = `score : ${score}`
question1.innerText = `whats is ${num1} multiplyby ${num2}?`;
//answer
const correctAns = num1 * num2;

formE1.addEventListener('submit',()=> {
    const userAnswer = +inputEl.value;
    // console.log(userAnswer, typeof userAnswer);
    if (userAnswer === correctAns) {
        score++;
        updateLocalstorage();
    } else {
        score--;
        updateLocalstorage();
    }
    
});
function updateLocalstorage() {
    localStorage.setItem('score', JSON.stringify(score))
}
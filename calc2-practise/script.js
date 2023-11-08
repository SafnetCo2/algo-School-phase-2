const buttonEl = document.querySelector(".buttons");

const inputFieldEl =document.getElementById('.result')

for (let i = 0; i < buttonEl.length; i++){
    buttonEl[i].addEventListener("click", () => {
        const buttonValue = buttonEl[i].textContent;
        if (buttonEl === "C") {
            clearResult()
        } else if (buttonEl === "=") {
            calculateResult()
        } else {
            appendValue(buttonEl);
        }
        
    });
}
function clearResult() {
    
}
function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value)
    
}
function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
    // inputFieldEl.value = inputFieldEl.value + buttonValue;
    
}
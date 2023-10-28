const quote= document.getElementById("quote");
const authorName = document.getElementById('author');
const buttons = document.getElementById('btn');


const url = ('https://dummyjson.com/quotes/random');
let getQ = () => {
    fetch(url)
        .then((res) => res.json())
        
        .then((item) => {
            quote.innerText = item.quote;
        
            authorName.innerText = item.author;
        
        });
};
window.addEventListener('load', getQ);

buttons.addEventListener('click', getQ);


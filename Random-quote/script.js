const paraQuote = document.querySelector('.quote');
const author = document.querySelector('.author');
const authorName = document.querySelector('.name');
const quoteBtn = document.querySelector('button');
//random quote function

function randomQuote() {

        
    // quoteBtn.innerText = 'loading Quote...';
    fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(result => {
        // console.log(result);

        paraQuote.innerText = result.quote;
        
        author.innerText = result.author;
        authorName.innerText = result.name;
        

    

        
        
    });

    
}
window.addEventListener('load', randomQuote);
quoteBtn.addEventListener('click', randomQuote);


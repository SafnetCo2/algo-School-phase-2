const paraQuote = document.querySelector('.quote');
const authorName = document.querySelector('.author .name');
const quoteBtn = document.querySelector('button');
//random quote function

function randomQuote() {
    quoteBtn.classList.add('loading');
        
    quoteBtn.innerText = 'loading Quote...';
    fetch('https://dummyjson.com/quotes').then(res => res.json()).then(result => {
        console.log(result);

        paraQuote.innerText = result.content;
        console.log('paraquote')
        authorName.innerText = result.author;
        console.log(AuthenticatorResponse)
        quoteBtn.innerText = 'New Quote';
        quoteBtn.classList.remove('loading');

        
        
    });

    
}
quoteBtn.addEventListener('click', randomQuote);
//select id authors from the html
const ul = document.getElementById('authors');
//next create  a list  documentfragrament  all appendend items will be added here
const list = DocumentFragment();
//call json placeholder with url as an argument
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => {
        return response.json();
    }).then(data => {



        
        let authors = data;
        authors.map(function (author) {
            //The h2 element will contain the name of the author. The span element will contain the email of the author. The innerHTML property and string interpolation will allow you to do this:
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');
            name.innerHtml = `${author.name}`;
            email.innerHTML = `${author.email}`;
            //Next, connect these DOM elements with appendChild:
            li.appendChild(name);
            li.appendChild(email);
            list.appendChild(li);


        });
        
    })
    .catch(function (err) {
        console.log(err);
    });
ul.appendChild(list);
//Note that each list item is being appended to the DocumentFragment list. Once the map is complete, the list is appended to the ul unordered list element.
//


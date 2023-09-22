
//fetch Application - software Programming Interface-how two softwares communicate 

//pass Fetch Api by
// passing the URL of the  ApI as a paramenter
//fetch Api returns a promise
//after use then()method of promise if its resolved that function with then() method will be excuted
fetch('https://reqres.in/api/users/')
  .then((response) => {
    return response.json();

})
    .then((data) => {
        //For each author in authors, you will want to create a list item that displays their name. The map() method is suited for this pattern:


        let authors = data;
        //Within your map function, create a variable called li that will be set equal to createElement with li (the HTML element) as the argument. Also, create an h2 for name and a span for email:


        authors.map(function (author) {
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');

            // h2 element = name of the author
            //span = email of author
            // innerHtml property and string interpolation will allow you to display name and email
            name.innerHtml = `${author.name}`;
            email.innerHtml = `${author.email}`;

            //Next, connect these DOM elements with appendChild:

            li.appendChild(name);
            li.appendChild(email);
            FileList.appendChild(li);

        });
    })
    .catch(function (error) {
        console.log(error);
    })
//Note that each list item is being appended to the DocumentFragment list. Once the map is complete, the list is appended to the ul unordered list element.
//With both then() functions completed, you can now add the catch() function. This function will log the potential error to the console:




ul.appendChild(list);
//You just successfully performed a GET request using the JSONPlaceholder API and the Fetch API. In the next step, you will perform POST requests.






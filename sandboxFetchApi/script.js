document.getElementById('getText').addEventListener('click', getText);

document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPost);
document.getElementById('addPost').addEventListener('click', addPost);
function getText() {
    // fetch('sample.txt')
    //     .then(function (res) {
    //         return res.text()

    // })
    //     .then(function (data) {
    //         console.log(data);
    //     })
    fetch('sample.txt')
        .then((res) => res.text())
        // .then((data)=>console.log(data))
        .then((data) => {
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err));

}
function getUsers() {
    fetch('user.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Users</h2>';
            //console.log(data);
            data.forEach(function (user) {
                output += `
                <ul class ='list-group mb-4'>
                    <li class='list-group-item w-25 '>ID: ${user.id}</li>
                    <li class='list-group-item w-25'>Name: ${user.name}</li>
                    <li class='list-group-item w-25'>Age': ${user.age}</li>
                    <li class='list-group-item w-25'>Email': ${user.email}</li>
                </ul>
                `;

            });
            document.getElementById('output').innerHTML = output;
        });

}
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h3>Users</h3>';
            data.forEach(function (post) {
                output +=
                    `<div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                    `;
            });
            document.getElementById('output').innerHTML = output;
        });
}
function addPost(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        Headers: {
            'Accept': 'application/json, text/plain,*/* ',
            'Content-type': 'application/json,'
        },
        body: JSON.stringify({ title: title, body: body })


    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}
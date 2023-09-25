// 1. get the api url

const usersApiUrl = 'https://reqres.in/api/users/';

// 2. create a function to dispay data form the api/ map it

function displayUserData(data) {
    if (data.data && Array.isArray(data.data)) {

        //geta Dom container ehere we will display the user data

        const getUserListContainerDiv = document.getElementById('userList');

        // map the users in an array of object name and email
        const userWithEmailAndName = data.data.map(user => ({
            name: `${user.first_name} ${user.last_name}`,
            email: user.email

        }));

        const userListOrderedList = document.createElement('ol');
        getUserListContainerDiv.appendChild(userListOrderedList);

        // lets iterate ama visit the user data and create a list

        userWithEmailAndName.forEach(user => {
            const listItemAsOne = document.createElement('li');
            listItemAsOne.textContent = `${user.name}  ++ ${user.email}`;
            userListOrderedList.appendChild(listItemAsOne);
        });

        console.log(userList + "userlist testing");
    } else {
        console.error("Invalid Json");
    }
}

// 3.use fetch api to get our data in Json format


fetch(usersApiUrl)
    .then(response => {

        if (!response.ok) {
            throw new Error(`HTTPS error : ${response.status}`);

        }

        const responseJson = response.json();

        return responseJson;

    })
    .then(data => {
        // call fucntion to display data in number 2 above

        displayUserData(data);

        console.log(data);

    })

    .catch(error => {
        console.error("fetch Error:" + error);
    })






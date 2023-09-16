//a program that displays text after 3seconds or 3000 miliseconds
// function greet() {
//     console.log('Hello World');
// }
// setTimeout(greet, 3000);
// console.log('This message displays first');

// function greet() {
//     console.log('hello World');
// }
// let intervaLID= setTimeout(greet, 3000);
// console.log('ID' + intervaLID);


//display time every three Time

function showTime() {
    //return current date time
    let dateTime = new Date();
    //returns local time
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    //display time after every 3 seconds
    setTimeout(showTime, 3000);

}
//call showTime function below

showTime();
//hit control + c to terminate the program

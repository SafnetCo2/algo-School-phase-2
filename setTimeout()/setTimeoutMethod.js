// JavaScript setTimeout()is a method that excutes a code after a specified time

// Syntax of setTimeout
// is setTimeout(function, milliseconds)
// parameters
//display a text after 3 seconds
function greet() {
    console.log('Hello World');
}
setTimeout(greet, 3000);
console.log('This will display after 3 seconds');

//Display time after 3 seconds
function showTime() {
    // return new date and time
    let dateTime = new Date();
    // returns the current local time
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    //display the time after 3 seconds
    setTimeout(showTime, 3000);

}
//call the function
showTime();
//hit ctrl + c to exit


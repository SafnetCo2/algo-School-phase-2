//display a text after 3 seconds
// function greet() {
//     console.log('Hello Word');
//     setTimeout(greet, 3000);
// }
// //call the function greet 
// greet();
function showTime() {
    //return new date and time
    let dateTime = new Date();
    //return current time
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    //diplay time after every 3 minutes
    setTimeout(showTime, 3000);
}
//call the function
showTime();
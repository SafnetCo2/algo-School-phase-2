const hourE1 = document.getElementById('hour');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');


function clockUpdate() {
    //get hour using get date constructor
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';
    if (hour > 12) {
        hour = hour - 12
        ampm = 'PM';
        
    }
    //create 00
    hour = hour < 10 ? '0' + hour : hour;
    min = min  < 10 ? '0' + min : min;
    s = s  < 10 ? '0' + s : s;



    hourE1.innerText = hour;
    minutesE1.innerText = min;
    secondsE1.innerText = s;

    setTimeout(() => {
        clockUpdate()
        
    }, 1000);



}
clockUpdate();
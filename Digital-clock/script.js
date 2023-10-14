const hourElements = document.getElementById('hour');
const minutesElements = document.getElementById('minutes');
const secondElements = document.getElementById('seconds');

//function update time
function updateTime() {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getHours();

    let ampm = 'Am'
    if (hour < 12) {
        hour = hour - 12
        ampm = 'PM';
    }
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds: seconds;


    hourElements.innerText = hour;
    minutesElements.innerText = minutes;
    secondElements.innerText = seconds;

    setTimeout(() => {
        updateTime()
    }, 1000);

}
updateTime();
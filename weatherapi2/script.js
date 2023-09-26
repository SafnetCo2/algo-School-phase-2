const apiKey = '431ec2896516f9999a95764a4dee4506';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=london';

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelectorAll('.city').innerHtml = data.name;
    document.querySelectorAll('.temp').innerHtml = data.main.temp;
    document.querySelectorAll('.humidity').innerHtml = data.main.humidity;
    document.querySelectorAll('.wind').innerHtml = data.wind.speed;
}
 checkWeather();
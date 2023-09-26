const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const image = document.querySelector('.icon');


async function getWeather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e00bd881c455a9ddefa89f35634fe82&units=metric`);
    let data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + ''+ '°c';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'km/h';

    if (data.weather[0].main == 'Clouds') {
        image.src = "./assets/clouds.png"
        
    }else if (data.weather[0].main == 'Clear') {
        image.src = "./assets/clear.png"

    } else if (data.weather[0].main == 'Wind') {
        image.src = "./assets/wind.png"

    } else if (data.weather[0].main == 'rain') {
        image.src = "./assets/rains.png"

    } else if (data.weather[0].main == 'Sunny') {
        image.src = "./assets/sunny.png"
    }


}
searchButton.addEventListener('click', () => {
    getWeather(searchInput.value);
});
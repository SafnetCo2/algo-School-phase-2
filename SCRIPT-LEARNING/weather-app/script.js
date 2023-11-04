const apikey = '0e00bd881c455a9ddefa89f35634fe82';
const weatherDataEl = document.getElementById('weather-data');
const cityInputEl = document.getElementById('city-input');

const formEl = document.querySelector('form');


formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;

    getWeatherData(cityValue);


    
});
    async function getWeatherData(cityValue) {
    try {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}& appid=${apikey}&units=metric`);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');

            
            
        }
        const data = await response.json();
        const temperature = Math.round(data.main.temp);
    
    
    
        const description = data.weather[0].description;

        const icon = data.weather[0].icon;

        const details = [
            `feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity:${data.main.humidity}%`, 

            `Wind speed:${data.wind.speed}m/s`,
            
        ]
        weatherDataEl.querySelector('.icon').innerHTML = `<img
          src="https://openweathermap.org/img/wn/${icon}.png"
          alt="weather icon"
        />`;

        weatherDataEl.querySelector('.temperature').textContent = `${temperature}°C`;


        weatherDataEl.querySelector('.description').textContent = description;
        
        weatherDataEl.querySelector('.details').innerHTML = details.map((detail)=>`<div>${detail}</div>`).join("");
        
    } catch (error) {
        weatherDataEl.querySelector('.icon').innerHTML = '';
        weatherDataEl.querySelector('.temperature').textContent = '';
        weatherDataEl.querySelector('.description').textContent = 'an error happened try again';
        weatherDataEl.querySelector('.details').innerHTML = '';
        
    }
    
}


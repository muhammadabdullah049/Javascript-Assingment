// function getWeather() {
//     const apiKey = 'YOUR-API-KEY';
//     const city = document.getElementById('city').value;

//     if (!city) {
//         alert('Please enter a city');
//         return;
//     }

//     const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//     const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

//     fetch(currentWeatherUrl)
//         .then(response => response.json())
//         .then(data => {
//             displayWeather(data);
//         })
//         .catch(error => {
//             console.error('Error fetching current weather data:', error);
//             alert('Error fetching current weather data. Please try again.');
//         });

//     fetch(forecastUrl)
//         .then(response => response.json())
//         .then(data => {
//             displayHourlyForecast(data.list);
//         })
//         .catch(error => {
//             console.error('Error fetching hourly forecast data:', error);
//             alert('Error fetching hourly forecast data. Please try again.');
//         });
// }

// function displayWeather(data) {
//     const tempDivInfo = document.getElementById('temp-div');
//     const weatherInfoDiv = document.getElementById('weather-info');
//     const weatherIcon = document.getElementById('weather-icon');
//     const hourlyForecastDiv = document.getElementById('hourly-forecast');

//     // Clear previous content
//     weatherInfoDiv.innerHTML = '';
//     hourlyForecastDiv.innerHTML = '';
//     tempDivInfo.innerHTML = '';

//     if (data.cod === '404') {
//         weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
//     } else {
//         const cityName = data.name;
//         const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
//         const description = data.weather[0].description;
//         const iconCode = data.weather[0].icon;
//         const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

//         const temperatureHTML = `
//             <p>${temperature}°C</p>
//         `;

//         const weatherHtml = `
//             <p>${cityName}</p>
//             <p>${description}</p>
//         `;

//         tempDivInfo.innerHTML = temperatureHTML;
//         weatherInfoDiv.innerHTML = weatherHtml;
//         weatherIcon.src = iconUrl;
//         weatherIcon.alt = description;

//         showImage();
//     }
// }

// function displayHourlyForecast(hourlyData) {
//     const hourlyForecastDiv = document.getElementById('hourly-forecast');

//     const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

//     next24Hours.forEach(item => {
//         const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
//         const hour = dateTime.getHours();
//         const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
//         const iconCode = item.weather[0].icon;
//         const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

//         const hourlyItemHtml = `
//             <div class="hourly-item">
//                 <span>${hour}:00</span>
//                 <img src="${iconUrl}" alt="Hourly Weather Icon">
//                 <span>${temperature}°C</span>
//             </div>
//         `;

//         hourlyForecastDiv.innerHTML += hourlyItemHtml;
//     });
// }

// function showImage() {
//     const weatherIcon = document.getElementById('weather-icon');
//     weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
// }


// Mock data for temperatures
// Mock data for temperatures



const mockWeatherData = {
    Karachi: { temperature: '32°C' },
    Lahore: { temperature: '30°C' },
    Islamabad: { temperature: '28°C' },
    Quetta: { temperature: '26°C' },
    Murree: { temperature: '18°C' },
    Kashmir: { temperature: '20°C' }
};

function getWeather(city) {
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const loading = document.getElementById('loading');

    // Show loading animation
    loading.classList.remove('hidden');
    cityName.textContent = '';
    temperature.textContent = '';

    // Simulate a network request
    setTimeout(() => {
        // Hide loading animation
        loading.classList.add('hidden');

        // Update the DOM with the weather data
        cityName.textContent = city;
        temperature.textContent = `Temperature: ${mockWeatherData[city].temperature}`;
    }, 1000);
}

// app.js
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const locationInput = document.getElementById('location-input');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const location = locationInput.value;
        fetchWeather(location);
    });
});

function fetchWeather(location) {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '591fd7d084ff7cf1995d387b021e364e';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                displayError("Location not found");
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            displayError("An error occurred. Please try again later.");
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

function displayError(message) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `<p>${message}</p>`;
}

// app.js
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const locationInput = document.getElementById('location-input');
 
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const location = locationInput.value;
        // Dynamically navigate to the results page with the location as a query parameter
        window.location.href = `results.html?location=${location}`;
    });
 });
 
const apiKey = '9939c1b10e1152bc477dbd7d13794055';

function searchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
            addToSearchHistory(city);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>${data.name}</h2>
                             <p>Date: ${new Date().toLocaleDateString()}</p>
                             <p>Temperature: ${data.main.temp}°C</p>
                             <p>Humidity: ${data.main.humidity}%</p>
                             <p>Wind Speed: ${data.wind.speed} m/s</p>`;
}

function addToSearchHistory(city) {
    const searchHistory = document.getElementById('searchHistory');
    const listItem = document.createElement('li');
    listItem.textContent = city;
    listItem.onclick = function() {
        document.getElementById('cityInput').value = city;
        searchWeather();
    };
    searchHistory.appendChild(listItem);
}

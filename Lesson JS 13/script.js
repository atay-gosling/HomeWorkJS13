function fetchWeatherData() {
    const userCityInput = document.getElementById("cityInput").value;
    const weatherApiKey = "30fa9a95b3384de6b8a173631233007";

    fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${userCityInput}`)
        .then(response => response.json())
        .then(weatherInfo => {
            const cityName = weatherInfo.location.name;
            const countryName = weatherInfo.location.country;
            const temperature = weatherInfo.current.temp_c;

            const resultDisplay = `City: ${cityName}<br>Country: ${countryName}<br>Temperature: ${temperature}°C`;

            document.getElementById("result").innerHTML = resultDisplay;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("result").innerHTML = "Error: Unable to retrieve weather data for the specified city";
        });
}

document.getElementById("searchButton").addEventListener("click", fetchWeatherData);

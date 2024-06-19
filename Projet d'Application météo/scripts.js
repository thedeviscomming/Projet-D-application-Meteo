document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY';
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    const fetchWeather = async (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        try {
            const response = await fetch(apiUrl);
            const weatherData = await response.json();
            console.log(weatherData);

            const { name, main, weather } = weatherData;
            locationElement.textContent = name;
            temperatureElement.textContent = `${Math.round(main.temp)}°C`;
            descriptionElement.textContent = weather[0].description;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            locationElement.textContent = 'Error fetching weather';
        }
    };

    // Initial load with a default city
    fetchWeather('London');
});

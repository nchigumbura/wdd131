async function fetchWeather() {
    const apiKey = '366bacba3ed9293cef031728820dab63';
    try {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=Harare`);
        const data = await response.json();

        if (response.ok && data.current) {
            document.getElementById('temperature').textContent = `Temperature: ${data.current.temperature}°C`;
            document.getElementById('condition').textContent = `Condition: ${data.current.weather_descriptions[0]}`;
            const weatherCondition = data.current.weather_descriptions[0].toLowerCase();
            const iconElement = document.getElementById('weather-icon');

            if (weatherCondition.includes('sun') || weatherCondition.includes('clear')) {
                iconElement.textContent = '☀️';
            } else if (weatherCondition.includes('cloud')) {
                iconElement.textContent = '☁️';
            } else if (weatherCondition.includes('rain')) {
                iconElement.textContent = '🌧️';
            } else if (weatherCondition.includes('storm')) {
                iconElement.textContent = '⛈️';
            } else if (weatherCondition.includes('snow')) {
                iconElement.textContent = '❄️';
            } else {
                iconElement.textContent = '🌈';
            }
        } else {
            document.getElementById('temperature').textContent = 'Unable to fetch weather data.';
            document.getElementById('condition').textContent = '';
            document.getElementById('weather-icon').textContent = '❓';
        }
    } catch (error) {
        document.getElementById('temperature').textContent = 'Error fetching weather!';
        document.getElementById('condition').textContent = '';
        document.getElementById('weather-icon').textContent = '❓';
    }
}

const images = [
    'https://nyati-travel.com/wp-content/uploads/2014/01/harare-city-scene.jpg',
    'https://answersafrica.com/wp-content/uploads/2016/05/mana-pools-zimbabwe-1.jpg',
    'https://i.pinimg.com/originals/3b/fb/0f/3bfb0f3b5235a1dabe414c4697e10810.jpg',
    'https://i.pinimg.com/originals/c4/b2/bd/c4b2bd1f47bd0be3740cf8b6fee698d0.jpg',
    'https://i.pinimg.com/originals/83/d0/81/83d081e39d408000bc10259f5bfe29fc.jpg',
    'https://lp-cms-production.imgix.net/2019-06/95646472_full.jpg'
];

let currentIndex = 0;

function displaySlideshow() {
    const slideshowContainer = document.getElementById('slideshow-images');
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.alt = 'Image of Harare';
    img.style.width = '100%';
    img.style.borderRadius = '15px';
    slideshowContainer.innerHTML = '';
    slideshowContainer.appendChild(img);
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(displaySlideshow, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    displaySlideshow();
});

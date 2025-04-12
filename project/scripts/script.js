async function fetchWeather() {
    const apiKey = '366bacba3ed9293cef031728820dab63';
    try {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=Harare`);
        const data = await response.json();

        if (response.ok && data.current) {
            const temperatureElement = document.getElementById('temperature');
            const conditionElement = document.getElementById('condition');
            const iconElement = document.getElementById('weather-icon');

            if (temperatureElement && conditionElement && iconElement) {
                temperatureElement.textContent = `Temperature: ${data.current.temperature}°C`;
                conditionElement.textContent = `Condition: ${data.current.weather_descriptions[0]}`;
                const weatherCondition = data.current.weather_descriptions[0].toLowerCase();
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
            }
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

const homePageImages = [
    "https://nyati-travel.com/wp-content/uploads/2014/01/harare-city-scene.jpg",
    "https://answersafrica.com/wp-content/uploads/2016/05/mana-pools-zimbabwe-1.jpg",
    "https://lp-cms-production.imgix.net/2019-06/95646472_full.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b4/83/24/caption.jpg?w=1400&h=800&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/25/92/6a/balancing-rocks.jpg?w=1800&h=1000&s=1"
];

function displayHomePageSlideshow(containerId, images) {
    let currentIndex = 0;

    function changeSlide() {
        const container = document.getElementById(containerId);
        if (container) {
            const img = document.createElement("img");
            img.src = images[currentIndex];
            img.alt = `Slideshow Image ${currentIndex + 1}`;
            img.style.width = "100%";
            img.style.borderRadius = "15px";
            img.style.transition = "opacity 1s ease-in-out";

            container.innerHTML = "";
            container.appendChild(img);
            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    setInterval(changeSlide, 5000);
    changeSlide();
}

const attractions = [
    {
        name: "National Gallery of Zimbabwe",
        description: "Explore exquisite collections of Zimbabwean art and internationally curated exhibitions that celebrate the country's vibrant cultural heritage.",
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b4/83/24/caption.jpg?w=1400&h=800&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b4/83/20/caption.jpg?w=1400&h=-1&s=1",
            "https://news-images.s3.amazonaws.com/wp-content/uploads/2017/05/GPJNews_Zimbabwe_Art.jpg"
        ]
    },
    {
        name: "Harare Botanical Gardens",
        description: "A serene retreat bursting with vibrant colors! Wander through fragrant paths surrounded by indigenous and exotic plants.",
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/fb/6b/07/trees.jpg?w=1100&h=600&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/fb/9b/55/flowers.jpg?w=1400&h=800&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/06/c5/52/photo0jpg.jpg?w=1800&h=1000&s=1"
        ]
    },
    {
        name: "Mukuvisi Woodlands",
        description: "Discover wildlife like zebras and giraffes, and immerse yourself in the serenity of nature's beauty at this woodland sanctuary.",
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/a9/2e/20180407-173928-largejpg.jpg?w=1100&h=700&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/e7/7f/b1/caption.jpg?w=1400&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/de/88/60/restaurant-dining-area.jpg?w=1400&h=-1&s=1"
        ]
    }
];

const recommendations = [
    {
        name: "Victoria 22",
        description: "A fine dining restaurant offering exquisite European and Zimbabwean dishes in a serene setting.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/30/ef/0e/al-fresco-dining.jpg?w=1800&h=1000&s=1"
    },
    {
        name: "Avondale Flea Market",
        description: "A vibrant marketplace for unique crafts, fresh produce, and local goods.",
        image: "https://images.myguide-cdn.com/zimbabwe/companies/avondale-flea-market/large/avondale-flea-market-458589.jpg"
    },
    {
        name: "Paintball Blitz",
        description: "An adrenaline-pumping outdoor adventure perfect for thrill-seekers and team bonding.",
        image: "https://www.discoverweld.com/files/sharedassets/discoverweld/v/2/images/attractions/gettyimages-182177879_paintball_web.jpg?dimension=pageimage&w=480"
    },
    {
        name: "Gallery Delta",
        description: "An artsy hub showcasing Zimbabwe's contemporary paintings, sculptures, and installations.",
        image: "http://gallerydelta.com/wp-content/uploads/2013/08/2_eric_hand_fs.jpg"
    }
];

function renderAttractions() {
    const attractionsContainer = document.getElementById("attractions-container");
    if (!attractionsContainer) return;

    attractions.forEach(attraction => {
        const attractionDiv = document.createElement("div");
        attractionDiv.className = "attraction";

        const title = document.createElement("h3");
        title.textContent = attraction.name;
        attractionDiv.appendChild(title);

        const description = document.createElement("p");
        description.textContent = attraction.description;
        attractionDiv.appendChild(description);

        const slideshowContainer = document.createElement("div");
        slideshowContainer.id = `slideshow-${attraction.name.replace(/\s+/g, '-')}`;
        slideshowContainer.className = "slideshow images";
        attractionDiv.appendChild(slideshowContainer);

        attractionsContainer.appendChild(attractionDiv);
        displaySlideshow(slideshowContainer.id, attraction.images);
    });
}

function renderRecommendations() {
    const recommendationsContainer = document.getElementById("recommendations-container");
    if (!recommendationsContainer) return;

    recommendations.forEach(recommendation => {
        const recommendationDiv = document.createElement("div");
        recommendationDiv.className = "recommendation";

        const img = document.createElement("img");
        img.src = recommendation.image;
        img.alt = recommendation.name;
        recommendationDiv.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = recommendation.name;
        recommendationDiv.appendChild(title);

        const description = document.createElement("p");
        description.textContent = recommendation.description;
        recommendationDiv.appendChild(description);

        recommendationsContainer.appendChild(recommendationDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchWeather();
    renderAttractions();
    renderRecommendations();

    const slideshowContainerId = "slideshow-images"; // Ensure this ID exists in your HTML
    displayHomePageSlideshow(slideshowContainerId, homePageImages);
});

function displaySlideshow(containerId, images) {
    let currentIndex = 0;

    function changeSlide() {
        const container = document.getElementById(containerId);
        if (container) {
            const img = document.createElement("img");
            img.src = images[currentIndex];
            img.alt = `Slideshow Image ${currentIndex + 1}`;
            img.style.width = "100%";
            img.style.borderRadius = "15px";
            img.style.transition = "opacity 1s ease-in-out";

            container.innerHTML = "";
            container.appendChild(img);
            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    setInterval(changeSlide, 5000);
    changeSlide();
}

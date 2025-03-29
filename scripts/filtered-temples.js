const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = document.lastModified;

const menuButton = document.querySelector(".hamburger-button");
const navMenu = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
  menuButton.textContent = navMenu.classList.contains("visible") ? "X" : "☰";
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fortaleza Brazil Temple",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg" 
  },
  {
    templeName: "Dallas Texas Temple",
    location: "Dallas, Texas, United States",
    dedicated: "1984, October, 24",
    area: 44207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
  },
  {
    templeName: "Hamilton New Zealand Temple",
    location: "Hamilton, New Zealand",
    dedicated: "1958, April, 22",
    area: 45251,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg"  
  },
];

const container = document.getElementById("temples-container");

function displayTemples(templeArray) {
  container.innerHTML = ""; // Clear any existing content

  templeArray.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");


   card.innerHTML = `
     <h3>${temple.templeName}</h3>
     <p>Location: ${temple.location}</p>
     <p>Dedicated: ${temple.dedicated}</p>
     <p>Area: ${temple.area.toLocaleString()} sq ft</p>
     <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

//display all temples
displayTemples(temples);

function filterTemples(criteria) {
  let filteredTemples;

  if (criteria === "Old") {
    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  } else if (criteria === "New") {
    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  } else if (criteria === "Large") {
    filteredTemples = temples.filter(temple => temple.area > 90000);
  } else if (criteria === "Small") {
    filteredTemples = temples.filter(temple => temple.area < 10000);
  } else {
    filteredTemples = temples; //shows all temples (Home)
  }

  displayTemples(filteredTemples);
}

document.getElementById("home").addEventListener("click", () => filterTemples("Home"));
document.getElementById("old").addEventListener("click", () => filterTemples("Old"));
document.getElementById("new").addEventListener("click", () => filterTemples("New"));
document.getElementById("large").addEventListener("click", () => filterTemples("Large"));
document.getElementById("small").addEventListener("click", () => filterTemples("Small"));


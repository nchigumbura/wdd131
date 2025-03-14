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

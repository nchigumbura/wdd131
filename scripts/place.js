const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
  return Math.round(
    13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
  );
}

const temp = 10;
const windSpeed = 5;

if (temp <= 10 && windSpeed > 4.8) {
  document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed) + " °C";
} else {
  document.getElementById("windchill").textContent = "N/A";
}
